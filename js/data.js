/**
 * Nội dung landing page — nguồn: https://danviet.vn/dong-su-kien/tong-quan.html
 *
 * Mỗi sự kiện:
 *  - year, label (chữ trên thanh chọn năm), kicker, title, date, location, cover, summary
 *  - stats:        [{ value, suffix, label }]
 *  - link:         chuyên trang gốc
 *  - articleCount: số bài công bố (dùng cho số liệu tổng)
 *  - featured:     bài tiêu điểm (tuỳ chọn) [{ tag, highlight, title, sapo, img, url }]
 *  - articles:     [{ title, url, img, sapo, category, location, date }]
 *
 * LƯU Ý: 2022–2025 trên trang gốc mới có 3 bài mẫu/năm (link về trang chủ) —
 * cần bổ sung danh sách bài thật.
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
        "value": 91,
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
    "articleCount": 91,
    "articles": [
      {
        "id": "1465645",
        "title": "Lần thứ 2 được vinh danh “Nông dân Việt Nam xuất sắc', một người Quảng Ngãi vẫn 'phong độ cá to, tôm nhí' thế này đây",
        "url": "https://danviet.vn/lan-thu-2-duoc-vinh-danh-nong-dan-viet-nam-xuat-sac-mot-nguoi-quang-ngai-van-phong-do-ca-to-tom-nhi-the-nay-day-d1465645.html",
        "img": "https://i.ex-cdn.com/danviet.vn/files/news/2026/10/08/anh-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-giu-phong-do-trong-san-xuat-nguoi-nay-o-quang-ngai-lan-thu-2-duoc-vinh-danh-5-1417.jpg",
        "sapo": "Đó là ông Đỗ Văn Được (sinh 1975), tỷ phú Quảng Ngãi, nông dân phường Sa Huỳnh, “ông chủ” nuôi cá lồng bè, kiêm “chủ vựa” kinh doanh tôm hùm nhí, với tổng doanh thu 9 tỷ đồng/năm và lợi nhuận trên 2 tỷ đồng/năm. Năm 2026, ông Đỗ Văn Được lần thứ 2 được vinh danh \"Nông dân Việt Nam xuất sắc\" tại Chương trình Tự hào Nông dân Việt Nam 40 năm Đổi mới.",
        "category": "Gương mặt Điển hình",
        "location": "Quảng Ngãi",
        "date": ""
      },
      {
        "id": "1465600",
        "title": "PGS. TS, Đại biểu Quốc hội Trần Hoàng Ngân: Bài học từ 'Khoán 10' và chìa khóa về thể chế để nông nghiệp bứt phá",
        "url": "https://danviet.vn/pgs-ts-dai-bieu-quoc-hoi-tran-hoang-ngan-bai-hoc-tu-khoan-10-va-chia-khoa-ve-the-che-de-nong-nghiep-but-pha-d1465600.html",
        "img": "https://t.ex-cdn.com/danviet.vn/512w/files/content/2026/10/08/202608221526322660_1787387134805_7138977550031328523_g3587189976484290001_ddc5e40582cd16154cbf2b714c38aa6b-1-1151.jpg",
        "sapo": "PGS. TS, Đại biểu Quốc hội Trần Hoàng Ngân cho rằng, bài học từ Khoán 10 trong nông nghiệp cho thấy nếu có thể chế phù hợp, lĩnh vực này có thể tạo ra bước phát triển lớn. Trong bối cảnh hiện nay, nông nghiệp cần thu hút doanh nghiệp lớn và đầu tư mạnh cho hạ tầng để hướng tới tăng trưởng hai con số.",
        "category": "Chính sách & Chuyên gia",
        "location": "",
        "date": ""
      },
      {
        "id": "1465101",
        "title": "10 kỷ lục ấn tượng của 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/10-ky-luc-an-tuong-cua-96-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1465101.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/06/145459thiet-ke-chua-co-ten-1454.png",
        "sapo": "Trong số 96 gương mặt Nông dân Việt Nam xuất sắc được tôn vinh nhân dịp 40 năm Đổi mới năm 2026, xuất hiện ngày càng nhiều \"tỷ phú nông dân\" và các giám đốc hợp tác xã với thành tích vượt trội. Năm nay ghi nhận sự bứt phá mạnh mẽ của những mô hình kinh tế quy mô lớn, đạt doanh thu hàng trăm tỷ đồng, lợi nhuận hàng chục tỷ đồng và giải quyết việc làm cho hàng nghìn lao động tại địa phương.",
        "category": "Sự kiện & Vinh danh",
        "location": "",
        "date": ""
      },
      {
        "id": "1455907",
        "title": "Một ông nông dân Đồng Tháp có doanh thu 35 tỷ/năm nhờ nuôi gà kiểu này đây",
        "url": "https://danviet.vn/mot-ong-nong-dan-dong-thap-co-doanh-thu-35-ty-nam-nho-nuoi-ga-kieu-nay-day-d1455907.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/31/2118271788185563742_1918310664192206013_8469663182997053096_5e17f7e9b380e190379eee404f2626f6-2117.jpg",
        "sapo": "Ông Nguyễn Đức Lữ, phường Đạo Thạnh, tỉnh Đồng Tháp (trước đây thuộc tỉnh Tiền Giang) đã gầy dựng nên một trang trại chăn nuôi gà công nghệ cao trị giá hàng chục tỷ đồng. Ông Nguyễn Đức Lữ được bình chọn là \"Nông dân Việt Nam xuất sắc 40 năm Đổi mới\"-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Đồng Tháp",
        "date": ""
      },
      {
        "id": "1464997",
        "title": "Chủ tịch Hội Nông dân Tây Ninh nói về những tiêu chí mới cần có của nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/chu-tich-hoi-nong-dan-tay-ninh-noi-ve-nhung-tieu-chi-moi-can-co-cua-nong-dan-viet-nam-xuat-sac-d1464997.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/06/240-nam-doi-moi-0838.jpg",
        "sapo": "Trả lời phỏng vấn báo Dân Việt, ông Nguyễn Thanh Tùng, Uỷ viên BCH Trung ương Hội Nông dân Việt Nam, Phó Chủ tịch Uỷ ban MTTQ tỉnh, Chủ tịch Hội Nông dân tỉnh Tây Ninh cho rằng, sau 40 năm Đổi mới, người nông dân không chỉ biết làm ruộng mà còn biết tính toán hiệu quả, làm chủ sản xuất, liên kết và chinh phục thị trường.",
        "category": "Chính sách & Chuyên gia",
        "location": "Tây Ninh",
        "date": ""
      },
      {
        "id": "1465003",
        "title": "Từ cánh đồng đến thị trường: Hành trình đổi thay của nông dân Đà Nẵng sau 40 năm Đổi mới",
        "url": "https://danviet.vn/tu-canh-dong-den-thi-truong-hanh-trinh-doi-thay-cua-nong-dan-da-nang-sau-40-nam-doi-moi-d1465003.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/06/1-0844.jpg",
        "sapo": "Từ những thửa ruộng manh mún, sản xuất chủ yếu dựa vào kinh nghiệm, sau 40 năm Đổi mới, người nông dân Việt Nam đang chuyển mình mạnh mẽ. Tại TP.Đà Nẵng, sự thay đổi ấy càng rõ nét khi nông dân không chỉ sản xuất nông nghiệp mà từng bước trở thành chủ thể của kinh tế nông thôn, làm du lịch, phát triển OCOP, ứng dụng công nghệ, chuyển đổi số và đưa nông sản vươn ra thị trường.",
        "category": "Gương mặt Điển hình",
        "location": "Đà Nẵng",
        "date": ""
      },
      {
        "id": "1464570",
        "title": "Chuyên gia Nguyễn Lân Hùng: Mỗi câu chuyện nông dân Việt Nam xuất sắc đều là 'tài liệu' quý để phát triển nông thôn",
        "url": "https://danviet.vn/chuyen-gia-nguyen-lan-hung-moi-cau-chuyen-nong-dan-viet-nam-xuat-sac-deu-la-tai-lieu-quy-de-phat-trien-nong-thon-d1464570.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/05/2007551786009179115_1785719900663690540_1785719900663690540_4600436c034fe4cc738a1ad34fc0c168-1749-2007.jpg",
        "sapo": "Được lựa chọn từ hàng trăm hồ sơ gửi về chương trình “Tự hào Nông dân Việt Nam”, 96 Nông dân Việt Nam xuất sắc năm 2026 là những gương mặt nông dân tiêu biểu, phản ánh sinh động sức bật của kinh tế nông thôn trên mọi miền Tổ quốc sau 40 năm Đổi mới. Theo chuyên gia Nguyễn Lân Hùng, hành trình làm giàu của những điển hình ấy gợi mở nhiều hướng đi để người nông dân nâng cao thu nhập.",
        "category": "Chính sách & Chuyên gia",
        "location": "",
        "date": ""
      },
      {
        "id": "1464638",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Đắk Lắk liên kết với 3.000 hộ trồng cà phê để làm ra loại cà phê này",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-dak-lak-lien-ket-voi-3000-ho-trong-ca-phe-de-lam-ra-loai-ca-phe-nay-d1464638.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/04/img_7345-1553.jpg",
        "sapo": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Đắk Lắk, bà Nguyễn Thị Phúc Minh đã có hơn 30 năm gắn bó với cây cà phê. Từ một cơ sở thu mua nông sản nhỏ, bà Minh từng bước xây dựng chuỗi liên kết với hơn 3.000 hộ nông dân, hướng đến trồng cà phê an toàn, cà phê sạch, truy xuất nguồn gốc và nâng cao giá trị hạt cà phê địa phương.",
        "category": "Gương mặt Điển hình",
        "location": "Đắk Lắk",
        "date": ""
      },
      {
        "id": "1464191",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Vĩnh Long là người trồng lúa hữu cơ đạt chuẩn quốc tế",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-vinh-long-la-nguoi-trong-lua-huu-co-dat-chuan-quoc-te-d1464191.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/05/085716lua-huu-co-chuan-quoc-te-0855.jpg",
        "sapo": "Nhờ trồng lúa hữu cơ đạt chuẩn quốc tế, ông Đoàn Văn Tài ở ấp Kinh, xã Trung Ngãi, tỉnh Vĩnh Long không lo đầu ra, sản lượng gạo làm ra bao nhiêu cũng được doanh nghiệp ký hợp đồng mua hết từ đầu vụ. Ông Tài trở thành một trong 96 gương mặt nhà nông tiêu biểu được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Vĩnh Long",
        "date": ""
      },
      {
        "id": "1463188",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Gia Lai là thương binh ¾ nhận Huân chương Lao động, bán nước mắm rong",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-gia-lai-la-thuong-binh-nhan-huan-chuong-lao-dong-ban-nuoc-mam-rong-d1463188.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/29/img_3616-0945.jpeg",
        "sapo": "Sau chiến tranh, bà Trần Thị Như Hoa trở về với thương tật 3/4, một mình nuôi 4 con và bắt đầu mưu sinh bằng những chuyến bán nước mắm rong. Hơn 30 năm sau, từ số vốn vay 5 triệu đồng, bà gây dựng thương hiệu nước mắm truyền thống Như Hoa, được trao Huân chương Lao động hạng Ba.",
        "category": "Gương mặt Điển hình",
        "location": "Gia Lai",
        "date": ""
      },
      {
        "id": "1464426",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lâm Đồng trồng cà phê, trồng tiêu kiểu gì mà doanh thu 170 tỷ/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-lam-dong-trong-ca-phe-trong-tieu-kieu-gi-ma-doanh-thu-170-ty-nam-d1464426.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/03/img_7218-1520.jpg",
        "sapo": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lâm Đồng (địa phận huyện Đắk Song, tỉnh Đắk Nông cũ), ông Lưu Như Bính là người tiên phong thay đổi cách làm, trồng cà phê, trồng hồ tiêu từ kiểu trồng, sơ chế truyền thống sang trồng theo hướng hữu cơ, đầu tư máy móc chế biến, sơ chế, cùng hàng trăm nông dân cùng làm ăn khá giả.",
        "category": "Gương mặt Điển hình",
        "location": "Lâm Đồng",
        "date": ""
      },
      {
        "id": "1464587",
        "title": "Phó Vụ trưởng Vụ Đoàn thể nhân dân: 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới là những điểm sáng “Dân vận khéo”",
        "url": "https://danviet.vn/pho-vu-truong-vu-doan-the-nhan-dan-96-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-la-nhung-diem-sang-dan-van-kheo-d1464587.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/04/anh-2-ba-to-nga-1048.jpg",
        "sapo": "Trao đổi với PV Báo điện tử Dân Việt, bà Nguyễn Thị Tố Nga - Phó Vụ trưởng Vụ Đoàn thể nhân dân, Đảng uỷ MTTQ, các đoàn thể Trung ương khẳng định: 96 gương mặt \"Nông dân Việt Nam xuất sắc 40 năm Đổi mới\" chính là minh chứng sống động cho thế hệ nông dân thời đại mới: Dám nghĩ, dám làm, làm chủ khoa học công nghệ và lan tỏa giá trị tích cực cho cộng đồng.",
        "category": "Chính sách & Chuyên gia",
        "location": "",
        "date": ""
      },
      {
        "id": "1464025",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lâm Đồng là chủ giống tiêu đột biến “tiêu Tùng Linh” năng suất cao",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-lam-dong-la-chu-giong-tieu-dot-bien-tieu-tung-linh-nang-suat-cao-d1464025.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/02/img_7172-0944.jpg",
        "sapo": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lâm Đồng, ông Lê Tùng Linh là người phát hiện và nhân giống cây tiêu đột biến “tiêu Tùng Linh”. Giống tiêu này sinh trưởng khỏe, cho năng suất khoảng 10-20 tấn tiêu khô/1ha nếu được chăm sóc đúng quy trình.",
        "category": "Gương mặt Điển hình",
        "location": "Lâm Đồng",
        "date": ""
      },
      {
        "id": "1463909",
        "title": "Biến đồng trũng thành “mặt ruộng không dấu chân”, một người An Giang là Nông dân Việt Nam xuất sắc 40 năm đổi mới",
        "url": "https://danviet.vn/bien-dong-trung-thanh-mat-ruong-khong-dau-chan-mot-nguoi-an-giang-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1463909.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/01/175246ong-le-thanh-long-1752.jpg",
        "sapo": "Mua 7ha đất ruộng ở vùng phèn úng, từ nhiều người bỏ hoang vì làm lúa liên tục thua lỗ, ông Lê Thanh Long ở An Giang đã kiên trì cải tạo đất, tích lũy từ từng mùa vụ để mở rộng sản xuất. Gần 30 năm sau, ông sở hữu 80ha đất trồng lúa, đưa drone, máy cày, máy gặt… vào đồng ruộng cho thu nhập tiền tỷ mỗi năm, riêng năm 2025 doanh thu đạt hơn 8,5 tỷ đồng, lợi nhuận hơn 5,1 tỷ đồng.",
        "category": "Gương mặt Điển hình",
        "location": "An Giang",
        "date": ""
      },
      {
        "id": "1464037",
        "title": "Một người Phú Thọ coi con lợn là 'cục vàng', ông tỷ phú từng đạp xe ba gác, nay là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/mot-nguoi-phu-tho-coi-con-lon-la-cuc-vang-ong-ty-phu-tung-dap-xe-ba-gac-nay-la-nong-dan-viet-nam-suat-sac-d1464037.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/02/17081930e9959a-2ff9-4e0d-8e47-b9563f018f54-1608.png",
        "sapo": "“Với tôi, con lợn là vàng! Mỗi sớm tinh mơ tôi check-in chuồng nuôi lợn xem đàn lợn ăn uống, khỏe yếu thế nào... Hạnh phúc bắt đầu từ điều giản dị vậy đấy!”, ông Nguyễn Văn Toàn, xã Hy Cương, tỉnh Phú Thọ (địa phận TP Việt Trì cũ)-Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026- cười tươi, nói dí dỏm.",
        "category": "Gương mặt Điển hình",
        "location": "Phú Thọ",
        "date": ""
      },
      {
        "id": "1463667",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới ở Bắc Ninh: Đưa mỳ Chũ thành nguồn thu chính, thu nhập tới 9 triệu đồng/tháng",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-o-bac-ninh-dua-my-chu-thanh-nguon-thu-chinh-thu-nhap-toi-9-trieu-dong-thang-d1463667.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/10/02/my-chu-nam-the-3-2030.jpg",
        "sapo": "Từ nghề phụ lúc nông nhàn, những sợi mỳ gạo Chũ nay trở thành sinh kế của hàng nghìn người dân Thủ Dương, xã Nam Dương, Bắc Ninh. Mỗi năm làng nghề sản xuất khoảng 16.000 tấn mỳ, tạo thu nhập bình quân 8,5-9 triệu đồng/người/tháng. Đằng sau sự chuyển mình ấy có dấu ấn của ông Nguyễn Văn Nam, người được vinh danh “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”.",
        "category": "Gương mặt Điển hình",
        "location": "Bắc Ninh",
        "date": ""
      },
      {
        "id": "1464139",
        "title": "Từ 'chuồng gà nhỏ' đến doanh thu 206 tỷ đồng, một người Hải Phòng 30 năm nuôi gà nay là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/tu-chuong-ga-nho-den-doanh-thu-206-ty-dong-mot-nguoi-hai-phong-30-nam-nuoi-ga-nay-la-nong-dan-viet-nam-xuat-sac-d1464139.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/02/a-luong-1444.jpg",
        "sapo": "Từ một trang trại gà giống, ông Phạm Văn Lượng, Chủ tịch HĐQT - Giám đốc Công ty cổ phần Giống gia cầm Lượng Huệ (Hải Phòng), đã phát triển mô hình sản xuất theo chuỗi, cung cấp hàng triệu con gà giống mỗi năm và liên kết với nhiều hộ chăn nuôi. Sau hơn 30 năm gắn bó với nghề, ông vừa được bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Hải Phòng",
        "date": ""
      },
      {
        "id": "1463115",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Đồng Tháp, bỏ tiền tỷ làm đường, xóa cầu khỉ, xây dựng nông thôn mới",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-dong-thap-bo-tien-ty-lam-duong-xoa-cau-khi-xay-dung-nong-thon-moi-d1463115.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/01/0816071790817058125_1918310664192206013_8469663182997053096_d7995c0524612b223101bd4642fd7bbf-0814.jpg",
        "sapo": "Ông Lê Văn Hòa, nông dân giàu có ở ấp Tân Quới, xã Phong Hòa, tỉnh Đồng Tháp phất lên thành tỷ phú nông dân nhờ trồng giống nhãn đặc sản. Có điều kiện, ông đóng góp hàng tỷ đồng cùng bà con làm đường, xóa cầu khỉ, góp phần xây dựng nông thôn mới, vùng quê đáng sống. Ông Lê Văn Hòa được bình chọn là \"Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026\".",
        "category": "Gương mặt Điển hình",
        "location": "Đồng Tháp",
        "date": ""
      },
      {
        "id": "1463714",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Vĩnh Long là người nuôi tôm thẻ công nghệ cao, lãi 40 tỷ đồng/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-vinh-long-la-nguoi-nuoi-tom-the-cong-nghe-cao-lai-40-ty-dong-nam-d1463714.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/10/01/093616nuoi-tom-cong-nghe-cao-2-0933.jpg",
        "sapo": "Nuôi tôm thẻ công nghệ cao trên diện tích 45 ha, ông Đặng Văn Bảy (Bảy An) ở ấp Đại Thôn, xã Thạnh Phong, huyện Thạnh Phú, tỉnh Bến Tre (nay là ấp Đại Thôn, xã Thạnh Phong, tỉnh Vĩnh Long) đạt lợi nhuận khoảng 40 tỷ đồng/năm. Ông Bảy An trở thành một trong 96 gương mặt nhà nông tiêu biểu được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Vĩnh Long",
        "date": ""
      },
      {
        "id": "1463500",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Bạc Liêu, nay là Cà Mau, tỷ phú nuôi tôm thành công",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-bac-lieu-nay-la-ca-mau-ty-phu-nuoi-tom-thanh-cong-d1463500.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/30/1227511790745007012_1490451695551685427_2423669720379595582_6b1a029e5018043b67099d3921efc5ab-1224.jpg",
        "sapo": "Trở thành tỷ phú nhờ vào nghề nuôi tôm, ông Bùi Nghĩa Hiệp (Hai Hiệp) ở ấp Điền Hải, xã Long Điền, tỉnh Cà Mau (địa phận thuộc xã Điền Hải, huyện Đông Hải, tỉnh Bạc Liêu trước đây) vẫn học hỏi kinh nghiệm nuôi tôm tiên tiến trong và ngoài nước. Nuôi tôm mang lại cho ông Hiệp doanh thu lên đến hàng chục tỷ đồng/năm, được bình chọn là Nông dân Việt Nam xuất sắc 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Cà Mau",
        "date": ""
      },
      {
        "id": "1463562",
        "title": "Một người Thanh Hóa từng đạp xe cọc cạch bán rong 'quốc hồn quốc túy', này là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/mot-nguoi-thanh-hoa-tung-dap-xe-coc-canh-ban-rong-quoc-hon-quoc-tuy-nay-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1463562.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/30/1790757809571_1497495580962390835_3897307368532049901_28caa97368ca8ad6475b5c87b634f573-1550.jpg",
        "sapo": "Từ chiếc xe đạp cọc cạch chở từng chai nước mắm truyền thống, hũ mắm tôm (thức chấm nhiều người ví như \"quốc hồn quốc túy\" rong ruổi khắp các vùng quê Thanh Hóa, bà Lê Thị Liễu, phường Tĩnh Gia, đã từng bước gây dựng cơ sở chế biến hải sản rộng khoảng 5.000 m², với 7 sản phẩm được công nhận OCOP. Năm 2026, bà Liễu được bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới\".",
        "category": "Gương mặt Điển hình",
        "location": "Thanh Hóa",
        "date": ""
      },
      {
        "id": "1463121",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ tỉnh Lâm Đồng, người có cơ ngơi trăm tỷ từ nghề trồng hoa lan",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tinh-lam-dong-nguoi-co-co-ngoi-tram-ty-tu-nghe-trong-hoa-lan-d1463121.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/28/img_0115-2123.jpg",
        "sapo": "Ông Phan Thanh Sang được chọn là Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026. Xuất phát từ một thanh niên, nông dân trồng hoa lan hồ điệp, nay, mỗi năm công ty của ông Sang trồng khoảng 1,5 triệu chậu lan hoa lan hồ điệp làm giống và hoa lan hồ điệp thành phẩm, doanh thu khoảng gần 200 tỷ đồng.",
        "category": "Gương mặt Điển hình",
        "location": "Lâm Đồng",
        "date": ""
      },
      {
        "id": "1463137",
        "title": "Tỷ phú cá tra An Giang với 18 năm 'ngược dòng, làm giàu khác người' là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/ty-phu-ca-tra-an-giang-voi-18-nam-nguoc-dong-lam-giau-khac-nguoi-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1463137.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/29/img_5982-1222.jpg",
        "sapo": "Câu chuyện của tỷ phú Trần Tấn Thành (SN 1966, trú tại ấp Mỹ Quí, xã Vĩnh Thạnh Trung, tỉnh An Giang) bền bỉ với cách làm giàu từ mô hình nuôi cá tra. Mới đây, với hành trình bền bỉ làm kinh tế và cống hiến cho cộng đồng, ông vinh dự được bình chọn là \"Nông dân Việt Nam xuất sắc 40 năm Đổi mới\"-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "An Giang",
        "date": ""
      },
      {
        "id": "1463227",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới ở Tây Ninh, là người 73 tuổi vẫn lái ô tô đi thăm vườn sầu riêng 50ha",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-o-tay-ninh-la-nguoi-73-tuoi-van-lai-o-to-di-tham-vuon-sau-rieng-50ha-d1463227.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/29/img_5630-1110.jpg",
        "sapo": "Ở tuổi 73, ông Phan Văn Thà (xã Tân Biên, tỉnh Tây Ninh) được công nhận Nông dân Việt Nam xuất sắc 40 năm Đổi mới. Hằng ngày, ông Thà lái ô tô ra thăm vườn, kiểm tra từng khu sầu riêng rộng 50ha. Trước khi có cơ ngơi này, ông đã trải qua hơn 40 năm làm nông, từ trồng cây cao su, mít Thái đến sầu riêng.",
        "category": "Gương mặt Điển hình",
        "location": "Tây Ninh",
        "date": ""
      },
      {
        "id": "1457484",
        "title": "'Qua cái hạn' của hươu sao, một nông dân Hà Tĩnh nay được vinh danh 'Nông dân Việt Nam xuất sắc 40 năm Đổi mới'",
        "url": "https://danviet.vn/qua-cai-han-cua-huou-sao-mot-nong-dan-ha-tinh-nay-duoc-vinh-danh-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1457484.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/07/1788745298223_8037550690275722271_8037550690275722271_2d37a9fde74d8127e2bab78f32601829-1500.jpg",
        "sapo": "Từng chứng kiến giá hươu sao lao dốc từ 50-60 triệu đồng xuống chỉ còn vài trăm nghìn đồng/con, gia đình bà Chu Thị Hồng Hà ở xã Sơn Giang, tỉnh Hà Tĩnh (huyện Hương Sơn cũ) từng đối mặt khoản nợ hơn 700 triệu đồng. \"Cái hạn\" này bà Hồng đã vượt qua. Năm 2026, bà Chu Thị Hồng Hà vinh dự được bình chọn là một trong 96 gương mặt “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Hà Tĩnh",
        "date": ""
      },
      {
        "id": "1462787",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới: Từng nghĩ không thể trụ lại, nay làm bà chủ 28ha ở Đắk Lắk",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-tung-nghi-khong-the-tru-lai-nay-lam-ba-chu-28ha-o-dak-lak-d1462787.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/27/img_1665-1703.jpg",
        "sapo": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Đắk Lắk, bà Lê Thị Yến từng có những ngày nghĩ gia đình không thể trụ lại Ea H’Leo vì những cơn sốt rét. Từ 5 sào đất ban đầu, bà kiên trì làm ăn, mở rộng sản xuất và đến nay có 25ha cao su, 3ha cà phê cùng nhà nuôi chim yến.",
        "category": "Gương mặt Điển hình",
        "location": "Đắk Lắk",
        "date": ""
      },
      {
        "id": "1462784",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lai Châu: Làm chè phải có cái tâm!",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-lai-chau-lam-che-phai-co-cai-tam-d1462784.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/27/che-ba-nu-5-1631.jpg",
        "sapo": "Qua gần hai thập kỷ kiên trì, nỗ lực, đưa cái tâm đến với từng bản, khu phố trong vùng chè nguyên liệu, bà Phạm Thị Nụ, ở tổ dân phố số 1, phường Tân Phong, tỉnh Lai Châu (trước là bản Cư Nhà La, phường Tân Phong) không chỉ tạo dựng nên một công ty chè với doanh thu gần 60 tỷ đồng/năm, mà còn biến hàng trăm héc-ta chè cằn cỗi thành \"vàng xanh\". Bà Nụ vinh dự được bình chọn là một trong 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": ""
      },
      {
        "id": "1462351",
        "title": "Nông dân xuất sắc 40 năm đổi mới ở Phú Thọ: Bản lĩnh vượt bão giá, bão dịch, dựng cơ nghiệp hơn 110 tỷ đồng",
        "url": "https://danviet.vn/nong-dan-xuat-sac-40-nam-doi-moi-o-phu-tho-ban-linh-vuot-bao-gia-bao-dich-dung-co-nghiep-hon-110-ty-dong-d1462351.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/26/24da8b69-44af-492d-8cf4-549ef2b1d085-0854.png",
        "sapo": "Với ông Bùi Đức Luận (SN 1957, Phú Thọ) – Nông dân Việt Nam xuất sắc 40 năm đổi mới, làm nông không chỉ để mưu sinh mà còn là sự gắn bó với đất đai, cây trồng, vật nuôi. Từ tình yêu ấy, ông đã vượt qua những đợt bão giá, bão dịch, từng bước gây dựng cơ nghiệp triệu đô.",
        "category": "Gương mặt Điển hình",
        "location": "Phú Thọ",
        "date": ""
      },
      {
        "id": "1462330",
        "title": "Nông dân Việt Nam xuất sắc 40 năm đổi mới đến từ An Giang “biến” 5.000 công đất phèn thành cánh đồng lúa xuất khẩu",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-an-giang-bien-5000-cong-dat-phen-thanh-canh-dong-lua-xuat-khau-d1462330.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/25/img_5936-1525.jpg",
        "sapo": "Từ vùng đất trũng phèn từng bị xem là “đất chết”, sau hơn 25 năm, ông Nguyễn Thanh Tuấn đã cùng gia đình cải tạo 5.000 công đất, tương đương 500ha, thành cánh đồng lúa quy mô lớn, có vụ đạt năng suất 10 tấn/ha.",
        "category": "Gương mặt Điển hình",
        "location": "An Giang",
        "date": ""
      },
      {
        "id": "1462083",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Tây Ninh, trồng cây khóm kiểu này mà thu lời gần 4 tỷ/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tay-ninh-trong-cay-khom-kieu-nay-ma-thu-loi-gan-4-ty-nam-d1462083.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/24/nguyen-van-sau-phuoc-chi-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tay-ninh-trong-khom-tren-dat-phen-thu-loi-gan-4-ty-moi-nam-4-1639.jpg",
        "sapo": "Từ vùng đất phèn, trũng ngập, cây lúa nhiều phen thất bát, ông Nguyễn Văn Sáu ở xã Phước Chỉ, tỉnh Tây Ninh đã mạnh dạn chuyển sang trồng khóm. Không chỉ thay đổi cây trồng, ông còn tự cải tạo đất, làm đê bao, thay đổi cách lên líp, tăng mật độ cây và từng bước hình thành vùng khóm hơn 60ha.",
        "category": "Gương mặt Điển hình",
        "location": "Tây Ninh",
        "date": ""
      },
      {
        "id": "1461505",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Đồng Nai nhìn thấy “mỏ vàng” ở trái mít non vứt vạ vật ngoài vườn",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-dong-nai-nhin-thay-mo-vang-o-trai-mit-non-vut-va-vat-ngoai-vuon-d1461505.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/22/nguyen-viet-vi-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-dong-nai-nhin-thay-mo-vang-trong-trai-mit-non-bi-vut-ngoai-vuon-2-1637.jpg",
        "sapo": "Nhiều trái mít non thường bị hái bỏ để cây nuôi trái lớn. Với nhiều nhà vườn, đó là phần bỏ đi. Nhưng với ông Nguyễn Viết Vị - Giám đốc HTX TM-DV Nông nghiệp Phước Thiện ở ấp Bàu Vàng, xã Tân Quan, TP Đồng Nai (tỉnh Bình Phước trước đây), những trái mít non ấy lại trở thành nguyên liệu để chế biến thịt thực vật, làm chả lụa, chả giò, mít kho hạt điều...; mở ra 1 hướng làm giàu mới cho nông dân và HTX.",
        "category": "Gương mặt Điển hình",
        "location": "Bình Phước",
        "date": ""
      },
      {
        "id": "1461419",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Bắc Ninh: Biến phân lợn, phân vịt thành tiền, thu 2 tỷ đồng/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-bac-ninh-bien-phan-lon-phan-vit-thanh-tien-thu-2-ty-dong-nam-d1461419.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/23/013846hoang-dinh-que-1-0138.png",
        "sapo": "Từ một người nông dân từng dựng lán dưới chân núi Cô Tiên, ông Hoàng Đình Quê ở phường Tân An, tỉnh Bắc Ninh đã gây dựng trang trại tuần hoàn rộng 4,5ha, trị giá khoảng 45 tỷ đồng. Đặc biệt, phân lợn, phân vịt tại trang trại không bị bỏ đi mà được xử lý để nuôi trùn quế, làm phân bón, nuôi cá..., tạo thành vòng tuần hoàn giúp ông thu khoảng 2 tỷ đồng/năm. Năm 2026, ông được tôn vinh là Nông dân Việt Nam xuất sắc 40 năm Đổi mới và Nhà Khoa học của Nhà nông.",
        "category": "Gương mặt Điển hình",
        "location": "Bắc Ninh",
        "date": ""
      },
      {
        "id": "1461386",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới ở Cà Mau là 'vua' nuôi con đặc sản, lãi ròng hơn 5 tỷ đồng/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-o-ca-mau-la-vua-nuoi-con-dac-san-lai-rong-hon-5-ty-dong-nam-d1461386.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/22/1548071790057013732_1490451695551685427_2423669720379595582_4a619a80edd14722d46e6c4818b60ba7-1537.jpg",
        "sapo": "Ông Nguyễn Hữu Ánh (69 tuổi, ngụ phường Tân Thành, tỉnh Cà Mau) vừa được Trung ương Hội NDVN bình chọn trao danh hiệu \"Nông dân Việt Nam xuất sắc 40 năm Đổi mới năm 2026\". Đây là lần thứ 3, ông \"vua\" cá chình - người thu lãi ròng hơn 5 tỷ đồng mỗi năm vinh dự nhận được danh hiệu này.",
        "category": "Gương mặt Điển hình",
        "location": "Cà Mau",
        "date": ""
      },
      {
        "id": "1461317",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lai Châu, thu tiền tỷ từ nuôi trồng loại nấm này",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-lai-chau-thu-tien-ty-tu-nuoi-trong-loai-nam-nay-d1461317.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/21/huy-cuong-2-2202.jpg",
        "sapo": "Trải qua vô số lần thất bại, cuối cùng ông Đào Huy Cương ở tổ dân phố số 6, phường Đoàn Kết, tỉnh Lai Châu (trước thuộc tổ 5, phường Quyết Tiến, thành phố Lai Châu) cũng mỉm cười với thành công từ nghề nuôi trồng nấm đông trùng hạ thảo. Mỗi năm, ông Cương thu từ 5 – 7 tỷ đồng từ bán các sản phẩm nấm đông trùng hạ thảo ra thị trường. Ông vinh dự được bình chọn là một trong 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": ""
      },
      {
        "id": "1461383",
        "title": "Nông dân Việt Nam xuất sắc Phú Thọ: Từ sợi mì quê nhà đến giấc mơ thế giới biết đến Hùng Lô",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-phu-tho-tu-soi-mi-que-nha-den-giac-mo-the-gioi-biet-den-hung-lo-d1461383.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/22/1790054009468_1505870955534806835_7769722468477806085_375d9d7fe84a467a726b0190bb4bacb4-1217.jpg",
        "sapo": "Từ nghề làm mì truyền thống của quê hương, anh Cao Đăng Duy – Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Phú Thọ – đã cùng HTX Mì gạo Hùng Lô đưa sản phẩm đạt OCOP 5 sao, xuất khẩu sang Nhật Bản, Đài Loan. Với anh, khát vọng lớn hơn là để mỗi gói mì đi xa đều mang theo cái tên Hùng Lô đến với người tiêu dùng trong và ngoài nước.",
        "category": "Gương mặt Điển hình",
        "location": "Phú Thọ",
        "date": ""
      },
      {
        "id": "1460584",
        "title": "Từng nghèo đến nỗi không ai dám cho vay, bà nông dân Cao Bằng làm gì mà thành Nông dân Việt Nam xuất sắc?",
        "url": "https://danviet.vn/tung-ngheo-den-noi-khong-ai-dam-cho-vay-ba-nong-dan-cao-bang-lam-gi-ma-thanh-nong-dan-vie-nam-xuat-sac-d1460584.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/18/7-2223.jpg",
        "sapo": "Từng nghèo đến mức không ai dám cho vay tiền, vợ chồng bà Trần Thị Chung, ở tổ dân phố Hoàng Tung, phường Thục Phán, tỉnh Cao Bằng, phải mượn 50kg thóc của HTX để chống đói. Từ hai bàn tay trắng, sau nhiều năm gây dựng kinh tế, gia đình bà có cơ ngơi trị giá hàng chục tỷ đồng. Năm 2026, bà Chung được vinh danh là Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Hành trình 40 năm",
        "location": "",
        "date": ""
      },
      {
        "id": "1460877",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Gia Lai: Chủ trang trại thu tiền tỷ từ mô hình 'đa cây, đa con'",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-gia-lai-chu-trang-trai-thu-tien-ty-tu-mo-hinh-da-cay-da-con-d1460877.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/20/img_3201-0839.jpeg",
        "sapo": "Từ trang trại heo, vịt đến vườn dâu, cà phê, chị Nguyễn Thị Thùy Trang (46 tuổi, xã Mang Yang, tỉnh Gia Lai) xây dựng mô hình sản xuất tổng hợp, cho lợi nhuận hơn 4,4 tỷ đồng, trong năm 2025. Chị vừa được vinh danh Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Gia Lai",
        "date": ""
      },
      {
        "id": "1460438",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới người Cờ Lao ở Tuyên Quang bán mật ong bạc hà kiểu gì mà chốt đơn tốt thế",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-nguoi-co-lao-o-tuyen-quang-ban-mat-ong-bac-ha-kieu-gi-ma-chot-don-tot-the-d1460438.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/18/1-1304.jpg",
        "sapo": "Lưu Thị Hòa bán được mật ong bạc hà cao nguyên đá Đồng Văn, tỉnh Tuyên Quang (địa phận Hà Giang cũ), chị còn xây dựng thương hiệu, chế biến sâu, kể câu chuyện hấp dẫn về loại mật này. Nữ nông dân người Cờ Lao đã trở thành một trong 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026.",
        "category": "Hành trình 40 năm",
        "location": "Tuyên Quang",
        "date": ""
      },
      {
        "id": "1459840",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới ở Lào Cai là người 'kéo' 116 nông dân vào chuỗi trồng dâu nuôi tằm tiền tỷ",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-o-lao-cai-la-nguoi-keo-116-nong-dan-vao-chuoi-trong-dau-nuoi-tam-tien-ty-d1459840.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/17/8d4cd1ae-fe63-40a0-8de0-fa13bd289d3f-1524.png",
        "sapo": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới của tỉnh Lào Cai năm nay là bà Nguyễn Thị Hồng Lê ở thôn Trúc Đình, xã Trấn Yên (địa phận tỉnh Yên Bái cũ). Bà Lê không chỉ gây dựng cơ ngơi gần 2 tỷ đồng, mà còn là Giám đốc Hợp tác xã Dâu tằm Hạnh Lê - hạt nhân kết nối hàng trăm hộ dân với doanh nghiệp, mở ra hướng đi bền vững cho kinh tế nông thôn vùng cao.",
        "category": "Gương mặt Điển hình",
        "location": "Lào Cai",
        "date": ""
      },
      {
        "id": "1460880",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ TP.HCM: Từ 5 con bò sữa thành chủ cơ sở làm sữa chua nổi tiếng",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tphcm-tu-5-con-bo-sua-thanh-chu-co-so-lam-sua-chua-noi-tieng-d1460880.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/20/093412img_5605-0858.jpg",
        "sapo": "Từ chăn nuôi bò sữa, nông dân Nguyễn Văn Nhiệm (ấp Tân Lễ A, xã Châu Pha, TP.HCM) phát triển thành cơ sở sản xuất sữa chua với hệ thống nhà xưởng rộng khoảng 600m², trang bị nhiều máy móc. Năm nay ông Nhiệm được bình chọn Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Gương mặt Điển hình",
        "location": "TP.HCM",
        "date": ""
      },
      {
        "id": "1460656",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ TPHCM (địa phận Bình Dương cũ) nuôi đàn gà 'khổng lồ' 400.000 con",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tphcm-dia-phan-binh-duong-cu-nuoi-dan-ga-khong-lo-400000-con-d1460656.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/19/img_5443-0936.jpg",
        "sapo": "Ông Đinh Ngọc Khương đến từ xã Phú Giáo, TPHCM (địa phận huyện Phú Giáo, tỉnh Bình Dương trước đây) được công nhận Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026. Hiện ông có trang trại hơn 400.000 con gà, cùng hàng chục hecta trồng sầu riêng, cao su, mít ruột đỏ.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": ""
      },
      {
        "id": "1459203",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Đồng Nai, liên kết thành công, nuôi gà công nghệ cao phát tài",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-dong-nai-lien-ket-thanh-cong-nuoi-ga-cong-nghe-cao-phat-tai-d1459203.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/14/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-dong-nai-gom-nong-dan-thanh-bo-dua-cung-chan-nuoi-ga-cong-nghe-cao-5-0841.jpg",
        "sapo": "Từ người từng ám ảnh vì ruồi và mùi hôi trong những chuồng gà truyền thống, ông Lê Văn Quyết - Giám đốc HTX Nông nghiệp công nghệ cao Long Thành Phát ở phường Long Thành, TP Đồng Nai đã chọn con đường chăn nuôi gà công nghệ cao. Hơn 20 năm sau, ông đang vận hành một HTX có khoảng 3 triệu con gà, với 25 thành viên.",
        "category": "Gương mặt Điển hình",
        "location": "Đồng Nai",
        "date": ""
      },
      {
        "id": "1459786",
        "title": "Một người Sơn La bỏ túi tiền tỷ nhờ bí quyết “khoanh gốc, đốn cành”, là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/mot-nguoi-son-la-bo-tui-tien-ty-nho-bi-quyet-khoanh-goc-don-canh-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1459786.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/16/img_9261-0840.jpg",
        "sapo": "Từ kinh nghiệm trồng mận thực tế, ông Hàng A Sở (SN 1955, dân tộc Mông, tổ dân phố Pa Khen, phường Thảo Nguyên, tỉnh Sơn La) đúc kết bí quyết “khoanh gốc, đốn cành”, tập trung nâng chất lượng thay vì chạy theo sản lượng. Cách làm này giúp ông gây dựng 8 ha cây ăn quả, mang lại doanh thu hàng tỷ đồng sau khi trừ chi phí. Ông Sở được bình chọn là Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Gương mặt Điển hình",
        "location": "Sơn La",
        "date": ""
      },
      {
        "id": "1460107",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ TP.HCM: Cầm 800.000 đồng Nam tiến, nuôi gà, trồng bưởi mà thành tỷ phú",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tphcm-cam-800000-dong-nam-tien-nuoi-ga-trong-buoi-ma-thanh-ty-phu-d1460107.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/17/img_5546-0952.jpg",
        "sapo": "Ông Tống Văn Hướng cầm 800.000 đồng dắt vợ và con nhỏ vào vùng Dầu Tiếng (tỉnh Bình Dương cũ, nay là TP.HCM) để lập nghiệp với nghề trồng cao su, bưởi, nuôi gà. 32 năm sau, ông sở hữu cơ ngơi hàng chục tỷ, là một trong 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới được công nhận năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "TP.HCM",
        "date": ""
      },
      {
        "id": "1458512",
        "title": "Chủ tịch Tập đoàn Quế Lâm là Nông dân Việt Nam xuất sắc 40 năm Đổi mới: Dựng cơ ngơi nghìn tỷ từ cách làm này",
        "url": "https://danviet.vn/chu-tich-tap-doan-que-lam-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-dung-co-ngoi-nghin-ty-tu-cach-lam-nay-d1458512.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/14/14-1635.jpeg",
        "sapo": "Ông Nguyễn Hồng Lam - Chủ tịch HĐQT Tập đoàn Quế Lâm, Chủ tịch Hội Nông nghiệp tuần hoàn Việt Nam miệt mài theo đuổi con đường nông nghiệp hữu cơ, tuần hoàn,phổ biến tri thức nông nghiệp bền vững cho nông dân. Ông Lam được bình chọn là một trong 96 gương mặt “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”-năm 2026.",
        "category": "Chính sách & Chuyên gia",
        "location": "",
        "date": ""
      },
      {
        "id": "1457792",
        "title": "Từng đi buôn chè, nay có đồi chè 80ha, ông nông dân Thái Nguyên là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/tung-di-buon-che-nay-co-doi-che-80ha-ong-nong-dan-thai-nguyen-la-nong-dan-viet-nam-xuat-sac-d1457792.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/08/1788704267409_1497953192519677363_1044509912031565828_053533c6c1c14865485802884781881c-1631.jpg",
        "sapo": "Từ những chuyến buôn chè nhỏ lẻ, ông Hoàng Văn Thanh từng bước tích lũy vốn, gây dựng thị trường rồi thành lập HTX Chè Hà Thanh. Gần 40 năm gắn bó với cây chè, ông đã xây dựng vùng liên kết khoảng 80ha, đưa 60% sản lượng lên các nền tảng trực tuyến và hướng tới xuất khẩu. Năm 2026, ông Hoàng Văn Thanh được bình chọn là 1 trong 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Gương mặt Điển hình",
        "location": "Thái Nguyên",
        "date": ""
      },
      {
        "id": "1459473",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lào Cai góp sức 'đẩy' chất lượng hạt gạo đặc sản lên tầm cao mới",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-lao-cai-gop-suc-day-chat-luong-hat-gao-dac-san-len-tam-cao-moi-d1459473.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/15/img_9236-0818.jpg",
        "sapo": "Từ tình yêu với hạt gạo quê hương, chị Phạm Thị Hảo (SN 1981), Tổ dân phố Cánh Chín, phường Lào Cai, tỉnh Lào Cai đã gây dựng hướng đi riêng từ sản xuất, chế biến, kinh doanh gạo Séng Cù Mường Vi-1 loại gạo đặc sản và gạo lứt Séng Cù Mường Vi, đưa hương thơm đặc sản vùng cao đến với người tiêu dùng.",
        "category": "Gương mặt Điển hình",
        "location": "Lào Cai",
        "date": ""
      },
      {
        "id": "1459211",
        "title": "'Nông dân Việt Nam xuất sắc 40 năm Đổi mới' đến từ Vĩnh Long (Trà Vinh cũ) đang làm chủ chuỗi trồng lúa 150ha",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-vinh-long-tra-vinh-cu-dang-lam-chu-chuoi-trong-lua-150ha-d1459211.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/14/163101nong-dan-viet-nam-xuat-sac-1-1615.jpg",
        "sapo": "Anh Trầm Minh Thuần ở ấp Chợ, xã Long Hiệp, tỉnh Vĩnh Long (địa phận huyện Trà Cú, tỉnh Vĩnh Long cũ), hiện là Giám đốc Hợp tác xã Nông nghiệp Long Hiệp. Anh Thuần trở thành một trong 96 gương mặt nhà nông tiêu biểu được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Vĩnh Long",
        "date": ""
      },
      {
        "id": "1459572",
        "title": "Sở hữu 3 bằng sáng chế độc quyền, một người Quảng Ninh được vinh danh Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/so-huu-3-bang-sang-che-doc-quyen-mot-nguoi-quang-ninh-duoc-vinh-danh-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1459572.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/15/dinh-van-giang-hiep-hoa-quang-ninh-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-3-1250.jpg",
        "sapo": "Dù chưa từng qua trường lớp đào tạo kỹ thuật chính quy, nhưng ông Đinh Văn Giang (SN 1968), phường Hiệp Hòa, TP Quảng Ninh (địa phận Quảng Yên cũ) vẫn sáng chế ra loạt máy nông nghiệp, sở hữu 3 bằng sáng chế độc quyền. Với đóng góp thiết thực đó, ông Giang được vinh danh là Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm, 2026.",
        "category": "Hành trình 40 năm",
        "location": "",
        "date": ""
      },
      {
        "id": "1459279",
        "title": "Từ kỹ sư công nghệ thành “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”, tạo “miền Tây thu nhỏ” giữa Ninh Bình",
        "url": "https://danviet.vn/tu-ky-su-cong-nghe-thanh-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-tao-mien-tay-thu-nho-giua-ninh-binh-d1459279.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/14/1543401789375303213_2298660788091522360_4274995089848573069_07dee0159973a340df2687e390e0d7f8-1543.jpg",
        "sapo": "Rẽ hướng từ một kỹ sư công nghệ làm việc cho doanh nghiệp nước ngoài về quê khởi nghiệp, anh Đinh Văn Thuận (xã Hải Quang, tỉnh Ninh Bình) đã biến những bãi đất bạc màu thành mô hình kinh tế tuần hoàn, kết hợp trồng dừa, nuôi chim yến và du lịch sinh thái. Với tư duy làm nông nghiệp 4.0, anh Thuận sở hữu doanh thu lên tới 9 tỷ đồng/năm, vinh dự đón nhận Huân chương Lao động hạng Ba và được bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Ninh Bình",
        "date": ""
      },
      {
        "id": "1459014",
        "title": "Rời bục giảng về quê làm trang trại 30ha ở Phú Thọ, ông chủ thu 200 tỷ/năm, là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/roi-buc-giang-ve-que-lam-trang-trai-30ha-o-phu-tho-ong-chu-thu-200-ty-nam-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1459014.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/13/1789285112277_1505870955534806835_7769722468477806085_ce70cae992e69cb9b7783f8a6f8106b1-1529.jpg",
        "sapo": "Từ một giảng viên rẽ ngang về quê \"làm ruộng\", anh Lê Mạnh Cường, xã Tu Vũ, tỉnh Phú Thọ (địa phận huyện Thanh Thủy cũ) đã gây dựng trang trại nông nghiệp tuần hoàn \"hoành tráng\" rộng 30ha, doanh thu 200 tỷ/năm. Năm 2026, anh tiếp tục được bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” – sự ghi nhận cho hành trình dám nghĩ, dám làm và không ngừng đổi mới trên vùng đất Phú Thọ.",
        "category": "Gương mặt Điển hình",
        "location": "Phú Thọ",
        "date": ""
      },
      {
        "id": "1459303",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ TPHCM: Người sở hữu đội tàu đánh cá xa khơi, thu hàng chục tỷ đồng/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tphcm-tu-hon-15-ty-nam-co-doi-tau-danh-ca-khoi-xa-d1459303.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/14/nong-dan-1505.png",
        "sapo": "Ông Nguyễn Văn Nhỏ, xã Long Hải, TPHCM (địa phận huyện Long Đất, tỉnh Bà Rịa-Vũng Tàu cũ) được công nhận Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026. Ông Nhỏ sở hữu đội tàu cá 6 chiếc hành nghề lưới kéo khơi xa, mỗi năm thu về hàng chục tỷ đồng.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": ""
      },
      {
        "id": "1458780",
        "title": "Nông dân Việt Nam xuất sắc ở Tuyên Quang: Từ cậu bé nghèo mồ côi cha đến 'ông chủ' nông nghiệp tuần hoàn",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-o-tuyen-quang-tu-cau-be-ngheo-mo-coi-cha-den-ong-chu-nong-nghiep-tuan-hoan-d1458780.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/12/1789119715246_4492393569891565977_4492393569891565977_eb7e442ab8ec89d5057ec035d4e4f00f-0926.jpg",
        "sapo": "Từ một mô hình chăn nuôi nhỏ lẻ, Nông dân Việt Nam xuất sắc 40 năm đổi mới ở Tuyên Quang đã từng bước xây dựng Hợp tác xã sản xuất thực phẩm an toàn Sáng Nhung (HTX Sáng Nhung) theo chuỗi khép kín \"từ trang trại đến bàn ăn\", biến chất thải chăn nuôi thành phân hữu cơ, phụ phẩm nông nghiệp thành nguyên liệu sản xuất.",
        "category": "Gương mặt Điển hình",
        "location": "Tuyên Quang",
        "date": ""
      },
      {
        "id": "1458524",
        "title": "Kỹ sư bách khoa về quê Nghệ An sáng chế máy nông nghiệp, là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/ky-su-bach-khoa-ve-que-nghe-an-sang-che-may-nong-nghiep-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1458524.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/11/anh-vinh-nong-dan-18-1028.jpg",
        "sapo": "Tốt nghiệp Đại học Bách khoa Hà Nội, anh Hồ Xuân Vinh về quê ở xã Quỳnh Văn, tỉnh Nghệ An sáng chế hàng chục loại máy nông nghiệp, tiểu thủ công nghiệp, giúp bà con nông dân đỡ vất vả. Với những cống hiến của mình, chàng kỹ sư Bách khoa năm nào giờ được tôn vinh là Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Hành trình 40 năm",
        "location": "Hà Nội",
        "date": ""
      },
      {
        "id": "1458372",
        "title": "Tạo việc cho 5.000 lao động, một ông nông dân Ninh Bình được chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”",
        "url": "https://danviet.vn/tao-viec-cho-5000-lao-dong-mot-ong-nong-dan-ninh-binh-duoc-chon-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1458372.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/10/img_7807-1846.jpg",
        "sapo": "Xuất thân từ một gia đình nông dân, thấu hiểu nỗi nhọc nhằn của những ngày tháng thiếu thốn, ông Phạm Đăng Khuyến (xã Khánh Nhạc, tỉnh Ninh Bình) đã biến những nguyên liệu bỏ ngỏ ở làng quê thành mặt hàng thủ công mỹ nghệ xuất khẩu giá trị cao. Cơ sở của ông Khuyến không chỉ mang lại doanh thu hơn trăm tỷ đồng mà còn tạo sinh kế, thu nhập ổn định cho hàng nghìn lao động địa phương.",
        "category": "Gương mặt Điển hình",
        "location": "Ninh Bình",
        "date": ""
      },
      {
        "id": "1458538",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Đồng Nai giúp người trồng ca cao đổi đời theo kiểu này",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-dong-nai-giup-nguoi-trong-ca-cao-doi-doi-theo-kieu-nay-d1458538.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/11/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-o-dong-nai-giup-nguoi-trong-ca-cao-doi-vai-khong-chi-biet-trong-roi-ban-1-1041.jpg",
        "sapo": "Tại xã Phú Hòa, TP Đồng Nai, ông Đặng Tường Khanh - Chủ tịch kiêm Tổng Giám đốc Công ty TNHH Ca cao Trọng Đức đang theo đuổi cách làm khác với cây ca cao. Ông không muốn nông dân chỉ trồng, thu hoạch rồi bán hạt. Qua chuỗi liên kết với doanh nghiệp, người trồng ca cao được định vị là nhà cung ứng, có vai trò cao hơn trong chuỗi giá trị từ vùng nguyên liệu đến chế biến.",
        "category": "Gương mặt Điển hình",
        "location": "Đồng Nai",
        "date": ""
      },
      {
        "id": "1458589",
        "title": "Một người Quảng Ninh hơn 15 năm gắn bó với cây dược liệu là Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm",
        "url": "https://danviet.vn/mot-nguoi-quang-ninh-hon-15-nam-gan-bo-voi-cay-duoc-lieu-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-nam-2026-d1458589.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/11/bup_7196-2-1642.jpg",
        "sapo": "Hơn 15 năm gắn bó với cây dược liệu, ông Phạm Việt Trung (TP Quảng Ninh) không chỉ bảo tồn nhiều loại dược liệu quý, mà còn tạo sinh kế cho người dân địa phương. Những nỗ lực ấy giúp ông được bình chọn là Nông dân Việt Nam xuất sắc 40 năm Đổi mới.",
        "category": "Hành trình 40 năm",
        "location": "",
        "date": ""
      },
      {
        "id": "1458138",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Thái Nguyên: 'Đã có lúc bà con hoài nghi tôi, muốn bỏ hợp tác xã”",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-thai-nguyen-da-co-luc-ba-con-hoai-nghi-toi-muon-bo-hop-tac-xa-d1458138.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/10/11-0957.jpg",
        "sapo": "Từ bản làng nghèo khó, thiếu thốn đủ đường, người phụ nữ dân tộc Tày Ma Thị Ninh đã kiên cường vượt qua rào cản ngôn ngữ, định kiến và cái nghèo. Bằng tư duy đổi mới, chị đã biến nông sản địa phương thành sinh kế bền vững và vinh dự trở thành Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Thái Nguyên",
        "date": ""
      },
      {
        "id": "1457815",
        "title": "Nông dân Việt Nam xuất sắc '40 năm Đổi mới' đến từ Sơn La, từ hai bàn tay trắng đến cơ nghiệp tiền tỷ trên đất dốc",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-son-la-tu-hai-ban-tay-trang-den-co-nghiep-tien-ty-tren-dat-doc-d1457815.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/08/7c5a7580-1748.jpg",
        "sapo": "Hơn 30 năm trước, ông Nguyễn Văn Binh rời Hưng Yên lên Sơn La khai hoang với gần như chỉ đôi bàn tay trắng. Từ những triền đất dốc kém hiệu quả ở bản Hua Đán, xã Chiềng Hặc, ông từng bước gây dựng vùng cây ăn quả rộng 30 ha, cho lợi nhuận hàng tỷ đồng mỗi năm và tạo việc làm cho hàng chục lao động địa phương. Vừa qua, ông Binh được bình chọn là một trong 96 gương mặt “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”.",
        "category": "Gương mặt Điển hình",
        "location": "Sơn La",
        "date": ""
      },
      {
        "id": "1457596",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ An Giang, một người trồng lúa kiểu 'kéo' 670 hộ cùng làm giàu",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-an-giang-mot-nguoi-trong-lua-kieu-keo-670-ho-cung-lam-giau-d1457596.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/07/ong-nguyen-hong-phuong--htx-duong-go-lo--long-thanh--an-giang-2156.jpg",
        "sapo": "Ông Nguyễn Hồng Phương đã cùng nông dân xây dựng HTX Nông nghiệp Đường Gỗ Lộ thành một vùng sản xuất rộng hơn 1.200ha với 670 thành viên. Ông Phương “tự mình làm trước”, từ thử giống lúa Nhật, giảm chi phí, sản xuất theo hướng hữu cơ đến tìm đầu ra cho hạt gạo. Những nỗ lực ấy giúp ông Phương được Trung ương Hội Nông dân Việt Nam bình chọn là Nông dân Việt Nam xuất sắc 40 năm đổi mới.",
        "category": "Gương mặt Điển hình",
        "location": "An Giang",
        "date": ""
      },
      {
        "id": "1457800",
        "title": "Một người Đắk Lắk nâng cao giá trị hạt cà phê gần 40 lần, là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/mot-nguoi-dak-lak-nang-cao-gia-tri-hat-ca-phe-gan-40-lan-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1457800.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/08/img_1284-1656.jpg",
        "sapo": "Gần 30 năm gắn bó với cà phê chồn, ông Hoàng Mạnh Cường (Đắk Lắk) không chỉ tạo dựng mô hình nuôi chồn bán hoang dã độc đáo mà còn đưa sản phẩm cà phê chồn Kiên Cường đạt OCOP 5 sao, nâng cao giá trị hạt cà phê gấp gần 40 lần và từng bước chinh phục thị trường quốc tế. Những nỗ lực ấy giúp ông được bình chọn là một trong 96 “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Đắk Lắk",
        "date": ""
      },
      {
        "id": "1457711",
        "title": "'Nông dân Việt Nam xuất sắc 40 năm Đổi mới' đến từ Cần Thơ là người trồng sầu riêng thu tiền tỷ",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-can-tho-la-nguoi-trong-sau-rieng-thu-tien-ty-d1457711.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/08/trong-sau-rieng-1-1529.jpg",
        "sapo": "Với 3 ha sầu riêng và cách làm khác biệt, hàng năm ông Trần Văn Chiến (SN 1956, ở ấp Trường Khương A, xã Trường Long, TP Cần Thơ) thu lợi nhuận khoảng 3 tỷ đồng. Ông Chiến trở thành một trong 96 gương mặt nhà nông tiêu biểu được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": ""
      },
      {
        "id": "1457669",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Lào Cai, biến vườn hoa hồng cổ thành điểm du lịch hút khách",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-lao-cai-bien-vuon-hoa-hong-co-thanh-diem-du-lich-hut-khach-d1457669.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/08/img_8660-1037.jpg",
        "sapo": "Anh Đỗ Phú Chính, Tổ dân phố Ô Quý Hồ 2, phường Sa Pa, tỉnh Lào Cai đã kiên trì sưu tầm, bảo tồn gần 100 giống hoa hồng cổ, trong đó có loài hoa hồng cổ Sapa, phát triển thành sản phẩm du lịch trải nghiệm và nhà hàng. Anh Chính vinh dự được chọn là một trong những Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026.",
        "category": "Hành trình 40 năm",
        "location": "Lào Cai",
        "date": ""
      },
      {
        "id": "1457382",
        "title": "Ông nông dân Hà Nội là Nông dân Việt Nam xuất sắc 40 năm Đổi mới, chỉ trồng 1 loại hoa 'chiêu tài' mà doanh thu tiền tỷ",
        "url": "https://danviet.vn/ong-nong-dan-ha-noi-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-chi-trong-1-loai-hoa-chieu-tai-ma-doanh-thu-tien-ty-d1457382.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/07/161727img_2689-1617.png",
        "sapo": "Hơn 15 năm chỉ trồng độc loài hoa đồng tiền có ý nghĩa chiêu tài trong phong thủy, ông Bùi Văn Khá (nông dân xã Đan Phượng, TP Hà Nội) nay đã có doanh thu tiền tỷ/năm; cùng bà con, anh em trong vùng xây dựng một trong những vùng trồng hoa có quy mô lớn nhất Hà Nội, tạo việc làm cho hàng chục lao động địa phương. Ông Khá là một trong 96 gương mặt vinh dự được bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” - năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Hà Nội",
        "date": ""
      },
      {
        "id": "1457539",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ Nghệ An, nuôi tôm công nghệ cao, là tỷ phú, từng kiêm nhiều chức vụ",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-nghe-an-nuoi-tom-cong-nghe-cao-la-ty-phu-tung-kiem-nhieu-chuc-vu-d1457539.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/08/nong-dan-xuat-sac-2-0000.jpg",
        "sapo": "Ông Nguyễn Văn Hòa, xã Hải Châu, tỉnh Nghệ An (địa phận huyện Diễn Châu cũ) được vinh danh là Nông dân Việt Nam xuất sắc 40 năm Đổi mới. Trước khi thành tỷ phú nuôi tôm công nghệ cao, doanh thu 10 tỷ/năm, ông Hòa từng đảm nhiệm nhiều chức vụ ở xã Diễn Kim cũ.",
        "category": "Gương mặt Điển hình",
        "location": "Nghệ An",
        "date": ""
      },
      {
        "id": "1457523",
        "title": "Một nữ nông dân Thái Nguyên thu tiền tỷ từ cây chè, là Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm",
        "url": "https://danviet.vn/mot-nu-nong-dan-thai-nguyen-thu-tien-ty-tu-cay-che-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-nam-2026-d1457523.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/07/1788704224757_1497953192519677363_1044509912031565828_2d06b7a5b6080463452ebb8b3de68fe1-1636.jpg",
        "sapo": "Bà Nguyễn Thị Hiền - Chủ tịch HĐQT, Giám đốc Công ty cổ phần Chè Hà Thái - đã bền bỉ gắn bó với cây chè, thay đổi cách làm, nâng chất lượng sản phẩm, đưa trà Thái Nguyên từng bước chinh phục nhiều thị trường khó tính. Bà Hiền trở thành một trong 96 gương mặt nhà nông tiêu biểu được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Thái Nguyên",
        "date": ""
      },
      {
        "id": "1457092",
        "title": "Nông dân Việt Nam 40 năm Đổi mới đến từ Ninh Bình (Hà Nam cũ), dựng cơ nghiệp lớn, doanh thu 5 tỷ/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-40-nam-doi-moi-den-tu-ninh-binh-ha-nam-cu-dung-co-nghiep-lon-doanh-thu-5-ty-nam-d1457092.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/06/1056551788660158055_2298660788091522360_4274995089848573069_f4963850d492ecac81142fde7f7cfa27-1051.jpg",
        "sapo": "Sau ngày xuất ngũ, ông Trương Minh Ngọc, xã Nhân Hà, tỉnh Ninh Bình (địa phận huyện Lý Nhân, tỉnh Hà Nam cũ) đã gây dựng cơ sở gia công đồ gỗ mỹ nghệ, kinh doanh cây cảnh có doanh thu khoảng 5 tỷ đồng/năm. Hành trình bền bỉ vượt khó, làm giàu trên quê hương đã đưa người cựu binh này trở thành “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Ninh Bình",
        "date": ""
      },
      {
        "id": "1457210",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới, tỷ phú Đà Nẵng làm giàu từ đất cằn, 'quả ngon ngọt' chia sẻ với cộng đồng",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-ty-phu-da-nang-lam-giau-tu-dat-can-qua-ngon-ngot-chia-se-voi-cong-dong-d1457210.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/06/1-1106.png",
        "sapo": "Từ vùng đất gò đồi bạc màu, ông Phan Ngọc Anh (SN 1955), ở xã Thu Bồn, TP Đà Nẵng (địa phận tỉnh Quảng Nam cũ) đã gây dựng nên cơ nghiệp với doanh thu hàng trăm tỷ đồng/năm, tạo việc làm cho gần 300 lao động. Năm 2026, ông vinh dự được bình chọn là một trong 96 gương mặt “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”.",
        "category": "Gương mặt Điển hình",
        "location": "Đà Nẵng",
        "date": ""
      },
      {
        "id": "1456630",
        "title": "Gần 40 năm theo nghề nuôi gà, một người Hải Phòng 2 lần nhận danh hiệu 'Nông dân Việt Nam xuất sắc'",
        "url": "https://danviet.vn/bam-dan-ga-gan-40-nam-nong-dan-hai-phong-gio-co-5-van-con-hai-lan-la-nong-dan-viet-nam-xuat-sac-d1456630.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/04/074546trung-ai-dien-0722.jpg",
        "sapo": "Sau 40 năm bền bỉ gây dựng, ông Đào Hữu Thuân ở thôn Cẩm Đông, xã Mao Điền, TP Hải Phòng (địa phận huyện Cẩm Giàng, tỉnh Hải Dương cũ) đã có hệ thống trang trại chăn nuôi gà quy mô lớn, ứng dụng công nghệ hiện đại. Ông vinh dự được bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới\"-năm 2026”.",
        "category": "Gương mặt Điển hình",
        "location": "Hải Phòng",
        "date": ""
      },
      {
        "id": "1456842",
        "title": "Tỷ phú Cần Thơ đưa sầu riêng xuất khẩu ra chợ quốc tế là nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/ty-phu-can-tho-dua-sau-rieng-ra-xuat-khau-ra-cho-quoc-te-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1456842.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/04/sau-bo-2-1950.jpg",
        "sapo": "Ông Lê Văn Sáu, thường gọi Sáu Bờ, ở ấp Tân Thành, xã Tân Bình, TP Cần Thơ (địa phận huyện Phụng Hiệp, tỉnh Hậu Giang cũ) đã gây dựng được vườn sầu riêng rộng 5,5ha, mỗi năm cho doanh thu khoảng 6-7 tỷ đồng, lợi nhuận 5-6 tỷ đồng. Ông Lê Văn Sáu là 1 trong 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Hậu Giang",
        "date": ""
      },
      {
        "id": "1456551",
        "title": "Thầy giáo Đà Nẵng giữ nghề làm nước mắm gia truyền qua 4 đời, là 'Nông dân Việt Nam xuất sắc 40 năm Đổi mới'",
        "url": "https://danviet.vn/thay-giao-da-nang-giu-nghe-lam-nuoc-mam-gia-truyen-qua-4-doi-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1456551.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/03/ntd_0699-1703.jpg",
        "sapo": "Anh Bùi Thanh Phú, phường Hải Vân, TP Đà Nẵng dành nhiều tâm huyết gìn giữ, phát triển nghề làm nước mắm truyền thống của gia đình. Anh Bùi Thanh Phú vừa được Hội đồng Chung khảo Trung ương bình chọn là một trong 96 gương mặt “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Hành trình 40 năm",
        "location": "Đà Nẵng",
        "date": ""
      },
      {
        "id": "1456710",
        "title": "Chính thức công nhận danh hiệu 'Nông dân Việt Nam xuất sắc 40 năm Đổi mới' năm 2026 cho 96 nông dân",
        "url": "https://danviet.vn/chinh-thuc-cong-nhan-danh-hieu-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-nam-2026-cho-96-nong-dan-d1456710.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/04/073836img_0988-0726-1139.jpg",
        "sapo": "Ngày 4/9, thay mặt Ban Thường vụ Trung ương Hội Nông dân Việt Nam, đồng chí Lương Quốc Đoàn, Ủy viên Trung ương Đảng, Chủ tịch Trung ương Hội Nông dân Việt Nam ký Quyết định về việc trao tặng danh hiệu \"Nông dân Việt Nam xuất sắc 40 năm Đổi mới\" năm 2026 và bằng khen của Ban Chấp hành Trung ương Hội Nông dân Việt Nam cho 96 nông dân thuộc 34 tỉnh, thành phố.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": ""
      },
      {
        "id": "1456538",
        "title": "“Nông dân Việt Nam xuất sắc 40 năm Đổi mới” đến từ Ninh Bình, trồng rau màu công nghệ cao, lãi 1,6 tỷ/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-ninh-binh-trong-rau-mau-cong-nghe-cao-lai-16-ty-nam-d1456538.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/03/17275420260827_094020-1719.jpg",
        "sapo": "Với 5 ha trồng dưa và rau màu theo hướng công nghệ cao, năm 2025, ông Tống Viết Vinh (phường Yên Thắng, tỉnh Ninh Bình) đạt doanh thu hơn 8 tỷ đồng, lợi nhuận 1,6 tỷ đồng. Ông Vinh là một trong những nhà nông tiêu biểu của cả nước được bình chọn danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Ninh Bình",
        "date": ""
      },
      {
        "id": "1455920",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới, sở hữu loại nước mắm đạt 5 sao OCOP, 'rót ra thị trường' 500.000 lít/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-nguoi-dua-nuoc-mam-ky-ninh-len-ocop-5-sao-san-xuat-nua-trieu-lit-nam-d1455920.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/01/ocop-5-sao-5-0907.jpg",
        "sapo": "Từ nghề làm nước mắm truyền thống được cha truyền lại, bà Đặng Thị Luận (phường Hải Ninh, tỉnh Hà Tĩnh) đã kiên trì xây dựng thương hiệu nước mắm Luận Nghiệp, từng bước mở rộng thị trường và đưa sản phẩm đạt OCOP 5 sao cấp quốc gia. Năm 2026, bà được bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”.",
        "category": "Hành trình 40 năm",
        "location": "Hà Tĩnh",
        "date": ""
      },
      {
        "id": "1456461",
        "title": "“Nông dân Việt Nam xuất sắc 40 năm đổi mới” đến từ Quảng Ngãi (Kon Tum cũ), có một trang trại 11 ha, thu 3,5 tỷ/năm",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-quang-ngai-kon-tum-cu-co-mot-trang-trai-11-ha-thu-35-ty-nam-d1456461.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/09/03/anh-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-nguyen-van-thanh-chu-trang-trai-11-ha-thu-nhap-35-ty-dongnam-2-1103.jpg",
        "sapo": "Xây dựng trang trại tổng hợp với diện tích 11 ha, thu về khoảng 3,5 tỷ đồng/năm, điều đáng quý khác của “Nông dân Việt Nam xuất sắc 40 năm đổi mới” Nguyễn Văn Thành, ở xã Bờ Y, tỉnh Quảng Ngãi (địa phận huyện Bờ Y, tỉnh Kon Tum cũ) không chỉ làm giàu cho bản thân, mà còn dành một phần thành quả lao động hỗ trợ người nghèo để cùng phát triển.",
        "category": "Hành trình 40 năm",
        "location": "Quảng Ngãi",
        "date": ""
      },
      {
        "id": "1456272",
        "title": "“Nữ tướng” Hợp tác xã Vườn nhà Đà Lạt tại Lâm Đồng là nông dân Việt Nam xuất sắc năm",
        "url": "https://danviet.vn/nu-tuong-hop-tac-xa-vuon-nha-da-lat-tai-lam-dong-la-nong-dan-viet-nam-xuat-sac-nam-2026-d1456272.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/02/145239img_0223-1447.jpg",
        "sapo": "Bà Lương Thị Yến Vân – Giám đốc Hợp tác xã Vườn Nhà Đà Lạt là một trong những Nông dân Việt Nam xuất sắc năm 2026 khi tập trung vào sản xuất nông sản sạch – độc đáo – giá trị cao .",
        "category": "Hành trình 40 năm",
        "location": "Lâm Đồng",
        "date": ""
      },
      {
        "id": "1455784",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới đến từ tỉnh Quảng Ngãi (địa phận Kon Tum cũ) là một tỷ phú sầu riêng",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-tinh-quang-ngai-dia-phan-kon-tum-cu-la-mot-ty-phu-sau-rieng-d1455784.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/08/31/anh-hanh-trinh-tro-thanh-ong-chu-vuon-vang-xanh-cua-1-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-o-xa-vung-bien-quang-ngai-1-1051.jpg",
        "sapo": "Mạnh dạn trồng sầu riêng, ông Bùi Đức Quỳnh, thôn Đăk Tang, xã vùng biên giới Rờ Kơi, tỉnh Quảng Ngãi (địa phận tỉnh Kon Tum cũ) hiện đang sở hữu khoảng 15 ha đất đã \"trồng cây tỷ đô-sẩu riêng), thu lợi nhuận nhiều tỷ đồng/năm. Ông Quỳnh là 1 trong số tấm gương nhà nông tiêu biểu của cả nước được bình chọn “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Quảng Ngãi",
        "date": ""
      },
      {
        "id": "1456077",
        "title": "Bỏ nghề lái xe tải về trồng hoa cây cảnh, một nông dân ở Đà Nẵng được bình chọn là Nông dân Việt Nam xuất sắc",
        "url": "https://danviet.vn/bo-nghe-lai-xe-tai-ve-trong-hoa-cay-canh-mot-nong-dan-o-da-nang-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-d1456077.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/09/01/1788240381980_606334327487706615_606334327487706615_9b7b81dabea2b5e163817122aaa60ed5-1545.jpg",
        "sapo": "Từng làm nhiều nghề để mưu sinh, trong đó có nghề lái xe tải, ông Lê Văn Khoa (SN 1970), ở phường Hòa Cường, TP Đà Nẵng đã quyết định rẽ hướng, gắn bó với nghề trồng và kinh doanh cây cảnh. Gần 20 năm miệt mài với nghề, ông gây dựng vườn cây rộng 6.000m², trị giá hơn 7 tỷ đồng, tạo việc làm thường xuyên cho 30 lao động. Năm 2026, ông vinh dự được Hội đồng Chung khảo Trung ương bình chọn là một trong 96 gương mặt “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”.",
        "category": "Gương mặt Điển hình",
        "location": "Đà Nẵng",
        "date": ""
      },
      {
        "id": "1454353",
        "title": "Tỷ phú trẻ Khánh Hòa trồng nấm hiện đại, hút khách tham quan là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/ty-phu-tre-khanh-hoa-trong-nam-hien-dai-hut-khach-tham-quan-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1454353.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/08/25/ngoc-nam-suoi-hiep-4-1540.jpg",
        "sapo": "Hơn 10 năm khởi nghiệp, nghiên cứu và trực tiếp sản xuất nông nghiệp, anh Nguyễn Hữu Ngọc (SN 1993, phường Nha Trang, Khánh Hòa) đã xây dựng thành công mô hình trồng nấm kết hợp tham quan du lịch. Nhờ những thành tích nổi bật trong sản xuất kinh doanh, anh Ngọc đã được Trung ương Hội NDVN bình chọn là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Khánh Hòa",
        "date": ""
      },
      {
        "id": "1455699",
        "title": "Nữ trưởng thôn '3 trong 1' và hành trình chạm tay tới danh hiệu 'Nông dân Việt Nam xuất sắc 2026'",
        "url": "https://danviet.vn/nu-truong-thon-3-trong-1-va-hanh-trinh-cham-tay-toi-danh-hieu-nong-dan-viet-nam-xuat-sac-2026-d1455699.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/30/2141271-2140.jpg",
        "sapo": "Từ mô hình kinh tế tổng hợp cho thu nhập gần 1 tỷ đồng/năm đến những khoản vay không lãi giúp nhiều hộ dân có thêm vốn làm ăn, chị Đàm Thị Hoài, Trưởng thôn Phai Làng, xã Tân Đoàn, tỉnh Lạng Sơn đang trở thành điểm tựa đáng tin cậy của bà con vùng cao trên hành trình thoát nghèo, vươn lên làm giàu.",
        "category": "Hành trình 40 năm",
        "location": "",
        "date": ""
      },
      {
        "id": "1455222",
        "title": "Nhà khoa học của nhà nông ở Quảng Trị được bình chọn là Nông dân Việt Nam xuất sắc 40 năm Đổi mới",
        "url": "https://danviet.vn/nha-khoa-hoc-cua-nha-nong-o-quang-tri-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1455222.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/08/28/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-2026-o-quang-tri-5-1600.jpg",
        "sapo": "Được vinh danh “Nhà khoa học của nhà nông” năm 2025 nhờ sáng kiến biến phế phụ phẩm thành thức ăn chăn nuôi, anh Nguyễn Đăng Vương - Giám đốc HTX Nông nghiệp sạch Tây Sơn (Quảng Trị) tiếp tục được bình chọn là Nông dân Việt Nam xuất sắc 40 năm Đổi mới năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": ""
      },
      {
        "id": "1454837",
        "title": "Nông dân Quảng Trị ứng dụng công nghệ sản xuất thủy hải sản được bình chọn “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”",
        "url": "https://danviet.vn/nong-dan-quang-tri-ung-dung-cong-nghe-san-xuat-thuy-hai-san-duoc-binh-chon-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1454837.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/27/nong-dan-xs2-1127.jpg",
        "sapo": "Từ một giáo viên mầm non bén duyên với nghề chế biến hải sản, bà Nguyễn Thị Đoàn ở xã Ninh Châu, tỉnh Quảng Trị (thuộc địa phận xã Hải Ninh, huyện Quảng Ninh, tỉnh Quảng Bình cũ) đã mạnh dạn đầu tư máy móc, công nghệ hiện đại, xây dựng chuỗi liên kết sản xuất, tiêu thụ thủy hải sản. Mô hình giúp hợp tác xã đạt doanh thu gần 20 tỷ đồng/năm, tạo việc làm cho nhiều lao động địa phương. Năm 2026, bà được bình chọn danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": ""
      },
      {
        "id": "1454616",
        "title": "Tỷ phú trồng nấm hữu cơ ở Quảng Bình, nay là Quảng Trị được bình chọn là 'Nông dân Việt Nam xuất sắc 40 năm Đổi mới'",
        "url": "https://danviet.vn/ty-phu-trong-nam-huu-co-o-quang-binh-nay-la-quang-tri-duoc-binh-chon-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1454616.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/26/ndvnxs2-1619.jpg",
        "sapo": "Bà Ngô Thị Kim Liên ở thôn Sơn Lý, xã Đông Trạch, tỉnh Quảng Trị (địa phận thuộc xã Sơn Lộc, huyện Bố Trạch, tỉnh Quảng Bình cũ) đã xây dựng HTX sản xuất và kinh doanh nông nghiệp Tuấn Linh thành mô hình trồng nấm hữu cơ quy mô lớn. Bà còn liên kết với hơn 500 hộ dân, tạo nghề nghiệp, thu nhập cho hàng trăm lao động. Bà được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": ""
      },
      {
        "id": "1453708",
        "title": "Nông dân Việt Nam xuất sắc 40 năm đổi mới đến từ Cần Thơ: Làm giàu từ cá thát lát, bán cả sang 'chợ Mỹ, chợ Hàn Quốc'",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-den-tu-can-tho-lam-giau-tu-ca-that-lat-ban-ca-sang-cho-my-cho-han-quoc-d1453708.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/24/nguyen-kim-thuy-giam-doc-htx-ky-nhu--nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-7-1806.jpg",
        "sapo": "Bà Nguyễn Kim Thùy, Giám đốc HTX Kỳ Như, TP Cần Thơ đã kiên trì chế biến con cá thát lát quê nhà thành các sản phẩm có thương hiệu trên thị trường. Bà Thùy có 11 sản phẩm OCOP chế biến từ cá thát lát, trong đó có 10 sản phẩm đạt 4 sao, 1 sản phẩm đạt 5 sao, có mặt tại khoảng 20 tỉnh, thành phố, xuất khẩu sang các thị trường khó tính như Hàn Quốc, Mỹ.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": ""
      },
      {
        "id": "1453125",
        "title": "Quanh năm trồng rừng, giàu từ rừng, một người Huế được vinh danh “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”",
        "url": "https://danviet.vn/quanh-nam-trong-rung-giau-tu-rung-mot-nguoi-hue-duoc-vinh-danh-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1453125.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/21/0836211787236605103_709020819188526130_g795249860739133933_373332ff214c59b87782e2fd326d9adb-0826.jpg",
        "sapo": "Gần 40 năm gắn bó với nghề trồng rừng keo, ông Đỗ Viết Tuyến ở TP Huế đã biến đất cằn thành những cánh rừng cho thu nhập hàng trăm triệu đồng mỗi năm, đưa ông đến với danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": ""
      },
      {
        "id": "1454015",
        "title": "Tỷ phú trồng sầu riêng, kinh doanh vật tư nông nghiệp ở Khánh Hòa là “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”",
        "url": "https://danviet.vn/ty-phu-trong-sau-rieng-kinh-doanh-vat-tu-nong-nghiep-o-khanh-hoa-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1454015.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/08/24/vinh-dong-khanh-son-1-1453.jpg",
        "sapo": "Ông Vũ Văn Vịnh, thôn Tha Mang, xã Đông Khánh Sơn, tỉnh Khánh Hòa (địa phận huyện Khánh Sơn cũ) đã vươn lên làm giàu từ cây đặc sản sầu riêng. Ông Vịnh còn chia sẻ kinh nghiệm trồng sầu riêng cho bà con nông dân. Ông được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Khánh Hòa",
        "date": ""
      },
      {
        "id": "1453135",
        "title": "Tỷ phú Khánh Hòa trồng đa cây, nuôi đa con kết hợp làm du lịch là 'Nông dân Việt Nam xuất sắc 40 năm đổi mới'",
        "url": "https://danviet.vn/ty-phu-khanh-hoa-trong-da-cay-nuoi-da-con-ket-hop-lam-du-lich-la-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1453135.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/08/21/thanh-san-viet-8-0831.jpg",
        "sapo": "Từ vùng đất sỏi đá nghèo kiệt, anh Nguyễn Minh Thành, thôn Suối Sâu, xã Nam Ninh Hòa, tỉnh Khánh Hòa (địa phận huyện Ninh Hòa cũ) đã biến thành vùng đất trù phú với nhiều cây trồng mới, vật nuôi mới lạ, kết hợp làm du lịch, mang lại giá trị kinh tế cao. Anh Thành được bình chọn nhận danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới” năm 2026.",
        "category": "Gương mặt Điển hình",
        "location": "Khánh Hòa",
        "date": ""
      },
      {
        "id": "1453226",
        "title": "Trình Quốc hội việc tách dự án điện hạt nhân Ninh Thuận thành 3 dự án khác nhau",
        "url": "https://danviet.vn/trinh-quoc-hoi-viec-tach-du-an-dien-hat-nhan-ninh-thuan-thanh-3-du-an-khac-nhau-d1453226.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/21/125229202608211108407937_1787285328454_2669430916532772711_g7574298250520479089_2c49a33a346effea58431a59f940a753-1248.jpg",
        "sapo": "Sáng 21/8, tại Quốc hội, thừa uỷ quyền của Thủ tướng, Bộ trưởng Bộ Tài chính đã có Tờ trình về dự thảo Nghị quyết của Quốc hội về việc tách dự án điện hạt nhân Ninh Thuận thành các dự án độc lập.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": ""
      },
      {
        "id": "1453039",
        "title": "Nông dân Việt Nam xuất sắc 40 năm Đổi mới: Từ 20 con thỏ New Zealand đến cơ ngơi tiền tỷ của một người Lạng Sơn",
        "url": "https://danviet.vn/nong-dan-viet-nam-xuat-sac-40-doi-moi-tu-20-con-tho-new-zealand-den-co-ngoi-tien-ty-cua-mot-nguoi-lang-son-d1453039.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/08/20/1787136154959_8437526564803242467_8437526564803242467_7e30a33a576908224888aba9fa031cd8-1748.jpg",
        "sapo": "Anh Nguyễn Ngọc Thạch, dân tộc Tày ở xã Nhân Lý, tỉnh Lạng Sơn là có tên trong danh sách 96 Nông dân Việt Nam xuất sắc 40 năm đổi mới do Hội đồng chung khảo bình chọn. Anh Thạch đã xây dựng thành công mô hình nuôi thỏ New Zealand quy mô lớn, mang lại thu nhập hàng trăm triệu đồng mỗi năm.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": ""
      },
      {
        "id": "1420857",
        "title": "Chính thức khởi động đề cử bình chọn danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”",
        "url": "https://danviet.vn/chinh-thuc-khoi-dong-de-cu-binh-chon-danh-hieu-nong-dan-viet-nam-xuat-sac-40-nam-doi-moi-d1420857.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/content/2026/04/23/nong-dan-xuat-sac-0651.jpg",
        "sapo": "Ban Chấp hành Trung ương Hội Nông dân Việt Nam vừa chính thức ban hành Công văn số 2275-CV/HNDTW gửi Hội Nông dân các tỉnh, thành phố về việc thực hiện đề cử bình chọn danh hiệu “Nông dân Việt Nam xuất sắc 40 năm Đổi mới”. Đây là hoạt động trọng tâm nằm trong khuôn khổ Chương trình “Tự hào Nông dân Việt Nam 40 năm Đổi mới” theo Kế hoạch số 292-KH/HNDTW ngày 27/3/2026 của Ban Thường vụ Trung ương Hội.",
        "category": "Gương mặt Điển hình",
        "location": "",
        "date": ""
      },
      {
        "id": "1449411",
        "title": "Đã bình chọn được 96 Nông dân Việt Nam xuất sắc 40 năm Đổi mới– năm",
        "url": "https://danviet.vn/da-binh-chon-duoc-96-nong-dan-viet-nam-xuat-sac-40-nam-doi-moinam-2026-d1449411.html",
        "img": "https://t.ex-cdn.com/danviet.vn/768w/files/news/2026/08/06/1786009179573_1785719900663690540_1785719900663690540_7028d21599627f95d6f96e92fb4ceb5d-1734.jpg",
        "sapo": "Chiều ngày 6/8, tại thủ đô Hà Nội, Hội đồng bình chọn chung khảo đã họp chấm chung khảo Bình chọn Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026. Đồng chí Bùi Thị Thơm, Phó Chủ tịch Ban Chấp hành Trung ương Hội Nông dân Việt Nam, Chủ tịch Hội đồng Bình chọn chung khảo danh hiệu Nông dân Việt Nam xuất sắc 40 năm Đổi mới-năm 2026 chủ trì buổi họp.",
        "category": "Chính sách & Chuyên gia",
        "location": "Hà Nội",
        "date": ""
      }
    ]
  },
  {
    "year": 2025,
    "label": "2025",
    "kicker": "Sự kiện năm 2025 • Diễn đàn Thập kỷ",
    "title": "Diễn Đàn Quốc Gia Lần Thứ X: Kỷ Nguyên Số & Người Nông Dân 4.0",
    "date": "Tháng 10/2025",
    "location": "Cung Văn hóa Hữu nghị Việt Xô, Hà Nội",
    "cover": "./images/sample-event.png",
    "summary": "Đối thoại cấp Nhà nước với sự tham gia của Lãnh đạo Chính phủ; giải quyết các điểm nghẽn tích tụ ruộng đất, nguồn vốn tín dụng ưu đãi và ứng dụng trí tuệ nhân tạo (AI) trong quản lý nông nghiệp.",
    "stats": [
      {
        "value": 65,
        "suffix": "",
        "label": "Bài báo lưu trữ"
      }
    ],
    "link": "https://danviet.vn/dong-su-kien/su-kien-2025.html",
    "linkLabel": "Xem chuyên trang 2025",
    "articleCount": 65,
    "articles": [
      {
        "title": "Ứng dụng AI và cảm biến IoT: Người nông dân quản lý hàng chục hecta trên smartphone",
        "category": "Chuyển đổi số",
        "date": "15/10/2025",
        "sapo": "Các mô hình tự động hóa tưới tiêu thông minh, giám sát sâu bệnh bằng trí tuệ nhân tạo đang giúp nông dân nâng cao hiệu suất vượt trội.",
        "url": "https://danviet.vn",
        "img": "",
        "location": ""
      },
      {
        "title": "Diễn đàn Nông dân Quốc gia 2025: Tháo gỡ các nút thắt về vốn và tích tụ ruộng đất",
        "category": "Đối thoại chính sách",
        "date": "14/10/2025",
        "sapo": "Đối thoại trực tiếp giữa người đứng đầu các bộ ngành với đại biểu nông dân xuất sắc cả nước nhằm gỡ khó chính sách tín dụng xanh.",
        "url": "https://danviet.vn",
        "img": "",
        "location": ""
      },
      {
        "title": "Khi nông dân trở thành \"KOLs\": Doanh thu tiền tỷ từ các phiên livestream bán nông sản",
        "category": "Thương mại số",
        "date": "12/10/2025",
        "sapo": "Thế hệ nông dân số tự tin đưa đặc sản vùng miền lên các sàn thương mại điện tử quốc tế, chốt đơn hàng nghìn tấn trái cây mỗi vụ.",
        "url": "https://danviet.vn",
        "img": "",
        "location": ""
      }
    ]
  },
  {
    "year": 2024,
    "label": "2024",
    "kicker": "Sự kiện năm 2024 • Hội nhập Quốc tế",
    "title": "Chuỗi Sự Kiện 2024: Vươn Tầm Nông Sản Việt & Chuỗi Giá Trị Toàn Cầu",
    "date": "Tháng 10/2024",
    "location": "Nhà hát Lớn Hà Nội",
    "cover": "./images/sample-event.png",
    "summary": "Chiến dịch truyền thông toàn diện về giải pháp thích ứng biến đổi khí hậu tại ĐBSCL, xây dựng mã số vùng trồng cho sầu riêng, gạo ST25 và thâm nhập các thị trường tiêu chuẩn cao EU, Hoa Kỳ, Nhật Bản.",
    "stats": [
      {
        "value": 62,
        "suffix": "",
        "label": "Bài báo lưu trữ"
      }
    ],
    "link": "https://danviet.vn/dong-su-kien/su-kien-2024.html",
    "linkLabel": "Xem chuyên trang 2024",
    "articleCount": 62,
    "articles": [
      {
        "title": "Cơn sốt sầu riêng tỷ đô và bài toán mã số vùng trồng chuẩn quốc tế",
        "category": "Xuất khẩu",
        "date": "18/10/2024",
        "sapo": "Hành trình đưa nông sản Việt vượt qua các hàng rào kiểm dịch khắt khe của đối tác nước ngoài để khẳng định thương hiệu quốc gia.",
        "url": "https://danviet.vn",
        "img": "",
        "location": ""
      },
      {
        "title": "Đề án 1 triệu hecta lúa chất lượng cao, phát thải thấp: Cú hích cho vựa lúa miền Tây",
        "category": "ĐBSCL",
        "date": "15/10/2024",
        "sapo": "Nông dân vùng châu thổ sông Cửu Long đi tiên phong chuyển đổi sản xuất lúa xanh, thu tín chỉ carbon.",
        "url": "https://danviet.vn",
        "img": "",
        "location": ""
      },
      {
        "title": "Liên kết chế biến sâu: Bí quyết giữ giá nông sản khi bước vào vụ thu hoạch rộ",
        "category": "Chế biến sâu",
        "date": "13/10/2024",
        "sapo": "Giải pháp giảm thiểu rủi ro được mùa mất giá nhờ chuỗi nhà máy sấy lạnh và chế biến nông sản đóng hộp.",
        "url": "https://danviet.vn",
        "img": "",
        "location": ""
      }
    ]
  },
  {
    "year": 2023,
    "label": "2023",
    "kicker": "Sự kiện năm 2023 • Kinh tế Tuần hoàn",
    "title": "Tôn Vinh 2023: Nông Dân Xuất Sắc & Hợp Tác Xã Kiểu Mới",
    "date": "Tháng 10/2023",
    "location": "Trung tâm Hội nghị Quốc gia, Hà Nội",
    "cover": "./images/sample-event.png",
    "summary": "Đột phá tư duy từ sản xuất nông nghiệp thuần túy sang kinh tế nông nghiệp tuần hoàn; nhân rộng mô hình kinh tế tập thể, liên kết chặt chẽ giữa nông dân và doanh nghiệp chế biến sâu.",
    "stats": [
      {
        "value": 59,
        "suffix": "",
        "label": "Bài báo lưu trữ"
      }
    ],
    "link": "https://danviet.vn/dong-su-kien/su-kien-2023.html",
    "linkLabel": "Xem chuyên trang 2023",
    "articleCount": 59,
    "articles": [
      {
        "title": "63 Hợp tác xã tiêu biểu toàn quốc: Sức mạnh cộng đồng làm nên kỳ tích nông nghiệp",
        "category": "HTX Tiêu Biểu",
        "date": "14/10/2023",
        "sapo": "Năm đầu tiên chương trình vinh danh các mô hình HTX nông nghiệp kiểu mới hoạt động hiệu quả, đem lại thu nhập cao cho xã viên.",
        "url": "https://danviet.vn",
        "img": "",
        "location": ""
      },
      {
        "title": "Kinh tế tuần hoàn không chất thải: Mô hình vườn - ao - chuồng phiên bản công nghệ cao",
        "category": "Tuần hoàn",
        "date": "11/10/2023",
        "sapo": "Tận dụng phế phụ phẩm làm phân bón hữu cơ vi sinh, giảm 40% chi phí đầu vào và bảo vệ môi trường nông thôn.",
        "url": "https://danviet.vn",
        "img": "",
        "location": ""
      },
      {
        "title": "Chân dung 100 Nông dân Việt Nam xuất sắc năm 2023: Vượt bão giá, làm giàu bền vững",
        "category": "Gương sáng",
        "date": "08/10/2023",
        "sapo": "Những tấm gương dám nghĩ dám làm, ứng dụng khoa học kỹ thuật để trở thành tỷ phú trên chính mảnh đất quê hương.",
        "url": "https://danviet.vn",
        "img": "",
        "location": ""
      }
    ]
  },
  {
    "year": 2022,
    "label": "2022",
    "kicker": "Sự kiện năm 2022 • Thập kỷ Dấu ấn",
    "title": "Đại Lễ Kỷ Niệm: 10 Năm Hành Trình Tự Hào Nông Dân Việt Nam (2012 – 2022)",
    "date": "14/10/2022",
    "location": "Cung Văn hóa Lao động Hữu nghị Việt Xô, Hà Nội",
    "cover": "./images/sample-event.png",
    "summary": "Dấu mốc kỷ niệm tròn 1 thập kỷ chương trình thường niên. Tôn vinh gần 700 gương mặt nông dân qua các thời kỳ, khẳng định vị thế bền bỉ của người bạn đồng hành thủy chung Báo Dân Việt.",
    "stats": [
      {
        "value": 60,
        "suffix": "",
        "label": "Bài báo lưu trữ"
      },
      {
        "value": 700,
        "suffix": "",
        "label": "Gương mặt qua 10 năm"
      },
      {
        "value": 10,
        "suffix": "",
        "label": "Năm hành trình"
      }
    ],
    "link": "https://danviet.vn/dong-su-kien/su-kien-2022.html",
    "linkLabel": "Xem chuyên trang 2022",
    "articleCount": 60,
    "articles": [
      {
        "title": "Nhìn lại 10 năm Tự hào Nông dân Việt Nam: Nâng tầm vị thế người nông dân thời kỳ mới",
        "category": "Thập kỷ dấu ấn",
        "date": "14/10/2022",
        "sapo": "Hành trình 10 năm bền bỉ phát hiện, cổ vũ và tôn vinh những người làm nên linh hồn cho nông nghiệp nước nhà.",
        "url": "https://danviet.vn",
        "img": "",
        "location": ""
      },
      {
        "title": "Trực tiếp Lễ tôn vinh Nông dân Việt Nam xuất sắc năm 2022 tại Thủ đô Hà Nội",
        "category": "Lễ trao giải",
        "date": "14/10/2022",
        "sapo": "Không khí trang trọng tại Cung Văn hóa Hữu nghị Việt Xô tôn vinh 100 tấm gương nông dân tiêu biểu cả nước.",
        "url": "https://danviet.vn",
        "img": "",
        "location": ""
      },
      {
        "title": "Những câu chuyện vượt khó phi thường của nông dân Việt Nam qua 10 mùa vinh danh",
        "category": "Gương sáng",
        "date": "10/10/2022",
        "sapo": "Từ nông dân nghèo khó đến những triệu phú, tỷ phú nông nghiệp khẳng định tinh thần tự lực tự cường của người nông dân Việt.",
        "url": "https://danviet.vn",
        "img": "",
        "location": ""
      }
    ]
  }
];
