class Snowflake {
            constructor() {
                this.x = 0;
                this.y = 0;
                this.vx = 0;
                this.vy = 0;
                this.radius = 0;
                this.alpha = 0;
                this.reset();
            }
            reset() {
                this.x = this.randBetween(0, window.innerWidth);
                this.y = this.randBetween(0, -window.innerHeight);
                this.vx = this.randBetween(-3, 3);
                this.vy = this.randBetween(2, 5);
                this.radius = this.randBetween(1, 4);
                this.alpha = this.randBetween(0.1, 0.9);
            }
            randBetween(min, max) {
                return min + Math.random() * (max - min);
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.y + this.radius > window.innerHeight) {
                    this.reset();
                }
            }
        }
        class Snow {
            constructor() {
                this.canvas = document.createElement("canvas");
                this.ctx = this.canvas.getContext("2d");
                document.body.appendChild(this.canvas);
                window.addEventListener("resize", () => this.onResize());
                this.onResize();
                this.updateBound = this.update.bind(this);
                requestAnimationFrame(this.updateBound);
                this.createSnowflakes();
            }
            onResize() {
                this.width = window.innerWidth;
                this.height = window.innerHeight;
                this.canvas.width = this.width;
                this.canvas.height = this.height;
            }
            createSnowflakes() {
                const flakes = window.innerWidth / 4;
                this.snowflakes = [];
                for (let s = 0; s < flakes; s++) {
                    this.snowflakes.push(new Snowflake());
                }
            }
            update() {
                this.ctx.clearRect(0, 0, this.width, this.height);
                for (let flake of this.snowflakes) {
                    flake.update();
                    this.ctx.save();
                    this.ctx.fillStyle = "#FFF";
                    this.ctx.beginPath();
                    this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
                    this.ctx.closePath();
                    this.ctx.globalAlpha = flake.alpha;
                    this.ctx.fill();
                    this.ctx.restore();
                }
                requestAnimationFrame(this.updateBound);
            }
        }
        new Snow();
        ////////////////////////////////////////////////////////////
        // Simple CountDown Clock
        const comingdate = new Date("Feb 10, 2025 00:00:00");
        const d = document.getElementById("d");
        const h = document.getElementById("h");
        const m = document.getElementById("m");
        const s = document.getElementById("s");
        const countdown = setInterval(() => {
            const now = new Date();
            const des = comingdate.getTime() - now.getTime();
            const days = Math.floor(des / (1000 * 60 * 60 * 24));
            const hours = Math.floor((des % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((des % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((des % (1000 * 60)) / 1000);
            d.innerHTML = getTrueNumber(days);
            h.innerHTML = getTrueNumber(hours);
            m.innerHTML = getTrueNumber(mins);
            s.innerHTML = getTrueNumber(secs);
        }, 1000);
        const getTrueNumber = x => (x < 10 ? "0" + x : x);
        var xyz_ = 0,
            colors = ["#ff6651", "#42a5f5", "#66bb6a", "#ab47bc", "#ffa726", "#ec407a", "#26c6da", "#78909c", "#ffca28", "#5c6bc0", "#8d6e63", "#26a69a"];
        jQuery(document).ready((function(a) {
            a("body").click((function(o) {
                var t = new Array("Năm mới vui vẻ", "Cung hỉ phát tài", "Tiền vô như nước", "Vợ đẹp con ngoan", "Tài lộc vào nhà", "Phúc thọ vô biên", "Sống khoẻ đón xuân", "Phú quý cát tường", "Đắc lộc toàn gia", "Hạnh phúc mênh mang", "Vạn sự thành công", "Mã đáo thành công", "Tiền vô tỷ tỷ", "Tài vạn công danh", "Hạnh phúc gia an", "Sức khoẻ như voi", "Thông minh vượt trội", "Phúc lộc trong tay", "Gia chủ phát tài", "Vạn sự như ý", "Túi tiền nặng ký ", "Làm ăn phát đạt", "Vàng bạc cao sang", "Sức khỏe an nhàn", "Công danh hết ý", "Cung hỷ cung hỷ", "Hạnh phúc triền miên", "Sung sướng như tiên"),
                    c = a("<span style='font-family:sans-serif;'>").text(t[xyz_]),
                    n = colors[Math.floor(Math.random() * colors.length)];
                xyz_ = (xyz_ + 1) % t.length;
                var e = o.pageX,
                    r = o.pageY,
                    i = Math.floor(9990001 * Math.random()) + 9999,
                    f = r - 20,
                    h = e,
                    l = n;
                c.css({
                    "z-index": i,
                    top: f,
                    left: h,
                    position: "absolute",
                    "font-weight": "bold",
                    color: l
                }), a("body").append(c), c.animate({
                    top: r - 180,
                    opacity: 0
                }, 1500, (function() {
                    c.remove()
                }))
            }))
        }));
        console.clear(), console.log(`Yuusei`, "color: #ffffff; background: rgb(255, 112, 67); padding:5px 0; border-radius: 5px 0 0 5px;", "background:rgba(66, 66, 66, 0.85); padding:5px 0; border-radius: 0 5px 5px 0;");