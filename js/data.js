/**
 * Nội dung landing page.
 * Nguồn bài viết (Báo Điện tử Dân Việt):
 *  - 2026: chuyên trang channel3095 · 2025: channel2990 · 2024: channel2891 · 2022: channel2715
 *  - 2023: chưa có chuyên trang — gồm các bài có cụm "Tự hào Nông dân Việt Nam 2023" hoặc
 *    "Nông dân (Việt Nam) xuất sắc 2023" trong tiêu đề (danh sách để tạo chủ đề 2023 trên Dân Việt).
 *
 * Mỗi sự kiện: year, label, kicker, title, date, location, cover, summary,
 *   stats [{ value, suffix, label }], link, linkLabel, articleCount,
 *   featured [{ tag, highlight, title, sapo, img, url }],
 *   articles [{ id, title, url, img, sapo, category, location, date }]
 */
window.SITE = {
    kicker: "Lưu trữ truyền thông 5 năm thường niên (2022 – 2026)",
    title: "Hành Trình Tôn Vinh Nông Dân & Đổi Mới Nông Nghiệp Việt Nam",
    desc: "Tổng hợp toàn diện chuỗi sự kiện thường niên do Báo Điện tử Dân Việt tổ chức qua 5 năm. Mỗi năm gắn liền với một bước chuyển dịch lớn của nông nghiệp nông thôn Việt Nam."
};

window.EVENTS = [
  {
    "year": 2026,
    "special": true,
    "label": "2026",
    "kicker": "Chương trình Tự hào Nông dân Việt Nam • 40 năm Đổi mới (1986 – 2026)",
    "title": "Nông Dân Việt Nam Xuất Sắc 40 Năm Đổi Mới",
    "date": "Tối 12/10/2026",
    "location": "Truyền hình trực tiếp VTV1",
    "cover": "https://t.ex-cdn.com/danviet.vn/800w/files/channel/2026/08/21/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-112437.webp",
    "summary": "Hồ sơ tư liệu số hóa tôn vinh 96 Nông dân Việt Nam xuất sắc nhân dấu mốc 40 năm Đổi mới đất nước. Từ bài học lịch sử \"Khoán 10\", những người nông dân chân lấm tay bùn đã vươn mình thành doanh nhân nông nghiệp, làm chủ công nghệ cao, chinh phục thị trường toàn cầu và dẫn dắt cộng đồng làm giàu bền vững.",
    "stats": [
      {
        "value": 96,
        "suffix": "",
        "label": "Gương mặt tôn vinh"
      },
      {
        "value": 101,
        "suffix": "",
        "label": "Bài báo tư liệu"
      },
      {
        "value": 40,
        "suffix": "",
        "label": "Năm Đổi mới"
      }
    ],
    "link": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-channel3095/",
    "linkLabel": "Xem Channel 3095 trên Dân Việt",
    "featured": [
      {
        "tag": "Quảng Ngãi • 2 lần vinh danh",
        "highlight": "Doanh thu 9 tỷ/năm",
        "title": "Lần thứ 2 được vinh danh “Nông dân Việt Nam xuất sắc”, một người Quảng Ngãi vẫn “phong độ cá to, tôm nhí”",
        "sapo": "Ông Đỗ Văn Được (sinh 1975), tỷ phú Quảng Ngãi, nông dân phường Sa Huỳnh, nuôi cá lồng bè kiêm chủ vựa kinh doanh tôm hùm nhí với lợi nhuận trên 2 tỷ đồng/năm.",
        "img": "https://i.ex-cdn.com/danviet.vn/files/news/2026/10/08/anh-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-giu-phong-do-trong-san-xuat-nguoi-nay-o-quang-ngai-lan-thu-2-duoc-vinh-danh-5-1417.jpg",
        "url": "https://danviet.vn/lan-thu-2-duoc-vinh-danh-nong-dan-viet-nam-xuat-sac-mot-nguoi-quang-ngai-van-phong-do-ca-to-tom-nhi-the-nay-day-d1465645.html"
      },
      {
        "tag": "Sự kiện trọng thể",
        "highlight": "Tối 12/10 • VTV",
        "title": "Lễ Tôn vinh và trao Danh hiệu cho 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới sẽ được tổ chức tối 12/10",
        "sapo": "Ban Tổ chức chính thức công bố chuỗi hoạt động và danh sách 96 Nông dân Việt Nam xuất sắc năm 2026, được truyền hình trực tiếp trên sóng Đài Truyền hình Việt Nam.",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/08/tu-hao-ndvn-0832.jpg",
        "url": "https://danviet.vn/le-ton-vinh-va-trao-danh-hieu-cho-96-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-se-duoc-to-chuc-vao-toi-12-10-d1465006.html"
      },
      {
        "tag": "Kỷ lục ấn tượng",
        "highlight": "Doanh thu trăm tỷ",
        "title": "10 kỷ lục ấn tượng của 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "sapo": "Sự bứt phá ngoạn mục của các mô hình kinh tế nông thôn đạt doanh thu hàng trăm tỷ đồng, lợi nhuận hàng chục tỷ và giải quyết việc làm cho hàng nghìn lao động.",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/06/145459thiet-ke-chua-co-ten-1454.png",
        "url": "https://danviet.vn/10-ky-luc-an-tuong-cua-96-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1465101.html"
      }
    ],
    "articleCount": 101,
    "articles": [
      {
        "id": "1465667",
        "title": "40 năm Đổi mới: Từ sản xuất nhỏ lẻ đến làm kinh tế bài bản, nông dân Thái Nguyên thay đổi ra sao?",
        "url": "https://danviet.vn/40-nam-doi-moi-tu-san-xuat-nho-le-den-lam-kinh-te-bai-ban-nong-dan-thai-nguyen-thay-doi-ra-sao-d1465667.html",
        "img": "https://i.ex-cdn.com/danviet.vn/files/content/2026/10/08/1526061788702547334_1497953192519677363_1044509912031565828_4b9aa6cbbd846ef1655809aaf6adcf67-1525.jpg",
        "sapo": "Sau 40 năm Đổi mới, nông dân Thái Nguyên ngày càng chú trọng tính toán chi phí, chất lượng và đầu ra sản phẩm thay vì chỉ quan tâm đến sản lượng. Sự thay đổi này được thể hiện qua việc ứng dụng khoa học kỹ thuật, liên kết sản xuất, xây dựng thương hiệu và tiếp cận thị trường.",
        "category": "Hành trình 40 năm",
        "location": "",
        "date": "09/10/2026"
      },
      {
        "id": "1465828",
        "title": "Đất nước sau 40 năm Đổi mới: Từ 'trụ đỡ' quốc gia, đến sứ mệnh vươn tầm thế giới của nông nghiệp Việt Nam",
        "url": "https://danviet.vn/dat-nuoc-sau-40-nam-doi-moi-tu-tru-do-quoc-gia-den-xu-menh-vuon-tam-the-gioi-cua-nong-nghiep-viet-nam-d1465828.html",
        "img": "https://t.ex-cdn.com/danviet.vn/512w/files/news/2026/10/09/xuat-khau-0952.png",
        "sapo": "Sau 40 năm Đổi mới và phát triển, con đường đi của kinh tế Việt Nam không chỉ được đo bằng tốc độ tăng trưởng GDP mà bằng cả quá trình cải cách thể chế liên tục. Những thay đổi tư duy kinh tế đã giúp Việt Nam thay da đổi thịt hàng ngày và trở thành hình mẫu phát triển trong nhiều ngành, lĩnh vực, nhất là trong thay đổi giá trị và vai trò ngành nông nghiệp Việt Nam.",
        "category": "Hành trình 40 năm",
        "location": "",
        "date": "09/10/2026"
      },
      {
        "id": "1465664",
        "title": "Phó Chủ tịch Hội Nông dân tỉnh Đồng Tháp: Nông dân Việt Nam xuất sắc 40 năm Đổi mới ngày càng chuyên nghiệp hơn",
        "url": "https://danviet.vn/pho-chu-tich-hoi-nong-dan-tinh-dong-thap-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-ngay-cang-chuyen-nghiep-hon-d1465664.html",
        "img": "https://t.ex-cdn.com/danviet.vn/512w/files/content/2026/10/08/1522551767105642698_7795239697681310476_7795239697681310476_de11bcd5346dc51d2249d591d91334dd-1522.jpg",
        "sapo": "Ông Phạm Văn Toàn, Phó Chủ tịch Hội Nông dân tỉnh Đồng Tháp chia sẻ, những nông dân được vinh danh 'Nông dân Việt Nam xuất sắc 40 năm Đổi mới' không chỉ giỏi sản xuất, kinh doanh mà đang từng bước trở thành những nông dân chuyên nghiệp. Đây cũng là nền tảng để Đồng Tháp triển khai Đề án xây dựng người nông dân chuyên nghiệp giai đoạn 2026–2030.",
        "category": "Chính sách & Chuyên gia",
        "location": "",
        "date": "09/10/2026"
      },
      {
        "id": "1465576",
        "title": "Phó Chủ tịch Hội Nông dân Sơn La: “Tôn vinh một nông dân xuất sắc cũng chính là lan tỏa một cách làm”",
        "url": "https://danviet.vn/pho-chu-tich-hoi-nong-dan-son-la-ton-vinh-mot-nong-dan-xuat-sac-cung-chinh-la-lan-toa-mot-cach-lam-d1465576.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/08/38-0945.jpg",
        "sapo": "Tôn vinh một nông dân tiêu biểu cũng chính là lan tỏa một cách làm, một tinh thần và một động lực để nhiều nông dân khác cùng đổi mới', ông Bạc Cầm Khuyên, Phó Chủ tịch Hội Nông dân tỉnh Sơn La nhấn mạnh khi nói về ý nghĩa chương trình 'Tự hào Nông dân Việt Nam 40 năm Đổi mới năm 2026'.",
        "category": "Chính sách & Chuyên gia",
        "location": "",
        "date": "09/10/2026"
      },
      {
        "id": "1465645",
        "title": "Lần thứ 2 được vinh danh “Nông dân Việt Nam xuất sắc', một người Quảng Ngãi vẫn 'phong độ cá to, tôm nhí' thế này đây",
        "url": "https://danviet.vn/lan-thu-2-duoc-vinh-danh-nong-dan-viet-nam-xuat-sac-mot-nguoi-quang-ngai-van-phong-do-ca-to-tom-nhi-the-nay-day-d1465645.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/10/08/anh-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-giu-phong-do-trong-san-xuat-nguoi-nay-o-quang-ngai-lan-thu-2-duoc-vinh-danh-5-1417.jpg",
        "sapo": "Một tỷ phú Quảng Ngãi lần thứ 2 được vinh danh 'Nông dân Việt Nam xuất sắc vẫn phong độ cá to cá lớn thế này đây. Đó là ông Đỗ Văn Được (sinh 1975), tỷ phú Quảng Ngãi, nông dân phường Sa Huỳnh, 'ông chủ' nuôi cá lồng bè, kiêm 'chủ vựa' kinh doanh tôm hùm nhí, với tổng doanh thu 9 tỷ đồng/năm và lợi nhuận trên 2 tỷ đồng/năm. Năm 2026, ông Đỗ Văn Được lần thứ 2 được vinh danh Nông dân Việt Nam xuất sắc tại Chương trình Tự hào Nông dân Việt Nam 40 năm Đổi mới.",
        "category": "Gương mặt Điển hình",
        "location": "Quảng Ngãi",
        "date": "08/10/2026"
      },
      {
        "id": "1465644",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Hà Nội là một nữ tỷ phú trồng nấm đông trùng hạ thảo, nuôi gà",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-ha-noi-la-mot-nu-ty-phu-trong-nam-dong-trung-ha-thao-nuoi-ga-d1465644.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/08/nong-dan-viet-nam-xuat-sac-4-1421.jpg",
        "sapo": "Một nữ tỷ phú trồng nấm gì, nuôi gà kiểu nào ở Hà Nội, cả làng phục lăn, là Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026. Trở lại thăm trang trại nuôi gà quy mô lớn của nữ tỷ phú nông nghiệp Hà Nội, là Nông dân Việt Nam xuất sắc 40 năm Đổi mới–năm 2026 Nguyễn Thị Hồng (xã Dân Hòa, TP Hà Nội) sau 5 năm kể từ ngày chị được tôn vinh Nông dân Việt Nam xuất sắc năm 2021, mới thấy sự phát triển lớn mạnh của thương hiệu nấm đông trùng hạ thảo, mà còn là một hướng đi hoàn toàn mới: mô hình nông nghiệp tuần hoàn khép kín, không rác thải.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": "08/10/2026"
      },
      {
        "id": "1465600",
        "title": "PGS. TS, Đại biểu Quốc hội Trần Hoàng Ngân: Bài học từ 'Khoán 10' và chìa khóa về thể chế để nông nghiệp bứt phá",
        "url": "https://danviet.vn/pgs-ts-dai-bieu-quoc-hoi-tran-hoang-ngan-bai-hoc-tu-khoan-10-va-chia-khoa-ve-the-che-de-nong-nghiep-but-pha-d1465600.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/08/202608221526322660_1787387134805_7138977550031328523_g3587189976484290001_ddc5e40582cd16154cbf2b714c38aa6b-1-1151.jpg",
        "sapo": "PGS. TS, Đại biểu Quốc hội Trần Hoàng Ngân cho rằng, bài học từ Khoán 10 trong nông nghiệp cho thấy nếu có thể chế phù hợp, lĩnh vực này có thể tạo ra bước phát triển lớn. Trong bối cảnh hiện nay, nông nghiệp cần thu hút doanh nghiệp lớn và đầu tư mạnh cho hạ tầng để hướng tới tăng trưởng hai con số.",
        "category": "Chính sách & Chuyên gia",
        "location": "",
        "date": "08/10/2026"
      },
      {
        "id": "1465616",
        "title": "Chặng đường 40 năm Đổi mới chứng kiến sự xuất hiện của nhiều nông dân xuất sắc",
        "url": "https://danviet.vn/chang-duong-40-nam-doi-moi-chung-kien-su-xuat-hien-cua-nhieu-nong-dan-xuat-sac-d1465616.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/08/122815truong-tq-1226.jpg",
        "sapo": "Trước thềm Lễ tôn vinh 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới, ông Trương Thành Quang - Phó Chủ tịch Hội Nông dân TP.HCM đã chia sẻ với Báo Dân Việt về những thành tựu nổi bật của nông dân thành phố, phong trào đoàn kết giúp nhau làm giàu và những cơ hội phát triển nông nghiệp trong không gian mới sau sáp nhập.",
        "category": "Hành trình 40 năm",
        "location": "",
        "date": "08/10/2026"
      },
      {
        "id": "1465006",
        "title": "Lễ Tôn vinh và trao Danh hiệu cho 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới sẽ được tổ chức vào tối 12/10",
        "url": "https://danviet.vn/le-ton-vinh-va-trao-danh-hieu-cho-96-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-se-duoc-to-chuc-vao-toi-12-10-d1465006.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/08/tu-hao-ndvn-0832.jpg",
        "sapo": "Ngày 8/10, Ban Tổ chức Chương trình Tự hào Nông dân Việt Nam 40 năm Đổi mới chính thức công bố thông tin về chuỗi hoạt động của Chương trình và Danh sách 96 Nông dân Việt Nam xuất sắc năm 2026. Theo đó, buổi Lễ Tôn vinh và trao Danh hiệu cho 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới sẽ được tổ chức vào tối 12/10 và truyền hình trực tiếp trên VTV.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "08/10/2026"
      },
      {
        "id": "1465525",
        "title": "Ra mắt số báo đặc biệt '40 năm Đổi mới: Nông dân, doanh nhân lớn mạnh cùng đất nước'",
        "url": "https://danviet.vn/ra-mat-so-bao-dac-biet-40-nam-doi-moi-nong-dan-doanh-nhan-lon-manh-cung-dat-nuoc-d1465525.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/08/063522cover-so-14-thang-10-0628.jpg",
        "sapo": "Báo Nông thôn Ngày nay xuất bản số báo đặc biệt chào mừng 3 sự kiện: Kỷ niệm Ngày Doanh nhân 13/10; Kỷ niệm 96 năm Ngày thành lập Hội Nông dân Việt Nam và Chương trình Tự hào Nông dân Việt Nam năm 2026 với chủ đề: \"40 năm Đổi Mới: Nông dân, doanh nhân lớn mạnh cùng đất nước\".",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "08/10/2026"
      },
      {
        "id": "1465305",
        "title": "Chủ tịch Hội Nông dân An Giang: Các Nông dân Việt Nam xuất sắc là hạt nhân lan tỏa kinh nghiệm làm giàu",
        "url": "https://danviet.vn/chu-tich-hoi-nong-dan-an-giang-cac-nong-dan-viet-nam-xuat-sac-la-hat-nhan-lan-toa-kinh-nghiem-lam-giau-d1465305.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/10/07/img_7360-1027.jpeg",
        "sapo": "Theo ông Nguyễn Văn Cọp, Chủ tịch Hội Nông dân tỉnh An Giang, chương trình “Tự hào Nông dân Việt Nam” qua nhiều năm đã trở thành một hoạt động có ý nghĩa, góp phần tôn vinh vai trò, vị thế của người nông dân trong thời kỳ mới.",
        "category": "Chính sách & Chuyên gia",
        "location": "",
        "date": "08/10/2026"
      },
      {
        "id": "1465101",
        "title": "10 kỷ lục ấn tượng của 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/10-ky-luc-an-tuong-cua-96-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1465101.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/06/145459thiet-ke-chua-co-ten-1454.png",
        "sapo": "Trong số 96 gương mặt Nông dân Việt Nam xuất sắc được tôn vinh nhân dịp 40 năm Đổi mới năm 2026, xuất hiện ngày càng nhiều \"tỷ phú nông dân\" và các giám đốc hợp tác xã với thành tích vượt trội. Năm nay ghi nhận sự bứt phá mạnh mẽ của những mô hình kinh tế quy mô lớn, đạt doanh thu hàng trăm tỷ đồng, lợi nhuận hàng chục tỷ đồng và giải quyết việc làm cho hàng nghìn lao động tại địa phương.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "08/10/2026"
      },
      {
        "id": "1465256",
        "title": "Chủ tịch Hội Nông dân Bắc Ninh Nguyễn Hoàng Trung: 40 năm Đổi mới, nhiều nông dân đã thành “doanh nhân nông nghiệp”",
        "url": "https://danviet.vn/chu-tich-hoi-nong-dan-bac-ninh-nguyen-hoang-trung-40-nam-doi-moi-nhieu-nong-dan-da-thanh-doanh-nhan-nong-nghiep-d1465256.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/07/122120anh-nguyen-hoang-trung-1220.png",
        "sapo": "Theo ông Nguyễn Hoàng Trung, Chủ tịch Hội Nông dân thành phố Bắc Ninh, dấu ấn lớn của 40 năm Đổi mới không chỉ nằm ở sự phát triển của nông nghiệp, mà còn ở sự chuyển mình của chính người nông dân. Từ sản xuất dựa nhiều vào kinh nghiệm, nhiều nông dân nay đã trở thành những “doanh nhân nông nghiệp” năng động, làm chủ khoa học - công nghệ, thị trường và thương hiệu.",
        "category": "Chính sách & Chuyên gia",
        "location": "",
        "date": "07/10/2026"
      },
      {
        "id": "1464997",
        "title": "Chủ tịch Hội Nông dân Tây Ninh nói về những tiêu chí mới cần có của nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/chu-tich-hoi-nong-dan-tay-ninh-noi-ve-nhung-tieu-chi-moi-can-co-cua-nong-dan-viet-nam-xuat-sac-d1464997.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/06/240-nam-doi-moi-0838.jpg",
        "sapo": "Trả lời phỏng vấn báo Dân Việt, ông Nguyễn Thanh Tùng, Uỷ viên BCH Trung ương Hội Nông dân Việt Nam, Phó Chủ tịch Uỷ ban MTTQ tỉnh, Chủ tịch Hội Nông dân tỉnh Tây Ninh cho rằng, sau 40 năm Đổi mới, người nông dân không chỉ biết làm ruộng mà còn biết tính toán hiệu quả, làm chủ sản xuất, liên kết và chinh phục thị trường.",
        "category": "Chính sách & Chuyên gia",
        "location": "Tây Ninh",
        "date": "07/10/2026"
      },
      {
        "id": "1465003",
        "title": "Từ cánh đồng đến thị trường: Hành trình đổi thay của nông dân Đà Nẵng sau 40 năm Đổi mới",
        "url": "https://danviet.vn/tu-canh-dong-den-thi-truong-hanh-trinh-doi-thay-cua-nong-dan-da-nang-sau-40-nam-doi-moi-d1465003.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/06/1-0844.jpg",
        "sapo": "Từ những thửa ruộng manh mún, sản xuất chủ yếu dựa vào kinh nghiệm, sau 40 năm Đổi mới, người nông dân Việt Nam đang chuyển mình mạnh mẽ. Tại TP.Đà Nẵng, sự thay đổi ấy càng rõ nét khi nông dân không chỉ sản xuất nông nghiệp mà từng bước trở thành chủ thể của kinh tế nông thôn, làm du lịch, phát triển OCOP, ứng dụng công nghệ, chuyển đổi số và đưa nông sản vươn ra thị trường.",
        "category": "Gương mặt Điển hình",
        "location": "Đà Nẵng",
        "date": "06/10/2026"
      },
      {
        "id": "1464570",
        "title": "Chuyên gia Nguyễn Lân Hùng: Mỗi câu chuyện nông dân Việt Nam xuất sắc đều là 'tài liệu' quý để phát triển nông thôn",
        "url": "https://danviet.vn/chuyen-gia-nguyen-lan-hung-moi-cau-chuyen-nong-dan-viet-nam-xuat-sac-deu-la-tai-lieu-quy-de-phat-trien-nong-thon-d1464570.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/05/2007551786009179115_1785719900663690540_1785719900663690540_4600436c034fe4cc738a1ad34fc0c168-1749-2007.jpg",
        "sapo": "Được lựa chọn từ hàng trăm hồ sơ gửi về chương trình “Tự hào Nông dân Việt Nam”, 96 Nông dân Việt Nam xuất sắc năm 2026 là những gương mặt nông dân tiêu biểu, phản ánh sinh động sức bật của kinh tế nông thôn trên mọi miền Tổ quốc sau 40 năm Đổi mới. Theo chuyên gia Nguyễn Lân Hùng, hành trình làm giàu của những điển hình ấy gợi mở nhiều hướng đi để người nông dân nâng cao thu nhập.",
        "category": "Chính sách & Chuyên gia",
        "location": "",
        "date": "06/10/2026"
      },
      {
        "id": "1464638",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Đắk Lắk liên kết với 3.000 hộ trồng cà phê để làm ra loại cà phê này",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-dak-lak-lien-ket-voi-3000-ho-trong-ca-phe-de-lam-ra-loai-ca-phe-nay-d1464638.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/04/img_7345-1553.jpg",
        "sapo": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Đắk Lắk, bà Nguyễn Thị Phúc Minh đã có hơn 30 năm gắn bó với cây cà phê. Từ một cơ sở thu mua nông sản nhỏ, bà Minh từng bước xây dựng chuỗi liên kết với hơn 3.000 hộ nông dân, hướng đến trồng cà phê an toàn, cà phê sạch, truy xuất nguồn gốc và nâng cao giá trị hạt cà phê địa phương.",
        "category": "Gương mặt Điển hình",
        "location": "Đắk Lắk",
        "date": "06/10/2026"
      },
      {
        "id": "1464191",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Vĩnh Long là người trồng lúa hữu cơ đạt chuẩn quốc tế",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-vinh-long-la-nguoi-trong-lua-huu-co-dat-chuan-quoc-te-d1464191.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/05/085716lua-huu-co-chuan-quoc-te-0855.jpg",
        "sapo": "Nhờ trồng lúa hữu cơ đạt chuẩn quốc tế, ông Đoàn Văn Tài ở ấp Kinh, xã Trung Ngãi, tỉnh Vĩnh Long không lo đầu ra, sản lượng gạo làm ra bao nhiêu cũng được doanh nghiệp ký hợp đồng mua hết từ đầu vụ. Ông Tài trở thành một trong 96 gương mặt nhà nông tiêu biểu được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Vĩnh Long",
        "date": "05/10/2026"
      },
      {
        "id": "1463188",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Gia Lai là thương binh ¾ nhận Huân chương Lao động, bán nước mắm rong",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-gia-lai-la-thuong-binh-nhan-huan-chuong-lao-dong-ban-nuoc-mam-rong-d1463188.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/29/img_3616-0945.jpeg",
        "sapo": "Sau chiến tranh, bà Trần Thị Như Hoa trở về với thương tật 3/4, một mình nuôi 4 con và bắt đầu mưu sinh bằng những chuyến bán nước mắm rong. Hơn 30 năm sau, từ số vốn vay 5 triệu đồng, bà gây dựng thương hiệu nước mắm truyền thống Như Hoa, được trao Huân chương Lao động hạng Ba.",
        "category": "Gương mặt Điển hình",
        "location": "Gia Lai",
        "date": "05/10/2026"
      },
      {
        "id": "1464426",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lâm Đồng trồng cà phê, trồng tiêu kiểu gì mà doanh thu 170 tỷ/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-lam-dong-trong-ca-phe-trong-tieu-kieu-gi-ma-doanh-thu-170-ty-nam-d1464426.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/03/img_7218-1520.jpg",
        "sapo": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lâm Đồng (địa phận huyện Đắk Song, tỉnh Đắk Nông cũ), ông Lưu Như Bính là người tiên phong thay đổi cách làm, trồng cà phê, trồng hồ tiêu từ kiểu trồng, sơ chế truyền thống sang trồng theo hướng hữu cơ, đầu tư máy móc chế biến, sơ chế, cùng hàng trăm nông dân cùng làm ăn khá giả.",
        "category": "Gương mặt Điển hình",
        "location": "Lâm Đồng",
        "date": "05/10/2026"
      },
      {
        "id": "1464587",
        "title": "Phó Vụ trưởng Vụ Đoàn thể nhân dân: 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới là những điểm sáng “Dân vận khéo”",
        "url": "https://danviet.vn/pho-vu-truong-vu-doan-the-nhan-dan-96-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-la-nhung-diem-sang-dan-van-kheo-d1464587.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/04/anh-2-ba-to-nga-1048.jpg",
        "sapo": "Trao đổi với PV Báo điện tử Dân Việt, bà Nguyễn Thị Tố Nga - Phó Vụ trưởng Vụ Đoàn thể nhân dân, Đảng uỷ MTTQ, các đoàn thể Trung ương khẳng định: 96 gương mặt \"Nông dân Việt Nam xuất sắc 40 năm Đổi mới\" chính là minh chứng sống động cho thế hệ nông dân thời đại mới: Dám nghĩ, dám làm, làm chủ khoa học công nghệ và lan tỏa giá trị tích cực cho cộng đồng.",
        "category": "Chính sách & Chuyên gia",
        "location": "",
        "date": "05/10/2026"
      },
      {
        "id": "1464025",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lâm Đồng là chủ giống tiêu đột biến “tiêu Tùng Linh” năng suất cao",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-lam-dong-la-chu-giong-tieu-dot-bien-tieu-tung-linh-nang-suat-cao-d1464025.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/02/img_7172-0944.jpg",
        "sapo": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lâm Đồng, ông Lê Tùng Linh là người phát hiện và nhân giống cây tiêu đột biến “tiêu Tùng Linh”. Giống tiêu này sinh trưởng khỏe, cho năng suất khoảng 10-20 tấn tiêu khô/1ha nếu được chăm sóc đúng quy trình.",
        "category": "Gương mặt Điển hình",
        "location": "Lâm Đồng",
        "date": "04/10/2026"
      },
      {
        "id": "1463909",
        "title": "Biến đồng trũng thành “mặt ruộng không dấu chân”, một người An Giang là Nông dân Việt Nam xuất sắc 40 năm đổi mới",
        "url": "https://danviet.vn/bien-dong-trung-thanh-mat-ruong-khong-dau-chan-mot-nguoi-an-giang-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1463909.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/01/175246ong-le-thanh-long-1752.jpg",
        "sapo": "Mua 7ha đất ruộng ở vùng phèn úng, từ nhiều người bỏ hoang vì làm lúa liên tục thua lỗ, ông Lê Thanh Long ở An Giang đã kiên trì cải tạo đất, tích lũy từ từng mùa vụ để mở rộng sản xuất. Gần 30 năm sau, ông sở hữu 80ha đất trồng lúa, đưa drone, máy cày, máy gặt… vào đồng ruộng cho thu nhập tiền tỷ mỗi năm, riêng năm 2025 doanh thu đạt hơn 8,5 tỷ đồng, lợi nhuận hơn 5,1 tỷ đồng.",
        "category": "Gương mặt Điển hình",
        "location": "An Giang",
        "date": "04/10/2026"
      },
      {
        "id": "1464037",
        "title": "Một người Phú Thọ coi con lợn là 'cục vàng', ông tỷ phú từng đạp xe ba gác, nay là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/mot-nguoi-phu-tho-coi-con-lon-la-cuc-vang-ong-ty-phu-tung-dap-xe-ba-gac-nay-la-nong-dan-viet-nam-suat-sac-d1464037.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/02/17081930e9959a-2ff9-4e0d-8e47-b9563f018f54-1608.png",
        "sapo": "“Với tôi, con lợn là vàng! Mỗi sớm tinh mơ tôi check-in chuồng nuôi lợn xem đàn lợn ăn uống, khỏe yếu thế nào... Hạnh phúc bắt đầu từ điều giản dị vậy đấy!”, ông Nguyễn Văn Toàn, xã Hy Cương, tỉnh Phú Thọ (địa phận TP Việt Trì cũ)-Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026- cười tươi, nói dí dỏm.",
        "category": "Gương mặt Điển hình",
        "location": "Phú Thọ",
        "date": "03/10/2026"
      },
      {
        "id": "1463667",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới ở Bắc Ninh: Đưa mỳ Chũ thành nguồn thu chính, thu nhập tới 9 triệu đồng/tháng",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-o-bac-ninh-dua-my-chu-thanh-nguon-thu-chinh-thu-nhap-toi-9-trieu-dong-thang-d1463667.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/10/02/my-chu-nam-the-3-2030.jpg",
        "sapo": "Từ nghề phụ lúc nông nhàn, những sợi mỳ gạo Chũ nay trở thành sinh kế của hàng nghìn người dân Thủ Dương, xã Nam Dương, Bắc Ninh. Mỗi năm làng nghề sản xuất khoảng 16.000 tấn mỳ, tạo thu nhập bình quân 8,5-9 triệu đồng/người/tháng. Đằng sau sự chuyển mình ấy có dấu ấn của ông Nguyễn Văn Nam, người được vinh danh “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”.",
        "category": "Gương mặt Điển hình",
        "location": "Bắc Ninh",
        "date": "03/10/2026"
      },
      {
        "id": "1463227",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới ở Tây Ninh, là người 73 tuổi vẫn lái ô tô đi thăm vườn sầu riêng 50ha",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-o-tay-ninh-la-nguoi-73-tuoi-van-lai-o-to-di-tham-vuon-sau-rieng-50ha-d1463227.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/29/img_5630-1110.jpg",
        "sapo": "Ở tuổi 73, ông Phan Văn Thà (xã Tân Biên, tỉnh Tây Ninh) được công nhận Nông dân Việt Nam xuất sắc 40 năm Đổi mới. Hằng ngày, ông Thà lái ô tô ra thăm vườn, kiểm tra từng khu sầu riêng rộng 50ha. Trước khi có cơ ngơi này, ông đã trải qua hơn 40 năm làm nông, từ trồng cây cao su, mít Thái đến sầu riêng.",
        "category": "Gương mặt Điển hình",
        "location": "Tây Ninh",
        "date": "03/10/2026"
      },
      {
        "id": "1464139",
        "title": "Từ 'chuồng gà nhỏ' đến doanh thu 206 tỷ đồng, một người Hải Phòng 30 năm nuôi gà nay là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/tu-chuong-ga-nho-den-doanh-thu-206-ty-dong-mot-nguoi-hai-phong-30-nam-nuoi-ga-nay-la-nong-dan-viet-nam-xuat-sac-d1464139.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/02/a-luong-1444.jpg",
        "sapo": "Từ một trang trại gà giống, ông Phạm Văn Lượng, Chủ tịch HĐQT - Giám đốc Công ty cổ phần Giống gia cầm Lượng Huệ (Hải Phòng), đã phát triển mô hình sản xuất theo chuỗi, cung cấp hàng triệu con gà giống mỗi năm và liên kết với nhiều hộ chăn nuôi. Sau hơn 30 năm gắn bó với nghề, ông vừa được bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Hải Phòng",
        "date": "02/10/2026"
      },
      {
        "id": "1463115",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Đồng Tháp, bỏ tiền tỷ làm đường, xóa cầu khỉ, xây dựng nông thôn mới",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-dong-thap-bo-tien-ty-lam-duong-xoa-cau-khi-xay-dung-nong-thon-moi-d1463115.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/01/0816071790817058125_1918310664192206013_8469663182997053096_d7995c0524612b223101bd4642fd7bbf-0814.jpg",
        "sapo": "Ông Lê Văn Hòa, nông dân giàu có ở ấp Tân Quới, xã Phong Hòa, tỉnh Đồng Tháp phất lên thành tỷ phú nông dân nhờ trồng giống nhãn đặc sản. Có điều kiện, ông đóng góp hàng tỷ đồng cùng bà con làm đường, xóa cầu khỉ, góp phần xây dựng nông thôn mới, vùng quê đáng sống. Ông Lê Văn Hòa được bình chọn là \"Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026\".",
        "category": "Gương mặt Điển hình",
        "location": "Đồng Tháp",
        "date": "02/10/2026"
      },
      {
        "id": "1463714",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Vĩnh Long là người nuôi tôm thẻ công nghệ cao, lãi 40 tỷ đồng/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-vinh-long-la-nguoi-nuoi-tom-the-cong-nghe-cao-lai-40-ty-dong-nam-d1463714.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/01/093616nuoi-tom-cong-nghe-cao-2-0933.jpg",
        "sapo": "Nuôi tôm thẻ công nghệ cao trên diện tích 45 ha, ông Đặng Văn Bảy (Bảy An) ở ấp Đại Thôn, xã Thạnh Phong, huyện Thạnh Phú, tỉnh Bến Tre (nay là ấp Đại Thôn, xã Thạnh Phong, tỉnh Vĩnh Long) đạt lợi nhuận khoảng 40 tỷ đồng/năm. Ông Bảy An trở thành một trong 96 gương mặt nhà nông tiêu biểu được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Vĩnh Long",
        "date": "02/10/2026"
      },
      {
        "id": "1463500",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Bạc Liêu, nay là Cà Mau, tỷ phú nuôi tôm thành công",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-bac-lieu-nay-la-ca-mau-ty-phu-nuoi-tom-thanh-cong-d1463500.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/30/1227511790745007012_1490451695551685427_2423669720379595582_6b1a029e5018043b67099d3921efc5ab-1224.jpg",
        "sapo": "Trở thành tỷ phú nhờ vào nghề nuôi tôm, ông Bùi Nghĩa Hiệp (Hai Hiệp) ở ấp Điền Hải, xã Long Điền, tỉnh Cà Mau (địa phận thuộc xã Điền Hải, huyện Đông Hải, tỉnh Bạc Liêu trước đây) vẫn học hỏi kinh nghiệm nuôi tôm tiên tiến trong và ngoài nước. Nuôi tôm mang lại cho ông Hiệp doanh thu lên đến hàng chục tỷ đồng/năm, được bình chọn là Nông dân Việt Nam xuất sắc 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Cà Mau",
        "date": "01/10/2026"
      },
      {
        "id": "1463562",
        "title": "Một người Thanh Hóa từng đạp xe cọc cạch bán rong 'quốc hồn quốc túy', này là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/mot-nguoi-thanh-hoa-tung-dap-xe-coc-canh-ban-rong-quoc-hon-quoc-tuy-nay-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1463562.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/30/1790757809571_1497495580962390835_3897307368532049901_28caa97368ca8ad6475b5c87b634f573-1550.jpg",
        "sapo": "Từ chiếc xe đạp cọc cạch chở từng chai nước mắm truyền thống, hũ mắm tôm (thức chấm nhiều người ví như \"quốc hồn quốc túy\" rong ruổi khắp các vùng quê Thanh Hóa, bà Lê Thị Liễu, phường Tĩnh Gia, đã từng bước gây dựng cơ sở chế biến hải sản rộng khoảng 5.000 m², với 7 sản phẩm được công nhận OCOP. Năm 2026, bà Liễu được bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới\".",
        "category": "Gương mặt Điển hình",
        "location": "Thanh Hóa",
        "date": "01/10/2026"
      },
      {
        "id": "1463121",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ tỉnh Lâm Đồng, người có cơ ngơi trăm tỷ từ nghề trồng hoa lan",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tinh-lam-dong-nguoi-co-co-ngoi-tram-ty-tu-nghe-trong-hoa-lan-d1463121.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/28/img_0115-2123.jpg",
        "sapo": "Ông Phan Thanh Sang được chọn là Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026. Xuất phát từ một thanh niên, nông dân trồng hoa lan hồ điệp, nay, mỗi năm công ty của ông Sang trồng khoảng 1,5 triệu chậu lan hoa lan hồ điệp làm giống và hoa lan hồ điệp thành phẩm, doanh thu khoảng gần 200 tỷ đồng.",
        "category": "Gương mặt Điển hình",
        "location": "Lâm Đồng",
        "date": "30/09/2026"
      },
      {
        "id": "1463137",
        "title": "Tỷ phú cá tra An Giang với 18 năm 'ngược dòng, làm giàu khác người' là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/ty-phu-ca-tra-an-giang-voi-18-nam-nguoc-dong-lam-giau-khac-nguoi-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1463137.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/29/img_5982-1222.jpg",
        "sapo": "Câu chuyện của tỷ phú Trần Tấn Thành (SN 1966, trú tại ấp Mỹ Quí, xã Vĩnh Thạnh Trung, tỉnh An Giang) bền bỉ với cách làm giàu từ mô hình nuôi cá tra. Mới đây, với hành trình bền bỉ làm kinh tế và cống hiến cho cộng đồng, ông vinh dự được bình chọn là \"Nông dân Việt Nam xuất sắc 40 năm Đổi mới\"-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "An Giang",
        "date": "30/09/2026"
      },
      {
        "id": "1462787",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới: Từng nghĩ không thể trụ lại, nay làm bà chủ 28ha ở Đắk Lắk",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-tung-nghi-khong-the-tru-lai-nay-lam-ba-chu-28ha-o-dak-lak-d1462787.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/27/img_1665-1703.jpg",
        "sapo": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Đắk Lắk, bà Lê Thị Yến từng có những ngày nghĩ gia đình không thể trụ lại Ea H’Leo vì những cơn sốt rét. Từ 5 sào đất ban đầu, bà kiên trì làm ăn, mở rộng sản xuất và đến nay có 25ha cao su, 3ha cà phê cùng nhà nuôi chim yến.",
        "category": "Gương mặt Điển hình",
        "location": "Đắk Lắk",
        "date": "28/09/2026"
      },
      {
        "id": "1462784",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lai Châu: Làm chè phải có cái tâm!",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-lai-chau-lam-che-phai-co-cai-tam-d1462784.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/27/che-ba-nu-5-1631.jpg",
        "sapo": "Qua gần hai thập kỷ kiên trì, nỗ lực, đưa cái tâm đến với từng bản, khu phố trong vùng chè nguyên liệu, bà Phạm Thị Nụ, ở tổ dân phố số 1, phường Tân Phong, tỉnh Lai Châu (trước là bản Cư Nhà La, phường Tân Phong) không chỉ tạo dựng nên một công ty chè với doanh thu gần 60 tỷ đồng/năm, mà còn biến hàng trăm héc-ta chè cằn cỗi thành \"vàng xanh\". Bà Nụ vinh dự được bình chọn là một trong 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": "28/09/2026"
      },
      {
        "id": "1462351",
        "title": "Nông dân xuất sắc 40 năm đổi mới ở Phú Thọ: Bản lĩnh vượt bão giá, bão dịch, dựng cơ nghiệp hơn 110 tỷ đồng",
        "url": "https://danviet.vn/nong-dan-xuat-sac-40-nam-doi-moi-o-phu-tho-ban-linh-vuot-bao-gia-bao-dich-dung-co-nghiep-hon-110-ty-dong-d1462351.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/26/24da8b69-44af-492d-8cf4-549ef2b1d085-0854.png",
        "sapo": "Với ông Bùi Đức Luận (SN 1957, Phú Thọ) – Nông dân Việt Nam xuất sắc 40 năm đổi mới, làm nông không chỉ để mưu sinh mà còn là sự gắn bó với đất đai, cây trồng, vật nuôi. Từ tình yêu ấy, ông đã vượt qua những đợt bão giá, bão dịch, từng bước gây dựng cơ nghiệp triệu đô.",
        "category": "Gương mặt Điển hình",
        "location": "Phú Thọ",
        "date": "27/09/2026"
      },
      {
        "id": "1462330",
        "title": "Nông dân Việt Nam xuất sắc 40 năm đổi mới đến từ An Giang “biến” 5.000 công đất phèn thành cánh đồng lúa xuất khẩu",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-an-giang-bien-5000-cong-dat-phen-thanh-canh-dong-lua-xuat-khau-d1462330.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/25/img_5936-1525.jpg",
        "sapo": "Từ vùng đất trũng phèn từng bị xem là “đất chết”, sau hơn 25 năm, ông Nguyễn Thanh Tuấn đã cùng gia đình cải tạo 5.000 công đất, tương đương 500ha, thành cánh đồng lúa quy mô lớn, có vụ đạt năng suất 10 tấn/ha.",
        "category": "Gương mặt Điển hình",
        "location": "An Giang",
        "date": "26/09/2026"
      },
      {
        "id": "1462083",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Tây Ninh, trồng cây khóm kiểu này mà thu lời gần 4 tỷ/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tay-ninh-trong-cay-khom-kieu-nay-ma-thu-loi-gan-4-ty-nam-d1462083.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/24/nguyen-van-sau-phuoc-chi-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tay-ninh-trong-khom-tren-dat-phen-thu-loi-gan-4-ty-moi-nam-4-1639.jpg",
        "sapo": "Từ vùng đất phèn, trũng ngập, cây lúa nhiều phen thất bát, ông Nguyễn Văn Sáu ở xã Phước Chỉ, tỉnh Tây Ninh đã mạnh dạn chuyển sang trồng khóm. Không chỉ thay đổi cây trồng, ông còn tự cải tạo đất, làm đê bao, thay đổi cách lên líp, tăng mật độ cây và từng bước hình thành vùng khóm hơn 60ha.",
        "category": "Gương mặt Điển hình",
        "location": "Tây Ninh",
        "date": "25/09/2026"
      },
      {
        "id": "1461505",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Đồng Nai nhìn thấy “mỏ vàng” ở trái mít non vứt vạ vật ngoài vườn",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-dong-nai-nhin-thay-mo-vang-o-trai-mit-non-vut-va-vat-ngoai-vuon-d1461505.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/22/nguyen-viet-vi-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-dong-nai-nhin-thay-mo-vang-trong-trai-mit-non-bi-vut-ngoai-vuon-2-1637.jpg",
        "sapo": "Nhiều trái mít non thường bị hái bỏ để cây nuôi trái lớn. Với nhiều nhà vườn, đó là phần bỏ đi. Nhưng với ông Nguyễn Viết Vị - Giám đốc HTX TM-DV Nông nghiệp Phước Thiện ở ấp Bàu Vàng, xã Tân Quan, TP Đồng Nai (tỉnh Bình Phước trước đây), những trái mít non ấy lại trở thành nguyên liệu để chế biến thịt thực vật, làm chả lụa, chả giò, mít kho hạt điều...; mở ra 1 hướng làm giàu mới cho nông dân và HTX.",
        "category": "Gương mặt Điển hình",
        "location": "Bình Phước",
        "date": "24/09/2026"
      },
      {
        "id": "1461419",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Bắc Ninh: Biến phân lợn, phân vịt thành tiền, thu 2 tỷ đồng/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-bac-ninh-bien-phan-lon-phan-vit-thanh-tien-thu-2-ty-dong-nam-d1461419.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/23/013846hoang-dinh-que-1-0138.png",
        "sapo": "Từ một người nông dân từng dựng lán dưới chân núi Cô Tiên, ông Hoàng Đình Quê ở phường Tân An, tỉnh Bắc Ninh đã gây dựng trang trại tuần hoàn rộng 4,5ha, trị giá khoảng 45 tỷ đồng. Đặc biệt, phân lợn, phân vịt tại trang trại không bị bỏ đi mà được xử lý để nuôi trùn quế, làm phân bón, nuôi cá..., tạo thành vòng tuần hoàn giúp ông thu khoảng 2 tỷ đồng/năm. Năm 2026, ông được tôn vinh là Nông dân Việt Nam xuất sắc 40 năm Đổi mới và Nhà Khoa học của Nhà nông.",
        "category": "Gương mặt Điển hình",
        "location": "Bắc Ninh",
        "date": "24/09/2026"
      },
      {
        "id": "1461386",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới ở Cà Mau là 'vua' nuôi con đặc sản, lãi ròng hơn 5 tỷ đồng/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-o-ca-mau-la-vua-nuoi-con-dac-san-lai-rong-hon-5-ty-dong-nam-d1461386.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/22/1548071790057013732_1490451695551685427_2423669720379595582_4a619a80edd14722d46e6c4818b60ba7-1537.jpg",
        "sapo": "Ông Nguyễn Hữu Ánh (69 tuổi, ngụ phường Tân Thành, tỉnh Cà Mau) vừa được Trung ương Hội NDVN bình chọn trao danh hiệu \"Nông dân Việt Nam xuất sắc 40 năm Đổi mới năm 2026\". Đây là lần thứ 3, ông \"vua\" cá chình - người thu lãi ròng hơn 5 tỷ đồng mỗi năm vinh dự nhận được danh hiệu này.",
        "category": "Gương mặt Điển hình",
        "location": "Cà Mau",
        "date": "23/09/2026"
      },
      {
        "id": "1461317",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lai Châu, thu tiền tỷ từ nuôi trồng loại nấm này",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-lai-chau-thu-tien-ty-tu-nuoi-trong-loai-nam-nay-d1461317.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/21/huy-cuong-2-2202.jpg",
        "sapo": "Trải qua vô số lần thất bại, cuối cùng ông Đào Huy Cương ở tổ dân phố số 6, phường Đoàn Kết, tỉnh Lai Châu (trước thuộc tổ 5, phường Quyết Tiến, thành phố Lai Châu) cũng mỉm cười với thành công từ nghề nuôi trồng nấm đông trùng hạ thảo. Mỗi năm, ông Cương thu từ 5 – 7 tỷ đồng từ bán các sản phẩm nấm đông trùng hạ thảo ra thị trường. Ông vinh dự được bình chọn là một trong 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": "23/09/2026"
      },
      {
        "id": "1461383",
        "title": "Nông dân Việt Nam xuất sắc Phú Thọ: Từ sợi mì quê nhà đến giấc mơ thế giới biết đến Hùng Lô",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-phu-tho-tu-soi-mi-que-nha-den-giac-mo-the-gioi-biet-den-hung-lo-d1461383.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/22/1790054009468_1505870955534806835_7769722468477806085_375d9d7fe84a467a726b0190bb4bacb4-1217.jpg",
        "sapo": "Từ nghề làm mì truyền thống của quê hương, anh Cao Đăng Duy – Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Phú Thọ – đã cùng HTX Mì gạo Hùng Lô đưa sản phẩm đạt OCOP 5 sao, xuất khẩu sang Nhật Bản, Đài Loan. Với anh, khát vọng lớn hơn là để mỗi gói mì đi xa đều mang theo cái tên Hùng Lô đến với người tiêu dùng trong và ngoài nước.",
        "category": "Gương mặt Điển hình",
        "location": "Phú Thọ",
        "date": "23/09/2026"
      },
      {
        "id": "1460584",
        "title": "Từng nghèo đến nỗi không ai dám cho vay, bà nông dân Cao Bằng làm gì mà thành Nông dân Việt Nam xuất sắc?",
        "url": "https://danviet.vn/tung-ngheo-den-noi-khong-ai-dam-cho-vay-ba-nong-dan-cao-bang-lam-gi-ma-thanh-nong-dan-vie-nam-xuat-sac-d1460584.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/18/7-2223.jpg",
        "sapo": "Từng nghèo đến mức không ai dám cho vay tiền, vợ chồng bà Trần Thị Chung, ở tổ dân phố Hoàng Tung, phường Thục Phán, tỉnh Cao Bằng, phải mượn 50kg thóc của HTX để chống đói. Từ hai bàn tay trắng, sau nhiều năm gây dựng kinh tế, gia đình bà có cơ ngơi trị giá hàng chục tỷ đồng. Năm 2026, bà Chung được vinh danh là Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Hành trình 40 năm",
        "location": "",
        "date": "22/09/2026"
      },
      {
        "id": "1460877",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Gia Lai: Chủ trang trại thu tiền tỷ từ mô hình 'đa cây, đa con'",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-gia-lai-chu-trang-trai-thu-tien-ty-tu-mo-hinh-da-cay-da-con-d1460877.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/20/img_3201-0839.jpeg",
        "sapo": "Từ trang trại heo, vịt đến vườn dâu, cà phê, chị Nguyễn Thị Thùy Trang (46 tuổi, xã Mang Yang, tỉnh Gia Lai) xây dựng mô hình sản xuất tổng hợp, cho lợi nhuận hơn 4,4 tỷ đồng, trong năm 2025. Chị vừa được vinh danh Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Gia Lai",
        "date": "22/09/2026"
      },
      {
        "id": "1460438",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới người Cờ Lao ở Tuyên Quang bán mật ong bạc hà kiểu gì mà chốt đơn tốt thế",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-nguoi-co-lao-o-tuyen-quang-ban-mat-ong-bac-ha-kieu-gi-ma-chot-don-tot-the-d1460438.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/18/1-1304.jpg",
        "sapo": "Lưu Thị Hòa bán được mật ong bạc hà cao nguyên đá Đồng Văn, tỉnh Tuyên Quang (địa phận Hà Giang cũ), chị còn xây dựng thương hiệu, chế biến sâu, kể câu chuyện hấp dẫn về loại mật này. Nữ nông dân người Cờ Lao đã trở thành một trong 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026.",
        "category": "Hành trình 40 năm",
        "location": "Tuyên Quang",
        "date": "21/09/2026"
      },
      {
        "id": "1460880",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ TP.HCM: Từ 5 con bò sữa thành chủ cơ sở làm sữa chua nổi tiếng",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tphcm-tu-5-con-bo-sua-thanh-chu-co-so-lam-sua-chua-noi-tieng-d1460880.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/20/093412img_5605-0858.jpg",
        "sapo": "Từ chăn nuôi bò sữa, nông dân Nguyễn Văn Nhiệm (ấp Tân Lễ A, xã Châu Pha, TP.HCM) phát triển thành cơ sở sản xuất sữa chua với hệ thống nhà xưởng rộng khoảng 600m², trang bị nhiều máy móc. Năm nay ông Nhiệm được bình chọn Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Gương mặt Điển hình",
        "location": "TP.HCM",
        "date": "21/09/2026"
      },
      {
        "id": "1460656",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ TPHCM (địa phận Bình Dương cũ) nuôi đàn gà 'khổng lồ' 400.000 con",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tphcm-dia-phan-binh-duong-cu-nuoi-dan-ga-khong-lo-400000-con-d1460656.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/19/img_5443-0936.jpg",
        "sapo": "Ông Đinh Ngọc Khương đến từ xã Phú Giáo, TPHCM (địa phận huyện Phú Giáo, tỉnh Bình Dương trước đây) được công nhận Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026. Hiện ông có trang trại hơn 400.000 con gà, cùng hàng chục hecta trồng sầu riêng, cao su, mít ruột đỏ.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": "21/09/2026"
      },
      {
        "id": "1459840",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới ở Lào Cai là người 'kéo' 116 nông dân vào chuỗi trồng dâu nuôi tằm tiền tỷ",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-o-lao-cai-la-nguoi-keo-116-nong-dan-vao-chuoi-trong-dau-nuoi-tam-tien-ty-d1459840.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/17/8d4cd1ae-fe63-40a0-8de0-fa13bd289d3f-1524.png",
        "sapo": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới của tỉnh Lào Cai năm nay là bà Nguyễn Thị Hồng Lê ở thôn Trúc Đình, xã Trấn Yên (địa phận tỉnh Yên Bái cũ). Bà Lê không chỉ gây dựng cơ ngơi gần 2 tỷ đồng, mà còn là Giám đốc Hợp tác xã Dâu tằm Hạnh Lê - hạt nhân kết nối hàng trăm hộ dân với doanh nghiệp, mở ra hướng đi bền vững cho kinh tế nông thôn vùng cao.",
        "category": "Gương mặt Điển hình",
        "location": "Lào Cai",
        "date": "20/09/2026"
      },
      {
        "id": "1460107",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ TP.HCM: Cầm 800.000 đồng Nam tiến, nuôi gà, trồng bưởi mà thành tỷ phú",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tphcm-cam-800000-dong-nam-tien-nuoi-ga-trong-buoi-ma-thanh-ty-phu-d1460107.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/17/img_5546-0952.jpg",
        "sapo": "Ông Tống Văn Hướng cầm 800.000 đồng dắt vợ và con nhỏ vào vùng Dầu Tiếng (tỉnh Bình Dương cũ, nay là TP.HCM) để lập nghiệp với nghề trồng cao su, bưởi, nuôi gà. 32 năm sau, ông sở hữu cơ ngơi hàng chục tỷ, là một trong 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới được công nhận năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "TP.HCM",
        "date": "18/09/2026"
      },
      {
        "id": "1459203",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Đồng Nai, liên kết thành công, nuôi gà công nghệ cao phát tài",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-dong-nai-lien-ket-thanh-cong-nuoi-ga-cong-nghe-cao-phat-tai-d1459203.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/14/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-dong-nai-gom-nong-dan-thanh-bo-dua-cung-chan-nuoi-ga-cong-nghe-cao-5-0841.jpg",
        "sapo": "Từ người từng ám ảnh vì ruồi và mùi hôi trong những chuồng gà truyền thống, ông Lê Văn Quyết - Giám đốc HTX Nông nghiệp công nghệ cao Long Thành Phát ở phường Long Thành, TP Đồng Nai đã chọn con đường chăn nuôi gà công nghệ cao. Hơn 20 năm sau, ông đang vận hành một HTX có khoảng 3 triệu con gà, với 25 thành viên.",
        "category": "Gương mặt Điển hình",
        "location": "Đồng Nai",
        "date": "17/09/2026"
      },
      {
        "id": "1459786",
        "title": "Một người Sơn La bỏ túi tiền tỷ nhờ bí quyết “khoanh gốc, đốn cành”, là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/mot-nguoi-son-la-bo-tui-tien-ty-nho-bi-quyet-khoanh-goc-don-canh-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1459786.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/16/img_9261-0840.jpg",
        "sapo": "Từ kinh nghiệm trồng mận thực tế, ông Hàng A Sở (SN 1955, dân tộc Mông, tổ dân phố Pa Khen, phường Thảo Nguyên, tỉnh Sơn La) đúc kết bí quyết “khoanh gốc, đốn cành”, tập trung nâng chất lượng thay vì chạy theo sản lượng. Cách làm này giúp ông gây dựng 8 ha cây ăn quả, mang lại doanh thu hàng tỷ đồng sau khi trừ chi phí. Ông Sở được bình chọn là Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Gương mặt Điển hình",
        "location": "Sơn La",
        "date": "17/09/2026"
      },
      {
        "id": "1459303",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ TPHCM: Người sở hữu đội tàu đánh cá xa khơi, thu hàng chục tỷ đồng/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tphcm-tu-hon-15-ty-nam-co-doi-tau-danh-ca-khoi-xa-d1459303.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/14/nong-dan-1505.png",
        "sapo": "Ông Nguyễn Văn Nhỏ, xã Long Hải, TPHCM (địa phận huyện Long Đất, tỉnh Bà Rịa-Vũng Tàu cũ) được công nhận Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026. Ông Nhỏ sở hữu đội tàu cá 6 chiếc hành nghề lưới kéo khơi xa, mỗi năm thu về hàng chục tỷ đồng.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": "17/09/2026"
      },
      {
        "id": "1458512",
        "title": "Chủ tịch Tập đoàn Quế Lâm là Nông dân Việt Nam xuất sắc 40 năm Đổi mới: Dựng cơ ngơi nghìn tỷ từ cách làm này",
        "url": "https://danviet.vn/chu-tich-tap-doan-que-lam-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-dung-co-ngoi-nghin-ty-tu-cach-lam-nay-d1458512.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/14/14-1635.jpeg",
        "sapo": "Ông Nguyễn Hồng Lam - Chủ tịch HĐQT Tập đoàn Quế Lâm, Chủ tịch Hội Nông nghiệp tuần hoàn Việt Nam miệt mài theo đuổi con đường nông nghiệp hữu cơ, tuần hoàn,phổ biến tri thức nông nghiệp bền vững cho nông dân. Ông Lam được bình chọn là một trong 96 gương mặt “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”-năm 2026.",
        "category": "Chính sách & Chuyên gia",
        "location": "",
        "date": "16/09/2026"
      },
      {
        "id": "1457792",
        "title": "Từng đi buôn chè, nay có đồi chè 80ha, ông nông dân Thái Nguyên là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/tung-di-buon-che-nay-co-doi-che-80ha-ong-nong-dan-thai-nguyen-la-nong-dan-viet-nam-xuat-sac-d1457792.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/08/1788704267409_1497953192519677363_1044509912031565828_053533c6c1c14865485802884781881c-1631.jpg",
        "sapo": "Từ những chuyến buôn chè nhỏ lẻ, ông Hoàng Văn Thanh từng bước tích lũy vốn, gây dựng thị trường rồi thành lập HTX Chè Hà Thanh. Gần 40 năm gắn bó với cây chè, ông đã xây dựng vùng liên kết khoảng 80ha, đưa 60% sản lượng lên các nền tảng trực tuyến và hướng tới xuất khẩu. Năm 2026, ông Hoàng Văn Thanh được bình chọn là 1 trong 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Gương mặt Điển hình",
        "location": "Thái Nguyên",
        "date": "16/09/2026"
      },
      {
        "id": "1459473",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lào Cai góp sức 'đẩy' chất lượng hạt gạo đặc sản lên tầm cao mới",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-lao-cai-gop-suc-day-chat-luong-hat-gao-dac-san-len-tam-cao-moi-d1459473.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/15/img_9236-0818.jpg",
        "sapo": "Từ tình yêu với hạt gạo quê hương, chị Phạm Thị Hảo (SN 1981), Tổ dân phố Cánh Chín, phường Lào Cai, tỉnh Lào Cai đã gây dựng hướng đi riêng từ sản xuất, chế biến, kinh doanh gạo Séng Cù Mường Vi-1 loại gạo đặc sản và gạo lứt Séng Cù Mường Vi, đưa hương thơm đặc sản vùng cao đến với người tiêu dùng.",
        "category": "Gương mặt Điển hình",
        "location": "Lào Cai",
        "date": "16/09/2026"
      },
      {
        "id": "1459211",
        "title": "'Nông dân Việt Nam xuất sắc 40 năm Đổi mới' đến từ Vĩnh Long (Trà Vinh cũ) đang làm chủ chuỗi trồng lúa 150ha",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-vinh-long-tra-vinh-cu-dang-lam-chu-chuoi-trong-lua-150ha-d1459211.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/14/163101nong-dan-viet-nam-xuat-sac-1-1615.jpg",
        "sapo": "Anh Trầm Minh Thuần ở ấp Chợ, xã Long Hiệp, tỉnh Vĩnh Long (địa phận huyện Trà Cú, tỉnh Vĩnh Long cũ), hiện là Giám đốc Hợp tác xã Nông nghiệp Long Hiệp. Anh Thuần trở thành một trong 96 gương mặt nhà nông tiêu biểu được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Vĩnh Long",
        "date": "15/09/2026"
      },
      {
        "id": "1459572",
        "title": "Sở hữu 3 bằng sáng chế độc quyền, một người Quảng Ninh được vinh danh Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/so-huu-3-bang-sang-che-doc-quyen-mot-nguoi-quang-ninh-duoc-vinh-danh-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1459572.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/15/dinh-van-giang-hiep-hoa-quang-ninh-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-3-1250.jpg",
        "sapo": "Dù chưa từng qua trường lớp đào tạo kỹ thuật chính quy, nhưng ông Đinh Văn Giang (SN 1968), phường Hiệp Hòa, TP Quảng Ninh (địa phận Quảng Yên cũ) vẫn sáng chế ra loạt máy nông nghiệp, sở hữu 3 bằng sáng chế độc quyền. Với đóng góp thiết thực đó, ông Giang được vinh danh là Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm, 2026.",
        "category": "Hành trình 40 năm",
        "location": "",
        "date": "15/09/2026"
      },
      {
        "id": "1459279",
        "title": "Từ kỹ sư công nghệ thành “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”, tạo “miền Tây thu nhỏ” giữa Ninh Bình",
        "url": "https://danviet.vn/tu-ky-su-cong-nghe-thanh-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-tao-mien-tay-thu-nho-giua-ninh-binh-d1459279.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/14/1543401789375303213_2298660788091522360_4274995089848573069_07dee0159973a340df2687e390e0d7f8-1543.jpg",
        "sapo": "Rẽ hướng từ một kỹ sư công nghệ làm việc cho doanh nghiệp nước ngoài về quê khởi nghiệp, anh Đinh Văn Thuận (xã Hải Quang, tỉnh Ninh Bình) đã biến những bãi đất bạc màu thành mô hình kinh tế tuần hoàn, kết hợp trồng dừa, nuôi chim yến và du lịch sinh thái. Với tư duy làm nông nghiệp 4.0, anh Thuận sở hữu doanh thu lên tới 9 tỷ đồng/năm, vinh dự đón nhận Huân chương Lao động hạng Ba và được bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Ninh Bình",
        "date": "15/09/2026"
      },
      {
        "id": "1459014",
        "title": "Rời bục giảng về quê làm trang trại 30ha ở Phú Thọ, ông chủ thu 200 tỷ/năm, là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/roi-buc-giang-ve-que-lam-trang-trai-30ha-o-phu-tho-ong-chu-thu-200-ty-nam-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1459014.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/13/1789285112277_1505870955534806835_7769722468477806085_ce70cae992e69cb9b7783f8a6f8106b1-1529.jpg",
        "sapo": "Từ một giảng viên rẽ ngang về quê \"làm ruộng\", anh Lê Mạnh Cường, xã Tu Vũ, tỉnh Phú Thọ (địa phận huyện Thanh Thủy cũ) đã gây dựng trang trại nông nghiệp tuần hoàn \"hoành tráng\" rộng 30ha, doanh thu 200 tỷ/năm. Năm 2026, anh tiếp tục được bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” – sự ghi nhận cho hành trình dám nghĩ, dám làm và không ngừng đổi mới trên vùng đất Phú Thọ.",
        "category": "Gương mặt Điển hình",
        "location": "Phú Thọ",
        "date": "14/09/2026"
      },
      {
        "id": "1458780",
        "title": "Nông dân Việt Nam xuất sắc ở Tuyên Quang: Từ cậu bé nghèo mồ côi cha đến 'ông chủ' nông nghiệp tuần hoàn",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-o-tuyen-quang-tu-cau-be-ngheo-mo-coi-cha-den-ong-chu-nong-nghiep-tuan-hoan-d1458780.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/12/1789119715246_4492393569891565977_4492393569891565977_eb7e442ab8ec89d5057ec035d4e4f00f-0926.jpg",
        "sapo": "Từ một mô hình chăn nuôi nhỏ lẻ, Nông dân Việt Nam xuất sắc 40 năm đổi mới ở Tuyên Quang đã từng bước xây dựng Hợp tác xã sản xuất thực phẩm an toàn Sáng Nhung (HTX Sáng Nhung) theo chuỗi khép kín \"từ trang trại đến bàn ăn\", biến chất thải chăn nuôi thành phân hữu cơ, phụ phẩm nông nghiệp thành nguyên liệu sản xuất.",
        "category": "Gương mặt Điển hình",
        "location": "Tuyên Quang",
        "date": "14/09/2026"
      },
      {
        "id": "1458524",
        "title": "Kỹ sư bách khoa về quê Nghệ An sáng chế máy nông nghiệp, là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/ky-su-bach-khoa-ve-que-nghe-an-sang-che-may-nong-nghiep-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1458524.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/11/anh-vinh-nong-dan-18-1028.jpg",
        "sapo": "Tốt nghiệp Đại học Bách khoa Hà Nội, anh Hồ Xuân Vinh về quê ở xã Quỳnh Văn, tỉnh Nghệ An sáng chế hàng chục loại máy nông nghiệp, tiểu thủ công nghiệp, giúp bà con nông dân đỡ vất vả. Với những cống hiến của mình, chàng kỹ sư Bách khoa năm nào giờ được tôn vinh là Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Hành trình 40 năm",
        "location": "Hà Nội",
        "date": "13/09/2026"
      },
      {
        "id": "1458372",
        "title": "Tạo việc cho 5.000 lao động, một ông nông dân Ninh Bình được chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”",
        "url": "https://danviet.vn/tao-viec-cho-5000-lao-dong-mot-ong-nong-dan-ninh-binh-duoc-chon-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1458372.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/10/img_7807-1846.jpg",
        "sapo": "Xuất thân từ một gia đình nông dân, thấu hiểu nỗi nhọc nhằn của những ngày tháng thiếu thốn, ông Phạm Đăng Khuyến (xã Khánh Nhạc, tỉnh Ninh Bình) đã biến những nguyên liệu bỏ ngỏ ở làng quê thành mặt hàng thủ công mỹ nghệ xuất khẩu giá trị cao. Cơ sở của ông Khuyến không chỉ mang lại doanh thu hơn trăm tỷ đồng mà còn tạo sinh kế, thu nhập ổn định cho hàng nghìn lao động địa phương.",
        "category": "Gương mặt Điển hình",
        "location": "Ninh Bình",
        "date": "13/09/2026"
      },
      {
        "id": "1458538",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Đồng Nai giúp người trồng ca cao đổi đời theo kiểu này",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-dong-nai-giup-nguoi-trong-ca-cao-doi-doi-theo-kieu-nay-d1458538.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/11/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-o-dong-nai-giup-nguoi-trong-ca-cao-doi-vai-khong-chi-biet-trong-roi-ban-1-1041.jpg",
        "sapo": "Tại xã Phú Hòa, TP Đồng Nai, ông Đặng Tường Khanh - Chủ tịch kiêm Tổng Giám đốc Công ty TNHH Ca cao Trọng Đức đang theo đuổi cách làm khác với cây ca cao. Ông không muốn nông dân chỉ trồng, thu hoạch rồi bán hạt. Qua chuỗi liên kết với doanh nghiệp, người trồng ca cao được định vị là nhà cung ứng, có vai trò cao hơn trong chuỗi giá trị từ vùng nguyên liệu đến chế biến.",
        "category": "Gương mặt Điển hình",
        "location": "Đồng Nai",
        "date": "12/09/2026"
      },
      {
        "id": "1458589",
        "title": "Một người Quảng Ninh hơn 15 năm gắn bó với cây dược liệu là Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026",
        "url": "https://danviet.vn/mot-nguoi-quang-ninh-hon-15-nam-gan-bo-voi-cay-duoc-lieu-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-nam-2026-d1458589.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/11/bup_7196-2-1642.jpg",
        "sapo": "Hơn 15 năm gắn bó với cây dược liệu, ông Phạm Việt Trung (TP Quảng Ninh) không chỉ bảo tồn nhiều loại dược liệu quý, mà còn tạo sinh kế cho người dân địa phương. Những nỗ lực ấy giúp ông được bình chọn là Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Hành trình 40 năm",
        "location": "",
        "date": "12/09/2026"
      },
      {
        "id": "1458138",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Thái Nguyên: 'Đã có lúc bà con hoài nghi tôi, muốn bỏ hợp tác xã”",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-thai-nguyen-da-co-luc-ba-con-hoai-nghi-toi-muon-bo-hop-tac-xa-d1458138.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/10/11-0957.jpg",
        "sapo": "Từ bản làng nghèo khó, thiếu thốn đủ đường, người phụ nữ dân tộc Tày Ma Thị Ninh đã kiên cường vượt qua rào cản ngôn ngữ, định kiến và cái nghèo. Bằng tư duy đổi mới, chị đã biến nông sản địa phương thành sinh kế bền vững và vinh dự trở thành Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Thái Nguyên",
        "date": "11/09/2026"
      },
      {
        "id": "1457815",
        "title": "Nông dân Việt Nam xuất sắc '40 năm Đổi mới' đến từ Sơn La, từ hai bàn tay trắng đến cơ nghiệp tiền tỷ trên đất dốc",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-son-la-tu-hai-ban-tay-trang-den-co-nghiep-tien-ty-tren-dat-doc-d1457815.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/08/7c5a7580-1748.jpg",
        "sapo": "Hơn 30 năm trước, ông Nguyễn Văn Binh rời Hưng Yên lên Sơn La khai hoang với gần như chỉ đôi bàn tay trắng. Từ những triền đất dốc kém hiệu quả ở bản Hua Đán, xã Chiềng Hặc, ông từng bước gây dựng vùng cây ăn quả rộng 30 ha, cho lợi nhuận hàng tỷ đồng mỗi năm và tạo việc làm cho hàng chục lao động địa phương. Vừa qua, ông Binh được bình chọn là một trong 96 gương mặt “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”.",
        "category": "Gương mặt Điển hình",
        "location": "Sơn La",
        "date": "11/09/2026"
      },
      {
        "id": "1457484",
        "title": "'Qua cái hạn' của hươu sao, một nông dân Hà Tĩnh nay được vinh danh 'Nông dân Việt Nam xuất sắc 40 năm Đổi mới'",
        "url": "https://danviet.vn/qua-cai-han-cua-huou-sao-mot-nong-dan-ha-tinh-nay-duoc-vinh-danh-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1457484.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/07/1788745298223_8037550690275722271_8037550690275722271_2d37a9fde74d8127e2bab78f32601829-1500.jpg",
        "sapo": "Từng chứng kiến giá hươu sao lao dốc từ 50-60 triệu đồng xuống chỉ còn vài trăm nghìn đồng/con, gia đình bà Chu Thị Hồng Hà ở xã Sơn Giang, tỉnh Hà Tĩnh (huyện Hương Sơn cũ) từng đối mặt khoản nợ hơn 700 triệu đồng. \"Cái hạn\" này bà Hồng đã vượt qua. Năm 2026, bà Chu Thị Hồng Hà vinh dự được bình chọn là một trong 96 gương mặt “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Hà Tĩnh",
        "date": "10/09/2026"
      },
      {
        "id": "1457596",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ An Giang, một người trồng lúa kiểu 'kéo' 670 hộ cùng làm giàu",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-an-giang-mot-nguoi-trong-lua-kieu-keo-670-ho-cung-lam-giau-d1457596.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/07/ong-nguyen-hong-phuong--htx-duong-go-lo--long-thanh--an-giang-2156.jpg",
        "sapo": "Ông Nguyễn Hồng Phương đã cùng nông dân xây dựng HTX Nông nghiệp Đường Gỗ Lộ thành một vùng sản xuất rộng hơn 1.200ha với 670 thành viên. Ông Phương “tự mình làm trước”, từ thử giống lúa Nhật, giảm chi phí, sản xuất theo hướng hữu cơ đến tìm đầu ra cho hạt gạo. Những nỗ lực ấy giúp ông Phương được Trung ương Hội Nông dân Việt Nam bình chọn là Nông dân Việt Nam xuất sắc 40 năm đổi mới.",
        "category": "Gương mặt Điển hình",
        "location": "An Giang",
        "date": "10/09/2026"
      },
      {
        "id": "1457800",
        "title": "Một người Đắk Lắk nâng cao giá trị hạt cà phê gần 40 lần, là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/mot-nguoi-dak-lak-nang-cao-gia-tri-hat-ca-phe-gan-40-lan-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1457800.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/08/img_1284-1656.jpg",
        "sapo": "Gần 30 năm gắn bó với cà phê chồn, ông Hoàng Mạnh Cường (Đắk Lắk) không chỉ tạo dựng mô hình nuôi chồn bán hoang dã độc đáo mà còn đưa sản phẩm cà phê chồn Kiên Cường đạt OCOP 5 sao, nâng cao giá trị hạt cà phê gấp gần 40 lần và từng bước chinh phục thị trường quốc tế. Những nỗ lực ấy giúp ông được bình chọn là một trong 96 “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Đắk Lắk",
        "date": "10/09/2026"
      },
      {
        "id": "1457711",
        "title": "'Nông dân Việt Nam xuất sắc 40 năm Đổi mới' đến từ Cần Thơ là người trồng sầu riêng thu tiền tỷ",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-can-tho-la-nguoi-trong-sau-rieng-thu-tien-ty-d1457711.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/08/trong-sau-rieng-1-1529.jpg",
        "sapo": "Với 3 ha sầu riêng và cách làm khác biệt, hàng năm ông Trần Văn Chiến (SN 1956, ở ấp Trường Khương A, xã Trường Long, TP Cần Thơ) thu lợi nhuận khoảng 3 tỷ đồng. Ông Chiến trở thành một trong 96 gương mặt nhà nông tiêu biểu được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": "09/09/2026"
      },
      {
        "id": "1457669",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lào Cai, biến vườn hoa hồng cổ thành điểm du lịch hút khách",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-lao-cai-bien-vuon-hoa-hong-co-thanh-diem-du-lich-hut-khach-d1457669.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/08/img_8660-1037.jpg",
        "sapo": "Anh Đỗ Phú Chính, Tổ dân phố Ô Quý Hồ 2, phường Sa Pa, tỉnh Lào Cai đã kiên trì sưu tầm, bảo tồn gần 100 giống hoa hồng cổ, trong đó có loài hoa hồng cổ Sapa, phát triển thành sản phẩm du lịch trải nghiệm và nhà hàng. Anh Chính vinh dự được chọn là một trong những Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026.",
        "category": "Hành trình 40 năm",
        "location": "Lào Cai",
        "date": "09/09/2026"
      },
      {
        "id": "1457382",
        "title": "Ông nông dân Hà Nội là Nông dân Việt Nam xuất sắc 40 năm Đổi mới, chỉ trồng 1 loại hoa 'chiêu tài' mà doanh thu tiền tỷ",
        "url": "https://danviet.vn/ong-nong-dan-ha-noi-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-chi-trong-1-loai-hoa-chieu-tai-ma-doanh-thu-tien-ty-d1457382.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/07/161727img_2689-1617.png",
        "sapo": "Hơn 15 năm chỉ trồng độc loài hoa đồng tiền có ý nghĩa chiêu tài trong phong thủy, ông Bùi Văn Khá (nông dân xã Đan Phượng, TP Hà Nội) nay đã có doanh thu tiền tỷ/năm; cùng bà con, anh em trong vùng xây dựng một trong những vùng trồng hoa có quy mô lớn nhất Hà Nội, tạo việc làm cho hàng chục lao động địa phương. Ông Khá là một trong 96 gương mặt vinh dự được bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” - năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Hà Nội",
        "date": "08/09/2026"
      },
      {
        "id": "1457539",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Nghệ An, nuôi tôm công nghệ cao, là tỷ phú, từng kiêm nhiều chức vụ",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-nghe-an-nuoi-tom-cong-nghe-cao-la-ty-phu-tung-kiem-nhieu-chuc-vu-d1457539.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/08/nong-dan-xuat-sac-2-0000.jpg",
        "sapo": "Ông Nguyễn Văn Hòa, xã Hải Châu, tỉnh Nghệ An (địa phận huyện Diễn Châu cũ) được vinh danh là Nông dân Việt Nam xuất sắc 40 năm Đổi mới. Trước khi thành tỷ phú nuôi tôm công nghệ cao, doanh thu 10 tỷ/năm, ông Hòa từng đảm nhiệm nhiều chức vụ ở xã Diễn Kim cũ.",
        "category": "Gương mặt Điển hình",
        "location": "Nghệ An",
        "date": "08/09/2026"
      },
      {
        "id": "1457523",
        "title": "Một nữ nông dân Thái Nguyên thu tiền tỷ từ cây chè, là Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026",
        "url": "https://danviet.vn/mot-nu-nong-dan-thai-nguyen-thu-tien-ty-tu-cay-che-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-nam-2026-d1457523.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/07/1788704224757_1497953192519677363_1044509912031565828_2d06b7a5b6080463452ebb8b3de68fe1-1636.jpg",
        "sapo": "Bà Nguyễn Thị Hiền - Chủ tịch HĐQT, Giám đốc Công ty cổ phần Chè Hà Thái - đã bền bỉ gắn bó với cây chè, thay đổi cách làm, nâng chất lượng sản phẩm, đưa trà Thái Nguyên từng bước chinh phục nhiều thị trường khó tính. Bà Hiền trở thành một trong 96 gương mặt nhà nông tiêu biểu được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Thái Nguyên",
        "date": "08/09/2026"
      },
      {
        "id": "1457092",
        "title": "Nông dân Việt Nam 40 năm Đổi mới đến từ Ninh Bình (Hà Nam cũ), dựng cơ nghiệp lớn, doanh thu 5 tỷ/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-40-nam-doi-moi-den-tu-ninh-binh-ha-nam-cu-dung-co-nghiep-lon-doanh-thu-5-ty-nam-d1457092.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/06/1056551788660158055_2298660788091522360_4274995089848573069_f4963850d492ecac81142fde7f7cfa27-1051.jpg",
        "sapo": "Sau ngày xuất ngũ, ông Trương Minh Ngọc, xã Nhân Hà, tỉnh Ninh Bình (địa phận huyện Lý Nhân, tỉnh Hà Nam cũ) đã gây dựng cơ sở gia công đồ gỗ mỹ nghệ, kinh doanh cây cảnh có doanh thu khoảng 5 tỷ đồng/năm. Hành trình bền bỉ vượt khó, làm giàu trên quê hương đã đưa người cựu binh này trở thành “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Ninh Bình",
        "date": "07/09/2026"
      },
      {
        "id": "1457210",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới, tỷ phú Đà Nẵng làm giàu từ đất cằn, 'quả ngon ngọt' chia sẻ với cộng đồng",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-ty-phu-da-nang-lam-giau-tu-dat-can-qua-ngon-ngot-chia-se-voi-cong-dong-d1457210.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/06/1-1106.png",
        "sapo": "Từ vùng đất gò đồi bạc màu, ông Phan Ngọc Anh (SN 1955), ở xã Thu Bồn, TP Đà Nẵng (địa phận tỉnh Quảng Nam cũ) đã gây dựng nên cơ nghiệp với doanh thu hàng trăm tỷ đồng/năm, tạo việc làm cho gần 300 lao động. Năm 2026, ông vinh dự được bình chọn là một trong 96 gương mặt “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”.",
        "category": "Gương mặt Điển hình",
        "location": "Đà Nẵng",
        "date": "07/09/2026"
      },
      {
        "id": "1456630",
        "title": "Gần 40 năm theo nghề nuôi gà, một người Hải Phòng 2 lần nhận danh hiệu 'Nông dân Việt Nam xuất sắc'",
        "url": "https://danviet.vn/bam-dan-ga-gan-40-nam-nong-dan-hai-phong-gio-co-5-van-con-hai-lan-la-nong-dan-viet-nam-xuat-sac-d1456630.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/04/074546trung-ai-dien-0722.jpg",
        "sapo": "Sau 40 năm bền bỉ gây dựng, ông Đào Hữu Thuân ở thôn Cẩm Đông, xã Mao Điền, TP Hải Phòng (địa phận huyện Cẩm Giàng, tỉnh Hải Dương cũ) đã có hệ thống trang trại chăn nuôi gà quy mô lớn, ứng dụng công nghệ hiện đại. Ông vinh dự được bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới\"-năm 2026”.",
        "category": "Gương mặt Điển hình",
        "location": "Hải Phòng",
        "date": "06/09/2026"
      },
      {
        "id": "1456551",
        "title": "Thầy giáo Đà Nẵng giữ nghề làm nước mắm gia truyền qua 4 đời, là 'Nông dân Việt Nam xuất sắc 40 năm Đổi mới'",
        "url": "https://danviet.vn/thay-giao-da-nang-giu-nghe-lam-nuoc-mam-gia-truyen-qua-4-doi-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1456551.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/03/ntd_0699-1703.jpg",
        "sapo": "Anh Bùi Thanh Phú, phường Hải Vân, TP Đà Nẵng dành nhiều tâm huyết gìn giữ, phát triển nghề làm nước mắm truyền thống của gia đình. Anh Bùi Thanh Phú vừa được Hội đồng Chung khảo Trung ương bình chọn là một trong 96 gương mặt “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Hành trình 40 năm",
        "location": "Đà Nẵng",
        "date": "06/09/2026"
      },
      {
        "id": "1456842",
        "title": "Tỷ phú Cần Thơ đưa sầu riêng xuất khẩu ra chợ quốc tế là nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/ty-phu-can-tho-dua-sau-rieng-ra-xuat-khau-ra-cho-quoc-te-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1456842.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/04/sau-bo-2-1950.jpg",
        "sapo": "Ông Lê Văn Sáu, thường gọi Sáu Bờ, ở ấp Tân Thành, xã Tân Bình, TP Cần Thơ (địa phận huyện Phụng Hiệp, tỉnh Hậu Giang cũ) đã gây dựng được vườn sầu riêng rộng 5,5ha, mỗi năm cho doanh thu khoảng 6-7 tỷ đồng, lợi nhuận 5-6 tỷ đồng. Ông Lê Văn Sáu là 1 trong 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Hậu Giang",
        "date": "05/09/2026"
      },
      {
        "id": "1456710",
        "title": "Chính thức công nhận danh hiệu 'Nông dân Việt Nam xuất sắc 40 năm Đổi mới' năm 2026 cho 96 nông dân",
        "url": "https://danviet.vn/chinh-thuc-cong-nhan-danh-hieu-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-nam-2026-cho-96-nong-dan-d1456710.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/04/073836img_0988-0726-1139.jpg",
        "sapo": "Ngày 4/9, thay mặt Ban Thường vụ Trung ương Hội Nông dân Việt Nam, đồng chí Lương Quốc Đoàn, Ủy viên Trung ương Đảng, Chủ tịch Trung ương Hội Nông dân Việt Nam ký Quyết định về việc trao tặng danh hiệu \"Nông dân Việt Nam xuất sắc 40 năm Đổi mới\" năm 2026 và bằng khen của Ban Chấp hành Trung ương Hội Nông dân Việt Nam cho 96 nông dân thuộc 34 tỉnh, thành phố.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": "04/09/2026"
      },
      {
        "id": "1456538",
        "title": "“Nông dân Việt Nam xuất sắc 40 năm Đổi mới” đến từ Ninh Bình, trồng rau màu công nghệ cao, lãi 1,6 tỷ/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-ninh-binh-trong-rau-mau-cong-nghe-cao-lai-16-ty-nam-d1456538.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/03/17275420260827_094020-1719.jpg",
        "sapo": "Với 5 ha trồng dưa và rau màu theo hướng công nghệ cao, năm 2025, ông Tống Viết Vinh (phường Yên Thắng, tỉnh Ninh Bình) đạt doanh thu hơn 8 tỷ đồng, lợi nhuận 1,6 tỷ đồng. Ông Vinh là một trong những nhà nông tiêu biểu của cả nước được bình chọn danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Ninh Bình",
        "date": "04/09/2026"
      },
      {
        "id": "1455920",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới, sở hữu loại nước mắm đạt 5 sao OCOP, 'rót ra thị trường' 500.000 lít/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-nguoi-dua-nuoc-mam-ky-ninh-len-ocop-5-sao-san-xuat-nua-trieu-lit-nam-d1455920.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/01/ocop-5-sao-5-0907.jpg",
        "sapo": "Từ nghề làm nước mắm truyền thống được cha truyền lại, bà Đặng Thị Luận (phường Hải Ninh, tỉnh Hà Tĩnh) đã kiên trì xây dựng thương hiệu nước mắm Luận Nghiệp, từng bước mở rộng thị trường và đưa sản phẩm đạt OCOP 5 sao cấp quốc gia. Năm 2026, bà được bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”.",
        "category": "Hành trình 40 năm",
        "location": "Hà Tĩnh",
        "date": "04/09/2026"
      },
      {
        "id": "1455907",
        "title": "Một ông nông dân Đồng Tháp có doanh thu 35 tỷ/năm nhờ nuôi gà kiểu này đây",
        "url": "https://danviet.vn/mot-ong-nong-dan-dong-thap-co-doanh-thu-35-ty-nam-nho-nuoi-ga-kieu-nay-day-d1455907.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/31/2118271788185563742_1918310664192206013_8469663182997053096_5e17f7e9b380e190379eee404f2626f6-2117.jpg",
        "sapo": "Ông Nguyễn Đức Lữ, phường Đạo Thạnh, tỉnh Đồng Tháp (trước đây thuộc tỉnh Tiền Giang) đã gầy dựng nên một trang trại chăn nuôi gà công nghệ cao trị giá hàng chục tỷ đồng. Ông Nguyễn Đức Lữ được bình chọn là \"Nông dân Việt Nam xuất sắc 40 năm Đổi mới\"-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Đồng Tháp",
        "date": "03/09/2026"
      },
      {
        "id": "1456461",
        "title": "“Nông dân Việt Nam xuất sắc 40 năm đổi mới” đến từ Quảng Ngãi (Kon Tum cũ), có một trang trại 11 ha, thu 3,5 tỷ/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-quang-ngai-kon-tum-cu-co-mot-trang-trai-11-ha-thu-35-ty-nam-d1456461.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/03/anh-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-nguyen-van-thanh-chu-trang-trai-11-ha-thu-nhap-35-ty-dongnam-2-1103.jpg",
        "sapo": "Xây dựng trang trại tổng hợp với diện tích 11 ha, thu về khoảng 3,5 tỷ đồng/năm, điều đáng quý khác của “Nông dân Việt Nam xuất sắc 40 năm đổi mới” Nguyễn Văn Thành, ở xã Bờ Y, tỉnh Quảng Ngãi (địa phận huyện Bờ Y, tỉnh Kon Tum cũ) không chỉ làm giàu cho bản thân, mà còn dành một phần thành quả lao động hỗ trợ người nghèo để cùng phát triển.",
        "category": "Hành trình 40 năm",
        "location": "Quảng Ngãi",
        "date": "03/09/2026"
      },
      {
        "id": "1456272",
        "title": "“Nữ tướng” Hợp tác xã Vườn nhà Đà Lạt tại Lâm Đồng là nông dân Việt Nam xuất sắc năm 2026",
        "url": "https://danviet.vn/nu-tuong-hop-tac-xa-vuon-nha-da-lat-tai-lam-dong-la-nong-dan-viet-nam-xuat-sac-nam-2026-d1456272.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/02/145239img_0223-1447.jpg",
        "sapo": "Bà Lương Thị Yến Vân – Giám đốc Hợp tác xã Vườn Nhà Đà Lạt là một trong những Nông dân Việt Nam xuất sắc năm 2026 khi tập trung vào sản xuất nông sản sạch – độc đáo – giá trị cao .",
        "category": "Hành trình 40 năm",
        "location": "Lâm Đồng",
        "date": "03/09/2026"
      },
      {
        "id": "1455784",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ tỉnh Quảng Ngãi (địa phận Kon Tum cũ) là một tỷ phú sầu riêng",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tinh-quang-ngai-dia-phan-kon-tum-cu-la-mot-ty-phu-sau-rieng-d1455784.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/08/31/anh-hanh-trinh-tro-thanh-ong-chu-vuon-vang-xanh-cua-1-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-o-xa-vung-bien-quang-ngai-1-1051.jpg",
        "sapo": "Mạnh dạn trồng sầu riêng, ông Bùi Đức Quỳnh, thôn Đăk Tang, xã vùng biên giới Rờ Kơi, tỉnh Quảng Ngãi (địa phận tỉnh Kon Tum cũ) hiện đang sở hữu khoảng 15 ha đất đã \"trồng cây tỷ đô-sẩu riêng), thu lợi nhuận nhiều tỷ đồng/năm. Ông Quỳnh là 1 trong số tấm gương nhà nông tiêu biểu của cả nước được bình chọn “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Quảng Ngãi",
        "date": "02/09/2026"
      },
      {
        "id": "1456077",
        "title": "Bỏ nghề lái xe tải về trồng hoa cây cảnh, một nông dân ở Đà Nẵng được bình chọn là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/bo-nghe-lai-xe-tai-ve-trong-hoa-cay-canh-mot-nong-dan-o-da-nang-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-d1456077.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/01/1788240381980_606334327487706615_606334327487706615_9b7b81dabea2b5e163817122aaa60ed5-1545.jpg",
        "sapo": "Từng làm nhiều nghề để mưu sinh, trong đó có nghề lái xe tải, ông Lê Văn Khoa (SN 1970), ở phường Hòa Cường, TP Đà Nẵng đã quyết định rẽ hướng, gắn bó với nghề trồng và kinh doanh cây cảnh. Gần 20 năm miệt mài với nghề, ông gây dựng vườn cây rộng 6.000m², trị giá hơn 7 tỷ đồng, tạo việc làm thường xuyên cho 30 lao động. Năm 2026, ông vinh dự được Hội đồng Chung khảo Trung ương bình chọn là một trong 96 gương mặt “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”.",
        "category": "Gương mặt Điển hình",
        "location": "Đà Nẵng",
        "date": "02/09/2026"
      },
      {
        "id": "1454353",
        "title": "Tỷ phú trẻ Khánh Hòa trồng nấm hiện đại, hút khách tham quan là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/ty-phu-tre-khanh-hoa-trong-nam-hien-dai-hut-khach-tham-quan-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1454353.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/08/25/ngoc-nam-suoi-hiep-4-1540.jpg",
        "sapo": "Hơn 10 năm khởi nghiệp, nghiên cứu và trực tiếp sản xuất nông nghiệp, anh Nguyễn Hữu Ngọc (SN 1993, phường Nha Trang, Khánh Hòa) đã xây dựng thành công mô hình trồng nấm kết hợp tham quan du lịch. Nhờ những thành tích nổi bật trong sản xuất kinh doanh, anh Ngọc đã được Trung ương Hội NDVN bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Khánh Hòa",
        "date": "31/08/2026"
      },
      {
        "id": "1455699",
        "title": "Nữ trưởng thôn '3 trong 1' và hành trình chạm tay tới danh hiệu 'Nông dân Việt Nam xuất sắc 2026'",
        "url": "https://danviet.vn/nu-truong-thon-3-trong-1-va-hanh-trinh-cham-tay-toi-danh-hieu-nong-dan-viet-nam-xuat-sac-2026-d1455699.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/30/2141271-2140.jpg",
        "sapo": "Từ mô hình kinh tế tổng hợp cho thu nhập gần 1 tỷ đồng/năm đến những khoản vay không lãi giúp nhiều hộ dân có thêm vốn làm ăn, chị Đàm Thị Hoài, Trưởng thôn Phai Làng, xã Tân Đoàn, tỉnh Lạng Sơn đang trở thành điểm tựa đáng tin cậy của bà con vùng cao trên hành trình thoát nghèo, vươn lên làm giàu.",
        "category": "Hành trình 40 năm",
        "location": "",
        "date": "31/08/2026"
      },
      {
        "id": "1455222",
        "title": "Nhà khoa học của nhà nông ở Quảng Trị được bình chọn là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/nha-khoa-hoc-cua-nha-nong-o-quang-tri-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1455222.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/08/28/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-2026-o-quang-tri-5-1600.jpg",
        "sapo": "Được vinh danh “Nhà khoa học của nhà nông” năm 2025 nhờ sáng kiến biến phế phụ phẩm thành thức ăn chăn nuôi, anh Nguyễn Đăng Vương - Giám đốc HTX Nông nghiệp sạch Tây Sơn (Quảng Trị) tiếp tục được bình chọn là Nông dân Việt Nam xuất sắc 40 năm Đổi mới năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": "30/08/2026"
      },
      {
        "id": "1454837",
        "title": "Nông dân Quảng Trị ứng dụng công nghệ sản xuất thủy hải sản được bình chọn “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”",
        "url": "https://danviet.vn/nong-dan-quang-tri-ung-dung-cong-nghe-san-xuat-thuy-hai-san-duoc-binh-chon-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1454837.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/27/nong-dan-xs2-1127.jpg",
        "sapo": "Từ một giáo viên mầm non bén duyên với nghề chế biến hải sản, bà Nguyễn Thị Đoàn ở xã Ninh Châu, tỉnh Quảng Trị (thuộc địa phận xã Hải Ninh, huyện Quảng Ninh, tỉnh Quảng Bình cũ) đã mạnh dạn đầu tư máy móc, công nghệ hiện đại, xây dựng chuỗi liên kết sản xuất, tiêu thụ thủy hải sản. Mô hình giúp hợp tác xã đạt doanh thu gần 20 tỷ đồng/năm, tạo việc làm cho nhiều lao động địa phương. Năm 2026, bà được bình chọn danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": "28/08/2026"
      },
      {
        "id": "1454616",
        "title": "Tỷ phú trồng nấm hữu cơ ở Quảng Bình, nay là Quảng Trị được bình chọn là 'Nông dân Việt Nam xuất sắc 40 năm Đổi mới'",
        "url": "https://danviet.vn/ty-phu-trong-nam-huu-co-o-quang-binh-nay-la-quang-tri-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1454616.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/26/ndvnxs2-1619.jpg",
        "sapo": "Bà Ngô Thị Kim Liên ở thôn Sơn Lý, xã Đông Trạch, tỉnh Quảng Trị (địa phận thuộc xã Sơn Lộc, huyện Bố Trạch, tỉnh Quảng Bình cũ) đã xây dựng HTX sản xuất và kinh doanh nông nghiệp Tuấn Linh thành mô hình trồng nấm hữu cơ quy mô lớn. Bà còn liên kết với hơn 500 hộ dân, tạo nghề nghiệp, thu nhập cho hàng trăm lao động. Bà được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": "27/08/2026"
      },
      {
        "id": "1453708",
        "title": "Nông dân Việt Nam xuất sắc 40 năm đổi mới đến từ Cần Thơ: Làm giàu từ cá thát lát, bán cả sang 'chợ Mỹ, chợ Hàn Quốc'",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-can-tho-lam-giau-tu-ca-that-lat-ban-ca-sang-cho-my-cho-han-quoc-d1453708.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/24/nguyen-kim-thuy-giam-doc-htx-ky-nhu--nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-7-1806.jpg",
        "sapo": "Bà Nguyễn Kim Thùy, Giám đốc HTX Kỳ Như, TP Cần Thơ đã kiên trì chế biến con cá thát lát quê nhà thành các sản phẩm có thương hiệu trên thị trường. Bà Thùy có 11 sản phẩm OCOP chế biến từ cá thát lát, trong đó có 10 sản phẩm đạt 4 sao, 1 sản phẩm đạt 5 sao, có mặt tại khoảng 20 tỉnh, thành phố, xuất khẩu sang các thị trường khó tính như Hàn Quốc, Mỹ.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": "25/08/2026"
      },
      {
        "id": "1453125",
        "title": "Quanh năm trồng rừng, giàu từ rừng, một người Huế được vinh danh “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”",
        "url": "https://danviet.vn/quanh-nam-trong-rung-giau-tu-rung-mot-nguoi-hue-duoc-vinh-danh-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1453125.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/21/0836211787236605103_709020819188526130_g795249860739133933_373332ff214c59b87782e2fd326d9adb-0826.jpg",
        "sapo": "Gần 40 năm gắn bó với nghề trồng rừng keo, ông Đỗ Viết Tuyến ở TP Huế đã biến đất cằn thành những cánh rừng cho thu nhập hàng trăm triệu đồng mỗi năm, đưa ông đến với danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": "25/08/2026"
      },
      {
        "id": "1454015",
        "title": "Tỷ phú trồng sầu riêng, kinh doanh vật tư nông nghiệp ở Khánh Hòa là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”",
        "url": "https://danviet.vn/ty-phu-trong-sau-rieng-kinh-doanh-vat-tu-nong-nghiep-o-khanh-hoa-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1454015.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/08/24/vinh-dong-khanh-son-1-1453.jpg",
        "sapo": "Ông Vũ Văn Vịnh, thôn Tha Mang, xã Đông Khánh Sơn, tỉnh Khánh Hòa (địa phận huyện Khánh Sơn cũ) đã vươn lên làm giàu từ cây đặc sản sầu riêng. Ông Vịnh còn chia sẻ kinh nghiệm trồng sầu riêng cho bà con nông dân. Ông được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Khánh Hòa",
        "date": "24/08/2026"
      },
      {
        "id": "1453135",
        "title": "Tỷ phú Khánh Hòa trồng đa cây, nuôi đa con kết hợp làm du lịch là 'Nông dân Việt Nam xuất sắc 40 năm đổi mới'",
        "url": "https://danviet.vn/ty-phu-khanh-hoa-trong-da-cay-nuoi-da-con-ket-hop-lam-du-lich-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1453135.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/08/21/thanh-san-viet-8-0831.jpg",
        "sapo": "Từ vùng đất sỏi đá nghèo kiệt, anh Nguyễn Minh Thành, thôn Suối Sâu, xã Nam Ninh Hòa, tỉnh Khánh Hòa (địa phận huyện Ninh Hòa cũ) đã biến thành vùng đất trù phú với nhiều cây trồng mới, vật nuôi mới lạ, kết hợp làm du lịch, mang lại giá trị kinh tế cao. Anh Thành được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Khánh Hòa",
        "date": "21/08/2026"
      },
      {
        "id": "1453226",
        "title": "Trình Quốc hội việc tách dự án điện hạt nhân Ninh Thuận thành 3 dự án khác nhau",
        "url": "https://danviet.vn/trinh-quoc-hoi-viec-tach-du-an-dien-hat-nhan-ninh-thuan-thanh-3-du-an-khac-nhau-d1453226.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/21/125229202608211108407937_1787285328454_2669430916532772711_g7574298250520479089_2c49a33a346effea58431a59f940a753-1248.jpg",
        "sapo": "Sáng 21/8, tại Quốc hội, thừa uỷ quyền của Thủ tướng, Bộ trưởng Bộ Tài chính đã có Tờ trình về dự thảo Nghị quyết của Quốc hội về việc tách dự án điện hạt nhân Ninh Thuận thành các dự án độc lập.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": "21/08/2026"
      },
      {
        "id": "1453039",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới: Từ 20 con thỏ New Zealand đến cơ ngơi tiền tỷ của một người Lạng Sơn",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-doi-moi-tu-20-con-tho-new-zealand-den-co-ngoi-tien-ty-cua-mot-nguoi-lang-son-d1453039.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/20/1787136154959_8437526564803242467_8437526564803242467_7e30a33a576908224888aba9fa031cd8-1748.jpg",
        "sapo": "Anh Nguyễn Ngọc Thạch, dân tộc Tày ở xã Nhân Lý, tỉnh Lạng Sơn là có tên trong danh sách 96 Nông dân Việt Nam xuất sắc 40 năm đổi mới do Hội đồng chung khảo bình chọn. Anh Thạch đã xây dựng thành công mô hình nuôi thỏ New Zealand quy mô lớn, mang lại thu nhập hàng trăm triệu đồng mỗi năm.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": "21/08/2026"
      },
      {
        "id": "1449411",
        "title": "Đã bình chọn được 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới– năm 2026",
        "url": "https://danviet.vn/da-binh-chon-duoc-96-nong-dan-viet-nam-xuat-sac-40-nam-doi-moinam-2026-d1449411.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/08/06/1786009179573_1785719900663690540_1785719900663690540_7028d21599627f95d6f96e92fb4ceb5d-1734.jpg",
        "sapo": "Chiều ngày 6/8, tại thủ đô Hà Nội, Hội đồng bình chọn chung khảo đã họp chấm chung khảo Bình chọn Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026. Đồng chí Bùi Thị Thơm, Phó Chủ tịch Ban Chấp hành Trung ương Hội Nông dân Việt Nam, Chủ tịch Hội đồng Bình chọn chung khảo danh hiệu Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026 chủ trì buổi họp.",
        "category": "Chính sách & Chuyên gia",
        "location": "Hà Nội",
        "date": "06/08/2026"
      },
      {
        "id": "1420857",
        "title": "Chính thức khởi động đề cử bình chọn danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”",
        "url": "https://danviet.vn/chinh-thuc-khoi-dong-de-cu-binh-chon-danh-hieu-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1420857.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/04/23/nong-dan-xuat-sac-0651.jpg",
        "sapo": "Ban Chấp hành Trung ương Hội Nông dân Việt Nam vừa chính thức ban hành Công văn số 2275-CV/HNDTW gửi Hội Nông dân các tỉnh, thành phố về việc thực hiện đề cử bình chọn danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”. Đây là hoạt động trọng tâm nằm trong khuôn khổ Chương trình “Tự hào Nông dân Việt Nam 40 năm Đổi mới” theo Kế hoạch số 292-KH/HNDTW ngày 27/3/2026 của Ban Thường vụ Trung ương Hội.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": "23/04/2026"
      }
    ]
  },
  {
    "kicker": "Chương trình Tự hào Nông dân Việt Nam • Năm thứ 13",
    "title": "Tự hào Nông dân Việt Nam 2025",
    "date": "Tối 14/10/2025",
    "location": "Cung Văn hóa Hữu nghị Việt Xô, Hà Nội",
    "summary": "Chương trình gắn với kỷ niệm 95 năm Ngày thành lập Hội Nông dân Việt Nam. Lễ tôn vinh 63 Nông dân Việt Nam xuất sắc và 32 Nhà khoa học của Nhà nông diễn ra tối 14/10/2025 tại Cung Văn hóa Hữu nghị Việt Xô, truyền hình trực tiếp trên VTV1.",
    "stats": [
      {
        "value": 63,
        "suffix": "",
        "label": "Nông dân Việt Nam xuất sắc"
      },
      {
        "value": 32,
        "suffix": "",
        "label": "Nhà khoa học của Nhà nông"
      },
      {
        "value": 71,
        "suffix": "",
        "label": "Bài báo tư liệu"
      }
    ],
    "link": "https://danviet.vn/tu-hao-nong-dan-viet-nam-2025-channel2990/",
    "linkLabel": "Xem chuyên trang 2025 trên Dân Việt",
    "year": 2025,
    "label": "2025",
    "cover": "https://t.ex-cdn.com/danviet.vn/512w/files/content/2025/10/15/140950img_1017-1407.jpg",
    "featured": [
      {
        "tag": "Gương mặt điển hình",
        "highlight": "23/10/2025",
        "title": "Ông Nông dân Việt Nam xuất sắc đến từ tỉnh Quảng Ngãi trồng cây gì, nuôi con gì mà tính sơ sơ đã lãi 2,6 tỷ/năm?",
        "sapo": "Từ chăn nuôi, trồng rừng, trồng cây ăn trái, tổng thu mỗi năm của gia đình ông Nguyễn Nhẫn, thôn Kim Thành Thượng, xã Phước Giang, tỉnh Quảng Ngãi lên tới hơn 4,5 tỷ đồng, sau khi trừ chi phí, lãi ròng gần 2,6 tỷ đồng (chưa kể tới nguồn thu từ kinh doanh, phân phối nông sản)…Ông Nguyễn Nhẫn là Nông dân Việt Nam xuất sắc 2025.",
        "img": "https://i.ex-cdn.com/danviet.vn/files/content/2025/10/22/ty-phu-quang-ngai-trong-rung-nuoi-ca-trong-cay-an-trai-doanh-thu-hon-4-ty-moi-nam-1946.jpg",
        "url": "https://danviet.vn/ong-nong-dan-viet-nam-xuat-sac-den-tu-tinh-quang-ngai-trong-cay-gi-nuoi-con-gi-ma-tinh-so-so-da-lai-26-ty-nam-d1372457.html"
      },
      {
        "tag": "Gương mặt điển hình",
        "highlight": "15/10/2025",
        "title": "Tự hào Nông dân Việt Nam 2025: Hành trình của trí tuệ, khát vọng vươn mình của người nông dân",
        "sapo": "Chuỗi chương trình 'Tự hào Nông dân Việt Nam 2025 nhân kỷ niệm 95 năm Ngày thành lập Hội Nông dân Việt Nam (14/10/1930 – 14/10/2025) đã khép lại bằng những dấu ấn đậm nét, những sự kiện quan trọng và ý nghĩa trong ngày 14/10.",
        "img": "https://t.ex-cdn.com/danviet.vn/512w/files/news/2025/10/15/080426to-lam-1-1916-1632.jpg",
        "url": "https://danviet.vn/tu-hao-nong-dan-viet-nam-2025-hanh-trinh-cua-tri-tue-khat-vong-vuon-minh-cua-nguoi-nong-dan-d1370632.html"
      },
      {
        "tag": "Sự kiện & Vinh danh",
        "highlight": "15/10/2025",
        "title": "Tự hào Nông dân Việt Nam 2025: Đêm tôn vinh trọn vẹn xúc cảm và tri ân những người làm nên mùa vàng",
        "sapo": "Trong ánh sáng của Lễ tôn vinh và trao danh hiệu 63 Nông dân Việt Nam xuất sắc, 32 Nhà khoa học của nhà nông năm 2025 thuộc Chương trình Tự hào Nông dân Việt Nam, những câu chuyện về hành trình đam mê làm nông nghiệp, kiên trì, bền bỉ gắn bó với người nông dân của các nhà khoa học không chỉ thắp lên niềm tự hào mà còn truyền lửa cho thế hệ tương lai. Chương trình do Trung ương Hội NDVN chủ trì; giao Báo Nông thôn Ngày nay/điện tử Dân Việt phối hợp với Công ty CP Phân bón Bình Điền tổ chức, thực",
        "img": "https://t.ex-cdn.com/danviet.vn/512w/files/content/2025/10/15/140950img_1017-1407.jpg",
        "url": "https://danviet.vn/tu-hao-nong-dan-viet-nam-2025-dem-ton-vinh-tron-ven-xuc-cam-va-tri-an-nhung-nguoi-lam-nen-mua-vang-d1370546.html"
      }
    ],
    "articleCount": 71,
    "articles": [
      {
        "id": "1368595",
        "title": "Sáng chế máy cấy lúa cả làng phục lăn, một người Hưng Yên được bình chọn Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/sang-che-may-cay-lua-ca-lang-phuc-lan-mot-nguoi-hung-yen-duoc-binh-chon-nong-dan-viet-nam-xuat-sac-d1368595.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/10/08/thay-gia-dinh-cay-lua-qua-kho-bac-nong-dan-o-hung-yen-ngay-dem-che-tao-ra-may-cay-doc-nhat-vo-nhi-0100.jpg",
        "sapo": "Ông dân Trần Đại Nghĩa, xã Đồng Châu, tỉnh Hưng Yên (trước sáp nhập, hợp nhất thuộc huyện Tiền Hải, Thái Bình) đã mày mò nghiên cứu, sáng chế máy cấy \"độc nhất vô nhị\" khiến cả làng phục lăn. Ông Trần Đại Nghĩa được bình chọn là 1 trong 63 Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "19/12/2025"
      },
      {
        "id": "1372457",
        "title": "Ông Nông dân Việt Nam xuất sắc đến từ tỉnh Quảng Ngãi trồng cây gì, nuôi con gì mà tính sơ sơ đã lãi 2,6 tỷ/năm?",
        "url": "https://danviet.vn/ong-nong-dan-viet-nam-xuat-sac-den-tu-tinh-quang-ngai-trong-cay-gi-nuoi-con-gi-ma-tinh-so-so-da-lai-26-ty-nam-d1372457.html",
        "img": "https://i.ex-cdn.com/danviet.vn/files/content/2025/10/22/ty-phu-quang-ngai-trong-rung-nuoi-ca-trong-cay-an-trai-doanh-thu-hon-4-ty-moi-nam-1946.jpg",
        "sapo": "Từ chăn nuôi, trồng rừng, trồng cây ăn trái, tổng thu mỗi năm của gia đình ông Nguyễn Nhẫn, thôn Kim Thành Thượng, xã Phước Giang, tỉnh Quảng Ngãi lên tới hơn 4,5 tỷ đồng, sau khi trừ chi phí, lãi ròng gần 2,6 tỷ đồng (chưa kể tới nguồn thu từ kinh doanh, phân phối nông sản)…Ông Nguyễn Nhẫn là Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "23/10/2025"
      },
      {
        "id": "1370632",
        "title": "Tự hào Nông dân Việt Nam 2025: Hành trình của trí tuệ, khát vọng vươn mình của người nông dân",
        "url": "https://danviet.vn/tu-hao-nong-dan-viet-nam-2025-hanh-trinh-cua-tri-tue-khat-vong-vuon-minh-cua-nguoi-nong-dan-d1370632.html",
        "img": "https://t.ex-cdn.com/danviet.vn/512w/files/news/2025/10/15/080426to-lam-1-1916-1632.jpg",
        "sapo": "Chuỗi chương trình 'Tự hào Nông dân Việt Nam 2025 nhân kỷ niệm 95 năm Ngày thành lập Hội Nông dân Việt Nam (14/10/1930 – 14/10/2025) đã khép lại bằng những dấu ấn đậm nét, những sự kiện quan trọng và ý nghĩa trong ngày 14/10.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "15/10/2025"
      },
      {
        "id": "1370546",
        "title": "Tự hào Nông dân Việt Nam 2025: Đêm tôn vinh trọn vẹn xúc cảm và tri ân những người làm nên mùa vàng",
        "url": "https://danviet.vn/tu-hao-nong-dan-viet-nam-2025-dem-ton-vinh-tron-ven-xuc-cam-va-tri-an-nhung-nguoi-lam-nen-mua-vang-d1370546.html",
        "img": "https://t.ex-cdn.com/danviet.vn/512w/files/content/2025/10/15/140950img_1017-1407.jpg",
        "sapo": "Trong ánh sáng của Lễ tôn vinh và trao danh hiệu 63 Nông dân Việt Nam xuất sắc, 32 Nhà khoa học của nhà nông năm 2025 thuộc Chương trình Tự hào Nông dân Việt Nam, những câu chuyện về hành trình đam mê làm nông nghiệp, kiên trì, bền bỉ gắn bó với người nông dân của các nhà khoa học không chỉ thắp lên niềm tự hào mà còn truyền lửa cho thế hệ tương lai. Chương trình do Trung ương Hội NDVN chủ trì; giao Báo Nông thôn Ngày nay/điện tử Dân Việt phối hợp với Công ty CP Phân bón Bình Điền tổ chức, thực",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "15/10/2025"
      },
      {
        "id": "1370471",
        "title": "Ngày hội lịch sử của giai cấp Nông dân Việt Nam: Tổng Bí thư gặp mặt, Chủ tịch nước trao danh hiệu nông dân xuất sắc",
        "url": "https://danviet.vn/ngay-hoi-lich-su-cua-giai-cap-nong-dan-viet-nam-tong-bi-thu-gap-mat-chu-tich-nuoc-trao-danh-hieu-nong-dan-xuat-sac-d1370471.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/10/15/092804img_1137-0913.jpeg",
        "sapo": "Tổng Bí thư Tô Lâm gặp mặt Nông dân Việt Nam xuất sắc - Nhà khoa học của nhà nông năm 2025, Lễ tôn vinh Tự hào Nông dân Việt Nam, Đại hội Thi đua yêu nước Hội Nông dân Việt Nam lần thứ VI là những sự kiện quan trọng diễn ra trong ngày 14/10.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "15/10/2025"
      },
      {
        "id": "1370424",
        "title": "Video toàn cảnh Lễ tôn vinh và trao danh hiệu Nông dân Việt Nam xuất sắc, Nhà khoa học của Nhà nông 2025",
        "url": "https://danviet.vn/video-toan-canh-le-ton-vinh-va-trao-danh-hieu-ndvnxs-nha-khoa-hoc-cua-nha-nong-2025-d1370424.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/10/15/nhom-44-2127-003716.jpg",
        "sapo": "Lễ tôn vinh 63 Nông dân Việt Nam xuất sắc và 32 Nhà khoa học của Nhà nông - sự kiện chính của Chương trình Tự hào Nông dân Việt Nam 2025 diễn ra trong không khí trang trọng kết hợp cùng các màn biểu diễn nghệ thuật đặc sắc tại Cung văn hóa Hữu nghị Việt",
        "category": "Hình ảnh & Video",
        "location": "",
        "date": "15/10/2025"
      },
      {
        "id": "1370460",
        "title": "Ca sĩ Hoàng Bách kết hợp với các thiếu nhi cùng màn rap 'độc nhất vô nhị' vinh danh các Nông dân Việt Nam xuất sắc 2025",
        "url": "https://danviet.vn/man-nghe-thuat-sieu-cuon-tai-tu-hao-nong-dan-viet-nam-2025-d1370460.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/10/15/073832img_0994-0733-0851.jpeg",
        "sapo": "Ca khúc Yêu nụ cười Việt Nam được ca nhạc sĩ Hoàng Bách sáng tác, kết hợp cùng màn rap do các em thiếu nhi thể hiện để vinh danh 23 Nông dân Việt Nam xuất sắc thuộc nhóm 'Nông dân đổi mới sáng tạo và chuyển đổi số' được đánh giá là tiết mục nghệ thuật v",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "15/10/2025"
      },
      {
        "id": "1370464",
        "title": "Tiếp kiến Tổng Bí thư Tô Lâm: Từ Nghị quyết 57 đến thành công trên đồng ruộng, Nhà khoa học của nhà nông nói gì?",
        "url": "https://danviet.vn/tiep-kien-tong-bi-thu-to-lam-tu-nghi-quyet-57-den-thanh-cong-tren-dong-ruong-nha-khoa-hoc-cua-nha-nong-noi-gi-d1370464.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/10/15/tiep-kien-tong-bi-thu-0902.jpg",
        "sapo": "Nhân kỷ niệm 95 năm Ngày thành lập Hội Nông dân Việt Nam, chiều ngày 14/10, tại trụ sở Trung ương Đảng, 95 Nông dân Việt Nam xuất sắc, nhà khoa học của nhà nông năm 2025 đã vinh dự được tiếp kiến Tổng Bí thư Tô Lâm. Tại buổi tiếp kiến, 3 nhà khoa học của nhà nông đã chia sẻ những thành tựu nghiên cứu và bày tỏ kỳ vọng Nghị quyết 57 của Bộ Chính trị sẽ tạo động lực cho phát triển khoa học công nghệ trong nông nghiệp.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "15/10/2025"
      },
      {
        "id": "1370463",
        "title": "Độc đáo màn trống hội vinh danh “Nông dân tỷ phú và Hội nhập quốc tế” năm 2025",
        "url": "https://danviet.vn/doc-dao-man-trong-hoi-vinh-danh-nong-dan-ty-phu-va-hoi-nhap-quoc-te-nam-2025-d1370463.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/10/15/073830img_0990-0733-0859.jpeg",
        "sapo": "Những hồi trống hội trầm hùng liên hồi vang lên như nhịp bước của thời đại mới, mở màn cho khoảnh khắc tôn vinh 16 'Nông dân tỷ phú và hội nhập quốc tế' năm 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "15/10/2025"
      },
      {
        "id": "1370466",
        "title": "'95 năm – Một thiên sử vàng”: Dấu ấn giai cấp nông dân Việt Nam trong dòng chảy lịch sử dân tộc",
        "url": "https://danviet.vn/95-nam-mot-thien-su-vang-dau-an-giai-cap-nong-dan-viet-nam-trong-dong-chay-lich-su-dan-toc-d1370466.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/10/15/van-nghe-1-1919-0908.jpg",
        "sapo": "Trong không gian nghệ thuật đậm chất sử thi, “95 năm – Một thiên sử vàng” là một bản hùng ca tái hiện hành trình 95 năm đồng hành của Hội Nông dân Việt Nam cùng dân tộc và đất nước – từ khởi nguyên của “Đất và Nước”, qua “Lửa thử vàng” của chiến tranh, đến “Khúc tráng ca lao động” trong thời đại đổi mới và hội nhập.",
        "category": "Hình ảnh & Video",
        "location": "",
        "date": "15/10/2025"
      },
      {
        "id": "1370425",
        "title": "Tự hào Nông dân Việt Nam: Siêu tỷ phú nông dân phấn khởi khi được tiếp kiến Tổng Bí thư, bắt tay Chủ tịch nước",
        "url": "https://danviet.vn/tu-hao-nong-dan-viet-nam-sieu-ty-phu-nong-dan-phan-khoi-khi-duoc-tiep-kien-tong-bi-thu-bat-tay-chu-tich-nuoc-d1370425.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/10/15/z7117292904462_3fc7257228db73f9b4a9a407ff644793-0352.jpg",
        "sapo": "Sau những giây phút trọn vẹn cảm xúc tại chương trình Tự hào Nông dân Việt Nam, nhiều Nông dân Việt Nam xuất sắc năm 2025 - những tỷ phú nông dân, đã bày tỏ niềm hạnh phúc, vinh dự khi được tiếp kiến Tổng Bí Thư, bắt tay Chủ tịch nước trong ngày kỷ niệm 95 năm thành lập Hội Nông dân Việt Nam. Chương trình Tự hào Nông dân Việt Nam do Trung ương Hội Nông dân Việt Nam chủ trì; giao Báo Nông thôn Ngày nay/Dân Việt phối hợp với Công ty CP Phân bón Bình Điền tổ chức thực hiện.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "15/10/2025"
      },
      {
        "id": "1370393",
        "title": "Tiếp kiến Tổng Bí thư Tô Lâm, Nông dân Việt Nam xuất sắc Hưng Yên 'khoe' sẽ xây chung cư nuôi tôm",
        "url": "https://danviet.vn/tiep-kien-tong-bi-thu-to-lam-nong-dan-viet-nam-xuat-sac-hung-yen-khoe-se-xay-chung-cu-nuoi-tom-d1370393.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/10/14/201800luu-van-dung-2015.jpg",
        "sapo": "Được cùng với 95 Nhà khoa học của nhà nông, Nông dân Việt Nam xuất sắc năm 2025 tiếp kiến Tổng Bí thư Tô Lâm, ông Lưu Văn Dũng ở xã Quang Hưng, tỉnh Hưng Yên, Nông dân Việt Nam xuất sắc 2025 vui mừng báo cáo với Tổng Bí thư về ý tưởng xây \"chung cư\" nuôi tôm.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "14/10/2025"
      },
      {
        "id": "1370389",
        "title": "Tổng Bí thư Tô Lâm: 'Tôi đã nhìn thấy sắc thái của lớp người nông dân chuyên nghiệp, hiện đại'",
        "url": "https://danviet.vn/tong-bi-thu-to-lam-toi-da-nhin-thay-sac-thai-cua-lop-nguoi-nong-dan-chuyen-nghiep-hien-dai-d1370389.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/10/14/193643tong-bi-thu-to-lam-1916.jpg",
        "sapo": "Nhân kỷ niệm 95 năm Ngày thành lập Hội Nông dân Việt Nam, 95 nhà khoa học của nhà nông và nông dân Việt Nam xuất sắc năm 2025 đã vinh dự được tiếp kiến Tổng Bí thư Tô Lâm. Tại buổi tiếp kiến, Tổng Bí thư Tô Lâm bày tỏ sự ấn tượng với các thành tích của các nhà khoa học của nhà nông, nông dân Việt Nam xuất sắc. \"Tôi đã nhìn thấy sắc thái của lớp nông dân chuyên nghiệp, hiện đại\", Tổng Bí thư nhấn mạnh.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/10/2025"
      },
      {
        "id": "1370388",
        "title": "Hình ảnh Tổng Bí thư Tô Lâm gặp mặt Nông dân Việt Nam xuất sắc, Nhà khoa học của nhà nông năm 2025",
        "url": "https://danviet.vn/hinh-anh-tong-bi-thu-to-lam-gap-mat-nong-dan-viet-nam-xuat-sac-nha-khoa-hoc-cua-nha-nong-nam-2025-d1370388.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/10/14/9-1910.jpg",
        "sapo": "Nhân kỷ niệm 95 năm Ngày thành lập Hội Nông dân Việt Nam (14/10/1930 – 14/10/2025), chiều nay 14/10, tại Trụ sở Trung ương Đảng, Tổng Bí thư Tô Lâm đã có buổi gặp mặt thân mật với 95 đại biểu tiêu biểu là Nông dân Việt Nam xuất sắc và các Nhà khoa học của nhà nông được tôn vinh năm 2025.",
        "category": "Hình ảnh & Video",
        "location": "",
        "date": "14/10/2025"
      },
      {
        "id": "1370361",
        "title": "Hé lộ màn vinh danh Nông dân và Nhà khoa học xuất sắc 'siêu cuốn' tại Lễ tôn vinh Tự hào Nông dân Việt Nam 2025",
        "url": "https://danviet.vn/he-lo-man-vinh-danh-nong-dan-va-nha-khoa-hoc-xuat-sac-sieu-cuon-tai-le-ton-vinh-tu-hao-nong-dan-viet-nam-2025-d1370361.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/10/14/171530img_0871-1706.jpeg",
        "sapo": "Chiều nay (14/10), buổi tổng duyệt các chương trình nghệ thuật đặc sắc tại Lễ tôn vinh Tự hào Nông dân Việt Nam 2025 đã diễn ra tại Cung văn hoá Hữu nghị Việt Xô, tại đây các nghệ sĩ nhí có màn đọc rap giới thiệu nông dân và nhà khoa học xuất sắc rất ấn tượng.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "14/10/2025"
      },
      {
        "id": "1370116",
        "title": "Tự hào Nông dân Việt Nam 2025: 3 ông tỷ phú nông dân kể chuyện làm giàu từ trà hoa vàng, nuôi tôm công nghệ cao",
        "url": "https://danviet.vn/tu-hao-nong-dan-viet-nam-2025-3-ong-ty-phu-nong-dan-ke-chuyen-lam-giau-tu-tra-hoa-vang-nuoi-tom-cong-nghe-cao-d1370116.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/10/13/ty-phu-nong-dan-2225.jpg",
        "sapo": "Chuỗi sự kiện Chương trình Tự hào Nông dân Việt Nam 2025 do Báo Nông thôn Ngày nay/điện tử Dân Việt được giao phối hợp với Công ty CP Phân bón Bình Điền tổ chức đã quy tụ 95 Nông dân Việt Nam xuất sắc, Nhà khoa học của Nhà nông năm 2025 nhân dịp kỷ niệm 95 năm Hội Nông dân Việt Nam.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/10/2025"
      },
      {
        "id": "1369994",
        "title": "Những 'tinh hoa' của nông nghiệp Việt Nam hội tụ tại Hà Nội, sẵn sàng cho đêm tôn vinh",
        "url": "https://danviet.vn/nhung-tinh-hoa-cua-nong-nghiep-viet-nam-hoi-tu-tai-ha-noi-san-sang-cho-dem-ton-vinh-d1369994.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/10/13/14292331-1424.jpg",
        "sapo": "Trưa nay (13/10), không khí tại Thủ đô Hà Nội trở nên đặc biệt hơn khi chào đón những \"tinh hoa\" của nông nghiệp nước nhà. 63 \"Nông dân Việt Nam xuất sắc\" và 32 \"Nhà khoa học của Nhà nông\" năm 2025 đã chính thức hội tụ tại Hà Nội để chuẩn bị cho Lễ tôn vinh \"Tự hào Nông dân Việt Nam 2025\".",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "13/10/2025"
      },
      {
        "id": "1368841",
        "title": "Một người làm nông nghiệp 'tay ngang' ở Quảng Ninh, sao lại có tham vọng mang “vàng” trên vách núi ra 'chợ toàn cầu'?",
        "url": "https://danviet.vn/mot-nguoi-lam-nong-nghiep-tay-ngang-o-quang-ninh-sao-lai-co-tham-vong-mang-vang-tren-vach-nui-ra-cho-toan-cau-d1368841.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/10/08/tra-hoa-vang-quy-hoa-va-hanh-trinh-vuon-tam-ocop-5-sao-1901.jpg",
        "sapo": "Ông Lê Mạnh Quy, một người Quảng Ninh làm nông nghiệp \"tay ngang\" thành công với mô hình trồng cây trà hoa vàng-một loại cây dược liệu quý vùng Đông Bắc. Sản phẩm trà hoa vàng của ông Quy đã đạt 5 sao OCOP 5 quốc gia. Ông Lê Mạnh Quy, đại gia, tỷ phú Quảng Ninh được bình chọn là 1 trong 63 Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "09/10/2025"
      },
      {
        "id": "1368620",
        "title": "Biến vùng trũng thành cánh đồng cơ giới hóa 'không dấu chân', một người Tây Ninh là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/bien-vung-trung-thanh-canh-dong-co-gioi-hoa-khong-dau-chan-mot-nguoi-tay-ninh-la-nong-dan-viet-nam-xuat-sac-d1368620.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/10/08/nong-dan-tinh-tay-ninh-bien-vung-trung-thanh-canh-dong-co-gioi-hoa-duoc-vinh-danh-nong-dan-viet-nam-xuat-sac-2025-1-0710.jpg",
        "sapo": "Lập nghiệp từ 2 chiếc máy cày cũ, ông Nguyễn Văn Buôn ở xã Vĩnh Thạnh, tỉnh Tây Ninh (trước sáp nhập xã này thuộc tỉnh Long An) đang làm chủ 50ha ruộng cùng hệ thống cơ giới hóa hiện đại. Là người tiên phong ứng dụng công nghệ trong sản xuất, ông Buôn từng được Thủ tướng tặng Bằng khen. Nay ông tiếp tục được Trung ương Hội Nông dân Việt Nam bình chọn là Nông dân Việt Nam xuất sắc năm 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "08/10/2025"
      },
      {
        "id": "1368483",
        "title": "Các hoạt động kỷ niệm 95 năm thành lập Hội NDVN và Chương trình Tự hào Nông dân Việt Nam năm 2025",
        "url": "https://danviet.vn/cac-hoat-dong-ky-niem-95-nam-thanh-lap-hoi-ndvn-va-chuong-trinh-tu-hao-nong-dan-viet-nam-nam-2025-d1368483.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/10/07/hoi-nong-dan-nong-dan-xuat-sac-1521.jpg",
        "sapo": "Hôm nay 8/10, Trung ương Hội Nông dân Việt Nam công bố các hoạt động Kỷ niệm 95 năm thành lập Hội Nông dân Việt Nam (14/10/1930 – 14/10/2025) và chuỗi các hoạt động của Chương trình Tự hào Nông dân Việt Nam 2025, trong đó có việc công bố 95 nông dân Việt Nam xuất sắc, nhà khoa học của nhà nông.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "08/10/2025"
      },
      {
        "id": "1368476",
        "title": "Cơ ngơi 20 tỷ của một tỷ phú nuôi bò sữa ở Hòa Bình (tỉnh Phú Thọ mới), là Nông dân Việt Nam xuất sắc 2025",
        "url": "https://danviet.vn/co-ngoi-20-ty-cua-mot-ty-phu-nuoi-bo-sua-o-hoa-binh-tinh-phu-tho-moi-la-nong-dan-viet-nam-xuat-sac-2025-d1368476.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/10/07/z7089645234891_149c78914e5883746efb5bab8350c30e-1429.jpg",
        "sapo": "Ông tỷ phú nuôi bò sữa Chu Văn Sâm, 77 tuổi, ở thôn Đồng Danh, xã An Nghĩa, tỉnh Phú Thọ (trước sáp nhập 3 tỉnh Phú Thọ, Hòa Bình, Vĩnh Phúc, ông Sâm ở xã Phú Thành, huyện Lạc Thuỷ). Tuổi cao, ông Sâm vẫn miệt mài với trang trại nuôi bò sữa quy mô lớn, tạo ra lợi nhuận hơn 1,3 tỷ đồng/năm và được bình chọn là “Nông dân Việt Nam xuất sắc 2025”.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "07/10/2025"
      },
      {
        "id": "1368305",
        "title": "Ông tỷ phú nuôi lợn, chế biến gỗ rừng trồng ở Lào Cai được bình chọn là Nông dân Việt Nam xuất sắc 2025",
        "url": "https://danviet.vn/ong-ty-phu-nuoi-lon-che-bien-go-rung-trong-o-lao-cai-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-2025-d1368305.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/10/06/anh-cuong-2200.jpg",
        "sapo": "Anh Đỗ Cao Cường, (SN 1981), thôn Bỗng, xã Thác Bà, tỉnh Lào Cai (địa bàn huyện Yên Bình, tỉnh Yên Bái trước sáp nhập) đã vươn lên trở thành tỷ phú chăn nuôi lợn, chế biến gỗ rừng trồng. Anh Đỗ Cao Cường được bình chọn là Nông dân Việt Nam xuất sắc năm 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "07/10/2025"
      },
      {
        "id": "1368018",
        "title": "Mài, xát loại củ to dài ra sản phẩm đạt 4 sao OCOP, lãi 3,6 tỷ/năm, một người Hải Dương là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/mai-xat-lai-cu-to-dai-ra-san-pham-dat-4-sao-ocop-lai-36-ty-nam-mot-nguoi-hai-duong-la-nong-dan-viet-nam-xuat-sac-d1368018.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/10/05/thu-hoach-san-day-2354.jpg",
        "sapo": "Anh Bùi Văn Thành khu dân cư Vũ Xá, phường Trần Liễu, TP Hải Phòng ( một phần thuộc địa phận của thị xã Kinh Môn, tỉnh Hải Dương cũ) – Giám đốc Hợp tác xã Nông nghiệp sạch Thành Nhàn chế biến tinh bột sắn dây 100% nguyên chất bằng dây chuyền hiện đại, khép kín, cho thu nhập 3,6 tỷ/năm. Anh Thành được bình chọn danh hiệu “Nông dân Việt Nam xuất sắc 2025”.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "06/10/2025"
      },
      {
        "id": "1367673",
        "title": "Chàng trai Gia Lai bỏ phố hoa lệ về quê trồng rau kiểu gì mà doanh thu 20 tỷ/năm , là 'Nông dân Việt Nam xuất sắc'?",
        "url": "https://danviet.vn/chang-trai-gia-lai-bo-pho-hoa-le-ve-que-trong-rau-kieu-gi-ma-doanh-thu-20-ty-nam-la-nong-dan-viet-nam-xuat-sac-d1367673.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/10/04/090120d2f32a250d15fad8dd134ebca3daea22-0859.jpeg",
        "sapo": "Tốt nghiệp đại học với chuyên ngành Quản trị kinh doanh, có công việc ổn định tại TPHCM, nhưng Nguyễn Nam Phong (34 tuổi, phường An Phú, Gia Lai) quyết định trở về quê lập nghiệp bằng nghề trồng rau sạch. Sau hơn 10 năm kiên trì, anh đã xây dựng thành công thương hiệu rau sạch “Hương Đất An Phú”, doanh thu 20 tỷ/năm và được bình chọn là “Nông dân Việt Nam xuất sắc” năm 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "05/10/2025"
      },
      {
        "id": "1367376",
        "title": "Nông dân Việt Nam xuất sắc đến từ Cao Bằng là tỷ phú nuôi 'cá quý tộc', trồng quả ngon công nghệ cao",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-den-tu-cao-bang-la-ty-phu-nuoi-ca-quy-toc-trong-qua-ngon-cong-nghe-cao-d1367376.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/10/03/2-0003.jpg",
        "sapo": "Anh Ngụy Văn Công, tỷ phú Cao Bằng, là Nông dân Việt Nam xuất sắc 2025 đến từ thôn Bản Hoàng xã Trường Hà, (địa bàn huyện Hà Quảng trước đây) làm giàu từ mô hình nuôi cá tầm-\"cá quý tộc\" và trồng dưa lưới, dưa lê, dưa chuột bao tử công nghệ cao, mang lại lợi nhuận trung bình 5,5 tỷ đồng/năm...",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "04/10/2025"
      },
      {
        "id": "1367383",
        "title": "Một người ở phường Bắc Kạn, tỉnh Thái Nguyên-đại gia trồng nghệ, làm tinh bột nghệ, là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/mot-nguoi-o-phuong-bac-kan-tinh-thai-nguyen-dai-gia-trong-nghe-lam-tinh-bot-nghe-la-nong-dan-viet-nam-xuat-sac-d1367383.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/10/03/img_1132-0242.jpg",
        "sapo": "Chị Nguyễn Thị Hồng Minh, Giám đốc HTX Nông nghiệp Tân Thành, phường Bắc Kạn, tỉnh Thái Nguyên (địa bàn TP Bắc Kạn, tỉnh Bắc Kạn trước sáp nhập) trồng nghệ, đã biến củ nghệ-loại củ dược liệu bản địa thành \"vàng\", xây dựng thành công vùng nguyên liệu trồng nghệ hữu cơ rộng lớn. Chị Hồng Minh được bình chọn là Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "04/10/2025"
      },
      {
        "id": "1367184",
        "title": "Nông dân Việt Nam xuất sắc đến từ Lâm Đồng (sau sáp nhập), từ nghèo rớt mồng tơi, đến góp hơn 10 tỷ làm nông thôn mới",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-den-tu-lam-dong-sau-sap-nhap-tu-ngheo-rot-mong-toi-den-gop-hon-10-ty-lam-nong-thon-moi-d1367184.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/10/02/z7073235225189_5ba747e9ff5c1d635bc2fd5a857f3184-1429.jpg",
        "sapo": "Ông Huỳnh Văn Tùng, nông dân tỷ phú Đắk Nông, đến từ xã Quảng Tín, tỉnh Lâm Đồng (thuộc xã Đắk Sin, huyện Đắk R’lấp, tỉnh Đắk Nông trước đây), được bình chọn là “Nông dân Việt Nam xuất sắc 2025\". Từ cảnh nghèo rớt mồng tơi, ông Tùng kiên trì gây dựng trang trại 16ha trồng cà phê, sầu riêng...đóng góp hơn 10 tỷ đồng để xây dựng hạ tầng, trường học, đường giao thông nông thôn mới.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "02/10/2025"
      },
      {
        "id": "1365951",
        "title": "Nông dân Việt Nam xuất sắc đến từ Đồng Nai là người nuôi ong kiểu gì khiến cả làng phục lăn, bán mật ra chợ toàn cầu",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-den-tu-dong-nai-la-nong-dan-nuoi-ong-kieu-gi-khien-ca-lang-phuc-lan-ban-mat-ra-cho-toan-cau-d1365951.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/27/le-loc-quan-mat-ong-quan-phat-mat-ong-banh-to-mat-ong-dong-nai-nong-dan-viet-nam-xuat-sac-nam-2025-1-1856.jpg",
        "sapo": "Giữa vùng đất Dầu Giây, tỉnh Đồng Nai (địa phận huyện Thống Nhất trước đây), ông Lê Lộc Quân đã thành công với nghề nuôi ong \"hổng giống ai\". Ông nuôi ong mật bánh tổ, làm ra thứ mật ong \"sang, xịn, mịn\", sản phẩm cao cấp, chinh phục thị trường quốc tế. Ông Lê Lộc Quân trở thành Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "28/09/2025"
      },
      {
        "id": "1365890",
        "title": "Tỷ phú Cà Mau 'rủ rê chòm xóm' nuôi tôm trải bạt làm giàu, lời 10 tỷ/năm, được bình chọn là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/ty-phu-ca-mau-ru-re-chom-xom-nuoi-tom-trai-bat-lam-giau-loi-10-ty-nam-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-d1365890.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/27/13565620250926_1520480-1349.jpg",
        "sapo": "Tỷ phú Cà Mau chúng tôi muốn nhắc tới là ông Nguyễn Chí Linh, ngụ ấp Bờ Cảng, xã Long Điền, tỉnh Cà Mau (địa phận huyện Đông Hải, tỉnh Bạc Liêu trước sáp nhập). Ông Chí Linh đã thành công với nghề nuôi tôm, đặc biệt là nuôi tôm công nghệ cao, lời 10 tỷ năm, được bình chọn là 1 trong 63 Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "28/09/2025"
      },
      {
        "id": "1365224",
        "title": "Nông dân Việt Nam xuất sắc 2025 đến từ tỉnh Đắk Lắk là một thầy giáo nghỉ hưu về trồng cà phê, lãi gần 1 tỷ/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2025-den-tu-tinh-dak-lak-la-mot-thay-giao-nghi-huu-ve-trong-ca-phe-lai-gan-1-ty-nam-d1365224.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/24/img_0724-2058.jpg",
        "sapo": "Sau khi nghỉ hưu, thầy giáo Nguyễn An Sơn, xã Cư Mgar, tỉnh Đắk Lắk trở thành nông dân trồng cà phê hữu cơ. Ông áp dụng kỹ thuật trồng cà phê đa thân, sử dụng công nghệ tưới nhỏ giọt, lãi gần 1 tỷ đồng/năm. Năm 2025, ông Nguyễn An Sơn được bình chọn là 1 trong 63 Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "26/09/2025"
      },
      {
        "id": "1364993",
        "title": "Nuôi cá Koi, nuôi gà chọi, nuôi cả loại sâu 'đặc biệt', trai Hải Phòng lời 2 tỷ/năm, là Nông dân Việt Nam xuất sắc 2025",
        "url": "https://danviet.vn/nuoi-ca-koi-nuoi-ga-choi-nuoi-ca-loai-sau-dac-biet-trai-hai-phong-loi-2-ty-nam-la-nong-dan-viet-nam-xuat-sac-2025-d1364993.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/24/quan-koi-1-0549.jpg",
        "sapo": "Anh Vũ Văn Quân, thôn Kỳ Sơn, xã Kiến Hưng, thành phố Hải Phòng (địa bàn huyện Kiến Thụy trước đây) vừa được Hội đồng chung khảo Chương trình Tự hào Nông dân Việt Nam bình chọn là 1 trong 63 \"Nông dân Việt Nam xuất sắc 2025\". Anh Quân làm giàu với mô hình sinh vật cảnh, nuôi cá koi Nhật Bản, nuôi gà chọi, nuôi sâu canxi, đạt mức lợi nhuận 2 tỷ đồng/năm.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "24/09/2025"
      },
      {
        "id": "1362496",
        "title": "Một người Đồng Tháp nuôi 'con vật ăn bẩn' thải phân hữu cơ tốt, doanh thu 6,2 tỷ/năm, là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/mot-nguoi-dong-thap-nuoi-con-vat-an-ban-thai-phan-huu-co-tot-doanh-thu-62-ty-nam-la-nong-dan-viet-nam-xuat-sac-d1362496.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/09/13/z7007769923224_c3b3bdc415824c4f0676f3a610652fc4-1739.jpg",
        "sapo": "Ông Nguyễn Văn Chào, Nông dân Việt Nam xuất sắc 2025 đến từ xã Tân Thành, tỉnh Đồng Tháp mới (hình thành từ việc sáp nhập xã Thông Bình và xã Tân Thành A, huyện Tân Hồng, tỉnh Đồng tháp trước đây) dùng chất thải chăn nuôi làm thức ăn nuôi trùn quế. Từ phân trùn quế làm ra loại phân hữu cơ tốt, doanh thu 6,2 tỷ đồng/năm.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "24/09/2025"
      },
      {
        "id": "1364519",
        "title": "Trồng thứ cây chăm nhàn, 'đếm tiền bền vững', ông Tý ở Tây Ninh lần thứ 2 được bình chọn là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/trong-thu-cay-cham-nhan-dem-tien-ben-vung-ong-ty-o-tay-ninh-lan-thu-2-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-d1364519.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/22/ong-ty-mia-ta-van-minh-tay-ninh-nong-dan-viet-nam-xuat-sac-nam-2025-2-1007.jpg",
        "sapo": "Với cách chọn cây trồng kiểu \"nồi đồng cối đá mà đếm tiền bền vững\" như trồng mía đường, cao su, cây mì (cây sắn), trồng tre lấy măng, ông Tạ Văn Minh (Tý mía) đến từ tỉnh Tây Ninh lần thứ 2 được vinh danh Nông dân Việt Nam xuất sắc. Trước đó, lần đầu tiên ông được bình chọn nhận danh hiệu \"Nông dân Việt Nam xuất sắc\" là năm 2018.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "22/09/2025"
      },
      {
        "id": "1362712",
        "title": "Nông dân Việt Nam xuất sắc 2025 đến từ Đồng Tháp là nữ tỷ phú làm giàu với 'mô hình 3 trong 1', thu hàng chục tỷ/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2025-den-tu-dong-thap-la-nu-ty-phu-lam-giau-voi-mo-hinh-3-trong-1-thu-hang-chuc-ty-nam-d1362712.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/09/14/gen-n-z7010568118912_c86853d3109cef13c57b844ecabc7339-1511.jpg",
        "sapo": "Bà Phạm Ngọc Hồng Thủy, xã Vĩnh Bình, tỉnh Đồng Tháp (trước đây là thị trấn Vĩnh Bình, huyện Gò Công Tây, tỉnh Tiền Giang) thành công với mô hình kinh tế \"3 trong 1\": Sản xuất yến sào, nước uống đóng bình và du lịch sinh thái với doanh thu hàng chục tỷ đồng/năm. Bà Phạm Ngọc Hồng Thủy được bình chọn là Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "21/09/2025"
      },
      {
        "id": "1363931",
        "title": "Một người Cần Thơ có 30 năm kinh nghiệm 'trồng cây tỷ đô', cả làng phục tài, là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/mot-nguoi-can-tho-co-30-nam-kinh-nghiem-trong-cay-ty-do-ca-lang-phuc-tai-la-nong-dan-viet-nam-xuat-sac-d1363931.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/19/sau-rieng-2-1338.jpg",
        "sapo": "Với 30 năm kinh nghiệm trồng sầu riêng Dona và sầu riêng Ri6, ông Nguyễn Hoàng Anh, ngụ ở ấp 4, xã Ba Trinh, huyện Kế Sách, tỉnh Sóc Trăng, nay là ấp 4, xã Đại Hải, TP Cần Thơ là người giàu có. Vườn sầu riêng của gia đình ông có cây mang tới 300-400kg trái, ông được bình chọn là Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "20/09/2025"
      },
      {
        "id": "1363304",
        "title": "Anh thợ sửa xe máy ở Sơn La ngày nào nay là tỷ phú kinh tế trang trại, được bình chọn Nông dân Việt Nam xuất sắc 2025",
        "url": "https://danviet.vn/anh-tho-sua-xe-may-o-son-la-ngay-nao-nay-la-ty-phu-kinh-te-trang-trai-duoc-binh-chon-nong-dan-viet-nam-xuat-sac-2025-d1363304.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/09/16/img_7231-2333.jpg",
        "sapo": "Từ anh thợ sửa chữa xe máy, nay ông Nguyễn Đức Cường, bản Nghĩa Hưng, xã Mường Cơi, tỉnh Sơn La đã xây dựng thành công mô hình kinh tế trang trại tổng hợp với doanh thu hàng tỷ đồng/năm. Ông được bình chọn là 1 trong 63 Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "20/09/2025"
      },
      {
        "id": "1363650",
        "title": "Nông dân Việt Nam xuất sắc 2025 đến từ Đà Nẵng (Quảng Nam trước đây) là bà chủ họ Nguyễn mát tay nuôi lợn, kinh doanh",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2025-den-tu-da-nang-quang-nam-truoc-day-la-ba-chu-ho-nguyen-mat-tay-nuoi-lon-kinh-doanh-d1363650.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/18/1027016ca1e22f-65a9-400a-be61-e8f787819483-1018.jpg",
        "sapo": "Với nguồn vốn ít ỏi ban đầu chỉ có 30 triệu đồng từ việc vay của ngân hàng, chị Nguyễn Thị Đông, xã Tiên Phước, thành phố Đà Nẵng, trước đây là thôn 3, xã Tiên Thọ (huyện Tiên Phước, tỉnh Quảng Nam) mát tay nuôi lợn (nuôi heo), kinh doanh thức ăn chăn nuôi. Chị Nguyễn Thị Đông còn được bình chọn là Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "20/09/2025"
      },
      {
        "id": "1363710",
        "title": "Nông dân Việt Nam xuất sắc 2025 đến từ Cần Thơ: Nuôi ba ba, trồng sầu riêng, sạ lúa, mùa nào cũng có tiền to",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2025-den-tu-can-tho-nuoi-ba-ba-trong-sau-rieng-xa-lua-mua-nao-cung-co-tien-to-d1363710.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/18/163020nuoi-ba-ba-3-1624.jpg",
        "sapo": "Ông Trần Hồng Quan, ngụ ở ấp Trường Hiệp, xã Trường Long A, huyện Châu Thành A, tỉnh Hậu Giang (trước sáp nhập) nay là ấp Trường Hiệp, xã Trường Long Tây, TP Cần Thơ trở thành Nông dân Việt Nam xuất sắc 2025 nhờ mô hình nuôi ba ba, trồng sầu riêng và sạ lúa. Theo ông Quan, mô hình này đảm bảo lúc nào cũng có nguồn thu, năm nào cũng có lợi nhuận.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "19/09/2025"
      },
      {
        "id": "1363509",
        "title": "Nông dân Việt Nam xuất sắc đến từ Ninh Bình, điển hình xây dựng nông thôn mới, là 'ông vua vôi', sống tốt đời đẹp đạo",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-den-tu-ninh-binh-dien-hinh-xay-dung-nong-thon-moi-la-ong-vua-voi-song-tot-doi-dep-dao-d1363509.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/17/17204420250916_110829-1720.jpg",
        "sapo": "Được bình chọn là “Nông dân Việt Nam xuất sắc 2025”, anh Nguyễn Văn Long, thị trấn Kiện Khê (tỉnh Hà Nam trước sáp nhập), nay là phường Châu Sơn, tỉnh Ninh Bình, không chỉ gây dựng sự nghiệp thành công từ nghề sản xuất vôi (dân gọi vui là \"ông vua vôi\") mà còn là một tấm gương tiêu biểu, tích cực đóng góp xây dựng nông thôn mới, đô thị văn minh tại địa phương.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "19/09/2025"
      },
      {
        "id": "1363174",
        "title": "Nông dân Việt Namxuất sắc 2025 đến từ Vĩnh Long, cả đời nghĩ cách trồng 'cây tỷ đô' trên đất cù lao, thu 2,2 tỷ/năm",
        "url": "https://danviet.vn/nong-dan-viet-namxuat-sac-2025-den-tu-vinh-long-ca-doi-nghi-cach-trong-cay-ty-do-tren-dat-cu-lao-thu-22-ty-nam-d1363174.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/16/nong-dan-xuat-sac-2025-vl-5-1534.jpg",
        "sapo": "Từ niềm đam mê trồng sầu riêng và trải qua nhiều khó khăn trong quá trình gắn bó với loại cây tỷ đô này, anh Huỳnh Văn Hiệp (51 tuổi, ngụ ở ấp Lăng, xã Thanh Bình, tỉnh Vĩnh Long, trước đây là ấp Lăng, xã Thanh Bình, huyện Vũng Liêm, tỉnh Vĩnh Long), được bình chọn là Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "18/09/2025"
      },
      {
        "id": "1362724",
        "title": "Nuôi chim khổng lồ cả đời chả bay, nuôi heo mát tay, một người Đắk Lắk được bình chọn là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/nuoi-chim-khong-lo-ca-doi-cha-bay-nuoi-heo-mat-tay-mot-nguoi-dak-lak-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-d1362724.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/14/ntd_9366-1542.jpg",
        "sapo": "Ông Hoàng Văn Nhiêu, thôn Lạc Đạo, xã Sơn Thành, tỉnh Đắk Lắk (trước đây là huyện Tây Hoà, tỉnh Phú Yên), nhờ nuôi đà điểu là chim khổng lồ, nuôi bò và nuôi heo nái mát tay mà giàu lên. Ông Hoàng Văn Nhiêu được bình chọn là Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "17/09/2025"
      },
      {
        "id": "1362983",
        "title": "Một người Bắc Ninh 'ẵm' tiền tỷ nhờ nuôi vịt cho nghe nhạc hát xẩm, cả làng phục lăn, là Nông dân Việt Nam xuất sắc 2025",
        "url": "https://danviet.vn/mot-nguoi-bac-ninh-am-tien-ty-nho-nuoi-vit-cho-nghe-nhac-hat-xam-ca-lang-phuc-lan-la-nong-dan-viet-nam-xuat-sac-2025-d1362983.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/16/060520nuoi-vit-cho-nghe-nhac-o-bac-ninh-8-0604.jpg",
        "sapo": "Nông dân Việt Nam xuất sắc 2025 Lê Xuân Nam ở tổ dân phố Râm, phường Tự Lạn, tỉnh Bắc Ninh có cách làm sáng tạo khi nuôi 30.000 con vịt cho nghe các loại nhạc - từ quan họ Bắc Ninh, hát chèo, hát xẩm… đến nhạc trẻ. Đàn vịt ăn khoẻ, ít bệnh, lớn đồng đều, lãi tiền tỷ...",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "17/09/2025"
      },
      {
        "id": "1362209",
        "title": "Anh thợ cơ khí nghèo khi xưa, nay nắm trong tay 100ha đất ở xã Minh Thạnh, TPHCM, là Nông dân Việt Nam xuất sắc 2025",
        "url": "https://danviet.vn/anh-tho-co-khi-ngheo-khi-xua-nay-nam-trong-tay-100ha-dat-o-xa-minh-thanh-tphcm-la-nong-dan-viet-nam-xuat-sac-2025-d1362209.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/12/ong-bui-thien-truc-xa-minh-hoa-dau-tieng-binh-duong-xa-minh-thanh-tphcm-nong-dan-viet-nam-xuat-sac-nam-2025-3-0921.jpg",
        "sapo": "Từ anh thợ cơ khí nghèo phải mưu sinh đủ nghề, ông Bùi Thiện Trúc ở xã Minh Thạnh, TPHCM (trước sáp nhập thuộc huyện Dầu Tiếng, tỉnh Bình Dương) nay là chủ trang trại rộng gần 100 ha với đủ loại cây đặc sản như bưởi, sầu riêng, dừa và cao su, đạt doanh thu hàng chục tỷ đồng/năm. Ông Bùi Thiện Trúc là 1 trong 63 Nông dân Việt Nam xuất sắc năm 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "17/09/2025"
      },
      {
        "id": "1362914",
        "title": "Từ Nghệ An ra Hà Nội, chị đẹp 'ôm' ruộng bỏ hoang, trồng rau kiểu gì siêu thị mua, là Nông dân Việt Nam xuất sắc 2025?",
        "url": "https://danviet.vn/tu-nghe-an-ra-ha-noi-chi-dep-om-ruong-bo-hoang-trong-rau-kieu-gi-sieu-thi-mua-la-nong-dan-viet-nam-xuat-sac-2025-d1362914.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/09/16/img_9250-0017.png",
        "sapo": "\"Ôm\" ruộng bỏ hoang, hơn 10 năm làm giàu từ trồng rau sạch, làm nông nghiệp tuần hoàn, bán rau cho các hệ thống siêu thị nổi tiếng, chị Bùi Thị Hiếu, Giám đốc HTX Sản xuất và tiêu thụ nông sản sạch Viên Sơn, phường Sơn Tây, TP Hà Nội (trước sáp nhập thuộc phường Viên Sơn, thị xã Sơn Tây) đã trở thành nông dân tỷ phú và được bình chọn là 1 trong 63 Nông dân Việt Nam xuất sắc năm 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "16/09/2025"
      },
      {
        "id": "1360648",
        "title": "Tỷ phú Khánh Hòa-một người làm giàu từ 50 con tôm hùm giống, là Nông dân Việt Nam xuất sắc 2025",
        "url": "https://danviet.vn/ty-phu-khanh-hoa-mot-nguoi-lam-giau-tu-50-con-tom-hum-giong-la-nong-dan-viet-nam-xuat-sac-2025-d1360648.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/09/07/lay-chon-2-0959.jpg",
        "sapo": "Chỉ với 50 con tôm hùm giống ban đầu do nông dân Trương Văn Lay (xã Nam Cam Ranh, tỉnh Khánh Hòa) tự đi đánh bắt, sau thời gian nuôi tôm hùm bài bản, tăng số lượng theo từng năm và mang lại nguồn thu nhập tốt. Đến nay, ông Trương Văn Lay là một trong các tỷ phú Khánh Hòa nuôi tôm hùm, làm giàu từ biển và được bình chọn là 1 trong 63 Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "16/09/2025"
      },
      {
        "id": "1362623",
        "title": "Anh thợ lặn nghèo ở đảo Phú Quốc, tỉnh An Giang (mới), nay có trăm tỷ nhờ nuôi con gì nhả toàn ngọc quý?",
        "url": "https://danviet.vn/anh-tho-lan-o-dao-phu-quoc-tinh-an-giang-moi-nay-co-tram-ty-nho-nuoi-con-gi-nha-toan-ngoc-quy-d1362623.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/14/dscf7703-0027.jpg",
        "sapo": "Từ một thợ lặn nghèo khó, trải qua muôn vàn sóng gió cuộc đời, ông Hồ Phi Thủy, đặc khu Phú Quốc, tỉnh An Giang (trước sáp nhập thuộc tỉnh Kiên Giang) đã vươn lên trở thành Giám đốc Công ty TNHH MTV Ngọc trai Ngọc Hiền, được mệnh danh là \"vua\" ngọc trai với doanh thu gần 100 tỷ đồng/năm. Ông được bình chọn là 1 trong 63 Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "16/09/2025"
      },
      {
        "id": "1362819",
        "title": "Máy phun thuốc của Nông dân Việt Nam suất sắc 2025 ở Đồng Nai phun cao tới 35m, một giờ bao trọn 3-4ha",
        "url": "https://danviet.vn/may-phun-thuoc-cua-nha-khoa-hoc-cua-nha-nong-2025-o-dong-nai-phun-cao-toi-35m-mot-gio-bao-tron-3-4ha-d1362819.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/15/nha-khoa-hoc-cua-nha-nong-nguyen-van-linh-o-binh-phuoc-dong-nai-hanh-trinh-giu-lua-dam-me-sang-che-tu-noi-vat-va-tren-dong-1-0920.jpg",
        "sapo": "Anh Nguyễn Văn Lĩnh sinh ra và lớn lên trong một gia đình thuần nông ở vùng đất đỏ Bình Phước cũ, nay là phường Bình Phước, tỉnh Đồng Nai. Anh đã vinh dự được công nhận là Nông dân Việt Nam xuất sắc năm 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "15/09/2025"
      },
      {
        "id": "1362276",
        "title": "Nông dân Việt Nam xuất sắc 2025 đến từ tỉnh Phú Thọ là người nuôi lợn mát tay, thu tiền tỷ",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2025-den-tu-tinh-phu-tho-la-nguoi-nuoi-lon-mat-tay-thu-tien-ty-d1362276.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/12/z7003657903236_c5846e142dc4aa7826f30e3333ff0608-1500.jpg",
        "sapo": "Mua được vàng từ tiền lời từ nghề nuôi lợn theo hướng an toàn sinh học, ông Nguyễn Văn Toàn, xã Hy Cương, tỉnh Phú Thọ, doanh thu hàng tỷ đồng/năm, trở thành \"Nông dân Việt Nam xuất sắc 2025\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "15/09/2025"
      },
      {
        "id": "1362485",
        "title": "Trồng 'cây tiền tỷ' ra quả to đẹp, đều tăm tắp, một người Quảng Ngãi lãi ròng 2 tỷ/năm, là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/trong-cay-tien-ty-ra-qua-to-dep-deu-tam-tap-mot-nguoi-quang-ngai-lai-rong-2-ty-nam-la-nong-dan-viet-nam-xuat-sac-d1362485.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/13/anh-manh-dan-dau-tu-trong-vang-xanh-mot-nong-dan-vung-bien-quang-ngai-thu-loi-nhuan-hon-2-ty-dongnam-3-1052.jpg",
        "sapo": "Sau hơn 7 năm đầu tư trồng sầu riêng-được ví như trồng \"cây tiền tỷ\" và dày công chăm sóc, đến nay ông Bùi Đức Quỳnh, thôn Đăk Tang, xã Rờ Kơi, tỉnh Quảng Ngãi (trước sáp nhập thuộc tỉnh Kon Tum) đã trở thành ông chủ của vườn sầu riêng 10 ha, thu về lợi nhuận hơn 2 tỷ đồng/năm. Ông Bùi Đức Quỳnh là 1 trong 63 gương mặt nông dân tiêu biểu được Hội đồng chung khảo Trung ương bình chọn nhận danh hiệu \"Nông dân Việt Nam xuất sắc 2025\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "15/09/2025"
      },
      {
        "id": "1362579",
        "title": "Bà giám đốc ở TPHCM làm thứ bánh mỏng như tờ giấy, bán tốt sang châu Âu, là Nông dân Việt Nam xuất sắc 2025",
        "url": "https://danviet.vn/ba-giam-doc-o-tphcm-lam-thu-banh-mong-nhu-to-giay-ban-tot-sang-chau-au-la-nong-dan-viet-nam-xuat-sac-2025-d1362579.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/14/102640img_5455-1736.jpg",
        "sapo": "Đó là bà giám đốc Võ Thị Bích Hạnh, xã Củ Chi, TPHCM, chủ cơ sở làm bánh tráng thủ công nổi tiếng trong vùng. Sản phẩm bánh tráng mỏng như tờ giấy của bà Hạnh đã bán tốt ở thị trường châu Âu. Bà Võ Thị Bích Hạnh được bình chọn là 1 trong 63 \"Nông dân Việt Nam xuất sắc 2025\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "15/09/2025"
      },
      {
        "id": "1362082",
        "title": "20 tuổi đã cầm tiền tỷ, một anh giám đốc trẻ ở Bà Rịa-Vũng Tàu nay là Nông dân Việt Nam xuất sắc 2025",
        "url": "https://danviet.vn/20-tuoi-da-cam-tien-ty-mot-anh-giam-doc-tre-o-ba-ria-vung-tau-nay-la-nong-dan-viet-nam-xuat-sac-2025-d1362082.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/11/img_1785-1655.jpg",
        "sapo": "Nhờ trồng bưởi, hơn 10 năm trước anh Hồ Hoàng Kha, ấp Phước Bình, xã Sông Xoài, TP Phú Mỹ, tỉnh Bà Rịa Vũng Tàu; nay là phường Tân Thành, TPHCM đã cầm tiền tỷ trong tay. Cơ duyên ấy đã gắn chặt anh với cây bưởi da xanh và trở thành Giám đốc HTX bưởi da xanh Sông Xoài.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/09/2025"
      },
      {
        "id": "1361885",
        "title": "Nông dân Việt Nam xuất sắc 2025 đến từ tỉnh Tuyên Quang nuôi lợn đen đặc sản, nuôi gà mía thả vườn mà thu tiền tỷ",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2025-den-tu-tinh-tuyen-quang-nuoi-lon-den-dac-san-nuoi-ga-mia-tha-vuon-ma-thu-tien-ty-d1361885.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/09/10/img_7683-2226.jpg",
        "sapo": "Nuôi lợn đen hàng trăm con, nuôi gà mía thả vườn hàng ngàn con, ông Phạm Hồng Giang, thôn Thái Hà, xã Ngọc Đường, tỉnh Tuyên Quang (trước sáp nhập tỉnh Hà Giang, Tuyên Quang, xã Ngọc Đường thuộc TP Tuyên Quang, tỉnh Tuyên Quang) đạt doanh thu hàng tỷ đồng và được Trung ương Hội Nông dân Việt nam bình chọn là Nông dân Việt Nam xuất sắc năm 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/09/2025"
      },
      {
        "id": "1362019",
        "title": "Nông dân Việt Nam xuất sắc ở Lai Châu là người nuôi bò giỏi, chế biến đặc sản Tây Bắc, thu hơn 2 tỷ/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-o-lai-chau-la-nguoi-nuoi-bo-gioi-che-bien-dac-san-tay-bac-thu-hon-2-ty-nam-d1362019.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/09/11/nuoi-bo-nhot-chuong-2-1353.jpg",
        "sapo": "Từ mô hình nuôi bò sinh sản và chế biến thực phẩm mang đậm hương vị núi rừng Tây Bắc để bán ra thị trường, mỗi năm ông Đoàn Văn Kiên, ở tổ 5 (xã Tân Uyên, tỉnh Lai Châu) thu hơn 2 tỷ đồng. Ông được bình chọn là một trong 63 Nông dân Việt Nam xuất sắc năm 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/09/2025"
      },
      {
        "id": "1362282",
        "title": "Vô khu vườn ươm mát rượi ở Đà Nẵng, la liệt cây giống, ông chủ họ Phạm là Nông dân Việt Nam xuất sắc 2025",
        "url": "https://danviet.vn/vo-khu-vuon-uom-mat-ruoi-o-da-nang-la-liet-cay-giong-ong-chu-ho-pham-la-nong-dan-viet-nam-xuat-sac-2025-d1362282.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/12/hinh-8-1402.jpg",
        "sapo": "Từ vài trăm triệu đồng vốn vay, anh Phạm Văn Luận, trú thôn An Tân, xã Hòa Vang, thành phố Đà Nẵng (trước đây là địa bàn huyện Hòa Vang) đã xây dựng nên cơ ngơi là vườn ươm cây giống chất lượng cao với quy mô hơn 15.000m², mỗi năm cung ứng ra thị trường hàng triệu cây giống các loại. Anh Phạm Văn Luận được bình chọn là Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "13/09/2025"
      },
      {
        "id": "1361844",
        "title": "Ông nông dân Ninh Bình nuôi thỏ New Zealand, doanh thu 6 tỷ/năm là “Nông dân Việt Nam xuất sắc 2025”",
        "url": "https://danviet.vn/ong-nong-dan-ninh-binh-nuoi-tho-new-zealand-doanh-thu-6-ty-nam-la-nong-dan-viet-nam-xuat-sac-2025-d1361844.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/09/10/20250909_094934-1809.jpg",
        "sapo": "Ông Triệu Đình Hợi, một nông dân ở thôn Vụ Nữ, xã Hợp Hưng, huyện Vụ Bản, tỉnh Nam Định cũ (nay xã Hiển Khánh, tỉnh Ninh Bình mới sau sáp nhập) đã thành công với mô hình nuôi thỏ New Zealand, đạt doanh thu 6 tỷ đồng/năm và được bình chọn là “Nông dân Việt Nam xuất sắc 2025”.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "13/09/2025"
      },
      {
        "id": "1361768",
        "title": "Một thầy giáo rời bục giảng về nuôi con gì mà thành tỷ phú Cà Mau, là Nông dân Việt Nam xuất sắc 2025?",
        "url": "https://danviet.vn/mot-thay-giao-roi-buc-giang-ve-nuoi-con-gi-ma-thanh-ty-phu-ca-mau-la-nong-dan-viet-nam-xuat-sac-2025-d1361768.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/10/dsc09584-1304.jpg",
        "sapo": "Ông Huỳnh Thanh Sự, khóm 9, phường Tân Thành, tỉnh Cà Mau là một thầy giáo rời bục giảng hơn 30 năm trước trở làm nông dân. Giờ đây, ông Sự đã trở thành tỷ phú Cà Mau nuôi tôm quảng canh 2 giai đoạn với lợi nhuận hơn 1 tỷ đồng/năm.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "13/09/2025"
      },
      {
        "id": "1360947",
        "title": "Nhặt thứ rác gì mang về nhà mà một 'chị đẹp' An Giang nay là Nông dân Việt Nam xuất sắc 2025?",
        "url": "https://danviet.vn/nhat-thu-rac-gi-mang-ve-nha-ma-mot-chi-dep-an-giang-nay-la-nong-dan-viet-nam-xuat-sac-d1360947.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/09/07/img_8012-1004.jpeg",
        "sapo": "Chị Châu Thị Nương, Giám đốc HTX Nông nghiệp Tà Đảnh, “Nông dân Việt Nam xuất sắc 2025”, nổi bật với hành trình biến phụ phẩm thành nấm dược liệu và xây dựng mô hình nông nghiệp tuần hoàn, công nghệ cao.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "12/09/2025"
      },
      {
        "id": "1361325",
        "title": "Nông dân Việt Nam xuất sắc 2025 đến từ tỉnh Thái Nguyên-thêm 'nữ tướng' trồng chè, chế biến trà đặc sản",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2025-den-tu-tinh-thai-nguyen-them-nu-tuong-trong-che-che-bien-tra-dac-san-d1361325.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/09/08/img_9388-1621.jpg",
        "sapo": "Ở vùng đất chè xã La Bằng – nơi được mệnh danh là một trong “Tứ đại danh trà” của Thái Nguyên, có một nữ doanh nhân đã dành cả tuổi trẻ và tâm huyết để gắn bó với cây chè. Bà là Nguyễn Thị Hiền – Chủ tịch HĐQT, Giám đốc Công ty cổ phần Chè Hà Thái vừa được bình chọn là Nông dân Việt Nam xuất sắc năm 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "12/09/2025"
      },
      {
        "id": "1362054",
        "title": "Lời hàng tỷ/năm từ làm nước mắm-nghề cha truyền con nối, một bà chủ họ Trần ở Bình Định là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/loi-hang-ty-nam-tu-lam-nuoc-mam-nghe-cha-truyen-con-noi-mot-ba-chu-ho-tran-o-binh-dinh-la-nong-dan-viet-nam-xuat-sac-d1362054.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/11/ntd_9197-1540.jpg",
        "sapo": "Ở vùng biển Bình Định cũ (nay là tỉnh Gia Lai sau sáp nhập), bà Trần Thị Duyên, chủ cơ sở nước mắm Bà Duyên đã gắn bó với nghề làm nước mắm \"cha truyền con nối\". Cơ sở nước mắm truyền thống của bà tạo việc làm, thu nhập tốt cho hàng chục lao động, mang lại doanh thu hàng tỷ đồng mỗi năm. Bà Trần Thị Duyên là 1 trong 63 Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "12/09/2025"
      },
      {
        "id": "1361709",
        "title": "Một người Huế chỉ xay xát gạo, làm củi từ trấu mà doanh thu hàng chục tỷ/năm, là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/mot-nguoi-hue-chi-xay-xat-gao-lam-cui-tu-trau-ma-doanh-thu-hang-chuc-ty-nam-la-nong-dan-viet-nam-xuat-sac-d1361709.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/09/10/ngo-viet-sau-2-1008.jpg",
        "sapo": "Bằng việc đầu tư cơ sở xay xát lúa gạo và sản xuất củi trấu, ông Ngô Viết Sáu, thôn Lang Xá Bàu, phường Thanh Thủy, TP Huế đạt doanh thu hàng chục tỷ đồng/năm. Ông Ngô Viết Sáu được bình chịn là Nông dân Việt Nam xuất sắc năm 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "11/09/2025"
      },
      {
        "id": "1360971",
        "title": "Nuôi bò nhốt chuồng đếm vội chả xuể, trồng rừng tốt um, một người Lào Cai 2 lần là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/nuoi-bo-nhot-chuong-dem-voi-cha-xue-trong-rung-tot-um-mot-nguoi-lao-cai-2-lan-la-nong-dan-viet-nam-xuat-sac-d1360971.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/07/dsc02165-1340.jpg",
        "sapo": "Anh Hoàng Văn Liêm, dân tộc Tày-Giám đốc Hợp tác xã Dịch vụ tổng hợp Thiên An với mô hình nuôi bò nhốt chuồng, trồng rừng ở xã Yên Thành, tỉnh Lào Cai (trước sáp nhập tỉnh Yên Bái, Lào Cai, xã Yên Thành thuộc tỉnh Yên Bái) vươn lên làm giàu, tạo nhiều việc làm. Anh Liêm vinh dự lần thứ 2 được bình chọn là Nông dân Việt Nam xuất sắc.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "10/09/2025"
      },
      {
        "id": "1361123",
        "title": "Khu du lịch sinh thái triệu đô giữa vùng nắng cháy Hà Tĩnh đẹp như phim, ông chủ là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/khu-du-lich-sinh-thai-trieu-do-giua-vung-nang-chay-ha-tinh-dep-nhu-phim-ong-chu-la-nong-dan-viet-nam-xuat-sac-d1361123.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/09/08/nong-dan-2-1118.jpg",
        "sapo": "Câu chuyện về ông Nguyễn Hữu Quyền (trú ở phường Trần Phú, tỉnh Hà Tĩnh), từ một kỹ sư xây dựng đã mạnh dạn đầu tư \"hô biến\" vùng ruộng đồng trũng thấp, khó canh tác thành khu du lịch sinh thái triệu đô khiến ai cũng ngưỡng mộ. Ông Nguyễn Hữu Quyền là 1 trong 63 gương nông dân tiêu biểu của cả nước được bình chọn danh hiệu \"Nông dân Việt Nam xuất sắc 2025\"",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "10/09/2025"
      },
      {
        "id": "1361000",
        "title": "Rời bục giảng, cô giáo Nùng Lạng Sơn trở thành “Nông dân Việt Nam xuất sắc 2025” với đặc sản hồng treo gió",
        "url": "https://danviet.vn/roi-buc-giang-co-giao-nung-lang-son-tro-thanh-nong-dan-viet-nam-xuat-sac-2025-voi-dac-san-hong-treo-gio-d1361000.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/07/536278465_4081737548710523_135236972964180738_n-0928.jpg",
        "sapo": "Từ bỏ bục giảng với công việc nhà giáo ổn định, chị Vương Thị Thương (dân tộc Nùng, sinh năm 1989) đã trở về với nghề nông một cách rất khác. Từ loại quả đặc sản của quê hương là hồng vành khuyên, chị Thương đã làm nên sản phẩm hồng treo gió. Chị Vương Thị Thương là 1 trong 63 nông dân tiêu biểu của cả nước được bình chọn nhận danh hiệu \"Nông dân Việt Nam xuất sắc 2025\"",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "09/09/2025"
      },
      {
        "id": "1361103",
        "title": "Trồng thứ cây bò lung tung cản đâu có kịp, treo la liệt quả, một người Tuyên Quang là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/trong-thu-cay-bo-lung-tung-can-dau-co-kip-treo-la-liet-qua-mot-nguoi-tuyen-quang-la-nong-dan-viet-nam-xuat-sac-d1361103.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/09/07/img_7561-1832.jpg",
        "sapo": "Là một trong 63 Nông dân Việt Nam xuất sắc năm 2025, anh Đoàn Văn Chung (thôn Quang Hải, xã Kim Bình, tỉnh Tuyên Quang) đã viết nên một câu chuyện truyền cảm hứng về làm giàu trong nông nghiệp với mô hình trồng gấc, chế biến quả gấc.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "08/09/2025"
      },
      {
        "id": "1360987",
        "title": "Lần đầu xuất hiện ở Hải Phòng, bà giám đốc 'biến' bèo dại thành thức ăn nuôi trùn quế, là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/lan-dau-xuat-hien-o-hai-phong-ba-giam-doc-bien-beo-dai-thanh-thuc-an-nuoi-trun-que-la-nong-dan-viet-nam-xuat-sac-d1360987.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/07/chi-ha-kiem-tra-trai-nuoi-trun-que-0831.jpg",
        "sapo": "Lục bình hay còn gọi là (bèo tây) đang là “hiểm hoạ” gây ách tắc dòng chảy của các con sông, đã được bà giám đốc nông dân Đỗ Thị Thuý Hà – Giám đốc Hợp tác xã Đầu tư phát triển sông Giá ở Hải Phòng mang về xay, ủ nuôi trùn quế làm thành phân bón hữu cơ. Phân hữu cơ để trồng rau, trồng dưa công nghệ cao. Chị Hà vừa được bình chọn là “Nông dân Việt Nam xuất sắc năm 2025”",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "08/09/2025"
      },
      {
        "id": "1360784",
        "title": "Nông dân Việt Nam xuất sắc đến từ Quảng Trị từng trắng tay vì ‘vàng trắng’ nay là tỷ phú nhờ cây ăn quả",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-den-tu-quang-tri-tung-trang-tay-vi-vang-trang-nay-la-ty-phu-nho-cay-an-qua-d1360784.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/06/be-van-mai-0855.jpg",
        "sapo": "Từ một người từng “trắng tay” vì cây cao su – loại cây từng được gọi là “vàng trắng”, ông Bế Văn Mai, dân tộc Nùng, quê gốc Cao Bằng, sinh ra và lớn lên tại thị trấn Nông trường Việt Trung, huyện Bố Trạch, tỉnh Quảng Bình nay là xã Nam Trạch (tỉnh Quảng Trị) nay là tỷ phú trồng cây ăn quả và được bình chọn là 1 trong 63 Nông dân Việt Nam xuất sắc 2025.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "07/09/2025"
      },
      {
        "id": "1360664",
        "title": "'Ôm' ruộng bỏ hoang, biến thành 'cánh đồng trù phú', Nông dân Việt Nam xuất sắc đến từ Ninh Bình có doanh thu 12 tỷ/năm",
        "url": "https://danviet.vn/om-ruong-bo-hoang-bien-thanh-canh-dong-tru-phu-nong-dan-viet-nam-xuat-sac-den-tu-ninh-binh-co-doanh-thu-12-ty-nam-d1360664.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/05/154113z6979838088929_0edfb8079277890b2dc111b4026f47a9-1540.jpg",
        "sapo": "Ông nông dân Phạm Văn Hướng ở phường Đông Hoa Lư, tỉnh Ninh Bình đã mạnh dạn thuê 160 ha đất ruộng bỏ hoang để trồng lúa, kết hợp làm dịch vụ nông nghiệp. Ông đã biến ruộng đồng bỏ hoang, cằn cỗi thành \"cánh đồng trù phú\", có doanh thu 12 tỷ/năm. Ông Phạm Văn Hướng vừa được Hội đồng Chung khảo bình chọn là 1 trong 63 \"Nông dân Việt Nam xuất sắc 2025\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "06/09/2025"
      },
      {
        "id": "1360694",
        "title": "Nông dân Việt Nam xuất sắc năm 2025 đến từ Cần Thơ: Từ chủ vườn tạp đến tỷ phú sầu riêng",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-nam-2025-den-tu-can-tho-tu-chu-vuon-tap-den-ty-phu-sau-rieng-d1360694.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/09/05/ty-phu-sau-rieng-can-tho--ong-huynh-thanh-lam-20-1816.jpg",
        "sapo": "Câu chuyện về ông Huỳnh Thanh Lâm ở Cần Thơ, một người nông dân đã biến vườn tạp thành “mỏ vàng” trồng sầu riêng, đang được nhiều người ngưỡng mộ. Không chỉ tạo ra của cải cho bản thân và gia đình với thu nhập tiền tỷ mỗi năm, ông còn là một tấm gương sáng về tinh thần học hỏi, dám nghĩ dám làm và hết lòng vì cộng đồng.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "06/09/2025"
      },
      {
        "id": "1360380",
        "title": "Người buôn lợn năm nào nay là tỷ phú Thanh Hóa, sở hữu nhà máy xay xát lúa gạo 40 tỷ, Nông dân Việt Nam xuất sắc 2025",
        "url": "https://danviet.vn/nguoi-buon-lon-nam-nao-nay-la-ty-phu-thanh-hoa-so-huu-nha-may-xay-xat-lua-gao-40-ty-nong-dan-viet-nam-xuat-sac-2025-d1360380.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2025/09/04/nong-dan-viet-nam-xuat-sac-2025-o-thanh-hoa-15-1523.jpg",
        "sapo": "Từ một anh buôn lợn rong ruổi khắp các làng quê từ những năm 1997, sau gần 30 năm bươn chải, ông Lê Văn Thẩn ở xã Thiệu Hóa, tỉnh Thanh Hóa đã gây dựng thành công nhà máy chế biến lúa gạo trị giá hơn 40 tỷ đồng. Ông Lê Văn Thẩn là 1 trong 63 gương mặt nông dân tiêu biểu được Hội đồng chung khảo bình chọn nhận danh hiệu \"Nông dân Việt Nam xuất sắc 2025\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "04/09/2025"
      },
      {
        "id": "1355695",
        "title": "Lộ diện 95 'ngôi sao' Nông dân Việt Nam xuất sắc và Nhà khoa học của nhà nông năm 2025",
        "url": "https://danviet.vn/hop-hoi-dong-binh-chon-cang-thang-chon-95-guong-mat-xuat-sac-d1355695.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/08/15/img_0447-1617.jpg",
        "sapo": "Trong nhiều giờ làm việc khẩn trương, Hội đồng bình chọn đã thảo luận sôi nổi, cân nhắc kỹ lưỡng từng ứng viên để lựa chọn ra 95 gương mặt tiêu biểu toàn quốc. Đây là những đại diện xuất sắc nhất của phong trào thi đua trong lĩnh vực nông nghiệp, nông dân, nông thôn, góp phần lan tỏa những giá trị, thành tựu và tinh thần cống hiến trong dịp kỷ niệm 95 năm thành lập Hội Nông dân Việt Nam.",
        "category": "Hình ảnh & Video",
        "location": "",
        "date": "15/08/2025"
      },
      {
        "id": "1355625",
        "title": "Đã tìm ra 63 Nông dân Việt Nam xuất sắc, 32 Nhà khoa học của nhà nông năm 2025",
        "url": "https://danviet.vn/da-tim-ra-63-nong-dan-viet-nam-xuat-sac-32-nha-khoa-hoc-cua-nha-nong-nam-2025-d1355625.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2025/08/15/nong-dan-viet-nam-xuat-sac-1-1152.jpg",
        "sapo": "Sáng nay 15/8, Hội đồng bình chọn đã họp chấm chung khảo Bình chọn Nông dân Việt Nam xuất sắc và Nhà khoa học của nhà nông năm 2025. Đồng chí Bùi Thị Thơm – Phó Chủ tịch Ban Chấp hành Trung ương Hội Nông dân Việt Nam, Chủ tịch Hội đồng bình chọn danh hiệu Nông dân Việt Nam xuất sắc và Nhà khoa học của nhà nông năm 2025 chủ trì buổi họp.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "15/08/2025"
      }
    ]
  },
  {
    "kicker": "Chương trình Tự hào Nông dân Việt Nam • Năm thứ 12",
    "title": "Tự hào Nông dân Việt Nam 2024",
    "date": "Tối 14/10/2024",
    "location": "Nhà hát Lớn Hà Nội",
    "summary": "Lễ tôn vinh và trao danh hiệu cho 126 Nông dân Việt Nam xuất sắc và Hợp tác xã tiêu biểu (63 nông dân, 63 HTX) diễn ra tối 14/10/2024 tại Nhà hát Lớn Hà Nội, cùng Diễn đàn Nông dân Quốc gia với chủ đề “Lắng nghe nông dân nói”.",
    "stats": [
      {
        "value": 63,
        "suffix": "",
        "label": "Nông dân Việt Nam xuất sắc"
      },
      {
        "value": 63,
        "suffix": "",
        "label": "Hợp tác xã tiêu biểu"
      },
      {
        "value": 56,
        "suffix": "",
        "label": "Bài báo tư liệu"
      }
    ],
    "link": "https://danviet.vn/tu-hao-nong-dan-viet-nam-2024-channel2891/",
    "linkLabel": "Xem chuyên trang 2024 trên Dân Việt",
    "year": 2024,
    "label": "2024",
    "cover": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/img1854-172891471676922313902-37-142-730-1251-crop-17289147300902000701580.jpeg",
    "featured": [
      {
        "tag": "Diễn đàn & Chính sách",
        "highlight": "14/10/2024",
        "title": "Bộ trưởng Lê Minh Hoan: Nông dân cứ thoải mái nhắn tin cho tôi và Chủ tịch Lương Quốc Đoàn",
        "sapo": "Chủ trì, điều hành Diễn đàn Nông dân Quốc gia lần thứ IX, trước khi trả lời các câu hỏi của đại biểu, Bộ trưởng Bộ Nông nghiệp và PTNT Lê Minh Hoan nhắn nhủ: Bà con cứ thoải mái nhắn tin cho tôi cũng như đồng chí Chủ tịch Hội Nông dân VN Lương Quốc Đoàn.",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/dien-dan-17288714087481573431842-0-0-1600-2560-crop-17288714154351347804802.jpg",
        "url": "https://danviet.vn/bo-truong-le-minh-hoan-nong-dan-cu-thoai-mai-nhan-tin-cho-toi-va-chu-tich-luong-quoc-doan-20241014092531707-d61672.html"
      },
      {
        "tag": "Hình ảnh & Video",
        "highlight": "14/10/2024",
        "title": "Video: Chủ tịch Hội NDVN Lương Quốc Đoàn phát biểu khai mạc Lễ Tôn vinh Nông dân xuất sắc và HTX tiêu biểu 2024",
        "sapo": "Đồng chí Lương Quốc Đoàn - Ủy viên Ban Chấp hành Trung ương Đảng, Bí thư Đảng đoàn, Chủ tịch Ban Chấp hành Trung ương Hội Nông dân Việt Nam phát biểu khai mạc Lễ Tôn vinh, trao danh hiệu Nông dân Việt Nam xuất sắc và biểu dương 63 Hợp tác xã tiêu biểu toàn quốc năm 2024 tối 14/10.",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/img1854-172891471676922313902-37-142-730-1251-crop-17289147300902000701580.jpeg",
        "url": "https://danviet.vn/video-chu-tich-hoi-ndvn-luong-quoc-doan-phat-bieu-khai-mac-le-ton-vinh-nong-dan-xuat-sac-va-htx-tieu-bieu-2024-2024101420542722-d846157.html"
      },
      {
        "tag": "Diễn đàn & Chính sách",
        "highlight": "14/10/2024",
        "title": "Chủ tịch Hội NDVN Lương Quốc Đoàn: Lắng nghe tâm tư, khát vọng, tôn vinh NDVN xuất sắc, HTX tiêu biểu toàn quốc năm 2024",
        "sapo": "Nhân dịp Diễn đàn Nông dân Quốc gia lần thứ IX; Lễ tôn vinh và trao Danh hiệu Nông dân Việt Nam xuất sắc, HTX tiêu biểu toàn quốc năm 2024, đồng chí Lương Quốc Đoàn - Uỷ viên Trung ương Đảng, Bí thư Đảng đoàn, Chủ tịch Trung ương Hội NDVN đã dành cho Dân Việt buổi phỏng vấn quan trọng.",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/13/800x500-ong-doan-1728813037682908110119.jpg",
        "url": "https://danviet.vn/chu-tich-hoi-ndvn-luong-quoc-doan-lang-nghe-tam-tu-khat-vong-ton-vinh-ndvn-xuat-sac-htx-tieu-bieu-toan-quoc-nam-2024-20241013100033141-d1189318.html"
      }
    ],
    "articleCount": 56,
    "articles": [
      {
        "id": "1190035",
        "title": "Sau diễn đàn, nông dân mong được gặp gỡ, chia sẻ nhiều hơn với Chủ tịch Hội Nông dân Việt Nam, Bộ trưởng Bộ NNPTNT",
        "url": "https://danviet.vn/sau-dien-dan-nong-dan-mong-duoc-gap-go-chia-se-nhieu-hon-voi-chu-tich-hoi-nong-dan-viet-nam-bo-truong-bo-nnptnt-20241017102720188-d1190035.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/17/anh-nong-dan-viet-nam-xuat-sac-1729134714748832354787-243-0-1523-2048-crop-17291353477932013267464.jpg",
        "sapo": "Nhiều Nông dân Việt Nam xuất sắc, HTX tiêu biểu toàn quốc bày tỏ sự ấn tượng, hài lòng khi được Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và Phát triển nông thôn lắng nghe người nông dân nói tại Diễn đàn Nông dân Quốc gia lần thứ IX năm 2024.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "17/10/2024"
      },
      {
        "id": "1189781",
        "title": "Lời cảm ơn của Ban Tổ chức Chương trình Tự hào Nông dân Việt Nam năm 2024",
        "url": "https://danviet.vn/loi-cam-on-cua-ban-to-chuc-chuong-trinh-tu-hao-nong-dan-viet-nam-nam-2024-20241015182513801-d1189781.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/15/z593010400289014a70930f610d9c6031d8d5956730a7a-17289155071781544543619-0-0-1600-2560-crop-17289913900691891460877.jpg",
        "sapo": "Chương trình Tự hào Nông dân Việt Nam năm 2024 đã thành công tốt đẹp với hoạt động trọng tâm Lễ Tôn vinh và trao Danh hiệu Nông dân Việt Nam xuất sắc, biểu dương Hợp tác xã tiêu biểu toàn quốc năm 2024 diễn ra vào tối 14/10 tại Thủ đô Hà Nội.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "15/10/2024"
      },
      {
        "id": "1189670",
        "title": "Bản tin đặc biệt: Chương trình Tự hào Nông dân Việt Nam 2024 - niềm kiêu hãnh của nông dân Việt",
        "url": "https://danviet.vn/ban-tin-dac-biet-chuong-trinh-tu-hao-nong-dan-viet-nam-2024-niem-kieu-hanh-cua-nong-dan-viet-20241015113336812-d1189670.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/15/sequence-01-01-15-34-17-still106-1728966773392676773742-0-37-1080-1765-crop-17289667795891743577034.jpg",
        "sapo": "Lễ tôn vinh và trao danh hiệu Nông dân Việt Nam xuất sắc và HTX tiêu biểu toàn quốc 2024 diễn ra tối 14/10 đã chính thức khép lại chuỗi chương trình Tự hào Nông dân Việt Nam 2024. Cùng với nhiều hoạt động ý nghĩa, chuỗi sự kiện này đã thực sự trở thành một ngày hội lớn, niềm kiêu hãnh của những người nông dân Việt Nam.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "15/10/2024"
      },
      {
        "id": "1189637",
        "title": "Nông dân bất ngờ, ấn tượng với bài hát xẩm tôn vinh nông dân Việt Nam xuất sắc 2024",
        "url": "https://danviet.vn/nong-dan-bat-ngo-an-tuong-voi-bai-hat-xam-ton-vinh-nong-dan-viet-nam-xuat-sac-2024-20241015094412583-d1189637.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/15/z5930020327207303e205d299187a29f9128868790838c-1728959191041840250558-23-0-1036-1620-crop-17289598546311017995217.jpg",
        "sapo": "Chia sẻ với PV Báo điện tử Dân Việt, nhiều nông dân Việt Nam xuất sắc 2024 tỏ ra rất ấn tượng và bất ngờ với bài hát xẩm trong chương trình văn nghệ tại Lễ tôn vinh và trao danh hiệu cho 63 nông dân Việt Nam xuất sắc, biểu dương 63 hợp tác xã tiêu biểu năm 2024",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "15/10/2024"
      },
      {
        "id": "1189655",
        "title": "Nỗ lực cao nhằm phát huy vai trò của Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/phat-huy-vai-tro-cua-nong-dan-viet-nam-xuat-sac-sau-chuoi-su-kien-tu-hao-nong-dan-viet-nam-20241015104554734-d1189655.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/15/nong-dan1-17289649104761401617352-15-0-779-1222-crop-17289651325172006092649.jpg",
        "sapo": "Là một Nông dân Việt Nam xuất sắc năm 2024 trong lĩnh vực chế biến thủy sản, qua chương trình Tự hào Nông dân Việt Nam, anh Nguyễn Văn Hiếu (Hà Nam) được gặp gỡ, trao đổi kinh nghiệm với những nông dân xuất sắc khác đến từ nhiều địa phương, từ đó ấp ủ, lên kế hoạch nhằm phát triển HTX thủy sản của mình bay cao.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "15/10/2024"
      },
      {
        "id": "1189593",
        "title": "Những nông dân Việt Nam xuất sắc nào được nhắc tên trong bài Xẩm 'Nông dân Việt Nam'?",
        "url": "https://danviet.vn/nhung-nong-dan-viet-nam-xuat-sac-nao-duoc-nhac-ten-trong-bai-xam-nong-dan-viet-nam-20241014233905989-d1189593.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/xam-1728923750276551993888-60-0-1073-1620-crop-17289238951881741418332.jpg",
        "sapo": "Lần đầu tiên trong chương trình Tự hào Nông dân Việt Nam, những người nông dân Việt Nam xuất sắc được tôn vinh những thành tích, đóng góp của họ cho quá trình phát triển kinh tế - xã hội của địa phương thông qua một bài Xẩm kết hợp âm nhạc đương đại.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "15/10/2024"
      },
      {
        "id": "1189609",
        "title": "Tự hào Nông dân Việt Nam: Sau lễ tôn vinh là cơ hội học hỏi, tìm đối tác của những tỷ phú nông dân",
        "url": "https://danviet.vn/tu-hao-nong-dan-viet-nam-sau-le-ton-vinh-la-co-hoi-hoc-hoi-tim-doi-tac-cua-nhung-ty-phu-nong-dan-20241015070211487-d1189609.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/15/nong-dan-1728950444376757078229-76-0-1676-2560-crop-1728950476003890941934.jpg",
        "sapo": "Chia sẻ với Dân Việt, anh Hồ Chử Vàng, Nông dân Việt Nam xuất sắc tỉnh Điện Biên cho biết, được xuống Thủ đô Hà Nội gặp gỡ những nông dân xuất sắc, hợp tác xã tiêu biểu khác, anh coi đó là một cơ hội hiếm có để học hỏi kinh nghiệm.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "15/10/2024"
      },
      {
        "id": "1189596",
        "title": "Tự hào Nông dân Việt Nam 2024: Nông dân Việt Nam xuất sắc, HTX tiêu biểu lan tỏa khát vọng, truyền cảm hứng làm giàu",
        "url": "https://danviet.vn/tu-hao-nong-dan-viet-nam-2024-nong-dan-viet-nam-xuat-sac-htx-tieu-bieu-lan-toa-khat-vong-truyen-cam-hung-lam-giau-20241015004003283-d1189596.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/nong-dan-viet-nam-xuat-sac-2024-1728926770562150824303-176-0-1711-2456-crop-17289274527501395700217.jpg",
        "sapo": "Lễ tôn vinh và trao danh hiệu Nông dân Việt Nam xuất sắc, biểu dương HTX tiêu biểu toàn quốc năm 2024 đã diễn ra với những nụ cười rạng rỡ, niềm vui và sự tự hào của các nông dân xuất sắc, đại diện HTX. Họ đã và sẽ tiếp tục vẽ lên bức tranh về “mẫu hình người nông mới, HTX kiểu mới\"...",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "15/10/2024"
      },
      {
        "id": "61672",
        "title": "Bộ trưởng Lê Minh Hoan: Nông dân cứ thoải mái nhắn tin cho tôi và Chủ tịch Lương Quốc Đoàn",
        "url": "https://danviet.vn/bo-truong-le-minh-hoan-nong-dan-cu-thoai-mai-nhan-tin-cho-toi-va-chu-tich-luong-quoc-doan-20241014092531707-d61672.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/dien-dan-17288714087481573431842-0-0-1600-2560-crop-17288714154351347804802.jpg",
        "sapo": "Chủ trì, điều hành Diễn đàn Nông dân Quốc gia lần thứ IX, trước khi trả lời các câu hỏi của đại biểu, Bộ trưởng Bộ Nông nghiệp và PTNT Lê Minh Hoan nhắn nhủ: Bà con cứ thoải mái nhắn tin cho tôi cũng như đồng chí Chủ tịch Hội Nông dân VN Lương Quốc Đoàn.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "14/10/2024"
      },
      {
        "id": "846157",
        "title": "Video: Chủ tịch Hội NDVN Lương Quốc Đoàn phát biểu khai mạc Lễ Tôn vinh Nông dân xuất sắc và HTX tiêu biểu 2024",
        "url": "https://danviet.vn/video-chu-tich-hoi-ndvn-luong-quoc-doan-phat-bieu-khai-mac-le-ton-vinh-nong-dan-xuat-sac-va-htx-tieu-bieu-2024-2024101420542722-d846157.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/img1854-172891471676922313902-37-142-730-1251-crop-17289147300902000701580.jpeg",
        "sapo": "Đồng chí Lương Quốc Đoàn - Ủy viên Ban Chấp hành Trung ương Đảng, Bí thư Đảng đoàn, Chủ tịch Ban Chấp hành Trung ương Hội Nông dân Việt Nam phát biểu khai mạc Lễ Tôn vinh, trao danh hiệu Nông dân Việt Nam xuất sắc và biểu dương 63 Hợp tác xã tiêu biểu toàn quốc năm 2024 tối 14/10.",
        "category": "Hình ảnh & Video",
        "location": "",
        "date": "14/10/2024"
      },
      {
        "id": "1189318",
        "title": "Chủ tịch Hội NDVN Lương Quốc Đoàn: Lắng nghe tâm tư, khát vọng, tôn vinh NDVN xuất sắc, HTX tiêu biểu toàn quốc năm 2024",
        "url": "https://danviet.vn/chu-tich-hoi-ndvn-luong-quoc-doan-lang-nghe-tam-tu-khat-vong-ton-vinh-ndvn-xuat-sac-htx-tieu-bieu-toan-quoc-nam-2024-20241013100033141-d1189318.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/13/800x500-ong-doan-1728813037682908110119.jpg",
        "sapo": "Nhân dịp Diễn đàn Nông dân Quốc gia lần thứ IX; Lễ tôn vinh và trao Danh hiệu Nông dân Việt Nam xuất sắc, HTX tiêu biểu toàn quốc năm 2024, đồng chí Lương Quốc Đoàn - Uỷ viên Trung ương Đảng, Bí thư Đảng đoàn, Chủ tịch Trung ương Hội NDVN đã dành cho Dân Việt buổi phỏng vấn quan trọng.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "14/10/2024"
      },
      {
        "id": "1189416",
        "title": "8 ông tỷ phú nông dân của một chi hội ở Bình Dương 'bay ra' Hà Nội cổ vũ Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/8-ong-ty-phu-nong-dan-dat-binh-duong-book-ve-may-bay-ra-ha-noi-co-cu-nong-dan-viet-nam-xuat-sac-20241014001543032-d1189416.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/nong-dan-xuat-sac-1728892193565900851058-68-0-868-1280-crop-172889248194348882612.jpg",
        "sapo": "Ông Tống Văn Hướng, Chi hội trưởng Chi hội Nông dân tỷ phú và 7 thành viên khác của Chi hội nông dân tỷ phú đã từ Bình Dương đặt vé máy bay ra Hà Nội dự chương trình Tự hào Nông dân Việt Nam, Lễ tôn vinh và trao danh hiệu Nông dân Việt Nam xuất sắc, HTX tiêu biểu 2024 tại Nhà hát lớn Hà Nội.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/10/2024"
      },
      {
        "id": "1189577",
        "title": "Video: Chủ tịch Quốc hội Trần Thanh Mẫn phát biểu chỉ đạo tại Lễ Tôn vinh Nông dân xuất sắc và HTX tiêu biểu 2024",
        "url": "https://danviet.vn/video-chu-tich-quoc-hoi-tran-thanh-man-phat-bieu-chi-dao-tai-le-ton-vinh-nong-dan-xuat-sac-va-htx-tieu-bieu-2024-20241014213652016-d1189577.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/1000011074-17289164135301608014372-133-0-1383-2000-crop-1728916422391256885714.jpg",
        "sapo": "Đến dự và phát biểu tại Lễ tôn vinh Nông dân Việt Nam xuất sắc và HTX tiêu biểu 2024, đồng chí Trần Thanh Mẫn, Ủy viên Bộ Chính trị, Chủ tịch Quốc hội nhiệt liệt biểu dương, ghi nhận, đánh giá cao sự nỗ lực, cố gắng và những thành tích đạt được của Hội Nông dân Việt Nam và các nông dân, HTX.",
        "category": "Hình ảnh & Video",
        "location": "",
        "date": "14/10/2024"
      },
      {
        "id": "1189572",
        "title": "Video: Tuyệt phẩm 'Hát xẩm Nông dân Việt Nam' khiến hội trường vỗ tay không ngớt",
        "url": "https://danviet.vn/video-tuyet-pham-hat-xam-nong-dan-viet-nam-khien-hoi-truong-vo-tay-khong-ngot-20241014211350311-d1189572.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/z5930071285387-fbab2304a330f5418d152ebec467b3bc-17289151411571028275732-40-0-1053-1620-crop-17289151442361955092328.jpg",
        "sapo": "\"Hát xẩm Nông dân Việt Nam\" là tiết mục xẩm kết hợp âm nhạc đương đại do ca sĩ Hà Myo sáng tác và biểu diễn, lấy cảm hứng từ chính những thành tựu của các Nông dân Việt Nam xuất sắc 2024. Ca từ đặc sắc của tiết mục xướng danh từng nông dân khiến hội trường Lễ tôn vinh tối 14/10 không ngớt tiếng vỗ tay.",
        "category": "Hình ảnh & Video",
        "location": "",
        "date": "14/10/2024"
      },
      {
        "id": "1189534",
        "title": "Chủ tịch Hội NDVN Lương Quốc Đoàn: Nông dân Việt Nam xuất sắc, HTX lan toả mạnh mẽ mẫu hình người nông dân mới",
        "url": "https://danviet.vn/chu-tich-hoi-ndvn-luong-quoc-doan-nong-dan-viet-nam-xuat-sac-htx-lan-toa-manh-me-mau-hinh-nguoi-nong-dan-moi-20241014164843721-d1189534.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/chu-tich-hoi-nong-dan-viet-nam-17289129722261928180776-37-0-776-1183-crop-1728913098195137499287.jpg",
        "sapo": "Chủ tịch Hội Nông dân Việt Nam Lương Quốc Đoàn khẳng định: Chương trình Tự hào Nông dân VN tạo nên sức lan tỏa mạnh mẽ về \"Mẫu hình người nông dân mới, HTX kiểu mới\" với 5 tiêu chuẩn: Nhận thức mới, kiến thức mới, ý thức mới, quyết tâm mới, có thu nhập cao, góp phần thực hiện khát vọng xây dựng đất nước phồn vinh, hạnh phúc.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "14/10/2024"
      },
      {
        "id": "1189467",
        "title": "Chủ tịch Hội NDVN Lương Quốc Đoàn: Sẽ tổ chức diễn đàn giữa nông dân và doanh nghiệp",
        "url": "https://danviet.vn/chu-tich-hoi-ndvn-luong-quoc-doan-se-to-chuc-dien-dan-giua-nong-dan-va-doanh-nghiep-20241014114155021-d1189467.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/z5928025594861cf98403e0d6a75d63c194e0670c12fdc-1728880668274424034712-43-0-970-1484-crop-172888083517144771794.jpg",
        "sapo": "Sáng 14/10, trả lời kiến nghị của đại biểu tại Diễn đàn Lắng nghe nông dân nói, đồng chí Lương Quốc Đoàn - Chủ tịch BCH Trung ương Hội Nông dân Việt Nam cho biết, hiện Hội đang nghiên cứu và sắp tới sẽ tổ chức diễn đàn giữa nông dân và doanh nghiệp giúp 2 bên hiểu nhau và liên kết sản xuất đạt hiệu quả cao hơn.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "14/10/2024"
      },
      {
        "id": "1189503",
        "title": "20h tối nay trực tiếp trên VTV1: Tôn vinh nông dân Việt Nam xuất sắc và biểu dương HTX tiêu biểu toàn quốc năm 2024",
        "url": "https://danviet.vn/20h-toi-nay-truc-tiep-tren-vtv1-ton-vinh-nong-dan-viet-nam-xuat-sac-va-bieu-duong-htx-tieu-bieu-toan-quoc-nam-2024-20241014151358362-d1189503.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/2635898993640169554974825810403524388159986n-16384615195141179867408-1728892699546159125398-0-0-406-650-crop-17288927035261851968263.jpg",
        "sapo": "Hành trình tìm kiếm và tôn vinh những Nông dân Việt Nam xuất sắc năm 2024 đã đi đến hồi kết, với lễ tôn vinh hoành tráng và đầy cảm xúc diễn ra vào tối nay, 14/10, tại Nhà hát Lớn Hà Nội. Sự kiện, được truyền hình trực tiếp trên kênh VTV1 lúc 20h, hứa hẹn mang đến những khoảnh khắc và câu chuyện ấn tượng.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/10/2024"
      },
      {
        "id": "1189326",
        "title": "Bộ trưởng Bộ NNPTNT Lê Minh Hoan: Xin cảm ơn những nông dân đi đầu trong quá trình chuyển đổi ngành nông nghiệp",
        "url": "https://danviet.vn/bo-truong-bo-nnptnt-le-minh-hoan-xin-cam-on-nhung-nong-dan-di-dau-trong-qua-trinh-chuyen-doi-nganh-nong-nghiep-20241013105439329-d1189326.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/13/800x500-lmh-1728816763304267966405.jpg",
        "sapo": "Bộ trưởng Bộ Nông nghiệp và PTNT Lê Minh Hoan cho biết, những nông dân Việt Nam xuất sắc, HTX tiêu biểu là người truyền cảm hứng cho những nông dân khác. Do vậy, đây không chỉ là ca ngợi thành tích sản xuất kinh doanh mà còn là dịp tôn vinh hình ảnh những nông dân vượt lên trong quá trình chuyển đổi ngành nông nghiệp.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "14/10/2024"
      },
      {
        "id": "846140",
        "title": "Tự hào NDVN 2024: Cùng Hội Nông dân, Agribank kiến tạo tương lai tươi sáng cho nông nghiệp Việt",
        "url": "https://danviet.vn/tu-hao-ndvn-2024-cung-hoi-nong-dan-agribank-kien-tao-tuong-lai-tuoi-sang-cho-nong-nghiep-viet-2024101400262341-d846140.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/13/76-vuon-che-ocop-tuyen-quang-17288402917441660423901-0-0-1250-2000-crop-1728840306331936221412.jpg",
        "sapo": "Với thị phần lớn nhất trong lĩnh vực tín dụng nông nghiệp, Agribank xứng đáng là \"vô địch\" tài chính cho nông nghiệp Việt Nam. Hội Nông dân, với các hội viên như những \"tuyên truyền viên\" tài chính, góp phần quan trọng đưa Agribank đến gần hơn với nông dân, cùng nhau thực hiện sứ mệnh vì \"Tam nông\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/10/2024"
      },
      {
        "id": "1189482",
        "title": "Bản tin đặc biệt: Rộn ràng loạt hoạt động ý nghĩa của Chương trình Tự hào Nông dân Việt Nam 2024",
        "url": "https://danviet.vn/ban-tin-dac-biet-ron-rang-loat-hoat-dong-y-nghia-cua-chuong-trinh-tu-hao-nong-dan-viet-nam-2024-20241014123908265-d1189482.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/bai-cho-bien-tap-2-00-23-59-08-still042-17288840557671491737173-0-28-1080-1756-crop-1728884061000875074850.jpg",
        "sapo": "Sáng nay 14/10, Diễn đàn Nông dân Quốc gia 2024 đã diễn ra thành công tốt đẹp. Các Nông dân Việt Nam xuất sắc và HTX tiêu biểu toàn quốc 2024 đang háo hức đón chờ hoạt động trọng tâm tiếp theo của chuỗi Chương trình Tự hào Nông dân Việt Nam, đó là Lễ tôn vinh sẽ diễn ra vào tối nay.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "14/10/2024"
      },
      {
        "id": "61660",
        "title": "Diễn đàn Nông dân Quốc gia lần thứ IX: Nghe nông dân chia sẻ tâm tư, bày tỏ ý kiến, đề xuất giải pháp",
        "url": "https://danviet.vn/dien-dan-nong-dan-quoc-gia-lan-thu-ix-nghe-nong-dan-chia-se-tam-tu-bay-to-y-kien-hay-don-xem-20241012234448204-d61660.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/12/img-4328-9766jpeg-17287522316731578245874-0-36-382-647-crop-17287525788511599366287.jpg",
        "sapo": "Tại Diễn đàn Nông dân Quốc gia lần thứ IX với chủ đề \"Lắng nghe nông dân nói\", không chỉ có những con số thành công trong sản xuất nông nghiệp được báo cáo mà sâu hơn là những nỗi niềm, trăn trở của người nông dân khắp mọi miền Tổ quốc.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "14/10/2024"
      },
      {
        "id": "1189439",
        "title": "Ca sĩ Hà Myo: “Tôi thêm trân trọng và được tiếp thêm động lực khi hát tôn vinh người nông dân”",
        "url": "https://danviet.vn/ha-myo-toi-them-tran-trong-va-duoc-tiep-them-dong-luc-khi-hat-ton-vinh-nguoi-nong-dan-20241014092200223-d1189439.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/14/ha-myo-2-1728871973682635359297-458-0-1208-1200-crop-17288723575811225354785.jpg",
        "sapo": "\"Tôi cảm thấy trân trọng và biết ơn những người nông dân – những con người chăm chỉ, cần cù, sáng tạo, vượt qua nhiều khó khăn và thách thức để đạt được thành tựu to lớn trong lĩnh vực sản xuất nông nghiệp, góp phần quan trọng vào sự phát triển của đất nước\", ca sĩ Hà Myo chia sẻ với Dân Việt.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/10/2024"
      },
      {
        "id": "1189376",
        "title": "Nông dân Việt Nam xuất sắc, HTX tiêu biểu cùng tâm huyết phát triển nông nghiệp, nông dân, nông thôn",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-htx-cung-tam-huyet-phat-trien-nong-nghiep-nong-dan-nong-thon-20241013165944839-d1189376.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/13/ong-su-1728813166349764239519-101-0-899-1276-crop-1728813178781972454681.jpg",
        "sapo": "Bên lề cuộc gặp mặt 63 Nông dân Việt Nam xuất sắc và 63 HTX tiêu biểu năm 2024 diễn ra tại Trụ sở Cơ quan TƯ Hội NDVN (Hà Nội) hôm qua, 13/10, nhiều Nông dân Việt Nam xuất sắc, HTX tiêu biểu năm 2024 cùng chung tâm huyết nhằm phát triển kinh tế nông nghiệp, làm giàu bền vững ngay chính trên mảnh đất quê hương mình.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/10/2024"
      },
      {
        "id": "1189246",
        "title": "Toàn cảnh chân dung 63 nông dân Việt Nam xuất sắc: Mỗi người như một thước phim giữa đời thực",
        "url": "https://danviet.vn/toan-canh-chan-dung-63-nong-dan-viet-nam-xuat-sac-moi-nguoi-nhu-mot-thuoc-phim-giua-doi-thuc-20241012200020307-d1189246.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/12/chan-dung-ndvnsx-17287378825451291288194-0-0-1250-2000-crop-17287378879691665210118.jpg",
        "sapo": "Năm 2024, Lễ Tôn vinh và trao Danh hiệu cho 63 nông dân Việt Nam xuất sắc sẽ diễn ra trang trọng tại Hà Nội vào tối ngày 14/10. Mỗi con người mang trong mình một ý chí, một khát vọng, một số phận như những thước phim giữa đời thực.",
        "category": "Hình ảnh & Video",
        "location": "",
        "date": "13/10/2024"
      },
      {
        "id": "1189401",
        "title": "Video: Hội Nông dân Việt Nam trao tặng 126 bằng khen cho Nông dân xuất sắc và HTX tiêu biểu toàn quốc 2024",
        "url": "https://danviet.vn/video-hoi-nong-dan-viet-nam-trao-tang-126-bang-khen-cho-nong-dan-xuat-sac-va-htx-tieu-bieu-toan-quoc-2024-20241013210053279-d1189401.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/13/bp-bat-60-kg-phao-no-1-00-12-36-02-still035-1728828034824322668406-0-28-1080-1756-crop-17288280391381747097359.jpg",
        "sapo": "Trong buổi gặp mặt 63 Nông dân Việt Nam xuất sắc và 63 Hợp tác xã tiêu biểu toàn quốc năm 2024 diễn ra vào chiều nay 13/10 tại Trụ sở Trung ương Hội Nông dân Việt Nam, BCH Trung ương Hội Nông dân Việt Nam đã trao tặng bằng khen cho 126 nông dân xuất sắc và HTX tiêu biểu năm 2024.",
        "category": "Hình ảnh & Video",
        "location": "",
        "date": "13/10/2024"
      },
      {
        "id": "1189384",
        "title": "Ảnh: Lãnh đạo TƯ Hội Nông dân Việt Nam gặp mặt 63 nông dân Việt Nam xuất sắc; 63 HTX tiêu biểu 2024",
        "url": "https://danviet.vn/anh-lanh-dao-tu-hoi-ndvn-gap-mat-63-nong-dan-viet-nam-xuat-sac-63-htx-tieu-bieu-2024-20241013175020717-d1189384.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/13/7-17288154141261803849249-240-582-1240-2182-crop-17288211907631374725834.jpg",
        "sapo": "Chiều (13/10), tại Hà Nội, Thường trực TƯ Hội Nông dân Việt Nam đã tổ chức gặp mặt 63 Nông dân Việt Nam xuất sắc và 63 Hợp tác xã tiêu biểu toàn quốc năm 2024.",
        "category": "Hình ảnh & Video",
        "location": "",
        "date": "13/10/2024"
      },
      {
        "id": "1189273",
        "title": "Diễn đàn Nông dân Quốc gia lần thứ IX: Nữ Giám đốc HTX đại điền mong quy hoạch đất đai rõ ràng, minh bạch",
        "url": "https://danviet.vn/dien-dan-nong-dan-quoc-gia-lan-thu-ix-nu-giam-doc-htx-dai-dien-mong-quy-hoach-dat-dai-ro-rang-20241012230928054-d1189273.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/12/chi-lanh-172874928982013043807-83-0-1333-2000-crop-17287492942201600638117.jpg",
        "sapo": "\"Trong nông nghiệp, dù trồng trọt hay chăn nuôi quỹ đất đều đóng vai trò quan trọng. Với những HTX đại điền như chúng tôi chính sách đất đai càng rõ ràng, minh bạch nông dân càng dễ sản xuất. Vì vậy gửi tới Diễn đàn lần này, tôi mong vấn đề đất đai một lần nữa được quan tâm, xem xét kỹ\" - chị Trần Thị Lanh bày tỏ.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "13/10/2024"
      },
      {
        "id": "846127",
        "title": "Chương trình Tự hào Nông dân Việt Nam: Nữ nông dân tỷ phú chia sẻ chuyện đời, chuyện nghề, vượt qua nghịch cảnh",
        "url": "https://danviet.vn/nhung-bong-hong-nong-dan-ty-phu-noi-ve-chuyen-doi-chuyen-nghe-no-luc-phi-thuong-vuot-qua-nghich-canh-2024101312315642-d846127.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/13/z592494777748263c78059ba596fd5f645b6c6d0feb34d-1728793606803438744562-578-0-1039-737-crop-1728793619709498260737.jpg",
        "sapo": "Trong 63 Nông dân Việt Nam xuất sắc và 63 HTX tiêu biểu toàn quốc năm 2024 về dự Chương trình Tự hào Nông dân Việt Nam có nhiều nữ tỷ phú giỏi trong sản xuất, kinh doanh, họ còn thể hiện sự kiên cường, nỗ lực phi thường của người phụ nữ Việt Nam để vượt qua nghịch cảnh, vươn lên trở thành những tỷ phú.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "13/10/2024"
      },
      {
        "id": "1189240",
        "title": "Diễn đàn Nông dân Quốc gia lần thứ IX: Bắc Kạn kiến nghị hỗ trợ phát triển sản xuất nông nghiệp hàng hóa",
        "url": "https://danviet.vn/bac-kan-gui-kien-nghi-ho-tro-phat-trien-san-xuat-nong-nghiep-hang-hoa-toi-dien-dan-ndqg-20241012190010894-d1189240.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/12/nong-dan-bac-kan-kien-nghi-3-17287559010881873909867-178-0-1458-2048-crop-17287562330751007627009.jpg",
        "sapo": "Là tỉnh miền núi còn nhiều khó khăn, hạn chế, lãnh đạo Hội Nông dân và HTX tiêu biểu đến từ Bắc Kạn kiến nghị Trung ương Hội và Bộ NNPTNT có nhiều cơ chế, chính sách hỗ trợ người dân phát triển sản xuất nông, lâm nghiệp theo hướng hàng hóa.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "13/10/2024"
      },
      {
        "id": "1189360",
        "title": "Video: Nông dân Việt Nam xuất sắc 2024 “khoe” doanh thu trăm tỷ",
        "url": "https://danviet.vn/video-nong-dan-viet-nam-xuat-sac-2024-khoe-doanh-thu-tram-ty-20241013161424153-d1189360.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/13/bp-bat-60-kg-phao-no-100015101still033-17288126627351315695140-0-17-1080-1745-crop-1728812667245296960606.jpg",
        "sapo": "Hôm nay 13/10, các nông dân Việt Nam xuất sắc, HTX tiêu biểu toàn quốc 2024 từ khắp các tỉnh thành đã tụ hội về Thủ đô Hà Nội tham dự chuỗi sự kiện Tự hào Nông dân Việt Nam 2024. Chia sẻ với PV Dân Việt, nhiều đại biểu tiết lộ đã đạt doanh thu \"khủng\" trong năm vừa qua.",
        "category": "Hình ảnh & Video",
        "location": "",
        "date": "13/10/2024"
      },
      {
        "id": "1189220",
        "title": "Bản tin đặc biệt: Tôn vinh nông dân xuất sắc, HTX tiêu biểu - ý nghĩa của sự lan tỏa",
        "url": "https://danviet.vn/ban-tin-dac-biet-ton-vinh-nong-dan-xuat-sac-htx-tieu-bieu-y-nghia-cua-su-lan-toa-20241012171924521-d1189220.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/12/sequence-01-01-15-54-23-still105-17287278898481845442666-0-0-1080-1728-crop-1728727895723943417335.jpg",
        "sapo": "Bản tin chuyên đề đặc biệt ngày hôm nay xin dành thời lượng để thông tin chi tiết về hoạt động Tôn vinh Nông dân Việt Nam xuất sắc và HTX tiêu biểu toàn quốc 2024 - một hoạt động trọng tâm của Chương trình Tự hào Nông dân Việt Nam với nhiều ý nghĩa.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "13/10/2024"
      },
      {
        "id": "1188930",
        "title": "862 tỷ đồng và những người nông dân mới",
        "url": "https://danviet.vn/tu-hao-nong-dan-viet-nam-2024-862-ty-dong-va-nhung-nguoi-nong-dan-moi-20241011064035973-d1188930.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/10/anh-tho-dv-2024-17259665256431636875768-0-0-377-603-crop-17286035423881675608658.jpg",
        "sapo": "Tôi đã thử làm một phép tính, cộng tổng doanh thu trong tất cả các lĩnh vực sản xuất - kinh doanh của 63 Nông dân Việt Nam xuất sắc năm 2024, con số đó là 862 tỷ đồng, nếu chia bình quân, mỗi mô hình sản xuất của 63 nông dân đạt doanh thu khoảng 13,6 tỷ đồng.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "13/10/2024"
      },
      {
        "id": "1189261",
        "title": "Lễ tôn vinh Nông dân Việt Nam xuất sắc, biểu dương hợp tác xã tiêu biểu toàn quốc năm 2024 có gì mới?",
        "url": "https://danviet.vn/le-ton-vinh-nong-dan-viet-nam-xuat-sac-bieu-duong-hop-tac-xa-tieu-bieu-toan-quoc-nam-2024-co-gi-moi-20241012215410159-d1189261.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/12/ton-vinh-1-17287447602291523346992-42-0-1292-2000-crop-1728744766046761702084.jpg",
        "sapo": "Lễ tôn vinh và trao danh hiệu Nông dân Việt Nam xuất sắc, biểu dương hợp tác xã tiêu biểu toàn quốc - sự kiện cuối cùng trong chuỗi các sự kiện của Chương trình Tự hào Nông dân Việt Nam 2024 luôn được mong chờ bởi sự trang trọng, ý nghĩa nhưng cũng không kém phần hoành tráng, độc đáo.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "13/10/2024"
      },
      {
        "id": "1188885",
        "title": "Háo hức, mong chờ tham dự Chương trình Tự hào Nông dân Việt Nam - ngày hội lớn của nông dân",
        "url": "https://danviet.vn/hao-huc-mong-cho-tham-du-chuong-trinh-tu-hao-nong-dan-viet-nam-ngay-hoi-lon-cua-nong-dan-20241010182101539-d1188885.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/10/4-17285589872271722063447-16-0-1119-1764-crop-17285592577961762778878.jpg",
        "sapo": "Sát ngày diễn ra chuỗi sự kiện Tự hào Nông dân Việt Nam 2024, các nông dân Việt Nam xuất sắc và hợp tác xã tiêu biểu trên toàn quốc vẫn tất bật sản xuất, ai cũng phấn khởi và vui mừng, chuẩn bị tư trang để ra Hà Nội tham dự.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "13/10/2024"
      },
      {
        "id": "1189216",
        "title": "Những nông dân đầu tiên về dự chuỗi Chương trình Tự hào Nông dân Việt Nam: Kiến nghị nhiều vấn đề 'nóng' của tam nông",
        "url": "https://danviet.vn/nhung-nong-dan-dau-tien-ve-du-chuoi-chuong-trinh-tu-hao-nong-dan-viet-nam-kien-nghi-nhieu-van-de-nong-cua-tam-nong-20241012164823018-d1189216.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/12/2-1728726301672496232470-227-171-1572-2323-crop-17287263542082058301398.jpg",
        "sapo": "Chiều 12/10, những Nông dân Việt Nam xuất sắc 2024 và HTX tiêu biểu đầu tiên đã có mặt tại Hà Nội. Trong mỗi người đều mang cảm xúc đặc biệt trước khi được tham dự chuỗi Chương trình Tự hào Nông dân Việt Nam năm 2024 - ngày hội của nông dân cả nước.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "12/10/2024"
      },
      {
        "id": "1189157",
        "title": "Bản tin đặc biệt: Diễn đàn Nông dân Quốc gia 2024 đã sẵn sàng 'Lắng nghe nông dân nói'",
        "url": "https://danviet.vn/ban-tin-dac-biet-dien-dan-nong-dan-quoc-gia-2024-da-san-sang-lang-nghe-nong-dan-noi-20241012102526509-d1189157.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/12/sequence-01-01-15-30-16-still104-17287032605891317986360-0-51-1080-1779-crop-17287032657002095855104.jpg",
        "sapo": "Để hiểu thêm về ý nghĩa chủ đề “Lắng nghe nông dân nói” cũng như những nét mới của Diễn đàn Nông dân Quốc gia lần thứ IX năm 2024, mời độc giả cùng theo dõi bản tin chuyên đề đặc biệt với những chia sẻ từ Chủ tịch Hội NDVN và Bộ trưởng Bộ NN&PTNT, cũng như nghe các nông dân, HTX bày tỏ tâm tư, nguyện vọng.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "12/10/2024"
      },
      {
        "id": "1189068",
        "title": "Chương trình Tự hào Nông dân Việt Nam đã tạo khí thế, phong trào thi đua sôi nổi ở Bắc Giang",
        "url": "https://danviet.vn/chuong-trinh-tu-hao-nong-dan-viet-nam-da-tao-khi-the-phong-trao-thi-dua-soi-noi-o-bac-giang-20241011180817624-d1189068.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/11/tu-hao-nong-dan-viet-nam-nong-dan-xuat-sac-1728644638021765544742-0-109-1136-1927-crop-17286446942891460322521.jpg",
        "sapo": "Ông Lã Văn Đoàn – Phó Chủ tịch Thường trực Hội Nông dân tỉnh Bắc Giang khẳng định sau khi được tôn vinh và trao danh hiệu, các Nông dân Việt Nam xuất sắc, HTX tiêu biểu toàn quốc tích cực tham gia hoạt động xã hội, ngày càng gắn bó với tổ chức Hội Nông dân nhiều hơn.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "12/10/2024"
      },
      {
        "id": "1188998",
        "title": "Chủ tịch Hội Nông dân TP Hà Nội: Chương trình Tự hào Nông dân Việt Nam lan toả những tấm gương, điển hình xuất sắc",
        "url": "https://danviet.vn/chu-tich-hoi-nong-dan-tp-ha-noi-chuong-trinh-tu-hao-nong-dan-viet-nam-lan-toa-nhung-tam-guong-dien-hinh-xuat-sac-20241011130013637-d1188998.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/11/chu-tich-hoi-nong-dan-tp-ha-noi-17286255114221933403582-99-0-1699-2560-crop-17286263363081586129522.jpg",
        "sapo": "Theo Chủ tịch Hội Nông dân TP Hà Nội Phạm Hải Hoa, Chương trình Tự hào Nông dân Việt Nam 2024 với hoạt động trọng tâm là tôn vinh Nông dân Việt Nam xuất sắc, HTX tiêu biểu toàn quốc, Diễn đàn lắng nghe nông dân có ý nghĩa thiết thực. Chương trình được hội viên nông dân và các cấp Hội Nông dân cả nước mong chờ, kỳ vọng.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "11/10/2024"
      },
      {
        "id": "1188983",
        "title": "Bản tin đặc biệt: Tôn vinh nông dân xuất sắc, HTX tiêu biểu - trọng tâm Chương trình Tự hào Nông dân Việt Nam 2024",
        "url": "https://danviet.vn/ban-tin-dac-biet-ton-vinh-nong-dan-xuat-sac-htx-tieu-bieu-trong-tam-chuong-trinh-tu-hao-nong-dan-viet-nam-2024-20241011114334074-d1188983.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/11/sequence-01-01-17-23-22-still112-17286217386351853848309-0-9-1080-1737-crop-17286217456641724419407.jpg",
        "sapo": "Chương trình Tự hào Nông dân Việt Nam là chương trình thường niên gồm một chuỗi hoạt động quan trọng, trong đó trọng tâm là hoạt động Tôn vinh Nông dân Việt Nam xuất sắc và HTX tiêu biểu toàn quốc. Những đại diện ưu tú được tôn vinh năm 2024 để lại những ấn tượng đặc biệt.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "11/10/2024"
      },
      {
        "id": "1188832",
        "title": "Đại diện Bộ Kế hoạch và Đầu tư: 63 hợp tác xã tiêu biểu là những đầu tàu, kéo nông dân cùng làm giàu",
        "url": "https://danviet.vn/dai-dien-bo-ke-hoach-va-dau-tu-63-hop-tac-xa-tieu-bieu-la-nhung-dau-tau-keo-nong-dan-cung-lam-giau-20241010142309678-d1188832.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/10/dang-van-thanh-1728544883625935679666-63-0-703-1024-crop-172854490160446699257.jpeg",
        "sapo": "Là một trong những thành viên Hội đồng chung khảo bình chọn 63 hợp tác xã tiêu biểu toàn quốc do Hội Nông dân Việt Nam tư vấn, hỗ trợ, vận động, hướng dẫn thành lập, ông Đặng Văn Thanh, Phó Cục trưởng Cục Kinh tế hợp tác (Bộ Kế hoạch và Đầu tư) rất ấn tượng với mô hình, thành tích của các hợp tác xã được đề cử.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "11/10/2024"
      },
      {
        "id": "1188625",
        "title": "Diễn đàn Nông dân quốc gia năm 2024: Lắng nghe nông dân nói từ thực tiễn đời sống, sản xuất",
        "url": "https://danviet.vn/dien-dan-nong-dan-quoc-gia-nam-2024-lang-nghe-nong-dan-noi-tu-thuc-tien-doi-song-san-xuat-20241009142118143-d1188625.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/9/nguyen-van-hoai-1728458936737795691386-20-0-826-1290-crop-1728458941567861099492.jpg",
        "sapo": "Diễn đàn Nông dân Quốc gia lần thứ IX với chủ đề: “Chủ tịch Hội Nông dân VN - Bộ trưởng Bộ NN PTNT lắng nghe nông dân nói” sẽ diễn ra vào sáng 14/10. Để hiểu rõ hơn ý nghĩa Diễn đàn, PV đã trao đổi với nhà báo Nguyễn Văn Hoài, Tổng Biên tập Báo NTNN/Dân Việt, Phó trưởng Ban Tổ chức Chương trình Tự hào NDVN 2024.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "10/10/2024"
      },
      {
        "id": "1188607",
        "title": "63 hợp tác xã tiêu biểu toàn quốc năm 2024 đẩy mạnh chuyển đổi số, phát triển mô hình tích hợp đa giá trị",
        "url": "https://danviet.vn/63-hop-tac-xa-tieu-bieu-toan-quoc-nam-2024-day-manh-chuyen-doi-so-phat-trien-mo-hinh-tich-hop-da-gia-tri-20241009124940052-d1188607.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/9/hop-tac-xa-tieu-bieu-hoi-nong-dan-17284527572451829375910-74-0-1324-2000-crop-17284530013221727036510.jpeg",
        "sapo": "Theo đánh giá của Hội đồng thẩm định, xét chọn Hợp tác xã tiêu biểu toàn quốc năm 2024, 63 hợp tác xã tiêu biểu năm 2024 do Hội Nông dân Việt Nam tuyên truyền, vận động, hướng dẫn hỗ trợ thành lập đã tích cực liên kết với doanh nghiệp, ứng dụng công nghệ cao, tham gia chuyển đổi số, phát triển mô hình tích hợp đa giá trị.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "10/10/2024"
      },
      {
        "id": "1188519",
        "title": "Chủ tịch Hội Nông dân tỉnh Nghệ An: Tự hào Nông dân Việt Nam là một sự kiện rất đặc biệt với nông dân",
        "url": "https://danviet.vn/chu-tich-hoi-nong-dan-tinh-nghe-an-tu-hao-nong-dan-viet-nam-la-mot-su-kien-rat-dac-biet-voi-nong-dan-20241008224503613-d1188519.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/8/tu-hao-nong-dan-viet-nam-1-17284016956871903099013-18-0-1618-2560-crop-17284023900541402374364.jpg",
        "sapo": "Ông Nguyễn Quang Tùng, Chủ tịch Hội Nông dân tỉnh Nghệ An cho biết, Chương trình Tự hào Nông dân Việt Namlà một chương trình rất đặc biệt với nông dân, tạo nguồn cảm hứng, khích lệ quyết tâm vươn lên khẳng định mình của hàng triệu nông dân trên cả nước.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "10/10/2024"
      },
      {
        "id": "1188611",
        "title": "Phó Trưởng ban Tuyên giáo tỉnh Bình Thuận: Chương trình Tự hào Nông dân Việt Nam tạo động lực, thúc đẩy nông dân làm giàu",
        "url": "https://danviet.vn/pho-truong-ban-tuyen-giao-tinh-binh-thuan-chuong-trinh-tu-hao-nong-dan-viet-nam-tao-dong-luc-thuc-day-nong-dan-lam-giau-20241009131043463-d1188611.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/9/z54168283293470265266eb7bbe71bca24fd100448c91d-1728455171172607342705-43-0-843-1280-crop-17284666022391952853970.jpg",
        "sapo": "Theo ông Nguyễn Ngọc Hòa, Phó Trưởng ban Tuyên giáo Tỉnh ủy Bình Thuận, chương trình Tự hào Nông dân Việt Nam mà điểm nhấn là Lễ tôn vinh Nông dân Việt Nam xuất sắc, biểu dương hợp tác xã tiêu biểu năm 2024 rất có ý nghĩa, tạo sức lan tỏa, khích lệ, động viên hội viên nông dân cả nước.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "10/10/2024"
      },
      {
        "id": "846051",
        "title": "Lắng nghe nông dân nói: Nhiều nông dân, hợp tác xã muốn chia sẻ chân tình với Chủ tịch Hội NDVN, Bộ trưởng NNPTNT",
        "url": "https://danviet.vn/lang-nghe-nong-dan-noi-nhieu-nong-dan-hop-tac-xa-muon-chia-se-chan-tinh-voi-chu-tich-hoi-ndvn-bo-truong-nnptnt-2024100906443995-d846051.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/8/dien-dan-lang-nghe-nong-dan-noi-172843021438452602086-77-0-1327-2000-crop-1728430956638528410946.jpg",
        "sapo": "Vào ngày 14/10 tới đây, tại Hà Nội, lần đầu tiên Chủ tịch Ban Chấp hành Trung ương Hội Nông dân Việt Nam Lương Quốc Đoàn và Bộ trưởng Bộ Nông nghiệp và PTNT Lê Minh Hoan và sẽ đồng chủ trì Diễn đàn \"Lắng nghe nông dân nói\" với sự tham dự của 126 nông dân Việt Nam xuất sắc, Hợp tác xã tiêu biểu cả nước.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "09/10/2024"
      },
      {
        "id": "1188453",
        "title": "Diễn đàn Nông dân quốc gia năm 2024: Chủ tịch Hội Nông dân Quảng Trị kiến nghị tăng nguồn lực cho Hội cơ sở",
        "url": "https://danviet.vn/dien-dan-lang-nghe-nong-dan-noi-chu-tich-hoi-nong-dan-quang-tri-kien-nghi-tang-nguon-luc-cho-hoi-co-so-20241008160822975-d1188453.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/7/cover-800-x-500-17282627312951917257925.jpg",
        "sapo": "Chủ tịch Hội Nông dân tỉnh Quảng Trị Trần Văn Bến cho rằng, Lễ tôn vinh 63 nông dân Việt Nam xuất sắc, biểu dương 63 hợp tác xã tiêu biểu toàn quốc do Trung ương Hội Nông dân Việt Nam tuyên truyền, vận động, hướng dẫn, thành lập là động lực to lớn để nông dân, hợp tác xã phát triển sản xuất.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "09/10/2024"
      },
      {
        "id": "846048",
        "title": "Niềm tin và kỳ vọng của nông dân Điện Biên gửi đến chương trình Tự hào Nông dân Việt Nam",
        "url": "https://danviet.vn/niem-tin-va-ky-vong-cua-nong-dan-dien-bien-gui-den-chuong-trinh-tu-hao-nong-dan-viet-nam-2024100816153589-d846048.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/8/img-20241008-150432-17283772978191831471455-196-0-1248-1684-crop-1728377305099352852858.jpg",
        "sapo": "Bà Vàng Thị Bình, Chủ tịch Hội Nông dân tỉnh Điện Biên cho biết: “Tự hào Nông dân Việt Nam là chương trình có ý nghĩa chính trị sâu sắc của Hội Nông dân Việt Nam. Chương trình khẳng định vai trò, vị thế, tôn vinh những cống hiến, đóng góp nông dân Việt Nam trong phát triển kinh tế và bảo vệ Tổ quốc.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "09/10/2024"
      },
      {
        "id": "846032",
        "title": "Nông dân Việt Nam xuất sắc năm 2024 có lợi nhuận cao nhất là tỷ phú nuôi tôm công nghệ cao ở Bến Tre",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-nam-2024-co-loi-nhuan-cao-nhat-la-ty-phu-nuoi-tom-cong-nghe-cao-o-ben-tre-2024100723144946-d846032.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/7/nong-dan-viet-nam-xuat-sac-ben-tre-3-17283175772901007039830-171-93-1611-2397-crop-1728317581969474785337.jpg",
        "sapo": "Với mô hình nuôi tôm công nghệ cao, anh Nguyễn Minh Nhủ - Nông dân Việt Nam xuất sắc đến từ Bến Tre có lợi nhuận cao nhất trong số 63 Nông dân Việt Nam suất sắc năm 2024.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "08/10/2024"
      },
      {
        "id": "1188319",
        "title": "Phó Chủ tịch Hội NDVN Bùi Thị Thơm: 63 Nông dân Việt Nam xuất sắc 2024 là những 'đầu tàu' truyền động lực làm giàu",
        "url": "https://danviet.vn/pho-chu-tich-hoi-ndvn-bui-thi-thom-63-nong-dan-viet-nam-xuat-sac-2024-la-nhung-dau-tau-truyen-dong-luc-lam-giau-20241007222442003-d1188319.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/7/63-nong-dan-viet-nam-xuat-sac-2024-17283140339781800434641-40-0-1640-2560-crop-1728314593625117065892.jpg",
        "sapo": "Bà Bùi Thị Thơm - Phó Chủ tịch BCH Trung ương Hội Nông dân Việt Nam, Trưởng ban Tổ chức Chương trình Tự hào Nông dân Việt Nam 2024 khẳng định 63 Nông dân Việt Nam xuất sắc được bình chọn là những người rất xứng đáng. Chất lượng nông dân xuất sắc năm nay có nhiều điểm nhấn nổi bật, đa dạng trên tất cả các lĩnh vực.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "08/10/2024"
      },
      {
        "id": "1188252",
        "title": "Nông dân Việt Nam xuất sắc năm 2024 có doanh thu cao nhất là nữ tỷ phú nuôi ngao đến từ Thanh Hóa",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-nam-2024-co-doanh-thu-cao-nhat-la-nu-ty-phu-nuoi-ngao-den-tu-thanh-hoa-20241007154247889-d1188252.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/7/nong-dan-viet-nam-xuat-sac-1728290172300652546148-96-0-1346-2000-crop-172829039081623451703.jpg",
        "sapo": "Với mô hình nuôi ngao, bà Nguyễn Thị Biên (51 tuổi) - Nông dân Việt Nam xuất sắc đến từ Thanh Hoá có doanh thu lớn nhất trong số 63 Nông dân Việt Nam suất sắc năm 2024.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "07/10/2024"
      },
      {
        "id": "1188126",
        "title": "Diễn đàn Lắng nghe nông dân nói: Kiến nghị của nông dân là cơ sở xây dựng chính sách về tam nông",
        "url": "https://danviet.vn/dien-dan-nong-dan-quoc-gia-lan-thu-ix-kien-nghi-cua-nong-dan-la-co-so-xay-dung-chinh-sach-ve-tam-nong-20241006225031672-d1188126.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/7/le-duc-thinh-16970099956471813556614-13-0-426-660-crop-1728284055421733153317.jpeg",
        "sapo": "TS.Lê Đức Thịnh, Cục trưởng Cục Kinh tế hợp tác và PTNT (Bộ NNPTNT) bày tỏ mong muốn được lắng nghe những kiến nghị, đề xuất của các nông dân Việt Nam xuất sắc, hợp tác xã tiêu biểu tại Diễn đàn Nông dân Quốc gia lần thứ IX để có cơ sở tham mưu cho Bộ NNPTNT các chính sách liên quan đến nông nghiệp, nông thôn.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "07/10/2024"
      },
      {
        "id": "1188043",
        "title": "Phó Chủ tịch Hội NDVN Đinh Khắc Đính: 63 HTX tiêu biểu toàn quốc năm 2024 có nhiều điểm nhấn nổi bật",
        "url": "https://danviet.vn/pho-chu-tich-hoi-ndvn-dinh-khac-dinh-63-htx-tieu-bieu-toan-quoc-nam-2024-co-nhieu-diem-nhan-noi-bat-20241006095946323-d1188043.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/6/hoi-nong-dan-viet-nam-17281836628752043522138-81-88-826-1280-crop-17281840702431403610365.jpg",
        "sapo": "Đồng chí Đinh Khắc Đính – Phó Chủ tịch Ban Chấp hành Trung ương Hội Nông dân Việt Nam, Chủ tịch Hội đồng thẩm định, xét chọn Hợp tác xã tiêu biểu toàn quốc năm 2024 khẳng định thành tích của 63 HTX tiêu biểu toàn quốc năm 2024 do Hội NDVN tuyên truyền, vận động, hướng dẫn hỗ trợ thành lập có nhiều điểm nhấn nổi bật.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "06/10/2024"
      },
      {
        "id": "1187917",
        "title": "9 kỷ lục ấn tượng của 63 Nông dân Việt Nam xuất sắc năm 2024, có tỷ phú nuôi tôm lợi nhuận 25 tỷ đồng/năm",
        "url": "https://danviet.vn/9-ky-luc-an-tuong-cua-63-nong-dan-viet-nam-xuat-sac-nam-2024-co-ty-phu-nuoi-tom-loi-nhuan-25-ty-dong-nam-20241005115507171-d1187917.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/5/nong-dan-viet-nam-xuat-sac-ben-tre-17281050509631985876283-67-0-1667-2560-crop-1728105170826990399349.jpg",
        "sapo": "Trong số 63 Nông dân Việt Nam xuất sắc năm 2024 được tôn vinh có rất nhiều tỷ phú nông dân với thành tích vượt trội, quy mô sản xuất lớn. Nhiều nông dân xuất sắc năm 2024 có doanh thu cả trăm tỷ đồng, lợi nhuận vài chục tỷ đồng và tạo việc làm cho hàng nghìn lao động ở địa phương.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "05/10/2024"
      },
      {
        "id": "1187894",
        "title": "Nông dân Việt Nam xuất sắc năm 2024: Sức lan tỏa lớn từ chân dung những con người bình dị",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-nam-2024-suc-lan-toa-lon-tu-chan-dung-nhung-con-nguoi-binh-di-20241005100534001-d1187894.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/5/mie-1728097877770228717007-2-0-803-1280-crop-1728097889700899496103.jpg",
        "sapo": "Theo đánh giá của Hội đồng bình chọn danh hiệu Nông dân Việt Nam xuất sắc 2024, các nông dân Việt Nam xuất sắc năm 2024 là những người truyền cảm hứng, tạo động lực cho các nông dân khác vươn lên làm giàu.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "05/10/2024"
      },
      {
        "id": "1187643",
        "title": "Lần đầu tiên tổ chức Diễn đàn Chủ tịch Hội Nông dân Việt Nam - Bộ trưởng Bộ NNPTNT lắng nghe nông dân nói",
        "url": "https://danviet.vn/lan-dau-tien-to-chuc-dien-dan-chu-tich-hoi-nong-dan-viet-nam-bo-truong-bo-nnptnt-lang-nghe-nguoi-nong-dan-20241003215020226-d1187643.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/3/chu-tich-1-16970772354952119129071-1727966681727707908-78-0-1328-2000-crop-17279669455361824627259.jpg",
        "sapo": "Diễn đàn Nông dân quốc gia là sự kiện thường niên nằm trong chuỗi Tự hào NDVN được tổ chức vào trung tuần tháng 10 hàng năm. Năm nay là lần đầu tiên Diễn đàn được tổ chức với chủ đề “Chủ tịch Hội Nông dân Việt Nam – Bộ trưởng Bộ Nông nghiệp và PTNT lắng nghe nông dân nói”.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "04/10/2024"
      },
      {
        "id": "1187612",
        "title": "Chương trình Tự hào Nông dân Việt Nam năm 2024: Đổi mới với tinh thần lấy người nông dân làm chủ thể",
        "url": "https://danviet.vn/chuong-trinh-tu-hao-nong-dan-viet-nam-nam-2024-doi-moi-voi-tinh-than-lay-nguoi-nong-dan-lam-chu-the-20241003175516863-d1187612.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2024/10/3/anh-1-tr7-1727952798167209350920-22-0-1622-2560-crop-1727952822977299363276.jpg",
        "sapo": "Thông tin từ Ban tổ chức Chương trình Tự hào Nông dân Việt Nam, trong 2 ngày 13 - 14/10/2024, tại Hà Nội, Trung ương Hội Nông dân Việt Nam sẽ tổ chức chuỗi Chương trình Tự hào Nông dân Việt Nam năm 2024 với nhiều sự kiện, hoạt động nổi bật.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "04/10/2024"
      }
    ]
  },
  {
    "kicker": "Chương trình Tự hào Nông dân Việt Nam • Năm thứ 11",
    "title": "Tự hào Nông dân Việt Nam 2023",
    "date": "Tối 13/10/2023",
    "location": "Nhà hát Lớn Hà Nội",
    "summary": "Tôn vinh và trao danh hiệu cho 100 Nông dân Việt Nam xuất sắc, biểu dương 63 Hợp tác xã nông nghiệp tiêu biểu toàn quốc. Lễ tôn vinh diễn ra tối 13/10/2023 tại Nhà hát Lớn (trực tiếp VTV2); Diễn đàn Nông dân Quốc gia lần thứ VIII bàn về phát triển kinh tế tập thể trong nông nghiệp.",
    "stats": [
      {
        "value": 100,
        "suffix": "",
        "label": "Nông dân Việt Nam xuất sắc"
      },
      {
        "value": 63,
        "suffix": "",
        "label": "Hợp tác xã tiêu biểu"
      },
      {
        "value": 86,
        "suffix": "",
        "label": "Bài báo tư liệu"
      }
    ],
    "link": "https://danviet.vn/T%E1%BB%B1+h%C3%A0o+N%C3%B4ng+d%C3%A2n+Vi%E1%BB%87t+Nam+2023-tag/",
    "linkLabel": "Xem chủ đề 2023 trên Dân Việt",
    "year": 2023,
    "label": "2023",
    "cover": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/11/1-1697005486876107826848-312-110-1333-1744-crop-16970055654021808611157-72-0-1021-1518-crop-16970085197171332156553.jpg",
    "featured": [
      {
        "tag": "Sự kiện & Vinh danh",
        "highlight": "03/10/2023",
        "title": "Chương trình Tự hào Nông dân Việt Nam 2023 với chuỗi các sự kiện đặc biệt 'do nông dân, vì nông dân'",
        "sapo": "",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/2/anh-1-tr7-16962396674441720849402-0-0-563-900-crop-1696239742286496055839.png",
        "url": "https://danviet.vn/chuong-trinh-tu-hao-nong-dan-viet-nam-2023-voi-chuoi-su-kien-dac-biet-do-nong-dan-vi-nong-dan-20231002164250744-d1121262.html"
      },
      {
        "tag": "Sự kiện & Vinh danh",
        "highlight": "11/10/2023",
        "title": "100 nông dân Việt Nam xuất sắc đã có mặt tại Hà Nội để đón chuỗi sự kiện Tự hào nông dân Việt Nam 2023",
        "sapo": "",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/11/1-1697005486876107826848-312-110-1333-1744-crop-16970055654021808611157-72-0-1021-1518-crop-16970085197171332156553.jpg",
        "url": "https://danviet.vn/100-nong-dan-viet-nam-xuat-sac-da-co-mat-tai-ha-noi-20231011134928545-d1122925.html"
      },
      {
        "tag": "Diễn đàn & Chính sách",
        "highlight": "13/10/2023",
        "title": "Chuỗi Chương trình Tự hào Nông dân Việt Nam 2023 là cơ hội để nông dân, HTX tiếp cận chính sách, vốn...",
        "sapo": "",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/13/base64-1697116679775919124005-16972019157111738896066-83-0-1333-2000-crop-1697201994230436819900.png",
        "url": "https://danviet.vn/chuoi-chuong-trinh-tu-hao-nong-dan-viet-nam-2023-la-co-hoi-de-nong-dan-htx-tiep-can-chinh-sach-von-2023101320041759-d839606.html"
      }
    ],
    "articleCount": 86,
    "articles": [
      {
        "id": "1406563",
        "title": "Nữ nông dân trồng hoa lan đạt danh hiệu Nông dân Việt Nam xuất sắc 2023, nay ứng cử đại biểu HĐND TP.HCM",
        "url": "https://danviet.vn/nu-nong-dan-trong-hoa-lan-dat-danh-hieu-nong-dan-viet-nam-xuat-sac-2023-nay-ung-cu-dai-bieu-hdnd-tphcm-d1406563.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/03/01/104913z7575135770191_4ea2a0419a98208cc88c1cd996293152-1047.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "01/03/2026"
      },
      {
        "id": "1137567",
        "title": "Nông dân Việt Nam xuất sắc 2023 ở Yên Bái tâm đắc bài phát biểu của Tổng Bí thư tại Đại hội VIII Hội NDVN",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2023-o-yen-bai-tam-dac-bai-phat-bieu-cua-tong-bi-thu-tai-dai-hoi-viii-hoi-ndvn-20231229172249847-d1137567.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/12/29/ng-dan-viet-nam-xuat-sac-2023-yen-bai-toi-dac-biet-xuc-dong-truoc-bai-phat-bieu-cua-tong-bi-thu-1-17038443811772113206158-387-0-1187-1280-crop-17038449530741640517174.jpg",
        "sapo": "",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "30/12/2023"
      },
      {
        "id": "1123584",
        "title": "Nông dân Việt Nam xuất sắc 2023: Quyết đi 'du học' để chủ động sản xuất giống cá nước lạnh",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2023-quyet-di-du-hoc-de-chu-dong-san-xuat-giong-ca-nuoc-lanh-20231015021332886-d1123584.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/14/ca-hoi-5-1697305681135325271830-101-0-1314-1940-crop-16973106780351658732220.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "15/10/2023"
      },
      {
        "id": "1123526",
        "title": "Tham gia chuỗi Chương trình Tự hào Nông dân Việt Nam 2023, chủ một hợp tác xã chốt được nhiều đơn hàng",
        "url": "https://danviet.vn/tham-gia-chuoi-chuong-trinh-tu-hao-nong-dan-viet-nam-2023-chu-mot-hop-tac-xa-chot-duoc-nhieu-don-hang-20231014160223703-d1123526.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/14/4-16972725127611828593426-77-0-1327-2000-crop-16972738989121575941195.jpg",
        "sapo": "",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "14/10/2023"
      },
      {
        "id": "1123426",
        "title": "Nông dân Việt Nam xuất sắc 2023: Đọc lại bài báo viết về mình, tôi xúc động rơi nước mắt",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2023-doc-lai-bai-bao-viet-ve-minh-toi-xuc-dong-roi-nuoc-mat-20231014004535392-d1123426.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/13/l2-16972182750572079878325-752-0-2002-2000-crop-169721893307632180276.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/10/2023"
      },
      {
        "id": "1123385",
        "title": "Nông dân Việt Nam xuất sắc 2023 đến từ Bắc Ninh chế tạo nhiều loại máy phay lên luống 5 trong 1",
        "url": "https://danviet.vn/mot-nong-dan-bac-ninh-sang-che-che-tao-thanh-cong-nhieu-loai-may-phay-len-luong-5-trong-1-20231013175146949-d1123385.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/13/nong-dan-viet-nam-xuat-sac-2023-phung-van-nam-bac-ninh-2-16971936546752079502623-0-68-1125-1868-crop-16971936645221586294573.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/10/2023"
      },
      {
        "id": "839606",
        "title": "Chuỗi Chương trình Tự hào Nông dân Việt Nam 2023 là cơ hội để nông dân, HTX tiếp cận chính sách, vốn...",
        "url": "https://danviet.vn/chuoi-chuong-trinh-tu-hao-nong-dan-viet-nam-2023-la-co-hoi-de-nong-dan-htx-tiep-can-chinh-sach-von-2023101320041759-d839606.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/13/base64-1697116679775919124005-16972019157111738896066-83-0-1333-2000-crop-1697201994230436819900.png",
        "sapo": "",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "13/10/2023"
      },
      {
        "id": "1123381",
        "title": "Lễ tôn vinh và trao danh hiệu cho 100 'Nông dân Việt Nam xuất sắc 2023' và biểu dương 63 HTX tiêu biểu toàn quốc",
        "url": "https://danviet.vn/le-ton-vinh-va-trao-danh-hieu-cho-100-nong-dan-viet-nam-xuat-sac-2023-va-bieu-duong-63-htx-tieu-bieu-toan-quoc-20231013172430983-d1123381.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/13/anh-ket-16972066796351757485692-0-0-1250-2000-crop-16972072684591861320621.jpg",
        "sapo": "",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "13/10/2023"
      },
      {
        "id": "839604",
        "title": "Danh sách trích ngang thành tích của 100 Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/trich-ngang-thanh-tich-cua-100-nong-dan-viet-nam-xuat-sac-2023-2023101318063041-d839604.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/13/base64-16969927625712030460553-16971950858041705756035-0-0-1250-2000-crop-1697195118860271805881.png",
        "sapo": "",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "13/10/2023"
      },
      {
        "id": "1123193",
        "title": "9 kỷ lục ấn tượng của 100 Nông dân Việt Nam xuất sắc 2023, có tỷ phú nuôi tôm lợi nhuận 50 tỷ/năm",
        "url": "https://danviet.vn/9-ky-luc-an-tuong-cua-100-nong-dan-viet-nam-xuat-sac-2023-ty-phu-nuoi-tom-loi-nhuan-50-ty-nam-20231012181413062-d1123193.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/13/base64-16961687296712094643039-16971719508901238893002-417-281-1103-1379-crop-1697171973483374081717.png",
        "sapo": "",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "13/10/2023"
      },
      {
        "id": "1122925",
        "title": "100 nông dân Việt Nam xuất sắc đã có mặt tại Hà Nội để đón chuỗi sự kiện Tự hào nông dân Việt Nam 2023",
        "url": "https://danviet.vn/100-nong-dan-viet-nam-xuat-sac-da-co-mat-tai-ha-noi-20231011134928545-d1122925.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/11/1-1697005486876107826848-312-110-1333-1744-crop-16970055654021808611157-72-0-1021-1518-crop-16970085197171332156553.jpg",
        "sapo": "",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "11/10/2023"
      },
      {
        "id": "1122808",
        "title": "Tự hào Nông dân Việt Nam 2023: Bắc Giang xây dựng thương hiệu HTX, đưa nông sản vào các khu công nghiệp",
        "url": "https://danviet.vn/bac-giang-lam-gi-de-xay-dung-thuong-hieu-htx-dua-nong-san-vao-cac-khu-cong-nghiep-20231010211013362-d1122808.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/10/hoi-nong-dan-bac-giang-1696946520297742876503-0-0-1101-1761-crop-16969468402801307020815.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "11/10/2023"
      },
      {
        "id": "1122870",
        "title": "Vườn cam, bưởi hữu cơ đẹp như phim của Nông dân Việt Nam xuất sắc 2023 đến từ Bắc Giang",
        "url": "https://danviet.vn/vuon-cam-buoi-huu-co-dep-nhu-phim-cua-nong-dan-viet-nam-xuat-sac-2023-den-tu-bac-giang-20231011095828483-d1122870.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/11/nong-dan-viet-nam-xuat-sac-2023-nguyen-van-huu-1-1696992247639621852017-84-0-1334-2000-crop-169699225333834102727.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "11/10/2023"
      },
      {
        "id": "1122950",
        "title": "Nông dân Việt Nam xuất sắc 2023 tranh thủ 'PR' gạo VD20, mì Chũ trong ngày về Thủ đô",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2023-tranh-thu-pr-gao-vd20-mi-chu-trong-ngay-ve-thu-do-20231011153926594-d1122950.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/11/4-16970112562931666952099-83-0-1333-2000-crop-16970112627321157050568.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "11/10/2023"
      },
      {
        "id": "1122699",
        "title": "Từng là hộ nghèo, nay Nông dân Việt Nam xuất sắc 2023 ở Tuyên Quang thu 6 tỷ/năm từ nuôi lợn, trồng bưởi",
        "url": "https://danviet.vn/tu-ho-ngheo-nay-nong-dan-viet-nam-xuat-sac-o-tuyen-quang-thu-6-ty-nam-tu-nuoi-lon-trong-buoi-20231010113802611-d1122699.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/10/img0292-16969121491061807271222-83-0-1333-2000-crop-16969121759831815700865.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "11/10/2023"
      },
      {
        "id": "1122571",
        "title": "Nông dân Việt Nam xuất sắc 2023 đến từ Kiên Giang là một tỷ phú từng nghèo, 10 năm 'gạo chợ nước sông'",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-den-tu-kien-giang-la-mot-ty-phu-tung-co-10-nam-gao-cho-nuoc-song-20231009164144568-d1122571.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/9/nong-dan-viet-nam-xuat-sac-2023-nguyen-van-thum5-16968413660391017939333-0-0-1156-1850-crop-16968421125501261944719.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "10/10/2023"
      },
      {
        "id": "1122323",
        "title": "Một người ở Long An nuôi gà trong trại lạnh, đẻ trứng sòn sòn là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/mot-nguoi-o-long-an-nuoi-ga-trong-trai-lanh-de-trung-son-son-la-nong-dan-viet-nam-xuat-sac-20231008102203887-d1122323.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/8/1-nong-dan-viet-nam-xuat-sac-1696733940480460491336-0-0-1250-2000-crop-16967349165251288259532.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "10/10/2023"
      },
      {
        "id": "1122431",
        "title": "Người Hà Nội sáng chế máy nông nghiệp '15 trong 1' được bình chọn là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/nguoi-ha-noi-sang-che-may-nong-nghiep-15-trong-1-la-nong-dan-viet-nam-xuat-sac-20231008213153573-d1122431.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/8/img0146-16967727393511968932335-83-0-1333-2000-crop-16967727455402055897530.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "09/10/2023"
      },
      {
        "id": "1122349",
        "title": "Trồng nấm công nghệ cao, anh nông dân 8X ở Hưng Yên là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/trong-nam-cong-nghe-cao-anh-nong-dan-8x-o-hung-yen-la-nong-dan-viet-nam-xuat-sac-2023-20231008125048729-d1122349.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/8/3-1696743484009566421050-178-0-1428-2000-crop-1696743887762897873170.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "09/10/2023"
      },
      {
        "id": "1122007",
        "title": "Một ông Giám đốc HTX ở Thanh Hóa được bình chọn danh hiệu Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/mot-ong-giam-doc-htx-o-thanh-hoa-duoc-binh-chon-nhan-danh-hieu-nong-dan-viet-nam-xuat-sac-20231006140447907-d1122007.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/6/452994c5fc2d2873713c-16965749842031687791614-53-0-1303-2000-crop-1696575176565542265923.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "09/10/2023"
      },
      {
        "id": "1122337",
        "title": "Nuôi gà lai chọi thả vườn, Nông dân Việt Nam xuất sắc 2023 đến từ Bắc Giang lãi 2,4 tỷ/năm",
        "url": "https://danviet.vn/nuoi-ga-lai-choi-tha-vuon-nong-dan-viet-nam-xuat-sac-2023-den-tu-bac-giang-lai-24-ty-dong-nam-20231008113938138-d1122337.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/8/nong-dan-viet-nam-xuat-sac-2023-nguyen-huu-quy-yen-the-bac-giang-6-16967360993601687728070-0-107-1125-1907-crop-1696736107744406085074.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "08/10/2023"
      },
      {
        "id": "1122218",
        "title": "Nuôi ba ba, cá lóc lời 2,5 tỷ/năm; một chủ trang trại ở Tây Ninh là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/nuoi-ba-ba-ca-loc-loi-25-ty-nam-mot-chu-trang-trai-o-tay-ninh-la-nong-dan-viet-nam-xuat-sac-2023-20231007172642363-d1122218.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/7/nong-dan-viet-nam-xuat-sac-pham-van-toai-o-xa-phuoc-minh-huyen-duong-minh-chau-tinh-tay-ninh-1-16966738742941113873938-10-48-573-949-crop-1696674136804897622545.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "08/10/2023"
      },
      {
        "id": "1122059",
        "title": "Triệu Tạ Hin, một người Hà Giang, từ hai bàn tay trắng đến danh hiệu “Nông dân Việt Nam xuất sắc 2023'",
        "url": "https://danviet.vn/trieu-ta-hin-mot-nguoi-ha-giang-giau-co-duoc-trao-tang-danh-hieu-nong-dan-viet-nam-xuat-sac-20231006172945879-d1122059.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/6/img2803-169658618096850293261-80-0-1330-2000-crop-16965870987171456087484.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "07/10/2023"
      },
      {
        "id": "1121919",
        "title": "Nông dân Việt Nam xuất sắc 2023 đến từ Bắc Ninh biến khu lò gạch cũ thành trang trại thu 30 tỷ/năm",
        "url": "https://danviet.vn/lo-gach-bo-hoang-thanh-trang-trai-thu-hon-30-ty-nam-o-bac-ninh-la-nong-dan-viet-nam-xuat-sac-20231006031230493-d1121919.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/5/nong-dan-viet-nam-xuat-sac-nam-2023-nguyen-thi-quyen-3-16965365817331065694937-0-200-1125-2000-crop-1696536588585379454446.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "06/10/2023"
      },
      {
        "id": "1121299",
        "title": "Tỷ phú nuôi tôm công nghệ cao ở Bến Tre được bình chọn là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/ty-phu-nuoi-tom-cong-nghe-cao-o-ben-tre-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-2023-20231002192402597-d1121299.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/2/hung3-16962478041992037824765-83-0-1333-2000-crop-1696248899805320133829.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "06/10/2023"
      },
      {
        "id": "1121801",
        "title": "Trồng loại nấm có giá 50 triệu/kg, một phụ nữ Bà Rịa-Vũng Tàu là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/trong-nam-nam-gi-ban-50-trieu-kg-mot-phu-nu-ba-ria-vung-tau-la-nong-dan-viet-nam-xuat-sac-20231005132456933-d1121801.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/5/img9312-1696486059512159438398-0-0-1250-2000-crop-16964867448331420137608.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "06/10/2023"
      },
      {
        "id": "57866",
        "title": "Trồng lúa giỏi, nuôi cả cá, tôm, một người ở Bà Rịa-Vũng Tàu là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/trong-lua-gioi-nuoi-ca-ca-tom-mot-nguoi-o-ba-ria-vung-tau-la-nong-dan-viet-nam-xuat-sac-20231005141738716-d57866.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/5/1-16964883752652130334494-0-0-1250-2000-crop-16964896453151318315868.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "06/10/2023"
      },
      {
        "id": "1121493",
        "title": "Trưởng ấp ở TP HCM từng nghèo khó, nay trồng nấm thu 2 tỷ/năm là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/truong-ap-o-tp-hcm-trong-nam-thu-2-ty-nam-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-20231003181137524-d1121493.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/3/img9210-1696329719957322863785-83-0-1333-2000-crop-1696330398682812907438.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "05/10/2023"
      },
      {
        "id": "839375",
        "title": "Đi lên từ hộ nghèo, Nông dân Việt Nam xuất sắc 2023 đến từ Cao Bằng trồng cây công nghiệp, nuôi trâu bò",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2023-den-tu-cao-bang-la-nguoi-trong-cay-cong-nghiep-nuoi-trau-bo-2023100317063133-d839375.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/4/nong-van-nghiem-cao-bang-nong-dan-viet-nam-xuat-sac-2023-1696380881744642159180-0-192-1080-1920-crop-16963818747281324418408.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "05/10/2023"
      },
      {
        "id": "1121412",
        "title": "“Vua tôm thẻ' ở Bạc Liêu từ nghèo không cục đất chọi chim thành Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/vua-tom-the-o-bac-lieu-tu-ngheo-khong-cuc-dat-choi-chim-thanh-nong-dan-viet-nam-xuat-sac-20231003140916495-d1121412.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/3/20230930151305-16963163351381557895134-0-0-1250-2000-crop-16963166780471349855281.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "04/10/2023"
      },
      {
        "id": "1120697",
        "title": "Ươm trồng 2,1 triệu cây giống lâm nghiệp, một người Bình Định là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/uom-trong-21-trieu-cay-giong-lam-nghiep-mot-nguoi-binh-dinh-la-nong-dan-viet-nam-xuat-sac-20230929133107031-d1120697.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/9/29/152c255b-940a-4419-aaa6-9fc6a744d693-16959687235341151647209-250-0-1500-2000-crop-16959807287131003264018.jpeg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "04/10/2023"
      },
      {
        "id": "1121397",
        "title": "Hình ảnh Họp báo Chương trình Tự hào nông dân Việt Nam 2023",
        "url": "https://danviet.vn/hinh-anh-hop-bao-chuong-trinh-tu-hao-nong-dan-viet-nam-2023-20231003120034943-d1121397.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/3/2-1696308279910280108925-30-0-1264-1975-crop-1696308423899365552863.jpg",
        "sapo": "",
        "category": "Hình ảnh & Video",
        "location": "",
        "date": "03/10/2023"
      },
      {
        "id": "1121371",
        "title": "Họp báo Chương trình Tự hào nông dân Việt Nam 2023",
        "url": "https://danviet.vn/hop-bao-chuong-trinh-tu-hao-nong-dan-viet-nam-2023-20231003095735783-d1121371.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/3/38551562165846730116397255960037826964256619n-16963018031601593175886-0-0-600-960-crop-16963018216451679959930.jpg",
        "sapo": "",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "03/10/2023"
      },
      {
        "id": "1121262",
        "title": "Chương trình Tự hào Nông dân Việt Nam 2023 với chuỗi các sự kiện đặc biệt 'do nông dân, vì nông dân'",
        "url": "https://danviet.vn/chuong-trinh-tu-hao-nong-dan-viet-nam-2023-voi-chuoi-su-kien-dac-biet-do-nong-dan-vi-nong-dan-20231002164250744-d1121262.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/2/anh-1-tr7-16962396674441720849402-0-0-563-900-crop-1696239742286496055839.png",
        "sapo": "",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "03/10/2023"
      },
      {
        "id": "1121334",
        "title": "Nuôi 'chim tiền tỷ' vượt mùa đông, một giám đốc ở Thanh Hoá là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/nuoi-chim-yen-tien-ty-vuot-dong-mot-giam-doc-thanh-hoa-la-nong-dan-viet-nam-xuat-sac-2023-20231003061815607-d1121334.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/2/bbadbdc48a035e5d0712-16962879622161603701662-108-0-1358-2000-crop-16962885650121864078180.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "03/10/2023"
      },
      {
        "id": "839365",
        "title": "20 năm trồng lúa giống, từ hộ nghèo nay lãi tiền tỷ, chị nông dân Tiền Giang là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/trong-lua-giong-lai-tien-ty-chi-tien-giang-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-2023-2023100310533521-d839365.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/3/1-nong-dan-viet-anm-xuat-sac-2023-1696303534117367323097-0-0-1250-2000-crop-16963045247341929992415.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "03/10/2023"
      },
      {
        "id": "839364",
        "title": "Danh sách 100 Nông dân Việt Nam xuất sắc năm 2023",
        "url": "https://danviet.vn/danh-sach-100-nong-dan-viet-nam-xuat-sac-nam-2023-2023100310152873-d839364.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/3/base64-16956963777571791226834-1696302861970565938094-0-0-1250-2000-crop-1696302875611530794145.png",
        "sapo": "",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "03/10/2023"
      },
      {
        "id": "1121355",
        "title": "Họp báo Chương trình Tự hào Nông dân Việt Nam xuất sắc 2023: Tôn vinh 100 nông dân và 63 HTX nông nghiệp tiêu biểu",
        "url": "https://danviet.vn/hop-bao-chuong-trinh-tu-hao-nong-dan-viet-nam-xuat-sac-2023-ton-vinh-100-nong-dan-va-63-htx-nong-nghiep-tieu-bieu-20231003083540012-d1121355.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/3/tu-hao-2021-1696296504996929346725-0-22-1187-1921-crop-16962965088181422547529.jpeg",
        "sapo": "",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "03/10/2023"
      },
      {
        "id": "1121187",
        "title": "Liều vay 5 tỷ lên vùng đất khó lập trang trại, một nông dân Nghệ An được bình chọn là Nông dân xuất sắc 2023",
        "url": "https://danviet.vn/lieu-vay-5-ty-len-vung-dat-kho-lap-trang-trai-nuoi-lon-anh-nghe-an-la-nong-dan-viet-nam-xuat-sac-20231002114432576-d1121187.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/10/2/nd3-16962199208721491569853-0-0-717-1147-crop-1696221062960256004801.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "02/10/2023"
      },
      {
        "id": "1120986",
        "title": "Người làm nước mắm Phú Quốc 'quốc hồn quốc túy' ở Kiên Giang là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/nguoi-lam-nuoc-mam-phu-quoc-quoc-hon-quoc-tuy-o-kien-giang-la-nong-dan-viet-nam-xuat-sac-2023-20230930232757918-d1120986.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/9/30/kim-hoa-3-1696088179202603551992-34-0-1284-2000-crop-1696090116796463391399.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "01/10/2023"
      },
      {
        "id": "1120465",
        "title": "Người tiên phong đưa cơ giới hoá vào thu hoạch lúa ở Quảng Ngãi là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/mot-nguoi-quang-ngai-di-dau-trong-co-gioi-hoa-dung-may-gat-lua-la-nong-dan-viet-nam-xuat-sac-20230928122717832-d1120465.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/9/28/anh-q-ngai-nguoi-tien-phong-4-16958785685751788666846-0-0-399-638-crop-1695878571557781431008.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "28/09/2023"
      },
      {
        "id": "1120140",
        "title": "Người phụ nữ trở thành Nông dân Việt Nam xuất sắc 2023 nhờ 'xé rào', đem lại sức sống cho cây chè Suối Giàng",
        "url": "https://danviet.vn/nguoi-phu-nu-tro-thanh-nong-dan-viet-nam-xuat-sac-2023-nho-dem-lai-suc-song-cho-cay-che-suoi-giang-20230926163215041-d1120140.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/9/26/800x500-ndvnsx-kim-thoa-1695719857740679265917.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "28/09/2023"
      },
      {
        "id": "1119941",
        "title": "Trồng cam quýt lời hơn 20 tỷ/năm, tỷ phú Bình Dương là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/trong-cam-quyt-loi-hon-20-ty-nam-ty-phu-binh-duong-la-nong-dan-viet-nam-xuat-sac-2023-20230925185631607-d1119941.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/9/25/nong-dan-viet-nam-xuat-sac-lam-thanh-thuong-cam-buoi-hieu-liem-quyt-hong-bac-tan-uyen-2-16956423626151622655319-85-76-625-939-crop-16956426932681194291321.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "26/09/2023"
      },
      {
        "id": "1119702",
        "title": "Trồng lúa cánh đồng lớn thu 20 tỷ/năm, một giám đốc ở Tiền Giang là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/trong-lua-canh-dong-lon-thu-20-ty-nam-giam-doc-o-tien-giang-la-nong-dan-viet-nam-xuat-sac-2023-20230924161021501-d1119702.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/9/24/1-nong-dan-viet-nam-xuat-sac-2023-1695544355105744988408-38-0-1288-2000-crop-1695546123702921432411.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "24/09/2023"
      },
      {
        "id": "1118863",
        "title": "Từ làm thuê, một người Yên Bái nay thành Nông dân Việt Nam xuất sắc 2023, thu nhập tiền tỷ/năm",
        "url": "https://danviet.vn/tu-lam-thue-mot-nguoi-yen-bai-nay-thanh-nong-dan-viet-nam-xuat-sac-2023-thu-nhap-tien-ty-nam-20230920100154764-d1118863.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/9/20/tu-cong-nhan-lam-thue-tro-thanh-nong-dan-viet-nam-xuat-sac-voi-thu-nhap-hang-ty-dong-1-1695177502953795124957-0-164-576-1086-crop-16951783793701750578121.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "21/09/2023"
      },
      {
        "id": "57714",
        "title": "Nông dân Việt Nam xuất sắc 2023 đến từ Sài Thành là cô gái trồng hoa lan, tự trả lương cao từ hoa lan",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2023-den-tu-tp-hcm-la-co-gai-trong-hoa-lan-tu-tra-luong-cao-20230919174411675-d57714.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/9/19/img7232-1695118269703965040737-174-0-1424-2000-crop-1695119391233697113613.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "20/09/2023"
      },
      {
        "id": "1118435",
        "title": "Nông dân Việt Nam xuất sắc 2023 đến từ Khánh Hòa trồng cây gì mà thu tiền tỷ?",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2023-den-tu-khanh-hoa-trong-cay-gi-ma-thu-tien-ty-20230918101033887-d1118435.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/9/18/tien-cuong-5-1695006443516115249089-0-123-605-1091-crop-1695006509122349639175.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "19/09/2023"
      },
      {
        "id": "1117955",
        "title": "Trồng lúa kiểu gì mà ông nông dân Cần Thơ thu lãi 'khủng', nhận danh hiệu Nông dân Việt Nam xuất sắc 2023?",
        "url": "https://danviet.vn/trong-lua-kieu-gi-ma-ong-nong-dan-can-tho-thu-lai-khung-la-nong-dan-viet-nam-xuat-sac-2023-20230915124557325-d1117955.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/9/15/nong-dan-viet-nam-xuat-sac-1694756433699833522353-0-0-1250-2000-crop-16947564418312019464272.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "18/09/2023"
      },
      {
        "id": "1117824",
        "title": "Một nông dân làm ra thứ bánh đặc sản Phú Yên lãi tiền tỷ là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/mot-nong-dan-lam-ra-thu-banh-dac-san-phu-yen-lai-tien-ty-la-nong-dan-viet-nam-xuat-sac-2023-20230914180127656-d1117824.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/9/14/hai-py-1-1694687172000430253098-111-0-1361-2000-crop-169468837323731678213.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "15/09/2023"
      },
      {
        "id": "1117680",
        "title": "Nông dân xuất sắc 2023 đến từ Hà Nam có lợi nhuận tốt nhờ 'nhất nghệ tinh nhất thân vinh'",
        "url": "https://danviet.vn/nong-dan-xuat-sac-2023-den-tu-ha-nam-lai-10-ty-nam-nho-nghe-moc-nhat-nghe-tinh-nhat-than-vinh-20230913224013703-d1117680.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/9/13/h1-16946193681531101783632-166-0-1416-2000-crop-1694619538906919394615.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/09/2023"
      },
      {
        "id": "1117617",
        "title": "Tỷ phú đánh bắt loài cá ngừ đại dương ở Phú Yên là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/ty-phu-danh-bat-loai-ca-ca-ngu-dai-duong-khong-lo-o-phu-yen-la-nong-dan-viet-nam-xuat-sac-2023-20230913165411563-d1117617.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/9/13/khoa-py3-16945966299211130776483-0-0-1250-2000-crop-16945978032222106394371.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/09/2023"
      },
      {
        "id": "1117600",
        "title": "Nuôi con “siêu lợi nhuận”, một người Long An thu tiền tỷ, là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/nuoi-tom-sieu-loi-nhuan-mot-nguoi-long-an-thu-tien-ty-la-nong-dan-viet-nam-xuat-sac-2023-20230913154622527-d1117600.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/9/13/1-nuoi-tom-1694593013618801620905-0-160-900-1600-crop-16945941487711345035835.png",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "13/09/2023"
      },
      {
        "id": "1115815",
        "title": "Mở lò làm vôi bột thu 4 tỷ/năm, ông chủ lò vôi ở Quảng Trị là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/mo-lo-san-xuat-voi-bot-thu-4-ty-dong-nam-ong-chu-lo-voi-o-quang-tri-thanh-nong-dan-viet-nam-xuat-sac-2023-20230903175609637-d1115815.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/9/3/mg3568-16937372051951444323503-83-0-1333-2000-crop-1693738212283480820526.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "04/09/2023"
      },
      {
        "id": "1115377",
        "title": "Trồng 40ha cây ăn trái hữu cơ, 9X Lâm Đồng được chọn là nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/mot-nong-dan-viet-nam-xuat-sac-2023-den-tu-lam-dong-cam-chac-gia-san-tien-ty-nho-sau-rieng-20230831184659571-d1115377.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/31/emagazine-ndvnxs2023-trai9x-lamdong-cover-danviet800x500-16934800848431572638486.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "01/09/2023"
      },
      {
        "id": "838597",
        "title": "Thu tiền tỷ nhờ trồng nấm đếm không xuể, một Giám đốc ở Nam Định được bình chọn là Nông dân xuất sắc 2023",
        "url": "https://danviet.vn/ong-nguyen-van-thanh-nong-dan-trong-nam-thu-tien-ty-o-nam-dinh-la-nong-dan-viet-nam-xuat-sac-2023082721400139-d838597.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/27/1-16931451150961947437520-0-0-1250-2000-crop-16931460941241710661995.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "28/08/2023"
      },
      {
        "id": "1114181",
        "title": "'Ông vua' của các sản phẩm OCOP ở Cà Mau là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/ba-chuong-ong-vua-cua-cac-san-pham-ocop-lam-tu-tom-va-hai-san-co-doanh-thu-cuc-khung-o-ca-mau-20230825123503859-d1114181.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/25/20230819120340-1692939872649711823442-0-0-1250-2000-crop-16929414033012026354396.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "25/08/2023"
      },
      {
        "id": "1113650",
        "title": "Làm trà sạch xuất khẩu ra nước ngoài, một giám đốc ở Thái Nguyên là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/xuat-khau-tra-dac-san-ra-nuoc-ngoai-giam-doc-o-thai-nguyen-la-nong-dan-viet-nam-xuat-sac-20230822161925036-d1113650.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/23/img2141-1692758977011635673226-65-0-1315-2000-crop-1692760357946535724397.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "24/08/2023"
      },
      {
        "id": "1113788",
        "title": "Tỷ phú nuôi tôm công nghệ cao, nuôi con vạng ở Nam Định là Nông dân xuất sắc 2023",
        "url": "https://danviet.vn/ty-phu-nuoi-tom-cong-nghe-cao-nuoi-con-vang-o-nam-dinh-la-nong-dan-xuat-sac-2023-20230823122858948-d1113788.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/23/anh-9-16927660418501428953682-81-0-1331-2000-crop-16927670578311652902923.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "23/08/2023"
      },
      {
        "id": "1113698",
        "title": "Nữ Nông dân Việt Nam xuất sắc 2023 ở Lâm Đồng làm gì mà thu hàng chục tỷ/năm?",
        "url": "https://danviet.vn/nu-nong-dan-viet-nam-xuat-sac-2023-o-lam-dong-lam-gi-ma-thu-hang-chuc-ty-nam-20230822214615262-d1113698.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/22/nong-dan-viet-nam-xuat-sac-6-16927149465211012957572-0-0-1247-1995-crop-16927154022861815303845.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "23/08/2023"
      },
      {
        "id": "1113478",
        "title": "Chuyện lạ Sóc Trăng, trồng chanh ngọt trông như trái xoài, chủ vườn là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/chuyen-la-soc-trang-trong-chanh-ngot-trong-nhu-trai-xoai-chu-vuon-la-nong-dan-viet-nam-xuat-sac-20230821204643584-d1113478.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/21/sau-cong-chanh-ngotjpg8-1692622337359145934399-75-0-675-960-crop-16926237208851010412662.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "22/08/2023"
      },
      {
        "id": "1113360",
        "title": "Vận động 20 tỷ xây cầu đường nông thôn, một người Đồng Tháp là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/trong-lua-canh-dong-thang-canh-co-bay-tim-20-ty-lam-cau-duong-o-dong-thap-ca-lang-phuc-lan-20230821112032274-d1113360.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/21/nong-dan-xuat-sac-1692591090150194050561-205-0-1455-2000-crop-169259138552930433374.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "22/08/2023"
      },
      {
        "id": "1112935",
        "title": "Sao chè thành tỷ phú ở Lai Châu, thu 50 tỷ/năm, được bình chọn là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/sao-che-thanh-ty-phu-o-lai-chau-thu-50-ty-nam-binh-chon-la-nong-dan-viet-nam-xuat-sac-2023-20230818172856543-d1112935.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/18/che-bien-che-kho-6-2-1692353182292281829071-0-163-1126-1965-crop-1692353196052420932818.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "20/08/2023"
      },
      {
        "id": "1112766",
        "title": "'Biến' đá thành tiền tỷ, một người Ninh Bình được bình chọn là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/bien-da-thanh-tien-ty-mot-nguoi-ninh-binh-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-2023-20230817224306239-d1112766.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/17/20230803163553-16922860095521821924169-51-0-1301-2000-crop-169228701688012315163.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "19/08/2023"
      },
      {
        "id": "838431",
        "title": "Vườn mít Thái, thanh nhãn ra trái quá trời ở Đồng Tháp, ông chủ là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/vuon-mit-thai-thanh-nhan-ra-trai-qua-troi-o-dong-thap-ong-chu-la-nong-dan-viet-nam-xuat-sac-2023081811580803-d838431.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/18/nong-dan-xuat-sac-16923341687531701112987-601-0-1805-1926-crop-1692334497721676276613.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "19/08/2023"
      },
      {
        "id": "1112713",
        "title": "Bấm điện thoại nuôi cá to bự, thu 4 tỷ/năm, ông nông dân Ninh Bình là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/nuoi-ca-toan-con-to-bu-thu-4-ty-nam-ong-nong-dan-ninh-binh-la-nong-dan-viet-nam-xuat-sac-2023-20230817165309228-d1112713.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/17/20230815104207-1692265940840600267894-38-0-1288-2000-crop-1692265955770411032363.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "18/08/2023"
      },
      {
        "id": "1112438",
        "title": "Tỷ phú thanh long VietGAP ở Bình Thuận có cánh đồng thẳng cánh cò bay là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/ty-phu-trong-thanh-long-xuat-khau-o-binh-thuan-co-canh-dong-thang-canh-co-bay-dep-nhu-phim-20230816104638076-d1112438.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/16/dao-11-1692157082553412651569-38-0-709-1074-crop-1692157088813108550607.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "18/08/2023"
      },
      {
        "id": "1112189",
        "title": "Lãi tiền tỷ nhờ nuôi loại chim khổng lồ chả biết bay ở Hải Dương, bà chủ là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/lai-tien-ty-nho-nuoi-da-dieu-chim-khong-lo-o-hai-duong-ba-chu-la-nong-dan-viet-nam-xuat-sac-20230815073736527-d1112189.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/15/ba-binh-2-1692055973346159128885-0-0-1195-1912-crop-1692059091565525489137.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "16/08/2023"
      },
      {
        "id": "1112026",
        "title": "Một ông Nông dân Việt Nam xuất sắc 2023 xưa đi làm thuê, nay là ông chủ 5 tàu cá “khủng” ở Ninh Thuận",
        "url": "https://danviet.vn/dua-5-tau-lon-di-danh-bat-ca-to-o-dai-duong-dao-lon-ngoai-bien-dong-mot-nguoi-ninh-thuan-la-ty-phu-20230814094452522-d1112026.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/14/img7213-1691978952352876600797-11-0-1261-2000-crop-16919803955091941112016.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/08/2023"
      },
      {
        "id": "1111658",
        "title": "Cấy lúa, làm bánh, một HTX ở Quảng Nam có doanh thu 30 tỷ/năm, ông giám đốc là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/cay-lua-lam-banh-mot-htx-o-quang-nam-thu-30-ty-nam-ong-chu-la-nong-dan-viet-nam-xuat-sac-2023-20230811213432527-d1111658.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/11/hinh-7-16917633574911413349846-81-0-1331-2000-crop-169176408936843329305.jpeg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "13/08/2023"
      },
      {
        "id": "1111409",
        "title": "Nông dân Việt Nam xuất sắc 2023 đến từ tỉnh Lạng Sơn là một người lập nghiệp với 1 sào ruộng",
        "url": "https://danviet.vn/hai-vo-chong-tre-o-lang-son-trong-thu-cay-ra-hoa-thom-khap-lang-ban-dat-tien-do-la-hoa-gi-20230810150056735-d1111409.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/10/unnamed-16916845233032075365280-83-0-1333-2000-crop-1691684528398626484972.png",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "12/08/2023"
      },
      {
        "id": "1111346",
        "title": "Nuôi loại cá đặc sản làm món gì cũng 'bá cháy', Nông dân Việt Nam xuất sắc 2023 ở Hậu Giang là tỷ phú",
        "url": "https://danviet.vn/nuoi-ca-that-lat-dac-san-lam-mon-gi-cung-ngon-ba-chay-mot-ong-nong-dan-hau-giang-la-ty-phu-20230810101129519-d1111346.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/10/nong-dan-xuat-ac-1691636706888696685260-111-178-1250-2000-crop-1691636724890644102765.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "10/08/2023"
      },
      {
        "id": "1111217",
        "title": "Mô hình trồng 6 ha lúa, sắm 8 máy gặt ở Trà Vinh của một Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/trong-lua-kieu-gi-ma-mot-nong-dan-tra-vinh-giau-han-len-la-nong-dan-viet-nam-xuat-sac-2023-20230809152534551-d1111217.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/9/nong-dan-xuat-sac-16915786607181807888192-0-166-1125-1966-crop-1691578709650325698397.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "10/08/2023"
      },
      {
        "id": "1111186",
        "title": "Hơn 35 năm “cưỡi sóng” bạc Hoàng Sa, một ngư dân Đà Nẵng được bình chọn là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/13-tuoi-da-ra-bien-danh-bat-toan-ca-to-bu-nay-anh-ngu-dan-da-nang-la-nong-dan-viet-nam-xuat-sac-20230809121338495-d1111186.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/9/hinh-1-16915564750291669973992-81-0-1331-2000-crop-16915577869621497479966.jpeg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "09/08/2023"
      },
      {
        "id": "1110829",
        "title": "Khám phá vườn mít ruột đỏ trái to bự ở Vĩnh Long của Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/trong-mit-ruot-do-trai-to-bu-vo-xem-vuon-tien-ty-o-vinh-long-cua-nong-dan-viet-nam-xuat-sac-2023-20230807165104275-d1110829.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/7/mit-ruot-do-1691409289179967838981-0-27-1125-1827-crop-1691409819523664879180.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "08/08/2023"
      },
      {
        "id": "1110423",
        "title": "Một thầy giáo ở Đà Nẵng làm thứ nước chấm 'quốc hồn quốc túy' là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/lam-nuoc-mam-quoc-hon-quoc-tuy-mot-thay-giao-da-nang-la-nong-dan-viet-nam-xuat-sac-2023-20230805132114314-d1110423.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/5/hinh-1-1691215522955255289468-81-0-1331-2000-crop-16912161691791936897129.jpeg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "06/08/2023"
      },
      {
        "id": "838178",
        "title": "Một Nông dân Việt Nam xuất sắc 2023 ở Quảng Bình sắm tàu săn cá ngừ, cá nục, có chuyến thu tiền tỷ",
        "url": "https://danviet.vn/sam-tau-san-ca-ngu-ca-nuc-mot-nong-dan-quang-binh-thu-tien-ty-ca-lang-phuc-lan-2023080516473601-d838178.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/5/z4577395603974a9128e3e403c99d74492ef81768a82e6-1691227831196667632734-175-109-651-871-crop-16912285289481949980829-5-8-476-762-crop-169122854580656887716.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "06/08/2023"
      },
      {
        "id": "1110328",
        "title": "Nông dân Việt Nam xuất sắc 2023 đến từ Sơn La là một người làm du lịch nông nghiệp, vườn đẹp như phim",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2023-den-tu-son-la-lam-du-lich-nong-nghiep-vuon-dep-nhu-phim-20230804191209338-d1110328.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/4/mot-nong-dan-lam-du-lich-nong-nghiep-o-son-la-tro-thanh-nong-dan-viet-nam-xuat-sac-2023-6-1691148841128167739007-0-36-720-1188-crop-169114886745571400263.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "05/08/2023"
      },
      {
        "id": "1102472",
        "title": "Xin tiền mua lẩu và bia, đi tìm... 'bí kíp' khởi nghiệp làm nông rồi thành luôn nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-nguyen-hong-quyet-va-niem-tran-tro-cung-nong-dan-lien-ket-lam-giau-20230626160736993-d1102472.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/1/nguyen-hong-quyet-htx-nong-nghiep-cong-nghe-cao-kim-long-xa-an-binh-huyen-phu-giao-tinh-binh-duong-giup-nong-dan-trong-dua-luoi-lam-giau-3-16908619548471370989155.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "04/08/2023"
      },
      {
        "id": "1110036",
        "title": "Một người Quảng Bình làm 13 sản phẩm OCOP từ hải sản là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/mot-ty-phu-nguoi-quang-binh-lam-13-san-pham-ocop-tu-hai-san-la-nong-dan-viet-nam-xuat-sac-2023-20230803112131246-d1110036.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/3/z3672427019625b1eed435e012760d221c195283e5df36-16910346234711510979089-146-20-1362-1965-crop-1691035614758517907846.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "04/08/2023"
      },
      {
        "id": "1109989",
        "title": "Tỷ phú nuôi lợn 5 lần 7 lượt suýt phá sản ở Hải Dương là Nông dân Việt Nam xuất sắc 2023",
        "url": "https://danviet.vn/ty-phu-nuoi-lon-5-lan-7-luot-suyt-pha-san-o-hai-duong-la-nong-dan-viet-nam-xuat-sac-2023-20230802234958371-d1109989.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/2/nong-dan-vn-xs-3-1690990912728346360198-0-0-997-1595-crop-1690993601944198577160.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "03/08/2023"
      },
      {
        "id": "1109782",
        "title": "Nông dân Việt Nam xuất sắc 2023 đến từ Hải Phòng trồng lúa, làm ra thứ gạo gì mà ai cũng muốn mua?",
        "url": "https://danviet.vn/cay-lua-lam-gao-ruoi-van-nguoi-me-o-hai-phong-chi-la-nong-dan-viet-nam-xuat-sac-2023-20230802072925888-d1109782.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/8/1/dai-dien-cam-gao-1690932407336812324400-0-70-577-993-crop-169093242321373712594.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "03/08/2023"
      },
      {
        "id": "1108800",
        "title": "Một nông dân từng nghèo rớt ở Hà Tĩnh giờ thành Nông dân Việt Nam xuất sắc 2023 nhờ thứ gỗ gì?",
        "url": "https://danviet.vn/lam-nha-go-mit-mot-nong-dan-ngheo-ha-tinh-gio-thanh-nong-dan-viet-nam-xuat-sac-2023-20230727175310967-d1108800.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/7/27/1-16904545782821049569839-83-0-1333-2000-crop-16904545853461992976125.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "02/08/2023"
      },
      {
        "id": "1109306",
        "title": "Nông dân Việt Nam xuất sắc 2023 đến từ Nghệ An làm trang trại VietGAP kiểu gì mà thu 25 tỷ/năm?",
        "url": "https://danviet.vn/trang-trai-cua-nong-dan-viet-nam-xuat-sac-2023-o-nghe-an-trong-gi-nuoi-gi-ma-thu-25-ty-nam-20230730161945593-d1109306.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/7/30/chi-tien-3-16907062453021146564983-40-0-1290-2000-crop-16907073138591352603212.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "30/07/2023"
      },
      {
        "id": "1104066",
        "title": "Chính thức công bố danh sách 100 Nông dân Việt Nam xuất sắc năm 2023",
        "url": "https://danviet.vn/cong-bo-danh-sach-100-nong-dan-viet-nam-xuat-sac-nam-2023-20230704105938897-d1104066.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/7/4/nong-dan-viet-nam-xuat-sac-16884419703582081428693-29-0-529-800-crop-1688442576768327507459.jpg",
        "sapo": "",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "04/07/2023"
      },
      {
        "id": "1099105",
        "title": "Đã tìm ra 100 Nông dân Việt Nam xuất sắc năm 2023, người có doanh thu cao nhất là 140 tỷ/năm",
        "url": "https://danviet.vn/da-tim-ra-100-nong-dan-viet-nam-xuat-sac-nam-2023-nguoi-co-doanh-thu-cao-nhat-la-140-ty-nam-20230609154812794-d1099105.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/6/9/hoi-nong-dan-1-16862996844381013216802-0-0-1250-2000-crop-16863000464511986153075.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "09/06/2023"
      },
      {
        "id": "1099052",
        "title": "Họp chấm chung khảo bình chọn 'Nông dân Việt Nam xuất sắc 2023'",
        "url": "https://danviet.vn/hinh-anh-hop-cham-chung-khao-binh-chon-nong-dan-viet-nam-xuat-sac-2023-20230609113907778-d1099052.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/6/9/1-16862834890711220856187-83-0-1333-2000-crop-16862836452601477741615.jpg",
        "sapo": "",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "09/06/2023"
      }
    ]
  },
  {
    "kicker": "Chương trình Tự hào Nông dân Việt Nam • Năm thứ 10 (2012 – 2022)",
    "title": "100 Nông dân Việt Nam xuất sắc 2022",
    "date": "Tối 14/10/2022",
    "location": "Nhà hát Lớn Hà Nội",
    "summary": "Dấu mốc 10 năm chương trình Tự hào Nông dân Việt Nam. Năm đầu tiên danh hiệu được trao cho 100 Nông dân Việt Nam xuất sắc thay vì 63 như các năm trước. Lễ tôn vinh diễn ra tối 14/10/2022 tại Nhà hát Lớn Hà Nội, truyền hình trực tiếp trên VTV1.",
    "stats": [
      {
        "value": 100,
        "suffix": "",
        "label": "Nông dân Việt Nam xuất sắc"
      },
      {
        "value": 10,
        "suffix": "",
        "label": "Năm chương trình"
      },
      {
        "value": 44,
        "suffix": "",
        "label": "Bài báo tư liệu"
      }
    ],
    "link": "https://danviet.vn/100-nong-dan-viet-nam-xuat-sac-2022-channel2715/",
    "linkLabel": "Xem chuyên trang 2022 trên Dân Việt",
    "year": 2022,
    "label": "2022",
    "cover": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/7/29/nong-dan-viet-nam-xuat-sac-2022-16590844317672133563244-0-0-1250-2000-crop-16590846714231743601433.jpeg",
    "featured": [
      {
        "tag": "Sự kiện & Vinh danh",
        "highlight": "29/07/2022",
        "title": "Chính thức công bố danh sách 100 'Nông dân Việt Nam xuất sắc' năm 2022",
        "sapo": "Ngày 29/7 đồng chí Lương Quốc Đoàn, Ủy viên Trung ương Đảng, Bí thư Đảng đoàn, Chủ tịch Ban Chấp hành Trung ương Hội Nông dân Việt Nam, Trưởng ban Chỉ đạo Chương trình Tự hào Nông dân Việt Nam đã ký Quyết định số 5732-QĐ/HNDTW quyết định công bố danh sách 100 Nông dân Việt Nam xuất sắc năm 2022.",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/7/29/nong-dan-viet-nam-xuat-sac-2022-16590844317672133563244-0-0-1250-2000-crop-16590846714231743601433.jpeg",
        "url": "https://danviet.vn/cong-bo-danh-sach-100-nong-dan-viet-nam-xuat-sac-nam-2022-2022072914373731-d830599.html"
      },
      {
        "tag": "Gương mặt điển hình",
        "highlight": "08/08/2022",
        "title": "Nông dân xuất sắc 2022 đến từ Hà Giang là người làm du lịch giỏi, giúp bản Lô Lô Chải ngày càng trù phú",
        "sapo": "Buổi sáng ở miền biên viễn cực Bắc của Tổ quốc, vợ chồng Sình Dỉ Gai ngồi trước hiên nhà trình tường cổ kính, họ pha sẵn ấm trà, gọt những trái lê chờ đón chúng tôi. Sau cái bắt tay ấm tình, anh say sưa tâm sự về bản thân mình và sự đổi thay của bản Lô Lô Chải đẹp như mơ.",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/7/220220503081835-16598852255461237661747-59-0-1184-1800-crop-16598852370621098942665.jpg",
        "url": "https://danviet.vn/nong-dan-xuat-sac-2022-den-tu-ha-giang-la-nguoi-lam-du-lich-gioi-o-ban-lo-lo-chai-20220808004131447-d1035921.html"
      },
      {
        "tag": "Gương mặt điển hình",
        "highlight": "05/08/2022",
        "title": "Nông dân Việt Nam xuất sắc 2022 tỉnh Thanh Hóa là người làm đổi thay các làng quê trồng lúa xứ Thanh",
        "sapo": "Sau khi trở về từ quân ngũ, ông Nguyễn Hữu Lựu bắt tay vào làm kinh tế và thành lập doanh nghiệp chế biến nông sản, tạo ra chuỗi liên kết khép kín được chính quyền địa phương và người dân ủng hộ rất cao. Năm 2022, ông là 1 trong 100 nông dân điển hình cả nước được bình chọn nhận danh hiệu Nông dân Việt Nam xuất sắc.",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/4/z36168241996445eef677204e5a48d633f9d4d6a651d67-1659574633310577327483-170-0-1420-2000-crop-16595754563331933407933.jpg",
        "url": "https://danviet.vn/ty-phu-nong-dan-trong-lua-che-bien-kinh-doanh-gao-thanh-hoa-la-nong-dan-viet-nam-xuat-sac-2022-20220804081446518-d1035163.html"
      }
    ],
    "articleCount": 44,
    "articles": [
      {
        "id": "1047585",
        "title": "Bỏ việc về nuôi gà, chăn lợn thu tiền tỷ, một y tá người Vĩnh Phúc là Nông dân Việt Nam xuất sắc 2022",
        "url": "https://danviet.vn/bo-viec-ve-nuoi-ga-thu-tien-ty-mot-y-ta-nguoi-vinh-phuc-la-nong-dan-viet-nam-xuat-sac-2022-20221004092156258-d1047585.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/10/4/c0109t01-1664849403301816229062-0-0-720-1152-crop-16648500236612012229644.jpg",
        "sapo": "Với niềm đam mê với nghề chăn nuôi qua mô hình nuôi gà, chị Ngô Thị Tâm (xã Liên Châu, huyện Yên Lạc) đã đại diện cho hàng vạn nông dân tỉnh Vĩnh Phúc trở thành một trong 100 nông dân Việt Nam xuất sắc khi khởi nghiệp ở tuổi 40.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "04/10/2022"
      },
      {
        "id": "1047481",
        "title": "Nông dân Việt Nam xuất sắc 2022 đến từ Tây Ninh là tỷ phú trồng sầu riêng, tre Đài Loan bán măng đếm không xuể",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2022-den-tu-tinh-tay-ninh-la-ty-phu-trong-sau-rieng-tre-dai-loan-20221003170404879-d1047481.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/10/3/1-tong-thanh-duc-tay-ninh-nong-dan-viet-nam-xuat-sac-2022-1664790811097584316520.jpg",
        "sapo": "Ông Tống Thanh Đức ở xã Truông Mít (huyện Dương Minh Châu, tỉnh Tây Ninh) có 25ha đất, trên diện tích này, ông trồng sầu riêng, tre Đài Loan bán măng, nhãn tiêu da bò, cao su, lúa, đậu phộng mỗi năm lãi 3 tỷ. Ông là tỷ phú nông dân và được bình chọn là 1 trong 100 Nông dân Việt Nam xuất sắc 2022.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "04/10/2022"
      },
      {
        "id": "1046609",
        "title": "Nuôi bò kết hợp trồng cây keo trên hơn 200ha rừng, nông dân Phú Thọ lãi trên 4 tỷ mỗi năm",
        "url": "https://tv.danviet.vn/nuoi-bo-ket-hop-trong-cay-keo-tren-hon-200ha-rung-nong-dan-phu-tho-lai-tren-4-ty-moi-nam-20220929164404324.htm",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/9/29/phong-su-2021-00-20-59-24-still1509-1664444407134493919755-0-31-1080-1759-crop-166444441138610172392.jpg",
        "sapo": "Với tinh thần dám nghĩ dám làm, sau hơn 20 năm đầu tư vào trồng rừng, đến nay ông Đỗ Quốc Thuận (huyện Thanh Sơn, Phú Thọ) đang sở hữu hơn 200ha rừng cây keo đồng thời kết hợp nuôi hơn 200 con bò mang lại lợi nhuận mỗi năm trên 4 tỷ đồng.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "29/09/2022"
      },
      {
        "id": "1044095",
        "title": "Video: Nữ giám đốc người Chăm phủ xanh cát trắng bằng loại 'rau vua' là Nông dân Việt Nam xuất sắc 2022 ở Ninh Thuận",
        "url": "https://tv.danviet.vn/video-nu-giam-doc-nguoi-cham-phu-xanh-cat-trang-bang-loai-rau-vua-la-nong-dan-viet-nam-xuat-sac-2022-o-ninh-thuan-20220917112230093.htm",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/9/17/dan-viet-nam-xuat-sac-2022-o-ninh-thuan-la-nu-giam-doc-nguoi-cham-phu-xanh-cat-trang-bang-loai-rau-vua-166338760208431014008-0-0-1080-1728-crop-1663387607452477117442.jpg",
        "sapo": "Xuất thân trong gia đình thuần nông người Chăm, quanh năm bán mặt cho đất, bán lưng cho trời giữa miền cát trắng khô cằn ở Ninh Thuận, nhưng bằng quyết tâm và nghị lực, bà Châu Thị Xéo ở huyện Ninh Phước đã vươn lên làm giàu trên mảnh đất quê hương với loài cây được mệnh danh “vua của các loại rau”.",
        "category": "Hình ảnh & Video",
        "location": "",
        "date": "17/09/2022"
      },
      {
        "id": "1042204",
        "title": "Chàng nông dân trẻ Bình Phước 'mách nước' chi tiết cách làm nông nghiệp thông minh thu nhập hàng tỷ đồng",
        "url": "https://tv.danviet.vn/chang-nong-dan-tre-binh-phuoc-mach-nuoc-chi-tiet-cach-lam-nong-nghiep-thong-minh-thu-nhap-hang-ty-dong-20220908124951581.htm",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/9/8/dung-ca-lam-phan-bon-tuoi-nuoc-thong-qua-smartphone-chang-nong-dan-tre-thu-nhap-hang-ty-dong-16626161199581084231141-0-136-1080-1864-crop-1662616127448892343808.jpg",
        "sapo": "Du học Pháp với chuyên ngành Hệ thống tự động và thông tin trở về, anh Đặng Dương Minh Hoàng (sinh năm 1988) hiện đang là chủ nông trại Thiên Nông (xã Phú Văn, huyện Bù Gia Mập, tỉnh Bình Phước) rộng 50ha với tất cả cây trồng trong vườn đều được theo dõi từ xa nhờ áp dụng IoT (Internet of thing) vào nông nghiệp.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "08/09/2022"
      },
      {
        "id": "1041791",
        "title": "Video: Nông dân Hải Dương ngâm rượu từ nấm đông trùng và tỏi thu lãi hàng tỷ đồng mỗi năm",
        "url": "https://tv.danviet.vn/nong-dan-hai-duong-ngam-ruou-tu-nam-dong-trung-va-toi-thu-lai-hang-ty-dong-moi-nam-20220906152845839.htm",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/9/6/ndxs-hai-duong-1661762742671544829651-16617630517631333818016-1662452736757531562391-39-0-1083-1670-crop-1662452748647114055494.jpeg",
        "sapo": "Anh Trần Đình Khiêm (SN 1972, ở khu dân cư Hiệp Thượng, phường Hiệp Sơn, TX Kinh Môn, tỉnh Hải Dương) đã thành công trong việc nuôi nấm đông trùng để ngâm rượu. Ngoài ra anh còn ngâm rượu từ nhiều loại nông sản đặc sản địa phương như tỏi đen, nếp cái… thu về lợi nhuận hàng tỷ đồng mỗi năm.",
        "category": "Hình ảnh & Video",
        "location": "",
        "date": "06/09/2022"
      },
      {
        "id": "1040287",
        "title": "Phú Thọ là tỉnh duy nhất cả nước có 3 Nông dân Việt Nam xuất sắc năm 2022",
        "url": "https://danviet.vn/tinh-duy-nhat-ca-nuoc-co-3-nong-dan-dat-danh-hieu-nong-dan-viet-nam-xuat-sac-nam-2022-20220829163155627-d1040287.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/29/a4-1661764558718980950977-0-19-382-630-crop-1661764568280260542412.jpg",
        "sapo": "3 nông dân tỉnh Phú Thọ đạt danh hiệu “Nông dân Việt Nam xuất sắc 2022” là những nhân tố tích cực đi đầu trong đổi mới mô hình phát triển nông nghiệp, xây dựng nông thôn mới của tỉnh Phú Thọ nói riêng và cả nước nói chung.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "29/08/2022"
      },
      {
        "id": "1038873",
        "title": "Ông chủ 9X có nhà máy chế biến lúa gạo hoành tráng ở Thanh Hóa là 'Nông dân Việt Nam xuất sắc 2022'",
        "url": "https://danviet.vn/ong-chu-9x-co-nha-may-che-bien-lua-gao-hoanh-trang-o-thanh-hoa-la-nong-dan-viet-nam-xuat-sac-2022-20220822152059961-d1038873.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/22/z3661978496683df477932d16a32716fc4ccde718410dc-16611546816172083836818-166-0-1416-2000-crop-16611562292701606266502.jpg",
        "sapo": "Nhận thấy những tiềm năng, lợi thế phát triển các sản phẩm lúa gạo tại địa phương, anh Đỗ Thế Anh bắt tay vào xây dựng nhà máy chế biến lúa gạo, xây dựng thành công chuỗi lúa gạo liên kết cùng người nông dân làm giàu. Anh Đỗ Thế Anh đã được bình chọn nhận danh hiệu \"Nông dân Việt Nam xuất sắc 2022\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "26/08/2022"
      },
      {
        "id": "1039044",
        "title": "Nông dân Việt Nam xuất sắc 2022 đến từ Cà Mau nuôi sò huyết thu tiền tỷ, tay ngang nuôi tôm công nghệ cao",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2022-den-tu-tinh-ca-mau-nuoi-so-huyet-thu-tien-ty-20220823115925683-d1039044.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/23/4-16612299541881103011971-257-0-1507-2000-crop-166123042174980700017.jpg",
        "sapo": "Ngoài nuôi tôm công nghệ cao, nông dân Việt Nam xuất sắc 2022 Nguyễn Viết Hoài (ngụ xã Hiệp Tùng, huyện Năm Căn, tỉnh Cà Mau) thu lãi hàng tỷ đồng từ mô hình nuôi sò huyết.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "25/08/2022"
      },
      {
        "id": "1039547",
        "title": "Một tỷ phú nuôi gà đẻ ở Hải Dương được bình chọn là 'Nông dân Việt Nam xuất sắc 2022'",
        "url": "https://danviet.vn/nong-dan-ty-phu-nuoi-ga-de-o-hai-duong-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-2022-20220825164915106-d1039547.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/25/ga5-16614198381111580464210-60-0-1310-2000-crop-1661420526180709143332.jpg",
        "sapo": "Từ trang trại gà đẻ 70.000 con, mỗi năm trừ chi phí ông Đào Hữu Thuân, tỷ phú nông dân xã Cẩm Đông, (huyện Cẩm Giàng, tỉnh Hải Dương) đã thu về khoảng 2 tỷ đồng. Ông Thuân là một trong 100 nhà nông tiêu biểu được bình chọn nhận danh hiệu \"Nông dân Việt Nam xuất sắc 2022\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "25/08/2022"
      },
      {
        "id": "1037667",
        "title": "Nông dân xuất sắc 2022 đến từ Trà Vinh là người từng đi cắt lúa mướn",
        "url": "https://danviet.vn/nong-dan-xuat-sac-2022-den-tu-tra-vinh-la-nguoi-tung-di-cat-lua-muon-20220816125910585-d1037667.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/23/nong-dan-xuat-sac-1661246462199558659943-20-0-1270-2000-crop-1661246862068315057743.jpg",
        "sapo": "Ông Trần Văn Chung (SN 1964) - Giám đốc Hợp tác xã (HTX) Nông nghiệp Phát Tài ở ấp Ô Tre Lớn, xã Thanh Mỹ, huyện Châu Thành, tỉnh Trà Vinh từng đi cắt lúa mướn đã trở thành \"Nông dân xuất sắc 2022\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "24/08/2022"
      },
      {
        "id": "1039247",
        "title": "Chàng thanh niên Ê Đê bỏ nghề bác sĩ về làm cà phê, trở thành Nông dân Việt Nam xuất sắc 2022",
        "url": "https://tv.danviet.vn/chang-thanh-nien-e-de-bo-nghe-bac-si-ve-lam-ca-phe-20220824113700941.htm",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/24/phong-su-2021-00-39-29-04-still1309-16613157351302085210823-0-23-1080-1751-crop-1661315738095849612780.jpg",
        "sapo": "Đang làm bác sĩ, chàng trai Y Pốt Niê đã nghỉ việc về buôn để xây dựng nên thương hiệu cà phê Ê Đê. Không chỉ nhận được nhiều đơn hàng trong nước, đến nay, thương hiệu cà phê Ê Đê còn chinh phục nhiều đối tác nước ngoài thu mua và nhập khẩu.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "24/08/2022"
      },
      {
        "id": "1039059",
        "title": "Nông dân sáng chế máy nông nghiệp là người Tiền Giang được bình chọn danh hiệu Nông dân Việt Nam xuất sắc 2022",
        "url": "https://danviet.vn/nong-dan-sang-che-may-nguoi-tien-giang-duoc-binh-chon-danh-hieu-nong-dan-viet-nam-xuat-sac-2022-20220823132616631-d1039059.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/23/20-1661235637752836070508-0-139-1125-1939-crop-1661235649882963051913.jpg",
        "sapo": "Nông dân Việt Nam xuất sắc 2022 Dương Quốc Thái (xã Hậu Mỹ Bắc B, huyện Cái Bè, tỉnh Tiền Giang) tự cho mình là “kỹ sư chân đất”. Những nông cụ tự chế của anh rất được bà con nông dân ĐBSCL tin dùng bởi hiệu quả cao, bền, đẹp.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "24/08/2022"
      },
      {
        "id": "1038812",
        "title": "Vườn bưởi đặc sản của ông nông dân Hòa Bình, người được bình chọn là Nông dân Việt Nam xuất sắc 2022",
        "url": "https://danviet.vn/vuon-buoi-dac-cua-ong-nong-dan-hoa-binh-nguoi-duoc-binh-chon-nong-dan-viet-nam-xuat-sac-2022-20220822102820797-d1038812.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/22/20220817-171009-1661137186890581799724-0-280-901-1722-crop-1661137202465473462457.jpg",
        "sapo": "Cây bưởi nào trong vườn của ông Vũ Văn Thái, thôn Đại Đồng, xã Ngọc Lương, huyện Yên Thủy, tỉnh Hòa Bình cũng sai trĩu quả và cho chất lượng ổn định. Ông Thái là một trong 100 nhà nông tiêu biểu của cả nước được Hội đồng Chung khảo bình chọn nhận dạnh hiệu \"Nông dân Việt Nam xuất sắc 2022\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "23/08/2022"
      },
      {
        "id": "1037616",
        "title": "Trồng đủ thứ cây, lại còn nuôi thêm bò, một ông nông dân Trà Vinh thành 'Nông dân Việt Nam xuất sắc 2022'",
        "url": "https://danviet.vn/trong-du-thu-cay-nuoi-ca-bo-nong-dan-tra-vinh-tro-thanh-nong-dan-viet-nam-xuat-sac-2022-20220816095002027-d1037616.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/22/nong-dan-xuat-sac-2022-16611581871311547638995-83-0-1333-2000-crop-1661158675862273486250.jpg",
        "sapo": "Nhờ sản xuất hạt giống, trồng cây giống, trồng rau màu, trồng thêm cây thanh nhãn và chăn nuôi bò, anh Nguyễn Văn Cường (SN 1980) ở ấp Rạch Vồn, xã Hưng Mỹ, huyện Châu Thành, tỉnh Trà Vinh được bình chọn là \"Nông dân Việt Nam xuất sắc 2022\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "23/08/2022"
      },
      {
        "id": "1038964",
        "title": "Nông dân Việt Nam xuất sắc năm 2022 đến từ Gia Lai là tỷ phú nuôi trâu bò thả rông ăn cỏ dại",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2022-den-tu-gia-lai-la-ty-phu-nuoi-trau-bo-tha-rong-an-co-20220823030731532-d1038964.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/23/20220815171124-1661197676871383758010-250-0-1500-2000-crop-16611977595094741799.jpg",
        "sapo": "Từ công việc chăn nuôi trâu bò thả rông, ông Huỳnh Văn Ánh, tỷ phú nông dân trú tại xã Ia Hrú, huyện Chư Pưh (tỉnh Gia Lai) đã có thu nhập hàng tỷ đồng/năm. Ông mới đây đã được bình chọn là 1 trong 100 nông dân Việt Nam xuất sắc năm 2022.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "23/08/2022"
      },
      {
        "id": "1038673",
        "title": "Nông dân Việt Nam xuất sắc 2022 đến từ Bắc Ninh lập HTX trồng rau an toàn, nhiều hộ thành viên xây nhà tiền tỷ",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2022-den-tu-bac-ninh-lap-htx-trong-rau-an-toan-nhieu-ho-xay-nha-tien-ty-20220821141947454-d1038673.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/21/nong-dan-viet-nam-xuat-sac-2022-1-16610967236931303716462-83-0-1333-2000-crop-1661096745534949776973.jpg",
        "sapo": "Là Giám đốc HTX sản xuất rau củ quả nông sản an toàn Liên Ấp, ông Nguyễn Văn Hiệp ở xã Việt Đoàn, huyện Tiên Du, tỉnh Bắc Ninh đã tạo ra mô hình HTX kiểu mới hoạt động có hiệu quả cao. Ông Nguyễn Văn Hiệp vừa được Hội đồng Chung khảo Trung ương bình chọn nhận danh hiệu \"Nông dân Việt Nam xuất sắc 2022\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "22/08/2022"
      },
      {
        "id": "1038880",
        "title": "Người biến rác thành phân hữu cơ, tái chế nhựa ở Tuyên Quang là Nông dân Việt Nam xuất sắc 2022",
        "url": "https://danviet.vn/nguoi-bien-rac-thanh-phan-huu-co-tai-che-nhua-o-tuyen-quang-la-nong-dan-viet-nam-xuat-sac-2022-20220822154251451-d1038880.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/22/anh-7-16611569088131020680936-0-109-1125-1909-crop-16611574381861550332264.jpg",
        "sapo": "Với phương châm “Mang không gian trong lành, sạch đẹp đến mỗi nhà, từng ngõ, xóm”, HTX vận tải và dịch vụ môi trường Thanh Bình (TP Tuyên Quang, tỉnh Tuyên Quang) đã góp phần rất lớn vào công tác vệ sinh môi trường. Với những đóng góp của mình, ông Nguyễn Hữu Hoạch, Giám đốc HTX được bình chọn là Nông dân Việt Nam xuất sắc 2022.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "22/08/2022"
      },
      {
        "id": "1038052",
        "title": "Nông dân Việt Nam xuất sắc 2022 ở Sơn La thu hơn nửa tỷ mỗi năm nhờ trồng cam đường canh",
        "url": "https://tv.danviet.vn/nong-dan-viet-nam-xuat-sac-2022-o-son-la-thu-hon-nua-ty-moi-nam-nho-trong-cam-duong-canh-20220818100358515.htm",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/18/img6828-16607913675381969977684-83-0-1333-2000-crop-16607916627041699017806.jpg",
        "sapo": "Với những nỗ lực, cố gắng trong cả một quá trình, ông Hàng A Sở (dân tộc Mông, sinh năm 1955, tiểu khu Pa Khen, thị trấn Nông trường Mộc Châu, huyện Mộc Châu, tỉnh Sơn La) được bình chọn là \"Nông dân Việt Nam Việt Nam xuất sắc 2022\". Nhờ ứng dụng khoa học kỹ thuật trồng cam đường canh, ông Sở thu hơn nửa tỷ/năm.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "18/08/2022"
      },
      {
        "id": "1035268",
        "title": "Một người Vĩnh Long đập bỏ lò gạch 1 tỷ, chuyển sang trồng nhãn Ido thành Nông dân Việt Nam xuất sắc 2022",
        "url": "https://danviet.vn/mot-nguoi-vinh-long-dap-lo-gach-1-ty-chuyen-trong-nhan-ido-thanh-nong-dan-viet-nam-xuat-sac-2022-20220804150203299-d1035268.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/14/ndxs-2022-16604684036741692319271-67-0-1317-2000-crop-16604691372701460212824.jpg",
        "sapo": "Đập bỏ lò gạch trị giá 1 tỷ, ông Trương Hoàng Phương (ấp Phú Thuận A, xã Nhơn Phú, huyện Mang Thít, tỉnh Vĩnh Long) chuyển sang trồng nhãn Ido thu hàng trăm triệu/năm. Ông Trương Hoàng Phương vừa được Hội đồng Chung khảo Trung ương bình chọn nhận danh hiệu \"Nông dân Việt Nam xuất sắc 2022\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "17/08/2022"
      },
      {
        "id": "830953",
        "title": "Đói phải ăn củ mài từ bé, nay một người dân tộc Mông ở Sơn La là 'Nông dân Việt Nam xuất sắc 2022'",
        "url": "https://danviet.vn/doi-phai-an-cu-mai-tu-be-nay-mot-nguoi-dan-toc-mong-o-son-la-la-nong-dan-viet-nam-xuat-sac-2022-2022081519454731-d830953.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/15/img6784-1660566172348648553367-83-0-1333-2000-crop-16605662500311021094201.jpg",
        "sapo": "Sinh ra trong một gia đình có tới 11 anh chị em nên ông Hàng A Sở, dân tộc Mông ở Sơn La – người được bình chọn là “Nông dân Việt Nam xuất sắc 2022” từng phải ăn củ mài từ bé. Với quyết tâm thoát nghèo, ông Sở đã mạnh dạn áp dụng khoa học kỹ thuật trồng cây ăn quả, nhờ đó ông lãi 1,2 tỷ/năm.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "16/08/2022"
      },
      {
        "id": "830898",
        "title": "Nông dân Việt Nam xuất sắc 2022 xuất thân ngư dân, trở thành 'vua tôm thẻ' ở Quảng Bình",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2022-xuat-than-ngu-dan-tro-thanh-vua-tom-the-dat-quang-binh-2022081308181984-d830898.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/13/z363879020902385174f971082d26c529e886466b49bf1-1-1660352432748309760987-0-55-720-1207-crop-166035307225923079286.jpg",
        "sapo": "Ông Hoàng Minh Thắng (thôn Cừa Thôn, xã Hải Ninh, huyện Quảng Ninh, tỉnh Quảng Bình) được bình chọn là \"Nông dân Việt Nam xuất sắc 2022\". Với việc áp dụng khoa học kĩ thuật vào nuôi tôm, nuôi lợn… ông Thắng thu về gần 9 tỷ/năm, sau khi trừ chi phí cho lãi khoảng 2 tỷ đồng/năm.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "14/08/2022"
      },
      {
        "id": "1036808",
        "title": "Nông dân Việt Nam xuất sắc 2022 đến từ Thái Nguyên là Giám đốc HTX làm nên một thứ quà tặng Hội nghị APEC",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2022-den-tu-thai-nguyen-la-giam-doc-htx-lam-mot-thu-qua-tang-afec-20220811225059882-d1036808.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/11/img0635-16602328633411713045246-83-0-1333-2000-crop-1660232894654177323437.jpg",
        "sapo": "Chị Trần Thị Tuyết - Giám đốc HTX Tuyết Hương là người góp công lớn trong việc nâng cao giá trị sản phẩm chè ở vùng Đồng Hỷ, tỉnh Thái Nguyên. Với việc xây dựng thương hiệu chè Tuyết Hương, chị Tuyết được bình chọn là \"Nông dân Việt Nam xuất sắc 2022\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "13/08/2022"
      },
      {
        "id": "1036498",
        "title": "Nữ tỷ phú làm chả cá ở Khánh Hòa được bình chọn danh hiệu 'Nông dân Việt Nam xuất sắc 2022'",
        "url": "https://danviet.vn/nu-ty-phu-lam-cha-ca-o-khanh-hoa-duoc-binh-chon-danh-hieu-nong-dan-viet-nam-xuat-sac-2022-20220810152710465-d1036498.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/10/chon-cha-ca-2-1660119302038261345036-53-0-1303-2000-crop-16601193709621898364443.jpg",
        "sapo": "Trong suốt hơn 3 tiếng đồng hồ trò chuyện, nữ tỷ phú Phạm Thị Thuận nói vô cùng say mê với nghề làm chả cá. Vừa qua, Hội đồng Bình chọn chung khảo Trung ương Chương trình Tự hào Nông dân Việt Nam bình chọn chị Thuận là 100 nông dân cả nước nhận danh hiệu \"Nông dân Việt Nam xuất sắc 2022\"",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "11/08/2022"
      },
      {
        "id": "1036495",
        "title": "Trồng cây cảnh, trồng hoa như 'vườn thượng uyển', một tỷ phú Hà Giang là 'Nông dân Việt Nam xuất sắc 2022'",
        "url": "https://danviet.vn/ty-phu-trong-cay-canh-trong-hoa-dep-nhu-phim-o-ha-giang-la-nong-dan-viet-nam-xuat-sac-2022-20220810152216595-d1036495.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/11/ndt47210-1660193817788918081167-42-0-1292-2000-crop-16602040796691717451336.jpg",
        "sapo": "Ông Trần Văn Giang, tỷ phú trồng cây cảnh, trồng hoa ở thôn Mỹ Tân, xã Tân Quang (huyện Bắc Quang, tỉnh Hà Giang) vừa được bình chọn là \"Nông dân Việt Nam xuất sắc 2022\". Ông Trần Văn Giang, Trưởng thôn Mỹ Tân nói với phóng viên Báo điện tử Dân Việt rằng, bây giờ trong thôn có nhiều tỷ phú lắm...",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "11/08/2022"
      },
      {
        "id": "1036117",
        "title": "Nông dân Việt Nam xuất sắc 2022 đến từ Quảng Ninh là một người trồng, chế biến dược liệu, doanh thu tiền tỷ",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2022-den-tu-quang-ninh-la-nguoi-trong-che-bien-duoc-lieu-thu-tien-ty-20220809001715595-d1036117.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/10/trong-duoc-lieu-1-1660111518382998707654-0-0-1250-2000-crop-16601115246331609457882.jpg",
        "sapo": "Nhiều lần thất bại, thậm chí thua lỗ, nhưng ông Phạm Việt Trung vẫn kiên trì theo đuổi việc trồng, chế biến dược liệu. Doanh nghiệp do ông Trung làm giám đốc thu lãi hàng tỷ đồng mỗi năm và ông được bình chọn danh hiệu \"Nông dân Việt Nam xuất sắc 2022\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "10/08/2022"
      },
      {
        "id": "1035857",
        "title": "Nông dân Việt Nam xuất sắc 2022 đến từ Quảng Bình là người có biệt danh 'Sói biển' săn cá Biển Đông",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2022-den-tu-quang-binh-la-nguoi-co-biet-danh-soi-bien-sat-ca-bien-dong-20220807135817812-d1035857.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/7/z36239109892933e35cfa9e4649acd595d9aad9bd9c9a0-16598544277911577367052-20-0-1270-2000-crop-165985535050737275922.jpg",
        "sapo": "Ngư dân Phạm Tuyển (SN 1982, ở xã Bảo Ninh, TP. Đồng Hới, tỉnh Quảng Bình) là Nông dân Việt Nam xuất sắc 2022. Với việc áp dụng khoa học kĩ thuật vào đánh bắt hải sản, ngư dân Phạm Tuyển thường xuyên thắng đậm những chuyến vươn khơi. Tàu của ông vừa trúng đậm luồng cá nục 250 tấn, thu về 2,4 tỷ đồng.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "09/08/2022"
      },
      {
        "id": "1035921",
        "title": "Nông dân xuất sắc 2022 đến từ Hà Giang là người làm du lịch giỏi, giúp bản Lô Lô Chải ngày càng trù phú",
        "url": "https://danviet.vn/nong-dan-xuat-sac-2022-den-tu-ha-giang-la-nguoi-lam-du-lich-gioi-o-ban-lo-lo-chai-20220808004131447-d1035921.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/7/220220503081835-16598852255461237661747-59-0-1184-1800-crop-16598852370621098942665.jpg",
        "sapo": "Buổi sáng ở miền biên viễn cực Bắc của Tổ quốc, vợ chồng Sình Dỉ Gai ngồi trước hiên nhà trình tường cổ kính, họ pha sẵn ấm trà, gọt những trái lê chờ đón chúng tôi. Sau cái bắt tay ấm tình, anh say sưa tâm sự về bản thân mình và sự đổi thay của bản Lô Lô Chải đẹp như mơ.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "08/08/2022"
      },
      {
        "id": "830796",
        "title": "Nông dân Việt Nam xuất sắc 2022 đến từ An Giang là Chủ tịch HĐQT HTX trồng lúa dùng máy bay không người lái",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2022-den-tu-an-giang-la-chu-tich-hdqt-htx-dung-may-bay-khong-nguoi-lai-2022080718252662-d830796.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/7/z36255243570098b8648435083b53d3d012fce655e4536-1659870231810620331803-47-0-1297-2000-crop-1659870921079227689363.jpg",
        "sapo": "Cùng 49 nông dân thành viên liên kết sản xuất lúa theo những mô hình tiên tiến nhất, sử dụng máy bay không người lái, đảm bảo lợi nhuận cho xã viên mỗi năm trên 30%, anh Nguyễn Thành Giang - Chủ tịch HĐQT HTX nông nghiệp Bình Thành (xã Bình Thành, huyện Thoại Sơn, tỉnh An Giang) được bình chọn là Nông dân Việt Nam xuất sắc năm 2022.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "08/08/2022"
      },
      {
        "id": "1035884",
        "title": "Ông chủ trại gà to nhất nhì tỉnh Thái Bình là nông dân Việt Nam xuất sắc năm 2022",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-nam-2022-cua-thai-binh-la-ong-chu-trai-ga-to-nhat-huyen-20220807180528236-d1035884.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/7/nong-dan-viet-nam-xuat-sac-2022-6-16598701810991746919054-79-0-1287-1933-crop-1659870200595447874676.jpg",
        "sapo": "Gần chục năm gắn bó với nghề chăn nuôi, đến nay, anh Phạm Xuân Thủy ở xóm 2, xã Vũ Đoài, huyện Vũ Thư, tỉnh Thái Bình đã trở thành tỷ phú với cơ ngơi 13 trại nuôi lợn, gà khép kín. Anh cũng được bình chọn là 1 trong 100 nông dân Việt Nam xuất sắc năm 2022.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "08/08/2022"
      },
      {
        "id": "1035922",
        "title": "Nông dân Việt Nam xuất sắc 2022 với triết lý làm kinh tế 'kiềng ba chân'",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2022-voi-triet-ly-lam-kinh-te-kieng-ba-chan-20220808004651155-d1035922.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/8/cover-dv-16598937976181325251913.jpg",
        "sapo": "Trong lúc dịch tả lợn châu Phi vẫn đang \"rình rập\" khắp nơi, giá thức chăn nuôi tăng phi mã... nhưng anh Hoàng Văn Khánh (sinh năm 1982), chủ trang trại lợn quy mô lớn ở xã Yên Thái, huyện Yên Mỹ (Hưng Yên) vẫn bình chân như vại.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "08/08/2022"
      },
      {
        "id": "795378",
        "title": "Nông dân xuất sắc 2022 Nguyễn Văn Hùng và lương duyên tiền tỷ với tảo xoắn, thành 'vua' tảo miền Trung",
        "url": "https://danviet.vn/nong-dan-xuat-sac-2022-nguyen-van-hung-o-nghe-an-co-moi-luong-duyen-tien-ty-voi-tao-xoan-20220806160239-d795378.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/6/anh-13-16597760119701348532657-0-0-1200-1920-crop-16597760191241835615045.jpg",
        "sapo": "Sau 1 biến cố về sức khỏe, ông Nguyễn Văn Hùng (Nghệ An) \"bén duyên\" với tảo xoắn, từ giám đốc công ty bất động sản, khai thác khoáng sản có tiếng \"bổng\" trở thành \"Nông dân xuất sắc 2022\" khi nuôi trồng được giống tảo kỳ diệu này trên quê hương xã Quỳnh Dị, Thị xã Hoàng Mai, tỉnh Nghệ An.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "07/08/2022"
      },
      {
        "id": "1035764",
        "title": "Nuôi tôm công nghệ cao thu tiền tỷ, nông dân Bạc Liêu được bình chọn danh hiệu 'Nông dân Việt Nam xuất sắc 2022'",
        "url": "https://danviet.vn/nuoi-tom-cong-nghe-cao-thu-tien-ty-nong-dan-bac-lieu-la-nong-dan-viet-nam-xuat-sac-2022-20220806235354864-d1035764.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/6/1-16598032416061660959353-105-0-1355-2000-crop-1659803483031711717407.jpg",
        "sapo": "Dù trải qua nhiều thất bại, ông Nguyễn Văn Hoạt (SN 1963, ngụ xã Hiệp Thành, TP Bạc Liêu, tỉnh Bạc Liêu) vẫn kiên trì theo đuổi nghề nuôi tôm. Chính nhờ sự kiên trì, tinh thần ham học hỏi, ông Hoạt thu lãi mỗi năm hàng tỷ đồng nhờ nuôi tôm công nghệ cao và được bình chọn nhận danh hiệu \"Nông dân Việt Nam xuất sắc 2022\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "07/08/2022"
      },
      {
        "id": "1035668",
        "title": "Nông dân Việt Nam xuất sắc 2022 đến từ Ninh Bình là một người giỏi chăn nuôi, chưa hề thất bại khi nuôi lợn",
        "url": "https://danviet.vn/mot-nguoi-gioi-chan-nuoi-o-ninh-binh-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-2022-20220806130903335-d1035668.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/6/20220726100950-16597630392031168743092-238-0-1488-2000-crop-1659766172530982883830.jpg",
        "sapo": "Bà Trần Thị Thục (sinh năm 1984, xóm 7, xã Như Hòa, huyện Kim Sơn, tỉnh Ninh Bình) là nông dân Việt Nam xuất sắc 2022. Bà Thục được biết đến với mô hình phát triển kinh tế tổng hợp: chăn nuôi gia súc, gia cầm, nuôi trồng thủy sản và trồng trọt…nhiều năm liền thành công, đem lại thu nhập cho gia đình hơn 2 tỉ đồng/năm.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "06/08/2022"
      },
      {
        "id": "1035679",
        "title": "Chủ tịch Trung ương Hội Nông dân Việt Nam: Nông dân Việt Nam xuất sắc là thành tố quan trọng thúc đẩy liên kết",
        "url": "https://danviet.vn/chu-tich-trung-uong-hoi-nong-dan-viet-nam-an-tuong-voi-mo-hinh-cua-nong-dan-xuat-sac-2022-20220806143447472-d1035679.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/6/4-nong-dan-viet-nam-xuat-sac--16597707878861324804821.jpg",
        "sapo": "Cùng với Hội Nông dân các cấp, nông dân sản xuất kinh doanh giỏi, nông dân Việt Nam xuất sắc là thành tố quan trọng để liên kết, chia sẻ quyền lợi với bà con nông dân để tạo ra giá trị bền vững.",
        "category": "Diễn đàn & Chính sách",
        "location": "",
        "date": "06/08/2022"
      },
      {
        "id": "1035163",
        "title": "Nông dân Việt Nam xuất sắc 2022 tỉnh Thanh Hóa là người làm đổi thay các làng quê trồng lúa xứ Thanh",
        "url": "https://danviet.vn/ty-phu-nong-dan-trong-lua-che-bien-kinh-doanh-gao-thanh-hoa-la-nong-dan-viet-nam-xuat-sac-2022-20220804081446518-d1035163.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/4/z36168241996445eef677204e5a48d633f9d4d6a651d67-1659574633310577327483-170-0-1420-2000-crop-16595754563331933407933.jpg",
        "sapo": "Sau khi trở về từ quân ngũ, ông Nguyễn Hữu Lựu bắt tay vào làm kinh tế và thành lập doanh nghiệp chế biến nông sản, tạo ra chuỗi liên kết khép kín được chính quyền địa phương và người dân ủng hộ rất cao. Năm 2022, ông là 1 trong 100 nông dân điển hình cả nước được bình chọn nhận danh hiệu Nông dân Việt Nam xuất sắc.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "05/08/2022"
      },
      {
        "id": "1034826",
        "title": "Nông dân xuất sắc 2022 đến từ Nghệ An là tỷ phú kỳ lạ, lấy tiền từ biển để nuôi rừng",
        "url": "https://danviet.vn/ty-phu-nong-dan-ky-la-o-nghe-an-co-19-tau-danh-ca-nha-may-thuy-san-lai-con-ham-di-trong-rung-20220802170314808-d1034826.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/2/anh-1-16594339024431937308680-0-0-1250-2000-crop-16594339134932122502276.jpg",
        "sapo": "Đó là ông Lê Hội Hưng, xã Quỳnh Lập, thị xã Hoàng Mai (tỉnh Nghệ An). Ông Hưng đang có trong tay 19 tàu công suất lớn, cùng hệ thống nhà máy chế biển thủy hải sản, đá lạnh, dụng cụ, hậu cần nghề cá…Ông vừa được bình chọn xứng đáng nhận danh hiệu \"Nông dân Việt Nam xuất sắc 2022\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "04/08/2022"
      },
      {
        "id": "1034989",
        "title": "Nông dân Việt Nam xuất sắc 2022 đến từ Hà Tĩnh là một hội viên tỷ phú nuôi hươu sao thu gần 30 tỷ/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-2022-den-tu-ha-tinh-la-mot-hoi-vien-ty-phu-nuoi-huou-sao-thu-30-ty-nam-20220803124528308-d1034989.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/3/z3599926093904-3fa5127c8a467c25e306f52e0b38070f-1659504672509402423180-83-0-1333-2000-crop-165950469388023222146.jpg",
        "sapo": "Bà Chu Thị Hồng Hà, SN 1973, Nông dân Việt Nam xuất sắc 2022 là hội viên Hội Nông dân xã Sơn Giang, huyện Hương Sơn (tỉnh Hà Tĩnh) nỗ lực vươn lên trở thành doanh nghiệp tư nhân nhung hươu Thuận Hà hàng đầu cả nước về cung cấp các sản phẩm từ hươu sao, doanh thu mỗi năm đạt gần 30 tỷ đồng.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "03/08/2022"
      },
      {
        "id": "1034770",
        "title": "Một tỷ phú nuôi heo ở Quảng Nam, doanh thu 20 tỷ/năm đạt danh hiệu 'Nông dân Việt Nam xuất sắc 2022'",
        "url": "https://danviet.vn/mot-ty-phu-nuoi-heo-o-quang-nam-doanh-thu-20-ty-nam-dat-danh-hieu-nong-dan-viet-nam-xuat-sac-2022-20220802125543731-d1034770.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/2/anh-heo-4-16594190492672066550510-35-0-719-1095-crop-16594193860911371789776.jpg",
        "sapo": "“Mỗi tháng, tôi xuất tầm 200 con heo thịt, tương đương 20 tấn, thu nhập 1,4 tỷ đồng/tháng. Còn tính bình quân mỗi năm tôi xuất heo và thu nhập trên 20 tỷ đồng, trừ hết chi phí còn lại lãi ròng gần 3 tỷ đồng…”, ông Đặng Xuân Hòa, \"Nông dân Việt Nam xuất sắc\" năm 2022 đến từ tỉnh Quảng Nam chia sẻ.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "02/08/2022"
      },
      {
        "id": "1034607",
        "title": "Trưởng Ban Tổ chức Tự hào Nông dân Việt Nam: 100 'ngôi sao' xuất sắc nhất xứng đáng được tôn vinh",
        "url": "https://danviet.vn/ton-vinh-100-nong-dan-viet-nam-xuat-sac-nam-2022-20220801171719008-d1034607.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/8/1/nong-dan-viet-nam-xuat-sac-16593635774981174359241-83-0-1333-2000-crop-16593636118051129006558.jpg",
        "sapo": "Đó là khẳng định của ông Phạm Tiến Nam - Phó Chủ tịch Ban Chấp hành Trung ương Hội Nông dân Việt Nam, Trưởng ban Tổ chức Chương trình Tự hào Nông dân Việt Nam 2022, Chủ tịch Hội đồng bình chọn danh hiệu \"Nông dân Việt Nam xuất sắc\" về 100 Nông dân Việt Nam xuất sắc năm 2022.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "02/08/2022"
      },
      {
        "id": "830603",
        "title": "Nông dân Việt Nam xuất sắc 2022 đến từ tỉnh Đồng Tháp đưa trái xoài xuất ngoại, giúp nông dân giảm nghèo làm giàu",
        "url": "https://danviet.vn/nong-dan-viet-nam-suat-sac-2022-den-tu-tinh-dong-thap-la-nguoi-dua-trai-xoai-xuat-ngoai-2022072916023205-d830603.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/7/29/nen-165908720151677024325-0-0-798-1276-crop-1659087207855697477100.jpg",
        "sapo": "Từ người chỉ biết làm vườn, chị Đinh Kim Nhung (SN 1971) ở ấp Tân Dân, xã Tân Thuận Tây, TP Cao Lãnh, tỉnh Đồng Tháp đã hình thành nhiều điểm thu mua trái xoài, rồi thành lập công ty, xây dựng nhà máy chế biến đưa xoài Cát Chu, xoài tượng da xanh xuất khẩu sang nhiều nước trên thế giới.",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "30/07/2022"
      },
      {
        "id": "830599",
        "title": "Chính thức công bố danh sách 100 'Nông dân Việt Nam xuất sắc' năm 2022",
        "url": "https://danviet.vn/cong-bo-danh-sach-100-nong-dan-viet-nam-xuat-sac-nam-2022-2022072914373731-d830599.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/7/29/nong-dan-viet-nam-xuat-sac-2022-16590844317672133563244-0-0-1250-2000-crop-16590846714231743601433.jpeg",
        "sapo": "Ngày 29/7 đồng chí Lương Quốc Đoàn, Ủy viên Trung ương Đảng, Bí thư Đảng đoàn, Chủ tịch Ban Chấp hành Trung ương Hội Nông dân Việt Nam, Trưởng ban Chỉ đạo Chương trình Tự hào Nông dân Việt Nam đã ký Quyết định số 5732-QĐ/HNDTW quyết định công bố danh sách 100 Nông dân Việt Nam xuất sắc năm 2022.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "29/07/2022"
      },
      {
        "id": "1032206",
        "title": "Nữ tỷ phú trồng sầu riêng ở Đắk Lắk được bình chọn là Nông dân Việt Nam xuất sắc 2022",
        "url": "https://danviet.vn/nu-ty-phu-trong-sau-rieng-o-dak-lak-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-2022-20220720210440072-d1032206.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/7/20/z35805931803221c4e2140a852bd8607d1e0662177d891-16583252170021023162075-0-0-1250-2000-crop-1658325232961670685977.jpg",
        "sapo": "Trồng sầu riêng và kinh doanh loại trái đặc sản này, nông dân Nguyễn Thị Thanh Thảo (SN 1987, Thôn Tân Bắc, xã Ea Kênh, huyện Krông Pắk, tỉnh Đắk Lắk) đã vươn lên trở thành tỷ phú. Chị là một trong 100 nông dân điển hình tiên tiến trong cả nước được Hội đồng chung khảo T.Ư bình chọn nhận danh hiệu \"Nông dân Việt Nam xuất sắc 2022\".",
        "category": "Gương mặt điển hình",
        "location": "",
        "date": "25/07/2022"
      },
      {
        "id": "1016874",
        "title": "Mời bạn đọc đề cử đối tượng cho Chương trình Bình chọn và trao danh hiệu “Nông dân Việt Nam xuất sắc 2022”.",
        "url": "https://danviet.vn/tran-trong-moi-ban-tham-gia-binh-chon-danh-hieu-nong-dan-viet-nam-xuat-sac-2022-20220503181753605-d1016874.html",
        "img": "https://danviet.ex-cdn.com/files/f1/296231569849192448/2022/5/3/nong-dan-viet-nam-xuat-sac-1651576439430291998070-53-0-1303-2000-crop-16515764470763826135.jpg",
        "sapo": "Năm 2022, Ban Tổ chức Chương trình “Bình chọn và trao danh hiệu Nông dân Việt Nam xuất sắc” có nhiều đổi mới, trong đó có thêm các hình thức đề cử. Một trong các hình thức đề cử là bạn đọc đề cử đối tượng xứng đáng tham gia bình chọn danh hiệu “Nông dân Việt Nam xuất sắc 2022”.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": "03/05/2022"
      }
    ]
  }
];
