# Hướng dẫn chạy landing page trên server riêng

Trang là **web tĩnh** (HTML/CSS/JS), không cần Node, PHP hay database.
Danh sách bài báo được một script Python lấy từ các chủ đề trên Báo Điện tử Dân Việt
rồi ghi vào `js/data.js`. Trên server, script này chạy định kỳ bằng **cron**.
Không cần git.

## 1. Yêu cầu

- Web server phục vụ file tĩnh (nginx, Apache…).
- **Python 3.8 trở lên**. Script chỉ dùng thư viện chuẩn, không cần `pip install`.
- Server được phép **kết nối ra ngoài** tới `https://danviet.vn`. Ảnh bài viết do trình duyệt
  của người xem tải trực tiếp từ `*.ex-cdn.com`.
- Tài khoản chạy cron có **quyền ghi** vào `js/data.js` trong thư mục web và vào file cache.

## 2. Bố trí thư mục (khuyến nghị)

Để code riêng, thư mục web riêng. Như vậy script và dữ liệu thô không lộ ra web:

```
/opt/landing_page/              <- code (không public)
├── scripts/update_data.py      script lấy bài
└── data/
    ├── events.json             nội dung viết tay từng năm + mã chủ đề
    └── article-cache.json      cache ngày đăng/sapo/ảnh (script tự cập nhật)

/var/www/landing/               <- thư mục web (root của nginx)
├── index.html
├── css/style.css
└── js/
    ├── main.js
    ├── effects.js
    └── data.js                 do script tạo — không sửa tay
```

Thư mục web chỉ cần đúng 5 file trên. Các thư mục `images/`, `lib/` và `scss/` không dùng khi chạy.
`scss/` là mã nguồn để build ra `css/style.css`.

## 3. Cài đặt lần đầu

```bash
# Code
sudo mkdir -p /opt/landing_page
sudo cp -r scripts data /opt/landing_page/

# Web
sudo mkdir -p /var/www/landing/css /var/www/landing/js
sudo cp index.html /var/www/landing/
sudo cp css/style.css /var/www/landing/css/
sudo cp js/main.js js/effects.js js/data.js /var/www/landing/js/

# Cho tài khoản chạy cron (ví dụ www-data) quyền ghi
sudo chown -R www-data: /opt/landing_page/data /var/www/landing/js
```

Chạy thử bằng tay:

```bash
sudo -u www-data env OUTPUT_DIR=/var/www/landing \
  python3 /opt/landing_page/scripts/update_data.py
```

Lần chạy thành công in ra số bài từng năm và dòng `Đã ghi /var/www/landing/js/data.js`.
Mỗi lần chạy mất khoảng 1–2 phút.

## 4. Lịch chạy tự động (cron)

`sudo crontab -u www-data -e`, thêm dòng:

```
17 * * * * OUTPUT_DIR=/var/www/landing flock -n /tmp/landing-update.lock python3 /opt/landing_page/scripts/update_data.py >> /var/log/landing-update.log 2>&1
```

- Chạy mỗi giờ, vào phút 17.
- `flock` chặn hai lượt chạy chồng lên nhau.
- Tạo sẵn file log và cấp quyền: `sudo touch /var/log/landing-update.log && sudo chown www-data: /var/log/landing-update.log`.

Biến môi trường của script:

| Biến | Ý nghĩa | Mặc định |
|---|---|---|
| `OUTPUT_DIR` | Thư mục web; script ghi `{OUTPUT_DIR}/js/data.js` | thư mục chứa code |
| `CACHE_FILE` | File cache thông tin bài viết | `data/article-cache.json` cạnh script |

## 5. Cấu hình nginx

```nginx
server {
    server_name landing.example.vn;
    root /var/www/landing;
    index index.html;

    # data.js đổi mỗi giờ: không cho trình duyệt giữ bản cũ
    location = /js/data.js {
        add_header Cache-Control "no-cache";
    }

    # CSS/JS giao diện ít đổi: cache ngắn
    location ~* \.(css|js)$ {
        add_header Cache-Control "public, max-age=3600";
    }
}
```

Nếu buộc phải để code chung thư mục web, chặn thêm các thư mục không public:

```nginx
location ~ ^/(scripts|data|scss|_duyet|\.github)/ { deny all; }
```

## 6. Script xử lý lỗi thế nào

- Ghi file **nguyên tử**: script ghi ra file tạm rồi đổi tên một lần, nên người xem không bao giờ nhận `data.js` ghi dở.
- Năm nào lấy được **0 bài** hoặc **ít hơn một nửa** lần trước (Dân Việt lỗi, đổi giao diện, mất mạng…)
  thì **giữ nguyên dữ liệu cũ** của năm đó. Log ghi dòng `::warning::…`.
- Kiểm tra nhanh: `tail -n 30 /var/log/landing-update.log`. Nếu cảnh báo lặp lại nhiều giờ liền,
  có thể Dân Việt đã đổi giao diện chuyên trang và script cần sửa lại.

## 7. Thao tác thường gặp

**Thêm hoặc đổi chủ đề cho một năm** (ví dụ khi Dân Việt tạo xong chủ đề 2023): mở
`/opt/landing_page/data/events.json`, ở năm đó điền mã chủ đề vào `"channel"`.
Mã chủ đề là số ở cuối link, ví dụ `...-channel2990/` → `2990`. Lượt chạy kế tiếp sẽ dùng chủ đề mới.

**Sửa tên, mô tả, ngày, địa điểm, số liệu, ảnh bìa của một năm**: sửa trong `data/events.json`,
không sửa `js/data.js`. Ô `"$count"` trong `stats` được tự thay bằng số bài.

**Dòng nổi bật trên ảnh tiêu điểm** (ví dụ "Doanh thu 9 tỷ/năm"): thêm vào mục `highlights`
trong `data/events.json`, đặt theo mã bài (số sau `-d` trong link bài):

```json
"highlights": {
  "1465645": { "highlight": "Doanh thu 9 tỷ/năm", "tag": "Quảng Ngãi • 2 lần vinh danh" }
}
```

**Cập nhật giao diện**: copy lại `index.html`, `css/style.css`, `js/main.js`, `js/effects.js`
vào thư mục web. Nếu sửa SCSS thì build lại CSS trước:
`npx sass --no-source-map scss/style.scss css/style.css`.

## 8. Khi đã chuyển hẳn lên server

Tắt lịch chạy trên GitHub để không còn hai nơi cùng cập nhật: trên GitHub vào **Actions →
"Cập nhật bài viết từ Dân Việt" → Disable workflow**, hoặc xoá file
`.github/workflows/update-data.yml`.
