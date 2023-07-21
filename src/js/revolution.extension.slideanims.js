!(function (t) {
  "use strict";
  var L = jQuery.fn.revolution,
    l = {
      alias: "SlideAnimations Min JS",
      name: "revolution.extensions.slideanims.min.js",
      min_core: "5.4.5",
      version: "1.8",
    };
  jQuery.extend(!0, L, {
    animateSlide: function (t, e, o, a, i, n, r, s) {
      return "stop" === L.compare_version(l).check
        ? s
        : d(t, e, o, a, i, n, r, s);
    },
  });
  var ct = function (t, e, o, a) {
    var i = t,
      n = i.find(".defaultimg"),
      r = n.data("mediafilter"),
      s = i.data("zoomstart"),
      l = i.data("rotationstart");
    null != n.data("currotate") && (l = n.data("currotate")),
      null != n.data("curscale") && "box" == a
        ? (s = 100 * n.data("curscale"))
        : null != n.data("curscale") && (s = n.data("curscale")),
      L.slotSize(n, e);
    var d = n.attr("src"),
      h = n.data("bgcolor"),
      f = e.width,
      c = e.height,
      u = n.data("fxof");
    void 0 === h && (h = n.css("backgroundColor")),
      "on" == e.autoHeight && (c = e.c.height()),
      null == u && (u = 0);
    var p = 0,
      g = n.data("bgfit"),
      w = n.data("bgrepeat"),
      m = n.data("bgposition");
    null == g && (g = "cover"),
      null == w && (w = "no-repeat"),
      null == m && (m = "center center");
    var v = "";
    switch (
      ((v =
        void 0 !== h && 0 <= h.indexOf("gradient")
          ? "background:" + h
          : "background-color:" +
            h +
            ";background-image:url(" +
            d +
            ");background-repeat:" +
            w +
            ";background-size:" +
            g +
            ";background-position:" +
            m),
      a)
    ) {
      case "box":
        for (var y = 0, x = 0, T = 0; T < e.slots; T++) {
          for (var z = (x = 0); z < e.slots; z++)
            i.append(
              '<div class="slot" style="position:absolute;top:' +
                (0 + x) +
                "px;left:" +
                (u + y) +
                "px;width:" +
                e.slotw +
                "px;height:" +
                e.sloth +
                'px;overflow:hidden;"><div class="slotslide ' +
                r +
                '" data-x="' +
                y +
                '" data-y="' +
                x +
                '" style="position:absolute;top:0px;left:0px;width:' +
                e.slotw +
                "px;height:" +
                e.sloth +
                'px;overflow:hidden;"><div style="position:absolute;top:' +
                (0 - x) +
                "px;left:" +
                (0 - y) +
                "px;width:" +
                f +
                "px;height:" +
                c +
                "px;" +
                v +
                ';"></div></div></div>'
            ),
              (x += e.sloth),
              null != s &&
                null != l &&
                punchgs.TweenLite.set(i.find(".slot").last(), { rotationZ: l });
          y += e.slotw;
        }
        break;
      case "vertical":
      case "horizontal":
        if ("horizontal" == a) {
          if (!o) p = 0 - e.slotw;
          for (z = 0; z < e.slots; z++)
            i.append(
              '<div class="slot" style="position:absolute;top:0px;left:' +
                (u + z * e.slotw) +
                "px;overflow:hidden;width:" +
                (e.slotw + 0.3) +
                "px;height:" +
                c +
                'px"><div class="slotslide ' +
                r +
                '" style="position:absolute;top:0px;left:' +
                p +
                "px;width:" +
                (e.slotw + 0.6) +
                "px;height:" +
                c +
                'px;overflow:hidden;"><div style="position:absolute;top:0px;left:' +
                (0 - z * e.slotw) +
                "px;width:" +
                f +
                "px;height:" +
                c +
                "px;" +
                v +
                ';"></div></div></div>'
            ),
              null != s &&
                null != l &&
                punchgs.TweenLite.set(i.find(".slot").last(), { rotationZ: l });
        } else {
          if (!o) p = 0 - e.sloth;
          for (z = 0; z < e.slots + 2; z++)
            i.append(
              '<div class="slot" style="position:absolute;top:' +
                (0 + z * e.sloth) +
                "px;left:" +
                u +
                "px;overflow:hidden;width:" +
                f +
                "px;height:" +
                e.sloth +
                'px"><div class="slotslide ' +
                r +
                '" style="position:absolute;top:' +
                p +
                "px;left:0px;width:" +
                f +
                "px;height:" +
                e.sloth +
                'px;overflow:hidden;"><div style="position:absolute;top:' +
                (0 - z * e.sloth) +
                "px;left:0px;width:" +
                f +
                "px;height:" +
                c +
                "px;" +
                v +
                ';"></div></div></div>'
            ),
              null != s &&
                null != l &&
                punchgs.TweenLite.set(i.find(".slot").last(), { rotationZ: l });
        }
    }
  };
  var ut = function (t, e) {
      return null == e || jQuery.isNumeric(t)
        ? t
        : null == t
        ? t
        : t.split(",")[e];
    },
    d = function (a, t, e, o, i, n, r, s) {
      var l = e[0].opt,
        d = i.index(),
        h = o.index() < d ? 1 : 0;
      "arrow" == l.sc_indicator && (h = l.sc_indicator_dir);
      var f = (function (t, o, e, a) {
          var i = t[0].opt,
            n = punchgs.Power1.easeIn,
            r = punchgs.Power1.easeOut,
            s = punchgs.Power1.easeInOut,
            l = punchgs.Power2.easeIn,
            d = punchgs.Power2.easeOut,
            h = punchgs.Power2.easeInOut,
            f = (punchgs.Power3.easeIn, punchgs.Power3.easeOut),
            c = punchgs.Power3.easeInOut,
            u = [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30,
              31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
            ],
            p = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
            g = 0,
            w = 1,
            m = 0,
            v = 0,
            y =
              (new Array(),
              [
                ["boxslide", 0, 1, 10, 0, "box", !1, null, 0, r, r, 500, 6],
                ["boxfade", 1, 0, 10, 0, "box", !1, null, 1, s, s, 700, 5],
                [
                  "slotslide-horizontal",
                  2,
                  0,
                  0,
                  200,
                  "horizontal",
                  !0,
                  !1,
                  2,
                  h,
                  h,
                  700,
                  3,
                ],
                [
                  "slotslide-vertical",
                  3,
                  0,
                  0,
                  200,
                  "vertical",
                  !0,
                  !1,
                  3,
                  h,
                  h,
                  700,
                  3,
                ],
                [
                  "curtain-1",
                  4,
                  3,
                  0,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  4,
                  r,
                  r,
                  300,
                  5,
                ],
                [
                  "curtain-2",
                  5,
                  3,
                  0,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  5,
                  r,
                  r,
                  300,
                  5,
                ],
                [
                  "curtain-3",
                  6,
                  3,
                  25,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  6,
                  r,
                  r,
                  300,
                  5,
                ],
                [
                  "slotzoom-horizontal",
                  7,
                  0,
                  0,
                  400,
                  "horizontal",
                  !0,
                  !0,
                  7,
                  r,
                  r,
                  300,
                  7,
                ],
                [
                  "slotzoom-vertical",
                  8,
                  0,
                  0,
                  0,
                  "vertical",
                  !0,
                  !0,
                  8,
                  d,
                  d,
                  500,
                  8,
                ],
                [
                  "slotfade-horizontal",
                  9,
                  0,
                  0,
                  1e3,
                  "horizontal",
                  !0,
                  null,
                  9,
                  d,
                  d,
                  2e3,
                  10,
                ],
                [
                  "slotfade-vertical",
                  10,
                  0,
                  0,
                  1e3,
                  "vertical",
                  !0,
                  null,
                  10,
                  d,
                  d,
                  2e3,
                  10,
                ],
                [
                  "fade",
                  11,
                  0,
                  1,
                  300,
                  "horizontal",
                  !0,
                  null,
                  11,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "crossfade",
                  11,
                  1,
                  1,
                  300,
                  "horizontal",
                  !0,
                  null,
                  11,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "fadethroughdark",
                  11,
                  2,
                  1,
                  300,
                  "horizontal",
                  !0,
                  null,
                  11,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "fadethroughlight",
                  11,
                  3,
                  1,
                  300,
                  "horizontal",
                  !0,
                  null,
                  11,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "fadethroughtransparent",
                  11,
                  4,
                  1,
                  300,
                  "horizontal",
                  !0,
                  null,
                  11,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "slideleft",
                  12,
                  0,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  12,
                  c,
                  c,
                  1e3,
                  1,
                ],
                [
                  "slideup",
                  13,
                  0,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  13,
                  c,
                  c,
                  1e3,
                  1,
                ],
                [
                  "slidedown",
                  14,
                  0,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  14,
                  c,
                  c,
                  1e3,
                  1,
                ],
                [
                  "slideright",
                  15,
                  0,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  15,
                  c,
                  c,
                  1e3,
                  1,
                ],
                [
                  "slideoverleft",
                  12,
                  7,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  12,
                  c,
                  c,
                  1e3,
                  1,
                ],
                [
                  "slideoverup",
                  13,
                  7,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  13,
                  c,
                  c,
                  1e3,
                  1,
                ],
                [
                  "slideoverdown",
                  14,
                  7,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  14,
                  c,
                  c,
                  1e3,
                  1,
                ],
                [
                  "slideoverright",
                  15,
                  7,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  15,
                  c,
                  c,
                  1e3,
                  1,
                ],
                [
                  "slideremoveleft",
                  12,
                  8,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  12,
                  c,
                  c,
                  1e3,
                  1,
                ],
                [
                  "slideremoveup",
                  13,
                  8,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  13,
                  c,
                  c,
                  1e3,
                  1,
                ],
                [
                  "slideremovedown",
                  14,
                  8,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  14,
                  c,
                  c,
                  1e3,
                  1,
                ],
                [
                  "slideremoveright",
                  15,
                  8,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  15,
                  c,
                  c,
                  1e3,
                  1,
                ],
                ["papercut", 16, 0, 0, 600, "", null, null, 16, c, c, 1e3, 2],
                [
                  "3dcurtain-horizontal",
                  17,
                  0,
                  20,
                  100,
                  "vertical",
                  !1,
                  !0,
                  17,
                  s,
                  s,
                  500,
                  7,
                ],
                [
                  "3dcurtain-vertical",
                  18,
                  0,
                  10,
                  100,
                  "horizontal",
                  !1,
                  !0,
                  18,
                  s,
                  s,
                  500,
                  5,
                ],
                [
                  "cubic",
                  19,
                  0,
                  20,
                  600,
                  "horizontal",
                  !1,
                  !0,
                  19,
                  c,
                  c,
                  500,
                  1,
                ],
                [
                  "cube",
                  19,
                  0,
                  20,
                  600,
                  "horizontal",
                  !1,
                  !0,
                  20,
                  c,
                  c,
                  500,
                  1,
                ],
                ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21, f, c, 500, 1],
                [
                  "turnoff",
                  21,
                  0,
                  1,
                  500,
                  "horizontal",
                  !1,
                  !0,
                  22,
                  c,
                  c,
                  500,
                  1,
                ],
                [
                  "incube",
                  22,
                  0,
                  20,
                  200,
                  "horizontal",
                  !1,
                  !0,
                  23,
                  h,
                  h,
                  500,
                  1,
                ],
                [
                  "cubic-horizontal",
                  23,
                  0,
                  20,
                  500,
                  "vertical",
                  !1,
                  !0,
                  24,
                  d,
                  d,
                  500,
                  1,
                ],
                [
                  "cube-horizontal",
                  23,
                  0,
                  20,
                  500,
                  "vertical",
                  !1,
                  !0,
                  25,
                  d,
                  d,
                  500,
                  1,
                ],
                [
                  "incube-horizontal",
                  24,
                  0,
                  20,
                  500,
                  "vertical",
                  !1,
                  !0,
                  26,
                  h,
                  h,
                  500,
                  1,
                ],
                [
                  "turnoff-vertical",
                  25,
                  0,
                  1,
                  200,
                  "horizontal",
                  !1,
                  !0,
                  27,
                  h,
                  h,
                  500,
                  1,
                ],
                [
                  "fadefromright",
                  12,
                  1,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  28,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "fadefromleft",
                  15,
                  1,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  29,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "fadefromtop",
                  14,
                  1,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  30,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "fadefrombottom",
                  13,
                  1,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  31,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "fadetoleftfadefromright",
                  12,
                  2,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  32,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "fadetorightfadefromleft",
                  15,
                  2,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  33,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "fadetobottomfadefromtop",
                  14,
                  2,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  34,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "fadetotopfadefrombottom",
                  13,
                  2,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  35,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "parallaxtoright",
                  15,
                  3,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  36,
                  h,
                  l,
                  1500,
                  1,
                ],
                [
                  "parallaxtoleft",
                  12,
                  3,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  37,
                  h,
                  l,
                  1500,
                  1,
                ],
                [
                  "parallaxtotop",
                  14,
                  3,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  38,
                  h,
                  n,
                  1500,
                  1,
                ],
                [
                  "parallaxtobottom",
                  13,
                  3,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  39,
                  h,
                  n,
                  1500,
                  1,
                ],
                [
                  "scaledownfromright",
                  12,
                  4,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  40,
                  h,
                  l,
                  1e3,
                  1,
                ],
                [
                  "scaledownfromleft",
                  15,
                  4,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  41,
                  h,
                  l,
                  1e3,
                  1,
                ],
                [
                  "scaledownfromtop",
                  14,
                  4,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  42,
                  h,
                  l,
                  1e3,
                  1,
                ],
                [
                  "scaledownfrombottom",
                  13,
                  4,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  43,
                  h,
                  l,
                  1e3,
                  1,
                ],
                [
                  "zoomout",
                  13,
                  5,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  44,
                  h,
                  l,
                  1e3,
                  1,
                ],
                ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45, h, l, 1e3, 1],
                [
                  "slidingoverlayup",
                  27,
                  0,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  47,
                  s,
                  r,
                  2e3,
                  1,
                ],
                [
                  "slidingoverlaydown",
                  28,
                  0,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  48,
                  s,
                  r,
                  2e3,
                  1,
                ],
                [
                  "slidingoverlayright",
                  30,
                  0,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  49,
                  s,
                  r,
                  2e3,
                  1,
                ],
                [
                  "slidingoverlayleft",
                  29,
                  0,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  50,
                  s,
                  r,
                  2e3,
                  1,
                ],
                [
                  "parallaxcirclesup",
                  31,
                  0,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  51,
                  h,
                  n,
                  1500,
                  1,
                ],
                [
                  "parallaxcirclesdown",
                  32,
                  0,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  52,
                  h,
                  n,
                  1500,
                  1,
                ],
                [
                  "parallaxcirclesright",
                  33,
                  0,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  53,
                  h,
                  n,
                  1500,
                  1,
                ],
                [
                  "parallaxcirclesleft",
                  34,
                  0,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  54,
                  h,
                  n,
                  1500,
                  1,
                ],
                [
                  "notransition",
                  26,
                  0,
                  1,
                  0,
                  "horizontal",
                  !0,
                  null,
                  46,
                  h,
                  l,
                  1e3,
                  1,
                ],
                [
                  "parallaxright",
                  15,
                  3,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  55,
                  h,
                  l,
                  1500,
                  1,
                ],
                [
                  "parallaxleft",
                  12,
                  3,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  56,
                  h,
                  l,
                  1500,
                  1,
                ],
                [
                  "parallaxup",
                  14,
                  3,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  57,
                  h,
                  n,
                  1500,
                  1,
                ],
                [
                  "parallaxdown",
                  13,
                  3,
                  1,
                  0,
                  "horizontal",
                  !0,
                  !0,
                  58,
                  h,
                  n,
                  1500,
                  1,
                ],
                [
                  "grayscale",
                  11,
                  5,
                  1,
                  300,
                  "horizontal",
                  !0,
                  null,
                  11,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "grayscalecross",
                  11,
                  6,
                  1,
                  300,
                  "horizontal",
                  !0,
                  null,
                  11,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "brightness",
                  11,
                  7,
                  1,
                  300,
                  "horizontal",
                  !0,
                  null,
                  11,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "brightnesscross",
                  11,
                  8,
                  1,
                  300,
                  "horizontal",
                  !0,
                  null,
                  11,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "blurlight",
                  11,
                  9,
                  1,
                  300,
                  "horizontal",
                  !0,
                  null,
                  11,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "blurlightcross",
                  11,
                  10,
                  1,
                  300,
                  "horizontal",
                  !0,
                  null,
                  11,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "blurstrong",
                  11,
                  9,
                  1,
                  300,
                  "horizontal",
                  !0,
                  null,
                  11,
                  h,
                  h,
                  1e3,
                  1,
                ],
                [
                  "blurstrongcross",
                  11,
                  10,
                  1,
                  300,
                  "horizontal",
                  !0,
                  null,
                  11,
                  h,
                  h,
                  1e3,
                  1,
                ],
              ]);
          (i.duringslidechange = !0),
            (i.testanims = !1),
            1 == i.testanims &&
              ((i.nexttesttransform =
                void 0 === i.nexttesttransform ? 34 : i.nexttesttransform + 1),
              (i.nexttesttransform =
                70 < i.nexttesttransform ? 0 : i.nexttesttransform),
              (o = y[i.nexttesttransform][0]),
              console.log(
                o +
                  "  " +
                  i.nexttesttransform +
                  "  " +
                  y[i.nexttesttransform][1] +
                  "  " +
                  y[i.nexttesttransform][2]
              )),
            jQuery.each(
              [
                "parallaxcircles",
                "slidingoverlay",
                "slide",
                "slideover",
                "slideremove",
                "parallax",
                "parralaxto",
              ],
              function (t, e) {
                o == e + "horizontal" &&
                  (o = 1 != a ? e + "left" : e + "right"),
                  o == e + "vertical" && (o = 1 != a ? e + "up" : e + "down");
              }
            ),
            "random" == o &&
              ((o = Math.round(Math.random() * y.length - 1)),
              y.length - 1 < o && (o = y.length - 1)),
            "random-static" == o &&
              ((o = Math.round(Math.random() * u.length - 1)),
              u.length - 1 < o && (o = u.length - 1),
              (o = u[o])),
            "random-premium" == o &&
              ((o = Math.round(Math.random() * p.length - 1)),
              p.length - 1 < o && (o = p.length - 1),
              (o = p[o]));
          if (
            1 == i.isJoomla &&
            null != window.MooTools &&
            -1 !=
              [
                12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
                39, 40, 41, 42, 43, 44, 45,
              ].indexOf(o)
          ) {
            var x = Math.round(Math.random() * (p.length - 2)) + 1;
            p.length - 1 < x && (x = p.length - 1),
              0 == x && (x = 1),
              (o = p[x]);
          }
          jQuery.each(y, function (t, e) {
            (e[0] != o && e[8] != o) || ((g = e[1]), (w = e[2]), (m = v)),
              (v += 1);
          }),
            30 < g && (g = 30),
            g < 0 && (g = 0);
          var T = new Object();
          return (T.nexttrans = g), (T.STA = y[m]), (T.specials = w), T;
        })(e, t, 0, h),
        c = f.STA,
        u = f.specials;
      a = f.nexttrans;
      "on" == n.data("kenburns") && (a = 11);
      var p = o.data("nexttransid") || 0,
        g = ut(o.data("masterspeed"), p);
      (g =
        (g =
          "default" === g
            ? c[11]
            : "random" === g
            ? Math.round(1e3 * Math.random() + 300)
            : null != g
            ? parseInt(g, 0)
            : c[11]) > l.delay
          ? l.delay
          : g),
        (g += c[4]),
        (l.slots = ut(o.data("slotamount"), p)),
        (l.slots =
          null == l.slots || "default" == l.slots
            ? c[12]
            : "random" == l.slots
            ? Math.round(12 * Math.random() + 4)
            : l.slots),
        (l.slots =
          l.slots < 1
            ? "boxslide" == t
              ? Math.round(6 * Math.random() + 3)
              : "flyin" == t
              ? Math.round(4 * Math.random() + 1)
              : l.slots
            : l.slots),
        (l.slots = (4 == a || 5 == a || 6 == a) && l.slots < 3 ? 3 : l.slots),
        (l.slots = 0 != c[3] ? Math.min(l.slots, c[3]) : l.slots),
        (l.slots =
          9 == a ? l.width / l.slots : 10 == a ? l.height / l.slots : l.slots),
        (l.rotate = ut(o.data("rotate"), p)),
        (l.rotate =
          null == l.rotate || "default" == l.rotate
            ? 0
            : 999 == l.rotate || "random" == l.rotate
            ? Math.round(360 * Math.random())
            : l.rotate),
        (l.rotate = l.ie || l.ie9 ? 0 : l.rotate),
        11 != a &&
          (null != c[7] && ct(r, l, c[7], c[5]),
          null != c[6] && ct(n, l, c[6], c[5])),
        s.add(
          punchgs.TweenLite.set(n.find(".defaultvid"), {
            y: 0,
            x: 0,
            top: 0,
            left: 0,
            scale: 1,
          }),
          0
        ),
        s.add(
          punchgs.TweenLite.set(r.find(".defaultvid"), {
            y: 0,
            x: 0,
            top: 0,
            left: 0,
            scale: 1,
          }),
          0
        ),
        s.add(
          punchgs.TweenLite.set(n.find(".defaultvid"), { y: "+0%", x: "+0%" }),
          0
        ),
        s.add(
          punchgs.TweenLite.set(r.find(".defaultvid"), { y: "+0%", x: "+0%" }),
          0
        ),
        s.add(
          punchgs.TweenLite.set(n, { autoAlpha: 1, y: "+0%", x: "+0%" }),
          0
        ),
        s.add(
          punchgs.TweenLite.set(r, { autoAlpha: 1, y: "+0%", x: "+0%" }),
          0
        ),
        s.add(
          punchgs.TweenLite.set(n.parent(), { backgroundColor: "transparent" }),
          0
        ),
        s.add(
          punchgs.TweenLite.set(r.parent(), { backgroundColor: "transparent" }),
          0
        );
      var w = ut(o.data("easein"), p),
        m = ut(o.data("easeout"), p);
      if (
        ((w =
          "default" === w
            ? c[9] || punchgs.Power2.easeInOut
            : w || c[9] || punchgs.Power2.easeInOut),
        (m =
          "default" === m
            ? c[10] || punchgs.Power2.easeInOut
            : m || c[10] || punchgs.Power2.easeInOut),
        0 == a)
      ) {
        var v = Math.ceil(l.height / l.sloth),
          y = 0;
        n.find(".slotslide").each(function (t) {
          var e = jQuery(this);
          (y += 1) == v && (y = 0),
            s.add(
              punchgs.TweenLite.from(e, g / 600, {
                opacity: 0,
                top: 0 - l.sloth,
                left: 0 - l.slotw,
                rotation: l.rotate,
                force3D: "auto",
                ease: w,
              }),
              (15 * t + 30 * y) / 1500
            );
        });
      }
      if (1 == a) {
        var x;
        n.find(".slotslide").each(function (t) {
          var e = jQuery(this),
            o = Math.random() * g + 300,
            a = 500 * Math.random() + 200;
          x < o + a && ((x = a + a), t),
            s.add(
              punchgs.TweenLite.from(e, o / 1e3, {
                autoAlpha: 0,
                force3D: "auto",
                rotation: l.rotate,
                ease: w,
              }),
              a / 1e3
            );
        });
      }
      if (2 == a) {
        var T = new punchgs.TimelineLite();
        r.find(".slotslide").each(function () {
          var t = jQuery(this);
          T.add(
            punchgs.TweenLite.to(t, g / 1e3, {
              left: l.slotw,
              ease: w,
              force3D: "auto",
              rotation: 0 - l.rotate,
            }),
            0
          ),
            s.add(T, 0);
        }),
          n.find(".slotslide").each(function () {
            var t = jQuery(this);
            T.add(
              punchgs.TweenLite.from(t, g / 1e3, {
                left: 0 - l.slotw,
                ease: w,
                force3D: "auto",
                rotation: l.rotate,
              }),
              0
            ),
              s.add(T, 0);
          });
      }
      if (3 == a) {
        T = new punchgs.TimelineLite();
        r.find(".slotslide").each(function () {
          var t = jQuery(this);
          T.add(
            punchgs.TweenLite.to(t, g / 1e3, {
              top: l.sloth,
              ease: w,
              rotation: l.rotate,
              force3D: "auto",
              transformPerspective: 600,
            }),
            0
          ),
            s.add(T, 0);
        }),
          n.find(".slotslide").each(function () {
            var t = jQuery(this);
            T.add(
              punchgs.TweenLite.from(t, g / 1e3, {
                top: 0 - l.sloth,
                rotation: l.rotate,
                ease: m,
                force3D: "auto",
                transformPerspective: 600,
              }),
              0
            ),
              s.add(T, 0);
          });
      }
      if (4 == a || 5 == a) {
        setTimeout(function () {
          r.find(".defaultimg").css({ opacity: 0 });
        }, 100);
        var z = g / 1e3;
        T = new punchgs.TimelineLite();
        r.find(".slotslide").each(function (t) {
          var e = jQuery(this),
            o = (t * z) / l.slots;
          5 == a && (o = ((l.slots - t - 1) * z) / l.slots / 1.5),
            T.add(
              punchgs.TweenLite.to(e, 3 * z, {
                transformPerspective: 600,
                force3D: "auto",
                top: 0 + l.height,
                opacity: 0.5,
                rotation: l.rotate,
                ease: w,
                delay: o,
              }),
              0
            ),
            s.add(T, 0);
        }),
          n.find(".slotslide").each(function (t) {
            var e = jQuery(this),
              o = (t * z) / l.slots;
            5 == a && (o = ((l.slots - t - 1) * z) / l.slots / 1.5),
              T.add(
                punchgs.TweenLite.from(e, 3 * z, {
                  top: 0 - l.height,
                  opacity: 0.5,
                  rotation: l.rotate,
                  force3D: "auto",
                  ease: punchgs.eo,
                  delay: o,
                }),
                0
              ),
              s.add(T, 0);
          });
      }
      if (6 == a) {
        l.slots < 2 && (l.slots = 2), l.slots % 2 && (l.slots = l.slots + 1);
        T = new punchgs.TimelineLite();
        setTimeout(function () {
          r.find(".defaultimg").css({ opacity: 0 });
        }, 100),
          r.find(".slotslide").each(function (t) {
            var e = jQuery(this);
            if (t + 1 < l.slots / 2) var o = 90 * (t + 2);
            else o = 90 * (2 + l.slots - t);
            T.add(
              punchgs.TweenLite.to(e, (g + o) / 1e3, {
                top: 0 + l.height,
                opacity: 1,
                force3D: "auto",
                rotation: l.rotate,
                ease: w,
              }),
              0
            ),
              s.add(T, 0);
          }),
          n.find(".slotslide").each(function (t) {
            var e = jQuery(this);
            if (t + 1 < l.slots / 2) var o = 90 * (t + 2);
            else o = 90 * (2 + l.slots - t);
            T.add(
              punchgs.TweenLite.from(e, (g + o) / 1e3, {
                top: 0 - l.height,
                opacity: 1,
                force3D: "auto",
                rotation: l.rotate,
                ease: m,
              }),
              0
            ),
              s.add(T, 0);
          });
      }
      if (7 == a) {
        (g *= 2) > l.delay && (g = l.delay);
        T = new punchgs.TimelineLite();
        setTimeout(function () {
          r.find(".defaultimg").css({ opacity: 0 });
        }, 100),
          r.find(".slotslide").each(function () {
            var t = jQuery(this).find("div");
            T.add(
              punchgs.TweenLite.to(t, g / 1e3, {
                left: 0 - l.slotw / 2 + "px",
                top: 0 - l.height / 2 + "px",
                width: 2 * l.slotw + "px",
                height: 2 * l.height + "px",
                opacity: 0,
                rotation: l.rotate,
                force3D: "auto",
                ease: w,
              }),
              0
            ),
              s.add(T, 0);
          }),
          n.find(".slotslide").each(function (t) {
            var e = jQuery(this).find("div");
            T.add(
              punchgs.TweenLite.fromTo(
                e,
                g / 1e3,
                { left: 0, top: 0, opacity: 0, transformPerspective: 600 },
                {
                  left: 0 - t * l.slotw + "px",
                  ease: m,
                  force3D: "auto",
                  top: "0px",
                  width: l.width,
                  height: l.height,
                  opacity: 1,
                  rotation: 0,
                  delay: 0.1,
                }
              ),
              0
            ),
              s.add(T, 0);
          });
      }
      if (8 == a) {
        (g *= 3) > l.delay && (g = l.delay);
        T = new punchgs.TimelineLite();
        r.find(".slotslide").each(function () {
          var t = jQuery(this).find("div");
          T.add(
            punchgs.TweenLite.to(t, g / 1e3, {
              left: 0 - l.width / 2 + "px",
              top: 0 - l.sloth / 2 + "px",
              width: 2 * l.width + "px",
              height: 2 * l.sloth + "px",
              force3D: "auto",
              ease: w,
              opacity: 0,
              rotation: l.rotate,
            }),
            0
          ),
            s.add(T, 0);
        }),
          n.find(".slotslide").each(function (t) {
            var e = jQuery(this).find("div");
            T.add(
              punchgs.TweenLite.fromTo(
                e,
                g / 1e3,
                { left: 0, top: 0, opacity: 0, force3D: "auto" },
                {
                  left: "0px",
                  top: 0 - t * l.sloth + "px",
                  width: n.find(".defaultimg").data("neww") + "px",
                  height: n.find(".defaultimg").data("newh") + "px",
                  opacity: 1,
                  ease: m,
                  rotation: 0,
                }
              ),
              0
            ),
              s.add(T, 0);
          });
      }
      if (9 == a || 10 == a) {
        n.find(".slotslide").each(function (t) {
          var e = jQuery(this);
          0,
            s.add(
              punchgs.TweenLite.fromTo(
                e,
                g / 2e3,
                { autoAlpha: 0, force3D: "auto", transformPerspective: 600 },
                { autoAlpha: 1, ease: w, delay: (t * l.slots) / 100 / 2e3 }
              ),
              0
            );
        });
      }
      if (27 == a || 28 == a || 29 == a || 30 == a) {
        var L = n.find(".slot"),
          b = 27 == a || 29 == a ? "-100%" : "+100%",
          A = 27 == a || 29 == a ? "+100%" : "-100%",
          D = 27 == a || 29 == a ? "-80%" : "80%",
          j = 27 == a || 29 == a ? "+80%" : "-80%",
          Q = 27 == a || 29 == a ? "+10%" : "-10%",
          M = { overwrite: "all" },
          P = { autoAlpha: 0, zIndex: 1, force3D: "auto", ease: w },
          k = {
            position: "inherit",
            autoAlpha: 0,
            overwrite: "all",
            zIndex: 1,
          },
          O = { autoAlpha: 1, force3D: "auto", ease: m },
          I = { overwrite: "all", zIndex: 2, opacity: 1, autoAlpha: 1 },
          X = { autoAlpha: 1, force3D: "auto", overwrite: "all", ease: w },
          Y = { overwrite: "all", zIndex: 2, autoAlpha: 1 },
          S = { autoAlpha: 1, force3D: "auto", ease: w },
          _ = 1 == (27 == a || 28 == a ? 1 : 2) ? "y" : "x";
        (M[_] = "0px"),
          (P[_] = b),
          (k[_] = Q),
          (O[_] = "0%"),
          (I[_] = A),
          (X[_] = b),
          (Y[_] = D),
          (S[_] = j),
          L.append(
            '<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'
          ),
          s.add(punchgs.TweenLite.fromTo(r, g / 1e3, M, P), 0),
          s.add(
            punchgs.TweenLite.fromTo(n.find(".defaultimg"), g / 2e3, k, O),
            g / 2e3
          ),
          s.add(punchgs.TweenLite.fromTo(L, g / 1e3, I, X), 0),
          s.add(
            punchgs.TweenLite.fromTo(L.find(".slotslide div"), g / 1e3, Y, S),
            0
          );
      }
      if (31 == a || 32 == a || 33 == a || 34 == a) {
        (g = 6e3), (w = punchgs.Power3.easeInOut);
        var C = g / 1e3;
        (mas = C - C / 5),
          (_nt = a),
          (fy = 31 == _nt ? "+100%" : 32 == _nt ? "-100%" : "0%"),
          (fx = 33 == _nt ? "+100%" : 34 == _nt ? "-100%" : "0%"),
          (ty = 31 == _nt ? "-100%" : 32 == _nt ? "+100%" : "0%"),
          (tx = 33 == _nt ? "-100%" : 34 == _nt ? "+100%" : "0%"),
          s.add(
            punchgs.TweenLite.fromTo(
              r,
              C - 0.2 * C,
              { y: 0, x: 0 },
              { y: ty, x: tx, ease: m }
            ),
            0.2 * C
          ),
          s.add(
            punchgs.TweenLite.fromTo(
              n,
              C,
              { y: fy, x: fx },
              { y: "0%", x: "0%", ease: w }
            ),
            0
          ),
          n.find(".slot").remove(),
          n.find(".defaultimg").clone().appendTo(n).addClass("slot"),
          (function (t, f, c, e, u) {
            var o = t.find(".slot"),
              p = [2, 1.2, 0.9, 0.7, 0.55, 0.42],
              g = t.width(),
              w = t.height();
            o.wrap(
              '<div class="slot-circle-wrapper" style="overflow:hidden;position:absolute;border:1px solid #fff"></div>'
            );
            for (var a = 0; a < 6; a++) o.parent().clone(!1).appendTo(nextsh);
            t.find(".slot-circle-wrapper").each(function (t) {
              if (t < 6) {
                var e = jQuery(this),
                  o = e.find(".slot"),
                  a = w < g ? p[t] * g : p[t] * w,
                  i = a / 2 - g / 2 + 0,
                  n = a / 2 - w / 2 + 0,
                  r = {
                    scale: 1,
                    transformOrigo: "50% 50%",
                    width: a + "px",
                    height: a + "px",
                    top: w / 2 - a / 2 + "px",
                    left:
                      (33 == c
                        ? g / 2 - a / 2
                        : 34 == c
                        ? g - a
                        : g / 2 - a / 2) + "px",
                    borderRadius: 0 != t ? "50%" : "0",
                  },
                  s = {
                    scale: 1,
                    top: w / 2 - a / 2,
                    left: g / 2 - a / 2,
                    ease: u,
                  },
                  l = {
                    width: g,
                    height: w,
                    autoAlpha: 1,
                    top: n + "px",
                    position: "absolute",
                    left: (33 == c ? i : 34 == c ? i + g / 2 : i) + "px",
                  },
                  d = { top: n + "px", left: i + "px", ease: u },
                  h = f;
                mtl.add(punchgs.TweenLite.fromTo(e, h, r, s), 0),
                  mtl.add(punchgs.TweenLite.fromTo(o, h, l, d), 0),
                  mtl.add(
                    punchgs.TweenLite.fromTo(
                      e,
                      0.001,
                      { autoAlpha: 0 },
                      { autoAlpha: 1 }
                    ),
                    0
                  );
              }
            });
          })(n, C, _nt, 0, w);
      }
      if (11 == a) {
        12 < u && (u = 0);
        var V = 2 == u ? "#000000" : 3 == u ? "#ffffff" : "transparent";
        switch (u) {
          case 0:
            s.add(
              punchgs.TweenLite.fromTo(
                n,
                g / 1e3,
                { autoAlpha: 0 },
                { autoAlpha: 1, force3D: "auto", ease: w }
              ),
              0
            );
            break;
          case 1:
            s.add(
              punchgs.TweenLite.fromTo(
                n,
                g / 1e3,
                { autoAlpha: 0 },
                { autoAlpha: 1, force3D: "auto", ease: w }
              ),
              0
            ),
              s.add(
                punchgs.TweenLite.fromTo(
                  r,
                  g / 1e3,
                  { autoAlpha: 1 },
                  { autoAlpha: 0, force3D: "auto", ease: w }
                ),
                0
              );
            break;
          case 2:
          case 3:
          case 4:
            s.add(
              punchgs.TweenLite.set(r.parent(), {
                backgroundColor: V,
                force3D: "auto",
              }),
              0
            ),
              s.add(
                punchgs.TweenLite.set(n.parent(), {
                  backgroundColor: "transparent",
                  force3D: "auto",
                }),
                0
              ),
              s.add(
                punchgs.TweenLite.to(r, g / 2e3, {
                  autoAlpha: 0,
                  force3D: "auto",
                  ease: w,
                }),
                0
              ),
              s.add(
                punchgs.TweenLite.fromTo(
                  n,
                  g / 2e3,
                  { autoAlpha: 0 },
                  { autoAlpha: 1, force3D: "auto", ease: w }
                ),
                g / 2e3
              );
            break;
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
            var Z =
                "blur(" +
                (0 <= jQuery.inArray(u, [9, 10])
                  ? 5
                  : 0 <= jQuery.inArray(u, [11, 12])
                  ? 10
                  : 0) +
                "px) grayscale(" +
                (0 <= jQuery.inArray(u, [5, 6, 7, 8]) ? 100 : 0) +
                "%) brightness(" +
                (0 <= jQuery.inArray(u, [7, 8]) ? 300 : 0) +
                "%)",
              H = "blur(0px) grayscale(0%) brightness(100%)";
            s.add(
              punchgs.TweenLite.fromTo(
                n,
                g / 1e3,
                { autoAlpha: 0, filter: Z, "-webkit-filter": Z },
                {
                  autoAlpha: 1,
                  filter: H,
                  "-webkit-filter": H,
                  force3D: "auto",
                  ease: w,
                }
              ),
              0
            ),
              0 <= jQuery.inArray(u, [6, 8, 10]) &&
                s.add(
                  punchgs.TweenLite.fromTo(
                    r,
                    g / 1e3,
                    { autoAlpha: 1, filter: H, "-webkit-filter": H },
                    {
                      autoAlpha: 0,
                      force3D: "auto",
                      ease: w,
                      filter: Z,
                      "-webkit-filter": Z,
                    }
                  ),
                  0
                );
        }
        s.add(
          punchgs.TweenLite.set(n.find(".defaultimg"), { autoAlpha: 1 }),
          0
        ),
          s.add(
            punchgs.TweenLite.set(r.find("defaultimg"), { autoAlpha: 1 }),
            0
          );
      }
      if (26 == a) {
        (g = 0),
          s.add(
            punchgs.TweenLite.fromTo(
              n,
              g / 1e3,
              { autoAlpha: 0 },
              { autoAlpha: 1, force3D: "auto", ease: w }
            ),
            0
          ),
          s.add(
            punchgs.TweenLite.to(r, g / 1e3, {
              autoAlpha: 0,
              force3D: "auto",
              ease: w,
            }),
            0
          ),
          s.add(
            punchgs.TweenLite.set(n.find(".defaultimg"), { autoAlpha: 1 }),
            0
          ),
          s.add(
            punchgs.TweenLite.set(r.find("defaultimg"), { autoAlpha: 1 }),
            0
          );
      }
      if (12 == a || 13 == a || 14 == a || 15 == a) {
        (g = g) > l.delay && (g = l.delay),
          setTimeout(function () {
            punchgs.TweenLite.set(r.find(".defaultimg"), { autoAlpha: 0 });
          }, 100);
        var J = l.width,
          N = l.height,
          R = n.find(".slotslide, .defaultvid"),
          q = 0,
          B = 0,
          E = 1,
          F = 1,
          G = 1,
          K = g / 1e3,
          U = K;
        ("fullwidth" != l.sliderLayout && "fullscreen" != l.sliderLayout) ||
          ((J = R.width()), (N = R.height())),
          12 == a
            ? (q = J)
            : 15 == a
            ? (q = 0 - J)
            : 13 == a
            ? (B = N)
            : 14 == a && (B = 0 - N),
          1 == u && (E = 0),
          2 == u && (E = 0),
          3 == u && (K = g / 1300),
          (4 != u && 5 != u) || (F = 0.6),
          6 == u && (F = 1.4),
          (5 != u && 6 != u) || ((G = 1.4), (B = q = N = J = E = 0)),
          6 == u && (G = 0.6);
        7 == u && (N = J = 0);
        var W = n.find(".slotslide"),
          $ = r.find(".slotslide, .defaultvid");
        if (
          (s.add(punchgs.TweenLite.set(i, { zIndex: 15 }), 0),
          s.add(punchgs.TweenLite.set(o, { zIndex: 20 }), 0),
          8 == u
            ? (s.add(punchgs.TweenLite.set(i, { zIndex: 20 }), 0),
              s.add(punchgs.TweenLite.set(o, { zIndex: 15 }), 0),
              s.add(
                punchgs.TweenLite.set(W, {
                  left: 0,
                  top: 0,
                  scale: 1,
                  opacity: 1,
                  rotation: 0,
                  ease: w,
                  force3D: "auto",
                }),
                0
              ))
            : s.add(
                punchgs.TweenLite.from(W, K, {
                  left: q,
                  top: B,
                  scale: G,
                  opacity: E,
                  rotation: l.rotate,
                  ease: w,
                  force3D: "auto",
                }),
                0
              ),
          (4 != u && 5 != u) || (N = J = 0),
          1 != u)
        )
          switch (a) {
            case 12:
              s.add(
                punchgs.TweenLite.to($, U, {
                  left: 0 - J + "px",
                  force3D: "auto",
                  scale: F,
                  opacity: E,
                  rotation: l.rotate,
                  ease: m,
                }),
                0
              );
              break;
            case 15:
              s.add(
                punchgs.TweenLite.to($, U, {
                  left: J + "px",
                  force3D: "auto",
                  scale: F,
                  opacity: E,
                  rotation: l.rotate,
                  ease: m,
                }),
                0
              );
              break;
            case 13:
              s.add(
                punchgs.TweenLite.to($, U, {
                  top: 0 - N + "px",
                  force3D: "auto",
                  scale: F,
                  opacity: E,
                  rotation: l.rotate,
                  ease: m,
                }),
                0
              );
              break;
            case 14:
              s.add(
                punchgs.TweenLite.to($, U, {
                  top: N + "px",
                  force3D: "auto",
                  scale: F,
                  opacity: E,
                  rotation: l.rotate,
                  ease: m,
                }),
                0
              );
          }
      }
      if (16 == a) {
        T = new punchgs.TimelineLite();
        s.add(
          punchgs.TweenLite.set(i, { position: "absolute", "z-index": 20 }),
          0
        ),
          s.add(
            punchgs.TweenLite.set(o, { position: "absolute", "z-index": 15 }),
            0
          ),
          i.wrapInner(
            '<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'
          ),
          i.find(".tp-half-one").clone(!0).appendTo(i).addClass("tp-half-two"),
          i.find(".tp-half-two").removeClass("tp-half-one");
        (J = l.width), (N = l.height);
        "on" == l.autoHeight && (N = e.height()),
          i
            .find(".tp-half-one .defaultimg")
            .wrap(
              '<div class="tp-papercut" style="width:' +
                J +
                "px;height:" +
                N +
                'px;"></div>'
            ),
          i
            .find(".tp-half-two .defaultimg")
            .wrap(
              '<div class="tp-papercut" style="width:' +
                J +
                "px;height:" +
                N +
                'px;"></div>'
            ),
          i
            .find(".tp-half-two .defaultimg")
            .css({ position: "absolute", top: "-50%" }),
          i
            .find(".tp-half-two .tp-caption")
            .wrapAll(
              '<div style="position:absolute;top:-50%;left:0px;"></div>'
            ),
          s.add(
            punchgs.TweenLite.set(i.find(".tp-half-two"), {
              width: J,
              height: N,
              overflow: "hidden",
              zIndex: 15,
              position: "absolute",
              top: N / 2,
              left: "0px",
              transformPerspective: 600,
              transformOrigin: "center bottom",
            }),
            0
          ),
          s.add(
            punchgs.TweenLite.set(i.find(".tp-half-one"), {
              width: J,
              height: N / 2,
              overflow: "visible",
              zIndex: 10,
              position: "absolute",
              top: "0px",
              left: "0px",
              transformPerspective: 600,
              transformOrigin: "center top",
            }),
            0
          );
        i.find(".defaultimg");
        var tt = Math.round(20 * Math.random() - 10),
          et = Math.round(20 * Math.random() - 10),
          ot = Math.round(20 * Math.random() - 10),
          at = 0.4 * Math.random() - 0.2,
          it = 0.4 * Math.random() - 0.2,
          nt = 1 * Math.random() + 1,
          rt = 1 * Math.random() + 1,
          st = 0.3 * Math.random() + 0.3;
        s.add(
          punchgs.TweenLite.set(i.find(".tp-half-one"), { overflow: "hidden" }),
          0
        ),
          s.add(
            punchgs.TweenLite.fromTo(
              i.find(".tp-half-one"),
              g / 800,
              {
                width: J,
                height: N / 2,
                position: "absolute",
                top: "0px",
                left: "0px",
                force3D: "auto",
                transformOrigin: "center top",
              },
              {
                scale: nt,
                rotation: tt,
                y: 0 - N - N / 4,
                autoAlpha: 0,
                ease: w,
              }
            ),
            0
          ),
          s.add(
            punchgs.TweenLite.fromTo(
              i.find(".tp-half-two"),
              g / 800,
              {
                width: J,
                height: N,
                overflow: "hidden",
                position: "absolute",
                top: N / 2,
                left: "0px",
                force3D: "auto",
                transformOrigin: "center bottom",
              },
              {
                scale: rt,
                rotation: et,
                y: N + N / 4,
                ease: w,
                autoAlpha: 0,
                onComplete: function () {
                  punchgs.TweenLite.set(i, {
                    position: "absolute",
                    "z-index": 15,
                  }),
                    punchgs.TweenLite.set(o, {
                      position: "absolute",
                      "z-index": 20,
                    }),
                    0 < i.find(".tp-half-one").length &&
                      (i.find(".tp-half-one .defaultimg").unwrap(),
                      i.find(".tp-half-one .slotholder").unwrap()),
                    i.find(".tp-half-two").remove();
                },
              }
            ),
            0
          ),
          T.add(
            punchgs.TweenLite.set(n.find(".defaultimg"), { autoAlpha: 1 }),
            0
          ),
          null != i.html() &&
            s.add(
              punchgs.TweenLite.fromTo(
                o,
                (g - 200) / 1e3,
                {
                  scale: st,
                  x: (l.width / 4) * at,
                  y: (N / 4) * it,
                  rotation: ot,
                  force3D: "auto",
                  transformOrigin: "center center",
                  ease: m,
                },
                { autoAlpha: 1, scale: 1, x: 0, y: 0, rotation: 0 }
              ),
              0
            ),
          s.add(T, 0);
      }
      if (
        (17 == a &&
          n.find(".slotslide").each(function (t) {
            var e = jQuery(this);
            s.add(
              punchgs.TweenLite.fromTo(
                e,
                g / 800,
                {
                  opacity: 0,
                  rotationY: 0,
                  scale: 0.9,
                  rotationX: -110,
                  force3D: "auto",
                  transformPerspective: 600,
                  transformOrigin: "center center",
                },
                {
                  opacity: 1,
                  top: 0,
                  left: 0,
                  scale: 1,
                  rotation: 0,
                  rotationX: 0,
                  force3D: "auto",
                  rotationY: 0,
                  ease: w,
                  delay: 0.06 * t,
                }
              ),
              0
            );
          }),
        18 == a &&
          n.find(".slotslide").each(function (t) {
            var e = jQuery(this);
            s.add(
              punchgs.TweenLite.fromTo(
                e,
                g / 500,
                {
                  autoAlpha: 0,
                  rotationY: 110,
                  scale: 0.9,
                  rotationX: 10,
                  force3D: "auto",
                  transformPerspective: 600,
                  transformOrigin: "center center",
                },
                {
                  autoAlpha: 1,
                  top: 0,
                  left: 0,
                  scale: 1,
                  rotation: 0,
                  rotationX: 0,
                  force3D: "auto",
                  rotationY: 0,
                  ease: w,
                  delay: 0.06 * t,
                }
              ),
              0
            );
          }),
        19 == a || 22 == a)
      ) {
        T = new punchgs.TimelineLite();
        s.add(punchgs.TweenLite.set(i, { zIndex: 20 }), 0),
          s.add(punchgs.TweenLite.set(o, { zIndex: 20 }), 0),
          setTimeout(function () {
            r.find(".defaultimg").css({ opacity: 0 });
          }, 100);
        var lt = 90,
          dt = ((E = 1), "center center ");
        1 == h && (lt = -90),
          19 == a
            ? ((dt = dt + "-" + l.height / 2), (E = 0))
            : (dt += l.height / 2),
          punchgs.TweenLite.set(e, {
            transformStyle: "flat",
            backfaceVisibility: "hidden",
            transformPerspective: 600,
          }),
          n.find(".slotslide").each(function (t) {
            var e = jQuery(this);
            T.add(
              punchgs.TweenLite.fromTo(
                e,
                g / 1e3,
                {
                  transformStyle: "flat",
                  backfaceVisibility: "hidden",
                  left: 0,
                  rotationY: l.rotate,
                  z: 10,
                  top: 0,
                  scale: 1,
                  force3D: "auto",
                  transformPerspective: 600,
                  transformOrigin: dt,
                  rotationX: lt,
                },
                {
                  left: 0,
                  rotationY: 0,
                  top: 0,
                  z: 0,
                  scale: 1,
                  force3D: "auto",
                  rotationX: 0,
                  delay: (50 * t) / 1e3,
                  ease: w,
                }
              ),
              0
            ),
              T.add(
                punchgs.TweenLite.to(e, 0.1, {
                  autoAlpha: 1,
                  delay: (50 * t) / 1e3,
                }),
                0
              ),
              s.add(T);
          }),
          r.find(".slotslide").each(function (t) {
            var e = jQuery(this),
              o = -90;
            1 == h && (o = 90),
              T.add(
                punchgs.TweenLite.fromTo(
                  e,
                  g / 1e3,
                  {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    autoAlpha: 1,
                    rotationY: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: dt,
                    rotationX: 0,
                  },
                  {
                    autoAlpha: 1,
                    rotationY: l.rotate,
                    top: 0,
                    z: 10,
                    scale: 1,
                    rotationX: o,
                    delay: (50 * t) / 1e3,
                    force3D: "auto",
                    ease: m,
                  }
                ),
                0
              ),
              s.add(T);
          }),
          s.add(punchgs.TweenLite.set(i, { zIndex: 18 }), 0);
      }
      if (20 == a) {
        if (
          (setTimeout(function () {
            r.find(".defaultimg").css({ opacity: 0 });
          }, 100),
          1 == h)
        ) {
          var ht = -l.width;
          (lt = 80), (dt = "20% 70% -" + l.height / 2);
        } else (ht = l.width), (lt = -80), (dt = "80% 70% -" + l.height / 2);
        n.find(".slotslide").each(function (t) {
          var e = jQuery(this),
            o = (50 * t) / 1e3;
          s.add(
            punchgs.TweenLite.fromTo(
              e,
              g / 1e3,
              {
                left: ht,
                rotationX: 40,
                z: -600,
                opacity: E,
                top: 0,
                scale: 1,
                force3D: "auto",
                transformPerspective: 600,
                transformOrigin: dt,
                transformStyle: "flat",
                rotationY: lt,
              },
              {
                left: 0,
                rotationX: 0,
                opacity: 1,
                top: 0,
                z: 0,
                scale: 1,
                rotationY: 0,
                delay: o,
                ease: w,
              }
            ),
            0
          );
        }),
          r.find(".slotslide").each(function (t) {
            var e = jQuery(this),
              o = (50 * t) / 1e3;
            if (((o = 0 < t ? o + g / 9e3 : 0), 1 != h))
              var a = -l.width / 2,
                i = 30,
                n = "20% 70% -" + l.height / 2;
            else (a = l.width / 2), (i = -30), (n = "80% 70% -" + l.height / 2);
            (m = punchgs.Power2.easeInOut),
              s.add(
                punchgs.TweenLite.fromTo(
                  e,
                  g / 1e3,
                  {
                    opacity: 1,
                    rotationX: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    left: 0,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: n,
                    transformStyle: "flat",
                    rotationY: 0,
                  },
                  {
                    opacity: 1,
                    rotationX: 20,
                    top: 0,
                    z: -600,
                    left: a,
                    force3D: "auto",
                    rotationY: i,
                    delay: o,
                    ease: m,
                  }
                ),
                0
              );
          });
      }
      if (21 == a || 25 == a) {
        setTimeout(function () {
          r.find(".defaultimg").css({ opacity: 0 });
        }, 100);
        (lt = 90), (ht = -l.width);
        var ft = -lt;
        if (1 == h)
          if (25 == a) {
            dt = "center top 0";
            lt = l.rotate;
          } else {
            dt = "left center 0";
            ft = l.rotate;
          }
        else if (((ht = l.width), (lt = -90), 25 == a)) {
          dt = "center bottom 0";
          (ft = -lt), (lt = l.rotate);
        } else {
          dt = "right center 0";
          ft = l.rotate;
        }
        n.find(".slotslide").each(function (t) {
          var e = jQuery(this),
            o = g / 1.5 / 3;
          s.add(
            punchgs.TweenLite.fromTo(
              e,
              (2 * o) / 1e3,
              {
                left: 0,
                transformStyle: "flat",
                rotationX: ft,
                z: 0,
                autoAlpha: 0,
                top: 0,
                scale: 1,
                force3D: "auto",
                transformPerspective: 1200,
                transformOrigin: dt,
                rotationY: lt,
              },
              {
                left: 0,
                rotationX: 0,
                top: 0,
                z: 0,
                autoAlpha: 1,
                scale: 1,
                rotationY: 0,
                force3D: "auto",
                delay: o / 1e3,
                ease: w,
              }
            ),
            0
          );
        }),
          1 != h
            ? ((ht = -l.width),
              (lt = 90),
              25 == a
                ? ((dt = "center top 0"), (ft = -lt), (lt = l.rotate))
                : ((dt = "left center 0"), (ft = l.rotate)))
            : ((ht = l.width),
              (lt = -90),
              25 == a
                ? ((dt = "center bottom 0"), (ft = -lt), (lt = l.rotate))
                : ((dt = "right center 0"), (ft = l.rotate))),
          r.find(".slotslide").each(function (t) {
            var e = jQuery(this);
            s.add(
              punchgs.TweenLite.fromTo(
                e,
                g / 1e3,
                {
                  left: 0,
                  transformStyle: "flat",
                  rotationX: 0,
                  z: 0,
                  autoAlpha: 1,
                  top: 0,
                  scale: 1,
                  force3D: "auto",
                  transformPerspective: 1200,
                  transformOrigin: dt,
                  rotationY: 0,
                },
                {
                  left: 0,
                  rotationX: ft,
                  top: 0,
                  z: 0,
                  autoAlpha: 1,
                  force3D: "auto",
                  scale: 1,
                  rotationY: lt,
                  ease: m,
                }
              ),
              0
            );
          });
      }
      if (23 == a || 24 == a) {
        setTimeout(function () {
          r.find(".defaultimg").css({ opacity: 0 });
        }, 100);
        (lt = -90), (E = 1);
        if ((1 == h && (lt = 90), 23 == a)) {
          dt = "center center -" + l.width / 2;
          E = 0;
        } else dt = "center center " + l.width / 2;
        punchgs.TweenLite.set(e, {
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          perspective: 2500,
        }),
          n.find(".slotslide").each(function (t) {
            var e = jQuery(this);
            s.add(
              punchgs.TweenLite.fromTo(
                e,
                g / 1e3,
                {
                  left: 0,
                  rotationX: l.rotate,
                  force3D: "auto",
                  opacity: E,
                  top: 0,
                  scale: 1,
                  transformPerspective: 1200,
                  transformOrigin: dt,
                  rotationY: lt,
                },
                {
                  left: 0,
                  rotationX: 0,
                  autoAlpha: 1,
                  top: 0,
                  z: 0,
                  scale: 1,
                  rotationY: 0,
                  delay: (50 * t) / 500,
                  ease: w,
                }
              ),
              0
            );
          }),
          (lt = 90),
          1 == h && (lt = -90),
          r.find(".slotslide").each(function (t) {
            var e = jQuery(this);
            s.add(
              punchgs.TweenLite.fromTo(
                e,
                g / 1e3,
                {
                  left: 0,
                  rotationX: 0,
                  top: 0,
                  z: 0,
                  scale: 1,
                  force3D: "auto",
                  transformStyle: "flat",
                  transformPerspective: 1200,
                  transformOrigin: dt,
                  rotationY: 0,
                },
                {
                  left: 0,
                  rotationX: l.rotate,
                  top: 0,
                  scale: 1,
                  rotationY: lt,
                  delay: (50 * t) / 500,
                  ease: m,
                }
              ),
              0
            ),
              23 == a &&
                s.add(
                  punchgs.TweenLite.fromTo(
                    e,
                    g / 2e3,
                    { autoAlpha: 1 },
                    { autoAlpha: 0, delay: (50 * t) / 500 + g / 3e3, ease: m }
                  ),
                  0
                );
          });
      }
      return s;
    };
})(jQuery);
