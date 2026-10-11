#!/usr/bin/env python3
"""Tạo js/data.js từ data/events.json. CHẠY TAY khi sửa nội dung, không cần cron.

- Năm có `source.api` (hiện là 2026): TRÌNH DUYỆT gọi trực tiếp API CMS Dân Việt, đúng thứ tự
  biên tập sắp trong chủ đề; danh sách bài trong data.js chỉ là bản DỰ PHÒNG khi API lỗi/chậm.
- Các năm khác: dữ liệu TĨNH — danh sách bài cố định trong js/data.js, giữ nguyên qua mỗi lần build.
js/data.js còn chứa nội dung viết tay từng năm (tên, mô tả, ngày, địa điểm, số liệu, ảnh bìa, link…).

Cách dùng:
    python3 scripts/build_data.py            # sau khi sửa data/events.json
    python3 scripts/build_data.py --refresh  # (tuỳ chọn) chụp lại bài mới nhất từ API làm bản dự phòng (năm có api)

Biến môi trường OUTPUT_DIR: thư mục web, script ghi {OUTPUT_DIR}/js/data.js (mặc định: thư mục dự án).
Chỉ dùng thư viện chuẩn của Python.
"""
import json
import os
import re
import sys
import tempfile
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
EVENTS_JSON = ROOT / "data" / "events.json"
DATA_JS = Path(os.environ.get("OUTPUT_DIR") or ROOT) / "js" / "data.js"
UA = {"User-Agent": "Mozilla/5.0 (landing-page build)"}


def write_atomic(path, text):
    """Ghi ra file tạm rồi đổi tên một lần: người xem không bao giờ nhận file ghi dở."""
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, tmp = tempfile.mkstemp(dir=path.parent, prefix=f".{path.name}.", suffix=".tmp")
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            f.write(text)
        os.chmod(tmp, 0o644)
        os.replace(tmp, path)
    except BaseException:
        if os.path.exists(tmp):
            os.remove(tmp)
        raise


def load_previous():
    if not DATA_JS.exists():
        return {}
    s = DATA_JS.read_text(encoding="utf-8")
    k = "window.EVENTS = "
    if k not in s:
        return {}
    return {e["year"]: e for e in json.loads(s[s.index(k) + len(k):].rstrip().rstrip(";"))}


def api_page_url(api_url, n):
    """https://danviet.vn/api/chu-de/<id> (trang 1), .../<id>/p<n> (trang n); dạng khác dùng ?page=<n>."""
    if re.search(r"/api/chu-de/\d+/?$", api_url):
        return api_url if n == 1 else api_url.rstrip("/") + f"/p{n}"
    return f"{api_url}{'&' if '?' in api_url else '?'}page={n}"


def fetch_api(api_url):
    """Lấy toàn bộ bài của 1 chủ đề qua API CMS (20 bài/trang) — chỉ dùng với --refresh."""
    items, page, total_pages = [], 1, 1
    while page <= total_pages and page <= 50:
        req = urllib.request.Request(api_page_url(api_url, page), headers=UA)
        with urllib.request.urlopen(req, timeout=30) as r:
            data = json.loads(r.read().decode("utf-8"))
        if not data.get("success"):
            raise RuntimeError(str(data)[:200])
        total_pages = int(data.get("total_pages") or 0)
        for a in data.get("data") or []:
            items.append({"id": str(a["id"]), "title": a["title"], "url": a["link"],
                          "img": a.get("image") or "", "sapo": a.get("sapo") or "", "location": "", "date": ""})
        page += 1
        time.sleep(0.3)
    return items


def build_event(meta, articles):
    ev = {k: v for k, v in meta.items() if k not in ("source", "special")}
    if meta.get("special"):
        ev["special"] = True
    if meta["source"].get("api"):
        ev["api"] = meta["source"]["api"]  # trình duyệt gọi trực tiếp; articles = bản dự phòng
    ev["articles"] = articles
    ev["articleCount"] = len(articles)
    ev["stats"] = [dict(s, value=len(articles)) if s["value"] == "$count" else s for s in meta["stats"]]
    ev["featured"] = []
    return ev


def main():
    refresh = "--refresh" in sys.argv[1:]
    cfg = json.loads(EVENTS_JSON.read_text(encoding="utf-8"))
    previous = load_previous()
    events = []

    for meta in cfg["events"]:
        year = meta["year"]
        articles = (previous.get(year) or {}).get("articles", [])
        if refresh and meta["source"].get("api"):
            try:
                fresh = fetch_api(meta["source"]["api"])
                if fresh:
                    articles = fresh
                else:
                    print(f"[{year}] chủ đề chưa có bài -> giữ {len(articles)} bài dự phòng")
            except Exception as e:
                print(f"[{year}] ! không gọi được API ({e}) -> giữ {len(articles)} bài dự phòng")
        kind = "API (trình duyệt gọi) + bản dự phòng" if meta["source"].get("api") else "tĩnh"
        print(f"[{year}] {kind}: {len(articles)} bài")
        events.append(build_event(meta, articles))

    header = (
        "/**\n"
        " * TỰ ĐỘNG TẠO bởi scripts/build_data.py — không sửa tay file này.\n"
        " * Sửa nội dung từng năm ở data/events.json rồi chạy lại script.\n"
        " * Năm có `api`: trình duyệt lấy bài trực tiếp từ API CMS, `articles` là bản dự phòng.\n"
        " * Các năm khác: `articles` là danh sách bài tĩnh.\n"
        " */\n"
    )
    out = (header + "window.SITE = " + json.dumps(cfg["site"], ensure_ascii=False, indent=4) + ";\n\n"
           + "window.EVENTS = " + json.dumps(events, ensure_ascii=False, indent=2) + ";\n")
    write_atomic(DATA_JS, out)
    print(f"Đã ghi {DATA_JS}")


if __name__ == "__main__":
    main()
