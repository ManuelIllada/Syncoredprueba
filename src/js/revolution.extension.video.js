!(function (e) {
  "use strict";
  var I = jQuery.fn.revolution,
    _ = I.is_mobile(),
    S =
      (I.is_android(),
      {
        alias: "Video Min JS",
        name: "revolution.extensions.video.min.js",
        min_core: "5.4.8",
        version: "2.2.2",
      });
  function j(e) {
    return null == e
      ? -1
      : jQuery.isNumeric(e)
      ? e
      : 1 < e.split(":").length
      ? 60 * parseInt(e.split(":")[0], 0) + parseInt(e.split(":")[1], 0)
      : e;
  }
  jQuery.extend(!0, I, {
    preLoadAudio: function (e, a) {
      if ("stop" === I.compare_version(S).check) return !1;
      e.find(".tp-audiolayer").each(function () {
        var e = jQuery(this),
          t = {};
        0 === e.find("audio").length &&
          ((t.src = null != e.data("videomp4") ? e.data("videomp4") : ""),
          (t.pre = e.data("videopreload") || ""),
          void 0 === e.attr("id") &&
            e.attr("audio-layer-" + Math.round(199999 * Math.random())),
          (t.id = e.attr("id")),
          (t.status = "prepared"),
          (t.start = jQuery.now()),
          (t.waittime = 1e3 * e.data("videopreloadwait") || 5e3),
          ("auto" != t.pre &&
            "canplaythrough" != t.pre &&
            "canplay" != t.pre &&
            "progress" != t.pre) ||
            (void 0 === a.audioqueue && (a.audioqueue = []),
            a.audioqueue.push(t),
            I.manageVideoLayer(e, a)));
      });
    },
    preLoadAudioDone: function (a, e, i) {
      e.audioqueue &&
        0 < e.audioqueue.length &&
        jQuery.each(e.audioqueue, function (e, t) {
          a.data("videomp4") !== t.src ||
            (t.pre !== i && "auto" !== t.pre) ||
            (t.status = "loaded");
        });
    },
    resetVideo: function (e, t, a, i) {
      var o = e.data();
      switch (o.videotype) {
        case "youtube":
          o.player;
          try {
            if ("on" == o.forcerewind) {
              var d = -1 == (l = j(e.data("videostartat"))),
                n = 1 === o.bgvideo || 0 < e.find(".tp-videoposter").length;
              null != o.player &&
                ((l = -1 == l ? 0 : l),
                o.player.seekTo(l),
                o.player.pauseVideo());
            }
          } catch (e) {}
          0 == e.find(".tp-videoposter").length &&
            1 !== o.bgvideo &&
            !0 !== a &&
            punchgs.TweenLite.to(e.find("iframe"), 0.3, {
              autoAlpha: 1,
              display: "block",
              ease: punchgs.Power3.easeInOut,
            });
          break;
        case "vimeo":
          var r = e.data("vimeoplayer");
          try {
            if ("on" == o.forcerewind) {
              var l = j(o.videostartat);
              (d = -1 == l),
                (n = 1 === o.bgvideo || 0 < e.find(".tp-videoposter").length);
              ((0 !== (l = -1 == l ? 0 : l) && !d) || n) &&
                r.pause().then(function () {
                  r.setCurrentTime(l);
                });
            }
          } catch (e) {}
          0 == e.find(".tp-videoposter").length &&
            1 !== o.bgvideo &&
            !0 !== a &&
            punchgs.TweenLite.to(e.find("iframe"), 0.3, {
              autoAlpha: 1,
              display: "block",
              ease: punchgs.Power3.easeInOut,
            });
          break;
        case "html5":
          if (_ && 1 == o.disablevideoonmobile) return !1;
          var s = "html5" == o.audio ? "audio" : "video",
            u = e.find(s),
            p = u[0];
          if (
            (punchgs.TweenLite.to(u, 0.3, {
              autoAlpha: 1,
              display: "block",
              ease: punchgs.Power3.easeInOut,
            }),
            "on" == o.forcerewind && !e.hasClass("videoisplaying"))
          )
            try {
              l = j(o.videostartat);
              p.currentTime = -1 == l ? 0 : l;
            } catch (e) {}
          ("mute" == o.volume ||
            I.lastToggleState(e.videomutetoggledby) ||
            !0 === t.globalmute) &&
            (p.muted = !0);
      }
    },
    isVideoMuted: function (e, t) {
      var a = !1,
        i = e.data();
      switch (i.videotype) {
        case "youtube":
          try {
            a = i.player.isMuted();
          } catch (e) {}
          break;
        case "vimeo":
          try {
            "mute" == i.volume && (a = !0);
          } catch (e) {}
          break;
        case "html5":
          var o = "html5" == i.audio ? "audio" : "video";
          e.find(o)[0].muted && (a = !0);
      }
      return a;
    },
    muteVideo: function (e, t) {
      var a = e.data();
      switch (a.videotype) {
        case "youtube":
          try {
            a.player.mute();
          } catch (e) {}
          break;
        case "vimeo":
          try {
            var i = e.data("vimeoplayer");
            e.data("volume", "mute"), i.setVolume(0);
          } catch (e) {}
          break;
        case "html5":
          var o = "html5" == a.audio ? "audio" : "video";
          e.find(o)[0].muted = !0;
      }
    },
    unMuteVideo: function (e, t) {
      if (!0 !== t.globalmute) {
        var a = e.data();
        switch (a.videotype) {
          case "youtube":
            try {
              a.player.unMute();
            } catch (e) {}
            break;
          case "vimeo":
            try {
              var i = e.data("vimeoplayer");
              e.data("volume", "1"), i.setVolume(1);
            } catch (e) {}
            break;
          case "html5":
            var o = "html5" == a.audio ? "audio" : "video";
            e.find(o)[0].muted = !1;
        }
      }
    },
    stopVideo: function (e, t) {
      var a = e.data();
      switch (
        (t.leaveViewPortBasedStop || (t.lastplayedvideos = []),
        (t.leaveViewPortBasedStop = !1),
        a.videotype)
      ) {
        case "youtube":
          try {
            var i = a.player;
            if (2 === i.getPlayerState() || 5 === i.getPlayerState()) return;
            i.pauseVideo(),
              (a.youtubepausecalled = !0),
              setTimeout(function () {
                a.youtubepausecalled = !1;
              }, 80);
          } catch (e) {
            console.log("Issue at YouTube Video Pause:"), console.log(e);
          }
          break;
        case "vimeo":
          try {
            e.data("vimeoplayer").pause(),
              (a.vimeopausecalled = !0),
              setTimeout(function () {
                a.vimeopausecalled = !1;
              }, 80);
          } catch (e) {
            console.log("Issue at Vimeo Video Pause:"), console.log(e);
          }
          break;
        case "html5":
          var o = "html5" == a.audio ? "audio" : "video",
            d = e.find(o),
            n = d[0];
          null != d && null != n && n.pause();
      }
    },
    playVideo: function (a, i) {
      clearTimeout(a.data("videoplaywait"));
      var e = a.data();
      switch (e.videotype) {
        case "youtube":
          if (0 == a.find("iframe").length)
            a.append(a.data("videomarkup")), O(a, i, !0);
          else if (null != e.player.playVideo) {
            var t = j(a.data("videostartat")),
              o = e.player.getCurrentTime();
            1 == a.data("nextslideatend-triggered") &&
              ((o = -1), a.data("nextslideatend-triggered", 0)),
              -1 != t && o < t && e.player.seekTo(t),
              !0 !== e.youtubepausecalled && e.player.playVideo();
          } else
            a.data(
              "videoplaywait",
              setTimeout(function () {
                !0 !== e.youtubepausecalled && I.playVideo(a, i);
              }, 50)
            );
          break;
        case "vimeo":
          if (0 == a.find("iframe").length)
            a.removeData("vimeoplayer"),
              a.append(a.data("videomarkup")),
              O(a, i, !0);
          else if (a.hasClass("rs-apiready")) {
            var d,
              n = a.find("iframe").attr("id");
            a.data("vimeoplayer")
              ? (d = a.data("vimeoplayer"))
              : ((d = new Vimeo.Player(n)), a.data("vimeoplayer", d)),
              d.getPaused()
                ? setTimeout(function () {
                    var e = j(a.data("videostartat")),
                      t = a.data("currenttime");
                    t || (t = 0),
                      1 == a.data("nextslideatend-triggered") &&
                        ((t = -1), a.data("nextslideatend-triggered", 0)),
                      -1 != e && t < e && d.setCurrentTime(e),
                      d.play();
                  }, 510)
                : a.data(
                    "videoplaywait",
                    setTimeout(function () {
                      !0 !== e.vimeopausecalled && I.playVideo(a, i);
                    }, 50)
                  );
          } else
            a.data(
              "videoplaywait",
              setTimeout(function () {
                !0 !== e.vimeopausecalled && I.playVideo(a, i);
              }, 50)
            );
          break;
        case "html5":
          var r = "html5" == e.audio ? "audio" : "video",
            l = a.find(r),
            s = l[0];
          if (1 != l.parent().data("metaloaded"))
            A(
              s,
              "loadedmetadata",
              (function (e) {
                I.resetVideo(e, i), s.play();
                var t = j(e.data("videostartat")),
                  a = s.currentTime;
                1 == e.data("nextslideatend-triggered") &&
                  ((a = -1), e.data("nextslideatend-triggered", 0)),
                  -1 != t && a < t && (s.currentTime = t);
              })(a)
            );
          else {
            s.play();
            (t = j(a.data("videostartat"))), (o = s.currentTime);
            1 == a.data("nextslideatend-triggered") &&
              ((o = -1), a.data("nextslideatend-triggered", 0)),
              -1 != t && o < t && (s.currentTime = t);
          }
      }
    },
    isVideoPlaying: function (a, e) {
      var i = !1;
      return (
        null != e.playingvideos &&
          jQuery.each(e.playingvideos, function (e, t) {
            a.attr("id") == t.attr("id") && (i = !0);
          }),
        i
      );
    },
    removeMediaFromList: function (e, t) {
      V(e, t);
    },
    prepareCoveredVideo: function (e, t) {
      if (
        (!t.hasClass("tp-caption") || t.hasClass("coverscreenvideo")) &&
        (void 0 === t.data("vimeoid") || void 0 !== t.data("vimeoplayerloaded"))
      ) {
        var a = {};
        (a.ifr = t.find("iframe, video")),
          (a.asp = t.data("aspectratio")),
          (a.wa = a.asp.split(":")[0]),
          (a.ha = a.asp.split(":")[1]),
          (a.vd = a.wa / a.ha);
        var i =
          "carousel" !== e.sliderType
            ? e.conw
            : t.closest(".tp-revslider-slidesli").width();
        if (0 === i || 0 === e.conh)
          return (
            I.setSize(e),
            clearTimeout(a.ifr.data("resizelistener")),
            void a.ifr.data(
              "resizelistener",
              setTimeout(function () {
                I.prepareCoveredVideo(e, t);
              }, 100)
            )
          );
        var o = i / e.conh,
          d = (o / a.vd) * 100,
          n = (a.vd / o) * 100;
        o > a.vd
          ? punchgs.TweenLite.set(a.ifr, {
              height: d + "%",
              width: "100%",
              top: -(d - 100) / 2 + "%",
              left: "0px",
              position: "absolute",
            })
          : punchgs.TweenLite.set(a.ifr, {
              width: n + "%",
              height: "100%",
              left: -(n - 100) / 2 + "%",
              top: "0px",
              position: "absolute",
            }),
          a.ifr.hasClass("resizelistener") ||
            (a.ifr.addClass("resizelistener"),
            jQuery(window).resize(function () {
              I.prepareCoveredVideo(e, t),
                clearTimeout(a.ifr.data("resizelistener")),
                a.ifr.data(
                  "resizelistener",
                  setTimeout(function () {
                    I.prepareCoveredVideo(e, t);
                  }, 90)
                );
            }));
      }
    },
    checkVideoApis: function (e, t, a) {
      location.protocol;
      if (
        ((null != e.data("ytid") ||
          (0 < e.find("iframe").length &&
            0 <
              e.find("iframe").attr("src").toLowerCase().indexOf("youtube"))) &&
          (t.youtubeapineeded = !0),
        (null != e.data("ytid") ||
          (0 < e.find("iframe").length &&
            0 <
              e.find("iframe").attr("src").toLowerCase().indexOf("youtube"))) &&
          0 == a.addedyt)
      ) {
        (t.youtubestarttime = jQuery.now()), (a.addedyt = 1);
        var i = document.createElement("script");
        i.src = "https://www.youtube.com/iframe_api";
        var o = document.getElementsByTagName("script")[0],
          d = !0;
        jQuery("head")
          .find("*")
          .each(function () {
            "https://www.youtube.com/iframe_api" == jQuery(this).attr("src") &&
              (d = !1);
          }),
          d && o.parentNode.insertBefore(i, o);
      }
      if (
        ((null != e.data("vimeoid") ||
          (0 < e.find("iframe").length &&
            0 < e.find("iframe").attr("src").toLowerCase().indexOf("vimeo"))) &&
          (t.vimeoapineeded = !0),
        (null != e.data("vimeoid") ||
          (0 < e.find("iframe").length &&
            0 < e.find("iframe").attr("src").toLowerCase().indexOf("vimeo"))) &&
          0 == a.addedvim)
      ) {
        (t.vimeostarttime = jQuery.now()), (a.addedvim = 1);
        var n = document.createElement("script");
        (o = document.getElementsByTagName("script")[0]), (d = !0);
        (n.src = "https://player.vimeo.com/api/player.js"),
          jQuery("head")
            .find("*")
            .each(function () {
              "https://player.vimeo.com/api/player.js" ==
                jQuery(this).attr("src") && (d = !1);
            }),
          d && o.parentNode.insertBefore(n, o);
      }
      return a;
    },
    manageVideoLayer: function (i, o, e, t) {
      if ("stop" === I.compare_version(S).check) return !1;
      var a = i.data(),
        d = a.videoattributes,
        n = a.ytid,
        r = a.vimeoid,
        l =
          "auto" === a.videopreload ||
          "canplay" === a.videopreload ||
          "canplaythrough" === a.videopreload ||
          "progress" === a.videopreload
            ? "auto"
            : a.videopreload,
        s = a.videomp4,
        u = a.videowebm,
        p = a.videoogv,
        v = a.allowfullscreenvideo,
        c = a.videocontrols,
        m = "http",
        g =
          "loop" == a.videoloop
            ? "loop"
            : "loopandnoslidestop" == a.videoloop
            ? "loop"
            : "",
        y =
          null != s || null != u
            ? "html5"
            : null != n && 1 < String(n).length
            ? "youtube"
            : null != r && 1 < String(r).length
            ? "vimeo"
            : "none",
        f = "html5" == a.audio ? "audio" : "video",
        h =
          "html5" == y && 0 == i.find(f).length
            ? "html5"
            : "youtube" == y && 0 == i.find("iframe").length
            ? "youtube"
            : "vimeo" == y && 0 == i.find("iframe").length
            ? "vimeo"
            : "none";
      switch (((g = !0 === a.nextslideatend ? "" : g), (a.videotype = y), h)) {
        case "html5":
          "controls" != c && (c = "");
          f = "video";
          "html5" == a.audio && ((f = "audio"), i.addClass("tp-audio-html5"));
          var b = "";
          "video" === f &&
            (I.is_mobile() || I.isSafari11()) &&
            ("on" === a.autoplay || "true" === a.autoplay || !0 === a.autoplay
              ? (b = "muted playsinline autoplay")
              : (1 != a.videoinline &&
                  "true" !== a.videoinline &&
                  1 !== a.videoinline) ||
                (b += " playsinline"));
          var w =
            "<" +
            f +
            " " +
            b +
            ' style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" ' +
            g +
            ' preload="' +
            l +
            '">';
          "auto" == l && (o.mediapreload = !0),
            "video" === f
              ? (null != u &&
                  "firefox" == I.get_browser().toLowerCase() &&
                  (w = w + '<source src="' + u + '" type="video/webm" />'),
                null != s &&
                  (w = w + '<source src="' + s + '" type="video/mp4" />'),
                null != p &&
                  (w = w + '<source src="' + p + '" type="video/ogg" />'))
              : "audio" === f &&
                (null != s &&
                  (w = w + '<source src="' + s + '" type="audio/mpeg" />'),
                null != p &&
                  (w = w + '<source src="' + p + '" type="audio/ogg" />')),
            (w = w + "</" + f + ">");
          var T = "";
          ("true" !== v && !0 !== v) ||
            (T =
              '<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>'),
            "controls" == c &&
              (w =
                w +
                '<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>' +
                T +
                "</div>"),
            i.data("videomarkup", w),
            i.append(w),
            ((_ && 1 == i.data("disablevideoonmobile")) || I.isIE(8)) &&
              i.find(f).remove(),
            i.find(f).each(function (e) {
              var t,
                a = jQuery(this);
              a.parent().hasClass("html5vid") ||
                a.wrap(
                  '<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>'
                ),
                1 != a.parent().data("metaloaded") &&
                  A(
                    this,
                    "loadedmetadata",
                    (Q((t = i), o), void I.resetVideo(t, o))
                  );
            });
          break;
        case "youtube":
          (m = "https"),
            "none" == c &&
              -1 ==
                (d = d.replace("controls=1", "controls=0"))
                  .toLowerCase()
                  .indexOf("controls") &&
              (d += "&controls=0"),
            (!0 === a.videoinline ||
              "true" === a.videoinline ||
              1 === a.videoinline ||
              i.hasClass("rs-background-video-layer") ||
              "on" === i.data("autoplay")) &&
              (d += "&playsinline=1");
          var k = j(i.data("videostartat")),
            x = j(i.data("videoendat"));
          -1 != k && (d = d + "&start=" + k), -1 != x && (d = d + "&end=" + x);
          var V = d.split("origin=" + m + "://"),
            L = "";
          1 < V.length
            ? ((L = V[0] + "origin=" + m + "://"),
              self.location.href.match(/www/gi) &&
                !V[1].match(/www/gi) &&
                (L += "www."),
              (L += V[1]))
            : (L = d);
          var C = "true" === v || !0 === v ? "allowfullscreen" : "";
          i.data(
            "videomarkup",
            '<iframe type="text/html" src="' +
              m +
              "://www.youtube-nocookie.com/embed/" +
              n +
              "?" +
              L +
              '" ' +
              C +
              ' width="100%" height="100%" style="opacity:0;width:100%;height:100%"></iframe>'
          );
          break;
        case "vimeo":
          (m = "https"),
            i.data(
              "videomarkup",
              '<iframe src="' +
                m +
                "://player.vimeo.com/video/" +
                r +
                "?" +
                d +
                '" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="opacity:0;visibility:hidden;width:100%;height:100%"></iframe>'
            );
      }
      var P = _ && "on" == i.data("noposteronmobile");
      if (null != a.videoposter && 2 < a.videoposter.length && !P)
        0 == i.find(".tp-videoposter").length &&
          i.append(
            '<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url(' +
              a.videoposter +
              '); background-size:cover;background-position:center center;"></div>'
          ),
          0 == i.find("iframe").length &&
            i.find(".tp-videoposter").click(function () {
              if ((I.playVideo(i, o), _)) {
                if (1 == i.data("disablevideoonmobile")) return !1;
                punchgs.TweenLite.to(i.find(".tp-videoposter"), 0.3, {
                  autoAlpha: 0,
                  force3D: "auto",
                  ease: punchgs.Power3.easeInOut,
                }),
                  punchgs.TweenLite.to(i.find("iframe"), 0.3, {
                    autoAlpha: 1,
                    display: "block",
                    ease: punchgs.Power3.easeInOut,
                  });
              }
            });
      else {
        if (_ && 1 == i.data("disablevideoonmobile")) return !1;
        0 != i.find("iframe").length ||
          ("youtube" != y && "vimeo" != y) ||
          (i.removeData("vimeoplayer"),
          i.append(i.data("videomarkup")),
          O(i, o, !1));
      }
      "none" != i.data("dottedoverlay") &&
        null != i.data("dottedoverlay") &&
        1 != i.find(".tp-dottedoverlay").length &&
        i.append(
          '<div class="tp-dottedoverlay ' + i.data("dottedoverlay") + '"></div>'
        ),
        i.addClass("HasListener"),
        1 == i.data("bgvideo") &&
          (i.data("ytid")
            ? punchgs.TweenLite.set(i.find("iframe"), { opacity: 0 })
            : punchgs.TweenLite.set(i.find("video, iframe"), { autoAlpha: 0 }));
    },
  });
  var A = function (e, t, a) {
      e.addEventListener
        ? e.addEventListener(t, a, { capture: !1, passive: !0 })
        : e.attachEvent(t, a, { capture: !1, passive: !0 });
    },
    b = function (e, t, a) {
      var i = {};
      return (i.video = e), (i.videotype = t), (i.settings = a), i;
    },
    w = function (e, t) {
      if (1 == t.data("bgvideo") || 1 == t.data("forcecover")) {
        1 === t.data("forcecover") &&
          t.removeClass("fullscreenvideo").addClass("coverscreenvideo");
        var a = t.data("aspectratio");
        void 0 === a &&
          a.split(":").length <= 1 &&
          t.data("aspectratio", "16:9"),
          I.prepareCoveredVideo(e, t);
      }
    },
    O = function (r, o, e) {
      var l = r.data(),
        t = r.find("iframe"),
        a = "iframe" + Math.round(1e5 * Math.random() + 1),
        d = l.videoloop,
        n = "loopandnoslidestop" != d;
      if (
        ((d = "loop" == d || "loopandnoslidestop" == d),
        w(o, r),
        t.attr("id", a),
        e && r.data("startvideonow", !0),
        1 !== r.data("videolistenerexist"))
      )
        switch (l.videotype) {
          case "youtube":
            var s = new YT.Player(a, {
              events: {
                onStateChange: function (e) {
                  var t = r.closest(".tp-simpleresponsive"),
                    a = (l.videorate, r.data("videostart"), k());
                  if (e.data == YT.PlayerState.PLAYING)
                    punchgs.TweenLite.to(r.find(".tp-videoposter"), 0.3, {
                      autoAlpha: 0,
                      force3D: "auto",
                      ease: punchgs.Power3.easeInOut,
                    }),
                      punchgs.TweenLite.to(r.find("iframe"), 0.3, {
                        autoAlpha: 1,
                        display: "block",
                        ease: punchgs.Power3.easeInOut,
                      }),
                      "mute" == r.data("volume") ||
                      I.lastToggleState(r.data("videomutetoggledby")) ||
                      !0 === o.globalmute
                        ? s.mute()
                        : (s.unMute(),
                          s.setVolume(parseInt(r.data("volume"), 0) || 75)),
                      (o.videoplaying = !0),
                      x(r, o),
                      n ? o.c.trigger("stoptimer") : (o.videoplaying = !1),
                      o.c.trigger(
                        "revolution.slide.onvideoplay",
                        b(s, "youtube", r.data())
                      ),
                      I.toggleState(l.videotoggledby);
                  else {
                    if (0 == e.data && d) {
                      var i = j(r.data("videostartat"));
                      -1 != i && s.seekTo(i),
                        s.playVideo(),
                        I.toggleState(l.videotoggledby);
                    }
                    a ||
                      (0 != e.data && 2 != e.data) ||
                      !(
                        ("on" == r.data("showcoveronpause") &&
                          0 < r.find(".tp-videoposter").length) ||
                        (1 === r.data("bgvideo") &&
                          0 < r.find(".rs-fullvideo-cover").length)
                      ) ||
                      (1 === r.data("bgvideo")
                        ? punchgs.TweenLite.to(
                            r.find(".rs-fullvideo-cover"),
                            0.1,
                            {
                              autoAlpha: 1,
                              force3D: "auto",
                              ease: punchgs.Power3.easeInOut,
                            }
                          )
                        : punchgs.TweenLite.to(r.find(".tp-videoposter"), 0.1, {
                            autoAlpha: 1,
                            force3D: "auto",
                            ease: punchgs.Power3.easeInOut,
                          }),
                      punchgs.TweenLite.to(r.find("iframe"), 0.1, {
                        autoAlpha: 0,
                        ease: punchgs.Power3.easeInOut,
                      })),
                      -1 != e.data &&
                        3 != e.data &&
                        ((o.videoplaying = !1),
                        (o.tonpause = !1),
                        V(r, o),
                        t.trigger("starttimer"),
                        o.c.trigger(
                          "revolution.slide.onvideostop",
                          b(s, "youtube", r.data())
                        ),
                        (null != o.currentLayerVideoIsPlaying &&
                          o.currentLayerVideoIsPlaying.attr("id") !=
                            r.attr("id")) ||
                          I.unToggleState(l.videotoggledby)),
                      0 == e.data && 1 == r.data("nextslideatend")
                        ? (T(),
                          r.data("nextslideatend-triggered", 1),
                          o.c.revnext(),
                          V(r, o))
                        : (V(r, o),
                          (o.videoplaying = !1),
                          t.trigger("starttimer"),
                          o.c.trigger(
                            "revolution.slide.onvideostop",
                            b(s, "youtube", r.data())
                          ),
                          (null != o.currentLayerVideoIsPlaying &&
                            o.currentLayerVideoIsPlaying.attr("id") !=
                              r.attr("id")) ||
                            I.unToggleState(l.videotoggledby));
                  }
                },
                onReady: function (e) {
                  var t,
                    a = I.is_mobile(),
                    i = r.hasClass("tp-videolayer");
                  if (a || I.isSafari11()) {
                    var o = i && "off" !== r.data("autoplay");
                    if (r.hasClass("rs-background-video-layer") || o)
                      (a && i) ||
                        ((t = !0),
                        s.setVolume(0),
                        r.data("volume", "mute"),
                        s.mute(),
                        clearTimeout(r.data("mobilevideotimr")),
                        r.data(
                          "mobilevideotimr",
                          setTimeout(function () {
                            s.playVideo();
                          }, 500)
                        ));
                  }
                  t || "mute" != r.data("volume") || (s.setVolume(0), s.mute());
                  var d = l.videorate;
                  r.data("videostart");
                  if (
                    (r.addClass("rs-apiready"),
                    null != d && e.target.setPlaybackRate(parseFloat(d)),
                    r.find(".tp-videoposter").unbind("click"),
                    r.find(".tp-videoposter").click(function () {
                      _ || s.playVideo();
                    }),
                    r.data("startvideonow"))
                  ) {
                    l.player.playVideo();
                    var n = j(r.data("videostartat"));
                    -1 != n && l.player.seekTo(n);
                  }
                  r.data("videolistenerexist", 1);
                },
              },
            });
            r.data("player", s);
            break;
          case "vimeo":
            for (
              var i, u = t.attr("src"), p = {}, v = u, c = /([^&=]+)=([^&]*)/g;
              (i = c.exec(v));

            )
              p[decodeURIComponent(i[1])] = decodeURIComponent(i[2]);
            u = (u =
              null != p.player_id
                ? u.replace(p.player_id, a)
                : u + "&player_id=" + a).replace(/&api=0|&api=1/g, "");
            var m = I.is_mobile(),
              g = r.data("autoplay"),
              y = (r.data("volume"), m || I.isSafari11());
            r.hasClass("rs-background-video-layer");
            (g = "on" === g || "true" === g || !0 === g) &&
              y &&
              ((u +=
                "?autoplay=1&autopause=0&muted=1&background=1&playsinline=1"),
              r.data({ vimeoplaysinline: !0, volume: "mute" })),
              t.attr("src", u);
            (s = r.find("iframe")[0]), jQuery("#" + a);
            if (
              (r.data("vimeoplayer")
                ? (h = r.data("vimeoplayer"))
                : ((h = new Vimeo.Player(a)), r.data("vimeoplayer", h)),
              h.on("loaded", function (e) {
                var t = {};
                h.getVideoWidth().then(function (e) {
                  (t.width = e),
                    void 0 !== t.width &&
                      void 0 !== t.height &&
                      (r.data("aspectratio", t.width + ":" + t.height),
                      r.data("vimeoplayerloaded", !0),
                      w(o, r));
                }),
                  h.getVideoHeight().then(function (e) {
                    (t.height = e),
                      void 0 !== t.width &&
                        void 0 !== t.height &&
                        (r.data("aspectratio", t.width + ":" + t.height),
                        r.data("vimeoplayerloaded", !0),
                        w(o, r));
                  });
              }),
              r.addClass("rs-apiready"),
              h.on("play", function (e) {
                r.data("nextslidecalled", 0),
                  punchgs.TweenLite.to(r.find(".tp-videoposter"), 0.3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: punchgs.Power3.easeInOut,
                  }),
                  punchgs.TweenLite.to(r.find("iframe"), 0.3, {
                    autoAlpha: 1,
                    display: "block",
                    ease: punchgs.Power3.easeInOut,
                  }),
                  o.c.trigger(
                    "revolution.slide.onvideoplay",
                    b(h, "vimeo", r.data())
                  ),
                  (o.videoplaying = !0),
                  x(r, o),
                  n ? o.c.trigger("stoptimer") : (o.videoplaying = !1),
                  r.data("vimeoplaysinline") ||
                    ("mute" == r.data("volume") ||
                    I.lastToggleState(r.data("videomutetoggledby")) ||
                    !0 === o.globalmute
                      ? h.setVolume(0)
                      : h.setVolume(
                          parseInt(r.data("volume"), 0) / 100 || 0.75
                        ),
                    I.toggleState(l.videotoggledby));
              }),
              h.on("timeupdate", function (e) {
                var t = j(r.data("videoendat"));
                if (
                  (r.data("currenttime", e.seconds),
                  0 != t &&
                    Math.abs(t - e.seconds) < 1 &&
                    t > e.seconds &&
                    1 != r.data("nextslidecalled"))
                )
                  if (d) {
                    h.play();
                    var a = j(r.data("videostartat"));
                    -1 != a && h.setCurrentTime(a);
                  } else
                    1 == r.data("nextslideatend") &&
                      (r.data("nextslideatend-triggered", 1),
                      r.data("nextslidecalled", 1),
                      o.c.revnext()),
                      h.pause();
              }),
              h.on("ended", function (e) {
                V(r, o),
                  (o.videoplaying = !1),
                  o.c.trigger("starttimer"),
                  o.c.trigger(
                    "revolution.slide.onvideostop",
                    b(h, "vimeo", r.data())
                  ),
                  1 == r.data("nextslideatend") &&
                    (r.data("nextslideatend-triggered", 1), o.c.revnext()),
                  (null != o.currentLayerVideoIsPlaying &&
                    o.currentLayerVideoIsPlaying.attr("id") != r.attr("id")) ||
                    I.unToggleState(l.videotoggledby);
              }),
              h.on("pause", function (e) {
                (("on" == r.data("showcoveronpause") &&
                  0 < r.find(".tp-videoposter").length) ||
                  (1 === r.data("bgvideo") &&
                    0 < r.find(".rs-fullvideo-cover").length)) &&
                  (1 === r.data("bgvideo")
                    ? punchgs.TweenLite.to(r.find(".rs-fullvideo-cover"), 0.1, {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut,
                      })
                    : punchgs.TweenLite.to(r.find(".tp-videoposter"), 0.1, {
                        autoAlpha: 1,
                        force3D: "auto",
                        ease: punchgs.Power3.easeInOut,
                      }),
                  punchgs.TweenLite.to(r.find("iframe"), 0.1, {
                    autoAlpha: 0,
                    ease: punchgs.Power3.easeInOut,
                  })),
                  (o.videoplaying = !1),
                  (o.tonpause = !1),
                  V(r, o),
                  o.c.trigger("starttimer"),
                  o.c.trigger(
                    "revolution.slide.onvideostop",
                    b(h, "vimeo", r.data())
                  ),
                  (null != o.currentLayerVideoIsPlaying &&
                    o.currentLayerVideoIsPlaying.attr("id") != r.attr("id")) ||
                    I.unToggleState(l.videotoggledby);
              }),
              r.find(".tp-videoposter").unbind("click"),
              r.find(".tp-videoposter").click(function () {
                if (!_) return h.play(), !1;
              }),
              r.data("startvideonow"))
            )
              h.play(),
                -1 != (f = j(r.data("videostartat"))) && h.setCurrentTime(f);
            r.data("videolistenerexist", 1);
        }
      else {
        var f = j(r.data("videostartat"));
        switch (l.videotype) {
          case "youtube":
            e && (l.player.playVideo(), -1 != f && l.player.seekTo());
            break;
          case "vimeo":
            var h;
            if (e) (h = r.data("vimeoplayer")).play(), -1 != f && h.seekTo(f);
        }
      }
    },
    T = function () {
      document.exitFullscreen
        ? document.exitFullscreen()
        : document.mozCancelFullScreen
        ? document.mozCancelFullScreen()
        : document.webkitExitFullscreen && document.webkitExitFullscreen();
    },
    k = function () {
      try {
        if (void 0 !== window.fullScreen) return window.fullScreen;
        var e = 5;
        return (
          jQuery.browser.webkit &&
            /Apple Computer/.test(navigator.vendor) &&
            (e = 42),
          screen.width == window.innerWidth &&
            Math.abs(screen.height - window.innerHeight) < e
        );
      } catch (e) {}
    },
    Q = function (o, d, e) {
      if (_ && 1 == o.data("disablevideoonmobile")) return !1;
      var n = o.data(),
        t = "html5" == n.audio ? "audio" : "video",
        a = o.find(t),
        r = a[0],
        i = a.parent(),
        l = n.videoloop,
        s = "loopandnoslidestop" != l;
      if (
        ((l = "loop" == l || "loopandnoslidestop" == l),
        i.data("metaloaded", 1),
        1 != o.data("bgvideo") ||
          ("none" !== n.videoloop && !1 !== n.videoloop) ||
          (s = !1),
        null == a.attr("control") &&
          (0 != o.find(".tp-video-play-button").length ||
            _ ||
            o.append(
              '<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'
            ),
          o.find("video, .tp-poster, .tp-video-play-button").click(function () {
            o.hasClass("videoisplaying") ? r.pause() : r.play();
          })),
        1 == o.data("forcecover") ||
          o.hasClass("fullscreenvideo") ||
          1 == o.data("bgvideo"))
      )
        if (1 == o.data("forcecover") || 1 == o.data("bgvideo")) {
          i.addClass("fullcoveredvideo");
          var u = o.data("aspectratio");
          (void 0 !== u && 1 != u.split(":").length) ||
            o.data("aspectratio", "16:9"),
            I.prepareCoveredVideo(d, o);
        } else i.addClass("fullscreenvideo");
      var p = o.find(".tp-vid-play-pause")[0],
        v = o.find(".tp-vid-mute")[0],
        c = o.find(".tp-vid-full-screen")[0],
        m = o.find(".tp-seek-bar")[0],
        g = o.find(".tp-volume-bar")[0];
      null != p &&
        A(p, "click", function () {
          1 == r.paused ? r.play() : r.pause();
        }),
        null != v &&
          A(v, "click", function () {
            0 == r.muted
              ? ((r.muted = !0), (v.innerHTML = "Unmute"))
              : ((r.muted = !1), (v.innerHTML = "Mute"));
          }),
        null != c &&
          c &&
          A(c, "click", function () {
            r.requestFullscreen
              ? r.requestFullscreen()
              : r.mozRequestFullScreen
              ? r.mozRequestFullScreen()
              : r.webkitRequestFullscreen && r.webkitRequestFullscreen();
          }),
        null != m &&
          (A(m, "change", function () {
            var e = r.duration * (m.value / 100);
            r.currentTime = e;
          }),
          A(m, "mousedown", function () {
            o.addClass("seekbardragged"), r.pause();
          }),
          A(m, "mouseup", function () {
            o.removeClass("seekbardragged"), r.play();
          })),
        A(r, "canplaythrough", function () {
          I.preLoadAudioDone(o, d, "canplaythrough");
        }),
        A(r, "canplay", function () {
          I.preLoadAudioDone(o, d, "canplay");
        }),
        A(r, "progress", function () {
          I.preLoadAudioDone(o, d, "progress");
        }),
        A(r, "timeupdate", function () {
          var e = (100 / r.duration) * r.currentTime,
            t = j(o.data("videoendat")),
            a = r.currentTime;
          if (
            (null != m && (m.value = e),
            0 != t &&
              -1 != t &&
              Math.abs(t - a) <= 0.3 &&
              a < t &&
              1 != o.data("nextslidecalled"))
          )
            if (l) {
              r.play();
              var i = j(o.data("videostartat"));
              -1 != i && (r.currentTime = i);
            } else
              1 == o.data("nextslideatend") &&
                (o.data("nextslideatend-triggered", 1),
                o.data("nextslidecalled", 1),
                (d.just_called_nextslide_at_htmltimer = !0),
                d.c.revnext(),
                setTimeout(function () {
                  d.just_called_nextslide_at_htmltimer = !1;
                }, 1e3)),
                r.pause();
        }),
        null != g &&
          A(g, "change", function () {
            r.volume = g.value;
          }),
        A(r, "play", function () {
          o.data("nextslidecalled", 0);
          var e = o.data("volume");
          (e = null != e && "mute" != e ? parseFloat(e) / 100 : e),
            I.is_mobile() ||
              I.isSafari11() ||
              (!0 === d.globalmute ? (r.muted = !0) : (r.muted = !1),
              1 < e && (e /= 100),
              "mute" == e ? (r.muted = !0) : null != e && (r.volume = e)),
            o.addClass("videoisplaying");
          var t = "html5" == n.audio ? "audio" : "video";
          x(o, d),
            s && "audio" != t
              ? ((d.videoplaying = !0),
                d.c.trigger("stoptimer"),
                d.c.trigger("revolution.slide.onvideoplay", b(r, "html5", n)))
              : ((d.videoplaying = !1),
                "audio" != t && d.c.trigger("starttimer"),
                d.c.trigger("revolution.slide.onvideostop", b(r, "html5", n))),
            punchgs.TweenLite.to(o.find(".tp-videoposter"), 0.3, {
              autoAlpha: 0,
              force3D: "auto",
              ease: punchgs.Power3.easeInOut,
            }),
            punchgs.TweenLite.to(o.find(t), 0.3, {
              autoAlpha: 1,
              display: "block",
              ease: punchgs.Power3.easeInOut,
            });
          var a = o.find(".tp-vid-play-pause")[0],
            i = o.find(".tp-vid-mute")[0];
          null != a && (a.innerHTML = "Pause"),
            null != i && r.muted && (i.innerHTML = "Unmute"),
            I.toggleState(n.videotoggledby);
        }),
        A(r, "pause", function (e) {
          var t = "html5" == n.audio ? "audio" : "video";
          !k() &&
            0 < o.find(".tp-videoposter").length &&
            "on" == o.data("showcoveronpause") &&
            !o.hasClass("seekbardragged") &&
            (punchgs.TweenLite.to(o.find(".tp-videoposter"), 0.3, {
              autoAlpha: 1,
              force3D: "auto",
              ease: punchgs.Power3.easeInOut,
            }),
            punchgs.TweenLite.to(o.find(t), 0.3, {
              autoAlpha: 0,
              ease: punchgs.Power3.easeInOut,
            })),
            o.removeClass("videoisplaying"),
            (d.videoplaying = !1),
            V(o, d),
            "audio" != t && d.c.trigger("starttimer"),
            d.c.trigger(
              "revolution.slide.onvideostop",
              b(r, "html5", o.data())
            );
          var a = o.find(".tp-vid-play-pause")[0];
          null != a && (a.innerHTML = "Play"),
            (null != d.currentLayerVideoIsPlaying &&
              d.currentLayerVideoIsPlaying.attr("id") != o.attr("id")) ||
              I.unToggleState(n.videotoggledby);
        }),
        A(r, "ended", function () {
          T(),
            V(o, d),
            (d.videoplaying = !1),
            V(o, d),
            "audio" != t && d.c.trigger("starttimer"),
            d.c.trigger(
              "revolution.slide.onvideostop",
              b(r, "html5", o.data())
            ),
            !0 === o.data("nextslideatend") &&
              0 < r.currentTime &&
              (1 == !d.just_called_nextslide_at_htmltimer &&
                (o.data("nextslideatend-triggered", 1),
                d.c.revnext(),
                (d.just_called_nextslide_at_htmltimer = !0)),
              setTimeout(function () {
                d.just_called_nextslide_at_htmltimer = !1;
              }, 1500)),
            o.removeClass("videoisplaying");
        });
    },
    x = function (e, a) {
      null == a.playingvideos && (a.playingvideos = new Array()),
        e.data("stopallvideos") &&
          null != a.playingvideos &&
          0 < a.playingvideos.length &&
          ((a.lastplayedvideos = jQuery.extend(!0, [], a.playingvideos)),
          jQuery.each(a.playingvideos, function (e, t) {
            I.stopVideo(t, a);
          })),
        a.playingvideos.push(e),
        (a.currentLayerVideoIsPlaying = e);
    },
    V = function (e, t) {
      null != t.playingvideos &&
        0 <= jQuery.inArray(e, t.playingvideos) &&
        t.playingvideos.splice(jQuery.inArray(e, t.playingvideos), 1);
    };
})(jQuery);
