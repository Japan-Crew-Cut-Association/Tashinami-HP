google.maps.__gjsload__("overlay", function (_) {
  var $t = function (a) {
      this.h = a;
    },
    Vla = function () {},
    au = function (a) {
      a.Uo = a.Uo || new Vla();
      return a.Uo;
    },
    Wla = function (a) {
      this.Ja = new _.Sh(function () {
        var b = a.Uo;
        if (a.getPanes()) {
          if (a.getProjection()) {
            if (!b.Vn && a.onAdd) a.onAdd();
            b.Vn = !0;
            a.draw();
          }
        } else {
          if (b.Vn)
            if (a.onRemove) a.onRemove();
            else a.remove();
          b.Vn = !1;
        }
      }, 0);
    },
    Xla = function (a, b) {
      function c() {
        return _.Th(e.Ja);
      }
      var d = au(a),
        e = d.Hm;
      e || (e = d.Hm = new Wla(a));
      _.ob(d.ab || [], _.J.removeListener);
      var f = (d.Xa = d.Xa || new _.Rr()),
        g = b.__gm;
      f.bindTo("zoom", g);
      f.bindTo("offset", g);
      f.bindTo("center", g, "projectionCenterQ");
      f.bindTo("projection", b);
      f.bindTo("projectionTopLeft", g);
      f = d.Ns = d.Ns || new $t(f);
      f.bindTo("zoom", g);
      f.bindTo("offset", g);
      f.bindTo("projection", b);
      f.bindTo("projectionTopLeft", g);
      a.bindTo("projection", f, "outProjection");
      a.bindTo("panes", g);
      d.ab = [
        _.J.addListener(a, "panes_changed", c),
        _.J.addListener(g, "zoom_changed", c),
        _.J.addListener(g, "offset_changed", c),
        _.J.addListener(b, "projection_changed", c),
        _.J.addListener(g, "projectioncenterq_changed", c),
      ];
      c();
      b instanceof _.jf && (_.Q(b, "Ox"), _.O(b, 148440));
    },
    ama = function (a) {
      if (a) {
        var b = a.getMap();
        if (Yla(a) !== b && b && b instanceof _.jf) {
          var c = b.__gm;
          c.overlayLayer
            ? (a.__gmop = new Zla(b, a, c.overlayLayer))
            : c.h.then(function (d) {
                d = d.Ma;
                var e = new bu(b, d);
                d.hb(e);
                c.overlayLayer = e;
                $la(a);
                ama(a);
              });
        }
      }
    },
    $la = function (a) {
      if (a) {
        var b = a.__gmop;
        b &&
          ((a.__gmop = null),
          b.h.unbindAll(),
          b.h.set("panes", null),
          b.h.set("projection", null),
          b.l.jg(b),
          b.j && ((b.j = !1), b.h.onRemove ? b.h.onRemove() : b.h.remove()));
      }
    },
    Yla = function (a) {
      return (a = a.__gmop) ? a.map : null;
    },
    Zla = function (a, b, c) {
      this.map = a;
      this.h = b;
      this.l = c;
      this.j = !1;
      _.Q(this.map, "Ox");
      _.O(this.map, 148440);
      c.tf(this);
    },
    bma = function (a, b) {
      a.h.get("projection") != b &&
        (a.h.bindTo("panes", a.map.__gm), a.h.set("projection", b));
    },
    bu = function (a, b) {
      this.m = a;
      this.l = b;
      this.h = null;
      this.j = [];
    };
  _.D($t, _.K);
  $t.prototype.changed = function (a) {
    "outProjection" != a &&
      ((a = !!(
        this.get("offset") &&
        this.get("projectionTopLeft") &&
        this.get("projection") &&
        _.he(this.get("zoom"))
      )),
      a == !this.get("outProjection") &&
        this.set("outProjection", a ? this.h : null));
  };
  var cu = {};
  _.D(Wla, _.K);
  cu.tf = function (a) {
    if (a) {
      var b = a.getMap();
      (au(a).us || null) !== b && (b && Xla(a, b), (au(a).us = b));
    }
  };
  cu.jg = function (a) {
    var b = au(a),
      c = b.Xa;
    c && c.unbindAll();
    (c = b.Ns) && c.unbindAll();
    a.unbindAll();
    a.set("panes", null);
    a.set("projection", null);
    b.ab && _.ob(b.ab, _.J.removeListener);
    b.ab = null;
    b.Hm && (b.Hm.Ja.Nd(), (b.Hm = null));
    delete au(a).us;
  };
  var du = {};
  Zla.prototype.draw = function () {
    this.j || ((this.j = !0), this.h.onAdd && this.h.onAdd());
    this.h.draw && this.h.draw();
  };
  bu.prototype.dispose = function () {};
  bu.prototype.Mc = function (a, b, c, d, e, f, g, h) {
    var k = (this.h = this.h || new _.sp(this.m, this.l, function () {}));
    k.Mc(a, b, c, d, e, f, g, h);
    a = _.A(this.j);
    for (b = a.next(); !b.done; b = a.next())
      (b = b.value), bma(b, k), b.draw();
  };
  bu.prototype.tf = function (a) {
    this.j.push(a);
    this.h && bma(a, this.h);
    this.l.refresh();
  };
  bu.prototype.jg = function (a) {
    _.zb(this.j, a);
  };
  du.tf = ama;
  du.jg = $la;
  _.We("overlay", {
    lq: function (a) {
      if (a) {
        (0, cu.jg)(a);
        (0, du.jg)(a);
        var b = a.getMap();
        b && (b instanceof _.jf ? (0, du.tf)(a) : (0, cu.tf)(a));
      }
    },
    preventMapHitsFrom: function (a) {
      _.cq(a, {
        onClick: function (b) {
          return _.Bp(b.event);
        },
        zd: function (b) {
          return _.yp(b);
        },
        ii: function (b) {
          return _.zp(b);
        },
        de: function (b) {
          return _.zp(b);
        },
        Fd: function (b) {
          return _.Ap(b);
        },
      }).fj(!0);
    },
    preventMapHitsAndGesturesFrom: function (a) {
      a.addEventListener("click", _.$e);
      a.addEventListener("contextmenu", _.$e);
      a.addEventListener("dblclick", _.$e);
      a.addEventListener("mousedown", _.$e);
      a.addEventListener("mousemove", _.$e);
      a.addEventListener("MSPointerDown", _.$e);
      a.addEventListener("pointerdown", _.$e);
      a.addEventListener("touchstart", _.$e);
      a.addEventListener("wheel", _.$e);
    },
  });
});
