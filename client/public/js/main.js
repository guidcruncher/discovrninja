! function(a, b) {
  "object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? exports.Handlebars = b() : a.Handlebars = b()
}(this, function() {
  return function(a) {
    function b(d) {
      if (c[d]) return c[d].exports;
      var e = c[d] = {
        exports: {},
        id: d,
        loaded: !1
      };
      return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
    }
    var c = {};
    return b.m = a, b.c = c, b.p = "", b(0)
  }([function(a, b, c) {
    "use strict";

    function d() {
      var a = r();
      return a.compile = function(b, c) {
        return k.compile(b, c, a)
      }, a.precompile = function(b, c) {
        return k.precompile(b, c, a)
      }, a.AST = i["default"], a.Compiler = k.Compiler, a.JavaScriptCompiler = m["default"], a.Parser = j.parser, a.parse = j.parse, a.parseWithoutProcessing = j.parseWithoutProcessing, a
    }
    var e = c(1)["default"];
    b.__esModule = !0;
    var f = c(2),
      g = e(f),
      h = c(84),
      i = e(h),
      j = c(85),
      k = c(90),
      l = c(91),
      m = e(l),
      n = c(88),
      o = e(n),
      p = c(83),
      q = e(p),
      r = g["default"].create,
      s = d();
    s.create = d, q["default"](s), s.Visitor = o["default"], s["default"] = s, b["default"] = s, a.exports = b["default"]
  }, function(a, b) {
    "use strict";
    b["default"] = function(a) {
      return a && a.__esModule ? a : {
        default: a
      }
    }, b.__esModule = !0
  }, function(a, b, c) {
    "use strict";

    function d() {
      var a = new h.HandlebarsEnvironment;
      return n.extend(a, h), a.SafeString = j["default"], a.Exception = l["default"], a.Utils = n, a.escapeExpression = n.escapeExpression, a.VM = p, a.template = function(b) {
        return p.template(b, a)
      }, a
    }
    var e = c(3)["default"],
      f = c(1)["default"];
    b.__esModule = !0;
    var g = c(4),
      h = e(g),
      i = c(77),
      j = f(i),
      k = c(6),
      l = f(k),
      m = c(5),
      n = e(m),
      o = c(78),
      p = e(o),
      q = c(83),
      r = f(q),
      s = d();
    s.create = d, r["default"](s), s["default"] = s, b["default"] = s, a.exports = b["default"]
  }, function(a, b) {
    "use strict";
    b["default"] = function(a) {
      if (a && a.__esModule) return a;
      var b = {};
      if (null != a)
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
      return b["default"] = a, b
    }, b.__esModule = !0
  }, function(a, b, c) {
    "use strict";

    function d(a, b, c) {
      this.helpers = a || {}, this.partials = b || {}, this.decorators = c || {}, i.registerDefaultHelpers(this), j.registerDefaultDecorators(this)
    }
    var e = c(1)["default"];
    b.__esModule = !0, b.HandlebarsEnvironment = d;
    var f = c(5),
      g = c(6),
      h = e(g),
      i = c(10),
      j = c(70),
      k = c(72),
      l = e(k),
      m = c(73),
      n = "4.7.8";
    b.VERSION = n;
    var o = 8;
    b.COMPILER_REVISION = o;
    var p = 7;
    b.LAST_COMPATIBLE_COMPILER_REVISION = p;
    var q = {
      1: "<= 1.0.rc.2",
      2: "== 1.0.0-rc.3",
      3: "== 1.0.0-rc.4",
      4: "== 1.x.x",
      5: "== 2.0.0-alpha.x",
      6: ">= 2.0.0-beta.1",
      7: ">= 4.0.0 <4.3.0",
      8: ">= 4.3.0"
    };
    b.REVISION_CHANGES = q;
    var r = "[object Object]";
    d.prototype = {
      constructor: d,
      logger: l["default"],
      log: l["default"].log,
      registerHelper: function(a, b) {
        if (f.toString.call(a) === r) {
          if (b) throw new h["default"]("Arg not supported with multiple helpers");
          f.extend(this.helpers, a)
        } else this.helpers[a] = b
      },
      unregisterHelper: function(a) {
        delete this.helpers[a]
      },
      registerPartial: function(a, b) {
        if (f.toString.call(a) === r) f.extend(this.partials, a);
        else {
          if ("undefined" == typeof b) throw new h["default"]('Attempting to register a partial called "' + a + '" as undefined');
          this.partials[a] = b
        }
      },
      unregisterPartial: function(a) {
        delete this.partials[a]
      },
      registerDecorator: function(a, b) {
        if (f.toString.call(a) === r) {
          if (b) throw new h["default"]("Arg not supported with multiple decorators");
          f.extend(this.decorators, a)
        } else this.decorators[a] = b
      },
      unregisterDecorator: function(a) {
        delete this.decorators[a]
      },
      resetLoggedPropertyAccesses: function() {
        m.resetLoggedProperties()
      }
    };
    var s = l["default"].log;
    b.log = s, b.createFrame = f.createFrame, b.logger = l["default"]
  }, function(a, b) {
    "use strict";

    function c(a) {
      return k[a]
    }

    function d(a) {
      for (var b = 1; b < arguments.length; b++)
        for (var c in arguments[b]) Object.prototype.hasOwnProperty.call(arguments[b], c) && (a[c] = arguments[b][c]);
      return a
    }

    function e(a, b) {
      for (var c = 0, d = a.length; c < d; c++)
        if (a[c] === b) return c;
      return -1
    }

    function f(a) {
      if ("string" != typeof a) {
        if (a && a.toHTML) return a.toHTML();
        if (null == a) return "";
        if (!a) return a + "";
        a = "" + a
      }
      return m.test(a) ? a.replace(l, c) : a
    }

    function g(a) {
      return !a && 0 !== a || !(!p(a) || 0 !== a.length)
    }

    function h(a) {
      var b = d({}, a);
      return b._parent = a, b
    }

    function i(a, b) {
      return a.path = b, a
    }

    function j(a, b) {
      return (a ? a + "." : "") + b
    }
    b.__esModule = !0, b.extend = d, b.indexOf = e, b.escapeExpression = f, b.isEmpty = g, b.createFrame = h, b.blockParams = i, b.appendContextPath = j;
    var k = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
        "=": "&#x3D;"
      },
      l = /[&<>"'`=]/g,
      m = /[&<>"'`=]/,
      n = Object.prototype.toString;
    b.toString = n;
    var o = function(a) {
      return "function" == typeof a
    };
    o(/x/) && (b.isFunction = o = function(a) {
      return "function" == typeof a && "[object Function]" === n.call(a)
    }), b.isFunction = o;
    var p = Array.isArray || function(a) {
      return !(!a || "object" != typeof a) && "[object Array]" === n.call(a)
    };
    b.isArray = p
  }, function(a, b, c) {
    "use strict";

    function d(a, b) {
      var c = b && b.loc,
        g = void 0,
        h = void 0,
        i = void 0,
        j = void 0;
      c && (g = c.start.line, h = c.end.line, i = c.start.column, j = c.end.column, a += " - " + g + ":" + i);
      for (var k = Error.prototype.constructor.call(this, a), l = 0; l < f.length; l++) this[f[l]] = k[f[l]];
      Error.captureStackTrace && Error.captureStackTrace(this, d);
      try {
        c && (this.lineNumber = g, this.endLineNumber = h, e ? (Object.defineProperty(this, "column", {
          value: i,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: j,
          enumerable: !0
        })) : (this.column = i, this.endColumn = j))
      } catch (m) {}
    }
    var e = c(7)["default"];
    b.__esModule = !0;
    var f = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    d.prototype = new Error, b["default"] = d, a.exports = b["default"]
  }, function(a, b, c) {
    a.exports = {
      default: c(8),
      __esModule: !0
    }
  }, function(a, b, c) {
    var d = c(9);
    a.exports = function(a, b, c) {
      return d.setDesc(a, b, c)
    }
  }, function(a, b) {
    var c = Object;
    a.exports = {
      create: c.create,
      getProto: c.getPrototypeOf,
      isEnum: {}.propertyIsEnumerable,
      getDesc: c.getOwnPropertyDescriptor,
      setDesc: c.defineProperty,
      setDescs: c.defineProperties,
      getKeys: c.keys,
      getNames: c.getOwnPropertyNames,
      getSymbols: c.getOwnPropertySymbols,
      each: [].forEach
    }
  }, function(a, b, c) {
    "use strict";

    function d(a) {
      h["default"](a), j["default"](a), l["default"](a), n["default"](a), p["default"](a), r["default"](a), t["default"](a)
    }

    function e(a, b, c) {
      a.helpers[b] && (a.hooks[b] = a.helpers[b], c || delete a.helpers[b])
    }
    var f = c(1)["default"];
    b.__esModule = !0, b.registerDefaultHelpers = d, b.moveHelperToHooks = e;
    var g = c(11),
      h = f(g),
      i = c(12),
      j = f(i),
      k = c(65),
      l = f(k),
      m = c(66),
      n = f(m),
      o = c(67),
      p = f(o),
      q = c(68),
      r = f(q),
      s = c(69),
      t = f(s)
  }, function(a, b, c) {
    "use strict";
    b.__esModule = !0;
    var d = c(5);
    b["default"] = function(a) {
      a.registerHelper("blockHelperMissing", function(b, c) {
        var e = c.inverse,
          f = c.fn;
        if (b === !0) return f(this);
        if (b === !1 || null == b) return e(this);
        if (d.isArray(b)) return b.length > 0 ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c)) : e(this);
        if (c.data && c.ids) {
          var g = d.createFrame(c.data);
          g.contextPath = d.appendContextPath(c.data.contextPath, c.name), c = {
            data: g
          }
        }
        return f(b, c)
      })
    }, a.exports = b["default"]
  }, function(a, b, c) {
    "use strict";
    var d = c(13)["default"],
      e = c(43)["default"],
      f = c(55)["default"],
      g = c(60)["default"],
      h = c(1)["default"];
    b.__esModule = !0;
    var i = c(5),
      j = c(6),
      k = h(j);
    b["default"] = function(a) {
      a.registerHelper("each", function(a, b) {
        function c(b, c, d) {
          n && (n.key = b, n.index = c, n.first = 0 === c, n.last = !!d, o && (n.contextPath = o + b)), m += h(a[b], {
            data: n,
            blockParams: i.blockParams([a[b], b], [o + b, null])
          })
        }
        if (!b) throw new k["default"]("Must pass iterator to #each");
        var h = b.fn,
          j = b.inverse,
          l = 0,
          m = "",
          n = void 0,
          o = void 0;
        if (b.data && b.ids && (o = i.appendContextPath(b.data.contextPath, b.ids[0]) + "."), i.isFunction(a) && (a = a.call(this)), b.data && (n = i.createFrame(b.data)), a && "object" == typeof a)
          if (i.isArray(a))
            for (var p = a.length; l < p; l++) l in a && c(l, l, l === a.length - 1);
          else if ("function" == typeof d && a[e]) {
          for (var q = [], r = f(a), s = r.next(); !s.done; s = r.next()) q.push(s.value);
          a = q;
          for (var p = a.length; l < p; l++) c(l, l, l === a.length - 1)
        } else ! function() {
          var b = void 0;
          g(a).forEach(function(a) {
            void 0 !== b && c(b, l - 1), b = a, l++
          }), void 0 !== b && c(b, l - 1, !0)
        }();
        return 0 === l && (m = j(this)), m
      })
    }, a.exports = b["default"]
  }, function(a, b, c) {
    a.exports = {
      default: c(14),
      __esModule: !0
    }
  }, function(a, b, c) {
    c(15), c(42), a.exports = c(21).Symbol
  }, function(a, b, c) {
    "use strict";
    var d = c(9),
      e = c(16),
      f = c(17),
      g = c(18),
      h = c(20),
      i = c(24),
      j = c(19),
      k = c(27),
      l = c(28),
      m = c(30),
      n = c(29),
      o = c(31),
      p = c(36),
      q = c(37),
      r = c(38),
      s = c(39),
      t = c(32),
      u = c(26),
      v = d.getDesc,
      w = d.setDesc,
      x = d.create,
      y = p.get,
      z = e.Symbol,
      A = e.JSON,
      B = A && A.stringify,
      C = !1,
      D = n("_hidden"),
      E = d.isEnum,
      F = k("symbol-registry"),
      G = k("symbols"),
      H = "function" == typeof z,
      I = Object.prototype,
      J = g && j(function() {
        return 7 != x(w({}, "a", {
          get: function() {
            return w(this, "a", {
              value: 7
            }).a
          }
        })).a
      }) ? function(a, b, c) {
        var d = v(I, b);
        d && delete I[b], w(a, b, c), d && a !== I && w(I, b, d)
      } : w,
      K = function(a) {
        var b = G[a] = x(z.prototype);
        return b._k = a, g && C && J(I, a, {
          configurable: !0,
          set: function(b) {
            f(this, D) && f(this[D], a) && (this[D][a] = !1), J(this, a, u(1, b))
          }
        }), b
      },
      L = function(a) {
        return "symbol" == typeof a
      },
      M = function(a, b, c) {
        return c && f(G, b) ? (c.enumerable ? (f(a, D) && a[D][b] && (a[D][b] = !1), c = x(c, {
          enumerable: u(0, !1)
        })) : (f(a, D) || w(a, D, u(1, {})), a[D][b] = !0), J(a, b, c)) : w(a, b, c)
      },
      N = function(a, b) {
        s(a);
        for (var c, d = q(b = t(b)), e = 0, f = d.length; f > e;) M(a, c = d[e++], b[c]);
        return a
      },
      O = function(a, b) {
        return void 0 === b ? x(a) : N(x(a), b)
      },
      P = function(a) {
        var b = E.call(this, a);
        return !(b || !f(this, a) || !f(G, a) || f(this, D) && this[D][a]) || b
      },
      Q = function(a, b) {
        var c = v(a = t(a), b);
        return !c || !f(G, b) || f(a, D) && a[D][b] || (c.enumerable = !0), c
      },
      R = function(a) {
        for (var b, c = y(t(a)), d = [], e = 0; c.length > e;) f(G, b = c[e++]) || b == D || d.push(b);
        return d
      },
      S = function(a) {
        for (var b, c = y(t(a)), d = [], e = 0; c.length > e;) f(G, b = c[e++]) && d.push(G[b]);
        return d
      },
      T = function(a) {
        if (void 0 !== a && !L(a)) {
          for (var b, c, d = [a], e = 1, f = arguments; f.length > e;) d.push(f[e++]);
          return b = d[1], "function" == typeof b && (c = b), !c && r(b) || (b = function(a, b) {
            if (c && (b = c.call(this, a, b)), !L(b)) return b
          }), d[1] = b, B.apply(A, d)
        }
      },
      U = j(function() {
        var a = z();
        return "[null]" != B([a]) || "{}" != B({
          a: a
        }) || "{}" != B(Object(a))
      });
    H || (z = function() {
      if (L(this)) throw TypeError("Symbol is not a constructor");
      return K(m(arguments.length > 0 ? arguments[0] : void 0))
    }, i(z.prototype, "toString", function() {
      return this._k
    }), L = function(a) {
      return a instanceof z
    }, d.create = O, d.isEnum = P, d.getDesc = Q, d.setDesc = M, d.setDescs = N, d.getNames = p.get = R, d.getSymbols = S, g && !c(41) && i(I, "propertyIsEnumerable", P, !0));
    var V = {
      for: function(a) {
        return f(F, a += "") ? F[a] : F[a] = z(a)
      },
      keyFor: function(a) {
        return o(F, a)
      },
      useSetter: function() {
        C = !0
      },
      useSimple: function() {
        C = !1
      }
    };
    d.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), function(a) {
      var b = n(a);
      V[a] = H ? b : K(b)
    }), C = !0, h(h.G + h.W, {
      Symbol: z
    }), h(h.S, "Symbol", V), h(h.S + h.F * !H, "Object", {
      create: O,
      defineProperty: M,
      defineProperties: N,
      getOwnPropertyDescriptor: Q,
      getOwnPropertyNames: R,
      getOwnPropertySymbols: S
    }), A && h(h.S + h.F * (!H || U), "JSON", {
      stringify: T
    }), l(z, "Symbol"), l(Math, "Math", !0), l(e.JSON, "JSON", !0)
  }, function(a, b) {
    var c = a.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = c)
  }, function(a, b) {
    var c = {}.hasOwnProperty;
    a.exports = function(a, b) {
      return c.call(a, b)
    }
  }, function(a, b, c) {
    a.exports = !c(19)(function() {
      return 7 != Object.defineProperty({}, "a", {
        get: function() {
          return 7
        }
      }).a
    })
  }, function(a, b) {
    a.exports = function(a) {
      try {
        return !!a()
      } catch (b) {
        return !0
      }
    }
  }, function(a, b, c) {
    var d = c(16),
      e = c(21),
      f = c(22),
      g = "prototype",
      h = function(a, b, c) {
        var i, j, k, l = a & h.F,
          m = a & h.G,
          n = a & h.S,
          o = a & h.P,
          p = a & h.B,
          q = a & h.W,
          r = m ? e : e[b] || (e[b] = {}),
          s = m ? d : n ? d[b] : (d[b] || {})[g];
        m && (c = b);
        for (i in c) j = !l && s && i in s, j && i in r || (k = j ? s[i] : c[i], r[i] = m && "function" != typeof s[i] ? c[i] : p && j ? f(k, d) : q && s[i] == k ? function(a) {
          var b = function(b) {
            return this instanceof a ? new a(b) : a(b)
          };
          return b[g] = a[g], b
        }(k) : o && "function" == typeof k ? f(Function.call, k) : k, o && ((r[g] || (r[g] = {}))[i] = k))
      };
    h.F = 1, h.G = 2, h.S = 4, h.P = 8, h.B = 16, h.W = 32, a.exports = h
  }, function(a, b) {
    var c = a.exports = {
      version: "1.2.6"
    };
    "number" == typeof __e && (__e = c)
  }, function(a, b, c) {
    var d = c(23);
    a.exports = function(a, b, c) {
      if (d(a), void 0 === b) return a;
      switch (c) {
        case 1:
          return function(c) {
            return a.call(b, c)
          };
        case 2:
          return function(c, d) {
            return a.call(b, c, d)
          };
        case 3:
          return function(c, d, e) {
            return a.call(b, c, d, e)
          }
      }
      return function() {
        return a.apply(b, arguments)
      }
    }
  }, function(a, b) {
    a.exports = function(a) {
      if ("function" != typeof a) throw TypeError(a + " is not a function!");
      return a
    }
  }, function(a, b, c) {
    a.exports = c(25)
  }, function(a, b, c) {
    var d = c(9),
      e = c(26);
    a.exports = c(18) ? function(a, b, c) {
      return d.setDesc(a, b, e(1, c))
    } : function(a, b, c) {
      return a[b] = c, a
    }
  }, function(a, b) {
    a.exports = function(a, b) {
      return {
        enumerable: !(1 & a),
        configurable: !(2 & a),
        writable: !(4 & a),
        value: b
      }
    }
  }, function(a, b, c) {
    var d = c(16),
      e = "__core-js_shared__",
      f = d[e] || (d[e] = {});
    a.exports = function(a) {
      return f[a] || (f[a] = {})
    }
  }, function(a, b, c) {
    var d = c(9).setDesc,
      e = c(17),
      f = c(29)("toStringTag");
    a.exports = function(a, b, c) {
      a && !e(a = c ? a : a.prototype, f) && d(a, f, {
        configurable: !0,
        value: b
      })
    }
  }, function(a, b, c) {
    var d = c(27)("wks"),
      e = c(30),
      f = c(16).Symbol;
    a.exports = function(a) {
      return d[a] || (d[a] = f && f[a] || (f || e)("Symbol." + a))
    }
  }, function(a, b) {
    var c = 0,
      d = Math.random();
    a.exports = function(a) {
      return "Symbol(".concat(void 0 === a ? "" : a, ")_", (++c + d).toString(36))
    }
  }, function(a, b, c) {
    var d = c(9),
      e = c(32);
    a.exports = function(a, b) {
      for (var c, f = e(a), g = d.getKeys(f), h = g.length, i = 0; h > i;)
        if (f[c = g[i++]] === b) return c
    }
  }, function(a, b, c) {
    var d = c(33),
      e = c(35);
    a.exports = function(a) {
      return d(e(a))
    }
  }, function(a, b, c) {
    var d = c(34);
    a.exports = Object("z").propertyIsEnumerable(0) ? Object : function(a) {
      return "String" == d(a) ? a.split("") : Object(a)
    }
  }, function(a, b) {
    var c = {}.toString;
    a.exports = function(a) {
      return c.call(a).slice(8, -1)
    }
  }, function(a, b) {
    a.exports = function(a) {
      if (void 0 == a) throw TypeError("Can't call method on  " + a);
      return a
    }
  }, function(a, b, c) {
    var d = c(32),
      e = c(9).getNames,
      f = {}.toString,
      g = "object" == typeof window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
      h = function(a) {
        try {
          return e(a)
        } catch (b) {
          return g.slice()
        }
      };
    a.exports.get = function(a) {
      return g && "[object Window]" == f.call(a) ? h(a) : e(d(a))
    }
  }, function(a, b, c) {
    var d = c(9);
    a.exports = function(a) {
      var b = d.getKeys(a),
        c = d.getSymbols;
      if (c)
        for (var e, f = c(a), g = d.isEnum, h = 0; f.length > h;) g.call(a, e = f[h++]) && b.push(e);
      return b
    }
  }, function(a, b, c) {
    var d = c(34);
    a.exports = Array.isArray || function(a) {
      return "Array" == d(a)
    }
  }, function(a, b, c) {
    var d = c(40);
    a.exports = function(a) {
      if (!d(a)) throw TypeError(a + " is not an object!");
      return a
    }
  }, function(a, b) {
    a.exports = function(a) {
      return "object" == typeof a ? null !== a : "function" == typeof a
    }
  }, function(a, b) {
    a.exports = !0
  }, function(a, b) {}, function(a, b, c) {
    a.exports = {
      default: c(44),
      __esModule: !0
    }
  }, function(a, b, c) {
    c(45), c(51), a.exports = c(29)("iterator")
  }, function(a, b, c) {
    "use strict";
    var d = c(46)(!0);
    c(48)(String, "String", function(a) {
      this._t = String(a), this._i = 0
    }, function() {
      var a, b = this._t,
        c = this._i;
      return c >= b.length ? {
        value: void 0,
        done: !0
      } : (a = d(b, c), this._i += a.length, {
        value: a,
        done: !1
      })
    })
  }, function(a, b, c) {
    var d = c(47),
      e = c(35);
    a.exports = function(a) {
      return function(b, c) {
        var f, g, h = String(e(b)),
          i = d(c),
          j = h.length;
        return i < 0 || i >= j ? a ? "" : void 0 : (f = h.charCodeAt(i), f < 55296 || f > 56319 || i + 1 === j || (g = h.charCodeAt(i + 1)) < 56320 || g > 57343 ? a ? h.charAt(i) : f : a ? h.slice(i, i + 2) : (f - 55296 << 10) + (g - 56320) + 65536)
      }
    }
  }, function(a, b) {
    var c = Math.ceil,
      d = Math.floor;
    a.exports = function(a) {
      return isNaN(a = +a) ? 0 : (a > 0 ? d : c)(a)
    }
  }, function(a, b, c) {
    "use strict";
    var d = c(41),
      e = c(20),
      f = c(24),
      g = c(25),
      h = c(17),
      i = c(49),
      j = c(50),
      k = c(28),
      l = c(9).getProto,
      m = c(29)("iterator"),
      n = !([].keys && "next" in [].keys()),
      o = "@@iterator",
      p = "keys",
      q = "values",
      r = function() {
        return this
      };
    a.exports = function(a, b, c, s, t, u, v) {
      j(c, b, s);
      var w, x, y = function(a) {
          if (!n && a in C) return C[a];
          switch (a) {
            case p:
              return function() {
                return new c(this, a)
              };
            case q:
              return function() {
                return new c(this, a)
              }
          }
          return function() {
            return new c(this, a)
          }
        },
        z = b + " Iterator",
        A = t == q,
        B = !1,
        C = a.prototype,
        D = C[m] || C[o] || t && C[t],
        E = D || y(t);
      if (D) {
        var F = l(E.call(new a));
        k(F, z, !0), !d && h(C, o) && g(F, m, r), A && D.name !== q && (B = !0, E = function() {
          return D.call(this)
        })
      }
      if (d && !v || !n && !B && C[m] || g(C, m, E), i[b] = E, i[z] = r, t)
        if (w = {
            values: A ? E : y(q),
            keys: u ? E : y(p),
            entries: A ? y("entries") : E
          }, v)
          for (x in w) x in C || f(C, x, w[x]);
        else e(e.P + e.F * (n || B), b, w);
      return w
    }
  }, function(a, b) {
    a.exports = {}
  }, function(a, b, c) {
    "use strict";
    var d = c(9),
      e = c(26),
      f = c(28),
      g = {};
    c(25)(g, c(29)("iterator"), function() {
      return this
    }), a.exports = function(a, b, c) {
      a.prototype = d.create(g, {
        next: e(1, c)
      }), f(a, b + " Iterator")
    }
  }, function(a, b, c) {
    c(52);
    var d = c(49);
    d.NodeList = d.HTMLCollection = d.Array
  }, function(a, b, c) {
    "use strict";
    var d = c(53),
      e = c(54),
      f = c(49),
      g = c(32);
    a.exports = c(48)(Array, "Array", function(a, b) {
      this._t = g(a), this._i = 0, this._k = b
    }, function() {
      var a = this._t,
        b = this._k,
        c = this._i++;
      return !a || c >= a.length ? (this._t = void 0, e(1)) : "keys" == b ? e(0, c) : "values" == b ? e(0, a[c]) : e(0, [c, a[c]])
    }, "values"), f.Arguments = f.Array, d("keys"), d("values"), d("entries")
  }, function(a, b) {
    a.exports = function() {}
  }, function(a, b) {
    a.exports = function(a, b) {
      return {
        value: b,
        done: !!a
      }
    }
  }, function(a, b, c) {
    a.exports = {
      default: c(56),
      __esModule: !0
    }
  }, function(a, b, c) {
    c(51), c(45), a.exports = c(57)
  }, function(a, b, c) {
    var d = c(39),
      e = c(58);
    a.exports = c(21).getIterator = function(a) {
      var b = e(a);
      if ("function" != typeof b) throw TypeError(a + " is not iterable!");
      return d(b.call(a))
    }
  }, function(a, b, c) {
    var d = c(59),
      e = c(29)("iterator"),
      f = c(49);
    a.exports = c(21).getIteratorMethod = function(a) {
      if (void 0 != a) return a[e] || a["@@iterator"] || f[d(a)]
    }
  }, function(a, b, c) {
    var d = c(34),
      e = c(29)("toStringTag"),
      f = "Arguments" == d(function() {
        return arguments
      }());
    a.exports = function(a) {
      var b, c, g;
      return void 0 === a ? "Undefined" : null === a ? "Null" : "string" == typeof(c = (b = Object(a))[e]) ? c : f ? d(b) : "Object" == (g = d(b)) && "function" == typeof b.callee ? "Arguments" : g
    }
  }, function(a, b, c) {
    a.exports = {
      default: c(61),
      __esModule: !0
    }
  }, function(a, b, c) {
    c(62), a.exports = c(21).Object.keys
  }, function(a, b, c) {
    var d = c(63);
    c(64)("keys", function(a) {
      return function(b) {
        return a(d(b))
      }
    })
  }, function(a, b, c) {
    var d = c(35);
    a.exports = function(a) {
      return Object(d(a))
    }
  }, function(a, b, c) {
    var d = c(20),
      e = c(21),
      f = c(19);
    a.exports = function(a, b) {
      var c = (e.Object || {})[a] || Object[a],
        g = {};
      g[a] = b(c), d(d.S + d.F * f(function() {
        c(1)
      }), "Object", g)
    }
  }, function(a, b, c) {
    "use strict";
    var d = c(1)["default"];
    b.__esModule = !0;
    var e = c(6),
      f = d(e);
    b["default"] = function(a) {
      a.registerHelper("helperMissing", function() {
        if (1 !== arguments.length) throw new f["default"]('Missing helper: "' + arguments[arguments.length - 1].name + '"')
      })
    }, a.exports = b["default"]
  }, function(a, b, c) {
    "use strict";
    var d = c(1)["default"];
    b.__esModule = !0;
    var e = c(5),
      f = c(6),
      g = d(f);
    b["default"] = function(a) {
      a.registerHelper("if", function(a, b) {
        if (2 != arguments.length) throw new g["default"]("#if requires exactly one argument");
        return e.isFunction(a) && (a = a.call(this)), !b.hash.includeZero && !a || e.isEmpty(a) ? b.inverse(this) : b.fn(this)
      }), a.registerHelper("unless", function(b, c) {
        if (2 != arguments.length) throw new g["default"]("#unless requires exactly one argument");
        return a.helpers["if"].call(this, b, {
          fn: c.inverse,
          inverse: c.fn,
          hash: c.hash
        })
      })
    }, a.exports = b["default"]
  }, function(a, b) {
    "use strict";
    b.__esModule = !0, b["default"] = function(a) {
      a.registerHelper("log", function() {
        for (var b = [void 0], c = arguments[arguments.length - 1], d = 0; d < arguments.length - 1; d++) b.push(arguments[d]);
        var e = 1;
        null != c.hash.level ? e = c.hash.level : c.data && null != c.data.level && (e = c.data.level), b[0] = e, a.log.apply(a, b)
      })
    }, a.exports = b["default"]
  }, function(a, b) {
    "use strict";
    b.__esModule = !0, b["default"] = function(a) {
      a.registerHelper("lookup", function(a, b, c) {
        return a ? c.lookupProperty(a, b) : a
      })
    }, a.exports = b["default"]
  }, function(a, b, c) {
    "use strict";
    var d = c(1)["default"];
    b.__esModule = !0;
    var e = c(5),
      f = c(6),
      g = d(f);
    b["default"] = function(a) {
      a.registerHelper("with", function(a, b) {
        if (2 != arguments.length) throw new g["default"]("#with requires exactly one argument");
        e.isFunction(a) && (a = a.call(this));
        var c = b.fn;
        if (e.isEmpty(a)) return b.inverse(this);
        var d = b.data;
        return b.data && b.ids && (d = e.createFrame(b.data), d.contextPath = e.appendContextPath(b.data.contextPath, b.ids[0])), c(a, {
          data: d,
          blockParams: e.blockParams([a], [d && d.contextPath])
        })
      })
    }, a.exports = b["default"]
  }, function(a, b, c) {
    "use strict";

    function d(a) {
      g["default"](a)
    }
    var e = c(1)["default"];
    b.__esModule = !0, b.registerDefaultDecorators = d;
    var f = c(71),
      g = e(f)
  }, function(a, b, c) {
    "use strict";
    b.__esModule = !0;
    var d = c(5);
    b["default"] = function(a) {
      a.registerDecorator("inline", function(a, b, c, e) {
        var f = a;
        return b.partials || (b.partials = {}, f = function(e, f) {
          var g = c.partials;
          c.partials = d.extend({}, g, b.partials);
          var h = a(e, f);
          return c.partials = g, h
        }), b.partials[e.args[0]] = e.fn, f
      })
    }, a.exports = b["default"]
  }, function(a, b, c) {
    "use strict";
    b.__esModule = !0;
    var d = c(5),
      e = {
        methodMap: ["debug", "info", "warn", "error"],
        level: "info",
        lookupLevel: function(a) {
          if ("string" == typeof a) {
            var b = d.indexOf(e.methodMap, a.toLowerCase());
            a = b >= 0 ? b : parseInt(a, 10)
          }
          return a
        },
        log: function(a) {
          if (a = e.lookupLevel(a), "undefined" != typeof console && e.lookupLevel(e.level) <= a) {
            var b = e.methodMap[a];
            console[b] || (b = "log");
            for (var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++) d[f - 1] = arguments[f];
            console[b].apply(console, d)
          }
        }
      };
    b["default"] = e, a.exports = b["default"]
  }, function(a, b, c) {
    "use strict";

    function d(a) {
      var b = i(null);
      b.constructor = !1, b.__defineGetter__ = !1, b.__defineSetter__ = !1, b.__lookupGetter__ = !1;
      var c = i(null);
      return c.__proto__ = !1, {
        properties: {
          whitelist: l.createNewLookupObject(c, a.allowedProtoProperties),
          defaultValue: a.allowProtoPropertiesByDefault
        },
        methods: {
          whitelist: l.createNewLookupObject(b, a.allowedProtoMethods),
          defaultValue: a.allowProtoMethodsByDefault
        }
      }
    }

    function e(a, b, c) {
      return "function" == typeof a ? f(b.methods, c) : f(b.properties, c)
    }

    function f(a, b) {
      return void 0 !== a.whitelist[b] ? a.whitelist[b] === !0 : void 0 !== a.defaultValue ? a.defaultValue : (g(b), !1)
    }

    function g(a) {
      o[a] !== !0 && (o[a] = !0, n["default"].log("error", 'Handlebars: Access has been denied to resolve the property "' + a + '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))
    }

    function h() {
      j(o).forEach(function(a) {
        delete o[a]
      })
    }
    var i = c(74)["default"],
      j = c(60)["default"],
      k = c(1)["default"];
    b.__esModule = !0, b.createProtoAccessControl = d, b.resultIsAllowed = e, b.resetLoggedProperties = h;
    var l = c(76),
      m = c(72),
      n = k(m),
      o = i(null)
  }, function(a, b, c) {
    a.exports = {
      default: c(75),
      __esModule: !0
    }
  }, function(a, b, c) {
    var d = c(9);
    a.exports = function(a, b) {
      return d.create(a, b)
    }
  }, function(a, b, c) {
    "use strict";

    function d() {
      for (var a = arguments.length, b = Array(a), c = 0; c < a; c++) b[c] = arguments[c];
      return f.extend.apply(void 0, [e(null)].concat(b))
    }
    var e = c(74)["default"];
    b.__esModule = !0, b.createNewLookupObject = d;
    var f = c(5)
  }, function(a, b) {
    "use strict";

    function c(a) {
      this.string = a
    }
    b.__esModule = !0, c.prototype.toString = c.prototype.toHTML = function() {
      return "" + this.string
    }, b["default"] = c, a.exports = b["default"]
  }, function(a, b, c) {
    "use strict";

    function d(a) {
      var b = a && a[0] || 1,
        c = v.COMPILER_REVISION;
      if (!(b >= v.LAST_COMPATIBLE_COMPILER_REVISION && b <= v.COMPILER_REVISION)) {
        if (b < v.LAST_COMPATIBLE_COMPILER_REVISION) {
          var d = v.REVISION_CHANGES[c],
            e = v.REVISION_CHANGES[b];
          throw new u["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
        }
        throw new u["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
      }
    }

    function e(a, b) {
      function c(c, d, e) {
        e.hash && (d = s.extend({}, d, e.hash), e.ids && (e.ids[0] = !0)), c = b.VM.resolvePartial.call(this, c, d, e);
        var f = s.extend({}, e, {
            hooks: this.hooks,
            protoAccessControl: this.protoAccessControl
          }),
          g = b.VM.invokePartial.call(this, c, d, f);
        if (null == g && b.compile && (e.partials[e.name] = b.compile(c, a.compilerOptions, b), g = e.partials[e.name](d, f)), null != g) {
          if (e.indent) {
            for (var h = g.split("\n"), i = 0, j = h.length; i < j && (h[i] || i + 1 !== j); i++) h[i] = e.indent + h[i];
            g = h.join("\n")
          }
          return g
        }
        throw new u["default"]("The partial " + e.name + " could not be compiled when running in runtime-only mode")
      }

      function d(b) {
        function c(b) {
          return "" + a.main(g, b, g.helpers, g.partials, f, i, h)
        }
        var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
          f = e.data;
        d._setup(e), !e.partial && a.useData && (f = j(b, f));
        var h = void 0,
          i = a.useBlockParams ? [] : void 0;
        return a.useDepths && (h = e.depths ? b != e.depths[0] ? [b].concat(e.depths) : e.depths : [b]), (c = k(a.main, c, g, e.depths || [], f, i))(b, e)
      }
      if (!b) throw new u["default"]("No environment passed to template");
      if (!a || !a.main) throw new u["default"]("Unknown template object: " + typeof a);
      a.main.decorator = a.main_d, b.VM.checkRevision(a.compiler);
      var e = a.compiler && 7 === a.compiler[0],
        g = {
          strict: function(a, b, c) {
            if (!(a && b in a)) throw new u["default"]('"' + b + '" not defined in ' + a, {
              loc: c
            });
            return g.lookupProperty(a, b)
          },
          lookupProperty: function(a, b) {
            var c = a[b];
            return null == c ? c : Object.prototype.hasOwnProperty.call(a, b) ? c : y.resultIsAllowed(c, g.protoAccessControl, b) ? c : void 0
          },
          lookup: function(a, b) {
            for (var c = a.length, d = 0; d < c; d++) {
              var e = a[d] && g.lookupProperty(a[d], b);
              if (null != e) return a[d][b]
            }
          },
          lambda: function(a, b) {
            return "function" == typeof a ? a.call(b) : a
          },
          escapeExpression: s.escapeExpression,
          invokePartial: c,
          fn: function(b) {
            var c = a[b];
            return c.decorator = a[b + "_d"], c
          },
          programs: [],
          program: function(a, b, c, d, e) {
            var g = this.programs[a],
              h = this.fn(a);
            return b || e || d || c ? g = f(this, a, h, b, c, d, e) : g || (g = this.programs[a] = f(this, a, h)), g
          },
          data: function(a, b) {
            for (; a && b--;) a = a._parent;
            return a
          },
          mergeIfNeeded: function(a, b) {
            var c = a || b;
            return a && b && a !== b && (c = s.extend({}, b, a)), c
          },
          nullContext: n({}),
          noop: b.VM.noop,
          compilerInfo: a.compiler
        };
      return d.isTop = !0, d._setup = function(c) {
        if (c.partial) g.protoAccessControl = c.protoAccessControl, g.helpers = c.helpers, g.partials = c.partials, g.decorators = c.decorators, g.hooks = c.hooks;
        else {
          var d = s.extend({}, b.helpers, c.helpers);
          l(d, g), g.helpers = d, a.usePartial && (g.partials = g.mergeIfNeeded(c.partials, b.partials)), (a.usePartial || a.useDecorators) && (g.decorators = s.extend({}, b.decorators, c.decorators)), g.hooks = {}, g.protoAccessControl = y.createProtoAccessControl(c);
          var f = c.allowCallsToHelperMissing || e;
          w.moveHelperToHooks(g, "helperMissing", f), w.moveHelperToHooks(g, "blockHelperMissing", f)
        }
      }, d._child = function(b, c, d, e) {
        if (a.useBlockParams && !d) throw new u["default"]("must pass block params");
        if (a.useDepths && !e) throw new u["default"]("must pass parent depths");
        return f(g, b, a[b], c, 0, d, e)
      }, d
    }

    function f(a, b, c, d, e, f, g) {
      function h(b) {
        var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
          h = g;
        return !g || b == g[0] || b === a.nullContext && null === g[0] || (h = [b].concat(g)), c(a, b, a.helpers, a.partials, e.data || d, f && [e.blockParams].concat(f), h)
      }
      return h = k(c, h, a, g, d, f), h.program = b, h.depth = g ? g.length : 0, h.blockParams = e || 0, h
    }

    function g(a, b, c) {
      return a ? a.call || c.name || (c.name = a, a = c.partials[a]) : a = "@partial-block" === c.name ? c.data["partial-block"] : c.partials[c.name], a
    }

    function h(a, b, c) {
      var d = c.data && c.data["partial-block"];
      c.partial = !0, c.ids && (c.data.contextPath = c.ids[0] || c.data.contextPath);
      var e = void 0;
      if (c.fn && c.fn !== i && ! function() {
          c.data = v.createFrame(c.data);
          var a = c.fn;
          e = c.data["partial-block"] = function(b) {
            var c = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
            return c.data = v.createFrame(c.data), c.data["partial-block"] = d, a(b, c)
          }, a.partials && (c.partials = s.extend({}, c.partials, a.partials))
        }(), void 0 === a && e && (a = e), void 0 === a) throw new u["default"]("The partial " + c.name + " could not be found");
      if (a instanceof Function) return a(b, c)
    }

    function i() {
      return ""
    }

    function j(a, b) {
      return b && "root" in b || (b = b ? v.createFrame(b) : {}, b.root = a), b
    }

    function k(a, b, c, d, e, f) {
      if (a.decorator) {
        var g = {};
        b = a.decorator(b, g, c, d && d[0], e, f, d), s.extend(b, g)
      }
      return b
    }

    function l(a, b) {
      o(a).forEach(function(c) {
        var d = a[c];
        a[c] = m(d, b)
      })
    }

    function m(a, b) {
      var c = b.lookupProperty;
      return x.wrapHelper(a, function(a) {
        return s.extend({
          lookupProperty: c
        }, a)
      })
    }
    var n = c(79)["default"],
      o = c(60)["default"],
      p = c(3)["default"],
      q = c(1)["default"];
    b.__esModule = !0, b.checkRevision = d, b.template = e, b.wrapProgram = f, b.resolvePartial = g, b.invokePartial = h, b.noop = i;
    var r = c(5),
      s = p(r),
      t = c(6),
      u = q(t),
      v = c(4),
      w = c(10),
      x = c(82),
      y = c(73)
  }, function(a, b, c) {
    a.exports = {
      default: c(80),
      __esModule: !0
    }
  }, function(a, b, c) {
    c(81), a.exports = c(21).Object.seal
  }, function(a, b, c) {
    var d = c(40);
    c(64)("seal", function(a) {
      return function(b) {
        return a && d(b) ? a(b) : b
      }
    })
  }, function(a, b) {
    "use strict";

    function c(a, b) {
      if ("function" != typeof a) return a;
      var c = function() {
        var c = arguments[arguments.length - 1];
        return arguments[arguments.length - 1] = b(c), a.apply(this, arguments)
      };
      return c
    }
    b.__esModule = !0, b.wrapHelper = c
  }, function(a, b) {
    "use strict";
    b.__esModule = !0, b["default"] = function(a) {
      ! function() {
        "object" != typeof globalThis && (Object.prototype.__defineGetter__("__magic__", function() {
          return this
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__)
      }();
      var b = globalThis.Handlebars;
      a.noConflict = function() {
        return globalThis.Handlebars === a && (globalThis.Handlebars = b), a
      }
    }, a.exports = b["default"]
  }, function(a, b) {
    "use strict";
    b.__esModule = !0;
    var c = {
      helpers: {
        helperExpression: function(a) {
          return "SubExpression" === a.type || ("MustacheStatement" === a.type || "BlockStatement" === a.type) && !!(a.params && a.params.length || a.hash)
        },
        scopedId: function(a) {
          return /^\.|this\b/.test(a.original)
        },
        simpleId: function(a) {
          return 1 === a.parts.length && !c.helpers.scopedId(a) && !a.depth
        }
      }
    };
    b["default"] = c, a.exports = b["default"]
  }, function(a, b, c) {
    "use strict";

    function d(a, b) {
      if ("Program" === a.type) return a;
      i["default"].yy = o, o.locInfo = function(a) {
        return new o.SourceLocation(b && b.srcName, a)
      };
      var c = i["default"].parse(a);
      return c
    }

    function e(a, b) {
      var c = d(a, b),
        e = new k["default"](b);
      return e.accept(c)
    }
    var f = c(1)["default"],
      g = c(3)["default"];
    b.__esModule = !0, b.parseWithoutProcessing = d, b.parse = e;
    var h = c(86),
      i = f(h),
      j = c(87),
      k = f(j),
      l = c(89),
      m = g(l),
      n = c(5);
    b.parser = i["default"];
    var o = {};
    n.extend(o, m)
  }, function(a, b) {
    "use strict";
    b.__esModule = !0;
    var c = function() {
      function a() {
        this.yy = {}
      }
      var b = {
          trace: function() {},
          yy: {},
          symbols_: {
            error: 2,
            root: 3,
            program: 4,
            EOF: 5,
            program_repetition0: 6,
            statement: 7,
            mustache: 8,
            block: 9,
            rawBlock: 10,
            partial: 11,
            partialBlock: 12,
            content: 13,
            COMMENT: 14,
            CONTENT: 15,
            openRawBlock: 16,
            rawBlock_repetition0: 17,
            END_RAW_BLOCK: 18,
            OPEN_RAW_BLOCK: 19,
            helperName: 20,
            openRawBlock_repetition0: 21,
            openRawBlock_option0: 22,
            CLOSE_RAW_BLOCK: 23,
            openBlock: 24,
            block_option0: 25,
            closeBlock: 26,
            openInverse: 27,
            block_option1: 28,
            OPEN_BLOCK: 29,
            openBlock_repetition0: 30,
            openBlock_option0: 31,
            openBlock_option1: 32,
            CLOSE: 33,
            OPEN_INVERSE: 34,
            openInverse_repetition0: 35,
            openInverse_option0: 36,
            openInverse_option1: 37,
            openInverseChain: 38,
            OPEN_INVERSE_CHAIN: 39,
            openInverseChain_repetition0: 40,
            openInverseChain_option0: 41,
            openInverseChain_option1: 42,
            inverseAndProgram: 43,
            INVERSE: 44,
            inverseChain: 45,
            inverseChain_option0: 46,
            OPEN_ENDBLOCK: 47,
            OPEN: 48,
            mustache_repetition0: 49,
            mustache_option0: 50,
            OPEN_UNESCAPED: 51,
            mustache_repetition1: 52,
            mustache_option1: 53,
            CLOSE_UNESCAPED: 54,
            OPEN_PARTIAL: 55,
            partialName: 56,
            partial_repetition0: 57,
            partial_option0: 58,
            openPartialBlock: 59,
            OPEN_PARTIAL_BLOCK: 60,
            openPartialBlock_repetition0: 61,
            openPartialBlock_option0: 62,
            param: 63,
            sexpr: 64,
            OPEN_SEXPR: 65,
            sexpr_repetition0: 66,
            sexpr_option0: 67,
            CLOSE_SEXPR: 68,
            hash: 69,
            hash_repetition_plus0: 70,
            hashSegment: 71,
            ID: 72,
            EQUALS: 73,
            blockParams: 74,
            OPEN_BLOCK_PARAMS: 75,
            blockParams_repetition_plus0: 76,
            CLOSE_BLOCK_PARAMS: 77,
            path: 78,
            dataName: 79,
            STRING: 80,
            NUMBER: 81,
            BOOLEAN: 82,
            UNDEFINED: 83,
            NULL: 84,
            DATA: 85,
            pathSegments: 86,
            SEP: 87,
            $accept: 0,
            $end: 1
          },
          terminals_: {
            2: "error",
            5: "EOF",
            14: "COMMENT",
            15: "CONTENT",
            18: "END_RAW_BLOCK",
            19: "OPEN_RAW_BLOCK",
            23: "CLOSE_RAW_BLOCK",
            29: "OPEN_BLOCK",
            33: "CLOSE",
            34: "OPEN_INVERSE",
            39: "OPEN_INVERSE_CHAIN",
            44: "INVERSE",
            47: "OPEN_ENDBLOCK",
            48: "OPEN",
            51: "OPEN_UNESCAPED",
            54: "CLOSE_UNESCAPED",
            55: "OPEN_PARTIAL",
            60: "OPEN_PARTIAL_BLOCK",
            65: "OPEN_SEXPR",
            68: "CLOSE_SEXPR",
            72: "ID",
            73: "EQUALS",
            75: "OPEN_BLOCK_PARAMS",
            77: "CLOSE_BLOCK_PARAMS",
            80: "STRING",
            81: "NUMBER",
            82: "BOOLEAN",
            83: "UNDEFINED",
            84: "NULL",
            85: "DATA",
            87: "SEP"
          },
          productions_: [0, [3, 2],
            [4, 1],
            [7, 1],
            [7, 1],
            [7, 1],
            [7, 1],
            [7, 1],
            [7, 1],
            [7, 1],
            [13, 1],
            [10, 3],
            [16, 5],
            [9, 4],
            [9, 4],
            [24, 6],
            [27, 6],
            [38, 6],
            [43, 2],
            [45, 3],
            [45, 1],
            [26, 3],
            [8, 5],
            [8, 5],
            [11, 5],
            [12, 3],
            [59, 5],
            [63, 1],
            [63, 1],
            [64, 5],
            [69, 1],
            [71, 3],
            [74, 3],
            [20, 1],
            [20, 1],
            [20, 1],
            [20, 1],
            [20, 1],
            [20, 1],
            [20, 1],
            [56, 1],
            [56, 1],
            [79, 2],
            [78, 1],
            [86, 3],
            [86, 1],
            [6, 0],
            [6, 2],
            [17, 0],
            [17, 2],
            [21, 0],
            [21, 2],
            [22, 0],
            [22, 1],
            [25, 0],
            [25, 1],
            [28, 0],
            [28, 1],
            [30, 0],
            [30, 2],
            [31, 0],
            [31, 1],
            [32, 0],
            [32, 1],
            [35, 0],
            [35, 2],
            [36, 0],
            [36, 1],
            [37, 0],
            [37, 1],
            [40, 0],
            [40, 2],
            [41, 0],
            [41, 1],
            [42, 0],
            [42, 1],
            [46, 0],
            [46, 1],
            [49, 0],
            [49, 2],
            [50, 0],
            [50, 1],
            [52, 0],
            [52, 2],
            [53, 0],
            [53, 1],
            [57, 0],
            [57, 2],
            [58, 0],
            [58, 1],
            [61, 0],
            [61, 2],
            [62, 0],
            [62, 1],
            [66, 0],
            [66, 2],
            [67, 0],
            [67, 1],
            [70, 1],
            [70, 2],
            [76, 1],
            [76, 2]
          ],
          performAction: function(a, b, c, d, e, f, g) {
            var h = f.length - 1;
            switch (e) {
              case 1:
                return f[h - 1];
              case 2:
                this.$ = d.prepareProgram(f[h]);
                break;
              case 3:
                this.$ = f[h];
                break;
              case 4:
                this.$ = f[h];
                break;
              case 5:
                this.$ = f[h];
                break;
              case 6:
                this.$ = f[h];
                break;
              case 7:
                this.$ = f[h];
                break;
              case 8:
                this.$ = f[h];
                break;
              case 9:
                this.$ = {
                  type: "CommentStatement",
                  value: d.stripComment(f[h]),
                  strip: d.stripFlags(f[h], f[h]),
                  loc: d.locInfo(this._$)
                };
                break;
              case 10:
                this.$ = {
                  type: "ContentStatement",
                  original: f[h],
                  value: f[h],
                  loc: d.locInfo(this._$)
                };
                break;
              case 11:
                this.$ = d.prepareRawBlock(f[h - 2], f[h - 1], f[h], this._$);
                break;
              case 12:
                this.$ = {
                  path: f[h - 3],
                  params: f[h - 2],
                  hash: f[h - 1]
                };
                break;
              case 13:
                this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !1, this._$);
                break;
              case 14:
                this.$ = d.prepareBlock(f[h - 3], f[h - 2], f[h - 1], f[h], !0, this._$);
                break;
              case 15:
                this.$ = {
                  open: f[h - 5],
                  path: f[h - 4],
                  params: f[h - 3],
                  hash: f[h - 2],
                  blockParams: f[h - 1],
                  strip: d.stripFlags(f[h - 5], f[h])
                };
                break;
              case 16:
                this.$ = {
                  path: f[h - 4],
                  params: f[h - 3],
                  hash: f[h - 2],
                  blockParams: f[h - 1],
                  strip: d.stripFlags(f[h - 5], f[h])
                };
                break;
              case 17:
                this.$ = {
                  path: f[h - 4],
                  params: f[h - 3],
                  hash: f[h - 2],
                  blockParams: f[h - 1],
                  strip: d.stripFlags(f[h - 5], f[h])
                };
                break;
              case 18:
                this.$ = {
                  strip: d.stripFlags(f[h - 1], f[h - 1]),
                  program: f[h]
                };
                break;
              case 19:
                var i = d.prepareBlock(f[h - 2], f[h - 1], f[h], f[h], !1, this._$),
                  j = d.prepareProgram([i], f[h - 1].loc);
                j.chained = !0, this.$ = {
                  strip: f[h - 2].strip,
                  program: j,
                  chain: !0
                };
                break;
              case 20:
                this.$ = f[h];
                break;
              case 21:
                this.$ = {
                  path: f[h - 1],
                  strip: d.stripFlags(f[h - 2], f[h])
                };
                break;
              case 22:
                this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                break;
              case 23:
                this.$ = d.prepareMustache(f[h - 3], f[h - 2], f[h - 1], f[h - 4], d.stripFlags(f[h - 4], f[h]), this._$);
                break;
              case 24:
                this.$ = {
                  type: "PartialStatement",
                  name: f[h - 3],
                  params: f[h - 2],
                  hash: f[h - 1],
                  indent: "",
                  strip: d.stripFlags(f[h - 4], f[h]),
                  loc: d.locInfo(this._$)
                };
                break;
              case 25:
                this.$ = d.preparePartialBlock(f[h - 2], f[h - 1], f[h], this._$);
                break;
              case 26:
                this.$ = {
                  path: f[h - 3],
                  params: f[h - 2],
                  hash: f[h - 1],
                  strip: d.stripFlags(f[h - 4], f[h])
                };
                break;
              case 27:
                this.$ = f[h];
                break;
              case 28:
                this.$ = f[h];
                break;
              case 29:
                this.$ = {
                  type: "SubExpression",
                  path: f[h - 3],
                  params: f[h - 2],
                  hash: f[h - 1],
                  loc: d.locInfo(this._$)
                };
                break;
              case 30:
                this.$ = {
                  type: "Hash",
                  pairs: f[h],
                  loc: d.locInfo(this._$)
                };
                break;
              case 31:
                this.$ = {
                  type: "HashPair",
                  key: d.id(f[h - 2]),
                  value: f[h],
                  loc: d.locInfo(this._$)
                };
                break;
              case 32:
                this.$ = d.id(f[h - 1]);
                break;
              case 33:
                this.$ = f[h];
                break;
              case 34:
                this.$ = f[h];
                break;
              case 35:
                this.$ = {
                  type: "StringLiteral",
                  value: f[h],
                  original: f[h],
                  loc: d.locInfo(this._$)
                };
                break;
              case 36:
                this.$ = {
                  type: "NumberLiteral",
                  value: Number(f[h]),
                  original: Number(f[h]),
                  loc: d.locInfo(this._$)
                };
                break;
              case 37:
                this.$ = {
                  type: "BooleanLiteral",
                  value: "true" === f[h],
                  original: "true" === f[h],
                  loc: d.locInfo(this._$)
                };
                break;
              case 38:
                this.$ = {
                  type: "UndefinedLiteral",
                  original: void 0,
                  value: void 0,
                  loc: d.locInfo(this._$)
                };
                break;
              case 39:
                this.$ = {
                  type: "NullLiteral",
                  original: null,
                  value: null,
                  loc: d.locInfo(this._$)
                };
                break;
              case 40:
                this.$ = f[h];
                break;
              case 41:
                this.$ = f[h];
                break;
              case 42:
                this.$ = d.preparePath(!0, f[h], this._$);
                break;
              case 43:
                this.$ = d.preparePath(!1, f[h], this._$);
                break;
              case 44:
                f[h - 2].push({
                  part: d.id(f[h]),
                  original: f[h],
                  separator: f[h - 1]
                }), this.$ = f[h - 2];
                break;
              case 45:
                this.$ = [{
                  part: d.id(f[h]),
                  original: f[h]
                }];
                break;
              case 46:
                this.$ = [];
                break;
              case 47:
                f[h - 1].push(f[h]);
                break;
              case 48:
                this.$ = [];
                break;
              case 49:
                f[h - 1].push(f[h]);
                break;
              case 50:
                this.$ = [];
                break;
              case 51:
                f[h - 1].push(f[h]);
                break;
              case 58:
                this.$ = [];
                break;
              case 59:
                f[h - 1].push(f[h]);
                break;
              case 64:
                this.$ = [];
                break;
              case 65:
                f[h - 1].push(f[h]);
                break;
              case 70:
                this.$ = [];
                break;
              case 71:
                f[h - 1].push(f[h]);
                break;
              case 78:
                this.$ = [];
                break;
              case 79:
                f[h - 1].push(f[h]);
                break;
              case 82:
                this.$ = [];
                break;
              case 83:
                f[h - 1].push(f[h]);
                break;
              case 86:
                this.$ = [];
                break;
              case 87:
                f[h - 1].push(f[h]);
                break;
              case 90:
                this.$ = [];
                break;
              case 91:
                f[h - 1].push(f[h]);
                break;
              case 94:
                this.$ = [];
                break;
              case 95:
                f[h - 1].push(f[h]);
                break;
              case 98:
                this.$ = [f[h]];
                break;
              case 99:
                f[h - 1].push(f[h]);
                break;
              case 100:
                this.$ = [f[h]];
                break;
              case 101:
                f[h - 1].push(f[h])
            }
          },
          table: [{
            3: 1,
            4: 2,
            5: [2, 46],
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            1: [3]
          }, {
            5: [1, 4]
          }, {
            5: [2, 2],
            7: 5,
            8: 6,
            9: 7,
            10: 8,
            11: 9,
            12: 10,
            13: 11,
            14: [1, 12],
            15: [1, 20],
            16: 17,
            19: [1, 23],
            24: 15,
            27: 16,
            29: [1, 21],
            34: [1, 22],
            39: [2, 2],
            44: [2, 2],
            47: [2, 2],
            48: [1, 13],
            51: [1, 14],
            55: [1, 18],
            59: 19,
            60: [1, 24]
          }, {
            1: [2, 1]
          }, {
            5: [2, 47],
            14: [2, 47],
            15: [2, 47],
            19: [2, 47],
            29: [2, 47],
            34: [2, 47],
            39: [2, 47],
            44: [2, 47],
            47: [2, 47],
            48: [2, 47],
            51: [2, 47],
            55: [2, 47],
            60: [2, 47]
          }, {
            5: [2, 3],
            14: [2, 3],
            15: [2, 3],
            19: [2, 3],
            29: [2, 3],
            34: [2, 3],
            39: [2, 3],
            44: [2, 3],
            47: [2, 3],
            48: [2, 3],
            51: [2, 3],
            55: [2, 3],
            60: [2, 3]
          }, {
            5: [2, 4],
            14: [2, 4],
            15: [2, 4],
            19: [2, 4],
            29: [2, 4],
            34: [2, 4],
            39: [2, 4],
            44: [2, 4],
            47: [2, 4],
            48: [2, 4],
            51: [2, 4],
            55: [2, 4],
            60: [2, 4]
          }, {
            5: [2, 5],
            14: [2, 5],
            15: [2, 5],
            19: [2, 5],
            29: [2, 5],
            34: [2, 5],
            39: [2, 5],
            44: [2, 5],
            47: [2, 5],
            48: [2, 5],
            51: [2, 5],
            55: [2, 5],
            60: [2, 5]
          }, {
            5: [2, 6],
            14: [2, 6],
            15: [2, 6],
            19: [2, 6],
            29: [2, 6],
            34: [2, 6],
            39: [2, 6],
            44: [2, 6],
            47: [2, 6],
            48: [2, 6],
            51: [2, 6],
            55: [2, 6],
            60: [2, 6]
          }, {
            5: [2, 7],
            14: [2, 7],
            15: [2, 7],
            19: [2, 7],
            29: [2, 7],
            34: [2, 7],
            39: [2, 7],
            44: [2, 7],
            47: [2, 7],
            48: [2, 7],
            51: [2, 7],
            55: [2, 7],
            60: [2, 7]
          }, {
            5: [2, 8],
            14: [2, 8],
            15: [2, 8],
            19: [2, 8],
            29: [2, 8],
            34: [2, 8],
            39: [2, 8],
            44: [2, 8],
            47: [2, 8],
            48: [2, 8],
            51: [2, 8],
            55: [2, 8],
            60: [2, 8]
          }, {
            5: [2, 9],
            14: [2, 9],
            15: [2, 9],
            19: [2, 9],
            29: [2, 9],
            34: [2, 9],
            39: [2, 9],
            44: [2, 9],
            47: [2, 9],
            48: [2, 9],
            51: [2, 9],
            55: [2, 9],
            60: [2, 9]
          }, {
            20: 25,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 36,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            4: 37,
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            39: [2, 46],
            44: [2, 46],
            47: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            4: 38,
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            44: [2, 46],
            47: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            15: [2, 48],
            17: 39,
            18: [2, 48]
          }, {
            20: 41,
            56: 40,
            64: 42,
            65: [1, 43],
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            4: 44,
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            47: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            5: [2, 10],
            14: [2, 10],
            15: [2, 10],
            18: [2, 10],
            19: [2, 10],
            29: [2, 10],
            34: [2, 10],
            39: [2, 10],
            44: [2, 10],
            47: [2, 10],
            48: [2, 10],
            51: [2, 10],
            55: [2, 10],
            60: [2, 10]
          }, {
            20: 45,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 46,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 47,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 41,
            56: 48,
            64: 42,
            65: [1, 43],
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            33: [2, 78],
            49: 49,
            65: [2, 78],
            72: [2, 78],
            80: [2, 78],
            81: [2, 78],
            82: [2, 78],
            83: [2, 78],
            84: [2, 78],
            85: [2, 78]
          }, {
            23: [2, 33],
            33: [2, 33],
            54: [2, 33],
            65: [2, 33],
            68: [2, 33],
            72: [2, 33],
            75: [2, 33],
            80: [2, 33],
            81: [2, 33],
            82: [2, 33],
            83: [2, 33],
            84: [2, 33],
            85: [2, 33]
          }, {
            23: [2, 34],
            33: [2, 34],
            54: [2, 34],
            65: [2, 34],
            68: [2, 34],
            72: [2, 34],
            75: [2, 34],
            80: [2, 34],
            81: [2, 34],
            82: [2, 34],
            83: [2, 34],
            84: [2, 34],
            85: [2, 34]
          }, {
            23: [2, 35],
            33: [2, 35],
            54: [2, 35],
            65: [2, 35],
            68: [2, 35],
            72: [2, 35],
            75: [2, 35],
            80: [2, 35],
            81: [2, 35],
            82: [2, 35],
            83: [2, 35],
            84: [2, 35],
            85: [2, 35]
          }, {
            23: [2, 36],
            33: [2, 36],
            54: [2, 36],
            65: [2, 36],
            68: [2, 36],
            72: [2, 36],
            75: [2, 36],
            80: [2, 36],
            81: [2, 36],
            82: [2, 36],
            83: [2, 36],
            84: [2, 36],
            85: [2, 36]
          }, {
            23: [2, 37],
            33: [2, 37],
            54: [2, 37],
            65: [2, 37],
            68: [2, 37],
            72: [2, 37],
            75: [2, 37],
            80: [2, 37],
            81: [2, 37],
            82: [2, 37],
            83: [2, 37],
            84: [2, 37],
            85: [2, 37]
          }, {
            23: [2, 38],
            33: [2, 38],
            54: [2, 38],
            65: [2, 38],
            68: [2, 38],
            72: [2, 38],
            75: [2, 38],
            80: [2, 38],
            81: [2, 38],
            82: [2, 38],
            83: [2, 38],
            84: [2, 38],
            85: [2, 38]
          }, {
            23: [2, 39],
            33: [2, 39],
            54: [2, 39],
            65: [2, 39],
            68: [2, 39],
            72: [2, 39],
            75: [2, 39],
            80: [2, 39],
            81: [2, 39],
            82: [2, 39],
            83: [2, 39],
            84: [2, 39],
            85: [2, 39]
          }, {
            23: [2, 43],
            33: [2, 43],
            54: [2, 43],
            65: [2, 43],
            68: [2, 43],
            72: [2, 43],
            75: [2, 43],
            80: [2, 43],
            81: [2, 43],
            82: [2, 43],
            83: [2, 43],
            84: [2, 43],
            85: [2, 43],
            87: [1, 50]
          }, {
            72: [1, 35],
            86: 51
          }, {
            23: [2, 45],
            33: [2, 45],
            54: [2, 45],
            65: [2, 45],
            68: [2, 45],
            72: [2, 45],
            75: [2, 45],
            80: [2, 45],
            81: [2, 45],
            82: [2, 45],
            83: [2, 45],
            84: [2, 45],
            85: [2, 45],
            87: [2, 45]
          }, {
            52: 52,
            54: [2, 82],
            65: [2, 82],
            72: [2, 82],
            80: [2, 82],
            81: [2, 82],
            82: [2, 82],
            83: [2, 82],
            84: [2, 82],
            85: [2, 82]
          }, {
            25: 53,
            38: 55,
            39: [1, 57],
            43: 56,
            44: [1, 58],
            45: 54,
            47: [2, 54]
          }, {
            28: 59,
            43: 60,
            44: [1, 58],
            47: [2, 56]
          }, {
            13: 62,
            15: [1, 20],
            18: [1, 61]
          }, {
            33: [2, 86],
            57: 63,
            65: [2, 86],
            72: [2, 86],
            80: [2, 86],
            81: [2, 86],
            82: [2, 86],
            83: [2, 86],
            84: [2, 86],
            85: [2, 86]
          }, {
            33: [2, 40],
            65: [2, 40],
            72: [2, 40],
            80: [2, 40],
            81: [2, 40],
            82: [2, 40],
            83: [2, 40],
            84: [2, 40],
            85: [2, 40]
          }, {
            33: [2, 41],
            65: [2, 41],
            72: [2, 41],
            80: [2, 41],
            81: [2, 41],
            82: [2, 41],
            83: [2, 41],
            84: [2, 41],
            85: [2, 41]
          }, {
            20: 64,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            26: 65,
            47: [1, 66]
          }, {
            30: 67,
            33: [2, 58],
            65: [2, 58],
            72: [2, 58],
            75: [2, 58],
            80: [2, 58],
            81: [2, 58],
            82: [2, 58],
            83: [2, 58],
            84: [2, 58],
            85: [2, 58]
          }, {
            33: [2, 64],
            35: 68,
            65: [2, 64],
            72: [2, 64],
            75: [2, 64],
            80: [2, 64],
            81: [2, 64],
            82: [2, 64],
            83: [2, 64],
            84: [2, 64],
            85: [2, 64]
          }, {
            21: 69,
            23: [2, 50],
            65: [2, 50],
            72: [2, 50],
            80: [2, 50],
            81: [2, 50],
            82: [2, 50],
            83: [2, 50],
            84: [2, 50],
            85: [2, 50]
          }, {
            33: [2, 90],
            61: 70,
            65: [2, 90],
            72: [2, 90],
            80: [2, 90],
            81: [2, 90],
            82: [2, 90],
            83: [2, 90],
            84: [2, 90],
            85: [2, 90]
          }, {
            20: 74,
            33: [2, 80],
            50: 71,
            63: 72,
            64: 75,
            65: [1, 43],
            69: 73,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            72: [1, 79]
          }, {
            23: [2, 42],
            33: [2, 42],
            54: [2, 42],
            65: [2, 42],
            68: [2, 42],
            72: [2, 42],
            75: [2, 42],
            80: [2, 42],
            81: [2, 42],
            82: [2, 42],
            83: [2, 42],
            84: [2, 42],
            85: [2, 42],
            87: [1, 50]
          }, {
            20: 74,
            53: 80,
            54: [2, 84],
            63: 81,
            64: 75,
            65: [1, 43],
            69: 82,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            26: 83,
            47: [1, 66]
          }, {
            47: [2, 55]
          }, {
            4: 84,
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            39: [2, 46],
            44: [2, 46],
            47: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            47: [2, 20]
          }, {
            20: 85,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            4: 86,
            6: 3,
            14: [2, 46],
            15: [2, 46],
            19: [2, 46],
            29: [2, 46],
            34: [2, 46],
            47: [2, 46],
            48: [2, 46],
            51: [2, 46],
            55: [2, 46],
            60: [2, 46]
          }, {
            26: 87,
            47: [1, 66]
          }, {
            47: [2, 57]
          }, {
            5: [2, 11],
            14: [2, 11],
            15: [2, 11],
            19: [2, 11],
            29: [2, 11],
            34: [2, 11],
            39: [2, 11],
            44: [2, 11],
            47: [2, 11],
            48: [2, 11],
            51: [2, 11],
            55: [2, 11],
            60: [2, 11]
          }, {
            15: [2, 49],
            18: [2, 49]
          }, {
            20: 74,
            33: [2, 88],
            58: 88,
            63: 89,
            64: 75,
            65: [1, 43],
            69: 90,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            65: [2, 94],
            66: 91,
            68: [2, 94],
            72: [2, 94],
            80: [2, 94],
            81: [2, 94],
            82: [2, 94],
            83: [2, 94],
            84: [2, 94],
            85: [2, 94]
          }, {
            5: [2, 25],
            14: [2, 25],
            15: [2, 25],
            19: [2, 25],
            29: [2, 25],
            34: [2, 25],
            39: [2, 25],
            44: [2, 25],
            47: [2, 25],
            48: [2, 25],
            51: [2, 25],
            55: [2, 25],
            60: [2, 25]
          }, {
            20: 92,
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 74,
            31: 93,
            33: [2, 60],
            63: 94,
            64: 75,
            65: [1, 43],
            69: 95,
            70: 76,
            71: 77,
            72: [1, 78],
            75: [2, 60],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 74,
            33: [2, 66],
            36: 96,
            63: 97,
            64: 75,
            65: [1, 43],
            69: 98,
            70: 76,
            71: 77,
            72: [1, 78],
            75: [2, 66],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 74,
            22: 99,
            23: [2, 52],
            63: 100,
            64: 75,
            65: [1, 43],
            69: 101,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            20: 74,
            33: [2, 92],
            62: 102,
            63: 103,
            64: 75,
            65: [1, 43],
            69: 104,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            33: [1, 105]
          }, {
            33: [2, 79],
            65: [2, 79],
            72: [2, 79],
            80: [2, 79],
            81: [2, 79],
            82: [2, 79],
            83: [2, 79],
            84: [2, 79],
            85: [2, 79]
          }, {
            33: [2, 81]
          }, {
            23: [2, 27],
            33: [2, 27],
            54: [2, 27],
            65: [2, 27],
            68: [2, 27],
            72: [2, 27],
            75: [2, 27],
            80: [2, 27],
            81: [2, 27],
            82: [2, 27],
            83: [2, 27],
            84: [2, 27],
            85: [2, 27]
          }, {
            23: [2, 28],
            33: [2, 28],
            54: [2, 28],
            65: [2, 28],
            68: [2, 28],
            72: [2, 28],
            75: [2, 28],
            80: [2, 28],
            81: [2, 28],
            82: [2, 28],
            83: [2, 28],
            84: [2, 28],
            85: [2, 28]
          }, {
            23: [2, 30],
            33: [2, 30],
            54: [2, 30],
            68: [2, 30],
            71: 106,
            72: [1, 107],
            75: [2, 30]
          }, {
            23: [2, 98],
            33: [2, 98],
            54: [2, 98],
            68: [2, 98],
            72: [2, 98],
            75: [2, 98]
          }, {
            23: [2, 45],
            33: [2, 45],
            54: [2, 45],
            65: [2, 45],
            68: [2, 45],
            72: [2, 45],
            73: [1, 108],
            75: [2, 45],
            80: [2, 45],
            81: [2, 45],
            82: [2, 45],
            83: [2, 45],
            84: [2, 45],
            85: [2, 45],
            87: [2, 45]
          }, {
            23: [2, 44],
            33: [2, 44],
            54: [2, 44],
            65: [2, 44],
            68: [2, 44],
            72: [2, 44],
            75: [2, 44],
            80: [2, 44],
            81: [2, 44],
            82: [2, 44],
            83: [2, 44],
            84: [2, 44],
            85: [2, 44],
            87: [2, 44]
          }, {
            54: [1, 109]
          }, {
            54: [2, 83],
            65: [2, 83],
            72: [2, 83],
            80: [2, 83],
            81: [2, 83],
            82: [2, 83],
            83: [2, 83],
            84: [2, 83],
            85: [2, 83]
          }, {
            54: [2, 85]
          }, {
            5: [2, 13],
            14: [2, 13],
            15: [2, 13],
            19: [2, 13],
            29: [2, 13],
            34: [2, 13],
            39: [2, 13],
            44: [2, 13],
            47: [2, 13],
            48: [2, 13],
            51: [2, 13],
            55: [2, 13],
            60: [2, 13]
          }, {
            38: 55,
            39: [1, 57],
            43: 56,
            44: [1, 58],
            45: 111,
            46: 110,
            47: [2, 76]
          }, {
            33: [2, 70],
            40: 112,
            65: [2, 70],
            72: [2, 70],
            75: [2, 70],
            80: [2, 70],
            81: [2, 70],
            82: [2, 70],
            83: [2, 70],
            84: [2, 70],
            85: [2, 70]
          }, {
            47: [2, 18]
          }, {
            5: [2, 14],
            14: [2, 14],
            15: [2, 14],
            19: [2, 14],
            29: [2, 14],
            34: [2, 14],
            39: [2, 14],
            44: [2, 14],
            47: [2, 14],
            48: [2, 14],
            51: [2, 14],
            55: [2, 14],
            60: [2, 14]
          }, {
            33: [1, 113]
          }, {
            33: [2, 87],
            65: [2, 87],
            72: [2, 87],
            80: [2, 87],
            81: [2, 87],
            82: [2, 87],
            83: [2, 87],
            84: [2, 87],
            85: [2, 87]
          }, {
            33: [2, 89]
          }, {
            20: 74,
            63: 115,
            64: 75,
            65: [1, 43],
            67: 114,
            68: [2, 96],
            69: 116,
            70: 76,
            71: 77,
            72: [1, 78],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            33: [1, 117]
          }, {
            32: 118,
            33: [2, 62],
            74: 119,
            75: [1, 120]
          }, {
            33: [2, 59],
            65: [2, 59],
            72: [2, 59],
            75: [2, 59],
            80: [2, 59],
            81: [2, 59],
            82: [2, 59],
            83: [2, 59],
            84: [2, 59],
            85: [2, 59]
          }, {
            33: [2, 61],
            75: [2, 61]
          }, {
            33: [2, 68],
            37: 121,
            74: 122,
            75: [1, 120]
          }, {
            33: [2, 65],
            65: [2, 65],
            72: [2, 65],
            75: [2, 65],
            80: [2, 65],
            81: [2, 65],
            82: [2, 65],
            83: [2, 65],
            84: [2, 65],
            85: [2, 65]
          }, {
            33: [2, 67],
            75: [2, 67]
          }, {
            23: [1, 123]
          }, {
            23: [2, 51],
            65: [2, 51],
            72: [2, 51],
            80: [2, 51],
            81: [2, 51],
            82: [2, 51],
            83: [2, 51],
            84: [2, 51],
            85: [2, 51]
          }, {
            23: [2, 53]
          }, {
            33: [1, 124]
          }, {
            33: [2, 91],
            65: [2, 91],
            72: [2, 91],
            80: [2, 91],
            81: [2, 91],
            82: [2, 91],
            83: [2, 91],
            84: [2, 91],
            85: [2, 91]
          }, {
            33: [2, 93]
          }, {
            5: [2, 22],
            14: [2, 22],
            15: [2, 22],
            19: [2, 22],
            29: [2, 22],
            34: [2, 22],
            39: [2, 22],
            44: [2, 22],
            47: [2, 22],
            48: [2, 22],
            51: [2, 22],
            55: [2, 22],
            60: [2, 22]
          }, {
            23: [2, 99],
            33: [2, 99],
            54: [2, 99],
            68: [2, 99],
            72: [2, 99],
            75: [2, 99]
          }, {
            73: [1, 108]
          }, {
            20: 74,
            63: 125,
            64: 75,
            65: [1, 43],
            72: [1, 35],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            5: [2, 23],
            14: [2, 23],
            15: [2, 23],
            19: [2, 23],
            29: [2, 23],
            34: [2, 23],
            39: [2, 23],
            44: [2, 23],
            47: [2, 23],
            48: [2, 23],
            51: [2, 23],
            55: [2, 23],
            60: [2, 23]
          }, {
            47: [2, 19]
          }, {
            47: [2, 77]
          }, {
            20: 74,
            33: [2, 72],
            41: 126,
            63: 127,
            64: 75,
            65: [1, 43],
            69: 128,
            70: 76,
            71: 77,
            72: [1, 78],
            75: [2, 72],
            78: 26,
            79: 27,
            80: [1, 28],
            81: [1, 29],
            82: [1, 30],
            83: [1, 31],
            84: [1, 32],
            85: [1, 34],
            86: 33
          }, {
            5: [2, 24],
            14: [2, 24],
            15: [2, 24],
            19: [2, 24],
            29: [2, 24],
            34: [2, 24],
            39: [2, 24],
            44: [2, 24],
            47: [2, 24],
            48: [2, 24],
            51: [2, 24],
            55: [2, 24],
            60: [2, 24]
          }, {
            68: [1, 129]
          }, {
            65: [2, 95],
            68: [2, 95],
            72: [2, 95],
            80: [2, 95],
            81: [2, 95],
            82: [2, 95],
            83: [2, 95],
            84: [2, 95],
            85: [2, 95]
          }, {
            68: [2, 97]
          }, {
            5: [2, 21],
            14: [2, 21],
            15: [2, 21],
            19: [2, 21],
            29: [2, 21],
            34: [2, 21],
            39: [2, 21],
            44: [2, 21],
            47: [2, 21],
            48: [2, 21],
            51: [2, 21],
            55: [2, 21],
            60: [2, 21]
          }, {
            33: [1, 130]
          }, {
            33: [2, 63]
          }, {
            72: [1, 132],
            76: 131
          }, {
            33: [1, 133]
          }, {
            33: [2, 69]
          }, {
            15: [2, 12],
            18: [2, 12]
          }, {
            14: [2, 26],
            15: [2, 26],
            19: [2, 26],
            29: [2, 26],
            34: [2, 26],
            47: [2, 26],
            48: [2, 26],
            51: [2, 26],
            55: [2, 26],
            60: [2, 26]
          }, {
            23: [2, 31],
            33: [2, 31],
            54: [2, 31],
            68: [2, 31],
            72: [2, 31],
            75: [2, 31]
          }, {
            33: [2, 74],
            42: 134,
            74: 135,
            75: [1, 120]
          }, {
            33: [2, 71],
            65: [2, 71],
            72: [2, 71],
            75: [2, 71],
            80: [2, 71],
            81: [2, 71],
            82: [2, 71],
            83: [2, 71],
            84: [2, 71],
            85: [2, 71]
          }, {
            33: [2, 73],
            75: [2, 73]
          }, {
            23: [2, 29],
            33: [2, 29],
            54: [2, 29],
            65: [2, 29],
            68: [2, 29],
            72: [2, 29],
            75: [2, 29],
            80: [2, 29],
            81: [2, 29],
            82: [2, 29],
            83: [2, 29],
            84: [2, 29],
            85: [2, 29]
          }, {
            14: [2, 15],
            15: [2, 15],
            19: [2, 15],
            29: [2, 15],
            34: [2, 15],
            39: [2, 15],
            44: [2, 15],
            47: [2, 15],
            48: [2, 15],
            51: [2, 15],
            55: [2, 15],
            60: [2, 15]
          }, {
            72: [1, 137],
            77: [1, 136]
          }, {
            72: [2, 100],
            77: [2, 100]
          }, {
            14: [2, 16],
            15: [2, 16],
            19: [2, 16],
            29: [2, 16],
            34: [2, 16],
            44: [2, 16],
            47: [2, 16],
            48: [2, 16],
            51: [2, 16],
            55: [2, 16],
            60: [2, 16]
          }, {
            33: [1, 138]
          }, {
            33: [2, 75]
          }, {
            33: [2, 32]
          }, {
            72: [2, 101],
            77: [2, 101]
          }, {
            14: [2, 17],
            15: [2, 17],
            19: [2, 17],
            29: [2, 17],
            34: [2, 17],
            39: [2, 17],
            44: [2, 17],
            47: [2, 17],
            48: [2, 17],
            51: [2, 17],
            55: [2, 17],
            60: [2, 17]
          }],
          defaultActions: {
            4: [2, 1],
            54: [2, 55],
            56: [2, 20],
            60: [2, 57],
            73: [2, 81],
            82: [2, 85],
            86: [2, 18],
            90: [2, 89],
            101: [2, 53],
            104: [2, 93],
            110: [2, 19],
            111: [2, 77],
            116: [2, 97],
            119: [2, 63],
            122: [2, 69],
            135: [2, 75],
            136: [2, 32]
          },
          parseError: function(a, b) {
            throw new Error(a)
          },
          parse: function(a) {
            function b() {
              var a;
              return a = c.lexer.lex() || 1, "number" != typeof a && (a = c.symbols_[a] || a), a
            }
            var c = this,
              d = [0],
              e = [null],
              f = [],
              g = this.table,
              h = "",
              i = 0,
              j = 0,
              k = 0;
            this.lexer.setInput(a), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
            var l = this.lexer.yylloc;
            f.push(l);
            var m = this.lexer.options && this.lexer.options.ranges;
            "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
            for (var n, o, p, q, r, s, t, u, v, w = {};;) {
              if (p = d[d.length - 1], this.defaultActions[p] ? q = this.defaultActions[p] : (null !== n && "undefined" != typeof n || (n = b()), q = g[p] && g[p][n]), "undefined" == typeof q || !q.length || !q[0]) {
                var x = "";
                if (!k) {
                  v = [];
                  for (s in g[p]) this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                  x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"), this.parseError(x, {
                    text: this.lexer.match,
                    token: this.terminals_[n] || n,
                    line: this.lexer.yylineno,
                    loc: l,
                    expected: v
                  })
                }
              }
              if (q[0] instanceof Array && q.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
              switch (q[0]) {
                case 1:
                  d.push(n), e.push(this.lexer.yytext), f.push(this.lexer.yylloc), d.push(q[1]), n = null, o ? (n = o, o = null) : (j = this.lexer.yyleng, h = this.lexer.yytext, i = this.lexer.yylineno, l = this.lexer.yylloc, k > 0 && k--);
                  break;
                case 2:
                  if (t = this.productions_[q[1]][1], w.$ = e[e.length - t], w._$ = {
                      first_line: f[f.length - (t || 1)].first_line,
                      last_line: f[f.length - 1].last_line,
                      first_column: f[f.length - (t || 1)].first_column,
                      last_column: f[f.length - 1].last_column
                    }, m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]), r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f), "undefined" != typeof r) return r;
                  t && (d = d.slice(0, -1 * t * 2), e = e.slice(0, -1 * t), f = f.slice(0, -1 * t)), d.push(this.productions_[q[1]][0]), e.push(w.$), f.push(w._$), u = g[d[d.length - 2]][d[d.length - 1]], d.push(u);
                  break;
                case 3:
                  return !0
              }
            }
            return !0
          }
        },
        c = function() {
          var a = {
            EOF: 1,
            parseError: function(a, b) {
              if (!this.yy.parser) throw new Error(a);
              this.yy.parser.parseError(a, b)
            },
            setInput: function(a) {
              return this._input = a, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                first_line: 1,
                first_column: 0,
                last_line: 1,
                last_column: 0
              }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
            },
            input: function() {
              var a = this._input[0];
              this.yytext += a, this.yyleng++, this.offset++, this.match += a, this.matched += a;
              var b = a.match(/(?:\r\n?|\n).*/g);
              return b ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), a
            },
            unput: function(a) {
              var b = a.length,
                c = a.split(/(?:\r\n?|\n)/g);
              this._input = a + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - b - 1), this.offset -= b;
              var d = this.match.split(/(?:\r\n?|\n)/g);
              this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), c.length - 1 && (this.yylineno -= c.length - 1);
              var e = this.yylloc.range;
              return this.yylloc = {
                first_line: this.yylloc.first_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.first_column,
                last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b
              }, this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]), this
            },
            more: function() {
              return this._more = !0, this
            },
            less: function(a) {
              this.unput(this.match.slice(a))
            },
            pastInput: function() {
              var a = this.matched.substr(0, this.matched.length - this.match.length);
              return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "")
            },
            upcomingInput: function() {
              var a = this.match;
              return a.length < 20 && (a += this._input.substr(0, 20 - a.length)), (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "")
            },
            showPosition: function() {
              var a = this.pastInput(),
                b = new Array(a.length + 1).join("-");
              return a + this.upcomingInput() + "\n" + b + "^"
            },
            next: function() {
              if (this.done) return this.EOF;
              this._input || (this.done = !0);
              var a, b, c, d, e;
              this._more || (this.yytext = "", this.match = "");
              for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]), !c || b && !(c[0].length > b[0].length) || (b = c, d = g, this.options.flex)); g++);
              return b ? (e = b[0].match(/(?:\r\n?|\n).*/g), e && (this.yylineno += e.length), this.yylloc = {
                first_line: this.yylloc.last_line,
                last_line: this.yylineno + 1,
                first_column: this.yylloc.last_column,
                last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
              }, this.yytext += b[0], this.match += b[0], this.matches = b, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(b[0].length), this.matched += b[0], a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
              })
            },
            lex: function() {
              var a = this.next();
              return "undefined" != typeof a ? a : this.lex()
            },
            begin: function(a) {
              this.conditionStack.push(a)
            },
            popState: function() {
              return this.conditionStack.pop()
            },
            _currentRules: function() {
              return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
            },
            topState: function() {
              return this.conditionStack[this.conditionStack.length - 2]
            },
            pushState: function(a) {
              this.begin(a)
            }
          };
          return a.options = {}, a.performAction = function(a, b, c, d) {
            function e(a, c) {
              return b.yytext = b.yytext.substring(a, b.yyleng - c + a)
            }
            switch (c) {
              case 0:
                if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1), this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1), this.begin("emu")) : this.begin("mu"), b.yytext) return 15;
                break;
              case 1:
                return 15;
              case 2:
                return this.popState(), 15;
              case 3:
                return this.begin("raw"), 15;
              case 4:
                return this.popState(), "raw" === this.conditionStack[this.conditionStack.length - 1] ? 15 : (e(5, 9), "END_RAW_BLOCK");
              case 5:
                return 15;
              case 6:
                return this.popState(), 14;
              case 7:
                return 65;
              case 8:
                return 68;
              case 9:
                return 19;
              case 10:
                return this.popState(), this.begin("raw"), 23;
              case 11:
                return 55;
              case 12:
                return 60;
              case 13:
                return 29;
              case 14:
                return 47;
              case 15:
                return this.popState(), 44;
              case 16:
                return this.popState(), 44;
              case 17:
                return 34;
              case 18:
                return 39;
              case 19:
                return 51;
              case 20:
                return 48;
              case 21:
                this.unput(b.yytext), this.popState(), this.begin("com");
                break;
              case 22:
                return this.popState(), 14;
              case 23:
                return 48;
              case 24:
                return 73;
              case 25:
                return 72;
              case 26:
                return 72;
              case 27:
                return 87;
              case 28:
                break;
              case 29:
                return this.popState(), 54;
              case 30:
                return this.popState(), 33;
              case 31:
                return b.yytext = e(1, 2).replace(/\\"/g, '"'), 80;
              case 32:
                return b.yytext = e(1, 2).replace(/\\'/g, "'"), 80;
              case 33:
                return 85;
              case 34:
                return 82;
              case 35:
                return 82;
              case 36:
                return 83;
              case 37:
                return 84;
              case 38:
                return 81;
              case 39:
                return 75;
              case 40:
                return 77;
              case 41:
                return 72;
              case 42:
                return b.yytext = b.yytext.replace(/\\([\\\]])/g, "$1"), 72;
              case 43:
                return "INVALID";
              case 44:
                return 5
            }
          }, a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], a.conditions = {
            mu: {
              rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
              inclusive: !1
            },
            emu: {
              rules: [2],
              inclusive: !1
            },
            com: {
              rules: [6],
              inclusive: !1
            },
            raw: {
              rules: [3, 4, 5],
              inclusive: !1
            },
            INITIAL: {
              rules: [0, 1, 44],
              inclusive: !0
            }
          }, a
        }();
      return b.lexer = c, a.prototype = b, b.Parser = a, new a
    }();
    b["default"] = c, a.exports = b["default"]
  }, function(a, b, c) {
    "use strict";

    function d() {
      var a = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
      this.options = a
    }

    function e(a, b, c) {
      void 0 === b && (b = a.length);
      var d = a[b - 1],
        e = a[b - 2];
      return d ? "ContentStatement" === d.type ? (e || !c ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d.original) : void 0 : c
    }

    function f(a, b, c) {
      void 0 === b && (b = -1);
      var d = a[b + 1],
        e = a[b + 2];
      return d ? "ContentStatement" === d.type ? (e || !c ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d.original) : void 0 : c
    }

    function g(a, b, c) {
      var d = a[null == b ? 0 : b + 1];
      if (d && "ContentStatement" === d.type && (c || !d.rightStripped)) {
        var e = d.value;
        d.value = d.value.replace(c ? /^\s+/ : /^[ \t]*\r?\n?/, ""), d.rightStripped = d.value !== e
      }
    }

    function h(a, b, c) {
      var d = a[null == b ? a.length - 1 : b - 1];
      if (d && "ContentStatement" === d.type && (c || !d.leftStripped)) {
        var e = d.value;
        return d.value = d.value.replace(c ? /\s+$/ : /[ \t]+$/, ""), d.leftStripped = d.value !== e, d.leftStripped
      }
    }
    var i = c(1)["default"];
    b.__esModule = !0;
    var j = c(88),
      k = i(j);
    d.prototype = new k["default"], d.prototype.Program = function(a) {
      var b = !this.options.ignoreStandalone,
        c = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var d = a.body, i = 0, j = d.length; i < j; i++) {
        var k = d[i],
          l = this.accept(k);
        if (l) {
          var m = e(d, i, c),
            n = f(d, i, c),
            o = l.openStandalone && m,
            p = l.closeStandalone && n,
            q = l.inlineStandalone && m && n;
          l.close && g(d, i, !0), l.open && h(d, i, !0), b && q && (g(d, i), h(d, i) && "PartialStatement" === k.type && (k.indent = /([ \t]+$)/.exec(d[i - 1].original)[1])), b && o && (g((k.program || k.inverse).body), h(d, i)), b && p && (g(d, i), h((k.inverse || k.program).body))
        }
      }
      return a
    }, d.prototype.BlockStatement = d.prototype.DecoratorBlock = d.prototype.PartialBlockStatement = function(a) {
      this.accept(a.program), this.accept(a.inverse);
      var b = a.program || a.inverse,
        c = a.program && a.inverse,
        d = c,
        i = c;
      if (c && c.chained)
        for (d = c.body[0].program; i.chained;) i = i.body[i.body.length - 1].program;
      var j = {
        open: a.openStrip.open,
        close: a.closeStrip.close,
        openStandalone: f(b.body),
        closeStandalone: e((d || b).body)
      };
      if (a.openStrip.close && g(b.body, null, !0), c) {
        var k = a.inverseStrip;
        k.open && h(b.body, null, !0), k.close && g(d.body, null, !0), a.closeStrip.open && h(i.body, null, !0), !this.options.ignoreStandalone && e(b.body) && f(d.body) && (h(b.body), g(d.body))
      } else a.closeStrip.open && h(b.body, null, !0);
      return j
    }, d.prototype.Decorator = d.prototype.MustacheStatement = function(a) {
      return a.strip
    }, d.prototype.PartialStatement = d.prototype.CommentStatement = function(a) {
      var b = a.strip || {};
      return {
        inlineStandalone: !0,
        open: b.open,
        close: b.close
      }
    }, b["default"] = d, a.exports = b["default"]
  }, function(a, b, c) {
    "use strict";

    function d() {
      this.parents = []
    }

    function e(a) {
      this.acceptRequired(a, "path"), this.acceptArray(a.params), this.acceptKey(a, "hash")
    }

    function f(a) {
      e.call(this, a), this.acceptKey(a, "program"), this.acceptKey(a, "inverse")
    }

    function g(a) {
      this.acceptRequired(a, "name"), this.acceptArray(a.params), this.acceptKey(a, "hash")
    }
    var h = c(1)["default"];
    b.__esModule = !0;
    var i = c(6),
      j = h(i);
    d.prototype = {
      constructor: d,
      mutating: !1,
      acceptKey: function(a, b) {
        var c = this.accept(a[b]);
        if (this.mutating) {
          if (c && !d.prototype[c.type]) throw new j["default"]('Unexpected node type "' + c.type + '" found when accepting ' + b + " on " + a.type);
          a[b] = c
        }
      },
      acceptRequired: function(a, b) {
        if (this.acceptKey(a, b), !a[b]) throw new j["default"](a.type + " requires " + b)
      },
      acceptArray: function(a) {
        for (var b = 0, c = a.length; b < c; b++) this.acceptKey(a, b), a[b] || (a.splice(b, 1), b--, c--)
      },
      accept: function(a) {
        if (a) {
          if (!this[a.type]) throw new j["default"]("Unknown type: " + a.type, a);
          this.current && this.parents.unshift(this.current), this.current = a;
          var b = this[a.type](a);
          return this.current = this.parents.shift(), !this.mutating || b ? b : b !== !1 ? a : void 0
        }
      },
      Program: function(a) {
        this.acceptArray(a.body)
      },
      MustacheStatement: e,
      Decorator: e,
      BlockStatement: f,
      DecoratorBlock: f,
      PartialStatement: g,
      PartialBlockStatement: function(a) {
        g.call(this, a), this.acceptKey(a, "program")
      },
      ContentStatement: function() {},
      CommentStatement: function() {},
      SubExpression: e,
      PathExpression: function() {},
      StringLiteral: function() {},
      NumberLiteral: function() {},
      BooleanLiteral: function() {},
      UndefinedLiteral: function() {},
      NullLiteral: function() {},
      Hash: function(a) {
        this.acceptArray(a.pairs)
      },
      HashPair: function(a) {
        this.acceptRequired(a, "value")
      }
    }, b["default"] = d, a.exports = b["default"]
  }, function(a, b, c) {
    "use strict";

    function d(a, b) {
      if (b = b.path ? b.path.original : b, a.path.original !== b) {
        var c = {
          loc: a.path.loc
        };
        throw new q["default"](a.path.original + " doesn't match " + b, c)
      }
    }

    function e(a, b) {
      this.source = a, this.start = {
        line: b.first_line,
        column: b.first_column
      }, this.end = {
        line: b.last_line,
        column: b.last_column
      }
    }

    function f(a) {
      return /^\[.*\]$/.test(a) ? a.substring(1, a.length - 1) : a
    }

    function g(a, b) {
      return {
        open: "~" === a.charAt(2),
        close: "~" === b.charAt(b.length - 3)
      }
    }

    function h(a) {
      return a.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "")
    }

    function i(a, b, c) {
      c = this.locInfo(c);
      for (var d = a ? "@" : "", e = [], f = 0, g = 0, h = b.length; g < h; g++) {
        var i = b[g].part,
          j = b[g].original !== i;
        if (d += (b[g].separator || "") + i, j || ".." !== i && "." !== i && "this" !== i) e.push(i);
        else {
          if (e.length > 0) throw new q["default"]("Invalid path: " + d, {
            loc: c
          });
          ".." === i && f++
        }
      }
      return {
        type: "PathExpression",
        data: a,
        depth: f,
        parts: e,
        original: d,
        loc: c
      }
    }

    function j(a, b, c, d, e, f) {
      var g = d.charAt(3) || d.charAt(2),
        h = "{" !== g && "&" !== g,
        i = /\*/.test(d);
      return {
        type: i ? "Decorator" : "MustacheStatement",
        path: a,
        params: b,
        hash: c,
        escaped: h,
        strip: e,
        loc: this.locInfo(f)
      }
    }

    function k(a, b, c, e) {
      d(a, c), e = this.locInfo(e);
      var f = {
        type: "Program",
        body: b,
        strip: {},
        loc: e
      };
      return {
        type: "BlockStatement",
        path: a.path,
        params: a.params,
        hash: a.hash,
        program: f,
        openStrip: {},
        inverseStrip: {},
        closeStrip: {},
        loc: e
      }
    }

    function l(a, b, c, e, f, g) {
      e && e.path && d(a, e);
      var h = /\*/.test(a.open);
      b.blockParams = a.blockParams;
      var i = void 0,
        j = void 0;
      if (c) {
        if (h) throw new q["default"]("Unexpected inverse block on decorator", c);
        c.chain && (c.program.body[0].closeStrip = e.strip), j = c.strip, i = c.program
      }
      return f && (f = i, i = b, b = f), {
        type: h ? "DecoratorBlock" : "BlockStatement",
        path: a.path,
        params: a.params,
        hash: a.hash,
        program: b,
        inverse: i,
        openStrip: a.strip,
        inverseStrip: j,
        closeStrip: e && e.strip,
        loc: this.locInfo(g)
      }
    }

    function m(a, b) {
      if (!b && a.length) {
        var c = a[0].loc,
          d = a[a.length - 1].loc;
        c && d && (b = {
          source: c.source,
          start: {
            line: c.start.line,
            column: c.start.column
          },
          end: {
            line: d.end.line,
            column: d.end.column
          }
        })
      }
      return {
        type: "Program",
        body: a,
        strip: {},
        loc: b
      }
    }

    function n(a, b, c, e) {
      return d(a, c), {
        type: "PartialBlockStatement",
        name: a.path,
        params: a.params,
        hash: a.hash,
        program: b,
        openStrip: a.strip,
        closeStrip: c && c.strip,
        loc: this.locInfo(e)
      }
    }
    var o = c(1)["default"];
    b.__esModule = !0, b.SourceLocation = e, b.id = f, b.stripFlags = g, b.stripComment = h, b.preparePath = i, b.prepareMustache = j, b.prepareRawBlock = k, b.prepareBlock = l, b.prepareProgram = m, b.preparePartialBlock = n;
    var p = c(6),
      q = o(p)
  }, function(a, b, c) {
    "use strict";

    function d() {}

    function e(a, b, c) {
      if (null == a || "string" != typeof a && "Program" !== a.type) throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
      b = b || {}, "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
      var d = c.parse(a, b),
        e = (new c.Compiler).compile(d, b);
      return (new c.JavaScriptCompiler).compile(e, b)
    }

    function f(a, b, c) {
      function d() {
        var d = c.parse(a, b),
          e = (new c.Compiler).compile(d, b),
          f = (new c.JavaScriptCompiler).compile(e, b, void 0, !0);
        return c.template(f)
      }

      function e(a, b) {
        return f || (f = d()), f.call(this, a, b)
      }
      if (void 0 === b && (b = {}), null == a || "string" != typeof a && "Program" !== a.type) throw new l["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
      b = m.extend({}, b), "data" in b || (b.data = !0), b.compat && (b.useDepths = !0);
      var f = void 0;
      return e._setup = function(a) {
        return f || (f = d()), f._setup(a)
      }, e._child = function(a, b, c, e) {
        return f || (f = d()), f._child(a, b, c, e)
      }, e
    }

    function g(a, b) {
      if (a === b) return !0;
      if (m.isArray(a) && m.isArray(b) && a.length === b.length) {
        for (var c = 0; c < a.length; c++)
          if (!g(a[c], b[c])) return !1;
        return !0
      }
    }

    function h(a) {
      if (!a.path.parts) {
        var b = a.path;
        a.path = {
          type: "PathExpression",
          data: !1,
          depth: 0,
          parts: [b.original + ""],
          original: b.original + "",
          loc: b.loc
        }
      }
    }
    var i = c(74)["default"],
      j = c(1)["default"];
    b.__esModule = !0, b.Compiler = d, b.precompile = e, b.compile = f;
    var k = c(6),
      l = j(k),
      m = c(5),
      n = c(84),
      o = j(n),
      p = [].slice;
    d.prototype = {
      compiler: d,
      equals: function(a) {
        var b = this.opcodes.length;
        if (a.opcodes.length !== b) return !1;
        for (var c = 0; c < b; c++) {
          var d = this.opcodes[c],
            e = a.opcodes[c];
          if (d.opcode !== e.opcode || !g(d.args, e.args)) return !1
        }
        b = this.children.length;
        for (var c = 0; c < b; c++)
          if (!this.children[c].equals(a.children[c])) return !1;
        return !0
      },
      guid: 0,
      compile: function(a, b) {
        return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = b, this.stringParams = b.stringParams, this.trackIds = b.trackIds, b.blockParams = b.blockParams || [], b.knownHelpers = m.extend(i(null), {
          helperMissing: !0,
          blockHelperMissing: !0,
          each: !0,
          if: !0,
          unless: !0,
          with: !0,
          log: !0,
          lookup: !0
        }, b.knownHelpers), this.accept(a)
      },
      compileProgram: function(a) {
        var b = new this.compiler,
          c = b.compile(a, this.options),
          d = this.guid++;
        return this.usePartial = this.usePartial || c.usePartial, this.children[d] = c, this.useDepths = this.useDepths || c.useDepths, d
      },
      accept: function(a) {
        if (!this[a.type]) throw new l["default"]("Unknown type: " + a.type, a);
        this.sourceNode.unshift(a);
        var b = this[a.type](a);
        return this.sourceNode.shift(), b
      },
      Program: function(a) {
        this.options.blockParams.unshift(a.blockParams);
        for (var b = a.body, c = b.length, d = 0; d < c; d++) this.accept(b[d]);
        return this.options.blockParams.shift(), this.isSimple = 1 === c, this.blockParams = a.blockParams ? a.blockParams.length : 0, this
      },
      BlockStatement: function(a) {
        h(a);
        var b = a.program,
          c = a.inverse;
        b = b && this.compileProgram(b), c = c && this.compileProgram(c);
        var d = this.classifySexpr(a);
        "helper" === d ? this.helperSexpr(a, b, c) : "simple" === d ? (this.simpleSexpr(a), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("blockValue", a.path.original)) : (this.ambiguousSexpr(a, b, c), this.opcode("pushProgram", b), this.opcode("pushProgram", c), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
      },
      DecoratorBlock: function(a) {
        var b = a.program && this.compileProgram(a.program),
          c = this.setupFullMustacheParams(a, b, void 0),
          d = a.path;
        this.useDecorators = !0, this.opcode("registerDecorator", c.length, d.original)
      },
      PartialStatement: function(a) {
        this.usePartial = !0;
        var b = a.program;
        b && (b = this.compileProgram(a.program));
        var c = a.params;
        if (c.length > 1) throw new l["default"]("Unsupported number of partial arguments: " + c.length, a);
        c.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : c.push({
          type: "PathExpression",
          parts: [],
          depth: 0
        }));
        var d = a.name.original,
          e = "SubExpression" === a.name.type;
        e && this.accept(a.name), this.setupFullMustacheParams(a, b, void 0, !0);
        var f = a.indent || "";
        this.options.preventIndent && f && (this.opcode("appendContent", f), f = ""), this.opcode("invokePartial", e, d, f), this.opcode("append")
      },
      PartialBlockStatement: function(a) {
        this.PartialStatement(a)
      },
      MustacheStatement: function(a) {
        this.SubExpression(a), a.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
      },
      Decorator: function(a) {
        this.DecoratorBlock(a)
      },
      ContentStatement: function(a) {
        a.value && this.opcode("appendContent", a.value)
      },
      CommentStatement: function() {},
      SubExpression: function(a) {
        h(a);
        var b = this.classifySexpr(a);
        "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a)
      },
      ambiguousSexpr: function(a, b, c) {
        var d = a.path,
          e = d.parts[0],
          f = null != b || null != c;
        this.opcode("getContext", d.depth), this.opcode("pushProgram", b), this.opcode("pushProgram", c), d.strict = !0, this.accept(d), this.opcode("invokeAmbiguous", e, f)
      },
      simpleSexpr: function(a) {
        var b = a.path;
        b.strict = !0, this.accept(b), this.opcode("resolvePossibleLambda")
      },
      helperSexpr: function(a, b, c) {
        var d = this.setupFullMustacheParams(a, b, c),
          e = a.path,
          f = e.parts[0];
        if (this.options.knownHelpers[f]) this.opcode("invokeKnownHelper", d.length, f);
        else {
          if (this.options.knownHelpersOnly) throw new l["default"]("You specified knownHelpersOnly, but used the unknown helper " + f, a);
          e.strict = !0, e.falsy = !0, this.accept(e), this.opcode("invokeHelper", d.length, e.original, o["default"].helpers.simpleId(e))
        }
      },
      PathExpression: function(a) {
        this.addDepth(a.depth), this.opcode("getContext", a.depth);
        var b = a.parts[0],
          c = o["default"].helpers.scopedId(a),
          d = !a.depth && !c && this.blockParamIndex(b);
        d ? this.opcode("lookupBlockParam", d, a.parts) : b ? a.data ? (this.options.data = !0, this.opcode("lookupData", a.depth, a.parts, a.strict)) : this.opcode("lookupOnContext", a.parts, a.falsy, a.strict, c) : this.opcode("pushContext")
      },
      StringLiteral: function(a) {
        this.opcode("pushString", a.value)
      },
      NumberLiteral: function(a) {
        this.opcode("pushLiteral", a.value)
      },
      BooleanLiteral: function(a) {
        this.opcode("pushLiteral", a.value)
      },
      UndefinedLiteral: function() {
        this.opcode("pushLiteral", "undefined")
      },
      NullLiteral: function() {
        this.opcode("pushLiteral", "null")
      },
      Hash: function(a) {
        var b = a.pairs,
          c = 0,
          d = b.length;
        for (this.opcode("pushHash"); c < d; c++) this.pushParam(b[c].value);
        for (; c--;) this.opcode("assignToHash", b[c].key);
        this.opcode("popHash")
      },
      opcode: function(a) {
        this.opcodes.push({
          opcode: a,
          args: p.call(arguments, 1),
          loc: this.sourceNode[0].loc
        })
      },
      addDepth: function(a) {
        a && (this.useDepths = !0)
      },
      classifySexpr: function(a) {
        var b = o["default"].helpers.simpleId(a.path),
          c = b && !!this.blockParamIndex(a.path.parts[0]),
          d = !c && o["default"].helpers.helperExpression(a),
          e = !c && (d || b);
        if (e && !d) {
          var f = a.path.parts[0],
            g = this.options;
          g.knownHelpers[f] ? d = !0 : g.knownHelpersOnly && (e = !1)
        }
        return d ? "helper" : e ? "ambiguous" : "simple"
      },
      pushParams: function(a) {
        for (var b = 0, c = a.length; b < c; b++) this.pushParam(a[b])
      },
      pushParam: function(a) {
        var b = null != a.value ? a.value : a.original || "";
        if (this.stringParams) b.replace && (b = b.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), a.depth && this.addDepth(a.depth), this.opcode("getContext", a.depth || 0), this.opcode("pushStringParam", b, a.type), "SubExpression" === a.type && this.accept(a);
        else {
          if (this.trackIds) {
            var c = void 0;
            if (!a.parts || o["default"].helpers.scopedId(a) || a.depth || (c = this.blockParamIndex(a.parts[0])), c) {
              var d = a.parts.slice(1).join(".");
              this.opcode("pushId", "BlockParam", c, d)
            } else b = a.original || b, b.replace && (b = b.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", a.type, b)
          }
          this.accept(a)
        }
      },
      setupFullMustacheParams: function(a, b, c, d) {
        var e = a.params;
        return this.pushParams(e), this.opcode("pushProgram", b), this.opcode("pushProgram", c), a.hash ? this.accept(a.hash) : this.opcode("emptyHash", d), e
      },
      blockParamIndex: function(a) {
        for (var b = 0, c = this.options.blockParams.length; b < c; b++) {
          var d = this.options.blockParams[b],
            e = d && m.indexOf(d, a);
          if (d && e >= 0) return [b, e]
        }
      }
    }
  }, function(a, b, c) {
    "use strict";

    function d(a) {
      this.value = a
    }

    function e() {}

    function f(a, b, c, d, e) {
      var f = b.popStack(),
        g = c.length;
      for (a && g--; d < g; d++) f = b.nameLookup(f, c[d], e);
      return a ? [b.aliasable("container.strict"), "(", f, ", ", b.quotedString(c[d]), ", ", JSON.stringify(b.source.currentLocation), " )"] : f
    }
    var g = c(60)["default"],
      h = c(1)["default"];
    b.__esModule = !0;
    var i = c(4),
      j = c(6),
      k = h(j),
      l = c(5),
      m = c(92),
      n = h(m);
    e.prototype = {
        nameLookup: function(a, b) {
          return this.internalNameLookup(a, b)
        },
        depthedLookup: function(a) {
          return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(a), ")"]
        },
        compilerInfo: function() {
          var a = i.COMPILER_REVISION,
            b = i.REVISION_CHANGES[a];
          return [a, b]
        },
        appendToBuffer: function(a, b, c) {
          return l.isArray(a) || (a = [a]), a = this.source.wrap(a, b), this.environment.isSimple ? ["return ", a, ";"] : c ? ["buffer += ", a, ";"] : (a.appendToBuffer = !0, a)
        },
        initializeBuffer: function() {
          return this.quotedString("")
        },
        internalNameLookup: function(a, b) {
          return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", a, ",", JSON.stringify(b), ")"]
        },
        lookupPropertyFunctionIsUsed: !1,
        compile: function(a, b, c, d) {
          this.environment = a, this.options = b, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !d, this.name = this.environment.name, this.isChild = !!c, this.context = c || {
            decorators: [],
            programs: [],
            environments: []
          }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = {
            list: []
          }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(a, b), this.useDepths = this.useDepths || a.useDepths || a.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || a.useBlockParams;
          var e = a.opcodes,
            f = void 0,
            g = void 0,
            h = void 0,
            i = void 0;
          for (h = 0, i = e.length; h < i; h++) f = e[h], this.source.currentLocation = f.loc, g = g || f.loc, this[f.opcode].apply(this, f.args);
          if (this.source.currentLocation = g, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new k["default"]("Compile completed with content left on stack");
          this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), ";\n"]), this.decorators.push("return fn;"), d ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"), this.decorators.push("}\n"), this.decorators = this.decorators.merge()));
          var j = this.createFunctionContext(d);
          if (this.isChild) return j;
          var l = {
            compiler: this.compilerInfo(),
            main: j
          };
          this.decorators && (l.main_d = this.decorators, l.useDecorators = !0);
          var m = this.context,
            n = m.programs,
            o = m.decorators;
          for (h = 0, i = n.length; h < i; h++) n[h] && (l[h] = n[h], o[h] && (l[h + "_d"] = o[h], l.useDecorators = !0));
          return this.environment.usePartial && (l.usePartial = !0), this.options.data && (l.useData = !0), this.useDepths && (l.useDepths = !0), this.useBlockParams && (l.useBlockParams = !0), this.options.compat && (l.compat = !0), d ? l.compilerOptions = this.options : (l.compiler = JSON.stringify(l.compiler), this.source.currentLocation = {
            start: {
              line: 1,
              column: 0
            }
          }, l = this.objectLiteral(l), b.srcName ? (l = l.toStringWithSourceMap({
            file: b.destName
          }), l.map = l.map && l.map.toString()) : l = l.toString()), l
        },
        preamble: function() {
          this.lastContext = 0, this.source = new n["default"](this.options.srcName), this.decorators = new n["default"](this.options.srcName)
        },
        createFunctionContext: function(a) {
          var b = this,
            c = "",
            d = this.stackVars.concat(this.registers.list);
          d.length > 0 && (c += ", " + d.join(", "));
          var e = 0;
          g(this.aliases).forEach(function(a) {
            var d = b.aliases[a];
            d.children && d.referenceCount > 1 && (c += ", alias" + ++e + "=" + a, d.children[0] = "alias" + e)
          }), this.lookupPropertyFunctionIsUsed && (c += ", " + this.lookupPropertyFunctionVarDeclaration());
          var f = ["container", "depth0", "helpers", "partials", "data"];
          (this.useBlockParams || this.useDepths) && f.push("blockParams"), this.useDepths && f.push("depths");
          var h = this.mergeSource(c);
          return a ? (f.push(h), Function.apply(this, f)) : this.source.wrap(["function(", f.join(","), ") {\n  ", h, "}"])
        },
        mergeSource: function(a) {
          var b = this.environment.isSimple,
            c = !this.forceBuffer,
            d = void 0,
            e = void 0,
            f = void 0,
            g = void 0;
          return this.source.each(function(a) {
            a.appendToBuffer ? (f ? a.prepend("  + ") : f = a, g = a) : (f && (e ? f.prepend("buffer += ") : d = !0, g.add(";"), f = g = void 0), e = !0, b || (c = !1))
          }), c ? f ? (f.prepend("return "), g.add(";")) : e || this.source.push('return "";') : (a += ", buffer = " + (d ? "" : this.initializeBuffer()), f ? (f.prepend("return buffer + "), g.add(";")) : this.source.push("return buffer;")), a && this.source.prepend("var " + a.substring(2) + (d ? "" : ";\n")), this.source.merge()
        },
        lookupPropertyFunctionVarDeclaration: function() {
          return "\n      lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    }\n    ".trim()
        },
        blockValue: function(a) {
          var b = this.aliasable("container.hooks.blockHelperMissing"),
            c = [this.contextName(0)];
          this.setupHelperArgs(a, 0, c);
          var d = this.popStack();
          c.splice(1, 0, d), this.push(this.source.functionCall(b, "call", c))
        },
        ambiguousBlockValue: function() {
          var a = this.aliasable("container.hooks.blockHelperMissing"),
            b = [this.contextName(0)];
          this.setupHelperArgs("", 0, b, !0), this.flushInline();
          var c = this.topStack();
          b.splice(1, 0, c), this.pushSource(["if (!", this.lastHelper, ") { ", c, " = ", this.source.functionCall(a, "call", b), "}"])
        },
        appendContent: function(a) {
          this.pendingContent ? a = this.pendingContent + a : this.pendingLocation = this.source.currentLocation, this.pendingContent = a
        },
        append: function() {
          if (this.isInline()) this.replaceStack(function(a) {
            return [" != null ? ", a, ' : ""']
          }), this.pushSource(this.appendToBuffer(this.popStack()));
          else {
            var a = this.popStack();
            this.pushSource(["if (", a, " != null) { ", this.appendToBuffer(a, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"])
          }
        },
        appendEscaped: function() {
          this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]))
        },
        getContext: function(a) {
          this.lastContext = a
        },
        pushContext: function() {
          this.pushStackLiteral(this.contextName(this.lastContext))
        },
        lookupOnContext: function(a, b, c, d) {
          var e = 0;
          d || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(a[e++])), this.resolvePath("context", a, e, b, c)
        },
        lookupBlockParam: function(a, b) {
          this.useBlockParams = !0, this.push(["blockParams[", a[0], "][", a[1], "]"]), this.resolvePath("context", b, 1)
        },
        lookupData: function(a, b, c) {
          a ? this.pushStackLiteral("container.data(data, " + a + ")") : this.pushStackLiteral("data"), this.resolvePath("data", b, 0, !0, c)
        },
        resolvePath: function(a, b, c, d, e) {
          var g = this;
          if (this.options.strict || this.options.assumeObjects) return void this.push(f(this.options.strict && e, this, b, c, a));
          for (var h = b.length; c < h; c++) this.replaceStack(function(e) {
            var f = g.nameLookup(e, b[c], a);
            return d ? [" && ", f] : [" != null ? ", f, " : ", e]
          })
        },
        resolvePossibleLambda: function() {
          this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"])
        },
        pushStringParam: function(a, b) {
          this.pushContext(), this.pushString(b), "SubExpression" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a))
        },
        emptyHash: function(a) {
          this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(a ? "undefined" : "{}")
        },
        pushHash: function() {
          this.hash && this.hashes.push(this.hash), this.hash = {
            values: {},
            types: [],
            contexts: [],
            ids: []
          }
        },
        popHash: function() {
          var a = this.hash;
          this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(a.ids)), this.stringParams && (this.push(this.objectLiteral(a.contexts)), this.push(this.objectLiteral(a.types))), this.push(this.objectLiteral(a.values))
        },
        pushString: function(a) {
          this.pushStackLiteral(this.quotedString(a))
        },
        pushLiteral: function(a) {
          this.pushStackLiteral(a)
        },
        pushProgram: function(a) {
          null != a ? this.pushStackLiteral(this.programExpression(a)) : this.pushStackLiteral(null)
        },
        registerDecorator: function(a, b) {
          var c = this.nameLookup("decorators", b, "decorator"),
            d = this.setupHelperArgs(b, a);
          this.decorators.push(["fn = ", this.decorators.functionCall(c, "", ["fn", "props", "container", d]), " || fn;"])
        },
        invokeHelper: function(a, b, c) {
          var d = this.popStack(),
            e = this.setupHelper(a, b),
            f = [];
          c && f.push(e.name), f.push(d), this.options.strict || f.push(this.aliasable("container.hooks.helperMissing"));
          var g = ["(", this.itemsSeparatedBy(f, "||"), ")"],
            h = this.source.functionCall(g, "call", e.callParams);
          this.push(h)
        },
        itemsSeparatedBy: function(a, b) {
          var c = [];
          c.push(a[0]);
          for (var d = 1; d < a.length; d++) c.push(b, a[d]);
          return c
        },
        invokeKnownHelper: function(a, b) {
          var c = this.setupHelper(a, b);
          this.push(this.source.functionCall(c.name, "call", c.callParams))
        },
        invokeAmbiguous: function(a, b) {
          this.useRegister("helper");
          var c = this.popStack();
          this.emptyHash();
          var d = this.setupHelper(0, a, b),
            e = this.lastHelper = this.nameLookup("helpers", a, "helper"),
            f = ["(", "(helper = ", e, " || ", c, ")"];
          this.options.strict || (f[0] = "(helper = ", f.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", f, d.paramsInit ? ["),(", d.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", d.callParams), " : helper))"])
        },
        invokePartial: function(a, b, c) {
          var d = [],
            e = this.setupParams(b, 1, d);
          a && (b = this.popStack(), delete e.name), c && (e.indent = JSON.stringify(c)), e.helpers = "helpers", e.partials = "partials", e.decorators = "container.decorators", a ? d.unshift(b) : d.unshift(this.nameLookup("partials", b, "partial")), this.options.compat && (e.depths = "depths"), e = this.objectLiteral(e), d.push(e), this.push(this.source.functionCall("container.invokePartial", "", d))
        },
        assignToHash: function(a) {
          var b = this.popStack(),
            c = void 0,
            d = void 0,
            e = void 0;
          this.trackIds && (e = this.popStack()), this.stringParams && (d = this.popStack(), c = this.popStack());
          var f = this.hash;
          c && (f.contexts[a] = c), d && (f.types[a] = d), e && (f.ids[a] = e), f.values[a] = b
        },
        pushId: function(a, b, c) {
          "BlockParam" === a ? this.pushStackLiteral("blockParams[" + b[0] + "].path[" + b[1] + "]" + (c ? " + " + JSON.stringify("." + c) : "")) : "PathExpression" === a ? this.pushString(b) : "SubExpression" === a ? this.pushStackLiteral("true") : this.pushStackLiteral("null")
        },
        compiler: e,
        compileChildren: function(a, b) {
          for (var c = a.children, d = void 0, e = void 0, f = 0, g = c.length; f < g; f++) {
            d = c[f], e = new this.compiler;
            var h = this.matchExistingProgram(d);
            if (null == h) {
              this.context.programs.push("");
              var i = this.context.programs.length;
              d.index = i, d.name = "program" + i, this.context.programs[i] = e.compile(d, b, this.context, !this.precompile), this.context.decorators[i] = e.decorators, this.context.environments[i] = d, this.useDepths = this.useDepths || e.useDepths, this.useBlockParams = this.useBlockParams || e.useBlockParams, d.useDepths = this.useDepths, d.useBlockParams = this.useBlockParams
            } else d.index = h.index, d.name = "program" + h.index, this.useDepths = this.useDepths || h.useDepths, this.useBlockParams = this.useBlockParams || h.useBlockParams
          }
        },
        matchExistingProgram: function(a) {
          for (var b = 0, c = this.context.environments.length; b < c; b++) {
            var d = this.context.environments[b];
            if (d && d.equals(a)) return d
          }
        },
        programExpression: function(a) {
          var b = this.environment.children[a],
            c = [b.index, "data", b.blockParams];
          return (this.useBlockParams || this.useDepths) && c.push("blockParams"), this.useDepths && c.push("depths"), "container.program(" + c.join(", ") + ")"
        },
        useRegister: function(a) {
          this.registers[a] || (this.registers[a] = !0, this.registers.list.push(a))
        },
        push: function(a) {
          return a instanceof d || (a = this.source.wrap(a)), this.inlineStack.push(a), a
        },
        pushStackLiteral: function(a) {
          this.push(new d(a))
        },
        pushSource: function(a) {
          this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), a && this.source.push(a)
        },
        replaceStack: function(a) {
          var b = ["("],
            c = void 0,
            e = void 0,
            f = void 0;
          if (!this.isInline()) throw new k["default"]("replaceStack on non-inline");
          var g = this.popStack(!0);
          if (g instanceof d) c = [g.value], b = ["(", c], f = !0;
          else {
            e = !0;
            var h = this.incrStack();
            b = ["((", this.push(h), " = ", g, ")"], c = this.topStack()
          }
          var i = a.call(this, c);
          f || this.popStack(), e && this.stackSlot--, this.push(b.concat(i, ")"))
        },
        incrStack: function() {
          return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
        },
        topStackName: function() {
          return "stack" + this.stackSlot
        },
        flushInline: function() {
          var a = this.inlineStack;
          this.inlineStack = [];
          for (var b = 0, c = a.length; b < c; b++) {
            var e = a[b];
            if (e instanceof d) this.compileStack.push(e);
            else {
              var f = this.incrStack();
              this.pushSource([f, " = ", e, ";"]), this.compileStack.push(f)
            }
          }
        },
        isInline: function() {
          return this.inlineStack.length
        },
        popStack: function(a) {
          var b = this.isInline(),
            c = (b ? this.inlineStack : this.compileStack).pop();
          if (!a && c instanceof d) return c.value;
          if (!b) {
            if (!this.stackSlot) throw new k["default"]("Invalid stack pop");
            this.stackSlot--
          }
          return c
        },
        topStack: function() {
          var a = this.isInline() ? this.inlineStack : this.compileStack,
            b = a[a.length - 1];
          return b instanceof d ? b.value : b
        },
        contextName: function(a) {
          return this.useDepths && a ? "depths[" + a + "]" : "depth" + a
        },
        quotedString: function(a) {
          return this.source.quotedString(a)
        },
        objectLiteral: function(a) {
          return this.source.objectLiteral(a)
        },
        aliasable: function(a) {
          var b = this.aliases[a];
          return b ? (b.referenceCount++, b) : (b = this.aliases[a] = this.source.wrap(a), b.aliasable = !0, b.referenceCount = 1, b)
        },
        setupHelper: function(a, b, c) {
          var d = [],
            e = this.setupHelperArgs(b, a, d, c),
            f = this.nameLookup("helpers", b, "helper"),
            g = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
          return {
            params: d,
            paramsInit: e,
            name: f,
            callParams: [g].concat(d)
          }
        },
        setupParams: function(a, b, c) {
          var d = {},
            e = [],
            f = [],
            g = [],
            h = !c,
            i = void 0;
          h && (c = []), d.name = this.quotedString(a), d.hash = this.popStack(), this.trackIds && (d.hashIds = this.popStack()), this.stringParams && (d.hashTypes = this.popStack(), d.hashContexts = this.popStack());
          var j = this.popStack(),
            k = this.popStack();
          (k || j) && (d.fn = k || "container.noop", d.inverse = j || "container.noop");
          for (var l = b; l--;) i = this.popStack(), c[l] = i, this.trackIds && (g[l] = this.popStack()), this.stringParams && (f[l] = this.popStack(), e[l] = this.popStack());
          return h && (d.args = this.source.generateArray(c)), this.trackIds && (d.ids = this.source.generateArray(g)), this.stringParams && (d.types = this.source.generateArray(f), d.contexts = this.source.generateArray(e)), this.options.data && (d.data = "data"), this.useBlockParams && (d.blockParams = "blockParams"), d
        },
        setupHelperArgs: function(a, b, c, d) {
          var e = this.setupParams(a, b, c);
          return e.loc = JSON.stringify(this.source.currentLocation), e = this.objectLiteral(e), d ? (this.useRegister("options"), c.push("options"), ["options=", e]) : c ? (c.push(e), "") : e
        }
      },
      function() {
        for (var a = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), b = e.RESERVED_WORDS = {}, c = 0, d = a.length; c < d; c++) b[a[c]] = !0
      }(), e.isValidJavaScriptVariableName = function(a) {
        return !e.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)
      }, b["default"] = e, a.exports = b["default"]
  }, function(a, b, c) {
    "use strict";

    function d(a, b, c) {
      if (g.isArray(a)) {
        for (var d = [], e = 0, f = a.length; e < f; e++) d.push(b.wrap(a[e], c));
        return d
      }
      return "boolean" == typeof a || "number" == typeof a ? a + "" : a
    }

    function e(a) {
      this.srcFile = a, this.source = []
    }
    var f = c(60)["default"];
    b.__esModule = !0;
    var g = c(5),
      h = void 0;
    try {} catch (i) {}
    h || (h = function(a, b, c, d) {
      this.src = "", d && this.add(d)
    }, h.prototype = {
      add: function(a) {
        g.isArray(a) && (a = a.join("")), this.src += a
      },
      prepend: function(a) {
        g.isArray(a) && (a = a.join("")), this.src = a + this.src
      },
      toStringWithSourceMap: function() {
        return {
          code: this.toString()
        }
      },
      toString: function() {
        return this.src
      }
    }), e.prototype = {
      isEmpty: function() {
        return !this.source.length
      },
      prepend: function(a, b) {
        this.source.unshift(this.wrap(a, b))
      },
      push: function(a, b) {
        this.source.push(this.wrap(a, b))
      },
      merge: function() {
        var a = this.empty();
        return this.each(function(b) {
          a.add(["  ", b, "\n"])
        }), a
      },
      each: function(a) {
        for (var b = 0, c = this.source.length; b < c; b++) a(this.source[b])
      },
      empty: function() {
        var a = this.currentLocation || {
          start: {}
        };
        return new h(a.start.line, a.start.column, this.srcFile)
      },
      wrap: function(a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? this.currentLocation || {
          start: {}
        } : arguments[1];
        return a instanceof h ? a : (a = d(a, this, b), new h(b.start.line, b.start.column, this.srcFile, a))
      },
      functionCall: function(a, b, c) {
        return c = this.generateList(c), this.wrap([a, b ? "." + b + "(" : "(", c, ")"])
      },
      quotedString: function(a) {
        return '"' + (a + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
      },
      objectLiteral: function(a) {
        var b = this,
          c = [];
        f(a).forEach(function(e) {
          var f = d(a[e], b);
          "undefined" !== f && c.push([b.quotedString(e), ":", f])
        });
        var e = this.generateList(c);
        return e.prepend("{"), e.add("}"), e
      },
      generateList: function(a) {
        for (var b = this.empty(), c = 0, e = a.length; c < e; c++) c && b.add(","), b.add(d(a[c], this));
        return b
      },
      generateArray: function(a) {
        var b = this.generateList(a);
        return b.prepend("["), b.add("]"), b
      }
    }, b["default"] = e, a.exports = b["default"]
  }])
});
Handlebars.registerHelper("urlencode", function(obj) {
  return new Handlebars.SafeString(encodeURIComponent(obj))
});
Handlebars.registerHelper("debug", function(obj) {
  return new Handlebars.SafeString("<pre>" + JSON.stringify(obj, null, 2) + "</pre>")
});
Handlebars.registerHelper("desktopbackground", function(opt) {
  var html = 'style="';
  if (!opt) {
    return ""
  }
  switch (opt.type) {
    case "image":
      html += "background-image: url('" + opt.url + "');";
      var bgfilter = opt.image.filter ?? "";
      if (bgfilter != "") {
        html += "filter: " + bgfilter + ";"
      }
      break;
    case "bgcolor":
      html += "backgroundColor: " + opt.bgcolor + ";";
      break;
    case "filter":
      html += "background-image: " + opt.filter + ";";
      break
  }
  html += '"';
  return new Handlebars.SafeString(html)
});
Handlebars.registerHelper("humandate", function(value) {
  var dte = new Date(value);
  var dteStr = dte.toLocaleDateString() + " " + dte.toLocaleTimeString();
  return new Handlebars.SafeString(dteStr)
});
Handlebars.registerHelper("humandateonly", function(value) {
  var dte = new Date(value);
  var dteStr = dte.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short"
  });
  return new Handlebars.SafeString(dteStr)
});
Handlebars.registerHelper("isempty", function(field, options) {
  if (field) {
    if (field === "") {
      return options.fn(this)
    }
    return options.inverse(this)
  }
  return options.fn(this)
});
Handlebars.registerHelper("isnotempty", function(field, options) {
  if (field) {
    if (field === "") {
      return options.inverse(this)
    }
    return options.fn(this)
  }
  return options.inverse(this)
});
Handlebars.registerHelper("label", function(key, context) {
  if (context.Config.Labels[key]) {
    return new Handlebars.SafeString(context.Config.Labels[key])
  }
  return new Handlebars.SafeString("")
});
Handlebars.registerHelper("map", function(array, iter) {
  if (!Array.isArray(array)) return "";
  var len = array.length;
  var res = new Array(len);
  var i = -1;
  while (++i < len) {
    if (typeof iter !== "function") {
      res[i] = array[i][iter]
    } else {
      res[i] = iter(array[i], i, array)
    }
  }
  return res
});
Handlebars.registerHelper("now", function() {
  var dte = new Date;
  var dteStr = dte.toLocaleDateString() + " " + dte.toLocaleTimeString();
  return new Handlebars.SafeString(dteStr)
});
Handlebars.registerHelper("service", function(name, services, parent, opacity, settings) {
  var html = "";
  var template = "";
  var p = parent;
  var type = "container";
  var realName = name.toLowerCase();
  p.opacity = opacity;
  if (name.includes(".")) {
    var arr = name.toLowerCase().split(".");
    type = arr[0].toLowerCase();
    realName = arr[1]
  }
  switch (type) {
    case "widget":
      template = name.toLowerCase().replace(".", "-").replace(/\//g, "_");
      switch (realName) {
        case "weather":
          var serviceUrl = "/api/resources/weather?latitude=" + settings.latitude + "&longitude=" + settings.longitude;
          if (settings.days) {
            serviceUrl += "&days=" + settings.days
          }
          html = '<div class="hbs-template" data-url="' + serviceUrl + '"  data-template="partials/widget-weather"></div>';
          settings.serviceUrl = serviceUrl;
          break;
        default:
          var f = Handlebars.partials[template];
          if (f) {
            html = f({
              settings: settings,
              parent: p
            })
          }
          break
      }
      break;
    case "container":
      template = "service".replace(/\//g, "_");
      services.forEach(s => {
        if (s.containerName.toLowerCase() == realName) {
          var f = Handlebars.partials[template];
          html = f({
            service: s,
            parent: p
          });
          return
        }
      });
      break;
    case "link":
      template = "widget-link";
      var url = "";
      name = "";
      var iconCatalog = "";
      var iconSlug = "";
      if (settings) {
        url = settings.url ?? "";
        name = settings.name ?? "";
        iconCatalog = settings.iconCatalog ?? "";
        iconSlug = settings.iconSlug ?? ""
      }
      var tf = Handlebars.partials[template];
      html = tf({
        settings: {
          iconCatalog: iconCatalog,
          iconSlug: iconSlug,
          url: url,
          name: name
        },
        parent: p
      });
      break
  }
  return new Handlebars.SafeString(html)
});
Handlebars.registerHelper("stringify", function(obj) {
  return new Handlebars.SafeString(JSON.stringify(obj, null, 0))
});
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["compose"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    return '<div class="container">\n  <div class="mb-3">\n    <label for="txtRun" class="form-label">Run command:</label><br />\n    <textarea style="white-space: pre;overflow-wrap: normal;overflow-x: scroll;height:300px;width:700px;overflow:scroll !important; font-family: monospace" id="txtRun"></textarea><br />\n    <button type="button" class="btn btn-primary" onclick="doComposerise(\'#txtRun\', \'#txtCompose\'); return false;">Convert to Compose</button>\n    <hr />\n    <label for="txtCompose" class="form-label">Docker compose definition:</label><br />\n    <textarea style="display:none;white-space: pre;overflow-wrap: normal;overflow-x: scroll;height:300px;width:700px;overflow:scroll !important; font-family: monospace" id="txtCompose"></textarea>\n    <div id="yamlEdit" class="editor"></div>\n    <script type="text/javascript">\n      createEditor("yamlEdit", "txtCompose");\n\n    <\/script>\n    <br />\n    <button type="button" class="btn btn-primary" onclick="doDeComposerise(\'#txtCompose\', \'#txtRun\'); return false;">Convert to run</button>\n    <hr />\n\n  </div>\n</div>\n'
  },
  useData: true
});
this["app"]["templates"]["containerinfo"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression((helper = (helper = lookupProperty(helpers, "icon_slug") || (depth0 != null ? lookupProperty(depth0, "icon_slug") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      name: "icon_slug",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 10,
          column: 121
        },
        end: {
          line: 10,
          column: 134
        }
      }
    }) : helper))
  },
  3: function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      name: "Name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 10,
          column: 142
        },
        end: {
          line: 10,
          column: 150
        }
      }
    }) : helper))
  },
  5: function(container, depth0, helpers, partials, data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "              <tr>\n                <td>Downtime:</td>\n                <td>" + container.escapeExpression((lookupProperty(helpers, "secondstotime") || depth0 && lookupProperty(depth0, "secondstotime") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "downtime") : depth0, "long", {
      name: "secondstotime",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 26,
          column: 20
        },
        end: {
          line: 26,
          column: 53
        }
      }
    })) + "</td>\n              </tr>\n"
  },
  7: function(container, depth0, helpers, partials, data) {
    return "Update Available"
  },
  9: function(container, depth0, helpers, partials, data) {
    return "Up-to-date"
  },
  11: function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '          <button onclick="composeEdit(this); return false;" data-containerid="' + alias1((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      name: "Name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 58,
          column: 79
        },
        end: {
          line: 58,
          column: 87
        }
      }
    }) : helper)) + '" data-project="' + alias1(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "editor") : depth0) != null ? lookupProperty(stack1, "project") : stack1, depth0)) + '" type="button" class="btn btn-secondary"><i class="fa-regular fa-pen-to-square"></i> Edit</button>\n'
  },
  13: function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '          <button onclick="composeEdit(this); return false;" data-containerid="' + alias1((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      name: "Name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 60,
          column: 79
        },
        end: {
          line: 60,
          column: 87
        }
      }
    }) : helper)) + '" data-project="' + alias1(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "editor") : depth0) != null ? lookupProperty(stack1, "project") : stack1, depth0)) + '" type="button" class="btn btn-secondary"><i class="fa-regular fa-square-plus"></i> Edit</button>\n'
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      alias5 = container.lambda,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '<div class="modal fade" id="containerInfoModal" tabindex="-1" aria-label>\n  <div class="modal-dialog modal-dialog-scrollable modal-lg">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h1 class="modal-title fs-5" id="containerInfoLabel">' + alias4((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "Name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 5,
          column: 61
        },
        end: {
          line: 5,
          column: 69
        }
      }
    }) : helper)) + '</h1>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body">\n        <div style="text-align:center;margin-top:5px" class="card">\n          <img class="card-img-top" style="padding:5px;width:10rem;height:10rem;" src="/api/icons/query/' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "icon_slug") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.program(3, data, 0),
      data: data,
      loc: {
        start: {
          line: 10,
          column: 104
        },
        end: {
          line: 10,
          column: 157
        }
      }
    })) != null ? stack1 : "") + '" />\n        </div>\n        <div class="card-body">\n          <p class="card-text">\n          <table border="0" cellpadding="2" cellspacing="0">\n            <tr>\n              <td>Hostname:</td>\n              <td>' + alias4(alias5((stack1 = depth0 != null ? lookupProperty(depth0, "Config") : depth0) != null ? lookupProperty(stack1, "Hostname") : stack1, depth0)) + "</td>\n            </tr>\n            <tr>\n              <td>Image:</td>\n              <td>" + alias4(alias5((stack1 = depth0 != null ? lookupProperty(depth0, "Config") : depth0) != null ? lookupProperty(stack1, "Image") : stack1, depth0)) + "</td>\n            </tr>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "downtime") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(5, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 23,
          column: 12
        },
        end: {
          line: 28,
          column: 19
        }
      }
    })) != null ? stack1 : "") + "            <tr>\n              <td></td>\n              <td>" + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "UpdateStatus") : depth0) != null ? lookupProperty(stack1, "updateDue") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(7, data, 0),
      inverse: container.program(9, data, 0),
      data: data,
      loc: {
        start: {
          line: 31,
          column: 18
        },
        end: {
          line: 31,
          column: 89
        }
      }
    })) != null ? stack1 : "") + "</td>\n            </tr>\n            <tr>\n              <td>Created:</td>\n              <td>" + alias4(alias5((stack1 = depth0 != null ? lookupProperty(depth0, "UpdateStatus") : depth0) != null ? lookupProperty(stack1, "imageCreated") : stack1, depth0)) + "</td>\n            </tr>\n            <tr>\n              <td>Latest Build:</td>\n              <td>" + alias4(alias5((stack1 = depth0 != null ? lookupProperty(depth0, "UpdateStatus") : depth0) != null ? lookupProperty(stack1, "latestBuildDate") : stack1, depth0)) + "</td>\n            </tr>\n            <tr>\n              <td>Status:</td>\n              <td>" + alias4(alias5((stack1 = depth0 != null ? lookupProperty(depth0, "State") : depth0) != null ? lookupProperty(stack1, "Status") : stack1, depth0)) + "</td>\n            </tr>\n            <tr>\n              <td>Health:</td>\n              <td>" + alias4(alias5((stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "State") : depth0) != null ? lookupProperty(stack1, "Health") : stack1) != null ? lookupProperty(stack1, "Status") : stack1, depth0)) + '</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-danger" data-containerid="' + alias4((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "Name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 53,
          column: 71
        },
        end: {
          line: 53,
          column: 79
        }
      }
    }) : helper)) + '" data-command="container-stop">Stop</button>\n        <button type="button" class="btn btn-secondary" data-containerid="' + alias4((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "Name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 54,
          column: 74
        },
        end: {
          line: 54,
          column: 82
        }
      }
    }) : helper)) + '" data-command="container-start">Start</button>\n        <button type="button" class="btn btn-secondary" data-containerid="' + alias4((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "Name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 55,
          column: 74
        },
        end: {
          line: 55,
          column: 82
        }
      }
    }) : helper)) + '" data-command="container-restart">Restart</button>\n        <button type="button" class="btn btn-secondary" data-containerid="' + alias4((helper = (helper = lookupProperty(helpers, "Name") || (depth0 != null ? lookupProperty(depth0, "Name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "Name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 56,
          column: 74
        },
        end: {
          line: 56,
          column: 82
        }
      }
    }) : helper)) + '" onclick="startContainerMonitor(this); return false;">Monitor</button>\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "editor") : depth0) != null ? lookupProperty(stack1, "editable") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(11, data, 0),
      inverse: container.program(13, data, 0),
      data: data,
      loc: {
        start: {
          line: 57,
          column: 8
        },
        end: {
          line: 61,
          column: 15
        }
      }
    })) != null ? stack1 : "") + '        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'
  },
  useData: true
});
this["app"]["templates"]["desktopfooter"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '<footer class="fixed-bottom bg-body-tertiary text-muted" style="height:40px">\n  <div class="container" style="padding-top:5px">\n    Version ' + alias3((lookupProperty(helpers, "buildversion") || depth0 && lookupProperty(depth0, "buildversion") || alias2).call(alias1, "version", {
      name: "buildversion",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 3,
          column: 12
        },
        end: {
          line: 3,
          column: 38
        }
      }
    })) + ", Build " + alias3((lookupProperty(helpers, "buildversion") || depth0 && lookupProperty(depth0, "buildversion") || alias2).call(alias1, "buildDateStr", {
      name: "buildversion",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 3,
          column: 46
        },
        end: {
          line: 3,
          column: 77
        }
      }
    })) + '\n    <div id="footer">\n    </div>\n  </div>\n</footer>\n'
  },
  useData: true
});
this["app"]["templates"]["desktopheader"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '          <li class="nav-item">\n            ' + container.escapeExpression((lookupProperty(helpers, "toolbaritem") || depth0 && lookupProperty(depth0, "toolbaritem") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, depth0, {
      name: "toolbaritem",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 11,
          column: 12
        },
        end: {
          line: 11,
          column: 32
        }
      }
    })) + "\n          </li>\n"
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '<nav class="navbar navbar-expand-lg sticky-top bg-brand">\n  <div class="container-fluid">\n    <a class="navbar-brand" href="/"><img width="38px" height=38px" src="/assets/img/logo.png" />&nbsp; DiscovrNinja!</a>\n    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">\n      <span class="navbar-toggler-icon"></span>\n    </button>\n    <div class="collapse navbar-collapse" id="navbarNavDropdown">\n      <ul class="navbar-nav">\n' + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "desktop") : depth0) != null ? lookupProperty(stack1, "header") : stack1) != null ? lookupProperty(stack1, "items") : stack1, {
      name: "each",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 13,
          column: 17
        }
      }
    })) != null ? stack1 : "") + '        <li class="nav-item">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "themechooser"), depth0, {
      name: "themechooser",
      data: data,
      indent: "          ",
      helpers: helpers,
      partials: partials,
      decorators: container.decorators
    })) != null ? stack1 : "") + "        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>\n"
  },
  usePartial: true,
  useData: true
});
this["app"]["templates"]["dockerps"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '        <tr class="nowrap">\n          <td>\n            <a title="Navigate to" ' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "publicUrl") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(2, data, 0),
      inverse: container.program(4, data, 0),
      data: data,
      loc: {
        start: {
          line: 20,
          column: 35
        },
        end: {
          line: 20,
          column: 195
        }
      }
    })) != null ? stack1 : "") + '><i class="fa-solid fa-link"></i></a>\n            <a title="Export" href="#" data-containerid="' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 21,
          column: 57
        },
        end: {
          line: 21,
          column: 65
        }
      }
    }) : helper)) + '" onclick="exportContainer(this); return false;" class="btn btn-outline-secondary btn-sm"><i class="fa-solid fa-file-export"></i></a>\n            <a title="Edit container" href="#" data-containerid="' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 22,
          column: 65
        },
        end: {
          line: 22,
          column: 73
        }
      }
    }) : helper)) + '" data-project="' + alias4((helper = (helper = lookupProperty(helpers, "project") || (depth0 != null ? lookupProperty(depth0, "project") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "project",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 22,
          column: 89
        },
        end: {
          line: 22,
          column: 100
        }
      }
    }) : helper)) + '" onclick="composeEdit(this); return false;" class="btn btn-outline-secondary btn-sm"><i class="fa-regular fa-pen-to-square"></i></a>\n          </td>\n          <td>\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "configured") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(6, data, 0),
      inverse: container.program(8, data, 0),
      data: data,
      loc: {
        start: {
          line: 25,
          column: 12
        },
        end: {
          line: 29,
          column: 19
        }
      }
    })) != null ? stack1 : "") + '          </td>\n\n          <td align="center" ' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "healthy") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(9, data, 0),
      inverse: container.program(11, data, 0),
      data: data,
      loc: {
        start: {
          line: 32,
          column: 29
        },
        end: {
          line: 32,
          column: 88
        }
      }
    })) != null ? stack1 : "") + '><i class="' + alias4((helper = (helper = lookupProperty(helpers, "stateCss") || (depth0 != null ? lookupProperty(depth0, "stateCss") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "stateCss",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 32,
          column: 99
        },
        end: {
          line: 32,
          column: 111
        }
      }
    }) : helper)) + '" data-bs-toggle="tooltip" title="' + alias4((helper = (helper = lookupProperty(helpers, "status") || (depth0 != null ? lookupProperty(depth0, "status") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "status",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 32,
          column: 145
        },
        end: {
          line: 32,
          column: 155
        }
      }
    }) : helper)) + '" data-bs-title="' + alias4((helper = (helper = lookupProperty(helpers, "status") || (depth0 != null ? lookupProperty(depth0, "status") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "status",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 32,
          column: 172
        },
        end: {
          line: 32,
          column: 182
        }
      }
    }) : helper)) + '"></i>\n          </td>\n          <td ' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "healthy") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(13, data, 0),
      inverse: container.program(11, data, 0),
      data: data,
      loc: {
        start: {
          line: 34,
          column: 14
        },
        end: {
          line: 34,
          column: 116
        }
      }
    })) != null ? stack1 : "") + ">\n            " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "shutdown") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(16, data, 0),
      inverse: container.program(18, data, 0),
      data: data,
      loc: {
        start: {
          line: 35,
          column: 12
        },
        end: {
          line: 35,
          column: 68
        }
      }
    })) != null ? stack1 : "") + "\n          </td>\n          <td " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "healthy") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(9, data, 0),
      inverse: container.program(11, data, 0),
      data: data,
      loc: {
        start: {
          line: 37,
          column: 14
        },
        end: {
          line: 37,
          column: 73
        }
      }
    })) != null ? stack1 : "") + ">" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "shutdown") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(16, data, 0),
      inverse: container.program(20, data, 0),
      data: data,
      loc: {
        start: {
          line: 37,
          column: 74
        },
        end: {
          line: 37,
          column: 130
        }
      }
    })) != null ? stack1 : "") + "</td>\n          <td " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "healthy") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(22, data, 0),
      inverse: container.program(11, data, 0),
      data: data,
      loc: {
        start: {
          line: 38,
          column: 14
        },
        end: {
          line: 38,
          column: 119
        }
      }
    })) != null ? stack1 : "") + ">" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "shutdown") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(16, data, 0),
      inverse: container.program(24, data, 0),
      data: data,
      loc: {
        start: {
          line: 38,
          column: 120
        },
        end: {
          line: 38,
          column: 182
        }
      }
    })) != null ? stack1 : "") + '</td>\n          <td><span class="' + alias4((helper = (helper = lookupProperty(helpers, "colorLevel") || (depth0 != null ? lookupProperty(depth0, "colorLevel") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "colorLevel",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 39,
          column: 27
        },
        end: {
          line: 39,
          column: 41
        }
      }
    }) : helper)) + '">' + alias4((helper = (helper = lookupProperty(helpers, "uptimeSecondsPercent") || (depth0 != null ? lookupProperty(depth0, "uptimeSecondsPercent") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "uptimeSecondsPercent",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 39,
          column: 43
        },
        end: {
          line: 39,
          column: 67
        }
      }
    }) : helper)) + "</span></td>\n        </tr>\n"
  },
  2: function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return 'href="' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "publicUrl") || (depth0 != null ? lookupProperty(depth0, "publicUrl") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      name: "publicUrl",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 20,
          column: 58
        },
        end: {
          line: 20,
          column: 71
        }
      }
    }) : helper)) + '" target="_new" class="btn btn-outline-secondary btn-sm" '
  },
  4: function(container, depth0, helpers, partials, data) {
    return ' class="btn btn-outline-secondary btn-sm  disabled" '
  },
  6: function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '              <span class="text-info">' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      name: "name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 26,
          column: 38
        },
        end: {
          line: 26,
          column: 46
        }
      }
    }) : helper)) + "</span>\n"
  },
  8: function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '              <a title="View properties" href="#" data-containerid="' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 28,
          column: 68
        },
        end: {
          line: 28,
          column: 76
        }
      }
    }) : helper)) + '" ' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "healthy") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(9, data, 0),
      inverse: container.program(11, data, 0),
      data: data,
      loc: {
        start: {
          line: 28,
          column: 78
        },
        end: {
          line: 28,
          column: 137
        }
      }
    })) != null ? stack1 : "") + ' onclick="containerInfo(this);return false;">' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 28,
          column: 182
        },
        end: {
          line: 28,
          column: 190
        }
      }
    }) : helper)) + "</a>\n"
  },
  9: function(container, depth0, helpers, partials, data) {
    return ""
  },
  11: function(container, depth0, helpers, partials, data) {
    return 'class="text-danger-emphasis" '
  },
  13: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "cpuAlert") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(14, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 34,
          column: 29
        },
        end: {
          line: 34,
          column: 72
        }
      }
    })) != null ? stack1 : ""
  },
  14: function(container, depth0, helpers, partials, data) {
    return 'class="text-danger" '
  },
  16: function(container, depth0, helpers, partials, data) {
    return "-"
  },
  18: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "stats") : depth0) != null ? lookupProperty(stack1, "cpuPercentStr") : stack1, depth0))
  },
  20: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "stats") : depth0) != null ? lookupProperty(stack1, "memoryUsageStr") : stack1, depth0))
  },
  22: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "memoryAlert") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(14, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 38,
          column: 29
        },
        end: {
          line: 38,
          column: 75
        }
      }
    })) != null ? stack1 : ""
  },
  24: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "stats") : depth0) != null ? lookupProperty(stack1, "memoryFreePercentStr") : stack1, depth0))
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {},
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '<div class="table-responsive">\n  <table class="table table-striped table-sm table-hover align-middle">\n    <caption>' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "now") || (depth0 != null ? lookupProperty(depth0, "now") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(alias1, {
      name: "now",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 3,
          column: 13
        },
        end: {
          line: 3,
          column: 20
        }
      }
    }) : helper)) + "\n      <caption>\n      <thead>\n    <tr>\n      <th></th>\n      <th>Name</th>\n      <th>State</th>\n      <th>CPU</th>\n      <th>Memory</th>\n      <th>% Free</th>\n      <th>Uptime</th>\n    </tr>\n    </thead>\n    <tbody>\n" + ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0, {
      name: "each",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 41,
          column: 17
        }
      }
    })) != null ? stack1 : "") + "    </tbody>\n    <tfoot>\n    </tfoot>\n  </table>\n</div>\n"
  },
  useData: true
});
this["app"]["templates"]["footer"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '<div style="margin-top: 50px;"></div>\n<div style="height:30px;" class="p-2 bg-secondary bg-gradient text-white fixed-bottom">\n  &nbsp; Version: ' + alias3((lookupProperty(helpers, "buildversion") || depth0 && lookupProperty(depth0, "buildversion") || alias2).call(alias1, "version", {
      name: "buildversion",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 3,
          column: 18
        },
        end: {
          line: 3,
          column: 44
        }
      }
    })) + " Date: " + alias3((lookupProperty(helpers, "buildversion") || depth0 && lookupProperty(depth0, "buildversion") || alias2).call(alias1, "buildDateStr", {
      name: "buildversion",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 3,
          column: 51
        },
        end: {
          line: 3,
          column: 82
        }
      }
    })) + "\n</div>\n"
  },
  useData: true
});
this["app"]["templates"]["header"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '<nav class="navbar navbar-expand-lg sticky-top bg-brand" style="background-color: #6f42c1 !important;color: white !important;">\n  <div class="container-fluid">\n    <a class="navbar-brand" href="/admin/index"><img width="38px" height=38px" src="/assets/img/logo.png" />&nbsp; DiscovrNinja!</a>\n\n    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">\n      <span class="navbar-toggler-icon"></span>\n    </button>\n    <div class="collapse navbar-collapse" id="navbarNavDropdown">\n      <ul class="navbar-nav">\n        <li class="nav-item">\n          <a class="nav-link active" aria-current="page" href="/admin/index"><i class="fa-solid fa-house"></i> Home</a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="/"><i class="fa-solid fa-desktop"></i> Desktop</a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="/admin/catalog"><i class="fa-solid fa-book"></i> Catalog</a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" onclick="iconSearch(); return false;" href="#"><i class="fa-solid fa-icons"></i> Icons</a>\n        </li>\n        <li class="nav-item dropdown">\n          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">\n            <i class="fa-solid fa-screwdriver-wrench"></i> Tools\n          </a>\n          <ul class="dropdown-menu">\n            <li><a class="dropdown-item" href="#" onclick="scanDocker(); return false;"><i class="fa-solid fa-map"></i> Scan</a></li>\n            <li>\n              <hr class="dropdown-divider">\n            </li>\n            <li><a class="dropdown-item" href="#" onclick="composerise(); return false;"><i class="fa-solid fa-box"></i> Composerise</a></li>\n          </ul>\n        </li>\n        <li class="nav-item">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "themechooser"), depth0, {
      name: "themechooser",
      data: data,
      indent: "          ",
      helpers: helpers,
      partials: partials,
      decorators: container.decorators
    })) != null ? stack1 : "") + '        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="/auth/logout"><i class="fa-solid fa-power-off"></i> Logout</a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>\n'
  },
  usePartial: true,
  useData: true
});
this["app"]["templates"]["iconsearch"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    return '<div class="modal fade" id="iconSearchModal" tabindex="-1" aria-label>\n  <div class="modal-dialog modal-dialog-scrollable modal-lg">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h1 class="modal-title fs-5">Icon Search</h1>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body">\n        <div class="mb-1">\n          <label for="iconSearchQuery" class="form-label">Search Query</label>\n          <input type="text" class="form-control" id="iconSearchQuery" placeholder="search">\n        </div>\n        <div id="iconSearchResults" style="height:256px;overflow:scroll;"></div>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-secondary" id="btnSearch" onclick="performIconSearch(); return false;" data-selectable="false">Search</button>\n        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'
  },
  useData: true
});
this["app"]["templates"]["messagebox"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    return '<div class="modal fade" id="msgboxModal" tabindex="-1" aria-label>\n  <div class="modal-dialog modal-dialog-scrollable modal-lg">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h1 class="modal-title fs-5" id="msgboxLabel"></h1>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body" id="msgboxBody">\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'
  },
  useData: true
});
this["app"]["templates"]["monitor"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    return '<h1>\n  <div id="monitorContainerName">Container</div>\n</h1>\n<table border="5 " cellpadding="0" cellspacing="5">\n  <tr>\n    <td>Historical CPU Use %</td>\n  </tr>\n  <tr>\n    <td>\n      <div id="cpuchart" style="width:600px;height:300px;"></div>\n    </td>\n  </tr>\n  <tr>\n    <td>Historical Memory Free %</td>\n  </tr>\n  <tr>\n    <td>\n      <div id="memorychart" style="width:600px;height:300px;"></div>\n    </td>\n  </tr>\n</table>\n<div id="containerLogs" class="terminal">\n</div>\n'
  },
  useData: true
});
this["app"]["templates"]["projects"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '    <div class="accordion-item">\n      <h2 class="accordion-header">\n        <button class="accordion-button' + ((stack1 = lookupProperty(helpers, "if").call(alias1, data && lookupProperty(data, "first"), {
      name: "if",
      hash: {},
      fn: container.program(2, data, 0, blockParams, depths),
      inverse: container.program(4, data, 0, blockParams, depths),
      data: data,
      loc: {
        start: {
          line: 5,
          column: 39
        },
        end: {
          line: 5,
          column: 78
        }
      }
    })) != null ? stack1 : "") + '" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-' + alias4((helper = (helper = lookupProperty(helpers, "index") || data && lookupProperty(data, "index")) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "index",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 5,
          column: 146
        },
        end: {
          line: 5,
          column: 156
        }
      }
    }) : helper)) + '" aria-expanded="true" aria-controls="collapse-' + alias4((helper = (helper = lookupProperty(helpers, "index") || data && lookupProperty(data, "index")) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "index",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 5,
          column: 203
        },
        end: {
          line: 5,
          column: 213
        }
      }
    }) : helper)) + '">\n          ' + alias4((helper = (helper = lookupProperty(helpers, "key") || data && lookupProperty(data, "key")) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "key",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 6,
          column: 10
        },
        end: {
          line: 6,
          column: 18
        }
      }
    }) : helper)) + '\n        </button>\n      </h2>\n      <div id="collapse-' + alias4((helper = (helper = lookupProperty(helpers, "index") || data && lookupProperty(data, "index")) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "index",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 9,
          column: 24
        },
        end: {
          line: 9,
          column: 34
        }
      }
    }) : helper)) + '" class="accordion-collapse collapse' + ((stack1 = lookupProperty(helpers, "if").call(alias1, data && lookupProperty(data, "first"), {
      name: "if",
      hash: {},
      fn: container.program(6, data, 0, blockParams, depths),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 9,
          column: 70
        },
        end: {
          line: 9,
          column: 96
        }
      }
    })) != null ? stack1 : "") + '" data-bs-parent="#projects">\n        <div class="accordion-body">\n          <div class="container text-left">\n            <div class="row justify-content-md-left">\n              <div class="col col-lg-2">\n                <img style="max-width:128px;" src="/api/icons/query/' + alias4((helper = (helper = lookupProperty(helpers, "key") || data && lookupProperty(data, "key")) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "key",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 14,
          column: 68
        },
        end: {
          line: 14,
          column: 76
        }
      }
    }) : helper)) + '" />\n              </div>\n              <div class="col-md-auto">\n                <table class="table table-bordered">\n                  <tbody>\n                    <tr>\n                      <td>Compose file:</td>\n                      <td>' + alias4((helper = (helper = lookupProperty(helpers, "config") || (depth0 != null ? lookupProperty(depth0, "config") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "config",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 21,
          column: 26
        },
        end: {
          line: 21,
          column: 36
        }
      }
    }) : helper)) + "</td>\n                    </tr>\n                    <tr>\n                      <td>Environment file:</td>\n                      <td>" + alias4((helper = (helper = lookupProperty(helpers, "environment") || (depth0 != null ? lookupProperty(depth0, "environment") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "environment",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 25,
          column: 26
        },
        end: {
          line: 25,
          column: 41
        }
      }
    }) : helper)) + "</td>\n                    </tr>\n                    <tr>\n                      <td>Project Folder :</td>\n                      <td>" + alias4((helper = (helper = lookupProperty(helpers, "workingFolder") || (depth0 != null ? lookupProperty(depth0, "workingFolder") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "workingFolder",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 29,
          column: 26
        },
        end: {
          line: 29,
          column: 43
        }
      }
    }) : helper)) + '</td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <table class="table">\n                  <thead>\n                    <tr>\n                      <th>Container Name</th>\n                      <th>Hostname</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n' + ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0 != null ? lookupProperty(depth0, "containers") : depth0, {
      name: "each",
      hash: {},
      fn: container.program(8, data, 0, blockParams, depths),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 42,
          column: 20
        },
        end: {
          line: 50,
          column: 29
        }
      }
    })) != null ? stack1 : "") + "                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n"
  },
  2: function(container, depth0, helpers, partials, data) {
    return ""
  },
  4: function(container, depth0, helpers, partials, data) {
    return " collapsed"
  },
  6: function(container, depth0, helpers, partials, data) {
    return " show"
  },
  8: function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return "                      <tr>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "editable") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(9, data, 0, blockParams, depths),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 44,
          column: 24
        },
        end: {
          line: 46,
          column: 31
        }
      }
    })) != null ? stack1 : "") + "                        <td>" + alias4((helper = (helper = lookupProperty(helpers, "containerName") || (depth0 != null ? lookupProperty(depth0, "containerName") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "containerName",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 47,
          column: 28
        },
        end: {
          line: 47,
          column: 45
        }
      }
    }) : helper)) + "</td>\n                        <td>" + alias4((helper = (helper = lookupProperty(helpers, "hostname") || (depth0 != null ? lookupProperty(depth0, "hostname") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "hostname",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 48,
          column: 28
        },
        end: {
          line: 48,
          column: 40
        }
      }
    }) : helper)) + "</td>\n                      </tr>\n"
  },
  9: function(container, depth0, helpers, partials, data, blockParams, depths) {
    var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '                          <td><button onclick="composeEdit(this); return false;" data-containerid="' + alias4((helper = (helper = lookupProperty(helpers, "containerName") || (depth0 != null ? lookupProperty(depth0, "containerName") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "containerName",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 45,
          column: 99
        },
        end: {
          line: 45,
          column: 116
        }
      }
    }) : helper)) + '" data-projectpath="' + alias4(container.lambda(depths[1] != null ? lookupProperty(depths[1], "projectPath") : depths[1], depth0)) + '" data-project="' + alias4((helper = (helper = lookupProperty(helpers, "projectName") || (depth0 != null ? lookupProperty(depth0, "projectName") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "projectName",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 45,
          column: 170
        },
        end: {
          line: 45,
          column: 185
        }
      }
    }) : helper)) + '" type="button" class="btn btn-outline-secondary btn-sm"><i class="fa-regular fa-pen-to-square"></i></button></td>\n'
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '<div class="accordion" id="projects">\n' + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0, {
      name: "each",
      hash: {},
      fn: container.program(1, data, 0, blockParams, depths),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 59,
          column: 11
        }
      }
    })) != null ? stack1 : "") + "</div>\n"
  },
  useData: true,
  useDepths: true
});
this["app"]["templates"]["search"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    return "\n"
  },
  useData: true
});
this["app"]["templates"]["service"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    return ""
  },
  3: function(container, depth0, helpers, partials, data) {
    return "disabled"
  },
  5: function(container, depth0, helpers, partials, data) {
    return "btn-secondary"
  },
  7: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "buttonclass") : stack1, depth0))
  },
  9: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "opacity:" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "opacity") : stack1, depth0)) + " !important;"
  },
  11: function(container, depth0, helpers, partials, data) {
    return "/api/icons/question"
  },
  13: function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return "/api/icons/r/" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "service") : depth0) != null ? lookupProperty(stack1, "iconCatalog") : stack1, depth0)) + "/" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "service") : depth0) != null ? lookupProperty(stack1, "iconSlug") : stack1, depth0)) + "/resource"
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.lambda,
      alias3 = container.escapeExpression,
      alias4 = container.hooks.helperMissing,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return "<button " + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "service") : depth0) != null ? lookupProperty(stack1, "available") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.program(3, data, 0),
      data: data,
      loc: {
        start: {
          line: 1,
          column: 8
        },
        end: {
          line: 1,
          column: 56
        }
      }
    })) != null ? stack1 : "") + ' data-name="' + alias3(alias2((stack1 = depth0 != null ? lookupProperty(depth0, "service") : depth0) != null ? lookupProperty(stack1, "containerName") : stack1, depth0)) + '" data-url="' + alias3(alias2((stack1 = depth0 != null ? lookupProperty(depth0, "service") : depth0) != null ? lookupProperty(stack1, "public") : stack1, depth0)) + '" onclick="navigateTo(this); return false;" type="button" class="btn ' + ((stack1 = (lookupProperty(helpers, "isempty") || depth0 && lookupProperty(depth0, "isempty") || alias4).call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "buttonclass") : stack1, {
      name: "isempty",
      hash: {},
      fn: container.program(5, data, 0),
      inverse: container.program(7, data, 0),
      data: data,
      loc: {
        start: {
          line: 1,
          column: 192
        },
        end: {
          line: 1,
          column: 279
        }
      }
    })) != null ? stack1 : "") + ' widget" style="' + ((stack1 = (lookupProperty(helpers, "isnotempty") || depth0 && lookupProperty(depth0, "isnotempty") || alias4).call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "opacity") : stack1, {
      name: "isnotempty",
      hash: {},
      fn: container.program(9, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 1,
          column: 295
        },
        end: {
          line: 1,
          column: 378
        }
      }
    })) != null ? stack1 : "") + '">\n  <img style="padding:10px;max-width:64px;max-height:64px" src="' + ((stack1 = (lookupProperty(helpers, "isempty") || depth0 && lookupProperty(depth0, "isempty") || alias4).call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "service") : depth0) != null ? lookupProperty(stack1, "iconSlug") : stack1, {
      name: "isempty",
      hash: {},
      fn: container.program(11, data, 0),
      inverse: container.program(13, data, 0),
      data: data,
      loc: {
        start: {
          line: 2,
          column: 64
        },
        end: {
          line: 2,
          column: 199
        }
      }
    })) != null ? stack1 : "") + '" />\n  <br /> ' + alias3(alias2((stack1 = depth0 != null ? lookupProperty(depth0, "service") : depth0) != null ? lookupProperty(stack1, "name") : stack1, depth0)) + "\n</button>\n"
  },
  useData: true
});
this["app"]["templates"]["tagcloud"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data, blockParams, depths) {
    var helper, alias1 = container.escapeExpression,
      alias2 = depth0 != null ? depth0 : container.nullContext || {},
      alias3 = container.hooks.helperMissing,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '    <li><a data-weight="' + alias1(container.lambda(depth0, depth0)) + '" href="' + alias1((depths[1] && lookupProperty(depths[1], "tagfunc") || alias3).call(alias2, data && lookupProperty(data, "key"), {
      name: "../tagfunc",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 3,
          column: 40
        },
        end: {
          line: 3,
          column: 59
        }
      }
    })) + '">' + alias1((helper = (helper = lookupProperty(helpers, "key") || data && lookupProperty(data, "key")) != null ? helper : alias3, typeof helper === "function" ? helper.call(alias2, {
      name: "key",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 3,
          column: 61
        },
        end: {
          line: 3,
          column: 69
        }
      }
    }) : helper)) + "</a></li>\n"
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '<ul class="cloud" role="navigation" aria-label="Tag cloud">\n' + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "feed") : depth0, {
      name: "each",
      hash: {},
      fn: container.program(1, data, 0, blockParams, depths),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 4,
          column: 11
        }
      }
    })) != null ? stack1 : "") + "</ul>\n"
  },
  useData: true,
  useDepths: true
});
this["app"]["templates"]["themechooser"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    return '<div class="dropdown" data-hb-component="themechooser">\n  <button class="btn dropdown-toggle" style="color:white!important" type="button" data-bs-toggle="dropdown" aria-expanded="false">\n    <i style="color:white!important" id="activeTheme" class="bi bi-circle-half"></i> Theme\n  </button>\n  <ul class="dropdown-menu dropdown-menu-end">\n    <li><button type="button" class="dropdown-item d-flex align-items-center" aria-pressed="false" onclick="ui().themeChooser().chooseTheme(\'light\');">\n        <i id="light" class="bi bi-sun"></i> Light</button>\n    </li>\n    <li> <button type="button" class="dropdown-item d-flex align-items-center" aria-pressed="false" onclick="ui().themeChooser().chooseTheme(\'dark\');">\n        <i id="dark" class="bi bi-moon-stars"></i> Dark</button>\n    </li>\n    <li><button type="button" class="dropdown-item d-flex align-items-center" aria-pressed="false" onclick="ui().themeChooser().chooseTheme(\'auto\')">\n        <i id="auto" class="bi bi-circle-half"></i> Auto</button>\n    </li>\n  </ul>\n</div>\n'
  },
  useData: true
});
this["app"]["templates"]["toast"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    return '<div class="toast-container position-fixed bottom-0 end-0 p-3">\n  <div id="toast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">\n    <div class="toast-header">\n      <i class="fa-solid fa-square"></i>\n      <strong class="me-auto" id="toastLabel"></strong>\n      <small id="toastSmall"></small>\n      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>\n    </div>\n    <div class="toast-body" id="toastBody">\n      Hello, world! This is a toast message.\n    </div>\n  </div>\n</div>\n'
  },
  useData: true
});
this["app"]["templates"]["widget-discovrninja"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    return "btn-secondary"
  },
  3: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "buttonclass") : stack1, depth0))
  },
  5: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "opacity:" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "opacity") : stack1, depth0)) + " !important;"
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '<button data-name="" data-url="" onclick="window.location.href=\'/admin/index\'; return false;" type="button" class="btn ' + ((stack1 = (lookupProperty(helpers, "isempty") || depth0 && lookupProperty(depth0, "isempty") || alias2).call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "buttonclass") : stack1, {
      name: "isempty",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.program(3, data, 0),
      data: data,
      loc: {
        start: {
          line: 1,
          column: 119
        },
        end: {
          line: 1,
          column: 206
        }
      }
    })) != null ? stack1 : "") + ' widget" style="' + ((stack1 = (lookupProperty(helpers, "isnotempty") || depth0 && lookupProperty(depth0, "isnotempty") || alias2).call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "opacity") : stack1, {
      name: "isnotempty",
      hash: {},
      fn: container.program(5, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 1,
          column: 222
        },
        end: {
          line: 1,
          column: 305
        }
      }
    })) != null ? stack1 : "") + '">\n  <img style="padding:10px;max-width:64px;max-height:64px" src="/assets/img/logo.png" />\n  <br /> Administration\n</button>\n'
  },
  useData: true
});
this["app"]["templates"]["widget-globe"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "alt") : stack1, depth0))
  },
  3: function(container, depth0, helpers, partials, data) {
    return "32558"
  },
  5: function(container, depth0, helpers, partials, data) {
    return "btn-secondary"
  },
  7: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "buttonclass") : stack1, depth0))
  },
  9: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "opacity:" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "opacity") : stack1, depth0)) + " !important;"
  },
  11: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "size") : stack1, depth0))
  },
  13: function(container, depth0, helpers, partials, data) {
    return "200"
  },
  15: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "&lat=" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "latitude") : stack1, depth0))
  },
  17: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "&long=" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "longitude") : stack1, depth0))
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      alias3 = depth0 != null ? depth0 : container.nullContext || {},
      alias4 = container.hooks.helperMissing,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '<button data-url="https://www.fourmilab.ch/cgi-bin/Earth?size=640&img=learth&gamma=1.32&opt=-l&lat=' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "latitude") : stack1, depth0)) + "&lon=" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "longitude") : stack1, depth0)) + "&alt=" + ((stack1 = lookupProperty(helpers, "if").call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "alt") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.program(3, data, 0),
      data: data,
      loc: {
        start: {
          line: 1,
          column: 152
        },
        end: {
          line: 1,
          column: 208
        }
      }
    })) != null ? stack1 : "") + '&tle=&date=0&utc=&jd=" onclick="navigateTo(this); return false;" type="button" class="btn ' + ((stack1 = (lookupProperty(helpers, "isempty") || depth0 && lookupProperty(depth0, "isempty") || alias4).call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "buttonclass") : stack1, {
      name: "isempty",
      hash: {},
      fn: container.program(5, data, 0),
      inverse: container.program(7, data, 0),
      data: data,
      loc: {
        start: {
          line: 1,
          column: 298
        },
        end: {
          line: 1,
          column: 385
        }
      }
    })) != null ? stack1 : "") + ' widget" style="margin:5px;height:fit-content !important;' + ((stack1 = (lookupProperty(helpers, "isnotempty") || depth0 && lookupProperty(depth0, "isnotempty") || alias4).call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "opacity") : stack1, {
      name: "isnotempty",
      hash: {},
      fn: container.program(9, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 1,
          column: 442
        },
        end: {
          line: 1,
          column: 525
        }
      }
    })) != null ? stack1 : "") + '">\n\n  <img class="widgetglobe" border="0" src="/api/desktop/background/globe?h=' + ((stack1 = lookupProperty(helpers, "if").call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "size") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(11, data, 0),
      inverse: container.program(13, data, 0),
      data: data,
      loc: {
        start: {
          line: 3,
          column: 75
        },
        end: {
          line: 3,
          column: 131
        }
      }
    })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "latitude") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(15, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 3,
          column: 131
        },
        end: {
          line: 3,
          column: 189
        }
      }
    })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "longitude") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(17, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 3,
          column: 189
        },
        end: {
          line: 3,
          column: 250
        }
      }
    })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "alt") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 3,
          column: 250
        },
        end: {
          line: 3,
          column: 293
        }
      }
    })) != null ? stack1 : "") + '" />\n  <span class="clock"></span>\n</button>\n<script type="text/javascript">\n  function time() {\n    var d = new Date();\n    var s = d.getSeconds();\n    var m = d.getMinutes();\n    var h = d.getHours();\n    var span = document.querySelector(".clock");\n    span.textContent =\n      ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);\n  }\n\n  setInterval(time, 1000);\n  time();\n\n<\/script>\n'
  },
  useData: true
});
this["app"]["templates"]["widget-link"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    return "btn-secondary"
  },
  3: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "buttonclass") : stack1, depth0))
  },
  5: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "opacity:" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "opacity") : stack1, depth0)) + " !important;"
  },
  7: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "https://www.google.com/s2/favicons?domain=" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "domainUrl") : stack1, depth0)) + "&sz=64"
  },
  9: function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return "/api/icons/r/" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "iconCatalog") : stack1, depth0)) + "/" + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "iconSlug") : stack1, depth0)) + "/resource"
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      alias3 = depth0 != null ? depth0 : container.nullContext || {},
      alias4 = container.hooks.helperMissing,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '<button data-url="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "url") : stack1, depth0)) + '" onclick="navigateTo(this); return false;" type="button" class="btn ' + ((stack1 = (lookupProperty(helpers, "isempty") || depth0 && lookupProperty(depth0, "isempty") || alias4).call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "buttonclass") : stack1, {
      name: "isempty",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.program(3, data, 0),
      data: data,
      loc: {
        start: {
          line: 1,
          column: 103
        },
        end: {
          line: 1,
          column: 190
        }
      }
    })) != null ? stack1 : "") + ' widget" style="' + ((stack1 = (lookupProperty(helpers, "isnotempty") || depth0 && lookupProperty(depth0, "isnotempty") || alias4).call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "opacity") : stack1, {
      name: "isnotempty",
      hash: {},
      fn: container.program(5, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 1,
          column: 206
        },
        end: {
          line: 1,
          column: 289
        }
      }
    })) != null ? stack1 : "") + '">\n  <img style="padding:10px;max-width:64px;max-height:64px" src="' + ((stack1 = (lookupProperty(helpers, "isempty") || depth0 && lookupProperty(depth0, "isempty") || alias4).call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "iconSlug") : stack1, {
      name: "isempty",
      hash: {},
      fn: container.program(7, data, 0),
      inverse: container.program(9, data, 0),
      data: data,
      loc: {
        start: {
          line: 2,
          column: 64
        },
        end: {
          line: 2,
          column: 253
        }
      }
    })) != null ? stack1 : "") + '" />\n  <br /> ' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "name") : stack1, depth0)) + "\n</button>\n"
  },
  useData: true
});
this["app"]["templates"]["widget-news"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    return "btn-secondary"
  },
  3: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "buttonclass") : stack1, depth0))
  },
  5: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "opacity:" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "opacity") : stack1, depth0)) + " !important;"
  },
  7: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "https://www.google.com/s2/favicons?domain=" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "domainUrl") : stack1, depth0)) + "&sz=64"
  },
  9: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "iconUrl") : stack1, depth0))
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      alias3 = depth0 != null ? depth0 : container.nullContext || {},
      alias4 = container.hooks.helperMissing,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '<button data-url="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "url") : stack1, depth0)) + '" onclick="navigateToNews(this); return false;" type="button" class="btn ' + ((stack1 = (lookupProperty(helpers, "isempty") || depth0 && lookupProperty(depth0, "isempty") || alias4).call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "buttonclass") : stack1, {
      name: "isempty",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.program(3, data, 0),
      data: data,
      loc: {
        start: {
          line: 1,
          column: 107
        },
        end: {
          line: 1,
          column: 194
        }
      }
    })) != null ? stack1 : "") + ' widget" style="' + ((stack1 = (lookupProperty(helpers, "isnotempty") || depth0 && lookupProperty(depth0, "isnotempty") || alias4).call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "opacity") : stack1, {
      name: "isnotempty",
      hash: {},
      fn: container.program(5, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 1,
          column: 210
        },
        end: {
          line: 1,
          column: 293
        }
      }
    })) != null ? stack1 : "") + '">\n  <img style="object-fit:contain;padding:10px;max-width:64px;height:64px" src="' + ((stack1 = (lookupProperty(helpers, "isempty") || depth0 && lookupProperty(depth0, "isempty") || alias4).call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "iconUrl") : stack1, {
      name: "isempty",
      hash: {},
      fn: container.program(7, data, 0),
      inverse: container.program(9, data, 0),
      data: data,
      loc: {
        start: {
          line: 2,
          column: 79
        },
        end: {
          line: 2,
          column: 218
        }
      }
    })) != null ? stack1 : "") + '" />\n  <br /> ' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "name") : stack1, depth0)) + "\n</button>\n"
  },
  useData: true
});
this["app"]["templates"]["widget-search"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    return '    <div class="d-flex">\n      <input class="form-control me-2" id="q" type="text" placeholder="Search" aria-label="Search">\n      <button class="btn btn-primary" type="button" onclick="doSearch(\'#q\');return false;">Search</button>\n    </div>\n    <script type="text/javascript">\n      ui("#q").enterCheck({\n        onEnterKey: function () {\n          doSearch(\'#q\');\n          return false;\n        }\n      });\n\n    <\/script>\n'
  },
  useData: true
});
this["app"]["templates"]["widget-tagcloud"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    return '<div class="container" id="tags"></div>\n<script type="text/javascript">\n  tagCloud("tags", "/bookmarks?tag={tag}");\n\n<\/script>\n'
  },
  useData: true
});
this["app"]["templates"]["widget-video"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return 'poster="' + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "poster") : stack1, depth0)) + '" '
  },
  3: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '    <source src="' + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "mp4video") : stack1, depth0)) + '" type="video/mp4" />\n'
  },
  5: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '    <source src="' + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "webmvideo") : stack1, depth0)) + '" type="video/webm" />\n'
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = depth0 != null ? depth0 : container.nullContext || {},
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '<video id="videoplayer" class="video-js" ' + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "poster") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 1,
          column: 41
        },
        end: {
          line: 1,
          column: 100
        }
      }
    })) != null ? stack1 : "") + ' controls preload="auto" data-setup="{}">\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "mp4video") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(3, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 4,
          column: 9
        }
      }
    })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "webmvideo") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(5, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 7,
          column: 9
        }
      }
    })) != null ? stack1 : "") + '  <p class="vjs-no-js">\n    To view this video please enable JavaScript, and consider upgrading to a\n    web browser that\n    <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>\n  </p>\n</video>\n'
  },
  useData: true
});
this["app"]["templates"]["widget-weather"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = container.lambda,
      alias4 = container.escapeExpression,
      alias5 = "function",
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '    <div class="col">\n      <center>\n        <button type="button" class="btn ' + ((stack1 = (lookupProperty(helpers, "isempty") || depth0 && lookupProperty(depth0, "isempty") || alias2).call(alias1, (stack1 = (stack1 = depths[1] != null ? lookupProperty(depths[1], "_s") : depths[1]) != null ? lookupProperty(stack1, "p") : stack1) != null ? lookupProperty(stack1, "buttonclass") : stack1, {
      name: "isempty",
      hash: {},
      fn: container.program(2, data, 0, blockParams, depths),
      inverse: container.program(4, data, 0, blockParams, depths),
      data: data,
      loc: {
        start: {
          line: 5,
          column: 41
        },
        end: {
          line: 5,
          column: 130
        }
      }
    })) != null ? stack1 : "") + ' widget" style="white-space:nowrap;' + ((stack1 = (lookupProperty(helpers, "isnotempty") || depth0 && lookupProperty(depth0, "isnotempty") || alias2).call(alias1, (stack1 = (stack1 = depths[1] != null ? lookupProperty(depths[1], "_s") : depths[1]) != null ? lookupProperty(stack1, "p") : stack1) != null ? lookupProperty(stack1, "opacity") : stack1, {
      name: "isnotempty",
      hash: {},
      fn: container.program(6, data, 0, blockParams, depths),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 5,
          column: 165
        },
        end: {
          line: 5,
          column: 250
        }
      }
    })) != null ? stack1 : "") + '" onclick="viewWeather(' + alias4(alias3((stack1 = depths[1] != null ? lookupProperty(depths[1], "settings") : depths[1]) != null ? lookupProperty(stack1, "latitude") : stack1, depth0)) + ", " + alias4(alias3((stack1 = depths[1] != null ? lookupProperty(depths[1], "settings") : depths[1]) != null ? lookupProperty(stack1, "longitude") : stack1, depth0)) + ", " + alias4(alias3((stack1 = depths[1] != null ? lookupProperty(depths[1], "settings") : depths[1]) != null ? lookupProperty(stack1, "days") : stack1, depth0)) + ", " + alias4((helper = (helper = lookupProperty(helpers, "index") || data && lookupProperty(data, "index")) != null ? helper : alias2, typeof helper === alias5 ? helper.call(alias1, {
      name: "index",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 5,
          column: 349
        },
        end: {
          line: 5,
          column: 359
        }
      }
    }) : helper)) + ');return false;">\n          <img src="/assets/weather/' + alias4((helper = (helper = lookupProperty(helpers, "icon") || (depth0 != null ? lookupProperty(depth0, "icon") : depth0)) != null ? helper : alias2, typeof helper === alias5 ? helper.call(alias1, {
      name: "icon",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 6,
          column: 36
        },
        end: {
          line: 6,
          column: 44
        }
      }
    }) : helper)) + '" style="max-width:64px; max-height:64px;" alt="' + alias4(alias3((stack1 = depth0 != null ? lookupProperty(depth0, "text") : depth0) != null ? lookupProperty(stack1, "description") : stack1, depth0)) + '" /><br />\n          <small>' + alias4((helper = (helper = lookupProperty(helpers, "date") || (depth0 != null ? lookupProperty(depth0, "date") : depth0)) != null ? helper : alias2, typeof helper === alias5 ? helper.call(alias1, {
      name: "date",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 7,
          column: 17
        },
        end: {
          line: 7,
          column: 25
        }
      }
    }) : helper)) + "</small>\n        </button>\n      </center>\n    </div>\n"
  },
  2: function(container, depth0, helpers, partials, data) {
    return "btn-secondary"
  },
  4: function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression(container.lambda((stack1 = (stack1 = depths[1] != null ? lookupProperty(depths[1], "_s") : depths[1]) != null ? lookupProperty(stack1, "p") : stack1) != null ? lookupProperty(stack1, "buttonclass") : stack1, depth0))
  },
  6: function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "opacity:" + container.escapeExpression(container.lambda((stack1 = (stack1 = depths[1] != null ? lookupProperty(depths[1], "_s") : depths[1]) != null ? lookupProperty(stack1, "p") : stack1) != null ? lookupProperty(stack1, "opacity") : stack1, depth0)) + " !important;"
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data, blockParams, depths) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '<div class="row">\n' + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? lookupProperty(depth0, "weather") : depth0, {
      name: "each",
      hash: {},
      fn: container.program(1, data, 0, blockParams, depths),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 11,
          column: 11
        }
      }
    })) != null ? stack1 : "") + '</div>\n<div class="row">\n  <div class="col"><i>' + alias2(alias1((stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "location") : depth0) != null ? lookupProperty(stack1, "address") : stack1) != null ? lookupProperty(stack1, "quarter") : stack1, depth0)) + ", " + alias2(alias1((stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "location") : depth0) != null ? lookupProperty(stack1, "address") : stack1) != null ? lookupProperty(stack1, "city") : stack1, depth0)) + ", " + alias2(alias1((stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "location") : depth0) != null ? lookupProperty(stack1, "address") : stack1) != null ? lookupProperty(stack1, "county") : stack1, depth0)) + ", " + alias2(alias1((stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "location") : depth0) != null ? lookupProperty(stack1, "address") : stack1) != null ? lookupProperty(stack1, "country") : stack1, depth0)) + "</i></i></div>\n</div>\n"
  },
  useData: true,
  useDepths: true
});
this["app"]["templates"]["news"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '        <tr>\n          <td>\n            <p class="headline"><a href="' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "link") || (depth0 != null ? lookupProperty(depth0, "link") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "link",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 20,
          column: 41
        },
        end: {
          line: 20,
          column: 49
        }
      }
    }) : helper)) + '" target="_new" style="text-decoration: none !important;">' + ((stack1 = (helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "title",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 20,
          column: 107
        },
        end: {
          line: 20,
          column: 118
        }
      }
    }) : helper)) != null ? stack1 : "") + "</a></p>\n            " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "image") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(2, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 21,
          column: 12
        },
        end: {
          line: 21,
          column: 59
        }
      }
    })) != null ? stack1 : "") + "\n            <p>" + ((stack1 = (helper = (helper = lookupProperty(helpers, "description") || (depth0 != null ? lookupProperty(depth0, "description") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "description",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 22,
          column: 15
        },
        end: {
          line: 22,
          column: 32
        }
      }
    }) : helper)) != null ? stack1 : "") + "</p>\n          </td>\n        </tr>\n"
  },
  2: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '<img src="' + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "image") : depth0) != null ? lookupProperty(stack1, "url") : stack1, depth0)) + '" />'
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = container.escapeExpression,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '<div id="news" class="newsprint">\n  <div class="content">\n    <table border="0" cellpadding="2" cellspacing="0">\n      <tr class="masthead">\n        <td id="mastheadbanner" style="border-bottom: solid 1px black">\n          <canvas id="mastheadcanvas" style="display:none"></canvas>\n          <a href="#" onclick="newsPage(\'' + alias3((helper = (helper = lookupProperty(helpers, "feedUrl") || (depth0 != null ? lookupProperty(depth0, "feedUrl") : depth0)) != null ? helper : alias2, typeof helper === "function" ? helper.call(alias1, {
      name: "feedUrl",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 7,
          column: 41
        },
        end: {
          line: 7,
          column: 52
        }
      }
    }) : helper)) + '\'); return false;">\n            <img id="mastheadimg" onload="setBgColor(\'mastheadimg\', \'mastheadbanner\')" src="/api/resources/p?u=' + alias3((lookupProperty(helpers, "urlencode") || depth0 && lookupProperty(depth0, "urlencode") || alias2).call(alias1, (stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "meta") : depth0) != null ? lookupProperty(stack1, "image") : stack1) != null ? lookupProperty(stack1, "url") : stack1, {
      name: "urlencode",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 8,
          column: 111
        },
        end: {
          line: 8,
          column: 139
        }
      }
    })) + '" />\n          </a>\n        </td>\n      </tr>\n      <tr>\n        <td style="border-bottom: solid 1px black">\n          ' + alias3(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "meta") : depth0) != null ? lookupProperty(stack1, "pubDateStr") : stack1, depth0)) + "\n        </td>\n      </tr>\n" + ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0 != null ? lookupProperty(depth0, "items") : depth0, {
      name: "each",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 25,
          column: 15
        }
      }
    })) != null ? stack1 : "") + "    </table>\n  </div>\n  /\n</div>\n"
  },
  useData: true
});
this["app"]["templates"]["weather"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = "function",
      alias4 = container.escapeExpression,
      alias5 = container.lambda,
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '  <div class="row">\n    <div class="col bg-secondary-subtle">\n      <center><small>' + alias4((helper = (helper = lookupProperty(helpers, "date") || (depth0 != null ? lookupProperty(depth0, "date") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "date",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 3,
          column: 29
        }
      }
    }) : helper)) + '</small><br /><img src="/assets/weather/' + alias4((helper = (helper = lookupProperty(helpers, "icon") || (depth0 != null ? lookupProperty(depth0, "icon") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "icon",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 3,
          column: 69
        },
        end: {
          line: 3,
          column: 77
        }
      }
    }) : helper)) + '" style="max-width 100px; height:100px;" alt="' + alias4((helper = (helper = lookupProperty(helpers, "text") || (depth0 != null ? lookupProperty(depth0, "text") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "text",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 3,
          column: 123
        },
        end: {
          line: 3,
          column: 131
        }
      }
    }) : helper)) + '" />\n        <br /><small>' + alias4((helper = (helper = lookupProperty(helpers, "text") || (depth0 != null ? lookupProperty(depth0, "text") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "text",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 4,
          column: 21
        },
        end: {
          line: 4,
          column: 29
        }
      }
    }) : helper)) + '</small>\n      </center>\n    </div>\n    <div class="col">\n      <table class="table">\n        <tr>\n          <td>Sunrise:</td>\n          <td>' + alias4((helper = (helper = lookupProperty(helpers, "sunrise") || (depth0 != null ? lookupProperty(depth0, "sunrise") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "sunrise",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 11,
          column: 14
        },
        end: {
          line: 11,
          column: 25
        }
      }
    }) : helper)) + "</td>\n        </tr>\n        <tr>\n          <td>Sunset:</td>\n          <td>" + alias4((helper = (helper = lookupProperty(helpers, "sunset") || (depth0 != null ? lookupProperty(depth0, "sunset") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "sunset",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 15,
          column: 14
        },
        end: {
          line: 15,
          column: 24
        }
      }
    }) : helper)) + "</td>\n        </tr>\n        <tr>\n          <td>Temperature:</td>\n          <td>" + alias4((helper = (helper = lookupProperty(helpers, "temperature2m") || (depth0 != null ? lookupProperty(depth0, "temperature2m") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "temperature2m",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 19,
          column: 14
        },
        end: {
          line: 19,
          column: 31
        }
      }
    }) : helper)) + "&deg;C</td>\n        </tr>\n        <tr>\n          <td>Precipitation chance:</td>\n          <td>" + alias4((helper = (helper = lookupProperty(helpers, "precipitationProbabilityMax") || (depth0 != null ? lookupProperty(depth0, "precipitationProbabilityMax") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "precipitationProbabilityMax",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 23,
          column: 14
        },
        end: {
          line: 23,
          column: 45
        }
      }
    }) : helper)) + "%</td>\n        </tr>\n        <tr>\n          <td>Wind speed: </td>\n          <td>" + alias4((helper = (helper = lookupProperty(helpers, "windSpeed10mMax") || (depth0 != null ? lookupProperty(depth0, "windSpeed10mMax") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "windSpeed10mMax",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 27,
          column: 14
        },
        end: {
          line: 27,
          column: 33
        }
      }
    }) : helper)) + " mph</td>\n        </tr>\n        <tr>\n          <td>Wind gusts: </td>\n          <td>" + alias4((helper = (helper = lookupProperty(helpers, "windGusts10mMax") || (depth0 != null ? lookupProperty(depth0, "windGusts10mMax") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "windGusts10mMax",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 31,
          column: 14
        },
        end: {
          line: 31,
          column: 33
        }
      }
    }) : helper)) + " mph\n          </td>\n        </tr>\n        <tr>\n          <td>Wind direction: </td>\n          <td>" + alias4((helper = (helper = lookupProperty(helpers, "windDirection10mDominant") || (depth0 != null ? lookupProperty(depth0, "windDirection10mDominant") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "windDirection10mDominant",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 36,
          column: 14
        },
        end: {
          line: 36,
          column: 42
        }
      }
    }) : helper)) + "&deg; " + alias4((helper = (helper = lookupProperty(helpers, "windDirection") || (depth0 != null ? lookupProperty(depth0, "windDirection") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "windDirection",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 36,
          column: 48
        },
        end: {
          line: 36,
          column: 65
        }
      }
    }) : helper)) + '</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <div class="row">\n    <div class="col"><i>' + alias4(alias5((stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "location") : depth0) != null ? lookupProperty(stack1, "address") : stack1) != null ? lookupProperty(stack1, "quarter") : stack1, depth0)) + ", " + alias4(alias5((stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "location") : depth0) != null ? lookupProperty(stack1, "address") : stack1) != null ? lookupProperty(stack1, "city") : stack1, depth0)) + ", " + alias4(alias5((stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "location") : depth0) != null ? lookupProperty(stack1, "address") : stack1) != null ? lookupProperty(stack1, "county") : stack1, depth0)) + ", " + alias4(alias5((stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "location") : depth0) != null ? lookupProperty(stack1, "address") : stack1) != null ? lookupProperty(stack1, "country") : stack1, depth0)) + "</i></i></div>\n  </div>\n"
  },
  useData: true
});
window._render = function(template, args) {
  return new Promise((resolve, reject) => {
    var url = template.getAttribute("data-url");
    var name = template.getAttribute("data-template");
    var settings = null;
    var refreshInterval = template.getAttribute("data-refresh-interval");
    var query = null;
    if (template.getAttribute("data-settings")) {
      var s = template.getAttribute("data-settings");
      s = window.atob(s);
      settings = JSON.parse(s)
    }
    if (args) {
      if (args.url) {
        url = args.url
      }
      if (args.template) {
        name = args.template
      }
      if (args.refreshInterval) {
        refreshInterval = args.refreshInterval
      }
      if (args.query) {
        query = args.query
      }
    }
    var apiUrl = "";
    if (query) {
      apiUrl += url.format(args.query)
    } else {
      apiUrl += url
    }
    var f = app.templates[name];
    axios.get(apiUrl).then(response => {
      var data = response.data;
      data._s = settings;
      template.innerHTML = f(data);
      var timeout = parseInt(refreshInterval ?? "0") * 1e3;
      if (timeout > 0) {
        setTimeout(async () => {
          window._render(template, args)
        }, timeout)
      }
      resolve(template)
    }).catch(err => {
      console.log(err);
      reject(template, err)
    })
  })
};
window.ui = function(selector) {
  var targets = [];
  if (selector) {
    targets = document.querySelectorAll(selector)
  }
  if (!window._stateStore) {
    window._stateStore = {}
  }
  return {
    desktop: function() {
      var desktop = {
        screen: {
          w: window.screen.width,
          h: window.screen.height
        },
        window: {
          w: window.innerWidth,
          h: window.innerHeight
        }
      };
      if (!window.screen) {
        desktop.screen.w = 1500;
        desktop.screen.h = 800
      }
      var date = new Date;
      date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1e3);
      expires = "; expires=" + date.toUTCString();
      document.cookie = "desktop=" + JSON.stringify(desktop) + expires + "; path=/";
      return desktop
    },
    observe: function(target) {
      var ev = "__OBS_" + target.getAttribute("data-template").split("/").pop() + "_" + name;
      window._stateStore[ev] = new MutationObserver((mutationList, observer) => {
        if (mutationList) {}
      });
      window._stateStore[ev].observe(target, {
        childList: true,
        subtree: true
      })
    },
    enterCheck: function(args) {
      const keyupfunc = function(e) {
        if (e.key === "Enter" || e.keyCode === 13) {
          e.preventDefault();
          if (args.onEnterKey) {
            args.onEnterKey(this);
            return false
          }
          return false
        }
      };
      targets.forEach(ctl => {
        if (window.attachEvent) {
          ctl.attachEvent("onkeyup", keyupfunc)
        } else {
          ctl.addEventListener("keyup", keyupfunc, false)
        }
      })
    },
    template: function(args) {
      return new Promise((resolve, reject) => {
        if (targets.length > 0) {
          var promises = [];
          targets.forEach(template => {
            promises.push(window._render(template, args))
          });
          Promise.allSettled(promises).then(results => {
            resolve()
          }).catch(err => {
            reject(err)
          })
        }
      })
    },
    weather: function(args) {
      var apiUrl = "api/resources/weather?latitude=" + args.latitude + "&longitude=" + args.longitude + "&days=" + (args.days ?? 6);
      return new Promise((resolve, reject) => {
        axios.get(apiUrl).then(w => {
          var weather = w.data;
          resolve(weather)
        }).catch(err => {
          reject(err)
        })
      })
    },
    geoLocation: function() {
      const apiLocation = new Promise((resolve, reject) => {
        var apiUrl = "/api/resources/location";
        axios.get(apiUrl).then(response => {
          var result = response.data;
          resolve(result)
        }).catch(err => {
          reject(err)
        })
      });
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentÿPosition(function(position) {
            resolve(position)
          }, function(err) {
            apiLocation.then(loc => {
              resolve(loc)
            }).catch(err => {
              reject(err)
            })
          })
        } else {
          apiLocation.then(loc => {
            resolve(loc)
          }).catch(err => {
            reject(err)
          })
        }
      })
    },
    messageBox: function(args) {
      document.getElementById("msgboxLabel").innerHTML = args.label;
      document.getElementById("msgboxBody").innerHTML = args.body;
      var options = {
        focus: true,
        backdrop: "static"
      };
      window.msgboxModal = new bootstrap.Modal(document.getElementById("msgboxModal"), options);
      window.msgboxModal.show()
    },
    toast: function(args) {
      document.getElementById("toastLabel").innerHTML = args.label;
      document.getElementById("toastBody").innerHTML = args.body;
      document.getElementById("toastSmall").innerHTML = args.small ?? "";
      var option = {
        animation: true,
        autohide: args.autohide ?? true,
        delay: args.delay ?? 5e3
      };
      window.toast = new bootstrap.Toast(document.getElementById("toast"), option);
      window.toast.show()
    },
    themeChooser: function() {
      var instance = {
        getStoredTheme: function() {
          return localStorage.getItem("theme")
        },
        setStoredTheme: function(theme) {
          localStorage.setItem("theme", theme)
        },
        getPreferredTheme: function() {
          const storedTheme = this.getStoredTheme();
          if (storedTheme) {
            return storedTheme
          }
          return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        },
        setTheme: function(value) {
          var theme = this.getPreferredTheme();
          if (value) {
            theme = value
          }
          if (theme === "auto") {
            document.documentElement.setAttribute("data-bs-theme", window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
          } else {
            document.documentElement.setAttribute("data-bs-theme", theme)
          }
        },
        chooseTheme: function(theme) {
          var activeTheme = document.getElementById("activeTheme");
          var activeClass = document.getElementById(theme).className;
          activeTheme.className = activeClass;
          this.setTheme(theme);
          this.setStoredTheme(theme)
        }
      };
      return instance
    }
  }
};
String.prototype.format = function(tokens) {
  var formatted = this;
  for (var token in tokens)
    if (tokens.hasOwnProperty(token)) formatted = formatted.replace(RegExp("{" + token + "}", "g"), tokens[token]);
  return formatted
};
axios.interceptors.request.use(function(config) {
  const token = sessionStorage.getItem("jwt");
  if (token) {
    config.headers.Authorization = "Bearer " + token
  }
  return config
});

function logout() {
  window.location.href = "/auth/logout"
}

function admin() {
  window.location.href = "/admin/index"
}

function createEditor(ctl, value) {
  var target = document.getElementById(ctl);
  const getTheme = () => document.documentElement.getAttribute("data-bs-theme");
  var theme = getTheme();
  const initialState = cm6.createEditorState(document.getElementById(value).value, {
    dark: theme == "dark"
  });
  target.view = cm6.createEditorView(initialState, document.getElementById(ctl));
  const observer = new MutationObserver(() => {
    theme = getTheme();
    onThemeChange(theme)
  });
  observer.observe(document.documentElement, {
    attributeFilter: ["data-bs-theme"]
  });

  function onThemeChange(theme) {
    var options = {
      dark: theme == "dark"
    };
    let newState = cm6.createEditorState(target.view.state.doc, options);
    target.view.setState(newState)
  }
}

function getBingBackground() {
  var apiUrl = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1";
  axios.get(apiUrl).then(response => {
    var imgs = response.data;
    wimgs[0].url
  }).catch(err => {
    alert(err)
  })
}

function provisionTemplate(sender) {
  var name = sender.getAttribute("data-name");
  var catalog = sender.getAttribute("data-catalog");
  var url = "/admin/createstack?catalog=" + encodeURIComponent(catalog) + "&name=" + encodeURIComponent(name);
  window.location.href = url
}

function clearImportCatalog() {
  document.getElementById("templateUrl").value = "";
  document.getElementById("templateTitle").value = ""
}

function importCatalog() {
  var url = document.getElementById("templateUrl").value;
  var title = document.getElementById("templateTitle").value;
  axios.post("/api/catalog/create", {
    name: title,
    url: url
  }).then(response => {
    window.location.reload(true);
    return false
  }).catch(err => {
    alert(err)
  })
}

function viewCatalog() {
  var id = document.getElementById("templates").value;
  if (id != "") {
    window.location.href = "/admin/catalog?id=" + encodeURIComponent(id)
  }
}

function filterCatalog(id, filter) {
  window.location.href = "/admin/catalog?id=" + encodeURIComponent(id) + "&filter=" + encodeURIComponent(filter)
}

function chooseDesktopTheme(obj) {
  var theme = obj;
  if (theme === "auto") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme)
}

function readLocalFile(src, target) {
  const file = document.querySelector(src).files[0];
  const reader = new FileReader;
  const ctl = document.querySelector(target);
  reader.onload = res => {
    ctl.value = res.target.result
  };
  reader.onerror = err => ctl.value = err;
  reader.readAsText(file)
}

function exportContainer(target) {
  var container = target.getAttribute("data-containerid");
  var url = "/api/docker/container/" + encodeURIComponent(container) + "/createoptions";
  window.open(url)
}

function loadBackground(dynamic, interval, uri) {
  window._loadBg = function() {
    var url = "/api/desktop/background?w=" + window.innerWidth + "&h=" + window.innerHeight;
    document.getElementById("bgimage").style.background = "url('" + url + "')";
    document.body.style.background = "#000000"
  };
  window._loadBg();
  if (dynamic) {
    window._bgInterval = window.setInterval(function() {
      window._loadBg()
    }, (interval == 0 ? 15 : interval) * 6e4);
    window.onfocus = function() {
      window._loadBg();
      if (window._bgInterval) {
        window.clearInterval(window._bgInterval)
      }
      window._bgInterval = window.setInterval(function() {
        window._loadBg()
      }, (interval == 0 ? 15 : interval) * 6e4)
    }
  }
}

function setBgColor(src, target) {
  const rgbToHex = function(r, g, b) {
    if (r > 255 || g > 255 || b > 255) {
      return ""
    }
    return (r << 16 | g << 8 | b).toString(16)
  };
  var srcImg = document.getElementById(src);
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(document.getElementById(src), 0, 0);
  var p = ctx.getImageData(0, 0, 1, 1).data;
  var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
  if (p.length > 3) {
    var alpha = p[3];
    if (alpha == 0) {
      hex = "#ffffff"
    }
  }
  document.getElementById(target).style.background = hex
}

function doSearch(ctl) {
  var q = document.querySelector(ctl).value;
  window.open("https://html.duckduckgo.com/html?q=" + encodeURIComponent(q))
}

function newsPage(url) {
  window.open("/news?url=" + encodeURIComponent(url))
}

function tagCloud(id, targetUrl) {
  var apiUrl = "/api/external/linkding/tags/count";
  axios.get(apiUrl).then(response => {
    var feed = response.data;
    document.getElementById(id).innerHTML = app.templates.tagcloud({
      feed: feed,
      tagfunc: function(tag) {
        return targetUrl.format({
          tag: encodeURIComponent(tag)
        })
      }
    })
  }).catch(err => {
    alert(err)
  })
}

function navigateToNews(sender) {
  var url = sender.getAttribute("data-url");
  if (window.innerWidth < 992) {
    newsPage(url);
    return false
  }
  var apiUrl = "/api/resources/feed?url=" + encodeURIComponent(url);
  var options = {
    focus: true,
    backdrop: true
  };
  axios.get(apiUrl).then(response => {
    var feed = response.data;
    document.getElementById("modal").classList.add("modal-diallog-scrollable");
    window.modal = new bootstrap.Modal(document.getElementById("modal"), options);
    document.querySelector("#modalLabel").innerHTML = "News";
    document.querySelector("#modalBody").innerHTML = app.templates.news(feed);
    window.modal.show()
  })
}

function viewWeather(lat, long, days, index) {
  var options = {
    focus: true,
    backdrop: "static"
  };
  ui().weather({
    latitude: lat,
    longitude: long,
    days: days
  }).then(data => {
    window.modal = new bootstrap.Modal(document.getElementById("modal"), options);
    var result = {};
    document.querySelector("#modalLabel").innerHTML = "Weather";
    if (index && index >= 0) {
      result = data.weather[index]
    } else {
      result = data.weather[0]
    }
    document.getElementById("modal").classList.remove("modal-diallog-scrollable");
    result.location = data.location;
    document.querySelector("#modalBody").innerHTML = app.templates.weather(result);
    window.modal.show()
  }).catch(err => {
    alert(err)
  })
}

function navigateTo(target) {
  const openErrorDialog = function() {
    ui().messageBox({
      label: "Service Error",
      body: "Sorry, this service is not available. It maybe down or offline."
    })
  };
  var name = target.getAttribute("data-name");
  var url = target.getAttribute("data-url");
  if (name) {
    var apiUrl = "/api/docker/container/" + encodeURIComponent(name) + "/available";
    axios.get(apiUrl).then(response => {
      if (response.data.available) {
        window.open(url)
      } else {
        openErrorDialog()
      }
    }).catch(err => {
      openErrorDialog()
    })
  } else {
    window.open(url)
  }
}

function _desktop() {
  var d = JSON.parse(localStorage.getItem("desktop"));
  return d
}

function setBackground() {
  var opt = _desktop().background;
  switch (opt.type) {
    case "none":
      break;
    case "daily":
      var apiUrl = "/api/resources/daily/" + opt.url;
      axios.get(apiUrl).then(response => {
        var bg = response.data;
        if (bg != "") {
          document.body.style.backgroundImage = "url('" + bg + "')";
          document.body.style.backgroundRepeat = "no-repeat";
          document.body.style.backgroundPosition = "center";
          document.body.style.backgroundAttachment = "fixed";
          document.body.style.backgroundSize = "cover";
          document.body.style.height = "100%";
          document.querySelector("html").style.height = "100%";
          if (opt.image) {
            var bgfilter = opt.image.filter ?? "";
            if (bgfilter != "") {
              document.body.style.filter = bgfilter
            }
          }
        }
      });
      break;
    case "image":
      document.body.style.backgroundImage = "url('" + opt.url + "')";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundAttachment = "fixed";
      document.body.style.backgroundSize = "cover";
      document.body.style.height = "100%";
      document.querySelector("html").style.height = "100%";
      if (opt.image) {
        var bgfilter = opt.image.filter ?? "";
        if (bgfilter != "") {
          document.body.style.filter = bgfilter
        }
      }
      break;
    case "bgcolor":
      document.body.style.backgroundColor = opt.bgcolor;
      break;
    case "filter":
      document.body.style.backgroundImage = opt.filter;
      break
  }
}

function saveConfiguration() {
  var data = {
    containerName: document.getElementById("txtcontainerName").value,
    hostname: document.getElementById("txthostname").value,
    name: document.getElementById("txtname").value,
    proxy: document.getElementById("txtproxy").value,
    public: document.getElementById("txtpublic").value,
    iconSlug: document.getElementById("txticonSlug").value,
    iconCatalog: document.getElementById("txticonCatalog").value,
    archived: document.querySelector("#chkArchived").checked
  };
  var compose = document.getElementById("yamlEdit").view.state.doc;
  var project = {
    compose: compose,
    env: document.getElementById("txtEnv").value,
    changed: document.getElementById("changed").value,
    projectName: document.getElementById("txtCompose").getAttribute("data-project")
  };
  var changed = document.getElementById("changed").value;
  axios.post("/api/discovery/definition/" + encodeURIComponent(data.containerName), data).then(response => {
    axios.post("/api/discovery/project/definition/" + encodeURIComponent(project.projectName), project).then(response => {
      window.location.href = "/admin/index"
    }).catch(err => {
      alert(err)
    })
  }).catch(err => {
    alert(err)
  })
}

function composeEdit(sender) {
  var url = "/admin/edit?project=" + encodeURIComponent(sender.getAttribute("data-project")) + "&container=" + encodeURIComponent(sender.getAttribute("data-containerid"));
  window.location.href = url
}

function iconSearch() {
  var options = {
    focus: true,
    backdrop: "static"
  };
  document.getElementById("iconSearchQuery").value = "";
  document.getElementById("iconSearchResults").innerHTML = "";
  document.getElementById("btnSearch").setAttribute("data-container", "");
  document.getElementById("btnSearch").setAttribute("data-action", "");
  window.iconSearchModal = new bootstrap.Modal(document.getElementById("iconSearchModal"), options);
  ui("#iconSearchQuery").enterCheck({
    onEnterKey: performIconSearch
  });
  window.iconSearchModal.show();
  document.getElementById("iconSearchQuery").focus()
}

function performIconSearch() {
  var iconSearchQuery = document.querySelector("#iconSearchQuery").value;
  var apiUrl = "/api/icons/search/" + encodeURIComponent(iconSearchQuery);
  var iconSearchResults = document.querySelector("#iconSearchResults");
  var container = document.getElementById("btnSearch").getAttribute("data-container");
  var jscmd = document.getElementById("btnSearch").getAttribute("data-action");
  axios.get(apiUrl).then(response => {
    iconSearchResults.innerHTML = "";
    var html = '<table cellpadding="5" cellspacing="0" border="0">';
    response.data.forEach(icon => {
      if (cmd == "") {
        html += '<tr><td><img src="' + icon.url + '" data-catalog="' + icon.catalog + '" data-slug="' + icon.slug + '" style="width:64px;max-height:64px;" /></td><td><code>' + icon.url + "</code><br>Catalog: " + icon.catalog + "<br>Slug: " + icon.slug + "</td></tr>"
      } else {
        var cmd = jscmd + "('" + container + "', '" + icon.catalog + "', '" + icon.slug + "')";
        html += '<tr><td><a href="#" onclick="' + cmd + '; return false;"><img src="' + icon.url + '" data-catalog="' + icon.catalog + '" data-slug="' + icon.slug + '" style="width:64px;max-height:64px;" /></a></td><td><code>' + icon.url + "</code><br>Catalog: " + icon.catalog + "<br>Slug: " + icon.slug + "</td></tr>"
      }
    });
    iconSearchResults.innerHTML = html + "</table>"
  }).catch(err => {})
}

function composerise() {
  document.querySelector("#nav-compose-tab").click()
}

function doDeComposerise(src, target) {
  var txtRun = document.querySelector(src);
  var txtCompose = document.querySelector(target);
  var data = {
    cmd: document.getElementById("yamlEdit").view.state.doc
  };
  axios.post("/api/compose/decomposerize", data).then(response => {
    txtCompose.value = response.data
  }).catch(error => {
    txtCompose.value = JSON.stringify(error)
  })
}

function doComposerise(src, target) {
  var txtRun = document.querySelector(src);
  var txtCompose = document.querySelector(target);
  var yaml = document.getElementById("yamlEdit");
  var data = {
    cmd: txtRun.value
  };
  axios.post("/api/compose/composerize", data).then(response => {
    txtCompose.value = response.data;
    let newState = cm6.createEditorState(response.data);
    yaml.view.setState(newState)
  }).catch(error => {
    txtCompose.value = JSON.stringify(error)
  })
}

function scanDocker() {
  var apiUrl = "/api/discovery/scan";
  axios.get(apiUrl).then(response => {
    ui().messageBox({
      label: "Scan",
      body: "Service Discovery complete."
    })
  }).catch(err => {
    alert(err)
  })
}

function changeIcon(target, action) {
  var name = target.getAttribute("data-containerid");
  var apiUrl = "/api/discovery/definition/" + encodeURIComponent(name);
  axios.get(apiUrl).then(response => {
    var options = {
      focus: true,
      backdrop: "static"
    };
    document.getElementById("btnSearch").setAttribute("data-container", name);
    document.getElementById("btnSearch").setAttribute("data-action", "saveChangeIcon");
    if (action) {
      document.getElementById("btnSearch").setAttribute("data-action", action)
    }
    window.iconSearchModal = new bootstrap.Modal(document.getElementById("iconSearchModal"), options);
    document.getElementById("iconSearchQuery").value = "";
    document.getElementById("iconSearchResults").innerHTML = "";
    if (response.data && response.data.length > 0) {
      if (response.data[0].iconSlug) {
        document.getElementById("iconSearchQuery").value = response.data[0].iconSlug;
        if (response.data[0].iconSlug != "") {
          performIconSearch()
        }
      }
    }
    ui("#iconSearchQuery").enterCheck({
      onEnterKey: performIconSearch
    });
    document.getElementById("btnSearch").setAttribute("data-container", name);
    window.iconSearchModal.show();
    document.getElementById("iconSearchQuery").focus()
  }).catch(err => {
    alert(err)
  })
}

function saveChangeIcon(name, catalog, slug) {
  var apiUrl = "/api/discovery/changeicon/" + encodeURIComponent(name) + "?catalog=" + encodeURIComponent(catalog) + "&slug=" + encodeURIComponent(slug);
  axios.get(apiUrl).then(response => {
    document.getElementById("btnSearch").setAttribute("data-action", "");
    window.iconSearchModal.hide()
  }).catch(err => {
    alert(err)
  })
}

function getSeries(source, field) {
  var result = [];
  var index = 0;
  source[field].forEach(s => {
    result.push(s * 100);
    index += 1
  });
  return result
}

function getAxisLabel(source, field) {
  var result = [];
  var index = 0;
  source[field].forEach(s => {
    result.push(new Date(source.periods[index]).getTime());
    index += 1
  });
  return result
}

function getLog(id) {
  var apiUrl = "/api/docker/container/logs/" + id;
  axios.get(apiUrl).then(response => {
    document.getElementById("containerLogs").innerHTML = response.data
  }).catch(err => {})
}

function renderDashboard(id) {
  var apiUrl = "/api/docker/dashboard/" + id;
  getLog(id);
  document.querySelector("#monitorContainerName").innerHTML = id;
  axios.get(apiUrl).then(response => {
    const memorychart = function() {
      var options = {
        xAxis: {
          type: "category",
          data: getAxisLabel(response.data, "periods")
        },
        yAxis: {
          type: "value"
        },
        series: [{
          data: getSeries(response.data, "memoryFreePercent"),
          type: "line",
          smooth: true
        }]
      };
      var chartDom = document.getElementById("memorychart");
      var myChart = echarts.init(chartDom);
      myChart.setOption(options)
    };
    const cpuchart = function() {
      var options = {
        xAxis: {
          type: "category",
          data: getAxisLabel(response.data, "periods")
        },
        yAxis: {
          type: "value"
        },
        series: [{
          data: getSeries(response.data, "cpuPercent"),
          type: "line",
          smooth: true
        }]
      };
      var chartDom = document.getElementById("cpuchart");
      var myChart = echarts.init(chartDom);
      myChart.setOption(options)
    };
    cpuchart();
    memorychart();
    window._monitor = setTimeout(async () => {
      renderDashboard(id)
    }, 5 * 6e4)
  }).catch(err => {
    alert(err)
  })
}

function startContainerMonitor(target) {
  var containerId = target.getAttribute("data-containerid");
  window.containerInfoModal.hide();
  document.querySelector("#nav-monitor-tab").click();
  if (window._monitor) {
    clearTimeout(window._monitor);
    window._monitor = null
  }
  renderDashboard(containerId)
}

function containerInfo(sender) {
  var options = {
    focus: true,
    backdrop: "static"
  };
  var containerId = sender.getAttribute("data-containerid");
  ui("#containerInfo").template({
    query: {
      id: containerId
    }
  }).then(() => {
    window.containerInfoModal = new bootstrap.Modal(document.getElementById("containerInfoModal"), options);
    window.containerInfoModal.show();
    const matches = document.querySelectorAll("[data-command]");
    if (matches) {
      matches.forEach(cmd => {
        cmd.onclick = function() {
          var apiUrl = "/api/docker/" + this.getAttribute("data-command").replace("-", "/") + "/" + this.getAttribute("data-containerid");
          axios.get(apiUrl).then(response => {}).catch(err => {})
        }
      })
    }
  })
}

function updateEditForm(name, catalog, slug) {
  document.getElementById("txticonSlug").value = slug;
  document.getElementById("txticonCatalog").value = catalog;
  var apiUrl = "/api/icons/r/" + encodeURIComponent(catalog) + "/" + encodeURIComponent(slug);
  axios.get(apiUrl).then(response => {
    document.getElementById("imgIcon").src = response.data;
    window.iconSearchModal.hide()
  }).catch(err => {
    alert(err)
  })
}

function changeIconFromEdit() {
  var iconCatalog = document.getElementById("txticonCatalog").value;
  var iconSlug = document.getElementById("txticonSlug").value;
  var options = {
    focus: true,
    backdrop: "static"
  };
  document.getElementById("btnSearch").setAttribute("data-container", name);
  document.getElementById("btnSearch").setAttribute("data-action", "updateEditForm");
  window.iconSearchModal = new bootstrap.Modal(document.getElementById("iconSearchModal"), options);
  document.getElementById("iconSearchQuery").value = "";
  document.getElementById("iconSearchResults").innerHTML = "";
  if (iconSlug != "") {
    document.getElementById("iconSearchQuery").value = iconSlug;
    if (iconSlug != "") {
      performIconSearch()
    }
  }
  ui("#iconSearchQuery").enterCheck({
    onEnterKey: performIconSearch
  });
  document.getElementById("btnSearch").setAttribute("data-container", name);
  window.iconSearchModal.show();
  document.getElementById("iconSearchQuery").focus()
}
