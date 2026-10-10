(function () {
    var PAGE_SIZE = 6; // số bài hiện mỗi lần, đồng nhất các năm
    var site = window.SITE || {};
    var events = window.EVENTS || [];

    function esc(str) {
        return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
        });
    }

    function formatNumber(n) {
        return n.toLocaleString("vi-VN");
    }

    /* ---------------- Render ---------------- */

    function renderStats(stats) {
        return stats.map(function (s) {
            return '<div class="stat stat--sm">' +
                '<div class="stat__value" data-count="' + s.value + '" data-suffix="' + esc(s.suffix) + '">0</div>' +
                '<div class="stat__label">' + esc(s.label) + '</div>' +
            '</div>';
        }).join("");
    }

    function renderThumb(img) {
        if (img) return '<img src="' + esc(img) + '" alt="" loading="lazy">';
        return '<span class="article-card__placeholder">Dân Việt</span>';
    }

    function renderArticle(a) {
        var meta = [a.location, a.date].filter(Boolean).map(esc).join(" · ");
        return '<a class="card article-card reveal-card" href="' + esc(a.url) + '" target="_blank" rel="noopener">' +
            '<div class="article-card__thumb">' + renderThumb(a.img) + '</div>' +
            '<div class="article-card__body">' +
                '<div class="article-card__source"><strong>Dân Việt</strong><span>' + meta + '</span></div>' +
                '<h4 class="article-card__title">' + esc(a.title) + '</h4>' +
                (a.sapo ? '<p class="article-card__sapo">' + esc(a.sapo) + '</p>' : '') +
                '<span class="article-card__link">Đọc trên Dân Việt →</span>' +
            '</div>' +
        '</a>';
    }

    function renderFeatured(list) {
        if (!list || !list.length) return "";
        return '<div class="featured">' +
            '<h4 class="featured__title reveal">Tiêu điểm sự kiện</h4>' +
            '<div class="featured__grid">' +
            list.map(function (f) {
                return '<a class="card featured-card reveal-card" href="' + esc(f.url) + '" target="_blank" rel="noopener">' +
                    '<div class="featured-card__thumb">' + renderThumb(f.img) +
                        '<span class="featured-card__highlight">' + esc(f.highlight) + '</span>' +
                    '</div>' +
                    '<div class="featured-card__body">' +
                        '<span class="tag">' + esc(f.tag) + '</span>' +
                        '<h5 class="featured-card__title">' + esc(f.title) + '</h5>' +
                        '<p class="featured-card__sapo">' + esc(f.sapo) + '</p>' +
                    '</div>' +
                '</a>';
            }).join("") +
            '</div>' +
        '</div>';
    }

    function renderEvent(ev) {
        var pending = ev.articles.length < ev.articleCount
            ? '<p class="press__note">Đang cập nhật — hiện có ' + ev.articles.length + '/' + ev.articleCount + ' bài viết.</p>'
            : "";

        return '<article class="event' + (ev.special ? ' event--special' : '') + '" id="event-' + ev.year + '" data-year="' + ev.year + '">' +
            '<div class="event__year">' + ev.year + '</div>' +
            '<span class="event__comet" aria-hidden="true"></span>' +
            '<div class="event__head">' +
                '<div class="event__cover ratio-16x9 reveal reveal-wipe"><span class="event__scan"></span><img src="' + esc(ev.cover) + '" alt="' + esc(ev.title) + '" loading="lazy"></div>' +
                '<div class="reveal reveal--right">' +
                    '<div class="event__meta">' +
                        '<span class="tag tag--red">' + (ev.special ? 'Đặc biệt ' : 'Năm ') + ev.year + '</span>' +
                        '<span class="tag">' + esc(ev.date) + '</span>' +
                        '<span class="tag">' + esc(ev.location) + '</span>' +
                    '</div>' +
                    '<p class="event__kicker">' + esc(ev.kicker) + '</p>' +
                    '<h3 class="event__title">' + esc(ev.title) + '</h3>' +
                    '<p class="event__summary">' + esc(ev.summary) + '</p>' +
                    '<div class="event__stats">' + renderStats(ev.stats) + '</div>' +
                    (ev.link ? '<a class="btn-outline event__link" href="' + esc(ev.link) + '" target="_blank" rel="noopener">' + esc(ev.linkLabel || "Xem chuyên trang") + ' →</a>' : '') +
                '</div>' +
            '</div>' +
            renderFeatured(ev.featured) +
            '<div class="press">' +
                '<div class="press__head reveal">' +
                    '<h4 class="press__title">Bài báo tư liệu</h4>' +
                '</div>' +
                pending +
                '<div class="press__grid"></div>' +
                '<div class="press__more"><button class="btn-outline" type="button">Xem thêm</button></div>' +
            '</div>' +
        '</article>';
    }

    /* ---------------- Hiện dần khi cuộn tới ---------------- */

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function show(el) {
        // Thẻ trong lưới hiện so le theo cột
        if (el.classList.contains("reveal-card") && el.parentNode) {
            var index = Array.prototype.indexOf.call(el.parentNode.children, el);
            el.style.setProperty("--delay", (index % 3) * 0.12 + "s");
            // Bỏ độ trễ sau khi hiện xong để hover phản hồi ngay
            clearTimeout(el._delayTimer);
            el._delayTimer = setTimeout(function () { el.style.removeProperty("--delay"); }, 1000);
        }
        el.classList.add("is-visible");
        el.querySelectorAll("[data-count]").forEach(countUp);
    }

    function hide(el) {
        el.classList.remove("is-visible");
        el.querySelectorAll(".is-done").forEach(function (n) { n.classList.remove("is-done"); });
    }

    // Chạy lại hiệu ứng xuất hiện ngay lập tức (dùng khi người dùng chọn lại)
    function replay(el) {
        hide(el);
        void el.offsetWidth; // ép trình duyệt vẽ lại trạng thái ẩn
        show(el);
    }

    // Lặp lại: rời màn hình thì ẩn, quay lại thì hiện lại từ đầu
    var revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            var el = entry.target;
            if (entry.isIntersecting) {
                if (!el.classList.contains("is-visible")) show(el);
            } else if (el.classList.contains("is-visible") && !el.contains(document.activeElement)) {
                hide(el);
            }
        });
    }, { threshold: 0, rootMargin: "0px 0px -8% 0px" });

    function observeReveal(root) {
        root.querySelectorAll(".reveal, .reveal-card").forEach(function (el) {
            revealIO.observe(el);
        });
    }

    // Nút nảy nhẹ khi bấm
    function press(btn) {
        btn.classList.remove("is-pressed");
        void btn.offsetWidth;
        btn.classList.add("is-pressed");
    }

    /* ---------------- Danh sách bài: đúng thứ tự trong chủ đề CMS + xem thêm ---------------- */

    function setupPress(eventEl, ev) {
        var grid = eventEl.querySelector(".press__grid");
        var moreBtn = eventEl.querySelector(".press__more button");
        var shown = 0;

        function draw(reset) {
            var list = ev.articles;
            if (reset) {
                grid.querySelectorAll(".reveal-card").forEach(function (c) { revealIO.unobserve(c); });
                grid.innerHTML = "";
                shown = 0;
            }
            var next = list.slice(shown, shown + PAGE_SIZE);
            grid.insertAdjacentHTML("beforeend", next.map(renderArticle).join(""));
            observeReveal(grid);
            shown += next.length;
            var remaining = list.length - shown;
            moreBtn.parentNode.style.display = remaining > 0 ? "" : "none";
            moreBtn.textContent = "Xem thêm";
        }

        moreBtn.addEventListener("click", function () {
            press(moreBtn);
            draw(false);
        });
        draw(true);
    }

    /* ---------------- Đếm số khi cuộn tới ---------------- */

    function countUp(el) {
        var target = parseFloat(el.getAttribute("data-count")) || 0;
        var suffix = el.getAttribute("data-suffix") || "";
        var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) {
            el.textContent = formatNumber(target) + suffix;
            return;
        }
        var start = null;
        var duration = 1600;
        var token = el._countToken = (el._countToken || 0) + 1;
        el.classList.remove("is-done");
        function step(ts) {
            if (token !== el._countToken) return;
            if (!start) start = ts;
            var p = Math.min((ts - start) / duration, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = formatNumber(Math.round(target * eased)) + suffix;
            if (p < 1) requestAnimationFrame(step);
            else el.classList.add("is-done");
        }
        requestAnimationFrame(step);
    }

    /* ---------------- Hiệu ứng ---------------- */

    // Chọn năm: cuộn mượt tới sự kiện rồi "bật đèn" cho sự kiện đó
    function focusEvent(eventEl) {
        eventEl.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        if (reduceMotion) return;

        var done = false;
        function play() {
            if (done) return;
            done = true;
            window.removeEventListener("scrollend", play);
            eventEl.classList.remove("is-focus");
            void eventEl.offsetWidth;
            eventEl.classList.add("is-focus");
            if (window.FX && eventEl.classList.contains("event--special")) window.FX.celebrate(eventEl);
            eventEl.querySelectorAll(".event__head .reveal, .featured__title, .press__head").forEach(replay);
            var cards = eventEl.querySelectorAll(".reveal-card");
            for (var i = 0; i < Math.min(cards.length, 6); i++) replay(cards[i]);
            clearTimeout(eventEl._focusTimer);
            eventEl._focusTimer = setTimeout(function () { eventEl.classList.remove("is-focus"); }, 1800);
        }
        // Đợi cuộn xong mới chạy hiệu ứng
        window.addEventListener("scrollend", play);
        setTimeout(play, 900);
    }

    function initYearLinks() {
        document.addEventListener("click", function (e) {
            var link = e.target.closest('a[href^="#event-"]');
            if (!link) return;
            var target = document.querySelector(link.getAttribute("href"));
            if (!target) return;
            e.preventDefault();
            if (link.classList.contains("year-nav__item")) press(link);
            history.replaceState(null, "", link.getAttribute("href"));
            focusEvent(target);
        });
    }

    /* ---------------- Khởi tạo ---------------- */

    function setText(selector, text) {
        var el = document.querySelector(selector);
        if (el && text) el.textContent = text;
    }

    function init() {
        var container = document.getElementById("events-list");
        var yearNav = document.getElementById("year-nav");

        setText(".hero__eyebrow", site.kicker);
        setText(".hero__title", site.title);
        setText(".hero__desc", site.desc);

        container.innerHTML = events.map(renderEvent).join("");
        yearNav.innerHTML = events.map(function (ev, i) {
            return '<a class="year-nav__item' + (ev.special ? " year-nav__item--special" : "") + (i === 0 ? " active" : "") +
                '" href="#event-' + ev.year + '">' + esc(ev.label || ev.year) + '</a>';
        }).join("");

        events.forEach(function (ev) {
            setupPress(document.getElementById("event-" + ev.year), ev);
        });

        // Số liệu tổng ở dải stats là số cố định do biên tập cung cấp (xem index.html)

        observeReveal(document);
        initYearLinks();

        // Đánh dấu năm đang xem
        var navIo = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var year = entry.target.getAttribute("data-year");
                yearNav.querySelectorAll(".year-nav__item").forEach(function (a) {
                    var on = a.getAttribute("href") === "#event-" + year;
                    a.classList.toggle("active", on);
                    if (on && yearNav.scrollWidth > yearNav.clientWidth) {
                        yearNav.scrollTo({ left: a.offsetLeft - 16, behavior: "smooth" });
                    }
                });
            });
        }, { rootMargin: "-45% 0px -50% 0px" });
        document.querySelectorAll(".event").forEach(function (el) { navIo.observe(el); });

        // Header + nút lên đầu trang
        var header = document.querySelector(".header");
        var toTop = document.querySelector(".back-to-top");
        var progressBar = document.querySelector(".scroll-progress");
        var heroInner = document.querySelector(".hero__inner");
        var eventEls = document.querySelectorAll(".event");
        var ticking = false;

        function onScroll() {
            ticking = false;
            var y = window.scrollY;
            var vh = window.innerHeight;
            header.classList.toggle("is-scrolled", y > 40);
            toTop.classList.toggle("is-visible", y > 600);

            var max = document.documentElement.scrollHeight - vh;
            progressBar.style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";

            if (reduceMotion) return;

            // Parallax: nội dung hero trôi chậm và mờ dần
            if (y < vh) {
                heroInner.style.transform = "translateY(" + y * 0.35 + "px)";
                heroInner.style.opacity = Math.max(1 - y / (vh * 0.8), 0);
            }

            // Trục timeline sáng dần tới giữa màn hình
            eventEls.forEach(function (el) {
                var r = el.getBoundingClientRect();
                var p = (vh * 0.5 - r.top) / r.height;
                el.style.setProperty("--p", Math.min(Math.max(p, 0), 1));
            });
        }
        window.addEventListener("scroll", function () {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(onScroll);
            }
        }, { passive: true });
        onScroll();

        // Hiệu ứng trang trí nằm ở effects.js
        if (window.FX) window.FX.init();
        toTop.addEventListener("click", function () { window.scrollTo({ top: 0 }); });

        // Menu mobile
        var nav = document.querySelector(".header__nav");
        document.querySelector(".header__toggle").addEventListener("click", function () {
            nav.classList.toggle("is-open");
        });
        nav.addEventListener("click", function (e) {
            if (e.target.tagName === "A") nav.classList.remove("is-open");
        });
    }

    document.addEventListener("DOMContentLoaded", init);
})();
