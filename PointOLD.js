function PointJS(ea, fa, rb, Gc) {
    this._logo = "http://pointjs.ru/PjsMin.png";
    var g = window,
        q = this,
        Ea = !0,
        sb = !0,
        Nb = !0,
        ka = !1,
        Fa = !0,
        n = ea,
        m = fa,
        H = n / 2,
        I = m / 2,
        la = 1,
        ma = 1,
        f = {
            x: 0,
            y: 0
        },
        u = {
            fillStyle: "black",
            strokeStyle: "black",
            globalAlpha: 1,
            font: "sans-serif",
            textBaseline: "top"
        },
        V = function(a) {
            console.log("[PointJS] : ", a)
        };
    "undefined" != typeof POINTJS_USER_LOG && (V = POINTJS_USER_LOG);
    var Ra = function(a) {
        var b = decodeURI(a.stack.toString().replace(/(@|[\(\)]|[\w]+:\/\/)/g, ""));
        b = b.split(/\n/);
        b = ("" == b[2] ? b[0] : b[1]).split("/");
        b = b[b.length - 1].split(":");
        V('ERROR "' + a.toString() + '" \n in      ' + b[0] + " \n line :   " + b[1] + " \n symbol : " + b[2])
    };
    this.game = {};
    this.levels = {};
    this.camera = {};
    this.keyControl = {};
    this.mouseControl = {};
    this.touchControl = {};
    this.actionControl = {};
    this.system = {};
    this.vector = {};
    this.math = {};
    this.layers = {};
    this.colors = {};
    this.brush = {};
    this.audio = {};
    this.wAudio = {};
    this.resources = {};
    this.tiles = {};
    this.OOP = {};
    this.memory = {};
    this.zList = {};
    this.filters = {};
    this.system.log = V;
    this.system.consoleLog = function(a) {
        this.log = !0 === a ? console.log : V
    };
    this.system.setTitle = function(a) {
        g.document.title = a
    };
    this.system.setSettings = function(a) {
        Ea = v(a.isShowError) ? a.isShowError : !0;
        sb = v(a.isStopForError) ? a.isStopForError : !0;
        Nb = v(a.isAutoClear) ? a.isAutoClear : !1;
        v(a.isZBuffer)
    };
    this.system.setDefaultSettings = function(a) {
        for (var b in a) u[b] = a[b];
        h.save()
    };
    this.system.setSmoothing = function(a) {
        Fa = a;
        h.msImageSmoothingEnabled = Fa;
        h.imageSmoothingEnabled = Fa
    };
    var tc = {
        name: "PointJS",
        desc: "HTML5 Game Engine for JavaScript",
        author: "Skaner (skaner0@yandex.ru)",
        version: "0.3.1"
    };
    this.system.getInfo = function() {
        return tc
    };
    var ba = function(a, b) {
            b.prototype = Object.create(a.prototype);
            b.prototype.constructor = b
        },
        ha = function(a, b, c) {
            this.x = a || 0;
            this.y = b || 0;
            this.z = c || 0
        };
    ha.prototype = {
        abs: function() {
            return new ha(Math.abs(this.x), Math.abs(this.y), Math.abs(this.z))
        },
        invert: function() {
            return new ha(-this.x, -this.y, -this.z)
        },
        plus: function(a) {
            return new ha(this.x + a.x, this.y + a.y, this.z + a.z)
        },
        minus: function(a) {
            return new ha(this.x - a.x, this.y - a.y, this.z - a.z)
        },
        inc: function(a) {
            return new ha(this.x *
                a.x, this.y * a.y, this.z * a.z)
        },
        div: function(a) {
            return new ha(this.x / a.x, this.y / a.y, this.z / a.z)
        }
    };
    var e = function(a, b, c) {
            return new ha(a, b, c)
        },
        D = function(a, b, c) {
            return {
                w: a,
                h: b,
                d: c
            }
        },
        wa = function(a, b) {
            return {
                x: a.x + b.x,
                y: a.y + b.y,
                z: a.z + b.z
            }
        },
        F = function(a, b, c) {
            if (0 != c) {
                var d = z(c);
                c = a.x - b.x;
                a = a.y - b.y;
                var k = Math.cos(d);
                d = Math.sin(d);
                return e(c * k - a * d + b.x, c * d + a * k + b.y)
            }
            return e(a.x, a.y)
        },
        Ga = function(a, b) {
            return 180 / Math.PI * Math.atan2(b.y - a.y, b.x - a.x)
        },
        na = function(a, b) {
            var c, d = 0;
            var k = 0;
            var f = b.length;
            for (c = b.length -
                1; k < f; c = k++) b[k].y > a.y != b[c].y > a.y && a.x < (b[c].x - b[k].x) * (a.y - b[k].y) / (b[c].y - b[k].y) + b[k].x && (d = !d);
            return d
        };
    this.vector.point = e;
    this.vector.simplePoint = function(a, b, c) {
        return {
            x: !1 !== a ? a : !1,
            y: !1 !== b ? b : !1,
            z: !1 !== c ? c : !1
        }
    };
    this.vector.v2d = e;
    this.vector.size = D;
    this.vector.getPointAngle = F;
    this.vector.isPointIn = na;
    this.vector.pointMinus = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y,
            z: a.z - b.z
        }
    };
    this.vector.pointPlus = wa;
    this.vector.pointInc = function(a, b) {
        return {
            x: a.x * b.x,
            y: a.y * b.y,
            z: a.z * b.z
        }
    };
    this.vector.pointDiv =
        function(a, b) {
            return {
                x: a.x / (0 != b.x ? b.x : 1),
                y: a.y / (0 != b.y ? b.y : 1),
                z: a.z / (0 != b.z ? b.z : 1)
            }
        };
    this.vector.pointAbs = function(a) {
        return {
            x: Math.abs(a.x),
            y: Math.abs(a.y),
            z: Math.abs(a.z)
        }
    };
    this.vector.getMidPoint = function(a, b) {
        return v(b) ? e((a.x + b.x) / 2, (a.y + b.y) / 2) : 0
    };
    this.vector.getDistance = function(a, b) {
        return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
    };
    this.vector.isSame = function(a, b) {
        return v(b) ? a.x == b.x && a.y == b.y : !1
    };
    this.vector.getAngle2Points = Ga;
    this.vector.newStaticBox = function(a, b, c, d) {
        return {
            x: a,
            y: b,
            w: a + c,
            h: b + d
        }
    };
    this.vector.newDynamicBoxRect = function(a, b, c, d) {
        return [e(a, b), e(a + c, b), e(a + c, b + d), e(a, b + d)]
    };
    this.vector.moveCollision = function(a, b, c, d, k, f) {
        for (var e = !1, h = !1, g = c.abs(), x = a.getStaticBoxPosition(), n = b.length - 1, m, l, p, q; 0 <= n; n--) m = b[n], a === m || k && !m.isInCameraStatic() || f && a.getDistanceC(m.getPositionC()) > f || !a.isStaticIntersect(m.getStaticBox()) || (l = m.getStaticBoxPosition(), p = 2 + 2 * g.x, q = 2 + 2 * g.y, x.h >= l.y + q && x.y <= l.h - q && (x.w > l.x && x.w < l.x + p && 0 < c.x ? (a.x = l.x - (a.w + a.box.w + a.box.x) + 1, c.x = 0,
            e = !0) : x.x < l.w && x.x > l.w - p && 0 > c.x && (a.x = l.w - a.box.x - 1, c.x = 0, e = !0)), x.w >= l.x + p && x.x <= l.w - p && (x.h > l.y && x.h < l.y + q && 0 < c.y ? (a.y = l.y - (a.h + a.box.h + a.box.y) + 1, c.y = 0, h = !0) : x.y < l.h && x.y > l.h - q && 0 > c.y && (a.y = l.h - a.box.y - 1, c.y = 0, h = !0)), d && d(a, m, e, h));
        a.move(c)
    };
    this.vector.moveCollisionAngle = function(a, b, c, d, k, f, h) {
        var g = e();
        k = math.a2r(OOP.isDef(k) ? k : a.angle);
        g.x = c * Math.cos(k);
        g.y = c * Math.sin(k);
        c = 0;
        k = b.length;
        for (var x; c < k; c += 1)
            if (x = b[c], !f || x.isInCamera())
                if (!h || !a.getDistanceC(x.getPositionC())) {
                    var l = x.getStaticBox();
                    if (a.isIntersect(x)) {
                        var m = a.getStaticBox(),
                            n = Math.abs(g.x),
                            Sa = Math.abs(g.y);
                        m.x + m.w > l.x + 10 + n && m.x < l.x + l.w - 10 - n && (0 < g.y && m.y + m.h < l.y + l.h / 2 + Sa ? g.y = 0 : 0 > g.y && m.y > l.y + l.h - l.h / 2 - Sa && (g.y = 0));
                        m.y + m.h > l.y + 10 + Sa && m.y < l.y + l.h - 10 - Sa && (0 < g.x && m.x + m.w < l.x + l.w / 2 + n ? g.x = 0 : 0 > g.x && m.x > l.x + l.w - l.w / 2 - n && (g.x = 0));
                        d && d(a, x)
                    }
                }
        a.move(g);
        return g
    };
    var Ob = {},
        tb = function() {
            var a = (new Date).getTime();
            Ob[a] && (a = tb());
            Ob[a] = !0;
            return a
        },
        z = function(a) {
            return Math.PI / 180 * a
        },
        ca = function(a, b, c) {
            var d = Math.floor(Math.random() * (b -
                a + 1) + a);
            return c && 0 == d ? ca(a, b, c) : d
        },
        ub = function(a) {
            return 0 > a ? -1 : 1
        };
    this.math.limit = function(a, b) {
        var c = ub(a);
        a = Math.abs(a);
        b = Math.abs(b);
        return a < b ? a * c : b * c
    };
    this.math.sign = ub;
    this.math.a2r = z;
    this.math.random = ca;
    this.math.toInt = function(a) {
        return a >> 0
    };
    this.math.uid = tb;
    this.math.toZiro = function(a, b) {
        if (0 == a) return 0;
        var c = ub(a);
        b = Math.abs(b);
        a = Math.abs(a);
        return 0 < a && (a -= b, a < b) ? 0 : a * c
    };
    var Pb = function(a, b) {
            return a ? a : b ? b : !1
        },
        Qb = [],
        uc = function(a, b) {
            var c;
            this.canvas = c = g.document.createElement("canvas");
            var d = c.style,
                k = r.style;
            d.position = "fixed";
            d.top = k.top;
            d.left = k.left;
            c.width = r.width;
            c.height = r.height;
            d.width = k.width;
            d.height = k.height;
            d.zIndex = k.zIndex + a;
            b && (d.opacity = Pb(b.alpha, 1), d.backgroundColor = Pb(b.backgroundColor, "transparent"));
            l.attach(c);
            (this.context = c.getContext("2d")).textBaseline = u.textBaseline;
            this.isAutoClear = !0;
            this.clear = function() {
                this.context.clearRect(0, 0, n, m)
            };
            this.on = function(a) {
                h = this.context;
                this.isAutoClear && this.clear();
                a(this);
                h = Rb
            };
            this.setVisible = function(a) {
                this.canvas.style =
                    a ? "block" : "none"
            };
            Qb.push(this)
        },
        xa = function() {
            t(Qb, function(a) {
                a.canvas.width = n;
                a.canvas.height = m;
                a.canvas.style.width = r.style.width;
                a.canvas.style.height = r.style.height;
                a.context.textBaseline = u.textBaseline
            })
        };
    this.layers.newLayer = function(a, b) {
        return new uc(a, b)
    };
    var Sb = 0,
        l = {
            loaded: !1,
            events: {
                onload: [],
                preLoop: [],
                postLoop: [],
                gameBlur: [],
                gameFocus: [],
                gameResize: [],
                click: [] 
            },
            addEvent: function(a, b, c) {
                "onload" == a && l.loaded ? c() : l.events[a].push({
                    id: b,
                    func: c
                })
                "click" == a && l.loaded ? c() : l.events[a].push({
                    id: b,
                    func: c
                })
            },
            delEvent: function(a, b) {
                t(l.events[a], function(a,
                    d, k) {
                    a.id == b && k.splice(d, 1)
                })
            },
            runEvent: function(a) {
                t(l.events[a], function(a) {
                    "function" == typeof a.func && a.func()
                })
            },
            attach: function(a) {
                var b = function() {
                    g.document.body.appendChild(a)
                };
                l.loaded ? b() : l.addEvent("onload", "attachElement_PointJS" + (Sb += 1), b)
            },
            remove: function(a) {
                var b = function() {
                    g.document.body.removeChild(a)
                };
                l.loaded ? b() : l.addEvent("onload", "attachElement_PointJS" + (Sb += 1), b)
            },
            getWH: function() {
                return {
                    w: parseInt(g.document.documentElement.clientWidth || g.innerWidth || g.document.body.clientWidth),
                    h: parseInt(g.document.documentElement.clientHeight || g.innerHeight || g.document.body.clientHeight)
                }
            }
        };
    this.system.delEvent = function(a, b) {
        l.delEvent(a, b)
    };
    this.system.addEvent = function(a, b, c) {
        l.addEvent(a, b, c)
    };
    this.system.removeDOM = function(a) {
        l.remove(a)
    };
    this.system.attachDOM = function(a) {
        l.attach(a)
    };
    this.system.newDOM = function(a, b) {
        var c = g.document.createElement(a);
        c.style.position = "fixed";
        c.style.left = 0;
        c.style.top = 0;
        c.style.zIndex = oa.style.zIndex + 1;
        c.style.border = "none";
        if (b) {
            var d = function(a) {
                a.stopPropagation()
            };
            c.addEventListener("touchstart", d, !1);
            c.addEventListener("touchend", d, !1);
            c.addEventListener("touchmove", d, !1);
            c.addEventListener("mousedown", d, !1);
            c.addEventListener("mousepress", d, !1);
            c.addEventListener("mouseup", d, !1);
            c.addEventListener("mousemove", d, !1);
            c.addEventListener("keypress", d, !1);
            c.addEventListener("keydown", d, !1);
            c.addEventListener("keyup", d, !1);
            c.addEventListener("click", d, !1);
            c.addEventListener("wheel", d, !1);
            c.addEventListener("mousewheel", d, !1);
            c.addEventListener("contextmenu", d, !1);
            c.addEventListener("selectstart", d, !1);
            c.addEventListener("dragstart", d, !1);
            c.addEventListener("DOMMouseScroll", d, !1)
        }
        l.attach(c);
        return c
    };
    var h = null,
        Rb = null;
    var r = g.document.createElement("canvas");
    Rb = h = r.getContext("2d");
    h.textBaseline = u.textBaseline;
    r.crossOrigin = "anonymous";
    r.width = parseInt(ea);
    r.height = parseInt(fa);
    r.style.position = "fixed";
    r.style.left = 0;
    r.style.top = 0;
    r.style.zIndex = 1E4;
    r.id = "PointJS-canvas_0";
    if ("object" == typeof rb)
        for (var vb in rb) vb.match(/margin|padding|position/) ||
            (r.style[vb] = rb[vb]);
    l.addEvent("onload", "Window_Hide_Scroll", function() {
        g.document.body.style.overflow = "hidden";
        wb = {
            x: parseInt(r.style.left),
            y: parseInt(r.style.top)
        }
    });
    var oa = g.document.createElement("div");
    (function() {
        var a = oa.style;
        a.position = "fixed";
        a.top = a.left = 0;
        a.width = a.height = "100%";
        a.zIndex = 2E4
    })();
    l.attach(oa);
    var wb = e(0, 0);
    l.attach(r);
    this.system.setStyle = function(a) {
        if ("object" == typeof a)
            for (var b in a) r.style[b] = a[b]
    };
    this.system.getCanvas = function() {
        return r
    };
    this.system.getContext =
        function() {
            return h
        };
    this.system.resize = function(a, b) {
        n = a || ea;
        m = b || fa;
        H = n / 2;
        I = m / 2;
        r.width = n;
        r.height = m
    };
    this.system.initFullPage = function() {
        l.addEvent("gameResize", "PointJS_resizeGame", function() {
            n = l.getWH().w;
            m = l.getWH().h;
            H = n / 2;
            I = m / 2;
            r.width = n;
            r.height = m;
            h.textBaseline = u.textBaseline;
            xa()
        });
        l.runEvent("gameResize", "PointJS_resizeGame")
    };
    var W = !1,
        vc = function() {
            W || (this.requestFullscreen ? (this.requestFullscreen(), W = !0) : this.mozRequestFullScreen ? (this.mozRequestFullScreen(), W = !0) : this.webkitRequestFullscreen &&
                (this.webkitRequestFullscreen(), W = !0), n = l.getWH().w, m = l.getWH().h, H = n / 2, I = m / 2, r.width = n, r.height = m, xa())
        },
        xb = function(a) {
            W = Tb(g.document.fullscreenElement || g.document.mozFullScreenElement || g.document.webkitFullscreenElement)
        };
    g.document.addEventListener("webkitfullscreenchange", xb);
    g.document.addEventListener("mozfullscreenchange", xb);
    g.document.addEventListener("fullscreenchange", xb);
    this.system.initFullScreen = function() {
        W || (g.document.documentElement.onclick = vc, Ha || (l.addEvent("gameResize", "PointJS_initFullScreen",
            function() {
                n = l.getWH().w;
                m = l.getWH().h;
                H = n / 2;
                I = m / 2;
                r.width = n;
                r.height = m;
                h.textBaseline = u.textBaseline;
                xa()
            }), l.runEvent("gameResize", "PointJS_initFullScreen")))
    };
    this.system.exitFullScreen = function() {
        W && (l.delEvent("gameResize", "PointJS_initFullScreen"), g.document.exitFullscreen ? (g.document.exitFullscreen(), W = !1) : g.document.mozCancelFullScreen ? (g.document.mozCancelFullScreen(), W = !1) : g.document.webkitExitFullscreen && (g.document.webkitExitFullscreen(), W = !1), n = ea, m = fa, H = n / 2, I = m / 2, r.width = n, r.height =
            m, xa(), g.document.documentElement.onclick = function() {})
    };
    this.system.isFullScreen = function() {
        return W
    };
    this.system.exitFullPage = function() {
        l.delEvent("gameResize", "PointJS_resizeGame");
        n = ea;
        m = fa;
        H = n / 2;
        I = m / 2;
        r.width = n;
        r.height = m;
        xa()
    };
    var X = !1,
        Ha = !1,
        Ub = ea,
        Vb = fa,
        Wb = !1;
    this.system.initFullScale = function(a) {
        Ha || (a && (Wb = !0), l.addEvent("gameResize", "PointJS_initFullScale", function() {
            var a = Ub,
                c = Vb,
                d = l.getWH();
            Wb ? (a = d.w, c = d.h) : d.w < d.h ? (c = d.w / n, a = d.w, c *= m) : d.h < d.w && (a = d.h / m, c = d.h, a *= n);
            Ub = a;
            Vb = c;
            X = {
                w: a / n,
                h: c / m
            };
            r.style.width = a + "px";
            r.style.height = c + "px";
            xa()
        }), l.runEvent("gameResize", "PointJS_initFullScale"), Ha = !0)
    };
    this.system.exitFullScale = function() {
        Ha && (Ha = !1, l.delEvent("gameResize", "PointJS_initFullScale"), r.style.width = ea + "px", r.style.height = fa + "px")
    };
    this.system.getWH = function() {
        return l.getWH()
    };
    var G = !1;
    this.actionControl.initActionControl = function() {
        q.touchControl.isTouchSupported() && (G = !0, q.touchControl.initTouchControl());
        q.mouseControl.initMouseControl();
        return this
    };
    this.actionControl.isPress =
        function() {
            return G ? q.touchControl.isPress() : q.mouseControl.isPress("LEFT")
        };
    this.actionControl.isDown = function() {
        return G ? q.touchControl.isDown() : q.mouseControl.isDown("LEFT")
    };
    this.actionControl.isUp = function() {
        return G ? q.touchControl.isUp() : q.mouseControl.isUp("LEFT")
    };
    this.actionControl.isInObject = function(a) {
        return G ? q.touchControl.isInObject(a) : q.mouseControl.isInObject(a)
    };
    this.actionControl.isInStatic = function(a) {
        return G ? q.touchControl.isInStatic(a) : q.mouseControl.isInStatic(a)
    };
    this.actionControl.isInDynamic =
        function(a) {
            return G ? q.touchControl.isInDynamic(a) : q.mouseControl.isInDynamic(a)
        };
    this.actionControl.isPeekObject = function(a) {
        return G ? q.touchControl.isPeekObject(a) : q.mouseControl.isPeekObject("LEFT", a)
    };
    this.actionControl.isPeekStatic = function(a) {
        return G ? q.touchControl.isPeekStatic(a) : q.mouseControl.isPeekStatic("LEFT", a)
    };
    this.actionControl.isPeekDynamic = function(a) {
        return G ? q.touchControl.isPeekDynamic(a) : q.mouseControl.isPeekDynamic("LEFT", a)
    };
    this.actionControl.getPosition = function(a) {
        return G ?
            q.touchControl.getPosition() : q.mouseControl.getPosition()
    };
    this.actionControl.getPositionS = function(a) {
        return G ? q.touchControl.getPositionS() : q.mouseControl.getPositionS()
    };
    this.actionControl.getMouse = function() {
        return q.mouseControl
    };
    this.actionControl.getTouch = function() {
        return G ? q.touchControl : !1
    };
    this.actionControl.getActiveControl = function() {
        return G ? q.touchControl : q.mouseControl
    };
    this.actionControl.getActiveControlName = function() {
        return G ? "touchControl" : "mouseControl"
    };
    this.actionControl.getSpeed =
        function() {
            if (!G) return q.mouseControl.getSpeed() || q.touchControl.getSpeed()
        };
    var yb = !1,
        Ta = {
            LEFT: 37,
            RIGHT: 39,
            UP: 38,
            DOWN: 40,
            SPACE: 32,
            CTRL: 17,
            SHIFT: 16,
            ALT: 18,
            ESC: 27,
            ENTER: 13,
            MINUS: 189,
            PLUS: 187,
            CAPS_LOCK: 20,
            BACKSPACE: 8,
            TAB: 9,
            DELETE: 46,
            Q: 81,
            W: 87,
            E: 69,
            R: 82,
            T: 84,
            Y: 89,
            U: 85,
            I: 73,
            O: 79,
            P: 80,
            A: 65,
            S: 83,
            D: 68,
            F: 70,
            G: 71,
            H: 72,
            J: 74,
            K: 75,
            L: 76,
            Z: 90,
            X: 88,
            V: 86,
            B: 66,
            N: 78,
            M: 77,
            0: 48,
            1: 49,
            2: 50,
            3: 51,
            4: 52,
            5: 53,
            6: 54,
            7: 55,
            8: 56,
            C: 67,
            9: 57,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123
        },
        ya = {
            37: "LEFT",
            39: "RIGHT",
            38: "UP",
            40: "DOWN",
            32: "SPACE",
            17: "CTRL",
            16: "SHIFT",
            18: "ALT",
            27: "ESC",
            13: "ENTER",
            189: "MINUS",
            187: "PLUS",
            20: "CAPS_LOCK",
            8: "BACKSPACE",
            9: "TAB",
            46: "DELETE",
            81: "Q",
            87: "W",
            69: "E",
            82: "R",
            84: "T",
            89: "Y",
            85: "U",
            73: "I",
            79: "O",
            80: "P",
            65: "A",
            83: "S",
            68: "D",
            70: "F",
            71: "G",
            72: "H",
            74: "J",
            75: "K",
            76: "L",
            90: "Z",
            88: "X",
            86: "V",
            66: "B",
            78: "N",
            77: "M",
            48: "0",
            49: "1",
            50: "2",
            51: "3",
            52: "4",
            53: "5",
            54: "6",
            55: "7",
            56: "8",
            67: "C",
            57: "9",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12"
        },
        wc = {
            8: !0,
            9: !0,
            13: !0,
            18: !0,
            16: !0,
            17: !0,
            27: !0,
            112: !0,
            113: !0,
            114: !0,
            115: !0,
            116: !0,
            117: !0,
            118: !0,
            119: !0,
            120: !0,
            121: !0,
            122: !0,
            123: !0
        };
    this.keyControl.getKeyList = function() {
        var a, b = [];
        for (a in Ta) b.push(a);
        return b
    };
    var Y = {},
        Ia = {},
        pa = {},
        Ja = !1,
        Ka = !1,
        Ua = !1,
        Va = !1,
        xc = function(a) {
            E(pa, function(a, c, d) {
                1 == a && (d[c] = 2)
            })
        };
    this.keyControl.getCountKeysDown = function() {
        var a = 0;
        E(Y, function(b, c) {
            b && a++
        });
        return a
    };
    this.keyControl.getAllKeysDown = function() {
        var a = [];
        E(Y, function(b, c) {
            b &&
                a.push(ya[c])
        });
        return a
    };
    this.keyControl.getLastKeyPress = function() {
        return Va ? ya[Va] : !1
    };
    this.keyControl.isDown = function(a) {
        return 1 == Y[Ta[a]]
    };
    this.keyControl.isUp = function(a) {
        return 1 == Ia[Ta[a]]
    };
    this.keyControl.isPress = function(a) {
        return 1 == pa[Ta[a]]
    };
    this.keyControl.getInputChar = function() {
        return Ja
    };
    this.keyControl.getInputKey = function() {
        return ya[Ka]
    };
    this.keyControl.setInputMode = function(a) {
        Ua = a
    };
    this.keyControl.isInputMode = function() {
        return Ua
    };
    this.keyControl.exitKeyControl = function() {
        g.onkeydown =
            function() {};
        g.onkeypress = function() {};
        g.onkeyup = function() {};
        A.clear("key:down");
        A.clear("key:press");
        A.clear("key:up");
        l.delEvent("postLoop", "PointJS_clearAllKeyUp");
        l.delEvent("preLoop", "PointJS_KeyDownEvent");
        Y = {};
        Ia = {};
        pa = {};
        yb = Ua = Ka = Ja = !1
    };
    this.keyControl.initControl = this.keyControl.initKeyControl = function() {
        if (yb) return this;
        yb = !0;
        g.onkeydown = function(a) {
            if (Ua) return Ka = a.keyCode, wc[a.keyCode] ? (a.preventDefault(), !1) : !0;
            a.preventDefault();
            2 != pa[a.keyCode] && (pa[a.keyCode] = 1, Va = a.keyCode, A.run("key:press",
                ya[a.keyCode]));
            Y[a.keyCode] = !0;
            return !1
        };
        g.onkeypress = function(a) {
            var b = !1;
            0 != a.which && 0 != a.charCode && 32 <= a.which && (b = String.fromCharCode(a.which));
            Ja = b
        };
        g.onkeyup = function(a) {
            a.preventDefault();
            1 == Y[a.keyCode] && (Ia[a.keyCode] = !0);
            Y[a.keyCode] = !1;
            A.run("key:up", ya[a.keyCode]);
            delete pa[a.keyCode];
            delete Y[a.keyCode];
            return !1
        };
        l.addEvent("postLoop", "PointJS_clearAllKeyUp", function() {
            Ia = {};
            xc();
            Va = Ka = Ja = !1
        });
        l.addEvent("preLoop", "PointJS_KeyDownEvent", function() {
            A.isEvent("key:down") && E(Y, function(a,
                b) {
                a && A.run("key:down", ya[b])
            })
        });
        return this
    };
    var La = !1,
        w = e(0, 0),
        Wa = e(0, 0);
    e(0, 0);
    var Ma = !0,
        Xa = "",
        Ya = !1,
        qa = e(0, 0),
        Za = !1,
        zb = {
            LEFT: 1,
            RIGHT: 3,
            MIDDLE: 2
        },
        Ab = {
            1: "LEFT",
            3: "RIGHT",
            2: "MIDDLE"
        },
        $a = !1,
        ab = {},
        bb = {},
        Na = {},
        za = 0,
        Xb = function() {
            ab = {};
            bb = {};
            Na = {};
            za = 0;
            Za = !1
        },
        yc = function() {
            E(Na, function(a, b, c) {
                1 == a && (c[b] = 2)
            })
        },
        cb = function(a) {
            var b = 0,
                c = 0;
            a && (b = f.x, c = f.y);
            return e(b + w.x, c + w.y)
        };
    this.mouseControl.getPosition = function() {
        return cb(1)
    };
    this.mouseControl.getPositionS = function() {
        return cb()
    };
    this.mouseControl.setCursorImage =
        function(a) {
            a = "url('" + a + "'), auto";
            Xa != a && (Xa = a, g.document.body.style.cursor = Xa)
        };
    this.mouseControl.setVisible = function(a) {
        !Ma && !a || Ma && a || (Ma = 1 == a, g.document.body.style.cursor = Ma ? Xa : "none")
    };
    this.mouseControl.isVisible = function() {
        return Ma
    };
    this.mouseControl.isDown = function(a) {
        return ab[zb[a]]
    };
    this.mouseControl.isUp = function(a) {
        return bb[zb[a]]
    };
    this.mouseControl.isPress = function(a) {
        return 1 == Na[zb[a]]
    };
    this.mouseControl.isMove = function() {
        return Za
    };
    this.mouseControl.isInStatic = function(a) {
        var b =
            cb(1);
        return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
    };
    this.mouseControl.isInDynamic = function(a) {
        return na(cb(1), a)
    };
    this.mouseControl.isInObject = function(a) {
        return a.visible ? a.angle ? this.isInDynamic(a.getDynamicBox()) : this.isInStatic(a.getStaticBox()) : !1
    };
    this.mouseControl.isWheel = function(a) {
        return "UP" == a && 0 < za || "DOWN" == a && 0 > za
    };
    var Yb = function(a) {
            a.preventDefault();
            za = a.wheelDelta ? a.wheelDelta : -a.detail;
            A.run("mouse:wheel", 0 > za ? "DOWN" : "UP");
            return !1
        },
        db = !1,
        Zb = function() {
            db && (Ya = v(g.document.pointerLockElement) ||
                v(g.document.mozPointerLockElement) ? !0 : !1)
        };
    this.mouseControl.initMouseLock = function() {
        l.addEvent("onload", "initPointerLock", function() {
            db = oa.requestPointerLock || oa.mozRequestPointerLock || !1;
            g.document.exitPointerLock = g.document.exitPointerLock || g.document.mozExitPointerLock || !1;
            "onpointerlockchange" in g.document ? g.document.addEventListener("pointerlockchange", Zb, !1) : "onmozpointerlockchange" in g.document && g.document.addEventListener("mozpointerlockchange", Zb, !1);
            if (!db) return V("error in initMouseLock : not supported");
            Ya || (oa.onclick = db)
        })
    };
    this.mouseControl.exitMouseLock = function() {
        g.document.exitPointerLock();
        oa.onclick = function() {};
        qa = e(0, 0)
    };
    this.mouseControl.unlockMouse = function() {
        qa = e(0, 0);
        g.document.exitPointerLock()
    };
    this.mouseControl.isMouseLock = function() {
        return Ya
    };
    this.mouseControl.getSpeed = function() {
        return e(qa.x, qa.y)
    };
    this.mouseControl.isPeekStatic = function(a, b) {
        return this.isPress(a) ? this.isInStatic(b) : !1
    };
    this.mouseControl.isPeekDynamic = function(a, b) {
        return this.isPress(a) ? this.isInDynamic(b) :
            !1
    };
    this.mouseControl.isPeekObject = function(a, b) {
        return this.isPress(a) && b.visible ? this.isInDynamic(b.getDynamicBox()) : !1
    };
    this.mouseControl.initControl = this.mouseControl.initMouseControl = function() {
        if (La) return this;
        La = !0;
        g.onmousemove = function(a) {
            a.preventDefault();
            a.stopPropagation();
            if (Ya) {
                var b = a.movementY || a.mozMovementY || 0;
                w.x += a.movementX || a.mozMovementX || 0;
                w.y += b
            } else w.x = a.pageX - wb.x, w.y = a.pageY - wb.y, X && (w.x /= X.w, w.y /= X.h);
            w.x /= la;
            w.y /= ma;
            qa.x = w.x - Wa.x;
            qa.y = w.y - Wa.y;
            Wa.x = w.x;
            Wa.y = w.y;
            A.run("mouse:move");
            Za = !0;
            return !1
        };
        g.onmousedown = function(a) {
            a.preventDefault();
            a.stopPropagation();
            !a.which && a.button && (a.button & 1 ? a.which = 1 : a.button & 4 ? a.which = 2 : a.button & 2 && (a.which = 3));
            A.run("mouse:press", Ab[a.which]);
            $a = Ab[a.which];
            ab[a.which] = !0;
            Na[a.which] = 1
        };
        g.onmouseup = function(a) {
            a.preventDefault();
            a.stopPropagation();
            !a.which && a.button && (a.button & 1 ? a.which = 1 : a.button & 4 ? a.which = 2 : a.button & 2 && (a.which = 3));
            A.run("mouse:up", Ab[a.which]);
            $a = !1;
            ab[a.which] = !1;
            bb[a.which] = !0;
            delete Na[a.which]
        };
        g.oncontextmenu = g.onselectstart =
            g.ondragstart = function() {
                return !1
            };
        g.onmousewheel = Yb;
        g.addEventListener("DOMMouseScroll", Yb, !1);
        l.addEvent("preLoop", "PointJS_MouseEventDown", function() {
            $a && A.run("mouse:down", $a)
        });
        l.addEvent("postLoop", "PointJS_clearAllMouseUp", function() {
            bb = {};
            yc();
            za = 0;
            Za = !1;
            qa = e(0, 0)
        });
        return this
    };
    this.mouseControl.exitMouseControl = function() {
        A.clear("mouse:press");
        A.clear("mouse:down");
        A.clear("mouse:up");
        A.clear("mouse:move");
        A.clear("mouse:wheel");
        g.onmousemove = g.onmousedown = g.onmouseup = g.oncontextmenu = g.onselectstart =
            g.ondragstart = g.onmousewheel = function() {};
        l.delEvent("postLoop", "PointJS_clearAllMouseUp");
        l.delEvent("preLoop", "PointJS_MouseEventDown");
        Xb();
        La = !1
    };
    var Bb = !1,
        Oa = !1,
        eb = 0,
        fb = 0,
        K = 0,
        L = 0,
        y = e(0, 0),
        gb = [],
        Pa = e(0, 0),
        hb = e(0, 0);
    this.touchControl.isTouchSupported = function() {
        return !!("ontouchstart" in window)
    };
    this.touchControl.isMobileDevice = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(g.navigator.userAgent)
    };
    var $b = function() {
        Oa = !1;
        fb = eb = 0;
        y = e(0, 0);
        gb = [];
        L = K = 0
    };
    this.touchControl.getFixPositionS =
        function() {
            return y.x || y.y ? e(y.x, y.y) : !1
        };
    this.touchControl.getFixPosition = function() {
        return y.x || y.y ? e(y.x + f.x, y.y + f.y) : !1
    };
    this.touchControl.getRun = function() {
        var a = 0,
            b = 0;
        y.x && y.x != K && (a = K - y.x);
        y.y && y.y != L && (b = L - y.y);
        return e(a, b)
    };
    this.touchControl.getVector = function() {
        var a = 0,
            b = 0;
        y.x && y.x != K && (a = K > y.x ? 1 : -1);
        y.y && y.y != L && (b = L > y.y ? 1 : -1);
        return e(a, b)
    };
    this.touchControl.getSpeed = function() {
        return e(Pa.x, Pa.y)
    };
    this.touchControl.isDown = function() {
        return Oa
    };
    this.touchControl.isPress = function() {
        return 1 ==
            eb
    };
    this.touchControl.isUp = function() {
        return 1 == fb
    };
    this.touchControl.getPosition = function() {
        return e(K + f.x, L + f.y)
    };
    this.touchControl.getPositionS = function() {
        return e(K, L)
    };
    this.touchControl.isPeekStatic = function(a) {
        return this.isPress() ? this.isInStatic(a) : !1
    };
    this.touchControl.isPeekDynamic = function(a) {
        return this.isPress() ? this.isInDynamic(a) : !1
    };
    this.touchControl.isPeekObject = function(a) {
        return this.isPress() && a.visible ? this.isInDynamic(a.getDynamicBox()) : !1
    };
    this.touchControl.isInStatic = function(a) {
        var b =
            this.getPosition();
        return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
    };
    this.touchControl.isInDynamic = function(a) {
        return na(this.getPosition(), a)
    };
    this.touchControl.isInObject = function(a) {
        return a.visible ? a.angle ? this.isInDynamic(a.getDynamicBox()) : this.isInStatic(a.getStaticBox()) : !1
    };
    this.touchControl.getTouches = function() {
        return gb
    };
    this.touchControl.initControl = this.touchControl.initTouchControl = function() {
        if (Bb) return this;
        Bb = !0;
        g.addEventListener("touchstart", function(a) {
            a.preventDefault();
            K = a.targetTouches[0].pageX;
            L = a.targetTouches[0].pageY;
            gb = a.targetTouches;
            X && (K /= X.w, L /= X.h);
            A.run("touch:press");
            y.x = K;
            y.y = L;
            Oa = !0;
            eb = 1;
            return !1
        }, {
            passive: !1
        });
        g.addEventListener("touchmove", function(a) {
            K = a.targetTouches[0].pageX;
            L = a.targetTouches[0].pageY;
            gb = a.targetTouches;
            X && (K /= X.w, L /= X.h);
            Pa.x = K - hb.x;
            Pa.y = L - hb.y;
            A.run("touch:move");
            return !1
        }, !1);
        g.addEventListener("touchend", function(a) {
            y.x = 0;
            y.y = 0;
            Oa = !1;
            fb = 1;
            A.run("touch:up");
            return !1
        }, !1);
        q.touchControl.vibrate = function(a) {
            if (g.navigator.vibrate) return g.navigator.vibrate(a);
            if (g.navigator.oVibrate) return g.navigator.oVibrate(a);
            if (g.navigator.mozVibrate) return g.navigator.mozVibrate(a);
            if (g.navigator.webkitVibrate) return g.navigator.webkitVibrate(a)
        };
        l.addEvent("preLoop", "PointJS_TouchDownEvent", function() {
            Oa && A.run("touch:down")
        });
        l.addEvent("postLoop", "PointJS_touchStopPress", function() {
            fb = eb = 0;
            hb.x = K;
            hb.y = L;
            Pa = e(0, 0)
        });
        return this
    };
    this.touchControl.exitTouchControl = function() {
        g.ontouchstart = g.ontouchmove = g.ontouchend = function(a) {};
        l.delEvent("postLoop", "PointJS_touchStopPress");
        l.delEvent("preLoop", "PointJS_TouchDownEvent");
        $b();
        Bb = !1
    };
    var ib = function(a, b, c, d) {
            return d ? "rgba(" + a + ", " + b + ", " + c + ", " + d + ")" : "rgb(" + a + ", " + b + ", " + c + ")"
        },
        ac = function(a, b) {
            a = "#" == a[0] ? a.substr(1, 6) : a;
            var c = parseInt(a.substr(0, 2), 16),
                d = parseInt(a.substr(2, 2), 16),
                k = parseInt(a.substr(4, 2), 16);
            return ib(c, d, k, b)
        };
    this.colors.rgb = function(a, b, c) {
        return ib(a, b, c)
    };
    this.colors.rgba = function(a, b, c, d) {
        return ib(a, b, c, d)
    };
    this.colors.hex2rgb = function(a) {
        return ac(a)
    };
    this.colors.hex2rgba = function(a, b) {
        return ac(a,
            b)
    };
    this.colors.randomColor = function(a, b, c) {
        return ib(ca(a, b), ca(a, b), ca(a, b), c || 1)
    };
    var v = function(a) {
            return "undefined" == typeof a || null == a ? !1 : !0
        },
        Tb = function(a) {
            return v(a) && "" !== a && 0 !== a ? !0 : !1
        },
        E = function(a, b) {
            var c, d;
            for (c in a)
                if ("undefined" != typeof a[c] && (d = b(a[c], c, a)) && "break" == d) break
        },
        t = function(a, b) {
            if (a.length)
                for (var c = a.length - 1, d; 0 <= c && ("undefined" === typeof a[c] || !(d = b(a[c], c, a) || !1) || "break" !== d); c--);
        };
    this.OOP.extractArrElement = function(a, b) {
        var c = a[b];
        a.splice(b, 1);
        return c
    };
    this.OOP.extractRandArrElement =
        function(a) {
            var b = ca(0, a.length - 1),
                c = a[b];
            a.splice(b, 1);
            return c
        };
    this.OOP.drawEach = function(a, b) {
        E(a, function(a) {
            a && a.draw && a.isInCamera() && (a.draw(), b && b(a))
        })
    };
    this.OOP.drawArr = function(a, b) {
        var c;
        var d = 0;
        for (c = a.length; d < c; d += 1) a[d] && a[d].draw && a[d].isInCamera() && (a[d].draw(), b && b(a[d], d))
    };
    this.OOP.getArrInCamera = function(a) {
        var b = [];
        t(a, function(a) {
            a.isInCamera() && b.push(a)
        });
        return b
    };
    this.OOP.getArrOutCamera = function(a) {
        var b = [];
        t(a, function(a) {
            a.isInCamera() || b.push(a)
        });
        return b
    };
    var bc =
        function(a) {
            a.length = 0
        },
        zc = function(a, b) {
            var c = !1,
                d = tb(),
                k = !1,
                f = new XMLHttpRequest,
                e = function() {
                    f.open("GET", a, !0);
                    f.send()
                };
            f.onreadystatechange = function() {
                4 == f.readyState && (b(f.responseText), c && (k ? setTimeout(e, k) : e()))
            };
            this.start = function() {
                a = a.match(/\?/) ? a + ("&session_id=" + d) : a + ("?session_id=" + d);
                e();
                c = !0
            };
            this.setSID = function(a) {
                d = a
            };
            this.setTime = function(a) {
                k = a
            };
            this.stop = function() {
                c = !1
            };
            this.isActive = function() {
                return c
            }
        };
    this.OOP.readJSON = function(a, b, c) {
        var d = {},
            k = new XMLHttpRequest;
        k.open("GET",
            a, !0);
        B.add();
        k.onreadystatechange = function() {
            4 == k.readyState && (d = k.responseText, c || (d = JSON.parse(d)), B.load(), b(d))
        };
        k.send()
    };
    this.OOP.toString = function(a, b) {
        var c, d = 0,
            k = "[";
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var f = a[c];
                "number" == typeof f && b && (f = parseInt(f));
                k += (0 < d ? ", " : "") + c + " : " + f;
                d += 1
            }
        return k + "]"
    };
    this.OOP.sendGET = function(a, b, c) {
        var d = new XMLHttpRequest,
            k = "?";
        E(b, function(a, b) {
            k += b + "=" + encodeURIComponent(a) + "&"
        });
        d.open("GET", a + k, !0);
        d.onreadystatechange = function() {
            4 == d.readyState && c(d.responseText)
        };
        d.send()
    };
    this.OOP.sendPOST = function(a, b, c) {
        var d = new XMLHttpRequest,
            k = "";
        E(b, function(a, b) {
            k += b + "=" + encodeURIComponent(a) + "&"
        });
        d.open("POST", a, !0);
        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        d.onreadystatechange = function() {
            4 == d.readyState && c(d.responseText)
        };
        d.send(k)
    };
    this.OOP.sendPOSTScreen = function(a, b, c) {
        var d = new XMLHttpRequest;
        b = b + "=" + r.toDataURL("image/png");
        d.open("POST", a, !0);
        d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        d.onreadystatechange =
            function() {
                4 == d.readyState && c(d.responseText)
            };
        d.send(b)
    };
    this.OOP.isDef = v;
    this.OOP.isSet = Tb;
    this.OOP.forEach = E;
    this.OOP.forInt = function(a, b) {
        var c, d;
        for (c = 0; c < a && (!(d = b(c)) || "break" != d); c += 1);
    };
    this.OOP.forXY = function(a, b, c) {
        var d, k, f;
        for (k = 0; k < b; k += 1)
            for (d = 0; d < a && (!(f = c(d, k)) || "break" != f); d += 1);
    };
    this.OOP.forArr = t;
    this.OOP.clearArr = bc;
    this.OOP.fillArr = function(a, b, c) {
        a.length = 0;
        var d;
        for (d = 0; d < b; d += 1) a.push(c(d, 0 < d ? a[d - 1] : !1));
        return a
    };
    this.OOP.delObject = function(a, b) {
        var c;
        var d = 0;
        for (c = a.length; d <
            c; d += 1)
            if (a[d] == b) return a.splice(d, 1), !0
    };
    this.OOP.randArrElement = function(a) {
        return a[ca(0, a.length - 1)]
    };
    this.OOP.readJSONSync = function(a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        b.send();
        a = b.responseText;
        return a = JSON.parse(a)
    };
    this.OOP.sendGETSync = function(a, b) {
        var c = new XMLHttpRequest,
            d = "?";
        E(b, function(a, b) {
            d += b + "=" + encodeURIComponent(a) + "&"
        });
        c.open("GET", a + d, !1);
        c.send();
        return c.responseText
    };
    this.OOP.sendPOSTSync = function(a, b) {
        var c = new XMLHttpRequest,
            d = "";
        E(b, function(a, b) {
            d += b + "=" +
                encodeURIComponent(a) + "&"
        });
        c.open("POST", a, !1);
        c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        c.send(d);
        return c.responseText
    };
    this.OOP.newAJAXListener = function(a, b) {
        return new zc(a, b)
    };
    this.OOP.runCode = function(a) {
        (new Function("", a))()
    };
    var M = {};
    this.OOP.includeSync = function(a, b) {
        if (M[a]) M[a].loaded && !b && M[a].code();
        else {
            M[a] = {
                loaded: !1,
                code: function() {
                    console.log(a + " is loading")
                }
            };
            var c = new XMLHttpRequest;
            c.open("GET", a, !1);
            c.send();
            M[a].code = new Function("", c.responseText);
            M[a].loaded = !0;
            M[a].code()
        }
    };
    this.OOP.include = function(a, b, c) {
        if (M[a]) M[a].loaded && !c && M[a].code(), b && b();
        else {
            M[a] = {
                loaded: !1,
                code: function() {
                    console.log(a + " is loading")
                }
            };
            var d = new XMLHttpRequest;
            d.open("GET", a, !0);
            d.onreadystatechange = function() {
                4 == d.readyState && (M[a].code = new Function("", d.responseText), M[a].loaded = !0, M[a].code(), b && b())
            };
            d.send()
        }
    };
    this.OOP.clone = function(a, b) {
        var c = cc(a);
        E(a, function(a, b) {
            -1 === ["id", "type"].indexOf(b) && (c[b] = a)
        });
        b && (c.onClone = b, c.onClone(c), delete c.onClone);
        return c
    };
    var Ac = function() {
        var a = [];
        this.fillFromArr = function(b) {
            a.length = 0;
            t(b, function(b) {
                a.push(b)
            })
        };
        this.fill = function(b, c) {
            a.length = 0;
            q.OOP.fillArr(a, b, c)
        };
        this.draw = function(b) {
            for (var c = a.length - 1; 0 <= c; c--) a[c].isInCamera() && (a[c].draw(), b && b(a[c], c))
        };
        this.update = function(b, c) {
            for (var d = a.length - 1; 0 <= d; d--) c && !a[d].isInCamera() || b(a[d], d)
        };
        this.add = function(b) {
            a.push(b)
        };
        this.del = function(b) {
            q.OOP.delObject(a, b)
        }
    };
    this.OOP.newGroup = function() {
        return new Ac
    };
    var Aa = 60,
        N = Date.now(),
        jb = 0,
        kb = -1,
        dc = N,
        ia = {},
        lb = 0;
    this.game.setFPS = function(a) {
        Aa = 0 < a ? a : 60
    };
    this.game.getFPS = function() {
        return Aa
    };
    this.game.getDT = function(a) {
        a || (a = 1E3);
        return jb / a
    };
    this.game.getTime = function() {
        return N
    };
    var ec = function() {
            return g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.oRequestAnimationFrame || g.msRequestAnimationFrame || function(a) {
                g.setTimeout(a, 1E3 / Aa)
            }
        },
        Ba = ec(),
        fc = function() {
            N = Date.now();
            Nb && h.clearRect(0, 0, n, m);
            l.runEvent("preLoop")
        },
        gc = function() {
            l.runEvent("postLoop"); -
            1 != kb && (jb = N - kb);
            kb = N
        },
        O = {
            func: function() {
                console.log('please, use a "setLoop" function.');
                Ba = function() {}
            },
            events: !1,
            start: !1,
            end: !1,
            audio: !1,
            fps: !1,
            name: "NotLoop"
        },
        hc = function() {
            O.audio && t(O.audio, function(a) {
                a.stop()
            })
        };
    this.game.newLoop = function(a, b, c, d, k) {
        "function" == typeof b ? ia[a] = {
            events: k || !1,
            func: b,
            start: c || !1,
            end: d || !1,
            audio: !1,
            fps: !1,
            name: a
        } : ja("error in newLoop : " + b + " is not a function")
    };
    this.game.newLoopFromClassObject = function(a, b) {
        if (!b.update) return ja('error in newLoopFromClassObject : function "update" not found');
        ia[a] = {
            events: b.events || !1,
            func: b.update,
            start: b.entry || !1,
            end: b.exit || !1,
            audio: !1,
            fps: !1,
            name: a
        }
    };
    this.game.newLoopFromConstructor = function(a, b) {
        q.game.newLoopFromClassObject(a, new b)
    };
    this.game.setLoopSound = function(a, b) {
        var c;
        ia[a].audio || (ia[a].audio = []);
        for (c = 0; c < b.length; c += 1) ia[a].audio.length = 0, b[c].setNextPlay(b[c + 1 == b.length ? 0 : c + 1]), ia[a].audio.push(b[c])
    };
    this.game.setLoop = function(a) {
        if (!ia[a]) return ja("setLoop : " + a + " is no a Loop");
        hc();
        Xb();
        Y = {};
        Ia = {};
        pa = {};
        Ka = Ja = !1;
        $b();
        Cb(e(0, 0));
        O.end && O.end();
        O = ia[a];
        A.loadFromEvents(O.events);
        O.start && O.start();
        O.audio && O.audio[0].play()
    };
    var A = new function() {
        var a = {
                "mouse:click": []
            },
            b = this;
        this.add = function(b, d) {
            a[b] || (a[b] = []);
            a[b].push(d)
        };
        this.run = function(b, d) {
            a[b] && t(a[b], function(a) {
                return a(d)
            })
        };
        this.clear = function(b) {
            a[b] && (a[b].length = 0)
        };
        this.clearAll = function() {
            E(a, function(a) {
                a.length = 0
            })
        };
        this.loadFromEvents = function(a) {
            b.clearAll();
            a && E(a, function(a, c) {
                b.add(c, a)
            })
        };
        this.isEvent = function(b) {
            return !!a[b]
        }
    };
    this.game.tick =
        function(a, b) {
            lb == a && b()
        };
    var mb = {};
    this.game.skip = function(a, b, c) {
        v(mb[a]) || (mb[a] = 0);
        mb[a]++ >= b && (c(), mb[a] = 0)
    };
    var Db = function() {
            60 > lb ? lb++ : lb = 0;
            if (60 > Aa) {
                var a = 1E3 / Aa;
                try {
                    N = Date.now(), N - dc > a && (fc(), O.func(jb), dc = N, gc())
                } catch (b) {
                    Ea && Ra(b), sb && (Ea || Ra(b), ja())
                }
                Ba(Db);
                return !1
            }
            try {
                fc(), O.func(jb), gc()
            } catch (b) {
                Ea && Ra(b), sb && (Ea || Ra(b), ja())
            }
            Ba(Db)
        },
        ic = function(a) {
            ka || (ka = !0, Aa = a || 60, Ba(Db))
        },
        ja = function(a) {
            if (!ka) return V(v(a) ? a : "game is stop");
            ka = !1;
            hc();
            Ba = function() {
                V(v(a) ? a : "game is stop")
            }
        };
    this.game.getWH = function() {
        return {
            w: n,
            h: m,
            w2: H,
            h2: I
        }
    };
    this.game.getWH2 = function() {
        return {
            w: n / 2,
            h: m / 2
        }
    };
    this.game.getResolution = function() {
        return Math.min(n / ea, m / fa)
    };
    this.game.startLoop = function(a, b) {
        this.setLoop(a);
        this.start(b)
    };
    this.game.start = ic;
    this.game.stop = ja;
    this.game.resume = function(a) {
        if (!ka) return O.audio && O.audio[0].play(), V(a || "game is run"), Ba = ec(), kb = -1, ic(), !1
    };
    var Bc = [],
        Cc = 0,
        C = function(a) {
            this.type = "BaseObject";
            this.id = Cc += 1;
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.w = a.w || 0;
            this.h = a.h ||
                0;
            this.ondraw = a.ondraw ? a.ondraw : !1;
            this.parent = !1;
            this.children = [];
            this.fillColor = a.fillColor || !1;
            this.strokeColor = a.strokeColor || u.strokeStyle;
            this.strokeWidth = a.strokeWidth || 0;
            this.angle = a.angle || 0;
            this.alpha = v(a.alpha) ? a.alpha : 1;
            this.center = e(0, 0);
            this.box = {
                x: 0,
                y: 0,
                w: 0,
                h: 0
            };
            this.visible = v(a.visible) ? a.visible : !0;
            this.flip = e(0, 0);
            this.__dataset__ = {};
            this.setShadow(a);
            a.userData && this.setUserData(a.userData);
            a.center && this.setCenter(a.center);
            a.box && this.setBox(a.box);
            a.size && this.setSize(a.size);
            a.sizeC && this.setSizeC(a.sizeC);
            a.position && this.setPosition(a.position);
            a.positionC && this.setPositionC(a.positionC);
            "function" === typeof a.oncreate && (this.oncreate = a.oncreate, this.oncreate(this), delete this.oncreate);
            Bc.push(this)
        };
    C.prototype = {
        getID: function() {
            return this.id
        },
        getType: function() {
            return this.type
        },
        dataDel: function(a) {
            delete this.__dataset__[a]
        },
        dataSet: function(a, b) {
            this.__dataset__[a] = b
        },
        dataGet: function(a, b) {
            return "undefined" !== typeof this.__dataset__[a] ? this.__dataset__[a] : "undefined" !==
                typeof b ? b : !1
        },
        data: function() {
            return this.__dataset__
        },
        getParent: function() {
            return this.parent
        },
        addChild: function(a) {
            a && a.id != this.id && (a.parent = this, this.children.push(a), a.move(this.getPosition()), a.setPositionC(F(a.getPositionC(), this.getPositionC(), this.angle)), a.turn(this.angle))
        },
        delChild: function(a) {
            a.parent = !1;
            var b;
            var c = 0;
            for (b = this.children.length; c < b; c += 1)
                if (this.children[c].id == a.id) {
                    this.children.splice(c, 1);
                    break
                }
        },
        delParent: function() {
            this.parent.delChild(this)
        },
        setBox: function(a) {
            a.offset &&
                (this.box.x = a.offset.x || 0, this.box.y = a.offset.y || 0);
            a.size && (this.box.w = a.size.w || 0, this.box.h = a.size.h || 0)
        },
        isArrIntersect: function(a) {
            var b;
            var c = 0;
            for (b = a.length; c < b; c += 1)
                if (a[c].id != this.id && this.isIntersect(a[c])) return a[c];
            return !1
        },
        isArrInside: function(a) {
            var b;
            var c = 0;
            for (b = a.length; c < b; c += 1)
                if (this.isDynamicInside(a[c].getDynamicBox())) return a[c];
            return !1
        },
        getNearest: function(a) {
            var b = 0,
                c = !1,
                d;
            var k = 0;
            for (d = a.length; k < d; k += 1)
                if (this.id != a[k].id) {
                    !1 === c && (c = this.getDistanceC(a[k].getPositionC()),
                        b = k);
                    var f = this.getDistanceC(a[k].getPositionC());
                    f < c && (c = f, b = k)
                }
            return a[b]
        },
        setFlip: function(a, b) {
            v(a) && this.flip.x != a && (this.flip.x = a);
            v(b) && this.flip.y != b && (this.flip.y = b)
        },
        setUserData: function(a) {
            for (var b in a) v(this[b]) || (this[b] = a[b])
        },
        setShadow: function(a) {
            this.shadowColor = a.shadowColor || !1;
            this.shadowBlur = v(a.shadowBlur) ? a.shadowBlur : 3;
            this.shadowX = a.shadowX || 0;
            this.shadowY = a.shadowY || 0
        },
        getDynamicBox: function() {
            var a = this.getPosition(1);
            return 0 == this.angle ? [e(this.x + this.box.x, this.y +
                this.box.y), e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y), e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y + this.h + this.box.h), e(this.x + this.box.x, this.y + this.box.y + this.h + this.box.h)] : [F(e(this.x + this.box.x, this.y + this.box.y), a, this.getAngle()), F(e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y), a, this.getAngle()), F(e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y + this.h + this.box.h), a, this.getAngle()), F(e(this.x + this.box.x, this.y + this.box.y + this.h + this.box.h), a, this.getAngle())]
        },
        isDynamicIntersect: function(a) {
            if (3 > a.length) return !1;
            var b = this.getDynamicBox(),
                c;
            var d = 0;
            for (c = b.length; d < c; d += 1)
                if (na(b[d], a)) return !0;
            d = 0;
            for (c = a.length; d < c; d += 1)
                if (na(a[d], b)) return !0;
            return !1
        },
        isIntersect: function(a) {
            return a.visible ? this.angle || a.angle ? this.isDynamicIntersect(a.getDynamicBox()) : this.isStaticIntersect(a.getStaticBox()) : !1
        },
        isDynamicInside: function(a) {
            if (3 > a.length) return !1;
            var b = this.getDynamicBox(),
                c, d = 0;
            var k = 0;
            for (c = b.length; k < c; k += 1) na(b[k], a) && (d += 1);
            return d == b.length ?
                !0 : !1
        },
        drawDynamicBox: function(a) {
            P(this, 1);
            h.shadowColor = "transparent";
            Ca(e(this.x + this.box.x, this.y + this.box.y), D(this.w + this.box.w, this.h + this.box.h), !1, a || "yellow", 2);
            jc(e(this.x + this.w / 2 + this.center.x, this.y + this.h / 2 + this.center.y), 10, a || "yellow");
            J()
        },
        drawStaticBox: function(a) {
            h.shadowColor = "transparent";
            Ca(e(this.x + this.box.x, this.y + this.box.y), D(this.w + this.box.w, this.h + this.box.h), !1, a || "yellow", 2);
            jc(e(this.x + this.w / 2 + this.center.x, this.y + this.h / 2 + this.center.y), 10, a || "yellow")
        },
        isStaticIntersect: function(a) {
            return this.y +
                this.box.y + this.h + this.box.h >= a.y && this.x + this.box.x + this.w + this.box.w >= a.x && this.x + this.box.x < a.x + a.w && this.y + this.box.y < a.y + a.h
        },
        getStaticBoxPosition: function() {
            return {
                x: this.x + this.box.x,
                y: this.y + this.box.y,
                w: this.x + this.box.x + this.w + this.box.w,
                h: this.y + this.box.y + this.h + this.box.h
            }
        },
        getStaticBox: function() {
            return {
                x: this.x + this.box.x,
                y: this.y + this.box.y,
                w: this.w + this.box.w,
                h: this.h + this.box.h
            }
        },
        setAlpha: function(a) {
            this.alpha != a && (this.alpha = 0 <= a ? 1 >= a ? a : 1 : 0)
        },
        transparent: function(a) {
            this.setAlpha(this.alpha +
                a)
        },
        getAlpha: function() {
            return this.alpha
        },
        rotate: function(a) {
            this.setAngle(Math.atan2(a.y - this.getPosition(1).y, a.x - this.getPosition(1).x) * (180 / Math.PI))
        },
        setCenter: function(a) {
            this.center = e(a.x, a.y)
        },
        nullCenter: function(a) {
            a || (a = e(0, 0));
            this.center = e(-this.w / 2 + a.x, -this.h / 2 + a.y)
        },
        getCenter: function() {
            return e(this.center.x, this.center.y)
        },
        getBox: function() {
            return this.box
        },
        move: function(a) {
            this.prevPosition = this.getPosition();
            this.x += a.x;
            this.y += a.y
        },
        circling: function(a, b, c) {
            v(this.circlingAnglePointJS) ||
                (this.circlingAnglePointJS = 0);
            this.x = a.x + b * Math.cos(z(this.circlingAnglePointJS));
            this.y = a.y + b * Math.sin(z(this.circlingAnglePointJS));
            this.circlingAnglePointJS = 360 < this.circlingAnglePointJS ? 0 : this.circlingAnglePointJS + c
        },
        circlingC: function(a, b, c) {
            v(this.circlingAnglePointJS) || (this.circlingAnglePointJS = 0);
            this.setPositionC(e(a.x + b * Math.cos(z(this.circlingAnglePointJS)), a.y + b * Math.sin(z(this.circlingAnglePointJS))));
            this.circlingAnglePointJS = 360 < this.circlingAnglePointJS ? 0 : this.circlingAnglePointJS +
                c
        },
        motion: function(a, b, c) {
            v(this.motionPercentPointJS) || (this.motionPercentPointJS = 0);
            this.x = a.x + b.w * Math.cos(z(this.motionPercentPointJS));
            this.y = a.y + b.h * Math.sin(z(this.motionPercentPointJS));
            this.motionPercentPointJS = 360 < this.motionPercentPointJS ? 0 : this.motionPercentPointJS + c
        },
        motionC: function(a, b, c) {
            v(this.motionPercentPointJS) || (this.motionPercentPointJS = 0);
            this.setPositionC(e(a.x + b.w * Math.cos(z(this.motionPercentPointJS)), a.y + b.h * Math.sin(z(this.motionPercentPointJS))));
            this.motionPercentPointJS =
                360 < this.motionPercentPointJS ? 0 : this.motionPercentPointJS + c
        },
        scale: function(a) {
            this.w *= a;
            this.h *= a
        },
        scaleC: function(a) {
            var b = this.w,
                c = this.h;
            this.scale(a);
            this.move(e(-((this.w - b) / 2), -((this.h - c) / 2)))
        },
        getPosition: function(a) {
            return 1 == a ? e(this.x + (this.w / 2 + this.center.x), this.y + (this.h / 2 + this.center.y)) : 2 == a ? (a = e(this.x + this.w / 2, this.y + this.h / 2), this.angle && (a = F(a, this.getPosition(1), this.angle)), e(a.x, a.y)) : e(this.x, this.y)
        },
        getPositionC: function() {
            return e(this.x + (this.w / 2 + this.center.x), this.y +
                (this.h / 2 + this.center.y))
        },
        getPositionS: function() {
            return e(this.x + f.x, this.y + f.x)
        },
        getPositionCS: function() {
            return e(this.x + (this.w / 2 + this.center.x) + f.x, this.y + (this.h / 2 + this.center.y) + f.y)
        },
        setPosition: function(a) {
            this.getPosition();
            !1 !== a.x && (this.x = a.x);
            !1 !== a.y && (this.y = a.y)
        },
        setPositionS: function(a) {
            this.getPosition();
            !1 !== a.x && (this.x = a.x + f.x);
            !1 !== a.y && (this.y = a.y + f.y)
        },
        setPositionC: function(a) {
            this.getPosition();
            !1 !== a.x && (this.x = -(this.w / 2 + this.center.x) + a.x);
            !1 !== a.y && (this.y = -(this.h /
                2 + this.center.y) + a.y)
        },
        setPositionCS: function(a) {
            this.getPosition();
            !1 !== a.x && (this.x = -(this.w / 2 + this.center.x) + a.x + f.x);
            !1 !== a.y && (this.y = -(this.h / 2 + this.center.y) + a.y + f.y)
        },
        getSize: function() {
            return D(this.w, this.h)
        },
        setSize: function(a) {
            this.w = a.w;
            this.h = a.h
        },
        setSizeC: function(a) {
            this.w = a.w;
            this.h = a.h;
            this.move(e(-(a.w / 2), -(a.h / 2)))
        },
        turn: function(a) {
            this.angle += a
        },
        rotateForAngle: function(a, b) {
            0 > this.angle && (this.angle += 360);
            0 > a && (a += 360);
            var c = this.angle - a;
            180 < c ? c -= 360 : -180 > c && (c += 360);
            c >= -b - .5 &&
                c <= b + .5 ? this.angle = a : c > b + .5 ? this.angle -= b : c < -b - .5 && (this.angle += b)
        },
        rotateForPoint: function(a, b) {
            var c = Ga(this.getPositionC(), a);
            this.rotateForAngle(c, b)
        },
        rotateForObject: function(a, b) {
            var c = Ga(this.getPositionC(), a.getPositionC());
            this.rotateForAngle(c, b)
        },
        moveTo: function(a, b) {
            var c = z(Ga(this.getPosition(), a));
            this.prevPosition = this.getPosition();
            this.x += b * Math.cos(c);
            this.y += b * Math.sin(c)
        },
        moveToC: function(a, b) {
            var c = z(Ga(this.getPositionC(), a));
            this.prevPosition = this.getPosition();
            this.x += b * Math.cos(c);
            this.y += b * Math.sin(c)
        },
        moveAngle: function(a, b) {
            b = z(v(b) ? b : this.angle);
            this.prevPosition = this.getPosition();
            this.x += a * Math.cos(b);
            this.y += a * Math.sin(b)
        },
        moveTime: function(a, b) {
            b = b || 1;
            var c = this.getPosition();
            this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
        },
        moveTimeC: function(a, b) {
            b = b || 1;
            var c = this.getPosition(1);
            this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
        },
        getAngle: function() {
            return this.angle
        },
        setAngle: function(a) {
            this.angle != a && (this.angle = a % 360)
        },
        getDistance: function(a) {
            return Math.sqrt(Math.pow(a.x - this.getPosition(2).x,
                2) + Math.pow(a.y - this.getPosition(2).y, 2))
        },
        getDistanceC: function(a) {
            return Math.sqrt(Math.pow(a.x - this.getPosition(1).x, 2) + Math.pow(a.y - this.getPosition(1).y, 2))
        },
        setVisible: function(a) {
            this.visible = 1 == a
        },
        isVisible: function() {
            return this.visible
        },
        isInCamera: function() {
            return this.angle ? this.isInCameraDynamic() : this.isInCameraStatic()
        },
        isInCameraStatic: function() {
            return this.x + this.w < f.x || this.x > f.x + n || this.y + this.h < f.y || this.y > f.y + m ? !1 : !0
        },
        isInCameraDynamic: function() {
            var a = this.getDynamicBox(),
                b = [e(f.x, f.y), e(f.x + n, f.y), e(f.x + n, f.y + m), e(f.x, f.y + m)],
                c, d = 0;
            var k = 0;
            for (c = a.length; k < c; k += 1) na(a[k], b) && (d += 1);
            return 0 < d
        },
        draw: function() {}
    };
    this.game.newBaseObject = function(a) {
        return new C(a)
    };
    var nb = function(a) {
        C.call(this, a);
        this.type = "TriangleObject"
    };
    ba(C, nb);
    nb.prototype.getDynamicBox = function() {
        var a = this.getPositionC();
        return 0 == this.angle ? [e(this.x + this.w / 2, this.y), e(this.x + this.w, this.y + this.h), e(this.x, this.y + this.h)] : [F(e(this.x + this.w / 2, this.y), a, this.getAngle()), F(e(this.x + this.w, this.y +
            this.h), a, this.getAngle()), F(e(this.x, this.y + this.h), a, this.getAngle())]
    };
    nb.prototype.draw = function() {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) P(this), a = !0;
            Qa(this.x, this.y, [e(this.w / 2, 0), e(this.w, this.h), e(0, this.h)], this.fillColor, this.strokeWidth ? this.strokeColor : !1, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && J()
        }
    };
    this.game.newTriangleObject = function(a) {
        return new nb(a)
    };
    var Eb = function(a) {
        C.call(this, a);
        this.type = "RectObject"
    };
    ba(C, Eb);
    Eb.prototype.draw =
        function() {
            if (this.visible && this.alpha) {
                var a = !1;
                if (this.angle || 1 != this.alpha || this.shadowColor) P(this), a = !0;
                Ca(e(this.x, this.y), D(this.w, this.h), this.fillColor, this.strokeColor, this.strokeWidth);
                if (this.ondraw) this.ondraw();
                a && J()
            }
        };
    this.game.newRectObject = function(a) {
        return new Eb(a)
    };
    var Fb = function(a) {
        C.call(this, a);
        this.type = "RoundRectObject";
        this.radius = a.radius || 1
    };
    ba(C, Fb);
    Fb.prototype.draw = function() {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) P(this),
                a = !0;
            Gb(e(this.x, this.y), D(this.w, this.h), this.radius, this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && J()
        }
    };
    this.game.newRoundRectObject = function(a) {
        return new Fb(a)
    };
    var ra = function(a) {
        C.call(this, a);
        this.radius = a.radius || 5;
        a.scale && (this.radius *= a.scale);
        this.w = 2 * this.radius;
        this.h = 2 * this.radius;
        this.type = "CircleObject";
        a.positionC && this.setPositionC(a.positionC)
    };
    ba(C, ra);
    ra.prototype.draw = function() {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha ||
                this.shadowColor) P(this), a = !0;
            Da(e(this.x, this.y), this.radius, this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            a && J()
        }
    };
    ra.prototype.scale = function(a) {
        this.w *= a || 0;
        this.h *= a || 0;
        this.radius *= a ? a / 2 : 0
    };
    ra.prototype.scaleC = function(a) {
        var b = this.w,
            c = this.h;
        this.w *= a || 0;
        this.h *= a || 0;
        this.radius *= a;
        this.move(e(-((this.w - b) / 2), -((this.h - c) / 2)))
    };
    ra.prototype.getRadius = function() {
        return this.radius
    };
    ra.prototype.setRadius = function(a) {
        a && this.radius != a && (this.radius = a, this.w =
            2 * a, this.h = 2 * a)
    };
    this.game.newCircleObject = function(a) {
        return new ra(a)
    };
    var Hb = function(a) {
        this.file = a.file;
        this.w = a.w;
        this.h = a.h;
        this.read = {
            x: 0,
            y: 0,
            w: 0,
            h: 0
        };
        a.read && (this.read.w = a.read.w || 0, this.read.h = a.read.h || 0, this.read.x = a.read.x || 0, this.read.y = a.read.y || 0);
        this.countX = a.countX;
        this.countY = a.countY;
        this.fullW = this.countX * this.w;
        this.fullH = this.countY * this.h;
        this.cnv = g.document.createElement("canvas");
        this.cnv.width = this.w;
        this.cnv.height = this.h;
        this.ctx = this.cnv.getContext("2d");
        this.loaded = !1;
        this.x = a.x || 0;
        this.y = a.y || 0;
        a = g.document.createElement("img");
        var b = this;
        a.onload = function() {
            b.ctx.drawImage(this, b.read.x ? b.read.x : 0, b.read.y ? b.read.y : 0, b.read.w ? b.read.w : this.width, b.read.h ? b.read.h : this.height, 0, 0, b.w, b.h);
            b.loaded = !0;
            B.load()
        };
        a.src = this.file;
        B.add()
    };
    Hb.prototype.draw = function() {
        if (this.loaded) {
            var a = -f.x + this.x,
                b = -f.y + this.y,
                c, d;
            for (d = 0; d < this.countY; d += 1)
                if (!(this.y + d * this.h + this.h < f.y || this.y + d * this.h > f.y + m))
                    for (c = 0; c < this.countX; c += 1) this.x + c * this.w + this.w < f.x || this.x +
                        c * this.w > f.x + n || h.drawImage(this.cnv, a + c * this.w, b + d * this.h, this.w, this.h)
        }
    };
    Hb.prototype.getSize = function() {
        return this.loaded ? D(this.fullW, this.fullH) : D()
    };
    this.game.newBackgroundObject = function(a) {
        return new Hb(a)
    };
    var Ib = function(a) {
        C.call(this, a);
        this.type = "EllipsObject"
    };
    ba(C, Ib);
    Ib.prototype.draw = function() {
        if (this.visible && this.alpha) {
            P(this);
            Da(e(this.x, this.y), this.h / 2, this.fillColor, this.strokeColor, this.strokeWidth);
            if (this.ondraw) this.ondraw();
            J()
        }
    };
    this.game.newEllipsObject = function(a) {
        return new Ib(a)
    };
    var Z = function(a) {
        C.call(this, a);
        this.type = "TextObject";
        this.text = a.text || "TextObject";
        this.color = a.color || "";
        this.size = a.size || 10;
        a.scale && (this.size *= a.scale);
        this.font = a.font || "sans-serif";
        this.style = a.style || "";
        this.align = "left";
        this.padding = a.padding || 2;
        this.w = Jb(this.text, this.style, this.size, this.font) + 2 * this.padding;
        this.h = this.size + 2 * this.padding;
        this.strokeColorText = a.strokeColorText || !1;
        this.strokeWidthText = a.strokeWidthText || !1;
        this.textDY = -this.size / 7;
        a.positionC && this.setPositionC(a.positionC)
    };
    ba(C, Z);
    Z.prototype.reStyle = function(a) {
        this.text = a.text || this.text;
        this.color = a.color || this.color;
        this.size = a.size || this.size;
        this.font = a.font || this.font;
        this.style = a.style || this.style;
        this.padding = a.padding || this.padding;
        this.w = Jb(this.text, this.style, this.size, this.font) + 2 * this.padding;
        this.h = this.size + 2 * this.padding;
        this.strokeColorText = a.strokeColorText || this.strokeColorText;
        this.strokeWidthText = a.strokeWidthText || this.strokeWidthText;
        this.strokeColor = a.strokeColor || this.strokeColor;
        this.strokeWidth =
            a.strokeWidth || this.strokeWidth;
        this.fillColor = a.fillColor || this.fillColor;
        this.textDY = -this.size / 7
    };
    Z.prototype.setText = function(a) {
        this.text != a && this.reStyle({
            text: a
        })
    };
    Z.prototype.getText = function() {
        return this.text
    };
    Z.prototype.draw = function() {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) P(this), a = !0;
            (this.fillColor || this.strokeColor) && Ca(e(this.x, this.y), D(this.w, this.h), this.fillColor, this.strokeColor, this.strokeWidth);
            sa(e(this.x + this.padding, this.textDY +
                this.y + this.padding), this.text, this.color, this.size, this.font, this.style, this.align, this.strokeColorText, this.strokeWidthText);
            if (this.ondraw) this.ondraw();
            a && J()
        }
    };
    Z.prototype.scale = function(a) {
        this.reStyle({
            size: this.size * a
        })
    };
    Z.prototype.scaleC = function(a) {
        var b = this.w,
            c = this.h;
        this.reStyle({
            size: this.size * a
        });
        this.move(e(-((this.w - b) / 2), -((this.h - c) / 2)))
    };
    Z.prototype.setSize = function(a) {
        this.size != a && this.reStyle({
            size: a
        })
    };
    Z.prototype.setSizeC = function(a) {
        this.size != a && (this.reStyle({
                size: a
            }),
            this.move(e(-a / 2, -a / 2)))
    };
    var Jb = function(a, b, c, d) {
        var k = g.document.createElement("canvas").getContext("2d");
        k.font = b + c + "px " + d;
        return k.measureText(a).width
    };
    this.OOP.getTextWidth = function(a) {
        return Jb(a.text, a.style || "", a.size || 10, a.font || "sans-serif")
    };
    this.game.newTextObject = function(a) {
        return new Z(a)
    };
    var R = function(a) {
        C.call(this, a);
        this.type = "PolygonObject";
        this.points = [];
        this.dX = this.dY = 0;
        var b = this;
        a.points && t(a.points, function(a) {
            b.addPoint(a)
        });
        this.pointColor = a.pointColor || !1
    };
    ba(C, R);
    R.prototype.addPoint = function(a) {
        this.dY = this.dX = 0;
        var b = this;
        this.y + a.y < this.y && (this.dY = Math.abs(this.y + a.y - this.y), t(this.points, function(a) {
            a.y += b.dY
        }));
        this.x + a.x < this.x && (this.dX = Math.abs(this.x + a.x - this.x), b = this, t(this.points, function(a) {
            a.x += b.dX
        }));
        this.points.push(e(a.x + this.dX, a.y + this.dY));
        this.h = this.w = 0;
        b = this;
        t(this.points, function(a) {
            b.h += b.y + a.y > b.y + b.h ? a.y - b.h : 0;
            b.w += b.x + a.x > b.x + b.w ? a.x - b.w : 0
        })
    };
    R.prototype.delPoint = function(a) {
        var b, c = this.getPoints();
        this.clearPoints();
        var d =
            0;
        for (b = c.length; d < b; d += 1) d != a && this.addPoint(c[d])
    };
    R.prototype.clearPoints = function() {
        this.points = [];
        this.count = 0
    };
    R.prototype.getPoints = function() {
        return this.points
    };
    R.prototype.getCount = function() {
        return this.points.length
    };
    R.prototype.getPoint = function(a) {
        return this.points[a]
    };
    R.prototype.scale = function(a) {
        return !1
    };
    R.prototype.drawDynamicBox = function(a) {
        var b = !1;
        if (this.angle || 1 != this.alpha || this.shadowColor) P(this), b = !0;
        Qa(this.x, this.y, this.points, this.fillColor, a || "yellow", 2, "red");
        b &&
            J()
    };
    R.prototype.getDynamicBox = function() {
        var a = [];
        if (this.angle) {
            var b = this.getPosition(1);
            c = this;
            t(this.points, function(d) {
                a.push(F(wa(d, e(c.x, c.y)), b, c.getAngle()))
            })
        } else {
            var c = this;
            t(this.points, function(b) {
                a.push(wa(b, e(c.x, c.y)))
            })
        }
        return a
    };
    R.prototype.draw = function() {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) P(this), a = !0;
            Qa(this.x, this.y, this.points, this.fillColor, this.strokeColor, this.strokeWidth, this.pointColor);
            if (this.ondraw) this.ondraw();
            a &&
                J()
        }
    };
    this.game.newPolygonObject = function(a) {
        return new R(a)
    };
    var ta = function(a) {
        C.call(this, a);
        this.type = "ImageObject";
        this.loaded = !1;
        this.file = "";
        this.forOnLoad = a.onload || !1;
        kc(a.file, this, a.scale || 1)
    };
    ba(C, ta);
    ta.prototype.draw = function() {
        if (this.visible && this.alpha && this.loaded) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor || this.flip.x || this.flip.y) P(this), a = !0;
            lc(e(this.x, this.y), D(this.w, this.h), this.file);
            if (this.ondraw) this.ondraw();
            a && J()
        }
    };
    ta.prototype.simpleDraw = function(a) {
        if (this.loaded) {
            var b = !1;
            if (this.angle || 1 != this.alpha || this.shadowColor) P(this), b = !0;
            lc(e(a.x, a.y), D(this.w, this.h), this.file);
            b && J()
        }
    };
    ta.prototype.setImage = function(a, b) {
        this.file != a && (v(p[a]) ? (this.file = a, b && b()) : (this.loaded = !1, this.origHeight = this.origWidth = 0, this.forOnLoad = b || !1, kc(a, this)))
    };
    ta.prototype.getImage = function() {
        return this.file
    };
    ta.prototype.resize = function(a) {
        if (!1 !== a.w && !1 === a.h) {
            var b = a.w / this.w;
            this.w = a.w;
            this.h *= b
        } else !1 !== a.h && !1 === a.w ? (b = a.h / this.h, this.h = a.h, this.w *= b) : !1 !== a.w && !1 !== a.h &&
            (this.w = a.w, this.h = a.h)
    };
    this.game.newImageObject = function(a) {
        return new ta(a)
    };
    var Q = function(a) {
        C.call(this, a);
        this.type = "AnimationObject";
        this.frame = 0;
        this.anim = a.animation;
        this.step = a.delay || 10;
        this.toFrameStep = this.difStep = 0;
        a.scale && (this.w *= a.scale, this.h *= a.scale)
    };
    ba(C, Q);
    Q.prototype.draw = function() {
        if (this.visible && this.alpha) {
            var a = !1;
            if (this.angle || 1 != this.alpha || this.flip.x || this.flip.y || this.shadowColor) P(this), a = !0;
            Kb(this.anim, e(this.x, this.y), D(this.w, this.h), this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame = this.frame < this.anim.r ? this.frame + 1 : 0, this.difStep = 0) : this.difStep += 1;
            a && J()
        }
    };
    Q.prototype.drawFrames = function(a, b, c) {
        if (this.visible && this.alpha) {
            if (this.frame < a || this.frame > b) this.frame = a;
            c = !1;
            if (this.angle || 1 != this.alpha || this.flip.x || this.flip.y || this.shadowColor) P(this), c = !0;
            Kb(this.anim, e(this.x, this.y), D(this.w, this.h), this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame = this.frame < b ? this.frame + 1 : a, this.difStep = 0) : this.difStep += 1;
            c &&
                J()
        }
    };
    Q.prototype.drawFrame = function(a) {
        if (this.visible && this.alpha) {
            var b = !1;
            if (this.angle || 1 != this.alpha || this.flip.x || this.flip.y || this.shadowColor) P(this), b = !0;
            Kb(this.anim, e(this.x, this.y), D(this.w, this.h), a);
            if (this.ondraw) this.ondraw();
            b && J()
        }
    };
    Q.prototype.drawToFrame = function(a) {
        if (this.visible && this.alpha) {
            if (this.frame < a) this.toFrameStep = 1;
            else if (this.frame > a) this.toFrameStep = -1;
            else {
                this.drawFrame(a);
                return
            }
            this.drawFrame(this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ?
                (this.frame = this.frame < this.anim.r ? this.frame + this.toFrameStep : 0, this.difStep = 0) : this.difStep += 1
        }
    };
    Q.prototype.drawReverFrames = function(a, b) {
        if (this.visible && this.alpha) {
            this.drawFrame(this.frame);
            if (this.ondraw) this.ondraw();
            this.difStep > this.step ? (this.frame <= a ? this.toFrameStep = 1 : this.frame >= b && (this.toFrameStep = -1), this.frame += this.toFrameStep, this.difStep = 0) : this.difStep += 1
        }
    };
    Q.prototype.setAnimation = function(a) {
        a !== this.anim && (this.frame = 0, this.anim = a)
    };
    Q.prototype.getAnimation = function() {
        return this.anim
    };
    Q.prototype.setDelay = function(a) {
        this.step = 0 < a ? a : this.step
    };
    Q.prototype.getDelay = function() {
        return this.step
    };
    Q.prototype.getFrame = function() {
        return this.frame
    };
    Q.prototype.setFrame = function(a) {
        this.frame = a
    };
    Q.prototype.getLastFrame = function() {
        return this.anim.endFrame
    };
    this.game.newAnimationObject = function(a) {
        return new Q(a)
    };
    var cc = function(a) {
            var b = !1;
            "RectObject" == a.type ? b = q.game.newRectObject({}) : "CircleObject" == a.type ? b = q.game.newCircleObject({}) : "RoundRectObject" == a.type ? b = q.game.newRoundRectObject({}) :
                "TextObject" == a.type ? b = q.game.newTextObject({}) : "EllipsObject" == a.type ? b = q.game.newEllipsObject({}) : "ImageObject" == a.type ? b = q.game.newImageObject({
                    file: a.file
                }) : "TriangleObject" == a.type ? b = q.game.newTriangleObject({}) : "AnimationObject" == a.type && (b = q.game.newAnimationObject({
                    animation: a.animation
                }));
            return b
        },
        Dc = 0,
        ua = function(a, b) {
            this.file = a;
            this.loaded = !1;
            this.h = this.w = 0;
            this.id = Dc++;
            this.toLoad = [];
            var c = g.document.createElement("img"),
                d = this;
            c.onload = function() {
                d.loaded = !0;
                d.w = this.width;
                d.h = this.height;
                d.img = g.document.createElement("canvas");
                d.img.width = this.width;
                d.img.height = this.height;
                d.context = d.img.getContext("2d");
                d.context.drawImage(this, 0, 0);
                d.toLoad.length && t(d.toLoad, function(a) {
                    a.func(d.context, a.w, a.h, a.r)
                });
                b && (d.onLoad = b, d.onLoad());
                B.load()
            };
            c.src = a;
            B.add()
        };
    ua.prototype.onContext = function(a) {
        this.loaded ? a(this.context, this.w, this.h, 1) : this.toLoad.push({
            w: this.w,
            h: this.h,
            r: 1,
            func: a
        })
    };
    ua.prototype.getCanvas = function() {
        return this.img
    };
    var Ec = 0;
    ua.prototype.getAnimation = function(a,
        b, c, d, f) {
        var k = function(a, b, c, d, f, k) {
            this.id = Ec++;
            this.image = a;
            this.x = b;
            this.y = c;
            this.w = d;
            this.h = f;
            this.endFrame = this.r = k ? k - 1 : 0;
            this.frameCount = this.r + 1
        };
        k.prototype = {
            onContext: function(a) {
                this.image.loaded ? a(this.image.context, this.w, this.h, this.r) : this.image.toLoad.push({
                    w: this.w,
                    h: this.h,
                    r: this.r,
                    func: a
                })
            },
            getImage: function() {
                return this.image
            },
            getCount: function() {
                return this.r
            }
        };
        return new k(this, a, b, c, d, f)
    };
    var Lb = function(a, b) {
        this.loaded = !0;
        this.w = a;
        this.h = b;
        this.img = g.document.createElement("canvas");
        this.img.width = a;
        this.img.height = b;
        this.context = this.img.getContext("2d")
    };
    Lb.prototype.onContext = ua.prototype.onContext;
    Lb.prototype.getAnimation = ua.prototype.getAnimation;
    this.tiles.newDrawImage = function(a, b) {
        return new Lb(a, b)
    };
    this.tiles.newImage = function(a, b) {
        return new ua(a, b)
    };
    this.tiles.newAnimation = function(a, b, c, d) {
        return (new ua(a)).getAnimation(0, 0, b, c, d)
    };
    var Kb = function(a, b, c, d) {
            if (a && a.image.loaded) {
                var k = -f.x,
                    e = -f.y;
                a.image.img && h.drawImage(a.image.img, a.x + a.w * d, a.y, a.w, a.h, b.x + k, b.y +
                    e, c.w, c.h)
            }
        },
        p = {},
        kc = function(a, b, c) {
            if (v(p[a])) {
                b.loaded = !0;
                b.file = a;
                if (b.w && !b.h) {
                    var d = b.w / p[a].w;
                    var f = b.w;
                    var e = p[a].h * d
                } else !b.w && b.h ? (d = b.h / p[a].h, e = b.h, f = p[a].w * d) : b.w && b.h ? (f = b.w, e = b.h) : (f = p[a].w, e = p[a].h);
                c && (f *= c, e *= c);
                b.w = f;
                b.h = e;
                b.forOnLoad && b.forOnLoad()
            } else f = g.document.createElement("img"), f.onload = function() {
                p[a] = {};
                p[a].loaded = !0;
                p[a].img = this;
                p[a].w = this.width;
                p[a].h = this.height;
                if (v(b)) {
                    b.loaded = !0;
                    if (b.w && !b.h) {
                        var d = b.w / p[a].w;
                        var f = b.w;
                        var k = p[a].h * d
                    } else !b.w && b.h ? (d = b.h / p[a].h,
                        k = b.h, f = p[a].w * d) : b.w && b.h ? (f = b.w, k = b.h) : (f = p[a].w, k = p[a].h);
                    c && (f *= c, k *= c);
                    b.w = f;
                    b.h = k;
                    b.file = a;
                    b.forOnLoad && b.forOnLoad()
                }
                B.load()
            }, f.src = a, B.add()
        },
        lc = function(a, b, c) {
            if (c) {
                var d = -f.x,
                    k = -f.y;
                p[c] && h.drawImage(p[c].img, 0, 0, p[c].w, p[c].h, a.x + d, a.y + k, b.w, b.h)
            }
        },
        mc = function(a) {
            this.type = "Mesh";
            this.objs = [];
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.angle = a.angle || 0;
            this.count = 0;
            var b = this;
            a.add && t(a.add, function(a) {
                b.add(a)
            });
            this.angle && this.setAngle(this.angle)
        };
    mc.prototype = {
        getCount: function() {
            return this.count
        },
        getObjects: function() {
            return this.objs
        },
        add: function(a) {
            this.count += 1;
            this.objs.push(a);
            a.offsetMesh = a.getPosition(1);
            a.turn(this.angle);
            a.setPositionC(e(this.x + a.offsetMesh.x, this.y + a.offsetMesh.y))
        },
        del: function(a) {
            var b = this;
            t(this.objs, function(c) {
                c.id == a.id && (b.objs.splice(void 0, 1), b.count--)
            })
        },
        draw: function(a) {
            t(this.objs, function(a) {
                a.draw()
            })
        },
        move: function(a) {
            this.x += a.x || 0;
            this.y += a.y || 0;
            var b = this;
            t(this.objs, function(a) {
                a.setPositionC(e(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y))
            })
        },
        turn: function(a) {
            if (0 !=
                a) {
                this.angle %= 360;
                this.angle += a;
                var b = e(this.x, this.y),
                    c = this;
                t(this.objs, function(d) {
                    d.turn(a);
                    d.setPositionC(F(e(c.x + d.offsetMesh.x, c.y + d.offsetMesh.y), b, c.angle))
                })
            }
        },
        setAngle: function(a) {
            if (a != this.angle) {
                this.angle = a %= 360;
                var b = e(this.x, this.y),
                    c = this;
                t(this.objs, function(d) {
                    d.setAngle(a);
                    d.setPositionC(F(e(c.x + d.offsetMesh.x, c.y + d.offsetMesh.y), b, c.angle))
                })
            }
        },
        setPosition: function(a) {
            if (this.x != a.x || this.y != a.y) {
                this.x = a.x || this.x;
                this.y = a.y || this.y;
                var b = this;
                t(this.objs, function(a) {
                    b.angle ?
                        a.setPositionC(F(e(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y), e(b.x, b.y), b.angle)) : a.setPositionC(e(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y))
                })
            }
        },
        isDynamicIntersect: function(a) {
            if (3 > a.length) return !1;
            var b = !1;
            t(this.objs, function(c) {
                if (c.isDynamicIntersect(a)) return b = c
            });
            return b
        },
        isStaticIntersect: function(a) {
            var b = !1;
            t(this.objs, function(c) {
                if (c.isStaticIntersect(a)) return b = c
            });
            return b
        },
        isIntersect: function(a) {
            var b = !1;
            t(this.objs, function(c) {
                if (c.isIntersect(a)) return b = c
            });
            return b
        }
    };
    this.game.newMesh =
        function(a) {
            return new mc(a)
        };
    this.camera.scale = function(a) {
        la *= a.x;
        ma *= a.y;
        n /= a.x;
        m /= a.y;
        H = n / 2;
        I = m / 2;
        h.scale(a.x, a.y);
        h.save();
        La && (w.x /= a.x, w.y /= a.y)
    };
    this.camera.scaleC = function(a) {
        var b = n,
            c = m;
        la *= a.x;
        ma *= a.y;
        n /= a.x;
        m /= a.y;
        H = n / 2;
        I = m / 2;
        h.scale(a.x, a.y);
        h.save();
        f.x += (b - n) / 2;
        f.y += (c - m) / 2;
        La && (w.x /= a.x, w.y /= a.y)
    };
    this.camera.circling = function(a, b, c) {
        v(this.circlingAnglePointJS) || (this.circlingAnglePointJS = c);
        f.x = a.x + b * Math.cos(z(this.circlingAnglePointJS));
        f.y = a.y + b * Math.sin(z(this.circlingAnglePointJS));
        this.circlingAnglePointJS = 360 <= this.circlingAnglePointJS ? c : this.circlingAnglePointJS + c
    };
    this.camera.circlingC = function(a, b, c) {
        v(this.circlingAnglePointJS) || (this.circlingAnglePointJS = c);
        f.x = -H + a.x + b * Math.cos(z(this.circlingAnglePointJS));
        f.y = -I + a.y + b * Math.sin(z(this.circlingAnglePointJS));
        this.circlingAnglePointJS = 360 <= this.circlingAnglePointJS ? c : this.circlingAnglePointJS + c
    };
    this.camera.motion = function(a, b, c) {
        v(this.motionPercentPointJS) || (this.motionPercentPointJS = b);
        f.x = a.x + b.w * Math.cos(z(this.motionPercentPointJS));
        f.y = a.y + b.h * Math.sin(z(this.motionPercentPointJS));
        this.motionPercentPointJS = 360 <= this.motionPercentPointJS ? b : this.motionPercentPointJS + c
    };
    this.camera.motionC = function(a, b, c) {
        v(this.motionPercentPointJS) || (this.motionPercentPointJS = b);
        this.setPositionC(e(a.x + b.w * Math.cos(z(this.motionPercentPointJS)), a.y + b.h * Math.sin(z(this.motionPercentPointJS))));
        this.motionPercentPointJS = 360 <= this.motionPercentPointJS ? b : this.motionPercentPointJS + c
    };
    this.camera.follow = function(a, b) {
        this.moveTimeC(a.getPositionC(),
            b || 10)
    };
    this.camera.move = function(a) {
        f.x += a.x || 0;
        f.y += a.y || 0
    };
    this.camera.moveTime = function(a, b) {
        b = b || 1;
        var c = e(f.x, f.y);
        this.move(e(la * (a.x - c.x) / b, ma * (a.y - c.y) / b))
    };
    this.camera.moveTimeC = function(a, b) {
        b = b || 1;
        var c = e(f.x + H, f.y + I);
        this.move(e(la * (a.x - c.x) / b, ma * (a.y - c.y) / b))
    };
    this.camera.setPosition = function(a) {
        Cb(e(!1 !== a.x ? a.x : f.x, !1 !== a.y ? a.y : f.y))
    };
    this.camera.setPositionC = function(a) {
        Cb(e(!1 !== a.x ? a.x - H : f.x, !1 !== a.y ? a.y - I : f.y))
    };
    this.camera.getPosition = function(a) {
        return a ? e(f.x + H, f.y + I) : e(f.x,
            f.y)
    };
    this.camera.getPositionC = function() {
        return e(f.x + H, f.y + I)
    };
    this.camera.getStaticBox = function() {
        return {
            x: f.x,
            y: f.y,
            w: f.x + n,
            h: f.y + m
        }
    };
    this.camera.getDynamicBox = function() {
        return [e(f.x, f.y), e(f.x + n, f.y), e(f.x + n, f.y + m), e(f.x, f.y + m)]
    };
    var Cb = function(a) {
            f = e(a.x, a.y)
        },
        J = function(a) {
            h.restore();
            h.globalAlpha = u.globalAlpha;
            h.fillStyle = "black";
            h.strokeStyle = "black";
            h.msImageSmoothingEnabled = Fa;
            h.imageSmoothingEnabled = Fa
        },
        P = function(a, b) {
            h.save();
            var c = a.getPositionC();
            a.angle && (h.translate(-f.x + c.x, -f.y + c.y), h.rotate(z(a.angle)), h.translate(-c.x + f.x, -c.y + f.y));
            1 != a.alpha && (h.globalAlpha = a.alpha);
            if (a.flip.x || a.flip.y) h.translate(-f.x + c.x, -f.y + c.y), h.scale(a.flip.x ? -1 : 1, a.flip.y ? -1 : 1), h.translate(-c.x + f.x, -c.y + f.y);
            a.shadowColor && (h.shadowBlur = a.shadowBlur, h.shadowColor = a.shadowColor, h.shadowOffsetX = a.shadowX, h.shadowOffsetY = a.shadowY);
            if ("EllipsObject" == a.type && !b) {
                c = a.w / 2;
                var d = a.h / 2,
                    k = e(-f.x + a.x, -f.y + a.y);
                h.translate(k.x, k.y);
                h.scale(c / d, 1);
                h.translate(-k.x, -k.y)
            }
        };
    this.system.setContextSettings =
        function(a) {
            h.save();
            for (var b in a) h[b] = a[b]
        };
    this.system.defaultSettings = function() {
        J()
    };
    this.game.clear = function() {
        h.clearRect(0, 0, n, m)
    };
    this.game.fill = function(a) {
        h.fillStyle = a;
        h.fillRect(0, 0, n, m)
    };
    var Qa = function(a, b, c, d, k, g, l) {
            if (!(3 > c.length)) {
                if (d && !(3 > c.length)) {
                    h.fillStyle = d;
                    d = -f.x + a;
                    var m = -f.y + b;
                    var x;
                    h.beginPath();
                    h.moveTo(d + c[0].x, m + c[0].y);
                    for (x = 1; x < c.length; x += 1) h.lineTo(d + c[x].x, m + c[x].y);
                    h.closePath();
                    h.fill()
                }
                for (d = 0; d < c.length; d += 1) m = d + 1 < c.length ? d + 1 : 0, k && aa(wa(c[d], e(a, b)), wa(c[m],
                    e(a, b)), k, g), l && ob(wa(c[d], e(a, b)), l)
            }
        },
        S = function(a) {
            a.x || (a.x = 0);
            a.y || (a.y = 0);
            a.w || (a.w = 0);
            a.h || (a.h = 0)
        };
    this.brush.drawPolygon = function(a) {
        var b = a.points || [],
            c = a.fillColor || !1,
            d = a.strokeColor || !1,
            k = a.strokeWidth || 1;
        a = a.pointColor || !1;
        if (!(3 > b.length)) {
            if (c && !(3 > b.length)) {
                h.fillStyle = c;
                c = -f.x;
                var e = -f.y;
                var g;
                h.beginPath();
                h.moveTo(c + b[0].x, e + b[0].y);
                for (g = 1; g < b.length; g += 1) h.lineTo(c + b[g].x, e + b[g].y);
                h.closePath();
                h.fill()
            }
            for (c = 0; c < b.length; c += 1) e = c + 1 < b.length ? c + 1 : 0, d && aa(b[c], b[e], d, k), a && ob(b[c],
                a)
        }
    };
    this.brush.drawTriangle = function(a) {
        S(a);
        if (a.x + a.w < f.x || a.x > f.x + n || a.y + a.h < f.y || a.y > f.y + m) return !1;
        Qa(a.x, a.y, [e(a.w / 2, 0), e(a.w, a.h), e(0, a.h)], a.fillColor, a.strokeColor, a.strokeWidth)
    };
    this.brush.drawTriangleS = function(a) {
        S(a);
        if (0 > a.x + a.w || a.x > n || 0 > a.y + a.h || a.y > m) return !1;
        Qa(f.x + a.x, f.y + a.y, [e(a.w / 2, 0), e(a.w, a.h), e(0, a.h)], a.fillColor, a.strokeColor, a.strokeWidth)
    };
    var sa = function(a, b, c, d, k, e, g, l, m) {
        h.textAlign = g;
        h.lineWidth = m;
        h.font = (e ? e + " " : "") + d + "px " + k;
        d = -f.x;
        k = -f.y;
        c && (h.fillStyle = c, h.fillText(b,
            d + a.x, k + a.y));
        l && (h.strokeStyle = l, h.strokeText(b, d + a.x, k + a.y))
    };
    this.brush.drawMultiText = function(a) {
        var b, c = a.text.split("\n");
        for (b = 0; b < c.length; b += 1) sa(e(a.x, a.y + a.size * b), c[b], a.color || u.fillStyle, a.size || 10, a.font || u.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawMultiTextS = function(a) {
        var b, c = a.text.split("\n"),
            d = a.size || 10;
        for (b = 0; b < c.length; b += 1) sa(e(a.x + f.x, a.y + f.y + d * b), c[b], a.color || u.fillStyle, d || 10, a.font || u.font, a.style || !1, a.align || "left", a.strokeColor ||
            !1, a.strokeWidth || 2)
    };
    this.brush.drawText = function(a) {
        sa(e(a.x || 0, a.y || 0), a.text, a.color || !1, a.size || 10, a.font || u.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawTextS = function(a) {
        sa(e((a.x || 0) + f.x, (a.y || 0) + f.y), a.text, a.color || u.fillStyle, a.size || 10, a.font || u.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
    };
    this.brush.drawTextLines = function(a) {
        if (a.lines) {
            var b, c = a.size || 10;
            for (b = 0; b < a.lines.length; b += 1) sa(e(a.x || 0, (a.y || 0) + c * b), a.lines[b],
                a.color || u.fillStyle, c, a.font || u.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
        }
    };
    this.brush.drawTextLinesS = function(a) {
        if (a.lines) {
            var b, c = a.size || 10;
            for (b = 0; b < a.lines.length; b += 1) sa(e((a.x || 0) + f.x, (a.y || 0) + f.y + c * b), a.lines[b], a.color || u.fillStyle, c, a.font || u.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
        }
    };
    var jc = function(a, b, c) {
            aa(e(a.x - b, a.y), e(a.x + b, a.y), c, 2);
            aa(e(a.x, a.y - b), e(a.x, a.y + b), c, 2)
        },
        Ca = function(a, b, c, d, e) {
            h.fillStyle = c;
            h.strokeStyle = d;
            h.lineWidth =
                e;
            d = -f.x + (e ? e / 2 : 0);
            var k = -f.y + (e ? e / 2 : 0);
            c && h.fillRect(a.x + d, a.y + k, b.w, b.h);
            e && h.strokeRect(a.x + d, a.y + k, b.w, b.h)
        };
    this.brush.drawRect = function(a) {
        S(a);
        if (a.x + a.w < f.x || a.x > f.x + n || a.y + a.h < f.y || a.y > f.y + m) return !1;
        Ca(e(a.x, a.y), D(a.w, a.h), a.fillColor || !1, a.strokeColor || u.strokeStyle, a.strokeWidth || !1)
    };
    this.brush.drawRectS = function(a) {
        S(a);
        if (0 > a.x + a.w || a.x > n || 0 > a.y + a.h || a.y > m) return !1;
        Ca(e(a.x + f.x, a.y + f.y), D(a.w, a.h), a.fillColor || !1, a.strokeColor || u.strokeStyle, a.strokeWidth || !1)
    };
    var ob = function(a, b) {
        (h.fillStyle =
            b) && h.fillRect(-f.x + a.x - 1, -f.y + a.y - 1, 2, 2)
    };
    this.brush.drawPoint = function(a) {
        S(a);
        if (a.x < f.x || a.x > f.x + n || a.y < f.y || a.y > f.y + m) return !1;
        ob(e(a.x, a.y), a.fillColor || !1)
    };
    this.brush.drawPointS = function(a) {
        S(a);
        if (0 > a.x || a.x > n || 0 > a.y || a.y > m) return !1;
        ob(e(a.x + f.x, a.y + f.y), a.fillColor || !1)
    };
    var Gb = function(a, b, c, d, e, g) {
        h.fillStyle = d;
        h.strokeStyle = e;
        h.lineWidth = g;
        e = -f.x + a.x + (g ? g / 2 : 0);
        a = -f.y + a.y + (g ? g / 2 : 0);
        h.beginPath();
        h.moveTo(e + c, a);
        h.lineTo(e + b.w - c, a);
        h.quadraticCurveTo(e + b.w, a, e + b.w, a + c);
        h.lineTo(e + b.w, a +
            b.h - c);
        h.quadraticCurveTo(e + b.w, a + b.h, e + b.w - c, a + b.h);
        h.lineTo(e + c, a + b.h);
        h.quadraticCurveTo(e, a + b.h, e, a + b.h - c);
        h.lineTo(e, a + c);
        h.quadraticCurveTo(e, a, e + c, a);
        h.closePath();
        d && h.fill();
        g && h.stroke()
    };
    this.brush.drawRoundRect = function(a) {
        S(a);
        if (a.x + a.w < f.x || a.x > f.x + n || a.y + a.h < f.y || a.y > f.y + m) return !1;
        Gb(e(a.x, a.y), D(a.w, a.h), a.radius || 2, a.fillColor || !1, a.strokeColor || u.strokeStyle, a.strokeWidth || !1)
    };
    this.brush.drawRoundRectS = function(a) {
        S(a);
        if (0 > a.x + a.w || a.x > n || 0 > a.y + a.h || a.y > m) return !1;
        Gb(e(f.x + a.x,
            f.y + a.y), D(a.w, a.h), a.radius || 2, a.fillColor || !1, a.strokeColor || u.strokeStyle, a.strokeWidth || !1)
    };
    var Da = function(a, b, c, d, e) {
        h.fillStyle = c;
        h.strokeStyle = d;
        h.lineWidth = e;
        d = -f.x + b + (e ? e / 2 : 0);
        var k = -f.y + b + (e ? e / 2 : 0);
        h.beginPath();
        h.arc(a.x + d, a.y + k, b, 0, 2 * Math.PI, !0);
        h.closePath();
        c && h.fill();
        e && h.stroke()
    };
    this.brush.drawCircle = function(a) {
        S(a);
        var b = 2 * a.radius;
        if (a.x + b < f.x || a.x > f.x + n || a.y + b < f.y || a.y > f.y + m) return !1;
        Da(e(a.x, a.y), a.radius, a.fillColor || !1, a.strokeColor || u.strokeStyle, a.strokeWidth || !1)
    };
    this.brush.drawCircleS =
        function(a) {
            S(a);
            var b = 2 * a.radius;
            if (0 > a.x + b || a.x > n || 0 > a.y + b || a.y > m) return !1;
            Da(e(a.x + f.x, a.y + f.y), a.radius, a.fillColor || !1, a.strokeColor || u.strokeStyle, a.strokeWidth || !1)
        };
    var aa = function(a, b, c, d) {
        h.strokeStyle = c;
        h.lineWidth = d;
        c = -f.x;
        d = -f.y;
        h.beginPath();
        h.moveTo(c + a.x, d + a.y);
        h.lineTo(c + b.x, d + b.y);
        h.closePath();
        h.stroke()
    };
    this.brush.drawLineAngle = function(a) {
        var b = F(e(a.x + a.length, a.y), e(a.x, a.y), a.angle);
        aa(e(a.x, a.y), e(b.x, b.y), a.strokeColor || u.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineAngleS =
        function(a) {
            var b = F(e(f.x + a.x + a.length, f.y + a.y), e(f.x + a.x, f.y + a.y), a.angle);
            aa(e(f.x + a.x, f.y + a.y), e(b.x, b.y), a.strokeColor || u.strokeStyle, a.strokeWidth || 1)
        };
    this.brush.drawLine = function(a) {
        aa(e(a.x1, a.y1), e(a.x1 + a.x2, a.y1 + a.y2), a.strokeColor || u.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineS = function(a) {
        aa(e(f.x + a.x1, f.y + a.y1), e(f.x + a.x2, f.y + a.y2), a.strokeColor || u.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawLineA = function(a) {
        aa(e(a.x1, a.y1), e(a.x2, a.y2), a.strokeColor || u.strokeStyle, a.strokeWidth ||
            1)
    };
    this.brush.drawLineAS = function(a) {
        aa(e(a.x1 + f.x, a.y1 + f.y), e(a.x2 + f.x, a.y2 + f.y), a.strokeColor || u.strokeStyle, a.strokeWidth || 1)
    };
    this.brush.drawEllips = function(a) {
        S(a);
        if (a.x + a.w < f.x || a.x > f.x + n || a.y + a.h < f.y || a.y > f.y + m) return !1;
        var b = a.w / 2,
            c = a.h / 2,
            d = e(-f.x + a.x, -f.y + a.y);
        h.save();
        h.translate(d.x, d.y);
        h.scale(b / c, 1);
        h.translate(-d.x, -d.y);
        Da(e(a.x, a.y), c, a.fillColor, a.strokeColor, a.strokeWidth);
        h.restore()
    };
    this.brush.drawEllipsS = function(a) {
        S(a);
        if (0 > a.x + a.w || a.x > n || 0 > a.y + a.h || a.y > m) return !1;
        var b =
            a.w / 2,
            c = a.h / 2,
            d = e(a.x, a.y);
        h.save();
        h.translate(d.x, d.y);
        h.scale(b / c, 1);
        h.translate(-d.x, -d.y);
        Da(e(f.x + a.x, f.y + a.y), c, a.fillColor, a.strokeColor, a.strokeWidth);
        h.restore()
    };
    this.brush.drawImageS = function(a) {
        if (a.file)
            if (v(p[a.file])) {
                if (p[a.file].loaded) {
                    var b = a.x || 0,
                        c = a.y || 0;
                    if (a.w && !a.h) {
                        var d = a.w / p[a.file].w;
                        var e = a.w;
                        var f = p[a.file].h * d
                    } else !a.w && a.h ? (d = a.h / p[a.file].h, f = a.h, e = p[a.file].w * d) : a.w && a.h ? (e = a.w, f = a.h) : (e = p[a.file].w, f = p[a.file].h);
                    a.scale && (e *= a.scale, f *= a.scale);
                    if (0 > b + e || b > n || 0 >
                        c + f || c > m) return !1;
                    h.drawImage(p[a.file].img, 0, 0, p[a.file].w, p[a.file].h, b, c, e, f)
                }
            } else p[a.file] = {
                loaded: !1
            }, b = g.document.createElement("img"), b.onload = function() {
                p[a.file].loaded = !0;
                p[a.file].img = this;
                p[a.file].w = this.width;
                p[a.file].h = this.height;
                B.load()
            }, b.src = a.file, B.add()
    };
    this.brush.drawImage = function(a) {
        if (a.file)
            if (v(p[a.file])) {
                if (p[a.file].loaded) {
                    var b = a.x || 0,
                        c = a.y || 0;
                    if (a.w && !a.h) {
                        var d = a.w / p[a.file].w;
                        var e = a.w;
                        var l = p[a.file].h * d
                    } else !a.w && a.h ? (d = a.h / p[a.file].h, l = a.h, e = p[a.file].w *
                        d) : a.w && a.h ? (e = a.w, l = a.h) : (e = p[a.file].w, l = p[a.file].h);
                    a.scale && (e *= a.scale, l *= a.scale);
                    if (b + e < f.x || b > f.x + n || c + l < f.y || c > f.y + m) return !1;
                    h.drawImage(p[a.file].img, 0, 0, p[a.file].w, p[a.file].h, -f.x + b, -f.y + c, e, l)
                }
            } else p[a.file] = {}, p[a.file].loaded = !1, b = g.document.createElement("img"), b.onload = function() {
                p[a.file].loaded = !0;
                p[a.file].img = this;
                p[a.file].w = this.width;
                p[a.file].h = this.height;
                B.load()
            }, b.src = a.file, B.add()
    };
    this.brush.onContext = function(a) {
        a(h)
    };
    this.brush.getPixelColor = function(a, b) {
        var c =
            h.getImageData(a, b, 1, 1).data;
        return "rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")"
    };
    this.brush.setPixelColor = function(a, b, c) {
        var d = h.createImageData(1, 1);
        d.data[0] = c.r || d.data[0];
        d.data[1] = c.g || d.data[1];
        d.data[2] = c.b || d.data[2];
        d.data[3] = c.a || 255;
        h.putImageData(d, a, b)
    };
    this.brush.onPixel = function(a, b, c) {
        var d = h.getImageData(a, b, 1, 1),
            e = {
                r: d.data[0],
                g: d.data[1],
                b: d.data[2],
                a: d.data[3] ? d.data[3] : 255
            };
        c(e);
        d.data[0] = e.r;
        d.data[1] = e.g;
        d.data[2] = e.b;
        d.data[3] = e.a;
        h.putImageData(d, a, b)
    };
    this.brush.onPixels = function(a,
        b, c, d, e) {
        c = h.getImageData(a, b, c, d);
        var f;
        d = 0;
        for (f = c.data.length; d < f; d += 4) {
            var g = {
                r: c.data[d],
                g: c.data[d + 1],
                b: c.data[d + 2],
                a: c.data[d + 3] ? c.data[d + 3] : 255
            };
            e(g);
            c.data[d] = g.r;
            c.data[d + 1] = g.g;
            c.data[d + 2] = g.b;
            c.data[d + 3] = g.a
        }
        h.putImageData(c, a, b)
    };
    this.brush.onRawPixels = function(a, b, c, d, e) {
        c = h.getImageData(a, b, c, d);
        e(c.data, c.data.length);
        h.putImageData(c, a, b)
    };
    var T = g.AudioContext || g.webkitAudioContext || !1;
    (T = T ? new T : !1) && T.listener.setPosition(0, 0, 0);
    var U = function(a, b) {
        T || V('module "wAudio" is not supported! use a "audio"');
        this.vol = b && 1 >= b && 0 < b ? b : 1;
        this.loadPLay = this.nextPlay = this.loaded = this.playing = !1;
        this.pausedTime = this.duration = this.startTime = 0;
        var c = this,
            d = new XMLHttpRequest;
        d.open("GET", a, !0);
        d.responseType = "arraybuffer";
        d.onload = function(a) {
            T.decodeAudioData(this.response, function(a) {
                    c.wABuffer = a;
                    c.duration = c.wABuffer.duration;
                    c.wAGain = T.createGain();
                    c.wAGain.gain.value = c.vol;
                    c.wAPanner = T.createPanner();
                    c.wAPanner.setPosition(0, 0, 1);
                    c.wAPanner.panningModel = "equalpower";
                    B.load();
                    c.loaded = !0;
                    c.loadPlay && c.replay()
                },
                function(a) {
                    V("error in wAudio.newAudio : error decoding file", a)
                })
        };
        a ? d.send() : V("error in wAudio.newAudio : Where is file?");
        B.add()
    };
    U.prototype.play = function(a) {
        if (!this.loaded) this.loadPlay = !0;
        else if (!this.playing) {
            this.playing = !0;
            this.wASource = T.createBufferSource();
            this.wASource.buffer = this.wABuffer;
            this.wAListener = T.destination;
            this.wASource.connect(this.wAGain);
            this.wAGain.connect(this.wAPanner);
            this.wAPanner.connect(this.wAListener);
            this.wASource.start(0, this.pausedTime, this.duration);
            this.startTime = T.currentTime;
            var b = this;
            this.wASource.onended = function() {
                b.playing = !1;
                b.startTime = 0;
                b.pausedTime = 0;
                b.nextPlay && b.nextPlay.replay()
            }
        }
    };
    U.prototype.replay = function(a) {
        this.loaded ? (this.stop(), this.play()) : this.loadPlay = !0
    };
    U.prototype.stop = function() {
        this.pause();
        this.pausedTime = this.startTime = 0
    };
    U.prototype.pause = function() {
        if (this.playing) {
            this.pausedTime = this.getProgress();
            this.playing = !1;
            this.wASource.stop(0);
            var a = this;
            this.wASource.onended = function() {
                a.playing = !1
            }
        }
    };
    U.prototype.getProgress =
        function() {
            return this.playing ? T.currentTime - this.startTime + this.pausedTime : this.pausedTime
        };
    U.prototype.playPause = function() {
        this.playing ? this.pause() : this.play()
    };
    U.prototype.setNextPlay = function(a) {
        this.nextPlay = a
    };
    U.prototype.setVolume = function(a) {
        this.vol = a && 1 >= a && 0 < a ? a : this.vol;
        this.wAGain.gain.value = this.vol
    };
    U.prototype.getVolume = function() {
        return this.vol
    };
    U.prototype.setSide = function(a) {
        this.side = a;
        this.wAPanner && this.wAPanner.setPosition(this.side, 0, 1 - Math.abs(this.side))
    };
    U.prototype.getSide =
        function() {
            return this.side
        };
    this.wAudio.newAudio = function(a, b) {
        return new U(a, b)
    };
    var da = function(a, b) {
        var c, d = g.document.createElement("audio");
        if ("string" == typeof a) {
            var e = g.document.createElement("source");
            e.src = a;
            d.appendChild(e)
        } else {
            var f = 0;
            for (c = a.length; f < c; f += 1) e = g.document.createElement("source"), e.src = a[f], d.appendChild(e)
        }
        this.vol = b && 1 >= b && 0 < b ? b : 1;
        this.playing = 0;
        this.audio = d;
        this.nextPlay = this.loaded = !1;
        d.volume = this.vol;
        var h = this;
        d.onloadeddata = function() {
            h.loaded = !0;
            B.load()
        };
        d.onended =
            function() {
                h.playing = !1;
                h.nextPlay && h.nextPlay.play()
            };
        d.load();
        B.add()
    };
    da.prototype.play = function(a) {
        this.playing || (a && (this.vol = a && 1 >= a && 0 < a ? a : this.vol, this.audio.volume = this.vol), this.playing = !0, this.audio.play())
    };
    da.prototype.replay = function(a) {
        a && this.setVolume(a);
        this.playing = !0;
        this.audio.currentTime = 0;
        this.audio.play()
    };
    da.prototype.stop = function() {
        this.playing && (this.playing = !1, this.audio.pause(), this.audio.currentTime = 0)
    };
    da.prototype.pause = function() {
        this.playing && (this.playing = !1, this.audio.pause())
    };
    da.prototype.playPause = function() {
        this.playing ? this.pause() : this.play()
    };
    da.prototype.setNextPlay = function(a) {
        this.nextPlay = a
    };
    da.prototype.setVolume = function(a) {
        this.vol = a && 1 >= a && 0 < a ? a : this.vol;
        this.audio.volume = this.vol
    };
    da.prototype.getVolume = function() {
        return this.vol
    };
    this.audio.newAudio = function(a, b) {
        return new da(a, b)
    };
    var pb = [],
        va = [];
    this.zList.useZValue = function() {
        this.update = function() {
            va.length = 0;
            t(pb, function(a) {
                a.isInCamera() && va.push(a)
            });
            va.sort(function(a, b) {
                return a.z - b.z
            })
        }
    };
    this.zList.useYValue =
        function() {
            this.update = function() {
                va.length = 0;
                t(pb, function(a) {
                    a.isInCamera() && va.push(a)
                });
                va.sort(function(a, b) {
                    return a.y + a.h - (b.y + b.h)
                })
            }
        };
    this.zList.add = function(a) {
        pb.push(a)
    };
    this.zList.init = function(a) {
        t(a, function(a) {
            q.zList.add(a)
        })
    };
    this.zList.draw = function(a) {
        q.OOP.drawArr(va, a)
    };
    this.zList.del = function(a) {
        q.OOP.delObject(pb, a)
    };
    this.zList.useYValue();
    var B = {
        count: 0,
        loaded: 0,
        errored: 0,
        add: function() {
            this.count += 1
        },
        load: function() {
            this.loaded += 1
        },
        error: function() {
            this.errored += 1
        }
    };
    this.resources.isLoaded =
        function() {
            return B.count == B.loaded
        };
    this.resources.getProgress = function() {
        return Math.ceil(B.loaded / B.count * 100)
    };
    this.levels.forStringArray = function(a, b) {
        var c = a.offset || e(0, 0);
        t(a.source, function(d, e) {
            t(d, function(d, f) {
                " " != d && b(d, c.x + a.w * f, c.y + a.h * e, a.w, a.h)
            })
        })
    };
    var Fc = function(a) {
            "ImageObject" == a.type && "undefined" != typeof RESOURCES && a.resFile && (a.file = RESOURCES[a.resFile]);
            "AnimationObject" == a.type && "undefined" != typeof ANIMATIONS && a.animId && (a.anim = ANIMATIONS[a.animId]);
            var b = cc(a);
            b.name = "";
            E(a, function(a, d) {
                "id" != d && (b[d] = a)
            });
            return b
        },
        nc = function(a, b) {
            var c = {
                settings: {},
                objects: []
            };
            a = JSON.parse(a);
            c.settings = a.settings;
            t(a.objects, function(a) {
                var d = Fc(a);
                d.name = a.name;
                b && b(d);
                c.objects.push(d)
            });
            return c
        },
        oc = function(a, b, c) {
            var d = [],
                e = {};
            if (a && "json" === b) {
                b = nc(a, c);
                d = b.objects;
                e = b.settings;
                var f = a
            }
            this.backgroundColor = e.backgroundColor ? e.backgroundColor : !1;
            this.reload = function() {
                d = nc(f)
            };
            this.clear = function() {
                bc(d)
            };
            this.add = function(a) {
                d.push(a)
            };
            this.del = function(a) {
                t(d, function(b,
                    c) {
                    if (a === b) return d.splice(c, 1), "break"
                })
            };
            this.delById = function(a) {
                d.splice(a, 1)
            };
            this.getObjects = function() {
                return d
            };
            this.getObjectByName = function(a) {
                var b;
                var c = 0;
                for (b = d.length; c < b; c += 1)
                    if (d[c].name == a) return d[c];
                return !1
            };
            this.getObjectById = function(a) {
                var b;
                var c = 0;
                for (b = d.length; c < b; c += 1)
                    if (d[c].id == a) return d[c];
                return !1
            };
            this.draw = function(a) {
                this.backgroundColor && q.game.fill(this.backgroundColor);
                t(d, function(b) {
                    a && a(b);
                    b.isInCamera() && b.draw()
                })
            };
            this.getObjectsInCamera = function() {
                var a = [];
                t(d, function(b) {
                    b.isInCamera() && a.push(b)
                });
                return a
            };
            this.getLevelAsJSON = function(a, b) {
                var c = '{"settings":' + JSON.stringify({
                    backgroundColor: this.backgroundColor
                }) + ',"objects":[';
                if (!d.length) return c + "]}";
                t(d, function(d, e) {
                    a && a(d);
                    c += "{";
                    E(d, function(a, b) {
                        "function" != typeof a && (c += '"' + b + '":' + JSON.stringify(a) + ",")
                    });
                    c = c.substr(0, c.length - 1) + "},";
                    b && b(d)
                });
                c = c.substr(0, c.length - 1);
                return c + "]}"
            }
        };
    this.levels.newLevelFromJSON = function(a, b) {
        return new oc(a, "json", b || !1)
    };
    this.levels.newEmptyLevel =
        function(a) {
            return new oc(!1)
        };
    var pc = 0,
        qc = 0,
        Mb = 0,
        rc = !1;
    this.system.initFPSCheck = function() {
        rc || (rc = !0, l.addEvent("postLoop", "fpsCheckUpdate", function() {
            Mb += 1;
            1E3 <= N - qc && (pc = Mb, Mb = 0, qc = N)
        }))
    };
    this.system.getFPS = function() {
        return pc
    };
    var qb = this.filters;
    qb.setCSSFilter = function(a, b) {
        var c = (b ? b.canvas : r).style,
            d = "";
        E(a, function(a, b) {
            d += " " + b + "(" + a + ")"
        });
        c.OFilter = c.MozFilter = c.WebkitFilter = c.filter = d
    };
    qb.clearCSSFilter = function(a) {
        a = (a ? a.canvas : r).style;
        a.OFilter = a.MozFilter = a.WebkitFilter = a.filter =
            "none"
    };
    qb.setCSSTransform = function(a, b) {
        var c = (b ? b.canvas : r).style,
            d = "perspective(" + n + "px)";
        E(a, function(a, b) {
            d += " " + b + "(" + a + ")"
        });
        c.transform = c.MozTransform = c.WebkitTransform = d
    };
    qb.clearCSSTransform = function(a) {
        a = (a ? a.canvas : r).style;
        a.transform = a.MozTransform = a.WebkitTransform = "none"
    };
    this.OOP.newRever = function(a, b, c) {
        var d = function(a, b, c) {
            this.min = a;
            this.max = b;
            this.step = c;
            this.value = a;
            this.to = c
        };
        d.prototype = {
            update: function() {
                var a = this.value;
                this.value <= this.min ? this.to = this.step : this.value >=
                    this.max && (this.to = -this.step);
                this.value += this.to;
                return a
            },
            getValue: function() {
                return this.value
            },
            setValue: function(a) {
                this.value = parseFloat(a)
            },
            setStep: function(a) {
                this.step = a
            },
            getStep: function() {
                return this.step
            }
        };
        return new d(a, b, c)
    };
    var sc = {};
    this.OOP.once = function(a, b) {
        sc[a] || (sc[a] = !0, b())
    };
    this.OOP.newTimer = function(a, b) {
        if (0 >= a) return ja("error in system.newTimer : variable < 0, Timer is not created");
        var c = {
            time: 0 < a ? a : 1E3,
            func: b,
            startTime: !1,
            ending: !1,
            start: function() {
                this.ending || this.startTime ||
                    (this.startTime = N)
            },
            run: function() {
                !this.ending && this.startTime && N - this.startTime >= this.time && (this.func(), this.ending = !0)
            },
            end: function() {
                this.ending || (this.ending = !0, this.func())
            },
            restart: function(a) {
                this.startTime || this.start();
                if (this.ending) {
                    if (a && 0 >= a) return ja("error in Timer.restart : variable < 0");
                    a && (this.time = a);
                    this.ending = !1;
                    this.startTime = N
                }
            },
            stop: function() {
                this.ending || (this.ending = !0)
            }
        };
        l.addEvent("postLoop", "timer" + ca(-100, 100) * ca(-100, 100) + N, function() {
            c.run()
        });
        return c
    };
    this.memory.local = {
        storage: g.localStorage,
        clear: function() {
            this.storage.clear()
        },
        save: function(a, b) {
            this.storage.setItem(a, b)
        },
        saveAsObject: function(a, b) {
            var c = JSON.stringify(b);
            this.storage.setItem(a, c)
        },
        loadAsObject: function(a) {
            return JSON.parse(this.storage.getItem(a) || "false")
        },
        load: function(a) {
            return this.storage.getItem(a)
        },
        loadAsNumber: function(a) {
            return parseFloat(this.storage.getItem(a))
        }
    };
    this.memory.temp = {
        values: {},
        save: function(a, b) {
            this.values[a] = b
        },
        load: function(a) {
            return this.values[a]
        },
        loadAsNumber: function(a) {
            return parseFloat(this.values[a])
        }
    };
    g.onload = function() {
        if (h) {
            for (var a in u) h[a] = u[a];
            h.save()
        }
        l.runEvent("onload");
        l.loaded = !0;
        "function" === typeof POINTJS_USER_ONLOAD && POINTJS_USER_ONLOAD();
        return !1
    };
    g.onblur = function() {
        if (ka) return l.runEvent("gameBlur"), !1
    };
    g.onfocus = function() {
        if (!ka) return g.document.activeElement.blur(), g.focus(), l.runEvent("gameFocus"), !1
    };
    g.onresize = function() {
        l.runEvent("gameResize");
        h && (h.textBaseline = u.textBaseline, n /= la, m /= ma, H = n / 2, I = m / 2, h.scale(la, ma));
        return !1
    };
    g.onclick = function() {
        g.document.activeElement.blur();
        g.focus()
    };
    if ("undefined" !== typeof POINTJS_LOADED_DOM_IGNORE) g.onload()
};