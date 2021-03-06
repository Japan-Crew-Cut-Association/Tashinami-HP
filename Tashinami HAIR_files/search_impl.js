google.maps.__gjsload__("search_impl", function (_) {
  var rib = function (a) {
      _.F(this, a, 4);
    },
    tib = function (a) {
      sib || (sib = { O: "sssM", ba: ["ss"] });
      var b = sib;
      return _.Hi.ib(a.Lb(), b);
    },
    uib = function (a, b) {
      a.K[2] = b;
    },
    X$ = function (a) {
      _.F(this, a, 3);
    },
    vib = function () {
      var a = _.Jj,
        b = _.Ri;
      this.j = _.Jf;
      this.h = _.Gk(_.vr, a, _.js + "/maps/api/js/LayersService.GetFeature", b);
    },
    yib = function (a, b, c) {
      var d = _.WB(new vib());
      c.Lr = (0, _.Na)(d.load, d);
      c.clickable = 0 != a.get("clickable");
      _.BCa(c, _.lI(b));
      var e = [];
      e.push(_.J.addListener(c, "click", (0, _.Na)(wib, null, a)));
      _.ob(["mouseover", "mouseout", "mousemove"], function (f) {
        e.push(_.J.addListener(c, f, (0, _.Na)(xib, null, a, f)));
      });
      e.push(
        _.J.addListener(a, "clickable_changed", function () {
          a.h.clickable = 0 != a.get("clickable");
        })
      );
      a.j = e;
    },
    wib = function (a, b, c, d, e) {
      var f = null;
      if (e && ((f = { status: e.getStatus() }), 0 == e.getStatus())) {
        f.location = _.Ok(e, 1)
          ? new _.De(_.Dd(e.getLocation(), 0), _.Dd(e.getLocation(), 1))
          : null;
        f.fields = {};
        for (var g = 0, h = _.Jd(e, 2); g < h; ++g) {
          var k = new _.rI(_.Hd(e, 2, g));
          f.fields[k.getKey()] = k.Sa();
        }
      }
      _.J.trigger(a, "click", b, c, d, f);
    },
    xib = function (a, b, c, d, e, f, g) {
      var h = null;
      f && (h = { title: f[1].title, snippet: f[1].snippet });
      _.J.trigger(a, b, c, d, e, h, g);
    },
    zib = function () {},
    sib;
  _.D(rib, _.E);
  rib.prototype.mb = function () {
    return _.G(this, 1);
  };
  _.D(X$, _.E);
  X$.prototype.getStatus = function () {
    return _.Cd(this, 0, -1);
  };
  X$.prototype.getLocation = function () {
    return new _.Im(this.K[1]);
  };
  vib.prototype.load = function (a, b) {
    function c(g) {
      g = new X$(g);
      b(g);
    }
    var d = new rib();
    d.K[0] = a.layerId.split("|")[0];
    d.K[1] = a.featureId;
    uib(d, _.Kd(_.Nd(this.j)));
    for (var e in a.parameters) {
      var f = new _.rI(_.Id(d, 3));
      f.K[0] = e;
      f.K[1] = a.parameters[e];
    }
    a = tib(d);
    this.h(a, c, c);
    return a;
  };
  vib.prototype.cancel = function () {
    throw Error("Not implemented");
  };
  zib.prototype.dv = function (a) {
    if (_.ji[15]) {
      var b = a.ye,
        c = (a.ye = a.getMap());
      b &&
        a.h &&
        (a.l
          ? ((b = b.__gm.j), b.set(b.get().kg(a.h)))
          : a.h &&
            _.XCa(a.h, b) &&
            (_.ob(a.j || [], _.J.removeListener), (a.j = null)));
      if (c) {
        var d = a.get("layerId"),
          e = a.get("spotlightDescription"),
          f = a.get("paintExperimentIds"),
          g = a.get("styler"),
          h = a.get("mapsApiLayer"),
          k = a.get("darkLaunch"),
          l = a.get("mapFeatures"),
          m = a.get("travelMapRequest"),
          p = a.get("searchPipeMetadata"),
          q = a.get("overlayLayer"),
          r = a.get("caseExperimentIds");
        b = new _.Rl();
        d = d.split("|");
        b.layerId = d[0];
        for (var t = 1; t < d.length; ++t) {
          var v = d[t].split(":");
          b.parameters[v[0]] = v[1];
        }
        e && (b.spotlightDescription = new _.Vn(e));
        f && (b.paintExperimentIds = f.slice(0));
        g && (b.styler = new _.Zl(g));
        m && (b.travelMapRequest = new _.qr(m));
        h && (b.mapsApiLayer = new _.Uk(h));
        l && (b.mapFeatures = l);
        p && (b.searchPipeMetadata = new _.on(p));
        q && (b.overlayLayer = new _.qn(q));
        r && (b.caseExperimentIds = r.slice(0));
        b.darkLaunch = !!k;
        a.h = b;
        a.l = a.get("renderOnBaseMap");
        a.l ? ((a = c.__gm.j), a.set(a.get().Ie(b))) : yib(a, c, b);
        _.Q(c, "Lg");
        _.O(c, 148282);
      }
    }
  };
  _.We("search_impl", new zib());
});
