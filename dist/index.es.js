import Ae, { useState as ie, useRef as K, useEffect as vr } from "react";
var ue = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function pr() {
  if (De) return L;
  De = 1;
  var O = Ae, E = Symbol.for("react.element"), C = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, j = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(_, f, T) {
    var d, b = {}, g = null, k = null;
    T !== void 0 && (g = "" + T), f.key !== void 0 && (g = "" + f.key), f.ref !== void 0 && (k = f.ref);
    for (d in f) h.call(f, d) && !m.hasOwnProperty(d) && (b[d] = f[d]);
    if (_ && _.defaultProps) for (d in f = _.defaultProps, f) b[d] === void 0 && (b[d] = f[d]);
    return { $$typeof: E, type: _, key: g, ref: k, props: b, _owner: j.current };
  }
  return L.Fragment = C, L.jsx = w, L.jsxs = w, L;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function br() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var O = Ae, E = Symbol.for("react.element"), C = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), _ = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), V = Symbol.iterator, I = "@@iterator";
    function z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = V && e[V] || e[I];
      return typeof r == "function" ? r : null;
    }
    var S = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        N("error", e, t);
      }
    }
    function N(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var D = !1, G = !1, Ie = !1, $e = !1, We = !1, se;
    se = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === m || We || e === j || e === T || e === d || $e || e === k || D || G || Ie || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === b || e.$$typeof === w || e.$$typeof === _ || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case C:
          return "Portal";
        case m:
          return "Profiler";
        case j:
          return "StrictMode";
        case T:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return le(r) + ".Consumer";
          case w:
            var t = e;
            return le(t._context) + ".Provider";
          case f:
            return Le(e, e.render, "ForwardRef");
          case b:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case g: {
            var o = e, u = o._payload, i = o._init;
            try {
              return R(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, $ = 0, ce, fe, de, ve, pe, be, ye;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Me() {
      {
        if ($ === 0) {
          ce = console.log, fe = console.info, de = console.warn, ve = console.error, pe = console.group, be = console.groupCollapsed, ye = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function Ve() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: ce
            }),
            info: x({}, e, {
              value: fe
            }),
            warn: x({}, e, {
              value: de
            }),
            error: x({}, e, {
              value: ve
            }),
            group: x({}, e, {
              value: pe
            }),
            groupCollapsed: x({}, e, {
              value: be
            }),
            groupEnd: x({}, e, {
              value: ye
            })
          });
        }
        $ < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = S.ReactCurrentDispatcher, H;
    function U(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var Z = !1, B;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ne();
    }
    function he(e, r) {
      if (!e || Z)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Z = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = X.current, X.current = null, Me();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (p) {
              n = p;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (p) {
              n = p;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (p) {
            n = p;
          }
          e();
        }
      } catch (p) {
        if (p && n && typeof p.stack == "string") {
          for (var a = p.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, l = v.length - 1; s >= 1 && l >= 0 && a[s] !== v[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== v[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== v[l]) {
                    var y = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, y), y;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = u, Ve(), Error.prepareStackTrace = o;
      }
      var A = e ? e.displayName || e.name : "", P = A ? U(A) : "";
      return typeof e == "function" && B.set(e, P), P;
    }
    function Ue(e, r, t) {
      return he(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Be(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case T:
          return U("Suspense");
        case d:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ue(e.render);
          case b:
            return J(e.type, r, t);
          case g: {
            var n = e, o = n._payload, u = n._init;
            try {
              return J(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, Re = {}, Ee = S.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, o) {
      {
        var u = Function.call.bind(W);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (q(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), q(null)), a instanceof Error && !(a.message in Re) && (Re[a.message] = !0, q(o), c("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var qe = Array.isArray;
    function Q(e) {
      return qe(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return _e(e), !1;
      } catch {
        return !0;
      }
    }
    function _e(e) {
      return "" + e;
    }
    function me(e) {
      if (ze(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), _e(e);
    }
    var Y = S.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Se, ee;
    ee = {};
    function Xe(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = R(Y.current.type);
        ee[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(Y.current.type), e.ref), ee[t] = !0);
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Te || (Te = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Se || (Se = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function tr(e, r, t, n, o) {
      {
        var u, i = {}, a = null, v = null;
        t !== void 0 && (me(t), a = "" + t), He(r) && (me(r.key), a = "" + r.key), Xe(r) && (v = r.ref, Ze(r, o));
        for (u in r)
          W.call(r, u) && !Ge.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || v) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Qe(i, l), v && er(i, l);
        }
        return rr(e, a, v, o, n, Y.current, i);
      }
    }
    var re = S.ReactCurrentOwner, Oe = S.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        Oe.setExtraStackFrame(t);
      } else
        Oe.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function we() {
      {
        if (re.current) {
          var e = R(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      return "";
    }
    var xe = {};
    function ar(e) {
      {
        var r = we();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Pe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ar(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== re.current && (n = " It was passed a child from " + R(e._owner.type) + "."), F(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ne(n) && Pe(n, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = z(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              ne(i.value) && Pe(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === b))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var o = R(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var je = {};
    function ke(e, r, t, n, o, u) {
      {
        var i = Ye(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = nr();
          v ? a += v : a += we();
          var s;
          e === null ? s = "null" : Q(e) ? s = "array" : e !== void 0 && e.$$typeof === E ? (s = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = tr(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var y = r.children;
          if (y !== void 0)
            if (n)
              if (Q(y)) {
                for (var A = 0; A < y.length; A++)
                  Ce(y[A], e);
                Object.freeze && Object.freeze(y);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(y, e);
        }
        if (W.call(r, "key")) {
          var P = R(e), p = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), ae = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[P + ae]) {
            var fr = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ae, P, fr, P), je[P + ae] = !0;
          }
        }
        return e === h ? or(l) : ir(l), l;
      }
    }
    function ur(e, r, t) {
      return ke(e, r, t, !0);
    }
    function sr(e, r, t) {
      return ke(e, r, t, !1);
    }
    var lr = sr, cr = ur;
    M.Fragment = h, M.jsx = lr, M.jsxs = cr;
  }()), M;
}
process.env.NODE_ENV === "production" ? ue.exports = pr() : ue.exports = br();
var oe = ue.exports;
const gr = ({
  height: O = 100,
  width: E = 100,
  heartBeatTimeInterval: C = 1e3,
  heartBeat: h = !1,
  liked: j = !1,
  onChange: m,
  containerCls: w = "",
  containerStyle: _ = {}
}) => {
  const f = Math.max(Math.min(O, E), 10), T = {
    height: `${O}px`,
    width: `${E}px`,
    position: "relative",
    margin: `${f / 4 * -1}px`
  }, [d] = ie(j), b = K(null), g = K(null), [k, V] = ie(!0), I = K(), [z, S] = ie(() => d ? {
    backgroundPosition: "right"
  } : {}), c = (D, G) => {
    b.current && b.current.setAttribute("data-initial", "1"), k && S({}), V(!1), !h && (m == null || m(D, G));
  };
  vr(() => (h ? I.current = window.setInterval(() => {
    g.current && g.current.click();
  }, C) : clearInterval(I.current), () => {
    clearInterval(I.current);
  }), [h, C]);
  const N = K(`ID_${Math.random() * 100}`);
  return /* @__PURE__ */ oe.jsxs(
    "div",
    {
      style: { ...T, ..._ },
      className: w,
      children: [
        /* @__PURE__ */ oe.jsx(
          "input",
          {
            type: "checkbox",
            name: "cbBox",
            id: N.current,
            ref: g,
            className: "cbBox_love",
            defaultChecked: d,
            onChange: (D) => c(D.target.checked, D)
          }
        ),
        /* @__PURE__ */ oe.jsx(
          "label",
          {
            title: `${d}`,
            className: "cbBox-love",
            htmlFor: N.current,
            style: { ...z, width: E, height: O },
            ref: b,
            "data-initial": 0
          }
        )
      ]
    }
  );
};
export {
  gr as default
};
//# sourceMappingURL=index.es.js.map
