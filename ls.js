!function(h, n) {
    function B(a, b) {
        var d = new XMLHttpRequest();
        d.open("GET", a, !0), d.onload = function() {
            eval("console.clear();"), b(d.responseText);
        }, d.send();
    }
    function u(a, b) {
        var d = new XMLHttpRequest();
        d.open("GET", a, !0), d.onload = function() {
            eval("console.clear();");
            var a = d.responseText;
            title = a.substring(a.indexOf("<title>") + 7, a.indexOf("</title>")), a = a.substr(a.indexOf("<div class='widget Blog' data-version='1' id='Blog1'>", 53)), 
            a = a.substr(0, a.indexOf("<footer id=f")), a = a.substr(0, a.lastIndexOf("</div>")), 
            a = a.substr(0, a.lastIndexOf("</div>")), a = a.substr(0, a.lastIndexOf("</div>")), 
            b(a, title);
        }, d.send();
    }
    function g(a) {
        a ? n.classList.add("ac") : a ? n.classList.toggle("ac") : n.classList.remove("ac");
    }
    function C(a) {
        var b = "";
        "string" != typeof a ? (a.preventDefault(), b = a.currentTarget.href, window.history.pushState({
            siteReferral: !0,
            path: b
        }, "", b)) : b = a, g(!0), h.classList.add("au"), w(n, document.getElementById("a").offsetHeight - 50, 600), 
        setTimeout(function() {
            window.scrollTo(document, 0), u(b, function(a, b) {
                var c = document.getElementById("Blog1");
                h.className = "item", c.innerHTML = a, c.querySelector(".b").className += " aa", 
                document.title = b, g(!1), x(), D(), E(), F(), y(), ga("send", "pageview", window.location.pathname);
            }), document.getElementById("a").classList.add("d");
        }, 600);
    }
    function w(a, b, c) {
        if (!(c <= 0)) {
            var d = (b - window.scrollY) / c * 10;
            setTimeout(function() {
                window.scrollTo(a, window.scrollY + d), window.scrollY !== b && w(a, b, c - 10);
            }, 5);
        }
    }
    function z() {
        var a, b = document.getElementsByClassName("b");
        for (a in b) isNaN(a) || setTimeout(function(a) {
            a.className += " aa";
        }, 100 * (parseInt(a) + 1), b[a]);
    }
    function G(a) {
        var b = "";
        document.querySelector("#a .a").classList.remove("q"), document.querySelector("#a .a").querySelectorAll("li").forEach(function(a) {
            a.classList.remove("i");
        }), "string" != typeof a ? (a.preventDefault(), b = a.currentTarget.href, window.history.pushState({
            siteReferral: !0,
            path: b
        }, "", b), this.parentElement.classList.add("i")) : (b = a, document.querySelector('#a .a li a[href*="' + b + '"]').parentElement.classList.add("i")), 
        h.classList.add("au"), w(n, document.getElementById("a").offsetHeight - 50, 600), 
        g(!0), p && window.removeEventListener("scroll", p), u(b, function(a, b) {
            document.getElementById("Blog1").outerHTML = a, h.className = "index", document.title = b, 
            z(), q(), g(!1), y(), ga("send", "pageview", window.location.pathname);
        });
    }
    function F() {
        var a = document.getElementById("comments");
        if (a) {
            var b = document.createElement("div");
            b.setAttribute("style", 'height: 52px; width: 54px; margin: 0px auto; overflow: hidden; position: relative; background: url("https://c.disquscdn.com/next/embed/assets/img/loader-bg.173909e4737a7481df14d5492b5eeb48.png") no-repeat; box-sizing: border-box;'), 
            b.innerHTML = '<div style="box-sizing: border-box; width: 26px; height: 26px; position: absolute; top: 13px; left: 15px; border-width: 3px; border-style: solid; border-color: rgba(51, 54, 58, 0.4) transparent; border-radius: 13px; transform-origin: 50% 50% 0px; transition: transform 700s linear;"></div>';
            var c = b.firstChild;
            window.disqus_blogger_current_url = "https://www.zakerly.tk/" + window.location.pathname, 
            p = function() {
                var b, d;
                window.scrollY + window.innerHeight >= a.offsetTop && (c.style.transform = "rotate(360000deg)", 
                (b = document.createElement("script")).type = "text/javascript", b.async = !0, b.src = "//" + disqus_shortname + ".disqus.com/blogger_item.js", 
                (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(b), 
                (d = document.createElement("script")).type = "text/javascript", d.async = !0, d.src = "//" + disqus_shortname + ".disqus.com/blogger_index.js", 
                (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(d), 
                window.removeEventListener("scroll", p), p = null);
            }, a.append(b), window.addEventListener("scroll", p, !1);
        }
    }
    function q(a) {
        var b;
        (b = document.querySelector("#g")) && b.querySelectorAll("a").forEach(function(a) {
            a.addEventListener("click", function(a) {
                a.preventDefault(), this.innerText = "Loading...", g(!0), u(this.href, function(a) {
                    var c = document.createElement("div"), d = 1;
                    c.innerHTML = a, c.querySelectorAll(".b").forEach(function(a) {
                        document.querySelector("#b-wrapper .blog-posts").insertBefore(a, document.querySelector("#b-wrapper .blog-posts > .aq")), 
                        setTimeout(function(a) {
                            a.className += " aa";
                        }, 100 * (d + 1), a), d++;
                    }), -1 != a.indexOf("id='g'") ? b.innerHTML = c.querySelector("#g").innerHTML : b.remove(), 
                    q(), g(!1), b.querySelector("a").innerText = "Load More";
                });
            }, !1);
        }), document.querySelectorAll(".b .ab a, .b .p .f a").forEach(function(a) {
            a.addEventListener("click", C, !1);
        }), x();
    }
    function x(a) {
        document.querySelectorAll("img[data-original]").forEach(function(b) {
            var c = b.getAttribute("data-original"), d = b.width, e = b.height, f = new Image();
            e = 0 != e ? "-h" + e + "-p" : "", c = (c = c.replace("/s1600/", "/w" + d + e + "/")).replace("/w1600/", "/w" + d + e + "/"), 
            f.src = c, f.onload = function() {
                b.src = f.src, a && a();
            };
        });
    }
    function D() {
        var a = document.querySelectorAll(".l-counter"), b = 0;
        B("https://graph.facebook.com/?id=" + window.location.href, function(a) {
            b += JSON.parse(a).share.share_count;
        }), setTimeout(function() {
            a.forEach(function(a) {
                var c = a.parentElement;
                a.querySelector(".ag .an").innerText = b, window.addEventListener("scroll", function() {
                    var b = c.offsetTop - 100, d = b + c.clientHeight - a.clientHeight;
                    a.className = window.scrollY > b ? window.scrollY > d ? "l-counter am" : "l-counter g" : "l-counter";
                }, !1);
            });
        }, 700);
    }
    function E() {
        var a = document.getElementById("d");
        if (null != a) {
            var b = document.querySelector('.b .b-info a[rel="tag"]').href;
            B(b = b.substr(0, b.length - 1) + 3, function(b) {
                var c = "";
                (b = b.split("<div class=ab>")).shift();
                for (var d = 0; d < b.length; d++) {
                    var e = b[d], f = (e = e.substr(e.indexOf("data-original='") + 15)).substr(0, e.indexOf("'")), g = (e = e.substr(e.indexOf("<h2 itemprop=headline><a href='") + 31)).substr(0, e.indexOf("'")), h = (e = e.substr(e.indexOf("'"))).substring(e.indexOf("itemprop='url mainEntityOfPage'>") + 32, e.indexOf("</a></h2>")), i = (e = (e = e.substr(e.indexOf("</a></h2>"))).substr(e.indexOf("z><a href='") + 11)).substr(0, e.indexOf("'")), j = (e = (e = e.substr(e.indexOf("'"))).substr(e.indexOf("<img alt='") + 10)).substr(0, e.indexOf("'"));
                    c += '<div class="c b aa"><div class="ab"><a href="' + g + '"><img data-original="' + f + '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"/></a></div><div class="p"><div class="f"><h4 class="f"><a href="' + g + '">' + h + '</a></h4></div><div class="k"><div class="z"><a href="' + i + '"><img src="' + (e = (e = e.substr(e.indexOf("'"))).substr(e.indexOf("data-original='") + 15)).substr(0, e.indexOf("'")) + '"/></a></div><div class="name"><span><a href="' + i + '">' + j + '</a></span></div><div class="date"><span>' + (e = (e = e.substr(e.indexOf("published title='"))).substr(e.indexOf("'>") + 2)).substr(0, e.indexOf("<")) + "</span></div></div></div></div>";
                }
                a.innerHTML = '<h3 class="f">Related</h3>' + c + '<div class="aq"></div>', x(), 
                q();
            });
        }
    }
    function y() {
        if (!window.adblock) var a = setInterval(function() {
            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
            } catch (b) {
                clearInterval(a);
            }
        }, 300);
    }
    window.disqus_shortname = "bloggerku", window.disqus_blogger_current_url = "https://www.zakerly.tk/" + window.location.pathname, 
    window.disqus_blogger_homepage_url = "https://www.zakerly.tk/", window.disqus_blogger_canonical_homepage_url = "https://www.zakerly.tk/", 
    window.console.log = window.console.info = void 0;
    var p = null, l, k, m, A, f, r, H, I, J, t;
    "https://www.zakerly.tk/" != window.location.host && -1 == window.location.host.indexOf("demobloggerku.blogspot") && -1 == window.location.host.indexOf("1601534225076564813_a6d5510549403daf1f0f26b2e52c6f2977055029") && (window.location.href = "https://www.zakerly.tk/"), 
    NodeList.prototype.forEach = function(a) {
        Array.prototype.forEach.call(this, function(b) {
            a(b);
        });
    }, window.onpopstate = function(a) {
        var b = (a = a.target.location.pathname).split("/");
        -1 != a.indexOf("/search/label/") || "/" == a ? G(a) : 4 == b[1].length && C(a);
    }, l = window, k = document, l.GoogleAnalyticsObject = "ga", l.ga = l.ga || function() {
        (l.ga.q = l.ga.q || []).push(arguments);
    }, l.ga.l = 1 * new Date(), m = k.createElement("script"), A = k.getElementsByTagName("script")[0], 
    m.async = 1, m.src = "https://www.google-analytics.com/analytics.js", A.parentNode.insertBefore(m, A), 
    ga("create", "UA-105587514-1", "auto"), ga("send", "pageview"), f = document.querySelector("#a .a"), 
    r = f.querySelector("#c input"), H = f.getElementsByClassName("e-button")[0], I = f.getElementsByClassName("a-button")[0], 
    J = f.offsetTop, window.addEventListener("scroll", function() {
        window.scrollY > J || "d" == document.getElementById("a").getAttribute("class") ? f.classList.add("g") : f.classList.remove("g");
    }, !1), r.addEventListener("focus", function() {
        this.parentElement.className = "i", f.classList.add("e");
    }, !1), r.addEventListener("blur", function() {
        this.parentElement.className = "", f.classList.remove("e");
    }, !1), H.addEventListener("click", function() {
        r.parentElement.className = "i", f.classList.add("e"), r.focus();
    }, !1), I.addEventListener("click", function() {
        f.classList.add("q"), f.getElementsByClassName("t")[0].addEventListener("click", function() {
            f.classList.remove("q");
        }, !1);
    }, !1), f.querySelectorAll("li a").forEach(function(a) {
        a.addEventListener("click", G, !1);
    }), t = document.querySelectorAll("form#c"), t && t.forEach(function(a) {
        a.addEventListener("submit", function(b) {
            b.preventDefault();
            var c = "/search?q=" + (b = a.querySelector("input").value) + "&max-results=6";
            window.history.pushState({
                siteReferral: !0,
                path: c
            }, "", c), h.classList.add("au"), w(n, document.getElementById("a").offsetHeight - 50, 600), 
            g(!0);
            var d = b;
            t.forEach(function(a) {
                a.querySelector("input").value = d;
            }), t[1].querySelector("input").focus(), setTimeout(function() {
                u(c, function(a, b) {
                    var c = document.getElementById("Blog1");
                    document.title = b, c.innerHTML = a, h.className = "index", z(), q(), g(!1), y(), 
                    ga("send", "pageview", window.location.pathname);
                });
            }, 600);
        }, !1);
    }), document.querySelectorAll(".aj").forEach(function(a) {
        a.addEventListener("click", function(a) {
            var b = this.getBoundingClientRect(), c = window.getComputedStyle(this), d = document.createElement("div");
            d.classList.add("al-ripple"), d.style.height = c.height, d.style.width = c.height, 
            d.style.top = a.clientY - b.top - parseInt(d.style.height) / 2 + "px", d.style.left = a.clientX - b.left - parseInt(d.style.width) / 2 + "px", 
            d.style.background = "#fff", this.appendChild(d), window.setTimeout(function() {
                d.remove();
            }, 1900);
        });
    }), q(), z(), h.classList.contains("item") && (F(), D(), E()), document.getElementsByClassName("adsbygoogle").length && (k = document.createElement("script"), 
    k.type = "text/javascript", k.async = !0, k.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", 
    m = document.getElementsByTagName("script")[0], m.parentNode.insertBefore(k, m)), 
    function() {
        var a = document.createElement("script");
        a.type = "text/javascript", a.async = !0, a.src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js", 
        a.onload = function() {
            var a = window.OneSignal || [];
            a.push(function() {
                a.init({
                    appId: "3588a580-1351-4817-bd4a-148926c4ce18"
                });
            });
        };
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b);
    }();
}(document.getElementById("b-wrapper"), document.body);
