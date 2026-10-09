/**
 * Hiệu ứng trang trí — tách riêng khỏi main.js.
 * main.js gọi FX.init() sau khi render, và FX.celebrate(el) khi chọn sự kiện đặc biệt.
 * Toàn bộ tắt khi người dùng bật "giảm chuyển động".
 */
(function () {
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    var GOLD = ["#fbf3dc", "#f3dca0", "#e6c178", "#d4a64a"];

    function rand(min, max) {
        return min + Math.random() * (max - min);
    }

    /* =============================================================
     * Màn mở đầu: kéo rèm sân khấu (chỉ 1 lần mỗi phiên)
     * Lớp html.intro được bật sớm bằng script nhỏ trong <head>.
     * ============================================================= */
    function initCurtain() {
        var root = document.documentElement;
        var curtain = document.querySelector(".curtain");
        if (!curtain) return;
        if (!root.classList.contains("intro")) {
            curtain.remove();
            return;
        }
        try { sessionStorage.setItem("intro-seen", "1"); } catch (e) {}

        // Rèm chạy bằng CSS; JS chỉ dọn dẹp khi rèm đã kéo xong
        var finished = false;
        function finish() {
            if (finished) return;
            finished = true;
            curtain.remove();
            // Chỉ mở khoá cuộn; giữ class "intro" để độ trễ animation của hero không bị đổi giữa chừng
            root.classList.remove("intro-lock");
        }
        curtain.querySelector(".curtain__panel--left").addEventListener("animationend", finish);
        // Dự phòng khi animationend không bắn (tab ẩn, trình duyệt cũ)
        setTimeout(finish, 4000);
    }

    /* =============================================================
     * Bụi vàng trong hero (canvas): 3 lớp sâu + sao lấp lánh,
     * trôi theo chuột; dừng khi hero khuất hoặc tab ẩn.
     * ============================================================= */
    function initSparkles() {
        var hero = document.querySelector(".hero");
        var canvas = document.querySelector(".sparkles");
        if (!hero || !canvas) return;
        var ctx = canvas.getContext("2d");
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var w, h, parts = [];
        var mouse = { x: 0, y: 0, tx: 0, ty: 0 };
        var running = false;
        var visible = true;

        function make(initial) {
            var depth = Math.random(); // 0 = xa, 1 = gần
            var star = Math.random() < 0.12;
            return {
                x: Math.random() * w,
                y: initial ? Math.random() * h : h + 20,
                depth: depth,
                r: star ? rand(1.5, 3) : 0.6 + depth * 3.2,
                speed: 0.15 + depth * 0.55,
                sway: rand(0.4, 1.4),
                phase: Math.random() * Math.PI * 2,
                twinkle: rand(0.02, 0.06),
                star: star,
                color: GOLD[(Math.random() * GOLD.length) | 0]
            };
        }

        function resize() {
            var rect = hero.getBoundingClientRect();
            w = rect.width;
            h = rect.height;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            canvas.style.width = w + "px";
            canvas.style.height = h + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            var count = Math.min(Math.round((w * h) / 9000), w < 768 ? 50 : 140);
            parts = [];
            for (var i = 0; i < count; i++) parts.push(make(true));
        }

        function drawStar(p, alpha) {
            var s = p.r * 4 * (0.6 + alpha * 0.6);
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.globalAlpha = alpha;
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 1;
            ctx.shadowColor = "#f3dca0";
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.moveTo(-s, 0); ctx.lineTo(s, 0);
            ctx.moveTo(0, -s); ctx.lineTo(0, s);
            ctx.stroke();
            ctx.fillStyle = "#fff";
            ctx.beginPath();
            ctx.arc(0, 0, p.r * 0.7, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        function drawDot(p, alpha) {
            // Hạt xa thì mờ và nhòe hơn (giả lập độ sâu trường ảnh)
            var g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * (2.5 - p.depth));
            g.addColorStop(0, p.color);
            g.addColorStop(1, "rgba(212,166,74,0)");
            ctx.globalAlpha = alpha * (0.35 + p.depth * 0.65);
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * (2.5 - p.depth), 0, Math.PI * 2);
            ctx.fill();
        }

        function frame(t) {
            if (!running) return;
            ctx.clearRect(0, 0, w, h);
            mouse.x += (mouse.tx - mouse.x) * 0.05;
            mouse.y += (mouse.ty - mouse.y) * 0.05;
            ctx.globalCompositeOperation = "lighter";

            for (var i = 0; i < parts.length; i++) {
                var p = parts[i];
                p.y -= p.speed;
                p.phase += 0.01;
                p.x += Math.sin(p.phase) * p.sway * 0.3;
                if (p.y < -20) parts[i] = p = make(false);

                // Lệch theo chuột: hạt gần lệch nhiều hơn
                var ox = mouse.x * (p.depth * 30);
                var oy = mouse.y * (p.depth * 20);
                var alpha = 0.55 + Math.sin(t * p.twinkle * 0.05 + p.phase * 3) * 0.45;
                var q = { x: p.x + ox, y: p.y + oy, r: p.r, depth: p.depth, color: p.color };
                if (p.star) drawStar(q, alpha); else drawDot(q, alpha);
            }
            ctx.globalAlpha = 1;
            ctx.globalCompositeOperation = "source-over";
            requestAnimationFrame(frame);
        }

        function start() {
            if (running || !visible || document.hidden) return;
            running = true;
            requestAnimationFrame(frame);
        }
        function stop() { running = false; }

        hero.addEventListener("mousemove", function (e) {
            var r = hero.getBoundingClientRect();
            mouse.tx = (e.clientX - r.left) / r.width - 0.5;
            mouse.ty = (e.clientY - r.top) / r.height - 0.5;
        });

        new IntersectionObserver(function (entries) {
            visible = entries[0].isIntersecting;
            visible ? start() : stop();
        }).observe(hero);
        document.addEventListener("visibilitychange", function () {
            document.hidden ? stop() : start();
        });

        var resizeTimer;
        window.addEventListener("resize", function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(resize, 200);
        });
        resize();
        start();
    }

    /* =============================================================
     * Hero: vệt sáng + huy chương trôi theo chuột (parallax nhẹ)
     * ============================================================= */
    function initHeroPointer() {
        var hero = document.querySelector(".hero");
        if (!hero || !finePointer) return;
        hero.addEventListener("mousemove", function (e) {
            var r = hero.getBoundingClientRect();
            hero.style.setProperty("--mx", (e.clientX - r.left) + "px");
            hero.style.setProperty("--my", (e.clientY - r.top) + "px");
            hero.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
            hero.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
        });
    }

    /* =============================================================
     * Thẻ: nghiêng 3D + vệt sáng & viền vàng chạy theo chuột
     * ============================================================= */
    function initCards() {
        if (!finePointer) return;
        var root = document.getElementById("events-list");
        if (!root) return;
        root.addEventListener("mousemove", function (e) {
            var card = e.target.closest(".card");
            if (!card) return;
            var r = card.getBoundingClientRect();
            var x = (e.clientX - r.left) / r.width;
            var y = (e.clientY - r.top) / r.height;
            card.style.setProperty("--ry", ((x - 0.5) * 10).toFixed(2) + "deg");
            card.style.setProperty("--rx", ((0.5 - y) * 10).toFixed(2) + "deg");
            card.style.setProperty("--gx", (x * 100).toFixed(1) + "%");
            card.style.setProperty("--gy", (y * 100).toFixed(1) + "%");
        });
        root.addEventListener("mouseout", function (e) {
            var card = e.target.closest(".card");
            if (card && !card.contains(e.relatedTarget)) {
                card.style.removeProperty("--rx");
                card.style.removeProperty("--ry");
            }
        });
    }

    /* =============================================================
     * Nút nam châm: nút bị "hút" nhẹ theo con trỏ
     * ============================================================= */
    function initMagnetic() {
        if (!finePointer) return;
        document.addEventListener("mousemove", function (e) {
            var btn = e.target.closest(".btn, .btn-outline");
            if (!btn) return;
            var r = btn.getBoundingClientRect();
            var dx = e.clientX - (r.left + r.width / 2);
            var dy = e.clientY - (r.top + r.height / 2);
            btn.style.transform = "translate(" + (dx * 0.18).toFixed(1) + "px," + (dy * 0.3).toFixed(1) + "px)";
        });
        document.addEventListener("mouseout", function (e) {
            var btn = e.target.closest(".btn, .btn-outline");
            if (btn && !btn.contains(e.relatedTarget)) btn.style.transform = "";
        });
    }

    /* =============================================================
     * Thanh chọn năm: viên vàng trượt tới năm đang chọn
     * ============================================================= */
    function initYearIndicator() {
        var nav = document.getElementById("year-nav");
        if (!nav) return;
        var pill = document.createElement("span");
        pill.className = "year-nav__indicator";
        pill.setAttribute("aria-hidden", "true");
        nav.appendChild(pill);
        nav.classList.add("has-indicator");

        function update() {
            var active = nav.querySelector(".year-nav__item.active");
            if (!active) return;
            pill.style.width = active.offsetWidth + "px";
            pill.style.height = active.offsetHeight + "px";
            pill.style.transform = "translate(" + active.offsetLeft + "px," + active.offsetTop + "px)";
            pill.classList.toggle("is-special", active.classList.contains("year-nav__item--special"));
        }

        new MutationObserver(update).observe(nav, { attributes: true, subtree: true, attributeFilter: ["class"] });
        window.addEventListener("resize", update);
        if (document.fonts) document.fonts.ready.then(update);
        update();
    }

    /* =============================================================
     * Pháo giấy vàng – đỏ (dùng cho sự kiện 40 năm Đổi mới)
     * ============================================================= */
    var COLORS = ["#f3dca0", "#e6c178", "#d4a64a", "#b08433", "#da251d", "#fbf3dc"];

    function confetti(x, y, amount) {
        var canvas = document.createElement("canvas");
        canvas.className = "confetti";
        document.body.appendChild(canvas);
        var ctx = canvas.getContext("2d");
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var w = window.innerWidth, h = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        var pieces = [];
        for (var i = 0; i < amount; i++) {
            var angle = rand(-Math.PI * 0.95, -Math.PI * 0.05);
            var speed = rand(6, 16);
            pieces.push({
                x: x, y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                w: rand(6, 12), h: rand(3, 7),
                rot: rand(0, Math.PI * 2),
                vr: rand(-0.3, 0.3),
                flip: rand(0, Math.PI * 2),
                round: Math.random() < 0.3,
                color: COLORS[(Math.random() * COLORS.length) | 0]
            });
        }

        var start = performance.now();
        var life = 2800;
        function frame(t) {
            var elapsed = t - start;
            ctx.clearRect(0, 0, w, h);
            pieces.forEach(function (p) {
                p.vy += 0.28;     // trọng lực
                p.vx *= 0.985;    // lực cản
                p.vy *= 0.985;
                p.x += p.vx;
                p.y += p.vy;
                p.rot += p.vr;
                p.flip += 0.15;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot);
                ctx.scale(1, Math.cos(p.flip)); // lật như giấy thật
                ctx.globalAlpha = Math.max(1 - elapsed / life, 0);
                ctx.fillStyle = p.color;
                if (p.round) {
                    ctx.beginPath();
                    ctx.arc(0, 0, p.h / 2, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                }
                ctx.restore();
            });
            if (elapsed < life) requestAnimationFrame(frame);
            else canvas.remove();
        }
        requestAnimationFrame(frame);
    }

    var lastCelebrate = 0;

    function celebrate(el) {
        if (reduceMotion) return;
        // Tránh bắn 2 lần liền (vừa bấm chọn vừa cuộn tới lần đầu)
        var now = Date.now();
        if (now - lastCelebrate < 2500) return;
        lastCelebrate = now;
        var target = el.querySelector(".event__head") || el;
        var r = target.getBoundingClientRect();
        var y = Math.max(r.top + 40, 80);
        confetti(r.left + r.width * 0.25, y, 70);
        setTimeout(function () { confetti(r.left + r.width * 0.75, y, 70); }, 180);
    }

    // Lần đầu cuộn tới sự kiện đặc biệt thì bắn pháo giấy
    function initSpecialCelebration() {
        var special = document.querySelector(".event--special .event__head");
        if (!special) return;
        var io = new IntersectionObserver(function (entries) {
            if (!entries[0].isIntersecting) return;
            io.disconnect();
            setTimeout(function () { celebrate(special.closest(".event")); }, 500);
        }, { threshold: 0.5 });
        io.observe(special);
    }

    window.FX = {
        init: function () {
            initCurtain();
            if (reduceMotion) return;
            initSparkles();
            initHeroPointer();
            initCards();
            initMagnetic();
            initYearIndicator();
            initSpecialCelebration();
        },
        celebrate: celebrate,
        confetti: confetti
    };
})();
