(function () {
  const D = document.createElement("link").relList;
  if (D && D.supports && D.supports("modulepreload")) return;
  for (const X of document.querySelectorAll('link[rel="modulepreload"]')) U(X);
  new MutationObserver((X) => {
    for (const $ of X)
      if ($.type === "childList")
        for (const ke of $.addedNodes)
          ke.tagName === "LINK" && ke.rel === "modulepreload" && U(ke);
  }).observe(document, { childList: !0, subtree: !0 });
  function Ne(X) {
    const $ = {};
    return (
      X.integrity && ($.integrity = X.integrity),
      X.referrerPolicy && ($.referrerPolicy = X.referrerPolicy),
      X.crossOrigin === "use-credentials"
        ? ($.credentials = "include")
        : X.crossOrigin === "anonymous"
        ? ($.credentials = "omit")
        : ($.credentials = "same-origin"),
      $
    );
  }
  function U(X) {
    if (X.ep) return;
    X.ep = !0;
    const $ = Ne(X);
    fetch(X.href, $);
  }
})();
var Wr =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function $r(ue) {
  return ue &&
    ue.__esModule &&
    Object.prototype.hasOwnProperty.call(ue, "default")
    ? ue.default
    : ue;
}
var Ln = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */ (function (ue) {
  (function (D, Ne) {
    ue.exports = D.document
      ? Ne(D, !0)
      : function (U) {
          if (!U.document)
            throw new Error("jQuery requires a window with a document");
          return Ne(U);
        };
  })(typeof window < "u" ? window : Wr, function (D, Ne) {
    var U = [],
      X = Object.getPrototypeOf,
      $ = U.slice,
      ke = U.flat
        ? function (e) {
            return U.flat.call(e);
          }
        : function (e) {
            return U.concat.apply([], e);
          },
      nt = U.push,
      he = U.indexOf,
      rt = {},
      Ft = rt.toString,
      $e = rt.hasOwnProperty,
      Wt = $e.toString,
      qn = Wt.call(Object),
      L = {},
      q = function (t) {
        return (
          typeof t == "function" &&
          typeof t.nodeType != "number" &&
          typeof t.item != "function"
        );
      },
      je = function (t) {
        return t != null && t === t.window;
      },
      j = D.document,
      On = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function $t(e, t, n) {
      n = n || j;
      var r,
        o,
        u = n.createElement("script");
      if (((u.text = e), t))
        for (r in On)
          (o = t[r] || (t.getAttribute && t.getAttribute(r))),
            o && u.setAttribute(r, o);
      n.head.appendChild(u).parentNode.removeChild(u);
    }
    function Le(e) {
      return e == null
        ? e + ""
        : typeof e == "object" || typeof e == "function"
        ? rt[Ft.call(e)] || "object"
        : typeof e;
    }
    var Bt = "3.7.1",
      Hn = /HTML$/i,
      i = function (e, t) {
        return new i.fn.init(e, t);
      };
    (i.fn = i.prototype =
      {
        jquery: Bt,
        constructor: i,
        length: 0,
        toArray: function () {
          return $.call(this);
        },
        get: function (e) {
          return e == null
            ? $.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = i.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return i.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            i.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack($.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            i.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            i.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: nt,
        sort: U.sort,
        splice: U.splice,
      }),
      (i.extend = i.fn.extend =
        function () {
          var e,
            t,
            n,
            r,
            o,
            u,
            a = arguments[0] || {},
            c = 1,
            f = arguments.length,
            d = !1;
          for (
            typeof a == "boolean" && ((d = a), (a = arguments[c] || {}), c++),
              typeof a != "object" && !q(a) && (a = {}),
              c === f && ((a = this), c--);
            c < f;
            c++
          )
            if ((e = arguments[c]) != null)
              for (t in e)
                (r = e[t]),
                  !(t === "__proto__" || a === r) &&
                    (d && r && (i.isPlainObject(r) || (o = Array.isArray(r)))
                      ? ((n = a[t]),
                        o && !Array.isArray(n)
                          ? (u = [])
                          : !o && !i.isPlainObject(n)
                          ? (u = {})
                          : (u = n),
                        (o = !1),
                        (a[t] = i.extend(d, u, r)))
                      : r !== void 0 && (a[t] = r));
          return a;
        }),
      i.extend({
        expando: "jQuery" + (Bt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isPlainObject: function (e) {
          var t, n;
          return !e || Ft.call(e) !== "[object Object]"
            ? !1
            : ((t = X(e)),
              t
                ? ((n = $e.call(t, "constructor") && t.constructor),
                  typeof n == "function" && Wt.call(n) === qn)
                : !0);
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        globalEval: function (e, t, n) {
          $t(e, { nonce: t && t.nonce }, n);
        },
        each: function (e, t) {
          var n,
            r = 0;
          if (gt(e))
            for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
          else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
          return e;
        },
        text: function (e) {
          var t,
            n = "",
            r = 0,
            o = e.nodeType;
          if (!o) for (; (t = e[r++]); ) n += i.text(t);
          return o === 1 || o === 11
            ? e.textContent
            : o === 9
            ? e.documentElement.textContent
            : o === 3 || o === 4
            ? e.nodeValue
            : n;
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            e != null &&
              (gt(Object(e))
                ? i.merge(n, typeof e == "string" ? [e] : e)
                : nt.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return t == null ? -1 : he.call(t, e, n);
        },
        isXMLDoc: function (e) {
          var t = e && e.namespaceURI,
            n = e && (e.ownerDocument || e).documentElement;
          return !Hn.test(t || (n && n.nodeName) || "HTML");
        },
        merge: function (e, t) {
          for (var n = +t.length, r = 0, o = e.length; r < n; r++)
            e[o++] = t[r];
          return (e.length = o), e;
        },
        grep: function (e, t, n) {
          for (var r, o = [], u = 0, a = e.length, c = !n; u < a; u++)
            (r = !t(e[u], u)), r !== c && o.push(e[u]);
          return o;
        },
        map: function (e, t, n) {
          var r,
            o,
            u = 0,
            a = [];
          if (gt(e))
            for (r = e.length; u < r; u++)
              (o = t(e[u], u, n)), o != null && a.push(o);
          else for (u in e) (o = t(e[u], u, n)), o != null && a.push(o);
          return ke(a);
        },
        guid: 1,
        support: L,
      }),
      typeof Symbol == "function" &&
        (i.fn[Symbol.iterator] = U[Symbol.iterator]),
      i.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          rt["[object " + t + "]"] = t.toLowerCase();
        }
      );
    function gt(e) {
      var t = !!e && "length" in e && e.length,
        n = Le(e);
      return q(e) || je(e)
        ? !1
        : n === "array" ||
            t === 0 ||
            (typeof t == "number" && t > 0 && t - 1 in e);
    }
    function B(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var Pn = U.pop,
      Mn = U.sort,
      Rn = U.splice,
      F = "[\\x20\\t\\r\\n\\f]",
      Be = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g");
    i.contains = function (e, t) {
      var n = t && t.parentNode;
      return (
        e === n ||
        !!(
          n &&
          n.nodeType === 1 &&
          (e.contains
            ? e.contains(n)
            : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16)
        )
      );
    };
    var In = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function _n(e, t) {
      return t
        ? e === "\0"
          ? "�"
          : e.slice(0, -1) +
            "\\" +
            e.charCodeAt(e.length - 1).toString(16) +
            " "
        : "\\" + e;
    }
    i.escapeSelector = function (e) {
      return (e + "").replace(In, _n);
    };
    var ge = j,
      yt = nt;
    (function () {
      var e,
        t,
        n,
        r,
        o,
        u = yt,
        a,
        c,
        f,
        d,
        y,
        b = i.expando,
        h = 0,
        m = 0,
        N = lt(),
        R = lt(),
        O = lt(),
        G = lt(),
        V = function (s, l) {
          return s === l && (o = !0), 0;
        },
        fe =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ce =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          F +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        M =
          "\\[" +
          F +
          "*(" +
          ce +
          ")(?:" +
          F +
          "*([*^$|!~]?=)" +
          F +
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
          ce +
          "))|)" +
          F +
          "*\\]",
        Ae =
          ":(" +
          ce +
          `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
          M +
          ")*)|.*)\\)|)",
        I = new RegExp(F + "+", "g"),
        z = new RegExp("^" + F + "*," + F + "*"),
        Ke = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
        Ot = new RegExp(F + "|>"),
        le = new RegExp(Ae),
        Ze = new RegExp("^" + ce + "$"),
        de = {
          ID: new RegExp("^#(" + ce + ")"),
          CLASS: new RegExp("^\\.(" + ce + ")"),
          TAG: new RegExp("^(" + ce + "|[*])"),
          ATTR: new RegExp("^" + M),
          PSEUDO: new RegExp("^" + Ae),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              F +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              F +
              "*(?:([+-]|)" +
              F +
              "*(\\d+)|))" +
              F +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + fe + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              F +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              F +
              "*((?:-\\d)?\\d*)" +
              F +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        xe = /^(?:input|select|textarea|button)$/i,
        Te = /^h\d$/i,
        ne = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Ht = /[+~]/,
        be = new RegExp(
          "\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])",
          "g"
        ),
        me = function (s, l) {
          var p = "0x" + s.slice(1) - 65536;
          return (
            l ||
            (p < 0
              ? String.fromCharCode(p + 65536)
              : String.fromCharCode((p >> 10) | 55296, (p & 1023) | 56320))
          );
        },
        Hr = function () {
          Ce();
        },
        Pr = pt(
          function (s) {
            return s.disabled === !0 && B(s, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
      function Mr() {
        try {
          return a.activeElement;
        } catch {}
      }
      try {
        u.apply((U = $.call(ge.childNodes)), ge.childNodes),
          U[ge.childNodes.length].nodeType;
      } catch {
        u = {
          apply: function (l, p) {
            yt.apply(l, $.call(p));
          },
          call: function (l) {
            yt.apply(l, $.call(arguments, 1));
          },
        };
      }
      function _(s, l, p, g) {
        var v,
          x,
          T,
          w,
          C,
          H,
          A,
          k = l && l.ownerDocument,
          P = l ? l.nodeType : 9;
        if (
          ((p = p || []),
          typeof s != "string" || !s || (P !== 1 && P !== 9 && P !== 11))
        )
          return p;
        if (!g && (Ce(l), (l = l || a), f)) {
          if (P !== 11 && (C = ne.exec(s)))
            if ((v = C[1])) {
              if (P === 9)
                if ((T = l.getElementById(v))) {
                  if (T.id === v) return u.call(p, T), p;
                } else return p;
              else if (
                k &&
                (T = k.getElementById(v)) &&
                _.contains(l, T) &&
                T.id === v
              )
                return u.call(p, T), p;
            } else {
              if (C[2]) return u.apply(p, l.getElementsByTagName(s)), p;
              if ((v = C[3]) && l.getElementsByClassName)
                return u.apply(p, l.getElementsByClassName(v)), p;
            }
          if (!G[s + " "] && (!d || !d.test(s))) {
            if (((A = s), (k = l), P === 1 && (Ot.test(s) || Ke.test(s)))) {
              for (
                k = (Ht.test(s) && Pt(l.parentNode)) || l,
                  (k != l || !L.scope) &&
                    ((w = l.getAttribute("id"))
                      ? (w = i.escapeSelector(w))
                      : l.setAttribute("id", (w = b))),
                  H = et(s),
                  x = H.length;
                x--;

              )
                H[x] = (w ? "#" + w : ":scope") + " " + dt(H[x]);
              A = H.join(",");
            }
            try {
              return u.apply(p, k.querySelectorAll(A)), p;
            } catch {
              G(s, !0);
            } finally {
              w === b && l.removeAttribute("id");
            }
          }
        }
        return jn(s.replace(Be, "$1"), l, p, g);
      }
      function lt() {
        var s = [];
        function l(p, g) {
          return (
            s.push(p + " ") > t.cacheLength && delete l[s.shift()],
            (l[p + " "] = g)
          );
        }
        return l;
      }
      function oe(s) {
        return (s[b] = !0), s;
      }
      function Fe(s) {
        var l = a.createElement("fieldset");
        try {
          return !!s(l);
        } catch {
          return !1;
        } finally {
          l.parentNode && l.parentNode.removeChild(l), (l = null);
        }
      }
      function Rr(s) {
        return function (l) {
          return B(l, "input") && l.type === s;
        };
      }
      function Ir(s) {
        return function (l) {
          return (B(l, "input") || B(l, "button")) && l.type === s;
        };
      }
      function Nn(s) {
        return function (l) {
          return "form" in l
            ? l.parentNode && l.disabled === !1
              ? "label" in l
                ? "label" in l.parentNode
                  ? l.parentNode.disabled === s
                  : l.disabled === s
                : l.isDisabled === s || (l.isDisabled !== !s && Pr(l) === s)
              : l.disabled === s
            : "label" in l
            ? l.disabled === s
            : !1;
        };
      }
      function De(s) {
        return oe(function (l) {
          return (
            (l = +l),
            oe(function (p, g) {
              for (var v, x = s([], p.length, l), T = x.length; T--; )
                p[(v = x[T])] && (p[v] = !(g[v] = p[v]));
            })
          );
        });
      }
      function Pt(s) {
        return s && typeof s.getElementsByTagName < "u" && s;
      }
      function Ce(s) {
        var l,
          p = s ? s.ownerDocument || s : ge;
        return (
          p == a ||
            p.nodeType !== 9 ||
            !p.documentElement ||
            ((a = p),
            (c = a.documentElement),
            (f = !i.isXMLDoc(a)),
            (y = c.matches || c.webkitMatchesSelector || c.msMatchesSelector),
            c.msMatchesSelector &&
              ge != a &&
              (l = a.defaultView) &&
              l.top !== l &&
              l.addEventListener("unload", Hr),
            (L.getById = Fe(function (g) {
              return (
                (c.appendChild(g).id = i.expando),
                !a.getElementsByName || !a.getElementsByName(i.expando).length
              );
            })),
            (L.disconnectedMatch = Fe(function (g) {
              return y.call(g, "*");
            })),
            (L.scope = Fe(function () {
              return a.querySelectorAll(":scope");
            })),
            (L.cssHas = Fe(function () {
              try {
                return a.querySelector(":has(*,:jqfake)"), !1;
              } catch {
                return !0;
              }
            })),
            L.getById
              ? ((t.filter.ID = function (g) {
                  var v = g.replace(be, me);
                  return function (x) {
                    return x.getAttribute("id") === v;
                  };
                }),
                (t.find.ID = function (g, v) {
                  if (typeof v.getElementById < "u" && f) {
                    var x = v.getElementById(g);
                    return x ? [x] : [];
                  }
                }))
              : ((t.filter.ID = function (g) {
                  var v = g.replace(be, me);
                  return function (x) {
                    var T =
                      typeof x.getAttributeNode < "u" &&
                      x.getAttributeNode("id");
                    return T && T.value === v;
                  };
                }),
                (t.find.ID = function (g, v) {
                  if (typeof v.getElementById < "u" && f) {
                    var x,
                      T,
                      w,
                      C = v.getElementById(g);
                    if (C) {
                      if (((x = C.getAttributeNode("id")), x && x.value === g))
                        return [C];
                      for (w = v.getElementsByName(g), T = 0; (C = w[T++]); )
                        if (
                          ((x = C.getAttributeNode("id")), x && x.value === g)
                        )
                          return [C];
                    }
                    return [];
                  }
                })),
            (t.find.TAG = function (g, v) {
              return typeof v.getElementsByTagName < "u"
                ? v.getElementsByTagName(g)
                : v.querySelectorAll(g);
            }),
            (t.find.CLASS = function (g, v) {
              if (typeof v.getElementsByClassName < "u" && f)
                return v.getElementsByClassName(g);
            }),
            (d = []),
            Fe(function (g) {
              var v;
              (c.appendChild(g).innerHTML =
                "<a id='" +
                b +
                "' href='' disabled='disabled'></a><select id='" +
                b +
                "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                g.querySelectorAll("[selected]").length ||
                  d.push("\\[" + F + "*(?:value|" + fe + ")"),
                g.querySelectorAll("[id~=" + b + "-]").length || d.push("~="),
                g.querySelectorAll("a#" + b + "+*").length ||
                  d.push(".#.+[+~]"),
                g.querySelectorAll(":checked").length || d.push(":checked"),
                (v = a.createElement("input")),
                v.setAttribute("type", "hidden"),
                g.appendChild(v).setAttribute("name", "D"),
                (c.appendChild(g).disabled = !0),
                g.querySelectorAll(":disabled").length !== 2 &&
                  d.push(":enabled", ":disabled"),
                (v = a.createElement("input")),
                v.setAttribute("name", ""),
                g.appendChild(v),
                g.querySelectorAll("[name='']").length ||
                  d.push("\\[" + F + "*name" + F + "*=" + F + `*(?:''|"")`);
            }),
            L.cssHas || d.push(":has"),
            (d = d.length && new RegExp(d.join("|"))),
            (V = function (g, v) {
              if (g === v) return (o = !0), 0;
              var x = !g.compareDocumentPosition - !v.compareDocumentPosition;
              return (
                x ||
                ((x =
                  (g.ownerDocument || g) == (v.ownerDocument || v)
                    ? g.compareDocumentPosition(v)
                    : 1),
                x & 1 || (!L.sortDetached && v.compareDocumentPosition(g) === x)
                  ? g === a || (g.ownerDocument == ge && _.contains(ge, g))
                    ? -1
                    : v === a || (v.ownerDocument == ge && _.contains(ge, v))
                    ? 1
                    : r
                    ? he.call(r, g) - he.call(r, v)
                    : 0
                  : x & 4
                  ? -1
                  : 1)
              );
            })),
          a
        );
      }
      (_.matches = function (s, l) {
        return _(s, null, null, l);
      }),
        (_.matchesSelector = function (s, l) {
          if ((Ce(s), f && !G[l + " "] && (!d || !d.test(l))))
            try {
              var p = y.call(s, l);
              if (
                p ||
                L.disconnectedMatch ||
                (s.document && s.document.nodeType !== 11)
              )
                return p;
            } catch {
              G(l, !0);
            }
          return _(l, a, null, [s]).length > 0;
        }),
        (_.contains = function (s, l) {
          return (s.ownerDocument || s) != a && Ce(s), i.contains(s, l);
        }),
        (_.attr = function (s, l) {
          (s.ownerDocument || s) != a && Ce(s);
          var p = t.attrHandle[l.toLowerCase()],
            g =
              p && $e.call(t.attrHandle, l.toLowerCase())
                ? p(s, l, !f)
                : void 0;
          return g !== void 0 ? g : s.getAttribute(l);
        }),
        (_.error = function (s) {
          throw new Error("Syntax error, unrecognized expression: " + s);
        }),
        (i.uniqueSort = function (s) {
          var l,
            p = [],
            g = 0,
            v = 0;
          if (
            ((o = !L.sortStable),
            (r = !L.sortStable && $.call(s, 0)),
            Mn.call(s, V),
            o)
          ) {
            for (; (l = s[v++]); ) l === s[v] && (g = p.push(v));
            for (; g--; ) Rn.call(s, p[g], 1);
          }
          return (r = null), s;
        }),
        (i.fn.uniqueSort = function () {
          return this.pushStack(i.uniqueSort($.apply(this)));
        }),
        (t = i.expr =
          {
            cacheLength: 50,
            createPseudo: oe,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (s) {
                return (
                  (s[1] = s[1].replace(be, me)),
                  (s[3] = (s[3] || s[4] || s[5] || "").replace(be, me)),
                  s[2] === "~=" && (s[3] = " " + s[3] + " "),
                  s.slice(0, 4)
                );
              },
              CHILD: function (s) {
                return (
                  (s[1] = s[1].toLowerCase()),
                  s[1].slice(0, 3) === "nth"
                    ? (s[3] || _.error(s[0]),
                      (s[4] = +(s[4]
                        ? s[5] + (s[6] || 1)
                        : 2 * (s[3] === "even" || s[3] === "odd"))),
                      (s[5] = +(s[7] + s[8] || s[3] === "odd")))
                    : s[3] && _.error(s[0]),
                  s
                );
              },
              PSEUDO: function (s) {
                var l,
                  p = !s[6] && s[2];
                return de.CHILD.test(s[0])
                  ? null
                  : (s[3]
                      ? (s[2] = s[4] || s[5] || "")
                      : p &&
                        le.test(p) &&
                        (l = et(p, !0)) &&
                        (l = p.indexOf(")", p.length - l) - p.length) &&
                        ((s[0] = s[0].slice(0, l)), (s[2] = p.slice(0, l))),
                    s.slice(0, 3));
              },
            },
            filter: {
              TAG: function (s) {
                var l = s.replace(be, me).toLowerCase();
                return s === "*"
                  ? function () {
                      return !0;
                    }
                  : function (p) {
                      return B(p, l);
                    };
              },
              CLASS: function (s) {
                var l = N[s + " "];
                return (
                  l ||
                  ((l = new RegExp("(^|" + F + ")" + s + "(" + F + "|$)")) &&
                    N(s, function (p) {
                      return l.test(
                        (typeof p.className == "string" && p.className) ||
                          (typeof p.getAttribute < "u" &&
                            p.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (s, l, p) {
                return function (g) {
                  var v = _.attr(g, s);
                  return v == null
                    ? l === "!="
                    : l
                    ? ((v += ""),
                      l === "="
                        ? v === p
                        : l === "!="
                        ? v !== p
                        : l === "^="
                        ? p && v.indexOf(p) === 0
                        : l === "*="
                        ? p && v.indexOf(p) > -1
                        : l === "$="
                        ? p && v.slice(-p.length) === p
                        : l === "~="
                        ? (" " + v.replace(I, " ") + " ").indexOf(p) > -1
                        : l === "|="
                        ? v === p || v.slice(0, p.length + 1) === p + "-"
                        : !1)
                    : !0;
                };
              },
              CHILD: function (s, l, p, g, v) {
                var x = s.slice(0, 3) !== "nth",
                  T = s.slice(-4) !== "last",
                  w = l === "of-type";
                return g === 1 && v === 0
                  ? function (C) {
                      return !!C.parentNode;
                    }
                  : function (C, H, A) {
                      var k,
                        P,
                        E,
                        W,
                        ee,
                        Q = x !== T ? "nextSibling" : "previousSibling",
                        re = C.parentNode,
                        pe = w && C.nodeName.toLowerCase(),
                        We = !A && !w,
                        Y = !1;
                      if (re) {
                        if (x) {
                          for (; Q; ) {
                            for (E = C; (E = E[Q]); )
                              if (w ? B(E, pe) : E.nodeType === 1) return !1;
                            ee = Q = s === "only" && !ee && "nextSibling";
                          }
                          return !0;
                        }
                        if (
                          ((ee = [T ? re.firstChild : re.lastChild]), T && We)
                        ) {
                          for (
                            P = re[b] || (re[b] = {}),
                              k = P[s] || [],
                              W = k[0] === h && k[1],
                              Y = W && k[2],
                              E = W && re.childNodes[W];
                            (E = (++W && E && E[Q]) || (Y = W = 0) || ee.pop());

                          )
                            if (E.nodeType === 1 && ++Y && E === C) {
                              P[s] = [h, W, Y];
                              break;
                            }
                        } else if (
                          (We &&
                            ((P = C[b] || (C[b] = {})),
                            (k = P[s] || []),
                            (W = k[0] === h && k[1]),
                            (Y = W)),
                          Y === !1)
                        )
                          for (
                            ;
                            (E =
                              (++W && E && E[Q]) || (Y = W = 0) || ee.pop()) &&
                            !(
                              (w ? B(E, pe) : E.nodeType === 1) &&
                              ++Y &&
                              (We &&
                                ((P = E[b] || (E[b] = {})), (P[s] = [h, Y])),
                              E === C)
                            );

                          );
                        return (Y -= v), Y === g || (Y % g === 0 && Y / g >= 0);
                      }
                    };
              },
              PSEUDO: function (s, l) {
                var p,
                  g =
                    t.pseudos[s] ||
                    t.setFilters[s.toLowerCase()] ||
                    _.error("unsupported pseudo: " + s);
                return g[b]
                  ? g(l)
                  : g.length > 1
                  ? ((p = [s, s, "", l]),
                    t.setFilters.hasOwnProperty(s.toLowerCase())
                      ? oe(function (v, x) {
                          for (var T, w = g(v, l), C = w.length; C--; )
                            (T = he.call(v, w[C])), (v[T] = !(x[T] = w[C]));
                        })
                      : function (v) {
                          return g(v, 0, p);
                        })
                  : g;
              },
            },
            pseudos: {
              not: oe(function (s) {
                var l = [],
                  p = [],
                  g = _t(s.replace(Be, "$1"));
                return g[b]
                  ? oe(function (v, x, T, w) {
                      for (var C, H = g(v, null, w, []), A = v.length; A--; )
                        (C = H[A]) && (v[A] = !(x[A] = C));
                    })
                  : function (v, x, T) {
                      return (
                        (l[0] = v), g(l, null, T, p), (l[0] = null), !p.pop()
                      );
                    };
              }),
              has: oe(function (s) {
                return function (l) {
                  return _(s, l).length > 0;
                };
              }),
              contains: oe(function (s) {
                return (
                  (s = s.replace(be, me)),
                  function (l) {
                    return (l.textContent || i.text(l)).indexOf(s) > -1;
                  }
                );
              }),
              lang: oe(function (s) {
                return (
                  Ze.test(s || "") || _.error("unsupported lang: " + s),
                  (s = s.replace(be, me).toLowerCase()),
                  function (l) {
                    var p;
                    do
                      if (
                        (p = f
                          ? l.lang
                          : l.getAttribute("xml:lang") ||
                            l.getAttribute("lang"))
                      )
                        return (
                          (p = p.toLowerCase()),
                          p === s || p.indexOf(s + "-") === 0
                        );
                    while ((l = l.parentNode) && l.nodeType === 1);
                    return !1;
                  }
                );
              }),
              target: function (s) {
                var l = D.location && D.location.hash;
                return l && l.slice(1) === s.id;
              },
              root: function (s) {
                return s === c;
              },
              focus: function (s) {
                return (
                  s === Mr() &&
                  a.hasFocus() &&
                  !!(s.type || s.href || ~s.tabIndex)
                );
              },
              enabled: Nn(!1),
              disabled: Nn(!0),
              checked: function (s) {
                return (
                  (B(s, "input") && !!s.checked) ||
                  (B(s, "option") && !!s.selected)
                );
              },
              selected: function (s) {
                return (
                  s.parentNode && s.parentNode.selectedIndex, s.selected === !0
                );
              },
              empty: function (s) {
                for (s = s.firstChild; s; s = s.nextSibling)
                  if (s.nodeType < 6) return !1;
                return !0;
              },
              parent: function (s) {
                return !t.pseudos.empty(s);
              },
              header: function (s) {
                return Te.test(s.nodeName);
              },
              input: function (s) {
                return xe.test(s.nodeName);
              },
              button: function (s) {
                return (B(s, "input") && s.type === "button") || B(s, "button");
              },
              text: function (s) {
                var l;
                return (
                  B(s, "input") &&
                  s.type === "text" &&
                  ((l = s.getAttribute("type")) == null ||
                    l.toLowerCase() === "text")
                );
              },
              first: De(function () {
                return [0];
              }),
              last: De(function (s, l) {
                return [l - 1];
              }),
              eq: De(function (s, l, p) {
                return [p < 0 ? p + l : p];
              }),
              even: De(function (s, l) {
                for (var p = 0; p < l; p += 2) s.push(p);
                return s;
              }),
              odd: De(function (s, l) {
                for (var p = 1; p < l; p += 2) s.push(p);
                return s;
              }),
              lt: De(function (s, l, p) {
                var g;
                for (
                  p < 0 ? (g = p + l) : p > l ? (g = l) : (g = p);
                  --g >= 0;

                )
                  s.push(g);
                return s;
              }),
              gt: De(function (s, l, p) {
                for (var g = p < 0 ? p + l : p; ++g < l; ) s.push(g);
                return s;
              }),
            },
          }),
        (t.pseudos.nth = t.pseudos.eq);
      for (e in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        t.pseudos[e] = Rr(e);
      for (e in { submit: !0, reset: !0 }) t.pseudos[e] = Ir(e);
      function kn() {}
      (kn.prototype = t.filters = t.pseudos), (t.setFilters = new kn());
      function et(s, l) {
        var p,
          g,
          v,
          x,
          T,
          w,
          C,
          H = R[s + " "];
        if (H) return l ? 0 : H.slice(0);
        for (T = s, w = [], C = t.preFilter; T; ) {
          (!p || (g = z.exec(T))) &&
            (g && (T = T.slice(g[0].length) || T), w.push((v = []))),
            (p = !1),
            (g = Ke.exec(T)) &&
              ((p = g.shift()),
              v.push({ value: p, type: g[0].replace(Be, " ") }),
              (T = T.slice(p.length)));
          for (x in t.filter)
            (g = de[x].exec(T)) &&
              (!C[x] || (g = C[x](g))) &&
              ((p = g.shift()),
              v.push({ value: p, type: x, matches: g }),
              (T = T.slice(p.length)));
          if (!p) break;
        }
        return l ? T.length : T ? _.error(s) : R(s, w).slice(0);
      }
      function dt(s) {
        for (var l = 0, p = s.length, g = ""; l < p; l++) g += s[l].value;
        return g;
      }
      function pt(s, l, p) {
        var g = l.dir,
          v = l.next,
          x = v || g,
          T = p && x === "parentNode",
          w = m++;
        return l.first
          ? function (C, H, A) {
              for (; (C = C[g]); ) if (C.nodeType === 1 || T) return s(C, H, A);
              return !1;
            }
          : function (C, H, A) {
              var k,
                P,
                E = [h, w];
              if (A) {
                for (; (C = C[g]); )
                  if ((C.nodeType === 1 || T) && s(C, H, A)) return !0;
              } else
                for (; (C = C[g]); )
                  if (C.nodeType === 1 || T)
                    if (((P = C[b] || (C[b] = {})), v && B(C, v)))
                      C = C[g] || C;
                    else {
                      if ((k = P[x]) && k[0] === h && k[1] === w)
                        return (E[2] = k[2]);
                      if (((P[x] = E), (E[2] = s(C, H, A)))) return !0;
                    }
              return !1;
            };
      }
      function Mt(s) {
        return s.length > 1
          ? function (l, p, g) {
              for (var v = s.length; v--; ) if (!s[v](l, p, g)) return !1;
              return !0;
            }
          : s[0];
      }
      function _r(s, l, p) {
        for (var g = 0, v = l.length; g < v; g++) _(s, l[g], p);
        return p;
      }
      function ht(s, l, p, g, v) {
        for (var x, T = [], w = 0, C = s.length, H = l != null; w < C; w++)
          (x = s[w]) && (!p || p(x, g, v)) && (T.push(x), H && l.push(w));
        return T;
      }
      function Rt(s, l, p, g, v, x) {
        return (
          g && !g[b] && (g = Rt(g)),
          v && !v[b] && (v = Rt(v, x)),
          oe(function (T, w, C, H) {
            var A,
              k,
              P,
              E,
              W = [],
              ee = [],
              Q = w.length,
              re = T || _r(l || "*", C.nodeType ? [C] : C, []),
              pe = s && (T || !l) ? ht(re, W, s, C, H) : re;
            if (
              (p
                ? ((E = v || (T ? s : Q || g) ? [] : w), p(pe, E, C, H))
                : (E = pe),
              g)
            )
              for (A = ht(E, ee), g(A, [], C, H), k = A.length; k--; )
                (P = A[k]) && (E[ee[k]] = !(pe[ee[k]] = P));
            if (T) {
              if (v || s) {
                if (v) {
                  for (A = [], k = E.length; k--; )
                    (P = E[k]) && A.push((pe[k] = P));
                  v(null, (E = []), A, H);
                }
                for (k = E.length; k--; )
                  (P = E[k]) &&
                    (A = v ? he.call(T, P) : W[k]) > -1 &&
                    (T[A] = !(w[A] = P));
              }
            } else (E = ht(E === w ? E.splice(Q, E.length) : E)), v ? v(null, w, E, H) : u.apply(w, E);
          })
        );
      }
      function It(s) {
        for (
          var l,
            p,
            g,
            v = s.length,
            x = t.relative[s[0].type],
            T = x || t.relative[" "],
            w = x ? 1 : 0,
            C = pt(
              function (k) {
                return k === l;
              },
              T,
              !0
            ),
            H = pt(
              function (k) {
                return he.call(l, k) > -1;
              },
              T,
              !0
            ),
            A = [
              function (k, P, E) {
                var W =
                  (!x && (E || P != n)) ||
                  ((l = P).nodeType ? C(k, P, E) : H(k, P, E));
                return (l = null), W;
              },
            ];
          w < v;
          w++
        )
          if ((p = t.relative[s[w].type])) A = [pt(Mt(A), p)];
          else {
            if (((p = t.filter[s[w].type].apply(null, s[w].matches)), p[b])) {
              for (g = ++w; g < v && !t.relative[s[g].type]; g++);
              return Rt(
                w > 1 && Mt(A),
                w > 1 &&
                  dt(
                    s
                      .slice(0, w - 1)
                      .concat({ value: s[w - 2].type === " " ? "*" : "" })
                  ).replace(Be, "$1"),
                p,
                w < g && It(s.slice(w, g)),
                g < v && It((s = s.slice(g))),
                g < v && dt(s)
              );
            }
            A.push(p);
          }
        return Mt(A);
      }
      function Fr(s, l) {
        var p = l.length > 0,
          g = s.length > 0,
          v = function (x, T, w, C, H) {
            var A,
              k,
              P,
              E = 0,
              W = "0",
              ee = x && [],
              Q = [],
              re = n,
              pe = x || (g && t.find.TAG("*", H)),
              We = (h += re == null ? 1 : Math.random() || 0.1),
              Y = pe.length;
            for (
              H && (n = T == a || T || H);
              W !== Y && (A = pe[W]) != null;
              W++
            ) {
              if (g && A) {
                for (
                  k = 0, !T && A.ownerDocument != a && (Ce(A), (w = !f));
                  (P = s[k++]);

                )
                  if (P(A, T || a, w)) {
                    u.call(C, A);
                    break;
                  }
                H && (h = We);
              }
              p && ((A = !P && A) && E--, x && ee.push(A));
            }
            if (((E += W), p && W !== E)) {
              for (k = 0; (P = l[k++]); ) P(ee, Q, T, w);
              if (x) {
                if (E > 0) for (; W--; ) ee[W] || Q[W] || (Q[W] = Pn.call(C));
                Q = ht(Q);
              }
              u.apply(C, Q),
                H && !x && Q.length > 0 && E + l.length > 1 && i.uniqueSort(C);
            }
            return H && ((h = We), (n = re)), ee;
          };
        return p ? oe(v) : v;
      }
      function _t(s, l) {
        var p,
          g = [],
          v = [],
          x = O[s + " "];
        if (!x) {
          for (l || (l = et(s)), p = l.length; p--; )
            (x = It(l[p])), x[b] ? g.push(x) : v.push(x);
          (x = O(s, Fr(v, g))), (x.selector = s);
        }
        return x;
      }
      function jn(s, l, p, g) {
        var v,
          x,
          T,
          w,
          C,
          H = typeof s == "function" && s,
          A = !g && et((s = H.selector || s));
        if (((p = p || []), A.length === 1)) {
          if (
            ((x = A[0] = A[0].slice(0)),
            x.length > 2 &&
              (T = x[0]).type === "ID" &&
              l.nodeType === 9 &&
              f &&
              t.relative[x[1].type])
          ) {
            if (
              ((l = (t.find.ID(T.matches[0].replace(be, me), l) || [])[0]), l)
            )
              H && (l = l.parentNode);
            else return p;
            s = s.slice(x.shift().value.length);
          }
          for (
            v = de.needsContext.test(s) ? 0 : x.length;
            v-- && ((T = x[v]), !t.relative[(w = T.type)]);

          )
            if (
              (C = t.find[w]) &&
              (g = C(
                T.matches[0].replace(be, me),
                (Ht.test(x[0].type) && Pt(l.parentNode)) || l
              ))
            ) {
              if ((x.splice(v, 1), (s = g.length && dt(x)), !s))
                return u.apply(p, g), p;
              break;
            }
        }
        return (
          (H || _t(s, A))(
            g,
            l,
            !f,
            p,
            !l || (Ht.test(s) && Pt(l.parentNode)) || l
          ),
          p
        );
      }
      (L.sortStable = b.split("").sort(V).join("") === b),
        Ce(),
        (L.sortDetached = Fe(function (s) {
          return s.compareDocumentPosition(a.createElement("fieldset")) & 1;
        })),
        (i.find = _),
        (i.expr[":"] = i.expr.pseudos),
        (i.unique = i.uniqueSort),
        (_.compile = _t),
        (_.select = jn),
        (_.setDocument = Ce),
        (_.tokenize = et),
        (_.escape = i.escapeSelector),
        (_.getText = i.text),
        (_.isXML = i.isXMLDoc),
        (_.selectors = i.expr),
        (_.support = i.support),
        (_.uniqueSort = i.uniqueSort);
    })();
    var qe = function (e, t, n) {
        for (var r = [], o = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
          if (e.nodeType === 1) {
            if (o && i(e).is(n)) break;
            r.push(e);
          }
        return r;
      },
      zt = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          e.nodeType === 1 && e !== t && n.push(e);
        return n;
      },
      Ut = i.expr.match.needsContext,
      Vt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function vt(e, t, n) {
      return q(t)
        ? i.grep(e, function (r, o) {
            return !!t.call(r, o, r) !== n;
          })
        : t.nodeType
        ? i.grep(e, function (r) {
            return (r === t) !== n;
          })
        : typeof t != "string"
        ? i.grep(e, function (r) {
            return he.call(t, r) > -1 !== n;
          })
        : i.filter(t, e, n);
    }
    (i.filter = function (e, t, n) {
      var r = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        t.length === 1 && r.nodeType === 1
          ? i.find.matchesSelector(r, e)
            ? [r]
            : []
          : i.find.matches(
              e,
              i.grep(t, function (o) {
                return o.nodeType === 1;
              })
            )
      );
    }),
      i.fn.extend({
        find: function (e) {
          var t,
            n,
            r = this.length,
            o = this;
          if (typeof e != "string")
            return this.pushStack(
              i(e).filter(function () {
                for (t = 0; t < r; t++) if (i.contains(o[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < r; t++) i.find(e, o[t], n);
          return r > 1 ? i.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(vt(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(vt(this, e || [], !0));
        },
        is: function (e) {
          return !!vt(
            this,
            typeof e == "string" && Ut.test(e) ? i(e) : e || [],
            !1
          ).length;
        },
      });
    var Xt,
      Fn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      Wn = (i.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (((n = n || Xt), typeof e == "string"))
          if (
            (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3
              ? (r = [null, e, null])
              : (r = Fn.exec(e)),
            r && (r[1] || !t))
          )
            if (r[1]) {
              if (
                ((t = t instanceof i ? t[0] : t),
                i.merge(
                  this,
                  i.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : j,
                    !0
                  )
                ),
                Vt.test(r[1]) && i.isPlainObject(t))
              )
                for (r in t) q(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              return this;
            } else
              return (
                (o = j.getElementById(r[2])),
                o && ((this[0] = o), (this.length = 1)),
                this
              );
          else
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
        else {
          if (e.nodeType) return (this[0] = e), (this.length = 1), this;
          if (q(e)) return n.ready !== void 0 ? n.ready(e) : e(i);
        }
        return i.makeArray(e, this);
      });
    (Wn.prototype = i.fn), (Xt = i(j));
    var $n = /^(?:parents|prev(?:Until|All))/,
      Bn = { children: !0, contents: !0, next: !0, prev: !0 };
    i.fn.extend({
      has: function (e) {
        var t = i(e, this),
          n = t.length;
        return this.filter(function () {
          for (var r = 0; r < n; r++) if (i.contains(this, t[r])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          r = 0,
          o = this.length,
          u = [],
          a = typeof e != "string" && i(e);
        if (!Ut.test(e)) {
          for (; r < o; r++)
            for (n = this[r]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (a
                  ? a.index(n) > -1
                  : n.nodeType === 1 && i.find.matchesSelector(n, e))
              ) {
                u.push(n);
                break;
              }
        }
        return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u);
      },
      index: function (e) {
        return e
          ? typeof e == "string"
            ? he.call(i(e), this[0])
            : he.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(i.uniqueSort(i.merge(this.get(), i(e, t))));
      },
      addBack: function (e) {
        return this.add(
          e == null ? this.prevObject : this.prevObject.filter(e)
        );
      },
    });
    function Gt(e, t) {
      for (; (e = e[t]) && e.nodeType !== 1; );
      return e;
    }
    i.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && t.nodeType !== 11 ? t : null;
        },
        parents: function (e) {
          return qe(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return qe(e, "parentNode", n);
        },
        next: function (e) {
          return Gt(e, "nextSibling");
        },
        prev: function (e) {
          return Gt(e, "previousSibling");
        },
        nextAll: function (e) {
          return qe(e, "nextSibling");
        },
        prevAll: function (e) {
          return qe(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return qe(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return qe(e, "previousSibling", n);
        },
        siblings: function (e) {
          return zt((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return zt(e.firstChild);
        },
        contents: function (e) {
          return e.contentDocument != null && X(e.contentDocument)
            ? e.contentDocument
            : (B(e, "template") && (e = e.content || e),
              i.merge([], e.childNodes));
        },
      },
      function (e, t) {
        i.fn[e] = function (n, r) {
          var o = i.map(this, t, n);
          return (
            e.slice(-5) !== "Until" && (r = n),
            r && typeof r == "string" && (o = i.filter(r, o)),
            this.length > 1 &&
              (Bn[e] || i.uniqueSort(o), $n.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
    var ae = /[^\x20\t\r\n\f]+/g;
    function zn(e) {
      var t = {};
      return (
        i.each(e.match(ae) || [], function (n, r) {
          t[r] = !0;
        }),
        t
      );
    }
    i.Callbacks = function (e) {
      e = typeof e == "string" ? zn(e) : i.extend({}, e);
      var t,
        n,
        r,
        o,
        u = [],
        a = [],
        c = -1,
        f = function () {
          for (o = o || e.once, r = t = !0; a.length; c = -1)
            for (n = a.shift(); ++c < u.length; )
              u[c].apply(n[0], n[1]) === !1 &&
                e.stopOnFalse &&
                ((c = u.length), (n = !1));
          e.memory || (n = !1), (t = !1), o && (n ? (u = []) : (u = ""));
        },
        d = {
          add: function () {
            return (
              u &&
                (n && !t && ((c = u.length - 1), a.push(n)),
                (function y(b) {
                  i.each(b, function (h, m) {
                    q(m)
                      ? (!e.unique || !d.has(m)) && u.push(m)
                      : m && m.length && Le(m) !== "string" && y(m);
                  });
                })(arguments),
                n && !t && f()),
              this
            );
          },
          remove: function () {
            return (
              i.each(arguments, function (y, b) {
                for (var h; (h = i.inArray(b, u, h)) > -1; )
                  u.splice(h, 1), h <= c && c--;
              }),
              this
            );
          },
          has: function (y) {
            return y ? i.inArray(y, u) > -1 : u.length > 0;
          },
          empty: function () {
            return u && (u = []), this;
          },
          disable: function () {
            return (o = a = []), (u = n = ""), this;
          },
          disabled: function () {
            return !u;
          },
          lock: function () {
            return (o = a = []), !n && !t && (u = n = ""), this;
          },
          locked: function () {
            return !!o;
          },
          fireWith: function (y, b) {
            return (
              o ||
                ((b = b || []),
                (b = [y, b.slice ? b.slice() : b]),
                a.push(b),
                t || f()),
              this
            );
          },
          fire: function () {
            return d.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!r;
          },
        };
      return d;
    };
    function Oe(e) {
      return e;
    }
    function it(e) {
      throw e;
    }
    function Qt(e, t, n, r) {
      var o;
      try {
        e && q((o = e.promise))
          ? o.call(e).done(t).fail(n)
          : e && q((o = e.then))
          ? o.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
      } catch (u) {
        n.apply(void 0, [u]);
      }
    }
    i.extend({
      Deferred: function (e) {
        var t = [
            [
              "notify",
              "progress",
              i.Callbacks("memory"),
              i.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              i.Callbacks("once memory"),
              i.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              i.Callbacks("once memory"),
              i.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          n = "pending",
          r = {
            state: function () {
              return n;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (u) {
              return r.then(null, u);
            },
            pipe: function () {
              var u = arguments;
              return i
                .Deferred(function (a) {
                  i.each(t, function (c, f) {
                    var d = q(u[f[4]]) && u[f[4]];
                    o[f[1]](function () {
                      var y = d && d.apply(this, arguments);
                      y && q(y.promise)
                        ? y
                            .promise()
                            .progress(a.notify)
                            .done(a.resolve)
                            .fail(a.reject)
                        : a[f[0] + "With"](this, d ? [y] : arguments);
                    });
                  }),
                    (u = null);
                })
                .promise();
            },
            then: function (u, a, c) {
              var f = 0;
              function d(y, b, h, m) {
                return function () {
                  var N = this,
                    R = arguments,
                    O = function () {
                      var V, fe;
                      if (!(y < f)) {
                        if (((V = h.apply(N, R)), V === b.promise()))
                          throw new TypeError("Thenable self-resolution");
                        (fe =
                          V &&
                          (typeof V == "object" || typeof V == "function") &&
                          V.then),
                          q(fe)
                            ? m
                              ? fe.call(V, d(f, b, Oe, m), d(f, b, it, m))
                              : (f++,
                                fe.call(
                                  V,
                                  d(f, b, Oe, m),
                                  d(f, b, it, m),
                                  d(f, b, Oe, b.notifyWith)
                                ))
                            : (h !== Oe && ((N = void 0), (R = [V])),
                              (m || b.resolveWith)(N, R));
                      }
                    },
                    G = m
                      ? O
                      : function () {
                          try {
                            O();
                          } catch (V) {
                            i.Deferred.exceptionHook &&
                              i.Deferred.exceptionHook(V, G.error),
                              y + 1 >= f &&
                                (h !== it && ((N = void 0), (R = [V])),
                                b.rejectWith(N, R));
                          }
                        };
                  y
                    ? G()
                    : (i.Deferred.getErrorHook
                        ? (G.error = i.Deferred.getErrorHook())
                        : i.Deferred.getStackHook &&
                          (G.error = i.Deferred.getStackHook()),
                      D.setTimeout(G));
                };
              }
              return i
                .Deferred(function (y) {
                  t[0][3].add(d(0, y, q(c) ? c : Oe, y.notifyWith)),
                    t[1][3].add(d(0, y, q(u) ? u : Oe)),
                    t[2][3].add(d(0, y, q(a) ? a : it));
                })
                .promise();
            },
            promise: function (u) {
              return u != null ? i.extend(u, r) : r;
            },
          },
          o = {};
        return (
          i.each(t, function (u, a) {
            var c = a[2],
              f = a[5];
            (r[a[1]] = c.add),
              f &&
                c.add(
                  function () {
                    n = f;
                  },
                  t[3 - u][2].disable,
                  t[3 - u][3].disable,
                  t[0][2].lock,
                  t[0][3].lock
                ),
              c.add(a[3].fire),
              (o[a[0]] = function () {
                return (
                  o[a[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[a[0] + "With"] = c.fireWith);
          }),
          r.promise(o),
          e && e.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          o = $.call(arguments),
          u = i.Deferred(),
          a = function (c) {
            return function (f) {
              (r[c] = this),
                (o[c] = arguments.length > 1 ? $.call(arguments) : f),
                --t || u.resolveWith(r, o);
            };
          };
        if (
          t <= 1 &&
          (Qt(e, u.done(a(n)).resolve, u.reject, !t),
          u.state() === "pending" || q(o[n] && o[n].then))
        )
          return u.then();
        for (; n--; ) Qt(o[n], a(n), u.reject);
        return u.promise();
      },
    });
    var Un = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (i.Deferred.exceptionHook = function (e, t) {
      D.console &&
        D.console.warn &&
        e &&
        Un.test(e.name) &&
        D.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
      (i.readyException = function (e) {
        D.setTimeout(function () {
          throw e;
        });
      });
    var bt = i.Deferred();
    (i.fn.ready = function (e) {
      return (
        bt.then(e).catch(function (t) {
          i.readyException(t);
        }),
        this
      );
    }),
      i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (e === !0 ? --i.readyWait : i.isReady) ||
            ((i.isReady = !0),
            !(e !== !0 && --i.readyWait > 0) && bt.resolveWith(j, [i]));
        },
      }),
      (i.ready.then = bt.then);
    function ot() {
      j.removeEventListener("DOMContentLoaded", ot),
        D.removeEventListener("load", ot),
        i.ready();
    }
    j.readyState === "complete" ||
    (j.readyState !== "loading" && !j.documentElement.doScroll)
      ? D.setTimeout(i.ready)
      : (j.addEventListener("DOMContentLoaded", ot),
        D.addEventListener("load", ot));
    var ye = function (e, t, n, r, o, u, a) {
        var c = 0,
          f = e.length,
          d = n == null;
        if (Le(n) === "object") {
          o = !0;
          for (c in n) ye(e, t, c, n[c], !0, u, a);
        } else if (
          r !== void 0 &&
          ((o = !0),
          q(r) || (a = !0),
          d &&
            (a
              ? (t.call(e, r), (t = null))
              : ((d = t),
                (t = function (y, b, h) {
                  return d.call(i(y), h);
                }))),
          t)
        )
          for (; c < f; c++) t(e[c], n, a ? r : r.call(e[c], c, t(e[c], n)));
        return o ? e : d ? t.call(e) : f ? t(e[0], n) : u;
      },
      Vn = /^-ms-/,
      Xn = /-([a-z])/g;
    function Gn(e, t) {
      return t.toUpperCase();
    }
    function se(e) {
      return e.replace(Vn, "ms-").replace(Xn, Gn);
    }
    var ze = function (e) {
      return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
    };
    function Ue() {
      this.expando = i.expando + Ue.uid++;
    }
    (Ue.uid = 1),
      (Ue.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              ze(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var r,
            o = this.cache(e);
          if (typeof t == "string") o[se(t)] = n;
          else for (r in t) o[se(r)] = t[r];
          return o;
        },
        get: function (e, t) {
          return t === void 0
            ? this.cache(e)
            : e[this.expando] && e[this.expando][se(t)];
        },
        access: function (e, t, n) {
          return t === void 0 || (t && typeof t == "string" && n === void 0)
            ? this.get(e, t)
            : (this.set(e, t, n), n !== void 0 ? n : t);
        },
        remove: function (e, t) {
          var n,
            r = e[this.expando];
          if (r !== void 0) {
            if (t !== void 0)
              for (
                Array.isArray(t)
                  ? (t = t.map(se))
                  : ((t = se(t)), (t = (t in r) ? [t] : t.match(ae) || [])),
                  n = t.length;
                n--;

              )
                delete r[t[n]];
            (t === void 0 || i.isEmptyObject(r)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return t !== void 0 && !i.isEmptyObject(t);
        },
      });
    var S = new Ue(),
      J = new Ue(),
      Qn = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Yn = /[A-Z]/g;
    function Jn(e) {
      return e === "true"
        ? !0
        : e === "false"
        ? !1
        : e === "null"
        ? null
        : e === +e + ""
        ? +e
        : Qn.test(e)
        ? JSON.parse(e)
        : e;
    }
    function Yt(e, t, n) {
      var r;
      if (n === void 0 && e.nodeType === 1)
        if (
          ((r = "data-" + t.replace(Yn, "-$&").toLowerCase()),
          (n = e.getAttribute(r)),
          typeof n == "string")
        ) {
          try {
            n = Jn(n);
          } catch {}
          J.set(e, t, n);
        } else n = void 0;
      return n;
    }
    i.extend({
      hasData: function (e) {
        return J.hasData(e) || S.hasData(e);
      },
      data: function (e, t, n) {
        return J.access(e, t, n);
      },
      removeData: function (e, t) {
        J.remove(e, t);
      },
      _data: function (e, t, n) {
        return S.access(e, t, n);
      },
      _removeData: function (e, t) {
        S.remove(e, t);
      },
    }),
      i.fn.extend({
        data: function (e, t) {
          var n,
            r,
            o,
            u = this[0],
            a = u && u.attributes;
          if (e === void 0) {
            if (
              this.length &&
              ((o = J.get(u)), u.nodeType === 1 && !S.get(u, "hasDataAttrs"))
            ) {
              for (n = a.length; n--; )
                a[n] &&
                  ((r = a[n].name),
                  r.indexOf("data-") === 0 &&
                    ((r = se(r.slice(5))), Yt(u, r, o[r])));
              S.set(u, "hasDataAttrs", !0);
            }
            return o;
          }
          return typeof e == "object"
            ? this.each(function () {
                J.set(this, e);
              })
            : ye(
                this,
                function (c) {
                  var f;
                  if (u && c === void 0)
                    return (
                      (f = J.get(u, e)),
                      f !== void 0 || ((f = Yt(u, e)), f !== void 0)
                        ? f
                        : void 0
                    );
                  this.each(function () {
                    J.set(this, e, c);
                  });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            J.remove(this, e);
          });
        },
      }),
      i.extend({
        queue: function (e, t, n) {
          var r;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (r = S.get(e, t)),
              n &&
                (!r || Array.isArray(n)
                  ? (r = S.access(e, t, i.makeArray(n)))
                  : r.push(n)),
              r || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = i.queue(e, t),
            r = n.length,
            o = n.shift(),
            u = i._queueHooks(e, t),
            a = function () {
              i.dequeue(e, t);
            };
          o === "inprogress" && ((o = n.shift()), r--),
            o &&
              (t === "fx" && n.unshift("inprogress"),
              delete u.stop,
              o.call(e, a, u)),
            !r && u && u.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            S.get(e, n) ||
            S.access(e, n, {
              empty: i.Callbacks("once memory").add(function () {
                S.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      i.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            typeof e != "string" && ((t = e), (e = "fx"), n--),
            arguments.length < n
              ? i.queue(this[0], e)
              : t === void 0
              ? this
              : this.each(function () {
                  var r = i.queue(this, e, t);
                  i._queueHooks(this, e),
                    e === "fx" && r[0] !== "inprogress" && i.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            i.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            r = 1,
            o = i.Deferred(),
            u = this,
            a = this.length,
            c = function () {
              --r || o.resolveWith(u, [u]);
            };
          for (
            typeof e != "string" && ((t = e), (e = void 0)), e = e || "fx";
            a--;

          )
            (n = S.get(u[a], e + "queueHooks")),
              n && n.empty && (r++, n.empty.add(c));
          return c(), o.promise(t);
        },
      });
    var Jt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Ve = new RegExp("^(?:([+-])=|)(" + Jt + ")([a-z%]*)$", "i"),
      ve = ["Top", "Right", "Bottom", "Left"],
      we = j.documentElement,
      He = function (e) {
        return i.contains(e.ownerDocument, e);
      },
      Kn = { composed: !0 };
    we.getRootNode &&
      (He = function (e) {
        return (
          i.contains(e.ownerDocument, e) ||
          e.getRootNode(Kn) === e.ownerDocument
        );
      });
    var ut = function (e, t) {
      return (
        (e = t || e),
        e.style.display === "none" ||
          (e.style.display === "" && He(e) && i.css(e, "display") === "none")
      );
    };
    function Kt(e, t, n, r) {
      var o,
        u,
        a = 20,
        c = r
          ? function () {
              return r.cur();
            }
          : function () {
              return i.css(e, t, "");
            },
        f = c(),
        d = (n && n[3]) || (i.cssNumber[t] ? "" : "px"),
        y =
          e.nodeType &&
          (i.cssNumber[t] || (d !== "px" && +f)) &&
          Ve.exec(i.css(e, t));
      if (y && y[3] !== d) {
        for (f = f / 2, d = d || y[3], y = +f || 1; a--; )
          i.style(e, t, y + d),
            (1 - u) * (1 - (u = c() / f || 0.5)) <= 0 && (a = 0),
            (y = y / u);
        (y = y * 2), i.style(e, t, y + d), (n = n || []);
      }
      return (
        n &&
          ((y = +y || +f || 0),
          (o = n[1] ? y + (n[1] + 1) * n[2] : +n[2]),
          r && ((r.unit = d), (r.start = y), (r.end = o))),
        o
      );
    }
    var Zt = {};
    function Zn(e) {
      var t,
        n = e.ownerDocument,
        r = e.nodeName,
        o = Zt[r];
      return (
        o ||
        ((t = n.body.appendChild(n.createElement(r))),
        (o = i.css(t, "display")),
        t.parentNode.removeChild(t),
        o === "none" && (o = "block"),
        (Zt[r] = o),
        o)
      );
    }
    function Pe(e, t) {
      for (var n, r, o = [], u = 0, a = e.length; u < a; u++)
        (r = e[u]),
          r.style &&
            ((n = r.style.display),
            t
              ? (n === "none" &&
                  ((o[u] = S.get(r, "display") || null),
                  o[u] || (r.style.display = "")),
                r.style.display === "" && ut(r) && (o[u] = Zn(r)))
              : n !== "none" && ((o[u] = "none"), S.set(r, "display", n)));
      for (u = 0; u < a; u++) o[u] != null && (e[u].style.display = o[u]);
      return e;
    }
    i.fn.extend({
      show: function () {
        return Pe(this, !0);
      },
      hide: function () {
        return Pe(this);
      },
      toggle: function (e) {
        return typeof e == "boolean"
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              ut(this) ? i(this).show() : i(this).hide();
            });
      },
    });
    var Xe = /^(?:checkbox|radio)$/i,
      en = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      tn = /^$|^module$|\/(?:java|ecma)script/i;
    (function () {
      var e = j.createDocumentFragment(),
        t = e.appendChild(j.createElement("div")),
        n = j.createElement("input");
      n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        (L.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (t.innerHTML = "<textarea>x</textarea>"),
        (L.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
        (t.innerHTML = "<option></option>"),
        (L.option = !!t.lastChild);
    })();
    var te = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
    (te.tbody = te.tfoot = te.colgroup = te.caption = te.thead),
      (te.th = te.td),
      L.option ||
        (te.optgroup = te.option =
          [1, "<select multiple='multiple'>", "</select>"]);
    function K(e, t) {
      var n;
      return (
        typeof e.getElementsByTagName < "u"
          ? (n = e.getElementsByTagName(t || "*"))
          : typeof e.querySelectorAll < "u"
          ? (n = e.querySelectorAll(t || "*"))
          : (n = []),
        t === void 0 || (t && B(e, t)) ? i.merge([e], n) : n
      );
    }
    function mt(e, t) {
      for (var n = 0, r = e.length; n < r; n++)
        S.set(e[n], "globalEval", !t || S.get(t[n], "globalEval"));
    }
    var er = /<|&#?\w+;/;
    function nn(e, t, n, r, o) {
      for (
        var u,
          a,
          c,
          f,
          d,
          y,
          b = t.createDocumentFragment(),
          h = [],
          m = 0,
          N = e.length;
        m < N;
        m++
      )
        if (((u = e[m]), u || u === 0))
          if (Le(u) === "object") i.merge(h, u.nodeType ? [u] : u);
          else if (!er.test(u)) h.push(t.createTextNode(u));
          else {
            for (
              a = a || b.appendChild(t.createElement("div")),
                c = (en.exec(u) || ["", ""])[1].toLowerCase(),
                f = te[c] || te._default,
                a.innerHTML = f[1] + i.htmlPrefilter(u) + f[2],
                y = f[0];
              y--;

            )
              a = a.lastChild;
            i.merge(h, a.childNodes), (a = b.firstChild), (a.textContent = "");
          }
      for (b.textContent = "", m = 0; (u = h[m++]); ) {
        if (r && i.inArray(u, r) > -1) {
          o && o.push(u);
          continue;
        }
        if (((d = He(u)), (a = K(b.appendChild(u), "script")), d && mt(a), n))
          for (y = 0; (u = a[y++]); ) tn.test(u.type || "") && n.push(u);
      }
      return b;
    }
    var rn = /^([^.]*)(?:\.(.+)|)/;
    function Me() {
      return !0;
    }
    function Re() {
      return !1;
    }
    function xt(e, t, n, r, o, u) {
      var a, c;
      if (typeof t == "object") {
        typeof n != "string" && ((r = r || n), (n = void 0));
        for (c in t) xt(e, c, n, r, t[c], u);
        return e;
      }
      if (
        (r == null && o == null
          ? ((o = n), (r = n = void 0))
          : o == null &&
            (typeof n == "string"
              ? ((o = r), (r = void 0))
              : ((o = r), (r = n), (n = void 0))),
        o === !1)
      )
        o = Re;
      else if (!o) return e;
      return (
        u === 1 &&
          ((a = o),
          (o = function (f) {
            return i().off(f), a.apply(this, arguments);
          }),
          (o.guid = a.guid || (a.guid = i.guid++))),
        e.each(function () {
          i.event.add(this, t, o, r, n);
        })
      );
    }
    i.event = {
      global: {},
      add: function (e, t, n, r, o) {
        var u,
          a,
          c,
          f,
          d,
          y,
          b,
          h,
          m,
          N,
          R,
          O = S.get(e);
        if (ze(e))
          for (
            n.handler && ((u = n), (n = u.handler), (o = u.selector)),
              o && i.find.matchesSelector(we, o),
              n.guid || (n.guid = i.guid++),
              (f = O.events) || (f = O.events = Object.create(null)),
              (a = O.handle) ||
                (a = O.handle =
                  function (G) {
                    return typeof i < "u" && i.event.triggered !== G.type
                      ? i.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
              t = (t || "").match(ae) || [""],
              d = t.length;
            d--;

          )
            (c = rn.exec(t[d]) || []),
              (m = R = c[1]),
              (N = (c[2] || "").split(".").sort()),
              m &&
                ((b = i.event.special[m] || {}),
                (m = (o ? b.delegateType : b.bindType) || m),
                (b = i.event.special[m] || {}),
                (y = i.extend(
                  {
                    type: m,
                    origType: R,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && i.expr.match.needsContext.test(o),
                    namespace: N.join("."),
                  },
                  u
                )),
                (h = f[m]) ||
                  ((h = f[m] = []),
                  (h.delegateCount = 0),
                  (!b.setup || b.setup.call(e, r, N, a) === !1) &&
                    e.addEventListener &&
                    e.addEventListener(m, a)),
                b.add &&
                  (b.add.call(e, y),
                  y.handler.guid || (y.handler.guid = n.guid)),
                o ? h.splice(h.delegateCount++, 0, y) : h.push(y),
                (i.event.global[m] = !0));
      },
      remove: function (e, t, n, r, o) {
        var u,
          a,
          c,
          f,
          d,
          y,
          b,
          h,
          m,
          N,
          R,
          O = S.hasData(e) && S.get(e);
        if (!(!O || !(f = O.events))) {
          for (t = (t || "").match(ae) || [""], d = t.length; d--; ) {
            if (
              ((c = rn.exec(t[d]) || []),
              (m = R = c[1]),
              (N = (c[2] || "").split(".").sort()),
              !m)
            ) {
              for (m in f) i.event.remove(e, m + t[d], n, r, !0);
              continue;
            }
            for (
              b = i.event.special[m] || {},
                m = (r ? b.delegateType : b.bindType) || m,
                h = f[m] || [],
                c =
                  c[2] &&
                  new RegExp("(^|\\.)" + N.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = u = h.length;
              u--;

            )
              (y = h[u]),
                (o || R === y.origType) &&
                  (!n || n.guid === y.guid) &&
                  (!c || c.test(y.namespace)) &&
                  (!r || r === y.selector || (r === "**" && y.selector)) &&
                  (h.splice(u, 1),
                  y.selector && h.delegateCount--,
                  b.remove && b.remove.call(e, y));
            a &&
              !h.length &&
              ((!b.teardown || b.teardown.call(e, N, O.handle) === !1) &&
                i.removeEvent(e, m, O.handle),
              delete f[m]);
          }
          i.isEmptyObject(f) && S.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          r,
          o,
          u,
          a,
          c = new Array(arguments.length),
          f = i.event.fix(e),
          d = (S.get(this, "events") || Object.create(null))[f.type] || [],
          y = i.event.special[f.type] || {};
        for (c[0] = f, t = 1; t < arguments.length; t++) c[t] = arguments[t];
        if (
          ((f.delegateTarget = this),
          !(y.preDispatch && y.preDispatch.call(this, f) === !1))
        ) {
          for (
            a = i.event.handlers.call(this, f, d), t = 0;
            (o = a[t++]) && !f.isPropagationStopped();

          )
            for (
              f.currentTarget = o.elem, n = 0;
              (u = o.handlers[n++]) && !f.isImmediatePropagationStopped();

            )
              (!f.rnamespace ||
                u.namespace === !1 ||
                f.rnamespace.test(u.namespace)) &&
                ((f.handleObj = u),
                (f.data = u.data),
                (r = (
                  (i.event.special[u.origType] || {}).handle || u.handler
                ).apply(o.elem, c)),
                r !== void 0 &&
                  (f.result = r) === !1 &&
                  (f.preventDefault(), f.stopPropagation()));
          return y.postDispatch && y.postDispatch.call(this, f), f.result;
        }
      },
      handlers: function (e, t) {
        var n,
          r,
          o,
          u,
          a,
          c = [],
          f = t.delegateCount,
          d = e.target;
        if (f && d.nodeType && !(e.type === "click" && e.button >= 1)) {
          for (; d !== this; d = d.parentNode || this)
            if (
              d.nodeType === 1 &&
              !(e.type === "click" && d.disabled === !0)
            ) {
              for (u = [], a = {}, n = 0; n < f; n++)
                (r = t[n]),
                  (o = r.selector + " "),
                  a[o] === void 0 &&
                    (a[o] = r.needsContext
                      ? i(o, this).index(d) > -1
                      : i.find(o, this, null, [d]).length),
                  a[o] && u.push(r);
              u.length && c.push({ elem: d, handlers: u });
            }
        }
        return (
          (d = this),
          f < t.length && c.push({ elem: d, handlers: t.slice(f) }),
          c
        );
      },
      addProp: function (e, t) {
        Object.defineProperty(i.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: q(t)
            ? function () {
                if (this.originalEvent) return t(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
          set: function (n) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            });
          },
        });
      },
      fix: function (e) {
        return e[i.expando] ? e : new i.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (e) {
            var t = this || e;
            return (
              Xe.test(t.type) && t.click && B(t, "input") && at(t, "click", !0),
              !1
            );
          },
          trigger: function (e) {
            var t = this || e;
            return (
              Xe.test(t.type) && t.click && B(t, "input") && at(t, "click"), !0
            );
          },
          _default: function (e) {
            var t = e.target;
            return (
              (Xe.test(t.type) &&
                t.click &&
                B(t, "input") &&
                S.get(t, "click")) ||
              B(t, "a")
            );
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            e.result !== void 0 &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    };
    function at(e, t, n) {
      if (!n) {
        S.get(e, t) === void 0 && i.event.add(e, t, Me);
        return;
      }
      S.set(e, t, !1),
        i.event.add(e, t, {
          namespace: !1,
          handler: function (r) {
            var o,
              u = S.get(this, t);
            if (r.isTrigger & 1 && this[t]) {
              if (u)
                (i.event.special[t] || {}).delegateType && r.stopPropagation();
              else if (
                ((u = $.call(arguments)),
                S.set(this, t, u),
                this[t](),
                (o = S.get(this, t)),
                S.set(this, t, !1),
                u !== o)
              )
                return r.stopImmediatePropagation(), r.preventDefault(), o;
            } else
              u &&
                (S.set(this, t, i.event.trigger(u[0], u.slice(1), this)),
                r.stopPropagation(),
                (r.isImmediatePropagationStopped = Me));
          },
        });
    }
    (i.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
      (i.Event = function (e, t) {
        if (!(this instanceof i.Event)) return new i.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              (e.defaultPrevented === void 0 && e.returnValue === !1)
                ? Me
                : Re),
            (this.target =
              e.target && e.target.nodeType === 3
                ? e.target.parentNode
                : e.target),
            (this.currentTarget = e.currentTarget),
            (this.relatedTarget = e.relatedTarget))
          : (this.type = e),
          t && i.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || Date.now()),
          (this[i.expando] = !0);
      }),
      (i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: Re,
        isPropagationStopped: Re,
        isImmediatePropagationStopped: Re,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = Me),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = Me),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = Me),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      i.each(
        {
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
          which: !0,
        },
        i.event.addProp
      ),
      i.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        function n(r) {
          if (j.documentMode) {
            var o = S.get(this, "handle"),
              u = i.event.fix(r);
            (u.type = r.type === "focusin" ? "focus" : "blur"),
              (u.isSimulated = !0),
              o(r),
              u.target === u.currentTarget && o(u);
          } else i.event.simulate(t, r.target, i.event.fix(r));
        }
        (i.event.special[e] = {
          setup: function () {
            var r;
            if ((at(this, e, !0), j.documentMode))
              (r = S.get(this, t)),
                r || this.addEventListener(t, n),
                S.set(this, t, (r || 0) + 1);
            else return !1;
          },
          trigger: function () {
            return at(this, e), !0;
          },
          teardown: function () {
            var r;
            if (j.documentMode)
              (r = S.get(this, t) - 1),
                r
                  ? S.set(this, t, r)
                  : (this.removeEventListener(t, n), S.remove(this, t));
            else return !1;
          },
          _default: function (r) {
            return S.get(r.target, e);
          },
          delegateType: t,
        }),
          (i.event.special[t] = {
            setup: function () {
              var r = this.ownerDocument || this.document || this,
                o = j.documentMode ? this : r,
                u = S.get(o, t);
              u ||
                (j.documentMode
                  ? this.addEventListener(t, n)
                  : r.addEventListener(e, n, !0)),
                S.set(o, t, (u || 0) + 1);
            },
            teardown: function () {
              var r = this.ownerDocument || this.document || this,
                o = j.documentMode ? this : r,
                u = S.get(o, t) - 1;
              u
                ? S.set(o, t, u)
                : (j.documentMode
                    ? this.removeEventListener(t, n)
                    : r.removeEventListener(e, n, !0),
                  S.remove(o, t));
            },
          });
      }),
      i.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, t) {
          i.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (n) {
              var r,
                o = this,
                u = n.relatedTarget,
                a = n.handleObj;
              return (
                (!u || (u !== o && !i.contains(o, u))) &&
                  ((n.type = a.origType),
                  (r = a.handler.apply(this, arguments)),
                  (n.type = t)),
                r
              );
            },
          };
        }
      ),
      i.fn.extend({
        on: function (e, t, n, r) {
          return xt(this, e, t, n, r);
        },
        one: function (e, t, n, r) {
          return xt(this, e, t, n, r, 1);
        },
        off: function (e, t, n) {
          var r, o;
          if (e && e.preventDefault && e.handleObj)
            return (
              (r = e.handleObj),
              i(e.delegateTarget).off(
                r.namespace ? r.origType + "." + r.namespace : r.origType,
                r.selector,
                r.handler
              ),
              this
            );
          if (typeof e == "object") {
            for (o in e) this.off(o, t, e[o]);
            return this;
          }
          return (
            (t === !1 || typeof t == "function") && ((n = t), (t = void 0)),
            n === !1 && (n = Re),
            this.each(function () {
              i.event.remove(this, e, n, t);
            })
          );
        },
      });
    var tr = /<script|<style|<link/i,
      nr = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rr = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function on(e, t) {
      return (
        (B(e, "table") &&
          B(t.nodeType !== 11 ? t : t.firstChild, "tr") &&
          i(e).children("tbody")[0]) ||
        e
      );
    }
    function ir(e) {
      return (e.type = (e.getAttribute("type") !== null) + "/" + e.type), e;
    }
    function or(e) {
      return (
        (e.type || "").slice(0, 5) === "true/"
          ? (e.type = e.type.slice(5))
          : e.removeAttribute("type"),
        e
      );
    }
    function un(e, t) {
      var n, r, o, u, a, c, f;
      if (t.nodeType === 1) {
        if (S.hasData(e) && ((u = S.get(e)), (f = u.events), f)) {
          S.remove(t, "handle events");
          for (o in f)
            for (n = 0, r = f[o].length; n < r; n++) i.event.add(t, o, f[o][n]);
        }
        J.hasData(e) && ((a = J.access(e)), (c = i.extend({}, a)), J.set(t, c));
      }
    }
    function ur(e, t) {
      var n = t.nodeName.toLowerCase();
      n === "input" && Xe.test(e.type)
        ? (t.checked = e.checked)
        : (n === "input" || n === "textarea") &&
          (t.defaultValue = e.defaultValue);
    }
    function Ie(e, t, n, r) {
      t = ke(t);
      var o,
        u,
        a,
        c,
        f,
        d,
        y = 0,
        b = e.length,
        h = b - 1,
        m = t[0],
        N = q(m);
      if (N || (b > 1 && typeof m == "string" && !L.checkClone && nr.test(m)))
        return e.each(function (R) {
          var O = e.eq(R);
          N && (t[0] = m.call(this, R, O.html())), Ie(O, t, n, r);
        });
      if (
        b &&
        ((o = nn(t, e[0].ownerDocument, !1, e, r)),
        (u = o.firstChild),
        o.childNodes.length === 1 && (o = u),
        u || r)
      ) {
        for (a = i.map(K(o, "script"), ir), c = a.length; y < b; y++)
          (f = o),
            y !== h &&
              ((f = i.clone(f, !0, !0)), c && i.merge(a, K(f, "script"))),
            n.call(e[y], f, y);
        if (c)
          for (
            d = a[a.length - 1].ownerDocument, i.map(a, or), y = 0;
            y < c;
            y++
          )
            (f = a[y]),
              tn.test(f.type || "") &&
                !S.access(f, "globalEval") &&
                i.contains(d, f) &&
                (f.src && (f.type || "").toLowerCase() !== "module"
                  ? i._evalUrl &&
                    !f.noModule &&
                    i._evalUrl(
                      f.src,
                      { nonce: f.nonce || f.getAttribute("nonce") },
                      d
                    )
                  : $t(f.textContent.replace(rr, ""), f, d));
      }
      return e;
    }
    function an(e, t, n) {
      for (var r, o = t ? i.filter(t, e) : e, u = 0; (r = o[u]) != null; u++)
        !n && r.nodeType === 1 && i.cleanData(K(r)),
          r.parentNode &&
            (n && He(r) && mt(K(r, "script")), r.parentNode.removeChild(r));
      return e;
    }
    i.extend({
      htmlPrefilter: function (e) {
        return e;
      },
      clone: function (e, t, n) {
        var r,
          o,
          u,
          a,
          c = e.cloneNode(!0),
          f = He(e);
        if (
          !L.noCloneChecked &&
          (e.nodeType === 1 || e.nodeType === 11) &&
          !i.isXMLDoc(e)
        )
          for (a = K(c), u = K(e), r = 0, o = u.length; r < o; r++)
            ur(u[r], a[r]);
        if (t)
          if (n)
            for (u = u || K(e), a = a || K(c), r = 0, o = u.length; r < o; r++)
              un(u[r], a[r]);
          else un(e, c);
        return (
          (a = K(c, "script")), a.length > 0 && mt(a, !f && K(e, "script")), c
        );
      },
      cleanData: function (e) {
        for (
          var t, n, r, o = i.event.special, u = 0;
          (n = e[u]) !== void 0;
          u++
        )
          if (ze(n)) {
            if ((t = n[S.expando])) {
              if (t.events)
                for (r in t.events)
                  o[r] ? i.event.remove(n, r) : i.removeEvent(n, r, t.handle);
              n[S.expando] = void 0;
            }
            n[J.expando] && (n[J.expando] = void 0);
          }
      },
    }),
      i.fn.extend({
        detach: function (e) {
          return an(this, e, !0);
        },
        remove: function (e) {
          return an(this, e);
        },
        text: function (e) {
          return ye(
            this,
            function (t) {
              return t === void 0
                ? i.text(this)
                : this.empty().each(function () {
                    (this.nodeType === 1 ||
                      this.nodeType === 11 ||
                      this.nodeType === 9) &&
                      (this.textContent = t);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return Ie(this, arguments, function (e) {
            if (
              this.nodeType === 1 ||
              this.nodeType === 11 ||
              this.nodeType === 9
            ) {
              var t = on(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function () {
          return Ie(this, arguments, function (e) {
            if (
              this.nodeType === 1 ||
              this.nodeType === 11 ||
              this.nodeType === 9
            ) {
              var t = on(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return Ie(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return Ie(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; (e = this[t]) != null; t++)
            e.nodeType === 1 && (i.cleanData(K(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = e ?? !1),
            (t = t ?? e),
            this.map(function () {
              return i.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return ye(
            this,
            function (t) {
              var n = this[0] || {},
                r = 0,
                o = this.length;
              if (t === void 0 && n.nodeType === 1) return n.innerHTML;
              if (
                typeof t == "string" &&
                !tr.test(t) &&
                !te[(en.exec(t) || ["", ""])[1].toLowerCase()]
              ) {
                t = i.htmlPrefilter(t);
                try {
                  for (; r < o; r++)
                    (n = this[r] || {}),
                      n.nodeType === 1 &&
                        (i.cleanData(K(n, !1)), (n.innerHTML = t));
                  n = 0;
                } catch {}
              }
              n && this.empty().append(t);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var e = [];
          return Ie(
            this,
            arguments,
            function (t) {
              var n = this.parentNode;
              i.inArray(this, e) < 0 &&
                (i.cleanData(K(this)), n && n.replaceChild(t, this));
            },
            e
          );
        },
      }),
      i.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          i.fn[e] = function (n) {
            for (var r, o = [], u = i(n), a = u.length - 1, c = 0; c <= a; c++)
              (r = c === a ? this : this.clone(!0)),
                i(u[c])[t](r),
                nt.apply(o, r.get());
            return this.pushStack(o);
          };
        }
      );
    var Tt = new RegExp("^(" + Jt + ")(?!px)[a-z%]+$", "i"),
      Ct = /^--/,
      st = function (e) {
        var t = e.ownerDocument.defaultView;
        return (!t || !t.opener) && (t = D), t.getComputedStyle(e);
      },
      sn = function (e, t, n) {
        var r,
          o,
          u = {};
        for (o in t) (u[o] = e.style[o]), (e.style[o] = t[o]);
        r = n.call(e);
        for (o in t) e.style[o] = u[o];
        return r;
      },
      ar = new RegExp(ve.join("|"), "i");
    (function () {
      function e() {
        if (d) {
          (f.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (d.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            we.appendChild(f).appendChild(d);
          var y = D.getComputedStyle(d);
          (n = y.top !== "1%"),
            (c = t(y.marginLeft) === 12),
            (d.style.right = "60%"),
            (u = t(y.right) === 36),
            (r = t(y.width) === 36),
            (d.style.position = "absolute"),
            (o = t(d.offsetWidth / 3) === 12),
            we.removeChild(f),
            (d = null);
        }
      }
      function t(y) {
        return Math.round(parseFloat(y));
      }
      var n,
        r,
        o,
        u,
        a,
        c,
        f = j.createElement("div"),
        d = j.createElement("div");
      d.style &&
        ((d.style.backgroundClip = "content-box"),
        (d.cloneNode(!0).style.backgroundClip = ""),
        (L.clearCloneStyle = d.style.backgroundClip === "content-box"),
        i.extend(L, {
          boxSizingReliable: function () {
            return e(), r;
          },
          pixelBoxStyles: function () {
            return e(), u;
          },
          pixelPosition: function () {
            return e(), n;
          },
          reliableMarginLeft: function () {
            return e(), c;
          },
          scrollboxSize: function () {
            return e(), o;
          },
          reliableTrDimensions: function () {
            var y, b, h, m;
            return (
              a == null &&
                ((y = j.createElement("table")),
                (b = j.createElement("tr")),
                (h = j.createElement("div")),
                (y.style.cssText =
                  "position:absolute;left:-11111px;border-collapse:separate"),
                (b.style.cssText = "box-sizing:content-box;border:1px solid"),
                (b.style.height = "1px"),
                (h.style.height = "9px"),
                (h.style.display = "block"),
                we.appendChild(y).appendChild(b).appendChild(h),
                (m = D.getComputedStyle(b)),
                (a =
                  parseInt(m.height, 10) +
                    parseInt(m.borderTopWidth, 10) +
                    parseInt(m.borderBottomWidth, 10) ===
                  b.offsetHeight),
                we.removeChild(y)),
              a
            );
          },
        }));
    })();
    function Ge(e, t, n) {
      var r,
        o,
        u,
        a,
        c = Ct.test(t),
        f = e.style;
      return (
        (n = n || st(e)),
        n &&
          ((a = n.getPropertyValue(t) || n[t]),
          c && a && (a = a.replace(Be, "$1") || void 0),
          a === "" && !He(e) && (a = i.style(e, t)),
          !L.pixelBoxStyles() &&
            Tt.test(a) &&
            ar.test(t) &&
            ((r = f.width),
            (o = f.minWidth),
            (u = f.maxWidth),
            (f.minWidth = f.maxWidth = f.width = a),
            (a = n.width),
            (f.width = r),
            (f.minWidth = o),
            (f.maxWidth = u))),
        a !== void 0 ? a + "" : a
      );
    }
    function fn(e, t) {
      return {
        get: function () {
          if (e()) {
            delete this.get;
            return;
          }
          return (this.get = t).apply(this, arguments);
        },
      };
    }
    var cn = ["Webkit", "Moz", "ms"],
      ln = j.createElement("div").style,
      dn = {};
    function sr(e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = cn.length; n--; )
        if (((e = cn[n] + t), e in ln)) return e;
    }
    function wt(e) {
      var t = i.cssProps[e] || dn[e];
      return t || (e in ln ? e : (dn[e] = sr(e) || e));
    }
    var fr = /^(none|table(?!-c[ea]).+)/,
      cr = { position: "absolute", visibility: "hidden", display: "block" },
      pn = { letterSpacing: "0", fontWeight: "400" };
    function hn(e, t, n) {
      var r = Ve.exec(t);
      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function St(e, t, n, r, o, u) {
      var a = t === "width" ? 1 : 0,
        c = 0,
        f = 0,
        d = 0;
      if (n === (r ? "border" : "content")) return 0;
      for (; a < 4; a += 2)
        n === "margin" && (d += i.css(e, n + ve[a], !0, o)),
          r
            ? (n === "content" && (f -= i.css(e, "padding" + ve[a], !0, o)),
              n !== "margin" &&
                (f -= i.css(e, "border" + ve[a] + "Width", !0, o)))
            : ((f += i.css(e, "padding" + ve[a], !0, o)),
              n !== "padding"
                ? (f += i.css(e, "border" + ve[a] + "Width", !0, o))
                : (c += i.css(e, "border" + ve[a] + "Width", !0, o)));
      return (
        !r &&
          u >= 0 &&
          (f +=
            Math.max(
              0,
              Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - u - f - c - 0.5
              )
            ) || 0),
        f + d
      );
    }
    function gn(e, t, n) {
      var r = st(e),
        o = !L.boxSizingReliable() || n,
        u = o && i.css(e, "boxSizing", !1, r) === "border-box",
        a = u,
        c = Ge(e, t, r),
        f = "offset" + t[0].toUpperCase() + t.slice(1);
      if (Tt.test(c)) {
        if (!n) return c;
        c = "auto";
      }
      return (
        ((!L.boxSizingReliable() && u) ||
          (!L.reliableTrDimensions() && B(e, "tr")) ||
          c === "auto" ||
          (!parseFloat(c) && i.css(e, "display", !1, r) === "inline")) &&
          e.getClientRects().length &&
          ((u = i.css(e, "boxSizing", !1, r) === "border-box"),
          (a = f in e),
          a && (c = e[f])),
        (c = parseFloat(c) || 0),
        c + St(e, t, n || (u ? "border" : "content"), a, r, c) + "px"
      );
    }
    i.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = Ge(e, "opacity");
              return n === "" ? "1" : n;
            }
          },
        },
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
        strokeOpacity: !0,
      },
      cssProps: {},
      style: function (e, t, n, r) {
        if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
          var o,
            u,
            a,
            c = se(t),
            f = Ct.test(t),
            d = e.style;
          if (
            (f || (t = wt(c)),
            (a = i.cssHooks[t] || i.cssHooks[c]),
            n !== void 0)
          ) {
            if (
              ((u = typeof n),
              u === "string" &&
                (o = Ve.exec(n)) &&
                o[1] &&
                ((n = Kt(e, t, o)), (u = "number")),
              n == null || n !== n)
            )
              return;
            u === "number" &&
              !f &&
              (n += (o && o[3]) || (i.cssNumber[c] ? "" : "px")),
              !L.clearCloneStyle &&
                n === "" &&
                t.indexOf("background") === 0 &&
                (d[t] = "inherit"),
              (!a || !("set" in a) || (n = a.set(e, n, r)) !== void 0) &&
                (f ? d.setProperty(t, n) : (d[t] = n));
          } else
            return a && "get" in a && (o = a.get(e, !1, r)) !== void 0
              ? o
              : d[t];
        }
      },
      css: function (e, t, n, r) {
        var o,
          u,
          a,
          c = se(t),
          f = Ct.test(t);
        return (
          f || (t = wt(c)),
          (a = i.cssHooks[t] || i.cssHooks[c]),
          a && "get" in a && (o = a.get(e, !0, n)),
          o === void 0 && (o = Ge(e, t, r)),
          o === "normal" && t in pn && (o = pn[t]),
          n === "" || n
            ? ((u = parseFloat(o)), n === !0 || isFinite(u) ? u || 0 : o)
            : o
        );
      },
    }),
      i.each(["height", "width"], function (e, t) {
        i.cssHooks[t] = {
          get: function (n, r, o) {
            if (r)
              return fr.test(i.css(n, "display")) &&
                (!n.getClientRects().length || !n.getBoundingClientRect().width)
                ? sn(n, cr, function () {
                    return gn(n, t, o);
                  })
                : gn(n, t, o);
          },
          set: function (n, r, o) {
            var u,
              a = st(n),
              c = !L.scrollboxSize() && a.position === "absolute",
              f = c || o,
              d = f && i.css(n, "boxSizing", !1, a) === "border-box",
              y = o ? St(n, t, o, d, a) : 0;
            return (
              d &&
                c &&
                (y -= Math.ceil(
                  n["offset" + t[0].toUpperCase() + t.slice(1)] -
                    parseFloat(a[t]) -
                    St(n, t, "border", !1, a) -
                    0.5
                )),
              y &&
                (u = Ve.exec(r)) &&
                (u[3] || "px") !== "px" &&
                ((n.style[t] = r), (r = i.css(n, t))),
              hn(n, r, y)
            );
          },
        };
      }),
      (i.cssHooks.marginLeft = fn(L.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(Ge(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                sn(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      i.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (i.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var r = 0, o = {}, u = typeof n == "string" ? n.split(" ") : [n];
              r < 4;
              r++
            )
              o[e + ve[r] + t] = u[r] || u[r - 2] || u[0];
            return o;
          },
        }),
          e !== "margin" && (i.cssHooks[e + t].set = hn);
      }),
      i.fn.extend({
        css: function (e, t) {
          return ye(
            this,
            function (n, r, o) {
              var u,
                a,
                c = {},
                f = 0;
              if (Array.isArray(r)) {
                for (u = st(n), a = r.length; f < a; f++)
                  c[r[f]] = i.css(n, r[f], !1, u);
                return c;
              }
              return o !== void 0 ? i.style(n, r, o) : i.css(n, r);
            },
            e,
            t,
            arguments.length > 1
          );
        },
      });
    function Z(e, t, n, r, o) {
      return new Z.prototype.init(e, t, n, r, o);
    }
    (i.Tween = Z),
      (Z.prototype = {
        constructor: Z,
        init: function (e, t, n, r, o, u) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = o || i.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = u || (i.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = Z.propHooks[this.prop];
          return e && e.get ? e.get(this) : Z.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = Z.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  i.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Z.propHooks._default.set(this),
            this
          );
        },
      }),
      (Z.prototype.init.prototype = Z.prototype),
      (Z.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return e.elem.nodeType !== 1 ||
              (e.elem[e.prop] != null && e.elem.style[e.prop] == null)
              ? e.elem[e.prop]
              : ((t = i.css(e.elem, e.prop, "")), !t || t === "auto" ? 0 : t);
          },
          set: function (e) {
            i.fx.step[e.prop]
              ? i.fx.step[e.prop](e)
              : e.elem.nodeType === 1 &&
                (i.cssHooks[e.prop] || e.elem.style[wt(e.prop)] != null)
              ? i.style(e.elem, e.prop, e.now + e.unit)
              : (e.elem[e.prop] = e.now);
          },
        },
      }),
      (Z.propHooks.scrollTop = Z.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (i.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (i.fx = Z.prototype.init),
      (i.fx.step = {});
    var _e,
      ft,
      lr = /^(?:toggle|show|hide)$/,
      dr = /queueHooks$/;
    function Et() {
      ft &&
        (j.hidden === !1 && D.requestAnimationFrame
          ? D.requestAnimationFrame(Et)
          : D.setTimeout(Et, i.fx.interval),
        i.fx.tick());
    }
    function yn() {
      return (
        D.setTimeout(function () {
          _e = void 0;
        }),
        (_e = Date.now())
      );
    }
    function ct(e, t) {
      var n,
        r = 0,
        o = { height: e };
      for (t = t ? 1 : 0; r < 4; r += 2 - t)
        (n = ve[r]), (o["margin" + n] = o["padding" + n] = e);
      return t && (o.opacity = o.width = e), o;
    }
    function vn(e, t, n) {
      for (
        var r,
          o = (ie.tweeners[t] || []).concat(ie.tweeners["*"]),
          u = 0,
          a = o.length;
        u < a;
        u++
      )
        if ((r = o[u].call(n, t, e))) return r;
    }
    function pr(e, t, n) {
      var r,
        o,
        u,
        a,
        c,
        f,
        d,
        y,
        b = "width" in t || "height" in t,
        h = this,
        m = {},
        N = e.style,
        R = e.nodeType && ut(e),
        O = S.get(e, "fxshow");
      n.queue ||
        ((a = i._queueHooks(e, "fx")),
        a.unqueued == null &&
          ((a.unqueued = 0),
          (c = a.empty.fire),
          (a.empty.fire = function () {
            a.unqueued || c();
          })),
        a.unqueued++,
        h.always(function () {
          h.always(function () {
            a.unqueued--, i.queue(e, "fx").length || a.empty.fire();
          });
        }));
      for (r in t)
        if (((o = t[r]), lr.test(o))) {
          if (
            (delete t[r],
            (u = u || o === "toggle"),
            o === (R ? "hide" : "show"))
          )
            if (o === "show" && O && O[r] !== void 0) R = !0;
            else continue;
          m[r] = (O && O[r]) || i.style(e, r);
        }
      if (((f = !i.isEmptyObject(t)), !(!f && i.isEmptyObject(m)))) {
        b &&
          e.nodeType === 1 &&
          ((n.overflow = [N.overflow, N.overflowX, N.overflowY]),
          (d = O && O.display),
          d == null && (d = S.get(e, "display")),
          (y = i.css(e, "display")),
          y === "none" &&
            (d
              ? (y = d)
              : (Pe([e], !0),
                (d = e.style.display || d),
                (y = i.css(e, "display")),
                Pe([e]))),
          (y === "inline" || (y === "inline-block" && d != null)) &&
            i.css(e, "float") === "none" &&
            (f ||
              (h.done(function () {
                N.display = d;
              }),
              d == null && ((y = N.display), (d = y === "none" ? "" : y))),
            (N.display = "inline-block"))),
          n.overflow &&
            ((N.overflow = "hidden"),
            h.always(function () {
              (N.overflow = n.overflow[0]),
                (N.overflowX = n.overflow[1]),
                (N.overflowY = n.overflow[2]);
            })),
          (f = !1);
        for (r in m)
          f ||
            (O
              ? "hidden" in O && (R = O.hidden)
              : (O = S.access(e, "fxshow", { display: d })),
            u && (O.hidden = !R),
            R && Pe([e], !0),
            h.done(function () {
              R || Pe([e]), S.remove(e, "fxshow");
              for (r in m) i.style(e, r, m[r]);
            })),
            (f = vn(R ? O[r] : 0, r, h)),
            r in O ||
              ((O[r] = f.start), R && ((f.end = f.start), (f.start = 0)));
      }
    }
    function hr(e, t) {
      var n, r, o, u, a;
      for (n in e)
        if (
          ((r = se(n)),
          (o = t[r]),
          (u = e[n]),
          Array.isArray(u) && ((o = u[1]), (u = e[n] = u[0])),
          n !== r && ((e[r] = u), delete e[n]),
          (a = i.cssHooks[r]),
          a && "expand" in a)
        ) {
          (u = a.expand(u)), delete e[r];
          for (n in u) n in e || ((e[n] = u[n]), (t[n] = o));
        } else t[r] = o;
    }
    function ie(e, t, n) {
      var r,
        o,
        u = 0,
        a = ie.prefilters.length,
        c = i.Deferred().always(function () {
          delete f.elem;
        }),
        f = function () {
          if (o) return !1;
          for (
            var b = _e || yn(),
              h = Math.max(0, d.startTime + d.duration - b),
              m = h / d.duration || 0,
              N = 1 - m,
              R = 0,
              O = d.tweens.length;
            R < O;
            R++
          )
            d.tweens[R].run(N);
          return (
            c.notifyWith(e, [d, N, h]),
            N < 1 && O
              ? h
              : (O || c.notifyWith(e, [d, 1, 0]), c.resolveWith(e, [d]), !1)
          );
        },
        d = c.promise({
          elem: e,
          props: i.extend({}, t),
          opts: i.extend(
            !0,
            { specialEasing: {}, easing: i.easing._default },
            n
          ),
          originalProperties: t,
          originalOptions: n,
          startTime: _e || yn(),
          duration: n.duration,
          tweens: [],
          createTween: function (b, h) {
            var m = i.Tween(
              e,
              d.opts,
              b,
              h,
              d.opts.specialEasing[b] || d.opts.easing
            );
            return d.tweens.push(m), m;
          },
          stop: function (b) {
            var h = 0,
              m = b ? d.tweens.length : 0;
            if (o) return this;
            for (o = !0; h < m; h++) d.tweens[h].run(1);
            return (
              b
                ? (c.notifyWith(e, [d, 1, 0]), c.resolveWith(e, [d, b]))
                : c.rejectWith(e, [d, b]),
              this
            );
          },
        }),
        y = d.props;
      for (hr(y, d.opts.specialEasing); u < a; u++)
        if (((r = ie.prefilters[u].call(d, e, y, d.opts)), r))
          return (
            q(r.stop) &&
              (i._queueHooks(d.elem, d.opts.queue).stop = r.stop.bind(r)),
            r
          );
      return (
        i.map(y, vn, d),
        q(d.opts.start) && d.opts.start.call(e, d),
        d
          .progress(d.opts.progress)
          .done(d.opts.done, d.opts.complete)
          .fail(d.opts.fail)
          .always(d.opts.always),
        i.fx.timer(i.extend(f, { elem: e, anim: d, queue: d.opts.queue })),
        d
      );
    }
    (i.Animation = i.extend(ie, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return Kt(n.elem, e, Ve.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        q(e) ? ((t = e), (e = ["*"])) : (e = e.match(ae));
        for (var n, r = 0, o = e.length; r < o; r++)
          (n = e[r]),
            (ie.tweeners[n] = ie.tweeners[n] || []),
            ie.tweeners[n].unshift(t);
      },
      prefilters: [pr],
      prefilter: function (e, t) {
        t ? ie.prefilters.unshift(e) : ie.prefilters.push(e);
      },
    })),
      (i.speed = function (e, t, n) {
        var r =
          e && typeof e == "object"
            ? i.extend({}, e)
            : {
                complete: n || (!n && t) || (q(e) && e),
                duration: e,
                easing: (n && t) || (t && !q(t) && t),
              };
        return (
          i.fx.off
            ? (r.duration = 0)
            : typeof r.duration != "number" &&
              (r.duration in i.fx.speeds
                ? (r.duration = i.fx.speeds[r.duration])
                : (r.duration = i.fx.speeds._default)),
          (r.queue == null || r.queue === !0) && (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            q(r.old) && r.old.call(this), r.queue && i.dequeue(this, r.queue);
          }),
          r
        );
      }),
      i.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(ut)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, r) {
          var o = i.isEmptyObject(e),
            u = i.speed(t, n, r),
            a = function () {
              var c = ie(this, i.extend({}, e), u);
              (o || S.get(this, "finish")) && c.stop(!0);
            };
          return (
            (a.finish = a),
            o || u.queue === !1 ? this.each(a) : this.queue(u.queue, a)
          );
        },
        stop: function (e, t, n) {
          var r = function (o) {
            var u = o.stop;
            delete o.stop, u(n);
          };
          return (
            typeof e != "string" && ((n = t), (t = e), (e = void 0)),
            t && this.queue(e || "fx", []),
            this.each(function () {
              var o = !0,
                u = e != null && e + "queueHooks",
                a = i.timers,
                c = S.get(this);
              if (u) c[u] && c[u].stop && r(c[u]);
              else for (u in c) c[u] && c[u].stop && dr.test(u) && r(c[u]);
              for (u = a.length; u--; )
                a[u].elem === this &&
                  (e == null || a[u].queue === e) &&
                  (a[u].anim.stop(n), (o = !1), a.splice(u, 1));
              (o || !n) && i.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            e !== !1 && (e = e || "fx"),
            this.each(function () {
              var t,
                n = S.get(this),
                r = n[e + "queue"],
                o = n[e + "queueHooks"],
                u = i.timers,
                a = r ? r.length : 0;
              for (
                n.finish = !0,
                  i.queue(this, e, []),
                  o && o.stop && o.stop.call(this, !0),
                  t = u.length;
                t--;

              )
                u[t].elem === this &&
                  u[t].queue === e &&
                  (u[t].anim.stop(!0), u.splice(t, 1));
              for (t = 0; t < a; t++)
                r[t] && r[t].finish && r[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      i.each(["toggle", "show", "hide"], function (e, t) {
        var n = i.fn[t];
        i.fn[t] = function (r, o, u) {
          return r == null || typeof r == "boolean"
            ? n.apply(this, arguments)
            : this.animate(ct(t, !0), r, o, u);
        };
      }),
      i.each(
        {
          slideDown: ct("show"),
          slideUp: ct("hide"),
          slideToggle: ct("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          i.fn[e] = function (n, r, o) {
            return this.animate(t, n, r, o);
          };
        }
      ),
      (i.timers = []),
      (i.fx.tick = function () {
        var e,
          t = 0,
          n = i.timers;
        for (_e = Date.now(); t < n.length; t++)
          (e = n[t]), !e() && n[t] === e && n.splice(t--, 1);
        n.length || i.fx.stop(), (_e = void 0);
      }),
      (i.fx.timer = function (e) {
        i.timers.push(e), i.fx.start();
      }),
      (i.fx.interval = 13),
      (i.fx.start = function () {
        ft || ((ft = !0), Et());
      }),
      (i.fx.stop = function () {
        ft = null;
      }),
      (i.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (i.fn.delay = function (e, t) {
        return (
          (e = (i.fx && i.fx.speeds[e]) || e),
          (t = t || "fx"),
          this.queue(t, function (n, r) {
            var o = D.setTimeout(n, e);
            r.stop = function () {
              D.clearTimeout(o);
            };
          })
        );
      }),
      (function () {
        var e = j.createElement("input"),
          t = j.createElement("select"),
          n = t.appendChild(j.createElement("option"));
        (e.type = "checkbox"),
          (L.checkOn = e.value !== ""),
          (L.optSelected = n.selected),
          (e = j.createElement("input")),
          (e.value = "t"),
          (e.type = "radio"),
          (L.radioValue = e.value === "t");
      })();
    var bn,
      Qe = i.expr.attrHandle;
    i.fn.extend({
      attr: function (e, t) {
        return ye(this, i.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          i.removeAttr(this, e);
        });
      },
    }),
      i.extend({
        attr: function (e, t, n) {
          var r,
            o,
            u = e.nodeType;
          if (!(u === 3 || u === 8 || u === 2)) {
            if (typeof e.getAttribute > "u") return i.prop(e, t, n);
            if (
              ((u !== 1 || !i.isXMLDoc(e)) &&
                (o =
                  i.attrHooks[t.toLowerCase()] ||
                  (i.expr.match.bool.test(t) ? bn : void 0)),
              n !== void 0)
            ) {
              if (n === null) {
                i.removeAttr(e, t);
                return;
              }
              return o && "set" in o && (r = o.set(e, n, t)) !== void 0
                ? r
                : (e.setAttribute(t, n + ""), n);
            }
            return o && "get" in o && (r = o.get(e, t)) !== null
              ? r
              : ((r = i.find.attr(e, t)), r ?? void 0);
          }
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!L.radioValue && t === "radio" && B(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            r = 0,
            o = t && t.match(ae);
          if (o && e.nodeType === 1)
            for (; (n = o[r++]); ) e.removeAttribute(n);
        },
      }),
      (bn = {
        set: function (e, t, n) {
          return t === !1 ? i.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      i.each(i.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Qe[t] || i.find.attr;
        Qe[t] = function (r, o, u) {
          var a,
            c,
            f = o.toLowerCase();
          return (
            u ||
              ((c = Qe[f]),
              (Qe[f] = a),
              (a = n(r, o, u) != null ? f : null),
              (Qe[f] = c)),
            a
          );
        };
      });
    var gr = /^(?:input|select|textarea|button)$/i,
      yr = /^(?:a|area)$/i;
    i.fn.extend({
      prop: function (e, t) {
        return ye(this, i.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[i.propFix[e] || e];
        });
      },
    }),
      i.extend({
        prop: function (e, t, n) {
          var r,
            o,
            u = e.nodeType;
          if (!(u === 3 || u === 8 || u === 2))
            return (
              (u !== 1 || !i.isXMLDoc(e)) &&
                ((t = i.propFix[t] || t), (o = i.propHooks[t])),
              n !== void 0
                ? o && "set" in o && (r = o.set(e, n, t)) !== void 0
                  ? r
                  : (e[t] = n)
                : o && "get" in o && (r = o.get(e, t)) !== null
                ? r
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = i.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : gr.test(e.nodeName) || (yr.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      L.optSelected ||
        (i.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      i.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          i.propFix[this.toLowerCase()] = this;
        }
      );
    function Se(e) {
      var t = e.match(ae) || [];
      return t.join(" ");
    }
    function Ee(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function At(e) {
      return Array.isArray(e)
        ? e
        : typeof e == "string"
        ? e.match(ae) || []
        : [];
    }
    i.fn.extend({
      addClass: function (e) {
        var t, n, r, o, u, a;
        return q(e)
          ? this.each(function (c) {
              i(this).addClass(e.call(this, c, Ee(this)));
            })
          : ((t = At(e)),
            t.length
              ? this.each(function () {
                  if (
                    ((r = Ee(this)),
                    (n = this.nodeType === 1 && " " + Se(r) + " "),
                    n)
                  ) {
                    for (u = 0; u < t.length; u++)
                      (o = t[u]),
                        n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                    (a = Se(n)), r !== a && this.setAttribute("class", a);
                  }
                })
              : this);
      },
      removeClass: function (e) {
        var t, n, r, o, u, a;
        return q(e)
          ? this.each(function (c) {
              i(this).removeClass(e.call(this, c, Ee(this)));
            })
          : arguments.length
          ? ((t = At(e)),
            t.length
              ? this.each(function () {
                  if (
                    ((r = Ee(this)),
                    (n = this.nodeType === 1 && " " + Se(r) + " "),
                    n)
                  ) {
                    for (u = 0; u < t.length; u++)
                      for (o = t[u]; n.indexOf(" " + o + " ") > -1; )
                        n = n.replace(" " + o + " ", " ");
                    (a = Se(n)), r !== a && this.setAttribute("class", a);
                  }
                })
              : this)
          : this.attr("class", "");
      },
      toggleClass: function (e, t) {
        var n,
          r,
          o,
          u,
          a = typeof e,
          c = a === "string" || Array.isArray(e);
        return q(e)
          ? this.each(function (f) {
              i(this).toggleClass(e.call(this, f, Ee(this), t), t);
            })
          : typeof t == "boolean" && c
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : ((n = At(e)),
            this.each(function () {
              if (c)
                for (u = i(this), o = 0; o < n.length; o++)
                  (r = n[o]), u.hasClass(r) ? u.removeClass(r) : u.addClass(r);
              else
                (e === void 0 || a === "boolean") &&
                  ((r = Ee(this)),
                  r && S.set(this, "__className__", r),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      r || e === !1 ? "" : S.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = " " + e + " "; (n = this[r++]); )
          if (n.nodeType === 1 && (" " + Se(Ee(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
    var vr = /\r/g;
    i.fn.extend({
      val: function (e) {
        var t,
          n,
          r,
          o = this[0];
        return arguments.length
          ? ((r = q(e)),
            this.each(function (u) {
              var a;
              this.nodeType === 1 &&
                (r ? (a = e.call(this, u, i(this).val())) : (a = e),
                a == null
                  ? (a = "")
                  : typeof a == "number"
                  ? (a += "")
                  : Array.isArray(a) &&
                    (a = i.map(a, function (c) {
                      return c == null ? "" : c + "";
                    })),
                (t =
                  i.valHooks[this.type] ||
                  i.valHooks[this.nodeName.toLowerCase()]),
                (!t || !("set" in t) || t.set(this, a, "value") === void 0) &&
                  (this.value = a));
            }))
          : o
          ? ((t = i.valHooks[o.type] || i.valHooks[o.nodeName.toLowerCase()]),
            t && "get" in t && (n = t.get(o, "value")) !== void 0
              ? n
              : ((n = o.value),
                typeof n == "string" ? n.replace(vr, "") : n ?? ""))
          : void 0;
      },
    }),
      i.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = i.find.attr(e, "value");
              return t ?? Se(i.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r,
                o = e.options,
                u = e.selectedIndex,
                a = e.type === "select-one",
                c = a ? null : [],
                f = a ? u + 1 : o.length;
              for (u < 0 ? (r = f) : (r = a ? u : 0); r < f; r++)
                if (
                  ((n = o[r]),
                  (n.selected || r === u) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !B(n.parentNode, "optgroup")))
                ) {
                  if (((t = i(n).val()), a)) return t;
                  c.push(t);
                }
              return c;
            },
            set: function (e, t) {
              for (
                var n, r, o = e.options, u = i.makeArray(t), a = o.length;
                a--;

              )
                (r = o[a]),
                  (r.selected = i.inArray(i.valHooks.option.get(r), u) > -1) &&
                    (n = !0);
              return n || (e.selectedIndex = -1), u;
            },
          },
        },
      }),
      i.each(["radio", "checkbox"], function () {
        (i.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = i.inArray(i(e).val(), t) > -1);
          },
        }),
          L.checkOn ||
            (i.valHooks[this].get = function (e) {
              return e.getAttribute("value") === null ? "on" : e.value;
            });
      });
    var Ye = D.location,
      mn = { guid: Date.now() },
      Dt = /\?/;
    i.parseXML = function (e) {
      var t, n;
      if (!e || typeof e != "string") return null;
      try {
        t = new D.DOMParser().parseFromString(e, "text/xml");
      } catch {}
      return (
        (n = t && t.getElementsByTagName("parsererror")[0]),
        (!t || n) &&
          i.error(
            "Invalid XML: " +
              (n
                ? i.map(n.childNodes, function (r) {
                    return r.textContent;
                  }).join(`
`)
                : e)
          ),
        t
      );
    };
    var xn = /^(?:focusinfocus|focusoutblur)$/,
      Tn = function (e) {
        e.stopPropagation();
      };
    i.extend(i.event, {
      trigger: function (e, t, n, r) {
        var o,
          u,
          a,
          c,
          f,
          d,
          y,
          b,
          h = [n || j],
          m = $e.call(e, "type") ? e.type : e,
          N = $e.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          ((u = b = a = n = n || j),
          !(n.nodeType === 3 || n.nodeType === 8) &&
            !xn.test(m + i.event.triggered) &&
            (m.indexOf(".") > -1 &&
              ((N = m.split(".")), (m = N.shift()), N.sort()),
            (f = m.indexOf(":") < 0 && "on" + m),
            (e = e[i.expando] ? e : new i.Event(m, typeof e == "object" && e)),
            (e.isTrigger = r ? 2 : 3),
            (e.namespace = N.join(".")),
            (e.rnamespace = e.namespace
              ? new RegExp("(^|\\.)" + N.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (e.result = void 0),
            e.target || (e.target = n),
            (t = t == null ? [e] : i.makeArray(t, [e])),
            (y = i.event.special[m] || {}),
            !(!r && y.trigger && y.trigger.apply(n, t) === !1)))
        ) {
          if (!r && !y.noBubble && !je(n)) {
            for (
              c = y.delegateType || m, xn.test(c + m) || (u = u.parentNode);
              u;
              u = u.parentNode
            )
              h.push(u), (a = u);
            a === (n.ownerDocument || j) &&
              h.push(a.defaultView || a.parentWindow || D);
          }
          for (o = 0; (u = h[o++]) && !e.isPropagationStopped(); )
            (b = u),
              (e.type = o > 1 ? c : y.bindType || m),
              (d =
                (S.get(u, "events") || Object.create(null))[e.type] &&
                S.get(u, "handle")),
              d && d.apply(u, t),
              (d = f && u[f]),
              d &&
                d.apply &&
                ze(u) &&
                ((e.result = d.apply(u, t)),
                e.result === !1 && e.preventDefault());
          return (
            (e.type = m),
            !r &&
              !e.isDefaultPrevented() &&
              (!y._default || y._default.apply(h.pop(), t) === !1) &&
              ze(n) &&
              f &&
              q(n[m]) &&
              !je(n) &&
              ((a = n[f]),
              a && (n[f] = null),
              (i.event.triggered = m),
              e.isPropagationStopped() && b.addEventListener(m, Tn),
              n[m](),
              e.isPropagationStopped() && b.removeEventListener(m, Tn),
              (i.event.triggered = void 0),
              a && (n[f] = a)),
            e.result
          );
        }
      },
      simulate: function (e, t, n) {
        var r = i.extend(new i.Event(), n, { type: e, isSimulated: !0 });
        i.event.trigger(r, null, t);
      },
    }),
      i.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            i.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return i.event.trigger(e, t, n, !0);
        },
      });
    var br = /\[\]$/,
      Cn = /\r?\n/g,
      mr = /^(?:submit|button|image|reset|file)$/i,
      xr = /^(?:input|select|textarea|keygen)/i;
    function Nt(e, t, n, r) {
      var o;
      if (Array.isArray(t))
        i.each(t, function (u, a) {
          n || br.test(e)
            ? r(e, a)
            : Nt(
                e + "[" + (typeof a == "object" && a != null ? u : "") + "]",
                a,
                n,
                r
              );
        });
      else if (!n && Le(t) === "object")
        for (o in t) Nt(e + "[" + o + "]", t[o], n, r);
      else r(e, t);
    }
    (i.param = function (e, t) {
      var n,
        r = [],
        o = function (u, a) {
          var c = q(a) ? a() : a;
          r[r.length] =
            encodeURIComponent(u) + "=" + encodeURIComponent(c ?? "");
        };
      if (e == null) return "";
      if (Array.isArray(e) || (e.jquery && !i.isPlainObject(e)))
        i.each(e, function () {
          o(this.name, this.value);
        });
      else for (n in e) Nt(n, e[n], t, o);
      return r.join("&");
    }),
      i.fn.extend({
        serialize: function () {
          return i.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = i.prop(this, "elements");
            return e ? i.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !i(this).is(":disabled") &&
                xr.test(this.nodeName) &&
                !mr.test(e) &&
                (this.checked || !Xe.test(e))
              );
            })
            .map(function (e, t) {
              var n = i(this).val();
              return n == null
                ? null
                : Array.isArray(n)
                ? i.map(n, function (r) {
                    return {
                      name: t.name,
                      value: r.replace(
                        Cn,
                        `\r
`
                      ),
                    };
                  })
                : {
                    name: t.name,
                    value: n.replace(
                      Cn,
                      `\r
`
                    ),
                  };
            })
            .get();
        },
      });
    var Tr = /%20/g,
      Cr = /#.*$/,
      wr = /([?&])_=[^&]*/,
      Sr = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Er = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ar = /^(?:GET|HEAD)$/,
      Dr = /^\/\//,
      wn = {},
      kt = {},
      Sn = "*/".concat("*"),
      jt = j.createElement("a");
    jt.href = Ye.href;
    function En(e) {
      return function (t, n) {
        typeof t != "string" && ((n = t), (t = "*"));
        var r,
          o = 0,
          u = t.toLowerCase().match(ae) || [];
        if (q(n))
          for (; (r = u[o++]); )
            r[0] === "+"
              ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
              : (e[r] = e[r] || []).push(n);
      };
    }
    function An(e, t, n, r) {
      var o = {},
        u = e === kt;
      function a(c) {
        var f;
        return (
          (o[c] = !0),
          i.each(e[c] || [], function (d, y) {
            var b = y(t, n, r);
            if (typeof b == "string" && !u && !o[b])
              return t.dataTypes.unshift(b), a(b), !1;
            if (u) return !(f = b);
          }),
          f
        );
      }
      return a(t.dataTypes[0]) || (!o["*"] && a("*"));
    }
    function Lt(e, t) {
      var n,
        r,
        o = i.ajaxSettings.flatOptions || {};
      for (n in t) t[n] !== void 0 && ((o[n] ? e : r || (r = {}))[n] = t[n]);
      return r && i.extend(!0, e, r), e;
    }
    function Nr(e, t, n) {
      for (var r, o, u, a, c = e.contents, f = e.dataTypes; f[0] === "*"; )
        f.shift(),
          r === void 0 &&
            (r = e.mimeType || t.getResponseHeader("Content-Type"));
      if (r) {
        for (o in c)
          if (c[o] && c[o].test(r)) {
            f.unshift(o);
            break;
          }
      }
      if (f[0] in n) u = f[0];
      else {
        for (o in n) {
          if (!f[0] || e.converters[o + " " + f[0]]) {
            u = o;
            break;
          }
          a || (a = o);
        }
        u = u || a;
      }
      if (u) return u !== f[0] && f.unshift(u), n[u];
    }
    function kr(e, t, n, r) {
      var o,
        u,
        a,
        c,
        f,
        d = {},
        y = e.dataTypes.slice();
      if (y[1]) for (a in e.converters) d[a.toLowerCase()] = e.converters[a];
      for (u = y.shift(); u; )
        if (
          (e.responseFields[u] && (n[e.responseFields[u]] = t),
          !f && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (f = u),
          (u = y.shift()),
          u)
        ) {
          if (u === "*") u = f;
          else if (f !== "*" && f !== u) {
            if (((a = d[f + " " + u] || d["* " + u]), !a)) {
              for (o in d)
                if (
                  ((c = o.split(" ")),
                  c[1] === u && ((a = d[f + " " + c[0]] || d["* " + c[0]]), a))
                ) {
                  a === !0
                    ? (a = d[o])
                    : d[o] !== !0 && ((u = c[0]), y.unshift(c[1]));
                  break;
                }
            }
            if (a !== !0)
              if (a && e.throws) t = a(t);
              else
                try {
                  t = a(t);
                } catch (b) {
                  return {
                    state: "parsererror",
                    error: a ? b : "No conversion from " + f + " to " + u,
                  };
                }
          }
        }
      return { state: "success", data: t };
    }
    i.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Ye.href,
        type: "GET",
        isLocal: Er.test(Ye.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Sn,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": i.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Lt(Lt(e, i.ajaxSettings), t) : Lt(i.ajaxSettings, e);
      },
      ajaxPrefilter: En(wn),
      ajaxTransport: En(kt),
      ajax: function (e, t) {
        typeof e == "object" && ((t = e), (e = void 0)), (t = t || {});
        var n,
          r,
          o,
          u,
          a,
          c,
          f,
          d,
          y,
          b,
          h = i.ajaxSetup({}, t),
          m = h.context || h,
          N = h.context && (m.nodeType || m.jquery) ? i(m) : i.event,
          R = i.Deferred(),
          O = i.Callbacks("once memory"),
          G = h.statusCode || {},
          V = {},
          fe = {},
          ce = "canceled",
          M = {
            readyState: 0,
            getResponseHeader: function (I) {
              var z;
              if (f) {
                if (!u)
                  for (u = {}; (z = Sr.exec(o)); )
                    u[z[1].toLowerCase() + " "] = (
                      u[z[1].toLowerCase() + " "] || []
                    ).concat(z[2]);
                z = u[I.toLowerCase() + " "];
              }
              return z == null ? null : z.join(", ");
            },
            getAllResponseHeaders: function () {
              return f ? o : null;
            },
            setRequestHeader: function (I, z) {
              return (
                f == null &&
                  ((I = fe[I.toLowerCase()] = fe[I.toLowerCase()] || I),
                  (V[I] = z)),
                this
              );
            },
            overrideMimeType: function (I) {
              return f == null && (h.mimeType = I), this;
            },
            statusCode: function (I) {
              var z;
              if (I)
                if (f) M.always(I[M.status]);
                else for (z in I) G[z] = [G[z], I[z]];
              return this;
            },
            abort: function (I) {
              var z = I || ce;
              return n && n.abort(z), Ae(0, z), this;
            },
          };
        if (
          (R.promise(M),
          (h.url = ((e || h.url || Ye.href) + "").replace(
            Dr,
            Ye.protocol + "//"
          )),
          (h.type = t.method || t.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(ae) || [""]),
          h.crossDomain == null)
        ) {
          c = j.createElement("a");
          try {
            (c.href = h.url),
              (c.href = c.href),
              (h.crossDomain =
                jt.protocol + "//" + jt.host != c.protocol + "//" + c.host);
          } catch {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            typeof h.data != "string" &&
            (h.data = i.param(h.data, h.traditional)),
          An(wn, h, t, M),
          f)
        )
          return M;
        (d = i.event && h.global),
          d && i.active++ === 0 && i.event.trigger("ajaxStart"),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !Ar.test(h.type)),
          (r = h.url.replace(Cr, "")),
          h.hasContent
            ? h.data &&
              h.processData &&
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) === 0 &&
              (h.data = h.data.replace(Tr, "+"))
            : ((b = h.url.slice(r.length)),
              h.data &&
                (h.processData || typeof h.data == "string") &&
                ((r += (Dt.test(r) ? "&" : "?") + h.data), delete h.data),
              h.cache === !1 &&
                ((r = r.replace(wr, "$1")),
                (b = (Dt.test(r) ? "&" : "?") + "_=" + mn.guid++ + b)),
              (h.url = r + b)),
          h.ifModified &&
            (i.lastModified[r] &&
              M.setRequestHeader("If-Modified-Since", i.lastModified[r]),
            i.etag[r] && M.setRequestHeader("If-None-Match", i.etag[r])),
          ((h.data && h.hasContent && h.contentType !== !1) || t.contentType) &&
            M.setRequestHeader("Content-Type", h.contentType),
          M.setRequestHeader(
            "Accept",
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
                  (h.dataTypes[0] !== "*" ? ", " + Sn + "; q=0.01" : "")
              : h.accepts["*"]
          );
        for (y in h.headers) M.setRequestHeader(y, h.headers[y]);
        if (h.beforeSend && (h.beforeSend.call(m, M, h) === !1 || f))
          return M.abort();
        if (
          ((ce = "abort"),
          O.add(h.complete),
          M.done(h.success),
          M.fail(h.error),
          (n = An(kt, h, t, M)),
          !n)
        )
          Ae(-1, "No Transport");
        else {
          if (((M.readyState = 1), d && N.trigger("ajaxSend", [M, h]), f))
            return M;
          h.async &&
            h.timeout > 0 &&
            (a = D.setTimeout(function () {
              M.abort("timeout");
            }, h.timeout));
          try {
            (f = !1), n.send(V, Ae);
          } catch (I) {
            if (f) throw I;
            Ae(-1, I);
          }
        }
        function Ae(I, z, Ke, Ot) {
          var le,
            Ze,
            de,
            xe,
            Te,
            ne = z;
          f ||
            ((f = !0),
            a && D.clearTimeout(a),
            (n = void 0),
            (o = Ot || ""),
            (M.readyState = I > 0 ? 4 : 0),
            (le = (I >= 200 && I < 300) || I === 304),
            Ke && (xe = Nr(h, M, Ke)),
            !le &&
              i.inArray("script", h.dataTypes) > -1 &&
              i.inArray("json", h.dataTypes) < 0 &&
              (h.converters["text script"] = function () {}),
            (xe = kr(h, xe, M, le)),
            le
              ? (h.ifModified &&
                  ((Te = M.getResponseHeader("Last-Modified")),
                  Te && (i.lastModified[r] = Te),
                  (Te = M.getResponseHeader("etag")),
                  Te && (i.etag[r] = Te)),
                I === 204 || h.type === "HEAD"
                  ? (ne = "nocontent")
                  : I === 304
                  ? (ne = "notmodified")
                  : ((ne = xe.state),
                    (Ze = xe.data),
                    (de = xe.error),
                    (le = !de)))
              : ((de = ne), (I || !ne) && ((ne = "error"), I < 0 && (I = 0))),
            (M.status = I),
            (M.statusText = (z || ne) + ""),
            le ? R.resolveWith(m, [Ze, ne, M]) : R.rejectWith(m, [M, ne, de]),
            M.statusCode(G),
            (G = void 0),
            d &&
              N.trigger(le ? "ajaxSuccess" : "ajaxError", [M, h, le ? Ze : de]),
            O.fireWith(m, [M, ne]),
            d &&
              (N.trigger("ajaxComplete", [M, h]),
              --i.active || i.event.trigger("ajaxStop")));
        }
        return M;
      },
      getJSON: function (e, t, n) {
        return i.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return i.get(e, void 0, t, "script");
      },
    }),
      i.each(["get", "post"], function (e, t) {
        i[t] = function (n, r, o, u) {
          return (
            q(r) && ((u = u || o), (o = r), (r = void 0)),
            i.ajax(
              i.extend(
                { url: n, type: t, dataType: u, data: r, success: o },
                i.isPlainObject(n) && n
              )
            )
          );
        };
      }),
      i.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers)
          t.toLowerCase() === "content-type" &&
            (e.contentType = e.headers[t] || "");
      }),
      (i._evalUrl = function (e, t, n) {
        return i.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (r) {
            i.globalEval(r, t, n);
          },
        });
      }),
      i.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (q(e) && (e = e.call(this[0])),
              (t = i(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var n = this; n.firstElementChild; )
                    n = n.firstElementChild;
                  return n;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (e) {
          return q(e)
            ? this.each(function (t) {
                i(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = i(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = q(e);
          return this.each(function (n) {
            i(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                i(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (i.expr.pseudos.hidden = function (e) {
        return !i.expr.pseudos.visible(e);
      }),
      (i.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (i.ajaxSettings.xhr = function () {
        try {
          return new D.XMLHttpRequest();
        } catch {}
      });
    var jr = { 0: 200, 1223: 204 },
      Je = i.ajaxSettings.xhr();
    (L.cors = !!Je && "withCredentials" in Je),
      (L.ajax = Je = !!Je),
      i.ajaxTransport(function (e) {
        var t, n;
        if (L.cors || (Je && !e.crossDomain))
          return {
            send: function (r, o) {
              var u,
                a = e.xhr();
              if (
                (a.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (u in e.xhrFields) a[u] = e.xhrFields[u];
              e.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(e.mimeType),
                !e.crossDomain &&
                  !r["X-Requested-With"] &&
                  (r["X-Requested-With"] = "XMLHttpRequest");
              for (u in r) a.setRequestHeader(u, r[u]);
              (t = function (c) {
                return function () {
                  t &&
                    ((t =
                      n =
                      a.onload =
                      a.onerror =
                      a.onabort =
                      a.ontimeout =
                      a.onreadystatechange =
                        null),
                    c === "abort"
                      ? a.abort()
                      : c === "error"
                      ? typeof a.status != "number"
                        ? o(0, "error")
                        : o(a.status, a.statusText)
                      : o(
                          jr[a.status] || a.status,
                          a.statusText,
                          (a.responseType || "text") !== "text" ||
                            typeof a.responseText != "string"
                            ? { binary: a.response }
                            : { text: a.responseText },
                          a.getAllResponseHeaders()
                        ));
                };
              }),
                (a.onload = t()),
                (n = a.onerror = a.ontimeout = t("error")),
                a.onabort !== void 0
                  ? (a.onabort = n)
                  : (a.onreadystatechange = function () {
                      a.readyState === 4 &&
                        D.setTimeout(function () {
                          t && n();
                        });
                    }),
                (t = t("abort"));
              try {
                a.send((e.hasContent && e.data) || null);
              } catch (c) {
                if (t) throw c;
              }
            },
            abort: function () {
              t && t();
            },
          };
      }),
      i.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      i.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return i.globalEval(e), e;
          },
        },
      }),
      i.ajaxPrefilter("script", function (e) {
        e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      i.ajaxTransport("script", function (e) {
        if (e.crossDomain || e.scriptAttrs) {
          var t, n;
          return {
            send: function (r, o) {
              (t = i("<script>")
                .attr(e.scriptAttrs || {})
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  "load error",
                  (n = function (u) {
                    t.remove(),
                      (n = null),
                      u && o(u.type === "error" ? 404 : 200, u.type);
                  })
                )),
                j.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    var Dn = [],
      qt = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Dn.pop() || i.expando + "_" + mn.guid++;
        return (this[e] = !0), e;
      },
    }),
      i.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r,
          o,
          u,
          a =
            e.jsonp !== !1 &&
            (qt.test(e.url)
              ? "url"
              : typeof e.data == "string" &&
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) === 0 &&
                qt.test(e.data) &&
                "data");
        if (a || e.dataTypes[0] === "jsonp")
          return (
            (r = e.jsonpCallback =
              q(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
            a
              ? (e[a] = e[a].replace(qt, "$1" + r))
              : e.jsonp !== !1 &&
                (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            (e.converters["script json"] = function () {
              return u || i.error(r + " was not called"), u[0];
            }),
            (e.dataTypes[0] = "json"),
            (o = D[r]),
            (D[r] = function () {
              u = arguments;
            }),
            n.always(function () {
              o === void 0 ? i(D).removeProp(r) : (D[r] = o),
                e[r] && ((e.jsonpCallback = t.jsonpCallback), Dn.push(r)),
                u && q(o) && o(u[0]),
                (u = o = void 0);
            }),
            "script"
          );
      }),
      (L.createHTMLDocument = (function () {
        var e = j.implementation.createHTMLDocument("").body;
        return (
          (e.innerHTML = "<form></form><form></form>"),
          e.childNodes.length === 2
        );
      })()),
      (i.parseHTML = function (e, t, n) {
        if (typeof e != "string") return [];
        typeof t == "boolean" && ((n = t), (t = !1));
        var r, o, u;
        return (
          t ||
            (L.createHTMLDocument
              ? ((t = j.implementation.createHTMLDocument("")),
                (r = t.createElement("base")),
                (r.href = j.location.href),
                t.head.appendChild(r))
              : (t = j)),
          (o = Vt.exec(e)),
          (u = !n && []),
          o
            ? [t.createElement(o[1])]
            : ((o = nn([e], t, u)),
              u && u.length && i(u).remove(),
              i.merge([], o.childNodes))
        );
      }),
      (i.fn.load = function (e, t, n) {
        var r,
          o,
          u,
          a = this,
          c = e.indexOf(" ");
        return (
          c > -1 && ((r = Se(e.slice(c))), (e = e.slice(0, c))),
          q(t)
            ? ((n = t), (t = void 0))
            : t && typeof t == "object" && (o = "POST"),
          a.length > 0 &&
            i
              .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
              .done(function (f) {
                (u = arguments),
                  a.html(r ? i("<div>").append(i.parseHTML(f)).find(r) : f);
              })
              .always(
                n &&
                  function (f, d) {
                    a.each(function () {
                      n.apply(this, u || [f.responseText, d, f]);
                    });
                  }
              ),
          this
        );
      }),
      (i.expr.pseudos.animated = function (e) {
        return i.grep(i.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (i.offset = {
        setOffset: function (e, t, n) {
          var r,
            o,
            u,
            a,
            c,
            f,
            d,
            y = i.css(e, "position"),
            b = i(e),
            h = {};
          y === "static" && (e.style.position = "relative"),
            (c = b.offset()),
            (u = i.css(e, "top")),
            (f = i.css(e, "left")),
            (d =
              (y === "absolute" || y === "fixed") &&
              (u + f).indexOf("auto") > -1),
            d
              ? ((r = b.position()), (a = r.top), (o = r.left))
              : ((a = parseFloat(u) || 0), (o = parseFloat(f) || 0)),
            q(t) && (t = t.call(e, n, i.extend({}, c))),
            t.top != null && (h.top = t.top - c.top + a),
            t.left != null && (h.left = t.left - c.left + o),
            "using" in t ? t.using.call(e, h) : b.css(h);
        },
      }),
      i.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return e === void 0
              ? this
              : this.each(function (o) {
                  i.offset.setOffset(this, e, o);
                });
          var t,
            n,
            r = this[0];
          if (r)
            return r.getClientRects().length
              ? ((t = r.getBoundingClientRect()),
                (n = r.ownerDocument.defaultView),
                { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
              : { top: 0, left: 0 };
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n,
              r = this[0],
              o = { top: 0, left: 0 };
            if (i.css(r, "position") === "fixed") t = r.getBoundingClientRect();
            else {
              for (
                t = this.offset(),
                  n = r.ownerDocument,
                  e = r.offsetParent || n.documentElement;
                e &&
                (e === n.body || e === n.documentElement) &&
                i.css(e, "position") === "static";

              )
                e = e.parentNode;
              e &&
                e !== r &&
                e.nodeType === 1 &&
                ((o = i(e).offset()),
                (o.top += i.css(e, "borderTopWidth", !0)),
                (o.left += i.css(e, "borderLeftWidth", !0)));
            }
            return {
              top: t.top - o.top - i.css(r, "marginTop", !0),
              left: t.left - o.left - i.css(r, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && i.css(e, "position") === "static";

            )
              e = e.offsetParent;
            return e || we;
          });
        },
      }),
      i.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, t) {
          var n = t === "pageYOffset";
          i.fn[e] = function (r) {
            return ye(
              this,
              function (o, u, a) {
                var c;
                if (
                  (je(o) ? (c = o) : o.nodeType === 9 && (c = o.defaultView),
                  a === void 0)
                )
                  return c ? c[t] : o[u];
                c
                  ? c.scrollTo(n ? c.pageXOffset : a, n ? a : c.pageYOffset)
                  : (o[u] = a);
              },
              e,
              r,
              arguments.length
            );
          };
        }
      ),
      i.each(["top", "left"], function (e, t) {
        i.cssHooks[t] = fn(L.pixelPosition, function (n, r) {
          if (r)
            return (r = Ge(n, t)), Tt.test(r) ? i(n).position()[t] + "px" : r;
        });
      }),
      i.each({ Height: "height", Width: "width" }, function (e, t) {
        i.each(
          { padding: "inner" + e, content: t, "": "outer" + e },
          function (n, r) {
            i.fn[r] = function (o, u) {
              var a = arguments.length && (n || typeof o != "boolean"),
                c = n || (o === !0 || u === !0 ? "margin" : "border");
              return ye(
                this,
                function (f, d, y) {
                  var b;
                  return je(f)
                    ? r.indexOf("outer") === 0
                      ? f["inner" + e]
                      : f.document.documentElement["client" + e]
                    : f.nodeType === 9
                    ? ((b = f.documentElement),
                      Math.max(
                        f.body["scroll" + e],
                        b["scroll" + e],
                        f.body["offset" + e],
                        b["offset" + e],
                        b["client" + e]
                      ))
                    : y === void 0
                    ? i.css(f, d, c)
                    : i.style(f, d, y, c);
                },
                t,
                a ? o : void 0,
                a
              );
            };
          }
        );
      }),
      i.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          i.fn[t] = function (n) {
            return this.on(t, n);
          };
        }
      ),
      i.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return arguments.length === 1
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        hover: function (e, t) {
          return this.on("mouseenter", e).on("mouseleave", t || e);
        },
      }),
      i.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, t) {
          i.fn[t] = function (n, r) {
            return arguments.length > 0
              ? this.on(t, null, n, r)
              : this.trigger(t);
          };
        }
      );
    var Lr = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (i.proxy = function (e, t) {
      var n, r, o;
      if ((typeof t == "string" && ((n = e[t]), (t = e), (e = n)), !!q(e)))
        return (
          (r = $.call(arguments, 2)),
          (o = function () {
            return e.apply(t || this, r.concat($.call(arguments)));
          }),
          (o.guid = e.guid = e.guid || i.guid++),
          o
        );
    }),
      (i.holdReady = function (e) {
        e ? i.readyWait++ : i.ready(!0);
      }),
      (i.isArray = Array.isArray),
      (i.parseJSON = JSON.parse),
      (i.nodeName = B),
      (i.isFunction = q),
      (i.isWindow = je),
      (i.camelCase = se),
      (i.type = Le),
      (i.now = Date.now),
      (i.isNumeric = function (e) {
        var t = i.type(e);
        return (t === "number" || t === "string") && !isNaN(e - parseFloat(e));
      }),
      (i.trim = function (e) {
        return e == null ? "" : (e + "").replace(Lr, "$1");
      });
    var qr = D.jQuery,
      Or = D.$;
    return (
      (i.noConflict = function (e) {
        return (
          D.$ === i && (D.$ = Or), e && D.jQuery === i && (D.jQuery = qr), i
        );
      }),
      typeof Ne > "u" && (D.jQuery = D.$ = i),
      i
    );
  });
})(Ln);
var Br = Ln.exports;
const tt = $r(Br);
tt(function () {
  tt(".header__burger-wrapper").on("click", function (ue) {
    tt(".menu").toggleClass("active");
  }),
    tt(".menu__overlay").on("click", function (ue) {
      tt(".menu").toggleClass("active");
    });
});
