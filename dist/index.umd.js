(function(v,x){typeof exports=="object"&&typeof module<"u"?module.exports=x(require("react")):typeof define=="function"&&define.amd?define(["react"],x):(v=typeof globalThis<"u"?globalThis:v||self,v["react-love-heart-effect"]=x(v.React))})(this,function(v){"use strict";var x={exports:{}},Y={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ue;function Fe(){if(ue)return Y;ue=1;var w=v,m=Symbol.for("react.element"),k=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,D=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function P(_,c,S){var d,y={},h=null,F=null;S!==void 0&&(h=""+S),c.key!==void 0&&(h=""+c.key),c.ref!==void 0&&(F=c.ref);for(d in c)R.call(c,d)&&!T.hasOwnProperty(d)&&(y[d]=c[d]);if(_&&_.defaultProps)for(d in c=_.defaultProps,c)y[d]===void 0&&(y[d]=c[d]);return{$$typeof:m,type:_,key:h,ref:F,props:y,_owner:D.current}}return Y.Fragment=k,Y.jsx=P,Y.jsxs=P,Y}var L={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se;function Ae(){return se||(se=1,process.env.NODE_ENV!=="production"&&function(){var w=v,m=Symbol.for("react.element"),k=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),_=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),F=Symbol.for("react.offscreen"),B=Symbol.iterator,M="@@iterator";function X(e){if(e===null||typeof e!="object")return null;var r=B&&e[B]||e[M];return typeof r=="function"?r:null}var O=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function f(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];$("error",e,t)}}function $(e,r,t){{var n=O.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var A=!1,Z=!1,Ie=!1,We=!1,Ye=!1,le;le=Symbol.for("react.module.reference");function Le(e){return!!(typeof e=="string"||typeof e=="function"||e===R||e===T||Ye||e===D||e===S||e===d||We||e===F||A||Z||Ie||typeof e=="object"&&e!==null&&(e.$$typeof===h||e.$$typeof===y||e.$$typeof===P||e.$$typeof===_||e.$$typeof===c||e.$$typeof===le||e.getModuleId!==void 0))}function Me(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function fe(e){return e.displayName||"Context"}function E(e){if(e==null)return null;if(typeof e.tag=="number"&&f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case k:return"Portal";case T:return"Profiler";case D:return"StrictMode";case S:return"Suspense";case d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _:var r=e;return fe(r)+".Consumer";case P:var t=e;return fe(t._context)+".Provider";case c:return Me(e,e.render,"ForwardRef");case y:var n=e.displayName||null;return n!==null?n:E(e.type)||"Memo";case h:{var o=e,u=o._payload,i=o._init;try{return E(i(u))}catch{return null}}}return null}var C=Object.assign,V=0,ce,de,ve,pe,be,ye,ge;function he(){}he.__reactDisabledLog=!0;function Ve(){{if(V===0){ce=console.log,de=console.info,ve=console.warn,pe=console.error,be=console.group,ye=console.groupCollapsed,ge=console.groupEnd;var e={configurable:!0,enumerable:!0,value:he,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}V++}}function Ne(){{if(V--,V===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:C({},e,{value:ce}),info:C({},e,{value:de}),warn:C({},e,{value:ve}),error:C({},e,{value:pe}),group:C({},e,{value:be}),groupCollapsed:C({},e,{value:ye}),groupEnd:C({},e,{value:ge})})}V<0&&f("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Q=O.ReactCurrentDispatcher,q;function J(e,r,t){{if(q===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);q=n&&n[1]||""}return`
`+q+e}}var ee=!1,K;{var Ue=typeof WeakMap=="function"?WeakMap:Map;K=new Ue}function Re(e,r){if(!e||ee)return"";{var t=K.get(e);if(t!==void 0)return t}var n;ee=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=Q.current,Q.current=null,Ve();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(b){n=b}Reflect.construct(e,[],i)}else{try{i.call()}catch(b){n=b}e.call(i.prototype)}}else{try{throw Error()}catch(b){n=b}e()}}catch(b){if(b&&n&&typeof b.stack=="string"){for(var a=b.stack.split(`
`),p=n.stack.split(`
`),s=a.length-1,l=p.length-1;s>=1&&l>=0&&a[s]!==p[l];)l--;for(;s>=1&&l>=0;s--,l--)if(a[s]!==p[l]){if(s!==1||l!==1)do if(s--,l--,l<0||a[s]!==p[l]){var g=`
`+a[s].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),typeof e=="function"&&K.set(e,g),g}while(s>=1&&l>=0);break}}}finally{ee=!1,Q.current=u,Ne(),Error.prepareStackTrace=o}var W=e?e.displayName||e.name:"",j=W?J(W):"";return typeof e=="function"&&K.set(e,j),j}function Be(e,r,t){return Re(e,!1)}function $e(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function z(e,r,t){if(e==null)return"";if(typeof e=="function")return Re(e,$e(e));if(typeof e=="string")return J(e);switch(e){case S:return J("Suspense");case d:return J("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Be(e.render);case y:return z(e.type,r,t);case h:{var n=e,o=n._payload,u=n._init;try{return z(u(o),r,t)}catch{}}}return""}var N=Object.prototype.hasOwnProperty,Ee={},me=O.ReactDebugCurrentFrame;function G(e){if(e){var r=e._owner,t=z(e.type,e._source,r?r.type:null);me.setExtraStackFrame(t)}else me.setExtraStackFrame(null)}function Je(e,r,t,n,o){{var u=Function.call.bind(N);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var p=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(G(o),f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),G(null)),a instanceof Error&&!(a.message in Ee)&&(Ee[a.message]=!0,G(o),f("Failed %s type: %s",t,a.message),G(null))}}}var Ke=Array.isArray;function re(e){return Ke(e)}function ze(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Ge(e){try{return _e(e),!1}catch{return!0}}function _e(e){return""+e}function Te(e){if(Ge(e))return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ze(e)),_e(e)}var U=O.ReactCurrentOwner,He={key:!0,ref:!0,__self:!0,__source:!0},Se,Oe,te;te={};function Xe(e){if(N.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Ze(e){if(N.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Qe(e,r){if(typeof e.ref=="string"&&U.current&&r&&U.current.stateNode!==r){var t=E(U.current.type);te[t]||(f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',E(U.current.type),e.ref),te[t]=!0)}}function qe(e,r){{var t=function(){Se||(Se=!0,f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function er(e,r){{var t=function(){Oe||(Oe=!0,f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var rr=function(e,r,t,n,o,u,i){var a={$$typeof:m,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function tr(e,r,t,n,o){{var u,i={},a=null,p=null;t!==void 0&&(Te(t),a=""+t),Ze(r)&&(Te(r.key),a=""+r.key),Xe(r)&&(p=r.ref,Qe(r,o));for(u in r)N.call(r,u)&&!He.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)i[u]===void 0&&(i[u]=s[u])}if(a||p){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&qe(i,l),p&&er(i,l)}return rr(e,a,p,o,n,U.current,i)}}var ne=O.ReactCurrentOwner,xe=O.ReactDebugCurrentFrame;function I(e){if(e){var r=e._owner,t=z(e.type,e._source,r?r.type:null);xe.setExtraStackFrame(t)}else xe.setExtraStackFrame(null)}var ae;ae=!1;function ie(e){return typeof e=="object"&&e!==null&&e.$$typeof===m}function we(){{if(ne.current){var e=E(ne.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function nr(e){return""}var Pe={};function ar(e){{var r=we();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ce(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ar(r);if(Pe[t])return;Pe[t]=!0;var n="";e&&e._owner&&e._owner!==ne.current&&(n=" It was passed a child from "+E(e._owner.type)+"."),I(e),f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),I(null)}}function je(e,r){{if(typeof e!="object")return;if(re(e))for(var t=0;t<e.length;t++){var n=e[t];ie(n)&&Ce(n,r)}else if(ie(e))e._store&&(e._store.validated=!0);else if(e){var o=X(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)ie(i.value)&&Ce(i.value,r)}}}function ir(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===y))t=r.propTypes;else return;if(t){var n=E(r);Je(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!ae){ae=!0;var o=E(r);f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function or(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){I(e),f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),I(null);break}}e.ref!==null&&(I(e),f("Invalid attribute `ref` supplied to `React.Fragment`."),I(null))}}var ke={};function De(e,r,t,n,o,u){{var i=Le(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var p=nr();p?a+=p:a+=we();var s;e===null?s="null":re(e)?s="array":e!==void 0&&e.$$typeof===m?(s="<"+(E(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var l=tr(e,r,t,o,u);if(l==null)return l;if(i){var g=r.children;if(g!==void 0)if(n)if(re(g)){for(var W=0;W<g.length;W++)je(g[W],e);Object.freeze&&Object.freeze(g)}else f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else je(g,e)}if(N.call(r,"key")){var j=E(e),b=Object.keys(r).filter(function(dr){return dr!=="key"}),oe=b.length>0?"{key: someKey, "+b.join(": ..., ")+": ...}":"{key: someKey}";if(!ke[j+oe]){var cr=b.length>0?"{"+b.join(": ..., ")+": ...}":"{}";f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,oe,j,cr,j),ke[j+oe]=!0}}return e===R?or(l):ir(l),l}}function ur(e,r,t){return De(e,r,t,!0)}function sr(e,r,t){return De(e,r,t,!1)}var lr=sr,fr=ur;L.Fragment=R,L.jsx=lr,L.jsxs=fr}()),L}process.env.NODE_ENV==="production"?x.exports=Fe():x.exports=Ae();var H=x.exports;return({height:w=100,width:m=100,heartBeatTimeInterval:k=1e3,heartBeat:R=!1,liked:D=!1,onChange:T,containerCls:P="",containerStyle:_={}})=>{const c=Math.max(Math.min(w,m),10),S={height:`${w}px`,width:`${m}px`,position:"relative",margin:`${c/4*-1}px`},[d]=v.useState(D),y=v.useRef(null),h=v.useRef(null),[F,B]=v.useState(!0),M=v.useRef(),[X,O]=v.useState(()=>d?{backgroundPosition:"right"}:{}),f=(A,Z)=>{y.current&&y.current.setAttribute("data-initial","1"),F&&O({}),B(!1),!R&&(T==null||T(A,Z))};v.useEffect(()=>(R?M.current=window.setInterval(()=>{h.current&&h.current.click()},k):clearInterval(M.current),()=>{clearInterval(M.current)}),[R,k]);const $=v.useRef(`ID_${Math.random()*100}`);return H.jsxs("div",{style:{...S,..._},className:P,children:[H.jsx("input",{type:"checkbox",name:"cbBox",id:$.current,ref:h,className:"cbBox_love",defaultChecked:d,onChange:A=>f(A.target.checked,A)}),H.jsx("label",{title:`${d}`,className:"cbBox-love",htmlFor:$.current,style:{...X,width:m,height:w},ref:y,"data-initial":0})]})}});
//# sourceMappingURL=index.umd.js.map
