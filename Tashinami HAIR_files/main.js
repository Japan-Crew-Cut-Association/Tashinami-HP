!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 187));
})([
  function (t, e, r) {
    var n = r(1),
      i = r(7),
      o = r(17),
      s = r(11),
      a = r(20),
      u = function (t, e, r) {
        var h,
          c,
          l,
          f,
          p = t & u.F,
          d = t & u.G,
          v = t & u.S,
          g = t & u.P,
          y = t & u.B,
          m = d ? n : v ? n[e] || (n[e] = {}) : (n[e] || {}).prototype,
          _ = d ? i : i[e] || (i[e] = {}),
          x = _.prototype || (_.prototype = {});
        for (h in (d && (r = e), r))
          (l = ((c = !p && m && void 0 !== m[h]) ? m : r)[h]),
            (f =
              y && c
                ? a(l, n)
                : g && "function" == typeof l
                ? a(Function.call, l)
                : l),
            m && s(m, h, l, t & u.U),
            _[h] != l && o(_, h, f),
            g && x[h] != l && (x[h] = l);
      };
    (n.core = i),
      (u.F = 1),
      (u.G = 2),
      (u.S = 4),
      (u.P = 8),
      (u.B = 16),
      (u.W = 32),
      (u.U = 64),
      (u.R = 128),
      (t.exports = u);
  },
  function (t, e) {
    var r = (t.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = r);
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, r) {
    var n = r(4);
    t.exports = function (t) {
      if (!n(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, e, r) {
    var n = r(62)("wks"),
      i = r(37),
      o = r(1).Symbol,
      s = "function" == typeof o;
    (t.exports = function (t) {
      return n[t] || (n[t] = (s && o[t]) || (s ? o : i)("Symbol." + t));
    }).store = n;
  },
  function (t, e, r) {
    var n = r(22),
      i = Math.min;
    t.exports = function (t) {
      return t > 0 ? i(n(t), 9007199254740991) : 0;
    };
  },
  function (t, e) {
    var r = (t.exports = { version: "2.6.11" });
    "number" == typeof __e && (__e = r);
  },
  function (t, e, r) {
    t.exports = !r(2)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (t, e, r) {
    var n = r(3),
      i = r(124),
      o = r(33),
      s = Object.defineProperty;
    e.f = r(8)
      ? Object.defineProperty
      : function (t, e, r) {
          if ((n(t), (e = o(e, !0)), n(r), i))
            try {
              return s(t, e, r);
            } catch (t) {}
          if ("get" in r || "set" in r)
            throw TypeError("Accessors not supported!");
          return "value" in r && (t[e] = r.value), t;
        };
  },
  function (t, e, r) {
    var n = r(29);
    t.exports = function (t) {
      return Object(n(t));
    };
  },
  function (t, e, r) {
    var n = r(1),
      i = r(17),
      o = r(16),
      s = r(37)("src"),
      a = r(192),
      u = ("" + a).split("toString");
    (r(7).inspectSource = function (t) {
      return a.call(t);
    }),
      (t.exports = function (t, e, r, a) {
        var h = "function" == typeof r;
        h && (o(r, "name") || i(r, "name", e)),
          t[e] !== r &&
            (h && (o(r, s) || i(r, s, t[e] ? "" + t[e] : u.join(String(e)))),
            t === n
              ? (t[e] = r)
              : a
              ? t[e]
                ? (t[e] = r)
                : i(t, e, r)
              : (delete t[e], i(t, e, r)));
      })(Function.prototype, "toString", function () {
        return ("function" == typeof this && this[s]) || a.call(this);
      });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(2),
      o = r(29),
      s = /"/g,
      a = function (t, e, r, n) {
        var i = String(o(t)),
          a = "<" + e;
        return (
          "" !== r &&
            (a += " " + r + '="' + String(n).replace(s, "&quot;") + '"'),
          a + ">" + i + "</" + e + ">"
        );
      };
    t.exports = function (t, e) {
      var r = {};
      (r[t] = e(a)),
        n(
          n.P +
            n.F *
              i(function () {
                var e = ""[t]('"');
                return e !== e.toLowerCase() || e.split('"').length > 3;
              }),
          "String",
          r
        );
    };
  },
  function (t, e, r) {
    (function (e) {
      var r = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        r("object" == typeof globalThis && globalThis) ||
        r("object" == typeof window && window) ||
        r("object" == typeof self && self) ||
        r("object" == typeof e && e) ||
        Function("return this")();
    }.call(this, r(59)));
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, r) {
    var n = r(13),
      i = r(165),
      o = r(26),
      s = r(166),
      a = r(175),
      u = r(386),
      h = i("wks"),
      c = n.Symbol,
      l = u ? c : (c && c.withoutSetter) || s;
    t.exports = function (t) {
      return (
        o(h, t) || (a && o(c, t) ? (h[t] = c[t]) : (h[t] = l("Symbol." + t))),
        h[t]
      );
    };
  },
  function (t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return r.call(t, e);
    };
  },
  function (t, e, r) {
    var n = r(9),
      i = r(36);
    t.exports = r(8)
      ? function (t, e, r) {
          return n.f(t, e, i(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        };
  },
  function (t, e, r) {
    var n = r(55),
      i = r(29);
    t.exports = function (t) {
      return n(i(t));
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(2);
    t.exports = function (t, e) {
      return (
        !!t &&
        n(function () {
          e ? t.call(null, function () {}, 1) : t.call(null);
        })
      );
    };
  },
  function (t, e, r) {
    var n = r(21);
    t.exports = function (t, e, r) {
      if ((n(t), void 0 === e)) return t;
      switch (r) {
        case 1:
          return function (r) {
            return t.call(e, r);
          };
        case 2:
          return function (r, n) {
            return t.call(e, r, n);
          };
        case 3:
          return function (r, n, i) {
            return t.call(e, r, n, i);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  },
  function (t, e) {
    var r = Math.ceil,
      n = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? n : r)(t);
    };
  },
  function (t, e, r) {
    var n = r(56),
      i = r(36),
      o = r(18),
      s = r(33),
      a = r(16),
      u = r(124),
      h = Object.getOwnPropertyDescriptor;
    e.f = r(8)
      ? h
      : function (t, e) {
          if (((t = o(t)), (e = s(e, !0)), u))
            try {
              return h(t, e);
            } catch (t) {}
          if (a(t, e)) return i(!n.f.call(t, e), t[e]);
        };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(7),
      o = r(2);
    t.exports = function (t, e) {
      var r = (i.Object || {})[t] || Object[t],
        s = {};
      (s[t] = e(r)),
        n(
          n.S +
            n.F *
              o(function () {
                r(1);
              }),
          "Object",
          s
        );
    };
  },
  function (t, e, r) {
    var n = r(20),
      i = r(55),
      o = r(10),
      s = r(6),
      a = r(140);
    t.exports = function (t, e) {
      var r = 1 == t,
        u = 2 == t,
        h = 3 == t,
        c = 4 == t,
        l = 6 == t,
        f = 5 == t || l,
        p = e || a;
      return function (e, a, d) {
        for (
          var v,
            g,
            y = o(e),
            m = i(y),
            _ = n(a, d, 3),
            x = s(m.length),
            b = 0,
            E = r ? p(e, x) : u ? p(e, 0) : void 0;
          x > b;
          b++
        )
          if ((f || b in m) && ((g = _((v = m[b]), b, y)), t))
            if (r) E[b] = g;
            else if (g)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return v;
                case 6:
                  return b;
                case 2:
                  E.push(v);
              }
            else if (c) return !1;
        return l ? -1 : h || c ? c : E;
      };
    };
  },
  function (t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return r.call(t, e);
    };
  },
  function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n = (function () {
      function t(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n);
        }
      }
      return function (e, r, n) {
        return r && t(e.prototype, r), n && t(e, n), e;
      };
    })();
    function i(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    var o = (function () {
      function t(e, r, n) {
        void 0 === r && (r = !1),
          i(this, t),
          (this._fn = e),
          (this._once = r),
          (this._thisArg = n),
          (this._next = this._prev = this._owner = null);
      }
      return (
        n(t, [
          {
            key: "detach",
            value: function () {
              return null !== this._owner && (this._owner.detach(this), !0);
            },
          },
        ]),
        t
      );
    })();
    function s(t, e) {
      return (
        t._head
          ? ((t._tail._next = e), (e._prev = t._tail), (t._tail = e))
          : ((t._head = e), (t._tail = e)),
        (e._owner = t),
        e
      );
    }
    var a = (function () {
      function t() {
        i(this, t), (this._head = this._tail = void 0);
      }
      return (
        n(t, [
          {
            key: "handlers",
            value: function () {
              var t =
                  !(arguments.length <= 0 || void 0 === arguments[0]) &&
                  arguments[0],
                e = this._head;
              if (t) return !!e;
              for (var r = []; e; ) r.push(e), (e = e._next);
              return r;
            },
          },
          {
            key: "has",
            value: function (t) {
              if (!(t instanceof o))
                throw new Error(
                  "MiniSignal#has(): First arg must be a MiniSignalBinding object."
                );
              return t._owner === this;
            },
          },
          {
            key: "dispatch",
            value: function () {
              var t = this._head;
              if (!t) return !1;
              for (; t; )
                t._once && this.detach(t),
                  t._fn.apply(t._thisArg, arguments),
                  (t = t._next);
              return !0;
            },
          },
          {
            key: "add",
            value: function (t) {
              var e =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? null
                  : arguments[1];
              if ("function" != typeof t)
                throw new Error(
                  "MiniSignal#add(): First arg must be a Function."
                );
              return s(this, new o(t, !1, e));
            },
          },
          {
            key: "once",
            value: function (t) {
              var e =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? null
                  : arguments[1];
              if ("function" != typeof t)
                throw new Error(
                  "MiniSignal#once(): First arg must be a Function."
                );
              return s(this, new o(t, !0, e));
            },
          },
          {
            key: "detach",
            value: function (t) {
              if (!(t instanceof o))
                throw new Error(
                  "MiniSignal#detach(): First arg must be a MiniSignalBinding object."
                );
              return (
                t._owner !== this ||
                  (t._prev && (t._prev._next = t._next),
                  t._next && (t._next._prev = t._prev),
                  t === this._head
                    ? ((this._head = t._next),
                      null === t._next && (this._tail = null))
                    : t === this._tail &&
                      ((this._tail = t._prev), (this._tail._next = null)),
                  (t._owner = null)),
                this
              );
            },
          },
          {
            key: "detachAll",
            value: function () {
              var t = this._head;
              if (!t) return this;
              for (this._head = this._tail = null; t; )
                (t._owner = null), (t = t._next);
              return this;
            },
          },
        ]),
        t
      );
    })();
    (a.MiniSignalBinding = o), (e.default = a), (t.exports = e.default);
  },
  function (t, e) {
    var r = {}.toString;
    t.exports = function (t) {
      return r.call(t).slice(8, -1);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t;
    };
  },
  function (t, e, r) {
    "use strict";
    if (r(8)) {
      var n = r(38),
        i = r(1),
        o = r(2),
        s = r(0),
        a = r(73),
        u = r(104),
        h = r(20),
        c = r(52),
        l = r(36),
        f = r(17),
        p = r(53),
        d = r(22),
        v = r(6),
        g = r(151),
        y = r(40),
        m = r(33),
        _ = r(16),
        x = r(57),
        b = r(4),
        E = r(10),
        w = r(96),
        T = r(41),
        S = r(43),
        O = r(42).f,
        A = r(98),
        P = r(37),
        I = r(5),
        C = r(25),
        M = r(63),
        R = r(58),
        D = r(100),
        L = r(50),
        N = r(66),
        F = r(51),
        U = r(99),
        k = r(142),
        B = r(9),
        j = r(23),
        H = B.f,
        G = j.f,
        X = i.RangeError,
        z = i.TypeError,
        V = i.Uint8Array,
        Y = Array.prototype,
        W = u.ArrayBuffer,
        q = u.DataView,
        K = C(0),
        Z = C(2),
        J = C(3),
        $ = C(4),
        Q = C(5),
        tt = C(6),
        et = M(!0),
        rt = M(!1),
        nt = D.values,
        it = D.keys,
        ot = D.entries,
        st = Y.lastIndexOf,
        at = Y.reduce,
        ut = Y.reduceRight,
        ht = Y.join,
        ct = Y.sort,
        lt = Y.slice,
        ft = Y.toString,
        pt = Y.toLocaleString,
        dt = I("iterator"),
        vt = I("toStringTag"),
        gt = P("typed_constructor"),
        yt = P("def_constructor"),
        mt = a.CONSTR,
        _t = a.TYPED,
        xt = a.VIEW,
        bt = C(1, function (t, e) {
          return Ot(R(t, t[yt]), e);
        }),
        Et = o(function () {
          return 1 === new V(new Uint16Array([1]).buffer)[0];
        }),
        wt =
          !!V &&
          !!V.prototype.set &&
          o(function () {
            new V(1).set({});
          }),
        Tt = function (t, e) {
          var r = d(t);
          if (r < 0 || r % e) throw X("Wrong offset!");
          return r;
        },
        St = function (t) {
          if (b(t) && _t in t) return t;
          throw z(t + " is not a typed array!");
        },
        Ot = function (t, e) {
          if (!b(t) || !(gt in t))
            throw z("It is not a typed array constructor!");
          return new t(e);
        },
        At = function (t, e) {
          return Pt(R(t, t[yt]), e);
        },
        Pt = function (t, e) {
          for (var r = 0, n = e.length, i = Ot(t, n); n > r; ) i[r] = e[r++];
          return i;
        },
        It = function (t, e, r) {
          H(t, e, {
            get: function () {
              return this._d[r];
            },
          });
        },
        Ct = function (t) {
          var e,
            r,
            n,
            i,
            o,
            s,
            a = E(t),
            u = arguments.length,
            c = u > 1 ? arguments[1] : void 0,
            l = void 0 !== c,
            f = A(a);
          if (null != f && !w(f)) {
            for (s = f.call(a), n = [], e = 0; !(o = s.next()).done; e++)
              n.push(o.value);
            a = n;
          }
          for (
            l && u > 2 && (c = h(c, arguments[2], 2)),
              e = 0,
              r = v(a.length),
              i = Ot(this, r);
            r > e;
            e++
          )
            i[e] = l ? c(a[e], e) : a[e];
          return i;
        },
        Mt = function () {
          for (var t = 0, e = arguments.length, r = Ot(this, e); e > t; )
            r[t] = arguments[t++];
          return r;
        },
        Rt =
          !!V &&
          o(function () {
            pt.call(new V(1));
          }),
        Dt = function () {
          return pt.apply(Rt ? lt.call(St(this)) : St(this), arguments);
        },
        Lt = {
          copyWithin: function (t, e) {
            return k.call(
              St(this),
              t,
              e,
              arguments.length > 2 ? arguments[2] : void 0
            );
          },
          every: function (t) {
            return $(St(this), t, arguments.length > 1 ? arguments[1] : void 0);
          },
          fill: function (t) {
            return U.apply(St(this), arguments);
          },
          filter: function (t) {
            return At(
              this,
              Z(St(this), t, arguments.length > 1 ? arguments[1] : void 0)
            );
          },
          find: function (t) {
            return Q(St(this), t, arguments.length > 1 ? arguments[1] : void 0);
          },
          findIndex: function (t) {
            return tt(
              St(this),
              t,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          forEach: function (t) {
            K(St(this), t, arguments.length > 1 ? arguments[1] : void 0);
          },
          indexOf: function (t) {
            return rt(
              St(this),
              t,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          includes: function (t) {
            return et(
              St(this),
              t,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          join: function (t) {
            return ht.apply(St(this), arguments);
          },
          lastIndexOf: function (t) {
            return st.apply(St(this), arguments);
          },
          map: function (t) {
            return bt(
              St(this),
              t,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          reduce: function (t) {
            return at.apply(St(this), arguments);
          },
          reduceRight: function (t) {
            return ut.apply(St(this), arguments);
          },
          reverse: function () {
            for (
              var t, e = St(this).length, r = Math.floor(e / 2), n = 0;
              n < r;

            )
              (t = this[n]), (this[n++] = this[--e]), (this[e] = t);
            return this;
          },
          some: function (t) {
            return J(St(this), t, arguments.length > 1 ? arguments[1] : void 0);
          },
          sort: function (t) {
            return ct.call(St(this), t);
          },
          subarray: function (t, e) {
            var r = St(this),
              n = r.length,
              i = y(t, n);
            return new (R(r, r[yt]))(
              r.buffer,
              r.byteOffset + i * r.BYTES_PER_ELEMENT,
              v((void 0 === e ? n : y(e, n)) - i)
            );
          },
        },
        Nt = function (t, e) {
          return At(this, lt.call(St(this), t, e));
        },
        Ft = function (t) {
          St(this);
          var e = Tt(arguments[1], 1),
            r = this.length,
            n = E(t),
            i = v(n.length),
            o = 0;
          if (i + e > r) throw X("Wrong length!");
          for (; o < i; ) this[e + o] = n[o++];
        },
        Ut = {
          entries: function () {
            return ot.call(St(this));
          },
          keys: function () {
            return it.call(St(this));
          },
          values: function () {
            return nt.call(St(this));
          },
        },
        kt = function (t, e) {
          return (
            b(t) &&
            t[_t] &&
            "symbol" != typeof e &&
            e in t &&
            String(+e) == String(e)
          );
        },
        Bt = function (t, e) {
          return kt(t, (e = m(e, !0))) ? l(2, t[e]) : G(t, e);
        },
        jt = function (t, e, r) {
          return !(kt(t, (e = m(e, !0))) && b(r) && _(r, "value")) ||
            _(r, "get") ||
            _(r, "set") ||
            r.configurable ||
            (_(r, "writable") && !r.writable) ||
            (_(r, "enumerable") && !r.enumerable)
            ? H(t, e, r)
            : ((t[e] = r.value), t);
        };
      mt || ((j.f = Bt), (B.f = jt)),
        s(s.S + s.F * !mt, "Object", {
          getOwnPropertyDescriptor: Bt,
          defineProperty: jt,
        }),
        o(function () {
          ft.call({});
        }) &&
          (ft = pt =
            function () {
              return ht.call(this);
            });
      var Ht = p({}, Lt);
      p(Ht, Ut),
        f(Ht, dt, Ut.values),
        p(Ht, {
          slice: Nt,
          set: Ft,
          constructor: function () {},
          toString: ft,
          toLocaleString: Dt,
        }),
        It(Ht, "buffer", "b"),
        It(Ht, "byteOffset", "o"),
        It(Ht, "byteLength", "l"),
        It(Ht, "length", "e"),
        H(Ht, vt, {
          get: function () {
            return this[_t];
          },
        }),
        (t.exports = function (t, e, r, u) {
          var h = t + ((u = !!u) ? "Clamped" : "") + "Array",
            l = "get" + t,
            p = "set" + t,
            d = i[h],
            y = d || {},
            m = d && S(d),
            _ = !d || !a.ABV,
            E = {},
            w = d && d.prototype,
            A = function (t, r) {
              H(t, r, {
                get: function () {
                  return (function (t, r) {
                    var n = t._d;
                    return n.v[l](r * e + n.o, Et);
                  })(this, r);
                },
                set: function (t) {
                  return (function (t, r, n) {
                    var i = t._d;
                    u &&
                      (n =
                        (n = Math.round(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n),
                      i.v[p](r * e + i.o, n, Et);
                  })(this, r, t);
                },
                enumerable: !0,
              });
            };
          _
            ? ((d = r(function (t, r, n, i) {
                c(t, d, h, "_d");
                var o,
                  s,
                  a,
                  u,
                  l = 0,
                  p = 0;
                if (b(r)) {
                  if (
                    !(
                      r instanceof W ||
                      "ArrayBuffer" == (u = x(r)) ||
                      "SharedArrayBuffer" == u
                    )
                  )
                    return _t in r ? Pt(d, r) : Ct.call(d, r);
                  (o = r), (p = Tt(n, e));
                  var y = r.byteLength;
                  if (void 0 === i) {
                    if (y % e) throw X("Wrong length!");
                    if ((s = y - p) < 0) throw X("Wrong length!");
                  } else if ((s = v(i) * e) + p > y) throw X("Wrong length!");
                  a = s / e;
                } else (a = g(r)), (o = new W((s = a * e)));
                for (
                  f(t, "_d", { b: o, o: p, l: s, e: a, v: new q(o) });
                  l < a;

                )
                  A(t, l++);
              })),
              (w = d.prototype = T(Ht)),
              f(w, "constructor", d))
            : (o(function () {
                d(1);
              }) &&
                o(function () {
                  new d(-1);
                }) &&
                N(function (t) {
                  new d(), new d(null), new d(1.5), new d(t);
                }, !0)) ||
              ((d = r(function (t, r, n, i) {
                var o;
                return (
                  c(t, d, h),
                  b(r)
                    ? r instanceof W ||
                      "ArrayBuffer" == (o = x(r)) ||
                      "SharedArrayBuffer" == o
                      ? void 0 !== i
                        ? new y(r, Tt(n, e), i)
                        : void 0 !== n
                        ? new y(r, Tt(n, e))
                        : new y(r)
                      : _t in r
                      ? Pt(d, r)
                      : Ct.call(d, r)
                    : new y(g(r))
                );
              })),
              K(
                m !== Function.prototype ? O(y).concat(O(m)) : O(y),
                function (t) {
                  t in d || f(d, t, y[t]);
                }
              ),
              (d.prototype = w),
              n || (w.constructor = d));
          var P = w[dt],
            I = !!P && ("values" == P.name || null == P.name),
            C = Ut.values;
          f(d, gt, !0),
            f(w, _t, h),
            f(w, xt, !0),
            f(w, yt, d),
            (u ? new d(1)[vt] == h : vt in w) ||
              H(w, vt, {
                get: function () {
                  return h;
                },
              }),
            (E[h] = d),
            s(s.G + s.W + s.F * (d != y), E),
            s(s.S, h, { BYTES_PER_ELEMENT: e }),
            s(
              s.S +
                s.F *
                  o(function () {
                    y.of.call(d, 1);
                  }),
              h,
              { from: Ct, of: Mt }
            ),
            "BYTES_PER_ELEMENT" in w || f(w, "BYTES_PER_ELEMENT", e),
            s(s.P, h, Lt),
            F(h),
            s(s.P + s.F * wt, h, { set: Ft }),
            s(s.P + s.F * !I, h, Ut),
            n || w.toString == ft || (w.toString = ft),
            s(
              s.P +
                s.F *
                  o(function () {
                    new d(1).slice();
                  }),
              h,
              { slice: Nt }
            ),
            s(
              s.P +
                s.F *
                  (o(function () {
                    return (
                      [1, 2].toLocaleString() != new d([1, 2]).toLocaleString()
                    );
                  }) ||
                    !o(function () {
                      w.toLocaleString.call([1, 2]);
                    })),
              h,
              { toLocaleString: Dt }
            ),
            (L[h] = I ? P : C),
            n || I || f(w, dt, C);
        });
    } else t.exports = function () {};
  },
  function (t, e, r) {
    var n = r(13),
      i = r(158).f,
      o = r(35),
      s = r(110),
      a = r(111),
      u = r(376),
      h = r(382);
    t.exports = function (t, e) {
      var r,
        c,
        l,
        f,
        p,
        d = t.target,
        v = t.global,
        g = t.stat;
      if ((r = v ? n : g ? n[d] || a(d, {}) : (n[d] || {}).prototype))
        for (c in e) {
          if (
            ((f = e[c]),
            (l = t.noTargetGet ? (p = i(r, c)) && p.value : r[c]),
            !h(v ? c : d + (g ? "." : "#") + c, t.forced) && void 0 !== l)
          ) {
            if (typeof f == typeof l) continue;
            u(f, l);
          }
          (t.sham || (l && l.sham)) && o(f, "sham", !0), s(r, c, f, t);
        }
    };
  },
  function (t, e, r) {
    var n = r(47);
    t.exports = function (t) {
      if (!n(t)) throw TypeError(String(t) + " is not an object");
      return t;
    };
  },
  function (t, e, r) {
    var n = r(4);
    t.exports = function (t, e) {
      if (!n(t)) return t;
      var r, i;
      if (e && "function" == typeof (r = t.toString) && !n((i = r.call(t))))
        return i;
      if ("function" == typeof (r = t.valueOf) && !n((i = r.call(t)))) return i;
      if (!e && "function" == typeof (r = t.toString) && !n((i = r.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e, r) {
    var n = r(37)("meta"),
      i = r(4),
      o = r(16),
      s = r(9).f,
      a = 0,
      u =
        Object.isExtensible ||
        function () {
          return !0;
        },
      h = !r(2)(function () {
        return u(Object.preventExtensions({}));
      }),
      c = function (t) {
        s(t, n, { value: { i: "O" + ++a, w: {} } });
      },
      l = (t.exports = {
        KEY: n,
        NEED: !1,
        fastKey: function (t, e) {
          if (!i(t))
            return "symbol" == typeof t
              ? t
              : ("string" == typeof t ? "S" : "P") + t;
          if (!o(t, n)) {
            if (!u(t)) return "F";
            if (!e) return "E";
            c(t);
          }
          return t[n].i;
        },
        getWeak: function (t, e) {
          if (!o(t, n)) {
            if (!u(t)) return !0;
            if (!e) return !1;
            c(t);
          }
          return t[n].w;
        },
        onFreeze: function (t) {
          return h && l.NEED && u(t) && !o(t, n) && c(t), t;
        },
      });
  },
  function (t, e, r) {
    var n = r(46),
      i = r(54),
      o = r(74);
    t.exports = n
      ? function (t, e, r) {
          return i.f(t, e, o(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e) {
    var r = 0,
      n = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(
        void 0 === t ? "" : t,
        ")_",
        (++r + n).toString(36)
      );
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, r) {
    var n = r(126),
      i = r(83);
    t.exports =
      Object.keys ||
      function (t) {
        return n(t, i);
      };
  },
  function (t, e, r) {
    var n = r(22),
      i = Math.max,
      o = Math.min;
    t.exports = function (t, e) {
      return (t = n(t)) < 0 ? i(t + e, 0) : o(t, e);
    };
  },
  function (t, e, r) {
    var n = r(3),
      i = r(127),
      o = r(83),
      s = r(82)("IE_PROTO"),
      a = function () {},
      u = function () {
        var t,
          e = r(80)("iframe"),
          n = o.length;
        for (
          e.style.display = "none",
            r(84).appendChild(e),
            e.src = "javascript:",
            (t = e.contentWindow.document).open(),
            t.write("<script>document.F=Object</script>"),
            t.close(),
            u = t.F;
          n--;

        )
          delete u.prototype[o[n]];
        return u();
      };
    t.exports =
      Object.create ||
      function (t, e) {
        var r;
        return (
          null !== t
            ? ((a.prototype = n(t)),
              (r = new a()),
              (a.prototype = null),
              (r[s] = t))
            : (r = u()),
          void 0 === e ? r : i(r, e)
        );
      };
  },
  function (t, e, r) {
    var n = r(126),
      i = r(83).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return n(t, i);
      };
  },
  function (t, e, r) {
    var n = r(16),
      i = r(10),
      o = r(82)("IE_PROTO"),
      s = Object.prototype;
    t.exports =
      Object.getPrototypeOf ||
      function (t) {
        return (
          (t = i(t)),
          n(t, o)
            ? t[o]
            : "function" == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? s
            : null
        );
      };
  },
  function (t, e, r) {
    var n = r(5)("unscopables"),
      i = Array.prototype;
    null == i[n] && r(17)(i, n, {}),
      (t.exports = function (t) {
        i[n][t] = !0;
      });
  },
  function (t, e, r) {
    var n = r(4);
    t.exports = function (t, e) {
      if (!n(t) || t._t !== e)
        throw TypeError("Incompatible receiver, " + e + " required!");
      return t;
    };
  },
  function (t, e, r) {
    var n = r(14);
    t.exports = !n(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, e, r) {
    var n = r(9).f,
      i = r(16),
      o = r(5)("toStringTag");
    t.exports = function (t, e, r) {
      t &&
        !i((t = r ? t : t.prototype), o) &&
        n(t, o, { configurable: !0, value: e });
    };
  },
  function (t, e, r) {
    var n = r(0),
      i = r(29),
      o = r(2),
      s = r(86),
      a = "[" + s + "]",
      u = RegExp("^" + a + a + "*"),
      h = RegExp(a + a + "*$"),
      c = function (t, e, r) {
        var i = {},
          a = o(function () {
            return !!s[t]() || "​" != "​"[t]();
          }),
          u = (i[t] = a ? e(l) : s[t]);
        r && (i[r] = u), n(n.P + n.F * a, "String", i);
      },
      l = (c.trim = function (t, e) {
        return (
          (t = String(i(t))),
          1 & e && (t = t.replace(u, "")),
          2 & e && (t = t.replace(h, "")),
          t
        );
      });
    t.exports = c;
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, r) {
    "use strict";
    var n = r(1),
      i = r(9),
      o = r(8),
      s = r(5)("species");
    t.exports = function (t) {
      var e = n[t];
      o &&
        e &&
        !e[s] &&
        i.f(e, s, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (t, e) {
    t.exports = function (t, e, r, n) {
      if (!(t instanceof e) || (void 0 !== n && n in t))
        throw TypeError(r + ": incorrect invocation!");
      return t;
    };
  },
  function (t, e, r) {
    var n = r(11);
    t.exports = function (t, e, r) {
      for (var i in e) n(t, i, e[i], r);
      return t;
    };
  },
  function (t, e, r) {
    var n = r(46),
      i = r(160),
      o = r(32),
      s = r(109),
      a = Object.defineProperty;
    e.f = n
      ? a
      : function (t, e, r) {
          if ((o(t), (e = s(e, !0)), o(r), i))
            try {
              return a(t, e, r);
            } catch (t) {}
          if ("get" in r || "set" in r)
            throw TypeError("Accessors not supported");
          return "value" in r && (t[e] = r.value), t;
        };
  },
  function (t, e, r) {
    var n = r(28);
    t.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function (t) {
          return "String" == n(t) ? t.split("") : Object(t);
        };
  },
  function (t, e) {
    e.f = {}.propertyIsEnumerable;
  },
  function (t, e, r) {
    var n = r(28),
      i = r(5)("toStringTag"),
      o =
        "Arguments" ==
        n(
          (function () {
            return arguments;
          })()
        );
    t.exports = function (t) {
      var e, r, s;
      return void 0 === t
        ? "Undefined"
        : null === t
        ? "Null"
        : "string" ==
          typeof (r = (function (t, e) {
            try {
              return t[e];
            } catch (t) {}
          })((e = Object(t)), i))
        ? r
        : o
        ? n(e)
        : "Object" == (s = n(e)) && "function" == typeof e.callee
        ? "Arguments"
        : s;
    };
  },
  function (t, e, r) {
    var n = r(3),
      i = r(21),
      o = r(5)("species");
    t.exports = function (t, e) {
      var r,
        s = n(t).constructor;
      return void 0 === s || null == (r = n(s)[o]) ? e : i(r);
    };
  },
  function (t, e) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (r = window);
    }
    t.exports = r;
  },
  function (t, e) {
    var r = {}.toString;
    t.exports = function (t) {
      return r.call(t).slice(8, -1);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, r) {
    var n = r(7),
      i = r(1),
      o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: n.version,
      mode: r(38) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, e, r) {
    var n = r(18),
      i = r(6),
      o = r(40);
    t.exports = function (t) {
      return function (e, r, s) {
        var a,
          u = n(e),
          h = i(u.length),
          c = o(s, h);
        if (t && r != r) {
          for (; h > c; ) if ((a = u[c++]) != a) return !0;
        } else
          for (; h > c; c++)
            if ((t || c in u) && u[c] === r) return t || c || 0;
        return !t && -1;
      };
    };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, r) {
    var n = r(28);
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == n(t);
      };
  },
  function (t, e, r) {
    var n = r(5)("iterator"),
      i = !1;
    try {
      var o = [7][n]();
      (o.return = function () {
        i = !0;
      }),
        Array.from(o, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !i) return !1;
      var r = !1;
      try {
        var o = [7],
          s = o[n]();
        (s.next = function () {
          return { done: (r = !0) };
        }),
          (o[n] = function () {
            return s;
          }),
          t(o);
      } catch (t) {}
      return r;
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(3);
    t.exports = function () {
      var t = n(this),
        e = "";
      return (
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
      );
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(57),
      i = RegExp.prototype.exec;
    t.exports = function (t, e) {
      var r = t.exec;
      if ("function" == typeof r) {
        var o = r.call(t, e);
        if ("object" != typeof o)
          throw new TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return o;
      }
      if ("RegExp" !== n(t))
        throw new TypeError("RegExp#exec called on incompatible receiver");
      return i.call(t, e);
    };
  },
  function (t, e, r) {
    "use strict";
    r(144);
    var n = r(11),
      i = r(17),
      o = r(2),
      s = r(29),
      a = r(5),
      u = r(101),
      h = a("species"),
      c = !o(function () {
        var t = /./;
        return (
          (t.exec = function () {
            var t = [];
            return (t.groups = { a: "7" }), t;
          }),
          "7" !== "".replace(t, "$<a>")
        );
      }),
      l = (function () {
        var t = /(?:)/,
          e = t.exec;
        t.exec = function () {
          return e.apply(this, arguments);
        };
        var r = "ab".split(t);
        return 2 === r.length && "a" === r[0] && "b" === r[1];
      })();
    t.exports = function (t, e, r) {
      var f = a(t),
        p = !o(function () {
          var e = {};
          return (
            (e[f] = function () {
              return 7;
            }),
            7 != ""[t](e)
          );
        }),
        d = p
          ? !o(function () {
              var e = !1,
                r = /a/;
              return (
                (r.exec = function () {
                  return (e = !0), null;
                }),
                "split" === t &&
                  ((r.constructor = {}),
                  (r.constructor[h] = function () {
                    return r;
                  })),
                r[f](""),
                !e
              );
            })
          : void 0;
      if (!p || !d || ("replace" === t && !c) || ("split" === t && !l)) {
        var v = /./[f],
          g = r(s, f, ""[t], function (t, e, r, n, i) {
            return e.exec === u
              ? p && !i
                ? { done: !0, value: v.call(e, r, n) }
                : { done: !0, value: t.call(r, e, n) }
              : { done: !1 };
          }),
          y = g[0],
          m = g[1];
        n(String.prototype, t, y),
          i(
            RegExp.prototype,
            f,
            2 == e
              ? function (t, e) {
                  return m.call(t, this, e);
                }
              : function (t) {
                  return m.call(t, this);
                }
          );
      }
    };
  },
  function (t, e, r) {
    var n = r(20),
      i = r(139),
      o = r(96),
      s = r(3),
      a = r(6),
      u = r(98),
      h = {},
      c = {};
    ((e = t.exports =
      function (t, e, r, l, f) {
        var p,
          d,
          v,
          g,
          y = f
            ? function () {
                return t;
              }
            : u(t),
          m = n(r, l, e ? 2 : 1),
          _ = 0;
        if ("function" != typeof y) throw TypeError(t + " is not iterable!");
        if (o(y)) {
          for (p = a(t.length); p > _; _++)
            if ((g = e ? m(s((d = t[_]))[0], d[1]) : m(t[_])) === h || g === c)
              return g;
        } else
          for (v = y.call(t); !(d = v.next()).done; )
            if ((g = i(v, m, d.value, e)) === h || g === c) return g;
      }).BREAK = h),
      (e.RETURN = c);
  },
  function (t, e, r) {
    var n = r(1).navigator;
    t.exports = (n && n.userAgent) || "";
  },
  function (t, e, r) {
    "use strict";
    var n = r(1),
      i = r(0),
      o = r(11),
      s = r(53),
      a = r(34),
      u = r(70),
      h = r(52),
      c = r(4),
      l = r(2),
      f = r(66),
      p = r(48),
      d = r(87);
    t.exports = function (t, e, r, v, g, y) {
      var m = n[t],
        _ = m,
        x = g ? "set" : "add",
        b = _ && _.prototype,
        E = {},
        w = function (t) {
          var e = b[t];
          o(
            b,
            t,
            "delete" == t || "has" == t
              ? function (t) {
                  return !(y && !c(t)) && e.call(this, 0 === t ? 0 : t);
                }
              : "get" == t
              ? function (t) {
                  return y && !c(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                }
              : "add" == t
              ? function (t) {
                  return e.call(this, 0 === t ? 0 : t), this;
                }
              : function (t, r) {
                  return e.call(this, 0 === t ? 0 : t, r), this;
                }
          );
        };
      if (
        "function" == typeof _ &&
        (y ||
          (b.forEach &&
            !l(function () {
              new _().entries().next();
            })))
      ) {
        var T = new _(),
          S = T[x](y ? {} : -0, 1) != T,
          O = l(function () {
            T.has(1);
          }),
          A = f(function (t) {
            new _(t);
          }),
          P =
            !y &&
            l(function () {
              for (var t = new _(), e = 5; e--; ) t[x](e, e);
              return !t.has(-0);
            });
        A ||
          (((_ = e(function (e, r) {
            h(e, _, t);
            var n = d(new m(), e, _);
            return null != r && u(r, g, n[x], n), n;
          })).prototype = b),
          (b.constructor = _)),
          (O || P) && (w("delete"), w("has"), g && w("get")),
          (P || S) && w(x),
          y && b.clear && delete b.clear;
      } else
        (_ = v.getConstructor(e, t, g, x)), s(_.prototype, r), (a.NEED = !0);
      return (
        p(_, t),
        (E[t] = _),
        i(i.G + i.W + i.F * (_ != m), E),
        y || v.setStrong(_, t, g),
        _
      );
    };
  },
  function (t, e, r) {
    for (
      var n,
        i = r(1),
        o = r(17),
        s = r(37),
        a = s("typed_array"),
        u = s("view"),
        h = !(!i.ArrayBuffer || !i.DataView),
        c = h,
        l = 0,
        f =
          "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(
            ","
          );
      l < 9;

    )
      (n = i[f[l++]])
        ? (o(n.prototype, a, !0), o(n.prototype, u, !0))
        : (c = !1);
    t.exports = { ABV: h, CONSTR: c, TYPED: a, VIEW: u };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e, r) {
    var n = r(116),
      i = Math.min;
    t.exports = function (t) {
      return t > 0 ? i(n(t), 9007199254740991) : 0;
    };
  },
  function (t, e, r) {
    var n = r(31),
      i = r(46);
    n(
      { target: "Object", stat: !0, forced: !i, sham: !i },
      { defineProperty: r(54).f }
    );
  },
  function (t, e, r) {
    "use strict";
    var n,
      i,
      o = r(389),
      s = r(390),
      a = RegExp.prototype.exec,
      u = String.prototype.replace,
      h = a,
      c =
        ((n = /a/),
        (i = /b*/g),
        a.call(n, "a"),
        a.call(i, "a"),
        0 !== n.lastIndex || 0 !== i.lastIndex),
      l = s.UNSUPPORTED_Y || s.BROKEN_CARET,
      f = void 0 !== /()??/.exec("")[1];
    (c || f || l) &&
      (h = function (t) {
        var e,
          r,
          n,
          i,
          s = this,
          h = l && s.sticky,
          p = o.call(s),
          d = s.source,
          v = 0,
          g = t;
        return (
          h &&
            (-1 === (p = p.replace("y", "")).indexOf("g") && (p += "g"),
            (g = String(t).slice(s.lastIndex)),
            s.lastIndex > 0 &&
              (!s.multiline || (s.multiline && "\n" !== t[s.lastIndex - 1])) &&
              ((d = "(?: " + d + ")"), (g = " " + g), v++),
            (r = new RegExp("^(?:" + d + ")", p))),
          f && (r = new RegExp("^" + d + "$(?!\\s)", p)),
          c && (e = s.lastIndex),
          (n = a.call(h ? r : s, g)),
          h
            ? n
              ? ((n.input = n.input.slice(v)),
                (n[0] = n[0].slice(v)),
                (n.index = s.lastIndex),
                (s.lastIndex += n[0].length))
              : (s.lastIndex = 0)
            : c && n && (s.lastIndex = s.global ? n.index + n[0].length : e),
          f &&
            n &&
            n.length > 1 &&
            u.call(n[0], r, function () {
              for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (n[i] = void 0);
            }),
          n
        );
      }),
      (t.exports = h);
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, r) {
    "use strict";
    var n = r(404),
      i = r(406);
    function o() {
      (this.protocol = null),
        (this.slashes = null),
        (this.auth = null),
        (this.host = null),
        (this.port = null),
        (this.hostname = null),
        (this.hash = null),
        (this.search = null),
        (this.query = null),
        (this.pathname = null),
        (this.path = null),
        (this.href = null);
    }
    (e.parse = _),
      (e.resolve = function (t, e) {
        return _(t, !1, !0).resolve(e);
      }),
      (e.resolveObject = function (t, e) {
        return t ? _(t, !1, !0).resolveObject(e) : e;
      }),
      (e.format = function (t) {
        i.isString(t) && (t = _(t));
        return t instanceof o ? t.format() : o.prototype.format.call(t);
      }),
      (e.Url = o);
    var s = /^([a-z0-9.+-]+:)/i,
      a = /:[0-9]*$/,
      u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
      h = ["{", "}", "|", "\\", "^", "`"].concat([
        "<",
        ">",
        '"',
        "`",
        " ",
        "\r",
        "\n",
        "\t",
      ]),
      c = ["'"].concat(h),
      l = ["%", "/", "?", ";", "#"].concat(c),
      f = ["/", "?", "#"],
      p = /^[+a-z0-9A-Z_-]{0,63}$/,
      d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      v = { javascript: !0, "javascript:": !0 },
      g = { javascript: !0, "javascript:": !0 },
      y = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0,
      },
      m = r(407);
    function _(t, e, r) {
      if (t && i.isObject(t) && t instanceof o) return t;
      var n = new o();
      return n.parse(t, e, r), n;
    }
    (o.prototype.parse = function (t, e, r) {
      if (!i.isString(t))
        throw new TypeError(
          "Parameter 'url' must be a string, not " + typeof t
        );
      var o = t.indexOf("?"),
        a = -1 !== o && o < t.indexOf("#") ? "?" : "#",
        h = t.split(a);
      h[0] = h[0].replace(/\\/g, "/");
      var _ = (t = h.join(a));
      if (((_ = _.trim()), !r && 1 === t.split("#").length)) {
        var x = u.exec(_);
        if (x)
          return (
            (this.path = _),
            (this.href = _),
            (this.pathname = x[1]),
            x[2]
              ? ((this.search = x[2]),
                (this.query = e
                  ? m.parse(this.search.substr(1))
                  : this.search.substr(1)))
              : e && ((this.search = ""), (this.query = {})),
            this
          );
      }
      var b = s.exec(_);
      if (b) {
        var E = (b = b[0]).toLowerCase();
        (this.protocol = E), (_ = _.substr(b.length));
      }
      if (r || b || _.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var w = "//" === _.substr(0, 2);
        !w || (b && g[b]) || ((_ = _.substr(2)), (this.slashes = !0));
      }
      if (!g[b] && (w || (b && !y[b]))) {
        for (var T, S, O = -1, A = 0; A < f.length; A++) {
          -1 !== (P = _.indexOf(f[A])) && (-1 === O || P < O) && (O = P);
        }
        -1 !== (S = -1 === O ? _.lastIndexOf("@") : _.lastIndexOf("@", O)) &&
          ((T = _.slice(0, S)),
          (_ = _.slice(S + 1)),
          (this.auth = decodeURIComponent(T))),
          (O = -1);
        for (A = 0; A < l.length; A++) {
          var P;
          -1 !== (P = _.indexOf(l[A])) && (-1 === O || P < O) && (O = P);
        }
        -1 === O && (O = _.length),
          (this.host = _.slice(0, O)),
          (_ = _.slice(O)),
          this.parseHost(),
          (this.hostname = this.hostname || "");
        var I =
          "[" === this.hostname[0] &&
          "]" === this.hostname[this.hostname.length - 1];
        if (!I)
          for (
            var C = this.hostname.split(/\./), M = ((A = 0), C.length);
            A < M;
            A++
          ) {
            var R = C[A];
            if (R && !R.match(p)) {
              for (var D = "", L = 0, N = R.length; L < N; L++)
                R.charCodeAt(L) > 127 ? (D += "x") : (D += R[L]);
              if (!D.match(p)) {
                var F = C.slice(0, A),
                  U = C.slice(A + 1),
                  k = R.match(d);
                k && (F.push(k[1]), U.unshift(k[2])),
                  U.length && (_ = "/" + U.join(".") + _),
                  (this.hostname = F.join("."));
                break;
              }
            }
          }
        this.hostname.length > 255
          ? (this.hostname = "")
          : (this.hostname = this.hostname.toLowerCase()),
          I || (this.hostname = n.toASCII(this.hostname));
        var B = this.port ? ":" + this.port : "",
          j = this.hostname || "";
        (this.host = j + B),
          (this.href += this.host),
          I &&
            ((this.hostname = this.hostname.substr(
              1,
              this.hostname.length - 2
            )),
            "/" !== _[0] && (_ = "/" + _));
      }
      if (!v[E])
        for (A = 0, M = c.length; A < M; A++) {
          var H = c[A];
          if (-1 !== _.indexOf(H)) {
            var G = encodeURIComponent(H);
            G === H && (G = escape(H)), (_ = _.split(H).join(G));
          }
        }
      var X = _.indexOf("#");
      -1 !== X && ((this.hash = _.substr(X)), (_ = _.slice(0, X)));
      var z = _.indexOf("?");
      if (
        (-1 !== z
          ? ((this.search = _.substr(z)),
            (this.query = _.substr(z + 1)),
            e && (this.query = m.parse(this.query)),
            (_ = _.slice(0, z)))
          : e && ((this.search = ""), (this.query = {})),
        _ && (this.pathname = _),
        y[E] && this.hostname && !this.pathname && (this.pathname = "/"),
        this.pathname || this.search)
      ) {
        B = this.pathname || "";
        var V = this.search || "";
        this.path = B + V;
      }
      return (this.href = this.format()), this;
    }),
      (o.prototype.format = function () {
        var t = this.auth || "";
        t &&
          ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ":")), (t += "@"));
        var e = this.protocol || "",
          r = this.pathname || "",
          n = this.hash || "",
          o = !1,
          s = "";
        this.host
          ? (o = t + this.host)
          : this.hostname &&
            ((o =
              t +
              (-1 === this.hostname.indexOf(":")
                ? this.hostname
                : "[" + this.hostname + "]")),
            this.port && (o += ":" + this.port)),
          this.query &&
            i.isObject(this.query) &&
            Object.keys(this.query).length &&
            (s = m.stringify(this.query));
        var a = this.search || (s && "?" + s) || "";
        return (
          e && ":" !== e.substr(-1) && (e += ":"),
          this.slashes || ((!e || y[e]) && !1 !== o)
            ? ((o = "//" + (o || "")),
              r && "/" !== r.charAt(0) && (r = "/" + r))
            : o || (o = ""),
          n && "#" !== n.charAt(0) && (n = "#" + n),
          a && "?" !== a.charAt(0) && (a = "?" + a),
          e +
            o +
            (r = r.replace(/[?#]/g, function (t) {
              return encodeURIComponent(t);
            })) +
            (a = a.replace("#", "%23")) +
            n
        );
      }),
      (o.prototype.resolve = function (t) {
        return this.resolveObject(_(t, !1, !0)).format();
      }),
      (o.prototype.resolveObject = function (t) {
        if (i.isString(t)) {
          var e = new o();
          e.parse(t, !1, !0), (t = e);
        }
        for (var r = new o(), n = Object.keys(this), s = 0; s < n.length; s++) {
          var a = n[s];
          r[a] = this[a];
        }
        if (((r.hash = t.hash), "" === t.href)) return (r.href = r.format()), r;
        if (t.slashes && !t.protocol) {
          for (var u = Object.keys(t), h = 0; h < u.length; h++) {
            var c = u[h];
            "protocol" !== c && (r[c] = t[c]);
          }
          return (
            y[r.protocol] &&
              r.hostname &&
              !r.pathname &&
              (r.path = r.pathname = "/"),
            (r.href = r.format()),
            r
          );
        }
        if (t.protocol && t.protocol !== r.protocol) {
          if (!y[t.protocol]) {
            for (var l = Object.keys(t), f = 0; f < l.length; f++) {
              var p = l[f];
              r[p] = t[p];
            }
            return (r.href = r.format()), r;
          }
          if (((r.protocol = t.protocol), t.host || g[t.protocol]))
            r.pathname = t.pathname;
          else {
            for (
              var d = (t.pathname || "").split("/");
              d.length && !(t.host = d.shift());

            );
            t.host || (t.host = ""),
              t.hostname || (t.hostname = ""),
              "" !== d[0] && d.unshift(""),
              d.length < 2 && d.unshift(""),
              (r.pathname = d.join("/"));
          }
          if (
            ((r.search = t.search),
            (r.query = t.query),
            (r.host = t.host || ""),
            (r.auth = t.auth),
            (r.hostname = t.hostname || t.host),
            (r.port = t.port),
            r.pathname || r.search)
          ) {
            var v = r.pathname || "",
              m = r.search || "";
            r.path = v + m;
          }
          return (r.slashes = r.slashes || t.slashes), (r.href = r.format()), r;
        }
        var _ = r.pathname && "/" === r.pathname.charAt(0),
          x = t.host || (t.pathname && "/" === t.pathname.charAt(0)),
          b = x || _ || (r.host && t.pathname),
          E = b,
          w = (r.pathname && r.pathname.split("/")) || [],
          T =
            ((d = (t.pathname && t.pathname.split("/")) || []),
            r.protocol && !y[r.protocol]);
        if (
          (T &&
            ((r.hostname = ""),
            (r.port = null),
            r.host && ("" === w[0] ? (w[0] = r.host) : w.unshift(r.host)),
            (r.host = ""),
            t.protocol &&
              ((t.hostname = null),
              (t.port = null),
              t.host && ("" === d[0] ? (d[0] = t.host) : d.unshift(t.host)),
              (t.host = null)),
            (b = b && ("" === d[0] || "" === w[0]))),
          x)
        )
          (r.host = t.host || "" === t.host ? t.host : r.host),
            (r.hostname =
              t.hostname || "" === t.hostname ? t.hostname : r.hostname),
            (r.search = t.search),
            (r.query = t.query),
            (w = d);
        else if (d.length)
          w || (w = []),
            w.pop(),
            (w = w.concat(d)),
            (r.search = t.search),
            (r.query = t.query);
        else if (!i.isNullOrUndefined(t.search)) {
          if (T)
            (r.hostname = r.host = w.shift()),
              (I =
                !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) &&
                ((r.auth = I.shift()), (r.host = r.hostname = I.shift()));
          return (
            (r.search = t.search),
            (r.query = t.query),
            (i.isNull(r.pathname) && i.isNull(r.search)) ||
              (r.path =
                (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
            (r.href = r.format()),
            r
          );
        }
        if (!w.length)
          return (
            (r.pathname = null),
            r.search ? (r.path = "/" + r.search) : (r.path = null),
            (r.href = r.format()),
            r
          );
        for (
          var S = w.slice(-1)[0],
            O =
              ((r.host || t.host || w.length > 1) &&
                ("." === S || ".." === S)) ||
              "" === S,
            A = 0,
            P = w.length;
          P >= 0;
          P--
        )
          "." === (S = w[P])
            ? w.splice(P, 1)
            : ".." === S
            ? (w.splice(P, 1), A++)
            : A && (w.splice(P, 1), A--);
        if (!b && !E) for (; A--; A) w.unshift("..");
        !b || "" === w[0] || (w[0] && "/" === w[0].charAt(0)) || w.unshift(""),
          O && "/" !== w.join("/").substr(-1) && w.push("");
        var I,
          C = "" === w[0] || (w[0] && "/" === w[0].charAt(0));
        T &&
          ((r.hostname = r.host = C ? "" : w.length ? w.shift() : ""),
          (I = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) &&
            ((r.auth = I.shift()), (r.host = r.hostname = I.shift())));
        return (
          (b = b || (r.host && w.length)) && !C && w.unshift(""),
          w.length
            ? (r.pathname = w.join("/"))
            : ((r.pathname = null), (r.path = null)),
          (i.isNull(r.pathname) && i.isNull(r.search)) ||
            (r.path =
              (r.pathname ? r.pathname : "") + (r.search ? r.search : "")),
          (r.auth = t.auth || r.auth),
          (r.slashes = r.slashes || t.slashes),
          (r.href = r.format()),
          r
        );
      }),
      (o.prototype.parseHost = function () {
        var t = this.host,
          e = a.exec(t);
        e &&
          (":" !== (e = e[0]) && (this.port = e.substr(1)),
          (t = t.substr(0, t.length - e.length))),
          t && (this.hostname = t);
      });
  },
  function (t, e, r) {
    var n = r(4),
      i = r(1).document,
      o = n(i) && n(i.createElement);
    t.exports = function (t) {
      return o ? i.createElement(t) : {};
    };
  },
  function (t, e, r) {
    e.f = r(5);
  },
  function (t, e, r) {
    var n = r(62)("keys"),
      i = r(37);
    t.exports = function (t) {
      return n[t] || (n[t] = i(t));
    };
  },
  function (t, e) {
    t.exports =
      "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
  },
  function (t, e, r) {
    var n = r(1).document;
    t.exports = n && n.documentElement;
  },
  function (t, e, r) {
    var n = r(4),
      i = r(3),
      o = function (t, e) {
        if ((i(t), !n(e) && null !== e))
          throw TypeError(e + ": can't set as prototype!");
      };
    t.exports = {
      set:
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function (t, e, n) {
              try {
                (n = r(20)(
                  Function.call,
                  r(23).f(Object.prototype, "__proto__").set,
                  2
                ))(t, []),
                  (e = !(t instanceof Array));
              } catch (t) {
                e = !0;
              }
              return function (t, r) {
                return o(t, r), e ? (t.__proto__ = r) : n(t, r), t;
              };
            })({}, !1)
          : void 0),
      check: o,
    };
  },
  function (t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
  },
  function (t, e, r) {
    var n = r(4),
      i = r(85).set;
    t.exports = function (t, e, r) {
      var o,
        s = e.constructor;
      return (
        s !== r &&
          "function" == typeof s &&
          (o = s.prototype) !== r.prototype &&
          n(o) &&
          i &&
          i(t, o),
        t
      );
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(22),
      i = r(29);
    t.exports = function (t) {
      var e = String(i(this)),
        r = "",
        o = n(t);
      if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
      for (; o > 0; (o >>>= 1) && (e += e)) 1 & o && (r += e);
      return r;
    };
  },
  function (t, e) {
    t.exports =
      Math.sign ||
      function (t) {
        return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1;
      };
  },
  function (t, e) {
    var r = Math.expm1;
    t.exports =
      !r ||
      r(10) > 22025.465794806718 ||
      r(10) < 22025.465794806718 ||
      -2e-17 != r(-2e-17)
        ? function (t) {
            return 0 == (t = +t)
              ? t
              : t > -1e-6 && t < 1e-6
              ? t + (t * t) / 2
              : Math.exp(t) - 1;
          }
        : r;
  },
  function (t, e, r) {
    var n = r(22),
      i = r(29);
    t.exports = function (t) {
      return function (e, r) {
        var o,
          s,
          a = String(i(e)),
          u = n(r),
          h = a.length;
        return u < 0 || u >= h
          ? t
            ? ""
            : void 0
          : (o = a.charCodeAt(u)) < 55296 ||
            o > 56319 ||
            u + 1 === h ||
            (s = a.charCodeAt(u + 1)) < 56320 ||
            s > 57343
          ? t
            ? a.charAt(u)
            : o
          : t
          ? a.slice(u, u + 2)
          : s - 56320 + ((o - 55296) << 10) + 65536;
      };
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(38),
      i = r(0),
      o = r(11),
      s = r(17),
      a = r(50),
      u = r(138),
      h = r(48),
      c = r(43),
      l = r(5)("iterator"),
      f = !([].keys && "next" in [].keys()),
      p = function () {
        return this;
      };
    t.exports = function (t, e, r, d, v, g, y) {
      u(r, e, d);
      var m,
        _,
        x,
        b = function (t) {
          if (!f && t in S) return S[t];
          switch (t) {
            case "keys":
            case "values":
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this, t);
          };
        },
        E = e + " Iterator",
        w = "values" == v,
        T = !1,
        S = t.prototype,
        O = S[l] || S["@@iterator"] || (v && S[v]),
        A = O || b(v),
        P = v ? (w ? b("entries") : A) : void 0,
        I = ("Array" == e && S.entries) || O;
      if (
        (I &&
          (x = c(I.call(new t()))) !== Object.prototype &&
          x.next &&
          (h(x, E, !0), n || "function" == typeof x[l] || s(x, l, p)),
        w &&
          O &&
          "values" !== O.name &&
          ((T = !0),
          (A = function () {
            return O.call(this);
          })),
        (n && !y) || (!f && !T && S[l]) || s(S, l, A),
        (a[e] = A),
        (a[E] = p),
        v)
      )
        if (
          ((m = {
            values: w ? A : b("values"),
            keys: g ? A : b("keys"),
            entries: P,
          }),
          y)
        )
          for (_ in m) _ in S || o(S, _, m[_]);
        else i(i.P + i.F * (f || T), e, m);
      return m;
    };
  },
  function (t, e, r) {
    var n = r(94),
      i = r(29);
    t.exports = function (t, e, r) {
      if (n(e)) throw TypeError("String#" + r + " doesn't accept regex!");
      return String(i(t));
    };
  },
  function (t, e, r) {
    var n = r(4),
      i = r(28),
      o = r(5)("match");
    t.exports = function (t) {
      var e;
      return n(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t));
    };
  },
  function (t, e, r) {
    var n = r(5)("match");
    t.exports = function (t) {
      var e = /./;
      try {
        "/./"[t](e);
      } catch (r) {
        try {
          return (e[n] = !1), !"/./"[t](e);
        } catch (t) {}
      }
      return !0;
    };
  },
  function (t, e, r) {
    var n = r(50),
      i = r(5)("iterator"),
      o = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (n.Array === t || o[i] === t);
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(9),
      i = r(36);
    t.exports = function (t, e, r) {
      e in t ? n.f(t, e, i(0, r)) : (t[e] = r);
    };
  },
  function (t, e, r) {
    var n = r(57),
      i = r(5)("iterator"),
      o = r(50);
    t.exports = r(7).getIteratorMethod = function (t) {
      if (null != t) return t[i] || t["@@iterator"] || o[n(t)];
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(10),
      i = r(40),
      o = r(6);
    t.exports = function (t) {
      for (
        var e = n(this),
          r = o(e.length),
          s = arguments.length,
          a = i(s > 1 ? arguments[1] : void 0, r),
          u = s > 2 ? arguments[2] : void 0,
          h = void 0 === u ? r : i(u, r);
        h > a;

      )
        e[a++] = t;
      return e;
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(44),
      i = r(143),
      o = r(50),
      s = r(18);
    (t.exports = r(92)(
      Array,
      "Array",
      function (t, e) {
        (this._t = s(t)), (this._i = 0), (this._k = e);
      },
      function () {
        var t = this._t,
          e = this._k,
          r = this._i++;
        return !t || r >= t.length
          ? ((this._t = void 0), i(1))
          : i(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]]);
      },
      "values"
    )),
      (o.Arguments = o.Array),
      n("keys"),
      n("values"),
      n("entries");
  },
  function (t, e, r) {
    "use strict";
    var n,
      i,
      o = r(67),
      s = RegExp.prototype.exec,
      a = String.prototype.replace,
      u = s,
      h =
        ((n = /a/),
        (i = /b*/g),
        s.call(n, "a"),
        s.call(i, "a"),
        0 !== n.lastIndex || 0 !== i.lastIndex),
      c = void 0 !== /()??/.exec("")[1];
    (h || c) &&
      (u = function (t) {
        var e,
          r,
          n,
          i,
          u = this;
        return (
          c && (r = new RegExp("^" + u.source + "$(?!\\s)", o.call(u))),
          h && (e = u.lastIndex),
          (n = s.call(u, t)),
          h && n && (u.lastIndex = u.global ? n.index + n[0].length : e),
          c &&
            n &&
            n.length > 1 &&
            a.call(n[0], r, function () {
              for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (n[i] = void 0);
            }),
          n
        );
      }),
      (t.exports = u);
  },
  function (t, e, r) {
    "use strict";
    var n = r(91)(!0);
    t.exports = function (t, e, r) {
      return e + (r ? n(t, e).length : 1);
    };
  },
  function (t, e, r) {
    var n,
      i,
      o,
      s = r(20),
      a = r(132),
      u = r(84),
      h = r(80),
      c = r(1),
      l = c.process,
      f = c.setImmediate,
      p = c.clearImmediate,
      d = c.MessageChannel,
      v = c.Dispatch,
      g = 0,
      y = {},
      m = function () {
        var t = +this;
        if (y.hasOwnProperty(t)) {
          var e = y[t];
          delete y[t], e();
        }
      },
      _ = function (t) {
        m.call(t.data);
      };
    (f && p) ||
      ((f = function (t) {
        for (var e = [], r = 1; arguments.length > r; ) e.push(arguments[r++]);
        return (
          (y[++g] = function () {
            a("function" == typeof t ? t : Function(t), e);
          }),
          n(g),
          g
        );
      }),
      (p = function (t) {
        delete y[t];
      }),
      "process" == r(28)(l)
        ? (n = function (t) {
            l.nextTick(s(m, t, 1));
          })
        : v && v.now
        ? (n = function (t) {
            v.now(s(m, t, 1));
          })
        : d
        ? ((o = (i = new d()).port2),
          (i.port1.onmessage = _),
          (n = s(o.postMessage, o, 1)))
        : c.addEventListener &&
          "function" == typeof postMessage &&
          !c.importScripts
        ? ((n = function (t) {
            c.postMessage(t + "", "*");
          }),
          c.addEventListener("message", _, !1))
        : (n =
            "onreadystatechange" in h("script")
              ? function (t) {
                  u.appendChild(h("script")).onreadystatechange = function () {
                    u.removeChild(this), m.call(t);
                  };
                }
              : function (t) {
                  setTimeout(s(m, t, 1), 0);
                })),
      (t.exports = { set: f, clear: p });
  },
  function (t, e, r) {
    "use strict";
    var n = r(1),
      i = r(8),
      o = r(38),
      s = r(73),
      a = r(17),
      u = r(53),
      h = r(2),
      c = r(52),
      l = r(22),
      f = r(6),
      p = r(151),
      d = r(42).f,
      v = r(9).f,
      g = r(99),
      y = r(48),
      m = n.ArrayBuffer,
      _ = n.DataView,
      x = n.Math,
      b = n.RangeError,
      E = n.Infinity,
      w = m,
      T = x.abs,
      S = x.pow,
      O = x.floor,
      A = x.log,
      P = x.LN2,
      I = i ? "_b" : "buffer",
      C = i ? "_l" : "byteLength",
      M = i ? "_o" : "byteOffset";
    function R(t, e, r) {
      var n,
        i,
        o,
        s = new Array(r),
        a = 8 * r - e - 1,
        u = (1 << a) - 1,
        h = u >> 1,
        c = 23 === e ? S(2, -24) - S(2, -77) : 0,
        l = 0,
        f = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
      for (
        (t = T(t)) != t || t === E
          ? ((i = t != t ? 1 : 0), (n = u))
          : ((n = O(A(t) / P)),
            t * (o = S(2, -n)) < 1 && (n--, (o *= 2)),
            (t += n + h >= 1 ? c / o : c * S(2, 1 - h)) * o >= 2 &&
              (n++, (o /= 2)),
            n + h >= u
              ? ((i = 0), (n = u))
              : n + h >= 1
              ? ((i = (t * o - 1) * S(2, e)), (n += h))
              : ((i = t * S(2, h - 1) * S(2, e)), (n = 0)));
        e >= 8;
        s[l++] = 255 & i, i /= 256, e -= 8
      );
      for (n = (n << e) | i, a += e; a > 0; s[l++] = 255 & n, n /= 256, a -= 8);
      return (s[--l] |= 128 * f), s;
    }
    function D(t, e, r) {
      var n,
        i = 8 * r - e - 1,
        o = (1 << i) - 1,
        s = o >> 1,
        a = i - 7,
        u = r - 1,
        h = t[u--],
        c = 127 & h;
      for (h >>= 7; a > 0; c = 256 * c + t[u], u--, a -= 8);
      for (
        n = c & ((1 << -a) - 1), c >>= -a, a += e;
        a > 0;
        n = 256 * n + t[u], u--, a -= 8
      );
      if (0 === c) c = 1 - s;
      else {
        if (c === o) return n ? NaN : h ? -E : E;
        (n += S(2, e)), (c -= s);
      }
      return (h ? -1 : 1) * n * S(2, c - e);
    }
    function L(t) {
      return (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0];
    }
    function N(t) {
      return [255 & t];
    }
    function F(t) {
      return [255 & t, (t >> 8) & 255];
    }
    function U(t) {
      return [255 & t, (t >> 8) & 255, (t >> 16) & 255, (t >> 24) & 255];
    }
    function k(t) {
      return R(t, 52, 8);
    }
    function B(t) {
      return R(t, 23, 4);
    }
    function j(t, e, r) {
      v(t.prototype, e, {
        get: function () {
          return this[r];
        },
      });
    }
    function H(t, e, r, n) {
      var i = p(+r);
      if (i + e > t[C]) throw b("Wrong index!");
      var o = t[I]._b,
        s = i + t[M],
        a = o.slice(s, s + e);
      return n ? a : a.reverse();
    }
    function G(t, e, r, n, i, o) {
      var s = p(+r);
      if (s + e > t[C]) throw b("Wrong index!");
      for (var a = t[I]._b, u = s + t[M], h = n(+i), c = 0; c < e; c++)
        a[u + c] = h[o ? c : e - c - 1];
    }
    if (s.ABV) {
      if (
        !h(function () {
          m(1);
        }) ||
        !h(function () {
          new m(-1);
        }) ||
        h(function () {
          return new m(), new m(1.5), new m(NaN), "ArrayBuffer" != m.name;
        })
      ) {
        for (
          var X,
            z = ((m = function (t) {
              return c(this, m), new w(p(t));
            }).prototype = w.prototype),
            V = d(w),
            Y = 0;
          V.length > Y;

        )
          (X = V[Y++]) in m || a(m, X, w[X]);
        o || (z.constructor = m);
      }
      var W = new _(new m(2)),
        q = _.prototype.setInt8;
      W.setInt8(0, 2147483648),
        W.setInt8(1, 2147483649),
        (!W.getInt8(0) && W.getInt8(1)) ||
          u(
            _.prototype,
            {
              setInt8: function (t, e) {
                q.call(this, t, (e << 24) >> 24);
              },
              setUint8: function (t, e) {
                q.call(this, t, (e << 24) >> 24);
              },
            },
            !0
          );
    } else
      (m = function (t) {
        c(this, m, "ArrayBuffer");
        var e = p(t);
        (this._b = g.call(new Array(e), 0)), (this[C] = e);
      }),
        (_ = function (t, e, r) {
          c(this, _, "DataView"), c(t, m, "DataView");
          var n = t[C],
            i = l(e);
          if (i < 0 || i > n) throw b("Wrong offset!");
          if (i + (r = void 0 === r ? n - i : f(r)) > n)
            throw b("Wrong length!");
          (this[I] = t), (this[M] = i), (this[C] = r);
        }),
        i &&
          (j(m, "byteLength", "_l"),
          j(_, "buffer", "_b"),
          j(_, "byteLength", "_l"),
          j(_, "byteOffset", "_o")),
        u(_.prototype, {
          getInt8: function (t) {
            return (H(this, 1, t)[0] << 24) >> 24;
          },
          getUint8: function (t) {
            return H(this, 1, t)[0];
          },
          getInt16: function (t) {
            var e = H(this, 2, t, arguments[1]);
            return (((e[1] << 8) | e[0]) << 16) >> 16;
          },
          getUint16: function (t) {
            var e = H(this, 2, t, arguments[1]);
            return (e[1] << 8) | e[0];
          },
          getInt32: function (t) {
            return L(H(this, 4, t, arguments[1]));
          },
          getUint32: function (t) {
            return L(H(this, 4, t, arguments[1])) >>> 0;
          },
          getFloat32: function (t) {
            return D(H(this, 4, t, arguments[1]), 23, 4);
          },
          getFloat64: function (t) {
            return D(H(this, 8, t, arguments[1]), 52, 8);
          },
          setInt8: function (t, e) {
            G(this, 1, t, N, e);
          },
          setUint8: function (t, e) {
            G(this, 1, t, N, e);
          },
          setInt16: function (t, e) {
            G(this, 2, t, F, e, arguments[2]);
          },
          setUint16: function (t, e) {
            G(this, 2, t, F, e, arguments[2]);
          },
          setInt32: function (t, e) {
            G(this, 4, t, U, e, arguments[2]);
          },
          setUint32: function (t, e) {
            G(this, 4, t, U, e, arguments[2]);
          },
          setFloat32: function (t, e) {
            G(this, 4, t, B, e, arguments[2]);
          },
          setFloat64: function (t, e) {
            G(this, 8, t, k, e, arguments[2]);
          },
        });
    y(m, "ArrayBuffer"),
      y(_, "DataView"),
      a(_.prototype, s.VIEW, !0),
      (e.ArrayBuffer = m),
      (e.DataView = _);
  },
  function (t, e) {
    var r = (t.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = r);
  },
  function (t, e) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  },
  function (t, e, r) {
    t.exports = !r(156)(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    });
  },
  function (t, e, r) {
    var n = r(159),
      i = r(61);
    t.exports = function (t) {
      return n(i(t));
    };
  },
  function (t, e, r) {
    var n = r(47);
    t.exports = function (t, e) {
      if (!n(t)) return t;
      var r, i;
      if (e && "function" == typeof (r = t.toString) && !n((i = r.call(t))))
        return i;
      if ("function" == typeof (r = t.valueOf) && !n((i = r.call(t)))) return i;
      if (!e && "function" == typeof (r = t.toString) && !n((i = r.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e, r) {
    var n = r(13),
      i = r(35),
      o = r(26),
      s = r(111),
      a = r(162),
      u = r(164),
      h = u.get,
      c = u.enforce,
      l = String(String).split("String");
    (t.exports = function (t, e, r, a) {
      var u = !!a && !!a.unsafe,
        h = !!a && !!a.enumerable,
        f = !!a && !!a.noTargetGet;
      "function" == typeof r &&
        ("string" != typeof e || o(r, "name") || i(r, "name", e),
        (c(r).source = l.join("string" == typeof e ? e : ""))),
        t !== n
          ? (u ? !f && t[e] && (h = !0) : delete t[e],
            h ? (t[e] = r) : i(t, e, r))
          : h
          ? (t[e] = r)
          : s(e, r);
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && h(this).source) || a(this);
    });
  },
  function (t, e, r) {
    var n = r(13),
      i = r(35);
    t.exports = function (t, e) {
      try {
        i(n, t, e);
      } catch (r) {
        n[t] = e;
      }
      return e;
    };
  },
  function (t, e, r) {
    var n = r(165),
      i = r(166),
      o = n("keys");
    t.exports = function (t) {
      return o[t] || (o[t] = i(t));
    };
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, r) {
    var n = r(378),
      i = r(13),
      o = function (t) {
        return "function" == typeof t ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2
        ? o(n[t]) || o(i[t])
        : (n[t] && n[t][e]) || (i[t] && i[t][e]);
    };
  },
  function (t, e) {
    var r = Math.ceil,
      n = Math.floor;
    t.exports = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? n : r)(t);
    };
  },
  function (t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (t, e, r) {
    var n = r(46),
      i = r(14),
      o = r(26),
      s = Object.defineProperty,
      a = {},
      u = function (t) {
        throw t;
      };
    t.exports = function (t, e) {
      if (o(a, t)) return a[t];
      e || (e = {});
      var r = [][t],
        h = !!o(e, "ACCESSORS") && e.ACCESSORS,
        c = o(e, 0) ? e[0] : u,
        l = o(e, 1) ? e[1] : void 0;
      return (a[t] =
        !!r &&
        !i(function () {
          if (h && !n) return !0;
          var t = { length: -1 };
          h ? s(t, 1, { enumerable: !0, get: u }) : (t[1] = 1), r.call(t, c, l);
        }));
    };
  },
  function (t, e, r) {
    var n = r(31),
      i = r(13),
      o = r(170),
      s = [].slice,
      a = function (t) {
        return function (e, r) {
          var n = arguments.length > 2,
            i = n ? s.call(arguments, 2) : void 0;
          return t(
            n
              ? function () {
                  ("function" == typeof e ? e : Function(e)).apply(this, i);
                }
              : e,
            r
          );
        };
      };
    n(
      { global: !0, bind: !0, forced: /MSIE .\./.test(o) },
      { setTimeout: a(i.setTimeout), setInterval: a(i.setInterval) }
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(31),
      i = r(171);
    n({ target: "Array", proto: !0, forced: [].forEach != i }, { forEach: i });
  },
  function (t, e, r) {
    var n = r(61);
    t.exports = function (t) {
      return Object(n(t));
    };
  },
  function (t, e, r) {
    var n = r(13),
      i = r(400),
      o = r(171),
      s = r(35);
    for (var a in i) {
      var u = n[a],
        h = u && u.prototype;
      if (h && h.forEach !== o)
        try {
          s(h, "forEach", o);
        } catch (t) {
          h.forEach = o;
        }
    }
  },
  function (t, e, r) {
    "use strict";
    t.exports = function (t, e) {
      e = e || {};
      for (
        var r = {
            key: [
              "source",
              "protocol",
              "authority",
              "userInfo",
              "user",
              "password",
              "host",
              "port",
              "relative",
              "path",
              "directory",
              "file",
              "query",
              "anchor",
            ],
            q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
            parser: {
              strict:
                /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
              loose:
                /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
            },
          },
          n = r.parser[e.strictMode ? "strict" : "loose"].exec(t),
          i = {},
          o = 14;
        o--;

      )
        i[r.key[o]] = n[o] || "";
      return (
        (i[r.q.name] = {}),
        i[r.key[12]].replace(r.q.parser, function (t, e, n) {
          e && (i[r.q.name][e] = n);
        }),
        i
      );
    };
  },
  function (t, e, r) {
    t.exports =
      !r(8) &&
      !r(2)(function () {
        return (
          7 !=
          Object.defineProperty(r(80)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, r) {
    var n = r(1),
      i = r(7),
      o = r(38),
      s = r(81),
      a = r(9).f;
    t.exports = function (t) {
      var e = i.Symbol || (i.Symbol = o ? {} : n.Symbol || {});
      "_" == t.charAt(0) || t in e || a(e, t, { value: s.f(t) });
    };
  },
  function (t, e, r) {
    var n = r(16),
      i = r(18),
      o = r(63)(!1),
      s = r(82)("IE_PROTO");
    t.exports = function (t, e) {
      var r,
        a = i(t),
        u = 0,
        h = [];
      for (r in a) r != s && n(a, r) && h.push(r);
      for (; e.length > u; ) n(a, (r = e[u++])) && (~o(h, r) || h.push(r));
      return h;
    };
  },
  function (t, e, r) {
    var n = r(9),
      i = r(3),
      o = r(39);
    t.exports = r(8)
      ? Object.defineProperties
      : function (t, e) {
          i(t);
          for (var r, s = o(e), a = s.length, u = 0; a > u; )
            n.f(t, (r = s[u++]), e[r]);
          return t;
        };
  },
  function (t, e, r) {
    var n = r(18),
      i = r(42).f,
      o = {}.toString,
      s =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function (t) {
      return s && "[object Window]" == o.call(t)
        ? (function (t) {
            try {
              return i(t);
            } catch (t) {
              return s.slice();
            }
          })(t)
        : i(n(t));
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(8),
      i = r(39),
      o = r(64),
      s = r(56),
      a = r(10),
      u = r(55),
      h = Object.assign;
    t.exports =
      !h ||
      r(2)(function () {
        var t = {},
          e = {},
          r = Symbol(),
          n = "abcdefghijklmnopqrst";
        return (
          (t[r] = 7),
          n.split("").forEach(function (t) {
            e[t] = t;
          }),
          7 != h({}, t)[r] || Object.keys(h({}, e)).join("") != n
        );
      })
        ? function (t, e) {
            for (
              var r = a(t), h = arguments.length, c = 1, l = o.f, f = s.f;
              h > c;

            )
              for (
                var p,
                  d = u(arguments[c++]),
                  v = l ? i(d).concat(l(d)) : i(d),
                  g = v.length,
                  y = 0;
                g > y;

              )
                (p = v[y++]), (n && !f.call(d, p)) || (r[p] = d[p]);
            return r;
          }
        : h;
  },
  function (t, e) {
    t.exports =
      Object.is ||
      function (t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
      };
  },
  function (t, e, r) {
    "use strict";
    var n = r(21),
      i = r(4),
      o = r(132),
      s = [].slice,
      a = {},
      u = function (t, e, r) {
        if (!(e in a)) {
          for (var n = [], i = 0; i < e; i++) n[i] = "a[" + i + "]";
          a[e] = Function("F,a", "return new F(" + n.join(",") + ")");
        }
        return a[e](t, r);
      };
    t.exports =
      Function.bind ||
      function (t) {
        var e = n(this),
          r = s.call(arguments, 1),
          a = function () {
            var n = r.concat(s.call(arguments));
            return this instanceof a ? u(e, n.length, n) : o(e, n, t);
          };
        return i(e.prototype) && (a.prototype = e.prototype), a;
      };
  },
  function (t, e) {
    t.exports = function (t, e, r) {
      var n = void 0 === r;
      switch (e.length) {
        case 0:
          return n ? t() : t.call(r);
        case 1:
          return n ? t(e[0]) : t.call(r, e[0]);
        case 2:
          return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);
        case 3:
          return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);
        case 4:
          return n
            ? t(e[0], e[1], e[2], e[3])
            : t.call(r, e[0], e[1], e[2], e[3]);
      }
      return t.apply(r, e);
    };
  },
  function (t, e, r) {
    var n = r(1).parseInt,
      i = r(49).trim,
      o = r(86),
      s = /^[-+]?0[xX]/;
    t.exports =
      8 !== n(o + "08") || 22 !== n(o + "0x16")
        ? function (t, e) {
            var r = i(String(t), 3);
            return n(r, e >>> 0 || (s.test(r) ? 16 : 10));
          }
        : n;
  },
  function (t, e, r) {
    var n = r(1).parseFloat,
      i = r(49).trim;
    t.exports =
      1 / n(r(86) + "-0") != -1 / 0
        ? function (t) {
            var e = i(String(t), 3),
              r = n(e);
            return 0 === r && "-" == e.charAt(0) ? -0 : r;
          }
        : n;
  },
  function (t, e, r) {
    var n = r(28);
    t.exports = function (t, e) {
      if ("number" != typeof t && "Number" != n(t)) throw TypeError(e);
      return +t;
    };
  },
  function (t, e, r) {
    var n = r(4),
      i = Math.floor;
    t.exports = function (t) {
      return !n(t) && isFinite(t) && i(t) === t;
    };
  },
  function (t, e) {
    t.exports =
      Math.log1p ||
      function (t) {
        return (t = +t) > -1e-8 && t < 1e-8 ? t - (t * t) / 2 : Math.log(1 + t);
      };
  },
  function (t, e, r) {
    "use strict";
    var n = r(41),
      i = r(36),
      o = r(48),
      s = {};
    r(17)(s, r(5)("iterator"), function () {
      return this;
    }),
      (t.exports = function (t, e, r) {
        (t.prototype = n(s, { next: i(1, r) })), o(t, e + " Iterator");
      });
  },
  function (t, e, r) {
    var n = r(3);
    t.exports = function (t, e, r, i) {
      try {
        return i ? e(n(r)[0], r[1]) : e(r);
      } catch (e) {
        var o = t.return;
        throw (void 0 !== o && n(o.call(t)), e);
      }
    };
  },
  function (t, e, r) {
    var n = r(282);
    t.exports = function (t, e) {
      return new (n(t))(e);
    };
  },
  function (t, e, r) {
    var n = r(21),
      i = r(10),
      o = r(55),
      s = r(6);
    t.exports = function (t, e, r, a, u) {
      n(e);
      var h = i(t),
        c = o(h),
        l = s(h.length),
        f = u ? l - 1 : 0,
        p = u ? -1 : 1;
      if (r < 2)
        for (;;) {
          if (f in c) {
            (a = c[f]), (f += p);
            break;
          }
          if (((f += p), u ? f < 0 : l <= f))
            throw TypeError("Reduce of empty array with no initial value");
        }
      for (; u ? f >= 0 : l > f; f += p) f in c && (a = e(a, c[f], f, h));
      return a;
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(10),
      i = r(40),
      o = r(6);
    t.exports =
      [].copyWithin ||
      function (t, e) {
        var r = n(this),
          s = o(r.length),
          a = i(t, s),
          u = i(e, s),
          h = arguments.length > 2 ? arguments[2] : void 0,
          c = Math.min((void 0 === h ? s : i(h, s)) - u, s - a),
          l = 1;
        for (
          u < a && a < u + c && ((l = -1), (u += c - 1), (a += c - 1));
          c-- > 0;

        )
          u in r ? (r[a] = r[u]) : delete r[a], (a += l), (u += l);
        return r;
      };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return { value: e, done: !!t };
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(101);
    r(0)({ target: "RegExp", proto: !0, forced: n !== /./.exec }, { exec: n });
  },
  function (t, e, r) {
    r(8) &&
      "g" != /./g.flags &&
      r(9).f(RegExp.prototype, "flags", { configurable: !0, get: r(67) });
  },
  function (t, e, r) {
    "use strict";
    var n,
      i,
      o,
      s,
      a = r(38),
      u = r(1),
      h = r(20),
      c = r(57),
      l = r(0),
      f = r(4),
      p = r(21),
      d = r(52),
      v = r(70),
      g = r(58),
      y = r(103).set,
      m = r(302)(),
      _ = r(147),
      x = r(303),
      b = r(71),
      E = r(148),
      w = u.TypeError,
      T = u.process,
      S = T && T.versions,
      O = (S && S.v8) || "",
      A = u.Promise,
      P = "process" == c(T),
      I = function () {},
      C = (i = _.f),
      M = !!(function () {
        try {
          var t = A.resolve(1),
            e = ((t.constructor = {})[r(5)("species")] = function (t) {
              t(I, I);
            });
          return (
            (P || "function" == typeof PromiseRejectionEvent) &&
            t.then(I) instanceof e &&
            0 !== O.indexOf("6.6") &&
            -1 === b.indexOf("Chrome/66")
          );
        } catch (t) {}
      })(),
      R = function (t) {
        var e;
        return !(!f(t) || "function" != typeof (e = t.then)) && e;
      },
      D = function (t, e) {
        if (!t._n) {
          t._n = !0;
          var r = t._c;
          m(function () {
            for (
              var n = t._v,
                i = 1 == t._s,
                o = 0,
                s = function (e) {
                  var r,
                    o,
                    s,
                    a = i ? e.ok : e.fail,
                    u = e.resolve,
                    h = e.reject,
                    c = e.domain;
                  try {
                    a
                      ? (i || (2 == t._h && F(t), (t._h = 1)),
                        !0 === a
                          ? (r = n)
                          : (c && c.enter(),
                            (r = a(n)),
                            c && (c.exit(), (s = !0))),
                        r === e.promise
                          ? h(w("Promise-chain cycle"))
                          : (o = R(r))
                          ? o.call(r, u, h)
                          : u(r))
                      : h(n);
                  } catch (t) {
                    c && !s && c.exit(), h(t);
                  }
                };
              r.length > o;

            )
              s(r[o++]);
            (t._c = []), (t._n = !1), e && !t._h && L(t);
          });
        }
      },
      L = function (t) {
        y.call(u, function () {
          var e,
            r,
            n,
            i = t._v,
            o = N(t);
          if (
            (o &&
              ((e = x(function () {
                P
                  ? T.emit("unhandledRejection", i, t)
                  : (r = u.onunhandledrejection)
                  ? r({ promise: t, reason: i })
                  : (n = u.console) &&
                    n.error &&
                    n.error("Unhandled promise rejection", i);
              })),
              (t._h = P || N(t) ? 2 : 1)),
            (t._a = void 0),
            o && e.e)
          )
            throw e.v;
        });
      },
      N = function (t) {
        return 1 !== t._h && 0 === (t._a || t._c).length;
      },
      F = function (t) {
        y.call(u, function () {
          var e;
          P
            ? T.emit("rejectionHandled", t)
            : (e = u.onrejectionhandled) && e({ promise: t, reason: t._v });
        });
      },
      U = function (t) {
        var e = this;
        e._d ||
          ((e._d = !0),
          ((e = e._w || e)._v = t),
          (e._s = 2),
          e._a || (e._a = e._c.slice()),
          D(e, !0));
      },
      k = function (t) {
        var e,
          r = this;
        if (!r._d) {
          (r._d = !0), (r = r._w || r);
          try {
            if (r === t) throw w("Promise can't be resolved itself");
            (e = R(t))
              ? m(function () {
                  var n = { _w: r, _d: !1 };
                  try {
                    e.call(t, h(k, n, 1), h(U, n, 1));
                  } catch (t) {
                    U.call(n, t);
                  }
                })
              : ((r._v = t), (r._s = 1), D(r, !1));
          } catch (t) {
            U.call({ _w: r, _d: !1 }, t);
          }
        }
      };
    M ||
      ((A = function (t) {
        d(this, A, "Promise", "_h"), p(t), n.call(this);
        try {
          t(h(k, this, 1), h(U, this, 1));
        } catch (t) {
          U.call(this, t);
        }
      }),
      ((n = function (t) {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }).prototype = r(53)(A.prototype, {
        then: function (t, e) {
          var r = C(g(this, A));
          return (
            (r.ok = "function" != typeof t || t),
            (r.fail = "function" == typeof e && e),
            (r.domain = P ? T.domain : void 0),
            this._c.push(r),
            this._a && this._a.push(r),
            this._s && D(this, !1),
            r.promise
          );
        },
        catch: function (t) {
          return this.then(void 0, t);
        },
      })),
      (o = function () {
        var t = new n();
        (this.promise = t),
          (this.resolve = h(k, t, 1)),
          (this.reject = h(U, t, 1));
      }),
      (_.f = C =
        function (t) {
          return t === A || t === s ? new o(t) : i(t);
        })),
      l(l.G + l.W + l.F * !M, { Promise: A }),
      r(48)(A, "Promise"),
      r(51)("Promise"),
      (s = r(7).Promise),
      l(l.S + l.F * !M, "Promise", {
        reject: function (t) {
          var e = C(this);
          return (0, e.reject)(t), e.promise;
        },
      }),
      l(l.S + l.F * (a || !M), "Promise", {
        resolve: function (t) {
          return E(a && this === s ? A : this, t);
        },
      }),
      l(
        l.S +
          l.F *
            !(
              M &&
              r(66)(function (t) {
                A.all(t).catch(I);
              })
            ),
        "Promise",
        {
          all: function (t) {
            var e = this,
              r = C(e),
              n = r.resolve,
              i = r.reject,
              o = x(function () {
                var r = [],
                  o = 0,
                  s = 1;
                v(t, !1, function (t) {
                  var a = o++,
                    u = !1;
                  r.push(void 0),
                    s++,
                    e.resolve(t).then(function (t) {
                      u || ((u = !0), (r[a] = t), --s || n(r));
                    }, i);
                }),
                  --s || n(r);
              });
            return o.e && i(o.v), r.promise;
          },
          race: function (t) {
            var e = this,
              r = C(e),
              n = r.reject,
              i = x(function () {
                v(t, !1, function (t) {
                  e.resolve(t).then(r.resolve, n);
                });
              });
            return i.e && n(i.v), r.promise;
          },
        }
      );
  },
  function (t, e, r) {
    "use strict";
    var n = r(21);
    function i(t) {
      var e, r;
      (this.promise = new t(function (t, n) {
        if (void 0 !== e || void 0 !== r)
          throw TypeError("Bad Promise constructor");
        (e = t), (r = n);
      })),
        (this.resolve = n(e)),
        (this.reject = n(r));
    }
    t.exports.f = function (t) {
      return new i(t);
    };
  },
  function (t, e, r) {
    var n = r(3),
      i = r(4),
      o = r(147);
    t.exports = function (t, e) {
      if ((n(t), i(e) && e.constructor === t)) return e;
      var r = o.f(t);
      return (0, r.resolve)(e), r.promise;
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(9).f,
      i = r(41),
      o = r(53),
      s = r(20),
      a = r(52),
      u = r(70),
      h = r(92),
      c = r(143),
      l = r(51),
      f = r(8),
      p = r(34).fastKey,
      d = r(45),
      v = f ? "_s" : "size",
      g = function (t, e) {
        var r,
          n = p(e);
        if ("F" !== n) return t._i[n];
        for (r = t._f; r; r = r.n) if (r.k == e) return r;
      };
    t.exports = {
      getConstructor: function (t, e, r, h) {
        var c = t(function (t, n) {
          a(t, c, e, "_i"),
            (t._t = e),
            (t._i = i(null)),
            (t._f = void 0),
            (t._l = void 0),
            (t[v] = 0),
            null != n && u(n, r, t[h], t);
        });
        return (
          o(c.prototype, {
            clear: function () {
              for (var t = d(this, e), r = t._i, n = t._f; n; n = n.n)
                (n.r = !0), n.p && (n.p = n.p.n = void 0), delete r[n.i];
              (t._f = t._l = void 0), (t[v] = 0);
            },
            delete: function (t) {
              var r = d(this, e),
                n = g(r, t);
              if (n) {
                var i = n.n,
                  o = n.p;
                delete r._i[n.i],
                  (n.r = !0),
                  o && (o.n = i),
                  i && (i.p = o),
                  r._f == n && (r._f = i),
                  r._l == n && (r._l = o),
                  r[v]--;
              }
              return !!n;
            },
            forEach: function (t) {
              d(this, e);
              for (
                var r,
                  n = s(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                (r = r ? r.n : this._f);

              )
                for (n(r.v, r.k, this); r && r.r; ) r = r.p;
            },
            has: function (t) {
              return !!g(d(this, e), t);
            },
          }),
          f &&
            n(c.prototype, "size", {
              get: function () {
                return d(this, e)[v];
              },
            }),
          c
        );
      },
      def: function (t, e, r) {
        var n,
          i,
          o = g(t, e);
        return (
          o
            ? (o.v = r)
            : ((t._l = o =
                {
                  i: (i = p(e, !0)),
                  k: e,
                  v: r,
                  p: (n = t._l),
                  n: void 0,
                  r: !1,
                }),
              t._f || (t._f = o),
              n && (n.n = o),
              t[v]++,
              "F" !== i && (t._i[i] = o)),
          t
        );
      },
      getEntry: g,
      setStrong: function (t, e, r) {
        h(
          t,
          e,
          function (t, r) {
            (this._t = d(t, e)), (this._k = r), (this._l = void 0);
          },
          function () {
            for (var t = this._k, e = this._l; e && e.r; ) e = e.p;
            return this._t && (this._l = e = e ? e.n : this._t._f)
              ? c(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v])
              : ((this._t = void 0), c(1));
          },
          r ? "entries" : "values",
          !r,
          !0
        ),
          l(e);
      },
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(53),
      i = r(34).getWeak,
      o = r(3),
      s = r(4),
      a = r(52),
      u = r(70),
      h = r(25),
      c = r(16),
      l = r(45),
      f = h(5),
      p = h(6),
      d = 0,
      v = function (t) {
        return t._l || (t._l = new g());
      },
      g = function () {
        this.a = [];
      },
      y = function (t, e) {
        return f(t.a, function (t) {
          return t[0] === e;
        });
      };
    (g.prototype = {
      get: function (t) {
        var e = y(this, t);
        if (e) return e[1];
      },
      has: function (t) {
        return !!y(this, t);
      },
      set: function (t, e) {
        var r = y(this, t);
        r ? (r[1] = e) : this.a.push([t, e]);
      },
      delete: function (t) {
        var e = p(this.a, function (e) {
          return e[0] === t;
        });
        return ~e && this.a.splice(e, 1), !!~e;
      },
    }),
      (t.exports = {
        getConstructor: function (t, e, r, o) {
          var h = t(function (t, n) {
            a(t, h, e, "_i"),
              (t._t = e),
              (t._i = d++),
              (t._l = void 0),
              null != n && u(n, r, t[o], t);
          });
          return (
            n(h.prototype, {
              delete: function (t) {
                if (!s(t)) return !1;
                var r = i(t);
                return !0 === r
                  ? v(l(this, e)).delete(t)
                  : r && c(r, this._i) && delete r[this._i];
              },
              has: function (t) {
                if (!s(t)) return !1;
                var r = i(t);
                return !0 === r ? v(l(this, e)).has(t) : r && c(r, this._i);
              },
            }),
            h
          );
        },
        def: function (t, e, r) {
          var n = i(o(e), !0);
          return !0 === n ? v(t).set(e, r) : (n[t._i] = r), t;
        },
        ufstore: v,
      });
  },
  function (t, e, r) {
    var n = r(22),
      i = r(6);
    t.exports = function (t) {
      if (void 0 === t) return 0;
      var e = n(t),
        r = i(e);
      if (e !== r) throw RangeError("Wrong length!");
      return r;
    };
  },
  function (t, e, r) {
    var n = r(42),
      i = r(64),
      o = r(3),
      s = r(1).Reflect;
    t.exports =
      (s && s.ownKeys) ||
      function (t) {
        var e = n.f(o(t)),
          r = i.f;
        return r ? e.concat(r(t)) : e;
      };
  },
  function (t, e, r) {
    var n = r(6),
      i = r(88),
      o = r(29);
    t.exports = function (t, e, r, s) {
      var a = String(o(t)),
        u = a.length,
        h = void 0 === r ? " " : String(r),
        c = n(e);
      if (c <= u || "" == h) return a;
      var l = c - u,
        f = i.call(h, Math.ceil(l / h.length));
      return f.length > l && (f = f.slice(0, l)), s ? f + a : a + f;
    };
  },
  function (t, e, r) {
    var n = r(8),
      i = r(39),
      o = r(18),
      s = r(56).f;
    t.exports = function (t) {
      return function (e) {
        for (var r, a = o(e), u = i(a), h = u.length, c = 0, l = []; h > c; )
          (r = u[c++]), (n && !s.call(a, r)) || l.push(t ? [r, a[r]] : a[r]);
        return l;
      };
    };
  },
  function (t, e) {
    var r = (t.exports = { version: "2.6.11" });
    "number" == typeof __e && (__e = r);
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(31),
      i = r(168).indexOf,
      o = r(169),
      s = r(118),
      a = [].indexOf,
      u = !!a && 1 / [1].indexOf(1, -0) < 0,
      h = o("indexOf"),
      c = s("indexOf", { ACCESSORS: !0, 1: 0 });
    n(
      { target: "Array", proto: !0, forced: u || !h || !c },
      {
        indexOf: function (t) {
          return u
            ? a.apply(this, arguments) || 0
            : i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(46),
      i = r(374),
      o = r(74),
      s = r(108),
      a = r(109),
      u = r(26),
      h = r(160),
      c = Object.getOwnPropertyDescriptor;
    e.f = n
      ? c
      : function (t, e) {
          if (((t = s(t)), (e = a(e, !0)), h))
            try {
              return c(t, e);
            } catch (t) {}
          if (u(t, e)) return o(!i.f.call(t, e), t[e]);
        };
  },
  function (t, e, r) {
    var n = r(14),
      i = r(60),
      o = "".split;
    t.exports = n(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == i(t) ? o.call(t, "") : Object(t);
        }
      : Object;
  },
  function (t, e, r) {
    var n = r(46),
      i = r(14),
      o = r(161);
    t.exports =
      !n &&
      !i(function () {
        return (
          7 !=
          Object.defineProperty(o("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, r) {
    var n = r(13),
      i = r(47),
      o = n.document,
      s = i(o) && i(o.createElement);
    t.exports = function (t) {
      return s ? o.createElement(t) : {};
    };
  },
  function (t, e, r) {
    var n = r(163),
      i = Function.toString;
    "function" != typeof n.inspectSource &&
      (n.inspectSource = function (t) {
        return i.call(t);
      }),
      (t.exports = n.inspectSource);
  },
  function (t, e, r) {
    var n = r(13),
      i = r(111),
      o = n["__core-js_shared__"] || i("__core-js_shared__", {});
    t.exports = o;
  },
  function (t, e, r) {
    var n,
      i,
      o,
      s = r(375),
      a = r(13),
      u = r(47),
      h = r(35),
      c = r(26),
      l = r(112),
      f = r(114),
      p = a.WeakMap;
    if (s) {
      var d = new p(),
        v = d.get,
        g = d.has,
        y = d.set;
      (n = function (t, e) {
        return y.call(d, t, e), e;
      }),
        (i = function (t) {
          return v.call(d, t) || {};
        }),
        (o = function (t) {
          return g.call(d, t);
        });
    } else {
      var m = l("state");
      (f[m] = !0),
        (n = function (t, e) {
          return h(t, m, e), e;
        }),
        (i = function (t) {
          return c(t, m) ? t[m] : {};
        }),
        (o = function (t) {
          return c(t, m);
        });
    }
    t.exports = {
      set: n,
      get: i,
      has: o,
      enforce: function (t) {
        return o(t) ? i(t) : n(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var r;
          if (!u(e) || (r = i(e)).type !== t)
            throw TypeError("Incompatible receiver, " + t + " required");
          return r;
        };
      },
    };
  },
  function (t, e, r) {
    var n = r(113),
      i = r(163);
    (t.exports = function (t, e) {
      return i[t] || (i[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.6.5",
      mode: n ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (t, e) {
    var r = 0,
      n = Math.random();
    t.exports = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++r + n).toString(36)
      );
    };
  },
  function (t, e, r) {
    var n = r(26),
      i = r(108),
      o = r(168).indexOf,
      s = r(114);
    t.exports = function (t, e) {
      var r,
        a = i(t),
        u = 0,
        h = [];
      for (r in a) !n(s, r) && n(a, r) && h.push(r);
      for (; e.length > u; ) n(a, (r = e[u++])) && (~o(h, r) || h.push(r));
      return h;
    };
  },
  function (t, e, r) {
    var n = r(108),
      i = r(75),
      o = r(380),
      s = function (t) {
        return function (e, r, s) {
          var a,
            u = n(e),
            h = i(u.length),
            c = o(s, h);
          if (t && r != r) {
            for (; h > c; ) if ((a = u[c++]) != a) return !0;
          } else
            for (; h > c; c++)
              if ((t || c in u) && u[c] === r) return t || c || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: s(!0), indexOf: s(!1) };
  },
  function (t, e, r) {
    "use strict";
    var n = r(14);
    t.exports = function (t, e) {
      var r = [][t];
      return (
        !!r &&
        n(function () {
          r.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    };
  },
  function (t, e, r) {
    var n = r(115);
    t.exports = n("navigator", "userAgent") || "";
  },
  function (t, e, r) {
    "use strict";
    var n = r(172).forEach,
      i = r(169),
      o = r(118),
      s = i("forEach"),
      a = o("forEach");
    t.exports =
      s && a
        ? [].forEach
        : function (t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
  },
  function (t, e, r) {
    var n = r(173),
      i = r(159),
      o = r(121),
      s = r(75),
      a = r(384),
      u = [].push,
      h = function (t) {
        var e = 1 == t,
          r = 2 == t,
          h = 3 == t,
          c = 4 == t,
          l = 6 == t,
          f = 5 == t || l;
        return function (p, d, v, g) {
          for (
            var y,
              m,
              _ = o(p),
              x = i(_),
              b = n(d, v, 3),
              E = s(x.length),
              w = 0,
              T = g || a,
              S = e ? T(p, E) : r ? T(p, 0) : void 0;
            E > w;
            w++
          )
            if ((f || w in x) && ((m = b((y = x[w]), w, _)), t))
              if (e) S[w] = m;
              else if (m)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return y;
                  case 6:
                    return w;
                  case 2:
                    u.call(S, y);
                }
              else if (c) return !1;
          return l ? -1 : h || c ? c : S;
        };
      };
    t.exports = {
      forEach: h(0),
      map: h(1),
      filter: h(2),
      some: h(3),
      every: h(4),
      find: h(5),
      findIndex: h(6),
    };
  },
  function (t, e, r) {
    var n = r(174);
    t.exports = function (t, e, r) {
      if ((n(t), void 0 === e)) return t;
      switch (r) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (r) {
            return t.call(e, r);
          };
        case 2:
          return function (r, n) {
            return t.call(e, r, n);
          };
        case 3:
          return function (r, n, i) {
            return t.call(e, r, n, i);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    };
  },
  function (t, e, r) {
    var n = r(14);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !n(function () {
        return !String(Symbol());
      });
  },
  function (t, e, r) {
    "use strict";
    var n = r(31),
      i = r(172).map,
      o = r(387),
      s = r(118),
      a = o("map"),
      u = s("map");
    n(
      { target: "Array", proto: !0, forced: !a || !u },
      {
        map: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(31),
      i = r(77);
    n({ target: "RegExp", proto: !0, forced: /./.exec !== i }, { exec: i });
  },
  function (t, e, r) {
    var n = r(116),
      i = r(61),
      o = function (t) {
        return function (e, r) {
          var o,
            s,
            a = String(i(e)),
            u = n(r),
            h = a.length;
          return u < 0 || u >= h
            ? t
              ? ""
              : void 0
            : (o = a.charCodeAt(u)) < 55296 ||
              o > 56319 ||
              u + 1 === h ||
              (s = a.charCodeAt(u + 1)) < 56320 ||
              s > 57343
            ? t
              ? a.charAt(u)
              : o
            : t
            ? a.slice(u, u + 2)
            : s - 56320 + ((o - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: o(!1), charAt: o(!0) };
  },
  function (t, e, r) {
    "use strict";
    var n = Object.prototype.hasOwnProperty,
      i = "~";
    function o() {}
    function s(t, e, r) {
      (this.fn = t), (this.context = e), (this.once = r || !1);
    }
    function a(t, e, r, n, o) {
      if ("function" != typeof r)
        throw new TypeError("The listener must be a function");
      var a = new s(r, n || t, o),
        u = i ? i + e : e;
      return (
        t._events[u]
          ? t._events[u].fn
            ? (t._events[u] = [t._events[u], a])
            : t._events[u].push(a)
          : ((t._events[u] = a), t._eventsCount++),
        t
      );
    }
    function u(t, e) {
      0 == --t._eventsCount ? (t._events = new o()) : delete t._events[e];
    }
    function h() {
      (this._events = new o()), (this._eventsCount = 0);
    }
    Object.create &&
      ((o.prototype = Object.create(null)), new o().__proto__ || (i = !1)),
      (h.prototype.eventNames = function () {
        var t,
          e,
          r = [];
        if (0 === this._eventsCount) return r;
        for (e in (t = this._events))
          n.call(t, e) && r.push(i ? e.slice(1) : e);
        return Object.getOwnPropertySymbols
          ? r.concat(Object.getOwnPropertySymbols(t))
          : r;
      }),
      (h.prototype.listeners = function (t) {
        var e = i ? i + t : t,
          r = this._events[e];
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var n = 0, o = r.length, s = new Array(o); n < o; n++)
          s[n] = r[n].fn;
        return s;
      }),
      (h.prototype.listenerCount = function (t) {
        var e = i ? i + t : t,
          r = this._events[e];
        return r ? (r.fn ? 1 : r.length) : 0;
      }),
      (h.prototype.emit = function (t, e, r, n, o, s) {
        var a = i ? i + t : t;
        if (!this._events[a]) return !1;
        var u,
          h,
          c = this._events[a],
          l = arguments.length;
        if (c.fn) {
          switch ((c.once && this.removeListener(t, c.fn, void 0, !0), l)) {
            case 1:
              return c.fn.call(c.context), !0;
            case 2:
              return c.fn.call(c.context, e), !0;
            case 3:
              return c.fn.call(c.context, e, r), !0;
            case 4:
              return c.fn.call(c.context, e, r, n), !0;
            case 5:
              return c.fn.call(c.context, e, r, n, o), !0;
            case 6:
              return c.fn.call(c.context, e, r, n, o, s), !0;
          }
          for (h = 1, u = new Array(l - 1); h < l; h++) u[h - 1] = arguments[h];
          c.fn.apply(c.context, u);
        } else {
          var f,
            p = c.length;
          for (h = 0; h < p; h++)
            switch (
              (c[h].once && this.removeListener(t, c[h].fn, void 0, !0), l)
            ) {
              case 1:
                c[h].fn.call(c[h].context);
                break;
              case 2:
                c[h].fn.call(c[h].context, e);
                break;
              case 3:
                c[h].fn.call(c[h].context, e, r);
                break;
              case 4:
                c[h].fn.call(c[h].context, e, r, n);
                break;
              default:
                if (!u)
                  for (f = 1, u = new Array(l - 1); f < l; f++)
                    u[f - 1] = arguments[f];
                c[h].fn.apply(c[h].context, u);
            }
        }
        return !0;
      }),
      (h.prototype.on = function (t, e, r) {
        return a(this, t, e, r, !1);
      }),
      (h.prototype.once = function (t, e, r) {
        return a(this, t, e, r, !0);
      }),
      (h.prototype.removeListener = function (t, e, r, n) {
        var o = i ? i + t : t;
        if (!this._events[o]) return this;
        if (!e) return u(this, o), this;
        var s = this._events[o];
        if (s.fn)
          s.fn !== e || (n && !s.once) || (r && s.context !== r) || u(this, o);
        else {
          for (var a = 0, h = [], c = s.length; a < c; a++)
            (s[a].fn !== e || (n && !s[a].once) || (r && s[a].context !== r)) &&
              h.push(s[a]);
          h.length ? (this._events[o] = 1 === h.length ? h[0] : h) : u(this, o);
        }
        return this;
      }),
      (h.prototype.removeAllListeners = function (t) {
        var e;
        return (
          t
            ? ((e = i ? i + t : t), this._events[e] && u(this, e))
            : ((this._events = new o()), (this._eventsCount = 0)),
          this
        );
      }),
      (h.prototype.off = h.prototype.removeListener),
      (h.prototype.addListener = h.prototype.on),
      (h.prefixed = i),
      (h.EventEmitter = h),
      (t.exports = h);
  },
  function (t, e, r) {
    "use strict";
    function n(t, e, r) {
      r = r || 2;
      var n,
        a,
        u,
        h,
        c,
        p,
        d,
        g = e && e.length,
        y = g ? e[0] * r : t.length,
        m = i(t, 0, y, r, !0),
        _ = [];
      if (!m || m.next === m.prev) return _;
      if (
        (g &&
          (m = (function (t, e, r, n) {
            var s,
              a,
              u,
              h,
              c,
              p = [];
            for (s = 0, a = e.length; s < a; s++)
              (u = e[s] * n),
                (h = s < a - 1 ? e[s + 1] * n : t.length),
                (c = i(t, u, h, n, !1)) === c.next && (c.steiner = !0),
                p.push(v(c));
            for (p.sort(l), s = 0; s < p.length; s++)
              f(p[s], r), (r = o(r, r.next));
            return r;
          })(t, e, m, r)),
        t.length > 80 * r)
      ) {
        (n = u = t[0]), (a = h = t[1]);
        for (var x = r; x < y; x += r)
          (c = t[x]) < n && (n = c),
            (p = t[x + 1]) < a && (a = p),
            c > u && (u = c),
            p > h && (h = p);
        d = 0 !== (d = Math.max(u - n, h - a)) ? 1 / d : 0;
      }
      return s(m, _, r, n, a, d), _;
    }
    function i(t, e, r, n, i) {
      var o, s;
      if (i === P(t, e, r, n) > 0)
        for (o = e; o < r; o += n) s = S(o, t[o], t[o + 1], s);
      else for (o = r - n; o >= e; o -= n) s = S(o, t[o], t[o + 1], s);
      return s && _(s, s.next) && (O(s), (s = s.next)), s;
    }
    function o(t, e) {
      if (!t) return t;
      e || (e = t);
      var r,
        n = t;
      do {
        if (
          ((r = !1), n.steiner || (!_(n, n.next) && 0 !== m(n.prev, n, n.next)))
        )
          n = n.next;
        else {
          if ((O(n), (n = e = n.prev) === n.next)) break;
          r = !0;
        }
      } while (r || n !== e);
      return e;
    }
    function s(t, e, r, n, i, l, f) {
      if (t) {
        !f &&
          l &&
          (function (t, e, r, n) {
            var i = t;
            do {
              null === i.z && (i.z = d(i.x, i.y, e, r, n)),
                (i.prevZ = i.prev),
                (i.nextZ = i.next),
                (i = i.next);
            } while (i !== t);
            (i.prevZ.nextZ = null),
              (i.prevZ = null),
              (function (t) {
                var e,
                  r,
                  n,
                  i,
                  o,
                  s,
                  a,
                  u,
                  h = 1;
                do {
                  for (r = t, t = null, o = null, s = 0; r; ) {
                    for (
                      s++, n = r, a = 0, e = 0;
                      e < h && (a++, (n = n.nextZ));
                      e++
                    );
                    for (u = h; a > 0 || (u > 0 && n); )
                      0 !== a && (0 === u || !n || r.z <= n.z)
                        ? ((i = r), (r = r.nextZ), a--)
                        : ((i = n), (n = n.nextZ), u--),
                        o ? (o.nextZ = i) : (t = i),
                        (i.prevZ = o),
                        (o = i);
                    r = n;
                  }
                  (o.nextZ = null), (h *= 2);
                } while (s > 1);
              })(i);
          })(t, n, i, l);
        for (var p, v, g = t; t.prev !== t.next; )
          if (((p = t.prev), (v = t.next), l ? u(t, n, i, l) : a(t)))
            e.push(p.i / r),
              e.push(t.i / r),
              e.push(v.i / r),
              O(t),
              (t = v.next),
              (g = v.next);
          else if ((t = v) === g) {
            f
              ? 1 === f
                ? s((t = h(o(t), e, r)), e, r, n, i, l, 2)
                : 2 === f && c(t, e, r, n, i, l)
              : s(o(t), e, r, n, i, l, 1);
            break;
          }
      }
    }
    function a(t) {
      var e = t.prev,
        r = t,
        n = t.next;
      if (m(e, r, n) >= 0) return !1;
      for (var i = t.next.next; i !== t.prev; ) {
        if (
          g(e.x, e.y, r.x, r.y, n.x, n.y, i.x, i.y) &&
          m(i.prev, i, i.next) >= 0
        )
          return !1;
        i = i.next;
      }
      return !0;
    }
    function u(t, e, r, n) {
      var i = t.prev,
        o = t,
        s = t.next;
      if (m(i, o, s) >= 0) return !1;
      for (
        var a = i.x < o.x ? (i.x < s.x ? i.x : s.x) : o.x < s.x ? o.x : s.x,
          u = i.y < o.y ? (i.y < s.y ? i.y : s.y) : o.y < s.y ? o.y : s.y,
          h = i.x > o.x ? (i.x > s.x ? i.x : s.x) : o.x > s.x ? o.x : s.x,
          c = i.y > o.y ? (i.y > s.y ? i.y : s.y) : o.y > s.y ? o.y : s.y,
          l = d(a, u, e, r, n),
          f = d(h, c, e, r, n),
          p = t.prevZ,
          v = t.nextZ;
        p && p.z >= l && v && v.z <= f;

      ) {
        if (
          p !== t.prev &&
          p !== t.next &&
          g(i.x, i.y, o.x, o.y, s.x, s.y, p.x, p.y) &&
          m(p.prev, p, p.next) >= 0
        )
          return !1;
        if (
          ((p = p.prevZ),
          v !== t.prev &&
            v !== t.next &&
            g(i.x, i.y, o.x, o.y, s.x, s.y, v.x, v.y) &&
            m(v.prev, v, v.next) >= 0)
        )
          return !1;
        v = v.nextZ;
      }
      for (; p && p.z >= l; ) {
        if (
          p !== t.prev &&
          p !== t.next &&
          g(i.x, i.y, o.x, o.y, s.x, s.y, p.x, p.y) &&
          m(p.prev, p, p.next) >= 0
        )
          return !1;
        p = p.prevZ;
      }
      for (; v && v.z <= f; ) {
        if (
          v !== t.prev &&
          v !== t.next &&
          g(i.x, i.y, o.x, o.y, s.x, s.y, v.x, v.y) &&
          m(v.prev, v, v.next) >= 0
        )
          return !1;
        v = v.nextZ;
      }
      return !0;
    }
    function h(t, e, r) {
      var n = t;
      do {
        var i = n.prev,
          s = n.next.next;
        !_(i, s) &&
          x(i, n, n.next, s) &&
          w(i, s) &&
          w(s, i) &&
          (e.push(i.i / r),
          e.push(n.i / r),
          e.push(s.i / r),
          O(n),
          O(n.next),
          (n = t = s)),
          (n = n.next);
      } while (n !== t);
      return o(n);
    }
    function c(t, e, r, n, i, a) {
      var u = t;
      do {
        for (var h = u.next.next; h !== u.prev; ) {
          if (u.i !== h.i && y(u, h)) {
            var c = T(u, h);
            return (
              (u = o(u, u.next)),
              (c = o(c, c.next)),
              s(u, e, r, n, i, a),
              void s(c, e, r, n, i, a)
            );
          }
          h = h.next;
        }
        u = u.next;
      } while (u !== t);
    }
    function l(t, e) {
      return t.x - e.x;
    }
    function f(t, e) {
      if (
        (e = (function (t, e) {
          var r,
            n = e,
            i = t.x,
            o = t.y,
            s = -1 / 0;
          do {
            if (o <= n.y && o >= n.next.y && n.next.y !== n.y) {
              var a = n.x + ((o - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
              if (a <= i && a > s) {
                if (((s = a), a === i)) {
                  if (o === n.y) return n;
                  if (o === n.next.y) return n.next;
                }
                r = n.x < n.next.x ? n : n.next;
              }
            }
            n = n.next;
          } while (n !== e);
          if (!r) return null;
          if (i === s) return r;
          var u,
            h = r,
            c = r.x,
            l = r.y,
            f = 1 / 0;
          n = r;
          do {
            i >= n.x &&
              n.x >= c &&
              i !== n.x &&
              g(o < l ? i : s, o, c, l, o < l ? s : i, o, n.x, n.y) &&
              ((u = Math.abs(o - n.y) / (i - n.x)),
              w(n, t) &&
                (u < f ||
                  (u === f && (n.x > r.x || (n.x === r.x && p(r, n))))) &&
                ((r = n), (f = u))),
              (n = n.next);
          } while (n !== h);
          return r;
        })(t, e))
      ) {
        var r = T(e, t);
        o(e, e.next), o(r, r.next);
      }
    }
    function p(t, e) {
      return m(t.prev, t, e.prev) < 0 && m(e.next, t, t.next) < 0;
    }
    function d(t, e, r, n, i) {
      return (
        (t =
          1431655765 &
          ((t =
            858993459 &
            ((t =
              252645135 &
              ((t = 16711935 & ((t = 32767 * (t - r) * i) | (t << 8))) |
                (t << 4))) |
              (t << 2))) |
            (t << 1))) |
        ((e =
          1431655765 &
          ((e =
            858993459 &
            ((e =
              252645135 &
              ((e = 16711935 & ((e = 32767 * (e - n) * i) | (e << 8))) |
                (e << 4))) |
              (e << 2))) |
            (e << 1))) <<
          1)
      );
    }
    function v(t) {
      var e = t,
        r = t;
      do {
        (e.x < r.x || (e.x === r.x && e.y < r.y)) && (r = e), (e = e.next);
      } while (e !== t);
      return r;
    }
    function g(t, e, r, n, i, o, s, a) {
      return (
        (i - s) * (e - a) - (t - s) * (o - a) >= 0 &&
        (t - s) * (n - a) - (r - s) * (e - a) >= 0 &&
        (r - s) * (o - a) - (i - s) * (n - a) >= 0
      );
    }
    function y(t, e) {
      return (
        t.next.i !== e.i &&
        t.prev.i !== e.i &&
        !(function (t, e) {
          var r = t;
          do {
            if (
              r.i !== t.i &&
              r.next.i !== t.i &&
              r.i !== e.i &&
              r.next.i !== e.i &&
              x(r, r.next, t, e)
            )
              return !0;
            r = r.next;
          } while (r !== t);
          return !1;
        })(t, e) &&
        ((w(t, e) &&
          w(e, t) &&
          (function (t, e) {
            var r = t,
              n = !1,
              i = (t.x + e.x) / 2,
              o = (t.y + e.y) / 2;
            do {
              r.y > o != r.next.y > o &&
                r.next.y !== r.y &&
                i < ((r.next.x - r.x) * (o - r.y)) / (r.next.y - r.y) + r.x &&
                (n = !n),
                (r = r.next);
            } while (r !== t);
            return n;
          })(t, e) &&
          (m(t.prev, t, e.prev) || m(t, e.prev, e))) ||
          (_(t, e) && m(t.prev, t, t.next) > 0 && m(e.prev, e, e.next) > 0))
      );
    }
    function m(t, e, r) {
      return (e.y - t.y) * (r.x - e.x) - (e.x - t.x) * (r.y - e.y);
    }
    function _(t, e) {
      return t.x === e.x && t.y === e.y;
    }
    function x(t, e, r, n) {
      var i = E(m(t, e, r)),
        o = E(m(t, e, n)),
        s = E(m(r, n, t)),
        a = E(m(r, n, e));
      return (
        (i !== o && s !== a) ||
        !(0 !== i || !b(t, r, e)) ||
        !(0 !== o || !b(t, n, e)) ||
        !(0 !== s || !b(r, t, n)) ||
        !(0 !== a || !b(r, e, n))
      );
    }
    function b(t, e, r) {
      return (
        e.x <= Math.max(t.x, r.x) &&
        e.x >= Math.min(t.x, r.x) &&
        e.y <= Math.max(t.y, r.y) &&
        e.y >= Math.min(t.y, r.y)
      );
    }
    function E(t) {
      return t > 0 ? 1 : t < 0 ? -1 : 0;
    }
    function w(t, e) {
      return m(t.prev, t, t.next) < 0
        ? m(t, e, t.next) >= 0 && m(t, t.prev, e) >= 0
        : m(t, e, t.prev) < 0 || m(t, t.next, e) < 0;
    }
    function T(t, e) {
      var r = new A(t.i, t.x, t.y),
        n = new A(e.i, e.x, e.y),
        i = t.next,
        o = e.prev;
      return (
        (t.next = e),
        (e.prev = t),
        (r.next = i),
        (i.prev = r),
        (n.next = r),
        (r.prev = n),
        (o.next = n),
        (n.prev = o),
        n
      );
    }
    function S(t, e, r, n) {
      var i = new A(t, e, r);
      return (
        n
          ? ((i.next = n.next), (i.prev = n), (n.next.prev = i), (n.next = i))
          : ((i.prev = i), (i.next = i)),
        i
      );
    }
    function O(t) {
      (t.next.prev = t.prev),
        (t.prev.next = t.next),
        t.prevZ && (t.prevZ.nextZ = t.nextZ),
        t.nextZ && (t.nextZ.prevZ = t.prevZ);
    }
    function A(t, e, r) {
      (this.i = t),
        (this.x = e),
        (this.y = r),
        (this.prev = null),
        (this.next = null),
        (this.z = null),
        (this.prevZ = null),
        (this.nextZ = null),
        (this.steiner = !1);
    }
    function P(t, e, r, n) {
      for (var i = 0, o = e, s = r - n; o < r; o += n)
        (i += (t[s] - t[o]) * (t[o + 1] + t[s + 1])), (s = o);
      return i;
    }
    (t.exports = n),
      (t.exports.default = n),
      (n.deviation = function (t, e, r, n) {
        var i = e && e.length,
          o = i ? e[0] * r : t.length,
          s = Math.abs(P(t, 0, o, r));
        if (i)
          for (var a = 0, u = e.length; a < u; a++) {
            var h = e[a] * r,
              c = a < u - 1 ? e[a + 1] * r : t.length;
            s -= Math.abs(P(t, h, c, r));
          }
        var l = 0;
        for (a = 0; a < n.length; a += 3) {
          var f = n[a] * r,
            p = n[a + 1] * r,
            d = n[a + 2] * r;
          l += Math.abs(
            (t[f] - t[d]) * (t[p + 1] - t[f + 1]) -
              (t[f] - t[p]) * (t[d + 1] - t[f + 1])
          );
        }
        return 0 === s && 0 === l ? 0 : Math.abs((l - s) / s);
      }),
      (n.flatten = function (t) {
        for (
          var e = t[0][0].length,
            r = { vertices: [], holes: [], dimensions: e },
            n = 0,
            i = 0;
          i < t.length;
          i++
        ) {
          for (var o = 0; o < t[i].length; o++)
            for (var s = 0; s < e; s++) r.vertices.push(t[i][o][s]);
          i > 0 && ((n += t[i - 1].length), r.holes.push(n));
        }
        return r;
      });
  },
  function (t, e, r) {
    "use strict";
    var n,
      i,
      o,
      s = r(182),
      a = r(35),
      u = r(26),
      h = r(15),
      c = r(113),
      l = h("iterator"),
      f = !1;
    [].keys &&
      ("next" in (o = [].keys())
        ? (i = s(s(o))) !== Object.prototype && (n = i)
        : (f = !0)),
      null == n && (n = {}),
      c ||
        u(n, l) ||
        a(n, l, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: f });
  },
  function (t, e, r) {
    var n = r(26),
      i = r(121),
      o = r(112),
      s = r(422),
      a = o("IE_PROTO"),
      u = Object.prototype;
    t.exports = s
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = i(t)),
            n(t, a)
              ? t[a]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? u
              : null
          );
        };
  },
  function (t, e, r) {
    var n = r(54).f,
      i = r(26),
      o = r(15)("toStringTag");
    t.exports = function (t, e, r) {
      t &&
        !i((t = r ? t : t.prototype), o) &&
        n(t, o, { configurable: !0, value: e });
    };
  },
  function (t, e, r) {
    (function (n, i) {
      var o;
      !(function (n) {
        var s = n.Promise,
          a =
            s &&
            "resolve" in s &&
            "reject" in s &&
            "all" in s &&
            "race" in s &&
            (function () {
              var t;
              return (
                new s(function (e) {
                  t = e;
                }),
                "function" == typeof t
              );
            })();
        e
          ? ((e.Promise = a ? s : w), (e.Polyfill = w))
          : void 0 ===
              (o = function () {
                return a ? s : w;
              }.call(e, r, e, t)) || (t.exports = o);
        var u = function () {};
        function h(t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        }
        var c,
          l = void 0 !== i ? i : setTimeout,
          f = [];
        function p() {
          for (var t = 0; t < f.length; t++) f[t][0](f[t][1]);
          (f = []), (c = !1);
        }
        function d(t, e) {
          f.push([t, e]), c || ((c = !0), l(p, 0));
        }
        function v(t) {
          var e = t.owner,
            r = e.state_,
            n = e.data_,
            i = t[r],
            o = t.then;
          if ("function" == typeof i) {
            r = "fulfilled";
            try {
              n = i(n);
            } catch (t) {
              _(o, t);
            }
          }
          g(o, n) ||
            ("fulfilled" === r && y(o, n), "rejected" === r && _(o, n));
        }
        function g(t, e) {
          var r;
          try {
            if (t === e)
              throw new TypeError(
                "A promises callback cannot return that same promise."
              );
            if (e && ("function" == typeof e || "object" == typeof e)) {
              var n = e.then;
              if ("function" == typeof n)
                return (
                  n.call(
                    e,
                    function (n) {
                      r || ((r = !0), e !== n ? y(t, n) : m(t, n));
                    },
                    function (e) {
                      r || ((r = !0), _(t, e));
                    }
                  ),
                  !0
                );
            }
          } catch (e) {
            return r || _(t, e), !0;
          }
          return !1;
        }
        function y(t, e) {
          (t !== e && g(t, e)) || m(t, e);
        }
        function m(t, e) {
          "pending" === t.state_ &&
            ((t.state_ = "sealed"), (t.data_ = e), d(b, t));
        }
        function _(t, e) {
          "pending" === t.state_ &&
            ((t.state_ = "sealed"), (t.data_ = e), d(E, t));
        }
        function x(t) {
          var e = t.then_;
          t.then_ = void 0;
          for (var r = 0; r < e.length; r++) v(e[r]);
        }
        function b(t) {
          (t.state_ = "fulfilled"), x(t);
        }
        function E(t) {
          (t.state_ = "rejected"), x(t);
        }
        function w(t) {
          if ("function" != typeof t)
            throw new TypeError(
              "Promise constructor takes a function argument"
            );
          if (this instanceof w == !1)
            throw new TypeError(
              "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
            );
          (this.then_ = []),
            (function (t, e) {
              function r(t) {
                _(e, t);
              }
              try {
                t(function (t) {
                  y(e, t);
                }, r);
              } catch (t) {
                r(t);
              }
            })(t, this);
        }
        (w.prototype = {
          constructor: w,
          state_: "pending",
          then_: null,
          data_: void 0,
          then: function (t, e) {
            var r = {
              owner: this,
              then: new this.constructor(u),
              fulfilled: t,
              rejected: e,
            };
            return (
              "fulfilled" === this.state_ || "rejected" === this.state_
                ? d(v, r)
                : this.then_.push(r),
              r.then
            );
          },
          catch: function (t) {
            return this.then(null, t);
          },
        }),
          (w.all = function (t) {
            if (!h(t))
              throw new TypeError("You must pass an array to Promise.all().");
            return new this(function (e, r) {
              var n = [],
                i = 0;
              function o(t) {
                return (
                  i++,
                  function (r) {
                    (n[t] = r), --i || e(n);
                  }
                );
              }
              for (var s, a = 0; a < t.length; a++)
                (s = t[a]) && "function" == typeof s.then
                  ? s.then(o(a), r)
                  : (n[a] = s);
              i || e(n);
            });
          }),
          (w.race = function (t) {
            if (!h(t))
              throw new TypeError("You must pass an array to Promise.race().");
            return new this(function (e, r) {
              for (var n, i = 0; i < t.length; i++)
                (n = t[i]) && "function" == typeof n.then ? n.then(e, r) : e(n);
            });
          }),
          (w.resolve = function (t) {
            return t && "object" == typeof t && t.constructor === this
              ? t
              : new this(function (e) {
                  e(t);
                });
          }),
          (w.reject = function (t) {
            return new this(function (e, r) {
              r(t);
            });
          });
      })(
        "undefined" != typeof window
          ? window
          : void 0 !== n
          ? n
          : "undefined" != typeof self
          ? self
          : this
      );
    }.call(this, r(59), r(401).setImmediate));
  },
  function (t, e, r) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var n = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable;
    function s(t) {
      if (null == t)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(t);
    }
    t.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
          return !1;
        for (var e = {}, r = 0; r < 10; r++)
          e["_" + String.fromCharCode(r)] = r;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(e)
            .map(function (t) {
              return e[t];
            })
            .join("")
        )
          return !1;
        var n = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            n[t] = t;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Object.assign
      : function (t, e) {
          for (var r, a, u = s(t), h = 1; h < arguments.length; h++) {
            for (var c in (r = Object(arguments[h])))
              i.call(r, c) && (u[c] = r[c]);
            if (n) {
              a = n(r);
              for (var l = 0; l < a.length; l++)
                o.call(r, a[l]) && (u[a[l]] = r[a[l]]);
            }
          }
          return u;
        };
  },
  function (t, e, r) {
    var n, i;
    /*!
     * imagesLoaded v4.1.4
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */ !(function (o, s) {
      "use strict";
      (n = [r(429)]),
        void 0 ===
          (i = function (t) {
            return (function (t, e) {
              var r = t.jQuery,
                n = t.console;
              function i(t, e) {
                for (var r in e) t[r] = e[r];
                return t;
              }
              var o = Array.prototype.slice;
              function s(t, e, a) {
                if (!(this instanceof s)) return new s(t, e, a);
                var u,
                  h = t;
                ("string" == typeof t && (h = document.querySelectorAll(t)), h)
                  ? ((this.elements =
                      ((u = h),
                      Array.isArray(u)
                        ? u
                        : "object" == typeof u && "number" == typeof u.length
                        ? o.call(u)
                        : [u])),
                    (this.options = i({}, this.options)),
                    "function" == typeof e ? (a = e) : i(this.options, e),
                    a && this.on("always", a),
                    this.getImages(),
                    r && (this.jqDeferred = new r.Deferred()),
                    setTimeout(this.check.bind(this)))
                  : n.error("Bad element for imagesLoaded " + (h || t));
              }
              (s.prototype = Object.create(e.prototype)),
                (s.prototype.options = {}),
                (s.prototype.getImages = function () {
                  (this.images = []),
                    this.elements.forEach(this.addElementImages, this);
                }),
                (s.prototype.addElementImages = function (t) {
                  "IMG" == t.nodeName && this.addImage(t),
                    !0 === this.options.background &&
                      this.addElementBackgroundImages(t);
                  var e = t.nodeType;
                  if (e && a[e]) {
                    for (
                      var r = t.querySelectorAll("img"), n = 0;
                      n < r.length;
                      n++
                    ) {
                      var i = r[n];
                      this.addImage(i);
                    }
                    if ("string" == typeof this.options.background) {
                      var o = t.querySelectorAll(this.options.background);
                      for (n = 0; n < o.length; n++) {
                        var s = o[n];
                        this.addElementBackgroundImages(s);
                      }
                    }
                  }
                });
              var a = { 1: !0, 9: !0, 11: !0 };
              function u(t) {
                this.img = t;
              }
              function h(t, e) {
                (this.url = t), (this.element = e), (this.img = new Image());
              }
              return (
                (s.prototype.addElementBackgroundImages = function (t) {
                  var e = getComputedStyle(t);
                  if (e)
                    for (
                      var r = /url\((['"])?(.*?)\1\)/gi,
                        n = r.exec(e.backgroundImage);
                      null !== n;

                    ) {
                      var i = n && n[2];
                      i && this.addBackground(i, t),
                        (n = r.exec(e.backgroundImage));
                    }
                }),
                (s.prototype.addImage = function (t) {
                  var e = new u(t);
                  this.images.push(e);
                }),
                (s.prototype.addBackground = function (t, e) {
                  var r = new h(t, e);
                  this.images.push(r);
                }),
                (s.prototype.check = function () {
                  var t = this;
                  function e(e, r, n) {
                    setTimeout(function () {
                      t.progress(e, r, n);
                    });
                  }
                  (this.progressedCount = 0),
                    (this.hasAnyBroken = !1),
                    this.images.length
                      ? this.images.forEach(function (t) {
                          t.once("progress", e), t.check();
                        })
                      : this.complete();
                }),
                (s.prototype.progress = function (t, e, r) {
                  this.progressedCount++,
                    (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
                    this.emitEvent("progress", [this, t, e]),
                    this.jqDeferred &&
                      this.jqDeferred.notify &&
                      this.jqDeferred.notify(this, t),
                    this.progressedCount == this.images.length &&
                      this.complete(),
                    this.options.debug && n && n.log("progress: " + r, t, e);
                }),
                (s.prototype.complete = function () {
                  var t = this.hasAnyBroken ? "fail" : "done";
                  if (
                    ((this.isComplete = !0),
                    this.emitEvent(t, [this]),
                    this.emitEvent("always", [this]),
                    this.jqDeferred)
                  ) {
                    var e = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[e](this);
                  }
                }),
                (u.prototype = Object.create(e.prototype)),
                (u.prototype.check = function () {
                  this.getIsImageComplete()
                    ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                    : ((this.proxyImage = new Image()),
                      this.proxyImage.addEventListener("load", this),
                      this.proxyImage.addEventListener("error", this),
                      this.img.addEventListener("load", this),
                      this.img.addEventListener("error", this),
                      (this.proxyImage.src = this.img.src));
                }),
                (u.prototype.getIsImageComplete = function () {
                  return this.img.complete && this.img.naturalWidth;
                }),
                (u.prototype.confirm = function (t, e) {
                  (this.isLoaded = t),
                    this.emitEvent("progress", [this, this.img, e]);
                }),
                (u.prototype.handleEvent = function (t) {
                  var e = "on" + t.type;
                  this[e] && this[e](t);
                }),
                (u.prototype.onload = function () {
                  this.confirm(!0, "onload"), this.unbindEvents();
                }),
                (u.prototype.onerror = function () {
                  this.confirm(!1, "onerror"), this.unbindEvents();
                }),
                (u.prototype.unbindEvents = function () {
                  this.proxyImage.removeEventListener("load", this),
                    this.proxyImage.removeEventListener("error", this),
                    this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
                }),
                (h.prototype = Object.create(u.prototype)),
                (h.prototype.check = function () {
                  this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this),
                    (this.img.src = this.url),
                    this.getIsImageComplete() &&
                      (this.confirm(
                        0 !== this.img.naturalWidth,
                        "naturalWidth"
                      ),
                      this.unbindEvents());
                }),
                (h.prototype.unbindEvents = function () {
                  this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
                }),
                (h.prototype.confirm = function (t, e) {
                  (this.isLoaded = t),
                    this.emitEvent("progress", [this, this.element, e]);
                }),
                (s.makeJQueryPlugin = function (e) {
                  (e = e || t.jQuery) &&
                    ((r = e).fn.imagesLoaded = function (t, e) {
                      return new s(this, t, e).jqDeferred.promise(r(this));
                    });
                }),
                s.makeJQueryPlugin(),
                s
              );
            })(o, t);
          }.apply(e, n)) || (t.exports = i);
    })("undefined" != typeof window ? window : this);
  },
  function (t, e, r) {
    r(188), (t.exports = r(430));
  },
  function (t, e, r) {
    "use strict";
    r(189);
    var n,
      i = (n = r(361)) && n.__esModule ? n : { default: n };
    i.default._babelPolyfill &&
      "undefined" != typeof console &&
      console.warn &&
      console.warn(
        "@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."
      ),
      (i.default._babelPolyfill = !0);
  },
  function (t, e, r) {
    "use strict";
    r(190),
      r(333),
      r(335),
      r(338),
      r(340),
      r(342),
      r(344),
      r(346),
      r(348),
      r(350),
      r(352),
      r(354),
      r(356),
      r(360);
  },
  function (t, e, r) {
    r(191),
      r(194),
      r(195),
      r(196),
      r(197),
      r(198),
      r(199),
      r(200),
      r(201),
      r(202),
      r(203),
      r(204),
      r(205),
      r(206),
      r(207),
      r(208),
      r(209),
      r(210),
      r(211),
      r(212),
      r(213),
      r(214),
      r(215),
      r(216),
      r(217),
      r(218),
      r(219),
      r(220),
      r(221),
      r(222),
      r(223),
      r(224),
      r(225),
      r(226),
      r(227),
      r(228),
      r(229),
      r(230),
      r(231),
      r(232),
      r(233),
      r(234),
      r(235),
      r(237),
      r(238),
      r(239),
      r(240),
      r(241),
      r(242),
      r(243),
      r(244),
      r(245),
      r(246),
      r(247),
      r(248),
      r(249),
      r(250),
      r(251),
      r(252),
      r(253),
      r(254),
      r(255),
      r(256),
      r(257),
      r(258),
      r(259),
      r(260),
      r(261),
      r(262),
      r(263),
      r(264),
      r(265),
      r(266),
      r(267),
      r(268),
      r(269),
      r(270),
      r(272),
      r(273),
      r(275),
      r(276),
      r(277),
      r(278),
      r(279),
      r(280),
      r(281),
      r(283),
      r(284),
      r(285),
      r(286),
      r(287),
      r(288),
      r(289),
      r(290),
      r(291),
      r(292),
      r(293),
      r(294),
      r(295),
      r(100),
      r(296),
      r(144),
      r(297),
      r(145),
      r(298),
      r(299),
      r(300),
      r(301),
      r(146),
      r(304),
      r(305),
      r(306),
      r(307),
      r(308),
      r(309),
      r(310),
      r(311),
      r(312),
      r(313),
      r(314),
      r(315),
      r(316),
      r(317),
      r(318),
      r(319),
      r(320),
      r(321),
      r(322),
      r(323),
      r(324),
      r(325),
      r(326),
      r(327),
      r(328),
      r(329),
      r(330),
      r(331),
      r(332),
      (t.exports = r(7));
  },
  function (t, e, r) {
    "use strict";
    var n = r(1),
      i = r(16),
      o = r(8),
      s = r(0),
      a = r(11),
      u = r(34).KEY,
      h = r(2),
      c = r(62),
      l = r(48),
      f = r(37),
      p = r(5),
      d = r(81),
      v = r(125),
      g = r(193),
      y = r(65),
      m = r(3),
      _ = r(4),
      x = r(10),
      b = r(18),
      E = r(33),
      w = r(36),
      T = r(41),
      S = r(128),
      O = r(23),
      A = r(64),
      P = r(9),
      I = r(39),
      C = O.f,
      M = P.f,
      R = S.f,
      D = n.Symbol,
      L = n.JSON,
      N = L && L.stringify,
      F = p("_hidden"),
      U = p("toPrimitive"),
      k = {}.propertyIsEnumerable,
      B = c("symbol-registry"),
      j = c("symbols"),
      H = c("op-symbols"),
      G = Object.prototype,
      X = "function" == typeof D && !!A.f,
      z = n.QObject,
      V = !z || !z.prototype || !z.prototype.findChild,
      Y =
        o &&
        h(function () {
          return (
            7 !=
            T(
              M({}, "a", {
                get: function () {
                  return M(this, "a", { value: 7 }).a;
                },
              })
            ).a
          );
        })
          ? function (t, e, r) {
              var n = C(G, e);
              n && delete G[e], M(t, e, r), n && t !== G && M(G, e, n);
            }
          : M,
      W = function (t) {
        var e = (j[t] = T(D.prototype));
        return (e._k = t), e;
      },
      q =
        X && "symbol" == typeof D.iterator
          ? function (t) {
              return "symbol" == typeof t;
            }
          : function (t) {
              return t instanceof D;
            },
      K = function (t, e, r) {
        return (
          t === G && K(H, e, r),
          m(t),
          (e = E(e, !0)),
          m(r),
          i(j, e)
            ? (r.enumerable
                ? (i(t, F) && t[F][e] && (t[F][e] = !1),
                  (r = T(r, { enumerable: w(0, !1) })))
                : (i(t, F) || M(t, F, w(1, {})), (t[F][e] = !0)),
              Y(t, e, r))
            : M(t, e, r)
        );
      },
      Z = function (t, e) {
        m(t);
        for (var r, n = g((e = b(e))), i = 0, o = n.length; o > i; )
          K(t, (r = n[i++]), e[r]);
        return t;
      },
      J = function (t) {
        var e = k.call(this, (t = E(t, !0)));
        return (
          !(this === G && i(j, t) && !i(H, t)) &&
          (!(e || !i(this, t) || !i(j, t) || (i(this, F) && this[F][t])) || e)
        );
      },
      $ = function (t, e) {
        if (((t = b(t)), (e = E(e, !0)), t !== G || !i(j, e) || i(H, e))) {
          var r = C(t, e);
          return (
            !r || !i(j, e) || (i(t, F) && t[F][e]) || (r.enumerable = !0), r
          );
        }
      },
      Q = function (t) {
        for (var e, r = R(b(t)), n = [], o = 0; r.length > o; )
          i(j, (e = r[o++])) || e == F || e == u || n.push(e);
        return n;
      },
      tt = function (t) {
        for (
          var e, r = t === G, n = R(r ? H : b(t)), o = [], s = 0;
          n.length > s;

        )
          !i(j, (e = n[s++])) || (r && !i(G, e)) || o.push(j[e]);
        return o;
      };
    X ||
      (a(
        (D = function () {
          if (this instanceof D)
            throw TypeError("Symbol is not a constructor!");
          var t = f(arguments.length > 0 ? arguments[0] : void 0),
            e = function (r) {
              this === G && e.call(H, r),
                i(this, F) && i(this[F], t) && (this[F][t] = !1),
                Y(this, t, w(1, r));
            };
          return o && V && Y(G, t, { configurable: !0, set: e }), W(t);
        }).prototype,
        "toString",
        function () {
          return this._k;
        }
      ),
      (O.f = $),
      (P.f = K),
      (r(42).f = S.f = Q),
      (r(56).f = J),
      (A.f = tt),
      o && !r(38) && a(G, "propertyIsEnumerable", J, !0),
      (d.f = function (t) {
        return W(p(t));
      })),
      s(s.G + s.W + s.F * !X, { Symbol: D });
    for (
      var et =
          "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
            ","
          ),
        rt = 0;
      et.length > rt;

    )
      p(et[rt++]);
    for (var nt = I(p.store), it = 0; nt.length > it; ) v(nt[it++]);
    s(s.S + s.F * !X, "Symbol", {
      for: function (t) {
        return i(B, (t += "")) ? B[t] : (B[t] = D(t));
      },
      keyFor: function (t) {
        if (!q(t)) throw TypeError(t + " is not a symbol!");
        for (var e in B) if (B[e] === t) return e;
      },
      useSetter: function () {
        V = !0;
      },
      useSimple: function () {
        V = !1;
      },
    }),
      s(s.S + s.F * !X, "Object", {
        create: function (t, e) {
          return void 0 === e ? T(t) : Z(T(t), e);
        },
        defineProperty: K,
        defineProperties: Z,
        getOwnPropertyDescriptor: $,
        getOwnPropertyNames: Q,
        getOwnPropertySymbols: tt,
      });
    var ot = h(function () {
      A.f(1);
    });
    s(s.S + s.F * ot, "Object", {
      getOwnPropertySymbols: function (t) {
        return A.f(x(t));
      },
    }),
      L &&
        s(
          s.S +
            s.F *
              (!X ||
                h(function () {
                  var t = D();
                  return (
                    "[null]" != N([t]) ||
                    "{}" != N({ a: t }) ||
                    "{}" != N(Object(t))
                  );
                })),
          "JSON",
          {
            stringify: function (t) {
              for (var e, r, n = [t], i = 1; arguments.length > i; )
                n.push(arguments[i++]);
              if (((r = e = n[1]), (_(e) || void 0 !== t) && !q(t)))
                return (
                  y(e) ||
                    (e = function (t, e) {
                      if (
                        ("function" == typeof r && (e = r.call(this, t, e)),
                        !q(e))
                      )
                        return e;
                    }),
                  (n[1] = e),
                  N.apply(L, n)
                );
            },
          }
        ),
      D.prototype[U] || r(17)(D.prototype, U, D.prototype.valueOf),
      l(D, "Symbol"),
      l(Math, "Math", !0),
      l(n.JSON, "JSON", !0);
  },
  function (t, e, r) {
    t.exports = r(62)("native-function-to-string", Function.toString);
  },
  function (t, e, r) {
    var n = r(39),
      i = r(64),
      o = r(56);
    t.exports = function (t) {
      var e = n(t),
        r = i.f;
      if (r)
        for (var s, a = r(t), u = o.f, h = 0; a.length > h; )
          u.call(t, (s = a[h++])) && e.push(s);
      return e;
    };
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Object", { create: r(41) });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S + n.F * !r(8), "Object", { defineProperty: r(9).f });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S + n.F * !r(8), "Object", { defineProperties: r(127) });
  },
  function (t, e, r) {
    var n = r(18),
      i = r(23).f;
    r(24)("getOwnPropertyDescriptor", function () {
      return function (t, e) {
        return i(n(t), e);
      };
    });
  },
  function (t, e, r) {
    var n = r(10),
      i = r(43);
    r(24)("getPrototypeOf", function () {
      return function (t) {
        return i(n(t));
      };
    });
  },
  function (t, e, r) {
    var n = r(10),
      i = r(39);
    r(24)("keys", function () {
      return function (t) {
        return i(n(t));
      };
    });
  },
  function (t, e, r) {
    r(24)("getOwnPropertyNames", function () {
      return r(128).f;
    });
  },
  function (t, e, r) {
    var n = r(4),
      i = r(34).onFreeze;
    r(24)("freeze", function (t) {
      return function (e) {
        return t && n(e) ? t(i(e)) : e;
      };
    });
  },
  function (t, e, r) {
    var n = r(4),
      i = r(34).onFreeze;
    r(24)("seal", function (t) {
      return function (e) {
        return t && n(e) ? t(i(e)) : e;
      };
    });
  },
  function (t, e, r) {
    var n = r(4),
      i = r(34).onFreeze;
    r(24)("preventExtensions", function (t) {
      return function (e) {
        return t && n(e) ? t(i(e)) : e;
      };
    });
  },
  function (t, e, r) {
    var n = r(4);
    r(24)("isFrozen", function (t) {
      return function (e) {
        return !n(e) || (!!t && t(e));
      };
    });
  },
  function (t, e, r) {
    var n = r(4);
    r(24)("isSealed", function (t) {
      return function (e) {
        return !n(e) || (!!t && t(e));
      };
    });
  },
  function (t, e, r) {
    var n = r(4);
    r(24)("isExtensible", function (t) {
      return function (e) {
        return !!n(e) && (!t || t(e));
      };
    });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S + n.F, "Object", { assign: r(129) });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Object", { is: r(130) });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Object", { setPrototypeOf: r(85).set });
  },
  function (t, e, r) {
    "use strict";
    var n = r(57),
      i = {};
    (i[r(5)("toStringTag")] = "z"),
      i + "" != "[object z]" &&
        r(11)(
          Object.prototype,
          "toString",
          function () {
            return "[object " + n(this) + "]";
          },
          !0
        );
  },
  function (t, e, r) {
    var n = r(0);
    n(n.P, "Function", { bind: r(131) });
  },
  function (t, e, r) {
    var n = r(9).f,
      i = Function.prototype,
      o = /^\s*function ([^ (]*)/;
    "name" in i ||
      (r(8) &&
        n(i, "name", {
          configurable: !0,
          get: function () {
            try {
              return ("" + this).match(o)[1];
            } catch (t) {
              return "";
            }
          },
        }));
  },
  function (t, e, r) {
    "use strict";
    var n = r(4),
      i = r(43),
      o = r(5)("hasInstance"),
      s = Function.prototype;
    o in s ||
      r(9).f(s, o, {
        value: function (t) {
          if ("function" != typeof this || !n(t)) return !1;
          if (!n(this.prototype)) return t instanceof this;
          for (; (t = i(t)); ) if (this.prototype === t) return !0;
          return !1;
        },
      });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(133);
    n(n.G + n.F * (parseInt != i), { parseInt: i });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(134);
    n(n.G + n.F * (parseFloat != i), { parseFloat: i });
  },
  function (t, e, r) {
    "use strict";
    var n = r(1),
      i = r(16),
      o = r(28),
      s = r(87),
      a = r(33),
      u = r(2),
      h = r(42).f,
      c = r(23).f,
      l = r(9).f,
      f = r(49).trim,
      p = n.Number,
      d = p,
      v = p.prototype,
      g = "Number" == o(r(41)(v)),
      y = "trim" in String.prototype,
      m = function (t) {
        var e = a(t, !1);
        if ("string" == typeof e && e.length > 2) {
          var r,
            n,
            i,
            o = (e = y ? e.trim() : f(e, 3)).charCodeAt(0);
          if (43 === o || 45 === o) {
            if (88 === (r = e.charCodeAt(2)) || 120 === r) return NaN;
          } else if (48 === o) {
            switch (e.charCodeAt(1)) {
              case 66:
              case 98:
                (n = 2), (i = 49);
                break;
              case 79:
              case 111:
                (n = 8), (i = 55);
                break;
              default:
                return +e;
            }
            for (var s, u = e.slice(2), h = 0, c = u.length; h < c; h++)
              if ((s = u.charCodeAt(h)) < 48 || s > i) return NaN;
            return parseInt(u, n);
          }
        }
        return +e;
      };
    if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
      p = function (t) {
        var e = arguments.length < 1 ? 0 : t,
          r = this;
        return r instanceof p &&
          (g
            ? u(function () {
                v.valueOf.call(r);
              })
            : "Number" != o(r))
          ? s(new d(m(e)), r, p)
          : m(e);
      };
      for (
        var _,
          x = r(8)
            ? h(d)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                ","
              ),
          b = 0;
        x.length > b;
        b++
      )
        i(d, (_ = x[b])) && !i(p, _) && l(p, _, c(d, _));
      (p.prototype = v), (v.constructor = p), r(11)(n, "Number", p);
    }
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(22),
      o = r(135),
      s = r(88),
      a = (1).toFixed,
      u = Math.floor,
      h = [0, 0, 0, 0, 0, 0],
      c = "Number.toFixed: incorrect invocation!",
      l = function (t, e) {
        for (var r = -1, n = e; ++r < 6; )
          (n += t * h[r]), (h[r] = n % 1e7), (n = u(n / 1e7));
      },
      f = function (t) {
        for (var e = 6, r = 0; --e >= 0; )
          (r += h[e]), (h[e] = u(r / t)), (r = (r % t) * 1e7);
      },
      p = function () {
        for (var t = 6, e = ""; --t >= 0; )
          if ("" !== e || 0 === t || 0 !== h[t]) {
            var r = String(h[t]);
            e = "" === e ? r : e + s.call("0", 7 - r.length) + r;
          }
        return e;
      },
      d = function (t, e, r) {
        return 0 === e
          ? r
          : e % 2 == 1
          ? d(t, e - 1, r * t)
          : d(t * t, e / 2, r);
      };
    n(
      n.P +
        n.F *
          ((!!a &&
            ("0.000" !== (8e-5).toFixed(3) ||
              "1" !== (0.9).toFixed(0) ||
              "1.25" !== (1.255).toFixed(2) ||
              "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
            !r(2)(function () {
              a.call({});
            })),
      "Number",
      {
        toFixed: function (t) {
          var e,
            r,
            n,
            a,
            u = o(this, c),
            h = i(t),
            v = "",
            g = "0";
          if (h < 0 || h > 20) throw RangeError(c);
          if (u != u) return "NaN";
          if (u <= -1e21 || u >= 1e21) return String(u);
          if ((u < 0 && ((v = "-"), (u = -u)), u > 1e-21))
            if (
              ((r =
                (e =
                  (function (t) {
                    for (var e = 0, r = t; r >= 4096; ) (e += 12), (r /= 4096);
                    for (; r >= 2; ) (e += 1), (r /= 2);
                    return e;
                  })(u * d(2, 69, 1)) - 69) < 0
                  ? u * d(2, -e, 1)
                  : u / d(2, e, 1)),
              (r *= 4503599627370496),
              (e = 52 - e) > 0)
            ) {
              for (l(0, r), n = h; n >= 7; ) l(1e7, 0), (n -= 7);
              for (l(d(10, n, 1), 0), n = e - 1; n >= 23; )
                f(1 << 23), (n -= 23);
              f(1 << n), l(1, 1), f(2), (g = p());
            } else l(0, r), l(1 << -e, 0), (g = p() + s.call("0", h));
          return (g =
            h > 0
              ? v +
                ((a = g.length) <= h
                  ? "0." + s.call("0", h - a) + g
                  : g.slice(0, a - h) + "." + g.slice(a - h))
              : v + g);
        },
      }
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(2),
      o = r(135),
      s = (1).toPrecision;
    n(
      n.P +
        n.F *
          (i(function () {
            return "1" !== s.call(1, void 0);
          }) ||
            !i(function () {
              s.call({});
            })),
      "Number",
      {
        toPrecision: function (t) {
          var e = o(this, "Number#toPrecision: incorrect invocation!");
          return void 0 === t ? s.call(e) : s.call(e, t);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Number", { EPSILON: Math.pow(2, -52) });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(1).isFinite;
    n(n.S, "Number", {
      isFinite: function (t) {
        return "number" == typeof t && i(t);
      },
    });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Number", { isInteger: r(136) });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Number", {
      isNaN: function (t) {
        return t != t;
      },
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(136),
      o = Math.abs;
    n(n.S, "Number", {
      isSafeInteger: function (t) {
        return i(t) && o(t) <= 9007199254740991;
      },
    });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(134);
    n(n.S + n.F * (Number.parseFloat != i), "Number", { parseFloat: i });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(133);
    n(n.S + n.F * (Number.parseInt != i), "Number", { parseInt: i });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(137),
      o = Math.sqrt,
      s = Math.acosh;
    n(
      n.S +
        n.F *
          !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0),
      "Math",
      {
        acosh: function (t) {
          return (t = +t) < 1
            ? NaN
            : t > 94906265.62425156
            ? Math.log(t) + Math.LN2
            : i(t - 1 + o(t - 1) * o(t + 1));
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = Math.asinh;
    n(n.S + n.F * !(i && 1 / i(0) > 0), "Math", {
      asinh: function t(e) {
        return isFinite((e = +e)) && 0 != e
          ? e < 0
            ? -t(-e)
            : Math.log(e + Math.sqrt(e * e + 1))
          : e;
      },
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = Math.atanh;
    n(n.S + n.F * !(i && 1 / i(-0) < 0), "Math", {
      atanh: function (t) {
        return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2;
      },
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(89);
    n(n.S, "Math", {
      cbrt: function (t) {
        return i((t = +t)) * Math.pow(Math.abs(t), 1 / 3);
      },
    });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
      clz32: function (t) {
        return (t >>>= 0)
          ? 31 - Math.floor(Math.log(t + 0.5) * Math.LOG2E)
          : 32;
      },
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = Math.exp;
    n(n.S, "Math", {
      cosh: function (t) {
        return (i((t = +t)) + i(-t)) / 2;
      },
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(90);
    n(n.S + n.F * (i != Math.expm1), "Math", { expm1: i });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Math", { fround: r(236) });
  },
  function (t, e, r) {
    var n = r(89),
      i = Math.pow,
      o = i(2, -52),
      s = i(2, -23),
      a = i(2, 127) * (2 - s),
      u = i(2, -126);
    t.exports =
      Math.fround ||
      function (t) {
        var e,
          r,
          i = Math.abs(t),
          h = n(t);
        return i < u
          ? h * (i / u / s + 1 / o - 1 / o) * u * s
          : (r = (e = (1 + s / o) * i) - (e - i)) > a || r != r
          ? h * (1 / 0)
          : h * r;
      };
  },
  function (t, e, r) {
    var n = r(0),
      i = Math.abs;
    n(n.S, "Math", {
      hypot: function (t, e) {
        for (var r, n, o = 0, s = 0, a = arguments.length, u = 0; s < a; )
          u < (r = i(arguments[s++]))
            ? ((o = o * (n = u / r) * n + 1), (u = r))
            : (o += r > 0 ? (n = r / u) * n : r);
        return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(o);
      },
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = Math.imul;
    n(
      n.S +
        n.F *
          r(2)(function () {
            return -5 != i(4294967295, 5) || 2 != i.length;
          }),
      "Math",
      {
        imul: function (t, e) {
          var r = +t,
            n = +e,
            i = 65535 & r,
            o = 65535 & n;
          return (
            0 |
            (i * o +
              ((((65535 & (r >>> 16)) * o + i * (65535 & (n >>> 16))) << 16) >>>
                0))
          );
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
      log10: function (t) {
        return Math.log(t) * Math.LOG10E;
      },
    });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Math", { log1p: r(137) });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
      log2: function (t) {
        return Math.log(t) / Math.LN2;
      },
    });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Math", { sign: r(89) });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(90),
      o = Math.exp;
    n(
      n.S +
        n.F *
          r(2)(function () {
            return -2e-17 != !Math.sinh(-2e-17);
          }),
      "Math",
      {
        sinh: function (t) {
          return Math.abs((t = +t)) < 1
            ? (i(t) - i(-t)) / 2
            : (o(t - 1) - o(-t - 1)) * (Math.E / 2);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(90),
      o = Math.exp;
    n(n.S, "Math", {
      tanh: function (t) {
        var e = i((t = +t)),
          r = i(-t);
        return e == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (e - r) / (o(t) + o(-t));
      },
    });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Math", {
      trunc: function (t) {
        return (t > 0 ? Math.floor : Math.ceil)(t);
      },
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(40),
      o = String.fromCharCode,
      s = String.fromCodePoint;
    n(n.S + n.F * (!!s && 1 != s.length), "String", {
      fromCodePoint: function (t) {
        for (var e, r = [], n = arguments.length, s = 0; n > s; ) {
          if (((e = +arguments[s++]), i(e, 1114111) !== e))
            throw RangeError(e + " is not a valid code point");
          r.push(
            e < 65536
              ? o(e)
              : o(55296 + ((e -= 65536) >> 10), (e % 1024) + 56320)
          );
        }
        return r.join("");
      },
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(18),
      o = r(6);
    n(n.S, "String", {
      raw: function (t) {
        for (
          var e = i(t.raw),
            r = o(e.length),
            n = arguments.length,
            s = [],
            a = 0;
          r > a;

        )
          s.push(String(e[a++])), a < n && s.push(String(arguments[a]));
        return s.join("");
      },
    });
  },
  function (t, e, r) {
    "use strict";
    r(49)("trim", function (t) {
      return function () {
        return t(this, 3);
      };
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(91)(!0);
    r(92)(
      String,
      "String",
      function (t) {
        (this._t = String(t)), (this._i = 0);
      },
      function () {
        var t,
          e = this._t,
          r = this._i;
        return r >= e.length
          ? { value: void 0, done: !0 }
          : ((t = n(e, r)), (this._i += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(91)(!1);
    n(n.P, "String", {
      codePointAt: function (t) {
        return i(this, t);
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(6),
      o = r(93),
      s = "".endsWith;
    n(n.P + n.F * r(95)("endsWith"), "String", {
      endsWith: function (t) {
        var e = o(this, t, "endsWith"),
          r = arguments.length > 1 ? arguments[1] : void 0,
          n = i(e.length),
          a = void 0 === r ? n : Math.min(i(r), n),
          u = String(t);
        return s ? s.call(e, u, a) : e.slice(a - u.length, a) === u;
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(93);
    n(n.P + n.F * r(95)("includes"), "String", {
      includes: function (t) {
        return !!~i(this, t, "includes").indexOf(
          t,
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.P, "String", { repeat: r(88) });
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(6),
      o = r(93),
      s = "".startsWith;
    n(n.P + n.F * r(95)("startsWith"), "String", {
      startsWith: function (t) {
        var e = o(this, t, "startsWith"),
          r = i(
            Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)
          ),
          n = String(t);
        return s ? s.call(e, n, r) : e.slice(r, r + n.length) === n;
      },
    });
  },
  function (t, e, r) {
    "use strict";
    r(12)("anchor", function (t) {
      return function (e) {
        return t(this, "a", "name", e);
      };
    });
  },
  function (t, e, r) {
    "use strict";
    r(12)("big", function (t) {
      return function () {
        return t(this, "big", "", "");
      };
    });
  },
  function (t, e, r) {
    "use strict";
    r(12)("blink", function (t) {
      return function () {
        return t(this, "blink", "", "");
      };
    });
  },
  function (t, e, r) {
    "use strict";
    r(12)("bold", function (t) {
      return function () {
        return t(this, "b", "", "");
      };
    });
  },
  function (t, e, r) {
    "use strict";
    r(12)("fixed", function (t) {
      return function () {
        return t(this, "tt", "", "");
      };
    });
  },
  function (t, e, r) {
    "use strict";
    r(12)("fontcolor", function (t) {
      return function (e) {
        return t(this, "font", "color", e);
      };
    });
  },
  function (t, e, r) {
    "use strict";
    r(12)("fontsize", function (t) {
      return function (e) {
        return t(this, "font", "size", e);
      };
    });
  },
  function (t, e, r) {
    "use strict";
    r(12)("italics", function (t) {
      return function () {
        return t(this, "i", "", "");
      };
    });
  },
  function (t, e, r) {
    "use strict";
    r(12)("link", function (t) {
      return function (e) {
        return t(this, "a", "href", e);
      };
    });
  },
  function (t, e, r) {
    "use strict";
    r(12)("small", function (t) {
      return function () {
        return t(this, "small", "", "");
      };
    });
  },
  function (t, e, r) {
    "use strict";
    r(12)("strike", function (t) {
      return function () {
        return t(this, "strike", "", "");
      };
    });
  },
  function (t, e, r) {
    "use strict";
    r(12)("sub", function (t) {
      return function () {
        return t(this, "sub", "", "");
      };
    });
  },
  function (t, e, r) {
    "use strict";
    r(12)("sup", function (t) {
      return function () {
        return t(this, "sup", "", "");
      };
    });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Date", {
      now: function () {
        return new Date().getTime();
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(10),
      o = r(33);
    n(
      n.P +
        n.F *
          r(2)(function () {
            return (
              null !== new Date(NaN).toJSON() ||
              1 !==
                Date.prototype.toJSON.call({
                  toISOString: function () {
                    return 1;
                  },
                })
            );
          }),
      "Date",
      {
        toJSON: function (t) {
          var e = i(this),
            r = o(e);
          return "number" != typeof r || isFinite(r) ? e.toISOString() : null;
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(271);
    n(n.P + n.F * (Date.prototype.toISOString !== i), "Date", {
      toISOString: i,
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(2),
      i = Date.prototype.getTime,
      o = Date.prototype.toISOString,
      s = function (t) {
        return t > 9 ? t : "0" + t;
      };
    t.exports =
      n(function () {
        return "0385-07-25T07:06:39.999Z" != o.call(new Date(-50000000000001));
      }) ||
      !n(function () {
        o.call(new Date(NaN));
      })
        ? function () {
            if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
            var t = this,
              e = t.getUTCFullYear(),
              r = t.getUTCMilliseconds(),
              n = e < 0 ? "-" : e > 9999 ? "+" : "";
            return (
              n +
              ("00000" + Math.abs(e)).slice(n ? -6 : -4) +
              "-" +
              s(t.getUTCMonth() + 1) +
              "-" +
              s(t.getUTCDate()) +
              "T" +
              s(t.getUTCHours()) +
              ":" +
              s(t.getUTCMinutes()) +
              ":" +
              s(t.getUTCSeconds()) +
              "." +
              (r > 99 ? r : "0" + s(r)) +
              "Z"
            );
          }
        : o;
  },
  function (t, e, r) {
    var n = Date.prototype,
      i = n.toString,
      o = n.getTime;
    new Date(NaN) + "" != "Invalid Date" &&
      r(11)(n, "toString", function () {
        var t = o.call(this);
        return t == t ? i.call(this) : "Invalid Date";
      });
  },
  function (t, e, r) {
    var n = r(5)("toPrimitive"),
      i = Date.prototype;
    n in i || r(17)(i, n, r(274));
  },
  function (t, e, r) {
    "use strict";
    var n = r(3),
      i = r(33);
    t.exports = function (t) {
      if ("string" !== t && "number" !== t && "default" !== t)
        throw TypeError("Incorrect hint");
      return i(n(this), "number" != t);
    };
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Array", { isArray: r(65) });
  },
  function (t, e, r) {
    "use strict";
    var n = r(20),
      i = r(0),
      o = r(10),
      s = r(139),
      a = r(96),
      u = r(6),
      h = r(97),
      c = r(98);
    i(
      i.S +
        i.F *
          !r(66)(function (t) {
            Array.from(t);
          }),
      "Array",
      {
        from: function (t) {
          var e,
            r,
            i,
            l,
            f = o(t),
            p = "function" == typeof this ? this : Array,
            d = arguments.length,
            v = d > 1 ? arguments[1] : void 0,
            g = void 0 !== v,
            y = 0,
            m = c(f);
          if (
            (g && (v = n(v, d > 2 ? arguments[2] : void 0, 2)),
            null == m || (p == Array && a(m)))
          )
            for (r = new p((e = u(f.length))); e > y; y++)
              h(r, y, g ? v(f[y], y) : f[y]);
          else
            for (l = m.call(f), r = new p(); !(i = l.next()).done; y++)
              h(r, y, g ? s(l, v, [i.value, y], !0) : i.value);
          return (r.length = y), r;
        },
      }
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(97);
    n(
      n.S +
        n.F *
          r(2)(function () {
            function t() {}
            return !(Array.of.call(t) instanceof t);
          }),
      "Array",
      {
        of: function () {
          for (
            var t = 0,
              e = arguments.length,
              r = new ("function" == typeof this ? this : Array)(e);
            e > t;

          )
            i(r, t, arguments[t++]);
          return (r.length = e), r;
        },
      }
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(18),
      o = [].join;
    n(n.P + n.F * (r(55) != Object || !r(19)(o)), "Array", {
      join: function (t) {
        return o.call(i(this), void 0 === t ? "," : t);
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(84),
      o = r(28),
      s = r(40),
      a = r(6),
      u = [].slice;
    n(
      n.P +
        n.F *
          r(2)(function () {
            i && u.call(i);
          }),
      "Array",
      {
        slice: function (t, e) {
          var r = a(this.length),
            n = o(this);
          if (((e = void 0 === e ? r : e), "Array" == n))
            return u.call(this, t, e);
          for (
            var i = s(t, r), h = s(e, r), c = a(h - i), l = new Array(c), f = 0;
            f < c;
            f++
          )
            l[f] = "String" == n ? this.charAt(i + f) : this[i + f];
          return l;
        },
      }
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(21),
      o = r(10),
      s = r(2),
      a = [].sort,
      u = [1, 2, 3];
    n(
      n.P +
        n.F *
          (s(function () {
            u.sort(void 0);
          }) ||
            !s(function () {
              u.sort(null);
            }) ||
            !r(19)(a)),
      "Array",
      {
        sort: function (t) {
          return void 0 === t ? a.call(o(this)) : a.call(o(this), i(t));
        },
      }
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(25)(0),
      o = r(19)([].forEach, !0);
    n(n.P + n.F * !o, "Array", {
      forEach: function (t) {
        return i(this, t, arguments[1]);
      },
    });
  },
  function (t, e, r) {
    var n = r(4),
      i = r(65),
      o = r(5)("species");
    t.exports = function (t) {
      var e;
      return (
        i(t) &&
          ("function" != typeof (e = t.constructor) ||
            (e !== Array && !i(e.prototype)) ||
            (e = void 0),
          n(e) && null === (e = e[o]) && (e = void 0)),
        void 0 === e ? Array : e
      );
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(25)(1);
    n(n.P + n.F * !r(19)([].map, !0), "Array", {
      map: function (t) {
        return i(this, t, arguments[1]);
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(25)(2);
    n(n.P + n.F * !r(19)([].filter, !0), "Array", {
      filter: function (t) {
        return i(this, t, arguments[1]);
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(25)(3);
    n(n.P + n.F * !r(19)([].some, !0), "Array", {
      some: function (t) {
        return i(this, t, arguments[1]);
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(25)(4);
    n(n.P + n.F * !r(19)([].every, !0), "Array", {
      every: function (t) {
        return i(this, t, arguments[1]);
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(141);
    n(n.P + n.F * !r(19)([].reduce, !0), "Array", {
      reduce: function (t) {
        return i(this, t, arguments.length, arguments[1], !1);
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(141);
    n(n.P + n.F * !r(19)([].reduceRight, !0), "Array", {
      reduceRight: function (t) {
        return i(this, t, arguments.length, arguments[1], !0);
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(63)(!1),
      o = [].indexOf,
      s = !!o && 1 / [1].indexOf(1, -0) < 0;
    n(n.P + n.F * (s || !r(19)(o)), "Array", {
      indexOf: function (t) {
        return s ? o.apply(this, arguments) || 0 : i(this, t, arguments[1]);
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(18),
      o = r(22),
      s = r(6),
      a = [].lastIndexOf,
      u = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
    n(n.P + n.F * (u || !r(19)(a)), "Array", {
      lastIndexOf: function (t) {
        if (u) return a.apply(this, arguments) || 0;
        var e = i(this),
          r = s(e.length),
          n = r - 1;
        for (
          arguments.length > 1 && (n = Math.min(n, o(arguments[1]))),
            n < 0 && (n = r + n);
          n >= 0;
          n--
        )
          if (n in e && e[n] === t) return n || 0;
        return -1;
      },
    });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.P, "Array", { copyWithin: r(142) }), r(44)("copyWithin");
  },
  function (t, e, r) {
    var n = r(0);
    n(n.P, "Array", { fill: r(99) }), r(44)("fill");
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(25)(5),
      o = !0;
    "find" in [] &&
      Array(1).find(function () {
        o = !1;
      }),
      n(n.P + n.F * o, "Array", {
        find: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
      r(44)("find");
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(25)(6),
      o = "findIndex",
      s = !0;
    o in [] &&
      Array(1)[o](function () {
        s = !1;
      }),
      n(n.P + n.F * s, "Array", {
        findIndex: function (t) {
          return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }),
      r(44)(o);
  },
  function (t, e, r) {
    r(51)("Array");
  },
  function (t, e, r) {
    var n = r(1),
      i = r(87),
      o = r(9).f,
      s = r(42).f,
      a = r(94),
      u = r(67),
      h = n.RegExp,
      c = h,
      l = h.prototype,
      f = /a/g,
      p = /a/g,
      d = new h(f) !== f;
    if (
      r(8) &&
      (!d ||
        r(2)(function () {
          return (
            (p[r(5)("match")] = !1),
            h(f) != f || h(p) == p || "/a/i" != h(f, "i")
          );
        }))
    ) {
      h = function (t, e) {
        var r = this instanceof h,
          n = a(t),
          o = void 0 === e;
        return !r && n && t.constructor === h && o
          ? t
          : i(
              d
                ? new c(n && !o ? t.source : t, e)
                : c(
                    (n = t instanceof h) ? t.source : t,
                    n && o ? u.call(t) : e
                  ),
              r ? this : l,
              h
            );
      };
      for (
        var v = function (t) {
            (t in h) ||
              o(h, t, {
                configurable: !0,
                get: function () {
                  return c[t];
                },
                set: function (e) {
                  c[t] = e;
                },
              });
          },
          g = s(c),
          y = 0;
        g.length > y;

      )
        v(g[y++]);
      (l.constructor = h), (h.prototype = l), r(11)(n, "RegExp", h);
    }
    r(51)("RegExp");
  },
  function (t, e, r) {
    "use strict";
    r(145);
    var n = r(3),
      i = r(67),
      o = r(8),
      s = /./.toString,
      a = function (t) {
        r(11)(RegExp.prototype, "toString", t, !0);
      };
    r(2)(function () {
      return "/a/b" != s.call({ source: "a", flags: "b" });
    })
      ? a(function () {
          var t = n(this);
          return "/".concat(
            t.source,
            "/",
            "flags" in t
              ? t.flags
              : !o && t instanceof RegExp
              ? i.call(t)
              : void 0
          );
        })
      : "toString" != s.name &&
        a(function () {
          return s.call(this);
        });
  },
  function (t, e, r) {
    "use strict";
    var n = r(3),
      i = r(6),
      o = r(102),
      s = r(68);
    r(69)("match", 1, function (t, e, r, a) {
      return [
        function (r) {
          var n = t(this),
            i = null == r ? void 0 : r[e];
          return void 0 !== i ? i.call(r, n) : new RegExp(r)[e](String(n));
        },
        function (t) {
          var e = a(r, t, this);
          if (e.done) return e.value;
          var u = n(t),
            h = String(this);
          if (!u.global) return s(u, h);
          var c = u.unicode;
          u.lastIndex = 0;
          for (var l, f = [], p = 0; null !== (l = s(u, h)); ) {
            var d = String(l[0]);
            (f[p] = d),
              "" === d && (u.lastIndex = o(h, i(u.lastIndex), c)),
              p++;
          }
          return 0 === p ? null : f;
        },
      ];
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(3),
      i = r(10),
      o = r(6),
      s = r(22),
      a = r(102),
      u = r(68),
      h = Math.max,
      c = Math.min,
      l = Math.floor,
      f = /\$([$&`']|\d\d?|<[^>]*>)/g,
      p = /\$([$&`']|\d\d?)/g;
    r(69)("replace", 2, function (t, e, r, d) {
      return [
        function (n, i) {
          var o = t(this),
            s = null == n ? void 0 : n[e];
          return void 0 !== s ? s.call(n, o, i) : r.call(String(o), n, i);
        },
        function (t, e) {
          var i = d(r, t, this, e);
          if (i.done) return i.value;
          var l = n(t),
            f = String(this),
            p = "function" == typeof e;
          p || (e = String(e));
          var g = l.global;
          if (g) {
            var y = l.unicode;
            l.lastIndex = 0;
          }
          for (var m = []; ; ) {
            var _ = u(l, f);
            if (null === _) break;
            if ((m.push(_), !g)) break;
            "" === String(_[0]) && (l.lastIndex = a(f, o(l.lastIndex), y));
          }
          for (var x, b = "", E = 0, w = 0; w < m.length; w++) {
            _ = m[w];
            for (
              var T = String(_[0]),
                S = h(c(s(_.index), f.length), 0),
                O = [],
                A = 1;
              A < _.length;
              A++
            )
              O.push(void 0 === (x = _[A]) ? x : String(x));
            var P = _.groups;
            if (p) {
              var I = [T].concat(O, S, f);
              void 0 !== P && I.push(P);
              var C = String(e.apply(void 0, I));
            } else C = v(T, f, S, O, P, e);
            S >= E && ((b += f.slice(E, S) + C), (E = S + T.length));
          }
          return b + f.slice(E);
        },
      ];
      function v(t, e, n, o, s, a) {
        var u = n + t.length,
          h = o.length,
          c = p;
        return (
          void 0 !== s && ((s = i(s)), (c = f)),
          r.call(a, c, function (r, i) {
            var a;
            switch (i.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return t;
              case "`":
                return e.slice(0, n);
              case "'":
                return e.slice(u);
              case "<":
                a = s[i.slice(1, -1)];
                break;
              default:
                var c = +i;
                if (0 === c) return r;
                if (c > h) {
                  var f = l(c / 10);
                  return 0 === f
                    ? r
                    : f <= h
                    ? void 0 === o[f - 1]
                      ? i.charAt(1)
                      : o[f - 1] + i.charAt(1)
                    : r;
                }
                a = o[c - 1];
            }
            return void 0 === a ? "" : a;
          })
        );
      }
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(3),
      i = r(130),
      o = r(68);
    r(69)("search", 1, function (t, e, r, s) {
      return [
        function (r) {
          var n = t(this),
            i = null == r ? void 0 : r[e];
          return void 0 !== i ? i.call(r, n) : new RegExp(r)[e](String(n));
        },
        function (t) {
          var e = s(r, t, this);
          if (e.done) return e.value;
          var a = n(t),
            u = String(this),
            h = a.lastIndex;
          i(h, 0) || (a.lastIndex = 0);
          var c = o(a, u);
          return (
            i(a.lastIndex, h) || (a.lastIndex = h), null === c ? -1 : c.index
          );
        },
      ];
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(94),
      i = r(3),
      o = r(58),
      s = r(102),
      a = r(6),
      u = r(68),
      h = r(101),
      c = r(2),
      l = Math.min,
      f = [].push,
      p = "length",
      d = !c(function () {
        RegExp(4294967295, "y");
      });
    r(69)("split", 2, function (t, e, r, c) {
      var v;
      return (
        (v =
          "c" == "abbc".split(/(b)*/)[1] ||
          4 != "test".split(/(?:)/, -1)[p] ||
          2 != "ab".split(/(?:ab)*/)[p] ||
          4 != ".".split(/(.?)(.?)/)[p] ||
          ".".split(/()()/)[p] > 1 ||
          "".split(/.?/)[p]
            ? function (t, e) {
                var i = String(this);
                if (void 0 === t && 0 === e) return [];
                if (!n(t)) return r.call(i, t, e);
                for (
                  var o,
                    s,
                    a,
                    u = [],
                    c =
                      (t.ignoreCase ? "i" : "") +
                      (t.multiline ? "m" : "") +
                      (t.unicode ? "u" : "") +
                      (t.sticky ? "y" : ""),
                    l = 0,
                    d = void 0 === e ? 4294967295 : e >>> 0,
                    v = new RegExp(t.source, c + "g");
                  (o = h.call(v, i)) &&
                  !(
                    (s = v.lastIndex) > l &&
                    (u.push(i.slice(l, o.index)),
                    o[p] > 1 && o.index < i[p] && f.apply(u, o.slice(1)),
                    (a = o[0][p]),
                    (l = s),
                    u[p] >= d)
                  );

                )
                  v.lastIndex === o.index && v.lastIndex++;
                return (
                  l === i[p]
                    ? (!a && v.test("")) || u.push("")
                    : u.push(i.slice(l)),
                  u[p] > d ? u.slice(0, d) : u
                );
              }
            : "0".split(void 0, 0)[p]
            ? function (t, e) {
                return void 0 === t && 0 === e ? [] : r.call(this, t, e);
              }
            : r),
        [
          function (r, n) {
            var i = t(this),
              o = null == r ? void 0 : r[e];
            return void 0 !== o ? o.call(r, i, n) : v.call(String(i), r, n);
          },
          function (t, e) {
            var n = c(v, t, this, e, v !== r);
            if (n.done) return n.value;
            var h = i(t),
              f = String(this),
              p = o(h, RegExp),
              g = h.unicode,
              y =
                (h.ignoreCase ? "i" : "") +
                (h.multiline ? "m" : "") +
                (h.unicode ? "u" : "") +
                (d ? "y" : "g"),
              m = new p(d ? h : "^(?:" + h.source + ")", y),
              _ = void 0 === e ? 4294967295 : e >>> 0;
            if (0 === _) return [];
            if (0 === f.length) return null === u(m, f) ? [f] : [];
            for (var x = 0, b = 0, E = []; b < f.length; ) {
              m.lastIndex = d ? b : 0;
              var w,
                T = u(m, d ? f : f.slice(b));
              if (
                null === T ||
                (w = l(a(m.lastIndex + (d ? 0 : b)), f.length)) === x
              )
                b = s(f, b, g);
              else {
                if ((E.push(f.slice(x, b)), E.length === _)) return E;
                for (var S = 1; S <= T.length - 1; S++)
                  if ((E.push(T[S]), E.length === _)) return E;
                b = x = w;
              }
            }
            return E.push(f.slice(x)), E;
          },
        ]
      );
    });
  },
  function (t, e, r) {
    var n = r(1),
      i = r(103).set,
      o = n.MutationObserver || n.WebKitMutationObserver,
      s = n.process,
      a = n.Promise,
      u = "process" == r(28)(s);
    t.exports = function () {
      var t,
        e,
        r,
        h = function () {
          var n, i;
          for (u && (n = s.domain) && n.exit(); t; ) {
            (i = t.fn), (t = t.next);
            try {
              i();
            } catch (n) {
              throw (t ? r() : (e = void 0), n);
            }
          }
          (e = void 0), n && n.enter();
        };
      if (u)
        r = function () {
          s.nextTick(h);
        };
      else if (!o || (n.navigator && n.navigator.standalone))
        if (a && a.resolve) {
          var c = a.resolve(void 0);
          r = function () {
            c.then(h);
          };
        } else
          r = function () {
            i.call(n, h);
          };
      else {
        var l = !0,
          f = document.createTextNode("");
        new o(h).observe(f, { characterData: !0 }),
          (r = function () {
            f.data = l = !l;
          });
      }
      return function (n) {
        var i = { fn: n, next: void 0 };
        e && (e.next = i), t || ((t = i), r()), (e = i);
      };
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return { e: !1, v: t() };
      } catch (t) {
        return { e: !0, v: t };
      }
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(149),
      i = r(45);
    t.exports = r(72)(
      "Map",
      function (t) {
        return function () {
          return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        get: function (t) {
          var e = n.getEntry(i(this, "Map"), t);
          return e && e.v;
        },
        set: function (t, e) {
          return n.def(i(this, "Map"), 0 === t ? 0 : t, e);
        },
      },
      n,
      !0
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(149),
      i = r(45);
    t.exports = r(72)(
      "Set",
      function (t) {
        return function () {
          return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        add: function (t) {
          return n.def(i(this, "Set"), (t = 0 === t ? 0 : t), t);
        },
      },
      n
    );
  },
  function (t, e, r) {
    "use strict";
    var n,
      i = r(1),
      o = r(25)(0),
      s = r(11),
      a = r(34),
      u = r(129),
      h = r(150),
      c = r(4),
      l = r(45),
      f = r(45),
      p = !i.ActiveXObject && "ActiveXObject" in i,
      d = a.getWeak,
      v = Object.isExtensible,
      g = h.ufstore,
      y = function (t) {
        return function () {
          return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      m = {
        get: function (t) {
          if (c(t)) {
            var e = d(t);
            return !0 === e
              ? g(l(this, "WeakMap")).get(t)
              : e
              ? e[this._i]
              : void 0;
          }
        },
        set: function (t, e) {
          return h.def(l(this, "WeakMap"), t, e);
        },
      },
      _ = (t.exports = r(72)("WeakMap", y, m, h, !0, !0));
    f &&
      p &&
      (u((n = h.getConstructor(y, "WeakMap")).prototype, m),
      (a.NEED = !0),
      o(["delete", "has", "get", "set"], function (t) {
        var e = _.prototype,
          r = e[t];
        s(e, t, function (e, i) {
          if (c(e) && !v(e)) {
            this._f || (this._f = new n());
            var o = this._f[t](e, i);
            return "set" == t ? this : o;
          }
          return r.call(this, e, i);
        });
      }));
  },
  function (t, e, r) {
    "use strict";
    var n = r(150),
      i = r(45);
    r(72)(
      "WeakSet",
      function (t) {
        return function () {
          return t(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        add: function (t) {
          return n.def(i(this, "WeakSet"), t, !0);
        },
      },
      n,
      !1,
      !0
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(73),
      o = r(104),
      s = r(3),
      a = r(40),
      u = r(6),
      h = r(4),
      c = r(1).ArrayBuffer,
      l = r(58),
      f = o.ArrayBuffer,
      p = o.DataView,
      d = i.ABV && c.isView,
      v = f.prototype.slice,
      g = i.VIEW;
    n(n.G + n.W + n.F * (c !== f), { ArrayBuffer: f }),
      n(n.S + n.F * !i.CONSTR, "ArrayBuffer", {
        isView: function (t) {
          return (d && d(t)) || (h(t) && g in t);
        },
      }),
      n(
        n.P +
          n.U +
          n.F *
            r(2)(function () {
              return !new f(2).slice(1, void 0).byteLength;
            }),
        "ArrayBuffer",
        {
          slice: function (t, e) {
            if (void 0 !== v && void 0 === e) return v.call(s(this), t);
            for (
              var r = s(this).byteLength,
                n = a(t, r),
                i = a(void 0 === e ? r : e, r),
                o = new (l(this, f))(u(i - n)),
                h = new p(this),
                c = new p(o),
                d = 0;
              n < i;

            )
              c.setUint8(d++, h.getUint8(n++));
            return o;
          },
        }
      ),
      r(51)("ArrayBuffer");
  },
  function (t, e, r) {
    var n = r(0);
    n(n.G + n.W + n.F * !r(73).ABV, { DataView: r(104).DataView });
  },
  function (t, e, r) {
    r(30)("Int8", 1, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    r(30)("Uint8", 1, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    r(30)(
      "Uint8",
      1,
      function (t) {
        return function (e, r, n) {
          return t(this, e, r, n);
        };
      },
      !0
    );
  },
  function (t, e, r) {
    r(30)("Int16", 2, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    r(30)("Uint16", 2, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    r(30)("Int32", 4, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    r(30)("Uint32", 4, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    r(30)("Float32", 4, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    r(30)("Float64", 8, function (t) {
      return function (e, r, n) {
        return t(this, e, r, n);
      };
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(21),
      o = r(3),
      s = (r(1).Reflect || {}).apply,
      a = Function.apply;
    n(
      n.S +
        n.F *
          !r(2)(function () {
            s(function () {});
          }),
      "Reflect",
      {
        apply: function (t, e, r) {
          var n = i(t),
            u = o(r);
          return s ? s(n, e, u) : a.call(n, e, u);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(41),
      o = r(21),
      s = r(3),
      a = r(4),
      u = r(2),
      h = r(131),
      c = (r(1).Reflect || {}).construct,
      l = u(function () {
        function t() {}
        return !(c(function () {}, [], t) instanceof t);
      }),
      f = !u(function () {
        c(function () {});
      });
    n(n.S + n.F * (l || f), "Reflect", {
      construct: function (t, e) {
        o(t), s(e);
        var r = arguments.length < 3 ? t : o(arguments[2]);
        if (f && !l) return c(t, e, r);
        if (t == r) {
          switch (e.length) {
            case 0:
              return new t();
            case 1:
              return new t(e[0]);
            case 2:
              return new t(e[0], e[1]);
            case 3:
              return new t(e[0], e[1], e[2]);
            case 4:
              return new t(e[0], e[1], e[2], e[3]);
          }
          var n = [null];
          return n.push.apply(n, e), new (h.apply(t, n))();
        }
        var u = r.prototype,
          p = i(a(u) ? u : Object.prototype),
          d = Function.apply.call(t, p, e);
        return a(d) ? d : p;
      },
    });
  },
  function (t, e, r) {
    var n = r(9),
      i = r(0),
      o = r(3),
      s = r(33);
    i(
      i.S +
        i.F *
          r(2)(function () {
            Reflect.defineProperty(n.f({}, 1, { value: 1 }), 1, { value: 2 });
          }),
      "Reflect",
      {
        defineProperty: function (t, e, r) {
          o(t), (e = s(e, !0)), o(r);
          try {
            return n.f(t, e, r), !0;
          } catch (t) {
            return !1;
          }
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(0),
      i = r(23).f,
      o = r(3);
    n(n.S, "Reflect", {
      deleteProperty: function (t, e) {
        var r = i(o(t), e);
        return !(r && !r.configurable) && delete t[e];
      },
    });
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(3),
      o = function (t) {
        (this._t = i(t)), (this._i = 0);
        var e,
          r = (this._k = []);
        for (e in t) r.push(e);
      };
    r(138)(o, "Object", function () {
      var t,
        e = this._k;
      do {
        if (this._i >= e.length) return { value: void 0, done: !0 };
      } while (!((t = e[this._i++]) in this._t));
      return { value: t, done: !1 };
    }),
      n(n.S, "Reflect", {
        enumerate: function (t) {
          return new o(t);
        },
      });
  },
  function (t, e, r) {
    var n = r(23),
      i = r(43),
      o = r(16),
      s = r(0),
      a = r(4),
      u = r(3);
    s(s.S, "Reflect", {
      get: function t(e, r) {
        var s,
          h,
          c = arguments.length < 3 ? e : arguments[2];
        return u(e) === c
          ? e[r]
          : (s = n.f(e, r))
          ? o(s, "value")
            ? s.value
            : void 0 !== s.get
            ? s.get.call(c)
            : void 0
          : a((h = i(e)))
          ? t(h, r, c)
          : void 0;
      },
    });
  },
  function (t, e, r) {
    var n = r(23),
      i = r(0),
      o = r(3);
    i(i.S, "Reflect", {
      getOwnPropertyDescriptor: function (t, e) {
        return n.f(o(t), e);
      },
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(43),
      o = r(3);
    n(n.S, "Reflect", {
      getPrototypeOf: function (t) {
        return i(o(t));
      },
    });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Reflect", {
      has: function (t, e) {
        return e in t;
      },
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(3),
      o = Object.isExtensible;
    n(n.S, "Reflect", {
      isExtensible: function (t) {
        return i(t), !o || o(t);
      },
    });
  },
  function (t, e, r) {
    var n = r(0);
    n(n.S, "Reflect", { ownKeys: r(152) });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(3),
      o = Object.preventExtensions;
    n(n.S, "Reflect", {
      preventExtensions: function (t) {
        i(t);
        try {
          return o && o(t), !0;
        } catch (t) {
          return !1;
        }
      },
    });
  },
  function (t, e, r) {
    var n = r(9),
      i = r(23),
      o = r(43),
      s = r(16),
      a = r(0),
      u = r(36),
      h = r(3),
      c = r(4);
    a(a.S, "Reflect", {
      set: function t(e, r, a) {
        var l,
          f,
          p = arguments.length < 4 ? e : arguments[3],
          d = i.f(h(e), r);
        if (!d) {
          if (c((f = o(e)))) return t(f, r, a, p);
          d = u(0);
        }
        if (s(d, "value")) {
          if (!1 === d.writable || !c(p)) return !1;
          if ((l = i.f(p, r))) {
            if (l.get || l.set || !1 === l.writable) return !1;
            (l.value = a), n.f(p, r, l);
          } else n.f(p, r, u(0, a));
          return !0;
        }
        return void 0 !== d.set && (d.set.call(p, a), !0);
      },
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(85);
    i &&
      n(n.S, "Reflect", {
        setPrototypeOf: function (t, e) {
          i.check(t, e);
          try {
            return i.set(t, e), !0;
          } catch (t) {
            return !1;
          }
        },
      });
  },
  function (t, e, r) {
    r(334), (t.exports = r(7).Array.includes);
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(63)(!0);
    n(n.P, "Array", {
      includes: function (t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }),
      r(44)("includes");
  },
  function (t, e, r) {
    r(336), (t.exports = r(7).Array.flatMap);
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(337),
      o = r(10),
      s = r(6),
      a = r(21),
      u = r(140);
    n(n.P, "Array", {
      flatMap: function (t) {
        var e,
          r,
          n = o(this);
        return (
          a(t),
          (e = s(n.length)),
          (r = u(n, 0)),
          i(r, n, n, e, 0, 1, t, arguments[1]),
          r
        );
      },
    }),
      r(44)("flatMap");
  },
  function (t, e, r) {
    "use strict";
    var n = r(65),
      i = r(4),
      o = r(6),
      s = r(20),
      a = r(5)("isConcatSpreadable");
    t.exports = function t(e, r, u, h, c, l, f, p) {
      for (var d, v, g = c, y = 0, m = !!f && s(f, p, 3); y < h; ) {
        if (y in u) {
          if (
            ((d = m ? m(u[y], y, r) : u[y]),
            (v = !1),
            i(d) && (v = void 0 !== (v = d[a]) ? !!v : n(d)),
            v && l > 0)
          )
            g = t(e, r, d, o(d.length), g, l - 1) - 1;
          else {
            if (g >= 9007199254740991) throw TypeError();
            e[g] = d;
          }
          g++;
        }
        y++;
      }
      return g;
    };
  },
  function (t, e, r) {
    r(339), (t.exports = r(7).String.padStart);
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(153),
      o = r(71),
      s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
    n(n.P + n.F * s, "String", {
      padStart: function (t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !0);
      },
    });
  },
  function (t, e, r) {
    r(341), (t.exports = r(7).String.padEnd);
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(153),
      o = r(71),
      s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
    n(n.P + n.F * s, "String", {
      padEnd: function (t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0, !1);
      },
    });
  },
  function (t, e, r) {
    r(343), (t.exports = r(7).String.trimLeft);
  },
  function (t, e, r) {
    "use strict";
    r(49)(
      "trimLeft",
      function (t) {
        return function () {
          return t(this, 1);
        };
      },
      "trimStart"
    );
  },
  function (t, e, r) {
    r(345), (t.exports = r(7).String.trimRight);
  },
  function (t, e, r) {
    "use strict";
    r(49)(
      "trimRight",
      function (t) {
        return function () {
          return t(this, 2);
        };
      },
      "trimEnd"
    );
  },
  function (t, e, r) {
    r(347), (t.exports = r(81).f("asyncIterator"));
  },
  function (t, e, r) {
    r(125)("asyncIterator");
  },
  function (t, e, r) {
    r(349), (t.exports = r(7).Object.getOwnPropertyDescriptors);
  },
  function (t, e, r) {
    var n = r(0),
      i = r(152),
      o = r(18),
      s = r(23),
      a = r(97);
    n(n.S, "Object", {
      getOwnPropertyDescriptors: function (t) {
        for (
          var e, r, n = o(t), u = s.f, h = i(n), c = {}, l = 0;
          h.length > l;

        )
          void 0 !== (r = u(n, (e = h[l++]))) && a(c, e, r);
        return c;
      },
    });
  },
  function (t, e, r) {
    r(351), (t.exports = r(7).Object.values);
  },
  function (t, e, r) {
    var n = r(0),
      i = r(154)(!1);
    n(n.S, "Object", {
      values: function (t) {
        return i(t);
      },
    });
  },
  function (t, e, r) {
    r(353), (t.exports = r(7).Object.entries);
  },
  function (t, e, r) {
    var n = r(0),
      i = r(154)(!0);
    n(n.S, "Object", {
      entries: function (t) {
        return i(t);
      },
    });
  },
  function (t, e, r) {
    "use strict";
    r(146), r(355), (t.exports = r(7).Promise.finally);
  },
  function (t, e, r) {
    "use strict";
    var n = r(0),
      i = r(7),
      o = r(1),
      s = r(58),
      a = r(148);
    n(n.P + n.R, "Promise", {
      finally: function (t) {
        var e = s(this, i.Promise || o.Promise),
          r = "function" == typeof t;
        return this.then(
          r
            ? function (r) {
                return a(e, t()).then(function () {
                  return r;
                });
              }
            : t,
          r
            ? function (r) {
                return a(e, t()).then(function () {
                  throw r;
                });
              }
            : t
        );
      },
    });
  },
  function (t, e, r) {
    r(357), r(358), r(359), (t.exports = r(7));
  },
  function (t, e, r) {
    var n = r(1),
      i = r(0),
      o = r(71),
      s = [].slice,
      a = /MSIE .\./.test(o),
      u = function (t) {
        return function (e, r) {
          var n = arguments.length > 2,
            i = !!n && s.call(arguments, 2);
          return t(
            n
              ? function () {
                  ("function" == typeof e ? e : Function(e)).apply(this, i);
                }
              : e,
            r
          );
        };
      };
    i(i.G + i.B + i.F * a, {
      setTimeout: u(n.setTimeout),
      setInterval: u(n.setInterval),
    });
  },
  function (t, e, r) {
    var n = r(0),
      i = r(103);
    n(n.G + n.B, { setImmediate: i.set, clearImmediate: i.clear });
  },
  function (t, e, r) {
    for (
      var n = r(100),
        i = r(39),
        o = r(11),
        s = r(1),
        a = r(17),
        u = r(50),
        h = r(5),
        c = h("iterator"),
        l = h("toStringTag"),
        f = u.Array,
        p = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1,
        },
        d = i(p),
        v = 0;
      v < d.length;
      v++
    ) {
      var g,
        y = d[v],
        m = p[y],
        _ = s[y],
        x = _ && _.prototype;
      if (x && (x[c] || a(x, c, f), x[l] || a(x, l, y), (u[y] = f), m))
        for (g in n) x[g] || o(x, g, n[g], !0);
    }
  },
  function (t, e, r) {
    var n = (function (t) {
      "use strict";
      var e = Object.prototype,
        r = e.hasOwnProperty,
        n = "function" == typeof Symbol ? Symbol : {},
        i = n.iterator || "@@iterator",
        o = n.asyncIterator || "@@asyncIterator",
        s = n.toStringTag || "@@toStringTag";
      function a(t, e, r, n) {
        var i = e && e.prototype instanceof c ? e : c,
          o = Object.create(i.prototype),
          s = new E(n || []);
        return (
          (o._invoke = (function (t, e, r) {
            var n = "suspendedStart";
            return function (i, o) {
              if ("executing" === n)
                throw new Error("Generator is already running");
              if ("completed" === n) {
                if ("throw" === i) throw o;
                return T();
              }
              for (r.method = i, r.arg = o; ; ) {
                var s = r.delegate;
                if (s) {
                  var a = _(s, r);
                  if (a) {
                    if (a === h) continue;
                    return a;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = "executing";
                var c = u(t, e, r);
                if ("normal" === c.type) {
                  if (
                    ((n = r.done ? "completed" : "suspendedYield"), c.arg === h)
                  )
                    continue;
                  return { value: c.arg, done: r.done };
                }
                "throw" === c.type &&
                  ((n = "completed"), (r.method = "throw"), (r.arg = c.arg));
              }
            };
          })(t, r, s)),
          o
        );
      }
      function u(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = a;
      var h = {};
      function c() {}
      function l() {}
      function f() {}
      var p = {};
      p[i] = function () {
        return this;
      };
      var d = Object.getPrototypeOf,
        v = d && d(d(w([])));
      v && v !== e && r.call(v, i) && (p = v);
      var g = (f.prototype = c.prototype = Object.create(p));
      function y(t) {
        ["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t);
          };
        });
      }
      function m(t, e) {
        var n;
        this._invoke = function (i, o) {
          function s() {
            return new e(function (n, s) {
              !(function n(i, o, s, a) {
                var h = u(t[i], t, o);
                if ("throw" !== h.type) {
                  var c = h.arg,
                    l = c.value;
                  return l && "object" == typeof l && r.call(l, "__await")
                    ? e.resolve(l.__await).then(
                        function (t) {
                          n("next", t, s, a);
                        },
                        function (t) {
                          n("throw", t, s, a);
                        }
                      )
                    : e.resolve(l).then(
                        function (t) {
                          (c.value = t), s(c);
                        },
                        function (t) {
                          return n("throw", t, s, a);
                        }
                      );
                }
                a(h.arg);
              })(i, o, n, s);
            });
          }
          return (n = n ? n.then(s, s) : s());
        };
      }
      function _(t, e) {
        var r = t.iterator[e.method];
        if (void 0 === r) {
          if (((e.delegate = null), "throw" === e.method)) {
            if (
              t.iterator.return &&
              ((e.method = "return"),
              (e.arg = void 0),
              _(t, e),
              "throw" === e.method)
            )
              return h;
            (e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return h;
        }
        var n = u(r, t.iterator, e.arg);
        if ("throw" === n.type)
          return (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), h;
        var i = n.arg;
        return i
          ? i.done
            ? ((e[t.resultName] = i.value),
              (e.next = t.nextLoc),
              "return" !== e.method && ((e.method = "next"), (e.arg = void 0)),
              (e.delegate = null),
              h)
            : i
          : ((e.method = "throw"),
            (e.arg = new TypeError("iterator result is not an object")),
            (e.delegate = null),
            h);
      }
      function x(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function b(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function E(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(x, this),
          this.reset(!0);
      }
      function w(t) {
        if (t) {
          var e = t[i];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var n = -1,
              o = function e() {
                for (; ++n < t.length; )
                  if (r.call(t, n)) return (e.value = t[n]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              };
            return (o.next = o);
          }
        }
        return { next: T };
      }
      function T() {
        return { value: void 0, done: !0 };
      }
      return (
        (l.prototype = g.constructor = f),
        (f.constructor = l),
        (f[s] = l.displayName = "GeneratorFunction"),
        (t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return (
            !!e &&
            (e === l || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, f)
              : ((t.__proto__ = f), s in t || (t[s] = "GeneratorFunction")),
            (t.prototype = Object.create(g)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        y(m.prototype),
        (m.prototype[o] = function () {
          return this;
        }),
        (t.AsyncIterator = m),
        (t.async = function (e, r, n, i, o) {
          void 0 === o && (o = Promise);
          var s = new m(a(e, r, n, i), o);
          return t.isGeneratorFunction(r)
            ? s
            : s.next().then(function (t) {
                return t.done ? t.value : s.next();
              });
        }),
        y(g),
        (g[s] = "Generator"),
        (g[i] = function () {
          return this;
        }),
        (g.toString = function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              for (; e.length; ) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = w),
        (E.prototype = {
          constructor: E,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(b),
              !t)
            )
              for (var e in this)
                "t" === e.charAt(0) &&
                  r.call(this, e) &&
                  !isNaN(+e.slice(1)) &&
                  (this[e] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var e = this;
            function n(r, n) {
              return (
                (s.type = "throw"),
                (s.arg = t),
                (e.next = r),
                n && ((e.method = "next"), (e.arg = void 0)),
                !!n
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var o = this.tryEntries[i],
                s = o.completion;
              if ("root" === o.tryLoc) return n("end");
              if (o.tryLoc <= this.prev) {
                var a = r.call(o, "catchLoc"),
                  u = r.call(o, "finallyLoc");
                if (a && u) {
                  if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                } else if (a) {
                  if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var i = this.tryEntries[n];
              if (
                i.tryLoc <= this.prev &&
                r.call(i, "finallyLoc") &&
                this.prev < i.finallyLoc
              ) {
                var o = i;
                break;
              }
            }
            o &&
              ("break" === t || "continue" === t) &&
              o.tryLoc <= e &&
              e <= o.finallyLoc &&
              (o = null);
            var s = o ? o.completion : {};
            return (
              (s.type = t),
              (s.arg = e),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), h)
                : this.complete(s)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              h
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), b(r), h;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var i = n.arg;
                  b(r);
                }
                return i;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, e, r) {
            return (
              (this.delegate = { iterator: w(t), resultName: e, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              h
            );
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = n;
    } catch (t) {
      Function("r", "regeneratorRuntime = r")(n);
    }
  },
  function (t, e, r) {
    r(362), (t.exports = r(155).global);
  },
  function (t, e, r) {
    var n = r(363);
    n(n.G, { global: r(105) });
  },
  function (t, e, r) {
    var n = r(105),
      i = r(155),
      o = r(364),
      s = r(366),
      a = r(373),
      u = function (t, e, r) {
        var h,
          c,
          l,
          f = t & u.F,
          p = t & u.G,
          d = t & u.S,
          v = t & u.P,
          g = t & u.B,
          y = t & u.W,
          m = p ? i : i[e] || (i[e] = {}),
          _ = m.prototype,
          x = p ? n : d ? n[e] : (n[e] || {}).prototype;
        for (h in (p && (r = e), r))
          ((c = !f && x && void 0 !== x[h]) && a(m, h)) ||
            ((l = c ? x[h] : r[h]),
            (m[h] =
              p && "function" != typeof x[h]
                ? r[h]
                : g && c
                ? o(l, n)
                : y && x[h] == l
                ? (function (t) {
                    var e = function (e, r, n) {
                      if (this instanceof t) {
                        switch (arguments.length) {
                          case 0:
                            return new t();
                          case 1:
                            return new t(e);
                          case 2:
                            return new t(e, r);
                        }
                        return new t(e, r, n);
                      }
                      return t.apply(this, arguments);
                    };
                    return (e.prototype = t.prototype), e;
                  })(l)
                : v && "function" == typeof l
                ? o(Function.call, l)
                : l),
            v &&
              (((m.virtual || (m.virtual = {}))[h] = l),
              t & u.R && _ && !_[h] && s(_, h, l)));
      };
    (u.F = 1),
      (u.G = 2),
      (u.S = 4),
      (u.P = 8),
      (u.B = 16),
      (u.W = 32),
      (u.U = 64),
      (u.R = 128),
      (t.exports = u);
  },
  function (t, e, r) {
    var n = r(365);
    t.exports = function (t, e, r) {
      if ((n(t), void 0 === e)) return t;
      switch (r) {
        case 1:
          return function (r) {
            return t.call(e, r);
          };
        case 2:
          return function (r, n) {
            return t.call(e, r, n);
          };
        case 3:
          return function (r, n, i) {
            return t.call(e, r, n, i);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    };
  },
  function (t, e) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t;
    };
  },
  function (t, e, r) {
    var n = r(367),
      i = r(372);
    t.exports = r(107)
      ? function (t, e, r) {
          return n.f(t, e, i(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        };
  },
  function (t, e, r) {
    var n = r(368),
      i = r(369),
      o = r(371),
      s = Object.defineProperty;
    e.f = r(107)
      ? Object.defineProperty
      : function (t, e, r) {
          if ((n(t), (e = o(e, !0)), n(r), i))
            try {
              return s(t, e, r);
            } catch (t) {}
          if ("get" in r || "set" in r)
            throw TypeError("Accessors not supported!");
          return "value" in r && (t[e] = r.value), t;
        };
  },
  function (t, e, r) {
    var n = r(106);
    t.exports = function (t) {
      if (!n(t)) throw TypeError(t + " is not an object!");
      return t;
    };
  },
  function (t, e, r) {
    t.exports =
      !r(107) &&
      !r(156)(function () {
        return (
          7 !=
          Object.defineProperty(r(370)("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, r) {
    var n = r(106),
      i = r(105).document,
      o = n(i) && n(i.createElement);
    t.exports = function (t) {
      return o ? i.createElement(t) : {};
    };
  },
  function (t, e, r) {
    var n = r(106);
    t.exports = function (t, e) {
      if (!n(t)) return t;
      var r, i;
      if (e && "function" == typeof (r = t.toString) && !n((i = r.call(t))))
        return i;
      if ("function" == typeof (r = t.valueOf) && !n((i = r.call(t)))) return i;
      if (!e && "function" == typeof (r = t.toString) && !n((i = r.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, e) {
      return r.call(t, e);
    };
  },
  function (t, e, r) {
    "use strict";
    var n = {}.propertyIsEnumerable,
      i = Object.getOwnPropertyDescriptor,
      o = i && !n.call({ 1: 2 }, 1);
    e.f = o
      ? function (t) {
          var e = i(this, t);
          return !!e && e.enumerable;
        }
      : n;
  },
  function (t, e, r) {
    var n = r(13),
      i = r(162),
      o = n.WeakMap;
    t.exports = "function" == typeof o && /native code/.test(i(o));
  },
  function (t, e, r) {
    var n = r(26),
      i = r(377),
      o = r(158),
      s = r(54);
    t.exports = function (t, e) {
      for (var r = i(e), a = s.f, u = o.f, h = 0; h < r.length; h++) {
        var c = r[h];
        n(t, c) || a(t, c, u(e, c));
      }
    };
  },
  function (t, e, r) {
    var n = r(115),
      i = r(379),
      o = r(381),
      s = r(32);
    t.exports =
      n("Reflect", "ownKeys") ||
      function (t) {
        var e = i.f(s(t)),
          r = o.f;
        return r ? e.concat(r(t)) : e;
      };
  },
  function (t, e, r) {
    var n = r(13);
    t.exports = n;
  },
  function (t, e, r) {
    var n = r(167),
      i = r(117).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return n(t, i);
      };
  },
  function (t, e, r) {
    var n = r(116),
      i = Math.max,
      o = Math.min;
    t.exports = function (t, e) {
      var r = n(t);
      return r < 0 ? i(r + e, 0) : o(r, e);
    };
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, r) {
    var n = r(14),
      i = /#|\.prototype\./,
      o = function (t, e) {
        var r = a[s(t)];
        return r == h || (r != u && ("function" == typeof e ? n(e) : !!e));
      },
      s = (o.normalize = function (t) {
        return String(t).replace(i, ".").toLowerCase();
      }),
      a = (o.data = {}),
      u = (o.NATIVE = "N"),
      h = (o.POLYFILL = "P");
    t.exports = o;
  },
  function (t, e) {
    window.NodeList &&
      !NodeList.prototype.forEach &&
      (NodeList.prototype.forEach = function (t, e) {
        e = e || window;
        for (var r = 0; r < this.length; r++) t.call(e, this[r], r, this);
      });
  },
  function (t, e, r) {
    var n = r(47),
      i = r(385),
      o = r(15)("species");
    t.exports = function (t, e) {
      var r;
      return (
        i(t) &&
          ("function" != typeof (r = t.constructor) ||
          (r !== Array && !i(r.prototype))
            ? n(r) && null === (r = r[o]) && (r = void 0)
            : (r = void 0)),
        new (void 0 === r ? Array : r)(0 === e ? 0 : e)
      );
    };
  },
  function (t, e, r) {
    var n = r(60);
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == n(t);
      };
  },
  function (t, e, r) {
    var n = r(175);
    t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (t, e, r) {
    var n = r(14),
      i = r(15),
      o = r(388),
      s = i("species");
    t.exports = function (t) {
      return (
        o >= 51 ||
        !n(function () {
          var e = [];
          return (
            ((e.constructor = {})[s] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    };
  },
  function (t, e, r) {
    var n,
      i,
      o = r(13),
      s = r(170),
      a = o.process,
      u = a && a.versions,
      h = u && u.v8;
    h
      ? (i = (n = h.split("."))[0] + n[1])
      : s &&
        (!(n = s.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
        (n = s.match(/Chrome\/(\d+)/)) &&
        (i = n[1]),
      (t.exports = i && +i);
  },
  function (t, e, r) {
    "use strict";
    var n = r(32);
    t.exports = function () {
      var t = n(this),
        e = "";
      return (
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
      );
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(14);
    function i(t, e) {
      return RegExp(t, e);
    }
    (e.UNSUPPORTED_Y = n(function () {
      var t = i("a", "y");
      return (t.lastIndex = 2), null != t.exec("abcd");
    })),
      (e.BROKEN_CARET = n(function () {
        var t = i("^r", "gy");
        return (t.lastIndex = 2), null != t.exec("str");
      }));
  },
  function (t, e, r) {
    "use strict";
    var n = r(392),
      i = r(393),
      o = r(32),
      s = r(61),
      a = r(394),
      u = r(395),
      h = r(75),
      c = r(396),
      l = r(77),
      f = r(14),
      p = [].push,
      d = Math.min,
      v = !f(function () {
        return !RegExp(4294967295, "y");
      });
    n(
      "split",
      2,
      function (t, e, r) {
        var n;
        return (
          (n =
            "c" == "abbc".split(/(b)*/)[1] ||
            4 != "test".split(/(?:)/, -1).length ||
            2 != "ab".split(/(?:ab)*/).length ||
            4 != ".".split(/(.?)(.?)/).length ||
            ".".split(/()()/).length > 1 ||
            "".split(/.?/).length
              ? function (t, r) {
                  var n = String(s(this)),
                    o = void 0 === r ? 4294967295 : r >>> 0;
                  if (0 === o) return [];
                  if (void 0 === t) return [n];
                  if (!i(t)) return e.call(n, t, o);
                  for (
                    var a,
                      u,
                      h,
                      c = [],
                      f =
                        (t.ignoreCase ? "i" : "") +
                        (t.multiline ? "m" : "") +
                        (t.unicode ? "u" : "") +
                        (t.sticky ? "y" : ""),
                      d = 0,
                      v = new RegExp(t.source, f + "g");
                    (a = l.call(v, n)) &&
                    !(
                      (u = v.lastIndex) > d &&
                      (c.push(n.slice(d, a.index)),
                      a.length > 1 &&
                        a.index < n.length &&
                        p.apply(c, a.slice(1)),
                      (h = a[0].length),
                      (d = u),
                      c.length >= o)
                    );

                  )
                    v.lastIndex === a.index && v.lastIndex++;
                  return (
                    d === n.length
                      ? (!h && v.test("")) || c.push("")
                      : c.push(n.slice(d)),
                    c.length > o ? c.slice(0, o) : c
                  );
                }
              : "0".split(void 0, 0).length
              ? function (t, r) {
                  return void 0 === t && 0 === r ? [] : e.call(this, t, r);
                }
              : e),
          [
            function (e, r) {
              var i = s(this),
                o = null == e ? void 0 : e[t];
              return void 0 !== o ? o.call(e, i, r) : n.call(String(i), e, r);
            },
            function (t, i) {
              var s = r(n, t, this, i, n !== e);
              if (s.done) return s.value;
              var l = o(t),
                f = String(this),
                p = a(l, RegExp),
                g = l.unicode,
                y =
                  (l.ignoreCase ? "i" : "") +
                  (l.multiline ? "m" : "") +
                  (l.unicode ? "u" : "") +
                  (v ? "y" : "g"),
                m = new p(v ? l : "^(?:" + l.source + ")", y),
                _ = void 0 === i ? 4294967295 : i >>> 0;
              if (0 === _) return [];
              if (0 === f.length) return null === c(m, f) ? [f] : [];
              for (var x = 0, b = 0, E = []; b < f.length; ) {
                m.lastIndex = v ? b : 0;
                var w,
                  T = c(m, v ? f : f.slice(b));
                if (
                  null === T ||
                  (w = d(h(m.lastIndex + (v ? 0 : b)), f.length)) === x
                )
                  b = u(f, b, g);
                else {
                  if ((E.push(f.slice(x, b)), E.length === _)) return E;
                  for (var S = 1; S <= T.length - 1; S++)
                    if ((E.push(T[S]), E.length === _)) return E;
                  b = x = w;
                }
              }
              return E.push(f.slice(x)), E;
            },
          ]
        );
      },
      !v
    );
  },
  function (t, e, r) {
    "use strict";
    r(177);
    var n = r(110),
      i = r(14),
      o = r(15),
      s = r(77),
      a = r(35),
      u = o("species"),
      h = !i(function () {
        var t = /./;
        return (
          (t.exec = function () {
            var t = [];
            return (t.groups = { a: "7" }), t;
          }),
          "7" !== "".replace(t, "$<a>")
        );
      }),
      c = "$0" === "a".replace(/./, "$0"),
      l = o("replace"),
      f = !!/./[l] && "" === /./[l]("a", "$0"),
      p = !i(function () {
        var t = /(?:)/,
          e = t.exec;
        t.exec = function () {
          return e.apply(this, arguments);
        };
        var r = "ab".split(t);
        return 2 !== r.length || "a" !== r[0] || "b" !== r[1];
      });
    t.exports = function (t, e, r, l) {
      var d = o(t),
        v = !i(function () {
          var e = {};
          return (
            (e[d] = function () {
              return 7;
            }),
            7 != ""[t](e)
          );
        }),
        g =
          v &&
          !i(function () {
            var e = !1,
              r = /a/;
            return (
              "split" === t &&
                (((r = {}).constructor = {}),
                (r.constructor[u] = function () {
                  return r;
                }),
                (r.flags = ""),
                (r[d] = /./[d])),
              (r.exec = function () {
                return (e = !0), null;
              }),
              r[d](""),
              !e
            );
          });
      if (
        !v ||
        !g ||
        ("replace" === t && (!h || !c || f)) ||
        ("split" === t && !p)
      ) {
        var y = /./[d],
          m = r(
            d,
            ""[t],
            function (t, e, r, n, i) {
              return e.exec === s
                ? v && !i
                  ? { done: !0, value: y.call(e, r, n) }
                  : { done: !0, value: t.call(r, e, n) }
                : { done: !1 };
            },
            {
              REPLACE_KEEPS_$0: c,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: f,
            }
          ),
          _ = m[0],
          x = m[1];
        n(String.prototype, t, _),
          n(
            RegExp.prototype,
            d,
            2 == e
              ? function (t, e) {
                  return x.call(t, this, e);
                }
              : function (t) {
                  return x.call(t, this);
                }
          );
      }
      l && a(RegExp.prototype[d], "sham", !0);
    };
  },
  function (t, e, r) {
    var n = r(47),
      i = r(60),
      o = r(15)("match");
    t.exports = function (t) {
      var e;
      return n(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t));
    };
  },
  function (t, e, r) {
    var n = r(32),
      i = r(174),
      o = r(15)("species");
    t.exports = function (t, e) {
      var r,
        s = n(t).constructor;
      return void 0 === s || null == (r = n(s)[o]) ? e : i(r);
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(178).charAt;
    t.exports = function (t, e, r) {
      return e + (r ? n(t, e).length : 1);
    };
  },
  function (t, e, r) {
    var n = r(60),
      i = r(77);
    t.exports = function (t, e) {
      var r = t.exec;
      if ("function" == typeof r) {
        var o = r.call(t, e);
        if ("object" != typeof o)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return o;
      }
      if ("RegExp" !== n(t))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return i.call(t, e);
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(31),
      i = r(398);
    n(
      { target: "String", proto: !0, forced: r(399)("anchor") },
      {
        anchor: function (t) {
          return i(this, "a", "name", t);
        },
      }
    );
  },
  function (t, e, r) {
    var n = r(61),
      i = /"/g;
    t.exports = function (t, e, r, o) {
      var s = String(n(t)),
        a = "<" + e;
      return (
        "" !== r &&
          (a += " " + r + '="' + String(o).replace(i, "&quot;") + '"'),
        a + ">" + s + "</" + e + ">"
      );
    };
  },
  function (t, e, r) {
    var n = r(14);
    t.exports = function (t) {
      return n(function () {
        var e = ""[t]('"');
        return e !== e.toLowerCase() || e.split('"').length > 3;
      });
    };
  },
  function (t, e) {
    t.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (t, e, r) {
    (function (t) {
      var n =
          (void 0 !== t && t) || ("undefined" != typeof self && self) || window,
        i = Function.prototype.apply;
      function o(t, e) {
        (this._id = t), (this._clearFn = e);
      }
      (e.setTimeout = function () {
        return new o(i.call(setTimeout, n, arguments), clearTimeout);
      }),
        (e.setInterval = function () {
          return new o(i.call(setInterval, n, arguments), clearInterval);
        }),
        (e.clearTimeout = e.clearInterval =
          function (t) {
            t && t.close();
          }),
        (o.prototype.unref = o.prototype.ref = function () {}),
        (o.prototype.close = function () {
          this._clearFn.call(n, this._id);
        }),
        (e.enroll = function (t, e) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
        }),
        (e.unenroll = function (t) {
          clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
        }),
        (e._unrefActive = e.active =
          function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 &&
              (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout();
              }, e));
          }),
        r(402),
        (e.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== t && t.setImmediate) ||
          (this && this.setImmediate)),
        (e.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== t && t.clearImmediate) ||
          (this && this.clearImmediate));
    }.call(this, r(59)));
  },
  function (t, e, r) {
    (function (t, e) {
      !(function (t, r) {
        "use strict";
        if (!t.setImmediate) {
          var n,
            i,
            o,
            s,
            a,
            u = 1,
            h = {},
            c = !1,
            l = t.document,
            f = Object.getPrototypeOf && Object.getPrototypeOf(t);
          (f = f && f.setTimeout ? f : t),
            "[object process]" === {}.toString.call(t.process)
              ? (n = function (t) {
                  e.nextTick(function () {
                    d(t);
                  });
                })
              : !(function () {
                  if (t.postMessage && !t.importScripts) {
                    var e = !0,
                      r = t.onmessage;
                    return (
                      (t.onmessage = function () {
                        e = !1;
                      }),
                      t.postMessage("", "*"),
                      (t.onmessage = r),
                      e
                    );
                  }
                })()
              ? t.MessageChannel
                ? (((o = new MessageChannel()).port1.onmessage = function (t) {
                    d(t.data);
                  }),
                  (n = function (t) {
                    o.port2.postMessage(t);
                  }))
                : l && "onreadystatechange" in l.createElement("script")
                ? ((i = l.documentElement),
                  (n = function (t) {
                    var e = l.createElement("script");
                    (e.onreadystatechange = function () {
                      d(t),
                        (e.onreadystatechange = null),
                        i.removeChild(e),
                        (e = null);
                    }),
                      i.appendChild(e);
                  }))
                : (n = function (t) {
                    setTimeout(d, 0, t);
                  })
              : ((s = "setImmediate$" + Math.random() + "$"),
                (a = function (e) {
                  e.source === t &&
                    "string" == typeof e.data &&
                    0 === e.data.indexOf(s) &&
                    d(+e.data.slice(s.length));
                }),
                t.addEventListener
                  ? t.addEventListener("message", a, !1)
                  : t.attachEvent("onmessage", a),
                (n = function (e) {
                  t.postMessage(s + e, "*");
                })),
            (f.setImmediate = function (t) {
              "function" != typeof t && (t = new Function("" + t));
              for (
                var e = new Array(arguments.length - 1), r = 0;
                r < e.length;
                r++
              )
                e[r] = arguments[r + 1];
              var i = { callback: t, args: e };
              return (h[u] = i), n(u), u++;
            }),
            (f.clearImmediate = p);
        }
        function p(t) {
          delete h[t];
        }
        function d(t) {
          if (c) setTimeout(d, 0, t);
          else {
            var e = h[t];
            if (e) {
              c = !0;
              try {
                !(function (t) {
                  var e = t.callback,
                    r = t.args;
                  switch (r.length) {
                    case 0:
                      e();
                      break;
                    case 1:
                      e(r[0]);
                      break;
                    case 2:
                      e(r[0], r[1]);
                      break;
                    case 3:
                      e(r[0], r[1], r[2]);
                      break;
                    default:
                      e.apply(void 0, r);
                  }
                })(e);
              } finally {
                p(t), (c = !1);
              }
            }
          }
        }
      })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
    }.call(this, r(59), r(403)));
  },
  function (t, e) {
    var r,
      n,
      i = (t.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(t) {
      if (r === setTimeout) return setTimeout(t, 0);
      if ((r === o || !r) && setTimeout)
        return (r = setTimeout), setTimeout(t, 0);
      try {
        return r(t, 0);
      } catch (e) {
        try {
          return r.call(null, t, 0);
        } catch (e) {
          return r.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        r = o;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (t) {
        n = s;
      }
    })();
    var u,
      h = [],
      c = !1,
      l = -1;
    function f() {
      c &&
        u &&
        ((c = !1), u.length ? (h = u.concat(h)) : (l = -1), h.length && p());
    }
    function p() {
      if (!c) {
        var t = a(f);
        c = !0;
        for (var e = h.length; e; ) {
          for (u = h, h = []; ++l < e; ) u && u[l].run();
          (l = -1), (e = h.length);
        }
        (u = null),
          (c = !1),
          (function (t) {
            if (n === clearTimeout) return clearTimeout(t);
            if ((n === s || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(t);
            try {
              n(t);
            } catch (e) {
              try {
                return n.call(null, t);
              } catch (e) {
                return n.call(this, t);
              }
            }
          })(t);
      }
    }
    function d(t, e) {
      (this.fun = t), (this.array = e);
    }
    function v() {}
    (i.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
      h.push(new d(t, e)), 1 !== h.length || c || a(p);
    }),
      (d.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = v),
      (i.addListener = v),
      (i.once = v),
      (i.off = v),
      (i.removeListener = v),
      (i.removeAllListeners = v),
      (i.emit = v),
      (i.prependListener = v),
      (i.prependOnceListener = v),
      (i.listeners = function (t) {
        return [];
      }),
      (i.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  function (t, e, r) {
    (function (t, n) {
      var i;
      /*! https://mths.be/punycode v1.4.1 by @mathias */ !(function (o) {
        e && e.nodeType, t && t.nodeType;
        var s = "object" == typeof n && n;
        s.global !== s && s.window !== s && s.self;
        var a,
          u = 2147483647,
          h = /^xn--/,
          c = /[^\x20-\x7E]/,
          l = /[\x2E\u3002\uFF0E\uFF61]/g,
          f = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input",
          },
          p = Math.floor,
          d = String.fromCharCode;
        function v(t) {
          throw new RangeError(f[t]);
        }
        function g(t, e) {
          for (var r = t.length, n = []; r--; ) n[r] = e(t[r]);
          return n;
        }
        function y(t, e) {
          var r = t.split("@"),
            n = "";
          return (
            r.length > 1 && ((n = r[0] + "@"), (t = r[1])),
            n + g((t = t.replace(l, ".")).split("."), e).join(".")
          );
        }
        function m(t) {
          for (var e, r, n = [], i = 0, o = t.length; i < o; )
            (e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o
              ? 56320 == (64512 & (r = t.charCodeAt(i++)))
                ? n.push(((1023 & e) << 10) + (1023 & r) + 65536)
                : (n.push(e), i--)
              : n.push(e);
          return n;
        }
        function _(t) {
          return g(t, function (t) {
            var e = "";
            return (
              t > 65535 &&
                ((e += d((((t -= 65536) >>> 10) & 1023) | 55296)),
                (t = 56320 | (1023 & t))),
              (e += d(t))
            );
          }).join("");
        }
        function x(t, e) {
          return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
        }
        function b(t, e, r) {
          var n = 0;
          for (t = r ? p(t / 700) : t >> 1, t += p(t / e); t > 455; n += 36)
            t = p(t / 35);
          return p(n + (36 * t) / (t + 38));
        }
        function E(t) {
          var e,
            r,
            n,
            i,
            o,
            s,
            a,
            h,
            c,
            l,
            f,
            d = [],
            g = t.length,
            y = 0,
            m = 128,
            x = 72;
          for ((r = t.lastIndexOf("-")) < 0 && (r = 0), n = 0; n < r; ++n)
            t.charCodeAt(n) >= 128 && v("not-basic"), d.push(t.charCodeAt(n));
          for (i = r > 0 ? r + 1 : 0; i < g; ) {
            for (
              o = y, s = 1, a = 36;
              i >= g && v("invalid-input"),
                ((h =
                  (f = t.charCodeAt(i++)) - 48 < 10
                    ? f - 22
                    : f - 65 < 26
                    ? f - 65
                    : f - 97 < 26
                    ? f - 97
                    : 36) >= 36 ||
                  h > p((u - y) / s)) &&
                  v("overflow"),
                (y += h * s),
                !(h < (c = a <= x ? 1 : a >= x + 26 ? 26 : a - x));
              a += 36
            )
              s > p(u / (l = 36 - c)) && v("overflow"), (s *= l);
            (x = b(y - o, (e = d.length + 1), 0 == o)),
              p(y / e) > u - m && v("overflow"),
              (m += p(y / e)),
              (y %= e),
              d.splice(y++, 0, m);
          }
          return _(d);
        }
        function w(t) {
          var e,
            r,
            n,
            i,
            o,
            s,
            a,
            h,
            c,
            l,
            f,
            g,
            y,
            _,
            E,
            w = [];
          for (g = (t = m(t)).length, e = 128, r = 0, o = 72, s = 0; s < g; ++s)
            (f = t[s]) < 128 && w.push(d(f));
          for (n = i = w.length, i && w.push("-"); n < g; ) {
            for (a = u, s = 0; s < g; ++s) (f = t[s]) >= e && f < a && (a = f);
            for (
              a - e > p((u - r) / (y = n + 1)) && v("overflow"),
                r += (a - e) * y,
                e = a,
                s = 0;
              s < g;
              ++s
            )
              if (((f = t[s]) < e && ++r > u && v("overflow"), f == e)) {
                for (
                  h = r, c = 36;
                  !(h < (l = c <= o ? 1 : c >= o + 26 ? 26 : c - o));
                  c += 36
                )
                  (E = h - l),
                    (_ = 36 - l),
                    w.push(d(x(l + (E % _), 0))),
                    (h = p(E / _));
                w.push(d(x(h, 0))), (o = b(r, y, n == i)), (r = 0), ++n;
              }
            ++r, ++e;
          }
          return w.join("");
        }
        (a = {
          version: "1.4.1",
          ucs2: { decode: m, encode: _ },
          decode: E,
          encode: w,
          toASCII: function (t) {
            return y(t, function (t) {
              return c.test(t) ? "xn--" + w(t) : t;
            });
          },
          toUnicode: function (t) {
            return y(t, function (t) {
              return h.test(t) ? E(t.slice(4).toLowerCase()) : t;
            });
          },
        }),
          void 0 ===
            (i = function () {
              return a;
            }.call(e, r, e, t)) || (t.exports = i);
      })();
    }.call(this, r(405)(t), r(59)));
  },
  function (t, e) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, e, r) {
    "use strict";
    t.exports = {
      isString: function (t) {
        return "string" == typeof t;
      },
      isObject: function (t) {
        return "object" == typeof t && null !== t;
      },
      isNull: function (t) {
        return null === t;
      },
      isNullOrUndefined: function (t) {
        return null == t;
      },
    };
  },
  function (t, e, r) {
    "use strict";
    (e.decode = e.parse = r(408)), (e.encode = e.stringify = r(409));
  },
  function (t, e, r) {
    "use strict";
    function n(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    t.exports = function (t, e, r, o) {
      (e = e || "&"), (r = r || "=");
      var s = {};
      if ("string" != typeof t || 0 === t.length) return s;
      var a = /\+/g;
      t = t.split(e);
      var u = 1e3;
      o && "number" == typeof o.maxKeys && (u = o.maxKeys);
      var h = t.length;
      u > 0 && h > u && (h = u);
      for (var c = 0; c < h; ++c) {
        var l,
          f,
          p,
          d,
          v = t[c].replace(a, "%20"),
          g = v.indexOf(r);
        g >= 0
          ? ((l = v.substr(0, g)), (f = v.substr(g + 1)))
          : ((l = v), (f = "")),
          (p = decodeURIComponent(l)),
          (d = decodeURIComponent(f)),
          n(s, p) ? (i(s[p]) ? s[p].push(d) : (s[p] = [s[p], d])) : (s[p] = d);
      }
      return s;
    };
    var i =
      Array.isArray ||
      function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      };
  },
  function (t, e, r) {
    "use strict";
    var n = function (t) {
      switch (typeof t) {
        case "string":
          return t;
        case "boolean":
          return t ? "true" : "false";
        case "number":
          return isFinite(t) ? t : "";
        default:
          return "";
      }
    };
    t.exports = function (t, e, r, a) {
      return (
        (e = e || "&"),
        (r = r || "="),
        null === t && (t = void 0),
        "object" == typeof t
          ? o(s(t), function (s) {
              var a = encodeURIComponent(n(s)) + r;
              return i(t[s])
                ? o(t[s], function (t) {
                    return a + encodeURIComponent(n(t));
                  }).join(e)
                : a + encodeURIComponent(n(t[s]));
            }).join(e)
          : a
          ? encodeURIComponent(n(a)) + r + encodeURIComponent(n(t))
          : ""
      );
    };
    var i =
      Array.isArray ||
      function (t) {
        return "[object Array]" === Object.prototype.toString.call(t);
      };
    function o(t, e) {
      if (t.map) return t.map(e);
      for (var r = [], n = 0; n < t.length; n++) r.push(e(t[n], n));
      return r;
    }
    var s =
      Object.keys ||
      function (t) {
        var e = [];
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
        return e;
      };
  },
  function (t, e, r) {
    var n = r(31),
      i = r(411);
    n(
      {
        target: "Array",
        stat: !0,
        forced: !r(418)(function (t) {
          Array.from(t);
        }),
      },
      { from: i }
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(173),
      i = r(121),
      o = r(412),
      s = r(413),
      a = r(75),
      u = r(414),
      h = r(415);
    t.exports = function (t) {
      var e,
        r,
        c,
        l,
        f,
        p,
        d = i(t),
        v = "function" == typeof this ? this : Array,
        g = arguments.length,
        y = g > 1 ? arguments[1] : void 0,
        m = void 0 !== y,
        _ = h(d),
        x = 0;
      if (
        (m && (y = n(y, g > 2 ? arguments[2] : void 0, 2)),
        null == _ || (v == Array && s(_)))
      )
        for (r = new v((e = a(d.length))); e > x; x++)
          (p = m ? y(d[x], x) : d[x]), u(r, x, p);
      else
        for (f = (l = _.call(d)).next, r = new v(); !(c = f.call(l)).done; x++)
          (p = m ? o(l, y, [c.value, x], !0) : c.value), u(r, x, p);
      return (r.length = x), r;
    };
  },
  function (t, e, r) {
    var n = r(32);
    t.exports = function (t, e, r, i) {
      try {
        return i ? e(n(r)[0], r[1]) : e(r);
      } catch (e) {
        var o = t.return;
        throw (void 0 !== o && n(o.call(t)), e);
      }
    };
  },
  function (t, e, r) {
    var n = r(15),
      i = r(78),
      o = n("iterator"),
      s = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (i.Array === t || s[o] === t);
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(109),
      i = r(54),
      o = r(74);
    t.exports = function (t, e, r) {
      var s = n(e);
      s in t ? i.f(t, s, o(0, r)) : (t[s] = r);
    };
  },
  function (t, e, r) {
    var n = r(416),
      i = r(78),
      o = r(15)("iterator");
    t.exports = function (t) {
      if (null != t) return t[o] || t["@@iterator"] || i[n(t)];
    };
  },
  function (t, e, r) {
    var n = r(417),
      i = r(60),
      o = r(15)("toStringTag"),
      s =
        "Arguments" ==
        i(
          (function () {
            return arguments;
          })()
        );
    t.exports = n
      ? i
      : function (t) {
          var e, r, n;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (r = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), o))
            ? r
            : s
            ? i(e)
            : "Object" == (n = i(e)) && "function" == typeof e.callee
            ? "Arguments"
            : n;
        };
  },
  function (t, e, r) {
    var n = {};
    (n[r(15)("toStringTag")] = "z"), (t.exports = "[object z]" === String(n));
  },
  function (t, e, r) {
    var n = r(15)("iterator"),
      i = !1;
    try {
      var o = 0,
        s = {
          next: function () {
            return { done: !!o++ };
          },
          return: function () {
            i = !0;
          },
        };
      (s[n] = function () {
        return this;
      }),
        Array.from(s, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !i) return !1;
      var r = !1;
      try {
        var o = {};
        (o[n] = function () {
          return {
            next: function () {
              return { done: (r = !0) };
            },
          };
        }),
          t(o);
      } catch (t) {}
      return r;
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(178).charAt,
      i = r(164),
      o = r(420),
      s = i.set,
      a = i.getterFor("String Iterator");
    o(
      String,
      "String",
      function (t) {
        s(this, { type: "String Iterator", string: String(t), index: 0 });
      },
      function () {
        var t,
          e = a(this),
          r = e.string,
          i = e.index;
        return i >= r.length
          ? { value: void 0, done: !0 }
          : ((t = n(r, i)), (e.index += t.length), { value: t, done: !1 });
      }
    );
  },
  function (t, e, r) {
    "use strict";
    var n = r(31),
      i = r(421),
      o = r(182),
      s = r(427),
      a = r(183),
      u = r(35),
      h = r(110),
      c = r(15),
      l = r(113),
      f = r(78),
      p = r(181),
      d = p.IteratorPrototype,
      v = p.BUGGY_SAFARI_ITERATORS,
      g = c("iterator"),
      y = function () {
        return this;
      };
    t.exports = function (t, e, r, c, p, m, _) {
      i(r, e, c);
      var x,
        b,
        E,
        w = function (t) {
          if (t === p && P) return P;
          if (!v && t in O) return O[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this);
          };
        },
        T = e + " Iterator",
        S = !1,
        O = t.prototype,
        A = O[g] || O["@@iterator"] || (p && O[p]),
        P = (!v && A) || w(p),
        I = ("Array" == e && O.entries) || A;
      if (
        (I &&
          ((x = o(I.call(new t()))),
          d !== Object.prototype &&
            x.next &&
            (l ||
              o(x) === d ||
              (s ? s(x, d) : "function" != typeof x[g] && u(x, g, y)),
            a(x, T, !0, !0),
            l && (f[T] = y))),
        "values" == p &&
          A &&
          "values" !== A.name &&
          ((S = !0),
          (P = function () {
            return A.call(this);
          })),
        (l && !_) || O[g] === P || u(O, g, P),
        (f[e] = P),
        p)
      )
        if (
          ((b = {
            values: w("values"),
            keys: m ? P : w("keys"),
            entries: w("entries"),
          }),
          _)
        )
          for (E in b) (v || S || !(E in O)) && h(O, E, b[E]);
        else n({ target: e, proto: !0, forced: v || S }, b);
      return b;
    };
  },
  function (t, e, r) {
    "use strict";
    var n = r(181).IteratorPrototype,
      i = r(423),
      o = r(74),
      s = r(183),
      a = r(78),
      u = function () {
        return this;
      };
    t.exports = function (t, e, r) {
      var h = e + " Iterator";
      return (
        (t.prototype = i(n, { next: o(1, r) })), s(t, h, !1, !0), (a[h] = u), t
      );
    };
  },
  function (t, e, r) {
    var n = r(14);
    t.exports = !n(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, e, r) {
    var n,
      i = r(32),
      o = r(424),
      s = r(117),
      a = r(114),
      u = r(426),
      h = r(161),
      c = r(112),
      l = c("IE_PROTO"),
      f = function () {},
      p = function (t) {
        return "<script>" + t + "</script>";
      },
      d = function () {
        try {
          n = document.domain && new ActiveXObject("htmlfile");
        } catch (t) {}
        var t, e;
        d = n
          ? (function (t) {
              t.write(p("")), t.close();
              var e = t.parentWindow.Object;
              return (t = null), e;
            })(n)
          : (((e = h("iframe")).style.display = "none"),
            u.appendChild(e),
            (e.src = String("javascript:")),
            (t = e.contentWindow.document).open(),
            t.write(p("document.F=Object")),
            t.close(),
            t.F);
        for (var r = s.length; r--; ) delete d.prototype[s[r]];
        return d();
      };
    (a[l] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var r;
          return (
            null !== t
              ? ((f.prototype = i(t)),
                (r = new f()),
                (f.prototype = null),
                (r[l] = t))
              : (r = d()),
            void 0 === e ? r : o(r, e)
          );
        });
  },
  function (t, e, r) {
    var n = r(46),
      i = r(54),
      o = r(32),
      s = r(425);
    t.exports = n
      ? Object.defineProperties
      : function (t, e) {
          o(t);
          for (var r, n = s(e), a = n.length, u = 0; a > u; )
            i.f(t, (r = n[u++]), e[r]);
          return t;
        };
  },
  function (t, e, r) {
    var n = r(167),
      i = r(117);
    t.exports =
      Object.keys ||
      function (t) {
        return n(t, i);
      };
  },
  function (t, e, r) {
    var n = r(115);
    t.exports = n("document", "documentElement");
  },
  function (t, e, r) {
    var n = r(32),
      i = r(428);
    t.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              r = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(r, []),
                (e = r instanceof Array);
            } catch (t) {}
            return function (r, o) {
              return n(r), i(o), e ? t.call(r, o) : (r.__proto__ = o), r;
            };
          })()
        : void 0);
  },
  function (t, e, r) {
    var n = r(47);
    t.exports = function (t) {
      if (!n(t) && null !== t)
        throw TypeError("Can't set " + String(t) + " as a prototype");
      return t;
    };
  },
  function (t, e, r) {
    var n, i;
    "undefined" != typeof window && window,
      void 0 ===
        (i =
          "function" ==
          typeof (n = function () {
            "use strict";
            function t() {}
            var e = t.prototype;
            return (
              (e.on = function (t, e) {
                if (t && e) {
                  var r = (this._events = this._events || {}),
                    n = (r[t] = r[t] || []);
                  return -1 == n.indexOf(e) && n.push(e), this;
                }
              }),
              (e.once = function (t, e) {
                if (t && e) {
                  this.on(t, e);
                  var r = (this._onceEvents = this._onceEvents || {});
                  return ((r[t] = r[t] || {})[e] = !0), this;
                }
              }),
              (e.off = function (t, e) {
                var r = this._events && this._events[t];
                if (r && r.length) {
                  var n = r.indexOf(e);
                  return -1 != n && r.splice(n, 1), this;
                }
              }),
              (e.emitEvent = function (t, e) {
                var r = this._events && this._events[t];
                if (r && r.length) {
                  (r = r.slice(0)), (e = e || []);
                  for (
                    var n = this._onceEvents && this._onceEvents[t], i = 0;
                    i < r.length;
                    i++
                  ) {
                    var o = r[i];
                    n && n[o] && (this.off(t, o), delete n[o]),
                      o.apply(this, e);
                  }
                  return this;
                }
              }),
              (e.allOff = function () {
                delete this._events, delete this._onceEvents;
              }),
              t
            );
          })
            ? n.call(e, r, e, t)
            : n) || (t.exports = i);
  },
  function (t, e, r) {
    "use strict";
    r.r(e);
    r(157),
      r(76),
      r(119),
      r(383),
      r(120),
      r(176),
      r(177),
      r(391),
      r(397),
      r(122);
    var n = r(184),
      i = r(185),
      o = r.n(i);
    /*!
     * @pixi/polyfill - v5.3.0
     * Compiled Thu, 18 Jun 2020 23:27:40 UTC
     *
     * @pixi/polyfill is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */
    window.Promise || (window.Promise = n.Polyfill),
      Object.assign || (Object.assign = o.a);
    if (
      ((Date.now && Date.prototype.getTime) ||
        (Date.now = function () {
          return new Date().getTime();
        }),
      !window.performance || !window.performance.now)
    ) {
      var s = Date.now();
      window.performance || (window.performance = {}),
        (window.performance.now = function () {
          return Date.now() - s;
        });
    }
    for (
      var a = Date.now(), u = ["ms", "moz", "webkit", "o"], h = 0;
      h < u.length && !window.requestAnimationFrame;
      ++h
    ) {
      var c = u[h];
      (window.requestAnimationFrame = window[c + "RequestAnimationFrame"]),
        (window.cancelAnimationFrame =
          window[c + "CancelAnimationFrame"] ||
          window[c + "CancelRequestAnimationFrame"]);
    }
    window.requestAnimationFrame ||
      (window.requestAnimationFrame = function (t) {
        if ("function" != typeof t)
          throw new TypeError(t + "is not a function");
        var e = Date.now(),
          r = 16 + a - e;
        return (
          r < 0 && (r = 0),
          (a = e),
          window.setTimeout(function () {
            (a = Date.now()), t(performance.now());
          }, r)
        );
      }),
      window.cancelAnimationFrame ||
        (window.cancelAnimationFrame = function (t) {
          return clearTimeout(t);
        }),
      Math.sign ||
        (Math.sign = function (t) {
          return 0 === (t = Number(t)) || isNaN(t) ? t : t > 0 ? 1 : -1;
        }),
      Number.isInteger ||
        (Number.isInteger = function (t) {
          return "number" == typeof t && isFinite(t) && Math.floor(t) === t;
        }),
      window.ArrayBuffer || (window.ArrayBuffer = Array),
      window.Float32Array || (window.Float32Array = Array),
      window.Uint32Array || (window.Uint32Array = Array),
      window.Uint16Array || (window.Uint16Array = Array),
      window.Uint8Array || (window.Uint8Array = Array),
      window.Int32Array || (window.Int32Array = Array);
    var l = /iPhone/i,
      f = /iPod/i,
      p = /iPad/i,
      d = /\biOS-universal(?:.+)Mac\b/i,
      v = /\bAndroid(?:.+)Mobile\b/i,
      g = /Android/i,
      y = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
      m = /Silk/i,
      _ = /Windows Phone/i,
      x = /\bWindows(?:.+)ARM\b/i,
      b = /BlackBerry/i,
      E = /BB10/i,
      w = /Opera Mini/i,
      T = /\b(CriOS|Chrome)(?:.+)Mobile/i,
      S = /Mobile(?:.+)Firefox\b/i,
      O = function (t) {
        return (
          void 0 !== t &&
          "MacIntel" === t.platform &&
          "number" == typeof t.maxTouchPoints &&
          t.maxTouchPoints > 1 &&
          "undefined" == typeof MSStream
        );
      };
    /*!
     * @pixi/settings - v5.3.0
     * Compiled Thu, 18 Jun 2020 23:27:40 UTC
     *
     * @pixi/settings is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */
    var A = (function (t) {
      var e = { userAgent: "", platform: "", maxTouchPoints: 0 };
      t || "undefined" == typeof navigator
        ? "string" == typeof t
          ? (e.userAgent = t)
          : t &&
            t.userAgent &&
            (e = {
              userAgent: t.userAgent,
              platform: t.platform,
              maxTouchPoints: t.maxTouchPoints || 0,
            })
        : (e = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0,
          });
      var r = e.userAgent,
        n = r.split("[FBAN");
      void 0 !== n[1] && (r = n[0]),
        void 0 !== (n = r.split("Twitter"))[1] && (r = n[0]);
      var i = (function (t) {
          return function (e) {
            return e.test(t);
          };
        })(r),
        o = {
          apple: {
            phone: i(l) && !i(_),
            ipod: i(f),
            tablet: !i(l) && (i(p) || O(e)) && !i(_),
            universal: i(d),
            device: (i(l) || i(f) || i(p) || i(d) || O(e)) && !i(_),
          },
          amazon: { phone: i(y), tablet: !i(y) && i(m), device: i(y) || i(m) },
          android: {
            phone: (!i(_) && i(y)) || (!i(_) && i(v)),
            tablet: !i(_) && !i(y) && !i(v) && (i(m) || i(g)),
            device:
              (!i(_) && (i(y) || i(m) || i(v) || i(g))) || i(/\bokhttp\b/i),
          },
          windows: { phone: i(_), tablet: i(x), device: i(_) || i(x) },
          other: {
            blackberry: i(b),
            blackberry10: i(E),
            opera: i(w),
            firefox: i(S),
            chrome: i(T),
            device: i(b) || i(E) || i(w) || i(S) || i(T),
          },
          any: !1,
          phone: !1,
          tablet: !1,
        };
      return (
        (o.any =
          o.apple.device ||
          o.android.device ||
          o.windows.device ||
          o.other.device),
        (o.phone = o.apple.phone || o.android.phone || o.windows.phone),
        (o.tablet = o.apple.tablet || o.android.tablet || o.windows.tablet),
        o
      );
    })(window.navigator);
    var P,
      I,
      C,
      M,
      R,
      D,
      L,
      N,
      F,
      U,
      k,
      B,
      j,
      H,
      G,
      X,
      z,
      V = {
        MIPMAP_TEXTURES: 1,
        ANISOTROPIC_LEVEL: 0,
        RESOLUTION: 1,
        FILTER_RESOLUTION: 1,
        SPRITE_MAX_TEXTURES: (function (t) {
          var e = !0;
          if (A.tablet || A.phone) {
            var r;
            if (A.apple.device)
              if ((r = navigator.userAgent.match(/OS (\d+)_(\d+)?/)))
                parseInt(r[1], 10) < 11 && (e = !1);
            if (A.android.device)
              if ((r = navigator.userAgent.match(/Android\s([0-9.]*)/)))
                parseInt(r[1], 10) < 7 && (e = !1);
          }
          return e ? t : 4;
        })(32),
        SPRITE_BATCH_SIZE: 4096,
        RENDER_OPTIONS: {
          view: null,
          antialias: !1,
          autoDensity: !1,
          transparent: !1,
          backgroundColor: 0,
          clearBeforeRender: !0,
          preserveDrawingBuffer: !1,
          width: 800,
          height: 600,
          legacy: !1,
        },
        GC_MODE: 0,
        GC_MAX_IDLE: 3600,
        GC_MAX_CHECK_COUNT: 600,
        WRAP_MODE: 33071,
        SCALE_MODE: 1,
        PRECISION_VERTEX: "highp",
        PRECISION_FRAGMENT: A.apple.device ? "highp" : "mediump",
        CAN_UPLOAD_SAME_BUFFER: !A.apple.device,
        CREATE_IMAGE_BITMAP: !1,
        ROUND_PIXELS: !1,
      },
      Y = r(179),
      W = r.n(Y),
      q = r(180),
      K = r.n(q),
      Z = r(79),
      J = r.n(Z);
    !(function (t) {
      (t[(t.WEBGL_LEGACY = 0)] = "WEBGL_LEGACY"),
        (t[(t.WEBGL = 1)] = "WEBGL"),
        (t[(t.WEBGL2 = 2)] = "WEBGL2");
    })(P || (P = {})),
      (function (t) {
        (t[(t.UNKNOWN = 0)] = "UNKNOWN"),
          (t[(t.WEBGL = 1)] = "WEBGL"),
          (t[(t.CANVAS = 2)] = "CANVAS");
      })(I || (I = {})),
      (function (t) {
        (t[(t.COLOR = 16384)] = "COLOR"),
          (t[(t.DEPTH = 256)] = "DEPTH"),
          (t[(t.STENCIL = 1024)] = "STENCIL");
      })(C || (C = {})),
      (function (t) {
        (t[(t.NORMAL = 0)] = "NORMAL"),
          (t[(t.ADD = 1)] = "ADD"),
          (t[(t.MULTIPLY = 2)] = "MULTIPLY"),
          (t[(t.SCREEN = 3)] = "SCREEN"),
          (t[(t.OVERLAY = 4)] = "OVERLAY"),
          (t[(t.DARKEN = 5)] = "DARKEN"),
          (t[(t.LIGHTEN = 6)] = "LIGHTEN"),
          (t[(t.COLOR_DODGE = 7)] = "COLOR_DODGE"),
          (t[(t.COLOR_BURN = 8)] = "COLOR_BURN"),
          (t[(t.HARD_LIGHT = 9)] = "HARD_LIGHT"),
          (t[(t.SOFT_LIGHT = 10)] = "SOFT_LIGHT"),
          (t[(t.DIFFERENCE = 11)] = "DIFFERENCE"),
          (t[(t.EXCLUSION = 12)] = "EXCLUSION"),
          (t[(t.HUE = 13)] = "HUE"),
          (t[(t.SATURATION = 14)] = "SATURATION"),
          (t[(t.COLOR = 15)] = "COLOR"),
          (t[(t.LUMINOSITY = 16)] = "LUMINOSITY"),
          (t[(t.NORMAL_NPM = 17)] = "NORMAL_NPM"),
          (t[(t.ADD_NPM = 18)] = "ADD_NPM"),
          (t[(t.SCREEN_NPM = 19)] = "SCREEN_NPM"),
          (t[(t.NONE = 20)] = "NONE"),
          (t[(t.SRC_OVER = 0)] = "SRC_OVER"),
          (t[(t.SRC_IN = 21)] = "SRC_IN"),
          (t[(t.SRC_OUT = 22)] = "SRC_OUT"),
          (t[(t.SRC_ATOP = 23)] = "SRC_ATOP"),
          (t[(t.DST_OVER = 24)] = "DST_OVER"),
          (t[(t.DST_IN = 25)] = "DST_IN"),
          (t[(t.DST_OUT = 26)] = "DST_OUT"),
          (t[(t.DST_ATOP = 27)] = "DST_ATOP"),
          (t[(t.ERASE = 26)] = "ERASE"),
          (t[(t.SUBTRACT = 28)] = "SUBTRACT"),
          (t[(t.XOR = 29)] = "XOR");
      })(M || (M = {})),
      (function (t) {
        (t[(t.POINTS = 0)] = "POINTS"),
          (t[(t.LINES = 1)] = "LINES"),
          (t[(t.LINE_LOOP = 2)] = "LINE_LOOP"),
          (t[(t.LINE_STRIP = 3)] = "LINE_STRIP"),
          (t[(t.TRIANGLES = 4)] = "TRIANGLES"),
          (t[(t.TRIANGLE_STRIP = 5)] = "TRIANGLE_STRIP"),
          (t[(t.TRIANGLE_FAN = 6)] = "TRIANGLE_FAN");
      })(R || (R = {})),
      (function (t) {
        (t[(t.RGBA = 6408)] = "RGBA"),
          (t[(t.RGB = 6407)] = "RGB"),
          (t[(t.ALPHA = 6406)] = "ALPHA"),
          (t[(t.LUMINANCE = 6409)] = "LUMINANCE"),
          (t[(t.LUMINANCE_ALPHA = 6410)] = "LUMINANCE_ALPHA"),
          (t[(t.DEPTH_COMPONENT = 6402)] = "DEPTH_COMPONENT"),
          (t[(t.DEPTH_STENCIL = 34041)] = "DEPTH_STENCIL");
      })(D || (D = {})),
      (function (t) {
        (t[(t.TEXTURE_2D = 3553)] = "TEXTURE_2D"),
          (t[(t.TEXTURE_CUBE_MAP = 34067)] = "TEXTURE_CUBE_MAP"),
          (t[(t.TEXTURE_2D_ARRAY = 35866)] = "TEXTURE_2D_ARRAY"),
          (t[(t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
            "TEXTURE_CUBE_MAP_POSITIVE_X"),
          (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
            "TEXTURE_CUBE_MAP_NEGATIVE_X"),
          (t[(t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
            "TEXTURE_CUBE_MAP_POSITIVE_Y"),
          (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
            "TEXTURE_CUBE_MAP_NEGATIVE_Y"),
          (t[(t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
            "TEXTURE_CUBE_MAP_POSITIVE_Z"),
          (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
            "TEXTURE_CUBE_MAP_NEGATIVE_Z");
      })(L || (L = {})),
      (function (t) {
        (t[(t.UNSIGNED_BYTE = 5121)] = "UNSIGNED_BYTE"),
          (t[(t.UNSIGNED_SHORT = 5123)] = "UNSIGNED_SHORT"),
          (t[(t.UNSIGNED_SHORT_5_6_5 = 33635)] = "UNSIGNED_SHORT_5_6_5"),
          (t[(t.UNSIGNED_SHORT_4_4_4_4 = 32819)] = "UNSIGNED_SHORT_4_4_4_4"),
          (t[(t.UNSIGNED_SHORT_5_5_5_1 = 32820)] = "UNSIGNED_SHORT_5_5_5_1"),
          (t[(t.FLOAT = 5126)] = "FLOAT"),
          (t[(t.HALF_FLOAT = 36193)] = "HALF_FLOAT");
      })(N || (N = {})),
      (function (t) {
        (t[(t.NEAREST = 0)] = "NEAREST"), (t[(t.LINEAR = 1)] = "LINEAR");
      })(F || (F = {})),
      (function (t) {
        (t[(t.CLAMP = 33071)] = "CLAMP"),
          (t[(t.REPEAT = 10497)] = "REPEAT"),
          (t[(t.MIRRORED_REPEAT = 33648)] = "MIRRORED_REPEAT");
      })(U || (U = {})),
      (function (t) {
        (t[(t.OFF = 0)] = "OFF"),
          (t[(t.POW2 = 1)] = "POW2"),
          (t[(t.ON = 2)] = "ON");
      })(k || (k = {})),
      (function (t) {
        (t[(t.NPM = 0)] = "NPM"),
          (t[(t.UNPACK = 1)] = "UNPACK"),
          (t[(t.PMA = 2)] = "PMA"),
          (t[(t.NO_PREMULTIPLIED_ALPHA = 0)] = "NO_PREMULTIPLIED_ALPHA"),
          (t[(t.PREMULTIPLY_ON_UPLOAD = 1)] = "PREMULTIPLY_ON_UPLOAD"),
          (t[(t.PREMULTIPLY_ALPHA = 2)] = "PREMULTIPLY_ALPHA");
      })(B || (B = {})),
      (function (t) {
        (t[(t.NO = 0)] = "NO"),
          (t[(t.YES = 1)] = "YES"),
          (t[(t.AUTO = 2)] = "AUTO"),
          (t[(t.BLEND = 0)] = "BLEND"),
          (t[(t.CLEAR = 1)] = "CLEAR"),
          (t[(t.BLIT = 2)] = "BLIT");
      })(j || (j = {})),
      (function (t) {
        (t[(t.AUTO = 0)] = "AUTO"), (t[(t.MANUAL = 1)] = "MANUAL");
      })(H || (H = {})),
      (function (t) {
        (t.LOW = "lowp"), (t.MEDIUM = "mediump"), (t.HIGH = "highp");
      })(G || (G = {})),
      (function (t) {
        (t[(t.NONE = 0)] = "NONE"),
          (t[(t.SCISSOR = 1)] = "SCISSOR"),
          (t[(t.STENCIL = 2)] = "STENCIL"),
          (t[(t.SPRITE = 3)] = "SPRITE");
      })(X || (X = {})),
      (function (t) {
        (t[(t.NONE = 0)] = "NONE"),
          (t[(t.LOW = 2)] = "LOW"),
          (t[(t.MEDIUM = 4)] = "MEDIUM"),
          (t[(t.HIGH = 8)] = "HIGH");
      })(z || (z = {})),
      /*!
       * @pixi/utils - v5.3.0
       * Compiled Thu, 18 Jun 2020 23:27:40 UTC
       *
       * @pixi/utils is licensed under the MIT License.
       * http://www.opensource.org/licenses/mit-license
       */
      (V.RETINA_PREFIX = /@([0-9\.]+)x/),
      (V.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !0);
    var $,
      Q = !1;
    function tt(t, e) {
      return (
        void 0 === e && (e = []),
        (e[0] = ((t >> 16) & 255) / 255),
        (e[1] = ((t >> 8) & 255) / 255),
        (e[2] = (255 & t) / 255),
        e
      );
    }
    function et(t) {
      var e = t.toString(16);
      return "#" + (e = "000000".substr(0, 6 - e.length) + e);
    }
    function rt(t) {
      return (
        "string" == typeof t && "#" === t[0] && (t = t.substr(1)),
        parseInt(t, 16)
      );
    }
    var nt = (function () {
      for (var t = [], e = [], r = 0; r < 32; r++) (t[r] = r), (e[r] = r);
      (t[M.NORMAL_NPM] = M.NORMAL),
        (t[M.ADD_NPM] = M.ADD),
        (t[M.SCREEN_NPM] = M.SCREEN),
        (e[M.NORMAL] = M.NORMAL_NPM),
        (e[M.ADD] = M.ADD_NPM),
        (e[M.SCREEN] = M.SCREEN_NPM);
      var n = [];
      return n.push(e), n.push(t), n;
    })();
    function it(t, e) {
      return nt[e ? 1 : 0][t];
    }
    function ot(t, e) {
      if (1 === e) return ((255 * e) << 24) + t;
      if (0 === e) return 0;
      var r = (t >> 16) & 255,
        n = (t >> 8) & 255,
        i = 255 & t;
      return (
        ((255 * e) << 24) +
        ((r = (r * e + 0.5) | 0) << 16) +
        ((n = (n * e + 0.5) | 0) << 8) +
        (i = (i * e + 0.5) | 0)
      );
    }
    function st(t, e, r, n) {
      return (
        ((r = r || new Float32Array(4))[0] = ((t >> 16) & 255) / 255),
        (r[1] = ((t >> 8) & 255) / 255),
        (r[2] = (255 & t) / 255),
        (n || void 0 === n) && ((r[0] *= e), (r[1] *= e), (r[2] *= e)),
        (r[3] = e),
        r
      );
    }
    Float32Array, Uint32Array, Int32Array, Uint8Array;
    function at(t) {
      return (
        (t += 0 === t ? 1 : 0),
        --t,
        (t |= t >>> 1),
        (t |= t >>> 2),
        (t |= t >>> 4),
        (t |= t >>> 8),
        (t |= t >>> 16) + 1
      );
    }
    function ut(t) {
      return !(t & (t - 1) || !t);
    }
    function ht(t) {
      var e = (t > 65535 ? 1 : 0) << 4,
        r = ((t >>>= e) > 255 ? 1 : 0) << 3;
      return (
        (e |= r),
        (e |= r = ((t >>>= r) > 15 ? 1 : 0) << 2),
        (e |= r = ((t >>>= r) > 3 ? 1 : 0) << 1) | ((t >>>= r) >> 1)
      );
    }
    function ct(t, e, r) {
      var n,
        i = t.length;
      if (!(e >= i || 0 === r)) {
        var o = i - (r = e + r > i ? i - e : r);
        for (n = e; n < o; ++n) t[n] = t[n + r];
        t.length = o;
      }
    }
    function lt(t) {
      return 0 === t ? 0 : t < 0 ? -1 : 1;
    }
    var ft = 0;
    function pt() {
      return ++ft;
    }
    var dt = {};
    function vt(t, e, r) {
      if ((void 0 === r && (r = 3), !dt[e])) {
        var n = new Error().stack;
        void 0 === n
          ? console.warn(
              "PixiJS Deprecation Warning: ",
              e + "\nDeprecated since v" + t
            )
          : ((n = n.split("\n").splice(r).join("\n")),
            console.groupCollapsed
              ? (console.groupCollapsed(
                  "%cPixiJS Deprecation Warning: %c%s",
                  "color:#614108;background:#fffbe6",
                  "font-weight:normal;color:#614108;background:#fffbe6",
                  e + "\nDeprecated since v" + t
                ),
                console.warn(n),
                console.groupEnd())
              : (console.warn(
                  "PixiJS Deprecation Warning: ",
                  e + "\nDeprecated since v" + t
                ),
                console.warn(n))),
          (dt[e] = !0);
      }
    }
    var gt = {},
      yt = Object.create(null),
      mt = Object.create(null);
    var _t = (function () {
      function t(t, e, r) {
        (this.canvas = document.createElement("canvas")),
          (this.context = this.canvas.getContext("2d")),
          (this.resolution = r || V.RESOLUTION),
          this.resize(t, e);
      }
      return (
        (t.prototype.clear = function () {
          this.context.setTransform(1, 0, 0, 1, 0, 0),
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }),
        (t.prototype.resize = function (t, e) {
          (this.canvas.width = t * this.resolution),
            (this.canvas.height = e * this.resolution);
        }),
        (t.prototype.destroy = function () {
          (this.context = null), (this.canvas = null);
        }),
        Object.defineProperty(t.prototype, "width", {
          get: function () {
            return this.canvas.width;
          },
          set: function (t) {
            this.canvas.width = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "height", {
          get: function () {
            return this.canvas.height;
          },
          set: function (t) {
            this.canvas.height = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        t
      );
    })();
    var xt;
    function bt(t, e) {
      var r = V.RETINA_PREFIX.exec(t);
      return r ? parseFloat(r[1]) : void 0 !== e ? e : 1;
    }
    /*!
     * @pixi/math - v5.3.0
     * Compiled Thu, 18 Jun 2020 23:27:40 UTC
     *
     * @pixi/math is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */ var Et,
      wt = 2 * Math.PI,
      Tt = 180 / Math.PI,
      St = Math.PI / 180;
    !(function (t) {
      (t[(t.POLY = 0)] = "POLY"),
        (t[(t.RECT = 1)] = "RECT"),
        (t[(t.CIRC = 2)] = "CIRC"),
        (t[(t.ELIP = 3)] = "ELIP"),
        (t[(t.RREC = 4)] = "RREC");
    })(Et || (Et = {}));
    var Ot = (function () {
        function t(t, e, r, n) {
          void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === r && (r = 0),
            void 0 === n && (n = 0),
            (this.x = Number(t)),
            (this.y = Number(e)),
            (this.width = Number(r)),
            (this.height = Number(n)),
            (this.type = Et.RECT);
        }
        return (
          Object.defineProperty(t.prototype, "left", {
            get: function () {
              return this.x;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "right", {
            get: function () {
              return this.x + this.width;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "top", {
            get: function () {
              return this.y;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "bottom", {
            get: function () {
              return this.y + this.height;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, "EMPTY", {
            get: function () {
              return new t(0, 0, 0, 0);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.clone = function () {
            return new t(this.x, this.y, this.width, this.height);
          }),
          (t.prototype.copyFrom = function (t) {
            return (
              (this.x = t.x),
              (this.y = t.y),
              (this.width = t.width),
              (this.height = t.height),
              this
            );
          }),
          (t.prototype.copyTo = function (t) {
            return (
              (t.x = this.x),
              (t.y = this.y),
              (t.width = this.width),
              (t.height = this.height),
              t
            );
          }),
          (t.prototype.contains = function (t, e) {
            return (
              !(this.width <= 0 || this.height <= 0) &&
              t >= this.x &&
              t < this.x + this.width &&
              e >= this.y &&
              e < this.y + this.height
            );
          }),
          (t.prototype.pad = function (t, e) {
            return (
              void 0 === t && (t = 0),
              void 0 === e && (e = t),
              (this.x -= t),
              (this.y -= e),
              (this.width += 2 * t),
              (this.height += 2 * e),
              this
            );
          }),
          (t.prototype.fit = function (t) {
            var e = Math.max(this.x, t.x),
              r = Math.min(this.x + this.width, t.x + t.width),
              n = Math.max(this.y, t.y),
              i = Math.min(this.y + this.height, t.y + t.height);
            return (
              (this.x = e),
              (this.width = Math.max(r - e, 0)),
              (this.y = n),
              (this.height = Math.max(i - n, 0)),
              this
            );
          }),
          (t.prototype.ceil = function (t, e) {
            void 0 === t && (t = 1), void 0 === e && (e = 0.001);
            var r = Math.ceil((this.x + this.width - e) * t) / t,
              n = Math.ceil((this.y + this.height - e) * t) / t;
            return (
              (this.x = Math.floor((this.x + e) * t) / t),
              (this.y = Math.floor((this.y + e) * t) / t),
              (this.width = r - this.x),
              (this.height = n - this.y),
              this
            );
          }),
          (t.prototype.enlarge = function (t) {
            var e = Math.min(this.x, t.x),
              r = Math.max(this.x + this.width, t.x + t.width),
              n = Math.min(this.y, t.y),
              i = Math.max(this.y + this.height, t.y + t.height);
            return (
              (this.x = e),
              (this.width = r - e),
              (this.y = n),
              (this.height = i - n),
              this
            );
          }),
          t
        );
      })(),
      At = (function () {
        function t(t, e, r) {
          void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === r && (r = 0),
            (this.x = t),
            (this.y = e),
            (this.radius = r),
            (this.type = Et.CIRC);
        }
        return (
          (t.prototype.clone = function () {
            return new t(this.x, this.y, this.radius);
          }),
          (t.prototype.contains = function (t, e) {
            if (this.radius <= 0) return !1;
            var r = this.radius * this.radius,
              n = this.x - t,
              i = this.y - e;
            return (n *= n) + (i *= i) <= r;
          }),
          (t.prototype.getBounds = function () {
            return new Ot(
              this.x - this.radius,
              this.y - this.radius,
              2 * this.radius,
              2 * this.radius
            );
          }),
          t
        );
      })(),
      Pt = (function () {
        function t(t, e, r, n) {
          void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === r && (r = 0),
            void 0 === n && (n = 0),
            (this.x = t),
            (this.y = e),
            (this.width = r),
            (this.height = n),
            (this.type = Et.ELIP);
        }
        return (
          (t.prototype.clone = function () {
            return new t(this.x, this.y, this.width, this.height);
          }),
          (t.prototype.contains = function (t, e) {
            if (this.width <= 0 || this.height <= 0) return !1;
            var r = (t - this.x) / this.width,
              n = (e - this.y) / this.height;
            return (r *= r) + (n *= n) <= 1;
          }),
          (t.prototype.getBounds = function () {
            return new Ot(
              this.x - this.width,
              this.y - this.height,
              this.width,
              this.height
            );
          }),
          t
        );
      })(),
      It = (function () {
        function t() {
          for (var t = arguments, e = [], r = 0; r < arguments.length; r++)
            e[r] = t[r];
          var n = Array.isArray(e[0]) ? e[0] : e;
          if ("number" != typeof n[0]) {
            for (var i = [], o = 0, s = n.length; o < s; o++)
              i.push(n[o].x, n[o].y);
            n = i;
          }
          (this.points = n), (this.type = Et.POLY), (this.closeStroke = !0);
        }
        return (
          (t.prototype.clone = function () {
            var e = new t(this.points.slice());
            return (e.closeStroke = this.closeStroke), e;
          }),
          (t.prototype.contains = function (t, e) {
            for (
              var r = !1, n = this.points.length / 2, i = 0, o = n - 1;
              i < n;
              o = i++
            ) {
              var s = this.points[2 * i],
                a = this.points[2 * i + 1],
                u = this.points[2 * o],
                h = this.points[2 * o + 1];
              a > e != h > e &&
                t < ((e - a) / (h - a)) * (u - s) + s &&
                (r = !r);
            }
            return r;
          }),
          t
        );
      })(),
      Ct = (function () {
        function t(t, e, r, n, i) {
          void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            void 0 === r && (r = 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = 20),
            (this.x = t),
            (this.y = e),
            (this.width = r),
            (this.height = n),
            (this.radius = i),
            (this.type = Et.RREC);
        }
        return (
          (t.prototype.clone = function () {
            return new t(this.x, this.y, this.width, this.height, this.radius);
          }),
          (t.prototype.contains = function (t, e) {
            if (this.width <= 0 || this.height <= 0) return !1;
            if (
              t >= this.x &&
              t <= this.x + this.width &&
              e >= this.y &&
              e <= this.y + this.height
            ) {
              if (
                (e >= this.y + this.radius &&
                  e <= this.y + this.height - this.radius) ||
                (t >= this.x + this.radius &&
                  t <= this.x + this.width - this.radius)
              )
                return !0;
              var r = t - (this.x + this.radius),
                n = e - (this.y + this.radius),
                i = this.radius * this.radius;
              if (r * r + n * n <= i) return !0;
              if (
                (r = t - (this.x + this.width - this.radius)) * r + n * n <=
                i
              )
                return !0;
              if (
                r * r + (n = e - (this.y + this.height - this.radius)) * n <=
                i
              )
                return !0;
              if ((r = t - (this.x + this.radius)) * r + n * n <= i) return !0;
            }
            return !1;
          }),
          t
        );
      })(),
      Mt = (function () {
        function t(t, e) {
          void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            (this.x = t),
            (this.y = e);
        }
        return (
          (t.prototype.clone = function () {
            return new t(this.x, this.y);
          }),
          (t.prototype.copyFrom = function (t) {
            return this.set(t.x, t.y), this;
          }),
          (t.prototype.copyTo = function (t) {
            return t.set(this.x, this.y), t;
          }),
          (t.prototype.equals = function (t) {
            return t.x === this.x && t.y === this.y;
          }),
          (t.prototype.set = function (t, e) {
            return (
              void 0 === t && (t = 0),
              void 0 === e && (e = t),
              (this.x = t),
              (this.y = e),
              this
            );
          }),
          t
        );
      })(),
      Rt = (function () {
        function t(t, e, r, n) {
          void 0 === r && (r = 0),
            void 0 === n && (n = 0),
            (this._x = r),
            (this._y = n),
            (this.cb = t),
            (this.scope = e);
        }
        return (
          (t.prototype.clone = function (e, r) {
            return (
              void 0 === e && (e = this.cb),
              void 0 === r && (r = this.scope),
              new t(e, r, this._x, this._y)
            );
          }),
          (t.prototype.set = function (t, e) {
            return (
              void 0 === t && (t = 0),
              void 0 === e && (e = t),
              (this._x === t && this._y === e) ||
                ((this._x = t), (this._y = e), this.cb.call(this.scope)),
              this
            );
          }),
          (t.prototype.copyFrom = function (t) {
            return (
              (this._x === t.x && this._y === t.y) ||
                ((this._x = t.x), (this._y = t.y), this.cb.call(this.scope)),
              this
            );
          }),
          (t.prototype.copyTo = function (t) {
            return t.set(this._x, this._y), t;
          }),
          (t.prototype.equals = function (t) {
            return t.x === this._x && t.y === this._y;
          }),
          Object.defineProperty(t.prototype, "x", {
            get: function () {
              return this._x;
            },
            set: function (t) {
              this._x !== t && ((this._x = t), this.cb.call(this.scope));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "y", {
            get: function () {
              return this._y;
            },
            set: function (t) {
              this._y !== t && ((this._y = t), this.cb.call(this.scope));
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(),
      Dt = (function () {
        function t(t, e, r, n, i, o) {
          void 0 === t && (t = 1),
            void 0 === e && (e = 0),
            void 0 === r && (r = 0),
            void 0 === n && (n = 1),
            void 0 === i && (i = 0),
            void 0 === o && (o = 0),
            (this.array = null),
            (this.a = t),
            (this.b = e),
            (this.c = r),
            (this.d = n),
            (this.tx = i),
            (this.ty = o);
        }
        return (
          (t.prototype.fromArray = function (t) {
            (this.a = t[0]),
              (this.b = t[1]),
              (this.c = t[3]),
              (this.d = t[4]),
              (this.tx = t[2]),
              (this.ty = t[5]);
          }),
          (t.prototype.set = function (t, e, r, n, i, o) {
            return (
              (this.a = t),
              (this.b = e),
              (this.c = r),
              (this.d = n),
              (this.tx = i),
              (this.ty = o),
              this
            );
          }),
          (t.prototype.toArray = function (t, e) {
            this.array || (this.array = new Float32Array(9));
            var r = e || this.array;
            return (
              t
                ? ((r[0] = this.a),
                  (r[1] = this.b),
                  (r[2] = 0),
                  (r[3] = this.c),
                  (r[4] = this.d),
                  (r[5] = 0),
                  (r[6] = this.tx),
                  (r[7] = this.ty),
                  (r[8] = 1))
                : ((r[0] = this.a),
                  (r[1] = this.c),
                  (r[2] = this.tx),
                  (r[3] = this.b),
                  (r[4] = this.d),
                  (r[5] = this.ty),
                  (r[6] = 0),
                  (r[7] = 0),
                  (r[8] = 1)),
              r
            );
          }),
          (t.prototype.apply = function (t, e) {
            e = e || new Mt();
            var r = t.x,
              n = t.y;
            return (
              (e.x = this.a * r + this.c * n + this.tx),
              (e.y = this.b * r + this.d * n + this.ty),
              e
            );
          }),
          (t.prototype.applyInverse = function (t, e) {
            e = e || new Mt();
            var r = 1 / (this.a * this.d + this.c * -this.b),
              n = t.x,
              i = t.y;
            return (
              (e.x =
                this.d * r * n +
                -this.c * r * i +
                (this.ty * this.c - this.tx * this.d) * r),
              (e.y =
                this.a * r * i +
                -this.b * r * n +
                (-this.ty * this.a + this.tx * this.b) * r),
              e
            );
          }),
          (t.prototype.translate = function (t, e) {
            return (this.tx += t), (this.ty += e), this;
          }),
          (t.prototype.scale = function (t, e) {
            return (
              (this.a *= t),
              (this.d *= e),
              (this.c *= t),
              (this.b *= e),
              (this.tx *= t),
              (this.ty *= e),
              this
            );
          }),
          (t.prototype.rotate = function (t) {
            var e = Math.cos(t),
              r = Math.sin(t),
              n = this.a,
              i = this.c,
              o = this.tx;
            return (
              (this.a = n * e - this.b * r),
              (this.b = n * r + this.b * e),
              (this.c = i * e - this.d * r),
              (this.d = i * r + this.d * e),
              (this.tx = o * e - this.ty * r),
              (this.ty = o * r + this.ty * e),
              this
            );
          }),
          (t.prototype.append = function (t) {
            var e = this.a,
              r = this.b,
              n = this.c,
              i = this.d;
            return (
              (this.a = t.a * e + t.b * n),
              (this.b = t.a * r + t.b * i),
              (this.c = t.c * e + t.d * n),
              (this.d = t.c * r + t.d * i),
              (this.tx = t.tx * e + t.ty * n + this.tx),
              (this.ty = t.tx * r + t.ty * i + this.ty),
              this
            );
          }),
          (t.prototype.setTransform = function (t, e, r, n, i, o, s, a, u) {
            return (
              (this.a = Math.cos(s + u) * i),
              (this.b = Math.sin(s + u) * i),
              (this.c = -Math.sin(s - a) * o),
              (this.d = Math.cos(s - a) * o),
              (this.tx = t - (r * this.a + n * this.c)),
              (this.ty = e - (r * this.b + n * this.d)),
              this
            );
          }),
          (t.prototype.prepend = function (t) {
            var e = this.tx;
            if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
              var r = this.a,
                n = this.c;
              (this.a = r * t.a + this.b * t.c),
                (this.b = r * t.b + this.b * t.d),
                (this.c = n * t.a + this.d * t.c),
                (this.d = n * t.b + this.d * t.d);
            }
            return (
              (this.tx = e * t.a + this.ty * t.c + t.tx),
              (this.ty = e * t.b + this.ty * t.d + t.ty),
              this
            );
          }),
          (t.prototype.decompose = function (t) {
            var e = this.a,
              r = this.b,
              n = this.c,
              i = this.d,
              o = -Math.atan2(-n, i),
              s = Math.atan2(r, e),
              a = Math.abs(o + s);
            return (
              a < 1e-5 || Math.abs(wt - a) < 1e-5
                ? ((t.rotation = s), (t.skew.x = t.skew.y = 0))
                : ((t.rotation = 0), (t.skew.x = o), (t.skew.y = s)),
              (t.scale.x = Math.sqrt(e * e + r * r)),
              (t.scale.y = Math.sqrt(n * n + i * i)),
              (t.position.x = this.tx),
              (t.position.y = this.ty),
              t
            );
          }),
          (t.prototype.invert = function () {
            var t = this.a,
              e = this.b,
              r = this.c,
              n = this.d,
              i = this.tx,
              o = t * n - e * r;
            return (
              (this.a = n / o),
              (this.b = -e / o),
              (this.c = -r / o),
              (this.d = t / o),
              (this.tx = (r * this.ty - n * i) / o),
              (this.ty = -(t * this.ty - e * i) / o),
              this
            );
          }),
          (t.prototype.identity = function () {
            return (
              (this.a = 1),
              (this.b = 0),
              (this.c = 0),
              (this.d = 1),
              (this.tx = 0),
              (this.ty = 0),
              this
            );
          }),
          (t.prototype.clone = function () {
            var e = new t();
            return (
              (e.a = this.a),
              (e.b = this.b),
              (e.c = this.c),
              (e.d = this.d),
              (e.tx = this.tx),
              (e.ty = this.ty),
              e
            );
          }),
          (t.prototype.copyTo = function (t) {
            return (
              (t.a = this.a),
              (t.b = this.b),
              (t.c = this.c),
              (t.d = this.d),
              (t.tx = this.tx),
              (t.ty = this.ty),
              t
            );
          }),
          (t.prototype.copyFrom = function (t) {
            return (
              (this.a = t.a),
              (this.b = t.b),
              (this.c = t.c),
              (this.d = t.d),
              (this.tx = t.tx),
              (this.ty = t.ty),
              this
            );
          }),
          Object.defineProperty(t, "IDENTITY", {
            get: function () {
              return new t();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, "TEMP_MATRIX", {
            get: function () {
              return new t();
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(),
      Lt = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
      Nt = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
      Ft = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
      Ut = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
      kt = [],
      Bt = [],
      jt = Math.sign;
    !(function () {
      for (var t = 0; t < 16; t++) {
        var e = [];
        kt.push(e);
        for (var r = 0; r < 16; r++)
          for (
            var n = jt(Lt[t] * Lt[r] + Ft[t] * Nt[r]),
              i = jt(Nt[t] * Lt[r] + Ut[t] * Nt[r]),
              o = jt(Lt[t] * Ft[r] + Ft[t] * Ut[r]),
              s = jt(Nt[t] * Ft[r] + Ut[t] * Ut[r]),
              a = 0;
            a < 16;
            a++
          )
            if (Lt[a] === n && Nt[a] === i && Ft[a] === o && Ut[a] === s) {
              e.push(a);
              break;
            }
      }
      for (t = 0; t < 16; t++) {
        var u = new Dt();
        u.set(Lt[t], Nt[t], Ft[t], Ut[t], 0, 0), Bt.push(u);
      }
    })();
    var Ht = {
        E: 0,
        SE: 1,
        S: 2,
        SW: 3,
        W: 4,
        NW: 5,
        N: 6,
        NE: 7,
        MIRROR_VERTICAL: 8,
        MAIN_DIAGONAL: 10,
        MIRROR_HORIZONTAL: 12,
        REVERSE_DIAGONAL: 14,
        uX: function (t) {
          return Lt[t];
        },
        uY: function (t) {
          return Nt[t];
        },
        vX: function (t) {
          return Ft[t];
        },
        vY: function (t) {
          return Ut[t];
        },
        inv: function (t) {
          return 8 & t ? 15 & t : 7 & -t;
        },
        add: function (t, e) {
          return kt[t][e];
        },
        sub: function (t, e) {
          return kt[t][Ht.inv(e)];
        },
        rotate180: function (t) {
          return 4 ^ t;
        },
        isVertical: function (t) {
          return 2 == (3 & t);
        },
        byDirection: function (t, e) {
          return 2 * Math.abs(t) <= Math.abs(e)
            ? e >= 0
              ? Ht.S
              : Ht.N
            : 2 * Math.abs(e) <= Math.abs(t)
            ? t > 0
              ? Ht.E
              : Ht.W
            : e > 0
            ? t > 0
              ? Ht.SE
              : Ht.SW
            : t > 0
            ? Ht.NE
            : Ht.NW;
        },
        matrixAppendRotationInv: function (t, e, r, n) {
          void 0 === r && (r = 0), void 0 === n && (n = 0);
          var i = Bt[Ht.inv(e)];
          (i.tx = r), (i.ty = n), t.append(i);
        },
      },
      Gt = (function () {
        function t() {
          (this.worldTransform = new Dt()),
            (this.localTransform = new Dt()),
            (this.position = new Rt(this.onChange, this, 0, 0)),
            (this.scale = new Rt(this.onChange, this, 1, 1)),
            (this.pivot = new Rt(this.onChange, this, 0, 0)),
            (this.skew = new Rt(this.updateSkew, this, 0, 0)),
            (this._rotation = 0),
            (this._cx = 1),
            (this._sx = 0),
            (this._cy = 0),
            (this._sy = 1),
            (this._localID = 0),
            (this._currentLocalID = 0),
            (this._worldID = 0),
            (this._parentID = 0);
        }
        return (
          (t.prototype.onChange = function () {
            this._localID++;
          }),
          (t.prototype.updateSkew = function () {
            (this._cx = Math.cos(this._rotation + this.skew.y)),
              (this._sx = Math.sin(this._rotation + this.skew.y)),
              (this._cy = -Math.sin(this._rotation - this.skew.x)),
              (this._sy = Math.cos(this._rotation - this.skew.x)),
              this._localID++;
          }),
          (t.prototype.updateLocalTransform = function () {
            var t = this.localTransform;
            this._localID !== this._currentLocalID &&
              ((t.a = this._cx * this.scale.x),
              (t.b = this._sx * this.scale.x),
              (t.c = this._cy * this.scale.y),
              (t.d = this._sy * this.scale.y),
              (t.tx =
                this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c)),
              (t.ty =
                this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)),
              (this._currentLocalID = this._localID),
              (this._parentID = -1));
          }),
          (t.prototype.updateTransform = function (t) {
            var e = this.localTransform;
            if (
              (this._localID !== this._currentLocalID &&
                ((e.a = this._cx * this.scale.x),
                (e.b = this._sx * this.scale.x),
                (e.c = this._cy * this.scale.y),
                (e.d = this._sy * this.scale.y),
                (e.tx =
                  this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c)),
                (e.ty =
                  this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d)),
                (this._currentLocalID = this._localID),
                (this._parentID = -1)),
              this._parentID !== t._worldID)
            ) {
              var r = t.worldTransform,
                n = this.worldTransform;
              (n.a = e.a * r.a + e.b * r.c),
                (n.b = e.a * r.b + e.b * r.d),
                (n.c = e.c * r.a + e.d * r.c),
                (n.d = e.c * r.b + e.d * r.d),
                (n.tx = e.tx * r.a + e.ty * r.c + r.tx),
                (n.ty = e.tx * r.b + e.ty * r.d + r.ty),
                (this._parentID = t._worldID),
                this._worldID++;
            }
          }),
          (t.prototype.setFromMatrix = function (t) {
            t.decompose(this), this._localID++;
          }),
          Object.defineProperty(t.prototype, "rotation", {
            get: function () {
              return this._rotation;
            },
            set: function (t) {
              this._rotation !== t && ((this._rotation = t), this.updateSkew());
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.IDENTITY = new t()),
          t
        );
      })();
    /*!
     * @pixi/display - v5.3.0
     * Compiled Thu, 18 Jun 2020 23:27:40 UTC
     *
     * @pixi/display is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */
    V.SORTABLE_CHILDREN = !1;
    var Xt = (function () {
        function t() {
          (this.minX = 1 / 0),
            (this.minY = 1 / 0),
            (this.maxX = -1 / 0),
            (this.maxY = -1 / 0),
            (this.rect = null),
            (this.updateID = -1);
        }
        return (
          (t.prototype.isEmpty = function () {
            return this.minX > this.maxX || this.minY > this.maxY;
          }),
          (t.prototype.clear = function () {
            (this.minX = 1 / 0),
              (this.minY = 1 / 0),
              (this.maxX = -1 / 0),
              (this.maxY = -1 / 0);
          }),
          (t.prototype.getRectangle = function (t) {
            return this.minX > this.maxX || this.minY > this.maxY
              ? Ot.EMPTY
              : (((t = t || new Ot(0, 0, 1, 1)).x = this.minX),
                (t.y = this.minY),
                (t.width = this.maxX - this.minX),
                (t.height = this.maxY - this.minY),
                t);
          }),
          (t.prototype.addPoint = function (t) {
            (this.minX = Math.min(this.minX, t.x)),
              (this.maxX = Math.max(this.maxX, t.x)),
              (this.minY = Math.min(this.minY, t.y)),
              (this.maxY = Math.max(this.maxY, t.y));
          }),
          (t.prototype.addQuad = function (t) {
            var e = this.minX,
              r = this.minY,
              n = this.maxX,
              i = this.maxY,
              o = t[0],
              s = t[1];
            (e = o < e ? o : e),
              (r = s < r ? s : r),
              (n = o > n ? o : n),
              (i = s > i ? s : i),
              (e = (o = t[2]) < e ? o : e),
              (r = (s = t[3]) < r ? s : r),
              (n = o > n ? o : n),
              (i = s > i ? s : i),
              (e = (o = t[4]) < e ? o : e),
              (r = (s = t[5]) < r ? s : r),
              (n = o > n ? o : n),
              (i = s > i ? s : i),
              (e = (o = t[6]) < e ? o : e),
              (r = (s = t[7]) < r ? s : r),
              (n = o > n ? o : n),
              (i = s > i ? s : i),
              (this.minX = e),
              (this.minY = r),
              (this.maxX = n),
              (this.maxY = i);
          }),
          (t.prototype.addFrame = function (t, e, r, n, i) {
            this.addFrameMatrix(t.worldTransform, e, r, n, i);
          }),
          (t.prototype.addFrameMatrix = function (t, e, r, n, i) {
            var o = t.a,
              s = t.b,
              a = t.c,
              u = t.d,
              h = t.tx,
              c = t.ty,
              l = this.minX,
              f = this.minY,
              p = this.maxX,
              d = this.maxY,
              v = o * e + a * r + h,
              g = s * e + u * r + c;
            (l = v < l ? v : l),
              (f = g < f ? g : f),
              (p = v > p ? v : p),
              (d = g > d ? g : d),
              (l = (v = o * n + a * r + h) < l ? v : l),
              (f = (g = s * n + u * r + c) < f ? g : f),
              (p = v > p ? v : p),
              (d = g > d ? g : d),
              (l = (v = o * e + a * i + h) < l ? v : l),
              (f = (g = s * e + u * i + c) < f ? g : f),
              (p = v > p ? v : p),
              (d = g > d ? g : d),
              (l = (v = o * n + a * i + h) < l ? v : l),
              (f = (g = s * n + u * i + c) < f ? g : f),
              (p = v > p ? v : p),
              (d = g > d ? g : d),
              (this.minX = l),
              (this.minY = f),
              (this.maxX = p),
              (this.maxY = d);
          }),
          (t.prototype.addVertexData = function (t, e, r) {
            for (
              var n = this.minX,
                i = this.minY,
                o = this.maxX,
                s = this.maxY,
                a = e;
              a < r;
              a += 2
            ) {
              var u = t[a],
                h = t[a + 1];
              (n = u < n ? u : n),
                (i = h < i ? h : i),
                (o = u > o ? u : o),
                (s = h > s ? h : s);
            }
            (this.minX = n), (this.minY = i), (this.maxX = o), (this.maxY = s);
          }),
          (t.prototype.addVertices = function (t, e, r, n) {
            this.addVerticesMatrix(t.worldTransform, e, r, n);
          }),
          (t.prototype.addVerticesMatrix = function (t, e, r, n, i, o) {
            void 0 === i && (i = 0), void 0 === o && (o = i);
            for (
              var s = t.a,
                a = t.b,
                u = t.c,
                h = t.d,
                c = t.tx,
                l = t.ty,
                f = this.minX,
                p = this.minY,
                d = this.maxX,
                v = this.maxY,
                g = r;
              g < n;
              g += 2
            ) {
              var y = e[g],
                m = e[g + 1],
                _ = s * y + u * m + c,
                x = h * m + a * y + l;
              (f = Math.min(f, _ - i)),
                (d = Math.max(d, _ + i)),
                (p = Math.min(p, x - o)),
                (v = Math.max(v, x + o));
            }
            (this.minX = f), (this.minY = p), (this.maxX = d), (this.maxY = v);
          }),
          (t.prototype.addBounds = function (t) {
            var e = this.minX,
              r = this.minY,
              n = this.maxX,
              i = this.maxY;
            (this.minX = t.minX < e ? t.minX : e),
              (this.minY = t.minY < r ? t.minY : r),
              (this.maxX = t.maxX > n ? t.maxX : n),
              (this.maxY = t.maxY > i ? t.maxY : i);
          }),
          (t.prototype.addBoundsMask = function (t, e) {
            var r = t.minX > e.minX ? t.minX : e.minX,
              n = t.minY > e.minY ? t.minY : e.minY,
              i = t.maxX < e.maxX ? t.maxX : e.maxX,
              o = t.maxY < e.maxY ? t.maxY : e.maxY;
            if (r <= i && n <= o) {
              var s = this.minX,
                a = this.minY,
                u = this.maxX,
                h = this.maxY;
              (this.minX = r < s ? r : s),
                (this.minY = n < a ? n : a),
                (this.maxX = i > u ? i : u),
                (this.maxY = o > h ? o : h);
            }
          }),
          (t.prototype.addBoundsMatrix = function (t, e) {
            this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY);
          }),
          (t.prototype.addBoundsArea = function (t, e) {
            var r = t.minX > e.x ? t.minX : e.x,
              n = t.minY > e.y ? t.minY : e.y,
              i = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
              o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
            if (r <= i && n <= o) {
              var s = this.minX,
                a = this.minY,
                u = this.maxX,
                h = this.maxY;
              (this.minX = r < s ? r : s),
                (this.minY = n < a ? n : a),
                (this.maxX = i > u ? i : u),
                (this.maxY = o > h ? o : h);
            }
          }),
          (t.prototype.pad = function (t, e) {
            void 0 === t && (t = 0),
              void 0 === e && (e = t),
              this.isEmpty() ||
                ((this.minX -= t),
                (this.maxX += t),
                (this.minY -= e),
                (this.maxY += e));
          }),
          (t.prototype.addFramePad = function (t, e, r, n, i, o) {
            (t -= i),
              (e -= o),
              (r += i),
              (n += o),
              (this.minX = this.minX < t ? this.minX : t),
              (this.maxX = this.maxX > r ? this.maxX : r),
              (this.minY = this.minY < e ? this.minY : e),
              (this.maxY = this.maxY > n ? this.maxY : n);
          }),
          t
        );
      })(),
      zt = function (t, e) {
        return (zt =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ function Vt(
      t,
      e
    ) {
      function r() {
        this.constructor = t;
      }
      zt(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((r.prototype = e.prototype), new r()));
    }
    var Yt = (function (t) {
        function e() {
          var e = t.call(this) || this;
          return (
            (e.tempDisplayObjectParent = null),
            (e.transform = new Gt()),
            (e.alpha = 1),
            (e.visible = !0),
            (e.renderable = !0),
            (e.parent = null),
            (e.worldAlpha = 1),
            (e._lastSortedIndex = 0),
            (e._zIndex = 0),
            (e.filterArea = null),
            (e.filters = null),
            (e._enabledFilters = null),
            (e._bounds = new Xt()),
            (e._localBounds = null),
            (e._boundsID = 0),
            (e._boundsRect = null),
            (e._localBoundsRect = null),
            (e._mask = null),
            (e._destroyed = !1),
            (e.isSprite = !1),
            (e.isMask = !1),
            e
          );
        }
        return (
          Vt(e, t),
          (e.mixin = function (t) {
            for (var r = Object.keys(t), n = 0; n < r.length; ++n) {
              var i = r[n];
              Object.defineProperty(
                e.prototype,
                i,
                Object.getOwnPropertyDescriptor(t, i)
              );
            }
          }),
          (e.prototype._recursivePostUpdateTransform = function () {
            this.parent
              ? (this.parent._recursivePostUpdateTransform(),
                this.transform.updateTransform(this.parent.transform))
              : this.transform.updateTransform(
                  this._tempDisplayObjectParent.transform
                );
          }),
          (e.prototype.updateTransform = function () {
            this._boundsID++,
              this.transform.updateTransform(this.parent.transform),
              (this.worldAlpha = this.alpha * this.parent.worldAlpha);
          }),
          (e.prototype.getBounds = function (t, e) {
            return (
              t ||
                (this.parent
                  ? (this._recursivePostUpdateTransform(),
                    this.updateTransform())
                  : ((this.parent = this._tempDisplayObjectParent),
                    this.updateTransform(),
                    (this.parent = null))),
              this._bounds.updateID !== this._boundsID &&
                (this.calculateBounds(),
                (this._bounds.updateID = this._boundsID)),
              e ||
                (this._boundsRect || (this._boundsRect = new Ot()),
                (e = this._boundsRect)),
              this._bounds.getRectangle(e)
            );
          }),
          (e.prototype.getLocalBounds = function (t) {
            t ||
              (this._localBoundsRect || (this._localBoundsRect = new Ot()),
              (t = this._localBoundsRect)),
              this._localBounds || (this._localBounds = new Xt());
            var e = this.transform,
              r = this.parent;
            (this.parent = null),
              (this.transform = this._tempDisplayObjectParent.transform);
            var n = this._bounds,
              i = this._boundsID;
            this._bounds = this._localBounds;
            var o = this.getBounds(!1, t);
            return (
              (this.parent = r),
              (this.transform = e),
              (this._bounds = n),
              (this._bounds.updateID += this._boundsID - i),
              o
            );
          }),
          (e.prototype.toGlobal = function (t, e, r) {
            return (
              void 0 === r && (r = !1),
              r ||
                (this._recursivePostUpdateTransform(),
                this.parent
                  ? this.displayObjectUpdateTransform()
                  : ((this.parent = this._tempDisplayObjectParent),
                    this.displayObjectUpdateTransform(),
                    (this.parent = null))),
              this.worldTransform.apply(t, e)
            );
          }),
          (e.prototype.toLocal = function (t, e, r, n) {
            return (
              e && (t = e.toGlobal(t, r, n)),
              n ||
                (this._recursivePostUpdateTransform(),
                this.parent
                  ? this.displayObjectUpdateTransform()
                  : ((this.parent = this._tempDisplayObjectParent),
                    this.displayObjectUpdateTransform(),
                    (this.parent = null))),
              this.worldTransform.applyInverse(t, r)
            );
          }),
          (e.prototype.setParent = function (t) {
            if (!t || !t.addChild)
              throw new Error("setParent: Argument must be a Container");
            return t.addChild(this), t;
          }),
          (e.prototype.setTransform = function (t, e, r, n, i, o, s, a, u) {
            return (
              void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              void 0 === r && (r = 1),
              void 0 === n && (n = 1),
              void 0 === i && (i = 0),
              void 0 === o && (o = 0),
              void 0 === s && (s = 0),
              void 0 === a && (a = 0),
              void 0 === u && (u = 0),
              (this.position.x = t),
              (this.position.y = e),
              (this.scale.x = r || 1),
              (this.scale.y = n || 1),
              (this.rotation = i),
              (this.skew.x = o),
              (this.skew.y = s),
              (this.pivot.x = a),
              (this.pivot.y = u),
              this
            );
          }),
          (e.prototype.destroy = function (t) {
            this.parent && this.parent.removeChild(this),
              this.removeAllListeners(),
              (this.transform = null),
              (this.parent = null),
              (this._bounds = null),
              (this._mask = null),
              (this.filters = null),
              (this.filterArea = null),
              (this.hitArea = null),
              (this.interactive = !1),
              (this.interactiveChildren = !1),
              (this._destroyed = !0);
          }),
          Object.defineProperty(e.prototype, "_tempDisplayObjectParent", {
            get: function () {
              return (
                null === this.tempDisplayObjectParent &&
                  (this.tempDisplayObjectParent = new Wt()),
                this.tempDisplayObjectParent
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.enableTempParent = function () {
            var t = this.parent;
            return (this.parent = this._tempDisplayObjectParent), t;
          }),
          (e.prototype.disableTempParent = function (t) {
            this.parent = t;
          }),
          Object.defineProperty(e.prototype, "x", {
            get: function () {
              return this.position.x;
            },
            set: function (t) {
              this.transform.position.x = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "y", {
            get: function () {
              return this.position.y;
            },
            set: function (t) {
              this.transform.position.y = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "worldTransform", {
            get: function () {
              return this.transform.worldTransform;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "localTransform", {
            get: function () {
              return this.transform.localTransform;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "position", {
            get: function () {
              return this.transform.position;
            },
            set: function (t) {
              this.transform.position.copyFrom(t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "scale", {
            get: function () {
              return this.transform.scale;
            },
            set: function (t) {
              this.transform.scale.copyFrom(t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "pivot", {
            get: function () {
              return this.transform.pivot;
            },
            set: function (t) {
              this.transform.pivot.copyFrom(t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "skew", {
            get: function () {
              return this.transform.skew;
            },
            set: function (t) {
              this.transform.skew.copyFrom(t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "rotation", {
            get: function () {
              return this.transform.rotation;
            },
            set: function (t) {
              this.transform.rotation = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "angle", {
            get: function () {
              return this.transform.rotation * Tt;
            },
            set: function (t) {
              this.transform.rotation = t * St;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "zIndex", {
            get: function () {
              return this._zIndex;
            },
            set: function (t) {
              (this._zIndex = t), this.parent && (this.parent.sortDirty = !0);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "worldVisible", {
            get: function () {
              var t = this;
              do {
                if (!t.visible) return !1;
                t = t.parent;
              } while (t);
              return !0;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "mask", {
            get: function () {
              return this._mask;
            },
            set: function (t) {
              var e;
              this._mask &&
                (((e = this._mask.maskObject || this._mask).renderable = !0),
                (e.isMask = !1));
              ((this._mask = t), this._mask) &&
                (((e = this._mask.maskObject || this._mask).renderable = !1),
                (e.isMask = !0));
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(W.a),
      Wt = (function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.sortDirty = null), e;
        }
        return Vt(e, t), e;
      })(Yt);
    function qt(t, e) {
      return t.zIndex === e.zIndex
        ? t._lastSortedIndex - e._lastSortedIndex
        : t.zIndex - e.zIndex;
    }
    Yt.prototype.displayObjectUpdateTransform = Yt.prototype.updateTransform;
    var Kt = (function (t) {
      function e() {
        var e = t.call(this) || this;
        return (
          (e.children = []),
          (e.sortableChildren = V.SORTABLE_CHILDREN),
          (e.sortDirty = !1),
          e
        );
      }
      return (
        Vt(e, t),
        (e.prototype.onChildrenChange = function (t) {}),
        (e.prototype.addChild = function () {
          for (var t = arguments, e = [], r = 0; r < arguments.length; r++)
            e[r] = t[r];
          if (e.length > 1)
            for (var n = 0; n < e.length; n++) this.addChild(e[n]);
          else {
            var i = e[0];
            i.parent && i.parent.removeChild(i),
              (i.parent = this),
              (this.sortDirty = !0),
              (i.transform._parentID = -1),
              this.children.push(i),
              this._boundsID++,
              this.onChildrenChange(this.children.length - 1),
              this.emit("childAdded", i, this, this.children.length - 1),
              i.emit("added", this);
          }
          return e[0];
        }),
        (e.prototype.addChildAt = function (t, e) {
          if (e < 0 || e > this.children.length)
            throw new Error(
              t +
                "addChildAt: The index " +
                e +
                " supplied is out of bounds " +
                this.children.length
            );
          return (
            t.parent && t.parent.removeChild(t),
            (t.parent = this),
            (this.sortDirty = !0),
            (t.transform._parentID = -1),
            this.children.splice(e, 0, t),
            this._boundsID++,
            this.onChildrenChange(e),
            t.emit("added", this),
            this.emit("childAdded", t, this, e),
            t
          );
        }),
        (e.prototype.swapChildren = function (t, e) {
          if (t !== e) {
            var r = this.getChildIndex(t),
              n = this.getChildIndex(e);
            (this.children[r] = e),
              (this.children[n] = t),
              this.onChildrenChange(r < n ? r : n);
          }
        }),
        (e.prototype.getChildIndex = function (t) {
          var e = this.children.indexOf(t);
          if (-1 === e)
            throw new Error(
              "The supplied DisplayObject must be a child of the caller"
            );
          return e;
        }),
        (e.prototype.setChildIndex = function (t, e) {
          if (e < 0 || e >= this.children.length)
            throw new Error(
              "The index " +
                e +
                " supplied is out of bounds " +
                this.children.length
            );
          var r = this.getChildIndex(t);
          ct(this.children, r, 1),
            this.children.splice(e, 0, t),
            this.onChildrenChange(e);
        }),
        (e.prototype.getChildAt = function (t) {
          if (t < 0 || t >= this.children.length)
            throw new Error("getChildAt: Index (" + t + ") does not exist.");
          return this.children[t];
        }),
        (e.prototype.removeChild = function () {
          for (var t = arguments, e = [], r = 0; r < arguments.length; r++)
            e[r] = t[r];
          if (e.length > 1)
            for (var n = 0; n < e.length; n++) this.removeChild(e[n]);
          else {
            var i = e[0],
              o = this.children.indexOf(i);
            if (-1 === o) return null;
            (i.parent = null),
              (i.transform._parentID = -1),
              ct(this.children, o, 1),
              this._boundsID++,
              this.onChildrenChange(o),
              i.emit("removed", this),
              this.emit("childRemoved", i, this, o);
          }
          return e[0];
        }),
        (e.prototype.removeChildAt = function (t) {
          var e = this.getChildAt(t);
          return (
            (e.parent = null),
            (e.transform._parentID = -1),
            ct(this.children, t, 1),
            this._boundsID++,
            this.onChildrenChange(t),
            e.emit("removed", this),
            this.emit("childRemoved", e, this, t),
            e
          );
        }),
        (e.prototype.removeChildren = function (t, e) {
          void 0 === t && (t = 0), void 0 === e && (e = this.children.length);
          var r,
            n = t,
            i = e - n;
          if (i > 0 && i <= e) {
            r = this.children.splice(n, i);
            for (var o = 0; o < r.length; ++o)
              (r[o].parent = null),
                r[o].transform && (r[o].transform._parentID = -1);
            this._boundsID++, this.onChildrenChange(t);
            for (o = 0; o < r.length; ++o)
              r[o].emit("removed", this),
                this.emit("childRemoved", r[o], this, o);
            return r;
          }
          if (0 === i && 0 === this.children.length) return [];
          throw new RangeError(
            "removeChildren: numeric values are outside the acceptable range."
          );
        }),
        (e.prototype.sortChildren = function () {
          for (var t = !1, e = 0, r = this.children.length; e < r; ++e) {
            var n = this.children[e];
            (n._lastSortedIndex = e), t || 0 === n.zIndex || (t = !0);
          }
          t && this.children.length > 1 && this.children.sort(qt),
            (this.sortDirty = !1);
        }),
        (e.prototype.updateTransform = function () {
          this.sortableChildren && this.sortDirty && this.sortChildren(),
            this._boundsID++,
            this.transform.updateTransform(this.parent.transform),
            (this.worldAlpha = this.alpha * this.parent.worldAlpha);
          for (var t = 0, e = this.children.length; t < e; ++t) {
            var r = this.children[t];
            r.visible && r.updateTransform();
          }
        }),
        (e.prototype.calculateBounds = function () {
          this._bounds.clear(), this._calculateBounds();
          for (var t = 0; t < this.children.length; t++) {
            var e = this.children[t];
            if (e.visible && e.renderable)
              if ((e.calculateBounds(), e._mask)) {
                var r = e._mask.maskObject || e._mask;
                r.calculateBounds(),
                  this._bounds.addBoundsMask(e._bounds, r._bounds);
              } else
                e.filterArea
                  ? this._bounds.addBoundsArea(e._bounds, e.filterArea)
                  : this._bounds.addBounds(e._bounds);
          }
          this._bounds.updateID = this._boundsID;
        }),
        (e.prototype.getLocalBounds = function (e, r) {
          void 0 === r && (r = !1);
          var n = t.prototype.getLocalBounds.call(this, e);
          if (!r)
            for (var i = 0, o = this.children.length; i < o; ++i) {
              var s = this.children[i];
              s.visible && s.updateTransform();
            }
          return n;
        }),
        (e.prototype._calculateBounds = function () {}),
        (e.prototype.render = function (t) {
          if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
            if (this._mask || (this.filters && this.filters.length))
              this.renderAdvanced(t);
            else {
              this._render(t);
              for (var e = 0, r = this.children.length; e < r; ++e)
                this.children[e].render(t);
            }
        }),
        (e.prototype.renderAdvanced = function (t) {
          t.batch.flush();
          var e = this.filters,
            r = this._mask;
          if (e) {
            this._enabledFilters || (this._enabledFilters = []),
              (this._enabledFilters.length = 0);
            for (var n = 0; n < e.length; n++)
              e[n].enabled && this._enabledFilters.push(e[n]);
            this._enabledFilters.length &&
              t.filter.push(this, this._enabledFilters);
          }
          r && t.mask.push(this, this._mask), this._render(t);
          n = 0;
          for (var i = this.children.length; n < i; n++)
            this.children[n].render(t);
          t.batch.flush(),
            r && t.mask.pop(this),
            e &&
              this._enabledFilters &&
              this._enabledFilters.length &&
              t.filter.pop();
        }),
        (e.prototype._render = function (t) {}),
        (e.prototype.destroy = function (e) {
          t.prototype.destroy.call(this), (this.sortDirty = !1);
          var r = "boolean" == typeof e ? e : e && e.children,
            n = this.removeChildren(0, this.children.length);
          if (r) for (var i = 0; i < n.length; ++i) n[i].destroy(e);
        }),
        Object.defineProperty(e.prototype, "width", {
          get: function () {
            return this.scale.x * this.getLocalBounds().width;
          },
          set: function (t) {
            var e = this.getLocalBounds().width;
            (this.scale.x = 0 !== e ? t / e : 1), (this._width = t);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "height", {
          get: function () {
            return this.scale.y * this.getLocalBounds().height;
          },
          set: function (t) {
            var e = this.getLocalBounds().height;
            (this.scale.y = 0 !== e ? t / e : 1), (this._height = t);
          },
          enumerable: !1,
          configurable: !0,
        }),
        e
      );
    })(Yt);
    Kt.prototype.containerUpdateTransform = Kt.prototype.updateTransform;
    Yt.mixin({
      accessible: !1,
      accessibleTitle: null,
      accessibleHint: null,
      tabIndex: 0,
      _accessibleActive: !1,
      _accessibleDiv: null,
      accessibleType: "button",
      accessiblePointerEvents: "auto",
      accessibleChildren: !0,
      renderId: -1,
    });
    var Zt,
      Jt = (function () {
        function t(t) {
          (this._hookDiv = null),
            (A.tablet || A.phone) && this.createTouchHook();
          var e = document.createElement("div");
          (e.style.width = "100px"),
            (e.style.height = "100px"),
            (e.style.position = "absolute"),
            (e.style.top = "0px"),
            (e.style.left = "0px"),
            (e.style.zIndex = (2).toString()),
            (this.div = e),
            (this.pool = []),
            (this.renderId = 0),
            (this.debug = !1),
            (this.renderer = t),
            (this.children = []),
            (this._onKeyDown = this._onKeyDown.bind(this)),
            (this._onMouseMove = this._onMouseMove.bind(this)),
            (this._isActive = !1),
            (this._isMobileAccessibility = !1),
            (this.androidUpdateCount = 0),
            (this.androidUpdateFrequency = 500),
            window.addEventListener("keydown", this._onKeyDown, !1);
        }
        return (
          Object.defineProperty(t.prototype, "isActive", {
            get: function () {
              return this._isActive;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "isMobileAccessibility", {
            get: function () {
              return this._isMobileAccessibility;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.createTouchHook = function () {
            var t = this,
              e = document.createElement("button");
            (e.style.width = "1px"),
              (e.style.height = "1px"),
              (e.style.position = "absolute"),
              (e.style.top = "-1000px"),
              (e.style.left = "-1000px"),
              (e.style.zIndex = (2).toString()),
              (e.style.backgroundColor = "#FF0000"),
              (e.title = "select to enable accessability for this content"),
              e.addEventListener("focus", function () {
                (t._isMobileAccessibility = !0),
                  t.activate(),
                  t.destroyTouchHook();
              }),
              document.body.appendChild(e),
              (this._hookDiv = e);
          }),
          (t.prototype.destroyTouchHook = function () {
            this._hookDiv &&
              (document.body.removeChild(this._hookDiv),
              (this._hookDiv = null));
          }),
          (t.prototype.activate = function () {
            this._isActive ||
              ((this._isActive = !0),
              window.document.addEventListener(
                "mousemove",
                this._onMouseMove,
                !0
              ),
              window.removeEventListener("keydown", this._onKeyDown, !1),
              this.renderer.on("postrender", this.update, this),
              this.renderer.view.parentNode &&
                this.renderer.view.parentNode.appendChild(this.div));
          }),
          (t.prototype.deactivate = function () {
            this._isActive &&
              !this._isMobileAccessibility &&
              ((this._isActive = !1),
              window.document.removeEventListener(
                "mousemove",
                this._onMouseMove,
                !0
              ),
              window.addEventListener("keydown", this._onKeyDown, !1),
              this.renderer.off("postrender", this.update),
              this.div.parentNode && this.div.parentNode.removeChild(this.div));
          }),
          (t.prototype.updateAccessibleObjects = function (t) {
            if (t.visible && t.accessibleChildren) {
              t.accessible &&
                t.interactive &&
                (t._accessibleActive || this.addChild(t),
                (t.renderId = this.renderId));
              for (var e = t.children, r = 0; r < e.length; r++)
                this.updateAccessibleObjects(e[r]);
            }
          }),
          (t.prototype.update = function () {
            var t = performance.now();
            if (
              !(A.android.device && t < this.androidUpdateCount) &&
              ((this.androidUpdateCount = t + this.androidUpdateFrequency),
              this.renderer.renderingToScreen)
            ) {
              this.renderer._lastObjectRendered &&
                this.updateAccessibleObjects(this.renderer._lastObjectRendered);
              var e = this.renderer.view.getBoundingClientRect(),
                r = this.renderer.resolution,
                n = (e.width / this.renderer.width) * r,
                i = (e.height / this.renderer.height) * r,
                o = this.div;
              (o.style.left = e.left + "px"),
                (o.style.top = e.top + "px"),
                (o.style.width = this.renderer.width + "px"),
                (o.style.height = this.renderer.height + "px");
              for (var s = 0; s < this.children.length; s++) {
                var a = this.children[s];
                if (a.renderId !== this.renderId)
                  (a._accessibleActive = !1),
                    ct(this.children, s, 1),
                    this.div.removeChild(a._accessibleDiv),
                    this.pool.push(a._accessibleDiv),
                    (a._accessibleDiv = null),
                    s--;
                else {
                  o = a._accessibleDiv;
                  var u = a.hitArea,
                    h = a.worldTransform;
                  a.hitArea
                    ? ((o.style.left = (h.tx + u.x * h.a) * n + "px"),
                      (o.style.top = (h.ty + u.y * h.d) * i + "px"),
                      (o.style.width = u.width * h.a * n + "px"),
                      (o.style.height = u.height * h.d * i + "px"))
                    : ((u = a.getBounds()),
                      this.capHitArea(u),
                      (o.style.left = u.x * n + "px"),
                      (o.style.top = u.y * i + "px"),
                      (o.style.width = u.width * n + "px"),
                      (o.style.height = u.height * i + "px"),
                      o.title !== a.accessibleTitle &&
                        null !== a.accessibleTitle &&
                        (o.title = a.accessibleTitle),
                      o.getAttribute("aria-label") !== a.accessibleHint &&
                        null !== a.accessibleHint &&
                        o.setAttribute("aria-label", a.accessibleHint)),
                    (a.accessibleTitle === o.title &&
                      a.tabIndex === o.tabIndex) ||
                      ((o.title = a.accessibleTitle),
                      (o.tabIndex = a.tabIndex),
                      this.debug && this.updateDebugHTML(o));
                }
              }
              this.renderId++;
            }
          }),
          (t.prototype.updateDebugHTML = function (t) {
            t.innerHTML =
              "type: " +
              t.type +
              "</br> title : " +
              t.title +
              "</br> tabIndex: " +
              t.tabIndex;
          }),
          (t.prototype.capHitArea = function (t) {
            t.x < 0 && ((t.width += t.x), (t.x = 0)),
              t.y < 0 && ((t.height += t.y), (t.y = 0)),
              t.x + t.width > this.renderer.width &&
                (t.width = this.renderer.width - t.x),
              t.y + t.height > this.renderer.height &&
                (t.height = this.renderer.height - t.y);
          }),
          (t.prototype.addChild = function (t) {
            var e = this.pool.pop();
            e ||
              (((e = document.createElement("button")).style.width = "100px"),
              (e.style.height = "100px"),
              (e.style.backgroundColor = this.debug
                ? "rgba(255,255,255,0.5)"
                : "transparent"),
              (e.style.position = "absolute"),
              (e.style.zIndex = (2).toString()),
              (e.style.borderStyle = "none"),
              navigator.userAgent.toLowerCase().indexOf("chrome") > -1
                ? e.setAttribute("aria-live", "off")
                : e.setAttribute("aria-live", "polite"),
              navigator.userAgent.match(/rv:.*Gecko\//)
                ? e.setAttribute("aria-relevant", "additions")
                : e.setAttribute("aria-relevant", "text"),
              e.addEventListener("click", this._onClick.bind(this)),
              e.addEventListener("focus", this._onFocus.bind(this)),
              e.addEventListener("focusout", this._onFocusOut.bind(this))),
              (e.style.pointerEvents = t.accessiblePointerEvents),
              (e.type = t.accessibleType),
              t.accessibleTitle && null !== t.accessibleTitle
                ? (e.title = t.accessibleTitle)
                : (t.accessibleHint && null !== t.accessibleHint) ||
                  (e.title = "displayObject " + t.tabIndex),
              t.accessibleHint &&
                null !== t.accessibleHint &&
                e.setAttribute("aria-label", t.accessibleHint),
              this.debug && this.updateDebugHTML(e),
              (t._accessibleActive = !0),
              (t._accessibleDiv = e),
              (e.displayObject = t),
              this.children.push(t),
              this.div.appendChild(t._accessibleDiv),
              (t._accessibleDiv.tabIndex = t.tabIndex);
          }),
          (t.prototype._onClick = function (t) {
            var e = this.renderer.plugins.interaction;
            e.dispatchEvent(t.target.displayObject, "click", e.eventData),
              e.dispatchEvent(
                t.target.displayObject,
                "pointertap",
                e.eventData
              ),
              e.dispatchEvent(t.target.displayObject, "tap", e.eventData);
          }),
          (t.prototype._onFocus = function (t) {
            t.target.getAttribute("aria-live") ||
              t.target.setAttribute("aria-live", "assertive");
            var e = this.renderer.plugins.interaction;
            e.dispatchEvent(t.target.displayObject, "mouseover", e.eventData);
          }),
          (t.prototype._onFocusOut = function (t) {
            t.target.getAttribute("aria-live") ||
              t.target.setAttribute("aria-live", "polite");
            var e = this.renderer.plugins.interaction;
            e.dispatchEvent(t.target.displayObject, "mouseout", e.eventData);
          }),
          (t.prototype._onKeyDown = function (t) {
            9 === t.keyCode && this.activate();
          }),
          (t.prototype._onMouseMove = function (t) {
            (0 === t.movementX && 0 === t.movementY) || this.deactivate();
          }),
          (t.prototype.destroy = function () {
            this.destroyTouchHook(),
              (this.div = null),
              window.document.removeEventListener(
                "mousemove",
                this._onMouseMove,
                !0
              ),
              window.removeEventListener("keydown", this._onKeyDown),
              (this.pool = null),
              (this.children = null),
              (this.renderer = null);
          }),
          t
        );
      })();
    /*!
     * @pixi/ticker - v5.3.0
     * Compiled Thu, 18 Jun 2020 23:27:40 UTC
     *
     * @pixi/ticker is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */
    (V.TARGET_FPMS = 0.06),
      (function (t) {
        (t[(t.INTERACTION = 50)] = "INTERACTION"),
          (t[(t.HIGH = 25)] = "HIGH"),
          (t[(t.NORMAL = 0)] = "NORMAL"),
          (t[(t.LOW = -25)] = "LOW"),
          (t[(t.UTILITY = -50)] = "UTILITY");
      })(Zt || (Zt = {}));
    var $t = (function () {
        function t(t, e, r, n) {
          void 0 === e && (e = null),
            void 0 === r && (r = 0),
            void 0 === n && (n = !1),
            (this.fn = t),
            (this.context = e),
            (this.priority = r),
            (this.once = n),
            (this.next = null),
            (this.previous = null),
            (this._destroyed = !1);
        }
        return (
          (t.prototype.match = function (t, e) {
            return (
              void 0 === e && (e = null), this.fn === t && this.context === e
            );
          }),
          (t.prototype.emit = function (t) {
            this.fn &&
              (this.context ? this.fn.call(this.context, t) : this.fn(t));
            var e = this.next;
            return (
              this.once && this.destroy(!0),
              this._destroyed && (this.next = null),
              e
            );
          }),
          (t.prototype.connect = function (t) {
            (this.previous = t),
              t.next && (t.next.previous = this),
              (this.next = t.next),
              (t.next = this);
          }),
          (t.prototype.destroy = function (t) {
            void 0 === t && (t = !1),
              (this._destroyed = !0),
              (this.fn = null),
              (this.context = null),
              this.previous && (this.previous.next = this.next),
              this.next && (this.next.previous = this.previous);
            var e = this.next;
            return (this.next = t ? null : e), (this.previous = null), e;
          }),
          t
        );
      })(),
      Qt = (function () {
        function t() {
          var t = this;
          (this._head = new $t(null, null, 1 / 0)),
            (this._requestId = null),
            (this._maxElapsedMS = 100),
            (this._minElapsedMS = 0),
            (this.autoStart = !1),
            (this.deltaTime = 1),
            (this.deltaMS = 1 / V.TARGET_FPMS),
            (this.elapsedMS = 1 / V.TARGET_FPMS),
            (this.lastTime = -1),
            (this.speed = 1),
            (this.started = !1),
            (this._protected = !1),
            (this._lastFrame = -1),
            (this._tick = function (e) {
              (t._requestId = null),
                t.started &&
                  (t.update(e),
                  t.started &&
                    null === t._requestId &&
                    t._head.next &&
                    (t._requestId = requestAnimationFrame(t._tick)));
            });
        }
        return (
          (t.prototype._requestIfNeeded = function () {
            null === this._requestId &&
              this._head.next &&
              ((this.lastTime = performance.now()),
              (this._lastFrame = this.lastTime),
              (this._requestId = requestAnimationFrame(this._tick)));
          }),
          (t.prototype._cancelIfNeeded = function () {
            null !== this._requestId &&
              (cancelAnimationFrame(this._requestId), (this._requestId = null));
          }),
          (t.prototype._startIfPossible = function () {
            this.started
              ? this._requestIfNeeded()
              : this.autoStart && this.start();
          }),
          (t.prototype.add = function (t, e, r) {
            return (
              void 0 === r && (r = Zt.NORMAL),
              this._addListener(new $t(t, e, r))
            );
          }),
          (t.prototype.addOnce = function (t, e, r) {
            return (
              void 0 === r && (r = Zt.NORMAL),
              this._addListener(new $t(t, e, r, !0))
            );
          }),
          (t.prototype._addListener = function (t) {
            var e = this._head.next,
              r = this._head;
            if (e) {
              for (; e; ) {
                if (t.priority > e.priority) {
                  t.connect(r);
                  break;
                }
                (r = e), (e = e.next);
              }
              t.previous || t.connect(r);
            } else t.connect(r);
            return this._startIfPossible(), this;
          }),
          (t.prototype.remove = function (t, e) {
            for (var r = this._head.next; r; )
              r = r.match(t, e) ? r.destroy() : r.next;
            return this._head.next || this._cancelIfNeeded(), this;
          }),
          Object.defineProperty(t.prototype, "count", {
            get: function () {
              if (!this._head) return 0;
              for (var t = 0, e = this._head; (e = e.next); ) t++;
              return t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.start = function () {
            this.started || ((this.started = !0), this._requestIfNeeded());
          }),
          (t.prototype.stop = function () {
            this.started && ((this.started = !1), this._cancelIfNeeded());
          }),
          (t.prototype.destroy = function () {
            if (!this._protected) {
              this.stop();
              for (var t = this._head.next; t; ) t = t.destroy(!0);
              this._head.destroy(), (this._head = null);
            }
          }),
          (t.prototype.update = function (t) {
            var e;
            if ((void 0 === t && (t = performance.now()), t > this.lastTime)) {
              if (
                ((e = this.elapsedMS = t - this.lastTime) >
                  this._maxElapsedMS && (e = this._maxElapsedMS),
                (e *= this.speed),
                this._minElapsedMS)
              ) {
                var r = (t - this._lastFrame) | 0;
                if (r < this._minElapsedMS) return;
                this._lastFrame = t - (r % this._minElapsedMS);
              }
              (this.deltaMS = e),
                (this.deltaTime = this.deltaMS * V.TARGET_FPMS);
              for (var n = this._head, i = n.next; i; )
                i = i.emit(this.deltaTime);
              n.next || this._cancelIfNeeded();
            } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
            this.lastTime = t;
          }),
          Object.defineProperty(t.prototype, "FPS", {
            get: function () {
              return 1e3 / this.elapsedMS;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "minFPS", {
            get: function () {
              return 1e3 / this._maxElapsedMS;
            },
            set: function (t) {
              var e = Math.min(this.maxFPS, t),
                r = Math.min(Math.max(0, e) / 1e3, V.TARGET_FPMS);
              this._maxElapsedMS = 1 / r;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "maxFPS", {
            get: function () {
              return this._minElapsedMS
                ? Math.round(1e3 / this._minElapsedMS)
                : 0;
            },
            set: function (t) {
              if (0 === t) this._minElapsedMS = 0;
              else {
                var e = Math.max(this.minFPS, t);
                this._minElapsedMS = 1 / (e / 1e3);
              }
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, "shared", {
            get: function () {
              if (!t._shared) {
                var e = (t._shared = new t());
                (e.autoStart = !0), (e._protected = !0);
              }
              return t._shared;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, "system", {
            get: function () {
              if (!t._system) {
                var e = (t._system = new t());
                (e.autoStart = !0), (e._protected = !0);
              }
              return t._system;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })(),
      te = (function () {
        function t() {}
        return (
          (t.init = function (t) {
            var e = this;
            (t = Object.assign({ autoStart: !0, sharedTicker: !1 }, t)),
              Object.defineProperty(this, "ticker", {
                set: function (t) {
                  this._ticker && this._ticker.remove(this.render, this),
                    (this._ticker = t),
                    t && t.add(this.render, this, Zt.LOW);
                },
                get: function () {
                  return this._ticker;
                },
              }),
              (this.stop = function () {
                e._ticker.stop();
              }),
              (this.start = function () {
                e._ticker.start();
              }),
              (this._ticker = null),
              (this.ticker = t.sharedTicker ? Qt.shared : new Qt()),
              t.autoStart && this.start();
          }),
          (t.destroy = function () {
            if (this._ticker) {
              var t = this._ticker;
              (this.ticker = null), t.destroy();
            }
          }),
          t
        );
      })(),
      ee = (function () {
        function t() {
          (this.pressure = 0),
            (this.rotationAngle = 0),
            (this.twist = 0),
            (this.tangentialPressure = 0),
            (this.global = new Mt()),
            (this.target = null),
            (this.originalEvent = null),
            (this.identifier = null),
            (this.isPrimary = !1),
            (this.button = 0),
            (this.buttons = 0),
            (this.width = 0),
            (this.height = 0),
            (this.tiltX = 0),
            (this.tiltY = 0),
            (this.pointerType = null),
            (this.pressure = 0),
            (this.rotationAngle = 0),
            (this.twist = 0),
            (this.tangentialPressure = 0);
        }
        return (
          Object.defineProperty(t.prototype, "pointerId", {
            get: function () {
              return this.identifier;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.getLocalPosition = function (t, e, r) {
            return t.worldTransform.applyInverse(r || this.global, e);
          }),
          (t.prototype.copyEvent = function (t) {
            "isPrimary" in t && t.isPrimary && (this.isPrimary = !0),
              (this.button = "button" in t && t.button);
            var e = "buttons" in t && t.buttons;
            (this.buttons = Number.isInteger(e) ? e : "which" in t && t.which),
              (this.width = "width" in t && t.width),
              (this.height = "height" in t && t.height),
              (this.tiltX = "tiltX" in t && t.tiltX),
              (this.tiltY = "tiltY" in t && t.tiltY),
              (this.pointerType = "pointerType" in t && t.pointerType),
              (this.pressure = "pressure" in t && t.pressure),
              (this.rotationAngle = "rotationAngle" in t && t.rotationAngle),
              (this.twist = ("twist" in t && t.twist) || 0),
              (this.tangentialPressure =
                ("tangentialPressure" in t && t.tangentialPressure) || 0);
          }),
          (t.prototype.reset = function () {
            this.isPrimary = !1;
          }),
          t
        );
      })(),
      re = function (t, e) {
        return (re =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    var ne = (function () {
        function t() {
          (this.stopped = !1),
            (this.stopsPropagatingAt = null),
            (this.stopPropagationHint = !1),
            (this.target = null),
            (this.currentTarget = null),
            (this.type = null),
            (this.data = null);
        }
        return (
          (t.prototype.stopPropagation = function () {
            (this.stopped = !0),
              (this.stopPropagationHint = !0),
              (this.stopsPropagatingAt = this.currentTarget);
          }),
          (t.prototype.reset = function () {
            (this.stopped = !1),
              (this.stopsPropagatingAt = null),
              (this.stopPropagationHint = !1),
              (this.currentTarget = null),
              (this.target = null);
          }),
          t
        );
      })(),
      ie = (function () {
        function t(e) {
          (this._pointerId = e), (this._flags = t.FLAGS.NONE);
        }
        return (
          (t.prototype._doSet = function (t, e) {
            this._flags = e ? this._flags | t : this._flags & ~t;
          }),
          Object.defineProperty(t.prototype, "pointerId", {
            get: function () {
              return this._pointerId;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "flags", {
            get: function () {
              return this._flags;
            },
            set: function (t) {
              this._flags = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "none", {
            get: function () {
              return this._flags === t.FLAGS.NONE;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "over", {
            get: function () {
              return 0 != (this._flags & t.FLAGS.OVER);
            },
            set: function (e) {
              this._doSet(t.FLAGS.OVER, e);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "rightDown", {
            get: function () {
              return 0 != (this._flags & t.FLAGS.RIGHT_DOWN);
            },
            set: function (e) {
              this._doSet(t.FLAGS.RIGHT_DOWN, e);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "leftDown", {
            get: function () {
              return 0 != (this._flags & t.FLAGS.LEFT_DOWN);
            },
            set: function (e) {
              this._doSet(t.FLAGS.LEFT_DOWN, e);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.FLAGS = Object.freeze({
            NONE: 0,
            OVER: 1,
            LEFT_DOWN: 2,
            RIGHT_DOWN: 4,
          })),
          t
        );
      })(),
      oe = (function () {
        function t() {
          this._tempPoint = new Mt();
        }
        return (
          (t.prototype.recursiveFindHit = function (t, e, r, n, i) {
            if (!e || !e.visible) return !1;
            var o = t.data.global,
              s = !1,
              a = (i = e.interactive || i),
              u = !0;
            if (
              (e.hitArea
                ? (n &&
                    (e.worldTransform.applyInverse(o, this._tempPoint),
                    e.hitArea.contains(this._tempPoint.x, this._tempPoint.y)
                      ? (s = !0)
                      : ((n = !1), (u = !1))),
                  (a = !1))
                : e._mask &&
                  n &&
                  ((e._mask.containsPoint && e._mask.containsPoint(o)) ||
                    (n = !1)),
              u && e.interactiveChildren && e.children)
            )
              for (var h = e.children, c = h.length - 1; c >= 0; c--) {
                var l = h[c],
                  f = this.recursiveFindHit(t, l, r, n, a);
                if (f) {
                  if (!l.parent) continue;
                  (a = !1), f && (t.target && (n = !1), (s = !0));
                }
              }
            return (
              i &&
                (n &&
                  !t.target &&
                  !e.hitArea &&
                  e.containsPoint &&
                  e.containsPoint(o) &&
                  (s = !0),
                e.interactive &&
                  (s && !t.target && (t.target = e), r && r(t, e, !!s))),
              s
            );
          }),
          (t.prototype.findHit = function (t, e, r, n) {
            this.recursiveFindHit(t, e, r, n, !1);
          }),
          t
        );
      })(),
      se = {
        interactive: !1,
        interactiveChildren: !0,
        hitArea: null,
        get buttonMode() {
          return "pointer" === this.cursor;
        },
        set buttonMode(t) {
          t
            ? (this.cursor = "pointer")
            : "pointer" === this.cursor && (this.cursor = null);
        },
        cursor: null,
        get trackedPointers() {
          return (
            void 0 === this._trackedPointers && (this._trackedPointers = {}),
            this._trackedPointers
          );
        },
        _trackedPointers: void 0,
      };
    Yt.mixin(se);
    var ae = { target: null, data: { global: null } },
      ue = (function (t) {
        function e(e, r) {
          var n = t.call(this) || this;
          return (
            (r = r || {}),
            (n.renderer = e),
            (n.autoPreventDefault =
              void 0 === r.autoPreventDefault || r.autoPreventDefault),
            (n.interactionFrequency = r.interactionFrequency || 10),
            (n.mouse = new ee()),
            (n.mouse.identifier = 1),
            n.mouse.global.set(-999999),
            (n.activeInteractionData = {}),
            (n.activeInteractionData[1] = n.mouse),
            (n.interactionDataPool = []),
            (n.eventData = new ne()),
            (n.interactionDOMElement = null),
            (n.moveWhenInside = !1),
            (n.eventsAdded = !1),
            (n.tickerAdded = !1),
            (n.mouseOverRenderer = !1),
            (n.supportsTouchEvents = "ontouchstart" in window),
            (n.supportsPointerEvents = !!window.PointerEvent),
            (n.onPointerUp = n.onPointerUp.bind(n)),
            (n.processPointerUp = n.processPointerUp.bind(n)),
            (n.onPointerCancel = n.onPointerCancel.bind(n)),
            (n.processPointerCancel = n.processPointerCancel.bind(n)),
            (n.onPointerDown = n.onPointerDown.bind(n)),
            (n.processPointerDown = n.processPointerDown.bind(n)),
            (n.onPointerMove = n.onPointerMove.bind(n)),
            (n.processPointerMove = n.processPointerMove.bind(n)),
            (n.onPointerOut = n.onPointerOut.bind(n)),
            (n.processPointerOverOut = n.processPointerOverOut.bind(n)),
            (n.onPointerOver = n.onPointerOver.bind(n)),
            (n.cursorStyles = { default: "inherit", pointer: "pointer" }),
            (n.currentCursorMode = null),
            (n.cursor = null),
            (n.resolution = 1),
            (n.delayedEvents = []),
            (n.search = new oe()),
            (n._tempDisplayObject = new Wt()),
            (n._useSystemTicker =
              void 0 === r.useSystemTicker || r.useSystemTicker),
            n.setTargetElement(n.renderer.view, n.renderer.resolution),
            n
          );
        }
        return (
          (function (t, e) {
            function r() {
              this.constructor = t;
            }
            re(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          })(e, t),
          Object.defineProperty(e.prototype, "useSystemTicker", {
            get: function () {
              return this._useSystemTicker;
            },
            set: function (t) {
              (this._useSystemTicker = t),
                t ? this.addTickerListener() : this.removeTickerListener();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "lastObjectRendered", {
            get: function () {
              return (
                this.renderer._lastObjectRendered || this._tempDisplayObject
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.hitTest = function (t, e) {
            return (
              (ae.target = null),
              (ae.data.global = t),
              e || (e = this.lastObjectRendered),
              this.processInteractive(ae, e, null, !0),
              ae.target
            );
          }),
          (e.prototype.setTargetElement = function (t, e) {
            void 0 === e && (e = 1),
              this.removeTickerListener(),
              this.removeEvents(),
              (this.interactionDOMElement = t),
              (this.resolution = e),
              this.addEvents(),
              this.addTickerListener();
          }),
          (e.prototype.addTickerListener = function () {
            !this.tickerAdded &&
              this.interactionDOMElement &&
              this._useSystemTicker &&
              (Qt.system.add(this.tickerUpdate, this, Zt.INTERACTION),
              (this.tickerAdded = !0));
          }),
          (e.prototype.removeTickerListener = function () {
            this.tickerAdded &&
              (Qt.system.remove(this.tickerUpdate, this),
              (this.tickerAdded = !1));
          }),
          (e.prototype.addEvents = function () {
            if (!this.eventsAdded && this.interactionDOMElement) {
              var t = this.interactionDOMElement.style;
              window.navigator.msPointerEnabled
                ? ((t.msContentZooming = "none"), (t.msTouchAction = "none"))
                : this.supportsPointerEvents && (t.touchAction = "none"),
                this.supportsPointerEvents
                  ? (window.document.addEventListener(
                      "pointermove",
                      this.onPointerMove,
                      !0
                    ),
                    this.interactionDOMElement.addEventListener(
                      "pointerdown",
                      this.onPointerDown,
                      !0
                    ),
                    this.interactionDOMElement.addEventListener(
                      "pointerleave",
                      this.onPointerOut,
                      !0
                    ),
                    this.interactionDOMElement.addEventListener(
                      "pointerover",
                      this.onPointerOver,
                      !0
                    ),
                    window.addEventListener(
                      "pointercancel",
                      this.onPointerCancel,
                      !0
                    ),
                    window.addEventListener("pointerup", this.onPointerUp, !0))
                  : (window.document.addEventListener(
                      "mousemove",
                      this.onPointerMove,
                      !0
                    ),
                    this.interactionDOMElement.addEventListener(
                      "mousedown",
                      this.onPointerDown,
                      !0
                    ),
                    this.interactionDOMElement.addEventListener(
                      "mouseout",
                      this.onPointerOut,
                      !0
                    ),
                    this.interactionDOMElement.addEventListener(
                      "mouseover",
                      this.onPointerOver,
                      !0
                    ),
                    window.addEventListener("mouseup", this.onPointerUp, !0)),
                this.supportsTouchEvents &&
                  (this.interactionDOMElement.addEventListener(
                    "touchstart",
                    this.onPointerDown,
                    !0
                  ),
                  this.interactionDOMElement.addEventListener(
                    "touchcancel",
                    this.onPointerCancel,
                    !0
                  ),
                  this.interactionDOMElement.addEventListener(
                    "touchend",
                    this.onPointerUp,
                    !0
                  ),
                  this.interactionDOMElement.addEventListener(
                    "touchmove",
                    this.onPointerMove,
                    !0
                  )),
                (this.eventsAdded = !0);
            }
          }),
          (e.prototype.removeEvents = function () {
            if (this.eventsAdded && this.interactionDOMElement) {
              var t = this.interactionDOMElement.style;
              window.navigator.msPointerEnabled
                ? ((t.msContentZooming = ""), (t.msTouchAction = ""))
                : this.supportsPointerEvents && (t.touchAction = ""),
                this.supportsPointerEvents
                  ? (window.document.removeEventListener(
                      "pointermove",
                      this.onPointerMove,
                      !0
                    ),
                    this.interactionDOMElement.removeEventListener(
                      "pointerdown",
                      this.onPointerDown,
                      !0
                    ),
                    this.interactionDOMElement.removeEventListener(
                      "pointerleave",
                      this.onPointerOut,
                      !0
                    ),
                    this.interactionDOMElement.removeEventListener(
                      "pointerover",
                      this.onPointerOver,
                      !0
                    ),
                    window.removeEventListener(
                      "pointercancel",
                      this.onPointerCancel,
                      !0
                    ),
                    window.removeEventListener(
                      "pointerup",
                      this.onPointerUp,
                      !0
                    ))
                  : (window.document.removeEventListener(
                      "mousemove",
                      this.onPointerMove,
                      !0
                    ),
                    this.interactionDOMElement.removeEventListener(
                      "mousedown",
                      this.onPointerDown,
                      !0
                    ),
                    this.interactionDOMElement.removeEventListener(
                      "mouseout",
                      this.onPointerOut,
                      !0
                    ),
                    this.interactionDOMElement.removeEventListener(
                      "mouseover",
                      this.onPointerOver,
                      !0
                    ),
                    window.removeEventListener(
                      "mouseup",
                      this.onPointerUp,
                      !0
                    )),
                this.supportsTouchEvents &&
                  (this.interactionDOMElement.removeEventListener(
                    "touchstart",
                    this.onPointerDown,
                    !0
                  ),
                  this.interactionDOMElement.removeEventListener(
                    "touchcancel",
                    this.onPointerCancel,
                    !0
                  ),
                  this.interactionDOMElement.removeEventListener(
                    "touchend",
                    this.onPointerUp,
                    !0
                  ),
                  this.interactionDOMElement.removeEventListener(
                    "touchmove",
                    this.onPointerMove,
                    !0
                  )),
                (this.interactionDOMElement = null),
                (this.eventsAdded = !1);
            }
          }),
          (e.prototype.tickerUpdate = function (t) {
            (this._deltaTime += t),
              this._deltaTime < this.interactionFrequency ||
                ((this._deltaTime = 0), this.update());
          }),
          (e.prototype.update = function () {
            if (this.interactionDOMElement)
              if (this._didMove) this._didMove = !1;
              else {
                for (var t in ((this.cursor = null),
                this.activeInteractionData))
                  if (this.activeInteractionData.hasOwnProperty(t)) {
                    var e = this.activeInteractionData[t];
                    if (e.originalEvent && "touch" !== e.pointerType) {
                      var r = this.configureInteractionEventForDOMEvent(
                        this.eventData,
                        e.originalEvent,
                        e
                      );
                      this.processInteractive(
                        r,
                        this.lastObjectRendered,
                        this.processPointerOverOut,
                        !0
                      );
                    }
                  }
                this.setCursorMode(this.cursor);
              }
          }),
          (e.prototype.setCursorMode = function (t) {
            if (((t = t || "default"), this.currentCursorMode !== t)) {
              this.currentCursorMode = t;
              var e = this.cursorStyles[t];
              if (e)
                switch (typeof e) {
                  case "string":
                    this.interactionDOMElement.style.cursor = e;
                    break;
                  case "function":
                    e(t);
                    break;
                  case "object":
                    Object.assign(this.interactionDOMElement.style, e);
                }
              else
                "string" != typeof t ||
                  Object.prototype.hasOwnProperty.call(this.cursorStyles, t) ||
                  (this.interactionDOMElement.style.cursor = t);
            }
          }),
          (e.prototype.dispatchEvent = function (t, e, r) {
            (r.stopPropagationHint && t !== r.stopsPropagatingAt) ||
              ((r.currentTarget = t),
              (r.type = e),
              t.emit(e, r),
              t[e] && t[e](r));
          }),
          (e.prototype.delayDispatchEvent = function (t, e, r) {
            this.delayedEvents.push({
              displayObject: t,
              eventString: e,
              eventData: r,
            });
          }),
          (e.prototype.mapPositionToPoint = function (t, e, r) {
            var n;
            n = this.interactionDOMElement.parentElement
              ? this.interactionDOMElement.getBoundingClientRect()
              : { x: 0, y: 0, width: 0, height: 0 };
            var i = 1 / this.resolution;
            (t.x =
              (e - n.left) * (this.interactionDOMElement.width / n.width) * i),
              (t.y =
                (r - n.top) *
                (this.interactionDOMElement.height / n.height) *
                i);
          }),
          (e.prototype.processInteractive = function (t, e, r, n) {
            var i = this.search.findHit(t, e, r, n),
              o = this.delayedEvents;
            if (!o.length) return i;
            t.stopPropagationHint = !1;
            var s = o.length;
            this.delayedEvents = [];
            for (var a = 0; a < s; a++) {
              var u = o[a],
                h = u.displayObject,
                c = u.eventString,
                l = u.eventData;
              l.stopsPropagatingAt === h && (l.stopPropagationHint = !0),
                this.dispatchEvent(h, c, l);
            }
            return i;
          }),
          (e.prototype.onPointerDown = function (t) {
            if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
              var e = this.normalizeToPointerData(t);
              if (this.autoPreventDefault && e[0].isNormalized)
                (t.cancelable || !("cancelable" in t)) && t.preventDefault();
              for (var r = e.length, n = 0; n < r; n++) {
                var i = e[n],
                  o = this.getInteractionDataForPointerId(i),
                  s = this.configureInteractionEventForDOMEvent(
                    this.eventData,
                    i,
                    o
                  );
                if (
                  ((s.data.originalEvent = t),
                  this.processInteractive(
                    s,
                    this.lastObjectRendered,
                    this.processPointerDown,
                    !0
                  ),
                  this.emit("pointerdown", s),
                  "touch" === i.pointerType)
                )
                  this.emit("touchstart", s);
                else if ("mouse" === i.pointerType || "pen" === i.pointerType) {
                  var a = 2 === i.button;
                  this.emit(a ? "rightdown" : "mousedown", this.eventData);
                }
              }
            }
          }),
          (e.prototype.processPointerDown = function (t, e, r) {
            var n = t.data,
              i = t.data.identifier;
            if (r)
              if (
                (e.trackedPointers[i] || (e.trackedPointers[i] = new ie(i)),
                this.dispatchEvent(e, "pointerdown", t),
                "touch" === n.pointerType)
              )
                this.dispatchEvent(e, "touchstart", t);
              else if ("mouse" === n.pointerType || "pen" === n.pointerType) {
                var o = 2 === n.button;
                o
                  ? (e.trackedPointers[i].rightDown = !0)
                  : (e.trackedPointers[i].leftDown = !0),
                  this.dispatchEvent(e, o ? "rightdown" : "mousedown", t);
              }
          }),
          (e.prototype.onPointerComplete = function (t, e, r) {
            for (
              var n = this.normalizeToPointerData(t),
                i = n.length,
                o = t.target !== this.interactionDOMElement ? "outside" : "",
                s = 0;
              s < i;
              s++
            ) {
              var a = n[s],
                u = this.getInteractionDataForPointerId(a),
                h = this.configureInteractionEventForDOMEvent(
                  this.eventData,
                  a,
                  u
                );
              if (
                ((h.data.originalEvent = t),
                this.processInteractive(h, this.lastObjectRendered, r, e || !o),
                this.emit(e ? "pointercancel" : "pointerup" + o, h),
                "mouse" === a.pointerType || "pen" === a.pointerType)
              ) {
                var c = 2 === a.button;
                this.emit(c ? "rightup" + o : "mouseup" + o, h);
              } else
                "touch" === a.pointerType &&
                  (this.emit(e ? "touchcancel" : "touchend" + o, h),
                  this.releaseInteractionDataForPointerId(a.pointerId));
            }
          }),
          (e.prototype.onPointerCancel = function (t) {
            (this.supportsTouchEvents && "touch" === t.pointerType) ||
              this.onPointerComplete(t, !0, this.processPointerCancel);
          }),
          (e.prototype.processPointerCancel = function (t, e) {
            var r = t.data,
              n = t.data.identifier;
            void 0 !== e.trackedPointers[n] &&
              (delete e.trackedPointers[n],
              this.dispatchEvent(e, "pointercancel", t),
              "touch" === r.pointerType &&
                this.dispatchEvent(e, "touchcancel", t));
          }),
          (e.prototype.onPointerUp = function (t) {
            (this.supportsTouchEvents && "touch" === t.pointerType) ||
              this.onPointerComplete(t, !1, this.processPointerUp);
          }),
          (e.prototype.processPointerUp = function (t, e, r) {
            var n = t.data,
              i = t.data.identifier,
              o = e.trackedPointers[i],
              s = "touch" === n.pointerType,
              a = "mouse" === n.pointerType || "pen" === n.pointerType,
              u = !1;
            if (a) {
              var h = 2 === n.button,
                c = ie.FLAGS,
                l = h ? c.RIGHT_DOWN : c.LEFT_DOWN,
                f = void 0 !== o && o.flags & l;
              r
                ? (this.dispatchEvent(e, h ? "rightup" : "mouseup", t),
                  f &&
                    (this.dispatchEvent(e, h ? "rightclick" : "click", t),
                    (u = !0)))
                : f &&
                  this.dispatchEvent(
                    e,
                    h ? "rightupoutside" : "mouseupoutside",
                    t
                  ),
                o && (h ? (o.rightDown = !1) : (o.leftDown = !1));
            }
            r
              ? (this.dispatchEvent(e, "pointerup", t),
                s && this.dispatchEvent(e, "touchend", t),
                o &&
                  ((a && !u) || this.dispatchEvent(e, "pointertap", t),
                  s && (this.dispatchEvent(e, "tap", t), (o.over = !1))))
              : o &&
                (this.dispatchEvent(e, "pointerupoutside", t),
                s && this.dispatchEvent(e, "touchendoutside", t)),
              o && o.none && delete e.trackedPointers[i];
          }),
          (e.prototype.onPointerMove = function (t) {
            if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
              var e = this.normalizeToPointerData(t);
              ("mouse" !== e[0].pointerType && "pen" !== e[0].pointerType) ||
                ((this._didMove = !0), (this.cursor = null));
              for (var r = e.length, n = 0; n < r; n++) {
                var i = e[n],
                  o = this.getInteractionDataForPointerId(i),
                  s = this.configureInteractionEventForDOMEvent(
                    this.eventData,
                    i,
                    o
                  );
                (s.data.originalEvent = t),
                  this.processInteractive(
                    s,
                    this.lastObjectRendered,
                    this.processPointerMove,
                    !0
                  ),
                  this.emit("pointermove", s),
                  "touch" === i.pointerType && this.emit("touchmove", s),
                  ("mouse" !== i.pointerType && "pen" !== i.pointerType) ||
                    this.emit("mousemove", s);
              }
              "mouse" === e[0].pointerType && this.setCursorMode(this.cursor);
            }
          }),
          (e.prototype.processPointerMove = function (t, e, r) {
            var n = t.data,
              i = "touch" === n.pointerType,
              o = "mouse" === n.pointerType || "pen" === n.pointerType;
            o && this.processPointerOverOut(t, e, r),
              (this.moveWhenInside && !r) ||
                (this.dispatchEvent(e, "pointermove", t),
                i && this.dispatchEvent(e, "touchmove", t),
                o && this.dispatchEvent(e, "mousemove", t));
          }),
          (e.prototype.onPointerOut = function (t) {
            if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
              var e = this.normalizeToPointerData(t)[0];
              "mouse" === e.pointerType &&
                ((this.mouseOverRenderer = !1), this.setCursorMode(null));
              var r = this.getInteractionDataForPointerId(e),
                n = this.configureInteractionEventForDOMEvent(
                  this.eventData,
                  e,
                  r
                );
              (n.data.originalEvent = e),
                this.processInteractive(
                  n,
                  this.lastObjectRendered,
                  this.processPointerOverOut,
                  !1
                ),
                this.emit("pointerout", n),
                "mouse" === e.pointerType || "pen" === e.pointerType
                  ? this.emit("mouseout", n)
                  : this.releaseInteractionDataForPointerId(r.identifier);
            }
          }),
          (e.prototype.processPointerOverOut = function (t, e, r) {
            var n = t.data,
              i = t.data.identifier,
              o = "mouse" === n.pointerType || "pen" === n.pointerType,
              s = e.trackedPointers[i];
            r && !s && (s = e.trackedPointers[i] = new ie(i)),
              void 0 !== s &&
                (r && this.mouseOverRenderer
                  ? (s.over ||
                      ((s.over = !0),
                      this.delayDispatchEvent(e, "pointerover", t),
                      o && this.delayDispatchEvent(e, "mouseover", t)),
                    o && null === this.cursor && (this.cursor = e.cursor))
                  : s.over &&
                    ((s.over = !1),
                    this.dispatchEvent(e, "pointerout", this.eventData),
                    o && this.dispatchEvent(e, "mouseout", t),
                    s.none && delete e.trackedPointers[i]));
          }),
          (e.prototype.onPointerOver = function (t) {
            var e = this.normalizeToPointerData(t)[0],
              r = this.getInteractionDataForPointerId(e),
              n = this.configureInteractionEventForDOMEvent(
                this.eventData,
                e,
                r
              );
            (n.data.originalEvent = e),
              "mouse" === e.pointerType && (this.mouseOverRenderer = !0),
              this.emit("pointerover", n),
              ("mouse" !== e.pointerType && "pen" !== e.pointerType) ||
                this.emit("mouseover", n);
          }),
          (e.prototype.getInteractionDataForPointerId = function (t) {
            var e,
              r = t.pointerId;
            return (
              1 === r || "mouse" === t.pointerType
                ? (e = this.mouse)
                : this.activeInteractionData[r]
                ? (e = this.activeInteractionData[r])
                : (((e =
                    this.interactionDataPool.pop() || new ee()).identifier = r),
                  (this.activeInteractionData[r] = e)),
              e.copyEvent(t),
              e
            );
          }),
          (e.prototype.releaseInteractionDataForPointerId = function (t) {
            var e = this.activeInteractionData[t];
            e &&
              (delete this.activeInteractionData[t],
              e.reset(),
              this.interactionDataPool.push(e));
          }),
          (e.prototype.configureInteractionEventForDOMEvent = function (
            t,
            e,
            r
          ) {
            return (
              (t.data = r),
              this.mapPositionToPoint(r.global, e.clientX, e.clientY),
              "touch" === e.pointerType &&
                ((e.globalX = r.global.x), (e.globalY = r.global.y)),
              (r.originalEvent = e),
              t.reset(),
              t
            );
          }),
          (e.prototype.normalizeToPointerData = function (t) {
            var e = [];
            if (this.supportsTouchEvents && t instanceof TouchEvent)
              for (var r = 0, n = t.changedTouches.length; r < n; r++) {
                var i = t.changedTouches[r];
                void 0 === i.button && (i.button = t.touches.length ? 1 : 0),
                  void 0 === i.buttons &&
                    (i.buttons = t.touches.length ? 1 : 0),
                  void 0 === i.isPrimary &&
                    (i.isPrimary =
                      1 === t.touches.length && "touchstart" === t.type),
                  void 0 === i.width && (i.width = i.radiusX || 1),
                  void 0 === i.height && (i.height = i.radiusY || 1),
                  void 0 === i.tiltX && (i.tiltX = 0),
                  void 0 === i.tiltY && (i.tiltY = 0),
                  void 0 === i.pointerType && (i.pointerType = "touch"),
                  void 0 === i.pointerId && (i.pointerId = i.identifier || 0),
                  void 0 === i.pressure && (i.pressure = i.force || 0.5),
                  void 0 === i.twist && (i.twist = 0),
                  void 0 === i.tangentialPressure && (i.tangentialPressure = 0),
                  void 0 === i.layerX && (i.layerX = i.offsetX = i.clientX),
                  void 0 === i.layerY && (i.layerY = i.offsetY = i.clientY),
                  (i.isNormalized = !0),
                  e.push(i);
              }
            else if (
              !(t instanceof MouseEvent) ||
              (this.supportsPointerEvents && t instanceof window.PointerEvent)
            )
              e.push(t);
            else {
              var o = t;
              void 0 === o.isPrimary && (o.isPrimary = !0),
                void 0 === o.width && (o.width = 1),
                void 0 === o.height && (o.height = 1),
                void 0 === o.tiltX && (o.tiltX = 0),
                void 0 === o.tiltY && (o.tiltY = 0),
                void 0 === o.pointerType && (o.pointerType = "mouse"),
                void 0 === o.pointerId && (o.pointerId = 1),
                void 0 === o.pressure && (o.pressure = 0.5),
                void 0 === o.twist && (o.twist = 0),
                void 0 === o.tangentialPressure && (o.tangentialPressure = 0),
                (o.isNormalized = !0),
                e.push(o);
            }
            return e;
          }),
          (e.prototype.destroy = function () {
            this.removeEvents(),
              this.removeTickerListener(),
              this.removeAllListeners(),
              (this.renderer = null),
              (this.mouse = null),
              (this.eventData = null),
              (this.interactionDOMElement = null),
              (this.onPointerDown = null),
              (this.processPointerDown = null),
              (this.onPointerUp = null),
              (this.processPointerUp = null),
              (this.onPointerCancel = null),
              (this.processPointerCancel = null),
              (this.onPointerMove = null),
              (this.processPointerMove = null),
              (this.onPointerOut = null),
              (this.processPointerOverOut = null),
              (this.onPointerOver = null),
              (this.search = null);
          }),
          e
        );
      })(W.a),
      he = (function () {
        function t(t) {
          (this.items = []), (this._name = t), (this._aliasCount = 0);
        }
        return (
          (t.prototype.emit = function (t, e, r, n, i, o, s, a) {
            if (arguments.length > 8) throw new Error("max arguments reached");
            var u = this,
              h = u.name,
              c = u.items;
            this._aliasCount++;
            for (var l = 0, f = c.length; l < f; l++)
              c[l][h](t, e, r, n, i, o, s, a);
            return c === this.items && this._aliasCount--, this;
          }),
          (t.prototype.ensureNonAliasedItems = function () {
            this._aliasCount > 0 &&
              this.items.length > 1 &&
              ((this._aliasCount = 0), (this.items = this.items.slice(0)));
          }),
          (t.prototype.add = function (t) {
            return (
              t[this._name] &&
                (this.ensureNonAliasedItems(),
                this.remove(t),
                this.items.push(t)),
              this
            );
          }),
          (t.prototype.remove = function (t) {
            var e = this.items.indexOf(t);
            return (
              -1 !== e &&
                (this.ensureNonAliasedItems(), this.items.splice(e, 1)),
              this
            );
          }),
          (t.prototype.contains = function (t) {
            return -1 !== this.items.indexOf(t);
          }),
          (t.prototype.removeAll = function () {
            return this.ensureNonAliasedItems(), (this.items.length = 0), this;
          }),
          (t.prototype.destroy = function () {
            this.removeAll(), (this.items = null), (this._name = null);
          }),
          Object.defineProperty(t.prototype, "empty", {
            get: function () {
              return 0 === this.items.length;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "name", {
            get: function () {
              return this._name;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })();
    Object.defineProperties(he.prototype, {
      dispatch: { value: he.prototype.emit },
      run: { value: he.prototype.emit },
    }),
      /*!
       * @pixi/core - v5.3.0
       * Compiled Thu, 18 Jun 2020 23:27:40 UTC
       *
       * @pixi/core is licensed under the MIT License.
       * http://www.opensource.org/licenses/mit-license
       */
      (V.PREFER_ENV = A.any ? P.WEBGL : P.WEBGL2),
      (V.STRICT_TEXTURE_CACHE = !1);
    var ce = [];
    function le(t, e) {
      if (!t) return null;
      var r = "";
      if ("string" == typeof t) {
        var n = /\.(\w{3,4})(?:$|\?|#)/i.exec(t);
        n && (r = n[1].toLowerCase());
      }
      for (var i = ce.length - 1; i >= 0; --i) {
        var o = ce[i];
        if (o.test && o.test(t, r)) return new o(t, e);
      }
      throw new Error("Unrecognized source type to auto-detect Resource");
    }
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var fe =
      function (t, e) {
        return (fe =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    function pe(t, e) {
      function r() {
        this.constructor = t;
      }
      fe(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((r.prototype = e.prototype), new r()));
    }
    var de = (function () {
        function t(t, e) {
          void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            (this._width = t),
            (this._height = e),
            (this.destroyed = !1),
            (this.internal = !1),
            (this.onResize = new he("setRealSize")),
            (this.onUpdate = new he("update")),
            (this.onError = new he("onError"));
        }
        return (
          (t.prototype.bind = function (t) {
            this.onResize.add(t),
              this.onUpdate.add(t),
              this.onError.add(t),
              (this._width || this._height) &&
                this.onResize.emit(this._width, this._height);
          }),
          (t.prototype.unbind = function (t) {
            this.onResize.remove(t),
              this.onUpdate.remove(t),
              this.onError.remove(t);
          }),
          (t.prototype.resize = function (t, e) {
            (t === this._width && e === this._height) ||
              ((this._width = t), (this._height = e), this.onResize.emit(t, e));
          }),
          Object.defineProperty(t.prototype, "valid", {
            get: function () {
              return !!this._width && !!this._height;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.update = function () {
            this.destroyed || this.onUpdate.emit();
          }),
          (t.prototype.load = function () {
            return Promise.resolve(this);
          }),
          Object.defineProperty(t.prototype, "width", {
            get: function () {
              return this._width;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "height", {
            get: function () {
              return this._height;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.style = function (t, e, r) {
            return !1;
          }),
          (t.prototype.dispose = function () {}),
          (t.prototype.destroy = function () {
            this.destroyed ||
              ((this.destroyed = !0),
              this.dispose(),
              this.onError.removeAll(),
              (this.onError = null),
              this.onResize.removeAll(),
              (this.onResize = null),
              this.onUpdate.removeAll(),
              (this.onUpdate = null));
          }),
          (t.test = function (t, e) {
            return !1;
          }),
          t
        );
      })(),
      ve = (function (t) {
        function e(e, r) {
          var n = this,
            i = r || {},
            o = i.width,
            s = i.height;
          if (!o || !s)
            throw new Error("BufferResource width or height invalid");
          return ((n = t.call(this, o, s) || this).data = e), n;
        }
        return (
          pe(e, t),
          (e.prototype.upload = function (t, e, r) {
            var n = t.gl;
            return (
              n.pixelStorei(
                n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                e.alphaMode === B.UNPACK
              ),
              r.width === e.width && r.height === e.height
                ? n.texSubImage2D(
                    e.target,
                    0,
                    0,
                    0,
                    e.width,
                    e.height,
                    e.format,
                    e.type,
                    this.data
                  )
                : ((r.width = e.width),
                  (r.height = e.height),
                  n.texImage2D(
                    e.target,
                    0,
                    r.internalFormat,
                    e.width,
                    e.height,
                    0,
                    e.format,
                    r.type,
                    this.data
                  )),
              !0
            );
          }),
          (e.prototype.dispose = function () {
            this.data = null;
          }),
          (e.test = function (t) {
            return (
              t instanceof Float32Array ||
              t instanceof Uint8Array ||
              t instanceof Uint32Array
            );
          }),
          e
        );
      })(de),
      ge = { scaleMode: F.NEAREST, format: D.RGBA, alphaMode: B.NPM },
      ye = (function (t) {
        function e(e, r) {
          void 0 === e && (e = null), void 0 === r && (r = null);
          var n = t.call(this) || this,
            i = (r = r || {}).alphaMode,
            o = r.mipmap,
            s = r.anisotropicLevel,
            a = r.scaleMode,
            u = r.width,
            h = r.height,
            c = r.wrapMode,
            l = r.format,
            f = r.type,
            p = r.target,
            d = r.resolution,
            v = r.resourceOptions;
          return (
            !e || e instanceof de || ((e = le(e, v)).internal = !0),
            (n.width = u || 0),
            (n.height = h || 0),
            (n.resolution = d || V.RESOLUTION),
            (n.mipmap = void 0 !== o ? o : V.MIPMAP_TEXTURES),
            (n.anisotropicLevel = void 0 !== s ? s : V.ANISOTROPIC_LEVEL),
            (n.wrapMode = c || V.WRAP_MODE),
            (n.scaleMode = void 0 !== a ? a : V.SCALE_MODE),
            (n.format = l || D.RGBA),
            (n.type = f || N.UNSIGNED_BYTE),
            (n.target = p || L.TEXTURE_2D),
            (n.alphaMode = void 0 !== i ? i : B.UNPACK),
            void 0 !== r.premultiplyAlpha &&
              (n.premultiplyAlpha = r.premultiplyAlpha),
            (n.uid = pt()),
            (n.touched = 0),
            (n.isPowerOfTwo = !1),
            n._refreshPOT(),
            (n._glTextures = {}),
            (n.dirtyId = 0),
            (n.dirtyStyleId = 0),
            (n.cacheId = null),
            (n.valid = u > 0 && h > 0),
            (n.textureCacheIds = []),
            (n.destroyed = !1),
            (n.resource = null),
            (n._batchEnabled = 0),
            (n._batchLocation = 0),
            (n.parentTextureArray = null),
            n.setResource(e),
            n
          );
        }
        return (
          pe(e, t),
          Object.defineProperty(e.prototype, "realWidth", {
            get: function () {
              return Math.ceil(this.width * this.resolution - 1e-4);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "realHeight", {
            get: function () {
              return Math.ceil(this.height * this.resolution - 1e-4);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.setStyle = function (t, e) {
            var r;
            return (
              void 0 !== t &&
                t !== this.scaleMode &&
                ((this.scaleMode = t), (r = !0)),
              void 0 !== e &&
                e !== this.mipmap &&
                ((this.mipmap = e), (r = !0)),
              r && this.dirtyStyleId++,
              this
            );
          }),
          (e.prototype.setSize = function (t, e, r) {
            return (
              (this.resolution = r || this.resolution),
              (this.width = t),
              (this.height = e),
              this._refreshPOT(),
              this.update(),
              this
            );
          }),
          (e.prototype.setRealSize = function (t, e, r) {
            return (
              (this.resolution = r || this.resolution),
              (this.width = t / this.resolution),
              (this.height = e / this.resolution),
              this._refreshPOT(),
              this.update(),
              this
            );
          }),
          (e.prototype._refreshPOT = function () {
            this.isPowerOfTwo = ut(this.realWidth) && ut(this.realHeight);
          }),
          (e.prototype.setResolution = function (t) {
            var e = this.resolution;
            return (
              e === t ||
                ((this.resolution = t),
                this.valid &&
                  ((this.width = (this.width * e) / t),
                  (this.height = (this.height * e) / t),
                  this.emit("update", this)),
                this._refreshPOT()),
              this
            );
          }),
          (e.prototype.setResource = function (t) {
            if (this.resource === t) return this;
            if (this.resource) throw new Error("Resource can be set only once");
            return t.bind(this), (this.resource = t), this;
          }),
          (e.prototype.update = function () {
            this.valid
              ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this))
              : this.width > 0 &&
                this.height > 0 &&
                ((this.valid = !0),
                this.emit("loaded", this),
                this.emit("update", this));
          }),
          (e.prototype.onError = function (t) {
            this.emit("error", this, t);
          }),
          (e.prototype.destroy = function () {
            this.resource &&
              (this.resource.unbind(this),
              this.resource.internal && this.resource.destroy(),
              (this.resource = null)),
              this.cacheId &&
                (delete mt[this.cacheId],
                delete yt[this.cacheId],
                (this.cacheId = null)),
              this.dispose(),
              e.removeFromCache(this),
              (this.textureCacheIds = null),
              (this.destroyed = !0);
          }),
          (e.prototype.dispose = function () {
            this.emit("dispose", this);
          }),
          (e.prototype.castToBaseTexture = function () {
            return this;
          }),
          (e.from = function (t, r, n) {
            void 0 === n && (n = V.STRICT_TEXTURE_CACHE);
            var i = "string" == typeof t,
              o = null;
            i
              ? (o = t)
              : (t._pixiId || (t._pixiId = "pixiid_" + pt()), (o = t._pixiId));
            var s = mt[o];
            if (i && n && !s)
              throw new Error(
                'The cacheId "' + o + '" does not exist in BaseTextureCache.'
              );
            return (
              s || (((s = new e(t, r)).cacheId = o), e.addToCache(s, o)), s
            );
          }),
          (e.fromBuffer = function (t, r, n, i) {
            t = t || new Float32Array(r * n * 4);
            var o = new ve(t, { width: r, height: n }),
              s = t instanceof Float32Array ? N.FLOAT : N.UNSIGNED_BYTE;
            return new e(
              o,
              Object.assign(ge, i || { width: r, height: n, type: s })
            );
          }),
          (e.addToCache = function (t, e) {
            e &&
              (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e),
              mt[e] &&
                console.warn(
                  "BaseTexture added to the cache with an id [" +
                    e +
                    "] that already had an entry"
                ),
              (mt[e] = t));
          }),
          (e.removeFromCache = function (t) {
            if ("string" == typeof t) {
              var e = mt[t];
              if (e) {
                var r = e.textureCacheIds.indexOf(t);
                return (
                  r > -1 && e.textureCacheIds.splice(r, 1), delete mt[t], e
                );
              }
            } else if (t && t.textureCacheIds) {
              for (var n = 0; n < t.textureCacheIds.length; ++n)
                delete mt[t.textureCacheIds[n]];
              return (t.textureCacheIds.length = 0), t;
            }
            return null;
          }),
          (e._globalBatch = 0),
          e
        );
      })(W.a),
      me = (function (t) {
        function e(e, r) {
          var n = this,
            i = r || {},
            o = i.width,
            s = i.height;
          ((n = t.call(this, o, s) || this).items = []), (n.itemDirtyIds = []);
          for (var a = 0; a < e; a++) {
            var u = new ye();
            n.items.push(u), n.itemDirtyIds.push(-2);
          }
          return (n.length = e), (n._load = null), (n.baseTexture = null), n;
        }
        return (
          pe(e, t),
          (e.prototype.initFromArray = function (t, e) {
            for (var r = 0; r < this.length; r++)
              t[r] &&
                (t[r].castToBaseTexture
                  ? this.addBaseTextureAt(t[r].castToBaseTexture(), r)
                  : t[r] instanceof de
                  ? this.addResourceAt(t[r], r)
                  : this.addResourceAt(le(t[r], e), r));
          }),
          (e.prototype.dispose = function () {
            for (var t = 0, e = this.length; t < e; t++)
              this.items[t].destroy();
            (this.items = null),
              (this.itemDirtyIds = null),
              (this._load = null);
          }),
          (e.prototype.addResourceAt = function (t, e) {
            if (!this.items[e])
              throw new Error("Index " + e + " is out of bounds");
            return (
              t.valid && !this.valid && this.resize(t.width, t.height),
              this.items[e].setResource(t),
              this
            );
          }),
          (e.prototype.bind = function (e) {
            if (null !== this.baseTexture)
              throw new Error(
                "Only one base texture per TextureArray is allowed"
              );
            t.prototype.bind.call(this, e);
            for (var r = 0; r < this.length; r++)
              (this.items[r].parentTextureArray = e),
                this.items[r].on("update", e.update, e);
          }),
          (e.prototype.unbind = function (e) {
            t.prototype.unbind.call(this, e);
            for (var r = 0; r < this.length; r++)
              (this.items[r].parentTextureArray = null),
                this.items[r].off("update", e.update, e);
          }),
          (e.prototype.load = function () {
            var t = this;
            if (this._load) return this._load;
            var e = this.items
              .map(function (t) {
                return t.resource;
              })
              .filter(function (t) {
                return t;
              })
              .map(function (t) {
                return t.load();
              });
            return (
              (this._load = Promise.all(e).then(function () {
                var e = t.items[0],
                  r = e.realWidth,
                  n = e.realHeight;
                return t.resize(r, n), Promise.resolve(t);
              })),
              this._load
            );
          }),
          e
        );
      })(de),
      _e = (function (t) {
        function e(e, r) {
          var n,
            i,
            o = this,
            s = r || {},
            a = s.width,
            u = s.height;
          return (
            Array.isArray(e) ? ((n = e), (i = e.length)) : (i = e),
            (o = t.call(this, i, { width: a, height: u }) || this),
            n && o.initFromArray(n, r),
            o
          );
        }
        return (
          pe(e, t),
          (e.prototype.addBaseTextureAt = function (t, e) {
            if (!t.resource)
              throw new Error("ArrayResource does not support RenderTexture");
            return this.addResourceAt(t.resource, e), this;
          }),
          (e.prototype.bind = function (e) {
            t.prototype.bind.call(this, e), (e.target = L.TEXTURE_2D_ARRAY);
          }),
          (e.prototype.upload = function (t, e, r) {
            var n = this.length,
              i = this.itemDirtyIds,
              o = this.items,
              s = t.gl;
            r.dirtyId < 0 &&
              s.texImage3D(
                s.TEXTURE_2D_ARRAY,
                0,
                e.format,
                this._width,
                this._height,
                n,
                0,
                e.format,
                e.type,
                null
              );
            for (var a = 0; a < n; a++) {
              var u = o[a];
              i[a] < u.dirtyId &&
                ((i[a] = u.dirtyId),
                u.valid &&
                  s.texSubImage3D(
                    s.TEXTURE_2D_ARRAY,
                    0,
                    0,
                    0,
                    a,
                    u.resource.width,
                    u.resource.height,
                    1,
                    e.format,
                    e.type,
                    u.resource.source
                  ));
            }
            return !0;
          }),
          e
        );
      })(me),
      xe = (function (t) {
        function e(e) {
          var r = this,
            n = e,
            i = n.naturalWidth || n.videoWidth || n.width,
            o = n.naturalHeight || n.videoHeight || n.height;
          return (
            ((r = t.call(this, i, o) || this).source = e),
            (r.noSubImage = !1),
            r
          );
        }
        return (
          pe(e, t),
          (e.crossOrigin = function (t, e, r) {
            void 0 === r && 0 !== e.indexOf("data:")
              ? (t.crossOrigin = (function (t, e) {
                  if (
                    (void 0 === e && (e = window.location),
                    0 === t.indexOf("data:"))
                  )
                    return "";
                  (e = e || window.location),
                    xt || (xt = document.createElement("a")),
                    (xt.href = t);
                  var r = Object(Z.parse)(xt.href),
                    n = (!r.port && "" === e.port) || r.port === e.port;
                  return r.hostname === e.hostname &&
                    n &&
                    r.protocol === e.protocol
                    ? ""
                    : "anonymous";
                })(e))
              : !1 !== r &&
                (t.crossOrigin = "string" == typeof r ? r : "anonymous");
          }),
          (e.prototype.upload = function (t, e, r, n) {
            var i = t.gl,
              o = e.realWidth,
              s = e.realHeight;
            return (
              (n = n || this.source),
              i.pixelStorei(
                i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                e.alphaMode === B.UNPACK
              ),
              this.noSubImage ||
              e.target !== i.TEXTURE_2D ||
              r.width !== o ||
              r.height !== s
                ? ((r.width = o),
                  (r.height = s),
                  i.texImage2D(e.target, 0, e.format, e.format, e.type, n))
                : i.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, e.format, e.type, n),
              !0
            );
          }),
          (e.prototype.update = function () {
            if (!this.destroyed) {
              var e = this.source,
                r = e.naturalWidth || e.videoWidth || e.width,
                n = e.naturalHeight || e.videoHeight || e.height;
              this.resize(r, n), t.prototype.update.call(this);
            }
          }),
          (e.prototype.dispose = function () {
            this.source = null;
          }),
          e
        );
      })(de),
      be = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          pe(e, t),
          (e.test = function (t) {
            var e = window.OffscreenCanvas;
            return !!(e && t instanceof e) || t instanceof HTMLCanvasElement;
          }),
          e
        );
      })(xe),
      Ee = (function (t) {
        function e(r, n) {
          var i = this,
            o = n || {},
            s = o.width,
            a = o.height,
            u = o.autoLoad,
            h = o.linkBaseTexture;
          if (r && r.length !== e.SIDES)
            throw new Error("Invalid length. Got " + r.length + ", expected 6");
          i = t.call(this, 6, { width: s, height: a }) || this;
          for (var c = 0; c < e.SIDES; c++)
            i.items[c].target = L.TEXTURE_CUBE_MAP_POSITIVE_X + c;
          return (
            (i.linkBaseTexture = !1 !== h),
            r && i.initFromArray(r, n),
            !1 !== u && i.load(),
            i
          );
        }
        return (
          pe(e, t),
          (e.prototype.bind = function (e) {
            t.prototype.bind.call(this, e), (e.target = L.TEXTURE_CUBE_MAP);
          }),
          (e.prototype.addBaseTextureAt = function (t, e, r) {
            if ((void 0 === r && (r = this.linkBaseTexture), !this.items[e]))
              throw new Error("Index " + e + " is out of bounds");
            if (
              !this.linkBaseTexture ||
              t.parentTextureArray ||
              Object.keys(t._glTextures).length > 0
            ) {
              if (!t.resource)
                throw new Error(
                  "CubeResource does not support copying of renderTexture."
                );
              this.addResourceAt(t.resource, e);
            } else
              (t.target = L.TEXTURE_CUBE_MAP_POSITIVE_X + e),
                (t.parentTextureArray = this.baseTexture),
                (this.items[e] = t);
            return (
              t.valid && !this.valid && this.resize(t.realWidth, t.realHeight),
              (this.items[e] = t),
              this
            );
          }),
          (e.prototype.upload = function (t, r, n) {
            for (var i = this.itemDirtyIds, o = 0; o < e.SIDES; o++) {
              var s = this.items[o];
              i[o] < s.dirtyId &&
                (s.valid && s.resource
                  ? (s.resource.upload(t, s, n), (i[o] = s.dirtyId))
                  : i[o] < -1 &&
                    (t.gl.texImage2D(
                      s.target,
                      0,
                      n.internalFormat,
                      r.realWidth,
                      r.realHeight,
                      0,
                      r.format,
                      n.type,
                      null
                    ),
                    (i[o] = -1)));
            }
            return !0;
          }),
          (e.test = function (t) {
            return Array.isArray(t) && t.length === e.SIDES;
          }),
          (e.SIDES = 6),
          e
        );
      })(me),
      we = (function (t) {
        function e(e, r) {
          var n = this;
          if (((r = r || {}), !(e instanceof HTMLImageElement))) {
            var i = new Image();
            xe.crossOrigin(i, e, r.crossorigin), (i.src = e), (e = i);
          }
          return (
            (n = t.call(this, e) || this),
            !e.complete &&
              n._width &&
              n._height &&
              ((n._width = 0), (n._height = 0)),
            (n.url = e.src),
            (n._process = null),
            (n.preserveBitmap = !1),
            (n.createBitmap =
              (void 0 !== r.createBitmap
                ? r.createBitmap
                : V.CREATE_IMAGE_BITMAP) && !!window.createImageBitmap),
            (n.alphaMode = "number" == typeof r.alphaMode ? r.alphaMode : null),
            void 0 !== r.premultiplyAlpha &&
              (n.premultiplyAlpha = r.premultiplyAlpha),
            (n.bitmap = null),
            (n._load = null),
            !1 !== r.autoLoad && n.load(),
            n
          );
        }
        return (
          pe(e, t),
          (e.prototype.load = function (t) {
            var e = this;
            return (
              this._load ||
                (void 0 !== t && (this.createBitmap = t),
                (this._load = new Promise(function (t, r) {
                  var n = e.source;
                  e.url = n.src;
                  var i = function () {
                    e.destroyed ||
                      ((n.onload = null),
                      (n.onerror = null),
                      e.resize(n.width, n.height),
                      (e._load = null),
                      e.createBitmap ? t(e.process()) : t(e));
                  };
                  n.complete && n.src
                    ? i()
                    : ((n.onload = i),
                      (n.onerror = function (t) {
                        r(t), e.onError.emit(t);
                      }));
                }))),
              this._load
            );
          }),
          (e.prototype.process = function () {
            var t = this,
              e = this.source;
            return null !== this._process
              ? this._process
              : null === this.bitmap && window.createImageBitmap
              ? ((this._process = window
                  .createImageBitmap(e, 0, 0, e.width, e.height, {
                    premultiplyAlpha:
                      this.alphaMode === B.UNPACK ? "premultiply" : "none",
                  })
                  .then(function (e) {
                    return t.destroyed
                      ? Promise.reject()
                      : ((t.bitmap = e),
                        t.update(),
                        (t._process = null),
                        Promise.resolve(t));
                  })),
                this._process)
              : Promise.resolve(this);
          }),
          (e.prototype.upload = function (e, r, n) {
            if (
              ("number" == typeof this.alphaMode &&
                (r.alphaMode = this.alphaMode),
              !this.createBitmap)
            )
              return t.prototype.upload.call(this, e, r, n);
            if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
            if (
              (t.prototype.upload.call(this, e, r, n, this.bitmap),
              !this.preserveBitmap)
            ) {
              var i = !0,
                o = r._glTextures;
              for (var s in o) {
                var a = o[s];
                if (a !== n && a.dirtyId !== r.dirtyId) {
                  i = !1;
                  break;
                }
              }
              i &&
                (this.bitmap.close && this.bitmap.close(),
                (this.bitmap = null));
            }
            return !0;
          }),
          (e.prototype.dispose = function () {
            (this.source.onload = null),
              (this.source.onerror = null),
              t.prototype.dispose.call(this),
              this.bitmap && (this.bitmap.close(), (this.bitmap = null)),
              (this._process = null),
              (this._load = null);
          }),
          (e.test = function (t) {
            return "string" == typeof t || t instanceof HTMLImageElement;
          }),
          e
        );
      })(xe),
      Te = (function (t) {
        function e(e, r) {
          var n = this;
          return (
            (r = r || {}),
            ((n =
              t.call(this, document.createElement("canvas")) ||
              this)._width = 0),
            (n._height = 0),
            (n.svg = e),
            (n.scale = r.scale || 1),
            (n._overrideWidth = r.width),
            (n._overrideHeight = r.height),
            (n._resolve = null),
            (n._crossorigin = r.crossorigin),
            (n._load = null),
            !1 !== r.autoLoad && n.load(),
            n
          );
        }
        return (
          pe(e, t),
          (e.prototype.load = function () {
            var t = this;
            return (
              this._load ||
                (this._load = new Promise(function (e) {
                  if (
                    ((t._resolve = function () {
                      t.resize(t.source.width, t.source.height), e(t);
                    }),
                    /^\<svg/.test(t.svg.trim()))
                  ) {
                    if (!btoa)
                      throw new Error(
                        "Your browser doesn't support base64 conversions."
                      );
                    t.svg =
                      "data:image/svg+xml;base64," +
                      btoa(unescape(encodeURIComponent(t.svg)));
                  }
                  t._loadSvg();
                })),
              this._load
            );
          }),
          (e.prototype._loadSvg = function () {
            var t = this,
              e = new Image();
            xe.crossOrigin(e, this.svg, this._crossorigin),
              (e.src = this.svg),
              (e.onerror = function (r) {
                t._resolve && ((e.onerror = null), t.onError.emit(r));
              }),
              (e.onload = function () {
                if (t._resolve) {
                  var r = e.width,
                    n = e.height;
                  if (!r || !n)
                    throw new Error(
                      "The SVG image must have width and height defined (in pixels), canvas API needs them."
                    );
                  var i = r * t.scale,
                    o = n * t.scale;
                  (t._overrideWidth || t._overrideHeight) &&
                    ((i = t._overrideWidth || (t._overrideHeight / n) * r),
                    (o = t._overrideHeight || (t._overrideWidth / r) * n)),
                    (i = Math.round(i)),
                    (o = Math.round(o));
                  var s = t.source;
                  (s.width = i),
                    (s.height = o),
                    (s._pixiId = "canvas_" + pt()),
                    s.getContext("2d").drawImage(e, 0, 0, r, n, 0, 0, i, o),
                    t._resolve(),
                    (t._resolve = null);
                }
              });
          }),
          (e.getSize = function (t) {
            var r = e.SVG_SIZE.exec(t),
              n = {};
            return (
              r &&
                ((n[r[1]] = Math.round(parseFloat(r[3]))),
                (n[r[5]] = Math.round(parseFloat(r[7])))),
              n
            );
          }),
          (e.prototype.dispose = function () {
            t.prototype.dispose.call(this),
              (this._resolve = null),
              (this._crossorigin = null);
          }),
          (e.test = function (t, e) {
            return (
              "svg" === e ||
              ("string" == typeof t &&
                0 === t.indexOf("data:image/svg+xml;base64")) ||
              ("string" == typeof t && 0 === t.indexOf("<svg"))
            );
          }),
          (e.SVG_SIZE =
            /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i),
          e
        );
      })(xe),
      Se = (function (t) {
        function e(r, n) {
          var i = this;
          if (((n = n || {}), !(r instanceof HTMLVideoElement))) {
            var o = document.createElement("video");
            o.setAttribute("preload", "auto"),
              o.setAttribute("webkit-playsinline", ""),
              o.setAttribute("playsinline", ""),
              "string" == typeof r && (r = [r]);
            var s = r[0].src || r[0];
            xe.crossOrigin(o, s, n.crossorigin);
            for (var a = 0; a < r.length; ++a) {
              var u = document.createElement("source"),
                h = r[a],
                c = h.src,
                l = h.mime,
                f = (c = c || r[a]).split("?").shift().toLowerCase(),
                p = f.substr(f.lastIndexOf(".") + 1);
              (l = l || e.MIME_TYPES[p] || "video/" + p),
                (u.src = c),
                (u.type = l),
                o.appendChild(u);
            }
            r = o;
          }
          return (
            ((i = t.call(this, r) || this).noSubImage = !0),
            (i._autoUpdate = !0),
            (i._isConnectedToTicker = !1),
            (i._updateFPS = n.updateFPS || 0),
            (i._msToNextUpdate = 0),
            (i.autoPlay = !1 !== n.autoPlay),
            (i._load = null),
            (i._resolve = null),
            (i._onCanPlay = i._onCanPlay.bind(i)),
            (i._onError = i._onError.bind(i)),
            !1 !== n.autoLoad && i.load(),
            i
          );
        }
        return (
          pe(e, t),
          (e.prototype.update = function (e) {
            if ((void 0 === e && (e = 0), !this.destroyed)) {
              var r = Qt.shared.elapsedMS * this.source.playbackRate;
              (this._msToNextUpdate = Math.floor(this._msToNextUpdate - r)),
                (!this._updateFPS || this._msToNextUpdate <= 0) &&
                  (t.prototype.update.call(this),
                  (this._msToNextUpdate = this._updateFPS
                    ? Math.floor(1e3 / this._updateFPS)
                    : 0));
            }
          }),
          (e.prototype.load = function () {
            var t = this;
            if (this._load) return this._load;
            var e = this.source;
            return (
              (e.readyState === e.HAVE_ENOUGH_DATA ||
                e.readyState === e.HAVE_FUTURE_DATA) &&
                e.width &&
                e.height &&
                (e.complete = !0),
              e.addEventListener("play", this._onPlayStart.bind(this)),
              e.addEventListener("pause", this._onPlayStop.bind(this)),
              this._isSourceReady()
                ? this._onCanPlay()
                : (e.addEventListener("canplay", this._onCanPlay),
                  e.addEventListener("canplaythrough", this._onCanPlay),
                  e.addEventListener("error", this._onError, !0)),
              (this._load = new Promise(function (r) {
                t.valid ? r(t) : ((t._resolve = r), e.load());
              })),
              this._load
            );
          }),
          (e.prototype._onError = function () {
            this.source.removeEventListener("error", this._onError, !0),
              this.onError.emit(event);
          }),
          (e.prototype._isSourcePlaying = function () {
            var t = this.source;
            return (
              t.currentTime > 0 &&
              !1 === t.paused &&
              !1 === t.ended &&
              t.readyState > 2
            );
          }),
          (e.prototype._isSourceReady = function () {
            var t = this.source;
            return 3 === t.readyState || 4 === t.readyState;
          }),
          (e.prototype._onPlayStart = function () {
            this.valid || this._onCanPlay(),
              this.autoUpdate &&
                !this._isConnectedToTicker &&
                (Qt.shared.add(this.update, this),
                (this._isConnectedToTicker = !0));
          }),
          (e.prototype._onPlayStop = function () {
            this._isConnectedToTicker &&
              (Qt.shared.remove(this.update, this),
              (this._isConnectedToTicker = !1));
          }),
          (e.prototype._onCanPlay = function () {
            var t = this.source;
            t.removeEventListener("canplay", this._onCanPlay),
              t.removeEventListener("canplaythrough", this._onCanPlay);
            var e = this.valid;
            this.resize(t.videoWidth, t.videoHeight),
              !e &&
                this._resolve &&
                (this._resolve(this), (this._resolve = null)),
              this._isSourcePlaying()
                ? this._onPlayStart()
                : this.autoPlay && t.play();
          }),
          (e.prototype.dispose = function () {
            this._isConnectedToTicker && Qt.shared.remove(this.update, this);
            var e = this.source;
            e &&
              (e.removeEventListener("error", this._onError, !0),
              e.pause(),
              (e.src = ""),
              e.load()),
              t.prototype.dispose.call(this);
          }),
          Object.defineProperty(e.prototype, "autoUpdate", {
            get: function () {
              return this._autoUpdate;
            },
            set: function (t) {
              t !== this._autoUpdate &&
                ((this._autoUpdate = t),
                !this._autoUpdate && this._isConnectedToTicker
                  ? (Qt.shared.remove(this.update, this),
                    (this._isConnectedToTicker = !1))
                  : this._autoUpdate &&
                    !this._isConnectedToTicker &&
                    this._isSourcePlaying() &&
                    (Qt.shared.add(this.update, this),
                    (this._isConnectedToTicker = !0)));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "updateFPS", {
            get: function () {
              return this._updateFPS;
            },
            set: function (t) {
              t !== this._updateFPS && (this._updateFPS = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.test = function (t, r) {
            return t instanceof HTMLVideoElement || e.TYPES.indexOf(r) > -1;
          }),
          (e.TYPES = [
            "mp4",
            "m4v",
            "webm",
            "ogg",
            "ogv",
            "h264",
            "avi",
            "mov",
          ]),
          (e.MIME_TYPES = {
            ogv: "video/ogg",
            mov: "video/quicktime",
            m4v: "video/mp4",
          }),
          e
        );
      })(xe),
      Oe = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          pe(e, t),
          (e.test = function (t) {
            return !!window.createImageBitmap && t instanceof ImageBitmap;
          }),
          e
        );
      })(xe);
    ce.push(we, Oe, be, Se, Te, ve, Ee, _e);
    var Ae = (function () {
        function t(t) {
          this.renderer = t;
        }
        return (
          (t.prototype.destroy = function () {
            this.renderer = null;
          }),
          t
        );
      })(),
      Pe = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          pe(e, t),
          (e.prototype.upload = function (t, e, r) {
            var n = t.gl;
            return (
              n.pixelStorei(
                n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
                e.alphaMode === B.UNPACK
              ),
              r.width === e.width && r.height === e.height
                ? n.texSubImage2D(
                    e.target,
                    0,
                    0,
                    0,
                    e.width,
                    e.height,
                    e.format,
                    e.type,
                    this.data
                  )
                : ((r.width = e.width),
                  (r.height = e.height),
                  n.texImage2D(
                    e.target,
                    0,
                    1 === t.context.webGLVersion
                      ? n.DEPTH_COMPONENT
                      : n.DEPTH_COMPONENT16,
                    e.width,
                    e.height,
                    0,
                    e.format,
                    e.type,
                    this.data
                  )),
              !0
            );
          }),
          e
        );
      })(ve),
      Ie = (function () {
        function t(t, e) {
          (this.width = Math.ceil(t || 100)),
            (this.height = Math.ceil(e || 100)),
            (this.stencil = !1),
            (this.depth = !1),
            (this.dirtyId = 0),
            (this.dirtyFormat = 0),
            (this.dirtySize = 0),
            (this.depthTexture = null),
            (this.colorTextures = []),
            (this.glFramebuffers = {}),
            (this.disposeRunner = new he("disposeFramebuffer")),
            (this.multisample = z.NONE);
        }
        return (
          Object.defineProperty(t.prototype, "colorTexture", {
            get: function () {
              return this.colorTextures[0];
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.addColorTexture = function (t, e) {
            return (
              void 0 === t && (t = 0),
              (this.colorTextures[t] =
                e ||
                new ye(null, {
                  scaleMode: F.NEAREST,
                  resolution: 1,
                  mipmap: k.OFF,
                  width: this.width,
                  height: this.height,
                })),
              this.dirtyId++,
              this.dirtyFormat++,
              this
            );
          }),
          (t.prototype.addDepthTexture = function (t) {
            return (
              (this.depthTexture =
                t ||
                new ye(
                  new Pe(null, { width: this.width, height: this.height }),
                  {
                    scaleMode: F.NEAREST,
                    resolution: 1,
                    width: this.width,
                    height: this.height,
                    mipmap: k.OFF,
                    format: D.DEPTH_COMPONENT,
                    type: N.UNSIGNED_SHORT,
                  }
                )),
              this.dirtyId++,
              this.dirtyFormat++,
              this
            );
          }),
          (t.prototype.enableDepth = function () {
            return (this.depth = !0), this.dirtyId++, this.dirtyFormat++, this;
          }),
          (t.prototype.enableStencil = function () {
            return (
              (this.stencil = !0), this.dirtyId++, this.dirtyFormat++, this
            );
          }),
          (t.prototype.resize = function (t, e) {
            if (
              ((t = Math.ceil(t)),
              (e = Math.ceil(e)),
              t !== this.width || e !== this.height)
            ) {
              (this.width = t),
                (this.height = e),
                this.dirtyId++,
                this.dirtySize++;
              for (var r = 0; r < this.colorTextures.length; r++) {
                var n = this.colorTextures[r],
                  i = n.resolution;
                n.setSize(t / i, e / i);
              }
              if (this.depthTexture) {
                i = this.depthTexture.resolution;
                this.depthTexture.setSize(t / i, e / i);
              }
            }
          }),
          (t.prototype.dispose = function () {
            this.disposeRunner.emit(this, !1);
          }),
          (t.prototype.destroyDepthTexture = function () {
            this.depthTexture &&
              (this.depthTexture.destroy(),
              (this.depthTexture = null),
              ++this.dirtyId,
              ++this.dirtyFormat);
          }),
          t
        );
      })(),
      Ce = (function (t) {
        function e(e) {
          var r = this;
          if ("number" == typeof e) {
            var n = arguments[0],
              i = arguments[1],
              o = arguments[2],
              s = arguments[3];
            e = { width: n, height: i, scaleMode: o, resolution: s };
          }
          r = t.call(this, null, e) || this;
          var a = e || {},
            u = a.width,
            h = a.height;
          return (
            (r.mipmap = 0),
            (r.width = Math.ceil(u) || 100),
            (r.height = Math.ceil(h) || 100),
            (r.valid = !0),
            (r.clearColor = [0, 0, 0, 0]),
            (r.framebuffer = new Ie(
              r.width * r.resolution,
              r.height * r.resolution
            ).addColorTexture(0, r)),
            (r.maskStack = []),
            (r.filterStack = [{}]),
            r
          );
        }
        return (
          pe(e, t),
          (e.prototype.resize = function (t, e) {
            (t = Math.ceil(t)),
              (e = Math.ceil(e)),
              this.framebuffer.resize(t * this.resolution, e * this.resolution);
          }),
          (e.prototype.dispose = function () {
            this.framebuffer.dispose(), t.prototype.dispose.call(this);
          }),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this),
              this.framebuffer.destroyDepthTexture(),
              (this.framebuffer = null);
          }),
          e
        );
      })(ye),
      Me = (function () {
        function t() {
          (this.x0 = 0),
            (this.y0 = 0),
            (this.x1 = 1),
            (this.y1 = 0),
            (this.x2 = 1),
            (this.y2 = 1),
            (this.x3 = 0),
            (this.y3 = 1),
            (this.uvsFloat32 = new Float32Array(8));
        }
        return (
          (t.prototype.set = function (t, e, r) {
            var n = e.width,
              i = e.height;
            if (r) {
              var o = t.width / 2 / n,
                s = t.height / 2 / i,
                a = t.x / n + o,
                u = t.y / i + s;
              (r = Ht.add(r, Ht.NW)),
                (this.x0 = a + o * Ht.uX(r)),
                (this.y0 = u + s * Ht.uY(r)),
                (r = Ht.add(r, 2)),
                (this.x1 = a + o * Ht.uX(r)),
                (this.y1 = u + s * Ht.uY(r)),
                (r = Ht.add(r, 2)),
                (this.x2 = a + o * Ht.uX(r)),
                (this.y2 = u + s * Ht.uY(r)),
                (r = Ht.add(r, 2)),
                (this.x3 = a + o * Ht.uX(r)),
                (this.y3 = u + s * Ht.uY(r));
            } else
              (this.x0 = t.x / n),
                (this.y0 = t.y / i),
                (this.x1 = (t.x + t.width) / n),
                (this.y1 = t.y / i),
                (this.x2 = (t.x + t.width) / n),
                (this.y2 = (t.y + t.height) / i),
                (this.x3 = t.x / n),
                (this.y3 = (t.y + t.height) / i);
            (this.uvsFloat32[0] = this.x0),
              (this.uvsFloat32[1] = this.y0),
              (this.uvsFloat32[2] = this.x1),
              (this.uvsFloat32[3] = this.y1),
              (this.uvsFloat32[4] = this.x2),
              (this.uvsFloat32[5] = this.y2),
              (this.uvsFloat32[6] = this.x3),
              (this.uvsFloat32[7] = this.y3);
          }),
          t
        );
      })(),
      Re = new Me(),
      De = (function (t) {
        function e(r, n, i, o, s, a) {
          var u = t.call(this) || this;
          if (
            ((u.noFrame = !1),
            n || ((u.noFrame = !0), (n = new Ot(0, 0, 1, 1))),
            r instanceof e && (r = r.baseTexture),
            (u.baseTexture = r),
            (u._frame = n),
            (u.trim = o),
            (u.valid = !1),
            (u._uvs = Re),
            (u.uvMatrix = null),
            (u.orig = i || n),
            (u._rotate = Number(s || 0)),
            !0 === s)
          )
            u._rotate = 2;
          else if (u._rotate % 2 != 0)
            throw new Error(
              "attempt to use diamond-shaped UVs. If you are sure, set rotation manually"
            );
          return (
            (u.defaultAnchor = a ? new Mt(a.x, a.y) : new Mt(0, 0)),
            (u._updateID = 0),
            (u.textureCacheIds = []),
            r.valid
              ? u.noFrame
                ? r.valid && u.onBaseTextureUpdated(r)
                : (u.frame = n)
              : r.once("loaded", u.onBaseTextureUpdated, u),
            u.noFrame && r.on("update", u.onBaseTextureUpdated, u),
            u
          );
        }
        return (
          pe(e, t),
          (e.prototype.update = function () {
            this.baseTexture.resource && this.baseTexture.resource.update();
          }),
          (e.prototype.onBaseTextureUpdated = function (t) {
            if (this.noFrame) {
              if (!this.baseTexture.valid) return;
              (this._frame.width = t.width),
                (this._frame.height = t.height),
                (this.valid = !0),
                this.updateUvs();
            } else this.frame = this._frame;
            this.emit("update", this);
          }),
          (e.prototype.destroy = function (t) {
            if (this.baseTexture) {
              if (t) {
                var r = this.baseTexture;
                r && r.url && yt[r.url] && e.removeFromCache(r.url),
                  this.baseTexture.destroy();
              }
              this.baseTexture.off("loaded", this.onBaseTextureUpdated, this),
                this.baseTexture.off("update", this.onBaseTextureUpdated, this),
                (this.baseTexture = null);
            }
            (this._frame = null),
              (this._uvs = null),
              (this.trim = null),
              (this.orig = null),
              (this.valid = !1),
              e.removeFromCache(this),
              (this.textureCacheIds = null);
          }),
          (e.prototype.clone = function () {
            return new e(
              this.baseTexture,
              this.frame.clone(),
              this.orig.clone(),
              this.trim && this.trim.clone(),
              this.rotate,
              this.defaultAnchor
            );
          }),
          (e.prototype.updateUvs = function () {
            this._uvs === Re && (this._uvs = new Me()),
              this._uvs.set(this._frame, this.baseTexture, this.rotate),
              this._updateID++;
          }),
          (e.from = function (t, r, n) {
            void 0 === r && (r = {}),
              void 0 === n && (n = V.STRICT_TEXTURE_CACHE);
            var i = "string" == typeof t,
              o = null;
            i
              ? (o = t)
              : (t._pixiId || (t._pixiId = "pixiid_" + pt()), (o = t._pixiId));
            var s = yt[o];
            if (i && n && !s)
              throw new Error(
                'The cacheId "' + o + '" does not exist in TextureCache.'
              );
            return (
              s ||
                (r.resolution || (r.resolution = bt(t)),
                ((s = new e(new ye(t, r))).baseTexture.cacheId = o),
                ye.addToCache(s.baseTexture, o),
                e.addToCache(s, o)),
              s
            );
          }),
          (e.fromURL = function (t, r) {
            var n = Object.assign(
                { autoLoad: !1 },
                null == r ? void 0 : r.resourceOptions
              ),
              i = e.from(t, Object.assign({ resourceOptions: n }, r), !1),
              o = i.baseTexture.resource;
            return i.baseTexture.valid
              ? Promise.resolve(i)
              : o.load().then(function () {
                  return Promise.resolve(i);
                });
          }),
          (e.fromBuffer = function (t, r, n, i) {
            return new e(ye.fromBuffer(t, r, n, i));
          }),
          (e.fromLoader = function (t, r, n) {
            var i = new we(t);
            i.url = r;
            var o = new e(
              new ye(i, { scaleMode: V.SCALE_MODE, resolution: bt(r) })
            );
            return (
              n || (n = r),
              ye.addToCache(o.baseTexture, n),
              e.addToCache(o, n),
              n !== r && (ye.addToCache(o.baseTexture, r), e.addToCache(o, r)),
              o
            );
          }),
          (e.addToCache = function (t, e) {
            e &&
              (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e),
              yt[e] &&
                console.warn(
                  "Texture added to the cache with an id [" +
                    e +
                    "] that already had an entry"
                ),
              (yt[e] = t));
          }),
          (e.removeFromCache = function (t) {
            if ("string" == typeof t) {
              var e = yt[t];
              if (e) {
                var r = e.textureCacheIds.indexOf(t);
                return (
                  r > -1 && e.textureCacheIds.splice(r, 1), delete yt[t], e
                );
              }
            } else if (t && t.textureCacheIds) {
              for (var n = 0; n < t.textureCacheIds.length; ++n)
                yt[t.textureCacheIds[n]] === t &&
                  delete yt[t.textureCacheIds[n]];
              return (t.textureCacheIds.length = 0), t;
            }
            return null;
          }),
          Object.defineProperty(e.prototype, "resolution", {
            get: function () {
              return this.baseTexture.resolution;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "frame", {
            get: function () {
              return this._frame;
            },
            set: function (t) {
              (this._frame = t), (this.noFrame = !1);
              var e = t.x,
                r = t.y,
                n = t.width,
                i = t.height,
                o = e + n > this.baseTexture.width,
                s = r + i > this.baseTexture.height;
              if (o || s) {
                var a = o && s ? "and" : "or",
                  u =
                    "X: " +
                    e +
                    " + " +
                    n +
                    " = " +
                    (e + n) +
                    " > " +
                    this.baseTexture.width,
                  h =
                    "Y: " +
                    r +
                    " + " +
                    i +
                    " = " +
                    (r + i) +
                    " > " +
                    this.baseTexture.height;
                throw new Error(
                  "Texture Error: frame does not fit inside the base Texture dimensions: " +
                    u +
                    " " +
                    a +
                    " " +
                    h
                );
              }
              (this.valid = n && i && this.baseTexture.valid),
                this.trim || this.rotate || (this.orig = t),
                this.valid && this.updateUvs();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "rotate", {
            get: function () {
              return this._rotate;
            },
            set: function (t) {
              (this._rotate = t), this.valid && this.updateUvs();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "width", {
            get: function () {
              return this.orig.width;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "height", {
            get: function () {
              return this.orig.height;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.castToBaseTexture = function () {
            return this.baseTexture;
          }),
          e
        );
      })(W.a);
    function Le(t) {
      (t.destroy = function () {}),
        (t.on = function () {}),
        (t.once = function () {}),
        (t.emit = function () {});
    }
    (De.EMPTY = new De(new ye())),
      Le(De.EMPTY),
      Le(De.EMPTY.baseTexture),
      (De.WHITE = (function () {
        var t = document.createElement("canvas");
        (t.width = 16), (t.height = 16);
        var e = t.getContext("2d");
        return (
          (e.fillStyle = "white"),
          e.fillRect(0, 0, 16, 16),
          new De(new ye(new be(t)))
        );
      })()),
      Le(De.WHITE),
      Le(De.WHITE.baseTexture);
    var Ne = (function (t) {
        function e(e, r) {
          var n = this,
            i = null;
          if (!(e instanceof Ce)) {
            var o = arguments[1],
              s = arguments[2],
              a = arguments[3],
              u = arguments[4];
            console.warn(
              "Please use RenderTexture.create(" +
                o +
                ", " +
                s +
                ") instead of the ctor directly."
            ),
              (i = arguments[0]),
              (r = null),
              (e = new Ce({
                width: o,
                height: s,
                scaleMode: a,
                resolution: u,
              }));
          }
          return (
            ((n = t.call(this, e, r) || this).legacyRenderer = i),
            (n.valid = !0),
            (n.filterFrame = null),
            (n.filterPoolKey = null),
            n.updateUvs(),
            n
          );
        }
        return (
          pe(e, t),
          Object.defineProperty(e.prototype, "framebuffer", {
            get: function () {
              return this.baseTexture.framebuffer;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.resize = function (t, e, r) {
            void 0 === r && (r = !0),
              (t = Math.ceil(t)),
              (e = Math.ceil(e)),
              (this.valid = t > 0 && e > 0),
              (this._frame.width = this.orig.width = t),
              (this._frame.height = this.orig.height = e),
              r && this.baseTexture.resize(t, e),
              this.updateUvs();
          }),
          (e.prototype.setResolution = function (t) {
            var e = this.baseTexture;
            e.resolution !== t &&
              (e.setResolution(t), this.resize(e.width, e.height, !1));
          }),
          (e.create = function (t) {
            return (
              "number" == typeof t &&
                (t = {
                  width: t,
                  height: arguments[1],
                  scaleMode: arguments[2],
                  resolution: arguments[3],
                }),
              new e(new Ce(t))
            );
          }),
          e
        );
      })(De),
      Fe = (function () {
        function t(t) {
          (this.texturePool = {}),
            (this.textureOptions = t || {}),
            (this.enableFullScreen = !1),
            (this._pixelsWidth = 0),
            (this._pixelsHeight = 0);
        }
        return (
          (t.prototype.createTexture = function (t, e) {
            var r = new Ce(
              Object.assign(
                { width: t, height: e, resolution: 1 },
                this.textureOptions
              )
            );
            return new Ne(r);
          }),
          (t.prototype.getOptimalTexture = function (e, r, n) {
            void 0 === n && (n = 1);
            var i = t.SCREEN_KEY;
            (e *= n),
              (r *= n),
              (this.enableFullScreen &&
                e === this._pixelsWidth &&
                r === this._pixelsHeight) ||
                (i = ((65535 & (e = at(e))) << 16) | (65535 & (r = at(r)))),
              this.texturePool[i] || (this.texturePool[i] = []);
            var o = this.texturePool[i].pop();
            return (
              o || (o = this.createTexture(e, r)),
              (o.filterPoolKey = i),
              o.setResolution(n),
              o
            );
          }),
          (t.prototype.getFilterTexture = function (t, e) {
            var r = this.getOptimalTexture(
              t.width,
              t.height,
              e || t.resolution
            );
            return (r.filterFrame = t.filterFrame), r;
          }),
          (t.prototype.returnTexture = function (t) {
            var e = t.filterPoolKey;
            (t.filterFrame = null), this.texturePool[e].push(t);
          }),
          (t.prototype.returnFilterTexture = function (t) {
            this.returnTexture(t);
          }),
          (t.prototype.clear = function (t) {
            if ((t = !1 !== t))
              for (var e in this.texturePool) {
                var r = this.texturePool[e];
                if (r) for (var n = 0; n < r.length; n++) r[n].destroy(!0);
              }
            this.texturePool = {};
          }),
          (t.prototype.setScreenSize = function (e) {
            if (
              e.width !== this._pixelsWidth ||
              e.height !== this._pixelsHeight
            ) {
              var r = t.SCREEN_KEY,
                n = this.texturePool[r];
              if (((this.enableFullScreen = e.width > 0 && e.height > 0), n))
                for (var i = 0; i < n.length; i++) n[i].destroy(!0);
              (this.texturePool[r] = []),
                (this._pixelsWidth = e.width),
                (this._pixelsHeight = e.height);
            }
          }),
          (t.SCREEN_KEY = "screen"),
          t
        );
      })(),
      Ue = (function () {
        function t(t, e, r, n, i, o, s) {
          void 0 === e && (e = 0),
            void 0 === r && (r = !1),
            void 0 === n && (n = 5126),
            (this.buffer = t),
            (this.size = e),
            (this.normalized = r),
            (this.type = n),
            (this.stride = i),
            (this.start = o),
            (this.instance = s);
        }
        return (
          (t.prototype.destroy = function () {
            this.buffer = null;
          }),
          (t.from = function (e, r, n, i, o) {
            return new t(e, r, n, i, o);
          }),
          t
        );
      })(),
      ke = 0,
      Be = (function () {
        function t(t, e, r) {
          void 0 === e && (e = !0),
            void 0 === r && (r = !1),
            (this.data = t || new Float32Array(1)),
            (this._glBuffers = {}),
            (this._updateID = 0),
            (this.index = r),
            (this.static = e),
            (this.id = ke++),
            (this.disposeRunner = new he("disposeBuffer"));
        }
        return (
          (t.prototype.update = function (t) {
            (this.data = t || this.data), this._updateID++;
          }),
          (t.prototype.dispose = function () {
            this.disposeRunner.emit(this, !1);
          }),
          (t.prototype.destroy = function () {
            this.dispose(), (this.data = null);
          }),
          (t.from = function (e) {
            return e instanceof Array && (e = new Float32Array(e)), new t(e);
          }),
          t
        );
      })();
    function je(t) {
      if (4 === t.BYTES_PER_ELEMENT)
        return t instanceof Float32Array
          ? "Float32Array"
          : t instanceof Uint32Array
          ? "Uint32Array"
          : "Int32Array";
      if (2 === t.BYTES_PER_ELEMENT) {
        if (t instanceof Uint16Array) return "Uint16Array";
      } else if (1 === t.BYTES_PER_ELEMENT && t instanceof Uint8Array)
        return "Uint8Array";
      return null;
    }
    var He = {
      Float32Array: Float32Array,
      Uint32Array: Uint32Array,
      Int32Array: Int32Array,
      Uint8Array: Uint8Array,
    };
    var Ge = { 5126: 4, 5123: 2, 5121: 1 },
      Xe = 0,
      ze = {
        Float32Array: Float32Array,
        Uint32Array: Uint32Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array,
        Uint16Array: Uint16Array,
      },
      Ve = (function () {
        function t(t, e) {
          void 0 === t && (t = []),
            void 0 === e && (e = {}),
            (this.buffers = t),
            (this.indexBuffer = null),
            (this.attributes = e),
            (this.glVertexArrayObjects = {}),
            (this.id = Xe++),
            (this.instanced = !1),
            (this.instanceCount = 1),
            (this.disposeRunner = new he("disposeGeometry")),
            (this.refCount = 0);
        }
        return (
          (t.prototype.addAttribute = function (t, e, r, n, i, o, s, a) {
            if (
              (void 0 === r && (r = 0),
              void 0 === n && (n = !1),
              void 0 === a && (a = !1),
              !e)
            )
              throw new Error(
                "You must pass a buffer when creating an attribute"
              );
            e instanceof Be ||
              (e instanceof Array && (e = new Float32Array(e)),
              (e = new Be(e)));
            var u = t.split("|");
            if (u.length > 1) {
              for (var h = 0; h < u.length; h++)
                this.addAttribute(u[h], e, r, n, i);
              return this;
            }
            var c = this.buffers.indexOf(e);
            return (
              -1 === c && (this.buffers.push(e), (c = this.buffers.length - 1)),
              (this.attributes[t] = new Ue(c, r, n, i, o, s, a)),
              (this.instanced = this.instanced || a),
              this
            );
          }),
          (t.prototype.getAttribute = function (t) {
            return this.attributes[t];
          }),
          (t.prototype.getBuffer = function (t) {
            return this.buffers[this.getAttribute(t).buffer];
          }),
          (t.prototype.addIndex = function (t) {
            return (
              t instanceof Be ||
                (t instanceof Array && (t = new Uint16Array(t)),
                (t = new Be(t))),
              (t.index = !0),
              (this.indexBuffer = t),
              -1 === this.buffers.indexOf(t) && this.buffers.push(t),
              this
            );
          }),
          (t.prototype.getIndex = function () {
            return this.indexBuffer;
          }),
          (t.prototype.interleave = function () {
            if (
              1 === this.buffers.length ||
              (2 === this.buffers.length && this.indexBuffer)
            )
              return this;
            var t,
              e = [],
              r = [],
              n = new Be();
            for (t in this.attributes) {
              var i = this.attributes[t],
                o = this.buffers[i.buffer];
              e.push(o.data), r.push((i.size * Ge[i.type]) / 4), (i.buffer = 0);
            }
            for (
              n.data = (function (t, e) {
                for (var r = 0, n = 0, i = {}, o = 0; o < t.length; o++)
                  (n += e[o]), (r += t[o].length);
                var s = new ArrayBuffer(4 * r),
                  a = null,
                  u = 0;
                for (o = 0; o < t.length; o++) {
                  var h = e[o],
                    c = t[o],
                    l = je(c);
                  i[l] || (i[l] = new He[l](s)), (a = i[l]);
                  for (var f = 0; f < c.length; f++) {
                    a[((f / h) | 0) * n + u + (f % h)] = c[f];
                  }
                  u += h;
                }
                return new Float32Array(s);
              })(e, r),
                t = 0;
              t < this.buffers.length;
              t++
            )
              this.buffers[t] !== this.indexBuffer && this.buffers[t].destroy();
            return (
              (this.buffers = [n]),
              this.indexBuffer && this.buffers.push(this.indexBuffer),
              this
            );
          }),
          (t.prototype.getSize = function () {
            for (var t in this.attributes) {
              var e = this.attributes[t];
              return (
                this.buffers[e.buffer].data.length / (e.stride / 4 || e.size)
              );
            }
            return 0;
          }),
          (t.prototype.dispose = function () {
            this.disposeRunner.emit(this, !1);
          }),
          (t.prototype.destroy = function () {
            this.dispose(),
              (this.buffers = null),
              (this.indexBuffer = null),
              (this.attributes = null);
          }),
          (t.prototype.clone = function () {
            for (var e = new t(), r = 0; r < this.buffers.length; r++)
              e.buffers[r] = new Be(this.buffers[r].data.slice(0));
            for (var r in this.attributes) {
              var n = this.attributes[r];
              e.attributes[r] = new Ue(
                n.buffer,
                n.size,
                n.normalized,
                n.type,
                n.stride,
                n.start,
                n.instance
              );
            }
            return (
              this.indexBuffer &&
                ((e.indexBuffer =
                  e.buffers[this.buffers.indexOf(this.indexBuffer)]),
                (e.indexBuffer.index = !0)),
              e
            );
          }),
          (t.merge = function (e) {
            for (
              var r, n = new t(), i = [], o = [], s = [], a = 0;
              a < e.length;
              a++
            ) {
              r = e[a];
              for (var u = 0; u < r.buffers.length; u++)
                (o[u] = o[u] || 0),
                  (o[u] += r.buffers[u].data.length),
                  (s[u] = 0);
            }
            for (a = 0; a < r.buffers.length; a++)
              (i[a] = new ze[je(r.buffers[a].data)](o[a])),
                (n.buffers[a] = new Be(i[a]));
            for (a = 0; a < e.length; a++) {
              r = e[a];
              for (u = 0; u < r.buffers.length; u++)
                i[u].set(r.buffers[u].data, s[u]),
                  (s[u] += r.buffers[u].data.length);
            }
            if (((n.attributes = r.attributes), r.indexBuffer)) {
              (n.indexBuffer = n.buffers[r.buffers.indexOf(r.indexBuffer)]),
                (n.indexBuffer.index = !0);
              var h = 0,
                c = 0,
                l = 0,
                f = 0;
              for (a = 0; a < r.buffers.length; a++)
                if (r.buffers[a] !== r.indexBuffer) {
                  f = a;
                  break;
                }
              for (var a in r.attributes) {
                var p = r.attributes[a];
                (0 | p.buffer) === f && (c += (p.size * Ge[p.type]) / 4);
              }
              for (a = 0; a < e.length; a++) {
                var d = e[a].indexBuffer.data;
                for (u = 0; u < d.length; u++) n.indexBuffer.data[u + l] += h;
                (h += r.buffers[f].data.length / c), (l += d.length);
              }
            }
            return n;
          }),
          t
        );
      })(),
      Ye = (function (t) {
        function e() {
          var e = t.call(this) || this;
          return (
            e
              .addAttribute(
                "aVertexPosition",
                new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])
              )
              .addIndex([0, 1, 3, 2]),
            e
          );
        }
        return pe(e, t), e;
      })(Ve),
      We = (function (t) {
        function e() {
          var e = t.call(this) || this;
          return (
            (e.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1])),
            (e.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])),
            (e.vertexBuffer = new Be(e.vertices)),
            (e.uvBuffer = new Be(e.uvs)),
            e
              .addAttribute("aVertexPosition", e.vertexBuffer)
              .addAttribute("aTextureCoord", e.uvBuffer)
              .addIndex([0, 1, 2, 0, 2, 3]),
            e
          );
        }
        return (
          pe(e, t),
          (e.prototype.map = function (t, e) {
            var r = 0,
              n = 0;
            return (
              (this.uvs[0] = r),
              (this.uvs[1] = n),
              (this.uvs[2] = r + e.width / t.width),
              (this.uvs[3] = n),
              (this.uvs[4] = r + e.width / t.width),
              (this.uvs[5] = n + e.height / t.height),
              (this.uvs[6] = r),
              (this.uvs[7] = n + e.height / t.height),
              (r = e.x),
              (n = e.y),
              (this.vertices[0] = r),
              (this.vertices[1] = n),
              (this.vertices[2] = r + e.width),
              (this.vertices[3] = n),
              (this.vertices[4] = r + e.width),
              (this.vertices[5] = n + e.height),
              (this.vertices[6] = r),
              (this.vertices[7] = n + e.height),
              this.invalidate(),
              this
            );
          }),
          (e.prototype.invalidate = function () {
            return (
              this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this
            );
          }),
          e
        );
      })(Ve),
      qe = 0,
      Ke = (function () {
        function t(t, e) {
          (this.uniforms = t),
            (this.group = !0),
            (this.syncUniforms = {}),
            (this.dirtyId = 0),
            (this.id = qe++),
            (this.static = !!e);
        }
        return (
          (t.prototype.update = function () {
            this.dirtyId++;
          }),
          (t.prototype.add = function (e, r, n) {
            this.uniforms[e] = new t(r, n);
          }),
          (t.from = function (e, r) {
            return new t(e, r);
          }),
          t
        );
      })(),
      Ze = (function () {
        function t() {
          (this.renderTexture = null),
            (this.target = null),
            (this.legacy = !1),
            (this.resolution = 1),
            (this.sourceFrame = new Ot()),
            (this.destinationFrame = new Ot()),
            (this.filters = []);
        }
        return (
          (t.prototype.clear = function () {
            (this.target = null),
              (this.filters = null),
              (this.renderTexture = null);
          }),
          t
        );
      })(),
      Je = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.defaultFilterStack = [{}]),
            (r.texturePool = new Fe()),
            r.texturePool.setScreenSize(e.view),
            (r.statePool = []),
            (r.quad = new Ye()),
            (r.quadUv = new We()),
            (r.tempRect = new Ot()),
            (r.activeState = {}),
            (r.globalUniforms = new Ke(
              {
                outputFrame: r.tempRect,
                inputSize: new Float32Array(4),
                inputPixel: new Float32Array(4),
                inputClamp: new Float32Array(4),
                resolution: 1,
                filterArea: new Float32Array(4),
                filterClamp: new Float32Array(4),
              },
              !0
            )),
            (r.forceClear = !1),
            (r.useMaxPadding = !1),
            r
          );
        }
        return (
          pe(e, t),
          (e.prototype.push = function (t, e) {
            for (
              var r = this.renderer,
                n = this.defaultFilterStack,
                i = this.statePool.pop() || new Ze(),
                o = e[0].resolution,
                s = e[0].padding,
                a = e[0].autoFit,
                u = e[0].legacy,
                h = 1;
              h < e.length;
              h++
            ) {
              var c = e[h];
              (o = Math.min(o, c.resolution)),
                (s = this.useMaxPadding
                  ? Math.max(s, c.padding)
                  : s + c.padding),
                (a = a || c.autoFit),
                (u = u || c.legacy);
            }
            1 === n.length &&
              (this.defaultFilterStack[0].renderTexture =
                r.renderTexture.current),
              n.push(i),
              (i.resolution = o),
              (i.legacy = u),
              (i.target = t),
              i.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)),
              i.sourceFrame.pad(s),
              a && i.sourceFrame.fit(this.renderer.renderTexture.sourceFrame),
              i.sourceFrame.ceil(o),
              (i.renderTexture = this.getOptimalFilterTexture(
                i.sourceFrame.width,
                i.sourceFrame.height,
                o
              )),
              (i.filters = e),
              (i.destinationFrame.width = i.renderTexture.width),
              (i.destinationFrame.height = i.renderTexture.height),
              (i.renderTexture.filterFrame = i.sourceFrame),
              r.renderTexture.bind(i.renderTexture, i.sourceFrame),
              r.renderTexture.clear();
          }),
          (e.prototype.pop = function () {
            var t = this.defaultFilterStack,
              e = t.pop(),
              r = e.filters;
            this.activeState = e;
            var n = this.globalUniforms.uniforms;
            (n.outputFrame = e.sourceFrame), (n.resolution = e.resolution);
            var i = n.inputSize,
              o = n.inputPixel,
              s = n.inputClamp;
            if (
              ((i[0] = e.destinationFrame.width),
              (i[1] = e.destinationFrame.height),
              (i[2] = 1 / i[0]),
              (i[3] = 1 / i[1]),
              (o[0] = i[0] * e.resolution),
              (o[1] = i[1] * e.resolution),
              (o[2] = 1 / o[0]),
              (o[3] = 1 / o[1]),
              (s[0] = 0.5 * o[2]),
              (s[1] = 0.5 * o[3]),
              (s[2] = e.sourceFrame.width * i[2] - 0.5 * o[2]),
              (s[3] = e.sourceFrame.height * i[3] - 0.5 * o[3]),
              e.legacy)
            ) {
              var a = n.filterArea;
              (a[0] = e.destinationFrame.width),
                (a[1] = e.destinationFrame.height),
                (a[2] = e.sourceFrame.x),
                (a[3] = e.sourceFrame.y),
                (n.filterClamp = n.inputClamp);
            }
            this.globalUniforms.update();
            var u = t[t.length - 1];
            if (
              (e.renderTexture.framebuffer.multisample > 1 &&
                this.renderer.framebuffer.blit(),
              1 === r.length)
            )
              r[0].apply(this, e.renderTexture, u.renderTexture, j.BLEND, e),
                this.returnFilterTexture(e.renderTexture);
            else {
              var h = e.renderTexture,
                c = this.getOptimalFilterTexture(
                  h.width,
                  h.height,
                  e.resolution
                );
              c.filterFrame = h.filterFrame;
              var l = 0;
              for (l = 0; l < r.length - 1; ++l) {
                r[l].apply(this, h, c, j.CLEAR, e);
                var f = h;
                (h = c), (c = f);
              }
              r[l].apply(this, h, u.renderTexture, j.BLEND, e),
                this.returnFilterTexture(h),
                this.returnFilterTexture(c);
            }
            e.clear(), this.statePool.push(e);
          }),
          (e.prototype.bindAndClear = function (t, e) {
            void 0 === e && (e = j.CLEAR),
              this.renderer.renderTexture.bind(t, t ? t.filterFrame : null),
              "boolean" == typeof e &&
                ((e = e ? j.CLEAR : j.BLEND),
                vt(
                  "5.2.1",
                  "Use CLEAR_MODES when using clear applyFilter option"
                )),
              (e === j.CLEAR || (e === j.BLIT && this.forceClear)) &&
                this.renderer.renderTexture.clear();
          }),
          (e.prototype.applyFilter = function (t, e, r, n) {
            var i = this.renderer;
            this.bindAndClear(r, n),
              (t.uniforms.uSampler = e),
              (t.uniforms.filterGlobals = this.globalUniforms),
              i.state.set(t.state),
              i.shader.bind(t),
              t.legacy
                ? (this.quadUv.map(e._frame, e.filterFrame),
                  i.geometry.bind(this.quadUv),
                  i.geometry.draw(R.TRIANGLES))
                : (i.geometry.bind(this.quad),
                  i.geometry.draw(R.TRIANGLE_STRIP));
          }),
          (e.prototype.calculateSpriteMatrix = function (t, e) {
            var r = this.activeState,
              n = r.sourceFrame,
              i = r.destinationFrame,
              o = e._texture.orig,
              s = t.set(i.width, 0, 0, i.height, n.x, n.y),
              a = e.worldTransform.copyTo(Dt.TEMP_MATRIX);
            return (
              a.invert(),
              s.prepend(a),
              s.scale(1 / o.width, 1 / o.height),
              s.translate(e.anchor.x, e.anchor.y),
              s
            );
          }),
          (e.prototype.destroy = function () {
            this.texturePool.clear(!1);
          }),
          (e.prototype.getOptimalFilterTexture = function (t, e, r) {
            return (
              void 0 === r && (r = 1),
              this.texturePool.getOptimalTexture(t, e, r)
            );
          }),
          (e.prototype.getFilterTexture = function (t, e) {
            if ("number" == typeof t) {
              var r = t;
              (t = e), (e = r);
            }
            t = t || this.activeState.renderTexture;
            var n = this.texturePool.getOptimalTexture(
              t.width,
              t.height,
              e || t.resolution
            );
            return (n.filterFrame = t.filterFrame), n;
          }),
          (e.prototype.returnFilterTexture = function (t) {
            this.texturePool.returnTexture(t);
          }),
          (e.prototype.emptyPool = function () {
            this.texturePool.clear(!0);
          }),
          (e.prototype.resize = function () {
            this.texturePool.setScreenSize(this.renderer.view);
          }),
          e
        );
      })(Ae),
      $e = (function () {
        function t(t) {
          this.renderer = t;
        }
        return (
          (t.prototype.flush = function () {}),
          (t.prototype.destroy = function () {
            this.renderer = null;
          }),
          (t.prototype.start = function () {}),
          (t.prototype.stop = function () {
            this.flush();
          }),
          (t.prototype.render = function (t) {}),
          t
        );
      })(),
      Qe = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.emptyRenderer = new $e(e)),
            (r.currentRenderer = r.emptyRenderer),
            r
          );
        }
        return (
          pe(e, t),
          (e.prototype.setObjectRenderer = function (t) {
            this.currentRenderer !== t &&
              (this.currentRenderer.stop(),
              (this.currentRenderer = t),
              this.currentRenderer.start());
          }),
          (e.prototype.flush = function () {
            this.setObjectRenderer(this.emptyRenderer);
          }),
          (e.prototype.reset = function () {
            this.setObjectRenderer(this.emptyRenderer);
          }),
          (e.prototype.copyBoundTextures = function (t, e) {
            for (
              var r = this.renderer.texture.boundTextures, n = e - 1;
              n >= 0;
              --n
            )
              (t[n] = r[n] || null), t[n] && (t[n]._batchLocation = n);
          }),
          (e.prototype.boundArray = function (t, e, r, n) {
            for (
              var i = t.elements, o = t.ids, s = t.count, a = 0, u = 0;
              u < s;
              u++
            ) {
              var h = i[u],
                c = h._batchLocation;
              if (c >= 0 && c < n && e[c] === h) o[u] = c;
              else
                for (; a < n; ) {
                  var l = e[a];
                  if (!l || l._batchEnabled !== r || l._batchLocation !== a) {
                    (o[u] = a), (h._batchLocation = a), (e[a] = h);
                    break;
                  }
                  a++;
                }
            }
          }),
          e
        );
      })(Ae),
      tr = 0,
      er = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.webGLVersion = 1),
            (r.extensions = {}),
            (r.supports = { uint32Indices: !1 }),
            (r.handleContextLost = r.handleContextLost.bind(r)),
            (r.handleContextRestored = r.handleContextRestored.bind(r)),
            e.view.addEventListener(
              "webglcontextlost",
              r.handleContextLost,
              !1
            ),
            e.view.addEventListener(
              "webglcontextrestored",
              r.handleContextRestored,
              !1
            ),
            r
          );
        }
        return (
          pe(e, t),
          Object.defineProperty(e.prototype, "isLost", {
            get: function () {
              return !this.gl || this.gl.isContextLost();
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.contextChange = function (t) {
            (this.gl = t),
              (this.renderer.gl = t),
              (this.renderer.CONTEXT_UID = tr++),
              t.isContextLost() &&
                t.getExtension("WEBGL_lose_context") &&
                t.getExtension("WEBGL_lose_context").restoreContext();
          }),
          (e.prototype.initFromContext = function (t) {
            (this.gl = t),
              this.validateContext(t),
              (this.renderer.gl = t),
              (this.renderer.CONTEXT_UID = tr++),
              this.renderer.runners.contextChange.emit(t);
          }),
          (e.prototype.initFromOptions = function (t) {
            var e = this.createContext(this.renderer.view, t);
            this.initFromContext(e);
          }),
          (e.prototype.createContext = function (t, e) {
            var r;
            if (
              (V.PREFER_ENV >= P.WEBGL2 && (r = t.getContext("webgl2", e)), r)
            )
              this.webGLVersion = 2;
            else if (
              ((this.webGLVersion = 1),
              !(r =
                t.getContext("webgl", e) ||
                t.getContext("experimental-webgl", e)))
            )
              throw new Error(
                "This browser does not support WebGL. Try using the canvas renderer"
              );
            return (this.gl = r), this.getExtensions(), this.gl;
          }),
          (e.prototype.getExtensions = function () {
            var t = this.gl;
            1 === this.webGLVersion
              ? Object.assign(this.extensions, {
                  drawBuffers: t.getExtension("WEBGL_draw_buffers"),
                  depthTexture: t.getExtension("WEBGL_depth_texture"),
                  loseContext: t.getExtension("WEBGL_lose_context"),
                  vertexArrayObject:
                    t.getExtension("OES_vertex_array_object") ||
                    t.getExtension("MOZ_OES_vertex_array_object") ||
                    t.getExtension("WEBKIT_OES_vertex_array_object"),
                  anisotropicFiltering: t.getExtension(
                    "EXT_texture_filter_anisotropic"
                  ),
                  uint32ElementIndex: t.getExtension("OES_element_index_uint"),
                  floatTexture: t.getExtension("OES_texture_float"),
                  floatTextureLinear: t.getExtension(
                    "OES_texture_float_linear"
                  ),
                  textureHalfFloat: t.getExtension("OES_texture_half_float"),
                  textureHalfFloatLinear: t.getExtension(
                    "OES_texture_half_float_linear"
                  ),
                })
              : 2 === this.webGLVersion &&
                Object.assign(this.extensions, {
                  anisotropicFiltering: t.getExtension(
                    "EXT_texture_filter_anisotropic"
                  ),
                  colorBufferFloat: t.getExtension("EXT_color_buffer_float"),
                  floatTextureLinear: t.getExtension(
                    "OES_texture_float_linear"
                  ),
                });
          }),
          (e.prototype.handleContextLost = function (t) {
            t.preventDefault();
          }),
          (e.prototype.handleContextRestored = function () {
            this.renderer.runners.contextChange.emit(this.gl);
          }),
          (e.prototype.destroy = function () {
            var t = this.renderer.view;
            t.removeEventListener("webglcontextlost", this.handleContextLost),
              t.removeEventListener(
                "webglcontextrestored",
                this.handleContextRestored
              ),
              this.gl.useProgram(null),
              this.extensions.loseContext &&
                this.extensions.loseContext.loseContext();
          }),
          (e.prototype.postrender = function () {
            this.renderer.renderingToScreen && this.gl.flush();
          }),
          (e.prototype.validateContext = function (t) {
            t.getContextAttributes().stencil ||
              console.warn(
                "Provided WebGL context does not have a stencil buffer, masks may not render correctly"
              );
            var e =
              ("WebGL2RenderingContext" in window &&
                t instanceof window.WebGL2RenderingContext) ||
              !!t.getExtension("OES_element_index_uint");
            (this.supports.uint32Indices = e),
              e ||
                console.warn(
                  "Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly"
                );
          }),
          e
        );
      })(Ae),
      rr = function (t) {
        (this.framebuffer = t),
          (this.stencil = null),
          (this.dirtyId = 0),
          (this.dirtyFormat = 0),
          (this.dirtySize = 0),
          (this.multisample = z.NONE),
          (this.msaaBuffer = null),
          (this.blitFramebuffer = null);
      },
      nr = new Ot(),
      ir = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.managedFramebuffers = []),
            (r.unknownFramebuffer = new Ie(10, 10)),
            (r.msaaSamples = null),
            r
          );
        }
        return (
          pe(e, t),
          (e.prototype.contextChange = function () {
            var t = (this.gl = this.renderer.gl);
            if (
              ((this.CONTEXT_UID = this.renderer.CONTEXT_UID),
              (this.current = this.unknownFramebuffer),
              (this.viewport = new Ot()),
              (this.hasMRT = !0),
              (this.writeDepthTexture = !0),
              this.disposeAll(!0),
              1 === this.renderer.context.webGLVersion)
            ) {
              var e = this.renderer.context.extensions.drawBuffers,
                r = this.renderer.context.extensions.depthTexture;
              V.PREFER_ENV === P.WEBGL_LEGACY && ((e = null), (r = null)),
                e
                  ? (t.drawBuffers = function (t) {
                      return e.drawBuffersWEBGL(t);
                    })
                  : ((this.hasMRT = !1), (t.drawBuffers = function () {})),
                r || (this.writeDepthTexture = !1);
            } else
              this.msaaSamples = t.getInternalformatParameter(
                t.RENDERBUFFER,
                t.RGBA8,
                t.SAMPLES
              );
          }),
          (e.prototype.bind = function (t, e) {
            var r = this.gl;
            if (t) {
              var n =
                t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
              this.current !== t &&
                ((this.current = t),
                r.bindFramebuffer(r.FRAMEBUFFER, n.framebuffer)),
                n.dirtyId !== t.dirtyId &&
                  ((n.dirtyId = t.dirtyId),
                  n.dirtyFormat !== t.dirtyFormat
                    ? ((n.dirtyFormat = t.dirtyFormat),
                      this.updateFramebuffer(t))
                    : n.dirtySize !== t.dirtySize &&
                      ((n.dirtySize = t.dirtySize), this.resizeFramebuffer(t)));
              for (var i = 0; i < t.colorTextures.length; i++) {
                var o = t.colorTextures[i];
                this.renderer.texture.unbind(o.parentTextureArray || o);
              }
              t.depthTexture && this.renderer.texture.unbind(t.depthTexture),
                e
                  ? this.setViewport(e.x, e.y, e.width, e.height)
                  : this.setViewport(0, 0, t.width, t.height);
            } else
              this.current &&
                ((this.current = null), r.bindFramebuffer(r.FRAMEBUFFER, null)),
                e
                  ? this.setViewport(e.x, e.y, e.width, e.height)
                  : this.setViewport(
                      0,
                      0,
                      this.renderer.width,
                      this.renderer.height
                    );
          }),
          (e.prototype.setViewport = function (t, e, r, n) {
            var i = this.viewport;
            (i.width === r && i.height === n && i.x === t && i.y === e) ||
              ((i.x = t),
              (i.y = e),
              (i.width = r),
              (i.height = n),
              this.gl.viewport(t, e, r, n));
          }),
          Object.defineProperty(e.prototype, "size", {
            get: function () {
              return this.current
                ? {
                    x: 0,
                    y: 0,
                    width: this.current.width,
                    height: this.current.height,
                  }
                : {
                    x: 0,
                    y: 0,
                    width: this.renderer.width,
                    height: this.renderer.height,
                  };
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.clear = function (t, e, r, n, i) {
            void 0 === i && (i = C.COLOR | C.DEPTH);
            var o = this.gl;
            o.clearColor(t, e, r, n), o.clear(i);
          }),
          (e.prototype.initFramebuffer = function (t) {
            var e = this.gl,
              r = new rr(e.createFramebuffer());
            return (
              (r.multisample = this.detectSamples(t.multisample)),
              (t.glFramebuffers[this.CONTEXT_UID] = r),
              this.managedFramebuffers.push(t),
              t.disposeRunner.add(this),
              r
            );
          }),
          (e.prototype.resizeFramebuffer = function (t) {
            var e = this.gl,
              r = t.glFramebuffers[this.CONTEXT_UID];
            r.stencil &&
              (e.bindRenderbuffer(e.RENDERBUFFER, r.stencil),
              e.renderbufferStorage(
                e.RENDERBUFFER,
                e.DEPTH_STENCIL,
                t.width,
                t.height
              ));
            for (var n = t.colorTextures, i = 0; i < n.length; i++)
              this.renderer.texture.bind(n[i], 0);
            t.depthTexture && this.renderer.texture.bind(t.depthTexture, 0);
          }),
          (e.prototype.updateFramebuffer = function (t) {
            var e = this.gl,
              r = t.glFramebuffers[this.CONTEXT_UID],
              n = t.colorTextures.length;
            e.drawBuffers || (n = Math.min(n, 1)),
              r.multisample > 1 &&
                ((r.msaaBuffer = e.createRenderbuffer()),
                e.bindRenderbuffer(e.RENDERBUFFER, r.msaaBuffer),
                e.renderbufferStorageMultisample(
                  e.RENDERBUFFER,
                  r.multisample,
                  e.RGBA8,
                  t.width,
                  t.height
                ),
                e.framebufferRenderbuffer(
                  e.FRAMEBUFFER,
                  e.COLOR_ATTACHMENT0,
                  e.RENDERBUFFER,
                  r.msaaBuffer
                ));
            for (var i = [], o = 0; o < n; o++)
              if (!(0 === o && r.multisample > 1)) {
                var s = t.colorTextures[o],
                  a = s.parentTextureArray || s;
                this.renderer.texture.bind(a, 0),
                  e.framebufferTexture2D(
                    e.FRAMEBUFFER,
                    e.COLOR_ATTACHMENT0 + o,
                    s.target,
                    a._glTextures[this.CONTEXT_UID].texture,
                    0
                  ),
                  i.push(e.COLOR_ATTACHMENT0 + o);
              }
            if (
              (i.length > 1 && e.drawBuffers(i), t.depthTexture) &&
              this.writeDepthTexture
            ) {
              var u = t.depthTexture;
              this.renderer.texture.bind(u, 0),
                e.framebufferTexture2D(
                  e.FRAMEBUFFER,
                  e.DEPTH_ATTACHMENT,
                  e.TEXTURE_2D,
                  u._glTextures[this.CONTEXT_UID].texture,
                  0
                );
            }
            r.stencil ||
              (!t.stencil && !t.depth) ||
              ((r.stencil = e.createRenderbuffer()),
              e.bindRenderbuffer(e.RENDERBUFFER, r.stencil),
              e.renderbufferStorage(
                e.RENDERBUFFER,
                e.DEPTH_STENCIL,
                t.width,
                t.height
              ),
              t.depthTexture ||
                e.framebufferRenderbuffer(
                  e.FRAMEBUFFER,
                  e.DEPTH_STENCIL_ATTACHMENT,
                  e.RENDERBUFFER,
                  r.stencil
                ));
          }),
          (e.prototype.detectSamples = function (t) {
            var e = this.msaaSamples,
              r = z.NONE;
            if (t <= 1 || null === e) return r;
            for (var n = 0; n < e.length; n++)
              if (e[n] <= t) {
                r = e[n];
                break;
              }
            return 1 === r && (r = z.NONE), r;
          }),
          (e.prototype.blit = function (t, e, r) {
            var n = this.current,
              i = this.renderer,
              o = this.gl,
              s = this.CONTEXT_UID;
            if (2 === i.context.webGLVersion && n) {
              var a = n.glFramebuffers[s];
              if (a) {
                if (!t) {
                  if (a.multisample <= 1) return;
                  a.blitFramebuffer ||
                    ((a.blitFramebuffer = new Ie(n.width, n.height)),
                    a.blitFramebuffer.addColorTexture(0, n.colorTextures[0])),
                    ((t = a.blitFramebuffer).width = n.width),
                    (t.height = n.height);
                }
                e || (((e = nr).width = n.width), (e.height = n.height)),
                  r || (r = e);
                var u = e.width === r.width && e.height === r.height;
                this.bind(t),
                  o.bindFramebuffer(o.READ_FRAMEBUFFER, a.framebuffer),
                  o.blitFramebuffer(
                    e.x,
                    e.y,
                    e.width,
                    e.height,
                    r.x,
                    r.y,
                    r.width,
                    r.height,
                    o.COLOR_BUFFER_BIT,
                    u ? o.NEAREST : o.LINEAR
                  );
              }
            }
          }),
          (e.prototype.disposeFramebuffer = function (t, e) {
            var r = t.glFramebuffers[this.CONTEXT_UID],
              n = this.gl;
            if (r) {
              delete t.glFramebuffers[this.CONTEXT_UID];
              var i = this.managedFramebuffers.indexOf(t);
              i >= 0 && this.managedFramebuffers.splice(i, 1),
                t.disposeRunner.remove(this),
                e ||
                  (n.deleteFramebuffer(r.framebuffer),
                  r.stencil && n.deleteRenderbuffer(r.stencil));
            }
          }),
          (e.prototype.disposeAll = function (t) {
            var e = this.managedFramebuffers;
            this.managedFramebuffers = [];
            for (var r = 0; r < e.length; r++) this.disposeFramebuffer(e[r], t);
          }),
          (e.prototype.forceStencil = function () {
            var t = this.current;
            if (t) {
              var e = t.glFramebuffers[this.CONTEXT_UID];
              if (e && !e.stencil) {
                t.enableStencil();
                var r = t.width,
                  n = t.height,
                  i = this.gl,
                  o = i.createRenderbuffer();
                i.bindRenderbuffer(i.RENDERBUFFER, o),
                  i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, r, n),
                  (e.stencil = o),
                  i.framebufferRenderbuffer(
                    i.FRAMEBUFFER,
                    i.DEPTH_STENCIL_ATTACHMENT,
                    i.RENDERBUFFER,
                    o
                  );
              }
            }
          }),
          (e.prototype.reset = function () {
            (this.current = this.unknownFramebuffer),
              (this.viewport = new Ot());
          }),
          e
        );
      })(Ae),
      or = function (t) {
        (this.buffer = t || null),
          (this.updateID = -1),
          (this.byteLength = -1),
          (this.refCount = 0);
      },
      sr = { 5126: 4, 5123: 2, 5121: 1 },
      ar = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r._activeGeometry = null),
            (r._activeVao = null),
            (r.hasVao = !0),
            (r.hasInstance = !0),
            (r.canUseUInt32ElementIndex = !1),
            (r.managedGeometries = {}),
            (r.managedBuffers = {}),
            r
          );
        }
        return (
          pe(e, t),
          (e.prototype.contextChange = function () {
            this.disposeAll(!0);
            var t = (this.gl = this.renderer.gl),
              e = this.renderer.context;
            if (
              ((this.CONTEXT_UID = this.renderer.CONTEXT_UID),
              !t.createVertexArray)
            ) {
              var r = this.renderer.context.extensions.vertexArrayObject;
              V.PREFER_ENV === P.WEBGL_LEGACY && (r = null),
                r
                  ? ((t.createVertexArray = function () {
                      return r.createVertexArrayOES();
                    }),
                    (t.bindVertexArray = function (t) {
                      return r.bindVertexArrayOES(t);
                    }),
                    (t.deleteVertexArray = function (t) {
                      return r.deleteVertexArrayOES(t);
                    }))
                  : ((this.hasVao = !1),
                    (t.createVertexArray = function () {
                      return null;
                    }),
                    (t.bindVertexArray = function () {
                      return null;
                    }),
                    (t.deleteVertexArray = function () {
                      return null;
                    }));
            }
            if (!t.vertexAttribDivisor) {
              var n = t.getExtension("ANGLE_instanced_arrays");
              n
                ? ((t.vertexAttribDivisor = function (t, e) {
                    return n.vertexAttribDivisorANGLE(t, e);
                  }),
                  (t.drawElementsInstanced = function (t, e, r, i, o) {
                    return n.drawElementsInstancedANGLE(t, e, r, i, o);
                  }),
                  (t.drawArraysInstanced = function (t, e, r, i) {
                    return n.drawArraysInstancedANGLE(t, e, r, i);
                  }))
                : (this.hasInstance = !1);
            }
            this.canUseUInt32ElementIndex =
              2 === e.webGLVersion || !!e.extensions.uint32ElementIndex;
          }),
          (e.prototype.bind = function (t, e) {
            e = e || this.renderer.shader.shader;
            var r = this.gl,
              n = t.glVertexArrayObjects[this.CONTEXT_UID];
            n ||
              ((this.managedGeometries[t.id] = t),
              t.disposeRunner.add(this),
              (t.glVertexArrayObjects[this.CONTEXT_UID] = n = {}));
            var i = n[e.program.id] || this.initGeometryVao(t, e.program);
            (this._activeGeometry = t),
              this._activeVao !== i &&
                ((this._activeVao = i),
                this.hasVao
                  ? r.bindVertexArray(i)
                  : this.activateVao(t, e.program)),
              this.updateBuffers();
          }),
          (e.prototype.reset = function () {
            this.unbind();
          }),
          (e.prototype.updateBuffers = function () {
            for (
              var t = this._activeGeometry, e = this.gl, r = 0;
              r < t.buffers.length;
              r++
            ) {
              var n = t.buffers[r],
                i = n._glBuffers[this.CONTEXT_UID];
              if (n._updateID !== i.updateID) {
                i.updateID = n._updateID;
                var o = n.index ? e.ELEMENT_ARRAY_BUFFER : e.ARRAY_BUFFER;
                if (
                  (e.bindBuffer(o, i.buffer),
                  (this._boundBuffer = i),
                  i.byteLength >= n.data.byteLength)
                )
                  e.bufferSubData(o, 0, n.data);
                else {
                  var s = n.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
                  (i.byteLength = n.data.byteLength),
                    e.bufferData(o, n.data, s);
                }
              }
            }
          }),
          (e.prototype.checkCompatibility = function (t, e) {
            var r = t.attributes,
              n = e.attributeData;
            for (var i in n)
              if (!r[i])
                throw new Error(
                  'shader and geometry incompatible, geometry missing the "' +
                    i +
                    '" attribute'
                );
          }),
          (e.prototype.getSignature = function (t, e) {
            var r = t.attributes,
              n = e.attributeData,
              i = ["g", t.id];
            for (var o in r) n[o] && i.push(o);
            return i.join("-");
          }),
          (e.prototype.initGeometryVao = function (t, e) {
            this.checkCompatibility(t, e);
            var r = this.gl,
              n = this.CONTEXT_UID,
              i = this.getSignature(t, e),
              o = t.glVertexArrayObjects[this.CONTEXT_UID],
              s = o[i];
            if (s) return (o[e.id] = s), s;
            var a = t.buffers,
              u = t.attributes,
              h = {},
              c = {};
            for (var l in a) (h[l] = 0), (c[l] = 0);
            for (var l in u)
              !u[l].size && e.attributeData[l]
                ? (u[l].size = e.attributeData[l].size)
                : u[l].size ||
                  console.warn(
                    "PIXI Geometry attribute '" +
                      l +
                      "' size cannot be determined (likely the bound shader does not have the attribute)"
                  ),
                (h[u[l].buffer] += u[l].size * sr[u[l].type]);
            for (var l in u) {
              var f = u[l],
                p = f.size;
              void 0 === f.stride &&
                (h[f.buffer] === p * sr[f.type]
                  ? (f.stride = 0)
                  : (f.stride = h[f.buffer])),
                void 0 === f.start &&
                  ((f.start = c[f.buffer]), (c[f.buffer] += p * sr[f.type]));
            }
            (s = r.createVertexArray()), r.bindVertexArray(s);
            for (var d = 0; d < a.length; d++) {
              var v = a[d];
              v._glBuffers[n] ||
                ((v._glBuffers[n] = new or(r.createBuffer())),
                (this.managedBuffers[v.id] = v),
                v.disposeRunner.add(this)),
                v._glBuffers[n].refCount++;
            }
            return (
              this.activateVao(t, e),
              (this._activeVao = s),
              (o[e.id] = s),
              (o[i] = s),
              s
            );
          }),
          (e.prototype.disposeBuffer = function (t, e) {
            if (this.managedBuffers[t.id]) {
              delete this.managedBuffers[t.id];
              var r = t._glBuffers[this.CONTEXT_UID],
                n = this.gl;
              t.disposeRunner.remove(this),
                r &&
                  (e || n.deleteBuffer(r.buffer),
                  delete t._glBuffers[this.CONTEXT_UID]);
            }
          }),
          (e.prototype.disposeGeometry = function (t, e) {
            if (this.managedGeometries[t.id]) {
              delete this.managedGeometries[t.id];
              var r = t.glVertexArrayObjects[this.CONTEXT_UID],
                n = this.gl,
                i = t.buffers;
              if ((t.disposeRunner.remove(this), r)) {
                for (var o = 0; o < i.length; o++) {
                  var s = i[o]._glBuffers[this.CONTEXT_UID];
                  s.refCount--,
                    0 !== s.refCount || e || this.disposeBuffer(i[o], e);
                }
                if (!e)
                  for (var a in r)
                    if ("g" === a[0]) {
                      var u = r[a];
                      this._activeVao === u && this.unbind(),
                        n.deleteVertexArray(u);
                    }
                delete t.glVertexArrayObjects[this.CONTEXT_UID];
              }
            }
          }),
          (e.prototype.disposeAll = function (t) {
            for (
              var e = Object.keys(this.managedGeometries), r = 0;
              r < e.length;
              r++
            )
              this.disposeGeometry(this.managedGeometries[e[r]], t);
            e = Object.keys(this.managedBuffers);
            for (r = 0; r < e.length; r++)
              this.disposeBuffer(this.managedBuffers[e[r]], t);
          }),
          (e.prototype.activateVao = function (t, e) {
            var r = this.gl,
              n = this.CONTEXT_UID,
              i = t.buffers,
              o = t.attributes;
            t.indexBuffer &&
              r.bindBuffer(
                r.ELEMENT_ARRAY_BUFFER,
                t.indexBuffer._glBuffers[n].buffer
              );
            var s = null;
            for (var a in o) {
              var u = o[a],
                h = i[u.buffer]._glBuffers[n];
              if (e.attributeData[a]) {
                s !== h && (r.bindBuffer(r.ARRAY_BUFFER, h.buffer), (s = h));
                var c = e.attributeData[a].location;
                if (
                  (r.enableVertexAttribArray(c),
                  r.vertexAttribPointer(
                    c,
                    u.size,
                    u.type || r.FLOAT,
                    u.normalized,
                    u.stride,
                    u.start
                  ),
                  u.instance)
                ) {
                  if (!this.hasInstance)
                    throw new Error(
                      "geometry error, GPU Instancing is not supported on this device"
                    );
                  r.vertexAttribDivisor(c, 1);
                }
              }
            }
          }),
          (e.prototype.draw = function (t, e, r, n) {
            var i = this.gl,
              o = this._activeGeometry;
            if (o.indexBuffer) {
              var s = o.indexBuffer.data.BYTES_PER_ELEMENT,
                a = 2 === s ? i.UNSIGNED_SHORT : i.UNSIGNED_INT;
              2 === s || (4 === s && this.canUseUInt32ElementIndex)
                ? o.instanced
                  ? i.drawElementsInstanced(
                      t,
                      e || o.indexBuffer.data.length,
                      a,
                      (r || 0) * s,
                      n || 1
                    )
                  : i.drawElements(
                      t,
                      e || o.indexBuffer.data.length,
                      a,
                      (r || 0) * s
                    )
                : console.warn("unsupported index buffer type: uint32");
            } else
              o.instanced
                ? i.drawArraysInstanced(t, r, e || o.getSize(), n || 1)
                : i.drawArrays(t, r, e || o.getSize());
            return this;
          }),
          (e.prototype.unbind = function () {
            this.gl.bindVertexArray(null),
              (this._activeVao = null),
              (this._activeGeometry = null);
          }),
          e
        );
      })(Ae),
      ur = (function () {
        function t(t) {
          void 0 === t && (t = null),
            (this.type = X.NONE),
            (this.autoDetect = !0),
            (this.maskObject = t || null),
            (this.pooled = !1),
            (this.isMaskData = !0),
            (this._stencilCounter = 0),
            (this._scissorCounter = 0),
            (this._scissorRect = null),
            (this._target = null);
        }
        return (
          (t.prototype.reset = function () {
            this.pooled &&
              ((this.maskObject = null),
              (this.type = X.NONE),
              (this.autoDetect = !0)),
              (this._target = null);
          }),
          (t.prototype.copyCountersOrReset = function (t) {
            t
              ? ((this._stencilCounter = t._stencilCounter),
                (this._scissorCounter = t._scissorCounter),
                (this._scissorRect = t._scissorRect))
              : ((this._stencilCounter = 0),
                (this._scissorCounter = 0),
                (this._scissorRect = null));
          }),
          t
        );
      })();
    function hr(t, e, r) {
      var n = t.createShader(e);
      return t.shaderSource(n, r), t.compileShader(n), n;
    }
    function cr(t, e, r, n) {
      var i = hr(t, t.VERTEX_SHADER, e),
        o = hr(t, t.FRAGMENT_SHADER, r),
        s = t.createProgram();
      if ((t.attachShader(s, i), t.attachShader(s, o), n))
        for (var a in n) t.bindAttribLocation(s, n[a], a);
      return (
        t.linkProgram(s),
        t.getProgramParameter(s, t.LINK_STATUS) ||
          (t.getShaderParameter(i, t.COMPILE_STATUS) ||
            (console.warn(e), console.error(t.getShaderInfoLog(i))),
          t.getShaderParameter(o, t.COMPILE_STATUS) ||
            (console.warn(r), console.error(t.getShaderInfoLog(o))),
          console.error("Pixi.js Error: Could not initialize shader."),
          console.error(
            "gl.VALIDATE_STATUS",
            t.getProgramParameter(s, t.VALIDATE_STATUS)
          ),
          console.error("gl.getError()", t.getError()),
          "" !== t.getProgramInfoLog(s) &&
            console.warn(
              "Pixi.js Warning: gl.getProgramInfoLog()",
              t.getProgramInfoLog(s)
            ),
          t.deleteProgram(s),
          (s = null)),
        t.deleteShader(i),
        t.deleteShader(o),
        s
      );
    }
    function lr(t) {
      for (var e = new Array(t), r = 0; r < e.length; r++) e[r] = !1;
      return e;
    }
    function fr(t, e) {
      switch (t) {
        case "float":
          return 0;
        case "vec2":
          return new Float32Array(2 * e);
        case "vec3":
          return new Float32Array(3 * e);
        case "vec4":
          return new Float32Array(4 * e);
        case "int":
        case "sampler2D":
        case "sampler2DArray":
          return 0;
        case "ivec2":
          return new Int32Array(2 * e);
        case "ivec3":
          return new Int32Array(3 * e);
        case "ivec4":
          return new Int32Array(4 * e);
        case "bool":
          return !1;
        case "bvec2":
          return lr(2 * e);
        case "bvec3":
          return lr(3 * e);
        case "bvec4":
          return lr(4 * e);
        case "mat2":
          return new Float32Array([1, 0, 0, 1]);
        case "mat3":
          return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
        case "mat4":
          return new Float32Array([
            1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
          ]);
      }
      return null;
    }
    var pr,
      dr = {},
      vr = dr;
    function gr() {
      if (vr === dr || (vr && vr.isContextLost())) {
        var t = document.createElement("canvas"),
          e = void 0;
        V.PREFER_ENV >= P.WEBGL2 && (e = t.getContext("webgl2", {})),
          e ||
            ((e =
              t.getContext("webgl", {}) ||
              t.getContext("experimental-webgl", {}))
              ? e.getExtension("WEBGL_draw_buffers")
              : (e = null)),
          (vr = e);
      }
      return vr;
    }
    function yr(t, e, r) {
      if ("precision" !== t.substring(0, 9)) {
        var n = e;
        return (
          e === G.HIGH && r !== G.HIGH && (n = G.MEDIUM),
          "precision " + n + " float;\n" + t
        );
      }
      return r !== G.HIGH && "precision highp" === t.substring(0, 15)
        ? t.replace("precision highp", "precision mediump")
        : t;
    }
    var mr = {
      float: 1,
      vec2: 2,
      vec3: 3,
      vec4: 4,
      int: 1,
      ivec2: 2,
      ivec3: 3,
      ivec4: 4,
      bool: 1,
      bvec2: 2,
      bvec3: 3,
      bvec4: 4,
      mat2: 4,
      mat3: 9,
      mat4: 16,
      sampler2D: 1,
    };
    function _r(t) {
      return mr[t];
    }
    var xr = null,
      br = {
        FLOAT: "float",
        FLOAT_VEC2: "vec2",
        FLOAT_VEC3: "vec3",
        FLOAT_VEC4: "vec4",
        INT: "int",
        INT_VEC2: "ivec2",
        INT_VEC3: "ivec3",
        INT_VEC4: "ivec4",
        BOOL: "bool",
        BOOL_VEC2: "bvec2",
        BOOL_VEC3: "bvec3",
        BOOL_VEC4: "bvec4",
        FLOAT_MAT2: "mat2",
        FLOAT_MAT3: "mat3",
        FLOAT_MAT4: "mat4",
        SAMPLER_2D: "sampler2D",
        SAMPLER_CUBE: "samplerCube",
        SAMPLER_2D_ARRAY: "sampler2DArray",
      };
    function Er(t, e) {
      if (!xr) {
        var r = Object.keys(br);
        xr = {};
        for (var n = 0; n < r.length; ++n) {
          var i = r[n];
          xr[t[i]] = br[i];
        }
      }
      return xr[e];
    }
    var wr = [
        {
          test: function (t) {
            return "float" === t.type && 1 === t.size;
          },
          code: function (t) {
            return (
              '\n            if(uv["' +
              t +
              '"] !== ud["' +
              t +
              '"].value)\n            {\n                ud["' +
              t +
              '"].value = uv["' +
              t +
              '"]\n                gl.uniform1f(ud["' +
              t +
              '"].location, uv["' +
              t +
              '"])\n            }\n            '
            );
          },
        },
        {
          test: function (t) {
            return (
              ("sampler2D" === t.type ||
                "samplerCube" === t.type ||
                "sampler2DArray" === t.type) &&
              1 === t.size &&
              !t.isArray
            );
          },
          code: function (t) {
            return (
              't = syncData.textureCount++;\n\n            renderer.texture.bind(uv["' +
              t +
              '"], t);\n\n            if(ud["' +
              t +
              '"].value !== t)\n            {\n                ud["' +
              t +
              '"].value = t;\n                gl.uniform1i(ud["' +
              t +
              '"].location, t);\n; // eslint-disable-line max-len\n            }'
            );
          },
        },
        {
          test: function (t, e) {
            return "mat3" === t.type && 1 === t.size && void 0 !== e.a;
          },
          code: function (t) {
            return (
              '\n            gl.uniformMatrix3fv(ud["' +
              t +
              '"].location, false, uv["' +
              t +
              '"].toArray(true));\n            '
            );
          },
        },
        {
          test: function (t, e) {
            return "vec2" === t.type && 1 === t.size && void 0 !== e.x;
          },
          code: function (t) {
            return (
              '\n                cv = ud["' +
              t +
              '"].value;\n                v = uv["' +
              t +
              '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["' +
              t +
              '"].location, v.x, v.y);\n                }'
            );
          },
        },
        {
          test: function (t) {
            return "vec2" === t.type && 1 === t.size;
          },
          code: function (t) {
            return (
              '\n                cv = ud["' +
              t +
              '"].value;\n                v = uv["' +
              t +
              '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["' +
              t +
              '"].location, v[0], v[1]);\n                }\n            '
            );
          },
        },
        {
          test: function (t, e) {
            return "vec4" === t.type && 1 === t.size && void 0 !== e.width;
          },
          code: function (t) {
            return (
              '\n                cv = ud["' +
              t +
              '"].value;\n                v = uv["' +
              t +
              '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["' +
              t +
              '"].location, v.x, v.y, v.width, v.height)\n                }'
            );
          },
        },
        {
          test: function (t) {
            return "vec4" === t.type && 1 === t.size;
          },
          code: function (t) {
            return (
              '\n                cv = ud["' +
              t +
              '"].value;\n                v = uv["' +
              t +
              '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["' +
              t +
              '"].location, v[0], v[1], v[2], v[3])\n                }'
            );
          },
        },
      ],
      Tr = {
        float:
          "\n    if(cv !== v)\n    {\n        cv.v = v;\n        gl.uniform1f(location, v)\n    }",
        vec2: "\n    if(cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        gl.uniform2f(location, v[0], v[1])\n    }",
        vec3: "\n    if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
        vec4: "gl.uniform4f(location, v[0], v[1], v[2], v[3])",
        int: "gl.uniform1i(location, v)",
        ivec2: "gl.uniform2i(location, v[0], v[1])",
        ivec3: "gl.uniform3i(location, v[0], v[1], v[2])",
        ivec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
        bool: "gl.uniform1i(location, v)",
        bvec2: "gl.uniform2i(location, v[0], v[1])",
        bvec3: "gl.uniform3i(location, v[0], v[1], v[2])",
        bvec4: "gl.uniform4i(location, v[0], v[1], v[2], v[3])",
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        sampler2D: "gl.uniform1i(location, v)",
        samplerCube: "gl.uniform1i(location, v)",
        sampler2DArray: "gl.uniform1i(location, v)",
      },
      Sr = {
        float: "gl.uniform1fv(location, v)",
        vec2: "gl.uniform2fv(location, v)",
        vec3: "gl.uniform3fv(location, v)",
        vec4: "gl.uniform4fv(location, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        int: "gl.uniform1iv(location, v)",
        ivec2: "gl.uniform2iv(location, v)",
        ivec3: "gl.uniform3iv(location, v)",
        ivec4: "gl.uniform4iv(location, v)",
        bool: "gl.uniform1iv(location, v)",
        bvec2: "gl.uniform2iv(location, v)",
        bvec3: "gl.uniform3iv(location, v)",
        bvec4: "gl.uniform4iv(location, v)",
        sampler2D: "gl.uniform1iv(location, v)",
        samplerCube: "gl.uniform1iv(location, v)",
        sampler2DArray: "gl.uniform1iv(location, v)",
      };
    var Or,
      Ar = [
        "precision mediump float;",
        "void main(void){",
        "float test = 0.1;",
        "%forloop%",
        "gl_FragColor = vec4(0.0);",
        "}",
      ].join("\n");
    function Pr(t) {
      for (var e = "", r = 0; r < t; ++r)
        r > 0 && (e += "\nelse "),
          r < t - 1 && (e += "if(test == " + r + ".0){}");
      return e;
    }
    var Ir = 0,
      Cr = {},
      Mr = (function () {
        function t(e, r, n) {
          void 0 === n && (n = "pixi-shader"),
            (this.id = Ir++),
            (this.vertexSrc = e || t.defaultVertexSrc),
            (this.fragmentSrc = r || t.defaultFragmentSrc),
            (this.vertexSrc = this.vertexSrc.trim()),
            (this.fragmentSrc = this.fragmentSrc.trim()),
            "#version" !== this.vertexSrc.substring(0, 8) &&
              ((n = n.replace(/\s+/g, "-")),
              Cr[n] ? (Cr[n]++, (n += "-" + Cr[n])) : (Cr[n] = 1),
              (this.vertexSrc =
                "#define SHADER_NAME " + n + "\n" + this.vertexSrc),
              (this.fragmentSrc =
                "#define SHADER_NAME " + n + "\n" + this.fragmentSrc),
              (this.vertexSrc = yr(this.vertexSrc, V.PRECISION_VERTEX, G.HIGH)),
              (this.fragmentSrc = yr(
                this.fragmentSrc,
                V.PRECISION_FRAGMENT,
                (function () {
                  if (!pr) {
                    pr = G.MEDIUM;
                    var t = gr();
                    if (t && t.getShaderPrecisionFormat) {
                      var e = t.getShaderPrecisionFormat(
                        t.FRAGMENT_SHADER,
                        t.HIGH_FLOAT
                      );
                      pr = e.precision ? G.HIGH : G.MEDIUM;
                    }
                  }
                  return pr;
                })()
              ))),
            this.extractData(this.vertexSrc, this.fragmentSrc),
            (this.glPrograms = {}),
            (this.syncUniforms = null);
        }
        return (
          (t.prototype.extractData = function (t, e) {
            var r = gr();
            if (r) {
              var n = cr(r, t, e);
              (this.attributeData = this.getAttributeData(n, r)),
                (this.uniformData = this.getUniformData(n, r)),
                r.deleteProgram(n);
            } else (this.uniformData = {}), (this.attributeData = {});
          }),
          (t.prototype.getAttributeData = function (t, e) {
            for (
              var r = {},
                n = [],
                i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES),
                o = 0;
              o < i;
              o++
            ) {
              var s = e.getActiveAttrib(t, o),
                a = Er(e, s.type),
                u = { type: a, name: s.name, size: _r(a), location: 0 };
              (r[s.name] = u), n.push(u);
            }
            n.sort(function (t, e) {
              return t.name > e.name ? 1 : -1;
            });
            for (o = 0; o < n.length; o++) n[o].location = o;
            return r;
          }),
          (t.prototype.getUniformData = function (t, e) {
            for (
              var r = {},
                n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS),
                i = 0;
              i < n;
              i++
            ) {
              var o = e.getActiveUniform(t, i),
                s = o.name.replace(/\[.*?\]$/, ""),
                a = o.name.match(/\[.*?\]$/),
                u = Er(e, o.type);
              r[s] = {
                type: u,
                size: o.size,
                isArray: a,
                value: fr(u, o.size),
              };
            }
            return r;
          }),
          Object.defineProperty(t, "defaultVertexSrc", {
            get: function () {
              return "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n";
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, "defaultFragmentSrc", {
            get: function () {
              return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.from = function (e, r, n) {
            var i = e + r,
              o = gt[i];
            return o || (gt[i] = o = new t(e, r, n)), o;
          }),
          t
        );
      })(),
      Rr = (function () {
        function t(t, e) {
          for (var r in ((this.program = t),
          (this.uniformGroup = e
            ? e instanceof Ke
              ? e
              : new Ke(e)
            : new Ke({})),
          t.uniformData))
            this.uniformGroup.uniforms[r] instanceof Array &&
              (this.uniformGroup.uniforms[r] = new Float32Array(
                this.uniformGroup.uniforms[r]
              ));
        }
        return (
          (t.prototype.checkUniformExists = function (t, e) {
            if (e.uniforms[t]) return !0;
            for (var r in e.uniforms) {
              var n = e.uniforms[r];
              if (n.group && this.checkUniformExists(t, n)) return !0;
            }
            return !1;
          }),
          (t.prototype.destroy = function () {
            this.uniformGroup = null;
          }),
          Object.defineProperty(t.prototype, "uniforms", {
            get: function () {
              return this.uniformGroup.uniforms;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.from = function (e, r, n) {
            return new t(Mr.from(e, r), n);
          }),
          t
        );
      })(),
      Dr = (function () {
        function t() {
          (this.data = 0),
            (this.blendMode = M.NORMAL),
            (this.polygonOffset = 0),
            (this.blend = !0);
        }
        return (
          Object.defineProperty(t.prototype, "blend", {
            get: function () {
              return !!(1 & this.data);
            },
            set: function (t) {
              !!(1 & this.data) !== t && (this.data ^= 1);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "offsets", {
            get: function () {
              return !!(2 & this.data);
            },
            set: function (t) {
              !!(2 & this.data) !== t && (this.data ^= 2);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "culling", {
            get: function () {
              return !!(4 & this.data);
            },
            set: function (t) {
              !!(4 & this.data) !== t && (this.data ^= 4);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "depthTest", {
            get: function () {
              return !!(8 & this.data);
            },
            set: function (t) {
              !!(8 & this.data) !== t && (this.data ^= 8);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "clockwiseFrontFace", {
            get: function () {
              return !!(16 & this.data);
            },
            set: function (t) {
              !!(16 & this.data) !== t && (this.data ^= 16);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "blendMode", {
            get: function () {
              return this._blendMode;
            },
            set: function (t) {
              (this.blend = t !== M.NONE), (this._blendMode = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "polygonOffset", {
            get: function () {
              return this._polygonOffset;
            },
            set: function (t) {
              (this.offsets = !!t), (this._polygonOffset = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.for2d = function () {
            var e = new t();
            return (e.depthTest = !1), (e.blend = !0), e;
          }),
          t
        );
      })(),
      Lr = (function (t) {
        function e(r, n, i) {
          var o = this,
            s = Mr.from(r || e.defaultVertexSrc, n || e.defaultFragmentSrc);
          return (
            ((o = t.call(this, s, i) || this).padding = 0),
            (o.resolution = V.FILTER_RESOLUTION),
            (o.enabled = !0),
            (o.autoFit = !0),
            (o.legacy = !!o.program.attributeData.aTextureCoord),
            (o.state = new Dr()),
            o
          );
        }
        return (
          pe(e, t),
          (e.prototype.apply = function (t, e, r, n, i) {
            t.applyFilter(this, e, r, n);
          }),
          Object.defineProperty(e.prototype, "blendMode", {
            get: function () {
              return this.state.blendMode;
            },
            set: function (t) {
              this.state.blendMode = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e, "defaultVertexSrc", {
            get: function () {
              return "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e, "defaultFragmentSrc", {
            get: function () {
              return "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n";
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(Rr),
      Nr = new Dt(),
      Fr = (function () {
        function t(t, e) {
          (this._texture = t),
            (this.mapCoord = new Dt()),
            (this.uClampFrame = new Float32Array(4)),
            (this.uClampOffset = new Float32Array(2)),
            (this._updateID = -1),
            (this.clampOffset = 0),
            (this.clampMargin = void 0 === e ? 0.5 : e),
            (this.isSimple = !1);
        }
        return (
          Object.defineProperty(t.prototype, "texture", {
            get: function () {
              return this._texture;
            },
            set: function (t) {
              (this._texture = t), (this._updateID = -1);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.multiplyUvs = function (t, e) {
            void 0 === e && (e = t);
            for (var r = this.mapCoord, n = 0; n < t.length; n += 2) {
              var i = t[n],
                o = t[n + 1];
              (e[n] = i * r.a + o * r.c + r.tx),
                (e[n + 1] = i * r.b + o * r.d + r.ty);
            }
            return e;
          }),
          (t.prototype.update = function (t) {
            var e = this._texture;
            if (!e || !e.valid) return !1;
            if (!t && this._updateID === e._updateID) return !1;
            this._updateID = e._updateID;
            var r = e._uvs;
            this.mapCoord.set(
              r.x1 - r.x0,
              r.y1 - r.y0,
              r.x3 - r.x0,
              r.y3 - r.y0,
              r.x0,
              r.y0
            );
            var n = e.orig,
              i = e.trim;
            i &&
              (Nr.set(
                n.width / i.width,
                0,
                0,
                n.height / i.height,
                -i.x / i.width,
                -i.y / i.height
              ),
              this.mapCoord.append(Nr));
            var o = e.baseTexture,
              s = this.uClampFrame,
              a = this.clampMargin / o.resolution,
              u = this.clampOffset;
            return (
              (s[0] = (e._frame.x + a + u) / o.width),
              (s[1] = (e._frame.y + a + u) / o.height),
              (s[2] = (e._frame.x + e._frame.width - a + u) / o.width),
              (s[3] = (e._frame.y + e._frame.height - a + u) / o.height),
              (this.uClampOffset[0] = u / o.realWidth),
              (this.uClampOffset[1] = u / o.realHeight),
              (this.isSimple =
                e._frame.width === o.width &&
                e._frame.height === o.height &&
                0 === e.rotate),
              !0
            );
          }),
          t
        );
      })(),
      Ur = (function (t) {
        function e(e) {
          var r = this,
            n = new Dt();
          return (
            (r =
              t.call(
                this,
                "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n",
                "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n"
              ) || this),
            (e.renderable = !1),
            (r.maskSprite = e),
            (r.maskMatrix = n),
            r
          );
        }
        return (
          pe(e, t),
          (e.prototype.apply = function (t, e, r, n) {
            var i = this.maskSprite,
              o = i._texture;
            o.valid &&
              (o.uvMatrix || (o.uvMatrix = new Fr(o, 0)),
              o.uvMatrix.update(),
              (this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1),
              (this.uniforms.mask = o),
              (this.uniforms.otherMatrix = t
                .calculateSpriteMatrix(this.maskMatrix, i)
                .prepend(o.uvMatrix.mapCoord)),
              (this.uniforms.alpha = i.worldAlpha),
              (this.uniforms.maskClamp = o.uvMatrix.uClampFrame),
              t.applyFilter(this, e, r, n));
          }),
          e
        );
      })(Lr),
      kr = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.enableScissor = !1),
            (r.alphaMaskPool = []),
            (r.maskDataPool = []),
            (r.maskStack = []),
            (r.alphaMaskIndex = 0),
            r
          );
        }
        return (
          pe(e, t),
          (e.prototype.setMaskStack = function (t) {
            (this.maskStack = t),
              this.renderer.scissor.setMaskStack(t),
              this.renderer.stencil.setMaskStack(t);
          }),
          (e.prototype.push = function (t, e) {
            var r = e;
            if (!r.isMaskData) {
              var n = this.maskDataPool.pop() || new ur();
              (n.pooled = !0), (n.maskObject = e), (r = n);
            }
            switch (
              (r.autoDetect && this.detect(r),
              r.copyCountersOrReset(this.maskStack[this.maskStack.length - 1]),
              (r._target = t),
              r.type)
            ) {
              case X.SCISSOR:
                this.maskStack.push(r), this.renderer.scissor.push(r);
                break;
              case X.STENCIL:
                this.maskStack.push(r), this.renderer.stencil.push(r);
                break;
              case X.SPRITE:
                r.copyCountersOrReset(null),
                  this.pushSpriteMask(r),
                  this.maskStack.push(r);
            }
          }),
          (e.prototype.pop = function (t) {
            var e = this.maskStack.pop();
            if (e && e._target === t) {
              switch (e.type) {
                case X.SCISSOR:
                  this.renderer.scissor.pop();
                  break;
                case X.STENCIL:
                  this.renderer.stencil.pop(e.maskObject);
                  break;
                case X.SPRITE:
                  this.popSpriteMask();
              }
              e.reset(), e.pooled && this.maskDataPool.push(e);
            }
          }),
          (e.prototype.detect = function (t) {
            var e = t.maskObject;
            if (e.isSprite) t.type = X.SPRITE;
            else if (
              ((t.type = X.STENCIL),
              this.enableScissor && e.isFastRect && e.isFastRect())
            ) {
              var r = e.worldTransform,
                n = Math.atan2(r.b, r.a),
                i = Math.atan2(r.d, r.c);
              (n = Math.round(n * (180 / Math.PI) * 100)),
                (i =
                  (((i = Math.round(i * (180 / Math.PI) * 100) - n) % 18e3) +
                    18e3) %
                  18e3),
                0 === (n = ((n % 9e3) + 9e3) % 9e3) &&
                  9e3 === i &&
                  (t.type = X.SCISSOR);
            }
          }),
          (e.prototype.pushSpriteMask = function (t) {
            var e = t.maskObject,
              r = t._target,
              n = this.alphaMaskPool[this.alphaMaskIndex];
            n || (n = this.alphaMaskPool[this.alphaMaskIndex] = [new Ur(e)]),
              (n[0].resolution = this.renderer.resolution),
              (n[0].maskSprite = e);
            var i = r.filterArea;
            (r.filterArea = e.getBounds(!0)),
              this.renderer.filter.push(r, n),
              (r.filterArea = i),
              this.alphaMaskIndex++;
          }),
          (e.prototype.popSpriteMask = function () {
            this.renderer.filter.pop(), this.alphaMaskIndex--;
          }),
          e
        );
      })(Ae),
      Br = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (r.maskStack = []), (r.glConst = 0), r;
        }
        return (
          pe(e, t),
          (e.prototype.getStackLength = function () {
            return this.maskStack.length;
          }),
          (e.prototype.setMaskStack = function (t) {
            var e = this.renderer.gl,
              r = this.getStackLength();
            this.maskStack = t;
            var n = this.getStackLength();
            n !== r &&
              (0 === n
                ? e.disable(this.glConst)
                : (e.enable(this.glConst), this._useCurrent()));
          }),
          (e.prototype._useCurrent = function () {}),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this), (this.maskStack = null);
          }),
          e
        );
      })(Ae),
      jr = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (r.glConst = WebGLRenderingContext.SCISSOR_TEST), r;
        }
        return (
          pe(e, t),
          (e.prototype.getStackLength = function () {
            var t = this.maskStack[this.maskStack.length - 1];
            return t ? t._scissorCounter : 0;
          }),
          (e.prototype.push = function (t) {
            var e = t.maskObject;
            e.renderable = !0;
            var r = t._scissorRect,
              n = e.getBounds(!0),
              i = this.renderer.gl;
            (e.renderable = !1),
              r ? n.fit(r) : i.enable(i.SCISSOR_TEST),
              t._scissorCounter++,
              (t._scissorRect = n),
              this._useCurrent();
          }),
          (e.prototype.pop = function () {
            var t = this.renderer.gl;
            this.getStackLength() > 0
              ? this._useCurrent()
              : t.disable(t.SCISSOR_TEST);
          }),
          (e.prototype._useCurrent = function () {
            var t = this.maskStack[this.maskStack.length - 1]._scissorRect,
              e = this.renderer.renderTexture.current,
              r = this.renderer.projection,
              n = r.transform,
              i = r.sourceFrame,
              o = r.destinationFrame,
              s = e ? e.resolution : this.renderer.resolution,
              a = (t.x - i.x) * s + o.x,
              u = (t.y - i.y) * s + o.y,
              h = t.width * s,
              c = t.height * s;
            n && ((a += n.tx * s), (u += n.ty * s)),
              e || (u = this.renderer.height - c - u),
              this.renderer.gl.scissor(a, u, h, c);
          }),
          e
        );
      })(Br),
      Hr = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (r.glConst = WebGLRenderingContext.STENCIL_TEST), r;
        }
        return (
          pe(e, t),
          (e.prototype.getStackLength = function () {
            var t = this.maskStack[this.maskStack.length - 1];
            return t ? t._stencilCounter : 0;
          }),
          (e.prototype.push = function (t) {
            var e = t.maskObject,
              r = this.renderer.gl,
              n = t._stencilCounter;
            0 === n &&
              (this.renderer.framebuffer.forceStencil(),
              r.enable(r.STENCIL_TEST)),
              t._stencilCounter++,
              r.colorMask(!1, !1, !1, !1),
              r.stencilFunc(r.EQUAL, n, this._getBitwiseMask()),
              r.stencilOp(r.KEEP, r.KEEP, r.INCR),
              (e.renderable = !0),
              e.render(this.renderer),
              this.renderer.batch.flush(),
              (e.renderable = !1),
              this._useCurrent();
          }),
          (e.prototype.pop = function (t) {
            var e = this.renderer.gl;
            0 === this.getStackLength()
              ? (e.disable(e.STENCIL_TEST),
                e.clear(e.STENCIL_BUFFER_BIT),
                e.clearStencil(0))
              : (e.colorMask(!1, !1, !1, !1),
                e.stencilOp(e.KEEP, e.KEEP, e.DECR),
                (t.renderable = !0),
                t.render(this.renderer),
                this.renderer.batch.flush(),
                (t.renderable = !1),
                this._useCurrent());
          }),
          (e.prototype._useCurrent = function () {
            var t = this.renderer.gl;
            t.colorMask(!0, !0, !0, !0),
              t.stencilFunc(
                t.EQUAL,
                this.getStackLength(),
                this._getBitwiseMask()
              ),
              t.stencilOp(t.KEEP, t.KEEP, t.KEEP);
          }),
          (e.prototype._getBitwiseMask = function () {
            return (1 << this.getStackLength()) - 1;
          }),
          e
        );
      })(Br),
      Gr = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.destinationFrame = null),
            (r.sourceFrame = null),
            (r.defaultFrame = null),
            (r.projectionMatrix = new Dt()),
            (r.transform = null),
            r
          );
        }
        return (
          pe(e, t),
          (e.prototype.update = function (t, e, r, n) {
            (this.destinationFrame =
              t || this.destinationFrame || this.defaultFrame),
              (this.sourceFrame = e || this.sourceFrame || t),
              this.calculateProjection(
                this.destinationFrame,
                this.sourceFrame,
                r,
                n
              ),
              this.transform && this.projectionMatrix.append(this.transform);
            var i = this.renderer;
            (i.globalUniforms.uniforms.projectionMatrix =
              this.projectionMatrix),
              i.globalUniforms.update(),
              i.shader.shader &&
                i.shader.syncUniformGroup(i.shader.shader.uniforms.globals);
          }),
          (e.prototype.calculateProjection = function (t, e, r, n) {
            var i = this.projectionMatrix,
              o = n ? -1 : 1;
            (i.a = (1 / t.width) * 2 * r),
              (i.d = o * ((1 / t.height) * 2) * r),
              (i.tx = -1 - e.x * i.a),
              (i.ty = -o - e.y * i.d);
          }),
          (e.prototype.setTransform = function (t) {}),
          e
        );
      })(Ae),
      Xr = new Ot(),
      zr = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.clearColor = e._backgroundColorRgba),
            (r.defaultMaskStack = []),
            (r.current = null),
            (r.sourceFrame = new Ot()),
            (r.destinationFrame = new Ot()),
            r
          );
        }
        return (
          pe(e, t),
          (e.prototype.bind = function (t, e, r) {
            void 0 === t && (t = null), (this.current = t);
            var n,
              i = this.renderer;
            if (t) {
              var o = t.baseTexture;
              (n = o.resolution),
                r ||
                  ((Xr.width = o.realWidth),
                  (Xr.height = o.realHeight),
                  (r = Xr)),
                e || (e = r),
                this.renderer.framebuffer.bind(o.framebuffer, r),
                this.renderer.projection.update(r, e, n, !1),
                this.renderer.mask.setMaskStack(o.maskStack);
            } else
              (n = this.renderer.resolution),
                r || ((Xr.width = i.width), (Xr.height = i.height), (r = Xr)),
                e || (e = r),
                i.framebuffer.bind(null, r),
                this.renderer.projection.update(r, e, n, !0),
                this.renderer.mask.setMaskStack(this.defaultMaskStack);
            this.sourceFrame.copyFrom(e),
              (this.destinationFrame.x = r.x / n),
              (this.destinationFrame.y = r.y / n),
              (this.destinationFrame.width = r.width / n),
              (this.destinationFrame.height = r.height / n),
              e === r && this.sourceFrame.copyFrom(this.destinationFrame);
          }),
          (e.prototype.clear = function (t, e) {
            (t = this.current
              ? t || this.current.baseTexture.clearColor
              : t || this.clearColor),
              this.renderer.framebuffer.clear(t[0], t[1], t[2], t[3], e);
          }),
          (e.prototype.resize = function () {
            this.bind(null);
          }),
          (e.prototype.reset = function () {
            this.bind(null);
          }),
          e
        );
      })(Ae),
      Vr = (function () {
        function t(t, e) {
          (this.program = t), (this.uniformData = e), (this.uniformGroups = {});
        }
        return (
          (t.prototype.destroy = function () {
            (this.uniformData = null),
              (this.uniformGroups = null),
              (this.program = null);
          }),
          t
        );
      })(),
      Yr = 0,
      Wr = { textureCount: 0 },
      qr = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.destroyed = !1),
            r.systemCheck(),
            (r.gl = null),
            (r.shader = null),
            (r.program = null),
            (r.cache = {}),
            (r.id = Yr++),
            r
          );
        }
        return (
          pe(e, t),
          (e.prototype.systemCheck = function () {
            if (
              !(function () {
                if ("boolean" == typeof Or) return Or;
                try {
                  var t = new Function(
                    "param1",
                    "param2",
                    "param3",
                    "return param1[param2] === param3;"
                  );
                  Or = !0 === t({ a: "b" }, "a", "b");
                } catch (t) {
                  Or = !1;
                }
                return Or;
              })()
            )
              throw new Error(
                "Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support."
              );
          }),
          (e.prototype.contextChange = function (t) {
            (this.gl = t), this.reset();
          }),
          (e.prototype.bind = function (t, e) {
            t.uniforms.globals = this.renderer.globalUniforms;
            var r = t.program,
              n =
                r.glPrograms[this.renderer.CONTEXT_UID] ||
                this.generateShader(t);
            return (
              (this.shader = t),
              this.program !== r &&
                ((this.program = r), this.gl.useProgram(n.program)),
              e ||
                ((Wr.textureCount = 0),
                this.syncUniformGroup(t.uniformGroup, Wr)),
              n
            );
          }),
          (e.prototype.setUniforms = function (t) {
            var e = this.shader.program,
              r = e.glPrograms[this.renderer.CONTEXT_UID];
            e.syncUniforms(r.uniformData, t, this.renderer);
          }),
          (e.prototype.syncUniformGroup = function (t, e) {
            var r = this.getglProgram();
            (t.static && t.dirtyId === r.uniformGroups[t.id]) ||
              ((r.uniformGroups[t.id] = t.dirtyId), this.syncUniforms(t, r, e));
          }),
          (e.prototype.syncUniforms = function (t, e, r) {
            (
              t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t)
            )(e.uniformData, t.uniforms, this.renderer, r);
          }),
          (e.prototype.createSyncGroups = function (t) {
            var e = this.getSignature(t, this.shader.program.uniformData);
            return (
              this.cache[e] ||
                (this.cache[e] = (function (t, e) {
                  var r = [
                    "\n        var v = null;\n        var cv = null\n        var t = 0;\n        var gl = renderer.gl\n    ",
                  ];
                  for (var n in t.uniforms) {
                    var i = e[n];
                    if (i) {
                      for (
                        var o = t.uniforms[n], s = !1, a = 0;
                        a < wr.length;
                        a++
                      )
                        if (wr[a].test(i, o)) {
                          r.push(wr[a].code(n, o)), (s = !0);
                          break;
                        }
                      if (!s) {
                        var u = (1 === i.size ? Tr : Sr)[i.type].replace(
                          "location",
                          'ud["' + n + '"].location'
                        );
                        r.push(
                          '\n            cv = ud["' +
                            n +
                            '"].value;\n            v = uv["' +
                            n +
                            '"];\n            ' +
                            u +
                            ";"
                        );
                      }
                    } else
                      t.uniforms[n].group &&
                        r.push(
                          '\n                    renderer.shader.syncUniformGroup(uv["' +
                            n +
                            '"], syncData);\n                '
                        );
                  }
                  return new Function(
                    "ud",
                    "uv",
                    "renderer",
                    "syncData",
                    r.join("\n")
                  );
                })(t, this.shader.program.uniformData)),
              (t.syncUniforms[this.shader.program.id] = this.cache[e]),
              t.syncUniforms[this.shader.program.id]
            );
          }),
          (e.prototype.getSignature = function (t, e) {
            var r = t.uniforms,
              n = [];
            for (var i in r) n.push(i), e[i] && n.push(e[i].type);
            return n.join("-");
          }),
          (e.prototype.getglProgram = function () {
            return this.shader
              ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID]
              : null;
          }),
          (e.prototype.generateShader = function (t) {
            var e = this.gl,
              r = t.program,
              n = {};
            for (var i in r.attributeData) n[i] = r.attributeData[i].location;
            var o = cr(e, r.vertexSrc, r.fragmentSrc, n),
              s = {};
            for (var i in r.uniformData) {
              var a = r.uniformData[i];
              s[i] = {
                location: e.getUniformLocation(o, i),
                value: fr(a.type, a.size),
              };
            }
            var u = new Vr(o, s);
            return (r.glPrograms[this.renderer.CONTEXT_UID] = u), u;
          }),
          (e.prototype.reset = function () {
            (this.program = null), (this.shader = null);
          }),
          (e.prototype.destroy = function () {
            this.destroyed = !0;
          }),
          e
        );
      })(Ae);
    var Kr = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.gl = null),
            (r.stateId = 0),
            (r.polygonOffset = 0),
            (r.blendMode = M.NONE),
            (r._blendEq = !1),
            (r.map = []),
            (r.map[0] = r.setBlend),
            (r.map[1] = r.setOffset),
            (r.map[2] = r.setCullFace),
            (r.map[3] = r.setDepthTest),
            (r.map[4] = r.setFrontFace),
            (r.checks = []),
            (r.defaultState = new Dr()),
            (r.defaultState.blend = !0),
            r
          );
        }
        return (
          pe(e, t),
          (e.prototype.contextChange = function (t) {
            (this.gl = t),
              (this.blendModes = (function (t, e) {
                return (
                  void 0 === e && (e = []),
                  (e[M.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.ADD] = [t.ONE, t.ONE]),
                  (e[M.MULTIPLY] = [
                    t.DST_COLOR,
                    t.ONE_MINUS_SRC_ALPHA,
                    t.ONE,
                    t.ONE_MINUS_SRC_ALPHA,
                  ]),
                  (e[M.SCREEN] = [
                    t.ONE,
                    t.ONE_MINUS_SRC_COLOR,
                    t.ONE,
                    t.ONE_MINUS_SRC_ALPHA,
                  ]),
                  (e[M.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.NONE] = [0, 0]),
                  (e[M.NORMAL_NPM] = [
                    t.SRC_ALPHA,
                    t.ONE_MINUS_SRC_ALPHA,
                    t.ONE,
                    t.ONE_MINUS_SRC_ALPHA,
                  ]),
                  (e[M.ADD_NPM] = [t.SRC_ALPHA, t.ONE, t.ONE, t.ONE]),
                  (e[M.SCREEN_NPM] = [
                    t.SRC_ALPHA,
                    t.ONE_MINUS_SRC_COLOR,
                    t.ONE,
                    t.ONE_MINUS_SRC_ALPHA,
                  ]),
                  (e[M.SRC_IN] = [t.DST_ALPHA, t.ZERO]),
                  (e[M.SRC_OUT] = [t.ONE_MINUS_DST_ALPHA, t.ZERO]),
                  (e[M.SRC_ATOP] = [t.DST_ALPHA, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.DST_OVER] = [t.ONE_MINUS_DST_ALPHA, t.ONE]),
                  (e[M.DST_IN] = [t.ZERO, t.SRC_ALPHA]),
                  (e[M.DST_OUT] = [t.ZERO, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.DST_ATOP] = [t.ONE_MINUS_DST_ALPHA, t.SRC_ALPHA]),
                  (e[M.XOR] = [t.ONE_MINUS_DST_ALPHA, t.ONE_MINUS_SRC_ALPHA]),
                  (e[M.SUBTRACT] = [
                    t.ONE,
                    t.ONE,
                    t.ONE,
                    t.ONE,
                    t.FUNC_REVERSE_SUBTRACT,
                    t.FUNC_ADD,
                  ]),
                  e
                );
              })(t)),
              this.set(this.defaultState),
              this.reset();
          }),
          (e.prototype.set = function (t) {
            if (((t = t || this.defaultState), this.stateId !== t.data)) {
              for (var e = this.stateId ^ t.data, r = 0; e; )
                1 & e && this.map[r].call(this, !!(t.data & (1 << r))),
                  (e >>= 1),
                  r++;
              this.stateId = t.data;
            }
            for (r = 0; r < this.checks.length; r++) this.checks[r](this, t);
          }),
          (e.prototype.forceState = function (t) {
            t = t || this.defaultState;
            for (var e = 0; e < this.map.length; e++)
              this.map[e].call(this, !!(t.data & (1 << e)));
            for (e = 0; e < this.checks.length; e++) this.checks[e](this, t);
            this.stateId = t.data;
          }),
          (e.prototype.setBlend = function (t) {
            this.updateCheck(e.checkBlendMode, t),
              this.gl[t ? "enable" : "disable"](this.gl.BLEND);
          }),
          (e.prototype.setOffset = function (t) {
            this.updateCheck(e.checkPolygonOffset, t),
              this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
          }),
          (e.prototype.setDepthTest = function (t) {
            this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST);
          }),
          (e.prototype.setCullFace = function (t) {
            this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE);
          }),
          (e.prototype.setFrontFace = function (t) {
            this.gl.frontFace(this.gl[t ? "CW" : "CCW"]);
          }),
          (e.prototype.setBlendMode = function (t) {
            if (t !== this.blendMode) {
              this.blendMode = t;
              var e = this.blendModes[t],
                r = this.gl;
              2 === e.length
                ? r.blendFunc(e[0], e[1])
                : r.blendFuncSeparate(e[0], e[1], e[2], e[3]),
                6 === e.length
                  ? ((this._blendEq = !0), r.blendEquationSeparate(e[4], e[5]))
                  : this._blendEq &&
                    ((this._blendEq = !1),
                    r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD));
            }
          }),
          (e.prototype.setPolygonOffset = function (t, e) {
            this.gl.polygonOffset(t, e);
          }),
          (e.prototype.reset = function () {
            this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
              this.forceState(this.defaultState),
              (this._blendEq = !0),
              (this.blendMode = -1),
              this.setBlendMode(0);
          }),
          (e.prototype.updateCheck = function (t, e) {
            var r = this.checks.indexOf(t);
            e && -1 === r
              ? this.checks.push(t)
              : e || -1 === r || this.checks.splice(r, 1);
          }),
          (e.checkBlendMode = function (t, e) {
            t.setBlendMode(e.blendMode);
          }),
          (e.checkPolygonOffset = function (t, e) {
            t.setPolygonOffset(1, e.polygonOffset);
          }),
          e
        );
      })(Ae),
      Zr = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.count = 0),
            (r.checkCount = 0),
            (r.maxIdle = V.GC_MAX_IDLE),
            (r.checkCountMax = V.GC_MAX_CHECK_COUNT),
            (r.mode = V.GC_MODE),
            r
          );
        }
        return (
          pe(e, t),
          (e.prototype.postrender = function () {
            this.renderer.renderingToScreen &&
              (this.count++,
              this.mode !== H.MANUAL &&
                (this.checkCount++,
                this.checkCount > this.checkCountMax &&
                  ((this.checkCount = 0), this.run())));
          }),
          (e.prototype.run = function () {
            for (
              var t = this.renderer.texture,
                e = t.managedTextures,
                r = !1,
                n = 0;
              n < e.length;
              n++
            ) {
              var i = e[n];
              !i.framebuffer &&
                this.count - i.touched > this.maxIdle &&
                (t.destroyTexture(i, !0), (e[n] = null), (r = !0));
            }
            if (r) {
              var o = 0;
              for (n = 0; n < e.length; n++) null !== e[n] && (e[o++] = e[n]);
              e.length = o;
            }
          }),
          (e.prototype.unload = function (t) {
            var e,
              r = this.renderer.texture;
            (null === (e = t._texture) || void 0 === e
              ? void 0
              : e.framebuffer) && r.destroyTexture(t._texture);
            for (var n = t.children.length - 1; n >= 0; n--)
              this.unload(t.children[n]);
          }),
          e
        );
      })(Ae),
      Jr = function (t) {
        (this.texture = t),
          (this.width = -1),
          (this.height = -1),
          (this.dirtyId = -1),
          (this.dirtyStyleId = -1),
          (this.mipmap = !1),
          (this.wrapMode = 33071),
          (this.type = 6408),
          (this.internalFormat = 5121);
      },
      $r = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.boundTextures = []),
            (r.currentLocation = -1),
            (r.managedTextures = []),
            (r._unknownBoundTextures = !1),
            (r.unknownTexture = new ye()),
            r
          );
        }
        return (
          pe(e, t),
          (e.prototype.contextChange = function () {
            var t = (this.gl = this.renderer.gl);
            (this.CONTEXT_UID = this.renderer.CONTEXT_UID),
              (this.webGLVersion = this.renderer.context.webGLVersion);
            var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
            this.boundTextures.length = e;
            for (var r = 0; r < e; r++) this.boundTextures[r] = null;
            this.emptyTextures = {};
            var n = new Jr(t.createTexture());
            t.bindTexture(t.TEXTURE_2D, n.texture),
              t.texImage2D(
                t.TEXTURE_2D,
                0,
                t.RGBA,
                1,
                1,
                0,
                t.RGBA,
                t.UNSIGNED_BYTE,
                new Uint8Array(4)
              ),
              (this.emptyTextures[t.TEXTURE_2D] = n),
              (this.emptyTextures[t.TEXTURE_CUBE_MAP] = new Jr(
                t.createTexture()
              )),
              t.bindTexture(
                t.TEXTURE_CUBE_MAP,
                this.emptyTextures[t.TEXTURE_CUBE_MAP].texture
              );
            for (r = 0; r < 6; r++)
              t.texImage2D(
                t.TEXTURE_CUBE_MAP_POSITIVE_X + r,
                0,
                t.RGBA,
                1,
                1,
                0,
                t.RGBA,
                t.UNSIGNED_BYTE,
                null
              );
            t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR),
              t.texParameteri(
                t.TEXTURE_CUBE_MAP,
                t.TEXTURE_MIN_FILTER,
                t.LINEAR
              );
            for (r = 0; r < this.boundTextures.length; r++) this.bind(null, r);
          }),
          (e.prototype.bind = function (t, e) {
            void 0 === e && (e = 0);
            var r = this.gl;
            if (t) {
              if ((t = t.castToBaseTexture()).parentTextureArray) return;
              if (t.valid) {
                t.touched = this.renderer.textureGC.count;
                var n = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
                this.boundTextures[e] !== t &&
                  (this.currentLocation !== e &&
                    ((this.currentLocation = e),
                    r.activeTexture(r.TEXTURE0 + e)),
                  r.bindTexture(t.target, n.texture)),
                  n.dirtyId !== t.dirtyId &&
                    (this.currentLocation !== e &&
                      ((this.currentLocation = e),
                      r.activeTexture(r.TEXTURE0 + e)),
                    this.updateTexture(t)),
                  (this.boundTextures[e] = t);
              }
            } else
              this.currentLocation !== e &&
                ((this.currentLocation = e), r.activeTexture(r.TEXTURE0 + e)),
                r.bindTexture(
                  r.TEXTURE_2D,
                  this.emptyTextures[r.TEXTURE_2D].texture
                ),
                (this.boundTextures[e] = null);
          }),
          (e.prototype.reset = function () {
            (this._unknownBoundTextures = !0), (this.currentLocation = -1);
            for (var t = 0; t < this.boundTextures.length; t++)
              this.boundTextures[t] = this.unknownTexture;
          }),
          (e.prototype.unbind = function (t) {
            var e = this.gl,
              r = this.boundTextures;
            if (this._unknownBoundTextures) {
              this._unknownBoundTextures = !1;
              for (var n = 0; n < r.length; n++)
                r[n] === this.unknownTexture && this.bind(null, n);
            }
            for (n = 0; n < r.length; n++)
              r[n] === t &&
                (this.currentLocation !== n &&
                  (e.activeTexture(e.TEXTURE0 + n), (this.currentLocation = n)),
                e.bindTexture(
                  e.TEXTURE_2D,
                  this.emptyTextures[t.target].texture
                ),
                (r[n] = null));
          }),
          (e.prototype.initTexture = function (t) {
            var e = new Jr(this.gl.createTexture());
            return (
              (e.dirtyId = -1),
              (t._glTextures[this.CONTEXT_UID] = e),
              this.managedTextures.push(t),
              t.on("dispose", this.destroyTexture, this),
              e
            );
          }),
          (e.prototype.initTextureType = function (t, e) {
            if (
              ((e.internalFormat = t.format),
              (e.type = t.type),
              2 === this.webGLVersion)
            ) {
              var r = this.renderer.gl;
              t.type === r.FLOAT &&
                t.format === r.RGBA &&
                (e.internalFormat = r.RGBA32F),
                t.type === N.HALF_FLOAT && (e.type = r.HALF_FLOAT),
                e.type === r.HALF_FLOAT &&
                  t.format === r.RGBA &&
                  (e.internalFormat = r.RGBA16F);
            }
          }),
          (e.prototype.updateTexture = function (t) {
            var e = t._glTextures[this.CONTEXT_UID];
            if (e) {
              var r = this.renderer;
              if (
                (this.initTextureType(t, e),
                t.resource && t.resource.upload(r, t, e))
              );
              else {
                var n = t.realWidth,
                  i = t.realHeight,
                  o = r.gl;
                (e.width !== n || e.height !== i || e.dirtyId < 0) &&
                  ((e.width = n),
                  (e.height = i),
                  o.texImage2D(
                    t.target,
                    0,
                    e.internalFormat,
                    n,
                    i,
                    0,
                    t.format,
                    e.type,
                    null
                  ));
              }
              t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t),
                (e.dirtyId = t.dirtyId);
            }
          }),
          (e.prototype.destroyTexture = function (t, e) {
            var r = this.gl;
            if (
              (t = t.castToBaseTexture())._glTextures[this.CONTEXT_UID] &&
              (this.unbind(t),
              r.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),
              t.off("dispose", this.destroyTexture, this),
              delete t._glTextures[this.CONTEXT_UID],
              !e)
            ) {
              var n = this.managedTextures.indexOf(t);
              -1 !== n && ct(this.managedTextures, n, 1);
            }
          }),
          (e.prototype.updateTextureStyle = function (t) {
            var e = t._glTextures[this.CONTEXT_UID];
            e &&
              ((t.mipmap !== k.POW2 && 2 === this.webGLVersion) ||
              t.isPowerOfTwo
                ? (e.mipmap = t.mipmap >= 1)
                : (e.mipmap = !1),
              2 === this.webGLVersion || t.isPowerOfTwo
                ? (e.wrapMode = t.wrapMode)
                : (e.wrapMode = U.CLAMP),
              (t.resource && t.resource.style(this.renderer, t, e)) ||
                this.setStyle(t, e),
              (e.dirtyStyleId = t.dirtyStyleId));
          }),
          (e.prototype.setStyle = function (t, e) {
            var r = this.gl;
            if (
              (e.mipmap && r.generateMipmap(t.target),
              r.texParameteri(t.target, r.TEXTURE_WRAP_S, e.wrapMode),
              r.texParameteri(t.target, r.TEXTURE_WRAP_T, e.wrapMode),
              e.mipmap)
            ) {
              r.texParameteri(
                t.target,
                r.TEXTURE_MIN_FILTER,
                t.scaleMode === F.LINEAR
                  ? r.LINEAR_MIPMAP_LINEAR
                  : r.NEAREST_MIPMAP_NEAREST
              );
              var n = this.renderer.context.extensions.anisotropicFiltering;
              if (n && t.anisotropicLevel > 0 && t.scaleMode === F.LINEAR) {
                var i = Math.min(
                  t.anisotropicLevel,
                  r.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                );
                r.texParameterf(t.target, n.TEXTURE_MAX_ANISOTROPY_EXT, i);
              }
            } else
              r.texParameteri(
                t.target,
                r.TEXTURE_MIN_FILTER,
                t.scaleMode === F.LINEAR ? r.LINEAR : r.NEAREST
              );
            r.texParameteri(
              t.target,
              r.TEXTURE_MAG_FILTER,
              t.scaleMode === F.LINEAR ? r.LINEAR : r.NEAREST
            );
          }),
          e
        );
      })(Ae),
      Qr = new Dt(),
      tn = (function (t) {
        function e(r) {
          var n = t.call(this, I.WEBGL, r) || this;
          return (
            (r = n.options),
            (n.gl = null),
            (n.CONTEXT_UID = 0),
            (n.runners = {
              destroy: new he("destroy"),
              contextChange: new he("contextChange"),
              reset: new he("reset"),
              update: new he("update"),
              postrender: new he("postrender"),
              prerender: new he("prerender"),
              resize: new he("resize"),
            }),
            (n.globalUniforms = new Ke({ projectionMatrix: new Dt() }, !0)),
            n
              .addSystem(kr, "mask")
              .addSystem(er, "context")
              .addSystem(Kr, "state")
              .addSystem(qr, "shader")
              .addSystem($r, "texture")
              .addSystem(ar, "geometry")
              .addSystem(ir, "framebuffer")
              .addSystem(jr, "scissor")
              .addSystem(Hr, "stencil")
              .addSystem(Gr, "projection")
              .addSystem(Zr, "textureGC")
              .addSystem(Je, "filter")
              .addSystem(zr, "renderTexture")
              .addSystem(Qe, "batch"),
            n.initPlugins(e.__plugins),
            r.context
              ? n.context.initFromContext(r.context)
              : n.context.initFromOptions({
                  alpha: !!n.transparent,
                  antialias: r.antialias,
                  premultipliedAlpha:
                    n.transparent && "notMultiplied" !== n.transparent,
                  stencil: !0,
                  preserveDrawingBuffer: r.preserveDrawingBuffer,
                  powerPreference: n.options.powerPreference,
                }),
            (n.renderingToScreen = !0),
            (function (t) {
              var e;
              if (!Q) {
                if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                  var r = [
                    "\n %c %c %c PixiJS 5.3.0 - ✰ " +
                      t +
                      " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n",
                    "background: #ff66a5; padding:5px 0;",
                    "background: #ff66a5; padding:5px 0;",
                    "color: #ff66a5; background: #030307; padding:5px 0;",
                    "background: #ff66a5; padding:5px 0;",
                    "background: #ffc3dc; padding:5px 0;",
                    "background: #ff66a5; padding:5px 0;",
                    "color: #ff2424; background: #fff; padding:5px 0;",
                    "color: #ff2424; background: #fff; padding:5px 0;",
                    "color: #ff2424; background: #fff; padding:5px 0;",
                  ];
                  (e = window.console).log.apply(e, r);
                } else
                  window.console &&
                    window.console.log(
                      "PixiJS 5.3.0 - " + t + " - http://www.pixijs.com/"
                    );
                Q = !0;
              }
            })(2 === n.context.webGLVersion ? "WebGL 2" : "WebGL 1"),
            n.resize(n.options.width, n.options.height),
            n
          );
        }
        return (
          pe(e, t),
          (e.create = function (t) {
            if (
              (void 0 === $ &&
                ($ = (function () {
                  var t = {
                    stencil: !0,
                    failIfMajorPerformanceCaveat:
                      V.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT,
                  };
                  try {
                    if (!window.WebGLRenderingContext) return !1;
                    var e = document.createElement("canvas"),
                      r =
                        e.getContext("webgl", t) ||
                        e.getContext("experimental-webgl", t),
                      n = !(!r || !r.getContextAttributes().stencil);
                    if (r) {
                      var i = r.getExtension("WEBGL_lose_context");
                      i && i.loseContext();
                    }
                    return (r = null), n;
                  } catch (t) {
                    return !1;
                  }
                })()),
              $)
            )
              return new e(t);
            throw new Error(
              'WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.'
            );
          }),
          (e.prototype.addSystem = function (t, e) {
            e || (e = t.name);
            var r = new t(this);
            if (this[e])
              throw new Error('Whoops! The name "' + e + '" is already in use');
            for (var n in ((this[e] = r), this.runners)) this.runners[n].add(r);
            return this;
          }),
          (e.prototype.render = function (t, e, r, n, i) {
            if (
              ((this.renderingToScreen = !e),
              this.runners.prerender.emit(),
              this.emit("prerender"),
              (this.projection.transform = n),
              !this.context.isLost)
            ) {
              if ((e || (this._lastObjectRendered = t), !i)) {
                var o = t.enableTempParent();
                t.updateTransform(), t.disableTempParent(o);
              }
              this.renderTexture.bind(e),
                this.batch.currentRenderer.start(),
                (void 0 !== r ? r : this.clearBeforeRender) &&
                  this.renderTexture.clear(),
                t.render(this),
                this.batch.currentRenderer.flush(),
                e && e.baseTexture.update(),
                this.runners.postrender.emit(),
                (this.projection.transform = null),
                this.emit("postrender");
            }
          }),
          (e.prototype.resize = function (e, r) {
            t.prototype.resize.call(this, e, r), this.runners.resize.emit(e, r);
          }),
          (e.prototype.reset = function () {
            return this.runners.reset.emit(), this;
          }),
          (e.prototype.clear = function () {
            this.renderTexture.bind(), this.renderTexture.clear();
          }),
          (e.prototype.destroy = function (e) {
            for (var r in (this.runners.destroy.emit(), this.runners))
              this.runners[r].destroy();
            t.prototype.destroy.call(this, e), (this.gl = null);
          }),
          (e.registerPlugin = function (t, r) {
            (e.__plugins = e.__plugins || {}), (e.__plugins[t] = r);
          }),
          e
        );
      })(
        (function (t) {
          function e(e, r) {
            void 0 === e && (e = I.UNKNOWN);
            var n = t.call(this) || this;
            return (
              (r = Object.assign({}, V.RENDER_OPTIONS, r)).roundPixels &&
                ((V.ROUND_PIXELS = r.roundPixels),
                vt(
                  "5.0.0",
                  "Renderer roundPixels option is deprecated, please use PIXI.settings.ROUND_PIXELS",
                  2
                )),
              (n.options = r),
              (n.type = e),
              (n.screen = new Ot(0, 0, r.width, r.height)),
              (n.view = r.view || document.createElement("canvas")),
              (n.resolution = r.resolution || V.RESOLUTION),
              (n.transparent = r.transparent),
              (n.autoDensity = r.autoDensity || r.autoResize || !1),
              (n.preserveDrawingBuffer = r.preserveDrawingBuffer),
              (n.clearBeforeRender = r.clearBeforeRender),
              (n._backgroundColor = 0),
              (n._backgroundColorRgba = [0, 0, 0, 0]),
              (n._backgroundColorString = "#000000"),
              (n.backgroundColor = r.backgroundColor || n._backgroundColor),
              (n._lastObjectRendered = null),
              (n.plugins = {}),
              n
            );
          }
          return (
            pe(e, t),
            (e.prototype.initPlugins = function (t) {
              for (var e in t) this.plugins[e] = new t[e](this);
            }),
            Object.defineProperty(e.prototype, "width", {
              get: function () {
                return this.view.width;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "height", {
              get: function () {
                return this.view.height;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.resize = function (t, e) {
              (this.screen.width = t),
                (this.screen.height = e),
                (this.view.width = t * this.resolution),
                (this.view.height = e * this.resolution),
                this.autoDensity &&
                  ((this.view.style.width = t + "px"),
                  (this.view.style.height = e + "px")),
                this.emit("resize", t, e);
            }),
            (e.prototype.generateTexture = function (t, e, r, n) {
              0 === (n = n || t.getLocalBounds(null, !0)).width &&
                (n.width = 1),
                0 === n.height && (n.height = 1);
              var i = Ne.create({
                width: 0 | n.width,
                height: 0 | n.height,
                scaleMode: e,
                resolution: r,
              });
              return (
                (Qr.tx = -n.x),
                (Qr.ty = -n.y),
                this.render(t, i, !1, Qr, !!t.parent),
                i
              );
            }),
            (e.prototype.destroy = function (t) {
              for (var e in this.plugins)
                this.plugins[e].destroy(), (this.plugins[e] = null);
              t &&
                this.view.parentNode &&
                this.view.parentNode.removeChild(this.view);
              (this.plugins = null),
                (this.type = I.UNKNOWN),
                (this.view = null),
                (this.screen = null),
                (this._tempDisplayObjectParent = null),
                (this.options = null),
                (this._backgroundColorRgba = null),
                (this._backgroundColorString = null),
                (this._lastObjectRendered = null);
            }),
            Object.defineProperty(e.prototype, "backgroundColor", {
              get: function () {
                return this._backgroundColor;
              },
              set: function (t) {
                (this._backgroundColor = t),
                  (this._backgroundColorString = et(t)),
                  tt(t, this._backgroundColorRgba);
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(W.a)
      );
    var en =
        "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n",
      rn = function () {
        (this.texArray = null),
          (this.blend = 0),
          (this.type = R.TRIANGLES),
          (this.start = 0),
          (this.size = 0),
          (this.data = null);
      },
      nn = (function () {
        function t() {
          (this.elements = []), (this.ids = []), (this.count = 0);
        }
        return (
          (t.prototype.clear = function () {
            for (var t = 0; t < this.count; t++) this.elements[t] = null;
            this.count = 0;
          }),
          t
        );
      })(),
      on = (function () {
        function t(t) {
          (this.rawBinaryData = new ArrayBuffer(t)),
            (this.uint32View = new Uint32Array(this.rawBinaryData)),
            (this.float32View = new Float32Array(this.rawBinaryData));
        }
        return (
          Object.defineProperty(t.prototype, "int8View", {
            get: function () {
              return (
                this._int8View ||
                  (this._int8View = new Int8Array(this.rawBinaryData)),
                this._int8View
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "uint8View", {
            get: function () {
              return (
                this._uint8View ||
                  (this._uint8View = new Uint8Array(this.rawBinaryData)),
                this._uint8View
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "int16View", {
            get: function () {
              return (
                this._int16View ||
                  (this._int16View = new Int16Array(this.rawBinaryData)),
                this._int16View
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "uint16View", {
            get: function () {
              return (
                this._uint16View ||
                  (this._uint16View = new Uint16Array(this.rawBinaryData)),
                this._uint16View
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "int32View", {
            get: function () {
              return (
                this._int32View ||
                  (this._int32View = new Int32Array(this.rawBinaryData)),
                this._int32View
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.view = function (t) {
            return this[t + "View"];
          }),
          (t.prototype.destroy = function () {
            (this.rawBinaryData = null),
              (this._int8View = null),
              (this._uint8View = null),
              (this._int16View = null),
              (this._uint16View = null),
              (this._int32View = null),
              (this.uint32View = null),
              (this.float32View = null);
          }),
          (t.sizeOf = function (t) {
            switch (t) {
              case "int8":
              case "uint8":
                return 1;
              case "int16":
              case "uint16":
                return 2;
              case "int32":
              case "uint32":
              case "float32":
                return 4;
              default:
                throw new Error(t + " isn't a valid view type");
            }
          }),
          t
        );
      })(),
      sn = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.shaderGenerator = null),
            (r.geometryClass = null),
            (r.vertexSize = null),
            (r.state = Dr.for2d()),
            (r.size = 4 * V.SPRITE_BATCH_SIZE),
            (r._vertexCount = 0),
            (r._indexCount = 0),
            (r._bufferedElements = []),
            (r._bufferedTextures = []),
            (r._bufferSize = 0),
            (r._shader = null),
            (r._packedGeometries = []),
            (r._packedGeometryPoolSize = 2),
            (r._flushId = 0),
            (r._aBuffers = {}),
            (r._iBuffers = {}),
            (r.MAX_TEXTURES = 1),
            r.renderer.on("prerender", r.onPrerender, r),
            e.runners.contextChange.add(r),
            (r._dcIndex = 0),
            (r._aIndex = 0),
            (r._iIndex = 0),
            (r._attributeBuffer = null),
            (r._indexBuffer = null),
            (r._tempBoundTextures = []),
            r
          );
        }
        return (
          pe(e, t),
          (e.prototype.contextChange = function () {
            var t = this.renderer.gl;
            V.PREFER_ENV === P.WEBGL_LEGACY
              ? (this.MAX_TEXTURES = 1)
              : ((this.MAX_TEXTURES = Math.min(
                  t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
                  V.SPRITE_MAX_TEXTURES
                )),
                (this.MAX_TEXTURES = (function (t, e) {
                  if (0 === t)
                    throw new Error(
                      "Invalid value of `0` passed to `checkMaxIfStatementsInShader`"
                    );
                  for (var r = e.createShader(e.FRAGMENT_SHADER); ; ) {
                    var n = Ar.replace(/%forloop%/gi, Pr(t));
                    if (
                      (e.shaderSource(r, n),
                      e.compileShader(r),
                      e.getShaderParameter(r, e.COMPILE_STATUS))
                    )
                      break;
                    t = (t / 2) | 0;
                  }
                  return t;
                })(this.MAX_TEXTURES, t))),
              (this._shader = this.shaderGenerator.generateShader(
                this.MAX_TEXTURES
              ));
            for (var e = 0; e < this._packedGeometryPoolSize; e++)
              this._packedGeometries[e] = new this.geometryClass();
            this.initFlushBuffers();
          }),
          (e.prototype.initFlushBuffers = function () {
            for (
              var t = e._drawCallPool,
                r = e._textureArrayPool,
                n = this.size / 4,
                i = Math.floor(n / this.MAX_TEXTURES) + 1;
              t.length < n;

            )
              t.push(new rn());
            for (; r.length < i; ) r.push(new nn());
            for (var o = 0; o < this.MAX_TEXTURES; o++)
              this._tempBoundTextures[o] = null;
          }),
          (e.prototype.onPrerender = function () {
            this._flushId = 0;
          }),
          (e.prototype.render = function (t) {
            t._texture.valid &&
              (this._vertexCount + t.vertexData.length / 2 > this.size &&
                this.flush(),
              (this._vertexCount += t.vertexData.length / 2),
              (this._indexCount += t.indices.length),
              (this._bufferedTextures[this._bufferSize] =
                t._texture.baseTexture),
              (this._bufferedElements[this._bufferSize++] = t));
          }),
          (e.prototype.buildTexturesAndDrawCalls = function () {
            var t = this._bufferedTextures,
              r = this.MAX_TEXTURES,
              n = e._textureArrayPool,
              i = this.renderer.batch,
              o = this._tempBoundTextures,
              s = this.renderer.textureGC.count,
              a = ++ye._globalBatch,
              u = 0,
              h = n[0],
              c = 0;
            i.copyBoundTextures(o, r);
            for (var l = 0; l < this._bufferSize; ++l) {
              var f = t[l];
              (t[l] = null),
                f._batchEnabled !== a &&
                  (h.count >= r &&
                    (i.boundArray(h, o, a, r),
                    this.buildDrawCalls(h, c, l),
                    (c = l),
                    (h = n[++u]),
                    ++a),
                  (f._batchEnabled = a),
                  (f.touched = s),
                  (h.elements[h.count++] = f));
            }
            h.count > 0 &&
              (i.boundArray(h, o, a, r),
              this.buildDrawCalls(h, c, this._bufferSize),
              ++u,
              ++a);
            for (l = 0; l < o.length; l++) o[l] = null;
            ye._globalBatch = a;
          }),
          (e.prototype.buildDrawCalls = function (t, r, n) {
            var i = this._bufferedElements,
              o = this._attributeBuffer,
              s = this._indexBuffer,
              a = this.vertexSize,
              u = e._drawCallPool,
              h = this._dcIndex,
              c = this._aIndex,
              l = this._iIndex,
              f = u[h];
            (f.start = this._iIndex), (f.texArray = t);
            for (var p = r; p < n; ++p) {
              var d = i[p],
                v = d._texture.baseTexture,
                g = nt[v.alphaMode ? 1 : 0][d.blendMode];
              (i[p] = null),
                r < p &&
                  f.blend !== g &&
                  ((f.size = l - f.start),
                  (r = p),
                  ((f = u[++h]).texArray = t),
                  (f.start = l)),
                this.packInterleavedGeometry(d, o, s, c, l),
                (c += (d.vertexData.length / 2) * a),
                (l += d.indices.length),
                (f.blend = g);
            }
            r < n && ((f.size = l - f.start), ++h),
              (this._dcIndex = h),
              (this._aIndex = c),
              (this._iIndex = l);
          }),
          (e.prototype.bindAndClearTexArray = function (t) {
            for (var e = this.renderer.texture, r = 0; r < t.count; r++)
              e.bind(t.elements[r], t.ids[r]), (t.elements[r] = null);
            t.count = 0;
          }),
          (e.prototype.updateGeometry = function () {
            var t = this._packedGeometries,
              e = this._attributeBuffer,
              r = this._indexBuffer;
            V.CAN_UPLOAD_SAME_BUFFER
              ? (t[this._flushId]._buffer.update(e.rawBinaryData),
                t[this._flushId]._indexBuffer.update(r),
                this.renderer.geometry.updateBuffers())
              : (this._packedGeometryPoolSize <= this._flushId &&
                  (this._packedGeometryPoolSize++,
                  (t[this._flushId] = new this.geometryClass())),
                t[this._flushId]._buffer.update(e.rawBinaryData),
                t[this._flushId]._indexBuffer.update(r),
                this.renderer.geometry.bind(t[this._flushId]),
                this.renderer.geometry.updateBuffers(),
                this._flushId++);
          }),
          (e.prototype.drawBatches = function () {
            for (
              var t = this._dcIndex,
                r = this.renderer,
                n = r.gl,
                i = r.state,
                o = e._drawCallPool,
                s = null,
                a = 0;
              a < t;
              a++
            ) {
              var u = o[a],
                h = u.texArray,
                c = u.type,
                l = u.size,
                f = u.start,
                p = u.blend;
              s !== h && ((s = h), this.bindAndClearTexArray(h)),
                (this.state.blendMode = p),
                i.set(this.state),
                n.drawElements(c, l, n.UNSIGNED_SHORT, 2 * f);
            }
          }),
          (e.prototype.flush = function () {
            0 !== this._vertexCount &&
              ((this._attributeBuffer = this.getAttributeBuffer(
                this._vertexCount
              )),
              (this._indexBuffer = this.getIndexBuffer(this._indexCount)),
              (this._aIndex = 0),
              (this._iIndex = 0),
              (this._dcIndex = 0),
              this.buildTexturesAndDrawCalls(),
              this.updateGeometry(),
              this.drawBatches(),
              (this._bufferSize = 0),
              (this._vertexCount = 0),
              (this._indexCount = 0));
          }),
          (e.prototype.start = function () {
            this.renderer.state.set(this.state),
              this.renderer.shader.bind(this._shader),
              V.CAN_UPLOAD_SAME_BUFFER &&
                this.renderer.geometry.bind(
                  this._packedGeometries[this._flushId]
                );
          }),
          (e.prototype.stop = function () {
            this.flush();
          }),
          (e.prototype.destroy = function () {
            for (var e = 0; e < this._packedGeometryPoolSize; e++)
              this._packedGeometries[e] && this._packedGeometries[e].destroy();
            this.renderer.off("prerender", this.onPrerender, this),
              (this._aBuffers = null),
              (this._iBuffers = null),
              (this._packedGeometries = null),
              (this._attributeBuffer = null),
              (this._indexBuffer = null),
              this._shader && (this._shader.destroy(), (this._shader = null)),
              t.prototype.destroy.call(this);
          }),
          (e.prototype.getAttributeBuffer = function (t) {
            var e = at(Math.ceil(t / 8)),
              r = ht(e),
              n = 8 * e;
            this._aBuffers.length <= r && (this._iBuffers.length = r + 1);
            var i = this._aBuffers[n];
            return (
              i || (this._aBuffers[n] = i = new on(n * this.vertexSize * 4)), i
            );
          }),
          (e.prototype.getIndexBuffer = function (t) {
            var e = at(Math.ceil(t / 12)),
              r = ht(e),
              n = 12 * e;
            this._iBuffers.length <= r && (this._iBuffers.length = r + 1);
            var i = this._iBuffers[r];
            return i || (this._iBuffers[r] = i = new Uint16Array(n)), i;
          }),
          (e.prototype.packInterleavedGeometry = function (t, e, r, n, i) {
            for (
              var o = e.uint32View,
                s = e.float32View,
                a = n / this.vertexSize,
                u = t.uvs,
                h = t.indices,
                c = t.vertexData,
                l = t._texture.baseTexture._batchLocation,
                f = Math.min(t.worldAlpha, 1),
                p =
                  f < 1 && t._texture.baseTexture.alphaMode
                    ? ot(t._tintRGB, f)
                    : t._tintRGB + ((255 * f) << 24),
                d = 0;
              d < c.length;
              d += 2
            )
              (s[n++] = c[d]),
                (s[n++] = c[d + 1]),
                (s[n++] = u[d]),
                (s[n++] = u[d + 1]),
                (o[n++] = p),
                (s[n++] = l);
            for (d = 0; d < h.length; d++) r[i++] = a + h[d];
          }),
          (e._drawCallPool = []),
          (e._textureArrayPool = []),
          e
        );
      })($e),
      an = (function () {
        function t(t, e) {
          if (
            ((this.vertexSrc = t),
            (this.fragTemplate = e),
            (this.programCache = {}),
            (this.defaultGroupCache = {}),
            e.indexOf("%count%") < 0)
          )
            throw new Error('Fragment template must contain "%count%".');
          if (e.indexOf("%forloop%") < 0)
            throw new Error('Fragment template must contain "%forloop%".');
        }
        return (
          (t.prototype.generateShader = function (t) {
            if (!this.programCache[t]) {
              for (var e = new Int32Array(t), r = 0; r < t; r++) e[r] = r;
              this.defaultGroupCache[t] = Ke.from({ uSamplers: e }, !0);
              var n = this.fragTemplate;
              (n = (n = n.replace(/%count%/gi, "" + t)).replace(
                /%forloop%/gi,
                this.generateSampleSrc(t)
              )),
                (this.programCache[t] = new Mr(this.vertexSrc, n));
            }
            var i = {
              tint: new Float32Array([1, 1, 1, 1]),
              translationMatrix: new Dt(),
              default: this.defaultGroupCache[t],
            };
            return new Rr(this.programCache[t], i);
          }),
          (t.prototype.generateSampleSrc = function (t) {
            var e = "";
            (e += "\n"), (e += "\n");
            for (var r = 0; r < t; r++)
              r > 0 && (e += "\nelse "),
                r < t - 1 && (e += "if(vTextureId < " + r + ".5)"),
                (e += "\n{"),
                (e +=
                  "\n\tcolor = texture2D(uSamplers[" +
                  r +
                  "], vTextureCoord);"),
                (e += "\n}");
            return (e += "\n"), (e += "\n");
          }),
          t
        );
      })(),
      un = (function (t) {
        function e(e) {
          void 0 === e && (e = !1);
          var r = t.call(this) || this;
          return (
            (r._buffer = new Be(null, e, !1)),
            (r._indexBuffer = new Be(null, e, !0)),
            r
              .addAttribute("aVertexPosition", r._buffer, 2, !1, N.FLOAT)
              .addAttribute("aTextureCoord", r._buffer, 2, !1, N.FLOAT)
              .addAttribute("aColor", r._buffer, 4, !0, N.UNSIGNED_BYTE)
              .addAttribute("aTextureId", r._buffer, 1, !0, N.FLOAT)
              .addIndex(r._indexBuffer),
            r
          );
        }
        return pe(e, t), e;
      })(Ve),
      hn =
        "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n",
      cn =
        "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n",
      ln = (function () {
        function t() {}
        return (
          (t.create = function (t) {
            var e = Object.assign(
                { vertex: hn, fragment: cn, geometryClass: un, vertexSize: 6 },
                t
              ),
              r = e.vertex,
              n = e.fragment,
              i = e.vertexSize,
              o = e.geometryClass;
            return (function (t) {
              function e(e) {
                var s = t.call(this, e) || this;
                return (
                  (s.shaderGenerator = new an(r, n)),
                  (s.geometryClass = o),
                  (s.vertexSize = i),
                  s
                );
              }
              return pe(e, t), e;
            })(sn);
          }),
          Object.defineProperty(t, "defaultVertexSrc", {
            get: function () {
              return hn;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t, "defaultFragmentTemplate", {
            get: function () {
              return cn;
            },
            enumerable: !1,
            configurable: !0,
          }),
          t
        );
      })().create(),
      fn = (function () {
        function t(e) {
          var r = this;
          (e = Object.assign({ forceCanvas: !1 }, e)),
            (this.renderer = (function (t) {
              return tn.create(t);
            })(e)),
            (this.stage = new Kt()),
            t._plugins.forEach(function (t) {
              t.init.call(r, e);
            });
        }
        return (
          (t.registerPlugin = function (e) {
            t._plugins.push(e);
          }),
          (t.prototype.render = function () {
            this.renderer.render(this.stage);
          }),
          Object.defineProperty(t.prototype, "view", {
            get: function () {
              return this.renderer.view;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "screen", {
            get: function () {
              return this.renderer.screen;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.destroy = function (e, r) {
            var n = this,
              i = t._plugins.slice(0);
            i.reverse(),
              i.forEach(function (t) {
                t.destroy.call(n);
              }),
              this.stage.destroy(r),
              (this.stage = null),
              this.renderer.destroy(e),
              (this.renderer = null);
          }),
          t
        );
      })();
    fn._plugins = [];
    var pn = (function () {
      function t() {}
      return (
        (t.init = function (t) {
          var e = this;
          Object.defineProperty(this, "resizeTo", {
            set: function (t) {
              window.removeEventListener("resize", this.queueResize),
                (this._resizeTo = t),
                t &&
                  (window.addEventListener("resize", this.queueResize),
                  this.resize());
            },
            get: function () {
              return this._resizeTo;
            },
          }),
            (this.queueResize = function () {
              e._resizeTo &&
                (e.cancelResize(),
                (e._resizeId = requestAnimationFrame(function () {
                  return e.resize();
                })));
            }),
            (this.cancelResize = function () {
              e._resizeId &&
                (cancelAnimationFrame(e._resizeId), (e._resizeId = null));
            }),
            (this.resize = function () {
              if (e._resizeTo) {
                var t, r;
                if ((e.cancelResize(), e._resizeTo === window))
                  (t = window.innerWidth), (r = window.innerHeight);
                else {
                  var n = e._resizeTo;
                  (t = n.clientWidth), (r = n.clientHeight);
                }
                e.renderer.resize(t, r);
              }
            }),
            (this._resizeId = null),
            (this._resizeTo = null),
            (this.resizeTo = t.resizeTo || null);
        }),
        (t.destroy = function () {
          this.cancelResize(),
            (this.cancelResize = null),
            (this.queueResize = null),
            (this.resizeTo = null),
            (this.resize = null);
        }),
        t
      );
    })();
    fn.registerPlugin(pn);
    /*!
     * @pixi/extract - v5.3.0
     * Compiled Thu, 18 Jun 2020 23:27:40 UTC
     *
     * @pixi/extract is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */
    var dn = new Ot(),
      vn = (function () {
        function t(t) {
          (this.renderer = t), (t.extract = this);
        }
        return (
          (t.prototype.image = function (t, e, r) {
            var n = new Image();
            return (n.src = this.base64(t, e, r)), n;
          }),
          (t.prototype.base64 = function (t, e, r) {
            return this.canvas(t).toDataURL(e, r);
          }),
          (t.prototype.canvas = function (e) {
            var r,
              n,
              i,
              o = this.renderer,
              s = !1,
              a = !1;
            e &&
              (e instanceof Ne
                ? (i = e)
                : ((i = this.renderer.generateTexture(e)), (a = !0))),
              i
                ? ((r = i.baseTexture.resolution),
                  (n = i.frame),
                  (s = !1),
                  o.renderTexture.bind(i))
                : ((r = this.renderer.resolution),
                  (s = !0),
                  ((n = dn).width = this.renderer.width),
                  (n.height = this.renderer.height),
                  o.renderTexture.bind(null));
            var u = Math.floor(n.width * r + 1e-4),
              h = Math.floor(n.height * r + 1e-4),
              c = new _t(u, h, 1),
              l = new Uint8Array(4 * u * h),
              f = o.gl;
            f.readPixels(n.x * r, n.y * r, u, h, f.RGBA, f.UNSIGNED_BYTE, l);
            var p = c.context.getImageData(0, 0, u, h);
            if (
              (t.arrayPostDivide(l, p.data), c.context.putImageData(p, 0, 0), s)
            ) {
              var d = new _t(c.width, c.height, 1);
              d.context.scale(1, -1),
                d.context.drawImage(c.canvas, 0, -h),
                c.destroy(),
                (c = d);
            }
            return a && i.destroy(!0), c.canvas;
          }),
          (t.prototype.pixels = function (e) {
            var r,
              n,
              i,
              o = this.renderer,
              s = !1;
            e &&
              (e instanceof Ne
                ? (i = e)
                : ((i = this.renderer.generateTexture(e)), (s = !0))),
              i
                ? ((r = i.baseTexture.resolution),
                  (n = i.frame),
                  o.renderTexture.bind(i))
                : ((r = o.resolution),
                  ((n = dn).width = o.width),
                  (n.height = o.height),
                  o.renderTexture.bind(null));
            var a = n.width * r,
              u = n.height * r,
              h = new Uint8Array(4 * a * u),
              c = o.gl;
            return (
              c.readPixels(n.x * r, n.y * r, a, u, c.RGBA, c.UNSIGNED_BYTE, h),
              s && i.destroy(!0),
              t.arrayPostDivide(h, h),
              h
            );
          }),
          (t.prototype.destroy = function () {
            (this.renderer.extract = null), (this.renderer = null);
          }),
          (t.arrayPostDivide = function (t, e) {
            for (var r = 0; r < t.length; r += 4) {
              var n = (e[r + 3] = t[r + 3]);
              0 !== n
                ? ((e[r] = Math.round(Math.min((255 * t[r]) / n, 255))),
                  (e[r + 1] = Math.round(Math.min((255 * t[r + 1]) / n, 255))),
                  (e[r + 2] = Math.round(Math.min((255 * t[r + 2]) / n, 255))))
                : ((e[r] = t[r]), (e[r + 1] = t[r + 1]), (e[r + 2] = t[r + 2]));
            }
          }),
          t
        );
      })(),
      gn = r(123),
      yn = r.n(gn),
      mn = r(27),
      _n = r.n(mn);
    /*!
     * resource-loader - v3.0.1
     * https://github.com/pixijs/pixi-sound
     * Compiled Tue, 02 Jul 2019 14:06:18 UTC
     *
     * resource-loader is licensed under the MIT license.
     * http://www.opensource.org/licenses/mit-license
     */
    function xn() {}
    function bn(t, e, r, n) {
      var i = 0,
        o = t.length;
      !(function s(a) {
        a || i === o
          ? r && r(a)
          : n
          ? setTimeout(function () {
              e(t[i++], s);
            }, 1)
          : e(t[i++], s);
      })();
    }
    function En(t) {
      return function () {
        if (null === t) throw new Error("Callback was already called.");
        var e = t;
        (t = null), e.apply(this, arguments);
      };
    }
    function wn(t, e) {
      if (null == e) e = 1;
      else if (0 === e) throw new Error("Concurrency must not be zero");
      var r = 0,
        n = {
          _tasks: [],
          concurrency: e,
          saturated: xn,
          unsaturated: xn,
          buffer: e / 4,
          empty: xn,
          drain: xn,
          error: xn,
          started: !1,
          paused: !1,
          push: function (t, e) {
            i(t, !1, e);
          },
          kill: function () {
            (r = 0), (n.drain = xn), (n.started = !1), (n._tasks = []);
          },
          unshift: function (t, e) {
            i(t, !0, e);
          },
          process: function () {
            for (; !n.paused && r < n.concurrency && n._tasks.length; ) {
              var e = n._tasks.shift();
              0 === n._tasks.length && n.empty(),
                (r += 1) === n.concurrency && n.saturated(),
                t(e.data, En(o(e)));
            }
          },
          length: function () {
            return n._tasks.length;
          },
          running: function () {
            return r;
          },
          idle: function () {
            return n._tasks.length + r === 0;
          },
          pause: function () {
            !0 !== n.paused && (n.paused = !0);
          },
          resume: function () {
            if (!1 !== n.paused) {
              n.paused = !1;
              for (var t = 1; t <= n.concurrency; t++) n.process();
            }
          },
        };
      function i(t, e, r) {
        if (null != r && "function" != typeof r)
          throw new Error("task callback must be a function");
        if (((n.started = !0), null == t && n.idle()))
          setTimeout(function () {
            return n.drain();
          }, 1);
        else {
          var i = { data: t, callback: "function" == typeof r ? r : xn };
          e ? n._tasks.unshift(i) : n._tasks.push(i),
            setTimeout(function () {
              return n.process();
            }, 1);
        }
      }
      function o(t) {
        return function () {
          (r -= 1),
            t.callback.apply(t, arguments),
            null != arguments[0] && n.error(arguments[0], t.data),
            r <= n.concurrency - n.buffer && n.unsaturated(),
            n.idle() && n.drain(),
            n.process();
        };
      }
      return n;
    }
    var Tn = {};
    function Sn(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    function On(t, e, r) {
      return e && Sn(t.prototype, e), r && Sn(t, r), t;
    }
    var An = !(
        !window.XDomainRequest || "withCredentials" in new XMLHttpRequest()
      ),
      Pn = null;
    function In() {}
    var Cn = (function () {
      function t(e, r, n) {
        if ("string" != typeof e || "string" != typeof r)
          throw new Error(
            "Both name and url are required for constructing a resource."
          );
        (n = n || {}),
          (this._flags = 0),
          this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === r.indexOf("data:")),
          (this.name = e),
          (this.url = r),
          (this.extension = this._getExtension()),
          (this.data = null),
          (this.crossOrigin =
            !0 === n.crossOrigin ? "anonymous" : n.crossOrigin),
          (this.timeout = n.timeout || 0),
          (this.loadType = n.loadType || this._determineLoadType()),
          (this.xhrType = n.xhrType),
          (this.metadata = n.metadata || {}),
          (this.error = null),
          (this.xhr = null),
          (this.children = []),
          (this.type = t.TYPE.UNKNOWN),
          (this.progressChunk = 0),
          (this._dequeue = In),
          (this._onLoadBinding = null),
          (this._elementTimer = 0),
          (this._boundComplete = this.complete.bind(this)),
          (this._boundOnError = this._onError.bind(this)),
          (this._boundOnProgress = this._onProgress.bind(this)),
          (this._boundOnTimeout = this._onTimeout.bind(this)),
          (this._boundXhrOnError = this._xhrOnError.bind(this)),
          (this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this)),
          (this._boundXhrOnAbort = this._xhrOnAbort.bind(this)),
          (this._boundXhrOnLoad = this._xhrOnLoad.bind(this)),
          (this.onStart = new _n.a()),
          (this.onProgress = new _n.a()),
          (this.onComplete = new _n.a()),
          (this.onAfterMiddleware = new _n.a());
      }
      (t.setExtensionLoadType = function (e, r) {
        Mn(t._loadTypeMap, e, r);
      }),
        (t.setExtensionXhrType = function (e, r) {
          Mn(t._xhrTypeMap, e, r);
        });
      var e = t.prototype;
      return (
        (e.complete = function () {
          this._clearEvents(), this._finish();
        }),
        (e.abort = function (e) {
          if (!this.error) {
            if (((this.error = new Error(e)), this._clearEvents(), this.xhr))
              this.xhr.abort();
            else if (this.xdr) this.xdr.abort();
            else if (this.data)
              if (this.data.src) this.data.src = t.EMPTY_GIF;
              else
                for (; this.data.firstChild; )
                  this.data.removeChild(this.data.firstChild);
            this._finish();
          }
        }),
        (e.load = function (e) {
          var r = this;
          if (!this.isLoading)
            if (this.isComplete)
              e &&
                setTimeout(function () {
                  return e(r);
                }, 1);
            else
              switch (
                (e && this.onComplete.once(e),
                this._setFlag(t.STATUS_FLAGS.LOADING, !0),
                this.onStart.dispatch(this),
                (!1 !== this.crossOrigin &&
                  "string" == typeof this.crossOrigin) ||
                  (this.crossOrigin = this._determineCrossOrigin(this.url)),
                this.loadType)
              ) {
                case t.LOAD_TYPE.IMAGE:
                  (this.type = t.TYPE.IMAGE), this._loadElement("image");
                  break;
                case t.LOAD_TYPE.AUDIO:
                  (this.type = t.TYPE.AUDIO), this._loadSourceElement("audio");
                  break;
                case t.LOAD_TYPE.VIDEO:
                  (this.type = t.TYPE.VIDEO), this._loadSourceElement("video");
                  break;
                case t.LOAD_TYPE.XHR:
                default:
                  An && this.crossOrigin ? this._loadXdr() : this._loadXhr();
              }
        }),
        (e._hasFlag = function (t) {
          return 0 != (this._flags & t);
        }),
        (e._setFlag = function (t, e) {
          this._flags = e ? this._flags | t : this._flags & ~t;
        }),
        (e._clearEvents = function () {
          clearTimeout(this._elementTimer),
            this.data &&
              this.data.removeEventListener &&
              (this.data.removeEventListener("error", this._boundOnError, !1),
              this.data.removeEventListener("load", this._boundComplete, !1),
              this.data.removeEventListener(
                "progress",
                this._boundOnProgress,
                !1
              ),
              this.data.removeEventListener(
                "canplaythrough",
                this._boundComplete,
                !1
              )),
            this.xhr &&
              (this.xhr.removeEventListener
                ? (this.xhr.removeEventListener(
                    "error",
                    this._boundXhrOnError,
                    !1
                  ),
                  this.xhr.removeEventListener(
                    "timeout",
                    this._boundXhrOnTimeout,
                    !1
                  ),
                  this.xhr.removeEventListener(
                    "abort",
                    this._boundXhrOnAbort,
                    !1
                  ),
                  this.xhr.removeEventListener(
                    "progress",
                    this._boundOnProgress,
                    !1
                  ),
                  this.xhr.removeEventListener(
                    "load",
                    this._boundXhrOnLoad,
                    !1
                  ))
                : ((this.xhr.onerror = null),
                  (this.xhr.ontimeout = null),
                  (this.xhr.onprogress = null),
                  (this.xhr.onload = null)));
        }),
        (e._finish = function () {
          if (this.isComplete)
            throw new Error(
              "Complete called again for an already completed resource."
            );
          this._setFlag(t.STATUS_FLAGS.COMPLETE, !0),
            this._setFlag(t.STATUS_FLAGS.LOADING, !1),
            this.onComplete.dispatch(this);
        }),
        (e._loadElement = function (t) {
          this.metadata.loadElement
            ? (this.data = this.metadata.loadElement)
            : "image" === t && void 0 !== window.Image
            ? (this.data = new Image())
            : (this.data = document.createElement(t)),
            this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
            this.metadata.skipSource || (this.data.src = this.url),
            this.data.addEventListener("error", this._boundOnError, !1),
            this.data.addEventListener("load", this._boundComplete, !1),
            this.data.addEventListener("progress", this._boundOnProgress, !1),
            this.timeout &&
              (this._elementTimer = setTimeout(
                this._boundOnTimeout,
                this.timeout
              ));
        }),
        (e._loadSourceElement = function (t) {
          if (
            (this.metadata.loadElement
              ? (this.data = this.metadata.loadElement)
              : "audio" === t && void 0 !== window.Audio
              ? (this.data = new Audio())
              : (this.data = document.createElement(t)),
            null !== this.data)
          ) {
            if (
              (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin),
              !this.metadata.skipSource)
            )
              if (navigator.isCocoonJS)
                this.data.src = Array.isArray(this.url)
                  ? this.url[0]
                  : this.url;
              else if (Array.isArray(this.url))
                for (
                  var e = this.metadata.mimeType, r = 0;
                  r < this.url.length;
                  ++r
                )
                  this.data.appendChild(
                    this._createSource(
                      t,
                      this.url[r],
                      Array.isArray(e) ? e[r] : e
                    )
                  );
              else {
                var n = this.metadata.mimeType;
                this.data.appendChild(
                  this._createSource(t, this.url, Array.isArray(n) ? n[0] : n)
                );
              }
            this.data.addEventListener("error", this._boundOnError, !1),
              this.data.addEventListener("load", this._boundComplete, !1),
              this.data.addEventListener("progress", this._boundOnProgress, !1),
              this.data.addEventListener(
                "canplaythrough",
                this._boundComplete,
                !1
              ),
              this.data.load(),
              this.timeout &&
                (this._elementTimer = setTimeout(
                  this._boundOnTimeout,
                  this.timeout
                ));
          } else this.abort("Unsupported element: " + t);
        }),
        (e._loadXhr = function () {
          "string" != typeof this.xhrType &&
            (this.xhrType = this._determineXhrType());
          var e = (this.xhr = new XMLHttpRequest());
          e.open("GET", this.url, !0),
            (e.timeout = this.timeout),
            this.xhrType === t.XHR_RESPONSE_TYPE.JSON ||
            this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT
              ? (e.responseType = t.XHR_RESPONSE_TYPE.TEXT)
              : (e.responseType = this.xhrType),
            e.addEventListener("error", this._boundXhrOnError, !1),
            e.addEventListener("timeout", this._boundXhrOnTimeout, !1),
            e.addEventListener("abort", this._boundXhrOnAbort, !1),
            e.addEventListener("progress", this._boundOnProgress, !1),
            e.addEventListener("load", this._boundXhrOnLoad, !1),
            e.send();
        }),
        (e._loadXdr = function () {
          "string" != typeof this.xhrType &&
            (this.xhrType = this._determineXhrType());
          var t = (this.xhr = new XDomainRequest());
          (t.timeout = this.timeout || 5e3),
            (t.onerror = this._boundXhrOnError),
            (t.ontimeout = this._boundXhrOnTimeout),
            (t.onprogress = this._boundOnProgress),
            (t.onload = this._boundXhrOnLoad),
            t.open("GET", this.url, !0),
            setTimeout(function () {
              return t.send();
            }, 1);
        }),
        (e._createSource = function (t, e, r) {
          r || (r = t + "/" + this._getExtension(e));
          var n = document.createElement("source");
          return (n.src = e), (n.type = r), n;
        }),
        (e._onError = function (t) {
          this.abort("Failed to load element using: " + t.target.nodeName);
        }),
        (e._onProgress = function (t) {
          t &&
            t.lengthComputable &&
            this.onProgress.dispatch(this, t.loaded / t.total);
        }),
        (e._onTimeout = function () {
          this.abort("Load timed out.");
        }),
        (e._xhrOnError = function () {
          var t = this.xhr;
          this.abort(
            Rn(t) +
              " Request failed. Status: " +
              t.status +
              ', text: "' +
              t.statusText +
              '"'
          );
        }),
        (e._xhrOnTimeout = function () {
          var t = this.xhr;
          this.abort(Rn(t) + " Request timed out.");
        }),
        (e._xhrOnAbort = function () {
          var t = this.xhr;
          this.abort(Rn(t) + " Request was aborted by the user.");
        }),
        (e._xhrOnLoad = function () {
          var e = this.xhr,
            r = "",
            n = void 0 === e.status ? 200 : e.status;
          if (
            (("" !== e.responseType &&
              "text" !== e.responseType &&
              void 0 !== e.responseType) ||
              (r = e.responseText),
            0 === n &&
            (r.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER)
              ? (n = 200)
              : 1223 === n && (n = 204),
            2 === ((n / 100) | 0))
          ) {
            if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT)
              (this.data = r), (this.type = t.TYPE.TEXT);
            else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON)
              try {
                (this.data = JSON.parse(r)), (this.type = t.TYPE.JSON);
              } catch (t) {
                return void this.abort(
                  "Error trying to parse loaded json: " + t
                );
              }
            else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT)
              try {
                if (window.DOMParser) {
                  var i = new DOMParser();
                  this.data = i.parseFromString(r, "text/xml");
                } else {
                  var o = document.createElement("div");
                  (o.innerHTML = r), (this.data = o);
                }
                this.type = t.TYPE.XML;
              } catch (t) {
                return void this.abort(
                  "Error trying to parse loaded xml: " + t
                );
              }
            else this.data = e.response || r;
            this.complete();
          } else
            this.abort(
              "[" + e.status + "] " + e.statusText + ": " + e.responseURL
            );
        }),
        (e._determineCrossOrigin = function (t, e) {
          if (0 === t.indexOf("data:")) return "";
          if (window.origin !== window.location.origin) return "anonymous";
          (e = e || window.location),
            Pn || (Pn = document.createElement("a")),
            (Pn.href = t);
          var r =
              (!(t = yn()(Pn.href, { strictMode: !0 })).port &&
                "" === e.port) ||
              t.port === e.port,
            n = t.protocol ? t.protocol + ":" : "";
          return t.host === e.hostname && r && n === e.protocol
            ? ""
            : "anonymous";
        }),
        (e._determineXhrType = function () {
          return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT;
        }),
        (e._determineLoadType = function () {
          return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR;
        }),
        (e._getExtension = function () {
          var t = this.url,
            e = "";
          if (this.isDataUrl) {
            var r = t.indexOf("/");
            e = t.substring(r + 1, t.indexOf(";", r));
          } else {
            var n = t.indexOf("?"),
              i = t.indexOf("#"),
              o = Math.min(n > -1 ? n : t.length, i > -1 ? i : t.length);
            e = (t = t.substring(0, o)).substring(t.lastIndexOf(".") + 1);
          }
          return e.toLowerCase();
        }),
        (e._getMimeFromXhrType = function (e) {
          switch (e) {
            case t.XHR_RESPONSE_TYPE.BUFFER:
              return "application/octet-binary";
            case t.XHR_RESPONSE_TYPE.BLOB:
              return "application/blob";
            case t.XHR_RESPONSE_TYPE.DOCUMENT:
              return "application/xml";
            case t.XHR_RESPONSE_TYPE.JSON:
              return "application/json";
            case t.XHR_RESPONSE_TYPE.DEFAULT:
            case t.XHR_RESPONSE_TYPE.TEXT:
            default:
              return "text/plain";
          }
        }),
        On(t, [
          {
            key: "isDataUrl",
            get: function () {
              return this._hasFlag(t.STATUS_FLAGS.DATA_URL);
            },
          },
          {
            key: "isComplete",
            get: function () {
              return this._hasFlag(t.STATUS_FLAGS.COMPLETE);
            },
          },
          {
            key: "isLoading",
            get: function () {
              return this._hasFlag(t.STATUS_FLAGS.LOADING);
            },
          },
        ]),
        t
      );
    })();
    function Mn(t, e, r) {
      e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = r);
    }
    function Rn(t) {
      return t.toString().replace("object ", "");
    }
    (Cn.STATUS_FLAGS = { NONE: 0, DATA_URL: 1, COMPLETE: 2, LOADING: 4 }),
      (Cn.TYPE = {
        UNKNOWN: 0,
        JSON: 1,
        XML: 2,
        IMAGE: 3,
        AUDIO: 4,
        VIDEO: 5,
        TEXT: 6,
      }),
      (Cn.LOAD_TYPE = { XHR: 1, IMAGE: 2, AUDIO: 3, VIDEO: 4 }),
      (Cn.XHR_RESPONSE_TYPE = {
        DEFAULT: "text",
        BUFFER: "arraybuffer",
        BLOB: "blob",
        DOCUMENT: "document",
        JSON: "json",
        TEXT: "text",
      }),
      (Cn._loadTypeMap = {
        gif: Cn.LOAD_TYPE.IMAGE,
        png: Cn.LOAD_TYPE.IMAGE,
        bmp: Cn.LOAD_TYPE.IMAGE,
        jpg: Cn.LOAD_TYPE.IMAGE,
        jpeg: Cn.LOAD_TYPE.IMAGE,
        tif: Cn.LOAD_TYPE.IMAGE,
        tiff: Cn.LOAD_TYPE.IMAGE,
        webp: Cn.LOAD_TYPE.IMAGE,
        tga: Cn.LOAD_TYPE.IMAGE,
        svg: Cn.LOAD_TYPE.IMAGE,
        "svg+xml": Cn.LOAD_TYPE.IMAGE,
        mp3: Cn.LOAD_TYPE.AUDIO,
        ogg: Cn.LOAD_TYPE.AUDIO,
        wav: Cn.LOAD_TYPE.AUDIO,
        mp4: Cn.LOAD_TYPE.VIDEO,
        webm: Cn.LOAD_TYPE.VIDEO,
      }),
      (Cn._xhrTypeMap = {
        xhtml: Cn.XHR_RESPONSE_TYPE.DOCUMENT,
        html: Cn.XHR_RESPONSE_TYPE.DOCUMENT,
        htm: Cn.XHR_RESPONSE_TYPE.DOCUMENT,
        xml: Cn.XHR_RESPONSE_TYPE.DOCUMENT,
        tmx: Cn.XHR_RESPONSE_TYPE.DOCUMENT,
        svg: Cn.XHR_RESPONSE_TYPE.DOCUMENT,
        tsx: Cn.XHR_RESPONSE_TYPE.DOCUMENT,
        gif: Cn.XHR_RESPONSE_TYPE.BLOB,
        png: Cn.XHR_RESPONSE_TYPE.BLOB,
        bmp: Cn.XHR_RESPONSE_TYPE.BLOB,
        jpg: Cn.XHR_RESPONSE_TYPE.BLOB,
        jpeg: Cn.XHR_RESPONSE_TYPE.BLOB,
        tif: Cn.XHR_RESPONSE_TYPE.BLOB,
        tiff: Cn.XHR_RESPONSE_TYPE.BLOB,
        webp: Cn.XHR_RESPONSE_TYPE.BLOB,
        tga: Cn.XHR_RESPONSE_TYPE.BLOB,
        json: Cn.XHR_RESPONSE_TYPE.JSON,
        text: Cn.XHR_RESPONSE_TYPE.TEXT,
        txt: Cn.XHR_RESPONSE_TYPE.TEXT,
        ttf: Cn.XHR_RESPONSE_TYPE.BUFFER,
        otf: Cn.XHR_RESPONSE_TYPE.BUFFER,
      }),
      (Cn.EMPTY_GIF =
        "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
    var Dn = window.URL || window.webkitURL;
    var Ln = {
        caching: function (t, e) {
          var r = this;
          Tn[t.url]
            ? ((t.data = Tn[t.url]), t.complete())
            : t.onComplete.once(function () {
                return (Tn[r.url] = r.data);
              }),
            e();
        },
        parsing: function (t, e) {
          if (t.data) {
            if (t.xhr && t.xhrType === Cn.XHR_RESPONSE_TYPE.BLOB)
              if (window.Blob && "string" != typeof t.data) {
                if (0 === t.data.type.indexOf("image")) {
                  var r = Dn.createObjectURL(t.data);
                  return (
                    (t.blob = t.data),
                    (t.data = new Image()),
                    (t.data.src = r),
                    (t.type = Cn.TYPE.IMAGE),
                    void (t.data.onload = function () {
                      Dn.revokeObjectURL(r), (t.data.onload = null), e();
                    })
                  );
                }
              } else {
                var n = t.xhr.getResponseHeader("content-type");
                if (n && 0 === n.indexOf("image"))
                  return (
                    (t.data = new Image()),
                    (t.data.src =
                      "data:" +
                      n +
                      ";base64," +
                      (function (t) {
                        for (var e = "", r = 0; r < t.length; ) {
                          for (
                            var n = [0, 0, 0], i = [0, 0, 0, 0], o = 0;
                            o < n.length;
                            ++o
                          )
                            r < t.length
                              ? (n[o] = 255 & t.charCodeAt(r++))
                              : (n[o] = 0);
                          switch (
                            ((i[0] = n[0] >> 2),
                            (i[1] = ((3 & n[0]) << 4) | (n[1] >> 4)),
                            (i[2] = ((15 & n[1]) << 2) | (n[2] >> 6)),
                            (i[3] = 63 & n[2]),
                            r - (t.length - 1))
                          ) {
                            case 2:
                              (i[3] = 64), (i[2] = 64);
                              break;
                            case 1:
                              i[3] = 64;
                          }
                          for (var s = 0; s < i.length; ++s)
                            e +=
                              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(
                                i[s]
                              );
                        }
                        return e;
                      })(t.xhr.responseText)),
                    (t.type = Cn.TYPE.IMAGE),
                    void (t.data.onload = function () {
                      (t.data.onload = null), e();
                    })
                  );
              }
            e();
          } else e();
        },
      },
      Nn = /(#[\w-]+)?$/,
      Fn = (function () {
        function t(e, r) {
          var n = this;
          void 0 === e && (e = ""),
            void 0 === r && (r = 10),
            (this.baseUrl = e),
            (this.progress = 0),
            (this.loading = !1),
            (this.defaultQueryString = ""),
            (this._beforeMiddleware = []),
            (this._afterMiddleware = []),
            (this._resourcesParsing = []),
            (this._boundLoadResource = function (t, e) {
              return n._loadResource(t, e);
            }),
            (this._queue = wn(this._boundLoadResource, r)),
            this._queue.pause(),
            (this.resources = {}),
            (this.onProgress = new _n.a()),
            (this.onError = new _n.a()),
            (this.onLoad = new _n.a()),
            (this.onStart = new _n.a()),
            (this.onComplete = new _n.a());
          for (var i = 0; i < t._defaultBeforeMiddleware.length; ++i)
            this.pre(t._defaultBeforeMiddleware[i]);
          for (var o = 0; o < t._defaultAfterMiddleware.length; ++o)
            this.use(t._defaultAfterMiddleware[o]);
        }
        var e = t.prototype;
        return (
          (e.add = function (t, e, r, n) {
            if (Array.isArray(t)) {
              for (var i = 0; i < t.length; ++i) this.add(t[i]);
              return this;
            }
            if (
              ("object" == typeof t &&
                ((n = e || t.callback || t.onComplete),
                (r = t),
                (e = t.url),
                (t = t.name || t.key || t.url)),
              "string" != typeof e && ((n = r), (r = e), (e = t)),
              "string" != typeof e)
            )
              throw new Error("No url passed to add resource to loader.");
            if (
              ("function" == typeof r && ((n = r), (r = null)),
              this.loading && (!r || !r.parentResource))
            )
              throw new Error(
                "Cannot add resources while the loader is running."
              );
            if (this.resources[t])
              throw new Error('Resource named "' + t + '" already exists.');
            if (
              ((e = this._prepareUrl(e)),
              (this.resources[t] = new Cn(t, e, r)),
              "function" == typeof n &&
                this.resources[t].onAfterMiddleware.once(n),
              this.loading)
            ) {
              for (
                var o = r.parentResource, s = [], a = 0;
                a < o.children.length;
                ++a
              )
                o.children[a].isComplete || s.push(o.children[a]);
              var u = (o.progressChunk * (s.length + 1)) / (s.length + 2);
              o.children.push(this.resources[t]), (o.progressChunk = u);
              for (var h = 0; h < s.length; ++h) s[h].progressChunk = u;
              this.resources[t].progressChunk = u;
            }
            return this._queue.push(this.resources[t]), this;
          }),
          (e.pre = function (t) {
            return this._beforeMiddleware.push(t), this;
          }),
          (e.use = function (t) {
            return this._afterMiddleware.push(t), this;
          }),
          (e.reset = function () {
            for (var t in ((this.progress = 0),
            (this.loading = !1),
            this._queue.kill(),
            this._queue.pause(),
            this.resources)) {
              var e = this.resources[t];
              e._onLoadBinding && e._onLoadBinding.detach(),
                e.isLoading && e.abort();
            }
            return (this.resources = {}), this;
          }),
          (e.load = function (t) {
            if (
              ("function" == typeof t && this.onComplete.once(t), this.loading)
            )
              return this;
            if (this._queue.idle()) this._onStart(), this._onComplete();
            else {
              for (
                var e = 100 / this._queue._tasks.length, r = 0;
                r < this._queue._tasks.length;
                ++r
              )
                this._queue._tasks[r].data.progressChunk = e;
              this._onStart(), this._queue.resume();
            }
            return this;
          }),
          (e._prepareUrl = function (t) {
            var e,
              r = yn()(t, { strictMode: !0 });
            if (
              ((e =
                r.protocol || !r.path || 0 === t.indexOf("//")
                  ? t
                  : this.baseUrl.length &&
                    this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 &&
                    "/" !== t.charAt(0)
                  ? this.baseUrl + "/" + t
                  : this.baseUrl + t),
              this.defaultQueryString)
            ) {
              var n = Nn.exec(e)[0];
              -1 !== (e = e.substr(0, e.length - n.length)).indexOf("?")
                ? (e += "&" + this.defaultQueryString)
                : (e += "?" + this.defaultQueryString),
                (e += n);
            }
            return e;
          }),
          (e._loadResource = function (t, e) {
            var r = this;
            (t._dequeue = e),
              bn(
                this._beforeMiddleware,
                function (e, n) {
                  e.call(r, t, function () {
                    n(t.isComplete ? {} : null);
                  });
                },
                function () {
                  t.isComplete
                    ? r._onLoad(t)
                    : ((t._onLoadBinding = t.onComplete.once(r._onLoad, r)),
                      t.load());
                },
                !0
              );
          }),
          (e._onStart = function () {
            (this.progress = 0),
              (this.loading = !0),
              this.onStart.dispatch(this);
          }),
          (e._onComplete = function () {
            (this.progress = 100),
              (this.loading = !1),
              this.onComplete.dispatch(this, this.resources);
          }),
          (e._onLoad = function (t) {
            var e = this;
            (t._onLoadBinding = null),
              this._resourcesParsing.push(t),
              t._dequeue(),
              bn(
                this._afterMiddleware,
                function (r, n) {
                  r.call(e, t, n);
                },
                function () {
                  t.onAfterMiddleware.dispatch(t),
                    (e.progress = Math.min(100, e.progress + t.progressChunk)),
                    e.onProgress.dispatch(e, t),
                    t.error
                      ? e.onError.dispatch(t.error, e, t)
                      : e.onLoad.dispatch(e, t),
                    e._resourcesParsing.splice(
                      e._resourcesParsing.indexOf(t),
                      1
                    ),
                    e._queue.idle() &&
                      0 === e._resourcesParsing.length &&
                      e._onComplete();
                },
                !0
              );
          }),
          On(t, [
            {
              key: "concurrency",
              get: function () {
                return this._queue.concurrency;
              },
              set: function (t) {
                this._queue.concurrency = t;
              },
            },
          ]),
          t
        );
      })();
    (Fn._defaultBeforeMiddleware = []),
      (Fn._defaultAfterMiddleware = []),
      (Fn.pre = function (t) {
        return Fn._defaultBeforeMiddleware.push(t), Fn;
      }),
      (Fn.use = function (t) {
        return Fn._defaultAfterMiddleware.push(t), Fn;
      });
    /*!
     * @pixi/loaders - v5.3.0
     * Compiled Thu, 18 Jun 2020 23:27:40 UTC
     *
     * @pixi/loaders is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */
    var Un = Cn,
      kn = function (t, e) {
        return (kn =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var Bn =
        (function () {
          function t() {}
          return (
            (t.use = function (t, e) {
              t.data &&
                t.type === Cn.TYPE.IMAGE &&
                (t.texture = De.fromLoader(t.data, t.url, t.name)),
                e();
            }),
            t
          );
        })(),
      jn = (function (t) {
        function e(r, n) {
          for (
            var i = t.call(this, r, n) || this, o = 0;
            o < e._plugins.length;
            ++o
          ) {
            var s = e._plugins[o],
              a = s.pre,
              u = s.use;
            a && i.pre(a), u && i.use(u);
          }
          return (i._protected = !1), i;
        }
        return (
          (function (t, e) {
            function r() {
              this.constructor = t;
            }
            kn(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          })(e, t),
          (e.prototype.destroy = function () {
            this._protected || this.reset();
          }),
          Object.defineProperty(e, "shared", {
            get: function () {
              var t = e._shared;
              return t || (((t = new e())._protected = !0), (e._shared = t)), t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.registerPlugin = function (t) {
            return e._plugins.push(t), t.add && t.add(), e;
          }),
          (e._plugins = []),
          e
        );
      })(Fn);
    jn.registerPlugin({ use: Ln.parsing }), jn.registerPlugin(Bn);
    var Hn = (function () {
        function t() {}
        return (
          (t.init = function (t) {
            (t = Object.assign({ sharedLoader: !1 }, t)),
              (this.loader = t.sharedLoader ? jn.shared : new jn());
          }),
          (t.destroy = function () {
            this.loader && (this.loader.destroy(), (this.loader = null));
          }),
          t
        );
      })(),
      Gn = function (t, e) {
        return (Gn =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    /*!
     * @pixi/particles - v5.3.0
     * Compiled Thu, 18 Jun 2020 23:27:40 UTC
     *
     * @pixi/particles is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ function Xn(
      t,
      e
    ) {
      function r() {
        this.constructor = t;
      }
      Gn(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((r.prototype = e.prototype), new r()));
    }
    !(function (t) {
      function e(e, r, n, i) {
        void 0 === e && (e = 1500),
          void 0 === n && (n = 16384),
          void 0 === i && (i = !1);
        var o = t.call(this) || this;
        return (
          n > 16384 && (n = 16384),
          (o._properties = [!1, !0, !1, !1, !1]),
          (o._maxSize = e),
          (o._batchSize = n),
          (o._buffers = null),
          (o._bufferUpdateIDs = []),
          (o._updateID = 0),
          (o.interactiveChildren = !1),
          (o.blendMode = M.NORMAL),
          (o.autoResize = i),
          (o.roundPixels = !0),
          (o.baseTexture = null),
          o.setProperties(r),
          (o._tint = 0),
          (o.tintRgb = new Float32Array(4)),
          (o.tint = 16777215),
          o
        );
      }
      Xn(e, t),
        (e.prototype.setProperties = function (t) {
          t &&
            ((this._properties[0] =
              "vertices" in t || "scale" in t
                ? !!t.vertices || !!t.scale
                : this._properties[0]),
            (this._properties[1] =
              "position" in t ? !!t.position : this._properties[1]),
            (this._properties[2] =
              "rotation" in t ? !!t.rotation : this._properties[2]),
            (this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3]),
            (this._properties[4] =
              "tint" in t || "alpha" in t
                ? !!t.tint || !!t.alpha
                : this._properties[4]));
        }),
        (e.prototype.updateTransform = function () {
          this.displayObjectUpdateTransform();
        }),
        Object.defineProperty(e.prototype, "tint", {
          get: function () {
            return this._tint;
          },
          set: function (t) {
            (this._tint = t), tt(t, this.tintRgb);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.render = function (t) {
          var e = this;
          this.visible &&
            !(this.worldAlpha <= 0) &&
            this.children.length &&
            this.renderable &&
            (this.baseTexture ||
              ((this.baseTexture = this.children[0]._texture.baseTexture),
              this.baseTexture.valid ||
                this.baseTexture.once("update", function () {
                  return e.onChildrenChange(0);
                })),
            t.batch.setObjectRenderer(t.plugins.particle),
            t.plugins.particle.render(this));
        }),
        (e.prototype.onChildrenChange = function (t) {
          for (
            var e = Math.floor(t / this._batchSize);
            this._bufferUpdateIDs.length < e;

          )
            this._bufferUpdateIDs.push(0);
          this._bufferUpdateIDs[e] = ++this._updateID;
        }),
        (e.prototype.dispose = function () {
          if (this._buffers) {
            for (var t = 0; t < this._buffers.length; ++t)
              this._buffers[t].destroy();
            this._buffers = null;
          }
        }),
        (e.prototype.destroy = function (e) {
          t.prototype.destroy.call(this, e),
            this.dispose(),
            (this._properties = null),
            (this._buffers = null),
            (this._bufferUpdateIDs = null);
        });
    })(Kt);
    var zn,
      Vn,
      Yn = (function () {
        function t(t, e, r) {
          (this.geometry = new Ve()),
            (this.indexBuffer = null),
            (this.size = r),
            (this.dynamicProperties = []),
            (this.staticProperties = []);
          for (var n = 0; n < t.length; ++n) {
            var i = t[n];
            (i = {
              attributeName: i.attributeName,
              size: i.size,
              uploadFunction: i.uploadFunction,
              type: i.type || N.FLOAT,
              offset: i.offset,
            }),
              e[n]
                ? this.dynamicProperties.push(i)
                : this.staticProperties.push(i);
          }
          (this.staticStride = 0),
            (this.staticBuffer = null),
            (this.staticData = null),
            (this.staticDataUint32 = null),
            (this.dynamicStride = 0),
            (this.dynamicBuffer = null),
            (this.dynamicData = null),
            (this.dynamicDataUint32 = null),
            (this._updateID = 0),
            this.initBuffers();
        }
        return (
          (t.prototype.initBuffers = function () {
            var t = this.geometry,
              e = 0;
            (this.indexBuffer = new Be(
              (function (t, e) {
                void 0 === e && (e = null);
                var r = 6 * t;
                if ((e = e || new Uint16Array(r)).length !== r)
                  throw new Error(
                    "Out buffer length is incorrect, got " +
                      e.length +
                      " and expected " +
                      r
                  );
                for (var n = 0, i = 0; n < r; n += 6, i += 4)
                  (e[n + 0] = i + 0),
                    (e[n + 1] = i + 1),
                    (e[n + 2] = i + 2),
                    (e[n + 3] = i + 0),
                    (e[n + 4] = i + 2),
                    (e[n + 5] = i + 3);
                return e;
              })(this.size),
              !0,
              !0
            )),
              t.addIndex(this.indexBuffer),
              (this.dynamicStride = 0);
            for (var r = 0; r < this.dynamicProperties.length; ++r) {
              ((s = this.dynamicProperties[r]).offset = e),
                (e += s.size),
                (this.dynamicStride += s.size);
            }
            var n = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
            (this.dynamicData = new Float32Array(n)),
              (this.dynamicDataUint32 = new Uint32Array(n)),
              (this.dynamicBuffer = new Be(this.dynamicData, !1, !1));
            var i = 0;
            this.staticStride = 0;
            for (r = 0; r < this.staticProperties.length; ++r) {
              ((s = this.staticProperties[r]).offset = i),
                (i += s.size),
                (this.staticStride += s.size);
            }
            var o = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
            (this.staticData = new Float32Array(o)),
              (this.staticDataUint32 = new Uint32Array(o)),
              (this.staticBuffer = new Be(this.staticData, !0, !1));
            for (r = 0; r < this.dynamicProperties.length; ++r) {
              var s = this.dynamicProperties[r];
              t.addAttribute(
                s.attributeName,
                this.dynamicBuffer,
                0,
                s.type === N.UNSIGNED_BYTE,
                s.type,
                4 * this.dynamicStride,
                4 * s.offset
              );
            }
            for (r = 0; r < this.staticProperties.length; ++r) {
              s = this.staticProperties[r];
              t.addAttribute(
                s.attributeName,
                this.staticBuffer,
                0,
                s.type === N.UNSIGNED_BYTE,
                s.type,
                4 * this.staticStride,
                4 * s.offset
              );
            }
          }),
          (t.prototype.uploadDynamic = function (t, e, r) {
            for (var n = 0; n < this.dynamicProperties.length; n++) {
              var i = this.dynamicProperties[n];
              i.uploadFunction(
                t,
                e,
                r,
                i.type === N.UNSIGNED_BYTE
                  ? this.dynamicDataUint32
                  : this.dynamicData,
                this.dynamicStride,
                i.offset
              );
            }
            this.dynamicBuffer._updateID++;
          }),
          (t.prototype.uploadStatic = function (t, e, r) {
            for (var n = 0; n < this.staticProperties.length; n++) {
              var i = this.staticProperties[n];
              i.uploadFunction(
                t,
                e,
                r,
                i.type === N.UNSIGNED_BYTE
                  ? this.staticDataUint32
                  : this.staticData,
                this.staticStride,
                i.offset
              );
            }
            this.staticBuffer._updateID++;
          }),
          (t.prototype.destroy = function () {
            (this.indexBuffer = null),
              (this.dynamicProperties = null),
              (this.dynamicBuffer = null),
              (this.dynamicData = null),
              (this.dynamicDataUint32 = null),
              (this.staticProperties = null),
              (this.staticBuffer = null),
              (this.staticData = null),
              (this.staticDataUint32 = null),
              this.geometry.destroy();
          }),
          t
        );
      })(),
      Wn = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.shader = null),
            (r.properties = null),
            (r.tempMatrix = new Dt()),
            (r.properties = [
              {
                attributeName: "aVertexPosition",
                size: 2,
                uploadFunction: r.uploadVertices,
                offset: 0,
              },
              {
                attributeName: "aPositionCoord",
                size: 2,
                uploadFunction: r.uploadPosition,
                offset: 0,
              },
              {
                attributeName: "aRotation",
                size: 1,
                uploadFunction: r.uploadRotation,
                offset: 0,
              },
              {
                attributeName: "aTextureCoord",
                size: 2,
                uploadFunction: r.uploadUvs,
                offset: 0,
              },
              {
                attributeName: "aColor",
                size: 1,
                type: N.UNSIGNED_BYTE,
                uploadFunction: r.uploadTint,
                offset: 0,
              },
            ]),
            (r.shader = Rr.from(
              "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nattribute vec2 aPositionCoord;\nattribute float aRotation;\n\nuniform mat3 translationMatrix;\nuniform vec4 uColor;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void){\n    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);\n    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);\n\n    vec2 v = vec2(x, y);\n    v = v + aPositionCoord;\n\n    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vColor = aColor * uColor;\n}\n",
              "varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n    gl_FragColor = color;\n}",
              {}
            )),
            (r.state = Dr.for2d()),
            r
          );
        }
        return (
          Xn(e, t),
          (e.prototype.render = function (t) {
            var e = t.children,
              r = t._maxSize,
              n = t._batchSize,
              i = this.renderer,
              o = e.length;
            if (0 !== o) {
              o > r && !t.autoResize && (o = r);
              var s = t._buffers;
              s || (s = t._buffers = this.generateBuffers(t));
              var a = e[0]._texture.baseTexture;
              (this.state.blendMode = it(t.blendMode, a.alphaMode)),
                i.state.set(this.state);
              var u,
                h,
                c,
                l,
                f = i.gl,
                p = t.worldTransform.copyTo(this.tempMatrix);
              p.prepend(i.globalUniforms.uniforms.projectionMatrix),
                (this.shader.uniforms.translationMatrix = p.toArray(!0)),
                (this.shader.uniforms.uColor =
                  ((u = t.tintRgb),
                  (h = t.worldAlpha),
                  (c = this.shader.uniforms.uColor),
                  (l = a.alphaMode),
                  (c = c || new Float32Array(4)),
                  l || void 0 === l
                    ? ((c[0] = u[0] * h), (c[1] = u[1] * h), (c[2] = u[2] * h))
                    : ((c[0] = u[0]), (c[1] = u[1]), (c[2] = u[2])),
                  (c[3] = h),
                  c)),
                (this.shader.uniforms.uSampler = a),
                this.renderer.shader.bind(this.shader);
              for (var d = !1, v = 0, g = 0; v < o; v += n, g += 1) {
                var y = o - v;
                y > n && (y = n),
                  g >= s.length && s.push(this._generateOneMoreBuffer(t));
                var m = s[g];
                m.uploadDynamic(e, v, y);
                var _ = t._bufferUpdateIDs[g] || 0;
                (d = d || m._updateID < _) &&
                  ((m._updateID = t._updateID), m.uploadStatic(e, v, y)),
                  i.geometry.bind(m.geometry),
                  f.drawElements(f.TRIANGLES, 6 * y, f.UNSIGNED_SHORT, 0);
              }
            }
          }),
          (e.prototype.generateBuffers = function (t) {
            for (
              var e = [],
                r = t._maxSize,
                n = t._batchSize,
                i = t._properties,
                o = 0;
              o < r;
              o += n
            )
              e.push(new Yn(this.properties, i, n));
            return e;
          }),
          (e.prototype._generateOneMoreBuffer = function (t) {
            var e = t._batchSize,
              r = t._properties;
            return new Yn(this.properties, r, e);
          }),
          (e.prototype.uploadVertices = function (t, e, r, n, i, o) {
            for (var s = 0, a = 0, u = 0, h = 0, c = 0; c < r; ++c) {
              var l = t[e + c],
                f = l._texture,
                p = l.scale.x,
                d = l.scale.y,
                v = f.trim,
                g = f.orig;
              v
                ? ((s = (a = v.x - l.anchor.x * g.width) + v.width),
                  (u = (h = v.y - l.anchor.y * g.height) + v.height))
                : ((s = g.width * (1 - l.anchor.x)),
                  (a = g.width * -l.anchor.x),
                  (u = g.height * (1 - l.anchor.y)),
                  (h = g.height * -l.anchor.y)),
                (n[o] = a * p),
                (n[o + 1] = h * d),
                (n[o + i] = s * p),
                (n[o + i + 1] = h * d),
                (n[o + 2 * i] = s * p),
                (n[o + 2 * i + 1] = u * d),
                (n[o + 3 * i] = a * p),
                (n[o + 3 * i + 1] = u * d),
                (o += 4 * i);
            }
          }),
          (e.prototype.uploadPosition = function (t, e, r, n, i, o) {
            for (var s = 0; s < r; s++) {
              var a = t[e + s].position;
              (n[o] = a.x),
                (n[o + 1] = a.y),
                (n[o + i] = a.x),
                (n[o + i + 1] = a.y),
                (n[o + 2 * i] = a.x),
                (n[o + 2 * i + 1] = a.y),
                (n[o + 3 * i] = a.x),
                (n[o + 3 * i + 1] = a.y),
                (o += 4 * i);
            }
          }),
          (e.prototype.uploadRotation = function (t, e, r, n, i, o) {
            for (var s = 0; s < r; s++) {
              var a = t[e + s].rotation;
              (n[o] = a),
                (n[o + i] = a),
                (n[o + 2 * i] = a),
                (n[o + 3 * i] = a),
                (o += 4 * i);
            }
          }),
          (e.prototype.uploadUvs = function (t, e, r, n, i, o) {
            for (var s = 0; s < r; ++s) {
              var a = t[e + s]._texture._uvs;
              a
                ? ((n[o] = a.x0),
                  (n[o + 1] = a.y0),
                  (n[o + i] = a.x1),
                  (n[o + i + 1] = a.y1),
                  (n[o + 2 * i] = a.x2),
                  (n[o + 2 * i + 1] = a.y2),
                  (n[o + 3 * i] = a.x3),
                  (n[o + 3 * i + 1] = a.y3),
                  (o += 4 * i))
                : ((n[o] = 0),
                  (n[o + 1] = 0),
                  (n[o + i] = 0),
                  (n[o + i + 1] = 0),
                  (n[o + 2 * i] = 0),
                  (n[o + 2 * i + 1] = 0),
                  (n[o + 3 * i] = 0),
                  (n[o + 3 * i + 1] = 0),
                  (o += 4 * i));
            }
          }),
          (e.prototype.uploadTint = function (t, e, r, n, i, o) {
            for (var s = 0; s < r; ++s) {
              var a = t[e + s],
                u = a._texture.baseTexture.alphaMode > 0,
                h = a.alpha,
                c =
                  h < 1 && u
                    ? ot(a._tintRGB, h)
                    : a._tintRGB + ((255 * h) << 24);
              (n[o] = c),
                (n[o + i] = c),
                (n[o + 2 * i] = c),
                (n[o + 3 * i] = c),
                (o += 4 * i);
            }
          }),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this),
              this.shader && (this.shader.destroy(), (this.shader = null)),
              (this.tempMatrix = null);
          }),
          e
        );
      })($e);
    !(function (t) {
      (t.MITER = "miter"), (t.BEVEL = "bevel"), (t.ROUND = "round");
    })(zn || (zn = {})),
      (function (t) {
        (t.BUTT = "butt"), (t.ROUND = "round"), (t.SQUARE = "square");
      })(Vn || (Vn = {}));
    var qn = {
        adaptive: !0,
        maxLength: 10,
        minSegments: 8,
        maxSegments: 2048,
        epsilon: 1e-4,
        _segmentsCount: function (t, e) {
          if ((void 0 === e && (e = 20), !this.adaptive || !t || isNaN(t)))
            return e;
          var r = Math.ceil(t / this.maxLength);
          return (
            r < this.minSegments
              ? (r = this.minSegments)
              : r > this.maxSegments && (r = this.maxSegments),
            r
          );
        },
      },
      Kn = (function () {
        function t() {
          (this.color = 16777215),
            (this.alpha = 1),
            (this.texture = De.WHITE),
            (this.matrix = null),
            (this.visible = !1),
            this.reset();
        }
        return (
          (t.prototype.clone = function () {
            var e = new t();
            return (
              (e.color = this.color),
              (e.alpha = this.alpha),
              (e.texture = this.texture),
              (e.matrix = this.matrix),
              (e.visible = this.visible),
              e
            );
          }),
          (t.prototype.reset = function () {
            (this.color = 16777215),
              (this.alpha = 1),
              (this.texture = De.WHITE),
              (this.matrix = null),
              (this.visible = !1);
          }),
          (t.prototype.destroy = function () {
            (this.texture = null), (this.matrix = null);
          }),
          t
        );
      })(),
      Zn = function (t, e) {
        return (Zn =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    function Jn(t, e) {
      function r() {
        this.constructor = t;
      }
      Zn(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((r.prototype = e.prototype), new r()));
    }
    var $n = {
        build: function (t) {
          t.points = t.shape.points.slice();
        },
        triangulate: function (t, e) {
          var r = t.points,
            n = t.holes,
            i = e.points,
            o = e.indices;
          if (r.length >= 6) {
            for (var s = [], a = 0; a < n.length; a++) {
              var u = n[a];
              s.push(r.length / 2), (r = r.concat(u.points));
            }
            var h = K()(r, s, 2);
            if (!h) return;
            var c = i.length / 2;
            for (a = 0; a < h.length; a += 3)
              o.push(h[a] + c), o.push(h[a + 1] + c), o.push(h[a + 2] + c);
            for (a = 0; a < r.length; a++) i.push(r[a]);
          }
        },
      },
      Qn = {
        build: function (t) {
          var e,
            r,
            n = t.shape,
            i = t.points,
            o = n.x,
            s = n.y;
          if (((i.length = 0), t.type === Et.CIRC))
            (e = n.radius), (r = n.radius);
          else {
            var a = t.shape;
            (e = a.width), (r = a.height);
          }
          if (0 !== e && 0 !== r) {
            var u =
              Math.floor(30 * Math.sqrt(n.radius)) ||
              Math.floor(15 * Math.sqrt(e + r));
            u /= 2.3;
            for (var h = (2 * Math.PI) / u, c = 0; c < u - 0.5; c++)
              i.push(o + Math.sin(-h * c) * e, s + Math.cos(-h * c) * r);
            i.push(i[0], i[1]);
          }
        },
        triangulate: function (t, e) {
          var r = t.points,
            n = e.points,
            i = e.indices,
            o = n.length / 2,
            s = o,
            a = t.shape,
            u = t.matrix,
            h = a.x,
            c = a.y;
          n.push(
            t.matrix ? u.a * h + u.c * c + u.tx : h,
            t.matrix ? u.b * h + u.d * c + u.ty : c
          );
          for (var l = 0; l < r.length; l += 2)
            n.push(r[l], r[l + 1]), i.push(o++, s, o);
        },
      },
      ti = {
        build: function (t) {
          var e = t.shape,
            r = e.x,
            n = e.y,
            i = e.width,
            o = e.height,
            s = t.points;
          (s.length = 0), s.push(r, n, r + i, n, r + i, n + o, r, n + o);
        },
        triangulate: function (t, e) {
          var r = t.points,
            n = e.points,
            i = n.length / 2;
          n.push(r[0], r[1], r[2], r[3], r[6], r[7], r[4], r[5]),
            e.indices.push(i, i + 1, i + 2, i + 1, i + 2, i + 3);
        },
      };
    function ei(t, e, r) {
      return t + (e - t) * r;
    }
    function ri(t, e, r, n, i, o, s) {
      void 0 === s && (s = []);
      for (
        var a = s, u = 0, h = 0, c = 0, l = 0, f = 0, p = 0, d = 0, v = 0;
        d <= 20;
        ++d
      )
        (u = ei(t, r, (v = d / 20))),
          (h = ei(e, n, v)),
          (c = ei(r, i, v)),
          (l = ei(n, o, v)),
          (f = ei(u, c, v)),
          (p = ei(h, l, v)),
          a.push(f, p);
      return a;
    }
    var ni = {
      build: function (t) {
        var e = t.shape,
          r = t.points,
          n = e.x,
          i = e.y,
          o = e.width,
          s = e.height,
          a = Math.max(0, Math.min(e.radius, Math.min(o, s) / 2));
        (r.length = 0),
          a
            ? (ri(n, i + a, n, i, n + a, i, r),
              ri(n + o - a, i, n + o, i, n + o, i + a, r),
              ri(n + o, i + s - a, n + o, i + s, n + o - a, i + s, r),
              ri(n + a, i + s, n, i + s, n, i + s - a, r))
            : r.push(n, i, n + o, i, n + o, i + s, n, i + s);
      },
      triangulate: function (t, e) {
        for (
          var r = t.points,
            n = e.points,
            i = e.indices,
            o = n.length / 2,
            s = K()(r, null, 2),
            a = 0,
            u = s.length;
          a < u;
          a += 3
        )
          i.push(s[a] + o), i.push(s[a + 1] + o), i.push(s[a + 2] + o);
        for (a = 0, u = r.length; a < u; a++) n.push(r[a], r[++a]);
      },
    };
    function ii(t, e, r, n, i, o, s, a) {
      var u, h;
      s ? ((u = n), (h = -r)) : ((u = -n), (h = r));
      var c = t - r * i + u,
        l = e - n * i + h,
        f = t + r * o + u,
        p = e + n * o + h;
      return a.push(c, l), a.push(f, p), 2;
    }
    function oi(t, e, r, n, i, o, s, a) {
      var u = r - t,
        h = n - e,
        c = Math.atan2(u, h),
        l = Math.atan2(i - t, o - e);
      a && c < l ? (c += 2 * Math.PI) : !a && c > l && (l += 2 * Math.PI);
      var f = c,
        p = l - c,
        d = Math.abs(p),
        v = Math.sqrt(u * u + h * h),
        g = 1 + (((15 * d * Math.sqrt(v)) / Math.PI) >> 0),
        y = p / g;
      if (((f += y), a)) {
        s.push(t, e), s.push(r, n);
        for (var m = 1, _ = f; m < g; m++, _ += y)
          s.push(t, e), s.push(t + Math.sin(_) * v, e + Math.cos(_) * v);
        s.push(t, e), s.push(i, o);
      } else {
        s.push(r, n), s.push(t, e);
        for (m = 1, _ = f; m < g; m++, _ += y)
          s.push(t + Math.sin(_) * v, e + Math.cos(_) * v), s.push(t, e);
        s.push(i, o), s.push(t, e);
      }
      return 2 * g;
    }
    function si(t, e) {
      t.lineStyle.native
        ? (function (t, e) {
            var r = 0,
              n = t.shape,
              i = t.points || n.points,
              o = n.type !== Et.POLY || n.closeStroke;
            if (0 !== i.length) {
              var s = e.points,
                a = e.indices,
                u = i.length / 2,
                h = s.length / 2,
                c = h;
              for (s.push(i[0], i[1]), r = 1; r < u; r++)
                s.push(i[2 * r], i[2 * r + 1]), a.push(c, c + 1), c++;
              o && a.push(c, h);
            }
          })(t, e)
        : (function (t, e) {
            var r = t.shape,
              n = t.points || r.points.slice(),
              i = e.closePointEps;
            if (0 !== n.length) {
              var o = t.lineStyle,
                s = new Mt(n[0], n[1]),
                a = new Mt(n[n.length - 2], n[n.length - 1]),
                u = r.type !== Et.POLY || r.closeStroke,
                h = Math.abs(s.x - a.x) < i && Math.abs(s.y - a.y) < i;
              if (u) {
                (n = n.slice()),
                  h &&
                    (n.pop(), n.pop(), a.set(n[n.length - 2], n[n.length - 1]));
                var c = 0.5 * (s.x + a.x),
                  l = 0.5 * (a.y + s.y);
                n.unshift(c, l), n.push(c, l);
              }
              var f = e.points,
                p = n.length / 2,
                d = n.length,
                v = f.length / 2,
                g = o.width / 2,
                y = g * g,
                m = o.miterLimit * o.miterLimit,
                _ = n[0],
                x = n[1],
                b = n[2],
                E = n[3],
                w = 0,
                T = 0,
                S = -(x - E),
                O = _ - b,
                A = 0,
                P = 0,
                I = Math.sqrt(S * S + O * O);
              (S /= I), (O /= I), (S *= g), (O *= g);
              var C = o.alignment,
                M = 2 * (1 - C),
                R = 2 * C;
              u ||
                (o.cap === Vn.ROUND
                  ? (d +=
                      oi(
                        _ - S * (M - R) * 0.5,
                        x - O * (M - R) * 0.5,
                        _ - S * M,
                        x - O * M,
                        _ + S * R,
                        x + O * R,
                        f,
                        !0
                      ) + 2)
                  : o.cap === Vn.SQUARE && (d += ii(_, x, S, O, M, R, !0, f))),
                f.push(_ - S * M, x - O * M),
                f.push(_ + S * R, x + O * R);
              for (var D = 1; D < p - 1; ++D) {
                (_ = n[2 * (D - 1)]),
                  (x = n[2 * (D - 1) + 1]),
                  (b = n[2 * D]),
                  (E = n[2 * D + 1]),
                  (w = n[2 * (D + 1)]),
                  (T = n[2 * (D + 1) + 1]),
                  (S = -(x - E)),
                  (O = _ - b),
                  (S /= I = Math.sqrt(S * S + O * O)),
                  (O /= I),
                  (S *= g),
                  (O *= g),
                  (A = -(E - T)),
                  (P = b - w),
                  (A /= I = Math.sqrt(A * A + P * P)),
                  (P /= I),
                  (A *= g),
                  (P *= g);
                var L = b - _,
                  N = x - E,
                  F = b - w,
                  U = T - E,
                  k = N * F - U * L,
                  B = k < 0;
                if (Math.abs(k) < 0.1)
                  f.push(b - S * M, E - O * M), f.push(b + S * R, E + O * R);
                else {
                  var j = (-S + _) * (-O + E) - (-S + b) * (-O + x),
                    H = (-A + w) * (-P + E) - (-A + b) * (-P + T),
                    G = (L * H - F * j) / k,
                    X = (U * j - N * H) / k,
                    z = (G - b) * (G - b) + (X - E) * (X - E),
                    V = b + (G - b) * M,
                    Y = E + (X - E) * M,
                    W = b - (G - b) * R,
                    q = E - (X - E) * R,
                    K = _ - S * M,
                    Z = x - O * M,
                    J = w - A * M,
                    $ = T - P * M,
                    Q = _ + S * R,
                    tt = x + O * R,
                    et = w + A * R,
                    rt = T + P * R,
                    nt = T - x,
                    it = -(w - _),
                    ot = nt * (b - K) + it * (E - Z);
                  if (B) {
                    var st = nt * (V - K) + it * (Y - Z);
                    Math.abs(ot - st) > 0.1 &&
                      Math.sign(ot) !== Math.sign(st) &&
                      ((V = 0.5 * (K + J)), (Y = 0.5 * (Z + $)));
                  } else {
                    var at = nt * (W - K) + it * (q - Z);
                    Math.abs(ot - at) > 0.1 &&
                      Math.sign(ot) !== Math.sign(at) &&
                      ((W = 0.5 * (Q + et)), (q = 0.5 * (tt + rt)));
                  }
                  o.join === zn.BEVEL || z / y > m
                    ? (B
                        ? (f.push(V, Y),
                          f.push(b + S * R, E + O * R),
                          f.push(V, Y),
                          f.push(b + A * R, E + P * R))
                        : (f.push(b - S * M, E - O * M),
                          f.push(W, q),
                          f.push(b - A * M, E - P * M),
                          f.push(W, q)),
                      (d += 2))
                    : o.join === zn.ROUND
                    ? B
                      ? (f.push(V, Y),
                        f.push(b + S * R, E + O * R),
                        (d +=
                          oi(
                            b,
                            E,
                            b + S * R,
                            E + O * R,
                            b + A * R,
                            E + P * R,
                            f,
                            !0
                          ) + 4),
                        f.push(V, Y),
                        f.push(b + A * R, E + P * R))
                      : (f.push(b - S * M, E - O * M),
                        f.push(W, q),
                        (d +=
                          oi(
                            b,
                            E,
                            b - S * M,
                            E - O * M,
                            b - A * M,
                            E - P * M,
                            f,
                            !1
                          ) + 4),
                        f.push(b - A * M, E - P * M),
                        f.push(W, q))
                    : (f.push(V, Y), f.push(W, q));
                }
              }
              (_ = n[2 * (p - 2)]),
                (x = n[2 * (p - 2) + 1]),
                (b = n[2 * (p - 1)]),
                (S = -(x - (E = n[2 * (p - 1) + 1]))),
                (O = _ - b),
                (S /= I = Math.sqrt(S * S + O * O)),
                (O /= I),
                (S *= g),
                (O *= g),
                f.push(b - S * M, E - O * M),
                f.push(b + S * R, E + O * R),
                u ||
                  (o.cap === Vn.ROUND
                    ? (d +=
                        oi(
                          b - S * (M - R) * 0.5,
                          E - O * (M - R) * 0.5,
                          b - S * M,
                          E - O * M,
                          b + S * R,
                          E + O * R,
                          f,
                          !1
                        ) + 2)
                    : o.cap === Vn.SQUARE &&
                      (d += ii(b, E, S, O, M, R, !1, f)));
              var ut = e.indices,
                ht = qn.epsilon * qn.epsilon;
              for (D = v; D < d + v - 2; ++D)
                (_ = f[2 * D]),
                  (x = f[2 * D + 1]),
                  (b = f[2 * (D + 1)]),
                  (E = f[2 * (D + 1) + 1]),
                  (w = f[2 * (D + 2)]),
                  (T = f[2 * (D + 2) + 1]),
                  Math.abs(_ * (E - T) + b * (T - x) + w * (x - E)) < ht ||
                    ut.push(D, D + 1, D + 2);
            }
          })(t, e);
    }
    var ai,
      ui = (function (t) {
        function e(e, r, n, i, o, s) {
          void 0 === s && (s = 0);
          o = o || i / 2;
          for (
            var a = (-1 * Math.PI) / 2 + s,
              u = 2 * n,
              h = wt / u,
              c = [],
              l = 0;
            l < u;
            l++
          ) {
            var f = l % 2 ? o : i,
              p = l * h + a;
            c.push(e + f * Math.cos(p), r + f * Math.sin(p));
          }
          return t.call(this, c) || this;
        }
        return Jn(e, t), e;
      })(It),
      hi = (function () {
        function t() {}
        return (
          (t.curveTo = function (t, e, r, n, i, o) {
            var s = o[o.length - 2],
              a = o[o.length - 1] - e,
              u = s - t,
              h = n - e,
              c = r - t,
              l = Math.abs(a * c - u * h);
            if (l < 1e-8 || 0 === i)
              return (
                (o[o.length - 2] === t && o[o.length - 1] === e) ||
                  o.push(t, e),
                null
              );
            var f = a * a + u * u,
              p = h * h + c * c,
              d = a * h + u * c,
              v = (i * Math.sqrt(f)) / l,
              g = (i * Math.sqrt(p)) / l,
              y = (v * d) / f,
              m = (g * d) / p,
              _ = v * c + g * u,
              x = v * h + g * a,
              b = u * (g + y),
              E = a * (g + y),
              w = c * (v + m),
              T = h * (v + m);
            return {
              cx: _ + t,
              cy: x + e,
              radius: i,
              startAngle: Math.atan2(E - x, b - _),
              endAngle: Math.atan2(T - x, w - _),
              anticlockwise: u * h > c * a,
            };
          }),
          (t.arc = function (t, e, r, n, i, o, s, a, u) {
            for (
              var h = s - o,
                c = qn._segmentsCount(
                  Math.abs(h) * i,
                  40 * Math.ceil(Math.abs(h) / wt)
                ),
                l = h / (2 * c),
                f = 2 * l,
                p = Math.cos(l),
                d = Math.sin(l),
                v = c - 1,
                g = (v % 1) / v,
                y = 0;
              y <= v;
              ++y
            ) {
              var m = l + o + f * (y + g * y),
                _ = Math.cos(m),
                x = -Math.sin(m);
              u.push((p * _ + d * x) * i + r, (p * -x + d * _) * i + n);
            }
          }),
          t
        );
      })(),
      ci = (function () {
        function t() {}
        return (
          (t.curveLength = function (t, e, r, n, i, o, s, a) {
            for (
              var u = 0,
                h = 0,
                c = 0,
                l = 0,
                f = 0,
                p = 0,
                d = 0,
                v = 0,
                g = 0,
                y = 0,
                m = 0,
                _ = t,
                x = e,
                b = 1;
              b <= 10;
              ++b
            )
              (y =
                _ -
                (v =
                  (d = (p = (f = 1 - (h = b / 10)) * f) * f) * t +
                  3 * p * h * r +
                  3 * f * (c = h * h) * i +
                  (l = c * h) * s)),
                (m = x - (g = d * e + 3 * p * h * n + 3 * f * c * o + l * a)),
                (_ = v),
                (x = g),
                (u += Math.sqrt(y * y + m * m));
            return u;
          }),
          (t.curveTo = function (e, r, n, i, o, s, a) {
            var u = a[a.length - 2],
              h = a[a.length - 1];
            a.length -= 2;
            var c = qn._segmentsCount(t.curveLength(u, h, e, r, n, i, o, s)),
              l = 0,
              f = 0,
              p = 0,
              d = 0,
              v = 0;
            a.push(u, h);
            for (var g = 1, y = 0; g <= c; ++g)
              (p = (f = (l = 1 - (y = g / c)) * l) * l),
                (v = (d = y * y) * y),
                a.push(
                  p * u + 3 * f * y * e + 3 * l * d * n + v * o,
                  p * h + 3 * f * y * r + 3 * l * d * i + v * s
                );
          }),
          t
        );
      })(),
      li = (function () {
        function t() {}
        return (
          (t.curveLength = function (t, e, r, n, i, o) {
            var s = t - 2 * r + i,
              a = e - 2 * n + o,
              u = 2 * r - 2 * t,
              h = 2 * n - 2 * e,
              c = 4 * (s * s + a * a),
              l = 4 * (s * u + a * h),
              f = u * u + h * h,
              p = 2 * Math.sqrt(c + l + f),
              d = Math.sqrt(c),
              v = 2 * c * d,
              g = 2 * Math.sqrt(f),
              y = l / d;
            return (
              (v * p +
                d * l * (p - g) +
                (4 * f * c - l * l) * Math.log((2 * d + y + p) / (y + g))) /
              (4 * v)
            );
          }),
          (t.curveTo = function (e, r, n, i, o) {
            for (
              var s = o[o.length - 2],
                a = o[o.length - 1],
                u = qn._segmentsCount(t.curveLength(s, a, e, r, n, i)),
                h = 0,
                c = 0,
                l = 1;
              l <= u;
              ++l
            ) {
              var f = l / u;
              (h = s + (e - s) * f),
                (c = a + (r - a) * f),
                o.push(
                  h + (e + (n - e) * f - h) * f,
                  c + (r + (i - r) * f - c) * f
                );
            }
          }),
          t
        );
      })(),
      fi = (function () {
        function t() {
          this.reset();
        }
        return (
          (t.prototype.begin = function (t, e, r) {
            this.reset(),
              (this.style = t),
              (this.start = e),
              (this.attribStart = r);
          }),
          (t.prototype.end = function (t, e) {
            (this.attribSize = e - this.attribStart),
              (this.size = t - this.start);
          }),
          (t.prototype.reset = function () {
            (this.style = null),
              (this.size = 0),
              (this.start = 0),
              (this.attribStart = 0),
              (this.attribSize = 0);
          }),
          t
        );
      })(),
      pi =
        (((ai = {})[Et.POLY] = $n),
        (ai[Et.CIRC] = Qn),
        (ai[Et.ELIP] = Qn),
        (ai[Et.RECT] = ti),
        (ai[Et.RREC] = ni),
        ai),
      di = [],
      vi = [],
      gi = (function () {
        function t(t, e, r, n) {
          void 0 === e && (e = null),
            void 0 === r && (r = null),
            void 0 === n && (n = null),
            (this.shape = t),
            (this.lineStyle = r),
            (this.fillStyle = e),
            (this.matrix = n),
            (this.type = t.type),
            (this.points = []),
            (this.holes = []);
        }
        return (
          (t.prototype.clone = function () {
            return new t(
              this.shape,
              this.fillStyle,
              this.lineStyle,
              this.matrix
            );
          }),
          (t.prototype.destroy = function () {
            (this.shape = null),
              (this.holes.length = 0),
              (this.holes = null),
              (this.points.length = 0),
              (this.points = null),
              (this.lineStyle = null),
              (this.fillStyle = null);
          }),
          t
        );
      })(),
      yi = new Mt(),
      mi = new Xt(),
      _i = (function (t) {
        function e() {
          var e = t.call(this) || this;
          return (
            (e.uvsFloat32 = null),
            (e.indicesUint16 = null),
            (e.points = []),
            (e.colors = []),
            (e.uvs = []),
            (e.indices = []),
            (e.textureIds = []),
            (e.graphicsData = []),
            (e.dirty = 0),
            (e.batchDirty = -1),
            (e.cacheDirty = -1),
            (e.clearDirty = 0),
            (e.drawCalls = []),
            (e.batches = []),
            (e.shapeIndex = 0),
            (e._bounds = new Xt()),
            (e.boundsDirty = -1),
            (e.boundsPadding = 0),
            (e.batchable = !1),
            (e.indicesUint16 = null),
            (e.uvsFloat32 = null),
            (e.closePointEps = 1e-4),
            e
          );
        }
        return (
          Jn(e, t),
          Object.defineProperty(e.prototype, "bounds", {
            get: function () {
              return (
                this.boundsDirty !== this.dirty &&
                  ((this.boundsDirty = this.dirty), this.calculateBounds()),
                this._bounds
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.invalidate = function () {
            (this.boundsDirty = -1),
              this.dirty++,
              this.batchDirty++,
              (this.shapeIndex = 0),
              (this.points.length = 0),
              (this.colors.length = 0),
              (this.uvs.length = 0),
              (this.indices.length = 0),
              (this.textureIds.length = 0);
            for (var t = 0; t < this.drawCalls.length; t++)
              this.drawCalls[t].texArray.clear(), vi.push(this.drawCalls[t]);
            this.drawCalls.length = 0;
            for (t = 0; t < this.batches.length; t++) {
              var e = this.batches[t];
              e.reset(), di.push(e);
            }
            this.batches.length = 0;
          }),
          (e.prototype.clear = function () {
            return (
              this.graphicsData.length > 0 &&
                (this.invalidate(),
                this.clearDirty++,
                (this.graphicsData.length = 0)),
              this
            );
          }),
          (e.prototype.drawShape = function (t, e, r, n) {
            void 0 === e && (e = null),
              void 0 === r && (r = null),
              void 0 === n && (n = null);
            var i = new gi(t, e, r, n);
            return this.graphicsData.push(i), this.dirty++, this;
          }),
          (e.prototype.drawHole = function (t, e) {
            if ((void 0 === e && (e = null), !this.graphicsData.length))
              return null;
            var r = new gi(t, null, null, e),
              n = this.graphicsData[this.graphicsData.length - 1];
            return (
              (r.lineStyle = n.lineStyle), n.holes.push(r), this.dirty++, this
            );
          }),
          (e.prototype.destroy = function () {
            t.prototype.destroy.call(this);
            for (var e = 0; e < this.graphicsData.length; ++e)
              this.graphicsData[e].destroy();
            (this.points.length = 0),
              (this.points = null),
              (this.colors.length = 0),
              (this.colors = null),
              (this.uvs.length = 0),
              (this.uvs = null),
              (this.indices.length = 0),
              (this.indices = null),
              this.indexBuffer.destroy(),
              (this.indexBuffer = null),
              (this.graphicsData.length = 0),
              (this.graphicsData = null),
              (this.drawCalls.length = 0),
              (this.drawCalls = null),
              (this.batches.length = 0),
              (this.batches = null),
              (this._bounds = null);
          }),
          (e.prototype.containsPoint = function (t) {
            for (var e = this.graphicsData, r = 0; r < e.length; ++r) {
              var n = e[r];
              if (
                n.fillStyle.visible &&
                n.shape &&
                (n.matrix ? n.matrix.applyInverse(t, yi) : yi.copyFrom(t),
                n.shape.contains(yi.x, yi.y))
              ) {
                var i = !1;
                if (n.holes)
                  for (var o = 0; o < n.holes.length; o++) {
                    if (n.holes[o].shape.contains(yi.x, yi.y)) {
                      i = !0;
                      break;
                    }
                  }
                if (!i) return !0;
              }
            }
            return !1;
          }),
          (e.prototype.updateBatches = function (t) {
            if (this.graphicsData.length) {
              if (this.validateBatching()) {
                this.cacheDirty = this.dirty;
                var e = this.uvs,
                  r = this.graphicsData,
                  n = null,
                  i = null;
                this.batches.length > 0 &&
                  (i = (n = this.batches[this.batches.length - 1]).style);
                for (var o = this.shapeIndex; o < r.length; o++) {
                  this.shapeIndex++;
                  var s = r[o],
                    a = s.fillStyle,
                    u = s.lineStyle;
                  pi[s.type].build(s),
                    s.matrix && this.transformPoints(s.points, s.matrix);
                  for (var h = 0; h < 2; h++) {
                    var c = 0 === h ? a : u;
                    if (c.visible) {
                      var l = c.texture.baseTexture,
                        f = this.indices.length,
                        p = this.points.length / 2;
                      (l.wrapMode = U.REPEAT),
                        0 === h ? this.processFill(s) : this.processLine(s);
                      var d = this.points.length / 2 - p;
                      0 !== d &&
                        (n &&
                          !this._compareStyles(i, c) &&
                          (n.end(f, p), (n = null)),
                        n ||
                          ((n = di.pop() || new fi()).begin(c, f, p),
                          this.batches.push(n),
                          (i = c)),
                        this.addUvs(this.points, e, c.texture, p, d, c.matrix));
                    }
                  }
                }
                var v = this.indices.length,
                  g = this.points.length / 2;
                if ((n && n.end(v, g), 0 !== this.batches.length)) {
                  if (
                    this.indicesUint16 &&
                    this.indices.length === this.indicesUint16.length
                  )
                    this.indicesUint16.set(this.indices);
                  else {
                    var y = g > 65535 && t;
                    this.indicesUint16 = y
                      ? new Uint32Array(this.indices)
                      : new Uint16Array(this.indices);
                  }
                  (this.batchable = this.isBatchable()),
                    this.batchable ? this.packBatches() : this.buildDrawCalls();
                } else this.batchable = !0;
              }
            } else this.batchable = !0;
          }),
          (e.prototype._compareStyles = function (t, e) {
            return (
              !(!t || !e) &&
              t.texture.baseTexture === e.texture.baseTexture &&
              t.color + t.alpha === e.color + e.alpha &&
              !!t.native == !!e.native
            );
          }),
          (e.prototype.validateBatching = function () {
            if (this.dirty === this.cacheDirty || !this.graphicsData.length)
              return !1;
            for (var t = 0, e = this.graphicsData.length; t < e; t++) {
              var r = this.graphicsData[t],
                n = r.fillStyle,
                i = r.lineStyle;
              if (n && !n.texture.baseTexture.valid) return !1;
              if (i && !i.texture.baseTexture.valid) return !1;
            }
            return !0;
          }),
          (e.prototype.packBatches = function () {
            this.batchDirty++, (this.uvsFloat32 = new Float32Array(this.uvs));
            for (var t = this.batches, e = 0, r = t.length; e < r; e++)
              for (var n = t[e], i = 0; i < n.size; i++) {
                var o = n.start + i;
                this.indicesUint16[o] = this.indicesUint16[o] - n.attribStart;
              }
          }),
          (e.prototype.isBatchable = function () {
            if (this.points.length > 131070) return !1;
            for (var t = this.batches, r = 0; r < t.length; r++)
              if (t[r].style.native) return !1;
            return this.points.length < 2 * e.BATCHABLE_SIZE;
          }),
          (e.prototype.buildDrawCalls = function () {
            for (
              var t = ++ye._globalBatch, e = 0;
              e < this.drawCalls.length;
              e++
            )
              this.drawCalls[e].texArray.clear(), vi.push(this.drawCalls[e]);
            this.drawCalls.length = 0;
            var r = this.colors,
              n = this.textureIds,
              i = vi.pop();
            i || ((i = new rn()).texArray = new nn()),
              (i.texArray.count = 0),
              (i.start = 0),
              (i.size = 0),
              (i.type = R.TRIANGLES);
            var o = 0,
              s = null,
              a = 0,
              u = !1,
              h = R.TRIANGLES,
              c = 0;
            this.drawCalls.push(i);
            for (e = 0; e < this.batches.length; e++) {
              var l = this.batches[e],
                f = l.style,
                p = f.texture.baseTexture;
              u !== !!f.native &&
                ((h = (u = !!f.native) ? R.LINES : R.TRIANGLES),
                (s = null),
                (o = 8),
                t++),
                s !== p &&
                  ((s = p),
                  p._batchEnabled !== t &&
                    (8 === o &&
                      (t++,
                      (o = 0),
                      i.size > 0 &&
                        ((i = vi.pop()) || ((i = new rn()).texArray = new nn()),
                        this.drawCalls.push(i)),
                      (i.start = c),
                      (i.size = 0),
                      (i.texArray.count = 0),
                      (i.type = h)),
                    (p.touched = 1),
                    (p._batchEnabled = t),
                    (p._batchLocation = o),
                    (p.wrapMode = 10497),
                    (i.texArray.elements[i.texArray.count++] = p),
                    o++)),
                (i.size += l.size),
                (c += l.size),
                (a = p._batchLocation),
                this.addColors(r, f.color, f.alpha, l.attribSize),
                this.addTextureIds(n, a, l.attribSize);
            }
            (ye._globalBatch = t), this.packAttributes();
          }),
          (e.prototype.packAttributes = function () {
            for (
              var t = this.points,
                e = this.uvs,
                r = this.colors,
                n = this.textureIds,
                i = new ArrayBuffer(3 * t.length * 4),
                o = new Float32Array(i),
                s = new Uint32Array(i),
                a = 0,
                u = 0;
              u < t.length / 2;
              u++
            )
              (o[a++] = t[2 * u]),
                (o[a++] = t[2 * u + 1]),
                (o[a++] = e[2 * u]),
                (o[a++] = e[2 * u + 1]),
                (s[a++] = r[u]),
                (o[a++] = n[u]);
            this._buffer.update(i),
              this._indexBuffer.update(this.indicesUint16);
          }),
          (e.prototype.processFill = function (t) {
            t.holes.length
              ? (this.processHoles(t.holes), $n.triangulate(t, this))
              : pi[t.type].triangulate(t, this);
          }),
          (e.prototype.processLine = function (t) {
            si(t, this);
            for (var e = 0; e < t.holes.length; e++) si(t.holes[e], this);
          }),
          (e.prototype.processHoles = function (t) {
            for (var e = 0; e < t.length; e++) {
              var r = t[e];
              pi[r.type].build(r),
                r.matrix && this.transformPoints(r.points, r.matrix);
            }
          }),
          (e.prototype.calculateBounds = function () {
            var t = this._bounds,
              e = mi,
              r = Dt.IDENTITY;
            this._bounds.clear(), e.clear();
            for (var n = 0; n < this.graphicsData.length; n++) {
              var i = this.graphicsData[n],
                o = i.shape,
                s = i.type,
                a = i.lineStyle,
                u = i.matrix || Dt.IDENTITY,
                h = 0;
              if (a && a.visible) {
                var c = a.alignment;
                (h = a.width),
                  s === Et.POLY
                    ? (h *= 0.5 + Math.abs(0.5 - c))
                    : (h *= Math.max(0, c));
              }
              if (
                (r !== u &&
                  (e.isEmpty() || (t.addBoundsMatrix(e, r), e.clear()),
                  (r = u)),
                s === Et.RECT || s === Et.RREC)
              ) {
                var l = o;
                e.addFramePad(l.x, l.y, l.x + l.width, l.y + l.height, h, h);
              } else if (s === Et.CIRC) {
                var f = o;
                e.addFramePad(f.x, f.y, f.x, f.y, f.radius + h, f.radius + h);
              } else if (s === Et.ELIP) {
                var p = o;
                e.addFramePad(p.x, p.y, p.x, p.y, p.width + h, p.height + h);
              } else {
                var d = o;
                t.addVerticesMatrix(r, d.points, 0, d.points.length, h, h);
              }
            }
            e.isEmpty() || t.addBoundsMatrix(e, r),
              t.pad(this.boundsPadding, this.boundsPadding);
          }),
          (e.prototype.transformPoints = function (t, e) {
            for (var r = 0; r < t.length / 2; r++) {
              var n = t[2 * r],
                i = t[2 * r + 1];
              (t[2 * r] = e.a * n + e.c * i + e.tx),
                (t[2 * r + 1] = e.b * n + e.d * i + e.ty);
            }
          }),
          (e.prototype.addColors = function (t, e, r, n) {
            for (
              var i = ot((e >> 16) + (65280 & e) + ((255 & e) << 16), r);
              n-- > 0;

            )
              t.push(i);
          }),
          (e.prototype.addTextureIds = function (t, e, r) {
            for (; r-- > 0; ) t.push(e);
          }),
          (e.prototype.addUvs = function (t, e, r, n, i, o) {
            void 0 === o && (o = null);
            for (var s = 0, a = e.length, u = r.frame; s < i; ) {
              var h = t[2 * (n + s)],
                c = t[2 * (n + s) + 1];
              if (o) {
                var l = o.a * h + o.c * c + o.tx;
                (c = o.b * h + o.d * c + o.ty), (h = l);
              }
              s++, e.push(h / u.width, c / u.height);
            }
            var f = r.baseTexture;
            (u.width < f.width || u.height < f.height) &&
              this.adjustUvs(e, r, a, i);
          }),
          (e.prototype.adjustUvs = function (t, e, r, n) {
            for (
              var i = e.baseTexture,
                o = 1e-6,
                s = r + 2 * n,
                a = e.frame,
                u = a.width / i.width,
                h = a.height / i.height,
                c = a.x / a.width,
                l = a.y / a.height,
                f = Math.floor(t[r] + o),
                p = Math.floor(t[r + 1] + o),
                d = r + 2;
              d < s;
              d += 2
            )
              (f = Math.min(f, Math.floor(t[d] + o))),
                (p = Math.min(p, Math.floor(t[d + 1] + o)));
            (c -= f), (l -= p);
            for (d = r; d < s; d += 2)
              (t[d] = (t[d] + c) * u), (t[d + 1] = (t[d + 1] + l) * h);
          }),
          (e.BATCHABLE_SIZE = 100),
          e
        );
      })(un),
      xi = (function (t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (
            (e.width = 0),
            (e.alignment = 0.5),
            (e.native = !1),
            (e.cap = Vn.BUTT),
            (e.join = zn.MITER),
            (e.miterLimit = 10),
            e
          );
        }
        return (
          Jn(e, t),
          (e.prototype.clone = function () {
            var t = new e();
            return (
              (t.color = this.color),
              (t.alpha = this.alpha),
              (t.texture = this.texture),
              (t.matrix = this.matrix),
              (t.visible = this.visible),
              (t.width = this.width),
              (t.alignment = this.alignment),
              (t.native = this.native),
              (t.cap = this.cap),
              (t.join = this.join),
              (t.miterLimit = this.miterLimit),
              t
            );
          }),
          (e.prototype.reset = function () {
            t.prototype.reset.call(this),
              (this.color = 0),
              (this.alignment = 0.5),
              (this.width = 0),
              (this.native = !1);
          }),
          e
        );
      })(Kn),
      bi = new Float32Array(3),
      Ei = {},
      wi = (function (t) {
        function e(e) {
          void 0 === e && (e = null);
          var r = t.call(this) || this;
          return (
            (r._geometry = e || new _i()),
            r._geometry.refCount++,
            (r.shader = null),
            (r.state = Dr.for2d()),
            (r._fillStyle = new Kn()),
            (r._lineStyle = new xi()),
            (r._matrix = null),
            (r._holeMode = !1),
            (r.currentPath = null),
            (r.batches = []),
            (r.batchTint = -1),
            (r.batchDirty = -1),
            (r.vertexData = null),
            (r.pluginName = "batch"),
            (r._transformID = -1),
            (r.tint = 16777215),
            (r.blendMode = M.NORMAL),
            r
          );
        }
        return (
          Jn(e, t),
          Object.defineProperty(e.prototype, "geometry", {
            get: function () {
              return this._geometry;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.clone = function () {
            return this.finishPoly(), new e(this._geometry);
          }),
          Object.defineProperty(e.prototype, "blendMode", {
            get: function () {
              return this.state.blendMode;
            },
            set: function (t) {
              this.state.blendMode = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "tint", {
            get: function () {
              return this._tint;
            },
            set: function (t) {
              this._tint = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "fill", {
            get: function () {
              return this._fillStyle;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "line", {
            get: function () {
              return this._lineStyle;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.lineStyle = function (t) {
            if ((void 0 === t && (t = null), "number" == typeof t)) {
              var e = arguments;
              t = {
                width: e[0] || 0,
                color: e[1] || 0,
                alpha: void 0 !== e[2] ? e[2] : 1,
                alignment: void 0 !== e[3] ? e[3] : 0.5,
                native: !!e[4],
              };
            }
            return this.lineTextureStyle(t);
          }),
          (e.prototype.lineTextureStyle = function (t) {
            if ("number" == typeof t) {
              vt(
                "v5.2.0",
                "Please use object-based options for Graphics#lineTextureStyle"
              );
              var e = arguments,
                r = e[0],
                n = e[1],
                i = e[2],
                o = e[3],
                s = e[4],
                a = e[5],
                u = e[6];
              (t = {
                width: r,
                texture: n,
                color: i,
                alpha: o,
                matrix: s,
                alignment: a,
                native: u,
              }),
                Object.keys(t).forEach(function (e) {
                  return void 0 === t[e] && delete t[e];
                });
            }
            (t = Object.assign(
              {
                width: 0,
                texture: De.WHITE,
                color: t && t.texture ? 16777215 : 0,
                alpha: 1,
                matrix: null,
                alignment: 0.5,
                native: !1,
                cap: Vn.BUTT,
                join: zn.MITER,
                miterLimit: 10,
              },
              t
            )),
              this.currentPath && this.startPoly();
            var h = t.width > 0 && t.alpha > 0;
            return (
              h
                ? (t.matrix &&
                    ((t.matrix = t.matrix.clone()), t.matrix.invert()),
                  Object.assign(this._lineStyle, { visible: h }, t))
                : this._lineStyle.reset(),
              this
            );
          }),
          (e.prototype.startPoly = function () {
            if (this.currentPath) {
              var t = this.currentPath.points,
                e = this.currentPath.points.length;
              e > 2 &&
                (this.drawShape(this.currentPath),
                (this.currentPath = new It()),
                (this.currentPath.closeStroke = !1),
                this.currentPath.points.push(t[e - 2], t[e - 1]));
            } else
              (this.currentPath = new It()),
                (this.currentPath.closeStroke = !1);
          }),
          (e.prototype.finishPoly = function () {
            this.currentPath &&
              (this.currentPath.points.length > 2
                ? (this.drawShape(this.currentPath), (this.currentPath = null))
                : (this.currentPath.points.length = 0));
          }),
          (e.prototype.moveTo = function (t, e) {
            return (
              this.startPoly(),
              (this.currentPath.points[0] = t),
              (this.currentPath.points[1] = e),
              this
            );
          }),
          (e.prototype.lineTo = function (t, e) {
            this.currentPath || this.moveTo(0, 0);
            var r = this.currentPath.points,
              n = r[r.length - 2],
              i = r[r.length - 1];
            return (n === t && i === e) || r.push(t, e), this;
          }),
          (e.prototype._initCurve = function (t, e) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              this.currentPath
                ? 0 === this.currentPath.points.length &&
                  (this.currentPath.points = [t, e])
                : this.moveTo(t, e);
          }),
          (e.prototype.quadraticCurveTo = function (t, e, r, n) {
            this._initCurve();
            var i = this.currentPath.points;
            return (
              0 === i.length && this.moveTo(0, 0),
              li.curveTo(t, e, r, n, i),
              this
            );
          }),
          (e.prototype.bezierCurveTo = function (t, e, r, n, i, o) {
            return (
              this._initCurve(),
              ci.curveTo(t, e, r, n, i, o, this.currentPath.points),
              this
            );
          }),
          (e.prototype.arcTo = function (t, e, r, n, i) {
            this._initCurve(t, e);
            var o = this.currentPath.points,
              s = hi.curveTo(t, e, r, n, i, o);
            if (s) {
              var a = s.cx,
                u = s.cy,
                h = s.radius,
                c = s.startAngle,
                l = s.endAngle,
                f = s.anticlockwise;
              this.arc(a, u, h, c, l, f);
            }
            return this;
          }),
          (e.prototype.arc = function (t, e, r, n, i, o) {
            if ((void 0 === o && (o = !1), n === i)) return this;
            if (
              (!o && i <= n ? (i += wt) : o && n <= i && (n += wt), 0 === i - n)
            )
              return this;
            var s = t + Math.cos(n) * r,
              a = e + Math.sin(n) * r,
              u = this._geometry.closePointEps,
              h = this.currentPath ? this.currentPath.points : null;
            if (h) {
              var c = Math.abs(h[h.length - 2] - s),
                l = Math.abs(h[h.length - 1] - a);
              (c < u && l < u) || h.push(s, a);
            } else this.moveTo(s, a), (h = this.currentPath.points);
            return hi.arc(s, a, t, e, r, n, i, o, h), this;
          }),
          (e.prototype.beginFill = function (t, e) {
            return (
              void 0 === t && (t = 0),
              void 0 === e && (e = 1),
              this.beginTextureFill({ texture: De.WHITE, color: t, alpha: e })
            );
          }),
          (e.prototype.beginTextureFill = function (t) {
            if (t instanceof De) {
              vt(
                "v5.2.0",
                "Please use object-based options for Graphics#beginTextureFill"
              );
              var e = arguments,
                r = e[0],
                n = e[1],
                i = e[2],
                o = e[3];
              (t = { texture: r, color: n, alpha: i, matrix: o }),
                Object.keys(t).forEach(function (e) {
                  return void 0 === t[e] && delete t[e];
                });
            }
            (t = Object.assign(
              { texture: De.WHITE, color: 16777215, alpha: 1, matrix: null },
              t
            )),
              this.currentPath && this.startPoly();
            var s = t.alpha > 0;
            return (
              s
                ? (t.matrix &&
                    ((t.matrix = t.matrix.clone()), t.matrix.invert()),
                  Object.assign(this._fillStyle, { visible: s }, t))
                : this._fillStyle.reset(),
              this
            );
          }),
          (e.prototype.endFill = function () {
            return this.finishPoly(), this._fillStyle.reset(), this;
          }),
          (e.prototype.drawRect = function (t, e, r, n) {
            return this.drawShape(new Ot(t, e, r, n));
          }),
          (e.prototype.drawRoundedRect = function (t, e, r, n, i) {
            return this.drawShape(new Ct(t, e, r, n, i));
          }),
          (e.prototype.drawCircle = function (t, e, r) {
            return this.drawShape(new At(t, e, r));
          }),
          (e.prototype.drawEllipse = function (t, e, r, n) {
            return this.drawShape(new Pt(t, e, r, n));
          }),
          (e.prototype.drawPolygon = function () {
            for (var t, e = arguments, r = [], n = 0; n < arguments.length; n++)
              r[n] = e[n];
            var i = !0,
              o = r[0];
            o.points
              ? ((i = o.closeStroke), (t = o.points))
              : (t = Array.isArray(r[0]) ? r[0] : r);
            var s = new It(t);
            return (s.closeStroke = i), this.drawShape(s), this;
          }),
          (e.prototype.drawShape = function (t) {
            return (
              this._holeMode
                ? this._geometry.drawHole(t, this._matrix)
                : this._geometry.drawShape(
                    t,
                    this._fillStyle.clone(),
                    this._lineStyle.clone(),
                    this._matrix
                  ),
              this
            );
          }),
          (e.prototype.drawStar = function (t, e, r, n, i, o) {
            return (
              void 0 === o && (o = 0),
              this.drawPolygon(new ui(t, e, r, n, i, o))
            );
          }),
          (e.prototype.clear = function () {
            return (
              this._geometry.clear(),
              this._lineStyle.reset(),
              this._fillStyle.reset(),
              this._boundsID++,
              (this._matrix = null),
              (this._holeMode = !1),
              (this.currentPath = null),
              this
            );
          }),
          (e.prototype.isFastRect = function () {
            var t = this._geometry.graphicsData;
            return (
              1 === t.length &&
              t[0].shape.type === Et.RECT &&
              !(t[0].lineStyle.visible && t[0].lineStyle.width)
            );
          }),
          (e.prototype._render = function (t) {
            this.finishPoly();
            var e = this._geometry,
              r = t.context.supports.uint32Indices;
            e.updateBatches(r),
              e.batchable
                ? (this.batchDirty !== e.batchDirty && this._populateBatches(),
                  this._renderBatched(t))
                : (t.batch.flush(), this._renderDirect(t));
          }),
          (e.prototype._populateBatches = function () {
            var t = this._geometry,
              e = this.blendMode,
              r = t.batches.length;
            (this.batchTint = -1),
              (this._transformID = -1),
              (this.batchDirty = t.batchDirty),
              (this.batches.length = r),
              (this.vertexData = new Float32Array(t.points));
            for (var n = 0; n < r; n++) {
              var i = t.batches[n],
                o = i.style.color,
                s = new Float32Array(
                  this.vertexData.buffer,
                  4 * i.attribStart * 2,
                  2 * i.attribSize
                ),
                a = new Float32Array(
                  t.uvsFloat32.buffer,
                  4 * i.attribStart * 2,
                  2 * i.attribSize
                ),
                u = {
                  vertexData: s,
                  blendMode: e,
                  indices: new Uint16Array(
                    t.indicesUint16.buffer,
                    2 * i.start,
                    i.size
                  ),
                  uvs: a,
                  _batchRGB: tt(o),
                  _tintRGB: o,
                  _texture: i.style.texture,
                  alpha: i.style.alpha,
                  worldAlpha: 1,
                };
              this.batches[n] = u;
            }
          }),
          (e.prototype._renderBatched = function (t) {
            if (this.batches.length) {
              t.batch.setObjectRenderer(t.plugins[this.pluginName]),
                this.calculateVertices(),
                this.calculateTints();
              for (var e = 0, r = this.batches.length; e < r; e++) {
                var n = this.batches[e];
                (n.worldAlpha = this.worldAlpha * n.alpha),
                  t.plugins[this.pluginName].render(n);
              }
            }
          }),
          (e.prototype._renderDirect = function (t) {
            var e = this._resolveDirectShader(t),
              r = this._geometry,
              n = this.tint,
              i = this.worldAlpha,
              o = e.uniforms,
              s = r.drawCalls;
            (o.translationMatrix = this.transform.worldTransform),
              (o.tint[0] = (((n >> 16) & 255) / 255) * i),
              (o.tint[1] = (((n >> 8) & 255) / 255) * i),
              (o.tint[2] = ((255 & n) / 255) * i),
              (o.tint[3] = i),
              t.shader.bind(e),
              t.geometry.bind(r, e),
              t.state.set(this.state);
            for (var a = 0, u = s.length; a < u; a++)
              this._renderDrawCallDirect(t, r.drawCalls[a]);
          }),
          (e.prototype._renderDrawCallDirect = function (t, e) {
            for (
              var r = e.texArray,
                n = e.type,
                i = e.size,
                o = e.start,
                s = r.count,
                a = 0;
              a < s;
              a++
            )
              t.texture.bind(r.elements[a], a);
            t.geometry.draw(n, i, o);
          }),
          (e.prototype._resolveDirectShader = function (t) {
            var e = this.shader,
              r = this.pluginName;
            if (!e) {
              if (!Ei[r]) {
                for (var n = new Int32Array(16), i = 0; i < 16; i++) n[i] = i;
                var o = {
                    tint: new Float32Array([1, 1, 1, 1]),
                    translationMatrix: new Dt(),
                    default: Ke.from({ uSamplers: n }, !0),
                  },
                  s = t.plugins[r]._shader.program;
                Ei[r] = new Rr(s, o);
              }
              e = Ei[r];
            }
            return e;
          }),
          (e.prototype._calculateBounds = function () {
            this.finishPoly();
            var t = this._geometry;
            if (t.graphicsData.length) {
              var e = t.bounds,
                r = e.minX,
                n = e.minY,
                i = e.maxX,
                o = e.maxY;
              this._bounds.addFrame(this.transform, r, n, i, o);
            }
          }),
          (e.prototype.containsPoint = function (t) {
            return (
              this.worldTransform.applyInverse(t, e._TEMP_POINT),
              this._geometry.containsPoint(e._TEMP_POINT)
            );
          }),
          (e.prototype.calculateTints = function () {
            if (this.batchTint !== this.tint) {
              this.batchTint = this.tint;
              for (
                var t = tt(this.tint, bi), e = 0;
                e < this.batches.length;
                e++
              ) {
                var r = this.batches[e],
                  n = r._batchRGB,
                  i =
                    ((t[0] * n[0] * 255) << 16) +
                    ((t[1] * n[1] * 255) << 8) +
                    (0 | (t[2] * n[2] * 255));
                r._tintRGB = (i >> 16) + (65280 & i) + ((255 & i) << 16);
              }
            }
          }),
          (e.prototype.calculateVertices = function () {
            var t = this.transform._worldID;
            if (this._transformID !== t) {
              this._transformID = t;
              for (
                var e = this.transform.worldTransform,
                  r = e.a,
                  n = e.b,
                  i = e.c,
                  o = e.d,
                  s = e.tx,
                  a = e.ty,
                  u = this._geometry.points,
                  h = this.vertexData,
                  c = 0,
                  l = 0;
                l < u.length;
                l += 2
              ) {
                var f = u[l],
                  p = u[l + 1];
                (h[c++] = r * f + i * p + s), (h[c++] = o * p + n * f + a);
              }
            }
          }),
          (e.prototype.closePath = function () {
            var t = this.currentPath;
            return t && (t.closeStroke = !0), this;
          }),
          (e.prototype.setMatrix = function (t) {
            return (this._matrix = t), this;
          }),
          (e.prototype.beginHole = function () {
            return this.finishPoly(), (this._holeMode = !0), this;
          }),
          (e.prototype.endHole = function () {
            return this.finishPoly(), (this._holeMode = !1), this;
          }),
          (e.prototype.destroy = function (e) {
            t.prototype.destroy.call(this, e),
              this._geometry.refCount--,
              0 === this._geometry.refCount && this._geometry.dispose(),
              (this._matrix = null),
              (this.currentPath = null),
              this._lineStyle.destroy(),
              (this._lineStyle = null),
              this._fillStyle.destroy(),
              (this._fillStyle = null),
              (this._geometry = null),
              (this.shader = null),
              (this.vertexData = null),
              (this.batches.length = 0),
              (this.batches = null),
              t.prototype.destroy.call(this, e);
          }),
          (e._TEMP_POINT = new Mt()),
          e
        );
      })(Kt),
      Ti = function (t, e) {
        return (Ti =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    var Si,
      Oi = new Mt(),
      Ai = new Uint16Array([0, 1, 2, 0, 2, 3]),
      Pi = (function (t) {
        function e(e) {
          var r = t.call(this) || this;
          return (
            (r._anchor = new Rt(
              r._onAnchorUpdate,
              r,
              e ? e.defaultAnchor.x : 0,
              e ? e.defaultAnchor.y : 0
            )),
            (r._texture = null),
            (r._width = 0),
            (r._height = 0),
            (r._tint = null),
            (r._tintRGB = null),
            (r.tint = 16777215),
            (r.blendMode = M.NORMAL),
            (r._cachedTint = 16777215),
            (r.uvs = null),
            (r.texture = e || De.EMPTY),
            (r.vertexData = new Float32Array(8)),
            (r.vertexTrimmedData = null),
            (r._transformID = -1),
            (r._textureID = -1),
            (r._transformTrimmedID = -1),
            (r._textureTrimmedID = -1),
            (r.indices = Ai),
            (r.pluginName = "batch"),
            (r.isSprite = !0),
            (r._roundPixels = V.ROUND_PIXELS),
            r
          );
        }
        return (
          (function (t, e) {
            function r() {
              this.constructor = t;
            }
            Ti(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          })(e, t),
          (e.prototype._onTextureUpdate = function () {
            (this._textureID = -1),
              (this._textureTrimmedID = -1),
              (this._cachedTint = 16777215),
              this._width &&
                (this.scale.x =
                  (lt(this.scale.x) * this._width) / this._texture.orig.width),
              this._height &&
                (this.scale.y =
                  (lt(this.scale.y) * this._height) /
                  this._texture.orig.height);
          }),
          (e.prototype._onAnchorUpdate = function () {
            (this._transformID = -1), (this._transformTrimmedID = -1);
          }),
          (e.prototype.calculateVertices = function () {
            var t = this._texture;
            if (
              this._transformID !== this.transform._worldID ||
              this._textureID !== t._updateID
            ) {
              this._textureID !== t._updateID &&
                (this.uvs = this._texture._uvs.uvsFloat32),
                (this._transformID = this.transform._worldID),
                (this._textureID = t._updateID);
              var e = this.transform.worldTransform,
                r = e.a,
                n = e.b,
                i = e.c,
                o = e.d,
                s = e.tx,
                a = e.ty,
                u = this.vertexData,
                h = t.trim,
                c = t.orig,
                l = this._anchor,
                f = 0,
                p = 0,
                d = 0,
                v = 0;
              if (
                (h
                  ? ((f = (p = h.x - l._x * c.width) + h.width),
                    (d = (v = h.y - l._y * c.height) + h.height))
                  : ((f = (p = -l._x * c.width) + c.width),
                    (d = (v = -l._y * c.height) + c.height)),
                (u[0] = r * p + i * v + s),
                (u[1] = o * v + n * p + a),
                (u[2] = r * f + i * v + s),
                (u[3] = o * v + n * f + a),
                (u[4] = r * f + i * d + s),
                (u[5] = o * d + n * f + a),
                (u[6] = r * p + i * d + s),
                (u[7] = o * d + n * p + a),
                this._roundPixels)
              )
                for (var g = V.RESOLUTION, y = 0; y < u.length; ++y)
                  u[y] = Math.round(((u[y] * g) | 0) / g);
            }
          }),
          (e.prototype.calculateTrimmedVertices = function () {
            if (this.vertexTrimmedData) {
              if (
                this._transformTrimmedID === this.transform._worldID &&
                this._textureTrimmedID === this._texture._updateID
              )
                return;
            } else this.vertexTrimmedData = new Float32Array(8);
            (this._transformTrimmedID = this.transform._worldID),
              (this._textureTrimmedID = this._texture._updateID);
            var t = this._texture,
              e = this.vertexTrimmedData,
              r = t.orig,
              n = this._anchor,
              i = this.transform.worldTransform,
              o = i.a,
              s = i.b,
              a = i.c,
              u = i.d,
              h = i.tx,
              c = i.ty,
              l = -n._x * r.width,
              f = l + r.width,
              p = -n._y * r.height,
              d = p + r.height;
            (e[0] = o * l + a * p + h),
              (e[1] = u * p + s * l + c),
              (e[2] = o * f + a * p + h),
              (e[3] = u * p + s * f + c),
              (e[4] = o * f + a * d + h),
              (e[5] = u * d + s * f + c),
              (e[6] = o * l + a * d + h),
              (e[7] = u * d + s * l + c);
          }),
          (e.prototype._render = function (t) {
            this.calculateVertices(),
              t.batch.setObjectRenderer(t.plugins[this.pluginName]),
              t.plugins[this.pluginName].render(this);
          }),
          (e.prototype._calculateBounds = function () {
            var t = this._texture.trim,
              e = this._texture.orig;
            !t || (t.width === e.width && t.height === e.height)
              ? (this.calculateVertices(),
                this._bounds.addQuad(this.vertexData))
              : (this.calculateTrimmedVertices(),
                this._bounds.addQuad(this.vertexTrimmedData));
          }),
          (e.prototype.getLocalBounds = function (e) {
            return 0 === this.children.length
              ? ((this._bounds.minX =
                  this._texture.orig.width * -this._anchor._x),
                (this._bounds.minY =
                  this._texture.orig.height * -this._anchor._y),
                (this._bounds.maxX =
                  this._texture.orig.width * (1 - this._anchor._x)),
                (this._bounds.maxY =
                  this._texture.orig.height * (1 - this._anchor._y)),
                e ||
                  (this._localBoundsRect || (this._localBoundsRect = new Ot()),
                  (e = this._localBoundsRect)),
                this._bounds.getRectangle(e))
              : t.prototype.getLocalBounds.call(this, e);
          }),
          (e.prototype.containsPoint = function (t) {
            this.worldTransform.applyInverse(t, Oi);
            var e = this._texture.orig.width,
              r = this._texture.orig.height,
              n = -e * this.anchor.x,
              i = 0;
            return (
              Oi.x >= n &&
              Oi.x < n + e &&
              ((i = -r * this.anchor.y), Oi.y >= i && Oi.y < i + r)
            );
          }),
          (e.prototype.destroy = function (e) {
            if (
              (t.prototype.destroy.call(this, e),
              this._texture.off("update", this._onTextureUpdate, this),
              (this._anchor = null),
              "boolean" == typeof e ? e : e && e.texture)
            ) {
              var r = "boolean" == typeof e ? e : e && e.baseTexture;
              this._texture.destroy(!!r);
            }
            this._texture = null;
          }),
          (e.from = function (t, r) {
            return new e(t instanceof De ? t : De.from(t, r));
          }),
          Object.defineProperty(e.prototype, "roundPixels", {
            get: function () {
              return this._roundPixels;
            },
            set: function (t) {
              this._roundPixels !== t && (this._transformID = -1),
                (this._roundPixels = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "width", {
            get: function () {
              return Math.abs(this.scale.x) * this._texture.orig.width;
            },
            set: function (t) {
              var e = lt(this.scale.x) || 1;
              (this.scale.x = (e * t) / this._texture.orig.width),
                (this._width = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "height", {
            get: function () {
              return Math.abs(this.scale.y) * this._texture.orig.height;
            },
            set: function (t) {
              var e = lt(this.scale.y) || 1;
              (this.scale.y = (e * t) / this._texture.orig.height),
                (this._height = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "anchor", {
            get: function () {
              return this._anchor;
            },
            set: function (t) {
              this._anchor.copyFrom(t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "tint", {
            get: function () {
              return this._tint;
            },
            set: function (t) {
              (this._tint = t),
                (this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "texture", {
            get: function () {
              return this._texture;
            },
            set: function (t) {
              this._texture !== t &&
                (this._texture &&
                  this._texture.off("update", this._onTextureUpdate, this),
                (this._texture = t || De.EMPTY),
                (this._cachedTint = 16777215),
                (this._textureID = -1),
                (this._textureTrimmedID = -1),
                t &&
                  (t.baseTexture.valid
                    ? this._onTextureUpdate()
                    : t.once("update", this._onTextureUpdate, this)));
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(Kt),
      Ii = function (t, e) {
        return (Ii =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    !(function (t) {
      (t[(t.LINEAR_VERTICAL = 0)] = "LINEAR_VERTICAL"),
        (t[(t.LINEAR_HORIZONTAL = 1)] = "LINEAR_HORIZONTAL");
    })(Si || (Si = {}));
    var Ci = {
        align: "left",
        breakWords: !1,
        dropShadow: !1,
        dropShadowAlpha: 1,
        dropShadowAngle: Math.PI / 6,
        dropShadowBlur: 0,
        dropShadowColor: "black",
        dropShadowDistance: 5,
        fill: "black",
        fillGradientType: Si.LINEAR_VERTICAL,
        fillGradientStops: [],
        fontFamily: "Arial",
        fontSize: 26,
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: 0,
        lineJoin: "miter",
        miterLimit: 10,
        padding: 0,
        stroke: "black",
        strokeThickness: 0,
        textBaseline: "alphabetic",
        trim: !1,
        whiteSpace: "pre",
        wordWrap: !1,
        wordWrapWidth: 100,
        leading: 0,
      },
      Mi = [
        "serif",
        "sans-serif",
        "monospace",
        "cursive",
        "fantasy",
        "system-ui",
      ],
      Ri = (function () {
        function t(t) {
          (this.styleID = 0), this.reset(), Ni(this, t, t);
        }
        return (
          (t.prototype.clone = function () {
            var e = {};
            return Ni(e, this, Ci), new t(e);
          }),
          (t.prototype.reset = function () {
            Ni(this, Ci, Ci);
          }),
          Object.defineProperty(t.prototype, "align", {
            get: function () {
              return this._align;
            },
            set: function (t) {
              this._align !== t && ((this._align = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "breakWords", {
            get: function () {
              return this._breakWords;
            },
            set: function (t) {
              this._breakWords !== t &&
                ((this._breakWords = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "dropShadow", {
            get: function () {
              return this._dropShadow;
            },
            set: function (t) {
              this._dropShadow !== t &&
                ((this._dropShadow = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "dropShadowAlpha", {
            get: function () {
              return this._dropShadowAlpha;
            },
            set: function (t) {
              this._dropShadowAlpha !== t &&
                ((this._dropShadowAlpha = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "dropShadowAngle", {
            get: function () {
              return this._dropShadowAngle;
            },
            set: function (t) {
              this._dropShadowAngle !== t &&
                ((this._dropShadowAngle = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "dropShadowBlur", {
            get: function () {
              return this._dropShadowBlur;
            },
            set: function (t) {
              this._dropShadowBlur !== t &&
                ((this._dropShadowBlur = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "dropShadowColor", {
            get: function () {
              return this._dropShadowColor;
            },
            set: function (t) {
              var e = Li(t);
              this._dropShadowColor !== e &&
                ((this._dropShadowColor = e), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "dropShadowDistance", {
            get: function () {
              return this._dropShadowDistance;
            },
            set: function (t) {
              this._dropShadowDistance !== t &&
                ((this._dropShadowDistance = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "fill", {
            get: function () {
              return this._fill;
            },
            set: function (t) {
              var e = Li(t);
              this._fill !== e && ((this._fill = e), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "fillGradientType", {
            get: function () {
              return this._fillGradientType;
            },
            set: function (t) {
              this._fillGradientType !== t &&
                ((this._fillGradientType = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "fillGradientStops", {
            get: function () {
              return this._fillGradientStops;
            },
            set: function (t) {
              (function (t, e) {
                if (!Array.isArray(t) || !Array.isArray(e)) return !1;
                if (t.length !== e.length) return !1;
                for (var r = 0; r < t.length; ++r) if (t[r] !== e[r]) return !1;
                return !0;
              })(this._fillGradientStops, t) ||
                ((this._fillGradientStops = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "fontFamily", {
            get: function () {
              return this._fontFamily;
            },
            set: function (t) {
              this.fontFamily !== t && ((this._fontFamily = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "fontSize", {
            get: function () {
              return this._fontSize;
            },
            set: function (t) {
              this._fontSize !== t && ((this._fontSize = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "fontStyle", {
            get: function () {
              return this._fontStyle;
            },
            set: function (t) {
              this._fontStyle !== t && ((this._fontStyle = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "fontVariant", {
            get: function () {
              return this._fontVariant;
            },
            set: function (t) {
              this._fontVariant !== t &&
                ((this._fontVariant = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "fontWeight", {
            get: function () {
              return this._fontWeight;
            },
            set: function (t) {
              this._fontWeight !== t &&
                ((this._fontWeight = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "letterSpacing", {
            get: function () {
              return this._letterSpacing;
            },
            set: function (t) {
              this._letterSpacing !== t &&
                ((this._letterSpacing = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "lineHeight", {
            get: function () {
              return this._lineHeight;
            },
            set: function (t) {
              this._lineHeight !== t &&
                ((this._lineHeight = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "leading", {
            get: function () {
              return this._leading;
            },
            set: function (t) {
              this._leading !== t && ((this._leading = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "lineJoin", {
            get: function () {
              return this._lineJoin;
            },
            set: function (t) {
              this._lineJoin !== t && ((this._lineJoin = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "miterLimit", {
            get: function () {
              return this._miterLimit;
            },
            set: function (t) {
              this._miterLimit !== t &&
                ((this._miterLimit = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "padding", {
            get: function () {
              return this._padding;
            },
            set: function (t) {
              this._padding !== t && ((this._padding = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "stroke", {
            get: function () {
              return this._stroke;
            },
            set: function (t) {
              var e = Li(t);
              this._stroke !== e && ((this._stroke = e), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "strokeThickness", {
            get: function () {
              return this._strokeThickness;
            },
            set: function (t) {
              this._strokeThickness !== t &&
                ((this._strokeThickness = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "textBaseline", {
            get: function () {
              return this._textBaseline;
            },
            set: function (t) {
              this._textBaseline !== t &&
                ((this._textBaseline = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "trim", {
            get: function () {
              return this._trim;
            },
            set: function (t) {
              this._trim !== t && ((this._trim = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "whiteSpace", {
            get: function () {
              return this._whiteSpace;
            },
            set: function (t) {
              this._whiteSpace !== t &&
                ((this._whiteSpace = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "wordWrap", {
            get: function () {
              return this._wordWrap;
            },
            set: function (t) {
              this._wordWrap !== t && ((this._wordWrap = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "wordWrapWidth", {
            get: function () {
              return this._wordWrapWidth;
            },
            set: function (t) {
              this._wordWrapWidth !== t &&
                ((this._wordWrapWidth = t), this.styleID++);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (t.prototype.toFontString = function () {
            var t =
                "number" == typeof this.fontSize
                  ? this.fontSize + "px"
                  : this.fontSize,
              e = this.fontFamily;
            Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
            for (var r = e.length - 1; r >= 0; r--) {
              var n = e[r].trim();
              !/([\"\'])[^\'\"]+\1/.test(n) &&
                Mi.indexOf(n) < 0 &&
                (n = '"' + n + '"'),
                (e[r] = n);
            }
            return (
              this.fontStyle +
              " " +
              this.fontVariant +
              " " +
              this.fontWeight +
              " " +
              t +
              " " +
              e.join(",")
            );
          }),
          t
        );
      })();
    function Di(t) {
      return "number" == typeof t
        ? et(t)
        : ("string" == typeof t &&
            0 === t.indexOf("0x") &&
            (t = t.replace("0x", "#")),
          t);
    }
    function Li(t) {
      if (Array.isArray(t)) {
        for (var e = 0; e < t.length; ++e) t[e] = Di(t[e]);
        return t;
      }
      return Di(t);
    }
    function Ni(t, e, r) {
      for (var n in r)
        Array.isArray(e[n]) ? (t[n] = e[n].slice()) : (t[n] = e[n]);
    }
    var Fi = (function () {
        function t(t, e, r, n, i, o, s, a, u) {
          (this.text = t),
            (this.style = e),
            (this.width = r),
            (this.height = n),
            (this.lines = i),
            (this.lineWidths = o),
            (this.lineHeight = s),
            (this.maxLineWidth = a),
            (this.fontProperties = u);
        }
        return (
          (t.measureText = function (e, r, n, i) {
            void 0 === i && (i = t._canvas), (n = null == n ? r.wordWrap : n);
            var o = r.toFontString(),
              s = t.measureFont(o);
            0 === s.fontSize &&
              ((s.fontSize = r.fontSize), (s.ascent = r.fontSize));
            var a = i.getContext("2d");
            a.font = o;
            for (
              var u = (n ? t.wordWrap(e, r, i) : e).split(/(?:\r\n|\r|\n)/),
                h = new Array(u.length),
                c = 0,
                l = 0;
              l < u.length;
              l++
            ) {
              var f =
                a.measureText(u[l]).width + (u[l].length - 1) * r.letterSpacing;
              (h[l] = f), (c = Math.max(c, f));
            }
            var p = c + r.strokeThickness;
            r.dropShadow && (p += r.dropShadowDistance);
            var d = r.lineHeight || s.fontSize + r.strokeThickness,
              v =
                Math.max(d, s.fontSize + r.strokeThickness) +
                (u.length - 1) * (d + r.leading);
            return (
              r.dropShadow && (v += r.dropShadowDistance),
              new t(e, r, p, v, u, h, d + r.leading, c, s)
            );
          }),
          (t.wordWrap = function (e, r, n) {
            void 0 === n && (n = t._canvas);
            for (
              var i = n.getContext("2d"),
                o = 0,
                s = "",
                a = "",
                u = {},
                h = r.letterSpacing,
                c = r.whiteSpace,
                l = t.collapseSpaces(c),
                f = t.collapseNewlines(c),
                p = !l,
                d = r.wordWrapWidth + h,
                v = t.tokenize(e),
                g = 0;
              g < v.length;
              g++
            ) {
              var y = v[g];
              if (t.isNewline(y)) {
                if (!f) {
                  (a += t.addLine(s)), (p = !l), (s = ""), (o = 0);
                  continue;
                }
                y = " ";
              }
              if (l) {
                var m = t.isBreakingSpace(y),
                  _ = t.isBreakingSpace(s[s.length - 1]);
                if (m && _) continue;
              }
              var x = t.getFromCache(y, h, u, i);
              if (x > d)
                if (
                  ("" !== s && ((a += t.addLine(s)), (s = ""), (o = 0)),
                  t.canBreakWords(y, r.breakWords))
                )
                  for (var b = t.wordWrapSplit(y), E = 0; E < b.length; E++) {
                    for (var w = b[E], T = 1; b[E + T]; ) {
                      var S = b[E + T],
                        O = w[w.length - 1];
                      if (t.canBreakChars(O, S, y, E, r.breakWords)) break;
                      (w += S), T++;
                    }
                    E += w.length - 1;
                    var A = t.getFromCache(w, h, u, i);
                    A + o > d &&
                      ((a += t.addLine(s)), (p = !1), (s = ""), (o = 0)),
                      (s += w),
                      (o += A);
                  }
                else {
                  s.length > 0 && ((a += t.addLine(s)), (s = ""), (o = 0));
                  var P = g === v.length - 1;
                  (a += t.addLine(y, !P)), (p = !1), (s = ""), (o = 0);
                }
              else
                x + o > d && ((p = !1), (a += t.addLine(s)), (s = ""), (o = 0)),
                  (s.length > 0 || !t.isBreakingSpace(y) || p) &&
                    ((s += y), (o += x));
            }
            return (a += t.addLine(s, !1));
          }),
          (t.addLine = function (e, r) {
            return (
              void 0 === r && (r = !0),
              (e = t.trimRight(e)),
              (e = r ? e + "\n" : e)
            );
          }),
          (t.getFromCache = function (t, e, r, n) {
            var i = r[t];
            if (void 0 === i) {
              var o = t.length * e;
              (i = n.measureText(t).width + o), (r[t] = i);
            }
            return i;
          }),
          (t.collapseSpaces = function (t) {
            return "normal" === t || "pre-line" === t;
          }),
          (t.collapseNewlines = function (t) {
            return "normal" === t;
          }),
          (t.trimRight = function (e) {
            if ("string" != typeof e) return "";
            for (var r = e.length - 1; r >= 0; r--) {
              var n = e[r];
              if (!t.isBreakingSpace(n)) break;
              e = e.slice(0, -1);
            }
            return e;
          }),
          (t.isNewline = function (e) {
            return (
              "string" == typeof e && t._newlines.indexOf(e.charCodeAt(0)) >= 0
            );
          }),
          (t.isBreakingSpace = function (e) {
            return (
              "string" == typeof e &&
              t._breakingSpaces.indexOf(e.charCodeAt(0)) >= 0
            );
          }),
          (t.tokenize = function (e) {
            var r = [],
              n = "";
            if ("string" != typeof e) return r;
            for (var i = 0; i < e.length; i++) {
              var o = e[i];
              t.isBreakingSpace(o) || t.isNewline(o)
                ? ("" !== n && (r.push(n), (n = "")), r.push(o))
                : (n += o);
            }
            return "" !== n && r.push(n), r;
          }),
          (t.canBreakWords = function (t, e) {
            return e;
          }),
          (t.canBreakChars = function (t, e, r, n, i) {
            return !0;
          }),
          (t.wordWrapSplit = function (t) {
            return t.split("");
          }),
          (t.measureFont = function (e) {
            if (t._fonts[e]) return t._fonts[e];
            var r = { ascent: 0, descent: 0, fontSize: 0 },
              n = t._canvas,
              i = t._context;
            i.font = e;
            var o = t.METRICS_STRING + t.BASELINE_SYMBOL,
              s = Math.ceil(i.measureText(o).width),
              a = Math.ceil(i.measureText(t.BASELINE_SYMBOL).width),
              u = 2 * a;
            (a = (a * t.BASELINE_MULTIPLIER) | 0),
              (n.width = s),
              (n.height = u),
              (i.fillStyle = "#f00"),
              i.fillRect(0, 0, s, u),
              (i.font = e),
              (i.textBaseline = "alphabetic"),
              (i.fillStyle = "#000"),
              i.fillText(o, 0, a);
            var h = i.getImageData(0, 0, s, u).data,
              c = h.length,
              l = 4 * s,
              f = 0,
              p = 0,
              d = !1;
            for (f = 0; f < a; ++f) {
              for (var v = 0; v < l; v += 4)
                if (255 !== h[p + v]) {
                  d = !0;
                  break;
                }
              if (d) break;
              p += l;
            }
            for (r.ascent = a - f, p = c - l, d = !1, f = u; f > a; --f) {
              for (v = 0; v < l; v += 4)
                if (255 !== h[p + v]) {
                  d = !0;
                  break;
                }
              if (d) break;
              p -= l;
            }
            return (
              (r.descent = f - a),
              (r.fontSize = r.ascent + r.descent),
              (t._fonts[e] = r),
              r
            );
          }),
          (t.clearMetrics = function (e) {
            void 0 === e && (e = ""), e ? delete t._fonts[e] : (t._fonts = {});
          }),
          t
        );
      })(),
      Ui = (function () {
        try {
          var t = new OffscreenCanvas(0, 0),
            e = t.getContext("2d");
          return e && e.measureText ? t : document.createElement("canvas");
        } catch (t) {
          return document.createElement("canvas");
        }
      })();
    (Ui.width = Ui.height = 10),
      (Fi._canvas = Ui),
      (Fi._context = Ui.getContext("2d")),
      (Fi._fonts = {}),
      (Fi.METRICS_STRING = "|ÉqÅ"),
      (Fi.BASELINE_SYMBOL = "M"),
      (Fi.BASELINE_MULTIPLIER = 1.4),
      (Fi._newlines = [10, 13]),
      (Fi._breakingSpaces = [
        9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287,
        12288,
      ]);
    var ki = { texture: !0, children: !1, baseTexture: !0 },
      Bi = (function (t) {
        function e(e, r, n) {
          var i = this,
            o = !1;
          n || ((n = document.createElement("canvas")), (o = !0)),
            (n.width = 3),
            (n.height = 3);
          var s = De.from(n);
          return (
            (s.orig = new Ot()),
            (s.trim = new Ot()),
            ((i = t.call(this, s) || this)._ownCanvas = o),
            (i.canvas = n),
            (i.context = i.canvas.getContext("2d")),
            (i._resolution = V.RESOLUTION),
            (i._autoResolution = !0),
            (i._text = null),
            (i._style = null),
            (i._styleListener = null),
            (i._font = ""),
            (i.text = e),
            (i.style = r),
            (i.localStyleID = -1),
            i
          );
        }
        return (
          (function (t, e) {
            function r() {
              this.constructor = t;
            }
            Ii(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          })(e, t),
          (e.prototype.updateText = function (t) {
            var e = this._style;
            if (
              (this.localStyleID !== e.styleID &&
                ((this.dirty = !0), (this.localStyleID = e.styleID)),
              this.dirty || !t)
            ) {
              this._font = this._style.toFontString();
              var r,
                n,
                i = this.context,
                o = Fi.measureText(
                  this._text || " ",
                  this._style,
                  this._style.wordWrap,
                  this.canvas
                ),
                s = o.width,
                a = o.height,
                u = o.lines,
                h = o.lineHeight,
                c = o.lineWidths,
                l = o.maxLineWidth,
                f = o.fontProperties;
              (this.canvas.width = Math.ceil(
                (Math.max(1, s) + 2 * e.padding) * this._resolution
              )),
                (this.canvas.height = Math.ceil(
                  (Math.max(1, a) + 2 * e.padding) * this._resolution
                )),
                i.scale(this._resolution, this._resolution),
                i.clearRect(0, 0, this.canvas.width, this.canvas.height),
                (i.font = this._font),
                (i.lineWidth = e.strokeThickness),
                (i.textBaseline = e.textBaseline),
                (i.lineJoin = e.lineJoin),
                (i.miterLimit = e.miterLimit);
              for (var p = e.dropShadow ? 2 : 1, d = 0; d < p; ++d) {
                var v = e.dropShadow && 0 === d,
                  g = v ? 2 * a : 0,
                  y = g * this.resolution;
                if (v) {
                  (i.fillStyle = "black"), (i.strokeStyle = "black");
                  var m = e.dropShadowColor,
                    _ = tt("number" == typeof m ? m : rt(m));
                  (i.shadowColor =
                    "rgba(" +
                    255 * _[0] +
                    "," +
                    255 * _[1] +
                    "," +
                    255 * _[2] +
                    "," +
                    e.dropShadowAlpha +
                    ")"),
                    (i.shadowBlur = e.dropShadowBlur),
                    (i.shadowOffsetX =
                      Math.cos(e.dropShadowAngle) * e.dropShadowDistance),
                    (i.shadowOffsetY =
                      Math.sin(e.dropShadowAngle) * e.dropShadowDistance + y);
                } else
                  (i.fillStyle = this._generateFillStyle(e, u, o)),
                    (i.strokeStyle = e.stroke),
                    (i.shadowColor = "0"),
                    (i.shadowBlur = 0),
                    (i.shadowOffsetX = 0),
                    (i.shadowOffsetY = 0);
                for (var x = 0; x < u.length; x++)
                  (r = e.strokeThickness / 2),
                    (n = e.strokeThickness / 2 + x * h + f.ascent),
                    "right" === e.align
                      ? (r += l - c[x])
                      : "center" === e.align && (r += (l - c[x]) / 2),
                    e.stroke &&
                      e.strokeThickness &&
                      this.drawLetterSpacing(
                        u[x],
                        r + e.padding,
                        n + e.padding - g,
                        !0
                      ),
                    e.fill &&
                      this.drawLetterSpacing(
                        u[x],
                        r + e.padding,
                        n + e.padding - g
                      );
              }
              this.updateTexture();
            }
          }),
          (e.prototype.drawLetterSpacing = function (t, e, r, n) {
            void 0 === n && (n = !1);
            var i = this._style.letterSpacing;
            if (0 !== i)
              for (
                var o = e,
                  s = Array.from ? Array.from(t) : t.split(""),
                  a = this.context.measureText(t).width,
                  u = 0,
                  h = 0;
                h < s.length;
                ++h
              ) {
                var c = s[h];
                n
                  ? this.context.strokeText(c, o, r)
                  : this.context.fillText(c, o, r),
                  (o +=
                    a -
                    (u = this.context.measureText(t.substring(h + 1)).width) +
                    i),
                  (a = u);
              }
            else
              n
                ? this.context.strokeText(t, e, r)
                : this.context.fillText(t, e, r);
          }),
          (e.prototype.updateTexture = function () {
            var t = this.canvas;
            if (this._style.trim) {
              var e = (function (t) {
                var e,
                  r,
                  n,
                  i = t.width,
                  o = t.height,
                  s = t.getContext("2d"),
                  a = s.getImageData(0, 0, i, o).data,
                  u = a.length,
                  h = { top: null, left: null, right: null, bottom: null },
                  c = null;
                for (e = 0; e < u; e += 4)
                  0 !== a[e + 3] &&
                    ((r = (e / 4) % i),
                    (n = ~~(e / 4 / i)),
                    null === h.top && (h.top = n),
                    (null === h.left || r < h.left) && (h.left = r),
                    (null === h.right || h.right < r) && (h.right = r + 1),
                    (null === h.bottom || h.bottom < n) && (h.bottom = n));
                return (
                  null !== h.top &&
                    ((i = h.right - h.left),
                    (o = h.bottom - h.top + 1),
                    (c = s.getImageData(h.left, h.top, i, o))),
                  { height: o, width: i, data: c }
                );
              })(t);
              e.data &&
                ((t.width = e.width),
                (t.height = e.height),
                this.context.putImageData(e.data, 0, 0));
            }
            var r = this._texture,
              n = this._style,
              i = n.trim ? 0 : n.padding,
              o = r.baseTexture;
            (r.trim.width = r._frame.width =
              Math.ceil(t.width / this._resolution)),
              (r.trim.height = r._frame.height =
                Math.ceil(t.height / this._resolution)),
              (r.trim.x = -i),
              (r.trim.y = -i),
              (r.orig.width = r._frame.width - 2 * i),
              (r.orig.height = r._frame.height - 2 * i),
              this._onTextureUpdate(),
              o.setRealSize(t.width, t.height, this._resolution),
              (this.dirty = !1);
          }),
          (e.prototype._render = function (e) {
            this._autoResolution &&
              this._resolution !== e.resolution &&
              ((this._resolution = e.resolution), (this.dirty = !0)),
              this.updateText(!0),
              t.prototype._render.call(this, e);
          }),
          (e.prototype.getLocalBounds = function (e) {
            return (
              this.updateText(!0), t.prototype.getLocalBounds.call(this, e)
            );
          }),
          (e.prototype._calculateBounds = function () {
            this.updateText(!0),
              this.calculateVertices(),
              this._bounds.addQuad(this.vertexData);
          }),
          (e.prototype._generateFillStyle = function (t, e, r) {
            var n,
              i = t.fill;
            if (!Array.isArray(i)) return i;
            if (1 === i.length) return i[0];
            var o = t.dropShadow ? t.dropShadowDistance : 0,
              s = t.padding || 0,
              a = Math.ceil(this.canvas.width / this._resolution) - o - 2 * s,
              u = Math.ceil(this.canvas.height / this._resolution) - o - 2 * s,
              h = i.slice(),
              c = t.fillGradientStops.slice();
            if (!c.length)
              for (var l = h.length + 1, f = 1; f < l; ++f) c.push(f / l);
            if (
              (h.unshift(i[0]),
              c.unshift(0),
              h.push(i[i.length - 1]),
              c.push(1),
              t.fillGradientType === Si.LINEAR_VERTICAL)
            ) {
              n = this.context.createLinearGradient(a / 2, s, a / 2, u + s);
              var p = 0,
                d = (r.fontProperties.fontSize + t.strokeThickness) / u;
              for (f = 0; f < e.length; f++)
                for (var v = r.lineHeight * f, g = 0; g < h.length; g++) {
                  var y =
                      v / u +
                      ("number" == typeof c[g] ? c[g] : g / h.length) * d,
                    m = Math.max(p, y);
                  (m = Math.min(m, 1)), n.addColorStop(m, h[g]), (p = m);
                }
            } else {
              n = this.context.createLinearGradient(s, u / 2, a + s, u / 2);
              var _ = h.length + 1,
                x = 1;
              for (f = 0; f < h.length; f++) {
                var b = void 0;
                (b = "number" == typeof c[f] ? c[f] : x / _),
                  n.addColorStop(b, h[f]),
                  x++;
              }
            }
            return n;
          }),
          (e.prototype.destroy = function (e) {
            "boolean" == typeof e && (e = { children: e }),
              (e = Object.assign({}, ki, e)),
              t.prototype.destroy.call(this, e),
              this._ownCanvas && (this.canvas.height = this.canvas.width = 0),
              (this.context = null),
              (this.canvas = null),
              (this._style = null);
          }),
          Object.defineProperty(e.prototype, "width", {
            get: function () {
              return (
                this.updateText(!0),
                Math.abs(this.scale.x) * this._texture.orig.width
              );
            },
            set: function (t) {
              this.updateText(!0);
              var e = lt(this.scale.x) || 1;
              (this.scale.x = (e * t) / this._texture.orig.width),
                (this._width = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "height", {
            get: function () {
              return (
                this.updateText(!0),
                Math.abs(this.scale.y) * this._texture.orig.height
              );
            },
            set: function (t) {
              this.updateText(!0);
              var e = lt(this.scale.y) || 1;
              (this.scale.y = (e * t) / this._texture.orig.height),
                (this._height = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "style", {
            get: function () {
              return this._style;
            },
            set: function (t) {
              (t = t || {}),
                (this._style = t instanceof Ri ? t : new Ri(t)),
                (this.localStyleID = -1),
                (this.dirty = !0);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "text", {
            get: function () {
              return this._text;
            },
            set: function (t) {
              (t = String(null == t ? "" : t)),
                this._text !== t && ((this._text = t), (this.dirty = !0));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "resolution", {
            get: function () {
              return this._resolution;
            },
            set: function (t) {
              (this._autoResolution = !1),
                this._resolution !== t &&
                  ((this._resolution = t), (this.dirty = !0));
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(Pi);
    /*!
     * @pixi/prepare - v5.3.0
     * Compiled Thu, 18 Jun 2020 23:27:40 UTC
     *
     * @pixi/prepare is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */
    V.UPLOADS_PER_FRAME = 4;
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var ji = function (t, e) {
      return (ji =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        })(t, e);
    };
    var Hi = (function () {
      function t(t) {
        (this.maxItemsPerFrame = t), (this.itemsLeft = 0);
      }
      return (
        (t.prototype.beginFrame = function () {
          this.itemsLeft = this.maxItemsPerFrame;
        }),
        (t.prototype.allowedToUpload = function () {
          return this.itemsLeft-- > 0;
        }),
        t
      );
    })();
    function Gi(t, e) {
      var r = !1;
      if (t && t._textures && t._textures.length)
        for (var n = 0; n < t._textures.length; n++)
          if (t._textures[n] instanceof De) {
            var i = t._textures[n].baseTexture;
            -1 === e.indexOf(i) && (e.push(i), (r = !0));
          }
      return r;
    }
    function Xi(t, e) {
      if (t.baseTexture instanceof ye) {
        var r = t.baseTexture;
        return -1 === e.indexOf(r) && e.push(r), !0;
      }
      return !1;
    }
    function zi(t, e) {
      if (t._texture && t._texture instanceof De) {
        var r = t._texture.baseTexture;
        return -1 === e.indexOf(r) && e.push(r), !0;
      }
      return !1;
    }
    function Vi(t, e) {
      return e instanceof Bi && (e.updateText(!0), !0);
    }
    function Yi(t, e) {
      if (e instanceof Ri) {
        var r = e.toFontString();
        return Fi.measureFont(r), !0;
      }
      return !1;
    }
    function Wi(t, e) {
      if (t instanceof Bi) {
        -1 === e.indexOf(t.style) && e.push(t.style),
          -1 === e.indexOf(t) && e.push(t);
        var r = t._texture.baseTexture;
        return -1 === e.indexOf(r) && e.push(r), !0;
      }
      return !1;
    }
    function qi(t, e) {
      return t instanceof Ri && (-1 === e.indexOf(t) && e.push(t), !0);
    }
    function Ki(t, e) {
      return (
        e instanceof ye &&
        (e._glTextures[t.CONTEXT_UID] || t.texture.bind(e), !0)
      );
    }
    function Zi(t, e) {
      if (!(e instanceof wi)) return !1;
      var r = e.geometry;
      e.finishPoly(), r.updateBatches();
      for (var n = r.batches, i = 0; i < n.length; i++) {
        var o = n[i].style.texture;
        o && Ki(t, o.baseTexture);
      }
      return r.batchable || t.geometry.bind(r, e._resolveDirectShader(t)), !0;
    }
    function Ji(t, e) {
      return t instanceof wi && (e.push(t), !0);
    }
    var $i = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this;
          return (
            (r.uploadHookHelper = r.renderer),
            r.registerFindHook(Ji),
            r.registerUploadHook(Ki),
            r.registerUploadHook(Zi),
            r
          );
        }
        return (
          (function (t, e) {
            function r() {
              this.constructor = t;
            }
            ji(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          })(e, t),
          e
        );
      })(
        (function () {
          function t(t) {
            var e = this;
            (this.limiter = new Hi(V.UPLOADS_PER_FRAME)),
              (this.renderer = t),
              (this.uploadHookHelper = null),
              (this.queue = []),
              (this.addHooks = []),
              (this.uploadHooks = []),
              (this.completes = []),
              (this.ticking = !1),
              (this.delayedTick = function () {
                e.queue && e.prepareItems();
              }),
              this.registerFindHook(Wi),
              this.registerFindHook(qi),
              this.registerFindHook(Gi),
              this.registerFindHook(Xi),
              this.registerFindHook(zi),
              this.registerUploadHook(Vi),
              this.registerUploadHook(Yi);
          }
          return (
            (t.prototype.upload = function (t, e) {
              "function" == typeof t && ((e = t), (t = null)),
                t && this.add(t),
                this.queue.length
                  ? (e && this.completes.push(e),
                    this.ticking ||
                      ((this.ticking = !0),
                      Qt.system.addOnce(this.tick, this, Zt.UTILITY)))
                  : e && e();
            }),
            (t.prototype.tick = function () {
              setTimeout(this.delayedTick, 0);
            }),
            (t.prototype.prepareItems = function () {
              for (
                this.limiter.beginFrame();
                this.queue.length && this.limiter.allowedToUpload();

              ) {
                var t = this.queue[0],
                  e = !1;
                if (t && !t._destroyed)
                  for (var r = 0, n = this.uploadHooks.length; r < n; r++)
                    if (this.uploadHooks[r](this.uploadHookHelper, t)) {
                      this.queue.shift(), (e = !0);
                      break;
                    }
                e || this.queue.shift();
              }
              if (this.queue.length)
                Qt.system.addOnce(this.tick, this, Zt.UTILITY);
              else {
                this.ticking = !1;
                var i = this.completes.slice(0);
                this.completes.length = 0;
                for (r = 0, n = i.length; r < n; r++) i[r]();
              }
            }),
            (t.prototype.registerFindHook = function (t) {
              return t && this.addHooks.push(t), this;
            }),
            (t.prototype.registerUploadHook = function (t) {
              return t && this.uploadHooks.push(t), this;
            }),
            (t.prototype.add = function (t) {
              for (
                var e = 0, r = this.addHooks.length;
                e < r && !this.addHooks[e](t, this.queue);
                e++
              );
              if (t instanceof Kt)
                for (e = t.children.length - 1; e >= 0; e--)
                  this.add(t.children[e]);
              return this;
            }),
            (t.prototype.destroy = function () {
              this.ticking && Qt.system.remove(this.tick, this),
                (this.ticking = !1),
                (this.addHooks = null),
                (this.uploadHooks = null),
                (this.renderer = null),
                (this.completes = null),
                (this.queue = null),
                (this.limiter = null),
                (this.uploadHookHelper = null);
            }),
            t
          );
        })()
      ),
      Qi =
        ((function () {
          function t(t) {
            (this.maxMilliseconds = t), (this.frameStart = 0);
          }
          (t.prototype.beginFrame = function () {
            this.frameStart = Date.now();
          }),
            (t.prototype.allowedToUpload = function () {
              return Date.now() - this.frameStart < this.maxMilliseconds;
            });
        })(),
        (function () {
          function t(t, e, r) {
            void 0 === r && (r = null),
              (this._texture = t instanceof De ? t : null),
              (this.baseTexture =
                t instanceof ye ? t : this._texture.baseTexture),
              (this.textures = {}),
              (this.animations = {}),
              (this.data = e);
            var n = this.baseTexture.resource;
            (this.resolution = this._updateResolution(r || (n ? n.url : null))),
              (this._frames = this.data.frames),
              (this._frameKeys = Object.keys(this._frames)),
              (this._batchIndex = 0),
              (this._callback = null);
          }
          return (
            (t.prototype._updateResolution = function (t) {
              void 0 === t && (t = null);
              var e = this.data.meta.scale,
                r = bt(t, null);
              return (
                null === r && (r = void 0 !== e ? parseFloat(e) : 1),
                1 !== r && this.baseTexture.setResolution(r),
                r
              );
            }),
            (t.prototype.parse = function (e) {
              (this._batchIndex = 0),
                (this._callback = e),
                this._frameKeys.length <= t.BATCH_SIZE
                  ? (this._processFrames(0),
                    this._processAnimations(),
                    this._parseComplete())
                  : this._nextBatch();
            }),
            (t.prototype._processFrames = function (e) {
              for (
                var r = e, n = t.BATCH_SIZE;
                r - e < n && r < this._frameKeys.length;

              ) {
                var i = this._frameKeys[r],
                  o = this._frames[i],
                  s = o.frame;
                if (s) {
                  var a = null,
                    u = null,
                    h =
                      !1 !== o.trimmed && o.sourceSize ? o.sourceSize : o.frame,
                    c = new Ot(
                      0,
                      0,
                      Math.floor(h.w) / this.resolution,
                      Math.floor(h.h) / this.resolution
                    );
                  (a = o.rotated
                    ? new Ot(
                        Math.floor(s.x) / this.resolution,
                        Math.floor(s.y) / this.resolution,
                        Math.floor(s.h) / this.resolution,
                        Math.floor(s.w) / this.resolution
                      )
                    : new Ot(
                        Math.floor(s.x) / this.resolution,
                        Math.floor(s.y) / this.resolution,
                        Math.floor(s.w) / this.resolution,
                        Math.floor(s.h) / this.resolution
                      )),
                    !1 !== o.trimmed &&
                      o.spriteSourceSize &&
                      (u = new Ot(
                        Math.floor(o.spriteSourceSize.x) / this.resolution,
                        Math.floor(o.spriteSourceSize.y) / this.resolution,
                        Math.floor(s.w) / this.resolution,
                        Math.floor(s.h) / this.resolution
                      )),
                    (this.textures[i] = new De(
                      this.baseTexture,
                      a,
                      c,
                      u,
                      o.rotated ? 2 : 0,
                      o.anchor
                    )),
                    De.addToCache(this.textures[i], i);
                }
                r++;
              }
            }),
            (t.prototype._processAnimations = function () {
              var t = this.data.animations || {};
              for (var e in t) {
                this.animations[e] = [];
                for (var r = 0; r < t[e].length; r++) {
                  var n = t[e][r];
                  this.animations[e].push(this.textures[n]);
                }
              }
            }),
            (t.prototype._parseComplete = function () {
              var t = this._callback;
              (this._callback = null),
                (this._batchIndex = 0),
                t.call(this, this.textures);
            }),
            (t.prototype._nextBatch = function () {
              var e = this;
              this._processFrames(this._batchIndex * t.BATCH_SIZE),
                this._batchIndex++,
                setTimeout(function () {
                  e._batchIndex * t.BATCH_SIZE < e._frameKeys.length
                    ? e._nextBatch()
                    : (e._processAnimations(), e._parseComplete());
                }, 0);
            }),
            (t.prototype.destroy = function (t) {
              var e;
              for (var r in (void 0 === t && (t = !1), this.textures))
                this.textures[r].destroy();
              (this._frames = null),
                (this._frameKeys = null),
                (this.data = null),
                (this.textures = null),
                t &&
                  (null === (e = this._texture) || void 0 === e || e.destroy(),
                  this.baseTexture.destroy()),
                (this._texture = null),
                (this.baseTexture = null);
            }),
            (t.BATCH_SIZE = 1e3),
            t
          );
        })()),
      to = (function () {
        function t() {}
        return (
          (t.use = function (e, r) {
            var n = e.name + "_image";
            if (
              e.data &&
              e.type === Un.TYPE.JSON &&
              e.data.frames &&
              !this.resources[n]
            ) {
              var i = {
                  crossOrigin: e.crossOrigin,
                  metadata: e.metadata.imageMetadata,
                  parentResource: e,
                },
                o = t.getResourcePath(e, this.baseUrl);
              this.add(n, o, i, function (t) {
                if (t.error) r(t.error);
                else {
                  var n = new Qi(t.texture, e.data, e.url);
                  n.parse(function () {
                    (e.spritesheet = n), (e.textures = n.textures), r();
                  });
                }
              });
            } else r();
          }),
          (t.getResourcePath = function (t, e) {
            return t.isDataUrl
              ? t.data.meta.image
              : J.a.resolve(t.url.replace(e, ""), t.data.meta.image);
          }),
          t
        );
      })(),
      eo = function (t, e) {
        return (eo =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    function ro(t, e) {
      function r() {
        this.constructor = t;
      }
      eo(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((r.prototype = e.prototype), new r()));
    }
    var no = new Mt(),
      io =
        ((function (t) {
          function e(e, r, n) {
            void 0 === r && (r = 100), void 0 === n && (n = 100);
            var i = t.call(this, e) || this;
            return (
              (i.tileTransform = new Gt()),
              (i._width = r),
              (i._height = n),
              (i.uvMatrix = e.uvMatrix || new Fr(e)),
              (i.pluginName = "tilingSprite"),
              (i.uvRespectAnchor = !1),
              i
            );
          }
          ro(e, t),
            Object.defineProperty(e.prototype, "clampMargin", {
              get: function () {
                return this.uvMatrix.clampMargin;
              },
              set: function (t) {
                (this.uvMatrix.clampMargin = t), this.uvMatrix.update(!0);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "tileScale", {
              get: function () {
                return this.tileTransform.scale;
              },
              set: function (t) {
                this.tileTransform.scale.copyFrom(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "tilePosition", {
              get: function () {
                return this.tileTransform.position;
              },
              set: function (t) {
                this.tileTransform.position.copyFrom(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype._onTextureUpdate = function () {
              this.uvMatrix && (this.uvMatrix.texture = this._texture),
                (this._cachedTint = 16777215);
            }),
            (e.prototype._render = function (t) {
              var e = this._texture;
              e &&
                e.valid &&
                (this.tileTransform.updateLocalTransform(),
                this.uvMatrix.update(),
                t.batch.setObjectRenderer(t.plugins[this.pluginName]),
                t.plugins[this.pluginName].render(this));
            }),
            (e.prototype._calculateBounds = function () {
              var t = this._width * -this._anchor._x,
                e = this._height * -this._anchor._y,
                r = this._width * (1 - this._anchor._x),
                n = this._height * (1 - this._anchor._y);
              this._bounds.addFrame(this.transform, t, e, r, n);
            }),
            (e.prototype.getLocalBounds = function (e) {
              return 0 === this.children.length
                ? ((this._bounds.minX = this._width * -this._anchor._x),
                  (this._bounds.minY = this._height * -this._anchor._y),
                  (this._bounds.maxX = this._width * (1 - this._anchor._x)),
                  (this._bounds.maxY = this._height * (1 - this._anchor._y)),
                  e ||
                    (this._localBoundsRect ||
                      (this._localBoundsRect = new Ot()),
                    (e = this._localBoundsRect)),
                  this._bounds.getRectangle(e))
                : t.prototype.getLocalBounds.call(this, e);
            }),
            (e.prototype.containsPoint = function (t) {
              this.worldTransform.applyInverse(t, no);
              var e = this._width,
                r = this._height,
                n = -e * this.anchor._x;
              if (no.x >= n && no.x < n + e) {
                var i = -r * this.anchor._y;
                if (no.y >= i && no.y < i + r) return !0;
              }
              return !1;
            }),
            (e.prototype.destroy = function (e) {
              t.prototype.destroy.call(this, e),
                (this.tileTransform = null),
                (this.uvMatrix = null);
            }),
            (e.from = function (t, r) {
              return (
                "number" == typeof r &&
                  (vt(
                    "5.3.0",
                    "TilingSprite.from use options instead of width and height args"
                  ),
                  (r = { width: r, height: arguments[2] })),
                new e(De.from(t, r), r.width, r.height)
              );
            }),
            Object.defineProperty(e.prototype, "width", {
              get: function () {
                return this._width;
              },
              set: function (t) {
                this._width = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "height", {
              get: function () {
                return this._height;
              },
              set: function (t) {
                this._height = t;
              },
              enumerable: !1,
              configurable: !0,
            });
        })(Pi),
        "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n"),
      oo = new Dt(),
      so = (function (t) {
        function e(e) {
          var r = t.call(this, e) || this,
            n = { globals: r.renderer.globalUniforms };
          return (
            (r.shader = Rr.from(
              io,
              "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord - floor(vTextureCoord - uClampOffset);\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 texSample = texture2D(uSampler, coord);\n    gl_FragColor = texSample * uColor;\n}\n",
              n
            )),
            (r.simpleShader = Rr.from(
              io,
              "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n",
              n
            )),
            (r.quad = new We()),
            (r.state = Dr.for2d()),
            r
          );
        }
        return (
          ro(e, t),
          (e.prototype.render = function (t) {
            var e = this.renderer,
              r = this.quad,
              n = r.vertices;
            (n[0] = n[6] = t._width * -t.anchor.x),
              (n[1] = n[3] = t._height * -t.anchor.y),
              (n[2] = n[4] = t._width * (1 - t.anchor.x)),
              (n[5] = n[7] = t._height * (1 - t.anchor.y)),
              t.uvRespectAnchor &&
                (((n = r.uvs)[0] = n[6] = -t.anchor.x),
                (n[1] = n[3] = -t.anchor.y),
                (n[2] = n[4] = 1 - t.anchor.x),
                (n[5] = n[7] = 1 - t.anchor.y)),
              r.invalidate();
            var i = t._texture,
              o = i.baseTexture,
              s = t.tileTransform.localTransform,
              a = t.uvMatrix,
              u =
                o.isPowerOfTwo &&
                i.frame.width === o.width &&
                i.frame.height === o.height;
            u &&
              (o._glTextures[e.CONTEXT_UID]
                ? (u = o.wrapMode !== U.CLAMP)
                : o.wrapMode === U.CLAMP && (o.wrapMode = U.REPEAT));
            var h = u ? this.simpleShader : this.shader,
              c = i.width,
              l = i.height,
              f = t._width,
              p = t._height;
            oo.set(
              (s.a * c) / f,
              (s.b * c) / p,
              (s.c * l) / f,
              (s.d * l) / p,
              s.tx / f,
              s.ty / p
            ),
              oo.invert(),
              u
                ? oo.prepend(a.mapCoord)
                : ((h.uniforms.uMapCoord = a.mapCoord.toArray(!0)),
                  (h.uniforms.uClampFrame = a.uClampFrame),
                  (h.uniforms.uClampOffset = a.uClampOffset)),
              (h.uniforms.uTransform = oo.toArray(!0)),
              (h.uniforms.uColor = st(
                t.tint,
                t.worldAlpha,
                h.uniforms.uColor,
                o.alphaMode
              )),
              (h.uniforms.translationMatrix =
                t.transform.worldTransform.toArray(!0)),
              (h.uniforms.uSampler = i),
              e.shader.bind(h),
              e.geometry.bind(r),
              (this.state.blendMode = it(t.blendMode, o.alphaMode)),
              e.state.set(this.state),
              e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0);
          }),
          e
        );
      })($e),
      ao = function (t, e) {
        return (ao =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    function uo(t, e) {
      function r() {
        this.constructor = t;
      }
      ao(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((r.prototype = e.prototype), new r()));
    }
    var ho = (function () {
        function t(t, e) {
          (this.uvBuffer = t),
            (this.uvMatrix = e),
            (this.data = null),
            (this._bufferUpdateId = -1),
            (this._textureUpdateId = -1),
            (this._updateID = 0);
        }
        return (
          (t.prototype.update = function (t) {
            if (
              t ||
              this._bufferUpdateId !== this.uvBuffer._updateID ||
              this._textureUpdateId !== this.uvMatrix._updateID
            ) {
              (this._bufferUpdateId = this.uvBuffer._updateID),
                (this._textureUpdateId = this.uvMatrix._updateID);
              var e = this.uvBuffer.data;
              (this.data && this.data.length === e.length) ||
                (this.data = new Float32Array(e.length)),
                this.uvMatrix.multiplyUvs(e, this.data),
                this._updateID++;
            }
          }),
          t
        );
      })(),
      co = new Mt(),
      lo = new It(),
      fo = (function (t) {
        function e(e, r, n, i) {
          void 0 === i && (i = R.TRIANGLES);
          var o = t.call(this) || this;
          return (
            (o.geometry = e),
            e.refCount++,
            (o.shader = r),
            (o.state = n || Dr.for2d()),
            (o.drawMode = i),
            (o.start = 0),
            (o.size = 0),
            (o.uvs = null),
            (o.indices = null),
            (o.vertexData = new Float32Array(1)),
            (o.vertexDirty = 0),
            (o._transformID = -1),
            (o.tint = 16777215),
            (o.blendMode = M.NORMAL),
            (o._roundPixels = V.ROUND_PIXELS),
            (o.batchUvs = null),
            o
          );
        }
        return (
          uo(e, t),
          Object.defineProperty(e.prototype, "uvBuffer", {
            get: function () {
              return this.geometry.buffers[1];
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "verticesBuffer", {
            get: function () {
              return this.geometry.buffers[0];
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "material", {
            get: function () {
              return this.shader;
            },
            set: function (t) {
              this.shader = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "blendMode", {
            get: function () {
              return this.state.blendMode;
            },
            set: function (t) {
              this.state.blendMode = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "roundPixels", {
            get: function () {
              return this._roundPixels;
            },
            set: function (t) {
              this._roundPixels !== t && (this._transformID = -1),
                (this._roundPixels = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "tint", {
            get: function () {
              return this.shader.tint;
            },
            set: function (t) {
              this.shader.tint = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "texture", {
            get: function () {
              return this.shader.texture;
            },
            set: function (t) {
              this.shader.texture = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype._render = function (t) {
            var r = this.geometry.buffers[0].data;
            this.shader.batchable &&
            this.drawMode === R.TRIANGLES &&
            r.length < 2 * e.BATCHABLE_SIZE
              ? this._renderToBatch(t)
              : this._renderDefault(t);
          }),
          (e.prototype._renderDefault = function (t) {
            var e = this.shader;
            (e.alpha = this.worldAlpha),
              e.update && e.update(),
              t.batch.flush(),
              e.program.uniformData.translationMatrix &&
                (e.uniforms.translationMatrix =
                  this.transform.worldTransform.toArray(!0)),
              t.shader.bind(e),
              t.state.set(this.state),
              t.geometry.bind(this.geometry, e),
              t.geometry.draw(
                this.drawMode,
                this.size,
                this.start,
                this.geometry.instanceCount
              );
          }),
          (e.prototype._renderToBatch = function (t) {
            var e = this.geometry;
            this.shader.uvMatrix &&
              (this.shader.uvMatrix.update(), this.calculateUvs()),
              this.calculateVertices(),
              (this.indices = e.indexBuffer.data),
              (this._tintRGB = this.shader._tintRGB),
              (this._texture = this.shader.texture);
            var r = this.material.pluginName;
            t.batch.setObjectRenderer(t.plugins[r]), t.plugins[r].render(this);
          }),
          (e.prototype.calculateVertices = function () {
            var t = this.geometry,
              e = t.buffers[0].data;
            if (
              t.vertexDirtyId !== this.vertexDirty ||
              this._transformID !== this.transform._worldID
            ) {
              (this._transformID = this.transform._worldID),
                this.vertexData.length !== e.length &&
                  (this.vertexData = new Float32Array(e.length));
              for (
                var r = this.transform.worldTransform,
                  n = r.a,
                  i = r.b,
                  o = r.c,
                  s = r.d,
                  a = r.tx,
                  u = r.ty,
                  h = this.vertexData,
                  c = 0;
                c < h.length / 2;
                c++
              ) {
                var l = e[2 * c],
                  f = e[2 * c + 1];
                (h[2 * c] = n * l + o * f + a),
                  (h[2 * c + 1] = i * l + s * f + u);
              }
              if (this._roundPixels) {
                var p = V.RESOLUTION;
                for (c = 0; c < h.length; ++c)
                  h[c] = Math.round(((h[c] * p) | 0) / p);
              }
              this.vertexDirty = t.vertexDirtyId;
            }
          }),
          (e.prototype.calculateUvs = function () {
            var t = this.geometry.buffers[1];
            this.shader.uvMatrix.isSimple
              ? (this.uvs = t.data)
              : (this.batchUvs ||
                  (this.batchUvs = new ho(t, this.shader.uvMatrix)),
                this.batchUvs.update(),
                (this.uvs = this.batchUvs.data));
          }),
          (e.prototype._calculateBounds = function () {
            this.calculateVertices(),
              this._bounds.addVertexData(
                this.vertexData,
                0,
                this.vertexData.length
              );
          }),
          (e.prototype.containsPoint = function (t) {
            if (!this.getBounds().contains(t.x, t.y)) return !1;
            this.worldTransform.applyInverse(t, co);
            for (
              var e = this.geometry.getBuffer("aVertexPosition").data,
                r = lo.points,
                n = this.geometry.getIndex().data,
                i = n.length,
                o = 4 === this.drawMode ? 3 : 1,
                s = 0;
              s + 2 < i;
              s += o
            ) {
              var a = 2 * n[s],
                u = 2 * n[s + 1],
                h = 2 * n[s + 2];
              if (
                ((r[0] = e[a]),
                (r[1] = e[a + 1]),
                (r[2] = e[u]),
                (r[3] = e[u + 1]),
                (r[4] = e[h]),
                (r[5] = e[h + 1]),
                lo.contains(co.x, co.y))
              )
                return !0;
            }
            return !1;
          }),
          (e.prototype.destroy = function (e) {
            t.prototype.destroy.call(this, e),
              this.geometry.refCount--,
              0 === this.geometry.refCount && this.geometry.dispose(),
              (this.geometry = null),
              (this.shader = null),
              (this.state = null),
              (this.uvs = null),
              (this.indices = null),
              (this.vertexData = null);
          }),
          (e.BATCHABLE_SIZE = 100),
          e
        );
      })(Kt),
      po = (function (t) {
        function e(e, r) {
          var n = this,
            i = {
              uSampler: e,
              alpha: 1,
              uTextureMatrix: Dt.IDENTITY,
              uColor: new Float32Array([1, 1, 1, 1]),
            };
          return (
            (r = Object.assign(
              { tint: 16777215, alpha: 1, pluginName: "batch" },
              r
            )).uniforms && Object.assign(i, r.uniforms),
            ((n =
              t.call(
                this,
                r.program ||
                  Mr.from(
                    "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTextureMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\n}\n",
                    "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n"
                  ),
                i
              ) || this)._colorDirty = !1),
            (n.uvMatrix = new Fr(e)),
            (n.batchable = void 0 === r.program),
            (n.pluginName = r.pluginName),
            (n.tint = r.tint),
            (n.alpha = r.alpha),
            n
          );
        }
        return (
          uo(e, t),
          Object.defineProperty(e.prototype, "texture", {
            get: function () {
              return this.uniforms.uSampler;
            },
            set: function (t) {
              this.uniforms.uSampler !== t &&
                ((this.uniforms.uSampler = t), (this.uvMatrix.texture = t));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "alpha", {
            get: function () {
              return this._alpha;
            },
            set: function (t) {
              t !== this._alpha && ((this._alpha = t), (this._colorDirty = !0));
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "tint", {
            get: function () {
              return this._tint;
            },
            set: function (t) {
              t !== this._tint &&
                ((this._tint = t),
                (this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)),
                (this._colorDirty = !0));
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.update = function () {
            if (this._colorDirty) {
              this._colorDirty = !1;
              var t = this.texture.baseTexture;
              st(this._tint, this._alpha, this.uniforms.uColor, t.alphaMode);
            }
            this.uvMatrix.update() &&
              (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord);
          }),
          e
        );
      })(Rr),
      vo = (function (t) {
        function e(e, r, n) {
          var i = t.call(this) || this,
            o = new Be(e),
            s = new Be(r, !0),
            a = new Be(n, !0, !0);
          return (
            i
              .addAttribute("aVertexPosition", o, 2, !1, N.FLOAT)
              .addAttribute("aTextureCoord", s, 2, !1, N.FLOAT)
              .addIndex(a),
            (i._updateId = -1),
            i
          );
        }
        return (
          uo(e, t),
          Object.defineProperty(e.prototype, "vertexDirtyId", {
            get: function () {
              return this.buffers[0]._updateID;
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(Ve),
      go = function (t, e) {
        return (go =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    var yo = function () {
        (this.info = []),
          (this.common = []),
          (this.page = []),
          (this.char = []),
          (this.kerning = []);
      },
      mo = [
        (function () {
          function t() {}
          return (
            (t.test = function (t) {
              return "string" == typeof t && 0 === t.indexOf("info face=");
            }),
            (t.parse = function (t) {
              var e = t.match(/^[a-z]+\s+.+$/gm),
                r = {
                  info: [],
                  common: [],
                  page: [],
                  char: [],
                  chars: [],
                  kerning: [],
                };
              for (var n in e) {
                var i = e[n].match(/^[a-z]+/gm)[0],
                  o = e[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
                  s = {};
                for (var a in o) {
                  var u = o[a].split("="),
                    h = u[0],
                    c = u[1].replace(/"/gm, ""),
                    l = parseFloat(c),
                    f = isNaN(l) ? c : l;
                  s[h] = f;
                }
                r[i].push(s);
              }
              var p = new yo();
              return (
                r.info.forEach(function (t) {
                  return p.info.push({
                    face: t.face,
                    size: parseInt(t.size, 10),
                  });
                }),
                r.common.forEach(function (t) {
                  return p.common.push({
                    lineHeight: parseInt(t.lineHeight, 10),
                  });
                }),
                r.page.forEach(function (t) {
                  return p.page.push({ id: parseInt(t.id, 10), file: t.file });
                }),
                r.char.forEach(function (t) {
                  return p.char.push({
                    id: parseInt(t.id, 10),
                    page: parseInt(t.page, 10),
                    x: parseInt(t.x, 10),
                    y: parseInt(t.y, 10),
                    width: parseInt(t.width, 10),
                    height: parseInt(t.height, 10),
                    xoffset: parseInt(t.xoffset, 10),
                    yoffset: parseInt(t.yoffset, 10),
                    xadvance: parseInt(t.xadvance, 10),
                  });
                }),
                r.kerning.forEach(function (t) {
                  return p.kerning.push({
                    first: parseInt(t.first, 10),
                    second: parseInt(t.second, 10),
                    amount: parseInt(t.amount, 10),
                  });
                }),
                p
              );
            }),
            t
          );
        })(),
        (function () {
          function t() {}
          return (
            (t.test = function (t) {
              return (
                t instanceof XMLDocument &&
                t.getElementsByTagName("page").length &&
                null !== t.getElementsByTagName("info")[0].getAttribute("face")
              );
            }),
            (t.parse = function (t) {
              for (
                var e = new yo(),
                  r = t.getElementsByTagName("info"),
                  n = t.getElementsByTagName("common"),
                  i = t.getElementsByTagName("page"),
                  o = t.getElementsByTagName("char"),
                  s = t.getElementsByTagName("kerning"),
                  a = 0;
                a < r.length;
                a++
              )
                e.info.push({
                  face: r[a].getAttribute("face"),
                  size: parseInt(r[a].getAttribute("size"), 10),
                });
              for (a = 0; a < n.length; a++)
                e.common.push({
                  lineHeight: parseInt(n[a].getAttribute("lineHeight"), 10),
                });
              for (a = 0; a < i.length; a++)
                e.page.push({
                  id: parseInt(i[a].getAttribute("id"), 10) || 0,
                  file: i[a].getAttribute("file"),
                });
              for (a = 0; a < o.length; a++) {
                var u = o[a];
                e.char.push({
                  id: parseInt(u.getAttribute("id"), 10),
                  page: parseInt(u.getAttribute("page"), 10) || 0,
                  x: parseInt(u.getAttribute("x"), 10),
                  y: parseInt(u.getAttribute("y"), 10),
                  width: parseInt(u.getAttribute("width"), 10),
                  height: parseInt(u.getAttribute("height"), 10),
                  xoffset: parseInt(u.getAttribute("xoffset"), 10),
                  yoffset: parseInt(u.getAttribute("yoffset"), 10),
                  xadvance: parseInt(u.getAttribute("xadvance"), 10),
                });
              }
              for (a = 0; a < s.length; a++)
                e.kerning.push({
                  first: parseInt(s[a].getAttribute("first"), 10),
                  second: parseInt(s[a].getAttribute("second"), 10),
                  amount: parseInt(s[a].getAttribute("amount"), 10),
                });
              return e;
            }),
            t
          );
        })(),
      ];
    function _o(t) {
      for (var e = 0; e < mo.length; e++) if (mo[e].test(t)) return mo[e];
      return null;
    }
    function xo(t, e, r, n, i, o) {
      var s,
        a = r.fill;
      if (!Array.isArray(a)) return a;
      if (1 === a.length) return a[0];
      var u = r.dropShadow ? r.dropShadowDistance : 0,
        h = r.padding || 0,
        c = Math.ceil(t.width / n) - u - 2 * h,
        l = Math.ceil(t.height / n) - u - 2 * h,
        f = a.slice(),
        p = r.fillGradientStops.slice();
      if (!p.length)
        for (var d = f.length + 1, v = 1; v < d; ++v) p.push(v / d);
      if (
        (f.unshift(a[0]),
        p.unshift(0),
        f.push(a[a.length - 1]),
        p.push(1),
        r.fillGradientType === Si.LINEAR_VERTICAL)
      ) {
        s = e.createLinearGradient(c / 2, h, c / 2, l + h);
        var g = 0,
          y = (o.fontProperties.fontSize + r.strokeThickness) / l;
        for (v = 0; v < i.length; v++)
          for (var m = o.lineHeight * v, _ = 0; _ < f.length; _++) {
            var x = m / l + ("number" == typeof p[_] ? p[_] : _ / f.length) * y,
              b = Math.max(g, x);
            (b = Math.min(b, 1)), s.addColorStop(b, f[_]), (g = b);
          }
      } else {
        s = e.createLinearGradient(h, l / 2, c + h, l / 2);
        var E = f.length + 1,
          w = 1;
        for (v = 0; v < f.length; v++) {
          var T = void 0;
          (T = "number" == typeof p[v] ? p[v] : w / E),
            s.addColorStop(T, f[v]),
            w++;
        }
      }
      return s;
    }
    function bo(t, e, r, n, i, o, s) {
      var a = r.text,
        u = r.fontProperties;
      e.translate(n, i), e.scale(o, o);
      var h = s.strokeThickness / 2,
        c = -s.strokeThickness / 2;
      (e.font = s.toFontString()),
        (e.lineWidth = s.strokeThickness),
        (e.textBaseline = s.textBaseline),
        (e.lineJoin = s.lineJoin),
        (e.miterLimit = s.miterLimit),
        (e.fillStyle = xo(t, e, s, o, [a], r)),
        (e.strokeStyle = s.stroke),
        (e.font = s.toFontString()),
        (e.lineWidth = s.strokeThickness),
        (e.textBaseline = s.textBaseline),
        (e.lineJoin = s.lineJoin),
        (e.miterLimit = s.miterLimit),
        (e.fillStyle = xo(t, e, s, o, [a], r)),
        (e.strokeStyle = s.stroke);
      var l = s.dropShadowColor,
        f = tt("number" == typeof l ? l : rt(l));
      s.dropShadow
        ? ((e.shadowColor =
            "rgba(" +
            255 * f[0] +
            "," +
            255 * f[1] +
            "," +
            255 * f[2] +
            "," +
            s.dropShadowAlpha +
            ")"),
          (e.shadowBlur = s.dropShadowBlur),
          (e.shadowOffsetX =
            Math.cos(s.dropShadowAngle) * s.dropShadowDistance),
          (e.shadowOffsetY =
            Math.sin(s.dropShadowAngle) * s.dropShadowDistance))
        : ((e.shadowColor = "0"),
          (e.shadowBlur = 0),
          (e.shadowOffsetX = 0),
          (e.shadowOffsetY = 0)),
        s.stroke &&
          s.strokeThickness &&
          e.strokeText(a, h, c + r.lineHeight - u.descent),
        s.fill && e.fillText(a, h, c + r.lineHeight - u.descent),
        e.setTransform(),
        (e.fillStyle = "rgba(0, 0, 0, 0)");
    }
    var Eo = (function () {
        function t(t, e) {
          var r = t.info[0],
            n = t.common[0],
            i = bt(t.page[0].file),
            o = {};
          for (var s in ((this.font = r.face),
          (this.size = r.size),
          (this.lineHeight = n.lineHeight / i),
          (this.chars = {}),
          (this.pageTextures = o),
          t.page)) {
            var a = t.page[s],
              u = a.id,
              h = a.file;
            o[u] = e instanceof Array ? e[s] : e[h];
          }
          for (var s in t.char) {
            var c = t.char[s],
              l = ((u = c.id), c.page),
              f = t.char[s],
              p = f.x,
              d = f.y,
              v = f.width,
              g = f.height,
              y = f.xoffset,
              m = f.yoffset,
              _ = f.xadvance;
            (d /= i), (v /= i), (g /= i), (y /= i), (m /= i), (_ /= i);
            var x = new Ot(
              (p /= i) + o[l].frame.x / i,
              d + o[l].frame.y / i,
              v,
              g
            );
            this.chars[u] = {
              xOffset: y,
              yOffset: m,
              xAdvance: _,
              kerning: {},
              texture: new De(o[l].baseTexture, x),
              page: l,
            };
          }
          for (var s in t.kerning) {
            var b = t.kerning[s],
              E = b.first,
              w = b.second,
              T = b.amount;
            (E /= i),
              (w /= i),
              (T /= i),
              this.chars[w] && (this.chars[w].kerning[E] = T);
          }
        }
        return (
          (t.prototype.destroy = function () {
            for (var t in this.chars)
              this.chars[t].texture.destroy(), (this.chars[t].texture = null);
            for (var t in this.pageTextures)
              this.pageTextures[t].destroy(!0), (this.pageTextures[t] = null);
            (this.chars = null), (this.pageTextures = null);
          }),
          (t.install = function (e, r) {
            var n;
            if (e instanceof yo) n = e;
            else {
              var i = _o(e);
              if (!i) throw new Error("Unrecognized data format for font.");
              n = i.parse(e);
            }
            r instanceof De && (r = [r]);
            var o = new t(n, r);
            return (t.available[o.font] = o), o;
          }),
          (t.uninstall = function (e) {
            var r = t.available[e];
            if (!r) throw new Error("No font found named '" + e + "'");
            r.destroy(), delete t.available[e];
          }),
          (t.from = function (e, r, n) {
            if (!e)
              throw new Error("[BitmapFont] Property `name` is required.");
            var i = Object.assign({}, t.defaultOptions, n),
              o = i.chars,
              s = i.padding,
              a = i.resolution,
              u = i.textureWidth,
              h = i.textureHeight,
              c = (function (t) {
                "string" == typeof t && (t = [t]);
                for (var e = [], r = 0, n = t.length; r < n; r++) {
                  var i = t[r];
                  if (Array.isArray(i)) {
                    if (2 !== i.length)
                      throw new Error(
                        "[BitmapFont]: Invalid character range length, expecting 2 got " +
                          i.length +
                          "."
                      );
                    var o = i[0].charCodeAt(0),
                      s = i[1].charCodeAt(0);
                    if (s < o)
                      throw new Error("[BitmapFont]: Invalid character range.");
                    for (var a = o, u = s; a <= u; a++)
                      e.push(String.fromCharCode(a));
                  } else e.push.apply(e, i.split(""));
                }
                if (0 === e.length)
                  throw new Error(
                    "[BitmapFont]: Empty set when resolving characters."
                  );
                return e;
              })(o),
              l = r instanceof Ri ? r : new Ri(r),
              f = u,
              p = new yo();
            (p.info[0] = { face: l.fontFamily, size: l.fontSize }),
              (p.common[0] = { lineHeight: l.fontSize });
            for (
              var d, v, g, y = 0, m = 0, _ = 0, x = [], b = 0;
              b < c.length;
              b++
            ) {
              d ||
                (((d = document.createElement("canvas")).width = u),
                (d.height = h),
                (v = d.getContext("2d")),
                (g = new ye(d, { resolution: a })),
                x.push(new De(g)),
                p.page.push({ id: x.length - 1, file: "" }));
              var E = Fi.measureText(c[b], l, !1, d),
                w = E.width,
                T = Math.ceil(E.height),
                S = Math.ceil(("italic" === l.fontStyle ? 2 : 1) * w);
              if (m >= h - T * a) {
                if (0 === m)
                  throw new Error(
                    "[BitmapFont] textureHeight " +
                      h +
                      "px is too small for " +
                      l.fontSize +
                      "px fonts"
                  );
                (d = null), (v = null), (g = null), (m = 0), (y = 0), (_ = 0);
              } else if (
                ((_ = Math.max(T + E.fontProperties.descent, _)),
                S * a + y >= f)
              )
                --b, (m += _ * a), (m = Math.ceil(m)), (y = 0), (_ = 0);
              else {
                bo(d, v, E, y, m, a, l);
                var O = E.text.charCodeAt(0);
                (p.char[O] = {
                  id: O,
                  page: x.length - 1,
                  x: y / a,
                  y: m / a,
                  width: S,
                  height: T,
                  xoffset: 0,
                  yoffset: 0,
                  xadvance: Math.ceil(
                    w -
                      (l.dropShadow ? l.dropShadowDistance : 0) -
                      (l.stroke ? l.strokeThickness : 0)
                  ),
                }),
                  (y += (S + 2 * s) * a),
                  (y = Math.ceil(y));
              }
            }
            var A = new t(p, x);
            return (
              void 0 !== t.available[e] && t.uninstall(e),
              (t.available[e] = A),
              A
            );
          }),
          (t.ALPHA = [["a", "z"], ["A", "Z"], " "]),
          (t.NUMERIC = [["0", "9"]]),
          (t.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "]),
          (t.ASCII = [[" ", "~"]]),
          (t.defaultOptions = {
            resolution: 1,
            textureWidth: 512,
            textureHeight: 512,
            padding: 4,
            chars: t.ALPHANUMERIC,
          }),
          (t.available = {}),
          t
        );
      })(),
      wo = [],
      To = [],
      So =
        ((function (t) {
          function e(r, n) {
            void 0 === n && (n = {});
            var i = t.call(this) || this;
            (i._tint = 16777215),
              n.font &&
                (vt(
                  "5.3.0",
                  "PIXI.BitmapText constructor style.font property is deprecated."
                ),
                i._upgradeStyle(n));
            var o = Object.assign({}, e.styleDefaults, n),
              s = o.align,
              a = o.tint,
              u = o.maxWidth,
              h = o.letterSpacing,
              c = o.fontName,
              l = o.fontSize;
            if (!Eo.available[c])
              throw new Error('Missing BitmapFont "' + c + '"');
            return (
              (i._activePagesMeshData = []),
              (i._textWidth = 0),
              (i._textHeight = 0),
              (i._align = s),
              (i._tint = a),
              (i._fontName = c),
              (i._fontSize = l || Eo.available[c].size),
              (i._text = r),
              (i._maxWidth = u),
              (i._maxLineHeight = 0),
              (i._letterSpacing = h),
              (i._anchor = new Rt(
                function () {
                  i.dirty = !0;
                },
                i,
                0,
                0
              )),
              (i.roundPixels = V.ROUND_PIXELS),
              (i.dirty = !0),
              i
            );
          }
          (function (t, e) {
            function r() {
              this.constructor = t;
            }
            go(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          })(e, t),
            (e.prototype.updateText = function () {
              for (
                var t,
                  e = Eo.available[this._fontName],
                  r = this._fontSize / e.size,
                  n = new Mt(),
                  i = [],
                  o = [],
                  s = this._text.replace(/(?:\r\n|\r)/g, "\n") || " ",
                  a = s.length,
                  u = (this._maxWidth * e.size) / this._fontSize,
                  h = null,
                  c = 0,
                  l = 0,
                  f = 0,
                  p = -1,
                  d = 0,
                  v = 0,
                  g = 0,
                  y = 0;
                y < a;
                y++
              ) {
                var m = s.charCodeAt(y),
                  _ = s.charAt(y);
                if (
                  (/(?:\s)/.test(_) && ((p = y), (d = c)),
                  "\r" !== _ && "\n" !== _)
                ) {
                  var x = e.chars[m];
                  if (x) {
                    h && x.kerning[h] && (n.x += x.kerning[h]);
                    var b = To.pop() || {
                      texture: De.EMPTY,
                      line: 0,
                      charCode: 0,
                      position: new Mt(),
                    };
                    (b.texture = x.texture),
                      (b.line = f),
                      (b.charCode = m),
                      (b.position.x =
                        n.x + x.xOffset + this._letterSpacing / 2),
                      (b.position.y = n.y + x.yOffset),
                      i.push(b),
                      (n.x += x.xAdvance + this._letterSpacing),
                      (c = n.x),
                      (g = Math.max(g, x.yOffset + x.texture.height)),
                      (h = m),
                      -1 !== p &&
                        u > 0 &&
                        n.x > u &&
                        (ct(i, 1 + p - ++v, 1 + y - p),
                        (y = p),
                        (p = -1),
                        o.push(d),
                        (l = Math.max(l, d)),
                        f++,
                        (n.x = 0),
                        (n.y += e.lineHeight),
                        (h = null));
                  }
                } else
                  o.push(c),
                    (l = Math.max(l, c)),
                    ++f,
                    ++v,
                    (n.x = 0),
                    (n.y += e.lineHeight),
                    (h = null);
              }
              var E = s.charAt(s.length - 1);
              "\r" !== E &&
                "\n" !== E &&
                (/(?:\s)/.test(E) && (c = d), o.push(c), (l = Math.max(l, c)));
              var w = [];
              for (y = 0; y <= f; y++) {
                var T = 0;
                "right" === this._align
                  ? (T = l - o[y])
                  : "center" === this._align && (T = (l - o[y]) / 2),
                  w.push(T);
              }
              var S = i.length,
                O = {},
                A = [],
                P = this._activePagesMeshData;
              for (y = 0; y < P.length; y++) wo.push(P[y]);
              for (y = 0; y < S; y++) {
                var I = (D = i[y].texture).baseTexture.uid;
                if (!O[I]) {
                  if (!(j = wo.pop())) {
                    var C = new vo(),
                      M = new po(De.EMPTY);
                    j = {
                      index: 0,
                      indexCount: 0,
                      vertexCount: 0,
                      uvsCount: 0,
                      total: 0,
                      mesh: new fo(C, M),
                      vertices: null,
                      uvs: null,
                      indices: null,
                    };
                  }
                  (j.index = 0),
                    (j.indexCount = 0),
                    (j.vertexCount = 0),
                    (j.uvsCount = 0),
                    (j.total = 0),
                    (j.mesh.texture = new De(D.baseTexture)),
                    (j.mesh.tint = this._tint),
                    A.push(j),
                    (O[I] = j);
                }
                O[I].total++;
              }
              for (y = 0; y < P.length; y++)
                -1 === A.indexOf(P[y]) && this.removeChild(P[y].mesh);
              for (y = 0; y < A.length; y++)
                A[y].mesh.parent !== this && this.addChild(A[y].mesh);
              for (var y in ((this._activePagesMeshData = A), O)) {
                var R = (j = O[y]).total;
                ((null === (t = j.indices) || void 0 === t
                  ? void 0
                  : t.length) >
                  6 * R &&
                  !(j.vertices.length < 2 * fo.BATCHABLE_SIZE)) ||
                  ((j.vertices = new Float32Array(8 * R)),
                  (j.uvs = new Float32Array(8 * R)),
                  (j.indices = new Uint16Array(6 * R))),
                  (j.mesh.size = 6 * R);
              }
              for (y = 0; y < S; y++) {
                var D,
                  L = ((_ = i[y]).position.x + w[_.line]) * r,
                  N = _.position.y * r,
                  F = O[(D = _.texture).baseTexture.uid],
                  U = D.frame,
                  k = D._uvs,
                  B = F.index++;
                (F.indices[6 * B + 0] = 0 + 4 * B),
                  (F.indices[6 * B + 1] = 1 + 4 * B),
                  (F.indices[6 * B + 2] = 2 + 4 * B),
                  (F.indices[6 * B + 3] = 0 + 4 * B),
                  (F.indices[6 * B + 4] = 2 + 4 * B),
                  (F.indices[6 * B + 5] = 3 + 4 * B),
                  (F.vertices[8 * B + 0] = L),
                  (F.vertices[8 * B + 1] = N),
                  (F.vertices[8 * B + 2] = L + U.width * r),
                  (F.vertices[8 * B + 3] = N),
                  (F.vertices[8 * B + 4] = L + U.width * r),
                  (F.vertices[8 * B + 5] = N + U.height * r),
                  (F.vertices[8 * B + 6] = L),
                  (F.vertices[8 * B + 7] = N + U.height * r),
                  (F.uvs[8 * B + 0] = k.x0),
                  (F.uvs[8 * B + 1] = k.y0),
                  (F.uvs[8 * B + 2] = k.x1),
                  (F.uvs[8 * B + 3] = k.y1),
                  (F.uvs[8 * B + 4] = k.x2),
                  (F.uvs[8 * B + 5] = k.y2),
                  (F.uvs[8 * B + 6] = k.x3),
                  (F.uvs[8 * B + 7] = k.y3);
              }
              for (var y in ((this._textWidth = l * r),
              (this._textHeight = (n.y + e.lineHeight) * r),
              O)) {
                var j = O[y];
                if (0 !== this.anchor.x || 0 !== this.anchor.y)
                  for (
                    var H = 0,
                      G = this._textWidth * this.anchor.x,
                      X = this._textHeight * this.anchor.y,
                      z = 0;
                    z < j.total;
                    z++
                  )
                    (j.vertices[H++] -= G),
                      (j.vertices[H++] -= X),
                      (j.vertices[H++] -= G),
                      (j.vertices[H++] -= X),
                      (j.vertices[H++] -= G),
                      (j.vertices[H++] -= X),
                      (j.vertices[H++] -= G),
                      (j.vertices[H++] -= X);
                this._maxLineHeight = g * r;
                var V = j.mesh.geometry.getBuffer("aVertexPosition"),
                  Y = j.mesh.geometry.getBuffer("aTextureCoord"),
                  W = j.mesh.geometry.getIndex();
                (V.data = j.vertices),
                  (Y.data = j.uvs),
                  (W.data = j.indices),
                  V.update(),
                  Y.update(),
                  W.update();
              }
              for (y = 0; y < i.length; y++) To.push(i[y]);
            }),
            (e.prototype.updateTransform = function () {
              this.validate(), this.containerUpdateTransform();
            }),
            (e.prototype.getLocalBounds = function () {
              return this.validate(), t.prototype.getLocalBounds.call(this);
            }),
            (e.prototype.validate = function () {
              this.dirty && (this.updateText(), (this.dirty = !1));
            }),
            Object.defineProperty(e.prototype, "tint", {
              get: function () {
                return this._tint;
              },
              set: function (t) {
                if (this._tint !== t) {
                  this._tint = t;
                  for (var e = 0; e < this._activePagesMeshData.length; e++)
                    this._activePagesMeshData[e].mesh.tint = t;
                }
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "align", {
              get: function () {
                return this._align;
              },
              set: function (t) {
                this._align !== t && ((this._align = t), (this.dirty = !0));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "fontName", {
              get: function () {
                return this._fontName;
              },
              set: function (t) {
                if (!Eo.available[t])
                  throw new Error('Missing BitmapFont "' + t + '"');
                this._fontName !== t &&
                  ((this._fontName = t), (this.dirty = !0));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "fontSize", {
              get: function () {
                return this._fontSize;
              },
              set: function (t) {
                this._fontSize !== t &&
                  ((this._fontSize = t), (this.dirty = !0));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "anchor", {
              get: function () {
                return this._anchor;
              },
              set: function (t) {
                "number" == typeof t
                  ? this._anchor.set(t)
                  : this._anchor.copyFrom(t);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "text", {
              get: function () {
                return this._text;
              },
              set: function (t) {
                (t = String(null == t ? "" : t)),
                  this._text !== t && ((this._text = t), (this.dirty = !0));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "maxWidth", {
              get: function () {
                return this._maxWidth;
              },
              set: function (t) {
                this._maxWidth !== t &&
                  ((this._maxWidth = t), (this.dirty = !0));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "maxLineHeight", {
              get: function () {
                return this.validate(), this._maxLineHeight;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "textWidth", {
              get: function () {
                return this.validate(), this._textWidth;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "letterSpacing", {
              get: function () {
                return this._letterSpacing;
              },
              set: function (t) {
                this._letterSpacing !== t &&
                  ((this._letterSpacing = t), (this.dirty = !0));
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "textHeight", {
              get: function () {
                return this.validate(), this._textHeight;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype._upgradeStyle = function (t) {
              if ("string" == typeof t.font) {
                var e = t.font.split(" ");
                (t.fontName = 1 === e.length ? e[0] : e.slice(1).join(" ")),
                  e.length >= 2 && (t.fontSize = parseInt(e[0], 10));
              } else
                (t.fontName = t.font.name),
                  (t.fontSize =
                    "number" == typeof t.font.size
                      ? t.font.size
                      : parseInt(t.font.size, 10));
            }),
            (e.registerFont = function (t, e) {
              return (
                vt(
                  "5.3.0",
                  "PIXI.BitmapText.registerFont is deprecated, use PIXI.BitmapFont.install"
                ),
                Eo.install(t, e)
              );
            }),
            Object.defineProperty(e, "fonts", {
              get: function () {
                return (
                  vt(
                    "5.3.0",
                    "PIXI.BitmapText.fonts is deprecated, use PIXI.BitmapFont.available"
                  ),
                  Eo.available
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.styleDefaults = {
              align: "left",
              tint: 16777215,
              maxWidth: 0,
              letterSpacing: 0,
            });
        })(Kt),
        (function () {
          function t() {}
          return (
            (t.add = function () {
              Un.setExtensionXhrType("fnt", Un.XHR_RESPONSE_TYPE.DOCUMENT);
            }),
            (t.use = function (e, r) {
              var n = _o(e.data);
              if (n)
                for (
                  var i = t.getBaseUrl(this, e),
                    o = n.parse(e.data),
                    s = {},
                    a = function (t) {
                      (s[t.metadata.pageFile] = t.texture),
                        Object.keys(s).length === o.page.length &&
                          ((e.bitmapFont = Eo.install(o, s)), r());
                    },
                    u = 0;
                  u < o.page.length;
                  ++u
                ) {
                  var h = o.page[u].file,
                    c = i + h,
                    l = !1;
                  for (var f in this.resources) {
                    var p = this.resources[f];
                    if (p.url === c) {
                      (p.metadata.pageFile = h),
                        p.texture ? a(p) : p.onAfterMiddleware.add(a),
                        (l = !0);
                      break;
                    }
                  }
                  if (!l) {
                    var d = {
                      crossOrigin: e.crossOrigin,
                      loadType: Un.LOAD_TYPE.IMAGE,
                      metadata: Object.assign(
                        { pageFile: h },
                        e.metadata.imageMetadata
                      ),
                      parentResource: e,
                    };
                    this.add(c, d, a);
                  }
                }
              else r();
            }),
            (t.getBaseUrl = function (e, r) {
              var n = r.isDataUrl ? "" : t.dirname(r.url);
              return (
                r.isDataUrl &&
                  ("." === n && (n = ""),
                  e.baseUrl &&
                    n &&
                    "/" === e.baseUrl.charAt(e.baseUrl.length - 1) &&
                    (n += "/")),
                (n = n.replace(e.baseUrl, "")) &&
                  "/" !== n.charAt(n.length - 1) &&
                  (n += "/"),
                n
              );
            }),
            (t.dirname = function (t) {
              var e = t
                .replace(/\\/g, "/")
                .replace(/\/$/, "")
                .replace(/\/[^\/]*$/, "");
              return e === t ? "." : "" === e ? "/" : e;
            }),
            t
          );
        })()),
      Oo = function (t, e) {
        return (Oo =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    var Ao = (function (t) {
        function e(e) {
          void 0 === e && (e = 1);
          var r =
            t.call(
              this,
              "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",
              "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n",
              { uAlpha: 1 }
            ) || this;
          return (r.alpha = e), r;
        }
        return (
          (function (t, e) {
            function r() {
              this.constructor = t;
            }
            Oo(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          })(e, t),
          Object.defineProperty(e.prototype, "alpha", {
            get: function () {
              return this.uniforms.uAlpha;
            },
            set: function (t) {
              this.uniforms.uAlpha = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(Lr),
      Po = function (t, e) {
        return (Po =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    function Io(t, e) {
      function r() {
        this.constructor = t;
      }
      Po(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((r.prototype = e.prototype), new r()));
    }
    var Co,
      Mo,
      Ro,
      Do,
      Lo,
      No,
      Fo,
      Uo,
      ko,
      Bo,
      jo,
      Ho,
      Go,
      Xo,
      zo,
      Vo,
      Yo,
      Wo = {
        5: [0.153388, 0.221461, 0.250301],
        7: [0.071303, 0.131514, 0.189879, 0.214607],
        9: [0.028532, 0.067234, 0.124009, 0.179044, 0.20236],
        11: [0.0093, 0.028002, 0.065984, 0.121703, 0.175713, 0.198596],
        13: [
          0.002406, 0.009255, 0.027867, 0.065666, 0.121117, 0.174868, 0.197641,
        ],
        15: [
          489e-6, 0.002403, 0.009246, 0.02784, 0.065602, 0.120999, 0.174697,
          0.197448,
        ],
      },
      qo = [
        "varying vec2 vBlurTexCoords[%size%];",
        "uniform sampler2D uSampler;",
        "void main(void)",
        "{",
        "    gl_FragColor = vec4(0.0);",
        "    %blur%",
        "}",
      ].join("\n");
    !(function (t) {
      (t[(t.WEBGL_LEGACY = 0)] = "WEBGL_LEGACY"),
        (t[(t.WEBGL = 1)] = "WEBGL"),
        (t[(t.WEBGL2 = 2)] = "WEBGL2");
    })(Co || (Co = {})),
      (function (t) {
        (t[(t.UNKNOWN = 0)] = "UNKNOWN"),
          (t[(t.WEBGL = 1)] = "WEBGL"),
          (t[(t.CANVAS = 2)] = "CANVAS");
      })(Mo || (Mo = {})),
      (function (t) {
        (t[(t.COLOR = 16384)] = "COLOR"),
          (t[(t.DEPTH = 256)] = "DEPTH"),
          (t[(t.STENCIL = 1024)] = "STENCIL");
      })(Ro || (Ro = {})),
      (function (t) {
        (t[(t.NORMAL = 0)] = "NORMAL"),
          (t[(t.ADD = 1)] = "ADD"),
          (t[(t.MULTIPLY = 2)] = "MULTIPLY"),
          (t[(t.SCREEN = 3)] = "SCREEN"),
          (t[(t.OVERLAY = 4)] = "OVERLAY"),
          (t[(t.DARKEN = 5)] = "DARKEN"),
          (t[(t.LIGHTEN = 6)] = "LIGHTEN"),
          (t[(t.COLOR_DODGE = 7)] = "COLOR_DODGE"),
          (t[(t.COLOR_BURN = 8)] = "COLOR_BURN"),
          (t[(t.HARD_LIGHT = 9)] = "HARD_LIGHT"),
          (t[(t.SOFT_LIGHT = 10)] = "SOFT_LIGHT"),
          (t[(t.DIFFERENCE = 11)] = "DIFFERENCE"),
          (t[(t.EXCLUSION = 12)] = "EXCLUSION"),
          (t[(t.HUE = 13)] = "HUE"),
          (t[(t.SATURATION = 14)] = "SATURATION"),
          (t[(t.COLOR = 15)] = "COLOR"),
          (t[(t.LUMINOSITY = 16)] = "LUMINOSITY"),
          (t[(t.NORMAL_NPM = 17)] = "NORMAL_NPM"),
          (t[(t.ADD_NPM = 18)] = "ADD_NPM"),
          (t[(t.SCREEN_NPM = 19)] = "SCREEN_NPM"),
          (t[(t.NONE = 20)] = "NONE"),
          (t[(t.SRC_OVER = 0)] = "SRC_OVER"),
          (t[(t.SRC_IN = 21)] = "SRC_IN"),
          (t[(t.SRC_OUT = 22)] = "SRC_OUT"),
          (t[(t.SRC_ATOP = 23)] = "SRC_ATOP"),
          (t[(t.DST_OVER = 24)] = "DST_OVER"),
          (t[(t.DST_IN = 25)] = "DST_IN"),
          (t[(t.DST_OUT = 26)] = "DST_OUT"),
          (t[(t.DST_ATOP = 27)] = "DST_ATOP"),
          (t[(t.ERASE = 26)] = "ERASE"),
          (t[(t.SUBTRACT = 28)] = "SUBTRACT"),
          (t[(t.XOR = 29)] = "XOR");
      })(Do || (Do = {})),
      (function (t) {
        (t[(t.POINTS = 0)] = "POINTS"),
          (t[(t.LINES = 1)] = "LINES"),
          (t[(t.LINE_LOOP = 2)] = "LINE_LOOP"),
          (t[(t.LINE_STRIP = 3)] = "LINE_STRIP"),
          (t[(t.TRIANGLES = 4)] = "TRIANGLES"),
          (t[(t.TRIANGLE_STRIP = 5)] = "TRIANGLE_STRIP"),
          (t[(t.TRIANGLE_FAN = 6)] = "TRIANGLE_FAN");
      })(Lo || (Lo = {})),
      (function (t) {
        (t[(t.RGBA = 6408)] = "RGBA"),
          (t[(t.RGB = 6407)] = "RGB"),
          (t[(t.ALPHA = 6406)] = "ALPHA"),
          (t[(t.LUMINANCE = 6409)] = "LUMINANCE"),
          (t[(t.LUMINANCE_ALPHA = 6410)] = "LUMINANCE_ALPHA"),
          (t[(t.DEPTH_COMPONENT = 6402)] = "DEPTH_COMPONENT"),
          (t[(t.DEPTH_STENCIL = 34041)] = "DEPTH_STENCIL");
      })(No || (No = {})),
      (function (t) {
        (t[(t.TEXTURE_2D = 3553)] = "TEXTURE_2D"),
          (t[(t.TEXTURE_CUBE_MAP = 34067)] = "TEXTURE_CUBE_MAP"),
          (t[(t.TEXTURE_2D_ARRAY = 35866)] = "TEXTURE_2D_ARRAY"),
          (t[(t.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
            "TEXTURE_CUBE_MAP_POSITIVE_X"),
          (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
            "TEXTURE_CUBE_MAP_NEGATIVE_X"),
          (t[(t.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
            "TEXTURE_CUBE_MAP_POSITIVE_Y"),
          (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
            "TEXTURE_CUBE_MAP_NEGATIVE_Y"),
          (t[(t.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
            "TEXTURE_CUBE_MAP_POSITIVE_Z"),
          (t[(t.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
            "TEXTURE_CUBE_MAP_NEGATIVE_Z");
      })(Fo || (Fo = {})),
      (function (t) {
        (t[(t.UNSIGNED_BYTE = 5121)] = "UNSIGNED_BYTE"),
          (t[(t.UNSIGNED_SHORT = 5123)] = "UNSIGNED_SHORT"),
          (t[(t.UNSIGNED_SHORT_5_6_5 = 33635)] = "UNSIGNED_SHORT_5_6_5"),
          (t[(t.UNSIGNED_SHORT_4_4_4_4 = 32819)] = "UNSIGNED_SHORT_4_4_4_4"),
          (t[(t.UNSIGNED_SHORT_5_5_5_1 = 32820)] = "UNSIGNED_SHORT_5_5_5_1"),
          (t[(t.FLOAT = 5126)] = "FLOAT"),
          (t[(t.HALF_FLOAT = 36193)] = "HALF_FLOAT");
      })(Uo || (Uo = {})),
      (function (t) {
        (t[(t.NEAREST = 0)] = "NEAREST"), (t[(t.LINEAR = 1)] = "LINEAR");
      })(ko || (ko = {})),
      (function (t) {
        (t[(t.CLAMP = 33071)] = "CLAMP"),
          (t[(t.REPEAT = 10497)] = "REPEAT"),
          (t[(t.MIRRORED_REPEAT = 33648)] = "MIRRORED_REPEAT");
      })(Bo || (Bo = {})),
      (function (t) {
        (t[(t.OFF = 0)] = "OFF"),
          (t[(t.POW2 = 1)] = "POW2"),
          (t[(t.ON = 2)] = "ON");
      })(jo || (jo = {})),
      (function (t) {
        (t[(t.NPM = 0)] = "NPM"),
          (t[(t.UNPACK = 1)] = "UNPACK"),
          (t[(t.PMA = 2)] = "PMA"),
          (t[(t.NO_PREMULTIPLIED_ALPHA = 0)] = "NO_PREMULTIPLIED_ALPHA"),
          (t[(t.PREMULTIPLY_ON_UPLOAD = 1)] = "PREMULTIPLY_ON_UPLOAD"),
          (t[(t.PREMULTIPLY_ALPHA = 2)] = "PREMULTIPLY_ALPHA");
      })(Ho || (Ho = {})),
      (function (t) {
        (t[(t.NO = 0)] = "NO"),
          (t[(t.YES = 1)] = "YES"),
          (t[(t.AUTO = 2)] = "AUTO"),
          (t[(t.BLEND = 0)] = "BLEND"),
          (t[(t.CLEAR = 1)] = "CLEAR"),
          (t[(t.BLIT = 2)] = "BLIT");
      })(Go || (Go = {})),
      (function (t) {
        (t[(t.AUTO = 0)] = "AUTO"), (t[(t.MANUAL = 1)] = "MANUAL");
      })(Xo || (Xo = {})),
      (function (t) {
        (t.LOW = "lowp"), (t.MEDIUM = "mediump"), (t.HIGH = "highp");
      })(zo || (zo = {})),
      (function (t) {
        (t[(t.NONE = 0)] = "NONE"),
          (t[(t.SCISSOR = 1)] = "SCISSOR"),
          (t[(t.STENCIL = 2)] = "STENCIL"),
          (t[(t.SPRITE = 3)] = "SPRITE");
      })(Vo || (Vo = {})),
      (function (t) {
        (t[(t.NONE = 0)] = "NONE"),
          (t[(t.LOW = 2)] = "LOW"),
          (t[(t.MEDIUM = 4)] = "MEDIUM"),
          (t[(t.HIGH = 8)] = "HIGH");
      })(Yo || (Yo = {}));
    var Ko = (function (t) {
        function e(e, r, n, i, o) {
          void 0 === r && (r = 8),
            void 0 === n && (n = 4),
            void 0 === i && (i = V.RESOLUTION),
            void 0 === o && (o = 5);
          var s = this,
            a = (function (t, e) {
              var r,
                n = Math.ceil(t / 2),
                i =
                  "\n    attribute vec2 aVertexPosition;\n\n    uniform mat3 projectionMatrix;\n\n    uniform float strength;\n\n    varying vec2 vBlurTexCoords[%size%];\n\n    uniform vec4 inputSize;\n    uniform vec4 outputFrame;\n\n    vec4 filterVertexPosition( void )\n    {\n        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n    }\n\n    vec2 filterTextureCoord( void )\n    {\n        return aVertexPosition * (outputFrame.zw * inputSize.zw);\n    }\n\n    void main(void)\n    {\n        gl_Position = filterVertexPosition();\n\n        vec2 textureCoord = filterTextureCoord();\n        %blur%\n    }",
                o = "";
              r = e
                ? "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);"
                : "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
              for (var s = 0; s < t; s++) {
                var a = r.replace("%index%", s.toString());
                (o += a = a.replace("%sampleIndex%", s - (n - 1) + ".0")),
                  (o += "\n");
              }
              return (i = (i = i.replace("%blur%", o)).replace(
                "%size%",
                t.toString()
              ));
            })(o, e),
            u = (function (t) {
              for (
                var e, r = Wo[t], n = r.length, i = qo, o = "", s = 0;
                s < t;
                s++
              ) {
                var a =
                  "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;".replace(
                    "%index%",
                    s.toString()
                  );
                (e = s),
                  s >= n && (e = t - s - 1),
                  (o += a = a.replace("%value%", r[e].toString())),
                  (o += "\n");
              }
              return (i = (i = i.replace("%blur%", o)).replace(
                "%size%",
                t.toString()
              ));
            })(o);
          return (
            ((s = t.call(this, a, u) || this).horizontal = e),
            (s.resolution = i),
            (s._quality = 0),
            (s.quality = n),
            (s.blur = r),
            s
          );
        }
        return (
          Io(e, t),
          (e.prototype.apply = function (t, e, r, n) {
            if (
              (r
                ? this.horizontal
                  ? (this.uniforms.strength =
                      (1 / r.width) * (r.width / e.width))
                  : (this.uniforms.strength =
                      (1 / r.height) * (r.height / e.height))
                : this.horizontal
                ? (this.uniforms.strength =
                    (1 / t.renderer.width) * (t.renderer.width / e.width))
                : (this.uniforms.strength =
                    (1 / t.renderer.height) * (t.renderer.height / e.height)),
              (this.uniforms.strength *= this.strength),
              (this.uniforms.strength /= this.passes),
              1 === this.passes)
            )
              t.applyFilter(this, e, r, n);
            else {
              var i = t.getFilterTexture(),
                o = t.renderer,
                s = e,
                a = i;
              (this.state.blend = !1), t.applyFilter(this, s, a, Go.CLEAR);
              for (var u = 1; u < this.passes - 1; u++) {
                t.bindAndClear(s, Go.BLIT), (this.uniforms.uSampler = a);
                var h = a;
                (a = s), (s = h), o.shader.bind(this), o.geometry.draw(5);
              }
              (this.state.blend = !0),
                t.applyFilter(this, a, r, n),
                t.returnFilterTexture(i);
            }
          }),
          Object.defineProperty(e.prototype, "blur", {
            get: function () {
              return this.strength;
            },
            set: function (t) {
              (this.padding = 1 + 2 * Math.abs(t)), (this.strength = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "quality", {
            get: function () {
              return this._quality;
            },
            set: function (t) {
              (this._quality = t), (this.passes = t);
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(Lr),
      Zo = (function (t) {
        function e(e, r, n, i) {
          void 0 === e && (e = 8),
            void 0 === r && (r = 4),
            void 0 === n && (n = V.RESOLUTION),
            void 0 === i && (i = 5);
          var o = t.call(this) || this;
          return (
            (o.blurXFilter = new Ko(!0, e, r, n, i)),
            (o.blurYFilter = new Ko(!1, e, r, n, i)),
            (o.resolution = n),
            (o.quality = r),
            (o.blur = e),
            (o.repeatEdgePixels = !1),
            o
          );
        }
        return (
          Io(e, t),
          (e.prototype.apply = function (t, e, r, n) {
            var i = Math.abs(this.blurXFilter.strength),
              o = Math.abs(this.blurYFilter.strength);
            if (i && o) {
              var s = t.getFilterTexture();
              this.blurXFilter.apply(t, e, s, Go.CLEAR),
                this.blurYFilter.apply(t, s, r, n),
                t.returnFilterTexture(s);
            } else
              o
                ? this.blurYFilter.apply(t, e, r, n)
                : this.blurXFilter.apply(t, e, r, n);
          }),
          (e.prototype.updatePadding = function () {
            this._repeatEdgePixels
              ? (this.padding = 0)
              : (this.padding =
                  2 *
                  Math.max(
                    Math.abs(this.blurXFilter.strength),
                    Math.abs(this.blurYFilter.strength)
                  ));
          }),
          Object.defineProperty(e.prototype, "blur", {
            get: function () {
              return this.blurXFilter.blur;
            },
            set: function (t) {
              (this.blurXFilter.blur = this.blurYFilter.blur = t),
                this.updatePadding();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "quality", {
            get: function () {
              return this.blurXFilter.quality;
            },
            set: function (t) {
              this.blurXFilter.quality = this.blurYFilter.quality = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "blurX", {
            get: function () {
              return this.blurXFilter.blur;
            },
            set: function (t) {
              (this.blurXFilter.blur = t), this.updatePadding();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "blurY", {
            get: function () {
              return this.blurYFilter.blur;
            },
            set: function (t) {
              (this.blurYFilter.blur = t), this.updatePadding();
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "blendMode", {
            get: function () {
              return this.blurYFilter.blendMode;
            },
            set: function (t) {
              this.blurYFilter.blendMode = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "repeatEdgePixels", {
            get: function () {
              return this._repeatEdgePixels;
            },
            set: function (t) {
              (this._repeatEdgePixels = t), this.updatePadding();
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(Lr),
      Jo = function (t, e) {
        return (Jo =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    var $o = (function (t) {
      function e() {
        var e = this,
          r = {
            m: new Float32Array([
              1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0,
            ]),
            uAlpha: 1,
          };
        return (
          ((e =
            t.call(
              this,
              en,
              "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n",
              r
            ) || this).alpha = 1),
          e
        );
      }
      return (
        (function (t, e) {
          function r() {
            this.constructor = t;
          }
          Jo(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((r.prototype = e.prototype), new r()));
        })(e, t),
        (e.prototype._loadMatrix = function (t, e) {
          void 0 === e && (e = !1);
          var r = t;
          e &&
            (this._multiply(r, this.uniforms.m, t), (r = this._colorMatrix(r))),
            (this.uniforms.m = r);
        }),
        (e.prototype._multiply = function (t, e, r) {
          return (
            (t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15]),
            (t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16]),
            (t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17]),
            (t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18]),
            (t[4] =
              e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4]),
            (t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15]),
            (t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16]),
            (t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17]),
            (t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18]),
            (t[9] =
              e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9]),
            (t[10] =
              e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15]),
            (t[11] =
              e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16]),
            (t[12] =
              e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17]),
            (t[13] =
              e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18]),
            (t[14] =
              e[10] * r[4] +
              e[11] * r[9] +
              e[12] * r[14] +
              e[13] * r[19] +
              e[14]),
            (t[15] =
              e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15]),
            (t[16] =
              e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16]),
            (t[17] =
              e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17]),
            (t[18] =
              e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18]),
            (t[19] =
              e[15] * r[4] +
              e[16] * r[9] +
              e[17] * r[14] +
              e[18] * r[19] +
              e[19]),
            t
          );
        }),
        (e.prototype._colorMatrix = function (t) {
          var e = new Float32Array(t);
          return (
            (e[4] /= 255), (e[9] /= 255), (e[14] /= 255), (e[19] /= 255), e
          );
        }),
        (e.prototype.brightness = function (t, e) {
          var r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(r, e);
        }),
        (e.prototype.greyscale = function (t, e) {
          var r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(r, e);
        }),
        (e.prototype.blackAndWhite = function (t) {
          this._loadMatrix(
            [
              0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0.3, 0.6, 0.1, 0, 0, 0,
              0, 0, 1, 0,
            ],
            t
          );
        }),
        (e.prototype.hue = function (t, e) {
          t = ((t || 0) / 180) * Math.PI;
          var r = Math.cos(t),
            n = Math.sin(t),
            i = 1 / 3,
            o = (0, Math.sqrt)(i),
            s = [
              r + (1 - r) * i,
              i * (1 - r) - o * n,
              i * (1 - r) + o * n,
              0,
              0,
              i * (1 - r) + o * n,
              r + i * (1 - r),
              i * (1 - r) - o * n,
              0,
              0,
              i * (1 - r) - o * n,
              i * (1 - r) + o * n,
              r + i * (1 - r),
              0,
              0,
              0,
              0,
              0,
              1,
              0,
            ];
          this._loadMatrix(s, e);
        }),
        (e.prototype.contrast = function (t, e) {
          var r = (t || 0) + 1,
            n = -0.5 * (r - 1),
            i = [r, 0, 0, 0, n, 0, r, 0, 0, n, 0, 0, r, 0, n, 0, 0, 0, 1, 0];
          this._loadMatrix(i, e);
        }),
        (e.prototype.saturate = function (t, e) {
          void 0 === t && (t = 0);
          var r = (2 * t) / 3 + 1,
            n = -0.5 * (r - 1),
            i = [r, n, n, 0, 0, n, r, n, 0, 0, n, n, r, 0, 0, 0, 0, 0, 1, 0];
          this._loadMatrix(i, e);
        }),
        (e.prototype.desaturate = function () {
          this.saturate(-1);
        }),
        (e.prototype.negative = function (t) {
          this._loadMatrix(
            [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0],
            t
          );
        }),
        (e.prototype.sepia = function (t) {
          this._loadMatrix(
            [
              0.393, 0.7689999, 0.18899999, 0, 0, 0.349, 0.6859999, 0.16799999,
              0, 0, 0.272, 0.5339999, 0.13099999, 0, 0, 0, 0, 0, 1, 0,
            ],
            t
          );
        }),
        (e.prototype.technicolor = function (t) {
          this._loadMatrix(
            [
              1.9125277891456083, -0.8545344976951645, -0.09155508482755585, 0,
              11.793603434377337, -0.3087833385928097, 1.7658908555458428,
              -0.10601743074722245, 0, -70.35205161461398, -0.231103377548616,
              -0.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0,
              0, 0, 1, 0,
            ],
            t
          );
        }),
        (e.prototype.polaroid = function (t) {
          this._loadMatrix(
            [
              1.438, -0.062, -0.062, 0, 0, -0.122, 1.378, -0.122, 0, 0, -0.016,
              -0.016, 1.483, 0, 0, 0, 0, 0, 1, 0,
            ],
            t
          );
        }),
        (e.prototype.toBGR = function (t) {
          this._loadMatrix(
            [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
            t
          );
        }),
        (e.prototype.kodachrome = function (t) {
          this._loadMatrix(
            [
              1.1285582396593525, -0.3967382283601348, -0.03992559172921793, 0,
              63.72958762196502, -0.16404339962244616, 1.0835251566291304,
              -0.05498805115633132, 0, 24.732407896706203, -0.16786010706155763,
              -0.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0,
              0, 0, 1, 0,
            ],
            t
          );
        }),
        (e.prototype.browni = function (t) {
          this._loadMatrix(
            [
              0.5997023498159715, 0.34553243048391263, -0.2708298674538042, 0,
              47.43192855600873, -0.037703249837783157, 0.8609577587992641,
              0.15059552388459913, 0, -36.96841498319127, 0.24113635128153335,
              -0.07441037908422492, 0.44972182064877153, 0, -7.562075277591283,
              0, 0, 0, 1, 0,
            ],
            t
          );
        }),
        (e.prototype.vintage = function (t) {
          this._loadMatrix(
            [
              0.6279345635605994, 0.3202183420819367, -0.03965408211312453, 0,
              9.651285835294123, 0.02578397704808868, 0.6441188644374771,
              0.03259127616149294, 0, 7.462829176470591, 0.0466055556782719,
              -0.0851232987247891, 0.5241648018700465, 0, 5.159190588235296, 0,
              0, 0, 1, 0,
            ],
            t
          );
        }),
        (e.prototype.colorTone = function (t, e, r, n, i) {
          var o = (((r = r || 16770432) >> 16) & 255) / 255,
            s = ((r >> 8) & 255) / 255,
            a = (255 & r) / 255,
            u = (((n = n || 3375104) >> 16) & 255) / 255,
            h = ((n >> 8) & 255) / 255,
            c = (255 & n) / 255,
            l = [
              0.3,
              0.59,
              0.11,
              0,
              0,
              o,
              s,
              a,
              (t = t || 0.2),
              0,
              u,
              h,
              c,
              (e = e || 0.15),
              0,
              o - u,
              s - h,
              a - c,
              0,
              0,
            ];
          this._loadMatrix(l, i);
        }),
        (e.prototype.night = function (t, e) {
          var r = [
            -2 * (t = t || 0.1),
            -t,
            0,
            0,
            0,
            -t,
            0,
            t,
            0,
            0,
            0,
            t,
            2 * t,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
          ];
          this._loadMatrix(r, e);
        }),
        (e.prototype.predator = function (t, e) {
          var r = [
            11.224130630493164 * t,
            -4.794486999511719 * t,
            -2.8746118545532227 * t,
            0 * t,
            0.40342438220977783 * t,
            -3.6330697536468506 * t,
            9.193157196044922 * t,
            -2.951810836791992 * t,
            0 * t,
            -1.316135048866272 * t,
            -3.2184197902679443 * t,
            -4.2375030517578125 * t,
            7.476448059082031 * t,
            0 * t,
            0.8044459223747253 * t,
            0,
            0,
            0,
            1,
            0,
          ];
          this._loadMatrix(r, e);
        }),
        (e.prototype.lsd = function (t) {
          this._loadMatrix(
            [
              2, -0.4, 0.5, 0, 0, -0.5, 2, -0.4, 0, 0, -0.4, -0.5, 3, 0, 0, 0,
              0, 0, 1, 0,
            ],
            t
          );
        }),
        (e.prototype.reset = function () {
          this._loadMatrix(
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
            !1
          );
        }),
        Object.defineProperty(e.prototype, "matrix", {
          get: function () {
            return this.uniforms.m;
          },
          set: function (t) {
            this.uniforms.m = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "alpha", {
          get: function () {
            return this.uniforms.uAlpha;
          },
          set: function (t) {
            this.uniforms.uAlpha = t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e
      );
    })(Lr);
    $o.prototype.grayscale = $o.prototype.greyscale;
    /*!
     * @pixi/filter-displacement - v5.3.0
     * Compiled Thu, 18 Jun 2020 23:27:40 UTC
     *
     * @pixi/filter-displacement is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var Qo = function (t, e) {
      return (Qo =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        })(t, e);
    };
    var ts = (function (t) {
        function e(e, r) {
          var n = this,
            i = new Dt();
          return (
            (e.renderable = !1),
            ((n =
              t.call(
                this,
                "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n\tgl_Position = filterVertexPosition();\n\tvTextureCoord = filterTextureCoord();\n\tvFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;\n}\n",
                "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\nuniform mat2 rotation;\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform highp vec4 inputSize;\nuniform vec4 inputClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy = scale * inputSize.zw * (rotation * map.xy);\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));\n}\n",
                {
                  mapSampler: e._texture,
                  filterMatrix: i,
                  scale: { x: 1, y: 1 },
                  rotation: new Float32Array([1, 0, 0, 1]),
                }
              ) || this).maskSprite = e),
            (n.maskMatrix = i),
            null == r && (r = 20),
            (n.scale = new Mt(r, r)),
            n
          );
        }
        return (
          (function (t, e) {
            function r() {
              this.constructor = t;
            }
            Qo(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          })(e, t),
          (e.prototype.apply = function (t, e, r, n) {
            (this.uniforms.filterMatrix = t.calculateSpriteMatrix(
              this.maskMatrix,
              this.maskSprite
            )),
              (this.uniforms.scale.x = this.scale.x),
              (this.uniforms.scale.y = this.scale.y);
            var i = this.maskSprite.worldTransform,
              o = Math.sqrt(i.a * i.a + i.b * i.b),
              s = Math.sqrt(i.c * i.c + i.d * i.d);
            0 !== o &&
              0 !== s &&
              ((this.uniforms.rotation[0] = i.a / o),
              (this.uniforms.rotation[1] = i.b / o),
              (this.uniforms.rotation[2] = i.c / s),
              (this.uniforms.rotation[3] = i.d / s)),
              t.applyFilter(this, e, r, n);
          }),
          Object.defineProperty(e.prototype, "map", {
            get: function () {
              return this.uniforms.mapSampler;
            },
            set: function (t) {
              this.uniforms.mapSampler = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(Lr),
      es = function (t, e) {
        return (es =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    var rs = (function (t) {
        function e() {
          return (
            t.call(
              this,
              "\nattribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\n\nuniform vec4 inputPixel;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvoid texcoords(vec2 fragCoord, vec2 inverseVP,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = filterVertexPosition();\n\n   vFragCoord = aVertexPosition * outputFrame.zw;\n\n   texcoords(vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n",
              'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vFragCoord;\nuniform sampler2D uSampler;\nuniform highp vec4 inputPixel;\n\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n\n --\n\n From:\n https://github.com/mitsuhiko/webgl-meincraft\n\n Copyright (c) 2011 by Armin Ronacher.\n\n Some rights reserved.\n\n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n\n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n\n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n\n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec4 color;\n\n      color = fxaa(uSampler, vFragCoord, inputPixel.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n'
            ) || this
          );
        }
        return (
          (function (t, e) {
            function r() {
              this.constructor = t;
            }
            es(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          })(e, t),
          e
        );
      })(Lr),
      ns = function (t, e) {
        return (ns =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
    var is = (function (t) {
        function e(e, r) {
          void 0 === e && (e = 0.5), void 0 === r && (r = Math.random());
          var n =
            t.call(
              this,
              en,
              "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n",
              { uNoise: 0, uSeed: 0 }
            ) || this;
          return (n.noise = e), (n.seed = r), n;
        }
        return (
          (function (t, e) {
            function r() {
              this.constructor = t;
            }
            ns(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((r.prototype = e.prototype), new r()));
          })(e, t),
          Object.defineProperty(e.prototype, "noise", {
            get: function () {
              return this.uniforms.uNoise;
            },
            set: function (t) {
              this.uniforms.uNoise = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "seed", {
            get: function () {
              return this.uniforms.uSeed;
            },
            set: function (t) {
              this.uniforms.uSeed = t;
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })(Lr),
      os = new Dt();
    (Yt.prototype._cacheAsBitmap = !1), (Yt.prototype._cacheData = null);
    var ss = function () {
      (this.textureCacheId = null),
        (this.originalRender = null),
        (this.originalRenderCanvas = null),
        (this.originalCalculateBounds = null),
        (this.originalGetLocalBounds = null),
        (this.originalUpdateTransform = null),
        (this.originalDestroy = null),
        (this.originalMask = null),
        (this.originalFilterArea = null),
        (this.originalContainsPoint = null),
        (this.sprite = null);
    };
    Object.defineProperties(Yt.prototype, {
      cacheAsBitmap: {
        get: function () {
          return this._cacheAsBitmap;
        },
        set: function (t) {
          var e;
          this._cacheAsBitmap !== t &&
            ((this._cacheAsBitmap = t),
            t
              ? (this._cacheData || (this._cacheData = new ss()),
                ((e = this._cacheData).originalRender = this.render),
                (e.originalRenderCanvas = this.renderCanvas),
                (e.originalUpdateTransform = this.updateTransform),
                (e.originalCalculateBounds = this.calculateBounds),
                (e.originalGetLocalBounds = this.getLocalBounds),
                (e.originalDestroy = this.destroy),
                (e.originalContainsPoint = this.containsPoint),
                (e.originalMask = this._mask),
                (e.originalFilterArea = this.filterArea),
                (this.render = this._renderCached),
                (this.renderCanvas = this._renderCachedCanvas),
                (this.destroy = this._cacheAsBitmapDestroy))
              : ((e = this._cacheData).sprite &&
                  this._destroyCachedDisplayObject(),
                (this.render = e.originalRender),
                (this.renderCanvas = e.originalRenderCanvas),
                (this.calculateBounds = e.originalCalculateBounds),
                (this.getLocalBounds = e.originalGetLocalBounds),
                (this.destroy = e.originalDestroy),
                (this.updateTransform = e.originalUpdateTransform),
                (this.containsPoint = e.originalContainsPoint),
                (this._mask = e.originalMask),
                (this.filterArea = e.originalFilterArea)));
        },
      },
    }),
      (Yt.prototype._renderCached = function (t) {
        !this.visible ||
          this.worldAlpha <= 0 ||
          !this.renderable ||
          (this._initCachedDisplayObject(t),
          (this._cacheData.sprite.transform._worldID = this.transform._worldID),
          (this._cacheData.sprite.worldAlpha = this.worldAlpha),
          this._cacheData.sprite._render(t));
      }),
      (Yt.prototype._initCachedDisplayObject = function (t) {
        if (!this._cacheData || !this._cacheData.sprite) {
          var e = this.alpha;
          (this.alpha = 1), t.batch.flush();
          var r = this.getLocalBounds(null, !0).clone();
          if (this.filters) {
            var n = this.filters[0].padding;
            r.pad(n);
          }
          r.ceil(V.RESOLUTION);
          var i = t.renderTexture.current,
            o = t.renderTexture.sourceFrame.clone(),
            s = t.projection.transform,
            a = Ne.create({ width: r.width, height: r.height }),
            u = "cacheAsBitmap_" + pt();
          (this._cacheData.textureCacheId = u),
            ye.addToCache(a.baseTexture, u),
            De.addToCache(a, u);
          var h = os;
          (h.tx = -r.x),
            (h.ty = -r.y),
            this.transform.worldTransform.identity(),
            (this.render = this._cacheData.originalRender),
            t.render(this, a, !0, h, !0),
            (t.projection.transform = s),
            t.renderTexture.bind(i, o),
            (this.render = this._renderCached),
            (this.updateTransform = this.displayObjectUpdateTransform),
            (this.calculateBounds = this._calculateCachedBounds),
            (this.getLocalBounds = this._getCachedLocalBounds),
            (this._mask = null),
            (this.filterArea = null);
          var c = new Pi(a);
          (c.transform.worldTransform = this.transform.worldTransform),
            (c.anchor.x = -r.x / r.width),
            (c.anchor.y = -r.y / r.height),
            (c.alpha = e),
            (c._bounds = this._bounds),
            (this._cacheData.sprite = c),
            (this.transform._parentID = -1),
            this.parent
              ? this.updateTransform()
              : (this.enableTempParent(),
                this.updateTransform(),
                this.disableTempParent(null)),
            (this.containsPoint = c.containsPoint.bind(c));
        }
      }),
      (Yt.prototype._renderCachedCanvas = function (t) {
        !this.visible ||
          this.worldAlpha <= 0 ||
          !this.renderable ||
          (this._initCachedDisplayObjectCanvas(t),
          (this._cacheData.sprite.worldAlpha = this.worldAlpha),
          this._cacheData.sprite._renderCanvas(t));
      }),
      (Yt.prototype._initCachedDisplayObjectCanvas = function (t) {
        if (!this._cacheData || !this._cacheData.sprite) {
          var e = this.getLocalBounds(null, !0),
            r = this.alpha;
          this.alpha = 1;
          var n = t.context,
            i = t._projTransform;
          e.ceil(V.RESOLUTION);
          var o = Ne.create({ width: e.width, height: e.height }),
            s = "cacheAsBitmap_" + pt();
          (this._cacheData.textureCacheId = s),
            ye.addToCache(o.baseTexture, s),
            De.addToCache(o, s);
          var a = os;
          this.transform.localTransform.copyTo(a),
            a.invert(),
            (a.tx -= e.x),
            (a.ty -= e.y),
            (this.renderCanvas = this._cacheData.originalRenderCanvas),
            t.render(this, o, !0, a, !1),
            (t.context = n),
            (t._projTransform = i),
            (this.renderCanvas = this._renderCachedCanvas),
            (this.updateTransform = this.displayObjectUpdateTransform),
            (this.calculateBounds = this._calculateCachedBounds),
            (this.getLocalBounds = this._getCachedLocalBounds),
            (this._mask = null),
            (this.filterArea = null);
          var u = new Pi(o);
          (u.transform.worldTransform = this.transform.worldTransform),
            (u.anchor.x = -e.x / e.width),
            (u.anchor.y = -e.y / e.height),
            (u.alpha = r),
            (u._bounds = this._bounds),
            (this._cacheData.sprite = u),
            (this.transform._parentID = -1),
            this.parent
              ? this.updateTransform()
              : ((this.parent = t._tempDisplayObjectParent),
                this.updateTransform(),
                (this.parent = null)),
            (this.containsPoint = u.containsPoint.bind(u));
        }
      }),
      (Yt.prototype._calculateCachedBounds = function () {
        this._bounds.clear(),
          (this._cacheData.sprite.transform._worldID = this.transform._worldID),
          this._cacheData.sprite._calculateBounds(),
          (this._bounds.updateID = this._boundsID);
      }),
      (Yt.prototype._getCachedLocalBounds = function () {
        return this._cacheData.sprite.getLocalBounds(null);
      }),
      (Yt.prototype._destroyCachedDisplayObject = function () {
        this._cacheData.sprite._texture.destroy(!0),
          (this._cacheData.sprite = null),
          ye.removeFromCache(this._cacheData.textureCacheId),
          De.removeFromCache(this._cacheData.textureCacheId),
          (this._cacheData.textureCacheId = null);
      }),
      (Yt.prototype._cacheAsBitmapDestroy = function (t) {
        (this.cacheAsBitmap = !1), this.destroy(t);
      }),
      /*!
       * @pixi/mixin-get-child-by-name - v5.3.0
       * Compiled Thu, 18 Jun 2020 23:27:40 UTC
       *
       * @pixi/mixin-get-child-by-name is licensed under the MIT License.
       * http://www.opensource.org/licenses/mit-license
       */
      (Yt.prototype.name = null),
      (Kt.prototype.getChildByName = function (t, e) {
        for (var r = 0, n = this.children.length; r < n; r++)
          if (this.children[r].name === t) return this.children[r];
        if (e)
          for (r = 0, n = this.children.length; r < n; r++) {
            if (this.children[r].getChildByName) {
              var i = this.children[r].getChildByName(t, !0);
              if (i) return i;
            }
          }
        return null;
      }),
      /*!
       * @pixi/mixin-get-global-position - v5.3.0
       * Compiled Thu, 18 Jun 2020 23:27:40 UTC
       *
       * @pixi/mixin-get-global-position is licensed under the MIT License.
       * http://www.opensource.org/licenses/mit-license
       */
      (Yt.prototype.getGlobalPosition = function (t, e) {
        return (
          void 0 === t && (t = new Mt()),
          void 0 === e && (e = !1),
          this.parent
            ? this.parent.toGlobal(this.position, t, e)
            : ((t.x = this.position.x), (t.y = this.position.y)),
          t
        );
      });
    /*!
     * @pixi/mesh-extras - v5.3.0
     * Compiled Thu, 18 Jun 2020 23:27:40 UTC
     *
     * @pixi/mesh-extras is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var as = function (t, e) {
      return (as =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        })(t, e);
    };
    function us(t, e) {
      function r() {
        this.constructor = t;
      }
      as(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((r.prototype = e.prototype), new r()));
    }
    var hs = (function (t) {
        function e(e, r, n, i) {
          void 0 === e && (e = 100),
            void 0 === r && (r = 100),
            void 0 === n && (n = 10),
            void 0 === i && (i = 10);
          var o = t.call(this) || this;
          return (
            (o.segWidth = n),
            (o.segHeight = i),
            (o.width = e),
            (o.height = r),
            o.build(),
            o
          );
        }
        return (
          us(e, t),
          (e.prototype.build = function () {
            for (
              var t = this.segWidth * this.segHeight,
                e = [],
                r = [],
                n = [],
                i = this.segWidth - 1,
                o = this.segHeight - 1,
                s = this.width / i,
                a = this.height / o,
                u = 0;
              u < t;
              u++
            ) {
              var h = u % this.segWidth,
                c = (u / this.segWidth) | 0;
              e.push(h * s, c * a), r.push(h / i, c / o);
            }
            var l = i * o;
            for (u = 0; u < l; u++) {
              var f = u % i,
                p = (u / i) | 0,
                d = p * this.segWidth + f,
                v = p * this.segWidth + f + 1,
                g = (p + 1) * this.segWidth + f,
                y = (p + 1) * this.segWidth + f + 1;
              n.push(d, v, g, v, y, g);
            }
            (this.buffers[0].data = new Float32Array(e)),
              (this.buffers[1].data = new Float32Array(r)),
              (this.indexBuffer.data = new Uint16Array(n)),
              this.buffers[0].update(),
              this.buffers[1].update(),
              this.indexBuffer.update();
          }),
          e
        );
      })(vo),
      cs = (function (t) {
        function e(e, r, n) {
          void 0 === e && (e = 200), void 0 === n && (n = 0);
          var i =
            t.call(
              this,
              new Float32Array(4 * r.length),
              new Float32Array(4 * r.length),
              new Uint16Array(6 * (r.length - 1))
            ) || this;
          return (
            (i.points = r), (i._width = e), (i.textureScale = n), i.build(), i
          );
        }
        return (
          us(e, t),
          Object.defineProperty(e.prototype, "width", {
            get: function () {
              return this._width;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.build = function () {
            var t = this.points;
            if (t) {
              var e = this.getBuffer("aVertexPosition"),
                r = this.getBuffer("aTextureCoord"),
                n = this.getIndex();
              if (!(t.length < 1)) {
                e.data.length / 4 !== t.length &&
                  ((e.data = new Float32Array(4 * t.length)),
                  (r.data = new Float32Array(4 * t.length)),
                  (n.data = new Uint16Array(6 * (t.length - 1))));
                var i = r.data,
                  o = n.data;
                (i[0] = 0), (i[1] = 0), (i[2] = 0), (i[3] = 1);
                for (
                  var s = 0,
                    a = t[0],
                    u = this._width * this.textureScale,
                    h = t.length,
                    c = 0;
                  c < h;
                  c++
                ) {
                  var l = 4 * c;
                  if (this.textureScale > 0) {
                    var f = a.x - t[c].x,
                      p = a.y - t[c].y,
                      d = Math.sqrt(f * f + p * p);
                    (a = t[c]), (s += d / u);
                  } else s = c / (h - 1);
                  (i[l] = s), (i[l + 1] = 0), (i[l + 2] = s), (i[l + 3] = 1);
                }
                var v = 0;
                for (c = 0; c < h - 1; c++) {
                  l = 2 * c;
                  (o[v++] = l),
                    (o[v++] = l + 1),
                    (o[v++] = l + 2),
                    (o[v++] = l + 2),
                    (o[v++] = l + 1),
                    (o[v++] = l + 3);
                }
                r.update(), n.update(), this.updateVertices();
              }
            }
          }),
          (e.prototype.updateVertices = function () {
            var t = this.points;
            if (!(t.length < 1)) {
              for (
                var e,
                  r = t[0],
                  n = 0,
                  i = 0,
                  o = this.buffers[0].data,
                  s = t.length,
                  a = 0;
                a < s;
                a++
              ) {
                var u = t[a],
                  h = 4 * a;
                (i = -((e = a < t.length - 1 ? t[a + 1] : u).x - r.x)),
                  (n = e.y - r.y);
                var c = Math.sqrt(n * n + i * i),
                  l =
                    this.textureScale > 0
                      ? (this.textureScale * this._width) / 2
                      : this._width / 2;
                (n /= c),
                  (i /= c),
                  (n *= l),
                  (i *= l),
                  (o[h] = u.x + n),
                  (o[h + 1] = u.y + i),
                  (o[h + 2] = u.x - n),
                  (o[h + 3] = u.y - i),
                  (r = u);
              }
              this.buffers[0].update();
            }
          }),
          (e.prototype.update = function () {
            this.textureScale > 0 ? this.build() : this.updateVertices();
          }),
          e
        );
      })(vo),
      ls =
        ((function (t) {
          function e(e, r, n) {
            void 0 === n && (n = 0);
            var i = this,
              o = new cs(e.height, r, n),
              s = new po(e);
            return (
              n > 0 && (e.baseTexture.wrapMode = U.REPEAT),
              ((i = t.call(this, o, s) || this).autoUpdate = !0),
              i
            );
          }
          us(e, t),
            (e.prototype._render = function (e) {
              var r = this.geometry;
              (this.autoUpdate || r._width !== this.shader.texture.height) &&
                ((r._width = this.shader.texture.height), r.update()),
                t.prototype._render.call(this, e);
            });
        })(fo),
        (function (t) {
          function e(e, r, n) {
            var i = this,
              o = new hs(e.width, e.height, r, n),
              s = new po(De.WHITE);
            return ((i = t.call(this, o, s) || this).texture = e), i;
          }
          return (
            us(e, t),
            (e.prototype.textureUpdated = function () {
              this._textureID = this.shader.texture._updateID;
              var t = this.geometry;
              (t.width = this.shader.texture.width),
                (t.height = this.shader.texture.height),
                t.build();
            }),
            Object.defineProperty(e.prototype, "texture", {
              get: function () {
                return this.shader.texture;
              },
              set: function (t) {
                this.shader.texture !== t &&
                  ((this.shader.texture = t),
                  (this._textureID = -1),
                  t.baseTexture.valid
                    ? this.textureUpdated()
                    : t.once("update", this.textureUpdated, this));
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype._render = function (e) {
              this._textureID !== this.shader.texture._updateID &&
                this.textureUpdated(),
                t.prototype._render.call(this, e);
            }),
            e
          );
        })(fo)),
      fs =
        ((function (t) {
          function e(e, r, n, i, o) {
            void 0 === e && (e = De.EMPTY);
            var s = this,
              a = new vo(r, n, i);
            a.getBuffer("aVertexPosition").static = !1;
            var u = new po(e);
            return (
              ((s = t.call(this, a, u, null, o) || this).autoUpdate = !0), s
            );
          }
          us(e, t),
            Object.defineProperty(e.prototype, "vertices", {
              get: function () {
                return this.geometry.getBuffer("aVertexPosition").data;
              },
              set: function (t) {
                this.geometry.getBuffer("aVertexPosition").data = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype._render = function (e) {
              this.autoUpdate &&
                this.geometry.getBuffer("aVertexPosition").update(),
                t.prototype._render.call(this, e);
            });
        })(fo),
        (function (t) {
          function e(e, r, n, i, o) {
            void 0 === r && (r = 10),
              void 0 === n && (n = 10),
              void 0 === i && (i = 10),
              void 0 === o && (o = 10);
            var s = t.call(this, De.WHITE, 4, 4) || this;
            return (
              (s._origWidth = e.orig.width),
              (s._origHeight = e.orig.height),
              (s._width = s._origWidth),
              (s._height = s._origHeight),
              (s._leftWidth = r),
              (s._rightWidth = i),
              (s._topHeight = n),
              (s._bottomHeight = o),
              (s.texture = e),
              s
            );
          }
          us(e, t),
            (e.prototype.textureUpdated = function () {
              (this._textureID = this.shader.texture._updateID),
                this._refresh();
            }),
            Object.defineProperty(e.prototype, "vertices", {
              get: function () {
                return this.geometry.getBuffer("aVertexPosition").data;
              },
              set: function (t) {
                this.geometry.getBuffer("aVertexPosition").data = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.updateHorizontalVertices = function () {
              var t = this.vertices,
                e = this._getMinScale();
              (t[9] = t[11] = t[13] = t[15] = this._topHeight * e),
                (t[17] =
                  t[19] =
                  t[21] =
                  t[23] =
                    this._height - this._bottomHeight * e),
                (t[25] = t[27] = t[29] = t[31] = this._height);
            }),
            (e.prototype.updateVerticalVertices = function () {
              var t = this.vertices,
                e = this._getMinScale();
              (t[2] = t[10] = t[18] = t[26] = this._leftWidth * e),
                (t[4] =
                  t[12] =
                  t[20] =
                  t[28] =
                    this._width - this._rightWidth * e),
                (t[6] = t[14] = t[22] = t[30] = this._width);
            }),
            (e.prototype._getMinScale = function () {
              var t = this._leftWidth + this._rightWidth,
                e = this._width > t ? 1 : this._width / t,
                r = this._topHeight + this._bottomHeight,
                n = this._height > r ? 1 : this._height / r;
              return Math.min(e, n);
            }),
            Object.defineProperty(e.prototype, "width", {
              get: function () {
                return this._width;
              },
              set: function (t) {
                (this._width = t), this._refresh();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "height", {
              get: function () {
                return this._height;
              },
              set: function (t) {
                (this._height = t), this._refresh();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "leftWidth", {
              get: function () {
                return this._leftWidth;
              },
              set: function (t) {
                (this._leftWidth = t), this._refresh();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "rightWidth", {
              get: function () {
                return this._rightWidth;
              },
              set: function (t) {
                (this._rightWidth = t), this._refresh();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "topHeight", {
              get: function () {
                return this._topHeight;
              },
              set: function (t) {
                (this._topHeight = t), this._refresh();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "bottomHeight", {
              get: function () {
                return this._bottomHeight;
              },
              set: function (t) {
                (this._bottomHeight = t), this._refresh();
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype._refresh = function () {
              var t = this.texture,
                e = this.geometry.buffers[1].data;
              (this._origWidth = t.orig.width),
                (this._origHeight = t.orig.height);
              var r = 1 / this._origWidth,
                n = 1 / this._origHeight;
              (e[0] = e[8] = e[16] = e[24] = 0),
                (e[1] = e[3] = e[5] = e[7] = 0),
                (e[6] = e[14] = e[22] = e[30] = 1),
                (e[25] = e[27] = e[29] = e[31] = 1),
                (e[2] = e[10] = e[18] = e[26] = r * this._leftWidth),
                (e[4] = e[12] = e[20] = e[28] = 1 - r * this._rightWidth),
                (e[9] = e[11] = e[13] = e[15] = n * this._topHeight),
                (e[17] = e[19] = e[21] = e[23] = 1 - n * this._bottomHeight),
                this.updateHorizontalVertices(),
                this.updateVerticalVertices(),
                this.geometry.buffers[0].update(),
                this.geometry.buffers[1].update();
            });
        })(ls),
        function (t, e) {
          return (fs =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            })(t, e);
        });
    !(function (t) {
      function e(e, r) {
        void 0 === r && (r = !0);
        var n = t.call(this, e[0] instanceof De ? e[0] : e[0].texture) || this;
        return (
          (n._textures = null),
          (n._durations = null),
          (n._autoUpdate = r),
          (n._isConnectedToTicker = !1),
          (n.animationSpeed = 1),
          (n.loop = !0),
          (n.updateAnchor = !1),
          (n.onComplete = null),
          (n.onFrameChange = null),
          (n.onLoop = null),
          (n._currentTime = 0),
          (n._playing = !1),
          (n._previousFrame = null),
          (n.textures = e),
          n
        );
      }
      (function (t, e) {
        function r() {
          this.constructor = t;
        }
        fs(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((r.prototype = e.prototype), new r()));
      })(e, t),
        (e.prototype.stop = function () {
          this._playing &&
            ((this._playing = !1),
            this._autoUpdate &&
              this._isConnectedToTicker &&
              (Qt.shared.remove(this.update, this),
              (this._isConnectedToTicker = !1)));
        }),
        (e.prototype.play = function () {
          this._playing ||
            ((this._playing = !0),
            this._autoUpdate &&
              !this._isConnectedToTicker &&
              (Qt.shared.add(this.update, this, Zt.HIGH),
              (this._isConnectedToTicker = !0)));
        }),
        (e.prototype.gotoAndStop = function (t) {
          this.stop();
          var e = this.currentFrame;
          (this._currentTime = t),
            e !== this.currentFrame && this.updateTexture();
        }),
        (e.prototype.gotoAndPlay = function (t) {
          var e = this.currentFrame;
          (this._currentTime = t),
            e !== this.currentFrame && this.updateTexture(),
            this.play();
        }),
        (e.prototype.update = function (t) {
          var e = this.animationSpeed * t,
            r = this.currentFrame;
          if (null !== this._durations) {
            var n =
              (this._currentTime % 1) * this._durations[this.currentFrame];
            for (n += (e / 60) * 1e3; n < 0; )
              this._currentTime--, (n += this._durations[this.currentFrame]);
            var i = Math.sign(this.animationSpeed * t);
            for (
              this._currentTime = Math.floor(this._currentTime);
              n >= this._durations[this.currentFrame];

            )
              (n -= this._durations[this.currentFrame] * i),
                (this._currentTime += i);
            this._currentTime += n / this._durations[this.currentFrame];
          } else this._currentTime += e;
          this._currentTime < 0 && !this.loop
            ? (this.gotoAndStop(0), this.onComplete && this.onComplete())
            : this._currentTime >= this._textures.length && !this.loop
            ? (this.gotoAndStop(this._textures.length - 1),
              this.onComplete && this.onComplete())
            : r !== this.currentFrame &&
              (this.loop &&
                this.onLoop &&
                ((this.animationSpeed > 0 && this.currentFrame < r) ||
                  (this.animationSpeed < 0 && this.currentFrame > r)) &&
                this.onLoop(),
              this.updateTexture());
        }),
        (e.prototype.updateTexture = function () {
          var t = this.currentFrame;
          this._previousFrame !== t &&
            ((this._previousFrame = t),
            (this._texture = this._textures[t]),
            (this._textureID = -1),
            (this._textureTrimmedID = -1),
            (this._cachedTint = 16777215),
            (this.uvs = this._texture._uvs.uvsFloat32),
            this.updateAnchor &&
              this._anchor.copyFrom(this._texture.defaultAnchor),
            this.onFrameChange && this.onFrameChange(this.currentFrame));
        }),
        (e.prototype.destroy = function (e) {
          this.stop(),
            t.prototype.destroy.call(this, e),
            (this.onComplete = null),
            (this.onFrameChange = null),
            (this.onLoop = null);
        }),
        (e.fromFrames = function (t) {
          for (var r = [], n = 0; n < t.length; ++n) r.push(De.from(t[n]));
          return new e(r);
        }),
        (e.fromImages = function (t) {
          for (var r = [], n = 0; n < t.length; ++n) r.push(De.from(t[n]));
          return new e(r);
        }),
        Object.defineProperty(e.prototype, "totalFrames", {
          get: function () {
            return this._textures.length;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "textures", {
          get: function () {
            return this._textures;
          },
          set: function (t) {
            if (t[0] instanceof De)
              (this._textures = t), (this._durations = null);
            else {
              (this._textures = []), (this._durations = []);
              for (var e = 0; e < t.length; e++)
                this._textures.push(t[e].texture),
                  this._durations.push(t[e].time);
            }
            (this._previousFrame = null),
              this.gotoAndStop(0),
              this.updateTexture();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "currentFrame", {
          get: function () {
            var t = Math.floor(this._currentTime) % this._textures.length;
            return t < 0 && (t += this._textures.length), t;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "playing", {
          get: function () {
            return this._playing;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "autoUpdate", {
          get: function () {
            return this._autoUpdate;
          },
          set: function (t) {
            t !== this._autoUpdate &&
              ((this._autoUpdate = t),
              !this._autoUpdate && this._isConnectedToTicker
                ? (Qt.shared.remove(this.update, this),
                  (this._isConnectedToTicker = !1))
                : this._autoUpdate &&
                  !this._isConnectedToTicker &&
                  this._playing &&
                  (Qt.shared.add(this.update, this),
                  (this._isConnectedToTicker = !0)));
          },
          enumerable: !1,
          configurable: !0,
        });
    })(Pi);
    /*!
     * pixi.js - v5.3.0
     * Compiled Thu, 18 Jun 2020 23:27:40 UTC
     *
     * pixi.js is licensed under the MIT License.
     * http://www.opensource.org/licenses/mit-license
     */
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ tn.registerPlugin(
      "accessibility",
      Jt
    ),
      tn.registerPlugin("extract", vn),
      tn.registerPlugin("interaction", ue),
      tn.registerPlugin("particle", Wn),
      tn.registerPlugin("prepare", $i),
      tn.registerPlugin("batch", ln),
      tn.registerPlugin("tilingSprite", so),
      jn.registerPlugin(So),
      jn.registerPlugin(to),
      fn.registerPlugin(te),
      fn.registerPlugin(Hn);
    var ps = {
        AlphaFilter: Ao,
        BlurFilter: Zo,
        BlurFilterPass: Ko,
        ColorMatrixFilter: $o,
        DisplacementFilter: ts,
        FXAAFilter: rs,
        NoiseFilter: is,
      },
      ds = {
        update: null,
        begin: null,
        loopBegin: null,
        changeBegin: null,
        change: null,
        changeComplete: null,
        loopComplete: null,
        complete: null,
        loop: 1,
        direction: "normal",
        autoplay: !0,
        timelineOffset: 0,
      },
      vs = {
        duration: 1e3,
        delay: 0,
        endDelay: 0,
        easing: "easeOutElastic(1, .5)",
        round: 0,
      },
      gs = [
        "translateX",
        "translateY",
        "translateZ",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "scale",
        "scaleX",
        "scaleY",
        "scaleZ",
        "skew",
        "skewX",
        "skewY",
        "perspective",
        "matrix",
        "matrix3d",
      ],
      ys = { CSS: {}, springs: {} };
    function ms(t, e, r) {
      return Math.min(Math.max(t, e), r);
    }
    function _s(t, e) {
      return t.indexOf(e) > -1;
    }
    function xs(t, e) {
      return t.apply(null, e);
    }
    var bs = {
      arr: function (t) {
        return Array.isArray(t);
      },
      obj: function (t) {
        return _s(Object.prototype.toString.call(t), "Object");
      },
      pth: function (t) {
        return bs.obj(t) && t.hasOwnProperty("totalLength");
      },
      svg: function (t) {
        return t instanceof SVGElement;
      },
      inp: function (t) {
        return t instanceof HTMLInputElement;
      },
      dom: function (t) {
        return t.nodeType || bs.svg(t);
      },
      str: function (t) {
        return "string" == typeof t;
      },
      fnc: function (t) {
        return "function" == typeof t;
      },
      und: function (t) {
        return void 0 === t;
      },
      hex: function (t) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
      },
      rgb: function (t) {
        return /^rgb/.test(t);
      },
      hsl: function (t) {
        return /^hsl/.test(t);
      },
      col: function (t) {
        return bs.hex(t) || bs.rgb(t) || bs.hsl(t);
      },
      key: function (t) {
        return (
          !ds.hasOwnProperty(t) &&
          !vs.hasOwnProperty(t) &&
          "targets" !== t &&
          "keyframes" !== t
        );
      },
    };
    function Es(t) {
      var e = /\(([^)]+)\)/.exec(t);
      return e
        ? e[1].split(",").map(function (t) {
            return parseFloat(t);
          })
        : [];
    }
    function ws(t, e) {
      var r = Es(t),
        n = ms(bs.und(r[0]) ? 1 : r[0], 0.1, 100),
        i = ms(bs.und(r[1]) ? 100 : r[1], 0.1, 100),
        o = ms(bs.und(r[2]) ? 10 : r[2], 0.1, 100),
        s = ms(bs.und(r[3]) ? 0 : r[3], 0.1, 100),
        a = Math.sqrt(i / n),
        u = o / (2 * Math.sqrt(i * n)),
        h = u < 1 ? a * Math.sqrt(1 - u * u) : 0,
        c = u < 1 ? (u * a - s) / h : -s + a;
      function l(t) {
        var r = e ? (e * t) / 1e3 : t;
        return (
          (r =
            u < 1
              ? Math.exp(-r * u * a) *
                (1 * Math.cos(h * r) + c * Math.sin(h * r))
              : (1 + c * r) * Math.exp(-r * a)),
          0 === t || 1 === t ? t : 1 - r
        );
      }
      return e
        ? l
        : function () {
            var e = ys.springs[t];
            if (e) return e;
            for (var r = 0, n = 0; ; )
              if (1 === l((r += 1 / 6))) {
                if (++n >= 16) break;
              } else n = 0;
            var i = r * (1 / 6) * 1e3;
            return (ys.springs[t] = i), i;
          };
    }
    function Ts(t) {
      return (
        void 0 === t && (t = 10),
        function (e) {
          return Math.ceil(ms(e, 1e-6, 1) * t) * (1 / t);
        }
      );
    }
    var Ss,
      Os,
      As = (function () {
        function t(t, e) {
          return 1 - 3 * e + 3 * t;
        }
        function e(t, e) {
          return 3 * e - 6 * t;
        }
        function r(t) {
          return 3 * t;
        }
        function n(n, i, o) {
          return ((t(i, o) * n + e(i, o)) * n + r(i)) * n;
        }
        function i(n, i, o) {
          return 3 * t(i, o) * n * n + 2 * e(i, o) * n + r(i);
        }
        return function (t, e, r, o) {
          if (0 <= t && t <= 1 && 0 <= r && r <= 1) {
            var s = new Float32Array(11);
            if (t !== e || r !== o)
              for (var a = 0; a < 11; ++a) s[a] = n(0.1 * a, t, r);
            return function (i) {
              return (t === e && r === o) || 0 === i || 1 === i
                ? i
                : n(u(i), e, o);
            };
          }
          function u(e) {
            for (var o = 0, a = 1; 10 !== a && s[a] <= e; ++a) o += 0.1;
            --a;
            var u = o + 0.1 * ((e - s[a]) / (s[a + 1] - s[a])),
              h = i(u, t, r);
            return h >= 0.001
              ? (function (t, e, r, o) {
                  for (var s = 0; s < 4; ++s) {
                    var a = i(e, r, o);
                    if (0 === a) return e;
                    e -= (n(e, r, o) - t) / a;
                  }
                  return e;
                })(e, u, t, r)
              : 0 === h
              ? u
              : (function (t, e, r, i, o) {
                  var s,
                    a,
                    u = 0;
                  do {
                    (s = n((a = e + (r - e) / 2), i, o) - t) > 0
                      ? (r = a)
                      : (e = a);
                  } while (Math.abs(s) > 1e-7 && ++u < 10);
                  return a;
                })(e, o, o + 0.1, t, r);
          }
        };
      })(),
      Ps =
        ((Ss = {
          linear: function () {
            return function (t) {
              return t;
            };
          },
        }),
        (Os = {
          Sine: function () {
            return function (t) {
              return 1 - Math.cos((t * Math.PI) / 2);
            };
          },
          Circ: function () {
            return function (t) {
              return 1 - Math.sqrt(1 - t * t);
            };
          },
          Back: function () {
            return function (t) {
              return t * t * (3 * t - 2);
            };
          },
          Bounce: function () {
            return function (t) {
              for (var e, r = 4; t < ((e = Math.pow(2, --r)) - 1) / 11; );
              return (
                1 / Math.pow(4, 3 - r) -
                7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
              );
            };
          },
          Elastic: function (t, e) {
            void 0 === t && (t = 1), void 0 === e && (e = 0.5);
            var r = ms(t, 1, 10),
              n = ms(e, 0.1, 2);
            return function (t) {
              return 0 === t || 1 === t
                ? t
                : -r *
                    Math.pow(2, 10 * (t - 1)) *
                    Math.sin(
                      ((t - 1 - (n / (2 * Math.PI)) * Math.asin(1 / r)) *
                        (2 * Math.PI)) /
                        n
                    );
            };
          },
        }),
        ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (t, e) {
          Os[t] = function () {
            return function (t) {
              return Math.pow(t, e + 2);
            };
          };
        }),
        Object.keys(Os).forEach(function (t) {
          var e = Os[t];
          (Ss["easeIn" + t] = e),
            (Ss["easeOut" + t] = function (t, r) {
              return function (n) {
                return 1 - e(t, r)(1 - n);
              };
            }),
            (Ss["easeInOut" + t] = function (t, r) {
              return function (n) {
                return n < 0.5
                  ? e(t, r)(2 * n) / 2
                  : 1 - e(t, r)(-2 * n + 2) / 2;
              };
            });
        }),
        Ss);
    function Is(t, e) {
      if (bs.fnc(t)) return t;
      var r = t.split("(")[0],
        n = Ps[r],
        i = Es(t);
      switch (r) {
        case "spring":
          return ws(t, e);
        case "cubicBezier":
          return xs(As, i);
        case "steps":
          return xs(Ts, i);
        default:
          return xs(n, i);
      }
    }
    function Cs(t) {
      try {
        return document.querySelectorAll(t);
      } catch (t) {
        return;
      }
    }
    function Ms(t, e) {
      for (
        var r = t.length,
          n = arguments.length >= 2 ? arguments[1] : void 0,
          i = [],
          o = 0;
        o < r;
        o++
      )
        if (o in t) {
          var s = t[o];
          e.call(n, s, o, t) && i.push(s);
        }
      return i;
    }
    function Rs(t) {
      return t.reduce(function (t, e) {
        return t.concat(bs.arr(e) ? Rs(e) : e);
      }, []);
    }
    function Ds(t) {
      return bs.arr(t)
        ? t
        : (bs.str(t) && (t = Cs(t) || t),
          t instanceof NodeList || t instanceof HTMLCollection
            ? [].slice.call(t)
            : [t]);
    }
    function Ls(t, e) {
      return t.some(function (t) {
        return t === e;
      });
    }
    function Ns(t) {
      var e = {};
      for (var r in t) e[r] = t[r];
      return e;
    }
    function Fs(t, e) {
      var r = Ns(t);
      for (var n in t) r[n] = e.hasOwnProperty(n) ? e[n] : t[n];
      return r;
    }
    function Us(t, e) {
      var r = Ns(t);
      for (var n in e) r[n] = bs.und(t[n]) ? e[n] : t[n];
      return r;
    }
    function ks(t) {
      return bs.rgb(t)
        ? (r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((e = t)))
          ? "rgba(" + r[1] + ",1)"
          : e
        : bs.hex(t)
        ? (function (t) {
            var e = t.replace(
                /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                function (t, e, r, n) {
                  return e + e + r + r + n + n;
                }
              ),
              r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return (
              "rgba(" +
              parseInt(r[1], 16) +
              "," +
              parseInt(r[2], 16) +
              "," +
              parseInt(r[3], 16) +
              ",1)"
            );
          })(t)
        : bs.hsl(t)
        ? (function (t) {
            var e,
              r,
              n,
              i =
                /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t) ||
                /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),
              o = parseInt(i[1], 10) / 360,
              s = parseInt(i[2], 10) / 100,
              a = parseInt(i[3], 10) / 100,
              u = i[4] || 1;
            function h(t, e, r) {
              return (
                r < 0 && (r += 1),
                r > 1 && (r -= 1),
                r < 1 / 6
                  ? t + 6 * (e - t) * r
                  : r < 0.5
                  ? e
                  : r < 2 / 3
                  ? t + (e - t) * (2 / 3 - r) * 6
                  : t
              );
            }
            if (0 == s) e = r = n = a;
            else {
              var c = a < 0.5 ? a * (1 + s) : a + s - a * s,
                l = 2 * a - c;
              (e = h(l, c, o + 1 / 3)),
                (r = h(l, c, o)),
                (n = h(l, c, o - 1 / 3));
            }
            return (
              "rgba(" + 255 * e + "," + 255 * r + "," + 255 * n + "," + u + ")"
            );
          })(t)
        : void 0;
      var e, r;
    }
    function Bs(t) {
      var e =
        /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
          t
        );
      if (e) return e[1];
    }
    function js(t, e) {
      return bs.fnc(t) ? t(e.target, e.id, e.total) : t;
    }
    function Hs(t, e) {
      return t.getAttribute(e);
    }
    function Gs(t, e, r) {
      if (Ls([r, "deg", "rad", "turn"], Bs(e))) return e;
      var n = ys.CSS[e + r];
      if (!bs.und(n)) return n;
      var i = document.createElement(t.tagName),
        o =
          t.parentNode && t.parentNode !== document
            ? t.parentNode
            : document.body;
      o.appendChild(i),
        (i.style.position = "absolute"),
        (i.style.width = 100 + r);
      var s = 100 / i.offsetWidth;
      o.removeChild(i);
      var a = s * parseFloat(e);
      return (ys.CSS[e + r] = a), a;
    }
    function Xs(t, e, r) {
      if (e in t.style) {
        var n = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
          i = t.style[e] || getComputedStyle(t).getPropertyValue(n) || "0";
        return r ? Gs(t, i, r) : i;
      }
    }
    function zs(t, e) {
      return bs.dom(t) && !bs.inp(t) && (Hs(t, e) || (bs.svg(t) && t[e]))
        ? "attribute"
        : bs.dom(t) && Ls(gs, e)
        ? "transform"
        : bs.dom(t) && "transform" !== e && Xs(t, e)
        ? "css"
        : null != t[e]
        ? "object"
        : void 0;
    }
    function Vs(t) {
      if (bs.dom(t)) {
        for (
          var e,
            r = t.style.transform || "",
            n = /(\w+)\(([^)]*)\)/g,
            i = new Map();
          (e = n.exec(r));

        )
          i.set(e[1], e[2]);
        return i;
      }
    }
    function Ys(t, e, r, n) {
      var i = _s(e, "scale")
          ? 1
          : 0 +
            (function (t) {
              return _s(t, "translate") || "perspective" === t
                ? "px"
                : _s(t, "rotate") || _s(t, "skew")
                ? "deg"
                : void 0;
            })(e),
        o = Vs(t).get(e) || i;
      return (
        r && (r.transforms.list.set(e, o), (r.transforms.last = e)),
        n ? Gs(t, o, n) : o
      );
    }
    function Ws(t, e, r, n) {
      switch (zs(t, e)) {
        case "transform":
          return Ys(t, e, n, r);
        case "css":
          return Xs(t, e, r);
        case "attribute":
          return Hs(t, e);
        default:
          return t[e] || 0;
      }
    }
    function qs(t, e) {
      var r = /^(\*=|\+=|-=)/.exec(t);
      if (!r) return t;
      var n = Bs(t) || 0,
        i = parseFloat(e),
        o = parseFloat(t.replace(r[0], ""));
      switch (r[0][0]) {
        case "+":
          return i + o + n;
        case "-":
          return i - o + n;
        case "*":
          return i * o + n;
      }
    }
    function Ks(t, e) {
      if (bs.col(t)) return ks(t);
      if (/\s/g.test(t)) return t;
      var r = Bs(t),
        n = r ? t.substr(0, t.length - r.length) : t;
      return e ? n + e : n;
    }
    function Zs(t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    }
    function Js(t) {
      for (var e, r = t.points, n = 0, i = 0; i < r.numberOfItems; i++) {
        var o = r.getItem(i);
        i > 0 && (n += Zs(e, o)), (e = o);
      }
      return n;
    }
    function $s(t) {
      if (t.getTotalLength) return t.getTotalLength();
      switch (t.tagName.toLowerCase()) {
        case "circle":
          return (function (t) {
            return 2 * Math.PI * Hs(t, "r");
          })(t);
        case "rect":
          return (function (t) {
            return 2 * Hs(t, "width") + 2 * Hs(t, "height");
          })(t);
        case "line":
          return (function (t) {
            return Zs(
              { x: Hs(t, "x1"), y: Hs(t, "y1") },
              { x: Hs(t, "x2"), y: Hs(t, "y2") }
            );
          })(t);
        case "polyline":
          return Js(t);
        case "polygon":
          return (function (t) {
            var e = t.points;
            return Js(t) + Zs(e.getItem(e.numberOfItems - 1), e.getItem(0));
          })(t);
      }
    }
    function Qs(t, e) {
      var r = e || {},
        n =
          r.el ||
          (function (t) {
            for (var e = t.parentNode; bs.svg(e) && bs.svg(e.parentNode); )
              e = e.parentNode;
            return e;
          })(t),
        i = n.getBoundingClientRect(),
        o = Hs(n, "viewBox"),
        s = i.width,
        a = i.height,
        u = r.viewBox || (o ? o.split(" ") : [0, 0, s, a]);
      return {
        el: n,
        viewBox: u,
        x: u[0] / 1,
        y: u[1] / 1,
        w: s / u[2],
        h: a / u[3],
      };
    }
    function ta(t, e) {
      function r(r) {
        void 0 === r && (r = 0);
        var n = e + r >= 1 ? e + r : 0;
        return t.el.getPointAtLength(n);
      }
      var n = Qs(t.el, t.svg),
        i = r(),
        o = r(-1),
        s = r(1);
      switch (t.property) {
        case "x":
          return (i.x - n.x) * n.w;
        case "y":
          return (i.y - n.y) * n.h;
        case "angle":
          return (180 * Math.atan2(s.y - o.y, s.x - o.x)) / Math.PI;
      }
    }
    function ea(t, e) {
      var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
        n = Ks(bs.pth(t) ? t.totalLength : t, e) + "";
      return {
        original: n,
        numbers: n.match(r) ? n.match(r).map(Number) : [0],
        strings: bs.str(t) || e ? n.split(r) : [],
      };
    }
    function ra(t) {
      return Ms(t ? Rs(bs.arr(t) ? t.map(Ds) : Ds(t)) : [], function (t, e, r) {
        return r.indexOf(t) === e;
      });
    }
    function na(t) {
      var e = ra(t);
      return e.map(function (t, r) {
        return {
          target: t,
          id: r,
          total: e.length,
          transforms: { list: Vs(t) },
        };
      });
    }
    function ia(t, e) {
      var r = Ns(e);
      if (
        (/^spring/.test(r.easing) && (r.duration = ws(r.easing)), bs.arr(t))
      ) {
        var n = t.length;
        2 === n && !bs.obj(t[0])
          ? (t = { value: t })
          : bs.fnc(e.duration) || (r.duration = e.duration / n);
      }
      var i = bs.arr(t) ? t : [t];
      return i
        .map(function (t, r) {
          var n = bs.obj(t) && !bs.pth(t) ? t : { value: t };
          return (
            bs.und(n.delay) && (n.delay = r ? 0 : e.delay),
            bs.und(n.endDelay) &&
              (n.endDelay = r === i.length - 1 ? e.endDelay : 0),
            n
          );
        })
        .map(function (t) {
          return Us(t, r);
        });
    }
    function oa(t, e) {
      var r = [],
        n = e.keyframes;
      for (var i in (n &&
        (e = Us(
          (function (t) {
            for (
              var e = Ms(
                  Rs(
                    t.map(function (t) {
                      return Object.keys(t);
                    })
                  ),
                  function (t) {
                    return bs.key(t);
                  }
                ).reduce(function (t, e) {
                  return t.indexOf(e) < 0 && t.push(e), t;
                }, []),
                r = {},
                n = function (n) {
                  var i = e[n];
                  r[i] = t.map(function (t) {
                    var e = {};
                    for (var r in t)
                      bs.key(r) ? r == i && (e.value = t[r]) : (e[r] = t[r]);
                    return e;
                  });
                },
                i = 0;
              i < e.length;
              i++
            )
              n(i);
            return r;
          })(n),
          e
        )),
      e))
        bs.key(i) && r.push({ name: i, tweens: ia(e[i], t) });
      return r;
    }
    function sa(t, e) {
      var r;
      return t.tweens.map(function (n) {
        var i = (function (t, e) {
            var r = {};
            for (var n in t) {
              var i = js(t[n], e);
              bs.arr(i) &&
                1 ===
                  (i = i.map(function (t) {
                    return js(t, e);
                  })).length &&
                (i = i[0]),
                (r[n] = i);
            }
            return (
              (r.duration = parseFloat(r.duration)),
              (r.delay = parseFloat(r.delay)),
              r
            );
          })(n, e),
          o = i.value,
          s = bs.arr(o) ? o[1] : o,
          a = Bs(s),
          u = Ws(e.target, t.name, a, e),
          h = r ? r.to.original : u,
          c = bs.arr(o) ? o[0] : h,
          l = Bs(c) || Bs(u),
          f = a || l;
        return (
          bs.und(s) && (s = h),
          (i.from = ea(c, f)),
          (i.to = ea(qs(s, c), f)),
          (i.start = r ? r.end : 0),
          (i.end = i.start + i.delay + i.duration + i.endDelay),
          (i.easing = Is(i.easing, i.duration)),
          (i.isPath = bs.pth(o)),
          (i.isColor = bs.col(i.from.original)),
          i.isColor && (i.round = 1),
          (r = i),
          i
        );
      });
    }
    var aa = {
      css: function (t, e, r) {
        return (t.style[e] = r);
      },
      attribute: function (t, e, r) {
        return t.setAttribute(e, r);
      },
      object: function (t, e, r) {
        return (t[e] = r);
      },
      transform: function (t, e, r, n, i) {
        if ((n.list.set(e, r), e === n.last || i)) {
          var o = "";
          n.list.forEach(function (t, e) {
            o += e + "(" + t + ") ";
          }),
            (t.style.transform = o);
        }
      },
    };
    function ua(t, e) {
      na(t).forEach(function (t) {
        for (var r in e) {
          var n = js(e[r], t),
            i = t.target,
            o = Bs(n),
            s = Ws(i, r, o, t),
            a = qs(Ks(n, o || Bs(s)), s),
            u = zs(i, r);
          aa[u](i, r, a, t.transforms, !0);
        }
      });
    }
    function ha(t, e) {
      return Ms(
        Rs(
          t.map(function (t) {
            return e.map(function (e) {
              return (function (t, e) {
                var r = zs(t.target, e.name);
                if (r) {
                  var n = sa(e, t),
                    i = n[n.length - 1];
                  return {
                    type: r,
                    property: e.name,
                    animatable: t,
                    tweens: n,
                    duration: i.end,
                    delay: n[0].delay,
                    endDelay: i.endDelay,
                  };
                }
              })(t, e);
            });
          })
        ),
        function (t) {
          return !bs.und(t);
        }
      );
    }
    function ca(t, e) {
      var r = t.length,
        n = function (t) {
          return t.timelineOffset ? t.timelineOffset : 0;
        },
        i = {};
      return (
        (i.duration = r
          ? Math.max.apply(
              Math,
              t.map(function (t) {
                return n(t) + t.duration;
              })
            )
          : e.duration),
        (i.delay = r
          ? Math.min.apply(
              Math,
              t.map(function (t) {
                return n(t) + t.delay;
              })
            )
          : e.delay),
        (i.endDelay = r
          ? i.duration -
            Math.max.apply(
              Math,
              t.map(function (t) {
                return n(t) + t.duration - t.endDelay;
              })
            )
          : e.endDelay),
        i
      );
    }
    var la = 0;
    var fa,
      pa = [],
      da = [],
      va = (function () {
        function t() {
          fa = requestAnimationFrame(e);
        }
        function e(e) {
          var r = pa.length;
          if (r) {
            for (var n = 0; n < r; ) {
              var i = pa[n];
              if (i.paused) {
                var o = pa.indexOf(i);
                o > -1 && (pa.splice(o, 1), (r = pa.length));
              } else i.tick(e);
              n++;
            }
            t();
          } else fa = cancelAnimationFrame(fa);
        }
        return t;
      })();
    function ga(t) {
      void 0 === t && (t = {});
      var e,
        r = 0,
        n = 0,
        i = 0,
        o = 0,
        s = null;
      function a(t) {
        var e =
          window.Promise &&
          new Promise(function (t) {
            return (s = t);
          });
        return (t.finished = e), e;
      }
      var u = (function (t) {
        var e = Fs(ds, t),
          r = Fs(vs, t),
          n = oa(r, t),
          i = na(t.targets),
          o = ha(i, n),
          s = ca(o, r),
          a = la;
        return (
          la++,
          Us(e, {
            id: a,
            children: [],
            animatables: i,
            animations: o,
            duration: s.duration,
            delay: s.delay,
            endDelay: s.endDelay,
          })
        );
      })(t);
      a(u);
      function h() {
        var t = u.direction;
        "alternate" !== t &&
          (u.direction = "normal" !== t ? "normal" : "reverse"),
          (u.reversed = !u.reversed),
          e.forEach(function (t) {
            return (t.reversed = u.reversed);
          });
      }
      function c(t) {
        return u.reversed ? u.duration - t : t;
      }
      function l() {
        (r = 0), (n = c(u.currentTime) * (1 / ga.speed));
      }
      function f(t, e) {
        e && e.seek(t - e.timelineOffset);
      }
      function p(t) {
        for (var e = 0, r = u.animations, n = r.length; e < n; ) {
          var i = r[e],
            o = i.animatable,
            s = i.tweens,
            a = s.length - 1,
            h = s[a];
          a &&
            (h =
              Ms(s, function (e) {
                return t < e.end;
              })[0] || h);
          for (
            var c = ms(t - h.start - h.delay, 0, h.duration) / h.duration,
              l = isNaN(c) ? 1 : h.easing(c),
              f = h.to.strings,
              p = h.round,
              d = [],
              v = h.to.numbers.length,
              g = void 0,
              y = 0;
            y < v;
            y++
          ) {
            var m = void 0,
              _ = h.to.numbers[y],
              x = h.from.numbers[y] || 0;
            (m = h.isPath ? ta(h.value, l * _) : x + l * (_ - x)),
              p && ((h.isColor && y > 2) || (m = Math.round(m * p) / p)),
              d.push(m);
          }
          var b = f.length;
          if (b) {
            g = f[0];
            for (var E = 0; E < b; E++) {
              f[E];
              var w = f[E + 1],
                T = d[E];
              isNaN(T) || (g += w ? T + w : T + " ");
            }
          } else g = d[0];
          aa[i.type](o.target, i.property, g, o.transforms),
            (i.currentValue = g),
            e++;
        }
      }
      function d(t) {
        u[t] && !u.passThrough && u[t](u);
      }
      function v(t) {
        var l = u.duration,
          v = u.delay,
          g = l - u.endDelay,
          y = c(t);
        (u.progress = ms((y / l) * 100, 0, 100)),
          (u.reversePlayback = y < u.currentTime),
          e &&
            (function (t) {
              if (u.reversePlayback) for (var r = o; r--; ) f(t, e[r]);
              else for (var n = 0; n < o; n++) f(t, e[n]);
            })(y),
          !u.began && u.currentTime > 0 && ((u.began = !0), d("begin")),
          !u.loopBegan &&
            u.currentTime > 0 &&
            ((u.loopBegan = !0), d("loopBegin")),
          y <= v && 0 !== u.currentTime && p(0),
          ((y >= g && u.currentTime !== l) || !l) && p(l),
          y > v && y < g
            ? (u.changeBegan ||
                ((u.changeBegan = !0),
                (u.changeCompleted = !1),
                d("changeBegin")),
              d("change"),
              p(y))
            : u.changeBegan &&
              ((u.changeCompleted = !0),
              (u.changeBegan = !1),
              d("changeComplete")),
          (u.currentTime = ms(y, 0, l)),
          u.began && d("update"),
          t >= l &&
            ((n = 0),
            u.remaining && !0 !== u.remaining && u.remaining--,
            u.remaining
              ? ((r = i),
                d("loopComplete"),
                (u.loopBegan = !1),
                "alternate" === u.direction && h())
              : ((u.paused = !0),
                u.completed ||
                  ((u.completed = !0),
                  d("loopComplete"),
                  d("complete"),
                  !u.passThrough && "Promise" in window && (s(), a(u)))));
      }
      return (
        (u.reset = function () {
          var t = u.direction;
          (u.passThrough = !1),
            (u.currentTime = 0),
            (u.progress = 0),
            (u.paused = !0),
            (u.began = !1),
            (u.loopBegan = !1),
            (u.changeBegan = !1),
            (u.completed = !1),
            (u.changeCompleted = !1),
            (u.reversePlayback = !1),
            (u.reversed = "reverse" === t),
            (u.remaining = u.loop),
            (e = u.children);
          for (var r = (o = e.length); r--; ) u.children[r].reset();
          ((u.reversed && !0 !== u.loop) ||
            ("alternate" === t && 1 === u.loop)) &&
            u.remaining++,
            p(u.reversed ? u.duration : 0);
        }),
        (u.set = function (t, e) {
          return ua(t, e), u;
        }),
        (u.tick = function (t) {
          (i = t), r || (r = i), v((i + (n - r)) * ga.speed);
        }),
        (u.seek = function (t) {
          v(c(t));
        }),
        (u.pause = function () {
          (u.paused = !0), l();
        }),
        (u.play = function () {
          u.paused &&
            (u.completed && u.reset(),
            (u.paused = !1),
            pa.push(u),
            l(),
            fa || va());
        }),
        (u.reverse = function () {
          h(), (u.completed = !u.reversed), l();
        }),
        (u.restart = function () {
          u.reset(), u.play();
        }),
        u.reset(),
        u.autoplay && u.play(),
        u
      );
    }
    function ya(t, e) {
      for (var r = e.length; r--; )
        Ls(t, e[r].animatable.target) && e.splice(r, 1);
    }
    "undefined" != typeof document &&
      document.addEventListener("visibilitychange", function () {
        document.hidden
          ? (pa.forEach(function (t) {
              return t.pause();
            }),
            (da = pa.slice(0)),
            (ga.running = pa = []))
          : da.forEach(function (t) {
              return t.play();
            });
      }),
      (ga.version = "3.2.0"),
      (ga.speed = 1),
      (ga.running = pa),
      (ga.remove = function (t) {
        for (var e = ra(t), r = pa.length; r--; ) {
          var n = pa[r],
            i = n.animations,
            o = n.children;
          ya(e, i);
          for (var s = o.length; s--; ) {
            var a = o[s],
              u = a.animations;
            ya(e, u), u.length || a.children.length || o.splice(s, 1);
          }
          i.length || o.length || n.pause();
        }
      }),
      (ga.get = Ws),
      (ga.set = ua),
      (ga.convertPx = Gs),
      (ga.path = function (t, e) {
        var r = bs.str(t) ? Cs(t)[0] : t,
          n = e || 100;
        return function (t) {
          return {
            property: t,
            el: r,
            svg: Qs(r),
            totalLength: $s(r) * (n / 100),
          };
        };
      }),
      (ga.setDashoffset = function (t) {
        var e = $s(t);
        return t.setAttribute("stroke-dasharray", e), e;
      }),
      (ga.stagger = function (t, e) {
        void 0 === e && (e = {});
        var r = e.direction || "normal",
          n = e.easing ? Is(e.easing) : null,
          i = e.grid,
          o = e.axis,
          s = e.from || 0,
          a = "first" === s,
          u = "center" === s,
          h = "last" === s,
          c = bs.arr(t),
          l = c ? parseFloat(t[0]) : parseFloat(t),
          f = c ? parseFloat(t[1]) : 0,
          p = Bs(c ? t[1] : t) || 0,
          d = e.start || 0 + (c ? l : 0),
          v = [],
          g = 0;
        return function (t, e, y) {
          if (
            (a && (s = 0), u && (s = (y - 1) / 2), h && (s = y - 1), !v.length)
          ) {
            for (var m = 0; m < y; m++) {
              if (i) {
                var _ = u ? (i[0] - 1) / 2 : s % i[0],
                  x = u ? (i[1] - 1) / 2 : Math.floor(s / i[0]),
                  b = _ - (m % i[0]),
                  E = x - Math.floor(m / i[0]),
                  w = Math.sqrt(b * b + E * E);
                "x" === o && (w = -b), "y" === o && (w = -E), v.push(w);
              } else v.push(Math.abs(s - m));
              g = Math.max.apply(Math, v);
            }
            n &&
              (v = v.map(function (t) {
                return n(t / g) * g;
              })),
              "reverse" === r &&
                (v = v.map(function (t) {
                  return o ? (t < 0 ? -1 * t : -t) : Math.abs(g - t);
                }));
          }
          return d + (c ? (f - l) / g : l) * (Math.round(100 * v[e]) / 100) + p;
        };
      }),
      (ga.timeline = function (t) {
        void 0 === t && (t = {});
        var e = ga(t);
        return (
          (e.duration = 0),
          (e.add = function (r, n) {
            var i = pa.indexOf(e),
              o = e.children;
            function s(t) {
              t.passThrough = !0;
            }
            i > -1 && pa.splice(i, 1);
            for (var a = 0; a < o.length; a++) s(o[a]);
            var u = Us(r, Fs(vs, t));
            u.targets = u.targets || t.targets;
            var h = e.duration;
            (u.autoplay = !1),
              (u.direction = e.direction),
              (u.timelineOffset = bs.und(n) ? h : qs(n, h)),
              s(e),
              e.seek(u.timelineOffset);
            var c = ga(u);
            s(c), o.push(c);
            var l = ca(o, t);
            return (
              (e.delay = l.delay),
              (e.endDelay = l.endDelay),
              (e.duration = l.duration),
              e.seek(0),
              e.reset(),
              e.autoplay && e.play(),
              e
            );
          }),
          e
        );
      }),
      (ga.easing = Is),
      (ga.penner = Ps),
      (ga.random = function (t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t;
      });
    var ma = ga;
    function _a(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function xa(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var ba = (function () {
      function t(e, r) {
        var n = this,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        _a(this, t),
          (this.container = e),
          (this.viewport = r),
          (this.imageOriginalWidth =
            1 * this.container.getAttribute("data-width")),
          (this.imageOriginalHeight =
            1 * this.container.getAttribute("data-height")),
          (this.images = this.container.getAttribute("data-images").split(",")),
          (this.isSlideshow = i);
        for (var o = this.images.length - 1; o > 0; o--) {
          var s = Math.floor(Math.random() * (o + 1)),
            a = this.images[o];
          (this.images[o] = this.images[s]), (this.images[s] = a);
        }
        (this.app = new fn({
          width: this.imageOriginalWidth,
          height: this.imageOriginalHeight,
          resolution: 1,
        })),
          (this.sprites = this.images.map(function (t) {
            return Pi.from(t);
          })),
          (this.noiseMap = Pi.from("/images/noise.jpg")),
          (this.displacementFilter = new ps.DisplacementFilter(this.noiseMap)),
          (this.count = 0),
          (this.scale = new Mt(0, 0)),
          (this.isActive = !1),
          (this.displacementFilter.scale = this.scale),
          (this.app.stage.filters = [this.displacementFilter]),
          (this.noiseMap.texture.baseTexture.wrapMode = U.REPEAT),
          (this.noiseMap.anchor.x = 0.5),
          (this.noiseMap.anchor.y = 0.5),
          (this.noiseMap.scale.y = 10),
          (this.noiseMap.scale.x = 10),
          (this.mapDirection = [
            [-1, -1],
            [-1, 1],
            [1, -1],
          ]),
          this.sprites.forEach(function (t) {
            (t.anchor.x = 0.5),
              (t.anchor.y = 0.5),
              (t.x = n.app.screen.width / 2),
              (t.y = n.app.screen.height / 2),
              (t.alpha = 0),
              n.app.stage.addChild(t);
          }),
          (this.sprites[0].alpha = 1),
          this.app.stage.addChild(this.noiseMap),
          this.viewport.appendChild(this.app.view),
          (this.distortion = 2500),
          (this.interval = 1 * this.container.getAttribute("data-interval")),
          window.addEventListener(
            "resize",
            function () {
              return n.resize();
            },
            !1
          ),
          this.resize();
      }
      var e, r, n;
      return (
        (e = t),
        (r = [
          {
            key: "init",
            value: function () {
              var t = this;
              setInterval(function () {
                return t.transitImage();
              }, this.interval),
                this.initialTransit();
            },
          },
          {
            key: "resize",
            value: function () {
              var t = this.container.offsetWidth,
                e =
                  (this.imageOriginalHeight / this.imageOriginalWidth) *
                  this.container.offsetWidth;
              e < this.container.offsetHeight &&
                ((e = this.container.offsetHeight),
                (t =
                  (this.imageOriginalWidth / this.imageOriginalHeight) *
                  this.container.offsetHeight)),
                (this.viewport.style.width = t + "px"),
                (this.viewport.style.height = e + "px"),
                (this.noiseMap.x = this.app.screen.width / 2),
                (this.noiseMap.y = this.app.screen.height / 2);
            },
          },
          {
            key: "initialTransit",
            value: function () {
              var t = this,
                e =
                  this.mapDirection[
                    Math.floor(Math.random() * this.mapDirection.length)
                  ];
              if (
                (ma({
                  targets: this.scale,
                  x: this.distortion / 10,
                  y: this.distortion / 10,
                  direction: "alternate",
                  easing: "easeInCubic",
                  delay: 0,
                  duration: 1500,
                  complete: function () {},
                }),
                ma({
                  targets: this.noiseMap,
                  x: this.noiseMap.x + 1500 * e[0],
                  y: this.noiseMap.y + 1500 * e[1],
                  easing: "easeInOutQuart",
                  delay: 0,
                  duration: 3e3,
                  begin: function () {
                    (t.isActive = !0), t.container.classList.remove("initial");
                  },
                  complete: function () {
                    t.isActive = !1;
                  },
                }),
                this.isSlideshow)
              ) {
                var r = new Mt(1, 1);
                (this.sprites[0].scale = r),
                  ma({
                    targets: this.sprites[0].scale,
                    x: 1.1,
                    y: 1.1,
                    easing: "linear",
                    delay: 1e3,
                    duration: this.interval,
                  });
              }
            },
          },
          {
            key: "transitImage",
            value: function () {
              var t = this,
                e =
                  this.mapDirection[
                    Math.floor(Math.random() * this.mapDirection.length)
                  ];
              ma({
                targets: this.scale,
                x: this.distortion / 10,
                y: this.distortion / 10,
                direction: "alternate",
                easing: "easeInCubic",
                delay: 0,
                duration: 1500,
                complete: function () {},
              }),
                ma({
                  targets: this.noiseMap,
                  x: this.noiseMap.x + 1500 * e[0],
                  y: this.noiseMap.y + 1500 * e[1],
                  easing: "easeInOutQuart",
                  delay: 0,
                  duration: 3e3,
                  begin: function () {
                    t.isActive = !0;
                  },
                  complete: function () {
                    (t.isActive = !1),
                      t.container.classList.remove("animating");
                  },
                });
              var r = this.count,
                n = this.count + 1 >= this.sprites.length ? 0 : this.count + 1;
              ma({
                targets: this.sprites[r],
                alpha: 0,
                easing: "easeInOutSine",
                delay: 1250,
                duration: 1e3,
              }),
                ma({
                  targets: this.sprites[n],
                  alpha: 1,
                  easing: "easeInOutSine",
                  delay: 1250,
                  duration: 1e3,
                });
              var i = new Mt(1, 1);
              (this.sprites[n].scale = i),
                ma({
                  targets: this.sprites[n].scale,
                  x: 1.1,
                  y: 1.1,
                  easing: "linear",
                  delay: 1e3,
                  duration: this.interval,
                }),
                (this.count =
                  this.count + 1 >= this.sprites.length ? 0 : this.count + 1),
                this.container.classList.add("animating");
            },
          },
        ]) && xa(e.prototype, r),
        n && xa(e, n),
        t
      );
    })();
    function Ea(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var wa = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          this.initHeader(),
          this.initSmoothScroll();
      }
      var e, r, n;
      return (
        (e = t),
        (r = [
          {
            key: "initSmoothScroll",
            value: function () {
              var t =
                window.document.scrollingElement ||
                window.document.body ||
                window.document.documentElement;
              document.querySelectorAll('a[href^="#"]').forEach(function (e) {
                var r = e.getAttribute("href");
                if (0 !== r.indexOf("#")) return !1;
                e.addEventListener(
                  "click",
                  function (e) {
                    var n = 0,
                      i = window.outerWidth > 1023 ? 120 : 20;
                    if (r.length > 1) {
                      var o = document.querySelector(r);
                      if (o) {
                        var s = o.getBoundingClientRect(),
                          a =
                            document.documentElement.scrollTop ||
                            document.body.scrollTop;
                        n = s.top + a - i;
                      }
                    } else n = 0;
                    return (
                      ma({
                        targets: t,
                        scrollTop: n,
                        duration: 750,
                        easing: "easeOutExpo",
                      }),
                      e.preventDefault(),
                      e.stopPropagation(),
                      !1
                    );
                  },
                  !1
                );
              });
            },
          },
          {
            key: "initHeader",
            value: function () {
              var t = document.querySelector(".header"),
                e = document.querySelector(".header__container"),
                r = document.querySelector(".firstview__main"),
                n = document.querySelector(".header__container__inner"),
                i = document.querySelector(".header__toggle"),
                o = document.querySelectorAll(".header__nav__link"),
                s = !0,
                a = !1;
              function u() {
                return (
                  a
                    ? (t.classList.remove("open"), (a = !1))
                    : (t.classList.add("open"), (a = !0)),
                  !1
                );
              }
              function h() {
                document.documentElement.scrollTop || document.body.scrollTop;
                var n = e.offsetHeight;
                r.getBoundingClientRect().top < n
                  ? s && (t.classList.add("scrolled"), (s = !1))
                  : s || (t.classList.remove("scrolled"), (s = !0));
              }
              function c() {
                (e.style.height = window.innerHeight + "px"),
                  (n.style.height = window.innerHeight + "px");
              }
              i.addEventListener("click", u, !1),
                o.forEach(function (t) {
                  t.addEventListener(
                    "click",
                    function () {
                      a && u();
                    },
                    !1
                  );
                }),
                window.addEventListener("scroll", h, !1),
                window.addEventListener("scroll", c, !1),
                h(),
                c();
            },
          },
        ]) && Ea(e.prototype, r),
        n && Ea(e, n),
        t
      );
    })();
    function Ta(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var Sa = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          this.init();
      }
      var e, r, n;
      return (
        (e = t),
        (r = [
          {
            key: "init",
            value: function () {
              var t = document.querySelector(".firstview");
              function e() {
                t.style.height = document.documentElement.clientHeight + "px";
              }
              window.addEventListener("resize", e, !1), e();
            },
          },
        ]) && Ta(e.prototype, r),
        n && Ta(e, n),
        t
      );
    })();
    r(410), r(419);
    var Oa = function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
        var e = Array.from(document.querySelectorAll(".scrollFx")).map(
            function (t) {
              var e = {
                dom: t,
                appear: !1,
                fxImage: !1,
                fxGrad: !1,
                fxDealy: 0,
              };
              return (
                (function (t) {
                  var e = t.dom;
                  e.classList.contains("concept") &&
                    ((t.fxImage = new ba(
                      e.querySelector(".concept__image__photo"),
                      e.querySelector(".concept__image__viewport"),
                      !1
                    )),
                    (t.fxDelay = 500),
                    (t.fxImage.distortion = 1500));
                  e.classList.contains("features__section") &&
                    ((t.fxImage = new ba(
                      e.querySelector(".features__section__image__img"),
                      e.querySelector(".features__section__image__viewport"),
                      !1
                    )),
                    (t.fxImage.distortion = 1500));
                  e.classList.contains("eyecatch") &&
                    (t.fxImage = new ba(
                      e.querySelector(".eyecatch__image"),
                      e.querySelector(".eyecatch__viewport"),
                      !1
                    ));
                  e.classList.contains("staff__block") &&
                    ((t.fxImage = new ba(
                      e.querySelector(".staff__image__img"),
                      e.querySelector(".staff__image__viewport"),
                      !1
                    )),
                    (t.fxImage.distortion = 1500));
                })(e),
                e
              );
            }
          ),
          r = window.innerHeight / 2;
        function n() {
          e.forEach(function (t) {
            var e = t.dom.getBoundingClientRect();
            (e.top <= window.innerHeight - r || e.y <= 0) &&
              0 == t.appear &&
              (t.fxImage &&
                setTimeout(function () {
                  t.fxImage.initialTransit();
                }, t.fxDealy),
              t.dom.classList.add("appear"),
              (t.appear = !0));
          });
        }
        function i() {
          (r = window.innerHeight / 4), n();
        }
        window.addEventListener("scroll", n, !1),
          window.addEventListener("resize", i, !1),
          i();
      },
      Aa = r(186),
      Pa = r.n(Aa);
    function Ia(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    var Ca = (function () {
      function t() {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          this.init();
      }
      var e, r, n;
      return (
        (e = t),
        (r = [
          {
            key: "init",
            value: function () {
              var t = this;
              (this.header = new wa()),
                (this.firstview = new Sa()),
                (this.ScrollFx = new Oa()),
                (this.firstviewHero = new ba(
                  document.querySelector(".firstview__main"),
                  document.querySelector(".firstview__viewport"),
                  !0
                )),
                Pa()(
                  document.querySelectorAll("*"),
                  { background: !0 },
                  function () {
                    setTimeout(function () {
                      document.body.classList.add("open"),
                        setTimeout(function () {
                          return t.firstviewHero.init();
                        }, 1500);
                    }, 500);
                  }
                );
            },
          },
        ]) && Ia(e.prototype, r),
        n && Ia(e, n),
        t
      );
    })();
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        (window.isTouch = !1),
          (navigator.userAgent.indexOf("iPhone") > 0 ||
            navigator.userAgent.indexOf("iPod") > 0 ||
            navigator.userAgent.indexOf("iPad") > 0 ||
            navigator.userAgent.indexOf("Windows Phone") > 0 ||
            navigator.userAgent.indexOf("Android") > 0) &&
            ((window.isTouch = !0), document.body.classList.add("touch"));
        new Ca();
      },
      !1
    );
  },
]);
