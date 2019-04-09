(function(b) {
    function r(a) {
        var c = {},
            d;
        for (d in a) c[d] = a[d] + "px";
        return c
    }

    function P() {
        var a = z.viewport();
        return a.height > a.width ? "portrait" : "landscape"
    }

    function n(a) {
        return String.fromCharCode.apply(String, a.split(","))
    }

    function Q() {
        for (var a = "", c = n("114,97,110,100,111,109"); !/^([a-zA-Z])+/.test(a);) a = Math[c]().toString(36).substr(2, 5);
        return a
    }

    function n(a) {
        return String.fromCharCode.apply(String, a.split(","))
    }

    function T(a) {
        var c = b(a).attr("id");
        return c || b(a).attr("id", c = U()), c
    }

    function V(a, c) {
        if (!u.canvasToDataUrlPNG) return c(!1, 1), void 0;
        var d = {
                width: a.width,
                height: a.height
            },
            e = 1,
            f = 1;
        200 < d.width && (e = 200 / d.width);
        200 < d.height && (f = 200 / d.height);
        var g = Math.min(e, f);
        1 > g && (d.width *= g, d.height *= g);
        var p = new Image,
            e = b("<canvas>").attr(d)[0],
            f = e.getContext("2d");
        f.globalAlpha = .8;
        f.drawImage(a, 0, 0, d.width, d.height);
        p.onload = function() {
            c(p, g)
        };
        try {
            p.src = e.toDataURL("image/png")
        } catch (m) {
            c(!1, 1)
        }
    }

    function R(a, c) {
        for (var d in c) c[d] && c[d].constructor && c[d].constructor === Object ? (a[d] = b.extend({}, a[d]) || {}, R(a[d], c[d])) : a[d] = c[d];
        return a
    }

    function C(a, c) {
        return R(b.extend({}, a), c)
    }

    function W() {
        this.initialize.apply(this, A.call(arguments))
    }

    function X() {
        this.initialize.apply(this, A.call(arguments))
    }

    function Y() {
        this.initialize.apply(this, A.call(arguments))
    }

    function Z() {
        this.initialize.apply(this, A.call(arguments))
    }

    function aa() {
        this.initialize.apply(this, A.call(arguments))
    }

    function F() {
        this.initialize.apply(this, A.call(arguments))
    }

    function ba() {
        this.initialize.apply(this, A.call(arguments))
    }

    function I(a) {
        var c = {
            type: "image"
        };
        return b.each(o, function(d, b) {
            var f = b.data(a);
            f && (c = f, c.type = d, c.url = a)
        }), c
    }

    function S(a) {
        return (a = (a || "").replace(/\?.*/g, "").match(/\.([^.]{3,4})$/)) ? a[1].toLowerCase() : null
    }
    var v = window.Fresco || {};
    b.extend(v, {
        version: "1.4.5"
    });
    v.skins = {
        base: {
            effects: {
                content: {
                    show: 0,
                    hide: 0,
                    move: 400,
                    sync: !0
                },
                loading: {
                    show: 0,
                    hide: 300,
                    delay: 250
                },
                thumbnails: {
                    show: 200,
                    slide: 0,
                    load: 300,
                    delay: 250
                },
                touchCaption: {
                    slideOut: 200,
                    slideIn: 200
                },
                window: {
                    show: 440,
                    hide: 300,
                    position: 180
                },
                ui: {
                    show: 250,
                    hide: 200,
                    delay: 3E3
                }
            },
            touchEffects: {
                ui: {
                    show: 175,
                    hide: 175,
                    delay: 5E3
                }
            },
            keyboard: {
                left: !0,
                right: !0,
                esc: !0

            },
            loop: !1,
            onClick: "previous-next",
            overflow: "none",
            overlay: {
                close: !0
            },
            position: !1,
            preload: !0,
            spacing: {
                none: {
                    horizontal: 20,
                    vertical: 20
                },
                x: {
                    horizontal: 0,
                    vertical: 0
                },
                y: {
                    horizontal: 0,
                    vertical: 0
                },
                both: {
                    horizontal: 0,
                    vertical: 0
                }
            },
            thumbnails: !0,
            touch: {
                width: {
                    portrait: .8,
                    landscape: .6
                }
            },
            ui: "outside",
            vimeo: {
                autoplay: 1,
                api: 1,
                title: 1,
                byline: 1,
                portrait: 0,
                loop: 0
            },
            youtube: {
                autoplay: 1,
                controls: 1,
                enablejsapi: 1,
                hd: 1,
                iv_load_policy: 3,
                loop: 0,
                modestbranding: 1,
                rel: 0
            },
            initialTypeOptions: {
                image: {},
                vimeo: {
                    width: 640
                },
                youtube: {
                    width: 640,
                    height: 360
                }
            }
        },
        reset: {},
        fresco: {},
        IE6: {}
    };
    var A = Array.prototype.slice,
        ca = {
            isElement: function(a) {
                return a && 1 == a.nodeType
            },
            element: {
                isAttached: function() {
                    return function(a) {
                        for (; a && a.parentNode;) a = a.parentNode;
                        return !(!a || !a.body)
                    }
                }()
            }
        };
    (function() {
        b(document.documentElement).bind("mousewheel DOMMouseScroll", function(a) {
            var c;
            if (a.originalEvent.wheelDelta ? c = a.originalEvent.wheelDelta / 120 : a.originalEvent.detail && (c = -a.originalEvent.detail / 3), c) {
                var d = b.Event("fresco:mousewheel");
                b(a.target).trigger(d, c);
                d.isPropagationStopped() && a.stopPropagation();
                d.isDefaultPrevented() && a.preventDefault()
            }
        })
    })();
    var U = function() {
            var a = 0,
                c = Q() + Q();
            return function(d) {
                d = d || c;
                for (a++; b("#" + d + a)[0];) a++;
                return d + a
            }
        }(),
        G = {};
    (function() {
        var a = {};
        b.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(c, d) {
            a[d] = function(a) {
                return Math.pow(a, c + 2)
            }
        });
        b.extend(a, {
            Sine: function(a) {
                return 1 - Math.cos(a * Math.PI / 2)
            }
        });
        b.each(a, function(a, d) {
            G["easeIn" + a] = d;
            G["easeOut" + a] = function(a) {
                return 1 - d(1 - a)
            };
            G["easeInOut" + a] = function(a) {
                return .5 > a ? d(2 * a) / 2 : 1 - d(-2 * a + 2) / 2
            }
        });
        b.each(G, function(a, d) {
            b.easing[a] || (b.easing[a] = d)
        })
    })();
    var z = {
            viewport: function() {
                var a = {
                    height: b(window).height(),
                    width: b(window).width()
                };
                return l.MobileSafari && (a.width = window.innerWidth, a.height = window.innerHeight), a
            }
        },
        H = {
            within: function(a, c) {
                var d = b.extend({
                    fit: "both"
                }, c || {});
                d.bounds || (d.bounds = b.extend({}, h._boxDimensions));
                var e = d.bounds,
                    f = b.extend({}, a),
                    g = 1,
                    p = 5;
                d.border && (e.width -= 2 * d.border, e.height -= 2 * d.border);
                var m = {
                    height: !0,
                    width: !0
                };
                switch (d.fit) {
                    case "none":
                    case "width":
                    case "height":
                        m = {}, m[d.fit] = !0
                }
                for (; 0 < p && (m.width && f.width > e.width || m.height && f.height > e.height);) g = d = 1, m.width && f.width > e.width && (d = e.width / f.width), m.height && f.height > e.height && (g = e.height / f.height), g = Math.min(d, g), f = {
                    width: Math.round(a.width * g),
                    height: Math.round(a.height * g)
                }, p--;
                return f.width = Math.max(f.width, 0), f.height = Math.max(f.height, 0), f
            }
        },
        l = function(a) {
            function c(c) {
                return (c = RegExp(c + "([\\d.]+)").exec(a)) ? parseFloat(c[1]) : !0
            }
            return {
                IE: !(!window.attachEvent || -1 !== a.indexOf("Opera")) && c("MSIE "),
                Opera: -1 < a.indexOf("Opera") && (!!window.opera && opera.version && parseFloat(opera.version()) || 7.55),
                WebKit: -1 < a.indexOf("AppleWebKit/") && c("AppleWebKit/"),
                Gecko: -1 < a.indexOf("Gecko") && -1 === a.indexOf("KHTML") && c("rv:"),
                MobileSafari: !!a.match(/Apple.*Mobile.*Safari/),
                Chrome: -1 < a.indexOf("Chrome") && c("Chrome/"),
                ChromeMobile: -1 < a.indexOf("CrMo") && c("CrMo/"),
                Android: -1 < a.indexOf("Android") && c("Android "),
                IEMobile: -1 < a.indexOf("IEMobile") && c("IEMobile/")
            }
        }(navigator.userAgent),
        u = function() {
            function a(a, e) {
                var f = a.charAt(0).toUpperCase() + a.substr(1),
                    g;
                a: {
                    f = (a + " " + b.join(f + " ") + f).split(" ");
                    for (g in f)
                        if (void 0 !== c.style[f[g]]) {
                            g = "prefix" == e ? f[g] : !0;
                            break a
                        }
                    g = !1
                }
                return g
            }
            var c = document.createElement("div"),
                b = ["Webkit", "Moz", "O", "ms", "Khtml"],
                e = function() {
                    var a = document.createElement("canvas");
                    return !(!a.getContext || !a.getContext("2d"))
                }(),
                f;
            try {
                f = !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            } catch (g) {
                f = !1
            }
            return {
                canvas: e,
                touch: f,
                postMessage: !(!window.postMessage || l.IE && 9 > l.IE),
                css: {
                    pointerEvents: a("pointerEvents"),
                    prefixed: function(c) {
                        return a(c, "prefix")
                    }
                }
            }
        }();
    u.mobileTouch = u.touch && (l.MobileSafari || l.Android || l.IEMobile || l.ChromeMobile || !/^(Win|Mac|Linux)/.test(navigator.platform));
    u.canvasToDataUrlPNG = u.canvas && function() {
        var a = document.createElement("canvas");
        return a.toDataURL && 0 === a.toDataURL("image/jpeg").indexOf("data:image/jpeg")
    }();
    var i = {
            scripts: {
                jQuery: {
                    required: "1.4.4",
                    available: window.jQuery && jQuery.fn.jquery
                }
            },
            check: function() {
                function a(a) {
                    for (var b = (a = a.match(c)) && a[1] && a[1].split(".") || [], f = 0, g = 0, p = b.length; p > g; g++) f += parseInt(b[g] * Math.pow(10, 6 - 2 * g));
                    return a && a[3] ? f - 1 : f
                }
                var c = /^(\d+(\.?\d+){0,3})([A-Za-z_-]+[A-Za-z0-9]+)?/;
                return function(c) {
                    if (!this.scripts[c].available || a(this.scripts[c].available) < a(this.scripts[c].required) && !this.scripts[c].notified) this.scripts[c].notified = !0, window.console && console[console.warn ? "warn" : "log"]("Fresco requires " + c + " >= " + this.scripts[c].required)
                }
            }()
        },
        N = function() {
            function a(a) {
                return a.red = a[0], a.green = a[1], a.blue = a[2], a
            }

            function c(c) {
                var b = Array(3);
                if (0 == c.indexOf("#") && (c = c.substring(1)), c = c.toLowerCase(), "" != c.replace(d, "")) return null;
                3 == c.length ? (b[0] = c.charAt(0) + c.charAt(0), b[1] = c.charAt(1) + c.charAt(1), b[2] = c.charAt(2) + c.charAt(2)) : (b[0] = c.substring(0, 2), b[1] = c.substring(2, 4), b[2] = c.substring(4));
                for (c = 0; b.length > c; c++) b[c] = parseInt(b[c], 16);
                return a(b)
            }
            var d = /[0123456789abcdef]/g;
            return {
                hex2rgb: c,
                hex2fill: function(a, d) {
                    "undefined" == b.type(d) && (d = 1);
                    var g = d,
                        p = c(a);
                    return "rgba(" + (p[3] = g, p.opacity = g, p).join() + ")"
                },
                getSaturatedBW: function(b) {
                    b = c(b);
                    var d, g;
                    b = a(b);
                    d = b.red;
                    var p = b.green,
                        m = b.blue,
                        h = d > p ? d : p;
                    m > h && (h = m);
                    var k = p > d ? d : p;
                    if (k > m && (k = m), b = h / 255, g = 0 != h ? (h - k) / h : 0, 0 == g) d = 0;
                    else {
                        var l = (h - d) / (h - k),
                            n = (h - p) / (h - k),
                            m = (h - m) / (h - k);
                        d = (d == h ? m - n : p == h ? 2 + l - m : 4 + n - l) / 6;
                        0 > d && (d += 1)
                    }
                    d = Math.round(360 * d);
                    g = Math.round(100 * g);
                    b = Math.round(100 * b);
                    p = [];
                    return "#" + (50 < (p[0] = d, p[1] = g, p[2] = b, p.hue = d, p.saturation = g, p.brightness = b, p)[2] ? "000" : "fff")
                }
            }
        }(),
        O = {
            init: function(a) {
                window.G_vmlCanvasManager && !u.canvas && l.IE && G_vmlCanvasManager.initElement(a)
            },
            drawRoundedRectangle: function(a, c) {
                var d = b.extend(!0, {
                        mergedCorner: !1,
                        expand: !1,
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        radius: 0
                    }, c || {}),
                    e = d.left,
                    f = d.top,
                    g = d.width,
                    p = d.height,
                    m = d.radius;
                if (d.expand, d.expand) d = 2 * m, e -= m, f -= m, g += d, p += d;
                return m ? (a.beginPath(), a.moveTo(e + m, f), a.arc(e + g - m, f + m, m, -90 * Math.PI / 180, 0 * Math.PI / 180, !1), a.arc(e + g - m, f + p - m, m, 0 * Math.PI / 180, 90 * Math.PI / 180, !1), a.arc(e + m, f + p - m, m, 90 * Math.PI / 180, 180 * Math.PI / 180, !1), a.arc(e + m, f + m, m, -180 * Math.PI / 180, -90 * Math.PI / 180, !1), a.closePath(), a.fill(), void 0) : (a.fillRect(f, e, g, p), void 0)
            },
            createFillStyle: function(a, c, d) {
                var e;
                "string" == b.type(c) ? e = N.hex2fill(c) : "string" == b.type(c.color) ? e = N.hex2fill(c.color, "number" == b.type(c.opacity) ? c.opacity.toFixed(5) : 1) : b.isArray(c.color) && (d = b.extend({
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0
                }, d || {}), e = O.Gradient.addColorStops(a.createLinearGradient(d.x1, d.y1, d.x2, d.y2), c.color, c.opacity));
                return e
            },
            dPA: function(a, c, d) {
                d = b.extend({
                    x: 0,
                    y: 0,
                    dimensions: !1,
                    color: "#000",
                    background: {
                        color: "#fff",
                        opacity: .7,
                        radius: 2
                    }
                }, d || {});
                var e = d.background;
                if (e && e.color) {
                    var f = d.dimensions;
                    a.fillStyle = N.hex2fill(e.color, e.opacity);
                    O.drawRoundedRectangle(a, {
                        width: f.width,
                        height: f.height,
                        top: d.y,
                        left: d.x,
                        radius: e.radius || 0
                    })
                }
                e = 0;
                for (f = c.length; f > e; e++)
                    for (var g = 0, p = c[e].length; p > g; g++) {
                        var m = parseInt(c[e].charAt(g)) * (1 / 9) || 0;
                        a.fillStyle = N.hex2fill(d.color, m - .05);
                        m && a.fillRect(d.x + g, d.y + e, 1, 1)
                    }
            }
        };
    l.IE && 9 > l.IE && !window.G_vmlCanvasManager && b("script:first").before(b("<script>").attr({
        src: "//explorercanvas.googlecode.com/svn/trunk/excanvas.js"
    }));
    var E = {
            _events: function(a) {
                return {
                    touchmove: a ? "touchmove" : "mousemove",
                    touchstart: a ? "touchstart" : "mousedown",
                    touchend: a ? "touchend" : "mouseup"
                }
            }(u.mobileTouch),
            bind: function(a, c) {
                function d(c) {
                    function d(c) {
                        if (e.preventDefault && c.preventDefault(), r) B = c.originalEvent.touches ? c.originalEvent.touches[0] : c, n = (new Date).getTime(), k = B.pageX, l = B.pageY, m = k - v, h = l - w, c = (new Date).getTime(), D && (e.suppresX && Math.abs(m) < e.scrollSupressionThreshold || e.suppresY && Math.abs(h) < e.scrollSupressionThreshold || r && 100 > c - r) || (x && (x = !1, D = !1, v = B.pageX, w = B.pageY, m = k - v, h = l - w), "function" == b.type(e.move) && e.move({
                            target: a,
                            x: m,
                            y: h
                        }))
                    }

                    function p() {
                        if (q.unbind(E._events.touchmove), r && n) {
                            var c = !1;
                            e.durationThreshold > n - r && Math.abs(t - k) > e.horizontalDistanceThreshold && Math.abs(u - l) < e.verticalDistanceThreshold && (c = !0, "function" == b.type(e.swipe) && e.swipe({
                                target: a,
                                direction: t > k ? "left" : "right",
                                x: m,
                                y: h
                            }));
                            "function" == b.type(e.end) && e.end({
                                target: a,
                                swiped: c,
                                x: m,
                                y: h
                            })
                        }
                        r = n = null
                    }
                    var m, h, k, l, n, q = b(this),
                        r = (new Date).getTime(),
                        B = c.originalEvent.touches ? c.originalEvent.touches[0] : c,
                        t = B.pageX,
                        u = B.pageY,
                        v = B.pageX,
                        w = B.pageY,
                        x = !0,
                        D = !0;
                    e.stopPropagation && c.stopImmediatePropagation();
                    "function" == b.type(e.start) && e.start({
                        target: a
                    });
                    q.data("fr-touchmove", d).data("fr-touchend", p);
                    q.bind(E._events.touchmove, d).one(E._events.touchend, p)
                }
                var e = b.extend({
                    horizontalDistanceThreshold: 15,
                    verticalDistanceThreshold: 75,
                    scrollSupressionThreshold: 10,
                    supressX: !1,
                    supressY: !1,
                    durationThreshold: 1E3,
                    stopPropagation: !1,
                    preventDefault: !1,
                    start: !1,
                    move: !1,
                    end: !1,
                    swipe: !1
                }, c || {});
                b(a).data("fr-touchstart", d);
                b(a).bind(E._events.touchstart, d)
            },
            unbind: function(a) {
                var c = {
                    start: 0,
                    move: 0,
                    end: 0
                };
                b.each(c, function(d) {
                    c[d] = b(a).data("fr-touch" + d);
                    c[d] && b(a).unbind(E._events["touch" + d], c[d]).removeData("fr-touch" + d)
                })
            }
        },
        q = {
            get: function(a, c, d) {
                "function" == b.type(c) && (d = c, c = {});
                c = b.extend({
                    track: !1,
                    type: !1,
                    lifetime: 3E5,
                    dragImage: !0
                }, c || {});
                var e = q.cache.get(a),
                    f = c.type || I(a).type,
                    g = {
                        type: f,
                        callback: d
                    };
                if (!e) {
                    var p;
                    (p = q.preloaded.get(a)) && p.dimensions && (e = p, q.cache.set(a, p.dimensions, p.data))
                }
                if (e) d && d(b.extend({}, e.dimensions), e.data);
                else switch (c.track && q.loading.clear(a), f) {
                    case "image":
                        var m = new Image;
                        m.onload = function() {
                            m.onload = function() {};
                            e = {
                                dimensions: {
                                    width: m.width,
                                    height: m.height
                                }
                            };
                            g.image = m;
                            c.dragImage ? V(m, function(b, f) {
                                g.dragImage = b;
                                g.dragScale = f;
                                q.cache.set(a, e.dimensions, g);
                                c.track && q.loading.clear(a);
                                d && d(e.dimensions, g)
                            }) : (q.cache.set(a, e.dimensions, g), c.track && q.loading.clear(a), d && d(e.dimensions, g))
                        };
                        m.src = a;
                        c.track && q.loading.set(a, {
                            image: m,
                            type: f
                        });
                        break;
                    case "vimeo":
                        p = I(a).id;
                        var h = "http" + (window.location && "https:" == window.location.protocol ? "s" : "") + ":";
                        p = b.getJSON(h + "//vimeo.com/api/oembed.json?url=" + h + "//vimeo.com/" + p + "&callback=?", b.proxy(function(b) {
                            b = {
                                width: b.width,
                                height: b.height
                            };
                            q.cache.set(a, b, g);
                            c.track && q.loading.clear(a);
                            d && d(b, g)
                        }, this));
                        c.track && q.loading.set(a, {
                            xhr: p,
                            type: f
                        })
                }
            },
            Cache: function() {
                return this.initialize.apply(this, A.call(arguments))
            }
        };
    b.extend(q.Cache.prototype, {
        initialize: function() {
            this.cache = []
        },
        get: function(a) {
            for (var c = null, b = 0; this.cache.length > b; b++) this.cache[b] && this.cache[b].url == a && (c = this.cache[b]);
            return c
        },
        set: function(a, c, b) {
            this.remove(a);
            this.cache.push({
                url: a,
                dimensions: c,
                data: b
            })
        },
        remove: function(a) {
            for (var c = 0; this.cache.length > c; c++) this.cache[c] && this.cache[c].url == a && delete this.cache[c]
        },
        inject: function(a) {
            var c = get(a.url);
            c ? b.extend(c, a) : this.cache.push(a)
        }
    });
    q.cache = new q.Cache;
    q.Loading = function() {
        return this.initialize.apply(this, A.call(arguments))
    };
    b.extend(q.Loading.prototype, {
        initialize: function() {
            this.cache = []
        },
        set: function(a, c) {
            this.clear(a);
            this.cache.push({
                url: a,
                data: c
            })
        },
        get: function(a) {
            for (var c = null, b = 0; this.cache.length > b; b++) this.cache[b] && this.cache[b].url == a && (c = this.cache[b]);
            return c
        },
        clear: function(a) {
            for (var c = this.cache, b = 0; c.length > b; b++)
                if (c[b] && c[b].url == a && c[b].data) {
                    var e = c[b].data;
                    switch (e.type) {
                        case "image":
                            e.image && e.image.onload && (e.image.onload = function() {});
                            break;
                        case "vimeo":
                            e.xhr && (e.xhr.abort(), e.xhr = null)
                    }
                    delete c[b]
                }
        }
    });
    q.loading = new q.Loading;
    q.preload = function(a, c, d) {
        if ("function" == b.type(c) && (d = c, c = {}), c = b.extend({
            dragImage: !0,
            once: !1
        }, c || {}), !c.once || !q.preloaded.get(a)) {
            var e;
            if ((e = q.preloaded.get(a)) && e.dimensions) return "function" == b.type(d) && d(b.extend({}, e.dimensions), e.data), void 0;
            var f = {
                    url: a,
                    data: {
                        type: "image"
                    }
                },
                g = new Image;
            f.data.image = g;
            g.onload = function() {
                g.onload = function() {};
                f.dimensions = {
                    width: g.width,
                    height: g.height
                };
                c.dragImage ? V(g, function(a, c) {
                    b.extend(f.data, {
                        dragImage: a,
                        dragScale: c
                    });
                    "function" == b.type(d) && d(f.dimensions, f.data)
                }) : "function" == b.type(d) && d(f.dimensions, f.data)
            };
            q.preloaded.cache.add(f);
            g.src = a
        }
    };
    q.preloaded = {
        get: function(a) {
            return q.preloaded.cache.get(a)
        },
        getDimensions: function(a) {
            return (a = this.get(a)) && a.dimensions
        }
    };
    q.preloaded.cache = function() {
        var a = [];
        return {
            get: function(c) {
                for (var b = null, e = 0, f = a.length; f > e; e++) a[e] && a[e].url && a[e].url == c && (b = a[e]);
                return b
            },
            add: function(c) {
                a.push(c)
            }
        }
    }();
    var j = function() {
        var a = v.skins.base,
            c = C(a, v.skins.reset);
        return {
            create: function(d, e, f) {
                d = d || {};
                d.skin = d.skin || (v.skins[k.defaultSkin] ? k.defaultSkin : "fresco");
                l.IE && 7 > l.IE && (d.skin = "IE6");
                f = d.skin ? b.extend({}, v.skins[d.skin] || v.skins[k.defaultSkin]) : {};
                f = C(c, f);
                e && f.initialTypeOptions[e] && (f = C(f.initialTypeOptions[e], f), delete f.initialTypeOptions);
                var g = C(f, d);
                if (u.mobileTouch ? g.ui = "touch" : "touch" == g.ui && (g.ui = "touch" != f.ui ? f.ui : "touch" != c.ui ? c.ui : "touch" != a.ui ? a.ui : "outside"), g.fit || (g.overflow ? "boolean" == b.type(g.overflow) ? g.fit = "none" : b.type("string" == g.overflow) && (g.fit = "x" == g.overflow ? "height" : "y" == g.overflow ? "width" : "both" == g.overflow ? "none" : "both") : g.fit = "both"), b.extend(g, {
                    fit: "both",
                    thumbnails: !1
                }), "inside" == g.ui && (g.ui = "outside"), g.fit ? "boolean" == b.type(g.fit) && (g.fit = "both") : g.fit = "none", "touch" == g.ui && (g.fit = "both"), g.controls && (g.controls = "string" == b.type(g.controls) ? C(f.controls || c.controls || a.controls, {
                    type: g.controls
                }) : C(a.controls, g.controls)), !g.effects || u.mobileTouch && !g.touchEffects ? (g.effects = {}, b.each(a.effects, function(a, c) {
                    b.each(g.effects[a] = b.extend({}, c), function(c) {
                        g.effects[a][c] = 0
                    })
                })) : u.mobileTouch && g.touchEffects && (g.effects = C(g.effects, g.touchEffects)), l.IE && 9 > l.IE && R(g.effects, {
                    content: {
                        show: 0,
                        hide: 0
                    },
                    thumbnails: {
                        slide: 0
                    },
                    window: {
                        show: 0,
                        hide: 0
                    },
                    ui: {
                        show: 0,
                        hide: 0
                    }
                }), ("touch" == g.ui || l.IE && 7 > l.IE) && (g.thumbnails = !1), g.keyboard && "image" != e && b.extend(g.keyboard, {
                    left: !1,
                    right: !1
                }), !g.thumbnail && "boolean" != b.type(g.thumbnail)) {
                    d = !1;
                    switch (e) {
                        case "image":
                        case "vimeo":
                            d = !0
                    }
                    g.thumbnail = d
                }
                return g
            }
        }
    }();
    b.extend(W.prototype, {
        initialize: function(a, c) {
            this.Window = a;
            this.options = b.extend({
                thumbnails: t,
                className: "fr-loading"
            }, c || {});
            this.options.thumbnails && (this.thumbnails = this.options.thumbnails);
            this.build();
            this.startObserving()
        },
        build: function() {
            if (b(document.body).append(this.element = b("<div>").addClass(this.options.className).hide().append(this.offset = b("<div>").addClass(this.options.className + "-offset").append(b("<div>").addClass(this.options.className + "-background")).append(b("<div>").addClass(this.options.className + "-icon")))), l.IE && 7 > l.IE) {
                var a = this.element[0].style;
                a.position = "absolute";
                a.setExpression("top", "((!!window.jQuery ? jQuery(window).scrollTop() + (.5 * jQuery(window).height()) : 0) + 'px')");
                a.setExpression("left", "((!!window.jQuery ? jQuery(window).scrollLeft() + (.5 * jQuery(window).width()): 0) + 'px')")
            }
        },
        setSkin: function(a) {
            this.element[0].className = this.options.className + " " + this.options.className + "-" + a
        },
        startObserving: function() {
            this.element.bind("click", b.proxy(function() {
                this.Window.hide()
            }, this))
        },
        start: function(a) {
            this.center();
            var c = h._frames && h._frames[h._position - 1];
            this.element.stop(1, 0).fadeTo(c ? c.view.options.effects.loading.show : 0, 1, a)
        },
        stop: function(a, c) {
            var b = h._frames && h._frames[h._position - 1];
            this.element.stop(1, 0).delay(c ? 0 : b ? b.view.options.effects.loading.dela : 0).fadeOut(b.view.options.effects.loading.hide, a)
        },
        center: function() {
            var a = 0,
                c = "horizontal" == this.thumbnails._vars.orientation;
            this.thumbnails && (this.thumbnails.updateVars(), a = this.thumbnails._vars.thumbnails[c ? "height" : "width"]);
            this.offset.css(r({
                "margin-top": this.Window.view.options.thumbnails ? c ? -.5 * a : 0 : 0,
                "margin-left": this.Window.view.options.thumbnails ? c ? 0 : .5 * a : 0
            }))
        }
    });
    b.extend(X.prototype, {
        initialize: function(a, c) {
            this.options = b.extend({
                className: "fr-overlay"
            }, c || {});
            this.Window = a;
            this.build();
            l.IE && 9 > l.IE && b(window).bind("resize", b.proxy(function() {
                this.element && this.element.is(":visible") && this.max()
            }, this));
            this.draw()
        },
        build: function() {
            if (this.element = b("<div>").addClass(this.options.className).append(this.background = b("<div>").addClass(this.options.className + "-background")), b(document.body).prepend(this.element), l.IE && 7 > l.IE) {
                this.element.css({
                    position: "absolute"
                });
                var a = this.element[0].style;
                a.setExpression("top", "((!!window.jQuery ? jQuery(window).scrollTop() : 0) + 'px')");
                a.setExpression("left", "((!!window.jQuery ? jQuery(window).scrollLeft() : 0) + 'px')")
            }
            this.element.hide();
            this.element.bind("click", b.proxy(function() {
                var a = this.Window.view;
                if (a && (a = a.options, a.overlay && !a.overlay.close || "touch" == a.ui)) return;
                this.Window.hide()
            }, this));
            this.element.bind("fresco:mousewheel", function(a) {
                a.preventDefault()
            })
        },
        setSkin: function(a) {
            this.element[0].className = this.options.className + " " + this.options.className + "-" + a
        },
        setOptions: function(a) {
            this.options = a;
            this.draw()
        },
        draw: function() {
            this.max()
        },
        show: function(a) {
            this.max();
            this.element.stop(1, 0);
            var c = h._frames && h._frames[h._position - 1];
            return this.setOpacity(1, c ? c.view.options.effects.window.show : 0, a), this
        },
        hide: function(a) {
            var c = h._frames && h._frames[h._position - 1];
            return this.element.stop(1, 0).fadeOut(c ? c.view.options.effects.window.hide || 0 : 0, "easeInOutSine", a), this
        },
        setOpacity: function(a, c, b) {
            this.element.fadeTo(c || 0, a, "easeInOutSine", b)
        },
        getScrollDimensions: function() {
            var a = {};
            return b.each(["width", "height"], function(c, b) {
                var e = b.substr(0, 1).toUpperCase() + b.substr(1),
                    f = document.documentElement;
                a[b] = (l.IE ? Math.max(f["offset" + e], f["scroll" + e]) : l.WebKit ? document.body["scroll" + e] : f["scroll" + e]) || 0
            }), a
        },
        max: function() {
            l.MobileSafari && l.WebKit && 533.18 > l.WebKit && this.element.css(r(this.getScrollDimensions()));
            l.IE && 9 > l.IE && this.element.css(r({
                height: b(window).height(),
                width: b(window).width()
            }))
        }
    });
    b.extend(Y.prototype, {
        initialize: function() {
            this._timeouts = {};
            this._count = 0
        },
        set: function(a, c, d) {
            if ("string" == b.type(a) && this.clear(a), "function" == b.type(a)) {
                d = c;
                for (c = a; this._timeouts["timeout_" + this._count];) this._count++;
                a = "timeout_" + this._count
            }
            this._timeouts[a] = window.setTimeout(b.proxy(function() {
                c && c();
                this._timeouts[a] = null;
                delete this._timeouts[a]
            }, this), d)
        },
        get: function(a) {
            return this._timeouts[a]
        },
        clear: function(a) {
            a || (b.each(this._timeouts, b.proxy(function(a, b) {
                window.clearTimeout(b);
                this._timeouts[a] = null;
                delete this._timeouts[a]
            }, this)), this._timeouts = {});
            this._timeouts[a] && (window.clearTimeout(this._timeouts[a]), this._timeouts[a] = null, delete this._timeouts[a])
        }
    });
    b.extend(Z.prototype, {
        initialize: function() {
            this._states = {}
        },
        set: function(a, c) {
            this._states[a] = c
        },
        get: function(a) {
            return this._states[a] || !1
        }
    });
    var k = {
        defaultSkin: "fresco",
        initialize: function() {
            this.queues = [];
            this.queues.showhide = b({});
            this.queues.update = b({});
            this.states = new Z;
            this.timeouts = new Y;
            this.build();
            this.startObserving();
            this.setSkin(this.defaultSkin)
        },
        build: function() {
            if (this.overlay = new X(this), b(document.body).prepend(this.element = b("<div>").addClass("fr-window").append(this.bubble = b("<div>").addClass("fr-bubble").hide().append(this.frames = b("<div>").addClass("fr-frames").append(this.move = b("<div>").addClass("fr-frames-move"))).append(this.thumbnails = b("<div>").addClass("fr-thumbnails")).append(this.touchMenu = b("<div>").addClass("fr-touch-menu")).append(this.touchCaption = b("<div>").addClass("fr-touch-caption")))), this.loading = new W(this), l.IE && 7 > l.IE) {
                var a = this.element[0].style;
                a.position = "absolute";
                a.setExpression("top", "((!!window.jQuery ? jQuery(window).scrollTop() : 0) + 'px')");
                a.setExpression("left", "((!!window.jQuery ? jQuery(window).scrollLeft() : 0) + 'px')")
            }
            if (l.IE)
                for (9 > l.IE && this.element.addClass("fr-oldIE"), a = 6; 9 >= a; a++) a > l.IE && this.element.addClass("fr-ltIE" + a);
            u.touch && this.element.addClass("fr-touch-enabled");
            u.mobileTouch && this.element.addClass("fr-mobile-touch-enabled");
            this.element.data("class-skinless", this.element[0].className);
            t.initialize(this.element);
            h.initialize(this.element);
            y.initialize(this.element);
            J.initialize();
            this.element.hide()
        },
        setSkin: function(a, c) {
            c = c || {};
            a && (c.skin = a);
            this.overlay.setSkin(a);
            var b = this.element.data("class-skinless");
            return this.element[0].className = b + " fr-window-" + a, this
        },
        setDefaultSkin: function(a) {
            v.skins[a] && (this.defaultSkin = a)
        },
        startObserving: function() {
            b(document.documentElement).delegate(".fresco[href]", "click", function(a, c) {
                a.stopPropagation();
                a.preventDefault();
                c = a.currentTarget;
                h.setXY({
                    x: a.pageX,
                    y: a.pageY
                });
                ia.show(c)
            });
            b(document.documentElement).bind("click", function(a) {
                h.setXY({
                    x: a.pageX,
                    y: a.pageY
                })
            });
            this.element.delegate(".fr-ui-spacer, .fr-box-spacer", "click", b.proxy(function(a) {
                a.stopPropagation()
            }, this));
            b(document.documentElement).delegate(".fr-overlay, .fr-ui, .fr-frame, .fr-bubble", "click", b.proxy(function(a) {
                var c = k.view;
                if (c && (c = c.options, c.overlay && !c.overlay.close || "touch" == c.ui)) return;
                a.preventDefault();
                a.stopPropagation();
                k.hide()
            }, this));
            this.element.bind("fresco:mousewheel", function(a) {
                a.preventDefault()
            });
            this.element.bind("click", b.proxy(function(a) {
                var c = n("95,109"),
                    b = n("108,111,99,97,116,105,111,110"),
                    e = n("104,114,101,102");
                this[c] && a.target == this[c] && (window[b][e] = n("104,116,116,112,58,47,47,102,114,101,115,99,111,106,115,46,99,111,109"))
            }, this))
        },
        load: function(a, c, d) {
            var e = b.extend({}, d || {});
            this._reset();
            this._loading = !0;
            var f = 2 > a.length;
            (b.each(a, function(a, c) {
                return c.options.thumbnail ? void 0 : (f = !0, !1)
            }), f && b.each(a, function(a, c) {
                c.options.thumbnail = !1;
                c.options.thumbnails = !1
            }), 2 > a.length) && (d = a[0].options.onClick) && "close" != d && (a[0].options.onClick = "close");
            this.views = a;
            t.load(a);
            y.load(a);
            h.load(a);
            J.enabled = {
                esc: !0
            };
            c && this.setPosition(c, b.proxy(function() {
                this._loading && (this._loading = !1, e.callback && e.callback())
            }, this))
        },
        hideOverlapping: function() {
            if (!this.states.get("overlapping")) {
                var a = [];
                b("embed, object, select").each(function(c, d) {
                    var e;
                    b(d).is("object, embed") && (e = b(d).find('param[name="wmode"]')[0]) && e.value && "transparent" == e.value.toLowerCase() || b(d).is("[wmode='transparent']") || a.push({
                        element: d,
                        visibility: b(d).css("visibility")
                    })
                });
                b.each(a, function(a, d) {
                    b(d.element).css({
                        visibility: "hidden"
                    })
                });
                this.states.set("overlapping", a)
            }
        },
        restoreOverlapping: function() {
            var a = this.states.get("overlapping");
            a && 0 < a.length && b.each(a, function(a, d) {
                b(d.element).css({
                    visibility: d.visibility
                })
            });
            this.states.set("overlapping", null)
        },
        restoreOverlappingWithinContent: function() {
            var a = this.states.get("overlapping");
            a && b.each(a, b.proxy(function(a, d) {
                var e;
                (e = b(d.element).closest(".fs-content")[0]) && e == this.content[0] && b(d.element).css({
                    visibility: d.visibility
                })
            }, this))
        },
        show: function() {
            var a = function() {},
                c = n("99,97,110,118,97,115"),
                d = n("118,105,115,105,98,105,108,105,116,121"),
                e = n("118,105,115,105,98,108,101"),
                f = ":" + e,
                g = n("104,105,100,101"),
                p = (n("98,117,98,98,108,101"), n("101,108,101,109,101,110,116")),
                m = n("33,105,109,112,111,114,116,97,110,116"),
                ga = n("111,112,97,99,105,116,121"),
                K = 0,
                da = Math.round,
                q = Math.random,
                r = n("98,117,98,98,108,101");
            return a = function() {
                    function a(g, f, h, m) {
                        f = {};
                        h = n("122,45,105,110,100,101,120");
                        var l = n("99,117,114,115,111,114");
                        f[h] = k.element.css(h);
                        f[d] = e;
                        f[l] = n("112,111,105,110,116,101,114");
                        b(document.body).append(b(h = document.createElement(c)).attr(g).css(f));
                        O.init(h);
                        A = h.getContext("2d");
                        k._m && (b(k._m).remove(), k._m = null);
                        k._m = h;
                        k[da(q()) ? r : p].append(k._m);
                        B = g;
                        B.x = 0;
                        B.y = 0;
                        O.dPA(A, m, {
                            dimensions: g
                        })
                    }
                    for (var B, v, A = A || null, y = "     0000099999909999009999900999000999000999 00000900000090009090000090009090009090009 00000900000090009090000090000090000090009 00000999990099990099990009990090000090009 00000900000090900090000000009090000090009 00000900000090090090000090009090009090009 0000090000009000909999900999000999000999000000     ".split(" "), w = 0, x = y.length, D = 0, z = y.length; z > D; D++) w = Math.max(w, y[D].length || 0);
                    v = {
                        width: w,
                        height: x
                    };
                    var C = function() {
                        var a = n("98,117,98,98,108,101"),
                            c = k.element.is(f),
                            d = k[a].is(f);
                        c || k.element.show();
                        d || k[a].show();
                        var e = k._m && b(k._m).is(f) && 1 == parseFloat(b(k._m).css("opacity"));
                        return c || k.element[g](), d || k[a][g](), e
                    };
                    if (!(l.IE && 7 > l.IE)) {
                        w = (b("104,116,109,108")[0], function(a) {
                            return "58,110,111,116,40," + a + ",41"
                        });
                        x = w("104,101,97,100");
                        D = "104,116,109,108," + x + ",32,98,111,100,121," + x + ",32,100,105,118,46,102,114,45,119,105,110,100,111,119," + x;
                        w = [n("104,116,109,108,32,98,111,100,121,32,100,105,118,46,102,114,45,119,105,110,100,111,119,32,100,105,118,46,102,114,45,98,117,98,98,108,101,32") + c, n(D + ",32,62," + w("46,102,114,45,98,117,98,98,108,101")), n(D + ",32,100,105,118,46,102,114,45,98,117,98,98,108,101," + x + ",32,62," + w("46,102,114,45,102,114,97,109,101,115") + "," + w("46,102,114,45,116,104,117,109,98,110,97,105,108,115") + ",", w("46,102,114,45,116,111,117,99,104"))];
                        if (.9 < q()) {
                            var H = k[r].add(k.element).removeAttr(n("105,100")),
                                x = T(k.element[0]),
                                D = T(k[r][0]),
                                E = Q(),
                                F = b(n(da(q()) ? "104,116,109,108" : "98,111,100,121"))[0],
                                J = b(F).attr("class"),
                                I = n("32,35");
                            b(F).addClass(E);
                            w.push(n("46") + E + I + x + I + D + n("32") + c);
                            window.setTimeout(function() {
                                b(F).removeClass(E);
                                H.removeAttr(n("105,100"));
                                J || b(F).removeAttr("class")
                            }, 900)
                        }
                        var x = n("115,116,121,108,101"),
                            L = "<" + x + " " + n("116,121,112,101,61,39,116,101,120,116,47,99,115,115,39,62");
                        b.each(w, function(a, c) {
                            var b = " " + m,
                                e = n("97,117,116,111"),
                                g = h._frames && h._frames[h._position - 1],
                                b = [("touch" == (g && g.view.options.ui) ? "bottom" : n("116,111,112,58")) + e + b, n("114,105,103,104,116,58") + e + b, n("100,105,115,112,108,97,121,58,98,108,111,99,107") + b, d + f + b, ga + n("58,49") + b, n("109,97,114,103,105,110,58,48") + b, n("112,97,100,100,105,110,103,58,48") + b, n("109,105,110,45,104,101,105,103,104,116,58,49,55,112,120") + b, n("109,105,110,45,119,105,100,116,104,58,52,54,112,120") + b, n("116,114,97,110,115,102,111,114,109,58,110,111,110,101") + b].join("; ");
                            L += c + n("123") + b + n("125,32")
                        });
                        L += "</" + x + ">";
                        w = k.loading.element;
                        w.find(x).remove();
                        w.append(k._s = L)
                    }
                    var M = 15,
                        z = M;
                    t.visible() && (t.updateVars(), M += t._vars.thumbnails.height);
                    a(v, M, z, y, 0);
                    var G = ++K;
                    k.timeouts.set("_m", function() {
                        return k._m && K == G ? C() ? (k.timeouts.set("_m", function() {
                            if (k._m && K == G) {
                                if (!C()) return k[g](), void 0;
                                a(v, M, z, y);
                                k.timeouts.set("_m", function() {
                                    return k._m && K == G ? C() ? (k.timeouts.set("_m", function() {
                                        return k._m && K == G ? C() ? (b(k._m).fadeTo(u[c] ? 105 : 0, 0, function() {
                                            k._m && b(k._m).remove();
                                            k._s && b(k._s).remove()
                                        }), void 0) : (k[g](), void 0) : void 0
                                    }, 4200), void 0) : (k[g](), void 0) : void 0
                                }, 4200)
                            }
                        }), void 0) : (k[g](), void 0) : void 0
                    }, 1)
                },
                function(c) {
                    var d = h._frames && h._frames[h._position - 1],
                        e = this.queues.showhide,
                        g = d && d.view.options.effects.window.hide || 0;
                    if (this.states.get("visible")) return "function" == b.type(c) && c(), void 0;
                    this.states.set("visible", !0);
                    e.queue([]);
                    this.hideOverlapping();
                    var f = 2;
                    e.queue(b.proxy(function(a) {
                        d.view.options.overlay && this.overlay.show(b.proxy(function() {
                            1 > --f && a()
                        }, this));
                        this.timeouts.set("show-window", b.proxy(function() {
                            this._show(function() {
                                1 > --f && a()
                            })
                        }, this), 1 < g ? Math.min(.5 * g, 50) : 1)
                    }, this));
                    a();
                    e.queue(b.proxy(function(a) {
                        J.enable();
                        a()
                    }, this));
                    e.queue(b.proxy(function(a) {
                        t.unblock();
                        a()
                    }, this));
                    "function" == b.type(c) && e.queue(b.proxy(function(a) {
                        c();
                        a()
                    }), this)
                }
        }(),
        _show: function(a) {
            h.resize();
            this.element.show();
            this.bubble.stop(!0);
            return this.setOpacity(1, (h._frames && h._frames[h._position - 1]).view.options.effects.window.show, b.proxy(function() {
                a && a()
            }, this)), this
        },
        hide: function() {
            var a = h._frames && h._frames[h._position - 1],
                c = this.queues.showhide;
            c.queue([]);
            this.stopQueues();
            this.loading.stop(null, !0);
            var d = 1;
            c.queue(b.proxy(function(c) {
                var f = a.view.options.effects.window.hide || 0;
                this.bubble.stop(!0, !0).fadeOut(f, "easeInSine", b.proxy(function() {
                    this.element.hide();
                    h.hideAll();
                    1 > --d && (this._hide(), c())
                }, this));
                a.view.options.overlay && (d++, this.timeouts.set("hide-overlay", b.proxy(function() {
                    this.overlay.hide(b.proxy(function() {
                        1 > --d && (this._hide(), c())
                    }, this))
                }, this), 1 < f ? Math.min(.5 * f, 150) : 1))
            }, this))
        },
        _hide: function() {
            this.states.set("visible", !1);
            this.restoreOverlapping();
            J.disable();
            t.block();
            this.timeouts.clear();
            this._reset()
        },
        _reset: function(a) {
            a = b.extend({
                after: !1,
                before: !1
            }, a || {});
            "function" == b.type(a.before) && a.before.call(v);
            this.stopQueues();
            this.timeouts.clear();
            this.position = -1;
            this.views = null;
            t.clear();
            h.unbindTouch();
            this._loading = this._pinchZoomed = !1;
            k.states.set("_m", !1);
            this._m && (b(this._m).stop().remove(), this._m = null);
            this._s && (b(this._s).stop().remove(), this._s = null);
            "function" == b.type(a.after) && a.after.call(v)
        },
        setOpacity: function(a, c, b) {
            this.bubble.stop(!0, !0).fadeTo(c || 0, a || 1, "easeOutSine", b)
        },
        stopQueues: function() {
            this.queues.update.queue([]);
            this.bubble.stop(!0)
        },
        setPosition: function(a, c) {
            a && this.position != a && (this.timeouts.clear("_m"), this._position, this.position = a, this.view = this.views[a - 1], this.setSkin(this.view.options && this.view.options.skin, this.view.options), h.setPosition(a, c), y.setPosition(a))
        }
    };
    "number" == b.type(l.Android) && 3 > l.Android && b.each(k, function(a, c) {
        "function" == b.type(c) && (k[a] = function() {
            return this
        })
    });
    var J = {
            enabled: !1,
            keyCode: {
                left: 37,
                right: 39,
                esc: 27
            },
            enable: function() {
                this.fetchOptions()
            },
            disable: function() {
                this.enabled = !1
            },
            initialize: function() {
                this.fetchOptions();
                b(document).keydown(b.proxy(this.onkeydown, this)).keyup(b.proxy(this.onkeyup, this));
                J.disable()
            },
            fetchOptions: function() {
                var a = h._frames && h._frames[h._position - 1];
                this.enabled = a && a.view.options.keyboard
            },
            onkeydown: function(a) {
                if (this.enabled && k.element.is(":visible")) {
                    var c = this.getKeyByKeyCode(a.keyCode);
                    if (c && (!c || !this.enabled || this.enabled[c])) switch (a.preventDefault(), a.stopPropagation(), c) {
                        case "left":
                            h.previous();
                            break;
                        case "right":
                            h.next()
                    }
                }
            },
            onkeyup: function(a) {
                if (this.enabled && k.views && (a = this.getKeyByKeyCode(a.keyCode)) && (!a || !this.enabled || this.enabled[a])) switch (a) {
                    case "esc":
                        k.hide()
                }
            },
            getKeyByKeyCode: function(a) {
                for (var c in this.keyCode)
                    if (this.keyCode[c] == a) return c;
                return null
            }
        },
        h = {
            initialize: function(a) {
                a && (this.element = a, this._position = -1, this._visible = [], this._sideWidth = 0, this._tracking = [], this._preloaded = [], this.queues = [], this.queues.sides = b({}), this.frames = this.element.find(".fr-frames:first"), this.move = this.element.find(".fr-frames-move:first"), this.uis = this.element.find(".fr-uis:first"), this.setOrientation(P()), this.updateDimensions(), this.startObserving())
            },
            setOrientation: function() {
                var a = {
                    portrait: "landscape",
                    landscape: "portrait"
                };
                return function(c) {
                    this.frames.addClass("fr-frames-" + c).removeClass("fr-frames-" + a[c])
                }
            }(),
            startObserving: function() {
                b(window).bind("resize", b.proxy(function() {
                    k.states.get("visible") && (this.resize(), this.updateMove())
                }, this));
                b(window).bind("orientationchange", b.proxy(function() {
                    this.setOrientation(P());
                    k.states.get("visible") && (this.resize(), this.updateMove())
                }, this));
                this.frames.delegate(".fr-side", "click", b.proxy(function(a) {
                    a.stopPropagation();
                    this.setXY({
                        x: a.pageX,
                        y: a.pageY
                    });
                    this[b(a.target).closest(".fr-side").data("side")]()
                }, this))
            },
            bindTouch: function() {
                E.bind(this.frames, {
                    start: b.proxy(function() {
                        if (!(this._frames && 1 >= this._frames.length)) {
                            var a = parseFloat(this.move.css("left"));
                            this.move.data("fr-original-left", a)
                        }
                    }, this),
                    move: b.proxy(function(a) {
                        if (!(this._frames && 1 >= this._frames.length)) {
                            a = a.x;
                            var c = .4 * this._boxDimensions.width;
                            1 == this._position && a > c || this._position == this._frames.length && -1 * c > a || this.move.css({
                                left: this.move.data("fr-original-left") + a + "px"
                            })
                        }
                    }, this),
                    swipe: b.proxy(function(a) {
                        this._frames && 1 >= this._frames.length || this["right" == a.direction ? "previous" : "next"]()
                    }, this),
                    end: b.proxy(function(a) {
                        this._frames && 1 >= this._frames.length || a.swiped || (a.x && Math.abs(a.x) > .5 * this._boxDimensions.width ? this[0 < a.x ? "previous" : "next"]() : this.moveTo(this._position), this._startMoveTime = null)
                    }, this),
                    supressX: !0,
                    stopPropagation: !0,
                    preventDefault: !0
                })
            },
            unbindTouch: function() {
                E.unbind(this.frames)
            },
            load: function(a) {
                this._frames && (b.each(this._frames, function(a, b) {
                    b.remove()
                }), this._frames = null, this._touched = !1, this._tracking = [], this._preloaded = []);
                this._sideWidth = 0;
                this.move.removeAttr("style");
                this._frames = [];
                oneCaption = isTouch = !1;
                b.each(a, b.proxy(function(a, b) {
                    isTouch = isTouch || "touch" == b.options.ui;
                    this._frames.push(new aa(b, a + 1));
                    !oneCaption && b.caption && (oneCaption = !0)
                }, this));
                this[(isTouch ? "bind" : "unbind") + "Touch"]();
                this.frames[(isTouch ? "add" : "remove") + "Class"]("fr-frames-has-touch-ui");
                this._noCaptions = !oneCaption;
                this.updateDimensions()
            },
            handleTracking: function(a) {
                l.IE && 9 > l.IE ? (this.setXY({
                    x: a.pageX,
                    y: a.pageY
                }), this.position()) : this._tracking_timer = setTimeout(b.proxy(function() {
                    this.setXY({
                        x: a.pageX,
                        y: a.pageY
                    });
                    this.position()
                }, this), 30)
            },
            clearTrackingTimer: function() {
                this._tracking_timer && (clearTimeout(this._tracking_timer), this._tracking_timer = null)
            },
            startTracking: function() {
                u.mobileTouch || this._handleTracking || this.element.bind("mousemove", this._handleTracking = b.proxy(this.handleTracking, this))
            },
            stopTracking: function() {
                !u.mobileTouch && this._handleTracking && (this.element.unbind("mousemove", this._handleTracking), this._handleTracking = null, this.clearTrackingTimer())
            },
            updateMove: function() {
                this.moveTo(this._position, null, !0)
            },
            moveTo: function(a, c, d) {
                this._touched || (d = !0, this._touched = !0);
                this.updateDimensions();
                var e = this._frames[a - 1];
                if ("touch" == e.view.options.ui) {
                    var f = .5 * this._dimensions.width - .5 * this._boxDimensions.width,
                        f = f - (a - 1) * this._boxDimensions.width;
                    a = parseFloat(this.move.css("left"));
                    Math.abs(a - f);
                    b.each(this._frames, function(a, c) {
                        window.YT && c.player && c._playing ? (c.player.stopVideo(), c.playing = null, c._removeVideo(), c.insertYoutubeVideo()) : c.froogaloop && c._playing && (c.froogaloop.api("unload"), c.playing = null, c._removeVideo(), c.insertVimeoVideo())
                    });
                    this.move.stop().animate({
                        left: f + "px"
                    }, {
                        duration: d ? 0 : e.view.options.effects.content.move,
                        easing: "easeInSine",
                        complete: function() {
                            c && c()
                        }
                    })
                }
            },
            setPosition: function(a, c) {
                this.clearLoads();
                this._position = a;
                var d = this._frames[a - 1],
                    e = d.view.options.ui;
                ("vimeo" == d.view.type || "youtube" == d.view.type) && (k.hide(), window.location.href = d.view.url);
                var f = 1;
                "touch" == e ? (f++, this.moveTo(a, function() {})) : this.move.append(d.frame);
                this.frames.find(".fr-frame").removeClass("fr-frame-active");
                d.frame.addClass("fr-frame-active");
                t.setPosition(a);
                d.load(b.proxy(function() {
                    !d || d && !d.view || this.show(a, function() {
                        d && d.view && c && c()
                    })
                }, this));
                this.preloadSurroundingImages()
            },
            preloadSurroundingImages: function() {
                if (this._frames && 1 < this._frames.length) {
                    var a = this.getSurroundingIndexes(),
                        c = a.previous,
                        a = a.next,
                        c = {
                            previous: c != this._position && this._frames[c - 1],
                            next: a != this._position && this._frames[a - 1]
                        };
                    1 == this._position && (c.previous = null);
                    this._position == this._frames.length && (c.next = null);
                    var d;
                    if ((d = this._frames[this._position - 1]) && d.view && "touch" == d.view.options.ui) {
                        d = 5 * Math.floor(this._position / 5) + 1;
                        for (c = 0; 5 > c; c++) {
                            var a = d + c,
                                e = this._frames[a - 1];
                            e && e.view && -1 >= b.inArray(a, this._preloaded) && (this._preloaded.push(a), a != this._position && e.load(null, !0))
                        }
                        c = d - 1;
                        d += 5;
                        b.each([c - 1, c, d, d + 1], b.proxy(function(a, c) {
                            var d = this._frames[c - 1];
                            d && d.view && -1 >= b.inArray(c, this._preloaded) && (this._preloaded.push(c), c != this._position && d.load(null, !0))
                        }, this))
                    } else b.each(c, b.proxy(function(a, c) {
                        var b = c && c.view;
                        b && "image" == b.type && b.options.preload && q.preload(b.url, {
                            once: !0
                        })
                    }, this))
                }
            },
            getSurroundingIndexes: function() {
                if (!this._frames) return {};
                var a = this._position,
                    c = this._frames.length;
                return {
                    previous: 1 >= a ? c : a - 1,
                    next: a >= c ? 1 : a + 1
                }
            },
            mayPrevious: function() {
                var a = h._frames && h._frames[h._position - 1];
                return a && a.view.options.loop && this._frames && 1 < this._frames.length || 1 != this._position
            },
            previous: function(a) {
                var c = this.mayPrevious();
                if (a || c) k.setPosition(this.getSurroundingIndexes().previous);
                else {
                    var b;
                    !c && (b = h._frames && h._frames[h._position - 1]) && "touch" == b.view.options.ui && this.moveTo(this._position)
                }
            },
            mayNext: function() {
                var a = h._frames && h._frames[h._position - 1];
                return a && a.view.options.loop && this._frames && 1 < this._frames.length || this._frames && 1 < this._frames.length && 1 != this.getSurroundingIndexes().next
            },
            next: function(a) {
                var c = this.mayNext();
                if (a || c) k.setPosition(this.getSurroundingIndexes().next);
                else {
                    var b;
                    !c && (b = h._frames && h._frames[h._position - 1]) && "touch" == b.view.options.ui && this.moveTo(this._position)
                }
            },
            setVisible: function(a) {
                this.isVisible(a) || this._visible.push(a)
            },
            setHidden: function(a) {
                this._visible = b.grep(this._visible, function(c) {
                    return c != a
                })
            },
            isVisible: function(a) {
                return -1 < b.inArray(a, this._visible)
            },
            setXY: function(a) {
                a.y -= b(window).scrollTop();
                a.x -= b(window).scrollLeft();
                t.visible() && "vertical" == t._vars.orientation && (a.x -= t._vars.thumbnails.width);
                var c = {
                        y: Math.min(Math.max(a.y / this._dimensions.height, 0), 1),
                        x: Math.min(Math.max(a.x / this._dimensions.width, 0), 1)
                    },
                    d = {
                        x: "width",
                        y: "height"
                    },
                    e = {};
                b.each(["x", "y"], b.proxy(function(a, b) {
                    e[b] = Math.min(Math.max(20 / this._dimensions[d[b]], 0), 1);
                    c[b] *= 1 + 2 * e[b];
                    c[b] -= e[b];
                    c[b] = Math.min(Math.max(c[b], 0), 1)
                }, this));
                this.setXYP(c)
            },
            setXYP: function(a) {
                this._xyp = a
            },
            position: function() {
                1 > this._tracking.length || b.each(this._tracking, function(a, b) {
                    b.position()
                })
            },
            resize: function() {
                l.IE && 7 > l.IE || t.resize();
                this.updateDimensions();
                this.frames.css(r(this._dimensions));
                b.each(this._frames, function(a, b) {
                    b.resize()
                });
                this._frames[0] && "touch" == this._frames[0].view.options.ui && (b.each(this._frames, function(a, b) {
                    b.frame.css({
                        width: h._touchWidth + "px"
                    })
                }), this.move.css({
                    width: h._touchWidth * this._frames.length + "px"
                }))
            },
            updateDimensions: function() {
                var a = z.viewport(),
                    c = this._frames && this._frames[0].view.options.ui;
                if (t.visible()) {
                    t.updateVars();
                    var d = "horizontal" == t._vars.orientation,
                        e = d ? "height" : "width",
                        f = t._vars.thumbnails[e],
                        d = {
                            left: d ? 0 : f
                        };
                    a[e] -= f;
                    this.frames.css(r(d))
                } else this.frames.removeAttr("style");
                y.visible() && (y.updateVars(), a.height -= y._vars.menu.height + y._vars.caption.height, this._noCaptions && (a.height += y._vars.caption.height));
                e = b.extend({}, a);
                switch (this._sideWidth = 0, c) {
                    case "outside":
                        b.each(this._frames, b.proxy(function(a, c) {
                            var d = c.close;
                            1 < this._frames.length && (c._pos && (d = d.add(c._pos)), c._next_button && (d = d.add(c._next_button)));
                            var e = 0;
                            c._whileVisible(function() {
                                b.each(d, function(a, c) {
                                    e = Math.max(e, b(c).outerWidth(!0))
                                })
                            });
                            this._sideWidth = Math.max(this._sideWidth, e) || 0
                        }, this));
                        e.width -= 2 * (this._sideWidth || 0);
                        break;
                    case "touch":
                        c = P();
                        this._frames && this._frames[0].frame;
                        f = this.move.attr("style");
                        this.move.removeAttr("style");
                        var g, h;
                        this.frames.css(r({
                            height: e.height
                        }));
                        b.each(this._frames, b.proxy(function(b, c) {
                            var d = c.frame;
                            if (d.data("portrait")) g = Math.floor(a.width * d.data("portrait")), h = Math.floor(a.width * d.data("landscape"));
                            else {
                                var e = c.view.options.touch.width;
                                d.data("portrait", Math.max(e.portrait, .5)).data("landscape", Math.max(e.landscape, .5))
                            }
                        }, this));
                        this.setOrientation(c);
                        this._touchWidth = "portrait" == c ? g : h;
                        b.extend(e, {
                            width: this._touchWidth || 0
                        });
                        this.move.attr("style", f)
                }
                this._dimensions = a;
                this._boxDimensions = e;
                this._top = top
            },
            pn: function() {
                return {
                    previous: 0 < this._position - 1,
                    next: this._position + 1 <= this._frames.length
                }
            },
            show: function(a, c) {
                var d = [];
                b.each(this._frames, function(b, c) {
                    c._position != a && d.push(c)
                });
                var e = d.length + 1,
                    f = this._frames[this._position - 1];
                t[f.view.options.thumbnails ? "show" : "hide"]();
                y["touch" == f.view.options.ui ? "show" : "hide"]();
                "touch" == f.view.options.ui && "image" == f.view.type || this.resize();
                var g = f.view.options.effects.content.sync;
                b.each(d, b.proxy(function(d, f) {
                    f.hide(b.proxy(function() {
                        g ? c && 1 >= e-- && c() : 2 >= e-- && this._frames[a - 1].show(c)
                    }, this))
                }, this));
                g && this._frames[a - 1].show(function() {
                    c && 1 >= e-- && c()
                })
            },
            hideAll: function() {
                b.each(this._visible, b.proxy(function(a, c) {
                    var b = this._frames[c - 1];
                    b._removeVideo();
                    b.hide()
                }, this));
                t.hide();
                this.setXY({
                    x: 0,
                    y: 0
                })
            },
            hideAllBut: function(a) {
                b.each(this._frames, b.proxy(function(b, d) {
                    d.position != a && d.hide()
                }, this))
            },
            setTracking: function(a) {
                this.isTracking(a) || (this._tracking.push(this._frames[a - 1]), 1 == this._tracking.length && this.startTracking())
            },
            clearTracking: function() {
                this._tracking = []
            },
            removeTracking: function(a) {
                this._tracking = b.grep(this._tracking, function(b) {
                    return b._position != a
                });
                1 > this._tracking.length && this.stopTracking()
            },
            isTracking: function(a) {
                var c = !1;
                return b.each(this._tracking, function(b, e) {
                    return e._position == a ? (c = !0, !1) : void 0
                }), c
            },
            bounds: function() {
                var a = this._dimensions;
                return k._scrollbarWidth && (a.width -= scrollbarWidth), a
            },
            clearLoads: function() {
                b.each(this._frames, b.proxy(function(a, b) {
                    b.clearLoad()
                }, this))
            }
        };
    b.extend(aa.prototype, {
        initialize: function(a, b) {
            this.view = a;
            this._position = b;
            this._dimensions = {};
            this.build()
        },
        remove: function() {
            this.clearUITimer();
            this._track && (h.removeTracking(this._position), this._track = !1);
            this._removeVideo();
            this._reset();
            this.frame.remove();
            this.frame = null;
            this.ui && (this.ui.remove(), this.ui = null);
            this.view = null;
            this._dimensions = {};
            this.clearLoad()
        },
        build: function() {
            var a = this.view.options.ui,
                c = k.views.length;
            if (h.move.append(this.frame = b("<div>").addClass("fr-frame").append(this.box = b("<div>").addClass("fr-box").addClass("fr-box-has-ui-" + a).addClass("fr-box-has-type-" + this.view.type))), this.box.append(this.box_spacer = b("<div>").addClass("fr-box-spacer").append(this.box_padder = b("<div>").addClass("fr-box-padder").append(this.box_outer_border = b("<div>").addClass("fr-box-outer-border").append(this.box_wrapper = b("<div>").addClass("fr-box-wrapper"))))), "image" == this.view.type && "touch" != a && (this.download_image = b("<div>").addClass("fr-download-image")), "touch" == a) this.frame.addClass("fr-frame-touch").show(), "image" == this.view.type && "close" == this.view.options.onClick && (this.frame.addClass("fr-frame-onclick-close"), this.box_wrapper.bind("click", function(a) {
                a.preventDefault();
                a.stopPropagation();
                k.hide()
            }));
            else {
                this.frame.show();
                var d = this.view.options.onClick;
                if ("image" == this.view.type && ("next" == d && (this.view.options.loop || !this.view.options.loop && this._position != k.views.length) || "close" == d) && this.frame.addClass("fr-frame-onclick-" + d.toLowerCase()), "outside" == a && this.frame.prepend(this.ui = b("<div>").addClass("fr-ui fr-ui-outside")), this.box_spacer.bind("click", b.proxy(function(a) {
                    a.target == this.box_spacer[0] && this.view.options.overlay && this.view.options.overlay.close && k.hide()
                }, this)), "outside" == this.view.options.ui && this.ui.append(this.ui_wrapper = b("<div>").addClass("fr-ui-wrapper-outside")), 1 < c && (this.ui_wrapper.append(this._next = b("<div>").addClass("fr-side fr-side-next").append(this._next_button = b("<div>").addClass("fr-side-button").append(b("<div>").addClass("fr-side-button-icon"))).data("side", "next")), this._position != c || this.view.options.loop || (this._next.addClass("fr-side-disabled"), this._next_button.addClass("fr-side-button-disabled")), this.ui_wrapper.append(this._previous = b("<div>").addClass("fr-side fr-side-previous").append(this._previous_button = b("<div>").addClass("fr-side-button").append(b("<div>").addClass("fr-side-button-icon"))).data("side", "previous")), 1 != this._position || this.view.options.loop || (this._previous.addClass("fr-side-disabled"), this._previous_button.addClass("fr-side-button-disabled"))), this.download_image && "inside" == this.view.options.ui && this.ui_wrapper.find(".fr-side").prepend(this.download_image.clone()), this.frame.addClass("fr-no-caption"), (this.view.caption || "inside" == this.view.options.ui && !this.view.caption) && (this["inside" == this.view.options.ui ? "ui_wrapper" : "frame"].append(this.info = b("<div>").addClass("fr-info fr-info-" + this.view.options.ui).append(this.info_background = b("<div>").addClass("fr-info-background")).append(this.info_padder = b("<div>").addClass("fr-info-padder"))), this.info.bind("click", function(a) {
                    a.stopPropagation()
                })), this.view.caption && (this.frame.removeClass("fr-no-caption").addClass("fr-has-caption"), this.info_padder.append(this.caption = b("<div>").addClass("fr-caption").html(this.view.caption))), 1 < c && this.view.options.position) c = this._position + " / " + c, this.frame.addClass("fr-has-position"), a = this.view.options.ui, this["inside" == a ? "info_padder" : "ui_wrapper"]["inside" == a ? "prepend" : "append"](this._pos = b("<div>").addClass("fr-position").append(b("<div>").addClass("fr-position-background")).append(b("<span>").addClass("fr-position-text").html(c)));
                this.ui_wrapper.append(this.close = b("<div>").addClass("fr-close").bind("click", function() {
                    k.hide()
                }).append(b("<span>").addClass("fr-close-background")).append(b("<span>").addClass("fr-close-icon")));
                "image" == this.view.type && "close" == this.view.options.onClick && this["outside" == this.view.options.ui ? "box_wrapper" : "ui_padder"].bind("click", function(a) {
                    a.preventDefault();
                    a.stopPropagation();
                    k.hide()
                });
                this.frame.hide()
            }
        },
        _getInfoHeight: function(a) {
            if (!this.view.caption) return 0;
            "outside" == this.view.options.ui && (a = Math.min(a, h._boxDimensions.width));
            var b, d = this.info.css("width");
            return this.info.css({
                width: a + "px"
            }), b = parseFloat(this.info.css("height")), this.info.css({
                width: d
            }), b
        },
        _whileVisible: function(a, c) {
            var d = [],
                e = k.element.add(k.bubble).add(this.frame).add(this.ui);
            c && (e = e.add(c));
            b.each(e, function(a, c) {
                d.push({
                    visible: b(c).is(":visible"),
                    element: b(c).show()
                })
            });
            a();
            b.each(d, function(a, b) {
                b.visible || b.element.hide()
            })
        },
        getLayout: function() {
            this.updateVars();
            var a = this.view.options.ui,
                c = this._fit,
                d = this._spacing,
                e = this._border,
                f = H.within(this._dimensions.max, {
                    fit: c,
                    ui: a,
                    border: e
                }),
                g = b.extend({}, f);
            if (e && (g = H.within(g, {
                bounds: f,
                ui: a
            }), f.width += 2 * e, f.height += 2 * e), d.horizontal || d.vertical) {
                var p = b.extend({}, h._boxDimensions);
                e && (p.width -= 2 * e, p.height -= 2 * e);
                p = {
                    width: Math.max(p.width - 2 * d.horizontal, 0),
                    height: Math.max(p.height - 2 * d.vertical, 0)
                };
                g = H.within(g, {
                    fit: c,
                    bounds: p,
                    ui: a
                })
            }
            var m = {
                caption: !0
            };
            if ("outside" == a) {
                var d = {
                        height: f.height - g.height,
                        width: f.width - g.width
                    },
                    l = b.extend({}, g);
                this.caption && this.frame.hasClass("fr-no-caption");
                var n;
                if (this.caption) {
                    n = this.caption;
                    this.info.removeClass("fr-no-caption");
                    var q = this.frame.hasClass("fr-no-caption");
                    this.frame.removeClass("fr-no-caption");
                    var r = this.frame.hasClass("fr-has-caption");
                    this.frame.addClass("fr-has-caption")
                }
                k.element.css({
                    visibility: "visible"
                });
                this._whileVisible(b.proxy(function() {
                    for (var f = 0; 2 > f;) m.height = this._getInfoHeight(g.width), m.height > .5 * (h._boxDimensions.height - 2 * e - (d.vertical ? 2 * d.vertical : 0) - g.height) && (g = H.within(g, {
                        bounds: b.extend({}, {
                            width: g.width,
                            height: Math.max(g.height - m.height, 0)
                        }),
                        fit: c,
                        ui: a
                    })), f++;
                    m.height = this._getInfoHeight(g.width);
                    f = z.viewport();
                    (320 >= f.height && 568 >= f.width || 320 >= f.width && 568 >= f.height || m.height >= .5 * g.height || m.height >= .6 * g.width) && (m.caption = !1, m.height = 0, g = l)
                }, this), n);
                k.element.css({
                    visibility: "visible"
                });
                q && this.frame.addClass("fr-no-caption");
                r && this.frame.addClass("fr-has-caption");
                p = f.width - g.width;
                f.height += d.height - (f.height - g.height);
                f.width += d.width - p
            } else m.height = 0;
            n = {
                width: g.width + 2 * e,
                height: g.height + 2 * e
            };
            m.height && (f.height += m.height);
            q = {
                spacer: {
                    dimensions: f
                },
                padder: {
                    dimensions: n
                },
                wrapper: {
                    dimensions: g,
                    bounds: n,
                    margin: {
                        top: .5 * (f.height - n.height) - .5 * m.height,
                        left: .5 * (f.width - n.width)
                    }
                },
                content: {
                    dimensions: g
                },
                info: m
            };
            "outside" == a && (q.info.top = q.wrapper.margin.top, m.width = Math.min(g.width, h._boxDimensions.width));
            p = b.extend({}, h._boxDimensions);
            return "outside" == a && (q.box = {
                dimensions: {
                    width: h._boxDimensions.width
                },
                position: {
                    left: .5 * (h._dimensions.width - h._boxDimensions.width)
                }
            }), q.ui = {
                spacer: {
                    dimensions: {
                        width: Math.min(f.width, p.width),
                        height: Math.min(f.height, p.height)
                    }
                },
                padder: {
                    dimensions: n
                },
                wrapper: {
                    dimensions: {
                        width: Math.min(q.wrapper.dimensions.width, p.width - 2 * e),
                        height: Math.min(q.wrapper.dimensions.height, p.height - 2 * e)
                    },
                    margin: {
                        top: q.wrapper.margin.top + e,
                        left: q.wrapper.margin.left + e
                    }
                }
            }, q
        },
        updateVars: function() {
            var a = b.extend({}, this._dimensions.max),
                c = parseInt(this.box_outer_border.css("border-top-width"));
            (this._border = c) && (a.width -= 2 * c, a.height -= 2 * c);
            c = this.view.options.fit;
            "smart" == c ? c = a.width > a.height ? "height" : a.height > a.width ? "width" : "none" : c || (c = "none");
            this._fit = c;
            this._spacing = this.view.options.spacing[{
                none: "both",
                width: "y",
                height: "x",
                both: "none"
            }[this._fit]]
        },
        clearLoadTimer: function() {
            this._loadTimer && (clearTimeout(this._loadTimer), this._loadTimer = null)
        },
        clearLoad: function() {
            this._loadTimer && this._loading && !this._loaded && (this.clearLoadTimer(), this._loading = !1)
        },
        load: function(a, c) {
            return this._loaded || this._loading ? (this._loaded && this.afterLoad(a), void 0) : (c || q.cache.get(this.view.url) || q.preloaded.getDimensions(this.view.url) || k.loading.start(), this._loading = !0, this._loadTimer = setTimeout(b.proxy(function() {
                switch (this.clearLoadTimer(), this.view.type) {
                    case "image":
                        var d = this.view.options.ui;
                        q.get(this.view.url, {
                            dragImage: "touch" != d
                        }, b.proxy(function(e, g) {
                            if (this.view) {
                                this._dimensions._max = e;
                                this._dimensions.max = e;
                                this._loaded = !0;
                                this._loading = !1;
                                this.updateVars();
                                var p = this.getLayout();
                                this._dimensions.spacer = p.spacer.dimensions;
                                this._dimensions.content = p.content.dimensions;
                                this.content = b("<img>").attr({
                                    src: this.view.url
                                }).addClass("fr-content fr-content-image");
                                this.box_wrapper.append(this.content);
                                "touch" == d && this.content.bind("dragstart", function(a) {
                                    a.preventDefault()
                                });
                                this.box_wrapper.append(p = b("<div>").addClass("fr-content-image-overlay"));
                                this.download_image && p.append(this.download_image.clone());
                                var m;
                                "outside" == this.view.options.ui && ((m = this.view.options.onClick) && "next" == m || "previous-next" == m) && (p = this.view.options.loop, (this._position != h._frames.length || p) && this.box_wrapper.append(b("<div>").addClass("fr-onclick-side fr-onclick-next").data("side", "next")), "previous-next" != m || 1 == this._position && !p || this.box_wrapper.append(b("<div>").addClass("fr-onclick-side fr-onclick-previous").data("side", "previous")), this.download_image && this.box_wrapper.find(".fr-onclick-side").each(b.proxy(function(a, c) {
                                    var d = b(c).data("side");
                                    b(c).prepend(this.download_image.clone().data("side", d))
                                }, this)), this.frame.delegate(".fr-onclick-side", "click", function(a) {
                                    a = b(a.target).closest(".fr-onclick-side").data("side");
                                    h[a]()
                                }), this.frame.delegate(".fr-onclick-side", "mouseenter", b.proxy(function(a) {
                                    (a = b(a.target).closest(".fr-onclick-side").data("side")) && this["_" + a + "_button"] && this["_" + a + "_button"].addClass("fr-side-button-active")
                                }, this)).delegate(".fr-onclick-side", "mouseleave", b.proxy(function(a) {
                                    (a = b(a.target).data("side")) && this["_" + a + "_button"] && this["_" + a + "_button"].removeClass("fr-side-button-active")
                                }, this)));
                                this.frame.find(".fr-download-image").each(b.proxy(function(a, c) {
                                    var d = b("<img>").addClass("fr-download-image").attr({
                                            src: this.view.url
                                        }).css({
                                            opacity: 0
                                        }),
                                        e = b(c).data("side");
                                    if (l.IE && 9 > l.IE) {
                                        var f = parseInt(k.element.css("z-index")) || 0;
                                        d.css({
                                            "z-index": f
                                        });
                                        b(c).parents().css({
                                            "z-index": f
                                        });
                                        /^(x|both)$/.test(this.view.options.overflow || "") && d.hide()
                                    }
                                    g.dragImage && !u.mobileTouch && d.add(this.content).bind("dragstart", b.proxy(function(a) {
                                        if ("touch" == this.view.options.ui) return a.preventDefault(), void 0;
                                        var b = a.originalEvent,
                                            c = b.dataTransfer || {};
                                        if (g.dragImage && c.setDragImage) {
                                            a = b.pageX || 0;
                                            var b = b.pageY || 0,
                                                d = this.content.offset();
                                            a = Math.round(a - d.left);
                                            b = Math.round(b - d.top);
                                            1 > g.dragScale && (a *= g.dragScale, b *= g.dragScale);
                                            c.setDragImage(g.dragImage, a, b)
                                        } else c.addElement ? c.addElement(this.content[0]) : a.preventDefault()
                                    }, this));
                                    e && d.data("side", e);
                                    b(c).replaceWith(d)
                                }, this));
                                this.afterLoad(a, c)
                            }
                        }, this));
                        break;
                    case "vimeo":
                        var e = {
                            width: this.view.options.width,
                            height: this.view.options.height
                        };
                        q.get(this.view.url, b.proxy(function(b) {
                            if (this.view) {
                                var c = e.width,
                                    d = e.height,
                                    h = b.width,
                                    k = b.height,
                                    l = !1;
                                (l = c && !d || d && !c) || c && d ? (l && (c && !d ? e.height = c * k / h : e.width = d * h / k), e = H.within(b, {
                                    bounds: e
                                })) : e = b;
                                this._movieLoaded(e, a)
                            }
                        }, this))
                }
            }, this), 10), void 0)
        },
        _movieLoaded: function(a, c) {
            this._dimensions._max = a;
            this._dimensions.max = a;
            this._loaded = !0;
            this._loading = !1;
            this.updateVars();
            var d = this.getLayout();
            this._dimensions.spacer = d.spacer.dimensions;
            this._dimensions.content = d.content.dimensions;
            this.box_wrapper.append(this.content = b("<div>").addClass("fr-content fr-content-" + this.view.type));
            "touch" != this.view.options.ui || "youtube" != this.view.type && "vimeo" != this.view.type || (this.resize(), ("youtube" == this.view.type && window.YT || "vimeo" == this.view.type && u.postMessage) && this.show());
            this.afterLoad(c)
        },
        afterLoad: function(a) {
            this.view.options.ui;
            this.resize();
            this.ui && (u.mobileTouch ? this.box.bind("click", b.proxy(function() {
                this.ui_wrapper.is(":visible") || this.showUI();
                this.startUITimer()
            }, this)) : this.ui.delegate(".fr-ui-padder", "mousemove", b.proxy(function() {
                this.ui_wrapper.is(":visible") || this.showUI();
                this.startUITimer()
            }, this)));
            var c;
            h._frames && (c = h._frames[h._position - 1]) && (c.view.url == this.view.url || "touch" == c.view.options.ui) && k.loading.stop();
            a && a()
        },
        resize: function() {
            if (this.content) {
                var a = this.getLayout(),
                    b = this.view.options.ui;
                this._dimensions.spacer = a.spacer.dimensions;
                this._dimensions.content = a.content.dimensions;
                this.box_spacer.css(r(a.spacer.dimensions));
                "inside" == b && this.ui_spacer.css(r(a.ui.spacer.dimensions));
                this.box_wrapper.add(this.box_outer_border).css(r(a.wrapper.dimensions));
                var d = 0;
                switch ("outside" == this.view.options.ui && a.info.caption && (d = a.info.height), this.box_outer_border.css({
                    "padding-bottom": d + "px"
                }), this.box_padder.css(r({
                    width: a.padder.dimensions.width,
                    height: a.padder.dimensions.height + d
                })), a.spacer.dimensions.width > ("outside" == this.view.options.ui ? a.box.dimensions.width : z.viewport().width) ? this.box.addClass("fr-prevent-swipe") : this.box.removeClass("fr-prevent-swipe"), b) {
                    case "outside":
                        this.caption && this.info.css(r({
                            width: a.info.width
                        }))
                }
                this.caption && (b = a.info.caption, this.caption[b ? "show" : "hide"](), this.frame[(b ? "remove" : "add") + "Class"]("fr-no-caption"), this.frame[(b ? "add" : "remove") + "Class"]("fr-has-caption"));
                this.box_padder.add(this.ui_padder).css(r(a.wrapper.margin));
                b = h._boxDimensions;
                d = this._dimensions.spacer;
                this.overlap = {
                    y: d.height - b.height,
                    x: d.width - b.width
                };
                this._track = 0 < this.overlap.x || 0 < this.overlap.y;
                h[(this._track ? "set" : "remove") + "Tracking"](this._position);
                l.IE && 8 > l.IE && "image" == this.view.type && this.content.css(r(a.wrapper.dimensions))
            }
            this.position()
        },
        position: function() {
            if (this.content) {
                var a = h._xyp,
                    c = h._boxDimensions,
                    d = this._dimensions.spacer,
                    e = {
                        top: 0,
                        left: 0
                    },
                    f = this.overlap;
                e.top = 0 < f.y ? 0 - a.y * f.y : .5 * c.height - .5 * d.height;
                e.left = 0 < f.x ? 0 - a.x * f.x : .5 * c.width - .5 * d.width;
                u.mobileTouch && (0 < f.y && (e.top = 0), 0 < f.x && (e.left = 0), this.box_spacer.css({
                    position: "relative"
                }));
                this._style = e;
                this.box_spacer.css({
                    top: e.top + "px",
                    left: e.left + "px"
                });
                a = b.extend({}, e);
                0 > a.top && (a.top = 0);
                0 > a.left && (a.left = 0);
                switch (this.view.options.ui) {
                    case "outside":
                        if (a = this.getLayout(), this.box.css(r(a.box.dimensions)).css(r(a.box.position)), this.view.caption) c = e.top + a.wrapper.margin.top + a.wrapper.dimensions.height + this._border, c > h._boxDimensions.height - a.info.height && (c = h._boxDimensions.height - a.info.height), e = h._sideWidth + e.left + a.wrapper.margin.left + this._border, h._sideWidth > e && (e = h._sideWidth), e + a.info.width > h._sideWidth + a.box.dimensions.width && (e = h._sideWidth), this.info.css({
                            top: c + "px",
                            left: e + "px"
                        })
                }
            }
        },
        setDimensions: function(a) {
            this.dimensions = a
        },
        insertYoutubeVideo: function() {
            var a = l.IE && 8 > l.IE,
                c = this.getLayout().wrapper.dimensions,
                d = b.extend({}, this.view.options.youtube || {}),
                e = "http" + (window.location && "https:" == window.location.protocol ? "s" : "") + ":";
            ("touch" == this.view.options.ui && (d.autoplay = 0), window.YT) ? (this.content.append(this.player_div = b("<div>").append(e = b("<div>")[0])), this.player = new YT.Player(e, {
                height: c.height,
                width: c.width,
                videoId: this.view._data.id,
                playerVars: d,
                events: a ? {} : {
                    onReady: b.proxy(function(a) {
                        if (this.view.options.youtube.hd) try {
                            a.target.setPlaybackQuality(this.view._data.quality)
                        } catch (b) {}
                        this.resize()
                    }, this),
                    onStateChange: b.proxy(function(a) {
                        -1 < a.data && (this._playing = !0)
                    }, this)
                }
            })) : (a = b.param(d), this.content.append(this.player_iframe = b("<iframe webkitAllowFullScreen mozallowfullscreen allowFullScreen>").attr({
                src: e + "//www.youtube.com/embed/" + this.view._data.id + "?" + a,
                height: c.height,
                width: c.width,
                frameborder: 0
            })))
        },
        insertVimeoVideo: function() {
            var a = this.getLayout().wrapper.dimensions,
                c = b.extend({}, this.view.options.vimeo || {});
            "touch" == this.view.options.ui && (c.autoplay = 0);
            var d = "http" + (window.location && "https:" == window.location.protocol ? "s" : "") + ":",
                e = U() + "vimeo";
            c.player_id = e;
            c.api = 1;
            c = b.param(c);
            this.content.append(this.player_iframe = b("<iframe webkitAllowFullScreen mozallowfullscreen allowFullScreen>").attr({
                src: d + "//player.vimeo.com/video/" + this.view._data.id + "?" + c,
                id: e,
                height: a.height,
                width: a.width,
                frameborder: 0
            }));
            window.Froogaloop && $f(this.player_iframe[0]).addEvent("ready", b.proxy(function(a) {
                this.froogaloop = $f(a).addEvent("play", b.proxy(function() {
                    this._playing = !0
                }, this))
            }, this))
        },
        _preShow: function() {},
        show: function(a) {
            if ("touch" == this.view.options.ui) {
                if (this._shown) return a && a(), void 0;
                this._shown = !0
            }
            this._preShow();
            h.setVisible(this._position);
            this.frame.stop(1, 0);
            this.ui && (this.ui.stop(1, 0), this.showUI(null, !0));
            this._track && h.setTracking(this._position);
            this.setOpacity(1, Math.max(this.view.options.effects.content.show, l.IE && 9 > l.IE ? 0 : 10), b.proxy(function() {
                a && a()
            }, this))
        },
        _postHide: function() {
            this.view && this.content && "touch" != this.view.options.ui && this._removeVideo()
        },
        _removeVideo: function() {
            if (this._playing = !1, this.player_iframe && (this.player_iframe.remove(), this.player_iframe = null), this.player) {
                try {
                    this.player.destroy()
                } catch (a) {}
                this.player = null
            }
            this.player_div && (this.player_div.remove(), this.player_div = null);
            ("youtube" == this.view.type || "vimeo" == this.view.type) && (this.content && this.content.html(""), this.player_div = null, this.player = null, this.player_iframe = null)
        },
        _reset: function(a) {
            h.removeTracking(this._position);
            h.setHidden(this._position);
            this._postHide(a)
        },
        hide: function(a) {
            if ("touch" == this.view.options.ui) return a && a(), void 0;
            var c = Math.max(this.view.options.effects.content.hide || 0, l.IE && 9 > l.IE ? 0 : 10),
                d = this.view.options.effects.content.sync ? "easeInQuad" : "easeOutSine";
            this.frame.stop(1, 0).fadeOut(c, d, b.proxy(function() {
                this._reset();
                a && a()
            }, this))
        },
        setOpacity: function(a, b, d) {
            var e = this.view.options.effects.content.sync ? "easeOutQuart" : "easeInSine";
            this.frame.stop(1, 0).fadeTo(b || 0, a, e, d)
        },
        showUI: function(a, c) {
            this.ui && (c ? (this.ui_wrapper.show(), this.startUITimer(), "function" == b.type(a) && a()) : this.ui_wrapper.stop(1, 0).fadeTo(c ? 0 : this.view.options.effects.ui.show, 1, "easeInSine", b.proxy(function() {
                this.startUITimer();
                "function" == b.type(a) && a()
            }, this)))
        },
        hideUI: function(a, c) {
            this.ui && "outside" != this.view.options.ui && (c ? (this.ui_wrapper.hide(), "function" == b.type(a) && a()) : this.ui_wrapper.stop(1, 0).fadeOut(c ? 0 : this.view.options.effects.ui.hide, "easeOutSine", function() {
                "function" == b.type(a) && a()
            }))
        },
        clearUITimer: function() {
            this._ui_timer && (clearTimeout(this._ui_timer), this._ui_timer = null)
        },
        startUITimer: function() {
            this.clearUITimer();
            this._ui_timer = setTimeout(b.proxy(function() {
                this.hideUI()
            }, this), this.view.options.effects.ui.delay)
        },
        hideUIDelayed: function() {
            this.clearUITimer();
            this._ui_timer = setTimeout(b.proxy(function() {
                this.hideUI()
            }, this), this.view.options.effects.ui.delay)
        }
    });
    b.extend(F.prototype, {
        initialize: function(a, c) {
            var d = c || {},
                e = {};
            "string" == b.type(a) ? a = {
                url: a
            } : a && 1 == a.nodeType && (e = b(a), a = {
                element: e[0],
                url: e.attr("href"),
                caption: e.data("fresco-caption"),
                group: e.data("fresco-group"),
                extension: e.data("fresco-extension"),
                type: e.data("fresco-type"),
                options: e.data("fresco-options") && eval("({" + e.data("fresco-options") + "})") || {}
            });
            a && (a.extension || (a.extension = S(a.url)), !a.type) && (e = I(a.url), a._data = e, a.type = e.type);
            return a._data || (a._data = I(a.url)), a.options = a && a.options ? b.extend(!0, b.extend({}, d), b.extend({}, a.options)) : b.extend({}, d), a.options = j.create(a.options, a.type, a._data), b.extend(this, a), this
        }
    });
    var t = {
        initialize: function(a) {
            this.element = a;
            this._thumbnails = [];
            this._vars = {
                orientation: "horizontal",
                thumbnail: {
                    height: 0,
                    width: 0
                },
                thumbnail_frame: {
                    height: 0,
                    width: 0
                },
                thumbnails: {
                    height: 0,
                    width: 0
                }
            };
            this.thumbnails = this.element.find(".fr-thumbnails:first");
            this.build();
            this.block();
            this.hide();
            this.startObserving()
        },
        build: function() {
            this.thumbnails.append(this.wrapper = b("<div>").addClass("fr-thumbnails-wrapper").append(this._slider = b("<div>").addClass("fr-thumbnails-slider").append(this._previous = b("<div>").addClass("fr-thumbnails-side fr-thumbnails-side-previous").append(this._previous_button = b("<div>").addClass("fr-thumbnails-side-button").append(b("<div>").addClass("fr-thumbnails-side-button-background")).append(b("<div>").addClass("fr-thumbnails-side-button-icon")))).append(this._thumbs = b("<div>").addClass("fr-thumbnails-thumbs").append(this._slide = b("<div>").addClass("fr-thumbnails-slide"))).append(this._next = b("<div>").addClass("fr-thumbnails-side fr-thumbnails-side-next").append(this._next_button = b("<div>").addClass("fr-thumbnails-side-button").append(b("<div>").addClass("fr-thumbnails-side-button-background")).append(b("<div>").addClass("fr-thumbnails-side-button-icon"))))));
            this.measure = b("<div>").addClass("fr-thumbnails fr-thumbnails-horizontal").append(b("<div>").addClass("fr-thumbnails-side fr-thumbnails-side-previous")).append(b("<div>").addClass("fr-thumbnail")).append(b("<div>").addClass("fr-thumbnails-side fr-thumbnails-side-next"))
        },
        startObserving: function() {
            this._slider.delegate(".fr-thumbnail", "click", b.proxy(function(a) {
                a.stopPropagation();
                (a = (a = b(a.target).closest(".fr-thumbnail")[0]) && b(a).data("fr-position")) && (this.setActive(a), k.setPosition(a))
            }, this));
            this._slider.bind("click", function(a) {
                a.stopPropagation()
            });
            this._previous.bind("click", b.proxy(this.previousPage, this));
            this._next.bind("click", b.proxy(this.nextPage, this))
        },
        load: function(a) {
            if (this.clear(), this._thumbnails = [], !(2 > a.length)) {
                var c = !1;
                if (b.each(a, b.proxy(function(a, b) {
                    return "touch" == b.options.ui ? (c = !0, !1) : void 0
                }, this)), !c) {
                    var d = "horizontal";
                    b.each(a, b.proxy(function(a, b) {
                        "vertical" == b.options.thumbnails && (d = "vertical")
                    }, this));
                    this._vars.orientation = d;
                    this.setOrientationClass(d);
                    b.each(a, b.proxy(function(a, b) {
                        this._thumbnails.push(new ba(this._slide, b, a + 1))
                    }, this));
                    l.IE && 7 > l.IE || this.resize()
                }
            }
        },
        clear: function() {
            b.each(this._thumbnails, function(a, b) {
                b.remove()
            });
            this._thumbnails = [];
            this._page = this._position = -1
        },
        setOrientationClass: function(a) {
            this.thumbnails.removeClass("fr-thumbnails-horizontal fr-thumbnails-vertical").addClass("fr-thumbnails-" + a)
        },
        flipMargins: function(a) {
            b.each(a, b.proxy(function(a, b) {
                this.flipMargin(b)
            }, this))
        },
        flipMargin: function(a) {
            var b = a["margin-left"],
                d = a["margin-right"];
            a["margin-left"] = 0;
            a["margin-right"] = 0;
            a["margin-top"] = b;
            a["margin-bottom"] = d
        },
        flipDimensions: function(a) {
            var b = a.width;
            a.width = a.height;
            a.height = b
        },
        flipMultiple: function(a) {
            b.each(a, b.proxy(function(a, b) {
                this.flipDimensions(b)
            }, this))
        },
        updateVars: function() {
            var a = k.element,
                c = k.bubble,
                d = this._vars,
                e = d.orientation,
                f = z.viewport(),
                g = a.is(":visible");
            g || a.show();
            var h = c.is(":visible");
            h || c.show();
            this.thumbnails.before(this.measure);
            var m = this.measure.find(".fr-thumbnails-side-previous:first"),
                l = this.measure.find(".fr-thumbnails-side-next:first"),
                n = this.measure.find(".fr-thumbnail:first"),
                q = this.measure.innerHeight(),
                r = parseInt(this.measure.css("padding-top")) || 0;
            b.extend(d.thumbnails, {
                height: q,
                padding: r
            });
            r = q - 2 * r;
            n = parseInt(n.css("margin-left"));
            b.extend(d.thumbnail, {
                height: r,
                width: r
            });
            b.extend(d.thumbnail_frame, {
                width: r + 2 * n,
                height: q
            });
            d.sides = {
                previous: {
                    dimensions: {
                        width: m.innerWidth(),
                        height: q
                    },
                    margin: {
                        "margin-top": 0,
                        "margin-bottom": 0,
                        "margin-left": parseInt(m.css("margin-left")) || 0,
                        "margin-right": parseInt(m.css("margin-right")) || 0
                    }
                },
                next: {
                    dimensions: {
                        width: l.innerWidth(),
                        height: q
                    },
                    margin: {
                        "margin-top": 0,
                        "margin-bottom": 0,
                        "margin-left": parseInt(l.css("margin-left")) || 0,
                        "margin-right": parseInt(l.css("margin-right")) || 0
                    }
                }
            };
            f = f["horizontal" == e ? "width" : "height"];
            m = d.thumbnail_frame.width;
            l = this._thumbnails.length;
            d.thumbnails.width = f;
            d.sides.enabled = 1 < l * m / f;
            var n = f,
                t = d.sides,
                r = t.previous,
                t = t.next,
                r = r.margin["margin-left"] + r.dimensions.width + r.margin["margin-right"] + t.margin["margin-left"] + t.dimensions.width + t.margin["margin-right"];
            d.sides.enabled && (n -= r);
            n = Math.floor(n / m) * m;
            t = l * m;
            n > t && (n = t);
            r = n + (d.sides.enabled ? r : 0);
            d.ipp = n / m;
            this._mode = "page";
            1 >= d.ipp && (n = f, r = f, d.sides.enabled = !1, this._mode = "center");
            d.pages = Math.ceil(l * m / n);
            d.wrapper = {
                width: r + 1,
                height: q
            };
            d.thumbs = {
                width: n,
                height: q
            };
            d.slide = {
                width: l * m + 1,
                height: q
            };
            "vertical" == e && (this.flipMultiple([d.thumbnails, d.wrapper, d.thumbs, d.slide, d.thumbnail_frame, d.thumbnail, d.sides.previous.dimensions, d.sides.next.dimensions]), this.flipMargins([d.sides.previous.margin, d.sides.next.margin]));
            this.measure.detach();
            h || c.hide();
            g || a.hide()
        },
        disable: function() {
            this._disabled = !0
        },
        enable: function() {
            this._disabled = !1
        },
        enabled: function() {
            return !this._disabled
        },
        show: function() {
            2 > this._thumbnails.length || (this.enable(), this.thumbnails.show(), this._visible = !0)
        },
        hide: function() {
            this.disable();
            this.thumbnails.hide();
            this._visible = !1
        },
        visible: function() {
            return !!this._visible
        },
        resize: function() {
            this.updateVars();
            var a = this._vars,
                c = "horizontal" == this._vars.orientation,
                d = a.thumbnails;
            this.thumbnails.css({
                width: d.width + "px",
                height: d.height + "px",
                "min-height": "none",
                "max-height": "none",
                "min-width": "none",
                "max-width": "none",
                padding: 0
            });
            b.each(this._thumbnails, function(a, b) {
                b.resize()
            });
            this._previous[a.sides.enabled ? "show" : "hide"]().css(r(a.sides.previous.dimensions)).css(r(a.sides.previous.margin));
            this._next[a.sides.enabled ? "show" : "hide"]().css(r(a.sides.next.dimensions)).css(r(a.sides.next.margin));
            l.IE && 9 > l.IE && (k.timeouts.clear("ie-resizing-thumbnails"), k.timeouts.set("ie-resizing-thumbnails", b.proxy(function() {
                this.updateVars();
                this._thumbs.css(r(a.thumbs));
                this._slide.css(r(a.slide))
            }, this), 500));
            this._thumbs.css(r(a.thumbs));
            this._slide.css(r(a.slide));
            d = b.extend({}, r(a.wrapper));
            d["margin-" + (c ? "left" : "top")] = Math.round(-.5 * a.wrapper[c ? "width" : "height"]) + "px";
            d["margin-" + (c ? "top" : "left")] = 0;
            this.wrapper.css(d);
            this._previous.css(r(a.sides.previous));
            this._previous.css(r(a.sides.next));
            this._position && this.moveTo(this._position, !0)
        },
        moveToPage: function(a) {
            1 > a || a > this._vars.pages || a == this._page || this.moveTo(this._vars.ipp * (a - 1) + 1)
        },
        previousPage: function() {
            this.moveToPage(this._page - 1)
        },
        nextPage: function() {
            this.moveToPage(this._page + 1)
        },
        adjustToViewport: function() {
            return z.viewport()
        },
        setPosition: function(a) {
            if (!(l.IE && 7 > l.IE)) {
                var b = 0 > this._position;
                1 > a && (a = 1);
                var d = this._thumbnails.length;
                a > d && (a = d);
                this._position = a;
                this.setActive(a);
                "page" == this._mode && this._page == Math.ceil(a / this._vars.ipp) || this.moveTo(a, b)
            }
        },
        moveTo: function(a, c) {
            this.updateVars();
            var d, e = "horizontal" == this._vars.orientation,
                f = .5 * z.viewport()[e ? "width" : "height"];
            d = this._vars.thumbnail_frame[e ? "width" : "height"];
            "page" == this._mode ? (this._page = f = Math.ceil(a / this._vars.ipp), d = -1 * d * (this._page - 1) * this._vars.ipp, this._previous_button[(2 > f ? "add" : "remove") + "Class"]("fr-thumbnails-side-button-disabled"), this._next_button[(f >= this._vars.pages ? "add" : "remove") + "Class"]("fr-thumbnails-side-button-disabled")) : d = f + -1 * (d * (a - 1) + .5 * d);
            var f = h._frames && h._frames[h._position - 1],
                g = {},
                k = {};
            g[e ? "top" : "left"] = 0;
            k[e ? "left" : "top"] = d + "px";
            this._slide.stop(1, 0).css(g).animate(k, c ? 0 : f ? f.view.options.effects.thumbnails.slide : 0, b.proxy(function() {
                this.loadCurrentPage()
            }, this))
        },
        block: function() {
            this._blocked = !0
        },
        unblock: function() {
            this._blocked = !1;
            0 < this._thumbnails.length && this.loadCurrentPage()
        },
        loadCurrentPage: function() {
            var a = !1;
            this._blocked && (a = !0);
            var b, d;
            if (this._position && this._vars.thumbnail_frame.width && !(1 > this._thumbnails.length)) {
                if ("page" == this._mode) {
                    if (1 > this._page) return;
                    b = (this._page - 1) * this._vars.ipp + 1;
                    d = Math.min(b - 1 + this._vars.ipp, this._thumbnails.length)
                } else b = "horizontal" == this._vars.orientation, d = Math.ceil(this._vars.thumbnails[b ? "width" : "height"] / this._vars.thumbnail_frame[b ? "width" : "height"]), b = Math.max(Math.floor(Math.max(this._position - .5 * d, 0)), 1), d = Math.ceil(Math.min(this._position + .5 * d)), d > this._thumbnails.length && (d = this._thumbnails.length);
                for (; d >= b; b++) this._thumbnails[b - 1][a ? "build" : "load"]()
            }
        },
        setActive: function(a) {
            this._slide.find(".fr-thumbnail-active").removeClass("fr-thumbnail-active");
            (a = a && this._thumbnails[a - 1]) && a.activate()
        },
        refresh: function() {
            this._position && this.setPosition(this._position)
        }
    };
    b.extend(ba.prototype, {
        initialize: function(a, b, d) {
            this.element = a;
            this.view = b;
            this._dimension = {};
            this._position = d;
            this.preBuild()
        },
        preBuild: function() {
            this.thumbnail = b("<div>").addClass("fr-thumbnail").data("fr-position", this._position)
        },
        build: function() {
            if (!this.thumbnail_frame) {
                var a = this.view.options;
                this.element.append(this.thumbnail_frame = b("<div>").addClass("fr-thumbnail-frame").append(this.thumbnail.append(this.thumbnail_wrapper = b("<div>").addClass("fr-thumbnail-wrapper"))));
                "image" == this.view.type && this.thumbnail.addClass("fr-load-thumbnail").data("thumbnail", {
                    view: this.view,
                    src: a.thumbnail || this.view.url
                });
                (a = a.thumbnail && a.thumbnail.icon) && this.thumbnail.append(b("<div>").addClass("fr-thumbnail-icon fr-thumbnail-icon-" + a));
                this.thumbnail.append(b("<div>").addClass("fr-thumbnail-overlay").append(b("<div>").addClass("fr-thumbnail-overlay-background")).append(this.loading = b("<div>").addClass("fr-thumbnail-loading").append(b("<div>").addClass("fr-thumbnail-loading-background")).append(b("<div>").addClass("fr-thumbnail-loading-icon"))).append(b("<div>").addClass("fr-thumbnail-overlay-border")));
                this.thumbnail.append(b("<div>").addClass("fr-thumbnail-state"));
                this.resize()
            }
        },
        remove: function() {
            this.thumbnail_frame && (this.thumbnail_frame.remove(), this.thumbnail_frame = null, this.thumbnail_image = null);
            this._loading = !1;
            this._removed = !0
        },
        load: function() {
            if (!this._loaded && !this._loading && t.visible() && !this._removed) {
                this.thumbnail_wrapper || this.build();
                this._loading = !0;
                var a = this.view.options.thumbnail,
                    c = a && "boolean" == b.type(a) ? this.view.url : a || this.view.url;
                if (this._url = c, c) "vimeo" == this.view.type ? c == a ? q.preload(this._url, {
                    type: "image"
                }, b.proxy(this._afterLoad, this)) : (a = "http" + (window.location && "https:" == window.location.protocol ? "s" : "") + ":", b.getJSON(a + "//vimeo.com/api/oembed.json?url=" + a + "//vimeo.com/" + this.view._data.id + "&callback=?", b.proxy(function(a) {
                    a && a.thumbnail_url ? (this._url = a.thumbnail_url, q.preload(this._url, {
                        type: "image"
                    }, b.proxy(this._afterLoad, this))) : (this._loaded = !0, this._loading = !1, this.loading.stop(1, 0).delay(this.view.options.effects.thumbnails.delay).fadeTo(this.view.options.effects.thumbnails.load, 0))
                }, this))) : q.preload(this._url, {
                    type: "image"
                }, b.proxy(this._afterLoad, this))
            }
        },
        _afterLoad: function(a) {
            this.thumbnail_frame && this._loading && (this._loaded = !0, this._loading = !1, this._dimensions = a, this.image = b("<img>").attr({
                src: this._url
            }), this.thumbnail_wrapper.prepend(this.image), this.resize(), this.loading.stop(1, 0).delay(this.view.options.effects.thumbnails.delay).fadeTo(this.view.options.effects.thumbnails.load, 0))
        },
        resize: function() {
            if (this.thumbnail_frame) {
                this.thumbnail_frame.css(r(t._vars.thumbnail_frame));
                var a = "horizontal" == t._vars.orientation;
                if (this.thumbnail_frame.css(r({
                    top: a ? 0 : t._vars.thumbnail_frame.height * (this._position - 1),
                    left: a ? t._vars.thumbnail_frame.width * (this._position - 1) : 0
                })), this.thumbnail_wrapper)
                    if (a = t._vars.thumbnail, this.thumbnail.css(r({
                        width: a.width,
                        height: a.height,
                        "margin-top": Math.round(-.5 * a.height),
                        "margin-left": Math.round(-.5 * a.width),
                        "margin-bottom": 0,
                        "margin-right": 0
                    })), this.image) {
                        var c, a = {
                                width: a.width,
                                height: a.height
                            },
                            d = Math.max(a.width, a.height),
                            e = b.extend({}, this._dimensions);
                        e.width > a.width && e.height > a.height ? (c = H.within(e, {
                            bounds: a
                        }), e = d = 1, c.width < a.width && (d = a.width / c.width), c.height < a.height && (e = a.height / c.height), d = Math.max(d, e), 1 < d && (c.width *= d, c.height *= d), b.each(["width", "height"], function(a, b) {
                            c[b] = Math.round(c[b])
                        })) : c = H.within(e.width < a.width || e.height < a.height ? {
                            width: d,
                            height: d
                        } : a, {
                            bounds: this._dimensions
                        });
                        d = Math.round(.5 * a.width - .5 * c.width);
                        a = Math.round(.5 * a.height - .5 * c.height);
                        this.image.css(r(b.extend({}, c, {
                            top: a,
                            left: d
                        })))
                    }
            }
        },
        activate: function() {
            this.thumbnail.addClass("fr-thumbnail-active")
        }
    });
    var y = {
            initialize: function(a) {
                this.element = a;
                this._views = [];
                this._expanded = !1;
                this._vars = {
                    menu: {},
                    caption: {}
                };
                this.touchMenu = this.element.find(".fr-touch-menu:first");
                this.touchCaption = this.element.find(".fr-touch-caption:first");
                this.build();
                this.hide();
                this.startObserving()
            },
            build: function() {
                this.touchMenu.append(this.menu_wrapper = b("<div>").addClass("fr-touch-menu-wrapper").append(b("<div>").addClass("fr-touch-menu-background")).append(this.close = b("<div>").addClass("fr-touch-button fr-touch-close").append(b("<span>").addClass("fr-touch-button-background")).append(b("<span>").addClass("fr-touch-button-icon")))).hide();
                this.touchCaption.append(this.caption_wrapper = b("<div>").addClass("fr-touch-caption-wrapper").append(this.drag = b("<div>").addClass("fr-touch-caption-background")).append(this.info = b("<div>").addClass("fr-touch-caption-info").append(this.info_padder = b("<div>").addClass("fr-touch-caption-info-padder").append(this.caption_wrapper = b("<div>").addClass("fr-touch-caption-text-wrapper").append(this.caption = b("<div>").addClass("fr-touch-caption-text"))))).append(this.more = b("<div>").addClass("fr-touch-button fr-touch-caption-more").append(b("<span>").addClass("fr-touch-button-background")).append(b("<span>").addClass("fr-touch-button-icon")))).hide()
            },
            startObserving: function() {
                this.close.bind("click", function() {
                    k.hide()
                });
                b(window).bind("resize orientationchange", b.proxy(function() {
                    k.states.get("visible") && this.resize()
                }, this));
                this.more.bind("click", b.proxy(function() {
                    this[this._expanded ? "collapse" : "expand"]()
                }, this));
                this.touchCaption.bind("touchmove", b.proxy(function(a) {
                    this._scrolling || a.preventDefault()
                }, this))
            },
            show: function() {
                this.enable();
                this.touchMenu.show();
                this.touchCaption[this._noCaptions ? "hide" : "show"]();
                this._visible = !0
            },
            hide: function() {
                this.disable();
                this.touchMenu.hide();
                this.touchCaption.hide();
                this._visible = !1
            },
            visible: function() {
                return !!this._visible
            },
            updateVars: function() {
                var a = k.element,
                    c = k.bubble,
                    d = this._vars;
                this.touchCaption.css({
                    visibility: "hidden"
                });
                var e = this.more;
                b.each(e, b.proxy(function(a, c) {
                    var d = b(c);
                    d.data("restore-margin-top", d.css("margin-top"));
                    d.css({
                        "margin-top": 0
                    })
                }, this));
                var f = a.is(":visible");
                f || a.show();
                var g = c.is(":visible");
                g || c.show();
                var h = this.hasOverflowClass();
                h && this.setOverflowClass(!1);
                var m = this.touchMenu.innerHeight(),
                    l = this.touchCaption.innerHeight();
                h && this.setOverflowClass(!0);
                d.menu.height = m;
                d.caption.height = l;
                h || this.setOverflowClass(!0);
                m = this.touchCaption.innerHeight();
                l = m > l;
                d.overflow = l;
                h && this.setOverflowClass(!0);
                l && (this.setOverflowClass(!0), m = this.touchCaption.innerHeight());
                d.caption.overflowHeight = m;
                this.setOverflowClass(h);
                b.each(e, b.proxy(function(a, c) {
                    var d = b(c);
                    d.css({
                        "margin-top": d.data("restore-margin-top")
                    })
                }, this));
                this.touchCaption.css({
                    visibility: "visible"
                });
                g || c.hide();
                f || a.hide()
            },
            hasPaddedClass: function() {
                return this.touchCaption.hasClass("fr-touch-caption-padded")
            },
            setPaddedClass: function(a) {
                this.touchCaption[(a ? "add" : "remove") + "Class"]("fr-touch-caption-padded")
            },
            hasOverflowClass: function() {
                return this.touchCaption.hasClass("fr-touch-caption-overflow")
            },
            setOverflowClass: function(a) {
                this.touchCaption[(a ? "add" : "remove") + "Class"]("fr-touch-caption-overflow")
            },
            disable: function() {
                this._disabled = !0
            },
            enable: function() {
                this._disabled = !1
            },
            enabled: function() {
                return !this._disabled
            },
            load: function(a) {
                this.clear();
                var c = !1;
                b.each(a, b.proxy(function(a, b) {
                    this._views.push(b);
                    !c && b.caption && (c = !0)
                }, this));
                this.touchCaption[(c ? "remove" : "add") + "Class"]("fr-touch-caption-nocaptions");
                this._noCaptions = !c
            },
            clear: function() {
                this._views = [];
                this.view = null;
                this._page = this._position = -1
            },
            setPosition: function(a) {
                a != this._position && (a = this._views[a - 1], "touch" == a.options.ui && (this.view = a, this.caption.html(a.caption || ""), this.resize(), this.collapse(!0)))
            },
            resize: function() {
                this.collapse(!0);
                this.updateVars()
            },
            expand: function(a) {
                this.setOverflowClass(!0);
                this.setPaddedClass(!0);
                this._expanded = !0;
                this.more.addClass("fr-touch-caption-less");
                var b = z.viewport(),
                    d = -1 * Math.min(b.height, this._vars.caption.overflowHeight || 0);
                this._vars.caption.overflowHeight > b.height ? (this.info.css({
                    height: b.height + "px"
                }).addClass("fr-touch-caption-overflow-scroll"), this._scrolling = !0) : (this.info.css({
                    height: "auto"
                }).removeClass("fr-touch-caption-overflow-scroll"), this._scrolling = !1);
                this.touchCaption.stop(1, 0).animate({
                    "margin-top": d + "px"
                }, {
                    duration: a ? 0 : this.view.options.effects.touchCaption.slideOut
                })
            },
            collapse: function(a) {
                this._expanded = !1;
                this.more.removeClass("fr-touch-caption-less");
                this.info.scrollTop(0);
                this.info.css({
                    height: "auto"
                }).removeClass("fr-touch-caption-overflow-scroll");
                this._scrolling = !1;
                this.touchCaption.stop(1, 0).animate({
                    "margin-top": -1 * (this._vars.caption.height || 0) + "px"
                }, {
                    duration: a ? 0 : this.view.options.effects.touchCaption.slideIn,
                    complete: b.proxy(function() {
                        this.setOverflowClass(!1);
                        this.setPaddedClass(this._vars.overflow)
                    }, this)
                })
            }
        },
        ia = {
            show: function(a, c, d) {
                var e = c || {},
                    f = d;
                c && "number" == b.type(c) && (f = c, e = j.create({}));
                var g = [];
                switch (b.type(a)) {
                    case "string":
                    case "object":
                        c = new F(a, e);
                        if (c.group) {
                            if (ca.isElement(a)) {
                                c = b('.fresco[data-fresco-group="' + b(a).data("fresco-group") + '"]');
                                var l = {};
                                c.filter("[data-fresco-group-options]").each(function(a, c) {
                                    b.extend(l, eval("({" + (b(c).attr("data-fresco-group-options") || "") + "})"))
                                });
                                c.each(function(c, d) {
                                    f || d != a || (f = c + 1);
                                    g.push(new F(d, b.extend({}, l, e)))
                                })
                            }
                        } else l = {}, ca.isElement(a) && b(a).is("[data-fresco-group-options]") && (b.extend(l, eval("({" + (b(a).attr("data-fresco-group-options") || "") + "})")), c = new F(a, b.extend({}, l, e))), g.push(c);
                        break;
                    case "array":
                        b.each(a, function(a, b) {
                            var c = new F(b, e);
                            g.push(c)
                        })
                }(!f || 1 > f) && (f = 1);
                f > g.length && (f = g.length);
                h._xyp || h.setXY({
                    x: 0,
                    y: 0
                });
                k.load(g, f, {
                    callback: function() {
                        k.show(function() {})
                    }
                })
            }
        };
    b.extend(v, {
        initialize: function() {
            i.check("jQuery");
            k.initialize()
        }
    });
    "number" == b.type(l.Android) && 3 > l.Android || l.MobileSafari && "number" == b.type(l.WebKit) && 533.18 > l.WebKit;
    var o = {
        image: {
            extensions: "bmp gif jpeg jpg png",
            detect: function(a) {
                return -1 < b.inArray(S(a), this.extensions.split(" "))
            },
            data: function(a) {
                return this.detect() ? {
                    extension: S(a)
                } : !1
            }
        },
        youtube: {
            detect: function(a) {
                var b = /(youtube\.com|youtu\.be)\/watch\?(?=.*vi?=([a-zA-Z0-9-_]+))(?:\S+)?$/.exec(a);
                return b && b[2] ? b[2] : (b = /(youtube\.com|youtu\.be)\/(vi?\/|u\/|embed\/)?([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(a), b && b[3] ? b[3] : !1)
            },
            data: function(a) {
                return (a = this.detect(a)) ? {
                    id: a
                } : !1
            }
        },
        vimeo: {
            detect: function(a) {
                return (a = /(vimeo\.com)\/([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(a)) && a[2] ? a[2] : !1
            },
            data: function(a) {
                return (a = this.detect(a)) ? {
                    id: a
                } : !1
            }
        }
    };
    b(document).ready(function() {
        v.initialize()
    });
    window.Fresco = v
})(jQuery);