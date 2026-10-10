#!/usr/bin/env python3
"""Cập nhật js/data.js từ các chủ đề (channel) trên Báo Điện tử Dân Việt.

- Nội dung viết tay của từng năm (tên, mô tả, số liệu, ảnh bìa, nguồn bài) ở data/events.json.
- Năm có `source.channel`: lấy bài đúng thứ tự trong chủ đề (= thứ tự biên tập sắp trong CMS).
- Năm chưa có chủ đề: gom theo tag Dân Việt rồi lọc theo cụm từ trong tiêu đề, mới nhất trước.
- Mục "Tiêu điểm sự kiện" đang tắt (FEATURED_COUNT = 0). Bật lại: tiêu điểm = N bài đầu chủ đề,
  dòng nổi bật trên ảnh lấy từ `highlights` (viết tay), không có thì là ngày đăng.
- An toàn: năm nào lấy được 0 bài hoặc < 50% lần trước thì giữ nguyên dữ liệu cũ của năm đó.

Chỉ dùng thư viện chuẩn. Chạy: python3 scripts/update_data.py

Biến môi trường (tuỳ chọn, dùng khi chạy trên server):
- OUTPUT_DIR: thư mục web chứa trang; script ghi {OUTPUT_DIR}/js/data.js. Mặc định: thư mục dự án.
- CACHE_FILE: file cache thông tin bài viết. Mặc định: data/article-cache.json trong dự án.
"""
import html
import json
import os
import re
import sys
import time
import unicodedata
import urllib.parse
import urllib.request
from pathlib import Path
import tempfile

ROOT = Path(__file__).resolve().parent.parent
EVENTS_JSON = ROOT / "data" / "events.json"
CACHE_JSON = Path(os.environ.get("CACHE_FILE") or ROOT / "data" / "article-cache.json")
DATA_JS = Path(os.environ.get("OUTPUT_DIR") or ROOT) / "js" / "data.js"

BASE = "https://danviet.vn"
UA = {"User-Agent": "Mozilla/5.0 (landing-page data updater)"}
FEATURED_COUNT = 0  # khách bỏ mục "Tiêu điểm sự kiện"; đặt lại 3 nếu muốn hiện lại
DELAY = 0.3  # giây giữa các request, tránh dồn tải lên máy chủ báo


# ------------------------------------------------------------------ tiện ích
def write_atomic(path, text):
    """Ghi ra file tạm cùng thư mục rồi đổi tên một lần:
    người đang mở trang không bao giờ nhận file ghi dở."""
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, tmp = tempfile.mkstemp(dir=path.parent, prefix=f".{path.name}.", suffix=".tmp")
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            f.write(text)
        os.chmod(tmp, 0o644)  # web server cần đọc được
        os.replace(tmp, path)
    except BaseException:
        if os.path.exists(tmp):
            os.remove(tmp)
        raise


def get(url, retries=3):
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.read().decode("utf-8", "replace")
        except Exception as e:  # mạng chập chờn: thử lại
            if attempt == retries - 1:
                raise
            print(f"  thử lại {url}: {e}")
            time.sleep(2 * (attempt + 1))


def clean(t):
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", t or ""))).strip()


def norm(t):
    return re.sub(r"\s+", " ", unicodedata.normalize("NFC", t)).strip().lower()


def vn_date(iso):
    return f"{iso[8:10]}/{iso[5:7]}/{iso[:4]}" if iso else ""


def url_date(url):
    # Link kiểu cũ có mốc thời gian: ...-20220929164404324.htm
    m = re.search(r"-(20\d{2})(\d{2})(\d{2})\d{6,}(?:-d\d+)?\.html?$", url)
    return f"{m.group(1)}-{m.group(2)}-{m.group(3)}" if m else ""


def article_id(url):
    m = re.search(r"-d(\d+)\.html?$", url) or re.search(r"-(\d{14,})\.html?$", url)
    return m.group(1) if m else url


# ------------------------------------------------------------------ lấy bài từ chủ đề
def parse_channel_cards(chunk):
    out = []
    starts = [m.start() for m in re.finditer(r'<div class="home-article[^"]*"\s+id-news-channel="\d+"', chunk)]
    starts.append(len(chunk))
    for a, b in zip(starts, starts[1:]):
        block = chunk[a:b]
        aid = re.search(r'id-news-channel="(\d+)"', block).group(1)
        link = re.search(r'<h3[^>]*>\s*<a href="([^"]+)"[^>]*title="([^"]*)"', block)
        if not link:
            continue
        img = re.search(r'<img[^>]+src="([^"]+)"', block)
        des = re.search(r'<p class="article-des[^"]*"[^>]*>(.*?)</p>', block, re.S)
        out.append({"id": aid, "url": link.group(1), "title": clean(link.group(2)),
                    "img": img.group(1) if img else "", "sapo": clean(des.group(1)) if des else ""})
    return out


def fetch_channel(cid):
    page_html = get(f"{BASE}/x-channel{cid}/")
    if 'id="list_channel_loadmore"' not in page_html:
        raise RuntimeError(f"chủ đề {cid}: không thấy danh sách bài (giao diện đổi?)")
    seen, items = set(), []

    # Khối bài nổi bật đầu trang (markup khác danh sách chính)
    top = page_html[page_html.find("<main"):page_html.index('id="list_channel_loadmore"')]
    for m in re.finditer(r'<a href="(https://danviet\.vn/[^"]+-d(\d+)\.html)"[^>]*title="([^"]*)"', top):
        if m.group(2) in seen:
            continue
        seen.add(m.group(2))
        img = re.search(r'<img[^>]+src="([^"]+)"', top[m.start():m.start() + 1500])
        items.append({"id": m.group(2), "url": m.group(1), "title": clean(m.group(3)),
                      "img": img.group(1) if img else "", "sapo": ""})

    main_list = page_html[page_html.index('id="list_channel_loadmore"'):]
    if "loadMoreBtn" in main_list:
        main_list = main_list[:main_list.find("loadMoreBtn")]
    for c in parse_channel_cards(main_list):
        if c["id"] not in seen:
            seen.add(c["id"]); items.append(c)

    # Nút "Xem thêm" của Dân Việt: /loadmoreiframe/loadmorechannel/{id}-{trang}-{id bài cuối}-{số tháng}/
    page = 1
    while page < 40 and items:
        page += 1
        chunk = get(f"{BASE}/loadmoreiframe/loadmorechannel/{cid}-{page}-{items[-1]['id']}-120/")
        cards = [c for c in parse_channel_cards(chunk) if c["id"] not in seen]
        if not cards:
            break
        for c in cards:
            seen.add(c["id"]); items.append(c)
        time.sleep(DELAY)
    return items


# ------------------------------------------------------------------ gom bài theo tag (năm chưa có chủ đề)
def parse_search(chunk):
    out = []
    starts = [m.start() for m in re.finditer(r'<div class="home-article onesearch_bt"', chunk)] + [len(chunk)]
    for a, b in zip(starts, starts[1:]):
        block = chunk[a:b]
        date = re.search(r'data-date="([^"]+)"', block)
        link = re.search(r'<h3[^>]*>\s*<a href="([^"]+)"[^>]*title="([^"]*)"', block)
        if not link:
            continue
        img = re.search(r'<img[^>]+src="([^"]+)"', block)
        des = re.search(r'<p class="article-des[^"]*"[^>]*>(.*?)</p>', block, re.S)
        out.append({"id": article_id(link.group(1)), "url": link.group(1), "title": clean(link.group(2)),
                    "img": img.group(1) if img else "", "sapo": clean(des.group(1)) if des else "",
                    "published": date.group(1)[:10] if date else ""})
    return out


def fetch_by_tags(source):
    patterns = [re.compile(p) for p in source["titlePatterns"]]
    since = source.get("since", "2000-01-01")
    found = {}
    for kw in source["tags"]:
        slug = urllib.parse.quote(kw.replace(" ", "+"), safe="+")
        items = parse_search(get(f"{BASE}/{slug}-tag/"))
        page = 1
        while page < 80:
            page += 1
            more = parse_search(get(f"{BASE}/loadmoreiframe/loadmoresearch/{urllib.parse.quote(kw)}-{page}/"))
            if not more:
                break
            items += more
            if more[-1]["published"] and more[-1]["published"] < since:
                break  # kết quả xếp mới -> cũ: đã qua mốc
            time.sleep(DELAY)
        for it in items:
            if any(p.search(norm(it["title"])) for p in patterns) and it["id"] not in found:
                found[it["id"]] = it
        print(f"  tag {kw!r}: {len(items)} kết quả, khớp tích luỹ {len(found)}")
    return sorted(found.values(), key=lambda x: x["published"], reverse=True)


# ------------------------------------------------------------------ bổ sung ngày đăng / sapo / ảnh
def enrich(items, cache):
    for it in items:
        c = cache.get(it["id"], {})
        if it.get("published"):
            c.setdefault("date", it["published"])
        if not c.get("date") or not (it["sapo"] or c.get("sapo")) or not (it["img"] or c.get("img")):
            if not c.get("fetched"):
                try:
                    page = get(it["url"])
                    m = re.search(r'article:published_time" content="(\d{4}-\d{2}-\d{2})', page)
                    c["date"] = c.get("date") or (m.group(1) if m else "")
                    m = re.search(r'<meta name="description" content="([^"]*)"', page)
                    c["sapo"] = c.get("sapo") or (clean(m.group(1)) if m else "")
                    m = re.search(r'<meta property="og:image" content="([^"]*)"', page)
                    c["img"] = c.get("img") or (m.group(1) if m else "")
                    c["fetched"] = True
                except Exception as e:
                    print(f"  ! không đọc được bài {it['id']}: {e}")
                time.sleep(DELAY)
        c["date"] = c.get("date") or url_date(it["url"])
        cache[it["id"]] = c
        it["sapo"] = it["sapo"] or c.get("sapo", "")
        it["img"] = it["img"] or c.get("img", "")
        it["date"] = vn_date(c["date"])


# ------------------------------------------------------------------ dựng dữ liệu
def load_previous():
    if not DATA_JS.exists():
        return {}
    s = DATA_JS.read_text(encoding="utf-8")
    k = "window.EVENTS = "
    if k not in s:
        return {}
    return {e["year"]: e for e in json.loads(s[s.index(k) + len(k):].rstrip().rstrip(";"))}


def source_key(src):
    return f"channel:{src['channel']}" if src.get("channel") else "tags"


def build_event(meta, articles, highlights):
    ev = {k: v for k, v in meta.items() if k not in ("source", "special")}
    ev["sourceKey"] = source_key(meta["source"])
    if meta.get("special"):
        ev["special"] = True
    ev["articles"] = [{
        "id": a["id"], "title": a["title"], "url": a["url"], "img": a["img"], "sapo": a["sapo"],
        "location": "", "date": a["date"],
    } for a in articles]
    ev["articleCount"] = len(articles)
    ev["stats"] = [dict(s, value=len(articles)) if s["value"] == "$count" else s for s in meta["stats"]]
    ev["featured"] = []
    for a in ev["articles"][:FEATURED_COUNT]:
        h = highlights.get(a["id"], {})
        ev["featured"].append({"tag": h.get("tag", ""), "highlight": h.get("highlight", a["date"]),
                               "title": a["title"], "sapo": a["sapo"], "img": a["img"], "url": a["url"]})
    return ev


def main():
    cfg = json.loads(EVENTS_JSON.read_text(encoding="utf-8"))
    cache = json.loads(CACHE_JSON.read_text(encoding="utf-8")) if CACHE_JSON.exists() else {}
    previous = load_previous()
    events, problems = [], []

    for meta in cfg["events"]:
        year, src = meta["year"], meta["source"]
        print(f"[{year}] " + (f"chủ đề {src['channel']}" if src.get("channel") else "gom theo tag"))
        try:
            items = fetch_channel(src["channel"]) if src.get("channel") else fetch_by_tags(src)
        except Exception as e:
            items = []
            print(f"  ! lỗi khi lấy bài: {e}")

        prev = previous.get(year)
        prev_count = len(prev["articles"]) if prev else 0
        # Vừa đổi nguồn (vd. từ gom theo tag sang chủ đề mới): số bài khác hẳn là bình thường,
        # chỉ giữ dữ liệu cũ khi nguồn mới chưa có bài nào.
        same_source = prev is not None and prev.get("sourceKey") == source_key(src)
        if not items or (same_source and prev_count and len(items) < prev_count * 0.5):
            msg = f"{year}: lấy được {len(items)} bài (lần trước {prev_count}) -> giữ bài cũ"
            print("  ! " + msg)
            problems.append(msg)
            if prev:
                # Giữ danh sách bài + link của nguồn cũ; nội dung khác vẫn theo data/events.json
                ev = build_event(meta, prev["articles"], cfg.get("highlights", {}))
                ev["sourceKey"] = prev.get("sourceKey", "")
                if not same_source:
                    ev["link"] = prev.get("link", ev.get("link"))
                events.append(ev)
            continue

        enrich(items, cache)
        events.append(build_event(meta, items, cfg.get("highlights", {})))
        print(f"  {len(items)} bài")

    header = (
        "/**\n"
        " * TỰ ĐỘNG TẠO bởi scripts/update_data.py — không sửa tay file này.\n"
        " * Sửa nội dung từng năm ở data/events.json; bài viết lấy từ các chủ đề trên Dân Việt.\n"
        " */\n"
    )
    out = (header + "window.SITE = " + json.dumps(cfg["site"], ensure_ascii=False, indent=4) + ";\n\n"
           + "window.EVENTS = " + json.dumps(events, ensure_ascii=False, indent=2) + ";\n")
    write_atomic(DATA_JS, out)
    write_atomic(CACHE_JSON, json.dumps(cache, ensure_ascii=False, indent=0, sort_keys=True) + "\n")
    print(f"Đã ghi {DATA_JS}")

    for e in events:
        print(f"{e['year']}: {len(e['articles'])} bài")
    for p in problems:
        # Hiện cảnh báo trên GitHub Actions
        print(f"::warning::{p}")


if __name__ == "__main__":
    sys.exit(main())
