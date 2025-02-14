! function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(ie, e) {
  "use strict";
  var oe = [],
    r = Object.getPrototypeOf,
    ae = oe.slice,
    g = oe.flat ? function(e) {
      return oe.flat.call(e)
    } : function(e) {
      return oe.concat.apply([], e)
    },
    s = oe.push,
    se = oe.indexOf,
    n = {},
    i = n.toString,
    ue = n.hasOwnProperty,
    o = ue.toString,
    a = o.call(Object),
    le = {},
    v = function(e) {
      return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    },
    y = function(e) {
      return null != e && e === e.window
    },
    C = ie.document,
    u = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

  function m(e, t, n) {
    var r, i, o = (n = n || C).createElement("script");
    if (o.text = e, t)
      for (r in u)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o)
  }

  function x(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
  }
  var t = "3.7.1",
    l = /HTML$/i,
    ce = function(e, t) {
      return new ce.fn.init(e, t)
    };

  function c(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
  }

  function fe(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  ce.fn = ce.prototype = {
    jquery: t,
    constructor: ce,
    length: 0,
    toArray: function() {
      return ae.call(this)
    },
    get: function(e) {
      return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
    },
    pushStack: function(e) {
      var t = ce.merge(this.constructor(), e);
      return t.prevObject = this, t
    },
    each: function(e) {
      return ce.each(this, e)
    },
    map: function(n) {
      return this.pushStack(ce.map(this, function(e, t) {
        return n.call(e, t, e)
      }))
    },
    slice: function() {
      return this.pushStack(ae.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    even: function() {
      return this.pushStack(ce.grep(this, function(e, t) {
        return (t + 1) % 2
      }))
    },
    odd: function() {
      return this.pushStack(ce.grep(this, function(e, t) {
        return t % 2
      }))
    },
    eq: function(e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor()
    },
    push: s,
    sort: oe.sort,
    splice: oe.splice
  }, ce.extend = ce.fn.extend = function() {
    var e, t, n, r, i, o, a = arguments[0] || {},
      s = 1,
      u = arguments.length,
      l = !1;
    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
      if (null != (e = arguments[s]))
        for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || ce.isPlainObject(n) ? n : {}, i = !1, a[t] = ce.extend(l, o, r)) : void 0 !== r && (a[t] = r));
    return a
  }, ce.extend({
    expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isPlainObject: function(e) {
      var t, n;
      return !(!e || "[object Object]" !== i.call(e)) && (!(t = r(e)) || "function" == typeof(n = ue.call(t, "constructor") && t.constructor) && o.call(n) === a)
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    globalEval: function(e, t, n) {
      m(e, {
        nonce: t && t.nonce
      }, n)
    },
    each: function(e, t) {
      var n, r = 0;
      if (c(e)) {
        for (n = e.length; r < n; r++)
          if (!1 === t.call(e[r], r, e[r])) break
      } else
        for (r in e)
          if (!1 === t.call(e[r], r, e[r])) break;
      return e
    },
    text: function(e) {
      var t, n = "",
        r = 0,
        i = e.nodeType;
      if (!i)
        while (t = e[r++]) n += ce.text(t);
      return 1 === i || 11 === i ? e.textContent : 9 === i ? e.documentElement.textContent : 3 === i || 4 === i ? e.nodeValue : n
    },
    makeArray: function(e, t) {
      var n = t || [];
      return null != e && (c(Object(e)) ? ce.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
    },
    inArray: function(e, t, n) {
      return null == t ? -1 : se.call(t, e, n)
    },
    isXMLDoc: function(e) {
      var t = e && e.namespaceURI,
        n = e && (e.ownerDocument || e).documentElement;
      return !l.test(t || n && n.nodeName || "HTML")
    },
    merge: function(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
      return e.length = i, e
    },
    grep: function(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
      return r
    },
    map: function(e, t, n) {
      var r, i, o = 0,
        a = [];
      if (c(e))
        for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
      else
        for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a)
    },
    guid: 1,
    support: le
  }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
    n["[object " + t + "]"] = t.toLowerCase()
  });
  var pe = oe.pop,
    de = oe.sort,
    he = oe.splice,
    ge = "[\\x20\\t\\r\\n\\f]",
    ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function(e, t) {
    var n = t && t.parentNode;
    return e === n || !(!n || 1 !== n.nodeType || !(e.contains ? e.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

  function p(e, t) {
    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
  }
  ce.escapeSelector = function(e) {
    return (e + "").replace(f, p)
  };
  var ye = C,
    me = s;
  ! function() {
    var e, b, w, o, a, T, r, C, d, i, k = me,
      S = ce.expando,
      E = 0,
      n = 0,
      s = W(),
      c = W(),
      u = W(),
      h = W(),
      l = function(e, t) {
        return e === t && (a = !0), 0
      },
      f = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      t = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      p = "\\[" + ge + "*(" + t + ")(?:" + ge + "*([*^$|!~]?=)" + ge + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + t + "))|)" + ge + "*\\]",
      g = ":(" + t + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + p + ")*)|.*)\\)|)",
      v = new RegExp(ge + "+", "g"),
      y = new RegExp("^" + ge + "*," + ge + "*"),
      m = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"),
      x = new RegExp(ge + "|>"),
      j = new RegExp(g),
      A = new RegExp("^" + t + "$"),
      D = {
        ID: new RegExp("^#(" + t + ")"),
        CLASS: new RegExp("^\\.(" + t + ")"),
        TAG: new RegExp("^(" + t + "|[*])"),
        ATTR: new RegExp("^" + p),
        PSEUDO: new RegExp("^" + g),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + f + ")$", "i"),
        needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i")
      },
      N = /^(?:input|select|textarea|button)$/i,
      q = /^h\d$/i,
      L = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      H = /[+~]/,
      O = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"),
      P = function(e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
      },
      M = function() {
        V()
      },
      R = J(function(e) {
        return !0 === e.disabled && fe(e, "fieldset")
      }, {
        dir: "parentNode",
        next: "legend"
      });
    try {
      k.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType
    } catch (e) {
      k = {
        apply: function(e, t) {
          me.apply(e, ae.call(t))
        },
        call: function(e) {
          me.apply(e, ae.call(arguments, 1))
        }
      }
    }

    function I(t, e, n, r) {
      var i, o, a, s, u, l, c, f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
      if (!r && (V(e), e = e || T, C)) {
        if (11 !== p && (u = L.exec(t)))
          if (i = u[1]) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return k.call(n, a), n
            } else if (f && (a = f.getElementById(i)) && I.contains(e, a) && a.id === i) return k.call(n, a), n
          } else {
            if (u[2]) return k.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && e.getElementsByClassName) return k.apply(n, e.getElementsByClassName(i)), n
          } if (!(h[t + " "] || d && d.test(t))) {
          if (c = t, f = e, 1 === p && (x.test(t) || m.test(t))) {
            (f = H.test(t) && U(e.parentNode) || e) == e && le.scope || ((s = e.getAttribute("id")) ? s = ce.escapeSelector(s) : e.setAttribute("id", s = S)), o = (l = Y(t)).length;
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + Q(l[o]);
            c = l.join(",")
          }
          try {
            return k.apply(n, f.querySelectorAll(c)), n
          } catch (e) {
            h(t, !0)
          } finally {
            s === S && e.removeAttribute("id")
          }
        }
      }
      return re(t.replace(ve, "$1"), e, n, r)
    }

    function W() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
      }
    }

    function F(e) {
      return e[S] = !0, e
    }

    function $(e) {
      var t = T.createElement("fieldset");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function B(t) {
      return function(e) {
        return fe(e, "input") && e.type === t
      }
    }

    function _(t) {
      return function(e) {
        return (fe(e, "input") || fe(e, "button")) && e.type === t
      }
    }

    function z(t) {
      return function(e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && R(e) === t : e.disabled === t : "label" in e && e.disabled === t
      }
    }

    function X(a) {
      return F(function(o) {
        return o = +o, F(function(e, t) {
          var n, r = a([], e.length, o),
            i = r.length;
          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
        })
      })
    }

    function U(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e
    }

    function V(e) {
      var t, n = e ? e.ownerDocument || e : ye;
      return n != T && 9 === n.nodeType && n.documentElement && (r = (T = n).documentElement, C = !ce.isXMLDoc(T), i = r.matches || r.webkitMatchesSelector || r.msMatchesSelector, r.msMatchesSelector && ye != T && (t = T.defaultView) && t.top !== t && t.addEventListener("unload", M), le.getById = $(function(e) {
        return r.appendChild(e).id = ce.expando, !T.getElementsByName || !T.getElementsByName(ce.expando).length
      }), le.disconnectedMatch = $(function(e) {
        return i.call(e, "*")
      }), le.scope = $(function() {
        return T.querySelectorAll(":scope")
      }), le.cssHas = $(function() {
        try {
          return T.querySelector(":has(*,:jqfake)"), !1
        } catch (e) {
          return !0
        }
      }), le.getById ? (b.filter.ID = function(e) {
        var t = e.replace(O, P);
        return function(e) {
          return e.getAttribute("id") === t
        }
      }, b.find.ID = function(e, t) {
        if ("undefined" != typeof t.getElementById && C) {
          var n = t.getElementById(e);
          return n ? [n] : []
        }
      }) : (b.filter.ID = function(e) {
        var n = e.replace(O, P);
        return function(e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n
        }
      }, b.find.ID = function(e, t) {
        if ("undefined" != typeof t.getElementById && C) {
          var n, r, i, o = t.getElementById(e);
          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;
            while (o = i[r++])
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
          }
          return []
        }
      }), b.find.TAG = function(e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : t.querySelectorAll(e)
      }, b.find.CLASS = function(e, t) {
        if ("undefined" != typeof t.getElementsByClassName && C) return t.getElementsByClassName(e)
      }, d = [], $(function(e) {
        var t;
        r.appendChild(e).innerHTML = "<a id='" + S + "' href='' disabled='disabled'></a><select id='" + S + "-\r\\' disabled='disabled'><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + ge + "*(?:value|" + f + ")"), e.querySelectorAll("[id~=" + S + "-]").length || d.push("~="), e.querySelectorAll("a#" + S + "+*").length || d.push(".#.+[+~]"), e.querySelectorAll(":checked").length || d.push(":checked"), (t = T.createElement("input")).setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), r.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"), (t = T.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || d.push("\\[" + ge + "*name" + ge + "*=" + ge + "*(?:''|\"\")")
      }), le.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), l = function(e, t) {
        if (e === t) return a = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !le.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument == ye && I.contains(ye, e) ? -1 : t === T || t.ownerDocument == ye && I.contains(ye, t) ? 1 : o ? se.call(o, e) - se.call(o, t) : 0 : 4 & n ? -1 : 1)
      }), T
    }
    for (e in I.matches = function(e, t) {
        return I(e, null, null, t)
      }, I.matchesSelector = function(e, t) {
        if (V(e), C && !h[t + " "] && (!d || !d.test(t))) try {
          var n = i.call(e, t);
          if (n || le.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
        } catch (e) {
          h(t, !0)
        }
        return 0 < I(t, T, null, [e]).length
      }, I.contains = function(e, t) {
        return (e.ownerDocument || e) != T && V(e), ce.contains(e, t)
      }, I.attr = function(e, t) {
        (e.ownerDocument || e) != T && V(e);
        var n = b.attrHandle[t.toLowerCase()],
          r = n && ue.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
        return void 0 !== r ? r : e.getAttribute(t)
      }, I.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, ce.uniqueSort = function(e) {
        var t, n = [],
          r = 0,
          i = 0;
        if (a = !le.sortStable, o = !le.sortStable && ae.call(e, 0), de.call(e, l), a) {
          while (t = e[i++]) t === e[i] && (r = n.push(i));
          while (r--) he.call(e, n[r], 1)
        }
        return o = null, e
      }, ce.fn.uniqueSort = function() {
        return this.pushStack(ce.uniqueSort(ae.apply(this)))
      }, (b = ce.expr = {
        cacheLength: 50,
        createPseudo: F,
        match: D,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            return e[1] = e[1].replace(O, P), e[3] = (e[3] || e[4] || e[5] || "").replace(O, P), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]), e
          },
          PSEUDO: function(e) {
            var t, n = !e[6] && e[2];
            return D.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && j.test(n) && (t = Y(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(O, P).toLowerCase();
            return "*" === e ? function() {
              return !0
            } : function(e) {
              return fe(e, t)
            }
          },
          CLASS: function(e) {
            var t = s[e + " "];
            return t || (t = new RegExp("(^|" + ge + ")" + e + "(" + ge + "|$)")) && s(e, function(e) {
              return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function(n, r, i) {
            return function(e) {
              var t = I.attr(e, n);
              return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(v, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
            }
          },
          CHILD: function(d, e, t, h, g) {
            var v = "nth" !== d.slice(0, 3),
              y = "last" !== d.slice(-4),
              m = "of-type" === e;
            return 1 === h && 0 === g ? function(e) {
              return !!e.parentNode
            } : function(e, t, n) {
              var r, i, o, a, s, u = v !== y ? "nextSibling" : "previousSibling",
                l = e.parentNode,
                c = m && e.nodeName.toLowerCase(),
                f = !n && !m,
                p = !1;
              if (l) {
                if (v) {
                  while (u) {
                    o = e;
                    while (o = o[u])
                      if (m ? fe(o, c) : 1 === o.nodeType) return !1;
                    s = u = "only" === d && !s && "nextSibling"
                  }
                  return !0
                }
                if (s = [y ? l.firstChild : l.lastChild], y && f) {
                  p = (a = (r = (i = l[S] || (l[S] = {}))[d] || [])[0] === E && r[1]) && r[2], o = a && l.childNodes[a];
                  while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                    if (1 === o.nodeType && ++p && o === e) {
                      i[d] = [E, a, p];
                      break
                    }
                } else if (f && (p = a = (r = (i = e[S] || (e[S] = {}))[d] || [])[0] === E && r[1]), !1 === p)
                  while (o = ++a && o && o[u] || (p = a = 0) || s.pop())
                    if ((m ? fe(o, c) : 1 === o.nodeType) && ++p && (f && ((i = o[S] || (o[S] = {}))[d] = [E, p]), o === e)) break;
                return (p -= g) === h || p % h == 0 && 0 <= p / h
              }
            }
          },
          PSEUDO: function(e, o) {
            var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
            return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? F(function(e, t) {
              var n, r = a(e, o),
                i = r.length;
              while (i--) e[n = se.call(e, r[i])] = !(t[n] = r[i])
            }) : function(e) {
              return a(e, 0, t)
            }) : a
          }
        },
        pseudos: {
          not: F(function(e) {
            var r = [],
              i = [],
              s = ne(e.replace(ve, "$1"));
            return s[S] ? F(function(e, t, n, r) {
              var i, o = s(e, null, r, []),
                a = e.length;
              while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
            }) : function(e, t, n) {
              return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
            }
          }),
          has: F(function(t) {
            return function(e) {
              return 0 < I(t, e).length
            }
          }),
          contains: F(function(t) {
            return t = t.replace(O, P),
              function(e) {
                return -1 < (e.textContent || ce.text(e)).indexOf(t)
              }
          }),
          lang: F(function(n) {
            return A.test(n || "") || I.error("unsupported lang: " + n), n = n.replace(O, P).toLowerCase(),
              function(e) {
                var t;
                do {
                  if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1
              }
          }),
          target: function(e) {
            var t = ie.location && ie.location.hash;
            return t && t.slice(1) === e.id
          },
          root: function(e) {
            return e === r
          },
          focus: function(e) {
            return e === function() {
              try {
                return T.activeElement
              } catch (e) {}
            }() && T.hasFocus() && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: z(!1),
          disabled: z(!0),
          checked: function(e) {
            return fe(e, "input") && !!e.checked || fe(e, "option") && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function(e) {
            return !b.pseudos.empty(e)
          },
          header: function(e) {
            return q.test(e.nodeName)
          },
          input: function(e) {
            return N.test(e.nodeName)
          },
          button: function(e) {
            return fe(e, "input") && "button" === e.type || fe(e, "button")
          },
          text: function(e) {
            var t;
            return fe(e, "input") && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: X(function() {
            return [0]
          }),
          last: X(function(e, t) {
            return [t - 1]
          }),
          eq: X(function(e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: X(function(e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e
          }),
          odd: X(function(e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e
          }),
          lt: X(function(e, t, n) {
            var r;
            for (r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
            return e
          }),
          gt: X(function(e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
            return e
          })
        }
      }).pseudos.nth = b.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) b.pseudos[e] = B(e);
    for (e in {
        submit: !0,
        reset: !0
      }) b.pseudos[e] = _(e);

    function G() {}

    function Y(e, t) {
      var n, r, i, o, a, s, u, l = c[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;
      while (a) {
        for (o in n && !(r = y.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = m.exec(a)) && (n = r.shift(), i.push({
            value: n,
            type: r[0].replace(ve, " ")
          }), a = a.slice(n.length)), b.filter) !(r = D[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));
        if (!n) break
      }
      return t ? a.length : a ? I.error(e) : c(e, s).slice(0)
    }

    function Q(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r
    }

    function J(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && "parentNode" === l,
        f = n++;
      return e.first ? function(e, t, n) {
        while (e = e[s])
          if (1 === e.nodeType || c) return a(e, t, n);
        return !1
      } : function(e, t, n) {
        var r, i, o = [E, f];
        if (n) {
          while (e = e[s])
            if ((1 === e.nodeType || c) && a(e, t, n)) return !0
        } else
          while (e = e[s])
            if (1 === e.nodeType || c)
              if (i = e[S] || (e[S] = {}), u && fe(e, u)) e = e[s] || e;
              else {
                if ((r = i[l]) && r[0] === E && r[1] === f) return o[2] = r[2];
                if ((i[l] = o)[2] = a(e, t, n)) return !0
              } return !1
      }
    }

    function K(i) {
      return 1 < i.length ? function(e, t, n) {
        var r = i.length;
        while (r--)
          if (!i[r](e, t, n)) return !1;
        return !0
      } : i[0]
    }

    function Z(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      return a
    }

    function ee(d, h, g, v, y, e) {
      return v && !v[S] && (v = ee(v)), y && !y[S] && (y = ee(y, e)), F(function(e, t, n, r) {
        var i, o, a, s, u = [],
          l = [],
          c = t.length,
          f = e || function(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) I(e, t[r], n);
            return n
          }(h || "*", n.nodeType ? [n] : n, []),
          p = !d || !e && h ? f : Z(f, u, d, n, r);
        if (g ? g(p, s = y || (e ? d : c || v) ? [] : t, n, r) : s = p, v) {
          i = Z(s, l), v(i, [], n, r), o = i.length;
          while (o--)(a = i[o]) && (s[l[o]] = !(p[l[o]] = a))
        }
        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = s.length;
              while (o--)(a = s[o]) && i.push(p[o] = a);
              y(null, s = [], i, r)
            }
            o = s.length;
            while (o--)(a = s[o]) && -1 < (i = y ? se.call(e, a) : u[o]) && (e[i] = !(t[i] = a))
          }
        } else s = Z(s === t ? s.splice(c, s.length) : s), y ? y(null, t, s, r) : k.apply(t, s)
      })
    }

    function te(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = J(function(e) {
          return e === i
        }, a, !0), l = J(function(e) {
          return -1 < se.call(i, e)
        }, a, !0), c = [function(e, t, n) {
          var r = !o && (n || t != w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
          return i = null, r
        }]; s < r; s++)
        if (t = b.relative[e[s].type]) c = [J(K(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++)
              if (b.relative[e[n].type]) break;
            return ee(1 < s && K(c), 1 < s && Q(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(ve, "$1"), t, s < n && te(e.slice(s, n)), n < r && te(e = e.slice(n)), n < r && Q(e))
          }
          c.push(t)
        } return K(c)
    }

    function ne(e, t) {
      var n, v, y, m, x, r, i = [],
        o = [],
        a = u[e + " "];
      if (!a) {
        t || (t = Y(e)), n = t.length;
        while (n--)(a = te(t[n]))[S] ? i.push(a) : o.push(a);
        (a = u(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
          var o, a, s, u = 0,
            l = "0",
            c = e && [],
            f = [],
            p = w,
            d = e || x && b.find.TAG("*", i),
            h = E += null == p ? 1 : Math.random() || .1,
            g = d.length;
          for (i && (w = t == T || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == T || (V(o), n = !C);
              while (s = v[a++])
                if (s(o, t || T, n)) {
                  k.call(r, o);
                  break
                } i && (E = h)
            }
            m && ((o = !s && o) && u--, e && c.push(o))
          }
          if (u += l, m && l !== u) {
            a = 0;
            while (s = y[a++]) s(c, f, t, n);
            if (e) {
              if (0 < u)
                while (l--) c[l] || f[l] || (f[l] = pe.call(r));
              f = Z(f)
            }
            k.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && ce.uniqueSort(r)
          }
          return i && (E = h, w = p), c
        }, m ? F(r) : r))).selector = e
      }
      return a
    }

    function re(e, t, n, r) {
      var i, o, a, s, u, l = "function" == typeof e && e,
        c = !r && Y(e = l.selector || e);
      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && C && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(O, P), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length)
        }
        i = D.needsContext.test(e) ? 0 : o.length;
        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(O, P), H.test(o[0].type) && U(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && Q(o))) return k.apply(n, r), n;
            break
          }
        }
      }
      return (l || ne(e, c))(r, t, !C, n, !t || H.test(e) && U(t.parentNode) || t), n
    }
    G.prototype = b.filters = b.pseudos, b.setFilters = new G, le.sortStable = S.split("").sort(l).join("") === S, V(), le.sortDetached = $(function(e) {
      return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
    }), ce.find = I, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I.compile = ne, I.select = re, I.setDocument = V, I.tokenize = Y, I.escape = ce.escapeSelector, I.getText = ce.text, I.isXML = ce.isXMLDoc, I.selectors = ce.expr, I.support = ce.support, I.uniqueSort = ce.uniqueSort
  }();
  var d = function(e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && ce(e).is(n)) break;
          r.push(e)
        } return r
    },
    h = function(e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n
    },
    b = ce.expr.match.needsContext,
    w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function T(e, n, r) {
    return v(n) ? ce.grep(e, function(e, t) {
      return !!n.call(e, t, e) !== r
    }) : n.nodeType ? ce.grep(e, function(e) {
      return e === n !== r
    }) : "string" != typeof n ? ce.grep(e, function(e) {
      return -1 < se.call(n, e) !== r
    }) : ce.filter(n, e, r)
  }
  ce.filter = function(e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ce.find.matchesSelector(r, e) ? [r] : [] : ce.find.matches(e, ce.grep(t, function(e) {
      return 1 === e.nodeType
    }))
  }, ce.fn.extend({
    find: function(e) {
      var t, n, r = this.length,
        i = this;
      if ("string" != typeof e) return this.pushStack(ce(e).filter(function() {
        for (t = 0; t < r; t++)
          if (ce.contains(i[t], this)) return !0
      }));
      for (n = this.pushStack([]), t = 0; t < r; t++) ce.find(e, i[t], n);
      return 1 < r ? ce.uniqueSort(n) : n
    },
    filter: function(e) {
      return this.pushStack(T(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(T(this, e || [], !0))
    },
    is: function(e) {
      return !!T(this, "string" == typeof e && b.test(e) ? ce(e) : e || [], !1).length
    }
  });
  var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (ce.fn.init = function(e, t, n) {
    var r, i;
    if (!e) return this;
    if (n = n || k, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : S.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), w.test(r[1]) && ce.isPlainObject(t))
          for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this
      }
      return (i = C.getElementById(r[2])) && (this[0] = i, this.length = 1), this
    }
    return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(ce) : ce.makeArray(e, this)
  }).prototype = ce.fn, k = ce(C);
  var E = /^(?:parents|prev(?:Until|All))/,
    j = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

  function A(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e
  }
  ce.fn.extend({
    has: function(e) {
      var t = ce(e, this),
        n = t.length;
      return this.filter(function() {
        for (var e = 0; e < n; e++)
          if (ce.contains(this, t[e])) return !0
      })
    },
    closest: function(e, t) {
      var n, r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && ce(e);
      if (!b.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && ce.find.matchesSelector(n, e))) {
              o.push(n);
              break
            } return this.pushStack(1 < o.length ? ce.uniqueSort(o) : o)
    },
    index: function(e) {
      return e ? "string" == typeof e ? se.call(ce(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), ce.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return d(e, "parentNode")
    },
    parentsUntil: function(e, t, n) {
      return d(e, "parentNode", n)
    },
    next: function(e) {
      return A(e, "nextSibling")
    },
    prev: function(e) {
      return A(e, "previousSibling")
    },
    nextAll: function(e) {
      return d(e, "nextSibling")
    },
    prevAll: function(e) {
      return d(e, "previousSibling")
    },
    nextUntil: function(e, t, n) {
      return d(e, "nextSibling", n)
    },
    prevUntil: function(e, t, n) {
      return d(e, "previousSibling", n)
    },
    siblings: function(e) {
      return h((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return h(e.firstChild)
    },
    contents: function(e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (fe(e, "template") && (e = e.content || e), ce.merge([], e.childNodes))
    }
  }, function(r, i) {
    ce.fn[r] = function(e, t) {
      var n = ce.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = ce.filter(t, n)), 1 < this.length && (j[r] || ce.uniqueSort(n), E.test(r) && n.reverse()), this.pushStack(n)
    }
  });
  var D = /[^\x20\t\r\n\f]+/g;

  function N(e) {
    return e
  }

  function q(e) {
    throw e
  }

  function L(e, t, n, r) {
    var i;
    try {
      e && v(i = e.promise) ? i.call(e).done(t).fail(n) : e && v(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  ce.Callbacks = function(r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, ce.each(e.match(D) || [], function(e, t) {
      n[t] = !0
    }), n) : ce.extend({}, r);
    var i, t, o, a, s = [],
      u = [],
      l = -1,
      c = function() {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
        }
        r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
      },
      f = {
        add: function() {
          return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
            ce.each(e, function(e, t) {
              v(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== x(t) && n(t)
            })
          }(arguments), t && !i && c()), this
        },
        remove: function() {
          return ce.each(arguments, function(e, t) {
            var n;
            while (-1 < (n = ce.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
          }), this
        },
        has: function(e) {
          return e ? -1 < ce.inArray(e, s) : 0 < s.length
        },
        empty: function() {
          return s && (s = []), this
        },
        disable: function() {
          return a = u = [], s = t = "", this
        },
        disabled: function() {
          return !s
        },
        lock: function() {
          return a = u = [], t || i || (s = t = ""), this
        },
        locked: function() {
          return !!a
        },
        fireWith: function(e, t) {
          return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
        },
        fire: function() {
          return f.fireWith(this, arguments), this
        },
        fired: function() {
          return !!o
        }
      };
    return f
  }, ce.extend({
    Deferred: function(e) {
      var o = [
          ["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2],
          ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"],
          ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]
        ],
        i = "pending",
        a = {
          state: function() {
            return i
          },
          always: function() {
            return s.done(arguments).fail(arguments), this
          },
          catch: function(e) {
            return a.then(null, e)
          },
          pipe: function() {
            var i = arguments;
            return ce.Deferred(function(r) {
              ce.each(o, function(e, t) {
                var n = v(i[t[4]]) && i[t[4]];
                s[t[1]](function() {
                  var e = n && n.apply(this, arguments);
                  e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                })
              }), i = null
            }).promise()
          },
          then: function(t, n, r) {
            var u = 0;

            function l(i, o, a, s) {
              return function() {
                var n = this,
                  r = arguments,
                  e = function() {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                      t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, o, N, s), l(u, o, q, s)) : (u++, t.call(e, l(u, o, N, s), l(u, o, q, s), l(u, o, N, o.notifyWith))) : (a !== N && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                    }
                  },
                  t = s ? e : function() {
                    try {
                      e()
                    } catch (e) {
                      ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, t.error), u <= i + 1 && (a !== q && (n = void 0, r = [e]), o.rejectWith(n, r))
                    }
                  };
                i ? t() : (ce.Deferred.getErrorHook ? t.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t.error = ce.Deferred.getStackHook()), ie.setTimeout(t))
              }
            }
            return ce.Deferred(function(e) {
              o[0][3].add(l(0, e, v(r) ? r : N, e.notifyWith)), o[1][3].add(l(0, e, v(t) ? t : N)), o[2][3].add(l(0, e, v(n) ? n : q))
            }).promise()
          },
          promise: function(e) {
            return null != e ? ce.extend(e, a) : a
          }
        },
        s = {};
      return ce.each(o, function(e, t) {
        var n = t[2],
          r = t[5];
        a[t[1]] = n.add, r && n.add(function() {
          i = r
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
        }, s[t[0] + "With"] = n.fireWith
      }), a.promise(s), e && e.call(s, s), s
    },
    when: function(e) {
      var n = arguments.length,
        t = n,
        r = Array(t),
        i = ae.call(arguments),
        o = ce.Deferred(),
        a = function(t) {
          return function(e) {
            r[t] = this, i[t] = 1 < arguments.length ? ae.call(arguments) : e, --n || o.resolveWith(r, i)
          }
        };
      if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || v(i[t] && i[t].then))) return o.then();
      while (t--) L(i[t], a(t), o.reject);
      return o.promise()
    }
  });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ce.Deferred.exceptionHook = function(e, t) {
    ie.console && ie.console.warn && e && H.test(e.name) && ie.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
  }, ce.readyException = function(e) {
    ie.setTimeout(function() {
      throw e
    })
  };
  var O = ce.Deferred();

  function P() {
    C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready()
  }
  ce.fn.ready = function(e) {
    return O.then(e)["catch"](function(e) {
      ce.readyException(e)
    }), this
  }, ce.extend({
    isReady: !1,
    readyWait: 1,
    ready: function(e) {
      (!0 === e ? --ce.readyWait : ce.isReady) || (ce.isReady = !0) !== e && 0 < --ce.readyWait || O.resolveWith(C, [ce])
    }
  }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
  var M = function(e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n))
        for (s in i = !0, n) M(e, t, s, n[s], !0, o, a);
      else if (void 0 !== r && (i = !0, v(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
          return l.call(ce(e), n)
        })), t))
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
    R = /^-ms-/,
    I = /-([a-z])/g;

  function W(e, t) {
    return t.toUpperCase()
  }

  function F(e) {
    return e.replace(R, "ms-").replace(I, W)
  }
  var $ = function(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  };

  function B() {
    this.expando = ce.expando + B.uid++
  }
  B.uid = 1, B.prototype = {
    cache: function(e) {
      var t = e[this.expando];
      return t || (t = {}, $(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t
    },
    set: function(e, t, n) {
      var r, i = this.cache(e);
      if ("string" == typeof t) i[F(t)] = n;
      else
        for (r in t) i[F(r)] = t[r];
      return i
    },
    get: function(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][F(t)]
    },
    access: function(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
    },
    remove: function(e, t) {
      var n, r = e[this.expando];
      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(F) : (t = F(t)) in r ? [t] : t.match(D) || []).length;
          while (n--) delete r[t[n]]
        }(void 0 === t || ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
      }
    },
    hasData: function(e) {
      var t = e[this.expando];
      return void 0 !== t && !ce.isEmptyObject(t)
    }
  };
  var _ = new B,
    z = new B,
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    U = /[A-Z]/g;

  function V(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (r = "data-" + t.replace(U, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
        try {
          n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : X.test(i) ? JSON.parse(i) : i)
        } catch (e) {}
        z.set(e, t, n)
      } else n = void 0;
    return n
  }
  ce.extend({
    hasData: function(e) {
      return z.hasData(e) || _.hasData(e)
    },
    data: function(e, t, n) {
      return z.access(e, t, n)
    },
    removeData: function(e, t) {
      z.remove(e, t)
    },
    _data: function(e, t, n) {
      return _.access(e, t, n)
    },
    _removeData: function(e, t) {
      _.remove(e, t)
    }
  }), ce.fn.extend({
    data: function(n, e) {
      var t, r, i, o = this[0],
        a = o && o.attributes;
      if (void 0 === n) {
        if (this.length && (i = z.get(o), 1 === o.nodeType && !_.get(o, "hasDataAttrs"))) {
          t = a.length;
          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = F(r.slice(5)), V(o, r, i[r]));
          _.set(o, "hasDataAttrs", !0)
        }
        return i
      }
      return "object" == typeof n ? this.each(function() {
        z.set(this, n)
      }) : M(this, function(e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = z.get(o, n)) ? t : void 0 !== (t = V(o, n)) ? t : void 0;
        this.each(function() {
          z.set(this, n, e)
        })
      }, null, e, 1 < arguments.length, null, !0)
    },
    removeData: function(e) {
      return this.each(function() {
        z.remove(this, e)
      })
    }
  }), ce.extend({
    queue: function(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = _.get(e, t), n && (!r || Array.isArray(n) ? r = _.access(e, t, ce.makeArray(n)) : r.push(n)), r || []
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var n = ce.queue(e, t),
        r = n.length,
        i = n.shift(),
        o = ce._queueHooks(e, t);
      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
        ce.dequeue(e, t)
      }, o)), !r && o && o.empty.fire()
    },
    _queueHooks: function(e, t) {
      var n = t + "queueHooks";
      return _.get(e, n) || _.access(e, n, {
        empty: ce.Callbacks("once memory").add(function() {
          _.remove(e, [t + "queue", n])
        })
      })
    }
  }), ce.fn.extend({
    queue: function(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ce.queue(this[0], t) : void 0 === n ? this : this.each(function() {
        var e = ce.queue(this, t, n);
        ce._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ce.dequeue(this, t)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        ce.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var n, r = 1,
        i = ce.Deferred(),
        o = this,
        a = this.length,
        s = function() {
          --r || i.resolveWith(o, [o])
        };
      "string" != typeof e && (t = e, e = void 0), e = e || "fx";
      while (a--)(n = _.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      return s(), i.promise(t)
    }
  });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"),
    Q = ["Top", "Right", "Bottom", "Left"],
    J = C.documentElement,
    K = function(e) {
      return ce.contains(e.ownerDocument, e)
    },
    Z = {
      composed: !0
    };
  J.getRootNode && (K = function(e) {
    return ce.contains(e.ownerDocument, e) || e.getRootNode(Z) === e.ownerDocument
  });
  var ee = function(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && K(e) && "none" === ce.css(e, "display")
  };

  function te(e, t, n, r) {
    var i, o, a = 20,
      s = r ? function() {
        return r.cur()
      } : function() {
        return ce.css(e, t, "")
      },
      u = s(),
      l = n && n[3] || (ce.cssNumber[t] ? "" : "px"),
      c = e.nodeType && (ce.cssNumber[t] || "px" !== l && +u) && Y.exec(ce.css(e, t));
    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;
      while (a--) ce.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      c *= 2, ce.style(e, t, c + l), n = n || []
    }
    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
  }
  var ne = {};

  function re(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = _.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ee(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ne[s]) || (o = a.body.appendChild(a.createElement(s)), u = ce.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ne[s] = u)))) : "none" !== n && (l[c] = "none", _.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e
  }
  ce.fn.extend({
    show: function() {
      return re(this, !0)
    },
    hide: function() {
      return re(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        ee(this) ? ce(this).show() : ce(this).hide()
      })
    }
  });
  var xe, be, we = /^(?:checkbox|radio)$/i,
    Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Ce = /^$|^module$|\/(?:java|ecma)script/i;
  xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
  var ke = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function Se(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && fe(e, t) ? ce.merge([e], n) : n
  }

  function Ee(e, t) {
    for (var n = 0, r = e.length; n < r; n++) _.set(e[n], "globalEval", !t || _.get(t[n], "globalEval"))
  }
  ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;

  function Ae(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) ce.merge(p, o.nodeType ? [o] : o);
        else if (je.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (Te.exec(o) || ["", ""])[1].toLowerCase(), u = ke[s] || ke._default, a.innerHTML = u[1] + ce.htmlPrefilter(o) + u[2], c = u[0];
      while (c--) a = a.lastChild;
      ce.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
    } else p.push(t.createTextNode(o));
    f.textContent = "", d = 0;
    while (o = p[d++])
      if (r && -1 < ce.inArray(o, r)) i && i.push(o);
      else if (l = K(o), a = Se(f.appendChild(o), "script"), l && Ee(a), n) {
      c = 0;
      while (o = a[c++]) Ce.test(o.type || "") && n.push(o)
    }
    return f
  }
  var De = /^([^.]*)(?:\.(.+)|)/;

  function Ne() {
    return !0
  }

  function qe() {
    return !1
  }

  function Le(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) Le(e, s, n, r, t[s], o);
      return e
    }
    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = qe;
    else if (!i) return e;
    return 1 === o && (a = i, (i = function(e) {
      return ce().off(e), a.apply(this, arguments)
    }).guid = a.guid || (a.guid = ce.guid++)), e.each(function() {
      ce.event.add(this, t, i, r, n)
    })
  }

  function He(e, r, t) {
    t ? (_.set(e, r, !1), ce.event.add(e, r, {
      namespace: !1,
      handler: function(e) {
        var t, n = _.get(this, r);
        if (1 & e.isTrigger && this[r]) {
          if (n)(ce.event.special[r] || {}).delegateType && e.stopPropagation();
          else if (n = ae.call(arguments), _.set(this, r, n), this[r](), t = _.get(this, r), _.set(this, r, !1), n !== t) return e.stopImmediatePropagation(), e.preventDefault(), t
        } else n && (_.set(this, r, ce.event.trigger(n[0], n.slice(1), this)), e.stopPropagation(), e.isImmediatePropagationStopped = Ne)
      }
    })) : void 0 === _.get(e, r) && ce.event.add(e, r, Ne)
  }
  ce.event = {
    global: {},
    add: function(t, e, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, v = _.get(t);
      if ($(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && ce.find.matchesSelector(J, i), n.guid || (n.guid = ce.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
          return "undefined" != typeof ce && ce.event.triggered !== e.type ? ce.event.dispatch.apply(t, arguments) : void 0
        }), l = (e = (e || "").match(D) || [""]).length;
        while (l--) d = g = (s = De.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = ce.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = ce.event.special[d] || {}, c = ce.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && ce.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), ce.event.global[d] = !0)
      }
    },
    remove: function(e, t, n, r, i) {
      var o, a, s, u, l, c, f, p, d, h, g, v = _.hasData(e) && _.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(D) || [""]).length;
        while (l--)
          if (d = g = (s = De.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = ce.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
            while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ce.removeEvent(e, d, v.handle), delete u[d])
          } else
            for (d in u) ce.event.remove(e, d + t[l], n, r, !0);
        ce.isEmptyObject(u) && _.remove(e, "handle events")
      }
    },
    dispatch: function(e) {
      var t, n, r, i, o, a, s = new Array(arguments.length),
        u = ce.event.fix(e),
        l = (_.get(this, "events") || Object.create(null))[u.type] || [],
        c = ce.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = ce.event.handlers.call(this, u, l), t = 0;
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result
      }
    },
    handlers: function(e, t) {
      var n, r, i, o, a, s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < ce(i, this).index(l) : ce.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && s.push({
              elem: l,
              handlers: o
            })
          } return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s
    },
    addProp: function(t, e) {
      Object.defineProperty(ce.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: v(e) ? function() {
          if (this.originalEvent) return e(this.originalEvent)
        } : function() {
          if (this.originalEvent) return this.originalEvent[t]
        },
        set: function(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          })
        }
      })
    },
    fix: function(e) {
      return e[ce.expando] ? e : new ce.Event(e)
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function(e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click", !0), !1
        },
        trigger: function(e) {
          var t = this || e;
          return we.test(t.type) && t.click && fe(t, "input") && He(t, "click"), !0
        },
        _default: function(e) {
          var t = e.target;
          return we.test(t.type) && t.click && fe(t, "input") && _.get(t, "click") || fe(t, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    }
  }, ce.removeEvent = function(e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n)
  }, ce.Event = function(e, t) {
    if (!(this instanceof ce.Event)) return new ce.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ne : qe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ce.expando] = !0
  }, ce.Event.prototype = {
    constructor: ce.Event,
    isDefaultPrevented: qe,
    isPropagationStopped: qe,
    isImmediatePropagationStopped: qe,
    isSimulated: !1,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ne, e && !this.isSimulated && e.preventDefault()
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = Ne, e && !this.isSimulated && e.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ne, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, ce.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    char: !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: !0
  }, ce.event.addProp), ce.each({
    focus: "focusin",
    blur: "focusout"
  }, function(r, i) {
    function o(e) {
      if (C.documentMode) {
        var t = _.get(this, "handle"),
          n = ce.event.fix(e);
        n.type = "focusin" === e.type ? "focus" : "blur", n.isSimulated = !0, t(e), n.target === n.currentTarget && t(n)
      } else ce.event.simulate(i, e.target, ce.event.fix(e))
    }
    ce.event.special[r] = {
      setup: function() {
        var e;
        if (He(this, r, !0), !C.documentMode) return !1;
        (e = _.get(this, i)) || this.addEventListener(i, o), _.set(this, i, (e || 0) + 1)
      },
      trigger: function() {
        return He(this, r), !0
      },
      teardown: function() {
        var e;
        if (!C.documentMode) return !1;
        (e = _.get(this, i) - 1) ? _.set(this, i, e): (this.removeEventListener(i, o), _.remove(this, i))
      },
      _default: function(e) {
        return _.get(e.target, r)
      },
      delegateType: i
    }, ce.event.special[i] = {
      setup: function() {
        var e = this.ownerDocument || this.document || this,
          t = C.documentMode ? this : e,
          n = _.get(t, i);
        n || (C.documentMode ? this.addEventListener(i, o) : e.addEventListener(r, o, !0)), _.set(t, i, (n || 0) + 1)
      },
      teardown: function() {
        var e = this.ownerDocument || this.document || this,
          t = C.documentMode ? this : e,
          n = _.get(t, i) - 1;
        n ? _.set(t, i, n) : (C.documentMode ? this.removeEventListener(i, o) : e.removeEventListener(r, o, !0), _.remove(t, i))
      }
    }
  }), ce.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, i) {
    ce.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function(e) {
        var t, n = e.relatedTarget,
          r = e.handleObj;
        return n && (n === this || ce.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
      }
    }
  }), ce.fn.extend({
    on: function(e, t, n, r) {
      return Le(this, e, t, n, r)
    },
    one: function(e, t, n, r) {
      return Le(this, e, t, n, r, 1)
    },
    off: function(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);
        return this
      }
      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = qe), this.each(function() {
        ce.event.remove(this, e, n, t)
      })
    }
  });
  var Oe = /<script|<style|<link/i,
    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

  function Re(e, t) {
    return fe(e, "table") && fe(11 !== t.nodeType ? t : t.firstChild, "tr") && ce(e).children("tbody")[0] || e
  }

  function Ie(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function We(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
  }

  function Fe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (_.hasData(e) && (s = _.get(e).events))
        for (i in _.remove(t, "handle events"), s)
          for (n = 0, r = s[i].length; n < r; n++) ce.event.add(t, i, s[i][n]);
      z.hasData(e) && (o = z.access(e), a = ce.extend({}, o), z.set(t, a))
    }
  }

  function $e(n, r, i, o) {
    r = g(r);
    var e, t, a, s, u, l, c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = v(d);
    if (h || 1 < f && "string" == typeof d && !le.checkClone && Pe.test(d)) return n.each(function(e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), $e(t, r, i, o)
    });
    if (f && (t = (e = Ae(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = ce.map(Se(e, "script"), Ie)).length; c < f; c++) u = e, c !== p && (u = ce.clone(u, !0, !0), s && ce.merge(a, Se(u, "script"))), i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, ce.map(a, We), c = 0; c < s; c++) u = a[c], Ce.test(u.type || "") && !_.access(u, "globalEval") && ce.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? ce._evalUrl && !u.noModule && ce._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }, l) : m(u.textContent.replace(Me, ""), u, l))
    }
    return n
  }

  function Be(e, t, n) {
    for (var r, i = t ? ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ce.cleanData(Se(r)), r.parentNode && (n && K(r) && Ee(Se(r, "script")), r.parentNode.removeChild(r));
    return e
  }
  ce.extend({
    htmlPrefilter: function(e) {
      return e
    },
    clone: function(e, t, n) {
      var r, i, o, a, s, u, l, c = e.cloneNode(!0),
        f = K(e);
      if (!(le.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
        for (a = Se(c), r = 0, i = (o = Se(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || Se(e), a = a || Se(c), r = 0, i = o.length; r < i; r++) Fe(o[r], a[r]);
        else Fe(e, c);
      return 0 < (a = Se(c, "script")).length && Ee(a, !f && Se(e, "script")), c
    },
    cleanData: function(e) {
      for (var t, n, r, i = ce.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if ($(n)) {
          if (t = n[_.expando]) {
            if (t.events)
              for (r in t.events) i[r] ? ce.event.remove(n, r) : ce.removeEvent(n, r, t.handle);
            n[_.expando] = void 0
          }
          n[z.expando] && (n[z.expando] = void 0)
        }
    }
  }), ce.fn.extend({
    detach: function(e) {
      return Be(this, e, !0)
    },
    remove: function(e) {
      return Be(this, e)
    },
    text: function(e) {
      return M(this, function(e) {
        return void 0 === e ? ce.text(this) : this.empty().each(function() {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function() {
      return $e(this, arguments, function(e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e).appendChild(e)
      })
    },
    prepend: function() {
      return $e(this, arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Re(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return $e(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return $e(this, arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(Se(e, !1)), e.textContent = "");
      return this
    },
    clone: function(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function() {
        return ce.clone(this, e, t)
      })
    },
    html: function(e) {
      return M(this, function(e) {
        var t = this[0] || {},
          n = 0,
          r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !Oe.test(e) && !ke[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = ce.htmlPrefilter(e);
          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (ce.cleanData(Se(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var n = [];
      return $e(this, arguments, function(e) {
        var t = this.parentNode;
        ce.inArray(this, n) < 0 && (ce.cleanData(Se(this)), t && t.replaceChild(e, this))
      }, n)
    }
  }), ce.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, a) {
    ce.fn[e] = function(e) {
      for (var t, n = [], r = ce(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), ce(r[o])[a](t), s.apply(n, t.get());
      return this.pushStack(n)
    }
  });
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"),
    ze = /^--/,
    Xe = function(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = ie), t.getComputedStyle(e)
    },
    Ue = function(e, t, n) {
      var r, i, o = {};
      for (i in t) o[i] = e.style[i], e.style[i] = t[i];
      for (i in r = n.call(e), t) e.style[i] = o[i];
      return r
    },
    Ve = new RegExp(Q.join("|"), "i");

  function Ge(e, t, n) {
    var r, i, o, a, s = ze.test(t),
      u = e.style;
    return (n = n || Xe(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace(ve, "$1") || void 0), "" !== a || K(e) || (a = ce.style(e, t)), !le.pixelBoxStyles() && _e.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
  }

  function Ye(e, t) {
    return {
      get: function() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get
      }
    }
  }! function() {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u).appendChild(l);
        var e = ie.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), J.removeChild(u), l = null
      }
    }

    function t(e) {
      return Math.round(parseFloat(e))
    }
    var n, r, i, o, a, s, u = C.createElement("div"),
      l = C.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l.style.backgroundClip, ce.extend(le, {
      boxSizingReliable: function() {
        return e(), r
      },
      pixelBoxStyles: function() {
        return e(), o
      },
      pixelPosition: function() {
        return e(), n
      },
      reliableMarginLeft: function() {
        return e(), s
      },
      scrollboxSize: function() {
        return e(), i
      },
      reliableTrDimensions: function() {
        var e, t, n, r;
        return null == a && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "box-sizing:content-box;border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", J.appendChild(e).appendChild(t).appendChild(n), r = ie.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, J.removeChild(e)), a
      }
    }))
  }();
  var Qe = ["Webkit", "Moz", "ms"],
    Je = C.createElement("div").style,
    Ke = {};

  function Ze(e) {
    var t = ce.cssProps[e] || Ke[e];
    return t || (e in Je ? e : Ke[e] = function(e) {
      var t = e[0].toUpperCase() + e.slice(1),
        n = Qe.length;
      while (n--)
        if ((e = Qe[n] + t) in Je) return e
    }(e) || e)
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    nt = {
      letterSpacing: "0",
      fontWeight: "400"
    };

  function rt(e, t, n) {
    var r = Y.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
  }

  function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0,
      l = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2) "margin" === n && (l += ce.css(e, n + Q[a], !0, i)), r ? ("content" === n && (u -= ce.css(e, "padding" + Q[a], !0, i)), "margin" !== n && (u -= ce.css(e, "border" + Q[a] + "Width", !0, i))) : (u += ce.css(e, "padding" + Q[a], !0, i), "padding" !== n ? u += ce.css(e, "border" + Q[a] + "Width", !0, i) : s += ce.css(e, "border" + Q[a] + "Width", !0, i));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u + l
  }

  function ot(e, t, n) {
    var r = Xe(e),
      i = (!le.boxSizingReliable() || n) && "border-box" === ce.css(e, "boxSizing", !1, r),
      o = i,
      a = Ge(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (_e.test(a)) {
      if (!n) return a;
      a = "auto"
    }
    return (!le.boxSizingReliable() && i || !le.reliableTrDimensions() && fe(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === ce.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === ce.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
  }

  function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i)
  }
  ce.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var n = Ge(e, "opacity");
            return "" === n ? "1" : n
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0
    },
    cssProps: {},
    style: function(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i, o, a, s = F(t),
          u = ze.test(t),
          l = e.style;
        if (u || (t = Ze(s)), a = ce.cssHooks[t] || ce.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = Y.exec(n)) && i[1] && (n = te(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (ce.cssNumber[s] ? "" : "px")), le.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
      }
    },
    css: function(e, t, n, r) {
      var i, o, a, s = F(t);
      return ze.test(t) || (t = Ze(s)), (a = ce.cssHooks[t] || ce.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ge(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
    }
  }), ce.each(["height", "width"], function(e, u) {
    ce.cssHooks[u] = {
      get: function(e, t, n) {
        if (t) return !et.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, u, n) : Ue(e, tt, function() {
          return ot(e, u, n)
        })
      },
      set: function(e, t, n) {
        var r, i = Xe(e),
          o = !le.scrollboxSize() && "absolute" === i.position,
          a = (o || n) && "border-box" === ce.css(e, "boxSizing", !1, i),
          s = n ? it(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - it(e, u, "border", !1, i) - .5)), s && (r = Y.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = ce.css(e, u)), rt(0, t, s)
      }
    }
  }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e, t) {
    if (t) return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Ue(e, {
      marginLeft: 0
    }, function() {
      return e.getBoundingClientRect().left
    })) + "px"
  }), ce.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(i, o) {
    ce.cssHooks[i + o] = {
      expand: function(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + Q[t] + o] = r[t] || r[t - 2] || r[0];
        return n
      }
    }, "margin" !== i && (ce.cssHooks[i + o].set = rt)
  }), ce.fn.extend({
    css: function(e, t) {
      return M(this, function(e, t, n) {
        var r, i, o = {},
          a = 0;
        if (Array.isArray(t)) {
          for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = ce.css(e, t[a], !1, r);
          return o
        }
        return void 0 !== n ? ce.style(e, t, n) : ce.css(e, t)
      }, e, t, 1 < arguments.length)
    }
  }), ((ce.Tween = at).prototype = {
    constructor: at,
    init: function(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ce.cssNumber[n] ? "" : "px")
    },
    cur: function() {
      var e = at.propHooks[this.prop];
      return e && e.get ? e.get(this) : at.propHooks._default.get(this)
    },
    run: function(e) {
      var t, n = at.propHooks[this.prop];
      return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this
    }
  }).init.prototype = at.prototype, (at.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
      },
      set: function(e) {
        ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !ce.cssHooks[e.prop] && null == e.elem.style[Ze(e.prop)] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit)
      }
    }
  }).scrollTop = at.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, ce.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
  }, ce.fx = at.prototype.init, ce.fx.step = {};
  var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;

  function dt() {
    ut && (!1 === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick())
  }

  function ht() {
    return ie.setTimeout(function() {
      st = void 0
    }), st = Date.now()
  }

  function gt(e, t) {
    var n, r = 0,
      i = {
        height: e
      };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Q[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i
  }

  function vt(e, t, n) {
    for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
      if (r = i[o].call(n, t, e)) return r
  }

  function yt(o, e, t) {
    var n, a, r = 0,
      i = yt.prefilters.length,
      s = ce.Deferred().always(function() {
        delete u.elem
      }),
      u = function() {
        if (a) return !1;
        for (var e = st || ht(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
      },
      l = s.promise({
        elem: o,
        props: ce.extend({}, e),
        opts: ce.extend(!0, {
          specialEasing: {},
          easing: ce.easing._default
        }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: st || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function(e, t) {
          var n = ce.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n
        },
        stop: function(e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
        }
      }),
      c = l.props;
    for (! function(e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (i = t[r = F(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ce.cssHooks[r]) && "expand" in a)
            for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
          else t[r] = i
      }(c, l.opts.specialEasing); r < i; r++)
      if (n = yt.prefilters[r].call(l, o, c, l.opts)) return v(n.stop) && (ce._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return ce.map(c, vt, l), v(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), ce.fx.timer(ce.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l
  }
  ce.Animation = ce.extend(yt, {
    tweeners: {
      "*": [function(e, t) {
        var n = this.createTween(e, t);
        return te(n.elem, e, Y.exec(t), n), n
      }]
    },
    tweener: function(e, t) {
      v(e) ? (t = e, e = ["*"]) : e = e.match(D);
      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t)
    },
    prefilters: [function(e, t, n) {
      var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
        p = this,
        d = {},
        h = e.style,
        g = e.nodeType && ee(e),
        v = _.get(e, "fxshow");
      for (r in n.queue || (null == (a = ce._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
          a.unqueued || s()
        }), a.unqueued++, p.always(function() {
          p.always(function() {
            a.unqueued--, ce.queue(e, "fx").length || a.empty.fire()
          })
        })), t)
        if (i = t[r], ft.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0
          }
          d[r] = v && v[r] || ce.style(e, r)
        } if ((u = !ce.isEmptyObject(t)) || !ce.isEmptyObject(d))
        for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = _.get(e, "display")), "none" === (c = ce.css(e, "display")) && (l ? c = l : (re([e], !0), l = e.style.display || l, c = ce.css(e, "display"), re([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === ce.css(e, "float") && (u || (p.done(function() {
            h.display = l
          }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
          })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = _.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && re([e], !0), p.done(function() {
          for (r in g || re([e]), _.remove(e, "fxshow"), d) ce.style(e, r, d[r])
        })), u = vt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
    }],
    prefilter: function(e, t) {
      t ? yt.prefilters.unshift(e) : yt.prefilters.push(e)
    }
  }), ce.speed = function(e, t, n) {
    var r = e && "object" == typeof e ? ce.extend({}, e) : {
      complete: n || !n && t || v(e) && e,
      duration: e,
      easing: n && t || t && !v(t) && t
    };
    return ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in ce.fx.speeds ? r.duration = ce.fx.speeds[r.duration] : r.duration = ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
      v(r.old) && r.old.call(this), r.queue && ce.dequeue(this, r.queue)
    }, r
  }, ce.fn.extend({
    fadeTo: function(e, t, n, r) {
      return this.filter(ee).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r)
    },
    animate: function(t, e, n, r) {
      var i = ce.isEmptyObject(t),
        o = ce.speed(e, n, r),
        a = function() {
          var e = yt(this, ce.extend({}, t), o);
          (i || _.get(this, "finish")) && e.stop(!0)
        };
      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
    },
    stop: function(i, e, o) {
      var a = function(e) {
        var t = e.stop;
        delete e.stop, t(o)
      };
      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
        var e = !0,
          t = null != i && i + "queueHooks",
          n = ce.timers,
          r = _.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);
        else
          for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        !e && o || ce.dequeue(this, i)
      })
    },
    finish: function(a) {
      return !1 !== a && (a = a || "fx"), this.each(function() {
        var e, t = _.get(this),
          n = t[a + "queue"],
          r = t[a + "queueHooks"],
          i = ce.timers,
          o = n ? n.length : 0;
        for (t.finish = !0, ce.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
        delete t.finish
      })
    }
  }), ce.each(["toggle", "show", "hide"], function(e, r) {
    var i = ce.fn[r];
    ce.fn[r] = function(e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(gt(r, !0), e, t, n)
    }
  }), ce.each({
    slideDown: gt("show"),
    slideUp: gt("hide"),
    slideToggle: gt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function(e, r) {
    ce.fn[e] = function(e, t, n) {
      return this.animate(r, e, t, n)
    }
  }), ce.timers = [], ce.fx.tick = function() {
    var e, t = 0,
      n = ce.timers;
    for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
    n.length || ce.fx.stop(), st = void 0
  }, ce.fx.timer = function(e) {
    ce.timers.push(e), ce.fx.start()
  }, ce.fx.interval = 13, ce.fx.start = function() {
    ut || (ut = !0, dt())
  }, ce.fx.stop = function() {
    ut = null
  }, ce.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, ce.fn.delay = function(r, e) {
    return r = ce.fx && ce.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
      var n = ie.setTimeout(e, r);
      t.stop = function() {
        ie.clearTimeout(n)
      }
    })
  }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
  var mt, xt = ce.expr.attrHandle;
  ce.fn.extend({
    attr: function(e, t) {
      return M(this, ce.attr, e, t, 1 < arguments.length)
    },
    removeAttr: function(e) {
      return this.each(function() {
        ce.removeAttr(this, e)
      })
    }
  }), ce.extend({
    attr: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, n) : (1 === o && ce.isXMLDoc(e) || (i = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void ce.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ce.find.attr(e, t)) ? void 0 : r)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!le.radioValue && "radio" === t && fe(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
          }
        }
      }
    },
    removeAttr: function(e, t) {
      var n, r = 0,
        i = t && t.match(D);
      if (i && 1 === e.nodeType)
        while (n = i[r++]) e.removeAttribute(n)
    }
  }), mt = {
    set: function(e, t, n) {
      return !1 === t ? ce.removeAttr(e, n) : e.setAttribute(n, n), n
    }
  }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var a = xt[t] || ce.find.attr;
    xt[t] = function(e, t, n) {
      var r, i, o = t.toLowerCase();
      return n || (i = xt[o], xt[o] = r, r = null != a(e, t, n) ? o : null, xt[o] = i), r
    }
  });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;

  function Tt(e) {
    return (e.match(D) || []).join(" ")
  }

  function Ct(e) {
    return e.getAttribute && e.getAttribute("class") || ""
  }

  function kt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(D) || []
  }
  ce.fn.extend({
    prop: function(e, t) {
      return M(this, ce.prop, e, t, 1 < arguments.length)
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[ce.propFix[e] || e]
      })
    }
  }), ce.extend({
    prop: function(e, t, n) {
      var r, i, o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, i = ce.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          var t = ce.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
        }
      }
    },
    propFix: {
      for: "htmlFor",
      class: "className"
    }
  }), le.optSelected || (ce.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    },
    set: function(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
    }
  }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ce.propFix[this.toLowerCase()] = this
  }), ce.fn.extend({
    addClass: function(t) {
      var e, n, r, i, o, a;
      return v(t) ? this.each(function(e) {
        ce(this).addClass(t.call(this, e, Ct(this)))
      }) : (e = kt(t)).length ? this.each(function() {
        if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
          for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
          a = Tt(n), r !== a && this.setAttribute("class", a)
        }
      }) : this
    },
    removeClass: function(t) {
      var e, n, r, i, o, a;
      return v(t) ? this.each(function(e) {
        ce(this).removeClass(t.call(this, e, Ct(this)))
      }) : arguments.length ? (e = kt(t)).length ? this.each(function() {
        if (r = Ct(this), n = 1 === this.nodeType && " " + Tt(r) + " ") {
          for (o = 0; o < e.length; o++) {
            i = e[o];
            while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
          }
          a = Tt(n), r !== a && this.setAttribute("class", a)
        }
      }) : this : this.attr("class", "")
    },
    toggleClass: function(t, n) {
      var e, r, i, o, a = typeof t,
        s = "string" === a || Array.isArray(t);
      return v(t) ? this.each(function(e) {
        ce(this).toggleClass(t.call(this, e, Ct(this), n), n)
      }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = kt(t), this.each(function() {
        if (s)
          for (o = ce(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
        else void 0 !== t && "boolean" !== a || ((r = Ct(this)) && _.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : _.get(this, "__className__") || ""))
      }))
    },
    hasClass: function(e) {
      var t, n, r = 0;
      t = " " + e + " ";
      while (n = this[r++])
        if (1 === n.nodeType && -1 < (" " + Tt(Ct(n)) + " ").indexOf(t)) return !0;
      return !1
    }
  });
  var St = /\r/g;
  ce.fn.extend({
    val: function(n) {
      var r, e, i, t = this[0];
      return arguments.length ? (i = v(n), this.each(function(e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, ce(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ce.map(t, function(e) {
          return null == e ? "" : e + ""
        })), (r = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
      })) : t ? (r = ce.valHooks[t.type] || ce.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(St, "") : null == e ? "" : e : void 0
    }
  }), ce.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = ce.find.attr(e, "value");
          return null != t ? t : Tt(ce.text(e))
        }
      },
      select: {
        get: function(e) {
          var t, n, r, i = e.options,
            o = e.selectedIndex,
            a = "select-one" === e.type,
            s = a ? null : [],
            u = a ? o + 1 : i.length;
          for (r = o < 0 ? u : a ? o : 0; r < u; r++)
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !fe(n.parentNode, "optgroup"))) {
              if (t = ce(n).val(), a) return t;
              s.push(t)
            } return s
        },
        set: function(e, t) {
          var n, r, i = e.options,
            o = ce.makeArray(t),
            a = i.length;
          while (a--)((r = i[a]).selected = -1 < ce.inArray(ce.valHooks.option.get(r), o)) && (n = !0);
          return n || (e.selectedIndex = -1), o
        }
      }
    }
  }), ce.each(["radio", "checkbox"], function() {
    ce.valHooks[this] = {
      set: function(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < ce.inArray(ce(e).val(), t)
      }
    }, le.checkOn || (ce.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  });
  var Et = ie.location,
    jt = {
      guid: Date.now()
    },
    At = /\?/;
  ce.parseXML = function(e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = (new ie.DOMParser).parseFromString(e, "text/xml")
    } catch (e) {}
    return n = t && t.getElementsByTagName("parsererror")[0], t && !n || ce.error("Invalid XML: " + (n ? ce.map(n.childNodes, function(e) {
      return e.textContent
    }).join("\n") : e)), t
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Nt = function(e) {
      e.stopPropagation()
    };
  ce.extend(ce.event, {
    trigger: function(e, t, n, r) {
      var i, o, a, s, u, l, c, f, p = [n || C],
        d = ue.call(e, "type") ? e.type : e,
        h = ue.call(e, "namespace") ? e.namespace.split(".") : [];
      if (o = f = a = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(d + ce.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[ce.expando] ? e : new ce.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ce.makeArray(t, [e]), c = ce.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !y(n)) {
          for (s = c.delegateType || d, Dt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
          a === (n.ownerDocument || C) && p.push(a.defaultView || a.parentWindow || ie)
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (_.get(o, "events") || Object.create(null))[e.type] && _.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && $(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !$(n) || u && v(n[d]) && !y(n) && ((a = n[u]) && (n[u] = null), ce.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Nt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Nt), ce.event.triggered = void 0, a && (n[u] = a)), e.result
      }
    },
    simulate: function(e, t, n) {
      var r = ce.extend(new ce.Event, n, {
        type: e,
        isSimulated: !0
      });
      ce.event.trigger(r, null, t)
    }
  }), ce.fn.extend({
    trigger: function(e, t) {
      return this.each(function() {
        ce.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var n = this[0];
      if (n) return ce.event.trigger(e, t, n, !0)
    }
  });
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;

  function Pt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) ce.each(e, function(e, t) {
      r || qt.test(n) ? i(n, t) : Pt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
    });
    else if (r || "object" !== x(e)) i(n, e);
    else
      for (t in e) Pt(n + "[" + t + "]", e[t], r, i)
  }
  ce.param = function(e, t) {
    var n, r = [],
      i = function(e, t) {
        var n = v(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
      };
    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function() {
      i(this.name, this.value)
    });
    else
      for (n in e) Pt(n, e[n], t, i);
    return r.join("&")
  }, ce.fn.extend({
    serialize: function() {
      return ce.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = ce.prop(this, "elements");
        return e ? ce.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e) && (this.checked || !we.test(e))
      }).map(function(e, t) {
        var n = ce(this).val();
        return null == n ? null : Array.isArray(n) ? ce.map(n, function(e) {
          return {
            name: t.name,
            value: e.replace(Lt, "\r\n")
          }
        }) : {
          name: t.name,
          value: n.replace(Lt, "\r\n")
        }
      }).get()
    }
  });
  var Mt = /%20/g,
    Rt = /#.*$/,
    It = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ft = /^(?:GET|HEAD)$/,
    $t = /^\/\//,
    Bt = {},
    _t = {},
    zt = "*/".concat("*"),
    Xt = C.createElement("a");

  function Ut(o) {
    return function(e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n, r = 0,
        i = e.toLowerCase().match(D) || [];
      if (v(t))
        while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
    }
  }

  function Vt(t, i, o, a) {
    var s = {},
      u = t === _t;

    function l(e) {
      var r;
      return s[e] = !0, ce.each(t[e] || [], function(e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
      }), r
    }
    return l(i.dataTypes[0]) || !s["*"] && l("*")
  }

  function Gt(e, t) {
    var n, r, i = ce.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && ce.extend(!0, e, r), e
  }
  Xt.href = Et.href, ce.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": zt,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": ce.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? Gt(Gt(e, ce.ajaxSettings), t) : Gt(ce.ajaxSettings, e)
    },
    ajaxPrefilter: Ut(Bt),
    ajaxTransport: Ut(_t),
    ajax: function(e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c, f, p, n, d, r, h, g, i, o, v = ce.ajaxSetup({}, t),
        y = v.context || v,
        m = v.context && (y.nodeType || y.jquery) ? ce(y) : ce.event,
        x = ce.Deferred(),
        b = ce.Callbacks("once memory"),
        w = v.statusCode || {},
        a = {},
        s = {},
        u = "canceled",
        T = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (h) {
              if (!n) {
                n = {};
                while (t = Wt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
              }
              t = n[e.toLowerCase() + " "]
            }
            return null == t ? null : t.join(", ")
          },
          getAllResponseHeaders: function() {
            return h ? p : null
          },
          setRequestHeader: function(e, t) {
            return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
          },
          overrideMimeType: function(e) {
            return null == h && (v.mimeType = e), this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (h) T.always(e[T.status]);
              else
                for (t in e) w[t] = [w[t], e[t]];
            return this
          },
          abort: function(e) {
            var t = e || u;
            return c && c.abort(t), l(0, t), this
          }
        };
      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace($t, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(D) || [""], null == v.crossDomain) {
        r = C.createElement("a");
        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Xt.protocol + "//" + Xt.host != r.protocol + "//" + r.host
        } catch (e) {
          v.crossDomain = !0
        }
      }
      if (v.data && v.processData && "string" != typeof v.data && (v.data = ce.param(v.data, v.traditional)), Vt(Bt, v, t, T), h) return T;
      for (i in (g = ce.event && v.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ft.test(v.type), f = v.url.replace(Rt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Mt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (At.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(It, "$1"), o = (At.test(f) ? "&" : "?") + "_=" + jt.guid++ + o), v.url = f + o), v.ifModified && (ce.lastModified[f] && T.setRequestHeader("If-Modified-Since", ce.lastModified[f]), ce.etag[f] && T.setRequestHeader("If-None-Match", ce.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Vt(_t, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = ie.setTimeout(function() {
          T.abort("timeout")
        }, v.timeout));
        try {
          h = !1, c.send(a, l)
        } catch (e) {
          if (h) throw e;
          l(-1, e)
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i, o, a, s, u, l = t;
        h || (h = !0, d && ie.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
          var r, i, o, a, s = e.contents,
            u = e.dataTypes;
          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          if (r)
            for (i in s)
              if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break
              } if (u[0] in n) o = u[0];
          else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break
              }
              a || (a = i)
            }
            o = o || a
          }
          if (o) return o !== u[0] && u.unshift(o), n[o]
        }(v, T, n)), !i && -1 < ce.inArray("script", v.dataTypes) && ce.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
          var i, o, a, s, u, l = {},
            c = e.dataTypes.slice();
          if (c[1])
            for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();
          while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
              if ("*" === o) o = u;
              else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o]))
              for (i in l)
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break
                } if (!0 !== a)
              if (a && e["throws"]) t = a(t);
              else try {
                t = a(t)
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                }
              }
          }
          return {
            state: "success",
            data: t
          }
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (ce.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (ce.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --ce.active || ce.event.trigger("ajaxStop")))
      }
      return T
    },
    getJSON: function(e, t, n) {
      return ce.get(e, t, n, "json")
    },
    getScript: function(e, t) {
      return ce.get(e, void 0, t, "script")
    }
  }), ce.each(["get", "post"], function(e, i) {
    ce[i] = function(e, t, n, r) {
      return v(t) && (r = r || n, n = t, t = void 0), ce.ajax(ce.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, ce.isPlainObject(e) && e))
    }
  }), ce.ajaxPrefilter(function(e) {
    var t;
    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
  }), ce._evalUrl = function(e, t, n) {
    return ce.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function() {}
      },
      dataFilter: function(e) {
        ce.globalEval(e, t, n)
      }
    })
  }, ce.fn.extend({
    wrapAll: function(e) {
      var t;
      return this[0] && (v(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        var e = this;
        while (e.firstElementChild) e = e.firstElementChild;
        return e
      }).append(this)), this
    },
    wrapInner: function(n) {
      return v(n) ? this.each(function(e) {
        ce(this).wrapInner(n.call(this, e))
      }) : this.each(function() {
        var e = ce(this),
          t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n)
      })
    },
    wrap: function(t) {
      var n = v(t);
      return this.each(function(e) {
        ce(this).wrapAll(n ? t.call(this, e) : t)
      })
    },
    unwrap: function(e) {
      return this.parent(e).not("body").each(function() {
        ce(this).replaceWith(this.childNodes)
      }), this
    }
  }), ce.expr.pseudos.hidden = function(e) {
    return !ce.expr.pseudos.visible(e)
  }, ce.expr.pseudos.visible = function(e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
  }, ce.ajaxSettings.xhr = function() {
    try {
      return new ie.XMLHttpRequest
    } catch (e) {}
  };
  var Yt = {
      0: 200,
      1223: 204
    },
    Qt = ce.ajaxSettings.xhr();
  le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function(i) {
    var o, a;
    if (le.cors || Qt && !i.crossDomain) return {
      send: function(e, t) {
        var n, r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
          for (n in i.xhrFields) r[n] = i.xhrFields[n];
        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
        o = function(e) {
          return function() {
            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Yt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()))
          }
        }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
          4 === r.readyState && ie.setTimeout(function() {
            o && a()
          })
        }, o = o("abort");
        try {
          r.send(i.hasContent && i.data || null)
        } catch (e) {
          if (o) throw e
        }
      },
      abort: function() {
        o && o()
      }
    }
  }), ce.ajaxPrefilter(function(e) {
    e.crossDomain && (e.contents.script = !1)
  }), ce.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function(e) {
        return ce.globalEval(e), e
      }
    }
  }), ce.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), ce.ajaxTransport("script", function(n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function(e, t) {
        r = ce("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", i = function(e) {
          r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
        }), C.head.appendChild(r[0])
      },
      abort: function() {
        i && i()
      }
    }
  });
  var Jt, Kt = [],
    Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = Kt.pop() || ce.expando + "_" + jt.guid++;
      return this[e] = !0, e
    }
  }), ce.ajaxPrefilter("json jsonp", function(e, t, n) {
    var r, i, o, a = !1 !== e.jsonp && (Zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Zt, "$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
      return o || ce.error(r + " was not called"), o[0]
    }, e.dataTypes[0] = "json", i = ie[r], ie[r] = function() {
      o = arguments
    }, n.always(function() {
      void 0 === i ? ce(ie).removeProp(r) : ie[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Kt.push(r)), o && v(i) && i(o[0]), o = i = void 0
    }), "script"
  }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function(e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (le.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), o = !n && [], (i = w.exec(e)) ? [t.createElement(i[1])] : (i = Ae([e], t, o), o && o.length && ce(o).remove(), ce.merge([], i.childNodes)));
    var r, i, o
  }, ce.fn.load = function(e, t, n) {
    var r, i, o, a = this,
      s = e.indexOf(" ");
    return -1 < s && (r = Tt(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && ce.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function(e) {
      o = arguments, a.html(r ? ce("<div>").append(ce.parseHTML(e)).find(r) : e)
    }).always(n && function(e, t) {
      a.each(function() {
        n.apply(this, o || [e.responseText, t, e])
      })
    }), this
  }, ce.expr.pseudos.animated = function(t) {
    return ce.grep(ce.timers, function(e) {
      return t === e.elem
    }).length
  }, ce.offset = {
    setOffset: function(e, t, n) {
      var r, i, o, a, s, u, l = ce.css(e, "position"),
        c = ce(e),
        f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = ce.css(e, "top"), u = ce.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), v(t) && (t = t.call(e, n, ce.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
    }
  }, ce.fn.extend({
    offset: function(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function(e) {
        ce.offset.setOffset(this, t, e)
      });
      var e, n, r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0
    },
    position: function() {
      if (this[0]) {
        var e, t, n, r = this[0],
          i = {
            top: 0,
            left: 0
          };
        if ("fixed" === ce.css(r, "position")) t = r.getBoundingClientRect();
        else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
          while (e && (e === n.body || e === n.documentElement) && "static" === ce.css(e, "position")) e = e.parentNode;
          e && e !== r && 1 === e.nodeType && ((i = ce(e).offset()).top += ce.css(e, "borderTopWidth", !0), i.left += ce.css(e, "borderLeftWidth", !0))
        }
        return {
          top: t.top - i.top - ce.css(r, "marginTop", !0),
          left: t.left - i.left - ce.css(r, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        var e = this.offsetParent;
        while (e && "static" === ce.css(e, "position")) e = e.offsetParent;
        return e || J
      })
    }
  }), ce.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(t, i) {
    var o = "pageYOffset" === i;
    ce.fn[t] = function(e) {
      return M(this, function(e, t, n) {
        var r;
        if (y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
      }, t, e, arguments.length)
    }
  }), ce.each(["top", "left"], function(e, n) {
    ce.cssHooks[n] = Ye(le.pixelPosition, function(e, t) {
      if (t) return t = Ge(e, n), _e.test(t) ? ce(e).position()[n] + "px" : t
    })
  }), ce.each({
    Height: "height",
    Width: "width"
  }, function(a, s) {
    ce.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function(r, o) {
      ce.fn[o] = function(e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
          i = r || (!0 === e || !0 === t ? "margin" : "border");
        return M(this, function(e, t, n) {
          var r;
          return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? ce.css(e, t, i) : ce.style(e, t, n, i)
        }, s, n ? e : void 0, n)
      }
    })
  }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    ce.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), ce.fn.extend({
    bind: function(e, t, n) {
      return this.on(e, null, t, n)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, n, r) {
      return this.on(t, e, n, r)
    },
    undelegate: function(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    },
    hover: function(e, t) {
      return this.on("mouseenter", e).on("mouseleave", t || e)
    }
  }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
    ce.fn[n] = function(e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
    }
  });
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  ce.proxy = function(e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return r = ae.call(arguments, 2), (i = function() {
      return e.apply(t || this, r.concat(ae.call(arguments)))
    }).guid = e.guid = e.guid || ce.guid++, i
  }, ce.holdReady = function(e) {
    e ? ce.readyWait++ : ce.ready(!0)
  }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e) {
    var t = ce.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
  }, ce.trim = function(e) {
    return null == e ? "" : (e + "").replace(en, "$1")
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
    return ce
  });
  var tn = ie.jQuery,
    nn = ie.$;
  return ce.noConflict = function(e) {
    return ie.$ === ce && (ie.$ = nn), e && ie.jQuery === ce && (ie.jQuery = tn), ce
  }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce
});
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
! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).axios = t()
}(this, function() {
  "use strict";

  function e(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })), r.push.apply(r, n)
    }
    return r
  }

  function t(t) {
    for (var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? e(Object(n), !0).forEach(function(e) {
        u(t, e, n[e])
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : e(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      })
    }
    return t
  }

  function r() {
    r = function() {
      return e
    };
    var e = {},
      t = Object.prototype,
      n = t.hasOwnProperty,
      o = "function" == typeof Symbol ? Symbol : {},
      i = o.iterator || "@@iterator",
      a = o.asyncIterator || "@@asyncIterator",
      s = o.toStringTag || "@@toStringTag";

    function u(e, t, r) {
      return Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), e[t]
    }
    try {
      u({}, "")
    } catch (e) {
      u = function(e, t, r) {
        return e[t] = r
      }
    }

    function c(e, t, r, n) {
      var o = t && t.prototype instanceof h ? t : h,
        i = Object.create(o.prototype),
        a = new R(n || []);
      return i._invoke = function(e, t, r) {
        var n = "suspendedStart";
        return function(o, i) {
          if ("executing" === n) throw new Error("Generator is already running");
          if ("completed" === n) {
            if ("throw" === o) throw i;
            return j()
          }
          for (r.method = o, r.arg = i;;) {
            var a = r.delegate;
            if (a) {
              var s = E(a, r);
              if (s) {
                if (s === l) continue;
                return s
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
              if ("suspendedStart" === n) throw n = "completed", r.arg;
              r.dispatchException(r.arg)
            } else "return" === r.method && r.abrupt("return", r.arg);
            n = "executing";
            var u = f(e, t, r);
            if ("normal" === u.type) {
              if (n = r.done ? "completed" : "suspendedYield", u.arg === l) continue;
              return {
                value: u.arg,
                done: r.done
              }
            }
            "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
          }
        }
      }(e, r, a), i
    }

    function f(e, t, r) {
      try {
        return {
          type: "normal",
          arg: e.call(t, r)
        }
      } catch (e) {
        return {
          type: "throw",
          arg: e
        }
      }
    }
    e.wrap = c;
    var l = {};

    function h() {}

    function d() {}

    function p() {}
    var v = {};
    u(v, i, function() {
      return this
    });
    var y = Object.getPrototypeOf,
      m = y && y(y(A([])));
    m && m !== t && n.call(m, i) && (v = m);
    var g = p.prototype = h.prototype = Object.create(v);

    function b(e) {
      ["next", "throw", "return"].forEach(function(t) {
        u(e, t, function(e) {
          return this._invoke(t, e)
        })
      })
    }

    function w(e, t) {
      function r(o, i, a, s) {
        var u = f(e[o], e, i);
        if ("throw" !== u.type) {
          var c = u.arg,
            l = c.value;
          return l && "object" == typeof l && n.call(l, "__await") ? t.resolve(l.__await).then(function(e) {
            r("next", e, a, s)
          }, function(e) {
            r("throw", e, a, s)
          }) : t.resolve(l).then(function(e) {
            c.value = e, a(c)
          }, function(e) {
            return r("throw", e, a, s)
          })
        }
        s(u.arg)
      }
      var o;
      this._invoke = function(e, n) {
        function i() {
          return new t(function(t, o) {
            r(e, n, t, o)
          })
        }
        return o = o ? o.then(i, i) : i()
      }
    }

    function E(e, t) {
      var r = e.iterator[t.method];
      if (void 0 === r) {
        if (t.delegate = null, "throw" === t.method) {
          if (e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method)) return l;
          t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
        }
        return l
      }
      var n = f(r, e.iterator, t.arg);
      if ("throw" === n.type) return t.method = "throw", t.arg = n.arg, t.delegate = null, l;
      var o = n.arg;
      return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, l) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, l)
    }

    function O(e) {
      var t = {
        tryLoc: e[0]
      };
      1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
    }

    function S(e) {
      var t = e.completion || {};
      t.type = "normal", delete t.arg, e.completion = t
    }

    function R(e) {
      this.tryEntries = [{
        tryLoc: "root"
      }], e.forEach(O, this), this.reset(!0)
    }

    function A(e) {
      if (e) {
        var t = e[i];
        if (t) return t.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var r = -1,
            o = function t() {
              for (; ++r < e.length;)
                if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
              return t.value = void 0, t.done = !0, t
            };
          return o.next = o
        }
      }
      return {
        next: j
      }
    }

    function j() {
      return {
        value: void 0,
        done: !0
      }
    }
    return d.prototype = p, u(g, "constructor", p), u(p, "constructor", d), d.displayName = u(p, s, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
      var t = "function" == typeof e && e.constructor;
      return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
    }, e.mark = function(e) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, u(e, s, "GeneratorFunction")), e.prototype = Object.create(g), e
    }, e.awrap = function(e) {
      return {
        __await: e
      }
    }, b(w.prototype), u(w.prototype, a, function() {
      return this
    }), e.AsyncIterator = w, e.async = function(t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new w(c(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function(e) {
        return e.done ? e.value : a.next()
      })
    }, b(g), u(g, s, "Generator"), u(g, i, function() {
      return this
    }), u(g, "toString", function() {
      return "[object Generator]"
    }), e.keys = function(e) {
      var t = [];
      for (var r in e) t.push(r);
      return t.reverse(),
        function r() {
          for (; t.length;) {
            var n = t.pop();
            if (n in e) return r.value = n, r.done = !1, r
          }
          return r.done = !0, r
        }
    }, e.values = A, R.prototype = {
      constructor: R,
      reset: function(e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !e)
          for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
      },
      stop: function() {
        this.done = !0;
        var e = this.tryEntries[0].completion;
        if ("throw" === e.type) throw e.arg;
        return this.rval
      },
      dispatchException: function(e) {
        if (this.done) throw e;
        var t = this;

        function r(r, n) {
          return a.type = "throw", a.arg = e, t.next = r, n && (t.method = "next", t.arg = void 0), !!n
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return r("end");
          if (i.tryLoc <= this.prev) {
            var s = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (s && u) {
              if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return r(i.finallyLoc)
            } else if (s) {
              if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
            } else {
              if (!u) throw new Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return r(i.finallyLoc)
            }
          }
        }
      },
      abrupt: function(e, t) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break
          }
        }
        i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
      },
      complete: function(e, t) {
        if ("throw" === e.type) throw e.arg;
        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), l
      },
      finish: function(e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var r = this.tryEntries[t];
          if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), S(r), l
        }
      },
      catch: function(e) {
        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
          var r = this.tryEntries[t];
          if (r.tryLoc === e) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              S(r)
            }
            return o
          }
        }
        throw new Error("illegal catch attempt")
      },
      delegateYield: function(e, t, r) {
        return this.delegate = {
          iterator: A(e),
          resultName: t,
          nextLoc: r
        }, "next" === this.method && (this.arg = void 0), l
      }
    }, e
  }

  function n(e) {
    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, n(e)
  }

  function o(e, t, r, n, o, i, a) {
    try {
      var s = e[i](a),
        u = s.value
    } catch (e) {
      return void r(e)
    }
    s.done ? t(u) : Promise.resolve(u).then(n, o)
  }

  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function a(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
    }
  }

  function s(e, t, r) {
    return t && a(e.prototype, t), r && a(e, r), Object.defineProperty(e, "prototype", {
      writable: !1
    }), e
  }

  function u(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e
  }

  function c(e, t) {
    return l(e) || function(e, t) {
      var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (null == r) return;
      var n, o, i = [],
        a = !0,
        s = !1;
      try {
        for (r = r.call(e); !(a = (n = r.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
      } catch (e) {
        s = !0, o = e
      } finally {
        try {
          a || null == r.return || r.return()
        } finally {
          if (s) throw o
        }
      }
      return i
    }(e, t) || d(e, t) || v()
  }

  function f(e) {
    return function(e) {
      if (Array.isArray(e)) return p(e)
    }(e) || h(e) || d(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
  }

  function l(e) {
    if (Array.isArray(e)) return e
  }

  function h(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
  }

  function d(e, t) {
    if (e) {
      if ("string" == typeof e) return p(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? p(e, t) : void 0
    }
  }

  function p(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
  }

  function v() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }

  function y(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  }
  var m, g = Object.prototype.toString,
    b = Object.getPrototypeOf,
    w = (m = Object.create(null), function(e) {
      var t = g.call(e);
      return m[t] || (m[t] = t.slice(8, -1).toLowerCase())
    }),
    E = function(e) {
      return e = e.toLowerCase(),
        function(t) {
          return w(t) === e
        }
    },
    O = function(e) {
      return function(t) {
        return n(t) === e
      }
    },
    S = Array.isArray,
    R = O("undefined");
  var A = E("ArrayBuffer");
  var j = O("string"),
    x = O("function"),
    T = O("number"),
    P = function(e) {
      return null !== e && "object" === n(e)
    },
    N = function(e) {
      if ("object" !== w(e)) return !1;
      var t = b(e);
      return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e)
    },
    k = E("Date"),
    _ = E("File"),
    L = E("Blob"),
    C = E("FileList"),
    F = E("URLSearchParams");

  function U(e, t) {
    var r, o, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      a = i.allOwnKeys,
      s = void 0 !== a && a;
    if (null != e)
      if ("object" !== n(e) && (e = [e]), S(e))
        for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
      else {
        var u, c = s ? Object.getOwnPropertyNames(e) : Object.keys(e),
          f = c.length;
        for (r = 0; r < f; r++) u = c[r], t.call(null, e[u], u, e)
      }
  }

  function D(e, t) {
    t = t.toLowerCase();
    for (var r, n = Object.keys(e), o = n.length; o-- > 0;)
      if (t === (r = n[o]).toLowerCase()) return r;
    return null
  }
  var B = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
    I = function(e) {
      return !R(e) && e !== B
    };
  var q, z = (q = "undefined" != typeof Uint8Array && b(Uint8Array), function(e) {
      return q && e instanceof q
    }),
    M = E("HTMLFormElement"),
    H = function(e) {
      var t = Object.prototype.hasOwnProperty;
      return function(e, r) {
        return t.call(e, r)
      }
    }(),
    J = E("RegExp"),
    G = function(e, t) {
      var r = Object.getOwnPropertyDescriptors(e),
        n = {};
      U(r, function(r, o) {
        var i;
        !1 !== (i = t(r, o, e)) && (n[o] = i || r)
      }), Object.defineProperties(e, n)
    },
    W = "abcdefghijklmnopqrstuvwxyz",
    K = "0123456789",
    V = {
      DIGIT: K,
      ALPHA: W,
      ALPHA_DIGIT: W + W.toUpperCase() + K
    };
  var X = E("AsyncFunction"),
    $ = {
      isArray: S,
      isArrayBuffer: A,
      isBuffer: function(e) {
        return null !== e && !R(e) && null !== e.constructor && !R(e.constructor) && x(e.constructor.isBuffer) && e.constructor.isBuffer(e)
      },
      isFormData: function(e) {
        var t;
        return e && ("function" == typeof FormData && e instanceof FormData || x(e.append) && ("formdata" === (t = w(e)) || "object" === t && x(e.toString) && "[object FormData]" === e.toString()))
      },
      isArrayBufferView: function(e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && A(e.buffer)
      },
      isString: j,
      isNumber: T,
      isBoolean: function(e) {
        return !0 === e || !1 === e
      },
      isObject: P,
      isPlainObject: N,
      isUndefined: R,
      isDate: k,
      isFile: _,
      isBlob: L,
      isRegExp: J,
      isFunction: x,
      isStream: function(e) {
        return P(e) && x(e.pipe)
      },
      isURLSearchParams: F,
      isTypedArray: z,
      isFileList: C,
      forEach: U,
      merge: function e() {
        for (var t = I(this) && this || {}, r = t.caseless, n = {}, o = function(t, o) {
            var i = r && D(n, o) || o;
            N(n[i]) && N(t) ? n[i] = e(n[i], t) : N(t) ? n[i] = e({}, t) : S(t) ? n[i] = t.slice() : n[i] = t
          }, i = 0, a = arguments.length; i < a; i++) arguments[i] && U(arguments[i], o);
        return n
      },
      extend: function(e, t, r) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          o = n.allOwnKeys;
        return U(t, function(t, n) {
          r && x(t) ? e[n] = y(t, r) : e[n] = t
        }, {
          allOwnKeys: o
        }), e
      },
      trim: function(e) {
        return e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
      },
      stripBOM: function(e) {
        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
      },
      inherits: function(e, t, r, n) {
        e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
          value: t.prototype
        }), r && Object.assign(e.prototype, r)
      },
      toFlatObject: function(e, t, r, n) {
        var o, i, a, s = {};
        if (t = t || {}, null == e) return t;
        do {
          for (i = (o = Object.getOwnPropertyNames(e)).length; i-- > 0;) a = o[i], n && !n(a, e, t) || s[a] || (t[a] = e[a], s[a] = !0);
          e = !1 !== r && b(e)
        } while (e && (!r || r(e, t)) && e !== Object.prototype);
        return t
      },
      kindOf: w,
      kindOfTest: E,
      endsWith: function(e, t, r) {
        e = String(e), (void 0 === r || r > e.length) && (r = e.length), r -= t.length;
        var n = e.indexOf(t, r);
        return -1 !== n && n === r
      },
      toArray: function(e) {
        if (!e) return null;
        if (S(e)) return e;
        var t = e.length;
        if (!T(t)) return null;
        for (var r = new Array(t); t-- > 0;) r[t] = e[t];
        return r
      },
      forEachEntry: function(e, t) {
        for (var r, n = (e && e[Symbol.iterator]).call(e);
          (r = n.next()) && !r.done;) {
          var o = r.value;
          t.call(e, o[0], o[1])
        }
      },
      matchAll: function(e, t) {
        for (var r, n = []; null !== (r = e.exec(t));) n.push(r);
        return n
      },
      isHTMLForm: M,
      hasOwnProperty: H,
      hasOwnProp: H,
      reduceDescriptors: G,
      freezeMethods: function(e) {
        G(e, function(t, r) {
          if (x(e) && -1 !== ["arguments", "caller", "callee"].indexOf(r)) return !1;
          var n = e[r];
          x(n) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = function() {
            throw Error("Can not rewrite read-only method '" + r + "'")
          }))
        })
      },
      toObjectSet: function(e, t) {
        var r = {},
          n = function(e) {
            e.forEach(function(e) {
              r[e] = !0
            })
          };
        return S(e) ? n(e) : n(String(e).split(t)), r
      },
      toCamelCase: function(e) {
        return e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e, t, r) {
          return t.toUpperCase() + r
        })
      },
      noop: function() {},
      toFiniteNumber: function(e, t) {
        return e = +e, Number.isFinite(e) ? e : t
      },
      findKey: D,
      global: B,
      isContextDefined: I,
      ALPHABET: V,
      generateString: function() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V.ALPHA_DIGIT, r = "", n = t.length; e--;) r += t[Math.random() * n | 0];
        return r
      },
      isSpecCompliantForm: function(e) {
        return !!(e && x(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
      },
      toJSONObject: function(e) {
        var t = new Array(10);
        return function e(r, n) {
          if (P(r)) {
            if (t.indexOf(r) >= 0) return;
            if (!("toJSON" in r)) {
              t[n] = r;
              var o = S(r) ? [] : {};
              return U(r, function(t, r) {
                var i = e(t, n + 1);
                !R(i) && (o[r] = i)
              }), t[n] = void 0, o
            }
          }
          return r
        }(e, 0)
      },
      isAsyncFn: X,
      isThenable: function(e) {
        return e && (P(e) || x(e)) && x(e.then) && x(e.catch)
      }
    };

  function Q(e, t, r, n, o) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), o && (this.response = o)
  }
  $.inherits(Q, Error, {
    toJSON: function() {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: $.toJSONObject(this.config),
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null
      }
    }
  });
  var Y = Q.prototype,
    Z = {};
  ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(function(e) {
    Z[e] = {
      value: e
    }
  }), Object.defineProperties(Q, Z), Object.defineProperty(Y, "isAxiosError", {
    value: !0
  }), Q.from = function(e, t, r, n, o, i) {
    var a = Object.create(Y);
    return $.toFlatObject(e, a, function(e) {
      return e !== Error.prototype
    }, function(e) {
      return "isAxiosError" !== e
    }), Q.call(a, e.message, t, r, n, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a
  };

  function ee(e) {
    return $.isPlainObject(e) || $.isArray(e)
  }

  function te(e) {
    return $.endsWith(e, "[]") ? e.slice(0, -2) : e
  }

  function re(e, t, r) {
    return e ? e.concat(t).map(function(e, t) {
      return e = te(e), !r && t ? "[" + e + "]" : e
    }).join(r ? "." : "") : t
  }
  var ne = $.toFlatObject($, {}, null, function(e) {
    return /^is[A-Z]/.test(e)
  });

  function oe(e, t, r) {
    if (!$.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData;
    var o = (r = $.toFlatObject(r, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
      }, !1, function(e, t) {
        return !$.isUndefined(t[e])
      })).metaTokens,
      i = r.visitor || f,
      a = r.dots,
      s = r.indexes,
      u = (r.Blob || "undefined" != typeof Blob && Blob) && $.isSpecCompliantForm(t);
    if (!$.isFunction(i)) throw new TypeError("visitor must be a function");

    function c(e) {
      if (null === e) return "";
      if ($.isDate(e)) return e.toISOString();
      if (!u && $.isBlob(e)) throw new Q("Blob is not supported. Use a Buffer instead.");
      return $.isArrayBuffer(e) || $.isTypedArray(e) ? u && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
    }

    function f(e, r, i) {
      var u = e;
      if (e && !i && "object" === n(e))
        if ($.endsWith(r, "{}")) r = o ? r : r.slice(0, -2), e = JSON.stringify(e);
        else if ($.isArray(e) && function(e) {
          return $.isArray(e) && !e.some(ee)
        }(e) || ($.isFileList(e) || $.endsWith(r, "[]")) && (u = $.toArray(e))) return r = te(r), u.forEach(function(e, n) {
        !$.isUndefined(e) && null !== e && t.append(!0 === s ? re([r], n, a) : null === s ? r : r + "[]", c(e))
      }), !1;
      return !!ee(e) || (t.append(re(i, r, a), c(e)), !1)
    }
    var l = [],
      h = Object.assign(ne, {
        defaultVisitor: f,
        convertValue: c,
        isVisitable: ee
      });
    if (!$.isObject(e)) throw new TypeError("data must be an object");
    return function e(r, n) {
      if (!$.isUndefined(r)) {
        if (-1 !== l.indexOf(r)) throw Error("Circular reference detected in " + n.join("."));
        l.push(r), $.forEach(r, function(r, o) {
          !0 === (!($.isUndefined(r) || null === r) && i.call(t, r, $.isString(o) ? o.trim() : o, n, h)) && e(r, n ? n.concat(o) : [o])
        }), l.pop()
      }
    }(e), t
  }

  function ie(e) {
    var t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(e) {
      return t[e]
    })
  }

  function ae(e, t) {
    this._pairs = [], e && oe(e, this, t)
  }
  var se = ae.prototype;

  function ue(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
  }

  function ce(e, t, r) {
    if (!t) return e;
    var n, o = r && r.encode || ue,
      i = r && r.serialize;
    if (n = i ? i(t, r) : $.isURLSearchParams(t) ? t.toString() : new ae(t, r).toString(o)) {
      var a = e.indexOf("#"); - 1 !== a && (e = e.slice(0, a)), e += (-1 === e.indexOf("?") ? "?" : "&") + n
    }
    return e
  }
  se.append = function(e, t) {
    this._pairs.push([e, t])
  }, se.toString = function(e) {
    var t = e ? function(t) {
      return e.call(this, t, ie)
    } : ie;
    return this._pairs.map(function(e) {
      return t(e[0]) + "=" + t(e[1])
    }, "").join("&")
  };
  var fe, le = function() {
      function e() {
        i(this, e), this.handlers = []
      }
      return s(e, [{
        key: "use",
        value: function(e, t, r) {
          return this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!r && r.synchronous,
            runWhen: r ? r.runWhen : null
          }), this.handlers.length - 1
        }
      }, {
        key: "eject",
        value: function(e) {
          this.handlers[e] && (this.handlers[e] = null)
        }
      }, {
        key: "clear",
        value: function() {
          this.handlers && (this.handlers = [])
        }
      }, {
        key: "forEach",
        value: function(e) {
          $.forEach(this.handlers, function(t) {
            null !== t && e(t)
          })
        }
      }]), e
    }(),
    he = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1
    },
    de = {
      isBrowser: !0,
      classes: {
        URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : ae,
        FormData: "undefined" != typeof FormData ? FormData : null,
        Blob: "undefined" != typeof Blob ? Blob : null
      },
      protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    pe = "undefined" != typeof window && "undefined" != typeof document,
    ve = (fe = "undefined" != typeof navigator && navigator.product, pe && ["ReactNative", "NativeScript", "NS"].indexOf(fe) < 0),
    ye = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
    me = t(t({}, Object.freeze({
      __proto__: null,
      hasBrowserEnv: pe,
      hasStandardBrowserWebWorkerEnv: ye,
      hasStandardBrowserEnv: ve
    })), de);

  function ge(e) {
    function t(e, r, n, o) {
      var i = e[o++];
      if ("__proto__" === i) return !0;
      var a = Number.isFinite(+i),
        s = o >= e.length;
      return i = !i && $.isArray(n) ? n.length : i, s ? ($.hasOwnProp(n, i) ? n[i] = [n[i], r] : n[i] = r, !a) : (n[i] && $.isObject(n[i]) || (n[i] = []), t(e, r, n[i], o) && $.isArray(n[i]) && (n[i] = function(e) {
        var t, r, n = {},
          o = Object.keys(e),
          i = o.length;
        for (t = 0; t < i; t++) n[r = o[t]] = e[r];
        return n
      }(n[i])), !a)
    }
    if ($.isFormData(e) && $.isFunction(e.entries)) {
      var r = {};
      return $.forEachEntry(e, function(e, n) {
        t(function(e) {
          return $.matchAll(/\w+|\[(\w*)]/g, e).map(function(e) {
            return "[]" === e[0] ? "" : e[1] || e[0]
          })
        }(e), n, r, 0)
      }), r
    }
    return null
  }
  var be = {
    transitional: he,
    adapter: ["xhr", "http"],
    transformRequest: [function(e, t) {
      var r, n = t.getContentType() || "",
        o = n.indexOf("application/json") > -1,
        i = $.isObject(e);
      if (i && $.isHTMLForm(e) && (e = new FormData(e)), $.isFormData(e)) return o ? JSON.stringify(ge(e)) : e;
      if ($.isArrayBuffer(e) || $.isBuffer(e) || $.isStream(e) || $.isFile(e) || $.isBlob(e)) return e;
      if ($.isArrayBufferView(e)) return e.buffer;
      if ($.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
      if (i) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
          return oe(e, new me.classes.URLSearchParams, Object.assign({
            visitor: function(e, t, r, n) {
              return me.isNode && $.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : n.defaultVisitor.apply(this, arguments)
            }
          }, t))
        }(e, this.formSerializer).toString();
        if ((r = $.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
          var a = this.env && this.env.FormData;
          return oe(r ? {
            "files[]": e
          } : e, a && new a, this.formSerializer)
        }
      }
      return i || o ? (t.setContentType("application/json", !1), function(e, t, r) {
        if ($.isString(e)) try {
          return (t || JSON.parse)(e), $.trim(e)
        } catch (e) {
          if ("SyntaxError" !== e.name) throw e
        }
        return (r || JSON.stringify)(e)
      }(e)) : e
    }],
    transformResponse: [function(e) {
      var t = this.transitional || be.transitional,
        r = t && t.forcedJSONParsing,
        n = "json" === this.responseType;
      if (e && $.isString(e) && (r && !this.responseType || n)) {
        var o = !(t && t.silentJSONParsing) && n;
        try {
          return JSON.parse(e)
        } catch (e) {
          if (o) {
            if ("SyntaxError" === e.name) throw Q.from(e, Q.ERR_BAD_RESPONSE, this, null, this.response);
            throw e
          }
        }
      }
      return e
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: me.classes.FormData,
      Blob: me.classes.Blob
    },
    validateStatus: function(e) {
      return e >= 200 && e < 300
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  $.forEach(["delete", "get", "head", "post", "put", "patch"], function(e) {
    be.headers[e] = {}
  });
  var we = be,
    Ee = $.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    Oe = Symbol("internals");

  function Se(e) {
    return e && String(e).trim().toLowerCase()
  }

  function Re(e) {
    return !1 === e || null == e ? e : $.isArray(e) ? e.map(Re) : String(e)
  }

  function Ae(e, t, r, n, o) {
    return $.isFunction(n) ? n.call(this, t, r) : (o && (t = r), $.isString(t) ? $.isString(n) ? -1 !== t.indexOf(n) : $.isRegExp(n) ? n.test(t) : void 0 : void 0)
  }
  var je = function(e, t) {
    function r(e) {
      i(this, r), e && this.set(e)
    }
    return s(r, [{
      key: "set",
      value: function(e, t, r) {
        var n = this;

        function o(e, t, r) {
          var o = Se(t);
          if (!o) throw new Error("header name must be a non-empty string");
          var i = $.findKey(n, o);
          (!i || void 0 === n[i] || !0 === r || void 0 === r && !1 !== n[i]) && (n[i || t] = Re(e))
        }
        var i, a, s, u, c, f = function(e, t) {
          return $.forEach(e, function(e, r) {
            return o(e, r, t)
          })
        };
        return $.isPlainObject(e) || e instanceof this.constructor ? f(e, t) : $.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()) ? f((c = {}, (i = e) && i.split("\n").forEach(function(e) {
          u = e.indexOf(":"), a = e.substring(0, u).trim().toLowerCase(), s = e.substring(u + 1).trim(), !a || c[a] && Ee[a] || ("set-cookie" === a ? c[a] ? c[a].push(s) : c[a] = [s] : c[a] = c[a] ? c[a] + ", " + s : s)
        }), c), t) : null != e && o(t, e, r), this
      }
    }, {
      key: "get",
      value: function(e, t) {
        if (e = Se(e)) {
          var r = $.findKey(this, e);
          if (r) {
            var n = this[r];
            if (!t) return n;
            if (!0 === t) return function(e) {
              for (var t, r = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; t = n.exec(e);) r[t[1]] = t[2];
              return r
            }(n);
            if ($.isFunction(t)) return t.call(this, n, r);
            if ($.isRegExp(t)) return t.exec(n);
            throw new TypeError("parser must be boolean|regexp|function")
          }
        }
      }
    }, {
      key: "has",
      value: function(e, t) {
        if (e = Se(e)) {
          var r = $.findKey(this, e);
          return !(!r || void 0 === this[r] || t && !Ae(0, this[r], r, t))
        }
        return !1
      }
    }, {
      key: "delete",
      value: function(e, t) {
        var r = this,
          n = !1;

        function o(e) {
          if (e = Se(e)) {
            var o = $.findKey(r, e);
            !o || t && !Ae(0, r[o], o, t) || (delete r[o], n = !0)
          }
        }
        return $.isArray(e) ? e.forEach(o) : o(e), n
      }
    }, {
      key: "clear",
      value: function(e) {
        for (var t = Object.keys(this), r = t.length, n = !1; r--;) {
          var o = t[r];
          e && !Ae(0, this[o], o, e, !0) || (delete this[o], n = !0)
        }
        return n
      }
    }, {
      key: "normalize",
      value: function(e) {
        var t = this,
          r = {};
        return $.forEach(this, function(n, o) {
          var i = $.findKey(r, o);
          if (i) return t[i] = Re(n), void delete t[o];
          var a = e ? function(e) {
            return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, function(e, t, r) {
              return t.toUpperCase() + r
            })
          }(o) : String(o).trim();
          a !== o && delete t[o], t[a] = Re(n), r[a] = !0
        }), this
      }
    }, {
      key: "concat",
      value: function() {
        for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
        return (e = this.constructor).concat.apply(e, [this].concat(r))
      }
    }, {
      key: "toJSON",
      value: function(e) {
        var t = Object.create(null);
        return $.forEach(this, function(r, n) {
          null != r && !1 !== r && (t[n] = e && $.isArray(r) ? r.join(", ") : r)
        }), t
      }
    }, {
      key: Symbol.iterator,
      value: function() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
      }
    }, {
      key: "toString",
      value: function() {
        return Object.entries(this.toJSON()).map(function(e) {
          var t = c(e, 2);
          return t[0] + ": " + t[1]
        }).join("\n")
      }
    }, {
      key: Symbol.toStringTag,
      get: function() {
        return "AxiosHeaders"
      }
    }], [{
      key: "from",
      value: function(e) {
        return e instanceof this ? e : new this(e)
      }
    }, {
      key: "concat",
      value: function(e) {
        for (var t = new this(e), r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
        return n.forEach(function(e) {
          return t.set(e)
        }), t
      }
    }, {
      key: "accessor",
      value: function(e) {
        var t = (this[Oe] = this[Oe] = {
            accessors: {}
          }).accessors,
          r = this.prototype;

        function n(e) {
          var n = Se(e);
          t[n] || (! function(e, t) {
            var r = $.toCamelCase(" " + t);
            ["get", "set", "has"].forEach(function(n) {
              Object.defineProperty(e, n + r, {
                value: function(e, r, o) {
                  return this[n].call(this, t, e, r, o)
                },
                configurable: !0
              })
            })
          }(r, e), t[n] = !0)
        }
        return $.isArray(e) ? e.forEach(n) : n(e), this
      }
    }]), r
  }();
  je.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), $.reduceDescriptors(je.prototype, function(e, t) {
    var r = e.value,
      n = t[0].toUpperCase() + t.slice(1);
    return {
      get: function() {
        return r
      },
      set: function(e) {
        this[n] = e
      }
    }
  }), $.freezeMethods(je);
  var xe = je;

  function Te(e, t) {
    var r = this || we,
      n = t || r,
      o = xe.from(n.headers),
      i = n.data;
    return $.forEach(e, function(e) {
      i = e.call(r, i, o.normalize(), t ? t.status : void 0)
    }), o.normalize(), i
  }

  function Pe(e) {
    return !(!e || !e.__CANCEL__)
  }

  function Ne(e, t, r) {
    Q.call(this, null == e ? "canceled" : e, Q.ERR_CANCELED, t, r), this.name = "CanceledError"
  }
  $.inherits(Ne, Q, {
    __CANCEL__: !0
  });
  var ke = me.hasStandardBrowserEnv ? {
    write: function(e, t, r, n, o, i) {
      var a = [e + "=" + encodeURIComponent(t)];
      $.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), $.isString(n) && a.push("path=" + n), $.isString(o) && a.push("domain=" + o), !0 === i && a.push("secure"), document.cookie = a.join("; ")
    },
    read: function(e) {
      var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null
    },
    remove: function(e) {
      this.write(e, "", Date.now() - 864e5)
    }
  } : {
    write: function() {},
    read: function() {
      return null
    },
    remove: function() {}
  };

  function _e(e, t) {
    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(e, t) {
      return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
    }(e, t) : t
  }
  var Le = me.hasStandardBrowserEnv ? function() {
    var e, t = /(msie|trident)/i.test(navigator.userAgent),
      r = document.createElement("a");

    function n(e) {
      var n = e;
      return t && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
      }
    }
    return e = n(window.location.href),
      function(t) {
        var r = $.isString(t) ? n(t) : t;
        return r.protocol === e.protocol && r.host === e.host
      }
  }() : function() {
    return !0
  };

  function Ce(e, t) {
    var r = 0,
      n = function(e, t) {
        e = e || 10;
        var r, n = new Array(e),
          o = new Array(e),
          i = 0,
          a = 0;
        return t = void 0 !== t ? t : 1e3,
          function(s) {
            var u = Date.now(),
              c = o[a];
            r || (r = u), n[i] = s, o[i] = u;
            for (var f = a, l = 0; f !== i;) l += n[f++], f %= e;
            if ((i = (i + 1) % e) === a && (a = (a + 1) % e), !(u - r < t)) {
              var h = c && u - c;
              return h ? Math.round(1e3 * l / h) : void 0
            }
          }
      }(50, 250);
    return function(o) {
      var i = o.loaded,
        a = o.lengthComputable ? o.total : void 0,
        s = i - r,
        u = n(s);
      r = i;
      var c = {
        loaded: i,
        total: a,
        progress: a ? i / a : void 0,
        bytes: s,
        rate: u || void 0,
        estimated: u && a && i <= a ? (a - i) / u : void 0,
        event: o
      };
      c[t ? "download" : "upload"] = !0, e(c)
    }
  }
  var Fe = {
    http: null,
    xhr: "undefined" != typeof XMLHttpRequest && function(e) {
      return new Promise(function(t, r) {
        var n, o, i, a = e.data,
          s = xe.from(e.headers).normalize(),
          u = e.responseType,
          c = e.withXSRFToken;

        function p() {
          e.cancelToken && e.cancelToken.unsubscribe(n), e.signal && e.signal.removeEventListener("abort", n)
        }
        if ($.isFormData(a))
          if (me.hasStandardBrowserEnv || me.hasStandardBrowserWebWorkerEnv) s.setContentType(!1);
          else if (!1 !== (o = s.getContentType())) {
          var y = o ? o.split(";").map(function(e) {
              return e.trim()
            }).filter(Boolean) : [],
            m = l(i = y) || h(i) || d(i) || v(),
            g = m[0],
            b = m.slice(1);
          s.setContentType([g || "multipart/form-data"].concat(f(b)).join("; "))
        }
        var w = new XMLHttpRequest;
        if (e.auth) {
          var E = e.auth.username || "",
            O = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
          s.set("Authorization", "Basic " + btoa(E + ":" + O))
        }
        var S = _e(e.baseURL, e.url);

        function R() {
          if (w) {
            var n = xe.from("getAllResponseHeaders" in w && w.getAllResponseHeaders());
            ! function(e, t, r) {
              var n = r.config.validateStatus;
              r.status && n && !n(r.status) ? t(new Q("Request failed with status code " + r.status, [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4], r.config, r.request, r)) : e(r)
            }(function(e) {
              t(e), p()
            }, function(e) {
              r(e), p()
            }, {
              data: u && "text" !== u && "json" !== u ? w.response : w.responseText,
              status: w.status,
              statusText: w.statusText,
              headers: n,
              config: e,
              request: w
            }), w = null
          }
        }
        if (w.open(e.method.toUpperCase(), ce(S, e.params, e.paramsSerializer), !0), w.timeout = e.timeout, "onloadend" in w ? w.onloadend = R : w.onreadystatechange = function() {
            w && 4 === w.readyState && (0 !== w.status || w.responseURL && 0 === w.responseURL.indexOf("file:")) && setTimeout(R)
          }, w.onabort = function() {
            w && (r(new Q("Request aborted", Q.ECONNABORTED, e, w)), w = null)
          }, w.onerror = function() {
            r(new Q("Network Error", Q.ERR_NETWORK, e, w)), w = null
          }, w.ontimeout = function() {
            var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded",
              n = e.transitional || he;
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), r(new Q(t, n.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED, e, w)), w = null
          }, me.hasStandardBrowserEnv && (c && $.isFunction(c) && (c = c(e)), c || !1 !== c && Le(S))) {
          var A = e.xsrfHeaderName && e.xsrfCookieName && ke.read(e.xsrfCookieName);
          A && s.set(e.xsrfHeaderName, A)
        }
        void 0 === a && s.setContentType(null), "setRequestHeader" in w && $.forEach(s.toJSON(), function(e, t) {
          w.setRequestHeader(t, e)
        }), $.isUndefined(e.withCredentials) || (w.withCredentials = !!e.withCredentials), u && "json" !== u && (w.responseType = e.responseType), "function" == typeof e.onDownloadProgress && w.addEventListener("progress", Ce(e.onDownloadProgress, !0)), "function" == typeof e.onUploadProgress && w.upload && w.upload.addEventListener("progress", Ce(e.onUploadProgress)), (e.cancelToken || e.signal) && (n = function(t) {
          w && (r(!t || t.type ? new Ne(null, e, w) : t), w.abort(), w = null)
        }, e.cancelToken && e.cancelToken.subscribe(n), e.signal && (e.signal.aborted ? n() : e.signal.addEventListener("abort", n)));
        var j, x = (j = /^([-+\w]{1,25})(:?\/\/|:)/.exec(S)) && j[1] || "";
        x && -1 === me.protocols.indexOf(x) ? r(new Q("Unsupported protocol " + x + ":", Q.ERR_BAD_REQUEST, e)) : w.send(a || null)
      })
    }
  };
  $.forEach(Fe, function(e, t) {
    if (e) {
      try {
        Object.defineProperty(e, "name", {
          value: t
        })
      } catch (e) {}
      Object.defineProperty(e, "adapterName", {
        value: t
      })
    }
  });
  var Ue = function(e) {
      return "- ".concat(e)
    },
    De = function(e) {
      return $.isFunction(e) || null === e || !1 === e
    },
    Be = function(e) {
      for (var t, r, n = (e = $.isArray(e) ? e : [e]).length, o = {}, i = 0; i < n; i++) {
        var a = void 0;
        if (r = t = e[i], !De(t) && void 0 === (r = Fe[(a = String(t)).toLowerCase()])) throw new Q("Unknown adapter '".concat(a, "'"));
        if (r) break;
        o[a || "#" + i] = r
      }
      if (!r) {
        var s = Object.entries(o).map(function(e) {
          var t = c(e, 2),
            r = t[0],
            n = t[1];
          return "adapter ".concat(r, " ") + (!1 === n ? "is not supported by the environment" : "is not available in the build")
        });
        throw new Q("There is no suitable adapter to dispatch the request " + (n ? s.length > 1 ? "since :\n" + s.map(Ue).join("\n") : " " + Ue(s[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT")
      }
      return r
    };

  function Ie(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Ne(null, e)
  }

  function qe(e) {
    return Ie(e), e.headers = xe.from(e.headers), e.data = Te.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), Be(e.adapter || we.adapter)(e).then(function(t) {
      return Ie(e), t.data = Te.call(e, e.transformResponse, t), t.headers = xe.from(t.headers), t
    }, function(t) {
      return Pe(t) || (Ie(e), t && t.response && (t.response.data = Te.call(e, e.transformResponse, t.response), t.response.headers = xe.from(t.response.headers))), Promise.reject(t)
    })
  }
  var ze = function(e) {
    return e instanceof xe ? e.toJSON() : e
  };

  function Me(e, t) {
    t = t || {};
    var r = {};

    function n(e, t, r) {
      return $.isPlainObject(e) && $.isPlainObject(t) ? $.merge.call({
        caseless: r
      }, e, t) : $.isPlainObject(t) ? $.merge({}, t) : $.isArray(t) ? t.slice() : t
    }

    function o(e, t, r) {
      return $.isUndefined(t) ? $.isUndefined(e) ? void 0 : n(void 0, e, r) : n(e, t, r)
    }

    function i(e, t) {
      if (!$.isUndefined(t)) return n(void 0, t)
    }

    function a(e, t) {
      return $.isUndefined(t) ? $.isUndefined(e) ? void 0 : n(void 0, e) : n(void 0, t)
    }

    function s(r, o, i) {
      return i in t ? n(r, o) : i in e ? n(void 0, r) : void 0
    }
    var u = {
      url: i,
      method: i,
      data: i,
      baseURL: a,
      transformRequest: a,
      transformResponse: a,
      paramsSerializer: a,
      timeout: a,
      timeoutMessage: a,
      withCredentials: a,
      withXSRFToken: a,
      adapter: a,
      responseType: a,
      xsrfCookieName: a,
      xsrfHeaderName: a,
      onUploadProgress: a,
      onDownloadProgress: a,
      decompress: a,
      maxContentLength: a,
      maxBodyLength: a,
      beforeRedirect: a,
      transport: a,
      httpAgent: a,
      httpsAgent: a,
      cancelToken: a,
      socketPath: a,
      responseEncoding: a,
      validateStatus: s,
      headers: function(e, t) {
        return o(ze(e), ze(t), !0)
      }
    };
    return $.forEach(Object.keys(Object.assign({}, e, t)), function(n) {
      var i = u[n] || o,
        a = i(e[n], t[n], n);
      $.isUndefined(a) && i !== s || (r[n] = a)
    }), r
  }
  var He = "1.6.7",
    Je = {};
  ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(e, t) {
    Je[e] = function(r) {
      return n(r) === e || "a" + (t < 1 ? "n " : " ") + e
    }
  });
  var Ge = {};
  Je.transitional = function(e, t, r) {
    function n(e, t) {
      return "[Axios v1.6.7] Transitional option '" + e + "'" + t + (r ? ". " + r : "")
    }
    return function(r, o, i) {
      if (!1 === e) throw new Q(n(o, " has been removed" + (t ? " in " + t : "")), Q.ERR_DEPRECATED);
      return t && !Ge[o] && (Ge[o] = !0, console.warn(n(o, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(r, o, i)
    }
  };
  var We = {
      assertOptions: function(e, t, r) {
        if ("object" !== n(e)) throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
        for (var o = Object.keys(e), i = o.length; i-- > 0;) {
          var a = o[i],
            s = t[a];
          if (s) {
            var u = e[a],
              c = void 0 === u || s(u, a, e);
            if (!0 !== c) throw new Q("option " + a + " must be " + c, Q.ERR_BAD_OPTION_VALUE)
          } else if (!0 !== r) throw new Q("Unknown option " + a, Q.ERR_BAD_OPTION)
        }
      },
      validators: Je
    },
    Ke = We.validators,
    Ve = function() {
      function e(t) {
        i(this, e), this.defaults = t, this.interceptors = {
          request: new le,
          response: new le
        }
      }
      var t, n;
      return s(e, [{
        key: "request",
        value: (t = r().mark(function e(t, n) {
          var o, i;
          return r().wrap(function(e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.prev = 0, e.next = 3, this._request(t, n);
              case 3:
                return e.abrupt("return", e.sent);
              case 6:
                throw e.prev = 6, e.t0 = e.catch(0), e.t0 instanceof Error && (Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error, i = o.stack ? o.stack.replace(/^.+\n/, "") : "", e.t0.stack ? i && !String(e.t0.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (e.t0.stack += "\n" + i) : e.t0.stack = i), e.t0;
              case 10:
              case "end":
                return e.stop()
            }
          }, e, this, [
            [0, 6]
          ])
        }), n = function() {
          var e = this,
            r = arguments;
          return new Promise(function(n, i) {
            var a = t.apply(e, r);

            function s(e) {
              o(a, n, i, s, u, "next", e)
            }

            function u(e) {
              o(a, n, i, s, u, "throw", e)
            }
            s(void 0)
          })
        }, function(e, t) {
          return n.apply(this, arguments)
        })
      }, {
        key: "_request",
        value: function(e, t) {
          "string" == typeof e ? (t = t || {}).url = e : t = e || {};
          var r = t = Me(this.defaults, t),
            n = r.transitional,
            o = r.paramsSerializer,
            i = r.headers;
          void 0 !== n && We.assertOptions(n, {
            silentJSONParsing: Ke.transitional(Ke.boolean),
            forcedJSONParsing: Ke.transitional(Ke.boolean),
            clarifyTimeoutError: Ke.transitional(Ke.boolean)
          }, !1), null != o && ($.isFunction(o) ? t.paramsSerializer = {
            serialize: o
          } : We.assertOptions(o, {
            encode: Ke.function,
            serialize: Ke.function
          }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
          var a = i && $.merge(i.common, i[t.method]);
          i && $.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(e) {
            delete i[e]
          }), t.headers = xe.concat(a, i);
          var s = [],
            u = !0;
          this.interceptors.request.forEach(function(e) {
            "function" == typeof e.runWhen && !1 === e.runWhen(t) || (u = u && e.synchronous, s.unshift(e.fulfilled, e.rejected))
          });
          var c, f = [];
          this.interceptors.response.forEach(function(e) {
            f.push(e.fulfilled, e.rejected)
          });
          var l, h = 0;
          if (!u) {
            var d = [qe.bind(this), void 0];
            for (d.unshift.apply(d, s), d.push.apply(d, f), l = d.length, c = Promise.resolve(t); h < l;) c = c.then(d[h++], d[h++]);
            return c
          }
          l = s.length;
          var p = t;
          for (h = 0; h < l;) {
            var v = s[h++],
              y = s[h++];
            try {
              p = v(p)
            } catch (e) {
              y.call(this, e);
              break
            }
          }
          try {
            c = qe.call(this, p)
          } catch (e) {
            return Promise.reject(e)
          }
          for (h = 0, l = f.length; h < l;) c = c.then(f[h++], f[h++]);
          return c
        }
      }, {
        key: "getUri",
        value: function(e) {
          return ce(_e((e = Me(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
        }
      }]), e
    }();
  $.forEach(["delete", "get", "head", "options"], function(e) {
    Ve.prototype[e] = function(t, r) {
      return this.request(Me(r || {}, {
        method: e,
        url: t,
        data: (r || {}).data
      }))
    }
  }), $.forEach(["post", "put", "patch"], function(e) {
    function t(t) {
      return function(r, n, o) {
        return this.request(Me(o || {}, {
          method: e,
          headers: t ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: r,
          data: n
        }))
      }
    }
    Ve.prototype[e] = t(), Ve.prototype[e + "Form"] = t(!0)
  });
  var Xe = Ve,
    $e = function() {
      function e(t) {
        if (i(this, e), "function" != typeof t) throw new TypeError("executor must be a function.");
        var r;
        this.promise = new Promise(function(e) {
          r = e
        });
        var n = this;
        this.promise.then(function(e) {
          if (n._listeners) {
            for (var t = n._listeners.length; t-- > 0;) n._listeners[t](e);
            n._listeners = null
          }
        }), this.promise.then = function(e) {
          var t, r = new Promise(function(e) {
            n.subscribe(e), t = e
          }).then(e);
          return r.cancel = function() {
            n.unsubscribe(t)
          }, r
        }, t(function(e, t, o) {
          n.reason || (n.reason = new Ne(e, t, o), r(n.reason))
        })
      }
      return s(e, [{
        key: "throwIfRequested",
        value: function() {
          if (this.reason) throw this.reason
        }
      }, {
        key: "subscribe",
        value: function(e) {
          this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
        }
      }, {
        key: "unsubscribe",
        value: function(e) {
          if (this._listeners) {
            var t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
          }
        }
      }], [{
        key: "source",
        value: function() {
          var t;
          return {
            token: new e(function(e) {
              t = e
            }),
            cancel: t
          }
        }
      }]), e
    }();
  var Qe = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
  };
  Object.entries(Qe).forEach(function(e) {
    var t = c(e, 2),
      r = t[0],
      n = t[1];
    Qe[n] = r
  });
  var Ye = Qe;
  var Ze = function e(t) {
    var r = new Xe(t),
      n = y(Xe.prototype.request, r);
    return $.extend(n, Xe.prototype, r, {
      allOwnKeys: !0
    }), $.extend(n, r, null, {
      allOwnKeys: !0
    }), n.create = function(r) {
      return e(Me(t, r))
    }, n
  }(we);
  return Ze.Axios = Xe, Ze.CanceledError = Ne, Ze.CancelToken = $e, Ze.isCancel = Pe, Ze.VERSION = He, Ze.toFormData = oe, Ze.AxiosError = Q, Ze.Cancel = Ze.CanceledError, Ze.all = function(e) {
    return Promise.all(e)
  }, Ze.spread = function(e) {
    return function(t) {
      return e.apply(null, t)
    }
  }, Ze.isAxiosError = function(e) {
    return $.isObject(e) && !0 === e.isAxiosError
  }, Ze.mergeConfig = Me, Ze.AxiosHeaders = xe, Ze.formToJSON = function(e) {
    return ge($.isHTMLForm(e) ? new FormData(e) : e)
  }, Ze.getAdapter = Be, Ze.HttpStatusCode = Ye, Ze.default = Ze, Ze
});
! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, function() {
  "use strict";
  const t = new Map,
    e = {
      set(e, i, n) {
        t.has(e) || t.set(e, new Map);
        const s = t.get(e);
        s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
      },
      get: (e, i) => t.has(e) && t.get(e).get(i) || null,
      remove(e, i) {
        if (!t.has(e)) return;
        const n = t.get(e);
        n.delete(i), 0 === n.size && t.delete(e)
      }
    },
    i = "transitionend",
    n = t => (t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)), t),
    s = t => {
      t.dispatchEvent(new Event(i))
    },
    o = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    r = t => o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(n(t)) : null,
    a = t => {
      if (!o(t) || 0 === t.getClientRects().length) return !1;
      const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
      if (!i) return e;
      if (i !== t) {
        const e = t.closest("summary");
        if (e && e.parentNode !== i) return !1;
        if (null === e) return !1
      }
      return e
    },
    l = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    c = t => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null
      }
      return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null
    },
    h = () => {},
    d = t => {
      t.offsetHeight
    },
    u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
    f = [],
    p = () => "rtl" === document.documentElement.dir,
    m = t => {
      var e;
      e = () => {
        const e = u();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = n, t.jQueryInterface)
        }
      }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", () => {
        for (const t of f) t()
      }), f.push(e)) : e()
    },
    g = (t, e = [], i = t) => "function" == typeof t ? t(...e) : i,
    _ = (t, e, n = !0) => {
      if (!n) return void g(t);
      const o = (t => {
        if (!t) return 0;
        let {
          transitionDuration: e,
          transitionDelay: i
        } = window.getComputedStyle(t);
        const n = Number.parseFloat(e),
          s = Number.parseFloat(i);
        return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
      })(e) + 5;
      let r = !1;
      const a = ({
        target: n
      }) => {
        n === e && (r = !0, e.removeEventListener(i, a), g(t))
      };
      e.addEventListener(i, a), setTimeout(() => {
        r || s(e)
      }, o)
    },
    b = (t, e, i, n) => {
      const s = t.length;
      let o = t.indexOf(e);
      return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))])
    },
    v = /[^.]*(?=\..*)\.|.*/,
    y = /\..*/,
    w = /::\d+$/,
    A = {};
  let E = 1;
  const T = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    },
    C = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function O(t, e) {
    return e && `${e}::${E++}` || t.uidEvent || E++
  }

  function x(t) {
    const e = O(t);
    return t.uidEvent = e, A[e] = A[e] || {}, A[e]
  }

  function k(t, e, i = null) {
    return Object.values(t).find(t => t.callable === e && t.delegationSelector === i)
  }

  function L(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e || i;
    let o = I(t);
    return C.has(o) || (o = t), [n, s, o]
  }

  function S(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    let [o, r, a] = L(e, i, n);
    if (e in T) {
      const t = t => function(e) {
        if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
      };
      r = t(r)
    }
    const l = x(t),
      c = l[a] || (l[a] = {}),
      h = k(c, r, o ? i : null);
    if (h) return void(h.oneOff = h.oneOff && s);
    const d = O(r, e.replace(v, "")),
      u = o ? function(t, e, i) {
        return function n(s) {
          const o = t.querySelectorAll(e);
          for (let {
              target: r
            } = s; r && r !== this; r = r.parentNode)
            for (const a of o)
              if (a === r) return P(s, {
                delegateTarget: r
              }), n.oneOff && N.off(t, s.type, e, i), i.apply(r, [s])
        }
      }(t, i, r) : function(t, e) {
        return function i(n) {
          return P(n, {
            delegateTarget: t
          }), i.oneOff && N.off(t, n.type, e), e.apply(t, [n])
        }
      }(t, r);
    u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
  }

  function D(t, e, i, n, s) {
    const o = k(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent])
  }

  function $(t, e, i, n) {
    const s = e[i] || {};
    for (const [o, r] of Object.entries(s)) o.includes(n) && D(t, e, i, r.callable, r.delegationSelector)
  }

  function I(t) {
    return t = t.replace(y, ""), T[t] || t
  }
  const N = {
    on(t, e, i, n) {
      S(t, e, i, n, !1)
    },
    one(t, e, i, n) {
      S(t, e, i, n, !0)
    },
    off(t, e, i, n) {
      if ("string" != typeof e || !t) return;
      const [s, o, r] = L(e, i, n), a = r !== e, l = x(t), c = l[r] || {}, h = e.startsWith(".");
      if (void 0 === o) {
        if (h)
          for (const i of Object.keys(l)) $(t, l, i, e.slice(1));
        for (const [i, n] of Object.entries(c)) {
          const s = i.replace(w, "");
          a && !e.includes(s) || D(t, l, r, n.callable, n.delegationSelector)
        }
      } else {
        if (!Object.keys(c).length) return;
        D(t, l, r, o, s ? i : null)
      }
    },
    trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      const n = u();
      let s = null,
        o = !0,
        r = !0,
        a = !1;
      e !== I(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
      const l = P(new Event(e, {
        bubbles: o,
        cancelable: !0
      }), i);
      return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l
    }
  };

  function P(t, e = {}) {
    for (const [i, n] of Object.entries(e)) try {
      t[i] = n
    } catch (e) {
      Object.defineProperty(t, i, {
        configurable: !0,
        get: () => n
      })
    }
    return t
  }

  function j(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t))
    } catch (e) {
      return t
    }
  }

  function M(t) {
    return t.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`)
  }
  const F = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${M(e)}`, i)
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${M(e)}`)
    },
    getDataAttributes(t) {
      if (!t) return {};
      const e = {},
        i = Object.keys(t.dataset).filter(t => t.startsWith("bs") && !t.startsWith("bsConfig"));
      for (const n of i) {
        let i = n.replace(/^bs/, "");
        i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = j(t.dataset[n])
      }
      return e
    },
    getDataAttribute: (t, e) => j(t.getAttribute(`data-bs-${M(e)}`))
  };
  class H {
    static get Default() {
      return {}
    }
    static get DefaultType() {
      return {}
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!')
    }
    _getConfig(t) {
      return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
    }
    _configAfterMerge(t) {
      return t
    }
    _mergeConfigObj(t, e) {
      const i = o(e) ? F.getDataAttribute(e, "config") : {};
      return {
        ...this.constructor.Default,
        ..."object" == typeof i ? i : {},
        ...o(e) ? F.getDataAttributes(e) : {},
        ..."object" == typeof t ? t : {}
      }
    }
    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const [n, s] of Object.entries(e)) {
        const e = t[n],
          r = o(e) ? "element" : null == (i = e) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
        if (!new RegExp(s).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)
      }
      var i
    }
  }
  class W extends H {
    constructor(t, i) {
      super(), (t = r(t)) && (this._element = t, this._config = this._getConfig(i), e.set(this._element, this.constructor.DATA_KEY, this))
    }
    dispose() {
      e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
      for (const t of Object.getOwnPropertyNames(this)) this[t] = null
    }
    _queueCallback(t, e, i = !0) {
      _(t, e, i)
    }
    _getConfig(t) {
      return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
    }
    static getInstance(t) {
      return e.get(r(t), this.DATA_KEY)
    }
    static getOrCreateInstance(t, e = {}) {
      return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
    }
    static get VERSION() {
      return "5.3.3"
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`
    }
  }
  const B = t => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || !i.includes("#") && !i.startsWith(".")) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
      }
      return e ? e.split(",").map(t => n(t)).join(",") : null
    },
    z = {
      find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode.closest(e);
        for (; n;) i.push(n), n = n.parentNode.closest(e);
        return i
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i;) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling
        }
        return []
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i;) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling
        }
        return []
      },
      focusableChildren(t) {
        const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(t => `${t}:not([tabindex^="-"])`).join(",");
        return this.find(e, t).filter(t => !l(t) && a(t))
      },
      getSelectorFromElement(t) {
        const e = B(t);
        return e && z.findOne(e) ? e : null
      },
      getElementFromSelector(t) {
        const e = B(t);
        return e ? z.findOne(e) : null
      },
      getMultipleElementsFromSelector(t) {
        const e = B(t);
        return e ? z.find(e) : []
      }
    },
    R = (t, e = "hide") => {
      const i = `click.dismiss${t.EVENT_KEY}`,
        n = t.NAME;
      N.on(document, i, `[data-bs-dismiss="${n}"]`, function(i) {
        if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
        const s = z.getElementFromSelector(this) || this.closest(`.${n}`);
        t.getOrCreateInstance(s)[e]()
      })
    },
    q = ".bs.alert",
    V = `close${q}`,
    K = `closed${q}`;
  class Q extends W {
    static get NAME() {
      return "alert"
    }
    close() {
      if (N.trigger(this._element, V).defaultPrevented) return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t)
    }
    _destroyElement() {
      this._element.remove(), N.trigger(this._element, K), this.dispose()
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = Q.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
          e[t](this)
        }
      })
    }
  }
  R(Q, "close"), m(Q);
  const X = '[data-bs-toggle="button"]';
  class Y extends W {
    static get NAME() {
      return "button"
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = Y.getOrCreateInstance(this);
        "toggle" === t && e[t]()
      })
    }
  }
  N.on(document, "click.bs.button.data-api", X, t => {
    t.preventDefault();
    const e = t.target.closest(X);
    Y.getOrCreateInstance(e).toggle()
  }), m(Y);
  const U = ".bs.swipe",
    G = `touchstart${U}`,
    J = `touchmove${U}`,
    Z = `touchend${U}`,
    tt = `pointerdown${U}`,
    et = `pointerup${U}`,
    it = {
      endCallback: null,
      leftCallback: null,
      rightCallback: null
    },
    nt = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)"
    };
  class st extends H {
    constructor(t, e) {
      super(), this._element = t, t && st.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
    }
    static get Default() {
      return it
    }
    static get DefaultType() {
      return nt
    }
    static get NAME() {
      return "swipe"
    }
    dispose() {
      N.off(this._element, U)
    }
    _start(t) {
      this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback)
    }
    _move(t) {
      this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
    }
    _handleSwipe() {
      const t = Math.abs(this._deltaX);
      if (t <= 40) return;
      const e = t / this._deltaX;
      this._deltaX = 0, e && g(e > 0 ? this._config.rightCallback : this._config.leftCallback)
    }
    _initEvents() {
      this._supportPointerEvents ? (N.on(this._element, tt, t => this._start(t)), N.on(this._element, et, t => this._end(t)), this._element.classList.add("pointer-event")) : (N.on(this._element, G, t => this._start(t)), N.on(this._element, J, t => this._move(t)), N.on(this._element, Z, t => this._end(t)))
    }
    _eventIsPointerPenTouch(t) {
      return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
    }
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
    }
  }
  const ot = ".bs.carousel",
    rt = ".data-api",
    at = "next",
    lt = "prev",
    ct = "left",
    ht = "right",
    dt = `slide${ot}`,
    ut = `slid${ot}`,
    ft = `keydown${ot}`,
    pt = `mouseenter${ot}`,
    mt = `mouseleave${ot}`,
    gt = `dragstart${ot}`,
    _t = `load${ot}${rt}`,
    bt = `click${ot}${rt}`,
    vt = "carousel",
    yt = "active",
    wt = ".active",
    At = ".carousel-item",
    Et = wt + At,
    Tt = {
      ArrowLeft: ht,
      ArrowRight: ct
    },
    Ct = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0
    },
    Ot = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean"
    };
  class xt extends W {
    constructor(t, e) {
      super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === vt && this.cycle()
    }
    static get Default() {
      return Ct
    }
    static get DefaultType() {
      return Ot
    }
    static get NAME() {
      return "carousel"
    }
    next() {
      this._slide(at)
    }
    nextWhenVisible() {
      !document.hidden && a(this._element) && this.next()
    }
    prev() {
      this._slide(lt)
    }
    pause() {
      this._isSliding && s(this._element), this._clearInterval()
    }
    cycle() {
      this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)
    }
    _maybeEnableCycle() {
      this._config.ride && (this._isSliding ? N.one(this._element, ut, () => this.cycle()) : this.cycle())
    }
    to(t) {
      const e = this._getItems();
      if (t > e.length - 1 || t < 0) return;
      if (this._isSliding) return void N.one(this._element, ut, () => this.to(t));
      const i = this._getItemIndex(this._getActive());
      if (i === t) return;
      const n = t > i ? at : lt;
      this._slide(n, e[t])
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
    }
    _configAfterMerge(t) {
      return t.defaultInterval = t.interval, t
    }
    _addEventListeners() {
      this._config.keyboard && N.on(this._element, ft, t => this._keydown(t)), "hover" === this._config.pause && (N.on(this._element, pt, () => this.pause()), N.on(this._element, mt, () => this._maybeEnableCycle())), this._config.touch && st.isSupported() && this._addTouchEventListeners()
    }
    _addTouchEventListeners() {
      for (const t of z.find(".carousel-item img", this._element)) N.on(t, gt, t => t.preventDefault());
      const t = {
        leftCallback: () => this._slide(this._directionToOrder(ct)),
        rightCallback: () => this._slide(this._directionToOrder(ht)),
        endCallback: () => {
          "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval))
        }
      };
      this._swipeHelper = new st(this._element, t)
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = Tt[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t)
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement) return;
      const e = z.findOne(wt, this._indicatorsElement);
      e.classList.remove(yt), e.removeAttribute("aria-current");
      const i = z.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
      i && (i.classList.add(yt), i.setAttribute("aria-current", "true"))
    }
    _updateInterval() {
      const t = this._activeElement || this._getActive();
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      this._config.interval = e || this._config.defaultInterval
    }
    _slide(t, e = null) {
      if (this._isSliding) return;
      const i = this._getActive(),
        n = t === at,
        s = e || b(this._getItems(), i, n, this._config.wrap);
      if (s === i) return;
      const o = this._getItemIndex(s),
        r = e => N.trigger(this._element, e, {
          relatedTarget: s,
          direction: this._orderToDirection(t),
          from: this._getItemIndex(i),
          to: o
        });
      if (r(dt).defaultPrevented) return;
      if (!i || !s) return;
      const a = Boolean(this._interval);
      this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
      const l = n ? "carousel-item-start" : "carousel-item-end",
        c = n ? "carousel-item-next" : "carousel-item-prev";
      s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback(() => {
        s.classList.remove(l, c), s.classList.add(yt), i.classList.remove(yt, c, l), this._isSliding = !1, r(ut)
      }, i, this._isAnimated()), a && this.cycle()
    }
    _isAnimated() {
      return this._element.classList.contains("slide")
    }
    _getActive() {
      return z.findOne(Et, this._element)
    }
    _getItems() {
      return z.find(At, this._element)
    }
    _clearInterval() {
      this._interval && (clearInterval(this._interval), this._interval = null)
    }
    _directionToOrder(t) {
      return p() ? t === ct ? lt : at : t === ct ? at : lt
    }
    _orderToDirection(t) {
      return p() ? t === lt ? ct : ht : t === lt ? ht : ct
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = xt.getOrCreateInstance(this, t);
        if ("number" != typeof t) {
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
            e[t]()
          }
        } else e.to(t)
      })
    }
  }
  N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", function(t) {
    const e = z.getElementFromSelector(this);
    if (!e || !e.classList.contains(vt)) return;
    t.preventDefault();
    const i = xt.getOrCreateInstance(e),
      n = this.getAttribute("data-bs-slide-to");
    return n ? (i.to(n), void i._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle())
  }), N.on(window, _t, () => {
    const t = z.find('[data-bs-ride="carousel"]');
    for (const e of t) xt.getOrCreateInstance(e)
  }), m(xt);
  const kt = ".bs.collapse",
    Lt = `show${kt}`,
    St = `shown${kt}`,
    Dt = `hide${kt}`,
    $t = `hidden${kt}`,
    It = `click${kt}.data-api`,
    Nt = "show",
    Pt = "collapse",
    jt = "collapsing",
    Mt = `:scope .${Pt} .${Pt}`,
    Ft = '[data-bs-toggle="collapse"]',
    Ht = {
      parent: null,
      toggle: !0
    },
    Wt = {
      parent: "(null|element)",
      toggle: "boolean"
    };
  class Bt extends W {
    constructor(t, e) {
      super(t, e), this._isTransitioning = !1, this._triggerArray = [];
      const i = z.find(Ft);
      for (const t of i) {
        const e = z.getSelectorFromElement(t),
          i = z.find(e).filter(t => t === this._element);
        null !== e && i.length && this._triggerArray.push(t)
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
    }
    static get Default() {
      return Ht
    }
    static get DefaultType() {
      return Wt
    }
    static get NAME() {
      return "collapse"
    }
    toggle() {
      this._isShown() ? this.hide() : this.show()
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t = [];
      if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(t => t !== this._element).map(t => Bt.getOrCreateInstance(t, {
          toggle: !1
        }))), t.length && t[0]._isTransitioning) return;
      if (N.trigger(this._element, Lt).defaultPrevented) return;
      for (const e of t) e.hide();
      const e = this._getDimension();
      this._element.classList.remove(Pt), this._element.classList.add(jt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
      const i = `scroll${e[0].toUpperCase()+e.slice(1)}`;
      this._queueCallback(() => {
        this._isTransitioning = !1, this._element.classList.remove(jt), this._element.classList.add(Pt, Nt), this._element.style[e] = "", N.trigger(this._element, St)
      }, this._element, !0), this._element.style[e] = `${this._element[i]}px`
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (N.trigger(this._element, Dt).defaultPrevented) return;
      const t = this._getDimension();
      this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, d(this._element), this._element.classList.add(jt), this._element.classList.remove(Pt, Nt);
      for (const t of this._triggerArray) {
        const e = z.getElementFromSelector(t);
        e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
      }
      this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(() => {
        this._isTransitioning = !1, this._element.classList.remove(jt), this._element.classList.add(Pt), N.trigger(this._element, $t)
      }, this._element, !0)
    }
    _isShown(t = this._element) {
      return t.classList.contains(Nt)
    }
    _configAfterMerge(t) {
      return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = this._getFirstLevelChildren(Ft);
      for (const e of t) {
        const t = z.getElementFromSelector(e);
        t && this._addAriaAndCollapsedClass([e], this._isShown(t))
      }
    }
    _getFirstLevelChildren(t) {
      const e = z.find(Mt, this._config.parent);
      return z.find(t, this._config.parent).filter(t => !e.includes(t))
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length)
        for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e)
    }
    static jQueryInterface(t) {
      const e = {};
      return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function() {
        const i = Bt.getOrCreateInstance(this, e);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t]()
        }
      })
    }
  }
  N.on(document, It, Ft, function(t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    for (const t of z.getMultipleElementsFromSelector(this)) Bt.getOrCreateInstance(t, {
      toggle: !1
    }).toggle()
  }), m(Bt);
  var zt = "top",
    Rt = "bottom",
    qt = "right",
    Vt = "left",
    Kt = "auto",
    Qt = [zt, Rt, qt, Vt],
    Xt = "start",
    Yt = "end",
    Ut = "clippingParents",
    Gt = "viewport",
    Jt = "popper",
    Zt = "reference",
    te = Qt.reduce(function(t, e) {
      return t.concat([e + "-" + Xt, e + "-" + Yt])
    }, []),
    ee = [].concat(Qt, [Kt]).reduce(function(t, e) {
      return t.concat([e, e + "-" + Xt, e + "-" + Yt])
    }, []),
    ie = "beforeRead",
    ne = "read",
    se = "afterRead",
    oe = "beforeMain",
    re = "main",
    ae = "afterMain",
    le = "beforeWrite",
    ce = "write",
    he = "afterWrite",
    de = [ie, ne, se, oe, re, ae, le, ce, he];

  function ue(t) {
    return t ? (t.nodeName || "").toLowerCase() : null
  }

  function fe(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return e && e.defaultView || window
    }
    return t
  }

  function pe(t) {
    return t instanceof fe(t).Element || t instanceof Element
  }

  function me(t) {
    return t instanceof fe(t).HTMLElement || t instanceof HTMLElement
  }

  function ge(t) {
    return "undefined" != typeof ShadowRoot && (t instanceof fe(t).ShadowRoot || t instanceof ShadowRoot)
  }
  const _e = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function(t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function(t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        me(s) && ue(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function(t) {
          var e = n[t];
          !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e)
        }))
      })
    },
    effect: function(t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
      return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function() {
          Object.keys(e.elements).forEach(function(t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function(t, e) {
                return t[e] = "", t
              }, {});
            me(n) && ue(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function(t) {
              n.removeAttribute(t)
            }))
          })
        }
    },
    requires: ["computeStyles"]
  };

  function be(t) {
    return t.split("-")[0]
  }
  var ve = Math.max,
    ye = Math.min,
    we = Math.round;

  function Ae() {
    var t = navigator.userAgentData;
    return null != t && t.brands && Array.isArray(t.brands) ? t.brands.map(function(t) {
      return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
  }

  function Ee() {
    return !/^((?!chrome|android).)*safari/i.test(Ae())
  }

  function Te(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
      s = 1,
      o = 1;
    e && me(t) && (s = t.offsetWidth > 0 && we(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && we(n.height) / t.offsetHeight || 1);
    var r = (pe(t) ? fe(t) : window).visualViewport,
      a = !Ee() && i,
      l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
      c = (n.top + (a && r ? r.offsetTop : 0)) / o,
      h = n.width / s,
      d = n.height / o;
    return {
      width: h,
      height: d,
      top: c,
      right: l + h,
      bottom: c + d,
      left: l,
      x: l,
      y: c
    }
  }

  function Ce(t) {
    var e = Te(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
      x: t.offsetLeft,
      y: t.offsetTop,
      width: i,
      height: n
    }
  }

  function Oe(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && ge(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host
      } while (n)
    }
    return !1
  }

  function xe(t) {
    return fe(t).getComputedStyle(t)
  }

  function ke(t) {
    return ["table", "td", "th"].indexOf(ue(t)) >= 0
  }

  function Le(t) {
    return ((pe(t) ? t.ownerDocument : t.document) || window.document).documentElement
  }

  function Se(t) {
    return "html" === ue(t) ? t : t.assignedSlot || t.parentNode || (ge(t) ? t.host : null) || Le(t)
  }

  function De(t) {
    return me(t) && "fixed" !== xe(t).position ? t.offsetParent : null
  }

  function $e(t) {
    for (var e = fe(t), i = De(t); i && ke(i) && "static" === xe(i).position;) i = De(i);
    return i && ("html" === ue(i) || "body" === ue(i) && "static" === xe(i).position) ? e : i || function(t) {
      var e = /firefox/i.test(Ae());
      if (/Trident/i.test(Ae()) && me(t) && "fixed" === xe(t).position) return null;
      var i = Se(t);
      for (ge(i) && (i = i.host); me(i) && ["html", "body"].indexOf(ue(i)) < 0;) {
        var n = xe(i);
        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
        i = i.parentNode
      }
      return null
    }(t) || e
  }

  function Ie(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
  }

  function Ne(t, e, i) {
    return ve(t, ye(e, i))
  }

  function Pe(t) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, t)
  }

  function je(t, e) {
    return e.reduce(function(e, i) {
      return e[i] = t, e
    }, {})
  }
  const Me = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function(t) {
      var e, i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = be(i.placement),
        l = Ie(a),
        c = [Vt, qt].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var h = function(t, e) {
            return Pe("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
              placement: e.placement
            })) : t) ? t : je(t, Qt))
          }(s.padding, i),
          d = Ce(o),
          u = "y" === l ? zt : Vt,
          f = "y" === l ? Rt : qt,
          p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
          m = r[l] - i.rects.reference[l],
          g = $e(o),
          _ = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
          b = p / 2 - m / 2,
          v = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + b,
          A = Ne(v, w, y),
          E = l;
        i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e)
      }
    },
    effect: function(t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Oe(e.elements.popper, n) && (e.elements.arrow = n)
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };

  function Fe(t) {
    return t.split("-")[1]
  }
  var He = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };

  function We(t) {
    var e, i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d = t.isFixed,
      u = r.x,
      f = void 0 === u ? 0 : u,
      p = r.y,
      m = void 0 === p ? 0 : p,
      g = "function" == typeof h ? h({
        x: f,
        y: m
      }) : {
        x: f,
        y: m
      };
    f = g.x, m = g.y;
    var _ = r.hasOwnProperty("x"),
      b = r.hasOwnProperty("y"),
      v = Vt,
      y = zt,
      w = window;
    if (c) {
      var A = $e(i),
        E = "clientHeight",
        T = "clientWidth";
      A === fe(i) && "static" !== xe(A = Le(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === zt || (s === Vt || s === qt) && o === Yt) && (y = Rt, m -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, m *= l ? 1 : -1), s !== Vt && (s !== zt && s !== Rt || o !== Yt) || (v = qt, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1)
    }
    var C, O = Object.assign({
        position: a
      }, c && He),
      x = !0 === h ? function(t, e) {
        var i = t.x,
          n = t.y,
          s = e.devicePixelRatio || 1;
        return {
          x: we(i * s) / s || 0,
          y: we(n * s) / s || 0
        }
      }({
        x: f,
        y: m
      }, fe(i)) : {
        x: f,
        y: m
      };
    return f = x.x, m = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? m + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e))
  }
  const Be = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function(t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: be(e.placement),
          variation: Fe(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
          isFixed: "fixed" === e.options.strategy
        };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, We(Object.assign({}, c, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: r,
        roundOffsets: l
      })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, We(Object.assign({}, c, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: l
      })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
      })
    },
    data: {}
  };
  var ze = {
    passive: !0
  };
  const Re = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: function(t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = fe(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && c.forEach(function(t) {
          t.addEventListener("scroll", i.update, ze)
        }), a && l.addEventListener("resize", i.update, ze),
        function() {
          o && c.forEach(function(t) {
            t.removeEventListener("scroll", i.update, ze)
          }), a && l.removeEventListener("resize", i.update, ze)
        }
    },
    data: {}
  };
  var qe = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };

  function Ve(t) {
    return t.replace(/left|right|bottom|top/g, function(t) {
      return qe[t]
    })
  }
  var Ke = {
    start: "end",
    end: "start"
  };

  function Qe(t) {
    return t.replace(/start|end/g, function(t) {
      return Ke[t]
    })
  }

  function Xe(t) {
    var e = fe(t);
    return {
      scrollLeft: e.pageXOffset,
      scrollTop: e.pageYOffset
    }
  }

  function Ye(t) {
    return Te(Le(t)).left + Xe(t).scrollLeft
  }

  function Ue(t) {
    var e = xe(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n)
  }

  function Ge(t) {
    return ["html", "body", "#document"].indexOf(ue(t)) >= 0 ? t.ownerDocument.body : me(t) && Ue(t) ? t : Ge(Se(t))
  }

  function Je(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Ge(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = fe(n),
      r = s ? [o].concat(o.visualViewport || [], Ue(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(Je(Se(r)))
  }

  function Ze(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height
    })
  }

  function ti(t, e, i) {
    return e === Gt ? Ze(function(t, e) {
      var i = fe(t),
        n = Le(t),
        s = i.visualViewport,
        o = n.clientWidth,
        r = n.clientHeight,
        a = 0,
        l = 0;
      if (s) {
        o = s.width, r = s.height;
        var c = Ee();
        (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop)
      }
      return {
        width: o,
        height: r,
        x: a + Ye(t),
        y: l
      }
    }(t, i)) : pe(e) ? function(t, e) {
      var i = Te(t, !1, "fixed" === e);
      return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i
    }(e, i) : Ze(function(t) {
      var e, i = Le(t),
        n = Xe(t),
        s = null == (e = t.ownerDocument) ? void 0 : e.body,
        o = ve(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
        r = ve(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
        a = -n.scrollLeft + Ye(t),
        l = -n.scrollTop;
      return "rtl" === xe(s || i).direction && (a += ve(i.clientWidth, s ? s.clientWidth : 0) - o), {
        width: o,
        height: r,
        x: a,
        y: l
      }
    }(Le(t)))
  }

  function ei(t) {
    var e, i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? be(s) : null,
      r = s ? Fe(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case zt:
        e = {
          x: a,
          y: i.y - n.height
        };
        break;
      case Rt:
        e = {
          x: a,
          y: i.y + i.height
        };
        break;
      case qt:
        e = {
          x: i.x + i.width,
          y: l
        };
        break;
      case Vt:
        e = {
          x: i.x - n.width,
          y: l
        };
        break;
      default:
        e = {
          x: i.x,
          y: i.y
        }
    }
    var c = o ? Ie(o) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (r) {
        case Xt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case Yt:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2)
      }
    }
    return e
  }

  function ii(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.strategy,
      r = void 0 === o ? t.strategy : o,
      a = i.boundary,
      l = void 0 === a ? Ut : a,
      c = i.rootBoundary,
      h = void 0 === c ? Gt : c,
      d = i.elementContext,
      u = void 0 === d ? Jt : d,
      f = i.altBoundary,
      p = void 0 !== f && f,
      m = i.padding,
      g = void 0 === m ? 0 : m,
      _ = Pe("number" != typeof g ? g : je(g, Qt)),
      b = u === Jt ? Zt : Jt,
      v = t.rects.popper,
      y = t.elements[p ? b : u],
      w = function(t, e, i, n) {
        var s = "clippingParents" === e ? function(t) {
            var e = Je(Se(t)),
              i = ["absolute", "fixed"].indexOf(xe(t).position) >= 0 && me(t) ? $e(t) : t;
            return pe(i) ? e.filter(function(t) {
              return pe(t) && Oe(t, i) && "body" !== ue(t)
            }) : []
          }(t) : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(function(e, i) {
            var s = ti(t, i, n);
            return e.top = ve(s.top, e.top), e.right = ye(s.right, e.right), e.bottom = ye(s.bottom, e.bottom), e.left = ve(s.left, e.left), e
          }, ti(t, r, n));
        return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
      }(pe(y) ? y : y.contextElement || Le(t.elements.popper), l, h, r),
      A = Te(t.elements.reference),
      E = ei({
        reference: A,
        element: v,
        strategy: "absolute",
        placement: s
      }),
      T = Ze(Object.assign({}, v, E)),
      C = u === Jt ? T : A,
      O = {
        top: w.top - C.top + _.top,
        bottom: C.bottom - w.bottom + _.bottom,
        left: w.left - C.left + _.left,
        right: C.right - w.right + _.right
      },
      x = t.modifiersData.offset;
    if (u === Jt && x) {
      var k = x[s];
      Object.keys(O).forEach(function(t) {
        var e = [qt, Rt].indexOf(t) >= 0 ? 1 : -1,
          i = [zt, Rt].indexOf(t) >= 0 ? "y" : "x";
        O[t] += k[i] * e
      })
    }
    return O
  }

  function ni(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? ee : l,
      h = Fe(n),
      d = h ? a ? te : te.filter(function(t) {
        return Fe(t) === h
      }) : Qt,
      u = d.filter(function(t) {
        return c.indexOf(t) >= 0
      });
    0 === u.length && (u = d);
    var f = u.reduce(function(e, i) {
      return e[i] = ii(t, {
        placement: i,
        boundary: s,
        rootBoundary: o,
        padding: r
      })[be(i)], e
    }, {});
    return Object.keys(f).sort(function(t, e) {
      return f[t] - f[e]
    })
  }
  const si = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function(t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, m = i.allowedAutoPlacements, g = e.options.placement, _ = be(g), b = l || (_ !== g && p ? function(t) {
            if (be(t) === Kt) return [];
            var e = Ve(t);
            return [Qe(t), e, Qe(e)]
          }(g) : [Ve(g)]), v = [g].concat(b).reduce(function(t, i) {
            return t.concat(be(i) === Kt ? ni(e, {
              placement: i,
              boundary: h,
              rootBoundary: d,
              padding: c,
              flipVariations: p,
              allowedAutoPlacements: m
            }) : i)
          }, []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++) {
          var O = v[C],
            x = be(O),
            k = Fe(O) === Xt,
            L = [zt, Rt].indexOf(x) >= 0,
            S = L ? "width" : "height",
            D = ii(e, {
              placement: O,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c
            }),
            $ = L ? k ? qt : Vt : k ? Rt : zt;
          y[S] > w[S] && ($ = Ve($));
          var I = Ve($),
            N = [];
          if (o && N.push(D[x] <= 0), a && N.push(D[$] <= 0, D[I] <= 0), N.every(function(t) {
              return t
            })) {
            T = O, E = !1;
            break
          }
          A.set(O, N)
        }
        if (E)
          for (var P = function(t) {
              var e = v.find(function(e) {
                var i = A.get(e);
                if (i) return i.slice(0, t).every(function(t) {
                  return t
                })
              });
              if (e) return T = e, "break"
            }, j = p ? 3 : 1; j > 0 && "break" !== P(j); j--);
        e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0)
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };

  function oi(t, e, i) {
    return void 0 === i && (i = {
      x: 0,
      y: 0
    }), {
      top: t.top - e.height - i.y,
      right: t.right - e.width + i.x,
      bottom: t.bottom - e.height + i.y,
      left: t.left - e.width - i.x
    }
  }

  function ri(t) {
    return [zt, qt, Rt, Vt].some(function(e) {
      return t[e] >= 0
    })
  }
  const ai = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function(t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = ii(e, {
            elementContext: "reference"
          }),
          a = ii(e, {
            altBoundary: !0
          }),
          l = oi(r, n),
          c = oi(a, s, o),
          h = ri(l),
          d = ri(c);
        e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: d
        }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-reference-hidden": h,
          "data-popper-escaped": d
        })
      }
    },
    li = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function(t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = ee.reduce(function(t, i) {
            return t[i] = function(t, e, i) {
              var n = be(t),
                s = [Vt, zt].indexOf(n) >= 0 ? -1 : 1,
                o = "function" == typeof i ? i(Object.assign({}, e, {
                  placement: t
                })) : i,
                r = o[0],
                a = o[1];
              return r = r || 0, a = (a || 0) * s, [Vt, qt].indexOf(n) >= 0 ? {
                x: a,
                y: r
              } : {
                x: r,
                y: a
              }
            }(i, e.rects, o), t
          }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r
      }
    },
    ci = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function(t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = ei({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement
        })
      },
      data: {}
    },
    hi = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function(t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          m = void 0 === p ? 0 : p,
          g = ii(e, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: h
          }),
          _ = be(e.placement),
          b = Fe(e.placement),
          v = !b,
          y = Ie(_),
          w = "x" === y ? "y" : "x",
          A = e.modifiersData.popperOffsets,
          E = e.rects.reference,
          T = e.rects.popper,
          C = "function" == typeof m ? m(Object.assign({}, e.rects, {
            placement: e.placement
          })) : m,
          O = "number" == typeof C ? {
            mainAxis: C,
            altAxis: C
          } : Object.assign({
            mainAxis: 0,
            altAxis: 0
          }, C),
          x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
          k = {
            x: 0,
            y: 0
          };
        if (A) {
          if (o) {
            var L, S = "y" === y ? zt : Vt,
              D = "y" === y ? Rt : qt,
              $ = "y" === y ? "height" : "width",
              I = A[y],
              N = I + g[S],
              P = I - g[D],
              j = f ? -T[$] / 2 : 0,
              M = b === Xt ? E[$] : T[$],
              F = b === Xt ? -T[$] : -E[$],
              H = e.elements.arrow,
              W = f && H ? Ce(H) : {
                width: 0,
                height: 0
              },
              B = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              },
              z = B[S],
              R = B[D],
              q = Ne(0, E[$], W[$]),
              V = v ? E[$] / 2 - j - q - z - O.mainAxis : M - q - z - O.mainAxis,
              K = v ? -E[$] / 2 + j + q + R + O.mainAxis : F + q + R + O.mainAxis,
              Q = e.elements.arrow && $e(e.elements.arrow),
              X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0,
              Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
              U = I + K - Y,
              G = Ne(f ? ye(N, I + V - Y - X) : N, I, f ? ve(P, U) : P);
            A[y] = G, k[y] = G - I
          }
          if (a) {
            var J, Z = "x" === y ? zt : Vt,
              tt = "x" === y ? Rt : qt,
              et = A[w],
              it = "y" === w ? "height" : "width",
              nt = et + g[Z],
              st = et - g[tt],
              ot = -1 !== [zt, Vt].indexOf(_),
              rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
              at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
              lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
              ct = f && ot ? function(t, e, i) {
                var n = Ne(t, e, i);
                return n > i ? i : n
              }(at, et, lt) : Ne(f ? at : nt, et, f ? lt : st);
            A[w] = ct, k[w] = ct - et
          }
          e.modifiersData[n] = k
        }
      },
      requiresIfExists: ["offset"]
    };

  function di(t, e, i) {
    void 0 === i && (i = !1);
    var n, s, o = me(e),
      r = me(e) && function(t) {
        var e = t.getBoundingClientRect(),
          i = we(e.width) / t.offsetWidth || 1,
          n = we(e.height) / t.offsetHeight || 1;
        return 1 !== i || 1 !== n
      }(e),
      a = Le(e),
      l = Te(t, r, i),
      c = {
        scrollLeft: 0,
        scrollTop: 0
      },
      h = {
        x: 0,
        y: 0
      };
    return (o || !o && !i) && (("body" !== ue(e) || Ue(a)) && (c = (n = e) !== fe(n) && me(n) ? {
      scrollLeft: (s = n).scrollLeft,
      scrollTop: s.scrollTop
    } : Xe(n)), me(e) ? ((h = Te(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Ye(a))), {
      x: l.left + c.scrollLeft - h.x,
      y: l.top + c.scrollTop - h.y,
      width: l.width,
      height: l.height
    }
  }

  function ui(t) {
    var e = new Map,
      i = new Set,
      n = [];

    function s(t) {
      i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
        if (!i.has(t)) {
          var n = e.get(t);
          n && s(n)
        }
      }), n.push(t)
    }
    return t.forEach(function(t) {
      e.set(t.name, t)
    }), t.forEach(function(t) {
      i.has(t.name) || s(t)
    }), n
  }
  var fi = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };

  function pi() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    return !e.some(function(t) {
      return !(t && "function" == typeof t.getBoundingClientRect)
    })
  }

  function mi(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? fi : s;
    return function(t, e, i) {
      void 0 === i && (i = o);
      var s, r, a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, fi, o),
          modifiersData: {},
          elements: {
            reference: t,
            popper: e
          },
          attributes: {},
          styles: {}
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function(i) {
            var s = "function" == typeof i ? i(a.options) : i;
            d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
              reference: pe(t) ? Je(t) : t.contextElement ? Je(t.contextElement) : [],
              popper: Je(e)
            };
            var r, c, u = function(t) {
              var e = ui(t);
              return de.reduce(function(t, i) {
                return t.concat(e.filter(function(t) {
                  return t.phase === i
                }))
              }, [])
            }((r = [].concat(n, a.options.modifiers), c = r.reduce(function(t, e) {
              var i = t[e.name];
              return t[e.name] = i ? Object.assign({}, i, e, {
                options: Object.assign({}, i.options, e.options),
                data: Object.assign({}, i.data, e.data)
              }) : e, t
            }, {}), Object.keys(c).map(function(t) {
              return c[t]
            })));
            return a.orderedModifiers = u.filter(function(t) {
              return t.enabled
            }), a.orderedModifiers.forEach(function(t) {
              var e = t.name,
                i = t.options,
                n = void 0 === i ? {} : i,
                s = t.effect;
              if ("function" == typeof s) {
                var o = s({
                  state: a,
                  name: e,
                  instance: h,
                  options: n
                });
                l.push(o || function() {})
              }
            }), h.update()
          },
          forceUpdate: function() {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (pi(e, i)) {
                a.rects = {
                  reference: di(e, $e(i), "fixed" === a.options.strategy),
                  popper: Ce(i)
                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function(t) {
                  return a.modifiersData[t.name] = Object.assign({}, t.data)
                });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    "function" == typeof o && (a = o({
                      state: a,
                      options: l,
                      name: d,
                      instance: h
                    }) || a)
                  } else a.reset = !1, n = -1
              }
            }
          },
          update: (s = function() {
            return new Promise(function(t) {
              h.forceUpdate(), t(a)
            })
          }, function() {
            return r || (r = new Promise(function(t) {
              Promise.resolve().then(function() {
                r = void 0, t(s())
              })
            })), r
          }),
          destroy: function() {
            d(), c = !0
          }
        };
      if (!pi(t, e)) return h;

      function d() {
        l.forEach(function(t) {
          return t()
        }), l = []
      }
      return h.setOptions(i).then(function(t) {
        !c && i.onFirstUpdate && i.onFirstUpdate(t)
      }), h
    }
  }
  var gi = mi(),
    _i = mi({
      defaultModifiers: [Re, ci, Be, _e]
    }),
    bi = mi({
      defaultModifiers: [Re, ci, Be, _e, li, si, hi, Me, ai]
    });
  const vi = Object.freeze(Object.defineProperty({
      __proto__: null,
      afterMain: ae,
      afterRead: se,
      afterWrite: he,
      applyStyles: _e,
      arrow: Me,
      auto: Kt,
      basePlacements: Qt,
      beforeMain: oe,
      beforeRead: ie,
      beforeWrite: le,
      bottom: Rt,
      clippingParents: Ut,
      computeStyles: Be,
      createPopper: bi,
      createPopperBase: gi,
      createPopperLite: _i,
      detectOverflow: ii,
      end: Yt,
      eventListeners: Re,
      flip: si,
      hide: ai,
      left: Vt,
      main: re,
      modifierPhases: de,
      offset: li,
      placements: ee,
      popper: Jt,
      popperGenerator: mi,
      popperOffsets: ci,
      preventOverflow: hi,
      read: ne,
      reference: Zt,
      right: qt,
      start: Xt,
      top: zt,
      variationPlacements: te,
      viewport: Gt,
      write: ce
    }, Symbol.toStringTag, {
      value: "Module"
    })),
    yi = "dropdown",
    wi = ".bs.dropdown",
    Ai = ".data-api",
    Ei = "ArrowUp",
    Ti = "ArrowDown",
    Ci = `hide${wi}`,
    Oi = `hidden${wi}`,
    xi = `show${wi}`,
    ki = `shown${wi}`,
    Li = `click${wi}${Ai}`,
    Si = `keydown${wi}${Ai}`,
    Di = `keyup${wi}${Ai}`,
    $i = "show",
    Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    Ni = `${Ii}.${$i}`,
    Pi = ".dropdown-menu",
    ji = p() ? "top-end" : "top-start",
    Mi = p() ? "top-start" : "top-end",
    Fi = p() ? "bottom-end" : "bottom-start",
    Hi = p() ? "bottom-start" : "bottom-end",
    Wi = p() ? "left-start" : "right-start",
    Bi = p() ? "right-start" : "left-start",
    zi = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle"
    },
    Ri = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)"
    };
  class qi extends W {
    constructor(t, e) {
      super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = z.next(this._element, Pi)[0] || z.prev(this._element, Pi)[0] || z.findOne(Pi, this._parent), this._inNavbar = this._detectNavbar()
    }
    static get Default() {
      return zi
    }
    static get DefaultType() {
      return Ri
    }
    static get NAME() {
      return yi
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show()
    }
    show() {
      if (l(this._element) || this._isShown()) return;
      const t = {
        relatedTarget: this._element
      };
      if (!N.trigger(this._element, xi, t).defaultPrevented) {
        if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
          for (const t of [].concat(...document.body.children)) N.on(t, "mouseover", h);
        this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t)
      }
    }
    hide() {
      if (l(this._element) || !this._isShown()) return;
      const t = {
        relatedTarget: this._element
      };
      this._completeHide(t)
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose()
    }
    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
    }
    _completeHide(t) {
      if (!N.trigger(this._element, Ci, t).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const t of [].concat(...document.body.children)) N.off(t, "mouseover", h);
        this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t)
      }
    }
    _getConfig(t) {
      if ("object" == typeof(t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return t
    }
    _createPopper() {
      if (void 0 === vi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      let t = this._element;
      "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
      const e = this._getPopperConfig();
      this._popper = bi(t, this._menu, e)
    }
    _isShown() {
      return this._menu.classList.contains($i)
    }
    _getPlacement() {
      const t = this._parent;
      if (t.classList.contains("dropend")) return Wi;
      if (t.classList.contains("dropstart")) return Bi;
      if (t.classList.contains("dropup-center")) return "top";
      if (t.classList.contains("dropdown-center")) return "bottom";
      const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? e ? Mi : ji : e ? Hi : Fi
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar")
    }
    _getOffset() {
      const {
        offset: t
      } = this._config;
      return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
        name: "applyStyles",
        enabled: !1
      }]), {
        ...t,
        ...g(this._config.popperConfig, [t])
      }
    }
    _selectMenuItem({
      key: t,
      target: e
    }) {
      const i = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(t => a(t));
      i.length && b(i, e, t === Ti, !i.includes(e)).focus()
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = qi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      })
    }
    static clearMenus(t) {
      if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
      const e = z.find(Ni);
      for (const i of e) {
        const e = qi.getInstance(i);
        if (!e || !1 === e._config.autoClose) continue;
        const n = t.composedPath(),
          s = n.includes(e._menu);
        if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
        if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
        const o = {
          relatedTarget: e._element
        };
        "click" === t.type && (o.clickEvent = t), e._completeHide(o)
      }
    }
    static dataApiKeydownHandler(t) {
      const e = /input|textarea/i.test(t.target.tagName),
        i = "Escape" === t.key,
        n = [Ei, Ti].includes(t.key);
      if (!n && !i) return;
      if (e && !i) return;
      t.preventDefault();
      const s = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t.delegateTarget.parentNode),
        o = qi.getOrCreateInstance(s);
      if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
      o._isShown() && (t.stopPropagation(), o.hide(), s.focus())
    }
  }
  N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, function(t) {
    t.preventDefault(), qi.getOrCreateInstance(this).toggle()
  }), m(qi);
  const Vi = "backdrop",
    Ki = "show",
    Qi = `mousedown.bs.${Vi}`,
    Xi = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body"
    },
    Yi = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)"
    };
  class Ui extends H {
    constructor(t) {
      super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
    }
    static get Default() {
      return Xi
    }
    static get DefaultType() {
      return Yi
    }
    static get NAME() {
      return Vi
    }
    show(t) {
      if (!this._config.isVisible) return void g(t);
      this._append();
      const e = this._getElement();
      this._config.isAnimated && d(e), e.classList.add(Ki), this._emulateAnimation(() => {
        g(t)
      })
    }
    hide(t) {
      this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation(() => {
        this.dispose(), g(t)
      })) : g(t)
    }
    dispose() {
      this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = !1)
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
      }
      return this._element
    }
    _configAfterMerge(t) {
      return t.rootElement = r(t.rootElement), t
    }
    _append() {
      if (this._isAppended) return;
      const t = this._getElement();
      this._config.rootElement.append(t), N.on(t, Qi, () => {
        g(this._config.clickCallback)
      }), this._isAppended = !0
    }
    _emulateAnimation(t) {
      _(t, this._getElement(), this._config.isAnimated)
    }
  }
  const Gi = ".bs.focustrap",
    Ji = `focusin${Gi}`,
    Zi = `keydown.tab${Gi}`,
    tn = "backward",
    en = {
      autofocus: !0,
      trapElement: null
    },
    nn = {
      autofocus: "boolean",
      trapElement: "element"
    };
  class sn extends H {
    constructor(t) {
      super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
    }
    static get Default() {
      return en
    }
    static get DefaultType() {
      return nn
    }
    static get NAME() {
      return "focustrap"
    }
    activate() {
      this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, t => this._handleFocusin(t)), N.on(document, Zi, t => this._handleKeydown(t)), this._isActive = !0)
    }
    deactivate() {
      this._isActive && (this._isActive = !1, N.off(document, Gi))
    }
    _handleFocusin(t) {
      const {
        trapElement: e
      } = this._config;
      if (t.target === document || t.target === e || e.contains(t.target)) return;
      const i = z.focusableChildren(e);
      0 === i.length ? e.focus() : this._lastTabNavDirection === tn ? i[i.length - 1].focus() : i[0].focus()
    }
    _handleKeydown(t) {
      "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? tn : "forward")
    }
  }
  const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    rn = ".sticky-top",
    an = "padding-right",
    ln = "margin-right";
  class cn {
    constructor() {
      this._element = document.body
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t)
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, an, e => e + t), this._setElementAttributes(on, an, e => e + t), this._setElementAttributes(rn, ln, e => e - t)
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln)
    }
    isOverflowing() {
      return this.getWidth() > 0
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, t => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t).getPropertyValue(e);
        t.style.setProperty(e, `${i(Number.parseFloat(s))}px`)
      })
    }
    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e);
      i && F.setDataAttribute(t, e, i)
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, t => {
        const i = F.getDataAttribute(t, e);
        null !== i ? (F.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e)
      })
    }
    _applyManipulationCallback(t, e) {
      if (o(t)) e(t);
      else
        for (const i of z.find(t, this._element)) e(i)
    }
  }
  const hn = ".bs.modal",
    dn = `hide${hn}`,
    un = `hidePrevented${hn}`,
    fn = `hidden${hn}`,
    pn = `show${hn}`,
    mn = `shown${hn}`,
    gn = `resize${hn}`,
    _n = `click.dismiss${hn}`,
    bn = `mousedown.dismiss${hn}`,
    vn = `keydown.dismiss${hn}`,
    yn = `click${hn}.data-api`,
    wn = "modal-open",
    An = "show",
    En = "modal-static",
    Tn = {
      backdrop: !0,
      focus: !0,
      keyboard: !0
    },
    Cn = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean"
    };
  class On extends W {
    constructor(t, e) {
      super(t, e), this._dialog = z.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new cn, this._addEventListeners()
    }
    static get Default() {
      return Tn
    }
    static get DefaultType() {
      return Cn
    }
    static get NAME() {
      return "modal"
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
      this._isShown || this._isTransitioning || N.trigger(this._element, pn, {
        relatedTarget: t
      }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)))
    }
    hide() {
      this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())))
    }
    dispose() {
      N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }
    handleUpdate() {
      this._adjustDialog()
    }
    _initializeBackDrop() {
      return new Ui({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated()
      })
    }
    _initializeFocusTrap() {
      return new sn({
        trapElement: this._element
      })
    }
    _showElement(t) {
      document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
      const e = z.findOne(".modal-body", this._dialog);
      e && (e.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback(() => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, N.trigger(this._element, mn, {
          relatedTarget: t
        })
      }, this._dialog, this._isAnimated())
    }
    _addEventListeners() {
      N.on(this._element, vn, t => {
        "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition())
      }), N.on(window, gn, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog()
      }), N.on(this._element, bn, t => {
        N.one(this._element, _n, e => {
          this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
        })
      })
    }
    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
        document.body.classList.remove(wn), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, fn)
      })
    }
    _isAnimated() {
      return this._element.classList.contains("fade")
    }
    _triggerBackdropTransition() {
      if (N.trigger(this._element, un).defaultPrevented) return;
      const t = this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._element.style.overflowY;
      "hidden" === e || this._element.classList.contains(En) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback(() => {
        this._element.classList.remove(En), this._queueCallback(() => {
          this._element.style.overflowY = e
        }, this._dialog)
      }, this._dialog), this._element.focus())
    }
    _adjustDialog() {
      const t = this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      if (i && !t) {
        const t = p() ? "paddingLeft" : "paddingRight";
        this._element.style[t] = `${e}px`
      }
      if (!i && t) {
        const t = p() ? "paddingRight" : "paddingLeft";
        this._element.style[t] = `${e}px`
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
    }
    static jQueryInterface(t, e) {
      return this.each(function() {
        const i = On.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e)
        }
      })
    }
  }
  N.on(document, yn, '[data-bs-toggle="modal"]', function(t) {
    const e = z.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), N.one(e, pn, t => {
      t.defaultPrevented || N.one(e, fn, () => {
        a(this) && this.focus()
      })
    });
    const i = z.findOne(".modal.show");
    i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this)
  }), R(On), m(On);
  const xn = ".bs.offcanvas",
    kn = ".data-api",
    Ln = `load${xn}${kn}`,
    Sn = "show",
    Dn = "showing",
    $n = "hiding",
    In = ".offcanvas.show",
    Nn = `show${xn}`,
    Pn = `shown${xn}`,
    jn = `hide${xn}`,
    Mn = `hidePrevented${xn}`,
    Fn = `hidden${xn}`,
    Hn = `resize${xn}`,
    Wn = `click${xn}${kn}`,
    Bn = `keydown.dismiss${xn}`,
    zn = {
      backdrop: !0,
      keyboard: !0,
      scroll: !1
    },
    Rn = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean"
    };
  class qn extends W {
    constructor(t, e) {
      super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
    }
    static get Default() {
      return zn
    }
    static get DefaultType() {
      return Rn
    }
    static get NAME() {
      return "offcanvas"
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t)
    }
    show(t) {
      this._isShown || N.trigger(this._element, Nn, {
        relatedTarget: t
      }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new cn).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback(() => {
        this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Sn), this._element.classList.remove(Dn), N.trigger(this._element, Pn, {
          relatedTarget: t
        })
      }, this._element, !0))
    }
    hide() {
      this._isShown && (N.trigger(this._element, jn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback(() => {
        this._element.classList.remove(Sn, $n), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new cn).reset(), N.trigger(this._element, Fn)
      }, this._element, !0)))
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }
    _initializeBackDrop() {
      const t = Boolean(this._config.backdrop);
      return new Ui({
        className: "offcanvas-backdrop",
        isVisible: t,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: t ? () => {
          "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, Mn)
        } : null
      })
    }
    _initializeFocusTrap() {
      return new sn({
        trapElement: this._element
      })
    }
    _addEventListeners() {
      N.on(this._element, Bn, t => {
        "Escape" === t.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, Mn))
      })
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = qn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
          e[t](this)
        }
      })
    }
  }
  N.on(document, Wn, '[data-bs-toggle="offcanvas"]', function(t) {
    const e = z.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)) return;
    N.one(e, Fn, () => {
      a(this) && this.focus()
    });
    const i = z.findOne(In);
    i && i !== e && qn.getInstance(i).hide(), qn.getOrCreateInstance(e).toggle(this)
  }), N.on(window, Ln, () => {
    for (const t of z.find(In)) qn.getOrCreateInstance(t).show()
  }), N.on(window, Hn, () => {
    for (const t of z.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && qn.getOrCreateInstance(t).hide()
  }), R(qn), m(qn);
  const Vn = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      dd: [],
      div: [],
      dl: [],
      dt: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    Kn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
    Xn = (t, e) => {
      const i = t.nodeName.toLowerCase();
      return e.includes(i) ? !Kn.has(i) || Boolean(Qn.test(t.nodeValue)) : e.filter(t => t instanceof RegExp).some(t => t.test(i))
    },
    Yn = {
      allowList: Vn,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>"
    },
    Un = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string"
    },
    Gn = {
      entry: "(string|element|function|null)",
      selector: "(string|element)"
    };
  class Jn extends H {
    constructor(t) {
      super(), this._config = this._getConfig(t)
    }
    static get Default() {
      return Yn
    }
    static get DefaultType() {
      return Un
    }
    static get NAME() {
      return "TemplateFactory"
    }
    getContent() {
      return Object.values(this._config.content).map(t => this._resolvePossibleFunction(t)).filter(Boolean)
    }
    hasContent() {
      return this.getContent().length > 0
    }
    changeContent(t) {
      return this._checkContent(t), this._config.content = {
        ...this._config.content,
        ...t
      }, this
    }
    toHtml() {
      const t = document.createElement("div");
      t.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);
      const e = t.children[0],
        i = this._resolvePossibleFunction(this._config.extraClass);
      return i && e.classList.add(...i.split(" ")), e
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content)
    }
    _checkContent(t) {
      for (const [e, i] of Object.entries(t)) super._typeCheckConfig({
        selector: e,
        entry: i
      }, Gn)
    }
    _setContent(t, e, i) {
      const n = z.findOne(i, t);
      n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove())
    }
    _maybeSanitize(t) {
      return this._config.sanitize ? function(t, e, i) {
        if (!t.length) return t;
        if (i && "function" == typeof i) return i(t);
        const n = (new window.DOMParser).parseFromString(t, "text/html"),
          s = [].concat(...n.body.querySelectorAll("*"));
        for (const t of s) {
          const i = t.nodeName.toLowerCase();
          if (!Object.keys(e).includes(i)) {
            t.remove();
            continue
          }
          const n = [].concat(...t.attributes),
            s = [].concat(e["*"] || [], e[i] || []);
          for (const e of n) Xn(e, s) || t.removeAttribute(e.nodeName)
        }
        return n.body.innerHTML
      }(t, this._config.allowList, this._config.sanitizeFn) : t
    }
    _resolvePossibleFunction(t) {
      return g(t, [this])
    }
    _putElementInTemplate(t, e) {
      if (this._config.html) return e.innerHTML = "", void e.append(t);
      e.textContent = t.textContent
    }
  }
  const Zn = new Set(["sanitize", "allowList", "sanitizeFn"]),
    ts = "fade",
    es = "show",
    is = ".modal",
    ns = "hide.bs.modal",
    ss = "hover",
    os = "focus",
    rs = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: p() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: p() ? "right" : "left"
    },
    as = {
      allowList: Vn,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 6],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus"
    },
    ls = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string"
    };
  class cs extends W {
    constructor(t, e) {
      if (void 0 === vi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
    }
    static get Default() {
      return as
    }
    static get DefaultType() {
      return ls
    }
    static get NAME() {
      return "tooltip"
    }
    enable() {
      this._isEnabled = !0
    }
    disable() {
      this._isEnabled = !1
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled
    }
    toggle() {
      this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
    }
    dispose() {
      clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
    }
    show() {
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled) return;
      const t = N.trigger(this._element, this.constructor.eventName("show")),
        e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
      if (t.defaultPrevented || !e) return;
      this._disposePopper();
      const i = this._getTipElement();
      this._element.setAttribute("aria-describedby", i.getAttribute("id"));
      const {
        container: n
      } = this._config;
      if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(es), "ontouchstart" in document.documentElement)
        for (const t of [].concat(...document.body.children)) N.on(t, "mouseover", h);
      this._queueCallback(() => {
        N.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
      }, this.tip, this._isAnimated())
    }
    hide() {
      if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
        if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement)
          for (const t of [].concat(...document.body.children)) N.off(t, "mouseover", h);
        this._activeTrigger.click = !1, this._activeTrigger[os] = !1, this._activeTrigger[ss] = !1, this._isHovered = null, this._queueCallback(() => {
          this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName("hidden")))
        }, this.tip, this._isAnimated())
      }
    }
    update() {
      this._popper && this._popper.update()
    }
    _isWithContent() {
      return Boolean(this._getTitle())
    }
    _getTipElement() {
      return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
    }
    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml();
      if (!e) return null;
      e.classList.remove(ts, es), e.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i = (t => {
        do {
          t += Math.floor(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
      })(this.constructor.NAME).toString();
      return e.setAttribute("id", i), this._isAnimated() && e.classList.add(ts), e
    }
    setContent(t) {
      this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
    }
    _getTemplateFactory(t) {
      return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Jn({
        ...this._config,
        content: t,
        extraClass: this._resolvePossibleFunction(this._config.customClass)
      }), this._templateFactory
    }
    _getContentForTemplate() {
      return {
        ".tooltip-inner": this._getTitle()
      }
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(ts)
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(es)
    }
    _createPopper(t) {
      const e = g(this._config.placement, [this, t, this._element]),
        i = rs[e.toUpperCase()];
      return bi(this._element, t, this._getPopperConfig(i))
    }
    _getOffset() {
      const {
        offset: t
      } = this._config;
      return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
    }
    _resolvePossibleFunction(t) {
      return g(t, [this._element])
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: `.${this.constructor.NAME}-arrow`
          }
        }, {
          name: "preSetPlacement",
          enabled: !0,
          phase: "beforeMain",
          fn: t => {
            this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
          }
        }]
      };
      return {
        ...e,
        ...g(this._config.popperConfig, [e])
      }
    }
    _setListeners() {
      const t = this._config.trigger.split(" ");
      for (const e of t)
        if ("click" === e) N.on(this._element, this.constructor.eventName("click"), this._config.selector, t => {
          this._initializeOnDelegatedTarget(t).toggle()
        });
        else if ("manual" !== e) {
        const t = e === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
          i = e === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
        N.on(this._element, t, this._config.selector, t => {
          const e = this._initializeOnDelegatedTarget(t);
          e._activeTrigger["focusin" === t.type ? os : ss] = !0, e._enter()
        }), N.on(this._element, i, this._config.selector, t => {
          const e = this._initializeOnDelegatedTarget(t);
          e._activeTrigger["focusout" === t.type ? os : ss] = e._element.contains(t.relatedTarget), e._leave()
        })
      }
      this._hideModalHandler = () => {
        this._element && this.hide()
      }, N.on(this._element.closest(is), ns, this._hideModalHandler)
    }
    _fixTitle() {
      const t = this._element.getAttribute("title");
      t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"))
    }
    _enter() {
      this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(() => {
        this._isHovered && this.show()
      }, this._config.delay.show))
    }
    _leave() {
      this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
        this._isHovered || this.hide()
      }, this._config.delay.hide))
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0)
    }
    _getConfig(t) {
      const e = F.getDataAttributes(this._element);
      for (const t of Object.keys(e)) Zn.has(t) && delete e[t];
      return t = {
        ...e,
        ..."object" == typeof t && t ? t : {}
      }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
    }
    _configAfterMerge(t) {
      return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t
    }
    _getDelegateConfig() {
      const t = {};
      for (const [e, i] of Object.entries(this._config)) this.constructor.Default[e] !== i && (t[e] = i);
      return t.selector = !1, t.trigger = "manual", t
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = cs.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      })
    }
  }
  m(cs);
  const hs = {
      ...cs.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click"
    },
    ds = {
      ...cs.DefaultType,
      content: "(null|string|element|function)"
    };
  class us extends cs {
    static get Default() {
      return hs
    }
    static get DefaultType() {
      return ds
    }
    static get NAME() {
      return "popover"
    }
    _isWithContent() {
      return this._getTitle() || this._getContent()
    }
    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(),
        ".popover-body": this._getContent()
      }
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content)
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = us.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      })
    }
  }
  m(us);
  const fs = ".bs.scrollspy",
    ps = `activate${fs}`,
    ms = `click${fs}`,
    gs = `load${fs}.data-api`,
    _s = "active",
    bs = "[href]",
    vs = ".nav-link",
    ys = `${vs}, .nav-item > ${vs}, .list-group-item`,
    ws = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [.1, .5, 1]
    },
    As = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array"
    };
  class Es extends W {
    constructor(t, e) {
      super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, this.refresh()
    }
    static get Default() {
      return ws
    }
    static get DefaultType() {
      return As
    }
    static get NAME() {
      return "scrollspy"
    }
    refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
      for (const t of this._observableSections.values()) this._observer.observe(t)
    }
    dispose() {
      this._observer.disconnect(), super.dispose()
    }
    _configAfterMerge(t) {
      return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map(t => Number.parseFloat(t))), t
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, t => {
        const e = this._observableSections.get(t.target.hash);
        if (e) {
          t.preventDefault();
          const i = this._rootElement || window,
            n = e.offsetTop - this._element.offsetTop;
          if (i.scrollTo) return void i.scrollTo({
            top: n,
            behavior: "smooth"
          });
          i.scrollTop = n
        }
      }))
    }
    _getNewObserver() {
      const t = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver(t => this._observerCallback(t), t)
    }
    _observerCallback(t) {
      const e = t => this._targetLinks.get(`#${t.target.id}`),
        i = t => {
          this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t))
        },
        n = (this._rootElement || document.documentElement).scrollTop,
        s = n >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n;
      for (const o of t) {
        if (!o.isIntersecting) {
          this._activeTarget = null, this._clearActiveClass(e(o));
          continue
        }
        const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s && t) {
          if (i(o), !n) return
        } else s || t || i(o)
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = new Map, this._observableSections = new Map;
      const t = z.find(bs, this._config.target);
      for (const e of t) {
        if (!e.hash || l(e)) continue;
        const t = z.findOne(decodeURI(e.hash), this._element);
        a(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t))
      }
    }
    _process(t) {
      this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(_s), this._activateParents(t), N.trigger(this._element, ps, {
        relatedTarget: t
      }))
    }
    _activateParents(t) {
      if (t.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(_s);
      else
        for (const e of z.parents(t, ".nav, .list-group"))
          for (const t of z.prev(e, ys)) t.classList.add(_s)
    }
    _clearActiveClass(t) {
      t.classList.remove(_s);
      const e = z.find(`${bs}.${_s}`, t);
      for (const t of e) t.classList.remove(_s)
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = Es.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      })
    }
  }
  N.on(window, gs, () => {
    for (const t of z.find('[data-bs-spy="scroll"]')) Es.getOrCreateInstance(t)
  }), m(Es);
  const Ts = ".bs.tab",
    Cs = `hide${Ts}`,
    Os = `hidden${Ts}`,
    xs = `show${Ts}`,
    ks = `shown${Ts}`,
    Ls = `click${Ts}`,
    Ss = `keydown${Ts}`,
    Ds = `load${Ts}`,
    $s = "ArrowLeft",
    Is = "ArrowRight",
    Ns = "ArrowUp",
    Ps = "ArrowDown",
    js = "Home",
    Ms = "End",
    Fs = "active",
    Hs = "fade",
    Ws = "show",
    Bs = ".dropdown-toggle",
    zs = `:not(${Bs})`,
    Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`,
    Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
  class Ks extends W {
    constructor(t) {
      super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, Ss, t => this._keydown(t)))
    }
    static get NAME() {
      return "tab"
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t)) return;
      const e = this._getActiveElem(),
        i = e ? N.trigger(e, Cs, {
          relatedTarget: t
        }) : null;
      N.trigger(t, xs, {
        relatedTarget: e
      }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e))
    }
    _activate(t, e) {
      t && (t.classList.add(Fs), this._activate(z.getElementFromSelector(t)), this._queueCallback(() => {
        "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), N.trigger(t, ks, {
          relatedTarget: e
        })) : t.classList.add(Ws)
      }, t, t.classList.contains(Hs)))
    }
    _deactivate(t, e) {
      t && (t.classList.remove(Fs), t.blur(), this._deactivate(z.getElementFromSelector(t)), this._queueCallback(() => {
        "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), N.trigger(t, Os, {
          relatedTarget: e
        })) : t.classList.remove(Ws)
      }, t, t.classList.contains(Hs)))
    }
    _keydown(t) {
      if (![$s, Is, Ns, Ps, js, Ms].includes(t.key)) return;
      t.stopPropagation(), t.preventDefault();
      const e = this._getChildren().filter(t => !l(t));
      let i;
      if ([js, Ms].includes(t.key)) i = e[t.key === js ? 0 : e.length - 1];
      else {
        const n = [Is, Ps].includes(t.key);
        i = b(e, t.target, n, !0)
      }
      i && (i.focus({
        preventScroll: !0
      }), Ks.getOrCreateInstance(i).show())
    }
    _getChildren() {
      return z.find(qs, this._parent)
    }
    _getActiveElem() {
      return this._getChildren().find(t => this._elemIsActive(t)) || null
    }
    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, "role", "tablist");
      for (const t of e) this._setInitialAttributesOnChild(t)
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);
      const e = this._elemIsActive(t),
        i = this._getOuterElement(t);
      t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
    }
    _setInitialAttributesOnTargetPanel(t) {
      const e = z.getElementFromSelector(t);
      e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`))
    }
    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t);
      if (!i.classList.contains("dropdown")) return;
      const n = (t, n) => {
        const s = z.findOne(t, i);
        s && s.classList.toggle(n, e)
      };
      n(Bs, Fs), n(".dropdown-menu", Ws), i.setAttribute("aria-expanded", e)
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i)
    }
    _elemIsActive(t) {
      return t.classList.contains(Fs)
    }
    _getInnerElement(t) {
      return t.matches(qs) ? t : z.findOne(qs, t)
    }
    _getOuterElement(t) {
      return t.closest(".nav-item, .list-group-item") || t
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = Ks.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
          e[t]()
        }
      })
    }
  }
  N.on(document, Ls, Rs, function(t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this) || Ks.getOrCreateInstance(this).show()
  }), N.on(window, Ds, () => {
    for (const t of z.find(Vs)) Ks.getOrCreateInstance(t)
  }), m(Ks);
  const Qs = ".bs.toast",
    Xs = `mouseover${Qs}`,
    Ys = `mouseout${Qs}`,
    Us = `focusin${Qs}`,
    Gs = `focusout${Qs}`,
    Js = `hide${Qs}`,
    Zs = `hidden${Qs}`,
    to = `show${Qs}`,
    eo = `shown${Qs}`,
    io = "hide",
    no = "show",
    so = "showing",
    oo = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    },
    ro = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    };
  class ao extends W {
    constructor(t, e) {
      super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
    }
    static get Default() {
      return ro
    }
    static get DefaultType() {
      return oo
    }
    static get NAME() {
      return "toast"
    }
    show() {
      N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d(this._element), this._element.classList.add(no, so), this._queueCallback(() => {
        this._element.classList.remove(so), N.trigger(this._element, eo), this._maybeScheduleHide()
      }, this._element, this._config.animation))
    }
    hide() {
      this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback(() => {
        this._element.classList.add(io), this._element.classList.remove(so, no), N.trigger(this._element, Zs)
      }, this._element, this._config.animation)))
    }
    dispose() {
      this._clearTimeout(), this.isShown() && this._element.classList.remove(no), super.dispose()
    }
    isShown() {
      return this._element.classList.contains(no)
    }
    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide()
      }, this._config.delay)))
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i || this._element.contains(i) || this._maybeScheduleHide()
    }
    _setListeners() {
      N.on(this._element, Xs, t => this._onInteraction(t, !0)), N.on(this._element, Ys, t => this._onInteraction(t, !1)), N.on(this._element, Us, t => this._onInteraction(t, !0)), N.on(this._element, Gs, t => this._onInteraction(t, !1))
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null
    }
    static jQueryInterface(t) {
      return this.each(function() {
        const e = ao.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this)
        }
      })
    }
  }
  return R(ao), m(ao), {
    Alert: Q,
    Button: Y,
    Carousel: xt,
    Collapse: Bt,
    Dropdown: qi,
    Modal: On,
    Offcanvas: qn,
    Popover: us,
    ScrollSpy: Es,
    Tab: Ks,
    Toast: ao,
    Tooltip: cs
  }
});
(function(factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define(["jquery"], function($) {
      return factory($, window, document)
    })
  } else if (typeof exports === "object") {
    var jq = require("jquery");
    if (typeof window === "undefined") {
      module.exports = function(root, $) {
        if (!root) {
          root = window
        }
        if (!$) {
          $ = jq(root)
        }
        return factory($, root, root.document)
      }
    } else {
      module.exports = factory(jq, window, window.document)
    }
  } else {
    window.DataTable = factory(jQuery, window, document)
  }
})(function($, window, document) {
  "use strict";
  var DataTable = function(selector, options) {
    if (DataTable.factory(selector, options)) {
      return DataTable
    }
    if (this instanceof DataTable) {
      return $(selector).DataTable(options)
    } else {
      options = selector
    }
    var _that = this;
    var emptyInit = options === undefined;
    var len = this.length;
    if (emptyInit) {
      options = {}
    }
    this.api = function() {
      return new _Api(this)
    };
    this.each(function() {
      var o = {};
      var oInit = len > 1 ? _fnExtend(o, options, true) : options;
      var i = 0,
        iLen;
      var sId = this.getAttribute("id");
      var defaults = DataTable.defaults;
      var $this = $(this);
      if (this.nodeName.toLowerCase() != "table") {
        _fnLog(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
        return
      }
      $(this).trigger("options.dt", oInit);
      _fnCompatOpts(defaults);
      _fnCompatCols(defaults.column);
      _fnCamelToHungarian(defaults, defaults, true);
      _fnCamelToHungarian(defaults.column, defaults.column, true);
      _fnCamelToHungarian(defaults, $.extend(oInit, $this.data()), true);
      var allSettings = DataTable.settings;
      for (i = 0, iLen = allSettings.length; i < iLen; i++) {
        var s = allSettings[i];
        if (s.nTable == this || s.nTHead && s.nTHead.parentNode == this || s.nTFoot && s.nTFoot.parentNode == this) {
          var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;
          var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;
          if (emptyInit || bRetrieve) {
            return s.oInstance
          } else if (bDestroy) {
            new DataTable.Api(s).destroy();
            break
          } else {
            _fnLog(s, 0, "Cannot reinitialise DataTable", 3);
            return
          }
        }
        if (s.sTableId == this.id) {
          allSettings.splice(i, 1);
          break
        }
      }
      if (sId === null || sId === "") {
        sId = "DataTables_Table_" + DataTable.ext._unique++;
        this.id = sId
      }
      var oSettings = $.extend(true, {}, DataTable.models.oSettings, {
        sDestroyWidth: $this[0].style.width,
        sInstance: sId,
        sTableId: sId,
        colgroup: $("<colgroup>").prependTo(this),
        fastData: function(row, column, type) {
          return _fnGetCellData(oSettings, row, column, type)
        }
      });
      oSettings.nTable = this;
      oSettings.oInit = oInit;
      allSettings.push(oSettings);
      oSettings.api = new _Api(oSettings);
      oSettings.oInstance = _that.length === 1 ? _that : $this.dataTable();
      _fnCompatOpts(oInit);
      if (oInit.aLengthMenu && !oInit.iDisplayLength) {
        oInit.iDisplayLength = Array.isArray(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0][0] : $.isPlainObject(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0].value : oInit.aLengthMenu[0]
      }
      oInit = _fnExtend($.extend(true, {}, defaults), oInit);
      _fnMap(oSettings.oFeatures, oInit, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]);
      _fnMap(oSettings, oInit, ["ajax", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "iStateDuration", "bSortCellsTop", "iTabIndex", "sDom", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", "caption", "layout", "orderDescReverse", "typeDetect", ["iCookieDuration", "iStateDuration"],
        ["oSearch", "oPreviousSearch"],
        ["aoSearchCols", "aoPreSearchCols"],
        ["iDisplayLength", "_iDisplayLength"]
      ]);
      _fnMap(oSettings.oScroll, oInit, [
        ["sScrollX", "sX"],
        ["sScrollXInner", "sXInner"],
        ["sScrollY", "sY"],
        ["bScrollCollapse", "bCollapse"]
      ]);
      _fnMap(oSettings.oLanguage, oInit, "fnInfoCallback");
      _fnCallbackReg(oSettings, "aoDrawCallback", oInit.fnDrawCallback);
      _fnCallbackReg(oSettings, "aoStateSaveParams", oInit.fnStateSaveParams);
      _fnCallbackReg(oSettings, "aoStateLoadParams", oInit.fnStateLoadParams);
      _fnCallbackReg(oSettings, "aoStateLoaded", oInit.fnStateLoaded);
      _fnCallbackReg(oSettings, "aoRowCallback", oInit.fnRowCallback);
      _fnCallbackReg(oSettings, "aoRowCreatedCallback", oInit.fnCreatedRow);
      _fnCallbackReg(oSettings, "aoHeaderCallback", oInit.fnHeaderCallback);
      _fnCallbackReg(oSettings, "aoFooterCallback", oInit.fnFooterCallback);
      _fnCallbackReg(oSettings, "aoInitComplete", oInit.fnInitComplete);
      _fnCallbackReg(oSettings, "aoPreDrawCallback", oInit.fnPreDrawCallback);
      oSettings.rowIdFn = _fnGetObjectDataFn(oInit.rowId);
      _fnBrowserDetect(oSettings);
      var oClasses = oSettings.oClasses;
      $.extend(oClasses, DataTable.ext.classes, oInit.oClasses);
      $this.addClass(oClasses.table);
      if (!oSettings.oFeatures.bPaginate) {
        oInit.iDisplayStart = 0
      }
      if (oSettings.iInitDisplayStart === undefined) {
        oSettings.iInitDisplayStart = oInit.iDisplayStart;
        oSettings._iDisplayStart = oInit.iDisplayStart
      }
      var defer = oInit.iDeferLoading;
      if (defer !== null) {
        oSettings.deferLoading = true;
        var tmp = Array.isArray(defer);
        oSettings._iRecordsDisplay = tmp ? defer[0] : defer;
        oSettings._iRecordsTotal = tmp ? defer[1] : defer
      }
      var columnsInit = [];
      var thead = this.getElementsByTagName("thead");
      var initHeaderLayout = _fnDetectHeader(oSettings, thead[0]);
      if (oInit.aoColumns) {
        columnsInit = oInit.aoColumns
      } else if (initHeaderLayout.length) {
        for (i = 0, iLen = initHeaderLayout[0].length; i < iLen; i++) {
          columnsInit.push(null)
        }
      }
      for (i = 0, iLen = columnsInit.length; i < iLen; i++) {
        _fnAddColumn(oSettings)
      }
      _fnApplyColumnDefs(oSettings, oInit.aoColumnDefs, columnsInit, initHeaderLayout, function(iCol, oDef) {
        _fnColumnOptions(oSettings, iCol, oDef)
      });
      var rowOne = $this.children("tbody").find("tr").eq(0);
      if (rowOne.length) {
        var a = function(cell, name) {
          return cell.getAttribute("data-" + name) !== null ? name : null
        };
        $(rowOne[0]).children("th, td").each(function(i, cell) {
          var col = oSettings.aoColumns[i];
          if (!col) {
            _fnLog(oSettings, 0, "Incorrect column count", 18)
          }
          if (col.mData === i) {
            var sort = a(cell, "sort") || a(cell, "order");
            var filter = a(cell, "filter") || a(cell, "search");
            if (sort !== null || filter !== null) {
              col.mData = {
                _: i + ".display",
                sort: sort !== null ? i + ".@data-" + sort : undefined,
                type: sort !== null ? i + ".@data-" + sort : undefined,
                filter: filter !== null ? i + ".@data-" + filter : undefined
              };
              col._isArrayHost = true;
              _fnColumnOptions(oSettings, i)
            }
          }
        })
      }
      _fnCallbackReg(oSettings, "aoDrawCallback", _fnSaveState);
      var features = oSettings.oFeatures;
      if (oInit.bStateSave) {
        features.bStateSave = true
      }
      if (oInit.aaSorting === undefined) {
        var sorting = oSettings.aaSorting;
        for (i = 0, iLen = sorting.length; i < iLen; i++) {
          sorting[i][1] = oSettings.aoColumns[i].asSorting[0]
        }
      }
      _fnSortingClasses(oSettings);
      _fnCallbackReg(oSettings, "aoDrawCallback", function() {
        if (oSettings.bSorted || _fnDataSource(oSettings) === "ssp" || features.bDeferRender) {
          _fnSortingClasses(oSettings)
        }
      });
      var caption = $this.children("caption");
      if (oSettings.caption) {
        if (caption.length === 0) {
          caption = $("<caption/>").appendTo($this)
        }
        caption.html(oSettings.caption)
      }
      if (caption.length) {
        caption[0]._captionSide = caption.css("caption-side");
        oSettings.captionNode = caption[0]
      }
      if (thead.length === 0) {
        thead = $("<thead/>").appendTo($this)
      }
      oSettings.nTHead = thead[0];
      var tbody = $this.children("tbody");
      if (tbody.length === 0) {
        tbody = $("<tbody/>").insertAfter(thead)
      }
      oSettings.nTBody = tbody[0];
      var tfoot = $this.children("tfoot");
      if (tfoot.length === 0) {
        tfoot = $("<tfoot/>").appendTo($this)
      }
      oSettings.nTFoot = tfoot[0];
      oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
      oSettings.bInitialised = true;
      var oLanguage = oSettings.oLanguage;
      $.extend(true, oLanguage, oInit.oLanguage);
      if (oLanguage.sUrl) {
        $.ajax({
          dataType: "json",
          url: oLanguage.sUrl,
          success: function(json) {
            _fnCamelToHungarian(defaults.oLanguage, json);
            $.extend(true, oLanguage, json, oSettings.oInit.oLanguage);
            _fnCallbackFire(oSettings, null, "i18n", [oSettings], true);
            _fnInitialise(oSettings)
          },
          error: function() {
            _fnLog(oSettings, 0, "i18n file loading error", 21);
            _fnInitialise(oSettings)
          }
        })
      } else {
        _fnCallbackFire(oSettings, null, "i18n", [oSettings], true);
        _fnInitialise(oSettings)
      }
    });
    _that = null;
    return this
  };
  DataTable.ext = _ext = {
    buttons: {},
    classes: {},
    builder: "-source-",
    errMode: "alert",
    feature: [],
    features: {},
    search: [],
    selector: {
      cell: [],
      column: [],
      row: []
    },
    legacy: {
      ajax: null
    },
    pager: {},
    renderer: {
      pageButton: {},
      header: {}
    },
    order: {},
    type: {
      className: {},
      detect: [],
      render: {},
      search: {},
      order: {}
    },
    _unique: 0,
    fnVersionCheck: DataTable.fnVersionCheck,
    iApiIndex: 0,
    sVersion: DataTable.version
  };
  $.extend(_ext, {
    afnFiltering: _ext.search,
    aTypes: _ext.type.detect,
    ofnSearch: _ext.type.search,
    oSort: _ext.type.order,
    afnSortData: _ext.order,
    aoFeatures: _ext.feature,
    oStdClasses: _ext.classes,
    oPagination: _ext.pager
  });
  $.extend(DataTable.ext.classes, {
    container: "dt-container",
    empty: {
      row: "dt-empty"
    },
    info: {
      container: "dt-info"
    },
    layout: {
      row: "dt-layout-row",
      cell: "dt-layout-cell",
      tableRow: "dt-layout-table",
      tableCell: "",
      start: "dt-layout-start",
      end: "dt-layout-end",
      full: "dt-layout-full"
    },
    length: {
      container: "dt-length",
      select: "dt-input"
    },
    order: {
      canAsc: "dt-orderable-asc",
      canDesc: "dt-orderable-desc",
      isAsc: "dt-ordering-asc",
      isDesc: "dt-ordering-desc",
      none: "dt-orderable-none",
      position: "sorting_"
    },
    processing: {
      container: "dt-processing"
    },
    scrolling: {
      body: "dt-scroll-body",
      container: "dt-scroll",
      footer: {
        self: "dt-scroll-foot",
        inner: "dt-scroll-footInner"
      },
      header: {
        self: "dt-scroll-head",
        inner: "dt-scroll-headInner"
      }
    },
    search: {
      container: "dt-search",
      input: "dt-input"
    },
    table: "dataTable",
    tbody: {
      cell: "",
      row: ""
    },
    thead: {
      cell: "",
      row: ""
    },
    tfoot: {
      cell: "",
      row: ""
    },
    paging: {
      active: "current",
      button: "dt-paging-button",
      container: "dt-paging",
      disabled: "disabled",
      nav: ""
    }
  });
  var _ext;
  var _Api;
  var _api_register;
  var _api_registerPlural;
  var _re_dic = {};
  var _re_new_lines = /[\r\n\u2028]/g;
  var _re_html = /<([^>]*>)/g;
  var _max_str_len = Math.pow(2, 28);
  var _re_date = /^\d{2,4}[./-]\d{1,2}[./-]\d{1,2}([T ]{1}\d{1,2}[:.]\d{2}([.:]\d{2})?)?$/;
  var _re_escape_regex = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g");
  var _re_formatted_numeric = /['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi;
  var _empty = function(d) {
    return !d || d === true || d === "-" ? true : false
  };
  var _intVal = function(s) {
    var integer = parseInt(s, 10);
    return !isNaN(integer) && isFinite(s) ? integer : null
  };
  var _numToDecimal = function(num, decimalPoint) {
    if (!_re_dic[decimalPoint]) {
      _re_dic[decimalPoint] = new RegExp(_fnEscapeRegex(decimalPoint), "g")
    }
    return typeof num === "string" && decimalPoint !== "." ? num.replace(/\./g, "").replace(_re_dic[decimalPoint], ".") : num
  };
  var _isNumber = function(d, decimalPoint, formatted, allowEmpty) {
    var type = typeof d;
    var strType = type === "string";
    if (type === "number" || type === "bigint") {
      return true
    }
    if (allowEmpty && _empty(d)) {
      return true
    }
    if (decimalPoint && strType) {
      d = _numToDecimal(d, decimalPoint)
    }
    if (formatted && strType) {
      d = d.replace(_re_formatted_numeric, "")
    }
    return !isNaN(parseFloat(d)) && isFinite(d)
  };
  var _isHtml = function(d) {
    return _empty(d) || typeof d === "string"
  };
  var _htmlNumeric = function(d, decimalPoint, formatted, allowEmpty) {
    if (allowEmpty && _empty(d)) {
      return true
    }
    if (typeof d === "string" && d.match(/<(input|select)/i)) {
      return null
    }
    var html = _isHtml(d);
    return !html ? null : _isNumber(_stripHtml(d), decimalPoint, formatted, allowEmpty) ? true : null
  };
  var _pluck = function(a, prop, prop2) {
    var out = [];
    var i = 0,
      ien = a.length;
    if (prop2 !== undefined) {
      for (; i < ien; i++) {
        if (a[i] && a[i][prop]) {
          out.push(a[i][prop][prop2])
        }
      }
    } else {
      for (; i < ien; i++) {
        if (a[i]) {
          out.push(a[i][prop])
        }
      }
    }
    return out
  };
  var _pluck_order = function(a, order, prop, prop2) {
    var out = [];
    var i = 0,
      ien = order.length;
    if (prop2 !== undefined) {
      for (; i < ien; i++) {
        if (a[order[i]] && a[order[i]][prop]) {
          out.push(a[order[i]][prop][prop2])
        }
      }
    } else {
      for (; i < ien; i++) {
        if (a[order[i]]) {
          out.push(a[order[i]][prop])
        }
      }
    }
    return out
  };
  var _range = function(len, start) {
    var out = [];
    var end;
    if (start === undefined) {
      start = 0;
      end = len
    } else {
      end = start;
      start = len
    }
    for (var i = start; i < end; i++) {
      out.push(i)
    }
    return out
  };
  var _removeEmpty = function(a) {
    var out = [];
    for (var i = 0, ien = a.length; i < ien; i++) {
      if (a[i]) {
        out.push(a[i])
      }
    }
    return out
  };
  var _stripHtml = function(input) {
    if (!input || typeof input !== "string") {
      return input
    }
    if (input.length > _max_str_len) {
      throw new Error("Exceeded max str len")
    }
    var previous;
    input = input.replace(_re_html, "");
    do {
      previous = input;
      input = input.replace(/<script/i, "")
    } while (input !== previous);
    return previous
  };
  var _escapeHtml = function(d) {
    if (Array.isArray(d)) {
      d = d.join(",")
    }
    return typeof d === "string" ? d.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : d
  };
  var _normalize = function(str, both) {
    if (typeof str !== "string") {
      return str
    }
    var res = str.normalize ? str.normalize("NFD") : str;
    return res.length !== str.length ? (both === true ? str + " " : "") + res.replace(/[\u0300-\u036f]/g, "") : res
  };
  var _areAllUnique = function(src) {
    if (src.length < 2) {
      return true
    }
    var sorted = src.slice().sort();
    var last = sorted[0];
    for (var i = 1, ien = sorted.length; i < ien; i++) {
      if (sorted[i] === last) {
        return false
      }
      last = sorted[i]
    }
    return true
  };
  var _unique = function(src) {
    if (Array.from && Set) {
      return Array.from(new Set(src))
    }
    if (_areAllUnique(src)) {
      return src.slice()
    }
    var out = [],
      val, i, ien = src.length,
      j, k = 0;
    again: for (i = 0; i < ien; i++) {
      val = src[i];
      for (j = 0; j < k; j++) {
        if (out[j] === val) {
          continue again
        }
      }
      out.push(val);
      k++
    }
    return out
  };
  var _flatten = function(out, val) {
    if (Array.isArray(val)) {
      for (var i = 0; i < val.length; i++) {
        _flatten(out, val[i])
      }
    } else {
      out.push(val)
    }
    return out
  };

  function _addClass(el, name) {
    if (name) {
      name.split(" ").forEach(function(n) {
        if (n) {
          el.classList.add(n)
        }
      })
    }
  }
  DataTable.util = {
    diacritics: function(mixed, both) {
      var type = typeof mixed;
      if (type !== "function") {
        return _normalize(mixed, both)
      }
      _normalize = mixed
    },
    debounce: function(fn, timeout) {
      var timer;
      return function() {
        var that = this;
        var args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
          fn.apply(that, args)
        }, timeout || 250)
      }
    },
    throttle: function(fn, freq) {
      var frequency = freq !== undefined ? freq : 200,
        last, timer;
      return function() {
        var that = this,
          now = +new Date,
          args = arguments;
        if (last && now < last + frequency) {
          clearTimeout(timer);
          timer = setTimeout(function() {
            last = undefined;
            fn.apply(that, args)
          }, frequency)
        } else {
          last = now;
          fn.apply(that, args)
        }
      }
    },
    escapeRegex: function(val) {
      return val.replace(_re_escape_regex, "\\$1")
    },
    set: function(source) {
      if ($.isPlainObject(source)) {
        return DataTable.util.set(source._)
      } else if (source === null) {
        return function() {}
      } else if (typeof source === "function") {
        return function(data, val, meta) {
          source(data, "set", val, meta)
        }
      } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
        var setData = function(data, val, src) {
          var a = _fnSplitObjNotation(src),
            b;
          var aLast = a[a.length - 1];
          var arrayNotation, funcNotation, o, innerSrc;
          for (var i = 0, iLen = a.length - 1; i < iLen; i++) {
            if (a[i] === "__proto__" || a[i] === "constructor") {
              throw new Error("Cannot set prototype values")
            }
            arrayNotation = a[i].match(__reArray);
            funcNotation = a[i].match(__reFn);
            if (arrayNotation) {
              a[i] = a[i].replace(__reArray, "");
              data[a[i]] = [];
              b = a.slice();
              b.splice(0, i + 1);
              innerSrc = b.join(".");
              if (Array.isArray(val)) {
                for (var j = 0, jLen = val.length; j < jLen; j++) {
                  o = {};
                  setData(o, val[j], innerSrc);
                  data[a[i]].push(o)
                }
              } else {
                data[a[i]] = val
              }
              return
            } else if (funcNotation) {
              a[i] = a[i].replace(__reFn, "");
              data = data[a[i]](val)
            }
            if (data[a[i]] === null || data[a[i]] === undefined) {
              data[a[i]] = {}
            }
            data = data[a[i]]
          }
          if (aLast.match(__reFn)) {
            data = data[aLast.replace(__reFn, "")](val)
          } else {
            data[aLast.replace(__reArray, "")] = val
          }
        };
        return function(data, val) {
          return setData(data, val, source)
        }
      } else {
        return function(data, val) {
          data[source] = val
        }
      }
    },
    get: function(source) {
      if ($.isPlainObject(source)) {
        var o = {};
        $.each(source, function(key, val) {
          if (val) {
            o[key] = DataTable.util.get(val)
          }
        });
        return function(data, type, row, meta) {
          var t = o[type] || o._;
          return t !== undefined ? t(data, type, row, meta) : data
        }
      } else if (source === null) {
        return function(data) {
          return data
        }
      } else if (typeof source === "function") {
        return function(data, type, row, meta) {
          return source(data, type, row, meta)
        }
      } else if (typeof source === "string" && (source.indexOf(".") !== -1 || source.indexOf("[") !== -1 || source.indexOf("(") !== -1)) {
        var fetchData = function(data, type, src) {
          var arrayNotation, funcNotation, out, innerSrc;
          if (src !== "") {
            var a = _fnSplitObjNotation(src);
            for (var i = 0, iLen = a.length; i < iLen; i++) {
              arrayNotation = a[i].match(__reArray);
              funcNotation = a[i].match(__reFn);
              if (arrayNotation) {
                a[i] = a[i].replace(__reArray, "");
                if (a[i] !== "") {
                  data = data[a[i]]
                }
                out = [];
                a.splice(0, i + 1);
                innerSrc = a.join(".");
                if (Array.isArray(data)) {
                  for (var j = 0, jLen = data.length; j < jLen; j++) {
                    out.push(fetchData(data[j], type, innerSrc))
                  }
                }
                var join = arrayNotation[0].substring(1, arrayNotation[0].length - 1);
                data = join === "" ? out : out.join(join);
                break
              } else if (funcNotation) {
                a[i] = a[i].replace(__reFn, "");
                data = data[a[i]]();
                continue
              }
              if (data === null || data[a[i]] === null) {
                return null
              } else if (data === undefined || data[a[i]] === undefined) {
                return undefined
              }
              data = data[a[i]]
            }
          }
          return data
        };
        return function(data, type) {
          return fetchData(data, type, source)
        }
      } else {
        return function(data) {
          return data[source]
        }
      }
    },
    stripHtml: function(mixed) {
      var type = typeof mixed;
      if (type === "function") {
        _stripHtml = mixed;
        return
      } else if (type === "string") {
        return _stripHtml(mixed)
      }
      return mixed
    },
    escapeHtml: function(mixed) {
      var type = typeof mixed;
      if (type === "function") {
        _escapeHtml = mixed;
        return
      } else if (type === "string" || Array.isArray(mixed)) {
        return _escapeHtml(mixed)
      }
      return mixed
    },
    unique: _unique
  };

  function _fnHungarianMap(o) {
    var hungarian = "a aa ai ao as b fn i m o s ",
      match, newKey, map = {};
    $.each(o, function(key) {
      match = key.match(/^([^A-Z]+?)([A-Z])/);
      if (match && hungarian.indexOf(match[1] + " ") !== -1) {
        newKey = key.replace(match[0], match[2].toLowerCase());
        map[newKey] = key;
        if (match[1] === "o") {
          _fnHungarianMap(o[key])
        }
      }
    });
    o._hungarianMap = map
  }

  function _fnCamelToHungarian(src, user, force) {
    if (!src._hungarianMap) {
      _fnHungarianMap(src)
    }
    var hungarianKey;
    $.each(user, function(key) {
      hungarianKey = src._hungarianMap[key];
      if (hungarianKey !== undefined && (force || user[hungarianKey] === undefined)) {
        if (hungarianKey.charAt(0) === "o") {
          if (!user[hungarianKey]) {
            user[hungarianKey] = {}
          }
          $.extend(true, user[hungarianKey], user[key]);
          _fnCamelToHungarian(src[hungarianKey], user[hungarianKey], force)
        } else {
          user[hungarianKey] = user[key]
        }
      }
    })
  }
  var _fnCompatMap = function(o, knew, old) {
    if (o[knew] !== undefined) {
      o[old] = o[knew]
    }
  };

  function _fnCompatOpts(init) {
    _fnCompatMap(init, "ordering", "bSort");
    _fnCompatMap(init, "orderMulti", "bSortMulti");
    _fnCompatMap(init, "orderClasses", "bSortClasses");
    _fnCompatMap(init, "orderCellsTop", "bSortCellsTop");
    _fnCompatMap(init, "order", "aaSorting");
    _fnCompatMap(init, "orderFixed", "aaSortingFixed");
    _fnCompatMap(init, "paging", "bPaginate");
    _fnCompatMap(init, "pagingType", "sPaginationType");
    _fnCompatMap(init, "pageLength", "iDisplayLength");
    _fnCompatMap(init, "searching", "bFilter");
    if (typeof init.sScrollX === "boolean") {
      init.sScrollX = init.sScrollX ? "100%" : ""
    }
    if (typeof init.scrollX === "boolean") {
      init.scrollX = init.scrollX ? "100%" : ""
    }
    var searchCols = init.aoSearchCols;
    if (searchCols) {
      for (var i = 0, ien = searchCols.length; i < ien; i++) {
        if (searchCols[i]) {
          _fnCamelToHungarian(DataTable.models.oSearch, searchCols[i])
        }
      }
    }
    if (init.serverSide && !init.searchDelay) {
      init.searchDelay = 400
    }
  }

  function _fnCompatCols(init) {
    _fnCompatMap(init, "orderable", "bSortable");
    _fnCompatMap(init, "orderData", "aDataSort");
    _fnCompatMap(init, "orderSequence", "asSorting");
    _fnCompatMap(init, "orderDataType", "sortDataType");
    var dataSort = init.aDataSort;
    if (typeof dataSort === "number" && !Array.isArray(dataSort)) {
      init.aDataSort = [dataSort]
    }
  }

  function _fnBrowserDetect(settings) {
    if (!DataTable.__browser) {
      var browser = {};
      DataTable.__browser = browser;
      var n = $("<div/>").css({
        position: "fixed",
        top: 0,
        left: -1 * window.pageXOffset,
        height: 1,
        width: 1,
        overflow: "hidden"
      }).append($("<div/>").css({
        position: "absolute",
        top: 1,
        left: 1,
        width: 100,
        overflow: "scroll"
      }).append($("<div/>").css({
        width: "100%",
        height: 10
      }))).appendTo("body");
      var outer = n.children();
      var inner = outer.children();
      browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;
      browser.bScrollbarLeft = Math.round(inner.offset().left) !== 1;
      n.remove()
    }
    $.extend(settings.oBrowser, DataTable.__browser);
    settings.oScroll.iBarWidth = DataTable.__browser.barWidth
  }

  function _fnAddColumn(oSettings) {
    var oDefaults = DataTable.defaults.column;
    var iCol = oSettings.aoColumns.length;
    var oCol = $.extend({}, DataTable.models.oColumn, oDefaults, {
      aDataSort: oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
      mData: oDefaults.mData ? oDefaults.mData : iCol,
      idx: iCol,
      searchFixed: {},
      colEl: $("<col>").attr("data-dt-column", iCol)
    });
    oSettings.aoColumns.push(oCol);
    var searchCols = oSettings.aoPreSearchCols;
    searchCols[iCol] = $.extend({}, DataTable.models.oSearch, searchCols[iCol])
  }

  function _fnColumnOptions(oSettings, iCol, oOptions) {
    var oCol = oSettings.aoColumns[iCol];
    if (oOptions !== undefined && oOptions !== null) {
      _fnCompatCols(oOptions);
      _fnCamelToHungarian(DataTable.defaults.column, oOptions, true);
      if (oOptions.mDataProp !== undefined && !oOptions.mData) {
        oOptions.mData = oOptions.mDataProp
      }
      if (oOptions.sType) {
        oCol._sManualType = oOptions.sType
      }
      if (oOptions.className && !oOptions.sClass) {
        oOptions.sClass = oOptions.className
      }
      var origClass = oCol.sClass;
      $.extend(oCol, oOptions);
      _fnMap(oCol, oOptions, "sWidth", "sWidthOrig");
      if (origClass !== oCol.sClass) {
        oCol.sClass = origClass + " " + oCol.sClass
      }
      if (oOptions.iDataSort !== undefined) {
        oCol.aDataSort = [oOptions.iDataSort]
      }
      _fnMap(oCol, oOptions, "aDataSort")
    }
    var mDataSrc = oCol.mData;
    var mData = _fnGetObjectDataFn(mDataSrc);
    if (oCol.mRender && Array.isArray(oCol.mRender)) {
      var copy = oCol.mRender.slice();
      var name = copy.shift();
      oCol.mRender = DataTable.render[name].apply(window, copy)
    }
    oCol._render = oCol.mRender ? _fnGetObjectDataFn(oCol.mRender) : null;
    var attrTest = function(src) {
      return typeof src === "string" && src.indexOf("@") !== -1
    };
    oCol._bAttrSrc = $.isPlainObject(mDataSrc) && (attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter));
    oCol._setter = null;
    oCol.fnGetData = function(rowData, type, meta) {
      var innerData = mData(rowData, type, undefined, meta);
      return oCol._render && type ? oCol._render(innerData, type, rowData, meta) : innerData
    };
    oCol.fnSetData = function(rowData, val, meta) {
      return _fnSetObjectDataFn(mDataSrc)(rowData, val, meta)
    };
    if (typeof mDataSrc !== "number" && !oCol._isArrayHost) {
      oSettings._rowReadObject = true
    }
    if (!oSettings.oFeatures.bSort) {
      oCol.bSortable = false
    }
  }

  function _fnAdjustColumnSizing(settings) {
    _fnCalculateColumnWidths(settings);
    _fnColumnSizes(settings);
    var scroll = settings.oScroll;
    if (scroll.sY !== "" || scroll.sX !== "") {
      _fnScrollDraw(settings)
    }
    _fnCallbackFire(settings, null, "column-sizing", [settings])
  }

  function _fnColumnSizes(settings) {
    var cols = settings.aoColumns;
    for (var i = 0; i < cols.length; i++) {
      var width = _fnColumnsSumWidth(settings, [i], false, false);
      cols[i].colEl.css("width", width);
      if (settings.oScroll.sX) {
        cols[i].colEl.css("min-width", width)
      }
    }
  }

  function _fnVisibleToColumnIndex(oSettings, iMatch) {
    var aiVis = _fnGetColumns(oSettings, "bVisible");
    return typeof aiVis[iMatch] === "number" ? aiVis[iMatch] : null
  }

  function _fnColumnIndexToVisible(oSettings, iMatch) {
    var aiVis = _fnGetColumns(oSettings, "bVisible");
    var iPos = aiVis.indexOf(iMatch);
    return iPos !== -1 ? iPos : null
  }

  function _fnVisbleColumns(settings) {
    var layout = settings.aoHeader;
    var columns = settings.aoColumns;
    var vis = 0;
    if (layout.length) {
      for (var i = 0, ien = layout[0].length; i < ien; i++) {
        if (columns[i].bVisible && $(layout[0][i].cell).css("display") !== "none") {
          vis++
        }
      }
    }
    return vis
  }

  function _fnGetColumns(oSettings, sParam) {
    var a = [];
    oSettings.aoColumns.map(function(val, i) {
      if (val[sParam]) {
        a.push(i)
      }
    });
    return a
  }

  function _typeResult(typeDetect, res) {
    return res === true ? typeDetect._name : res
  }

  function _fnColumnTypes(settings) {
    var columns = settings.aoColumns;
    var data = settings.aoData;
    var types = DataTable.ext.type.detect;
    var i, ien, j, jen, k, ken;
    var col, detectedType, cache;
    for (i = 0, ien = columns.length; i < ien; i++) {
      col = columns[i];
      cache = [];
      if (!col.sType && col._sManualType) {
        col.sType = col._sManualType
      } else if (!col.sType) {
        if (!settings.typeDetect) {
          return
        }
        for (j = 0, jen = types.length; j < jen; j++) {
          var typeDetect = types[j];
          var oneOf = typeDetect.oneOf;
          var allOf = typeDetect.allOf || typeDetect;
          var init = typeDetect.init;
          var one = false;
          detectedType = null;
          if (init) {
            detectedType = _typeResult(typeDetect, init(settings, col, i));
            if (detectedType) {
              col.sType = detectedType;
              break
            }
          }
          for (k = 0, ken = data.length; k < ken; k++) {
            if (!data[k]) {
              continue
            }
            if (cache[k] === undefined) {
              cache[k] = _fnGetCellData(settings, k, i, "type")
            }
            if (oneOf && !one) {
              one = _typeResult(typeDetect, oneOf(cache[k], settings))
            }
            detectedType = _typeResult(typeDetect, allOf(cache[k], settings));
            if (!detectedType && j !== types.length - 3) {
              break
            }
            if (detectedType === "html" && !_empty(cache[k])) {
              break
            }
          }
          if (oneOf && one && detectedType || !oneOf && detectedType) {
            col.sType = detectedType;
            break
          }
        }
        if (!col.sType) {
          col.sType = "string"
        }
      }
      var autoClass = _ext.type.className[col.sType];
      if (autoClass) {
        _columnAutoClass(settings.aoHeader, i, autoClass);
        _columnAutoClass(settings.aoFooter, i, autoClass)
      }
      var renderer = _ext.type.render[col.sType];
      if (renderer && !col._render) {
        col._render = DataTable.util.get(renderer);
        _columnAutoRender(settings, i)
      }
    }
  }

  function _columnAutoRender(settings, colIdx) {
    var data = settings.aoData;
    for (var i = 0; i < data.length; i++) {
      if (data[i].nTr) {
        var display = _fnGetCellData(settings, i, colIdx, "display");
        data[i].displayData[colIdx] = display;
        _fnWriteCell(data[i].anCells[colIdx], display)
      }
    }
  }

  function _columnAutoClass(container, colIdx, className) {
    container.forEach(function(row) {
      if (row[colIdx] && row[colIdx].unique) {
        _addClass(row[colIdx].cell, className)
      }
    })
  }

  function _fnApplyColumnDefs(oSettings, aoColDefs, aoCols, headerLayout, fn) {
    var i, iLen, j, jLen, k, kLen, def;
    var columns = oSettings.aoColumns;
    if (aoCols) {
      for (i = 0, iLen = aoCols.length; i < iLen; i++) {
        if (aoCols[i] && aoCols[i].name) {
          columns[i].sName = aoCols[i].name
        }
      }
    }
    if (aoColDefs) {
      for (i = aoColDefs.length - 1; i >= 0; i--) {
        def = aoColDefs[i];
        var aTargets = def.target !== undefined ? def.target : def.targets !== undefined ? def.targets : def.aTargets;
        if (!Array.isArray(aTargets)) {
          aTargets = [aTargets]
        }
        for (j = 0, jLen = aTargets.length; j < jLen; j++) {
          var target = aTargets[j];
          if (typeof target === "number" && target >= 0) {
            while (columns.length <= target) {
              _fnAddColumn(oSettings)
            }
            fn(target, def)
          } else if (typeof target === "number" && target < 0) {
            fn(columns.length + target, def)
          } else if (typeof target === "string") {
            for (k = 0, kLen = columns.length; k < kLen; k++) {
              if (target === "_all") {
                fn(k, def)
              } else if (target.indexOf(":name") !== -1) {
                if (columns[k].sName === target.replace(":name", "")) {
                  fn(k, def)
                }
              } else {
                headerLayout.forEach(function(row) {
                  if (row[k]) {
                    var cell = $(row[k].cell);
                    if (target.match(/^[a-z][\w-]*$/i)) {
                      target = "." + target
                    }
                    if (cell.is(target)) {
                      fn(k, def)
                    }
                  }
                })
              }
            }
          }
        }
      }
    }
    if (aoCols) {
      for (i = 0, iLen = aoCols.length; i < iLen; i++) {
        fn(i, aoCols[i])
      }
    }
  }

  function _fnColumnsSumWidth(settings, targets, original, incVisible) {
    if (!Array.isArray(targets)) {
      targets = _fnColumnsFromHeader(targets)
    }
    var sum = 0;
    var unit;
    var columns = settings.aoColumns;
    for (var i = 0, ien = targets.length; i < ien; i++) {
      var column = columns[targets[i]];
      var definedWidth = original ? column.sWidthOrig : column.sWidth;
      if (!incVisible && column.bVisible === false) {
        continue
      }
      if (definedWidth === null || definedWidth === undefined) {
        return null
      } else if (typeof definedWidth === "number") {
        unit = "px";
        sum += definedWidth
      } else {
        var matched = definedWidth.match(/([\d\.]+)([^\d]*)/);
        if (matched) {
          sum += matched[1] * 1;
          unit = matched.length === 3 ? matched[2] : "px"
        }
      }
    }
    return sum + unit
  }

  function _fnColumnsFromHeader(cell) {
    var attr = $(cell).closest("[data-dt-column]").attr("data-dt-column");
    if (!attr) {
      return []
    }
    return attr.split(",").map(function(val) {
      return val * 1
    })
  }

  function _fnAddData(settings, dataIn, tr, tds) {
    var rowIdx = settings.aoData.length;
    var rowModel = $.extend(true, {}, DataTable.models.oRow, {
      src: tr ? "dom" : "data",
      idx: rowIdx
    });
    rowModel._aData = dataIn;
    settings.aoData.push(rowModel);
    var columns = settings.aoColumns;
    for (var i = 0, iLen = columns.length; i < iLen; i++) {
      columns[i].sType = null
    }
    settings.aiDisplayMaster.push(rowIdx);
    var id = settings.rowIdFn(dataIn);
    if (id !== undefined) {
      settings.aIds[id] = rowModel
    }
    if (tr || !settings.oFeatures.bDeferRender) {
      _fnCreateTr(settings, rowIdx, tr, tds)
    }
    return rowIdx
  }

  function _fnAddTr(settings, trs) {
    var row;
    if (!(trs instanceof $)) {
      trs = $(trs)
    }
    return trs.map(function(i, el) {
      row = _fnGetRowElements(settings, el);
      return _fnAddData(settings, row.data, el, row.cells)
    })
  }

  function _fnGetCellData(settings, rowIdx, colIdx, type) {
    if (type === "search") {
      type = "filter"
    } else if (type === "order") {
      type = "sort"
    }
    var row = settings.aoData[rowIdx];
    if (!row) {
      return undefined
    }
    var draw = settings.iDraw;
    var col = settings.aoColumns[colIdx];
    var rowData = row._aData;
    var defaultContent = col.sDefaultContent;
    var cellData = col.fnGetData(rowData, type, {
      settings: settings,
      row: rowIdx,
      col: colIdx
    });
    if (type !== "display" && cellData && typeof cellData === "object" && cellData.nodeName) {
      cellData = cellData.innerHTML
    }
    if (cellData === undefined) {
      if (settings.iDrawError != draw && defaultContent === null) {
        _fnLog(settings, 0, "Requested unknown parameter " + (typeof col.mData == "function" ? "{function}" : "'" + col.mData + "'") + " for row " + rowIdx + ", column " + colIdx, 4);
        settings.iDrawError = draw
      }
      return defaultContent
    }
    if ((cellData === rowData || cellData === null) && defaultContent !== null && type !== undefined) {
      cellData = defaultContent
    } else if (typeof cellData === "function") {
      return cellData.call(rowData)
    }
    if (cellData === null && type === "display") {
      return ""
    }
    if (type === "filter") {
      var fomatters = DataTable.ext.type.search;
      if (fomatters[col.sType]) {
        cellData = fomatters[col.sType](cellData)
      }
    }
    return cellData
  }

  function _fnSetCellData(settings, rowIdx, colIdx, val) {
    var col = settings.aoColumns[colIdx];
    var rowData = settings.aoData[rowIdx]._aData;
    col.fnSetData(rowData, val, {
      settings: settings,
      row: rowIdx,
      col: colIdx
    })
  }

  function _fnWriteCell(td, val) {
    if (val && typeof val === "object" && val.nodeName) {
      $(td).empty().append(val)
    } else {
      td.innerHTML = val
    }
  }
  var __reArray = /\[.*?\]$/;
  var __reFn = /\(\)$/;

  function _fnSplitObjNotation(str) {
    var parts = str.match(/(\\.|[^.])+/g) || [""];
    return parts.map(function(s) {
      return s.replace(/\\\./g, ".")
    })
  }
  var _fnGetObjectDataFn = DataTable.util.get;
  var _fnSetObjectDataFn = DataTable.util.set;

  function _fnGetDataMaster(settings) {
    return _pluck(settings.aoData, "_aData")
  }

  function _fnClearTable(settings) {
    settings.aoData.length = 0;
    settings.aiDisplayMaster.length = 0;
    settings.aiDisplay.length = 0;
    settings.aIds = {}
  }

  function _fnInvalidate(settings, rowIdx, src, colIdx) {
    var row = settings.aoData[rowIdx];
    var i, ien;
    row._aSortData = null;
    row._aFilterData = null;
    row.displayData = null;
    if (src === "dom" || (!src || src === "auto") && row.src === "dom") {
      row._aData = _fnGetRowElements(settings, row, colIdx, colIdx === undefined ? undefined : row._aData).data
    } else {
      var cells = row.anCells;
      var display = _fnGetRowDisplay(settings, rowIdx);
      if (cells) {
        if (colIdx !== undefined) {
          _fnWriteCell(cells[colIdx], display[colIdx])
        } else {
          for (i = 0, ien = cells.length; i < ien; i++) {
            _fnWriteCell(cells[i], display[i])
          }
        }
      }
    }
    var cols = settings.aoColumns;
    if (colIdx !== undefined) {
      cols[colIdx].sType = null;
      cols[colIdx].maxLenString = null
    } else {
      for (i = 0, ien = cols.length; i < ien; i++) {
        cols[i].sType = null;
        cols[i].maxLenString = null
      }
      _fnRowAttributes(settings, row)
    }
  }

  function _fnGetRowElements(settings, row, colIdx, d) {
    var tds = [],
      td = row.firstChild,
      name, col, i = 0,
      contents, columns = settings.aoColumns,
      objectRead = settings._rowReadObject;
    d = d !== undefined ? d : objectRead ? {} : [];
    var attr = function(str, td) {
      if (typeof str === "string") {
        var idx = str.indexOf("@");
        if (idx !== -1) {
          var attr = str.substring(idx + 1);
          var setter = _fnSetObjectDataFn(str);
          setter(d, td.getAttribute(attr))
        }
      }
    };
    var cellProcess = function(cell) {
      if (colIdx === undefined || colIdx === i) {
        col = columns[i];
        contents = cell.innerHTML.trim();
        if (col && col._bAttrSrc) {
          var setter = _fnSetObjectDataFn(col.mData._);
          setter(d, contents);
          attr(col.mData.sort, cell);
          attr(col.mData.type, cell);
          attr(col.mData.filter, cell)
        } else {
          if (objectRead) {
            if (!col._setter) {
              col._setter = _fnSetObjectDataFn(col.mData)
            }
            col._setter(d, contents)
          } else {
            d[i] = contents
          }
        }
      }
      i++
    };
    if (td) {
      while (td) {
        name = td.nodeName.toUpperCase();
        if (name == "TD" || name == "TH") {
          cellProcess(td);
          tds.push(td)
        }
        td = td.nextSibling
      }
    } else {
      tds = row.anCells;
      for (var j = 0, jen = tds.length; j < jen; j++) {
        cellProcess(tds[j])
      }
    }
    var rowNode = row.firstChild ? row : row.nTr;
    if (rowNode) {
      var id = rowNode.getAttribute("id");
      if (id) {
        _fnSetObjectDataFn(settings.rowId)(d, id)
      }
    }
    return {
      data: d,
      cells: tds
    }
  }

  function _fnGetRowDisplay(settings, rowIdx) {
    var rowModal = settings.aoData[rowIdx];
    var columns = settings.aoColumns;
    if (!rowModal.displayData) {
      rowModal.displayData = [];
      for (var colIdx = 0, len = columns.length; colIdx < len; colIdx++) {
        rowModal.displayData.push(_fnGetCellData(settings, rowIdx, colIdx, "display"))
      }
    }
    return rowModal.displayData
  }

  function _fnCreateTr(oSettings, iRow, nTrIn, anTds) {
    var row = oSettings.aoData[iRow],
      rowData = row._aData,
      cells = [],
      nTr, nTd, oCol, i, iLen, create, trClass = oSettings.oClasses.tbody.row;
    if (row.nTr === null) {
      nTr = nTrIn || document.createElement("tr");
      row.nTr = nTr;
      row.anCells = cells;
      _addClass(nTr, trClass);
      nTr._DT_RowIndex = iRow;
      _fnRowAttributes(oSettings, row);
      for (i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
        oCol = oSettings.aoColumns[i];
        create = nTrIn && anTds[i] ? false : true;
        nTd = create ? document.createElement(oCol.sCellType) : anTds[i];
        if (!nTd) {
          _fnLog(oSettings, 0, "Incorrect column count", 18)
        }
        nTd._DT_CellIndex = {
          row: iRow,
          column: i
        };
        cells.push(nTd);
        var display = _fnGetRowDisplay(oSettings, iRow);
        if (create || (oCol.mRender || oCol.mData !== i) && (!$.isPlainObject(oCol.mData) || oCol.mData._ !== i + ".display")) {
          _fnWriteCell(nTd, display[i])
        }
        _addClass(nTd, oCol.sClass);
        if (oCol.bVisible && create) {
          nTr.appendChild(nTd)
        } else if (!oCol.bVisible && !create) {
          nTd.parentNode.removeChild(nTd)
        }
        if (oCol.fnCreatedCell) {
          oCol.fnCreatedCell.call(oSettings.oInstance, nTd, _fnGetCellData(oSettings, iRow, i), rowData, iRow, i)
        }
      }
      _fnCallbackFire(oSettings, "aoRowCreatedCallback", "row-created", [nTr, rowData, iRow, cells])
    } else {
      _addClass(row.nTr, trClass)
    }
  }

  function _fnRowAttributes(settings, row) {
    var tr = row.nTr;
    var data = row._aData;
    if (tr) {
      var id = settings.rowIdFn(data);
      if (id) {
        tr.id = id
      }
      if (data.DT_RowClass) {
        var a = data.DT_RowClass.split(" ");
        row.__rowc = row.__rowc ? _unique(row.__rowc.concat(a)) : a;
        $(tr).removeClass(row.__rowc.join(" ")).addClass(data.DT_RowClass)
      }
      if (data.DT_RowAttr) {
        $(tr).attr(data.DT_RowAttr)
      }
      if (data.DT_RowData) {
        $(tr).data(data.DT_RowData)
      }
    }
  }

  function _fnBuildHead(settings, side) {
    var classes = settings.oClasses;
    var columns = settings.aoColumns;
    var i, ien, row;
    var target = side === "header" ? settings.nTHead : settings.nTFoot;
    var titleProp = side === "header" ? "sTitle" : side;
    if (!target) {
      return
    }
    if (side === "header" || _pluck(settings.aoColumns, titleProp).join("")) {
      row = $("tr", target);
      if (!row.length) {
        row = $("<tr/>").appendTo(target)
      }
      if (row.length === 1) {
        var cellCount = 0;
        $("td, th", row).each(function() {
          cellCount += this.colSpan
        });
        for (i = cellCount, ien = columns.length; i < ien; i++) {
          $("<th/>").html(columns[i][titleProp] || "").appendTo(row)
        }
      }
    }
    var detected = _fnDetectHeader(settings, target, true);
    if (side === "header") {
      settings.aoHeader = detected;
      $("tr", target).addClass(classes.thead.row)
    } else {
      settings.aoFooter = detected;
      $("tr", target).addClass(classes.tfoot.row)
    }
    $(target).children("tr").children("th, td").each(function() {
      _fnRenderer(settings, side)(settings, $(this), classes)
    })
  }

  function _fnHeaderLayout(settings, source, incColumns) {
    var row, column, cell;
    var local = [];
    var structure = [];
    var columns = settings.aoColumns;
    var columnCount = columns.length;
    var rowspan, colspan;
    if (!source) {
      return
    }
    if (!incColumns) {
      incColumns = _range(columnCount).filter(function(idx) {
        return columns[idx].bVisible
      })
    }
    for (row = 0; row < source.length; row++) {
      local[row] = source[row].slice().filter(function(cell, i) {
        return incColumns.includes(i)
      });
      structure.push([])
    }
    for (row = 0; row < local.length; row++) {
      for (column = 0; column < local[row].length; column++) {
        rowspan = 1;
        colspan = 1;
        if (structure[row][column] === undefined) {
          cell = local[row][column].cell;
          while (local[row + rowspan] !== undefined && local[row][column].cell == local[row + rowspan][column].cell) {
            structure[row + rowspan][column] = null;
            rowspan++
          }
          while (local[row][column + colspan] !== undefined && local[row][column].cell == local[row][column + colspan].cell) {
            for (var k = 0; k < rowspan; k++) {
              structure[row + k][column + colspan] = null
            }
            colspan++
          }
          var titleSpan = $("span.dt-column-title", cell);
          structure[row][column] = {
            cell: cell,
            colspan: colspan,
            rowspan: rowspan,
            title: titleSpan.length ? titleSpan.html() : $(cell).html()
          }
        }
      }
    }
    return structure
  }

  function _fnDrawHead(settings, source) {
    var layout = _fnHeaderLayout(settings, source);
    var tr, n;
    for (var row = 0; row < source.length; row++) {
      tr = source[row].row;
      if (tr) {
        while (n = tr.firstChild) {
          tr.removeChild(n)
        }
      }
      for (var column = 0; column < layout[row].length; column++) {
        var point = layout[row][column];
        if (point) {
          $(point.cell).appendTo(tr).attr("rowspan", point.rowspan).attr("colspan", point.colspan)
        }
      }
    }
  }

  function _fnDraw(oSettings, ajaxComplete) {
    _fnStart(oSettings);
    var aPreDraw = _fnCallbackFire(oSettings, "aoPreDrawCallback", "preDraw", [oSettings]);
    if (aPreDraw.indexOf(false) !== -1) {
      _fnProcessingDisplay(oSettings, false);
      return
    }
    var anRows = [];
    var iRowCount = 0;
    var bServerSide = _fnDataSource(oSettings) == "ssp";
    var aiDisplay = oSettings.aiDisplay;
    var iDisplayStart = oSettings._iDisplayStart;
    var iDisplayEnd = oSettings.fnDisplayEnd();
    var columns = oSettings.aoColumns;
    var body = $(oSettings.nTBody);
    oSettings.bDrawing = true;
    if (oSettings.deferLoading) {
      oSettings.deferLoading = false;
      oSettings.iDraw++;
      _fnProcessingDisplay(oSettings, false)
    } else if (!bServerSide) {
      oSettings.iDraw++
    } else if (!oSettings.bDestroying && !ajaxComplete) {
      if (oSettings.iDraw === 0) {
        body.empty().append(_emptyRow(oSettings))
      }
      _fnAjaxUpdate(oSettings);
      return
    }
    if (aiDisplay.length !== 0) {
      var iStart = bServerSide ? 0 : iDisplayStart;
      var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;
      for (var j = iStart; j < iEnd; j++) {
        var iDataIndex = aiDisplay[j];
        var aoData = oSettings.aoData[iDataIndex];
        if (aoData.nTr === null) {
          _fnCreateTr(oSettings, iDataIndex)
        }
        var nRow = aoData.nTr;
        for (var i = 0; i < columns.length; i++) {
          var col = columns[i];
          var td = aoData.anCells[i];
          _addClass(td, _ext.type.className[col.sType]);
          _addClass(td, oSettings.oClasses.tbody.cell)
        }
        _fnCallbackFire(oSettings, "aoRowCallback", null, [nRow, aoData._aData, iRowCount, j, iDataIndex]);
        anRows.push(nRow);
        iRowCount++
      }
    } else {
      anRows[0] = _emptyRow(oSettings)
    }
    _fnCallbackFire(oSettings, "aoHeaderCallback", "header", [$(oSettings.nTHead).children("tr")[0], _fnGetDataMaster(oSettings), iDisplayStart, iDisplayEnd, aiDisplay]);
    _fnCallbackFire(oSettings, "aoFooterCallback", "footer", [$(oSettings.nTFoot).children("tr")[0], _fnGetDataMaster(oSettings), iDisplayStart, iDisplayEnd, aiDisplay]);
    if (body[0].replaceChildren) {
      body[0].replaceChildren.apply(body[0], anRows)
    } else {
      body.children().detach();
      body.append($(anRows))
    }
    $(oSettings.nTableWrapper).toggleClass("dt-empty-footer", $("tr", oSettings.nTFoot).length === 0);
    _fnCallbackFire(oSettings, "aoDrawCallback", "draw", [oSettings], true);
    oSettings.bSorted = false;
    oSettings.bFiltered = false;
    oSettings.bDrawing = false
  }

  function _fnReDraw(settings, holdPosition, recompute) {
    var features = settings.oFeatures,
      sort = features.bSort,
      filter = features.bFilter;
    if (recompute === undefined || recompute === true) {
      _fnColumnTypes(settings);
      if (sort) {
        _fnSort(settings)
      }
      if (filter) {
        _fnFilterComplete(settings, settings.oPreviousSearch)
      } else {
        settings.aiDisplay = settings.aiDisplayMaster.slice()
      }
    }
    if (holdPosition !== true) {
      settings._iDisplayStart = 0
    }
    settings._drawHold = holdPosition;
    _fnDraw(settings);
    settings._drawHold = false
  }

  function _emptyRow(settings) {
    var oLang = settings.oLanguage;
    var zero = oLang.sZeroRecords;
    var dataSrc = _fnDataSource(settings);
    if (settings.iDraw < 1 && dataSrc === "ssp" || settings.iDraw <= 1 && dataSrc === "ajax") {
      zero = oLang.sLoadingRecords
    } else if (oLang.sEmptyTable && settings.fnRecordsTotal() === 0) {
      zero = oLang.sEmptyTable
    }
    return $("<tr/>").append($("<td />", {
      colSpan: _fnVisbleColumns(settings),
      class: settings.oClasses.empty.row
    }).html(zero))[0]
  }

  function _layoutItems(row, align, items) {
    if (Array.isArray(items)) {
      for (var i = 0; i < items.length; i++) {
        _layoutItems(row, align, items[i])
      }
      return
    }
    var rowCell = row[align];
    if ($.isPlainObject(items)) {
      if (items.features) {
        if (items.rowId) {
          row.id = items.rowId
        }
        if (items.rowClass) {
          row.className = items.rowClass
        }
        rowCell.id = items.id;
        rowCell.className = items.className;
        _layoutItems(row, align, items.features)
      } else {
        Object.keys(items).map(function(key) {
          rowCell.contents.push({
            feature: key,
            opts: items[key]
          })
        })
      }
    } else {
      rowCell.contents.push(items)
    }
  }

  function _layoutGetRow(rows, rowNum, align) {
    var row;
    for (var i = 0; i < rows.length; i++) {
      row = rows[i];
      if (row.rowNum === rowNum) {
        if (align === "full" && row.full || (align === "start" || align === "end") && (row.start || row.end)) {
          if (!row[align]) {
            row[align] = {
              contents: []
            }
          }
          return row
        }
      }
    }
    row = {
      rowNum: rowNum
    };
    row[align] = {
      contents: []
    };
    rows.push(row);
    return row
  }

  function _layoutArray(settings, layout, side) {
    var rows = [];
    $.each(layout, function(pos, items) {
      if (items === null) {
        return
      }
      var parts = pos.match(/^([a-z]+)([0-9]*)([A-Za-z]*)$/);
      var rowNum = parts[2] ? parts[2] * 1 : 0;
      var align = parts[3] ? parts[3].toLowerCase() : "full";
      if (parts[1] !== side) {
        return
      }
      var row = _layoutGetRow(rows, rowNum, align);
      _layoutItems(row, align, items)
    });
    rows.sort(function(a, b) {
      var order1 = a.rowNum;
      var order2 = b.rowNum;
      if (order1 === order2) {
        var ret = a.full && !b.full ? -1 : 1;
        return side === "bottom" ? ret * -1 : ret
      }
      return order2 - order1
    });
    if (side === "bottom") {
      rows.reverse()
    }
    for (var row = 0; row < rows.length; row++) {
      delete rows[row].rowNum;
      _layoutResolve(settings, rows[row])
    }
    return rows
  }

  function _layoutResolve(settings, row) {
    var getFeature = function(feature, opts) {
      if (!_ext.features[feature]) {
        _fnLog(settings, 0, "Unknown feature: " + feature)
      }
      return _ext.features[feature].apply(this, [settings, opts])
    };
    var resolve = function(item) {
      if (!row[item]) {
        return
      }
      var line = row[item].contents;
      for (var i = 0, ien = line.length; i < ien; i++) {
        if (!line[i]) {
          continue
        } else if (typeof line[i] === "string") {
          line[i] = getFeature(line[i], null)
        } else if ($.isPlainObject(line[i])) {
          line[i] = getFeature(line[i].feature, line[i].opts)
        } else if (typeof line[i].node === "function") {
          line[i] = line[i].node(settings)
        } else if (typeof line[i] === "function") {
          var inst = line[i](settings);
          line[i] = typeof inst.node === "function" ? inst.node() : inst
        }
      }
    };
    resolve("start");
    resolve("end");
    resolve("full")
  }

  function _fnAddOptionsHtml(settings) {
    var classes = settings.oClasses;
    var table = $(settings.nTable);
    var insert = $("<div/>").attr({
      id: settings.sTableId + "_wrapper",
      class: classes.container
    }).insertBefore(table);
    settings.nTableWrapper = insert[0];
    if (settings.sDom) {
      _fnLayoutDom(settings, settings.sDom, insert)
    } else {
      var top = _layoutArray(settings, settings.layout, "top");
      var bottom = _layoutArray(settings, settings.layout, "bottom");
      var renderer = _fnRenderer(settings, "layout");
      top.forEach(function(item) {
        renderer(settings, insert, item)
      });
      renderer(settings, insert, {
        full: {
          table: true,
          contents: [_fnFeatureHtmlTable(settings)]
        }
      });
      bottom.forEach(function(item) {
        renderer(settings, insert, item)
      })
    }
    _processingHtml(settings)
  }

  function _fnLayoutDom(settings, dom, insert) {
    var parts = dom.match(/(".*?")|('.*?')|./g);
    var featureNode, option, newNode, next, attr;
    for (var i = 0; i < parts.length; i++) {
      featureNode = null;
      option = parts[i];
      if (option == "<") {
        newNode = $("<div/>");
        next = parts[i + 1];
        if (next[0] == "'" || next[0] == '"') {
          attr = next.replace(/['"]/g, "");
          var id = "",
            className;
          if (attr.indexOf(".") != -1) {
            var split = attr.split(".");
            id = split[0];
            className = split[1]
          } else if (attr[0] == "#") {
            id = attr
          } else {
            className = attr
          }
          newNode.attr("id", id.substring(1)).addClass(className);
          i++
        }
        insert.append(newNode);
        insert = newNode
      } else if (option == ">") {
        insert = insert.parent()
      } else if (option == "t") {
        featureNode = _fnFeatureHtmlTable(settings)
      } else {
        DataTable.ext.feature.forEach(function(feature) {
          if (option == feature.cFeature) {
            featureNode = feature.fnInit(settings)
          }
        })
      }
      if (featureNode) {
        insert.append(featureNode)
      }
    }
  }

  function _fnDetectHeader(settings, thead, write) {
    var columns = settings.aoColumns;
    var rows = $(thead).children("tr");
    var row, cell;
    var i, k, l, iLen, shifted, column, colspan, rowspan;
    var isHeader = thead && thead.nodeName.toLowerCase() === "thead";
    var layout = [];
    var unique;
    var shift = function(a, i, j) {
      var k = a[i];
      while (k[j]) {
        j++
      }
      return j
    };
    for (i = 0, iLen = rows.length; i < iLen; i++) {
      layout.push([])
    }
    for (i = 0, iLen = rows.length; i < iLen; i++) {
      row = rows[i];
      column = 0;
      cell = row.firstChild;
      while (cell) {
        if (cell.nodeName.toUpperCase() == "TD" || cell.nodeName.toUpperCase() == "TH") {
          var cols = [];
          colspan = cell.getAttribute("colspan") * 1;
          rowspan = cell.getAttribute("rowspan") * 1;
          colspan = !colspan || colspan === 0 || colspan === 1 ? 1 : colspan;
          rowspan = !rowspan || rowspan === 0 || rowspan === 1 ? 1 : rowspan;
          shifted = shift(layout, i, column);
          unique = colspan === 1 ? true : false;
          if (write) {
            if (unique) {
              _fnColumnOptions(settings, shifted, $(cell).data());
              var columnDef = columns[shifted];
              var width = cell.getAttribute("width") || null;
              var t = cell.style.width.match(/width:\s*(\d+[pxem%]+)/);
              if (t) {
                width = t[1]
              }
              columnDef.sWidthOrig = columnDef.sWidth || width;
              if (isHeader) {
                if (columnDef.sTitle !== null && !columnDef.autoTitle) {
                  cell.innerHTML = columnDef.sTitle
                }
                if (!columnDef.sTitle && unique) {
                  columnDef.sTitle = _stripHtml(cell.innerHTML);
                  columnDef.autoTitle = true
                }
              } else {
                if (columnDef.footer) {
                  cell.innerHTML = columnDef.footer
                }
              }
              if (!columnDef.ariaTitle) {
                columnDef.ariaTitle = $(cell).attr("aria-label") || columnDef.sTitle
              }
              if (columnDef.className) {
                $(cell).addClass(columnDef.className)
              }
            }
            if ($("span.dt-column-title", cell).length === 0) {
              $("<span>").addClass("dt-column-title").append(cell.childNodes).appendTo(cell)
            }
            if (isHeader && $("span.dt-column-order", cell).length === 0) {
              $("<span>").addClass("dt-column-order").appendTo(cell)
            }
          }
          for (l = 0; l < colspan; l++) {
            for (k = 0; k < rowspan; k++) {
              layout[i + k][shifted + l] = {
                cell: cell,
                unique: unique
              };
              layout[i + k].row = row
            }
            cols.push(shifted + l)
          }
          cell.setAttribute("data-dt-column", _unique(cols).join(","))
        }
        cell = cell.nextSibling
      }
    }
    return layout
  }

  function _fnStart(oSettings) {
    var bServerSide = _fnDataSource(oSettings) == "ssp";
    var iInitDisplayStart = oSettings.iInitDisplayStart;
    if (iInitDisplayStart !== undefined && iInitDisplayStart !== -1) {
      oSettings._iDisplayStart = bServerSide ? iInitDisplayStart : iInitDisplayStart >= oSettings.fnRecordsDisplay() ? 0 : iInitDisplayStart;
      oSettings.iInitDisplayStart = -1
    }
  }

  function _fnBuildAjax(oSettings, data, fn) {
    var ajaxData;
    var ajax = oSettings.ajax;
    var instance = oSettings.oInstance;
    var callback = function(json) {
      var status = oSettings.jqXHR ? oSettings.jqXHR.status : null;
      if (json === null || typeof status === "number" && status == 204) {
        json = {};
        _fnAjaxDataSrc(oSettings, json, [])
      }
      var error = json.error || json.sError;
      if (error) {
        _fnLog(oSettings, 0, error)
      }
      if (json.d && typeof json.d === "string") {
        try {
          json = JSON.parse(json.d)
        } catch (e) {}
      }
      oSettings.json = json;
      _fnCallbackFire(oSettings, null, "xhr", [oSettings, json, oSettings.jqXHR], true);
      fn(json)
    };
    if ($.isPlainObject(ajax) && ajax.data) {
      ajaxData = ajax.data;
      var newData = typeof ajaxData === "function" ? ajaxData(data, oSettings) : ajaxData;
      data = typeof ajaxData === "function" && newData ? newData : $.extend(true, data, newData);
      delete ajax.data
    }
    var baseAjax = {
      url: typeof ajax === "string" ? ajax : "",
      data: data,
      success: callback,
      dataType: "json",
      cache: false,
      type: oSettings.sServerMethod,
      error: function(xhr, error) {
        var ret = _fnCallbackFire(oSettings, null, "xhr", [oSettings, null, oSettings.jqXHR], true);
        if (ret.indexOf(true) === -1) {
          if (error == "parsererror") {
            _fnLog(oSettings, 0, "Invalid JSON response", 1)
          } else if (xhr.readyState === 4) {
            _fnLog(oSettings, 0, "Ajax error", 7)
          }
        }
        _fnProcessingDisplay(oSettings, false)
      }
    };
    if ($.isPlainObject(ajax)) {
      $.extend(baseAjax, ajax)
    }
    oSettings.oAjaxData = data;
    _fnCallbackFire(oSettings, null, "preXhr", [oSettings, data, baseAjax], true);
    if (typeof ajax === "function") {
      oSettings.jqXHR = ajax.call(instance, data, callback, oSettings)
    } else if (ajax.url === "") {
      var empty = {};
      DataTable.util.set(ajax.dataSrc)(empty, []);
      callback(empty)
    } else {
      oSettings.jqXHR = $.ajax(baseAjax)
    }
    if (ajaxData) {
      ajax.data = ajaxData
    }
  }

  function _fnAjaxUpdate(settings) {
    settings.iDraw++;
    _fnProcessingDisplay(settings, true);
    _fnBuildAjax(settings, _fnAjaxParameters(settings), function(json) {
      _fnAjaxUpdateDraw(settings, json)
    })
  }

  function _fnAjaxParameters(settings) {
    var columns = settings.aoColumns,
      features = settings.oFeatures,
      preSearch = settings.oPreviousSearch,
      preColSearch = settings.aoPreSearchCols,
      colData = function(idx, prop) {
        return typeof columns[idx][prop] === "function" ? "function" : columns[idx][prop]
      };
    return {
      draw: settings.iDraw,
      columns: columns.map(function(column, i) {
        return {
          data: colData(i, "mData"),
          name: column.sName,
          searchable: column.bSearchable,
          orderable: column.bSortable,
          search: {
            value: preColSearch[i].search,
            regex: preColSearch[i].regex,
            fixed: Object.keys(column.searchFixed).map(function(name) {
              return {
                name: name,
                term: column.searchFixed[name].toString()
              }
            })
          }
        }
      }),
      order: _fnSortFlatten(settings).map(function(val) {
        return {
          column: val.col,
          dir: val.dir,
          name: colData(val.col, "sName")
        }
      }),
      start: settings._iDisplayStart,
      length: features.bPaginate ? settings._iDisplayLength : -1,
      search: {
        value: preSearch.search,
        regex: preSearch.regex,
        fixed: Object.keys(settings.searchFixed).map(function(name) {
          return {
            name: name,
            term: settings.searchFixed[name].toString()
          }
        })
      }
    }
  }

  function _fnAjaxUpdateDraw(settings, json) {
    var data = _fnAjaxDataSrc(settings, json);
    var draw = _fnAjaxDataSrcParam(settings, "draw", json);
    var recordsTotal = _fnAjaxDataSrcParam(settings, "recordsTotal", json);
    var recordsFiltered = _fnAjaxDataSrcParam(settings, "recordsFiltered", json);
    if (draw !== undefined) {
      if (draw * 1 < settings.iDraw) {
        return
      }
      settings.iDraw = draw * 1
    }
    if (!data) {
      data = []
    }
    _fnClearTable(settings);
    settings._iRecordsTotal = parseInt(recordsTotal, 10);
    settings._iRecordsDisplay = parseInt(recordsFiltered, 10);
    for (var i = 0, ien = data.length; i < ien; i++) {
      _fnAddData(settings, data[i])
    }
    settings.aiDisplay = settings.aiDisplayMaster.slice();
    _fnColumnTypes(settings);
    _fnDraw(settings, true);
    _fnInitComplete(settings);
    _fnProcessingDisplay(settings, false)
  }

  function _fnAjaxDataSrc(settings, json, write) {
    var dataProp = "data";
    if ($.isPlainObject(settings.ajax) && settings.ajax.dataSrc !== undefined) {
      var dataSrc = settings.ajax.dataSrc;
      if (typeof dataSrc === "string" || typeof dataSrc === "function") {
        dataProp = dataSrc
      } else if (dataSrc.data !== undefined) {
        dataProp = dataSrc.data
      }
    }
    if (!write) {
      if (dataProp === "data") {
        return json.aaData || json[dataProp]
      }
      return dataProp !== "" ? _fnGetObjectDataFn(dataProp)(json) : json
    }
    _fnSetObjectDataFn(dataProp)(json, write)
  }

  function _fnAjaxDataSrcParam(settings, param, json) {
    var dataSrc = $.isPlainObject(settings.ajax) ? settings.ajax.dataSrc : null;
    if (dataSrc && dataSrc[param]) {
      return _fnGetObjectDataFn(dataSrc[param])(json)
    }
    var old = "";
    if (param === "draw") {
      old = "sEcho"
    } else if (param === "recordsTotal") {
      old = "iTotalRecords"
    } else if (param === "recordsFiltered") {
      old = "iTotalDisplayRecords"
    }
    return json[old] !== undefined ? json[old] : json[param]
  }

  function _fnFilterComplete(settings, input) {
    var columnsSearch = settings.aoPreSearchCols;
    if (_fnDataSource(settings) != "ssp") {
      _fnFilterData(settings);
      settings.aiDisplay = settings.aiDisplayMaster.slice();
      _fnFilter(settings.aiDisplay, settings, input.search, input);
      $.each(settings.searchFixed, function(name, term) {
        _fnFilter(settings.aiDisplay, settings, term, {})
      });
      for (var i = 0; i < columnsSearch.length; i++) {
        var col = columnsSearch[i];
        _fnFilter(settings.aiDisplay, settings, col.search, col, i);
        $.each(settings.aoColumns[i].searchFixed, function(name, term) {
          _fnFilter(settings.aiDisplay, settings, term, {}, i)
        })
      }
      _fnFilterCustom(settings)
    }
    settings.bFiltered = true;
    _fnCallbackFire(settings, null, "search", [settings])
  }

  function _fnFilterCustom(settings) {
    var filters = DataTable.ext.search;
    var displayRows = settings.aiDisplay;
    var row, rowIdx;
    for (var i = 0, ien = filters.length; i < ien; i++) {
      var rows = [];
      for (var j = 0, jen = displayRows.length; j < jen; j++) {
        rowIdx = displayRows[j];
        row = settings.aoData[rowIdx];
        if (filters[i](settings, row._aFilterData, rowIdx, row._aData, j)) {
          rows.push(rowIdx)
        }
      }
      displayRows.length = 0;
      _fnArrayApply(displayRows, rows)
    }
  }

  function _fnFilter(searchRows, settings, input, options, column) {
    if (input === "") {
      return
    }
    var i = 0;
    var matched = [];
    var searchFunc = typeof input === "function" ? input : null;
    var rpSearch = input instanceof RegExp ? input : searchFunc ? null : _fnFilterCreateSearch(input, options);
    for (i = 0; i < searchRows.length; i++) {
      var row = settings.aoData[searchRows[i]];
      var data = column === undefined ? row._sFilterRow : row._aFilterData[column];
      if (searchFunc && searchFunc(data, row._aData, searchRows[i], column) || rpSearch && rpSearch.test(data)) {
        matched.push(searchRows[i])
      }
    }
    searchRows.length = matched.length;
    for (i = 0; i < matched.length; i++) {
      searchRows[i] = matched[i]
    }
  }

  function _fnFilterCreateSearch(search, inOpts) {
    var not = [];
    var options = $.extend({}, {
      boundary: false,
      caseInsensitive: true,
      exact: false,
      regex: false,
      smart: true
    }, inOpts);
    if (typeof search !== "string") {
      search = search.toString()
    }
    search = _normalize(search);
    if (options.exact) {
      return new RegExp("^" + _fnEscapeRegex(search) + "$", options.caseInsensitive ? "i" : "")
    }
    search = options.regex ? search : _fnEscapeRegex(search);
    if (options.smart) {
      var parts = search.match(/!?["\u201C][^"\u201D]+["\u201D]|[^ ]+/g) || [""];
      var a = parts.map(function(word) {
        var negative = false;
        var m;
        if (word.charAt(0) === "!") {
          negative = true;
          word = word.substring(1)
        }
        if (word.charAt(0) === '"') {
          m = word.match(/^"(.*)"$/);
          word = m ? m[1] : word
        } else if (word.charAt(0) === "“") {
          m = word.match(/^\u201C(.*)\u201D$/);
          word = m ? m[1] : word
        }
        if (negative) {
          if (word.length > 1) {
            not.push("(?!" + word + ")")
          }
          word = ""
        }
        return word.replace(/"/g, "")
      });
      var match = not.length ? not.join("") : "";
      var boundary = options.boundary ? "\\b" : "";
      search = "^(?=.*?" + boundary + a.join(")(?=.*?" + boundary) + ")(" + match + ".)*$"
    }
    return new RegExp(search, options.caseInsensitive ? "i" : "")
  }
  var _fnEscapeRegex = DataTable.util.escapeRegex;
  var __filter_div = $("<div>")[0];
  var __filter_div_textContent = __filter_div.textContent !== undefined;

  function _fnFilterData(settings) {
    var columns = settings.aoColumns;
    var data = settings.aoData;
    var column;
    var j, jen, filterData, cellData, row;
    var wasInvalidated = false;
    for (var rowIdx = 0; rowIdx < data.length; rowIdx++) {
      if (!data[rowIdx]) {
        continue
      }
      row = data[rowIdx];
      if (!row._aFilterData) {
        filterData = [];
        for (j = 0, jen = columns.length; j < jen; j++) {
          column = columns[j];
          if (column.bSearchable) {
            cellData = _fnGetCellData(settings, rowIdx, j, "filter");
            if (cellData === null) {
              cellData = ""
            }
            if (typeof cellData !== "string" && cellData.toString) {
              cellData = cellData.toString()
            }
          } else {
            cellData = ""
          }
          if (cellData.indexOf && cellData.indexOf("&") !== -1) {
            __filter_div.innerHTML = cellData;
            cellData = __filter_div_textContent ? __filter_div.textContent : __filter_div.innerText
          }
          if (cellData.replace) {
            cellData = cellData.replace(/[\r\n\u2028]/g, "")
          }
          filterData.push(cellData)
        }
        row._aFilterData = filterData;
        row._sFilterRow = filterData.join("  ");
        wasInvalidated = true
      }
    }
    return wasInvalidated
  }

  function _fnInitialise(settings) {
    var i;
    var init = settings.oInit;
    var deferLoading = settings.deferLoading;
    var dataSrc = _fnDataSource(settings);
    if (!settings.bInitialised) {
      setTimeout(function() {
        _fnInitialise(settings)
      }, 200);
      return
    }
    _fnBuildHead(settings, "header");
    _fnBuildHead(settings, "footer");
    _fnLoadState(settings, init, function() {
      _fnDrawHead(settings, settings.aoHeader);
      _fnDrawHead(settings, settings.aoFooter);
      var iAjaxStart = settings.iInitDisplayStart;
      if (init.aaData) {
        for (i = 0; i < init.aaData.length; i++) {
          _fnAddData(settings, init.aaData[i])
        }
      } else if (deferLoading || dataSrc == "dom") {
        _fnAddTr(settings, $(settings.nTBody).children("tr"))
      }
      settings.aiDisplay = settings.aiDisplayMaster.slice();
      _fnAddOptionsHtml(settings);
      _fnSortInit(settings);
      _colGroup(settings);
      _fnProcessingDisplay(settings, true);
      _fnCallbackFire(settings, null, "preInit", [settings], true);
      _fnReDraw(settings);
      if (dataSrc != "ssp" || deferLoading) {
        if (dataSrc == "ajax") {
          _fnBuildAjax(settings, {}, function(json) {
            var aData = _fnAjaxDataSrc(settings, json);
            for (i = 0; i < aData.length; i++) {
              _fnAddData(settings, aData[i])
            }
            settings.iInitDisplayStart = iAjaxStart;
            _fnReDraw(settings);
            _fnProcessingDisplay(settings, false);
            _fnInitComplete(settings)
          }, settings)
        } else {
          _fnInitComplete(settings);
          _fnProcessingDisplay(settings, false)
        }
      }
    })
  }

  function _fnInitComplete(settings) {
    if (settings._bInitComplete) {
      return
    }
    var args = [settings, settings.json];
    settings._bInitComplete = true;
    _fnAdjustColumnSizing(settings);
    _fnCallbackFire(settings, null, "plugin-init", args, true);
    _fnCallbackFire(settings, "aoInitComplete", "init", args, true)
  }

  function _fnLengthChange(settings, val) {
    var len = parseInt(val, 10);
    settings._iDisplayLength = len;
    _fnLengthOverflow(settings);
    _fnCallbackFire(settings, null, "length", [settings, len])
  }

  function _fnPageChange(settings, action, redraw) {
    var start = settings._iDisplayStart,
      len = settings._iDisplayLength,
      records = settings.fnRecordsDisplay();
    if (records === 0 || len === -1) {
      start = 0
    } else if (typeof action === "number") {
      start = action * len;
      if (start > records) {
        start = 0
      }
    } else if (action == "first") {
      start = 0
    } else if (action == "previous") {
      start = len >= 0 ? start - len : 0;
      if (start < 0) {
        start = 0
      }
    } else if (action == "next") {
      if (start + len < records) {
        start += len
      }
    } else if (action == "last") {
      start = Math.floor((records - 1) / len) * len
    } else if (action === "ellipsis") {
      return
    } else {
      _fnLog(settings, 0, "Unknown paging action: " + action, 5)
    }
    var changed = settings._iDisplayStart !== start;
    settings._iDisplayStart = start;
    _fnCallbackFire(settings, null, changed ? "page" : "page-nc", [settings]);
    if (changed && redraw) {
      _fnDraw(settings)
    }
    return changed
  }

  function _processingHtml(settings) {
    var table = settings.nTable;
    var scrolling = settings.oScroll.sX !== "" || settings.oScroll.sY !== "";
    if (settings.oFeatures.bProcessing) {
      var n = $("<div/>", {
        id: settings.sTableId + "_processing",
        class: settings.oClasses.processing.container,
        role: "status"
      }).html(settings.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>");
      if (scrolling) {
        n.prependTo($("div.dt-scroll", settings.nTableWrapper))
      } else {
        n.insertBefore(table)
      }
      $(table).on("processing.dt.DT", function(e, s, show) {
        n.css("display", show ? "block" : "none")
      })
    }
  }

  function _fnProcessingDisplay(settings, show) {
    if (settings.bDrawing && show === false) {
      return
    }
    _fnCallbackFire(settings, null, "processing", [settings, show])
  }

  function _fnProcessingRun(settings, enable, run) {
    if (!enable) {
      run()
    } else {
      _fnProcessingDisplay(settings, true);
      setTimeout(function() {
        run();
        _fnProcessingDisplay(settings, false)
      }, 0)
    }
  }

  function _fnFeatureHtmlTable(settings) {
    var table = $(settings.nTable);
    var scroll = settings.oScroll;
    if (scroll.sX === "" && scroll.sY === "") {
      return settings.nTable
    }
    var scrollX = scroll.sX;
    var scrollY = scroll.sY;
    var classes = settings.oClasses.scrolling;
    var caption = settings.captionNode;
    var captionSide = caption ? caption._captionSide : null;
    var headerClone = $(table[0].cloneNode(false));
    var footerClone = $(table[0].cloneNode(false));
    var footer = table.children("tfoot");
    var _div = "<div/>";
    var size = function(s) {
      return !s ? null : _fnStringToCss(s)
    };
    if (!footer.length) {
      footer = null
    }
    var scroller = $(_div, {
      class: classes.container
    }).append($(_div, {
      class: classes.header.self
    }).css({
      overflow: "hidden",
      position: "relative",
      border: 0,
      width: scrollX ? size(scrollX) : "100%"
    }).append($(_div, {
      class: classes.header.inner
    }).css({
      "box-sizing": "content-box",
      width: scroll.sXInner || "100%"
    }).append(headerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "top" ? caption : null).append(table.children("thead"))))).append($(_div, {
      class: classes.body
    }).css({
      position: "relative",
      overflow: "auto",
      width: size(scrollX)
    }).append(table));
    if (footer) {
      scroller.append($(_div, {
        class: classes.footer.self
      }).css({
        overflow: "hidden",
        border: 0,
        width: scrollX ? size(scrollX) : "100%"
      }).append($(_div, {
        class: classes.footer.inner
      }).append(footerClone.removeAttr("id").css("margin-left", 0).append(captionSide === "bottom" ? caption : null).append(table.children("tfoot")))))
    }
    var children = scroller.children();
    var scrollHead = children[0];
    var scrollBody = children[1];
    var scrollFoot = footer ? children[2] : null;
    $(scrollBody).on("scroll.DT", function() {
      var scrollLeft = this.scrollLeft;
      scrollHead.scrollLeft = scrollLeft;
      if (footer) {
        scrollFoot.scrollLeft = scrollLeft
      }
    });
    $("th, td", scrollHead).on("focus", function() {
      var scrollLeft = scrollHead.scrollLeft;
      scrollBody.scrollLeft = scrollLeft;
      if (footer) {
        scrollBody.scrollLeft = scrollLeft
      }
    });
    $(scrollBody).css("max-height", scrollY);
    if (!scroll.bCollapse) {
      $(scrollBody).css("height", scrollY)
    }
    settings.nScrollHead = scrollHead;
    settings.nScrollBody = scrollBody;
    settings.nScrollFoot = scrollFoot;
    settings.aoDrawCallback.push(_fnScrollDraw);
    return scroller[0]
  }

  function _fnScrollDraw(settings) {
    var scroll = settings.oScroll,
      barWidth = scroll.iBarWidth,
      divHeader = $(settings.nScrollHead),
      divHeaderInner = divHeader.children("div"),
      divHeaderTable = divHeaderInner.children("table"),
      divBodyEl = settings.nScrollBody,
      divBody = $(divBodyEl),
      divFooter = $(settings.nScrollFoot),
      divFooterInner = divFooter.children("div"),
      divFooterTable = divFooterInner.children("table"),
      header = $(settings.nTHead),
      table = $(settings.nTable),
      footer = settings.nTFoot && $("th, td", settings.nTFoot).length ? $(settings.nTFoot) : null,
      browser = settings.oBrowser,
      headerCopy, footerCopy;
    var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;
    if (settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== undefined) {
      settings.scrollBarVis = scrollBarVis;
      _fnAdjustColumnSizing(settings);
      return
    } else {
      settings.scrollBarVis = scrollBarVis
    }
    table.children("thead, tfoot").remove();
    headerCopy = header.clone().prependTo(table);
    headerCopy.find("th, td").removeAttr("tabindex");
    headerCopy.find("[id]").removeAttr("id");
    if (footer) {
      footerCopy = footer.clone().prependTo(table);
      footerCopy.find("[id]").removeAttr("id")
    }
    if (settings.aiDisplay.length) {
      var firstTr = null;
      var start = _fnDataSource(settings) !== "ssp" ? settings._iDisplayStart : 0;
      for (i = start; i < start + settings.aiDisplay.length; i++) {
        var idx = settings.aiDisplay[i];
        var tr = settings.aoData[idx].nTr;
        if (tr) {
          firstTr = tr;
          break
        }
      }
      if (firstTr) {
        var colSizes = $(firstTr).children("th, td").map(function(vis) {
          return {
            idx: _fnVisibleToColumnIndex(settings, vis),
            width: $(this).outerWidth()
          }
        });
        for (var i = 0; i < colSizes.length; i++) {
          var colEl = settings.aoColumns[colSizes[i].idx].colEl[0];
          var colWidth = colEl.style.width.replace("px", "");
          if (colWidth !== colSizes[i].width) {
            colEl.style.width = colSizes[i].width + "px";
            if (scroll.sX) {
              colEl.style.minWidth = colSizes[i].width + "px"
            }
          }
        }
      }
    }
    divHeaderTable.find("colgroup").remove();
    divHeaderTable.append(settings.colgroup.clone());
    if (footer) {
      divFooterTable.find("colgroup").remove();
      divFooterTable.append(settings.colgroup.clone())
    }
    $("th, td", headerCopy).each(function() {
      $(this.childNodes).wrapAll('<div class="dt-scroll-sizing">')
    });
    if (footer) {
      $("th, td", footerCopy).each(function() {
        $(this.childNodes).wrapAll('<div class="dt-scroll-sizing">')
      })
    }
    var isScrolling = Math.floor(table.height()) > divBodyEl.clientHeight || divBody.css("overflow-y") == "scroll";
    var paddingSide = "padding" + (browser.bScrollbarLeft ? "Left" : "Right");
    var outerWidth = table.outerWidth();
    divHeaderTable.css("width", _fnStringToCss(outerWidth));
    divHeaderInner.css("width", _fnStringToCss(outerWidth)).css(paddingSide, isScrolling ? barWidth + "px" : "0px");
    if (footer) {
      divFooterTable.css("width", _fnStringToCss(outerWidth));
      divFooterInner.css("width", _fnStringToCss(outerWidth)).css(paddingSide, isScrolling ? barWidth + "px" : "0px")
    }
    table.children("colgroup").prependTo(table);
    divBody.trigger("scroll");
    if ((settings.bSorted || settings.bFiltered) && !settings._drawHold) {
      divBodyEl.scrollTop = 0
    }
  }

  function _fnCalculateColumnWidths(settings) {
    if (!settings.oFeatures.bAutoWidth) {
      return
    }
    var table = settings.nTable,
      columns = settings.aoColumns,
      scroll = settings.oScroll,
      scrollY = scroll.sY,
      scrollX = scroll.sX,
      scrollXInner = scroll.sXInner,
      visibleColumns = _fnGetColumns(settings, "bVisible"),
      tableWidthAttr = table.getAttribute("width"),
      tableContainer = table.parentNode,
      i, column, columnIdx;
    var styleWidth = table.style.width;
    var containerWidth = _fnWrapperWidth(settings);
    if (containerWidth === settings.containerWidth) {
      return false
    }
    settings.containerWidth = containerWidth;
    if (!styleWidth && !tableWidthAttr) {
      table.style.width = "100%";
      styleWidth = "100%"
    }
    if (styleWidth && styleWidth.indexOf("%") !== -1) {
      tableWidthAttr = styleWidth
    }
    _fnCallbackFire(settings, null, "column-calc", {
      visible: visibleColumns
    }, false);
    var tmpTable = $(table.cloneNode()).css("visibility", "hidden").removeAttr("id");
    tmpTable.append("<tbody>");
    var tr = $("<tr/>").appendTo(tmpTable.find("tbody"));
    tmpTable.append($(settings.nTHead).clone()).append($(settings.nTFoot).clone());
    tmpTable.find("tfoot th, tfoot td").css("width", "");
    tmpTable.find("thead th, thead td").each(function() {
      var width = _fnColumnsSumWidth(settings, this, true, false);
      if (width) {
        this.style.width = width;
        if (scrollX) {
          this.style.minWidth = width;
          $(this).append($("<div/>").css({
            width: width,
            margin: 0,
            padding: 0,
            border: 0,
            height: 1
          }))
        }
      } else {
        this.style.width = ""
      }
    });
    for (i = 0; i < visibleColumns.length; i++) {
      columnIdx = visibleColumns[i];
      column = columns[columnIdx];
      var longest = _fnGetMaxLenString(settings, columnIdx);
      var autoClass = _ext.type.className[column.sType];
      var text = longest + column.sContentPadding;
      var insert = longest.indexOf("<") === -1 ? document.createTextNode(text) : text;
      $("<td/>").addClass(autoClass).addClass(column.sClass).append(insert).appendTo(tr)
    }
    $("[name]", tmpTable).removeAttr("name");
    var holder = $("<div/>").css(scrollX || scrollY ? {
      position: "absolute",
      top: 0,
      left: 0,
      height: 1,
      right: 0,
      overflow: "hidden"
    } : {}).append(tmpTable).appendTo(tableContainer);
    if (scrollX && scrollXInner) {
      tmpTable.width(scrollXInner)
    } else if (scrollX) {
      tmpTable.css("width", "auto");
      tmpTable.removeAttr("width");
      if (tmpTable.outerWidth() < tableContainer.clientWidth && tableWidthAttr) {
        tmpTable.outerWidth(tableContainer.clientWidth)
      }
    } else if (scrollY) {
      tmpTable.outerWidth(tableContainer.clientWidth)
    } else if (tableWidthAttr) {
      tmpTable.outerWidth(tableWidthAttr)
    }
    var total = 0;
    var bodyCells = tmpTable.find("tbody tr").eq(0).children();
    for (i = 0; i < visibleColumns.length; i++) {
      var bounding = bodyCells[i].getBoundingClientRect().width;
      total += bounding;
      columns[visibleColumns[i]].sWidth = _fnStringToCss(bounding)
    }
    table.style.width = _fnStringToCss(total);
    holder.remove();
    if (tableWidthAttr) {
      table.style.width = _fnStringToCss(tableWidthAttr)
    }
    if ((tableWidthAttr || scrollX) && !settings._reszEvt) {
      var resize = DataTable.util.throttle(function() {
        var newWidth = _fnWrapperWidth(settings);
        if (!settings.bDestroying && newWidth !== 0) {
          _fnAdjustColumnSizing(settings)
        }
      });
      if (window.ResizeObserver) {
        var first = $(settings.nTableWrapper).is(":visible");
        settings.resizeObserver = new ResizeObserver(function(e) {
          if (first) {
            first = false
          } else {
            resize()
          }
        });
        settings.resizeObserver.observe(settings.nTableWrapper)
      } else {
        $(window).on("resize.DT-" + settings.sInstance, resize)
      }
      settings._reszEvt = true
    }
  }

  function _fnWrapperWidth(settings) {
    return $(settings.nTableWrapper).is(":visible") ? $(settings.nTableWrapper).width() : 0
  }

  function _fnGetMaxLenString(settings, colIdx) {
    var column = settings.aoColumns[colIdx];
    if (!column.maxLenString) {
      var s, max = "",
        maxLen = -1;
      for (var i = 0, ien = settings.aiDisplayMaster.length; i < ien; i++) {
        var rowIdx = settings.aiDisplayMaster[i];
        var data = _fnGetRowDisplay(settings, rowIdx)[colIdx];
        var cellString = data && typeof data === "object" && data.nodeType ? data.innerHTML : data + "";
        cellString = cellString.replace(/id=".*?"/g, "").replace(/name=".*?"/g, "");
        s = _stripHtml(cellString).replace(/&nbsp;/g, " ");
        if (s.length > maxLen) {
          max = cellString;
          maxLen = s.length
        }
      }
      column.maxLenString = max
    }
    return column.maxLenString
  }

  function _fnStringToCss(s) {
    if (s === null) {
      return "0px"
    }
    if (typeof s == "number") {
      return s < 0 ? "0px" : s + "px"
    }
    return s.match(/\d$/) ? s + "px" : s
  }

  function _colGroup(settings) {
    var cols = settings.aoColumns;
    settings.colgroup.empty();
    for (i = 0; i < cols.length; i++) {
      if (cols[i].bVisible) {
        settings.colgroup.append(cols[i].colEl)
      }
    }
  }

  function _fnSortInit(settings) {
    var target = settings.nTHead;
    var headerRows = target.querySelectorAll("tr");
    var legacyTop = settings.bSortCellsTop;
    var notSelector = ':not([data-dt-order="disable"]):not([data-dt-order="icon-only"])';
    if (legacyTop === true) {
      target = headerRows[0]
    } else if (legacyTop === false) {
      target = headerRows[headerRows.length - 1]
    }
    _fnSortAttachListener(settings, target, target === settings.nTHead ? "tr" + notSelector + " th" + notSelector + ", tr" + notSelector + " td" + notSelector : "th" + notSelector + ", td" + notSelector);
    var order = [];
    _fnSortResolve(settings, order, settings.aaSorting);
    settings.aaSorting = order
  }

  function _fnSortAttachListener(settings, node, selector, column, callback) {
    _fnBindAction(node, selector, function(e) {
      var run = false;
      var columns = column === undefined ? _fnColumnsFromHeader(e.target) : [column];
      if (columns.length) {
        for (var i = 0, ien = columns.length; i < ien; i++) {
          var ret = _fnSortAdd(settings, columns[i], i, e.shiftKey);
          if (ret !== false) {
            run = true
          }
          if (settings.aaSorting.length === 1 && settings.aaSorting[0][1] === "") {
            break
          }
        }
        if (run) {
          _fnProcessingRun(settings, true, function() {
            _fnSort(settings);
            _fnSortDisplay(settings, settings.aiDisplay);
            _fnReDraw(settings, false, false);
            if (callback) {
              callback()
            }
          })
        }
      }
    })
  }

  function _fnSortDisplay(settings, display) {
    if (display.length < 2) {
      return
    }
    var master = settings.aiDisplayMaster;
    var masterMap = {};
    var map = {};
    var i;
    for (i = 0; i < master.length; i++) {
      masterMap[master[i]] = i
    }
    for (i = 0; i < display.length; i++) {
      map[display[i]] = masterMap[display[i]]
    }
    display.sort(function(a, b) {
      return map[a] - map[b]
    })
  }

  function _fnSortResolve(settings, nestedSort, sort) {
    var push = function(a) {
      if ($.isPlainObject(a)) {
        if (a.idx !== undefined) {
          nestedSort.push([a.idx, a.dir])
        } else if (a.name) {
          var cols = _pluck(settings.aoColumns, "sName");
          var idx = cols.indexOf(a.name);
          if (idx !== -1) {
            nestedSort.push([idx, a.dir])
          }
        }
      } else {
        nestedSort.push(a)
      }
    };
    if ($.isPlainObject(sort)) {
      push(sort)
    } else if (sort.length && typeof sort[0] === "number") {
      push(sort)
    } else if (sort.length) {
      for (var z = 0; z < sort.length; z++) {
        push(sort[z])
      }
    }
  }

  function _fnSortFlatten(settings) {
    var i, k, kLen, aSort = [],
      extSort = DataTable.ext.type.order,
      aoColumns = settings.aoColumns,
      aDataSort, iCol, sType, srcCol, fixed = settings.aaSortingFixed,
      fixedObj = $.isPlainObject(fixed),
      nestedSort = [];
    if (!settings.oFeatures.bSort) {
      return aSort
    }
    if (Array.isArray(fixed)) {
      _fnSortResolve(settings, nestedSort, fixed)
    }
    if (fixedObj && fixed.pre) {
      _fnSortResolve(settings, nestedSort, fixed.pre)
    }
    _fnSortResolve(settings, nestedSort, settings.aaSorting);
    if (fixedObj && fixed.post) {
      _fnSortResolve(settings, nestedSort, fixed.post)
    }
    for (i = 0; i < nestedSort.length; i++) {
      srcCol = nestedSort[i][0];
      if (aoColumns[srcCol]) {
        aDataSort = aoColumns[srcCol].aDataSort;
        for (k = 0, kLen = aDataSort.length; k < kLen; k++) {
          iCol = aDataSort[k];
          sType = aoColumns[iCol].sType || "string";
          if (nestedSort[i]._idx === undefined) {
            nestedSort[i]._idx = aoColumns[iCol].asSorting.indexOf(nestedSort[i][1])
          }
          if (nestedSort[i][1]) {
            aSort.push({
              src: srcCol,
              col: iCol,
              dir: nestedSort[i][1],
              index: nestedSort[i]._idx,
              type: sType,
              formatter: extSort[sType + "-pre"],
              sorter: extSort[sType + "-" + nestedSort[i][1]]
            })
          }
        }
      }
    }
    return aSort
  }

  function _fnSort(oSettings, col, dir) {
    var i, ien, iLen, aiOrig = [],
      extSort = DataTable.ext.type.order,
      aoData = oSettings.aoData,
      sortCol, displayMaster = oSettings.aiDisplayMaster,
      aSort;
    if (col !== undefined) {
      var srcCol = oSettings.aoColumns[col];
      aSort = [{
        src: col,
        col: col,
        dir: dir,
        index: 0,
        type: srcCol.sType,
        formatter: extSort[srcCol.sType + "-pre"],
        sorter: extSort[srcCol.sType + "-" + dir]
      }];
      displayMaster = displayMaster.slice()
    } else {
      aSort = _fnSortFlatten(oSettings)
    }
    for (i = 0, ien = aSort.length; i < ien; i++) {
      sortCol = aSort[i];
      _fnSortData(oSettings, sortCol.col)
    }
    if (_fnDataSource(oSettings) != "ssp" && aSort.length !== 0) {
      for (i = 0, iLen = displayMaster.length; i < iLen; i++) {
        aiOrig[i] = i
      }
      if (aSort.length && aSort[0].dir === "desc" && oSettings.orderDescReverse) {
        aiOrig.reverse()
      }
      displayMaster.sort(function(a, b) {
        var x, y, k, test, sort, len = aSort.length,
          dataA = aoData[a]._aSortData,
          dataB = aoData[b]._aSortData;
        for (k = 0; k < len; k++) {
          sort = aSort[k];
          x = dataA[sort.col];
          y = dataB[sort.col];
          if (sort.sorter) {
            test = sort.sorter(x, y);
            if (test !== 0) {
              return test
            }
          } else {
            test = x < y ? -1 : x > y ? 1 : 0;
            if (test !== 0) {
              return sort.dir === "asc" ? test : -test
            }
          }
        }
        x = aiOrig[a];
        y = aiOrig[b];
        return x < y ? -1 : x > y ? 1 : 0
      })
    } else if (aSort.length === 0) {
      displayMaster.sort(function(x, y) {
        return x < y ? -1 : x > y ? 1 : 0
      })
    }
    if (col === undefined) {
      oSettings.bSorted = true;
      oSettings.sortDetails = aSort;
      _fnCallbackFire(oSettings, null, "order", [oSettings, aSort])
    }
    return displayMaster
  }

  function _fnSortAdd(settings, colIdx, addIndex, shift) {
    var col = settings.aoColumns[colIdx];
    var sorting = settings.aaSorting;
    var asSorting = col.asSorting;
    var nextSortIdx;
    var next = function(a, overflow) {
      var idx = a._idx;
      if (idx === undefined) {
        idx = asSorting.indexOf(a[1])
      }
      return idx + 1 < asSorting.length ? idx + 1 : overflow ? null : 0
    };
    if (!col.bSortable) {
      return false
    }
    if (typeof sorting[0] === "number") {
      sorting = settings.aaSorting = [sorting]
    }
    if ((shift || addIndex) && settings.oFeatures.bSortMulti) {
      var sortIdx = _pluck(sorting, "0").indexOf(colIdx);
      if (sortIdx !== -1) {
        nextSortIdx = next(sorting[sortIdx], true);
        if (nextSortIdx === null && sorting.length === 1) {
          nextSortIdx = 0
        }
        if (nextSortIdx === null) {
          sorting.splice(sortIdx, 1)
        } else {
          sorting[sortIdx][1] = asSorting[nextSortIdx];
          sorting[sortIdx]._idx = nextSortIdx
        }
      } else if (shift) {
        sorting.push([colIdx, asSorting[0], 0]);
        sorting[sorting.length - 1]._idx = 0
      } else {
        sorting.push([colIdx, sorting[0][1], 0]);
        sorting[sorting.length - 1]._idx = 0
      }
    } else if (sorting.length && sorting[0][0] == colIdx) {
      nextSortIdx = next(sorting[0]);
      sorting.length = 1;
      sorting[0][1] = asSorting[nextSortIdx];
      sorting[0]._idx = nextSortIdx
    } else {
      sorting.length = 0;
      sorting.push([colIdx, asSorting[0]]);
      sorting[0]._idx = 0
    }
  }

  function _fnSortingClasses(settings) {
    var oldSort = settings.aLastSort;
    var sortClass = settings.oClasses.order.position;
    var sort = _fnSortFlatten(settings);
    var features = settings.oFeatures;
    var i, ien, colIdx;
    if (features.bSort && features.bSortClasses) {
      for (i = 0, ien = oldSort.length; i < ien; i++) {
        colIdx = oldSort[i].src;
        $(_pluck(settings.aoData, "anCells", colIdx)).removeClass(sortClass + (i < 2 ? i + 1 : 3))
      }
      for (i = 0, ien = sort.length; i < ien; i++) {
        colIdx = sort[i].src;
        $(_pluck(settings.aoData, "anCells", colIdx)).addClass(sortClass + (i < 2 ? i + 1 : 3))
      }
    }
    settings.aLastSort = sort
  }

  function _fnSortData(settings, colIdx) {
    var column = settings.aoColumns[colIdx];
    var customSort = DataTable.ext.order[column.sSortDataType];
    var customData;
    if (customSort) {
      customData = customSort.call(settings.oInstance, settings, colIdx, _fnColumnIndexToVisible(settings, colIdx))
    }
    var row, cellData;
    var formatter = DataTable.ext.type.order[column.sType + "-pre"];
    var data = settings.aoData;
    for (var rowIdx = 0; rowIdx < data.length; rowIdx++) {
      if (!data[rowIdx]) {
        continue
      }
      row = data[rowIdx];
      if (!row._aSortData) {
        row._aSortData = []
      }
      if (!row._aSortData[colIdx] || customSort) {
        cellData = customSort ? customData[rowIdx] : _fnGetCellData(settings, rowIdx, colIdx, "sort");
        row._aSortData[colIdx] = formatter ? formatter(cellData, settings) : cellData
      }
    }
  }

  function _fnSaveState(settings) {
    if (settings._bLoadingState) {
      return
    }
    var sorting = [];
    _fnSortResolve(settings, sorting, settings.aaSorting);
    var columns = settings.aoColumns;
    var state = {
      time: +new Date,
      start: settings._iDisplayStart,
      length: settings._iDisplayLength,
      order: sorting.map(function(sort) {
        return columns[sort[0]] && columns[sort[0]].sName ? [columns[sort[0]].sName, sort[1]] : sort.slice()
      }),
      search: $.extend({}, settings.oPreviousSearch),
      columns: settings.aoColumns.map(function(col, i) {
        return {
          name: col.sName,
          visible: col.bVisible,
          search: $.extend({}, settings.aoPreSearchCols[i])
        }
      })
    };
    settings.oSavedState = state;
    _fnCallbackFire(settings, "aoStateSaveParams", "stateSaveParams", [settings, state]);
    if (settings.oFeatures.bStateSave && !settings.bDestroying) {
      settings.fnStateSaveCallback.call(settings.oInstance, settings, state)
    }
  }

  function _fnLoadState(settings, init, callback) {
    if (!settings.oFeatures.bStateSave) {
      callback();
      return
    }
    var loaded = function(state) {
      _fnImplementState(settings, state, callback)
    };
    var state = settings.fnStateLoadCallback.call(settings.oInstance, settings, loaded);
    if (state !== undefined) {
      _fnImplementState(settings, state, callback)
    }
    return true
  }

  function _fnImplementState(settings, s, callback) {
    var i, ien;
    var columns = settings.aoColumns;
    var currentNames = _pluck(settings.aoColumns, "sName");
    settings._bLoadingState = true;
    var api = settings._bInitComplete ? new DataTable.Api(settings) : null;
    if (!s || !s.time) {
      settings._bLoadingState = false;
      callback();
      return
    }
    var duration = settings.iStateDuration;
    if (duration > 0 && s.time < +new Date - duration * 1e3) {
      settings._bLoadingState = false;
      callback();
      return
    }
    var abStateLoad = _fnCallbackFire(settings, "aoStateLoadParams", "stateLoadParams", [settings, s]);
    if (abStateLoad.indexOf(false) !== -1) {
      settings._bLoadingState = false;
      callback();
      return
    }
    settings.oLoadedState = $.extend(true, {}, s);
    _fnCallbackFire(settings, null, "stateLoadInit", [settings, s], true);
    if (s.length !== undefined) {
      if (api) {
        api.page.len(s.length)
      } else {
        settings._iDisplayLength = s.length
      }
    }
    if (s.start !== undefined) {
      if (api === null) {
        settings._iDisplayStart = s.start;
        settings.iInitDisplayStart = s.start
      } else {
        _fnPageChange(settings, s.start / settings._iDisplayLength)
      }
    }
    if (s.order !== undefined) {
      settings.aaSorting = [];
      $.each(s.order, function(i, col) {
        var set = [col[0], col[1]];
        if (typeof col[0] === "string") {
          var idx = currentNames.indexOf(col[0]);
          set[0] = idx >= 0 ? idx : 0
        } else if (set[0] >= columns.length) {
          set[0] = 0
        }
        settings.aaSorting.push(set)
      })
    }
    if (s.search !== undefined) {
      $.extend(settings.oPreviousSearch, s.search)
    }
    if (s.columns) {
      var set = s.columns;
      var incoming = _pluck(s.columns, "name");
      if (incoming.join("").length && incoming.join("") !== currentNames.join("")) {
        set = [];
        for (i = 0; i < currentNames.length; i++) {
          if (currentNames[i] != "") {
            var idx = incoming.indexOf(currentNames[i]);
            if (idx >= 0) {
              set.push(s.columns[idx])
            } else {
              set.push({})
            }
          } else {
            set.push({})
          }
        }
      }
      if (set.length === columns.length) {
        for (i = 0, ien = set.length; i < ien; i++) {
          var col = set[i];
          if (col.visible !== undefined) {
            if (api) {
              api.column(i).visible(col.visible, false)
            } else {
              columns[i].bVisible = col.visible
            }
          }
          if (col.search !== undefined) {
            $.extend(settings.aoPreSearchCols[i], col.search)
          }
        }
        if (api) {
          api.columns.adjust()
        }
      }
    }
    settings._bLoadingState = false;
    _fnCallbackFire(settings, "aoStateLoaded", "stateLoaded", [settings, s]);
    callback()
  }

  function _fnLog(settings, level, msg, tn) {
    msg = "DataTables warning: " + (settings ? "table id=" + settings.sTableId + " - " : "") + msg;
    if (tn) {
      msg += ". For more information about this error, please see " + "https://datatables.net/tn/" + tn
    }
    if (!level) {
      var ext = DataTable.ext;
      var type = ext.sErrMode || ext.errMode;
      if (settings) {
        _fnCallbackFire(settings, null, "dt-error", [settings, tn, msg], true)
      }
      if (type == "alert") {
        alert(msg)
      } else if (type == "throw") {
        throw new Error(msg)
      } else if (typeof type == "function") {
        type(settings, tn, msg)
      }
    } else if (window.console && console.log) {
      console.log(msg)
    }
  }

  function _fnMap(ret, src, name, mappedName) {
    if (Array.isArray(name)) {
      $.each(name, function(i, val) {
        if (Array.isArray(val)) {
          _fnMap(ret, src, val[0], val[1])
        } else {
          _fnMap(ret, src, val)
        }
      });
      return
    }
    if (mappedName === undefined) {
      mappedName = name
    }
    if (src[name] !== undefined) {
      ret[mappedName] = src[name]
    }
  }

  function _fnExtend(out, extender, breakRefs) {
    var val;
    for (var prop in extender) {
      if (Object.prototype.hasOwnProperty.call(extender, prop)) {
        val = extender[prop];
        if ($.isPlainObject(val)) {
          if (!$.isPlainObject(out[prop])) {
            out[prop] = {}
          }
          $.extend(true, out[prop], val)
        } else if (breakRefs && prop !== "data" && prop !== "aaData" && Array.isArray(val)) {
          out[prop] = val.slice()
        } else {
          out[prop] = val
        }
      }
    }
    return out
  }

  function _fnBindAction(n, selector, fn) {
    $(n).on("click.DT", selector, function(e) {
      fn(e)
    }).on("keypress.DT", selector, function(e) {
      if (e.which === 13) {
        e.preventDefault();
        fn(e)
      }
    }).on("selectstart.DT", selector, function() {
      return false
    })
  }

  function _fnCallbackReg(settings, store, fn) {
    if (fn) {
      settings[store].push(fn)
    }
  }

  function _fnCallbackFire(settings, callbackArr, eventName, args, bubbles) {
    var ret = [];
    if (callbackArr) {
      ret = settings[callbackArr].slice().reverse().map(function(val) {
        return val.apply(settings.oInstance, args)
      })
    }
    if (eventName !== null) {
      var e = $.Event(eventName + ".dt");
      var table = $(settings.nTable);
      e.dt = settings.api;
      table[bubbles ? "trigger" : "triggerHandler"](e, args);
      if (bubbles && table.parents("body").length === 0) {
        $("body").trigger(e, args)
      }
      ret.push(e.result)
    }
    return ret
  }

  function _fnLengthOverflow(settings) {
    var start = settings._iDisplayStart,
      end = settings.fnDisplayEnd(),
      len = settings._iDisplayLength;
    if (start >= end) {
      start = end - len
    }
    start -= start % len;
    if (len === -1 || start < 0) {
      start = 0
    }
    settings._iDisplayStart = start
  }

  function _fnRenderer(settings, type) {
    var renderer = settings.renderer;
    var host = DataTable.ext.renderer[type];
    if ($.isPlainObject(renderer) && renderer[type]) {
      return host[renderer[type]] || host._
    } else if (typeof renderer === "string") {
      return host[renderer] || host._
    }
    return host._
  }

  function _fnDataSource(settings) {
    if (settings.oFeatures.bServerSide) {
      return "ssp"
    } else if (settings.ajax) {
      return "ajax"
    }
    return "dom"
  }

  function _fnMacros(settings, str, entries) {
    var formatter = settings.fnFormatNumber,
      start = settings._iDisplayStart + 1,
      len = settings._iDisplayLength,
      vis = settings.fnRecordsDisplay(),
      max = settings.fnRecordsTotal(),
      all = len === -1;
    return str.replace(/_START_/g, formatter.call(settings, start)).replace(/_END_/g, formatter.call(settings, settings.fnDisplayEnd())).replace(/_MAX_/g, formatter.call(settings, max)).replace(/_TOTAL_/g, formatter.call(settings, vis)).replace(/_PAGE_/g, formatter.call(settings, all ? 1 : Math.ceil(start / len))).replace(/_PAGES_/g, formatter.call(settings, all ? 1 : Math.ceil(vis / len))).replace(/_ENTRIES_/g, settings.api.i18n("entries", "", entries)).replace(/_ENTRIES-MAX_/g, settings.api.i18n("entries", "", max)).replace(/_ENTRIES-TOTAL_/g, settings.api.i18n("entries", "", vis))
  }

  function _fnArrayApply(arr, data) {
    if (!data) {
      return
    }
    if (data.length < 1e4) {
      arr.push.apply(arr, data)
    } else {
      for (i = 0; i < data.length; i++) {
        arr.push(data[i])
      }
    }
  }
  var __apiStruct = [];
  var __arrayProto = Array.prototype;
  var _toSettings = function(mixed) {
    var idx, jq;
    var settings = DataTable.settings;
    var tables = _pluck(settings, "nTable");
    if (!mixed) {
      return []
    } else if (mixed.nTable && mixed.oFeatures) {
      return [mixed]
    } else if (mixed.nodeName && mixed.nodeName.toLowerCase() === "table") {
      idx = tables.indexOf(mixed);
      return idx !== -1 ? [settings[idx]] : null
    } else if (mixed && typeof mixed.settings === "function") {
      return mixed.settings().toArray()
    } else if (typeof mixed === "string") {
      jq = $(mixed).get()
    } else if (mixed instanceof $) {
      jq = mixed.get()
    }
    if (jq) {
      return settings.filter(function(v, idx) {
        return jq.includes(tables[idx])
      })
    }
  };
  _Api = function(context, data) {
    if (!(this instanceof _Api)) {
      return new _Api(context, data)
    }
    var i;
    var settings = [];
    var ctxSettings = function(o) {
      var a = _toSettings(o);
      if (a) {
        settings.push.apply(settings, a)
      }
    };
    if (Array.isArray(context)) {
      for (i = 0; i < context.length; i++) {
        ctxSettings(context[i])
      }
    } else {
      ctxSettings(context)
    }
    this.context = settings.length > 1 ? _unique(settings) : settings;
    _fnArrayApply(this, data);
    this.selector = {
      rows: null,
      cols: null,
      opts: null
    };
    _Api.extend(this, this, __apiStruct)
  };
  DataTable.Api = _Api;
  $.extend(_Api.prototype, {
    any: function() {
      return this.count() !== 0
    },
    context: [],
    count: function() {
      return this.flatten().length
    },
    each: function(fn) {
      for (var i = 0, ien = this.length; i < ien; i++) {
        fn.call(this, this[i], i, this)
      }
      return this
    },
    eq: function(idx) {
      var ctx = this.context;
      return ctx.length > idx ? new _Api(ctx[idx], this[idx]) : null
    },
    filter: function(fn) {
      var a = __arrayProto.filter.call(this, fn, this);
      return new _Api(this.context, a)
    },
    flatten: function() {
      var a = [];
      return new _Api(this.context, a.concat.apply(a, this.toArray()))
    },
    get: function(idx) {
      return this[idx]
    },
    join: __arrayProto.join,
    includes: function(find) {
      return this.indexOf(find) === -1 ? false : true
    },
    indexOf: __arrayProto.indexOf,
    iterator: function(flatten, type, fn, alwaysNew) {
      var a = [],
        ret, i, ien, j, jen, context = this.context,
        rows, items, item, selector = this.selector;
      if (typeof flatten === "string") {
        alwaysNew = fn;
        fn = type;
        type = flatten;
        flatten = false
      }
      for (i = 0, ien = context.length; i < ien; i++) {
        var apiInst = new _Api(context[i]);
        if (type === "table") {
          ret = fn.call(apiInst, context[i], i);
          if (ret !== undefined) {
            a.push(ret)
          }
        } else if (type === "columns" || type === "rows") {
          ret = fn.call(apiInst, context[i], this[i], i);
          if (ret !== undefined) {
            a.push(ret)
          }
        } else if (type === "every" || type === "column" || type === "column-rows" || type === "row" || type === "cell") {
          items = this[i];
          if (type === "column-rows") {
            rows = _selector_row_indexes(context[i], selector.opts)
          }
          for (j = 0, jen = items.length; j < jen; j++) {
            item = items[j];
            if (type === "cell") {
              ret = fn.call(apiInst, context[i], item.row, item.column, i, j)
            } else {
              ret = fn.call(apiInst, context[i], item, i, j, rows)
            }
            if (ret !== undefined) {
              a.push(ret)
            }
          }
        }
      }
      if (a.length || alwaysNew) {
        var api = new _Api(context, flatten ? a.concat.apply([], a) : a);
        var apiSelector = api.selector;
        apiSelector.rows = selector.rows;
        apiSelector.cols = selector.cols;
        apiSelector.opts = selector.opts;
        return api
      }
      return this
    },
    lastIndexOf: __arrayProto.lastIndexOf,
    length: 0,
    map: function(fn) {
      var a = __arrayProto.map.call(this, fn, this);
      return new _Api(this.context, a)
    },
    pluck: function(prop) {
      var fn = DataTable.util.get(prop);
      return this.map(function(el) {
        return fn(el)
      })
    },
    pop: __arrayProto.pop,
    push: __arrayProto.push,
    reduce: __arrayProto.reduce,
    reduceRight: __arrayProto.reduceRight,
    reverse: __arrayProto.reverse,
    selector: null,
    shift: __arrayProto.shift,
    slice: function() {
      return new _Api(this.context, this)
    },
    sort: __arrayProto.sort,
    splice: __arrayProto.splice,
    toArray: function() {
      return __arrayProto.slice.call(this)
    },
    to$: function() {
      return $(this)
    },
    toJQuery: function() {
      return $(this)
    },
    unique: function() {
      return new _Api(this.context, _unique(this.toArray()))
    },
    unshift: __arrayProto.unshift
  });

  function _api_scope(scope, fn, struc) {
    return function() {
      var ret = fn.apply(scope || this, arguments);
      _Api.extend(ret, ret, struc.methodExt);
      return ret
    }
  }

  function _api_find(src, name) {
    for (var i = 0, ien = src.length; i < ien; i++) {
      if (src[i].name === name) {
        return src[i]
      }
    }
    return null
  }
  window.__apiStruct = __apiStruct;
  _Api.extend = function(scope, obj, ext) {
    if (!ext.length || !obj || !(obj instanceof _Api) && !obj.__dt_wrapper) {
      return
    }
    var i, ien, struct;
    for (i = 0, ien = ext.length; i < ien; i++) {
      struct = ext[i];
      if (struct.name === "__proto__") {
        continue
      }
      obj[struct.name] = struct.type === "function" ? _api_scope(scope, struct.val, struct) : struct.type === "object" ? {} : struct.val;
      obj[struct.name].__dt_wrapper = true;
      _Api.extend(scope, obj[struct.name], struct.propExt)
    }
  };
  _Api.register = _api_register = function(name, val) {
    if (Array.isArray(name)) {
      for (var j = 0, jen = name.length; j < jen; j++) {
        _Api.register(name[j], val)
      }
      return
    }
    var i, ien, heir = name.split("."),
      struct = __apiStruct,
      key, method;
    for (i = 0, ien = heir.length; i < ien; i++) {
      method = heir[i].indexOf("()") !== -1;
      key = method ? heir[i].replace("()", "") : heir[i];
      var src = _api_find(struct, key);
      if (!src) {
        src = {
          name: key,
          val: {},
          methodExt: [],
          propExt: [],
          type: "object"
        };
        struct.push(src)
      }
      if (i === ien - 1) {
        src.val = val;
        src.type = typeof val === "function" ? "function" : $.isPlainObject(val) ? "object" : "other"
      } else {
        struct = method ? src.methodExt : src.propExt
      }
    }
  };
  _Api.registerPlural = _api_registerPlural = function(pluralName, singularName, val) {
    _Api.register(pluralName, val);
    _Api.register(singularName, function() {
      var ret = val.apply(this, arguments);
      if (ret === this) {
        return this
      } else if (ret instanceof _Api) {
        return ret.length ? Array.isArray(ret[0]) ? new _Api(ret.context, ret[0]) : ret[0] : undefined
      }
      return ret
    })
  };
  var __table_selector = function(selector, a) {
    if (Array.isArray(selector)) {
      var result = [];
      selector.forEach(function(sel) {
        var inner = __table_selector(sel, a);
        _fnArrayApply(result, inner)
      });
      return result.filter(function(item) {
        return item
      })
    }
    if (typeof selector === "number") {
      return [a[selector]]
    }
    var nodes = a.map(function(el) {
      return el.nTable
    });
    return $(nodes).filter(selector).map(function() {
      var idx = nodes.indexOf(this);
      return a[idx]
    }).toArray()
  };
  _api_register("tables()", function(selector) {
    return selector !== undefined && selector !== null ? new _Api(__table_selector(selector, this.context)) : this
  });
  _api_register("table()", function(selector) {
    var tables = this.tables(selector);
    var ctx = tables.context;
    return ctx.length ? new _Api(ctx[0]) : tables
  });
  [
    ["nodes", "node", "nTable"],
    ["body", "body", "nTBody"],
    ["header", "header", "nTHead"],
    ["footer", "footer", "nTFoot"]
  ].forEach(function(item) {
    _api_registerPlural("tables()." + item[0] + "()", "table()." + item[1] + "()", function() {
      return this.iterator("table", function(ctx) {
        return ctx[item[2]]
      }, 1)
    })
  });
  [
    ["header", "aoHeader"],
    ["footer", "aoFooter"]
  ].forEach(function(item) {
    _api_register("table()." + item[0] + ".structure()", function(selector) {
      var indexes = this.columns(selector).indexes().flatten();
      var ctx = this.context[0];
      return _fnHeaderLayout(ctx, ctx[item[1]], indexes)
    })
  });
  _api_registerPlural("tables().containers()", "table().container()", function() {
    return this.iterator("table", function(ctx) {
      return ctx.nTableWrapper
    }, 1)
  });
  _api_register("tables().every()", function(fn) {
    var that = this;
    return this.iterator("table", function(s, i) {
      fn.call(that.table(i), i)
    })
  });
  _api_register("caption()", function(value, side) {
    var context = this.context;
    if (value === undefined) {
      var caption = context[0].captionNode;
      return caption && context.length ? caption.innerHTML : null
    }
    return this.iterator("table", function(ctx) {
      var table = $(ctx.nTable);
      var caption = $(ctx.captionNode);
      var container = $(ctx.nTableWrapper);
      if (!caption.length) {
        caption = $("<caption/>").html(value);
        ctx.captionNode = caption[0];
        if (!side) {
          table.prepend(caption);
          side = caption.css("caption-side")
        }
      }
      caption.html(value);
      if (side) {
        caption.css("caption-side", side);
        caption[0]._captionSide = side
      }
      if (container.find("div.dataTables_scroll").length) {
        var selector = side === "top" ? "Head" : "Foot";
        container.find("div.dataTables_scroll" + selector + " table").prepend(caption)
      } else {
        table.prepend(caption)
      }
    }, 1)
  });
  _api_register("caption.node()", function() {
    var ctx = this.context;
    return ctx.length ? ctx[0].captionNode : null
  });
  _api_register("draw()", function(paging) {
    return this.iterator("table", function(settings) {
      if (paging === "page") {
        _fnDraw(settings)
      } else {
        if (typeof paging === "string") {
          paging = paging === "full-hold" ? false : true
        }
        _fnReDraw(settings, paging === false)
      }
    })
  });
  _api_register("page()", function(action) {
    if (action === undefined) {
      return this.page.info().page
    }
    return this.iterator("table", function(settings) {
      _fnPageChange(settings, action)
    })
  });
  _api_register("page.info()", function() {
    if (this.context.length === 0) {
      return undefined
    }
    var settings = this.context[0],
      start = settings._iDisplayStart,
      len = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1,
      visRecords = settings.fnRecordsDisplay(),
      all = len === -1;
    return {
      page: all ? 0 : Math.floor(start / len),
      pages: all ? 1 : Math.ceil(visRecords / len),
      start: start,
      end: settings.fnDisplayEnd(),
      length: len,
      recordsTotal: settings.fnRecordsTotal(),
      recordsDisplay: visRecords,
      serverSide: _fnDataSource(settings) === "ssp"
    }
  });
  _api_register("page.len()", function(len) {
    if (len === undefined) {
      return this.context.length !== 0 ? this.context[0]._iDisplayLength : undefined
    }
    return this.iterator("table", function(settings) {
      _fnLengthChange(settings, len)
    })
  });
  var __reload = function(settings, holdPosition, callback) {
    if (callback) {
      var api = new _Api(settings);
      api.one("draw", function() {
        callback(api.ajax.json())
      })
    }
    if (_fnDataSource(settings) == "ssp") {
      _fnReDraw(settings, holdPosition)
    } else {
      _fnProcessingDisplay(settings, true);
      var xhr = settings.jqXHR;
      if (xhr && xhr.readyState !== 4) {
        xhr.abort()
      }
      _fnBuildAjax(settings, {}, function(json) {
        _fnClearTable(settings);
        var data = _fnAjaxDataSrc(settings, json);
        for (var i = 0, ien = data.length; i < ien; i++) {
          _fnAddData(settings, data[i])
        }
        _fnReDraw(settings, holdPosition);
        _fnInitComplete(settings);
        _fnProcessingDisplay(settings, false)
      })
    }
  };
  _api_register("ajax.json()", function() {
    var ctx = this.context;
    if (ctx.length > 0) {
      return ctx[0].json
    }
  });
  _api_register("ajax.params()", function() {
    var ctx = this.context;
    if (ctx.length > 0) {
      return ctx[0].oAjaxData
    }
  });
  _api_register("ajax.reload()", function(callback, resetPaging) {
    return this.iterator("table", function(settings) {
      __reload(settings, resetPaging === false, callback)
    })
  });
  _api_register("ajax.url()", function(url) {
    var ctx = this.context;
    if (url === undefined) {
      if (ctx.length === 0) {
        return undefined
      }
      ctx = ctx[0];
      return $.isPlainObject(ctx.ajax) ? ctx.ajax.url : ctx.ajax
    }
    return this.iterator("table", function(settings) {
      if ($.isPlainObject(settings.ajax)) {
        settings.ajax.url = url
      } else {
        settings.ajax = url
      }
    })
  });
  _api_register("ajax.url().load()", function(callback, resetPaging) {
    return this.iterator("table", function(ctx) {
      __reload(ctx, resetPaging === false, callback)
    })
  });
  var _selector_run = function(type, selector, selectFn, settings, opts) {
    var out = [],
      res, a, i, ien, j, jen, selectorType = typeof selector;
    if (!selector || selectorType === "string" || selectorType === "function" || selector.length === undefined) {
      selector = [selector]
    }
    for (i = 0, ien = selector.length; i < ien; i++) {
      a = selector[i] && selector[i].split && !selector[i].match(/[[(:]/) ? selector[i].split(",") : [selector[i]];
      for (j = 0, jen = a.length; j < jen; j++) {
        res = selectFn(typeof a[j] === "string" ? a[j].trim() : a[j]);
        res = res.filter(function(item) {
          return item !== null && item !== undefined
        });
        if (res && res.length) {
          out = out.concat(res)
        }
      }
    }
    var ext = _ext.selector[type];
    if (ext.length) {
      for (i = 0, ien = ext.length; i < ien; i++) {
        out = ext[i](settings, opts, out)
      }
    }
    return _unique(out)
  };
  var _selector_opts = function(opts) {
    if (!opts) {
      opts = {}
    }
    if (opts.filter && opts.search === undefined) {
      opts.search = opts.filter
    }
    return $.extend({
      search: "none",
      order: "current",
      page: "all"
    }, opts)
  };
  var _selector_first = function(old) {
    var inst = new _Api(old.context[0]);
    if (old.length) {
      inst.push(old[0])
    }
    inst.selector = old.selector;
    if (inst.length && inst[0].length > 1) {
      inst[0].splice(1)
    }
    return inst
  };
  var _selector_row_indexes = function(settings, opts) {
    var i, ien, tmp, a = [],
      displayFiltered = settings.aiDisplay,
      displayMaster = settings.aiDisplayMaster;
    var search = opts.search,
      order = opts.order,
      page = opts.page;
    if (_fnDataSource(settings) == "ssp") {
      return search === "removed" ? [] : _range(0, displayMaster.length)
    }
    if (page == "current") {
      for (i = settings._iDisplayStart, ien = settings.fnDisplayEnd(); i < ien; i++) {
        a.push(displayFiltered[i])
      }
    } else if (order == "current" || order == "applied") {
      if (search == "none") {
        a = displayMaster.slice()
      } else if (search == "applied") {
        a = displayFiltered.slice()
      } else if (search == "removed") {
        var displayFilteredMap = {};
        for (i = 0, ien = displayFiltered.length; i < ien; i++) {
          displayFilteredMap[displayFiltered[i]] = null
        }
        displayMaster.forEach(function(item) {
          if (!Object.prototype.hasOwnProperty.call(displayFilteredMap, item)) {
            a.push(item)
          }
        })
      }
    } else if (order == "index" || order == "original") {
      for (i = 0, ien = settings.aoData.length; i < ien; i++) {
        if (!settings.aoData[i]) {
          continue
        }
        if (search == "none") {
          a.push(i)
        } else {
          tmp = displayFiltered.indexOf(i);
          if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
            a.push(i)
          }
        }
      }
    } else if (typeof order === "number") {
      var ordered = _fnSort(settings, order, "asc");
      if (search === "none") {
        a = ordered
      } else {
        for (i = 0; i < ordered.length; i++) {
          tmp = displayFiltered.indexOf(ordered[i]);
          if (tmp === -1 && search == "removed" || tmp >= 0 && search == "applied") {
            a.push(ordered[i])
          }
        }
      }
    }
    return a
  };
  var __row_selector = function(settings, selector, opts) {
    var rows;
    var run = function(sel) {
      var selInt = _intVal(sel);
      var aoData = settings.aoData;
      if (selInt !== null && !opts) {
        return [selInt]
      }
      if (!rows) {
        rows = _selector_row_indexes(settings, opts)
      }
      if (selInt !== null && rows.indexOf(selInt) !== -1) {
        return [selInt]
      } else if (sel === null || sel === undefined || sel === "") {
        return rows
      }
      if (typeof sel === "function") {
        return rows.map(function(idx) {
          var row = aoData[idx];
          return sel(idx, row._aData, row.nTr) ? idx : null
        })
      }
      if (sel.nodeName) {
        var rowIdx = sel._DT_RowIndex;
        var cellIdx = sel._DT_CellIndex;
        if (rowIdx !== undefined) {
          return aoData[rowIdx] && aoData[rowIdx].nTr === sel ? [rowIdx] : []
        } else if (cellIdx) {
          return aoData[cellIdx.row] && aoData[cellIdx.row].nTr === sel.parentNode ? [cellIdx.row] : []
        } else {
          var host = $(sel).closest("*[data-dt-row]");
          return host.length ? [host.data("dt-row")] : []
        }
      }
      if (typeof sel === "string" && sel.charAt(0) === "#") {
        var rowObj = settings.aIds[sel.replace(/^#/, "")];
        if (rowObj !== undefined) {
          return [rowObj.idx]
        }
      }
      var nodes = _removeEmpty(_pluck_order(settings.aoData, rows, "nTr"));
      return $(nodes).filter(sel).map(function() {
        return this._DT_RowIndex
      }).toArray()
    };
    var matched = _selector_run("row", selector, run, settings, opts);
    if (opts.order === "current" || opts.order === "applied") {
      _fnSortDisplay(settings, matched)
    }
    return matched
  };
  _api_register("rows()", function(selector, opts) {
    if (selector === undefined) {
      selector = ""
    } else if ($.isPlainObject(selector)) {
      opts = selector;
      selector = ""
    }
    opts = _selector_opts(opts);
    var inst = this.iterator("table", function(settings) {
      return __row_selector(settings, selector, opts)
    }, 1);
    inst.selector.rows = selector;
    inst.selector.opts = opts;
    return inst
  });
  _api_register("rows().nodes()", function() {
    return this.iterator("row", function(settings, row) {
      return settings.aoData[row].nTr || undefined
    }, 1)
  });
  _api_register("rows().data()", function() {
    return this.iterator(true, "rows", function(settings, rows) {
      return _pluck_order(settings.aoData, rows, "_aData")
    }, 1)
  });
  _api_registerPlural("rows().cache()", "row().cache()", function(type) {
    return this.iterator("row", function(settings, row) {
      var r = settings.aoData[row];
      return type === "search" ? r._aFilterData : r._aSortData
    }, 1)
  });
  _api_registerPlural("rows().invalidate()", "row().invalidate()", function(src) {
    return this.iterator("row", function(settings, row) {
      _fnInvalidate(settings, row, src)
    })
  });
  _api_registerPlural("rows().indexes()", "row().index()", function() {
    return this.iterator("row", function(settings, row) {
      return row
    }, 1)
  });
  _api_registerPlural("rows().ids()", "row().id()", function(hash) {
    var a = [];
    var context = this.context;
    for (var i = 0, ien = context.length; i < ien; i++) {
      for (var j = 0, jen = this[i].length; j < jen; j++) {
        var id = context[i].rowIdFn(context[i].aoData[this[i][j]]._aData);
        a.push((hash === true ? "#" : "") + id)
      }
    }
    return new _Api(context, a)
  });
  _api_registerPlural("rows().remove()", "row().remove()", function() {
    this.iterator("row", function(settings, row) {
      var data = settings.aoData;
      var rowData = data[row];
      var idx = settings.aiDisplayMaster.indexOf(row);
      if (idx !== -1) {
        settings.aiDisplayMaster.splice(idx, 1)
      }
      if (settings._iRecordsDisplay > 0) {
        settings._iRecordsDisplay--
      }
      _fnLengthOverflow(settings);
      var id = settings.rowIdFn(rowData._aData);
      if (id !== undefined) {
        delete settings.aIds[id]
      }
      data[row] = null
    });
    return this
  });
  _api_register("rows.add()", function(rows) {
    var newRows = this.iterator("table", function(settings) {
      var row, i, ien;
      var out = [];
      for (i = 0, ien = rows.length; i < ien; i++) {
        row = rows[i];
        if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
          out.push(_fnAddTr(settings, row)[0])
        } else {
          out.push(_fnAddData(settings, row))
        }
      }
      return out
    }, 1);
    var modRows = this.rows(-1);
    modRows.pop();
    _fnArrayApply(modRows, newRows);
    return modRows
  });
  _api_register("row()", function(selector, opts) {
    return _selector_first(this.rows(selector, opts))
  });
  _api_register("row().data()", function(data) {
    var ctx = this.context;
    if (data === undefined) {
      return ctx.length && this.length && this[0].length ? ctx[0].aoData[this[0]]._aData : undefined
    }
    var row = ctx[0].aoData[this[0]];
    row._aData = data;
    if (Array.isArray(data) && row.nTr && row.nTr.id) {
      _fnSetObjectDataFn(ctx[0].rowId)(data, row.nTr.id)
    }
    _fnInvalidate(ctx[0], this[0], "data");
    return this
  });
  _api_register("row().node()", function() {
    var ctx = this.context;
    if (ctx.length && this.length && this[0].length) {
      var row = ctx[0].aoData[this[0]];
      if (row && row.nTr) {
        return row.nTr
      }
    }
    return null
  });
  _api_register("row.add()", function(row) {
    if (row instanceof $ && row.length) {
      row = row[0]
    }
    var rows = this.iterator("table", function(settings) {
      if (row.nodeName && row.nodeName.toUpperCase() === "TR") {
        return _fnAddTr(settings, row)[0]
      }
      return _fnAddData(settings, row)
    });
    return this.row(rows[0])
  });
  $(document).on("plugin-init.dt", function(e, context) {
    var api = new _Api(context);
    api.on("stateSaveParams.DT", function(e, settings, d) {
      var idFn = settings.rowIdFn;
      var rows = settings.aiDisplayMaster;
      var ids = [];
      for (var i = 0; i < rows.length; i++) {
        var rowIdx = rows[i];
        var data = settings.aoData[rowIdx];
        if (data._detailsShow) {
          ids.push("#" + idFn(data._aData))
        }
      }
      d.childRows = ids
    });
    api.on("stateLoaded.DT", function(e, settings, state) {
      __details_state_load(api, state)
    });
    __details_state_load(api, api.state.loaded())
  });
  var __details_state_load = function(api, state) {
    if (state && state.childRows) {
      api.rows(state.childRows.map(function(id) {
        return id.replace(/([^:\\]*(?:\\.[^:\\]*)*):/g, "$1\\:")
      })).every(function() {
        _fnCallbackFire(api.settings()[0], null, "requestChild", [this])
      })
    }
  };
  var __details_add = function(ctx, row, data, klass) {
    var rows = [];
    var addRow = function(r, k) {
      if (Array.isArray(r) || r instanceof $) {
        for (var i = 0, ien = r.length; i < ien; i++) {
          addRow(r[i], k)
        }
        return
      }
      if (r.nodeName && r.nodeName.toLowerCase() === "tr") {
        r.setAttribute("data-dt-row", row.idx);
        rows.push(r)
      } else {
        var created = $("<tr><td></td></tr>").attr("data-dt-row", row.idx).addClass(k);
        $("td", created).addClass(k).html(r)[0].colSpan = _fnVisbleColumns(ctx);
        rows.push(created[0])
      }
    };
    addRow(data, klass);
    if (row._details) {
      row._details.detach()
    }
    row._details = $(rows);
    if (row._detailsShow) {
      row._details.insertAfter(row.nTr)
    }
  };
  var __details_state = DataTable.util.throttle(function(ctx) {
    _fnSaveState(ctx[0])
  }, 500);
  var __details_remove = function(api, idx) {
    var ctx = api.context;
    if (ctx.length) {
      var row = ctx[0].aoData[idx !== undefined ? idx : api[0]];
      if (row && row._details) {
        row._details.remove();
        row._detailsShow = undefined;
        row._details = undefined;
        $(row.nTr).removeClass("dt-hasChild");
        __details_state(ctx)
      }
    }
  };
  var __details_display = function(api, show) {
    var ctx = api.context;
    if (ctx.length && api.length) {
      var row = ctx[0].aoData[api[0]];
      if (row._details) {
        row._detailsShow = show;
        if (show) {
          row._details.insertAfter(row.nTr);
          $(row.nTr).addClass("dt-hasChild")
        } else {
          row._details.detach();
          $(row.nTr).removeClass("dt-hasChild")
        }
        _fnCallbackFire(ctx[0], null, "childRow", [show, api.row(api[0])]);
        __details_events(ctx[0]);
        __details_state(ctx)
      }
    }
  };
  var __details_events = function(settings) {
    var api = new _Api(settings);
    var namespace = ".dt.DT_details";
    var drawEvent = "draw" + namespace;
    var colvisEvent = "column-sizing" + namespace;
    var destroyEvent = "destroy" + namespace;
    var data = settings.aoData;
    api.off(drawEvent + " " + colvisEvent + " " + destroyEvent);
    if (_pluck(data, "_details").length > 0) {
      api.on(drawEvent, function(e, ctx) {
        if (settings !== ctx) {
          return
        }
        api.rows({
          page: "current"
        }).eq(0).each(function(idx) {
          var row = data[idx];
          if (row._detailsShow) {
            row._details.insertAfter(row.nTr)
          }
        })
      });
      api.on(colvisEvent, function(e, ctx) {
        if (settings !== ctx) {
          return
        }
        var row, visible = _fnVisbleColumns(ctx);
        for (var i = 0, ien = data.length; i < ien; i++) {
          row = data[i];
          if (row && row._details) {
            row._details.each(function() {
              var el = $(this).children("td");
              if (el.length == 1) {
                el.attr("colspan", visible)
              }
            })
          }
        }
      });
      api.on(destroyEvent, function(e, ctx) {
        if (settings !== ctx) {
          return
        }
        for (var i = 0, ien = data.length; i < ien; i++) {
          if (data[i] && data[i]._details) {
            __details_remove(api, i)
          }
        }
      })
    }
  };
  var _emp = "";
  var _child_obj = _emp + "row().child";
  var _child_mth = _child_obj + "()";
  _api_register(_child_mth, function(data, klass) {
    var ctx = this.context;
    if (data === undefined) {
      return ctx.length && this.length && ctx[0].aoData[this[0]] ? ctx[0].aoData[this[0]]._details : undefined
    } else if (data === true) {
      this.child.show()
    } else if (data === false) {
      __details_remove(this)
    } else if (ctx.length && this.length) {
      __details_add(ctx[0], ctx[0].aoData[this[0]], data, klass)
    }
    return this
  });
  _api_register([_child_obj + ".show()", _child_mth + ".show()"], function() {
    __details_display(this, true);
    return this
  });
  _api_register([_child_obj + ".hide()", _child_mth + ".hide()"], function() {
    __details_display(this, false);
    return this
  });
  _api_register([_child_obj + ".remove()", _child_mth + ".remove()"], function() {
    __details_remove(this);
    return this
  });
  _api_register(_child_obj + ".isShown()", function() {
    var ctx = this.context;
    if (ctx.length && this.length && ctx[0].aoData[this[0]]) {
      return ctx[0].aoData[this[0]]._detailsShow || false
    }
    return false
  });
  var __re_column_selector = /^([^:]+)?:(name|title|visIdx|visible)$/;
  var __columnData = function(settings, column, r1, r2, rows, type) {
    var a = [];
    for (var row = 0, ien = rows.length; row < ien; row++) {
      a.push(_fnGetCellData(settings, rows[row], column, type))
    }
    return a
  };
  var __column_header = function(settings, column, row) {
    var header = settings.aoHeader;
    var target = row !== undefined ? row : settings.bSortCellsTop ? 0 : header.length - 1;
    return header[target][column].cell
  };
  var __column_selector = function(settings, selector, opts) {
    var columns = settings.aoColumns,
      names = _pluck(columns, "sName"),
      titles = _pluck(columns, "sTitle"),
      cells = DataTable.util.get("[].[].cell")(settings.aoHeader),
      nodes = _unique(_flatten([], cells));
    var run = function(s) {
      var selInt = _intVal(s);
      if (s === "") {
        return _range(columns.length)
      }
      if (selInt !== null) {
        return [selInt >= 0 ? selInt : columns.length + selInt]
      }
      if (typeof s === "function") {
        var rows = _selector_row_indexes(settings, opts);
        return columns.map(function(col, idx) {
          return s(idx, __columnData(settings, idx, 0, 0, rows), __column_header(settings, idx)) ? idx : null
        })
      }
      var match = typeof s === "string" ? s.match(__re_column_selector) : "";
      if (match) {
        switch (match[2]) {
          case "visIdx":
          case "visible":
            if (match[1] && match[1].match(/^\d+$/)) {
              var idx = parseInt(match[1], 10);
              if (idx < 0) {
                var visColumns = columns.map(function(col, i) {
                  return col.bVisible ? i : null
                });
                return [visColumns[visColumns.length + idx]]
              }
              return [_fnVisibleToColumnIndex(settings, idx)]
            }
            return columns.map(function(col, idx) {
              if (!col.bVisible) {
                return null
              }
              if (match[1]) {
                return $(nodes[idx]).filter(match[1]).length > 0 ? idx : null
              }
              return idx
            });
          case "name":
            return names.map(function(name, i) {
              return name === match[1] ? i : null
            });
          case "title":
            return titles.map(function(title, i) {
              return title === match[1] ? i : null
            });
          default:
            return []
        }
      }
      if (s.nodeName && s._DT_CellIndex) {
        return [s._DT_CellIndex.column]
      }
      var jqResult = $(nodes).filter(s).map(function() {
        return _fnColumnsFromHeader(this)
      }).toArray().sort(function(a, b) {
        return a - b
      });
      if (jqResult.length || !s.nodeName) {
        return jqResult
      }
      var host = $(s).closest("*[data-dt-column]");
      return host.length ? [host.data("dt-column")] : []
    };
    return _selector_run("column", selector, run, settings, opts)
  };
  var __setColumnVis = function(settings, column, vis) {
    var cols = settings.aoColumns,
      col = cols[column],
      data = settings.aoData,
      cells, i, ien, tr;
    if (vis === undefined) {
      return col.bVisible
    }
    if (col.bVisible === vis) {
      return false
    }
    if (vis) {
      var insertBefore = _pluck(cols, "bVisible").indexOf(true, column + 1);
      for (i = 0, ien = data.length; i < ien; i++) {
        if (data[i]) {
          tr = data[i].nTr;
          cells = data[i].anCells;
          if (tr) {
            tr.insertBefore(cells[column], cells[insertBefore] || null)
          }
        }
      }
    } else {
      $(_pluck(settings.aoData, "anCells", column)).detach()
    }
    col.bVisible = vis;
    _colGroup(settings);
    return true
  };
  _api_register("columns()", function(selector, opts) {
    if (selector === undefined) {
      selector = ""
    } else if ($.isPlainObject(selector)) {
      opts = selector;
      selector = ""
    }
    opts = _selector_opts(opts);
    var inst = this.iterator("table", function(settings) {
      return __column_selector(settings, selector, opts)
    }, 1);
    inst.selector.cols = selector;
    inst.selector.opts = opts;
    return inst
  });
  _api_registerPlural("columns().header()", "column().header()", function(row) {
    return this.iterator("column", function(settings, column) {
      return __column_header(settings, column, row)
    }, 1)
  });
  _api_registerPlural("columns().footer()", "column().footer()", function(row) {
    return this.iterator("column", function(settings, column) {
      var footer = settings.aoFooter;
      if (!footer.length) {
        return null
      }
      return settings.aoFooter[row !== undefined ? row : 0][column].cell
    }, 1)
  });
  _api_registerPlural("columns().data()", "column().data()", function() {
    return this.iterator("column-rows", __columnData, 1)
  });
  _api_registerPlural("columns().render()", "column().render()", function(type) {
    return this.iterator("column-rows", function(settings, column, i, j, rows) {
      return __columnData(settings, column, i, j, rows, type)
    }, 1)
  });
  _api_registerPlural("columns().dataSrc()", "column().dataSrc()", function() {
    return this.iterator("column", function(settings, column) {
      return settings.aoColumns[column].mData
    }, 1)
  });
  _api_registerPlural("columns().cache()", "column().cache()", function(type) {
    return this.iterator("column-rows", function(settings, column, i, j, rows) {
      return _pluck_order(settings.aoData, rows, type === "search" ? "_aFilterData" : "_aSortData", column)
    }, 1)
  });
  _api_registerPlural("columns().init()", "column().init()", function() {
    return this.iterator("column", function(settings, column) {
      return settings.aoColumns[column]
    }, 1)
  });
  _api_registerPlural("columns().nodes()", "column().nodes()", function() {
    return this.iterator("column-rows", function(settings, column, i, j, rows) {
      return _pluck_order(settings.aoData, rows, "anCells", column)
    }, 1)
  });
  _api_registerPlural("columns().titles()", "column().title()", function(title, row) {
    return this.iterator("column", function(settings, column) {
      if (typeof title === "number") {
        row = title;
        title = undefined
      }
      var span = $("span.dt-column-title", this.column(column).header(row));
      if (title !== undefined) {
        span.html(title);
        return this
      }
      return span.html()
    }, 1)
  });
  _api_registerPlural("columns().types()", "column().type()", function() {
    return this.iterator("column", function(settings, column) {
      var type = settings.aoColumns[column].sType;
      if (!type) {
        _fnColumnTypes(settings)
      }
      return type
    }, 1)
  });
  _api_registerPlural("columns().visible()", "column().visible()", function(vis, calc) {
    var that = this;
    var changed = [];
    var ret = this.iterator("column", function(settings, column) {
      if (vis === undefined) {
        return settings.aoColumns[column].bVisible
      }
      if (__setColumnVis(settings, column, vis)) {
        changed.push(column)
      }
    });
    if (vis !== undefined) {
      this.iterator("table", function(settings) {
        _fnDrawHead(settings, settings.aoHeader);
        _fnDrawHead(settings, settings.aoFooter);
        if (!settings.aiDisplay.length) {
          $(settings.nTBody).find("td[colspan]").attr("colspan", _fnVisbleColumns(settings))
        }
        _fnSaveState(settings);
        that.iterator("column", function(settings, column) {
          if (changed.includes(column)) {
            _fnCallbackFire(settings, null, "column-visibility", [settings, column, vis, calc])
          }
        });
        if (changed.length && (calc === undefined || calc)) {
          that.columns.adjust()
        }
      })
    }
    return ret
  });
  _api_registerPlural("columns().widths()", "column().width()", function() {
    var columns = this.columns(":visible").count();
    var row = $("<tr>").html("<td>" + Array(columns).join("</td><td>") + "</td>");
    $(this.table().body()).append(row);
    var widths = row.children().map(function() {
      return $(this).outerWidth()
    });
    row.remove();
    return this.iterator("column", function(settings, column) {
      var visIdx = _fnColumnIndexToVisible(settings, column);
      return visIdx !== null ? widths[visIdx] : 0
    }, 1)
  });
  _api_registerPlural("columns().indexes()", "column().index()", function(type) {
    return this.iterator("column", function(settings, column) {
      return type === "visible" ? _fnColumnIndexToVisible(settings, column) : column
    }, 1)
  });
  _api_register("columns.adjust()", function() {
    return this.iterator("table", function(settings) {
      settings.containerWidth = -1;
      _fnAdjustColumnSizing(settings)
    }, 1)
  });
  _api_register("column.index()", function(type, idx) {
    if (this.context.length !== 0) {
      var ctx = this.context[0];
      if (type === "fromVisible" || type === "toData") {
        return _fnVisibleToColumnIndex(ctx, idx)
      } else if (type === "fromData" || type === "toVisible") {
        return _fnColumnIndexToVisible(ctx, idx)
      }
    }
  });
  _api_register("column()", function(selector, opts) {
    return _selector_first(this.columns(selector, opts))
  });
  var __cell_selector = function(settings, selector, opts) {
    var data = settings.aoData;
    var rows = _selector_row_indexes(settings, opts);
    var cells = _removeEmpty(_pluck_order(data, rows, "anCells"));
    var allCells = $(_flatten([], cells));
    var row;
    var columns = settings.aoColumns.length;
    var a, i, ien, j, o, host;
    var run = function(s) {
      var fnSelector = typeof s === "function";
      if (s === null || s === undefined || fnSelector) {
        a = [];
        for (i = 0, ien = rows.length; i < ien; i++) {
          row = rows[i];
          for (j = 0; j < columns; j++) {
            o = {
              row: row,
              column: j
            };
            if (fnSelector) {
              host = data[row];
              if (s(o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null)) {
                a.push(o)
              }
            } else {
              a.push(o)
            }
          }
        }
        return a
      }
      if ($.isPlainObject(s)) {
        return s.column !== undefined && s.row !== undefined && rows.indexOf(s.row) !== -1 ? [s] : []
      }
      var jqResult = allCells.filter(s).map(function(i, el) {
        return {
          row: el._DT_CellIndex.row,
          column: el._DT_CellIndex.column
        }
      }).toArray();
      if (jqResult.length || !s.nodeName) {
        return jqResult
      }
      host = $(s).closest("*[data-dt-row]");
      return host.length ? [{
        row: host.data("dt-row"),
        column: host.data("dt-column")
      }] : []
    };
    return _selector_run("cell", selector, run, settings, opts)
  };
  _api_register("cells()", function(rowSelector, columnSelector, opts) {
    if ($.isPlainObject(rowSelector)) {
      if (rowSelector.row === undefined) {
        opts = rowSelector;
        rowSelector = null
      } else {
        opts = columnSelector;
        columnSelector = null
      }
    }
    if ($.isPlainObject(columnSelector)) {
      opts = columnSelector;
      columnSelector = null
    }
    if (columnSelector === null || columnSelector === undefined) {
      return this.iterator("table", function(settings) {
        return __cell_selector(settings, rowSelector, _selector_opts(opts))
      })
    }
    var internalOpts = opts ? {
      page: opts.page,
      order: opts.order,
      search: opts.search
    } : {};
    var columns = this.columns(columnSelector, internalOpts);
    var rows = this.rows(rowSelector, internalOpts);
    var i, ien, j, jen;
    var cellsNoOpts = this.iterator("table", function(settings, idx) {
      var a = [];
      for (i = 0, ien = rows[idx].length; i < ien; i++) {
        for (j = 0, jen = columns[idx].length; j < jen; j++) {
          a.push({
            row: rows[idx][i],
            column: columns[idx][j]
          })
        }
      }
      return a
    }, 1);
    var cells = opts && opts.selected ? this.cells(cellsNoOpts, opts) : cellsNoOpts;
    $.extend(cells.selector, {
      cols: columnSelector,
      rows: rowSelector,
      opts: opts
    });
    return cells
  });
  _api_registerPlural("cells().nodes()", "cell().node()", function() {
    return this.iterator("cell", function(settings, row, column) {
      var data = settings.aoData[row];
      return data && data.anCells ? data.anCells[column] : undefined
    }, 1)
  });
  _api_register("cells().data()", function() {
    return this.iterator("cell", function(settings, row, column) {
      return _fnGetCellData(settings, row, column)
    }, 1)
  });
  _api_registerPlural("cells().cache()", "cell().cache()", function(type) {
    type = type === "search" ? "_aFilterData" : "_aSortData";
    return this.iterator("cell", function(settings, row, column) {
      return settings.aoData[row][type][column]
    }, 1)
  });
  _api_registerPlural("cells().render()", "cell().render()", function(type) {
    return this.iterator("cell", function(settings, row, column) {
      return _fnGetCellData(settings, row, column, type)
    }, 1)
  });
  _api_registerPlural("cells().indexes()", "cell().index()", function() {
    return this.iterator("cell", function(settings, row, column) {
      return {
        row: row,
        column: column,
        columnVisible: _fnColumnIndexToVisible(settings, column)
      }
    }, 1)
  });
  _api_registerPlural("cells().invalidate()", "cell().invalidate()", function(src) {
    return this.iterator("cell", function(settings, row, column) {
      _fnInvalidate(settings, row, src, column)
    })
  });
  _api_register("cell()", function(rowSelector, columnSelector, opts) {
    return _selector_first(this.cells(rowSelector, columnSelector, opts))
  });
  _api_register("cell().data()", function(data) {
    var ctx = this.context;
    var cell = this[0];
    if (data === undefined) {
      return ctx.length && cell.length ? _fnGetCellData(ctx[0], cell[0].row, cell[0].column) : undefined
    }
    _fnSetCellData(ctx[0], cell[0].row, cell[0].column, data);
    _fnInvalidate(ctx[0], cell[0].row, "data", cell[0].column);
    return this
  });
  _api_register("order()", function(order, dir) {
    var ctx = this.context;
    var args = Array.prototype.slice.call(arguments);
    if (order === undefined) {
      return ctx.length !== 0 ? ctx[0].aaSorting : undefined
    }
    if (typeof order === "number") {
      order = [
        [order, dir]
      ]
    } else if (args.length > 1) {
      order = args
    }
    return this.iterator("table", function(settings) {
      settings.aaSorting = Array.isArray(order) ? order.slice() : order
    })
  });
  _api_register("order.listener()", function(node, column, callback) {
    return this.iterator("table", function(settings) {
      _fnSortAttachListener(settings, node, {}, column, callback)
    })
  });
  _api_register("order.fixed()", function(set) {
    if (!set) {
      var ctx = this.context;
      var fixed = ctx.length ? ctx[0].aaSortingFixed : undefined;
      return Array.isArray(fixed) ? {
        pre: fixed
      } : fixed
    }
    return this.iterator("table", function(settings) {
      settings.aaSortingFixed = $.extend(true, {}, set)
    })
  });
  _api_register(["columns().order()", "column().order()"], function(dir) {
    var that = this;
    if (!dir) {
      return this.iterator("column", function(settings, idx) {
        var sort = _fnSortFlatten(settings);
        for (var i = 0, ien = sort.length; i < ien; i++) {
          if (sort[i].col === idx) {
            return sort[i].dir
          }
        }
        return null
      }, 1)
    } else {
      return this.iterator("table", function(settings, i) {
        settings.aaSorting = that[i].map(function(col) {
          return [col, dir]
        })
      })
    }
  });
  _api_registerPlural("columns().orderable()", "column().orderable()", function(directions) {
    return this.iterator("column", function(settings, idx) {
      var col = settings.aoColumns[idx];
      return directions ? col.asSorting : col.bSortable
    }, 1)
  });
  _api_register("processing()", function(show) {
    return this.iterator("table", function(ctx) {
      _fnProcessingDisplay(ctx, show)
    })
  });
  _api_register("search()", function(input, regex, smart, caseInsen) {
    var ctx = this.context;
    if (input === undefined) {
      return ctx.length !== 0 ? ctx[0].oPreviousSearch.search : undefined
    }
    return this.iterator("table", function(settings) {
      if (!settings.oFeatures.bFilter) {
        return
      }
      if (typeof regex === "object") {
        _fnFilterComplete(settings, $.extend(settings.oPreviousSearch, regex, {
          search: input
        }))
      } else {
        _fnFilterComplete(settings, $.extend(settings.oPreviousSearch, {
          search: input,
          regex: regex === null ? false : regex,
          smart: smart === null ? true : smart,
          caseInsensitive: caseInsen === null ? true : caseInsen
        }))
      }
    })
  });
  _api_register("search.fixed()", function(name, search) {
    var ret = this.iterator(true, "table", function(settings) {
      var fixed = settings.searchFixed;
      if (!name) {
        return Object.keys(fixed)
      } else if (search === undefined) {
        return fixed[name]
      } else if (search === null) {
        delete fixed[name]
      } else {
        fixed[name] = search
      }
      return this
    });
    return name !== undefined && search === undefined ? ret[0] : ret
  });
  _api_registerPlural("columns().search()", "column().search()", function(input, regex, smart, caseInsen) {
    return this.iterator("column", function(settings, column) {
      var preSearch = settings.aoPreSearchCols;
      if (input === undefined) {
        return preSearch[column].search
      }
      if (!settings.oFeatures.bFilter) {
        return
      }
      if (typeof regex === "object") {
        $.extend(preSearch[column], regex, {
          search: input
        })
      } else {
        $.extend(preSearch[column], {
          search: input,
          regex: regex === null ? false : regex,
          smart: smart === null ? true : smart,
          caseInsensitive: caseInsen === null ? true : caseInsen
        })
      }
      _fnFilterComplete(settings, settings.oPreviousSearch)
    })
  });
  _api_register(["columns().search.fixed()", "column().search.fixed()"], function(name, search) {
    var ret = this.iterator(true, "column", function(settings, colIdx) {
      var fixed = settings.aoColumns[colIdx].searchFixed;
      if (!name) {
        return Object.keys(fixed)
      } else if (search === undefined) {
        return fixed[name]
      } else if (search === null) {
        delete fixed[name]
      } else {
        fixed[name] = search
      }
      return this
    });
    return name !== undefined && search === undefined ? ret[0] : ret
  });
  _api_register("state()", function(set, ignoreTime) {
    if (!set) {
      return this.context.length ? this.context[0].oSavedState : null
    }
    var setMutate = $.extend(true, {}, set);
    return this.iterator("table", function(settings) {
      if (ignoreTime !== false) {
        setMutate.time = +new Date + 100
      }
      _fnImplementState(settings, setMutate, function() {})
    })
  });
  _api_register("state.clear()", function() {
    return this.iterator("table", function(settings) {
      settings.fnStateSaveCallback.call(settings.oInstance, settings, {})
    })
  });
  _api_register("state.loaded()", function() {
    return this.context.length ? this.context[0].oLoadedState : null
  });
  _api_register("state.save()", function() {
    return this.iterator("table", function(settings) {
      _fnSaveState(settings)
    })
  });
  var __bootstrap;
  var __foundation;
  DataTable.use = function(arg1, arg2) {
    var module = typeof arg1 === "string" ? arg2 : arg1;
    var type = typeof arg2 === "string" ? arg2 : arg1;
    if (module === undefined && typeof type === "string") {
      switch (type) {
        case "lib":
        case "jq":
          return $;
        case "win":
          return window;
        case "datetime":
          return DataTable.DateTime;
        case "luxon":
          return __luxon;
        case "moment":
          return __moment;
        case "bootstrap":
          return __bootstrap || window.bootstrap;
        case "foundation":
          return __foundation || window.Foundation;
        default:
          return null
      }
    }
    if (type === "lib" || type === "jq" || module && module.fn && module.fn.jquery) {
      $ = module
    } else if (type === "win" || module && module.document) {
      window = module;
      document = module.document
    } else if (type === "datetime" || module && module.type === "DateTime") {
      DataTable.DateTime = module
    } else if (type === "luxon" || module && module.FixedOffsetZone) {
      __luxon = module
    } else if (type === "moment" || module && module.isMoment) {
      __moment = module
    } else if (type === "bootstrap" || module && module.Modal && module.Modal.NAME === "modal") {
      __bootstrap = module
    } else if (type === "foundation" || module && module.Reveal) {
      __foundation = module
    }
  };
  DataTable.factory = function(root, jq) {
    var is = false;
    if (root && root.document) {
      window = root;
      document = root.document
    }
    if (jq && jq.fn && jq.fn.jquery) {
      $ = jq;
      is = true
    }
    return is
  };
  DataTable.versionCheck = function(version, version2) {
    var aThis = version2 ? version2.split(".") : DataTable.version.split(".");
    var aThat = version.split(".");
    var iThis, iThat;
    for (var i = 0, iLen = aThat.length; i < iLen; i++) {
      iThis = parseInt(aThis[i], 10) || 0;
      iThat = parseInt(aThat[i], 10) || 0;
      if (iThis === iThat) {
        continue
      }
      return iThis > iThat
    }
    return true
  };
  DataTable.isDataTable = function(table) {
    var t = $(table).get(0);
    var is = false;
    if (table instanceof DataTable.Api) {
      return true
    }
    $.each(DataTable.settings, function(i, o) {
      var head = o.nScrollHead ? $("table", o.nScrollHead)[0] : null;
      var foot = o.nScrollFoot ? $("table", o.nScrollFoot)[0] : null;
      if (o.nTable === t || head === t || foot === t) {
        is = true
      }
    });
    return is
  };
  DataTable.tables = function(visible) {
    var api = false;
    if ($.isPlainObject(visible)) {
      api = visible.api;
      visible = visible.visible
    }
    var a = DataTable.settings.filter(function(o) {
      return !visible || visible && $(o.nTable).is(":visible") ? true : false
    }).map(function(o) {
      return o.nTable
    });
    return api ? new _Api(a) : a
  };
  DataTable.camelToHungarian = _fnCamelToHungarian;
  _api_register("$()", function(selector, opts) {
    var rows = this.rows(opts).nodes(),
      jqRows = $(rows);
    return $([].concat(jqRows.filter(selector).toArray(), jqRows.find(selector).toArray()))
  });
  $.each(["on", "one", "off"], function(i, key) {
    _api_register(key + "()", function() {
      var args = Array.prototype.slice.call(arguments);
      args[0] = args[0].split(/\s/).map(function(e) {
        return !e.match(/\.dt\b/) ? e + ".dt" : e
      }).join(" ");
      var inst = $(this.tables().nodes());
      inst[key].apply(inst, args);
      return this
    })
  });
  _api_register("clear()", function() {
    return this.iterator("table", function(settings) {
      _fnClearTable(settings)
    })
  });
  _api_register("error()", function(msg) {
    return this.iterator("table", function(settings) {
      _fnLog(settings, 0, msg)
    })
  });
  _api_register("settings()", function() {
    return new _Api(this.context, this.context)
  });
  _api_register("init()", function() {
    var ctx = this.context;
    return ctx.length ? ctx[0].oInit : null
  });
  _api_register("data()", function() {
    return this.iterator("table", function(settings) {
      return _pluck(settings.aoData, "_aData")
    }).flatten()
  });
  _api_register("trigger()", function(name, args, bubbles) {
    return this.iterator("table", function(settings) {
      return _fnCallbackFire(settings, null, name, args, bubbles)
    }).flatten()
  });
  _api_register("ready()", function(fn) {
    var ctx = this.context;
    if (!fn) {
      return ctx.length ? ctx[0]._bInitComplete || false : null
    }
    return this.tables().every(function() {
      if (this.context[0]._bInitComplete) {
        fn.call(this)
      } else {
        this.on("init.dt.DT", function() {
          fn.call(this)
        })
      }
    })
  });
  _api_register("destroy()", function(remove) {
    remove = remove || false;
    return this.iterator("table", function(settings) {
      var classes = settings.oClasses;
      var table = settings.nTable;
      var tbody = settings.nTBody;
      var thead = settings.nTHead;
      var tfoot = settings.nTFoot;
      var jqTable = $(table);
      var jqTbody = $(tbody);
      var jqWrapper = $(settings.nTableWrapper);
      var rows = settings.aoData.map(function(r) {
        return r ? r.nTr : null
      });
      var orderClasses = classes.order;
      settings.bDestroying = true;
      _fnCallbackFire(settings, "aoDestroyCallback", "destroy", [settings], true);
      if (!remove) {
        new _Api(settings).columns().visible(true)
      }
      if (settings.resizeObserver) {
        settings.resizeObserver.disconnect()
      }
      jqWrapper.off(".DT").find(":not(tbody *)").off(".DT");
      $(window).off(".DT-" + settings.sInstance);
      if (table != thead.parentNode) {
        jqTable.children("thead").detach();
        jqTable.append(thead)
      }
      if (tfoot && table != tfoot.parentNode) {
        jqTable.children("tfoot").detach();
        jqTable.append(tfoot)
      }
      settings.colgroup.remove();
      settings.aaSorting = [];
      settings.aaSortingFixed = [];
      _fnSortingClasses(settings);
      $("th, td", thead).removeClass(orderClasses.canAsc + " " + orderClasses.canDesc + " " + orderClasses.isAsc + " " + orderClasses.isDesc).css("width", "");
      jqTbody.children().detach();
      jqTbody.append(rows);
      var orig = settings.nTableWrapper.parentNode;
      var insertBefore = settings.nTableWrapper.nextSibling;
      var removedMethod = remove ? "remove" : "detach";
      jqTable[removedMethod]();
      jqWrapper[removedMethod]();
      if (!remove && orig) {
        orig.insertBefore(table, insertBefore);
        jqTable.css("width", settings.sDestroyWidth).removeClass(classes.table)
      }
      var idx = DataTable.settings.indexOf(settings);
      if (idx !== -1) {
        DataTable.settings.splice(idx, 1)
      }
    })
  });
  $.each(["column", "row", "cell"], function(i, type) {
    _api_register(type + "s().every()", function(fn) {
      var opts = this.selector.opts;
      var api = this;
      var inst;
      var counter = 0;
      return this.iterator("every", function(settings, selectedIdx, tableIdx) {
        inst = api[type](selectedIdx, opts);
        if (type === "cell") {
          fn.call(inst, inst[0][0].row, inst[0][0].column, tableIdx, counter)
        } else {
          fn.call(inst, selectedIdx, tableIdx, counter)
        }
        counter++
      })
    })
  });
  _api_register("i18n()", function(token, def, plural) {
    var ctx = this.context[0];
    var resolved = _fnGetObjectDataFn(token)(ctx.oLanguage);
    if (resolved === undefined) {
      resolved = def
    }
    if ($.isPlainObject(resolved)) {
      resolved = plural !== undefined && resolved[plural] !== undefined ? resolved[plural] : resolved._
    }
    return typeof resolved === "string" ? resolved.replace("%d", plural) : resolved
  });
  DataTable.version = "2.2.1";
  DataTable.settings = [];
  DataTable.models = {};
  DataTable.models.oSearch = {
    caseInsensitive: true,
    search: "",
    regex: false,
    smart: true,
    return: false
  };
  DataTable.models.oRow = {
    nTr: null,
    anCells: null,
    _aData: [],
    _aSortData: null,
    _aFilterData: null,
    _sFilterRow: null,
    src: null,
    idx: -1,
    displayData: null
  };
  DataTable.models.oColumn = {
    idx: null,
    aDataSort: null,
    asSorting: null,
    bSearchable: null,
    bSortable: null,
    bVisible: null,
    _sManualType: null,
    _bAttrSrc: false,
    fnCreatedCell: null,
    fnGetData: null,
    fnSetData: null,
    mData: null,
    mRender: null,
    sClass: null,
    sContentPadding: null,
    sDefaultContent: null,
    sName: null,
    sSortDataType: "std",
    sSortingClass: null,
    sTitle: null,
    sType: null,
    sWidth: null,
    sWidthOrig: null,
    maxLenString: null,
    searchFixed: null
  };
  DataTable.defaults = {
    aaData: null,
    aaSorting: [
      [0, "asc"]
    ],
    aaSortingFixed: [],
    ajax: null,
    aLengthMenu: [10, 25, 50, 100],
    aoColumns: null,
    aoColumnDefs: null,
    aoSearchCols: [],
    bAutoWidth: true,
    bDeferRender: true,
    bDestroy: false,
    bFilter: true,
    bInfo: true,
    bLengthChange: true,
    bPaginate: true,
    bProcessing: false,
    bRetrieve: false,
    bScrollCollapse: false,
    bServerSide: false,
    bSort: true,
    bSortMulti: true,
    bSortCellsTop: null,
    bSortClasses: true,
    bStateSave: false,
    fnCreatedRow: null,
    fnDrawCallback: null,
    fnFooterCallback: null,
    fnFormatNumber: function(toFormat) {
      return toFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
    },
    fnHeaderCallback: null,
    fnInfoCallback: null,
    fnInitComplete: null,
    fnPreDrawCallback: null,
    fnRowCallback: null,
    fnStateLoadCallback: function(settings) {
      try {
        return JSON.parse((settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem("DataTables_" + settings.sInstance + "_" + location.pathname))
      } catch (e) {
        return {}
      }
    },
    fnStateLoadParams: null,
    fnStateLoaded: null,
    fnStateSaveCallback: function(settings, data) {
      try {
        (settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem("DataTables_" + settings.sInstance + "_" + location.pathname, JSON.stringify(data))
      } catch (e) {}
    },
    fnStateSaveParams: null,
    iStateDuration: 7200,
    iDisplayLength: 10,
    iDisplayStart: 0,
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
      oAria: {
        orderable: ": Activate to sort",
        orderableReverse: ": Activate to invert sorting",
        orderableRemove: ": Activate to remove sorting",
        paginate: {
          first: "First",
          last: "Last",
          next: "Next",
          previous: "Previous",
          number: ""
        }
      },
      oPaginate: {
        sFirst: "«",
        sLast: "»",
        sNext: "›",
        sPrevious: "‹"
      },
      entries: {
        _: "entries",
        1: "entry"
      },
      sEmptyTable: "No data available in table",
      sInfo: "Showing _START_ to _END_ of _TOTAL_ _ENTRIES-TOTAL_",
      sInfoEmpty: "Showing 0 to 0 of 0 _ENTRIES-TOTAL_",
      sInfoFiltered: "(filtered from _MAX_ total _ENTRIES-MAX_)",
      sInfoPostFix: "",
      sDecimal: "",
      sThousands: ",",
      sLengthMenu: "_MENU_ _ENTRIES_ per page",
      sLoadingRecords: "Loading...",
      sProcessing: "",
      sSearch: "Search:",
      sSearchPlaceholder: "",
      sUrl: "",
      sZeroRecords: "No matching records found"
    },
    orderDescReverse: true,
    oSearch: $.extend({}, DataTable.models.oSearch),
    layout: {
      topStart: "pageLength",
      topEnd: "search",
      bottomStart: "info",
      bottomEnd: "paging"
    },
    sDom: null,
    searchDelay: null,
    sPaginationType: "",
    sScrollX: "",
    sScrollXInner: "",
    sScrollY: "",
    sServerMethod: "GET",
    renderer: null,
    rowId: "DT_RowId",
    caption: null,
    iDeferLoading: null
  };
  _fnHungarianMap(DataTable.defaults);
  DataTable.defaults.column = {
    aDataSort: null,
    iDataSort: -1,
    ariaTitle: "",
    asSorting: ["asc", "desc", ""],
    bSearchable: true,
    bSortable: true,
    bVisible: true,
    fnCreatedCell: null,
    mData: null,
    mRender: null,
    sCellType: "td",
    sClass: "",
    sContentPadding: "",
    sDefaultContent: null,
    sName: "",
    sSortDataType: "std",
    sTitle: null,
    sType: null,
    sWidth: null
  };
  _fnHungarianMap(DataTable.defaults.column);
  DataTable.models.oSettings = {
    oFeatures: {
      bAutoWidth: null,
      bDeferRender: null,
      bFilter: null,
      bInfo: true,
      bLengthChange: true,
      bPaginate: null,
      bProcessing: null,
      bServerSide: null,
      bSort: null,
      bSortMulti: null,
      bSortClasses: null,
      bStateSave: null
    },
    oScroll: {
      bCollapse: null,
      iBarWidth: 0,
      sX: null,
      sXInner: null,
      sY: null
    },
    oLanguage: {
      fnInfoCallback: null
    },
    oBrowser: {
      bScrollbarLeft: false,
      barWidth: 0
    },
    ajax: null,
    aanFeatures: [],
    aoData: [],
    aiDisplay: [],
    aiDisplayMaster: [],
    aIds: {},
    aoColumns: [],
    aoHeader: [],
    aoFooter: [],
    oPreviousSearch: {},
    searchFixed: {},
    aoPreSearchCols: [],
    aaSorting: null,
    aaSortingFixed: [],
    sDestroyWidth: 0,
    aoRowCallback: [],
    aoHeaderCallback: [],
    aoFooterCallback: [],
    aoDrawCallback: [],
    aoRowCreatedCallback: [],
    aoPreDrawCallback: [],
    aoInitComplete: [],
    aoStateSaveParams: [],
    aoStateLoadParams: [],
    aoStateLoaded: [],
    sTableId: "",
    nTable: null,
    nTHead: null,
    nTFoot: null,
    nTBody: null,
    nTableWrapper: null,
    bInitialised: false,
    aoOpenRows: [],
    sDom: null,
    searchDelay: null,
    sPaginationType: "two_button",
    pagingControls: 0,
    iStateDuration: 0,
    aoStateSave: [],
    aoStateLoad: [],
    oSavedState: null,
    oLoadedState: null,
    bAjaxDataGet: true,
    jqXHR: null,
    json: undefined,
    oAjaxData: undefined,
    sServerMethod: null,
    fnFormatNumber: null,
    aLengthMenu: null,
    iDraw: 0,
    bDrawing: false,
    iDrawError: -1,
    _iDisplayLength: 10,
    _iDisplayStart: 0,
    _iRecordsTotal: 0,
    _iRecordsDisplay: 0,
    oClasses: {},
    bFiltered: false,
    bSorted: false,
    bSortCellsTop: null,
    oInit: null,
    aoDestroyCallback: [],
    fnRecordsTotal: function() {
      return _fnDataSource(this) == "ssp" ? this._iRecordsTotal * 1 : this.aiDisplayMaster.length
    },
    fnRecordsDisplay: function() {
      return _fnDataSource(this) == "ssp" ? this._iRecordsDisplay * 1 : this.aiDisplay.length
    },
    fnDisplayEnd: function() {
      var len = this._iDisplayLength,
        start = this._iDisplayStart,
        calc = start + len,
        records = this.aiDisplay.length,
        features = this.oFeatures,
        paginate = features.bPaginate;
      if (features.bServerSide) {
        return paginate === false || len === -1 ? start + records : Math.min(start + len, this._iRecordsDisplay)
      } else {
        return !paginate || calc > records || len === -1 ? records : calc
      }
    },
    oInstance: null,
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    aLastSort: [],
    oPlugins: {},
    rowIdFn: null,
    rowId: null,
    caption: "",
    captionNode: null,
    colgroup: null,
    deferLoading: null,
    typeDetect: true,
    resizeObserver: null,
    containerWidth: -1
  };
  var extPagination = DataTable.ext.pager;
  $.extend(extPagination, {
    simple: function() {
      return ["previous", "next"]
    },
    full: function() {
      return ["first", "previous", "next", "last"]
    },
    numbers: function() {
      return ["numbers"]
    },
    simple_numbers: function() {
      return ["previous", "numbers", "next"]
    },
    full_numbers: function() {
      return ["first", "previous", "numbers", "next", "last"]
    },
    first_last: function() {
      return ["first", "last"]
    },
    first_last_numbers: function() {
      return ["first", "numbers", "last"]
    },
    _numbers: _pagingNumbers,
    numbers_length: 7
  });
  $.extend(true, DataTable.ext.renderer, {
    pagingButton: {
      _: function(settings, buttonType, content, active, disabled) {
        var classes = settings.oClasses.paging;
        var btnClasses = [classes.button];
        var btn;
        if (active) {
          btnClasses.push(classes.active)
        }
        if (disabled) {
          btnClasses.push(classes.disabled)
        }
        if (buttonType === "ellipsis") {
          btn = $('<span class="ellipsis"></span>').html(content)[0]
        } else {
          btn = $("<button>", {
            class: btnClasses.join(" "),
            role: "link",
            type: "button"
          }).html(content)
        }
        return {
          display: btn,
          clicker: btn
        }
      }
    },
    pagingContainer: {
      _: function(settings, buttons) {
        return buttons
      }
    }
  });
  var _filterString = function(stripHtml, normalize) {
    return function(str) {
      if (_empty(str) || typeof str !== "string") {
        return str
      }
      str = str.replace(_re_new_lines, " ");
      if (stripHtml) {
        str = _stripHtml(str)
      }
      if (normalize) {
        str = _normalize(str, false)
      }
      return str
    }
  };

  function __mld(dtLib, momentFn, luxonFn, dateFn, arg1) {
    if (__moment) {
      return dtLib[momentFn](arg1)
    } else if (__luxon) {
      return dtLib[luxonFn](arg1)
    }
    return dateFn ? dtLib[dateFn](arg1) : dtLib
  }
  var __mlWarning = false;
  var __luxon;
  var __moment;

  function resolveWindowLibs() {
    if (window.luxon && !__luxon) {
      __luxon = window.luxon
    }
    if (window.moment && !__moment) {
      __moment = window.moment
    }
  }

  function __mldObj(d, format, locale) {
    var dt;
    resolveWindowLibs();
    if (__moment) {
      dt = __moment.utc(d, format, locale, true);
      if (!dt.isValid()) {
        return null
      }
    } else if (__luxon) {
      dt = format && typeof d === "string" ? __luxon.DateTime.fromFormat(d, format) : __luxon.DateTime.fromISO(d);
      if (!dt.isValid) {
        return null
      }
      dt = dt.setLocale(locale)
    } else if (!format) {
      dt = new Date(d)
    } else {
      if (!__mlWarning) {
        alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17")
      }
      __mlWarning = true
    }
    return dt
  }

  function __mlHelper(localeString) {
    return function(from, to, locale, def) {
      if (arguments.length === 0) {
        locale = "en";
        to = null;
        from = null
      } else if (arguments.length === 1) {
        locale = "en";
        to = from;
        from = null
      } else if (arguments.length === 2) {
        locale = to;
        to = from;
        from = null
      }
      var typeName = "datetime" + (to ? "-" + to : "");
      if (!DataTable.ext.type.order[typeName + "-pre"]) {
        DataTable.type(typeName, {
          detect: function(d) {
            return d === typeName ? typeName : false
          },
          order: {
            pre: function(d) {
              return d.valueOf()
            }
          },
          className: "dt-right"
        })
      }
      return function(d, type) {
        if (d === null || d === undefined) {
          if (def === "--now") {
            var local = new Date;
            d = new Date(Date.UTC(local.getFullYear(), local.getMonth(), local.getDate(), local.getHours(), local.getMinutes(), local.getSeconds()))
          } else {
            d = ""
          }
        }
        if (type === "type") {
          return typeName
        }
        if (d === "") {
          return type !== "sort" ? "" : __mldObj("0000-01-01 00:00:00", null, locale)
        }
        if (to !== null && from === to && type !== "sort" && type !== "type" && !(d instanceof Date)) {
          return d
        }
        var dt = __mldObj(d, from, locale);
        if (dt === null) {
          return d
        }
        if (type === "sort") {
          return dt
        }
        var formatted = to === null ? __mld(dt, "toDate", "toJSDate", "")[localeString]() : __mld(dt, "format", "toFormat", "toISOString", to);
        return type === "display" ? _escapeHtml(formatted) : formatted
      }
    }
  }
  var __thousands = ",";
  var __decimal = ".";
  if (window.Intl !== undefined) {
    try {
      var num = (new Intl.NumberFormat).formatToParts(100000.1);
      for (var i = 0; i < num.length; i++) {
        if (num[i].type === "group") {
          __thousands = num[i].value
        } else if (num[i].type === "decimal") {
          __decimal = num[i].value
        }
      }
    } catch (e) {}
  }
  DataTable.datetime = function(format, locale) {
    var typeName = "datetime-" + format;
    if (!locale) {
      locale = "en"
    }
    if (!DataTable.ext.type.order[typeName]) {
      DataTable.type(typeName, {
        detect: function(d) {
          var dt = __mldObj(d, format, locale);
          return d === "" || dt ? typeName : false
        },
        order: {
          pre: function(d) {
            return __mldObj(d, format, locale) || 0
          }
        },
        className: "dt-right"
      })
    }
  };
  DataTable.render = {
    date: __mlHelper("toLocaleDateString"),
    datetime: __mlHelper("toLocaleString"),
    time: __mlHelper("toLocaleTimeString"),
    number: function(thousands, decimal, precision, prefix, postfix) {
      if (thousands === null || thousands === undefined) {
        thousands = __thousands
      }
      if (decimal === null || decimal === undefined) {
        decimal = __decimal
      }
      return {
        display: function(d) {
          if (typeof d !== "number" && typeof d !== "string") {
            return d
          }
          if (d === "" || d === null) {
            return d
          }
          var negative = d < 0 ? "-" : "";
          var flo = parseFloat(d);
          var abs = Math.abs(flo);
          if (abs >= 1e11 || abs < 1e-4 && abs !== 0) {
            var exp = flo.toExponential(precision).split(/e\+?/);
            return exp[0] + " x 10<sup>" + exp[1] + "</sup>"
          }
          if (isNaN(flo)) {
            return _escapeHtml(d)
          }
          flo = flo.toFixed(precision);
          d = Math.abs(flo);
          var intPart = parseInt(d, 10);
          var floatPart = precision ? decimal + (d - intPart).toFixed(precision).substring(2) : "";
          if (intPart === 0 && parseFloat(floatPart) === 0) {
            negative = ""
          }
          return negative + (prefix || "") + intPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousands) + floatPart + (postfix || "")
        }
      }
    },
    text: function() {
      return {
        display: _escapeHtml,
        filter: _escapeHtml
      }
    }
  };
  var _extTypes = DataTable.ext.type;
  DataTable.type = function(name, prop, val) {
    if (!prop) {
      return {
        className: _extTypes.className[name],
        detect: _extTypes.detect.find(function(fn) {
          return fn._name === name
        }),
        order: {
          pre: _extTypes.order[name + "-pre"],
          asc: _extTypes.order[name + "-asc"],
          desc: _extTypes.order[name + "-desc"]
        },
        render: _extTypes.render[name],
        search: _extTypes.search[name]
      }
    }
    var setProp = function(prop, propVal) {
      _extTypes[prop][name] = propVal
    };
    var setDetect = function(detect) {
      Object.defineProperty(detect, "_name", {
        value: name
      });
      var idx = _extTypes.detect.findIndex(function(item) {
        return item._name === name
      });
      if (idx === -1) {
        _extTypes.detect.unshift(detect)
      } else {
        _extTypes.detect.splice(idx, 1, detect)
      }
    };
    var setOrder = function(obj) {
      _extTypes.order[name + "-pre"] = obj.pre;
      _extTypes.order[name + "-asc"] = obj.asc;
      _extTypes.order[name + "-desc"] = obj.desc
    };
    if (val === undefined) {
      val = prop;
      prop = null
    }
    if (prop === "className") {
      setProp("className", val)
    } else if (prop === "detect") {
      setDetect(val)
    } else if (prop === "order") {
      setOrder(val)
    } else if (prop === "render") {
      setProp("render", val)
    } else if (prop === "search") {
      setProp("search", val)
    } else if (!prop) {
      if (val.className) {
        setProp("className", val.className)
      }
      if (val.detect !== undefined) {
        setDetect(val.detect)
      }
      if (val.order) {
        setOrder(val.order)
      }
      if (val.render !== undefined) {
        setProp("render", val.render)
      }
      if (val.search !== undefined) {
        setProp("search", val.search)
      }
    }
  };
  DataTable.types = function() {
    return _extTypes.detect.map(function(fn) {
      return fn._name
    })
  };
  var __diacriticSort = function(a, b) {
    a = a !== null && a !== undefined ? a.toString().toLowerCase() : "";
    b = b !== null && b !== undefined ? b.toString().toLowerCase() : "";
    return a.localeCompare(b, navigator.languages[0] || navigator.language, {
      numeric: true,
      ignorePunctuation: true
    })
  };
  var __diacriticHtmlSort = function(a, b) {
    a = _stripHtml(a);
    b = _stripHtml(b);
    return __diacriticSort(a, b)
  };
  DataTable.type("string", {
    detect: function() {
      return "string"
    },
    order: {
      pre: function(a) {
        return _empty(a) && typeof a !== "boolean" ? "" : typeof a === "string" ? a.toLowerCase() : !a.toString ? "" : a.toString()
      }
    },
    search: _filterString(false, true)
  });
  DataTable.type("string-utf8", {
    detect: {
      allOf: function(d) {
        return true
      },
      oneOf: function(d) {
        return !_empty(d) && navigator.languages && typeof d === "string" && d.match(/[^\x00-\x7F]/)
      }
    },
    order: {
      asc: __diacriticSort,
      desc: function(a, b) {
        return __diacriticSort(a, b) * -1
      }
    },
    search: _filterString(false, true)
  });
  DataTable.type("html", {
    detect: {
      allOf: function(d) {
        return _empty(d) || typeof d === "string" && d.indexOf("<") !== -1
      },
      oneOf: function(d) {
        return !_empty(d) && typeof d === "string" && d.indexOf("<") !== -1
      }
    },
    order: {
      pre: function(a) {
        return _empty(a) ? "" : a.replace ? _stripHtml(a).trim().toLowerCase() : a + ""
      }
    },
    search: _filterString(true, true)
  });
  DataTable.type("html-utf8", {
    detect: {
      allOf: function(d) {
        return _empty(d) || typeof d === "string" && d.indexOf("<") !== -1
      },
      oneOf: function(d) {
        return navigator.languages && !_empty(d) && typeof d === "string" && d.indexOf("<") !== -1 && typeof d === "string" && d.match(/[^\x00-\x7F]/)
      }
    },
    order: {
      asc: __diacriticHtmlSort,
      desc: function(a, b) {
        return __diacriticHtmlSort(a, b) * -1
      }
    },
    search: _filterString(true, true)
  });
  DataTable.type("date", {
    className: "dt-type-date",
    detect: {
      allOf: function(d) {
        if (d && !(d instanceof Date) && !_re_date.test(d)) {
          return null
        }
        var parsed = Date.parse(d);
        return parsed !== null && !isNaN(parsed) || _empty(d)
      },
      oneOf: function(d) {
        return d instanceof Date || typeof d === "string" && _re_date.test(d)
      }
    },
    order: {
      pre: function(d) {
        var ts = Date.parse(d);
        return isNaN(ts) ? -Infinity : ts
      }
    }
  });
  DataTable.type("html-num-fmt", {
    className: "dt-type-numeric",
    detect: {
      allOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _htmlNumeric(d, decimal, true, false)
      },
      oneOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _htmlNumeric(d, decimal, true, false)
      }
    },
    order: {
      pre: function(d, s) {
        var dp = s.oLanguage.sDecimal;
        return __numericReplace(d, dp, _re_html, _re_formatted_numeric)
      }
    },
    search: _filterString(true, true)
  });
  DataTable.type("html-num", {
    className: "dt-type-numeric",
    detect: {
      allOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _htmlNumeric(d, decimal, false, true)
      },
      oneOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _htmlNumeric(d, decimal, false, false)
      }
    },
    order: {
      pre: function(d, s) {
        var dp = s.oLanguage.sDecimal;
        return __numericReplace(d, dp, _re_html)
      }
    },
    search: _filterString(true, true)
  });
  DataTable.type("num-fmt", {
    className: "dt-type-numeric",
    detect: {
      allOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _isNumber(d, decimal, true, true)
      },
      oneOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _isNumber(d, decimal, true, false)
      }
    },
    order: {
      pre: function(d, s) {
        var dp = s.oLanguage.sDecimal;
        return __numericReplace(d, dp, _re_formatted_numeric)
      }
    }
  });
  DataTable.type("num", {
    className: "dt-type-numeric",
    detect: {
      allOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _isNumber(d, decimal, false, true)
      },
      oneOf: function(d, settings) {
        var decimal = settings.oLanguage.sDecimal;
        return _isNumber(d, decimal, false, false)
      }
    },
    order: {
      pre: function(d, s) {
        var dp = s.oLanguage.sDecimal;
        return __numericReplace(d, dp)
      }
    }
  });
  var __numericReplace = function(d, decimalPlace, re1, re2) {
    if (d !== 0 && (!d || d === "-")) {
      return -Infinity
    }
    var type = typeof d;
    if (type === "number" || type === "bigint") {
      return d
    }
    if (decimalPlace) {
      d = _numToDecimal(d, decimalPlace)
    }
    if (d.replace) {
      if (re1) {
        d = d.replace(re1, "")
      }
      if (re2) {
        d = d.replace(re2, "")
      }
    }
    return d * 1
  };
  $.extend(true, DataTable.ext.renderer, {
    footer: {
      _: function(settings, cell, classes) {
        cell.addClass(classes.tfoot.cell)
      }
    },
    header: {
      _: function(settings, cell, classes) {
        cell.addClass(classes.thead.cell);
        if (!settings.oFeatures.bSort) {
          cell.addClass(classes.order.none)
        }
        var legacyTop = settings.bSortCellsTop;
        var headerRows = cell.closest("thead").find("tr");
        var rowIdx = cell.parent().index();
        if (cell.attr("data-dt-order") === "disable" || cell.parent().attr("data-dt-order") === "disable" || legacyTop === true && rowIdx !== 0 || legacyTop === false && rowIdx !== headerRows.length - 1) {
          return
        }
        $(settings.nTable).on("order.dt.DT column-visibility.dt.DT", function(e, ctx) {
          if (settings !== ctx) {
            return
          }
          var sorting = ctx.sortDetails;
          if (!sorting) {
            return
          }
          var i;
          var orderClasses = classes.order;
          var columns = ctx.api.columns(cell);
          var col = settings.aoColumns[columns.flatten()[0]];
          var orderable = columns.orderable().includes(true);
          var ariaType = "";
          var indexes = columns.indexes();
          var sortDirs = columns.orderable(true).flatten();
          var orderedColumns = _pluck(sorting, "col");
          var tabIndex = settings.iTabIndex;
          cell.removeClass(orderClasses.isAsc + " " + orderClasses.isDesc).toggleClass(orderClasses.none, !orderable).toggleClass(orderClasses.canAsc, orderable && sortDirs.includes("asc")).toggleClass(orderClasses.canDesc, orderable && sortDirs.includes("desc"));
          var isOrdering = true;
          for (i = 0; i < indexes.length; i++) {
            if (!orderedColumns.includes(indexes[i])) {
              isOrdering = false
            }
          }
          if (isOrdering) {
            var orderDirs = columns.order();
            cell.addClass(orderDirs.includes("asc") ? orderClasses.isAsc : "" + orderDirs.includes("desc") ? orderClasses.isDesc : "")
          }
          var firstVis = -1;
          for (i = 0; i < orderedColumns.length; i++) {
            if (settings.aoColumns[orderedColumns[i]].bVisible) {
              firstVis = orderedColumns[i];
              break
            }
          }
          if (indexes[0] == firstVis) {
            var firstSort = sorting[0];
            var sortOrder = col.asSorting;
            cell.attr("aria-sort", firstSort.dir === "asc" ? "ascending" : "descending");
            ariaType = !sortOrder[firstSort.index + 1] ? "Remove" : "Reverse"
          } else {
            cell.removeAttr("aria-sort")
          }
          cell.attr("aria-label", orderable ? col.ariaTitle + ctx.api.i18n("oAria.orderable" + ariaType) : col.ariaTitle);
          if (orderable) {
            var orderSpan = cell.find(".dt-column-order");
            orderSpan.attr("role", "button");
            if (tabIndex !== -1) {
              orderSpan.attr("tabindex", tabIndex)
            }
          }
        })
      }
    },
    layout: {
      _: function(settings, container, items) {
        var classes = settings.oClasses.layout;
        var row = $("<div/>").attr("id", items.id || null).addClass(items.className || classes.row).appendTo(container);
        DataTable.ext.renderer.layout._forLayoutRow(items, function(key, val) {
          if (key === "id" || key === "className") {
            return
          }
          var klass = "";
          if (val.table) {
            row.addClass(classes.tableRow);
            klass += classes.tableCell + " "
          }
          if (key === "start") {
            klass += classes.start
          } else if (key === "end") {
            klass += classes.end
          } else {
            klass += classes.full
          }
          $("<div/>").attr({
            id: val.id || null,
            class: val.className ? val.className : classes.cell + " " + klass
          }).append(val.contents).appendTo(row)
        })
      },
      _forLayoutRow: function(items, fn) {
        var layoutEnum = function(x) {
          switch (x) {
            case "":
              return 0;
            case "start":
              return 1;
            case "end":
              return 2;
            default:
              return 3
          }
        };
        Object.keys(items).sort(function(a, b) {
          return layoutEnum(a) - layoutEnum(b)
        }).forEach(function(key) {
          fn(key, items[key])
        })
      }
    }
  });
  DataTable.feature = {};
  DataTable.feature.register = function(name, cb, legacy) {
    DataTable.ext.features[name] = cb;
    if (legacy) {
      _ext.feature.push({
        cFeature: legacy,
        fnInit: cb
      })
    }
  };

  function _divProp(el, prop, val) {
    if (val) {
      el[prop] = val
    }
  }
  DataTable.feature.register("div", function(settings, opts) {
    var n = $("<div>")[0];
    if (opts) {
      _divProp(n, "className", opts.className);
      _divProp(n, "id", opts.id);
      _divProp(n, "innerHTML", opts.html);
      _divProp(n, "textContent", opts.text)
    }
    return n
  });
  DataTable.feature.register("info", function(settings, opts) {
    if (!settings.oFeatures.bInfo) {
      return null
    }
    var lang = settings.oLanguage,
      tid = settings.sTableId,
      n = $("<div/>", {
        class: settings.oClasses.info.container
      });
    opts = $.extend({
      callback: lang.fnInfoCallback,
      empty: lang.sInfoEmpty,
      postfix: lang.sInfoPostFix,
      search: lang.sInfoFiltered,
      text: lang.sInfo
    }, opts);
    settings.aoDrawCallback.push(function(s) {
      _fnUpdateInfo(s, opts, n)
    });
    if (!settings._infoEl) {
      n.attr({
        "aria-live": "polite",
        id: tid + "_info",
        role: "status"
      });
      $(settings.nTable).attr("aria-describedby", tid + "_info");
      settings._infoEl = n
    }
    return n
  }, "i");

  function _fnUpdateInfo(settings, opts, node) {
    var start = settings._iDisplayStart + 1,
      end = settings.fnDisplayEnd(),
      max = settings.fnRecordsTotal(),
      total = settings.fnRecordsDisplay(),
      out = total ? opts.text : opts.empty;
    if (total !== max) {
      out += " " + opts.search
    }
    out += opts.postfix;
    out = _fnMacros(settings, out);
    if (opts.callback) {
      out = opts.callback.call(settings.oInstance, settings, start, end, max, total, out)
    }
    node.html(out);
    _fnCallbackFire(settings, null, "info", [settings, node[0], out])
  }
  var __searchCounter = 0;
  DataTable.feature.register("search", function(settings, opts) {
    if (!settings.oFeatures.bFilter) {
      return null
    }
    var classes = settings.oClasses.search;
    var tableId = settings.sTableId;
    var language = settings.oLanguage;
    var previousSearch = settings.oPreviousSearch;
    var input = '<input type="search" class="' + classes.input + '"/>';
    opts = $.extend({
      placeholder: language.sSearchPlaceholder,
      processing: false,
      text: language.sSearch
    }, opts);
    if (opts.text.indexOf("_INPUT_") === -1) {
      opts.text += "_INPUT_"
    }
    opts.text = _fnMacros(settings, opts.text);
    var end = opts.text.match(/_INPUT_$/);
    var start = opts.text.match(/^_INPUT_/);
    var removed = opts.text.replace(/_INPUT_/, "");
    var str = "<label>" + opts.text + "</label>";
    if (start) {
      str = "_INPUT_<label>" + removed + "</label>"
    } else if (end) {
      str = "<label>" + removed + "</label>_INPUT_"
    }
    var filter = $("<div>").addClass(classes.container).append(str.replace(/_INPUT_/, input));
    filter.find("label").attr("for", "dt-search-" + __searchCounter);
    filter.find("input").attr("id", "dt-search-" + __searchCounter);
    __searchCounter++;
    var searchFn = function(event) {
      var val = this.value;
      if (previousSearch.return && event.key !== "Enter") {
        return
      }
      if (val != previousSearch.search) {
        _fnProcessingRun(settings, opts.processing, function() {
          previousSearch.search = val;
          _fnFilterComplete(settings, previousSearch);
          settings._iDisplayStart = 0;
          _fnDraw(settings)
        })
      }
    };
    var searchDelay = settings.searchDelay !== null ? settings.searchDelay : 0;
    var jqFilter = $("input", filter).val(previousSearch.search).attr("placeholder", opts.placeholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", searchDelay ? DataTable.util.debounce(searchFn, searchDelay) : searchFn).on("mouseup.DT", function(e) {
      setTimeout(function() {
        searchFn.call(jqFilter[0], e)
      }, 10)
    }).on("keypress.DT", function(e) {
      if (e.keyCode == 13) {
        return false
      }
    }).attr("aria-controls", tableId);
    $(settings.nTable).on("search.dt.DT", function(ev, s) {
      if (settings === s && jqFilter[0] !== document.activeElement) {
        jqFilter.val(typeof previousSearch.search !== "function" ? previousSearch.search : "")
      }
    });
    return filter
  }, "f");
  DataTable.feature.register("paging", function(settings, opts) {
    if (!settings.oFeatures.bPaginate) {
      return null
    }
    opts = $.extend({
      buttons: DataTable.ext.pager.numbers_length,
      type: settings.sPaginationType,
      boundaryNumbers: true,
      firstLast: true,
      previousNext: true,
      numbers: true
    }, opts);
    var host = $("<div/>").addClass(settings.oClasses.paging.container + (opts.type ? " paging_" + opts.type : "")).append($("<nav>").attr("aria-label", "pagination").addClass(settings.oClasses.paging.nav));
    var draw = function() {
      _pagingDraw(settings, host.children(), opts)
    };
    settings.aoDrawCallback.push(draw);
    $(settings.nTable).on("column-sizing.dt.DT", draw);
    return host
  }, "p");

  function _pagingDynamic(opts) {
    var out = [];
    if (opts.numbers) {
      out.push("numbers")
    }
    if (opts.previousNext) {
      out.unshift("previous");
      out.push("next")
    }
    if (opts.firstLast) {
      out.unshift("first");
      out.push("last")
    }
    return out
  }

  function _pagingDraw(settings, host, opts) {
    if (!settings._bInitComplete) {
      return
    }
    var plugin = opts.type ? DataTable.ext.pager[opts.type] : _pagingDynamic,
      aria = settings.oLanguage.oAria.paginate || {},
      start = settings._iDisplayStart,
      len = settings._iDisplayLength,
      visRecords = settings.fnRecordsDisplay(),
      all = len === -1,
      page = all ? 0 : Math.ceil(start / len),
      pages = all ? 1 : Math.ceil(visRecords / len),
      buttons = [],
      buttonEls = [],
      buttonsNested = plugin(opts).map(function(val) {
        return val === "numbers" ? _pagingNumbers(page, pages, opts.buttons, opts.boundaryNumbers) : val
      });
    buttons = buttons.concat.apply(buttons, buttonsNested);
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      var btnInfo = _pagingButtonInfo(settings, button, page, pages);
      var btn = _fnRenderer(settings, "pagingButton")(settings, button, btnInfo.display, btnInfo.active, btnInfo.disabled);
      var ariaLabel = typeof button === "string" ? aria[button] : aria.number ? aria.number + (button + 1) : null;
      $(btn.clicker).attr({
        "aria-controls": settings.sTableId,
        "aria-disabled": btnInfo.disabled ? "true" : null,
        "aria-current": btnInfo.active ? "page" : null,
        "aria-label": ariaLabel,
        "data-dt-idx": button,
        tabIndex: btnInfo.disabled ? -1 : settings.iTabIndex && btn.clicker[0].nodeName.toLowerCase() !== "span" ? settings.iTabIndex : null
      });
      if (typeof button !== "number") {
        $(btn.clicker).addClass(button)
      }
      _fnBindAction(btn.clicker, {
        action: button
      }, function(e) {
        e.preventDefault();
        _fnPageChange(settings, e.data.action, true)
      });
      buttonEls.push(btn.display)
    }
    var wrapped = _fnRenderer(settings, "pagingContainer")(settings, buttonEls);
    var activeEl = host.find(document.activeElement).data("dt-idx");
    host.empty().append(wrapped);
    if (activeEl !== undefined) {
      host.find("[data-dt-idx=" + activeEl + "]").trigger("focus")
    }
    if (buttonEls.length) {
      var outerHeight = $(buttonEls[0]).outerHeight();
      if (opts.buttons > 1 && outerHeight > 0 && $(host).height() >= outerHeight * 2 - 10) {
        _pagingDraw(settings, host, $.extend({}, opts, {
          buttons: opts.buttons - 2
        }))
      }
    }
  }

  function _pagingButtonInfo(settings, button, page, pages) {
    var lang = settings.oLanguage.oPaginate;
    var o = {
      display: "",
      active: false,
      disabled: false
    };
    switch (button) {
      case "ellipsis":
        o.display = "&#x2026;";
        break;
      case "first":
        o.display = lang.sFirst;
        if (page === 0) {
          o.disabled = true
        }
        break;
      case "previous":
        o.display = lang.sPrevious;
        if (page === 0) {
          o.disabled = true
        }
        break;
      case "next":
        o.display = lang.sNext;
        if (pages === 0 || page === pages - 1) {
          o.disabled = true
        }
        break;
      case "last":
        o.display = lang.sLast;
        if (pages === 0 || page === pages - 1) {
          o.disabled = true
        }
        break;
      default:
        if (typeof button === "number") {
          o.display = settings.fnFormatNumber(button + 1);
          if (page === button) {
            o.active = true
          }
        }
        break
    }
    return o
  }

  function _pagingNumbers(page, pages, buttons, addFirstLast) {
    var numbers = [],
      half = Math.floor(buttons / 2),
      before = addFirstLast ? 2 : 1,
      after = addFirstLast ? 1 : 0;
    if (pages <= buttons) {
      numbers = _range(0, pages)
    } else if (buttons === 1) {
      numbers = [page]
    } else if (buttons === 3) {
      if (page <= 1) {
        numbers = [0, 1, "ellipsis"]
      } else if (page >= pages - 2) {
        numbers = _range(pages - 2, pages);
        numbers.unshift("ellipsis")
      } else {
        numbers = ["ellipsis", page, "ellipsis"]
      }
    } else if (page <= half) {
      numbers = _range(0, buttons - before);
      numbers.push("ellipsis");
      if (addFirstLast) {
        numbers.push(pages - 1)
      }
    } else if (page >= pages - 1 - half) {
      numbers = _range(pages - (buttons - before), pages);
      numbers.unshift("ellipsis");
      if (addFirstLast) {
        numbers.unshift(0)
      }
    } else {
      numbers = _range(page - half + before, page + half - after);
      numbers.push("ellipsis");
      numbers.unshift("ellipsis");
      if (addFirstLast) {
        numbers.push(pages - 1);
        numbers.unshift(0)
      }
    }
    return numbers
  }
  var __lengthCounter = 0;
  DataTable.feature.register("pageLength", function(settings, opts) {
    var features = settings.oFeatures;
    if (!features.bPaginate || !features.bLengthChange) {
      return null
    }
    opts = $.extend({
      menu: settings.aLengthMenu,
      text: settings.oLanguage.sLengthMenu
    }, opts);
    var classes = settings.oClasses.length,
      tableId = settings.sTableId,
      menu = opts.menu,
      lengths = [],
      language = [],
      i;
    if (Array.isArray(menu[0])) {
      lengths = menu[0];
      language = menu[1]
    } else {
      for (i = 0; i < menu.length; i++) {
        if ($.isPlainObject(menu[i])) {
          lengths.push(menu[i].value);
          language.push(menu[i].label)
        } else {
          lengths.push(menu[i]);
          language.push(menu[i])
        }
      }
    }
    var end = opts.text.match(/_MENU_$/);
    var start = opts.text.match(/^_MENU_/);
    var removed = opts.text.replace(/_MENU_/, "");
    var str = "<label>" + opts.text + "</label>";
    if (start) {
      str = "_MENU_<label>" + removed + "</label>"
    } else if (end) {
      str = "<label>" + removed + "</label>_MENU_"
    }
    var tmpId = "tmp-" + +new Date;
    var div = $("<div/>").addClass(classes.container).append(str.replace("_MENU_", '<span id="' + tmpId + '"></span>'));
    var textNodes = [];
    Array.prototype.slice.call(div.find("label")[0].childNodes).forEach(function(el) {
      if (el.nodeType === Node.TEXT_NODE) {
        textNodes.push({
          el: el,
          text: el.textContent
        })
      }
    });
    var updateEntries = function(len) {
      textNodes.forEach(function(node) {
        node.el.textContent = _fnMacros(settings, node.text, len)
      })
    };
    var select = $("<select/>", {
      "aria-controls": tableId,
      class: classes.select
    });
    for (i = 0; i < lengths.length; i++) {
      select[0][i] = new Option(typeof language[i] === "number" ? settings.fnFormatNumber(language[i]) : language[i], lengths[i])
    }
    div.find("label").attr("for", "dt-length-" + __lengthCounter);
    select.attr("id", "dt-length-" + __lengthCounter);
    __lengthCounter++;
    div.find("#" + tmpId).replaceWith(select);
    $("select", div).val(settings._iDisplayLength).on("change.DT", function() {
      _fnLengthChange(settings, $(this).val());
      _fnDraw(settings)
    });
    $(settings.nTable).on("length.dt.DT", function(e, s, len) {
      if (settings === s) {
        $("select", div).val(len);
        updateEntries(len)
      }
    });
    updateEntries(settings._iDisplayLength);
    return div
  }, "l");
  $.fn.dataTable = DataTable;
  DataTable.$ = $;
  $.fn.dataTableSettings = DataTable.settings;
  $.fn.dataTableExt = DataTable.ext;
  $.fn.DataTable = function(opts) {
    return $(this).dataTable(opts).api()
  };
  $.each(DataTable, function(prop, val) {
    $.fn.DataTable[prop] = val
  });
  return DataTable
});
! function() {
  function a(e) {
    "use strict";
    var r = {
      omitExtraWLInCodeBlocks: {
        defaultValue: !1,
        describe: "Omit the default extra whiteline added to code blocks",
        type: "boolean"
      },
      noHeaderId: {
        defaultValue: !1,
        describe: "Turn on/off generated header id",
        type: "boolean"
      },
      prefixHeaderId: {
        defaultValue: !1,
        describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
        type: "string"
      },
      rawPrefixHeaderId: {
        defaultValue: !1,
        describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
        type: "boolean"
      },
      ghCompatibleHeaderId: {
        defaultValue: !1,
        describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
        type: "boolean"
      },
      rawHeaderId: {
        defaultValue: !1,
        describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
        type: "boolean"
      },
      headerLevelStart: {
        defaultValue: !1,
        describe: "The header blocks level start",
        type: "integer"
      },
      parseImgDimensions: {
        defaultValue: !1,
        describe: "Turn on/off image dimension parsing",
        type: "boolean"
      },
      simplifiedAutoLink: {
        defaultValue: !1,
        describe: "Turn on/off GFM autolink style",
        type: "boolean"
      },
      excludeTrailingPunctuationFromURLs: {
        defaultValue: !1,
        describe: "Excludes trailing punctuation from links generated with autoLinking",
        type: "boolean"
      },
      literalMidWordUnderscores: {
        defaultValue: !1,
        describe: "Parse midword underscores as literal underscores",
        type: "boolean"
      },
      literalMidWordAsterisks: {
        defaultValue: !1,
        describe: "Parse midword asterisks as literal asterisks",
        type: "boolean"
      },
      strikethrough: {
        defaultValue: !1,
        describe: "Turn on/off strikethrough support",
        type: "boolean"
      },
      tables: {
        defaultValue: !1,
        describe: "Turn on/off tables support",
        type: "boolean"
      },
      tablesHeaderId: {
        defaultValue: !1,
        describe: "Add an id to table headers",
        type: "boolean"
      },
      ghCodeBlocks: {
        defaultValue: !0,
        describe: "Turn on/off GFM fenced code blocks support",
        type: "boolean"
      },
      tasklists: {
        defaultValue: !1,
        describe: "Turn on/off GFM tasklist support",
        type: "boolean"
      },
      smoothLivePreview: {
        defaultValue: !1,
        describe: "Prevents weird effects in live previews due to incomplete input",
        type: "boolean"
      },
      smartIndentationFix: {
        defaultValue: !1,
        describe: "Tries to smartly fix indentation in es6 strings",
        type: "boolean"
      },
      disableForced4SpacesIndentedSublists: {
        defaultValue: !1,
        describe: "Disables the requirement of indenting nested sublists by 4 spaces",
        type: "boolean"
      },
      simpleLineBreaks: {
        defaultValue: !1,
        describe: "Parses simple line breaks as <br> (GFM Style)",
        type: "boolean"
      },
      requireSpaceBeforeHeadingText: {
        defaultValue: !1,
        describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
        type: "boolean"
      },
      ghMentions: {
        defaultValue: !1,
        describe: "Enables github @mentions",
        type: "boolean"
      },
      ghMentionsLink: {
        defaultValue: "https://github.com/{u}",
        describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
        type: "string"
      },
      encodeEmails: {
        defaultValue: !0,
        describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
        type: "boolean"
      },
      openLinksInNewWindow: {
        defaultValue: !1,
        describe: "Open all links in new windows",
        type: "boolean"
      },
      backslashEscapesHTMLTags: {
        defaultValue: !1,
        describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
        type: "boolean"
      },
      emoji: {
        defaultValue: !1,
        describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
        type: "boolean"
      },
      underline: {
        defaultValue: !1,
        describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
        type: "boolean"
      },
      ellipsis: {
        defaultValue: !0,
        describe: "Replaces three dots with the ellipsis unicode character",
        type: "boolean"
      },
      completeHTMLDocument: {
        defaultValue: !1,
        describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
        type: "boolean"
      },
      metadata: {
        defaultValue: !1,
        describe: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
        type: "boolean"
      },
      splitAdjacentBlockquotes: {
        defaultValue: !1,
        describe: "Split adjacent blockquote blocks",
        type: "boolean"
      }
    };
    if (!1 === e) return JSON.parse(JSON.stringify(r));
    var t, a = {};
    for (t in r) r.hasOwnProperty(t) && (a[t] = r[t].defaultValue);
    return a
  }
  var x = {},
    t = {},
    d = {},
    p = a(!0),
    h = "vanilla",
    _ = {
      github: {
        omitExtraWLInCodeBlocks: !0,
        simplifiedAutoLink: !0,
        excludeTrailingPunctuationFromURLs: !0,
        literalMidWordUnderscores: !0,
        strikethrough: !0,
        tables: !0,
        tablesHeaderId: !0,
        ghCodeBlocks: !0,
        tasklists: !0,
        disableForced4SpacesIndentedSublists: !0,
        simpleLineBreaks: !0,
        requireSpaceBeforeHeadingText: !0,
        ghCompatibleHeaderId: !0,
        ghMentions: !0,
        backslashEscapesHTMLTags: !0,
        emoji: !0,
        splitAdjacentBlockquotes: !0
      },
      original: {
        noHeaderId: !0,
        ghCodeBlocks: !1
      },
      ghost: {
        omitExtraWLInCodeBlocks: !0,
        parseImgDimensions: !0,
        simplifiedAutoLink: !0,
        excludeTrailingPunctuationFromURLs: !0,
        literalMidWordUnderscores: !0,
        strikethrough: !0,
        tables: !0,
        tablesHeaderId: !0,
        ghCodeBlocks: !0,
        tasklists: !0,
        smoothLivePreview: !0,
        simpleLineBreaks: !0,
        requireSpaceBeforeHeadingText: !0,
        ghMentions: !1,
        encodeEmails: !0
      },
      vanilla: a(!0),
      allOn: function() {
        "use strict";
        var e, r = a(!0),
          t = {};
        for (e in r) r.hasOwnProperty(e) && (t[e] = !0);
        return t
      }()
    };

  function g(e, r) {
    "use strict";
    var t = r ? "Error in " + r + " extension->" : "Error in unnamed extension",
      a = {
        valid: !0,
        error: ""
      };
    x.helper.isArray(e) || (e = [e]);
    for (var n = 0; n < e.length; ++n) {
      var s = t + " sub-extension " + n + ": ",
        o = e[n];
      if ("object" != typeof o) return a.valid = !1, a.error = s + "must be an object, but " + typeof o + " given", a;
      if (!x.helper.isString(o.type)) return a.valid = !1, a.error = s + 'property "type" must be a string, but ' + typeof o.type + " given", a;
      var i = o.type = o.type.toLowerCase();
      if ("lang" !== (i = "html" === (i = "language" === i ? o.type = "lang" : i) ? o.type = "output" : i) && "output" !== i && "listener" !== i) return a.valid = !1, a.error = s + "type " + i + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', a;
      if ("listener" === i) {
        if (x.helper.isUndefined(o.listeners)) return a.valid = !1, a.error = s + '. Extensions of type "listener" must have a property called "listeners"', a
      } else if (x.helper.isUndefined(o.filter) && x.helper.isUndefined(o.regex)) return a.valid = !1, a.error = s + i + ' extensions must define either a "regex" property or a "filter" method', a;
      if (o.listeners) {
        if ("object" != typeof o.listeners) return a.valid = !1, a.error = s + '"listeners" property must be an object but ' + typeof o.listeners + " given", a;
        for (var l in o.listeners)
          if (o.listeners.hasOwnProperty(l) && "function" != typeof o.listeners[l]) return a.valid = !1, a.error = s + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + l + " must be a function but " + typeof o.listeners[l] + " given", a
      }
      if (o.filter) {
        if ("function" != typeof o.filter) return a.valid = !1, a.error = s + '"filter" must be a function, but ' + typeof o.filter + " given", a
      } else if (o.regex) {
        if (x.helper.isString(o.regex) && (o.regex = new RegExp(o.regex, "g")), !(o.regex instanceof RegExp)) return a.valid = !1, a.error = s + '"regex" property must either be a string or a RegExp object, but ' + typeof o.regex + " given", a;
        if (x.helper.isUndefined(o.replace)) return a.valid = !1, a.error = s + '"regex" extensions must implement a replace string or function', a
      }
    }
    return a
  }

  function n(e, r) {
    "use strict";
    return "¨E" + r.charCodeAt(0) + "E"
  }
  x.helper = {}, x.extensions = {}, x.setOption = function(e, r) {
    "use strict";
    return p[e] = r, this
  }, x.getOption = function(e) {
    "use strict";
    return p[e]
  }, x.getOptions = function() {
    "use strict";
    return p
  }, x.resetOptions = function() {
    "use strict";
    p = a(!0)
  }, x.setFlavor = function(e) {
    "use strict";
    if (!_.hasOwnProperty(e)) throw Error(e + " flavor was not found");
    x.resetOptions();
    var r, t = _[e];
    for (r in h = e, t) t.hasOwnProperty(r) && (p[r] = t[r])
  }, x.getFlavor = function() {
    "use strict";
    return h
  }, x.getFlavorOptions = function(e) {
    "use strict";
    if (_.hasOwnProperty(e)) return _[e]
  }, x.getDefaultOptions = a, x.subParser = function(e, r) {
    "use strict";
    if (x.helper.isString(e)) {
      if (void 0 === r) {
        if (t.hasOwnProperty(e)) return t[e];
        throw Error("SubParser named " + e + " not registered!")
      }
      t[e] = r
    }
  }, x.extension = function(e, r) {
    "use strict";
    if (!x.helper.isString(e)) throw Error("Extension 'name' must be a string");
    if (e = x.helper.stdExtName(e), x.helper.isUndefined(r)) {
      if (d.hasOwnProperty(e)) return d[e];
      throw Error("Extension named " + e + " is not registered!")
    }
    "function" == typeof r && (r = r());
    var t = g(r = x.helper.isArray(r) ? r : [r], e);
    if (!t.valid) throw Error(t.error);
    d[e] = r
  }, x.getAllExtensions = function() {
    "use strict";
    return d
  }, x.removeExtension = function(e) {
    "use strict";
    delete d[e]
  }, x.resetExtensions = function() {
    "use strict";
    d = {}
  }, x.validateExtension = function(e) {
    "use strict";
    e = g(e, null);
    return !!e.valid || (console.warn(e.error), !1)
  }, x.hasOwnProperty("helper") || (x.helper = {}), x.helper.isString = function(e) {
    "use strict";
    return "string" == typeof e || e instanceof String
  }, x.helper.isFunction = function(e) {
    "use strict";
    return e && "[object Function]" === {}.toString.call(e)
  }, x.helper.isArray = function(e) {
    "use strict";
    return Array.isArray(e)
  }, x.helper.isUndefined = function(e) {
    "use strict";
    return void 0 === e
  }, x.helper.forEach = function(e, r) {
    "use strict";
    if (x.helper.isUndefined(e)) throw new Error("obj param is required");
    if (x.helper.isUndefined(r)) throw new Error("callback param is required");
    if (!x.helper.isFunction(r)) throw new Error("callback param must be a function/closure");
    if ("function" == typeof e.forEach) e.forEach(r);
    else if (x.helper.isArray(e))
      for (var t = 0; t < e.length; t++) r(e[t], t, e);
    else {
      if ("object" != typeof e) throw new Error("obj does not seem to be an array or an iterable object");
      for (var a in e) e.hasOwnProperty(a) && r(e[a], a, e)
    }
  }, x.helper.stdExtName = function(e) {
    "use strict";
    return e.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase()
  }, x.helper.escapeCharactersCallback = n, x.helper.escapeCharacters = function(e, r, t) {
    "use strict";
    r = "([" + r.replace(/([\[\]\\])/g, "\\$1") + "])", t && (r = "\\\\" + r), t = new RegExp(r, "g");
    return e = e.replace(t, n)
  }, x.helper.unescapeHTMLEntities = function(e) {
    "use strict";
    return e.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
  };

  function u(e, r, t, a) {
    "use strict";
    var n, s, o, i = -1 < (a = a || "").indexOf("g"),
      l = new RegExp(r + "|" + t, "g" + a.replace(/g/g, "")),
      c = new RegExp(r, a.replace(/g/g, "")),
      u = [];
    do {
      for (n = 0; p = l.exec(e);)
        if (c.test(p[0])) n++ || (o = (s = l.lastIndex) - p[0].length);
        else if (n && !--n) {
        var d = p.index + p[0].length,
          p = {
            left: {
              start: o,
              end: s
            },
            match: {
              start: s,
              end: p.index
            },
            right: {
              start: p.index,
              end: d
            },
            wholeMatch: {
              start: o,
              end: d
            }
          };
        if (u.push(p), !i) return u
      }
    } while (n && (l.lastIndex = s));
    return u
  }

  function s(u) {
    "use strict";
    return function(e, r, t, a, n, s, o) {
      var i = t = t.replace(x.helper.regexes.asteriskDashAndColon, x.helper.escapeCharactersCallback),
        l = "",
        c = "",
        r = r || "",
        o = o || "";
      return /^www\./i.test(t) && (t = t.replace(/^www\./i, "http://www.")), u.excludeTrailingPunctuationFromURLs && s && (l = s), r + '<a href="' + t + '"' + (c = u.openLinksInNewWindow ? ' rel="noopener noreferrer" target="¨E95Eblank"' : c) + ">" + i + "</a>" + l + o
    }
  }

  function o(n, s) {
    "use strict";
    return function(e, r, t) {
      var a = "mailto:";
      return r = r || "", t = x.subParser("unescapeSpecialChars")(t, n, s), n.encodeEmails ? (a = x.helper.encodeEmailAddress(a + t), t = x.helper.encodeEmailAddress(t)) : a += t, r + '<a href="' + a + '">' + t + "</a>"
    }
  }
  x.helper.matchRecursiveRegExp = function(e, r, t, a) {
    "use strict";
    for (var n = u(e, r, t, a), s = [], o = 0; o < n.length; ++o) s.push([e.slice(n[o].wholeMatch.start, n[o].wholeMatch.end), e.slice(n[o].match.start, n[o].match.end), e.slice(n[o].left.start, n[o].left.end), e.slice(n[o].right.start, n[o].right.end)]);
    return s
  }, x.helper.replaceRecursiveRegExp = function(e, r, t, a, n) {
    "use strict";
    x.helper.isFunction(r) || (s = r, r = function() {
      return s
    });
    var s, o = u(e, t, a, n),
      t = e,
      i = o.length;
    if (0 < i) {
      var l = [];
      0 !== o[0].wholeMatch.start && l.push(e.slice(0, o[0].wholeMatch.start));
      for (var c = 0; c < i; ++c) l.push(r(e.slice(o[c].wholeMatch.start, o[c].wholeMatch.end), e.slice(o[c].match.start, o[c].match.end), e.slice(o[c].left.start, o[c].left.end), e.slice(o[c].right.start, o[c].right.end))), c < i - 1 && l.push(e.slice(o[c].wholeMatch.end, o[c + 1].wholeMatch.start));
      o[i - 1].wholeMatch.end < e.length && l.push(e.slice(o[i - 1].wholeMatch.end)), t = l.join("")
    }
    return t
  }, x.helper.regexIndexOf = function(e, r, t) {
    "use strict";
    if (!x.helper.isString(e)) throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
    if (r instanceof RegExp == !1) throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
    e = e.substring(t || 0).search(r);
    return 0 <= e ? e + (t || 0) : e
  }, x.helper.splitAtIndex = function(e, r) {
    "use strict";
    if (x.helper.isString(e)) return [e.substring(0, r), e.substring(r)];
    throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string"
  }, x.helper.encodeEmailAddress = function(e) {
    "use strict";
    var t = [function(e) {
      return "&#" + e.charCodeAt(0) + ";"
    }, function(e) {
      return "&#x" + e.charCodeAt(0).toString(16) + ";"
    }, function(e) {
      return e
    }];
    return e = e.replace(/./g, function(e) {
      var r;
      return e = "@" === e ? t[Math.floor(2 * Math.random())](e) : .9 < (r = Math.random()) ? t[2](e) : .45 < r ? t[1](e) : t[0](e)
    })
  }, x.helper.padEnd = function(e, r, t) {
    "use strict";
    return r >>= 0, t = String(t || " "), e.length > r ? String(e) : ((r -= e.length) > t.length && (t += t.repeat(r / t.length)), String(e) + t.slice(0, r))
  }, "undefined" == typeof console && (console = {
    warn: function(e) {
      "use strict";
      alert(e)
    },
    log: function(e) {
      "use strict";
      alert(e)
    },
    error: function(e) {
      "use strict";
      throw e
    }
  }), x.helper.regexes = {
    asteriskDashAndColon: /([*_:~])/g
  }, x.helper.emojis = {
    "+1": "👍",
    "-1": "👎",
    100: "💯",
    1234: "🔢",
    "1st_place_medal": "🥇",
    "2nd_place_medal": "🥈",
    "3rd_place_medal": "🥉",
    "8ball": "🎱",
    a: "🅰️",
    ab: "🆎",
    abc: "🔤",
    abcd: "🔡",
    accept: "🉑",
    aerial_tramway: "🚡",
    airplane: "✈️",
    alarm_clock: "⏰",
    alembic: "⚗️",
    alien: "👽",
    ambulance: "🚑",
    amphora: "🏺",
    anchor: "⚓️",
    angel: "👼",
    anger: "💢",
    angry: "😠",
    anguished: "😧",
    ant: "🐜",
    apple: "🍎",
    aquarius: "♒️",
    aries: "♈️",
    arrow_backward: "◀️",
    arrow_double_down: "⏬",
    arrow_double_up: "⏫",
    arrow_down: "⬇️",
    arrow_down_small: "🔽",
    arrow_forward: "▶️",
    arrow_heading_down: "⤵️",
    arrow_heading_up: "⤴️",
    arrow_left: "⬅️",
    arrow_lower_left: "↙️",
    arrow_lower_right: "↘️",
    arrow_right: "➡️",
    arrow_right_hook: "↪️",
    arrow_up: "⬆️",
    arrow_up_down: "↕️",
    arrow_up_small: "🔼",
    arrow_upper_left: "↖️",
    arrow_upper_right: "↗️",
    arrows_clockwise: "🔃",
    arrows_counterclockwise: "🔄",
    art: "🎨",
    articulated_lorry: "🚛",
    artificial_satellite: "🛰",
    astonished: "😲",
    athletic_shoe: "👟",
    atm: "🏧",
    atom_symbol: "⚛️",
    avocado: "🥑",
    b: "🅱️",
    baby: "👶",
    baby_bottle: "🍼",
    baby_chick: "🐤",
    baby_symbol: "🚼",
    back: "🔙",
    bacon: "🥓",
    badminton: "🏸",
    baggage_claim: "🛄",
    baguette_bread: "🥖",
    balance_scale: "⚖️",
    balloon: "🎈",
    ballot_box: "🗳",
    ballot_box_with_check: "☑️",
    bamboo: "🎍",
    banana: "🍌",
    bangbang: "‼️",
    bank: "🏦",
    bar_chart: "📊",
    barber: "💈",
    baseball: "⚾️",
    basketball: "🏀",
    basketball_man: "⛹️",
    basketball_woman: "⛹️&zwj;♀️",
    bat: "🦇",
    bath: "🛀",
    bathtub: "🛁",
    battery: "🔋",
    beach_umbrella: "🏖",
    bear: "🐻",
    bed: "🛏",
    bee: "🐝",
    beer: "🍺",
    beers: "🍻",
    beetle: "🐞",
    beginner: "🔰",
    bell: "🔔",
    bellhop_bell: "🛎",
    bento: "🍱",
    biking_man: "🚴",
    bike: "🚲",
    biking_woman: "🚴&zwj;♀️",
    bikini: "👙",
    biohazard: "☣️",
    bird: "🐦",
    birthday: "🎂",
    black_circle: "⚫️",
    black_flag: "🏴",
    black_heart: "🖤",
    black_joker: "🃏",
    black_large_square: "⬛️",
    black_medium_small_square: "◾️",
    black_medium_square: "◼️",
    black_nib: "✒️",
    black_small_square: "▪️",
    black_square_button: "🔲",
    blonde_man: "👱",
    blonde_woman: "👱&zwj;♀️",
    blossom: "🌼",
    blowfish: "🐡",
    blue_book: "📘",
    blue_car: "🚙",
    blue_heart: "💙",
    blush: "😊",
    boar: "🐗",
    boat: "⛵️",
    bomb: "💣",
    book: "📖",
    bookmark: "🔖",
    bookmark_tabs: "📑",
    books: "📚",
    boom: "💥",
    boot: "👢",
    bouquet: "💐",
    bowing_man: "🙇",
    bow_and_arrow: "🏹",
    bowing_woman: "🙇&zwj;♀️",
    bowling: "🎳",
    boxing_glove: "🥊",
    boy: "👦",
    bread: "🍞",
    bride_with_veil: "👰",
    bridge_at_night: "🌉",
    briefcase: "💼",
    broken_heart: "💔",
    bug: "🐛",
    building_construction: "🏗",
    bulb: "💡",
    bullettrain_front: "🚅",
    bullettrain_side: "🚄",
    burrito: "🌯",
    bus: "🚌",
    business_suit_levitating: "🕴",
    busstop: "🚏",
    bust_in_silhouette: "👤",
    busts_in_silhouette: "👥",
    butterfly: "🦋",
    cactus: "🌵",
    cake: "🍰",
    calendar: "📆",
    call_me_hand: "🤙",
    calling: "📲",
    camel: "🐫",
    camera: "📷",
    camera_flash: "📸",
    camping: "🏕",
    cancer: "♋️",
    candle: "🕯",
    candy: "🍬",
    canoe: "🛶",
    capital_abcd: "🔠",
    capricorn: "♑️",
    car: "🚗",
    card_file_box: "🗃",
    card_index: "📇",
    card_index_dividers: "🗂",
    carousel_horse: "🎠",
    carrot: "🥕",
    cat: "🐱",
    cat2: "🐈",
    cd: "💿",
    chains: "⛓",
    champagne: "🍾",
    chart: "💹",
    chart_with_downwards_trend: "📉",
    chart_with_upwards_trend: "📈",
    checkered_flag: "🏁",
    cheese: "🧀",
    cherries: "🍒",
    cherry_blossom: "🌸",
    chestnut: "🌰",
    chicken: "🐔",
    children_crossing: "🚸",
    chipmunk: "🐿",
    chocolate_bar: "🍫",
    christmas_tree: "🎄",
    church: "⛪️",
    cinema: "🎦",
    circus_tent: "🎪",
    city_sunrise: "🌇",
    city_sunset: "🌆",
    cityscape: "🏙",
    cl: "🆑",
    clamp: "🗜",
    clap: "👏",
    clapper: "🎬",
    classical_building: "🏛",
    clinking_glasses: "🥂",
    clipboard: "📋",
    clock1: "🕐",
    clock10: "🕙",
    clock1030: "🕥",
    clock11: "🕚",
    clock1130: "🕦",
    clock12: "🕛",
    clock1230: "🕧",
    clock130: "🕜",
    clock2: "🕑",
    clock230: "🕝",
    clock3: "🕒",
    clock330: "🕞",
    clock4: "🕓",
    clock430: "🕟",
    clock5: "🕔",
    clock530: "🕠",
    clock6: "🕕",
    clock630: "🕡",
    clock7: "🕖",
    clock730: "🕢",
    clock8: "🕗",
    clock830: "🕣",
    clock9: "🕘",
    clock930: "🕤",
    closed_book: "📕",
    closed_lock_with_key: "🔐",
    closed_umbrella: "🌂",
    cloud: "☁️",
    cloud_with_lightning: "🌩",
    cloud_with_lightning_and_rain: "⛈",
    cloud_with_rain: "🌧",
    cloud_with_snow: "🌨",
    clown_face: "🤡",
    clubs: "♣️",
    cocktail: "🍸",
    coffee: "☕️",
    coffin: "⚰️",
    cold_sweat: "😰",
    comet: "☄️",
    computer: "💻",
    computer_mouse: "🖱",
    confetti_ball: "🎊",
    confounded: "😖",
    confused: "😕",
    congratulations: "㊗️",
    construction: "🚧",
    construction_worker_man: "👷",
    construction_worker_woman: "👷&zwj;♀️",
    control_knobs: "🎛",
    convenience_store: "🏪",
    cookie: "🍪",
    cool: "🆒",
    policeman: "👮",
    copyright: "©️",
    corn: "🌽",
    couch_and_lamp: "🛋",
    couple: "👫",
    couple_with_heart_woman_man: "💑",
    couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
    couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
    couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
    couplekiss_man_woman: "💏",
    couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
    cow: "🐮",
    cow2: "🐄",
    cowboy_hat_face: "🤠",
    crab: "🦀",
    crayon: "🖍",
    credit_card: "💳",
    crescent_moon: "🌙",
    cricket: "🏏",
    crocodile: "🐊",
    croissant: "🥐",
    crossed_fingers: "🤞",
    crossed_flags: "🎌",
    crossed_swords: "⚔️",
    crown: "👑",
    cry: "😢",
    crying_cat_face: "😿",
    crystal_ball: "🔮",
    cucumber: "🥒",
    cupid: "💘",
    curly_loop: "➰",
    currency_exchange: "💱",
    curry: "🍛",
    custard: "🍮",
    customs: "🛃",
    cyclone: "🌀",
    dagger: "🗡",
    dancer: "💃",
    dancing_women: "👯",
    dancing_men: "👯&zwj;♂️",
    dango: "🍡",
    dark_sunglasses: "🕶",
    dart: "🎯",
    dash: "💨",
    date: "📅",
    deciduous_tree: "🌳",
    deer: "🦌",
    department_store: "🏬",
    derelict_house: "🏚",
    desert: "🏜",
    desert_island: "🏝",
    desktop_computer: "🖥",
    male_detective: "🕵️",
    diamond_shape_with_a_dot_inside: "💠",
    diamonds: "♦️",
    disappointed: "😞",
    disappointed_relieved: "😥",
    dizzy: "💫",
    dizzy_face: "😵",
    do_not_litter: "🚯",
    dog: "🐶",
    dog2: "🐕",
    dollar: "💵",
    dolls: "🎎",
    dolphin: "🐬",
    door: "🚪",
    doughnut: "🍩",
    dove: "🕊",
    dragon: "🐉",
    dragon_face: "🐲",
    dress: "👗",
    dromedary_camel: "🐪",
    drooling_face: "🤤",
    droplet: "💧",
    drum: "🥁",
    duck: "🦆",
    dvd: "📀",
    "e-mail": "📧",
    eagle: "🦅",
    ear: "👂",
    ear_of_rice: "🌾",
    earth_africa: "🌍",
    earth_americas: "🌎",
    earth_asia: "🌏",
    egg: "🥚",
    eggplant: "🍆",
    eight_pointed_black_star: "✴️",
    eight_spoked_asterisk: "✳️",
    electric_plug: "🔌",
    elephant: "🐘",
    email: "✉️",
    end: "🔚",
    envelope_with_arrow: "📩",
    euro: "💶",
    european_castle: "🏰",
    european_post_office: "🏤",
    evergreen_tree: "🌲",
    exclamation: "❗️",
    expressionless: "😑",
    eye: "👁",
    eye_speech_bubble: "👁&zwj;🗨",
    eyeglasses: "👓",
    eyes: "👀",
    face_with_head_bandage: "🤕",
    face_with_thermometer: "🤒",
    fist_oncoming: "👊",
    factory: "🏭",
    fallen_leaf: "🍂",
    family_man_woman_boy: "👪",
    family_man_boy: "👨&zwj;👦",
    family_man_boy_boy: "👨&zwj;👦&zwj;👦",
    family_man_girl: "👨&zwj;👧",
    family_man_girl_boy: "👨&zwj;👧&zwj;👦",
    family_man_girl_girl: "👨&zwj;👧&zwj;👧",
    family_man_man_boy: "👨&zwj;👨&zwj;👦",
    family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
    family_man_man_girl: "👨&zwj;👨&zwj;👧",
    family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
    family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
    family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
    family_man_woman_girl: "👨&zwj;👩&zwj;👧",
    family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
    family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
    family_woman_boy: "👩&zwj;👦",
    family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
    family_woman_girl: "👩&zwj;👧",
    family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
    family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
    family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
    family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
    family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
    family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
    family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
    fast_forward: "⏩",
    fax: "📠",
    fearful: "😨",
    feet: "🐾",
    female_detective: "🕵️&zwj;♀️",
    ferris_wheel: "🎡",
    ferry: "⛴",
    field_hockey: "🏑",
    file_cabinet: "🗄",
    file_folder: "📁",
    film_projector: "📽",
    film_strip: "🎞",
    fire: "🔥",
    fire_engine: "🚒",
    fireworks: "🎆",
    first_quarter_moon: "🌓",
    first_quarter_moon_with_face: "🌛",
    fish: "🐟",
    fish_cake: "🍥",
    fishing_pole_and_fish: "🎣",
    fist_raised: "✊",
    fist_left: "🤛",
    fist_right: "🤜",
    flags: "🎏",
    flashlight: "🔦",
    fleur_de_lis: "⚜️",
    flight_arrival: "🛬",
    flight_departure: "🛫",
    floppy_disk: "💾",
    flower_playing_cards: "🎴",
    flushed: "😳",
    fog: "🌫",
    foggy: "🌁",
    football: "🏈",
    footprints: "👣",
    fork_and_knife: "🍴",
    fountain: "⛲️",
    fountain_pen: "🖋",
    four_leaf_clover: "🍀",
    fox_face: "🦊",
    framed_picture: "🖼",
    free: "🆓",
    fried_egg: "🍳",
    fried_shrimp: "🍤",
    fries: "🍟",
    frog: "🐸",
    frowning: "😦",
    frowning_face: "☹️",
    frowning_man: "🙍&zwj;♂️",
    frowning_woman: "🙍",
    middle_finger: "🖕",
    fuelpump: "⛽️",
    full_moon: "🌕",
    full_moon_with_face: "🌝",
    funeral_urn: "⚱️",
    game_die: "🎲",
    gear: "⚙️",
    gem: "💎",
    gemini: "♊️",
    ghost: "👻",
    gift: "🎁",
    gift_heart: "💝",
    girl: "👧",
    globe_with_meridians: "🌐",
    goal_net: "🥅",
    goat: "🐐",
    golf: "⛳️",
    golfing_man: "🏌️",
    golfing_woman: "🏌️&zwj;♀️",
    gorilla: "🦍",
    grapes: "🍇",
    green_apple: "🍏",
    green_book: "📗",
    green_heart: "💚",
    green_salad: "🥗",
    grey_exclamation: "❕",
    grey_question: "❔",
    grimacing: "😬",
    grin: "😁",
    grinning: "😀",
    guardsman: "💂",
    guardswoman: "💂&zwj;♀️",
    guitar: "🎸",
    gun: "🔫",
    haircut_woman: "💇",
    haircut_man: "💇&zwj;♂️",
    hamburger: "🍔",
    hammer: "🔨",
    hammer_and_pick: "⚒",
    hammer_and_wrench: "🛠",
    hamster: "🐹",
    hand: "✋",
    handbag: "👜",
    handshake: "🤝",
    hankey: "💩",
    hatched_chick: "🐥",
    hatching_chick: "🐣",
    headphones: "🎧",
    hear_no_evil: "🙉",
    heart: "❤️",
    heart_decoration: "💟",
    heart_eyes: "😍",
    heart_eyes_cat: "😻",
    heartbeat: "💓",
    heartpulse: "💗",
    hearts: "♥️",
    heavy_check_mark: "✔️",
    heavy_division_sign: "➗",
    heavy_dollar_sign: "💲",
    heavy_heart_exclamation: "❣️",
    heavy_minus_sign: "➖",
    heavy_multiplication_x: "✖️",
    heavy_plus_sign: "➕",
    helicopter: "🚁",
    herb: "🌿",
    hibiscus: "🌺",
    high_brightness: "🔆",
    high_heel: "👠",
    hocho: "🔪",
    hole: "🕳",
    honey_pot: "🍯",
    horse: "🐴",
    horse_racing: "🏇",
    hospital: "🏥",
    hot_pepper: "🌶",
    hotdog: "🌭",
    hotel: "🏨",
    hotsprings: "♨️",
    hourglass: "⌛️",
    hourglass_flowing_sand: "⏳",
    house: "🏠",
    house_with_garden: "🏡",
    houses: "🏘",
    hugs: "🤗",
    hushed: "😯",
    ice_cream: "🍨",
    ice_hockey: "🏒",
    ice_skate: "⛸",
    icecream: "🍦",
    id: "🆔",
    ideograph_advantage: "🉐",
    imp: "👿",
    inbox_tray: "📥",
    incoming_envelope: "📨",
    tipping_hand_woman: "💁",
    information_source: "ℹ️",
    innocent: "😇",
    interrobang: "⁉️",
    iphone: "📱",
    izakaya_lantern: "🏮",
    jack_o_lantern: "🎃",
    japan: "🗾",
    japanese_castle: "🏯",
    japanese_goblin: "👺",
    japanese_ogre: "👹",
    jeans: "👖",
    joy: "😂",
    joy_cat: "😹",
    joystick: "🕹",
    kaaba: "🕋",
    key: "🔑",
    keyboard: "⌨️",
    keycap_ten: "🔟",
    kick_scooter: "🛴",
    kimono: "👘",
    kiss: "💋",
    kissing: "😗",
    kissing_cat: "😽",
    kissing_closed_eyes: "😚",
    kissing_heart: "😘",
    kissing_smiling_eyes: "😙",
    kiwi_fruit: "🥝",
    koala: "🐨",
    koko: "🈁",
    label: "🏷",
    large_blue_circle: "🔵",
    large_blue_diamond: "🔷",
    large_orange_diamond: "🔶",
    last_quarter_moon: "🌗",
    last_quarter_moon_with_face: "🌜",
    latin_cross: "✝️",
    laughing: "😆",
    leaves: "🍃",
    ledger: "📒",
    left_luggage: "🛅",
    left_right_arrow: "↔️",
    leftwards_arrow_with_hook: "↩️",
    lemon: "🍋",
    leo: "♌️",
    leopard: "🐆",
    level_slider: "🎚",
    libra: "♎️",
    light_rail: "🚈",
    link: "🔗",
    lion: "🦁",
    lips: "👄",
    lipstick: "💄",
    lizard: "🦎",
    lock: "🔒",
    lock_with_ink_pen: "🔏",
    lollipop: "🍭",
    loop: "➿",
    loud_sound: "🔊",
    loudspeaker: "📢",
    love_hotel: "🏩",
    love_letter: "💌",
    low_brightness: "🔅",
    lying_face: "🤥",
    m: "Ⓜ️",
    mag: "🔍",
    mag_right: "🔎",
    mahjong: "🀄️",
    mailbox: "📫",
    mailbox_closed: "📪",
    mailbox_with_mail: "📬",
    mailbox_with_no_mail: "📭",
    man: "👨",
    man_artist: "👨&zwj;🎨",
    man_astronaut: "👨&zwj;🚀",
    man_cartwheeling: "🤸&zwj;♂️",
    man_cook: "👨&zwj;🍳",
    man_dancing: "🕺",
    man_facepalming: "🤦&zwj;♂️",
    man_factory_worker: "👨&zwj;🏭",
    man_farmer: "👨&zwj;🌾",
    man_firefighter: "👨&zwj;🚒",
    man_health_worker: "👨&zwj;⚕️",
    man_in_tuxedo: "🤵",
    man_judge: "👨&zwj;⚖️",
    man_juggling: "🤹&zwj;♂️",
    man_mechanic: "👨&zwj;🔧",
    man_office_worker: "👨&zwj;💼",
    man_pilot: "👨&zwj;✈️",
    man_playing_handball: "🤾&zwj;♂️",
    man_playing_water_polo: "🤽&zwj;♂️",
    man_scientist: "👨&zwj;🔬",
    man_shrugging: "🤷&zwj;♂️",
    man_singer: "👨&zwj;🎤",
    man_student: "👨&zwj;🎓",
    man_teacher: "👨&zwj;🏫",
    man_technologist: "👨&zwj;💻",
    man_with_gua_pi_mao: "👲",
    man_with_turban: "👳",
    tangerine: "🍊",
    mans_shoe: "👞",
    mantelpiece_clock: "🕰",
    maple_leaf: "🍁",
    martial_arts_uniform: "🥋",
    mask: "😷",
    massage_woman: "💆",
    massage_man: "💆&zwj;♂️",
    meat_on_bone: "🍖",
    medal_military: "🎖",
    medal_sports: "🏅",
    mega: "📣",
    melon: "🍈",
    memo: "📝",
    men_wrestling: "🤼&zwj;♂️",
    menorah: "🕎",
    mens: "🚹",
    metal: "🤘",
    metro: "🚇",
    microphone: "🎤",
    microscope: "🔬",
    milk_glass: "🥛",
    milky_way: "🌌",
    minibus: "🚐",
    minidisc: "💽",
    mobile_phone_off: "📴",
    money_mouth_face: "🤑",
    money_with_wings: "💸",
    moneybag: "💰",
    monkey: "🐒",
    monkey_face: "🐵",
    monorail: "🚝",
    moon: "🌔",
    mortar_board: "🎓",
    mosque: "🕌",
    motor_boat: "🛥",
    motor_scooter: "🛵",
    motorcycle: "🏍",
    motorway: "🛣",
    mount_fuji: "🗻",
    mountain: "⛰",
    mountain_biking_man: "🚵",
    mountain_biking_woman: "🚵&zwj;♀️",
    mountain_cableway: "🚠",
    mountain_railway: "🚞",
    mountain_snow: "🏔",
    mouse: "🐭",
    mouse2: "🐁",
    movie_camera: "🎥",
    moyai: "🗿",
    mrs_claus: "🤶",
    muscle: "💪",
    mushroom: "🍄",
    musical_keyboard: "🎹",
    musical_note: "🎵",
    musical_score: "🎼",
    mute: "🔇",
    nail_care: "💅",
    name_badge: "📛",
    national_park: "🏞",
    nauseated_face: "🤢",
    necktie: "👔",
    negative_squared_cross_mark: "❎",
    nerd_face: "🤓",
    neutral_face: "😐",
    new: "🆕",
    new_moon: "🌑",
    new_moon_with_face: "🌚",
    newspaper: "📰",
    newspaper_roll: "🗞",
    next_track_button: "⏭",
    ng: "🆖",
    no_good_man: "🙅&zwj;♂️",
    no_good_woman: "🙅",
    night_with_stars: "🌃",
    no_bell: "🔕",
    no_bicycles: "🚳",
    no_entry: "⛔️",
    no_entry_sign: "🚫",
    no_mobile_phones: "📵",
    no_mouth: "😶",
    no_pedestrians: "🚷",
    no_smoking: "🚭",
    "non-potable_water": "🚱",
    nose: "👃",
    notebook: "📓",
    notebook_with_decorative_cover: "📔",
    notes: "🎶",
    nut_and_bolt: "🔩",
    o: "⭕️",
    o2: "🅾️",
    ocean: "🌊",
    octopus: "🐙",
    oden: "🍢",
    office: "🏢",
    oil_drum: "🛢",
    ok: "🆗",
    ok_hand: "👌",
    ok_man: "🙆&zwj;♂️",
    ok_woman: "🙆",
    old_key: "🗝",
    older_man: "👴",
    older_woman: "👵",
    om: "🕉",
    on: "🔛",
    oncoming_automobile: "🚘",
    oncoming_bus: "🚍",
    oncoming_police_car: "🚔",
    oncoming_taxi: "🚖",
    open_file_folder: "📂",
    open_hands: "👐",
    open_mouth: "😮",
    open_umbrella: "☂️",
    ophiuchus: "⛎",
    orange_book: "📙",
    orthodox_cross: "☦️",
    outbox_tray: "📤",
    owl: "🦉",
    ox: "🐂",
    package: "📦",
    page_facing_up: "📄",
    page_with_curl: "📃",
    pager: "📟",
    paintbrush: "🖌",
    palm_tree: "🌴",
    pancakes: "🥞",
    panda_face: "🐼",
    paperclip: "📎",
    paperclips: "🖇",
    parasol_on_ground: "⛱",
    parking: "🅿️",
    part_alternation_mark: "〽️",
    partly_sunny: "⛅️",
    passenger_ship: "🛳",
    passport_control: "🛂",
    pause_button: "⏸",
    peace_symbol: "☮️",
    peach: "🍑",
    peanuts: "🥜",
    pear: "🍐",
    pen: "🖊",
    pencil2: "✏️",
    penguin: "🐧",
    pensive: "😔",
    performing_arts: "🎭",
    persevere: "😣",
    person_fencing: "🤺",
    pouting_woman: "🙎",
    phone: "☎️",
    pick: "⛏",
    pig: "🐷",
    pig2: "🐖",
    pig_nose: "🐽",
    pill: "💊",
    pineapple: "🍍",
    ping_pong: "🏓",
    pisces: "♓️",
    pizza: "🍕",
    place_of_worship: "🛐",
    plate_with_cutlery: "🍽",
    play_or_pause_button: "⏯",
    point_down: "👇",
    point_left: "👈",
    point_right: "👉",
    point_up: "☝️",
    point_up_2: "👆",
    police_car: "🚓",
    policewoman: "👮&zwj;♀️",
    poodle: "🐩",
    popcorn: "🍿",
    post_office: "🏣",
    postal_horn: "📯",
    postbox: "📮",
    potable_water: "🚰",
    potato: "🥔",
    pouch: "👝",
    poultry_leg: "🍗",
    pound: "💷",
    rage: "😡",
    pouting_cat: "😾",
    pouting_man: "🙎&zwj;♂️",
    pray: "🙏",
    prayer_beads: "📿",
    pregnant_woman: "🤰",
    previous_track_button: "⏮",
    prince: "🤴",
    princess: "👸",
    printer: "🖨",
    purple_heart: "💜",
    purse: "👛",
    pushpin: "📌",
    put_litter_in_its_place: "🚮",
    question: "❓",
    rabbit: "🐰",
    rabbit2: "🐇",
    racehorse: "🐎",
    racing_car: "🏎",
    radio: "📻",
    radio_button: "🔘",
    radioactive: "☢️",
    railway_car: "🚃",
    railway_track: "🛤",
    rainbow: "🌈",
    rainbow_flag: "🏳️&zwj;🌈",
    raised_back_of_hand: "🤚",
    raised_hand_with_fingers_splayed: "🖐",
    raised_hands: "🙌",
    raising_hand_woman: "🙋",
    raising_hand_man: "🙋&zwj;♂️",
    ram: "🐏",
    ramen: "🍜",
    rat: "🐀",
    record_button: "⏺",
    recycle: "♻️",
    red_circle: "🔴",
    registered: "®️",
    relaxed: "☺️",
    relieved: "😌",
    reminder_ribbon: "🎗",
    repeat: "🔁",
    repeat_one: "🔂",
    rescue_worker_helmet: "⛑",
    restroom: "🚻",
    revolving_hearts: "💞",
    rewind: "⏪",
    rhinoceros: "🦏",
    ribbon: "🎀",
    rice: "🍚",
    rice_ball: "🍙",
    rice_cracker: "🍘",
    rice_scene: "🎑",
    right_anger_bubble: "🗯",
    ring: "💍",
    robot: "🤖",
    rocket: "🚀",
    rofl: "🤣",
    roll_eyes: "🙄",
    roller_coaster: "🎢",
    rooster: "🐓",
    rose: "🌹",
    rosette: "🏵",
    rotating_light: "🚨",
    round_pushpin: "📍",
    rowing_man: "🚣",
    rowing_woman: "🚣&zwj;♀️",
    rugby_football: "🏉",
    running_man: "🏃",
    running_shirt_with_sash: "🎽",
    running_woman: "🏃&zwj;♀️",
    sa: "🈂️",
    sagittarius: "♐️",
    sake: "🍶",
    sandal: "👡",
    santa: "🎅",
    satellite: "📡",
    saxophone: "🎷",
    school: "🏫",
    school_satchel: "🎒",
    scissors: "✂️",
    scorpion: "🦂",
    scorpius: "♏️",
    scream: "😱",
    scream_cat: "🙀",
    scroll: "📜",
    seat: "💺",
    secret: "㊙️",
    see_no_evil: "🙈",
    seedling: "🌱",
    selfie: "🤳",
    shallow_pan_of_food: "🥘",
    shamrock: "☘️",
    shark: "🦈",
    shaved_ice: "🍧",
    sheep: "🐑",
    shell: "🐚",
    shield: "🛡",
    shinto_shrine: "⛩",
    ship: "🚢",
    shirt: "👕",
    shopping: "🛍",
    shopping_cart: "🛒",
    shower: "🚿",
    shrimp: "🦐",
    signal_strength: "📶",
    six_pointed_star: "🔯",
    ski: "🎿",
    skier: "⛷",
    skull: "💀",
    skull_and_crossbones: "☠️",
    sleeping: "😴",
    sleeping_bed: "🛌",
    sleepy: "😪",
    slightly_frowning_face: "🙁",
    slightly_smiling_face: "🙂",
    slot_machine: "🎰",
    small_airplane: "🛩",
    small_blue_diamond: "🔹",
    small_orange_diamond: "🔸",
    small_red_triangle: "🔺",
    small_red_triangle_down: "🔻",
    smile: "😄",
    smile_cat: "😸",
    smiley: "😃",
    smiley_cat: "😺",
    smiling_imp: "😈",
    smirk: "😏",
    smirk_cat: "😼",
    smoking: "🚬",
    snail: "🐌",
    snake: "🐍",
    sneezing_face: "🤧",
    snowboarder: "🏂",
    snowflake: "❄️",
    snowman: "⛄️",
    snowman_with_snow: "☃️",
    sob: "😭",
    soccer: "⚽️",
    soon: "🔜",
    sos: "🆘",
    sound: "🔉",
    space_invader: "👾",
    spades: "♠️",
    spaghetti: "🍝",
    sparkle: "❇️",
    sparkler: "🎇",
    sparkles: "✨",
    sparkling_heart: "💖",
    speak_no_evil: "🙊",
    speaker: "🔈",
    speaking_head: "🗣",
    speech_balloon: "💬",
    speedboat: "🚤",
    spider: "🕷",
    spider_web: "🕸",
    spiral_calendar: "🗓",
    spiral_notepad: "🗒",
    spoon: "🥄",
    squid: "🦑",
    stadium: "🏟",
    star: "⭐️",
    star2: "🌟",
    star_and_crescent: "☪️",
    star_of_david: "✡️",
    stars: "🌠",
    station: "🚉",
    statue_of_liberty: "🗽",
    steam_locomotive: "🚂",
    stew: "🍲",
    stop_button: "⏹",
    stop_sign: "🛑",
    stopwatch: "⏱",
    straight_ruler: "📏",
    strawberry: "🍓",
    stuck_out_tongue: "😛",
    stuck_out_tongue_closed_eyes: "😝",
    stuck_out_tongue_winking_eye: "😜",
    studio_microphone: "🎙",
    stuffed_flatbread: "🥙",
    sun_behind_large_cloud: "🌥",
    sun_behind_rain_cloud: "🌦",
    sun_behind_small_cloud: "🌤",
    sun_with_face: "🌞",
    sunflower: "🌻",
    sunglasses: "😎",
    sunny: "☀️",
    sunrise: "🌅",
    sunrise_over_mountains: "🌄",
    surfing_man: "🏄",
    surfing_woman: "🏄&zwj;♀️",
    sushi: "🍣",
    suspension_railway: "🚟",
    sweat: "😓",
    sweat_drops: "💦",
    sweat_smile: "😅",
    sweet_potato: "🍠",
    swimming_man: "🏊",
    swimming_woman: "🏊&zwj;♀️",
    symbols: "🔣",
    synagogue: "🕍",
    syringe: "💉",
    taco: "🌮",
    tada: "🎉",
    tanabata_tree: "🎋",
    taurus: "♉️",
    taxi: "🚕",
    tea: "🍵",
    telephone_receiver: "📞",
    telescope: "🔭",
    tennis: "🎾",
    tent: "⛺️",
    thermometer: "🌡",
    thinking: "🤔",
    thought_balloon: "💭",
    ticket: "🎫",
    tickets: "🎟",
    tiger: "🐯",
    tiger2: "🐅",
    timer_clock: "⏲",
    tipping_hand_man: "💁&zwj;♂️",
    tired_face: "😫",
    tm: "™️",
    toilet: "🚽",
    tokyo_tower: "🗼",
    tomato: "🍅",
    tongue: "👅",
    top: "🔝",
    tophat: "🎩",
    tornado: "🌪",
    trackball: "🖲",
    tractor: "🚜",
    traffic_light: "🚥",
    train: "🚋",
    train2: "🚆",
    tram: "🚊",
    triangular_flag_on_post: "🚩",
    triangular_ruler: "📐",
    trident: "🔱",
    triumph: "😤",
    trolleybus: "🚎",
    trophy: "🏆",
    tropical_drink: "🍹",
    tropical_fish: "🐠",
    truck: "🚚",
    trumpet: "🎺",
    tulip: "🌷",
    tumbler_glass: "🥃",
    turkey: "🦃",
    turtle: "🐢",
    tv: "📺",
    twisted_rightwards_arrows: "🔀",
    two_hearts: "💕",
    two_men_holding_hands: "👬",
    two_women_holding_hands: "👭",
    u5272: "🈹",
    u5408: "🈴",
    u55b6: "🈺",
    u6307: "🈯️",
    u6708: "🈷️",
    u6709: "🈶",
    u6e80: "🈵",
    u7121: "🈚️",
    u7533: "🈸",
    u7981: "🈲",
    u7a7a: "🈳",
    umbrella: "☔️",
    unamused: "😒",
    underage: "🔞",
    unicorn: "🦄",
    unlock: "🔓",
    up: "🆙",
    upside_down_face: "🙃",
    v: "✌️",
    vertical_traffic_light: "🚦",
    vhs: "📼",
    vibration_mode: "📳",
    video_camera: "📹",
    video_game: "🎮",
    violin: "🎻",
    virgo: "♍️",
    volcano: "🌋",
    volleyball: "🏐",
    vs: "🆚",
    vulcan_salute: "🖖",
    walking_man: "🚶",
    walking_woman: "🚶&zwj;♀️",
    waning_crescent_moon: "🌘",
    waning_gibbous_moon: "🌖",
    warning: "⚠️",
    wastebasket: "🗑",
    watch: "⌚️",
    water_buffalo: "🐃",
    watermelon: "🍉",
    wave: "👋",
    wavy_dash: "〰️",
    waxing_crescent_moon: "🌒",
    wc: "🚾",
    weary: "😩",
    wedding: "💒",
    weight_lifting_man: "🏋️",
    weight_lifting_woman: "🏋️&zwj;♀️",
    whale: "🐳",
    whale2: "🐋",
    wheel_of_dharma: "☸️",
    wheelchair: "♿️",
    white_check_mark: "✅",
    white_circle: "⚪️",
    white_flag: "🏳️",
    white_flower: "💮",
    white_large_square: "⬜️",
    white_medium_small_square: "◽️",
    white_medium_square: "◻️",
    white_small_square: "▫️",
    white_square_button: "🔳",
    wilted_flower: "🥀",
    wind_chime: "🎐",
    wind_face: "🌬",
    wine_glass: "🍷",
    wink: "😉",
    wolf: "🐺",
    woman: "👩",
    woman_artist: "👩&zwj;🎨",
    woman_astronaut: "👩&zwj;🚀",
    woman_cartwheeling: "🤸&zwj;♀️",
    woman_cook: "👩&zwj;🍳",
    woman_facepalming: "🤦&zwj;♀️",
    woman_factory_worker: "👩&zwj;🏭",
    woman_farmer: "👩&zwj;🌾",
    woman_firefighter: "👩&zwj;🚒",
    woman_health_worker: "👩&zwj;⚕️",
    woman_judge: "👩&zwj;⚖️",
    woman_juggling: "🤹&zwj;♀️",
    woman_mechanic: "👩&zwj;🔧",
    woman_office_worker: "👩&zwj;💼",
    woman_pilot: "👩&zwj;✈️",
    woman_playing_handball: "🤾&zwj;♀️",
    woman_playing_water_polo: "🤽&zwj;♀️",
    woman_scientist: "👩&zwj;🔬",
    woman_shrugging: "🤷&zwj;♀️",
    woman_singer: "👩&zwj;🎤",
    woman_student: "👩&zwj;🎓",
    woman_teacher: "👩&zwj;🏫",
    woman_technologist: "👩&zwj;💻",
    woman_with_turban: "👳&zwj;♀️",
    womans_clothes: "👚",
    womans_hat: "👒",
    women_wrestling: "🤼&zwj;♀️",
    womens: "🚺",
    world_map: "🗺",
    worried: "😟",
    wrench: "🔧",
    writing_hand: "✍️",
    x: "❌",
    yellow_heart: "💛",
    yen: "💴",
    yin_yang: "☯️",
    yum: "😋",
    zap: "⚡️",
    zipper_mouth_face: "🤐",
    zzz: "💤",
    octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
    showdown: "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>"
  }, x.Converter = function(e) {
    "use strict";
    var r, t, n = {},
      i = [],
      l = [],
      o = {},
      a = h,
      s = {
        parsed: {},
        raw: "",
        format: ""
      };
    for (r in e = e || {}, p) p.hasOwnProperty(r) && (n[r] = p[r]);
    if ("object" != typeof e) throw Error("Converter expects the passed parameter to be an object, but " + typeof e + " was passed instead.");
    for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);

    function c(e, r) {
      if (r = r || null, x.helper.isString(e)) {
        if (r = e = x.helper.stdExtName(e), x.extensions[e]) {
          console.warn("DEPRECATION WARNING: " + e + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!");
          var t = x.extensions[e],
            a = e;
          if ("function" == typeof t && (t = t(new x.Converter)), x.helper.isArray(t) || (t = [t]), !(a = g(t, a)).valid) throw Error(a.error);
          for (var n = 0; n < t.length; ++n) switch (t[n].type) {
            case "lang":
              i.push(t[n]);
              break;
            case "output":
              l.push(t[n]);
              break;
            default:
              throw Error("Extension loader error: Type unrecognized!!!")
          }
          return
        }
        if (x.helper.isUndefined(d[e])) throw Error('Extension "' + e + '" could not be loaded. It was either not found or is not a valid extension.');
        e = d[e]
      }
      "function" == typeof e && (e = e());
      a = g(e = x.helper.isArray(e) ? e : [e], r);
      if (!a.valid) throw Error(a.error);
      for (var s = 0; s < e.length; ++s) {
        switch (e[s].type) {
          case "lang":
            i.push(e[s]);
            break;
          case "output":
            l.push(e[s])
        }
        if (e[s].hasOwnProperty("listeners"))
          for (var o in e[s].listeners) e[s].listeners.hasOwnProperty(o) && u(o, e[s].listeners[o])
      }
    }

    function u(e, r) {
      if (!x.helper.isString(e)) throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof e + " given");
      if ("function" != typeof r) throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof r + " given");
      o.hasOwnProperty(e) || (o[e] = []), o[e].push(r)
    }
    n.extensions && x.helper.forEach(n.extensions, c), this._dispatch = function(e, r, t, a) {
      if (o.hasOwnProperty(e))
        for (var n = 0; n < o[e].length; ++n) {
          var s = o[e][n](e, r, this, t, a);
          s && void 0 !== s && (r = s)
        }
      return r
    }, this.listen = function(e, r) {
      return u(e, r), this
    }, this.makeHtml = function(r) {
      if (!r) return r;
      var e, t, a = {
        gHtmlBlocks: [],
        gHtmlMdBlocks: [],
        gHtmlSpans: [],
        gUrls: {},
        gTitles: {},
        gDimensions: {},
        gListLevel: 0,
        hashLinkCounts: {},
        langExtensions: i,
        outputModifiers: l,
        converter: this,
        ghCodeBlocks: [],
        metadata: {
          parsed: {},
          raw: "",
          format: ""
        }
      };
      return r = (r = (r = (r = (r = r.replace(/¨/g, "¨T")).replace(/\$/g, "¨D")).replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/\u00A0/g, "&nbsp;"), n.smartIndentationFix && (t = (e = r).match(/^\s*/)[0].length, t = new RegExp("^\\s{0," + t + "}", "gm"), r = e.replace(t, "")), r = "\n\n" + r + "\n\n", r = (r = x.subParser("detab")(r, n, a)).replace(/^[ \t]+$/gm, ""), x.helper.forEach(i, function(e) {
        r = x.subParser("runExtension")(e, r, n, a)
      }), r = x.subParser("metadata")(r, n, a), r = x.subParser("hashPreCodeTags")(r, n, a), r = x.subParser("githubCodeBlocks")(r, n, a), r = x.subParser("hashHTMLBlocks")(r, n, a), r = x.subParser("hashCodeTags")(r, n, a), r = x.subParser("stripLinkDefinitions")(r, n, a), r = x.subParser("blockGamut")(r, n, a), r = x.subParser("unhashHTMLSpans")(r, n, a), r = (r = (r = x.subParser("unescapeSpecialChars")(r, n, a)).replace(/¨D/g, "$$")).replace(/¨T/g, "¨"), r = x.subParser("completeHTMLDocument")(r, n, a), x.helper.forEach(l, function(e) {
        r = x.subParser("runExtension")(e, r, n, a)
      }), s = a.metadata, r
    }, this.makeMarkdown = this.makeMd = function(e, r) {
      if (e = (e = (e = e.replace(/\r\n/g, "\n")).replace(/\r/g, "\n")).replace(/>[ \t]+</, ">¨NBSP;<"), !r) {
        if (!window || !window.document) throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
        r = window.document
      }
      for (var r = r.createElement("div"), t = (r.innerHTML = e, {
          preList: function(e) {
            for (var r = e.querySelectorAll("pre"), t = [], a = 0; a < r.length; ++a)
              if (1 === r[a].childElementCount && "code" === r[a].firstChild.tagName.toLowerCase()) {
                var n = r[a].firstChild.innerHTML.trim(),
                  s = r[a].firstChild.getAttribute("data-language") || "";
                if ("" === s)
                  for (var o = r[a].firstChild.className.split(" "), i = 0; i < o.length; ++i) {
                    var l = o[i].match(/^language-(.+)$/);
                    if (null !== l) {
                      s = l[1];
                      break
                    }
                  }
                n = x.helper.unescapeHTMLEntities(n), t.push(n), r[a].outerHTML = '<precode language="' + s + '" precodenum="' + a.toString() + '"></precode>'
              } else t.push(r[a].innerHTML), r[a].innerHTML = "", r[a].setAttribute("prenum", a.toString());
            return t
          }(r)
        }), a = (! function e(r) {
          for (var t = 0; t < r.childNodes.length; ++t) {
            var a = r.childNodes[t];
            3 === a.nodeType ? /\S/.test(a.nodeValue) || /^[ ]+$/.test(a.nodeValue) ? (a.nodeValue = a.nodeValue.split("\n").join(" "), a.nodeValue = a.nodeValue.replace(/(\s)+/g, "$1")) : (r.removeChild(a), --t) : 1 === a.nodeType && e(a)
          }
        }(r), r.childNodes), n = "", s = 0; s < a.length; s++) n += x.subParser("makeMarkdown.node")(a[s], t);
      return n
    }, this.setOption = function(e, r) {
      n[e] = r
    }, this.getOption = function(e) {
      return n[e]
    }, this.getOptions = function() {
      return n
    }, this.addExtension = function(e, r) {
      c(e, r = r || null)
    }, this.useExtension = function(e) {
      c(e)
    }, this.setFlavor = function(e) {
      if (!_.hasOwnProperty(e)) throw Error(e + " flavor was not found");
      var r, t = _[e];
      for (r in a = e, t) t.hasOwnProperty(r) && (n[r] = t[r])
    }, this.getFlavor = function() {
      return a
    }, this.removeExtension = function(e) {
      x.helper.isArray(e) || (e = [e]);
      for (var r = 0; r < e.length; ++r) {
        for (var t = e[r], a = 0; a < i.length; ++a) i[a] === t && i.splice(a, 1);
        for (var n = 0; n < l.length; ++n) l[n] === t && l.splice(n, 1)
      }
    }, this.getAllExtensions = function() {
      return {
        language: i,
        output: l
      }
    }, this.getMetadata = function(e) {
      return e ? s.raw : s.parsed
    }, this.getMetadataFormat = function() {
      return s.format
    }, this._setMetadataPair = function(e, r) {
      s.parsed[e] = r
    }, this._setMetadataFormat = function(e) {
      s.format = e
    }, this._setMetadataRaw = function(e) {
      s.raw = e
    }
  }, x.subParser("anchors", function(e, i, l) {
    "use strict";

    function r(e, r, t, a, n, s, o) {
      if (x.helper.isUndefined(o) && (o = ""), t = t.toLowerCase(), -1 < e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)) a = "";
      else if (!a) {
        if (a = "#" + (t = t || r.toLowerCase().replace(/ ?\n/g, " ")), x.helper.isUndefined(l.gUrls[t])) return e;
        a = l.gUrls[t], x.helper.isUndefined(l.gTitles[t]) || (o = l.gTitles[t])
      }
      return e = '<a href="' + (a = a.replace(x.helper.regexes.asteriskDashAndColon, x.helper.escapeCharactersCallback)) + '"', "" !== o && null !== o && (e += ' title="' + (o = (o = o.replace(/"/g, "&quot;")).replace(x.helper.regexes.asteriskDashAndColon, x.helper.escapeCharactersCallback)) + '"'), i.openLinksInNewWindow && !/^#/.test(a) && (e += ' rel="noopener noreferrer" target="¨E95Eblank"'), e += ">" + r + "</a>"
    }
    return e = (e = (e = (e = (e = l.converter._dispatch("anchors.before", e, i, l)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, r)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, r)).replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, r)).replace(/\[([^\[\]]+)]()()()()()/g, r), i.ghMentions && (e = e.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim, function(e, r, t, a, n) {
      if ("\\" === t) return r + a;
      if (!x.helper.isString(i.ghMentionsLink)) throw new Error("ghMentionsLink option must be a string");
      t = "";
      return r + '<a href="' + i.ghMentionsLink.replace(/\{u}/g, n) + '"' + (t = i.openLinksInNewWindow ? ' rel="noopener noreferrer" target="¨E95Eblank"' : t) + ">" + a + "</a>"
    })), e = l.converter._dispatch("anchors.after", e, i, l)
  });
  var i = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
    l = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
    c = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
    m = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
    f = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi;
  x.subParser("autoLinks", function(e, r, t) {
    "use strict";
    return e = (e = (e = t.converter._dispatch("autoLinks.before", e, r, t)).replace(c, s(r))).replace(f, o(r, t)), e = t.converter._dispatch("autoLinks.after", e, r, t)
  }), x.subParser("simplifiedAutoLinks", function(e, r, t) {
    "use strict";
    return r.simplifiedAutoLink ? (e = t.converter._dispatch("simplifiedAutoLinks.before", e, r, t), e = (e = r.excludeTrailingPunctuationFromURLs ? e.replace(l, s(r)) : e.replace(i, s(r))).replace(m, o(r, t)), t.converter._dispatch("simplifiedAutoLinks.after", e, r, t)) : e
  }), x.subParser("blockGamut", function(e, r, t) {
    "use strict";
    return e = t.converter._dispatch("blockGamut.before", e, r, t), e = x.subParser("blockQuotes")(e, r, t), e = x.subParser("headers")(e, r, t), e = x.subParser("horizontalRule")(e, r, t), e = x.subParser("lists")(e, r, t), e = x.subParser("codeBlocks")(e, r, t), e = x.subParser("tables")(e, r, t), e = x.subParser("hashHTMLBlocks")(e, r, t), e = x.subParser("paragraphs")(e, r, t), e = t.converter._dispatch("blockGamut.after", e, r, t)
  }), x.subParser("blockQuotes", function(e, r, t) {
    "use strict";
    e = t.converter._dispatch("blockQuotes.before", e, r, t);
    var a = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
    return r.splitAdjacentBlockquotes && (a = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), e = (e += "\n\n").replace(a, function(e) {
      return e = (e = (e = e.replace(/^[ \t]*>[ \t]?/gm, "")).replace(/¨0/g, "")).replace(/^[ \t]+$/gm, ""), e = x.subParser("githubCodeBlocks")(e, r, t), e = (e = (e = x.subParser("blockGamut")(e, r, t)).replace(/(^|\n)/g, "$1  ")).replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(e, r) {
        return r.replace(/^  /gm, "¨0").replace(/¨0/g, "")
      }), x.subParser("hashBlock")("<blockquote>\n" + e + "\n</blockquote>", r, t)
    }), e = t.converter._dispatch("blockQuotes.after", e, r, t)
  }), x.subParser("codeBlocks", function(e, n, s) {
    "use strict";
    e = s.converter._dispatch("codeBlocks.before", e, n, s);
    return e = (e = (e += "¨0").replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g, function(e, r, t) {
      var a = "\n",
        r = x.subParser("outdent")(r, n, s);
      return r = x.subParser("encodeCode")(r, n, s), r = "<pre><code>" + (r = (r = (r = x.subParser("detab")(r, n, s)).replace(/^\n+/g, "")).replace(/\n+$/g, "")) + (a = n.omitExtraWLInCodeBlocks ? "" : a) + "</code></pre>", x.subParser("hashBlock")(r, n, s) + t
    })).replace(/¨0/, ""), e = s.converter._dispatch("codeBlocks.after", e, n, s)
  }), x.subParser("codeSpans", function(e, n, s) {
    "use strict";
    return e = (e = void 0 === (e = s.converter._dispatch("codeSpans.before", e, n, s)) ? "" : e).replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(e, r, t, a) {
      return a = (a = a.replace(/^([ \t]*)/g, "")).replace(/[ \t]*$/g, ""), a = r + "<code>" + (a = x.subParser("encodeCode")(a, n, s)) + "</code>", a = x.subParser("hashHTMLSpans")(a, n, s)
    }), e = s.converter._dispatch("codeSpans.after", e, n, s)
  }), x.subParser("completeHTMLDocument", function(e, r, t) {
    "use strict";
    if (!r.completeHTMLDocument) return e;
    e = t.converter._dispatch("completeHTMLDocument.before", e, r, t);
    var a, n = "html",
      s = "<!DOCTYPE HTML>\n",
      o = "",
      i = '<meta charset="utf-8">\n',
      l = "",
      c = "";
    for (a in void 0 !== t.metadata.parsed.doctype && (s = "<!DOCTYPE " + t.metadata.parsed.doctype + ">\n", "html" !== (n = t.metadata.parsed.doctype.toString().toLowerCase()) && "html5" !== n || (i = '<meta charset="utf-8">')), t.metadata.parsed)
      if (t.metadata.parsed.hasOwnProperty(a)) switch (a.toLowerCase()) {
        case "doctype":
          break;
        case "title":
          o = "<title>" + t.metadata.parsed.title + "</title>\n";
          break;
        case "charset":
          i = "html" === n || "html5" === n ? '<meta charset="' + t.metadata.parsed.charset + '">\n' : '<meta name="charset" content="' + t.metadata.parsed.charset + '">\n';
          break;
        case "language":
        case "lang":
          l = ' lang="' + t.metadata.parsed[a] + '"', c += '<meta name="' + a + '" content="' + t.metadata.parsed[a] + '">\n';
          break;
        default:
          c += '<meta name="' + a + '" content="' + t.metadata.parsed[a] + '">\n'
      }
    return e = s + "<html" + l + ">\n<head>\n" + o + i + c + "</head>\n<body>\n" + e.trim() + "\n</body>\n</html>", e = t.converter._dispatch("completeHTMLDocument.after", e, r, t)
  }), x.subParser("detab", function(e, r, t) {
    "use strict";
    return e = (e = (e = (e = (e = (e = t.converter._dispatch("detab.before", e, r, t)).replace(/\t(?=\t)/g, "    ")).replace(/\t/g, "¨A¨B")).replace(/¨B(.+?)¨A/g, function(e, r) {
      for (var t = r, a = 4 - t.length % 4, n = 0; n < a; n++) t += " ";
      return t
    })).replace(/¨A/g, "    ")).replace(/¨B/g, ""), e = t.converter._dispatch("detab.after", e, r, t)
  }), x.subParser("ellipsis", function(e, r, t) {
    "use strict";
    return r.ellipsis ? (e = (e = t.converter._dispatch("ellipsis.before", e, r, t)).replace(/\.\.\./g, "…"), t.converter._dispatch("ellipsis.after", e, r, t)) : e
  }), x.subParser("emoji", function(e, r, t) {
    "use strict";
    if (!r.emoji) return e;
    return e = (e = t.converter._dispatch("emoji.before", e, r, t)).replace(/:([\S]+?):/g, function(e, r) {
      return x.helper.emojis.hasOwnProperty(r) ? x.helper.emojis[r] : e
    }), e = t.converter._dispatch("emoji.after", e, r, t)
  }), x.subParser("encodeAmpsAndAngles", function(e, r, t) {
    "use strict";
    return e = (e = (e = (e = (e = t.converter._dispatch("encodeAmpsAndAngles.before", e, r, t)).replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;")).replace(/<(?![a-z\/?$!])/gi, "&lt;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;"), e = t.converter._dispatch("encodeAmpsAndAngles.after", e, r, t)
  }), x.subParser("encodeBackslashEscapes", function(e, r, t) {
    "use strict";
    return e = (e = (e = t.converter._dispatch("encodeBackslashEscapes.before", e, r, t)).replace(/\\(\\)/g, x.helper.escapeCharactersCallback)).replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, x.helper.escapeCharactersCallback), e = t.converter._dispatch("encodeBackslashEscapes.after", e, r, t)
  }), x.subParser("encodeCode", function(e, r, t) {
    "use strict";
    return e = (e = t.converter._dispatch("encodeCode.before", e, r, t)).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, x.helper.escapeCharactersCallback), e = t.converter._dispatch("encodeCode.after", e, r, t)
  }), x.subParser("escapeSpecialCharsWithinTagAttributes", function(e, r, t) {
    "use strict";
    return e = (e = (e = t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", e, r, t)).replace(/<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, function(e) {
      return e.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, x.helper.escapeCharactersCallback)
    })).replace(/<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi, function(e) {
      return e.replace(/([\\`*_~=|])/g, x.helper.escapeCharactersCallback)
    }), e = t.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", e, r, t)
  }), x.subParser("githubCodeBlocks", function(e, s, o) {
    "use strict";
    return s.ghCodeBlocks ? (e = o.converter._dispatch("githubCodeBlocks.before", e, s, o), e = (e = (e += "¨0").replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(e, r, t, a) {
      var n = s.omitExtraWLInCodeBlocks ? "" : "\n";
      return a = x.subParser("encodeCode")(a, s, o), a = "<pre><code" + (t ? ' class="' + t + " language-" + t + '"' : "") + ">" + (a = (a = (a = x.subParser("detab")(a, s, o)).replace(/^\n+/g, "")).replace(/\n+$/g, "")) + n + "</code></pre>", a = x.subParser("hashBlock")(a, s, o), "\n\n¨G" + (o.ghCodeBlocks.push({
        text: e,
        codeblock: a
      }) - 1) + "G\n\n"
    })).replace(/¨0/, ""), o.converter._dispatch("githubCodeBlocks.after", e, s, o)) : e
  }), x.subParser("hashBlock", function(e, r, t) {
    "use strict";
    return e = (e = t.converter._dispatch("hashBlock.before", e, r, t)).replace(/(^\n+|\n+$)/g, ""), e = "\n\n¨K" + (t.gHtmlBlocks.push(e) - 1) + "K\n\n", e = t.converter._dispatch("hashBlock.after", e, r, t)
  }), x.subParser("hashCodeTags", function(e, n, s) {
    "use strict";
    e = s.converter._dispatch("hashCodeTags.before", e, n, s);
    return e = x.helper.replaceRecursiveRegExp(e, function(e, r, t, a) {
      t = t + x.subParser("encodeCode")(r, n, s) + a;
      return "¨C" + (s.gHtmlSpans.push(t) - 1) + "C"
    }, "<code\\b[^>]*>", "</code>", "gim"), e = s.converter._dispatch("hashCodeTags.after", e, n, s)
  }), x.subParser("hashElement", function(e, r, t) {
    "use strict";
    return function(e, r) {
      return r = (r = (r = r.replace(/\n\n/g, "\n")).replace(/^\n/, "")).replace(/\n+$/g, ""), r = "\n\n¨K" + (t.gHtmlBlocks.push(r) - 1) + "K\n\n"
    }
  }), x.subParser("hashHTMLBlocks", function(e, r, n) {
    "use strict";
    e = n.converter._dispatch("hashHTMLBlocks.before", e, r, n);

    function t(e, r, t, a) {
      return -1 !== t.search(/\bmarkdown\b/) && (e = t + n.converter.makeHtml(r) + a), "\n\n¨K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n"
    }
    var a = ["pre", "div", "h1", "h2", "h3", "h4", "h5", "h6", "blockquote", "table", "dl", "ol", "ul", "script", "noscript", "form", "fieldset", "iframe", "math", "style", "section", "header", "footer", "nav", "article", "aside", "address", "audio", "canvas", "figure", "hgroup", "output", "video", "p"];
    r.backslashEscapesHTMLTags && (e = e.replace(/\\<(\/?[^>]+?)>/g, function(e, r) {
      return "&lt;" + r + "&gt;"
    }));
    for (var s = 0; s < a.length; ++s)
      for (var o = new RegExp("^ {0,3}(<" + a[s] + "\\b[^>]*>)", "im"), i = "<" + a[s] + "\\b[^>]*>", l = "</" + a[s] + ">"; - 1 !== (c = x.helper.regexIndexOf(e, o));) {
        var c = x.helper.splitAtIndex(e, c),
          u = x.helper.replaceRecursiveRegExp(c[1], t, i, l, "im");
        if (u === c[1]) break;
        e = c[0].concat(u)
      }
    return e = e.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, x.subParser("hashElement")(e, r, n)), e = (e = x.helper.replaceRecursiveRegExp(e, function(e) {
      return "\n\n¨K" + (n.gHtmlBlocks.push(e) - 1) + "K\n\n"
    }, "^ {0,3}\x3c!--", "--\x3e", "gm")).replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, x.subParser("hashElement")(e, r, n)), e = n.converter._dispatch("hashHTMLBlocks.after", e, r, n)
  }), x.subParser("hashHTMLSpans", function(e, r, t) {
    "use strict";

    function a(e) {
      return "¨C" + (t.gHtmlSpans.push(e) - 1) + "C"
    }
    return e = (e = (e = (e = (e = t.converter._dispatch("hashHTMLSpans.before", e, r, t)).replace(/<[^>]+?\/>/gi, a)).replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, a)).replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, a)).replace(/<[^>]+?>/gi, a), e = t.converter._dispatch("hashHTMLSpans.after", e, r, t)
  }), x.subParser("unhashHTMLSpans", function(e, r, t) {
    "use strict";
    e = t.converter._dispatch("unhashHTMLSpans.before", e, r, t);
    for (var a = 0; a < t.gHtmlSpans.length; ++a) {
      for (var n = t.gHtmlSpans[a], s = 0;
        /¨C(\d+)C/.test(n);) {
        var o = RegExp.$1,
          n = n.replace("¨C" + o + "C", t.gHtmlSpans[o]);
        if (10 === s) {
          console.error("maximum nesting of 10 spans reached!!!");
          break
        }++s
      }
      e = e.replace("¨C" + a + "C", n)
    }
    return e = t.converter._dispatch("unhashHTMLSpans.after", e, r, t)
  }), x.subParser("hashPreCodeTags", function(e, n, s) {
    "use strict";
    e = s.converter._dispatch("hashPreCodeTags.before", e, n, s);
    return e = x.helper.replaceRecursiveRegExp(e, function(e, r, t, a) {
      t = t + x.subParser("encodeCode")(r, n, s) + a;
      return "\n\n¨G" + (s.ghCodeBlocks.push({
        text: e,
        codeblock: t
      }) - 1) + "G\n\n"
    }, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), e = s.converter._dispatch("hashPreCodeTags.after", e, n, s)
  }), x.subParser("headers", function(e, n, s) {
    "use strict";
    e = s.converter._dispatch("headers.before", e, n, s);
    var o = isNaN(parseInt(n.headerLevelStart)) ? 1 : parseInt(n.headerLevelStart),
      r = n.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
      t = n.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm,
      r = (e = (e = e.replace(r, function(e, r) {
        var t = x.subParser("spanGamut")(r, n, s),
          r = n.noHeaderId ? "" : ' id="' + i(r) + '"',
          r = "<h" + o + r + ">" + t + "</h" + o + ">";
        return x.subParser("hashBlock")(r, n, s)
      })).replace(t, function(e, r) {
        var t = x.subParser("spanGamut")(r, n, s),
          r = n.noHeaderId ? "" : ' id="' + i(r) + '"',
          a = o + 1,
          r = "<h" + a + r + ">" + t + "</h" + a + ">";
        return x.subParser("hashBlock")(r, n, s)
      }), n.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm);

    function i(e) {
      var r = e = n.customizedHeaderId && (r = e.match(/\{([^{]+?)}\s*$/)) && r[1] ? r[1] : e,
        e = x.helper.isString(n.prefixHeaderId) ? n.prefixHeaderId : !0 === n.prefixHeaderId ? "section-" : "";
      return n.rawPrefixHeaderId || (r = e + r), r = (n.ghCompatibleHeaderId ? r.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "") : n.rawHeaderId ? r.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-") : r.replace(/[^\w]/g, "")).toLowerCase(), n.rawPrefixHeaderId && (r = e + r), s.hashLinkCounts[r] ? r = r + "-" + s.hashLinkCounts[r]++ : s.hashLinkCounts[r] = 1, r
    }
    return e = e.replace(r, function(e, r, t) {
      var a = t,
        a = (n.customizedHeaderId && (a = t.replace(/\s?\{([^{]+?)}\s*$/, "")), x.subParser("spanGamut")(a, n, s)),
        t = n.noHeaderId ? "" : ' id="' + i(t) + '"',
        r = o - 1 + r.length,
        t = "<h" + r + t + ">" + a + "</h" + r + ">";
      return x.subParser("hashBlock")(t, n, s)
    }), e = s.converter._dispatch("headers.after", e, n, s)
  }), x.subParser("horizontalRule", function(e, r, t) {
    "use strict";
    e = t.converter._dispatch("horizontalRule.before", e, r, t);
    var a = x.subParser("hashBlock")("<hr />", r, t);
    return e = (e = (e = e.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, a)).replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, a)).replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, a), e = t.converter._dispatch("horizontalRule.after", e, r, t)
  }), x.subParser("images", function(e, r, d) {
    "use strict";

    function l(e, r, t, a, n, s, o, i) {
      var l = d.gUrls,
        c = d.gTitles,
        u = d.gDimensions;
      if (t = t.toLowerCase(), i = i || "", -1 < e.search(/\(<?\s*>? ?(['"].*['"])?\)$/m)) a = "";
      else if ("" === a || null === a) {
        if (a = "#" + (t = "" !== t && null !== t ? t : r.toLowerCase().replace(/ ?\n/g, " ")), x.helper.isUndefined(l[t])) return e;
        a = l[t], x.helper.isUndefined(c[t]) || (i = c[t]), x.helper.isUndefined(u[t]) || (n = u[t].width, s = u[t].height)
      }
      r = r.replace(/"/g, "&quot;").replace(x.helper.regexes.asteriskDashAndColon, x.helper.escapeCharactersCallback);
      e = '<img src="' + (a = a.replace(x.helper.regexes.asteriskDashAndColon, x.helper.escapeCharactersCallback)) + '" alt="' + r + '"';
      return i && x.helper.isString(i) && (e += ' title="' + (i = i.replace(/"/g, "&quot;").replace(x.helper.regexes.asteriskDashAndColon, x.helper.escapeCharactersCallback)) + '"'), n && s && (e = e + (' width="' + (n = "*" === n ? "auto" : n)) + '" height="' + (s = "*" === s ? "auto" : s) + '"'), e += " />"
    }
    return e = (e = (e = (e = (e = (e = d.converter._dispatch("images.before", e, r, d)).replace(/!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, l)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, function(e, r, t, a, n, s, o, i) {
      return l(e, r, t, a = a.replace(/\s/g, ""), n, s, 0, i)
    })).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, l)).replace(/!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, l)).replace(/!\[([^\[\]]+)]()()()()()/g, l), e = d.converter._dispatch("images.after", e, r, d)
  }), x.subParser("italicsAndBold", function(e, r, t) {
    "use strict";
    return e = t.converter._dispatch("italicsAndBold.before", e, r, t), e = r.literalMidWordUnderscores ? (e = (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function(e, r) {
      return "<strong><em>" + r + "</em></strong>"
    })).replace(/\b__(\S[\s\S]*?)__\b/g, function(e, r) {
      return "<strong>" + r + "</strong>"
    })).replace(/\b_(\S[\s\S]*?)_\b/g, function(e, r) {
      return "<em>" + r + "</em>"
    }) : (e = (e = e.replace(/___(\S[\s\S]*?)___/g, function(e, r) {
      return /\S$/.test(r) ? "<strong><em>" + r + "</em></strong>" : e
    })).replace(/__(\S[\s\S]*?)__/g, function(e, r) {
      return /\S$/.test(r) ? "<strong>" + r + "</strong>" : e
    })).replace(/_([^\s_][\s\S]*?)_/g, function(e, r) {
      return /\S$/.test(r) ? "<em>" + r + "</em>" : e
    }), e = r.literalMidWordAsterisks ? (e = (e = e.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(e, r, t) {
      return r + "<strong><em>" + t + "</em></strong>"
    })).replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(e, r, t) {
      return r + "<strong>" + t + "</strong>"
    })).replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(e, r, t) {
      return r + "<em>" + t + "</em>"
    }) : (e = (e = e.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(e, r) {
      return /\S$/.test(r) ? "<strong><em>" + r + "</em></strong>" : e
    })).replace(/\*\*(\S[\s\S]*?)\*\*/g, function(e, r) {
      return /\S$/.test(r) ? "<strong>" + r + "</strong>" : e
    })).replace(/\*([^\s*][\s\S]*?)\*/g, function(e, r) {
      return /\S$/.test(r) ? "<em>" + r + "</em>" : e
    }), e = t.converter._dispatch("italicsAndBold.after", e, r, t)
  }), x.subParser("lists", function(e, d, c) {
    "use strict";

    function p(e, r) {
      c.gListLevel++, e = e.replace(/\n{2,}$/, "\n");
      var t = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
        l = /\n[ \t]*\n(?!¨0)/.test(e += "¨0");
      return d.disableForced4SpacesIndentedSublists && (t = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), e = (e = e.replace(t, function(e, r, t, a, n, s, o) {
        o = o && "" !== o.trim();
        var n = x.subParser("outdent")(n, d, c),
          i = "";
        return s && d.tasklists && (i = ' class="task-list-item" style="list-style-type: none;"', n = n.replace(/^[ \t]*\[(x|X| )?]/m, function() {
          var e = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
          return o && (e += " checked"), e += ">"
        })), n = n.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(e) {
          return "¨A" + e
        }), n = "<li" + i + ">" + (n = (n = r || -1 < n.search(/\n{2,}/) ? (n = x.subParser("githubCodeBlocks")(n, d, c), x.subParser("blockGamut")(n, d, c)) : (n = (n = x.subParser("lists")(n, d, c)).replace(/\n$/, ""), n = (n = x.subParser("hashHTMLBlocks")(n, d, c)).replace(/\n\n+/g, "\n\n"), (l ? x.subParser("paragraphs") : x.subParser("spanGamut"))(n, d, c))).replace("¨A", "")) + "</li>\n"
      })).replace(/¨0/g, ""), c.gListLevel--, e = r ? e.replace(/\s+$/, "") : e
    }

    function h(e, r) {
      if ("ol" === r) {
        r = e.match(/^ *(\d+)\./);
        if (r && "1" !== r[1]) return ' start="' + r[1] + '"'
      }
      return ""
    }

    function n(n, s, o) {
      var e, i = d.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
        l = d.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
        c = "ul" === s ? i : l,
        u = "";
      return -1 !== n.search(c) ? function e(r) {
        var t = r.search(c),
          a = h(n, s); - 1 !== t ? (u += "\n\n<" + s + a + ">\n" + p(r.slice(0, t), !!o) + "</" + s + ">\n", c = "ul" === (s = "ul" === s ? "ol" : "ul") ? i : l, e(r.slice(t))) : u += "\n\n<" + s + a + ">\n" + p(r, !!o) + "</" + s + ">\n"
      }(n) : (e = h(n, s), u = "\n\n<" + s + e + ">\n" + p(n, !!o) + "</" + s + ">\n"), u
    }
    return e = c.converter._dispatch("lists.before", e, d, c), e += "¨0", e = (e = c.gListLevel ? e.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(e, r, t) {
      return n(r, -1 < t.search(/[*+-]/g) ? "ul" : "ol", !0)
    }) : e.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(e, r, t, a) {
      return n(t, -1 < a.search(/[*+-]/g) ? "ul" : "ol", !1)
    })).replace(/¨0/, ""), e = c.converter._dispatch("lists.after", e, d, c)
  }), x.subParser("metadata", function(e, r, a) {
    "use strict";
    return r.metadata ? (e = (e = (e = (e = a.converter._dispatch("metadata.before", e, r, a)).replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(e, r, t) {
      return n(t), "¨M"
    })).replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(e, r, t) {
      return r && (a.metadata.format = r), n(t), "¨M"
    })).replace(/¨M/g, ""), a.converter._dispatch("metadata.after", e, r, a)) : e;

    function n(e) {
      (e = (e = (a.metadata.raw = e).replace(/&/g, "&amp;").replace(/"/g, "&quot;")).replace(/\n {4}/g, " ")).replace(/^([\S ]+): +([\s\S]+?)$/gm, function(e, r, t) {
        return a.metadata.parsed[r] = t, ""
      })
    }
  }), x.subParser("outdent", function(e, r, t) {
    "use strict";
    return e = (e = (e = t.converter._dispatch("outdent.before", e, r, t)).replace(/^(\t|[ ]{1,4})/gm, "¨0")).replace(/¨0/g, ""), e = t.converter._dispatch("outdent.after", e, r, t)
  }), x.subParser("paragraphs", function(e, r, t) {
    "use strict";
    for (var a = (e = (e = (e = t.converter._dispatch("paragraphs.before", e, r, t)).replace(/^\n+/g, "")).replace(/\n+$/g, "")).split(/\n{2,}/g), n = [], s = a.length, o = 0; o < s; o++) {
      var i = a[o];
      0 <= i.search(/¨(K|G)(\d+)\1/g) ? n.push(i) : 0 <= i.search(/\S/) && (i = (i = x.subParser("spanGamut")(i, r, t)).replace(/^([ \t]*)/g, "<p>"), i += "</p>", n.push(i))
    }
    for (s = n.length, o = 0; o < s; o++) {
      for (var l = "", c = n[o], u = !1;
        /¨(K|G)(\d+)\1/.test(c);) {
        var d = RegExp.$1,
          p = RegExp.$2;
        l = (l = "K" === d ? t.gHtmlBlocks[p] : u ? x.subParser("encodeCode")(t.ghCodeBlocks[p].text, r, t) : t.ghCodeBlocks[p].codeblock).replace(/\$/g, "$$$$"), c = c.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, l), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(c) && (u = !0)
      }
      n[o] = c
    }
    return e = (e = (e = n.join("\n")).replace(/^\n+/g, "")).replace(/\n+$/g, ""), t.converter._dispatch("paragraphs.after", e, r, t)
  }), x.subParser("runExtension", function(e, r, t, a) {
    "use strict";
    return e.filter ? r = e.filter(r, a.converter, t) : e.regex && ((a = e.regex) instanceof RegExp || (a = new RegExp(a, "g")), r = r.replace(a, e.replace)), r
  }), x.subParser("spanGamut", function(e, r, t) {
    "use strict";
    return e = t.converter._dispatch("spanGamut.before", e, r, t), e = x.subParser("codeSpans")(e, r, t), e = x.subParser("escapeSpecialCharsWithinTagAttributes")(e, r, t), e = x.subParser("encodeBackslashEscapes")(e, r, t), e = x.subParser("images")(e, r, t), e = x.subParser("anchors")(e, r, t), e = x.subParser("autoLinks")(e, r, t), e = x.subParser("simplifiedAutoLinks")(e, r, t), e = x.subParser("emoji")(e, r, t), e = x.subParser("underline")(e, r, t), e = x.subParser("italicsAndBold")(e, r, t), e = x.subParser("strikethrough")(e, r, t), e = x.subParser("ellipsis")(e, r, t), e = x.subParser("hashHTMLSpans")(e, r, t), e = x.subParser("encodeAmpsAndAngles")(e, r, t), r.simpleLineBreaks ? /\n\n¨K/.test(e) || (e = e.replace(/\n+/g, "<br />\n")) : e = e.replace(/  +\n/g, "<br />\n"), e = t.converter._dispatch("spanGamut.after", e, r, t)
  }), x.subParser("strikethrough", function(e, t, a) {
    "use strict";
    return t.strikethrough && (e = (e = a.converter._dispatch("strikethrough.before", e, t, a)).replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(e, r) {
      return r = r, "<del>" + (r = t.simplifiedAutoLink ? x.subParser("simplifiedAutoLinks")(r, t, a) : r) + "</del>"
    }), e = a.converter._dispatch("strikethrough.after", e, t, a)), e
  }), x.subParser("stripLinkDefinitions", function(i, l, c) {
    "use strict";

    function e(e, r, t, a, n, s, o) {
      return r = r.toLowerCase(), i.toLowerCase().split(r).length - 1 < 2 ? e : (t.match(/^data:.+?\/.+?;base64,/) ? c.gUrls[r] = t.replace(/\s/g, "") : c.gUrls[r] = x.subParser("encodeAmpsAndAngles")(t, l, c), s ? s + o : (o && (c.gTitles[r] = o.replace(/"|'/g, "&quot;")), l.parseImgDimensions && a && n && (c.gDimensions[r] = {
        width: a,
        height: n
      }), ""))
    }
    return i = (i = (i = (i += "¨0").replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm, e)).replace(/^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, e)).replace(/¨0/, "")
  }), x.subParser("tables", function(e, y, P) {
    "use strict";
    if (!y.tables) return e;

    function r(e) {
      for (var r = e.split("\n"), t = 0; t < r.length; ++t) /^ {0,3}\|/.test(r[t]) && (r[t] = r[t].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(r[t]) && (r[t] = r[t].replace(/\|[ \t]*$/, "")), r[t] = x.subParser("codeSpans")(r[t], y, P);
      var a, n, s, o, i, l = r[0].split("|").map(function(e) {
          return e.trim()
        }),
        c = r[1].split("|").map(function(e) {
          return e.trim()
        }),
        u = [],
        d = [],
        p = [],
        h = [];
      for (r.shift(), r.shift(), t = 0; t < r.length; ++t) "" !== r[t].trim() && u.push(r[t].split("|").map(function(e) {
        return e.trim()
      }));
      if (l.length < c.length) return e;
      for (t = 0; t < c.length; ++t) p.push((a = c[t], /^:[ \t]*--*$/.test(a) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(a) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(a) ? ' style="text-align:center;"' : ""));
      for (t = 0; t < l.length; ++t) x.helper.isUndefined(p[t]) && (p[t] = ""), d.push((n = l[t], s = p[t], void 0, o = "", n = n.trim(), "<th" + (o = y.tablesHeaderId || y.tableHeaderId ? ' id="' + n.replace(/ /g, "_").toLowerCase() + '"' : o) + s + ">" + (n = x.subParser("spanGamut")(n, y, P)) + "</th>\n"));
      for (t = 0; t < u.length; ++t) {
        for (var _ = [], g = 0; g < d.length; ++g) x.helper.isUndefined(u[t][g]), _.push((i = u[t][g], "<td" + p[g] + ">" + x.subParser("spanGamut")(i, y, P) + "</td>\n"));
        h.push(_)
      }
      for (var m = d, f = h, b = "<table>\n<thead>\n<tr>\n", w = m.length, k = 0; k < w; ++k) b += m[k];
      for (b += "</tr>\n</thead>\n<tbody>\n", k = 0; k < f.length; ++k) {
        b += "<tr>\n";
        for (var v = 0; v < w; ++v) b += f[k][v];
        b += "</tr>\n"
      }
      return b += "</tbody>\n</table>\n"
    }
    return e = (e = (e = (e = P.converter._dispatch("tables.before", e, y, P)).replace(/\\(\|)/g, x.helper.escapeCharactersCallback)).replace(/^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, r)).replace(/^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm, r), e = P.converter._dispatch("tables.after", e, y, P)
  }), x.subParser("underline", function(e, r, t) {
    "use strict";
    return r.underline ? (e = t.converter._dispatch("underline.before", e, r, t), e = (e = r.literalMidWordUnderscores ? (e = e.replace(/\b___(\S[\s\S]*?)___\b/g, function(e, r) {
      return "<u>" + r + "</u>"
    })).replace(/\b__(\S[\s\S]*?)__\b/g, function(e, r) {
      return "<u>" + r + "</u>"
    }) : (e = e.replace(/___(\S[\s\S]*?)___/g, function(e, r) {
      return /\S$/.test(r) ? "<u>" + r + "</u>" : e
    })).replace(/__(\S[\s\S]*?)__/g, function(e, r) {
      return /\S$/.test(r) ? "<u>" + r + "</u>" : e
    })).replace(/(_)/g, x.helper.escapeCharactersCallback), t.converter._dispatch("underline.after", e, r, t)) : e
  }), x.subParser("unescapeSpecialChars", function(e, r, t) {
    "use strict";
    return e = (e = t.converter._dispatch("unescapeSpecialChars.before", e, r, t)).replace(/¨E(\d+)E/g, function(e, r) {
      r = parseInt(r);
      return String.fromCharCode(r)
    }), e = t.converter._dispatch("unescapeSpecialChars.after", e, r, t)
  }), x.subParser("makeMarkdown.blockquote", function(e, r) {
    "use strict";
    var t = "";
    if (e.hasChildNodes())
      for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) {
        var o = x.subParser("makeMarkdown.node")(a[s], r);
        "" !== o && (t += o)
      }
    return t = "> " + (t = t.trim()).split("\n").join("\n> ")
  }), x.subParser("makeMarkdown.codeBlock", function(e, r) {
    "use strict";
    var t = e.getAttribute("language"),
      e = e.getAttribute("precodenum");
    return "```" + t + "\n" + r.preList[e] + "\n```"
  }), x.subParser("makeMarkdown.codeSpan", function(e) {
    "use strict";
    return "`" + e.innerHTML + "`"
  }), x.subParser("makeMarkdown.emphasis", function(e, r) {
    "use strict";
    var t = "";
    if (e.hasChildNodes()) {
      t += "*";
      for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += x.subParser("makeMarkdown.node")(a[s], r);
      t += "*"
    }
    return t
  }), x.subParser("makeMarkdown.header", function(e, r, t) {
    "use strict";
    var t = new Array(t + 1).join("#"),
      a = "";
    if (e.hasChildNodes())
      for (var a = t + " ", n = e.childNodes, s = n.length, o = 0; o < s; ++o) a += x.subParser("makeMarkdown.node")(n[o], r);
    return a
  }), x.subParser("makeMarkdown.hr", function() {
    "use strict";
    return "---"
  }), x.subParser("makeMarkdown.image", function(e) {
    "use strict";
    var r = "";
    return e.hasAttribute("src") && (r = (r += "![" + e.getAttribute("alt") + "](") + "<" + e.getAttribute("src") + ">", e.hasAttribute("width") && e.hasAttribute("height") && (r += " =" + e.getAttribute("width") + "x" + e.getAttribute("height")), e.hasAttribute("title") && (r += ' "' + e.getAttribute("title") + '"'), r += ")"), r
  }), x.subParser("makeMarkdown.links", function(e, r) {
    "use strict";
    var t = "";
    if (e.hasChildNodes() && e.hasAttribute("href")) {
      for (var a = e.childNodes, n = a.length, t = "[", s = 0; s < n; ++s) t += x.subParser("makeMarkdown.node")(a[s], r);
      t = (t += "](") + ("<" + e.getAttribute("href") + ">"), e.hasAttribute("title") && (t += ' "' + e.getAttribute("title") + '"'), t += ")"
    }
    return t
  }), x.subParser("makeMarkdown.list", function(e, r, t) {
    "use strict";
    var a = "";
    if (!e.hasChildNodes()) return "";
    for (var n = e.childNodes, s = n.length, o = e.getAttribute("start") || 1, i = 0; i < s; ++i) void 0 !== n[i].tagName && "li" === n[i].tagName.toLowerCase() && (a += ("ol" === t ? o.toString() + ". " : "- ") + x.subParser("makeMarkdown.listItem")(n[i], r), ++o);
    return (a += "\n\x3c!-- --\x3e\n").trim()
  }), x.subParser("makeMarkdown.listItem", function(e, r) {
    "use strict";
    for (var t = "", a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += x.subParser("makeMarkdown.node")(a[s], r);
    return /\n$/.test(t) ? t = t.split("\n").join("\n    ").replace(/^ {4}$/gm, "").replace(/\n\n+/g, "\n\n") : t += "\n", t
  }), x.subParser("makeMarkdown.node", function(e, r, t) {
    "use strict";
    t = t || !1;
    var a = "";
    if (3 === e.nodeType) return x.subParser("makeMarkdown.txt")(e, r);
    if (8 === e.nodeType) return "\x3c!--" + e.data + "--\x3e\n\n";
    if (1 !== e.nodeType) return "";
    switch (e.tagName.toLowerCase()) {
      case "h1":
        t || (a = x.subParser("makeMarkdown.header")(e, r, 1) + "\n\n");
        break;
      case "h2":
        t || (a = x.subParser("makeMarkdown.header")(e, r, 2) + "\n\n");
        break;
      case "h3":
        t || (a = x.subParser("makeMarkdown.header")(e, r, 3) + "\n\n");
        break;
      case "h4":
        t || (a = x.subParser("makeMarkdown.header")(e, r, 4) + "\n\n");
        break;
      case "h5":
        t || (a = x.subParser("makeMarkdown.header")(e, r, 5) + "\n\n");
        break;
      case "h6":
        t || (a = x.subParser("makeMarkdown.header")(e, r, 6) + "\n\n");
        break;
      case "p":
        t || (a = x.subParser("makeMarkdown.paragraph")(e, r) + "\n\n");
        break;
      case "blockquote":
        t || (a = x.subParser("makeMarkdown.blockquote")(e, r) + "\n\n");
        break;
      case "hr":
        t || (a = x.subParser("makeMarkdown.hr")(e, r) + "\n\n");
        break;
      case "ol":
        t || (a = x.subParser("makeMarkdown.list")(e, r, "ol") + "\n\n");
        break;
      case "ul":
        t || (a = x.subParser("makeMarkdown.list")(e, r, "ul") + "\n\n");
        break;
      case "precode":
        t || (a = x.subParser("makeMarkdown.codeBlock")(e, r) + "\n\n");
        break;
      case "pre":
        t || (a = x.subParser("makeMarkdown.pre")(e, r) + "\n\n");
        break;
      case "table":
        t || (a = x.subParser("makeMarkdown.table")(e, r) + "\n\n");
        break;
      case "code":
        a = x.subParser("makeMarkdown.codeSpan")(e, r);
        break;
      case "em":
      case "i":
        a = x.subParser("makeMarkdown.emphasis")(e, r);
        break;
      case "strong":
      case "b":
        a = x.subParser("makeMarkdown.strong")(e, r);
        break;
      case "del":
        a = x.subParser("makeMarkdown.strikethrough")(e, r);
        break;
      case "a":
        a = x.subParser("makeMarkdown.links")(e, r);
        break;
      case "img":
        a = x.subParser("makeMarkdown.image")(e, r);
        break;
      default:
        a = e.outerHTML + "\n\n"
    }
    return a
  }), x.subParser("makeMarkdown.paragraph", function(e, r) {
    "use strict";
    var t = "";
    if (e.hasChildNodes())
      for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += x.subParser("makeMarkdown.node")(a[s], r);
    return t = t.trim()
  }), x.subParser("makeMarkdown.pre", function(e, r) {
    "use strict";
    e = e.getAttribute("prenum");
    return "<pre>" + r.preList[e] + "</pre>"
  }), x.subParser("makeMarkdown.strikethrough", function(e, r) {
    "use strict";
    var t = "";
    if (e.hasChildNodes()) {
      t += "~~";
      for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += x.subParser("makeMarkdown.node")(a[s], r);
      t += "~~"
    }
    return t
  }), x.subParser("makeMarkdown.strong", function(e, r) {
    "use strict";
    var t = "";
    if (e.hasChildNodes()) {
      t += "**";
      for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += x.subParser("makeMarkdown.node")(a[s], r);
      t += "**"
    }
    return t
  }), x.subParser("makeMarkdown.table", function(e, r) {
    "use strict";
    for (var t = "", a = [
        [],
        []
      ], n = e.querySelectorAll("thead>tr>th"), s = e.querySelectorAll("tbody>tr"), o = 0; o < n.length; ++o) {
      var i = x.subParser("makeMarkdown.tableCell")(n[o], r),
        l = "---";
      if (n[o].hasAttribute("style")) switch (n[o].getAttribute("style").toLowerCase().replace(/\s/g, "")) {
        case "text-align:left;":
          l = ":---";
          break;
        case "text-align:right;":
          l = "---:";
          break;
        case "text-align:center;":
          l = ":---:"
      }
      a[0][o] = i.trim(), a[1][o] = l
    }
    for (o = 0; o < s.length; ++o)
      for (var c = a.push([]) - 1, u = s[o].getElementsByTagName("td"), d = 0; d < n.length; ++d) {
        var p = " ";
        void 0 !== u[d] && (p = x.subParser("makeMarkdown.tableCell")(u[d], r)), a[c].push(p)
      }
    var h = 3;
    for (o = 0; o < a.length; ++o)
      for (d = 0; d < a[o].length; ++d) {
        var _ = a[o][d].length;
        h < _ && (h = _)
      }
    for (o = 0; o < a.length; ++o) {
      for (d = 0; d < a[o].length; ++d) 1 === o ? ":" === a[o][d].slice(-1) ? a[o][d] = x.helper.padEnd(a[o][d].slice(-1), h - 1, "-") + ":" : a[o][d] = x.helper.padEnd(a[o][d], h, "-") : a[o][d] = x.helper.padEnd(a[o][d], h);
      t += "| " + a[o].join(" | ") + " |\n"
    }
    return t.trim()
  }), x.subParser("makeMarkdown.tableCell", function(e, r) {
    "use strict";
    var t = "";
    if (!e.hasChildNodes()) return "";
    for (var a = e.childNodes, n = a.length, s = 0; s < n; ++s) t += x.subParser("makeMarkdown.node")(a[s], r, !0);
    return t.trim()
  }), x.subParser("makeMarkdown.txt", function(e) {
    "use strict";
    e = e.nodeValue;
    return e = (e = e.replace(/ +/g, " ")).replace(/¨NBSP;/g, " "), e = (e = (e = (e = (e = (e = (e = (e = (e = x.helper.unescapeHTMLEntities(e)).replace(/([*_~|`])/g, "\\$1")).replace(/^(\s*)>/g, "\\$1>")).replace(/^#/gm, "\\#")).replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3")).replace(/^( {0,3}\d+)\./gm, "$1\\.")).replace(/^( {0,3})([+-])/gm, "$1\\$2")).replace(/]([\s]*)\(/g, "\\]$1\\(")).replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:")
  });
  "function" == typeof define && define.amd ? define(function() {
    "use strict";
    return x
  }) : "undefined" != typeof module && module.exports ? module.exports = x : this.showdown = x
}.call(this);

function _bool(Handlebars) {
  Handlebars.registerHelper("bool", function(operand_1, operator, operand_2) {
    var operators = {
        eq: function(l, r) {
          return l == r
        },
        noteq: function(l, r) {
          return l != r
        },
        gt: function(l, r) {
          return Number(l) > Number(r)
        },
        gte: function(l, r) {
          return Number(l) >= Number(r)
        },
        lt: function(l, r) {
          return Number(l) < Number(r)
        },
        lte: function(l, r) {
          return Number(l) <= Number(r)
        },
        or: function(l, r) {
          return l || r
        },
        and: function(l, r) {
          return l && r
        },
        "%": function(l, r) {
          return l % r === 0
        },
        in: function(l, r) {
          return r.split(",").includes(l)
        },
        notin: function(l, r) {
          return !r.split(",").includes(l)
        }
      },
      result = operators[operator](operand_1, operand_2);
    if (result) return new Handlebars.SafeString("true");
    else return new Handlebars.SafeString("false")
  })
}
_bool(Handlebars);

function _buildversion(Handlebars) {
  Handlebars.registerHelper("buildversion", function(field) {
    const buildDate = new Date(0);
    buildDate.setUTCSeconds(parseInt(process.env.BUILDDATE));
    var buildVersion = {
      version: process.env.PACKAGE_VERSION ?? "0.0.0",
      epochBuildate: parseInt(process.env.BUILDDATE) ?? 0,
      buildDate: buildDate,
      buildDateStr: buildDate ? buildDate.toLocaleDateString() + " " + buildDate.toLocaleTimeString() : ""
    };
    var result = "";
    switch (field) {
      case "version":
        result = buildVersion.version + (process.env.IN_DOCKER ? " (Docker)" : "");
        break;
      case "buildDateStr":
        result = buildVersion.buildDateStr;
        break
    }
    return new Handlebars.SafeString(result)
  })
}
_buildversion(Handlebars);

function _cell(Handlebars) {
  Handlebars.registerHelper("cell", function(value, delimiter, index) {
    if (value) {
      var items = value.split(delimiter);
      if (index > items.length) {
        return ""
      }
      return new Handlebars.SafeString(items[index])
    }
    return ""
  })
}
_cell(Handlebars);

function _debug(Handlebars) {
  Handlebars.registerHelper("debug", function(obj) {
    return new Handlebars.SafeString("<pre>" + JSON.stringify(obj, null, 2) + "</pre>")
  })
}
_debug(Handlebars);

function _desktopbackground(Handlebars) {
  Handlebars.registerHelper("desktopbackground", function(opt) {
    var html = 'style="';
    if (!opt) {
      return ""
    }
    switch (opt.type) {
      case "image":
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
  })
}
_desktopbackground(Handlebars);

function _format(Handlebars) {
  Handlebars.registerHelper("format", function(spec, value, options) {
    var opts = {};
    if (typeof options === "string" || options instanceof String) {
      opts = JSON.parse(options ?? "{}")
    } else {
      opts = options ?? {}
    }
    const padTo2Digits = function(num) {
      return num.toString().padStart(2, "0")
    };
    const formatBytes = function(b, decimals = 2) {
      const bytes = parseInt(b);
      if (isNaN(bytes)) {
        return ""
      }
      if (!+bytes) {
        return "0 Bytes"
      }
      const k = 1024;
      const dm = decimals < 0 ? 0 : decimals;
      const sizes = ["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return `${parseFloat((bytes/Math.pow(k,i)).toFixed(dm))} ${sizes[i]}`
    };
    const formatDate = function(date) {
      return [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join("-") + " " + [padTo2Digits(date.getHours()), padTo2Digits(date.getMinutes()), padTo2Digits(date.getSeconds())].join(":")
    };
    const getDate = function(v) {
      var value = parseInt(v);
      if (isNaN(value)) {
        return Date.Parse(v)
      }
      return new Date(value)
    };
    switch (spec.toLowerCase()) {
      case "bytes":
        var bytes = Number(value);
        return new Handlebars.SafeString(formatBytes(bytes));
      case "map":
        var arr = Array(value).map(t => {
          return t[opts.name]
        }).sort();
        return new Handlebars.SafeString(arr.join(opts.delimiter ?? ", "));
      case "list":
        var arr = Array(value).sort();
        return new Handlebars.SafeString(arr.join(opts.delimiter ?? ", "));
      case "datetime":
        var dte = getDate(value);
        var dteStr = dte.toLocaleDateString(opts.locale ?? "en-GB") + " " + dte.toLocaleTimeString(opts.locale ?? "en-GB");
        return new Handlebars.SafeString(dteStr);
      case "date":
        var dte = getDate(value);
        var dteStr = dte.toLocaleDateString(opts.locale ?? "en-GB", {
          weekday: "short",
          day: "numeric",
          month: "short"
        });
        return new Handlebars.SafeString(dteStr);
      case "isodate":
        var dte = new Date(value);
        return new Handlebars.SafeString(formatDate(dte));
      case "iso8601date":
        var dte = new Date(value);
        return new Handlebars.SafeString(dte.toISOString());
      case "currency":
        var s = Number(value).toLocaleString(opts.locale ?? "en-GB", {
          style: "currency",
          minimumFractionDigits: 2
        });
        return new Handlebars.SafeString(s);
      case "percent":
        var s = Number(value).toLocaleString(opts.locale ?? "en-GB", {
          style: "percent",
          minimumFractionDigits: 2
        });
        return new Handlebars.SafeString(s);
      case "json":
        return new Handlebars.SafeString(JSON.stringify(value))
    }
    return new Handlebars.SafeString(value)
  })
}
_format(Handlebars);

function _humandate(Handlebars) {
  Handlebars.registerHelper("humandate", function(value) {
    var dte = new Date(value);
    var dteStr = dte.toLocaleDateString() + " " + dte.toLocaleTimeString();
    return new Handlebars.SafeString(dteStr)
  })
}
_humandate(Handlebars);

function _humandateonly(Handlebars) {
  Handlebars.registerHelper("humandateonly", function(value) {
    var dte = new Date(value);
    var dteStr = dte.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short"
    });
    return new Handlebars.SafeString(dteStr)
  })
}
_humandateonly(Handlebars);

function _isempty(Handlebars) {
  Handlebars.registerHelper("isempty", function(field, options) {
    if (field) {
      if (field === "") {
        return options.fn(this)
      }
      return options.inverse(this)
    }
    return options.fn(this)
  })
}
_isempty(Handlebars);

function _isnotempty(Handlebars) {
  Handlebars.registerHelper("isnotempty", function(field, options) {
    if (field) {
      if (field === "") {
        return options.inverse(this)
      }
      return options.fn(this)
    }
    return options.inverse(this)
  })
}
_isnotempty(Handlebars);

function _label(Handlebars) {
  Handlebars.registerHelper("label", function(key, context) {
    if (context.Config.Labels[key]) {
      return new Handlebars.SafeString(context.Config.Labels[key])
    }
    return new Handlebars.SafeString("")
  })
}
_label(Handlebars);

function _map(Handlebars) {
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
  })
}
_map(Handlebars);

function _minify(Handlebars) {
  Handlebars.registerHelper("minify", function(obj) {
    return new Handlebars.SafeString(JSON.stringify(obj))
  })
}
_minify(Handlebars);

function _now(Handlebars) {
  Handlebars.registerHelper("now", function() {
    var dte = new Date;
    var dteStr = dte.toLocaleDateString() + " " + dte.toLocaleTimeString();
    return new Handlebars.SafeString(dteStr)
  })
}
_now(Handlebars);

function _secondstotime(Handlebars) {
  Handlebars.registerHelper("secondstotime", function(obj, fmnt) {
    var seconds = Math.abs(obj);
    var result = "-";
    if (seconds <= 0) {
      return new Handlebars.SafeString(result)
    }
    var days = Math.floor(seconds / (3600 * 24));
    seconds -= days * 3600 * 24;
    var hrs = Math.floor(seconds / 3600);
    seconds -= hrs * 3600;
    var mnts = Math.floor(seconds / 60);
    seconds -= mnts * 60;
    if (fmnt == "short") {
      result = (days > 0 ? days + " days, " : "") + hrs.toString().padStart(2, "0") + ":" + mnts.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0")
    } else {
      result = days > 0 ? days + " days, " : "";
      if (days > 0) {
        result += hrs + " hours,"
      } else {
        result += hrs > 0 ? hrs + " hours, " : ""
      }
      if (hrs > 0 || days > 0) {
        result += mnts + " minutes, "
      } else {
        result += mnts > 0 ? mnts + " minutes, " : ""
      }
      result += seconds + " seconds"
    }
    return new Handlebars.SafeString(result)
  })
}
_secondstotime(Handlebars);

function _service(Handlebars) {
  Handlebars.registerHelper("service", function(obj, services, parent, opacity) {
    var html = "";
    var template = "";
    var p = {
      title: parent.title,
      bgcolor: parent.bgcolor,
      buttonclass: parent.buttonclass,
      background: parent.background,
      opacity: opacity
    };
    var f = {};
    var serviceUrl = "";
    var type = "container";
    var name = Object.keys(obj)[0];
    var realName = name.toLowerCase();
    var settings = obj[name];
    p.opacity = opacity;
    const extend = (a, b) => {
      for (var key in b)
        if (Object.prototype.hasOwnProperty.call(b, key)) a[key] = b[key];
      return a
    };
    if (name.includes(".")) {
      var arr = name.toLowerCase().split(".");
      type = arr[0].toLowerCase();
      realName = arr[1]
    }
    switch (type) {
      case "widget":
        template = name.toLowerCase().replace(".", "-").replace(/\//g, "_");
        switch (realName) {
          case "clock":
            switch (settings.mode) {
              case "analog":
                f = Handlebars.partials["widget-clock"];
                html = f({
                  settings: settings,
                  parent: p
                });
                break;
              case "digital":
                f = Handlebars.partials["widget-digitalclock"];
                html = f({
                  settings: settings,
                  parent: p
                });
                break
            }
            break;
          case "image":
            f = Handlebars.partials["widget-image"];
            html = f({
              settings: settings,
              parent: p
            });
            break;
          case "audio":
            settings = extend({
              autoplay: true
            }, settings);
            f = Handlebars.partials["widget-audio"];
            html = f({
              settings: settings,
              parent: p
            });
            break;
          case "television":
            settings = extend({
              autoplay: true
            }, settings);
            if (settings.dashvideo) {
              settings.autoplay = true
            }
            f = Handlebars.partials["widget-tv"];
            html = f({
              settings: settings,
              parent: p
            });
            break;
          case "video":
            settings = extend({
              autoplay: true
            }, settings);
            if (settings.dashvideo) {
              settings.autoplay = true
            }
            f = Handlebars.partials["widget-video"];
            html = f({
              settings: settings,
              parent: p
            });
            break;
          case "frame":
            f = Handlebars.partials["widget-frame"];
            html = f({
              settings: settings,
              parent: p
            });
            break;
          case "news":
            serviceUrl = "/api/resources/news?u=" + encodeURIComponent(settings.url);
            settings.serviceUrl = serviceUrl;
            settings.domainUrl = new URL(settings.url).hostname.toLowerCase().replace("www.", "");
            f = Handlebars.partials["widget-news"];
            html = f({
              settings: settings,
              parent: p
            });
            break;
          case "linkcloud":
            f = Handlebars.partials["widget-tagcloud"];
            if (f) {
              html = f({
                settings: settings,
                parent: p
              })
            }
            break;
          case "weather":
            serviceUrl = "/api/resources/weather?latitude=" + settings.latitude + "&longitude=" + settings.longitude;
            if (settings.days) {
              serviceUrl += "&days=" + settings.days
            }
            var bstr = Buffer.from(JSON.stringify({
              s: settings,
              tp: p
            })).toString("base64");
            html = '<div data-settings="' + bstr + '" class="hbs-template" data-url="' + serviceUrl + '"  data-template="widget-weather" ></div>';
            settings.serviceUrl = serviceUrl;
            break;
          case "globe":
            f = Handlebars.partials["widget-globe"];
            html = f({
              settings: settings,
              parent: p
            });
            break;
          default:
            f = Handlebars.partials[template];
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
            f = Handlebars.partials[template];
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
        var domainUrl = "";
        name = "";
        var iconCatalog = "";
        var iconSlug = "";
        if (settings) {
          url = settings.url ?? "";
          domainUrl = new URL(url).hostname.toLowerCase().replace("www.", "");
          name = settings.name ?? "";
          iconCatalog = settings.iconCatalog ?? "";
          iconSlug = settings.iconSlug ?? ""
        }
        f = Handlebars.partials[template];
        html = f({
          settings: {
            iconCatalog: iconCatalog,
            iconSlug: iconSlug,
            url: url,
            domainUrl: domainUrl,
            name: name
          },
          parent: p
        });
        break
    }
    return new Handlebars.SafeString(html)
  })
}
_service(Handlebars);

function _stringify(Handlebars) {
  Handlebars.registerHelper("stringify", function(obj) {
    return new Handlebars.SafeString(JSON.stringify(obj, null, 0))
  })
}
_stringify(Handlebars);

function _toolbaritem(Handlebars) {
  Handlebars.registerHelper("toolbaritem", function(obj, settings) {
    var html = "";
    switch (obj) {
      case "discovrninja":
        html = '<a class="nav-link" href="/admin/index">Administration</a>';
        break;
      case "search":
        var f = Handlebars.partials["widget-search"];
        html = f({
          settings: settings,
          parent: {}
        });
        break
    }
    return new Handlebars.SafeString(html)
  })
}
_toolbaritem(Handlebars);

function _urlencode(Handlebars) {
  Handlebars.registerHelper("urlencode", function(obj) {
    return new Handlebars.SafeString(encodeURIComponent(obj))
  })
}
_urlencode(Handlebars);

function _when(Handlebars) {
  Handlebars.registerHelper("when", function(operand_1, operator, operand_2, options) {
    var operators = {
        eq: function(l, r) {
          return l == r
        },
        noteq: function(l, r) {
          return l != r
        },
        gt: function(l, r) {
          return Number(l) > Number(r)
        },
        gte: function(l, r) {
          return Number(l) >= Number(r)
        },
        lt: function(l, r) {
          return Number(l) < Number(r)
        },
        lte: function(l, r) {
          return Number(l) <= Number(r)
        },
        or: function(l, r) {
          return l || r
        },
        and: function(l, r) {
          return l && r
        },
        "%": function(l, r) {
          return l % r === 0
        },
        in: function(l, r) {
          return r.split(",").includes(l)
        },
        notin: function(l, r) {
          return !r.split(",").includes(l)
        },
        contains: function(l, r) {
          if (typeof l === "string") return l.includes(r);
          else return l ? l[r] ? true : false : false
        },
        notcontains: function(l, r) {
          if (typeof l === "string") return !l.includes(r);
          else return l ? !(l[r] ? true : false) : false
        }
      },
      result = operators[operator](operand_1, operand_2);
    if (result) return options.fn(this);
    else return options.inverse(this)
  })
}
_when(Handlebars);
this["app"] = this["app"] || {};
this["app"]["templates"] = this["app"]["templates"] || {};
this["app"]["templates"]["admindash"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
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
    return "                <tr>\n                  <td>" + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "title",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 28,
          column: 22
        },
        end: {
          line: 28,
          column: 31
        }
      }
    }) : helper)) + "</td>\n                  <td>" + alias4((helper = (helper = lookupProperty(helpers, "total") || (depth0 != null ? lookupProperty(depth0, "total") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "total",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 29,
          column: 22
        },
        end: {
          line: 29,
          column: 31
        }
      }
    }) : helper)) + "</td>\n                </tr>\n"
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      alias3 = depth0 != null ? depth0 : container.nullContext || {},
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '<div class="container">\n  <div class="row">\n    <div class="col" style="padding-top:5px ! important;">\n      <div class="card" style="padding: 5px;width: 20rem;">\n        <div class="card-body">\n          <img style="max-width:200px;" src="/assets/img/logo.png" />\n          <p class="cardo-regular" style="font-size:48px;">Discovrninja</p>\n          <p>Version ' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "version") : depth0) != null ? lookupProperty(stack1, "version") : stack1, depth0)) + "</p>\n          <p>Build " + alias2((lookupProperty(helpers, "format") || depth0 && lookupProperty(depth0, "format") || container.hooks.helperMissing).call(alias3, "datetime", (stack1 = depth0 != null ? lookupProperty(depth0, "version") : depth0) != null ? lookupProperty(stack1, "epochBuildDate") : stack1, {
      name: "format",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 9,
          column: 19
        },
        end: {
          line: 9,
          column: 63
        }
      }
    })) + "</p>\n          <p>Username " + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "user") : depth0) != null ? lookupProperty(stack1, "username") : stack1, depth0)) + '</p>\n        </div>\n      </div>\n    </div>\n    <div class="col" style="padding-top:5px !important;">\n      <div class="card" style="padding:5px;width: 20rem;">\n        <div class="card-body">\n          <table class="table table-striped table-hover table-sm caption-top">\n            <caption>Container States</caption>\n            <thead>\n              <tr>\n                <th scope="col">Status</th>\n                <th scope="col">Total</th>\n              </tr>\n            </thead>\n            <tbody>\n' + ((stack1 = lookupProperty(helpers, "each").call(alias3, depth0 != null ? lookupProperty(depth0, "states") : depth0, {
      name: "each",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 26,
          column: 14
        },
        end: {
          line: 31,
          column: 25
        }
      }
    })) != null ? stack1 : "") + '            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="row">\n    <div class="col" style="padding-top:5px ! important;">\n      <div class="card" style="padding:5px;width: 20rem;">\n        <div class="card-body">\n          <div class="table-responsive">\n            <table class="table table-striped table-hover table-sm table-nowrap">\n              <tbody>\n                <tr>\n                  <td>CPU Cores</td>\n                  <td>' + alias2(alias1((stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "sysinfo") : depth0) != null ? lookupProperty(stack1, "info") : stack1) != null ? lookupProperty(stack1, "NCPU") : stack1, depth0)) + "</td>\n                </tr>\n                <tr>\n                  <td>Containers</td>\n                  <td>" + alias2(alias1((stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "sysinfo") : depth0) != null ? lookupProperty(stack1, "info") : stack1) != null ? lookupProperty(stack1, "Containers") : stack1, depth0)) + "</td>\n                </tr>\n                <tr>\n                  <td>Containers Running</td>\n                  <td>" + alias2(alias1((stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "sysinfo") : depth0) != null ? lookupProperty(stack1, "info") : stack1) != null ? lookupProperty(stack1, "ContainersRunning") : stack1, depth0)) + "</td>\n                </tr>\n                <tr>\n                  <td>Containers Paused</td>\n                  <td>" + alias2(alias1((stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "sysinfo") : depth0) != null ? lookupProperty(stack1, "info") : stack1) != null ? lookupProperty(stack1, "ContainersPaused") : stack1, depth0)) + "</td>\n                </tr>\n                <tr>\n                  <td>Containers Stopped</td>\n                  <td>" + alias2(alias1((stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "sysinfo") : depth0) != null ? lookupProperty(stack1, "info") : stack1) != null ? lookupProperty(stack1, "ContainersStopped") : stack1, depth0)) + '</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="col" style="padding-top:5px ! important;">\n      <div class="card" style="padding:5px;width: 20rem;">\n        <div class="card-body">\n          <object style="background:transparent;pointer-events:none;" data="/assets/img/clock.svg" type="image/svg+xml">\n          </object>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'
  },
  useData: true
});
this["app"]["templates"]["bookmarkslist"] = Handlebars.template({
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
    return '        <tr>\n          <td style="width:105px;height:65px;">\n            ' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "preview_image_url") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(2, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 5,
          column: 12
        },
        end: {
          line: 5,
          column: 120
        }
      }
    })) != null ? stack1 : "") + '\n          </td>\n          <td>\n            <a href="' + alias4((helper = (helper = lookupProperty(helpers, "url") || (depth0 != null ? lookupProperty(depth0, "url") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "url",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 8,
          column: 21
        },
        end: {
          line: 8,
          column: 28
        }
      }
    }) : helper)) + '" target="_new">' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "favicon_url") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(4, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 8,
          column: 44
        },
        end: {
          line: 8,
          column: 154
        }
      }
    })) != null ? stack1 : "") + " " + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "title",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 8,
          column: 155
        },
        end: {
          line: 8,
          column: 164
        }
      }
    }) : helper)) + "</a><br />\n            " + alias4((helper = (helper = lookupProperty(helpers, "description") || (depth0 != null ? lookupProperty(depth0, "description") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "description",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 9,
          column: 12
        },
        end: {
          line: 9,
          column: 27
        }
      }
    }) : helper)) + "\n          </td>\n        </tr>\n"
  },
  2: function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '<img src="' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "preview_image_url") || (depth0 != null ? lookupProperty(depth0, "preview_image_url") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      name: "preview_image_url",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 5,
          column: 47
        },
        end: {
          line: 5,
          column: 68
        }
      }
    }) : helper)) + '" style="max-height:60px;max-width:100px;" />'
  },
  4: function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '<img src="' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "favicon_url") || (depth0 != null ? lookupProperty(depth0, "favicon_url") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      name: "favicon_url",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 8,
          column: 73
        },
        end: {
          line: 8,
          column: 88
        }
      }
    }) : helper)) + '" style="border: none;max-height: 16px;max-width:16px;" />'
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '    <table border="0" cellpadding="5" cellspacing="0">\n' + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : container.nullContext || {}, depth0, {
      name: "each",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 2,
          column: 6
        },
        end: {
          line: 12,
          column: 15
        }
      }
    })) != null ? stack1 : "") + "    </table>\n"
  },
  useData: true
});
this["app"]["templates"]["containerinfo"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
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
  3: function(container, depth0, helpers, partials, data) {
    return "Update Available"
  },
  5: function(container, depth0, helpers, partials, data) {
    return "Up-to-date"
  },
  7: function(container, depth0, helpers, partials, data) {
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
          line: 57,
          column: 79
        },
        end: {
          line: 57,
          column: 87
        }
      }
    }) : helper)) + '" data-project="' + alias1(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "editor") : depth0) != null ? lookupProperty(stack1, "project") : stack1, depth0)) + '" type="button" class="btn btn-secondary"><i class="fa-regular fa-pen-to-square"></i> Edit</button>\n'
  },
  9: function(container, depth0, helpers, partials, data) {
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
          line: 59,
          column: 79
        },
        end: {
          line: 59,
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
    }) : helper)) + '</h1>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body">\n        <div style="text-align:center;margin-top:5px" class="card">\n          <img class="card-img-top" style="padding:5px;width:10rem;height:10rem;" src="/api/icons/r/' + alias4((helper = (helper = lookupProperty(helpers, "icon_catalog") || (depth0 != null ? lookupProperty(depth0, "icon_catalog") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "icon_catalog",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 10,
          column: 100
        },
        end: {
          line: 10,
          column: 116
        }
      }
    }) : helper)) + "/" + alias4((helper = (helper = lookupProperty(helpers, "icon_slug") || (depth0 != null ? lookupProperty(depth0, "icon_slug") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "icon_slug",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 10,
          column: 117
        },
        end: {
          line: 10,
          column: 130
        }
      }
    }) : helper)) + '/resource" />\n        </div>\n        <div class="card-body">\n          <p class="card-text">\n          <table border="0" cellpadding="2" cellspacing="0">\n            <tr>\n              <td>Hostname:</td>\n              <td>' + alias4(alias5((stack1 = depth0 != null ? lookupProperty(depth0, "Config") : depth0) != null ? lookupProperty(stack1, "Hostname") : stack1, depth0)) + "</td>\n            </tr>\n            <tr>\n              <td>Image:</td>\n              <td>" + alias4(alias5((stack1 = depth0 != null ? lookupProperty(depth0, "Config") : depth0) != null ? lookupProperty(stack1, "Image") : stack1, depth0)) + "</td>\n            </tr>\n" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "downtime") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(1, data, 0),
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
      fn: container.program(3, data, 0),
      inverse: container.program(5, data, 0),
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
    }) : helper)) + '" data-command="container-restart">Restart</button>\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "editor") : depth0) != null ? lookupProperty(stack1, "editable") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(7, data, 0),
      inverse: container.program(9, data, 0),
      data: data,
      loc: {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 60,
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
    return '         <tr class="nowrap">\n           <td>\n             <a title="Navigate to" ' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "publicUrl") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(2, data, 0),
      inverse: container.program(4, data, 0),
      data: data,
      loc: {
        start: {
          line: 20,
          column: 36
        },
        end: {
          line: 20,
          column: 196
        }
      }
    })) != null ? stack1 : "") + '><i class="fa-solid fa-link"></i></a>\n             <a title="Export" href="#" data-containerid="' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 21,
          column: 58
        },
        end: {
          line: 21,
          column: 66
        }
      }
    }) : helper)) + '" onclick="exportContainer(this); return false;" class="btn btn-outline-secondary btn-sm"><i class="fa-solid fa-file-export"></i></a>\n             <a title="Edit container" href="#" data-containerid="' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 22,
          column: 66
        },
        end: {
          line: 22,
          column: 74
        }
      }
    }) : helper)) + '" data-project="' + alias4((helper = (helper = lookupProperty(helpers, "project") || (depth0 != null ? lookupProperty(depth0, "project") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "project",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 22,
          column: 90
        },
        end: {
          line: 22,
          column: 101
        }
      }
    }) : helper)) + '" onclick="composeEdit(this, 1); return false;" class="btn btn-outline-secondary btn-sm"><i class="fa-regular fa-pen-to-square"></i></a>\n             <a title="Update available" href="#" data-imageid="' + alias4((helper = (helper = lookupProperty(helpers, "image") || (depth0 != null ? lookupProperty(depth0, "image") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "image",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 23,
          column: 64
        },
        end: {
          line: 23,
          column: 73
        }
      }
    }) : helper)) + '" data-containerid="' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 23,
          column: 93
        },
        end: {
          line: 23,
          column: 101
        }
      }
    }) : helper)) + '" data-project="' + alias4((helper = (helper = lookupProperty(helpers, "project") || (depth0 != null ? lookupProperty(depth0, "project") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "project",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 23,
          column: 117
        },
        end: {
          line: 23,
          column: 128
        }
      }
    }) : helper)) + '" onclick="" class="btn btn-outline-secondary btn-sm updatecheck"><i class="fa-regular fa-circle-question"></i></a>\n           </td>\n           <td>\n' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "configured") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(6, data, 0),
      inverse: container.program(8, data, 0),
      data: data,
      loc: {
        start: {
          line: 26,
          column: 13
        },
        end: {
          line: 30,
          column: 20
        }
      }
    })) != null ? stack1 : "") + '           </td>\n\n           <td align="center" ' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "healthy") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(9, data, 0),
      inverse: container.program(11, data, 0),
      data: data,
      loc: {
        start: {
          line: 33,
          column: 30
        },
        end: {
          line: 33,
          column: 89
        }
      }
    })) != null ? stack1 : "") + '><i class="' + alias4((helper = (helper = lookupProperty(helpers, "stateCss") || (depth0 != null ? lookupProperty(depth0, "stateCss") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "stateCss",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 33,
          column: 100
        },
        end: {
          line: 33,
          column: 112
        }
      }
    }) : helper)) + '" data-bs-toggle="tooltip" title="' + alias4((helper = (helper = lookupProperty(helpers, "status") || (depth0 != null ? lookupProperty(depth0, "status") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "status",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 33,
          column: 146
        },
        end: {
          line: 33,
          column: 156
        }
      }
    }) : helper)) + '" data-bs-title="' + alias4((helper = (helper = lookupProperty(helpers, "status") || (depth0 != null ? lookupProperty(depth0, "status") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "status",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 33,
          column: 173
        },
        end: {
          line: 33,
          column: 183
        }
      }
    }) : helper)) + '"></i>\n           </td>\n           <td ' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "healthy") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(13, data, 0),
      inverse: container.program(11, data, 0),
      data: data,
      loc: {
        start: {
          line: 35,
          column: 15
        },
        end: {
          line: 35,
          column: 117
        }
      }
    })) != null ? stack1 : "") + ">\n             " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "shutdown") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(16, data, 0),
      inverse: container.program(18, data, 0),
      data: data,
      loc: {
        start: {
          line: 36,
          column: 13
        },
        end: {
          line: 36,
          column: 69
        }
      }
    })) != null ? stack1 : "") + "\n           </td>\n           <td " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "healthy") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(9, data, 0),
      inverse: container.program(11, data, 0),
      data: data,
      loc: {
        start: {
          line: 38,
          column: 15
        },
        end: {
          line: 38,
          column: 74
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
          line: 38,
          column: 75
        },
        end: {
          line: 38,
          column: 131
        }
      }
    })) != null ? stack1 : "") + "</td>\n           <td " + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "healthy") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(22, data, 0),
      inverse: container.program(11, data, 0),
      data: data,
      loc: {
        start: {
          line: 39,
          column: 15
        },
        end: {
          line: 39,
          column: 120
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
          line: 39,
          column: 121
        },
        end: {
          line: 39,
          column: 183
        }
      }
    })) != null ? stack1 : "") + "</td>\n           <td>" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "uptime") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(26, data, 0),
      inverse: container.program(28, data, 0),
      data: data,
      loc: {
        start: {
          line: 40,
          column: 15
        },
        end: {
          line: 40,
          column: 107
        }
      }
    })) != null ? stack1 : "") + "</td>\n         </tr>\n"
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
          column: 59
        },
        end: {
          line: 20,
          column: 72
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
    return '               <span class="text-info">' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      name: "name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 27,
          column: 39
        },
        end: {
          line: 27,
          column: 47
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
    return '               <a title="View properties" href="#" data-containerid="' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 29,
          column: 69
        },
        end: {
          line: 29,
          column: 77
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
          line: 29,
          column: 79
        },
        end: {
          line: 29,
          column: 138
        }
      }
    })) != null ? stack1 : "") + ' onclick="containerInfo(this);return false;">' + alias4((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "name",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 29,
          column: 183
        },
        end: {
          line: 29,
          column: 191
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
          line: 35,
          column: 30
        },
        end: {
          line: 35,
          column: 73
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
          line: 39,
          column: 30
        },
        end: {
          line: 39,
          column: 76
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
  26: function(container, depth0, helpers, partials, data) {
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
    return '<span class="' + alias4((helper = (helper = lookupProperty(helpers, "colorLevel") || (depth0 != null ? lookupProperty(depth0, "colorLevel") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "colorLevel",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 40,
          column: 42
        },
        end: {
          line: 40,
          column: 56
        }
      }
    }) : helper)) + '">' + alias4((helper = (helper = lookupProperty(helpers, "uptimeSecondsPercent") || (depth0 != null ? lookupProperty(depth0, "uptimeSecondsPercent") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "uptimeSecondsPercent",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 40,
          column: 58
        },
        end: {
          line: 40,
          column: 82
        }
      }
    }) : helper)) + "</span>"
  },
  28: function(container, depth0, helpers, partials, data) {
    return "n/a"
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
    return ' <div class="table-responsive">\n   <table id="dockerps" class="datatable table table-striped table-sm table-hover align-middle table-nowrap">\n     <caption>' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "now") || (depth0 != null ? lookupProperty(depth0, "now") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(alias1, {
      name: "now",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 3,
          column: 21
        }
      }
    }) : helper)) + "\n       <caption>\n       <thead>\n     <tr>\n       <th></th>\n       <th>Name</th>\n       <th>State</th>\n       <th>CPU</th>\n       <th>Memory</th>\n       <th>% Free</th>\n       <th>Uptime</th>\n     </tr>\n     </thead>\n     <tbody>\n" + ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0, {
      name: "each",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 17,
          column: 7
        },
        end: {
          line: 42,
          column: 18
        }
      }
    })) != null ? stack1 : "") + '     </tbody>\n     <tfoot>\n     </tfoot>\n   </table>\n </div>\n\n <script type="text/javascript">\n     checkForImageUpdates();\n <\/script>\n'
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
    return '<nav class="navbar navbar-expand-lg sticky-top bg-brand" style="background-color: #6f42c1 !important;color: white !important;">\n  <div class="container-fluid">\n    <a class="navbar-brand" href="/admin/index"><img width="38px" height=38px" src="/assets/img/logo.png" />&nbsp; DiscovrNinja!</a>\n\n    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">\n      <span class="navbar-toggler-icon"></span>\n    </button>\n    <div class="collapse navbar-collapse" id="navbarNavDropdown">\n      <ul class="navbar-nav">\n        <li class="nav-item">\n          <a class="nav-link active" aria-current="page" href="/admin/index"><i class="fa-solid fa-house"></i> Home</a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="/"><i class="fa-solid fa-desktop"></i> Desktop</a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="/admin/catalog"><i class="fa-solid fa-book"></i> Catalog</a>\n        </li>\n        <li class="nav-item">\n          <a class="nav-link" href="/admin/system"><i class="fa-brands fa-docker"></i> System</a>\n        </li>\n        <li class="nav-item dropdown">\n          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">\n            <i class="fa-solid fa-screwdriver-wrench"></i> Tools\n          </a>\n          <ul class="dropdown-menu">\n            <li>\n              <hr class="dropdown-divider">\n            </li>\n            <li><a class="dropdown-item" href="#" onclick="composerise(); return false;"><i class="fa-solid fa-box"></i> Composerise</a></li>\n            <li><a class="dropdown-item" href="/admin/storage"><i class="fa-solid fa-floppy-disk"></i> Volumes</a></li>\n            <li><a class="dropdown-item" href="/admin/network"><i class="fa-solid fa-network-wired"></i> Networks</a></li>\n          </ul>\n        </li>\n        <li class="nav-item">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "themechooser"), depth0, {
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
this["app"]["templates"]["headerwide"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '<nav class="navbar navbar-expand-lg sticky-top bg-brand" style="background-color: #6f42c1 !important;color: white !important;">\n  <div class="container-fluid">\n    <a class="navbar-brand" href="/admin/index"><img width="38px" height=38px" src="/assets/img/logo.png" />&nbsp; DiscovrNinja!</a>\n\n    <ul class="nav nav-pills nav-right">\n      <li class="nav-item">\n        <a class="btn nav-link toolbar-item" aria-current="page" href="/admin/index"><i class="fa-solid fa-house"></i></a>\n      </li>\n      <li class="nav-item">\n        <a class="btn nav-link toolbar-item" href="/"><i class="fa-solid fa-desktop"></i></a>\n      </li>\n      <li class="nav-item">\n        <a class="btn nav-link toolbar-item" href="/admin/catalog"><i class="fa-solid fa-book"></i></a>\n      </li>\n      <li class="nav-item">\n        <a class="btn nav-link toolbar-item" href="#" onclick="composerise(); return false;"><i class="fa-solid fa-box"></i></a>\n      </li>\n      <li class="nav-item">\n        <a class="btn nav-link toolbar-item" href="/admin/storage"><i class="fa-solid fa-floppy-disk"></i></i></a>\n      </li>\n      <li class="nav-item">\n        <a class="btn nav-link toolbar-item" href="/admin/network"><i class="fa-solid fa-network-wired"></i></a>\n      </li>\n      <li class="nav-iten">\n        <a class="btn nav-link toolbar-item" href="/admin/system"><i class="fa-brands fa-docker"></i></a>\n      </li>\n      <li class="nav-item">\n        <a class="btn nav-link toolbar-item" href="/auth/logout"><i class="fa-solid fa-power-off"></i></a>\n      </li>\n      <li class="nav-item">\n' + ((stack1 = container.invokePartial(lookupProperty(partials, "themechooser"), depth0, {
      name: "themechooser",
      data: data,
      indent: "        ",
      helpers: helpers,
      partials: partials,
      decorators: container.decorators
    })) != null ? stack1 : "") + "      </li>\n    </ul>\n  </div>\n</nav>\n"
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
this["app"]["templates"]["modalanalogclock"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return " - " + container.escapeExpression((helper = (helper = lookupProperty(helpers, "tz") || (depth0 != null ? lookupProperty(depth0, "tz") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      name: "tz",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 5,
          column: 109
        },
        end: {
          line: 5,
          column: 115
        }
      }
    }) : helper))
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
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
    return '<div class="modal fade" style="z-index:6000 !important;" id="analogClockModal' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "id",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 1,
          column: 77
        },
        end: {
          line: 1,
          column: 83
        }
      }
    }) : helper)) + '" tabindex="-1" aria-labelledby="analogClockModalLabel' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "id",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 1,
          column: 137
        },
        end: {
          line: 1,
          column: 143
        }
      }
    }) : helper)) + '" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">\n  <div class="modal-dialog modal-fullscreen">\n    <div class="modal-content" style="opacity:1 !important;z-index:6000 !important;">\n      <div class="modal-header">\n        <h1 class="modal-title fs-5" id="analogClockModalLabel{id}}">Current time ' + ((stack1 = (lookupProperty(helpers, "when") || depth0 && lookupProperty(depth0, "when") || alias2).call(alias1, depth0 != null ? lookupProperty(depth0, "tz") : depth0, "noteq", "", {
      name: "when",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 5,
          column: 82
        },
        end: {
          line: 5,
          column: 124
        }
      }
    })) != null ? stack1 : "") + '</h1>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body">\n        <object style="width:90%;height:90%;pointer-event:none" data="/assets/img/clock.svg" type="image/svg+xml">\n          <param name="tz" value="' + alias4((helper = (helper = lookupProperty(helpers, "tz") || (depth0 != null ? lookupProperty(depth0, "tz") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "tz",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 10,
          column: 34
        },
        end: {
          line: 10,
          column: 40
        }
      }
    }) : helper)) + '" />\n        </object>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'
  },
  useData: true
});
this["app"]["templates"]["modaldigitalclock"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return " - " + container.escapeExpression((helper = (helper = lookupProperty(helpers, "tz") || (depth0 != null ? lookupProperty(depth0, "tz") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      name: "tz",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 5,
          column: 110
        },
        end: {
          line: 5,
          column: 116
        }
      }
    }) : helper))
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
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
    return '<div class="modal fade" style="z-index:6000 !important;" id="digitalClockModal' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "id",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 1,
          column: 78
        },
        end: {
          line: 1,
          column: 84
        }
      }
    }) : helper)) + '" tabindex="-1" aria-labelledby="digitalClockModalLabel' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "id",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 1,
          column: 139
        },
        end: {
          line: 1,
          column: 145
        }
      }
    }) : helper)) + '" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">\n  <div class="modal-dialog modal-fullscreen">\n    <div class="modal-content" style="opacity:1 !important;z-index:6000 !important;">\n      <div class="modal-header">\n        <h1 class="modal-title fs-5" id="digitalClockModalLabel{id}}">Current time ' + ((stack1 = (lookupProperty(helpers, "when") || depth0 && lookupProperty(depth0, "when") || alias2).call(alias1, depth0 != null ? lookupProperty(depth0, "tz") : depth0, "noteq", "", {
      name: "when",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 5,
          column: 83
        },
        end: {
          line: 5,
          column: 125
        }
      }
    })) != null ? stack1 : "") + '</h1>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n      </div>\n      <div class="modal-body">\n        <center>\n          <object style="background:transparent;pointer-events:none;width:90%;height:90%" data="/assets/img/digitalclock.svg" type="image/svg+xml">\n            <param name="tz" value="' + alias4((helper = (helper = lookupProperty(helpers, "tz") || (depth0 != null ? lookupProperty(depth0, "tz") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "tz",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 11,
          column: 36
        },
        end: {
          line: 11,
          column: 42
        }
      }
    }) : helper)) + '" />\n          </object>\n        </center>\n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n'
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
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return (stack1 = (lookupProperty(helpers, "when") || depth0 && lookupProperty(depth0, "when") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, data && lookupProperty(data, "key"), "eq", "_s", {
      name: "when",
      hash: {},
      fn: container.program(2, data, 0, blockParams, depths),
      inverse: container.program(4, data, 0, blockParams, depths),
      data: data,
      loc: {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 61,
          column: 13
        }
      }
    })) != null ? stack1 : ""
  },
  2: function(container, depth0, helpers, partials, data) {
    return ""
  },
  4: function(container, depth0, helpers, partials, data, blockParams, depths) {
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
      inverse: container.program(5, data, 0, blockParams, depths),
      data: data,
      loc: {
        start: {
          line: 7,
          column: 39
        },
        end: {
          line: 7,
          column: 78
        }
      }
    })) != null ? stack1 : "") + '" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-' + alias4((helper = (helper = lookupProperty(helpers, "index") || data && lookupProperty(data, "index")) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "index",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 7,
          column: 146
        },
        end: {
          line: 7,
          column: 156
        }
      }
    }) : helper)) + '" aria-expanded="true" aria-controls="collapse-' + alias4((helper = (helper = lookupProperty(helpers, "index") || data && lookupProperty(data, "index")) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "index",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 7,
          column: 203
        },
        end: {
          line: 7,
          column: 213
        }
      }
    }) : helper)) + '">\n          ' + alias4((helper = (helper = lookupProperty(helpers, "key") || data && lookupProperty(data, "key")) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "key",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 8,
          column: 10
        },
        end: {
          line: 8,
          column: 18
        }
      }
    }) : helper)) + '\n        </button>\n      </h2>\n      <div id="collapse-' + alias4((helper = (helper = lookupProperty(helpers, "index") || data && lookupProperty(data, "index")) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "index",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 11,
          column: 24
        },
        end: {
          line: 11,
          column: 34
        }
      }
    }) : helper)) + '" class="accordion-collapse collapse' + ((stack1 = lookupProperty(helpers, "if").call(alias1, data && lookupProperty(data, "first"), {
      name: "if",
      hash: {},
      fn: container.program(7, data, 0, blockParams, depths),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 11,
          column: 70
        },
        end: {
          line: 11,
          column: 96
        }
      }
    })) != null ? stack1 : "") + '" data-bs-parent="#projects">\n        <div class="accordion-body">\n          <div class="container text-left">\n            <div class="row justify-content-md-left">\n              <div class="col col-lg-2">\n                <img style="max-width:128px;" src="' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "iconSlug") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(9, data, 0, blockParams, depths),
      inverse: container.program(11, data, 0, blockParams, depths),
      data: data,
      loc: {
        start: {
          line: 16,
          column: 51
        },
        end: {
          line: 16,
          column: 151
        }
      }
    })) != null ? stack1 : "") + '" />\n              </div>\n              <div class="col-md-auto">\n                <table class="table table-bordered">\n                  <tbody>\n                    <tr>\n                      <td>Compose file:</td>\n                      <td>' + alias4((helper = (helper = lookupProperty(helpers, "config") || (depth0 != null ? lookupProperty(depth0, "config") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "config",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 23,
          column: 26
        },
        end: {
          line: 23,
          column: 36
        }
      }
    }) : helper)) + "</td>\n                    </tr>\n                    <tr>\n                      <td>Environment file:</td>\n                      <td>" + alias4((helper = (helper = lookupProperty(helpers, "environment") || (depth0 != null ? lookupProperty(depth0, "environment") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "environment",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 27,
          column: 26
        },
        end: {
          line: 27,
          column: 41
        }
      }
    }) : helper)) + "</td>\n                    </tr>\n                    <tr>\n                      <td>Project Folder :</td>\n                      <td>" + alias4((helper = (helper = lookupProperty(helpers, "workingFolder") || (depth0 != null ? lookupProperty(depth0, "workingFolder") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "workingFolder",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 31,
          column: 26
        },
        end: {
          line: 31,
          column: 43
        }
      }
    }) : helper)) + '</td>\n                    </tr>\n                  </tbody>\n                </table>\n\n                <table class="table">\n                  <thead>\n                    <tr>\n                      <th>Container Name</th>\n                      <th>Hostname</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n' + ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0 != null ? lookupProperty(depth0, "containers") : depth0, {
      name: "each",
      hash: {},
      fn: container.program(13, data, 0, blockParams, depths),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 44,
          column: 20
        },
        end: {
          line: 52,
          column: 29
        }
      }
    })) != null ? stack1 : "") + "                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n"
  },
  5: function(container, depth0, helpers, partials, data) {
    return " collapsed"
  },
  7: function(container, depth0, helpers, partials, data) {
    return " show"
  },
  9: function(container, depth0, helpers, partials, data) {
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
    return "/api/icons/r/" + alias4((helper = (helper = lookupProperty(helpers, "iconCatalog") || (depth0 != null ? lookupProperty(depth0, "iconCatalog") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "iconCatalog",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 16,
          column: 80
        },
        end: {
          line: 16,
          column: 95
        }
      }
    }) : helper)) + "/" + alias4((helper = (helper = lookupProperty(helpers, "iconSlug") || (depth0 != null ? lookupProperty(depth0, "iconSlug") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "iconSlug",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 16,
          column: 96
        },
        end: {
          line: 16,
          column: 108
        }
      }
    }) : helper)) + "/resource"
  },
  11: function(container, depth0, helpers, partials, data) {
    return "/api/icons/question"
  },
  13: function(container, depth0, helpers, partials, data, blockParams, depths) {
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
      fn: container.program(14, data, 0, blockParams, depths),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 46,
          column: 24
        },
        end: {
          line: 48,
          column: 31
        }
      }
    })) != null ? stack1 : "") + "                        <td>" + alias4((helper = (helper = lookupProperty(helpers, "containerName") || (depth0 != null ? lookupProperty(depth0, "containerName") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "containerName",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 49,
          column: 28
        },
        end: {
          line: 49,
          column: 45
        }
      }
    }) : helper)) + "</td>\n                        <td>" + alias4((helper = (helper = lookupProperty(helpers, "hostname") || (depth0 != null ? lookupProperty(depth0, "hostname") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "hostname",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 50,
          column: 28
        },
        end: {
          line: 50,
          column: 40
        }
      }
    }) : helper)) + "</td>\n                      </tr>\n"
  },
  14: function(container, depth0, helpers, partials, data, blockParams, depths) {
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
    return '                          <td><button onclick="composeEdit(this, 2); return false;" data-containerid="' + alias4((helper = (helper = lookupProperty(helpers, "containerName") || (depth0 != null ? lookupProperty(depth0, "containerName") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "containerName",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 47,
          column: 102
        },
        end: {
          line: 47,
          column: 119
        }
      }
    }) : helper)) + '" data-projectpath="' + alias4(container.lambda(depths[1] != null ? lookupProperty(depths[1], "projectPath") : depths[1], depth0)) + '" data-project="' + alias4((helper = (helper = lookupProperty(helpers, "projectName") || (depth0 != null ? lookupProperty(depth0, "projectName") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
      name: "projectName",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 47,
          column: 173
        },
        end: {
          line: 47,
          column: 188
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
          line: 62,
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
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return (stack1 = lookupProperty(helpers, "if").call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? lookupProperty(depth0, "service") : depth0) != null ? lookupProperty(stack1, "available") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(2, data, 0),
      inverse: container.program(4, data, 0),
      data: data,
      loc: {
        start: {
          line: 1,
          column: 32
        },
        end: {
          line: 1,
          column: 80
        }
      }
    })) != null ? stack1 : ""
  },
  2: function(container, depth0, helpers, partials, data) {
    return ""
  },
  4: function(container, depth0, helpers, partials, data) {
    return "disabled"
  },
  6: function(container, depth0, helpers, partials, data) {
    return "btn-secondary"
  },
  8: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "buttonclass") : stack1, depth0))
  },
  10: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "opacity:" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "opacity") : stack1, depth0)) + " !important;"
  },
  12: function(container, depth0, helpers, partials, data) {
    return "/api/icons/question"
  },
  14: function(container, depth0, helpers, partials, data) {
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
    return "<button " + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "service") : depth0) != null ? lookupProperty(stack1, "monitor") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 1,
          column: 8
        },
        end: {
          line: 1,
          column: 87
        }
      }
    })) != null ? stack1 : "") + ' data-name="' + alias3(alias2((stack1 = depth0 != null ? lookupProperty(depth0, "service") : depth0) != null ? lookupProperty(stack1, "containerName") : stack1, depth0)) + '" data-url="' + alias3(alias2((stack1 = depth0 != null ? lookupProperty(depth0, "service") : depth0) != null ? lookupProperty(stack1, "public") : stack1, depth0)) + '" onclick="navigateTo(this); return false;" type="button" class="btn ' + ((stack1 = (lookupProperty(helpers, "isempty") || depth0 && lookupProperty(depth0, "isempty") || alias4).call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "buttonclass") : stack1, {
      name: "isempty",
      hash: {},
      fn: container.program(6, data, 0),
      inverse: container.program(8, data, 0),
      data: data,
      loc: {
        start: {
          line: 1,
          column: 223
        },
        end: {
          line: 1,
          column: 310
        }
      }
    })) != null ? stack1 : "") + ' widget" style="' + ((stack1 = (lookupProperty(helpers, "isnotempty") || depth0 && lookupProperty(depth0, "isnotempty") || alias4).call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "opacity") : stack1, {
      name: "isnotempty",
      hash: {},
      fn: container.program(10, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 1,
          column: 326
        },
        end: {
          line: 1,
          column: 409
        }
      }
    })) != null ? stack1 : "") + '">\n  <img style="padding:10px;max-width:64px;max-height:64px" src="' + ((stack1 = (lookupProperty(helpers, "isempty") || depth0 && lookupProperty(depth0, "isempty") || alias4).call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "service") : depth0) != null ? lookupProperty(stack1, "iconSlug") : stack1, {
      name: "isempty",
      hash: {},
      fn: container.program(12, data, 0),
      inverse: container.program(14, data, 0),
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
this["app"]["templates"]["subtitle"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression((helper = (helper = lookupProperty(helpers, "color") || (depth0 != null ? lookupProperty(depth0, "color") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      name: "color",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 1,
          column: 28
        },
        end: {
          line: 1,
          column: 37
        }
      }
    }) : helper))
  },
  3: function(container, depth0, helpers, partials, data) {
    return "primary"
  },
  5: function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '&nbsp<i class="' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "icon") || (depth0 != null ? lookupProperty(depth0, "icon") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      name: "icon",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 3,
          column: 32
        },
        end: {
          line: 3,
          column: 40
        }
      }
    }) : helper)) + '"></i>'
  },
  7: function(container, depth0, helpers, partials, data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return container.escapeExpression((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
      name: "title",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 4,
          column: 26
        },
        end: {
          line: 4,
          column: 35
        }
      }
    }) : helper)) + "\n        "
  },
  9: function(container, depth0, helpers, partials, data) {
    return container.escapeExpression(container.lambda(depth0, depth0))
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
    return '<div class="bg-' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "color") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.program(3, data, 0),
      data: data,
      loc: {
        start: {
          line: 1,
          column: 15
        },
        end: {
          line: 1,
          column: 59
        }
      }
    })) != null ? stack1 : "") + ' bg-gradient mb-2 rounded text-light">\n  <p class="fs-4" style="margin-top;5px">\n    ' + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "icon") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(5, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 53
        }
      }
    })) != null ? stack1 : "") + "\n      &nbsp;" + ((stack1 = lookupProperty(helpers, "if").call(alias1, depth0 != null ? lookupProperty(depth0, "title") : depth0, {
      name: "if",
      hash: {},
      fn: container.program(7, data, 0),
      inverse: container.program(9, data, 0),
      data: data,
      loc: {
        start: {
          line: 4,
          column: 12
        },
        end: {
          line: 5,
          column: 31
        }
      }
    })) != null ? stack1 : "") + "\n  </p>\n</div>\n"
  },
  useData: true
});
this["app"]["templates"]["tagcloud"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data, blockParams, depths) {
    var helper, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      alias3 = depth0 != null ? depth0 : container.nullContext || {},
      alias4 = container.hooks.helperMissing,
      alias5 = "function",
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '    <li><a data-weight="' + alias2(alias1(depth0, depth0)) + '" onclick="document.getElementById(\'' + alias2(alias1(depths[1] != null ? lookupProperty(depths[1], "Id") : depths[1], depth0)) + "').tagfunc('" + alias2((helper = (helper = lookupProperty(helpers, "key") || data && lookupProperty(data, "key")) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
      name: "key",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 3,
          column: 89
        },
        end: {
          line: 3,
          column: 97
        }
      }
    }) : helper)) + "');\">" + alias2((helper = (helper = lookupProperty(helpers, "key") || data && lookupProperty(data, "key")) != null ? helper : alias4, typeof helper === alias5 ? helper.call(alias3, {
      name: "key",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 3,
          column: 102
        },
        end: {
          line: 3,
          column: 110
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
  1: function(container, depth0, helpers, partials, data) {
    return "Theme"
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '<div class="dropdown" data-hb-component="themechooser">\n  <button style="height:33px !important;" class="btn dropdown-toggle" style="color:white!important" type="button" data-bs-toggle="dropdown" aria-expanded="false">\n    <i style="color:white!important" id="activeTheme" class="bi bi-circle-half"></i>\n    ' + ((stack1 = (lookupProperty(helpers, "when") || depth0 && lookupProperty(depth0, "when") || container.hooks.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? lookupProperty(depth0, "size") : depth0) != null ? lookupProperty(stack1, "screen") : stack1) != null ? lookupProperty(stack1, "w") : stack1, "lt", 768, {
      name: "when",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 51
        }
      }
    })) != null ? stack1 : "") + '\n  </button>\n  <ul class="dropdown-menu dropdown-menu-end">\n    <li><button type="button" class="dropdown-item d-flex align-items-center" aria-pressed="false" onclick="ui().themeChooser().chooseTheme(\'light\');">\n        <i id="light" class="bi bi-sun"></i> Light</button>\n    </li>\n    <li> <button type="button" class="dropdown-item d-flex align-items-center" aria-pressed="false" onclick="ui().themeChooser().chooseTheme(\'dark\');">\n        <i id="dark" class="bi bi-moon-stars"></i> Dark</button>\n    </li>\n    <li><button type="button" class="dropdown-item d-flex align-items-center" aria-pressed="false" onclick="ui().themeChooser().chooseTheme(\'auto\')">\n        <i id="auto" class="bi bi-circle-half"></i> Auto</button>\n    </li>\n  </ul>\n</div>\n'
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
this["app"]["templates"]["widget-audio"] = Handlebars.template({
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '<audio loop="true" autoplay="true" controls src="' + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "url") : stack1, depth0)) + '"></audio>\n'
  },
  useData: true
});
this["app"]["templates"]["widget-clock"] = Handlebars.template({
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
    return '<script type="text/javascript">\n  var clockModal = document.getElementById("analogClockModal' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "id") : stack1, depth0)) + '");\n  if (clockModal) {} else {\n    var clockModal = app.templates.modalanalogclock({\n      tz: "' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "tz") : stack1, depth0)) + '",\n      id: "' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "id") : stack1, depth0)) + '"\n    });\n    $(document.body).append(clockModal);\n  }\n\n<\/script>\n<button class="btn ' + ((stack1 = (lookupProperty(helpers, "isempty") || depth0 && lookupProperty(depth0, "isempty") || alias4).call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "buttonclass") : stack1, {
      name: "isempty",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.program(3, data, 0),
      data: data,
      loc: {
        start: {
          line: 12,
          column: 19
        },
        end: {
          line: 12,
          column: 106
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
          line: 12,
          column: 122
        },
        end: {
          line: 12,
          column: 205
        }
      }
    })) != null ? stack1 : "") + '" data-bs-toggle="modal" data-bs-target="#analogClockModal' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "id") : stack1, depth0)) + '">\n\n  <object style="background:transparent;pointer-events:none;width:90px;height:90px;" data="/assets/img/clock.svg" type="image/svg+xml">\n    <param name="tz" value="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "tz") : stack1, depth0)) + '" />\n  </object>\n\n</button>\n'
  },
  useData: true
});
this["app"]["templates"]["widget-digitalclock"] = Handlebars.template({
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
    return '<script type="text/javascript">\n  var digitalClockModal = document.getElementById("digitalClockModal' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "id") : stack1, depth0)) + '");\n  if (digitalClockModal) {} else {\n    var digitalClockModal = app.templates.modaldigitalclock({\n      tz: "' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "tz") : stack1, depth0)) + '",\n      id: "' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "id") : stack1, depth0)) + '"\n    });\n    $(document.body).append(digitalClockModal);\n  }\n\n<\/script>\n<button style="background: rgb(159, 191 , 135) !important;" class="btn ' + ((stack1 = (lookupProperty(helpers, "isempty") || depth0 && lookupProperty(depth0, "isempty") || alias4).call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "parent") : depth0) != null ? lookupProperty(stack1, "buttonclass") : stack1, {
      name: "isempty",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.program(3, data, 0),
      data: data,
      loc: {
        start: {
          line: 12,
          column: 71
        },
        end: {
          line: 12,
          column: 158
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
          line: 12,
          column: 174
        },
        end: {
          line: 12,
          column: 257
        }
      }
    })) != null ? stack1 : "") + '" data-bs-toggle="modal" data-bs-target="#digitalClockModal' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "id") : stack1, depth0)) + '">\n  <div class="digitalclock">\n    <object style="background:transparent;pointer-events:none;width:260px;height:80px" data="/assets/img/digitalclock.svg" type="image/svg+xml">\n      <param name="tz" value="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "tz") : stack1, depth0)) + '" />\n    </object>\n  </div>\n</button>\n'
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
this["app"]["templates"]["widget-frame"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "width:" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "width") : stack1, depth0)) + ";"
  },
  3: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "height:" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "height") : stack1, depth0)) + ";"
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
    return '<iframe src="' + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "url") : stack1, depth0)) + '" frameBorder="0" style="border:none;' + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "width") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 1,
          column: 66
        },
        end: {
          line: 1,
          column: 120
        }
      }
    })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "height") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(3, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 1,
          column: 120
        },
        end: {
          line: 1,
          column: 177
        }
      }
    })) != null ? stack1 : "") + '">\n</iframe>\n'
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
    })) != null ? stack1 : "") + '">\n  <img class="widgetglobe" border="0" src="/api/desktop/background/globe?h=' + ((stack1 = lookupProperty(helpers, "if").call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "size") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(11, data, 0),
      inverse: container.program(13, data, 0),
      data: data,
      loc: {
        start: {
          line: 2,
          column: 75
        },
        end: {
          line: 2,
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
          line: 2,
          column: 131
        },
        end: {
          line: 2,
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
          line: 2,
          column: 189
        },
        end: {
          line: 2,
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
          line: 2,
          column: 250
        },
        end: {
          line: 2,
          column: 293
        }
      }
    })) != null ? stack1 : "") + '" />\n</button>\n'
  },
  useData: true
});
this["app"]["templates"]["widget-image"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "width:" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "width") : stack1, depth0)) + ";"
  },
  3: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "height:" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "height") : stack1, depth0)) + ";"
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
    return '<img èsrc="' + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "url") : stack1, depth0)) + '" frameBorder="0" style="border:none;' + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "width") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 1,
          column: 64
        },
        end: {
          line: 1,
          column: 118
        }
      }
    })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "height") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(3, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 1,
          column: 118
        },
        end: {
          line: 1,
          column: 175
        }
      }
    })) != null ? stack1 : "") + '">\n</img>\n'
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
    return '<div class="container" id="tags"></div>\n<script type="text/javascript">\n  tagCloud("tags", function (tag) {\n    viewBookmarks(tag);\n    return false;\n  });\n\n<\/script>\n'
  },
  useData: true
});
this["app"]["templates"]["widget-tv"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "width:" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "width") : stack1, depth0)) + ";"
  },
  3: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "height:" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "height") : stack1, depth0)) + ";"
  },
  5: function(container, depth0, helpers, partials, data) {
    return ""
  },
  7: function(container, depth0, helpers, partials, data) {
    return 'class="mw-100" '
  },
  compiler: [8, ">= 4.3.0"],
  main: function(container, depth0, helpers, partials, data) {
    var stack1, alias1 = container.lambda,
      alias2 = container.escapeExpression,
      alias3 = depth0 != null ? depth0 : container.nullContext || {},
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName]
        }
        return undefined
      };
    return '<div id="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "id") : stack1, depth0)) + '">\n  <select class="form-select" onchange="changeVideo(this);" data-id="' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "id") : stack1, depth0)) + '" id="ch_' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "id") : stack1, depth0)) + '"></select>\n  <div id="vid_' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "id") : stack1, depth0)) + '" style="' + ((stack1 = lookupProperty(helpers, "if").call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "width") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 3,
          column: 39
        },
        end: {
          line: 3,
          column: 93
        }
      }
    })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "height") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(3, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 3,
          column: 93
        },
        end: {
          line: 3,
          column: 150
        }
      }
    })) != null ? stack1 : "") + '" ' + ((stack1 = lookupProperty(helpers, "if").call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "width") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(5, data, 0),
      inverse: container.program(7, data, 0),
      data: data,
      loc: {
        start: {
          line: 3,
          column: 152
        },
        end: {
          line: 3,
          column: 205
        }
      }
    })) != null ? stack1 : "") + '>\n  </div>\n  <script type="text/javascript">\n    var ch = document.getElementById("ch_' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "id") : stack1, depth0)) + '");\n    var vid = document.getElementById("vid_' + alias2(alias1((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "id") : stack1, depth0)) + '");\n    var pl = ' + alias2((lookupProperty(helpers, "stringify") || depth0 && lookupProperty(depth0, "stringify") || container.hooks.helperMissing).call(alias3, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "playlist") : stack1, {
      name: "stringify",
      hash: {},
      data: data,
      loc: {
        start: {
          line: 8,
          column: 13
        },
        end: {
          line: 8,
          column: 44
        }
      }
    })) + "\n    loadPlaylist(pl, ch, vid, function () {});\n\n  <\/script>\n</div>\n"
  },
  useData: true
});
this["app"]["templates"]["widget-video"] = Handlebars.template({
  1: function(container, depth0, helpers, partials, data) {
    return "autoplay muted"
  },
  3: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "width:" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "width") : stack1, depth0)) + ";"
  },
  5: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return "height:" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "height") : stack1, depth0)) + ";"
  },
  7: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '\n    <source src="' + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "dashvideo") : stack1, depth0)) + '" type="application/dash+xml" />\n'
  },
  9: function(container, depth0, helpers, partials, data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return parent[propertyName]
      }
      return undefined
    };
    return '    <source src="' + container.escapeExpression(container.lambda((stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "mp4video") : stack1, depth0)) + '" type="video/mp4" />\n'
  },
  11: function(container, depth0, helpers, partials, data) {
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
    return "<video " + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "autoplay") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(1, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 1,
          column: 7
        },
        end: {
          line: 1,
          column: 53
        }
      }
    })) != null ? stack1 : "") + ' preload="auto" controls id="video" style="' + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "width") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(3, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 1,
          column: 96
        },
        end: {
          line: 1,
          column: 150
        }
      }
    })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "height") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(5, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 1,
          column: 150
        },
        end: {
          line: 1,
          column: 207
        }
      }
    })) != null ? stack1 : "") + '">\n  i' + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "dashvideo") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(7, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 2,
          column: 3
        },
        end: {
          line: 4,
          column: 9
        }
      }
    })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "mp4video") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(9, data, 0),
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
    })) != null ? stack1 : "") + ((stack1 = lookupProperty(helpers, "if").call(alias1, (stack1 = depth0 != null ? lookupProperty(depth0, "settings") : depth0) != null ? lookupProperty(stack1, "webmvideo") : stack1, {
      name: "if",
      hash: {},
      fn: container.program(11, data, 0),
      inverse: container.noop,
      data: data,
      loc: {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 10,
          column: 9
        }
      }
    })) != null ? stack1 : "") + "</video>\n"
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
      $(template).find(".datatable").DataTable({
        paging: false,
        searching: false,
        stateSave: true
      });
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
        },
        breakpoint: "x-small"
      };
      if (!window.screen) {
        desktop.screen.w = 1500;
        desktop.screen.h = 800
      }
      if (desktop.window.w >= 576) {
        desktop.breakpoint = "small"
      }
      if (desktop.window.w >= 768) {
        desktop.breakpoint = "medium"
      }
      if (desktop.window.w >= 992) {
        desktop.breakpoint = "large"
      }
      if (desktop.window.w >= 1200) {
        desktop.breakpoint = "x-large"
      }
      if (desktop.window.w >= 1400) {
        desktop.breakpoint = "xx-large"
      }
      var date = new Date;
      date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1e3);
      expires = "; expires=" + date.toUTCString();
      document.cookie = "desktop=" + JSON.stringify(desktop) + expires + "; path=/";
      return desktop
    },
    toggleWait: function(args) {
      targets.forEach(ctl => {
        $(ctl).find(".wait").toggleClass("wait-show")
      })
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
window.ui().desktop();
setInterval(function() {
  window.ui().desktop()
}, 1e3);

function checkForImageUpdates() {
  const checkImage = obj => {
    var image = $(obj).attr("data-imageid");
    var container = $(obj).attr("data-containerid");
    var project = $(obj).attr("data=project");
    var apiUrl = "/api/docker/image/update/check?ref=" + encodeURIComponent(image);
    console.log(image);
    if (image != "") {
      $(obj).html('<i class="fa-solid fa-hourglass-half"></i>');
      axios.get(apiUrl).then(response => {
        var result = response.data;
        if (result.updateAvailable) {
          $(obj).html('<i title="Update available" class="text-warning fa-solid fa-download"></i>')
        } else {
          $(obj).html('<i title="Up-to-date" class="text-success fa-regular fa-circle-check"></i>')
        }
      }).catch(err => {
        $(obj).html('<i title="Update state unknown" class="text-danger-emphasis fa-regular fa-circle-question"></i>')
      })
    }
  };
  $(".updatecheck").each((i, obj) => {
    checkImage(obj)
  })
}

function loadPlaylist(url, ch, vid, cb) {
  var apiUrl = "/api/resources/playlist";
  axios.post(apiUrl, {
    playlist: url
  }).then(response => {
    var pl = response.data;
    $(ch).empty();
    for (a in ch.options) {
      ch.options.remove(0)
    }
    ch.add(new Option("", ""));
    pl.forEach(item => {
      const option = new Option(item.title, item.url);
      ch.add(option)
    });
    ch.selectedIndex = 0;
    cb(pl)
  }).catch(err => {
    if (console) {
      console.log("ERROR ", err)
    }
  })
}

function changeVideo(sender) {
  var id = sender.getAttribute("data-id");
  var ch = document.getElementById("ch_" + id);
  var vid = document.getElementById("vid_" + id);
  if (ch.value != "") {
    var html = '<video preload="auto" class="mw-100" controls="controls" autoplay="autoplay"><source src="' + ch.value + '" type="video/mp4"></video>';
    $(vid).html(html)
  }
}

function saveVolume() {
  var id = document.getElementById("volumeid").value;
  const updateValues = vol => {
    vol.Id = document.getElementById("volumeid").value;
    vol.Name = document.getElementById("name").value;
    vol.Driver = document.getElementById("driver").value;
    vol.CustomMountpoint = "";
    vol.CreatedAt = new Date;
    if (document.getElementById("mountPoint").value == "custom") {
      vol.CustomMountpoint = document.getElementById("customMountPoint").value
    }
    vol.Options = {};
    var i = 0;
    while (document.getElementById("optionname_" + i)) {
      var key = document.getElementById("optionname_" + i).value;
      var value = document.getElementById("optionvalue_" + i).value;
      vol.Options[key] = value;
      i = i + 1
    }
    if (!vol.Labels) {
      vol.Labels = {}
    }
    delete vol.Labels["discovrninja_excludebackup"];
    delete vol.Labels["noprune"];
    if (document.getElementById("excludebackup").checked) {
      vol.Labels["discovrninja_excludebackup"] = "true"
    }
    if (document.getElementById("noprune").checked) {
      vol.Labels["noprune"] = "true"
    }
    return vol
  };
  var apiUrl = "/api/docker/storage/" + encodeURIComponent(id);
  var vol = {};
  if (id == "") {
    vol = updateValues(vol);
    vol.Id = vol.Name;
    id = vol.Id;
    document.getElementById("volumeid").value = vol.Id;
    apiUrl = "/api/docker/storage/update";
    axios.post(apiUrl, vol).then(saveResponse => {
      showVolumeScript(id, true)
    }).catch(err => {
      if (console) {
        console.log("ERROR ", err)
      }
    })
  } else {
    axios.get(apiUrl).then(response => {
      vol = response.data;
      vol = updateValues(vol);
      apiUrl = "/api/docker/storage/update";
      axios.post(apiUrl, vol).then(saveResponse => {
        showVolumeScript(id, true)
      }).catch(err => {
        if (console) {
          console.log("ERROR ", err)
        }
      })
    }).catch(err => {
      if (console) {
        console.log("ERROR ", err)
      }
    })
  }
}

function showVolumeScript(id, preferdb) {
  var apiUrl = "/api/docker/storage/volume/" + encodeURIComponent(id) + "/script?preferdb=false";
  if (preferdb) {
    apiUrl = "/api/docker/storage/volume/" + encodeURIComponent(id) + "/script?preferdb=true"
  }
  axios.get(apiUrl).then(response => {
    var scr = response.data;
    document.getElementById("script").innerHTML = "# Delete old  Volume \n" + (scr.delete ?? []).join("\n") + "\n\n# Create new Volume\n" + (scr.create ?? []).join(" \\\n");
    const myModal = new bootstrap.Modal(document.getElementById("scriptModal"), {});
    myModal.show()
  }).catch(err => {
    if (console) {
      console.log("ERROR ", err)
    }
  })
}

function getVolumeScript(preferDb, cbFunc, errFunc) {
  var id = document.getElementById("volumeid").value;
  if (id == "") {
    id = document.getElementById("name").value
  }
  var apiUrl = "/api/docker/storage/volume/" + encodeURIComponent(id) + "/script";
  if (preferDb) {
    apiUrl += "?preferdb=yes"
  }
  axios.get(apiUrl).then(response => {
    var scr = response.data;
    cbFunc(scr)
  }).catch(err => {
    errFunc(err)
  })
}

function getNetwork(id) {
  var apiUrl = "/api/docker/network/" + encodeURIComponent(id);
  axios.get(apiUrl).then(response => {
    var network = response.data;
    document.getElementById("driver").value = network.Driver;
    for (var i = 0; i < network.IPAM.Config.length; i++) {
      document.getElementById("ipsubnet" + i).value = network.IPAM.Config[i].Subnet ?? "";
      document.getElementById("iprange" + i).value = network.IPAM.Config[i].IPRange ?? "";
      document.getElementById("ipgateway" + i).value = network.IPAM.Config[i].Gateway ?? ""
    }
    document.getElementById("internal").checked = network.Internal;
    document.getElementById("enableipv6").checked = network.EnableIPv6;
    if (network.Labels["noprume"]) {
      document.getElementById("noprune").checked = net.Labels["noprune"] == "true"
    }
  }).catch(err => {
    if (console) {
      console.log("ERROR ", err)
    }
  })
}

function deleteNetwork(id) {
  var apiUrl = "/api/docker/network/" + encodeURIComponent(id) + "/delete";
  axios.get(apiUrl).then(response => {
    window.location.href = "/admin/network"
  }).catch(err => {
    if (console) {
      console.log("ERROR ", err)
    }
  })
}

function deleteVolume(id) {
  var apiUrl = "/api/docker/volume/" + encodeURIComponent(id) + "/delete";
  axios.get(apiUrl).then(response => {
    window.location.href = "/admin/storage"
  }).catch(err => {
    if (console) {
      console.log("ERROR ", err)
    }
  })
}

function showNetworkScript(id, preferdb) {
  var apiUrl = "/api/docker/network/" + encodeURIComponent(id) + "/script?preferdb=false";
  if (preferdb) {
    apiUrl = "/api/docker/network/" + encodeURIComponent(id) + "/script?preferdb=true"
  }
  axios.get(apiUrl).then(response => {
    var scr = response.data;
    document.getElementById("script").innerHTML = "# Detach containers\n" + (scr.detach ?? []).join("\n") + "\n\n# Delete old network \n" + (scr.delete ?? []).join("\n") + "\n\n# Create new network\n" + (scr.create ?? []).join(" \\\n") + "\n\n# Reattach containers\n" + (scr.attach ?? []).join("\n");
    const myModal = new bootstrap.Modal(document.getElementById("scriptModal"), {});
    myModal.show()
  }).catch(err => {
    if (console) {
      console.log("ERROR ", err)
    }
  })
}

function getNetworkScript(preferDb, cbFunc, errFunc) {
  var id = document.getElementById("networkid").value;
  if (id == "") {
    id = document.getElementById("name").value
  }
  var apiUrl = "/api/docker/network/" + encodeURIComponent(id) + "/script";
  if (preferDb) {
    apiUrl += "?preferdb=yes"
  }
  axios.get(apiUrl).then(response => {
    var scr = response.data;
    cbFunc(scr)
  }).catch(err => {
    errFunc(err)
  })
}

function saveNetwork() {
  var id = document.getElementById("networkid").value;
  const updateValues = net => {
    net.Id = document.getElementById("networkid").value;
    if (!net.Scope) {
      net.Scope = "local"
    }
    net.Name = document.getElementById("name").value;
    net.Driver = document.getElementById("driver").value;
    net.IPAM.Config = [];
    if (net.Attachable == null) {
      net.Attachable = false
    }
    if (net.Ingress == null) {
      net.Ingress = false
    }
    if (!net.IPAM.Driver) {
      net.IPAM.Driver = "default"
    }
    var i = 0;
    while (document.getElementById("ipsubnet" + i)) {
      var ipa = {
        Subnet: document.getElementById("ipsubnet" + i).value,
        IPRange: document.getElementById("iprange" + i).value,
        Gateway: document.getElementById("ipgateway" + i).value
      };
      net.IPAM.Config.push(ipa);
      i = i + 1
    }
    net.Internal = document.getElementById("internal").checked;
    net.EnableIPv6 = document.getElementById("enableipv6").checked;
    if (!net.Labels) {
      net.Labels = {}
    }
    delete net.Labels["noprune"];
    if (document.getElementById("noprune").checked) {
      net.Labels["noprune"] = "true"
    }
    return net
  };
  if (id != "") {
    var apiUrl = "/api/docker/network/" + encodeURIComponent(id);
    axios.get(apiUrl).then(response => {
      var network = response.data;
      network = updateValues(network);
      apiUrl = "/api/docker/network/update/" + encodeURIComponent(id);
      axios.post(apiUrl, network).then(saveResponse => {
        getNetworkScript(true, scr => {
          document.getElementById("script").innerHTML = "# Detach containers\n" + scr.detach.join("\n") + "\n\n# Delete old network \n" + scr.delete.join("\n") + "\n\n# Create new network\n" + scr.create.join(" \\\n") + "\n\n# Reattach containers\n" + scr.attach.join("\n");
          const myModal = new bootstrap.Modal(document.getElementById("scriptModal"), {});
          myModal.show()
        }, err => {
          if (console) {
            console.log("ERROR ", err)
          }
        })
      }).catch(err => {
        if (console) {
          console.log("ERROR ", err)
        }
      })
    }).catch(err => {
      if (console) {
        console.log("ERROR ", err)
      }
    })
  } else {
    var network = {
      IPAM: {
        Config: {}
      }
    };
    network = updateValues(network);
    var apiUrl = apiUrl = "/api/docker/network/create";
    axios.post(apiUrl, network).then(saveResponse => {
      getNetworkScript(true, scr => {
        document.getElementById("script").innerHTML = "# Detach containers\n" + scr.detach.join("\n") + "\n\n# Delete old network \n" + scr.delete.join("\n") + "\n\n# Create new network\n" + scr.create.join(" \\\n") + "\n\n# Reattach containers\n" + scr.attach.join("\n");
        const myModal = new bootstrap.Modal(document.getElementById("scriptModal"), {});
        myModal.show()
      }, err => {
        if (console) {
          console.log("ERROR ", err)
        }
      })
    }).catch(err => {
      if (console) {
        console.log("ERROR ", err)
      }
    })
  }
}

function deleteStack(container) {
  var apiUrl = "/api/docker/delete/" + encodeURIComponent(container);
  axios.get(apiUrl).then(response => {
    window.location.href = "/admin/index?tab=1"
  }).catch(err => {
    if (console) {
      console.log("ERROR ", err)
    }
  })
}

function toggleWait(ctl) {
  $(ctl).find(".wait").toggleClass("wait-show")
}

function runTask(name, btn) {
  toggleWait(btn);
  var apiUrl = "/api/task/" + encodeURIComponent(name);
  axios.get(apiUrl).then(response => {
    toggleWait(btn);
    ui().messageBox({
      label: "Task",
      body: "Task run was completed."
    })
  }).catch(err => {
    toggleWait(btn);
    if (console) {
      console.log("ERROR ", err)
    }
  })
}

function updateIconCache(btn) {
  toggleWait(btn);
  var apiUrl = "/api/icons/cdn/update";
  axios.get(apiUrl).then(response => {
    toggleWait(btn);
    ui().messageBox({
      label: "Icon Cache",
      body: "Icon Cache refresh complete."
    })
  }).catch(err => {
    toggleWait(btn);
    if (console) {
      console.log("ERROR ", err)
    }
  })
}

function logout() {
  window.location.href = "/auth/logout"
}

function admin() {
  window.location.href = "/admin/index?tab=0"
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
    if (console) {
      console.log("ERROR ", err)
    }
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
    if (console) {
      console.log("ERROR ", err)
    }
  })
}

function resetCatalog() {
  document.getElementById("filter").value = "";
  document.getElementById("category").value = "";
  document.getElementById("category").selectedIndex = 0
}

function viewCatalog() {
  var id = document.getElementById("templates").value;
  var filter = document.getElementById("filter").value;
  var category = document.getElementById("category").value;
  if (id != "") {
    window.location.href = "/admin/catalog?id=" + encodeURIComponent(id) + "&category=" + encodeURIComponent(category) + "&filter=" + encodeURIComponent(filter)
  }
}

function filterCatalog(id, filter) {
  var category = document.getElementById("category").value;
  window.location.href = "/admin/catalog?id=" + encodeURIComponent(id) + "&category=" + encodeURIComponent(category) + "&filter=" + encodeURIComponent(filter)
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

function tagCloud(id, func) {
  var apiUrl = "/api/external/linkding/tags/count";
  axios.get(apiUrl).then(response => {
    var feed = response.data;
    document.getElementById(id).tagfunc = func;
    document.getElementById(id).innerHTML = app.templates.tagcloud({
      Id: id,
      feed: feed
    })
  }).catch(err => {
    if (console) {
      console.log("ERROR ", err)
    }
  })
}

function dialog(title, html) {
  var options = {
    focus: true,
    backdrop: true
  };
  document.getElementById("modal-prop").classList.add("modal-dialog-scrollable");
  document.getElementById("modal-prop").classList.add("modal-fullscreen");
  window.modal = new bootstrap.Modal(document.getElementById("modal"), options);
  document.querySelector("#modalLabel").innerHTML = title;
  document.querySelector("#modalBody").innerHTML = html;
  window.modal.show()
}

function navigateToNews(sender) {
  var url = sender.getAttribute("data-url");
  var apiUrl = "/api/resources/feed?url=" + encodeURIComponent(url);
  axios.get(apiUrl).then(response => {
    var feed = response.data;
    dialog("News", app.templates.news(feed))
  })
}

function viewBookmarks(tag) {
  var apiUrl = "/api/external/linkding/bookmarks?tag=" + encodeURIComponent(tag);
  axios.get(apiUrl).then(response => {
    var feed = response.data.results;
    dialog("Bookmarks - " + tag, app.templates.bookmarkslist(feed))
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
    document.getElementById("modal-prop").classList.remove("modal-fullscreen");
    document.getElementById("modal-prop").classList.remove("modal-diallog-scrollable");
    result.location = data.location;
    document.querySelector("#modalBody").innerHTML = app.templates.weather(result);
    window.modal.show()
  }).catch(err => {
    if (console) {
      console.log("ERROR ", err)
    }
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
    document.getElementById("loader").href = url;
    document.getElementById("loader").click()
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
    archived: document.querySelector("#chkArchived").checked,
    monitor: document.querySelector("#monitor").checked,
    uptime: document.querySelector("#uptime").checked
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
      window.location.href = "/admin/index?tab=1"
    }).catch(err => {
      if (console) {
        console.log("ERROR ", err)
      }
    })
  }).catch(err => {
    if (console) {
      console.log("ERROR ", err)
    }
  })
}

function composeEdit(sender, tab) {
  var url = "/admin/edit?project=" + encodeURIComponent(sender.getAttribute("data-project")) + "&container=" + encodeURIComponent(sender.getAttribute("data-containerid")) + "&tab=" + (tab ?? 1);
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
  window.location.href = "/admin/compose"
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

function scanDocker(btn) {
  toggleWait(btn);
  var apiUrl = "/api/discovery/scan";
  axios.get(apiUrl).then(response => {
    toggleWait(btn);
    ui().messageBox({
      label: "Scan",
      body: "Service Discovery complete."
    })
  }).catch(err => {
    toggleWait(btn);
    if (console) {
      console.log("ERROR ", err)
    }
  })
}

function pruneDocker(btn) {
  toggleWait(btn);
  var apiUrl = "/api/docker/prune";
  axios.get(apiUrl).then(response => {
    toggleWait(btn);
    ui().messageBox({
      label: "Prune",
      body: "Docker prune comlete."
    })
  }).catch(err => {
    toggleWait(btn);
    if (console) {
      console.log("ERROR ", err)
    }
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
    if (console) {
      console.log("ERROR ", err)
    }
  })
}

function saveChangeIcon(name, catalog, slug) {
  var apiUrl = "/api/discovery/changeicon/" + encodeURIComponent(name) + "?catalog=" + encodeURIComponent(catalog) + "&slug=" + encodeURIComponent(slug);
  axios.get(apiUrl).then(response => {
    document.getElementById("btnSearch").setAttribute("data-action", "");
    window.iconSearchModal.hide()
  }).catch(err => {
    if (console) {
      console.log("ERROR ", err)
    }
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
    if (console) {
      console.log("ERROR ", err)
    }
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
