(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=t(l);fetch(l.href,s)}})();function dj(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $u={exports:{}},kl={},Au={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ji=Symbol.for("react.element"),gj=Symbol.for("react.portal"),fj=Symbol.for("react.fragment"),xj=Symbol.for("react.strict_mode"),mj=Symbol.for("react.profiler"),vj=Symbol.for("react.provider"),pj=Symbol.for("react.context"),zj=Symbol.for("react.forward_ref"),hj=Symbol.for("react.suspense"),kj=Symbol.for("react.memo"),_j=Symbol.for("react.lazy"),mr=Symbol.iterator;function wj(n){return n===null||typeof n!="object"?null:(n=mr&&n[mr]||n["@@iterator"],typeof n=="function"?n:null)}var Uu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ju=Object.assign,Wu={};function vt(n,e,t){this.props=n,this.context=e,this.refs=Wu,this.updater=t||Uu}vt.prototype.isReactComponent={};vt.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};vt.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Vu(){}Vu.prototype=vt.prototype;function fa(n,e,t){this.props=n,this.context=e,this.refs=Wu,this.updater=t||Uu}var xa=fa.prototype=new Vu;xa.constructor=fa;Ju(xa,vt.prototype);xa.isPureReactComponent=!0;var vr=Array.isArray,Bu=Object.prototype.hasOwnProperty,ma={current:null},Hu={key:!0,ref:!0,__self:!0,__source:!0};function qu(n,e,t){var i,l={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Bu.call(e,i)&&!Hu.hasOwnProperty(i)&&(l[i]=e[i]);var u=arguments.length-2;if(u===1)l.children=t;else if(1<u){for(var o=Array(u),c=0;c<u;c++)o[c]=arguments[c+2];l.children=o}if(n&&n.defaultProps)for(i in u=n.defaultProps,u)l[i]===void 0&&(l[i]=u[i]);return{$$typeof:ji,type:n,key:s,ref:a,props:l,_owner:ma.current}}function Nj(n,e){return{$$typeof:ji,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function va(n){return typeof n=="object"&&n!==null&&n.$$typeof===ji}function Sj(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var pr=/\/+/g;function Bl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Sj(""+n.key):e.toString(36)}function Fi(n,e,t,i,l){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case ji:case gj:a=!0}}if(a)return a=n,l=l(a),n=i===""?"."+Bl(a,0):i,vr(l)?(t="",n!=null&&(t=n.replace(pr,"$&/")+"/"),Fi(l,e,t,"",function(c){return c})):l!=null&&(va(l)&&(l=Nj(l,t+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(pr,"$&/")+"/")+n)),e.push(l)),1;if(a=0,i=i===""?".":i+":",vr(n))for(var u=0;u<n.length;u++){s=n[u];var o=i+Bl(s,u);a+=Fi(s,e,t,o,l)}else if(o=wj(n),typeof o=="function")for(n=o.call(n),u=0;!(s=n.next()).done;)s=s.value,o=i+Bl(s,u++),a+=Fi(s,e,t,o,l);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function pi(n,e,t){if(n==null)return n;var i=[],l=0;return Fi(n,i,"","",function(s){return e.call(t,s,l++)}),i}function Ej(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var gn={current:null},$i={transition:null},Cj={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:$i,ReactCurrentOwner:ma};function Qu(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:pi,forEach:function(n,e,t){pi(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return pi(n,function(){e++}),e},toArray:function(n){return pi(n,function(e){return e})||[]},only:function(n){if(!va(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};L.Component=vt;L.Fragment=fj;L.Profiler=mj;L.PureComponent=fa;L.StrictMode=xj;L.Suspense=hj;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cj;L.act=Qu;L.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Ju({},n.props),l=n.key,s=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ma.current),e.key!==void 0&&(l=""+e.key),n.type&&n.type.defaultProps)var u=n.type.defaultProps;for(o in e)Bu.call(e,o)&&!Hu.hasOwnProperty(o)&&(i[o]=e[o]===void 0&&u!==void 0?u[o]:e[o])}var o=arguments.length-2;if(o===1)i.children=t;else if(1<o){u=Array(o);for(var c=0;c<o;c++)u[c]=arguments[c+2];i.children=u}return{$$typeof:ji,type:n.type,key:l,ref:s,props:i,_owner:a}};L.createContext=function(n){return n={$$typeof:pj,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:vj,_context:n},n.Consumer=n};L.createElement=qu;L.createFactory=function(n){var e=qu.bind(null,n);return e.type=n,e};L.createRef=function(){return{current:null}};L.forwardRef=function(n){return{$$typeof:zj,render:n}};L.isValidElement=va;L.lazy=function(n){return{$$typeof:_j,_payload:{_status:-1,_result:n},_init:Ej}};L.memo=function(n,e){return{$$typeof:kj,type:n,compare:e===void 0?null:e}};L.startTransition=function(n){var e=$i.transition;$i.transition={};try{n()}finally{$i.transition=e}};L.unstable_act=Qu;L.useCallback=function(n,e){return gn.current.useCallback(n,e)};L.useContext=function(n){return gn.current.useContext(n)};L.useDebugValue=function(){};L.useDeferredValue=function(n){return gn.current.useDeferredValue(n)};L.useEffect=function(n,e){return gn.current.useEffect(n,e)};L.useId=function(){return gn.current.useId()};L.useImperativeHandle=function(n,e,t){return gn.current.useImperativeHandle(n,e,t)};L.useInsertionEffect=function(n,e){return gn.current.useInsertionEffect(n,e)};L.useLayoutEffect=function(n,e){return gn.current.useLayoutEffect(n,e)};L.useMemo=function(n,e){return gn.current.useMemo(n,e)};L.useReducer=function(n,e,t){return gn.current.useReducer(n,e,t)};L.useRef=function(n){return gn.current.useRef(n)};L.useState=function(n){return gn.current.useState(n)};L.useSyncExternalStore=function(n,e,t){return gn.current.useSyncExternalStore(n,e,t)};L.useTransition=function(){return gn.current.useTransition()};L.version="18.3.1";Au.exports=L;var C=Au.exports;const Dj=dj(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mj=C,Pj=Symbol.for("react.element"),Tj=Symbol.for("react.fragment"),Lj=Object.prototype.hasOwnProperty,Ij=Mj.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rj={key:!0,ref:!0,__self:!0,__source:!0};function Yu(n,e,t){var i,l={},s=null,a=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Lj.call(e,i)&&!Rj.hasOwnProperty(i)&&(l[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)l[i]===void 0&&(l[i]=e[i]);return{$$typeof:Pj,type:n,key:s,ref:a,props:l,_owner:Ij.current}}kl.Fragment=Tj;kl.jsx=Yu;kl.jsxs=Yu;$u.exports=kl;var r=$u.exports,vs={},Ku={exports:{}},En={},Gu={exports:{}},Xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(S,M){var P=S.length;S.push(M);n:for(;0<P;){var Q=P-1>>>1,Z=S[Q];if(0<l(Z,M))S[Q]=M,S[P]=Z,P=Q;else break n}}function t(S){return S.length===0?null:S[0]}function i(S){if(S.length===0)return null;var M=S[0],P=S.pop();if(P!==M){S[0]=P;n:for(var Q=0,Z=S.length,mi=Z>>>1;Q<mi;){var Se=2*(Q+1)-1,Vl=S[Se],Ee=Se+1,vi=S[Ee];if(0>l(Vl,P))Ee<Z&&0>l(vi,Vl)?(S[Q]=vi,S[Ee]=P,Q=Ee):(S[Q]=Vl,S[Se]=P,Q=Se);else if(Ee<Z&&0>l(vi,P))S[Q]=vi,S[Ee]=P,Q=Ee;else break n}}return M}function l(S,M){var P=S.sortIndex-M.sortIndex;return P!==0?P:S.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var a=Date,u=a.now();n.unstable_now=function(){return a.now()-u}}var o=[],c=[],f=1,g=null,x=3,m=!1,v=!1,p=!1,D=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(S){for(var M=t(c);M!==null;){if(M.callback===null)i(c);else if(M.startTime<=S)i(c),M.sortIndex=M.expirationTime,e(o,M);else break;M=t(c)}}function z(S){if(p=!1,d(S),!v)if(t(o)!==null)v=!0,Jl(_);else{var M=t(c);M!==null&&Wl(z,M.startTime-S)}}function _(S,M){v=!1,p&&(p=!1,y(k),k=-1),m=!0;var P=x;try{for(d(M),g=t(o);g!==null&&(!(g.expirationTime>M)||S&&!kn());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,x=g.priorityLevel;var Z=Q(g.expirationTime<=M);M=n.unstable_now(),typeof Z=="function"?g.callback=Z:g===t(o)&&i(o),d(M)}else i(o);g=t(o)}if(g!==null)var mi=!0;else{var Se=t(c);Se!==null&&Wl(z,Se.startTime-M),mi=!1}return mi}finally{g=null,x=P,m=!1}}var E=!1,N=null,k=-1,I=5,T=-1;function kn(){return!(n.unstable_now()-T<I)}function ht(){if(N!==null){var S=n.unstable_now();T=S;var M=!0;try{M=N(!0,S)}finally{M?kt():(E=!1,N=null)}}else E=!1}var kt;if(typeof j=="function")kt=function(){j(ht)};else if(typeof MessageChannel<"u"){var xr=new MessageChannel,yj=xr.port2;xr.port1.onmessage=ht,kt=function(){yj.postMessage(null)}}else kt=function(){D(ht,0)};function Jl(S){N=S,E||(E=!0,kt())}function Wl(S,M){k=D(function(){S(n.unstable_now())},M)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(S){S.callback=null},n.unstable_continueExecution=function(){v||m||(v=!0,Jl(_))},n.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<S?Math.floor(1e3/S):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return t(o)},n.unstable_next=function(S){switch(x){case 1:case 2:case 3:var M=3;break;default:M=x}var P=x;x=M;try{return S()}finally{x=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(S,M){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var P=x;x=S;try{return M()}finally{x=P}},n.unstable_scheduleCallback=function(S,M,P){var Q=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?Q+P:Q):P=Q,S){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=P+Z,S={id:f++,callback:M,priorityLevel:S,startTime:P,expirationTime:Z,sortIndex:-1},P>Q?(S.sortIndex=P,e(c,S),t(o)===null&&S===t(c)&&(p?(y(k),k=-1):p=!0,Wl(z,P-Q))):(S.sortIndex=Z,e(o,S),v||m||(v=!0,Jl(_))),S},n.unstable_shouldYield=kn,n.unstable_wrapCallback=function(S){var M=x;return function(){var P=x;x=M;try{return S.apply(this,arguments)}finally{x=P}}}})(Xu);Gu.exports=Xu;var Oj=Gu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fj=C,Sn=Oj;function h(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zu=new Set,Qt={};function Je(n,e){ct(n,e),ct(n+"Capture",e)}function ct(n,e){for(Qt[n]=e,n=0;n<e.length;n++)Zu.add(e[n])}var ne=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ps=Object.prototype.hasOwnProperty,$j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zr={},hr={};function Aj(n){return ps.call(hr,n)?!0:ps.call(zr,n)?!1:$j.test(n)?hr[n]=!0:(zr[n]=!0,!1)}function Uj(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Jj(n,e,t,i){if(e===null||typeof e>"u"||Uj(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(n,e,t,i,l,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){sn[n]=new fn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];sn[e]=new fn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){sn[n]=new fn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){sn[n]=new fn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){sn[n]=new fn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){sn[n]=new fn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){sn[n]=new fn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){sn[n]=new fn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){sn[n]=new fn(n,5,!1,n.toLowerCase(),null,!1,!1)});var pa=/[\-:]([a-z])/g;function za(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(pa,za);sn[e]=new fn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(pa,za);sn[e]=new fn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(pa,za);sn[e]=new fn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){sn[n]=new fn(n,1,!1,n.toLowerCase(),null,!1,!1)});sn.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){sn[n]=new fn(n,1,!1,n.toLowerCase(),null,!0,!0)});function ha(n,e,t,i){var l=sn.hasOwnProperty(e)?sn[e]:null;(l!==null?l.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jj(e,t,l,i)&&(t=null),i||l===null?Aj(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):l.mustUseProperty?n[l.propertyName]=t===null?l.type===3?!1:"":t:(e=l.attributeName,i=l.attributeNamespace,t===null?n.removeAttribute(e):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var le=Fj.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zi=Symbol.for("react.element"),He=Symbol.for("react.portal"),qe=Symbol.for("react.fragment"),ka=Symbol.for("react.strict_mode"),zs=Symbol.for("react.profiler"),bu=Symbol.for("react.provider"),no=Symbol.for("react.context"),_a=Symbol.for("react.forward_ref"),hs=Symbol.for("react.suspense"),ks=Symbol.for("react.suspense_list"),wa=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),eo=Symbol.for("react.offscreen"),kr=Symbol.iterator;function _t(n){return n===null||typeof n!="object"?null:(n=kr&&n[kr]||n["@@iterator"],typeof n=="function"?n:null)}var H=Object.assign,Hl;function Lt(n){if(Hl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Hl=e&&e[1]||""}return`
`+Hl+n}var ql=!1;function Ql(n,e){if(!n||ql)return"";ql=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),s=i.stack.split(`
`),a=l.length-1,u=s.length-1;1<=a&&0<=u&&l[a]!==s[u];)u--;for(;1<=a&&0<=u;a--,u--)if(l[a]!==s[u]){if(a!==1||u!==1)do if(a--,u--,0>u||l[a]!==s[u]){var o=`
`+l[a].replace(" at new "," at ");return n.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",n.displayName)),o}while(1<=a&&0<=u);break}}}finally{ql=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Lt(n):""}function Wj(n){switch(n.tag){case 5:return Lt(n.type);case 16:return Lt("Lazy");case 13:return Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 2:case 15:return n=Ql(n.type,!1),n;case 11:return n=Ql(n.type.render,!1),n;case 1:return n=Ql(n.type,!0),n;default:return""}}function _s(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case qe:return"Fragment";case He:return"Portal";case zs:return"Profiler";case ka:return"StrictMode";case hs:return"Suspense";case ks:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case no:return(n.displayName||"Context")+".Consumer";case bu:return(n._context.displayName||"Context")+".Provider";case _a:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case wa:return e=n.displayName||null,e!==null?e:_s(n.type)||"Memo";case ae:e=n._payload,n=n._init;try{return _s(n(e))}catch{}}return null}function Vj(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _s(e);case 8:return e===ka?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function he(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function to(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Bj(n){var e=to(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var l=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return l.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function hi(n){n._valueTracker||(n._valueTracker=Bj(n))}function io(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=to(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Xi(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ws(n,e){var t=e.checked;return H({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function _r(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=he(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lo(n,e){e=e.checked,e!=null&&ha(n,"checked",e,!1)}function Ns(n,e){lo(n,e);var t=he(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Ss(n,e.type,t):e.hasOwnProperty("defaultValue")&&Ss(n,e.type,he(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function wr(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Ss(n,e,t){(e!=="number"||Xi(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var It=Array.isArray;function lt(n,e,t,i){if(n=n.options,e){e={};for(var l=0;l<t.length;l++)e["$"+t[l]]=!0;for(t=0;t<n.length;t++)l=e.hasOwnProperty("$"+n[t].value),n[t].selected!==l&&(n[t].selected=l),l&&i&&(n[t].defaultSelected=!0)}else{for(t=""+he(t),e=null,l=0;l<n.length;l++){if(n[l].value===t){n[l].selected=!0,i&&(n[l].defaultSelected=!0);return}e!==null||n[l].disabled||(e=n[l])}e!==null&&(e.selected=!0)}}function Es(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(h(91));return H({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Nr(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(h(92));if(It(t)){if(1<t.length)throw Error(h(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:he(t)}}function so(n,e){var t=he(e.value),i=he(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Sr(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ao(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cs(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ao(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ki,ro=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,l){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,l)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ki=ki||document.createElement("div"),ki.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ki.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Yt(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ft={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hj=["Webkit","ms","Moz","O"];Object.keys(Ft).forEach(function(n){Hj.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ft[e]=Ft[n]})});function uo(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ft.hasOwnProperty(n)&&Ft[n]?(""+e).trim():e+"px"}function oo(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,l=uo(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,l):n[t]=l}}var qj=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ds(n,e){if(e){if(qj[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(h(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(h(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(h(61))}if(e.style!=null&&typeof e.style!="object")throw Error(h(62))}}function Ms(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ps=null;function Na(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ts=null,st=null,at=null;function Er(n){if(n=gi(n)){if(typeof Ts!="function")throw Error(h(280));var e=n.stateNode;e&&(e=El(e),Ts(n.stateNode,n.type,e))}}function co(n){st?at?at.push(n):at=[n]:st=n}function jo(){if(st){var n=st,e=at;if(at=st=null,Er(n),e)for(n=0;n<e.length;n++)Er(e[n])}}function yo(n,e){return n(e)}function go(){}var Yl=!1;function fo(n,e,t){if(Yl)return n(e,t);Yl=!0;try{return yo(n,e,t)}finally{Yl=!1,(st!==null||at!==null)&&(go(),jo())}}function Kt(n,e){var t=n.stateNode;if(t===null)return null;var i=El(t);if(i===null)return null;t=i[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(h(231,e,typeof t));return t}var Ls=!1;if(ne)try{var wt={};Object.defineProperty(wt,"passive",{get:function(){Ls=!0}}),window.addEventListener("test",wt,wt),window.removeEventListener("test",wt,wt)}catch{Ls=!1}function Qj(n,e,t,i,l,s,a,u,o){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(f){this.onError(f)}}var $t=!1,Zi=null,bi=!1,Is=null,Yj={onError:function(n){$t=!0,Zi=n}};function Kj(n,e,t,i,l,s,a,u,o){$t=!1,Zi=null,Qj.apply(Yj,arguments)}function Gj(n,e,t,i,l,s,a,u,o){if(Kj.apply(this,arguments),$t){if($t){var c=Zi;$t=!1,Zi=null}else throw Error(h(198));bi||(bi=!0,Is=c)}}function We(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function xo(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Cr(n){if(We(n)!==n)throw Error(h(188))}function Xj(n){var e=n.alternate;if(!e){if(e=We(n),e===null)throw Error(h(188));return e!==n?null:n}for(var t=n,i=e;;){var l=t.return;if(l===null)break;var s=l.alternate;if(s===null){if(i=l.return,i!==null){t=i;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===t)return Cr(l),n;if(s===i)return Cr(l),e;s=s.sibling}throw Error(h(188))}if(t.return!==i.return)t=l,i=s;else{for(var a=!1,u=l.child;u;){if(u===t){a=!0,t=l,i=s;break}if(u===i){a=!0,i=l,t=s;break}u=u.sibling}if(!a){for(u=s.child;u;){if(u===t){a=!0,t=s,i=l;break}if(u===i){a=!0,i=s,t=l;break}u=u.sibling}if(!a)throw Error(h(189))}}if(t.alternate!==i)throw Error(h(190))}if(t.tag!==3)throw Error(h(188));return t.stateNode.current===t?n:e}function mo(n){return n=Xj(n),n!==null?vo(n):null}function vo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=vo(n);if(e!==null)return e;n=n.sibling}return null}var po=Sn.unstable_scheduleCallback,Dr=Sn.unstable_cancelCallback,Zj=Sn.unstable_shouldYield,bj=Sn.unstable_requestPaint,Y=Sn.unstable_now,n1=Sn.unstable_getCurrentPriorityLevel,Sa=Sn.unstable_ImmediatePriority,zo=Sn.unstable_UserBlockingPriority,nl=Sn.unstable_NormalPriority,e1=Sn.unstable_LowPriority,ho=Sn.unstable_IdlePriority,_l=null,qn=null;function t1(n){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(_l,n,void 0,(n.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:s1,i1=Math.log,l1=Math.LN2;function s1(n){return n>>>=0,n===0?32:31-(i1(n)/l1|0)|0}var _i=64,wi=4194304;function Rt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function el(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,l=n.suspendedLanes,s=n.pingedLanes,a=t&268435455;if(a!==0){var u=a&~l;u!==0?i=Rt(u):(s&=a,s!==0&&(i=Rt(s)))}else a=t&~l,a!==0?i=Rt(a):s!==0&&(i=Rt(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&l)&&(l=i&-i,s=e&-e,l>=s||l===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-An(e),l=1<<t,i|=n[t],e&=~l;return i}function a1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function r1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,l=n.expirationTimes,s=n.pendingLanes;0<s;){var a=31-An(s),u=1<<a,o=l[a];o===-1?(!(u&t)||u&i)&&(l[a]=a1(u,e)):o<=e&&(n.expiredLanes|=u),s&=~u}}function Rs(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ko(){var n=_i;return _i<<=1,!(_i&4194240)&&(_i=64),n}function Kl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function yi(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-An(e),n[e]=t}function u1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var l=31-An(t),s=1<<l;e[l]=0,i[l]=-1,n[l]=-1,t&=~s}}function Ea(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-An(t),l=1<<i;l&e|n[i]&e&&(n[i]|=e),t&=~l}}var F=0;function _o(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var wo,Ca,No,So,Eo,Os=!1,Ni=[],ye=null,de=null,ge=null,Gt=new Map,Xt=new Map,ue=[],o1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mr(n,e){switch(n){case"focusin":case"focusout":ye=null;break;case"dragenter":case"dragleave":de=null;break;case"mouseover":case"mouseout":ge=null;break;case"pointerover":case"pointerout":Gt.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xt.delete(e.pointerId)}}function Nt(n,e,t,i,l,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[l]},e!==null&&(e=gi(e),e!==null&&Ca(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),n)}function c1(n,e,t,i,l){switch(e){case"focusin":return ye=Nt(ye,n,e,t,i,l),!0;case"dragenter":return de=Nt(de,n,e,t,i,l),!0;case"mouseover":return ge=Nt(ge,n,e,t,i,l),!0;case"pointerover":var s=l.pointerId;return Gt.set(s,Nt(Gt.get(s)||null,n,e,t,i,l)),!0;case"gotpointercapture":return s=l.pointerId,Xt.set(s,Nt(Xt.get(s)||null,n,e,t,i,l)),!0}return!1}function Co(n){var e=Pe(n.target);if(e!==null){var t=We(e);if(t!==null){if(e=t.tag,e===13){if(e=xo(t),e!==null){n.blockedOn=e,Eo(n.priority,function(){No(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ai(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Fs(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ps=i,t.target.dispatchEvent(i),Ps=null}else return e=gi(t),e!==null&&Ca(e),n.blockedOn=t,!1;e.shift()}return!0}function Pr(n,e,t){Ai(n)&&t.delete(e)}function j1(){Os=!1,ye!==null&&Ai(ye)&&(ye=null),de!==null&&Ai(de)&&(de=null),ge!==null&&Ai(ge)&&(ge=null),Gt.forEach(Pr),Xt.forEach(Pr)}function St(n,e){n.blockedOn===e&&(n.blockedOn=null,Os||(Os=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,j1)))}function Zt(n){function e(l){return St(l,n)}if(0<Ni.length){St(Ni[0],n);for(var t=1;t<Ni.length;t++){var i=Ni[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ye!==null&&St(ye,n),de!==null&&St(de,n),ge!==null&&St(ge,n),Gt.forEach(e),Xt.forEach(e),t=0;t<ue.length;t++)i=ue[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ue.length&&(t=ue[0],t.blockedOn===null);)Co(t),t.blockedOn===null&&ue.shift()}var rt=le.ReactCurrentBatchConfig,tl=!0;function y1(n,e,t,i){var l=F,s=rt.transition;rt.transition=null;try{F=1,Da(n,e,t,i)}finally{F=l,rt.transition=s}}function d1(n,e,t,i){var l=F,s=rt.transition;rt.transition=null;try{F=4,Da(n,e,t,i)}finally{F=l,rt.transition=s}}function Da(n,e,t,i){if(tl){var l=Fs(n,e,t,i);if(l===null)ss(n,e,i,il,t),Mr(n,i);else if(c1(l,n,e,t,i))i.stopPropagation();else if(Mr(n,i),e&4&&-1<o1.indexOf(n)){for(;l!==null;){var s=gi(l);if(s!==null&&wo(s),s=Fs(n,e,t,i),s===null&&ss(n,e,i,il,t),s===l)break;l=s}l!==null&&i.stopPropagation()}else ss(n,e,i,null,t)}}var il=null;function Fs(n,e,t,i){if(il=null,n=Na(i),n=Pe(n),n!==null)if(e=We(n),e===null)n=null;else if(t=e.tag,t===13){if(n=xo(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return il=n,null}function Do(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n1()){case Sa:return 1;case zo:return 4;case nl:case e1:return 16;case ho:return 536870912;default:return 16}default:return 16}}var ce=null,Ma=null,Ui=null;function Mo(){if(Ui)return Ui;var n,e=Ma,t=e.length,i,l="value"in ce?ce.value:ce.textContent,s=l.length;for(n=0;n<t&&e[n]===l[n];n++);var a=t-n;for(i=1;i<=a&&e[t-i]===l[s-i];i++);return Ui=l.slice(n,1<i?1-i:void 0)}function Ji(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Si(){return!0}function Tr(){return!1}function Cn(n){function e(t,i,l,s,a){this._reactName=t,this._targetInst=l,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var u in n)n.hasOwnProperty(u)&&(t=n[u],this[u]=t?t(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Si:Tr,this.isPropagationStopped=Tr,this}return H(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),e}var pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pa=Cn(pt),di=H({},pt,{view:0,detail:0}),g1=Cn(di),Gl,Xl,Et,wl=H({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ta,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Et&&(Et&&n.type==="mousemove"?(Gl=n.screenX-Et.screenX,Xl=n.screenY-Et.screenY):Xl=Gl=0,Et=n),Gl)},movementY:function(n){return"movementY"in n?n.movementY:Xl}}),Lr=Cn(wl),f1=H({},wl,{dataTransfer:0}),x1=Cn(f1),m1=H({},di,{relatedTarget:0}),Zl=Cn(m1),v1=H({},pt,{animationName:0,elapsedTime:0,pseudoElement:0}),p1=Cn(v1),z1=H({},pt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),h1=Cn(z1),k1=H({},pt,{data:0}),Ir=Cn(k1),_1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=N1[n])?!!e[n]:!1}function Ta(){return S1}var E1=H({},di,{key:function(n){if(n.key){var e=_1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ji(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?w1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ta,charCode:function(n){return n.type==="keypress"?Ji(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ji(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),C1=Cn(E1),D1=H({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rr=Cn(D1),M1=H({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ta}),P1=Cn(M1),T1=H({},pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),L1=Cn(T1),I1=H({},wl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),R1=Cn(I1),O1=[9,13,27,32],La=ne&&"CompositionEvent"in window,At=null;ne&&"documentMode"in document&&(At=document.documentMode);var F1=ne&&"TextEvent"in window&&!At,Po=ne&&(!La||At&&8<At&&11>=At),Or=" ",Fr=!1;function To(n,e){switch(n){case"keyup":return O1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lo(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Qe=!1;function $1(n,e){switch(n){case"compositionend":return Lo(e);case"keypress":return e.which!==32?null:(Fr=!0,Or);case"textInput":return n=e.data,n===Or&&Fr?null:n;default:return null}}function A1(n,e){if(Qe)return n==="compositionend"||!La&&To(n,e)?(n=Mo(),Ui=Ma=ce=null,Qe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Po&&e.locale!=="ko"?null:e.data;default:return null}}var U1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $r(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!U1[n.type]:e==="textarea"}function Io(n,e,t,i){co(i),e=ll(e,"onChange"),0<e.length&&(t=new Pa("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ut=null,bt=null;function J1(n){Ho(n,0)}function Nl(n){var e=Ge(n);if(io(e))return n}function W1(n,e){if(n==="change")return e}var Ro=!1;if(ne){var bl;if(ne){var ns="oninput"in document;if(!ns){var Ar=document.createElement("div");Ar.setAttribute("oninput","return;"),ns=typeof Ar.oninput=="function"}bl=ns}else bl=!1;Ro=bl&&(!document.documentMode||9<document.documentMode)}function Ur(){Ut&&(Ut.detachEvent("onpropertychange",Oo),bt=Ut=null)}function Oo(n){if(n.propertyName==="value"&&Nl(bt)){var e=[];Io(e,bt,n,Na(n)),fo(J1,e)}}function V1(n,e,t){n==="focusin"?(Ur(),Ut=e,bt=t,Ut.attachEvent("onpropertychange",Oo)):n==="focusout"&&Ur()}function B1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Nl(bt)}function H1(n,e){if(n==="click")return Nl(e)}function q1(n,e){if(n==="input"||n==="change")return Nl(e)}function Q1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Wn=typeof Object.is=="function"?Object.is:Q1;function ni(n,e){if(Wn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var l=t[i];if(!ps.call(e,l)||!Wn(n[l],e[l]))return!1}return!0}function Jr(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wr(n,e){var t=Jr(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Jr(t)}}function Fo(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Fo(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function $o(){for(var n=window,e=Xi();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Xi(n.document)}return e}function Ia(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Y1(n){var e=$o(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Fo(t.ownerDocument.documentElement,t)){if(i!==null&&Ia(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var l=t.textContent.length,s=Math.min(i.start,l);i=i.end===void 0?s:Math.min(i.end,l),!n.extend&&s>i&&(l=i,i=s,s=l),l=Wr(t,s);var a=Wr(t,i);l&&a&&(n.rangeCount!==1||n.anchorNode!==l.node||n.anchorOffset!==l.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var K1=ne&&"documentMode"in document&&11>=document.documentMode,Ye=null,$s=null,Jt=null,As=!1;function Vr(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;As||Ye==null||Ye!==Xi(i)||(i=Ye,"selectionStart"in i&&Ia(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Jt&&ni(Jt,i)||(Jt=i,i=ll($s,"onSelect"),0<i.length&&(e=new Pa("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ye)))}function Ei(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ke={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},es={},Ao={};ne&&(Ao=document.createElement("div").style,"AnimationEvent"in window||(delete Ke.animationend.animation,delete Ke.animationiteration.animation,delete Ke.animationstart.animation),"TransitionEvent"in window||delete Ke.transitionend.transition);function Sl(n){if(es[n])return es[n];if(!Ke[n])return n;var e=Ke[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ao)return es[n]=e[t];return n}var Uo=Sl("animationend"),Jo=Sl("animationiteration"),Wo=Sl("animationstart"),Vo=Sl("transitionend"),Bo=new Map,Br="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _e(n,e){Bo.set(n,e),Je(e,[n])}for(var ts=0;ts<Br.length;ts++){var is=Br[ts],G1=is.toLowerCase(),X1=is[0].toUpperCase()+is.slice(1);_e(G1,"on"+X1)}_e(Uo,"onAnimationEnd");_e(Jo,"onAnimationIteration");_e(Wo,"onAnimationStart");_e("dblclick","onDoubleClick");_e("focusin","onFocus");_e("focusout","onBlur");_e(Vo,"onTransitionEnd");ct("onMouseEnter",["mouseout","mouseover"]);ct("onMouseLeave",["mouseout","mouseover"]);ct("onPointerEnter",["pointerout","pointerover"]);ct("onPointerLeave",["pointerout","pointerover"]);Je("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Je("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Je("onBeforeInput",["compositionend","keypress","textInput","paste"]);Je("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Je("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Je("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ot="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ot));function Hr(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Gj(i,e,void 0,n),n.currentTarget=null}function Ho(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],l=i.event;i=i.listeners;n:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var u=i[a],o=u.instance,c=u.currentTarget;if(u=u.listener,o!==s&&l.isPropagationStopped())break n;Hr(l,u,c),s=o}else for(a=0;a<i.length;a++){if(u=i[a],o=u.instance,c=u.currentTarget,u=u.listener,o!==s&&l.isPropagationStopped())break n;Hr(l,u,c),s=o}}}if(bi)throw n=Is,bi=!1,Is=null,n}function A(n,e){var t=e[Bs];t===void 0&&(t=e[Bs]=new Set);var i=n+"__bubble";t.has(i)||(qo(e,n,2,!1),t.add(i))}function ls(n,e,t){var i=0;e&&(i|=4),qo(t,n,i,e)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function ei(n){if(!n[Ci]){n[Ci]=!0,Zu.forEach(function(t){t!=="selectionchange"&&(Z1.has(t)||ls(t,!1,n),ls(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ci]||(e[Ci]=!0,ls("selectionchange",!1,e))}}function qo(n,e,t,i){switch(Do(e)){case 1:var l=y1;break;case 4:l=d1;break;default:l=Da}t=l.bind(null,e,t,n),l=void 0,!Ls||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),i?l!==void 0?n.addEventListener(e,t,{capture:!0,passive:l}):n.addEventListener(e,t,!0):l!==void 0?n.addEventListener(e,t,{passive:l}):n.addEventListener(e,t,!1)}function ss(n,e,t,i,l){var s=i;if(!(e&1)&&!(e&2)&&i!==null)n:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var u=i.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(a===4)for(a=i.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===l||o.nodeType===8&&o.parentNode===l))return;a=a.return}for(;u!==null;){if(a=Pe(u),a===null)return;if(o=a.tag,o===5||o===6){i=s=a;continue n}u=u.parentNode}}i=i.return}fo(function(){var c=s,f=Na(t),g=[];n:{var x=Bo.get(n);if(x!==void 0){var m=Pa,v=n;switch(n){case"keypress":if(Ji(t)===0)break n;case"keydown":case"keyup":m=C1;break;case"focusin":v="focus",m=Zl;break;case"focusout":v="blur",m=Zl;break;case"beforeblur":case"afterblur":m=Zl;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Lr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=x1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=P1;break;case Uo:case Jo:case Wo:m=p1;break;case Vo:m=L1;break;case"scroll":m=g1;break;case"wheel":m=R1;break;case"copy":case"cut":case"paste":m=h1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Rr}var p=(e&4)!==0,D=!p&&n==="scroll",y=p?x!==null?x+"Capture":null:x;p=[];for(var j=c,d;j!==null;){d=j;var z=d.stateNode;if(d.tag===5&&z!==null&&(d=z,y!==null&&(z=Kt(j,y),z!=null&&p.push(ti(j,z,d)))),D)break;j=j.return}0<p.length&&(x=new m(x,v,null,t,f),g.push({event:x,listeners:p}))}}if(!(e&7)){n:{if(x=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",x&&t!==Ps&&(v=t.relatedTarget||t.fromElement)&&(Pe(v)||v[ee]))break n;if((m||x)&&(x=f.window===f?f:(x=f.ownerDocument)?x.defaultView||x.parentWindow:window,m?(v=t.relatedTarget||t.toElement,m=c,v=v?Pe(v):null,v!==null&&(D=We(v),v!==D||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(p=Lr,z="onMouseLeave",y="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(p=Rr,z="onPointerLeave",y="onPointerEnter",j="pointer"),D=m==null?x:Ge(m),d=v==null?x:Ge(v),x=new p(z,j+"leave",m,t,f),x.target=D,x.relatedTarget=d,z=null,Pe(f)===c&&(p=new p(y,j+"enter",v,t,f),p.target=d,p.relatedTarget=D,z=p),D=z,m&&v)e:{for(p=m,y=v,j=0,d=p;d;d=Ve(d))j++;for(d=0,z=y;z;z=Ve(z))d++;for(;0<j-d;)p=Ve(p),j--;for(;0<d-j;)y=Ve(y),d--;for(;j--;){if(p===y||y!==null&&p===y.alternate)break e;p=Ve(p),y=Ve(y)}p=null}else p=null;m!==null&&qr(g,x,m,p,!1),v!==null&&D!==null&&qr(g,D,v,p,!0)}}n:{if(x=c?Ge(c):window,m=x.nodeName&&x.nodeName.toLowerCase(),m==="select"||m==="input"&&x.type==="file")var _=W1;else if($r(x))if(Ro)_=q1;else{_=B1;var E=V1}else(m=x.nodeName)&&m.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(_=H1);if(_&&(_=_(n,c))){Io(g,_,t,f);break n}E&&E(n,x,c),n==="focusout"&&(E=x._wrapperState)&&E.controlled&&x.type==="number"&&Ss(x,"number",x.value)}switch(E=c?Ge(c):window,n){case"focusin":($r(E)||E.contentEditable==="true")&&(Ye=E,$s=c,Jt=null);break;case"focusout":Jt=$s=Ye=null;break;case"mousedown":As=!0;break;case"contextmenu":case"mouseup":case"dragend":As=!1,Vr(g,t,f);break;case"selectionchange":if(K1)break;case"keydown":case"keyup":Vr(g,t,f)}var N;if(La)n:{switch(n){case"compositionstart":var k="onCompositionStart";break n;case"compositionend":k="onCompositionEnd";break n;case"compositionupdate":k="onCompositionUpdate";break n}k=void 0}else Qe?To(n,t)&&(k="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(Po&&t.locale!=="ko"&&(Qe||k!=="onCompositionStart"?k==="onCompositionEnd"&&Qe&&(N=Mo()):(ce=f,Ma="value"in ce?ce.value:ce.textContent,Qe=!0)),E=ll(c,k),0<E.length&&(k=new Ir(k,n,null,t,f),g.push({event:k,listeners:E}),N?k.data=N:(N=Lo(t),N!==null&&(k.data=N)))),(N=F1?$1(n,t):A1(n,t))&&(c=ll(c,"onBeforeInput"),0<c.length&&(f=new Ir("onBeforeInput","beforeinput",null,t,f),g.push({event:f,listeners:c}),f.data=N))}Ho(g,e)})}function ti(n,e,t){return{instance:n,listener:e,currentTarget:t}}function ll(n,e){for(var t=e+"Capture",i=[];n!==null;){var l=n,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=Kt(n,t),s!=null&&i.unshift(ti(n,s,l)),s=Kt(n,e),s!=null&&i.push(ti(n,s,l))),n=n.return}return i}function Ve(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function qr(n,e,t,i,l){for(var s=e._reactName,a=[];t!==null&&t!==i;){var u=t,o=u.alternate,c=u.stateNode;if(o!==null&&o===i)break;u.tag===5&&c!==null&&(u=c,l?(o=Kt(t,s),o!=null&&a.unshift(ti(t,o,u))):l||(o=Kt(t,s),o!=null&&a.push(ti(t,o,u)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var b1=/\r\n?/g,ny=/\u0000|\uFFFD/g;function Qr(n){return(typeof n=="string"?n:""+n).replace(b1,`
`).replace(ny,"")}function Di(n,e,t){if(e=Qr(e),Qr(n)!==e&&t)throw Error(h(425))}function sl(){}var Us=null,Js=null;function Ws(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vs=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,Yr=typeof Promise=="function"?Promise:void 0,ty=typeof queueMicrotask=="function"?queueMicrotask:typeof Yr<"u"?function(n){return Yr.resolve(null).then(n).catch(iy)}:Vs;function iy(n){setTimeout(function(){throw n})}function as(n,e){var t=e,i=0;do{var l=t.nextSibling;if(n.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(i===0){n.removeChild(l),Zt(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=l}while(t);Zt(e)}function fe(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Kr(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var zt=Math.random().toString(36).slice(2),Hn="__reactFiber$"+zt,ii="__reactProps$"+zt,ee="__reactContainer$"+zt,Bs="__reactEvents$"+zt,ly="__reactListeners$"+zt,sy="__reactHandles$"+zt;function Pe(n){var e=n[Hn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ee]||t[Hn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Kr(n);n!==null;){if(t=n[Hn])return t;n=Kr(n)}return e}n=t,t=n.parentNode}return null}function gi(n){return n=n[Hn]||n[ee],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ge(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(h(33))}function El(n){return n[ii]||null}var Hs=[],Xe=-1;function we(n){return{current:n}}function U(n){0>Xe||(n.current=Hs[Xe],Hs[Xe]=null,Xe--)}function $(n,e){Xe++,Hs[Xe]=n.current,n.current=e}var ke={},on=we(ke),pn=we(!1),Oe=ke;function jt(n,e){var t=n.type.contextTypes;if(!t)return ke;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in t)l[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=l),l}function zn(n){return n=n.childContextTypes,n!=null}function al(){U(pn),U(on)}function Gr(n,e,t){if(on.current!==ke)throw Error(h(168));$(on,e),$(pn,t)}function Qo(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var l in i)if(!(l in e))throw Error(h(108,Vj(n)||"Unknown",l));return H({},t,i)}function rl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ke,Oe=on.current,$(on,n),$(pn,pn.current),!0}function Xr(n,e,t){var i=n.stateNode;if(!i)throw Error(h(169));t?(n=Qo(n,e,Oe),i.__reactInternalMemoizedMergedChildContext=n,U(pn),U(on),$(on,n)):U(pn),$(pn,t)}var Kn=null,Cl=!1,rs=!1;function Yo(n){Kn===null?Kn=[n]:Kn.push(n)}function ay(n){Cl=!0,Yo(n)}function Ne(){if(!rs&&Kn!==null){rs=!0;var n=0,e=F;try{var t=Kn;for(F=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Kn=null,Cl=!1}catch(l){throw Kn!==null&&(Kn=Kn.slice(n+1)),po(Sa,Ne),l}finally{F=e,rs=!1}}return null}var Ze=[],be=0,ul=null,ol=0,Dn=[],Mn=0,Fe=null,Gn=1,Xn="";function De(n,e){Ze[be++]=ol,Ze[be++]=ul,ul=n,ol=e}function Ko(n,e,t){Dn[Mn++]=Gn,Dn[Mn++]=Xn,Dn[Mn++]=Fe,Fe=n;var i=Gn;n=Xn;var l=32-An(i)-1;i&=~(1<<l),t+=1;var s=32-An(e)+l;if(30<s){var a=l-l%5;s=(i&(1<<a)-1).toString(32),i>>=a,l-=a,Gn=1<<32-An(e)+l|t<<l|i,Xn=s+n}else Gn=1<<s|t<<l|i,Xn=n}function Ra(n){n.return!==null&&(De(n,1),Ko(n,1,0))}function Oa(n){for(;n===ul;)ul=Ze[--be],Ze[be]=null,ol=Ze[--be],Ze[be]=null;for(;n===Fe;)Fe=Dn[--Mn],Dn[Mn]=null,Xn=Dn[--Mn],Dn[Mn]=null,Gn=Dn[--Mn],Dn[Mn]=null}var Nn=null,wn=null,J=!1,$n=null;function Go(n,e){var t=Pn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Zr(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Nn=n,wn=fe(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Nn=n,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Fe!==null?{id:Gn,overflow:Xn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Pn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Nn=n,wn=null,!0):!1;default:return!1}}function qs(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Qs(n){if(J){var e=wn;if(e){var t=e;if(!Zr(n,e)){if(qs(n))throw Error(h(418));e=fe(t.nextSibling);var i=Nn;e&&Zr(n,e)?Go(i,t):(n.flags=n.flags&-4097|2,J=!1,Nn=n)}}else{if(qs(n))throw Error(h(418));n.flags=n.flags&-4097|2,J=!1,Nn=n}}}function br(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Nn=n}function Mi(n){if(n!==Nn)return!1;if(!J)return br(n),J=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ws(n.type,n.memoizedProps)),e&&(e=wn)){if(qs(n))throw Xo(),Error(h(418));for(;e;)Go(n,e),e=fe(e.nextSibling)}if(br(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){wn=fe(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}wn=null}}else wn=Nn?fe(n.stateNode.nextSibling):null;return!0}function Xo(){for(var n=wn;n;)n=fe(n.nextSibling)}function yt(){wn=Nn=null,J=!1}function Fa(n){$n===null?$n=[n]:$n.push(n)}var ry=le.ReactCurrentBatchConfig;function Ct(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(h(309));var i=t.stateNode}if(!i)throw Error(h(147,n));var l=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var u=l.refs;a===null?delete u[s]:u[s]=a},e._stringRef=s,e)}if(typeof n!="string")throw Error(h(284));if(!t._owner)throw Error(h(290,n))}return n}function Pi(n,e){throw n=Object.prototype.toString.call(e),Error(h(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function nu(n){var e=n._init;return e(n._payload)}function Zo(n){function e(y,j){if(n){var d=y.deletions;d===null?(y.deletions=[j],y.flags|=16):d.push(j)}}function t(y,j){if(!n)return null;for(;j!==null;)e(y,j),j=j.sibling;return null}function i(y,j){for(y=new Map;j!==null;)j.key!==null?y.set(j.key,j):y.set(j.index,j),j=j.sibling;return y}function l(y,j){return y=pe(y,j),y.index=0,y.sibling=null,y}function s(y,j,d){return y.index=d,n?(d=y.alternate,d!==null?(d=d.index,d<j?(y.flags|=2,j):d):(y.flags|=2,j)):(y.flags|=1048576,j)}function a(y){return n&&y.alternate===null&&(y.flags|=2),y}function u(y,j,d,z){return j===null||j.tag!==6?(j=gs(d,y.mode,z),j.return=y,j):(j=l(j,d),j.return=y,j)}function o(y,j,d,z){var _=d.type;return _===qe?f(y,j,d.props.children,z,d.key):j!==null&&(j.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ae&&nu(_)===j.type)?(z=l(j,d.props),z.ref=Ct(y,j,d),z.return=y,z):(z=Yi(d.type,d.key,d.props,null,y.mode,z),z.ref=Ct(y,j,d),z.return=y,z)}function c(y,j,d,z){return j===null||j.tag!==4||j.stateNode.containerInfo!==d.containerInfo||j.stateNode.implementation!==d.implementation?(j=fs(d,y.mode,z),j.return=y,j):(j=l(j,d.children||[]),j.return=y,j)}function f(y,j,d,z,_){return j===null||j.tag!==7?(j=Re(d,y.mode,z,_),j.return=y,j):(j=l(j,d),j.return=y,j)}function g(y,j,d){if(typeof j=="string"&&j!==""||typeof j=="number")return j=gs(""+j,y.mode,d),j.return=y,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case zi:return d=Yi(j.type,j.key,j.props,null,y.mode,d),d.ref=Ct(y,null,j),d.return=y,d;case He:return j=fs(j,y.mode,d),j.return=y,j;case ae:var z=j._init;return g(y,z(j._payload),d)}if(It(j)||_t(j))return j=Re(j,y.mode,d,null),j.return=y,j;Pi(y,j)}return null}function x(y,j,d,z){var _=j!==null?j.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return _!==null?null:u(y,j,""+d,z);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case zi:return d.key===_?o(y,j,d,z):null;case He:return d.key===_?c(y,j,d,z):null;case ae:return _=d._init,x(y,j,_(d._payload),z)}if(It(d)||_t(d))return _!==null?null:f(y,j,d,z,null);Pi(y,d)}return null}function m(y,j,d,z,_){if(typeof z=="string"&&z!==""||typeof z=="number")return y=y.get(d)||null,u(j,y,""+z,_);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case zi:return y=y.get(z.key===null?d:z.key)||null,o(j,y,z,_);case He:return y=y.get(z.key===null?d:z.key)||null,c(j,y,z,_);case ae:var E=z._init;return m(y,j,d,E(z._payload),_)}if(It(z)||_t(z))return y=y.get(d)||null,f(j,y,z,_,null);Pi(j,z)}return null}function v(y,j,d,z){for(var _=null,E=null,N=j,k=j=0,I=null;N!==null&&k<d.length;k++){N.index>k?(I=N,N=null):I=N.sibling;var T=x(y,N,d[k],z);if(T===null){N===null&&(N=I);break}n&&N&&T.alternate===null&&e(y,N),j=s(T,j,k),E===null?_=T:E.sibling=T,E=T,N=I}if(k===d.length)return t(y,N),J&&De(y,k),_;if(N===null){for(;k<d.length;k++)N=g(y,d[k],z),N!==null&&(j=s(N,j,k),E===null?_=N:E.sibling=N,E=N);return J&&De(y,k),_}for(N=i(y,N);k<d.length;k++)I=m(N,y,k,d[k],z),I!==null&&(n&&I.alternate!==null&&N.delete(I.key===null?k:I.key),j=s(I,j,k),E===null?_=I:E.sibling=I,E=I);return n&&N.forEach(function(kn){return e(y,kn)}),J&&De(y,k),_}function p(y,j,d,z){var _=_t(d);if(typeof _!="function")throw Error(h(150));if(d=_.call(d),d==null)throw Error(h(151));for(var E=_=null,N=j,k=j=0,I=null,T=d.next();N!==null&&!T.done;k++,T=d.next()){N.index>k?(I=N,N=null):I=N.sibling;var kn=x(y,N,T.value,z);if(kn===null){N===null&&(N=I);break}n&&N&&kn.alternate===null&&e(y,N),j=s(kn,j,k),E===null?_=kn:E.sibling=kn,E=kn,N=I}if(T.done)return t(y,N),J&&De(y,k),_;if(N===null){for(;!T.done;k++,T=d.next())T=g(y,T.value,z),T!==null&&(j=s(T,j,k),E===null?_=T:E.sibling=T,E=T);return J&&De(y,k),_}for(N=i(y,N);!T.done;k++,T=d.next())T=m(N,y,k,T.value,z),T!==null&&(n&&T.alternate!==null&&N.delete(T.key===null?k:T.key),j=s(T,j,k),E===null?_=T:E.sibling=T,E=T);return n&&N.forEach(function(ht){return e(y,ht)}),J&&De(y,k),_}function D(y,j,d,z){if(typeof d=="object"&&d!==null&&d.type===qe&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case zi:n:{for(var _=d.key,E=j;E!==null;){if(E.key===_){if(_=d.type,_===qe){if(E.tag===7){t(y,E.sibling),j=l(E,d.props.children),j.return=y,y=j;break n}}else if(E.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===ae&&nu(_)===E.type){t(y,E.sibling),j=l(E,d.props),j.ref=Ct(y,E,d),j.return=y,y=j;break n}t(y,E);break}else e(y,E);E=E.sibling}d.type===qe?(j=Re(d.props.children,y.mode,z,d.key),j.return=y,y=j):(z=Yi(d.type,d.key,d.props,null,y.mode,z),z.ref=Ct(y,j,d),z.return=y,y=z)}return a(y);case He:n:{for(E=d.key;j!==null;){if(j.key===E)if(j.tag===4&&j.stateNode.containerInfo===d.containerInfo&&j.stateNode.implementation===d.implementation){t(y,j.sibling),j=l(j,d.children||[]),j.return=y,y=j;break n}else{t(y,j);break}else e(y,j);j=j.sibling}j=fs(d,y.mode,z),j.return=y,y=j}return a(y);case ae:return E=d._init,D(y,j,E(d._payload),z)}if(It(d))return v(y,j,d,z);if(_t(d))return p(y,j,d,z);Pi(y,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,j!==null&&j.tag===6?(t(y,j.sibling),j=l(j,d),j.return=y,y=j):(t(y,j),j=gs(d,y.mode,z),j.return=y,y=j),a(y)):t(y,j)}return D}var dt=Zo(!0),bo=Zo(!1),cl=we(null),jl=null,nt=null,$a=null;function Aa(){$a=nt=jl=null}function Ua(n){var e=cl.current;U(cl),n._currentValue=e}function Ys(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ut(n,e){jl=n,$a=nt=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(vn=!0),n.firstContext=null)}function Ln(n){var e=n._currentValue;if($a!==n)if(n={context:n,memoizedValue:e,next:null},nt===null){if(jl===null)throw Error(h(308));nt=n,jl.dependencies={lanes:0,firstContext:n}}else nt=nt.next=n;return e}var Te=null;function Ja(n){Te===null?Te=[n]:Te.push(n)}function nc(n,e,t,i){var l=e.interleaved;return l===null?(t.next=t,Ja(e)):(t.next=l.next,l.next=t),e.interleaved=t,te(n,i)}function te(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var re=!1;function Wa(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ec(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Zn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function xe(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,R&2){var l=i.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),i.pending=e,te(n,t)}return l=i.interleaved,l===null?(e.next=e,Ja(i)):(e.next=l.next,l.next=e),i.interleaved=e,te(n,t)}function Wi(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ea(n,t)}}function eu(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var l=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?l=s=a:s=s.next=a,t=t.next}while(t!==null);s===null?l=s=e:s=s.next=e}else l=s=e;t={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function yl(n,e,t,i){var l=n.updateQueue;re=!1;var s=l.firstBaseUpdate,a=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var o=u,c=o.next;o.next=null,a===null?s=c:a.next=c,a=o;var f=n.alternate;f!==null&&(f=f.updateQueue,u=f.lastBaseUpdate,u!==a&&(u===null?f.firstBaseUpdate=c:u.next=c,f.lastBaseUpdate=o))}if(s!==null){var g=l.baseState;a=0,f=c=o=null,u=s;do{var x=u.lane,m=u.eventTime;if((i&x)===x){f!==null&&(f=f.next={eventTime:m,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});n:{var v=n,p=u;switch(x=e,m=t,p.tag){case 1:if(v=p.payload,typeof v=="function"){g=v.call(m,g,x);break n}g=v;break n;case 3:v.flags=v.flags&-65537|128;case 0:if(v=p.payload,x=typeof v=="function"?v.call(m,g,x):v,x==null)break n;g=H({},g,x);break n;case 2:re=!0}}u.callback!==null&&u.lane!==0&&(n.flags|=64,x=l.effects,x===null?l.effects=[u]:x.push(u))}else m={eventTime:m,lane:x,tag:u.tag,payload:u.payload,callback:u.callback,next:null},f===null?(c=f=m,o=g):f=f.next=m,a|=x;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;x=u,u=x.next,x.next=null,l.lastBaseUpdate=x,l.shared.pending=null}}while(!0);if(f===null&&(o=g),l.baseState=o,l.firstBaseUpdate=c,l.lastBaseUpdate=f,e=l.shared.interleaved,e!==null){l=e;do a|=l.lane,l=l.next;while(l!==e)}else s===null&&(l.shared.lanes=0);Ae|=a,n.lanes=a,n.memoizedState=g}}function tu(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],l=i.callback;if(l!==null){if(i.callback=null,i=t,typeof l!="function")throw Error(h(191,l));l.call(i)}}}var fi={},Qn=we(fi),li=we(fi),si=we(fi);function Le(n){if(n===fi)throw Error(h(174));return n}function Va(n,e){switch($(si,e),$(li,n),$(Qn,fi),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cs(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Cs(e,n)}U(Qn),$(Qn,e)}function gt(){U(Qn),U(li),U(si)}function tc(n){Le(si.current);var e=Le(Qn.current),t=Cs(e,n.type);e!==t&&($(li,n),$(Qn,t))}function Ba(n){li.current===n&&(U(Qn),U(li))}var W=we(0);function dl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var us=[];function Ha(){for(var n=0;n<us.length;n++)us[n]._workInProgressVersionPrimary=null;us.length=0}var Vi=le.ReactCurrentDispatcher,os=le.ReactCurrentBatchConfig,$e=0,B=null,G=null,b=null,gl=!1,Wt=!1,ai=0,uy=0;function an(){throw Error(h(321))}function qa(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Wn(n[t],e[t]))return!1;return!0}function Qa(n,e,t,i,l,s){if($e=s,B=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vi.current=n===null||n.memoizedState===null?yy:dy,n=t(i,l),Wt){s=0;do{if(Wt=!1,ai=0,25<=s)throw Error(h(301));s+=1,b=G=null,e.updateQueue=null,Vi.current=gy,n=t(i,l)}while(Wt)}if(Vi.current=fl,e=G!==null&&G.next!==null,$e=0,b=G=B=null,gl=!1,e)throw Error(h(300));return n}function Ya(){var n=ai!==0;return ai=0,n}function Bn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return b===null?B.memoizedState=b=n:b=b.next=n,b}function In(){if(G===null){var n=B.alternate;n=n!==null?n.memoizedState:null}else n=G.next;var e=b===null?B.memoizedState:b.next;if(e!==null)b=e,G=n;else{if(n===null)throw Error(h(310));G=n,n={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},b===null?B.memoizedState=b=n:b=b.next=n}return b}function ri(n,e){return typeof e=="function"?e(n):e}function cs(n){var e=In(),t=e.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=n;var i=G,l=i.baseQueue,s=t.pending;if(s!==null){if(l!==null){var a=l.next;l.next=s.next,s.next=a}i.baseQueue=l=s,t.pending=null}if(l!==null){s=l.next,i=i.baseState;var u=a=null,o=null,c=s;do{var f=c.lane;if(($e&f)===f)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var g={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(u=o=g,a=i):o=o.next=g,B.lanes|=f,Ae|=f}c=c.next}while(c!==null&&c!==s);o===null?a=i:o.next=u,Wn(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=o,t.lastRenderedState=i}if(n=t.interleaved,n!==null){l=n;do s=l.lane,B.lanes|=s,Ae|=s,l=l.next;while(l!==n)}else l===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function js(n){var e=In(),t=e.queue;if(t===null)throw Error(h(311));t.lastRenderedReducer=n;var i=t.dispatch,l=t.pending,s=e.memoizedState;if(l!==null){t.pending=null;var a=l=l.next;do s=n(s,a.action),a=a.next;while(a!==l);Wn(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function ic(){}function lc(n,e){var t=B,i=In(),l=e(),s=!Wn(i.memoizedState,l);if(s&&(i.memoizedState=l,vn=!0),i=i.queue,Ka(rc.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||b!==null&&b.memoizedState.tag&1){if(t.flags|=2048,ui(9,ac.bind(null,t,i,l,e),void 0,null),nn===null)throw Error(h(349));$e&30||sc(t,e,l)}return l}function sc(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=B.updateQueue,e===null?(e={lastEffect:null,stores:null},B.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ac(n,e,t,i){e.value=t,e.getSnapshot=i,uc(e)&&oc(n)}function rc(n,e,t){return t(function(){uc(e)&&oc(n)})}function uc(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Wn(n,t)}catch{return!0}}function oc(n){var e=te(n,1);e!==null&&Un(e,n,1,-1)}function iu(n){var e=Bn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ri,lastRenderedState:n},e.queue=n,n=n.dispatch=jy.bind(null,B,n),[e.memoizedState,n]}function ui(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=B.updateQueue,e===null?(e={lastEffect:null,stores:null},B.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function cc(){return In().memoizedState}function Bi(n,e,t,i){var l=Bn();B.flags|=n,l.memoizedState=ui(1|e,t,void 0,i===void 0?null:i)}function Dl(n,e,t,i){var l=In();i=i===void 0?null:i;var s=void 0;if(G!==null){var a=G.memoizedState;if(s=a.destroy,i!==null&&qa(i,a.deps)){l.memoizedState=ui(e,t,s,i);return}}B.flags|=n,l.memoizedState=ui(1|e,t,s,i)}function lu(n,e){return Bi(8390656,8,n,e)}function Ka(n,e){return Dl(2048,8,n,e)}function jc(n,e){return Dl(4,2,n,e)}function yc(n,e){return Dl(4,4,n,e)}function dc(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function gc(n,e,t){return t=t!=null?t.concat([n]):null,Dl(4,4,dc.bind(null,e,n),t)}function Ga(){}function fc(n,e){var t=In();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&qa(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function xc(n,e){var t=In();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&qa(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function mc(n,e,t){return $e&21?(Wn(t,e)||(t=ko(),B.lanes|=t,Ae|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,vn=!0),n.memoizedState=t)}function oy(n,e){var t=F;F=t!==0&&4>t?t:4,n(!0);var i=os.transition;os.transition={};try{n(!1),e()}finally{F=t,os.transition=i}}function vc(){return In().memoizedState}function cy(n,e,t){var i=ve(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},pc(n))zc(e,t);else if(t=nc(n,e,t,i),t!==null){var l=yn();Un(t,n,i,l),hc(t,e,i)}}function jy(n,e,t){var i=ve(n),l={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(pc(n))zc(e,l);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,u=s(a,t);if(l.hasEagerState=!0,l.eagerState=u,Wn(u,a)){var o=e.interleaved;o===null?(l.next=l,Ja(e)):(l.next=o.next,o.next=l),e.interleaved=l;return}}catch{}finally{}t=nc(n,e,l,i),t!==null&&(l=yn(),Un(t,n,i,l),hc(t,e,i))}}function pc(n){var e=n.alternate;return n===B||e!==null&&e===B}function zc(n,e){Wt=gl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function hc(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ea(n,t)}}var fl={readContext:Ln,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useInsertionEffect:an,useLayoutEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useMutableSource:an,useSyncExternalStore:an,useId:an,unstable_isNewReconciler:!1},yy={readContext:Ln,useCallback:function(n,e){return Bn().memoizedState=[n,e===void 0?null:e],n},useContext:Ln,useEffect:lu,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Bi(4194308,4,dc.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Bi(4194308,4,n,e)},useInsertionEffect:function(n,e){return Bi(4,2,n,e)},useMemo:function(n,e){var t=Bn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Bn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=cy.bind(null,B,n),[i.memoizedState,n]},useRef:function(n){var e=Bn();return n={current:n},e.memoizedState=n},useState:iu,useDebugValue:Ga,useDeferredValue:function(n){return Bn().memoizedState=n},useTransition:function(){var n=iu(!1),e=n[0];return n=oy.bind(null,n[1]),Bn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=B,l=Bn();if(J){if(t===void 0)throw Error(h(407));t=t()}else{if(t=e(),nn===null)throw Error(h(349));$e&30||sc(i,e,t)}l.memoizedState=t;var s={value:t,getSnapshot:e};return l.queue=s,lu(rc.bind(null,i,s,n),[n]),i.flags|=2048,ui(9,ac.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Bn(),e=nn.identifierPrefix;if(J){var t=Xn,i=Gn;t=(i&~(1<<32-An(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=ai++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=uy++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},dy={readContext:Ln,useCallback:fc,useContext:Ln,useEffect:Ka,useImperativeHandle:gc,useInsertionEffect:jc,useLayoutEffect:yc,useMemo:xc,useReducer:cs,useRef:cc,useState:function(){return cs(ri)},useDebugValue:Ga,useDeferredValue:function(n){var e=In();return mc(e,G.memoizedState,n)},useTransition:function(){var n=cs(ri)[0],e=In().memoizedState;return[n,e]},useMutableSource:ic,useSyncExternalStore:lc,useId:vc,unstable_isNewReconciler:!1},gy={readContext:Ln,useCallback:fc,useContext:Ln,useEffect:Ka,useImperativeHandle:gc,useInsertionEffect:jc,useLayoutEffect:yc,useMemo:xc,useReducer:js,useRef:cc,useState:function(){return js(ri)},useDebugValue:Ga,useDeferredValue:function(n){var e=In();return G===null?e.memoizedState=n:mc(e,G.memoizedState,n)},useTransition:function(){var n=js(ri)[0],e=In().memoizedState;return[n,e]},useMutableSource:ic,useSyncExternalStore:lc,useId:vc,unstable_isNewReconciler:!1};function On(n,e){if(n&&n.defaultProps){e=H({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Ks(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:H({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Ml={isMounted:function(n){return(n=n._reactInternals)?We(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=yn(),l=ve(n),s=Zn(i,l);s.payload=e,t!=null&&(s.callback=t),e=xe(n,s,l),e!==null&&(Un(e,n,l,i),Wi(e,n,l))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=yn(),l=ve(n),s=Zn(i,l);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=xe(n,s,l),e!==null&&(Un(e,n,l,i),Wi(e,n,l))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=yn(),i=ve(n),l=Zn(t,i);l.tag=2,e!=null&&(l.callback=e),e=xe(n,l,i),e!==null&&(Un(e,n,i,t),Wi(e,n,i))}};function su(n,e,t,i,l,s,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ni(t,i)||!ni(l,s):!0}function kc(n,e,t){var i=!1,l=ke,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(l=zn(e)?Oe:on.current,i=e.contextTypes,s=(i=i!=null)?jt(n,l):ke),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ml,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=l,n.__reactInternalMemoizedMaskedChildContext=s),e}function au(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Ml.enqueueReplaceState(e,e.state,null)}function Gs(n,e,t,i){var l=n.stateNode;l.props=t,l.state=n.memoizedState,l.refs={},Wa(n);var s=e.contextType;typeof s=="object"&&s!==null?l.context=Ln(s):(s=zn(e)?Oe:on.current,l.context=jt(n,s)),l.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ks(n,e,s,t),l.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(e=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),e!==l.state&&Ml.enqueueReplaceState(l,l.state,null),yl(n,t,l,i),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308)}function ft(n,e){try{var t="",i=e;do t+=Wj(i),i=i.return;while(i);var l=t}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:l,digest:null}}function ys(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Xs(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var fy=typeof WeakMap=="function"?WeakMap:Map;function _c(n,e,t){t=Zn(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ml||(ml=!0,ra=i),Xs(n,e)},t}function wc(n,e,t){t=Zn(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var l=e.value;t.payload=function(){return i(l)},t.callback=function(){Xs(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Xs(n,e),typeof i!="function"&&(me===null?me=new Set([this]):me.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function ru(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new fy;var l=new Set;i.set(e,l)}else l=i.get(e),l===void 0&&(l=new Set,i.set(e,l));l.has(t)||(l.add(t),n=Dy.bind(null,n,e,t),e.then(n,n))}function uu(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function ou(n,e,t,i,l){return n.mode&1?(n.flags|=65536,n.lanes=l,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Zn(-1,1),e.tag=2,xe(t,e,1))),t.lanes|=1),n)}var xy=le.ReactCurrentOwner,vn=!1;function cn(n,e,t,i){e.child=n===null?bo(e,null,t,i):dt(e,n.child,t,i)}function cu(n,e,t,i,l){t=t.render;var s=e.ref;return ut(e,l),i=Qa(n,e,t,i,s,l),t=Ya(),n!==null&&!vn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~l,ie(n,e,l)):(J&&t&&Ra(e),e.flags|=1,cn(n,e,i,l),e.child)}function ju(n,e,t,i,l){if(n===null){var s=t.type;return typeof s=="function"&&!lr(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Nc(n,e,s,i,l)):(n=Yi(t.type,null,i,e,e.mode,l),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&l)){var a=s.memoizedProps;if(t=t.compare,t=t!==null?t:ni,t(a,i)&&n.ref===e.ref)return ie(n,e,l)}return e.flags|=1,n=pe(s,i),n.ref=e.ref,n.return=e,e.child=n}function Nc(n,e,t,i,l){if(n!==null){var s=n.memoizedProps;if(ni(s,i)&&n.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(n.lanes&l)!==0)n.flags&131072&&(vn=!0);else return e.lanes=n.lanes,ie(n,e,l)}return Zs(n,e,t,i,l)}function Sc(n,e,t){var i=e.pendingProps,l=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(tt,_n),_n|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,$(tt,_n),_n|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,$(tt,_n),_n|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,$(tt,_n),_n|=i;return cn(n,e,l,t),e.child}function Ec(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Zs(n,e,t,i,l){var s=zn(t)?Oe:on.current;return s=jt(e,s),ut(e,l),t=Qa(n,e,t,i,s,l),i=Ya(),n!==null&&!vn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~l,ie(n,e,l)):(J&&i&&Ra(e),e.flags|=1,cn(n,e,t,l),e.child)}function yu(n,e,t,i,l){if(zn(t)){var s=!0;rl(e)}else s=!1;if(ut(e,l),e.stateNode===null)Hi(n,e),kc(e,t,i),Gs(e,t,i,l),i=!0;else if(n===null){var a=e.stateNode,u=e.memoizedProps;a.props=u;var o=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ln(c):(c=zn(t)?Oe:on.current,c=jt(e,c));var f=t.getDerivedStateFromProps,g=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==i||o!==c)&&au(e,a,i,c),re=!1;var x=e.memoizedState;a.state=x,yl(e,i,a,l),o=e.memoizedState,u!==i||x!==o||pn.current||re?(typeof f=="function"&&(Ks(e,t,f,i),o=e.memoizedState),(u=re||su(e,t,u,i,x,o,c))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=o),a.props=i,a.state=o,a.context=c,i=u):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,ec(n,e),u=e.memoizedProps,c=e.type===e.elementType?u:On(e.type,u),a.props=c,g=e.pendingProps,x=a.context,o=t.contextType,typeof o=="object"&&o!==null?o=Ln(o):(o=zn(t)?Oe:on.current,o=jt(e,o));var m=t.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==g||x!==o)&&au(e,a,i,o),re=!1,x=e.memoizedState,a.state=x,yl(e,i,a,l);var v=e.memoizedState;u!==g||x!==v||pn.current||re?(typeof m=="function"&&(Ks(e,t,m,i),v=e.memoizedState),(c=re||su(e,t,c,i,x,v,o)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,o)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===n.memoizedProps&&x===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&x===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=o,i=c):(typeof a.componentDidUpdate!="function"||u===n.memoizedProps&&x===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&x===n.memoizedState||(e.flags|=1024),i=!1)}return bs(n,e,t,i,s,l)}function bs(n,e,t,i,l,s){Ec(n,e);var a=(e.flags&128)!==0;if(!i&&!a)return l&&Xr(e,t,!1),ie(n,e,s);i=e.stateNode,xy.current=e;var u=a&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&a?(e.child=dt(e,n.child,null,s),e.child=dt(e,null,u,s)):cn(n,e,u,s),e.memoizedState=i.state,l&&Xr(e,t,!0),e.child}function Cc(n){var e=n.stateNode;e.pendingContext?Gr(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Gr(n,e.context,!1),Va(n,e.containerInfo)}function du(n,e,t,i,l){return yt(),Fa(l),e.flags|=256,cn(n,e,t,i),e.child}var na={dehydrated:null,treeContext:null,retryLane:0};function ea(n){return{baseLanes:n,cachePool:null,transitions:null}}function Dc(n,e,t){var i=e.pendingProps,l=W.current,s=!1,a=(e.flags&128)!==0,u;if((u=a)||(u=n!==null&&n.memoizedState===null?!1:(l&2)!==0),u?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(l|=1),$(W,l&1),n===null)return Qs(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,n=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ll(a,i,0,null),n=Re(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=ea(t),e.memoizedState=na,n):Xa(e,a));if(l=n.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return my(n,e,a,i,u,l,t);if(s){s=i.fallback,a=e.mode,l=n.child,u=l.sibling;var o={mode:"hidden",children:i.children};return!(a&1)&&e.child!==l?(i=e.child,i.childLanes=0,i.pendingProps=o,e.deletions=null):(i=pe(l,o),i.subtreeFlags=l.subtreeFlags&14680064),u!==null?s=pe(u,s):(s=Re(s,a,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=n.child.memoizedState,a=a===null?ea(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=n.childLanes&~t,e.memoizedState=na,i}return s=n.child,n=s.sibling,i=pe(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Xa(n,e){return e=Ll({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ti(n,e,t,i){return i!==null&&Fa(i),dt(e,n.child,null,t),n=Xa(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function my(n,e,t,i,l,s,a){if(t)return e.flags&256?(e.flags&=-257,i=ys(Error(h(422))),Ti(n,e,a,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,l=e.mode,i=Ll({mode:"visible",children:i.children},l,0,null),s=Re(s,l,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&dt(e,n.child,null,a),e.child.memoizedState=ea(a),e.memoizedState=na,s);if(!(e.mode&1))return Ti(n,e,a,null);if(l.data==="$!"){if(i=l.nextSibling&&l.nextSibling.dataset,i)var u=i.dgst;return i=u,s=Error(h(419)),i=ys(s,i,void 0),Ti(n,e,a,i)}if(u=(a&n.childLanes)!==0,vn||u){if(i=nn,i!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(i.suspendedLanes|a)?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,te(n,l),Un(i,n,l,-1))}return ir(),i=ys(Error(h(421))),Ti(n,e,a,i)}return l.data==="$?"?(e.flags|=128,e.child=n.child,e=My.bind(null,n),l._reactRetry=e,null):(n=s.treeContext,wn=fe(l.nextSibling),Nn=e,J=!0,$n=null,n!==null&&(Dn[Mn++]=Gn,Dn[Mn++]=Xn,Dn[Mn++]=Fe,Gn=n.id,Xn=n.overflow,Fe=e),e=Xa(e,i.children),e.flags|=4096,e)}function gu(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Ys(n.return,e,t)}function ds(n,e,t,i,l){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:l}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=l)}function Mc(n,e,t){var i=e.pendingProps,l=i.revealOrder,s=i.tail;if(cn(n,e,i.children,t),i=W.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&gu(n,t,e);else if(n.tag===19)gu(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if($(W,i),!(e.mode&1))e.memoizedState=null;else switch(l){case"forwards":for(t=e.child,l=null;t!==null;)n=t.alternate,n!==null&&dl(n)===null&&(l=t),t=t.sibling;t=l,t===null?(l=e.child,e.child=null):(l=t.sibling,t.sibling=null),ds(e,!1,l,t,s);break;case"backwards":for(t=null,l=e.child,e.child=null;l!==null;){if(n=l.alternate,n!==null&&dl(n)===null){e.child=l;break}n=l.sibling,l.sibling=t,t=l,l=n}ds(e,!0,t,null,s);break;case"together":ds(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hi(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function ie(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ae|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(h(153));if(e.child!==null){for(n=e.child,t=pe(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=pe(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function vy(n,e,t){switch(e.tag){case 3:Cc(e),yt();break;case 5:tc(e);break;case 1:zn(e.type)&&rl(e);break;case 4:Va(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,l=e.memoizedProps.value;$(cl,i._currentValue),i._currentValue=l;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?($(W,W.current&1),e.flags|=128,null):t&e.child.childLanes?Dc(n,e,t):($(W,W.current&1),n=ie(n,e,t),n!==null?n.sibling:null);$(W,W.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Mc(n,e,t);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$(W,W.current),i)break;return null;case 22:case 23:return e.lanes=0,Sc(n,e,t)}return ie(n,e,t)}var Pc,ta,Tc,Lc;Pc=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ta=function(){};Tc=function(n,e,t,i){var l=n.memoizedProps;if(l!==i){n=e.stateNode,Le(Qn.current);var s=null;switch(t){case"input":l=ws(n,l),i=ws(n,i),s=[];break;case"select":l=H({},l,{value:void 0}),i=H({},i,{value:void 0}),s=[];break;case"textarea":l=Es(n,l),i=Es(n,i),s=[];break;default:typeof l.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=sl)}Ds(t,i);var a;t=null;for(c in l)if(!i.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(a in u)u.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Qt.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var o=i[c];if(u=l?.[c],i.hasOwnProperty(c)&&o!==u&&(o!=null||u!=null))if(c==="style")if(u){for(a in u)!u.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in o)o.hasOwnProperty(a)&&u[a]!==o[a]&&(t||(t={}),t[a]=o[a])}else t||(s||(s=[]),s.push(c,t)),t=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,u=u?u.__html:void 0,o!=null&&u!==o&&(s=s||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(s=s||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Qt.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&A("scroll",n),s||u===o||(s=[])):(s=s||[]).push(c,o))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Lc=function(n,e,t,i){t!==i&&(e.flags|=4)};function Dt(n,e){if(!J)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function rn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var l=n.child;l!==null;)t|=l.lanes|l.childLanes,i|=l.subtreeFlags&14680064,i|=l.flags&14680064,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)t|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function py(n,e,t){var i=e.pendingProps;switch(Oa(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return zn(e.type)&&al(),rn(e),null;case 3:return i=e.stateNode,gt(),U(pn),U(on),Ha(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Mi(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(ca($n),$n=null))),ta(n,e),rn(e),null;case 5:Ba(e);var l=Le(si.current);if(t=e.type,n!==null&&e.stateNode!=null)Tc(n,e,t,i,l),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(h(166));return rn(e),null}if(n=Le(Qn.current),Mi(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Hn]=e,i[ii]=s,n=(e.mode&1)!==0,t){case"dialog":A("cancel",i),A("close",i);break;case"iframe":case"object":case"embed":A("load",i);break;case"video":case"audio":for(l=0;l<Ot.length;l++)A(Ot[l],i);break;case"source":A("error",i);break;case"img":case"image":case"link":A("error",i),A("load",i);break;case"details":A("toggle",i);break;case"input":_r(i,s),A("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},A("invalid",i);break;case"textarea":Nr(i,s),A("invalid",i)}Ds(t,s),l=null;for(var a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="children"?typeof u=="string"?i.textContent!==u&&(s.suppressHydrationWarning!==!0&&Di(i.textContent,u,n),l=["children",u]):typeof u=="number"&&i.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&Di(i.textContent,u,n),l=["children",""+u]):Qt.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&A("scroll",i)}switch(t){case"input":hi(i),wr(i,s,!0);break;case"textarea":hi(i),Sr(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=sl)}i=l,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ao(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=a.createElement(t,{is:i.is}):(n=a.createElement(t),t==="select"&&(a=n,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):n=a.createElementNS(n,t),n[Hn]=e,n[ii]=i,Pc(n,e,!1,!1),e.stateNode=n;n:{switch(a=Ms(t,i),t){case"dialog":A("cancel",n),A("close",n),l=i;break;case"iframe":case"object":case"embed":A("load",n),l=i;break;case"video":case"audio":for(l=0;l<Ot.length;l++)A(Ot[l],n);l=i;break;case"source":A("error",n),l=i;break;case"img":case"image":case"link":A("error",n),A("load",n),l=i;break;case"details":A("toggle",n),l=i;break;case"input":_r(n,i),l=ws(n,i),A("invalid",n);break;case"option":l=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},l=H({},i,{value:void 0}),A("invalid",n);break;case"textarea":Nr(n,i),l=Es(n,i),A("invalid",n);break;default:l=i}Ds(t,l),u=l;for(s in u)if(u.hasOwnProperty(s)){var o=u[s];s==="style"?oo(n,o):s==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&ro(n,o)):s==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&Yt(n,o):typeof o=="number"&&Yt(n,""+o):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qt.hasOwnProperty(s)?o!=null&&s==="onScroll"&&A("scroll",n):o!=null&&ha(n,s,o,a))}switch(t){case"input":hi(n),wr(n,i,!1);break;case"textarea":hi(n),Sr(n);break;case"option":i.value!=null&&n.setAttribute("value",""+he(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?lt(n,!!i.multiple,s,!1):i.defaultValue!=null&&lt(n,!!i.multiple,i.defaultValue,!0);break;default:typeof l.onClick=="function"&&(n.onclick=sl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break n;case"img":i=!0;break n;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(n&&e.stateNode!=null)Lc(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(h(166));if(t=Le(si.current),Le(Qn.current),Mi(e)){if(i=e.stateNode,t=e.memoizedProps,i[Hn]=e,(s=i.nodeValue!==t)&&(n=Nn,n!==null))switch(n.tag){case 3:Di(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Di(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Hn]=e,e.stateNode=i}return rn(e),null;case 13:if(U(W),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(J&&wn!==null&&e.mode&1&&!(e.flags&128))Xo(),yt(),e.flags|=98560,s=!1;else if(s=Mi(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(h(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(h(317));s[Hn]=e}else yt(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),s=!1}else $n!==null&&(ca($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||W.current&1?X===0&&(X=3):ir())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return gt(),ta(n,e),n===null&&ei(e.stateNode.containerInfo),rn(e),null;case 10:return Ua(e.type._context),rn(e),null;case 17:return zn(e.type)&&al(),rn(e),null;case 19:if(U(W),s=e.memoizedState,s===null)return rn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Dt(s,!1);else{if(X!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=dl(n),a!==null){for(e.flags|=128,Dt(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,n=a.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return $(W,W.current&1|2),e.child}n=n.sibling}s.tail!==null&&Y()>xt&&(e.flags|=128,i=!0,Dt(s,!1),e.lanes=4194304)}else{if(!i)if(n=dl(a),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Dt(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!J)return rn(e),null}else 2*Y()-s.renderingStartTime>xt&&t!==1073741824&&(e.flags|=128,i=!0,Dt(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(t=s.last,t!==null?t.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Y(),e.sibling=null,t=W.current,$(W,i?t&1|2:t&1),e):(rn(e),null);case 22:case 23:return tr(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(h(156,e.tag))}function zy(n,e){switch(Oa(e),e.tag){case 1:return zn(e.type)&&al(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return gt(),U(pn),U(on),Ha(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Ba(e),null;case 13:if(U(W),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(h(340));yt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return U(W),null;case 4:return gt(),null;case 10:return Ua(e.type._context),null;case 22:case 23:return tr(),null;case 24:return null;default:return null}}var Li=!1,un=!1,hy=typeof WeakSet=="function"?WeakSet:Set,w=null;function et(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){q(n,e,i)}else t.current=null}function ia(n,e,t){try{t()}catch(i){q(n,e,i)}}var fu=!1;function ky(n,e){if(Us=tl,n=$o(),Ia(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var l=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break n}var a=0,u=-1,o=-1,c=0,f=0,g=n,x=null;e:for(;;){for(var m;g!==t||l!==0&&g.nodeType!==3||(u=a+l),g!==s||i!==0&&g.nodeType!==3||(o=a+i),g.nodeType===3&&(a+=g.nodeValue.length),(m=g.firstChild)!==null;)x=g,g=m;for(;;){if(g===n)break e;if(x===t&&++c===l&&(u=a),x===s&&++f===i&&(o=a),(m=g.nextSibling)!==null)break;g=x,x=g.parentNode}g=m}t=u===-1||o===-1?null:{start:u,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Js={focusedElem:n,selectionRange:t},tl=!1,w=e;w!==null;)if(e=w,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,w=n;else for(;w!==null;){e=w;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var p=v.memoizedProps,D=v.memoizedState,y=e.stateNode,j=y.getSnapshotBeforeUpdate(e.elementType===e.type?p:On(e.type,p),D);y.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var d=e.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(h(163))}}catch(z){q(e,e.return,z)}if(n=e.sibling,n!==null){n.return=e.return,w=n;break}w=e.return}return v=fu,fu=!1,v}function Vt(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var l=i=i.next;do{if((l.tag&n)===n){var s=l.destroy;l.destroy=void 0,s!==void 0&&ia(e,t,s)}l=l.next}while(l!==i)}}function Pl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function la(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Ic(n){var e=n.alternate;e!==null&&(n.alternate=null,Ic(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Hn],delete e[ii],delete e[Bs],delete e[ly],delete e[sy])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Rc(n){return n.tag===5||n.tag===3||n.tag===4}function xu(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Rc(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function sa(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=sl));else if(i!==4&&(n=n.child,n!==null))for(sa(n,e,t),n=n.sibling;n!==null;)sa(n,e,t),n=n.sibling}function aa(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(aa(n,e,t),n=n.sibling;n!==null;)aa(n,e,t),n=n.sibling}var en=null,Fn=!1;function se(n,e,t){for(t=t.child;t!==null;)Oc(n,e,t),t=t.sibling}function Oc(n,e,t){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(_l,t)}catch{}switch(t.tag){case 5:un||et(t,e);case 6:var i=en,l=Fn;en=null,se(n,e,t),en=i,Fn=l,en!==null&&(Fn?(n=en,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):en.removeChild(t.stateNode));break;case 18:en!==null&&(Fn?(n=en,t=t.stateNode,n.nodeType===8?as(n.parentNode,t):n.nodeType===1&&as(n,t),Zt(n)):as(en,t.stateNode));break;case 4:i=en,l=Fn,en=t.stateNode.containerInfo,Fn=!0,se(n,e,t),en=i,Fn=l;break;case 0:case 11:case 14:case 15:if(!un&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){l=i=i.next;do{var s=l,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ia(t,e,a),l=l.next}while(l!==i)}se(n,e,t);break;case 1:if(!un&&(et(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(u){q(t,e,u)}se(n,e,t);break;case 21:se(n,e,t);break;case 22:t.mode&1?(un=(i=un)||t.memoizedState!==null,se(n,e,t),un=i):se(n,e,t);break;default:se(n,e,t)}}function mu(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new hy),e.forEach(function(i){var l=Py.bind(null,n,i);t.has(i)||(t.add(i),i.then(l,l))})}}function Rn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var l=t[i];try{var s=n,a=e,u=a;n:for(;u!==null;){switch(u.tag){case 5:en=u.stateNode,Fn=!1;break n;case 3:en=u.stateNode.containerInfo,Fn=!0;break n;case 4:en=u.stateNode.containerInfo,Fn=!0;break n}u=u.return}if(en===null)throw Error(h(160));Oc(s,a,l),en=null,Fn=!1;var o=l.alternate;o!==null&&(o.return=null),l.return=null}catch(c){q(l,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Fc(e,n),e=e.sibling}function Fc(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Rn(e,n),Vn(n),i&4){try{Vt(3,n,n.return),Pl(3,n)}catch(p){q(n,n.return,p)}try{Vt(5,n,n.return)}catch(p){q(n,n.return,p)}}break;case 1:Rn(e,n),Vn(n),i&512&&t!==null&&et(t,t.return);break;case 5:if(Rn(e,n),Vn(n),i&512&&t!==null&&et(t,t.return),n.flags&32){var l=n.stateNode;try{Yt(l,"")}catch(p){q(n,n.return,p)}}if(i&4&&(l=n.stateNode,l!=null)){var s=n.memoizedProps,a=t!==null?t.memoizedProps:s,u=n.type,o=n.updateQueue;if(n.updateQueue=null,o!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&lo(l,s),Ms(u,a);var c=Ms(u,s);for(a=0;a<o.length;a+=2){var f=o[a],g=o[a+1];f==="style"?oo(l,g):f==="dangerouslySetInnerHTML"?ro(l,g):f==="children"?Yt(l,g):ha(l,f,g,c)}switch(u){case"input":Ns(l,s);break;case"textarea":so(l,s);break;case"select":var x=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?lt(l,!!s.multiple,m,!1):x!==!!s.multiple&&(s.defaultValue!=null?lt(l,!!s.multiple,s.defaultValue,!0):lt(l,!!s.multiple,s.multiple?[]:"",!1))}l[ii]=s}catch(p){q(n,n.return,p)}}break;case 6:if(Rn(e,n),Vn(n),i&4){if(n.stateNode===null)throw Error(h(162));l=n.stateNode,s=n.memoizedProps;try{l.nodeValue=s}catch(p){q(n,n.return,p)}}break;case 3:if(Rn(e,n),Vn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Zt(e.containerInfo)}catch(p){q(n,n.return,p)}break;case 4:Rn(e,n),Vn(n);break;case 13:Rn(e,n),Vn(n),l=n.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(nr=Y())),i&4&&mu(n);break;case 22:if(f=t!==null&&t.memoizedState!==null,n.mode&1?(un=(c=un)||f,Rn(e,n),un=c):Rn(e,n),Vn(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!f&&n.mode&1)for(w=n,f=n.child;f!==null;){for(g=w=f;w!==null;){switch(x=w,m=x.child,x.tag){case 0:case 11:case 14:case 15:Vt(4,x,x.return);break;case 1:et(x,x.return);var v=x.stateNode;if(typeof v.componentWillUnmount=="function"){i=x,t=x.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(p){q(i,t,p)}}break;case 5:et(x,x.return);break;case 22:if(x.memoizedState!==null){pu(g);continue}}m!==null?(m.return=x,w=m):pu(g)}f=f.sibling}n:for(f=null,g=n;;){if(g.tag===5){if(f===null){f=g;try{l=g.stateNode,c?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=g.stateNode,o=g.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,u.style.display=uo("display",a))}catch(p){q(n,n.return,p)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(p){q(n,n.return,p)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===n)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break n;for(;g.sibling===null;){if(g.return===null||g.return===n)break n;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Rn(e,n),Vn(n),i&4&&mu(n);break;case 21:break;default:Rn(e,n),Vn(n)}}function Vn(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(Rc(t)){var i=t;break n}t=t.return}throw Error(h(160))}switch(i.tag){case 5:var l=i.stateNode;i.flags&32&&(Yt(l,""),i.flags&=-33);var s=xu(n);aa(n,s,l);break;case 3:case 4:var a=i.stateNode.containerInfo,u=xu(n);sa(n,u,a);break;default:throw Error(h(161))}}catch(o){q(n,n.return,o)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function _y(n,e,t){w=n,$c(n)}function $c(n,e,t){for(var i=(n.mode&1)!==0;w!==null;){var l=w,s=l.child;if(l.tag===22&&i){var a=l.memoizedState!==null||Li;if(!a){var u=l.alternate,o=u!==null&&u.memoizedState!==null||un;u=Li;var c=un;if(Li=a,(un=o)&&!c)for(w=l;w!==null;)a=w,o=a.child,a.tag===22&&a.memoizedState!==null?zu(l):o!==null?(o.return=a,w=o):zu(l);for(;s!==null;)w=s,$c(s),s=s.sibling;w=l,Li=u,un=c}vu(n)}else l.subtreeFlags&8772&&s!==null?(s.return=l,w=s):vu(n)}}function vu(n){for(;w!==null;){var e=w;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||Pl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(t===null)i.componentDidMount();else{var l=e.elementType===e.type?t.memoizedProps:On(e.type,t.memoizedProps);i.componentDidUpdate(l,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tu(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}tu(e,a,t)}break;case 5:var u=e.stateNode;if(t===null&&e.flags&4){t=u;var o=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Zt(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(h(163))}un||e.flags&512&&la(e)}catch(x){q(e,e.return,x)}}if(e===n){w=null;break}if(t=e.sibling,t!==null){t.return=e.return,w=t;break}w=e.return}}function pu(n){for(;w!==null;){var e=w;if(e===n){w=null;break}var t=e.sibling;if(t!==null){t.return=e.return,w=t;break}w=e.return}}function zu(n){for(;w!==null;){var e=w;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Pl(4,e)}catch(o){q(e,t,o)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var l=e.return;try{i.componentDidMount()}catch(o){q(e,l,o)}}var s=e.return;try{la(e)}catch(o){q(e,s,o)}break;case 5:var a=e.return;try{la(e)}catch(o){q(e,a,o)}}}catch(o){q(e,e.return,o)}if(e===n){w=null;break}var u=e.sibling;if(u!==null){u.return=e.return,w=u;break}w=e.return}}var wy=Math.ceil,xl=le.ReactCurrentDispatcher,Za=le.ReactCurrentOwner,Tn=le.ReactCurrentBatchConfig,R=0,nn=null,K=null,tn=0,_n=0,tt=we(0),X=0,oi=null,Ae=0,Tl=0,ba=0,Bt=null,mn=null,nr=0,xt=1/0,Yn=null,ml=!1,ra=null,me=null,Ii=!1,je=null,vl=0,Ht=0,ua=null,qi=-1,Qi=0;function yn(){return R&6?Y():qi!==-1?qi:qi=Y()}function ve(n){return n.mode&1?R&2&&tn!==0?tn&-tn:ry.transition!==null?(Qi===0&&(Qi=ko()),Qi):(n=F,n!==0||(n=window.event,n=n===void 0?16:Do(n.type)),n):1}function Un(n,e,t,i){if(50<Ht)throw Ht=0,ua=null,Error(h(185));yi(n,t,i),(!(R&2)||n!==nn)&&(n===nn&&(!(R&2)&&(Tl|=t),X===4&&oe(n,tn)),hn(n,i),t===1&&R===0&&!(e.mode&1)&&(xt=Y()+500,Cl&&Ne()))}function hn(n,e){var t=n.callbackNode;r1(n,e);var i=el(n,n===nn?tn:0);if(i===0)t!==null&&Dr(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Dr(t),e===1)n.tag===0?ay(hu.bind(null,n)):Yo(hu.bind(null,n)),ty(function(){!(R&6)&&Ne()}),t=null;else{switch(_o(i)){case 1:t=Sa;break;case 4:t=zo;break;case 16:t=nl;break;case 536870912:t=ho;break;default:t=nl}t=qc(t,Ac.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Ac(n,e){if(qi=-1,Qi=0,R&6)throw Error(h(327));var t=n.callbackNode;if(ot()&&n.callbackNode!==t)return null;var i=el(n,n===nn?tn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=pl(n,i);else{e=i;var l=R;R|=2;var s=Jc();(nn!==n||tn!==e)&&(Yn=null,xt=Y()+500,Ie(n,e));do try{Ey();break}catch(u){Uc(n,u)}while(!0);Aa(),xl.current=s,R=l,K!==null?e=0:(nn=null,tn=0,e=X)}if(e!==0){if(e===2&&(l=Rs(n),l!==0&&(i=l,e=oa(n,l))),e===1)throw t=oi,Ie(n,0),oe(n,i),hn(n,Y()),t;if(e===6)oe(n,i);else{if(l=n.current.alternate,!(i&30)&&!Ny(l)&&(e=pl(n,i),e===2&&(s=Rs(n),s!==0&&(i=s,e=oa(n,s))),e===1))throw t=oi,Ie(n,0),oe(n,i),hn(n,Y()),t;switch(n.finishedWork=l,n.finishedLanes=i,e){case 0:case 1:throw Error(h(345));case 2:Me(n,mn,Yn);break;case 3:if(oe(n,i),(i&130023424)===i&&(e=nr+500-Y(),10<e)){if(el(n,0)!==0)break;if(l=n.suspendedLanes,(l&i)!==i){yn(),n.pingedLanes|=n.suspendedLanes&l;break}n.timeoutHandle=Vs(Me.bind(null,n,mn,Yn),e);break}Me(n,mn,Yn);break;case 4:if(oe(n,i),(i&4194240)===i)break;for(e=n.eventTimes,l=-1;0<i;){var a=31-An(i);s=1<<a,a=e[a],a>l&&(l=a),i&=~s}if(i=l,i=Y()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wy(i/1960))-i,10<i){n.timeoutHandle=Vs(Me.bind(null,n,mn,Yn),i);break}Me(n,mn,Yn);break;case 5:Me(n,mn,Yn);break;default:throw Error(h(329))}}}return hn(n,Y()),n.callbackNode===t?Ac.bind(null,n):null}function oa(n,e){var t=Bt;return n.current.memoizedState.isDehydrated&&(Ie(n,e).flags|=256),n=pl(n,e),n!==2&&(e=mn,mn=t,e!==null&&ca(e)),n}function ca(n){mn===null?mn=n:mn.push.apply(mn,n)}function Ny(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var l=t[i],s=l.getSnapshot;l=l.value;try{if(!Wn(s(),l))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function oe(n,e){for(e&=~ba,e&=~Tl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-An(e),i=1<<t;n[t]=-1,e&=~i}}function hu(n){if(R&6)throw Error(h(327));ot();var e=el(n,0);if(!(e&1))return hn(n,Y()),null;var t=pl(n,e);if(n.tag!==0&&t===2){var i=Rs(n);i!==0&&(e=i,t=oa(n,i))}if(t===1)throw t=oi,Ie(n,0),oe(n,e),hn(n,Y()),t;if(t===6)throw Error(h(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Me(n,mn,Yn),hn(n,Y()),null}function er(n,e){var t=R;R|=1;try{return n(e)}finally{R=t,R===0&&(xt=Y()+500,Cl&&Ne())}}function Ue(n){je!==null&&je.tag===0&&!(R&6)&&ot();var e=R;R|=1;var t=Tn.transition,i=F;try{if(Tn.transition=null,F=1,n)return n()}finally{F=i,Tn.transition=t,R=e,!(R&6)&&Ne()}}function tr(){_n=tt.current,U(tt)}function Ie(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,ey(t)),K!==null)for(t=K.return;t!==null;){var i=t;switch(Oa(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&al();break;case 3:gt(),U(pn),U(on),Ha();break;case 5:Ba(i);break;case 4:gt();break;case 13:U(W);break;case 19:U(W);break;case 10:Ua(i.type._context);break;case 22:case 23:tr()}t=t.return}if(nn=n,K=n=pe(n.current,null),tn=_n=e,X=0,oi=null,ba=Tl=Ae=0,mn=Bt=null,Te!==null){for(e=0;e<Te.length;e++)if(t=Te[e],i=t.interleaved,i!==null){t.interleaved=null;var l=i.next,s=t.pending;if(s!==null){var a=s.next;s.next=l,i.next=a}t.pending=i}Te=null}return n}function Uc(n,e){do{var t=K;try{if(Aa(),Vi.current=fl,gl){for(var i=B.memoizedState;i!==null;){var l=i.queue;l!==null&&(l.pending=null),i=i.next}gl=!1}if($e=0,b=G=B=null,Wt=!1,ai=0,Za.current=null,t===null||t.return===null){X=1,oi=e,K=null;break}n:{var s=n,a=t.return,u=t,o=e;if(e=tn,u.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,f=u,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var x=f.alternate;x?(f.updateQueue=x.updateQueue,f.memoizedState=x.memoizedState,f.lanes=x.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=uu(a);if(m!==null){m.flags&=-257,ou(m,a,u,s,e),m.mode&1&&ru(s,c,e),e=m,o=c;var v=e.updateQueue;if(v===null){var p=new Set;p.add(o),e.updateQueue=p}else v.add(o);break n}else{if(!(e&1)){ru(s,c,e),ir();break n}o=Error(h(426))}}else if(J&&u.mode&1){var D=uu(a);if(D!==null){!(D.flags&65536)&&(D.flags|=256),ou(D,a,u,s,e),Fa(ft(o,u));break n}}s=o=ft(o,u),X!==4&&(X=2),Bt===null?Bt=[s]:Bt.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var y=_c(s,o,e);eu(s,y);break n;case 1:u=o;var j=s.type,d=s.stateNode;if(!(s.flags&128)&&(typeof j.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(me===null||!me.has(d)))){s.flags|=65536,e&=-e,s.lanes|=e;var z=wc(s,u,e);eu(s,z);break n}}s=s.return}while(s!==null)}Vc(t)}catch(_){e=_,K===t&&t!==null&&(K=t=t.return);continue}break}while(!0)}function Jc(){var n=xl.current;return xl.current=fl,n===null?fl:n}function ir(){(X===0||X===3||X===2)&&(X=4),nn===null||!(Ae&268435455)&&!(Tl&268435455)||oe(nn,tn)}function pl(n,e){var t=R;R|=2;var i=Jc();(nn!==n||tn!==e)&&(Yn=null,Ie(n,e));do try{Sy();break}catch(l){Uc(n,l)}while(!0);if(Aa(),R=t,xl.current=i,K!==null)throw Error(h(261));return nn=null,tn=0,X}function Sy(){for(;K!==null;)Wc(K)}function Ey(){for(;K!==null&&!Zj();)Wc(K)}function Wc(n){var e=Hc(n.alternate,n,_n);n.memoizedProps=n.pendingProps,e===null?Vc(n):K=e,Za.current=null}function Vc(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=zy(t,e),t!==null){t.flags&=32767,K=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{X=6,K=null;return}}else if(t=py(t,e,_n),t!==null){K=t;return}if(e=e.sibling,e!==null){K=e;return}K=e=n}while(e!==null);X===0&&(X=5)}function Me(n,e,t){var i=F,l=Tn.transition;try{Tn.transition=null,F=1,Cy(n,e,t,i)}finally{Tn.transition=l,F=i}return null}function Cy(n,e,t,i){do ot();while(je!==null);if(R&6)throw Error(h(327));t=n.finishedWork;var l=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(h(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(u1(n,s),n===nn&&(K=nn=null,tn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ii||(Ii=!0,qc(nl,function(){return ot(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var a=F;F=1;var u=R;R|=4,Za.current=null,ky(n,t),Fc(t,n),Y1(Js),tl=!!Us,Js=Us=null,n.current=t,_y(t),bj(),R=u,F=a,Tn.transition=s}else n.current=t;if(Ii&&(Ii=!1,je=n,vl=l),s=n.pendingLanes,s===0&&(me=null),t1(t.stateNode),hn(n,Y()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)l=e[t],i(l.value,{componentStack:l.stack,digest:l.digest});if(ml)throw ml=!1,n=ra,ra=null,n;return vl&1&&n.tag!==0&&ot(),s=n.pendingLanes,s&1?n===ua?Ht++:(Ht=0,ua=n):Ht=0,Ne(),null}function ot(){if(je!==null){var n=_o(vl),e=Tn.transition,t=F;try{if(Tn.transition=null,F=16>n?16:n,je===null)var i=!1;else{if(n=je,je=null,vl=0,R&6)throw Error(h(331));var l=R;for(R|=4,w=n.current;w!==null;){var s=w,a=s.child;if(w.flags&16){var u=s.deletions;if(u!==null){for(var o=0;o<u.length;o++){var c=u[o];for(w=c;w!==null;){var f=w;switch(f.tag){case 0:case 11:case 15:Vt(8,f,s)}var g=f.child;if(g!==null)g.return=f,w=g;else for(;w!==null;){f=w;var x=f.sibling,m=f.return;if(Ic(f),f===c){w=null;break}if(x!==null){x.return=m,w=x;break}w=m}}}var v=s.alternate;if(v!==null){var p=v.child;if(p!==null){v.child=null;do{var D=p.sibling;p.sibling=null,p=D}while(p!==null)}}w=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,w=a;else n:for(;w!==null;){if(s=w,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vt(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,w=y;break n}w=s.return}}var j=n.current;for(w=j;w!==null;){a=w;var d=a.child;if(a.subtreeFlags&2064&&d!==null)d.return=a,w=d;else n:for(a=j;w!==null;){if(u=w,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Pl(9,u)}}catch(_){q(u,u.return,_)}if(u===a){w=null;break n}var z=u.sibling;if(z!==null){z.return=u.return,w=z;break n}w=u.return}}if(R=l,Ne(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(_l,n)}catch{}i=!0}return i}finally{F=t,Tn.transition=e}}return!1}function ku(n,e,t){e=ft(t,e),e=_c(n,e,1),n=xe(n,e,1),e=yn(),n!==null&&(yi(n,1,e),hn(n,e))}function q(n,e,t){if(n.tag===3)ku(n,n,t);else for(;e!==null;){if(e.tag===3){ku(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(me===null||!me.has(i))){n=ft(t,n),n=wc(e,n,1),e=xe(e,n,1),n=yn(),e!==null&&(yi(e,1,n),hn(e,n));break}}e=e.return}}function Dy(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=yn(),n.pingedLanes|=n.suspendedLanes&t,nn===n&&(tn&t)===t&&(X===4||X===3&&(tn&130023424)===tn&&500>Y()-nr?Ie(n,0):ba|=t),hn(n,e)}function Bc(n,e){e===0&&(n.mode&1?(e=wi,wi<<=1,!(wi&130023424)&&(wi=4194304)):e=1);var t=yn();n=te(n,e),n!==null&&(yi(n,e,t),hn(n,t))}function My(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Bc(n,t)}function Py(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,l=n.memoizedState;l!==null&&(t=l.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(h(314))}i!==null&&i.delete(e),Bc(n,t)}var Hc;Hc=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||pn.current)vn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return vn=!1,vy(n,e,t);vn=!!(n.flags&131072)}else vn=!1,J&&e.flags&1048576&&Ko(e,ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Hi(n,e),n=e.pendingProps;var l=jt(e,on.current);ut(e,t),l=Qa(null,e,i,n,l,t);var s=Ya();return e.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,zn(i)?(s=!0,rl(e)):s=!1,e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Wa(e),l.updater=Ml,e.stateNode=l,l._reactInternals=e,Gs(e,i,n,t),e=bs(null,e,i,!0,s,t)):(e.tag=0,J&&s&&Ra(e),cn(null,e,l,t),e=e.child),e;case 16:i=e.elementType;n:{switch(Hi(n,e),n=e.pendingProps,l=i._init,i=l(i._payload),e.type=i,l=e.tag=Ly(i),n=On(i,n),l){case 0:e=Zs(null,e,i,n,t);break n;case 1:e=yu(null,e,i,n,t);break n;case 11:e=cu(null,e,i,n,t);break n;case 14:e=ju(null,e,i,On(i.type,n),t);break n}throw Error(h(306,i,""))}return e;case 0:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:On(i,l),Zs(n,e,i,l,t);case 1:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:On(i,l),yu(n,e,i,l,t);case 3:n:{if(Cc(e),n===null)throw Error(h(387));i=e.pendingProps,s=e.memoizedState,l=s.element,ec(n,e),yl(e,i,null,t);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){l=ft(Error(h(423)),e),e=du(n,e,i,t,l);break n}else if(i!==l){l=ft(Error(h(424)),e),e=du(n,e,i,t,l);break n}else for(wn=fe(e.stateNode.containerInfo.firstChild),Nn=e,J=!0,$n=null,t=bo(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(yt(),i===l){e=ie(n,e,t);break n}cn(n,e,i,t)}e=e.child}return e;case 5:return tc(e),n===null&&Qs(e),i=e.type,l=e.pendingProps,s=n!==null?n.memoizedProps:null,a=l.children,Ws(i,l)?a=null:s!==null&&Ws(i,s)&&(e.flags|=32),Ec(n,e),cn(n,e,a,t),e.child;case 6:return n===null&&Qs(e),null;case 13:return Dc(n,e,t);case 4:return Va(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=dt(e,null,i,t):cn(n,e,i,t),e.child;case 11:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:On(i,l),cu(n,e,i,l,t);case 7:return cn(n,e,e.pendingProps,t),e.child;case 8:return cn(n,e,e.pendingProps.children,t),e.child;case 12:return cn(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(i=e.type._context,l=e.pendingProps,s=e.memoizedProps,a=l.value,$(cl,i._currentValue),i._currentValue=a,s!==null)if(Wn(s.value,a)){if(s.children===l.children&&!pn.current){e=ie(n,e,t);break n}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){a=s.child;for(var o=u.firstContext;o!==null;){if(o.context===i){if(s.tag===1){o=Zn(-1,t&-t),o.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?o.next=o:(o.next=f.next,f.next=o),c.pending=o}}s.lanes|=t,o=s.alternate,o!==null&&(o.lanes|=t),Ys(s.return,t,e),u.lanes|=t;break}o=o.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(h(341));a.lanes|=t,u=a.alternate,u!==null&&(u.lanes|=t),Ys(a,t,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}cn(n,e,l.children,t),e=e.child}return e;case 9:return l=e.type,i=e.pendingProps.children,ut(e,t),l=Ln(l),i=i(l),e.flags|=1,cn(n,e,i,t),e.child;case 14:return i=e.type,l=On(i,e.pendingProps),l=On(i.type,l),ju(n,e,i,l,t);case 15:return Nc(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,l=e.pendingProps,l=e.elementType===i?l:On(i,l),Hi(n,e),e.tag=1,zn(i)?(n=!0,rl(e)):n=!1,ut(e,t),kc(e,i,l),Gs(e,i,l,t),bs(null,e,i,!0,n,t);case 19:return Mc(n,e,t);case 22:return Sc(n,e,t)}throw Error(h(156,e.tag))};function qc(n,e){return po(n,e)}function Ty(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(n,e,t,i){return new Ty(n,e,t,i)}function lr(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ly(n){if(typeof n=="function")return lr(n)?1:0;if(n!=null){if(n=n.$$typeof,n===_a)return 11;if(n===wa)return 14}return 2}function pe(n,e){var t=n.alternate;return t===null?(t=Pn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Yi(n,e,t,i,l,s){var a=2;if(i=n,typeof n=="function")lr(n)&&(a=1);else if(typeof n=="string")a=5;else n:switch(n){case qe:return Re(t.children,l,s,e);case ka:a=8,l|=8;break;case zs:return n=Pn(12,t,e,l|2),n.elementType=zs,n.lanes=s,n;case hs:return n=Pn(13,t,e,l),n.elementType=hs,n.lanes=s,n;case ks:return n=Pn(19,t,e,l),n.elementType=ks,n.lanes=s,n;case eo:return Ll(t,l,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case bu:a=10;break n;case no:a=9;break n;case _a:a=11;break n;case wa:a=14;break n;case ae:a=16,i=null;break n}throw Error(h(130,n==null?n:typeof n,""))}return e=Pn(a,t,e,l),e.elementType=n,e.type=i,e.lanes=s,e}function Re(n,e,t,i){return n=Pn(7,n,i,e),n.lanes=t,n}function Ll(n,e,t,i){return n=Pn(22,n,i,e),n.elementType=eo,n.lanes=t,n.stateNode={isHidden:!1},n}function gs(n,e,t){return n=Pn(6,n,null,e),n.lanes=t,n}function fs(n,e,t){return e=Pn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Iy(n,e,t,i,l){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=i,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function sr(n,e,t,i,l,s,a,u,o){return n=new Iy(n,e,t,u,o),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wa(s),n}function Ry(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:He,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Qc(n){if(!n)return ke;n=n._reactInternals;n:{if(We(n)!==n||n.tag!==1)throw Error(h(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(zn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(h(171))}if(n.tag===1){var t=n.type;if(zn(t))return Qo(n,t,e)}return e}function Yc(n,e,t,i,l,s,a,u,o){return n=sr(t,i,!0,n,l,s,a,u,o),n.context=Qc(null),t=n.current,i=yn(),l=ve(t),s=Zn(i,l),s.callback=e??null,xe(t,s,l),n.current.lanes=l,yi(n,l,i),hn(n,i),n}function Il(n,e,t,i){var l=e.current,s=yn(),a=ve(l);return t=Qc(t),e.context===null?e.context=t:e.pendingContext=t,e=Zn(s,a),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=xe(l,e,a),n!==null&&(Un(n,l,a,s),Wi(n,l,a)),a}function zl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function _u(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function ar(n,e){_u(n,e),(n=n.alternate)&&_u(n,e)}function Oy(){return null}var Kc=typeof reportError=="function"?reportError:function(n){console.error(n)};function rr(n){this._internalRoot=n}Rl.prototype.render=rr.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(h(409));Il(n,e,null,null)};Rl.prototype.unmount=rr.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ue(function(){Il(null,n,null,null)}),e[ee]=null}};function Rl(n){this._internalRoot=n}Rl.prototype.unstable_scheduleHydration=function(n){if(n){var e=So();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ue.length&&e!==0&&e<ue[t].priority;t++);ue.splice(t,0,n),t===0&&Co(n)}};function ur(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ol(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function wu(){}function Fy(n,e,t,i,l){if(l){if(typeof i=="function"){var s=i;i=function(){var c=zl(a);s.call(c)}}var a=Yc(e,i,n,0,null,!1,!1,"",wu);return n._reactRootContainer=a,n[ee]=a.current,ei(n.nodeType===8?n.parentNode:n),Ue(),a}for(;l=n.lastChild;)n.removeChild(l);if(typeof i=="function"){var u=i;i=function(){var c=zl(o);u.call(c)}}var o=sr(n,0,!1,null,null,!1,!1,"",wu);return n._reactRootContainer=o,n[ee]=o.current,ei(n.nodeType===8?n.parentNode:n),Ue(function(){Il(e,o,t,i)}),o}function Fl(n,e,t,i,l){var s=t._reactRootContainer;if(s){var a=s;if(typeof l=="function"){var u=l;l=function(){var o=zl(a);u.call(o)}}Il(e,a,n,l)}else a=Fy(t,e,n,l,i);return zl(a)}wo=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Rt(e.pendingLanes);t!==0&&(Ea(e,t|1),hn(e,Y()),!(R&6)&&(xt=Y()+500,Ne()))}break;case 13:Ue(function(){var i=te(n,1);if(i!==null){var l=yn();Un(i,n,1,l)}}),ar(n,1)}};Ca=function(n){if(n.tag===13){var e=te(n,134217728);if(e!==null){var t=yn();Un(e,n,134217728,t)}ar(n,134217728)}};No=function(n){if(n.tag===13){var e=ve(n),t=te(n,e);if(t!==null){var i=yn();Un(t,n,e,i)}ar(n,e)}};So=function(){return F};Eo=function(n,e){var t=F;try{return F=n,e()}finally{F=t}};Ts=function(n,e,t){switch(e){case"input":if(Ns(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var l=El(i);if(!l)throw Error(h(90));io(i),Ns(i,l)}}}break;case"textarea":so(n,t);break;case"select":e=t.value,e!=null&&lt(n,!!t.multiple,e,!1)}};yo=er;go=Ue;var $y={usingClientEntryPoint:!1,Events:[gi,Ge,El,co,jo,er]},Mt={findFiberByHostInstance:Pe,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ay={bundleType:Mt.bundleType,version:Mt.version,rendererPackageName:Mt.rendererPackageName,rendererConfig:Mt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=mo(n),n===null?null:n.stateNode},findFiberByHostInstance:Mt.findFiberByHostInstance||Oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{_l=Ri.inject(Ay),qn=Ri}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$y;En.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ur(e))throw Error(h(200));return Ry(n,e,null,t)};En.createRoot=function(n,e){if(!ur(n))throw Error(h(299));var t=!1,i="",l=Kc;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),e=sr(n,1,!1,null,null,t,!1,i,l),n[ee]=e.current,ei(n.nodeType===8?n.parentNode:n),new rr(e)};En.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(h(188)):(n=Object.keys(n).join(","),Error(h(268,n)));return n=mo(e),n=n===null?null:n.stateNode,n};En.flushSync=function(n){return Ue(n)};En.hydrate=function(n,e,t){if(!Ol(e))throw Error(h(200));return Fl(null,n,e,!0,t)};En.hydrateRoot=function(n,e,t){if(!ur(n))throw Error(h(405));var i=t!=null&&t.hydratedSources||null,l=!1,s="",a=Kc;if(t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=Yc(e,null,n,1,t??null,l,!1,s,a),n[ee]=e.current,ei(n),i)for(n=0;n<i.length;n++)t=i[n],l=t._getVersion,l=l(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,l]:e.mutableSourceEagerHydrationData.push(t,l);return new Rl(e)};En.render=function(n,e,t){if(!Ol(e))throw Error(h(200));return Fl(null,n,e,!1,t)};En.unmountComponentAtNode=function(n){if(!Ol(n))throw Error(h(40));return n._reactRootContainer?(Ue(function(){Fl(null,null,n,!1,function(){n._reactRootContainer=null,n[ee]=null})}),!0):!1};En.unstable_batchedUpdates=er;En.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Ol(t))throw Error(h(200));if(n==null||n._reactInternals===void 0)throw Error(h(38));return Fl(n,e,t,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function Gc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gc)}catch(n){console.error(n)}}Gc(),Ku.exports=En;var Uy=Ku.exports,Nu=Uy;vs.createRoot=Nu.createRoot,vs.hydrateRoot=Nu.hydrateRoot;function ja(n,e){try{const t=window.localStorage.getItem(n);return t===null?e:JSON.parse(t)}catch{return e}}function Xc(n,e){try{return window.localStorage.setItem(n,JSON.stringify(e)),!0}catch{return!1}}const Oi={theme:"ecalendar.theme",birthdays:"ecalendar.birthdays",alarms:"ecalendar.alarms",notes:"ecalendar.notes"};function xs(n,e){const[t,i]=C.useState(()=>ja(n,e)),l=C.useCallback(s=>{i(s),Xc(n,s)},[n]);return C.useEffect(()=>{const s=a=>{if(a.key===n&&a.newValue)try{i(JSON.parse(a.newValue))}catch{}};return window.addEventListener("storage",s),()=>window.removeEventListener("storage",s)},[n]),[t,l]}function Jy(n){return{year:n.getFullYear(),month:n.getMonth()+1,day:n.getDate()}}function Zc(n,e,t){return new Date(n,e-1,t)}function ya(n,e){const t=new Date(n.getTime());return t.setDate(t.getDate()+e),t}function Wy(n,e){return n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()&&n.getDate()===e.getDate()}function Vy(n){return Wy(n,new Date)}function By(n,e){return new Date(n,e,0).getDate()}const bc=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];function $l(n){const e=n.getFullYear(),t=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`${e}-${t}-${i}`}function Hy(n){const e=/^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(n.trim());if(!e)return null;const t=Number(e[1]),i=Number(e[2]),l=Number(e[3]);return i<1||i>12||l<1||l>By(t,i)?null:Zc(t,i,l)}function qy(n,e){const t=Zc(n,e,1),i=t.getDay(),l=[];for(let s=0;s<6;s+=1){const a=[];for(let u=0;u<7;u+=1){const o=s*7+u-i,c=ya(t,o);a.push({date:c,inMonth:c.getMonth()+1===e})}l.push(a)}return l}function or(n="id"){return`${n}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}const ms="ecalendar.alarmFired";function Qy(n,e){switch(n.repeat){case"once":return n.date===$l(e);case"daily":return!0;case"weekday":{const t=e.getDay();return t>=1&&t<=5}case"custom":return n.days.includes(e.getDay());default:return!1}}function Yy(n,e){const t=C.useRef(n),i=C.useRef(e),l=C.useRef(new Set(Object.keys(ja(ms,{}))));t.current=n,i.current=e,C.useEffect(()=>{const s=()=>{const u=new Date,o=String(u.getHours()).padStart(2,"0"),c=String(u.getMinutes()).padStart(2,"0"),f=`${o}:${c}`,g=$l(u);for(const x of t.current){if(!x.enabled||x.time!==f||!Qy(x,u))continue;const m=`${x.id}|${g}|${f}`;if(l.current.has(m))continue;l.current.add(m);const v=ja(ms,{});v[m]=new Date().toISOString(),Xc(ms,v),i.current(x)}};s();const a=window.setInterval(s,15e3);return()=>window.clearInterval(a)},[])}async function Ky(){if(!cr())return!1;if(Notification.permission==="granted")return!0;if(Notification.permission==="denied")return!1;try{return await Notification.requestPermission()==="granted"}catch{return!1}}function cr(){return typeof window<"u"&&typeof window.Notification<"u"}const Al=[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,28309,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,21952,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,41696,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],Jn=1900,bn=2100,jn={year:1900,month:1,day:31},xn=(()=>{let n=0;for(let t=Jn;t<bn;t+=1)n+=yr(t);for(let t=1;t<=11;t+=1)n+=ze(bn,t);n+=ze(bn,12)-1;const e=new Date(Date.UTC(1900,0,31)+n*864e5);return{year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate()}})(),Ki=["正月","二月","三月","四月","五月","六月","七月","八月","九月","十月","冬月","腊月"],Gy=["初","十","廿","三"],Xy=["十","一","二","三","四","五","六","七","八","九"];function jr(n){return n<Jn||n>bn?0:Al[n-Jn]&15}function ci(n){return jr(n)?Al[n-Jn]&65536?30:29:0}function ze(n,e){return n<Jn||n>bn||e<1||e>12||Al[n-Jn]&65536>>e?30:29}function yr(n){let e=348;for(let t=32768;t>8;t>>=1)e+=Al[n-Jn]&t?1:0;return e+ci(n)}function nj(n){const e=n.year*1e4+n.month*100+n.day,t=jn.year*1e4+jn.month*100+jn.day,i=xn.year*1e4+xn.month*100+xn.day;return e>=t&&e<=i}function dr(n,e,t){if(!nj({year:n,month:e,day:t}))throw new RangeError(`农历换算仅支持 ${jn.year}-${String(jn.month).padStart(2,"0")}-${String(jn.day).padStart(2,"0")} ~ ${xn.year}-${String(xn.month).padStart(2,"0")}-${String(xn.day).padStart(2,"0")}，收到 ${n}-${e}-${t}`);let i=Gi(1900,1,31,n,e,t),l=Jn,s=0;for(;l<=bn&&(s=yr(l),!(i<s));)i-=s,l+=1;if(l>bn)throw new RangeError(`日期 ${n}-${e}-${t} 超出农历换算范围`);const a=jr(l);let u=1,o=!1,c=ze(l,u);for(;u<=12&&(a>0&&u===a+1&&!o?(u-=1,o=!0,c=ci(l)):c=ze(l,u),o&&u===a+1&&(o=!1),!(i<c));)i-=c,u+=1;const f=i+1;return{year:l,month:u,day:f,isLeapMonth:o,monthDays:c,monthName:(o?"闰":"")+Ki[u-1],dayName:nd(f)}}function Zy(n,e,t,i=!1){const l=jr(n);if(i&&l!==e)throw new RangeError(`${n} 年没有闰${Ki[e-1]}`);if(n<Jn||n>bn)throw new RangeError(`农历换算仅支持 ${Jn} ~ ${bn} 年，收到 ${n}`);const s=i?ci(n):ze(n,e);if(t<1||t>s)throw new RangeError(`${n} 年${i?"闰":""}${Ki[e-1]}只有 ${s} 天，收到 ${t}`);let a=0;for(let g=Jn;g<n;g+=1)a+=yr(g);for(let g=1;g<e;g+=1)a+=ze(n,g);l>0&&l<e&&(a+=ci(n)),i&&(a+=ze(n,e)),a+=t-1;const o=Date.UTC(1900,0,31)+a*864e5,c=new Date(o),f={year:c.getUTCFullYear(),month:c.getUTCMonth()+1,day:c.getUTCDate()};if(!nj(f))throw new RangeError(`农历 ${n} 年${i?"闰":""}${Ki[e-1]}${t} 日超出可换算范围`);return f}function by(n,e,t,i=!1){const l=i?ci(n):ze(n,e);return Math.min(Math.max(1,t),l||30)}function nd(n){return n===10?"初十":n===20?"二十":n===30?"三十":Gy[Math.floor(n/10)]+Xy[n%10]}function Gi(n,e,t,i,l,s){const a=Date.UTC(n,e-1,t),u=Date.UTC(i,l-1,s);return Math.round((u-a)/864e5)}const ed=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],td=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],id=["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"],ld=Array.from({length:60},(n,e)=>ed[e%10]+td[e%12]),sd=(()=>{const n=new Array(10).fill(-1);for(let e=0;e<60;e+=1)n[e%10]=e;return n})(),Su=["摩羯座","水瓶座","双鱼座","白羊座","金牛座","双子座","巨蟹座","狮子座","处女座","天秤座","天蝎座","射手座"],Eu=[[1,19],[1,20],[2,19],[3,21],[4,20],[5,21],[6,22],[7,23],[8,23],[9,23],[10,24],[11,23]],ad=1222;function xi(n){return ld[(n%60+60)%60]}function rd(n,e){const t=(n%10+10)%10,i=(e%12+12)%12,l=sd[t];for(let s=0;s<6;s+=1){const a=(l+s*10)%60;if(a%12===i)return a}return l}function ej(n,e,t){return(Math.floor(Date.UTC(n,e-1,t)/864e5)+2440588+49)%60}function ud(n,e,t){return xi(ej(n,e,t))}function tj(n){return((n-4)%60+60)%60}function Cu(n){return xi(tj(n))}function Du(n){return id[((n-4)%12+12)%12]}function Mu(n,e){const t=n*100+e;if(t>=ad)return Su[0];let i=0;for(let l=1;l<Eu.length;l+=1){const[s,a]=Eu[l];if(t>=s*100+a)i=l;else break}return Su[i]}function Pu(n,e){const l=((tj(n)%10%5*2+2)%10+e)%10,s=(2+e)%12;return xi(rd(l,s))}function od(n){return Math.floor((n+1)%24/2)}const cd=["子时","丑时","寅时","卯时","辰时","巳时","午时","未时","申时","酉时","戌时","亥时"],jd=["23:00-00:59","01:00-02:59","03:00-04:59","05:00-06:59","07:00-08:59","09:00-10:59","11:00-12:59","13:00-14:59","15:00-16:59","17:00-18:59","19:00-20:59","21:00-22:59"];function yd(n,e){const t=12*(n%5);return xi((t+e)%60)}const dd=["建","除","满","平","定","执","破","危","成","收","开","闭"];function gd(n,e){return((n-e)%12+12)%12}function fd(n){return dd[(n%12+12)%12]}const Pt=Math.PI/180,xd=[{name:"立春",longitude:315},{name:"雨水",longitude:330},{name:"惊蛰",longitude:345},{name:"春分",longitude:0},{name:"清明",longitude:15},{name:"谷雨",longitude:30},{name:"立夏",longitude:45},{name:"小满",longitude:60},{name:"芒种",longitude:75},{name:"夏至",longitude:90},{name:"小暑",longitude:105},{name:"大暑",longitude:120},{name:"立秋",longitude:135},{name:"处暑",longitude:150},{name:"白露",longitude:165},{name:"秋分",longitude:180},{name:"寒露",longitude:195},{name:"霜降",longitude:210},{name:"立冬",longitude:225},{name:"小雪",longitude:240},{name:"大雪",longitude:255},{name:"冬至",longitude:270},{name:"小寒",longitude:285},{name:"大寒",longitude:300}],Tu=["立春","惊蛰","清明","立夏","芒种","小暑","立秋","白露","寒露","立冬","大雪","小寒"];function md(n,e,t){let i=n,l=e;const s=Math.floor(i/100),a=2-s+Math.floor(s/4);return Math.floor(365.25*(i+4716))+Math.floor(30.6001*(l+1))+t+a-1524.5}function vd(n){const e=n+.5,t=Math.floor(e),i=e-t;let l=t;if(t>=2299161){const x=Math.floor((t-186721625e-2)/36524.25);l=t+1+x-Math.floor(x/4)}const s=l+1524,a=Math.floor((s-122.1)/365.25),u=Math.floor(365.25*a),o=Math.floor((s-u)/30.6001),c=s-u-Math.floor(30.6001*o),f=o<14?o-1:o-13;return{year:f>2?a-4716:a-4715,month:f,day:c,fraction:i}}function pd(n){const e=n+.4583333333333333;if(e<1900)return-3;if(e<1920){const t=e-1900;return-2.79+1.494119*t-.0598939*t**2+.0061966*t**3-197e-6*t**4}if(e<1941){const t=e-1920;return 21.2+.84493*t-.0761*t**2+.0020936*t**3}if(e<1961){const t=e-1950;return 29.07+.407*t-t**2/233+t**3/2547}if(e<1986){const t=e-1975;return 45.45+1.067*t-t**2/260-t**3/718}if(e<2005){const t=e-2e3;return 63.86+.3345*t-.060374*t**2+.0017275*t**3+651814e-9*t**4+2373599e-11*t**5}if(e<2050){const t=e-2e3;return 62.92+.32217*t+.005589*t**2}return-20+32*((e-1820)/100)**2-.5628*(2150-e)}function zd(n){const e=(n-2451545)/36525,t=280.46646+36000.76983*e+3032e-7*e*e,i=357.52911+35999.05029*e-1537e-7*e*e,l=.016708634-42037e-9*e-1267e-10*e*e,s=i*Pt,a=(1.914602-.004817*e-14e-6*e*e)*Math.sin(s)+(.019993-101e-6*e)*Math.sin(2*s)+289e-6*Math.sin(3*s),u=t+a,o=125.04-1934.136*e,c=280.4665+36000.7698*e,f=218.3164477+481267.88123421*e,g=(-17.2*Math.sin(o*Pt)-1.32*Math.sin(2*c*Pt)-.23*Math.sin(2*f*Pt)+.21*Math.sin(2*o*Pt))/3600,m=-20.4898/(3600*(1.000001018*(1-l*l)/(1+l*Math.cos(s))));return u+g+m}function Tt(n,e,t){const i=n+pd(t)/86400;let s=(((zd(i)%360+360)%360-e)%360+360)%360;return s>180&&(s-=360),s}function hd(n,e){const t=(e%360+360)%360,i=md(n,3,20)+e/.9856;let l=i-4,s=i+4,a=Tt(l,t,n),u=Tt(s,t,n);for(let o=0;o<60&&!(a<=0&&u>=0);o+=1)l-=4,s+=4,a=Tt(l,t,n),u=Tt(s,t,n);for(let o=0;o<80;o+=1){const c=(l+s)/2;Tt(c,t,n)<0?l=c:s=c}return(l+s)/2}function kd(n){const e=vd(n+.3333333333333333),t=Math.floor(e.fraction*24*60);return{year:e.year,month:e.month,day:e.day,hour:Math.floor(t/60),minute:t%60}}const Lu=new Map;function Ul(n){const e=Lu.get(n);if(e)return e;const t=xd.map(i=>{const l=i.longitude>=315?i.longitude-360:i.longitude,s=hd(n,l),a=kd(s);return{name:i.name,longitude:i.longitude,year:a.year,month:a.month,day:a.day,hour:a.hour,minute:a.minute}});return Lu.set(n,t),t}function gr(n){for(const e of[n.year,n.year-1]){const t=Ul(e)[0];if(n.year>t.year||n.year===t.year&&(n.month>t.month||n.month===t.month&&n.day>=t.day))return e}return n.year-1}function ij(n){const e=gr(n);return Ul(e).find(i=>i.year===n.year&&i.month===n.month&&i.day===n.day)??null}function _d(n){const e=gr(n),t=Ul(e);let i=null,l=0;for(let u=0;u<t.length;u+=1){const o=t[u];if(!Tu.includes(o.name))continue;if(!(n.year>o.year||n.year===o.year&&(n.month>o.month||n.month===o.month&&n.day>=o.day)))break;i=o,l=Tu.indexOf(o.name)}const s=t[0],a=i??s;return{termYear:e,monthIndex:l,termName:a.name,termDate:{year:a.year,month:a.month,day:a.day}}}const wd=[{jx:0,gz:0,ji:"入宅 安葬 伐木 作梁 纳畜 造畜稠 作灶",yi:"嫁娶 祭祀 开光 祈福 求嗣 出行 开市 交易 立券 动土 纳财 掘井 会亲友"},{jx:0,gz:1,ji:"栽种 安葬",yi:"祭祀 开光 塑绘 酬神 斋醮 订盟 纳采 嫁娶 裁衣 动土 起基 出火 拆卸 移徙 入宅 安香 修造 竖柱 上梁 纳畜 牧养 祈福 求嗣 解除 伐木 定磉 盖屋 安门"},{jx:0,gz:10,ji:"嫁娶 开市 出火 进人口 入殓 赴任 入宅 移徙 出行 安葬",yi:"纳采 订盟 祭祀 祈福 求嗣 塑绘 解除 拆卸 修造 动土 竖柱 上梁 安门 置产 开池 掘井 纳畜 安床 栽种 造畜稠 破土 移柩 立碑"},{jx:0,gz:11,ji:"栽种 入殓 安葬",yi:"祭祀 出行 沐浴 裁衣 祈福 斋醮 订盟 纳采 嫁娶 安机械 开市 立券 安碓磑 纳畜"},{jx:0,gz:12,ji:"移徙 入宅 出火 安门 安葬",yi:"纳采 嫁娶 祭祀 祈福 出行 开市 会亲友 动土 破土 启钻"},{jx:0,gz:13,ji:"作灶 安葬 开市 盖屋",yi:"祭祀 订盟 纳采 修造 动土 祈福 塑绘 斋醮 沐浴 拆卸 起基 入宅 安香 造庙 移柩 谢土 除服 成服 入学 习艺 出行 竖柱 上梁 掘井 求嗣 解除 伐木"},{jx:0,gz:14,ji:"祈福 动土 破土 安葬 入殓",yi:"纳采 嫁娶 出行 开市 立券 纳畜 牧养 出火 移徙 入宅"},{jx:0,gz:15,ji:"纳畜 入宅 移徙 安葬 探病 伐木 上梁 安门 入殓 动土",yi:"嫁娶 祭祀 祈福 求嗣 开光 开市 交易 立券 安床 出行 拆卸"},{jx:0,gz:16,ji:"合帐 上梁 经络 安葬 入殓",yi:"祭祀 祈福 求嗣 斋醮 安香 解除 移徙 入宅 会亲友 求医 治病 动土 破土 开生坟 合寿木"},{jx:0,gz:17,ji:"嫁娶 出行 安葬 入殓 入宅 作灶 冠笄 上梁",yi:"祭祀 祈福 求嗣 开光 开市 牧养 理发"},{jx:0,gz:18,ji:"出火 入宅 盖屋 安门 安葬",yi:"嫁娶 订盟 纳采 祭祀 斋醮 普渡 解除 出行 会亲友 开市 纳财 修造 动土 竖柱 上梁 开光 开仓 出货财 纳畜 牧养 开池 破土 启钻"},{jx:0,gz:19,ji:"",yi:"祭祀 立碑 修坟 启钻 除服 成服 馀事勿取"},{jx:0,gz:2,ji:"作灶 安葬 祭祀 入殓",yi:"安香 出火 纳采 订盟 嫁娶 开市 立券 交易 挂匾 开光 出行 解除 安床 栽种 置产 拆卸 修造 动土"},{jx:0,gz:20,ji:"开市 开仓 出货财 安床 安门 安葬",yi:"嫁娶 订盟 纳采 祭祀 祈福 出行 求医 治病 出火 移徙 入宅"},{jx:0,gz:21,ji:"",yi:"解除 馀事勿取"},{jx:0,gz:22,ji:"移徙 开市 入宅 安葬",yi:"祈福 斋醮 纳采 订盟 解除 架马 开柱眼 修造 动土 起基 上梁 归岫 盖屋 合脊 掘井 除服 成服 破土 栽种"},{jx:0,gz:23,ji:"嫁娶 栽种 安葬 理发 造庙 作灶 入殓 行丧 造桥",yi:"开市 交易 立券 纳财 纳畜 造畜稠 入宅 移徙 安床 开光 祈福 求嗣 动土"},{jx:0,gz:24,ji:"安葬 上梁 入宅 作灶",yi:"祭祀 沐浴 开光 塑绘 祈福 求嗣 订盟 纳采 冠笄 裁衣 嫁娶 动土 除服 成服 移柩 破土 启钻 出行 安碓磑 放水 开市 立券 交易"},{jx:0,gz:25,ji:"合帐 开市 安葬 入殓",yi:"嫁娶 祭祀 开光 祈福 求嗣 出火 入宅 移徙 安床 拆卸 动土 破土 谢土"},{jx:0,gz:26,ji:"入殓 安葬 入宅 安床",yi:"订盟 纳采 嫁娶 进人口 会亲友 交易 立券 动土 除服 谢土 移柩 破土 启钻 赴任 出行 开市 纳财 栽种"},{jx:0,gz:27,ji:"入宅 修造 安门 伐木 入殓 安葬 盖屋",yi:"祭祀 祈福 求嗣 开光 出行 开市 交易 立券 栽种 安床 纳畜 移徙 起基 动土 定磉 造仓 置产 破土 启钻 修坟"},{jx:0,gz:28,ji:"开市 安门",yi:"嫁娶 纳采 祭祀 祈福 求医 治病 出行 动土 移徙 入宅"},{jx:0,gz:29,ji:"移徙 栽种 出行 行丧 破土 安葬 词讼",yi:"嫁娶 纳采 订盟 祭祀 祈福 求嗣 纳采 裁衣 冠笄 开光 安床 作梁 修造 动土 作灶 起基 上梁 盖屋 纳畜 牧养"},{jx:0,gz:3,ji:"嫁娶 安葬",yi:"订盟 纳采 祭祀 动土 破土 交易 立券"},{jx:0,gz:30,ji:"",yi:"祈福 出行 订盟 纳采 嫁娶 裁衣 动土 安床 放水 开市 掘井 交易 立券 栽种 开渠 除服 成服 移柩 破土"},{jx:0,gz:31,ji:"开市 入宅 嫁娶 动土 破土 安葬",yi:"祭祀 修坟 除服 成服 启钻 移柩 馀事勿取"},{jx:0,gz:32,ji:"作灶 入殓 安葬 安床",yi:"祭祀 祈福 斋醮 沐浴 竖柱 订盟 纳采 嫁娶 拆卸 入宅 移柩 启钻 谢土 赴任 出火 纳畜"},{jx:0,gz:33,ji:"伐木 上梁 修造 入殓 理发 会亲友 入宅 安门 安葬 作灶",yi:"嫁娶 冠笄 祭祀 祈福 求嗣 斋醮　 开光 出行 解除 动土 开市 交易 立券 挂匾 拆卸 破土"},{jx:0,gz:34,ji:"嫁娶 作灶",yi:"订盟 纳采 祭祀 祈福 修造 动土 上梁 破土"},{jx:0,gz:35,ji:"嫁娶 合帐 入宅 行丧 安葬",yi:"纳采 订盟 祭祀 祈福 求嗣 斋醮 沐浴 进人口 会亲友 入学 治病 安碓磑 掘井 开池 纳畜 牧养 造畜稠"},{jx:0,gz:36,ji:"入殓 安葬 作灶 入宅",yi:"祭祀 沐浴 祈福 求嗣 斋醮 订盟 纳采 裁衣 冠笄 开市 立券 交易 纳财 沐浴 除服 谢土 出行 移柩"},{jx:0,gz:37,ji:"开市 交易 合帐 安葬",yi:"嫁娶 订盟 纳采 祭祀 祈福 出行 修造 动土 移徙 入宅 破土 出火 安门 安床 上梁 立碑 移柩"},{jx:0,gz:38,ji:"祈福 入殓 祭祀 作灶 安葬 探病",yi:"嫁娶 开光 出行 出火 拆卸 进人口 开市 立券 交易 挂匾 入宅 移徙 安床 栽种"},{jx:0,gz:39,ji:"入宅 安门 安葬",yi:"祭祀 祈福 求嗣 开光 纳采 订盟 嫁娶 出行 动土 破土 会亲友 开市 交易 立券 习艺 拆卸 起基 安碓磑 放水 开池 造仓 开渠 栽种 谢土 启钻 修坟 立碑"},{jx:0,gz:4,ji:"行丧 置产 安葬",yi:"嫁娶 纳采 订盟 冠笄 造车器 祭祀 开光 祈福 求嗣 出行 解除 伐木 出火 入宅 拆卸 修造 动土 上梁 安床 栽种 破土"},{jx:0,gz:40,ji:"安葬 开市 交易 立券",yi:"嫁娶 开光 祭祀 祈福 求嗣 出行 解除 伐木 入宅 移徙 安床 出火 拆卸 修造 上梁 栽种 移柩"},{jx:0,gz:41,ji:"出行 安葬 造桥",yi:"纳采 订盟 嫁娶 祭祀 沐浴 塑绘 开光 出火 治病 习艺 伐木 盖屋 竖柱 上梁 安床 作灶 安碓磑 挂匾 掘井 纳畜"},{jx:0,gz:42,ji:"入宅 作梁 安门 伐木 修造 上梁 入殓 盖屋",yi:"嫁娶 祭祀 祈福 求嗣 出行 动土 安床 掘井 破土 启钻"},{jx:0,gz:43,ji:"开市 祈福 动土 破土 入殓 安葬 造船",yi:"祭祀 解除 结网 畋猎 取渔 会亲友 入学 移柩 启钻 除服 成服"},{jx:0,gz:44,ji:"嫁娶 作灶 修坟 安门 入宅 立碑 安葬 安床",yi:"祭祀 祈福 求嗣 开光 开市 出行 解除 动土 起基 置产 栽种"},{jx:0,gz:45,ji:"移徙 入宅 出火 入殓 安葬",yi:"开市 纳财 出行 祭祀 祈福 求嗣 斋醮 问名 入学 起基 定磉 置产 开渠 掘井 拆卸 栽种 纳畜 牧养 动土 破土 启钻"},{jx:0,gz:46,ji:"嫁娶 出行 赴任 盖屋 入殓 入宅 移徙 出火 进人口 安葬",yi:"祭祀 开光 祈福 解除 作梁 动土 安床 掘井 栽种 纳畜 破土 移柩"},{jx:0,gz:47,ji:"造庙 嫁娶 出行 动土 安葬 行丧",yi:"订盟 纳采 会亲友 祭祀 斋醮 沐浴 塑绘 出火 开光 竖柱 上梁 开市 交易 立券 作梁 开柱眼 伐木 架马 安门 安床 拆卸 牧养 造畜稠 掘井"},{jx:0,gz:48,ji:"入宅 作灶 伐木 安葬 出火 出行 纳畜",yi:"嫁娶 开光 祈福 求嗣 解除 动土 安床 栽种 开池 掘井 祭祀 破土 启钻"},{jx:0,gz:49,ji:"纳采 动土 开市 交易",yi:"开光 祈福 求嗣 出行 解除 伐木 盖屋 起基 修造 架马 安门 移徙 入宅 造庙 除服 成服 移柩 谢土 纳畜 牧养"},{jx:0,gz:5,ji:"造庙 安葬",yi:"嫁娶 开市 立券 祭祀 祈福 动土 移徙 入宅"},{jx:0,gz:50,ji:"祭祀 入殓 安葬 探病",yi:"嫁娶 祈福 求嗣 开光 出行 解除 拆卸 出火 开市 立券 交易 入宅 移徙 安床 动土 破土 谢土"},{jx:0,gz:51,ji:"开市 入宅 探病 出火 盖屋",yi:"嫁娶 祭祀 祈福 求嗣 斋醮 订盟 纳采 解除 出行 动土 破土 习艺 针灸 理发 会亲友 起基 修造 动土 竖柱 定磉 安床 拆卸 纳畜 牧养 放水 破土 除服 成服 修坟 立碑"},{jx:0,gz:52,ji:"诸事不宜",yi:"解除 坏垣 馀事勿取"},{jx:0,gz:53,ji:"盖屋 入宅 作灶 入学 安葬 行丧",yi:"祭祀 塑绘 开光 求医 治病 嫁娶 会亲友 放水 掘井 牧养 纳畜 开渠 安碓磑"},{jx:0,gz:54,ji:"盖屋 入殓 安葬 伐木 入宅 移徙 置产 纳畜",yi:"嫁娶 祭祀 祈福 求嗣 开光 出行 解除 安床 栽种 移柩 进人口 会亲友 除服 成服"},{jx:0,gz:55,ji:"嫁娶 开市 动土 掘井 开池 安葬",yi:"祭祀 普渡 解除 会亲友 捕捉 畋猎 启钻 除服 成服 移柩"},{jx:0,gz:56,ji:"安床 安葬",yi:"嫁娶 祭祀 祈福 求嗣 开光 出行 解除 出火 进人口 开市 交易 立券 挂匾 纳财 入宅 移徙 栽种 破土 谢土"},{jx:0,gz:57,ji:"移徙 入宅 安门 作梁 安葬",yi:"祭祀 祈福 求嗣 斋醮 沐浴 冠笄 出行 理发 拆卸 解除 起基 动土 定磉 安碓磑 开池 掘井 扫舍 除服 成服 移柩 启钻 立碑 谢土"},{jx:0,gz:58,ji:"嫁娶 进人口 安葬 出行 赴任 入宅 移徙 入殓 开渠",yi:"祭祀 祈福 求嗣 开光 拆卸 修造 动土 上梁 安床 置产 栽种 破土"},{jx:0,gz:59,ji:"嫁娶 入殓 安葬 出行",yi:"塑绘 开光 沐浴 冠笄 会亲友 作灶 放水 造畜稠"},{jx:0,gz:6,ji:"入宅 上梁 入殓 盖屋 探病 作灶 安门 安葬 纳畜 伐木",yi:"嫁娶 纳采 订盟 开光 祭祀 出行 理发 动土 安床 放水 开渠 栽种 进人口"},{jx:0,gz:7,ji:"入殓 安葬 开市 交易",yi:"诸事不宜"},{jx:0,gz:8,ji:"安门 安床 裁衣 入宅 安葬",yi:"祭祀 祈福 求嗣 斋醮 开光 出行 嫁娶 求医 治病 动土 破土 入学 起基 扫舍 竖柱 上梁 开仓 出货财 置产 栽种 牧养 开生坟 谢土 立碑"},{jx:0,gz:9,ji:"",yi:"诸事不宜"},{jx:1,gz:0,ji:"开仓 嫁娶 移徙 入宅",yi:"祭祀 沐浴 祈福 斋醮 订盟 纳采 裁衣 拆卸 起基 竖柱 上梁 安床 入殓 除服 成服 移柩 启钻 挂匾 求嗣 出行 合帐 造畜稠"},{jx:1,gz:1,ji:"栽种 开光 出行 针灸 嫁娶 入宅 动土 破土",yi:"祭祀 祈福 求嗣 纳畜 入殓 启钻 谢土 除服 成服"},{jx:1,gz:10,ji:"入宅 作灶",yi:"祈福 斋醮 出行 订盟 纳采 入殓 移柩 破土 安葬 立碑 结网"},{jx:1,gz:11,ji:"嫁娶 开市 安床 栽种 安葬 祈福 开光 掘井",yi:"入宅 移徙 出行 进人口 修造 动土 起基 上梁 安门 造仓 补垣 塞穴 造畜稠"},{jx:1,gz:12,ji:"作灶 掘井 嫁娶 入宅",yi:"祭祀 祈福 斋醮 沐浴 安床 安机械 造车器 入殓 移柩 启钻 安葬 立碑 合帐 经络 交易"},{jx:1,gz:13,ji:"嫁娶 动土 开光 盖屋 破土",yi:"祭祀 祈福 求嗣 斋醮 入殓 除服 成服 移柩 安葬 启钻"},{jx:1,gz:14,ji:"祭祀 开光 嫁娶 入宅",yi:"订盟 纳采 裁衣 合帐 冠笄 安机械 拆卸 安床 入殓 除服 成服 移柩 破土 启钻 安葬 修坟 立碑 经络 交易 立券 纳财 筑堤 造仓 补垣 塞穴 纳畜 伐木 架马"},{jx:1,gz:15,ji:"开光 嫁娶 掘井 安葬 安门 探病",yi:"祭祀 祈福 求嗣 斋醮 冠笄 作灶 纳财 交易"},{jx:1,gz:16,ji:"开光 掘井 开仓",yi:"嫁娶 祭祀 祈福 求嗣 出行 出火 拆卸 修造 动土 入宅 移徙 安床 作灶 塞穴 栽种 破土 安葬"},{jx:1,gz:17,ji:"祈福 开光 掘井 开市 安葬",yi:"嫁娶 冠笄 修造 动土 作灶 移徙 入宅 补垣 塞穴 纳畜 牧养 架马 修造 动土 起基 定磉 开池 造船"},{jx:1,gz:18,ji:"",yi:"祭祀 入殓 破土 除服 成服 移柩 启钻 安葬 谢土 馀事勿取"},{jx:1,gz:19,ji:"动土 破土 掘井 开光 上梁 词讼",yi:"嫁娶 普渡 祭祀 祈福 补垣 塞穴 断蚁 筑堤 入殓 除服 成服 安葬"},{jx:1,gz:2,ji:"作灶 开光 嫁娶 开市 入宅",yi:"订盟 纳采 冠笄 拆卸 修造 动土 安床 入殓 除服 成服 移柩 安葬 破土 启钻 造仓"},{jx:1,gz:20,ji:"掘井 祈福 安床 开市 入宅 挂匾 开光",yi:"嫁娶 出行 伐木 拆卸 修造 动土 移徙 安葬 破土 修坟 立碑"},{jx:1,gz:21,ji:"开光 嫁娶 会亲友 栽种 针灸 安葬",yi:"冠笄 祭祀 沐浴 作灶 理发 整手足甲 扫舍 补垣 塞穴 入殓 破土 启钻"},{jx:1,gz:22,ji:"入宅 移徙 嫁娶 掘井 作灶 出火 进人口 开市 开光",yi:"安床 祭祀 开池 补垣 入殓 移柩 破土 启钻"},{jx:1,gz:23,ji:"嫁娶 祈福 开光 掘井 安葬 行丧",yi:"纳采 订盟 祭祀 沐浴 冠笄 合帐 裁衣 修造 动土 拆卸 移徙 入宅 安门 开仓 筑堤 开厕 栽种 纳畜 补垣 塞穴"},{jx:1,gz:24,ji:"置产 嫁娶 出行 开光 栽种 动土 破土 入宅 治病",yi:"安床 裁衣 交易 立券 入殓 移柩 安葬 除服 成服"},{jx:1,gz:25,ji:"出行 嫁娶 入宅 动土",yi:"祭祀 祈福 求嗣 酬神 裁衣 安床 立券 交易 入殓 除服 成服 移柩 谢土 启钻"},{jx:1,gz:26,ji:"嫁娶 祭祀 开光 出行 出火 移徙 入宅 安门",yi:"安床 伐木 拆卸 修造 动土 上梁 立券 交易 栽种 纳畜 牧养 入殓 安葬"},{jx:1,gz:27,ji:"掘井 安门 嫁娶 纳采",yi:"祭祀 祈福 裁衣 合帐 安床 入殓 除服 成服 移柩 破土 启钻 安葬 谢土 立碑 造畜稠"},{jx:1,gz:28,ji:"安床 开渠 上梁 修造 开市 开光 入宅 移徙 安床",yi:"嫁娶 交易 立券 开厕 补垣 塞穴 畋猎 取渔 开生坟"},{jx:1,gz:29,ji:"嫁娶 安葬",yi:"裁衣 作灶 移徙 入宅 纳畜"},{jx:1,gz:3,ji:"入宅 作灶 理发 开光 安门",yi:"祭祀 出行 修造 动土 合帐 造畜稠 安床 移徙 入殓 移柩 破土 启钻 安葬 开生坟 合寿木 补垣 塞穴"},{jx:1,gz:30,ji:"开光 治病 嫁娶 掘井 破土 安葬",yi:"经络 祭祀 沐浴 补垣 塞穴 除服 成服 移柩 入殓 启钻 立碑"},{jx:1,gz:31,ji:"动土 破土",yi:"嫁娶 祭祀 祈福 斋醮 作灶 移徙 入宅"},{jx:1,gz:32,ji:"祈福 开光 开市 入宅 动土",yi:"嫁娶 冠笄 安机械 解除 纳畜 牧养 沐浴 伐木 架马 作梁 安门 扫舍 合寿木 安葬 启钻 立碑 修坟"},{jx:1,gz:33,ji:"动土 上梁",yi:"嫁娶 祭祀 安机械 入殓 破土 安葬"},{jx:1,gz:34,ji:"置产 造船 开光 掘井 作灶",yi:"合帐 裁衣 嫁娶 安床 入殓 移柩 破土 造畜稠"},{jx:1,gz:35,ji:"入宅 安葬",yi:"出行 沐浴 理发 补垣 塞穴"},{jx:1,gz:36,ji:"入宅 置产 嫁娶 动土 栽种 开市 开光 动土 破土",yi:"祭祀 祈福 求嗣 沐浴 问名 交易 纳财 入殓 移柩 安葬 修坟 立碑 谢土 造畜稠 教牛马"},{jx:1,gz:37,ji:"开光 掘井 针灸 出行 嫁娶 入宅 移徙 作灶 动土",yi:"祭祀 祈福 求嗣 入殓 启钻 安葬 移柩"},{jx:1,gz:38,ji:"嫁娶 祈福 出火 入宅",yi:"冠笄 立券 交易 修造 动土 安机械 入殓 安葬 破土"},{jx:1,gz:39,ji:"词讼 开光 开市",yi:"嫁娶 出行 合帐 冠笄 安床 除服 成服 作灶 交易 立券 入殓 移柩 破土 安葬"},{jx:1,gz:4,ji:"赴任 捕捉",yi:"嫁娶 裁衣 祭祀 出行 安床 作灶 移徙 入宅 破土 安葬"},{jx:1,gz:40,ji:"盖屋 造桥 安门 安葬 上梁",yi:"嫁娶 冠笄 祭祀 出行 移徙 入宅 作灶 造车器 补垣 塞穴 开厕 破土 启钻 除服 成服 入殓"},{jx:1,gz:41,ji:"安葬 出行 祈福 栽种",yi:"求嗣 嫁娶 纳采 合帐 裁衣 冠笄 伐木 作梁 修造 动土 起基 竖柱 上梁 安门 作灶 筑堤 造畜稠"},{jx:1,gz:42,ji:"开市 入宅 嫁娶 开光 盖屋",yi:"祭祀 入殓 除服 成服 移柩 破土 启钻 安葬 塞穴 断蚁 结网"},{jx:1,gz:43,ji:"盖屋 开光 理发 造船 掘井 作灶",yi:"嫁娶 祭祀 祈福 求嗣 出行 出火 拆卸 修造 移徙 动土 安床 入殓 破土 安葬 启钻"},{jx:1,gz:44,ji:"嫁娶 开市 祭祀 祈福 斋醮 纳采 修坟",yi:"冠笄 沐浴 出行 修造 动土 移徙 入宅 破土 安葬"},{jx:1,gz:45,ji:"嫁娶 开光 会亲友 掘井 安门 栽种",yi:"祭祀 解除 裁衣 理发 安床 作灶 造畜稠 放水 筑堤 补垣 塞穴 整手足甲 扫舍"},{jx:1,gz:46,ji:"嫁娶 入宅 安床 掘井 开光",yi:"祭祀 理发 置产 塞穴 除服 成服 移柩 入殓 破土 安葬"},{jx:1,gz:47,ji:"嫁娶 祈福 掘井 行丧 安葬 安床",yi:"作梁 修造 动土 安门 作灶 塞穴 开池 开厕 筑堤 补垣 栽种"},{jx:1,gz:48,ji:"开光 嫁娶 开市 动土 破土",yi:"交易 立券 纳财 安床 裁衣 造畜稠 安葬 谢土 启钻 除服 成服 修坟 立碑 移柩 入殓"},{jx:1,gz:49,ji:"词讼 出火 入宅",yi:"祭祀 合帐 裁衣 经络 伐木 作梁 安床 作灶 入殓 安葬 启钻 移柩"},{jx:1,gz:5,ji:"安床 祈福 出行 安葬 行丧 开光",yi:"嫁娶 合帐 裁衣 冠笄 伐木 上梁 出火 拆卸 移徙 修造 动土 安门 纳财 筑堤 栽种 塞穴"},{jx:1,gz:50,ji:"祭祀 嫁娶 出行 掘井",yi:"裁衣 经络 伐木 开柱眼 拆卸 修造 动土 上梁 合脊 合寿木 入殓 除服 成服 移柩 破土 安葬 启钻 修坟 立碑"},{jx:1,gz:51,ji:"嫁娶 掘井 探病 开市 开光 栽种",yi:"祭祀 裁衣 冠笄 安床 交易 立券 开池 补垣 塞穴 入殓 破土 启钻 安葬 谢土 除服 成服"},{jx:1,gz:52,ji:"",yi:"馀事勿取"},{jx:1,gz:53,ji:"嫁娶 掘井 入宅 移徙 出火 出行 行丧 安葬 开光 理发 进人口",yi:"修造 动土 起基 安门 安床 栽种 筑堤 补垣 造畜稠"},{jx:1,gz:54,ji:"移徙 开市 入宅 嫁娶 开光 安门",yi:"祭祀 塞穴 结网 畋猎 馀事勿取"},{jx:1,gz:55,ji:"开光 出行 修造 上梁 入宅 安门 作灶 裁衣",yi:"祭祀 动土 筑堤 开池 会亲友 塞穴 入殓 移柩 破土 安葬"},{jx:1,gz:56,ji:"祭祀 祈福 开光 开市 安床",yi:"出行 解除 冠笄 嫁娶 伐木 架马 开柱眼 修造 动土 移徙 入宅 开生坟 合寿木 入殓 移柩 破土 安葬 修坟"},{jx:1,gz:57,ji:"开光 栽种",yi:"嫁娶 祭祀 祈福 求嗣 动土 安床 扫舍 入殓 移柩 破土 启钻 安葬 作灶 整手足甲 补垣 除服 成服"},{jx:1,gz:58,ji:"开光 掘井 安葬 谢土 修坟",yi:"嫁娶 冠笄 安床 纳采 会亲友 塞穴 捕捉 置产 造畜稠"},{jx:1,gz:59,ji:"移徙 入宅 嫁娶 祈福 开光 掘井",yi:"沐浴 冠笄 补垣 塞穴 裁衣 修造 作梁 开柱眼 安碓磑 筑堤 开厕 断蚁"},{jx:1,gz:6,ji:"诸事不宜",yi:"补垣 塞穴 结网 入殓 除服 成服 移柩 安葬 启钻 馀事勿取"},{jx:1,gz:7,ji:"嫁娶 入宅 斋醮 开光 针灸 掘井",yi:"祭祀 出行 作梁 出火 拆卸 修造 动土 起基 安床 补垣 塞穴 入殓 破土 安葬 移柩 造畜稠"},{jx:1,gz:8,ji:"安床 开光 开市 交易",yi:"祭祀 裁衣 冠笄 嫁娶 安机械 拆卸 动土 起基 移徙 入宅 入殓 启钻 安葬 造仓 经络"},{jx:1,gz:9,ji:"开市 栽种 置产 词讼 安门 掘井 开光",yi:"嫁娶 裁衣 冠笄 合帐 祭祀 出行 安床 移徙 塞穴 入殓 破土 移柩 安葬"},{jx:10,gz:0,ji:"纳采 问名 订盟 嫁娶 入宅 开仓 出火 动土 破土 纳畜 伐木",yi:"开市 交易 立券 挂匾 祭祀 开光 祈福 求嗣 安床 解除 修造 安葬"},{jx:10,gz:1,ji:"嫁娶 安葬",yi:"纳采 祭祀 祈福 开市 求医 治病 动土 纳畜"},{jx:10,gz:10,ji:"嫁娶 安门 移徙 入宅 安葬",yi:"塞穴 结网 取渔 畋猎"},{jx:10,gz:11,ji:"嫁娶 栽种 伐木 安葬",yi:"祭祀 开光 塑绘 纳采 裁衣 拆卸 安床 起基 动土 竖柱 上梁 移徙 入宅 安香 开市 立券 挂匾 沐浴 出行 求嗣 安门"},{jx:10,gz:12,ji:"出火 嫁娶 开市",yi:"祭祀 祈福 求嗣 斋醮 纳采 订盟 开光 竖柱 上梁 开仓 出货财 盖屋 起基 定磉 安门 诸事不宜 破土 入殓 启钻 谢土"},{jx:10,gz:13,ji:"入宅 移徙 理发 出火 嫁娶 出行",yi:"开市 交易 立券 祭祀 祈福 开光 伐木 进人口 安床 拆卸 修造 动土 栽种 破土 移柩 安葬"},{jx:10,gz:14,ji:"斋醮 祭祀 移徙 入宅 上梁 嫁娶",yi:"纳采 冠笄 求医 治病 开市 立券 修造 动土 安机械 破土 安葬"},{jx:10,gz:15,ji:"",yi:"嫁娶 开光 出行 祈福 求嗣 解除 拆卸 动土 修造 进人口 开市 交易 立券 挂匾 入宅 移徙 安床 栽种 纳畜 入殓 移柩 安葬"},{jx:10,gz:16,ji:"纳采 订盟 经络 行丧 安葬 探病",yi:"嫁娶 祭祀 祈福 斋醮 普渡 移徙 入宅 动土 治病 开市 交易 立券 开光 修造 造车器 安香 安床 捕捉 畋猎 结网"},{jx:10,gz:17,ji:"嫁娶 立碑 出行 伐木 安葬 行丧 移徙 纳畜",yi:"开市 交易 立券 挂匾 祭祀 开光 进人口 入宅 安床 出火 拆卸 修造 动土 栽种"},{jx:10,gz:18,ji:"上梁 开光 盖屋 架马 合寿木",yi:"造车器 嫁娶 订盟 纳采 会亲友 祭祀 出行 开市 立券 移徙 入宅 破土 安葬"},{jx:10,gz:19,ji:"入宅 作灶 词讼 移徙 出行 赴任",yi:"祭祀 祈福 求嗣 开光 解除 理发 会亲友 栽种 纳畜 牧养 安葬 修坟 立碑 启钻"},{jx:10,gz:2,ji:"作灶 出火 祭祀 嫁娶 入宅",yi:"开市 交易 立券 挂匾 开光 解除 拆卸 动土 安床 修造 上梁 置产 栽种 破土 安葬"},{jx:10,gz:20,ji:"嫁娶 动土 安床 造桥 掘井",yi:"纳采 订盟 移徙 入宅 出行 安机械 会亲友 祭祀 祈福 斋醮 开光 安香 出火 解除 求医 针灸 治病 盖屋 起基 修造 安门 造船 纳畜 牧养 移柩 入殓 启钻 谢土 修坟 立碑"},{jx:10,gz:21,ji:"",yi:"祭祀 入殓 破土 除服 成服 启钻 安葬 修坟 立碑 馀事勿取"},{jx:10,gz:22,ji:"馀事勿取",yi:"祭祀 结网 入殓 除服 成服 移柩 安葬 破土"},{jx:10,gz:23,ji:"嫁娶 行丧 架马 作梁 理发 牧养 安葬 纳畜 伐木",yi:"开市 立券 交易 挂匾 祭祀 祈福 开光 入宅 移徙 安床 拆卸 动土 上梁 进人口"},{jx:10,gz:24,ji:"出火 入宅 安葬 伐木",yi:"祭祀 塑绘 开光 订盟 纳采 冠笄 裁衣 安机械 拆卸 修造 动土 安床 经络 开市"},{jx:10,gz:25,ji:"嫁娶 掘井 入宅 移徙 安葬",yi:"开市 交易 立券 祭祀 祈福 开光 动土 安床 出行 栽种 纳畜 牧养 竖柱 上梁 解除 破土"},{jx:10,gz:26,ji:"",yi:"订盟 纳采 会亲友 进人口 雕刻 拆卸 修造 动土 起基 开市 栽种 纳畜 牧养 入殓 除服 成服 移柩 破土 安葬"},{jx:10,gz:27,ji:"掘井 伐木 纳畜 合寿木",yi:"嫁娶 纳采 订盟 祭祀 祈福 求嗣 开光 出火 出行 拆卸 修造 动土 进人口 开市 交易 立券 挂匾 入宅 移徙 安床 栽种 入殓 破土 谢土 安葬"},{jx:10,gz:28,ji:"",yi:"祈福 求嗣 解除 订盟 纳采 动土 起基 放水 造仓 开市 纳畜 牧养 开生坟 入殓 除服 成服 移柩 破土 安葬"},{jx:10,gz:29,ji:"嫁娶 破土 进人口 出行 入宅 移徙 出火 纳畜 词讼 安葬",yi:"开市 交易 立券 纳财 挂匾 栽种 祭祀 祈福 开光 拆卸 动土 安床"},{jx:10,gz:3,ji:"赴任",yi:"嫁娶 纳采 开市 出行 动土 上梁 移徙 入宅 破土 安葬"},{jx:10,gz:30,ji:"开仓 冠笄 伐木 作梁",yi:"祭祀 塑绘 开光 祈福 斋醮 出行 订盟 纳采 裁衣 嫁娶 拆卸 修造 安床 入宅 安香 入殓 启钻 安葬 谢土 赴任 会亲友 进人口 出行 移徙 上梁 经络 开市 交易 立券 纳财"},{jx:10,gz:31,ji:"嫁娶 进人口 入宅 移徙 出火 出行",yi:"祭祀 祈福 求嗣 开光 解除 伐木 拆卸 修造 栽种 纳畜 安葬 修坟 立碑"},{jx:10,gz:32,ji:"",yi:"塑绘 斋醮 出行 拆卸 解除 修造 移徙 造船 入殓 除服 成服 移柩 启钻 修坟 立碑 谢土"},{jx:10,gz:33,ji:"嫁娶 入宅 作灶 纳采 订盟",yi:"祭祀 斋醮 入殓 破土 启钻 安葬 修坟 立碑 除服 成服"},{jx:10,gz:34,ji:"嫁娶 上梁 入宅 作灶",yi:"取渔 入殓 除服 成服 移柩 破土 安葬 立碑"},{jx:10,gz:35,ji:"嫁娶 定磉 合寿木 安葬 行丧",yi:"祭祀 祈福 求嗣 斋醮 沐浴 开光 理发 经络 解除 治病 治病 立碑 栽种 牧养 掘井 开池"},{jx:10,gz:36,ji:"诸事不宜",yi:""},{jx:10,gz:37,ji:"安床 上梁 裁衣 入宅 嫁娶",yi:"祭祀 祈福 求嗣 开光 订盟 纳采 解除 动土 起基 进人口 开市 交易 立券 纳财 造仓 开池 栽种 纳畜 破土 安葬"},{jx:10,gz:38,ji:"嫁娶",yi:"开光 求医 治病 动土 上梁 入殓 破土 安葬"},{jx:10,gz:39,ji:"入宅 开市 掘井 词讼 合寿木",yi:"嫁娶 订盟 纳采 祭祀 祈福 斋醮 开光 会亲友 求医 治病 盖屋 起基 竖柱 上梁 安门 安碓磑 筑堤 开池 破土 安葬 除服 成服"},{jx:10,gz:4,ji:"入宅 嫁娶 掘井 牧养",yi:"安机械 纳采 订盟 祭祀 祈福 求嗣 开光 普渡 出行 出火 拆卸 修造 动土 进人口 开市 交易 立券 移徙 安床 栽种 上梁 纳畜 破土 移柩 安葬"},{jx:10,gz:40,ji:"开光 针灸",yi:"嫁娶 订盟 纳采 祭祀 祈福 求医 治病 动土 移徙 入宅 破土 安葬"},{jx:10,gz:41,ji:"安葬 纳畜 出行 行丧 伐木 栽种 造庙 造桥",yi:"嫁娶 纳采 订盟 祭祀 祈福 求嗣 开光 解除 进人口 入宅 移徙 出火 安床 开市 交易 立券 挂匾"},{jx:10,gz:42,ji:"斋醮 安门",yi:"嫁娶 订盟 纳采 出行 开市 祭祀 祈福 动土 移徙 入宅 破土 安葬"},{jx:10,gz:43,ji:"嫁娶 移徙 出火 开市 入宅",yi:"订盟 纳采 会亲友 祭祀 祈福 修造 动土 安机械 破土 安葬"},{jx:10,gz:44,ji:"诸事不宜",yi:"解除 坏垣 馀事勿取"},{jx:10,gz:45,ji:"造庙 入宅 修造 安葬 行丧 嫁娶",yi:"祭祀 沐浴 补垣 塞穴 断蚁 解除 馀事勿取"},{jx:10,gz:46,ji:"诸事不宜",yi:"结网 入殓 除服 成服 移柩 安葬 破土"},{jx:10,gz:47,ji:"祈福 嫁娶 安葬 破土",yi:"开光 求嗣 出行 纳采 冠笄 出火 拆卸 起基 修造 动土 上梁 移徙 造船 开市 交易 立券 纳财"},{jx:10,gz:48,ji:"",yi:"祭祀 祈福 求嗣 开光 解除 纳采 冠笄 出火 拆卸 进人口 安床 动土 上梁 造庙 掘井 开池 入殓 移柩 安葬 破土"},{jx:10,gz:49,ji:"嫁娶 出火 移徙 入宅",yi:"开市 交易 立券 安机械 会亲友 开光 求医 治病 盖屋 起基 修造 动土 定磉 竖柱 上梁 安门 作灶 放水 开厕 开池 栽种 牧养 造畜稠 破土 安葬 立碑"},{jx:10,gz:5,ji:"定磉 安葬",yi:"祭祀 会亲友 进人口 动土 上梁 开光 塑绘 冠笄 拆卸 起基 安床 开市 立券 赴任 经络"},{jx:10,gz:50,ji:"嫁娶 出火 伐木 祭祀 入宅 移徙 纳畜 探病",yi:"开市 交易 立券 纳财 栽种 安床 拆卸 修造 动土 上梁 入殓 安葬 破土 除服 成服"},{jx:10,gz:51,ji:"嫁娶 开市 栽种 合寿木",yi:"祭祀 祈福 斋醮 出行 纳采 订盟 安机械 出火 拆卸 修造 动土 起基 移徙 入宅 造庙 入殓 除服 成服 移柩 破土 安葬 谢土"},{jx:10,gz:52,ji:"栽种 作灶 针灸 出行",yi:"嫁娶 出火 拆卸 祭祀 祈福 开光 伐木 动土 开市 交易 立券 入宅 移徙 安床 纳畜 入殓 安葬"},{jx:10,gz:53,ji:"行丧 安葬 合寿木",yi:"开光 求嗣 雕刻 嫁娶 订盟 纳采 出火 拆卸 修造 动土 起基 上梁 放水 移徙 入宅 造仓 造船 开市 开池 纳畜 牧养 挂匾"},{jx:10,gz:54,ji:"纳畜 伐木 置产 作梁 行丧 安葬 修坟 立碑",yi:"嫁娶 祭祀 开市 开光 出行 入宅 移徙 出火 拆卸 修造 安床"},{jx:10,gz:55,ji:"嫁娶 开市 入宅 出火 移徙",yi:"纳采 订盟 祭祀 祈福 求嗣 斋醮 开光 会亲友 解除 入学 纳财 交易 立券 经络 起基 动土 定磉 开池 栽种 纳畜 牧养 破土 入殓 立碑 安葬"},{jx:10,gz:56,ji:"诸事不宜",yi:"解除 扫舍 馀事勿取"},{jx:10,gz:57,ji:"开市 伐木 嫁娶 作梁",yi:"入殓 除服 成服 移柩 启钻 安葬 修坟 立碑"},{jx:10,gz:58,ji:"嫁娶 入宅",yi:"祭祀 塞穴 结网 破土 谢土 安葬 移柩 除服 成服 馀事勿取"},{jx:10,gz:59,ji:"造庙 嫁娶 伐木 安葬",yi:"祭祀 开光 塑绘 订盟 纳采 合帐 冠笄 拆卸 动土 起基 上梁 入宅 安香 开市 立券 纳财 沐浴 求嗣 出火 竖柱 安门"},{jx:10,gz:6,ji:"探病 纳畜 伐木 起基 作梁 盖屋",yi:"嫁娶 纳采 订盟 开市 交易 立券 挂匾 祭祀 祈福 开光 造车器 挂匾 出行 入宅 移徙 安床 安门 拆卸 修造 动土 栽种 安葬 破土 启钻 除服 成服 入殓 立碑"},{jx:10,gz:7,ji:"嫁娶 入宅 治病 赴任",yi:"祭祀 祈福 订盟 纳采 裁衣 合帐 冠笄 安机械 安床 造畜稠 入殓 移柩 启钻 安葬 谢土 除服 成服 会亲友 竖柱 上梁 经络 开市 交易 立券 纳财 纳畜 筑堤"},{jx:10,gz:8,ji:"伐木 作梁 动土 安床 栽种 造桥",yi:"嫁娶 祭祀 祈福 求嗣 开光 出行 解除 入宅 移徙 纳畜 入殓 破土 修坟 立碑"},{jx:10,gz:9,ji:"破土 伐木",yi:"入殓 除服 成服 移柩 启钻 安葬 立碑 馀事勿取"},{jx:11,gz:0,ji:"嫁娶 入宅 移徙 作灶 安葬",yi:"祭祀 沐浴 捕捉 栽种"},{jx:11,gz:1,ji:"嫁娶 入宅",yi:"祭祀 修门 取渔 纳财 纳畜 馀事勿取"},{jx:11,gz:10,ji:"开仓 盖屋 安葬 安床",yi:"祭祀 祈福 斋醮 塑绘 开光 除服 成服 入殓 作灶 嫁娶 捕捉 畋猎 纳财"},{jx:11,gz:11,ji:"嫁娶 开市 安葬 破土",yi:"纳采 祭祀 祈福 出行 会亲友 修造 动土 移徙 入宅"},{jx:11,gz:12,ji:"作灶 开市 安葬 作梁",yi:"裁衣 合帐 冠笄 嫁娶 纳婿 安床 入殓 纳财"},{jx:11,gz:13,ji:"嫁娶 安葬",yi:"祭祀 捕捉 解除 馀事勿取"},{jx:11,gz:14,ji:"诸事不宜",yi:"结网 解除 馀事勿取"},{jx:11,gz:15,ji:"开市 安葬 破土 修坟 掘井",yi:"祭祀 作灶 馀事勿取"},{jx:11,gz:16,ji:"安葬 经络 修坟 破土 开市 安床 启钻 立碑",yi:"祭祀 作灶 纳财 栽种 纳畜 进人口"},{jx:11,gz:17,ji:"掘井 出行 破土 行丧 安葬",yi:"嫁娶 订盟 纳采 作灶 冠笄 裁衣 会亲友 纳畜 牧养 安机械 开市 立券 纳财 安床"},{jx:11,gz:18,ji:"探病 开渠 安葬 伐木 作灶 入宅",yi:"祭祀 理发 会亲友 进人口 嫁娶 针灸 入殓 移柩"},{jx:11,gz:19,ji:"动土 破土 开市 安葬",yi:"祭祀 作灶 纳财 捕捉 畋猎 馀事勿取"},{jx:11,gz:2,ji:"动土 破土 安葬",yi:"嫁娶 纳采 出行 移徙 入宅"},{jx:11,gz:20,ji:"安床 开市 交易 出货财 安葬 修坟 嫁娶 作灶",yi:"祭祀 沐浴 结网 移柩 入殓 除服 成服"},{jx:11,gz:21,ji:"开市 斋醮 破土 安葬",yi:"祭祀 沐浴 作灶 纳财 捕捉 畋猎 安床 扫舍"},{jx:11,gz:22,ji:"诸事不宜",yi:"祭祀 解除 馀事勿取"},{jx:11,gz:23,ji:"伐木 作灶 安葬 取渔 入宅",yi:"塑绘 开光 祈福 求嗣 订盟 纳采 裁衣 冠笄 拆卸 修造 动土 起基 安门 安床 移徙 造仓 结网 纳畜"},{jx:11,gz:24,ji:"置产 伐木 纳畜 造畜稠 安葬 破土 作梁 作灶 开生坟",yi:"理发 冠笄 嫁娶 进人口"},{jx:11,gz:25,ji:"造庙 嫁娶 安床",yi:"祭祀 馀事勿取"},{jx:11,gz:26,ji:"祭祀 伐木 架马 安床 修造 动土 安葬 修坟 破土",yi:"解除 出行 纳采 冠笄 竖柱 上梁 移徙 作灶 进人口 入宅 纳畜 牧养"},{jx:11,gz:27,ji:"诸事不宜",yi:"祭祀 捕捉 取渔 修饰垣墙 馀事勿取"},{jx:11,gz:28,ji:"开渠 造船 安床 安葬 破土 出行 修坟 掘井 开市 开生坟",yi:"祭祀 冠笄 作灶 交易 纳财 栽种 结网 纳畜 牧养 进人口"},{jx:11,gz:29,ji:"",yi:"塑绘 开光 解除 订盟 纳采 嫁娶 出火 修造 动土 移徙 入宅 拆卸 起基 安门 分居 开市 交易 立券 纳财 纳畜 牧养"},{jx:11,gz:3,ji:"入宅 出行 掘井 安葬",yi:"祭祀 结网 馀事勿取"},{jx:11,gz:30,ji:"开仓 出货财 伐木 纳畜 开市 上梁 盖屋 破土 启钻 栽种",yi:"嫁娶 祭祀 理发 进人口 作灶 移柩 冠笄 会亲友"},{jx:11,gz:31,ji:"栽种 动土 安葬 开市",yi:"祭祀 作灶 入殓 除服 成服 畋猎"},{jx:11,gz:32,ji:"嫁娶 入宅 开市 安床 破土 修坟",yi:"沐浴 扫舍 捕捉 畋猎 解除 塞穴 馀事勿取"},{jx:11,gz:33,ji:"开市 破土",yi:"祭祀 沐浴 安床 纳财 畋猎 捕捉"},{jx:11,gz:34,ji:"嫁娶 开市 入宅 安床 破土 安葬",yi:"祭祀 斋醮 纳财 捕捉 畋猎"},{jx:11,gz:35,ji:"安葬 作灶 伐木 作梁",yi:"祭祀 求嗣 沐浴 酬神 订盟 纳采 裁衣 合帐 冠笄 安机械 安床 造仓 开池 经络 纳财 开市 立券 交易 结网 取渔 纳畜 捕捉"},{jx:11,gz:36,ji:"入宅 盖屋 竖柱 安葬",yi:"纳财 交易 立券 栽种 捕捉 结网 取渔 进人口 教牛马 理发"},{jx:11,gz:37,ji:"诸事不宜",yi:"解除 坏垣 馀事勿取"},{jx:11,gz:38,ji:"探病 嫁娶 开市",yi:"祭祀 结网 捕捉 馀事勿取"},{jx:11,gz:39,ji:"诸事不宜",yi:"祭祀 栽种 馀事勿取"},{jx:11,gz:4,ji:"开市 破土",yi:"祭祀 作灶 纳财 捕捉"},{jx:11,gz:40,ji:"安葬 破土 开市 开仓 出货财 启钻",yi:"纳采 订盟 嫁娶 移徙 入宅 出行 祭祀 祈福 斋醮 塑绘 开光 安香 出火 会亲友 解除 入学 竖柱 上梁 拆卸 盖屋 起基 栽种 牧养 纳畜"},{jx:11,gz:41,ji:"动土 安葬",yi:"订盟 纳采 祭祀 祈福 安机械 作灶 纳畜"},{jx:11,gz:42,ji:"嫁娶 开市 盖屋 作梁 合寿木",yi:"祭祀 冠笄 捕捉 馀事勿取"},{jx:11,gz:43,ji:"诸事不宜",yi:"祭祀 塞穴 馀事勿取"},{jx:11,gz:44,ji:"嫁娶 纳采 订盟 安床 动土 破土 安葬",yi:"祭祀 沐浴 捕捉 畋猎 结网 扫舍"},{jx:11,gz:45,ji:"伐木 纳畜 上梁 入宅 作灶 造畜稠 嫁娶 安葬 作梁 造船 安门",yi:"沐浴 理发 扫舍"},{jx:11,gz:46,ji:"开市 安床 安葬 修坟",yi:"嫁娶 纳采 订盟 问名 祭祀 冠笄 裁衣 会亲友 进人口 纳财 捕捉 作灶"},{jx:11,gz:47,ji:"嫁娶 安葬 破土 作梁 纳畜 牧养 行丧 作灶",yi:"移徙 祭祀 开光 祈福 出行 解除 进人口 雇庸 安床 动土 起基 上梁 安门 解除"},{jx:11,gz:48,ji:"纳财 开市 安葬 破土",yi:"理发 冠笄 嫁娶 进人口 栽种 捕捉 针灸"},{jx:11,gz:49,ji:"诸事不宜",yi:"解除 破屋 馀事勿取"},{jx:11,gz:5,ji:"行丧 安葬 出行 作梁 纳畜 伐木 造桥",yi:"嫁娶 祭祀 祈福 求嗣 裁衣 冠笄 经络 修造 进人口 安床 动土 竖柱 上梁 移徙 交易 立券 栽种 会亲友"},{jx:11,gz:50,ji:"开市 动土 祭祀 斋醮 安葬 探病",yi:"栽种 捕捉 畋猎 馀事勿取"},{jx:11,gz:51,ji:"诸事不宜",yi:"祭祀 作灶 馀事勿取"},{jx:11,gz:52,ji:"开市 入宅 安床 动土 安葬",yi:"祭祀 进人口 纳财 纳畜 牧养 捕捉 馀事勿取"},{jx:11,gz:53,ji:"动土 破土 嫁娶 理发 出行 入宅 移徙 分居 安香 出火",yi:"祭祀 开光 解除 进人口 交易 立券 纳财 纳畜"},{jx:11,gz:54,ji:"开光 动土 破土 开市 修造 入宅 安门",yi:"祭祀 嫁娶 捕捉"},{jx:11,gz:55,ji:"安葬 开市 修坟 立碑",yi:"嫁娶 祭祀 作灶 纳财"},{jx:11,gz:56,ji:"安床 安门 破土 修坟 安葬",yi:"捕捉 畋猎 会亲友 解除 入殓 除服 成服 移柩 馀事勿取"},{jx:11,gz:57,ji:"伐木 纳畜 破土 安葬 开生坟 嫁娶 开市 动土 交易 作梁",yi:"祭祀 开光 理发 整手足甲 安床 作灶 扫舍 教牛马"},{jx:11,gz:58,ji:"开市 安床",yi:"祭祀 作灶 入殓 除服 馀事勿取"},{jx:11,gz:59,ji:"嫁娶 词讼 行丧 安葬 牧养 伐木 作梁 开市 纳畜 造畜稠",yi:"祭祀 沐浴 理发 作灶 结网 栽种"},{jx:11,gz:6,ji:"移徙 入宅 作灶",yi:"祭祀 裁衣 冠笄 嫁娶 纳婿 会亲友 除服 成服 移柩 捕捉 进人口 入殓"},{jx:11,gz:7,ji:"嫁娶 开市 开池 开厕 破土",yi:"祭祀 冠笄 移徙 会亲友 纳财 理发 捕捉"},{jx:11,gz:8,ji:"诸事不宜",yi:"沐浴 扫舍 馀事勿取"},{jx:11,gz:9,ji:"会亲友 安葬 入宅 移徙 安床 开市 行丧 出火 作灶 安门",yi:"祭祀 沐浴 理发 纳财 进人口 栽种 扫舍 捕捉 畋猎 结网"},{jx:2,gz:0,ji:"斋醮 入宅 修造 动土 破土",yi:"交易 进人口 祭祀 沐浴 捕捉 入殓 除服 成服 安葬 谢土 启钻 修坟"},{jx:2,gz:1,ji:"诸事不宜",yi:"祭祀 解除 馀事勿取"},{jx:2,gz:10,ji:"出货财 开仓 动土 破土 安葬 行丧 伐木 开渠 栽种",yi:"祭祀 造车器 出行 修造 上梁 盖屋 安门 安床 造畜稠 教牛马"},{jx:2,gz:11,ji:"嫁娶 动土 安葬 作灶",yi:"祭祀 沐浴 出行 冠笄 进人口 馀事勿取"},{jx:2,gz:12,ji:"入宅 移徙 分居 作灶 出火 安香 动土 嫁娶 掘井 扫舍 造桥",yi:"造畜稠 教牛马"},{jx:2,gz:13,ji:"",yi:"解除 扫舍 祭祀 教牛马 馀事勿取"},{jx:2,gz:14,ji:"祭祀 移徙 入宅 动土 破土",yi:"纳采 会亲友 竖柱 上梁 立券 入殓 移柩 安葬 启钻"},{jx:2,gz:15,ji:"掘井 动土 作灶 栽种",yi:"祭祀 出行 嫁娶 冠笄 安床 入殓 移柩 安葬"},{jx:2,gz:16,ji:"动土 破土 行丧 开光 作梁 安葬 探病",yi:"祭祀 解除 教牛马 出行 馀事勿取"},{jx:2,gz:17,ji:"诸事不宜",yi:"解除 扫舍 馀事勿取"},{jx:2,gz:18,ji:"斋醮 开渠 上梁 动土 破土",yi:"祭祀 交易 纳财"},{jx:2,gz:19,ji:"嫁娶 作灶 安葬 动土 词讼 作梁 伐木 掘井 破土 移徙",yi:"祭祀 出行 交易 割蜜 造畜稠"},{jx:2,gz:2,ji:"入宅 出行 移徙 祭祀 嫁娶 动土 破土 作灶",yi:"开光 解除 伐木 竖柱 上梁 交易 立券 纳畜 入殓 移柩 安葬"},{jx:2,gz:20,ji:"开市 动土 破土 安床 开仓 上梁",yi:"嫁娶 冠笄 祭祀 沐浴 普渡 出行 纳财 扫舍 纳畜 赴任"},{jx:2,gz:21,ji:"诸事不宜",yi:"祭祀 出行 扫舍 馀事勿取"},{jx:2,gz:22,ji:"造庙 造船 动土 破土 安葬",yi:"纳采 订盟 嫁娶 祭祀 祈福 求嗣 置产 求医 治病 开市 交易 立券 会亲友 移徙 竖柱 上梁 盖屋 合脊 安门 放水 捕捉 纳畜"},{jx:2,gz:23,ji:"",yi:"祭祀 沐浴 馀事勿取"},{jx:2,gz:24,ji:"入宅 动土 破土 嫁娶 作灶 造船",yi:"合帐 裁衣 教牛马 馀事勿取"},{jx:2,gz:25,ji:"嫁娶 动土 开池 安葬",yi:"祭祀 解除 造畜稠 教牛马 针灸 馀事勿取"},{jx:2,gz:26,ji:"祭祀 祈福 移徙 嫁娶 入宅",yi:"裁衣 合帐 入殓 除服 成服 会亲友 纳财"},{jx:2,gz:27,ji:"动土 移徙 入宅",yi:"祭祀 祈福 求嗣 斋醮 嫁娶 冠笄 出行 开市 交易 会亲友 教牛马 除服 成服 启钻 安葬 移柩"},{jx:2,gz:28,ji:"掘井 动土 破土 安葬 开光",yi:"祭祀 进人口 嫁娶 安床 解除 冠笄 出行 裁衣 扫舍"},{jx:2,gz:29,ji:"嫁娶 安葬 入宅 出行 动土 词讼",yi:"塞穴 断蚁 结网 畋猎 馀事勿取"},{jx:2,gz:3,ji:"作灶 掘井 动土 栽种",yi:"祈福 开光 塑绘 酬神 订盟 纳采 裁衣 安床 开市 立券 入殓 除服 成服 移柩 启钻 安葬 立碑 赴任 会亲友 出行 交易 竖柱"},{jx:2,gz:30,ji:"上梁 动土 破土",yi:"祭祀 入殓 移柩 启钻 安葬"},{jx:2,gz:31,ji:"移徙 入宅 栽种 动土 破土 作灶 安葬 行丧 伐木 上梁",yi:"嫁娶 祭祀 出行 裁衣 冠笄 交易 雕刻 纳财 造畜稠 造车器 雕刻 教牛马"},{jx:2,gz:32,ji:"作灶 动土 破土",yi:"嫁娶 出行 纳畜 祭祀 入殓 启钻 安葬"},{jx:2,gz:33,ji:"动土 破土 置产 掘井",yi:"祭祀 出行 沐浴 扫舍 安葬 馀事勿取"},{jx:2,gz:34,ji:"行丧 安葬",yi:"作灶 造畜稠"},{jx:2,gz:35,ji:"开市 动土 破土 嫁娶 安葬",yi:"解除 修饰垣墙 冠笄 出行 馀事勿取"},{jx:2,gz:36,ji:"入宅 动土 破土",yi:"教牛马 馀事勿取"},{jx:2,gz:37,ji:"嫁娶 入宅 出行 动土 破土 安葬 行丧",yi:"祭祀 教牛马 造畜稠 祭祀 会亲友 解除 馀事勿取"},{jx:2,gz:38,ji:"嫁娶 出行 动土 开渠 入宅 祭祀 掘井",yi:"安床 解除 裁衣 竖柱 上梁 交易 立券 纳财 纳畜 牧养 入殓 移柩 安葬 启钻"},{jx:2,gz:39,ji:"嫁娶 动土 掘井 起基 定磉 破土",yi:"祭祀 会亲友 出行 立券 交易 冠笄 纳财"},{jx:2,gz:4,ji:"开光 修造 动土 破土",yi:"祭祀 修饰垣墙 馀事勿取"},{jx:2,gz:40,ji:"诸事不宜",yi:"出行 修饰垣墙 造畜稠 教牛马 馀事勿取"},{jx:2,gz:41,ji:"嫁娶 安葬",yi:"祭祀 解除 断蚁 会亲友 馀事勿取"},{jx:2,gz:42,ji:"诸事不宜",yi:"祭祀 解除 馀事勿取"},{jx:2,gz:43,ji:"动土 破土 掘井 安葬",yi:"祭祀 修造 出行 盖屋 竖柱 造车器 教牛马 造畜稠 割蜜"},{jx:2,gz:44,ji:"破土 置产 掘井 动土 安床",yi:"祭祀 祈福 求嗣 开光 出行 解除 上梁 盖屋 移徙 安门 纳财 牧养 纳畜 安葬 启钻 入殓"},{jx:2,gz:45,ji:"嫁娶 入宅 修造 动土 会亲友 破土",yi:"祭祀 出行"},{jx:2,gz:46,ji:"动土 伐木 作梁 行丧 安葬 开生坟",yi:"祭祀 出行 裁衣 冠笄 会亲友 造畜稠 嫁娶 竖柱 上梁 移徙 纳财 纳畜"},{jx:2,gz:47,ji:"开市 动土 破土 行丧 安葬",yi:"祭祀 沐浴 出行 馀事勿取"},{jx:2,gz:48,ji:"馀事勿取",yi:"安葬 启钻 移柩 入殓 除服 成服"},{jx:2,gz:49,ji:"破土 动土 安葬",yi:"祭祀 解除 教牛马 会亲友 馀事勿取"},{jx:2,gz:5,ji:"诸事不宜",yi:"塞穴 结网 馀事勿取"},{jx:2,gz:50,ji:"诸事不宜",yi:"裁衣 伐木 作梁 纳财 交易 立券"},{jx:2,gz:51,ji:"栽种 动土 安葬 掘井 修坟 探病",yi:"祭祀 会亲友 立券 交易 裁衣 合帐 嫁娶 冠笄 进人口"},{jx:2,gz:52,ji:"开光 伐木 安葬 破土",yi:"祭祀 出行 教牛马 扫舍 馀事勿取"},{jx:2,gz:53,ji:"破土 安葬",yi:"塞穴 断蚁 结网 馀事勿取"},{jx:2,gz:54,ji:"斋醮 移徙 入宅 动土",yi:"祭祀 教牛马 断蚁 馀事勿取"},{jx:2,gz:55,ji:"动土 破土 安葬 治病",yi:"开市 纳财 祭祀 塑绘 安机械 冠笄 会亲友 裁衣 开仓 经络 纳畜 造畜稠 教牛马 牧养"},{jx:2,gz:56,ji:"安床 动土 安葬 开生坟 合寿木",yi:"祭祀 裁衣 安门 纳财 扫舍 出行 进人口 作灶 纳畜 造畜稠"},{jx:2,gz:57,ji:"动土 作灶 行丧 安葬 修坟",yi:"祭祀 祈福 求嗣 出行 沐浴 交易 扫舍 教牛马"},{jx:2,gz:58,ji:"伐木 行丧 破土 嫁娶 安葬 开渠",yi:"祭祀 祈福 求嗣 开光 出行 解除 上梁 入宅 移徙 安床 安门 纳财 纳畜 造畜稠"},{jx:2,gz:59,ji:"诸事不宜",yi:"祭祀 沐浴 馀事勿取"},{jx:2,gz:6,ji:"斋醮 盖屋 动土 破土",yi:"出行 教牛马 割蜜 馀事勿取"},{jx:2,gz:7,ji:"动土 安葬",yi:"嫁娶 纳采 出行 祭祀 祈福 解除 移徙 入宅"},{jx:2,gz:8,ji:"栽种 掘井 动土 安床 破土 置产",yi:"嫁娶 纳采 订盟 祭祀 祈福 求嗣 出行 解除 竖柱 入宅 移徙 纳财 上梁 纳畜 入殓 安葬 启钻"},{jx:2,gz:9,ji:"动土 冠笄 移徙 入宅 开市 竖柱 上梁",yi:"祭祀 出行 成服 除服 沐浴 入殓"},{jx:3,gz:0,ji:"入宅 作灶 安床 开仓",yi:"祭祀 会亲友 嫁娶 沐浴 修造 动土 祈福 开光 塑绘 出行 订盟 纳采 裁衣 入殓 除服 成服 移柩 启钻 赴任 竖柱 上梁 纳财 扫舍 栽种 纳畜 伐木"},{jx:3,gz:1,ji:"斋醮 伐木 作梁 安葬 行丧",yi:"嫁娶 纳采 订盟 造车器 祭祀 祈福 造庙 安香 出火 出行 归宁 入学 入宅 交易 立券 求医 治病 修造 动土 竖柱 上梁 盖屋 起基 安门"},{jx:3,gz:10,ji:"诸事不宜",yi:"祭祀 沐浴 赴任 出行 馀事勿取"},{jx:3,gz:11,ji:"造庙 嫁娶 掘井 栽种 造桥 作灶 动土",yi:"祭祀 开光 出行 解除 伐木 作梁 出火 拆卸 入宅 移徙 安床 修造 造畜稠 扫舍"},{jx:3,gz:12,ji:"开市",yi:"祭祀 祈福 斋醮 塑绘 开光 订盟 纳采 裁衣 冠笄 嫁娶 拆卸 入宅 安香 入殓 移柩 理发 安葬 修坟 谢土 赴任 移徙 沐浴 治病 破土 启钻 整手足甲 入学 作梁"},{jx:3,gz:13,ji:"破土 安葬 行丧 开生坟",yi:"订盟 纳采 造车器 祭祀 祈福 出行 安香 修造 动土 上梁 开市 交易 立券 移徙 入宅 会亲友 安机械 栽种 纳畜 盖屋 起基 安床 造畜稠"},{jx:3,gz:14,ji:"嫁娶 祭祀 出行 置产",yi:"开市 交易 立券 挂匾 开光 解除 伐木 作梁 出火 入宅 移徙 安床 拆卸 动土 上梁 栽种 纳畜 安葬"},{jx:3,gz:15,ji:"开光 嫁娶 作灶 掘井 纳畜",yi:"祭祀 祈福 斋醮 出行 开市 立券 动土 移徙 入宅 破土 安葬"},{jx:3,gz:16,ji:"安门 作灶 安葬 嫁娶",yi:"塞穴 诸事不宜"},{jx:3,gz:17,ji:"开市 嫁娶 移徙 入宅 掘井 安葬",yi:"沐浴 斋醮 解除 求医 治病 会亲友 造畜稠 栽种 理发 扫舍"},{jx:3,gz:18,ji:"嫁娶 安床 探病 作灶",yi:"开市 交易 立券 挂匾 开光 出行 拆卸 进人口 入宅 移柩 动土 安门 上梁 栽种 破土 修坟 安葬"},{jx:3,gz:19,ji:"行丧 伐木 作梁 作灶",yi:"嫁娶 订盟 纳采 冠笄 会亲友 安机械 造车器 祭祀 出行 纳财 入宅 安香 出火 入学 塑绘 开光 拆卸 起基 修造 动土 牧养 栽种 安门 开厕"},{jx:3,gz:2,ji:"作灶 祭祀 上梁 出行",yi:"沐浴 解除 订盟 纳采 裁衣 冠笄 拆卸 修造 动土 移徙 入宅 除服 成服 移柩 破土 启钻 安葬 扫舍 修坟 伐木 纳财 交易 立券"},{jx:3,gz:20,ji:"",yi:"嫁娶 祭祀 祈福 求嗣 开光 出火 拆卸 修造 动土 进人口 开市 交易 立券 挂匾 入宅 移徙 栽种 纳畜 入殓 启钻 除服 成服"},{jx:3,gz:21,ji:"嫁娶 出行 入宅 开市 安门",yi:"祭祀 沐浴 理发 整手足甲 冠笄 解除 入殓 移柩 破土 启钻 安葬"},{jx:3,gz:22,ji:"伐木 行丧 作灶 作梁 安葬",yi:"嫁娶 祭祀 塑绘 开光 出行 解除 理发 整手足甲 动土 安床 开池 放水 扫舍"},{jx:3,gz:23,ji:"嫁娶 动土 破土 修坟",yi:"出行 造车器 造畜稠 解除 冠笄 裁衣 作梁 雕刻 会亲友 移徙 入宅 安机械 造畜稠 开市 扫舍"},{jx:3,gz:24,ji:"置产 安床",yi:"嫁娶 开光 出行 解除 出火 拆卸 修造 进人口 动土 入宅 移徙 栽种 纳畜 掘井 安葬 除服 成服"},{jx:3,gz:25,ji:"斋醮 作梁 掘井 行丧 安葬",yi:"纳采 订盟 嫁娶 祭祀 祈福 安香 出火 出行 会亲友 经络 求医 治病 解除 拆卸 起基 修造 动土 定磉 扫舍 栽种 牧养 造畜稠"},{jx:3,gz:26,ji:"入宅 安门 祭祀 谢土",yi:"沐浴 塑绘 开光 纳采 订盟 开市 交易 立券 纳财 起基 动土 定磉 放水 安葬 破土 启钻 修坟 立碑 移柩"},{jx:3,gz:27,ji:"掘井",yi:"祭祀 斋醮 裁衣 合帐 冠笄 订盟 纳采 嫁娶 入宅 安香 谢土 入殓 移柩 破土 立碑 安香 会亲友 出行 祈福 求嗣 立碑 上梁 放水"},{jx:3,gz:28,ji:"嫁娶 作灶 掘井 安葬",yi:"塞穴 整手足甲 解除 捕捉 畋猎 结网 馀事勿取 诸事不宜"},{jx:3,gz:29,ji:"嫁娶 开市 安葬",yi:"纳采 开光 求医 治病 动土 上梁 移徙 入宅"},{jx:3,gz:3,ji:"移徙 入宅 出火 作灶 掘井",yi:"祭祀 祈福 求嗣 开光 嫁娶 出行 解除 伐木 拆卸 进人口 安床 动土 起基 上梁 栽种 纳畜 破土 谢土 启钻 安葬"},{jx:3,gz:30,ji:"作灶 安床 开仓 盖屋",yi:"纳采 订盟 嫁娶 祭祀 祈福 求嗣 开光 解除 出行 出火 入宅 移徙 栽种 纳畜 牧养 动土 破土 入殓 安葬"},{jx:3,gz:31,ji:"移徙 入宅 安葬",yi:"订盟 纳采 出行 祈福 斋醮 安床 会亲友"},{jx:3,gz:32,ji:"开市 入宅 出行 安床",yi:"修造 动土 安机械 祭祀 沐浴 解除 拆卸 治病 作灶 盖屋 起基 开池 扫舍 造畜稠 开生坟 合寿木 安葬 破土 启钻 移柩 入殓 立碑"},{jx:3,gz:33,ji:"嫁娶 开市",yi:"订盟 纳采 祭祀 祈福 修造 动土 上梁 破土 安葬"},{jx:3,gz:34,ji:"造庙 行丧 安葬 伐木 作灶 造船",yi:"嫁娶 纳采 祭祀 解除 出行 修造 动土 开市 上梁 安床 整手足甲 扫舍 求医 治病 起基 定磉 盖屋 合脊"},{jx:3,gz:35,ji:"嫁娶 入宅",yi:"沐浴 理发 入学 习艺 进人口"},{jx:3,gz:36,ji:"作灶 经络 安床",yi:"纳采 订盟 嫁娶 祭祀 祈福 求嗣 开光 出行 解除 进人口 开市 立券 挂匾 入宅 移徙 安门 栽种 动土 求医 治病 会亲友 起基 修造 盖屋 安葬"},{jx:3,gz:37,ji:"开市 安葬",yi:"嫁娶 出行 求医 治病 祭祀 祈福 上梁 纳畜"},{jx:3,gz:38,ji:"作灶 安葬 祭祀 开市 纳采 订盟 纳畜 谢土 出行 探病",yi:"嫁娶 开光 解除 出火 拆卸 修造 进人口 入宅 移徙 安床 栽种 入殓 修坟 动土 除服 成服"},{jx:3,gz:39,ji:"掘井 词讼",yi:"嫁娶 安床 开光 出行 祭祀 动土 出火 解除 会亲友 开市 交易 立券 挂匾 入宅 移徙 拆卸 破土 启钻 安葬"},{jx:3,gz:4,ji:"栽种 作灶 安葬 嫁娶",yi:"祭祀 扫舍 塞穴"},{jx:3,gz:40,ji:"嫁娶 安葬 行丧 安门",yi:"祭祀 沐浴 解除 扫舍 塞穴 牧养"},{jx:3,gz:41,ji:"嫁娶 纳财 安葬 出行 开市 立券 作灶 栽种",yi:"祭祀 祈福 开光 求嗣 解除 伐木 出火 入宅 移徙 安床 拆卸 修造 动土 造畜稠"},{jx:3,gz:42,ji:"开市 出行 安床 作灶 安葬",yi:"嫁娶 纳采 订盟 祭祀 祈福 治病 造车器 修造 动土 移徙 入宅"},{jx:3,gz:43,ji:"安葬 行丧 伐木 作梁",yi:"嫁娶 祭祀 祈福 出火 开光 求嗣 出行 拆卸 开市 交易 立券 挂匾 入宅 移徙 安床 栽种 动土"},{jx:3,gz:44,ji:"嫁娶 出行 纳采 入宅 作灶",yi:"祭祀 沐浴 塑绘 开光 入学 解除 扫舍 治病 开池 牧养"},{jx:3,gz:45,ji:"嫁娶 会亲友 进人口 出行 入宅 移徙 赴任 作灶",yi:"祭祀 解除 沐浴 理发 整手足甲 入殓 移柩 破土 安葬 扫舍"},{jx:3,gz:46,ji:"针灸 伐木 作梁 造庙 行丧 安葬",yi:"嫁娶 订盟 纳采 祭祀 祈福 出行 修造 动土 移徙 入宅"},{jx:3,gz:47,ji:"安葬 修坟 作灶 破土 造庙 动土 嫁娶 纳采",yi:"祭祀 祈福 求嗣 开光 出行 解除 移徙 伐木 安床 纳畜 出火 拆卸"},{jx:3,gz:48,ji:"开市 纳采 造庙 安床 开渠 安葬",yi:"嫁娶 造车器 出行 会亲友 移徙 入宅 修造 动土 雕刻 开光 安香 出火 理发 会亲友 盖屋 合脊 起基 归岫 安门 拆卸 扫舍 栽种 造畜稠"},{jx:3,gz:49,ji:"作灶 塑绘 行丧 词讼 伐木 安葬",yi:"嫁娶 祭祀 祈福 求嗣 出行 出火 拆卸 开市 交易 立券 挂匾 入宅 移徙 安床 栽种"},{jx:3,gz:5,ji:"纳采 出行 修坟 安葬 开市 立券 作灶",yi:"嫁娶 祭祀 祈福 求嗣 斋醮 开光 出火 移徙 入宅 竖柱 上梁 会亲友 盖屋 起基 治病 治病 安门 造车器 掘井 开池"},{jx:3,gz:50,ji:"探病 祭祀 出行 上梁 盖屋 谢土 安葬",yi:"纳采 订盟 移徙 纳财 开市 交易 立券 入宅 会亲友 解除 求医 治病 入学 安床 安门 安香 出火 拆卸 扫舍 入宅 挂匾 开生坟 合寿木 破土 修坟 启钻 入殓"},{jx:3,gz:51,ji:"",yi:"嫁娶 祭祀 祈福 求嗣 开光 出行 出火 拆卸 动土 上梁 进人口 入宅 移徙 安床 开市 交易 立券 挂匾 入殓 破土 安葬 启钻 除服 成服"},{jx:3,gz:52,ji:"诸事不宜",yi:"扫舍 塞穴 馀事勿取"},{jx:3,gz:53,ji:"修坟 造桥 作灶 出行 安葬 盖屋 入宅",yi:"祭祀 祈福 求嗣 开光 纳采 订盟 解除 栽种 纳畜 牧养 扫舍 进人口"},{jx:3,gz:54,ji:"",yi:"开光 出行 纳采 嫁娶 伐木 架马 出火 拆卸 移徙 入宅 造庙 造桥 造船 造畜稠 开市 入殓 除服 成服 移柩 安葬"},{jx:3,gz:55,ji:"行丧 安葬 破土 作灶 伐木 斋醮",yi:"纳采 订盟 嫁娶 祭祀 祈福 开市 纳财 立券 移徙 出行 修造 动土 起基 定磉 竖柱 拆卸 扫舍 放水 安香 安床 造船 开池 掘井 造畜稠 栽种"},{jx:3,gz:56,ji:"开市 安床 出行 经络",yi:"移徙 入宅 治病 会亲友 祭祀 祈福 斋醮 安香 移徙 嫁娶 盖屋 起基"},{jx:3,gz:57,ji:"嫁娶 出行 进人口 作灶 入宅 移徙 栽种 赴任",yi:"祭祀 解除 拆卸 修造 动土 起基 上梁 安床 安门 开渠 开池 入殓 破土 启钻"},{jx:3,gz:58,ji:"造庙 安门 行丧 安葬",yi:"出行 解除 纳采 冠笄 雕刻 修造 动土 起基 上梁 合脊 安床 移徙 入宅 开市 栽种 开厕"},{jx:3,gz:59,ji:"嫁娶 安葬 行丧 词讼 造桥 作灶 破土 动土",yi:"祭祀 开光 出行 解除 理发 伐木 出火 拆卸 上梁 合脊 安床 造畜稠"},{jx:3,gz:6,ji:"移徙 入宅",yi:"嫁娶 订盟 纳采 出行 祭祀 祈福 斋醮 动土 上梁 破土 安葬"},{jx:3,gz:7,ji:"安葬 开生坟 行丧",yi:"嫁娶 祭祀 祈福 求嗣 开光 出行 解除 出火 拆卸 修造 进人口 入宅 移徙 动土 安床 纳畜 栽种 纳财 交易 立券 挂匾 造畜稠"},{jx:3,gz:8,ji:"开市 入宅",yi:"嫁娶 祭祀 祈福 斋醮 治病 破土 安葬"},{jx:3,gz:9,ji:"出火 嫁娶 开光 进人口 出行 词讼 开市 入宅 移徙 赴任",yi:"解除 祭祀 祈福 求嗣 修造 动土 竖柱 上梁 安床 纳畜 盖屋 合脊 起基 入殓 破土 安葬"},{jx:4,gz:0,ji:"开市 入宅 出行 嫁娶 修坟 祈福 动土 入宅 安门 谢土 上梁",yi:"纳采 订盟 会亲友 沐浴 理发 裁衣 冠笄 安床 除服 成服 启钻 移柩 安葬 会亲友 开生坟"},{jx:4,gz:1,ji:"嫁娶 入宅 安门 移徙",yi:"理发 会亲友 补垣 塞穴 结网"},{jx:4,gz:10,ji:"开市 入宅 动土 破土 安葬 作灶 上梁 安床 开仓 祈福",yi:"沐浴 理发 会亲友 塑绘 开光 栽种 牧养 嫁娶 经络 补垣 塞穴"},{jx:4,gz:11,ji:"",yi:"诸事不宜"},{jx:4,gz:12,ji:"入宅 上梁 斋醮 出火 谢土",yi:"纳采 订盟 开市 交易 立券 会亲友 纳畜 牧养 问名 移徙 解除 开厕 入学 起基 安床 开仓 出货财 安葬 启钻 入殓 除服 成服"},{jx:4,gz:13,ji:"",yi:"诸事不宜"},{jx:4,gz:14,ji:"祈福 出火 嫁娶 入宅 开市 破土",yi:"订盟 纳采 会亲友 安机械 开光 修造 动土 竖柱 上梁 盖屋 起基 造桥 栽种 纳畜 造畜稠 移柩 入殓 启钻 修坟 立碑 安葬"},{jx:4,gz:15,ji:"修造 上梁 入宅 祈福 探病 掘井 动土 安门 安葬 作灶",yi:"开市 交易 立券 纳财 开池 补垣 嫁娶 纳采 纳畜 取渔 安床"},{jx:4,gz:16,ji:"开市 动土 安葬 破土",yi:"会亲友 求嗣 理发 冠笄 结网 捕捉 开光 理发"},{jx:4,gz:17,ji:"出行 斋醮 安葬 嫁娶",yi:"开光 塑绘 求嗣 纳采 裁衣 合帐 冠笄 安机械 作梁 开柱眼 安门 安床 造仓 祭祀 会亲友 祈福 经络 纳财 开市 立券 交易 入学 求嗣 理发 架马"},{jx:4,gz:18,ji:"祈福 修造 动土 破土 谢土",yi:"求嗣 出行 解除 订盟 纳采 嫁娶 会亲友 进人口 安床 开市 交易 纳畜 牧养 入殓 除服 成服 移柩 安葬 启钻"},{jx:4,gz:19,ji:"塞穴 上梁 动土 伐木 安葬 词讼",yi:"进人口 会亲友"},{jx:4,gz:2,ji:"嫁娶 动土 破土 祈福 出火 入宅",yi:"纳采 订盟 开市 交易 立券 出行 会亲友 安机械 竖柱 上梁 平治道涂 伐木 拆卸 盖屋 起基 安床 安门 解除 安葬 启钻 除服 成服 修坟 立碑 移柩 入殓"},{jx:4,gz:20,ji:"安床 出货财 作灶 动土 破土",yi:"开光 求嗣 出行 冠笄 嫁娶 伐木 架马 开柱眼 修造 移徙 入宅 开市 交易 立券 出行 安香 出火 挂匾 起基 修造 开生坟 合寿木 入殓 除服 成服 移柩 安葬"},{jx:4,gz:21,ji:"作灶 动土 上梁 栽种 入宅 移徙 修造 祈福",yi:"嫁娶 开光 解除 安床 牧养 理发 开市 入殓 启钻 移柩 安葬 扫舍"},{jx:4,gz:22,ji:"祈福 开市 动土 行丧 安葬",yi:"塑绘 冠笄 嫁娶 会亲友 进人口 经络 裁衣 栽种 纳畜 牧养 补垣 塞穴 捕捉"},{jx:4,gz:23,ji:"作灶 行丧 理发 乘船 嫁娶 安葬",yi:"开市 交易 立券 挂匾 开光 出行 入宅 移徙 安床 出火 上梁"},{jx:4,gz:24,ji:"移徙 入宅 出行 祈福 嫁娶",yi:"沐浴 理发 冠笄 安床 开市 立券 会亲友 交易 纳财 结网 教牛马"},{jx:4,gz:25,ji:"嫁娶 冠笄 出行 祈福 安葬 伐木 入宅 移徙 出火 栽种 动土 上梁",yi:"开光 裁衣 安门 会亲友 安床 结网 理发"},{jx:4,gz:26,ji:"嫁娶 移徙 入宅",yi:"纳财 开市 交易 立券 会亲友 进人口 经络 祭祀 祈福 安香 出火 求医 治病 修造 动土 拆卸 扫舍 安床 栽种 牧养 开生坟 合寿木 入殓 安葬 启钻"},{jx:4,gz:27,ji:"掘井 祈福 谢土 动土 入宅 上梁 修造 作灶",yi:"嫁娶 出行 理发 安床 启钻 安葬 修坟 开市 交易 立券 纳财 开池 牧养"},{jx:4,gz:28,ji:"斋醮 作灶 安葬",yi:"安床 合帐 入宅 问名 纳采 求嗣 祭祀 开仓"},{jx:4,gz:29,ji:"动土 破土 安葬 行丧 赴任 出行 嫁娶 入宅 移徙 谢土 词讼",yi:"纳财 开市 立券 交易 开光 安床 上梁 盖屋 修造 起基"},{jx:4,gz:3,ji:"",yi:"出行 嫁娶 订盟 纳采 入殓 安床 启钻 安葬 祭祀 裁衣 会亲友 进人口"},{jx:4,gz:30,ji:"嫁娶 动土 破土",yi:"祭祀 会亲友 开市 安床 启钻 安葬"},{jx:4,gz:31,ji:"嫁娶 栽种 修造 动土 出行 伐木 作梁 安葬 谢土",yi:"开光 纳采 裁衣 冠笄 安床 作灶 进人口 造仓 塞穴"},{jx:4,gz:32,ji:"动土 破土",yi:"嫁娶 纳采 出行 求医 治病 开市 移徙 入宅 启钻 安葬"},{jx:4,gz:33,ji:"上梁 入宅 修造 动土 破土 祭祀 祈福 斋醮",yi:"嫁娶 纳采 订盟 造车器 开光 出行 拆卸 起基 安床 除服 成服 开市 交易 立券 栽种 牧养 入殓 移柩 启钻"},{jx:4,gz:34,ji:"开市 安葬",yi:"订盟 纳采 出行 会亲友 修造 上梁 移徙 入宅"},{jx:4,gz:35,ji:"斋醮 嫁娶 行丧 动土 作灶 安葬 破土",yi:"纳采 订盟 开市 交易 立券 挂匾 纳财 栽种 进人口 入宅 移徙 安床 开光 出火 拆卸 安门 修造"},{jx:4,gz:36,ji:"开市 动土 破土",yi:"开光 针灸 会亲友 启钻 安葬"},{jx:4,gz:37,ji:"祈福 谢土 安葬 上梁 作灶 开市 嫁娶 出行 入宅 动土",yi:"祭祀 塑绘 理发 会亲友 牧养 开池 造畜稠 畋猎 结网"},{jx:4,gz:38,ji:"嫁娶 祈福",yi:"开市 立券 开光 解除 安机械 上梁 启钻 安葬"},{jx:4,gz:39,ji:"挂匾 入宅 上梁 祈福 词讼 作梁 作灶 开池 安门 动土 破土 掘井",yi:"出行 起基 安床 纳财 交易 立券 嫁娶 栽种 入殓 移柩 安葬"},{jx:4,gz:4,ji:"嫁娶 开市 动土 作灶 安葬",yi:"会亲友 冠笄 安床 会亲友 安机械 祭祀 祈福 求嗣 经络"},{jx:4,gz:40,ji:"入宅 移徙 出火 分居 安香 作灶 开市 交易 立券 安葬 动土 伐木",yi:"嫁娶 开光 求嗣 会亲友 安床 牧养 塑绘 针灸"},{jx:4,gz:41,ji:"移徙 入宅 栽种",yi:"纳财 开市 交易 立券 开光 针灸 会亲友 理发 安床 造仓 结网"},{jx:4,gz:42,ji:"谢土 祈福 上梁 作灶 斋醮 修造 入宅 安门",yi:"纳采 嫁娶 开光 出行 理发 会亲友 开市 安床 栽种 牧养 入殓 移柩 启钻"},{jx:4,gz:43,ji:"开市 作灶 动土 行丧 安葬",yi:"嫁娶 纳采 订盟 会亲友 安机械 结网 冠笄 祭祀 求嗣 进人口 经络"},{jx:4,gz:44,ji:"置产 安床",yi:"开光 求嗣 出行 解除 伐木 出火 拆卸 修造 上梁 起基 入宅 移徙 开市 交易 立券 栽种 牧养 入殓 安葬 除服 成服"},{jx:4,gz:45,ji:"斋醮 入宅 安门 安葬 破土 行丧",yi:"纳财 开市 交易 立券 出行 祭祀 祈福 求嗣 开光 解除 扫舍 起基 竖柱 安床 移徙 开仓 出货财 补垣 塞穴 栽种 纳畜 牧养"},{jx:4,gz:46,ji:"嫁娶 纳财 祈福 安葬 修造 开市 交易 立券 动土 上梁",yi:"塑绘 开光 进人口 纳畜 补垣 塞穴 栽种 牧养"},{jx:4,gz:47,ji:"嫁娶 安葬 动土 造桥",yi:"出行 开市 交易 立券 安机械 出火 上梁 移徙"},{jx:4,gz:48,ji:"嫁娶 作灶 出火 出行 入宅 移徙 安床 祈福 上梁",yi:"开市 交易 立券 纳财 会亲友 开光 理发 入殓 移柩 安葬 启钻"},{jx:4,gz:49,ji:"嫁娶 开市 祈福 斋醮 安葬",yi:"塑绘 会亲友 安机械 塞穴 结网 裁衣 经络"},{jx:4,gz:5,ji:"出行 嫁娶 入宅 安葬",yi:"开光 塑绘 裁衣 冠笄 伐木 拆卸 竖柱 上梁 开仓 会亲友 安机械 造仓 盖屋 交易 解除 开市 立券 纳财"},{jx:4,gz:50,ji:"入宅 移徙 作灶 祈福 祭祀 嫁娶 谢土 掘井 盖屋 探病",yi:"理发 开光 解除 拆卸 修造 安葬 开市 交易 立券 挂匾 安床 栽种"},{jx:4,gz:51,ji:"入宅 开光 动土",yi:"嫁娶 订盟 纳采 祭祀 祈福 求嗣 会亲友 解除 出行 入学 纳财 开市 交易 立券 习艺 经络 安床 开仓 出货财 纳畜 安葬 启钻 修坟 入殓"},{jx:4,gz:52,ji:"入宅 作灶 治病 安葬 移徙",yi:"嫁娶 冠笄 纳采 出行 会亲友 上梁 安机械 安床 牧养 畋猎 祭祀 祈福 开光 修造 安门 盖屋 起基"},{jx:4,gz:53,ji:"作灶 出行 入宅 安葬",yi:"塑绘 开光 订盟 纳采 裁衣 合帐 冠笄 安机械 会亲友 纳财 开市 立券 交易 安床 竖柱 上梁 结网 栽种 解除 经络"},{jx:4,gz:54,ji:"祈福 出火 置产 动土 破土 安葬 修造 上梁 置产 入宅",yi:"开光 出行 交易 塞穴 嫁娶 理发 开市 安床"},{jx:4,gz:55,ji:"诸事不宜",yi:"进人口 牧养 置产 塞穴 结网 馀事勿取"},{jx:4,gz:56,ji:"纳采 订盟 安床 谢土 破土 动土",yi:"嫁娶 开光 祭祀 祈福 出行 解除 移徙 入宅 开市 纳财 起基 修造 竖柱 上梁 盖屋 作灶 出火 安香 补垣 塞穴 拆卸 放水 扫舍 造仓 造船 栽种 安葬"},{jx:4,gz:57,ji:"",yi:"塑绘 出行 冠笄 嫁娶 进人口 裁衣 纳婿 造畜稠 交易 立券 牧养 开生坟 入殓 除服 成服 移柩 安葬 启钻"},{jx:4,gz:58,ji:"伐木 谢土 行丧 祭祀 作灶 动土 破土 安葬 祈福",yi:"纳采 订盟 开光 出行 解除 安香 出火 拆卸 入宅 移徙 修造 上梁 安床 栽种 纳畜 会亲友 安机械 经络"},{jx:4,gz:59,ji:"",yi:"开光 塑绘 出行 解除 冠笄 裁衣 挂匾 作灶 开市 开池 开厕 补垣 塞穴"},{jx:4,gz:6,ji:"祈福 入宅 盖屋 动土 破土 探病",yi:"祭祀 塑绘 开光 纳采 嫁娶 开市 出行 会亲友 安床 结网 除服 成服 启钻 安葬 移柩"},{jx:4,gz:7,ji:"开市 安葬",yi:"订盟 纳采 会亲友 安床 作灶 造畜稠"},{jx:4,gz:8,ji:"嫁娶 安床 作灶 动土 破土 造船",yi:"安机械 祭祀 祈福 求嗣 沐浴 解除 纳采 开市 修造 竖柱 上梁 开柱眼 安碓磑 归岫 补垣 塞穴 拆卸 放水 出火 扫舍 开生坟 合寿木 安葬 谢土 启钻 除服 成服"},{jx:4,gz:9,ji:"祈福 动土 破土",yi:"嫁娶 出行 开市 安床 入殓 启钻 安葬"},{jx:5,gz:0,ji:"嫁娶 入宅 上梁 安门",yi:"祭祀 祈福 修饰垣墙 平治道涂 入殓 移柩"},{jx:5,gz:1,ji:"嫁娶 开市 交易 入宅 入学 安葬",yi:"解除 祭祀 修饰垣墙 平治道涂 造畜稠 馀事勿取"},{jx:5,gz:10,ji:"开仓 出货财 置产 安葬 动土 破土 掘井 栽种",yi:"嫁娶 祭祀 裁衣 结网 冠笄 沐浴"},{jx:5,gz:11,ji:"嫁娶 栽种 祈福 造桥 安葬 安门 伐木 作梁",yi:"祭祀 理发 作灶 沐浴 修饰垣墙 平治道涂"},{jx:5,gz:12,ji:"嫁娶 移徙 入宅 开市",yi:"沐浴 入殓 移柩 除服 成服 破土 平治道涂"},{jx:5,gz:13,ji:"嫁娶 开市",yi:"祭祀 平治道涂 馀事勿取"},{jx:5,gz:14,ji:"栽种 破土 置产 祭祀 嫁娶 动土 作灶 祈福",yi:"开市 交易 立券 挂匾 纳财 开光 出行 入宅 移徙 安床 纳畜 入殓 移柩 安葬"},{jx:5,gz:15,ji:"移徙 入宅 嫁娶 掘井 安葬",yi:"祭祀 平治道涂 修坟 除服 成服 馀事勿取"},{jx:5,gz:16,ji:"",yi:"祭祀 解除 修饰垣墙 平治道涂 馀事勿取"},{jx:5,gz:17,ji:"嫁娶 祈福 掘井 安葬",yi:"祭祀 平治道涂 馀事勿取"},{jx:5,gz:18,ji:"栽种 盖屋 作灶 入宅",yi:"祭祀 嫁娶 纳婿 安葬"},{jx:5,gz:19,ji:"嫁娶 安葬 动土 安床 治病",yi:"祭祀 作灶 平治道涂 馀事勿取"},{jx:5,gz:2,ji:"作灶 治病 伐木 作梁",yi:"祭祀 祈福 订盟 纳采 裁衣 拆卸 修造 动土 起基 安床 移徙 入宅 安香 除服 成服 入殓 移柩 安葬 谢土 赴任 会亲友 进人口 出行 竖柱 上梁 经络 开市 交易 立券 纳财 开仓"},{jx:5,gz:20,ji:"嫁娶 移徙 伐木 作梁 安床 祭祀 祈福 盖屋",yi:"沐浴 平治道涂 扫舍 入殓 破土 安葬 除服 成服"},{jx:5,gz:21,ji:"斋醮 出行 治病 合寿木",yi:"祭祀 沐浴 理发 嫁娶 作灶 整手足甲 扫舍 修饰垣墙 平治道涂"},{jx:5,gz:22,ji:"诸事不宜",yi:"祭祀 解除 馀事勿取"},{jx:5,gz:23,ji:"嫁娶 安门 动土 安葬",yi:"出行 沐浴 订盟 纳采 裁衣 竖柱 上梁 移徙 纳畜 牧养"},{jx:5,gz:24,ji:"诸事不宜",yi:"祭祀 沐浴 修饰垣墙 平治道涂 馀事勿取"},{jx:5,gz:25,ji:"嫁娶 开市 安床 掘井",yi:"祭祀 造畜稠 修饰垣墙 平治道涂 馀事勿取"},{jx:5,gz:26,ji:"祈福 祭祀 伐木 掘井 作灶 谢土",yi:"嫁娶 开光 出行 出火 拆卸 修造 动土 入宅 移徙 安床 上梁 开市 交易 立券 栽种"},{jx:5,gz:27,ji:"入宅 修造 动土 破土 安门 上梁",yi:"祭祀 入殓 移柩 馀事勿取"},{jx:5,gz:28,ji:"移徙 入宅 掘井 造庙 栽种 针灸 治病 开池",yi:"解除 平治道涂 馀事勿取"},{jx:5,gz:29,ji:"祭祀 祈福 安葬 安门 馀事勿取",yi:"作灶 平治道涂"},{jx:5,gz:3,ji:"嫁娶 入宅 纳采 订盟 掘井",yi:"祭祀 平治道涂 除服 成服 安葬 馀事勿取"},{jx:5,gz:30,ji:"开仓 出货财 盖屋 作灶 开市 交易 立券 栽种",yi:"祭祀 祈福 嫁娶 冠笄 修饰垣墙 置产 平治道涂"},{jx:5,gz:31,ji:"嫁娶 安葬",yi:"祭祀 作灶 掘井 平治道涂"},{jx:5,gz:32,ji:"伐木 安葬 安床 祭祀 祈福",yi:"纳采 嫁娶 裁衣 理发 出行 修造 动土 进人口 开市 交易 立券 挂匾 移徙 上梁 栽种 纳畜"},{jx:5,gz:33,ji:"行丧 安葬",yi:"嫁娶 祭祀 沐浴 扫舍 修饰垣墙"},{jx:5,gz:34,ji:"动土 破土 治病 开渠",yi:"祭祀 嫁娶 畋猎 结网"},{jx:5,gz:35,ji:"嫁娶 祈福",yi:"沐浴 修饰垣墙 平治道涂 馀事勿取"},{jx:5,gz:36,ji:"嫁娶 入宅 安床 出行",yi:"祭祀 沐浴 修饰垣墙 平治道涂 馀事勿取"},{jx:5,gz:37,ji:"",yi:"祭祀 结网 造畜稠 馀事勿取"},{jx:5,gz:38,ji:"造庙 谢土 作灶 作梁 伐木 安葬 行丧 修坟 探病",yi:"出行 纳财 开市 交易 立券 动土 移徙 入宅 裁衣 会亲友 拆卸 进人口 安香 经络 出货财 修饰垣墙 平治道涂"},{jx:5,gz:39,ji:"诸事不宜",yi:"平治道涂 馀事勿取"},{jx:5,gz:4,ji:"嫁娶 移徙 入宅 开光",yi:"修饰垣墙 平治道涂 入殓 移柩 馀事勿取"},{jx:5,gz:40,ji:"开光 嫁娶 开仓 出货财 造船 安葬 探病",yi:"平治道涂 馀事勿取"},{jx:5,gz:41,ji:"栽种 出行 祈福 行丧 纳畜 安葬 安门 伐木 作梁 牧养",yi:"作灶 解除 平治道涂"},{jx:5,gz:42,ji:"开市 盖屋 治病 作灶",yi:"嫁娶 冠笄 会亲友 安机械 纳财 交易 立券 置产"},{jx:5,gz:43,ji:"诸事不宜",yi:"祭祀 平治道涂 解除 修饰垣墙 馀事勿取"},{jx:5,gz:44,ji:"祈福 嫁娶 入宅 安床 作灶",yi:"祭祀 沐浴 移徙 破土 安葬 扫舍 平治道涂"},{jx:5,gz:45,ji:"出行 安门 修造 嫁娶 上梁 入宅",yi:"祭祀 理发 修饰垣墙 平治道涂 沐浴 整手足甲 扫舍"},{jx:5,gz:46,ji:"开市 动土 破土 嫁娶 修造 安葬",yi:"祭祀 修饰垣墙 平治道涂"},{jx:5,gz:47,ji:"诸事不宜",yi:"作灶 沐浴 修饰垣墙 平治道涂 馀事勿取"},{jx:5,gz:48,ji:"斋醮 嫁娶 移徙 出行 上梁 入宅",yi:"祭祀 沐浴 修饰垣墙 平治道涂 馀事勿取"},{jx:5,gz:49,ji:"诸事不宜",yi:"造畜稠 平治道涂 馀事勿取"},{jx:5,gz:5,ji:"祭祀 祈福 安葬 安门",yi:"作灶 解除 平治道涂 馀事勿取"},{jx:5,gz:50,ji:"开仓 盖屋 造桥 祭祀",yi:"纳采 移徙 纳财 开市 交易 立券 纳财 入宅 修造 动土 竖柱 起基 定磉 造庙 安香 出火 修饰垣墙 平治道涂 会亲友 出行 开池 开厕"},{jx:5,gz:51,ji:"诸事不宜",yi:"祭祀 修饰垣墙 馀事勿取"},{jx:5,gz:52,ji:"移徙 入宅 造庙 作灶 治病 安葬",yi:"祭祀 冠笄 嫁娶 会亲友 进人口 裁衣 结网 平治道涂"},{jx:5,gz:53,ji:"诸事不宜",yi:"修饰垣墙 平治道涂 祭祀 馀事勿取"},{jx:5,gz:54,ji:"动土 作灶 入宅 开光 安床",yi:"祭祀 嫁娶 纳婿 除服 成服 入殓 移柩"},{jx:5,gz:55,ji:"嫁娶 安床 治病",yi:"祭祀 作灶 畋猎 结网 修饰垣墙 平治道涂 馀事勿取"},{jx:5,gz:56,ji:"会亲友 进人口 修造 动土 起基 移徙 开市 纳畜 入殓 除服 成服 移柩 破土 安葬 修坟 立碑 会亲友",yi:"开光 出行 嫁娶"},{jx:5,gz:57,ji:"破土 出行 栽种",yi:"嫁娶 祭祀 理发 作灶 修饰垣墙 平治道涂 整手足甲 沐浴 冠笄"},{jx:5,gz:58,ji:"",yi:"祭祀 冠笄 嫁娶 捕捉 结网 畋猎 取渔 馀事勿取"},{jx:5,gz:59,ji:"嫁娶 词讼 治病 置产 作梁 祈福 安葬 栽种 伐木 安门",yi:"修饰垣墙 平治道涂 祭祀 沐浴 作灶"},{jx:5,gz:6,ji:"盖屋 作灶 治病 探病",yi:"冠笄 入殓 除服 成服 移柩 平治道涂 修饰垣墙"},{jx:5,gz:7,ji:"安床 入宅 安碓磑 栽种",yi:"祭祀 作灶 平治道涂 馀事勿取"},{jx:5,gz:8,ji:"诸事不宜",yi:"沐浴 平治道涂 扫舍 入殓 移柩 破土 启钻 安葬 馀事勿取"},{jx:5,gz:9,ji:"开市 入宅 出行 修造 词讼",yi:"祭祀 沐浴 理发 整手足甲 修饰垣墙 平治道涂 馀事勿取"},{jx:6,gz:0,ji:"斋醮 开市 开仓 作灶 造船",yi:"嫁娶 祭祀 祈福 求嗣 出火 出行 开光 解除 拆卸 修造 进人口 安香 交易 立券 入宅 移徙 安床 动土 破土 谢土 安葬 入殓 除服 成服"},{jx:6,gz:1,ji:"入宅 伐木",yi:"祭祀 会亲友 纳采 嫁娶 开光 塑绘 斋醮 安香 开市 立券 除服 成服 入殓 移柩 安葬 赴任 进人口 出行 裁衣 修造 动土 上梁 经络 交易"},{jx:6,gz:10,ji:"开光 作灶 盖屋 架马 开仓",yi:"嫁娶 纳采 祭祀 祈福 出行 立券 移徙 入宅 动土 破土 安葬"},{jx:6,gz:11,ji:"嫁娶 破土 置产 栽种 安葬 修坟 行丧",yi:"入宅 移徙 安床 开光 祈福 求嗣 进人口 开市 交易 立券 出火 拆卸 修造 动土"},{jx:6,gz:12,ji:"开市 立券 置产 作灶 造桥",yi:"嫁娶 纳采 订盟 祭祀 祈福 斋醮 普渡 移徙 入宅 出行 安机械 开光 修造 动土 竖柱 上梁 盖屋 起基 定磉 安门 安葬 破土"},{jx:6,gz:13,ji:"",yi:"嫁娶 祭祀 祈福 求嗣 沐浴 出火 出行 拆卸 修造 动土 进人口 开市 交易 立券 入宅 移徙 安床 栽种 纳畜 入殓 安葬 启钻 除服 成服"},{jx:6,gz:14,ji:"开市 交易 祭祀 入宅 安葬",yi:"捕捉 畋猎 馀事勿取"},{jx:6,gz:15,ji:"",yi:"嫁娶 祭祀 祈福 求嗣 开光 出行 解除 出火 出行 拆卸 进人口 入宅 移徙 安床 栽种 动土 修造 纳畜 入殓 安葬 立碑 除服 成服"},{jx:6,gz:16,ji:"开市 纳采 订盟 作灶 造庙 造船 经络",yi:"嫁娶 冠笄 祭祀 祈福 求嗣 雕刻 开光 安香 出行 入学 修造 动土 竖柱 上梁 盖屋 起基 安门 出火 移徙 入宅 掘井 造畜稠 安葬 破土 除服 成服"},{jx:6,gz:17,ji:"掘井 安葬 栽种 出行 作灶 开市 入宅 安门",yi:"嫁娶 祭祀 祈福 求嗣 动土 会亲友 起基 造仓 纳畜 牧养 开厕 进人口"},{jx:6,gz:18,ji:"置产 盖屋 合脊 开光 探病 安门 作灶",yi:"祈福 求嗣 斋醮 纳采 嫁娶 伐木 修造 动土 移徙 入宅 造庙 安机械 开市 入殓 除服 成服 移柩 安葬 破土 谢土"},{jx:6,gz:19,ji:"伐木 作梁",yi:"祭祀 会亲友 订盟 裁衣 合帐 安机械 拆卸 上梁 安门 入殓 除服 成服 移柩 启钻 安葬 立碑 开光 塑绘 入学 出行 起基 定磉 放水 移徙 入宅 竖柱 立券 经络"},{jx:6,gz:2,ji:"开市 入宅 祭祀 置产 补垣 塞穴",yi:"入殓 破土 启钻 安葬 除服 成服 馀事勿取"},{jx:6,gz:20,ji:"入宅 动土 开仓 出货财",yi:"造车器 祭祀 祈福 求嗣 斋醮 开市 交易 安机械 雕刻 开光 盖屋 合脊 起基 定磉 安门 纳畜 安葬 开生坟 立碑 谢土 斋醮"},{jx:6,gz:21,ji:"",yi:"嫁娶 祭祀 祈福 求嗣 开光 出火 出行 拆卸 动土 解除 进人口 开市 交易 立券 挂匾 入宅 移徙 安床 安门 上梁 安葬 破土 谢土"},{jx:6,gz:22,ji:"开市 伐木 作梁 作灶",yi:"安机械 移徙 入宅 出行 祭祀 祈福 斋醮 纳采 订盟 安香 出火 解除 会亲友 修造 动土 拆卸 起基 定磉 移徙 入宅 盖屋 安床 修造 破土 安葬 入殓 立碑"},{jx:6,gz:23,ji:"嫁娶 栽种 行丧 理发 修坟 行丧 作灶",yi:"祭祀 祈福 求嗣 开光 伐木 出火 拆卸 入宅 安床 修造 动土 上梁 挂匾 纳畜"},{jx:6,gz:24,ji:"开市 立券 纳财 作灶",yi:"纳采 订盟 嫁娶 祭祀 祈福 普渡 开光 安香 出火 移徙 入宅 竖柱 修造 动土 竖柱 上梁 起基 盖屋 安门 造庙 造桥 破土 启钻 安葬"},{jx:6,gz:25,ji:"",yi:"嫁娶 祭祀 祈福 求嗣 开光 出行 出火 拆卸 修造 动土 进人口 入宅 移徙 安床 开市 交易 立券 挂匾 栽种 纳畜 入殓 安葬 除服 成服"},{jx:6,gz:26,ji:"嫁娶 祭祀 入宅 盖屋 移徙",yi:"捕捉 结网 入殓 除服 成服 移柩 破土 安葬 启钻 立碑"},{jx:6,gz:27,ji:"栽种 掘井 置产",yi:"嫁娶 祭祀 祈福 求嗣 开光 出火 出行 拆卸 开市 交易 立券 挂匾 伐木 入宅 移徙 安床 安葬"},{jx:6,gz:28,ji:"掘井 伐木 斋醮 作灶",yi:"塑绘 开光 订盟 纳采 裁衣 冠笄 拆卸 修造 安床 入宅 出火 安葬 谢土 赴任"},{jx:6,gz:29,ji:"开市 行丧 栽种 出行 出货财 安葬 置产 词讼 治病",yi:"嫁娶 祭祀 开光 伐木 出火 拆卸 入宅 移徙 修造 动土 上梁 安床 纳畜"},{jx:6,gz:3,ji:"作灶 治病",yi:"祭祀 祈福 订盟 纳采 裁衣 拆卸 修造 动土 起基 安床 移徙 入宅 安香 入殓 移柩 安葬 谢土 赴任 进人口 会亲友"},{jx:6,gz:30,ji:"盖屋 栽种 安葬 作灶",yi:"塑绘 开光 酬神 斋醮 订盟 纳采 裁衣 合帐 拆卸 动土 上梁 安床 安香 造庙 挂匾 会亲友 进人口 出行 修造 纳财 伐木 放水 出火 纳畜 沐浴 安门"},{jx:6,gz:31,ji:"动土 伐木 安葬 行丧",yi:"嫁娶 祭祀 开光 祈福 求嗣 出行 出火 进人口 入宅 移徙 安床 拆卸 修造 安门 挂匾 纳财 扫舍"},{jx:6,gz:32,ji:"嫁娶 移徙 入宅",yi:"祭祀 斋醮 开市 动土 入殓 破土 安葬"},{jx:6,gz:33,ji:"作灶 嫁娶 移徙 入宅 理发",yi:"开市 交易 立券 挂匾 祭祀 祈福 斋醮 出行 开市 交易 立券 盖屋 起基 修造 动土 定磉 安床 安机械 安葬 破土 启钻 除服 成服 立碑"},{jx:6,gz:34,ji:"作灶",yi:"嫁娶 订盟 纳采 出行 开市 祭祀 祈福 动土 移徙 入宅 破土 安葬"},{jx:6,gz:35,ji:"嫁娶 作灶 出火 置产 嫁娶 入宅 安葬",yi:"纳采 订盟 会亲友 入学 祭祀 祈福 求嗣 开光 出行 解除 理发 动土 起基 开市 交易 立券 纳财 造仓 栽种 纳畜 牧养"},{jx:6,gz:36,ji:"开市 安葬",yi:"嫁娶 祭祀 祈福 斋醮 动土 移徙 入宅"},{jx:6,gz:37,ji:"作灶 出火 进人口 开渠 入宅 移徙 祭祀",yi:"开光 祈福 求嗣 斋醮 修造 动土 纳财 造仓 开厕 栽种 牧养 会亲友"},{jx:6,gz:38,ji:"移徙 入宅",yi:"入殓 除服 成服 移柩 破土 启钻 安葬"},{jx:6,gz:39,ji:"置产 掘井 词讼 栽种",yi:"嫁娶 纳采 订盟 祭祀 斋醮 开光 安香 出火 出行 出火 拆卸 动土 祈福 进人口 纳财 交易 立券 移徙 安床 修造 安葬 除服 成服"},{jx:6,gz:4,ji:"开市 造庙 置产 掘井",yi:"纳采 订盟 祭祀 祈福 开光 安香 出火 出行 会亲友 安机械 修造 动土 竖柱 上梁 盖屋 起基 定磉 安床 安门 拆卸 移徙 造桥 造船 安葬 破土 入殓"},{jx:6,gz:40,ji:"开市 嫁娶",yi:"求嗣 斋醮 塑绘 订盟 纳采 出火 拆卸 修造 动土 造桥 安机械 栽种 纳畜 牧养 入殓 除服 成服 移柩 破土 安葬"},{jx:6,gz:41,ji:"开市 出行 安葬 行丧",yi:"嫁娶 订盟 纳采 会亲友 祭祀 安机械 移徙 入宅 盖屋 安床 起基 定磉 安香 出火 挂匾 拆卸 置产"},{jx:6,gz:42,ji:"诸事不宜",yi:"解除 沐浴"},{jx:6,gz:43,ji:"纳畜 理发 合寿木",yi:"嫁娶 造车器 纳采 订盟 祭祀 祈福 安机械 移徙 入宅 开市 立券 破土 安葬"},{jx:6,gz:44,ji:"进人口 出行 嫁娶 置产 安床 赴任 安葬 作灶",yi:"祭祀 祈福 开光 解除 动土 纳财 交易 纳畜 扫舍"},{jx:6,gz:45,ji:"动土 破土 嫁娶 嫁娶",yi:"祭祀 祈福 斋醮 求嗣 安机械 纳畜 移徙 入宅 安机械 塑绘 开光 起基 竖柱 上梁 作灶 安门 安香 出火 盖屋 启钻 安葬"},{jx:6,gz:46,ji:"",yi:"嫁娶 祭祀 开光 祈福 求嗣 出行 出火 拆卸 动土 修造 进人口 入宅 移徙 安床 挂匾 交易 立券 栽种 纳畜 入殓 破土 启钻 安葬"},{jx:6,gz:47,ji:"嫁娶 安葬 行丧 破土 修坟",yi:"订盟 纳采 祭祀 祈福 开光 安香 出火 立券 安机械 移徙 入宅 竖柱 上梁 会亲友 安床 拆卸 挂匾 牧养 教牛马"},{jx:6,gz:48,ji:"嫁娶 移徙",yi:"祭祀 求嗣 开光 出行 伐木 作梁 出火 解除 拆卸 进人口 修造 动土 起基 安床 栽种 纳畜 入殓 破土 安葬 除服 成服"},{jx:6,gz:49,ji:"纳采 订盟 架马 词讼 开渠",yi:"嫁娶 造车器 安机械 祭祀 祈福 开光 安香 出火 出行 开市 立券 修造 动土 移徙 入宅 破土 安葬"},{jx:6,gz:5,ji:"出行 治病 安葬 开市",yi:"会亲友 纳采 进人口 修造 动土 竖柱 上梁 祭祀 开光 塑绘 祈福 斋醮 嫁娶 安床 移徙 入宅 安香 纳畜"},{jx:6,gz:50,ji:"",yi:"入殓 破土 安葬 启钻 除服 成服 馀事勿取"},{jx:6,gz:51,ji:"嫁娶 安葬 掘井 置产 造船",yi:"订盟 纳采 纳财 开市 立券 祭祀 祈福 移徙 入宅 出行 盖屋 起基 修造 动土 竖柱 上梁 安门 安香 出火 教牛马 会亲友 破土"},{jx:6,gz:52,ji:"嫁娶 开市 作灶 置产 作梁 伐木",yi:"入宅 安床 开光 祭祀 出火 拆卸 动土 挂匾 入殓 破土 安葬 纳畜"},{jx:6,gz:53,ji:"嫁娶 安葬",yi:"祭祀 安碓磑 结网 馀事勿取"},{jx:6,gz:54,ji:"开光 盖屋 动土 作灶 栽种",yi:"造车器 纳采 订盟 祭祀 祈福 求嗣 移徙 出行 开市 出火 入宅 立券 交易 入宅 安门 安床 安葬 谢土"},{jx:6,gz:55,ji:"赴任",yi:"祈福 求嗣 开光 塑绘 斋醮 订盟 纳采 嫁娶 拆卸 安床 入宅 安香 移柩 修坟 安葬 谢土 栽种 解除 冠笄 裁衣 移徙 修造 动土 竖柱 放水 启钻 立碑"},{jx:6,gz:56,ji:"斋醮 开光 嫁娶 入宅 上梁",yi:"沐浴 祭祀 解除 安葬 破土 谢土 移柩 馀事勿取"},{jx:6,gz:57,ji:"安门",yi:"嫁娶 纳采 出行 祭祀 祈福 开市 动土 移徙 入宅 破土 安葬"},{jx:6,gz:58,ji:"掘井 破土",yi:"嫁娶 纳采 订盟 祭祀 祈福 求嗣 开光 出火 出行 拆卸 修造 动土 进人口 入宅 移徙 安床 交易 立券 挂匾 纳财 入殓 安葬 启钻 除服 成服"},{jx:6,gz:59,ji:"诸事不宜",yi:"沐浴 扫舍 馀事勿取"},{jx:6,gz:6,ji:"经络 探病 盖屋 作灶 动土",yi:"嫁娶 祭祀 冠笄 修饰垣墙 置产"},{jx:6,gz:7,ji:"栽种 伐木",yi:"祭祀 嫁娶 祈福 纳采 裁衣 合帐 安床 入宅 安香 入殓 移柩 安葬 谢土 修造 安碓磑 求嗣 会亲友 挂匾 交易 立券 纳财 造仓 放水"},{jx:6,gz:8,ji:"移徙 入宅 嫁娶 出行 安床",yi:"祭祀 祈福 求嗣 斋醮 沐浴 纳畜 入殓 破土 安葬"},{jx:6,gz:9,ji:"",yi:"嫁娶 祭祀 祈福 求嗣 开光 出行 出火 拆卸 动土 上梁 进人口 入宅 移徙 安床 安门 开市 交易 立券 挂匾 栽种 破土 安葬"},{jx:7,gz:0,ji:"嫁娶 移徙 入宅",yi:"纳采 祭祀 祈福 解除 动土 破土 安葬"},{jx:7,gz:1,ji:"嫁娶 入宅 开市 交易",yi:"破土 安葬 移柩 入殓 祭祀 捕捉 除服 成服 馀事勿取"},{jx:7,gz:10,ji:"嫁娶 上梁 修造 拆卸 架马 入宅 伐木 动土 出火 开柱眼",yi:"祭祀 开光 出行 解除 塑绘 裁衣 入殓 移柩 破土 启钻 安葬 除服 成服"},{jx:7,gz:11,ji:"嫁娶 开市 合寿木 安葬",yi:"纳采 订盟 冠笄 祭祀 祈福 斋醮 出行 修造 动土 移徙 入宅 安香 出火 拆卸 盖屋 起基 竖柱 上梁 定磉 安门 开池"},{jx:7,gz:12,ji:"嫁娶 入宅 移徙 作灶 开市 交易 安门 栽种",yi:"祭祀 解除 沐浴 整手足甲 入殓 移柩 破土 启钻 安葬"},{jx:7,gz:13,ji:"开市 交易 入宅 嫁娶",yi:"祭祀 普渡 捕捉 解除 结网 畋猎 入殓 破土 安葬"},{jx:7,gz:14,ji:"嫁娶 出行 安床 作灶 祭祀 入宅 移徙 出火 进人口 置产",yi:"开光 解除 起基 动土 拆卸 上梁 立碑 修坟 安葬 破土 启钻 移柩"},{jx:7,gz:15,ji:"开市 破土 掘井 合寿木",yi:"嫁娶 纳采 订盟 祭祀 祈福 求嗣 斋醮 开光 安香 出火 造庙 移徙 出行 入宅 造庙 起基 竖柱 上梁 安床 纳畜 捕捉 纳婿 安葬"},{jx:7,gz:16,ji:"嫁娶 开市 出火 栽种 破土 入宅 移徙 安香 分居 掘井 作灶",yi:"开光 解除 拆卸 修造 动土 安床 纳畜 安葬 启钻 入殓"},{jx:7,gz:17,ji:"出行 掘井 破土 行丧 安葬",yi:"嫁娶 订盟 纳采 祭祀 祈福 求嗣 斋醮 安香 出火 修造 起基 盖屋 合脊 安门 安碓磑 动土 上梁 移徙 入宅"},{jx:7,gz:18,ji:"掘井 安葬 栽种 出行 作灶 开市 安门",yi:"嫁娶 祭祀 祈福 求嗣 开光 入宅 移徙 安床 修造 动土 进人口"},{jx:7,gz:19,ji:"开光 开市 入宅 动土 盖屋",yi:"入学 习艺 出行 纳采 订盟 嫁娶 会亲友 进人口 牧养 捕捉 入殓 移柩 安葬 启钻"},{jx:7,gz:2,ji:"作灶 入宅 嫁娶",yi:"祭祀 冠笄 会亲友 拆卸 起基 除服 成服 移柩 启钻 安葬 沐浴 捕捉 开光 塑绘"},{jx:7,gz:20,ji:"安门",yi:"祭祀 开光 塑绘 祈福 斋醮 裁衣 合帐 冠笄 嫁娶 拆卸 动土 移徙 入宅 入殓 移柩 安葬 谢土 求嗣 入学 理发 伐木 架马 作梁 出火 修造 起基 定磉 放水 赴任"},{jx:7,gz:21,ji:"开市 动土 掘井 开池",yi:"祭祀 祈福 开光 求嗣 斋醮 纳采 订盟 求医 治病 起基 定磉 造船 取渔 解除 安葬 启钻 谢土 入殓"},{jx:7,gz:22,ji:"",yi:"祭祀 祈福 求嗣 开光 解除 合帐 冠笄 伐木 架马 作梁 修造 进人口 嫁娶 裁衣 合帐 安床 动土 起基 上梁 竖柱 放水 会亲友"},{jx:7,gz:23,ji:"开市 交易 嫁娶 安葬 行丧",yi:"祭祀 沐浴 捕捉 结网 畋猎 取渔 馀事勿取"},{jx:7,gz:24,ji:"嫁娶 开市 出火 作灶 置产 斋醮 入宅 移徙 安门",yi:"解除 祭祀 理发 入殓 安葬 破土"},{jx:7,gz:25,ji:"嫁娶 纳采 订盟 开市 入宅",yi:"祭祀 捕捉 畋猎 纳畜 牧养 入殓 除服 成服 移柩 破土 安葬 启钻"},{jx:7,gz:26,ji:"诸事不宜",yi:"解除 坏垣 馀事勿取"},{jx:7,gz:27,ji:"开光 嫁娶 掘井 伐木 作梁",yi:"祭祀 祈福 求嗣 斋醮 造庙 出火 安机械 会亲友 开市 交易 立券 纳财 习艺 经络 求医 治病 开池 开厕 畋猎 结网 栽种 牧养 安葬 破土 启钻"},{jx:7,gz:28,ji:"嫁娶 动土 造船 开池 掘井 出行 修造 入宅 上梁 移徙 安葬 破土 作灶 开市",yi:"祭祀 理发 针灸 解除 进人口 整手足甲"},{jx:7,gz:29,ji:"出行 安葬 修坟 开市",yi:"祭祀 塑绘 开光 裁衣 冠笄 嫁娶 纳采 拆卸 修造 动土 竖柱 上梁 安床 移徙 入宅 安香 结网 捕捉 畋猎 伐木 进人口 放水"},{jx:7,gz:3,ji:"入宅 移徙 掘井 理发 伐木 交易 开市 作灶",yi:"嫁娶 祭祀 祈福 求嗣 开光 出行 拆卸 修造 动土 上梁 安床 纳畜 入殓 破土"},{jx:7,gz:30,ji:"伐木 开市 交易 上梁 作灶 安门 盖屋",yi:"嫁娶 纳采 订盟 入宅 移徙 安床 祭祀 祈福 开光 出行 解除 出火 拆卸 动土 纳畜 谢土 安葬 破土"},{jx:7,gz:31,ji:"栽种 动土 开市 作灶",yi:"祭祀 祈福 酬神 订盟 纳采 冠笄 裁衣 合帐 嫁娶 安床 移徙 入宅 安香 入殓 移柩 启钻 安葬 解除 取渔 捕捉 伐木 安门 出火"},{jx:7,gz:32,ji:"开市 交易 作灶 纳财 上梁 安床 盖屋 造船",yi:"嫁娶 开光 祭祀 祈福 求嗣 出行 出火 入宅 移徙 解除 栽种 伐木 破土 谢土 安葬"},{jx:7,gz:33,ji:"开市 动土 破土",yi:"嫁娶 纳采 祭祀 祈福 出行 移徙 求医"},{jx:7,gz:34,ji:"开市 立券 造船 合寿木",yi:"嫁娶 纳采 订盟 祭祀 祈福 求嗣 开光 出火 出行 拆卸 动土 修造 进人口 入宅 移徙 安床 解除 挂匾 栽种 破土 谢土 入殓 移柩 安葬"},{jx:7,gz:35,ji:"开市 安葬",yi:"订盟 纳采 出行 祭祀 祈福 修造 动土 移徙 入宅"},{jx:7,gz:36,ji:"嫁娶 斋醮 开市 出火 入宅 移徙 出行 作灶 安门 伐木",yi:"祭祀 祈福 解除 整手足甲 安床 沐浴 入殓 移柩 破土 启钻 安葬 谢土"},{jx:7,gz:37,ji:"嫁娶 入宅",yi:"捕捉 结网 入殓 破土 安葬"},{jx:7,gz:38,ji:"出火 入宅 移徙 祈福 祭祀 安床 开市 嫁娶 探病",yi:"开光 解除 拆卸 修造 动土 竖柱 安门 牧养 安葬 修坟 破土 移柩"},{jx:7,gz:39,ji:"开市 赴任",yi:"嫁娶 订盟 纳采 出行 祭祀 祈福 动土 移徙 入宅 破土 安葬"},{jx:7,gz:4,ji:"开市 交易 破土 作灶",yi:"祭祀 塑绘 开光 订盟 纳采 嫁娶 安床 进人口 入殓 除服 成服 移柩 启钻 安葬 立碑"},{jx:7,gz:40,ji:"破土 动土 安门 作灶 开市 交易",yi:"嫁娶 纳采 订盟 祭祀 开光 出行 解除 伐木 出火 入宅 移徙 拆卸 修造 栽种 安葬 入殓"},{jx:7,gz:41,ji:"开市 安葬",yi:"嫁娶 订盟 纳采 祭祀 祈福 修造 动土 移徙 入宅"},{jx:7,gz:42,ji:"纳采 订盟 嫁娶 上梁 开市 斋醮 盖屋 安门",yi:"沐浴 捕捉 畋猎 理发 整手足甲 入殓 除服 成服 破土 安葬 谢土 立碑 修坟 启钻"},{jx:7,gz:43,ji:"开市 立券 理发 作灶",yi:"嫁娶 祭祀 祈福 出行 解除 出火 拆卸 动土 入宅 移徙 安床 上梁 栽种 纳畜 破土 启钻 安葬"},{jx:7,gz:44,ji:"纳采 开光 安床 嫁娶 开市",yi:"祈福 斋醮 出行 移徙 入宅 修造 动土 破土 安葬"},{jx:7,gz:45,ji:"动土 破土 纳财 掘井 挂匾 开市 伐木 交易",yi:"祭祀 祈福 求嗣 开光 解除 出火 拆卸 入宅 安床 修造 安门 纳畜 启钻 安葬"},{jx:7,gz:46,ji:"移徙 入宅 盖屋 架马",yi:"嫁娶 纳采 订盟 斋醮 开光 祭祀 祈福 求医 治病 会亲友 动土 解除 捕捉 纳畜 牧养 入殓 破土 安葬"},{jx:7,gz:47,ji:"嫁娶 开市 交易 行丧 安葬 修坟",yi:"祭祀 祈福 求嗣 开光 出行 伐木 出火 拆卸 修造 动土 起基 安床 入宅 移徙"},{jx:7,gz:48,ji:"出火 嫁娶 入宅 作灶 上梁 动土",yi:"沐浴 理发 捕捉 入殓 移柩 破土 启钻 安葬"},{jx:7,gz:49,ji:"诸事不宜",yi:"祭祀 塞穴 入殓 破土 安葬 移柩 馀事勿取"},{jx:7,gz:5,ji:"开生坟 破土 行丧 安葬",yi:"嫁娶 冠笄 祭祀 祈福 求嗣 斋醮 进人口 会亲友 伐木 作梁 开柱眼 安床 掘井 捕捉 畋猎"},{jx:7,gz:50,ji:"祭祀 嫁娶 安床 开市 入宅 探病 上梁",yi:"沐浴 捕捉 入殓 除服 成服 破土 启钻 安葬"},{jx:7,gz:51,ji:"",yi:"祭祀 入殓 移柩 开生坟 破土 启钻 安葬 除服 成服 馀事勿取"},{jx:7,gz:52,ji:"开市 造庙 动土 破土",yi:"嫁娶 订盟 纳采 祭祀 祈福 塑绘 开光 移徙 安床 伐木 作梁 捕捉 畋猎 结网 求医 治病 解除 安葬 除服 成服 移柩 入殓 立碑 谢土"},{jx:7,gz:53,ji:"诸事不宜",yi:"祭祀 解除 馀事勿取"},{jx:7,gz:54,ji:"盖屋 开市 动土 破土",yi:"嫁娶 祭祀 沐浴 裁衣 出行 理发 移徙 捕捉 畋猎 放水 入宅 除服 成服 启钻 安葬 移柩 入殓"},{jx:7,gz:55,ji:"开市 作灶 安床 入宅 上梁 裁衣",yi:"动土 入殓 嫁娶 移柩 安葬 破土"},{jx:7,gz:56,ji:"安床 嫁娶 作灶 入宅",yi:"祭祀 解除 入殓 除服 成服 移柩 启钻 安葬 修坟 立碑 谢土 沐浴 扫舍 捕捉 取渔 结网 畋猎 理发"},{jx:7,gz:57,ji:"动土 破土",yi:"祭祀 解除 入殓 移柩 启钻 安葬 整手足甲 捕捉 畋猎 取渔 除服 成服 扫舍 谢土 斋醮"},{jx:7,gz:58,ji:"开市 开光",yi:"嫁娶 纳采 求医 治病 修造 动土 移徙 入宅 破土 安葬"},{jx:7,gz:59,ji:"嫁娶 开市 安葬 启钻 行丧",yi:"畋猎 捕捉 结网 取渔 祭祀 沐浴 馀事勿取"},{jx:7,gz:6,ji:"盖屋 开市 作灶 入宅",yi:"祭祀 会亲友 出行 订盟 纳采 沐浴 修造 动土 祈福 斋醮 嫁娶 拆卸 安床 入殓 移柩 安葬 谢土 赴任 裁衣 竖柱 上梁 伐木 捕捉 栽种 破土 安门"},{jx:7,gz:7,ji:"开市 斋醮",yi:"纳采 嫁娶 祭祀 祈福 出行 修造 动土 移徙 入宅 安葬 破土"},{jx:7,gz:8,ji:"安床 开市 立券 作灶",yi:"祭祀 祈福 斋醮 订盟 纳采 裁衣 合帐 拆卸 修造 动土 上梁 起基 移柩 安葬 谢土 沐浴 扫舍 开柱眼 伐木 出火"},{jx:7,gz:9,ji:"嫁娶 开市 纳财 出火",yi:"纳采 祭祀 祈福 求嗣 斋醮 出行 起基 盖屋 定磉 安门 入殓 安葬"},{jx:8,gz:0,ji:"移徙 入宅 开仓 出货财",yi:"祭祀 破屋 坏垣 馀事勿取"},{jx:8,gz:1,ji:"诸事不宜",yi:"祭祀 破屋 坏垣 馀事勿取"},{jx:8,gz:10,ji:"祈福 斋醮 开市 安葬",yi:"祭祀 沐浴 解除 求医 治病 破屋 坏垣 馀事勿取"},{jx:8,gz:11,ji:"诸事不宜",yi:"祭祀 解除 破屋 坏垣 馀事勿取"},{jx:8,gz:12,ji:"入宅 嫁娶 移徙",yi:"祭祀 沐浴 破屋 坏垣 馀事勿取"},{jx:8,gz:13,ji:"诸事不宜",yi:"破屋 坏垣 馀事勿取"},{jx:8,gz:14,ji:"斋醮 开市",yi:"沐浴 破屋 坏垣 馀事勿取"},{jx:8,gz:15,ji:"诸事不宜",yi:"破屋 坏垣 馀事勿取"},{jx:8,gz:16,ji:"开市 嫁娶",yi:"祭祀 沐浴 解除 破屋 坏垣 馀事勿取"},{jx:8,gz:17,ji:"诸事不宜",yi:"破屋 坏垣 馀事勿取"},{jx:8,gz:18,ji:"嫁娶 移徙 入宅 探病 出行 盖屋",yi:"祭祀 沐浴 破屋 坏垣 馀事勿取"},{jx:8,gz:19,ji:"诸事不宜",yi:"破屋 坏垣 馀事勿取"},{jx:8,gz:2,ji:"祈福 纳采 订盟 嫁娶 入宅 安葬",yi:"破屋 坏垣 治病 馀事勿取"},{jx:8,gz:20,ji:"入宅 开市 安葬",yi:"祭祀 沐浴 求医 治病 扫舍 破屋 坏垣 解除 馀事勿取"},{jx:8,gz:21,ji:"诸事不宜",yi:"祭祀 治病 破屋 坏垣 馀事勿取"},{jx:8,gz:22,ji:"嫁娶 开市 交易 入宅 安葬",yi:"祭祀 沐浴 破屋 坏垣 求医 治病 解除 馀事勿取"},{jx:8,gz:23,ji:"诸事不宜",yi:"破屋 坏垣 沐浴 解除 馀事勿取"},{jx:8,gz:24,ji:"嫁娶 入宅",yi:"破屋 坏垣 求医 治病 畋猎 馀事勿取"},{jx:8,gz:25,ji:"诸事不宜",yi:"破屋 坏垣 馀事勿取"},{jx:8,gz:26,ji:"行丧 安葬",yi:"破屋 坏垣 治病 馀事勿取"},{jx:8,gz:27,ji:"诸事不宜",yi:"祭祀 治病 破屋 坏垣 馀事勿取"},{jx:8,gz:28,ji:"诸事不宜",yi:"破屋 坏垣 馀事勿取"},{jx:8,gz:29,ji:"嫁娶 安葬",yi:"破屋 坏垣 求医 治病 馀事勿取"},{jx:8,gz:3,ji:"移徙 入宅 出行 栽种",yi:"祭祀 沐浴 破屋 坏垣 馀事勿取"},{jx:8,gz:30,ji:"诸事不宜",yi:"祭祀 求医 破屋 坏垣 馀事勿取"},{jx:8,gz:31,ji:"开市 动土 破土",yi:"祭祀 破屋 坏垣 解除 馀事勿取"},{jx:8,gz:32,ji:"诸事不宜",yi:"求医 破屋"},{jx:8,gz:33,ji:"开光 嫁娶",yi:"破屋 坏垣 求医 治病 馀事勿取"},{jx:8,gz:34,ji:"诸事不宜",yi:"祭祀 求医 治病 解除 馀事勿取"},{jx:8,gz:35,ji:"开光 安葬",yi:"祭祀 沐浴 解除 破屋 坏垣 馀事勿取"},{jx:8,gz:36,ji:"",yi:"诸事不宜"},{jx:8,gz:37,ji:"嫁娶 安葬",yi:"破屋 坏垣 解除 馀事勿取"},{jx:8,gz:38,ji:"诸事不宜",yi:"沐浴 治病 破屋 坏垣 馀事勿取"},{jx:8,gz:39,ji:"移徙 入宅",yi:"破屋 坏垣 求医 治病 馀事勿取"},{jx:8,gz:4,ji:"嫁娶 入宅 上梁 出行 安葬",yi:"祭祀 沐浴 破屋 坏垣 馀事勿取"},{jx:8,gz:40,ji:"",yi:"祭祀 解除 破屋 坏垣 馀事勿取"},{jx:8,gz:41,ji:"嫁娶 安葬",yi:"祭祀 解除 破屋 坏垣 求医 治病 馀事勿取"},{jx:8,gz:42,ji:"诸事不宜",yi:"治病 破屋 坏垣 馀事勿取"},{jx:8,gz:43,ji:"斋醮 嫁娶 开市",yi:"祭祀 破屋 坏垣 馀事勿取"},{jx:8,gz:44,ji:"馀事勿取",yi:"祭祀 解除 治病 破屋 坏垣 扫舍"},{jx:8,gz:45,ji:"嫁娶 移徙 开市 入宅",yi:"破屋 坏垣 馀事勿取"},{jx:8,gz:46,ji:"诸事不宜",yi:"祭祀 解除 破屋 坏垣 馀事勿取"},{jx:8,gz:47,ji:"行丧 安葬",yi:"祭祀 沐浴 解除 破屋 坏垣 馀事勿取"},{jx:8,gz:48,ji:"诸事不宜",yi:"破屋 坏垣 馀事勿取"},{jx:8,gz:49,ji:"嫁娶 出行",yi:"求医 治病 破屋 坏垣 馀事勿取"},{jx:8,gz:5,ji:"诸事不宜",yi:"祭祀 解除 破屋 坏垣 馀事勿取"},{jx:8,gz:50,ji:"诸事不宜",yi:"破屋 坏垣 馀事勿取"},{jx:8,gz:51,ji:"探病",yi:"馀事勿取"},{jx:8,gz:52,ji:"诸事不宜",yi:"祭祀 解除 破屋 坏垣 馀事勿取"},{jx:8,gz:53,ji:"嫁娶 安葬",yi:"破屋 坏垣 祭祀 馀事勿取"},{jx:8,gz:54,ji:"诸事不宜",yi:"破屋 坏垣 祭祀 沐浴 馀事勿取"},{jx:8,gz:55,ji:"嫁娶 开市 安葬",yi:"破屋 坏垣 馀事勿取"},{jx:8,gz:56,ji:"开市 嫁娶",yi:"求医 治病 破屋 坏垣 馀事勿取"},{jx:8,gz:57,ji:"诸事不宜",yi:"破屋 坏垣"},{jx:8,gz:58,ji:"嫁娶 开市",yi:"祭祀 沐浴 解除 破屋 坏垣 求医 治病 馀事勿取"},{jx:8,gz:59,ji:"诸事不宜",yi:"祭祀 破屋 坏垣 馀事勿取"},{jx:8,gz:6,ji:"移徙 入宅",yi:"破屋 坏垣 治病 馀事勿取"},{jx:8,gz:7,ji:"诸事不宜",yi:"解除 破屋 坏垣 馀事勿取"},{jx:8,gz:8,ji:"嫁娶 安葬",yi:"祭祀 沐浴 解除 理发 扫舍 破屋 坏垣 馀事勿取"},{jx:8,gz:9,ji:"诸事不宜",yi:"破屋 坏垣 求医 治病"},{jx:9,gz:0,ji:"斋醮",yi:"嫁娶 纳采 祭祀 祈福 出行 动土 上梁 移徙 入宅 破土 安葬"},{jx:9,gz:1,ji:"出火 入宅",yi:"祭祀 斋醮 塑绘 开光 出行 修造 动土 造畜稠 安床 放水 掘井 开池 开厕 结网 破土"},{jx:9,gz:10,ji:"开光 出货财",yi:"祭祀 动土 上梁 订盟 纳采 嫁娶 安机械 拆卸 安床 入宅 安香 入殓 移柩 破土 安葬 立碑 谢土 赴任 出行 移徙 祈福 求嗣 解除 造仓 进人口"},{jx:9,gz:11,ji:"祭祀 嫁娶 入宅 作灶 安葬",yi:"沐浴 捕捉 畋猎 结网 取渔"},{jx:9,gz:12,ji:"",yi:"嫁娶 祭祀 祈福 求嗣 开光 出行 拆卸 动土 上梁 出火 进人口 入宅 移徙 安床 栽种 纳畜 牧养 竖柱 安门 修造 解除 会亲友"},{jx:9,gz:13,ji:"作灶 理发 造桥 行丧 安葬",yi:"嫁娶 安机械 交易 出行 祭祀 祈福 求嗣 斋醮 塑绘 开光 合帐 裁衣 放水 开池 掘井"},{jx:9,gz:14,ji:"伐木 祭祀 纳畜 祭祀",yi:"嫁娶 开光 出行 理发 作梁 出火 拆卸 修造 开市 交易 立券 挂匾 动土 入宅 移徙 安床 栽种"},{jx:9,gz:15,ji:"动土 破土 嫁娶 掘井 安床",yi:"订盟 纳采 祭祀 祈福 安香 出火 开市 立券 入宅 挂匾 造桥 启钻 安葬"},{jx:9,gz:16,ji:"",yi:"嫁娶 祈福 求嗣 出行 出火 拆卸 修造 动土 上梁 开光 进人口 开市 交易 立券 挂匾 安床 入宅 移徙 栽种 伐木 入殓 破土 除服 成服"},{jx:9,gz:17,ji:"嫁娶 开市 入宅 祈福 安葬",yi:"订盟 纳采 会亲友 交易 立券 纳财 栽种 纳畜 牧养"},{jx:9,gz:18,ji:"探病 安葬",yi:"嫁娶 祭祀 开光 出火 出行 拆卸 修造 动土 解除 开市 交易 立券 挂匾 纳财 入宅 移徙 安床 栽种 纳畜"},{jx:9,gz:19,ji:"安门 动土 破土 行丧 安葬 成服",yi:"冠笄 纳财 掘井 开池 出火 安床 交易 立券 畋猎 结网 理发 放水"},{jx:9,gz:2,ji:"祭祀 祈福",yi:"嫁娶 纳采 开市 出行 动土 上梁 移徙 入宅 破土 安葬"},{jx:9,gz:20,ji:"安床 伐木 祈福 纳畜",yi:"嫁娶 开市 交易 立券 开光 出行 出火 拆卸 修造 入宅 移徙 动土 破土 移柩 安葬 启钻 除服 成服"},{jx:9,gz:21,ji:"安床 栽种 治病 作灶",yi:"祭祀 冠笄 嫁娶 拆卸 修造 动土 起基 上梁 盖屋 入宅 开市 开池 塞穴 入殓 除服 成服 移柩 安葬 破土"},{jx:9,gz:22,ji:"开光 作灶 斋醮 安葬",yi:"嫁娶 祭祀 出行 冠笄 立券 交易 进人口 开市 移徙 修造 动土 安床 入殓 移柩 破土"},{jx:9,gz:23,ji:"",yi:"诸事不宜"},{jx:9,gz:24,ji:"开市 立券",yi:"纳采 订盟 嫁娶 造车器 祭祀 祈福 求嗣 开光 出火 拆卸 修造 动土 进人口 挂匾 入宅 移徙 安床 栽种 入殓 破土 安葬 除服 成服"},{jx:9,gz:25,ji:"开市 安门 掘井 作灶",yi:"嫁娶 出行 安机械 祭祀 塑绘 开光 治病 经络 安床 结网 塞穴 破土 入殓"},{jx:9,gz:26,ji:"入宅 移徙 作灶 祭祀 谢土",yi:"开市 交易 立券 纳财 动土 开光 出行 嫁娶 纳采 订盟 出行 纳财 入学 开仓 出货财 纳畜 牧养 栽种 破土 启钻 安葬 立碑"},{jx:9,gz:27,ji:"动土 订盟 安床 开池",yi:"祈福 斋醮 出行 冠笄 嫁娶 雕刻 开柱眼 入宅 造桥 开市 交易 立券 纳财 入殓 除服 成服 移柩 破土 安葬 启钻"},{jx:9,gz:28,ji:"开市 掘井 开渠 造桥 造船",yi:"嫁娶 纳采 订盟 祭祀 开光 出行 理发 作梁 出火 拆卸 修造 动土 进人口 入宅 移徙 安床 移徙 拆卸 挂匾 栽种 纳畜 破土 安葬 入殓 除服 成服"},{jx:9,gz:29,ji:"出行 祈福 安葬 作灶",yi:"会亲友 嫁娶 订盟 纳采 纳婿 拆卸 修造 动土 起基 竖柱 上梁 安床 会亲友 纳财"},{jx:9,gz:3,ji:"掘井 理发 作灶 动土 破土 开池",yi:"嫁娶 开光 祭祀 祈福 求嗣 安香 出火 解除 伐木 入宅 移徙 安床 开市 交易 立券 栽种 出火 出行 安葬"},{jx:9,gz:30,ji:"上梁 开仓 出货财 盖屋 造船",yi:"纳采 订盟 嫁娶 祭祀 祈福 雕刻 移徙 开市 入宅 出行 动土 会亲友 入学 修造 动土 起基 安门 安床 造庙 解除 纳财 开池 造畜稠 牧养 牧养"},{jx:9,gz:31,ji:"开光 栽种 治病 安门 作灶",yi:"祭祀 祈福 斋醮 出行 冠笄 安机械 移徙 入宅 安香 安床 除服 成服 移柩 启钻"},{jx:9,gz:32,ji:"祈福 造庙 祭祀 安床 谢土",yi:"嫁娶 纳采 订盟 开光 安香 出火 纳财 开市 交易 立券 裁衣 盖屋 起基 修造 动土 安门 移徙 入宅 栽种 牧养 畋猎 掘井 开池 安葬 破土 入殓 除服 成服 立碑"},{jx:9,gz:33,ji:"作灶 安床",yi:"祈福 求嗣 斋醮 塑绘 开光 订盟 纳采 嫁娶 动土 入宅 安香 移柩 安葬 谢土 出行 沐浴 修造 竖柱 上梁 纳财 破土 解除 安门 放水"},{jx:9,gz:34,ji:"嫁娶 开光 作灶",yi:"纳采 交易 立券 安床 安机械 安葬 移柩 动土 破土 立碑"},{jx:9,gz:35,ji:"嫁娶 入宅 安葬",yi:"沐浴 结网 取渔"},{jx:9,gz:36,ji:"作灶 开市 经络",yi:"订盟 纳采 嫁娶 解除 祭祀 祈福 求嗣 开光 出行 解除 出火 拆卸 入宅 移徙 安床 栽种 纳畜 动土 破土 谢土 安葬 修坟"},{jx:9,gz:37,ji:"开光 开市",yi:"嫁娶 订盟 纳采 祭祀 祈福 入殓 破土 安葬"},{jx:9,gz:38,ji:"祭祀 祈福 探病 谢土 造桥",yi:"嫁娶 开市 立券 移徙 入宅 安机械 会亲友 经络 安门 安床 挂匾 拆卸 开仓 出货财 开池 栽种 纳畜 牧养 破土 安葬 启钻 移柩 入殓 立碑"},{jx:9,gz:39,ji:"动土 破土",yi:"嫁娶 订盟 纳采 出行 开市 祭祀 祈福 移徙 入宅 启钻 安葬"},{jx:9,gz:4,ji:"造桥 冠笄 盖屋 掘井",yi:"祭祀 塑绘 开光 出行 解除 订盟 嫁娶 拆卸 起基 安床 入宅 开市 入殓 除服 成服 移柩 破土 谢土 挂匾 开柱眼 交易"},{jx:9,gz:40,ji:"开市 开仓 安门 安葬",yi:"嫁娶 纳采 订盟 祭祀 祈福 求嗣 开光 出行 出火 拆卸 修造 动土 进人口 入宅 移徙 安床 上梁 合脊 放水 掘井 破土 移柩 谢土 除服 成服"},{jx:9,gz:41,ji:"祈福 安葬",yi:"订盟 纳采 会亲友 安机械 纳财 牧养"},{jx:9,gz:42,ji:"嫁娶 入宅 修造 动土",yi:"祭祀 扫舍 破土 安葬 除服 成服 启钻 移柩 入殓 立碑 馀事勿取"},{jx:9,gz:43,ji:"造桥 安门 理发 造庙 栽种 作灶",yi:"祭祀 祈福 求嗣 斋醮 开光 入学 订盟 冠笄 伐木 修造 动土 起基 放水 交易 开池"},{jx:9,gz:44,ji:"祈福 嫁娶 安床 入宅 造船",yi:"沐浴 开仓 出货财 开市 交易 立券 纳财 栽种 纳畜 牧养 畋猎 入殓 破土 安葬"},{jx:9,gz:45,ji:"嫁娶 作灶 安床",yi:"祭祀 祈福 求嗣 开光 出火 出行 拆卸 修造 动土 入宅 移徙 上梁 挂匾 开池 入殓 安葬 破土 启钻"},{jx:9,gz:46,ji:"塑绘 开光 造桥 除服 成服",yi:"嫁娶 冠笄 祭祀 出行 会亲友 修造 动土 入殓 破土"},{jx:9,gz:47,ji:"诸事不宜",yi:"塞穴 扫舍 馀事勿取"},{jx:9,gz:48,ji:"斋醮 开市 嫁娶 作灶",yi:"沐浴 扫舍 馀事勿取"},{jx:9,gz:49,ji:"嫁娶 造桥 词讼 移徙 安门 作灶 栽种",yi:"开市 交易 立券 纳财 开池 开厕 结网 祭祀 修造 动土 安床 放水 经络 破土"},{jx:9,gz:5,ji:"祈福 斋醮 纳采 订盟 嫁娶 入宅 安葬",yi:"祭祀 求嗣 冠笄 进人口 会亲友 安门 安床 经络 纳财 牧养 畋猎 放水 割蜜"},{jx:9,gz:50,ji:"祈福 上梁 开仓 掘井 牧养",yi:"纳采 订盟 嫁娶 移徙 入宅 出行 开市 交易 立券 纳财 会亲友 安香 出火 拆卸 盖屋 起基 安床 作灶 挂匾 安葬 破土 启钻 立碑 入殓 移柩"},{jx:9,gz:51,ji:"诸事不宜",yi:"祭祀 入殓 移柩 结网 启钻 安葬 移柩 除服 成服 馀事勿取"},{jx:9,gz:52,ji:"嫁娶 造庙 造桥 造船 作灶 安葬",yi:"订盟 纳采 祭祀 祈福 安香 出火 修造 动土 上梁 安门 起基 竖柱 上梁 定磉 开池 移徙 入宅 立券 破土"},{jx:9,gz:53,ji:"上梁 作灶 伐木 出行 安葬 安门 理发",yi:"嫁娶 求嗣 纳采 进人口 纳财 结网 纳畜 牧养 会亲友"},{jx:9,gz:54,ji:"盖屋 造船 动土 破土",yi:"嫁娶 纳采 订盟 祭祀 冠笄 裁衣 伐木 作梁 架马 定磉 开柱眼 作灶 移徙 安床 畋猎 结网 开池 开厕 除服 成服 启钻 入殓 移柩 安葬"},{jx:9,gz:55,ji:"安门 栽种 作灶 治病",yi:"安床 祭祀 祈福 求嗣 冠笄 伐木 架马 动土 开池 开厕 结网 入殓 除服 成服"},{jx:9,gz:56,ji:"祈福 嫁娶 造庙 安床 谢土",yi:"纳采 订盟 祭祀 求嗣 出火 塑绘 裁衣 会亲友 入学 拆卸 扫舍 造仓 挂匾 掘井 开池 结网 栽种 纳畜 破土 修坟 立碑 安葬 入殓"},{jx:9,gz:57,ji:"开市 嫁娶 安床 会亲友 入宅 作灶 上梁",yi:"祭祀 斋醮 沐浴 开生坟 除服 成服 移柩 入殓 破土 安葬 合寿木"},{jx:9,gz:58,ji:"作梁 造庙",yi:"祭祀 出行 订盟 纳采 裁衣 合帐 冠笄 进人口 动土 安床 作灶 入殓 移柩 安葬 破土 结网 取渔 畋猎"},{jx:9,gz:59,ji:"祈福 安葬",yi:"沐浴 塞穴 畋猎 结网 取渔 扫舍 馀事勿取"},{jx:9,gz:6,ji:"盖屋 治病",yi:"祭祀 解除 祈福 开光 塑绘 斋醮 订盟 纳采 裁衣 冠笄 拆卸 修造 动土 入殓 除服 成服 移柩 启钻 安床 赴任 出行 移徙 竖柱 上梁 伐木 栽种 破土 安葬 纳畜"},{jx:9,gz:7,ji:"作灶 安门 造桥 开市 安葬",yi:"安床 架马 祭祀 塑绘 开光 出行 理发 伐木 作梁 开柱眼 开厕 畋猎 破土 入殓 除服 成服 移柩 启钻 修坟 立碑"},{jx:9,gz:8,ji:"入宅 安床",yi:"塑绘 开光 出行 订盟 纳采 除服 成服 嫁娶 纳婿 入殓 移柩 启钻 安葬 立碑"},{jx:9,gz:9,ji:"安床 作灶 造船 会亲友",yi:"纳采 订盟 祭祀 祈福 安香 出火 修造 出行 开市 移徙 入宅 动土 安葬 破土"}],Nd=[{gz:0,sc:0,ji:"造船 乘船",yi:"祈福 订婚 嫁娶 开市 安葬"},{gz:0,sc:1,ji:"",yi:"祈福 求嗣 出行 求财 嫁娶 安葬 祭祀"},{gz:0,sc:2,ji:"上梁 盖屋 入殓",yi:"祭祀 祈福 酬神 订婚 嫁娶 出行 求财 入宅 安葬 赴任"},{gz:0,sc:3,ji:"赴任 出行",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬"},{gz:0,sc:4,ji:"赴任 修造 移徙 出行 词讼 祈福 求嗣 乘船",yi:"订婚 嫁娶 求财 开市 交易 安床"},{gz:0,sc:5,ji:"开光 修造 安葬 赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 入宅 开市 交易"},{gz:0,sc:6,ji:"诸事不宜",yi:""},{gz:0,sc:7,ji:"赴任 出行",yi:"祭祀 祈福 酬神 求财 见贵 订婚 嫁娶 修造 安葬 入宅"},{gz:0,sc:8,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:0,sc:9,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求财 见贵 酬神 修造 盖屋 移徙 作灶 安床 入宅 开市"},{gz:0,sc:10,ji:"赴任 词讼",yi:"出行 求财 见贵 嫁娶 进人口 移徙 安葬"},{gz:0,sc:11,ji:"赴任 出行 求财",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 祈福"},{gz:1,sc:0,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:1,sc:1,ji:"造船 乘船",yi:"祭祀 祈福 酬神 订婚 嫁娶 出行 求财 入宅 安葬"},{gz:1,sc:2,ji:"祈福 求嗣",yi:"订婚 嫁娶 修造 入宅 开市 交易 安葬"},{gz:1,sc:3,ji:"",yi:"赴任 出行 求财 见贵 订婚 嫁娶 入宅 开市 安葬 祈福 求嗣 祭祀"},{gz:1,sc:4,ji:"修造 动土",yi:""},{gz:1,sc:5,ji:"赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 修造 盖屋 移徙"},{gz:1,sc:6,ji:"赴任 修造 移徙 出行 词讼 祭祀 祈福 斋醮 开光",yi:"求嗣 嫁娶 入宅 开市 交易 安葬 求财"},{gz:1,sc:7,ji:"诸事不宜",yi:""},{gz:1,sc:8,ji:"开光 修造 安葬",yi:"祈福 求嗣 出行 求财 嫁娶 赴任 见贵"},{gz:1,sc:9,ji:"赴任 出行 修造",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:1,sc:10,ji:"上梁 盖屋 入殓 赴任 出行",yi:"祈福 订婚 嫁娶 安床 移徙 入宅 修造 安葬"},{gz:1,sc:11,ji:"",yi:"祭祀 祈福 求嗣 开市 订婚 嫁娶 入宅 安葬 修造 赴任 出行 见贵 求财"},{gz:2,sc:0,ji:"祈福 求嗣",yi:"赴任 出行 求财 见贵 祭祀 酬神"},{gz:2,sc:1,ji:"祭祀 祈福 斋醮 酬神",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市 赴任 出行 求财 见贵 嫁娶 进人口"},{gz:2,sc:2,ji:"赴任 词讼 修造 动土",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 安葬 祈福"},{gz:2,sc:3,ji:"诸事不宜",yi:"赴任 出行 求财 嫁娶 修造 移徙 开市 安葬"},{gz:2,sc:4,ji:"赴任 出行 祭祀 祈福 斋醮 开光",yi:"订婚 嫁娶 开市 安葬"},{gz:2,sc:5,ji:"赴任 出行 祭祀 祈福 斋醮 开光",yi:"求财 见贵 订婚 嫁娶 入宅 开市 安葬"},{gz:2,sc:6,ji:"诸事不宜",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:2,sc:7,ji:"",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 祭祀 祈福 求嗣 斋醮 订婚 嫁娶 出行"},{gz:2,sc:8,ji:"诸事不宜",yi:""},{gz:2,sc:9,ji:"赴任 出行 修造 动土",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 入宅 安葬 祭祀"},{gz:2,sc:10,ji:"祈福 求嗣 乘船",yi:"订婚 嫁娶 出行 求财 开市 交易 安床 作灶 祭祀"},{gz:2,sc:11,ji:"赴任 出行 修造 开光",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 祭祀"},{gz:3,sc:0,ji:"赴任 出行 修造 动土",yi:"作灶 祭祀 祈福 斋醮 酬神"},{gz:3,sc:1,ji:"赴任 出行 修造",yi:"见贵 求财 嫁娶 进人口 移徙 安葬 祭祀 祈福 求嗣 斋醮 订婚"},{gz:3,sc:2,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬 求财 见贵"},{gz:3,sc:3,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市 求嗣 订婚 嫁娶"},{gz:3,sc:4,ji:"赴任 出行",yi:"祭祀 祈福 求嗣 斋醮 订婚 嫁娶 安葬"},{gz:3,sc:5,ji:"诸事不宜",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 祈福 订婚 赴任 出行 见贵 求财"},{gz:3,sc:6,ji:"修造 动土",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:3,sc:7,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 修造 入宅 安葬 祭祀"},{gz:3,sc:8,ji:"祈福 求嗣",yi:"入宅 修造 安葬 祭祀 斋醮 酬神"},{gz:3,sc:9,ji:"诸事不宜",yi:""},{gz:3,sc:10,ji:"赴任 修造 移徙 出行 词讼",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 见贵"},{gz:3,sc:11,ji:"赴任 出行 修造 动土",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 祭祀 见贵"},{gz:4,sc:0,ji:"赴任 修造 移徙 出行 词讼 祭祀 祈福 斋醮 开光",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:4,sc:1,ji:"赴任 出行 修造 动土 祭祀 祈福 斋醮 开光",yi:"酬神 求财 见贵 订婚 嫁娶 安葬"},{gz:4,sc:2,ji:"赴任 出行",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 作灶 祭祀 祈福 斋醮 酬神 见贵"},{gz:4,sc:3,ji:"赴任 出行 祭祀 祈福 斋醮 酬神",yi:"求财 见贵"},{gz:4,sc:4,ji:"上梁 盖屋 入殓 赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:4,sc:5,ji:"开光 修造 安葬",yi:"赴任 出行 求财 见贵 订婚 嫁娶 入宅 开市 盖屋 移徙 作灶 安床"},{gz:4,sc:6,ji:"赴任 词讼 祈福 求嗣",yi:"修造 安葬 出行 求财 嫁娶"},{gz:4,sc:7,ji:"诸事不宜",yi:"祈福 求嗣 出行 入宅 嫁娶 修造 安葬 赴任 见贵 求财"},{gz:4,sc:8,ji:"修造 动土",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任 见贵"},{gz:4,sc:9,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:4,sc:10,ji:"诸事不宜",yi:""},{gz:4,sc:11,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 见贵 求财 订婚 嫁娶 进人口"},{gz:5,sc:0,ji:"诸事不宜",yi:"祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶 修造 安葬 赴任"},{gz:5,sc:1,ji:"赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 修造 盖屋 移徙"},{gz:5,sc:2,ji:"上梁 盖屋 入殓",yi:"赴任 出行 求财 见贵 祭祀 祈福 酬神"},{gz:5,sc:3,ji:"赴任 出行 修造 动土",yi:"入宅 安葬 求财 嫁娶"},{gz:5,sc:4,ji:"祭祀 祈福 斋醮 酬神",yi:"作灶 修造 赴任 见贵 求财 出行 嫁娶 进人口 移徙 安葬"},{gz:5,sc:5,ji:"赴任 出行 修造 开光",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 安葬 见贵 求财"},{gz:5,sc:6,ji:"修造 动土",yi:"赴任 出行 求财 见贵 订婚 嫁娶 入宅 开市 安葬 祈福"},{gz:5,sc:7,ji:"",yi:"祭祀 祈福 酬神 订婚 嫁娶 出行 求财 入宅 安葬 修造 盖屋 移徙 作灶 安床"},{gz:5,sc:8,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 求财 嫁娶 安葬"},{gz:5,sc:9,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:5,sc:10,ji:"赴任 出行 求财",yi:"祈福 订婚 嫁娶 开市 安葬"},{gz:5,sc:11,ji:"诸事不宜",yi:""},{gz:6,sc:0,ji:"诸事不宜",yi:""},{gz:6,sc:1,ji:"",yi:"祈福 求嗣 出行 求财 嫁娶 安葬 祭祀"},{gz:6,sc:2,ji:"祈福 求嗣",yi:"订婚 嫁娶 出行 求财 开市 交易 安床 赴任 见贵"},{gz:6,sc:3,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 修造 入宅 求财 开市 交易 安葬 赴任 出行 见贵"},{gz:6,sc:4,ji:"赴任 修造 移徙 出行 词讼",yi:"祭祀 祈福 求嗣 斋醮 订婚 嫁娶 安葬"},{gz:6,sc:5,ji:"赴任 出行 修造 动土",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 安葬 祈福"},{gz:6,sc:6,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"酬神 订婚 嫁娶 求财 入宅 安葬 作灶"},{gz:6,sc:7,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:6,sc:8,ji:"开光 修造 安葬",yi:"赴任 出行 求财 见贵 订婚 嫁娶 入宅 开市 祈福"},{gz:6,sc:9,ji:"",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 赴任 出行 求财"},{gz:6,sc:10,ji:"上梁 盖屋 入殓 赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:6,sc:11,ji:"赴任 出行 求财",yi:"修造 入宅 安葬 见贵 嫁娶 进人口 移徙"},{gz:7,sc:0,ji:"赴任 词讼 祈福 求嗣",yi:"嫁娶 移徙 入宅 开市 交易 修造 安葬"},{gz:7,sc:1,ji:"诸事不宜",yi:""},{gz:7,sc:2,ji:"修造 动土",yi:"祈福 求嗣 出行 求财 嫁娶 安葬"},{gz:7,sc:3,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:7,sc:4,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"入宅 修造 安葬 见贵 求财 嫁娶 进人口 移徙"},{gz:7,sc:5,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 酬神 订婚 嫁娶 求财"},{gz:7,sc:6,ji:"赴任 修造 移徙 出行 词讼",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 祭祀"},{gz:7,sc:7,ji:"造船 乘船 赴任 出行 修造 动土",yi:"见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:7,sc:8,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 作灶 祭祀 赴任 见贵"},{gz:7,sc:9,ji:"赴任 出行 修造",yi:"入宅 安葬 求财 见贵 订婚 嫁娶"},{gz:7,sc:10,ji:"祈福 求嗣 乘船",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬 祭祀"},{gz:7,sc:11,ji:"赴任 出行 求财 开光 修造 安葬",yi:"祈福 求嗣 订婚 嫁娶 开市 交易 安床 盖屋 移徙 作灶"},{gz:8,sc:0,ji:"修造 动土",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:8,sc:1,ji:"",yi:"祈福 嫁娶 修造 造庙 作灶 入宅 安葬 赴任 见贵 求财 出行"},{gz:8,sc:2,ji:"诸事不宜",yi:""},{gz:8,sc:3,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"酬神 求财 见贵 订婚 嫁娶 修造 安葬"},{gz:8,sc:4,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀 赴任 见贵"},{gz:8,sc:5,ji:"",yi:"祈福 求嗣 出行 求财 嫁娶 安葬 祭祀"},{gz:8,sc:6,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:8,sc:7,ji:"",yi:"修造 入宅 安葬 祭祀 祈福 求嗣 斋醮 订婚 嫁娶 出行 赴任"},{gz:8,sc:8,ji:"赴任 修造 移徙 出行 词讼 祈福 求嗣 乘船",yi:"嫁娶 入宅 开市 交易 安葬"},{gz:8,sc:9,ji:"赴任 出行 修造 动土",yi:"祈福 求嗣 订婚 嫁娶 入宅 求财 开市 交易 安葬"},{gz:8,sc:10,ji:"赴任 出行 求财 修造 动土",yi:"作灶 祭祀 祈福 斋醮 酬神"},{gz:8,sc:11,ji:"赴任 出行 修造",yi:"求财 见贵 订婚 嫁娶 入宅 开市 安葬"},{gz:9,sc:0,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求财 见贵 订婚 嫁娶 入宅 开市 安葬 求嗣 作灶"},{gz:9,sc:1,ji:"赴任 出行 修造 祭祀 祈福 斋醮 开光",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:9,sc:2,ji:"祭祀 祈福 斋醮 酬神",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬 赴任 见贵 出行 求财"},{gz:9,sc:3,ji:"诸事不宜",yi:""},{gz:9,sc:4,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:9,sc:5,ji:"开光 修造 安葬",yi:"祈福 求嗣 出行 求财 嫁娶"},{gz:9,sc:6,ji:"祈福 求嗣 乘船",yi:"订婚 嫁娶 开市 安葬 修造"},{gz:9,sc:7,ji:"赴任 出行",yi:"祭祀 祈福 斋醮 酬神 修造 作灶 见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:9,sc:8,ji:"祭祀 祈福 斋醮 酬神 修造 动土",yi:"赴任 出行 求财 见贵 嫁娶 进人口 移徙 安葬"},{gz:9,sc:9,ji:"造桥 乘船",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 祈福 订婚 嫁娶 赴任 出行 求财"},{gz:9,sc:10,ji:"赴任 出行 祭祀 祈福 斋醮 开光",yi:"见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:9,sc:11,ji:"赴任 出行 修造 动土 祭祀 祈福 斋醮 开光",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 安葬 见贵 求财"},{gz:10,sc:0,ji:"赴任 修造 移徙 出行 词讼",yi:"祈福 求嗣 订婚 嫁娶 入宅 求财 开市 交易 安葬"},{gz:10,sc:1,ji:"赴任 出行 修造 动土",yi:"祭祀 祈福 酬神 求财 见贵 订婚 嫁娶 安葬"},{gz:10,sc:2,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任 祭祀"},{gz:10,sc:3,ji:"赴任 出行 修造",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 入宅 安葬"},{gz:10,sc:4,ji:"诸事不宜",yi:""},{gz:10,sc:5,ji:"开光 修造 安葬",yi:"盖屋 移徙 作灶 安床 入宅 开市 祭祀 祈福 出行 订婚 嫁娶"},{gz:10,sc:6,ji:"赴任 词讼 修造 动土",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:10,sc:7,ji:"赴任 出行",yi:"祭祀 祈福 酬神 求财 见贵 订婚 嫁娶 修造 安葬 入宅"},{gz:10,sc:8,ji:"祭祀 祈福 斋醮 酬神",yi:"订婚 嫁娶 开市 安葬 赴任 出行 见贵 求财"},{gz:10,sc:9,ji:"祭祀 祈福 斋醮 酬神",yi:"赴任 出行 求财 见贵"},{gz:10,sc:10,ji:"造船 乘船",yi:"祈福 订婚 嫁娶 移徙 开市 修造 入宅 安葬"},{gz:10,sc:11,ji:"",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 祭祀 祈福 斋醮 酬神"},{gz:11,sc:0,ji:"上梁 盖屋 入殓",yi:"祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶 修造 安葬 赴任"},{gz:11,sc:1,ji:"",yi:"祭祀 祈福 酬神 订婚 嫁娶 出行 求财 入宅 安葬 修造 盖屋 移徙 安床 赴任"},{gz:11,sc:2,ji:"祈福 求嗣 赴任 修造 移徙 出行 词讼",yi:"订婚 嫁娶 求财 开市 交易 安床"},{gz:11,sc:3,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:11,sc:4,ji:"修造 动土",yi:"作灶 祭祀 祈福 斋醮 酬神 赴任 见贵 求财 出行 嫁娶 进人口 移徙 安葬"},{gz:11,sc:5,ji:"诸事不宜",yi:""},{gz:11,sc:6,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 订婚 见贵 求财"},{gz:11,sc:7,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床 修造 盖屋 移徙 作灶"},{gz:11,sc:8,ji:"祭祀 祈福 斋醮 酬神 开光 修造 安葬",yi:"赴任 出行 求财 见贵"},{gz:11,sc:9,ji:"赴任 出行 求财",yi:""},{gz:11,sc:10,ji:"上梁 盖屋 入殓 祭祀 祈福 斋醮 酬神",yi:"订婚 嫁娶 开市 安葬"},{gz:11,sc:11,ji:"赴任 出行",yi:"祭祀 祈福 酬神 订婚 嫁娶 求财 入宅 安葬"},{gz:12,sc:0,ji:"祈福 求嗣",yi:"赴任 出行 求财 见贵 祭祀 酬神"},{gz:12,sc:1,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:12,sc:2,ji:"祭祀 祈福 斋醮 酬神 修造 动土",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 安葬 赴任 出行 见贵 求财"},{gz:12,sc:3,ji:"赴任 出行",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 见贵 求财 订婚 嫁娶 进人口"},{gz:12,sc:4,ji:"赴任 出行 祭祀 祈福 斋醮 开光",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:12,sc:5,ji:"赴任 出行 修造 动土 祭祀 祈福 斋醮 开光",yi:"求财 见贵 订婚 嫁娶 入宅 开市 安葬"},{gz:12,sc:6,ji:"诸事不宜",yi:""},{gz:12,sc:7,ji:"修造 动土 赴任 出行",yi:""},{gz:12,sc:8,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:12,sc:9,ji:"",yi:"修造 入宅 安葬 祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶 赴任"},{gz:12,sc:10,ji:"赴任 词讼 祈福 求嗣 乘船",yi:"见贵 求财 出行 嫁娶 进人口 移徙 安葬"},{gz:12,sc:11,ji:"祭祀 祈福 斋醮 酬神 开光 修造 安葬",yi:"求嗣 出行 求财 嫁娶"},{gz:13,sc:0,ji:"祭祀 祈福 斋醮 酬神 修造 动土",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:13,sc:1,ji:"造船 乘船",yi:"赴任 出行 见贵 求财 嫁娶 进人口 移徙 安葬 祈福"},{gz:13,sc:2,ji:"祭祀 祈福 斋醮 酬神 开光 修造 安葬",yi:"订婚 嫁娶 开市"},{gz:13,sc:3,ji:"赴任 出行 祭祀 祈福 斋醮 开光",yi:"酬神 修造 作灶"},{gz:13,sc:4,ji:"修造 动土",yi:""},{gz:13,sc:5,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 修造 盖屋 移徙 赴任"},{gz:13,sc:6,ji:"上梁 盖屋 入殓 赴任 修造 移徙 出行 词讼",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:13,sc:7,ji:"诸事不宜",yi:""},{gz:13,sc:8,ji:"祈福 求嗣 赴任 出行 求财",yi:"作灶 祭祀 斋醮 酬神 修造"},{gz:13,sc:9,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:13,sc:10,ji:"赴任 出行 修造 动土",yi:"祈福 订婚 嫁娶 安床 移徙 入宅 安葬"},{gz:13,sc:11,ji:"",yi:"赴任 出行 求财 见贵 祭祀 祈福 酬神 修造 盖屋 移徙 作灶 安床 入宅 开市"},{gz:14,sc:0,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"订婚 嫁娶 开市 安葬 见贵 求财"},{gz:14,sc:1,ji:"祭祀 祈福 斋醮 酬神",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市 出行 求财 见贵 订婚 嫁娶"},{gz:14,sc:2,ji:"赴任 词讼",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 祈福 订婚"},{gz:14,sc:3,ji:"诸事不宜",yi:"入宅 修造 安葬 赴任 出行 求财 见贵 祭祀 祈福 酬神"},{gz:14,sc:4,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任 见贵"},{gz:14,sc:5,ji:"开光 修造 安葬",yi:"入宅 赴任 出行 求财 见贵 订婚 嫁娶"},{gz:14,sc:6,ji:"祈福 求嗣",yi:"订婚 嫁娶 移徙 开市 修造 入宅 安葬"},{gz:14,sc:7,ji:"",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 祭祀 祈福 酬神 出行 求财 见贵 订婚"},{gz:14,sc:8,ji:"诸事不宜",yi:""},{gz:14,sc:9,ji:"祭祀 祈福 斋醮 酬神 赴任 出行 修造 动土",yi:""},{gz:14,sc:10,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"作灶 酬神 修造"},{gz:14,sc:11,ji:"赴任 出行 修造 祭祀 祈福 斋醮 开光",yi:"合脊 嫁娶 安葬"},{gz:15,sc:0,ji:"",yi:"祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶 修造 安葬 作灶"},{gz:15,sc:1,ji:"赴任 出行 修造",yi:"祭祀 祈福 求嗣 斋醮 订婚 嫁娶 安葬"},{gz:15,sc:2,ji:"上梁 盖屋 入殓 祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:15,sc:3,ji:"造船 乘船",yi:"修造 入宅 安葬"},{gz:15,sc:4,ji:"赴任 词讼 祈福 求嗣 乘船",yi:"祭祀 斋醮 订婚 嫁娶 出行 安葬"},{gz:15,sc:5,ji:"开光 修造 安葬",yi:"赴任 出行 见贵 求财 嫁娶 入宅 移徙 求嗣"},{gz:15,sc:6,ji:"修造 动土",yi:"祈福 订婚 嫁娶 开市 安葬 赴任 出行 求财 见贵"},{gz:15,sc:7,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:15,sc:8,ji:"赴任 出行 求财 祭祀 祈福 斋醮 开光",yi:"求嗣 嫁娶 安葬"},{gz:15,sc:9,ji:"诸事不宜",yi:""},{gz:15,sc:10,ji:"赴任 修造 移徙 出行 词讼",yi:"祭祀 祈福 合脊 嫁娶 安葬"},{gz:15,sc:11,ji:"赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 见贵"},{gz:16,sc:0,ji:"上梁 盖屋 入殓 赴任 修造 移徙 出行 词讼",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:16,sc:1,ji:"赴任 出行 修造 动土",yi:"入宅 安葬 祭祀 祈福 酬神 求财 见贵 订婚 嫁娶"},{gz:16,sc:2,ji:"祈福 求嗣",yi:"作灶 祭祀 斋醮 酬神 修造 赴任 出行 见贵 求财 嫁娶 入宅 移徙 安葬"},{gz:16,sc:3,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 修造 入宅 求财 开市 交易 安葬 赴任 出行 见贵"},{gz:16,sc:4,ji:"造桥 乘船 修造 动土",yi:"祈福 订婚 嫁娶 安床 移徙 入宅 安葬 赴任 出行 求财 见贵"},{gz:16,sc:5,ji:"",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 祭祀 祈福 斋醮 酬神"},{gz:16,sc:6,ji:"赴任 词讼 祭祀 祈福 斋醮 开光",yi:"出行 求财 见贵 酬神"},{gz:16,sc:7,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"见贵 求财 嫁娶 进人口 移徙 安葬 酬神"},{gz:16,sc:8,ji:"开光 修造 安葬",yi:"赴任 出行 求财 见贵 订婚 嫁娶 入宅 开市 祈福 求嗣"},{gz:16,sc:9,ji:"",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 祭祀 祈福 斋醮 酬神"},{gz:16,sc:10,ji:"诸事不宜",yi:""},{gz:16,sc:11,ji:"",yi:"修造 入宅 安葬 赴任 出行 见贵 求财 订婚 嫁娶 进人口 移徙"},{gz:17,sc:0,ji:"祈福 求嗣",yi:"嫁娶 移徙 入宅 开市 交易 修造 安葬 赴任 出行 求财"},{gz:17,sc:1,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 修造 安葬 赴任"},{gz:17,sc:2,ji:"修造 动土 赴任 出行",yi:"祭祀 祈福 酬神 求财 见贵 订婚 嫁娶 安葬"},{gz:17,sc:3,ji:"赴任 出行 修造 动土 祭祀 祈福 斋醮 酬神",yi:"求财 嫁娶 移徙 开市 安葬"},{gz:17,sc:4,ji:"祭祀 祈福 斋醮 酬神",yi:"作灶 修造"},{gz:17,sc:5,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"酬神 订婚 嫁娶 求财 入宅 安葬"},{gz:17,sc:6,ji:"",yi:"祈福 订婚 嫁娶 安床 移徙 入宅 修造 安葬 祭祀 赴任 出行 求财 见贵"},{gz:17,sc:7,ji:"",yi:"祭祀 祈福 求嗣 斋醮 出行 嫁娶 安葬 修造 盖屋 移徙 作灶 安床 入宅 开市"},{gz:17,sc:8,ji:"上梁 盖屋 入殓",yi:"祭祀 祈福 合脊 嫁娶 修造 安葬 求嗣"},{gz:17,sc:9,ji:"赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:17,sc:10,ji:"祈福 求嗣 乘船",yi:"订婚 嫁娶 开市 安葬"},{gz:17,sc:11,ji:"诸事不宜",yi:""},{gz:18,sc:0,ji:"诸事不宜",yi:""},{gz:18,sc:1,ji:"修造 动土",yi:"祭祀 祈福 斋醮 酬神 作灶"},{gz:18,sc:2,ji:"祭祀 祈福 斋醮 酬神 开光 修造 安葬",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:18,sc:3,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 酬神 求财 见贵 订婚 嫁娶"},{gz:18,sc:4,ji:"赴任 修造 移徙 出行 词讼",yi:"祭祀 祈福 酬神 订婚 嫁娶 求财 入宅 安葬"},{gz:18,sc:5,ji:"祭祀 祈福 斋醮 酬神 赴任 出行 修造 动土",yi:"求财 见贵"},{gz:18,sc:6,ji:"上梁 盖屋 入殓 赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 作灶 祭祀"},{gz:18,sc:7,ji:"赴任 出行 修造",yi:"祭祀 祈福 合脊 嫁娶 安葬"},{gz:18,sc:8,ji:"祈福 求嗣",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬 赴任 出行 见贵 求财"},{gz:18,sc:9,ji:"赴任 出行 求财",yi:"祈福 求嗣 订婚 嫁娶 修造 入宅 开市 交易 安葬"},{gz:18,sc:10,ji:"赴任 词讼 修造 动土",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 见贵"},{gz:18,sc:11,ji:"诸事不宜",yi:"祈福 求嗣 出行 求财 嫁娶 安葬 赴任 见贵"},{gz:19,sc:0,ji:"赴任 词讼 祭祀 祈福 斋醮 开光",yi:"出行 求财 见贵 订婚 嫁娶 入宅 开市 安葬 求嗣"},{gz:19,sc:1,ji:"诸事不宜",yi:""},{gz:19,sc:2,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 修造 入宅 开市 交易 安葬"},{gz:19,sc:3,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:19,sc:4,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:19,sc:5,ji:"开光 修造 安葬",yi:"盖屋 移徙 安床 入宅 开市 开仓 祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶"},{gz:19,sc:6,ji:"祈福 求嗣 祭祀",yi:"订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:19,sc:7,ji:"赴任 出行",yi:"见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:19,sc:8,ji:"修造 动土",yi:"作灶 祭祀 祈福 斋醮 酬神 赴任 出行 求财 见贵 嫁娶 进人口 移徙 安葬"},{gz:19,sc:9,ji:"赴任 出行 求财",yi:""},{gz:19,sc:10,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬"},{gz:19,sc:11,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床 修造 盖屋 移徙 作灶"},{gz:20,sc:0,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:20,sc:1,ji:"",yi:"祈福 求嗣 出行 求财 嫁娶 安葬 修造 盖屋 移徙 作灶 安床 入宅 开市 赴任"},{gz:20,sc:2,ji:"诸事不宜",yi:""},{gz:20,sc:3,ji:"诸事不宜",yi:"修造 入宅 安葬 求嗣 嫁娶 移徙 祭祀 祈福 斋醮 酬神"},{gz:20,sc:4,ji:"祈福 求嗣",yi:"祭祀 出行 订婚 嫁娶 入宅 修造 安葬"},{gz:20,sc:5,ji:"开光 修造 安葬",yi:"祭祀 祈福 合脊 嫁娶"},{gz:20,sc:6,ji:"赴任 出行  修造 动土",yi:"祈福 订婚 嫁娶 移徙 入宅 安葬"},{gz:20,sc:7,ji:"祭祀 祈福 斋醮 酬神",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 出行 求财 见贵 订婚 嫁娶"},{gz:20,sc:8,ji:"祭祀 祈福 斋醮 酬神 赴任 修造 移徙 出行 词讼",yi:"求嗣 嫁娶 入宅 开市 交易 安葬"},{gz:20,sc:9,ji:"赴任 出行 修造 动土 祭祀 祈福 斋醮 开光",yi:"求财 见贵 酬神"},{gz:20,sc:10,ji:"",yi:"作灶 祭祀 祈福 斋醮 酬神 修造 赴任 出行 求财 见贵 嫁娶 进人口 移徙 安葬"},{gz:20,sc:11,ji:"",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 祈福"},{gz:21,sc:0,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 出行 求财 嫁娶 安葬 作灶 祭祀"},{gz:21,sc:1,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:21,sc:2,ji:"祈福 求嗣",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬 赴任 见贵 出行 求财"},{gz:21,sc:3,ji:"诸事不宜",yi:""},{gz:21,sc:4,ji:"修造 动土",yi:"祭祀 祈福 合脊 嫁娶 安葬"},{gz:21,sc:5,ji:"赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:21,sc:6,ji:"赴任 出行 求财 祭祀 祈福 斋醮 开光",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 订婚"},{gz:21,sc:7,ji:"赴任 出行 求财 祭祀 祈福 斋醮 开光",yi:"酬神 修造 作灶"},{gz:21,sc:8,ji:"祭祀 祈福 斋醮 酬神 开光 修造 安葬",yi:"赴任 出行 求财 见贵"},{gz:21,sc:9,ji:"造桥 乘船",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 赴任 出行 求财 嫁娶"},{gz:21,sc:10,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:21,sc:11,ji:"赴任 出行 修造 动土",yi:"祭祀 祈福 酬神 订婚 嫁娶 求财 入宅 安葬"},{gz:22,sc:0,ji:"赴任 修造 移徙 出行 词讼 祈福 求嗣",yi:"求财 见贵 祭祀 酬神"},{gz:22,sc:1,ji:"赴任 出行",yi:"修造 安葬 求财 见贵 嫁娶 进人口 移徙"},{gz:22,sc:2,ji:"修造 动土",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 作灶 祭祀"},{gz:22,sc:3,ji:"赴任 出行 修造",yi:"祭祀 祈福 合脊 嫁娶 安葬"},{gz:22,sc:4,ji:"诸事不宜",yi:""},{gz:22,sc:5,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求财 见贵 订婚 嫁娶 入宅 开市 安葬 修造 盖屋 移徙 作灶 安床"},{gz:22,sc:6,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:22,sc:7,ji:"赴任 出行",yi:"见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:22,sc:8,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任 见贵"},{gz:22,sc:9,ji:"祭祀 祈福 斋醮 酬神",yi:"修造 入宅 安葬 出行 求财 见贵 订婚 嫁娶"},{gz:22,sc:10,ji:"造船 乘船 祈福 求嗣",yi:"祭祀 斋醮 订婚 嫁娶 出行 安葬"},{gz:22,sc:11,ji:"开光 修造 安葬",yi:"盖屋 移徙 安床 入宅 开市 开仓 祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶"},{gz:23,sc:0,ji:"修造 动土",yi:"赴任 出行 求财 嫁娶 移徙 开市 安葬"},{gz:23,sc:1,ji:"",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 赴任 出行 见贵 求财 订婚 嫁娶 进人口"},{gz:23,sc:2,ji:"祭祀 祈福 斋醮 酬神",yi:"合脊 嫁娶 修造 安葬"},{gz:23,sc:3,ji:"赴任 出行 修造 动土 祭祀 祈福 斋醮 开光",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:23,sc:4,ji:"",yi:"作灶 祭祀 祈福 斋醮 酬神 修造 赴任 见贵 求财 出行 嫁娶 进人口 移徙 安葬"},{gz:23,sc:5,ji:"诸事不宜",yi:""},{gz:23,sc:6,ji:"修造 动土",yi:"祈福 求嗣 出行 求财 嫁娶 安葬"},{gz:23,sc:7,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 修造 入宅 安葬 祭祀"},{gz:23,sc:8,ji:"赴任 词讼 祈福 求嗣 乘船",yi:"入宅 修造 安葬"},{gz:23,sc:9,ji:"诸事不宜",yi:"祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶 修造 安葬"},{gz:23,sc:10,ji:"祭祀 祈福 斋醮 酬神 修造 动土",yi:"订婚 嫁娶 开市 安葬"},{gz:23,sc:11,ji:"赴任 出行",yi:"求财 见贵 祭祀 祈福 酬神"},{gz:24,sc:0,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"订婚 嫁娶 开市 安葬 见贵 求财"},{gz:24,sc:1,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"合脊 嫁娶 修造 安葬"},{gz:24,sc:2,ji:"赴任 出行",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 见贵 求财"},{gz:24,sc:3,ji:"赴任 出行",yi:"求财 见贵 祭祀 祈福 酬神 修造 盖屋 移徙 安床 入宅 开市 开仓"},{gz:24,sc:4,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:24,sc:5,ji:"开光 修造 安葬",yi:"入宅 赴任 出行 求财 见贵 订婚 嫁娶"},{gz:24,sc:6,ji:"诸事不宜",yi:""},{gz:24,sc:7,ji:"赴任 出行 修造",yi:"祈福 求嗣 求财 嫁娶 安葬"},{gz:24,sc:8,ji:"修造 动土",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:24,sc:9,ji:"祭祀 祈福 斋醮 酬神",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市 赴任 出行 求财 嫁娶"},{gz:24,sc:10,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:24,sc:11,ji:"祭祀 祈福 斋醮 酬神",yi:"赴任 见贵 出行 求财 嫁娶 进人口 移徙 安葬"},{gz:25,sc:0,ji:"",yi:"祈福 求嗣 出行 求财 嫁娶 安葬"},{gz:25,sc:1,ji:"造船 乘船 赴任 出行",yi:"见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:25,sc:2,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:25,sc:3,ji:"",yi:"修造 入宅 安葬 祈福 斋醮 出行 订婚 嫁娶 祭祀"},{gz:25,sc:4,ji:"祈福 求嗣",yi:""},{gz:25,sc:5,ji:"开光 修造 安葬",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 盖屋 移徙"},{gz:25,sc:6,ji:"修造 动土",yi:"祈福 求嗣 出行 求财 嫁娶 安葬 赴任"},{gz:25,sc:7,ji:"诸事不宜",yi:""},{gz:25,sc:8,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"作灶 酬神 修造 见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:25,sc:9,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:25,sc:10,ji:"赴任 出行",yi:"祈福 订婚 嫁娶 安床 移徙 入宅 修造 安葬 祭祀"},{gz:25,sc:11,ji:"赴任 出行",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市 祈福 嫁娶 见贵 求财"},{gz:26,sc:0,ji:"上梁 盖屋 入殓",yi:"祈福 订婚 嫁娶 安床 移徙 入宅 修造 安葬 赴任 出行 求财"},{gz:26,sc:1,ji:"祭祀 祈福 斋醮 酬神",yi:"出行 求财 见贵 订婚 嫁娶 修造 安葬"},{gz:26,sc:2,ji:"赴任 词讼 祈福 求嗣 乘船",yi:"嫁娶 移徙 入宅 开市 交易 修造 安葬"},{gz:26,sc:3,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 修造 入宅 求财 开市 交易 安葬"},{gz:26,sc:4,ji:"修造 动土",yi:"祈福 斋醮 出行 订婚 嫁娶 移徙 开市 安葬 赴任 见贵 求财"},{gz:26,sc:5,ji:"",yi:"祭祀 祈福 斋醮 酬神 修造 作灶 求嗣 嫁娶 移徙 入宅 开市 交易"},{gz:26,sc:6,ji:"赴任 出行 求财 祭祀 祈福 斋醮 开光",yi:"求嗣 订婚 嫁娶 开市 交易 安床"},{gz:26,sc:7,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 酬神 求财 见贵 订婚 嫁娶"},{gz:26,sc:8,ji:"诸事不宜",yi:""},{gz:26,sc:9,ji:"赴任 出行 修造 动土",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 安葬 祈福"},{gz:26,sc:10,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 作灶 祭祀"},{gz:26,sc:11,ji:"赴任 出行 修造",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 入宅 安葬"},{gz:27,sc:0,ji:"祈福 求嗣 赴任 出行",yi:"作灶 祭祀 斋醮 酬神 修造 嫁娶 移徙 入宅 开市 交易"},{gz:27,sc:1,ji:"赴任 出行 修造",yi:"安葬 祭祀 祈福 求嗣 斋醮 订婚 嫁娶"},{gz:27,sc:2,ji:"祭祀 祈福 斋醮 酬神 上梁 盖屋 入殓",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬"},{gz:27,sc:3,ji:"祭祀 祈福 斋醮 酬神",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市"},{gz:27,sc:4,ji:"赴任 词讼 祭祀 祈福 斋醮 开光",yi:"求嗣 订婚 嫁娶 出行 安葬"},{gz:27,sc:5,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"酬神 订婚 嫁娶 求财 入宅 安葬"},{gz:27,sc:6,ji:"赴任 出行 求财",yi:"祭祀 祈福 酬神 见贵 订婚 嫁娶 修造 安葬"},{gz:27,sc:7,ji:"",yi:"祭祀 祈福 出行 订婚 嫁娶 入宅 修造 安葬"},{gz:27,sc:8,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:27,sc:9,ji:"诸事不宜",yi:""},{gz:27,sc:10,ji:"赴任 修造 移徙 出行 词讼 祈福 求嗣 乘船",yi:"订婚 嫁娶 求财 开市 交易 安床"},{gz:27,sc:11,ji:"赴任 出行 修造 动土 开光",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 见贵"},{gz:28,sc:0,ji:"修造 动土 赴任",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:28,sc:1,ji:"赴任 出行 修造 动土",yi:"求财 见贵 嫁娶 进人口 移徙 安葬 祈福"},{gz:28,sc:2,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"见贵 求财 嫁娶 入宅 移徙 安葬"},{gz:28,sc:3,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 出行 求财 见贵 订婚"},{gz:28,sc:4,ji:"造桥 乘船",yi:"祈福 订婚 嫁娶 安床 移徙 入宅 修造 安葬 祭祀"},{gz:28,sc:5,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 出行 入宅 嫁娶 修造 安葬 赴任"},{gz:28,sc:6,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:28,sc:7,ji:"诸事不宜",yi:"修造 入宅 安葬 祈福 嫁娶"},{gz:28,sc:8,ji:"祈福 求嗣",yi:"订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:28,sc:9,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:28,sc:10,ji:"诸事不宜",yi:""},{gz:28,sc:11,ji:"",yi:"赴任 出行 求财 见贵 订婚 嫁娶 入宅 开市 安葬 修造 盖屋 移徙 安床"},{gz:29,sc:0,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 求财 嫁娶 安葬"},{gz:29,sc:1,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 求嗣 订婚 嫁娶 求财"},{gz:29,sc:2,ji:"祭祀 祈福 斋醮 酬神 赴任 出行",yi:""},{gz:29,sc:3,ji:"",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 祭祀 祈福 酬神 出行 求财 见贵"},{gz:29,sc:4,ji:"上梁 盖屋 入殓 祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 作灶"},{gz:29,sc:5,ji:"开光 修造 安葬",yi:"入宅 祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶 赴任"},{gz:29,sc:6,ji:"祈福 求嗣 乘船",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬"},{gz:29,sc:7,ji:"赴任 出行",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市 祭祀 祈福 求嗣 斋醮 订婚 嫁娶 安葬"},{gz:29,sc:8,ji:"修造 动土",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:29,sc:9,ji:"赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:29,sc:10,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"订婚 嫁娶 开市 安葬"},{gz:29,sc:11,ji:"诸事不宜",yi:""},{gz:30,sc:0,ji:"诸事不宜",yi:""},{gz:30,sc:1,ji:"",yi:"祭祀 祈福 斋醮 酬神 修造 作灶"},{gz:30,sc:2,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任 祭祀"},{gz:30,sc:3,ji:"",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 赴任 出行 见贵 求财 订婚"},{gz:30,sc:4,ji:"赴任 修造 移徙 出行 词讼 祈福 求嗣 乘船",yi:"祭祀 斋醮 订婚 嫁娶 安葬"},{gz:30,sc:5,ji:"赴任 出行 修造 动土 祭祀 祈福 斋醮 酬神 开光",yi:"订婚 嫁娶 移徙 入宅 安葬"},{gz:30,sc:6,ji:"赴任 出行 修造 动土",yi:"祈福 嫁娶 造庙 作灶 入宅 安葬"},{gz:30,sc:7,ji:"赴任 出行 修造",yi:"祈福 求嗣 求财 嫁娶 安葬"},{gz:30,sc:8,ji:"祭祀 祈福 斋醮 酬神",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬 赴任 出行 见贵 求财"},{gz:30,sc:9,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求财 见贵 酬神 修造 盖屋 移徙 作灶 安床 入宅 开市"},{gz:30,sc:10,ji:"赴任 词讼",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 见贵"},{gz:30,sc:11,ji:"诸事不宜",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 赴任 见贵 出行 求财"},{gz:31,sc:0,ji:"上梁 盖屋 入殓 赴任 词讼",yi:"祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶 修造 安葬"},{gz:31,sc:1,ji:"诸事不宜",yi:""},{gz:31,sc:2,ji:"祈福 求嗣",yi:"嫁娶 移徙 入宅 开市 交易 修造 安葬 订婚"},{gz:31,sc:3,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:31,sc:4,ji:"修造 动土",yi:""},{gz:31,sc:5,ji:"赴任 出行",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 见贵 求财 嫁娶"},{gz:31,sc:6,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:31,sc:7,ji:"造船 乘船 赴任 出行 修造 动土 祭祀 祈福 斋醮 开光",yi:"见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:31,sc:8,ji:"祭祀 祈福 斋醮 酬神 开光 修造 安葬",yi:"求嗣 出行 求财 嫁娶"},{gz:31,sc:9,ji:"赴任 出行 修造",yi:""},{gz:31,sc:10,ji:"上梁 盖屋 入殓 赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:31,sc:11,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀 修造 盖屋 移徙 作灶"},{gz:32,sc:0,ji:"祈福 求嗣",yi:"订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:32,sc:1,ji:"",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市 祈福 求嗣 订婚 嫁娶 赴任 见贵 求财"},{gz:32,sc:2,ji:"诸事不宜",yi:""},{gz:32,sc:3,ji:"诸事不宜",yi:"赴任 出行 见贵 求财 嫁娶 进人口 移徙 安葬 祭祀 祈福 斋醮 酬神"},{gz:32,sc:4,ji:"赴任 出行 求财 祭祀 祈福 斋醮 开光",yi:"求嗣 订婚 嫁娶 开市 交易 安床"},{gz:32,sc:5,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:32,sc:6,ji:"诸事不宜",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 祈福"},{gz:32,sc:7,ji:"祭祀 祈福 斋醮 酬神",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 求嗣 订婚 嫁娶"},{gz:32,sc:8,ji:"造船 乘船 上梁 盖屋 入殓 赴任 修造 移徙 出行 词讼",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:32,sc:9,ji:"赴任 出行 修造 动土",yi:"祭祀 祈福 酬神 求财 见贵 订婚 嫁娶 安葬"},{gz:32,sc:10,ji:"祈福 求嗣 乘船",yi:"作灶 祭祀 斋醮 酬神 修造"},{gz:32,sc:11,ji:"赴任 出行 修造 开光",yi:"祈福 求嗣 求财 嫁娶 安葬"},{gz:33,sc:0,ji:"修造 动土",yi:"作灶 祭祀 祈福 斋醮 酬神"},{gz:33,sc:1,ji:"赴任 出行 修造",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 祭祀"},{gz:33,sc:2,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬"},{gz:33,sc:3,ji:"诸事不宜",yi:""},{gz:33,sc:4,ji:"赴任 词讼",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:33,sc:5,ji:"赴任 出行 求财",yi:"祈福 求嗣 订婚 嫁娶 开市 交易 安床"},{gz:33,sc:6,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:33,sc:7,ji:"",yi:"祈福 求嗣 订婚 嫁娶 修造 入宅 开市 交易 安葬 祭祀"},{gz:33,sc:8,ji:"祈福 求嗣 乘船 祭祀",yi:""},{gz:33,sc:9,ji:"造桥 乘船",yi:"祭祀 祈福 酬神 订婚 嫁娶 出行 求财 入宅 安葬 求嗣"},{gz:33,sc:10,ji:"赴任 修造 移徙 出行 词讼",yi:"见贵 求财 嫁娶 进人口 安葬"},{gz:33,sc:11,ji:"赴任 出行 修造 动土",yi:"求财 见贵 祭祀 祈福 酬神"},{gz:34,sc:0,ji:"赴任 修造 移徙 出行 词讼 祭祀 祈福 斋醮 开光",yi:"见贵 求财 嫁娶 进人口 安葬 求嗣 订婚"},{gz:34,sc:1,ji:"赴任 出行 祭祀 祈福 斋醮 开光",yi:"酬神 求财 见贵 订婚 嫁娶 修造 安葬"},{gz:34,sc:2,ji:"赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:34,sc:3,ji:"赴任 出行 修造",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 入宅 安葬"},{gz:34,sc:4,ji:"诸事不宜",yi:""},{gz:34,sc:5,ji:"赴任 出行 求财 开光 修造 安葬",yi:"见贵 订婚 嫁娶 入宅 开市"},{gz:34,sc:6,ji:"祈福 求嗣",yi:"订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:34,sc:7,ji:"诸事不宜",yi:"祈福 求嗣 出行 入宅 嫁娶 修造 安葬 赴任 见贵 求财"},{gz:34,sc:8,ji:"修造 动土",yi:"祭祀 祈福 酬神 订婚 嫁娶 出行 求财 入宅 安葬 赴任 见贵"},{gz:34,sc:9,ji:"祭祀 祈福 斋醮 酬神",yi:"出行 订婚 嫁娶 修造 移徙 开市 安葬"},{gz:34,sc:10,ji:"造船 乘船  祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 订婚 嫁娶 安葬"},{gz:34,sc:11,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 见贵 求财 订婚 嫁娶 进人口"},{gz:35,sc:0,ji:"诸事不宜",yi:"祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶 修造 安葬 赴任"},{gz:35,sc:1,ji:"赴任 出行",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 见贵 求财 嫁娶 进人口"},{gz:35,sc:2,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:35,sc:3,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 修造 入宅 安葬 赴任"},{gz:35,sc:4,ji:"祈福 求嗣 乘船",yi:"作灶 祭祀 斋醮 酬神 修造 赴任 见贵 求财 出行 嫁娶 进人口 移徙 安葬"},{gz:35,sc:5,ji:"诸事不宜",yi:""},{gz:35,sc:6,ji:"修造 动土",yi:"祈福 订婚 嫁娶 安床 移徙 入宅 安葬 赴任 出行 求财 见贵"},{gz:35,sc:7,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:35,sc:8,ji:"赴任 词讼 祭祀 祈福 斋醮 开光",yi:"求嗣 出行 求财 嫁娶 安葬"},{gz:35,sc:9,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬"},{gz:35,sc:10,ji:"祭祀 祈福 斋醮 酬神",yi:"订婚 嫁娶 开市 安葬"},{gz:35,sc:11,ji:"赴任 出行 造桥 乘船",yi:"祭祀 祈福 斋醮 酬神 修造 作灶"},{gz:36,sc:0,ji:"造船 乘船 上梁 盖屋 入殓 赴任 出行",yi:"祈福 订婚 嫁娶 开市 安葬"},{gz:36,sc:1,ji:"",yi:"祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶 修造 安葬"},{gz:36,sc:2,ji:"祈福 求嗣",yi:"赴任 见贵 出行 求财 嫁娶 进人口 移徙 安葬"},{gz:36,sc:3,ji:"",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 祈福 求嗣 订婚 嫁娶 赴任 出行 见贵"},{gz:36,sc:4,ji:"赴任 修造 移徙 出行 词讼",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:36,sc:5,ji:"赴任 出行 修造 动土",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 安葬"},{gz:36,sc:6,ji:"诸事不宜",yi:""},{gz:36,sc:7,ji:"赴任 出行 祭祀 祈福 斋醮 开光",yi:"酬神 求财 见贵 订婚 嫁娶 修造 安葬"},{gz:36,sc:8,ji:"开光 修造 安葬",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任 入宅"},{gz:36,sc:9,ji:"",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 祈福 赴任 出行 求财"},{gz:36,sc:10,ji:"上梁 盖屋 入殓 赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 见贵"},{gz:36,sc:11,ji:"祭祀 祈福 斋醮 酬神",yi:"赴任 见贵 出行 求财 嫁娶 进人口 移徙 安葬 修造 入宅"},{gz:37,sc:0,ji:"祈福 求嗣",yi:"订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:37,sc:1,ji:"造船 乘船",yi:"修造 安葬"},{gz:37,sc:2,ji:"修造 动土",yi:"祈福 求嗣 出行 求财 嫁娶 安葬"},{gz:37,sc:3,ji:"祭祀 祈福 斋醮 酬神",yi:"修造 作灶"},{gz:37,sc:4,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"见贵 求财 嫁娶 进人口 移徙 安葬 入宅 修造"},{gz:37,sc:5,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床 修造 盖屋 移徙"},{gz:37,sc:6,ji:"",yi:"祈福 求嗣 出行 求财 嫁娶 安葬 赴任"},{gz:37,sc:7,ji:"诸事不宜",yi:""},{gz:37,sc:8,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 作灶 祭祀 赴任 见贵"},{gz:37,sc:9,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 修造 入宅 安葬 赴任"},{gz:37,sc:10,ji:"祈福 求嗣 乘船",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬 祭祀"},{gz:37,sc:11,ji:"开光 修造 安葬",yi:"盖屋 移徙 作灶 安床 入宅 开市 赴任 出行 见贵 求财 嫁娶"},{gz:38,sc:0,ji:"修造 动土",yi:"祈福 订婚 嫁娶 安床 移徙 入宅 安葬 求嗣 赴任 出行 求财"},{gz:38,sc:1,ji:"祭祀 祈福 斋醮 酬神",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市 求嗣 订婚 嫁娶"},{gz:38,sc:2,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:""},{gz:38,sc:3,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"酬神 求财 见贵 订婚 嫁娶 修造 安葬"},{gz:38,sc:4,ji:"赴任 出行 求财",yi:"祈福 订婚 嫁娶 开市 安葬 祭祀 见贵"},{gz:38,sc:5,ji:"祭祀 祈福 斋醮 酬神",yi:"出行 求财 见贵 订婚 嫁娶 修造 安葬"},{gz:38,sc:6,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:38,sc:7,ji:"",yi:"修造 入宅 安葬 赴任 出行 求财 见贵 嫁娶 进人口 移徙 祭祀 祈福 求嗣 斋醮"},{gz:38,sc:8,ji:"诸事不宜",yi:""},{gz:38,sc:9,ji:"赴任 出行 修造 动土",yi:"祈福 求嗣 订婚 嫁娶 入宅 求财 开市 交易 安葬 祭祀"},{gz:38,sc:10,ji:"修造 动土",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 作灶 祭祀"},{gz:38,sc:11,ji:"赴任 出行 修造",yi:"祈福 求嗣 求财 嫁娶 安葬"},{gz:39,sc:0,ji:"赴任 出行 祭祀 祈福 斋醮 开光",yi:"求财 见贵 订婚 嫁娶 入宅 开市 安葬 求嗣"},{gz:39,sc:1,ji:"赴任 出行 修造 祭祀 祈福 斋醮 开光",yi:"求嗣 订婚 嫁娶 安葬"},{gz:39,sc:2,ji:"祭祀 祈福 斋醮 酬神",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬 赴任 见贵 出行 求财"},{gz:39,sc:3,ji:"",yi:"祈福 求嗣 出行 求财 嫁娶 安葬 修造 盖屋 移徙 作灶 安床 入宅 开市"},{gz:39,sc:4,ji:"上梁 盖屋 入殓 赴任 词讼",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:39,sc:5,ji:"开光 修造 安葬",yi:"祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶 赴任"},{gz:39,sc:6,ji:"祈福 求嗣 乘船",yi:"修造 安葬 订婚 嫁娶 开市"},{gz:39,sc:7,ji:"赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 祭祀"},{gz:39,sc:8,ji:"修造 动土",yi:"赴任 出行 求财 见贵 嫁娶 进人口 移徙 安葬"},{gz:39,sc:9,ji:"诸事不宜",yi:""},{gz:39,sc:10,ji:"赴任 修造 移徙 出行 词讼 祭祀 祈福 斋醮 开光",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:39,sc:11,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床 见贵"},{gz:40,sc:0,ji:"赴任 修造 移徙 出行 词讼",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:40,sc:1,ji:"赴任 出行 修造 动土",yi:"祈福 求嗣 入宅 嫁娶 安葬"},{gz:40,sc:2,ji:"上梁 盖屋 入殓",yi:"祭祀 祈福 酬神 订婚 嫁娶 出行 求财 入宅 安葬 赴任 作灶"},{gz:40,sc:3,ji:"祭祀 祈福 斋醮 酬神 赴任 出行 修造",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 安葬"},{gz:40,sc:4,ji:"赴任 出行 祈福 求嗣 乘船",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬"},{gz:40,sc:5,ji:"开光 修造 安葬",yi:"盖屋 移徙 作灶 安床 入宅 开市 祭祀 祈福 出行 订婚 嫁娶"},{gz:40,sc:6,ji:"赴任 出行 修造 动土",yi:"求财 嫁娶 移徙 开市 安葬"},{gz:40,sc:7,ji:"诸事不宜",yi:"祈福 求嗣 出行 入宅 嫁娶 修造 安葬 赴任 见贵 求财"},{gz:40,sc:8,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:40,sc:9,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:40,sc:10,ji:"诸事不宜",yi:""},{gz:40,sc:11,ji:"",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬"},{gz:41,sc:0,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 出行 求财 嫁娶 安葬"},{gz:41,sc:1,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 修造 入宅 安葬 赴任 见贵"},{gz:41,sc:2,ji:"赴任 修造 移徙 出行 词讼 祈福 求嗣 乘船",yi:"订婚 嫁娶 入宅 安葬"},{gz:41,sc:3,ji:"赴任 出行 修造 动土",yi:"求财 见贵 订婚 嫁娶 入宅 开市 安葬 祈福 求嗣"},{gz:41,sc:4,ji:"祭祀 祈福 斋醮 酬神 修造 动土",yi:"作灶 赴任 见贵 求财 出行 嫁娶 进人口 移徙 安葬"},{gz:41,sc:5,ji:"赴任 出行 造船 乘船",yi:"祈福 嫁娶 修造 盖屋 造庙 作灶 入宅 安葬 见贵 求财"},{gz:41,sc:6,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬 求嗣"},{gz:41,sc:7,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市 求嗣 订婚 嫁娶"},{gz:41,sc:8,ji:"祭祀 祈福 斋醮 酬神 开光 修造 安葬",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:41,sc:9,ji:"诸事不宜",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:41,sc:10,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:41,sc:11,ji:"诸事不宜",yi:""},{gz:42,sc:0,ji:"诸事不宜",yi:""},{gz:42,sc:1,ji:"",yi:"祭祀 祈福 斋醮 酬神 修造 作灶"},{gz:42,sc:2,ji:"祭祀 祈福 斋醮 酬神 修造 动土",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:42,sc:3,ji:"",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 祈福 求嗣 订婚 嫁娶 赴任 出行 见贵"},{gz:42,sc:4,ji:"赴任 出行 祭祀 祈福 斋醮 开光",yi:"求嗣 订婚 嫁娶 安葬 入宅 修造"},{gz:42,sc:5,ji:"祭祀 祈福 斋醮 酬神",yi:"赴任 出行 求财 见贵 订婚 嫁娶 入宅 开市 安葬"},{gz:42,sc:6,ji:"造桥 乘船",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 祈福 作灶 祭祀"},{gz:42,sc:7,ji:"赴任 出行 修造",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:42,sc:8,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:42,sc:9,ji:"",yi:"祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶 修造 安葬 赴任"},{gz:42,sc:10,ji:"祈福 求嗣 乘船",yi:"订婚 嫁娶 出行 求财 开市 交易 安床 赴任 见贵"},{gz:42,sc:11,ji:"开光 修造 安葬",yi:"祈福 求嗣 出行 求财 嫁娶 赴任 见贵"},{gz:43,sc:0,ji:"赴任 词讼 修造 动土",yi:""},{gz:43,sc:1,ji:"诸事不宜",yi:""},{gz:43,sc:2,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:""},{gz:43,sc:3,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:43,sc:4,ji:"赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 修造 入宅 开市 交易 安葬"},{gz:43,sc:5,ji:"",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 求嗣 嫁娶 赴任 出行 见贵 求财"},{gz:43,sc:6,ji:"上梁 盖屋 入殓 祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:43,sc:7,ji:"赴任 出行 修造 动土",yi:"见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:43,sc:8,ji:"祈福 求嗣",yi:"赴任 见贵 出行 求财 嫁娶 进人口 移徙 安葬 订婚 作灶 祭祀"},{gz:43,sc:9,ji:"",yi:"祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶 修造 安葬 求嗣"},{gz:43,sc:10,ji:"赴任 出行 修造 动土",yi:"祈福 订婚 嫁娶 安床 移徙 入宅 安葬"},{gz:43,sc:11,ji:"",yi:"赴任 出行 求财 见贵 祭祀 祈福 酬神 修造 盖屋 移徙 作灶 安床 入宅 开市"},{gz:44,sc:0,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬 见贵 求财"},{gz:44,sc:1,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市 酬神 求财 见贵 订婚 嫁娶"},{gz:44,sc:2,ji:"诸事不宜",yi:""},{gz:44,sc:3,ji:"诸事不宜",yi:"入宅 修造 安葬 祈福 求嗣 订婚 嫁娶 赴任 出行 求财"},{gz:44,sc:4,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:44,sc:5,ji:"赴任 出行 开光 修造 安葬",yi:"祈福 斋醮 订婚 嫁娶 移徙 开市"},{gz:44,sc:6,ji:"祈福 求嗣",yi:"修造 安葬 嫁娶 移徙 入宅 开市 交易"},{gz:44,sc:7,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 出行 求财 嫁娶 安葬 修造 盖屋 移徙 安床 入宅 开市 开仓"},{gz:44,sc:8,ji:"赴任 修造 移徙 出行 词讼",yi:"祭祀 祈福 酬神 订婚 嫁娶 求财 入宅 安葬"},{gz:44,sc:9,ji:"祭祀 祈福 斋醮 酬神 赴任 出行 修造 动土",yi:""},{gz:44,sc:10,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"作灶 酬神 修造"},{gz:44,sc:11,ji:"赴任 出行 祭祀 祈福 斋醮 开光",yi:"嫁娶 修造 造庙 作灶 入宅 安葬"},{gz:45,sc:0,ji:"",yi:"祭祀 祈福 出行 订婚 嫁娶 入宅 修造 盖屋 安葬 作灶"},{gz:45,sc:1,ji:"赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 祭祀"},{gz:45,sc:2,ji:"修造 动土",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任 见贵"},{gz:45,sc:3,ji:"诸事不宜",yi:""},{gz:45,sc:4,ji:"赴任 词讼 祈福 求嗣 乘船",yi:"订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:45,sc:5,ji:"开光 修造 安葬",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:45,sc:6,ji:"修造 动土",yi:"祈福 订婚 嫁娶 开市 安葬 赴任 出行 求财 见贵"},{gz:45,sc:7,ji:"",yi:"祭祀 祈福 酬神 订婚 嫁娶 出行 求财 入宅 安葬"},{gz:45,sc:8,ji:"祭祀 祈福 斋醮 酬神",yi:"出行 求财 见贵 订婚 嫁娶 修造 安葬"},{gz:45,sc:9,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬"},{gz:45,sc:10,ji:"赴任 出行",yi:"见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:45,sc:11,ji:"赴任 出行",yi:"见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:46,sc:0,ji:"赴任 修造 移徙 出行 词讼 上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:46,sc:1,ji:"赴任 出行 修造 动土",yi:"祭祀 祈福 酬神 求财 见贵 订婚 嫁娶 安葬"},{gz:46,sc:2,ji:"祈福 求嗣 赴任 出行 求财",yi:"订婚 嫁娶 开市 交易 安床 作灶 祭祀"},{gz:46,sc:3,ji:"祭祀 祈福 斋醮 酬神 赴任 出行 修造",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:46,sc:4,ji:"诸事不宜",yi:""},{gz:46,sc:5,ji:"",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 祭祀 祈福 斋醮 酬神"},{gz:46,sc:6,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求财 见贵 酬神"},{gz:46,sc:7,ji:"赴任 出行  祭祀 祈福 斋醮 开光",yi:"酬神 求财 见贵 订婚 嫁娶 修造 安葬"},{gz:46,sc:8,ji:"开光 修造 安葬",yi:"祈福 订婚 嫁娶 开市 赴任 出行 求财 见贵"},{gz:46,sc:9,ji:"祭祀 祈福 斋醮 酬神",yi:"修造 作灶 求嗣 嫁娶 移徙 入宅 开市 交易"},{gz:46,sc:10,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:46,sc:11,ji:"",yi:"修造 入宅 安葬 赴任 出行 见贵 求财 订婚 嫁娶 进人口 移徙"},{gz:47,sc:0,ji:"祈福 求嗣",yi:"嫁娶 移徙 入宅 开市 交易 修造 安葬 赴任 出行 求财"},{gz:47,sc:1,ji:"",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 赴任 见贵 求财 出行 嫁娶 进人口"},{gz:47,sc:2,ji:"赴任 修造 移徙 出行 词讼",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 祭祀"},{gz:47,sc:3,ji:"祭祀 祈福 斋醮 酬神 赴任 出行 修造 动土",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:47,sc:4,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"作灶 酬神 修造 见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:47,sc:5,ji:"诸事不宜",yi:""},{gz:47,sc:6,ji:"",yi:"赴任 出行 求财 见贵 祭祀 祈福 酬神"},{gz:47,sc:7,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀 修造 盖屋 移徙 作灶"},{gz:47,sc:8,ji:"上梁 盖屋 入殓 赴任 词讼",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:47,sc:9,ji:"赴任 出行",yi:"求财 见贵 订婚 嫁娶 入宅 开市 安葬 修造"},{gz:47,sc:10,ji:"乘船 祈福 求嗣 祭祀",yi:"订婚 嫁娶 开市 安葬"},{gz:47,sc:11,ji:"造桥 乘船 开光 修造 安葬",yi:"祭祀 祈福 斋醮 酬神 作灶"},{gz:48,sc:0,ji:"造船 乘船 修造 动土",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 安葬 祈福 订婚"},{gz:48,sc:1,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:48,sc:2,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:""},{gz:48,sc:3,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 求财 嫁娶 安葬 修造 盖屋 移徙 安床 入宅 开市 开仓"},{gz:48,sc:4,ji:"赴任 修造 移徙 出行 词讼",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 祭祀"},{gz:48,sc:5,ji:"祭祀 祈福 斋醮 酬神 赴任 出行 修造 动土",yi:"求嗣 求财 嫁娶 安葬"},{gz:48,sc:6,ji:"诸事不宜",yi:""},{gz:48,sc:7,ji:"赴任 出行",yi:"修造 入宅 安葬 求财 见贵 嫁娶 进人口 移徙"},{gz:48,sc:8,ji:"祈福 求嗣",yi:"订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:48,sc:9,ji:"",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市 祈福 求嗣 订婚 嫁娶 赴任 出行 求财"},{gz:48,sc:10,ji:"修造 动土 赴任 词讼",yi:"见贵 求财 出行 嫁娶 进人口 移徙 安葬"},{gz:48,sc:11,ji:"祭祀 祈福 斋醮 酬神",yi:"赴任 出行 求财 见贵 订婚 嫁娶 入宅 开市 安葬"},{gz:49,sc:0,ji:"祭祀 祈福 斋醮 酬神",yi:"赴任 出行 求财 见贵 订婚 嫁娶 入宅 开市 安葬 求嗣"},{gz:49,sc:1,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:""},{gz:49,sc:2,ji:"祭祀 祈福 斋醮 酬神",yi:"订婚 嫁娶 开市 安葬"},{gz:49,sc:3,ji:"",yi:"祭祀 祈福 酬神 订婚 嫁娶 出行 求财 入宅 安葬 求嗣"},{gz:49,sc:4,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:49,sc:5,ji:"开光 修造 安葬",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀 盖屋 移徙"},{gz:49,sc:6,ji:"赴任 修造 移徙 出行 词讼 祈福 求嗣",yi:"求财 嫁娶 开市 安葬 订婚"},{gz:49,sc:7,ji:"诸事不宜",yi:""},{gz:49,sc:8,ji:"修造 动土",yi:"作灶 祭祀 祈福 斋醮 酬神 赴任 出行 求财 见贵 嫁娶 进人口 移徙 安葬"},{gz:49,sc:9,ji:"赴任 出行 修造",yi:"祭祀 祈福 订婚 嫁娶 入宅 盖屋 安葬"},{gz:49,sc:10,ji:"赴任 出行 祭祀 祈福 斋醮 开光",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬"},{gz:49,sc:11,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市 见贵 求财 嫁娶"},{gz:50,sc:0,ji:"赴任 出行 求财",yi:"祈福 订婚 嫁娶 安床 移徙 入宅 修造 安葬"},{gz:50,sc:1,ji:"祭祀 祈福 斋醮 酬神",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市 出行 求财 见贵 订婚 嫁娶 赴任"},{gz:50,sc:2,ji:"上梁 盖屋 入殓",yi:"祭祀 祈福 酬神 订婚 嫁娶 出行 求财 入宅 安葬 赴任"},{gz:50,sc:3,ji:"诸事不宜",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 赴任 出行 求财"},{gz:50,sc:4,ji:"祈福 求嗣 乘船",yi:"订婚 嫁娶 开市 安葬 赴任 见贵 求财 出行"},{gz:50,sc:5,ji:"赴任 出行 开光 修造 安葬",yi:"祈福 斋醮 订婚 嫁娶 移徙 开市 见贵"},{gz:50,sc:6,ji:"赴任 出行 修造 动土",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:50,sc:7,ji:"",yi:"祈福 求嗣 出行 求财 嫁娶 安葬 修造 盖屋 移徙 安床 入宅 开市 开仓 祭祀"},{gz:50,sc:8,ji:"诸事不宜",yi:""},{gz:50,sc:9,ji:"赴任 出行 修造 动土 祭祀 祈福 斋醮 开光",yi:"求财 见贵 酬神"},{gz:50,sc:10,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 作灶 祭祀 赴任"},{gz:50,sc:11,ji:"赴任 出行 修造",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:51,sc:0,ji:"上梁 盖屋 入殓 赴任 出行",yi:"作灶 祭祀 祈福 斋醮 酬神 修造"},{gz:51,sc:1,ji:"赴任 出行 修造",yi:"祭祀 祈福 酬神 订婚 嫁娶 求财 入宅 安葬"},{gz:51,sc:2,ji:"祭祀 祈福 斋醮 酬神 乘船",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬"},{gz:51,sc:3,ji:"",yi:"赴任 出行 求财 见贵 订婚 嫁娶 入宅 开市 安葬 祈福 求嗣 修造 盖屋 移徙"},{gz:51,sc:4,ji:"赴任 出行 修造 动土",yi:"祭祀 祈福 求嗣 斋醮 订婚 嫁娶 安葬"},{gz:51,sc:5,ji:"赴任 出行",yi:"祈福 嫁娶 修造 盖屋 造庙 作灶 入宅 安葬 见贵 求财"},{gz:51,sc:6,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 订婚"},{gz:51,sc:7,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:51,sc:8,ji:"祭祀 祈福 斋醮 酬神 开光 修造 安葬",yi:"出行 求财 见贵 订婚 嫁娶"},{gz:51,sc:9,ji:"诸事不宜",yi:""},{gz:51,sc:10,ji:"上梁 盖屋 入殓 赴任 修造 移徙 出行 词讼",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:51,sc:11,ji:"赴任 出行 修造 动土",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 入宅 安葬 祭祀"},{gz:52,sc:0,ji:"赴任 修造 移徙 出行 词讼 祈福 求嗣",yi:"订婚 嫁娶 求财 开市 交易 安床 祭祀"},{gz:52,sc:1,ji:"赴任 出行 修造 动土",yi:"安葬 求财 见贵 嫁娶 进人口 移徙"},{gz:52,sc:2,ji:"修造 动土",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 安葬 作灶 祭祀 祈福 斋醮 酬神 赴任 出行"},{gz:52,sc:3,ji:"祭祀 祈福 斋醮 酬神 赴任 出行",yi:""},{gz:52,sc:4,ji:"造桥 乘船 赴任 出行 祭祀 祈福 斋醮 开光",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬"},{gz:52,sc:5,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市 求财 见贵 订婚 嫁娶"},{gz:52,sc:6,ji:"赴任 词讼",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 祈福 出行 求财"},{gz:52,sc:7,ji:"修造 动土",yi:"赴任 见贵 求财 出行 嫁娶 进人口 移徙 安葬"},{gz:52,sc:8,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:52,sc:9,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀 修造 入宅 安葬"},{gz:52,sc:10,ji:"诸事不宜",yi:""},{gz:52,sc:11,ji:"开光 修造 安葬",yi:"盖屋 移徙 安床 入宅 开市 开仓 祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶"},{gz:53,sc:0,ji:"赴任 出行 求财 修造 动土",yi:"嫁娶 移徙 开市 安葬"},{gz:53,sc:1,ji:"赴任 出行 求财",yi:"祈福 求嗣 订婚 嫁娶 开市 交易 安床 修造 盖屋 移徙"},{gz:53,sc:2,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 订婚 嫁娶 修造 入宅 开市 交易 安葬"},{gz:53,sc:3,ji:"赴任 出行 祭祀 祈福 斋醮 开光",yi:"求嗣 订婚 嫁娶 修造 入宅 开市 交易 安葬"},{gz:53,sc:4,ji:"赴任 出行 祭祀 祈福 斋醮 酬神",yi:"作灶 修造"},{gz:53,sc:5,ji:"造船 乘船 祭祀 祈福 斋醮 酬神",yi:"赴任 见贵 出行 求财 嫁娶 进人口 移徙 安葬 求嗣"},{gz:53,sc:6,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:53,sc:7,ji:"",yi:"修造 入宅 安葬 祭祀 祈福 求嗣 斋醮 订婚 嫁娶 出行"},{gz:53,sc:8,ji:"赴任 词讼 祈福 求嗣 乘船",yi:"订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:53,sc:9,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 祭祀"},{gz:53,sc:10,ji:"",yi:"祈福 斋醮 出行 订婚 嫁娶 修造 移徙 开市 安葬 祭祀"},{gz:53,sc:11,ji:"诸事不宜",yi:""},{gz:54,sc:0,ji:"诸事不宜",yi:""},{gz:54,sc:1,ji:"赴任 出行 祭祀 祈福 斋醮 开光",yi:"酬神 求财 见贵 订婚 嫁娶 修造 安葬"},{gz:54,sc:2,ji:"赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:54,sc:3,ji:"",yi:"赴任 出行 求财 见贵 祭祀 祈福 酬神 修造 盖屋 移徙 安床 入宅 开市 开仓"},{gz:54,sc:4,ji:"上梁 盖屋 入殓 赴任 修造 移徙 出行 词讼",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 祭祀"},{gz:54,sc:5,ji:"祭祀 祈福 斋醮 酬神 开光 修造 安葬",yi:"订婚 嫁娶 移徙 开市 入宅"},{gz:54,sc:6,ji:"祈福 求嗣 造桥 乘船",yi:"作灶 祭祀 斋醮 酬神 修造 嫁娶 移徙 入宅 开市 交易"},{gz:54,sc:7,ji:"赴任 出行 修造",yi:"祈福 求嗣 求财 嫁娶 安葬"},{gz:54,sc:8,ji:"修造 动土",yi:"祭祀 祈福 酬神 订婚 嫁娶 出行 求财 入宅 安葬 赴任"},{gz:54,sc:9,ji:"祭祀 祈福 斋醮 酬神",yi:"修造 盖屋 移徙 作灶 安床 入宅 开市 求嗣 订婚 嫁娶 赴任 出行 求财"},{gz:54,sc:10,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"订婚 嫁娶 入宅 修造 安葬 见贵 求财"},{gz:54,sc:11,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"嫁娶 修造 造庙 作灶 入宅 安葬 见贵 求财"},{gz:55,sc:0,ji:"赴任 词讼",yi:"祈福 求嗣 出行 求财 嫁娶 安葬"},{gz:55,sc:1,ji:"诸事不宜",yi:""},{gz:55,sc:2,ji:"上梁 盖屋 入殓",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:55,sc:3,ji:"",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 修造 入宅 安葬 祭祀"},{gz:55,sc:4,ji:"祈福 求嗣",yi:"订婚 嫁娶 修造 入宅 开市 交易 安葬"},{gz:55,sc:5,ji:"开光 修造 安葬",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 赴任 出行 见贵 求财"},{gz:55,sc:6,ji:"祭祀 祈福 斋醮 酬神 修造 动土",yi:"求嗣 出行 求财 嫁娶 安葬"},{gz:55,sc:7,ji:"造船 乘船 赴任 出行 修造 动土",yi:"祭祀 祈福 酬神 订婚 嫁娶 求财 入宅 安葬 见贵"},{gz:55,sc:8,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"作灶 酬神 修造 见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:55,sc:9,ji:"赴任 出行 修造 祭祀 祈福 斋醮 酬神",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 安葬"},{gz:55,sc:10,ji:"赴任 出行",yi:"祈福 订婚 嫁娶 安床 移徙 入宅 修造 安葬 祭祀"},{gz:55,sc:11,ji:"赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 修造 盖屋 移徙 作灶"},{gz:56,sc:0,ji:"上梁 盖屋 入殓 赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:56,sc:1,ji:"赴任 出行 求财",yi:"祭祀 祈福 酬神 见贵 订婚 嫁娶 修造 安葬"},{gz:56,sc:2,ji:"诸事不宜",yi:""},{gz:56,sc:3,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 修造 入宅 开市 交易 安葬"},{gz:56,sc:4,ji:"修造 动土",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床 赴任"},{gz:56,sc:5,ji:"赴任 出行",yi:"祭祀 祈福 斋醮 酬神 修造 作灶 求嗣 嫁娶 移徙 入宅 开市 交易"},{gz:56,sc:6,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求财 见贵 酬神"},{gz:56,sc:7,ji:"祭祀 祈福 斋醮 酬神",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 出行 求财 见贵 订婚 嫁娶"},{gz:56,sc:8,ji:"赴任 修造 移徙 出行 词讼 开光",yi:"求财 见贵 订婚 嫁娶 入宅 开市 安葬"},{gz:56,sc:9,ji:"赴任 出行 修造 动土",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 安葬 祈福 祭祀"},{gz:56,sc:10,ji:"上梁 盖屋 入殓 赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 作灶 祭祀"},{gz:56,sc:11,ji:"赴任 出行",yi:"修造 入宅 安葬"},{gz:57,sc:0,ji:"祈福 求嗣 赴任 出行 求财",yi:"嫁娶 移徙 入宅 开市 交易 修造 安葬 作灶 祭祀 斋醮 酬神"},{gz:57,sc:1,ji:"赴任 出行 修造",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 祭祀"},{gz:57,sc:2,ji:"",yi:"祈福 订婚 嫁娶 安床 移徙 入宅 修造 安葬 祭祀 赴任 见贵 出行 求财"},{gz:57,sc:3,ji:"诸事不宜",yi:""},{gz:57,sc:4,ji:"赴任 词讼 祭祀 祈福 斋醮 开光",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:57,sc:5,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:57,sc:6,ji:"",yi:"祭祀 祈福 酬神 出行 求财 见贵 订婚 嫁娶 修造 安葬"},{gz:57,sc:7,ji:"",yi:"祭祀 祈福 斋醮 酬神 修造 作灶"},{gz:57,sc:8,ji:"上梁 盖屋 入殓 祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:57,sc:9,ji:"造桥 乘船",yi:"祈福 求嗣 出行 求财 嫁娶 安葬 修造 入宅"},{gz:57,sc:10,ji:"赴任 出行 祈福 求嗣",yi:"见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:57,sc:11,ji:"赴任 出行 修造 动土 开光",yi:"见贵 求财 嫁娶 入宅 移徙 安葬"},{gz:58,sc:0,ji:"赴任 出行 求财 修造 动土",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 安葬"},{gz:58,sc:1,ji:"赴任 出行 求财",yi:"祈福 嫁娶 修造 造庙 作灶 入宅 安葬"},{gz:58,sc:2,ji:"祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:58,sc:3,ji:"赴任 出行 修造 祭祀 祈福 斋醮 开光",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:58,sc:4,ji:"诸事不宜",yi:""},{gz:58,sc:5,ji:"祭祀 祈福 斋醮 酬神",yi:"出行 求财 见贵 订婚 嫁娶 修造 安葬"},{gz:58,sc:6,ji:"上梁 盖屋 入殓 赴任 词讼",yi:"祈福 求嗣 订婚 嫁娶 出行 求财 开市 交易 安床"},{gz:58,sc:7,ji:"赴任 出行",yi:"见贵 求财 嫁娶 进人口 移徙 安葬"},{gz:58,sc:8,ji:"祈福 求嗣 赴任 出行",yi:"订婚 嫁娶 开市 安葬 见贵 求财"},{gz:58,sc:9,ji:"祭祀 祈福 斋醮 酬神",yi:"修造 作灶"},{gz:58,sc:10,ji:"造船 乘船",yi:"祭祀 祈福 求嗣 斋醮 订婚 嫁娶 出行 安葬"},{gz:58,sc:11,ji:"",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 赴任 出行 求财 见贵 订婚 嫁娶"},{gz:59,sc:0,ji:"祭祀 祈福 斋醮 开光 赴任 出行",yi:"求财 见贵 订婚 嫁娶 入宅 开市 安葬 求嗣"},{gz:59,sc:1,ji:"赴任 出行 求财 祭祀 祈福 斋醮 开光",yi:"修造 盖屋 移徙 安床 入宅 开市 开仓 见贵 订婚 嫁娶 进人口"},{gz:59,sc:2,ji:"赴任 修造 移徙 出行 词讼 祭祀 祈福 斋醮 酬神",yi:"求嗣 订婚 嫁娶 求财 开市 交易 安床"},{gz:59,sc:3,ji:"赴任 出行 修造 动土",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 祭祀"},{gz:59,sc:4,ji:"上梁 盖屋 入殓",yi:"作灶 祭祀 祈福 斋醮 酬神 修造"},{gz:59,sc:5,ji:"诸事不宜",yi:""},{gz:59,sc:6,ji:"祈福 求嗣 乘船",yi:"订婚 嫁娶 安床 移徙 入宅 修造 安葬"},{gz:59,sc:7,ji:"赴任 出行",yi:"祈福 求嗣 订婚 嫁娶 求财 开市 交易 安床 修造 盖屋 移徙 作灶 祭祀"},{gz:59,sc:8,ji:"赴任 出行 修造 动土",yi:"求财 见贵 嫁娶 进人口 移徙 安葬"},{gz:59,sc:9,ji:"诸事不宜",yi:"赴任 出行 见贵 求财 嫁娶 入宅 移徙 安葬"},{gz:59,sc:10,ji:"祭祀 祈福 斋醮 酬神",yi:"订婚 嫁娶 开市 安葬"},{gz:59,sc:11,ji:"造桥 乘船 祭祀 祈福 斋醮 开光 赴任 出行",yi:"求嗣 嫁娶 移徙 入宅 开市 交易 修造 安葬 订婚"}],Sd=[{jx:0,gz:0,js:"天恩 母仓 时阳 生气 益后 青龙",xs:"灾煞 天火 四忌 八龙 复日"},{jx:0,gz:1,js:"天恩 续世 明堂",xs:"月煞 月虚 血支 天贼 五虚 土符 归忌 血忌"},{jx:0,gz:2,js:"月德 天恩 月恩 四相 王日 天仓 不将 要安 五合 鸣吠对",xs:"月建 小时 土府 往亡 天刑"},{jx:0,gz:3,js:"天德 天恩 四相 官日 吉期 不将 玉宇 五合 鸣吠对",xs:"大时 大败 咸池 朱雀"},{jx:0,gz:4,js:"天恩 守日 天巫 福德 六仪 金堂 金匮",xs:"厌对 招摇 九空 九坎 九焦"},{jx:0,gz:5,js:"相日 宝光",xs:"天罡 死神 月刑 月害 游祸 五虚 重日"},{jx:0,gz:6,js:"时德 民日 三合 临日 天马 时阴 鸣吠",xs:"死气 地囊 白虎"},{jx:0,gz:7,js:"月德合 敬安 玉堂 普护 解神",xs:"小耗"},{jx:0,gz:8,js:"天德合 月空 驿马 天后 普护 解神 除神 鸣吠",xs:"月破 大耗 五离 天牢"},{jx:0,gz:9,js:"阴德 福生 除神 鸣吠",xs:"天吏 致死 五虚 五离 元武"},{jx:0,gz:10,js:"阳德 三合 天喜 天医 司命",xs:"月厌 地火 四击 大煞 复日 大会"},{jx:0,gz:11,js:"母仓 天愿 六合 五富 圣心",xs:"河魁 劫煞 四穷 八龙 重日 勾陈"},{jx:0,gz:12,js:"月德 母仓 月恩 四相 时阳 生气 不将 益后 青龙 鸣吠对",xs:"灾煞 天火 触水龙"},{jx:0,gz:13,js:"天德 四相 不将 续世 明堂",xs:"月煞 月虚 血支 天贼 五虚 八风 土符 归忌 血忌"},{jx:0,gz:14,js:"天赦 王日 天仓 要安 五合",xs:"月建 小时 土府 往亡 天刑"},{jx:0,gz:15,js:"天恩 官日 吉期 不将 玉宇 五合",xs:"大时 大败 咸池 朱雀"},{jx:0,gz:16,js:"天恩 守日 天巫 福德 六仪 金堂 金匮",xs:"厌对 招摇 九空 九坎 九焦"},{jx:0,gz:17,js:"月德合 天恩 相日 宝光",xs:"天罡 死神 月刑 月害 游祸 五虚 重日"},{jx:0,gz:18,js:"天德合 月空 天恩 时德 民日 三合 临日 天马 时阴 鸣吠",xs:"死气 白虎"},{jx:0,gz:19,js:"天恩 敬安 玉堂",xs:"小耗 触水龙"},{jx:0,gz:20,js:"驿马 天后 普护 解神 除神 鸣吠",xs:"月破 大耗 复日 五离 天牢"},{jx:0,gz:21,js:"天恩 阴德 福生 除神 鸣吠",xs:"天吏 致死 五虚 五离 元武"},{jx:0,gz:22,js:"月德 天恩 四相 阳德 三合 天喜 天医 司命",xs:"月厌 地火 四击 大煞"},{jx:0,gz:23,js:"天德 母仓 四相 六合 五富 不将 圣心",xs:"河魁 劫煞 重日 勾陈"},{jx:0,gz:24,js:"母仓 时阳 生气 益后 青龙",xs:"灾煞 天火"},{jx:0,gz:25,js:"不将 续世 明堂",xs:"月煞 月虚 血支 天贼 五虚 土符 归忌 血忌"},{jx:0,gz:26,js:"王日 天仓 不将 要安 五合 鸣吠对",xs:"月建 小时 土府 往亡 天刑"},{jx:0,gz:27,js:"月德合 官日 吉期 不将 玉宇 五合 鸣吠对",xs:"大时 大败 咸池"},{jx:0,gz:28,js:"天德合 月空 守日 天巫 福德 六仪 金堂 金匮",xs:"厌对 招摇 九空 九坎 九焦"},{jx:0,gz:29,js:"相日 宝光",xs:"天罡 死神 月刑 月害 游祸 五虚 重日"},{jx:0,gz:30,js:"时德 民日 三合 临日 天马 时阴 鸣吠",xs:"死气 复日 白虎"},{jx:0,gz:31,js:"敬安 玉堂",xs:"小耗 五墓"},{jx:0,gz:32,js:"月德 月恩 四相 驿马 天后 普护 解神 除神 鸣吠",xs:"月破 大耗 五离"},{jx:0,gz:33,js:"天德 四相 阴德 福生 除神 鸣吠",xs:"天吏 致死 五虚 五离 元武"},{jx:0,gz:34,js:"阳德 三合 天喜 天医 司命",xs:"月厌 地火 四击 大煞"},{jx:0,gz:35,js:"母仓 六合 五富 不将 圣心",xs:"河魁 劫煞 重日 勾陈"},{jx:0,gz:36,js:"母仓 时阳 生气 不将 益后 青龙 鸣吠对",xs:"灾煞 天火 地囊"},{jx:0,gz:37,js:"月德合 不将 续世 明堂",xs:"月煞 月虚 血支 天贼 五虚 土符 归忌 血忌"},{jx:0,gz:38,js:"天德合 月空 王日 天仓 要安 五合 鸣吠对",xs:"月建 小时 土府 往亡 天刑"},{jx:0,gz:39,js:"官日 吉期 玉宇 五合 鸣吠对",xs:"大时 大败 咸池 朱雀"},{jx:0,gz:40,js:"守日 天巫 福德 六仪 金堂 金匮",xs:"厌对 招摇 九空 九坎 九焦 复日"},{jx:0,gz:41,js:"相日 宝光",xs:"天罡 死神 月刑 月害 游祸 五虚 重日"},{jx:0,gz:42,js:"月德 月恩 四相 时德 民日 三合 临日 天马 时阴 鸣吠",xs:"死气 白虎"},{jx:0,gz:43,js:"天德 四相 敬安 玉堂",xs:"小耗 八专"},{jx:0,gz:44,js:"驿马 天后 普护 解神 除神",xs:"月破 大耗 五离 天牢"},{jx:0,gz:45,js:"天恩 阴德 福生 除神 鸣吠",xs:"天吏 致死 五虚 五离 元武"},{jx:0,gz:46,js:"天恩 阳德 三合 天喜 天医 司命",xs:"月厌 地火 四击 大煞 阴错"},{jx:0,gz:47,js:"月德合 天恩 母仓 六合 五富 不将 圣心",xs:"河魁 劫煞 重日 勾陈"},{jx:0,gz:48,js:"天德合 月空 天恩 母仓 时阳 生气 益后 青龙 鸣吠对",xs:"灾煞 天火 四耗"},{jx:0,gz:49,js:"天恩 续世 明堂",xs:"月煞 月虚 血支 天贼 五虚 土符 归忌 血忌 八专 触水龙"},{jx:0,gz:50,js:"王日 天仓 要安 五合 鸣吠对",xs:"月建 小时 土府 往亡 复日 八专 天刑 阳错"},{jx:0,gz:51,js:"官日 吉期 玉宇 五合 鸣吠对",xs:"大时 大败 咸池 朱雀"},{jx:0,gz:52,js:"月德 月恩 四相 守日 天巫 福德 六仪 金堂 金匮",xs:"厌对 招摇 九空 九坎 九焦"},{jx:0,gz:53,js:"天德 四相 相日 宝光",xs:"天罡 死神 月刑 月害 游祸 五虚 八风 重日"},{jx:0,gz:54,js:"时德 民日 三合 临日 天马 时阴",xs:"死气 白虎"},{jx:0,gz:55,js:"敬安 玉堂",xs:"小耗 八专"},{jx:0,gz:56,js:"驿马 天后 普护 解神 除神 鸣吠",xs:"月破 大耗 四废 五离 八专 天牢"},{jx:0,gz:57,js:"月德合 阴德 福生 除神 鸣吠",xs:"天吏 致死 四废 五虚 五离 元武 三阴"},{jx:0,gz:58,js:"天德合 月空 阳德 三合 天喜 天医 司命",xs:"月厌 地火 四击 大煞"},{jx:0,gz:59,js:"母仓 六合 五富 圣心",xs:"河魁 劫煞 重日 勾陈"},{jx:1,gz:0,js:"月德 天恩 母仓 阳德 司命",xs:"天罡 月刑 大时 大败 咸池 天贼 四忌 八龙"},{jx:1,gz:1,js:"天恩 时阳 生气 天仓 不将 敬安",xs:"五虚 九空 九坎 九焦 复日 勾陈"},{jx:1,gz:2,js:"天恩 四相 王日 五富 不将 普护 五合 青龙 鸣吠对",xs:"游祸 血支 归忌"},{jx:1,gz:3,js:"天恩 月恩 四相 官日 六仪 福生 五合 明堂 鸣吠对",xs:"月建 小时 土府 厌对 招摇"},{jx:1,gz:4,js:"天恩 守日 吉期",xs:"月害 天刑"},{jx:1,gz:5,js:"月德合 相日 驿马 天后 天巫 福德 圣心",xs:"五虚 土符 大煞 往亡 重日 朱雀"},{jx:1,gz:6,js:"月空 时德 民日 益后 金匮 鸣吠对",xs:"河魁 死神 天吏 致死"},{jx:1,gz:7,js:"阴德 三合 时阴 续世 宝光",xs:"死气 血忌"},{jx:1,gz:8,js:"天马 要安 解神 鸣吠",xs:"劫煞 小耗 五离 白虎"},{jx:1,gz:9,js:"玉宇 除神 玉堂 鸣吠",xs:"月破 大耗 灾煞 天火 月厌 地火 五虚 五离"},{jx:1,gz:10,js:"月德 天愿 六合 金堂",xs:"月煞 月虚 四击 天牢"},{jx:1,gz:11,js:"母仓 三合 临日 天喜 天医 不将",xs:"四穷 八龙 复日 重日 元武"},{jx:1,gz:12,js:"母仓 四相 阳德 不将 司命 鸣吠对",xs:"天罡 月刑 大时 大败 咸池 天贼 触水龙"},{jx:1,gz:13,js:"月恩 四相 时阳 生气 不将 敬安",xs:"五虚 八风 九空 九坎 九焦 勾陈"},{jx:1,gz:14,js:"天赦 王日 五富 普护 五合 青龙",xs:"游祸 血支 归忌"},{jx:1,gz:15,js:"月德合 天恩 官日 六仪 福生 五合 明堂",xs:"月建 小时 土府 厌对 招摇 小会"},{jx:1,gz:16,js:"月空 天恩 守日 吉期",xs:"月害 天刑"},{jx:1,gz:17,js:"天恩 相日 驿马 天后 天巫 福德 圣心",xs:"五虚 土符 大煞 往亡 重日 朱雀"},{jx:1,gz:18,js:"天恩 时德 民日 益后 金匮 鸣吠",xs:"河魁 死神 天吏 致死"},{jx:1,gz:19,js:"天恩 阴德 三合 时阴 续世 宝光",xs:"死气 血忌 触水龙"},{jx:1,gz:20,js:"月德 天马 要安 解神 除神 鸣吠",xs:"劫煞 小耗 五离 白虎"},{jx:1,gz:21,js:"玉宇 除神 玉堂 鸣吠",xs:"月破 大耗 灾煞 天火 月厌 地火 五虚 复日 五离 白虎"},{jx:1,gz:22,js:"四相 六合 不将 金堂",xs:"月煞 月虚 四击 天牢"},{jx:1,gz:23,js:"母仓 月恩 四相 三合 临日 天喜 天医 不将",xs:"重日 元武"},{jx:1,gz:24,js:"母仓 阳德 司命",xs:"天罡 月刑 大时 大败 咸池 天贼"},{jx:1,gz:25,js:"月德合 时阳 生气 天仓 不将 敬安",xs:"五虚 九空 九坎 九焦 勾陈"},{jx:1,gz:26,js:"月空 王日 五富 不将 普护 五合 青龙 鸣吠对",xs:"游祸 血支 归忌"},{jx:1,gz:27,js:"官日 六仪 福生 五合 明堂 鸣吠",xs:"月建 小时 土府 厌对 招摇"},{jx:1,gz:28,js:"守日 吉期",xs:"月害 天刑"},{jx:1,gz:29,js:"相日 驿马 天后 天巫 福德 圣心",xs:"五虚 土符 大煞 往亡 重日 朱雀"},{jx:1,gz:30,js:"月德 时德 民日 益后 金匮 鸣吠",xs:"河魁 死神 天吏 致死"},{jx:1,gz:31,js:"阴德 三合 时阴 续世 宝光",xs:"死气 五墓 地囊 血忌 复日"},{jx:1,gz:32,js:"四相 天马 要安 解神 除神 鸣吠",xs:"劫煞 小耗 五离 白虎"},{jx:1,gz:33,js:"月恩 四相 玉宇 除神 玉堂 鸣吠",xs:"月破 大耗 灾煞 天火 月厌 地火 五虚 五离"},{jx:1,gz:34,js:"六合 金堂",xs:"月煞 月虚 四击 天牢"},{jx:1,gz:35,js:"月德合 母仓 三合 临日 天喜 天医 不将",xs:"重日 元武"},{jx:1,gz:36,js:"月空 母仓 阳德 不将 司命 鸣吠对",xs:"天罡 月刑 大时 大败 咸池 天贼"},{jx:1,gz:37,js:"时阳 生气 天仓 敬安",xs:"五虚 九空 九坎 九焦 勾陈"},{jx:1,gz:38,js:"王日 五富 普护 五合 青龙 鸣吠对",xs:"游祸 血支 归忌"},{jx:1,gz:39,js:"官日 六仪 福生 五合 明堂 鸣吠对",xs:"月建 小时 土府 厌对 招摇"},{jx:1,gz:40,js:"月德 守日 吉期",xs:"月害 天刑"},{jx:1,gz:41,js:"相日 驿马 天后 天巫 福德 圣心",xs:"五虚 土符 大煞 往亡 复日 重日 朱雀"},{jx:1,gz:42,js:"四相 时德 民日 益后 金匮 鸣吠",xs:"河魁 死神 天吏 致死"},{jx:1,gz:43,js:"月恩 四相 阴德 三合 时阴 续世 宝光",xs:"死气 血忌 八专"},{jx:1,gz:44,js:"天马 要安 解神 除神",xs:"劫煞 小耗 五离 白虎"},{jx:1,gz:45,js:"月德合 天恩 玉宇 除神 玉堂 鸣吠",xs:"月破 大耗 灾煞 天火 月厌 地火 五虚 五离 阴道冲阳"},{jx:1,gz:46,js:"月空 天恩 六合 不将 金堂",xs:"月煞 月虚 四击 天牢"},{jx:1,gz:47,js:"天恩 母仓 三合 临日 天喜 天医",xs:"重日 元武"},{jx:1,gz:48,js:"天恩 母仓 阳德 司命 鸣吠对",xs:"天罡 月刑 大时 大败 咸池 天贼 四耗"},{jx:1,gz:49,js:"天恩 时阳 生气 天仓 敬安",xs:"五虚 九空 九坎 九焦 地囊 八专 触水龙 勾陈"},{jx:1,gz:50,js:"月德 王日 五富 普护 五合 青龙 鸣吠对",xs:"游祸 血支 归忌"},{jx:1,gz:51,js:"官日 六仪 福生 五合 明堂 鸣吠对",xs:"月建 小时 土府 厌对 招摇 复日 阳错"},{jx:1,gz:52,js:"四相 守日 吉期",xs:"月害 天刑"},{jx:1,gz:53,js:"月恩 四相 相日 驿马 天后 天巫 福德 圣心",xs:"五虚 八风 土符 大煞 往亡 重日 朱雀"},{jx:1,gz:54,js:"时德 民日 益后 金匮",xs:"河魁 死神 天吏 致死"},{jx:1,gz:55,js:"月德合 阴德 三合 时阴 续世 宝光",xs:"死气 血忌 八专"},{jx:1,gz:56,js:"月空 天马 要安 解神 除神 鸣吠",xs:"劫煞 小耗 四废 五离 八专 白虎"},{jx:1,gz:57,js:"玉宇 除神 玉堂 鸣吠",xs:"月破 大耗 灾煞 天火 月厌 地火 四废 五虚 五离 阴错"},{jx:1,gz:58,js:"六合 金堂",xs:"月煞 月虚 四击 天牢"},{jx:1,gz:59,js:"母仓 三合 临日 天喜 天医",xs:"重日 元武"},{jx:2,gz:0,js:"天恩 母仓 三合 天喜 天医 天仓 不将 圣心",xs:"四忌 八龙 地囊 归忌 天牢"},{jx:2,gz:1,js:"天恩 不将 益后",xs:"河魁 五虚 元武"},{jx:2,gz:2,js:"月空 天恩 四相 阳德 王日 驿马 天后 时阳 生气 六仪 续世 五合 司命 鸣吠对",xs:"厌对 招摇 血忌"},{jx:2,gz:3,js:"天德合 月德合 天恩 四相 官日 要安 五合 鸣吠对",xs:"月害 天吏 致死 血支 勾陈"},{jx:2,gz:4,js:"天恩 守日 玉宇 青龙",xs:"月建 小时 土府 月刑 五墓 复日 小会 单阴"},{jx:2,gz:5,js:"阴德 相日 吉期 五富 金堂 明堂",xs:"劫煞 五虚 重日"},{jx:2,gz:6,js:"月恩 时德 民日 天巫 福德 鸣吠",xs:"灾煞 天火 大煞 天刑"},{jx:2,gz:7,js:"[无神煞]",xs:"天罡 死神 月煞 朱雀"},{jx:2,gz:8,js:"天德 月德 三合 临日 时阴 敬安 除神 金匮 鸣吠",xs:"月厌 地火 死气 往亡 五离 孤辰"},{jx:2,gz:9,js:"六合 普护 除神 宝光 鸣吠",xs:"大时 大败 咸池 小耗 五虚 土符 五离"},{jx:2,gz:10,js:"天马 不将 福生 解神",xs:"月破 大耗 四击 九空 九坎 九焦 白虎"},{jx:2,gz:11,js:"母仓 不将 玉宇",xs:"游祸 天贼 四穷 八龙 重日"},{jx:2,gz:12,js:"月空 母仓 四相 三合 天喜 天医 天仓 不将 圣心 鸣吠对",xs:"归忌 触水龙 天牢"},{jx:2,gz:13,js:"天德合 月德合 四相 不将 益后",xs:"河魁 五虚 八风 元武"},{jx:2,gz:14,js:"天赦 阳德 王日 驿马 天后 时阳 生气 六仪 续世 五合 司命",xs:"厌对 招摇 血忌 复日"},{jx:2,gz:15,js:"天恩 官日 要安 五合",xs:"月害 天吏 致死 血支 勾陈"},{jx:2,gz:16,js:"天恩 月恩 守日 玉宇 青龙",xs:"月建 小时 土府 月刑 阴位"},{jx:2,gz:17,js:"天恩 阴德 相日 吉期 五富 金堂 明堂",xs:"劫煞 五虚 重日"},{jx:2,gz:18,js:"天德 月德 天恩 时德 民日 天巫 福德 鸣吠",xs:"灾煞 天火 地囊 大煞 天刑"},{jx:2,gz:19,js:"天恩",xs:"天罡 死神 月煞 月虚 触水龙 朱雀"},{jx:2,gz:20,js:"三合 临日 时阴 敬安 除神 金匮 鸣吠",xs:"月厌 地火 死气 往亡 五离 行狠"},{jx:2,gz:21,js:"天愿 六合 不将 普护 除神 宝光 鸣吠",xs:"大时 大败 咸池 小耗 五虚 土符 五离"},{jx:2,gz:22,js:"月空 四相 天马 不将 福生 解神",xs:"月破 大耗 四击 九空 九坎 九焦 白虎"},{jx:2,gz:23,js:"天德合 月德合 母仓 四相 不将 玉堂",xs:"游祸 天贼 重日"},{jx:2,gz:24,js:"母仓 三合 天喜 天医 天仓 圣心",xs:"归忌 复日 天牢"},{jx:2,gz:25,js:"不将 益后",xs:"河魁 五虚 元武"},{jx:2,gz:26,js:"月恩 阳德 王日 驿马 天后 时阳 生气 六仪 续世 五合 司命 鸣吠对",xs:"厌对 招摇 血忌"},{jx:2,gz:27,js:"官日 要安 五合 鸣吠对",xs:"月害 天吏 致死 血支 勾陈"},{jx:2,gz:28,js:"天德 月德 守日 玉宇 青龙",xs:"月建 小时 土府 月刑"},{jx:2,gz:29,js:"阴德 相日 吉期 五富 金堂 明堂",xs:"劫煞 五虚 重日"},{jx:2,gz:30,js:"时德 民日 天巫 福德 鸣吠",xs:"灾煞 天火 大煞 天刑"},{jx:2,gz:31,js:"[无神煞]",xs:"天罡 死神 月煞 月虚 朱雀"},{jx:2,gz:32,js:"月空 四相 三合 临日 时阴 敬安 除神 金匮 鸣吠",xs:"月厌 地火 死气 往亡 五离 了戾"},{jx:2,gz:33,js:"天德合 月德合 四相 六合 不将 普护 除神 宝光 鸣吠",xs:"大时 大败 咸池 小耗 五虚 土符 五离"},{jx:2,gz:34,js:"天马 福生 解神",xs:"月破 大耗 四击 九空 九坎 九焦 复日 白虎"},{jx:2,gz:35,js:"母仓 不将 玉堂",xs:"游祸 天贼 重日"},{jx:2,gz:36,js:"母仓 月恩 三合 天喜 天医 天仓 圣心 鸣吠对",xs:"归忌 天牢"},{jx:2,gz:37,js:"益后",xs:"河魁 五虚 元武"},{jx:2,gz:38,js:"阴德 月德 阳德 王日 驿马 天后 时阳 生气 六仪 续世 五合 司命 鸣吠对",xs:"厌对 招摇 血忌"},{jx:2,gz:39,js:"官日 要安 五合 鸣吠对",xs:"月害 天吏 致死 血支 勾陈"},{jx:2,gz:40,js:"守日 玉宇 青龙",xs:"月建 小时 土府 月刑 阳错"},{jx:2,gz:41,js:"阴德 相日 吉期 五富 金堂 明堂",xs:"劫煞 五虚 重日"},{jx:2,gz:42,js:"月空 四相 时德 民日 天巫 福德 鸣吠",xs:"灾煞 天火 大煞 天刑"},{jx:2,gz:43,js:"天德合 月德合 四相",xs:"天罡 死神 月煞 月虚 八专 朱雀"},{jx:2,gz:44,js:"三合 临日 时阴 敬安 除神 金匮",xs:"月厌 地火 死气 往亡 复日 五离 孤辰"},{jx:2,gz:45,js:"天恩 六合 不将 普护 除神 宝光 鸣吠",xs:"大时 大败 咸池 小耗 五虚 土符 五离"},{jx:2,gz:46,js:"天恩 月恩 天马 福生 解神",xs:"月破 大耗 四击 九空 九坎 九焦 白虎"},{jx:2,gz:47,js:"天恩 母仓 玉堂",xs:"游祸 天贼 重日"},{jx:2,gz:48,js:"天德 月德 天恩 母仓 三合 天喜 天医 天仓 圣心 鸣吠对",xs:"四耗 归忌 天牢"},{jx:2,gz:49,js:"天恩 益后",xs:"河魁 五虚 八专 触水龙 元武"},{jx:2,gz:50,js:"阳德 王日 驿马 天后 时阳 生气 六仪 续世 五合 司命 鸣吠对",xs:"厌对 招摇 血忌 八专"},{jx:2,gz:51,js:"官日 要安 五合 鸣吠对",xs:"月害 天吏 致死 血支 勾陈"},{jx:2,gz:52,js:"月空 四相 守日 玉宇 青龙",xs:"月建 小时 土府 月刑"},{jx:2,gz:53,js:"天德合 月德合 四相 阴德 相日 吉期 五富 金堂 明堂",xs:"劫煞 五虚 八风 重日"},{jx:2,gz:54,js:"时德 民日 天巫 福德",xs:"灾煞 天火 大煞 复日 天刑"},{jx:2,gz:55,js:"[无神煞]",xs:"天罡 死神 月煞 月虚 八专 朱雀"},{jx:2,gz:56,js:"月恩 三合 临日 时阴 敬安 除神 金匮 鸣吠",xs:"月厌 地火 死气 四废 往亡 五离 八专 孤辰 阴错"},{jx:2,gz:57,js:"六合 普护 除神 宝光 鸣吠",xs:"大时 大败 咸池 小耗 四废 五虚 土符 五离"},{jx:2,gz:58,js:"天德 月德 天马 福生 解神",xs:"月破 大耗 四击 九空 九坎 九焦 白虎"},{jx:2,gz:59,js:"母仓 玉堂",xs:"游祸 天贼 重日"},{jx:3,gz:0,js:"月空 天恩 天马 不将",xs:"天吏 致死 五虚 白虎"},{jx:3,gz:1,js:"月德合 天恩 三合 临日 天喜 天医 六仪 玉堂",xs:"厌对 招摇 四击 归忌"},{jx:3,gz:2,js:"天德合 天恩 母仓 敬安 五合 鸣吠对",xs:"天罡 劫煞 月害 土符 复日 天牢"},{jx:3,gz:3,js:"天恩 母仓 阴德 时阳 生气 普护 五合 鸣吠对",xs:"灾煞 天火 元武"},{jx:3,gz:4,js:"天恩 四相 时德 阳德 福生 司命",xs:"月煞 月虚 血支 五虚 绝阴"},{jx:3,gz:5,js:"月恩 四相 王日",xs:"月建 小时 土府 重日 勾陈 小会 纯阳 阳错"},{jx:3,gz:6,js:"月德 官日 吉期 圣心 青龙 鸣吠",xs:"大时 大败 咸池"},{jx:3,gz:7,js:"天德 守日 天巫 福德 益后 明堂",xs:"月厌 地火 九空 九坎 九焦 大煞 孤辰"},{jx:3,gz:8,js:"相日 六合 五富 续世 除神 鸣吠",xs:"河魁 死神 月刑 游祸 五虚 血忌 五离 天刑"},{jx:3,gz:9,js:"民日 三合 时阴 要安 除神 鸣吠",xs:"死气 五离 朱雀"},{jx:3,gz:10,js:"月空 不将 玉宇 解神 金匮",xs:"小耗 天贼"},{jx:3,gz:11,js:"月德合 驿马 天后 天仓 不将 金堂 宝光",xs:"月破 大耗 往亡 重日"},{jx:3,gz:12,js:"天德合 天马 不将 鸣吠对",xs:"天吏 致死 四忌 七鸟 五虚 复日 触水龙 白虎"},{jx:3,gz:13,js:"三合 临日 天喜 天医 六仪 玉堂",xs:"厌对 招摇 四击 归忌"},{jx:3,gz:14,js:"母仓 四相 敬安 五合",xs:"天罡 劫煞 月害 土符 天牢"},{jx:3,gz:15,js:"天恩 母仓 月恩 四相 阴德 时阳 生气 普护 五合",xs:"灾煞 天火 地囊 元武"},{jx:3,gz:16,js:"月德 天恩 时德 阴德 福生 司命",xs:"月煞 月虚 血支 五虚"},{jx:3,gz:17,js:"天德 天恩 王日",xs:"月建 小时 土府 重日 勾陈"},{jx:3,gz:18,js:"天恩 官日 吉期 圣心 青龙 鸣吠",xs:"大时 大败 咸池"},{jx:3,gz:19,js:"天恩 守日 天巫 福德 益后 明堂",xs:"月厌 地火 九空 九坎 九焦 大煞 触水龙 孤辰"},{jx:3,gz:20,js:"月空 相日 六合 五富 不将 续世 除神 鸣吠",xs:"河魁 死神 月刑 游祸 五虚 八风 血忌 五离 天刑"},{jx:3,gz:21,js:"月德合 民日 三合 时阴 不将 要安 除神 鸣吠",xs:"死气 五离 朱雀"},{jx:3,gz:22,js:"天德合 不将 玉宇 解神 金匮",xs:"小耗 天贼 五墓 复日"},{jx:3,gz:23,js:"驿马 天后 天仓 不将 金堂 宝光",xs:"月破 大耗 四穷 七鸟 往亡 重日"},{jx:3,gz:24,js:"四相 天马 不将",xs:"天吏 致死 五虚 白虎"},{jx:3,gz:25,js:"月恩 四相 三合 临日 天喜 天医 六仪 玉堂",xs:"厌对 招摇 四击 归忌"},{jx:3,gz:26,js:"月德 母仓 敬安 五合 鸣吠对",xs:"天罡 劫煞 月害 土符 天牢"},{jx:3,gz:27,js:"天德 母仓 阴德 时阴 生气 普护 五合 鸣吠对",xs:"灾煞 天火 元武"},{jx:3,gz:28,js:"时德 阳德 福生 司命",xs:"月煞 月虚 血支 五虚"},{jx:3,gz:29,js:"王日",xs:"月建 小时 土府 重日 勾陈"},{jx:3,gz:30,js:"月空 天赦 官日 吉期 圣心 青龙 鸣吠",xs:"大时 大败 咸池"},{jx:3,gz:31,js:"月德合 守日 天巫 福德 益后 明堂",xs:"月厌 地火 九空 九坎 九焦 大煞 行狠"},{jx:3,gz:32,js:"天德合 天愿 相日 六合 五富 不将 续世 除神 鸣吠",xs:"河魁 死神 月刑 游祸 五虚 血忌 复日 五离 天刑"},{jx:3,gz:33,js:"民日 三合 时阴 不将 要安 除神 鸣吠",xs:"死气 五离 朱雀"},{jx:3,gz:34,js:"四相 不将 玉宇 解神 金匮",xs:"小耗 天贼"},{jx:3,gz:35,js:"月恩 四相 驿马 天后 天仓 金堂 宝光",xs:"月破 大耗 往亡 重日"},{jx:3,gz:36,js:"月德 天马 鸣吠对",xs:"天吏 致死 五虚 白虎"},{jx:3,gz:37,js:"天德 三合 临日 天喜 天医 六仪 玉堂",xs:"厌对 招摇 四击 归忌"},{jx:3,gz:38,js:"母仓 敬安 五合 鸣吠对",xs:"天罡 劫煞 月害 土符 天牢"},{jx:3,gz:39,js:"母仓 阴德 时阳 生气 普护 五合 鸣吠对",xs:"灾煞 天火 元武"},{jx:3,gz:40,js:"月空 时德 阳德 福生 司命",xs:"月煞 月虚 血支 五虚 八风"},{jx:3,gz:41,js:"月德合 王日",xs:"月建 小时 土府 重日 勾陈"},{jx:3,gz:42,js:"天德合 官日 吉期 圣心 青龙 鸣吠",xs:"大时 大败 咸池 复日 岁薄"},{jx:3,gz:43,js:"守日 天巫 福德 益后 明堂",xs:"月厌 地火 九空 九坎 九焦 大煞 八专 了戾 阴错"},{jx:3,gz:44,js:"四相 相日 六合 五富 不将 续世 除神",xs:"河魁 死神 月刑 游祸 五虚 血忌 五离 天刑"},{jx:3,gz:45,js:"天恩 月恩 四相 民日 三合 时阴 要安 除神 鸣吠",xs:"死气 地囊 五离 朱雀"},{jx:3,gz:46,js:"月德 天恩 玉宇 解神 金匮",xs:"小耗 天贼"},{jx:3,gz:47,js:"天德 天恩 驿马 天后 天仓 金堂 宝光",xs:"月破 大耗 往亡 重日"},{jx:3,gz:48,js:"天恩 天马 鸣吠对",xs:"天吏 致死 四废 五虚 白虎"},{jx:3,gz:49,js:"天恩 三合 临日 天喜 天医 六仪 玉堂",xs:"厌对 招摇 四击 归忌 八专 触水龙"},{jx:3,gz:50,js:"月空 母仓 敬安 五合 鸣吠对",xs:"天罡 劫煞 月害 土符 八专 天牢"},{jx:3,gz:51,js:"月德合 母仓 阴德 时阴 生气 普护 五合 鸣吠对",xs:"灾煞 天火 四耗 元武"},{jx:3,gz:52,js:"天德合 时德 阳德 福生 司命",xs:"月煞 月虚 血支 五虚 复日"},{jx:3,gz:53,js:"王日",xs:"月建 小时 土府 重日 勾陈 阳错"},{jx:3,gz:54,js:"四相 官日 吉期 圣心 青龙",xs:"大时 大败 咸池 岁薄"},{jx:3,gz:55,js:"月恩 四相 守日 天巫 福德 益后 明堂",xs:"月厌 地火 九空 九坎 九焦 大煞 八专 孤辰 阴错"},{jx:3,gz:56,js:"月德 相日 六合 五富 续世 除神 鸣吠",xs:"河魁 死神 月刑 游祸 五虚 血忌 五离 八专 天刑"},{jx:3,gz:57,js:"天德 民日 三合 时阴 要安 除神 鸣吠",xs:"死气 五离 朱雀"},{jx:3,gz:58,js:"玉宇 解神 金匮",xs:"小耗 天贼"},{jx:3,gz:59,js:"驿马 天后 天仓 金堂 宝光",xs:"月破 大耗 四废 往亡 重日 阴阳交破"},{jx:4,gz:0,js:"天恩 六仪 解神 金匮",xs:"月破 大耗 灾煞 天火 厌对 招摇 五虚"},{jx:4,gz:1,js:"天恩 阴德 圣心 宝光",xs:"月煞 月虚 月害 四击"},{jx:4,gz:2,js:"月德 天恩 母仓 三合 天马 天喜 天医 益后 五合 鸣吠对",xs:"大煞 归忌 白虎"},{jx:4,gz:3,js:"天恩 母仓 续世 五合 玉堂 鸣吠对",xs:"河魁 大时 大败 咸池 九坎 九焦 血忌 往亡 复日"},{jx:4,gz:4,js:"天恩 月恩 四相 时德 时阳 生气 要安",xs:"五虚 九空 天牢"},{jx:4,gz:5,js:"四相 王日 玉宇",xs:"游祸 血支 重日 元武"},{jx:4,gz:6,js:"阳德 官日 金堂 司命 鸣吠",xs:"月建 小时 土府 月刑 月厌 地火 土符"},{jx:4,gz:7,js:"月德合 守日 吉期 六合",xs:"勾陈"},{jx:4,gz:8,js:"月空 相日 驿马 天后 天巫 福德 除神 青龙 鸣吠",xs:"五虚 五离"},{jx:4,gz:9,js:"民日 不将 敬安 除神 明堂 鸣吠",xs:"天罡 死神 天吏 致死 天贼 五离"},{jx:4,gz:10,js:"三合 临日 时阴 天仓 不将 普护",xs:"死气 天刑"},{jx:4,gz:11,js:"五富 不将 福生",xs:"劫煞 小耗 重日 朱雀"},{jx:4,gz:12,js:"月德 六仪 解神 金匮 鸣吠对",xs:"月破 大耗 灾煞 天火 厌对 招摇 四忌 七鸟 五虚 触水龙"},{jx:4,gz:13,js:"阴德 圣心 宝光",xs:"月煞 月虚 月害 复日"},{jx:4,gz:14,js:"母仓 月恩 四相 三合 天马 天喜 天医 益后 五合",xs:"大煞 归忌 白虎"},{jx:4,gz:15,js:"天恩 母仓 四相 续世 五合 玉堂",xs:"河魁 大时 大败 咸池 九坎 九焦 血忌 往亡"},{jx:4,gz:16,js:"天恩 时德 时阳 生气 要安",xs:"五虚 九空 天牢"},{jx:4,gz:17,js:"月德合 天恩 王日 玉宇",xs:"游祸 血支 重日 元武"},{jx:4,gz:18,js:"月空 天恩 阳德 官日 金堂 司命 鸣吠",xs:"月建 小时 土府 月刑 月厌 地火 土符"},{jx:4,gz:19,js:"天恩 守日 吉期 六合 不将",xs:"触水龙 勾陈"},{jx:4,gz:20,js:"相日 驿马 天后 天巫 福德 不将 除神 青龙 鸣吠",xs:"五虚 八风 五离"},{jx:4,gz:21,js:"民日 不将 敬安 除神 明堂 鸣吠",xs:"天罡 死神 天吏 致死 天贼 五离"},{jx:4,gz:22,js:"月德 三合 临日 时阴 天仓 不将 普护",xs:"死气 五墓 天刑"},{jx:4,gz:23,js:"五富 福生",xs:"劫煞 小耗 四穷 七鸟 复日 重日 朱雀"},{jx:4,gz:24,js:"月恩 四相 六仪 解神 金匮",xs:"月破 大耗 灾煞 天火 厌对 招摇 五虚"},{jx:4,gz:25,js:"四相 阴德 圣心 宝光",xs:"月煞 月虚 月害 四击"},{jx:4,gz:26,js:"母仓 三合 天马 天喜 天医 益后 五合 鸣吠对",xs:"大煞 归忌 白虎"},{jx:4,gz:27,js:"月德合 母仓 续世 五合 玉堂 鸣吠对",xs:"河魁 大时 大败 咸池 九坎 九焦 血忌 往亡"},{jx:4,gz:28,js:"月空 时德 时阳 生气 要安",xs:"五虚 九空 天牢"},{jx:4,gz:29,js:"王日 玉宇",xs:"游祸 血支 重日 元武"},{jx:4,gz:30,js:"天赦 阳德 官日 金堂 司命 鸣吠",xs:"月建 小时 土府 月刑 月厌 地火 土符"},{jx:4,gz:31,js:"守日 吉期 六合 不将",xs:"勾陈"},{jx:4,gz:32,js:"月德 相日 驿马 天后 天巫 福德 不将 除神 青龙 鸣吠",xs:"五虚 五离"},{jx:4,gz:33,js:"民日 敬安 除神 明堂 鸣吠",xs:"天罡 死神 天吏 致死 天贼 复日 五离"},{jx:4,gz:34,js:"月恩 四相 三合 临日 时阴 天仓 不将",xs:"死气 天刑"},{jx:4,gz:35,js:"四相 五富 福生",xs:"劫煞 小耗 重日 朱雀"},{jx:4,gz:36,js:"六仪 解神 金匮 鸣吠对",xs:"月破 大耗 灾煞 天火 厌对 招摇 五虚"},{jx:4,gz:37,js:"月德合 阴德 圣心 宝光",xs:"月煞 月虚 月害 四击"},{jx:4,gz:38,js:"月空 母仓 三合 天马 天喜 天医 益后 五合 鸣吠对",xs:"大煞 归忌 白虎"},{jx:4,gz:39,js:"母仓 续世 五合 玉堂 鸣吠对",xs:"河魁 大时 大败 咸池 九坎 九焦 血忌 往亡"},{jx:4,gz:40,js:"时德 时阳 生气 要安",xs:"五虚 八风 九空 地囊 天牢"},{jx:4,gz:41,js:"王日 玉宇",xs:"游祸 血支 重日 元武"},{jx:4,gz:42,js:"月德 阳德 官日 金堂 司命 鸣吠",xs:"月建 小时 土府 月刑 月厌 地火 土符 大会 阴阳俱错"},{jx:4,gz:43,js:"天愿 守日 吉期 六合",xs:"复日 八专 勾陈"},{jx:4,gz:44,js:"月恩 四相 相日 驿马 天后 天巫 福德 不将 除神 青龙",xs:"五虚 五离"},{jx:4,gz:45,js:"天恩 四相 民日 敬安 除神 明堂 鸣吠",xs:"天罡 死神 天吏 致死 天贼 五离"},{jx:4,gz:46,js:"天恩 三合 临日 时阴 天仓 普护",xs:"死气 天刑"},{jx:4,gz:47,js:"月德合 天恩 五富 福生",xs:"劫煞 小耗 重日 朱雀"},{jx:4,gz:48,js:"月空 天恩 六仪 解神 金匮 鸣吠对",xs:"月破 大耗 灾煞 天火 厌对 招摇 四废 五虚 阴阳击冲"},{jx:4,gz:49,js:"天恩 阴德 圣心 宝光",xs:"月煞 月虚 月害 四击 八专 触水龙"},{jx:4,gz:50,js:"母仓 三合 天马 天喜 天医 益后 五合 鸣吠对",xs:"大煞 归忌 八专 白虎"},{jx:4,gz:51,js:"母仓 续世 五合 玉堂 鸣吠对",xs:"河魁 大时 大败 咸池 四耗 九坎 九焦 血忌 往亡"},{jx:4,gz:52,js:"月德 时德 时阳 生气 要安",xs:"五虚 九空 天牢"},{jx:4,gz:53,js:"王日 玉宇",xs:"游祸 血支 复日 重日 元武"},{jx:4,gz:54,js:"月德 四相 阳德 官日 金堂 司命",xs:"月建 小时 土府 月刑 月厌 地火 土符 小会"},{jx:4,gz:55,js:"四相 守日 吉期 六合",xs:"八专 勾陈"},{jx:4,gz:56,js:"相日 驿马 天后 天巫 福德 除神 青龙 鸣吠",xs:"五虚 五离 八专"},{jx:4,gz:57,js:"月德合 民日 敬安 除神 明堂 鸣吠",xs:"天罡 死神 天吏 致死 天贼 五离"},{jx:4,gz:58,js:"月空 三合 临日 时阴 天仓 普护",xs:"死气 地囊 天刑"},{jx:4,gz:59,js:"五富 不将 福生",xs:"劫煞 小耗 四废 重日 朱雀"},{jx:5,gz:0,js:"天德 月德 天恩 金堂 解神",xs:"月害 大时 大败 咸池 小耗 五虚 九坎 九焦 归忌 天刑"},{jx:5,gz:1,js:"天恩",xs:"月破 大耗 月刑 四击 九空 朱雀"},{jx:5,gz:2,js:"天恩 母仓 五富 五合 金匮 鸣吠对",xs:"游祸"},{jx:5,gz:3,js:"天恩 母仓 三合 临日 天喜 天医 敬安 五合 宝光 鸣吠对",xs:"大煞"},{jx:5,gz:4,js:"天恩 四相 时德 天马 普护",xs:"天罡 五虚 五墓 白虎"},{jx:5,gz:5,js:"天德合 月德合 四相 王日 驿马 天后 时阳 生气 福生 玉堂",xs:"月厌 地火 复日 重日 阴错"},{jx:5,gz:6,js:"月空 官日 六合 鸣吠",xs:"天吏 致死 血支 往亡 天牢"},{jx:5,gz:7,js:"月恩 守日 圣心",xs:"月建 小时 土府 元武"},{jx:5,gz:8,js:"阳德 相日 吉期 不将 益后 除神 司命 鸣吠",xs:"劫煞 天贼 五虚 五离"},{jx:5,gz:9,js:"民日 天巫 福德 天仓 不将 续世 除神 鸣吠",xs:"劫煞 天贼 五虚 五离"},{jx:5,gz:10,js:"天德 月德 不将 要安 青龙",xs:"河魁 死神 月煞 月虚 土符"},{jx:5,gz:11,js:"阴德 三合 时阴 六仪 玉宇 明堂",xs:"厌对 招摇 死气 重日"},{jx:5,gz:12,js:"金堂 解神 鸣吠对",xs:"月害 大时 大败 咸池 小耗 四忌 七鸟 五虚 九坎 九焦 归忌 触水龙 天刑"},{jx:5,gz:13,js:"[无神煞]",xs:"月破 大耗 月刑 四击 九空 朱雀"},{jx:5,gz:14,js:"母仓 四相 五富 五合 金匮",xs:"游祸"},{jx:5,gz:15,js:"天德合 月德合 天恩 母仓 四相 三合 临日 天喜 天医 敬安 五合 宝光",xs:"大煞 复日"},{jx:5,gz:16,js:"月空 天恩 时德 天马 普护",xs:"天罡 五虚 白虎"},{jx:5,gz:17,js:"天恩 月恩 王日 驿马 天后 时阳 生气 福生 玉堂",xs:"月厌 地火 重日"},{jx:5,gz:18,js:"天恩 官日 六合 不将 鸣吠",xs:"天吏 致死 血支 往亡 天牢"},{jx:5,gz:19,js:"天恩 守日 不将 圣心",xs:"月建 小时 土府 触水龙 元武"},{jx:5,gz:20,js:"天德 月德 阳德 相日 吉期 不将 益后 除神 司命 鸣吠",xs:"劫煞 天贼 五虚 八风 五离"},{jx:5,gz:21,js:"民日 天巫 福德 天仓 不将 续世 除神 鸣吠",xs:"灾煞 天火 血忌 五离 勾陈"},{jx:5,gz:22,js:"要安 青龙",xs:"河魁 死神 月煞 月虚 土符 地囊"},{jx:5,gz:23,js:"阴德 三合 时阴 六仪 玉宇 明堂",xs:"厌对 招摇 死气 四穷 七鸟 重日"},{jx:5,gz:24,js:"四相 金堂 解神",xs:"月害 大时 大败 咸池 小耗 五虚 九坎 九焦 归忌 天刑"},{jx:5,gz:25,js:"天德合 月德合 四相",xs:"月破 大耗 月刑 四击 九空 复日 朱雀"},{jx:5,gz:26,js:"月空 母仓 五富 五合 金匮 鸣吠对",xs:"游祸"},{jx:5,gz:27,js:"母仓 月恩 三合 临日 天喜 天医 敬安 五合 宝光 鸣吠对",xs:"大煞"},{jx:5,gz:28,js:"时德 天马 普护",xs:"天罡 五虚 白虎"},{jx:5,gz:29,js:"王日 驿马 天后 时阳 生气 福生 玉堂",xs:"月厌 地火 重日"},{jx:5,gz:30,js:"天德 月德 天赦 官日 六合 不将 鸣吠",xs:"天吏 致死 血支 往亡 天牢"},{jx:5,gz:31,js:"守日 不将 圣心",xs:"月建 小时 土府 元武"},{jx:5,gz:32,js:"阳德 相日 吉期 益后 除神 司命 鸣吠",xs:"劫煞 天贼 五虚 五离"},{jx:5,gz:33,js:"民日 天巫 福德 天仓 续世 除神 鸣吠",xs:"灾煞 天火 血忌 五离 勾陈"},{jx:5,gz:34,js:"四相 不将 要安 青龙",xs:"河魁 死神 月煞 月虚 土符"},{jx:5,gz:35,js:"天德合 月德合 四相 阴德 三合 时阴 六仪 玉宇 明堂",xs:"厌对 招摇 死气 复日 重日"},{jx:5,gz:36,js:"月空 金堂 解神 鸣吠对",xs:"月害 大时 大败 咸池 小耗 五虚 九坎 九焦 归忌 天刑"},{jx:5,gz:37,js:"月恩",xs:"月破 大耗 月刑 四击 九空 朱雀"},{jx:5,gz:38,js:"母仓 五富 五合 金匮 鸣吠对",xs:"游祸"},{jx:5,gz:39,js:"母仓 三合 临日 天喜 天医 敬安 五合 宝光 鸣吠对",xs:"大煞"},{jx:5,gz:40,js:"天德 月德 时德 天马 普护",xs:"天罡 五虚 八风 白虎"},{jx:5,gz:41,js:"王日 驿马 天后 时阳 生气 福生 玉堂",xs:"月厌 地火 重日"},{jx:5,gz:42,js:"官日 六合 鸣吠",xs:"天吏 致死 血支 往亡 天牢 逐阵"},{jx:5,gz:43,js:"守日 圣心",xs:"月建 小时 土府 八专 元武 阳错"},{jx:5,gz:44,js:"四相 阳德 相日 吉期 不将 益后 除神 司命",xs:"劫煞 天贼 五虚 五离"},{jx:5,gz:45,js:"天德合 月德合 天恩 四相 民日 天巫 福德 天仓 续世 除神 鸣吠",xs:"灾煞 天火 血忌 复日 五离 勾陈"},{jx:5,gz:46,js:"月空 天恩 要安 青龙",xs:"河魁 死神 月煞 月虚 土符"},{jx:5,gz:47,js:"天恩 月恩 阴德 三合 时阴 六仪 玉宇 明堂",xs:"厌对 招摇 死气 重日"},{jx:5,gz:48,js:"天恩 金堂 解神 鸣吠对",xs:"月害 大时 大败 咸池 小耗 四废 五虚 九坎 九焦 归忌 天刑"},{jx:5,gz:49,js:"天恩",xs:"月破 大耗 月刑 四击 九空 八专 触水龙 朱雀 阳错阴冲"},{jx:5,gz:50,js:"天德 月德 母仓 五富 五合 金匮 鸣吠对",xs:"游祸 八专"},{jx:5,gz:51,js:"母仓 三合 临日 天喜 天医 敬安 五合 宝光 鸣吠对",xs:"四耗 大煞"},{jx:5,gz:52,js:"时德 天马 普护",xs:"天罡 五虚 地囊 白虎"},{jx:5,gz:53,js:"王日 驿马 天后 时阳 生气 福生 玉堂",xs:"月厌 地火 重日 大会 阴错"},{jx:5,gz:54,js:"天愿 四相 官日 六合 不将",xs:"天吏 致死 血支 往亡 天牢 逐阵"},{jx:5,gz:55,js:"天德合 月德合 四相 守日 圣心",xs:"月建 小时 土府 复日 八专 元武 阳错"},{jx:5,gz:56,js:"月空 阳德 相日 吉期 益后 除神 司命 鸣吠",xs:"劫煞 天贼 五虚 五离 八专"},{jx:5,gz:57,js:"月恩 民日 天巫 福德 天仓 续世 除神 鸣吠",xs:"灾煞 天火 血忌 五离 勾陈"},{jx:5,gz:58,js:"不将 要安 青龙",xs:"河魁 死神 月煞 月虚 土符"},{jx:5,gz:59,js:"阴德 三合 时阴 六仪 玉宇 明堂",xs:"厌对 招摇 死气 四废 重日"},{jx:6,gz:0,js:"天恩 时阳 民日 三合 临日 时阴 福生 青龙",xs:"死气"},{jx:6,gz:1,js:"天恩 母仓 明堂",xs:"小耗 归忌"},{jx:6,gz:2,js:"月空 天恩 驿马 天后 圣心 解神 五合 鸣吠对",xs:"月破 大耗 月刑 天刑"},{jx:6,gz:3,js:"月德合 天恩 益后 五合 鸣吠对",xs:"天吏 致死 朱雀 五虚 七符"},{jx:6,gz:4,js:"天德合 天恩 母仓 三合 天喜 天医 续世 金匮",xs:"月厌 地火 四击 大煞 血忌"},{jx:6,gz:5,js:"天愿 六合 五富 要安 宝光",xs:"河魁 劫煞 重日"},{jx:6,gz:6,js:"天马 时阳 生气 玉宇 鸣吠",xs:"灾煞 天火 复日 白虎"},{jx:6,gz:7,js:"母仓 金堂 玉堂",xs:"月煞 月虚 血支 天贼 五虚"},{jx:6,gz:8,js:"月德 月恩 四相 王日",xs:"月建 小时 土符 五离 天牢"},{jx:6,gz:9,js:"天德 四相 阴德 官日 吉期 不将 除神 鸣吠",xs:"大时 大败 咸池 九坎 九焦 往亡 五离 元武"},{jx:6,gz:10,js:"母仓 阳德 守日 天巫 福德 六仪 敬安 司命",xs:"厌对 招摇 天狗 九空"},{jx:6,gz:11,js:"相日 普护",xs:"天罡 死神 月害 游祸 重日 勾陈"},{jx:6,gz:12,js:"月空 时德 民日 三合 临日 时阴 福生 青龙 鸣吠对",xs:"死气 触水龙"},{jx:6,gz:13,js:"月德合 母仓 明堂",xs:"小耗 归忌"},{jx:6,gz:14,js:"天德合 驿马 天后 圣心 解神 五合",xs:"月破 大耗 月刑"},{jx:6,gz:15,js:"天恩 益后 五合",xs:"天吏 致死 五虚 土符 朱雀"},{jx:6,gz:16,js:"天恩 母仓 三合 天喜 天医 续世 金匮",xs:"月厌 地火 四击 大煞 血忌 复日 大会"},{jx:6,gz:17,js:"天恩 六合 五富 要安 宝光",xs:"河魁 劫煞 重日"},{jx:6,gz:18,js:"月德 天德 月恩 四相 天马 时阳 生气 不将 玉宇 鸣吠",xs:"灾煞 天火 白虎"},{jx:6,gz:19,js:"天德 天恩 母仓 四相 不将 金堂 玉堂",xs:"月煞 月虚 血支 天贼 五虚 触水龙"},{jx:6,gz:20,js:"王日 天仓 不将 除神 鸣吠",xs:"月建 小时 土府 五离 天牢"},{jx:6,gz:21,js:"阴德 官日 吉期 不将 除神 鸣吠",xs:"大时 大败 咸池 九坎 九焦 往亡 五离 元武"},{jx:6,gz:23,js:"月德合 相日 普护",xs:"天罡 死神 月害 游祸 五虚 八风 地囊 重日 勾陈"},{jx:6,gz:24,js:"天德合 时德 民日 三合 临日 时阴 福生 青龙",xs:"死气"},{jx:6,gz:25,js:"母仓 明堂",xs:"小耗 归忌"},{jx:6,gz:26,js:"驿马 天后 圣心",xs:"五合 鸣吠对"},{jx:6,gz:27,js:"益后 五合 鸣吠对",xs:"天吏 致死 五虚 土符 朱雀"},{jx:6,gz:28,js:"月德 母仓 月恩 四相 三合 天喜 天医 续世 金匮",xs:"月厌 地火 四击 大煞 血忌"},{jx:6,gz:29,js:"天德 四相 六合 五富 不将 要安 宝光",xs:"河魁 劫煞 重日"},{jx:6,gz:30,js:"天马 时阳 生气 不将 玉宇 鸣吠",xs:"灾煞 天火 白虎"},{jx:6,gz:31,js:"母仓 不将 金堂",xs:"月煞 月虚 血支 天贼 五虚"},{jx:6,gz:32,js:"月空 王日 天仓 除神 鸣吠",xs:"月建 小时 土府 五离 天牢"},{jx:6,gz:33,js:"月德合 阴德 官日 吉期 除神 鸣吠",xs:"大时 大败 咸池 九坎 九焦 往亡 五离 元武"},{jx:6,gz:34,js:"天德合 母仓 阳德 守日 天巫 福德 六仪 敬安 司命",xs:"厌对 招摇 天狗 九空"},{jx:6,gz:35,js:"相日 普护",xs:"天罡 死神 月害 游祸 五虚 重日 勾陈"},{jx:6,gz:36,js:"时德 民日 三合 临日 时阴 福生 青龙 鸣吠对",xs:"死气 四忌 九虎 复日"},{jx:6,gz:37,js:"母仓 明堂",xs:"小耗 五墓 归忌"},{jx:6,gz:38,js:"月德 月恩 四相 驿马 天后 圣心 解神 五合 鸣吠对",xs:"月破 大耗 月刑 天刑"},{jx:6,gz:39,js:"天德 四相 益后 五合 鸣吠对",xs:"天吏 致死 五虚 土符 朱雀"},{jx:6,gz:40,js:"母仓 三合 天喜 天医 续世 金匮",xs:"月厌 地火 四击 大煞 血忌 阴错"},{jx:6,gz:41,js:"六合 五富 不将 要安 宝光",xs:"河魁 劫煞 重日"},{jx:6,gz:42,js:"月空 天马 时阳 生气 玉宇 鸣吠",xs:"灾煞 天火 白虎"},{jx:6,gz:43,js:"月德合 母仓 金堂 玉堂",xs:"月煞 月虚 血支 天贼 五虚 八风 八专"},{jx:6,gz:44,js:"天德合 天赦 王日 天仓 不将",xs:"月建 小时 土府 五离 天牢"},{jx:6,gz:45,js:"天恩 阴德 官日 吉期 除神 鸣吠",xs:"大时 大败 咸池 九坎 九焦 往亡 五离 元武"},{jx:6,gz:46,js:"天恩 母仓 阳德 守日 天巫 福德 六仪 敬安 司命",xs:"厌对 招摇 天狗 九空 复日"},{jx:6,gz:47,js:"天恩 相日 普护",xs:"天罡 死神 月害 游祸 四穷 九虎 五虚 重日 勾陈"},{jx:6,gz:48,js:"月德 天恩 月恩 四相 时德 民日 三合 临日 时阴 福生 青龙 鸣吠对",xs:"死气"},{jx:6,gz:49,js:"天德 天恩 母仓 四相 明堂",xs:"小耗 归忌 八专 触水龙"},{jx:6,gz:50,js:"驿马 天后 圣心 解神 五合 鸣吠对",xs:"月破 大耗 月刑 四废 八专 天刑"},{jx:6,gz:51,js:"益后 五合 鸣吠对",xs:"天吏 致死 四废 五虚 土符 朱雀 三阴"},{jx:6,gz:52,js:"月空 母仓 三合 天喜 天医 续世 金匮",xs:"月厌 地火 四击 大煞 血忌"},{jx:6,gz:53,js:"月德合 六合 五富 要安 宝光",xs:"河魁 劫煞 地囊 重日"},{jx:6,gz:54,js:"天德合 天马 时阳 生气 不将 玉宇",xs:"四耗 白虎"},{jx:6,gz:55,js:"母仓 金堂 玉堂",xs:"月煞 月虚 血支 天贼 五虚 八专"},{jx:6,gz:56,js:"王日 天仓 除神 鸣吠",xs:"月建 小时 土府 复日 五离 八专 天牢 阳错"},{jx:6,gz:57,js:"阴德 官日 吉期 除神 鸣吠",xs:"大时 大败 咸池 九坎 九焦 往亡 五离 元武"},{jx:6,gz:58,js:"月德 母仓 月恩 四相 阳德 守日 天巫 福德 六仪 敬安 司命",xs:"厌对 招摇 天狗 九空"},{jx:6,gz:59,js:"天德 四相 相日 普护",xs:"天罡 死神 月害 游祸 五虚 重日 勾陈"},{jx:7,gz:0,js:"月空 天恩 时德 阳德 民日 玉宇 司命",xs:"河魁 死神 天吏 致死 往亡"},{jx:7,gz:1,js:"月德合 天恩 母仓 三合 时阴 金堂",xs:"死气 勾陈"},{jx:7,gz:2,js:"天恩 解神 五合 青龙 鸣吠对",xs:"劫煞 小耗 地囊 归忌"},{jx:7,gz:3,js:"天恩 五合 明堂 鸣吠对",xs:"月破 大耗 灾煞 天火 月厌 地火 五虚"},{jx:7,gz:4,js:"天恩 母仓 六合 不将 敬安",xs:"月煞 月虚 四击 天刑"},{jx:7,gz:5,js:"三合 临日 天喜 天医 普护",xs:"成日 朱雀"},{jx:7,gz:6,js:"月德 福生 金匮 鸣吠",xs:"天罡 大时 大败 咸池 天贼 九坎 九焦"},{jx:7,gz:7,js:"母仓 阴德 时阳 生气 天仓 不将 宝光",xs:"五虚 九空 土符 复日"},{jx:7,gz:8,js:"四相 王日 天马 五富 不将 圣心 除神 鸣吠",xs:"游祸 血支 五离 白虎"},{jx:7,gz:9,js:"月恩 四相 官日 六仪 益后 除神 除神 玉堂 鸣吠",xs:"月建 小时 土府 月刑 厌对 招摇 五离"},{jx:7,gz:10,js:"月空 母仓 守日 吉期 续世",xs:"月害 血忌 天牢"},{jx:7,gz:11,js:"月德合 相日 驿马 天后 天巫 福德 要安",xs:"五虚 大煞 重日 元武"},{jx:7,gz:12,js:"时德 阳德 民日 玉宇 司命 鸣吠对",xs:"河魁 死神 天吏 致死 往亡 触水龙"},{jx:7,gz:13,js:"母仓 三合 时阴 金堂",xs:"死气 勾陈"},{jx:7,gz:14,js:"解神 五合 青龙",xs:"劫煞 小耗 归忌"},{jx:7,gz:15,js:"天恩 五合 明堂",xs:"月破 大耗 灾煞 天火 月厌 地火 五虚 阴道冲阳"},{jx:7,gz:16,js:"月德 天恩 母仓 天愿 六合 敬安",xs:"月煞 月虚 四击 天刑"},{jx:7,gz:17,js:"天恩 三合 临日 天喜 天医 不将 普护",xs:"复日 重日 朱雀"},{jx:7,gz:18,js:"天恩 四相 不将 福生 金匮 鸣吠",xs:"天罡 大时 大败 咸池 天贼 九坎 九焦"},{jx:7,gz:19,js:"天恩 母仓 月恩 四相 阴德 时阳 生气 天仓 不将 宝光",xs:"五虚 九空 土符 触水龙"},{jx:7,gz:20,js:"月空 王日 天马 五富 不将 圣心 除神 鸣吠",xs:"游祸 血支 五离 白虎"},{jx:7,gz:21,js:"月德合 官日 六仪 益后 除神 玉堂 鸣吠",xs:"月建 小时 土府 月刑 厌对 招摇 五离"},{jx:7,gz:22,js:"母仓 守日 吉期 续世",xs:"月害 血忌 天牢"},{jx:7,gz:23,js:"相日 驿马 天后 天巫 福德 要安",xs:"五虚 八风 大煞 重日 元武"},{jx:7,gz:24,js:"时德 阳德 民日 玉宇 司命",xs:"河魁 死神 天吏 致死 往亡"},{jx:7,gz:25,js:"母仓 三合 时阴 金堂",xs:"死气 勾陈"},{jx:7,gz:26,js:"月德 解神 五合 青龙 鸣吠对",xs:"劫煞 小耗 归忌"},{jx:7,gz:27,js:"五合 明堂 鸣吠对",xs:"月破 大耗 灾煞 天火 月厌 地火 五虚 复日 大会"},{jx:7,gz:28,js:"母仓 四相 六合 不将 敬安",xs:"月煞 月虚 四击 天刑"},{jx:7,gz:29,js:"月恩 四相 三合 临日 天喜 天医 不将 普护",xs:"重日 朱雀"},{jx:7,gz:30,js:"月空 不将 福生 金匮 鸣吠",xs:"天罡 大时 大败 咸池 天贼 九坎 九焦"},{jx:7,gz:31,js:"月德合 母仓 阳德 时阳 生气 天仓 宝光",xs:"五虚 九空 土符"},{jx:7,gz:32,js:"王日 天马 五富 圣心 除神 鸣吠",xs:"游祸 血支 地囊 五离 白虎"},{jx:7,gz:33,js:"官日 六仪 益后 除神 玉堂 鸣吠",xs:"月建 小时 土府 月刑 厌对 招摇 五离"},{jx:6,gz:22,js:"月空 母仓 阳德 守日 天巫 福德 六仪 敬安 司命",xs:`厌对 招摇 天狗 九空
`},{jx:7,gz:34,js:"母仓 守日 吉期 续世",xs:"月害 血忌 天牢"},{jx:7,gz:35,js:"相日 驿马 天后 天巫 福德 要安",xs:"五虚 大煞 重日 元武"},{jx:7,gz:36,js:"月德 时德 阳德 民日 玉宇 司命 鸣吠对",xs:"河魁 死神 天吏 致死 四忌 九虎 往亡"},{jx:7,gz:37,js:"母仓 三合 时阴 金堂",xs:"死气 五墓 复日 勾陈"},{jx:7,gz:38,js:"四相 解神 五合 青龙 鸣吠对",xs:"劫煞 小耗 归忌"},{jx:7,gz:39,js:"月恩 四相 五合 明堂 鸣吠对",xs:"月破 大耗 灾煞 天火 月厌 地火 五虚"},{jx:7,gz:40,js:"月空 母仓 六合 不将 敬安",xs:"月煞 月虚 四击 天刑"},{jx:7,gz:41,js:"月德合 三合 临日 天喜 天医 普护",xs:"重日 朱雀"},{jx:7,gz:42,js:"福生 金匮 鸣吠",xs:"天罡 大时 大败 咸池 天贼 九坎 九焦"},{jx:7,gz:43,js:"母仓 阴德 时阳 生气 天仓 宝光",xs:"五虚 八风 九空 土符 八专"},{jx:7,gz:44,js:"天赦 王日 天马 五富 不将 圣心 除神",xs:"游祸 血支 五离 白虎"},{jx:7,gz:45,js:"天恩 官日 六仪 益后 除神 玉堂 鸣吠",xs:"月建 小时 土府 月厌 厌对 招摇 五离 小会"},{jx:7,gz:46,js:"月德 天恩 母仓 守日 吉期 续世",xs:"月害 血忌 天牢"},{jx:7,gz:47,js:"天恩 相日 驿马 天后 天巫 福德 要安",xs:"四穷 九虎 五虚 大煞 复日 重日 元武"},{jx:7,gz:48,js:"天恩 四相 时德 阳德 民日 玉宇 司命 鸣吠对",xs:"河魁 死神 天吏 致死 往亡"},{jx:7,gz:49,js:"天恩 母仓 月恩 四相 三合 时阴 金堂",xs:"死气 八专 触水龙 勾陈"},{jx:7,gz:50,js:"月空 解神 五合 青龙 鸣吠对",xs:"劫煞 小耗 四废 归忌 八专"},{jx:7,gz:51,js:"月德合 五合 明堂 鸣吠对",xs:"月破 大耗 灾煞 天火 月厌 地火 四废 五虚 阴错"},{jx:7,gz:52,js:"母仓 六合 敬安",xs:"月煞 月虚 四击 天刑"},{jx:7,gz:53,js:"三合 临日 天喜 天医 普护",xs:"重日 朱雀"},{jx:7,gz:54,js:"不将 福生 金匮",xs:"天罡 大时 大败 咸池 天贼 四耗 九坎 九焦"},{jx:7,gz:55,js:"母仓 阴德 时阳 生气 天仓 宝光",xs:"五虚 九空 土符 八专"},{jx:7,gz:56,js:"月德 王日 天马 五富 圣心 除神 鸣吠",xs:"游祸 血支 五离 八专 白虎"},{jx:7,gz:57,js:"官日 六仪 益后 除神 玉堂 鸣吠",xs:"月建 小时 土府 月刑 厌对 招摇 复日 五离 阳错"},{jx:7,gz:58,js:"母仓 四相 守日 吉期 续世",xs:"月害 血忌 天牢"},{jx:7,gz:59,js:"月恩 四相 相日 驿马 天后 天巫 福德 要安",xs:"五虚 大煞 重日 元武"},{jx:8,gz:0,js:"天恩 时德 民日 天符 福德 普护",xs:"灾煞 天火 大煞 归忌 天牢"},{jx:8,gz:1,js:"天恩 母仓 福生",xs:"天罡 死神 月煞 月虚 元武"},{jx:8,gz:2,js:"天德 月德 天恩 阳德 三合 临日 时阴 五合 司命 鸣吠对",xs:"月厌 地火 死气 九坎 九焦 孤辰"},{jx:8,gz:3,js:"天恩 六合 圣心 五合 鸣吠对",xs:"大时 大败 咸池 小耗 五虚 勾陈"},{jx:8,gz:4,js:"天恩 母仓 不将 益后 解神 青龙",xs:"月破 大耗 四击 五墓 九空 往亡 复日"},{jx:8,gz:5,js:"阴德 续世 明堂",xs:"游祸 天贼 血忌 重日"},{jx:8,gz:6,js:"月恩 三合 天喜 天医 天仓 不将 要安 鸣吠",xs:"天刑"},{jx:8,gz:7,js:"天德合 月德合 母仓 不将 玉宇",xs:"河魁 月刑 五虚 地囊 朱雀"},{jx:8,gz:8,js:"月空 四相 王日 驿马 天后 时阳 生气 六仪 金堂 除神 金匮 鸣吠",xs:"厌对 招摇 五离"},{jx:8,gz:9,js:"四相 官日 除神 宝光 鸣吠",xs:"月害 天吏 致死 血支 五离"},{jx:8,gz:10,js:"母仓 守日 天马",xs:"月建 小时 土府 白虎 阴位"},{jx:8,gz:11,js:"相日 吉期 五富 敬安 玉堂",xs:"劫煞 五虚 土符 重日"},{jx:8,gz:12,js:"天德 月德 时德 民日 天巫 福德 普护 鸣吠对",xs:"灾煞 天火 大煞 归忌 触水龙 天牢"},{jx:8,gz:13,js:"母仓 福生",xs:"天罡 死神 月煞 月虚 元武"},{jx:8,gz:14,js:"阳德 三合 临日 时阴 五合 司命",xs:"月厌 地火 死气 九坎 九焦 复日 孤辰"},{jx:8,gz:15,js:"天恩 六合 圣心 五合",xs:"大时 大败 咸池 小耗 五虚 勾陈"},{jx:8,gz:16,js:"天恩 母仓 月恩 不将 益后 解神 青龙",xs:"月破 大耗 四击 九空 往亡"},{jx:8,gz:17,js:"天德合 月德合 天恩 阴德 不将 续世 明堂",xs:"游祸 天贼 血忌 重日"},{jx:8,gz:18,js:"月空 天恩 四相 三合 天喜 天医 天仓 不将 要安 鸣吠",xs:"天刑"},{jx:8,gz:19,js:"天恩 母仓 四相 不将 玉宇",xs:"河魁 月刑 五虚 触水龙 朱雀"},{jx:8,gz:20,js:"王日 驿马 天后 时阳 生气 六仪 金堂 除神 金匮 鸣吠",xs:"厌对 招摇 五离"},{jx:8,gz:21,js:"官日 除神 宝光 鸣吠",xs:"月害 天吏 致死 血支 五离"},{jx:8,gz:22,js:"天德 月德 母仓 守日 天马",xs:"月建 小时 土府 白虎"},{jx:8,gz:23,js:"相日 吉期 五富 敬安 玉堂",xs:"劫煞 五虚 八风 土符 重日"},{jx:8,gz:24,js:"时德 民日 天巫 福德 普护",xs:"灾煞 天火 大煞 归忌 复日 天牢"},{jx:8,gz:25,js:"母仓 福生",xs:"天罡 死神 月煞 月虚 元武"},{jx:8,gz:26,js:"月恩 阳德 三合 临日 时阴 五合 司命 鸣吠对",xs:"月厌 地火 死气 九坎 九焦 行狠"},{jx:8,gz:27,js:"天德合 月德合 天愿 六合 不将 圣心 五合 鸣吠对",xs:"大时 大败 咸池 小耗 五虚 勾陈"},{jx:8,gz:28,js:"月空 母仓 四相 不将 益后 解神 青龙",xs:"月破 大耗 四击 九空 往亡"},{jx:8,gz:29,js:"四相 阴德 不将 续世 明堂",xs:"游祸 天贼 血忌 重日"},{jx:8,gz:30,js:"三合 天喜 天医 天仓 要安 鸣吠",xs:"天刑"},{jx:8,gz:31,js:"母仓 玉宇",xs:"河魁 月刑 五虚 朱雀"},{jx:8,gz:32,js:"天德 月德 王日 驿马 天后 时阳 生气 六仪 金堂 除神 金匮",xs:"厌对 招摇 五离"},{jx:8,gz:33,js:"官日 除神 宝光 鸣吠",xs:"月害 天吏 致死 血支 五离"},{jx:8,gz:34,js:"母仓 守日 天马",xs:"月建 小时 土府 复日 白虎 小会 孤阳"},{jx:8,gz:35,js:"相日 吉期 五富 敬安 玉堂",xs:"劫煞 五虚 土符 重日"},{jx:8,gz:36,js:"月恩 时德 民日 天巫 福德 普护 鸣吠对",xs:"灾煞 天火 四忌 九虎 大煞 归忌 天牢"},{jx:8,gz:37,js:"天德合 月德合 母仓 福德",xs:"天罡 死神 月煞 月虚 地囊 元武"},{jx:8,gz:38,js:"月空 四相 阳德 三合 临日 时阴 五合 司命 鸣吠对",xs:"月厌 地火 死气 九坎 九焦 了戾"},{jx:8,gz:39,js:"四相 六合 不将 圣心 五合 鸣吠对",xs:"大时 大败 咸池 小耗 五虚 勾陈"},{jx:8,gz:40,js:"母仓 益后 解神 青龙",xs:"月破 大耗 四击 九空 往亡"},{jx:8,gz:41,js:"阴德 续世 明堂",xs:"游祸 天贼 血忌 重日"},{jx:8,gz:42,js:"天德 月德 三合 天喜 天医 天仓 要安 鸣吠",xs:"天刑"},{jx:8,gz:43,js:"母仓 玉宇",xs:"河魁 月刑 五虚 八风 八专 朱雀"},{jx:8,gz:44,js:"天赦 王日 驿马 天后 时阳 生气 六仪 金堂 除神 金匮",xs:"厌对 招摇 复日 五离"},{jx:8,gz:45,js:"天恩 官日 除神 宝光 鸣吠",xs:"月害 天吏 致死 血支 五离"},{jx:8,gz:46,js:"天恩 母仓 月德 守日 天马",xs:"月建 小时 土府 白虎 阳错"},{jx:8,gz:47,js:"天德合 月德合 天恩 相日 吉期 五富 敬安 玉堂",xs:"劫煞 四穷 九虎 五虚 土符 重日"},{jx:8,gz:48,js:"月空 天恩 四相 时德 民日 天巫 福德 普护 鸣吠对",xs:"灾煞 天火 大煞 归忌 天牢"},{jx:8,gz:49,js:"天恩 母仓 四相 福生",xs:"天罡 死神 月煞 月虚 八专 触水龙 元武"},{jx:8,gz:50,js:"阳德 三合 临日 时阴 五合 司命 鸣吠对",xs:"月厌 地火 死气 四废 九坎 九焦 八专 孤辰 阴错"},{jx:8,gz:51,js:"六合 圣心 五合 鸣吠对",xs:"大时 大败 咸池 小耗 四废 五虚 勾陈"},{jx:8,gz:52,js:"天德 月德 母仓 益后 解神 青龙",xs:"月破 大耗 四击 九空 往亡"},{jx:8,gz:53,js:"阴德 续世 明堂",xs:"游祸 天贼 血忌 重日"},{jx:8,gz:54,js:"三合 天喜 天医 天仓 不将 要安",xs:"四耗 复日 天刑"},{jx:8,gz:55,js:"母仓 玉宇",xs:"河魁 月刑 五虚 八专 朱雀"},{jx:8,gz:56,js:"月恩 王日 驿马 天后 时阳 生气 六仪 金堂 除神 金匮 鸣吠",xs:"厌对 招摇 五离 八专"},{jx:8,gz:57,js:"天德合 月德合 官日 除神 宝光 鸣吠",xs:"月害 天吏 致死 血支 五离"},{jx:8,gz:58,js:"月空 母仓 四相 守日 天马",xs:"月建 小时 土府 白虎"},{jx:8,gz:59,js:"四相 相日 吉期 五富 敬安 玉堂",xs:"劫煞 五虚 土符 重日"},{jx:9,gz:0,js:"月德 天恩 天赦 四相 官日 天马 吉期 要安",xs:"大时 大败 咸池 白虎"},{jx:9,gz:1,js:"天德 天恩 月恩 四相 守日 天巫 福德 玉宇 玉堂",xs:"月厌 地火 九空 大煞 归忌 孤辰"},{jx:9,gz:2,js:"天恩 时德 相日 六合 五富 金堂 五合 鸣吠对",xs:"河魁 死神 游祸 五虚 天牢"},{jx:9,gz:3,js:"天恩 阴德 民日 三合 时阴 五合 鸣吠对",xs:"死气 元武"},{jx:9,gz:4,js:"天恩 阳德 解神 司命",xs:"小耗 天贼 土符"},{jx:9,gz:5,js:"月德合 驿马 天后 天仓 不将 敬安",xs:"月破 大耗 重日 勾陈"},{jx:9,gz:6,js:"天德合 月空 不将 普护 青龙 鸣吠",xs:"天吏 致死 五虚"},{jx:9,gz:7,js:"三合 临日 天喜 天医 六仪 福生 明堂",xs:"厌对 招摇 四击 往亡"},{jx:9,gz:8,js:"母仓 除神 鸣吠",xs:"天罡 劫煞 月害 复日 五离 天刑"},{jx:9,gz:9,js:"母仓 时阳 生气 圣心 除神 鸣吠",xs:"灾煞 天火 五离 朱雀"},{jx:9,gz:10,js:"月德 四相 益后 金匮",xs:"月煞 月虚 血支 五虚 八风"},{jx:9,gz:11,js:"天德 月德 四相 王日 续世 宝光",xs:"月建 小时 土府 月刑 九坎 九焦 血支 重日"},{jx:9,gz:12,js:"官日 天马 吉期 要安 鸣吠对",xs:"大时 大败 咸池 触水龙 白虎"},{jx:9,gz:13,js:"守日 天巫 福德 玉宇 玉堂",xs:"月厌 地火 九空 大煞 归忌 孤辰"},{jx:9,gz:14,js:"时德 相日 六合 五富 金堂 五合",xs:"河魁 死神 游祸 五虚 地囊 天牢"},{jx:9,gz:15,js:"月德合 天德 阴德 民日 三合 时阴 不将 五合",xs:"死气 元武"},{jx:9,gz:16,js:"天德合 月空 天恩 阳德 不将 解神 司命",xs:"小耗 天贼 土符"},{jx:9,gz:17,js:"天恩 驿马 天后 天仓 不将 敬安",xs:"月破 大耗 重日 勾陈"},{jx:9,gz:18,js:"天恩 不将 普护 青龙 鸣吠",xs:"天吏 致死 五虚 复日"},{jx:9,gz:19,js:"天恩 三合 临日 天喜 天医 六仪 福生 明堂",xs:"厌对 招摇 四击 往亡 触水龙"},{jx:9,gz:20,js:"月德 母仓 四相 除神 鸣吠",xs:"天罡 劫煞 月害 五离 天刑"},{jx:9,gz:21,js:"天德 母仓 月恩 四相 时阳 生气 圣心 除神 鸣吠",xs:"灾煞 天火 五离 朱雀"},{jx:9,gz:22,js:"益后 金匮",xs:"月煞 月虚 血支 五虚"},{jx:9,gz:23,js:"王日 续世 宝光",xs:"月建 小时 土府 月刑 九坎 九焦 血忌 重日"},{jx:9,gz:24,js:"官日 天马 吉期 要安",xs:"大时 大败 咸池 白虎 岁薄"},{jx:9,gz:25,js:"月德合 月空 时德 相日 六合 五富 不将 金堂 五合 鸣吠对",xs:"河魁 死神 游祸 五虚 天牢"},{jx:9,gz:26,js:"天德合 月空 时德 相日 六合 五富 不将 金堂 五合 鸣吠对",xs:"河魁 死神 游祸 五虚 天牢"},{jx:9,gz:27,js:"阴德 民日 三合 时阴 不将 五合 鸣吠对",xs:"死气 元武"},{jx:9,gz:28,js:"阳德 不将 解神 司命",xs:"小耗 天贼 五墓 土符 复日"},{jx:9,gz:29,js:"驿马 天后 天仓 不将 敬安",xs:"月破 大耗 重日 勾陈"},{jx:9,gz:30,js:"月德 四相 普护 青龙 鸣吠",xs:"天吏 致死 五虚"},{jx:9,gz:31,js:"天德 月恩 四相 三合 临日 天喜 天医 六仪 福生 明堂",xs:"厌对 招摇 四击 往亡"},{jx:9,gz:32,js:"母仓 除神 鸣吠",xs:"天罡 劫煞 月害 五离 天刑"},{jx:9,gz:33,js:"母仓 时阳 生气 圣心 除神 鸣吠",xs:"灾煞 天火 五离 朱雀"},{jx:9,gz:34,js:"益后 金匮",xs:"月煞 月虚 血支 五虚 绝阳"},{jx:9,gz:35,js:"月德合 王日 续世 宝光",xs:"月建 小时 土府 月刑 九坎 九焦 血忌 重日 小会 纯阴"},{jx:9,gz:36,js:"天德合 月空 官日 天马 吉期 要安 鸣吠对",xs:"大时 大败 咸池 白虎"},{jx:9,gz:37,js:"守日 天巫 福德 玉宇 玉堂",xs:"月厌 地火 九空 大煞 归忌 行狠"},{jx:9,gz:38,js:"天愿 时德 相日 六合 五富 不将 金堂 五合 鸣吠对",xs:"河魁 死神 游祸 五虚 复日 天牢"},{jx:9,gz:39,js:"阴德 民日 三合 时阴 不将 五合 鸣吠对",xs:"死气 元武"},{jx:9,gz:40,js:"月德 四相 阳德 解神 司命",xs:"小耗 天贼 土符"},{jx:9,gz:41,js:"天德 月恩 四相 驿马 天后 天仓 敬安",xs:"月破 大耗 重日 勾陈"},{jx:9,gz:42,js:"普护 青龙 鸣吠",xs:"天吏 致死 四废 五虚"},{jx:9,gz:43,js:"三合 临日 天喜 天医 六仪 福生 明堂",xs:"厌对 招摇 四击 往亡 八专"},{jx:9,gz:44,js:"母仓 除神",xs:"天罡 劫煞 月害 地囊 五离 天刑"},{jx:9,gz:45,js:"月德 天恩 母仓 时阳 生气 圣心 除神 鸣吠",xs:"灾煞 天火 五离 朱雀"},{jx:9,gz:46,js:"天德合 月空 天恩 益后 金匮",xs:"月煞 月虚 血支 五虚"},{jx:9,gz:47,js:"天恩 王日 续世 宝光",xs:"月建 小时 土府 月刑 九坎 九焦 血忌 重日"},{jx:9,gz:48,js:"天恩 官日 天马 吉期 要安 鸣吠对",xs:"大时 大败 咸池 四忌 六蛇 复日 白虎 岁薄"},{jx:9,gz:49,js:"天恩 守日 天巫 福德 玉宇 玉堂",xs:"月厌 地火 九空 大煞 归忌 八专 触水龙 了戾 阴错"},{jx:9,gz:50,js:"月德 四相 时德 相日 六合 五富 金堂 五合 鸣吠对",xs:"河魁 死神 游祸 五虚 八风 八专 天牢"},{jx:9,gz:51,js:"天德 月恩 四相 阳德 民日 三合 时阴 五合 鸣吠对",xs:"死气 元武"},{jx:9,gz:52,js:"阳德 解神 司命",xs:"小耗 天贼 土符"},{jx:9,gz:53,js:"驿马 天后 天仓 敬安",xs:"月破 大耗 四废 重日 勾陈 阴阳交破"},{jx:9,gz:54,js:"普护 青龙",xs:"天吏 致死 五虚"},{jx:9,gz:55,js:"月德合 三合 临日 天喜 天医 六仪 福生 明堂",xs:"厌对 招摇 四击 往亡 八专"},{jx:9,gz:56,js:"天德合 月空 母仓 阴神 鸣吠",xs:"天罡 劫煞 月害 五离 八专 天刑"},{jx:9,gz:57,js:"母仓 时阳 生气 圣心 除神 鸣吠",xs:"灾煞 天火 四耗 五离 朱雀"},{jx:9,gz:58,js:"益后 金匮",xs:"月煞 月虚 血支 五虚 复日"},{jx:9,gz:59,js:"王日 续世 宝光",xs:"月建 小时 土府 月刑 四穷 六蛇 九坎 九焦 血忌 重日 阳错"},{jx:10,gz:0,js:"天恩 天赦 月恩 四相 官日 敬安 金匮",xs:"月建 小时 土府 月厌 地火"},{jx:10,gz:1,js:"天恩 四相 阴德 守日 吉期",xs:"六合 普护 宝光"},{jx:10,gz:2,js:"月空 天恩 时德 相日 驿马 天后 天马 天巫 福德 福生 五合 鸣吠对",xs:"五虚 归忌 白虎"},{jx:10,gz:3,js:"月德合 天恩 民日 不将 五合 玉堂 鸣吠对",xs:"天罡 死神 致死 天贼"},{jx:10,gz:4,js:"天恩 三合 临日 时阴 天仓 圣心",xs:"死气 天牢"},{jx:10,gz:5,js:"五富 不将 益后",xs:"劫煞 小耗 重日 元武"},{jx:10,gz:6,js:"五富 六仪 续世 解神 司命 鸣吠",xs:"月破 大耗 灾煞 天火 厌对 招摇 五虚 血忌"},{jx:10,gz:7,js:"要安",xs:"月煞 月虚 月害 四击 勾陈"},{jx:10,gz:8,js:"月德 母仓 三合 天喜 天医 玉宇 除神 青龙 鸣吠",xs:"九坎 九焦 土符 大煞 五离"},{jx:10,gz:9,js:"母仓 金堂 除神 明堂 鸣吠",xs:"河魁 大时 大败 咸池 复日 五离"},{jx:10,gz:10,js:"月恩 四相 时阳 生气",xs:"五虚 八风 九空 往亡 天刑"},{jx:10,gz:11,js:"四相 王日",xs:"游祸 血支 重日 朱雀"},{jx:10,gz:12,js:"月空 官日 敬安 金匮 鸣吠对",xs:"月建 小时 土府 月厌 地火 触水龙"},{jx:10,gz:13,js:"月德合 阴德 守日 吉期",xs:"六合 不将 普护 宝光"},{jx:10,gz:14,js:"时德 相日 驿马 天后 天马 天巫 福德 福生 五合",xs:"五虚 归忌 白虎"},{jx:10,gz:15,js:"天恩 民日 不将 五合 玉堂",xs:"天罡 死神 月刑 天吏 致死 天贼"},{jx:10,gz:16,js:"天恩 三合 临日 时阴 天仓 不将 圣心",xs:"死气 天牢"},{jx:10,gz:17,js:"天恩 五富 不将 益后",xs:"劫煞 小耗 重日 元武"},{jx:10,gz:18,js:"月德 天恩 阳德 六仪 续世 解神 司命 鸣吠",xs:"月破 大耗 灾煞 天火 厌对 招摇 五虚 血忌"},{jx:10,gz:19,js:"天恩 要安",xs:"月煞 月虚 月害 四击 复日 触水龙 勾陈"},{jx:10,gz:20,js:"母仓 月恩 四相 三合 天喜 天医 玉宇 除神 青龙 鸣吠",xs:"九坎 九焦 土符 大煞 五离"},{jx:10,gz:21,js:"母仓 四相 金堂 除神 明堂 鸣吠",xs:"河魁 大时 大败 咸池 五离"},{jx:10,gz:22,js:"月空 时阳 生气",xs:"五虚 九空 往亡 天刑"},{jx:10,gz:23,js:"月德合 王日",xs:"游祸 血支 重日 朱雀"},{jx:10,gz:24,js:"官日 敬安 金匮",xs:"月建 小耗 土府 月厌 地火 小会"},{jx:10,gz:25,js:"阴德 守日 吉期",xs:"六合 不将 普护 宝光"},{jx:10,gz:26,js:"时德 相日 驿马 天后 天马 天巫 福德 不将 福生 五合 鸣吠对",xs:"五虚 归忌 白虎"},{jx:10,gz:27,js:"民日 不将 五合 玉堂 鸣吠对",xs:"天罡 死神 月刑 天吏 致死 天贼 地囊"},{jx:10,gz:28,js:"月德 三合 临日 时阴 天仓 不将 圣心",xs:"死气 五墓 天牢"},{jx:10,gz:29,js:"五富 益后",xs:"劫煞 小耗 复日 重日 元武"},{jx:10,gz:30,js:"月恩 四相 阳德 六仪 续世 解除 司命 鸣吠",xs:"月破 大耗 灾煞 天火 厌对 招摇 五虚 血忌"},{jx:10,gz:31,js:"四相 要安",xs:"月煞 月虚 月害 四击 勾陈"},{jx:10,gz:32,js:"月空 母仓 三合 天喜 天医 玉宇 除神 青龙 鸣吠",xs:"九坎 九焦 土符 大煞 五离"},{jx:10,gz:33,js:"月德合 母仓 金堂 除神 明堂 鸣吠",xs:"河魁 大时 大败 咸池 五离"},{jx:10,gz:34,js:"时阳 生气",xs:"五虚 九空 往亡 天刑"},{jx:10,gz:35,js:"王日",xs:"游祸 血支 重日 朱雀"},{jx:10,gz:36,js:"官日 敬安 金匮 鸣吠对",xs:"月建 小时 土符 月厌 地火"},{jx:10,gz:37,js:"阴德 守日 吉期 六合 不将 普护 宝光",xs:"-"},{jx:10,gz:38,js:"月德 时德 相日 驿马 天后 天马 天巫 福德 不将 福生 五合 鸣吠对",xs:"五虚 归忌 白虎"},{jx:10,gz:39,js:"民日 五合 玉堂 鸣吠对",xs:"天罡 死神 月刑 天吏 致死 天贼 复日"},{jx:10,gz:40,js:"月恩 四相 三合 临日 时阴 天仓 圣心",xs:"死气 天牢"},{jx:10,gz:41,js:"四相 五富 益后",xs:"劫煞 小耗 重日 元武"},{jx:10,gz:42,js:"月空 阳德 六仪 续世 解神 司命 鸣吠",xs:"月破 大耗 灾煞 天火 厌对 招摇 四废 五虚 血忌 阴阳击冲"},{jx:10,gz:43,js:"月德合 要安",xs:"月煞 月虚 月害 四击 八专 勾陈"},{jx:10,gz:44,js:"母仓 三合 天喜 天医 玉宇 除神 青龙",xs:"九坎 九焦 土符 大煞 五离"},{jx:10,gz:45,js:"天恩 母仓 金堂 除神 明堂 鸣吠",xs:"河魁 大时 大败 咸池 五离"},{jx:10,gz:46,js:"天恩 时阳 生气",xs:"五虚 九空 往亡 天刑"},{jx:10,gz:47,js:"天恩 王日",xs:"游祸 血支 重日 朱雀"},{jx:10,gz:48,js:"月德 天恩 官日 敬安 金匮 鸣吠对",xs:"月建 小时 土府 月厌 地火 四忌 六蛇 大会 阴阳俱错"},{jx:10,gz:49,js:"天恩 天愿 阴德 守日 吉期 六合 普护 宝光",xs:"复日 八专 触水龙"},{jx:10,gz:50,js:"月恩 四相 时德 相日 驿马 天后 天马 天巫 福德 福生 五合 鸣吠对",xs:"五虚 八风 归忌 八专 白虎"},{jx:10,gz:51,js:"四相 民日 五合 玉堂 鸣吠对",xs:"天罡 死神 月刑 天吏 致死 天贼"},{jx:10,gz:52,js:"月空 三合 临日 时阴 天仓 圣心",xs:"死气 天牢"},{jx:10,gz:53,js:"月德合 五富 不将 益后",xs:"劫煞 小耗 四废 重日 元武"},{jx:10,gz:54,js:"阳德 六仪 续世 解神 司命",xs:"月破 大耗 灾煞 天火 厌对 招摇 五虚 血忌"},{jx:10,gz:55,js:"要安",xs:"月煞 月虚 月害 四击 八专 勾陈"},{jx:10,gz:56,js:"母仓 三合 天喜 天医 玉宇 除神 青龙 鸣吠",xs:"九坎 九焦 土符 大煞 五离 八专"},{jx:10,gz:57,js:"母仓 金堂 除神 明堂 鸣吠",xs:"河魁 大时 大败 咸池 四耗 地囊 五离"},{jx:10,gz:58,js:"月德 时阳 生气",xs:"五虚 九空 往亡 天刑"},{jx:10,gz:59,js:"王日",xs:"游祸 血支 四穷 六蛇 复日 重日 朱雀"},{jx:11,gz:0,js:"月空 天恩 天赦 天愿 四相 官日 六合 续世",xs:"天吏 致死 血支 土符 归忌 血忌 天刑"},{jx:11,gz:1,js:"天德合 月德合 天恩 四相 守日 要安",xs:"月建 小时 土府 往亡 朱雀"},{jx:11,gz:2,js:"天恩 月德 相日 吉期 不将 玉宇 五合 金匮 鸣吠对",xs:"劫煞 天贼 五虚"},{jx:11,gz:3,js:"天恩 民日 天巫 福德 天仓 不将 金匮 五合 宝光 鸣吠对",xs:"灾煞 天火"},{jx:11,gz:4,js:"天恩 天马",xs:"河魁 死神 月煞 月虚 五墓 白虎"},{jx:11,gz:5,js:"三合 时阴 六仪 玉堂",xs:"厌对 招摇 死气 九坎 九焦 复日 重日"},{jx:11,gz:6,js:"天德 月德 敬安 解神 鸣吠",xs:"月害 大时 大败 咸池 小耗 五虚 天牢"},{jx:11,gz:7,js:"月恩 普护",xs:"月破 大耗 四击 九空 元武"},{jx:11,gz:8,js:"母仓 阳德 五富 福生 除神 司命 鸣吠",xs:"游祸 五离"},{jx:11,gz:9,js:"母仓 三合 临日 天喜 天医 除神 鸣吠",xs:"地囊 大煞 五离 勾陈"},{jx:11,gz:10,js:"月空 四相 圣心 青龙",xs:"天罡 月刑 五虚 八风"},{jx:11,gz:11,js:"天德合 月德合 四相 阴德 王日 驿马 天后 时阳 生气 益后 明堂",xs:"月厌 地火 重日"},{jx:11,gz:12,js:"官日 六合 不将 续世 鸣吠对",xs:"天吏 致死 血支 土符 归忌 血忌 触水龙 天刑"},{jx:11,gz:13,js:"守日 不将 要安",xs:"月建 小时 土府 往亡 朱雀"},{jx:11,gz:14,js:"时德 相日 吉期 玉堂 五合 金匮",xs:"劫煞 天贼 五虚"},{jx:11,gz:15,js:"天恩 民日 天巫 福德 天仓 不将 金堂 五合 宝光",xs:"灾煞 天火 复日"},{jx:11,gz:16,js:"天德 月德 天恩 天马 不将",xs:"河魁 死神 月煞 月虚 白虎"},{jx:11,gz:17,js:"天恩 月恩 三合 时阴 六仪 玉堂",xs:"厌对 招摇 死气 九坎 九焦 重日"},{jx:11,gz:18,js:"天恩 敬安 解神 鸣吠",xs:"月害 大时 大败 咸池 小耗 五虚 天牢"},{jx:11,gz:19,js:"天恩 普护",xs:"月破 大耗 四击 九空 触水龙 元武"},{jx:11,gz:20,js:"月空 母仓 四相 阳德 五富 生气 除神 司命 鸣吠",xs:"游祸 五离"},{jx:11,gz:21,js:"天德合 月德合 母仓 四相 三合 临日 天喜 天医 除神 鸣吠",xs:"大煞 五离 勾陈"},{jx:11,gz:22,js:"圣心 青龙",xs:"天罡 月刑 五虚"},{jx:11,gz:23,js:"阴德 王日 驿马 天后 时阴 生气 益后 明堂",xs:"月厌 地火 重日"},{jx:11,gz:24,js:"官日 六合 续世",xs:"天吏 致死 血支 土符 归忌 血忌 天刑 逐阵"},{jx:11,gz:25,js:"守日 不将 要安",xs:"月建 小时 土府 往亡 复日 朱雀"},{jx:11,gz:26,js:"天德 月德 时德 相日 吉期 不将 玉宇 五合 金匮",xs:"劫煞 天贼 五虚"},{jx:11,gz:27,js:"月恩 民日 天巫 福德 天仓 不将 金堂 五合 宝光 鸣吠对",xs:"灾煞 天火"},{jx:11,gz:28,js:"天马",xs:"河魁 死神 月煞 月虚 白虎"},{jx:11,gz:29,js:"三合 阴德 六仪 玉堂",xs:"厌对 招摇 死气 九坎 九焦 重日"},{jx:11,gz:30,js:"月空 四相 敬安 解神 鸣吠",xs:"月害 大时 大败 咸池 小耗 五虚 天牢"},{jx:11,gz:31,js:"天德合 月德合 四相 普护",xs:"月破 大耗 四击 九空 元武"},{jx:11,gz:32,js:"母仓 阳德 五富 福生 除神 司命 鸣吠",xs:"游祸 五离"},{jx:11,gz:33,js:"母仓 三合 临日 天喜 天医 除神 鸣吠",xs:"大煞 五离 勾陈"},{jx:11,gz:34,js:"圣心 青龙",xs:"天罡 月刑 五虚"},{jx:11,gz:35,js:"阴德 王日 驿马 天后 时阳 生气 益后 明堂",xs:"月厌 地火 复日 重日"},{jx:11,gz:36,js:"天德 月德 官日 六合 不将 续世 鸣吠对",xs:"天吏 致死 血支 土符 归忌 血忌 天刑"},{jx:11,gz:37,js:"月恩 守日 不将 要安",xs:"月建 小时 土府 往亡 朱雀"},{jx:11,gz:38,js:"时德 相日 吉期 玉宇 五合 金匮 鸣吠对",xs:"劫煞 天贼 五虚"},{jx:11,gz:39,js:"民日 天巫 福德 天仓 金堂 五合 宝光 鸣吠对",xs:"灾煞 天火"},{jx:11,gz:40,js:"月空 四相 天马",xs:"河魁 致死 月煞 月虚 白虎"},{jx:11,gz:41,js:"天德合 月德合 四相 三合 时阴 六仪 玉堂",xs:"厌对 招摇 死气 九坎 九焦 重日"},{jx:11,gz:42,js:"敬安 解神 鸣吠",xs:"月害 大时 大败 咸池 小耗 四废 五虚 天牢"},{jx:11,gz:43,js:"普护",xs:"月破 大耗 四击 九空 八专 元武 阳破阴冲"},{jx:11,gz:44,js:"母仓 阳德 五富 福生 除神 司命",xs:"游祸 五离"},{jx:11,gz:45,js:"天恩 母仓 三合 临日 天喜 天医 除神 鸣吠",xs:"大煞 复日 五离 勾陈"},{jx:11,gz:46,js:"天德 月德 天恩 圣心 青龙",xs:"天罡 月刑 五虚"},{jx:11,gz:47,js:"天恩 月恩 阴德 王日 驿马 天后 时阳 生气 益后 明堂",xs:"月厌 地火 重日"},{jx:11,gz:48,js:"天恩 官日 六合 续世",xs:"天吏 致死 血支 四忌 六蛇 土符 归忌 血忌 天刑 逐阵"},{jx:11,gz:49,js:"天恩 守日 要安",xs:"月建 小时 土府 往亡 八专 触水龙 朱雀 阳错"},{jx:11,gz:50,js:"月空 四相 时德 相日 吉期 玉宇 五合 金匮 鸣吠对",xs:"劫煞 天贼 五虚 八风 八专"},{jx:11,gz:51,js:"天德合 月德合 四相 民日 天巫 福德 天仓 金堂 五合 宝光 鸣吠对",xs:"灾煞 天火 地囊"},{jx:11,gz:52,js:"天马 不将",xs:"河魁 死神 月煞 月虚 白虎"},{jx:11,gz:53,js:"三合 时阴 六仪 玉堂",xs:"厌对 招摇 死气 四废 九坎 九焦 重日"},{jx:11,gz:54,js:"敬安 解神",xs:"月害 大时 大败 咸池 小耗 五虚 天牢"},{jx:11,gz:55,js:"普护",xs:"月破 大耗 四击 九空 复日 八专 元武"},{jx:11,gz:56,js:"天德 月德 母仓 阳德 五富 福生 除神 司命 鸣吠",xs:"游祸 五离 八专"},{jx:11,gz:57,js:"母仓 月恩 三合 临日 天喜 天医 除神 鸣吠",xs:"四耗 大煞 五离 勾陈"},{jx:11,gz:58,js:"圣心 青龙",xs:"天罡 月刑 五虚"},{jx:11,gz:59,js:"阴德 王日 驿马 天后 时阳 生气 益后 明堂",xs:"月厌 地火 四穷 六蛇 重日 大会 阴错"}];function mt(n){return n?n.split(/\s+/).map(e=>e.trim()).filter(e=>e.length>0):[]}const lj=new Map;for(const n of wd)lj.set(`${n.jx}:${n.gz}`,{yi:mt(n.yi),ji:mt(n.ji)});const sj=new Map;for(const n of Nd)sj.set(`${n.gz}:${n.sc}`,{yi:mt(n.yi),ji:mt(n.ji)});const aj=new Map;for(const n of Sd)aj.set(`${n.jx}:${n.gz}`,{js:mt(n.js),xs:mt(n.xs)});const da={yi:[],ji:[]},Iu={js:[],xs:[]};function Ed(n,e){const t=((n+2)%12+12)%12;return lj.get(`${t}:${e}`)??da}function Cd(n,e){return n<1||n>12?Iu:aj.get(`${n-1}:${e}`)??Iu}function Dd(n,e){return e<0||e>11?da:sj.get(`${n}:${e}`)??da}const Md=[{festival_name:"春节",festival_desc:`{
  "disp_name" : "春节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "新春"
        },
        {
          "title" : "节日时间",
          "value" : "农历正月初一"
        },
        {
          "title" : "节日意义",
          "value" : "农历新年的开始"
        },
        {
          "title" : "节日饮食",
          "value" : "腊八粥、年糕、饺子、春卷、元宵（汤圆）"
        }
      ],
      "detail" : [
        "中国人过春节已有4000多年的历史。在现代，人们把春节定于农历正月初一，但一般至少要到正月十五（上元节）新年才算结束，在民间，传统意义上的春节是指从腊月的腊祭或腊月二十三或二十四的祭灶，一直到正月十九。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "关于春节的起源有说法诸多，其中有几种较具代表性的说法，春节源于腊祭、源于巫术仪式说、源于鬼节说等，其中最被普遍接受的说法是春节由虞舜时期兴起。",
        "公元前2000多年的一天，舜即天子位，带领着部下人员，祭拜天地。从此，人们就把这一天当作岁首。据说这就是农历新年的由来，后来叫春节。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "传统民俗",
        "扫尘：其用意是要把一切穷运、晦气统统扫出门。",
        "办年货：中国的家庭过年前要购买大量的“年货”，春联，福字，新衣服，过年期间的食品（过年市场多不开门）。办年货是中国人过春节的一项重要活动。与过去相比，中国人办年货的方式变得更加现代，不拘泥于传统。",
        "守岁：除夕守岁是最重要的年俗活动之一，守岁之俗由来已久。最早记载见于西晋周处的《风土志》：除夕之夜，各相与赠送，称为“馈岁”；酒食相邀，称为“别岁”；长幼聚饮，祝颂完备，称为“分岁”；大家终夜不眠，以待天明，称曰“守岁”。拜年、贴春联、贴年画、燃爆竹等",
        "",
        "汉族、满族和朝鲜族过春节的风俗习惯差不多，全家团圆，人们吃年糕、水饺以及各种丰盛的饭菜、张灯结彩，燃放鞭炮，并互相祝福。在有些地区人们沿袭过去祭祖敬神活动，祈求新的一年风调雨顺，平安、丰收。古代的蒙古族，把春节叫做“白节”，正月叫白月，是吉祥如意的意思。藏族是过藏历年。回族、维吾尔族、哈萨克族等，是过“古尔邦节”。春节也是苗族、僮族、瑶族等的盛大节日。"
      ]
    }
  ]
}`},{festival_name:"北方小年",festival_desc:`{
  "disp_name" : "北方小年",
  "area" : 1,
  "type" : 1,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "祭灶节、灶王节"
        },
        {
          "title" : "节日时间",
          "value" : "农历腊月二十三"
        },
        {
          "title" : "节日类型",
          "value" : "传统节日"
        }
      ],
      "detail" : [
        "小年并非专指一个节日，由于各地风俗，被称为小年的节日也不尽相同。小年期间主要的民俗活动有贴春联，扫尘，祭灶等。在汉族民间，小年有“官三民四船五”的传统，也就是说，官家的小年是腊月二十三，百姓家的是腊月二十四，而水上人家则是腊月二十五。",
        "",
        "北方在南宋以前都是政治中心，受官气影响较重，因此小年多为腊月二十三；相反，南方远离政治中心，小年便为腊月二十四；而沿湖、海的居民，则保留了船家的传统，小年定在腊月二十五。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "农历十二月二十三和二十四，是中国民间传统的祭灶日，又称“小年”。传说灶王爷原为平民张生，娶妻之后终日花天酒地，败尽家业沦落到上街行乞。一天，他乞讨到了前妻郭丁香家，羞愧难当，一头钻到灶锅底下烧死了。",
        "",
        "玉帝知道后，认为张生能回心转意，还没坏到底，既然死在了锅底，就把他封为灶王，每年腊月二十三、二十四上天汇报，大年三十再回到灶底。老百姓觉得灶王一定要敬重，因为他要上天汇报。于是，民间就有了腊月二十三、二十四的祭灶“小年”，祈求来年平安和财运。",
        "",
        "宋代的范成大在他的《祭灶诗》中说：“古传腊月二十四，灶君朝天欲言事。云车风马小留连，家有杯盘丰典祀。猪头烂热双鱼鲜，豆沙甘松粉饵团。男儿酌献女儿避，酹酒烧钱灶君喜。婢子斗争君莫闻，猫犬角秽君莫嗔；送君醉饱登天门，杓长杓短勿复云，乞取利市归来分。”可以说，这首诗非常形象地说明了古代中国人民有关祭灶的风俗习惯。当然，这只是民间的传说而已，是不足为信的。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "1.祭灶王：小年这天，也是民间祭灶的日子",
        "2.扫尘土：过了二十三，离春节只剩下六、七天了，过年的准备工作显得更加热烈了。要彻底打扫室内，俗称扫尘，扫尘为的是除旧迎新，拔除不祥。",
        "3.剪窗花：所有准备工作中，剪贴窗花是最盛行的民俗活动。",
        "4.贴春联：家家户户都要写春联。民间讲究有神必贴，每门必贴，每物必贴，所以春联数量最多，内容最全。",
        "5.洗浴：大人、小孩都要洗浴、理发。",
        "6.婚嫁：过了二十三，民间认为诸神上了天，百无禁忌。娶媳妇、聘闺女不用择日子，称为赶乱婚。",
        "",
        "祭灶节，民间讲究吃饺子，取“送行饺子迎风面”之意。 在北京，给灶王爷、灶王奶奶奉上的供品，只须一些“糖瓜“(用麦芽糖制做的像鸡蛋大小的瓜状糖块)就可以了。稍考究一点的人家，再供上一碗用糯米蒸熟的莲子八宝饭，还要供以香糟炒豆和清水。 ",
        "而在山东半岛的人们又大多自农历腊月二十三后，家家忙做大枣饽饽(又称大馒头)、团圆饼、寿桃等面花，表示全家大团圆，日子过得年年有余。"
      ]
    },
    {
      "title" : "地方禁忌",
      "detail" : [
        "小年各地的禁忌各有不同。",
        "相传湖北部分地区，小年忌宰杀。",
        "河南有些地方忌讳捣蒜，认为小年捣蒜会把家里捣穷了。",
        "台湾则忌舂米，据说会有把风神捣下来之虞，恐怕给来年带来风灾。"
      ]
    }
  ]
}`},{festival_name:"除夕",festival_desc:`{
  "disp_name" : "除夕",
  "area" : 0,
  "type" : 1,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "大年夜、除夜、岁除"
        },
        {
          "title" : "节日时间",
          "value" : "农历十二月二十九或三十日"
        },
        {
          "title" : "起源时间",
          "value" : "先秦时期"
        },
        {
          "title" : "流行地区",
          "value" : "中国以及汉字文化圈诸国"
        }
      ],
      "detail" : [
        "除，即去除的之意；夕，指夜晚。除夕也就是辞旧迎新、一元复始、万象更新的节日。与清明节、中元节、重阳节三节是中国传统的祭祖大节，也是流行于汉字文化圈诸国的传统文化节日。",
        "除夕因常在夏历腊月二十九或三十日，故又称该日为大年三十，是汉族最重要的传统节日之一。汉族民间最为重视。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "据《吕氏春秋·季冬记》记载，古人在新年的前一天用击鼓的方法来驱逐“疫疬之鬼”，这就是“除夕”节令的由来。据称，最早提及“除夕”这一名称的，是西晋周处撰著的《风土记》等史籍。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "年夜饭",
        "除夕这一天对华人来说是极为重要的。这一天人们准备除旧迎新，吃团圆饭。家庭是华人社会的基石，一年一度的团年饭充分表现出中华族家庭成员的互敬互爱，这种互敬互爱使一家人之间的关系更为紧密。",
        "",
        "贴春联",
        "春联也叫门对、春贴、对联、对子、桃符等等，它以工整、对偶、简洁、精巧的文字描绘时代背景，抒发美好愿望，是我国特有的文学形式。每逢春节，无论城市还是农村，家家户户都要精选一副大红春联贴于门上，为节日增加喜庆气氛。这一习俗起于宋代，在明代开始盛行，到了清代，春联的思想性和艺术性都有了很大的提高。",
        "",
        "燃爆竹",
        "中国汉族民间有“开门爆竹”一说。即在新的一年到来之际，家家户户开门的第一件事就是燃放爆竹，以哔哔叭叭的爆竹声除旧迎新。爆竹是中国特产，亦称“爆仗”、“炮仗”、“鞭炮”。其起源很早，至今已有两千多年的历史。放爆竹可以创造出喜庆热闹的气氛，是节日的一种娱乐活动，可以给人们带来欢愉和吉利。",
        "",
        "祭祖",
        "古时，这种礼俗很盛。因各地礼俗的不同，祭祖形式也各异，有的到野外瞻拜祖墓，有的到宗祠拜祖，而大多在家中将祖先牌位依次摆在正厅，陈列供品，然后祭拜者按长幼的顺序上香跪拜。",
        "我国部分地区有一种除夕上坟的风俗，称为送年食。上坟时间一般在除夕的下午，人们把做好的年夜饭，送到亡故亲人的坟上，让亡故的亲人与生者一起享用除夕夜的美食，从而寄托人们对亡故亲人的哀思。",
        "",
        "压岁钱",
        "过年给压岁钱，体现出长辈对晚辈的关爱，和晚辈对长辈的尊敬，是一项整合家庭伦理关系的民俗活动。"
      ]
    },
    {
      "title" : "节日禁忌",
      "detail" : [
        "除夕有很多的禁忌。如忌言鬼、死、杀等不吉字眼、忌打碎碗碟，忌恶声谩语，忌随地便溺，忌泼污水、灯油于地等。人们在大年三十到来时，一面欢度佳节，喜庆丰收，一面洗澡更衣、打扫卫生，以驱疫病、除恶鬼。尤其是在年夜饭时，有更多的禁忌。",
        "",
        "1、长辈给晚辈添饭加菜,如果吃饱了不想要,不能说“不要”，而是说“有了”；如果个别茶果吃完了，要说“吃兴了”或“太多了”，而不是直接说“没有了”⋯⋯。这些吉利话是人们的“除夕功课”，大人要教孩子说，否则新年不顺。",
        "2、年夜饭就餐前，必须要先要准备供品祭祀祖先。",
        "3、吃完年夜饭后，有除夕守岁的风俗。全家欢聚一堂，围炉而坐，叙旧话新，畅谈美好的祝愿，寄希望于新的一年，因而通宵不眠。",
        "4 、除夕是去旧迎新的时候，尤其是惧怕疫病与恶鬼。"
      ]
    }
  ]
}`},{festival_name:"大寒",festival_desc:`{
  "disp_name" : "大寒",
  "area" : 0,
  "type" : 1,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年1月19—21日"
        },
        {
          "title" : "代表寓意",
          "value" : "一年中最冷的时期到来"
        },
        {
          "title" : "气候特点",
          "value" : "冷空气刺骨，气候相当寒冷"
        },
        {
          "title" : "节气养生",
          "value" : "神志深藏于内，避免急躁发怒"
        },
        {
          "title" : "节气三候",
          "value" : "鸡乳；征鸟厉疾；水泽腹坚"
        }
      ],
      "detail" : [
        "我国古代将大寒分为三候：“一候鸡乳；二候征鸟厉疾；三候水泽腹坚。”就是说到大寒节气便可以孵小鸡了；而鹰隼之类的征鸟，却正处于捕食能力极强的状态中，盘旋于空中到处寻找食物，以补充身体的能量抵御严寒；在一年的最后五天内，水域中的冰一直冻到水中央，且最结实、最厚"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "1、起居注意护足\\n天气寒冷，要顺应冬季闭藏的特性，最好养成睡前泡脚的好习惯。俗话说“寒从脚起，冷从腿来”，人的腿脚一冷，全身皆冷。入睡前以热水泡脚，能使血管扩张，血流加快，改善脚部的皮肤和组织营养，降低肌张力，改善睡眠质量，对于预防冻脚和防病保健都有益处，特别是那些常在夜间看书写作、久坐到深夜的人更是如此。",
        "2、合适温度湿度保健康\\n冬季寒冷易使人患感冒、咳嗽等呼吸道疾病。而大寒时节的天气特点除了寒冷外，空气也比较干燥，白天的平均相对湿度一般低于50％，加之室内采暖，居室内的湿度常常只有30％左右。这种干燥的气候会加重呼吸道疾病的症状。所以，注意保暖的同时，也要关注身边的湿度。早晚要多开窗通气(因早晚室外湿度相对较高，雾霾天气就别开窗了，等到太阳出来空气好时再通风)，室内取暖时也要注意利用绿植或使用加湿器等方法增加空气湿度。",
        "3、早睡晚起 注意保暖\\n大寒养生要顺应冬季“藏”的原则，最简单的方法是早睡晚起，每天多睡1小时。早睡可以养人体的阳气，晚起可以养阴气，使精气内聚以润五脏，从而增强身体的免疫力。对于上班族特别提倡早睡1小时；老年人尤其要注意不宜过早起床，晨练要推迟一些，最好待日出后再出门。因为早晨寒气生发，有时还有雾气，极易寒邪侵入。",
        "4、欲御寒首当养肾\\n古人早就说过：“寒为阴邪，易伤阳气”。由于人身阳气根源于肾，所以寒邪最易中伤肾阳，容易发生腰膝冷痛，易感风寒等疾病；肾阳气虚又伤及肾阴，出现咽干口燥，头晕耳鸣等疾病。可见，数九严冬养肾十分重要。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "1、多食“三冬”\\n大寒时节，天气更加寒冷，人体血管遇冷收缩后，容易导致血压升高。此时人们的饮食也偏于高热量、高脂肪，容易导致血糖和血脂偏高。这时，不妨多吃些“三冬”：冬瓜、冬枣、冬甘蔗。冬瓜的吃法很多，例如冬瓜烧肉、冬瓜扒虾、冬瓜虾皮粉丝汤等，老少皆宜。",
        "2、进补宜“封藏”\\n中医认为，冬季进补适宜“封藏”。进补时，要使肠胃有个适应过程，最好先做“引补”。一般来说，可选用红枣炖牛肉、花生仁加红糖，也可煮些生姜大枣牛肉汤来吃，以调整脾胃功能。为抵御严寒、补充元气，大寒时节尤其要少食生冷之物。进补的另一原则是多饮水，多吃些新鲜蔬菜水果，少吃辛辣等刺激性食物，少饮烈酒。营养摄入应以增加热能为主，可适当多摄入富含碳水化合物和脂肪的食物，如坚果、米面制品等。",
        "3、食补温热为主\\n大寒时节是调养的好时机，具体的进补的方法有食补与药补等。俗话说，药补不如食补。偏于阳虚的人食补以温热食物为宜，如羊肉、鸡肉等;偏于阴虚者以滋阴食物为宜，如鸭肉、龟、木耳等。药补要结合自己的体质和病状选择服用，如体质虚弱、气虚之人可服人参汤；阴虚者可服六味地黄丸等。能饮酒的人也可以结合药酒进补，常见的有十全大补酒、枸杞酒、虫草补酒等。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "大寒是二十四节气中最后一个节气，每年1月20日前后太阳到达黄经300°时为“大寒”。大寒，是天气寒冷到极点的意思。《授时通考·天时》引《三礼义宗》：“大寒为中者，上形于小寒，故谓之大......寒气之逆极，故谓大寒。”这时寒潮南下频繁，是我国大部地区一年中的寒冷时期，风大，低温，地面积雪不化，呈现出冰天雪地、天寒地冻的严寒景象。大寒是中国二十四节气最后一个节气，过了大寒，又迎来新一年的节气轮回。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "按我国的风俗，特别是在农村，每到大寒节，人们便开始忙着除旧布新，腌制年肴，准备年货。在大寒至立春这段时间，有很多重要的民俗和节庆。如尾牙祭、祭灶和除夕等，有时甚至连我国最大的节庆春节也处于这一节气中。大寒节气中充满了喜悦与欢乐的气氛，是一个欢快轻松的节气。尾牙源自于拜土地公做“牙”的习俗。所谓二月二为头牙，以后每逢初二和十六都要做“牙”到了农历十二月十六日正好是尾牙。尾牙同二月二一样有春饼(南方叫润饼)吃，这一天买卖人要设宴，白斩鸡为宴席上不可缺的一道菜。据说鸡头朝谁，就表示老板第二年要解雇谁。因此有些老板一般将鸡头朝向自己，以使员工们能放心地享用佳肴，回家后也能过个安稳年。"
      ]
    }
  ]
}`},{festival_name:"腊八节",festival_desc:`{
  "disp_name" : "腊八节",
  "area" : 0,
  "type" : 1,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "腊日祭、腊八祭、王侯腊"
        },
        {
          "title" : "节日时间",
          "value" : "农历腊月初八"
        },
        {
          "title" : "节日饮食",
          "value" : "腊八粥、腊八蒜、腊八面"
        },
        {
          "title" : "节日起源",
          "value" : "民间传统、宗教祭祀"
        }
      ],
      "detail" : [
        "相传这一天还是佛祖释迦牟尼成道之日，称为“法宝节”，是佛教盛大的节日之一。",
        "岁终之月称“腊”的含义有三：一曰“腊者，接也”，寓有新旧交替的意思（《隋书·礼仪志》记载）；二曰“腊者同猎”，指田猎获取禽兽好祭祖祭神，“腊”从“肉”旁，就是用肉“冬祭”；三曰“腊者，逐疫迎春”，腊八节又谓之“佛成道节”，亦名“成道会”，实际上可以说是十二月初八为腊日之由来。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "自先上古起，腊八是用来祭祀祖先和神灵（包括门神、户神、宅神、灶神、井神）的祭祀仪式，祈求丰收和吉祥。据《礼记·郊特牲》记载，腊祭是“岁十二月，合聚万物而索飨之也。”夏代称腊日为“嘉平”，商代为“清祀”，周代为“大蜡”；因在十二月举行，故称该月为腊月，称腊祭这一天为腊日。先秦的腊日在冬至后的第三个戌日，后来佛教传入，为了扩大在本土的影响力遂附会传统文化把腊八节定为佛成道日。后随佛教盛行，佛祖成道日与腊日融合，在佛教领域被称为“法宝节”。南北朝开始才固定在腊月初八。",
        "《说文》载：“冬至后三戌日腊祭百神。”可见，冬至后第三个戌日曾是腊日。后由于佛教介入，腊日改在十二月初八，自此相沿成俗。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "1.祭祀",
        "相传释伽牟尼成佛之前，绝欲苦行，饿昏倒地。一牧羊女以杂粮掺以野果，用清泉煮粥将其救醒。释伽牟尼在菩提树下苦思，终在十二月八日得道成佛。从此佛门定此日为“佛成道日”，诵经纪念，相沿成节。到了明清，敬神供佛更是取代祭祀祖灵、欢庆丰收和驱疫禳灾，而成为腊八节的主旋律。其节俗主要是熬煮、赠送、品尝腊八粥，并举行庆丰家实。同时许多人家自此拉开春节的序慕，忙于杀年猪、打豆腐、胶制风鱼腊肉，采购年货，“年”的气氛逐渐浓厚。",
        "",
        "2.饮食",
        "腊八粥、腊八醋、腊八蒜、腊八面、腊八豆腐等"
      ]
    }
  ]
}`},{festival_name:"南方小年",festival_desc:`{
    "disp_name" : "南方小年",
    "area" : 1,
    "type" : 1,
    "cards" : [
               {
                   "title" : "简介",
                   "tags" : [
                             {
                                 "title" : "别称",
                                 "value" : "祭灶节、灶王节"
                             },
                             {
                                 "title" : "节日时间",
                                 "value" : "农历腊月二十四"
                             },
                             {
                                 "title" : "节日类型",
                                 "value" : "传统节日"
                             }
                             ],
                   "detail" : [
                               "小年并非专指一个节日，由于各地风俗，被称为小年的节日也不尽相同。小年期间主要的民俗活动有贴春联，扫尘，祭灶等。在汉族民间，小年有“官三民四船五”的传统，也就是说，官家的小年是腊月二十三，百姓家的是腊月二十四，而水上人家则是腊月二十五。",
                               "北方在南宋以前都是政治中心，受官气影响较重，因此小年多为腊月二十三；相反，南方远离政治中心，小年便为腊月二十四；而沿湖、海的居民，则保留了船家的传统，小年定在腊月二十五。"
                               ]
               },
               {
                   "title" : "来历",
                   "detail" : [
                               "农历十二月二十三和二十四，是中国民间传统的祭灶日，又称“小年”。传说灶王爷原为平民张生，娶妻之后终日花天酒地，败尽家业沦落到上街行乞。一天，他乞讨到了前妻郭丁香家，羞愧难当，一头钻到灶锅底下烧死了。",
                               "玉帝知道后，认为张生能回心转意，还没坏到底，既然死在了锅底，就把他封为灶王，每年腊月二十三、二十四上天汇报，大年三十再回到灶底。老百姓觉得灶王一定要敬重，因为他要上天汇报。于是，民间就有了腊月二十三、二十四的祭灶“小年”，祈求来年平安和财运。",
                               "宋代的范成大在他的《祭灶诗》中说：“古传腊月二十四，灶君朝天欲言事。云车风马小留连，家有杯盘丰典祀。猪头烂热双鱼鲜，豆沙甘松粉饵团。男儿酌献女儿避，酹酒烧钱灶君喜。婢子斗争君莫闻，猫犬角秽君莫嗔；送君醉饱登天门，杓长杓短勿复云，乞取利市归来分。”可以说，这首诗非常形象地说明了古代中国人民有关祭灶的风俗习惯。当然，这只是民间的传说而已，是不足为信的。"
                               ]
               },
               {
                   "title" : "习俗",
                   "detail" : [
                               "1.祭灶王：小年这天，也是民间祭灶的日子",
                               "2.扫尘土：过了二十三，离春节只剩下六、七天了，过年的准备工作显得更加热烈了。要彻底打扫室内，俗称扫尘，扫尘为的是除旧迎新，拔除不祥。",
                               "3.剪窗花：所有准备工作中，剪贴窗花是最盛行的民俗活动。",
                               "4.贴春联：家家户户都要写春联。民间讲究有神必贴，每门必贴，每物必贴，所以春联数量最多，内容最全。",
                               "5.洗浴：大人、小孩都要洗浴、理发。",
                               "6.婚嫁：过了二十三，民间认为诸神上了天，百无禁忌。娶媳妇、聘闺女不用择日子，称为赶乱婚。",
                               "过小年的饮食风俗习惯，南方人民则表现出不同的祭灶方式。",
                               "例如宁波人在十二月廿三夜“送灶君”，即“小年夜”。送灶君典礼要用祭灶果、糯米团供神，另用稻草扎马(勤南一带用纸折成)，饲以炒黄豆、清水。祭完今后要烧灶君像及马，送其上天庭报告。为使灶神能说蜜语蜜语，所以祭灶果全用甜食。大抵是内里的“红果”、“绿果”、“白果”的膨化食物，另有雷同麻花的小饼、芝麻糖。",
                               "而在南京，无论贫富，夜供红枣汤、元宝糖，燃香烛、放爆竹，俗谓“送灶”，即送灶神上天宫“奏善恶，保平安” 。民间又称此日为“小除夕”，或过小年。至除夕晚，再行祭礼，取下供物，民间谓之“接灶”。"
                               ]
               },
               {
                   "title" : "地方禁忌",
                   "detail" : [
                               "小年各地的禁忌各有不同。",
                               "相传湖北部分地区，小年忌宰杀。",
                               "河南有些地方忌讳捣蒜，认为小年捣蒜会把家里捣穷了。",
                               "台湾则忌舂米，据说会有把风神捣下来之虞，恐怕给来年带来风灾。"
                               ]
               }
               ]
}`},{festival_name:"小寒",festival_desc:`{
  "disp_name" : "小寒",
  "area" : 0,
  "type" : 1,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年1月5日或6日"
        },
        {
          "title" : "代表寓意",
          "value" : "开始进入一年中最寒冷的日子"
        },
        {
          "title" : "气候特点",
          "value" : "常有寒潮暴发，会带来剧烈降温"
        },
        {
          "title" : "节气养生",
          "value" : "多食用一些温热食物"
        },
        {
          "title" : "节气三候",
          "value" : "雁北乡；鹊始巢；雉始雊"
        }
      ],
      "detail" : [
        "小寒，为农历二十四节气中的第23个节气，也是冬季的第五个节气，标志着季冬时节的正式开始。当太阳到达黄经285°(小寒)时，对于神州大地而言，标志着一年中最寒冷的日子到来了。根据中国的气象资料，小寒是气温最低的节气，只有少数年份的大寒气温低于小寒的。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "小寒养生，应遵循以下原则：",
        "原则一：小寒养生要以养肾为先",
        "1、按摩养肾疗法\\n按摩疗法是冬季养肾一种很不错的有效方法。推荐两种按摩养肾的疗法：一是搓擦腰眼。两手搓热后紧按腰部，用力搓30次。所谓“腰为肾之府”，搓擦腰眼可疏通筋脉，增强肾脏功能。二是揉按丹田。两手搓热，在用部丹田按摩30-50次。常用这种方法，可增强人体的免疫功能，起到强肾固本，延年益寿的作用。",
        "2、冬季养肾要注意起居\\n冬季养生养肾在起居上宜坚持早睡晚起.避寒保暖，空气新鲜。因为冬季昼短夜长，人们要尽量早睡早起，穿贴身柔和的衣物，多呼吸新鲜空气，多晒晒太阳，以保持人体的体温、体力及正气。",
        "3、药食同源补肾\\n传统中医认为，“药食同源”，我们平时所食用的食物有很多实际上也是中药，比如：山药、枸杞、核桃、芝麻等，平时也可以多食一些炖羊肉、鸡汤、鸭肉等一类温肾补肾的食物。中医还认为五谷可以补肾，历代养生家一直提倡健康的饮食，需要以“五谷为充，五果为养”，也就是说人每天必须摄入一定量的主食和蔬菜水果。主食摄入不足，容易导致气血亏虚，肾气不足；五果含有丰富的维生素、无机盐和纤维素，因可生吃，可获得更多的营养成分，所以经常食用，可辅助五谷使人体获得更全面的营养。因此，平时适当摄入一些益肾、养血的食物，对处于亚健康状态下的人们是大有裨益的。",
        "原则二：饮食保养 滋补防寒",
        "冬季天气寒冷，此时也正是阴邪最盛的时候，也就是中医上所谓的阴邪。从饮食养生的角度讲，要特别注意在日常饮食中多食用一些温热食物以补益身体，防御寒冷气候对人体的侵袭。常用补药有人参、黄芪、阿胶、冬虫夏草、首乌、枸杞、当归等；食补要根据阴阳气血的偏盛偏衰，结合食物之性来选择羊肉、狗肉、猪肉、鸡肉、鸭肉、鳝鱼、甲鱼、鲅鱼和海虾等，其他食物如核桃仁、大枣、龙眼肉、芝麻、山药、莲子、百合、栗子等。以上食物均有补脾胃、温肾阳、健脾化痰、止咳补肺的功效。当然对体质偏热、偏实、易上火者应注意缓补、少食为好。",
        "原则三：起居上要注意保暖",
        "小寒是一年中最冷的节气之一，此时在起居上一定要注意保暖。\\n中医认为“寒性凝滞，寒性收引”，天气寒冷，则关节痛、颈椎病甚至是心脑血管疾病都容易发病。保暖是第一要务，尤其是对肩颈部、脚部等易受凉的部位要倍加呵护。对于老人家，则在保暖的同时还要注意通风，密切防范心脑血管疾病的发生。",
        "原则四：适当锻炼，强身健体防病",
        "民谚曰：“冬天动一动，少闹一场病；冬到懒一懒，多喝药一碗。”这说明了冬季锻炼的重要性。在这干冷的日子里，宜多进行户外的运动，如晨早的慢跑、跳绳、踢毽等。还要在精神上宜静神少虑、畅达乐观，不为琐事劳神，心态平和，增添乐趣。在此节气里，患心脏病和高血压病的人往往会病情加重，患“中风”者增多。中医认为，人体内的血液，得温则易于流动，得寒就容易停滞，所谓“血遇寒则凝”，说的就是这个道理。所以保暖工作一定要做好，尤其是老年人。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "小寒应减甘增苦：“三九补一冬”，小寒时切记不可大补。在饮食上可多吃羊肉、牛肉、芝麻、核桃、杏仁、瓜子、花生、棒子、松子、葡萄干等，也可结合药膳进行调补。小寒因处隆冬，土气旺，肾气弱，因此，饮食方面宜减甘增苦，补心助肺，调理肾脏。",
        "小寒吃粥喝汤保健康：首乌煲鸡蛋，健脾益肾，益气养血；太子参炖鹌鹑，补五脏、益中气；山药羊肉汤，补脾益肾，温中暖下；远志枣仁粥：补益肝肾，养血安神；羊肾红粥，益气壮阳、填精补髓。适用于虚弱无力、腰膝酸软、畏寒怕冷、耳聋耳鸣、性功能减退等肾阳不足的人群。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "为什么叫小寒而不叫大寒呢？这是因为节气起源于黄河流域。《月令七十二候集解》中说“月初寒尚小……月半则大矣”，就是说，在黄河流域，当时大寒是比小寒冷的。又由于小寒还处于“二九”的最后几天里，小寒过几天后，才进入“三九”，并且冬季的小寒正好与夏季的小暑相对应，所以称为小寒。位于小寒节气之后的大寒，处于“四九夜眠如露宿”的“四九”也是很冷的，并且冬季的大寒恰好与夏季的大暑相对应，所以成为大寒。",
        "小寒中的三候，其物候反映分别是：“一候雁北乡；二候鹊始巢；三候雉始”。在候鸟中，一候，阳气已动，大雁开始向北迁移，但还不是迁移到我国的最北方，只是离开了南方最热的地方；二候，喜鹊此时感觉到阳气而开始筑巢；到了三候，野鸡也感到了阳气的滋长而鸣叫。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "生活上，除注意日常保暖外，进入小寒年味渐浓，人们开始忙着写春联、剪窗花，赶集买年画、彩灯、鞭炮、香火等，陆续为春节作准备。饮食上，涮羊肉火锅、吃糖炒栗子、烤白薯成为小寒时尚。俗语说“三九补一冬，来年无病痛”，说的就是冬令食羊肉调养身体的做法。古时，如皋人对小寒颇重视，但随着时代变迁，已渐渐淡化，人们只能从生活中寻找出点点痕迹。",
        "居民日常饮食也偏重于暖性食物，如羊肉、狗肉，其中又以羊肉汤最为常见，有的餐馆还推出当归生姜羊肉汤，一些传统的冬令羊肉菜肴重现餐桌，再现了如皋寒冬食俗。",
        "俗话说，“小寒大寒，冷成冰团”。这个节气年轻人注意不要因过食肥甘厚味、辛辣之品而长出痤疮。"
      ]
    }
  ]
}`},{festival_name:"元旦",festival_desc:`{
  "disp_name" : "元旦",
  "area" : 0,
  "type" : 1,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "新历年、阳历年"
        },
        {
          "title" : "节日时间",
          "value" : "公历1月1日"
        },
        {
          "title" : "节日类型",
          "value" : "世界节日"
        },
        {
          "title" : "节日饮食",
          "value" : "椒柏酒、五辛盘"
        },
        {
          "title" : "设定时间",
          "value" : "1949年9月27日"
        }
      ],
      "detail" : [
        "元，谓“首”；旦，谓“日”；“元旦”意即“首日”。“元旦”一词最早出现于《晋书》，但其含义已经沿用4000多年。[1]  中国古代曾以腊月、十月等的月首为元旦，汉武帝起为农历1月1日，中华民国起为公历1月1日，1949年中华人民共和国亦以公历1月1日为元旦，因此元旦在中国也被称为“阳历年”。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "中国元旦历来指的是夏历（农历、阴历）正月初一。正月初一的计算方法，在汉武帝时期以前也是很不统一的。因此，历代的元旦月、日也并不一致。夏朝的夏历以孟喜月（元月）为正月，商朝的殷历以腊月（十二月）为正月，周朝的周历以冬月（十一月）为正月。秦始皇统一中国后，又以阳春月（十月）为正月，即十月初一为元旦。",
        "",
        "为了“行夏正，所以顺农时，从西历，所以便统计”，民国元年决定使用公历（实际使用是1912年），并规定阳历1月1日为“新年”，但并不称为“元旦”。",
        "1949年9月27日，第一届中国人民政治协商会议，在决定建立中华人民共和国的同时，也决定采用世界通用的公元纪年法，即我们所说的阳历。元旦，指西元纪年的岁首第一天。",
        "为区别农历和阳历两个新年，又鉴于农历二十四节气中的 “立春”恰在农历新年的前后，因此便把农历一月一日改称为“春节”，阳历1月1日定为新年的开始――“元旦”，并列入法定假日，成为全国人民的节日。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "现代中国的元旦，根据中国政府将其列入法定假日，成为全国人民的节日。放假一天，后常常将当日前或后双休日调整，一般连续休息三天。现代中国对元旦的庆祝较之春节，重要性要小得多。一般机关、企业会举行年终集体庆祝活动，但民间活动很少。"
      ]
    }
  ]
}`},{festival_name:"立春",festival_desc:`{
  "disp_name" : "立春",
  "area" : 0,
  "type" : 1,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "打春、立春节"
        },
        {
          "title" : "节气时间",
          "value" : "每年2月3日或4日"
        },
        {
          "title" : "代表寓意",
          "value" : "春季的开始"
        },
        {
          "title" : "气候特点",
          "value" : "气温回升，风和日暖"
        },
        {
          "title" : "节气养生",
          "value" : "保护阳气、戒暴怒，情怀忧郁"
        },
        {
          "title" : "节气三候",
          "value" : "东风解冻；蜇虫始振；鱼陟负冰"
        }
      ],
      "detail" : [
        "立春是汉族民间重要的传统节日之一。“立”是“开始”的意思，自秦代以来，中国就一直以立春作为孟春时节的开始。所谓“一年之计在于春”，春是温暖，鸟语花香；春是生长，耕耘播种。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "《黄帝内经·素问·四气调神大论篇》：“春三月，此谓发陈，天地俱生，万物以荣，夜卧早起，广步于庭，被发缓形，以使志生。”立春是人体肝阳亢盛之时，所以人的情绪容易急躁。初春气压低，天气多变，常使人的情绪产生较大波动。春季要防躁动，避免过度劳累，保证睡眠情绪豁达。同时，经历冬季的收敛藏伏，春季也正是运动养生的最佳时机。",
        "立春养生方面主要是护肝、调节心情为主。心情舒畅，既可防止肝火上越，又有利于阳气生长。要力戒暴怒，更忌心情忧郁，做到心胸开阔、乐观向上，保持心境恬愉的好心态。所以立春情绪不宜过于激动、兴奋，要保持愉悦、平和，这样有利于疏肝理气。立春过后，春游、踏青、放风筝等都可以舒缓紧张情绪。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "立春为肝气旺的时候，肝气旺则会影响到脾，因此立春饮食调养宜清淡可口，忌油腻辛辣，应选择一些养肝、疏肝、健脾、理气的食物和药材，宜多吃小白菜、青椒、西红柿、胡萝卜、芹菜、卷心菜等新鲜蔬菜和柑橘、柠檬等水果；宜多喝水，防止毒素损害肝脏。",
        "立春应少吃酸味、多吃甘淡、性温、微辛食物，以养肝健脾和胃，抗御外邪对人体侵袭，还应增加黄绿色蔬菜与时令水果的摄取，补充维生素和无机盐的不足。谷豆类的黑米、豆豉、大豆及其制品；禽鱼类的鸽子、鹌鹑、鲫鱼、泥鳅；蔬菜类的芥菜、菠菜、油菜、胡萝卜、春笋；果品类的栗子、红枣、枸杞、菠萝、甘蔗、橄榄等。将这些食品加以科学搭配食用，就能从中摄取丰富的营养，尤其是蔬果中的多种维生素可充分满足肝脏的需求。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "立春不仅是二十四节气中的第一个节气，而且还是一个重要的节日。在天文意义上它标志着春季的开始。每年2月4日或5日太阳到达黄经315°时为立春。",
        "对立春的理解，古籍《群芳谱》中这样解释的：“立，始建也。春气始而建立也。”立春期间，气温、日照、降雨，开始趋于上升、增多。但这一切对全国大多数地方来说仅仅是春天的前奏，春天的序幕还没有真正地拉开。",
        "自秦代以来，我国就一直以立春作为春季的开始。立春是从天文上来划分的，而在自然界、在人们的心目中，春是温暖，鸟语花香；春是生长，耕耘播种。在气候学中，春季是指候（5天为一候）平均气温10℃至22℃的时段。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "风俗活动：",
        "迎春、春游、鞭春牛、咬春等",
        "",
        "风俗食物：",
        "春饼、萝卜、春卷等"
      ]
    }
  ]
}`},{festival_name:"气象节",festival_desc:`{
  "disp_name" : "气象节",
  "area" : 1,
  "type" : 1,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年的2月10日"
        },
        {
          "title" : "发起国家",
          "value" : "法国"
        }
      ],
      "detail" : [
        "在1991年2月10日，在法国巴黎附近的一个叫依西·雷莫里诺（Issy－Les－Moulineaux）的地方举办了第一个国际气象节。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "国际气象节的发起人是法国人，在1991年2月10日，在法国巴黎附近的一个叫依西·雷莫里诺（Issy－Les－Moulineaux）的地方举办了第一个国际气象节，当时有16个国家的25个电视台参加，来自世界各地的气象专家，从参加气象节的电视台中，评出优秀的气象节目、气象小姐和气象先生。",
        "到了2000年时，就已经有65个国家的130个电视台参加国际气象节了。",
        "我国最早的气象台是1872年建成的上海徐家汇观象台，和即时系统预报。"
      ]
    },
    {
      "title" : "气象知识",
      "detail" : [
        "“天上钩钩云，地下雨淋淋”，钩钩云就是钩卷云，它实际上是一个天气系统过来最开始出现的云，所以一旦天上出现钩钩云的时候，说明天气系统快接近这个地方，就要下雨了。",
        "",
        "“燕子低飞蛇过道，大雨就来到”，在夏天下大雨之前，一般气压要降低，而燕子、蛇这些小动物，对气压降低反应很敏感，乱飞乱跑，这就意味着要下大雨了。"
      ]
    }
  ]
}`},{festival_name:"情人节",festival_desc:`{
  "disp_name" : "情人节",
  "area" : 0,
  "type" : 1,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "英文名",
          "value" : "Valentine‘s Day"
        },
        {
          "title" : "节日时间",
          "value" : "每年2月14日"
        },
        {
          "title" : "节日活动",
          "value" : "赠送贺卡和玫瑰花"
        },
        {
          "title" : "节日意义",
          "value" : "有情人终成眷属"
        }
      ],
      "detail" : [
        "男女在这一天互送礼物用以表达爱意或友好。现已成为欧美各国青年人喜爱的节日，其他国家也已开始流行。于能表达共同的人类情怀，各国各地纷纷发掘了自身的“情人节”。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "270年——罗马圣教徒瓦伦丁被处死，此日被后人定为“情人节”瓦伦丁节，又称情人节，是欧美和大洋洲的一些国家的民族节日。此节日的来源甚多，但一般是以罗马圣教徒瓦伦丁被处死，后被定为“情人节”较为普通。公元3世纪，罗马帝国出现全面危机，经济凋敝，统治阶级腐败，社会动荡不安，人民纷纷反抗。贵族阶级为维护其统治，残暴镇压民众和基督教徒。是时有一位教徒瓦伦丁，被捕入狱。在狱中，他以坦诚之心打动了典狱长的女儿。他们相互爱慕，并得到典狱长女儿的照顾。统治阶级下令将他执行死刑。在临刑前，他给典狱长女儿写了一封长长的遗书，表明自己是无罪的。表明他光明磊落的心迹和对典狱长女儿深深眷恋。",
        "公元270年2月14日，他被处死刑，后来，基督教徒为了纪念瓦伦丁为正义、为纯洁的爱而牺牲自己，将临刑的这一天定为“圣瓦伦节”，后人又改成“情人节”。 "
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "在情人节的习俗中，鲜花和巧克力是庆祝时必不可少的。这是男性送女性最经典的礼物，表明专一、情感和活力。玫瑰代表爱情是众所周知的，但不同颜色、朵数的玫瑰还另有吉意。",
        "",
        "不同数量",
        "花有灵性有花语，数目不同代表意思不一样：",
        "",
        "0朵玫瑰代表——爱你在心口难开！",
        "1朵玫瑰代表——我的心中只有你 ONLY YOU！",
        "2朵玫瑰代表—— 这世界只有我俩！",
        "3朵玫瑰代表——我爱你I LOVE YOU！",
        "4朵玫瑰代表—— 至死不渝！",
        "5朵玫瑰代表—— 由衷欣赏！",
        "6朵玫瑰代表—— 互敬 互爱 互谅！",
        "7朵玫瑰代表—— 我偷偷地爱著你！",
        "8朵玫瑰代表—— 感谢你的关怀扶持及鼓励！",
        "9朵玫瑰代表—— 长久 ALWAYS！",
        "10朵玫瑰代表—— 十全十美 无懈可击！",
        "11朵玫瑰代表—— 一生一世只爱你一个！",
        "12朵玫瑰代表—— 对你的爱与日俱增！",
        "13朵玫瑰代表—— 友谊长存！",
        "14 朵玫瑰代表—— 骄傲！",
        "15 朵玫瑰代表—— 对你感到歉意IM SORRY！",
        "16 朵玫瑰代表—— 多变不安的爱情！",
        "17 朵玫瑰代表—— 绝望无可挽回的爱！",
        "18 朵玫瑰代表—— 真诚与坦白！",
        "19 朵玫瑰代表—— 忍耐与期待！",
        "20 朵玫瑰代表—— 我仅一颗赤诚的心！",
        "21 朵玫瑰象徵—— 真诚的爱！",
        "22 朵玫瑰象徵—— 祝你好运！",
        "25 朵玫瑰象徵—— 祝你幸福！",
        "30 朵玫瑰象徵—— 信是有缘！",
        "36 朵玫瑰象徵—— 浪漫！",
        "40 朵玫瑰象徵—— 誓死不渝的爱情！",
        "50 朵玫瑰象徵—— 邂逅不期而遇！",
        "99 朵玫瑰象徵—— 天长地久 FOREVER！",
        "100 朵玫瑰象徵—— 百分之百的爱 100 % LOVE！",
        "101 朵玫瑰象徵—— 最…… 最爱！",
        "108 朵玫瑰象徵—— 求婚！ "
      ]
    }
  ]
}`},{festival_name:"雨水",festival_desc:`{
  "disp_name" : "雨水",
  "area" : 0,
  "type" : 1,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年2月18日或19日"
        },
        {
          "title" : "代表寓意",
          "value" : "降雨开始，雨量渐增"
        },
        {
          "title" : "气候特点",
          "value" : "降水增多，气温回升快"
        },
        {
          "title" : "节气养生",
          "value" : "养护脾脏、锻炼身体"
        },
        {
          "title" : "节气三候",
          "value" : "獭祭鱼；鸿雁来；草木萌动"
        }
      ],
      "detail" : [
        "雨水节气中，地湿之气渐升，且早晨时有露、霜出现。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "雨水期间天气变化无常，容易引起人们的情绪波动，乃至心神不安，影响人的身心健康，对高血压、心脏病、哮喘患者极为不利。春季人的肝气旺盛，怒气伤肝，因而应当采取积极的修身养生方法，陶冶性情，保持情绪稳定。",
        "",
        "雨水之后空气中水分增加，导致气温不仅低，而且寒中有湿。这种湿寒的气候对人体内脏和关节有一定的影响。此时养生应注意下列事宜: ",
        "一、勿过早减外衣。“燥寒冻肉，湿寒入骨。”由于春气涌动，身体偏热的人从感觉上欲减外衣。体热外泄，湿寒交换于内入骨，易伤骨关节致病。",
        "二、年老体弱者勿用冷水。按中国五行学说，水对应肾，肾主骨。雨水时节年老体弱者用冷水洗脸、洗手，湿寒易侵入关节，又无充足的阳气驱寒于外，湿寒滞留于手，指易酸痛，重则变形；湿寒滞留于头，头易疼痛。",
        "三、洗头及时吹干。洗头之后应及时用热风机吹干。否则，水湿留于发际中变凉，“同气相求”使湿寒聚于头，由表及里深入颅内，导致头痛。如毛发未干又被冷风吹过，易出现“偏头风”之症。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "吃食物以平性为宜。“倒春寒”容易使人内脏郁热壅阻，因此不易吃燥热食物“火上浇油”。郁热令人“贪凉”，过于食凉，又会“同气相求”使湿寒伤及脏腑，引起胃寒、胃凉、腹泻之类的失衡症状。所以，饮食保持中庸，吃热饭热菜，但不吃慎吃辣椒、不喝少喝白酒等性温、性热的食物为宜。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "雨水是24节气中的第2个节气。每年的正月十五前后（公历2月18-20日），太阳黄经达330度时，是二十四节气的雨水。此时，气温回升、冰雪融化、降水增多，故取名为雨水。雨水节气时段一般从公历2月18日或19日开始，到3月4日或5日结束。雨水和谷雨、小雪、大雪一样，都是反映降水现象的节气。",
        "",
        "《月令七十二候集解》：“正月中，天一生水。春始属木，然生木者必水也，故立春后继之雨水。且东风既解冻，则散而为雨矣。”意思是说，雨水节气前后，万物开始萌动，春天就要到了。如在《逸周书》中就有雨水节后“鸿雁来”“草木萌动”等物候记载。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "雨水这天在民间有一项特具风趣的活动叫“拉保保”。(保保则是干爹）以前人们都有一个为自己儿女求神问卦的习惯， 看看自己儿女命相如何， 需不需要找个干爹。 而找干爹的目的， 则是为了让儿子或女儿顺利， 健康的成长。（ 这可能也与以前的医疗条件有关， 因为医疗条件不好， 好多孩子生病根本无法医治。 所以需要借助干爹的福气将孩子带大） 于是便有了雨水节拉保保的活动。 此举一年复一年， 久而成为一方之俗。 ",
        "",
        "雨水节的另一个主要习俗则是女婿，女婿去给岳父岳母送节。送节的礼品则通常是两把藤椅，上面缠着一丈二尺长的红带，这称为“接寿”，意思是祝岳父岳母长命百岁。送节的另外一个典型礼品就是“罐罐肉”：用沙锅炖了猪脚和雪山大豆，海带，再用红纸，红绳封了罐口，给岳父岳母送去。这是对辛辛苦苦将女儿养育成人的岳父岳母表示感谢和敬意。如果是新婚女婿送节，岳父岳母还要回赠雨伞，让女婿出门奔波，能遮风挡雨，也有祝愿女婿人生旅途顺利平安的意思。",
        "",
        "雨水节回娘屋是流行于川西一带的另一项风俗。民间到了雨水节，出嫁的女儿纷纷带上礼物回娘家拜望父母。生育了孩子的妇女，须带上罐罐肉、椅子等礼物，感谢父母的养育之恩。久不怀孕的妇女，则由母亲为其缝制一条红裤子，穿到贴身处，据说，这样可使其尽快怀孕生子。此项风俗现仍在农村流行。"
      ]
    }
  ]
}`},{festival_name:"元宵节",festival_desc:`{
  "disp_name" : "元宵节",
  "area" : 0,
  "type" : 1,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "上元节、上元佳节、春灯节、灯节、小正月、元夕"
        },
        {
          "title" : "节日时间",
          "value" : "农历正月十五"
        },
        {
          "title" : "节日意义",
          "value" : "农历新年的第一个月圆之夜"
        },
        {
          "title" : "设定时间",
          "value" : "汉朝"
        }
      ],
      "detail" : [
        "中国古俗中，上元节（元宵节）﹑中元节（盂兰盆节）﹑下元节（水官节）合称三元。元宵节始于2000多年前的秦朝。汉文帝时下令将正月十五定为元宵节。汉武帝时，“太一神”祭祀活动定在正月十五（太一：主宰宇宙一切之神）。司马迁创建“太初历”时，就已将元宵节确定为重大节日。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "元宵节是中国的传统节日，早在2000多年前的西汉时期就有了。据资料与民俗传说，正月十五在西汉已经受到重视，汉武帝正月上辛夜在甘泉宫祭祀“太一”的活动，（太一：主宰宇宙一切的神），被后人视作正月十五祭祀天神的先声。",
        "",
        "元宵，原意为“上元节的晚上”，因正月十五“上元节”主要活动是晚上的吃汤圆赏月，后来节日名称演化为“元宵节”。元宵之夜，大街小巷张灯结彩，人们赏灯，猜灯谜，吃元宵，将从除夕开始延续的庆祝活动推向又一个高潮，成为世代相沿的习俗。元宵在早期节庆形成过程之时，只称正月十五日、正月半或月望，隋以后称元夕或元夜。唐初受了道教的影响，又称上元，唐末才偶称元宵。但自宋以后也称灯夕。到了清朝，就另称灯节。在国外，元宵也以The Lantern Festiva而为人所知。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "猜灯谜",
        "猜灯谜”又叫“打灯谜\\",是元宵节后增的一项活动，灯谜最早是由谜语发展而来的，起源于春秋战国时期。它是一种富有讥谏、规戒、诙谐、笑谑的文艺游戏。谜语悬之于灯，供人猜射，开始于南宋。",
        "",
        "舞狮子",
        "舞狮子是中国优秀的民间艺术，每逢元宵佳节或集会庆典，民间都以狮舞前来助兴。这一习俗起源于三国时期，南北朝时开始流行，至今已有一千多年的历史。",
        "",
        "耍龙灯",
        "耍龙灯，也称舞龙灯或龙舞。它的起源可以追溯上古时代。传说，早在黄帝时期，在一种《清角》的大型歌舞中，就出现过由人扮演的龙头鸟身的形象，其后又编排了六条蛟龙互相穿插的舞蹈场面。中华民族崇尚龙，把龙作为吉祥的象征，龙舞流行于中国很多地方。",
        "",
        "送孩儿灯",
        "简称“送灯”，也称“送花灯”等，即在元宵节前，娘家送花灯给新嫁女儿家，或一般亲友送给新婚不育之家，以求添丁吉兆，“灯”与“丁”谐音。",
        "",
        "吃元宵",
        "“元宵”作为食品，在中国也由来已久。宋代，民间即流行一种元宵节吃的新奇食品。这种食品，最早叫“浮元子”后称“元宵”，生意人还美其名曰“元宝”。"
      ]
    }
  ]
}`},{festival_name:"爱耳日",festival_desc:`{
  "disp_name" : "爱耳日",
  "area" : 1,
  "type" : 1,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年3月3日"
        }
      ],
      "detail" : [
        "中国有听力语言障碍的残疾人2057万，其中7岁以下聋儿可达80万，老年性聋949万；由于药物、遗传、感染、疾病、环境噪声污染、意外事故等原因每年约新生聋儿3万余名。听力障碍严重影响着这一人群的生活、学习和社会交往。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "1998年3月，在政协第九届全国委员会第一次会议上，社会福利组15名委员针对我国耳聋发病率高、数量多、危害大，预防薄弱这一现实，提出了《关于建议确立爱耳日宣传活动》的第2330号提案。这一提案引起了有关部门的高度重视，经中国残疾人联合会、卫生部等10个部门共同商定，确定每年3月3日为全国爱耳日。",
        "",
        "曾有专家论证，如果“爱耳日”活动能够实施，每年仅7岁以下儿童药物中毒性耳聋至少可以减少1〜2万名。自2000年确立全国“爱耳日”，耳聋预防的公众宣传、全民的爱耳意识都有所提高。"
      ]
    },
    {
      "title" : "听力保养",
      "detail" : [
        "避噪音",
        "人倘若长时间接触机器轰鸣、车辆喧闹、人声喧哗等各种噪音，会使原本开始衰退的听觉更容易疲劳，听力急剧减退，甚至引发噪音性耳聋。因此，尽量避免或减少噪声的干扰，是老年人保护听力的首要一条。",
        "",
        "戒挖掏",
        "经常用耳勺、火柴棒掏耳朵，容易碰伤耳道，引起感染、发炎，还可能弄坏耳膜。耳道奇痒难受时，可以用棉签沾少许酒精或甘油轻擦耳道，亦可内服维生素B、C和鱼肝油。",
        "",
        "慎用药",
        "尽量避免应用耳毒性药物，如庆大霉素、链霉素、卡那霉素、新霉素等，因为老年人解毒排泄功能低，应用这些药物容易引起耳中毒而损害听力。",
        "",
        "常按摩",
        "按摩耳垂前后的翳风穴(在耳垂与耳后高骨之间的凹陷处)，和听会穴(在耳屏前下方，下颌关节突后缘之凹陷处)，可以增加内耳的血液循环，有保护听力的作用。宜每日早晚各按摩一次，每次5~10分钟，长期坚持下去即可见效。",
        "",
        "熄肝火",
        "老年人如经常处于急躁、恼怒的状态中，会导致植物神经失去正常的调节功能，使内耳器官发生缺血、水肿和听觉神经营养障碍，这样就可能出现听力锐减或暴发耳聋。因此，老年人要尽量使自己保持轻松愉快的良好心境。",
        "",
        "多补肾",
        "中医认为，肾开窍于耳，听力的衰退与肾虚有着密切的关系。故老年人可在医生指导下服用一些补肾的药物，如六味地黄丸、金匮肾气丸、龟龄丸等，也可常喝核桃粥、芝麻粥、花生粥、猪肾粥等，对于保护听力颇有裨益。(请在医生指导下使用)"
      ]
    }
  ]
}`},{festival_name:"春分",festival_desc:`{
  "disp_name" : "春分",
  "area" : 0,
  "type" : 1,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "仲春之月"
        },
        {
          "title" : "节气时间",
          "value" : "每年3月20日或21日"
        },
        {
          "title" : "代表寓意",
          "value" : "昼夜几乎相等"
        },
        {
          "title" : "气候特点",
          "value" : "昼夜平分，气候温暖潮湿"
        },
        {
          "title" : "节气养生",
          "value" : "应注意保持人体的阴阳平衡状态"
        },
        {
          "title" : "节气三候",
          "value" : "元鸟至；雷乃发声；始电"
        }
      ],
      "detail" : [
        "春分，古时又称为“日中”、“日夜分”、“仲春之月”。《明史·历一》说：“分者，黄赤相交之点，太阳行至此，乃昼夜平分。”所以，春分的意义，一是指一天时间白天黑夜平分，各为12小时；二是古时以立春至立夏为春季，春分正当春季三个月之中，平分了春季。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "春分时节，在大自然中阴阳各占一半，因此日常饮食方面要遵循阴阳平衡原则，保持机体功能的平衡协调稳定。此外，春分时节气候十分适宜各种病菌的繁殖和传播，要注意经常打开门窗给房屋通风，在屋内种一些花草，提高空气质量和负离子浓度，对人体的健康和心理调适非常有利。",
        "虽然春分天气日渐暖和，但日夜温差较大，而且仍不时会有寒流侵袭。此时，要注意添减衣被，“勿极寒，勿太热” ，穿衣可以下厚上薄，注意下肢及脚部保暖，最好能够微微汗出，以散去冬天潜伏的寒邪。尤其是老人及小孩，抵抗力差，容易患感冒或风疹等传染病，更应注意适时添减衣被， 可以多晒太阳，以利祛散寒邪。",
        "此外，要保证室内空气清新洁净，减少呼吸系统疾病。经常消毒，杀死病毒。保持室内外卫生，角落和阴暗死角的污垢都要清扫干净，并经常消毒，杀死病毒，减少传染病的扩散。从冬季的寒冷中舒缓过来不久，外出运动锻炼需要循序渐进，不可太过激烈，以免身体不适应。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "春分时节，饮食方面应多食时令菜，并调养肠胃。同时，也要少喝酒，以避免对肝脏带来过大的负担。春令时菜包括有养阳之用的韭菜助长生机的豆芽、莴苣、葱、豆苗、蒜苗；滋养肝肺的水果，如草莓、青梅、杏、李、桑葚、樱桃等。",
        "春应于肝、夏应于心、长夏应于脾、秋应于肺、冬应于肾，所以春天重在养肝。春天养肝的目的在于协调肝的阴阳平衡，在中医里，甘味食物能滋补脾胃，大枣和山药就是不错的选择。酒伤肝肠，因此春季更不应饮酒。菊花茶、金银花甚至白开水才是适合春季的佳饮。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "春分，是春季九十天的中分点。二十四节气之一，每年公历大约为3月20日左右，太阳位于黄经0°（春分点）时。春分这一天太阳直射地球赤道，南北半球季节相反，北半球是春分，在南半球来说就是秋分。春分是伊朗、土耳其、阿富汗、乌兹别克斯坦等国的新年，有着3000年的历史。《月令七十二候集解》：“ 二月中， 分者半也， 此当九十日之半， 故谓之分。 秋同义。”《 春秋繁露· 阴阳出入上下篇》 说：“ 春分者， 阴阳相半也， 故昼夜均而寒暑平。” ",
        "春分也是节日和祭祀庆典，古代帝王有春天祭日，秋天祭月的礼制。周礼天子日坛祭日。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "竖蛋",
        "在每年的春分那一天，世界各地都会有数以千万计的人在做“竖蛋”试验。",
        "",
        "吃春菜",
        "“春菜”是一种野苋菜，乡人称之为“春碧蒿”。逢春分那天，全村人都去采摘春菜。在田野中搜寻时，多见是嫩绿的，细细棵，约有巴掌那样长短。采回的春菜一般家里与鱼片“滚汤”，名曰“春汤”。有顺口溜道：“春汤灌脏，洗涤肝肠。阖家老少，平安健康。”一年自春，人们祈求的还是家宅安宁，身壮力健。",
        "",
        "春祭",
        "二月春分，开始扫墓祭祖，也叫春祭。扫墓前先要在祠堂举行隆重的祭祖仪式，杀猪、宰羊，请鼓手吹奏，由礼生念祭文，带引行三献礼。春分扫墓开始时，首先扫祭开基祖和远祖坟墓，全族和全村都要出动，规模很大，队伍往往达几百甚至上千人。开基祖和远祖墓扫完之后，然后分房扫祭各房祖先坟墓，最后各家扫祭家庭私墓。",
        "",
        "放风筝",
        "春分期间还是孩子们放风筝的好时候。尤其是春分当天。甚至大人们也参与。风筝类别有王字风筝，鲢鱼风筝，眯蛾风筝，雷公虫风筝，月儿光风筝，其大者有两米高，小的也有二、三尺。市场上有卖风筝的，多比较小，适宜于小孩子们玩耍，而大多数还是自己糊的，较大，放时还要相互竞争看哪个的放得高。"
      ]
    }
  ]
}`},{festival_name:"妇女节",festival_desc:`{
  "disp_name" : "妇女节",
  "area" : 0,
  "type" : 1,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "联合国妇女权益和国际和平日、国际妇女节"
        },
        {
          "title" : "节日时间",
          "value" : "每年3月8日"
        },
        {
          "title" : "节日类型",
          "value" : "国际节日"
        },
        {
          "title" : "节日活动",
          "value" : "举行各类妇女权益活动"
        },
        {
          "title" : "设定时间",
          "value" : "1975年"
        }
      ],
      "detail" : [
        "“三八”国际妇女节是全世界女性共同的节日。它是各国妇女争取和平、平等、发展的节日，也是庆祝各国妇女在经济、政治和社会等领域作出的贡献和取得的成就的节日。而这一节日得以确立并广泛推行的背后，是各国妇女长达一个世纪的不懈努力和艰苦斗争。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "在联合国介绍国际妇女节的网页上，把“三八”国际妇女节的起源归因于20世纪初期一系列的妇女运动大事，这些事件包括：美国社会党人在1909年将2月28日定为全国妇女日；1910年，第二国际哥本哈根会议上以蔡特金为首的来自17个国家的100余名妇女代表筹划设立国际妇女节，但未规定确切的日期；1911年3月19日，奥地利、丹麦、德国和瑞士等国有超过100万妇女集会庆祝国际妇女节；1913年2月的最后一个周日，俄罗斯妇女以举行反对第一次世界大战示威游行的方式庆祝了她们的国际妇女节；1914年3月8日，欧洲多国妇女举行反战示威游行；为纪念在一战中丧生的近200万俄罗斯妇女，1917年3月8日（俄历2月23日）俄罗斯妇女举行罢工，拉开了“二月革命”的序幕，4天后，沙皇被迫退位，临时政府宣布赋予妇女选举权。可以说，正是上世纪初这一系列发生在欧洲和美洲的女权运动共同促成了“三八”国际妇女节的诞生，而不是人们想当然的“国际妇女节”只是国际共产主义运动的遗产。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "1.面包加玫瑰之歌",
        "美国堪萨斯州罗伦斯市的纺织女工罢工打出的标语就有“我们也要面包加玫瑰”。这表明她们不仅要求温饱，而且要过像样人的生活。受其影响，诗人詹姆士·奥朋汉（James Oppenheim）写了《面包加玫瑰》之歌。",
        "",
        "2.母亲节取缔妇女节",
        "从1911年欧洲超过100万人举行各种活动庆祝国际妇女节以来，国际妇女节已经走过近100年的历史。就如同女性为争取自己权利所做的斗争一样，妇女节也曾遭到抵制。上世纪30年代的德国，希特勒就曾禁止庆祝妇女节。不过，这也引来一些纳粹女性的不满。为了拉拢妇女，纳粹党调整策略，宣扬“男人是生活的组织者，女人是他的帮手和执行者”。在取消妇女节的同时，设立了母亲节。母亲节也是希特勒为纪念自己母亲想出来的点子。他想用母亲节鼓励年轻女子生产报国。计划出来后，得到纳粹党上下的大力支持。希特勒随后公布，所有德国男人和孩子，必须在母亲节那天，给母亲和妻子赠送鲜花和夹心巧克力作为赞赏、包容和爱的象征。",
        "",
        "3.消费主义的异军突起",
        "在这一天，来自不同民族，年龄也不尽相同的各个城市街头的男性，为女性——妻子、女朋友、女儿、同事、母亲——准备礼物。但随着消费主义取代了妇女节的女权主义政治立场，妇女节在蔓延的商业狂潮中失去了其独特的性别政治意味，民众开始对节日意义存在争议。"
      ]
    }
  ]
}`},{festival_name:"国际警察日",festival_desc:`{
  "disp_name" : "国际警察日",
  "area" : 1,
  "type" : 1,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年3月14日"
        }
      ],
      "detail" : [
        "3月14日是“国际警察日”，我国的“警察日”是公安部在2004年确定的。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "3月14日是“国际警察日”，是国际刑警组织于1995年确定的。今天也是我国公安部于2004年确立“警察日”之后的第七个“警察日”。",
        "",
        "国际刑警组织（International Criminal Police Organization – TERPOL）成立于1923年，最初名为国际刑警委员会，总部设在奥地利首都维也纳。二战期间，该组织迁到德国首都柏林，一度受纳粹组织控制，二战后，该组织恢复正常运转，总部迁到法国巴黎。1956年，该组织更名为国际刑事警察组织，简称国际刑警组织。1989年，该组织总部迁到法国里昂。",
        "",
        "国际刑警组织的宗旨是保证和促进各成员国刑事警察部门在预防和打击刑事犯罪方面的合作。它的主要任务是汇集、审核国际犯罪资料，研究犯罪对策；负责同成员国之间的情报交换；搜集各种刑事犯罪案件及犯罪指纹、照片、档案；通报重要案犯线索、通缉追捕重要罪犯和引渡重要犯罪分子；编写有关刑事犯罪方面的资料等。",
        "国际刑警组织每年召开一次全体大会，并经常举行各种国际性或地区性研讨会。该组织日常与各国国家中心局保持密切关系，组织国际追捕。“红色通缉令”是该组织在打击国际犯罪活动中使用的一种紧急快速通缉令。",
        "",
        "中国于1984年加入国际刑警组织，同年组建国际刑警组织中国国家中心局。1995年，国际刑警组织第64届大会在北京举行。多年来，中国始终与国际刑警组织之间保持着密切的合作关系。"
      ]
    }
  ]
}`},{festival_name:"惊蛰",festival_desc:`{
  "disp_name" : "惊蛰",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别名",
          "value" : "启蛰"
        },
        {
          "title" : "节气时间",
          "value" : "每年3月5日或6日"
        },
        {
          "title" : "代表寓意",
          "value" : "天气回暖，春雷乍动"
        },
        {
          "title" : "气候特点",
          "value" : "春雷乍动，雨水增多"
        },
        {
          "title" : "节气养生",
          "value" : "应顺肝之性，助益脾气"
        },
        {
          "title" : "节气三候",
          "value" : "桃始华；黄鹂鸣；鹰化为鸠"
        }
      ],
      "detail" : [
        "惊蛰时，蛰虫惊醒，天气转暖，渐有春雷，中国大部分地区进入春耕季节。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "惊蛰过后万物复苏，是春暖花开的季节，同时却也是各种病毒和细菌活跃的季节。惊蛰时节人体的肝阳之气渐升，阴血相对不足，养生应顺乎阳气的升发、万物始生的特点，使自身的精神、情志、气血也如春日一样舒展畅达，生机盎然。",
        "惊蛰期间气温回升，且天气变化较大，正是流感病毒高发期。普通感冒和流感共同的病因均源于病毒，症状以上呼吸道感染为主，同时伴有脚软无力、发热、鼻塞流涕等，个别体质较弱者还可因感冒引发气管炎、肺炎、肾炎、心肌炎等病，因此不可小视感冒。预防为主，应适量增减衣着，体弱者少去公共场所，保持室内通风，中午时可多晒晒太阳，夜间娱乐要适度。易感冒者可每日早晚两次用盐水漱口;用姜末加红糖，开水冲泡晚闻服用。",
        "起居方面，惊蛰过后，气温逐渐升高，气候变暖，人们也就越来越会感到困乏，这就是俗称的“春困”。所以只有保证良好的睡眠，才能有健康和精力充沛的工作生活。应该做到：",
        "1、在睡前半小时摒弃杂念，心情平静，有利于入睡；",
        "2、稍微活动一下身体，有利于身体的舒展和放松；",
        "3、睡前洗脸、洗脚，按摩面部和搓脚心。可推动血气运行，温补脏腑，安神宁心，消除一天的疲劳，利于入睡。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "惊蛰时节饮食起居应顺肝之性，助益脾气，令五脏和平。宜多吃富含植物蛋白质、维生素的清淡食物，少食动物脂肪类食物。可多食鸭血、菠菜、芦荟、水萝卜、苦瓜、木耳菜、芹菜、油菜、山药、莲子、银耳等食物。",
        "惊蛰天气明显变暖，饮食应清温平淡，多食用一些新鲜蔬菜及蛋白质丰富的食物，如春笋、菠菜、芹菜、鸡、蛋、牛奶等，增强体质抵御病菌的侵袭。惊蛰时节，乍暖还寒，气候比较干燥，很容易使人口干舌燥、外感咳嗽。生梨性寒味甘，有润肺止咳、滋阴清热的功效，民间素有惊蛰吃梨的习俗。梨的吃法很多，比如生食、蒸、榨汁、烤或者煮水，特别是冰糖蒸梨对咳嗽具有很好的疗效，而且制作简单方便，平时不妨把其当作甜点食用。另外，咳嗽患者还可食用莲子、枇杷、罗汉果等食物缓解病痛，饮食宜清淡，油腻的食物最好不吃，刺激性的食物，如辣椒、葱蒜、胡椒也应少吃。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "惊蛰，是24节气中的第三个节气。农历每年二月初一前后（公历3月5-6日之间），太阳到达黄经345度时为“惊蛰”。惊蛰的意思是天气回暖，春雷始鸣，惊醒蛰伏于地下冬眠的昆虫。蛰是藏的意思。《月令七十二候集解》中说：“二月节，万物出乎震，震为雷，故曰惊蛰。是蛰虫惊而出走矣。”晋代诗人陶渊明有诗曰：“促春遘（gòu）时雨，始雷发东隅，众蛰各潜骇，草木纵横舒。”实际上，昆虫是听不到雷声的，大地回春，天气变暖才是使它们结束冬眠，“惊而出走”的原因。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "祭白虎化解是非",
        "中国的民间传说白虎是口舌、是非之神，每年都会在这天出来觅食，开口噬人，犯之则在这年之内，常遭邪恶小人对你兴波作浪，阻挠你的前程发展，引致百般不顺。大家为了自保，便在惊蛰那天祭白虎。所谓祭白虎，是指拜祭用纸绘制的白老虎，纸老虎一般为黄色黑斑纹，口角画有一对獠牙。拜祭时，需以肥猪血喂之，使其吃饱后不再出口伤人，继而以生猪肉抹在纸老虎的嘴上，使之充满油水，不能张口说人是非。",
        "",
        "惊蛰吃梨",
        "在民间素有“惊蛰吃梨”的习俗。惊蛰吃梨源于何时，无迹可寻，但祁县民间却有这样一则代代相传的故事。传说闻名海内的晋商渠家，先祖渠济是上党长子县人，明代洪武初年，带着信、义两个儿子，用上党的潞麻与梨倒换祁县的粗布、红枣，往返两地间从中赢利，天长日久有了积蓄，在祁县城定居下来。雍正年间，十四世渠百川走西口，正是惊蛰之日，其父拿出梨让他吃后说，先祖贩梨创业，历经艰辛，定居祁县，今日惊蛰你要走西口，吃梨是让你不忘先祖，努力创业光宗耀祖。渠百川走西口经商致富，将开设的字号取名“长源厚”。后来走西口者也仿效吃梨，多有“离家创业”之意，再后来惊蛰日也吃梨，亦有“努力荣祖”之念。",
        "",
        "蒙鼓皮",
        "惊蛰是雷声引起的。古人想象雷神是位鸟嘴人身，长了翅膀的大神，一手持锤，一手连击环绕周身的许多天鼓，发出隆隆的雷声。惊蛰这天，天庭有雷神击天鼓，人间也利用这个时机来蒙鼓皮。《周礼》卷四十《挥人》篇上说：\\"凡冒鼓必以启蛰之日。“注：“惊蛰，孟春之中也，蛰虫始闻雷声而动；鼓，所取象也；冒，蒙鼓以革。”可见不但百虫的生态与一年四季的运行相契合，万物之灵的人类也要顺应天时，凡事才能达到事半功倍之效。",
        "",
        "“打小人”驱赶霉运",
        "惊蛰象征二月份的开始，会平地一声雷，唤醒所有冬眠中的蛇虫鼠蚁，家中的爬虫走蚁又会应声而起，四处觅食。所以古时惊蛰当日，人们会手持清香、艾草，熏家中四角，以香味驱赶蛇、虫、蚊、鼠和霉味，久而久之，渐渐演变成不顺心者拍打对头人和驱赶霉运的习惯，亦即“打小人”的前身。",
        "所以每年惊蛰那天便会出现一个有趣的场景：妇人一边用木拖鞋拍打纸公仔，一边口中念念有词地念：“打你个小人头，打到你有气冇定抖，打到你食亲野都呕”的打小人咒语。",
        "",
        "抒发内心不忿",
        "很多人都将“打小人”神化，其实此纯粹是民间习俗而已，打小人的用意在于透过拍打代表对头人的纸公仔，驱赶身边的小人瘟神，宣泄内心的不满，大部分人去打小人，一般目的是求新一年事事如意，冇小人搞搞震，而被“打”的对象，主要是二奶以及工作上的“金手指”。打小人的目的，就是要希望他们知难而退及抒发个人内心的不忿。"
      ]
    }
  ]
}`},{festival_name:"气象日",festival_desc:`{
  "disp_name" : "气象日",
  "area" : 1,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "国际气象日"
        },
        {
          "title" : "节日时间",
          "value" : "每年的3月23日"
        },
        {
          "title" : "节日活动",
          "value" : "要求各国成员在这一天举行庆祝活动"
        },
        {
          "title" : "节日意义",
          "value" : "宣传气象工作的重要作用"
        }
      ],
      "detail" : [
        "气象是指大气的状态和现象，如冷、热、干、湿、风、云、雨、雪等。为了加强国际间的气象研究与合作，更好地把气象观测结果应用于人类的各项实践活动，1878年国际气象组织在维也纳成立，该组织1947年9月召开气象局长会议，审议并通过了《世界气象组织公约》，公约于1950年3月23日正式生效，国际气象组织由此改名为世界气象组织，并成为联合国的一个专门机构。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "为纪念世界气象组织的成立，每年的3月23日被定为“世界气象日（World Meteorological Day）”，又称“国际气象日”。",
        "",
        "国际气象组织原为非官方性国际气象合作机构，在其各成员国代表签订的世界气象组织公约生效一周年之日，即1951年3月23日，改组为世界气象组织（World Meteorological Organization,WMO），成为政府间的国际气象合作机构，并与联合国建立关系。",
        "",
        "1960年世界气象组织执行委员会决定把每年3月23日定为世界性纪念日，要求各成员国每年在这一天举行庆祝活动，并广泛宣传气象工作的重要作用。每年世界气象日都有一个中心活动内容，各成员国在这一天可根据当年的中心内容，开展多种形式的宣传和纪念活动，如组织群众到气象台站参观访问，举行有政府领导人参加的群众庆祝仪式，举办气象仪表装备、照片、图表和资料的展览，举行记者招待会，由报刊、广播电台、电视台报道特写文章和讲话，放映气象科学电影，发行纪念邮票等。",
        "",
        "中国是世界气象组织的创始国之一。"
      ]
    },
    {
      "title" : "历年主题",
      "detail" : [
        "1961 年 气象",
        "1962 年 气象对农业和粮食生产的贡献",
        "1963 年交通和气象(特别是气象应用于航空)",
        "1964 年 气象— 经济发展的一个因素",
        "1965 年 国际气象合作",
        "1966 年 世界天气监测网",
        "1967 年 天气和水",
        "1968 年 气象与农业",
        "1969 年 气象服务的经济效益",
        "1970 年 气象教育和训练",
        "1971 年 气象与人类环境",
        "1972 年 气象与人类环境",
        "1973 年 国际气象合作100年",
        "1974 年 气象与旅游",
        "1975 年 气象与电讯",
        "1976 年 天气与粮食",
        "1977 年 天气与水",
        "1978 年 未来气象与研究",
        "1979 年 气象与能源",
        "1980 年 人与气候变迁",
        "1981 年 世界天气监测网",
        "1982 年 空间气象观测",
        "1983 年 气象观测员",
        "1984 年 气象增加粮食生产",
        "1985 年 气象与公众安全",
        "1986 年 气候变迁， 干旱和沙漠化",
        "1987 年 气象与国际合作的典范",
        "1988 年 气象与宣传媒介",
        "1989 年 气象为航空服务",
        "1990 年 气象和水文部门为减少自然灾害服务",
        "1991 年 地球大气",
        "1992 年 天气和气候为稳定发展服务",
        "1993 年 气象与技术转让",
        "1994 年 观测天气与气候",
        "1995 年 公众与天气服务",
        "1996 年 气象与体育服务",
        "1997 年 天气与城市水问题",
        "1998 年 天气、 海洋与人类活动",
        "1999 年 天气、 气候与健康",
        "2000 年气象服务五十年",
        "2001 年 天气、 气候和水的志愿者",
        "2002 年 降低对天气和气候极端事件的脆弱性",
        "2003 年 关注我们未来的气候",
        "2004 年 信息时代的天气、 气候和水",
        "2005 年 天气、 气候、 水和可持续发展",
        "2006 年 预防和减轻自然灾害",
        "2007 年 极地气象： 认识全球影响",
        "2008 年 观测我们的星球， 共创更美好的未来（ OBSERVING OUR PLANET FOR A BETTER FUTURE）",
        "2009 年 天气、 气候和我们呼吸的空气(Weather, climate and the air we breathe)",
        "2010 年 世界气象组织—— 致力于人类安全和福祉的六十年",
        "2011 年 人与气候",
        "2012 年 天气、 气候和水为未来增添动力",
        "2013 年 监视天气， 保护生命和财产",
        "2014 年 天气和气候： 青年人的参与",
        "2015 年 气候知识服务气候行动",
        "2016 年 直面更热、 更旱、 更涝的未来"
      ]
    }
  ]
}`},{festival_name:"消费者权益日",festival_desc:`{
  "disp_name" : "消费者权益日",
  "area" : 1,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年3月15日"
        },
        {
          "title" : "节日意义",
          "value" : "宣传维护消费者权益"
        },
        {
          "title" : "设定时间",
          "value" : "1983年"
        },
        {
          "title" : "设立机构",
          "value" : "国际消费者联盟组织"
        }
      ],
      "detail" : [
        "1983年、国际消费者联盟组织确定每年的3月15日为“国际消费者权益日”。这是基于美国前总统约翰·肯尼迪于1962年3月15日在美国国会发表了《关于保护消费者利益的总统特别咨文》，首次提出了著名的消费者的“四项权利”，即：有权获得安全保障；有权获得正确资料；有权自由决定选择；有权提出消费意见。肯尼迪提出的这四项权利，以后逐渐为世界各国消费者组织所公认，并作为最基本的工作目标。"
      ]
    },
    {
      "title" : "发展历史",
      "detail" : [
        "1898年，全世界第一个消费者组织在美国成立，1936年，建立了全美的消费者联盟。第二次世界大战后，各种反映消费者利益和要求的组织，在一些发达国家相继出现。在此基础上，1960年，国际消费者联盟组织宣告成立。之后，消费者运动更加活跃，许多发展中,有些国家也建立了消费者组织，使消费者运动成为一种全球性的社会现象，全世界已有90多个国家共300 多个消费者组织在开展活动。",
        "",
        "1962年3月15日，肯尼迪在美国国会发表了有关保护消费者利益的总统特别咨寻文，首次提出了著名的消费者的4项权利，即安全消费的权利、消费时被告知基本事实的权利、选择的权利和呼吁的权利。随着消费者权利保护工作的开展，肯尼迪提出的4项权利和国际消费者协会确定的另外4项权利，即满足基本需求的权利、公正解决纠纷的权利、掌握消费基本知识的权利和在健康环境中生活工作的权利，一并成为全世界保护消费者权益工作的8条准则。",
        "",
        "1983年，国际消费者协会把每年的3月15日定为国际消费者权益日。此后，每年3月15日，世界各地的消费者及有关组织都要举行各种活动，推动保护消费者权益运动进一步发展。"
      ]
    },
    {
      "title" : "维权方式",
      "detail" : [
        "1、自行协商交涉是首选。",
        "发生问题可先与商家交涉，自行协商，同时注意收集相关证据。如能协商解决，省时省力。但如果对方态度一直良好，但久拖不决，建议不要一直等待，及时采取其他措施。",
        "",
        "2、向工商、卫生、税务、房管等行政主管部门举报要求处理。",
        "发生侵害消费者权益的事件，消费者可以视不同的违法行为向商家的主管行政机关投诉举报，比如都可以向工商局投诉。",
        "",
        "3、寻求消费者协会的帮助，进行调解。",
        "消费者权益受到侵害，可以向当地消费者协会反映，寻求帮助，消协也可介入进行调解，也可由消协向相关主管单位反映。",
        "",
        "4、向法院起诉。",
        "如果通过前述程序解决不了，消费者可依法向有管辖权的法院提起诉讼，法院可依法判决，如任何一方不自动履行判决，另一方可申请法院强制执行。"
      ]
    }
  ]
}`},{festival_name:"植树节",festival_desc:`{
  "disp_name" : "植树节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "3月12日"
        },
        {
          "title" : "节日活动",
          "value" : "以宣传森林效益，并动员群众参加造林为活动内容的节日"
        },
        {
          "title" : "设定时间",
          "value" : "1979年2月23日"
        },
        {
          "title" : "节日起源",
          "value" : "中国陕西西安"
        }
      ],
      "detail" : [
        "植树节是一些国家以法律规定宣传保护树木，并动员群众参加以植树造林为活动内容的节日。按时间长短可分为植树日，植树周或植树月，总称国际植树节。通过这种活动，激发人们爱林，造林的热情。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "中国古代在清明节时节就有插柳植树的传统，中国历史上最早在路旁植树是由一位叫韦孝宽的人于1400多年前从陕西首创的。",
        "",
        "而近代植树节则最早由美国的内布拉斯加州发起。19世纪以前，内布拉斯加州是一片光秃秃的荒原，树木稀少，大风一起，黄沙漫天，人民深受其苦。1872年，美国著名农学家朱利叶斯·斯特林·莫尔顿提议在内布拉斯加州规定植树节，动员人民有计划地植树造林。当时州农业局通过决议采纳了这一提议，并由州长亲自规定今后每年4月份的第三个星期三为植树节。",
        "在美国，植树节是一个州定节日，没有全国统一规定的日期。但是每年4、5月间，美国各州都要组织植树节活动。例如，罗德艾兰州规定每年5月份的第二个星期五为植树节，并放假一天。其他各州有的是固定日期，也有的是每年由州长或州的其他政府部门临时决定植树节日期。每当植树节到来，以学生为主的社会各界群众组成浩浩荡荡的植树大军，投入植树活动。"
      ]
    },
    {
      "title" : "植树趣闻",
      "detail" : [
        "几百年前，南斯拉夫就制定了一项法律，规定每对新婚夫妇，必须先种植油橄榄树70株。日本鹿儿岛等一些地区也有新婚夫妇要植树的规定，树旁立碑写明姓名和婚期，植后50年方能砍伐，届时植树夫妇可举行结婚50周年庆祝活动。",
        "",
        "印度尼西亚爪哇岛法令条文规定，第一次结婚要种树2棵，离婚的要种5棵；第二次结婚必须种树3棵，否则不予登记。",
        "添车种树，在日本有一项特殊的规定，凡是私人增添一辆汽车，必须植一棵树。这是因为，每辆汽车每年要排出大量有毒的碳氢化合物，还要发出噪音，而树木则是天然的“消毒员”和“除音器”，所以必须种树。",
        "添丁种树，在非洲坦桑尼亚的许多地方，有一种“添丁植树”的风俗，即谁家生了孩子，便把胎盘埋在门外的土地里，并在那里种上一棵树，表示希望孩子像树一样茁壮成长。",
        "家庭树，波兰的一些地方规定：凡是生了小孩子的家庭均要植树3株，称之为“家庭树”。",
        "树木银行，为了防止建筑工程毁坏树木，日本开办了“树木银行”。凡施工单位，必须把清理场地挖出来的带根树木及时存入“树木银行”，在工程结束后，该单位必须及时把树木取出来栽上，以保持原有的绿化面积。",
        "求爱树，在德国的波恩市，每年的植树季节，小伙子要送给姑娘一棵精心挑选的白桦树苗，亲手把它栽好，以表达爱慕之情，人们称之为“求爱树”。"
      ]
    }
  ]
}`},{festival_name:"澳门回归纪念日",festival_desc:`{
  "disp_name" : "澳门回归纪念日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "澳门回归节、澳门回归日"
        },
        {
          "title" : "节日时间",
          "value" : "每年12月20日"
        },
        {
          "title" : "节日意义",
          "value" : "庆祝澳门回归中国"
        }
      ],
      "detail" : [
        "澳门自1999年12月20日回归后，成为中华人民共和国的一个特别行政区，依据澳门基本法实行高度自治。在\\"一国两制\\"政策的指引下，澳门的社会和经济方面的特色会予以保留并得以延续。澳门的面积很小，是世界上人口最稠密的地方之一，也是亚洲人均收入比较高的地区。"
      ]
    },
    {
      "title" : "名称来源",
      "detail" : [
        "澳门以前是个小渔村。她的本名为濠镜或濠镜澳,因为当时泊口可称为\\"澳\\".澳门及其附近盛产蚝(即牡蛎),蚝壳内壁光亮如镜,澳门因此被称为蚝镜(蚝的繁体字为\\"蚝\\"）。后人把这个名称改为较文雅的“濠镜”。清乾隆年间出版的《澳门纪略》中说：“濠镜之名，著于《明史》。东西五六里、南北半之，有南北二湾，可以泊船。或曰南北二湾，规圆如镜，故曰濠镜。”从这个名称中，又引申出濠江、海镜、镜海等一连串澳门的别名。澳门的名字源于渔民非常敬仰的中国女神 天后，又名娘妈。根据传说，一艘渔船在一个天气晴朗，风平浪静的日子里航行，突然刮起狂风雷暴，渔民们处於危急关头。这时，一位少女站了起来，下令风暴停止。风竟然停止了，大海也恢复了平静，渔船平安地到达了海镜港。上岸后，少女朝妈阁山走去，忽然一轮光环照耀，少女化做一缕青烟。后来，人们在她登岸的地方，建了一座庙宇供奉这位娘妈。",
        "十六世纪中叶，第一批葡萄牙人抵澳时，询问居民当地的名称，居民误以为指庙宇，答称\\"妈阁\\"。葡萄牙人以其音而译成\\"MACAU\\"，成为澳门葡文名称的由来。"
      ]
    },
    {
      "title" : "日期由来",
      "detail" : [
        "公元1999年12月20日，在距离千禧年还有11天的时候，中国政府将对澳门恢复行使主权。收回澳门的时间，中方虽曾有过早于香港、与香港同时、晚于香港三种考虑，但前提是在20世纪之内，也就是说，最晚也不迟于1999年。谈判中，中方立场趋于一致，倾向在香港回归后的1998年收回澳门。葡方出于自身的利益或者面子问题，希望越晚越好，其提出的一个理由是要给澳门一个比较长的过渡期",
        "就在1986年6月30日中葡第一轮会谈前，葡国就不断有官员放出试探性气球，暗示葡萄牙不会将澳门拱手相让，而会讨价还价，以使澳门保留“葡韵”，长期充当葡文化在东方的桥头堡。",
        "",
        "为打破僵局，1986年11月，时任外交部副部长、中方谈判团团长的周南飞抵里斯本，与葡国家领导人举行会晤。双方就澳门回归的时间展开激烈争论。周南一改昔日的豪爽健谈，以“疲倦”为由取消了原定的一些参访活动，匆匆回国。在离开里斯本机场时，周南向记者表示：“在本世纪末以前完成香港、澳门回归祖国的大业，是亿万中国人民的意愿，也是中国政府的决心。”",
        "同年12月的最后一天，我外交部发言人发表谈话，郑重指出：“在2000年前收回澳门，是中国政府和包括澳门同胞在内的十亿中国人民不可动摇的坚定立场和强烈愿望，任何超越2000年后交还澳门的主张，都是不能接受的。”",
        "中方的这些措辞强硬的表态，引起葡萄牙方面的高度重视，实际上也堵死了任何延期交还的企图。孰料，这时发生了耐人寻味的“秘密协议失踪事件”。葡国总理等人声称1979年中葡建交时的秘密协议不见了，澳门总督也附和说从来没有看过这份文件。经过一阵折腾，文件找到了，同时传来葡方从原定立场后退的消息。1987年1月6日，葡萄牙召开所有领导人出席的国务会议，经四个多小时激烈辩论，最终原则上同意在1999年将澳门的治权交还中国。中葡谈判“柳暗花明”，进入最后一轮。",
        "“这时，葡方向我们提出，希望在1999年的最后一天即12月31日交还澳门。我方就表示，这太靠近新年了，何况在香港、澳门，当地居民都有过圣诞节的习惯，葡萄牙国内不是也过圣诞节吗？政权交接还是与圣诞节和新年的假期错开来为好。就这样，为了让澳门同胞过一个安安稳稳的假期，葡方最后同意了我们的主张：中国政府在圣诞节前的12月20日对澳门恢复行使主权。”"
      ]
    }
  ]
}`},{festival_name:"大雪",festival_desc:`{
  "disp_name" : "大雪",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年12月7日或8日"
        },
        {
          "title" : "代表寓意",
          "value" : "降雪量增多，地面可能积雪"
        },
        {
          "title" : "气候特点",
          "value" : "气温将显著下降，降水量增多"
        },
        {
          "title" : "节气养生",
          "value" : "防寒保暖"
        },
        {
          "title" : "风俗活动",
          "value" : "观赏封河、腌制“咸货”"
        },
        {
          "title" : "节气三候",
          "value" : "鹖鴠不鸣、虎始交、荔挺出"
        }
      ],
      "detail" : [
        "“大雪”是农历二十四节气中的第21个节气，更是冬季的第三个节气，标志着仲冬时节的正式开始。《月令七十二候集解》说：“大雪，十一月节，至此而雪盛也。”大雪的意思是天气更冷，降雪的可能性比小雪时更大了，并不指降雪量一定很大。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "大雪时节，万物潜藏，养生也要顺应自然规律，在“藏”字上下功夫。起居调养宜早眠早起，并要收敛神气，特别在南方要保持肺气清肃不受秋燥的损害。此外，衣服要随着温度的降低而增加，宜保暖贴身。夜晚温度会更低，要加多衣被，使四肢暖和，气血流畅，这样则可以避免许多疾病的发生，如感冒、支气管炎、支气管哮喘、脑血栓形成等。",
        "另外，大雪时节天气寒冷，要预防感冒：",
        "1、冷水浴面。每天洗脸时要用冷水，用手掬一捧水洗鼻孔，即用鼻孔轻轻吸入少许水（注意勿吸入过深以免呛着）再擤出，反复多次。",
        "2、盐水漱口。每日早晚、餐后用淡盐水漱口，以清除口腔病菌。在流感流行的时候更应注意盐水漱口，此时，仰头含漱使盐水充分冲洗咽部效果更佳。",
        "3、热水泡脚。每晚用较热的水（温度以热到几乎不能忍受为止）泡脚15分钟，要注意泡脚时水量要没过脚面，泡后双脚要发红，可预防感冒。",
        "4、生吃大葱。生吃大葱时，可将油烧热浇在切细的葱丝上，再与豆腐等凉拌吃，不仅可口，而且可以预防感冒。",
        "5、按摩鼻沟。两手对搓，掌心热后按摩迎香穴（位于鼻沟内、横平鼻外缘中点）十余次，可以预防感冒及在感冒后减轻鼻塞症状。",
        "6、勤洗手。有些病毒可以在患者手摸过的地方存活3小时，因此，经常洗手的人能远离感冒。另外，不要养成揉鼻子、抠鼻孔的坏习惯，这样很容易把手上的病毒带到最易被传染的部位。",
        "7、多喝水。大量的水可以将病毒从身体中带走，防止脱水症（脱水症是感冒的并发症之一）。",
        "8、有氧运动。每天进行30-45分钟的有氧锻炼，如散步、骑车、跳舞等，可极大增强人体抵御感冒的能力，避免患上呼吸道传染病。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "大雪是二十四节气之一，标志着仲冬时节的开启，大雪节气过后，天气更冷，降雪的可能性更大，强冷空气来临时，冷暖空气交锋的地区，甚至可能发生暴雪。在这寒冷的天气，人们需要更多的热量来抵御寒冷，所以民间又有“小雪腌菜，大雪腌肉”，“冬天进补，开春打虎”的说法。那么大雪进补吃什么好？",
        "1、牛羊肉\\n牛肉与羊肉都属于红肉，且中医认为二者性温，有滋补养生的功效。牛羊肉中都含有丰富的蛋白质，能帮助增强人体的免疫力，牛羊肉很有丰富的矿物质，特别是铁元素，能帮助人体补气养血，驱寒暖身。",
        "2、食用菌\\n香菇等食用菌中含有大量的蛋白质，维生素与矿物质，食用菌自古就是珍贵的保健食品，现代科学证明，食用菌中的香菇多糖，核酸、香菇嘌呤、维生素及矿物质锌、硒等成分能够抑制人体对胆固醇的吸收和合成，防止胆固醇沉积在血管壁，保持血管年轻有弹性。",
        "3、白萝卜\\n白萝卜味辛，甘，性凉，有清热生津、凉血止血、消食化滞的功效。冬季吃多了油腻食物，也需要多吃些白萝卜，来帮助肠道蠕动，同时也能缓解干燥内热引起的咽干，咽痛，咳嗽等症。",
        "4、藕\\n藕含有丰富的蛋白质、维生素、膳食纤维、淀粉、糖类、多酚类物质、钙、铁、磷等营养成分，生吃生津清热、止血凉血，熟吃健脾开胃、止泻固精、强身补虚，是冬季进补蔬菜之一，也是火锅的首选配菜之一。",
        "5、山药\\n山药享有“神仙之食”的美誉，营养丰富，同时还具有丰富的药用价值。人类所需的18种氨基酸中，山药中含有16种。山药可以补虚健脾胃，山药对食少体倦的病人有很好的补益功效。",
        "6、橙\\n橙中含有多种有机酸，能帮助人体代谢，有利于氨基酸的吸收，帮助增强新陈代谢，橙中还含有丰富的维生素，能帮助提高免疫力，预防感冒，同时橙的香味还能帮助缓解紧张情绪，舒缓神经。"
      ]
    },
    {
      "title" : "节气由来",
      "detail" : [
        "大雪节气，太阳黄经达255度。大雪，顾名思义，雪量大。古人云：“大者，盛也，至此而雪盛也”。到了这个时段，雪往往下得大、范围也广。这时我国大部分地区的最低温度都降到了0℃或以下。往往在强冷空气前沿冷暖空气交锋的地区，会降大雪，甚至暴雪。可见，大雪节气是表示这一时期，降大雪的起始时间和雪量程度，它和小雪、雨水、谷雨等节气一样，都是直接反映降水的节气。",
        "",
        "大雪时节分为三候：“一候鹖鴠不鸣；二候虎始交；三候荔挺出。”是说此时因天气寒冷，寒号鸟也不再鸣叫了；此时是阴气最盛时期，所谓盛极而衰，阳气已有所萌动，老虎开始有求偶行为；“荔挺”为兰草的一种，感到阳气的萌动而抽出新芽。",
        "",
        "常说，“瑞雪兆丰年”。严冬积雪覆盖大地，保持地面及作物周围的温度不会因寒流侵袭而降得很低，冬作物创造了良好的越冬环境。积雪融化时又增加了土壤水分含量，供作物春季生长的需要。雪水中氮化物的含量是普通雨水的5倍，有一定的肥田作用。有“今年麦盖三层被，来年枕着馒头睡”的农谚。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "腌肉",
        "",
        "老南京有句俗语，叫做“小雪腌菜，大雪腌肉”。大雪节气一到，家家户户忙着腌制“咸货”。将大盐加八角、桂皮、花椒、白糖等入锅炒熟，待炒过的花椒盐凉透后，涂抹在鱼、肉和光禽内外，反复揉搓，直到肉色由鲜转暗，表面有液体渗出时，再把肉连剩下的盐放进缸内，用石头压住，放在阴凉背光的地方，半月后取出，将腌出的卤汁入锅加水烧开，撇去浮沫，放入晾干的禽畜肉，一层层码在缸内，倒入盐卤，再压上大石头，十日后取出，挂在朝阳的屋檐下晾晒干，以迎接新年。",
        "",
        "观赏封河",
        "",
        "“小雪封地，大雪封河”，北方有“千里冰封，万里雪飘”的自然景观，南方也有“雪花飞舞，漫天银色”的迷人图画。到了大雪节气，河里的冰都冻住了，人们可以尽情地滑冰嬉戏。",
        "",
        "进补",
        "",
        "大雪是“进补”的好时节，素有“冬天进补，开春打虎”的说法。冬令进补能提高人体的免疫功能，促进新陈代谢，使畏寒的现象得到改善。冬令进补还能调节体内的物质代谢，使营养物质转化的能量最大限度地贮存于体内，有助于体内阳气的升发，俗话说“三九补一冬，来年无病痛”。此时宜温补助阳、补肾壮骨、养阴益精。冬季食补应供给富含蛋白质、维生素和易于消化的食物。大雪节气前后，柑桔类水果大量上市，像南丰蜜桔、官西柚子、脐橙雪橙都是的当家水果。适当吃一些可以防治鼻炎，消痰止咳。大雪时北半球各地日短夜长，因而有农谚“大雪小雪、煮饭不息”等说法，用以形容白昼短到了农妇们几乎要连着做三顿饭的程度。可常喝喝姜枣汤抗寒；吃桔子、用薄荷油防治鼻炎，消痰止咳。"
      ]
    }
  ]
}`},{festival_name:"冬至",festival_desc:`{
  "disp_name" : "冬至",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "冬节、长至节、亚岁"
        },
        {
          "title" : "节气时间",
          "value" : "每年12月21日-23日"
        },
        {
          "title" : "代表寓意",
          "value" : "寒冷的冬天来临"
        },
        {
          "title" : "气候特点",
          "value" : "冷空气活动频繁"
        },
        {
          "title" : "节气养生",
          "value" : "防寒保暖，调整心态"
        },
        {
          "title" : "节气三候",
          "value" : "蚯蚓结；麋角解；水泉动"
        },
        {
          "title" : "风俗食物",
          "value" : "吃水饺、汤圆、喝羊肉汤"
        }
      ],
      "detail" : [
        "古人对冬至的说法是：阴极之至，阳气始生，日南至，日短之至，日影长之至，故曰“冬至”。早在二千五百多年前的春秋时代，中国就已经用土圭观测太阳，测定出了冬至"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "从中医阴阳理论说，冬至是阴气盛极而转衰，阳气开始萌芽的时候，阴阳转化，在运动中构成了自然界与人体的平衡与和谐，养生也要顺应此规律。",
        "1、饮食补充津液\\n冬至日不可吃太过辛辣刺激的食品，过食辛辣只可生阳动火，导致内热积聚，郁热上冲。过食羊肉、狗肉等肥甘厚味，易导致饮食不化，聚湿生痰。北方在补充热性食物的同时，也得吃一些补充津液的食物，如荸荠、藕、梨、萝卜、白菜等。",
        "2、养心宽厚畅达\\n养生也要重点养心，要养生先养善良、宽厚之心，心底宽自无忧。保持精神畅达乐观，不为琐事劳神，不要强求名利、患得患失。儿女要对老人嘘寒问暖，使老年人在精神上得到保养。",
        "3、保暖从脚开始\\n冬至阴寒之气隆盛，成为“进九”之始。在冬至养生中我们首先要注意的就是避寒邪，我国大部分地区习惯自冬至起“数九”。所以冬至养生首先要多着衣、避寒邪，特别是要注重足部的保暖。",
        "4、运动动中求静\\n冬至起，自然界的阳气开始上升，我们体内的阳气如何升发呢?“动则生阳、静则生阴”。通过合理的运动就可以帮助我们升发体内的阳气，但是过度的升发阳气就会耗散真元反而不合冬季蛰藏的养生道理了。冬季运动，首先要避免寒邪的侵袭，其次运动量不宜过大，要在动中求静，以臻安身静体、气定神闲的境界。八段锦、太极拳等平和的运动都是很好的选择。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "俗话说，吃了冬至饭，一天长一线。过了冬至后白天的时间越来越长，即“冬至阳生”。此时人体内阳气蓬勃生发，最易吸收外来的营养而发挥其滋补功效。也就是说，冬至前后是进补的最好时机。但是，并非随意乱补就能达到效果，冬季进补也需要一定的方法。",
        "一忌盲目食狗肉。一些体质虚弱和患有关节炎等病的人，在严冬季节，多吃些狗肉是有好处的。但不宜盲目食狗肉，以免食用狂犬肉，染上狂犬病。吃狗肉后不要喝茶，这是因为茶叶中的鞣酸与狗肉中的蛋白质结合，会生成一种物质。这种物质具有一定的收敛作用，可使肠蠕动减弱，大便里的水分减少。因此，大便中的有毒物质和致癌物质，就会因在肠内停留时间过长而极易被人体吸收。",
        "二忌虚实不分。中医的治疗原则是“虚者补之”。虚则补，不虚则正常饮食就可以了，同时应当分清补品的性能和适用范围，是否适合自己。专家认为，进补主要作用是“补虚益损”，而虚又分气虚、血虚、阴虚和阳虚四种，各有各不同的补法。",
        "三忌慕名进补。鸡汤不是所有的人都能喝的，鸡汤(包括炖鸡汤和下药材熬的鸡汤)营养丰富，鸡汤所含的营养物质是从鸡油、鸡皮、鸡肉和鸡骨溶解出的少量水溶性小分子，其蛋白质仅为鸡肉的7%左右，而汤里的鸡油大都属于饱和脂肪酸。因为鸡汤中这一特有的营养成分和刺激作用，胆道疾病患者胆囊炎和胆结石症经常发作者、肾功能不全者等病人不宜喝鸡汤。",
        "四忌无病进补。无病进补，既增加开支，又会伤害身体，如服用鱼肝油过量可引起中毒，长期服用葡萄糖会引起发胖。另外，补药也不能多多益善，任何补药服用过量都有害。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "冬至是24节气中最早被制订的一个，然而多数人并不知道，冬至的起源居然是来自于一次国家层面的都城规划。早在3000多年前，周公始用土圭法测影，在洛邑测得天下之中的位置，定此为土中，这在当时有着政治意义的举动，却成了影响后世几千年的节日之一。",
        "",
        "由周到秦，以冬至日当作岁首一直不变。至汉代依然如此，《汉书》有云：“冬至阳气起，君道长，故贺……”也就是说，人们最初过冬至节是为了庆祝新的一年的到来。古人认为自冬至起，天地阳气开始兴作渐强，代表下一个循环开始，是大吉之日。因此，后来一般春节期间的祭祖、家庭聚餐等习俗，也往往出现在冬至。冬至又被称为“小年”，一是说明年关将近，余日不多；二是表示冬至的重要性。把冬至作为节日来过源于周代，盛于唐宋，并相沿至今。周历的正月为夏历的十一月，因此，周代的正月等于如今的十一月，所以拜岁和贺冬并没有分别。直到汉武帝采用夏历后，才把正月和冬至分开。因此，也可以说专门过“冬至节”是自汉代以后才有，盛于唐宋，相沿至今。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "冬至是养生的大好时机，主要是因为“气始于冬至”。因为从冬季开始，生命活动开始由衰转盛，由静转动。此时科学养生有助于保证旺盛的精力而防早衰，达到延年益寿的目的。冬至时节饮食宜多样，谷、果、肉、蔬合理搭配，适当选用高钙食品。",
        "各地在冬至时有不同的风俗，中国北方多数地方有冬至吃饺子的习俗。冬至经过数千年发展，形成了独特的节令食文化。吃饺子成为多数中国人冬至的风俗。当然也有例外如在山东省滕州市流行冬至当天喝羊肉汤的习俗，寓意驱除寒冷之意。",
        "",
        "北方冬至吃水饺：每年农历冬至这天，不论贫富，饺子是必不可少的节日饭。谚云：“十月一，冬至到，家家户户吃水饺。”",
        "",
        "滕州羊肉汤：冬至吃羊肉的习俗据说是从汉代开始的。相传，汉高祖刘邦在冬至这一天吃了樊哙煮的羊肉，觉得味道特别鲜美，赞不绝口。从此在民间形成了冬至吃羊肉的习俗。",
        "",
        "江南米饭：在江南水乡，有冬至之夜全家欢聚一堂共吃赤豆糯米饭的习俗。相传，共工氏有不才子，作恶多端，死于冬至这一天，死后变成疫鬼，继续残害百姓。但是，这个疫鬼最怕赤豆，于是，人们就在冬至这一天煮吃赤豆饭，用以驱避疫鬼，防灾祛病。",
        "",
        "还有番薯汤果、台湾糯糕、苏州酿酒等等。"
      ]
    }
  ]
}`},{festival_name:"南京大屠杀死难者国家公祭日",festival_desc:`{
  "disp_name" : "南京大屠杀死难者国家公祭日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "南京大屠杀公祭日"
        },
        {
          "title" : "节日时间",
          "value" : "每年的12月13日"
        },
        {
          "title" : "节日意义",
          "value" : "牢记历史、勿忘国耻"
        },
        {
          "title" : "节日类型",
          "value" : "国家公祭日、纪念日"
        }
      ],
      "detail" : [
        "南京大屠杀是中国抗日战争初期侵华日军在当时的中国南京犯下的大规模屠杀、强奸以及纵火、抢劫等战争罪行与反人类罪行。日军暴行的高潮从1937年12月13日攻占南京开始持续了6周，直到1938年2月南京的秩序才开始好转。据第二次世界大战结束后远东国际军事法庭和南京军事法庭的有关判决和调查，在大屠杀中有20万以上乃至30万以上中国平民和战俘被日军杀害，约2万中国妇女遭日军奸淫，南京城的三分之一被日军纵火烧毁，财产损失不计其数。"
      ]
    },
    {
      "title" : "历史背景",
      "detail" : [
        "南京大屠杀是中国抗日战争初期侵华日军在当时的中国南京犯下的大规模屠杀、强奸以及纵火、抢劫等战争罪行与反人类罪行。日军暴行的高潮从1937年12月13日攻占南京开始持续了6周，直到1938年2月南京的秩序才开始好转。据第二次世界大战结束后远东国际军事法庭和南京军事法庭的有关判决和调查，在大屠杀中有20万以上乃至30万以上中国平民和战俘被日军杀害，约2万中国妇女遭日军奸淫，南京城的三分之一被日军纵火烧毁，财产损失不计其数。",
        "在中国，自1947年南京军事法庭审判以来，普遍认为约有30万人在大屠杀中遇难。在日本，日本政府承认“发生过杀害非战斗人员和掠夺等行为”，但对遇难人数则暧昧不清，也有认为南京大屠杀不存在的“否认派”。“否认派”的论调得到部分日本政商势力的支持，在华人世界引起强烈反感，这也使得南京大屠杀成为严重影响中日关系的主要历史问题之一。"
      ]
    },
    {
      "title" : "重大意义",
      "detail" : [
        "以中国国家名义进行正式纪念与公祭，其世界意义在于，促使人类历史记忆长久保持唤醒状态，而避免出现哪怕是片刻的忘却与麻木，共同以史为鉴、开创未来，一起维护世界和平及正义良知，促进共同发展和时代进步。",
        "中国人民抗日战争的胜利为世界反法西斯战争的胜利作出了不可磨灭的历史贡献，共同消除了威胁世界和平的法西斯邪恶势力，壮大了人类的进步力量，促进了全球的民族解放运动，对世界和平事业产生了深远影响。",
        "",
        "“国家公祭日”古已有之，在古代称为“国祀”，在中国，向来是先人们精神生活中的大事，《左传》谓：“国之大事，在祀与戎”。历朝历代，在复杂的礼仪中，始终凝结成一个不变的核心，一个最根本的认识。如果说过去的祭天、祭地、祭祖的祭祀文化，反映的是一个文明成熟程度的话，大家对一段历史的复原以及回忆，乃至将其定格、固化为一个“公祭日”，反映的则是整个民族的成熟与强大。",
        "",
        "任何历史都是现代史，都对现实有着巨大的警鉴价值，而对历史铭记，就是树起了一面镜子，无论是对企图颠覆历史的人，还是渴望和平的人，都需要这个镜子随时折射提示，从这个角度上说，中国的“国家公祭”，小而言之是中国人对自己同胞的记忆、缅怀，是对国人应有历史价值观的培养；大而言之，是中国人在替世界保留的一份珍贵遗产，是中国人就此确立与国际社会相处的尊严方式。"
      ]
    }
  ]
}`},{festival_name:"平安夜",festival_desc:`{
  "disp_name" : "平安夜",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "英文名",
          "value" : "Christmas Eve"
        },
        {
          "title" : "流行区域",
          "value" : "全球"
        },
        {
          "title" : "节日活动",
          "value" : "聚餐、舞会、互换礼物"
        }
      ],
      "detail" : [
        "平安夜（Silent Night），即圣诞前夕，在大部分基督教国家是圣诞节节日之一，但现在，由于中西文化的融合，已成为世界性的一个节日。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "平安夜传统上是摆设圣诞树的日子，但随着圣诞节的庆祝活动提早开始进行，例如美国在感恩节后，不少圣诞树早在圣诞节前数星期已被摆设。延伸发展至今平安夜不仅是指12月24日晚了，指的是圣诞前夕，特指12月24日全天，但由于一般节日氛围在晚上容易调动起来，大型活动都集中在晚上，固被称作平安夜，更加贴切。",
        "",
        "圣诞节是指12月25日，平安夜是指12月24日是圣诞前夕，称为圣诞夜，也称为平安夜。届时，千千万万的欧美人风尘仆仆地赶回家中团聚。圣诞之夜必不可少的节目是Party或聚会。大多数欧美家庭成员团聚在家中，共进丰盛的晚餐，然后围坐在熊熊燃烧的火炉旁，弹琴唱歌，共叙天伦之乐；或者举办一个别开生面的化妆舞会，通宵达旦地庆祝圣诞夜是一个幸福、祥和、狂欢的平安夜、团圆夜。圣诞之夜，父母们会悄悄地给孩子们准备礼物放在长统袜里。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "平安夜亦被认为是圣诞老人及其他地区类似人物四处向好儿童派礼物的时间。在意大利，礼物在平安夜当日早上已开启，而在英国、爱尔兰、瑞典、丹麦、挪威、芬兰、葡萄牙及波兰，圣诞礼物通常在平安夜晚上或圣诞日早上开启。",
        "在德国大部分地区，圣诞礼物则在平安夜晚上（德语 Bescherung）开启。在冰岛圣诞节在平安夜下午6时开始，教堂钟声会被敲响，人们会与家人一起享用节日晚餐，之后便会拆礼物，一起渡过晚上。在北美洲，大部分家庭会在圣诞日早上拆礼物。对于已离婚的家庭，孩子可能分开两日与父亲或母亲其中一方庆祝。在西班牙礼物则要到1月6日显现日（Día de reyes）早上才会被拆。不少传统圣诞故事都在平安夜晚上发生。",
        "在日本，大多数人都信奉传统的神道教以及佛教，圣诞节的宗教气息淡薄，一般人鲜少注意圣诞节或平安夜的宗教意义。大多是年轻人受到商业炒作的影响，将圣诞节等同于礼物交换、狂欢节或是情人节的延伸，年轻人开派对，情侣往往在圣诞夜约会、吃大餐，造成餐厅与旅馆人潮远多于教堂的现象。",
        "",
        "平安夜送平安果，这个习俗据说是中国才有的。因为中国人比较注重谐音，比如洞房花烛夜，把花生红枣和莲子放在被子下面，寓意\\"早(枣)生贵子\\"。平安夜就是圣诞节前夜，圣诞节是12月25日，平安夜就是12月24日夜晚。苹果的\\"苹\\"与平安的\\"平\\"同音，于是中国人寓以苹果\\"平安\\"的吉祥含义。于是就有了平安夜送苹果的习俗。送苹果代表送的人祝福接受平安果的人新的一年平平安安。"
      ]
    }
  ]
}`},{festival_name:"人权日",festival_desc:`{
  "disp_name" : "人权日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "英文名",
          "value" : "Human Rights Day"
        },
        {
          "title" : "发布机构",
          "value" : "联合国"
        },
        {
          "title" : "节日时间",
          "value" : "每年的12月10日"
        }
      ],
      "detail" : [
        "人权日始于1950年，国际社会在这一天共同纪念《宣言》倡导的基本自由，向积极促进和捍卫这些权利的人们致敬。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "人权日和第二次世界大战有着极其密切的关系。二战是世界上的资本主义国家为了重新瓜分全球的资源，如原料和土地等，而发动的大规模战争。对全人类来说，战争是非常残酷的。二战期间，到处生灵涂炭，民不聊生，人类遭到空前的浩刧。在战争年代，根本没有什么人权可谈。",
        "人类吸取了这惨痛的历史经验教训过后，为了避免这样的悲惨历史重演，通过联合国在1948年12月10日发表《世界人权宣言》。值得注意的是，《世界人权宣言》是联合国大会在没有任何国家反对情况下通过的。",
        "为了纪念这个重大的日子，联合国把通过《世界人权宣言》的日子（也就是12月10日）定名为人权日。这就是人权日的由来。"
      ]
    },
    {
      "title" : "人权内容",
      "detail" : [
        "生命权。",
        "生命权是最基本，最重要的人权，如果无法充分保障人的生命权，那么一切其它权利都是空中楼阁。无端剥夺人的生命，或者肆意对人施加恐吓、虐待和折磨，就是用一种非人权的待人方式。任由这种情况发生，个人权利就无从谈起。所以一般各国的刑法都将侵害他人生命权的罪行量刑最重。“生命权是一个人之所以被当作人类伙伴所必须享有的权利。”",
        "",
        "自由权",
        "自由权这个混合体词语不应存在，\\"权\\"已经是个包含了具体的规范，有容许和禁止的条文，而\\"自由\\"(Free)是含有无限制无约束性的主观感性概念性形容词，把无限(Free)局限于规范性\\"权\\"之内是符合逻辑的表达。",
        "",
        "财产权",
        "财产权是生命权和自由权的延伸。如果一个人要生存下去、要有能力选择他喜欢的方式生存下去，一定要有物质作为支持，那么，对自我劳动的所得进行排他性的占有，就是生命权与自由权必不可少的保障。“人能够工作，能够靠自己的劳动成果生活，并把生活剩余的钱存起来留给子女或者自己的晚年，这都是人尊严的一部分。”[6]财产权看似是一种物权，但其实质为人支配物，即支配自己正当所得的权利。",
        "",
        "尊严权",
        "尊严也是生命权和自由权的合理延伸。如果一个人若无尊严，那么他的生命至多是一种无人格的形式。作为一种基本的人权，尊严的价值早在古代就得到普遍的认同，如陶渊明，不为五斗米折腰等。尊严权主要要求人们在社会交往中互敬互爱，文明礼貌。如果一个人的尊严权被否认，就意味者人们可以肆无忌惮的羞辱，威胁，骚扰，中伤他，那显然他就失去了“作为人类”的资格，这无疑是和人权所不容的。",
        "",
        "获助权",
        "获助权常常和“人道主义”联系在一起，出现于天灾、人祸之后。由于种种不可预知的灾祸，人的生命权无时不刻受到威胁。在危难关头得到伙伴的帮助，是生命权的必要保障。在现代社会中，突发性的灾难有时会造成很大的危害，这种时候个体的获助权就需要一个强大的组织，一般是政府的倾力帮助，这是政府一项重要的公共服务职能。",
        "",
        "公正权",
        "人权的普适性必然的要求每一个人都受到公平合理的对待，但现实生活中，经济权力、政治权力、种族、国籍等，都会不同程度将人划到不同的等级，那么人权就变成的有限的，有条件的，甚至成为特权阶级的奢侈品了。而公正权是为了将人权平等的扩展到每一个人身上。公正权不仅是人权的一部分，更重要的是它也是人权中其它部分的必要条件。"
      ]
    }
  ]
}`},{festival_name:"圣诞节",festival_desc:`{
  "disp_name" : "圣诞节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "英文名",
          "value" : "Christmas"
        },
        {
          "title" : "节日类型",
          "value" : "西方传统节日、宗教节日"
        },
        {
          "title" : "流行地区",
          "value" : "欧洲、美洲"
        }
      ],
      "detail" : [
        "圣诞节（Christmas）又称耶诞节，译名为“基督弥撒”，西方传统节日，在每年12月25日。弥撒是教会的一种礼拜仪式。圣诞节是一个宗教节，因为把它当作耶稣的诞辰来庆祝，故名“耶诞节”。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "1.纪念耶稣出生",
        "",
        "据说耶稣是因着圣灵成孕，由童女马利亚所生的。神更派遣使者加伯列在梦中晓谕约瑟，叫他不要因为马利亚未婚怀孕而不要她，反而要与她成亲，把那孩子起名为“耶稣”，意思是要他把百姓从罪恶中救出来。",
        "当马利亚快要临盆的时候，罗马政府下了命令，全部人民到伯利恒务必申报户籍。约瑟和马利亚只好遵命。他们到达伯利恒时，天色已昏，无奈两人未能找到旅馆渡宿，只有一个马棚可以暂住。就在这时，耶稣要出生了。于是马利亚唯有在马槽上，生下耶稣。后人为纪念耶稣的诞生，便定十二月二十五为圣诞节，年年望弥撒，纪念耶稣的出世。",
        "",
        "2.罗马教会设立",
        "12月25日本是波斯太阳神（即光明之神）密特拉（Mithra）的诞辰，是一个异教徒节日，同时太阳神也是罗马国教众神之一。这一天又是罗马历书的冬至节，崇拜太阳神的异教徒把这一天当作春天的希望，万物复苏的开始。基于此原因，罗马教会选择这一天作为圣诞节。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "礼物：圣诞卡",
        "装饰：圣诞袜、圣诞帽、圣诞树、圣诞节橱窗、圣诞节环",
        "饮食：火鸡、沙滩宴、煮肉、玉米粥、海鲜、姜饼、glogi酒等"
      ]
    }
  ]
}`},{festival_name:"艾滋病日",festival_desc:`{
  "disp_name" : "世界艾滋病日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年12月1日"
        },
        {
          "title" : "标志",
          "value" : "红绸带"
        },
        {
          "title" : "设立机构",
          "value" : "世界卫生组织"
        },
        {
          "title" : "节日意义",
          "value" : "增强人们对艾滋病的认知"
        }
      ],
      "detail" : [
        "在地球上，平均每分钟都有一个孩子死于艾滋病，有超过1500万的儿童因为艾滋病而失去父母。中国艾滋病病毒感染人数在全球居第十四位，更以每年百分之四十的速度递增。防治艾滋病任重道远，需要全社会共同努力。面对因艾滋酿成的一桩桩悲剧，我们不需要旁观者，我们要用自己的力量来扭转这场恶性流行病的传播态势——团结全社会的力量，以我们所能做到的各种方式，共同抗击艾滋！"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "艾滋病日的概念来源于1988年，全球卫生部大臣关于艾滋病预防计划的高峰会议上自1981年世界第一例艾滋病病毒感染者发现至今，短短30多年间，艾滋病在全球肆虐流行，已成为重大的公共卫生问题和社会问题，引起世界卫生组织及各国政府的高度重视。为号召全世界人民行动起来，团结一致共同对抗艾滋病，1988年1月，世界卫生组织在伦敦召开了一个有100多个国家参加的“全球预防艾滋病”部长级高级会议，会上宣布每年的12月1日为“世界艾滋病日” (World Aids Day) ；1996年1月，联合国艾滋病规划署（UNAIDS）在日内瓦成立；1997年联合国艾滋病规划署将“世界艾滋病日”更名为“世界艾滋病防治宣传运动”，使艾滋病防治宣传贯穿全年。"
      ]
    },
    {
      "title" : "历届主题",
      "detail" : [
        "世界艾滋病日自设立以来，每年都有一个明确的宣传主题。围绕主题，联合国艾滋病规划署、世界卫生组织及其成员国都要开展各种形式的宣传教育活动。",
        "1988年：“全球共讨，征服有期”(Join the Worldwide Effort)",
        "1989年：“我们的生活，我们的世界——让我们相互关照”（Our Lives,Our World----Lets Take Care of Each Other)",
        "1990年：“妇女和艾滋病”（Women and AIDS)",
        "1991年：“共同迎接艾滋病的挑战”（Sharing the Challenge)",
        "1992年：“预防艾滋病，全社会的责任”（A Community Commitment)",
        "1993年：“时不我待，行动起来”（Time to Act)",
        "1994年：“家庭与艾滋病”（AIDS and the Family)",
        "1995年：“共享权益，同担责任”（Shared Right,Shared Responsibilites)",
        "1996年：“一个世界，一个希望”（One World,One Hope)",
        "1997年：“艾滋病与儿童”（Children Living in a World with AIDS)",
        "1998年：“青少年--迎战艾滋病的生力军”（Force for Change: World AIDS Campaign with Young People)",
        "1999年：“倾听、学习、尊重”（Listen,Learn,Live！）",
        "2000年：“男士责无旁贷”（Men Make a Difference)",
        "2001年：“你我同参与”（I care,and You?)",
        "2002年：“相互关爱，共享生命”（Live,let Live)",
        "2004年：“关注妇女，抗击艾滋”（Women,Girls,HⅣ and AIDS)",
        "2005 年：“遏制艾滋 履行承诺”（stop AIDS,keep the promise",
        "2006年：12月1日是第19个世界艾滋病日。“遏制艾滋，履行承诺”",
        "2007年：12月1日是第20个世界艾滋病日。宣传主题仍然是遏制艾滋，履行承诺",
        "2008年：世界艾滋病日主题仍为“遏制艾滋，履行承诺”（Stop AIDS,Keep the promise）",
        "2009年：世界艾滋病日主题为“普遍可及和人权”（Universal Access and Human Rights）",
        "2010年：世界艾滋病日主题为“正视艾滋，重视权益，点亮反歧视之光”（Keep the light on HⅣ and human rights）",
        "2011年：世界艾滋病日主题为“行动起来，向‘零’艾滋迈进”（Getting to Zero）",
        "2012年：与2011年相同，仍为“行动起来，向‘零’艾滋迈进”（英文主题Getting to Zero），副标题是“全民参与，全力投入，全面预防”。中国确定的副题是：全民参与，全力投入，全面预防",
        "2013年：与2012年相同，副标题是“共抗艾滋，共担责任，共享未来”。旨在号召全社会积极投身于艾滋病防治工作，共同承担防治责任和义务，群策群力，各展所长，遏制艾滋病的流行",
        "2014年：2014年活动主题为“行动起来，向‘零’艾滋迈进”(英文主题Getting to Zero)，副标题是“共抗艾滋，共担责任，共享未来”",
        "2015年：2015年活动主题是“行动起来，向‘零’艾滋迈进”（英文主题为GettingtoZero），副标题为“合力抗艾，共担责任，共享未来”。",
        "2016年：“携手抗艾,重在预防”"
      ]
    }
  ]
}`},{festival_name:"大学生节",festival_desc:`{
  "disp_name" : "大学生节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日别称",
          "value" : "世界大学生节、世界学生日、国际学生日"
        },
        {
          "title" : "节日时间",
          "value" : "11月17日"
        },
        {
          "title" : "节日意义",
          "value" : "纪念反法西斯的大学生运动"
        }
      ],
      "detail" : [
        "1946年，世界各国学生代表于布拉格召开全世界学生大会，宣布把每年的11月17日定为“世界大学生节”，以加强全世界大学生的团结和友谊。节日的设立是为了控诉暴徒血腥的罪恶行径，为了纪念反法西斯的大学生运动，为了在大学生中倡导追求和平、民主、自由和进步。"
      ]
    },
    {
      "title" : "起源",
      "detail" : [
        "1939年11月17日，侵入捷克斯洛伐克的德国法西斯匪徒屠杀了布拉格大学9名学生和2位教授，其他各校的男女学生也遭到机枪扫射、殴辱和监禁。",
        "",
        "1946年11月17日，世界各国学生代表于布拉格召开全世界学生大会，为了在大学生中倡导追求和平、民主和自由，也为了纪念反法西斯的大学生运动，将每年的11月17日定为世界学生日，以激励全世界学生共同为建设一个和平、民主、进步的世界而努力。",
        "",
        "截至2006年11月17日，国际大学生节已是第60届。"
      ]
    },
    {
      "title" : "活动",
      "detail" : [
        "世界",
        "",
        "每年11月17日，世界各地的大学生会组织各种各样的活动形式予以纪念，如在校内举办文化节、图片展览等，组织讲座宣传、歌舞晚会等，到校外慰问困难儿童，展示当代大学生的精神风采。",
        "",
        "我国",
        "",
        "为迎接、庆祝第六十八个国际大学生节，2013年11月12日，徐州发起万名大学生在《永久和平赋》书法长卷上签名并诵读赋文活动，为世界祈以新年之福。",
        "",
        "“信鸽咕咕，尽沐熙风细雨；海鸟嗷嗷，悠乐泛桅浮樯。全普天之永乐，乃万古之向往。然枭雄弓张，长有战事之繁；鼠盗齿啮，擅行不劳之享。遂有万古血海漂杵，千秋家园毁伤。然军功既往，难掩烦冤之泪；烟土久旱，不改云霓之望。”（摘自《永久和平赋》）"
      ]
    }
  ]
}`},{festival_name:"感恩节",festival_desc:`{
  "disp_name" : "感恩节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日别称",
          "value" : "火鸡节"
        },
        {
          "title" : "节日时间",
          "value" : "每年11月第四个星期四"
        },
        {
          "title" : "节日起源地",
          "value" : "美国"
        }
      ],
      "detail" : [
        "感恩节（Thanksgiving Day）是美国人民独创的一个古老节日，也是美国人合家欢聚的节日。初时感恩节没有固定日期，由美国各州临时决定。直到美国独立后的1863年，林肯总统宣布感恩节为全国性节日。"
      ]
    },
    {
      "title" : "起源",
      "detail" : [
        "当我们再次计划庆祝“美国人”（指征服美洲的欧洲人后裔）所说的“感恩节”之时，让我们反思一下过去。其实，感恩节的起源不过是个传说，而这个传说并不被印第安人认可，真实的情况是，感恩节是白人入侵美洲后，为庆祝对印第安人的大屠杀取得胜利而设的节日。",
        "",
        "在欧洲人入侵美洲129年之后的1621年，据说有了第一个感恩节。传说中，当年，普利茅斯殖民地的英国移民首次庆祝了感恩节。这批来自英格兰的清教徒，1620年乘“五月花”号船来到马萨诸塞州的普利茅斯。他们在当地印第安人的帮助下，学会了种植玉米、狩猎、捕鱼等本领。在第二年欢庆丰收之时，英国移民邀请印第安人一起感谢上帝施恩，因此有了第一个感恩节。传说中，首次庆祝盛宴延续了三天，清教徒们和印第安人一同分享了丰收后的美食。",
        "",
        "但那三天盛宴没有留下什么历史记录，存活下来的印第安人不认可这个传说。真实的情况是，由于欧洲人带来的瘟疫，印第安人像苍蝇一样死去，现在康涅狄格州的佩科特部落（印第安人的一个分支），在欧洲人来到时有8000人，到1637年只剩下1500人，而那年才是白人官方首次宣布庆祝感恩节，白人当时是为了庆祝他们在康涅狄格山谷对佩科特人的屠杀。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "美国",
        "",
        "感恩节这一天。美国举国上下热闹非凡，有许多戏剧表演、化装游行、体育比赛等等。除了美国拥有自己的感恩节，加拿大、巴西、埃及、希腊等地方也拥有属于自己的感恩节，不同国家庆祝感恩节的习俗各有不同。",
        "",
        "每逢感恩节这一天，美国家家户户都要吃火鸡，他们通常还吃一些传统的菜肴，例如西葫芦、奶油洋葱、土豆泥、番瓜派等等。家庭成员无论在哪都会赶回家过节。",
        "",
        "埃及",
        "",
        "埃及人边“哭”边庆祝收包谷更多。古埃及的感恩节又叫收获节，是为了纪念他们的庄稼神明而举行的，所以这个节日在每年春天举行。这一天他们常常假装哭泣而且悲痛欲绝，他们害怕收割仍在生长的玉米会使玉米发怒。",
        "",
        "除了美国、加拿大，世界上还有埃及、希腊等国家有自己独特的感恩节，但英国、法国等欧洲国家却与感恩节绝缘[3]  ，也有学者倡议设立“中华感恩节”，以弘扬传统文化。"
      ]
    }
  ]
}`},{festival_name:"光棍节",festival_desc:`{
  "disp_name" : "光棍节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日别称",
          "value" : "单身节"
        },
        {
          "title" : "节日时间",
          "value" : "11月11日"
        },
        {
          "title" : "节日活动",
          "value" : "购物、单身趴等"
        }
      ],
      "detail" : [
        "11月11日，光棍节，源于这一天日期里有四个阿拉伯数字“1“形似四根光滑的棍子，而光棍在中文有单身的意思，所以光棍节是单身一族的一个另类节日，这个日子便被定为“光棍节”。",
        "",
        "光棍节产生于校园，并通过网络等媒介传播，逐渐形成了一种光棍节的文化。如今越来越多的人选在光棍节结婚，于此同时，也是各大商家以脱光为由打折促销的时期。"
      ]
    },
    {
      "title" : "来源",
      "detail" : [
        "光棍节的来历，一直是个迷，有各种各样的猜测和说法。其中光棍节产生于校园文化的说法是比较可信的，但由谁最先提出已不可考了。众多说法中，光棍节起源于南京高校的校园文化是被广泛接受的观点。（同时期诞生在不同地区，后续在南京地区高校开展比较活跃，继而通过群体活动和媒体传播，光棍节在社会上流行开来。）"
      ]
    },
    {
      "title" : "意义",
      "detail" : [
        "光棍增多并非是坏事，相反是人们追求高质量婚姻生活的结果。光棍节从网络走向社会，从小众活动变成公众活动，也是社会开放度、包容度提升的一种表现。20岁到30岁之间的单身人士往往是承受社会压力最大的人群，除了工作、竞争之外，还有来自家庭催婚的压力。",
        "",
        "光棍节无非是让光棍们在调侃中轻松面对，有一个机会互相交流，不失为一个解压的方法。同时，在这种舆论下，社会给予光棍们的尖锐度也在下降，让单身人士能够有更大的空间选择自己的真爱。",
        "",
        "如今光棍节已经成为都市年轻人一个特别的日子。在这天，几个单身朋友在一起或喝酒谈心，或K歌泡吧，或疯狂购物，尽情狂欢，体会“只羡光棍不羡仙”的感觉。光棍节的热闹聚会，是年轻人渴望爱情的一种热烈表达。据悉，社会上也有年轻人特意将婚礼定在这一天，就是为了赶上4个“1”的吉利，希望这“一心一意的爱，一生一世的情”能带给他们幸福。"
      ]
    },
    {
      "title" : "差异",
      "detail" : [
        "校园篇",
        "",
        "光棍节到来之时有关“光棍节”聚会的消息渐渐增多，虽然主体活动依旧是饭局，但强调“AA制”似乎成为这个节日个性独立、彼此尊重的一个标志。",
        "",
        "年龄篇",
        "",
        "光棍没有确切的年龄限制，只要自己愿意，只要是单身都可以把自己称为是光棍，并不局限年龄，确切的说光棍与单身是符合实际情况后自己心里的一种感觉。",
        "",
        "性别篇",
        "",
        "光棍节并不是男性独有的节日，女性也有很多很多单身光棍的，男女平等，一视同仁，光棍节是单身男女共同的节日。",
        "",
        "网络篇",
        "",
        "让接受新事物的网民更清楚的了解这个节日，并且因为网络快捷方便的传播方式让更多的单身族加入过光棍节的队伍来，部分单身网友为此节日聚会等等。"
      ]
    }
  ]
}`},{festival_name:"记者节",festival_desc:`{
  "disp_name" : "记者节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日别称",
          "value" : "中国记者节"
        },
        {
          "title" : "节日时间",
          "value" : "11月8日"
        },
        {
          "title" : "节日类型",
          "value" : "行业节日"
        }
      ],
      "detail" : [
        "2000年，国务院正式批复中国记协《关于确定“记者节”具体日期的请示》，同意将中国记协的成立日11月8日定为记者节。记者节像护士节、教师节一样，是我国仅有的三个行业性节日之一。按照国务院的规定，记者节是一个不放假的工作节日。"
      ]
    },
    {
      "title" : "来源",
      "detail" : [
        "新中国成立前就有记者节。从1933年到1949年，每年的11月8日，新闻从业人员都举行各种仪式纪念这一节日。",
        "",
        "1949年12月23日，中华人民共和国政务院颁布的《全国年节及纪念日放假办法》中明确规定了“记者节”，《办法》对年节和纪念日放假规定这样表述：“其他各种纪念节日如：二七纪念、五卅纪念、七七抗战纪念、八一五抗战胜利纪念、九一八纪念、护士节、教师节、记者节等，均不必放假。”但因为当时没有确定具体日期，因此长期以来中国新闻从业人员一直未过记者节。",
        "",
        "1999年9月18日颁布的《全国年节及纪念日放假办法》，再一次明确列入了记者节。2000年8月，国务院正式批复中国记协的请示，同意将11月8日定为记者节。也是中国记协的成立日。1937年11月8日，以范长江为首的左翼新闻工作者在上海成立中国青年记者协会，这是中国记协的前身。"
      ]
    },
    {
      "title" : "各国节日",
      "detail" : [
        "记者节，有些国家又称新闻节、出版节。",
        "",
        "前苏联的出版节是5月5日。1922年3月俄共（布）第十一次代表大会作出决议，以《真理报》创刊日（5月5日）为全俄出版节。该报于俄历1912年4月12日创刊，俄历与公历相差13天，换算为公历，便是5月5日。苏维埃俄国从1913年起改用公历纪元。",
        "",
        "韩国的新闻节是4月7日。1896年4月7日，朝鲜医生徐弼博士在汉城创办朝鲜第一家民营报纸《独立新闻》，初为周三刊，两年后改为日报。为纪念朝鲜第一家民营报纸的诞生，韩国建国后将4月7日这一天定为韩国的新闻节。",
        "",
        "1990年前的匈牙利，其记者节是12月7日。这是为了纪念1918年的这一天诞生了匈牙利共产党的第一家报纸《红色权利报》。",
        "",
        "旧中国的记者节是9月1日，1934年杭州市记者公会通电全国，要求定9月1日为记者节，以纪念国民政府1933年9月1日颁布《保护新闻工作人员及维护舆论机关》的命令一事。由于得到了全国新闻界的赞同，国民政府承认9月1日为中国记者节。陕甘宁边区建立后，延安的新闻工作者每年都在这一天举行纪念活动。1943年9月1日，重庆《新华日报》为纪念记者节发表社论《记者节谈记者作风》；为纪念记者节，陆定一同志这一天在延安《解放日报》发表文章《我们对于新闻学的基本观点》。"
      ]
    }
  ]
}`},{festival_name:"立冬",festival_desc:`{
  "disp_name" : "立冬",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年11月7日或8日"
        },
        {
          "title" : "代表寓意",
          "value" : "冬季的开始"
        },
        {
          "title" : "气候特点",
          "value" : "由少雨干燥向阴雨寒冻过渡"
        },
        {
          "title" : "节气养生",
          "value" : "滋阴潜阳、少食生冷"
        },
        {
          "title" : "节气三候",
          "value" : "水始冰；地始冻；雉入大水为蜃"
        }
      ],
      "detail" : [
        "立，建始也，表示冬季自此开始。冬是终了的意思，有农作物收割后要收藏起来的含意，中国又把立冬作为冬季的开始。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "冬季要保证头暖、背暖、脚暖。女性在生理期还要特别注意腹部保暖。中医的经验是，“冬伤于寒，春必温病。”冬天过分受凉，冬寒进入体内，到春天就会患温病（是以发热为特征的外感急性病，如流感等）。",
        "阳虚体质的人，冬天做身体按摩时，要减少背部按摩的时间。中医认为，腹为阴，背为阳，背部裸露和按摩容易扰动阳气而导致阳气外泄。相反，应该重视阴经的保健，可以在位于胸腹部正中线的任脉上艾灸，任脉与六阴经有联系，称为“阴脉之海”，具有调节全身诸阴经经气的作用。可以重点做膻中穴（双乳中间）、神阙（肚脐）、关元（肚脐下四指）等穴位。",
        "如果不小心受凉风寒，可以用姜片、红糖煮水喝。还可以用葱白、姜片、糯米煮粥，加适量米醋，制成“神仙粥”，预防风寒感冒，效果非常好。",
        "从“立冬”开始一直到“立春”都叫“冬三月”，是一年中最冷的时节。要顺应自然的变化，入冬以后起居调养都应该以“养藏”为主。冬季健康养生应讲究进补均衡，冬季除了进食热食或性热的食物外，适当吃些性冷食物和凉菜，不但对身体无害，反而有益。“冬令进补”应根据实际情况有针对性地选择清补、温补、小补、大补，万不可盲目“进补”。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "立冬时节，天气逐渐变冷，人体热量散失较多，饮食应以增加热能为主，肉类、鸡蛋、鱼类、乳类、豆类及富含碳水化合物和脂肪的食物，是这个季节饮食中不可缺少的。",
        "冬季对应五脏肾，所以立冬时节养生首重养肾。但是需要注意的是，补肾固然重要，但五行中的侧重，是要在五行均衡中略有侧重，而不是不顾及五行均衡的过分重视。",
        "一、黑色食材养护肾阳",
        "黑色入肾，吃黑色的食物对养肾有好处，黑豆、黑米、海参、何首乌、黑木耳等食材，都是不错的选择。",
        "二、冬要温补绿色蔬菜不可少",
        "源于易学的中医理论认为，春要升补、夏要清补、长夏要淡补、秋要平补、冬要温补。立冬过后，在进食营养丰富的食品进补的同时，也要多吃新鲜蔬菜，尤其是绿色蔬菜，以避免维生素的缺乏。",
        "三、水果补充营养还养颜",
        "《黄帝内经》有云：“五谷为养，五果为助，五畜为益，五菜为充，气味合而服之，以补精益气。”说的是水果有助健康、有养生的功效。水果中含有的多种营养成分，可以调节体内代谢，预防疾病，增进健康。立冬时节多吃水果不仅有利于健康，还可以美肤养颜。",
        "四、干果、杂粮调理肌肤",
        "立冬后的天气，风大、寒冷，对皮肤的损害不小。为了调理肌肤，缓解皮肤的干燥，可吃板栗、花生、红枣、核桃等这些应季的干果，和玉米、小米、燕麦、豆类等杂粮。",
        "五、喝粥、热饮滋阴润肺",
        "多喝粥、热饮，不仅有助于增加热量和营养，还可滋阴润肺。立冬过后，为了御寒，暖气、空调成了取暖必备，以至于室内空气干燥，且与室外温差加大，容易引起感冒、上火等症状。诸如芝麻粥、萝卜粥、胡桃粥、茯苓粥、大枣粥、银耳枸杞汤、鲫鱼汤、银耳莲子汤、冰糖梨汤等，有助于缓解上火、喉干等症状。"
      ]
    },
    {
      "title" : "气候",
      "detail" : [
        "我国古代将立冬节气分为3个5天，并由此定出三候：“一候水始冰；二候地始冻；三候雉入大水为蜃。” 此节气水已经能结成冰；土地也开始冻结；三候“雉入大水为蜃”中的雉即指野鸡一类的大鸟，蜃为大蛤，立冬后，野鸡一类的大鸟便不多见了，而海边却可以看到外壳与野鸡的线条及颜色相似的大蛤。所以古人认为雉到立冬后便变成大蛤了。",
        "",
        "对“立冬”的理解，我们还不能仅仅停留在冬天开始的意思上。追根溯源，古人对“立”的理解与现代人一样，是建立、开始的意思。但“冬”字就不那么简单了，在古籍《月令七十二候集解》中对“冬”的解释是：“冬，终也，万物收藏也”，意思是说秋季作物全部收晒完毕，收藏入库，动物也已藏起来准备冬眠。看来，立冬不仅仅代表着冬天的来临，完整地说，立冬是表示冬季开始，万物收藏，归避寒冷的意思。左河水《立冬》诗云：“北风往复几寒凉，疏木摇空半绿黄。四野修堤防旱涝，万家晒物备收藏。”"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "迎冬",
        "",
        "立冬与立春、立夏、立秋合称四立、古代社会中是个重要的节日。过去是个农耕社会，劳动了一年，利用立冬这一天要休息，顺便犒赏一家人的辛苦。",
        "",
        "贺冬",
        "",
        "贺冬亦称“拜冬”，在汉代即有此俗。东汉崔定《四民月令》：“冬至之日进酒肴，贺谒君师耆老，一如正日。”宋代每逢此日，人们更换新衣，庆贺往来，一如年节。清代“至日为冬至朝，士大夫家拜贺尊长，又交相出谒。细民男女，亦必更鲜衣以相揖，谓之“拜冬。”(见顾禄《清嘉录》卷十一)。民国以来，贺冬的传统风俗，似有简化的趋势。但有些活动，逐渐固定化、程式化、更有普遍性。如办冬学、拜师活动，都在冬季举行。",
        "",
        "食俗",
        "",
        "立冬则有吃水饺的风俗。立冬时，包饺子，味道既同大白菜有异，还要蘸醋加烂蒜吃，才算别有一番滋味。",
        "",
        "立冬为什么吃饺子？因我国以农立国，很重视二十四节气，“节”者，草木新的生长点也。秋收冬藏，这一天，改善一下生活，就选择了“好吃不过饺子”。所以《礼记》中有“食瓜亦祭先也”的说法。冬至，中国古有“冬至节”的风俗。"
      ]
    }
  ]
}`},{festival_name:"小雪",festival_desc:`{
  "disp_name" : "小雪",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年11月22日或23日"
        },
        {
          "title" : "代表寓意",
          "value" : "开始下雪"
        },
        {
          "title" : "气候特点",
          "value" : "冷空气南下，气温下降"
        },
        {
          "title" : "节气养生",
          "value" : "合理饮食、温补益肾"
        },
        {
          "title" : "节气三候",
          "value" : "虹藏不见；天气上升；闭塞成冬"
        }
      ],
      "detail" : [
        "小雪，是二十四节气中的第20个。11月22或23日，太阳到达黄经240°，此时称为小雪节气。进入该节气，中国广大地区西北风开始成为常客，气温下降，逐渐降到0℃以下，但大地尚未过于寒冷，虽开始降雪，但雪量不大，故称小雪。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "气虚者的补法",
        "",
        "所谓气虚即气不够用，动则气喘、体倦、懒言、常自汗出、面色眺白、舌淡白、脉虚弱无力。气虚之人可选用人参进补。人参性温、味甘微苦，可大补元气，是补气要药，《本经》谓“明目开心益智，久服轻身延年”，近代研究证明，人参可调节网状皮肤系统功能，其所含人参皂甙。确实具有抗衰老作用。使用时。可用人参一味煎汤，名独参汤，具有益气固脱之功效，年老体弱之人，长服此汤，可强身体。人参若切成饮片，可补益身体，防御疾病，增强肌体抗病能力。",
        "",
        "血虚者的补法",
        "",
        "所谓血虚，即是营养人体的物质不足，不能发挥濡养人体的作用，表现为不耐劳作、面色无华、苍白、且易健忘、失眠、舌淡、脉细。血虚体质者当选龙眼肉进补。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "一、滋补益肾多吃黑",
        "小雪节气应当遵循“秋冬养阴”“无扰乎阳”的原则，既不宜生冷，也不宜燥热，最宜食用滋阴潜阳、热量较高的食物，如腰果、山药、芡实、核桃、花生等。\\n同时，还要注意多吃富含维生素C的蔬果，如胡萝卜、辣椒、土豆等蔬菜以及苹果等水果。\\n另外，冬宜补肾，黑色食物入肾补肾，所以小雪时节，也要多吃黑色的益肾食物，如黑米、紫米、黑豆、黑芝麻、黑木耳、黑枣等，不仅可以补养肾气，还可以抵抗寒冷、润肺生津，具有很好的保健功能。",
        "二、多食粥汤 多饮热水",
        "冬天多食热粥有益健康，如有养心除烦作用的小麦粥、消食化痰的萝卜粥、益气养阴的大枣粥等。\\n鸡汤有很好的补虚功效，冬季多喝有助于提高人体免疫力。鱼汤则有健脾开胃、止咳平喘等功能。\\n多饮水可以促进新陈代谢。最好在每天清晨空腹喝一杯温开水，还能降低血液黏度，预防心脑血管疾病。蜂蜜水可润燥解毒，白萝卜水能清热利尿，梨水可以润肺止咳，都是这个时节不错的选择。",
        "三、少咸多苦",
        "多吃苦味食物防“上火”。小雪时节，外面寒冷，屋内燥热，再加上人们穿得多，很容易出现口干舌燥、口腔溃疡、皮肤干燥的症状，也就是民间所谓的“上火”了。\\n为了防止“上火”，少吃辛辣食物，多喝水，戒烟戒酒，适当多吃些芹菜、莴笋、生菜、苦菊等苦味食物。"
      ]
    },
    {
      "title" : "气候",
      "detail" : [
        "小雪阶段比入冬阶段气温低。 到了小雪节气，意味着我国华北地区将有降雪。冷空气使我国北方大部地区气温逐步达到0℃以下。",
        "",
        "黄河中下游平均初雪期基本与小雪节令一致。虽然开始下雪，一般雪量较小，并且夜冻昼化。如果冷空气势力较强，暖湿气流又比较活跃的话，也有可能下大雪；南方地区北部开始进入冬季。“荷尽已无擎雨盖，菊残犹有傲霜枝”，已呈初冬景象。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "腌腊肉",
        "",
        "民间有：“冬腊风腌，蓄以御冬”的习俗。小雪后气温急剧下降，天气变得干燥，是加工腊肉的好时候。小雪节气后，一些农家开始动手做香肠、腊肉，把多余的肉类用传统方法储备起来，等到春节时正好享受美食。",
        "",
        "吃糍粑",
        "",
        "在南方某些地方，还有农历十月吃糍粑的习俗。糍粑是用糯米蒸熟捣烂后所制成的一种食品，是中国南方一些地区流行的美食。古时，糍粑是南方地区传统的节日祭品，最早是农民用来祭牛神的供品。有俗语“十月朝，糍粑禄禄烧”，就是指的祭祀事件。",
        "",
        "晒鱼干",
        "",
        "小雪时台湾中南部海边的渔民们会开始晒鱼干、储存乾粮。乌鱼群会在小雪前后来到台湾海峡，另外还有旗鱼、沙鱼等。台湾俗谚：十月豆，肥到不见头，是指在嘉义县布袋一带，到了农历十月可以捕到“豆仔鱼”。",
        "",
        "吃刨汤",
        "",
        "小雪前后，土家族群众又开始了一年一度的“杀年猪，迎新年”民俗活动，给寒冷的冬天增添了热烈的气氛。吃“刨汤”，是土家族的风俗习惯；在“杀年猪，迎新年”民俗活动中，用热气尚存的上等新鲜猪肉，精心烹饪而成的美食称为“刨汤”。",
        "",
        "今年农历小雪之际，湘西土家族苗族自治州龙山县石牌镇的土家族农民，用刚刚杀年猪的新鲜猪肉，在家中烹饪土家族传统美食“刨汤”，准备用来款待亲朋好友。"
      ]
    }
  ]
}`},{festival_name:"国庆节",festival_desc:`{
  "disp_name" : "国庆节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "10月1日"
        },
        {
          "title" : "节日意义",
          "value" : "纪念国家本身"
        },
        {
          "title" : "节日象征",
          "value" : "国家独立"
        },
        {
          "title" : "纪念方式",
          "value" : "大规模、全民性庆典活动"
        }
      ],
      "detail" : [
        "1949年12月3日，中央人民政府委员会第四次会议接受全国政协的建议，通过了《关于中华人民共和国国庆日的决议》，决定每年10月1日为中华人民共和国宣告成立的伟大日子，为中华人民共和国国庆日。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "国庆节是由一个国家制定的用来纪念国家本身的法定假日。",
        "它们通常是这个国家的独立、宪法的签署、元首诞辰或其他有重大纪念意义的周年纪念日；也有些是这个国家守护神的圣人节。",
        "",
        "虽然绝大部分国家都有类似的纪念日，但是由于复杂的政治关系，部分国家的这一节日不能够称为国庆日，比如美国只有独立日，没有国庆日，但是两者意义相同。而中国古代把皇帝即位、诞辰称为“国庆”。"
      ]
    },
    {
      "title" : "活动",
      "detail" : [
        "假期安排",
        "",
        "1999年起国庆节是中国大陆的“黄金周”假期。国庆的法定休假时间为3天，再将前后两个周末调整为一起休假共计7天；中国大陆海外机构及企业则为3-7日；澳门特别行政区为2日，香港特别行政区为1日。",
        "",
        "截至2014年，中国国务院办公厅节假日安排的通知10月1日至7日放假调休，共7天。9月28日（星期日）、10月11日（星期六）上班。",
        "",
        "阅兵仪式",
        "",
        "每逢五、十周年会有不同规模的庆典和阅兵，历史上影响较大且最具代表意义的是开国大典、建国5周年、10周年、35周年和50周年、60周年的六次大阅兵。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "国庆日，各国都要举行不同形式的庆祝活动，以加强本国人民的爱国意识，增强国家的凝聚力。各国之间也都要相互表示祝贺。逢五逢十的国庆日，有的还要扩大庆祝规模。",
        "",
        "为庆祝国庆日，各国政府通常要举行一次国庆招待会，由国家元首、政府首脑或外交部长出面主持，邀请驻在当地的各国使节和其他重要外宾参加。但也有的国家不举行招待会，如美国、英国均不举行招待会。"
      ]
    }
  ]
}`},{festival_name:"寒露",festival_desc:`{
  "disp_name" : "寒露",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年10月7日~9日"
        },
        {
          "title" : "代表寓意",
          "value" : "气温比白露时更低"
        },
        {
          "title" : "气候特点",
          "value" : "气温下降，少雨干燥，晨露更凉"
        },
        {
          "title" : "节气养生",
          "value" : "润肺生津、健脾益胃"
        },
        {
          "title" : "节气三候",
          "value" : "鸿雁来宾、雀入水为蛤、菊有黄华"
        }
      ],
      "detail" : [
        "寒露时节，南岭及以北的广大地区均已进入秋季，东北和西北地区已进入或即将进入冬季。首都北京大部分年份这时已可见初霜，除全年飞雪的青藏高原外，东北北部和新疆北部地区一般已开始降雪。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "一般而言，秋天人的情绪不太稳定，易于烦躁或悲愁伤感，特别是身临花木凋零，秋风萧瑟的深秋，常在一些人(特别是老年人)心中引起苦闷与垂暮之感。因此，秋季养生以调达情志、培养乐观情绪、保持心理平衡为首要。在阳光明媚的天气里，外出观赏风景，喜悦溢于言表，可使忧郁愁烦顿消，令人心旷神怡，给生活增添无穷乐趣。",
        "民间有句谚语叫做“白露不露身，寒露不露脚”，这句话是说，白露时节的时候，老人和小孩子就不要赤膊了，而到了寒露的时候，就要注意足部保暖了。与白露相比，寒露的“寒”字表明凉气更甚。古人把“露”作为天气转凉的表征。因此，老年人要注意穿上保暖性好的鞋袜，脚踝部也不要露在外面。每天晚上要养成用热水泡脚的习惯，因为脚离心脏最远，血液供应较少，热水泡脚可以使血管扩张，改善脚部的血液循环和组织营养，提高机体的免疫能力。还可以减少腿部酸困，有助于睡眠。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "寒露节气到了，饮食要少吃“三冷”，多吃“三暖”：",
        "少吃“三冷”",
        "1、生冷瓜果",
        "水果类一般都比较寒凉，夏季的一些水果如西瓜、甜瓜、草莓等都不适合在这个季节里过多食用，一些可以生吃的蔬菜如黄瓜、生菜等，最好都加热做熟以后食用，秋季的一些寒凉水果如梨、山楂、柚子等也可采用蒸、煮、煲汤等方法食用。",
        "2、凉性蔬菜",
        "一般来说带“苦味、酸味”的蔬菜都偏凉性，如苦瓜、蒲公英、竹笋、石花菜、发菜等，而且也不是应季的蔬菜，寒露过后还是建议少食用的。",
        "3、贝类海鲜",
        "贝类的海鲜如花甲、扇贝、田螺等都是寒性很足的食材，不适合多吃。深秋季节也正是吃螃蟹的时候，但要注意螃蟹也是寒性很大的食材，虽然异常鲜美，不要过多食用，吃螃蟹的时候可以搭配黄酒、姜茶等来抵消寒性。",
        "多吃“三暖”",
        "1、生姜",
        "生姜可以驱风寒，属于温性食物，刺激性也不是特别大，因为生姜中含有姜油酮、姜酚等生理活性物质，能促进消化，温中散寒，注意补充水分的情况下，每日食用几片姜是再好不过的。",
        "2、羊肉",
        "羊肉被称为“秋冬补品”，肉质鲜嫩，营养价值高，羊肉味甘而不腻，性温而不燥，可以暖中祛寒、温补气血，不但滋味鲜美，而且能滋补身体，一举两得。",
        "3、蜂蜜",
        "寒露节气除了“寒”，因为少雨多风，还有一个明显的特征就是“燥”，也就是人们常说的“秋燥”，我国古代就有对付秋燥的良方：“朝朝盐水，晚晚蜜汤。”蜂蜜被称为“天赐的礼物”，既是良药，又是上等饮料，除了滋润营养的果糖和葡萄糖，蜂蜜中还含有天然的含有活性酶，经常食用蜂蜜对健康有很大的好处。"
      ]
    },
    {
      "title" : "起源",
      "detail" : [
        "公历每年10月8日或9日是太阳到达黄经195°时为寒露 。",
        "《月令七十二候集解》说：“九月节，露气寒冷，将凝结也。”寒露的意思是气温比白露时更低，地面的露水更冷，快要凝结成霜了。",
        "",
        "寒露时节，南岭及以北的广大地区均已进入秋季，东北和西北地区已进入或即将进入冬季。首都北京大部分年份这时已可见初霜，除全年飞雪的青藏高原外，东北北部和新疆北部地区一般已开始降雪。",
        "",
        "我国将寒露分为三候：“一候鸿雁来宾；二候雀入大水为蛤；三候菊有黄华。”此节气中鸿雁排成一字或人字形的队列大举南迁；深秋天寒，雀鸟都不见了，古人看到海边突然出现很多蛤蜊，并且贝壳的条纹及颜色与雀鸟很相似，所以便以为是雀鸟变成的；第三候的“菊始黄华”是说在此时菊花已普遍开放。"
      ]
    },
    {
      "title" : "气候",
      "detail" : [
        "寒露之后，露水增多，气温更低。此时我国有些地区会出现霜冻，北方已呈深秋景象，白云红叶，偶见早霜，南方也秋意渐浓，蝉噤荷残。",
        "我国传统将露作为天气转凉变冷的表征。仲秋白露节气“露凝而白”，至季秋寒露时已是“露气寒冷，将凝结为霜了”。",
        "",
        "这时，我国南方大部分地区各地气温继续下降。华南日平均气温多不到20℃，即使在长江沿岸地区，水银柱也很难升到30℃以上，而最低气温却可降至10℃以下。西北高原除了少数河谷低地以外，候（5天）平均气温普遍低于10℃，用气候学划分四季的标准衡量，已是冬季了。千里霜铺，万里雪飘，与华南秋色迥然不同。"
      ]
    },
    {
      "title" : "影响",
      "detail" : [
        "寒露以后，北方冷空气已有一定势力，我国大部分地区在冷高压控制之下，雨季结束。天气常是昼暖夜凉，晴空万里，对秋收十分有利。我国大陆上绝大部分地区雷暴已消失，只有云南、四川和贵州局部地区尚可听到雷声。华北10月份降水量一般只有9月降水量的一半或更少，西北地区则只有几毫米到20多毫米。干旱少雨往往给冬小麦的适时播种带来困难，成为旱地小麦争取高产的主要限制因子之一。",
        "",
        "海南和西南地区这时一般仍然是秋雨连绵，少数年份江淮和江南也会出现阴雨天气，对秋收秋种有一定的影响。",
        "“寒露不摘棉，霜打莫怨天”。趁天晴要抓紧采收棉花，遇降温早的年份，还可以趁气温不算太低时把棉花收回来。江淮及江南的单季晚稻即将成熟，双季晚稻正在灌浆，要注意间歇灌溉，保持田间湿润。",
        "",
        "南方稻区还要注意防御“寒露风”的危害。华北地区要抓紧播种小麦，这时，若遇干旱少雨的天气应设法造墒抢墒播种，保证在霜降前后播完，切不可被动等雨导致早茬种晚麦。"
      ]
    }
  ]
}`},{festival_name:"粮食日",festival_desc:`{
  "disp_name" : "世界粮食日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "10月16日"
        },
        {
          "title" : "起源时间",
          "value" : "1979年11月"
        },
        {
          "title" : "节日活动",
          "value" : "黎巴嫩厅发布“食物权方法工具箱”等"
        }
      ],
      "detail" : [
        "世界粮食日（World Food Day，缩写为WFD），是世界各国政府每年在10月16日围绕发展粮食和农业生产举行纪念活动的日子。1979年11月，第20届联合国粮农组织（Food and Agricultural Organization of the United Nations，FAO)大会决议确定，1981年10月16日是首届世界粮食日，此后每年的这一天都作为“世界粮食日”。"
      ]
    },
    {
      "title" : "来源",
      "detail" : [
        "1972年，由于连续两年气候异常造成的世界性粮食歉收，加上苏联大量抢购谷物，出现了世界性粮食危机。联合国粮农组织于1973年和1974年相继召开了第一次和第二次粮食会议，以唤起世界，特别是第三世界注意粮食及农业生产问题。但是，问题并没有得到解决，世界粮食形势更趋严重。关于“世界粮食日”的决议正是在这种背景下做出的。",
        "",
        "选定10月16日作为世界粮食日因为联合国粮农组织创建于1945年10月16日。联合国粮农组织在关于世界粮食日的决议中要求，各国政府在每年10月16日要组织举办各种多样、生动活泼的庆祝活动。"
      ]
    },
    {
      "title" : "宗旨",
      "detail" : [
        "促进人们重视农业粮食生产，为此激励国家、双边、多边及非政府各方作出努力；",
        "鼓励发展中国家开展经济和技术合作；",
        "鼓励农村人民，尤其是妇女和最不利群体参与影响其生活条件的决定和活动；",
        "增强公众对于世界饥饿问题的意识；",
        "促进向发展中国家转让技术；",
        "加强国际和国家对战胜饥饿、营养不良和贫困的声援，关注粮食和农业发展方面的成就。"
      ]
    },
    {
      "title" : "意义",
      "detail" : [
        "在人类居住的地球上，不仅动植物，而且农作物的品种也在日益减少。古代先农们种植过多达数千种的农作物，而只有大约150种被广泛种植，成为人们主要的食物来源。其中，玉米、小麦、水稻约占60%，而大多数其它农作物品种已处于灭绝的边缘。随着农作物品种日趋单一和世界人口爆炸性增长，全世界粮食供应正变得日益脆弱。",
        "",
        "自马尔萨斯于1798年发表《人口论》，提出人口增长将超过生活资料生产的观点之后，人们对他的预言持不同观点。1968年，保罗.爱赫利奇发表了《人口炸弹》；1972年，罗马俱乐部发表了《增长的极限》。这两部著作都进一步表示担心说，无限制的人口增长将导致大规模的饥荒。对这种观点也有人持不同观点，认为：人不仅仅消费，而且还能生产出比消费多得多的东西。",
        "",
        "70年代末，美国华盛顿世界观察研究所的来斯特.布朗争辩说，世界各地的农场主和农民已经用尽了能够提高产量的办法，但稻谷和小麦的产量正开始下降。在亚洲的其它地区，水稻研究人员20多年来也未能大幅度地提高作物产量。",
        "",
        "2009年，世界人口正以每年9100万的速度增长，地球提供给人们“足够”粮食的局面还能维持多久，许多人正以焦虑的心情在进行研究。许多国家政府对于举办“世界粮食日”活动都很重视。有的国家首脑在这一天发表演讲，有的国家举行纪念会或发表纪念文章，有的国家科研机构发表粮食和农业科研成果，举办科学讨论会等，以提高人们对粮食以及粮食引发的一系列问题的重视和研究。"
      ]
    }
  ]
}`},{festival_name:"霜降",festival_desc:`{
  "disp_name" : "霜降",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年的10月23日或24日"
        },
        {
          "title" : "代表寓意",
          "value" : "天气渐冷，开始有霜"
        },
        {
          "title" : "气候特点",
          "value" : "早晚天气较冷，中午较热，秋燥明显"
        },
        {
          "title" : "节气养生",
          "value" : "防秋燥、防秋郁、防寒"
        },
        {
          "title" : "节气三候",
          "value" : "豺乃祭兽，草木黄落，蜇虫咸俯"
        }
      ],
      "detail" : [
        "霜降，二十四节气之一，每年公历10月23日左右，霜降节气含有天气渐冷、初霜出现的意思，是秋季的最后一个节气，也意味着冬天即将开始。霜降时节，养生保健尤为重要，民间有谚语“一年补透透，不如补霜降”，足见这个节气对人们的影响。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "七十二候中关于霜降的有“三候”。“初候豺乃祭兽”，是说豺这类动物从霜降开始要为过冬储备食物;“二候草木黄落”，此时节草木枯黄，落叶满地;“三候蛰虫咸俯”，准备冬眠的动物开始藏在洞穴中过冬了。此时节大自然都处在一个向冬天过渡的阶段，我们人类也应该把“秋冻”放在一边，为健康地度过寒冷的冬天做些准备了。",
        "",
        "秋末时节，是呼吸道疾病的高发期，多吃生津润燥、宣肺止咳作用的梨、苹果、橄榄、白果、洋葱、芥菜、萝卜等食物，搓揉迎香穴鼻翼两侧，练练呬“嘶”音字功等，都有助于我们预防呼吸道疾病。",
        "",
        "天气逐渐变冷，身体局部保暖不当或人体为适应寒冷的刺激而有所增加的新陈代谢等原因，使得慢性胃病、“老寒腿”等疾病的发病随之增多。尤其是有消化道溃疡病史的人，要特别注意自我保养，一定要坚持医生的指导治疗，避免服用对胃肠黏膜刺激性大的食物和药物。",
        "",
        "“霜叶红于二月花”。霜降过后，枫树、黄栌树等树木在秋霜的抚慰下，开始漫山遍野地变成红黄色，如火似锦，非常壮观。大家在外出登山、欣赏美景的时候，一定要注意保暖，尤其要保护膝关节，切不可运动过量。膝关节在遇到寒冷刺激时，血管收缩，血液循环变差，往往使疼痛加重，故在天冷时应注意保暖，必要时戴上护膝。老年人运动时，不宜做屈膝动作时间较长的运动，要尽量减少膝关节的负重。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "霜降前后要多吃牛肉。牛肉蛋白质含量高，脂肪含量低，有“肉中骄子”的美称。霜降养生吃一些牛肉，可以治疗中气不足、气短体虚、筋骨酸软、久病贫血、面黄体瘦、头晕目眩等症状。",
        "霜降节气的到来意味着冬季将要到来，养生首先推荐白萝卜。“冬吃萝卜夏吃姜，不要医生开药方”中说的就是萝卜所具有的功效。中医认为，白萝卜性凉、味甘，具有清热生津、下气宽中、开胃健脾、顺气化痰之功效。白萝卜中含有丰富的维生素C和微量元素，可帮助机体增强免疫力，促进肠胃蠕动，以增加食欲等。",
        "鸭肉是霜降时节必吃的食物之一。鸭肉不仅富含蛋白质，可及时补充夏季的过度消耗，且其性凉，具有滋阴养胃、健脾补虚的作用。",
        "山药为补中益气药，具有补益脾胃的作用，特别适合脾胃虚弱者进补前食用。将山药、大枣20克、米(粳米、糯米各一半)熬成粥，就是很好的选择。另外，多汗、反复感冒的气虚患者在秋季应该适度增加山药的摄入量。",
        "霜降时节吃秋梨是个不错的选择。梨味甘性凉、微酸，具有清热生津、润肺化痰的功效，是防治秋燥的佳果。梨能维持细胞组织的健康状态，还能软化血管。生食梨有清热解毒、生津润燥、清心降火作用;煎水或加蜜熬膏，有清热润肺、化痰止咳的作用。若与荸荠、蜂蜜、甘蔗等榨汁同服，效果更佳。",
        "霜降前后苹果大量上市，这时吃苹果最养生。苹果中的有机酸和纤维素可促进肠蠕动，能使大便松软，便于排泄，因此食用苹果能促进通便，治疗大便干燥。苹果中含有的大量维生素、苹果酸，能促使积存于人体内的脂肪分解，经常食用苹果可以防止肥胖。"
      ]
    },
    {
      "title" : "来源",
      "detail" : [
        "每年阳历10月23日前后，太阳到达黄经210度时为二十四节气中的霜降。霜降是秋季的最后一个节气，是秋季到冬季的过渡节气。秋晚地面上散热很多，温度骤然下降到0度以下，空气中的水蒸气在地面或植物上直接凝结形成细微的冰针，有的成为六角形的霜花，色白且结构疏松。",
        "",
        "《月令七十二候集解》关于霜降说：九月中，气肃而凝，露结为霜矣。“霜降”表示天气逐渐变冷，露水凝结成霜。我国古代将霜降分为三候：一候豺乃祭兽；二候草木黄落；三候蜇虫咸俯。豺狼开始捕获猎物，祭兽，以兽而祭天报本也，方铺而祭秋金之义；大地上的树叶枯黄掉落；蜇虫也全在洞中不动不食，垂下头来进入冬眠状态中。"
      ]
    },
    {
      "title" : "风俗",
      "detail" : [
        "在中国的一些地方，霜降时节要吃红柿子，在当地人看来，这样不但可以御寒保暖，同时还能补筋骨，是非常不错的霜降食品。",
        "泉州老人对于霜降吃柿子的说法是：霜降吃丁柿，不会流鼻涕。",
        "有些地方对于这个习俗的解释是：霜降这天要吃杮子，不然整个冬天嘴唇都会裂开。",
        "住在农村的人们到了这个时候，则会爬上一棵棵高大的柿子树，摘几个光鲜香甜的柿子吃。"
      ]
    }
  ]
}`},{festival_name:"万圣夜",festival_desc:`{"disp_name" : "万圣夜","area": 0,"type": 0,"cards":[{"title":"简介","tags":[{"title":"节日别名","value":"万圣节前夜"},{"title":"节日时间","value":"10月31日"}, {"title" : "节日意义","value" : "赞美秋天，祭祀亡魂，祈福平安"}],"detail":["万圣节前夜是万圣节的前一天，即每年的10月31日，是西方世界的传统节日，庆祝活动一般在晚上。主要流行于撒克逊人后裔云集的美国、不列颠群岛、澳大利亚、加拿大和新西兰等西方国家。当晚小孩会穿上化妆服，戴上面具，挨家挨户收集糖果等。"]},{"title":"来源","detail":["两千多年前，欧洲的基督教会把11月1日定为“天下圣徒之日”（All Hallows’ Day）。“Hallow”即圣徒之意。传说自公元前五百年，居住在爱尔兰、苏格兰等地的凯尔特人（Celts）把这节日往前移了一天，即10月31日。他们认为该日是夏天正式结束的日子，也就是新年伊始，严酷的冬天开始的一天。",
              "",
              "那时人们相信，故人的亡魂会在这一天回到故居地在活人身上找寻生灵，借此再生，而且这是人在死后能获得再生的唯一希望。而活人则惧怕死人的魂灵来夺生，于是人们就在这一天熄掉炉火、烛光，让死人的魂灵无法找到活人，又把自己打扮成妖魔鬼怪把死人的魂灵吓走。之后，他们又会把火种、烛光重新燃起，开始新的一年的生活。"]},{"title":"习俗","detail":["万圣节前夜是一年中最“闹鬼”的时候，各种妖魔鬼怪、海盗、外星来客和巫婆们纷纷出动。在基督纪元以前，凯尔特人在夏末举行仪式感激上苍和太阳的恩惠。当时的占卜者点燃并施巫术以驱赶据说在四周游荡的妖魔鬼怪。",
              "",
              "后来罗马人用果仁和苹果来庆祝的丰收节与凯尔特人的10月31日融合了。在中世纪，人们穿上动物造型的服饰、戴上可怕的面具是想在万圣节前夜驱赶黑夜中的鬼怪。尽管后来基督教代替了凯尔特和罗马的宗教活动，早期的习俗还是保留下来了。孩子们带着开玩笑的心理穿戴上各种服饰和面具参加万圣夜舞会，这些舞会四周的墙上往往悬挂着用纸糊的巫婆、黑猫、鬼怪和尸骨，窗前和门口则吊着龇牙咧嘴或是面目可憎的南瓜灯笼。",
              "",
              "万圣节前夕，孩子们会提着南瓜灯，穿着各式各样的稀奇古怪的服装，挨家挨户地去索要糖果，不停地说：“trick or treat”（意思是：“给不给，不给就捣蛋。”）要是你不肯给糖果的话，孩子们就会很生气，用各种方法去惩罚你，例如：把垃圾倒在你家里等等的方法去惩罚你，直到你肯给他们糖果为止。",
              "",
              "而对传统而言人们会扮成精灵，然后逐家逐户去恳求食物。他们的信念是要给予精灵崇拜及食物来讨好它们，否则这些精灵就会捉弄他们，诸如：烟囱堵塞，牛羊失丧﹑被掷黄芽白等等。另一个途径去愚弄或吓跑这些恶灵，就是扮成它们的样子，他们相信这样那些恶灵就不会伤害他们。"]}]}`},{festival_name:"辛亥革命",festival_desc:`{
  "disp_name" : "辛亥革命",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "爆发时间",
          "value" : "1911年（辛亥年）10月10日"
        },
        {
          "title" : "结束时间",
          "value" : "1912年2月12日"
        },
        {
          "title" : "主要人物",
          "value" : "孙文、黄兴 、蒋翊武、黎元洪、袁世凯"
        }
      ],
      "detail" : [
        "辛亥革命，是指发生于中国农历辛亥年（清宣统三年），即公元1911年至1912年初，旨在推翻清朝专制帝制、建立共和政体的全国性革命。"
      ]
    },
    {
      "title" : "结果",
      "detail" : [
        "清帝退位",
        "",
        "1912年2月2日，清廷举行御前会议，会上决定退位，以取得革命党人的优待条件。",
        "",
        "袁世凯上台",
        "",
        "1912年2月13日，孙中山提出辞呈，向临时参议院推荐袁世凯接任。2月15日临时参议院选袁世凯任临时大总统，议决临时政府仍设在南京，并电袁前来受职；未受任前，政务仍由孙中山继续执行。"
      ]
    },
    {
      "title" : "影响",
      "detail" : [
        "废除帝制",
        "",
        "辛亥革命以反对君主专制制度、建立资产阶级共和国为目标，是一次比较完全意义上的资产阶级民主革命。正如毛泽东指出的:“中国反帝反封建的资产阶级民主革命，正规地说起来，是从孙中山开始的。”辛亥革命的领袖们，则认识到要救国必须革命，要想救亡图存，只能是推翻封建皇权。",
        "",
        "思想解放",
        "",
        "辛亥革命冲破了封建思想的牢笼。自汉代董仲舒以来的中国思想文化，君臣关系是“三纲五常”中三纲之首。皇帝不仅是政治上的权威，也是文化中诸多价值观念的重要依据与合法性的来源。辛亥革命不但从行动上坚决地打倒皇帝，并从舆论上对君权神授观念和皇权思想进行鞭挞和批判，极大地促进了人民的思想解放，为探索救国兴邦的道路打开了新的思想境界。",
        "",
        "除旧布新",
        "",
        "辛亥革命促进了社会习俗的除旧布新。辛亥革命的实际政治影响远远超出了人们的预料。政治体制的革故鼎新带来了民国初年的中国社会面貌为之一新。正是这些新的变化，打开了中国通向现代化的闸门。",
        "",
        "经济发展",
        "",
        "辛亥革命为民族资本主义的发展创造了有利的条件。民国建立以后，国内实业集团纷纷成立，开工厂、设银行成为风气。民族资本主义的经济力量在短短的几年内就有了显著的增长，无产阶级队伍也迅速壮大起来。",
        "",
        "此外，从辛亥革命各省独立响应开始，中国进入长期的分裂混乱之中，除了袁世凯曾在二次革命之后曾短暂大致统一全国之外，其他中华民国的政权都未能直接统治整个中国(如号称统一的国民政府只能收到五个省的税收)，一直要到1950年代，才由中国共产党使中国大陆再度统一。长期的分裂及战乱，对于中国的经济发展及现代化建设造成很大的阻碍。"
      ]
    }
  ]
}`},{festival_name:"重阳节",festival_desc:`{
  "disp_name" : "重阳节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日别称",
          "value" : "登高节、晒秋节、重九节、九九重阳等"
        },
        {
          "title" : "节日时间",
          "value" : "农历九月初九日"
        },
        {
          "title" : "节日起源",
          "value" : "祭祀、自然崇拜"
        },
        {
          "title" : "节日饮食",
          "value" : "重阳糕、菊花酒"
        }
      ],
      "detail" : [
        "重阳节早在战国时期就已经形成，自魏晋重阳气氛日渐浓郁，倍受历代文人墨客吟咏，到了唐代被正式定为民间的节日，此后历朝历代沿袭至今。1989年农历九月九日被定为老人节，倡导全社会树立尊老、敬老、爱老、助老的风气。2006年5月20日，重阳节被国务院列入首批国家级非物质文化遗产名录。"
      ]
    },
    {
      "title" : "起源",
      "detail" : [
        "重阳的源头，可追溯到先秦之前。《吕氏春秋》之中《季秋纪》载：“（九月）命家宰，农事备收，举五种之要。藏帝籍之收于神仓，祗敬必饬。”“是日也，大飨帝，尝牺牲，告备于天子。”可见当时已有在秋九月农作物丰收之时祭飨天帝、祭祖，以谢天帝、祖先恩德的活动。",
        "",
        "汉代，《西京杂记》中记西汉时的宫人贾佩兰称：“九月九日，佩茱萸，食蓬饵，饮菊花酒，云令人长寿。”相传自此时起，有了重阳节求寿之俗。这是受古代巫师（后为道士）追求长生，采集药物服用的影响。同时还有大型饮宴活动，是由先秦时庆丰收之宴饮发展而来的。《荆楚岁时记》云：“九月九日，四民并籍野饮宴。”隋杜公瞻注云：“九月九日宴会，未知起于何代，然自驻至宋未改。”求长寿及饮宴，构成了重阳节的基础。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "登高",
        "",
        "重阳节首先有登高的习俗。金秋九月，天高气爽，这个季节登高远望可达到心旷神怡、健身祛病的目的。早在西汉，《长安志》中就有汉代京城九月九日时人们游玩观景之记载。在东晋时，有著名的“龙山落帽”故事。",
        "",
        "吃重阳糕",
        "",
        "据史料记载，重阳糕又称花糕、菊糕、五色糕，制无定法，较为随意。 九月九日天明时，以片糕搭儿女头额，口中念念有词，祝愿子女百事俱高，乃古人九月作糕的本意。讲究的重阳糕要作成九层，像座宝塔，上面还作成两只小羊，以符合重阳（羊）之义。有的还在重阳糕上插一小红纸旗，并点蜡烛灯。这大概是用“点灯”、“吃糕”代替“登高”的意思，用小红纸旗代替茱萸。当今的重阳糕，仍无固定品种，各地在重阳节吃的松软糕类都称之为重阳糕。",
        "",
        "赏菊",
        "",
        "重阳日，历来就有赏菊花的风俗，所以古来又称菊花节。农历九月俗称菊月，节日举办菊花大会，倾城的人潮赴会赏菊。从三国魏晋以来，重阳聚会饮酒、赏菊赋诗已成时尚。在中国古俗中，菊花象征长寿。",
        "",
        "饮菊花酒",
        "",
        "菊花含有养生成分，晋代葛洪《抱朴子》有南阳山中人家饮用遍生菊花的甘谷水而益寿的记载。重阳佳节饮菊花酒，是中国的传统习俗。菊花酒，在古代被看作是重阳必饮、祛灾祈福的“吉祥酒”。",
        "",
        "菊花酒汉代已见。其后仍有赠菊祝寿和采菊酿酒的故事，如魏文帝曹丕曾在重阳日赠菊给钟繇（祝他长寿），梁简文帝《采菊篇》有“相呼提筐采菊珠，朝起露湿沾罗懦”之句，是采菊酿酒的事例。直到明清，菊花酒仍然盛行，在明代高濂的《遵生八笺》中仍有记载，是盛行的健身饮料。",
        "",
        "佩茱萸",
        "",
        "古代还风行九九插茱萸的习俗，所以又叫做茱萸节。茱萸入药，可制酒养身祛病。插茱萸和簪菊花在唐代就已经很普遍。茱萸香味浓，有驱虫去湿、逐风邪的作用，并能消积食，治寒热。民间认为九月初九也是逢凶之日，多灾多难，所以在重阳节人们喜欢佩带茱萸以辟邪求吉。茱萸因此还被人们称为“辟邪翁”。"
      ]
    }
  ]
}`},{festival_name:"爱牙日",festival_desc:`{
  "disp_name" : "爱牙日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年的9月20日"
        },
        {
          "title" : "设立机构",
          "value" : "卫生部、教委等部"
        },
        {
          "title" : "节日宗旨",
          "value" : "提高全民族的口腔健康水平"
        }
      ],
      "detail" : [
        "1989年，由卫生部、教委等部委联合签署，确定每年的9月20日为全国的爱牙日。 宗旨是通过爱牙日活动，来广泛动员社会的力量，在群众中进行牙病防治知识的普及教育，增强口腔健康观念和自我口腔保健的意识，建立口腔保健行为，从而提高全民族的口腔健康水平。 建立爱牙日是为了加强口腔预防工作，落实预防为主方针的重要举措！健康每一天，从爱牙开始！"
      ]
    },
    {
      "title" : "历年主题",
      "detail" : [
        "1989年：人人刷牙，早晚刷牙，正确刷牙，！用保健牙刷和含氟牙膏刷牙。",
        "1990年：爱牙健齿强身。",
        "1991年：爱护牙齿从小做起。",
        "1992年：爱护牙齿，从小做起，从我做起。",
        "1993年：天天刷牙，定期检查。",
        "1994年：健康的生活需要口腔卫生。",
        "1995年：适量用氟，预防龋齿。",
        "1996年：少吃含糖食品，有益口腔健康。",
        "1997年：爱牙健齿强身，预防龋病。牙周疾病，健康的牙齿伴你一生。",
        "1998年：健康的牙齿，美好的微笑。",
        "1999年：老年人的口腔保健。",
        "2000年：善待牙齿。",
        "2001年：吸烟与口腔健康 。",
        "2002年：预防牙周疾病 维护口腔健康 。",
        "2003年：有效刷牙 预防牙周疾病。",
        "2004年：口腔健康与生命质量。",
        "2005年：关注孕妇口腔健康。",
        "2006年：婴幼儿口腔保健 。",
        "2007年：面向西部，面向儿童 。",
        "2009年：维护口腔健康，提高生命质量。",
        "2010年：窝沟封闭，保护牙齿。",
        "2011年：健康口腔，幸福家庭。",
        "2012年：健康口腔，幸福家庭；关爱自己，保护牙周。",
        "2013年：健康口腔，幸福家庭；关爱老人，修复失牙。",
        "2014年：健康每一天，从爱牙开始。",
        "2015年：定期口腔检查，远离口腔疾病。",
        "2016年：口腔健康，全身健康。"
      ]
    }
  ]
}`},{festival_name:"白露",festival_desc:`{
  "disp_name" : "白露",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年9月7日或8日"
        },
        {
          "title" : "代表寓意",
          "value" : "天气转凉，露凝而白"
        },
        {
          "title" : "气候特点",
          "value" : "干燥，昼夜温差较大，天气渐渐转凉"
        },
        {
          "title" : "节气养生",
          "value" : "预防秋燥、滋阴益气、贴秋膘"
        },
        {
          "title" : "节气三候",
          "value" : "鸿雁来；玄鸟归；群鸟养羞"
        }
      ],
      "detail" : [
        "“白露”是反映自然界气温变化的节令。露是“白露”节气后特有的一种自然现象。此时的天气，正如《礼记》中所云的：“凉风至，白露降，寒蝉鸣。”"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "白露过后，气温逐渐转凉，特别是一早一晚，更添几分凉意，因此穿衣不能赤膊露体，以防寒邪侵袭。过了白露，人们容易出现口干、唇干、咽干、皮肤干燥等症状，这就是典型的“秋燥”。因此，饮食应当以健脾润燥为主，宜吃性平味甘或甘温之物，或是容易消化的平补食品。",
        "白露昼夜温差较大，一般昼夜温差在10℃左右，因此要注重耐寒锻炼，预防感冒。白露节气运动锻炼，做到“六防”：",
        "第一要注重运动锻炼，也要讲究耐寒锻炼；",
        "第二要防感冒，要注意呼吸道疾病的防治；",
        "第三要防肠胃病，要慎食一些瓜类、水果之类的东西；",
        "第四是防乱补。比如说可以吃一点乌骨鸡汤、蜂蜜、芝麻、花生之类的；",
        "第五是防肥胖，到秋天的话天气转凉了，胃口也好了，食欲大增，往往饮食过多；",
        "第六是防伤害，秋令时节要坚持锻炼，但运动时要防受凉感冒、运动损伤和运动过度。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "白露时节为典型的秋季气候，容易出现口干、唇干、鼻干、咽干及大便干结、皮肤干裂等症状。预防秋燥的方法很多，可适当地多服一些富含维生素的食品，也可选用一些宣肺化痰、滋阴益气的中药，如人参、沙参、西洋参、百合、杏仁、川贝等，对缓解秋燥多有良效。对普通大众来说，简单实用的药膳、食疗似乎更容易接受。",
        "白露饮食宜“养心肝脾胃”为原则，可多吃酸味食物以养肝，但不宜进食过饱，以免肠胃积滞，变生胃肠疾病。老人与小孩饮食更应注意少量多餐，而且以温、软食物为主，不可过食生冷、硬的食物。另一方面，也要预防秋燥，可多吃辛润食物，如梨、百合、甘蔗、沙葛、萝卜、银耳、蜜枣等，也可结合药膳进行调理。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "白露是农历二十四节气之一，当太阳到达黄经一百六十五度时交白露节气。白露是秋天的第三个节气，表示孟秋时节的结束和仲秋时节的开始。露水是由于温度降低，水汽在地面或近地物体上凝结而成的水珠。所以，白露实际上是表征天气已经转凉。这时，人们就会明显地感觉到炎热的夏天已过，而凉爽的秋天已经到来了。昼夜温差可达十多度。阳气是在夏至达到顶点，物极必反，阴气也在此时兴起。到了白露，阴气逐渐加重，清晨的露水随之日益加厚，凝结成一层白白的水滴，所以就称之为白露。俗语云：“处暑十八盆，白露勿露身。”这两句话的意思是说，处暑仍热，每天须用一盆水洗澡，过了十八天，到了白露，就不要赤膊裸体了，以免着凉。还有句俗话：“白露白迷迷，秋分稻秀齐。”意思是说，白露前后若有露，则晚稻将有好收成。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "白露节气生活小贴士",
        "",
        "俗语云：“处暑十八盆，白露勿露身。”这句话的意思是表示，处暑还会热，每天需要用一盆水洗澡，在过了十八天，到了白露节气，就不能赤膊露体了，会着凉受寒。",
        "",
        "白露即为典型的秋季气候，容易出现口干、唇干、鼻干、咽干及大便干结、皮肤干裂等症状。预防秋燥的方法很多，可适当地多服一些富含维生素的食品，也可选用一些宣肺化痰、滋阴益气的中药，如人参、沙参、西洋参、百合、杏仁、川贝等，对缓解秋燥多有良效。对普通大众来说，简单实用的药膳、食疗似乎更容易接受。",
        "",
        "春捂秋冻是一条经典的养生保健要诀。当然，秋冻并非人人皆宜。如糖尿病患者局部供血较差，如果血管一下子受到冷空气刺激，很容易发生血管痉挛，使血流量进一步减少，易引起组织坏死和糖尿病足，再加上糖尿病和心脑血管疾病常常伴发，冷空气刺激更易诱发心脑血管疾病，甚至导致心梗等后果。因此，糖尿病患者最好不要秋冻。除此之外，像体质较弱的老人和儿童、心脑血管疾病患者、慢性支气管炎患者、哮喘病患者和关节炎患者都不适合“秋冻”。",
        "",
        "早晚温差大就应该及时添加衣被，否则，极容易患上感冒，而支气管炎、哮喘、消化性溃疡等慢性病患者，也容易诱发或加重病情。肚脐部位的表皮最薄，皮下没有脂肪组织，但有丰富的神经末梢和神经丛，对外部刺激敏感。若防护不当，晚上睡觉暴露腹部或爱美穿露脐装，寒气极易通过肚脐侵入人体。如果寒气直中肠胃，就会发生急性腹痛、腹泻、呕吐；天长日久，寒气逐渐积聚在小腹，还会导致泌尿生殖系统疾病。脚部分布着人体的6条重要经脉，并且脚远离心脏，血液循环最为不畅。所以，有“寒从脚起，热从头散”的说法。研究证实，双脚受凉是引发感冒、支气管炎、消化不良、失眠等病症的元凶。因此，白露应注意脚的保暖，鞋袜宜宽松、舒适、吸汗。",
        "",
        "清茶",
        "",
        "到了白露节气，秋意渐浓。旧时南京人十分重视节气的“来”和“去”，逐渐形成了具有南京地方特色的节气习俗。",
        "",
        "米酒",
        "",
        "资兴兴宁、三都、蓼江一带历来有酿酒习俗。每年白露节一到，家家酿酒，待客接人必喝“土酒”。其酒温中含热，略带甜味，称“白露米酒”。白露米酒中的精品是“程酒”，是因取程江水酿制而得名。"
      ]
    }
  ]
}`},{festival_name:"教师节",festival_desc:`{
  "disp_name" : "教师节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "英文名",
          "value" : "Teachers’ Day"
        },
        {
          "title" : "节日时间",
          "value" : "每年的9月10日"
        },
        {
          "title" : "节日意义",
          "value" : "肯定教师为教育事业所做的贡献"
        }
      ],
      "detail" : [
        "在中国近现代史上，多次以不同的日期作为过教师节。直至1985年，第六届全国人大常委会第九次会议通过了国务院关于建立教师节的议案，才真正确定了1985年9月10日为中国第一个教师节。"
      ]
    },
    {
      "title" : "演变历史",
      "detail" : [
        "1931年，教育家邰爽秋、程其保等联络京、沪教育界人士，在南京中央大学集会，发表要求“改善教师待遇，保障教师工作和增进教师修养”的宣言，并议定6月6日为教师节，也称双六节。这个教师节没有被当时的国民党政府承认，但在中国各地产生了一定影响。",
        "",
        "1939年国民党政府决定立孔子诞辰日8月27日为教师节，并颁发了《教师节纪念暂行办法》，但当时未能在全国推行",
        "",
        "建国后，中央人民政府曾恢复6月6日为教师节，教育部通告各地教育工作者，可以根据实际情况自行组织庆祝活动。",
        "",
        "1951年，中华人民共和国教育部和中华全国总工会共同商定，把5月1日国际劳动节作为中国教师节。但由于这一天缺少教师的特点，执行的结果并不理想。特别是1957年以后，在左倾思想影响下，教师不受重视，教师节实际上已不再存在。",
        "",
        "1981年3月，中国人民政治协商会议第五届全国委员会第四次会议上，中国民主促进会的17位政协委员联名提交了一份提案：建议确定全国教师节日期及活动内容案。提案指出，教师担负着培养四化建设人才的重任，应当享有崇高的社会地位。",
        "",
        "1982年4月，教育部党组和全国教育工会分党组联合，由张承先和方明共同签发的“关于恢复‘教师节’的请示报告”送中央书记处，报告中并建议以马克思的诞辰日5月5日为教师节。",
        "",
        "1983年3月全国政协六届一次会议上，方明和民进18位政协委员联名再次提出“为提高教师的社会地位，造成尊师重教的社会风尚，建议恢复教师节案”。9月，中宣部办公厅致函教育部办公厅，经研究政协一次会议方明等同志的提案，同意恢复教师节。12月，由教育部何东昌部长和方明共同签发的教育部党组和全国教育工会分党组“关于恢复‘教师节’的请示”送中央宣传部。",
        "",
        "1984年12月15日，北京师范大学钟敬文、启功、王梓坤、陶大镛、朱智贤、黄济、赵擎寰联名，正式提议设立教师节。教育部党组和全国教育工会分党组“关于建立‘教师节’的报告”送中央书记处并报国务院。",
        "",
        "1985年1月，全国人大常委会通过了这一议案，确定每年的9月10日为教师节。"
      ]
    },
    {
      "title" : "庆祝方式",
      "detail" : [
        "由于教师节并非中国传统节日，所以各地每年都会有不同的庆祝活动，没有统一、固定的形式。",
        "政府、学校方面，有举行教师节庆祝表彰大会，为教师颁发奖金、证书；有组织学校学生、歌舞团等，为教师献上歌舞表演；有走访、慰问教师代表，还有组织新入职教师进行集体宣誓等活动。",
        "学生方面，有自发通过原创参与、将祝福写在板报、贺卡、绘画上；有将合影照及活动感言晒至个人空间、微博上，来表达对教师的真挚祝福及衷心问候。"
      ]
    }
  ]
}`},{festival_name:"九一八纪念日",festival_desc:`{
  "disp_name" : "九一八纪念日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
       "tags" : [
        {
          "title" : "别称",
          "value" : "沈阳事变、满洲事变"
        },
        {
          "title" : "发生时间",
          "value" : "1931年9月18日"
        }
      ],
      "detail" : [
        "九一八事变——1931年9月18日，日本驻中国东北地区的关东军突然袭击沈阳，以武力侵占东北的事件。"
      ]
    },
    {
      "title" : "背景",
      "detail" : [
        "9世纪末至20世纪前半叶，日本逐步确定了征服世界必先征服中国，征服中国必先征服“满蒙”的战略方针。1930年，世界资本主义经济危机波及日本，为了转移日益激化的国内阶级矛盾，日本加快了武力侵华的步伐，于1931年7月和8月在东北制造了“万宝山事件”和“中村事件”。9月18日，日本又制造“柳条湖事件”，发动了侵略中国东北的战争。",
        "",
        "当晚10时许，日本关东军岛本大队川岛中队河本末守中尉率部下数人，在沈阳北大营南约800米的柳条湖附近，将南满铁路一段路轨炸毁。日军在此布置了一个假现场，摆了3具身穿中国士兵服的尸体，反诬是中国军队破坏铁路。日军独立守备队第二大队即向中国东北军驻地北大营发动进攻。次日晨4时许，日军独立守备队第五大队由铁岭到达北大营加入战斗。5时半，东北军第七旅退到沈阳东山嘴子，日军占领北大营。战斗中东北军伤亡300余人，日军伤亡24人。这就是震惊中外的九一八事变。"
      ]
    },
    {
      "title" : "影响",
      "detail" : [
        "1931年的9月18日，炮声轰隆，炸毁了南满铁路，炸开了沈阳城。这一炸，在中国人心里烙上了一道永恒的伤疤。这一天，成为中国人民14年艰苦卓绝的抗日战争的历史起点。81年前的今天，日本关东军制造沈阳事变，拉开了其漫长侵华战争的序幕，国人痛失东北，三千万父老，数千里江山，沦陷于异族的铁蹄之下。“九一八”，就此成为国人的“国耻日”。",
        "",
        "九一八事变是日本军国主义发动了蓄谋已久的侵华战争。这场侵略战争给中国人民带来了空前的灾难和损失，也给后人留下了深刻的历史血鉴。"
      ]
    }
  ]
}`},{festival_name:"抗日战争胜利纪念日",festival_desc:`{
  "disp_name" : "抗日战争胜利纪念日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "9月3日"
        },
        {
          "title" : "节日起源",
          "value" : "世界反法西斯战争胜利"
        },
        {
          "title" : "设立机构",
          "value" : "十二届全国人大常委会第七次会议"
        }
      ],
      "detail" : [
        "1945年9月2日，日本向盟军投降仪式在东京湾密苏里号军舰上举行。在包括中国在内的9个受降国代表注视下，日本在投降书上签字。这是中国近代以来反侵略历史上的第一次全面胜利，也为世界反法西斯战争的胜利做出了巨大贡献。之后每年的9月3日，被确定为中国人民抗日战争胜利纪念日。"
      ]
    },
    {
      "title" : "背景",
      "detail" : [
        "1931年9月18日，日本侵略者发动“九一八事变”，进而侵占中国东北。1937年7月7日，日本侵略者炮轰宛平县城、进攻卢沟桥，发动全面侵华战争。中国人民毅然奋起，英勇抵抗。在中国共产党倡导建立的抗日民族统一战线的旗帜下，以国共合作为基础，全国各族人民包括港澳台同胞、海外侨胞同日本侵略者进行了历时十四年的艰苦卓绝的斗争。",
        "1945年9月2日上午9时（东京时间），同盟国联合受降典礼在停泊于东京湾的美国军舰“密苏里”号上隆重举行。日本政府全权代表和大本营全权代表分别在投降书上签字，美国、中国、英国、苏联、法国和荷兰、澳大利亚、加拿大、新西兰的全权代表(中国代表为国民政府军事委员会军令部部长徐永昌将军)在日本投降书上签字确认，接受日本投降，投降书即刻宣告生效。至此，中国人民抗日战争胜利结束，宣告日本帝国主义彻底失败，世界反法西斯战争取得了完全胜利。",
        "1946年4月，中国国民党中常会决议将庆祝胜利的9月3日，定为抗战胜利纪念日（“国定纪念日”）。 中华人民共和国成立后，1949年12月23日，中央人民政府政务院即公布了《全国年节及纪念日放假办法》，规定了“八一五抗战胜利纪念日”。1951年8月13日，中央人民政府政务院发布通告，将抗战胜利纪念日改定为9月3日。1999年9月18日，国务院对《全国年节及纪念日放假办法》进行修订，延续了9月3日为抗战胜利纪念日的规定。"
      ]
    },
    {
      "title" : "意义",
      "detail" : [
        "全国人大常委会以立法形式确立纪念日，集中反映了中国人民的共同意志，表明了中国人民坚决维护国家主权和领土完整的坚定立场，表明了中国人民反对侵略战争、捍卫人类尊严、维护世界和平的坚定立场。依照全国人大常委会的决定，隆重地举行法定的、国家层面的纪念和悼念活动，目的是要牢记中国人民抗日战争的伟大意义，充分认识中国人民抗日战争在世界反法西斯战争中的重要地位和巨大贡献，充分认识中国人民抗日战争胜利为实现民族独立和人民解放奠定的重要基础，永远铭记中国人民反抗日本帝国主义侵略的艰苦卓绝斗争；牢记日本帝国主义侵略给中国人民和世界人民造成的深重灾难，警醒全世界人民时刻警惕日本为军国主义侵略历史翻案，维护第二次世界大战胜利成果和确立的战后国际秩序；弘扬以爱国主义为核心的伟大民族精神，激励全国各族人民为实现中华民族伟大复兴的中国梦、促进人类和平与发展的崇高事业而共同奋斗。",
        "",
        "在中华民族的复兴征程上，这是两个具有特殊意义的日子。一个是1945年9月2日日本政府正式签订投降书，9月3日举国同庆，中国人民取得抗日战争的伟大胜利，也标志着世界反法西斯战争的完全胜利。一个是1937年12月13日，三十多万同胞惨遭日本侵略者杀戮。全国人大常委会首次以立法形式将这两个日子分别确定和设立为国家层面的纪念日。这一将重大纪念活动制度化、规范化的国家行动，集中反映了全体中国人民的共同意愿和心声。"
      ]
    }
  ]
}`},{festival_name:"秋分",festival_desc:`{
  "disp_name" : "秋分",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年9月22日-24日"
        },
        {
          "title" : "代表寓意",
          "value" : "秋季中间，昼夜等长"
        },
        {
          "title" : "气候特点",
          "value" : "昼夜温差逐渐加大，气温逐日下降"
        },
        {
          "title" : "节气养生",
          "value" : "阴平阳秘、收敛闭藏"
        },
        {
          "title" : "节气三候",
          "value" : "雷始收声；蛰虫坯户；水始涸"
        }
      ],
      "detail" : [
        "秋分时节，我国大部分地区已经进入凉爽的秋季，南下的冷空气与逐渐衰减的暖湿空气相遇，产生一次次的降水，气温也一次次地下降。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "秋季天气干燥，主要外邪为燥邪。秋分之前有暑热的余气，故多见于温燥；秋分之后，阵阵秋风袭来，使气温逐渐下降，寒凉渐重，所以多出现凉燥。要防止凉燥，就得坚持锻炼身体，增强体质，提高抗病能力。秋季锻炼，重在益肺润燥，如练吐纳功、叩齿咽津润燥功。饮食调养方面，应多喝水，吃清润、温润的食物，如芝麻、核桃、糯米、蜂蜜、乳品、梨等，可以起到滋阴润肺、养阴生津的作用。",
        "在精神养生方面，要看到秋季气候渐转干燥，日照减少，气温渐降，人们的情绪未免有些垂暮之感，故有“秋风秋雨愁煞人”之言。所以这时，人们应保持神志安宁，减缓秋肃杀之气对人体的影响，收敛神气，以适应秋天容平之气。同时精神情绪上要看到积极的一面，那就是金秋季节时，天高气爽，是开展各种运动锻炼的好时机，登山、慢跑、散步、打球、游泳等。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "秋分饮食有三“宜”：",
        "1、宜清淡膳食",
        "烹调食物时， 遵循“少油、少盐”的原则，可减少发生高血脂、高血压和肥胖的风险。烹调以蒸、炖、煮为优，其次是炒，避免反复油炸食品。还应该控制甜食，尽量少加糖，控制各类糕点、饮料。",
        "2、宜常吃蔬果",
        "中医食疗认为秋季应“减辛增酸”。“辛”是指辛辣刺激性食物，应该严格控制，而“酸”是指各类有含有酸性成分的水果，包括苹果、梨、石榴、芒果、柚子、葡萄、杨桃、山楂等。如果有条件，可以选择秋季时令的蔬果，例如菠菜、卷心菜、萝卜、莲藕、茭白、花菜、柿子、秋梨、番茄、枣、苹果、柚子、石榴、葡萄等。",
        "3、宜多喝水",
        "尽管秋天不如夏天一样的炎热，但空气相对干燥，也需要多喝水，以及多吃水分含量较高的蔬果，例如雪梨、瓜类蔬菜。每日饮水量在1500-1700毫升，南方秋季温度仍然较高，饮水量在1800毫升或以上为宜。",
        "秋季饮食有八“忌“：",
        "1、勿吃油腻和重口味食物",
        "秋天普遍比较干燥，应减少油腻和辛辣食物的摄入，特别是要控制麻辣火锅，以免加重“秋燥”，引起体内不适。",
        "2、勿暴饮暴食",
        "秋季气候宜人，食欲大增，味觉增强，而且食物丰富，往往会造成饮食过量。如果摄入热量过剩，转化成脂肪聚积，加之汗液分泌减少，消耗减少，容易使体重增加而导致超重、肥胖。",
        "3、勿在吃火锅时只吃肉",
        "肉类过多，容易上火，尤其是秋天干燥季节，更不适宜。为了健康，在吃火锅的时候，肉类食物与蔬菜应交替进食，这样不仅不容易感到过分油腻，还可以帮助控制肉类的总量摄入。",
        "4、忌贪吃生冷食品",
        "由于夏季炎热的影响，秋季肠胃变得比较敏感，如果生冷食品一次摄入较多，势必造成对肠胃刺激大，可能引起肠胃不适。",
        "5、忌盲目控制饮食",
        "为了保持身材，避免冬天“攒膘”，有的女性选择在秋季严格控制饮食，却造成不少造成贫血、月经失调和肠胃疾病、抵抗力下降等健康问题。",
        "6、勿盲目进补",
        "进补要看个人体质，而不是人云亦云。例如，低血压和高血压的食物要求不同，前者可适当增加口味，后者则需要严格控制咸味食品、控制油盐摄入。",
        "7、忌盲目吃蟹",
        "俗话说“秋风起，闸蟹肥”。每年秋天正是蟹肉最肥美、也最滋补的时候。然而，有过敏史的人忌吃蟹，胆囊炎和痛风患者急性发作期间不宜吃螃蟹，患有冠心病、动脉硬化、高血脂的人应忌食蟹黄，脾胃虚寒者尤应注意避免吃过多。",
        "8、勿多食月饼",
        "月饼的主要成分是面粉、白糖、油脂和配料，热量非常高，因此，切勿多食。若是高血糖、高血脂、高血压的“三高”人群，更应浅尝辄止，并适当减少当天主食和油脂的进食量。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "我国古籍《春秋繁露·阴阳出入上下篇》中说：“秋分者，阴阳相半也，故昼夜均而寒暑平。”秋分之“分”为“半”之意。“秋分”的意思有二：",
        "",
        "一是，日夜时间均等，并由日长夜短逐步日短夜长。太阳在这一天到达黄经180度，直射地球赤道，因此全球大部分地区这一天的24小时昼夜均分，各12小时；在北极点与南极点附近，这一天可以观测到“太阳整日在地平线上转圈”的特殊现象。",
        "",
        "二是，气候由热转凉。按我国古代以立春、立夏、立秋、立冬为四季开始的季节划分法，秋分日居秋季90天之中，平分了秋季。",
        "秋分在每年公历的9月22日，23日或24日，为中国传统节日中的二十四节气之一，此时太阳到达黄经180度。秋分的含义《月令七十二候集解》：“八月中……解见春分”。“分”示昼夜平分之意，同春分一样，此日阳光直射地球赤道，昼夜相等。此后，阳光直射位置开始进入南半球，北半球开始昼短夜长，气温降低，在全国具有普遍意义。秋分，“分”即为“半”。秋分时，地球绝大部分地区这一天昼夜均分，各12小时，在北极点（北纬90°）与南极点（南纬90°）附近，这一天可以观测到“太阳整日在地平线上转圈”的特殊现象。秋分之后，北半球各地昼短夜长，南半球各地昼长夜短。”秋分的特点秋分节气是二十四节气中比较特殊的。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "秋祭月",
        "",
        "秋分曾是传统的“祭月节”。如古有“春祭日，秋祭月”之说。现在的中秋节则是由传统的“祭月节”而来。据考证，最初“祭月节”是定在“秋分”这一天，不过由于这一天在农历八月里的日子每年不同，不一定都有圆月。而祭月无月则是大煞风景的。所以，后来就将“祭月节”由“秋分”调至中秋。",
        "",
        "吃秋菜",
        "",
        "在岭南地区，昔日四邑（现在加上鹤山为五邑）的开平苍城镇的谢姓，有个不成节的习俗，叫做“秋分吃秋菜”。“秋菜”是一种野苋菜，乡人称之为“秋碧蒿”。逢秋分那天，全村人都去采摘秋菜。在田野中搜寻时，多见是嫩绿的，细细棵，约有巴掌那样长短。采回的秋菜一般家里与鱼片“滚汤”，名曰“秋汤”。有顺口溜道：“秋汤灌脏，洗涤肝肠。阖家老少，平安健康。”一年自秋，人们祈求的还是家宅安宁，身壮力健。",
        "",
        "送秋牛",
        "",
        "秋分随之即到，其时便出现挨家送秋牛图的。其图是把二开红纸或黄纸印上全年农历节气，还要印上农夫耕田图样，名曰“秋牛图”。送图者都是些民间善言唱者，主要说些秋耕和吉祥不违农时的话，每到一家更是即景生情，见啥说啥，说得主人乐而给钱为止。言词虽随口而出，却句句有韵动听。俗称“说秋”，说秋人便叫“秋官”。",
        "",
        "放风筝",
        "",
        "秋分期间还是孩子们放风筝的好时候。尤其是秋分当天。甚至大人们也参与。风筝类别有王字风筝，鲢鱼风筝，眯蛾风筝，雷公虫风筝，月儿光风筝，其大者有两米高，小的也有二、三尺。市场上有卖风筝的，多比较小，适宜于小孩子们玩耍，而大多数还是自己糊的，较大，放时还要相互竞争看哪个的放得高。"
      ]
    }
  ]
}`},{festival_name:"中国烈士纪念日",festival_desc:`{
  "disp_name" : "中国烈士纪念日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "英文名",
          "value" : "Chinese Martyrs Day"
        },
        {
          "title" : "节日时间",
          "value" : "9月30日"
        },
        {
          "title" : "节日意义",
          "value" : "纪念中国烈士"
        },
        {
          "title" : "设定时间",
          "value" : "2014年8月25日"
        }
      ],
      "detail" : [
        "2014年8月25日下午，中国十二届全国人大常委会第十次会议听取国务院关于提请审议《关于设立烈士纪念日的决定(草案)》的议案。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "近代以来，为了争取民族独立和人民自由幸福，为了国家繁荣富强，无数的英雄献出了生命，烈士的功勋彪炳史册，烈士的精神永垂不朽。为了弘扬烈士精神，缅怀烈士功绩，培养公民的爱国主义、集体主义精神和社会主义道德风尚，培育和践行社会主义核心价值观，增强中华民族的凝聚力，激发实现中华民族伟大复兴中国梦的强大精神力量，第十二届全国人民代表大会常务委员会第十次会议决定：将9月30日设立为烈士纪念日。每年9月30日国家举行纪念烈士活动。"
      ]
    },
    {
      "title" : "意义",
      "detail" : [
        "缅怀烈士功绩、弘扬烈士精神，培养公民的爱国主义、集体主义精神和社会主义道德风尚，传承中华民族气节血脉，培育和践行社会主义核心价值观，增强中华民族的凝聚力，激发实现中华民族伟大复兴中国梦的强大精神力量。"
      ]
    }
  ]
}`},{festival_name:"中秋节",festival_desc:`{
  "disp_name" : "中秋节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "团圆节，秋夕，八月节等"
        },
        {
          "title" : "节日时间",
          "value" : "农历八月十五日"
        },
        {
          "title" : "节日习俗",
          "value" : "赏月、祭月、吃月饼等"
        },
        {
          "title" : "流传地区",
          "value" : "中国众多民族与汉字文化圈诸国"
        }
      ],
      "detail" : [
        "中秋节始于唐朝初年，盛行于宋朝，至明清时，已成为与春节齐名的中国主要节日之一。受中华文化的影响，中秋节也是东亚和东南亚一些国家尤其是当地的华人华侨的传统节日。自2008年起中秋节被列为国家法定节假日。2006年5月20日，国务院列入首批国家级非物质文化遗产名录。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "关于中秋节的起源，说法较多。中秋一词，最早见于《周礼》，《礼记·月令》上说：“仲秋之月养衰老，行糜粥饮食。”",
        "",
        "一说它起源于古代帝王的祭祀活动。《礼记》上记载：“天子春朝日，秋夕月”，夕月就是祭月亮，说明早在春秋时代，帝王就已开始祭月、拜月了。后来贵族官吏和文人学士也相继仿效，逐步传到民间。",
        "",
        "二是中秋节的起源和农业生产有关。秋天是收获的季节。“秋”字的解释是：“庄稼成熟曰秋”。八月中秋，农作物和各种果品陆续成熟，农民为了庆祝丰收，表达喜悦的心情，就以“中秋”这天作为节日。“中秋”就是秋天中间的意思，农历的八月是秋季中间的一个月，十五日又是这个月中间的一天，所以中秋节可能是古人“秋报”遗传下来的习俗。",
        "",
        "也有历史学家研究指出，中秋节起源应为隋末唐军于大业十三年八月十五日，唐军裴寂以圆月作为构思，成功发明月饼，并广发军中作为军饷，成功解决因大量吸收反隋义军而衍生之军粮问题。",
        "",
        "中秋节是中国的传统佳节。根据史籍的记载，“中秋”一词最早出现在《周礼》一书中。到魏晋时，有“谕尚书镇牛淆，中秋夕与左右微服泛江”的记载。直到唐朝初年，中秋节才成为固定的节日。《唐书·太宗记》记载有“八月十五中秋节”。中秋节的盛行始于宋朝，至明清时，已与元旦齐名，成为中国的主要节日之一。这也是中国仅次于春节的第二大传统节日。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "1.祭月、赏月、拜月",
        "",
        "2.猜谜",
        "",
        "中秋月圆夜在公共场所挂着许多灯笼，人们都聚集在一起，猜灯笼身上写的谜语，因为是大多数年轻男女喜爱的活动，同时在这些活动上也传出爱情佳话，因此中秋猜灯谜也被衍生了一种男女相恋的形式。",
        "",
        "3.吃月饼",
        "",
        "中秋节赏月赏月和吃月饼是中国各地过中秋节的必备习俗，俗话说：“八月十五月正圆，中秋月饼香又甜”。月饼一词，源于南宋吴自牧的《梦梁录》，那时仅是一种点心食品。到后来人们逐渐把赏月与月饼结合在一起，寓意家人团圆，寄托思念。同时，月饼也是中秋时节朋友间用来联络感情的重要礼物。",
        "",
        "4.赏桂花、饮桂花酒",
        "",
        "人们经常在中秋时吃月饼赏桂花，食用桂花制作的各种食品，以糕点、糖果最为多见。",
        "中秋之夜，仰望着月中丹桂，闻着阵阵桂香，喝一杯桂花蜜酒，欢庆合家甜甜蜜蜜，已成为节日一种美的享受。到了现代，人们多是拿红酒代替。"
      ]
    }
  ]
}`},{festival_name:"地球日",festival_desc:`{
  "disp_name" : "地球日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年的4月22日"
        },
        {
          "title" : "流行地区",
          "value" : "全球"
        },
        {
          "title" : "节日意义",
          "value" : "关爱地球"
        }
      ],
      "detail" : [
        "中国从20世纪90年代起，每年都会在4月22日举办世界地球日活动。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "1969年美国民主党参议员盖洛德·尼尔森在美国各大学举行演讲会，筹划在次年的4月22日组织以反对越战为主题的校园运动，但是在1969年西雅图召开的筹备会议上，活动的组织者之一，哈佛大学法学院学生丹尼斯·海斯提出将运动定位在于全美国的，以环境保护为主题的草根运动。",
        "",
        "1969年盖洛·尼尔森提议，在全国各大学校园内举办环保问题讲演会，海斯听到这个建议后，就设想在剑桥市举办一次环保的演讲会。于是，他前往首都华盛顿去会见了尼尔森。年轻的海斯谈了自己的设想，尼尔森喜出望外，立即表示愿意任用海斯，甚至鼓动他暂时停止学业，专心从事环保运动。于是，海斯毅然办理了停学手续。不久，他就把尼尔森的构想扩大，办起了一个在美国各地展开的大规模的社区性活动。他选定1970年4月22日（ 星期三） 为第一个“ 地球日”。 就在那年的4月22日， 美国各地大约有2000万人参加了游行示威和演讲会。 ",
        "",
        "2009年4月22日，第63届联合国大会一致通过决议，决定将今后每年的4月22日定为“世界地球日”。"
      ]
    },
    {
      "title" : "历年主题",
      "detail" : [
        "世界地球日没有国际统一的特定主题，它的总主题始终是“只有一个地球”。",
        "2016 年 节约利用资源， 倡导绿色简约生活",
        "2015 年 珍惜地球资源 转变发展方式—— 提高资源利用效益",
        "2014 年 珍惜地球资源 转变发展方式—— 节约集约利用国土资源共同保护自然生态空间",
        "2013 年 珍惜地球资源 转变发展方式—— 促进生态文明 共建美丽中国",
        "2012 年 珍惜地球资源 转变发展方式—— 推进找矿突破， 保障科学发展",
        "2011 年 珍惜地球资源 转变发展方式—— 倡导低碳生活",
        "2010 年 珍惜地球资源， 转变发展方式， 倡导低碳生活。",
        "2009 年 绿色世纪（ Green Generation）",
        "2008 年 善待地球—— 从身边的小事做起",
        "2007 年 善待地球—— 从节约资源做起",
        "2006 年 善待地球—— 珍惜资源， 持续发展",
        "2005 年 善待地球—— 科学发展， 构建和谐",
        "2004 年 善待地球， 科学发展",
        "2003 年 善待地球， 保护环境",
        "2002 年 让地球充满生机",
        "2001 年 世间万物， 生命之网",
        "2000 年 2000 环境千年—— 行动起来吧！",
        "1999 年 拯救地球， 就是拯救未来",
        "1998 年 为了地球上的生命—— 拯救我们的海洋",
        "1997 年 为了地球上的生命",
        "1996 年 我们的地球、 居住地、 家园",
        "1995 年 各国人民联合起来， 创造更加美好的世界",
        "1994 年 一个地球， 一个家庭",
        "1993 年 贫穷与环境—— 摆脱恶性循环",
        "1992 年 只有一个地球—— 一齐关心， 共同分享",
        "1991 年 气候变化—— 需要全球合作",
        "1990 年 儿童与环境",
        "1989 年 警惕， 全球变暖！",
        "1988 年 保护环境、 持续发展、 公众参与",
        "1987 年 环境与居住",
        "1986 年 环境与和平",
        "1985 年 青年、 人口、 环境",
        "1984 年 沙漠化",
        "1983 年 管理和处置有害废弃物； 防治酸雨破坏和提高能源利用率",
        "1982 年 纪念斯德哥尔摩人类环境会议10周年—— 提高环境意识",
        "1981 年 保护地下水和人类食物链； 防治有毒化学品污染",
        "1980 年 新的10年， 新的挑战—— 没有破坏的发展",
        "1979 年 为了儿童和未来—— 没有破坏的发展",
        "1978 年 没有破坏的发展",
        "1977 年 关注臭氧层破坏、 水土流失、 土壤退化和滥伐森林",
        "1976 年 水： 生命的重要源泉",
        "1975 年 人类居住",
        "1974 年 只有一个地球"
      ]
    }
  ]
}`},{festival_name:"谷雨",festival_desc:`{
  "disp_name" : "谷雨",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年4月19日或20日"
        },
        {
          "title" : "代表寓意",
          "value" : "雨量充足而及时，谷类作物能茁壮成长"
        },
        {
          "title" : "气候特点",
          "value" : "气候晴暖，早晚时冷时热"
        },
        {
          "title" : "节气养生",
          "value" : "补血益气，提升体质"
        },
        {
          "title" : "节气三候",
          "value" : "萍始生；呜鸠拂其羽；戴任降于桑"
        }
      ],
      "detail" : [
        "谷雨是春季最后一个节气，谷雨节气的到来意味着寒潮天气基本结束，气温回升加快，大大有利于谷类农作物的生长。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "谷雨时节，是农作物茂盛生长的时节，但也是人们养生保健的关键时节。在谷雨时节，我们身体的三处是最需要养护的，养好了，你将一年身体健康，疾病难侵，更是可以帮助身体驱除老病根，一起来看看吧！",
        "一、养关节",
        "身体关节处的灵活与康健，尤其是腿部关节，是我们正常运动的基础。而关节最怕的就是湿与寒，谷雨时节前后，空气中降雨明显增加，空气中的湿度逐渐增加，如不注意养护，容易导致湿气入侵。同时，谷雨时节，也是很多风湿关节疾病患者病情严重发作的时节，在这一时节，最需要的就是关节的养护。",
        "二、养脾胃",
        "初春时节，肝气旺盛，脾胃较衰弱，而到来谷雨前后，脾胃会逐渐旺盛起来，这时候，是调养脾胃的关键时期。脾胃调养好，不仅可以使我们身体营养吸收能力提升，增强人体免疫力，更可帮助我们排出身体浊气和废物，防疾病，除疾病，对健康大有裨益。",
        "三、养气血",
        "春季是一年的出始，是身体阳气生发的时节，因而，春季是养阳气，调气血的最佳时节。谷雨节气，是春季即将结束的预兆，大家要抓住春季的尾巴，调养气血，强身健康，预防疾病。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "谷雨阳气升发，平素胃肠有积热的人一旦饮食不当容易上火，甚至诱发春季腹泻、胃炎、胃溃疡等疾病。饮食上可以吃些低脂肪、低蛋白、高维生素的蔬菜，如荠菜、菠菜、香椿、蒲公英等，有清热祛火的作用。谷雨时节清补的菜肴——土茯苓眉豆猪脊骨汤，土茯苓气味鲜美清润，眉豆可祛脚气水湿，猪脊骨增液补髓，三者一起熬汤，有健脾益气、清热祛湿之功。以这种清补的方式可以达到补益脾气的效果。",
        "此外，雨前茶是谷雨时节采制的春茶，滋味鲜活。春季温度适中，雨量充沛，加上茶树经半年冬季的休养生息，使得春梢芽叶肥硕，色泽翠绿，叶质柔软，富含多种维生素和氨基酸，使春茶香气怡人。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "谷雨是“雨生百谷”的意思，每年4月20日或21日太阳到达黄经30°时为谷雨。",
        "",
        "中国古代将谷雨分为三候：“第一候萍始生；第二候呜鸠拂其羽；第三候为戴任降于桑。”是说谷雨后降雨量增多，浮萍开始生长，接着布谷鸟便开始提醒人们播种了，然后是桑树上开始见到戴胜鸟。",
        "",
        "大约在4000年前，轩辕皇帝由部落首领被拥戴为部落联盟领袖，他命仓颉为左史官。仓颉做了史官以后，用不同类型的贝壳和绳结的大小、横竖为标记记载事务。可是，随着仓颉主管事务日益繁多，老办法已远远不能适应需求，仓颉很犯愁。",
        "",
        "每年谷雨节，仓颉庙都要举行传统庙会，会期长达七至十天。年复一年，成千上万的人们从四面八方来到此地，举行隆重热烈的迎仓圣进庙和盛大庄严的祭奠仪式，缅怀和祭祀文字始祖仓颉。人们扭秧歌，跑竹马，耍社火，表演武术，敲锣打鼓，演大戏，载歌载舞，表达对仓圣的崇敬和怀念。戏班子、商号也来赴会凑兴，热闹非凡。仓颉庙会已经成为当地一个隆重节日。甚至当地人入学拜师、敬惜字、爱喝红豆稀饭、喜住窑洞、乞雨、乞子，祈福禳灾等习俗也都是与仓颉有关。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "古时有“走谷雨”的风俗，谷雨这天青年妇女走村串亲，有的到野外走一圈就回来。",
        "",
        "南方谷雨摘茶习俗，传说谷雨这天的茶喝了会清火、辟邪、明目等。所以谷雨这天不管是什么天气，人们都会去茶山摘一些新茶回来喝。",
        "",
        "北方谷雨食香椿习俗，谷雨前后是香椿上市的时节，这时的香椿醇香爽口营养价值高，有“雨前香椿嫩如丝”之说。香椿具有提高机体免疫力，健胃、理气、止泻、润肤、抗菌、消炎、杀虫之功效。"
      ]
    }
  ]
}`},{festival_name:"清明",festival_desc:`{
  "disp_name" : "清明",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "一般是在公历4月5号前后"
        },
        {
          "title" : "代表寓意",
          "value" : "天气晴朗，草木繁茂"
        },
        {
          "title" : "气候特点",
          "value" : "气温回暖，阳气升腾"
        },
        {
          "title" : "节气养生",
          "value" : "护肝养肺"
        },
        {
          "title" : "节气三候",
          "value" : "桐始华；田鼠化为鹌；虹始见"
        }
      ],
      "detail" : [
        "清明，二十四节气之一，春季的第五个节气。太阳到达黄经15°，便为清明。清明时，气清景明，万物皆显，因此得名。清明，既是节气，又是节日。节气的清明，是春耕春种的大好时机；节日的清明，是民间寄放情感和慰劳自己的传统日子。清明节气在时间和天气物候特点上为清明节俗的形成提供了重要条件，该节气被看作清明节的源流之一。",
        "中国古代将清明分为三候初候桐始华；二候田鼠化为驽；三候虹始见意即在这个时节先是白桐花开放，接着喜阴的田鼠不见了，全回到了地下的洞中，然后是雨后的天空可以见到彩虹了。到了清明，中国大部分地区的天气就不冷了，进入到春季。但此间的天气，南方与北方好似两重天，北方干燥少雨，南方湿润多雨。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "关于清明养生，在《黄帝内经·素问》“四气调神大论”里说得非常清楚：春天是万物复苏的季节，为了适应春天阳气生发的规律，人们应当晚睡一点、早起一些，舒缓形体，以使神志随着春气而舒畅怡然，这是养生的自然法则，违背了就会伤肝。这个时节，应该掌握春令之气升发舒畅的特点，注意保卫体内的阳气，使之不断充沛，逐渐旺盛起来，凡有耗伤阳气及阻碍阳气的情况皆应避免。",
        "",
        "清明节有踏青、放风筝、荡秋千等放松身心的习俗。不过，踏青登山一定要量力而行。踏青等活动与传统意义的锻炼有区别，除了长期坚持锻炼的人，这个季节并不主张人们大幅度地“动起来”。",
        "",
        "清明时节的着衣，开始除去冬装，轻装外出。清明时节，人们往往容易衣着单薄，遇上阴雨绵绵的天气，就应及时添衣，防止受寒、淋雨。外出要随带雨具，防止淋雨而感冒。晴天外出和运动易于出汗，出汗后要及时换衣，保持温暖干燥。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "吃——“两多一少”很重要：",
        "1、多吃“柔肝”的食物",
        "中医学认为“春与肝相应”，清明时节应多吃“柔肝”的食物，饮食宜温，以清补为主。如荠菜、山药、菠菜、韭菜、银耳、大枣等。",
        "2、多吃“祛湿”的食物",
        "由于清明雨多湿气较重，在饮食上要注意选择一些温胃祛湿的食物，如白菜、萝卜、芋头等。",
        "3、慎吃“生发”的食物",
        "中医认为，清明正值肝阳上升时节，故不宜进食竹笋、咸菜、鸡、海鱼等“发物”。有慢性病的人要忌食。",
        "喝——两种养生茶可以常喝。以下两款清明养生茶，大家不妨尝试喝一喝：",
        "1、黄芩茶",
        "做法：黄芩6克，绿茶3克，将黄芩用200毫升水煮沸，然后用它来冲泡绿茶，5～10分钟后即可饮用。",
        "功效：具有清热燥湿、泻肺火、解毒、利尿、降压、镇静等功效。",
        "2、桂圆红枣茶",
        "做法：桂圆红枣各5颗，用沸水冲泡，最好将红枣划开。",
        "功效：具有补心脾、益气血、安神、润肺等功效，主治倦怠无力、失眠健忘。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "清明节的起源，据传始于古代帝王将相“墓祭”之礼，后来民间亦相仿效，于此日祭祖扫墓，历代沿袭而成为中华民族一种固定的风俗。",
        "",
        "清明最早只是一种节气的名称，其变成纪念祖先的节日与寒食节有关。寒食节是中国古代较早的节日，传说是在春秋时代为纪念晋国的忠义之臣介子推而设立的。",
        "",
        "秦汉时代，祭扫坟墓的风气更盛。据《汉书》记载，大臣严延年即使离京千里，也要定期还乡祭扫墓地。在唐代，不论士人还是平民，都将寒食节扫墓视为返本追宗的仪节，由于清明距寒食节很近，人们还常常将扫墓延至清明。",
        "",
        "宋元时期，清明节逐渐由附属于寒食节的地位，上升到取代寒食节的地位。这不仅表上坟扫墓等仪式多在清明举行，就连寒食节原有的风俗活动如冷食、蹴鞠、荡秋千等，也都被清明节收归所有了。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "清明节的习俗除了讲究禁火、扫墓，还有踏青、荡秋千、蹴鞠、打马球、插柳等一系列风俗体育活动。相传这是因为寒食节要寒食禁火，为了防止寒食冷餐伤身，所以大家来参加一些体育活动，来锻炼身体。清明节，民间忌使针，忌洗衣，大部分地区妇女忌行路。傍晚以前，要在大门前洒一条灰线，据说可以阻止鬼魂进宅。 因此，这个节日中既有祭扫新坟生离死别的悲酸泪，又有踏青游玩的欢笑声，是一个富有特色的节日。"
      ]
    }
  ]
}`},{festival_name:"清明节",festival_desc:`{
  "disp_name" : "清明节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "踏青节"
        },
        {
          "title" : "节日时间",
          "value" : "一般是在公历4月5号前后"
        },
        {
          "title" : "节日类型",
          "value" : "中国传统节日"
        },
        {
          "title" : "节日意义",
          "value" : "以扫墓、祭拜等形式纪念祖先"
        }
      ],
      "detail" : [
        "清明节是中国三大鬼节之一。“鬼节”即是悼念亡人之节，是和祭祀天神、地神的节日相对而言的。中华民族传统的清明节大约始于周代，距今已有二千五百多年的历史。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "清明节的起源，据传始于古代帝王将相“墓祭”之礼，后来民间亦相仿效，于此日祭祖扫墓，历代沿袭而成为中华民族一种固定的风俗。",
        "",
        "清明最早只是一种节气的名称，其变成纪念祖先的节日与寒食节有关。寒食节是中国古代较早的节日，传说是在春秋时代为纪念晋国的忠义之臣介子推而设立的。",
        "",
        "秦汉时代，祭扫坟墓的风气更盛。据《汉书》记载，大臣严延年即使离京千里，也要定期还乡祭扫墓地。在唐代，不论士人还是平民，都将寒食节扫墓视为返本追宗的仪节，由于清明距寒食节很近，人们还常常将扫墓延至清明。",
        "",
        "宋元时期，清明节逐渐由附属于寒食节的地位，上升到取代寒食节的地位。这不仅表上坟扫墓等仪式多在清明举行，就连寒食节原有的风俗活动如冷食、蹴鞠、荡秋千等，也都被清明节收归所有了。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "清明节的习俗除了讲究禁火、扫墓，还有踏青、荡秋千、蹴鞠、打马球、插柳等一系列风俗体育活动。相传这是因为寒食节要寒食禁火，为了防止寒食冷餐伤身，所以大家来参加一些体育活动，来锻炼身体。清明节，民间忌使针，忌洗衣，大部分地区妇女忌行路。傍晚以前，要在大门前洒一条灰线，据说可以阻止鬼魂进宅。 因此，这个节日中既有祭扫新坟生离死别的悲酸泪，又有踏青游玩的欢笑声，是一个富有特色的节日。"
      ]
    }
  ]
}`},{festival_name:"愚人节",festival_desc:`{
  "disp_name" : "愚人节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "万愚节、幽默节"
        },
        {
          "title" : "节日时间",
          "value" : "公历4月1日"
        },
        {
          "title" : "节日意义",
          "value" : "对人生的一种幽默"
        },
        {
          "title" : "流行地区",
          "value" : "欧美地区"
        }
      ],
      "detail" : [
        "在这一天人们以各种方式互相欺骗和捉弄，往往在玩笑的最后才揭穿并宣告捉弄对象为“愚人”。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "对于它的起源众说纷纭：一种说法认为这一习俗源自印度的“诠俚节”。该节规定，每年三月三十一日的节日这天，情侣之间互相愚弄欺骗来娱乐。较普遍的说法是起源于法国。1564年，法国首先采用新改革的纪年法——格里历(即通用的阳历)，以一月一日为一年的开端，改变了过去以四月一日作为新年开端的历法。新历法推行过程中，一些因循守旧的人反对这种改革仍沿袭旧历，拒绝更新。",
        "",
        "他们依旧在四月一日这天互赠礼物，组织庆祝新年的活动。主张改革的人对这些守旧者的做法大加嘲弄。聪明滑稽的人在四月一日这天给顽固派赠送假礼物，邀请他们参加假庆祝会，并把这些受愚弄的人称为“四月傻瓜”或“上钩之鱼”。以后，他们在这天互相愚弄，日久天长便成为法国流行的一种风俗。该节在十八世纪流传到英国，后来又被英国早期移民带到了美国。",
        "",
        "起初，任何美国人都可以炮制骇人听闻的消息，而且不负丝毫的道德和法律责任，政府和司法部门也不会追究。相反，谁编造的谎言最离奇、最能骗取人们相信，谁还会荣膺桂冠。这种做法给社会带来不少混乱，因而引起人们的不满。人们节日期间的愚弄欺骗已不再像过去那样离谱，而是以轻松欢乐为目的。",
        "",
        "愚人节这天玩笑只能开到中午12点之前，这是约定俗成的严格规矩。过了中午还找乐子的人是一个比被他取笑的人还大的傻瓜。过了钟点还开玩笑的人会立刻碰钉子，自找没趣儿。有一首小诗是这样描述的：愚人节已过十二点，你这个大傻瓜来得晚。待到来年愚人节，你将是最大个的大笨蛋。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "愚人节时，人们常常组织家庭聚会，用水仙花和雏菊把房间装饰一新。典型的传统做法是布置假的环境，可以把房间布置得像过圣诞节一样．也可以布置得像过新年一样，待客人来时，则祝贺他们“圣诞快乐”或“新年快乐”，令人感到别致有趣。",
        "",
        "在愚人节的聚会上，还有一种做假菜的风俗。有人曾经描述过一个典型的愚人节菜谱：先是一道“色拉”，莴苣叶上撒满了绿胡椒，但是把叶子揭开后，才发现下面原来是牡蛎鸡尾酒；第二道菜是\\"烤土豆\\"，其实下面是甜面包屑和鲜蘑；此后上的菜还有用蟹肉作伪装的烧鸡和埋藏在西红柿色拉下面的覆盆子冰淇淋。饭后，客人还可以从药丸盒里取食糖果。",
        "",
        "不过愚人节最典型的活动还是大家互相开玩笑，用假话捉弄对方。"
      ]
    }
  ]
}`},{festival_name:"端午节",festival_desc:`{
  "disp_name" : "端午节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "端阳节、午日节、龙舟节等"
        },
        {
          "title" : "节日时间",
          "value" : "五月初五（农历）"
        },
        {
          "title" : "节日饮食",
          "value" : "粽子、雄黄酒、五黄等"
        },
        {
          "title" : "节日意义",
          "value" : "非物质文化遗产传承"
        }
      ],
      "detail" : [
        "端午节与春节、清明节、中秋节并称为中国民间的四大传统节日。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "“端午”一词最早出现于西晋名臣周处的《风土记》，这本文献成了现代人们查考端午节等传统节日习俗的重要参考。端午节起源于何时──长期以来众说纷纭，说法不一，争论不休。",
        "关于端午节起源的主要观点有四种：",
        "1.流传甚广的“历史人物纪念”观点，依据南朝梁人吴均的《续齐谐记》及宗檩《荆楚岁时记》，认为端午节起源于纪念屈原。还有认为是纪念伍子胥、纪念曹娥等。",
        "2.闻一多先生认为端午节是古百越族举行龙图腾崇拜活动的节日，他在《端午考》及《端午节的历史教育》（见《闻一多全集》）两篇论文中详细论证了他的观点。",
        "3.认为端午节起源于恶日（见张心勤《端午节非因屈原考》）。",
        "4.说端午节源于夏至（详见刘德谦《“端午”始源又一说》）。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "划龙舟",
        "",
        "挂艾草与菖蒲",
        "",
        "端午食粽",
        "",
        "栓五色丝线",
        "",
        "饮蒲酒、雄黄酒、朱砂酒"
      ]
    }
  ]
}`},{festival_name:"国际家庭日",festival_desc:`{
  "disp_name" : "国际家庭日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年的5月15日"
        },
        {
          "title" : "起源时间",
          "value" : "1994年"
        }
      ],
      "detail" : [
        "在许多国家，这一日旨在强调对家庭有利害关系和重要意义的各种领域的机会。活动包括强调有关主题的讲习班和会议、无线电和电视节目、报纸专论和文艺节目。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "家庭问题在20世纪80年代是联合国日益关注的对象。 1983年，根据社会发展委员会在其第二十八届会议上的建议，经济和社会理事会在其关于家庭在发展进程中作用的决议（1983\\/ 23）中，请秘书长，“增强决策者和公众对家庭需要问题的认识，以及为满足这些需求的有效途径”。在其1985年5月29日通过的第1985\\/29号决议，经社理事会请大会审议包括题为“在发展过程中的家庭”，以期考虑可能请秘书长向大会提出针对所涉问题的全球意识的发展过程。",
        "",
        "随后，根据社会发展委员会在其第三十届会议的建议，及经社理事会1987年第一届常会（1987年5月28日的1987\\/42决议），大会在1987年12月7日的42\\/134决议中，邀请“所有国家，尽可能提供他们关于国际家庭年的意见和建议”。它还要求“秘书长根据会员国的意见和建议向大会第四十三届会议提出一份全面报告，对设立国际家庭年的可能性，以及改善家庭福祉，加强作为全球努力促进社会进步和发展一部分的国际合作”。",
        "",
        "联合国大会在1989年12月9日的第44\\/82号中决议宣布，1994年为国际家庭年。"
      ]
    },
    {
      "title" : "家庭现状",
      "detail" : [
        "许多社会学专家和教育家认为：家庭在建立精神安宁，巩固文化和社会关系，以及对后代的成长中，产生有重要影响。此外，家庭作为社会的主要成员，可以保护青年和未来工代免遭社会的不良现象的腐蚀。家庭在过去半个世纪， 特别在近20年， 在各国社会中都发生了重大变化， 其主要原因是由于工作、 迁移、 信息发展、 社会、 经济等关系， 以及战争和社会不平等因素造成家庭基础受到动摇。 ",
        "",
        "当然家庭基础的动摇，不但导致离婚率上升，而且给社会带来诸多不利，如年青人离开家庭，进入社会，由于心理不平衡开始在社会上制造暴力事件，以示发自内心的不满或以此得以安慰。",
        "调查显示：在90年代，美国的传统家庭基础已完全崩溃。继而出现的是“同居”，“单亲家庭”和“单身汉”。一个圆满家庭生活的比率从1990年的25.6%下降到2000年的23.3%。据美国家庭联合会统计：美国30%的孩子是私生子。另外对美国社会的调查显示：77%的青年因为家庭原因而走上偷盗、吸毒、打架斗殴等歧途。统计还显示：从1960年至1995年期间，无父母照管的青少年采取的暴力犯罪活动，增加了七倍。此外，在世界其它地方发生的冲突和战争中，家庭成了首当其冲的牺牲品，家庭遭战争破坏后当然对社会带来的诸多麻烦，是不言而喻的。所以说，如果我们现在还不采取一系列正确的方案和措施，来巩固家庭基础，恢复社会精神与文化价值，那么我们将无法解决一系列社会问题。",
        "",
        "当今，包括，联合国、联合国教科文组织、联合国儿童基金会以及其它许多政府和非政府组织在内的国际组织做出种种努力，力求提高世界各国的文化和教育水平。"
      ]
    }
  ]
}`},{festival_name:"护士节",festival_desc:`{
  "disp_name" : "护士节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年的5月12日"
        },
        {
          "title" : "节日类型",
          "value" : "世界节日"
        },
        {
          "title" : "节日意义",
          "value" : "弘扬救死扶伤精神"
        },
        {
          "title" : "纪念人物",
          "value" : "弗劳伦斯·南丁格尔"
        },
        {
          "title" : "设定地点",
          "value" : "华盛顿"
        }
      ],
      "detail" : [
        "国际护士节是每年的5月12日，是为纪念现代护理学科的创始人弗洛伦斯·南丁格尔于1912年设立的节日。其基本宗旨是倡导、继承和弘扬南丁格尔不畏艰险、甘于奉献、救死扶伤、勇于献身的人道主义精神。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "1854年至1856年间，英法联军与沙俄发生激战。在英国一家医院任护士主任的南丁格尔，带领38名护士奔走前线，参加护理伤病员的工作。因当时医疗管理混乱，护理质量很差，伤病员死亡率高达42%。在这种情况下，南丁格尔下定决心潜心改善病室的卫生条件，并加强对病人的护理和营养。半年之后，医院的伤病员死亡率下降到了2.2%。这一事迹传遍全欧。1860年，她在英国伦敦创办了世界上第一所正规护士学校。她的护士工作专著，成了医院管理、护士教育的基础教材。鉴于南丁格尔推动了世界各地护理工作和护士教育的发展，因此被誉为“近代护理创始人”。南丁格尔1910年在逝世后，国际护士理事会为纪念南丁格尔为护理事业做出的贡献，于1912年将她的生日5月12日定为“国际护士节”，最初称“医院日”，也称“南丁格尔日”。"
      ]
    },
    {
      "title" : "节日活动",
      "detail" : [
        "授帽仪式",
        "每逢5月12日国际护士节到来之际，医院、护士学校等都会举行庄严的护士授帽仪式，授帽仪式是护生成为护士的重要时刻，在护理学创始人南丁格尔像前，护生直跪在护理前辈面前，前辈为护生戴上象征着圣洁的天使的洁白燕帽，护生接过前辈手中象征着“燃烧自己，照亮他人”的蜡烛，站在南丁格尔像前宣读誓言。“我宣誓：以救死扶伤、防病治病，实行社会主义的人道主义，全心全意为人民服务为宗旨，履行护士的天职；我宣誓：以自己的真心、爱心、责任心对待我所护理的每一位病人；我宣誓：我将牢记今天的决心和誓言，接过前辈手中的蜡烛，把毕生精力奉献给护理事业。”"
      ]
    }
  ]
}`},{festival_name:"劳动节",festival_desc:`{
  "disp_name" : "劳动节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "国际劳动节、国际示威游行日"
        },
        {
          "title" : "节日时间",
          "value" : "每年五月一日"
        },
        {
          "title" : "节日类型",
          "value" : "国际节日"
        },
        {
          "title" : "节日意义",
          "value" : "劳动者争取到了合法权益"
        }
      ],
      "detail" : [
        "国际劳动节又称“五一国际劳动节”、“国际示威游行日”（International Workers\`Day或者May Day）， 是世界上80多个国家的全国性节日。 定在每年的五月一日。 它是全世界劳动人民共同拥有的节日。 "
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "十八世纪末，美国和欧洲等许多国家，逐步由资本主义发展到帝国主义阶段，为了刺激经济的高速发展，榨取更多的剩余价值，以维护这个高速运转的资本主义机器，资本家不断采取增加劳动时间和劳动强度的办法来残酷地剥削工人。",
        "",
        "1877年，美国历史上第一次全国罢工开始了。工人阶级走向街头游行示威，向政府提出改善劳动与生活条件，要求缩短工时，实行八小时工作制。罢工不久，队伍日渐扩大，工会会员人数激增，各地工人也纷纷参加了罢工运动。",
        "",
        "1886年5月1日，以美国芝加哥为中心，在美国举行了约35万人参加的大规模罢工和示威游行，示威者要求改善劳动条件，实行八小时工作制。1886年5月3日芝加哥政府出动警察进行镇压，开枪打死两人，事态扩大，5月4日罢工工人在干草市场广场举行抗议，由于不明身份者向警察投掷炸弹，最终警察开枪，先后共有4位工人、7位警察死亡，史称“干草市场暴乱”（Haymarket Riot）或“干草市场屠杀”（Haymarket Massacre）。在随后的宣判中有8位无政府主义者以谋杀罪被起诉，4位无政府主义者被绞死，1位在牢中自杀。",
        "",
        "为纪念这次伟大的工人运动及抗议随后的宣判，在世界范围内举行了工人的抗议活动。这些活动成为了“国际劳动节”的前身。",
        "1889年7月，在恩格斯组织召开的第二国际成立大会上宣布将每年的五月一日定为国际劳动节。"
      ]
    },
    {
      "title" : "各地活动",
      "detail" : [
        "世界各国一般都会举行相应的庆祝活动。不过，并不是所有国家都将5月1日定为劳动节，那些同过“五一”的国家，具体的庆祝方式和习惯也大不相同。",
        "",
        "欧洲",
        "欧洲仍以示威庆祝“五一”　在英国和德国，当局担心示威恐怕会有无政府主义者闹事捣乱。在德国柏林，警方和无政府主义者半夜发生冲突，有多人被捕。不过，数千名工会活跃分子却和平地在市内游行。在法国和奥地利，反对退休金改革的人也上街参与游行。从土耳其国家电视台的新闻画面完全可以看见，警方用警棍打示威者，并扯着其中一人的头发把他拉走。",
        "",
        "意大利：不庆祝，不放假。",
        "英国、法国等欧洲国家都将“五一”确定为劳动节，不少国家都放假一天，还有的国家则根据情况将公共假期放在5月的第一个星期一。不过，和世界大多数国家不太一样的是，意大利尽管承认“五一”国际劳动节，政府也表示尊重劳工，但一般人并不举行专门的庆祝活动，也没有全国性的“五一”假期。",
        "美国：劳动节发源地不过“五一”，美国政府后来在设立劳动节时，自行规定每年9月的第一个星期一为劳动节，所以美国人的劳动节不在5月，而在9月。每逢9月的劳动节，美国人可以放假一天，全美各地的民众一般都会举行游行、集会等各种庆祝活动，以示对劳工的尊重。"
      ]
    }
  ]
}`},{festival_name:"立夏",festival_desc:`{
  "disp_name" : "立夏",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "四月初一前后(公历5月5-6日)"
        },
        {
          "title" : "代表寓意",
          "value" : "夏季的开始"
        },
        {
          "title" : "气候特点",
          "value" : "炎暑将临，雷雨增多"
        },
        {
          "title" : "节气养生",
          "value" : "调养精神，保养心脏"
        },
        {
          "title" : "节气三候",
          "value" : "蝼蝈鸣；蚯蚓出；王瓜生"
        }
      ],
      "detail" : [
        "在天文学上，立夏表示即将告别春天，是夏天的开始。人们习惯上都把立夏当作是温度明显升高，炎暑将临，雷雨增多，农作物进入旺季生长的一个重要节气。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "一年四季中，夏天属火，火气通于心，故夏季与心气相通， 夏天人们易感到烦躁不安，容易出现失眠、口腔溃疡等上火症状，因此立夏养生首先要“养心”。",
        "心在五行属火，与夏季阳热之气相应，故为阳脏，其主要生理功能是主血脉并主神志，起着主宰生命活动的作用。其次心在体合脉，其华在面，其应虚里，在液为汗，心开窍于舌，心与小肠相表里，从而构成一个动态的、整体联系的心功能系统。",
        "夏季与心气相通，有利于心脏的生理活动，因此，要顺应节气的这种变化，保养心脏，专家表示，此时节，老年人要注意避免气血淤积，预防心脏病发作。",
        "立夏后，人们易感到烦躁不安，因此立夏养生要做到“戒燥戒怒”，切忌大喜大悲，要保持精神安静、心志安闲，心情舒畅，笑口常开。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "立夏节气吃啥养生又健康？民间常说夏天是“苦夏”，为什么称为苦夏，也是因为夏天多吃“苦”味的东西有利于五脏六腑的“五行”运作。一起来看看适合立夏甚至整个夏天的食物：",
        "1、鸭蛋补夏",
        "俗传，立夏吃蛋，叫做“补夏”，使人在夏天不会消瘦，不减轻体重，劲头足，干活有力。老中医说咸鸭蛋在夏天吃了人有劲，这和营养师的说法不谋而合，营养师称鸭蛋中钙质、铁质等无机盐含量丰富，含钙量、含铁量比鸡蛋、鲜鸭蛋都高，是夏日补充钙、铁的首选。",
        "2、苦瓜降火",
        "不要觉得苦瓜苦，苦瓜越苦，败火清热降火的效果就越好，但这并不代表所含的其他成分有什么不同，因此只要按照您喜欢的口感和偏好挑选，就可以啦!",
        "3、莲子养心",
        "养心季节是夏，此时心脏最脆弱，暑热逼人容易烦躁伤心，易伤心血。莲子芯的味道虽然比较苦，但可以清心火，是养心安神的佳品，亦可壮肠胃。",
        "4、章鱼补血",
        "章鱼有补血益气、治痈疽肿毒的作用。它含有丰富的蛋白质、矿物质等营养元素，并还富含抗疲劳、抗衰老、能延长人类寿命等重要保健因子——天然牛黄酸。一般人都可食用，尤适宜体质虚弱、气血不足、营养不良之人食用。",
        "5、草莓解毒",
        "夏季是盛产草莓的季节。食用草莓能促进人体细胞的形成，维持牙齿、骨、血管、肌肉的正常功能和促进伤口愈合，并且还有解毒作用，古代人有伤口会多吃些草莓。现代营养师也认为草莓能增强人体抵抗力，排除多余的胆固醇和有害重金属。",
        "6、莴苣通气",
        "莴苣含有大量植物纤维素，能促进肠壁蠕动、通利消化道，可治疗便秘，是贫血患者的最佳食料。推荐鱼腥草拌莴苣。具有清热解毒，利湿祛痰的功效。",
        "7、豌豆清肠",
        "豌豆中富含人体所需的各种营养物质，尤其是含有优质蛋白质，可以提高机体的抗病能力和康复能力。而豌豆中富含的粗纤维，能促进大肠蠕动，保持大便顺畅，起到清洁大肠的作用。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "立夏这个节气在战国末年（公元前239年）就已经确立了，预示着季节的转换，为一年四季之夏季开始的日子。",
        "实际上，若按气候学的标准，日平均气温稳定升达22℃以上为夏季开始，“立夏”前后，我国只有福州到南岭一线以南地区是真正的“绿树浓阴夏日长，楼台倒影入池塘”的夏季，而东北和西北的部分地区这时则刚刚进入春季，全国大部分地区平均气温在18～20℃上下，正是“百般红紫斗芳菲”的仲春和暮春季节。进入了五月，很多地方槐花也正开。立夏时节，万物繁茂。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "迎夏仪式",
        "",
        "“立夏”的“夏”是“大”的意思，是指春天播种的植物已经直立长大了。古代，人们非常重视立夏的礼俗",
        "在立夏的这一天，古代帝王要率文武百官到京城南郊去迎夏，举行迎夏仪式。君臣一律穿朱色礼服，配朱色玉佩，连马匹、车旗都要朱红色的，以表达对丰收的祈求和美好的愿望。宫廷里“立夏日启冰，赐文武大臣”。冰是上年冬天贮藏的，由皇帝赐给百官。",
        "",
        "斗蛋游戏",
        "",
        "那日中午，家家户户煮好囫囵蛋（鸡蛋带壳清煮，不能破损），用冷水浸上数分钟之后再套上早已编织好的丝网袋，挂于孩子颈上。孩子们便三五成群，进行斗蛋游戏。蛋分两端，尖者为头，圆者为尾。斗蛋时蛋头斗蛋头，蛋尾击蛋尾。一个一个斗过去，破者认输，最后分出高低。",
        "",
        "立夏“秤人”",
        "",
        "立夏吃罢中饭还有秤人的习俗。人们在村口或台门里挂起一杆大木秤，秤钩悬一根凳子，大家轮流坐到凳子上面秤人。司秤人一面打秤花，一面讲着吉利话。秤老人要说“秤花八十七，活到九十一”。秤姑娘说“一百零五斤，员外人家找上门。勿肯勿肯偏勿肯，状元公子有缘分。”秤小孩则说“秤花一打二十三，小官人长大会出山。七品县官勿犯难，三公九卿也好攀”。"
      ]
    }
  ]
}`},{festival_name:"母亲节",festival_desc:`{
  "disp_name" : "母亲节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "英文名",
          "value" : "Mother\`s Day"
        },
        {
          "title" : "节日时间",
          "value" : "每年5月的第二个星期日"
        },
        {
          "title" : "母亲花",
          "value" : "康乃馨、萱草花"
        }
      ],
      "detail" : [
        "20世纪80年代，母亲节逐渐被中国内地的民众所接受。从1988年开始，中国南方的广州等一些城市开始举办母亲节的庆祝活动，并把评选“好母亲”作为内容之一。20世纪末，随着中国与国际的日益接轨，母亲节这一节日在中国大陆各地日益推广开来，越来越多的人开始接受母亲节概念，在每年5月的第二个星期日，中国人和全世界其他国家的人们一道以各种各样的方式表达对母亲养育之恩的感谢。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "传统起源",
        "",
        "母亲节的传统起源于古希腊。在一月八日这一天，古希腊人向希腊众神之母瑞亚（英文：Rhea、Cybele，希腊文：宙斯、波塞冬、哈德斯、得墨忒耳、赫拉和赫斯提亚的母亲，故称众神之母）致敬。到古罗马时，这些活动的规模就变得更大，庆祝盛况往往持续达三天之久。当然，古时人们对女神的崇拜只不过是一种迷信，它同今天人们对母性的尊敬是大不相同的。",
        "",
        "现代起源",
        "",
        "1913年5月，美利坚合众国众议院一致通过决议，号召总统以及内阁、参众两院和联邦政府的一切官员一律在母亲节佩戴白色石竹花。1914年，美利坚合众国国会正式命名5月的第二个星期日为母亲节，并要求总统发布宣言，号召政府官员在所有的公共建筑物上悬挂国旗。紧接着，威尔逊总统昭告全国公民也在自己的住宅上挂国旗以表达人们对美利坚合众国全体母亲的热爱和尊敬。此后美利坚合众国总统每年都要发表一篇内容相同的宣言。此后，母亲节便在各国开展。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "中国： 五月的第二个星期日， 会用贺卡和康乃馨来表示爱， 也有人建议以忘忧草来表达母爱",
        "挪威： 母亲节定于二月的第二个星期天。",
        "阿根廷： 则在十月的第二个星期天庆祝母亲节。",
        "黎巴嫩： 在春天的第一天庆祝母亲节。",
        "南非： 母亲节则定于五月的第一个星期天。",
        "南斯拉夫： 南斯拉夫的塞尔维亚人称母亲节为Materice， 于每年圣诞节的前两个礼拜庆祝。 庆祝的习俗是： 小孩子们在母亲节的清晨溜进母亲房间， 将母亲绑在床上， 母亲醒来时发现自己被五花大绑， 便哀求孩子们放开她， 并以她预先藏在枕头下的小礼物作为交换。",
        "瑞典在五月的最后一个星期日庆祝母亲节。 在母亲节前夕， 瑞典红十字会会举办塑料制的母亲花的义卖， 义卖所得将作为赞助育有许多小孩的母亲的度假经费。"
      ]
    }
  ]
}`},{festival_name:"青年节",festival_desc:`{
  "disp_name" : "青年节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年5月4日"
        },
        {
          "title" : "流行地区",
          "value" : "中国"
        },
        {
          "title" : "精神核心",
          "value" : "爱国、进步、民主、科学"
        }
      ],
      "detail" : [
        "五四青年节源于中国1919年反帝爱国的“五四运动”，五四爱国运动是一次彻底的反对帝国主义和封建主义的爱国运动，也是中国新民主主义革命的开始。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "五四青年节是为纪念1919年5月4日爆发的五四运动而设立的。",
        "",
        "五四运动是1919年5月4日发生在北京以青年学生为主的一场学生运动，广大群众、市民、工商人士等中下阶层广泛参与的一次示威游行、请愿、罢工、暴力对抗政府等多形式的爱国运动。是中国人民彻底的反对帝国主义、封建主义的爱国运动。五四运动是中国新民主主义革命的开端，是中国革命史上划时代的事件，是中国旧民主主义革命到新民主主义革命的转折点。"
      ]
    },
    {
      "title" : "五四精神",
      "detail" : [
        "五四精神的核心内容为“爱国、进步、民主、科学”。",
        "",
        "爱国主义是五四精神的源泉，民主与科学是五四精神的核心，勇于探索、敢于创新、解放思想、实行变革是民主与科学提出和实现的途径，理性精神、个性解放、反帝反封建是民主与科学的内容。而所有这些，最终目的都是为了振兴中华民族。因此，纪念五四运动，发扬五四精神，应该把这些方面结合起来，为振兴中华民族而努力奋斗。",
        "五四精神代表着诚实的，进步的，积极的，自由的，平等的，创造的，美的，善的，和平的，相爱互助的，劳动而愉快的，全社会幸福的统一体现。"
      ]
    }
  ]
}`},{festival_name:"无烟日",festival_desc:`{
  "disp_name" : "无烟日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "5月31日"
        },
        {
          "title" : "设立机构",
          "value" : "世界卫生组织"
        }
      ],
      "detail" : [
        "我国作为世界上最大的烟草受害国，在控制吸烟问题与先进国家存在明显差距，主要原因之一即在于公众对于吸烟危害健康这一重要的科学事实缺乏深刻的认识，有效控烟仍需要社会各界的广泛参与。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "为引起国际社会对烟草危害人类健康的重视，世界卫生组织1987年11月将每年的4月7日定为“世界无烟日”，1988年开始执行。1989年起世界无烟日为每年的5月31日。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "1988 年： 要烟草还是要健康， 请您选择",
        "1989 年： 妇女与烟草",
        "1990 年： 青少年不要吸烟",
        "1991 年： 在公共场所和公共交通工具上不吸烟",
        "1992 年： 工作场所不吸烟",
        "1993 年： 卫生部门和卫生工作者反对吸烟",
        "1994 年： 大众传播媒介宣传反对吸烟",
        "1995 年： 烟草与经济",
        "1996 年： 无烟的文体活动",
        "1997 年： 联合国和有关机构反对吸烟",
        "1998 年： 在无烟草环境中",
        "1999 年： 戒烟。 口号是“ 放弃成长香烟”",
        "2000 年： 不要利用文体活动促销烟草 口号“ 吸烟有害勿受诱惑”",
        "2001 年： 清洁空气， 拒吸二手烟",
        "2002 年： 无烟体育— 清洁的比赛",
        "2003 年： 无烟草影视及时尚行动",
        "2004 年： 控制吸烟， 减少贫困",
        "2005 年： 卫生工作者与控烟",
        "2006 年： 烟草吞噬生命",
        "2007 年： 创建无烟环境",
        "2008 年： 无烟青少年。 口号： 禁止烟草广告和促销， 确保无烟青春好年华。",
        "2009 年： 烟草健康警示。 口号： 图形警示揭露烟害真相",
        "2010 年： 性别与烟草。 口号： 抵制针对女性的市场营销",
        "2011 年： 世界卫生组织《 烟草控制框架公约》。 口号： 烟草致命如水火无情， 控烟履约可挽救生命",
        "2012 年： 烟草业干扰控烟。 口号： 生命与烟草的对抗",
        "2013 年： 禁止烟草广告、 促销和赞助",
        "2014 年： 提高烟草税",
        "2015 年： 制止烟草制品非法贸易"
      ]
    }
  ]
}`},{festival_name:"小满",festival_desc:`{
  "disp_name" : "小满",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年5月20日到22日"
        },
        {
          "title" : "代表寓意",
          "value" : "夏熟作物籽粒开始饱满"
        },
        {
          "title" : "气候特点",
          "value" : "南北温差缩小，降水增多"
        },
        {
          "title" : "节气养生",
          "value" : "避免过量进食生冷食物"
        },
        {
          "title" : "节气三候",
          "value" : "苦菜秀；靡草死；麦秋至"
        }
      ],
      "detail" : [
        "小满——其含义是夏熟作物的籽粒开始灌浆饱满，但还未成熟，只是小满，还未大满。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "小满是二十四节气中的第八个节气。作为夏季的第二个节气，而夏季是阳气最盛的时期，从这时候起就要调整我们的日常饮食起居，才能平安的度过炎热的夏季。",
        "小满养生讲究“未病先防”，建议您这样做：",
        "1、重点防风诊",
        "小满节气气温明显增高，如若贪凉卧睡必将引发风湿症、湿性皮肤病等疾病。在小满节气的养生中，特别提出“未病先防”的养生观点，就是在未病之前，做好各种预防工作，以防止疾病的发生。在未病先防的养生中仍然强调：天人相应的整体观和正气内存，邪不可干的病理观。中医学认为人体是一个有机的整体，人与外界环境也是息息相关的，并提出人类必须掌握自然规律，顺应自然界的变化，保持体内外环境的协调，才能达到防病保健的目的。",
        "2、适时添衣，保证午睡",
        "小满后气温明显升高，雨量增多，但早晚仍会较凉，气温日差仍较大，尤其是降雨后气温下降更明显，因此，要注意适时添加衣服，尤其是晚上睡觉时，要注意保暖，避免着凉受风而患感冒。同时也应当顺应夏季阳消阴长的则律，早起晚睡，但要保证睡眠时间，以保持精力充沛。",
        "3、心境平和，防止情绪中暑",
        "小满时气温升高，人们也易感到烦躁不安，此时要调适心情，注意保持心情舒畅，胸怀宽广，以防情绪剧烈波动后引发高血压、脑血管意外等心脑血管病。气温不断升高，人们往往喜爱用冷饮消暑降温，但冷饮过量会导致腹痛、腹泻等病症。",
        "此时可多参与一些户外活动如下棋、书法、钓鱼等怡养性情，同时也可在清晨参加体育锻炼，以散步、慢跑、打太极拳等为宜，不宜做过于剧烈的运动，避免大汗淋漓，伤阴也伤阳。",
        "4、饮食宜清淡",
        "另外，小满后不但天气炎热，汗出较多，雨水也较多，饮食调养宜以清爽清淡的素食为主，常吃具有清利湿热、养阴作用的食物，如赤小豆、薏苡仁、绿豆、冬瓜、黄瓜、黄花菜、水芹、荸荠、黑木耳、胡萝卜、西红柿、西瓜、山药、鲫鱼、草鱼、鸭肉等，忌吃膏粱厚味、甘肥滋腻、生湿助湿的食物，当然也可配合药膳进行调理，还可以常饮些生脉饮以益气生津。忌食高粱厚味，甘肥滋腻，生湿助湿的食物，如动物脂肪、海腥鱼类、酸涩辛辣、性属温热助火之品及油煎熏烤之物，如生葱、生蒜、生姜、芥末、胡椒、辣椒、茴香、桂皮、韭菜、茄子、蘑菇、海鱼、虾、蟹各种海鲜发物、牛、羊、狗、鹅肉类等。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "小满节气的到来，意味着夏季的味道更重了。同时天气会越来越热，雨水量也会增多，也容易下大雨，在这样多变的天气了，大家必须要做好养生措施，否则身体健康会受到严重的影响，那么小满节气如何饮食养生呢？",
        "1、学会吃水果",
        "初夏是大量水果上市的时候，有很多的应季水果供大家挑选食用，但是从中医的角度来说，不同的水果属性是不同的，分寒性和热性，如果不注意乱吃的话，导致寒性或者说热性的水果吃太多的话，会给身体带来负面影响。常见就有西瓜，它是寒性的，吃太多了很容易腹泻，同时还会导致女人们痛经。而龙眼则是热性的，吃太多了容易上火长痘。",
        "所以说，人们在选择水果的时候，要看看它的属性，如果你的身体寒气比较重的话，则要避免吃太多的寒性水果，应该选择热性水果吃。如果你的身体内热重，比较容易上火的话，则要避免吃太多的热性水果，应该多吃一些寒性的水果。",
        "2、酸味食物要多吃",
        "小满节气前后一定要调理自己的饮食，因为现在天气越来越热，出汗量增大。建议在饮食上要注意多吃酸味的食物，帮助补益肝肾，调养脾胃。比如说山楂、乌梅、西红柿等酸味的食物就可以多吃，帮助你增强消化功能，同时还能起到滋养肝脏的作用。",
        "3、少吃生冷食物",
        "天气变热了，越来越多的人喜爱吃生冷的食物，比如说冰棒、冰淇淋等，这些冰冻的食物吃太多了，会导致腹痛等病症。",
        "4、少吃辛辣肥腻的食物",
        "小满节气过后，雨水会逐渐增多，空气比较潮湿闷热，很容易导致皮肤生热而引发湿疹等皮肤病。为了避免此种情况的发生，建议要少吃辛辣肥腻的食物，以免助火生热。",
        "5、少吃烧烤类食物",
        "天气热了很多人晚上的时候，喜欢外出吃烧烤(比如说羊肉串、烤肉、烤虾等)，搭配冰镇的啤酒进食，觉得这样吃相当刺激。但事实上这样吃，对身体健康是非常不利的，很容易刺激肠胃，造成脾胃不适的情况。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "《月令七十二候集解》：“四月中，小满者，物致于此小得盈满。”",
        "这时全国北方地区麦类等夏熟作物籽粒已开始饱满，但还没有成熟，约相当乳熟后期，所以叫小满。",
        "南方地区的农谚赋予小满以新的寓意：“小满不满，干断田坎”；“小满不满，芒种不管”。把“满”用来形容雨水的盈缺，指出小满时田里如果蓄不满水，就可能造成田坎干裂，甚至芒种时也无法栽插水稻。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "祭车神",
        "",
        "祭车神是一些农村地区古老的小满习俗。在相关的传说里二车神，是一条白龙在小满时节，人们在水车蓦上放上鱼肉、香烛等物品祭拜，最有趣的地方是，在祭品中会有一杯白水，祭拜时将白水泼入田中，有祝福水砚涌旺的意思。",
        "",
        "祭蚕",
        "",
        "相传小满为蚕神诞辰，因此江浙一带在小满节气期间有一个祈蚕节。我国农耕文化以“男耕女织”为典型。女织的原料北方以棉花为主，南方以蚕理为主。蚕丝需靠养蚕结茧抽丝而得，所以我国南方农村养蚕极为兴盛，尤其是江浙一带。",
        "",
        "蚕是娇养的“宠物”，很难养活。气沮、湿度，桑叶的冷、熟、干、湿等均影响蚕的生存。由于蚕难养，古代把蚕视作“天物”。为了祈求“天物。的宽怒和养蚕有个好的收成，因此人们在四月放蚕时节举行祈蚕节。"
      ]
    }
  ]
}`},{festival_name:"中国旅游日",festival_desc:`{
  "disp_name" : "中国旅游日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年的5月19日"
        },
        {
          "title" : "节日意义",
          "value" : "强化旅游宣传，培养国民旅游休闲意识"
        }
      ],
      "detail" : [
        "设立“中国旅游日”旨在强化旅游宣传，培养国民旅游休闲意识，鼓励人民群众广泛参与旅游活动，提升国民生活质量，推动旅游业发展。旅游日具体日期的选定，将体现下列原则：与旅游有一定的纪念、宣传等关联意义；时间上适于全民外出旅游休闲；有利于加强国民的旅游意识，发挥旅游的教育功能。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "中国旅游日源自天台山 《徐霞客游记》开篇《游天台山记》：“癸丑之三月晦（公元1613年5月19日），自宁海出西门，云散日朗，人意山光，俱有喜态。”《徐霞客游记》开篇的短短24个字，为后人留下了文化旅游的瑰宝。",
        "2011年3月30日，国务院常务会议通过决议，中国正式设立国家旅游日，时间确定为5月19日。这个日子，就是《徐霞客游记》的开篇日，也是宁海县每年举行“中国宁海徐霞客开游节”的日子。把5月19日确定为“中国旅游日”，宁海已经整整呼吁了10年。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "浙江天台山： 国有景点半价开放",
        "山西： 全省景区门票半价迎客",
        "上海： 部分景点免票或半价",
        "山东： 11 城市推出惠民方案",
        "浙江宁海： 景区每年免费游3天",
        "江苏周庄： 首推“ 免费游”",
        "云南： 多个景区半价迎客"
      ]
    }
  ]
}`},{festival_name:"爱眼日",festival_desc:`{
  "disp_name" : "爱眼日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "外文名",
          "value" : "Sight Day"
        },
        {
          "title" : "节日时间",
          "value" : "每年6月6日"
        },
        {
          "title" : "提倡人",
          "value" : "王延华"
        },
        {
          "title" : "流行范围",
          "value" : "中国大陆"
        }
      ],
      "detail" : [
        "加强全民爱眼意识，提高民族健康素质。眼睛的健康有赖于人们的爱眼意识，全民眼保健工作，需要社会各界人士的支持和参与。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "1992年9月25日，天津医科大学眼科教授王延华与流行病学教授耿贯一首次倡议在国内设立爱眼日。1996年，国家卫生部、国家教育部、团中央、中国残联等12个部委联合发出通知，将爱眼日活动列为国家节日之一，并重新确定每年6月6日为“全国爱眼日”。"
      ]
    },
    {
      "title" : "历年主题",
      "detail" : [
        "1996 年 \\"保护儿童和青少年视力\\"",
        "1997 年 \\"老年人眼保健\\"",
        "1998 年 \\"预防眼外伤\\"",
        "1999 年 \\"保护老年人视力，提高生活质量\\"",
        "2000 年 \\"动员起来，让白内障盲见光明\\"",
        "2001 年 \\"早期干预，减少可避免的儿童盲症\\"",
        "2002 年 \\"关爱老年人的眼睛,享有看见的权利\\"",
        "2003 年 \\"爱护眼睛、为消除可避免盲而努力\\"",
        "2004 年 \\"防治屈光不正及低视力，提高儿童和青少年眼保健水平\\"",
        "2005 年“ 预防近视， 珍爱光明”",
        "2006 年“ 防盲治盲， 共同参与”",
        "2007 年“ 防盲进社区， 关注眼健康”",
        "2008 年“ 明亮眼睛迎奥运”",
        "2009 年“ 关注青少年眼健康”",
        "2009 年“ 珍爱视觉之窗”",
        "2010 年“ 关注贫困人口眼健康， 百万工程送光明”",
        "2011 年“ 关爱低视力患者， 提高康复质量”",
        "2012 年“ 情系白内障患者共享和谐新视界”",
        "2013 年“ 汇聚中国梦， 2016 年前消灭致盲性沙眼”",
        "2014 年“ 关注眼健康， 预防糖尿病致盲”",
        "2015 年“ 告别沙眼盲， 关注眼健康”",
        "2016 年“ 呵护眼睛， 从小做起”"
      ]
    }
  ]
}`},{festival_name:"儿童节",festival_desc:`{
  "disp_name" : "儿童节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年6月1日"
        },
        {
          "title" : "节日意义",
          "value" : "保障世界各国儿童的权益"
        },
        {
          "title" : "设立机构",
          "value" : "国际民主妇女联合会"
        },
        {
          "title" : "设定时间",
          "value" : "1949年11月"
        }
      ],
      "detail" : [
        "儿童节是为了保障世界各国儿童的生存权、保健权和受教育权，抚养权，为了改善儿童的生活，为了反对虐杀儿童和毒害儿童而设立的节日。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "国际儿童节的设立，和发生在二战期间一次屠杀--利迪策惨案有关。1942年6月10日，德国法西斯枪杀了捷克利迪策村16岁以上的男性公民140余人和全部婴儿，并把妇女和90名儿童押往集中营。村里的房舍、建筑物均被烧毁，好端端的一个村庄就这样被德国法西斯给毁了。第二次世界大战结束后，世界各地经济萧条，成千上万的工人失业，过着饥寒交迫的生活。儿童的处境更糟，有的得了传染病，一批批地死去；有的则被迫当童工，受尽折磨，生活和生命得不到保障。为了悼念利迪策惨案和全世界所有在战争中死难的儿童，反对虐杀和毒害儿童，以及保障儿童权利，1949年11月，国际民主妇女联合会在莫斯科举行理事会议，各国代表愤怒地揭露了帝国主义分子和各国反动派残杀、毒害儿童的罪行。为了保障世界各国儿童的生存权、保健权和受教育权，为了改善儿童的生活，会议决定以每年的6月1日为国际儿童节。当时的很多国家表示赞同，特别是社会主义国家。"
      ]
    },
    {
      "title" : "各国习俗",
      "detail" : [
        "韩国",
        "",
        "韩国的儿童节于1923年， 从“ 男孩节” 演变过来的。 也是韩国的公众假日， 每年的5月5日。 这一天， 孩子们可以尽情享受欢乐， 父母要给孩子准备他们最想要的礼物。 很多孩子也会在这天穿上韩服， 体验传统的韩国文化。",
        "",
        "哥伦比亚",
        "",
        "哥伦比亚将每年的7月4日定为儿童节。 在这个节日里， 全国的学校都要举行各种生动活泼的庆祝活动， 儿童们还常常戴上各式各样的假面具， 扮成小丑的样子在街头玩耍， 十分开心。",
        "",
        "巴西",
        "",
        "巴西的儿童节在8月15日， 这一天正好也是巴西的“ 全国防疫日”。 所以， 每到这个日子， 各地的医生们都要为孩子们看病， 还要给5岁以下的儿童注射预防小儿麻痹症的疫苗， 表明政府十分关心儿童的健康。 另外， 巴西的“ 圣母显灵日” 10 月12日也往往作为儿童节， 有一些庆祝活动。",
        "",
        "非洲国家",
        "",
        "非洲西部的国家大都有专门的“ 儿童狂欢节”， 一般持续一个月。 非洲人能歌善舞，“ 儿童狂欢节”， 尽管人们的生活条件不相同， 所有孩子都会尽情欢乐， 热闹非凡。"
      ]
    }
  ]
}`},{festival_name:"反毒品日",festival_desc:`{
  "disp_name" : "反毒品日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年6月26日"
        },
        {
          "title" : "节日意义",
          "value" : "引起各国、各地区对毒品问题的重视"
        }
      ],
      "detail" : [
        "中国是世界上禁毒最坚决的国家之一，在新中国成立之前，吸毒者约为200O万，以当时人口总数为5亿计，平均每25个人当中就有一个是瘾君子。解放后由于党和政府的重视，全国人民的共同努力，只用了短短几年的时间就在全国范围内禁绝了毒品的犯罪活动，1958年成为举世闻名的“无毒国”。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "1987年6月12日至26日，在维也纳召开了由138个国家和地区的3000名代表参加的“麻醉品滥用和非法贩运问题”部长级会议。这次会议提出了“爱生命，不吸毒”的口号。同时，为了进一步引起各国、各地区对毒品问题的重视，号召全世界人民共同抵御毒品的侵袭，与毒品犯罪活动作坚决的斗争，也为了纪念这次意义重大的国际禁毒会议，大会结束时，与会代表一致建议，将每年的6月26日定为“国际反毒品日”。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "从1992年起，国际禁毒日都确定有一个主题口号，以达到国际社会关注和共同参与的效果。",
        "1992年：“毒品，全球问题，需要全球解决”；",
        "1998年：“无毒世界我们能做到”；",
        "1999年：“亲近音乐，远离毒品”；",
        "2000年：Facing Reality: Denial, Corruption and Violence；",
        "2001年：“体育拒绝毒品”；",
        "2002年：“吸毒与艾滋病”；",
        "2003年：“让我们讨论毒品问题” （2003年中国“6·26”国际禁毒日的宣传主题为 “远离毒品，关爱未来”）；",
        "2004年：“抵制毒品，参与禁毒”；",
        "2005年：“珍惜自我，健康选择”；",
        "2006年：“毒品不是儿戏”；",
        "2007年：“控制毒品”；",
        "2008年：“依法禁毒，构建和谐”；",
        "2009年：“毒品控制了你的生活吗?你的生活，你的社区，拒绝毒品。”",
        "2010年：“参与禁毒斗争，构建和谐社会”；",
        "2011年： “青少年与合成毒品”；",
        "2012年：“全球行动共建无毒品安全社区”；",
        "2013年：“抵制毒品，参与禁毒”；",
        "2014年：“远离毒品、健康生活、拥抱美好人生。”"
      ]
    }
  ]
}`},{festival_name:"父亲节",festival_desc:`{
  "disp_name" : "父亲节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "英文名",
          "value" : "Father\`s Day"
        },
        {
          "title" : "节日时间",
          "value" : "6月的第3个星期日"
        },
        {
          "title" : "节日意义",
          "value" : "感恩父亲"
        },
        {
          "title" : "流行地区",
          "value" : "全球"
        }
      ],
      "detail" : [
        "父亲节（Father\`s Day），顾名思义是感恩父亲的节日。约始于二十世纪初，起源于美国，现已广泛流传于世界各地，节日日期因地域而存在差异。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "世界上的第一个父亲节，1910年诞生在美国，是由住在美国华盛顿州斯波坎的布鲁斯多德夫人倡导的，多德夫人的母亲在生育第六个孩子时，因难产而死，多德夫人的父亲威廉斯马特先生曾参加过南北战争，他在妻子过世后，独自一人在华盛顿州东部的一个乡下农场，承担起抚养、教育六个孩子的重任。",
        "",
        "1909年斯马特先生辞世之年，当多德夫人参加完教会的母亲节感恩礼拜后，她特别想念父亲，多德夫人心中明白，她的父亲在养育儿女过程中所付出的爱和艰辛，并不亚于任何一个母亲，多德夫人将她的感受告诉给教会的瑞马士牧师，希望能有一个特别的日子，纪念全天下伟大的父亲，她的这一想法得到了牧师的赞许，同时得到了各教会组织的支持，多德夫人随即写信向市长与州政府表达了自己的想法，并建议以她父亲的生日——每年的6月5日作为父亲节，斯波坎市市长与华盛顿州州长公开表示赞成，州政府采纳这一建议的同时，把节期改在6月的第三个星期日，1910年6月19日多德夫人所在的华盛顿州斯波坎市，举行了全世界的第一次父亲节庆祝活动，在差不多的时间里，美国各地其它城镇的人们也开始庆祝“父亲节”。"
      ]
    },
    {
      "title" : "节日活动",
      "detail" : [
        "美国为父母做早餐",
        "",
        "在美国，父亲节当天早餐一般是由子女们来做，父母可以继续睡觉，不必早起。由子女们做好早餐拿到床前给父母亲食用。此外，在美国儿女也会给父亲寄贺卡，买领带、袜子之类的小礼品送给父亲，以表达对父亲的敬重。",
        "",
        "日本给父亲念感恩信、搓背",
        "",
        "在日本父亲节时，女儿一般会念感谢信给父亲。她们会和父亲团聚，给父亲送上礼物和祝福。在日本，不管是已经出嫁的还是待字闺中的女儿，一般要给父亲写一封挚爱和祝福的信，将这封信捧到父亲面前，大声念给父亲听，感谢父亲的生身和养育之恩。",
        "",
        "德国父亲喝啤酒庆祝",
        "",
        "在德国的父亲节这一天，嗜酒的德国父亲们可以想喝多醉就喝多醉，而且回家之后媳妇不许管。一些小镇上的男人一早推着载满大木桶装的啤酒小车出门，碰上谁就和谁喝，直至醉倒在街上。"
      ]
    }
  ]
}`},{festival_name:"国际奥林匹克日",festival_desc:`{
  "disp_name" : "国际奥林匹克日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "6月23日"
        },
        {
          "title" : "设立机构",
          "value" : "国际奥林匹克委员会"
        },
        {
          "title" : "设定时间",
          "value" : "1948年6月23日"
        },
        {
          "title" : "节日意义",
          "value" : "纪念国际奥委会在巴黎正式成立"
        }
      ],
      "detail" : [
        "纪念日的宗旨是鼓励世界上所有的人，不分性别、年龄或体育技能的高低，都能参与到体育活动中来。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "1894年6月23日，国际奥委会 在巴黎正式成立，为了纪念这一具有历史意义的一日，经过国际奥林匹克委员会的赞同，把这一日称为“奥林匹克日”或运动日。国际奥委会从1948年起将每年的6月23日定为国际奥林匹克日。当年6月23日举行了首次奥林匹克日活动，参加的国家有葡萄牙、希腊、奥地利、加拿大、瑞士、英国、乌拉圭、委内瑞拉和比利时。此后，在每年的6月17日至24日之间，各个国家或地区奥委会都要组织各种庆祝活动。现在世界上参加此项活动的国家、地区已由首届的9个增至100多个，参加者十分踊跃，表达了人们对奥林匹克精神的崇尚！经过国际奥林匹克委员会的赞同，把这一日称为“奥林匹克日”或“运动日”。",
        "现代奥林匹克运动会不分种族、肤色、宗教信仰、意识形态、语言文化，全世界人民相聚在五环旗下，以团结、和平与友谊为宗旨进行公平竞技，具有国际性的特点。"
      ]
    },
    {
      "title" : "组织机构",
      "detail" : [
        "国际奥林匹克委员会，简称国际奥委会。1894年成立后，总部设在巴黎。1914年第一次世界大战爆发，为了避免战火的洗劫,1915年4月10日总部迁入这个有“国际文化城”之称的瑞士洛桑。这里有奥林匹克博物馆，奥林匹克研究中心，还有以顾拜旦名字命名的大街，体育场，等等。数十年来，洛桑为奥林匹克运动的发展，作出了重大贡献，无怪乎有人将洛桑称为\\"奥林匹克之都\\"。国际奥委会也是在这个美好的城市逐渐发展、壮大而闻名于世的。",
        "",
        "国际奥委会，是奥林匹克运动的领导机构，是一个不以营利为目的、具有法律地位和永久继承权的法人团体。根据现代奥林匹克运动创始人顾拜旦的理想，恢复奥林匹克运动的目的，在于增强各国运动员之间的友谊与团结，促进世界和平以及各国人民之间的相互了解，发展世界体育运动。《奥林匹克宪章》明文规定，国际奥委会的宗旨是：鼓励组织和发展体育运动和组织竞赛；在奥林匹克理想指导下，鼓舞和领导体育运动，从而促进和加强各国运动员之间的友谊；迄今已有近百年历史的国际奥委会，为之作出了积极努力和重大贡献。"
      ]
    }
  ]
}`},{festival_name:"芒种",festival_desc:`{
  "disp_name" : "芒种",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年6月5日或6日"
        },
        {
          "title" : "代表寓意",
          "value" : "麦类等有芒作物成熟，农民朋友散播播种"
        },
        {
          "title" : "气候特点",
          "value" : "雨量充沛，气温显著升高"
        },
        {
          "title" : "节气养生",
          "value" : "饮食清淡、调养精神"
        },
        {
          "title" : "节气三候",
          "value" : "螳螂生；鹏始鸣；反舌无声"
        }
      ],
      "detail" : [
        "芒种是农历二十四节气中的第9个节气，夏季的第三个节气，表示仲夏时节的正式开始。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "芒种节气，要注意增强体质，避免季节性疾病和传染病的发生，如中暑、腮腺炎、水痘等。芒种的养生重点要在精神调养上，应该使自己的精神保持轻松、愉快的状态，不要恼怒忧郁，气机得以宣畅、通泄。",
        "从芒种节气开始，天气闷热，雨水较多，湿度增大。北方进入雷雨、阵雨天，南方则已进入梅雨天，人体的湿热也随之加重，因此要注意防湿，避免引发各种疾病。",
        "芒种节气养生需要防范的四种疾病：",
        "1、口舌生疮。中医认为心与小肠相表里，芒种开始，湿热更重，如湿热内积，心火重，小肠积热，就会出现小便黄短，舌红苔黄，大便秘结，口舌生疮，就应该少吃辛热之品，如白酒、羊肉等。多吃黄瓜、青菜、绿豆。",
        "2、心脏疾病。芒种节气，气温更高，湿度更大，心脏负荷逐渐加重，有心脏病、冠心病的人要注意保养，少熬夜，避免工作过分紧张，生活要有节奏，可以吃一些保养心脏的药食。",
        "3、妇科病。妇女应少吃辛热食物，多吃一些清热利湿之品，如绿豆，还应常吃健脾利湿之品，如薏米、山药、白扁豆、粳米粥。",
        "4、防真菌。在湿热天气中更要经常换洗内衣。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "夏季体温调节、水盐代谢发生了显著的变化：一方面人体组织蛋白分解加速，营养消耗增加；另一方面天热大量出汗，导致了许多营养从汗液流失；第三方面夏季消化功能相对减弱。这些均有可能导致机体营养代谢的失衡，从而引起相应的疾病，所以此时饮食调养就尤为重要。",
        "《摄生消息论》主张：“饮食温暖，不令大饱，常常进之，宜桂汤豆蔻熟水，其于肥腻当戒”，夏季心火旺盛，而肾水相对衰弱，天气炎热也要养护脾胃，饮食少苦寒，节冷饮，少油腻等。西瓜和绿豆性味甘寒，入心胃经，二者皆为盛夏消暑解热、养心除烦、排毒养颜之佳品。夏在五行属火，五味为苦，苦味入心，夏季适当食味苦之物如苦瓜、百合、莲子、苦丁茶等有解热除烦、抗菌消炎、促进消化、提神醒脑等功效。然需注意苦味过多又会损伤肺气，此外适当食入酸味如醋、乌梅均可抑菌杀菌、开胃消食、敛阴止汗。",
        "夏季是阳气蒸蒸日上、发散于外的时候，人体为了排出体内的热量，皮肤腠理多处于开放的状态，热量容易散失，如果加之多食冷饮，体内就相对寒凉，故此时常是“阳气在表，胃中虚冷”的状态。俗话有“冬吃萝卜夏吃姜”，生姜性味辛温，有散寒解表、和胃止呕，温肺止咳等多种功效，芒种时节，自制一些姜糖水、鲜藕姜蜜饮等，有助于温中养胃，培固正气，也是“春夏养阳，秋冬养阴”旨意所在。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "芒种的“芒”字，是指麦类等有芒植物的收获，芒种的“种”字，是指谷黍类作物播种的节令。“芒种”二字谐音，表明一切作物都在“忙种”了。所以，“芒种”也称为“忙种”、“忙着种”，是农民朋友的散播播种。“芒种”到来预示着农民开始了忙碌的田间生活。",
        "左河水的《芒种》诗称其气象和农忙的情况为“艳阳辣辣卸衣装，梅雨潇潇涨柳塘。南岭四邻禾壮日，大江两岸麦收忙。”"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "送花神",
        "",
        "芒种已近五月间，百花开始凋残、零落，民间多在芒种日举行祭祀花神仪式，饯送花神归位，同时表达对花神的感激之情，盼望来年再次相会。",
        "",
        "安苗",
        "每到芒种时节，种完水稻，为祈求秋天有个好收成，各地都要举行安苗祭祀活动。家家户户用新麦面蒸发包，把面捏成五谷六畜、瓜果蔬菜等形状，然后用蔬菜汁染上颜色，作为祭祀供品，祈求五谷丰登、村民平安",
        "",
        "打泥巴仗",
        "",
        "贵州东南部一带的侗族青年男女，每年芒种前后都要举办打泥巴仗节。当天，新婚夫妇由要好的男女青年陪同，集体插秧，边插秧边打闹，互扔泥巴。活动结束，检查战果，身上泥巴最多的，就是最受欢迎的人。",
        "",
        "煮梅",
        "",
        "在南方，每年五、六月是梅子成熟的季节，三国时有“青梅煮酒论英雄”的典故。青梅含有多种天然优质有机酸和丰富的矿物质，具有净血、整肠、降血脂、消除疲劳、美容、调节酸碱平衡，增强人体免疫力等独特营养保健功能。但是，新鲜梅子大多味道酸涩，难以直接入口，需加工后方可食用，这种加工过程便是煮梅。"
      ]
    }
  ]
}`},{festival_name:"夏至",festival_desc:`{
  "disp_name" : "夏至",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年的6月21日或22日"
        },
        {
          "title" : "代表寓意",
          "value" : "炎热的夏天来临"
        },
        {
          "title" : "节气养生",
          "value" : "多吃苦味食物，调养精神"
        },
        {
          "title" : "气候特点",
          "value" : "江淮梅雨，高温桑拿"
        },
        {
          "title" : "节气三候",
          "value" : "鹿角解；蝉始鸣；半夏生"
        }
      ],
      "detail" : [
        "夏至是太阳的转折点，这天过后它将走“回头路”，阳光直射点开始从北回归线向南移动，北半球白昼将会逐日减短。夏至日过后，北回归线及其以北的地区，正午太阳高度角也会逐日降低。同时，夏至到来后，夜空星象也逐渐变成夏季星空。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "夏至养生二注意",
        "1、夏至养生先养心",
        "在中医理论中，人和自然界是一个统一的整体，自然界的四季消长变化和人体的五脏功能活动相互关联对应。心对应“夏”，也就是说夏季心阳最旺，同时提醒人们，在春夏之交要顺应天气的变化，重点关注心脏保养。",
        "现代医学研究发现，人的心理、情绪与躯体可通过神经—内分泌—免疫系统互相联系、互相影响。此时不仅是情绪波动起伏，机体的免疫功能也较为低下，起居、饮食稍有不妥，就会发生各种疾病。特别是老年人，心肌缺血、心律失常、血压升高的情况并不少见。所以，在“夏至”之时要做好自我调节、笑口常开。",
        "2、夏至养生须防暑",
        "夏至期间，全国气温高、光照足、雨水也多，农作物生长旺盛。夏至过后，一年中最热的时期就要到了。人的胃肠功能因受暑热刺激，其功能就会相对减弱，容易发生头重倦怠、胸脘郁闷、食欲不振等不适，甚至引起中暑，伤害健康。天气热，尽量避免在强烈阳光下进行户外工作或活动，特别是午后高温时段和老、弱、病、幼人群；在进行户外工作或活动时，要避免长时间在阳光下曝晒，同时采取防晒措施：穿浅色或素色的服装，带遮阳帽、草帽或打遮阳伞；多喝水，特别是盐开水，随身携带防暑药物，如：人丹、清凉油、风油精等。",
        "夏至养生三忌",
        "1、忌夜食生冷、空腹饮茶",
        "夏季夜短，年事稍长之人，或体质稍弱者，腹中常冷，不易消化饮食，生菜、瓜类等，本为夏季忌食之品，夜间尤其要注意食用此类食物。夜间亦要注意不要吃肉、面、生冷、粘腻之物，否则可见腹胀、吐泻交作等病症。 过多饮茶，尤其是空腹时饮茶，极易导致茶水消耗人体的阳气，如果再是喜欢食咸之人，咸味引茶入肾，消烁下焦肾阳，使人易于罹患手足疼痛之痹症，以及下元虚冷的腹泻、阳痿、痛经等病症。因此，夏季饮茶，应是在餐后饮二到三杯为宜，有饥饿感则立刻停饮。",
        "2、忌冷水洗浴",
        "冷水洗浴是很多青中男性最喜欢的消暑方式，但夏季天气炎热，人的汗孔肌腠均处于开泄状态，因此，寒气极易侵入人体，导致阳气暗损。可以见到的病症如手足发冷，小腿转筋，双目视物不清，甚则变生原因不明的发热证。同时，即使是热水洗浴，亦要注意浴后避风，对小儿尤其如此。",
        "3、忌夜卧贪凉",
        "不可晚上睡觉整夜开空调冷气，这种习惯易导致伤风、面瘫、关节疼痛、腹痛腹泻，对身体的损伤是严重的。对小儿甚至不要在其睡着之后扇风取凉，否则，易于罹患手足抽搐、口噤不开、风痹等病症。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "夏季阳气盛于外。从夏至开始，阳极阴生，阴气居于内，所以，在夏至后，饮食要以清泄暑热、增进食欲为目的，因此要多吃苦味食物，宜清补。《吕氏春秋·尽数篇》指出：“凡食无强厚味，无以烈味重酒。”唐朝的孙思邈提倡人们“常宜轻清甜淡之物，大小麦曲，粳米为佳”，又说：“善养生者常须少食肉，多食饭”。在强调饮食清补的同时，勿过咸、过甜，宜多吃具有祛暑益气、生津止渴的食物。",
        "绿叶菜和瓜果类等水分多的蔬菜水果都是不错的选择，如白菜、苦瓜、丝瓜、黄瓜等，都是很好的健胃食物。而面条，也是夏至后被推荐的美食之一。在中国北方流行一句谚语：“冬至饺子夏至面”，尤其是凉面，既能降火开胃，又不至于因寒凉而损害健康。",
        "此外，还要推荐一种食材——生姜。有俗话说：“饭不香，吃生姜”、“冬吃萝卜，夏吃姜”、“早上三片姜，赛过喝参汤”，都是对生姜所具有的营养价值和医疗作用所做的精辟的概括。夏季暑热，多数人食欲不振，而生姜有利于食物的消化和吸收，对于防暑度夏有一定益处。另有“男子不可百日无姜”的说法。夏季万物生长，阳极阴生，心旺肾衰，因此，适量进补对男子性功能的保护和提升还是很有好处的。",
        "夏至后，气温逐渐升高，人体出汗量也会随之增加，因此人体需水量大。对此，还可以在饮食上加以调节，如喝些绿豆汤、淡盐水等。需注意的是，绿豆汤不要多喝，更不能当水喝。属于寒凉体质和体质虚弱之人也不适宜饮用绿豆汤。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "夏至是二十四节气中最早被确定的一个节气。公元前七世纪，先人采用土圭测日影，就确定了夏至。每年的夏至从6月21日（或22日）开始，至7月7日（或8日）结束。据《恪遵宪度抄本》：“日北至，日长之至，日影短至，故曰夏至。至者，极也。”",
        "",
        "中国民间把夏至后的15天分成3“时”，一般头时3天，中时5天，末时7天。这期间我国大部分地区气温较高，日照充足，作物生长很快，生理和生态需水均较多。此时的降水对农业产量影响很大，有“夏至雨点值千金”之说。一般年份，这时长江中下游地区和黄淮地区降水一般可满足作物生长的要求。《荆楚岁时记》中记有：“六月必有三时雨，田家以为甘泽，邑里相贺。”可见在1000多年前人们已对此降雨特点有明确的认识。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "祭神祀祖",
        "",
        "夏至时值麦收，自古以来有在此时庆祝丰收、祭祀祖先之俗，以祈求消灾年丰。因此，夏至作为节日，纳入了古代祭神礼典。《周礼·春官》载：“以夏日至，致地方物魈。”周代夏至祭神，意为清除荒年、饥饿和死亡。夏至日正是麦收之后，农人既感谢天赐丰收，又祈求获得“秋报”。夏至前后，有的地方举办隆重的“过夏麦”，系古代“夏祭”活动的遗存。",
        "",
        "消夏避伏：",
        "",
        "夏至日，妇女们即互相赠送折扇、脂粉等什物。《酉阳杂俎·礼异》：“夏至日，进扇及粉脂囊，皆有辞。”“扇”，借以生风；“粉脂”，以之涂抹，散体热所生浊气，防生痱子。在朝廷，“夏至”之后，皇家则拿出“冬藏夏用”的冰“消夏避伏”，而且从周代始，历朝沿用，进而成为制度。",
        "",
        "“夏至”食品：",
        "",
        "“麦粽”与“夏至饼”",
        "",
        "江南食俗，一般有麦粽、角黍、李子、馄饨、汤面等。《吴江县志》：“夏至日，作麦粽，祭先毕，则以相饷。”不仅食“麦粽”，而且将“麦粽”作为礼物，互相馈赠。夏至日，农家还擀面为薄饼，烤熟，夹以青菜、豆荚、豆腐、及腊肉等，祭祖后食用，俗谓“夏至饼”，或分赠亲友。",
        "",
        "冬至馄饨夏至面",
        "",
        "自古以来，中国民间就有“冬至馄饨夏至面”的说法，江南一带夏至吃面是很多地区的重要习俗，民间有“吃过夏至面，一天短一线”的说法。南方的面条品种多，如阳春面、干汤面、肉丝面、三鲜面、过桥面及麻油凉拌面等，而北方则是打卤面和炸酱面。“因夏至新麦已经登场，所以夏至吃面也有尝新的意思。”"
      ]
    }
  ]
}`},{festival_name:"大暑",festival_desc:`{
  "disp_name" : "大暑",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年7月22日或23日"
        },
        {
          "title" : "代表寓意",
          "value" : "一年中最热的时候"
        },
        {
          "title" : "气候特点",
          "value" : "酷热多雨，容易中暑"
        },
        {
          "title" : "节气养生",
          "value" : "补脾健胃"
        },
        {
          "title" : "节气三候",
          "value" : "腐草为萤；土润溽暑；大雨时行"
        }
      ],
      "detail" : [
        "大暑节气正值“三伏天”里的“中伏”前后，是一年中最热的时期，气温最高，农作物生长最快，同时，很多地区的旱、涝、风灾等各种气象灾害也最为频繁。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "每一个节气的来临，我们的身体都会做出相应的反应，那么，在大暑这个时间段如何做好养生呢？",
        "第一、合理的饮食",
        "在中医的角度里面认为天人相应，我们的身体要适应季节的变化，所以在夏天的时候我们要选择性地挑选食物，让我们的身体能够适应季节的变化。在大暑这个时间段，想要做到养生，要保证我们每天有足够的蛋白质摄入，日常生活当中蛋白质有豆制品，鱼虾等富含优质蛋白，因为天气比较热的话，那么我们人体的新陈代谢也会比较快，热量的消耗量也比较大，所以足够的蛋白是每天必要的。另外，我们可以适当地给自己增加一些清热解暑的食物摄入，例如绿豆汤，百合粥以及苦瓜等等。",
        "第二、不要经常烦躁",
        "现在天气逐渐的热炎热，那么人们也会出现心烦意乱的情况，可能经常会出现吃不下饭，的情况，其实这样的情况就代表着我们已经动了肝火，也就是情绪中暑，其实情绪中暑，我们要引起一定的关注，因为对于我们身体健康来说，有着一定的损害，尤其是对于老年人，容易造成心律失常，血压升高等的问题。",
        "第三、做好防护",
        "现在夏天一年比一年炎热，而且还处在大暑的时节，太阳会非常的猛烈。所以在大暑时节想要出门游玩的话，一定要准备好一些，防止中暑的防护措施，提前准备好一些解暑的药物，例如风油精，当自己出门游玩的时候，出现恶心，大量出汗以及体热等症状，要立即赶往到阴凉的通风处进行休息，然后再喝一些绿豆汤，或者是淡盐开水。",
        "第四、少喝冰饮",
        "当天气出现炎热的情况，很多人都喜欢喝凉水，甚至是冰水，或者是冰的饮料来进行解渴，其实天气越热，我们身体水分的流失就会越多，及时补水是正确的，但是如果们大量的吃喝冰水，或者是冰饮料，不仅会刺激到我们肠胃系统，同时女生还会出现痛经，血液淤积的情况。",
        "第五、运动量不要太大",
        "夏天的时候很多人都喜欢出去运动，但是运动消耗性比较大，流失大量的体液就等于流失了，我们体内大量的水分，身体内水分不足的话，心情也会容易干燥不安。所以在夏天的时候，我们尽量从事一些温和的运动。例如打太极。选择比较缓和的运动，让我们的呼吸平缓，从容不迫，身体内的血管以及经脉，有机会得到足够的休息，我们晚上散步的时候可以听一些比较悠闲的音乐，在日常生活当中，不要过于的激动，更加不要经常发怒急躁。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "夏季的饮食调养是以暑天的气候特点为基础，由于夏令气候炎热，易伤津耗气，因此常选用药粥滋补养生。《黄帝内经》有载，“药以去之，食以随之”、“谷肉果菜，食养尽之”，这个时节，肠胃的消化功能较为薄弱，饮食以清淡为主，不可多吃肥腻、辛辣、煎炸食物。除了多喝水、常食粥、多吃新鲜果蔬外，还可适当多食用些清热、健脾、利湿、益气等食物。",
        "三瓜二豆一肉，即冬瓜、苦瓜、西瓜、赤小豆、绿豆、鸭肉，它们是夏季里最适合拿来清热解燥、利水祛湿的食物。",
        "1、冬瓜",
        "盛夏时最常用的瓜蔬之一，它清甜、瓜肉厚，且水分多。中医认为它有消暑湿、养胃液、涤秽、消痈、行水、消肿之功。可用于暑热口渴、痰热咳喘、水肿，还能解酒。",
        "2、苦瓜",
        "苦瓜又名“凉瓜”，性寒，苦，无毒，入心、肝、脾、肺经，是大暑时节消暑的最好蔬菜，清热解暑、健脾开胃、降血糖。",
        "3、西瓜",
        "“瓜中之王”，清爽解渴，味道甘味多汁，是盛夏佳果。其味甘甜、性寒，是瓜类中消暑解渴的首选。西瓜性冷降火，故大暑时节，出现中暑、发热、心烦、口渴等，可用西瓜解之。",
        "4、赤小豆",
        "赤小豆和红豆很像，但相较于红豆较扁长，而且中医入药一般用赤小豆，红豆一般只供食用。赤小豆性甘，利水消肿，清热退黄，夏季食用对心脏特别有益。",
        "5、绿豆",
        "绿豆是夏季饮食中的上品，营养丰富，有清热消暑、美容养颜、止渴利尿等功效，有“济世之食谷”之美誉。在大热天，可煮绿豆汤或绿豆粥喝。",
        "6、鸭肉",
        "鸭肉性寒，是夏季进补的优良食品，营养很高，有除湿、解毒、滋阴、去燥、养胃、补肾、消水肿、止咳化痰等功效，非常适合大暑的时候吃。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "大暑是农历二十四节气中的第十二个节气，此时太阳到达黄经120度。",
        "《通纬·孝经援神契》：“小暑后十五日斗指未为大暑，六月中。小大者，就极热之中，分为大小，初后为小，望后为大也。”",
        "这时正值中伏前后，中国大部分地区为一年最热时期，也是喜热作物生长速度最快的时期。汉族劳动人民将大暑分为三候：“一候腐草为萤；二候土润溽暑；三候大雨时行。”世上萤火虫约有二千多种，分水生与陆生两种，陆生的萤火虫产卵于枯草上，大暑时，萤火虫卵化而出，所以古人认为萤火虫是腐草变成的；第二候是说天气开始变得闷热，土地也很潮湿；第三候是说时常有大的雷雨会出现，这大雨使暑湿减弱，天气开始向立秋过渡。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "大暑送“大暑船”活动在浙江台州沿海已有几百年的历史。“大暑船”完全按照旧时的三桅帆船缩小比例后建造，船内载各种祭品。活动开始后，50多名渔民轮流抬着“大暑船”在街道上行进，鼓号喧天，鞭炮齐鸣，街道两旁站满祈福人群。“大暑船”最终被运送至码头，进行一系列祈福仪式。随后，这艘“大暑船”被渔船拉出渔港，然后在大海上点燃，任其沉浮，以此祝福人们五谷丰登，生活安康。台州椒江人还有大暑节气吃姜汁调蛋的风俗，姜汁能去除体内湿气，姜汁调蛋“补人”，也有老年人喜欢吃鸡粥，谓能补阳。",
        "",
        "山东不少地区有在大暑到来这一天“喝暑羊”（即喝羊肉汤）的习俗。在枣庄市，不少市民大暑这天到当地的羊肉汤馆“喝暑羊”。",
        "",
        "大暑是乡村田野蟋蟀最多的季节，中国有些地区的人们茶余饭后有以斗蟋蟀为乐的风俗。",
        "",
        "大暑期间，台湾有吃凤梨的习俗，汉族民间百姓认为这个时节的凤梨最好吃。加上凤梨的闽南语发音和“旺来”相同，所以也被用来作为祈求平安吉祥、生意兴隆的象征。"
      ]
    }
  ]
}`},{festival_name:"建党节",festival_desc:`{
  "disp_name" : "建党节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年7月1号"
        },
        {
          "title" : "节日起源",
          "value" : "党的诞生纪念日"
        },
        {
          "title" : "设定时间",
          "value" : "1938年5月"
        },
        {
          "title" : "设立机构",
          "value" : "中国共产党"
        }
      ],
      "detail" : [
        "中国共产党于1921年7月23日成立后，在反动军阀政府的残暴统治之下，只能处于秘密状态，没有公开进行活动的环境。在大革命时期，党忙于国共合作、开展工农运动和支援北伐战争，没有条件对党的诞生进行纪念。把7月1日作为中国共产党的诞辰纪念日，是毛泽东同志于1938年5月提出来的。"
      ]
    },
    {
      "title" : "由来",
      "detail" : [
        "中国共产党成立纪念日，每年公历七月一日。1917年俄国十月革命胜利后，马克思主义迅速传遍我国，经过“五四”爱国运动，最早接受马列主义的革命知识分子李大钊，陈独秀，毛泽东，董必武等人，相继在各地成立共产主义小组，宣传马列主义，从事工人运动。在列宁领导的共产国际的积极帮助下，1921年7月各地共产主义小组派出代表到上海召开了中国共产党第一次代表大会。后因被帝国主义密探发觉，会议又转移到浙江嘉兴南湖的一只游船上继续进行。参加会议的有李达，李汉俊，张国焘，刘仁静，董必武，陈潭秋，毛泽东，何叔衡，王尽美，邓恩铭，陈公博，周佛海，共十二名。代表全国各界五十七名党员出席了会议。包惠僧受陈独秀派遣，出席了会议。参加会议的还有共产国际代表马林，赤色职工国际代表尼柯尔斯基。大会通过了党的章程，选举陈独秀为总书记，宣告中国共产党成立。从此，在中国出现了完全新式的以共产主义为目的，以马列主义为行动指南，统一的工人阶级政党。中国共产党的诞生，开辟了中国历史发展的新时代，使中国革命的面貌焕然一新。抗日战争时期，由于环境困难，不能查记“一大”召开的准确日期（后经过考证，得出“一大”召开的时间为1921年7月23日），因此1941年党中央决定召开“四大”，确定1921年7月的首日即7月1日作为党的生日和纪念日。"
      ]
    },
    {
      "title" : "历史",
      "detail" : [
        "中国共产党于1921年7月成立后，在反动派的残暴统治之下，只能处于秘密状态，没有公开进行活动的环境。在大革命时期，党忙于国共合作、开展工农运动和支援北伐战争，没有条件对党的诞生进行纪念。在土地革命战争时期，党处在更加艰苦的农村战争环境或者在白色恐怖下进行斗争，仍没有条件组织统一的活动来纪念党的生日。直至1936年当中国共产党成立十五周年的时候，党的一大代表陈潭秋同志在莫斯科出版的《共产国际》杂志第七卷上，发表了《第一次代表大会的回忆》一文，以表示对党的诞生的纪念。这是纪念中国共产党诞生最早的一篇文章。文章中提到一大是1921年7月底开幕的，但没有具体的日期。这篇纪念文章是以一大开会的月份为依据的，而不是以一大开幕的具体日期为依据的。当时，还没有举行过群众性的纪念党的生日的活动。",
        "",
        "当时，在延安的曾经参加过一大的党的创始人只有毛泽东和董必武两人。他们回忆一大是七月份召开的，但记不清楚确切的开会日期。因为缺乏档案资料，一时无法查证，所以就把7月1日确定为党的诞生纪念日。"
      ]
    }
  ]
}`},{festival_name:"小暑",festival_desc:`{
  "disp_name" : "小暑",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年7月7日或8日"
        },
        {
          "title" : "代表寓意",
          "value" : "气候开始炎热"
        },
        {
          "title" : "气候特点",
          "value" : "气温升高，进入雷暴期"
        },
        {
          "title" : "节气养生",
          "value" : "劳逸结合，保护阳气"
        },
        {
          "title" : "节气三候",
          "value" : "温风至；蟋蟀居宇；鹰始鸷"
        }
      ],
      "detail" : [
        "暑，表示炎热的意思，小暑为小热，还不十分热。意指天气开始炎热，但还没到最热，全国大部分地区基本符合。全国的农作物都进入了茁壮成长阶段，需加强田间管理。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "小暑时节炎热，人体消耗大，所谓“无病三分虚”，会有精神疲惫、口苦苔腻、胸腹胀闷等征象，所以此时强调解热防暑，补充体力。",
        "时当小暑之季，气候炎热，人易感心烦不安，疲倦乏力，在自我养护和锻炼时，我们应按五脏主时，夏季为心所主而顾护心阳，平心静气，确保心脏机能的旺盛，以符合“春夏养阳”之原则。《灵枢•百病始生》曰：“喜怒不节则伤脏”，这是因为人体的情志活动与内脏有密切关系，有其一定规律。不同的情志刺激可伤及不同的脏腑，产生不同的病理变化。",
        "中医养生主张一个“平”字，即在任何情况之下不可有过激之处，如喜过则伤心，心伤则心跳神荡，精神涣散，思想不能集中，甚则精神市场等。心为五脏六腑之大主，一切生命活动都是五脏功能的集中表现，心神受损则必涉及其他脏腑。故夏季养生重点突出“心静”二字就是这个道理，应平心静气，确保心脏机能的旺盛，以符合“春夏养阳”之原则。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "小暑饮食有何讲究？",
        "1、早餐勿冷食",
        "在闷热的天气里，早餐也应该先食用热粥、热豆浆、热牛奶等热食，然后再吃一些面食和鸡蛋等食物。水果要等到九十点钟再吃才好。",
        "2、冷饮凉菜勿过量",
        "由于天热，有的人以冷饮、凉菜为每天的主要食物；有的人进餐时饮用大量冰镇啤酒；有的人正餐食量很小，餐前或餐后进食大量冰冻的西瓜、桃子、甜瓜、葡萄等水果。这些冰凉的食物大量进入体内，会使胃肠黏膜内血管急剧收缩，导致胃肠痉挛，影响正常消化功能；而且以这类食物为主要饮食，势必造成如氨基酸、必需脂肪酸等营养素的缺乏，导致体力和抵抗力下降。",
        "此外，饮料和含水量丰富的水果会使人体尿频，尤其在晚餐或晚餐后大量进食这些食物，使人夜尿频多，影响睡眠质量。平时体质虚弱，经常自觉四肢发凉的人更不适宜过多吃冷饮和冷冻的绿豆汤。",
        "3、辛辣性食物要适量",
        "天热得让人没有食欲，欲的作用，但是辣椒、花椒吃得过度会刺激胃黏膜，引发胃炎、胃溃疡等疾病。",
        "4、温热食物要少吃",
        "食物有性味之分，人体有寒热之别。体质偏热的人在三伏天尤其要注意少吃温性、热性食物。这类食物主要有：羊肉、草鱼、鲢鱼、带鱼、黄鳝，以及核桃仁、杏、樱桃、龙眼、杨梅、椰子等。",
        "5、温热茶水消暑佳饮",
        "饮温热茶水可使汗腺舒张排汗，散发体内热量，从而降低体温，有助于消暑。茶叶中还含有丰富的微量元素钾，可弥补出汗时所排出的钾离子，有助于纠正倦怠无力和食欲减退。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "当太阳到达黄经105°时为小暑。",
        "",
        "《月令七十二候集解》：“暑，热也，就热之中分为大小，月初为小，月中为大，今则热气犹小也。”小暑虽不是一年中最炎热的季节，但紧接着就是一年中最热的季节大暑，民间有“小暑大暑，上蒸下煮”之说。由于出汗多，消耗大，再加之劳累，人们更不能忽略对身体的养护。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "过去民间有小暑“食新”习俗，即在小暑过后尝新米，农民将新割的稻谷碾成米后，做好饭供祀五谷大神和祖先，然后人人吃尝新酒等。据说“吃新”乃“吃辛”，是小暑节后第一个辛日。城市一般买少量新米与老米同煮，加上新上市的蔬菜等。所以，民间有小暑吃黍，大暑吃谷之说",
        "",
        "民间有小暑吃藕的习俗，藕中含有大量的碳水化合物及丰富的钙磷铁等和多种维生素，Vc钾和膳食纤维比较多，具有清热养血除烦等功效，适合夏天食用鲜藕以小火煨烂，切片后加适量蜂蜜，可随意食用，有安神入睡之功效，可治血虚失眠。",
        "",
        "伏天民谚有“头伏萝卜二伏菜，三伏还能种荞麦”，“头伏饺子，二伏面，三伏烙饼摊鸡蛋”。"
      ]
    }
  ]
}`},{festival_name:"中国航海日",festival_desc:`{
  "disp_name" : "中国航海日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年的7月11日"
        },
        {
          "title" : "节日意义",
          "value" : "宣传普及航海及海洋知识等"
        },
        {
          "title" : "设定地点",
          "value" : "宁波"
        },
        {
          "title" : "设定时间",
          "value" : "2005年4月25日"
        }
      ],
      "detail" : [
        "“航海日”是由政府主导、全民参与的全国性的法定活动日,既是所有涉及航海、海洋、渔业、船舶工业、航海科研教育等有关行业及其从业人员和海军官兵的共同节日,也是宣传普及航海及海洋知识,增强海防意识,促进社会和谐团结的全民族文化活动。地球上的水域面积占了三分之二，一个国家的兴盛与航海事业密不可分。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "2005年7月11日，是中国伟大航海家郑和下西洋600周年纪念日。2005年4月25日，经国务院批准，将每年的7月11日确立为中国“航海日”，作为国家的重要节日固定下来。”同时也作为“世界海事日3月17日”在中国的实施日期。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "节日期间，相关部门统一张贴活动主题和宣传口号，举办多种形式的庆祝、纪念、学术、竞赛、教育、表彰、展览等文化宣传活动。节日当天，中国籍民用船舶、中国航运企业拥有或经营的非中国籍船舶都要挂满旗，我国航运、港口、船舶代理、海事、救助、水运工程等涉海管理机关、企事业单位和科研院校，也要悬挂旗帜以示庆祝航海日，除在限制鸣笛特殊水域或在港作业的船舶外，中国籍民用船舶、中国航运企业拥有或经营的非中国籍船舶还要统一鸣笛1分钟。"
      ]
    }
  ]
}`},{festival_name:"处暑",festival_desc:`{
  "disp_name" : "处暑",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "公历每年8月23日前后"
        },
        {
          "title" : "代表寓意",
          "value" : "炎热的暑天即将过去"
        },
        {
          "title" : "气候特点",
          "value" : "暑热余威明显，但气温慢慢转凉"
        },
        {
          "title" : "节气养生",
          "value" : "滋阴润燥"
        },
        {
          "title" : "节气三候",
          "value" : "鹰乃祭鸟；天地始肃；禾乃登"
        }
      ],
      "detail" : [
        "处暑节气意味着进入气象意义的秋天，处暑后中国长江以北地区气温逐渐下降。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "处暑气温下降明显，昼夜温差加大，人们一不小心就容易引发呼吸道、肠胃炎、感冒等疾病，故有“多事之秋”之说。干燥的气候为一些细菌、病菌的繁殖与传播创造了有利条件，应做好呼吸道疾病的预防工作，少到人多的地方凑热闹，必要时戴上口罩。",
        "处暑之后，秋意渐浓，正是人们畅游郊野迎秋赏景的好时节。秋天，秋高气爽，适合户外运动。可根据个人的体质，做一些登山、慢跑、郊游等户外运动。但要多注意滋脾补筋。因为秋天筋容易克本，而肝是主筋的。所以，在运动的时候要注意不要剧烈，做好准备活动，避免伤筋。",
        "秋季是身体的生理休整阶段，会出现一些潜伏在夏季的症状，身体总是产生莫名的疲惫感，清晨醒来还想再睡，白天也犯困，就是人们常说的“秋乏”。其实原因也很简单，因为夏天夜晚比较短，天气还热，这个季节的睡眠质量通常没有别的季节好，处于长期睡眠不足的情况下，到了秋天天气凉爽的时候自然而然就会很容易犯困。解决的方式也非常好办，每天晚上提早一点儿睡，防止第二天上班时犯困。等到下午累了多伸几个懒腰，适当增加对心、肺挤压，促进心脏泵血，增加全身供氧。大脑血流充足了，人自然感到清醒、舒适了。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "“病从口入”，饮食与疾病很容易“挂钩”。处暑之后，早晚温差变化开始明显，处暑节气适宜进食清热安神的食物，如银耳、百合、莲子、蜂蜜、黄鱼、干贝、海带、海蜇、芹菜、菠菜、糯米、芝麻、豆类及奶类，但这些食物一次进食不可太多，做到少食多餐。",
        "另外，随着气侯渐渐干燥，身体里肺经当值，这时可多吃滋阴润燥食物，防止燥邪损伤。如梨、冰糖、银耳、沙参、鸭子等养阴生津的食物，或黄芪、党参、乌贼、甲鱼等能益气保健的食物。",
        "当然，多吃蔬果可以起到生津润燥、消热通便的功效，能补充人体的津液。应少吃或不吃煎炸食物，因为这些食物会加重秋燥的症状。",
        "总得来说需要滋阴润燥，但根据不同人的不同情况，处暑期间饮食方面，又有不同具体的建议：",
        "1、疏肝理气，健脾生津润燥，如猪肉、鸡肉、白芍、百合、银耳、木耳、梨等。",
        "2、疏肝健脾、益气生津，如太子参、山药、甘蔗、蜂蜜、芝麻等。",
        "3、清热健脾益气，如猪瘦肉、鸡肉、百合、太子参、淮山、白术、茯苓、粉葛、沙葛、荸荠、薏苡仁等。",
        "4、清热润燥、健脾益气功效的食物，如山药、甘蔗、山楂、荸荠、玉米、蜂蜜、太子参、玉竹、石斛、猪肉、鱼肉、鸡肉等。",
        "5、清热生津、益气养肝功效的食物，如太子参、萝卜、茉莉花、猪肉、鸡肉、淮山、梨、荠菜等。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "太阳到达黄经150°时是农历二十四节气的处暑。处暑是反映气温变化的一个节气。“处”含有躲藏、终止意思，“处暑”表示炎热暑天结束了。《月令七十二候集解》说：“处，止也，暑气至此而止矣。”“处”是终止的意思，表示炎热即将过去，暑气将于这一天结束，我国大部分地区气温逐渐下降。处暑既不同于小暑、大暑、也不同于小寒、大寒节气，它是代表气温由炎热向寒冷过渡的节气。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "出游迎秋",
        "",
        "祭祖、迎秋处暑节气前后的民俗多与祭祖及迎秋有关。处暑前后民间会有庆赞中元的民俗活动，俗称“作七月半”或“中元节”。旧时民间从七月初一起，就有开鬼门的仪式，直到月底关鬼门止，都会举行普渡布施活动。据说普度活动由开鬼门开始，然后竖灯篙，放河灯招致孤魂；而主体则在搭建普度坛,架设孤棚，穿插抢孤等行事，最后以关鬼门结束。时至今日，已成为祭祖的重大活动时段。此外，处暑之后，秋意渐浓，正是人们畅游郊野迎秋赏景的好时节。处暑过，暑气止，就连天上的那些云彩也显得疏散而自如，而不像夏天大暑之时浓云成块。民间向来就有“七月八月看巧云”之说，其间就有“出游迎秋”之意。",
        "",
        "放河灯",
        "",
        "河灯也叫“荷花灯”，一般是在底座上放灯盏或蜡烛，中元夜放在江河湖海之中，任其漂泛。放河灯是为了普渡水中的落水鬼和其他孤魂野鬼。肖红《呼兰河传》中的一段文字，是这种习俗的最好注脚：“七月十五是个鬼节；死了的冤魂怨鬼，不得托生，缠绵在地狱里非常苦，想托生，又找不着路。这一天若是有个死鬼托着一盏河灯，就得托生。”",
        "",
        "开渔节",
        "",
        "对于沿海渔民来说，处暑以后渔业收获的时节，每年处暑期间；在浙江省沿海都要举行一年一度的隆重的开渔节，决定在东海休渔结束的那一天，举行盛大的开渔仪式，欢送渔民开船出海。2006年第九届中国开渔节，在9月6日浙江省象山县举行。因为；这时海域水温依然偏高，鱼群还是会停留在海域周围，鱼虾贝类发育成熟。因此，从这一时间开始，人们往往可以享受到种类繁多的海鲜。",
        "",
        "泼水习俗",
        "",
        "在日本，从大暑到处暑的一个月时间内，日本各地有组织泼水降温的习俗。"
      ]
    }
  ]
}`},{festival_name:"建军节",festival_desc:`{
  "disp_name" : "建军节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "英文名称",
          "value" : "Army Day"
        },
        {
          "title" : "节日时间",
          "value" : "每年的8月1日"
        },
        {
          "title" : "节日意义",
          "value" : "纪念中国工农红军成立"
        },
        {
          "title" : "设立机构",
          "value" : "中国人民革命军事委员会"
        }
      ],
      "detail" : [
        "每年的八月一日是中国人民解放军建军纪念日，因此也叫“八一”建军节。1933年7月11日，中华苏维埃共和国临时中央政府根据中央革命军事委员会6月30日的建议，决定8月1日为中国工农红军成立纪念日。1949年6月15日，中国人民革命军事委员会发布命令，以“八一”两字作为中国人民解放军军旗和军徽的主要标志。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "1927年国民革命军正处于北伐中，当时的国民党两大集团——武汉的汪精卫集团和南京的蒋介石集团并不团结，4月，蒋介石在上海发动“四一二”政变，大批逮捕、处决共产党人，三个月后，武汉的汪精卫集团也发动“七一五”政变，大肆清党，政府、军队中的共产党人遭到驱逐。在这种情况下，中国共产党为了表明革命到底的立场，唤醒广大民众，反抗国民党反动派的屠杀，决定在南京和武汉之间的江西南昌发动武装起义，打响了武装反抗国民党反动统治的第一枪。",
        "",
        "1933年7月11日，中华苏维埃共和国临时中央政府决定将8月1日作为中国工农红军成立纪念日。从此，每年8月1日就成为中国工农红军和后来中国人民解放军的建军节。当年8月1日，在瑞金叶坪红军广场举行了历史上第一个“八一”纪念活动并且当日傍晚在瑞金城南竹马岗举行了红军阅兵式和分列式。从此，8月1日正式成为人民军队的建军节。因此，可以说南昌是军旗升起的地方，而瑞金是八一建军节诞生的地方。"
      ]
    }
  ]
}`},{festival_name:"禁止核试验国际日",festival_desc:`{
  "disp_name" : "禁止核试验国际日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年的8月29日"
        },
        {
          "title" : "设立机构",
          "value" : "联合国大会"
        },
        {
          "title" : "节日意义",
          "value" : "宣传、教育和倡导必须将禁止核试验作为走向更安全的世界的可贵的一步"
        }
      ],
      "detail" : [
        "禁止核试验国际日是2009年12月2日，联合国大会第六十四届会议一致通过第64\\/35号决议，宣布8月29日为禁止核试验国际日。该决议由哈萨克斯坦连同很多提案国和联合提案国发起，旨在纪念1991年8月29日塞米巴拉金斯克核武器试验场关闭。设立这个纪念日是对联合国、其会员国、政府间和非政府组织、学术机构、青年网络及媒体的激励，也是在宣传、教育和倡导必须将禁止核试验作为走向更安全的世界的可贵的一步。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "自20世纪中期核武器试验开始以来（首次是在1945年），世界各地进行了近2000次核试验。很少有人考虑到试验对人类生命的毁灭性影响，更不用说了解大气层试验的放射性尘降物了。在初期，拥有核武器是衡量科学精细程度或军事力量的一种标准。事后的分析和历史向我们表明了核武器试验令人恐惧的悲剧性影响，特别是在控制条件空缺以及鉴于今天的核武器更为强大、更具破坏性的情况下。之后在世界各地发生的事故提供了令人信服的理由，有必要纪念禁止核试验国际日——在这一天举行的教育事项、举办的活动和发布的讯息都是力争引起世界的注意，而且强调必须统一尝试阻止进一步的核武器试验。",
        "",
        "1996年通过的《全面禁止核试验条约》（《禁核试条约》）是终止一切形式的核试验的国际文书，但是，该条约尚未生效。2009年12月2日，联合国大会第六十四届会议一致通过第64\\/35号决议，宣布8月29日为禁止核试验国际日。该决议的前言强调，“应该尽一切努力终止核试验，以避免给人的生命和健康带来毁灭性和有害的后果”，并且“终止核试验是实现无核武器世界目标的关键途径之一”。"
      ]
    },
    {
      "title" : "活动",
      "detail" : [
        "2010年首次纪念了禁止核试验国际日。自此，全世界每年都通过各种活动庆祝这个日子，如专题研讨会、会议、展览、竞赛、出版物、学术机构的教学指导、媒体广播和其他活动。联合国总部也开展了一些活动。为2012年的纪念活动已规划了类似项目。",
        "自禁止核试验国际日设立以来，很多双边和多边政府层面的最新事态发展、民间社会的广泛运动和联合国秘书长本人的努力，均有助于推动禁止核试验这一事业。联合国秘书长潘基文十分明确地表示，“ 一个无核武器的世界将是全球最高级别的公益”。 2010 年5月，《 不扩散核武器条约》 的所有缔约国承诺努力“ 实现无核武器世界的和平与安全”， 而且这些国家将禁止核试验称为“ 生死攸关之举”。 "
      ]
    }
  ]
}`},{festival_name:"立秋",festival_desc:`{
  "disp_name" : "立秋",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节气时间",
          "value" : "每年8月6-9日"
        },
        {
          "title" : "代表寓意",
          "value" : "秋季的开始"
        },
        {
          "title" : "气候特点",
          "value" : "降雨、风暴、湿度等趋于下降或减少"
        },
        {
          "title" : "节气养生",
          "value" : "以养收为原则"
        },
        {
          "title" : "节气三候",
          "value" : "凉风至；白露生；寒蝉鸣"
        }
      ],
      "detail" : [
        "立秋日对农民朋友显得尤为重要，有农谚说：“雷打秋，冬半收”，“立秋晴一日，农夫不用力”。"
      ]
    },
    {
      "title" : "养生",
      "detail" : [
        "第一，精神方面。夏季阳气旺盛，进入立秋以后，阳气机会慢慢减弱，大家在此时要远离悲伤忧愁的情绪，尽量做到平心静气、心情舒畅，同时还应该收敛神气。",
        "第二，运动方面。秋季应以“收养”为原则。记得将保养身体内的阴气为关键任务。也就是说运动的时候，运动不宜过大，以免出汗过多，耗损过多的阳气致使体内阴阳失衡。建议选择平缓轻松的运动项目，如散步、太极等。",
        "第三，起居方面。应早睡早起，以便收敛阳气舒展肺气。而且要记得尽量早起，这样子有助减少血栓的形成，预防心血管疾病。如果早睡睡不着的话，可以考虑睡前喝些莲子汤、龙眼肉汤，促进入眠。当然，也可以晚上的时候用热水泡泡脚，同样起到的助眠效果也是很不错的。",
        "第四，艾灸方面。立秋的气候是由热转凉的交接节气，也是阳气渐收，阴气渐长，由阳盛逐渐转变为阴盛的时期，是万物成熟收获的季节，也是人体阴阳代谢出现阳消阴长的过渡时期。因此立秋时节的艾灸，以平稳收养为原则，不宜过分宣散。",
        "第五，饮食方面。秋季干燥，少吃辛辣，润燥、养阴、润肺，可多吃一些莲藕、百合、银耳，有养阴润燥，润肺止咳的作用。少吃西瓜，多吃豆制品，不论西瓜或香瓜、菜瓜，都不能任性多吃，否则会损伤脾胃阳气，可以多喝三豆（绿豆、红豆、黑豆）汤，能清热解毒、健脾利湿。"
      ]
    },
    {
      "title" : "饮食",
      "detail" : [
        "《素问·脏气法时论》说：“肺主秋……肺收敛，急食酸以收之，用酸补之，辛泻之”。可见酸味收敛肺气，辛味发散泻肺，秋天宜收不宜散，所以要尽量少吃葱、姜等辛味之品，适当多食酸味果蔬。",
        "立秋至，秋风起，肺燥猛，秋天燥邪为盛，最易伤人肺阴，如何养肺成为大家最为关心的话题。秋天是最容易引发肺病的季节。因为入秋后气候会逐渐干燥，人的皮肤黏膜水分蒸发会加快，因此容易出现皮肤干涩、鼻子燥热、嘴唇干裂、咽喉痛等症状，这时要注意补水，饮食也要多加重视。",
        "秋时肺金当令，肺金太旺则克肝木，故《金匮要略》又有“秋不食肺”之说。秋季燥气当令，易伤津液，故饮食应以滋阴润肺为宜。《饮膳正要》说：“秋气燥，宜食麻以润其燥，禁寒饮”。更有主张入秋宜食生地粥，以滋阴润燥者。总之，秋季时节，可适当食用芝麻、糯米、粳米、蜂蜜、枇杷、菠萝、乳品等柔润食物，以益胃生津。",
        "秋天是收获的季节，因此有很多时令水果上市，这些水果都是我们消燥的好食物。例如梨，能够生津解渴、止咳化痰、清热降火，养血生肌、润肺去燥；例如“维生素大王”大枣，含丰富蛋白质、脂肪、糖类、有机酸等等营养成分，能够促进人体造血；还有酸酸甜甜的葡萄，不仅含有丰富的葡萄糖、果糖、氨基酸、维生素等，还能抗氧化、抗衰老、维持皮肤弹性。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "立秋，是农历二十四节气中的第13个节气，更是秋天的第一个节气，标志着孟秋时节的正式开始：“秋”就是指暑去凉来。到了立秋，梧桐树开始落叶，因此有“落叶知秋”的成语。从文字角度来看，“秋”字由禾与火字组成，是禾谷成熟的意思。秋季是天气由热转凉，再由凉转寒的过渡性季节。",
        "立秋，七月节。 立字解见春。秋，揫也，物于此而揫敛也。",
        "初候，凉风至【《礼记》作盲风至】。西方凄清之风曰凉风。温变而凉气始肃也。《周语》曰火见而清风戒寒是也。",
        "二候，白露降。大雨之後，清凉风来，而天气下降茫茫而白者，尚未凝珠，故曰白露降，示秋金之白色也。",
        "三候，寒蝉鸣。寒蝉，《尔雅》曰寒螿蝉，小而青紫者；马氏曰物生于暑者，其声变之矣。",
        "宋时立秋这天宫内要把栽在盆里的梧桐移入殿内，等到“立秋”时辰一到，太史官便高声奏道：“秋来了。”奏毕，梧桐应声落下一两片叶子，以寓报秋之意。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "立秋节",
        "立秋节，也称七月节。周代是日天子亲率三公六卿诸侯大夫，到西郊迎秋，并举行祭祀少嗥、蓐收的仪式(见《礼祀·月令》)。汉代仍承此俗。《后汉书·祭祀志》：“立秋之日，迎秋于西郊，祭白帝蓐收，车旗服饰皆白，歌《西皓》、八佾舞《育命》之舞。并有天子入圃射牲，以荐宗庙之礼，名日躯刘。杀兽以祭，表示秋来扬武之意。”到了唐代，每逢立秋日，也祭祀五帝。《新唐书·礼乐志》：“立秋立冬祀五帝于四郊。”宋代，立秋之日，男女都戴楸叶，以应时序。有以石楠红叶剪刻花瓣簪插鬓边的风俗，也有以秋水吞食小赤豆七粒的风俗(见《临安岁时记》)，明承宋俗。清代在立秋节这天，悬秤称人，和立夏日所秤之数相比，以验夏中之肥瘦。民国以来，在广大农村中，在立秋这天的白天或夜晚，有预卜天气凉热之俗。还有以西瓜、四季豆尝新、奠祖的风俗。又有在立秋前一日，陈冰瓜，蒸茄脯，煎香薷饮等风俗。",
        "",
        "晒秋",
        "晒秋是一种典型的农俗现象，具有极强的地域特色。在湖南、江西、安徽等生活在山区的村民，由于地势复杂，村庄平地极少，只好利用房前屋后及自家窗台、屋顶架晒或挂晒农作物，久而久之就演变成一种传统农俗现象。",
        "",
        "贴秋膘",
        "民间流行在立秋这天以悬秤称人，将体重与立夏时对比。因为人到夏天，本就没有什么胃口，饭食清淡简单，两三个月下来，体重大都要减少一点。秋风一起，胃口大开，想吃点好的，增加一点营养，补偿夏天的损失，补的办法就是“贴秋膘”：在立秋这天各种各样的肉，炖肉烤肉红烧肉等等，“以肉贴膘”。",
        "",
        "秋忙会",
        "秋忙会一般在农历七八月份举行，是为了迎接秋忙而做准备的经营贸易大会。有与庙会活动结合起来举办的，也有单一为了秋忙而举办的贸易大会。其目的是为了交流生产工具，变卖牲口，交换粮食以及生活用品等。其规模和夏忙会一样，设有骡马市、粮食市、农具生产市、布匹、京广杂货市等。现今把这类集会，都叫做“经济贸易交流大会”。过会期间还有戏剧演出、跑马、耍猴等文艺节目助兴。"
      ]
    }
  ]
}`},{festival_name:"七夕",festival_desc:`{
  "disp_name" : "七夕",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "乞巧节、七巧节、七姐诞"
        },
        {
          "title" : "节日时间",
          "value" : "农历七月初七"
        },
        {
          "title" : "节日意义",
          "value" : "中国古代的妇女节"
        },
        {
          "title" : "流行地区",
          "value" : "中国与汉字文化圈诸国"
        }
      ],
      "detail" : [
        "七夕节始于汉朝，是流行于中国及汉字文化圈诸国的传统节日，起源于对自然的崇拜及妇女穿针乞巧，后被赋予牛郎织女的传说，极具浪漫色彩。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "唐宋诗词中，妇女乞巧也被屡屡提及，唐朝王建有诗说“阑珊星斗缀珠光，七夕宫娥乞巧忙”。据《开元天宝遗事》载：唐太宗与妃子每逢七夕在清宫夜宴，宫女们各自乞巧，这一习俗在民间也经久不衰，代代延续。",
        "",
        "后牛郎织女的爱情故事融入乞巧节，民间姑娘信以为真，于是每到农历七月初七，在牛郎织女“鹊桥会”时，姑娘们就会来到花前月下，抬头仰望星空，寻找银河两边的牛郎星和织女星，希望能看到他们一年一度的相会，乞求上天让自己也能像织女那样心灵手巧，祈祷自己也能有个称心如意的美满婚姻，久而久之便形成了七夕节。",
        "",
        "2006年5月20日，七夕节被国务院列入第一批国家非物质文化遗产名录。现在又被认为是“中国情人节”。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "穿针乞巧、兰夜斗巧、种生求子、为牛庆生、晒书晒衣、拜织女、拜魁星、染指甲、妇女洗发、结扎巧姑等"
      ]
    }
  ]
}`},{festival_name:"全国律师咨询日",festival_desc:`{
  "disp_name" : "全国律师咨询日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年的8月26日"
        },
        {
          "title" : "节日起源",
          "value" : "通过《中华人民共和国律师暂行条例》的日子"
        },
        {
          "title" : "设定时间",
          "value" : "1980年8月26日"
        }
      ],
      "detail" : [
        "全国律师咨询日，1980年8月26日，第五届全国人民代表大会常务委员会第15次会议通过《中华人民共和国律师暂行条例》。这是中华人民共和国关于律师制度的第一部法律，也标志着我国律师制度的恢复和重建。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "根据《中华人民共和国律师暂行条例》（1980年颁布），中华全国律师协会成立于1986年7月，是社会团体法人，是全国性的律师行业自律性组织，依法对律师实行行业管理。中华全国律师协会成立后，将通过《中华人民共和国律师暂行条例》这个特别的日子被定为“全国律师咨询日”。"
      ]
    },
    {
      "title" : "宗旨",
      "detail" : [
        "团结和教育会员维护宪法和法律的尊严，忠实于律师事业，恪守律师职业道德和执业纪律；维护会员的合法权益；提高会员的执业素质；加强行业自律，促进律师事业的健康发展，为依法治国，建设社会主义法治国家，促进社会的文明和进步而奋斗。",
        "凡中华人民共和国律师均为中华全国律师协会会员，地方律师协会为本会团体会员。中华全国律师协会现有团体会员31个（即各省、自治区、直辖市律师协会），个人会员近11万人。《中华人民共和国律师法》于1996年5月15日第八届全国人民代表大会常务委员会第十九次会议通过，2001年12月29日第九届全国人民代表大会常务委员会第二十五次会议通过《关于修改〈中华人民共和国律师法〉的决定》。"
      ]
    }
  ]
}`},{festival_name:"日本无条件投降日",festival_desc:`{
  "disp_name" : "日本无条件投降日",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "节日时间",
          "value" : "每年8月15日"
        },
        {
          "title" : "节日意义",
          "value" : "铭记历史、缅怀先烈"
        },
        {
          "title" : "节日类型",
          "value" : "纪念日"
        }
      ],
      "detail" : [
        "1945年8月14日，日本政府照会美、中、英、苏四国政府，接受《波茨坦公告》，无条件投降。重庆(战时首都)时间15日晨7时，四国政府在各自首都同时宣布日本政府已正式无条件投降。"
      ]
    },
    {
      "title" : "背景",
      "detail" : [
        "1945年8月15日，日本电台播出了裕仁天皇亲自宣读的《终战诏书》，宣布330万日军放下武器无条件投降。中国经过艰苦卓绝的14年抗战,终于取得胜利。"
      ]
    },
    {
      "title" : "历史意义",
      "detail" : [
        "象征着第二次世界大战的结束。"
      ]
    }
  ]
}`},{festival_name:"中元节",festival_desc:`{
  "disp_name" : "中元节",
  "area" : 0,
  "type" : 0,
  "cards" : [
    {
      "title" : "简介",
      "tags" : [
        {
          "title" : "别称",
          "value" : "盂兰盆节、鬼节、七月半"
        },
        {
          "title" : "节日时间",
          "value" : "农历七月十五日，部分在七月十四日"
        },
        {
          "title" : "流行地区",
          "value" : "中国以及汉字文化圈诸国"
        },
        {
          "title" : "节日意义",
          "value" : "敬祖"
        }
      ],
      "detail" : [
        "中元节就是我们俗称的鬼节，传言在这一天会地府会放出全部的鬼魂。中元节是祀鬼为中心的节日，是中国民间最大的祭祀节日之一。"
      ]
    },
    {
      "title" : "来历",
      "detail" : [
        "古人于中元节放河灯，道士建醮祈祷，乃是中国传统民俗，佛教与道教对这个节日的意义各有不同的解释，道教强调孝道；佛教则着重于为那些从阴间放出来的无主孤魂做“普渡”。中元节的源头，应与中国古代流行的土地祭祖有关。据说天官生日在正月十五日，称上元节。其主要职责是为人间赐福。地官生日在七月十五日，称中元节。其主要职责是为人间赦罪。水官生日在十月十五日，称为下元节。其主要职责是为人间解厄。",
        "",
        "中元节，在农历七月十五日，俗称七月半。传说该日地府放出全部鬼魂，民间普遍进行祭祀鬼魂的活动。凡有新丧的人家，例要上新坟，而一般在地方上都要祭孤魂野鬼，所以，它整个儿是以祀鬼为中心的节日，成了中国民间最大的鬼节。",
        "七月原是小秋，有若干农作物成熟，民间按例要祀祖，用新米等祭供，向祖先报告秋成。宋孟元老《东京梦华录》卷一说：“中元前一日，即买练叶，享祀时铺衬桌面，又买麻谷巢儿，亦是系在桌子脚上，乃告先祖秋成之意。”七月小秋作物成熟，讲究孝道的中国人，例要向先祖报告，并且请老祖宗尝新，所以七月例行祭祀祖先。"
      ]
    },
    {
      "title" : "习俗",
      "detail" : [
        "1.祭祀活动",
        "",
        "中元普渡",
        "中元是相当重要的民俗节日，不少人会在旧历的七月初一到七月卅日之间，择日以酒肉、糖饼、水果等祭品举办祭祀活动，以慰在人世间游玩的众家鬼魂，并祈求自己全年的平安顺利。",
        "",
        "祭祖",
        "祭祖节在阴历七月十五日，所以简称为“七月半”祭祖。此时盛夏已经过去，秋凉刚刚开始。民间相信祖先也会在此时返家探望子孙，故需祭祖。",
        "",
        "祭祀土地",
        "七月十五，民间还盛行祭祀土地和庄稼。将供品撒进田地。烧纸以后，再用剪成碎条的五色纸，缠绕在农作物的穗子上。传说可以避免冰雹袭击，获得大秋丰收。一些地方同时还要到后土庙进行祭祀。定襄县民俗将麻、谷悬挂门首。",
        "",
        "2.放河灯",
        "",
        "人们认为，中元节是鬼节，也应该张灯，为鬼庆祝节日。不过人鬼有别，所以中元张灯和上元张灯不一样。",
        "",
        "3.送羊节",
        "",
        "农历七月十五，还被称为“送羊节”。汉许慎《说文解字》中说：“羊，祥也。”甲骨文《卜辞》中也称羊通祥。可见在古代，羊这种动物，一向代表吉祥之意。旧京及华北地区的农村，民间流行七月十五由外祖父、舅舅给小外甥送活羊的习俗。传说此风俗与沉香劈山救母的传说有关。沉香劈山救母后，要追杀虐待其母的舅舅二郎神，二郎神为重修兄妹之好和舅甥之谊，每年的七月十五都要给沉香送一对活羊，据说这是取二郎神和沉香之母“杨”姓的谐音，以重结两家之好。从此民间留下了舅舅送活羊的习俗，后来逐渐演变为送一对面羊。"
      ]
    }
  ]
}`},{festival_name:"佛陀诞辰纪念日",festival_desc:`{
    "disp_name" : "佛陀诞辰纪念日",
    "area" : 0,
    "type" : 0,
    "cards" : [
    {
    "title" : "简介",
    "tags" : [
    {
    "title" : "节日时间",
    "value" : "农历四月初八"
    },
    {
    "title" : "节日别称",
    "value" : "佛诞节、佛诞日"
    },
    {
    "title" : "节日意义",
    "value" : "纪念佛祖诞辰"
    }
    ],
    "detail" : [
    "佛诞节，也就是说是佛教佛祖释迦牟尼诞辰，而且也是在不同国家中都有着不同的姓氏来去纪念佛祖的诞生。"
    ]
    },
    {
    "title" : "来历",
    "detail" : [
    "公元前1027年，农历四月初八，佛祖诞生在北印度，有天上九龙吐出香水为太子洗浴。因此典故，便有了庆祝的重要内容之一：以香水沐浴佛身。所以，浴佛节又名佛诞节。",
    "中国东汉时仅限于寺院举行，到魏晋南北朝时流传至民间。浴佛时间在史籍中有不同记载。蒙古族、藏族地区以四月十五日为佛诞日，即佛成道日、佛涅盘日，故在这天举行浴佛仪式。汉族地区佛教在北朝时多在农历四月初八举行，后不断变更、发展，北方改在农历十二月初八(腊八节)举行 ，南方则仍为农历四月初八举行 ，相沿至今（俗称“四月八”）。傣族的泼水节在傣历六月（夏历四月）举行 ，清晨，男女老幼沐浴更衣，到佛门寺院礼佛，就带有浴佛的性质。"
    ]
    },
    {
    "title" : "习俗",
    "detail" : [
    "1.中国大陆",
    "",
    "信众会到寺院，参与浴佛、献花、献果、供僧、供舍利、演戏等等节目。",
    "有些地方传统会将佛像请到街上游行，置于大象上，或以花车乘载。寺院会开放让信徒进入炷香、礼拜佛像、供养僧众。",
    "今日的华人地区，常会引入世间庆祝的习惯，如舞龙舞狮，张灯挂彩，甚至燃放炮竹。",
    "2.台湾地区",
    "",
    "台湾佛教徒普遍于农历四月初八举行庆祝及浴佛典礼。经佛教徒之争取，1999年起，中华民国内政部在国定纪念日中正式纳入佛陀诞辰纪念日，日期为农历四月八日，由有关机关、团体举行纪念活动。由于日期接近“母亲节”（五月第二个星期日），一些庆祝活动也会于母亲节举行。"
    ]
    }
    ]
}`},{festival_name:"国父诞辰纪念日",festival_desc:`{
    "disp_name" : "国父诞辰纪念日",
    "area" : 0,
    "type" : 0,
    "cards" : [
    {
    "title" : "简介",
    "tags" : [
    {
    "title" : "节日时间",
    "value" : "每年的11月12日"
    },
    {
    "title" : "节日别称",
    "value" : "孙中山诞辰纪念日"
    },
    {
    "title" : "节日起源",
    "value" : "国家机构设定"
    },
    {
    "title" : "节日意义",
    "value" : "纪念孙中山诞辰"
    }
    ]
    },
    {
    "title" : "来历",
    "detail" : [
    "孙中山，本名孙文，谱名德明，字载之，号日新，又号逸仙，幼名帝象，广东中山人，中国近代民主主义革命先驱，中华民国和中国国民党创始人，三民主义的倡导者。首举彻底反封建的旗帜，“起共和而终帝制”。1905年成立中国同盟会。",
    "1911年辛亥革命后被推举为中华民国临时大总统。1929年6月1日，根据其生前遗愿，陵墓永久迁葬于南京钟山中山陵。",
    "1940年，国民政府通令全国，尊称其为“中华民国国父”。他是一位在海峡两岸都受到敬重的革命家，中国国民党尊其为总理，中国共产党尊称孙中山为“中国近代民主革命的伟大先行者”。每年的11月12日便是孙中山先生诞辰纪念日。"
    ]
    },
    {
    "title" : "习俗",
    "detail" : [
    "每年的孙中山先生诞辰日，全国各地都会开展各种活动纪念孙中山诞辰。南京建有孙中山纪念馆。",
    "2013年11月12日，全国政协在北京中山公园中山堂举行仪式，纪念中国民主革命的伟大先行者孙中山先生诞辰147周年。"
    ]
    }
    ]
}`},{festival_name:"复活节",festival_desc:`{
    "disp_name": "复活节",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "英文名称",
                    "value": "Easter Day"
                },
                {
                    "title": "节日时间",
                    "value": "每年过春分月圆后的第一个星期天"
                },
                {
                    "title": "节日类型",
                    "value": "宗教节日"
                },
                {
                    "title": "节日意义",
                    "value": "为纪念耶稣基督"
                }
            ],
            "detail": [
                "基督徒认为，复活节象征着重生与希望，为纪念耶稣基督于公元30到33年之间被钉死在十字架之后第三天复活的日子。"
            ]
        },
        {
            "title": "来历",
            "detail": [
                "《圣经.新约全书》记载，耶稣被钉死在十字架上，第三天身体复活，复活节因此得名。复活节是基督宗教最重大的节日，重要性超过圣诞节，宗教起源与节期在以色列。按《圣经.马太福音》的说法，耶稣基督在十字架上受刑死后三天复活，因而设立此节。",
                "历史学家根据《圣经》和先进以色列人逾越节的日期，推算出在春分日（3月21日）之后月满后的第一个星期天就是《圣经》中讲到耶稣复活的日子。由于每年的春分日都不固定，所以每年的复活节的具体日期也是不确定的。但节期大致在3月22日至4月25日之间。"
            ]
        },
        {
            "title": "习俗",
            "detail": [
                "1.复活节彩蛋",
                "节日期间，人们按照传统习俗把鸡蛋煮熟后涂上红色，代表天鹅泣血，也表示生命女神降生后的快乐；大人孩子三五成群地聚在一处，用彩蛋作游戏；他们把彩蛋放在地上或土坡上滚，最后破裂者即为获胜，胜利者可以得到所有游戏者的彩蛋。",
                "2.宗教游行",
                "过去，在多数西方国家里，复活节一般要举行盛大的宗教游行。游行者身穿长袍，手持十字架，赤足前进。他们打扮成基督教历史人物，唱着颂歌欢庆耶稣复活。如今节日游行已失去往日浓厚的宗教色彩。节日游行洋溢着喜庆的气氛，具有浓烈的民间特色和地方特色。在美国，游行队伍中即有身穿牛仔服踩高跷的小丑，也有活泼可爱的卡通人物米老鼠。在英国，游行多以介绍当地的历史和风土人情为主，游行者化装成为苏格兰风笛乐队以及皇宫卫士，吸引了众多的游客。",
                "3.穿新衣",
                "复活节的到来还使人们纷纷换上新衣。过去基督教教徒会在节前去教堂行洗礼，然后穿上自己的新袍，庆祝基督的新生。穿戴一新的习俗保留至今，因为人们认为节日里不穿新衣是要倒运的。",
                "4.打扫",
                "复活节期间，人们还喜欢彻底打扫自己的住处，表示新生活从此开始。"
            ]
        }
    ]
}`},{festival_name:"农历新年",festival_desc:`{
    "disp_name": "农历新年",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "农历正月初一至初三"
                },
                {
                    "title": "节日意义",
                    "value": "农历新年的开始"
                }
            ],
            "detail": [
                "农历新年的历史悠久，据传起源于殷商时期。按照农历，正月初一称元日、元辰、元正、元朔、元旦等，俗称大年初一。农历节气非常准，新年到，意味着春天将要来临，万象更新草木复苏，新一轮播种和收获季节又要开始。"
            ]
        },
        {
            "title": "来历",
            "detail": [
                "关于春节的起源有说法诸多，其中有几种较具代表性的说法，春节源于腊祭、源于巫术仪式说、源于鬼节说等，其中最被普遍接受的说法是春节由虞舜时期兴起。",
                "公元前2000多年的一天，舜即天子位，带领着部下人员，祭拜天地。从此，人们就把这一天当作岁首。据说这就是农历新年的由来，后来叫春节。"
            ]
        },
        {
            "title": "习俗",
            "detail": [
                "1.谢灶",
                "腊月二十三日送灶神，澳门人谓之“谢灶”。澳门人给灶神按中国传统也用灶糖，说是用糖糊灶神之嘴，免得其到玉帝面前说坏话。",
                "2.守岁",
                "守岁是打麻将，看电视，叙旧聊天，共享天伦之乐；大概受西方圣诞节和情人节的影响，澳门人还争相购买一些吉祥的花木迎接新春，现今已成了一个澳门年俗。",
                "3.逛花市",
                "澳门在年宵兴办花市，多是桃花，水仙、盆竹、盆桔，花开富贵，祝报平安，鲜花瑞木兆示着新年的美好前程。澳门的花市办三天，这三天给奔波一年的澳门人无穷的慰藉。",
                "4.利市",
                "春节这天，澳门人讲究“利市”，“利市”就是红包，这天老板见到员工，长辈见到晚辈，甚至已婚人见到未婚人都得“利市”。“利市”纯脆是以示吉利。"
            ]
        }
    ]
}`},{festival_name:"圣母无原罪瞻礼",festival_desc:`{
    "disp_name" : "圣母无原罪瞻礼",
    "area" : 0,
    "type" : 0,
    "cards" : [
    {
    "title" : "简介",
    "tags" : [
    {
    "title" : "节日时间",
    "value" : "每年的12月8日"
    },
    {
    "title" : "宗教",
    "value" : "天主教"
    },
    {
    "title" : "节日意义",
    "value" : "庆祝圣母玛利亚获得无原罪的恩赐的一个瞻礼"
    }
    ],
    "detail" : [
    "在奥地利、哥斯达黎加、智利、西班牙、意大利、爱尔兰、马耳他和澳门等地都将此节日立为假期。"
    ]
    },
    {
    "title" : "来历",
    "detail" : [
    "节日可追溯自8世纪的“安纳怀孕玛丽亚”，庆祝日是12月9日。庆祝的对象是安纳老年怀孕，也庆祝圣母玛丽亚为完全圣洁，没有受原罪所玷染。后来节日传到意大利南部、英国及法国，节日的重点对象改变为圣母玛丽亚，强调玛丽亚从生命开始，巳不受原罪玷染。",
    "由于此思想没有《圣经》根据，故在12世纪时曾受到一些神学家的反对，其中著名的有：圣纳德。到13世纪时，由于方济各会支持此为教义思想，圣母始胎无原罪的神学思想逐渐被接受。在1477年，教宗西斯笃四世批准此节日在罗马教区举行。到1708年，教宗克莱孟十一世把节日定为整个教会应举行的庆节。最后，教宗良十三世提升此节日为第一等节日，有8日庆期。"
    ]
    }
    ]
}`},{festival_name:"耶稣受难日",festival_desc:`{
    "disp_name" : "耶稣受难日",
    "area" : 0,
    "type" : 0,
    "cards" : [
    {
    "title" : "简介",
    "tags" : [
    {
    "title" : "节日时间",
    "value" : "复活节的前第三天"
    },
    {
    "title" : "节日类型",
    "value" : "基督教节日"
    },
    {
    "title" : "节日意义",
    "value" : "纪念耶稣之“死"
    },
    {
    "title" : "设定时间",
    "value" : "公元4世纪"
    }
    ],
    "detail" : [
    "耶稣受难日是纪念耶稣生命中最高潮的一周(即“圣周”，又称“受难周”)中最重大的日子。这一周是从复活节前的一个星期日（棕榈主日——耶稣进入耶路撒城，民众手持棕榈枝欢迎他）开始，经复活节前的星期四(立圣餐日——纪念耶稣与门徒进“最后的晚餐”时设立圣餐礼)和星期五（受难日——纪念耶稣为世人的罪被钉十字架而死）到复活节（星期日）结束。“圣周”的主题也是《新约圣经》——耶稣基督的受死和复活。"
    ]
    },
    {
    "title" : "人物简介",
    "detail" : [
    "耶稣，也称为基督，意思是王或弥赛亚，2000年前生于以色列。现代文明把时间分为公元前（即基督前）和公元（即主年）的纪年方式来纪念耶稣的诞生。耶稣30岁以前是个木匠，过着犹太人的传统生活。耶稣三十岁以后开始教导众人，行神迹，并被记载下来。但他从来都没有远行到距离出生地200英里（大约320公里）以外的地方。耶稣在三年的时间里一直尽力保持低调，但他的名声还是传遍了全国，引起了设在以色列各省执政掌权的罗马官员和犹太领袖（宗教律法师）的注意。",
    "耶稣最受争议的就是他一直声称自己就是神，直接干犯了宗教律法，因而宗教领袖要求罗马政府处死他。罗马当局几次审讯都没发现耶稣触犯了罗马的法律。就连犹太人的领袖也承认，耶稣除了自称为神之外，完好地遵行了犹太人的律法。但他们还是以对政府不利为由，说服以色列南省的罗马总督彼拉多下令将耶稣处决。",
    "耶稣残忍地遭到严刑拷打，然后双手被人挂起来，钉在一根水平的木梁（十字架）上。这种行刑方法使得空气无法吸入肺部，三小时以后他就死了。然而，有五百多人却见证说，他三天以后从死里复活了，而且此后的40天里在以色列的南北两省走动。很多人认为这就足以证明耶稣自称为神是真实的。后来，耶稣返回了自己不久前遇害的城市耶路撒冷，见证人说他从那里离开了地球，升到天上去了。"
    ]
    },
    {
    "title" : "纪念活动",
    "detail" : [
    "1.受难日",
    "“受难日”是纪念耶稣之“死”。这一天信徒们身穿深色服装，参加礼拜仪式时言容肃穆。天主教徒在祷告时还要将蜡烛顺次熄灭，使教堂暗黑。仪式上要诵读《旧约·以赛亚书》里的几节经文。以赛亚是古代的希伯来先知，他似乎是预言了基督受难，天主教会称这段文字为“受苦仆人”经文。",
    "2.圣餐礼",
    "圣餐礼，是为纪念耶稣受难日而举行的一种仪式。这个仪式是耶稣在和门徒们共进“最后的晚餐”时创立的，当时他已经知道门徒中有人出卖了他。",
    "3.拜十字架",
    "天主教的仪式上还要奉行崇拜十字架的礼仪。该礼仪最早出现在耶路撒冷。十字架先被遮盖，随后逐渐显露，然后被安放在祭坛前，信徒们要对十字架进行跪拜。",
    "4.重走耶稣受难",
    "对耶稣受难日这个节日，天主教、东正教以及基督教圣公会、信义会和其他一些派别都有礼拜仪式。在许多地方，不同教派在这一天联合举行礼拜，表示团结合一。",
    "除了圣餐礼、晨祷、晚崇拜之外，受难日的游行活动在天主教徒聚居的社区也很常见。"
    ]
    }
    ]
}`},{festival_name:"追思节",festival_desc:`{
    "disp_name" : "追思节",
    "area" : 0,
    "type" : 0,
    "cards" : [
    {
    "title" : "简介",
    "tags" : [
    {
    "title" : "英文名称",
    "value" : "All Soul's Day"
    },
    {
    "title" : "节日别称",
    "value" : "万灵节、追思已亡节"
    },
    {
    "title" : "节日时间",
    "value" : "11月2日，逢星期日移至11月3日"
    },
    {
    "title" : "节日类型",
    "value" : "宗教节日"
    }
    ],
    "detail" : [
    "澳门11月2日是追思节,天主教会和圣公会的炼灵月的第二天，俗称“天主教的清明节”，是用作纪念亲人、炼灵等的瞻礼日。"
    ]
    },
    {
    "title" : "来历",
    "detail" : [
    "天主教纪念已去世教徒的节日。按其教义，在世信徒的代祷行为可以帮助那些在炼狱中涤罪的信徒亡灵，使之尽早涤尽罪恶、升入天堂。早期教会就有为亡者祈祷的风尚。6世纪时本笃会开始在圣灵降临节举行追思已亡修道者的活动。998年，克吕尼大修道院的修士圣奥迪劳（St.Odilo）将万圣节（11月1日）的后一天（11月2日）定为追思已亡教友之日，即“追思节”。如逢星期日，则移至11月3日。"
    ]
    },
    {
    "title" : "节日活动",
    "detail" : [
    "圣味基坟场会在当天举行追思弥撒。"
    ]
    }
    ]
}`},{festival_name:"和平纪念日",festival_desc:`{
    "disp_name" : "和平纪念日",
    "area" : 0,
    "type" : 0,
    "cards" : [
    {
    "title" : "简介",
    "tags" : [
    {
    "title" : "节日别称",
    "value" : "二二八和平纪念日"
    },
    {
    "title" : "节日时间",
    "value" : "每年2月28日"
    },
    {
    "title" : "节日意义",
    "value" : "纪念发生于1947年2月28日的二二八事件"
    }
    ],
    "detail" : [
    "二二八事件及当时政府事后的清乡工作，造成许多无辜台湾人民的死伤，也加深了台湾本省人和外省人间的族群及文化隔阂。"
    ]
    },
    {
    "title" : "来历",
    "detail" : [
    "在戒严时期，二二八事件向来是政府相当忌讳的话题，直到1980年代后期，才逐渐有要求政府为二二八事件平反及道歉的声音出现。1995年2月28日，当时的台湾“总统”李登辉代表台湾政府首次为二二八事件，向受难者家属及全体人民道歉。1996年，台北市长陈水扁宣布将2月28日定为纪念假日，并将台北新公园更名为“二二八和平公园”，台湾“行政院”亦于同年订定2月28日为“和平纪念日”，并为台湾假日。"
    ]
    },
    {
    "title" : "习俗",
    "detail" : [
    "2006年起，每年二二八和平纪念日当天，全台各机关学校、团体都要降半旗，以表示对二二八事件死难者最深的哀悼之意。在纪念日当天放假一日。"
    ]
    }
    ]
}`},{festival_name:"孔子诞辰纪念日",festival_desc:`{
    "disp_name" : "孔子诞辰纪念日",
    "area" : 0,
    "type" : 0,
    "cards" : [
    {
    "title" : "简介",
    "tags" : [
    {
    "title" : "节日时间",
    "value" : "每年9月28日"
    },
    {
    "title" : "节日意义",
    "value" : "纪念孔子诞辰"
    },
    {
    "title" : "人物成就",
    "value" : "开创儒家学派、编纂《春秋》、修订“五经”、创办私学"
    }
    ],
    "detail" : [
    "孔子是春秋时期的著名教育家，被尊为“至圣先师”。孔子被称为圣人，所以孔子诞辰日又被称为“中国的圣诞节”。中国古代祭孔，都以每年农历八月二十七作为孔子诞辰。民国期间，政府曾定夏历8月27日作为教师节，后又把它换算为西元9月28日。这已为传统习惯，人们从心理上已经认可它。"
    ]
    },
    {
    "title" : "来历",
    "detail" : [
    "关于孔子诞辰的早期记载，见于《公羊传》、《谷梁传》和《史记》。",
    "孔丘（公元前551年9月28日），字仲尼。排行老二，汉族人，春秋时期鲁国人。孔子是我国古代伟大的思想家和教育家，儒家学派创始人，世界最著名的文化名人之一。孔子创立的儒家学说以及在此基础上发展起来的儒家思想，对中华文明产生了深刻影响，是中国传统文化的重要组成部分。"
    ]
    },
    {
    "title" : "习俗",
    "detail" : [
    "在孔子诞辰日，中国大陆、香港、澳门、台湾、韩国、日本等地都有纪念活动。在文庙举行“祭孔典礼”是常见的正式纪念活动。"
    ]
    }
    ]
}`},{festival_name:"台湾光复节",festival_desc:`{
    "disp_name" : "台湾光复节",
    "area" : 0,
    "type" : 0,
    "cards" : [
    {
    "title" : "简介",
    "tags" : [
    {
    "title" : "节日别称",
    "value" : "光复节、光复日"
    },
    {
    "title" : "节日时间",
    "value" : "10月25日"
    },
    {
    "title" : "节日类型",
    "value" : "纪念历史"
    },
    {
    "title" : "设定地点",
    "value" : "中国台湾省"
    }
    ],
    "detail" : [
    "中日甲午战争后，日本对台湾实行殖民统治。第二次世界大战日本战败投降后，于1945年10月25日中国政府在台北市举行中国战区台湾省对日本的受降典礼。翌年8月，台湾省行政长官公署颁布命令，明订10月25日为“台湾光复节”以为纪念。"
    ]
    },
    {
    "title" : "来历",
    "detail" : [
    "台湾于甲午战争失败后，割让给日本，民国三十四年（即西元1945年）对日抗战胜利，台湾才告光复。同年九月九日在南京接受日本投降，台湾地区的受降典礼则于同年的十月二十五日在台北举行。后遂定每年的十月二十五日为台湾光复节。"
    ]
    },
    {
    "title" : "习俗",
    "detail" : [
    "依据台湾地区《纪念日及节日实施办法》，台湾光复节属于不放假的节日，而由相关机关，团体，学校举行庆祝活动。每年的台湾光复节，全省都会张灯结彩，扩大庆祝。"
    ]
    }
    ]
}`},{festival_name:"天穿日",festival_desc:`{
    "disp_name" : "天穿日",
    "area" : 0,
    "type" : 0,
    "cards" : [
    {
    "title" : "简介",
    "tags" : [
    {
    "title" : "节日时间",
    "value" : "一般为正月二十"
    },
    {
    "title" : "节日意义",
    "value" : "纪念女娲补天拯救人类的纪念日"
    },
    {
    "title" : "流行地区",
    "value" : "广东、福建、台湾等客家人聚居地"
    }
    ],
    "detail" : [
    "天穿日是元宵之后的第一个汉族传统节日，时间有正月初十、二十、二十三、二十五等几种说法，以正月二十为多。天穿节又叫补天节，源于女娲补天的神话故事。"
    ]
    },
    {
    "title" : "来历",
    "detail" : [
    "关于天穿节的由来，东晋以降的资料多说是源自女娲补天的传说。女娲之名，始见战国成书的《楚辞·天问》：“女娲有体，孰制匠之？”而女娲补天的神话，出自西汉淮南王刘安与其门客共撰《淮南子》。",
    "天穿节的日期与女娲补天神话主旨是一致的。叶春声指出：“考‘天穿’日即二十四节气中的‘雨水’日，一般在每年阳历二月十九日，阴历正月十九至二十三日左右，是日‘天一生水’，多半有雨，故谓之‘天穿’。"
    ]
    },
    {
    "title" : "习俗",
    "detail" : [
    "1、煎饼“补天穿”",
    "“二十日天穿，二十一日地穿”。天穿日与雨水相近，汉族民间为祈祷苍天保佑“雨水之日，屋无穿漏”，每逢天穿节便用红丝线系上煎饼，将其掷于屋顶上方，寓意为“补天漏”或“补天穿”。有祈风调雨顺之意，也是对女娲补天的一种效仿。有些地方在此日还将煎饼撕成小块，抛向天空，意为补天，再撒些于地，意为补地。",
    "2、天穿射",
    "古时还有在节日那天到郊外举行射箭活动的习俗，有人认为这也隐含着以武功继承女娲杀黑龙、断鳌足、拯生民于水火之伟绩的意思。",
    "3、甜畸扎针",
    "岭南、福建、台湾等地的客家妇女在此日把甜畸做成大圆块，以油煎后，上面扎针，也是“补天穿”之意。"
    ]
    }
    ]
}`},{festival_name:"辛亥革命纪念日",festival_desc:`{
    "disp_name" : "辛亥革命纪念日",
    "area" : 0,
    "type" : 0,
    "cards" : [
    {
    "title" : "简介",
    "tags" : [
    {
    "title" : "节日时间",
    "value" : "每年公历10月10日"
    },
    {
    "title" : "设定时间",
    "value" : "1912年9月（民国初年)"
    },
    {
    "title" : "流行地区",
    "value" : "中国及海外华侨聚居区"
    },
    {
    "title" : "节日意义",
    "value" : "纪念推翻满清封建帝制和中华民国成立"
    }
    ],
    "detail" : [
    "辛亥革命，是指发生于中国农历辛亥年（清宣统三年），即公元1911年至1912年初，旨在推翻清朝专制帝制、建立共和政体的全国性革命。"
    ]
    },
    {
    "title" : "来历",
    "detail" : [
    "清帝退位",
    "1912年2月2日，清廷举行御前会议，会上决定退位，以取得革命党人的优待条件。",
    "袁世凯上台",
    "1912年2月13日，孙中山提出辞呈，向临时参议院推荐袁世凯接任。2月15日临时参议院选袁世凯任临时大总统，议决临时政府仍设在南京，并电袁前来受职；未受任前，政务仍由孙中山继续执行。"
    ]
    },
    {
    "title" : "影响",
    "detail" : [
    "废除帝制",
    "辛亥革命以反对君主专制制度、建立资产阶级共和国为目标，是一次比较完全意义上的资产阶级民主革命。正如毛泽东指出的:“中国反帝反封建的资产阶级民主革命，正规地说起来，是从孙中山开始的。”辛亥革命的领袖们，则认识到要救国必须革命，要想救亡图存，只能是推翻封建皇权。",
    "思想解放",
    "辛亥革命冲破了封建思想的牢笼。自汉代董仲舒以来的中国思想文化，君臣关系是“三纲五常”中三纲之首。皇帝不仅是政治上的权威，也是文化中诸多价值观念的重要依据与合法性的来源。辛亥革命不但从行动上坚决地打倒皇帝，并从舆论上对君权神授观念和皇权思想进行鞭挞和批判，极大地促进了人民的思想解放，为探索救国兴邦的道路打开了新的思想境界。",
    "除旧布新",
    "辛亥革命促进了社会习俗的除旧布新。辛亥革命的实际政治影响远远超出了人们的预料。政治体制的革故鼎新带来了民国初年的中国社会面貌为之一新。正是这些新的变化，打开了中国通向现代化的闸门。",
    "经济发展",
    "辛亥革命为民族资本主义的发展创造了有利的条件。民国建立以后，国内实业集团纷纷成立，开工厂、设银行成为风气。民族资本主义的经济力量在短短的几年内就有了显著的增长，无产阶级队伍也迅速壮大起来。",
    "此外，从辛亥革命各省独立响应开始，中国进入长期的分裂混乱之中，除了袁世凯曾在二次革命之后曾短暂大致统一全国之外，其他中华民国的政权都未能直接统治整个中国(如号称统一的国民政府只能收到五个省的税收)，一直要到1950年代，才由中国共产党使中国大陆再度统一。长期的分裂及战乱，对于中国的经济发展及现代化建设造成很大的阻碍。"
    ]
    }
    ]
}`},{festival_name:"祖父母节",festival_desc:`{
    "disp_name" : "祖父母节",
    "area" : 0,
    "type" : 0,
    "cards" : [
    {
    "title" : "简介",
    "tags" : [
    {
    "title" : "节日时间",
    "value" : "8月第4个星期日"
    },
    {
    "title" : "节日起源",
    "value" : "世界有许多国家及地区订有“祖父母节”"
    },
    {
    "title" : "设立机构",
    "value" : "台“教育部”"
    }
    ],
    "detail" : [
    "台“教育部”公布调查显示，台湾超过6成孙子孙女不记得祖父母生日，超过1成孙子女不知道祖父母名字。“教育部”将首度发起“祖父母节”，盼能唤起晚辈对长者的重视。"
    ]
    },
    {
    "title" : "对象",
    "detail" : [
    "“祖父母节”对象不仅是“内祖父母”，也包括“外祖父母”，或敬若为祖父母的长者。"
    ]
    },
    {
    "title" : "相关数据",
    "detail" : [
    "中正大学成人及继续教育学系副教授李蔼慈发表的“2010跨世代间互动关系”调查指出，80%祖父母能完全说出孙子女的名字，但只有36.7%的孙子女能完全说出祖父母的名字，10.3%孙子女则完全不知道祖父母的名字。调查中显示，近4成的祖父母完全记得孙子女的生日，但仅有5.8%的孙子女完全记得祖父母的生日，且超过6成的孙子女完全不记得祖父母生日。",
    "而据香港《大公报》报道，香港一项调查发现，虽然年轻人有意识认为应多与祖父母相处，但却欠缺主动和实际行动。当中，78%表示应多抽时间陪伴他们，但有85%称不会与他们同住，逾70%更不会主动约会或致电给他们。"
    ]
    }
    ]
}`},{festival_name:"香港特别行政区成立纪念日",festival_desc:`{
    "disp_name" : "香港特别行政区成立纪念日",
    "area" : 0,
    "type" : 0,
    "cards" : [
    {
    "title" : "简介",
    "tags" : [
    {
    "title" : "节日时间",
    "value" : "7月1日"
    },
    {
    "title" : "流行地区",
    "value" : "香港"
    },
    {
    "title" : "节日性质",
    "value" : "纪念日"
    }
    ],
    "detail" : [
    "1997年7月1日，中华人民共和国主席江泽民在香港向全世界郑重宣告：中华人民共和国香港特别行政区政府成立。因此这一天也成为香港回归纪念日。"
    ]
    },
    {
    "title" : "背景",
    "detail" : [
    "香港是中国的领土，为了完成祖国统一的大业，中国人民收回香港的主权不可非议。但是，采取什么样的方式收回香港主权才是最有利的。“一个国家，两种制度”是邓小平同志集中党中央的集体智慧，经过深思熟虑提出来的，以和平方式实现国家统一的伟大战略构想，是中外历史上史无前例的伟大创举。",
    "1984年12月19日,中国政府和英国首相撒切尔夫人在北京正式签订《中英关于香港问题的联合声明》，规定中华人民共和国政府1997年7月1日对香港恢复行使主权。",
    "1997 年7月1日香港回归变成现实，但是这一伟大创举的设计师——我们敬爱的邓小平同志却离开了我们，他老人家看不到自己亲自设计的“和平统一，一国两制”愿望的实现。至此，我们更加缅怀邓小平同志的丰功伟绩，我相信，他老人家会同我们一道庆祝这一举世瞩目的日子——1997年7月1日香港回归。"
    ]
    }
    ]
}`},{festival_name:"佛诞",festival_desc:`{
    "disp_name" : "佛陀诞辰纪念日",
    "area" : 0,
    "type" : 0,
    "cards" : [
    {
    "title" : "简介",
    "tags" : [
    {
    "title" : "节日时间",
    "value" : "农历四月初八"
    },
    {
    "title" : "节日别称",
    "value" : "佛诞节、佛诞日"
    },
    {
    "title" : "节日意义",
    "value" : "纪念佛祖诞辰"
    }
    ],
    "detail" : [
    "佛诞节，也就是说是佛教佛祖释迦牟尼诞辰，而且也是在不同国家中都有着不同的姓氏来去纪念佛祖的诞生。"
    ]
    },
    {
    "title" : "来历",
    "detail" : [
    "公元前1027年，农历四月初八，佛祖诞生在北印度，有天上九龙吐出香水为太子洗浴。因此典故，便有了庆祝的重要内容之一：以香水沐浴佛身。所以，浴佛节又名佛诞节。",
    "中国东汉时仅限于寺院举行，到魏晋南北朝时流传至民间。浴佛时间在史籍中有不同记载。蒙古族、藏族地区以四月十五日为佛诞日，即佛成道日、佛涅盘日，故在这天举行浴佛仪式。汉族地区佛教在北朝时多在农历四月初八举行，后不断变更、发展，北方改在农历十二月初八(腊八节)举行 ，南方则仍为农历四月初八举行 ，相沿至今（俗称“四月八”）。傣族的泼水节在傣历六月（夏历四月）举行 ，清晨，男女老幼沐浴更衣，到佛门寺院礼佛，就带有浴佛的性质。"
    ]
    },
    {
    "title" : "习俗",
    "detail" : [
    "1.中国大陆",
    "",
    "信众会到寺院，参与浴佛、献花、献果、供僧、供舍利、演戏等等节目。",
    "有些地方传统会将佛像请到街上游行，置于大象上，或以花车乘载。寺院会开放让信徒进入炷香、礼拜佛像、供养僧众。",
    "今日的华人地区，常会引入世间庆祝的习惯，如舞龙舞狮，张灯挂彩，甚至燃放炮竹。",
    "2.台湾地区",
    "",
    "台湾佛教徒普遍于农历四月初八举行庆祝及浴佛典礼。经佛教徒之争取，1999年起，中华民国内政部在国定纪念日中正式纳入佛陀诞辰纪念日，日期为农历四月八日，由有关机关、团体举行纪念活动。由于日期接近“母亲节”（五月第二个星期日），一些庆祝活动也会于母亲节举行。"
    ]
    }
    ]
}`},{festival_name:"香港回归纪念日",festival_desc:`{
    "disp_name" : "香港特别行政区成立纪念日",
    "area" : 0,
    "type" : 0,
    "cards" : [
    {
    "title" : "简介",
    "tags" : [
    {
    "title" : "节日时间",
    "value" : "7月1日"
    },
    {
    "title" : "流行地区",
    "value" : "香港"
    },
    {
    "title" : "节日性质",
    "value" : "纪念日"
    }
    ],
    "detail" : [
    "1997年7月1日，中华人民共和国主席江泽民在香港向全世界郑重宣告：中华人民共和国香港特别行政区政府成立。因此这一天也成为香港回归纪念日。"
    ]
    },
    {
    "title" : "背景",
    "detail" : [
    "香港是中国的领土，为了完成祖国统一的大业，中国人民收回香港的主权不可非议。但是，采取什么样的方式收回香港主权才是最有利的。“一个国家，两种制度”是邓小平同志集中党中央的集体智慧，经过深思熟虑提出来的，以和平方式实现国家统一的伟大战略构想，是中外历史上史无前例的伟大创举。",
    "1984年12月19日,中国政府和英国首相撒切尔夫人在北京正式签订《中英关于香港问题的联合声明》，规定中华人民共和国政府1997年7月1日对香港恢复行使主权。",
    "1997 年7月1日香港回归变成现实，但是这一伟大创举的设计师——我们敬爱的邓小平同志却离开了我们，他老人家看不到自己亲自设计的“和平统一，一国两制”愿望的实现。至此，我们更加缅怀邓小平同志的丰功伟绩，我相信，他老人家会同我们一道庆祝这一举世瞩目的日子——1997年7月1日香港回归。"
    ]
    }
    ]
}`},{festival_name:"七七事变",festival_desc:`{
    "disp_name" : "七七事变",
    "area" : 1,
    "type" : 1,
    "cards" : [
               {
                   "title" : "简介",
                   "tags" : [
                             {
                                 "title" : "发生时间",
                                 "value" : "1937年7月7日"
                             },
                             {
                                 "title" : "别称",
                                 "value" : "卢沟桥事变"
                             }
                             ],
                   "detail" : [
                               "1937年7月7日夜，日军在北平西南卢沟桥附近演习时，借口一名士兵“失踪”，要求进入宛平县城搜查，遭到中国守军第29军严辞拒绝。日军遂向中国守军开枪射击，又炮轰宛平城。第29军奋起抗战。这就是震惊中外的七七事变，又称卢沟桥事变。七七事变是日本帝国主义全面侵华战争的开始，也是中华民族进行全面抗战的起点。"                               ]
               },
               {
                   "title" : "历史背景",
                   "detail" : [
                               "1931年9月18日，日军挑起九一八事变，占领中国东北，并一手炮制了伪“满洲国”。日军占领东北后，将魔爪伸向华北，阴谋策动“华北自治”。1936年6月，日本天皇批准了新的《帝国国防方针》及《用兵纲领》，公然宣称要实现控制东亚大陆和西太平洋，最后称霸世界的野心。8月7日，日本五相会议通过了《国策基准》，具体地规定了侵略中国，进犯苏联，待机南进的战略方案。同时，还根据1936年度侵华计划，制定了1937年侵华计划。从1936年5月起，日本陆续增兵华北，不断制造事端，频繁进行军事演习，华北局势日益严峻。"
                               ]
               },
               {
                   "title" : "事件影响",
                   "detail" : [
                               "“卢沟桥事变”标志着中华全民族抗日战争的开始。 中国人民经过流血牺牲、艰苦抗战，终于在1945年8月15日以日本宣布无条件投降赢得了民族解放战争的伟大胜利。”"
                               ]
               }
               ]
}
`},{festival_name:"寒衣节",festival_desc:`{
    "disp_name": "寒衣节",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "农历十月初一"
                },
                {
                    "title": "节日别称",
                    "value": "十月朝，祭祖节，冥阴节等"
                },
                {
                    "title": "节日活动",
                    "value": "祭奠先人"
                }
            ],
            "detail": [
                "寒衣节，每年农历十月初一，又称“十月朝”、“祭祖节”、“冥阴节”，民众称为鬼头日，是我国传统的祭祀节日，相传起源于周代。这一天，特别注重祭奠先亡之人，谓之送寒衣。寒衣节与春季的清明节，秋季的中元节，并称为一年之中的三大“鬼节”。同时，这一天也标志着严冬的到来，所以也是为父母爱人等所关心的人送御寒衣物的日子。"
            ]
        },
        {
            "title": "节日传说",
            "detail": [
                "关于祭祖节还有这样一个蔡伦造纸和蔡莫烧纸的故事。",
                "中国民间传说蔡伦刚发明出纸时，买卖很好。蔡伦的嫂子慧娘就让丈夫蔡莫向蔡伦学习造纸。回来开了一家造纸厂，但蔡莫造的纸，质量不好，卖不出去，二人很着急。后来，慧娘想了一个办法，摆脱了困境。",
                "某天的半夜，慧娘假装因急病而死。蔡莫伤心欲绝，在她的棺材前悲哀不已，他边烧纸边哭诉：“我跟弟弟学造纸，不用心，造的纸质量太差了，竟把你气病了。我要把这纸烧成灰，来解心头之恨。”他烧完了又抱来纸烧，烧了一阵之后，只听见慧娘在棺材里喊：“把门开开，我回来了。”这可把人们吓呆了，人们把棺材打开，慧娘装腔作势地唱道：阳间钱能行四海，阴间纸在做买卖。不是丈夫把纸烧，谁肯放我回家来？",
                "慧娘唱了很多遍说：“刚才我是鬼，现在我是人，大家不要害怕。我到了阴间，阎王就让我推磨受苦，丈夫送了钱，就有许多小鬼帮我，真是有钱能使鬼推磨。三曹官也向我要钱，我把全部的钱都送了他，他就开了地府后门，放我回来了。”蔡莫装作糊涂：“我并没有送钱给你啊？”慧娘说：“你烧的纸就是阴间的钱。”这样一说，蔡莫又抱了几捆纸，烧给他的父母。",
                "在场的人们一听，便以为烧纸有很大的好处，都向蔡莫买纸。慧娘慷慨地送给乡亲，这事一传十，十传百，远近的乡亲都来买蔡家的纸，烧给自己死去的亲人。不到两天，积压的纸被抢购一空。慧娘“还阳”那一天正是农历十月初一，因此，后人都在十月初一祭祀祖先，上坟烧纸，以示对祖先的怀念。",
                "十月初一，有的地方还有祭牛王的习俗。相传这一习俗起源于春秋秦国。某日，秦文公命人砍倒一棵梓树，梓树忽然化为一头牛。秦文公令人追杀。牛一下跳入水中，再也没有上来。人们就立“怒特祠”祭祀此牛神。怒特，是高大健壮、威风凛凛的公牛。这样的公牛，在人们的心目中，有着驱疫辟邪、保护牛类的功能。"
            ]
        },
        {
            "title": "风俗习惯",
            "detail": [
                "农历十月初一，谓之“十月朝“。我国自古以来就有新收时祭奠祖宗的习俗，以示孝敬，不忘本。古人们也在农历十月初一用黍矐祭祀祖先。农历十月初一祭祀祖先，有家祭、也有墓祭，南北方都是如此，今天江南的许多地区，还有十月初一祭新坟的习俗。",
                "农历十月初一，也是冬天的第一天，此后天气渐渐寒冷，人们怕在冥间的祖先灵魂缺衣少穿，因此，祭祀时除了食物、香烛、纸钱等一般供物外，还有一种不可缺少的供物-冥衣。在祭祀时，人们把冥衣焚化给祖先，叫作“送寒衣“。",
                "后来，有的地方，“烧寒衣”的习俗，就有了一些变迁，不再烧寒衣，而是“烧包袱”人们把许多冥纸封在一个纸袋之中，写上收者和送者的名字以及相应称呼，这就叫“包袱”。有寒衣之名，而无寒衣之实。人们认为冥间和阳间一样，有钱就可以买到许多东西。"
            ]
        }
    ]
}`},{festival_name:"上巳节",festival_desc:`{
    "disp_name": "上巳节",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "农历三月三日"
                },
                {
                    "title": "节日别称",
                    "value": "祓禊、修禊、禊祭，或者单称禊。"
                }
            ],
            "detail": [
                "上巳(sì)节，俗称三月三，汉民族传统节日，该节日在汉代以前定为三月上旬的巳日，后来固定在夏历三月初三。传统的上巳节在农历三月的第一个巳日，也是祓禊的日子，即春浴日。上巳节又称女儿节。"
            ]
        },
        {
            "title": "来历",
            "detail": [
                "上巳节可追溯到追念伏羲氏。伏羲和其妹女娲抟土造人，繁衍后代，豫东一带尊称伏羲为“人祖爷”，在淮阳（伏羲建都地）建起太昊陵古庙，由农历二月二到三月三为太昊陵庙会，善男信女，南船北马，都云集陵区，朝拜人祖。农历三月三，还是传说中王母娘娘开蟠桃会的日子。有一首北京竹枝词是这样描述蟠桃宫庙会盛况的：“三月初三春正长，蟠桃宫里看烧香；沿河一带风微起，十丈红尘匝地。”传说西王母原是中国西部一个原始部落的保护神。她有两个法宝：一是吃了可以长生不老的仙丹，二是吃了能延年益寿的仙桃——蟠桃。神话传说中的嫦娥，就是偷吃了丈夫后羿弄来的西王母仙丹后飞上月宫的。此后，在一些志怪小说中，又把西王母说成是福寿之神。",
                "古时以三月第一个巳日为“上巳”，汉代定为节日。“是月上巳，官民皆絜(洁)于东流水上，曰洗濯祓除，去宿垢疢(病)，为大絜”(《后汉书?礼仪志上》)。后又增加了临水宴宾、踏青的内容。魏晋以后，上巳节改为三月三，后代沿袭，遂成汉族水边饮宴、郊外游春的节日。"
            ]
        },
        {
            "title": "节日活动",
            "detail": [
                "（一）高禖",
                "在上巳节活动中，最主要的活动是祭祀高禖，即管理婚姻和生育之神。",
                "（二）祓禊",
                "上巳节还有祓禊、修禊或沐浴活动。沐浴是为了去灾。",
                "（三）曲水流觞",
                "在上巳节中还有临水浮卵、水上浮枣和曲水流觞三种活动。在上述三种水上活动中，以临水浮卵最为古老，它是将煮熟的鸡蛋放在河水中，任其浮移，谁拾到谁食之。",
                "（四）会男女",
                "在上巳节中有一种奇特的风俗，即“会男女”。这种节日中的野合，由来已久，本来自氏族时期的季节性婚配——野合群婚，后来也有残存，如广西左江崖画、成都汉墓画像砖上都有男女野合图。后来的记载也多见此俗。",
                "（五）蟠桃会",
                "道教兴起后，认为农历三月三为西王母蟠桃会之日。"
            ]
        }
    ]
}`},{festival_name:"尾牙",festival_desc:`{
    "disp_name": "尾牙",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "农历腊月十六"
                },
                {
                    "title": "节日起源",
                    "value": "闽南商人"
                },
                {
                    "title": "流行区域",
                    "value": "台湾及福建地区"
                },
                {
                    "title": "相关人物",
                    "value": "福德正神（即土地公）"
                }
            ],
            "detail": [
                "尾牙是闽南地区的民间传统节日，商家一年活动的“尾声”，也是普通百姓春节活动的“先声”。每月的初二、十六，是闽南商人祭拜土地公神的日子，称为“做牙”。二月二日为最初的做牙，叫做“头牙”；十二月十六日的做牙是最后一个做牙，所以叫“尾牙”。"
            ]
        },
        {
            "title": "来历",
            "detail": [
                "尾牙节这一节日主要流行于东南沿海，尤其是闽台地区。但是它却的的确确是土生土长的华夏传统节日，这一节日与中国人的土地神崇拜有关。",
                "「牙」是中国民间祭拜土地公的仪式。传统习俗中，作生意的人在农历每月初二及十六日，都必须准备一些三牲四果、香枝与纸钱等、祭拜地基主（土地最早的主人）以及土地公，在牲礼当中不可少的是一只雄鸡拔毛煮熟的白斩鸡，这是用来象徵生意兴隆的。",
                "农历十二月十六日为一年中最後一次的祭祀活动俗称「尾牙」。古时有一诗句「一年夥计酬杯酒，万户香烟谢土神」，这是旧时诗人述的尾牙情景。民间在二月初二土地公诞辰祭拜之後，东家即宴请伙计，到了十二月十六日「尾牙」这天，商家们为了感谢土地公一年的照顾，都会准备丰富的祭品来酬谢土地公，而祭拜完的东西就会犒赏给员工们。"
            ]
        },
        {
            "title": "习俗",
            "detail": [
                "（1）福建地区把做“尾牙”之后的日子，即农历十二月十七日到二十二日作为赶工结帐时间。所以，也称二十二日为“尾期”。“尾期”前可以向各处收凑新旧账，延后则就要等到新年以后才收帐了。",
                "所以“尾牙”的饭吃完后，就有几天好忙。过了“尾期”，即使是身为债主的硬去收账，也可能会被对方痛骂一场，说不定还会被揍，也不能有分毫怨言。",
                "（2）商人和农人在“尾牙”这一天，除了供奉神明，也要招待自家的雇工与仆婢，对于来年是否继续雇用一个人，也要在尾牙作最后的决定。所以，这算是慰劳日，又是礼貌相送日。",
                "（3）薄饼是“尾牙”的必备食物。"
            ]
        }
    ]
}`},{festival_name:"圆周率日",festival_desc:`{
    "disp_name": "圆周率日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "3月14日"
                },
                {
                    "title": "英文名称",
                    "value": "Pi Day"
                },
                {
                    "title": "节日活动",
                    "value": "派对"
                },
                {
                    "title": "节日意义",
                    "value": "庆祝圆周率π"
                }
            ],
            "detail": [
                "圆周率日是一年一度的庆祝数学常数π的节日，时间被定在3月14日。通常是在下午1时59分庆祝，以象征圆周率的六位近似值3.14159，有时甚至精确到26秒，以象征圆周率的八位近似值3.1415926；习惯24小时记时的人在凌晨1时59分或者下午3时9分（15时9分）庆祝。全球各地的一些大学数学系在这天举办派对。"
            ]
        },
        {
            "title": "发展历史",
            "detail": [
                "目前已知最早的大型以π为主题的庆祝活动是Larry Shaw 组织，1988年3月14日在旧金山科学博物馆举办的。Larry Shaw 是旧金山科学博物馆的一名物理学家，那一天他带着博物馆的员工和参与者一起围绕这博物馆纪念碑做3又1/7圈（22/7，π的近似值之一）的圆周运动，并一起吃水果派，分享有关π的知识。之后，旧金山科学博物馆继承了这个传统，在每年的这一天都举办庆祝活动。",
                "美国麻省理工学院首先倡议将3日14日定为国家圆周率日。2009年美国众议院正式通过一项无约束力决议（Non-binding resolution）（HRES 224），将每年的3月14号设定为“圆周率日”（National Pi day）。",
                "2010年的圆周率日，谷歌为表庆祝，推出了π的Google Doodle，图中元素颇丰，不仅包含了圆周率的定义，π值范围，圆周周长与面积公式，甚至还包含了球体积公式以及圆周的外切和内切多边形示意图。"
            ]
        },
        {
            "title": "庆祝方式",
            "detail": [
                "庆祝圆周率日的方式有很多，比如吃派，喝一种名字中含有“pi”的鸡尾酒（pi?a colada），玩和pi 发音相近的彩罐游戏（pi?ata）。 ",
                "这一天常见的庆祝方式包括：",
                "（1）阅读π的悠久历史，学习有关π的数学知识。",
                "（2）背诵π。π是无理数，很多人通过背诵π小数点后面的数字来表现记忆力。日本人Akira Haraguchi在2005年将π背到了小数点后第 83431 位。",
                "（3）计算圆周率。2009年，法国著名程序员Fabr ice Bellard用个人PC，耗时116天，计算到了PI的小数点后第2.7万亿位打破了由超级计算机保持的圆周率运算记录。同时Fabrice Bellard在圆周率算法方面也有着惊人的成就，1997年他提出了最快圆周率算法公式。",
                "（4）观看电影《死亡密码 π》（1998年讲述一个偏执数学家故事的惊悚电影）、《少年派的奇幻漂流》（一个名为pi的少年的冒险故事）。",
                "（5）做一个以π为主题的派。",
                "（6）欣赏以π为主题的音乐，例如圆周率之歌。"
            ]
        }
    ]
}`},{festival_name:"龙抬头",festival_desc:`{
    "disp_name": "龙抬头",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "农历二月初二"
                },
                {
                    "title": "流行地区",
                    "value": "中国"
                },
                {
                    "title": "节日类型",
                    "value": "传统节日"
                }
            ],
            "detail": [
                "龙抬头节又称春龙节、春花节。民间传说在唐朝武则天当政时期，因得罪玉皇大帝而被罚三年无雨，人间河干沟竭，树枯苗死，人们难以过活。司管天河的龙王心中不忍，在阴历二月初二这天私自给人间降雨，因而受到责罚。人们用炒熟的玉米花、豆子供献龙王，报答其救命之恩，因此感动了玉皇大帝，允许龙王继续为人间降雨。以后二月二祭龙王，相沿下来成为节日。"
            ]
        },
        {
            "title": "民间传说",
            "detail": [
                "传说每逢农历二月初二，是天上主管云雨的龙王抬头的日子；从此以后，雨水会逐渐增多起来。因此，这天就叫“春龙节”。 中国北方广泛的流传着“二月二，龙抬头；大仓满，小仓流。”的民谚。",
                "每当春龙节到来，中国北方大部分地区在这天早晨家家户户打着灯笼到井边或河边挑水，回到家里便点灯、烧香、上供。旧时，人们把这种仪式叫做“引田龙”。这一天，家家户户还要吃面条、炸油糕、爆玉米花，比作为“挑龙头”、“吃龙胆”、“金豆开花，龙王升天，兴云布雨，五谷丰登”，以示吉庆。",
                "农谚“二月二，龙抬头”，传说古时候关中地区久旱不雨，玉皇大帝命令东海小龙前去播雨。小龙贪玩，一头钻进河里不再出来。有个小伙子，到悬崖上采来了“降龙水”，搅浑河水。小龙从河中露出头来与小伙子较量，小龙被击败，只好播雨。其实，所谓“龙抬头”指的是经过冬眠，百虫开始苏醒。所以俗话说“二月二，龙抬头，蝎子、蜈蚣都露头。”"
            ]
        },
        {
            "title": "习俗",
            "detail": [
                "各地龙抬头节的民俗活动很多，内容十分丰富，主要有：",
                "1.祭龙",
                "在过去，龙抬头节是祭祀龙神的日子，每年的这一天，人们都要到龙神庙或水畔焚香上供祭祀龙神，祈求龙神兴云化雨，保佑一年五谷丰登。不过，在很多地区，特别是南方，人们也把二月初二作为“土地公生日”，举行社祭，祭祀土地神。",
                "2.撒灰",
                "这一节俗，由来已久，直到今天，许多乡村地区仍然流行。撒灰所用之灰，一般是柴灰，也有用石灰或用糠的。具体做法，各地不同，大致为：将灰撒在门前，谓之“拦门辟灾”；将灰撒在墙角，意在“辟除百虫”；将灰撒在院中，作大小不等的圆圈，并象征性地放置一些五谷杂粮，称做“围仓”或“打灰囤”，以祝丰年；将灰撒在井边，呼曰“引龙回”，以求风调雨顺。撒法各地不尽相同，一般是从井边开始，一路逶迤撒来，步入宅厨，环绕水缸，灰线蜿蜒不断，甚为有趣。",
                "3.熏虫",
                "进入农历二月，天气渐暖，各种昆虫开始活动，有些昆虫对人的健康是有害的，所以二月二这一天，人们纷纷摊烙煎饼、燃烧熏香，希望凭借烟气驱走毒虫。",
                "4.击房梁",
                "就是用木棍或者竹竿敲击房梁，以惊走蛇、蝎等毒虫，毋使为害。有的地方流行敲击炕沿，目的与敲击房梁相同。",
                "5.理发",
                "传统民间有种说法，曰：正月剃头（理发）死舅舅。此说虽无根据，也很荒谬，但影响却极深，因此，在春节前无论多忙，人们都要抽出空来理一次发，然后就要一直等到 “龙抬头”的日子了。二月二理发，俗称“剃龙头”，据说可以带来一年的好运，因此，“是日，多剃发”。"
            ]
        }
    ]
}`},{festival_name:"世界水日",festival_desc:`{
    "disp_name": "世界水日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "3月22日"
                },
                {
                    "title": "节日类型",
                    "value": "公益性节日"
                },
                {
                    "title": "设立时间",
                    "value": "1993年1月18日"
                },
                {
                    "title": "节日意义",
                    "value": "唤起公众的节水意识，加强水资源保护"
                }
            ],
            "detail": [
                "世界水日宗旨是唤起公众的节水意识，加强水资源保护。为满足人们日常生活、商业和农业对水资源的需求，联合国长期以来致力于解决因水资源需求上升而引起的全球性水危机。1977年召开的“联合国水事会议”，向全世界发出严重警告：水不久将成为一个深刻的社会危机，石油危机之后的下一个危机便是水。1993年1月18日，第四十七届联合国大会作出决议，确定每年的3月22日为“世界水日”。"
            ]
        },
        {
            "title": "背景",
            "detail": [
                "“世界水日”的确立，是有背景的：一切社会和经济活动都极大地依赖淡水的供应量和质量，随着人口增长和经济发展，许多国家将陷入缺水的困境，经济发展将受到限制；推动水的保护和持续性管理需要地方一级、全国一级、地区间、国际间的公众意识。",
                "世界水日是为了节省地球水资源。解除我们国家以及全世界缺水的状态。"
            ]
        },
        {
            "title": "目的",
            "detail": [
                "为了唤起公众的水意识，建立一种更为全面的水资源可持续利用的体制和相应的运行机制，1993年1月18日，第47届联合国大会根据联合国环境与发展大会制定的《21世纪行动议程》中提出的建议，通过了第193号决议，确定自1993年起，将每年的3月22日定为“世界水日”，以推动对水资源进行综合性统筹规划和管理，加强水资源保护，解决日益严峻的缺水问题。同时，通过开展广泛的宣传教育活动，增强公众对开发和保护水资源的意识。让我们节约用水，不要让最后一滴水成为我们的眼泪！"
            ]
        }
    ]
}`},{festival_name:"世界知识产权日",festival_desc:`{
    "disp_name": "世界知识产权日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "4月26日"
                },
                {
                    "title": "起源时间",
                    "value": "2001年"
                },
                {
                    "title": "流行地区",
                    "value": "世界"
                }
            ],
            "detail": [
                "世界知识产权日是由世界知识产权组织设立，定在每年的4月26日，旨在促进各界树立尊重知识、崇尚科学，保护知识产权的意识，营造鼓励知识创新和保护知识产权的法律环境。每年世界知识产权组织会确定一个主题，各成员国应围绕当年主题在世界知识产权日期间举办各种宣传活动，以达到设立该主题日的目的。"
            ]
        },
        {
            "title": "宣传标志",
            "detail": [
                "世界知识产权日宣传标志主体字母为“I”、“P”、“R”，是知识产权英文表达法Intellectual Property Rights的首写字母，三个字母变形组成一个活跃的人体形状，意为“知识以人为本，保护知识产权，维护权利人的利益”。标志包括主体字母、“宣传周”日期及中英文名称三部分，体现与世界知识产权日的联系。"
            ]
        },
        {
            "title": "节日活动",
            "detail": [
                "世界知识产权组织鼓励各成员国和组织发来关于其本国为庆祝世界知识产权日所举行的各大事件和活动的简短报告。每年的知识产权日都给大家提供一个机会，与世界各地的人们共同铭记、讨论和展示知识产权制度怎样为音乐和艺术的繁荣作出贡献，怎样驱动技术创新，帮助改变世界。",
                "中国活动",
                "自2001年起，4月26日“世界知识产权日”期间，中国有关部门都会组织活动，以增强全社会的知识产权保护意识。从2007年开始，全国整规办、知识产权局等九部门决定把每年的4月19日至26日作为“保护知识产权宣传周”，在全国范围内联合开展活动，共同推动知识产权的宣传和保护工作。"
            ]
        }
    ]
}`},{festival_name:"世界微笑日",festival_desc:`{
    "disp_name": "世界微笑日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "5月8日"
                },
                {
                    "title": "节日别称",
                    "value": "国际微笑日"
                },
                {
                    "title": "设立机构",
                    "value": "世界精神卫生组织"
                }
            ],
            "detail": [
                "世界微笑日，让我们嘴角上翘，我们用微笑对抗地心引力带来的面容衰老，也用微笑释放善意，与世界和睦相处。在你对别人的微笑里，也会看到世界对你微笑。这样美好的特权，何必吝啬！"
            ]
        },
        {
            "title": "来历",
            "detail": [
                "1948年，国际红十字会规定将国际红十字会创始人亨利·杜南的生日—5月8日为世界红十字日，也即“世界微笑日”。从1948年起，每年的5月8日，世界精神卫生组织把这天订立为“世界微笑日”，希望通过微笑促进人类身心健康，同时在人与人之间传递愉悦与友善，增进社会和谐。",
                 "世界微笑日，是唯一一个庆祝人类行为表情的节日，这一天会变得特别温馨，在对别人的微笑中，你也会看到世界对自己微笑起来。"
            ]
        },
        {
            "title": "有关微笑",
            "detail": [
                "作用",
                "1.微笑不仅仅使人心情舒畅、精神振奋，而且能够消除忧虑、稳定情绪，可以使动脉弛缓，加快血液循环，起到与胸部、肠胃、肩膀周围的上体肌肉运动一样的效果。研究证明，笑有强心健脑、促进呼吸、有助美容、改善消化、缓解疼痛、降压健身和防治疾病等多种保健功能。",
                "2.微笑，不单是种表情，更是一种感情，是拉近人们之间距离的法宝，是融洽人际关系的催化剂.微笑是无声的问候，它是心灵相通的阳光，传递着亲切与尊重的讯息，为深入沟通与交往创造温馨和谐的氛围。",
                "3.微笑，传递给人的是愉快和友善的情感信息，沟通着人们的情感，化解着人际之间的矛盾，代表着和美的道德指引。真正甜美的微笑，是和蔼的体现、亲切的象征，往往比言语更真实、更富魅力，也是一个人良好综合素养的自然流露。面露平和欢愉的微笑，说明心情愉快，充实满足，乐观向上，善待人生，这样的人才会产生吸引别人的魅力。",
                "4.经调查研究，皱一下眉头需要牵动20块肌肉，而笑一笑只需要牵动13块肌肉，由此可见，笑一笑可以延缓衰老，同时，也给人一整天的愉悦心情。"
            ]
        }
    ]
}`},{festival_name:"世界环境保护日",festival_desc:`{
    "disp_name": "世界环境保护日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
			"detail": [
               "世界环境日为每年的6月5日，反映了世界各国人民对环境问题的认识和态度，表达了人类对美好环境的向往和追求，是联合国鼓励全世界对环境的认识和行动的主要工具，也是联合国促进全球环境意识、提高对环境问题的注意并采取行动的主要媒介之一。世界环境日自1973年以来每年举办一次，该日也成为促进可持续发展目标环境方面进展的重要平台。在联合国环境规划署（UNEP）的领导下，每年有150多个国家参加。来自世界各地的大公司、非政府组织、社区、政府和名人采用世界环境日品牌来倡导环境事业 。",
			   "联合国环境规划署在每年6月5日选择一个成员国举行“世界环境日”纪念活动，发表《环境现状的年度报告书》及表彰“全球500佳”，并根据当年的世界主要环境问题及环境热点，有针对性地制定“世界环境日”主题，总称世界环境保护日。"
            ],
            "tags": [
                {
                    "title": "别名",
                    "value": "世界环境保护日、世界环保日"
                },
                {
                    "title": "节日时间",
                    "value": "每年的6月5日"
                },
                {
                    "title": "节日类型",
                    "value": "国际日"
                },
                {
                    "title": "节日意义",
                    "value": "强调保护和改善人类环境的重要性"
                }
            ]
        },
        {
            "title": "设立宗旨",
            "detail": [
                "1972年6月5日联合国在瑞典首都斯德哥尔摩召开了联合国人类环境会议，会议通过了《人类环境宣言》，并提出将每年的6月5日定为“世界环境日”。同年10月，第27届联合国大会通过决议接受了该建议。世界环境日（World Environment Day），是联合国促进全球环境意识、提高政府对环境问题的注意并采取行动的主要媒介之一。",
                "联合国系统和各国政府，每年都在6月5日的这一天开展各项活动来宣传与强调保护和改善人类环境的重要性。"
            ]
        }
    ]
}`},{festival_name:"世界保健日",festival_desc:`{
    "disp_name": "世界保健日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "10月13日"
                },
                {
                    "title": "设定时间",
                    "value": "1950年"
                },
                {
                    "title": "设立机构",
                    "value": "联合国"
                },
                {
                    "title": "流行地区",
                    "value": "全球"
                }
            ],
            "detail": [
                "每年的10月13日是世界保健日。每年都要选择一个与公共卫生领域相关的主题，旨在提高全世界人对这一保健领域的认识，借此激发起一项长期宣传活动，促使该领域工作的开展。“世界保健日”期间，包括中国在内的世界卫生组织各会员国，都举行纪念活动，推广和普及有关健康知识，以提高人民健康水平。"
            ]
        },
        {
            "title": "发展历史",
            "detail": [
                 "1946年2月，联合国经社理事会决定召开卫生方面的国际会议，同年6—7月召开第一届世界卫生大会，世界卫生组织正式成立，总部设在日内瓦，并于7月22日正式批准了由61个国家签署的世界卫生组织《世界卫生组织法》。为了纪念《世界卫生组织组织法》批准日，第一届世界卫生大会决定，每年10月13日为“世界保健日”，倡议各国举行各种纪念活动，第二届世界卫生大会决定自1950年起，依《世界卫生组织组织法》正式确定每年10月13日“世界保健日”。"
            ]
        },
        {
            "title": "保健窍门",
            "detail": [
                "1.放松精神：可以让肌肉、骨骼、器官自然地进行恢复和修整。",
                "2.科学饮食：吃饭讲究营养，决不按口味挑食。",
                "3.下蹲通络：具体做法是——两脚并拢，周身中正，两肩微微前扣，两臂自然下垂，百会上领，下颏回收，两眼轻轻闭合。",
                "4.动养方式：通俗的讲动养就是根据每个人的具体情况通过运动、营养有机结合的处方达到保健的目的。比如说：每周固定2-3次运动，每次持续2.5个小时，以持续性的有氧运动（慢跑、快走、瑜伽等），饮食最基本的是根据身体和四次的变化去吃食物，讲究荤素、干湿、红白搭配。"
            ]
        }
    ]
}`},{festival_name:"联合国日",festival_desc:`{
    "disp_name": "联合国日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "10月24日"
                },
                {
                    "title": "发起时间",
                    "value": "1942年"
                },
                {
                    "title": "发起者",
                    "value": "中国在内50个国家"
                },
                {
                    "title": "发起机构",
                    "value": "联合国大会"
                }
            ],
            "detail": [
                "联合国日是1947年联合国大会为纪念《联合国宪章》正式生效和联合国正式成立而确定的节日。节日日期为每年10月24日，主题为维持国际和平与安全，发展国际间友好关系，促进经济、社会、文化及人类福利等方面的国际合作。"
            ]
        },
        {
            "title": "发展历史",
            "detail": [
                "1943年10月30日，中、美、英、苏四国在莫斯科发表《普遍安全宣言》，提出有必要建立一个普遍性的国际组织。",
                "1944年8月21日至10月7日，苏、英、美三国和中、英、美三国先后在华盛顿敦巴顿橡树园举行会谈，根据《普遍安全宣言》的精神，草拟了建立新的国际组织的章程，并通过了《关于建立普遍性国际组织的建议案》。在谈到这个国际组织的名称时，三国都同意沿用1942年“共同宣言”所用过的”联合国”一词，把未来的国际组织命名为“联合国”，这个提议最后获得了旧金山制宪会议批准。",
                "1945年2月，由罗斯福、丘吉尔和斯大林参加的雅尔塔会议，又进一步讨论了成立联合国的问题。会议公报宣布，为了维护世界和平与安全，反法西斯同盟国将尽快建立一个普遍性的国际组织，并决定同年4月25日在美国旧金山召开联合国制宪会议。根据这一决定，由美、英、中、苏、法5国发起，并邀请《联合国家共同宣言》各签字国参加的联合国制宪大会，1945年4月25日，来自50个国家(波兰因故未参加)280多名代表和1700多名顾问、专家及记者聚集一堂，在美国旧金山召开联合国国际组织会议。中国代表团由10人组成，其中包括中国共产党的代表董必武。会议以敦巴顿橡胶园会议的建议为基础，经过两个多月的讨论，起草了《联合国宪章》。6月25日，代表们在旧金山歌剧院一致通过了《联合国宪章》。6月26日，制宪会议在旧金山退伍军人纪念堂礼堂进行最后一项，也是此次大会最庄重的议程——与会代表在宪章上签字。按照大会商定的程序，中国代表团第一个签字。正午时分，董必武用毛笔在宪章上写下了自己的名字。各国代表都签署了这个宪章，其后波兰也在宪章上补签，签署宪章的51个国家成为联合国的创始会员国。1945年10月24日，中、法、苏、英、美和其他多数签字国递交批准书后，宪章开始生效，联合国正式成立。",
                "1947年，联合国大会决定，10月24日为“联合国日”。",
                "1971年，大会建议会员国把这一天作为公共假日。"
            ]
        }
    ]
}`},{festival_name:"京东家电节",festival_desc:`{
    "disp_name": "家电节",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "9月25日"
                },
                {
                    "title": "节日意义",
                    "value": "京东家电用实在的价格和全方位的服务，提供给消费者最优质的购买体验。"
                }
            ],
            "detail": [
                "每年的9月25日是京东家电节，经过数年的发展家电促销已经成为电商行业具有一定影响力的购物节之一，今年的家电节将为消费者提供爆品家电大折扣，领券满减大实惠，超级红包大放送，放肆买任性购等优惠活动，更有金牌服务保障购买无忧。全品类一站式的购物节，十一家电看京东，省时省力更省心。"
            ]
        }
    ]
}`},{festival_name:"中国农民丰收节",festival_desc:`{
    "disp_name": "中国农民丰收节",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "每年农历秋分"
                },
                {
                    "title": "设定时间",
                    "value": "2018年6月21日"
                },
                {
                    "title": "节日意义",
                    "value": "党中央对“三农”工作的高度重视，对广大农民的深切关怀"
                }
            ],
            "detail": [
                "2018年是中国改革开放40周年，中国的改革是从农村发端，举办“中国农民丰收节”可以展示农村改革发展的巨大成就，展示中国农民的伟大创造，增强加快建设社会主义现代化农业强国的决心和信心。"
            ]
        },
        {
            "title": "背景",
            "detail": [
                "农民是中国人口的最大多数，是中国共产党执政的基础，广大农民在革命、建设、改革等各个历史时期都做出了重大贡献。习近平总书记强调，任何时候都不能忽视农业、忘记农民、淡漠农村。中央决定，在脱贫攻坚的关键时期、全面建成小康社会的决胜阶段、实施乡村振兴战略的开局之年，设立“中国农民丰收节”，顺应了新时代的新要求、新期待，将极大调动起亿万农民的积极性、主动性、创造性，提升亿万农民的荣誉感、幸福感、获得感，汇聚起脱贫攻坚、全面建成小康社会、实施乡村振兴战略，加快推进农业农村现代化的磅礴力量。"
            ]
        },
        {
            "title": "意义",
            "detail": [
                "设立中国农民丰收节，是习近平总书记主持召开中央政治局常委会会议审议通过，由国务院批复同意的。这是第一个在国家层面专门为农民设立的节日。设立一个节日，由中央政治局常委会专门审议，这是不多见的，充分体现了以习近平同志为核心的党中央对“三农”工作的高度重视，对广大农民的深切关怀。"
            ]
        }
    ]
}`},{festival_name:"中国医师节",festival_desc:`{
    "disp_name": "中国医师节",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "每年8月19日"
                },
                {
                    "title": "设定时间",
                    "value": "2017年11月3日"
                },
               {
                    "title": "设立机构",
                    "value": "国务院"
                },
                {
                    "title": "节日意义",
                    "value": "国家设立“中国医师节”，对于加强医师职业规范、加强行业自律，更好地改善医患关系，其积极意义不容忽视。"
                }
            ],
            "detail": [
                "2017年11月3日，国务院通过了卫计委（今卫健委）关于“设立中国医师节”的申请，同意自2018年起，将每年的8月19日设立为“中国医师节”。"
            ]
        },
        {
            "title": "背景",
            "detail": [
                "2016年8月19日，全国卫生与健康大会明确了卫生与健康工作在党和国家事业全局中的重要位置和新时代卫生与健康工作方针。大会提出把人民健康放在优先发展的战略地位，努力全方位全周期保障人民健康。以此为标志设立“中国医师节”，体现了党和国家对1100多万卫生与健康工作者的关怀和肯定。"
            ]
        },
        {
            "title": "历程",
            "detail": [
                "2017年11月3日，国务院同意设立“中国医师节”。国务院批复同意自2018年起，将每年8月19日设立为“中国医师节”，明确具体工作由国家卫生计生委（今国家卫健委）商有关部门组织实施。国家卫计委相关负责人表示，将会同有关部门组织好“中国医师节”的各项活动，激励广大卫生与健康工作者大力弘扬“敬佑生命、救死扶伤、甘于奉献、大爱无疆”的崇高精神，进一步推动全社会形成尊医重卫的良好氛围，加快推进健康中国战略深入实施。"
            ]
        }
    ]
}


`},{festival_name:"中国航天日",festival_desc:`{
    "disp_name": "中国航天日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名称",
                    "value": "中国航天日"
                },
                {
                    "title": "外文名称",
                    "value": "Space Day of China"
                },
                {
                    "title": "节日时间",
                    "value": "每年4月24日"
                },
                {
                    "title": "首届时间",
                    "value": "2016年"
                },
               {
                    "title": "设立机构",
                    "value": "中华人民共和国国务院"
                },
                {
                    "title": "目的",
                    "value": "铭记历史，传承精神"
                }
            ],
            "detail": [
                "中国航天日，是为了纪念中国航天事业成就，发扬中国航天精神而计划设立的一个纪念日。首个航天日，习主席要求科学家帮助实现中国成为全球天空巨头的梦想。设立“中国航天日”，就是要铭记历史、传承精神，激发全民尤其是青少年崇尚科学、探索未知、敢于创新的热情。"
            ]
        },
        {
            "title": "由来",
            "detail": [
                "1970年4月24日，中国第1颗人造地球卫星东方红1号发射成功，拉开了中国人探索宇宙奥秘、和平利用太空、造福人类的序幕。以此为标志设立“中国航天日”，旨在宣传我国和平利用外层空间的一贯宗旨，大力弘扬航天精神，科学普及航天知识，激发全民族探索创新热情，唱响“探索浩瀚宇宙、发展航天事业、建设航天强国”的主旋律，凝聚实现中国梦航天梦的强大力量。"
            ]
        },
        {
            "title": "意义",
            "detail": [
                "设立“中国航天日”是大力弘扬以爱国主义为核心的中华民族精神，构建社会主义核心价值体系，激励中华儿女热爱祖国、崇尚科学，增强中华民族凝聚力和向心力的迫切需要。",
"设立“中国航天日”，使航天人及所有科技工作者能够拥有自己的纪念日，可有效激励航天人以及全国的科技工作者，以中国航天创业史为教材，以航天英雄为榜样，在航天精神、“两弹一星”精神、载人航天精神的鼓舞激励下，献身航天，献身科学，不断攀登新的科学高峰，再创新的辉煌。同时也引导全国人民铭记航天人为中国科技发展和综合国力增强所做出的牺牲和奉献，关心和支持祖国航天事业的未来发展。",
"设立“中国航天日”，可有效地激发全国青少年热爱祖国，崇尚科学，崇尚科学家的热情，引导青少年树立正确的价值观，学习航天人自主创新、自强不息、艰苦奋斗、勇攀高峰的民族精神，积极投身科技事业，努力探索与利用外层空间，促进人类进步和社会发展，造福全人类，以所学的知识报效祖国。"
            ]
        }
    ]
}`},{festival_name:"全国儿童预防接种宣传日",festival_desc:`{
    "disp_name": "全国儿童预防接种宣传日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名称",
                    "value": "全国儿童预防接种宣传日"
                },
                {
                    "title": "节日时间",
                    "value": "每年4月25日"
                },
                {
                    "title": "目的",
                    "value": "促进儿童预防接种"
                }
            ],
            "detail": [
                "计划免疫宣传日就是“4.25”全国儿童预防接种宣传日，每年的这一天，既是广大儿童的节日，也是全国计划免疫工作者的节日。 1986年6月20日，经国务院批准，由卫生部、国家教育委员会、全国妇联、广播电影电视部、经济贸易部、国家民委联合发布通知，成立全国儿童计划免疫工作协调小组和每年4月25五日开展全国儿童预防接种日活动，其近期目标是实现国家“七五”计划提出的1990年争取“使全国免疫接种率达到85%以上”的目标。"
            ]
        },
        {
            "title": "宣传简介",
            "detail": [
                "九十年代以来，每年选定一个重点内容作为当年全国儿童预防接种日活动的主题，尤其是紧紧围绕WHO“全球消灭脊髓灰质炎”的行动纲领的要求，将消灭脊髓灰质炎作为“巩固和发展我国计划免疫工作成果，保护儿童健康”的一项重要目标。全国儿童预防接种日活动每一年主题的确立对全国各级政府、卫生行政部门和各级各类卫生防疫机构普及计划免疫和提高儿童免疫接种率起到了积极的推动作用。通过全国儿童预防接种宣传日活动的开展，使广大市民免疫预防的自觉性不断提高，也使每个儿童家长了解并深深体会到“计划免疫是每个孩子都应享有的权利”。“全国儿童预防接种日活动”使全国儿童获得高水平的免疫种率成为现实，为保护儿童健康、造福子孙后代，提高我国的人口素质做出了重要的贡献。"
            ]
        },
        {
            "title": "由来",
            "detail": [
                "儿童免疫预防接种，关系到下一代的健康成长，涉及千家万户。",
"80年代后，我国政府积响应世界卫生组织提出的扩大计划免疫规划（EPI，Expanded Programme on Immunization）并积极开展工作。",
"为了加强对该工作的组织实施，进一步提高影响力度，促进社会各界人士积极参与，保证免疫接种率，有效地防止相应传染病的发生和流行，达到最终消灭疾病的目的，1986年经国务院批准确定，成立了全国计划免疫协调领导小组，并确定每年4月25日为全国儿童预防接种宣传日。",
"至此，我国已建立了完善的免疫接种程序：在婴儿出生24小时内，即进行乙肝疫苗接种，并在婴儿1周岁之前，完成程序中的所有基础免疫。"
            ]
        }
    ]
}`},{festival_name:"世界舞蹈日",festival_desc:`{
    "disp_name": "世界舞蹈日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名称",
                    "value": "世界舞蹈日"
                },
                {
                    "title": "节日时间",
                    "value": "每年4月29日"
                },
                {
                    "title": "设定时间",
                    "value": "1982年"
                }
            ],
            "detail": [
                "世界舞蹈日是4月29日，由联合国教科文组织下的国际舞蹈委员会（CID）推广，1982年国际舞蹈委员会最先提出。"
            ]
        },
        {
            "title": "简介",
            "detail": [
                "这个日期是为了纪念现代芭蕾舞之父Jean-Georges Noverre。"
            ]
        },
        {
            "title": "目标",
            "detail": [
                "世界舞蹈日的目标是增加大众对舞蹈的重要性的注意，同时希望各国政府在从初等教育到高等教育中均为舞蹈提供空间。尽管舞蹈是人类文化不可缺少的一部分，它不获全球的官方机构重视。CID的主席Alkis Raftis教授在2003年世界舞蹈日讯息说：“在全球约二百个国家中，过半数的国家的法律文件（不论有关好还是坏的）没有提及舞蹈。州的财政预算没有资金来支持这种艺术形式。无论是私人还是公共，都不存在舞蹈教育这回事。”"
            ]
        },
        {
            "title": "纪念活动",
            "detail": [
                "2005年的世界舞蹈日以初等教育为重心。CID鼓励舞蹈团体联络所在地的教育部门，向它们提出所有学校书写有关舞蹈的文章、绘画舞蹈的情形和在街上跳舞等以庆祝此日。"
            ]
        }
    ]
}`},{festival_name:"国际不打小孩日",festival_desc:`{
    "disp_name": "国际不打小孩日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "别名",
                    "value": "绝体罚日、无巴掌日"
                },
                {
                    "title": "英文名",
                    "value": "International Spankout Day"
                },
                {
                    "title": "节日时间",
                    "value": "每年4月30日"
                },
                {
                    "title": "节日意义",
                    "value": "宣导反体罚的儿童人权观念"
                },
                {
                    "title": "设立机构",
                    "value": "Center For Effective Discipline"
                }
            ],
            "detail": [
                "国际不打小孩日（每年4月30日），由美国反体罚组织“有效管教中心（Center For Effective Discipline）”1998年发起的。节日通过各种活动，宣导反体罚的儿童人权观念。全世界已有上百个国家及民间组织参与此盛事。"
            ]
        },
        {
            "title": "背景",
            "detail": [
                "在美国，尤其是在一些拉美、亚裔移民家庭以及是一些收入比较低，受教育程度比较低的黑人家庭，打孩子的现象相对于白人家庭来说还是比较普遍的，甚至存在严重的虐待、性侵等情况。正是因为美国的确存在虐待孩子的情况，美国儿童人权组织有效管理中心在发起了反对体罚儿童的运动。"
            ]
        },
        {
            "title": "节日文化",
            "detail": [
                "设立这一“节日”的目的是为了宣传反体罚的儿童人权观念，引起社会的重视。",
"请来试试看，至少在今天不要打小孩，或者你将会发现，今天过后的每一天，你都不需要打小孩了。"
            ]
        }
    ]
}`},{festival_name:"世界新闻自由日",festival_desc:`{
    "disp_name": "世界新闻自由日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "别名",
                    "value": "新闻自由日"
                },
                {
                    "title": "英文名",
                    "value": "World Press Freedom Day"
                },
                {
                    "title": "节日时间",
                    "value": "每年5月3日"
                },
                {
                    "title": "设立机构",
                    "value": "联合国"
                }
            ],
            "detail": [
                "5月3日是世界新闻自由日（World Press Freedom Day）。世界新闻自由日是由联合国创建，旨在提高新闻自由的意识，并提醒政府尊重和提升言论自由的权利，该权利铭记在世界人权宣言第19条中。2013年5月3日是“世界新闻自由日”设立20周年。联合国5月2日举行特别活动纪念。"
            ]
        },
        {
            "title": "节日概述",
            "detail": [
                "联合国大会于1993年12月20日作出决定，宣布5月3日为世界新闻自由日。这一行动源于联合国教科文组织大会。\\n5月3日是世界新闻自由日，在这一天，全世界的人们都被告知：言论自由权被侵犯的现象仍然存在；他们被提醒：有许多新闻工作者，因为提供每日新闻而被捕入狱，甚至英勇牺牲。\\n世界新闻自由日让世界再次重温《世界人权宣言》第19条所阐述的保护言论自由和新闻自由基本权利的重要意义。没有这些权利，就无法实现民主和发展。独立、自由和多元化的媒体能够确保透明度和落实问责制，促进社会参与和法制并有助于消除贫困，因此对民主社会的良政发挥着至关重要的作用。"
            ]
        }
    ]
}`},{festival_name:"世界红十字日",festival_desc:`{
    "disp_name": "世界红十字日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "别名",
                    "value": "红十字日"
                },
                {
                    "title": "英文名",
                    "value": "World Red Cross"
                },
                {
                    "title": "节日时间",
                    "value": "每年5月8日"
                },
                {
                    "title": "设立机构",
                    "value": "国际联合会执行委员会"
                }
            ],
            "detail": [
                "世界红十字与红新月日（World Red Cross and Red Crescent Day），是由红十字会与红新月会国际联合会（International Federation of Red Cross and Red Crescent Sieties）、红十字国际委员会 (International Committee of the Red Cross )以及190个国家红十字会和红新月会共同举办的纪念日，1948年，经国际联合会执行委员会同意，红十字创始人亨利·杜南先生的生日5月8日被定为红十字日。在这一天，红十字国际委员会、红十字会与红新月会国际联合会及各国红十字会和红新月会都以各种形式纪念这一日子，以表示红十字运动的国际性以及红十字人道工作不分种族、宗教及政治见解的特性。"
            ]
        },{
            "title": "发展过程",
            "detail": [
                "红十字国际委员会（International Committee of The Red Cross）创建于1863年，是个独立的人道主义机构，也是红十字会的创始团体。在武装冲突或动乱场合，红十字国际委员会作为中立者，主动地根据日内瓦公约，努力保护和救助战争和内乱的受害者，从而对世界和平做出贡献。红十字会与红新月会国际联合会创建于1919年，前身是红十字会与红新月会协会。它的职责是促进各国红会开展人道工作、协调各国红会救济自然灾害者的行动，以及救助武装冲突地区以外的难民。国际联合会通过这些工作来推动世界和平。",
"1864年8月，红十字会在日内瓦再次举行会议，签署了第一个《改善战地武装部队伤者病者境遇之日内瓦公约》，即红十字会公约。从此，红十字会正式得到国际公约的承认和保护。由于宗教和历史等原因，一些伊斯兰国家类似的组织采用红新月或红狮和太阳作为标志。",
"红十字会或红新月会都是同一性质的志愿救护、救济团体，在世界上被认为是一个超越国界、超越时空的非政治、非宗教的人道主义团体。初创时旨在在战时照顾伤员，后成为一般地预防灾难、救济难民的机构。世界上许多国家都成立了红十字会或红新月会。在国际上，它们的联合组织是红十字会与红新月会国际联合会。"
            ]
        },
        {
            "title": "基本原则",
            "detail": [
                "人道、公正、中立、独立、志愿服务、普遍。"
            ]
        }
    ]
}`},{festival_name:"碘缺乏病防治日",festival_desc:`{
    "disp_name": "碘缺乏病防治日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "每年5月15日"
                },
                {
                    "title": "设立机构",
                    "value": "国务院"
                },
                {
                    "title": "流行地区",
                    "value": "中国"
                },
                {
                    "title": "设定时间",
                    "value": "1993年9月"
                },
                {
                    "title": "节日意义",
                    "value": "消除碘缺乏病"
                }
            ],
            "detail": [
                "1993年9月国务院召开“中国2000年消除碘缺乏病动员会”，会议并提出：5月5日为全国碘缺乏病防治日，借以加大力宣传，提高人们对防治碘缺乏病的认识。1994年起每年的5月5日定为全国碘缺乏病宣传日。国家设立五一长假后，碘缺乏病防治日（5月5日）包含在了五一长假里，不便于宣传、教育工作的开展。经过卫生部与碘缺乏病防治相关部委的协调，防治碘缺乏病日自2000年起改为5月15日。"
            ]
        },{
            "title": "宣传口号",
            "detail": [
                "一、坚持食用碘盐，预防出生缺陷\\n二、坚持食用碘盐，提高人口素质\\n三、防治碘缺乏病，保护母婴健康\\n四、食用碘盐是最好的补碘方式\\n五、抵制非碘盐，保护群众健康\\n六、净化食盐市场，保护群众利益\\n七、扶贫先增智，增智先补碘\\n八、依法普及碘盐，构建和谐社会\\n九、预防碘缺乏，建设新农村。"
            ]
        }
    ]
}`},{festival_name:"世界电信日",festival_desc:`{
    "disp_name": "世界电信日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "每年5月17日"
                },
                {
                    "title": "设定时间",
                    "value": "1969年5月17"
                },
                {
                    "title": "特点",
                    "value": "每年世界电信日都有一个主题"
                }
            ],
            "detail": [
                "世界电信日（World Telecommunications Day），1969年5月17日，国际电信联盟第二十四届行政理事会正式通过决议，决定把国际电信联盟的成立日——5月17日定为“世界电信日”，并要求各会员国从1969年起，每年5月17日都要开展纪念活动。2006年11月，国际电信联盟把世界电信日和世界信息社会日合并为世界电信和信息社会日。"
            ]
        },{
            "title": "设立宗旨",
            "detail": [
                "1969年5月17日，国际电信联盟第二十四届行政理事会正式通过决议，决定把国际电信联盟的成立日——5月17日定为“世界电信日”，并要求各会员国从1969年起，在每年5月17日开展纪念活动。\\n1973年国际电信联盟再次通过决议，要求各会员国继续开展各种纪念活动，活动方式可以多种多样。为了使纪念活动更有系统性，每年的世界电信日都有一个主题。我国每年由工业和信息化部代表中国政府主办、中国通信学会承办纪念活动。各地通信管理局和运营商也会举办相应的纪念活动。"
            ]
        }
    ]
}`},{festival_name:"国际博物馆日",festival_desc:`{
    "disp_name": "国际博物馆日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "每年5月18日"
                },
                {
                    "title": "设定时间",
                    "value": "1977年"
                },
                {
                    "title": "发起创办",
                    "value": "国际博物馆协会(ICOM)"
                }
            ],
            "detail": [
                "国际博物馆日定于每年的5月18日，是由国际博物馆协会（ICOM）发起并创立的。1977年国际博物馆协会为促进全球博物馆事业的健康发展，吸引全社会公众对博物馆事业的了解、参与和关注，向全世界宣告1977年5月18日为第一个国际博物馆日，并每年为国际博物馆日确定活动主题。"
            ]
        },{
            "title": "节日来历",
            "detail": [
                "约在公元前5世纪，在希腊的特尔费·奥林帕斯神殿里，有一座收藏各种雕塑和战利品的宝库，它被博物馆界视为博物馆的开端。在其后相当长的时间里，博物馆只是供皇室或少数富人观赏奇珍异物的收藏室。到18世纪末，西欧一些国家博物馆相继建立，并向公众开放，博物馆的功能才有了新的发展，人们对博物馆的认识也发生了变化。1880年，英国博物馆学者鲁金斯发表了《博物馆之功能》的论文，强调博物馆应成为一般公众受教育的场所。美国学者顾迪在《将来的博物馆》和《博物馆行政管理的原则》两篇专论中，进一步强调博物馆必须致力于革新教育，开展积极的活动，使之不仅成为专家学者从事研究的场所，而且要成为教育机构的补充设施，校外教学园地。\\n1946年11月，国际博物馆协会在法国巴黎成立。1974年6月，国际博物馆协会于哥本哈根召开第11届会议，将博物馆定义为“是一个不追求营利，为社会和社会发展服务的公开的永久机构。它把收集、保存、研究有关人类及其环境见证物当做自己的基本职责，以便展出，公诸于众，提供学习、教育、欣赏的机会。”\\n1971年国际博物馆协会在法国召开大会，针对当今世界的发展，探讨了博物馆的文化教育功能与人类未来的关系。1977年，国际博物馆协会为促进全球博物馆事业的健康发展，吸引全社会公众对博物馆事业的了解、参与和关注，向全世界宣告：1977年5月18日为第一个国际博物馆日并每年为国际博物馆日确定活动主题。"
            ]
        },{
            "title": "节日成立",
            "detail": [
                "中国博物馆学会于1983年正式加入国际博物馆协会，并成立了国际博物馆协会中国国家委员会。每年5月18日在全国各省市区举办形式多样的纪念活动。"
            ]
        }
    ]
}`},{festival_name:"全国学生营养日",festival_desc:`{
    "disp_name": "全国学生营养日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "每年5月20日"
                },
                {
                    "title": "设定时间",
                    "value": "2001年"
                },
                {
                    "title": "节日意义",
                    "value": "宣传学生时期营养重要性，普及营养知识"
                },
                {
                    "title": "设立机构",
                    "value": "中国学生营养促进会"
                }
            ],
            "detail": [
                "1989年成立的中国学生营养促进会在营养学家于若木的主持下，结合世界卫生组织2000年人人享有卫生保健的战略目标，制定了1991年至2000年十年学生营养工作计划。这一计划命名为“护苗系统工程”，其中确定每年5月20日为中国学生营养日。其目的在于广泛、深入宣传学生时期营养的重要性，大力普及营养知识。2001年5月，教育部、卫生部以（卫疾控发【2001】120号）文联合颁布文件将“中国学生营养日”法定下来。"
            ]
        },{
            "title": "设立背景",
            "detail": [
                "中国学生营养状况不容乐观，虽然膳食热量供给基本达到标准，但蛋白质供给量偏低，优质蛋白比例小，钙、锌、铁、维生素A等营养素明显不足。为了青少年茁壮成长，应大力普及学生营养知识，为学生提供合理的饮食结构。中小学校、托幼机构应根据不同食物所含的营养素和不同年龄段学生的营养标准，合理调配膳食，做到荤素、粗细搭配，平衡健康。"
            ]
        },{
            "title": "设立宗旨",
            "detail": [
                "营养学专家在首届中国学生营养健康节新闻发布会上呼吁，尽管城乡生活日益富裕，但城乡中小学生的营养与健康问题仍应引起全社会的重视关注。专家认为，大力宣传普及营养科学与食品卫生知识，扫除“营养盲”在我国城乡已成当务之急。1989年5月20日全国启动了“中国学生营养日”活动。在此基础上，为进一步促进改善学生营养状况和营养成份，提高人口健康素质，中国学生营养与健康促进会、中国关心下一代工作委员会、中华慈善总会、中国营养学会、教育部关心下一代工作委员会等决定举办中国学生营养健康节，向社会各界全面宣传学生的营养、食品安全、健康等相关知识，“把关心下一代从我做起”变成每位家长和全社会的自觉行动。"
            ]
        }
    ]
}`},{festival_name:"全国母乳喂养宣传日",festival_desc:`{
    "disp_name": "全国母乳喂养宣传日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "每年5月20日"
                },
                {
                    "title": "设定时间",
                    "value": "1990年"
                },
                {
                    "title": "节日目的",
                    "value": "强化人们母乳喂养意识"
                },
                {
                    "title": "设立机构",
                    "value": "卫生部"
                }
            ],
            "detail": [
                "每年的5月20日是全国母乳喂养宣传日。1990年5月10日卫生部决定，将每年的5月20日作为全国母乳喂养宣传日，广泛开展宣传、咨询活动，以强化人们母乳喂养意识，从而更好地实行计划生育和优生优育。"
            ]
        },{
            "title": "节日起源",
            "detail": [
                "儿童问题是当代人类面临的最严重的挑战之一。儿童的天性是纯洁、脆弱和需要依靠的；他们充满着生机，代表着未来；应该在快乐、和平、学习的和谐气氛中长大成人。但是，由于战争、贫困和经济危机，使得当代世界的许多儿童至今还面临着生存的危险，其生存状况恶劣和身心健康的损害程度令人发指。",
"为此，1990年召开的世界儿童问题首脑会议向全世界发出了紧急呼吁：让每个儿童有更好的未来！通过了《儿童生存、保护和发展世界宣言》和《执行九十年代儿童生存、保护和发展世界宣言行动计划》。1991年3月，李鹏总理代表中国政府签署了这两个文件，并对国际社会作出了庄严的承诺。1992年2月，国务院制定和颁发了《九十年代中国儿童发展规划纲要》，显示了中国政府重视和关怀儿童事业的严肃态度。",
"1990年5月10日，卫生部在北京举行了母乳喂养新闻发布会，确定5月20日为“全国母乳喂养宣传日”。这是由国家卫生部为保护、促进和支持母乳喂养而设立的一项重要活动，也是献给所有哺乳母亲与她们孩子的节日。呼吁全社会都来关注和支持“母乳喂养”的观念，让母亲和宝宝建立更紧密的关系！母乳含有婴儿头6个月需要的“所有营养”，而且容易消化。母乳干净且没有细菌感染，所以不会使婴儿生病……“母乳最好”的观念已经深入人心。 除特殊情况外，产妇在住院期间，95%以上的妈妈自愿对宝宝进行母乳喂养。”世界卫生组织提倡母乳喂养24个月。产妇应在生产后30分钟内早开奶，早吸吮，这是提高母乳喂养率的关键。母乳喂养是最经济、最安全、最营养的，对新生儿成长发育也最有益。"
            ]
        }
    ]
}`},{festival_name:"世界预防中风日",festival_desc:`{
    "disp_name": "世界预防中风日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "节日时间",
                    "value": "5月25日"
                },
                {
                    "title": "节日目的",
                    "value": "让百姓识别早期症状，预防中风"
                }
            ],
            "detail": [
                "世界预防中风日是在2004年6月24日在加拿大温哥华举行的第五届“世界中风研讨会”，订立每年5月25日为世界预防中风日，加强人们认识中风及相关问题，预防中风。中风是脑血管出现问题，令脑细胞失去血液、氧气和养分供应，最终令脑细胞受损或死亡，继而影响到该部分脑细胞所控制的功能，例如活动及语言机能，妨碍病患者自我照顾能力。2009年5月25日“世界中风日”的主题就是“让百姓识别早期症状，预防中风。"
            ]
        },{
            "title": "中风分类",
            "detail": [
                "出血性中风：俗称“爆血管”或“脑溢血”，由于高血压或脑血管疾病，例如脑血管肿瘤而导致脑血管破裂。\\n缺血性中风：因脑血管硬化导致血管狭窄及闭塞或因血凝块流到脑血管造成闭塞。"
            ]
        },{
            "title": "中风征状",
            "detail": [
                "中风征状视乎发生病变的位置及其损害程度，常见病征有：\\n局部感觉麻木，例如一边脸、单边肢体或身躯\\n肢体无力，尤其是身躯单侧、单肢\\n身体突然失去平衡能力\\n言语不清、流口水、吞咽困难、嘴歪\\n视力范围减小，或眼睛肌肉失调、出现复视\\n神志不清、昏迷\\n其他征状：例如突发性的剧烈头痛、持续的晕眩"
            ]
        },{
            "title": "预防中风",
            "detail": [
                "戒烟。\\n经常做运动，保持心境平和。\\n均衡饮食，避免进食高胆固醇及高动物脂肪食物。\\n避免酗酒。\\n如患有高血压、糖尿病、心脏病或曾患有中风者，必须定期检查和接受适当治疗，确保血糖或血压处于正常水平。\\n曾患有缺血性中风或心脏病，而又由医生处方给予预防药物的人士，应定期覆诊和服药。"
            ]
        },{
            "title": "中风护理",
            "detail": [
                "改善患者的生活质素：重视患者的生理和心理健康。\\n增强患者的自我照顾能力：如中风病患者重获日常生活所需要的技巧，减少倚赖别人，这样既可减慢机能退化，亦可减轻家人及照顾者的负担。\\n保持肢体的功能，防止并发病如褥疮、肺部感染、哽咽及肩周炎发生。\\n中风能导致半身不遂，但凭著意志及通过适当治疗，不少病人亦可重新恢复部份机能，可向专业人士求助。"
            ]
        }
    ]
}`},{festival_name:"数九",festival_desc:`{
    "disp_name": "数九",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "数九"
                },
                {
                    "title": "别名",
                    "value": "冬九九、数九寒天"
                },
                {
                    "title": "节日时间",
                    "value": "每年阳历12月下旬出，农历冬至开始"
                },
                {
                    "title": "节日类型",
                    "value": "中国民间计算寒暖日期方法"
                }
            ],
            "detail": [
                "数九，又称冬九九，是中国民间一种计算寒天与春暖花开日期的方法。数九是从二十四节气“冬至”逢壬日开始算起，每九天算一“九”，依此类推。一般“三九”时最冷，是一年中最冷的时段。当数到九个“九天”（九九八十一天），便春深日暖、万物生机盎然，是春耕的时候了。"
            ]
        },{
            "title": "养生",
            "detail": [
                "数九时期养生建议：尽量早睡晚起、适度轻柔运动、饮食注意养阴、运用中医防病。具体如下：",
                "一、冬季睡眠。《黄帝内经》认为冬季睡眠应该“早卧晚起，必待日光”，就是早睡晚起，起床应在日出以后。早卧晚起可以减少人体阳气的耗损，建议晚上9~11点入睡，早上7~8点起床，并适当午睡半个小时左右。",
                "二、冬季运动。冬季不适合大量剧烈运动，中医认为剧烈运动会耗损人体阳气，导致大量出汗，损耗津液。所以冬季适合做一些轻柔的运动，出汗少又能活动筋骨，像太极拳、八段锦、散步等。",
                "三，冬季饮食。遵循“秋冬养阴”的原则。冬季寒气盛，人体毛孔会常闭合，减少热量耗散。这样就把阳气封闭在内，阳气积郁久了就容易化热，从而耗伤人体阴津，所以要养阴。民间有“冬吃萝卜夏吃姜”的养生法则，其中萝卜就有养阴生津的功效。其它一些食物也可以用来养阴，比如梨、乌梅、麦冬、银耳、鸭肉、山药、芡实、地黄等。在中医师的诊断下，还可以用因人而异的进补方法来养阴，比如膏方、药膳、茶饮、汤药等。",
                "四、冬季防病。“三九”在冬至以后，根据“冬至一阳生”的自然规律，中医常在“三九”这个特殊的时间段，使用“三九敷贴”(在特定穴位敷贴配制的中药)、“三九艾灸”(在特定穴位进行艾灸)的方法达到刺激穴位、激发经气、温阳散寒、扶正却邪的防病目的。"
            ]
        },{
            "title": "饮食",
            "detail": [
                "冬至之后进入数九，可以多吃温性食物，少食甚至远离寒凉食物，对于平衡人体阴阳、增强抵抗力是非常重要的。在饮食调养方面，营养专家建议，公众尤其要注意“三多三少”，即多吃蛋白质、维生素、纤维素含量高的食物，少吃糖类、脂肪、盐分含量高的食物。",
                "数九时节的饮食还宜多样化，谷、果、肉、蔬菜要合理搭配，适当地选用高钙食品。宜食一些清淡的食物，不宜吃浓浊、肥腻和过咸的食物，还不可过食太过辛辣刺激的食品。冬天阳气日衰，脾喜温恶冷，因此最好吃一些温热食品来保护脾肾，吃饭也最好是少量多餐。",
                "数九之后，天气寒冷，羊肉、牛肉、狗肉有燥热温补的效果，能预防“三九寒冷”，但量不宜太多，过食羊肉等肥甘厚味，易导致饮食不化，聚湿生痰。冬至时还可以多吃些诸如花生、核桃、栗子、榛子和杏仁之类的坚果，因为坚果性味偏温热，在其它季节吃容易上火，而冬天天气较冷，吃坚果有御寒的作用，可增强体质、预防疾病。当然吃坚果也要适量，且因人而异。",
                "在补充热性食物的同时，也得吃一些补充津液的食物，如荸荠、藕、梨、萝卜、白菜等。其它很多蔬菜也要多加摄入，比如土豆、番茄、菌类、韭菜、南瓜、芹菜、菠菜、山药等。",
                "除此之外，还要适量多吃水果，冬天寒冷干燥，使人觉得鼻、咽部干燥和皮肤缺水、容易上火，因此每天能吃点水果不仅能滋阴养肺、润喉去燥，还能摄取充足的营养物质，会使人顿觉清爽舒适。猕猴桃、甘蔗、柚子、大枣、桔子、龙眼、苹果、桂圆等都是不错的选择。"
            ]
        },{
            "title": "习俗简介",
            "detail": [
                "民谚云：“夏至三庚入伏，冬至逢壬数九。”数九方法在我国民间口口相传，有历史，乏记载，至于起源何时，没有确切的资料。不过，至少在南北朝时已经流行，梁代宗懔《荆楚岁时记》中就写道：“俗用冬至日数及九九八十一日，为寒尽。”在中国传统哲学中的阴阳的消长，阳长阴消就象征暖来寒去。在传统文化中，九为极数，乃最大、最多、最长久的概念。九个九即八十一更是“最大不过”之数。九，为“至阳”之数，也称老阳，九又是至大之数，“至阳之数”的积累意味着阴气的日益消减，累至九次已到了头，意味着寒去暖来，“春已深矣”了。"
            ]
        },{
            "title": "民间歌谣",
            "detail": [
                "“数九”是古人世世代代在生产、生活实践基础上，利用自然界的一些生态反映和天气征兆的经验总结，具有相当大的科学性，至今仍对人民群众的生产、生活的安排起着指导作用，所以一直盛行不衰，广泛流传在人们的口头上，体现在人们的行为中。随着历史发展，各地的人们也根据各地不同的气候条件、景象特征、农事物候及风俗习惯，编排出了各种数九九的谚语、歌谣和顺口溜。中国民间广为流传的“九九消寒歌”，俗称“九九歌”。“数九歌”在南北各地都有，不过歌词版本略有不同。","数九歌谣：一九二九不出手，三九四九冰上走，五九六九沿河看柳，七九河开，八九燕来，九九加一九，耕牛遍地走。"
            ]
        }
    ]
}`},{festival_name:"三伏",festival_desc:`{
    "disp_name": "三伏",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "三伏"
                },
                {
                    "title": "节日时间",
                    "value": "阳历7月中旬到8月中旬"
                },
                {
                    "title": "节日概念",
                    "value": "初伏、中伏和末伏的统称"
                },
                {
                    "title": "气候特点",
                    "value": "气温高、气压低、湿度大、风速小"
                }
            ],
            "detail": [
                "三伏，是初伏、中伏和末伏的统称，是一年中最热的时节。每年三伏天出现在公历7月中旬到8月中旬，其气候特点是气温高、气压低、湿度大、风速小。“伏”表示阴气受阳气所迫藏伏地下。三伏有初伏、中伏和末伏之分，它的日期是由干支历的节气日期和干支纪日的日期相配合来决定的。"
,"我国传统的推算方法规定，夏至以后的第3个庚日、第4个庚日分别为初伏（头伏）和中伏的开始日期，立秋以后的第一个庚日为末伏的第一天。因为每个庚日之间相隔10天，所以初伏、末伏规定的时间是10天。又因为每年夏至节气后的第3个庚日（初伏）出现的迟早不同，中伏的天数就有长有短，可能是10天，也可能是20天。"
            ]
        },{
            "title": "三伏定义",
            "detail": [
                "“三伏”（Dog Day），是初伏、中伏和末伏的统称，“伏”表示阴气受阳气所迫藏伏地下。“伏”可称“长夏”，“伏”是五行家对季节的另类安排，其中“伏”为“土”。“伏”表示阴气受阳气所迫藏伏在地下的意思。春、夏、秋、冬四季被五行家冠以木、火、土、金、水，一年五季春、夏、长夏、秋、冬，由秋到冬金生水、水生木、木生火，自然循环。但是由夏到秋则不然，火克金，金不敢出来。就要潜伏一段时间，“潜伏”就是“伏”的本义。","秋天属“庚辛金”所以“入伏”要从“庚日”开始。温度最高，需要潜伏的时间要在夏至后二十天以后，所以从夏至后第三个“庚日”开始，到立秋后第二个庚日结束。"
            ]
        },{
            "title": "三伏养生",
            "detail": [
                "进入7月后，就到了所谓的“三伏天”。三伏天是中国农历小暑与处暑之间的一段时间，它是一年中气温最高而且潮湿、闷热的日子。气温节节攀高，各类健康问题也接踵而来，暑热暑湿就成了我们防范的重点。"
            ]
        },{
            "title": "饮食文化",
            "detail": [
                "俗言道：“寒有三九，热有三伏。”每逢三伏，古人一方面以清凉饮料避暑，另一方面又举行相应的风俗活动，如“饮酒避恶”等。久而久之，形成了一种独特的三伏食俗文化。","我国幅员辽阔，不同朝代、各个地区风俗不尽相同。诸如北宋夏日节食是“伏日绿荷包子”，“绿荷”即荷叶，用荷叶裹包子有清暑的作用。浙江台州三伏日，老年人有食鸡粥的风俗，名为“补阳”。概而言之，我国三伏食俗的由来与汉代作“伏腊节”有关，最初是一种庆农活动。这也从一个侧面体现出了我国食俗文化的丰富多彩。"
            ]
        }
    ]
}`},{festival_name:"世界牛奶日",festival_desc:`{
    "disp_name": "世界牛奶日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "世界牛奶日"
                },
                {
                    "title": "英文名",
                    "value": "World Milk Day"
                },
                {
                    "title": "节日时间",
                    "value": "每年的6月1日"
                },
                {
                    "title": "节日意义",
                    "value": "改善国民营养状况，增强人民体质"
                },
                {
                    "title": "设立机构",
                    "value": "中国乳制品工业协会"
                },
                {
                    "title": "设定时间",
                    "value": "2000年"
                }
            ],
            "detail": [
                "2000年，中国乳制品工业协会向联合国粮农组织建议，经征求其他国家的意见，联合国粮农组织（FAO）倡导，将每年的6月1日定为“世界牛奶日”。主题改善国民营养状况，增强人民体质。"
            ]
        },{
            "title": "设立宗旨",
            "detail": [
                "2000年，中国乳制品工业协会向联合国粮农组织建议，经征求其他国家的意见，联合国粮农组织（FAO）倡导，将每年的6月1日定为“世界牛奶日”。主题改善国民营养状况，增强人民体质。","2000年联合国粮农组织提议，并征得了世界700多位乳业界人士的意见后，把每年的6月1日确定为“世界牛奶日”。“世界牛奶日”活动的目的为以多种形式向广大消费者介绍牛奶的生产情况，宣传牛奶营养价值和对人体健康的重要性，了解广大消费者对牛奶与奶制品的意见和要求。","世界牛奶日”活动的目的是以多种形式向广大消费者介绍牛奶的生产情况，宣传牛奶的营养价值和对人体健康的重要性，了解广大消费者对牛奶和奶制品的意见和要求。这是双向的，又是互动的牛奶科普宣传活动，也是牛奶和奶制品的促销活动。"
            ]
        },{
            "title": "发展历史",
            "detail": [
                "上个世纪50年代,法国的促进牛奶消费协会提出了庆祝“牛奶日“的设想,这个设想在1961年被国际牛奶联合会(IDF)所采纳，并做出了每年5月第三周的周为“国际牛奶日“的决定，这一天在每年都不是固定不变的。","中国开展这一活动最早的城市是江苏省的南京市，最早的企业是南京“卫岗乳业“。早在1997年就开始了这一活动。全国其他城市和企业也陆续开展了这一活动，并且取得了良好的效果。中国奶业之所以能够持续、稳定和快速地发展，同“世界牛奶日“活动的开展也是有联系的。"
            ]
        }
    ]
}`},{festival_name:"世界海洋日",festival_desc:`{
    "disp_name": "世界海洋日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "世界海洋日"
                },
                {
                    "title": "英文名",
                    "value": "World Oceans Day"
                },
                {
                    "title": "节日时间",
                    "value": "每年的6月8日"
                },
                {
                    "title": "设立机构",
                    "value": "联合国大会"
                },
                {
                    "title": "设定时间",
                    "value": "2009年"
                }
            ],
            "detail": [
                "联合国于第63届联合国大会上将每年的6月8日确定为“世界海洋日”（World Oceans Day）。联合国秘书长潘基文就此发表致辞时指出，人类活动正在使海洋世界付出可怕的代价，个人和团体都有义务保护海洋环境，认真管理海洋资源。"
            ]
        },{
            "title": "设立起源",
            "detail": [
                "2008年12月5日第63届联合国大会通过第111号决议，决定自2009年起，每年的6月8日为“世界海洋日”。早在1992年，加拿大就已经在当年的里约热内卢联合国环境与发展会议上发出这一提议，每一年都有一些国家在这一天举办与保护海洋环境有关的非官方纪念活动。但直至2009年联合国才正式确立其为官方纪念日。","2009年是联合国首次正式确定的“世界海洋日”，联合国希望世界各国都能借此机会关注人类赖以生存的海洋，体味海洋自身所蕴含的丰富价值，同时也审视全球性污染和鱼类资源过度消耗等问题给海洋环境和海洋生物带来的不利影响，而如今“世界海洋日”的主题被确定为“我们的海洋，我们的责任”。","世界上很多海洋国家和地区都有自己的海洋日，如欧盟的海洋日为5月20日，日本则将7月份的第三个星期一确定为“海之日”。"
            ]
        },{
            "title": "设立目的",
            "detail": [
                "联合国秘书长潘基文呼吁世界各国进一步认识海洋对调节全球气候的能力，采取切实措施保护海洋环境，维护健康的海洋生态系统，确保国际航运的安全。人类活动正在使世界海洋付出可怕的代价。过度开发，非法的、未经授权和无管制的捕捞活动、破坏性的捕捞方法、外来入侵物种以及海洋污染，特别是来自陆地的污染等，正在使珊瑚等一些脆弱的海洋生态系统和重要的渔场遭到破坏。海洋温度升高和海平面上升及气候变化造成的海洋酸化，进一步对海洋生命、沿海和海岛社区及国家的经济造成威胁。在联合国的支持下，国际社会通过一系列关于保护海洋环境的国际性法律文件，其中核心的文件为1982年通过的《联合国海洋法公约》。该公约为人类在海洋上的所有活动提供了法律框架，同时也为各国开展各种国际合作提供了基础。"
            ]
        },{
            "title": "设立意义",
            "detail": [
                "“世界海洋日”的确立，为国际社会应对海洋挑战搭建了平台，也为在中国进一步宣传海洋的重要性、提高公众海洋意识提供了新的机会。"
            ]
        }
    ]
}`},{festival_name:"世界无童工日",festival_desc:`{
    "disp_name": "世界无童工日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "世界无童工日"
                },
                {
                    "title": "英文名",
                    "value": "The World Day Against Child Labor"
                },
                {
                    "title": "节日时间",
                    "value": "每年的6月12日"
                },
                {
                    "title": "提出者",
                    "value": "国际劳工组织"
                },
                {
                    "title": "设定时间",
                    "value": "2002年"
                }
            ],
            "detail": [
                "世界无童工日，为关注日益严重的童工问题，2002年6月，在日内瓦召开的第90届国际劳工大会决定每年的6月12日定为“世界无童工日（the World Day Against Child Labor）”，呼吁世界各国密切关注童工问题，并采取切实有效的措施解决这一问题，每年世界无童工日都确定一个主题，以切实体现关切的童工问题的各个方面，从而引导各国政府的解决。"
            ]
        },{
            "title": "设立起源",
            "detail": [
                "国际劳工组织于2002年设立了世界无童工日，将重点放在对全球范围童工的关注和需要消除这种现象的行动。每年6月12日，来自世界各地的政府，雇主和工人组织，民间社会，以及亿万人民群众聚集起来，突显出童工的困境，探讨人们怎样来帮助他们。","国际劳工组织第182号公约的通过巩固了消除童工劳动的全球共识。已有数百万童工受益于该公约，但仍有许多工作要做。据最新数字估计，仍有2.15亿儿童在被迫当童工，而其中的1.15亿儿童在从事危险工作。国际劳工组织会员国已将2016年定为消除最恶劣形式的童工劳动的期限。为了实现这一目标需要更大的努力和承诺。"
            ]
        },{
            "title": "设立目的",
            "detail": [
                "2002年6月，在日内瓦召开的第90届国际劳工大会决定每年的6月12日定为“世界无童工日（the World Day Against Child Labor）”，同时呼吁世界各国密切关注日益严重的童工问题，并采取切实有效的措施解决这一问题。","日益严重的童工问题已引起许多国家和地区的高度重视。一些国家已采取措施，严格禁止在家务劳动中雇佣15岁以下的儿童。有些国家还成立专门机构，负责维护儿童的合法权益，遏制贩卖儿童和使用童工等丑恶社会现象的蔓延。"
            ]
        }
    ]
}`},{festival_name:"世界献血者日",festival_desc:`{
    "disp_name": "世界献血者日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "世界献血者日"
                },
                {
                    "title": "英文名",
                    "value": "World Blood Donor Day(WBDD)"
                },
                {
                    "title": "节日时间",
                    "value": "每年的6月14日"
                },
                {
                    "title": "设定时间",
                    "value": "2005年5月24日"
                }
            ],
            "detail": [
                "世界献血者日（World Blood Donor Day, WBDD）是每年的6月14日。为了鼓励更多的人无偿献血，宣传和促进全球血液安全规划的实施，世界卫生组织、红十字会与红新月会国际联合会、国际献血组织联合会、国际输血协会将2004年6月14日定为第一个世界献血者日。"
            ]
        },{
            "title": "历史来源",
            "detail": [
                "为鼓励更多的人无偿献血，宣传和促进全球血液安全规划的实施，世界卫生组织（WHO）、红十字会与红新月会国际联合会（IFRC）、献血者组织国际联合会（IFBDO）、国际输血协会（ISBT） [2]  将2004年6月14日定为第一个世界献血日。之所以选中这一天，是因为6月14日是发现ABO血型系统的诺贝尔奖获得者卡尔·兰德斯坦纳的生日。"
            ]
        },{
            "title": "献血标准",
            "detail": [
                "1． 年龄：18-55周岁（可申请延续献血年限）\\n2． 体重：男≥50千克，女≥45千克。\\n3． 血压：12-20/8-12kpa，脉压差：≥4kpa或90mmhg-140mmhg/60mmhg-90mmhg，脉压差：≥30mmhg。\\n4． 脉搏：60-100次/分，高度耐力的运动员≥50次/分。\\n5． 体温正常。"
            ]
        }
    ]
}`},{festival_name:"世界防治荒漠化和干旱日",festival_desc:`{
    "disp_name": "世界防治荒漠化和干旱日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "世界防治荒漠化和干旱日"
                },
                {
                    "title": "英文名",
                    "value": "World Day to Combat Desertification"
                },
                {
                    "title": "节日时间",
                    "value": "每年的6月17日"
                },
                {
                    "title": "设定时间",
                    "value": "1994年12月19日"
                },
                {
                    "title": "设立机构",
                    "value": "联合国"
                }
            ],
            "detail": [
                "世界防治荒漠化与干旱日（World Day to combat desertification），1994年12月19日第49届联合国大会根据联大第二委员会（经济和财政）的建议，通过了49/115号决议，从 1995年起把每年的6月17日定为“世界防治荒漠化与干旱日”，旨在进一步提高世界各国人民对防治荒漠化重要性的认识，唤起人们防治荒漠化的责任心和紧迫感。"
            ]
        },{
            "title": "荒漠化概念",
            "detail": [
                "按联合国多次关于荒漠化定义的讨论，特别是1992年联合国环境与发展大会所提出的定义是：“荒漠化是由于气候变化和人类不合理的经济活动等因素使干旱、半干旱和具有干旱灾害的半湿润地区的土地发生了退化”。","这个荒漠化定义已得到联合国多次荒漠化国际公约政府间谈判会议的确认，重申在国际公约中采取这一定义，并将这这个定义列入《21世纪议程》的第12章中，还进一步补充了定义释文中出现的“土地退化”含义：“由于一种或多种营力结合以及不合理土地利用，导致旱农地、灌溉农地、牧场和林地生物或经济生产力和复杂性下降及丧失，其中包括人类活动和居住方式所造成的土地生产力下降，例如土地的风蚀、水蚀，土壤的物理化学和生物特性的退化和自然植被的长期丧失”。"
            ]
        },{
            "title": "发展历史",
            "detail": [
                "1977年联合国荒漠化会议正式提出了土地荒漠化这个世界上最严重的环境问题。1992年6月,包括中国总理李鹏在内的100多个国家元首和政府首脑与会、170多个国家派代表参加的巴西里约环境与发展大会上,荒漠化被列为国际社会优先采取行动的领域。之后，联合国通过了47/188号决议，成立了《联合国关于在发生严重干旱和/或荒漠化的国家特别是在非洲防治荒漠的公约》政府间谈判委员会。公约谈判从1993年5月开始,历经5次谈判，于1994年6月17日完成。“6.17即为”国际社会对防治荒漠化公约达成共识的日子。在1994年10月14日至15日于巴黎举行的公约签字仪式上，林业部副部长祝光耀代表我国政府签署了公约。为了有效地提高世界各地公众对执行与自己和后代密切相关的“防治荒漠化公约”重要性的认识，加强国际联合防治荒漠化行动，迎合国际社会对执行公约及其附件的强烈愿望，以及纪念国际社会达成防治荒漠化公约共识的日子，1994年12月19日第49届联合国大会根据联大第二委员会（经济和财政）的建议，通过了49/115号决议，决定从1995年起把每年的6月17日定为“世界防治荒漠化与干旱日”，旨在进一步提高世界各国人民对防治荒漠化重要性的认识，唤起人们防治荒漠化的责任心和紧迫感。"
            ]
        }
    ]
}`},{festival_name:"全国土地日",festival_desc:`{
    "disp_name": "全国土地日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "全国土地日"
                },
                {
                    "title": "别名",
                    "value": "土地日"
                },
                {
                    "title": "节日时间",
                    "value": "每年的6月25日"
                },
                {
                    "title": "设定时间",
                    "value": "1991年5月24日"
                },
                {
                    "title": "设立机构",
                    "value": "国务院"
                },
                {
                    "title": "节日起源",
                    "value": "国务院第83次常务会议决定"
                },
                {
                    "title": "节日活动",
                    "value": "土地政策宣传"
                },
                {
                    "title": "节日意义",
                    "value": "珍惜土地资源，合理利用土地资源"
                }
            ],
            "detail": [
                "全国土地日，是每年6月25日。1986年6月25日，第六届全国人民代表大会常务委员会第十六次会议通过并颁布我国第一部专门调整土地关系的大法——《中华人民共和国土地管理法》。","为纪念这一天，1991年5月24日国务院第83次常务会议决定，从1991年起，把每年的6月25日，即《土地管理法》颁布的日期确定为全国土地日。“土地日”是国务院确定的第一个全国纪念宣传日。中国是世界上第一个为保护土地而设立专门纪念日的国家。"
            ]
        },{
            "title": "基本国情",
            "detail": [
                "我国土地资源的特点是“一多三少”，即总量多，人均耕地少，高质量的耕地少，可开发后备资源少。虽然我国现有土地面积居世界第三位，但人均仅及世界人均1/3；耕地面积列世界第二位，而人均排在世界第六十七位。在这有限的耕地中，缺乏水源保证、干旱退化、水土流失、污染严重的耕地占了相当大的比例。"
            ]
        },{
            "title": "基本国策",
            "detail": [
                "十分珍惜、合理利用土地和切实保护耕地是我国的基本国策。"
            ]
        }
    ]
}`},{festival_name:"国际禁毒日",festival_desc:`{
    "disp_name": "国际禁毒日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "国际禁毒日"
                },
                {
                    "title": "外文名",
                    "value": "International Day Against Drug Abuse and Illicit Trafficking"
                },
                {
                    "title": "节日时间",
                    "value": "每年的6月26日"
                },
                {
                    "title": "设定时间",
                    "value": "1987"
                },
                {
                    "title": "通过机构",
                    "value": "第42届联合国大会"
                },
                {
                    "title": "规范称谓",
                    "value": "禁止药物滥用和非法贩运国际日"
                }
            ],
            "detail": [
                "国际禁毒日即国际反毒品日，是每年的6月26日。1987年6月12日至26日，联合国在维也纳召开由138个国家的3000多名代表参加的麻醉品滥用和非法贩运问题部长级会议，会议提出了“爱生命，不吸毒”的口号，并与会代表一致同意6月26日定为“国际禁毒日”，以引起世界各国对毒品问题的重视，同时号召全球人民共同来解决毒品问题。"
            ]
        },{
            "title": "内容简介",
            "detail": [
                "国际禁毒日（International Day Against Drug Abuse and Illicit Trafficking），全称是禁止药物滥用和非法贩运国际日。1987年6月，在奥地利首都维也纳举行了联合国部长级禁毒国际会议，有138个国家的3000多名代表参加了这次国际禁毒会议。这次会议通过了禁毒活动的《综合性多学科纲要》。26日会议结束时，参与会议的代表一致通过决议，从1988年开始将每年的6月26日定为“国际禁毒日”，以引起世界全国各地对毒品问题的重视，同时号召全球人民共同来解决毒品问题。"
            ]
        },{
            "title": "设立宗旨",
            "detail": [
                "世界范围的毒品蔓延泛滥，已成为严重的国际人民的威胁。据联合国统计，全世界每年毒品交易额高达5000亿美元以上，是仅次于军火交易的世界第二大宗买卖。20世纪80年代，全世界因吸毒造成了10万人死亡。毒品不仅严重摧残人类健康，危害民族素质，助长暴力和犯罪，而且吞噬巨额社会财富。对于发展中的国家来说，毒品造成的损失和扫毒所需要的巨额经费更是沉重的负担。"
            ]
        }
    ]
}`},{festival_name:"国际体育记者日",festival_desc:`{
    "disp_name": "国际体育记者日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "国际体育记者日"
                },
                {
                    "title": "节日时间",
                    "value": "每年的7月2日"
                },
                {
                    "title": "设定时间",
                    "value": "1995"
                }
            ],
            "detail": [
                "7月2日为国际体育记者日。国际体育记者协会1995年在加拿大举行代表大会，确定7月2日为“国际体育记者日”。中国体育记者协会于1978年成为国际体育记者协会的正式会员。"
            ]
        },{
            "title": "发展历史",
            "detail": [
                "1995年在加拿大举行的第58届国际体育记者协会（简称AIPS）代表大会上，并将7月2日定为“国际体育记者日”，号召所有会员国协会在7月2日这天举行各种形式的庆祝活动。AIPS于1924年7月2日在法国巴黎成立，截止2015年有125个会员国协会。中国体育记者协会在1978年AIPS莫斯科代表大会上被接纳为该组织正式会员。"
            ]
        },{
            "title": "组织机构",
            "detail": [
                "国际体育记者协会是由各国体育记者协会组成的国际性组织。国际体育记者协会自成立以来，为加强各国体育记者之间的沟通与合作,促进体育运动及体育新闻事业在全世界的发展，弘扬奥林匹克精神做了大量卓有成效的工作。 国际体育记者协会是唯一被国际奥委会和各国际单项体育联合会广泛认可的全球性体育记者组织。"
            ]
        }
    ]
}`},{festival_name:"国际接吻日",festival_desc:`{
    "disp_name": "国际接吻日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "国际接吻日"
                },
                {
                    "title": "外文名",
                    "value": "International Kissing Day"
                },
                {
                    "title": "节日时间",
                    "value": "每年的7月6日"
                },
                {
                    "title": "设定时间",
                    "value": "1991"
                },
                {
                    "title": "设计机构",
                    "value": "联合国"
                }
            ],
            "detail": [
                "国际接吻日，也称为世界接吻日，节日定在每年的7月6日。又名国际亲吻节(International Kissing Day)。这个节日由英国人率先发起，1991年得到联合国的承认。每年的这一天世界上的许多城市都举行各种接吻比赛，成为一道温馨的风景线。"
            ]
        },{
            "title": "简介",
            "detail": [
                "国际接吻日，大家也叫为世界接吻日，为每年的7月6日。又名「国际亲吻节」（InternationalKissingDay）。这个节日首先由英国人发起，二十年前得到联合国的批准。接吻，是一种古老而风行的示爱方式，也是一种甜蜜的享受，现代心理学告诉人们，93%的女子都盼望情人吻她，而男性也喜欢去吻自己所钟爱的女子。每年的这一天许多城市都举行各种接吻比赛，以俄罗斯城市莫斯科最负盛名，比赛参加的男女有机会赢得各种奖品和礼品。"
            ]
        },{
            "title": "接吻礼俗",
            "detail": [
                "接吻的历史始于大约公元前3000年，古人们在膜拜众神时都要亲吻他们。古罗马帝国时期，不仅与朋友和家庭成员接吻，还要与商人和路人接吻，以此表示对他们的欢迎。中世纪这种见面礼不仅要受到人际关系的约束，还要受到社会阶层的约束。社会地位越低，亲吻距离脸部就越远。对于与自己地位相等的人吻嘴唇，比自己地位高一等的人要吻手，再者则要吻其膝盖，对于自己在其面前微不足道的人（首先是指神职人员）要吻其脚背，甚至他脚边的土地。在意大利，男人一定要娶当众亲吻的姑娘为妻。"
            ]
        },{
            "title": "吻的含义",
            "detail": [
                "吻额头=疼爱你；\\n吻眼睛=想你吻他；\\n吻鼻子=希望再见你；\\n吻唇=只爱你一人；\\n吻舌=想和你过一辈子；\\n吻耳朵=逗你玩；\\n吻脸=想和你做朋友；\\n吻脖子=要你一人；\\n吻手=崇拜你；\\n随便吻=不想你离开。"
            ]
        }
    ]
}`},{festival_name:"国际接吻日",festival_desc:`{
    "disp_name": "国际接吻日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "国际接吻日"
                },
                {
                    "title": "外文名",
                    "value": "International Kissing Day"
                },
                {
                    "title": "节日时间",
                    "value": "每年的7月6日"
                },
                {
                    "title": "设定时间",
                    "value": "1991"
                },
                {
                    "title": "设立机构",
                    "value": "联合国"
                }
            ],
            "detail": [
                "国际接吻日，也称为世界接吻日，节日定在每年的7月6日。又名国际亲吻节(International Kissing Day)。这个节日由英国人率先发起，1991年得到联合国的承认。每年的这一天世界上的许多城市都举行各种接吻比赛，成为一道温馨的风景线。"
            ]
        },{
            "title": "简介",
            "detail": [
                "国际接吻日，大家也叫为世界接吻日，为每年的7月6日。又名「国际亲吻节」（InternationalKissingDay）。这个节日首先由英国人发起，二十年前得到联合国的批准。接吻，是一种古老而风行的示爱方式，也是一种甜蜜的享受，现代心理学告诉人们，93%的女子都盼望情人吻她，而男性也喜欢去吻自己所钟爱的女子。每年的这一天许多城市都举行各种接吻比赛，以俄罗斯城市莫斯科最负盛名，比赛参加的男女有机会赢得各种奖品和礼品。"
            ]
        },{
            "title": "接吻礼俗",
            "detail": [
                "接吻的历史始于大约公元前3000年，古人们在膜拜众神时都要亲吻他们。古罗马帝国时期，不仅与朋友和家庭成员接吻，还要与商人和路人接吻，以此表示对他们的欢迎。中世纪这种见面礼不仅要受到人际关系的约束，还要受到社会阶层的约束。社会地位越低，亲吻距离脸部就越远。对于与自己地位相等的人吻嘴唇，比自己地位高一等的人要吻手，再者则要吻其膝盖，对于自己在其面前微不足道的人（首先是指神职人员）要吻其脚背，甚至他脚边的土地。在意大利，男人一定要娶当众亲吻的姑娘为妻。"
            ]
        },{
            "title": "吻的含义",
            "detail": [
                "吻额头=疼爱你；\\n吻眼睛=想你吻他；\\n吻鼻子=希望再见你；\\n吻唇=只爱你一人；\\n吻舌=想和你过一辈子；\\n吻耳朵=逗你玩；\\n吻脸=想和你做朋友；\\n吻脖子=要你一人；\\n吻手=崇拜你；\\n随便吻=不想你离开。"
            ]
        }
    ]
}`},{festival_name:"世界人口日",festival_desc:`{
    "disp_name": "世界人口日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "世界人口日"
                },
                {
                    "title": "外文名",
                    "value": "World Population Day"
                },
                {
                    "title": "节日时间",
                    "value": "每年的7月11日"
                },
                {
                    "title": "设定时间",
                    "value": "1989"
                },
                {
                    "title": "设立机构",
                    "value": "联合国大会"
                },
                {
                    "title": "节日意义",
                    "value": "引起国际社会对人口问题的重视。"
                }
            ],
            "detail": [
                "世界人口日是每年的7月11日。1987年7月11日，地球人口达到50亿。为纪念这个特殊的日子，1989年，在联合国发展规划署理事会在其第89/46号决定中建议国际社会把每年的7月11日定为世界人口日（World Population Day），以便把重点放在紧迫性的人口总体发展计划和解决这些问题的方案。","1990年联合国根据其开发计划署理事会第36届会议的建议，决定将每年7月11日定为“世界人口日”，以唤起人们对人口问题的关注。据此，1990年7月11日遂成为第一个“世界人口日”。2011年10月31日，世界人口已达到70亿。"
            ]
        },{
            "title": "由来",
            "detail": [
                "1987年7月11日，前南斯拉夫的一个婴儿降生，被联合国象征性地认定为是地球上第50亿个人，并宣布地球人口突破50亿大关。联合国人口活动基金会(UNFPA)倡议将这一天定为”世界50亿人口日“。1990年，联合国决定将每年的七月十一日定为”世界人口日“，以唤起人们对人口问题的关注。"
            ]
        }
    ]
}`},{festival_name:"国际冰壶日",festival_desc:`{
    "disp_name": "国际冰壶日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "国际冰壶日"
                },
                {
                    "title": "节日时间",
                    "value": "每年的7月16日"
                }
            ],
            "detail": [
                "每年的7月16日为国际冰壶日。冰壶（curlings）又称掷冰壶、冰上溜石，是以队为单位在冰上进行的一种投掷性竞赛项目。"
            ]
        },{
            "title": "冰壶历史",
            "detail": [
                "冰上溜石14世纪起源于苏格兰，至今在苏格兰还保存刻有1511年份的砥石（即冰壶）。1795年，第一个冰上溜石俱乐部在苏格兰创立，1838年苏格兰冰上溜石俱乐部制定第一个正式的比赛规则。","1807年冰上溜石活动传入欧洲和北美加拿大，1820年起在美国等地流行。从此，冰上溜石作为一项冬季运动在逐渐开展起来。","20世纪初，通过加拿大冰上溜石爱好者的努力，使这项运动的比赛规则和方法更加完美，并由室外逐渐移入室内，并于1927年举行首次全国冰上溜石比赛。首届世界冰上溜石锦标赛始于1959年，最初称为苏格兰威士忌杯赛，1968年改称加拿大银扫帚锦标赛，1986年正式定名为世界冰上溜石锦标赛。","1955年冰上溜石传入亚洲地区，目前日本、韩国等地非常流行。","1924年，冰壶首次以表演项目的形式在奥运会上亮相。1966年国际冰上溜石联全会成立，1991年改为世界冰上溜石联合会，同时获得了国际奥委会的承认。冰上溜石曾于1924年、1932年、1936年、1964年、1968年、1992年6次被列为冬奥会表演项目。1993年国际奥委会决定，从1998年开始，冰上溜石列为冬奥会正式比赛项目。在亚洲，冰上溜石从第五届亚冬会开始列为正式比赛项目。冬奥会比赛项目，设男、女、混合双人3个小项。"
            ]
        }
    ]
}`},{festival_name:"世界肝炎日",festival_desc:`{
    "disp_name": "世界肝炎日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "世界肝炎日"
                },
                {
                    "title": "节日时间",
                    "value": "每年的7月28日"
                }
            ],
            "detail": [
                "7月28日是已故诺贝尔奖得主巴鲁克·布隆伯格的诞辰日，为纪念这位乙肝病毒发现者，世界卫生组织2010年5月决定，从2011年开始将每年的世界肝炎日从5月19日变更为7月28日。"
            ]
        },{
            "title": "社会背景",
            "detail": [
                "肝炎（学名：Hepatitis)是肝脏的炎症。肝炎的原因不同，最常见的是病毒造成的，此外还有自身免疫造成的。酗酒也可以导致肝炎。肝炎分急性和慢性肝炎。由病毒造成的肝炎按照其病毒系列不同分为甲型肝炎、乙型肝炎、丙型肝炎、丁型肝炎、戊型肝炎和庚型肝炎共六种类型病毒性肝炎。","肝炎的早期症状及表现，如：食欲减退，消化功能差，进食后腹胀，没有饥饿感；厌吃油腻食物等。","肝炎暂无有效预防措施，早发现早诊断是本病防治的关键。脂肪肝是引起肝炎的重要原因，近年来明显增多的肝脏病，常与肥胖症、糖尿病共存。要远离脂肪肝，应从调节饮食入手。控制脂肪饮食当然是必需的。预防脂肪肝还要提倡运动，运动可以消耗掉体内多余的脂肪。","肝炎是肝脏的炎症，最常见的原因是病毒感染。病毒性肝炎分为甲、乙、丙、丁和戊型，虽然病毒种类不同，但都足以对人构成严重危害，其中乙型和丙型肝炎可以导致肝硬化和肝癌的发生，给全球带来严重的疾病负担。","世界卫生大会首次就病毒性肝炎通过一项决议，审视了疾病的现状，要求世卫组织制定一项有时间目标限定的全面战略，加强疾病监测、提高预防手段，扩大筛查范围并向感染者提供治疗，及向发展中国家提供切实的帮助。","全世界约有20 亿人已感染乙型肝炎病毒，其中3.5 亿以上的人患有慢性感染，每年有50 至70 万人死于乙型肝炎病毒感染。约有1.3 至1.7 亿人为慢性丙型肝炎病毒感染，估计每年有35 万人因与丙型肝炎相关的肝脏疾病死亡。"
            ]
        },{
            "title": "治疗误区",
            "detail": [
                "误区一：症状和一般疾病混同\\n通常对于乙肝病毒携带者来说，如果病毒在肝细胞内复制活跃，肝功能受到损伤，会表现出一些症状。全身疲乏无力、口干、口苦、食欲减退、恶心、厌油腻、右上腹隐隐作痛、腹泻、小便黄如浓茶色等都是病症的反应。","误区二：不发病就不会传染\\n大部分携带者几年、甚至几十年都不会发病，所以人们就认为其不具有传染性，也无须检查。其实不然。建国医院肝病科吴医师介绍，所谓病毒携带者，是肝功能和B超检测都正常，但表面抗原呈阳性，也就是澳抗阳性的人。这些人的肝脏并没有损伤，但只要检测出澳抗阳性，就具有传染性。","误区三：不做定期体检\\n及时、准确地检测病情，对治疗是非常有利的。很多人在乙肝病毒感染的早期，或感染后相当长的时期内，都不会出现任何症状，要早发现乙肝最有效的方法，就是每一年或半年体检一次，检查肝功能和乙肝五项指标。"
            ]
        }
    ]
}`},{festival_name:"世界爱虎日",festival_desc:`{
    "disp_name": "世界爱虎日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "世界爱虎日"
                },
                {
                    "title": "节日时间",
                    "value": "每年的7月29日"
                },
                {
                    "title": "节日意义",
                    "value": "树立公众的野生虎保护意识"
                },
                {
                    "title": "设定时间",
                    "value": "2010年11月"
                }
            ],
            "detail": [
                "2010年1月，泰国召开的老虎保护亚洲部长级会议提出将每年的7月29日设为“全球老虎日”。","2010年11月，于俄罗斯圣彼得堡召开的“保护老虎国际论坛”（老虎峰会）通过了“全球野生虎种群恢复计划”并发表了《全球野生虎分布国政府首脑宣言》，倡议共同努力促进野生虎及栖息地的保护，并确定每年的7月29日为“全球老虎日”。"
            ]
        },{
            "title": "节日由来",
            "detail": [
                "2010年11月23日，来自孟加拉人民共和国、不丹王国、柬埔寨王国、中华人民共和国、印度共和国、印度尼西亚共和国、老挝人民民主共和国、马来西亚、缅甸联邦、尼泊尔王国、俄罗斯联邦、泰王国和越南社会主义共和国等13个全球野生虎分布国的政府首脑，参加“保护老虎国际论坛”（即老虎峰会）。峰会上，各国政府代表意识到野生虎的生存已经到了濒临灭绝的紧要关头。在过去的一百年里，全球野生虎的数量从100000只锐减到不到3500只。野生虎是健康生态系统的重要标志之一，如果不扭转这样的趋势，结果不只是野生虎数量上的锐减，人类自身也将遭受由于野生虎栖息地丧失及其种群消亡给整个亚洲的生物多样性及我们共同赖以生存的生态系统带来的巨大损失。同时，为了树立公众的野生虎保护意识，这次峰会将每年的7月29日定为“全球老虎日”。"
            ]
        },{
            "title": "物种渊源",
            "detail": [
                "约200万年前，虎起源于中国中部。\\n17世纪早期，共有8个虎的亚种，它们是:里海虎、孟加拉虎、印支虎、东北虎、华南虎、爪哇虎、苏门达腊虎以及巴厘虎。\\n19世纪末期，老虎皮毛的不断增值导致了中亚以及前苏联远东地区老虎数量的锐减。\\n1906年，巴基斯坦最后一只老虎被射杀。\\n20世纪30年代，最后一只巴厘虎于1937年9月27日被射杀。\\n20世纪40年代，高强度伐木活动使东北虎栖息地遭严重破坏。\\n20世纪50年代，朝鲜最后一只老虎死亡。\\n1952年，前苏联成为第一个明令禁止猎杀老虎的国家。\\n1970年，土耳其最后一只老虎被射杀。\\n20世纪70年代，里海虎绝种。\\n1980年，最后一只爪哇虎在雅加达的动物园去世。\\n2004年，马来虎被确认为新的老虎亚种，此前被归为印支虎的一个种群。\\n2005年，俄罗斯宣布国内东北虎数量达到近500头，比50年前增加10倍，成为老虎保护的一个成功典范。"
            ]
        }
    ]
}`},{festival_name:"非洲妇女节",festival_desc:`{
    "disp_name": "非洲妇女节",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "非洲妇女节"
                },
                {
                    "title": "节日时间",
                    "value": "每年的7月31日"
                },
                {
                    "title": "设定时间",
                    "value": "1962年7月"
                }
            ],
            "detail": [
                "非洲妇女节，一个1962年7月设定于达累斯萨拉姆有关妇女的节日。"
            ]
        },{
            "title": "节日由来",
            "detail": [
                "1962年7月，全非妇女第一次代表大会在达累斯萨拉姆召开，成立了“全非妇女会议”（今名“泛非妇女组织”），确定每年的7月31日为“非洲妇女日”。这个组织的代表大会以及重大庆祝活动都在这天举行。","泛非妇女组织是非洲统一组织下属的全非性妇女组织，享有“非统”观察员地位。原名为全非妇女会议，在加纳、几内亚、坦桑等国的倡议下，于1962年7月在达累斯萨拉姆召开成立大会。1974年在第四次代表大会上改为现名。"
            ]
        },{
            "title": "节日意义",
            "detail": [
                "联合国的四次全球性会议加强了国际妇女运动，随着国际妇女运动的成长，妇女节取得了全球性的意义。这些进展使国际妇女节成为团结一致、协调努力要求妇女权利和妇女参与政治、经济和社会生活的日子。"
            ]
        }
    ]
}`},{festival_name:"中国男子节",festival_desc:`{
    "disp_name": "中国男子节",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "中国男子节"
                },
                {
                    "title": "别名",
                    "value": "爸爸节"
                },
                {
                    "title": "节日时间",
                    "value": "每年的8月8日"
                },
                {
                    "title": "节日意义",
                    "value": "其目的是为了纪念在战场上为国捐躯的父亲们"
                },
                {
                    "title": "流行地区",
                    "value": "上海"
                }
            ],
            "detail": [
                "每年的8月8日为中国男子节，也有爸爸节之称。是在1945年8月8日，由上海的部分爱国人士发起的，其目的是为了纪念在战场上为国捐躯的父亲们。8月8日的爸爸节与父亲节不同，是中国特有的男子节，原因很简单：“八八”与“爸爸”是同音。其由来据说与抗战有关，1945年8月8日，上海部分爱国人士发起“父亲节”，纪念在战场上为国捐躯的父亲们。抗战胜利后，就把每年8月8日定为爸爸节。"
            ]
        },{
            "title": "节日由来",
            "detail": [
                "每年8月8日为中国的男子节！也是所说的88（爸爸）节！ 八月八日爸爸节，这个节日的由来和对日抗战有关。 民国三十四年，当时抗战打得正火热，上海的爱国之士为了纪念在战争中为国捐躯的爸爸们，特地提出父亲节的构想，还举办庆祝活动。抗战胜利后，上海仕绅名流们觉得庆祝父亲节实在太有意义啦！积极争取之下，八月八日就被当时的中央政府订为爸爸们的专属节日。"
            ]
        }
    ]
}`},{festival_name:"国际左撇子日",festival_desc:`{
    "disp_name": "国际左撇子日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "国际左撇子日"
                },
                {
                    "title": "外文名",
                    "value": "International Left-Handers Day"
                },
                {
                    "title": "节日时间",
                    "value": "每年的8月13日"
                },
                {
                    "title": "起源时间",
                    "value": "1975年8月13日"
                }
            ],
            "detail": [
                "国际左撇子日是8月13日，是为了提醒大家注意左撇子在生活中遭遇的种种不便，希望能促进在教育、日常生活工具的设计上，重视左撇子的权益并发起对左撇子的相关研究而设立的节日。"
            ]
        },{
            "title": "节日起源",
            "detail": [
                "1975年8月13日，美国堪萨斯州托佩卡市的一群左撇子建立了名叫左撇子国际的组织，他们设想把全世界的左撇子联合起来，共同争取左撇子的权益。1976年，该组织举行庆祝活动。并将这一天确定为国际左撇子日，希望有朝一日全世界的左撇子一起庆祝自己的节日。1976年的8月13日就成为第一个国际左撇子日。"
            ]
        },{
            "title": "节日意义",
            "detail": [
                "这个节日的目在于提醒人们注意到左撇子在以右手为主的世界中，遭遇的种种不便，希望能促进在教育、日常生活、工具的设计上重视惯用左手者的权益，并发起对左撇子的相关研究。"
            ]
        },{
            "title": "相关名人",
            "detail": [
                "左撇子——这个所谓“另类”群体之中，是一个天才云集之地：拿破仑、歌德、尼采、毕加索、达芬奇、鲍勃·迪伦、列维·卡洛、爱因斯坦、拉斐尔、米开朗琪罗、卓别林、玛丽莲·梦露、甘地、贾斯汀比伯、休·杰克曼、亚里士多德 [5-6]  等等。左撇子们宣言，建立国际左撇子日的目的在于团结世界各地的左撇子为争取自身的利益而斗争，唤起全社会对左撇子问题的关注，提醒人们在一个以右撇子为主的社会中改进产品的设计并更多考虑左撇子的方便与安全，消释数千年来在各种文化中都存在而今天也还在不断制造着的对左撇子的偏见。"
            ]
        }
    ]
}`},{festival_name:"火把节",festival_desc:`{
    "disp_name": "火把节",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "火把节"
                },
                {
                    "title": "别名",
                    "value": "星回节"
                },
                {
                    "title": "节日时间",
                    "value": "农历六月二十四"
                },
                {
                    "title": "流行地区",
                    "value": "彝族、白族、纳西族、拉祜族"
                }
            ],
            "detail": [
                "火把节是彝族、白族、纳西族、基诺族、拉祜族等民族的古老传统节日，有着深厚的民俗文化内涵，被称为“东方的狂欢节”。不同的民族举行火把节的时间也不同，大多是在农历的六月二十四，主要活动有斗牛、斗羊、斗鸡、赛马、摔跤、歌舞表演、选美等。在新时代，火把节被赋予了新的民俗功能，产生了新的形式。"
            ]
        },{
            "title": "由来传说",
            "detail": [
                "云南各民族关于火把节的传说，各有各的特色内容。彝族关于火把节的传说，实际上是以游牧为主转为以农耕为主之后，新的文化形态对原有文化形态的扬弃。这个传说最大限度地保留了火把节来源的原始信息，也是最接近火把节源头的一个传说。纳西族关于火把节传说的谚语中保留了火把节来历的重大信息，与《玉溪编事》、《禄劝县志》、《峒溪县志》中的记载共同对探究火把节的来历提供了重要线索。大理和昆明一带关于火把节的传说，虽然遮掩了火把节的来源，但其“星回节”的说法，一样露出了火把节的源头活水及深厚文化。"
            ]
        },{
            "title": "举办时间",
            "detail": [
                "彝族、纳西族、基诺族在农历六月二十四举行，白族在六月二十五举行，拉祜族在六月二十举行，节期二三天。彝族认为过火把节是要长出的谷穗像火把一样粗壮。后人以此祭火驱家中田中鬼邪，以保人畜平安。如今人们还利用集会欢聚之机，进行社交或情人相会，并在节日开展商贸活动。","“火把节”也是白族的一个盛大节日，每年夏历六月二十五日，白族人民就会举行预祝五谷丰登、人畜兴旺的活动。","江苏省南通地区是整个汉族中可以说是唯一进行火把节的地区，每年的冬至那一天，当地的精壮男子都会拿着一大把由稻秆作成的火把，在房前屋后浇上油，在田间地头绕上几圈，以乞求来年的风调雨顺，五谷丰登。"
            ]
        },{
            "title": "庆祝活动",
            "detail": [
                "彝族火把节一般历时三天三夜，分为迎火、玩火、送火三个阶段。火把节第一天：祭火。这一天，村村寨寨都会宰牛杀羊，集体分享，并备酒肉祭祖。火把节第二天：传火。这一天，家家户户都聚集在祭台圣火下，举行各式各样的传统节日活动。火把节第三天：送火。这是整个凉山彝族国际火把节的高潮。这一天夜幕降临时，人人都会手持火把，竞相奔走。最后人们将手中的火把聚在一起，形成一堆堆巨大的篝火，欢乐的人们会聚在篝火四周尽情地歌唱、舞蹈。"
            ]
        }
    ]
}`},{festival_name:"全国中小学开学日",festival_desc:`{
    "disp_name": "全国中小学开学日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "全国中小学开学日"
                },
                {
                    "title": "外文名",
                    "value": "The first day of classes of primary and secondary schools"
                },
                {
                    "title": "节日时间",
                    "value": "9月1日"
                }
            ],
            "detail": [
                "全国中小学开学日，中小学秋季开学都约定俗成地定在9月1日。"
            ]
        },{
            "title": "节日背景",
            "detail": [
                "2008年9月1日，中央电视台和教育部首次联合推出《开学第一课》“知识守护生命”大型公益行动，节目以生命意识教育和应急避险教育为主题，将奥运精神与抗震精神相结合，通过奥运冠军和孩子们的互动，寓教于乐，凸显了以人为本，尊重生命，守护生命。"
            ]
        },{
            "title": "节日由来",
            "detail": [
                "教育部于2008年8月26日专门发文，通知全国各地学校组织学生和家长一起收看此节目，让全国2.2亿中小学生同上这一堂课，被媒体称作是“史上最牛一堂课”。《开学第一课》播出后，收到了良好的社会效果，社会反响强烈，节目在中央一套及二套重播多次，《开学第一课》也成为一个知名品牌。因此9月1日自然而然地被定为全国开学日。"
            ]
        }
    ]
}`},{festival_name:"国际扫盲日",festival_desc:`{
    "disp_name": "国际扫盲日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "国际扫盲日"
                },
                {
                    "title": "外文名",
                    "value": "International Literacy Day"
                },
                {
                    "title": "节日时间",
                    "value": "每年9月8日"
                },
                {
                    "title": "节日意义",
                    "value": "扫盲"
                },
                {
                    "title": "设立机构",
                    "value": "联合国教科文组织"
                },
                {
                    "title": "设定时间",
                    "value": "1965年11月17日"
                }
            ],
            "detail": [
                "国际扫盲日（International Literacy Day）是联合国教科文组织在1965年11月17日所召开的第14届代表大会上所设立的。日期为每年的9月8日，旨在动员世界各国以及相关国际机构重视文盲现象，与文盲现象作斗争，并促进世界各国普及初等教育，提高初等教育的水平，使适龄儿童都能上学，达到能够识字的目标。最终达到增进人际沟通，消除歧视，促进文化传播和社会发展的目标。"
            ]
        },{
            "title": "发展历史",
            "detail": [
                "1966年，联合国教科文组织第十四次大会决定，每年9月8日为国际扫盲日。其目的在于各成员国和有关国际机构同文盲现象作斗争。从此以后，各成员国每年这一天都组织各种活动。"
            ]
        },{
            "title": "设立宗旨",
            "detail": [
                "文盲现象是一个全球性的社会问题，严重阻碍了社会的发展。为了消灭文盲现象，联合国教科文组织早在1966年就决定，把每年的9月8日定为国际扫盲日，目的是动员世界各国和有关国际机构同文盲现象作斗争，并希望通过国际扫盲日活动推动扫盲工作的开展，使各国适龄儿童都能上学、在校学生不过早辍学、成年文盲有受教育机会。"
            ]
        },{
            "title": "产生影响",
            "detail": [
                "人类在扫盲上取得的巨大成就值得庆祝，全世界已有近四十亿的识字人口。但是，在所有儿童、青年和成人中实现全民扫盲依然是一个未完成的目标，而且这个目标时时在变化。之所以会这样，其原因很可能是：过高的目标，不充足的和重复的工作，政策和资源的缺乏，以及持续对任务重要性和复杂性的低估。不管怎样，我们从这几十年获得的经验说明：达到普及识字的目标，不仅需要更多、更好的努力，还需要更新政治理念，并且针对地方、国家和国际等不同等级做不同的工作。"
            ]
        }
    ]
}`},{festival_name:"国际新闻工作者日",festival_desc:`{
    "disp_name": "国际新闻工作者日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "国际新闻工作者日"
                },
                {
                    "title": "别名",
                    "value": "国际新闻工作者团结日"
                },
                {
                    "title": "节日时间",
                    "value": "每年9月8日"
                },
                {
                    "title": "节日目的",
                    "value": "唤起全世界的新闻工作者加强团结"
                }
            ],
            "detail": [
                "每年9月8日是“世界新闻记者日”或“国际新闻工作者团结日”。其目的是唤起全世界的新闻工作者加强团结、努力工作、认真采写真实报导、揭露战争贩子的反动面目、及时报导事件发生的真象、打击坏人坏事，保卫世界和平。9月8日为纪念捷克斯洛克氏族英雄、共产党员、新闻记者尤利乌斯·伏契克于1943年9月8日被德国法西斯杀害的纪念日。"
            ]
        },{
            "title": "简介",
            "detail": [
                "新闻记者，是指专职于新闻工作机构中从事采访报导社会上的新闻的专业从业人员。包括编辑、采访、评论人员等。中国的新闻机构最初是采编合一的。19世纪70年代开始设立专职的采访人员，最初时不叫“记者”，而称为“访员”、“访事”、“报事人”等。19世纪90年代后才开始称采访人员为“记者”。"
            ]
        },{
            "title": "相关来历",
            "detail": [
                "国际新闻工作者协会，简称“国际记协”，英文缩写“IOJ”。1946年6月由前苏联、波兰等国在哥本哈根成立。其创建任务是：帮助自由、真实地交换新闻、维护和平，增进各国人民之间的友谊和国际谅解，捍卫人民获得真实准确新闻的权利，保护记者的权益。1947年记协二大后，11个主要西方国家退出记协，并于1952年成立了国际新闻工作者联合会（“国际记联”），分裂后的记协将总部迁到布拉格。"
            ]
        }
    ]
}`},{festival_name:"国际臭氧层保护日",festival_desc:`{
    "disp_name": "国际臭氧层保护日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "国际臭氧层保护日"
                },
                {
                    "title": "别名",
                    "value": "国际保护臭氧层日"
                },
                {
                    "title": "节日时间",
                    "value": "每年9月16日"
                },
                {
                    "title": "节日意义",
                    "value": "倡导人们保护空气、保护地球，少用破坏臭氧、污染环境的东西"
                },
                {
                    "title": "设立机构",
                    "value": "联合国大会"
                }
            ],
            "detail": [
                "每年的9月16日是国际臭氧层保护日。随着人类活动的加剧，地球表面的臭氧层出现了严重的空洞，1974年被美国加利福尼亚大学的教授罗兰(F.Sherwood Rowland)和穆连(Mario Molina)发现。 保护臭氧层就是保护蓝天，保护地球生命。 1995 年1月23日联合国大会决定，每年的9月16日为国际保护臭氧层日，要求所有缔约国按照《关于消耗臭氧层物质的蒙特利尔议定书》及其修正案的目标，采取具体行动纪念这个日子。"
            ]
        },{
            "title": "设立宗旨",
            "detail": [
                "臭氧层是指距离地球25-30公里处臭氧分子相对富集的大气平流层。它能吸收99%以上对人类有害的太阳紫外线，保护地球上的生命免遭短波紫外线的伤害。所以，臭氧层被誉为地球上生物生存繁衍的保护伞。","保护臭氧层就是保护蓝天，保护地球生命。为了唤起公众环境保护意识，1995年1月23日联合国大会决定，每年的9月16日为国际保护臭氧层日(International Day for the Preservation of the Ozone Layer)，要求所有缔约国按照《关于消耗臭氧层物质的蒙特利尔议定书》及其修正案的目标，采取具体行动纪念这个日子。"
            ]
        }
    ]
}`},{festival_name:"中国脑健康日",festival_desc:`{
    "disp_name": "中国脑健康日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "中国脑健康日"
                },
                {
                    "title": "节日时间",
                    "value": "每年9月16日"
                },
                {
                    "title": "建立时间",
                    "value": "2000年9月16日"
                },
                {
                    "title": "发起人",
                    "value": "中国医促会脑健康专业委员会"
                }
            ],
            "detail": [
                "2000年9月16日，我国把每年9月命名为“脑健康月”。中国医促会脑健康专业委员会的王忠诚等百余位著名专家学者发出倡议，将每年9月16日定为“脑健康日”。"
            ]
        },{
            "title": "节日概述",
            "detail": [
                "国际脑研究组织第四届神经科学大会，把21世纪称为“脑的世纪”。近年来，我国神经系统和精神疾病发病率呈逐年上升之势，这已引起了社会各界的广泛关注。2000年9月16日，我国把每年9月命名为“脑健康月”。中国医促会脑健康专业委员会的王忠诚等百余位著名专家学者发出倡议，将每年9月16日定为“脑健康日”。"
            ]
        },{
            "title": "节日简介",
            "detail": [
                "9月是中国脑健康月，9月16日是第18个“中国脑健康日”，而9月21日又是一年一度的“世界老年痴呆日”。两个“日”的设立凸显“脑健康”的重要性以及其受关注程度。据了解，目前我国脑血管病患者近700万，每年新发病人都超过200万。而中国在医学界对于脑健康的研究重点是集中在脑血管、老年痴呆症、癫痫、精神发育迟滞等典型病症上。在所有的疾病中，脑血管病的致残率是最高的，其中70%以上都留下各种各样的后遗症。"
            ]
        }
    ]
}`},{festival_name:"国际和平日",festival_desc:`{
    "disp_name": "国际和平日",
    "area": 0,
    "type": 0,
    "cards": [
        {
            "title": "简介",
            "tags": [
                {
                    "title": "中文名",
                    "value": "国际和平日"
                },
                {
                    "title": "外文名",
                    "value": "International Day of peace"
                },
                {
                    "title": "节日时间",
                    "value": "每年9月21日"
                },
                {
                    "title": "纪念意义",
                    "value": "呼吁全球停火和非暴力"
                }
            ],
            "detail": [
                "2001年9月7日，联合国大会通过决议，决定自2002年起，国际和平日为9月21日。决议中提到：“宣布此后，国际和平日应成为全球停火和非暴力日，并邀请所有国家和人民在这一天停止敌对行动。”55/282号决议还邀请所有会员国、联合国系统各组织、区域组织和非政府组织以及个人以各种适当方式（包括教育和公众宣传）庆祝国际和平日并同联合国合作实现全球停火。"
            ]
        },{
            "title": "设定宗旨",
            "detail": [
                "2001年9月，联合国大会在其通过的第55/282号决议中决定，从2002年开始，每年9月21日为“国际和平日”。","国际和平日定于每年9月第三个星期二举行。这个节日恰逢联合国大会在纽约举行的常会开幕。联合国在1981年宣布国际和平日，并邀请全体会员国，非政府组织和各界人士以一种方式庆祝这个节日，借以表现联合国承诺维持各个民族和各个国家之间的和平。联合国网络空间校车是全球教学与学习计划所包括的现象……","自国际和平日设立以来，联合国每年都会在这一天举行仪式并敲响和平钟，邀请艺术家和教育家等作为和平使者出席纪念活动，联合国都提醒所有人关注、庆祝和纪念这一日子。同时，各国政府、非政府机构、民间社会和宗教团体也会举办纪念活动庆祝这个日子。国际和平日已在世界范围内得到2000多个组织机构的支持。","联合国将举办活动提请所有人民关注、庆祝和纪念这个日子。大会宣布国际和平日为全球停火和非暴力日，并邀请所有国家和人民在这一天停止敌对行动。大会邀请所有会员国、联合国系统各组织、区域组织和非政府组织以及个人以适当方式，包括通过教育和公众宣传庆祝国际和平日并同联合国合作实现全球停火。"
            ]
        },{
            "title": "发展历史",
            "detail": [
                "联合国大会于1981年通过决议，将每年9月的第三个星期二联大开幕的日子定为国际和平日。1997年3月，中国人钟文芳先生向联合国安理会提出“世界息战周”的构想，主张“息战周内一切战乱国家和地区都应无条件息战”，“以给战乱地区以停战思考，提供缓和矛盾的契机，有效地推动世界和平”（据《世界名人与和平报》1997年3月18日报道）。2001年9月7日，联大通过第55/282号决议，决定从2002年开始，将每年的9月21日定为国际和平日。大会宣布，国际和平日为全球停火和非暴力日，并呼吁所有国家和人民在这一天停止敌对行动。大会还号召所有会员国、联合国系统各组织、区域组织和非政府组织以及个人，通过教育和公众宣传等适当方式庆祝国际和平日并同联合国合作实现全球停火。这正是钟文芳先生提出的“世界息战周”具体体现，并且，9月21日为钟文芳先生的生日。","自国际和平日设立以来，每年的这一天，联合国都举行仪式，提请所有人关注、庆祝和纪念这一日子。同时，全世界的政府和非政府机构、民间社会和宗教团体也纷纷举行各种活动纪念国际和平日。在这一天，会进行“根与芽”的活动，人们还要放飞和平鸽。","多年来，包括联合国在内的国际社会为实现地区稳定和世界和平作出了不懈努力。然而在全世界范围内，战争、恐怖袭击、地区冲突等多种形式的暴力敌对活动依然存在，人类实现真正和平的理想任重而道远。"
            ]
        }
    ]
}`}],rj=new Map;for(const n of Md)try{const e=JSON.parse(n.festival_desc);rj.set(n.festival_name,e)}catch{}function Be(n){return rj.get(n)}const Pd=[[1,1,"元旦"],[2,10,"气象节"],[2,14,"情人节"],[3,3,"爱耳日"],[3,8,"妇女节"],[3,12,"植树节"],[3,15,"消费者权益日"],[3,22,"世界水日"],[4,1,"愚人节"],[4,22,"地球日"],[5,1,"劳动节"],[5,4,"青年节"],[5,12,"护士节"],[6,1,"儿童节"],[6,6,"爱眼日"],[7,1,"建党节"],[8,1,"建军节"],[9,10,"教师节"],[9,20,"爱牙日"],[9,30,"中国烈士纪念日"],[10,1,"国庆节"],[10,10,"辛亥革命纪念日"],[10,16,"粮食日"],[10,25,"台湾光复节"],[10,31,"万圣夜"],[11,8,"记者节"],[11,17,"大学生节"],[12,13,"南京大屠杀死难者国家公祭日"],[12,20,"澳门回归纪念日"],[12,24,"平安夜"],[12,25,"圣诞节"]],Td=[{month:5,nth:2,weekday:0,name:"母亲节"},{month:6,nth:3,weekday:0,name:"父亲节"},{month:11,nth:4,weekday:4,name:"感恩节"}],Ld=[[1,1,"春节"],[1,15,"元宵节"],[2,2,"龙抬头"],[3,3,"上巳节"],[4,8,"佛诞"],[5,5,"端午节"],[7,7,"七夕"],[7,15,"中元节"],[8,15,"中秋节"],[9,9,"重阳节"],[10,1,"寒衣节"],[10,25,"天穿日"],[12,8,"腊八节"],[12,16,"尾牙"],[12,23,"北方小年"],[12,24,"南方小年"]];function Id(n,e,t,i){const l=new Date(Date.UTC(n,e-1,1)).getUTCDay();return 1+(i-l+7)%7+(t-1)*7}function uj(n,e){const t=[];for(const[l,s,a]of Pd)n.month===l&&n.day===s&&t.push({name:a,kind:"solar",detail:Be(a)});for(const l of Td)n.month===l.month&&n.day===Id(n.year,l.month,l.nth,l.weekday)&&t.push({name:l.name,kind:"solar",detail:Be(l.name)});if(!e.isLeapMonth){for(const[l,s,a]of Ld)e.month===l&&e.day===s&&t.push({name:a,kind:"lunar",detail:Be(a)});e.month===12&&e.day===e.monthDays&&t.push({name:"除夕",kind:"lunar",detail:Be("除夕")})}const i=ij(n);return i&&(t.push({name:i.name,kind:"solar-term",detail:Be(i.name)}),i.name==="清明"&&t.push({name:"清明节",kind:"solar",detail:Be("清明节")})),t}function Rd({year:n,month:e,selected:t,onSelect:i}){const l=C.useMemo(()=>qy(n,e),[n,e]);return r.jsxs("div",{className:"select-none",children:[r.jsx("div",{className:"grid grid-cols-7 gap-y-1 text-center text-[11px] text-muted",children:bc.map(s=>r.jsx("div",{className:"py-1",children:s.replace("星期","周")},s))}),r.jsx("div",{className:"grid grid-cols-7 gap-y-1",children:l.map((s,a)=>r.jsx("div",{className:"grid grid-cols-7",children:s.map(({date:u,inMonth:o})=>{const c=`${u.getFullYear()}-${u.getMonth()+1}-${u.getDate()}`,f=u.getFullYear()===t.getFullYear()&&u.getMonth()===t.getMonth()&&u.getDate()===t.getDate(),g=u.getFullYear()===new Date().getFullYear()&&u.getMonth()===new Date().getMonth()&&u.getDate()===new Date().getDate();let x="",m=null;try{const v=dr(u.getFullYear(),u.getMonth()+1,u.getDate());x=v.day===1?v.monthName:v.dayName;const p=uj({year:u.getFullYear(),month:u.getMonth()+1,day:u.getDate()},v),D=p.find(d=>d.kind==="solar"),y=p.find(d=>d.kind==="lunar"),j=p.find(d=>d.kind==="solar-term");j?m={text:j.name,tone:"gold"}:D?m={text:D.name,tone:"accent"}:y&&(m={text:y.name,tone:"accent"})}catch{x=""}return r.jsxs("button",{type:"button",onClick:()=>i(u),className:`flex h-14 flex-col items-center justify-center rounded-xl border transition ${f?"border-accent bg-accent text-white":g?"border-accent/50 bg-accent-soft text-ink":"border-transparent hover:bg-paper"} ${o?"":"opacity-40"}`,children:[r.jsx("span",{className:`text-[15px] leading-tight ${f?"font-semibold":"font-medium"}`,children:u.getDate()}),r.jsx("span",{className:`mt-0.5 max-w-full truncate px-0.5 text-[10px] leading-tight ${f?"text-white/85":"text-muted"}`,children:m?m.text:x})]},c)})},a))})]})}const Od=[{key:"八专",value:"忌行军、出阵、安营。"},{key:"天刑",value:"指上天的法则，天降的刑罚，也特指古代的宫刑。引申为意外之灾。该时辰容易发生意外、带来身体伤害，或东西发生破损等。"},{key:"阳破阴冲",value:"阳破阴冲是阴阳二建分别冲破的干支的合称，这种情况在一年中共有两次，即两日。六月阳建在未而冲破丑，阴建在己而冲破癸，因此，六月的癸丑日被称为阳破阴冲。同样的，十二月的阳建在丑而冲破未，阴建在亥而冲破丁，因此，十二月的丁未日也被称为阳破阴冲。"},{key:"行狠",value:"在十二个月中，三月、四月、九月、十月这四个月没有阴阳大会日，因此古代术数家按照天干方位与月建的对照规则，将阳建方己错过的天干与月厌地支相配，成为行狠。"},{key:"月刑",value:"忌修造、词讼、出阵、行军、嫁娶、移徒、犯之主损人丁、六畜，凶日。"},{key:"福德",value:"福德为月令生旺之气，阴阳解凶之神。命带福德秀气者，赋性聪明，温原和气。"},{key:"安葬",value:"举行埋葬等仪式。"},{key:"合脊",value:"装盖房屋的屋顶等工作"},{key:"造船",value:"建造或制造船只。"},{key:"天吏",value:"凶日，百事忌。"},{key:"天后",value:"宜求医、疗病、针灸、服药之类的事情。"},{key:"习艺",value:"学艺，学新技术或新技能。"},{key:"伐木",value:"指砍伐树木，修剪花木花枝。"},{key:"砂石金",value:"甲午乙未沙中金，午为火势最旺之地，火旺则金衰，未为火衰之地，火衰败而金冠带，败而方冠带，未能作伐，故曰砂中金也。 砂中金初形成而未能有用，所以需火炼，但火过盛则〈火旺金败〉了，同时要有木制，使不随心所欲的盛衰，同时以火炼之，如山头火、山下火和覆灯火等性温和的火与它相遇，命书认为是少年荣华富贵的命局，另外，沙中陶金也是一种采金的方法，但水要净水如长流水、大海水则则把金沙一起淹没了，用井泉、涧下、天河等水也吉。沙中金怕遇见沙中土、大驿土和路旁土，是害怕被土覆盖的缘故。"},{key:"阴德",value:"阴德者，月内阴德之神，阴德日为阴德之神当值之日。天地间之气化有阴就有阳，互而为用，正所谓孤阳不生，独阴不长。德之神，扬善嫉恶，明察功过之神，凡有冤情待平复，或行善积德、惠泽贫困之举，选用阴德日其愿顺遂。"},{key:"庚不经络织机虚张",value:"逢庚日或逢庚时不能进行量体裁衣和缝补衣物。"},{key:"雕刻",value:"雕刻神像、画雕人像等。"},{key:"赴任",value:"官吏去到某地担任职务。"},{key:"致死",value:"又称天吏，为月中凶神，指的是三合五行的死气之辰。其方位以正月起酉，一次逆行子、酉、午、卯四仲。五行至死而无气，所以天吏主凶，所值之日忌临官、赴任、司讼。"},{key:"劫煞",value:"劫煞别名年夜耗，古歌云：劫煞为灾弗成当，枉然驱驰名利场，须防祖业尽灭亡，老婆若何得悠久。"},{key:"月破",value:"与月支对冲。凶日，百事忌。"},{key:"辛不合酱主人不尝",value:"逢辛日或逢辛时酿造行业的不能进行发酵和勾兑等事。"},{key:"纳婿",value:"指男方入赘于女方为婿之意。同招赘。"},{key:"安床",value:"指安置睡床卧铺之意。古时安床后，要请生肖属龙的孩童在床上翻转，俗称[翻床、翻铺]，为[早生贵子]的象征。并于晚间祭拜[床母]。安床后不能安房，亦忌单人独睡，所以大喜之前，准新郎睡觉时，需由一伴郎陪伴。"},{key:"六合",value:"古代以年月日时十二地支，选择吉日良时，考虑月和日的“冲（不利）”或“合（有利）”，“合”指子与丑合，寅与亥合，卯与戌合，辰与酉合，巳与申合，午与未合，称十二地支六合。"},{key:"逐阵",value:"逐阵指阴阳二建背道而驰，各随其阵。"},{key:"临日",value:"以正月午日、二月亥日、三月申日、四月丑日等为临日，宜祭祀、上册、上表章、入学、出行、上官赴任等。"},{key:"要安",value:"宜嫁娶、订婚、求财、造葬等。"},{key:"盖屋",value:"装盖房屋的屋顶等工作。"},{key:"吉期",value:"指婚期。《醒世恒言·大树坡义虎送亲》：“吉期将到， 梁大伯 假説某日与儿子完婚，特迎取姐夫一家到家中去接亲。” 明 叶宪祖 《鸾鎞记·圆成》：“今何夕，是吉期，称良会。”"},{key:"坏垣",value:"拆除围墙。"},{key:"开光",value:"用经咒对吉祥物进行加持。"},{key:"金堂",value:"是指适合兴土木、筑房的日子。"},{key:"阴阳交破",value:"阴阳交破在一岁中共有两日。四月阳建在己，破于亥，亥为阴，被阳所破；阴建在未，破于癸，癸为阳，被阴所破。因此，四月的癸亥日被称为阴阳交破。同理，十月的丁巳日也被称为阴阳交破。"},{key:"五虚",value:"忌闻张、闻库、闻铺、闻店。"},{key:"游祸",value:"忌求医、祭祀。官历宜服药。"},{key:"乙不栽植千株不长",value:"逢乙日或逢乙时不能进行农务方面的栽种。"},{key:"鸣吠",value:"鸡鸣犬吠之意，民间鸡叫和狗叫有避邪的意思，特别适合开光。"},{key:"造畜稠",value:"建造家禽及家畜住的小屋。"},{key:"天牢",value:"指设置在京由朝廷直接掌管的牢狱，也指北斗中的贯索星。泛指易入难出的地方。该时辰容易落入陷阱、圈套等困局的事。"},{key:"开生坟",value:"开造坟墓的破土动工。"},{key:"造桥",value:"建造桥梁。"},{key:"合寿木",value:"指人未死，先行作棺木之事。"},{key:"大海水",value:"水冠带在戌，临官在亥，水则力厚矣。兼亥为江，非他水之比，故曰大海水。   注释：   大海水汪洋一片，无人能知，就其汹涌澎拜则无人能抵。   因此以大海水为命的人，则有吉有凶。  万河归海，所以天河、长流、大溪等水遇之则吉；   如是壬辰与大海水相配则称为〈龙归大海〉；   如阴阳各支相配得当，则一生富贵无比，喜与见上火，因为日出东海；   金中喜海中金；   木中喜见桑柘木、杨柳木；   土中喜见路旁土、大驿土，吉；   明者皆承受不了大海水，相遇则凶；   如遇霹雳火相遇，海水汹涌，电闪雷鸣，这就是海上风暴的景象，人命如此，自然意味着其人一生颠簸。"},{key:"触水龙",value:"忌造船、修船、行船。"},{key:"四忌",value:"忌上官、远行、出军、嫁娶、进人口、迁移、百事忌。"},{key:"月虚",value:"忌造成门、开张、开店。"},{key:"九焦",value:"忌种植、修造、破土之事。"},{key:"定磉",value:"平建基，固定石磉。"},{key:"归宁",value:"新娘出嫁三天便回门。"},{key:"启钻",value:"指洗骨，俗称拾金（捡骨）。 在古代对逝者行二次葬时开棺捡骨，又称之为“启钻”"},{key:"治病",value:"治疗疾病。"},{key:"造庙",value:"建造宫，观，堂，寺，庙。"},{key:"天马",value:"宜出行、移居、入宅等事，有走动变动之意。"},{key:"天火",value:"忌盖屋、入宅、起造、修房。"},{key:"天恩",value:"天恩日为上天施恩德泽予民之日。施恩者，予人而不思回报之关怀也，故天恩日最宜择人任事、奖赏部属、救济贫困、布施政事为民与利除害。"},{key:"玄武",value:"四象之一，其形为龟，或龟蛇合体，位于北方，属水，色黑。此处代表欺诈、不实。该时辰容易被骗、易买到假货等。"},{key:"月恩",value:"月恩日，以当月五行之干支为依据，受月之干支所生的就是月恩日，如人之母恩于子之意。月恩日一样是适宜由内而外，拓展所图，如修造、起基动土、祭祀、嫁娶、求财、赴任等。"},{key:"探病",value:"黄历中的“探病”，看望病人的意思。"},{key:"挂匾",value:"指悬挂招牌或各种匾额。"},{key:"了戾",value:"在十二个月中，三月、四月、九月、十月这四个月没有阴阳大会日，因此古代术数家按照天干方位与月建的对照规则，将阳建前方尚不及的天干与月厌地支相配，称为了戾。"},{key:"复日",value:"忌安葬、修坟、破土、启攒、入殓、移柩、成除服。"},{key:"五墓",value:":凶日，百事忌。"},{key:"七鸟",value:""},{key:"断蚁",value:"指断蚁路。"},{key:"金箔金",value:"金箔金是古代用金箔装修房屋，以显现富丽堂皇，金箔来源于其他金，长脸宫室，打薄须藉乎别金，描彩必假乎水力。此金甚微非木则无所依，木以平地为上，有此不宜见火，有火主夭。溪水大海水浊，见溪水主漂荡，见大海无木为基主凶横。可塑性高，可經由磨練而適應於各種職場。個性柔順，自我意識不高。有趨炎附勢的傾向，具攀交及潤飾特質，以添加自个的光荣及声望。金遇剑钗能够装修有辅成造化之理故喜见。砂海地蜡无益有火济之亦吉无则终凶。城头壁上二土有靠安身，城头多主寄人，壁上加木则贵再遇灯光辉光照射主权贵。丙戌土中藏火干支却不宜太炎亦为贵格。壬午年出世：军中之马。为人节俭，爸爸妈妈有刑伤，灾危可折，早年资产有紧，晚年旺相有余；女命，主兴家也，为贤能之妇。癸卯年出世：树木之兔。酒食不欠，福寿有余，绝处逢生，终身安全、兴隆一世；女射中末命运欠佳，需辛劳操持家务。"},{key:"月空",value:"宜上表、修造、动土。"},{key:"安碓磑",value:"指安放磨具、榨油机器等用具。"},{key:"阴阳俱错",value:"指阴阳同建且又叠同建之干。这种情况在一年之中共有两日。五月阴阳二建合于午，对应天干是丙，干支相配为丙午日，因此，五月的丙午日即为阴阳俱错。同样的，十一月阴阳二建合于子，对应天干是壬，干支相配为壬子日，因此，十一月的壬子日即为阴阳俱错。"},{key:"大林木",value:"大林木者枝干撼风，柯条撑月，耸壑昂霄之德，凌云蔽日之功。此木生居东南春夏之交，长养成林，全假艮土为源癸丑为山，三命无破陷最为福厚权贵。戊辰为上己巳次之，土遇路傍为负载，戊辰见辛未为贵，己巳见庚午为禄主福，壁屋二土再得剑金，则大林之木取为栋梁，成格最吉。无此乃山间茂林之木，无论死活皆欲见土，如己人见甲虽云化土，然不如辰戌丑未土局纯全为妙。若此木以死，在山之下见甲戌乙亥烧之主凶夭。灯火就位相生乙巳不如甲辰更吉，霹雳太阳二火皆能长育，运中遇之亦吉。然二火嫌并见，持胜须有土为根基方可。水见天河，戊辰见丁未为带贵虽无土与山亦主有衣食即灵槎入天河格也，生秋冬死绝方是。溪海二水重见主贫夭，有山稍得。妙选有苍龙驾海格，是戊辰见癸亥为贵，涧下丁丑最吉丙子不如。诸金俱不宜见海中有乙丑为山剑锋得屋壁为本，佘无用逢之主夭贱。木喜桑柘惟癸丑最妙，平地还须得路傍土谓之平林在野，松柏东方生旺之地柱有癸丑，而得松柏为密阴最佳。"},{key:"屋上土",value:"实际上应是砖瓦，戌亥一水一土，和而成泥，再加上火以烧烤，就成为砖瓦。修屋造房各有所用，既是屋上土，则需要有木的支撑和金的刻削装点，屋上土方显金碧辉煌，大富大贵之象。大怕火灾，遇火则凶，但天上火（即太阳之火）除外。屋上土和壁上土都是算命的一种术语，是60纳音里的。60纳音就是10个天干和12地支轮换相配合得出的，两个都是土命是相比和的。如果一个是木命就成木克土了就不好了； 如果一个是水命形成土克水也不好 ；两个都是土命婚姻可以了，只不过是谁都不服气谁 。"},{key:"理发",value:"古时指初生婴儿剃胎头或削发出家。现代可用于日常的理发、做发型。"},{key:"大驿土",value:"大驿土者堂堂大道坦坦平途，九州无所不通，万国无行不至，此乃位属坤方，德乃厚载，轮天转日负海乘山之土，发生万物，以木为基，戊申长生之土，德厚无疆，见三四木皆能滋生，己酉自败之土，木多则窃气，大林合中逢冲主夭，别木则吉，更以禄贵参之，井泉涧下二水清贵不燥，如戊申见丁丑或乙酉见丙子或甲申谓之官贵主吉。天河丙午而己酉得之，丁未而戊申得之亦为贵禄主福长流。戊申见癸巳，己酉见壬辰亦吉，多逢则不宁静，大溪乙卯为东震发生之义单见亦吉。海水对穿土不能胜，日时遇主夭，得山稍轻，内戊申见癸亥戊癸合，申亥为地天交泰反吉。火见太阳霹雳谓之圣火最能发生此土，如逢水助主显达。其余凡火再逢木生之更燥，主凶夭。五行见土惟路傍最宜屋上壁上砂中纵先得木亦为泯绝，城头有水稍吉。命若有金，清秀吉，钗钏得辛亥金泊得壬寅，戊申遇之，柱中更加水助乃天地交泰，水绕山环大格主贵。己酉见庚戌癸卯稍次。砂金造化，亦同剑金须候木得用不然无益。"},{key:"元武",value:"即玄武，是北方七宿的总称。"},{key:"益后",value:"对子孙后代有补益的神。"},{key:"四击",value:"忌上官、远行、出军、嫁娶、进人口、迁移。"},{key:"时德",value:"德者得也，得天地之所生也（即天地之舒畅气化也）。时德日以季论，春季逢午日、夏季逢辰日、秋季逢子日、冬季逢寅日为时德日。既为四时所生，祈福、宴请、求职、谒贵均适宜。"},{key:"山头火",value:"山头火者野焚燎原延烧极目，依稀天际斜辉彷拂山头落日，此乃九月烧荒，衰草尽热之火也。大既宜山木与风，木喜大林与松柏以辰巳有风，寅卯归禄，更得癸丑为上土木主贵，无山则木无所依火无所见，纵有风亦不光显佘木无用，只以禄马看，水宜涧下名为交泰主吉。井泉清水有木助之亦吉大溪甲戌见甲寅乙亥见乙卯却真禄俱吉。天上须有雨露，而火到午未得地，再得清水济之，不至于燥主福，不然则夭。大海就位相克最凶，有山逢之稍得日时见金为财须有山木助之则吉，无则凶，见土惟砂中有巽能扬此火别土无益，大凡此火无木见土，多是下贱之命，见火炉中太炎霹火凶害，太阳昏蒙，山下战刑皆所不宜。命带二三火如限数逢木主祸生不测或夭，大都此火大怕刑冲。"},{key:"作灶",value:"安修厨灶、厨炉移位。"},{key:"青龙",value:"四象之一，其形象龙，位于东方，属木，色青，总称青龙。此处代表贵人，也即能帮助你的人。该时辰各类事情都较合适，特别利于向他人求助。"},{key:"山下火",value:"山下火者草间熠耀，花裹荧煌，寒林缀叶之光，隔幔点衣之彩，方朔以萤火名之。故妙选有萤火照水格，遇秋生则贵为卿监，是以此火喜水地支逢亥子或纳音水更遇申酉月是也，或以山下之火最喜木与山更得风来增辉为贵又不以萤火论矣。大林有辰巳为风桑柘木有癸丑为山松柏平地最吉更得风助主贵，若风多吹散主夭。水爱井泉涧下有木相资主爵位崇显，大海水不宜，然有山亦应贵格，寅卯为东方木旺火生之地只甲寅水吉，乙卯为震有风见之不佳若无火无山更加霹火主夭，天上水为骤雨此火不宜相见，若先得山水滋助亦无大害。命裹有金，以清秀为吉无木多逢以穷气论之，乙丑为山主贵，佘金若无克破遇贵人禄马只以财论。土见砂中辰巳有风若有木有山加助主大贵，无则虚名。火忌霹雳太阳，灯头是巽主显，大都五行有火须资木则吉，限数喜忌俱依此断。"},{key:"四耗",value:"四季休干所临春风、秋分、夏至、冬至的时日。"},{key:"捕捉",value:"黄历中的“捕捉”，即扑灭农作物害虫或生物。"},{key:"九坎",value:"忌种植、修造、破土之事。"},{key:"破屋",value:"拆屋或者局部改造。"},{key:"安机械",value:"安装机械及试车，安纺车。"},{key:"霹雳火",value:"霹雳火者一娄毫光，九天号令，电掣金蛇之势，云驱铁马之奔。此火须资风雷方为变化，若五行得此一件皆主享通。如日时见大海癸亥引凡入圣己丑为上戊子次之。见大溪乙为雷火变化己丑吉戊子次之。辰巳为风运中遇之尤佳。天上水名为既济主吉遇之者禀性含灵聪明特异。长流无用。涧下虽就位相克，此神火也是不忌，有风亦显。五行见木辛卯有雷，大林有风平地有天门，与此火相资，佘无用。土见路旁加巽则吉，砂中丁巳有风己卯有雷得泉助之亦主贵显。剑金加水海金遇风蜡金逢涧皆吉。佘金无用。见炉中丁卯为吉，戊子逢丙寅太燥性凶主夭。己丑见丙申却得，戊子忌之。灯火东南巽地有风最宜，戊午己未天上火日时遇之防刑克，再考妙选有烈风雷雨格，既霹雳见天河是也。有天地中分格既戊子见戊午是也。有雷霆得门格，既戊子己丑日时遇卯是也。三格纯戊午与前说不同。 　霹雳火者，一缕毫光，九天号令，电掣金蛇之势，云驱铁马之奔。此火须资风水雷方为变化，若五行得值一件，皆主亨通。如日时见大海，癸亥为引凡入圣，己丑为上，戊子次之；见大溪，乙卯为雷火变化，己丑为吉，戊子忌之；辰巳为风运中，遇之尤佳；天上水名为既济，主吉，遇之者禀性含灵，聪明特异，长流无用，涧下虽就位相克，此神火也，不忌，有风亦显。五行见木，辛卯有雷，大林有风，平地有天门，与此火相资，余木无用。土见路旁，加巽则吉，砂中，丁巳有风，己卯有雷，得泉助之，亦主贵显。剑金加水，海金遇风，蜡金逢涧，皆吉，余金无用。见炉中丁卯为吉，戊子逢丙寅，太燥性凶，主夭。己丑见丙申却得，戊子忌之；灯火，东南巽地，有风最宜；戊午己未天上火，日时遇之，防刑克。再考妙选，有烈风雷雨格，即霹雳见天河是也，有天地中分格，即戊子见戊午是也，有雷霆得门格，即戊子己丑日时遇卯是也。"},{key:"开厕",value:"建造厕所。"},{key:"造仓",value:"建筑仓库或修理仓库。"},{key:"咸池",value:"忌淫乱，嫁娶，和合、口舌是非，家宅不宁。"},{key:"松柏木",value:"松柏木者，泼雪凑霜，参天覆地，风撼笙篁之奏，雨佘旌旆之张。此木藏居金下，位列正东，乃为极旺，最喜山为根基，水为滋润。天河雨露之水可以滋润，涧下丁丑属山，可为根基。丙子不如大溪，有乙卯为雷，可以发荣，却嫌风霹，有损折之凶；大海水有山则吉，癸亥清净无山，亦吉。若柱有平地，得屋土，则为已成栋梁，无用山水；无此二件，乃山间之茂木也，须要山水。命中有火，最忌炉中；就位相生，再加风木，灰飞烟灭。五行无水，主夭折，山头、山下、太阳、佛灯，皆不可犯；寅人尤忌戊午、丙寅，以木不南奔，寅午三合火局故也。辛卯无害，霹火虽可滋生，运加凡火，主凶。土见路傍，似无足贵，若无死木，其福还真。驿土无山，贫夭；更加海水，尤凶。金逢乙丑，为印为山，泊金就位，自旺主吉。剑锋能削能斫，更得壁土相成，松柏相资，主贵。大林有风，杨柳会火，二木最忌；桑有癸丑，为山可以相助；石榴是辛酉金，反化死木，有造化，却吉。妙选有苍松冬秀格，是以此木生人，月日时属三冬为贵，有日合辛卯、月值庚寅二格，虽取戊午己未，生居夏秋，然专论此二木为贵。"},{key:"入学",value:"古时指入学堂，现代可用于应聘中的报名，开学典礼。"},{key:"母仓",value:"太岁神煞出去游历日，适宜祈福、许愿、开光等。"},{key:"午不苫盖屋主更张",value:"逢午日或逢午时不能搭盖庐舍、草屋、修房顶之事。"},{key:"酉不会客醉坐颠狂",value:"逢酉日或逢酉时不能宴请客人或去赴宴。"},{key:"塑绘",value:"寺庙之绘尽或雕刻神像、画雕人像等。"},{key:"平治道涂",value:"指铺平道路等工事。"},{key:"灾煞",value:"忌出行、移居、词讼。"},{key:"作梁",value:"砍伐树木作屋梁。"},{key:"归忌",value:"归忌:忌远回、入宅、归火、嫁娶。"},{key:"丑不冠带主不还乡",value:"逢丑日或逢丑时不能举行戴冠之礼，违之将可能有客死他乡之祸。"},{key:"修饰垣墙",value:"装修、粉刷房屋或围墙。"},{key:"放水",value:"建筑、清理池塘或水族箱后，将水注入蓄池。"},{key:"子不问卜自惹祸殃",value:"逢子日或逢子时不能求神问卜起卦之事，违之将自惹缠身之祸殃。"},{key:"纳财",value:"指购置产业、进货、收账、收租、讨债、五谷入仓等。"},{key:"招摇",value:"忌出行、移居、词讼。"},{key:"会亲友",value:"与亲戚朋友联络交往。"},{key:"天仓",value:"有收纳储蓄的含义，宜订婚、嫁娶、牧养、纳财等。"},{key:"立券",value:"签订合同，订立契约、签约同等商业、法律行为。"},{key:"雇庸",value:"请工人。"},{key:"入殓",value:"将尸体放入棺材之意。"},{key:"天狗",value:"不适合嫁娶。"},{key:"平地木",value:"平地木者，初生萌蘖，始发枝条，唯资雨露之功，不喜雪霜之积，此乃地上之茂材，人间之屋木。戊戌为栋，已亥为梁，最宜互换见之，须以土为基，土爱路旁，为正格，更逢子午，尤贵，以子午为天地正柱故也；屋、壁、城头三土以此木相资，中间有升化，尤吉；砂、驿无用，日时见之，主灾；太阳、霹雳，最为显耀，炉中遇水则福，灯头无风则固，余火无水则凶；此已成之木，不宜剑金，有木相资则可；泊金增饰光辉，又天干合，地支旺，更有旁土为基，主大贵。余金无用。水见天河，为润泽，主吉；溪、海无山俱凶；井泉、涧下虽吉，内甲申合丁丑为山，遇之尤吉。木见大林，有风摇动，主寿促；桑柘癸丑最吉，壬子己亥人见之为贵，戊戌人不堪；松柏木倚辅平地为栋梁，更有土助，主贵。大抵此木恶金而喜水、土，若生三冬时，得寅卯为寒谷回春，亦贵论也。"},{key:"续世",value:"为人子女，能继志述事为孝亲。续世者，月之善神，亦有日新月异、绵延永续之意，故续世日最宜婚嫁、祭祀、求子，甚至受孕。"},{key:"孤辰",value:"在十二个月中，三月、四月、九月、十月这四个月没有阴阳大会日，因此古代术数家按照天干方位与月建的对照规则，将相隔更远而与阳建不合的天干与月厌地支相配，成为孤辰。"},{key:"八风",value:"忌行船。犯之翻船损财。"},{key:"入宅",value:"指搬入新房子而非二手房。一般会举行庆祝活动，宴请亲朋好友祝贺新居落成。"},{key:"壬不汲水更难提防",value:"逢壬日或逢壬时不能进水放水近水，容易发溺淹之灾。"},{key:"结网",value:"作结鱼网之事。"},{key:"诸事不宜",value:"“宜：诸事不宜”：是指这一天没有特别合适做得事。不吉不凶，平。“忌：诸事不宜”：是指这一天做事犯忌，凶。"},{key:"井泉水",value:"井泉水者，寒泉清冽，取养不穷，八家凿之以同饮，万民资之以生活。此水生于金而出于木，故喜见金为福，砂中有土，性与之最宜，钗钏清秀次之，蜡金与钗金相冲，故不宜再见；剑锋申酉太旺，恐有泛滥之灾；海金无取，乙丑为艮，山下出泉，亦吉。此非木不能出，譬之桶论，故见木皆吉，如见平地、大林，须假剑金削之，方可取用；桑拓、杨柳无用；松柏则互换归禄，此其最吉。诸火阴阳互见则吉，霹雳名为入圣，太阳号为显照，二火相见最吉，但不宜并有则凶。诸土路旁、砂中最吉，屋上有天门生水之源，亦吉；城头，壁上与此水则无干涉；大驿就位相克，水为土掩则井不食，须有木去之方可。水喜大海，为引凡入圣；天上、涧下、长流亦不为在灾；大溪甲寅乙卯为吉，如甲申见乙酉，乙酉见甲申，官星互换，最吉；如二水在年时，二木在月日，谓之水绕花堤，乃贵格也。"},{key:"涧下水",value:"涧下水者，山环细浪，雪涌飞端，相连南北之流，对峙坎离之脉。此水清澄，喜见金养，砂中、剑锋二金最宜。钗钏庚戌丁丑不宜，以丑戌相刑，辛亥见丙子则丙辛化水，尤贵；余金以禄贵参之，取其资生，恶其冲破。见木一位不妨，二三则主劳苦，亦以贵人禄马参之。命中见土，主人多浊天元，若木或化水，则主清吉；砂中、屋上二土，其气稍清，路旁、大驿则浊甚矣，主财散祸生，如辰、戌、丑、未土局，其凶尤甚，以水浊土浑故也。火见太阳，虽炎，中间有既济未济之论；霹雳就位相争，最所不宜。"},{key:"大败",value:"忌出行、营谋、求婚、百事凶。"},{key:"整手足甲",value:"古时指初生婴儿第一次修剪手足甲，现代可用于美甲或足浴的好日子。"},{key:"大会",value:"所谓阴阳大会，是月内阴阳正会之辰，由月建和月厌的干支推导而来。"},{key:"生气",value:"代表生命力、活动、生机之意。"},{key:"割蜜",value:"取蜂蜜。"},{key:"小会",value:"所谓阴阳小会，为月内阴阳偶会之辰，由月建和月厌的干支推导而来的。"},{key:"针灸",value:"针灸治疗。"},{key:"河魁",value:"忌起造、安门。"},{key:"乘船",value:"坐船出行。"},{key:"石榴木",value:"石榴木者性如姜，花红似火，数棵枝头，累累多子，房内莹莹，干支纯金而纳音属木，乃木之变者也，可以移盆内而妆做山故喜成器之土，以为根基，城头为上，屋上次之，然必阴阳交见，则丙辛丁庚互官，戊辛己寅互印主吉。路、壁、驿、砂四土有山助之亦吉，若无何用，见砂中最吉，泊金干支有水木而纳音金，榴木干支金而纳音木皆脱去本性而互换归旺，以木旺寅卯，金旺申酉，各得其位，谓之功侔造化格，主大贵。海中乙丑为山，更逢水助则吉，或壁上、城头亦得剑锋，就位相克，最凶，若先有砂金能制其毒，亦不为害。水见天河雨露相滋，井泉溪涧，清水浇灌，大海太泛滥非贫则夭，有艮土稍得。太阳、霹雳二火虽喜，不宜并见。炉中寅卯旺位，本吉，再加别火则凶。若此木生于五月，日时只带一火，谓之石榴喷火，主贵。桑柘、大林、杨柳三木皆喜见之，见桑柘癸丑为山，见大林戊辰脱体，见杨柳花红柳绿，皆主功名，见松柏则强，见平地则大，若无别物夹杂，则绿绕红围，亦主富贵。如得城土为基，水运为助，享福优游最为长久。"},{key:"沐浴",value:"祈福、许愿而沐浴斋戒，洗澡。"},{key:"长流水",value:"长流水命者，混混无穷，滔滔不竭，就下必纳于东南，顺流自归于辰巳。此水喜金生养，金要白蜡、钗钏，以天干有庚辛真金，地支辰巳就位相生，戌亥为归源之地；剑锋纯是金水，泊金水木居东，皆以吉论；海中，砂中无取。嫌土蹇涸，而土有堤防之用，六土之中，取庚辛丙丁为吉，戊己无用。遇火则相刑，而有既济之妙，内壬辰喜见丁卯、丁酉，癸巳喜见戊子、戊午，以天干合化故也；灯头癸巳尤喜见甲辰，山头壬辰尤喜遇乙亥，化龙归禄，取义更佳。逢木虽漂泛，而桑拓癸丑为山，杨柳癸未为园，年时得此水围之，为水绕花堤，大贵格也；松柏、石榴，天干有金相生；大林、平地，虽嫌有土，而癸巳见戊辰，壬辰见己亥，俱吉。水为同类，涧下则丁壬合化，天上则雨露相资；井泉、大溪无益；海乃众流所归，而壬辰之龙得癸亥则龙跃天门，春夏秋生为吉，或龙潜大海，则冬生乃宜，柱中须先得金为妙。又壬辰为自印之水，再见壬辰则刑，刑则自害，见戊戌则冲，冲则泛滥，主凶；癸巳，自绝之水，名为涸流，若遇丙戌、丁亥、庚子、辛丑之土，其涸可待，柱中如得三合生旺之金生之则吉。"},{key:"解除",value:"打扫卫生，指冲洗、清扫宅舍、消除灾厄等事。"},{key:"六蛇",value:""},{key:"移徙",value:"指搬家，搬迁入二手房、租房。"},{key:"成服",value:"穿丧服。"},{key:"时阳",value:"春夏之时；温暖之时。《文选·张衡＜西京赋＞》：“人在阳时则舒，在阴时则惨。” 薛综 注：“阳，谓春夏。阴，谓秋冬。” 南朝 宋 孔宁子 《櫂歌行》：“君子乐和节，品物待阳时。”这里指时辰的阳神。"},{key:"时阴",value:"秋冬之时；薛综 注：“阳，谓春夏。阴，谓秋冬。”这里指时辰的阴神。"},{key:"取渔",value:"亦作“取鱼”，指把养好的鱼取出来卖。"},{key:"分居",value:"指大家庭分家，各自另起炉灶之意。"},{key:"置产",value:"指购买建成的房子。"},{key:"四穷",value:"忌分居、入宅、安门。犯之不遂，损财不宁。"},{key:"绝阴",value:"所谓绝阴，指三月、四月阴气灭绝的过程，是单阴的进一步发展。具体日辰从三月小会之日，即戊辰日期，延伸至四月。"},{key:"绝阳",value:"所谓绝阳，指九月、十月阳气灭绝的过程，是孤阳的进一步发展。具体日辰从九月小会之日，即戊戌日起，延伸至十月。"},{key:"戌不吃犬作怪上床",value:"逢戌日或逢戌时不能吃狗肉。"},{key:"筑堤",value:"修筑或加固河堤或海堤。"},{key:"月建",value:"不宜修造、起工、动土极凶，宜避之。"},{key:"血支",value:"忌针灸、刺血、阉割、六畜、穿牛鼻。"},{key:"教牛马",value:"训练牛马之工作。"},{key:"勾陈",value:"为紫微垣中星座名，古代传说五帝中即有勾陈大帝统御万雷。因形弯曲如钩，引申为曲折、缓慢。该时辰容易发生阻滞不前之事。"},{key:"合帐",value:"缝制新郎及新娘要用的蚊帐，安床与设帐通常合而为一，有时亦并称安床设帐。"},{key:"纳畜",value:"指买入家畜家禽，收养宠物之事。"},{key:"开市",value:"开业之意。商店行号开张做生意。同“开幕礼”“开工”。包括：年头初开始营业或开工等事；新设店铺商行或新厂开幕等事。"},{key:"圣心",value:"宜敬拜、祈福、嫁娶，有虔城之意。"},{key:"扫舍",value:"指打扫屋内外清洁，消除厄运。"},{key:"出货财",value:"商家之发货、出货、销货的意思。"},{key:"玉宇",value:"宜修宅、造宅、搬家。"},{key:"三合",value:"为五行合之简称，即亥、卯、未合木局，寅、午、戌合火局，巳、酉、丑合金局，申、子、辰合水局，三合者如聚结群力，众志成城，故宜订亲、嫁娶、结盟、会友、立券交易、开市、纳财。"},{key:"天符",value:""},{key:"六仪",value:"六仪，是为小节。一曰祀祭之容，二曰宾客之容，三曰朝廷之容，四曰丧纪之容，五曰军旅之容，六曰车马之容。适宜各类仪式。"},{key:"未不服药毒气入肠",value:"逢未日或逢未时不能服药。"},{key:"开柱眼",value:"指作桩木之事。"},{key:"大煞",value:"忌出行、移居、词讼。"},{key:"岁薄",value:"薄含有迫近的意思。岁薄指阴阳二建相向而行，交相迫近。"},{key:"立碑",value:"为去世的人立墓碑，为后人所铭记。"},{key:"往亡",value:"忌行兵、嫁娶、出行、求财凶。"},{key:"开渠",value:"开挖水渠，兴修水利。"},{key:"谢土",value:"建筑物完工后所举行的祭祀。"},{key:"畋猎",value:"亦作“畋猎”，指打猎或捕捉禽兽。"},{key:"四废",value:"忌修造、交易、安床。"},{key:"沙石金",value:"甲午乙未沙中金，午为火势最旺之地，火旺则金衰，未为火衰之地，火衰败而金冠带，败而方冠带，未能作伐，故曰砂中金也。 砂中金初形成而未能有用，所以需火炼，但火过盛则〈火旺金败〉了，同时要有木制，使不随心所欲的盛衰，同时以火炼之，如山头火、山下火和覆灯火等性温和的火与它相遇，命书认为是少年荣华富贵的命局，另外，沙中陶金也是一种采金的方法，但水要净水如长流水、大海水则则把金沙一起淹没了，用井泉、涧下、天河等水也吉。沙中金怕遇见沙中土、大驿土和路旁土，是害怕被土覆盖的缘故。"},{key:"地火",value:"忌栽种、五谷、及百果。"},{key:"丁不剃头头必生疮",value:"逢丁日或逢丁时不能理发，违之可能会引发头疾。"},{key:"求医",value:"就医，请大夫看病。"},{key:"天贼",value:"忌动土、竖造、入宅、开仓、埋葬、主招盗贼。"},{key:"天医",value:"天医是掌管疾病之事的星神。天医日可以求医、治病，服药、针灸比较有效。可以作为方向论，例如五月天医在戌，则可向西北偏西的方向去看医生，如果医生又属狗，则更妙。"},{key:"申不安床鬼祟入房",value:"逢申日或逢申时不能移动床位或新装床铺。"},{key:"安香",value:"上香添香安牌位。"},{key:"除服",value:"除去丧礼之服。"},{key:"修坟",value:"修理坟墓。"},{key:"栽种",value:"指种植植物、接枝等农事。"},{key:"天愿",value:"天愿日，以月之干支为依据，择与之和合之日为是，故为月之喜神，宜求财、出行、嫁娶、祈福。因为六十甲子循环一周为六十日，一个月仅三十日，所以未必每月会逢天愿日，所以，若逢天愿日可多参用。"},{key:"天德合",value:"与天德相合的日子。天德，即自然界（造物主）养育万物的生机。也是宇宙星辰放射给地球的阳能。“上天有好生之德”，德者、生之能也。"},{key:"移柩",value:"举行葬仪时、将棺木移出屋外之事。"},{key:"三阴",value:"三阴由月破、月厌推导而来，一岁中共有两日。"},{key:"孤阳",value:"九月厌干为戊，阳建为戌，卦象为五阴对一阳的剥卦，因此，九月的戊戌日为孤阳，主不吉。"},{key:"官日",value:"上官赴任的好日子。"},{key:"宝光",value:"全名宝光黄道，宜祈福、搬家等。"},{key:"祈福",value:"祈求神明降幅或设醮还愿之事。"},{key:"沙中土",value:"沙中土的意象：属相是黄龙和黄蛇、河谷、冲积平原、堤岸、湿泥、砂土、煲汤、海滩、阳光浴、沙浴，沙雕、紫沙壶、好喝茶、沙漠、穿山甲、古文物、埋没人才、埋没前程。日主为丙辰丁巳沙中土：不合群，孤独无助。"},{key:"行丧",value:"办理丧事，比如出殡。"},{key:"己不破券二比并亡",value:"逢己日或逢己时不能去调动钱财，更不能进行风险投资，违之将钱财两空。"},{key:"阳错阴冲",value:""},{key:"死神",value:"忌绘塑、动土。"},{key:"斋醮　",value:""},{key:"天罡",value:"代表充满阳性的正气。"},{key:"阴阳击冲",value:"阴阳击冲在一岁中共有两日。五月阴间、阳建均相会与午，阳建挟丙而冲击壬，阴建居午而冲击子，因此五月的壬子日被称为阴阳击冲。同样的情况出现在十一月。十一月阴建、阳建均相会于子，阳建挟壬而冲击丙，阴建居子而冲击午，因此十一月的丙午日也被称为阴阳击冲。"},{key:"戊不受田田主不祥",value:"逢戊日或逢戊时不能买田地或房产，违之将会给买主带来不祥之兆。"},{key:"阳错",value:"用阳建的地址搭配当方的天干，阴阳自相配合是日，以当值所冲的月宿作为阳错。"},{key:"桑拓木",value:"壬与子及癸属水，水多则生木，则有木，丑属土，土克水生金，金克木，木受损则有伤，故名桑拓木。 此木是供蚕的食用，用途许多。喜爱砂土，以沙土为根基又以辰巳为蚕食之地不宜刑冲互破，路傍大驿二土次吉佘土无益。水喜银河为雨露之滋，长流溪涧井泉诸水皆可相依，亦须先得土为基愈加禄贵为妙，沦海水漂泛无定，无土主夭。诸火不宜叠见。以金言之砂中首，剑锋能修整此木为次，钗泊二金须得土为基，如逢动破又凶，木喜庚寅辛卯为以弱就强以小变高文贵格论，纵无砂土亦吉平地柏榴无土则凶，大林是东南蚕食之位有土资生主大贵，遇柳树为桑柳成林亦是贵格老生春夏方吉。壬子年出世：性情杂乱，终身崎岖多见！双亲缘浅，其人独立心强旺，为人顽固，干事最怕有欠一直，夫妻缘差，兄弟、兄弟助力少。癸丑年出生：有学识、专技、艺术方面特长；性情杂乱，终身崎岖多！大都学、技、艺上得见成果。女命：可贵良缘，终身须防有共夫景象；特性多顽强。"},{key:"守日",value:"上官赴任的好日子。"},{key:"天赦",value:"天赦日就是上天赦罪释放有过者之日，百无禁忌，当然为一年之中所少有，因为选择吉日的参考因素相当的多，除了所谓已厘订的吉日外，还与每个人的出生八字，流年气运之吉、凶、侮、吝等条件有直接的关系，因之很多人在能配合的状况下，多选天赦日行事。"},{key:"土府",value:"忌种植、起造、动土等事。"},{key:"月煞",value:"忌造成门、开张、开店。"},{key:"海中金",value:"海中金者，宝藏龙宫，珠孕蛟室，出现虽假于空动，成器无藉乎火力，故东方朔以蛤蚌名之，良有理也，妙选有珠藏渊海格。以甲子见癸亥，是不用火，逢空有蚌珠照月格。以甲子见己未是欲合化互贵，盖以海金无形，非空动则不能出现。而乙丑金库，非旺火则不能陶铸故也。如甲子见戊寅庚午是土生金，乙丑见丙寅丁卯是火制金，又天干逢三奇，此等格局，无有不贵。"},{key:"酬神",value:"祭谢神灵。"},{key:"鸣吠对",value:"鸣犬时的对日，即鸣犬时后的第六日，作用与鸣犬同，适合开光。"},{key:"破土",value:"仅指埋葬用的破土，与一般建筑房屋的[动土]不同。即[破土]属阴宅，[动土]指阳宅也。现今社会上多已滥用，择日时，须辨别之。"},{key:"除神",value:"适合打扫卫生、理发、沐浴等。"},{key:"纯阴",value:"十月厌干为己，阳建为亥，卦象为纯阴无阳的坤卦，因此，十月的己亥日为纯阴，主不吉。"},{key:"开池",value:"开凿水井，挖掘池塘。"},{key:"纯阳",value:"四月厌干为己，阳建为巳，卦象为纯阳无阴的乾卦，因此四月的巳己日为纯阳，主不吉。"},{key:"甲不开仓财物耗散",value:"逢甲日或逢甲时不能开仓开库，违之将会带来破财之果。"},{key:"订盟",value:"鉴定联盟协议。"},{key:"金匮",value:'亦作""金柜""，铜制的柜，古时用以收藏文献或文物。引申为久远、博学，富贵。该时辰宜物品收藏、文书合同签订、订婚、购物等。'},{key:"杨柳木",value:"杨柳木者隋堤袅娜，汉苑轻盈，万缕不蚕之丝，千条不针之带。午未木之死墓壬癸木之滋润，此木根基惟喜砂土，见艮则依倚摇金，遇寅卯则东方得地，辛丑有山庚子不如，戊寅虽吉己卯尤胜，丙辰丁巳却嫌戌亥对冲，若见大驿有丑为山边之驿稍可，无土独见此土主夭贱。路傍就位复值死墓日时遇之主人卑弱，屋土壬午见丁亥丁壬合化则吉丙戌不如，水见井泉长流大溪涧下皆吉，中间又分合化旺位尤吉。丙午丁未丙丁真火午未亦火此木至午未巳死，壬午见之大凶，癸庶几有别水济之无害，此木午巳自有火更见别火恐引起伤寿，灯头乙巳有风木折主凶，炉中寅卯本位木旺反吉，霹火如壬午见己丑，癸未见戊子阴阳交遇更有砂土为基主贵，若子午丑未对冲则不为吉。金见本无造化，钗泊却喜成功，海蜡剑砂虽忌见之，其间轻重当以禄贵德煞参详，见松柏木为脱体化神之格也主贵，桑柘癸丑为山作倚傍成林主吉，庚申辛酉木既死绝又逢金克以弱遇小其人必贱，妙选有花红柳绿格，是以此木遇石榴生于春夏不以贱论。"},{key:"大溪水",value:"大溪水者，惊涛薄岸，骇浪浮天，光涵万里之宽，碧倒千山之影，最喜有归有养，遇坎则为有归，得金则为有养，所嫌者，日月时中，有申酉冲动，或辰已风吹，主飘流；井泉水净而止，涧下有丑为艮，天河沾润，大海朝宗，此四水皆吉；长流有风，独不宜见。此水以清金为助养，唯钗、砂最宜，蜡金亦清，若有钗金对冲则不宜；海中虽无造化，甲子属坎，乙丑为艮，乃归源之地，亦吉；泊金最微，不能相生，岂有超显之理？剑金虽化于大溪，却忌卯雷巽风，主性不定。五行有土，皆为无益，屋上、城头壅阻此水，路旁稍可，亦不为奇；壁上独辛丑为山，大驿唯己酉有合，戊申则冲，庚子则刑，皆不为吉。火见太阳，虽假照耀，霹雳尤忌相逢，若二火互见，主贫，单见别论。木见此水，徒被漂荡，唯桑拓木壬子有坎，癸丑为山，为水绕山环之贵，内甲寅人见壬子吉，乙卯人见癸丑吉；余木以禄贵参之，尤忌冲破。"},{key:"冠笄",value:"指举行男女成人的仪式。"},{key:"剑锋金",value:"剑锋金如利剑之锋，已受过千锤百炼，剑光万丈、剑气逼人，特性：刚毅、果断、沉稳、才能卓越，能人所不能，有自我突破、自创局面的本事有鸿?之志，志气大，口气也大。为目的不念感情，为激进不怕招怨缺点是无情冷酷，锋芒外露，要注意侧面的袭击。硬物虽坚，亦有其脆弱的一面最怕丙寅丁卯炉中火、戌午己未天上火、戌子己丑霹雳火建议，利能断金，忌锋芒毕露，易惹小人怨，恐招沟陷。要知利剑不能轻易出鞘之理，韬光养晦，逸不露，要眼观四方，耳听八方，不要一味激进，赶尽杀绝，而忌了背后及侧面，座右铭是：毋毁众人之名，以成一已之善 毋埋天下之理，以护一已之过，事当快意处须转言到快意处须住物忌全胜事忌全美人忌全盛 行运。"},{key:"起基",value:"建造房屋定地基石。"},{key:"安门",value:"新建房屋装置正门门框，旧屋改门。"},{key:"单阴",value:"三月厌干为戊，阳建为辰，卦象为五阳一阴的夬卦，因此，三月的戊辰日为单阴，主不吉。"},{key:"四相",value:"宜祭祀、上官、订婚、嫁娶、修作等。"},{key:"阴错",value:"忌出行、移居、嫁娶、诸事大凶。"},{key:"丙不修灶必见灾殃",value:"逢丙日或逢丙时不能进行新建或维修厨房、灶台、炉具等。"},{key:"纳采",value:"古时指缔结婚姻的仪式、受授聘金，现代可用于合婚订婚。"},{key:"架马",value:"装上建筑物屋顶的梁。"},{key:"祭祀",value:"指祠堂之祭祀、即拜祭祖先或庙寺的祭拜、神明等事。"},{key:"动土",value:"指阳宅（即住房）之建造与修理。"},{key:"拆卸",value:"拆掉建筑物。"},{key:"普渡",value:"广释法力，超度众生。"},{key:"白虎",value:"四象之一，其形象虎，位于西方，属金，色白，总称白虎。此处代表凶杀，血光。该时辰容易发生车祸等较严重的意外，购物则容易破损。"},{key:"福生",value:"适合祭祀、祈福等。"},{key:"壁上土",value:"壁上土者，恃栋依梁，兴门立户，却暴寒之德，遮霜护雪之功。此乃人间壁土，非平地何以为靠？子午天地正柱，逢之尤为吉庆。凡见木皆可为主。庚寅辛卯亦是栋梁，只辛酉冲破，子卯相刑；大林有风，若无承载之土，加凡火，主作事难成，贫贱而夭。土爱路旁，谓之负载，屋上城头，可以护身，皆吉。见火，全无造化，太阳霹雳，虽云照耀，到底蹇危。若命先见木遇火，助鬼焚克，运再逢之，主祸患夭折。柱有水救济，稍得；水见甲申为最吉，乙酉次之，天上雨露亦吉，大海漂泛，此土何安？纵有根基，亦凶。诸金惟爱泊金，命里先有木神则贵，以其成宫室而金碧辉煌，非朝廷不敢用也；剑金伤害，余金无用。"},{key:"八龙",value:""},{key:"月厌",value:"忌嫁娶、造酒、出行。"},{key:"七符",value:""},{key:"阴位",value:"阴位由阴阳二建推导而来，一岁中共有两日。三月阳建在辰，阴建在申，因此三月庚辰日为阴位，月宿在辰，同样的，九月阳建在戌，阴建在寅，因此九月甲戌日为阴位，月宿在戌。"},{key:"辰不哭泣必主重丧",value:"逢辰日或逢辰时不能哭泣，如违之将有不祥之灾。"},{key:"路旁土",value:"未中之木而生午位之旺火，火旺则土焦，未能育物，犹路傍土若也，故曰路傍土也。路傍土是土局中最有爱心、最具才艺、桃花最旺的五行局。路傍土坐命者爱心广被，有一颗怜悯之心，容易动情，稍稍拿捏不稳，就会擦枪走火，路傍土人若能甩开感情的包袱，事业成就是很大的。"},{key:"斋醮",value:"庙宇建醮前需举行的斋戒仪式。"},{key:"司命",value:"文昌宫的第四星，掌管生命的神，亦指关系生命的者。引申为负重大责任，发号司令的人。该时辰宜晋升、见贵、看病等。"},{key:"不将",value:"指宜于婚嫁的吉日。阴阳家谓:“阳将伤夫，阴将伤妇;阴阳俱将，夫妇俱伤;阴阳不将，夫妇荣昌。”见《协纪辨方书．义例．阴阳不将》。"},{key:"地囊",value:"四时三合卦的纳甲。"},{key:"敬安",value:"敬安者，敬重、端肃、安定、逸心乐之意。人与人之间互相恭敬则必安，敬安之日乃为恭顺之神当值，故宜召开有关家族、企业、组织等相关会议，亦宜拜访长辈，推荐朋友、求职、赴任等。"},{key:"归岫",value:"房梁升上屋顶处接合完成。"},{key:"天河水",value:"天河水者乱洒六野，密沛千郊，淋淋泻下银河，细细飞来碧落，此乃天上雨露，发生万物无不赖之银汉之水。土不能克，故见土不忌，而且有滋润之益，天上之水地金难生，故见金难益，而亦有涵秀之情。生旺太过则为淫潦反伤于物，死绝太多则为旱乾，又不能生物，要生三秋得时为贵也。水喜长流大海，内丙午宜癸巳癸亥，丁未宜壬辰壬戌，阴阳互见尤吉。大溪乙卯为雷，井泉己酉为贵俱以吉论。火喜霹雳为神龙之火，与此水相济，而悠忽变化，云行雨施岂有不贵。炉中火旺，大海水旺，如柱中得二火二水上下相济，谓之精神俱足大贵格。灯头有风山头有贵，皆以吉论。又须别水济之方吉。天上就位相克则忌见之。木石榴杨柳俱吉，大林有巽，平地有亥亦吉，松柏石榴遇丙辛合化亦吉论，妙选有灵槎入天河格，是取死绝无根之木，柱无土培则漂流天河是也。土虽不能克而柱逢庚午辛未就位相克，土壅水滞，或水又冬生则水结池塘必主浊滥。佘土如砂中屋上皆吉。城头大驿无用。壁上地支对冲亦坏造化。水金虽不能生，独辛亥钗金属乾天，水在天上只此最吉。佘金亦取天干有庚辛壬癸者为用。甲乙无益再以禄马贵人参之，始得。妙选又以水生人得庚子壬子为云腾雨施，生春则旱，夏则潦，冬则寒，独三秋最吉。遇甲辰乙巳庚辰辛巳柱中有壬为云有辰为龙，为风雨作霖，若生冬月是为霜凝薄露，日时喜遇寅卯温和之气可解其冻俱贵格也。"},{key:"玉堂",value:"玉饰的殿堂，亦为宫殿的美称，宋以后翰林院亦称为玉堂。引申为豪华、高档住宅、贵人居所。该时辰宜见贵、装修、观光旅游等。"},{key:"炉中火",value:"丁卯日辛丑时，辰巳未年月，富贵，妻子迟。寅卯印助，戌库身旺，刑。丑丁，得倚托，大贵。丁卯日壬寅时，贵化吉。寅卯年月，行金水运，大贵。亥子月，行西运，贵。丁卯日甲辰时，辰戌丑未月，孤克，运通发财。丑月，南方运，贵。卯月，金水运，近侍权贵，不利建白。丁卯日丁未时，刑中发。寅卯月，印绶，发财敦厚。辰戌申午，俱吉。丁卯日戊申时，春，伤官用印;秋，伤官用财，俱吉。夏，比肩;冬，伤官见官，平常。四季月，吉。丁卯日己酉时，时日并冲，忧伤妻子，通火气吉。忌乙卯字。年月有亥未、巳丑，但一字两合，不以冲论。丁卯日庚戌时，生亥未年月，三合会印，贵。子月，煞印，吉。年月建禄，僧道，主贵。柱无救助，见癸旺，多患目疾，酉月无贵;纯酉戌年月，天干透己甲者贵，中带凶。丁卯日辛亥时，时上财官印三奇，再得年月印助财生，皆主大贵。纯子，行木火运，官可六品，巳酉丑月，辛财得局，方有倚旺，富贵双全。"},{key:"出行",value:"外出旅行，观光游览。"},{key:"天喜",value:"天喜神乃四库，春木旺而火归戌库，夏火旺而金归丑库，秋金旺而水归辰库，冬水旺而木归未库，命中带天喜神主平生快乐欢欣。"},{key:"九虎",value:""},{key:"血忌",value:"忌针灸、刺血、阉割、六畜、穿牛鼻。"},{key:"嫁娶",value:"男娶女嫁，举行结婚大典的吉日。"},{key:"词讼",value:"诉讼，打官司的意思。"},{key:"进人口",value:"黄历之中的“进人口”，指收纳养子养女。"},{key:"朱雀",value:"四象之一，其形象鸟，位于南方，属火，色赤，总称朱雀。此处代表口舌，争吵。该时辰容易发生争吵、意见较难统一，或东西容易引起噪音。"},{key:"月德",value:"月德者，月之德神，当月所吉之日，以月支之三合，取其五行之阳干为用。月德日利于起基动土、出行赴任、求官求职、行善淑世、自积福荫，事半而功倍。"},{key:"大时",value:"日聚殃，往来其下，必致死门。"},{key:"天德",value:"指天之福德，即自然界养育万物的生机之所。天德所在的方位和时间适宜兴举各种事务。该时辰各类事情都较合适，特别适合结婚典礼。"},{key:"月害",value:"忌修造、词讼、出阵、行军、嫁娶、移徒、犯之主损人丁、六畜、凶日。"},{key:"重日",value:"忌订婚、嫁娶、治病、词讼。"},{key:"五离",value:"忌嫁娶、定亲。"},{key:"修门",value:"新建房屋安门或旧房修门建造"},{key:"五富",value:"富者，财物丰饶之意。五富日均择亥、寅、巳、申长生之日为用，又具丰饶富强之意，故是日宜举办隆重的会议、产品展示会、促销活动、作品发表会、及各类庆祝会、运动会等团体活动。"},{key:"王日",value:"吉神的一种，适合新官上任、拜访官员等。"},{key:"九空",value:"忌种植、出行、求财、开仓。"},{key:"月德合",value:"所谓月德合日，就是与月德日干相合之日，日为阳，月为阴，故取相合之日干皆为阴。月德合日，百福并集，诸事皆宜，是个好日子，宜多加参考运用，尤利于由内而外拓展所图。"},{key:"明堂",value:"古代帝王宣明政教的地方。凡朝会、祭祀、庆赏、选士、养老、教学等大典，都在此举行。引申为公开活动的地方。该时辰宜开会、集会等公开活动。"},{key:"阴神",value:""},{key:"钗钏金",value:"钗钏金者，美容首饰，增光腻肌，偎红倚翠之珍，枕玉眠香之宝。此金藏之闺阁，惟宜静水井涧溪流见之皆吉多见则泛。海水贫夭，天河辛亥见之无妨，丙午真火庚戌凑成火局有伤此金也，太阳火，日生显耀。佛灯火夜间显耀皆宜见。但甲辰乙巳与庚戌辛亥相冲，阴阳互见为妙。戊子己丑与丙午丁未相持二火忌叠见，非贫则夭。炉中火庚戌最忌，辛亥见之有丙辛合化水稍吉。山下山头俱不宜见，若有水济亦可。柱中有木此金入于匣中有福贵方吉。土见砂中相生相养更有涧下水助荣华富贵。金喜剑锋则成造化。泊金增光钗钏须假微火济之。别金无用。若命中只有金水更无夹杂，为金白水清在活法推之。"},{key:"出火",value:"移动神位，火指香火。"},{key:"上梁",value:"装上建筑物屋顶的梁木，同架马。"},{key:"白蜡金",value:"白蜡金者，昆山片玉，洛浦遗金，交栖日月之光，凝聚阴阳之气，形明体洁，乃金之正色也。此金惟喜火炼，须炉中炎火。然庚辰见之，若无水济，主贫夭，辛巳却以贵论，缘巳是金生之地，见丙寅化水逢贵故也；山下火生早，主荣贵，亦须水助方得。井泉、大溪俱为贵格。庚官在丁，辛官在丙，故庚见丁丑，官贵俱全；辛见丙子，不如癸巳更清，不贵即富。论中见木，逢多无益，以此金不能相克。若柱遇无气之火，却要木生，有禄马贵人方吉。见土只宜磨砌，方成器物，则吉，别土无用。金忌海砂，为汨没，日时逢火则荣。若见清金，加水相助，火亦不爱，只怕冲刑。妙选有哨风猛虎格，以此金日时遇辛巳或乙巳是也。"},{key:"解神",value:"月中善神。《协纪辨方书·义例三·解神》：“《总要历》曰，解神者月中善神也，所值之日，宜上词章雪寃枉。” 唐 戴叔伦 《和李相公勉晦日蓬池游宴》：“高会吹台中，新年月桂空……微文复看猎，宁与解神同。”"},{key:"癸不词讼理弱敌强",value:"逢癸日或逢癸时不能诉讼之事，违之将可能引起败诉之果。"},{key:"造车器",value:"制造水路交通工具，现亦指新车交车。"},{key:"小时",value:"犯之令小儿肚胀，泻痢。"},{key:"问名",value:"男方遣媒人到女家询问女方姓名，生辰八字。"},{key:"补垣",value:"修补围墙。"},{key:"阴道冲阳",value:"阴道冲阳指阴阳二建分出二支且相互冲击，这种情况在一年中共有两次，即两日。二月阳建在卯而冲击酉，阴建在酉而冲击卯，因此，二月己卯月宿在卯，己卯日为阴道冲阳。同样的，八月阳建在酉而冲击卯，阴建在卯而冲击酉，因此，八月己酉月宿在酉，己酉日为阴道阳冲。"},{key:"天上火",value:"天上火者温暖山河，辉光宇宙，阳德丽天之照阴精离海之明，戊午为太阳则刚己未为太阴则柔，或以为夏日则刚，冬日则温，诬也，俱要戌亥为天门，卯酉为出入之门，东南为行陆之地则吉。此火见木谓之震折，要日时有风兴水方得。大林木有辰巳松柏石榴有卯酉惟此三木主贵。午见木多犹可，未三四木劳苦之命也。见金且能照耀不能克济。钗金有戌亥泊金有寅卯主吉。剑金为耀日月之光必主少年及第。佘金则殃。水亦润下，须戊午见丁丑，己未见丙子阴阳交互方为福贵，柱中更有木滋生，富贵双全。大溪有乙卯井泉有己酉出入得门皆吉。天河雨露相济，不以就位相克论。戊午见丁未亦吉丙午则不明，火爱灯头再有别火则燥。霹雳带云雨则日月无光主昏蒙。炉中午忌丙寅以午为刚火见丙寅便为火生之地，若无水解救主犯刑凶死，丁卯稍可。土见砂中有巽风相假，路旁城屋皆吉。柱中更有金木资助尤吉，考妙选戊午遇卯，己未遇酉为日月分秀格，而卯以乙卯辛卯为正，己卯丁卯次之。酉以乙酉癸酉为正己酉丁酉次之。有日出扶桑格，即日分秀，再见巳午日时。有日轮当表格，以戊午生于午月再见巳午日，又以戊午见戊子为坎离正位，有月生沧海格，即月分秀，而酉得乙癸是也，有月照寒潭格，是取壬癸亥子纳音属水为潭然必秋生为贵。有月桂芬芳格，是己未生人柱有三四木拱集与桂林一枝同，桂林以少为贵，芬芳以多为贵，义各有所取也。再考凶格中太阳损明，戊午不禁于水溢是嫌水盛，太阴薄食己未岂堪于土多是嫌土重也，须如是并参方尽其理。"},{key:"寅不祭祀神鬼不尝",value:"逢寅日或逢寅时不能祭祀神鬼，违之将自惹神鬼缠身之祸。"},{key:"裁衣",value:"古时临近婚期前一个月，男方还要备酒、蓝布和金银钗环交给媒人送到女方家，谓之“裁衣”。现指逛街买新衣服。"},{key:"竖柱",value:"竖立建筑物的柱子。"},{key:"开仓",value:"指打开粮仓货仓，取粮，出货。"},{key:"成日",value:"为成功、成就、结果之意。凡事皆有成，祈福、入学、开市、嫁娶、求医、远行、移徙、上任都是好日子。但不宜打官司，否则必定赢不了。"},{key:"大耗",value:"忌起造、安床、百事凶。"},{key:"塞穴",value:"补修破墙后，堵塞蚁穴鼠洞及其他洞穴。"},{key:"驿马",value:"驿马为发动之要神，岁、月、日、时之中有之。俗云：三合头冲为驿马。即谓驿马所居之处为三合首一字之冲神，例如：寅、午、戌月，逢与寅相冲之日支为申，申日则为驿马日。驿马是奔波、外求，进而不已之神，所以是日逢出行、赴任、移徙、谒贵等事均可选用。"},{key:"经络",value:"古时指安纺车、织布机，现泛指买车交车、按机器等事项。"},{key:"相日",value:"五行之衰旺，得令则为旺为相，不得令则相反。四相日为四季之干支所生，修造、起基动土、移徙、出行，均可取用之。"},{key:"小耗",value:"忌栽种、五谷、及百果。小耗、百事忌。"},{key:"交易",value:"订立各种契约互相买卖之事，古时候做买卖都要写字据的，如买房有房契，买地有地契，把自己的权利通过契约这种方式写下来就叫做立券。"},{key:"厌对",value:"对冲为厌对。主鬼神、妨婚姻。"},{key:"天巫",value:"天巫象征地位提升。"},{key:"求嗣",value:"黄历中的“求嗣”，指向神明祈求后嗣（子孙）之意。"},{key:"土符",value:"忌种植、起造、动土等事。"},{key:"城头土",value:"城头土者天京玉垒，帝里金城，龙盘千里之形，虎居四维之势。此土有成未成作两般论，凡遇见路傍为巳成之土不必用火，若无路傍为未成之土，须用火。大都城土皆须资木杨柳癸未最佳，壬午则忌，桑柘癸丑为上，壬子次之。庚寅辛卯就位相克，则城崩不宁何以安人也。"},{key:"巳不远行财物伏藏",value:"逢巳日或逢巳时不能远行并将自已重要财物隐蔽地藏起来，以防损失。"},{key:"覆灯火",value:"覆灯火者，金盏光，玉台吐艳，照日月不照之处，明天地未明之时。此火乃人间夜明之火，以木为心，以水为油，遇阴则吉，遇阳则不利。凡日时最忌再见辰已，地支有冲，恐风吹灯灭，主夭。或以戌亥，子丑为阴，或以自未至亥为阴。五行见木为根本，凡木皆好，更得官星、禄贵相扶，干头化水，尤吉；限运遇相助，主大贵。水以井泉、涧下为真油，长流假油，妙选有暗灯添油格，即此理也；大海、河水则不可以为油，遇者主寻常。大凡此火，见水须资木，不喜长生旺气，水太泛，反凶。命值泊金照耀，最为清贵，亦须水木相资，方能显达；砂中、钗钏二金皆吉；剑锋一金，谓之灯花拂剑，尤吉；蜡金不宜。五行见土，须防克破。若壁土可以安身，屋土可以覆庇，日时并见，主福贵，砂土有木，亦主衣食，余土无用。火爱同类，却怕风吹。霹雳为龙神变化之火，必带风来，此火难存；天上、炉中二火相见，最凶。再考妙选，有魁星格、指南格，以甲辰生人，日时遇午未为是；有火土入堂格，以此火怕风，日时遇丙戌丁亥屋上土，则灯在屋中，更得添油，尤贵。"},{key:"掘井",value:"开凿水井，安装取水设备。"},{key:"亥不嫁娶不利新郎",value:"逢亥日或逢亥时不能进行婚姻嫁娶之事。"},{key:"死气",value:"表示所行之运陷入死穴，对事不吉利。"},{key:"阳德",value:"德者得也，得到天地间最适宜、和谐之气化。阳德，为月中之德神，阳德日为德神当值之日，气化调合，诸事顺遂，故宜立券交易、开市、纳财、纳采、订盟等。"},{key:"修造",value:"指阳宅之建造与修理。"},{key:"民日",value:"月神中吉神的一种，能增强普通百姓的运势。"},{key:"牧养",value:"牛羊或家禽放牧。"},{key:"馀事勿取",value:"宜：无所谓好也无所谓不好。忌：除了特别提出的以外的任何事情，都不应该做。"},{key:"普护",value:"吉神的一种，普渡维护之意，适宜求医避病。"},{key:"卯不穿井水泉不香",value:"逢卯日或逢卯时不能挖井。"},{key:"五合",value:"宜嫁娶、开光、开市等。"},{key:"建日",value:"健旺之气。行军、外出、求财、谒贵、上书都是好日子，如寄履历表求职，或到上司家拜访，找亲朋好友周转一下，选此建日即对了。建日为该月最吉祥的日子。本日不可动土、开仓。"},{key:"除日",value:"为除旧布新之象。除服、疗病、避邪、出行、嫁娶都是好日子，如有久病想找个日子换医生试试不妨选择除日，效果甚佳。不可求官、上任、开张、搬家。逢除日不到上司家，以免吃力不讨好，新官上任更不可选在除日，以免官运受阻，断送前程。"},{key:"满日",value:"为丰收圆满之意。祈福、结亲、开市都是好日子，如好友想结拜成兄弟，或准备替小孩认干爹，选择满日最好。不可服药、栽种、下葬、求医疗病、上官赴任。"},{key:"平日",value:"平者平常也，无凶无吉之日。一般修屋、求福、外出、求财、嫁娶都可以用平日。"},{key:"定日",value:"按定为不动，不动则为死气。因此定日诸事不宜，只可做计划性的工作，尤其打官司如逢定日必不妙。"},{key:"执日",value:"为固执之意，执持操守也。司法警察人员，选择执日抓人最好不过了，十拿九稳。一般执日宜祈福、祭祀、求子、结婚、立约。忌搬家、远行。"},{key:"破日",value:"为刚旺破败之日，万事皆忘，婚姻不谐。惟宜求医疗病及赴考求名。逢破日，不宜多管闲事。"},{key:"危日",value:"为危险之意。最忌登高、冒险，喜登山踏青的朋友，逢危日就应该特别小心。"},{key:"成日",value:"为成功、成就、结果之意。凡事皆有成，祈福、入学、开市、嫁娶、求医、远行、移徙、上任都是好日子。但不宜打官司，否则必定赢不了。"},{key:"收日",value:"为收成之意。经商开市、外出求财，买屋签约、嫁娶订盟诸事吉利。"},{key:"开日",value:"为开放、开心之意。除了埋葬主大凶外，凡事求财、求子、求缘、求职、求名都是好日子。"},{key:"闭日",value:"坚固之意。最宜埋葬，代表能富贵大吉大利。逢闭日不宜看眼睛及求医 问学。外出经商，上任就职，逢闭日也不理想。"},{key:"心月狐宿星",value:"心星造作大为凶，更遭刑讼狱囚中，忤逆官非宅产退，埋葬卒暴死相从。婚姻若是用此日，子死儿亡泪满胸，三年之内连遭祸，事事教君没始终。"},{key:"尾火虎宿星",value:"尾星造作主天恩，富贵荣华福禄增，招财进宝兴家宅，和合婚姻贵子孙，埋葬若能依此日，男清女正子孙兴，开门放水招田宅，代代公侯远播名。"},{key:"箕水豹宿星",value:"箕星造作主高强，岁岁年年大吉昌，埋葬修坟大吉利，田蚕牛马遍山岗，开门放水招田宅，箧满金银谷满仓，福荫高官加禄位，六亲丰荣乐安康。"},{key:"斗木獬宿星",value:"斗星造作主招财，文武官员位鼎台，田宅家财千万进，坟堂修筑贵富来，开门放水招牛马，旺蚕男女主和谐，遇此吉宿来照护，时支福庆永无灾。"},{key:"牛金牛宿星",value:"牛星造作主灾危，九横三灾不可推，家宅不安人口退，田蚕不利主人衰，嫁娶婚姻皆自损，金银财谷渐无之，若是开门并放水，牛猪羊马亦伤悲。"},{key:"女土蝠宿星",value:"女星造作损婆娘，兄弟相嫌似虎狼，埋葬生灾逢鬼怪，颠邪疾病主瘟惶，为事遭官财失散，泻利留连不可当，开门放水用此日，全家财散主离乡。"},{key:"虚日鼠宿星",value:"虚星造作主灾殃，男女孤眠不一双，内乱风声无礼节，儿孙媳妇伴人床，开门放水遭灾祸，虎咬蛇伤又卒亡，三三五五连年病，家破人亡不可当。"},{key:"危月燕宿星",value:"危星不可造高楼，自遭刑吊见血光，三年孩子遭水厄，后生出外永不还，埋葬若还逢此日，周年百日取高堂，三年两载一悲伤，开门放水到官堂。"},{key:"室火猪宿星",value:"室星修造进田牛，儿孙代代近王侯，家贵荣华天上至，寿如彭祖八千秋，开门放水招财帛，和合婚姻生贵儿，埋葬若能依此日，门庭兴旺福无休。"},{key:"壁水貐宿星",value:"壁星造作主增财，丝蚕大熟福滔天，奴婢自来人口进，开门放水出英贤，埋葬招财官品进，家中诸事乐陶然，婚姻吉利主贵子，早播名誉着祖鞭。"},{key:"奎木狼宿星",value:"奎星造作得祯祥，家内荣和大吉昌，若是埋葬阴卒死，当年定主两三伤，看看军令刑伤到，重重官事主瘟惶，开门放水遭灾祸，三年两次损儿郎。"},{key:"娄金狗宿星",value:"娄星修造起门庭，财旺家和事事兴，外进钱财百日进，一家兄弟播高名，婚姻进益生贵子，玉帛金银箱满盈，放水开门皆吉利，男荣女贵寿康宁。"},{key:"胃土雉宿星",value:"胃星造作事如何，家贵荣华喜气多，埋葬贵临官禄位，夫妇齐眉永保康，婚姻遇此家富贵，三灾九祸不逢他，从此门前多吉庆，儿孙代代拜金阶。"},{key:"昴日鸡宿星",value:"昴星造作进田牛，埋葬官灾不得休，重丧二日三人死，尽卖田园不记增，开门放水招灾祸，三岁孩儿白了头，婚姻不可逢此日，死别生离是可愁。"},{key:"毕月乌宿星",value:"毕星造作主光前，买得田园有余钱，埋葬此日添官职，田蚕大熟永丰年，开门放水多吉庆，合家人口得安然，婚姻若得逢此日，生得孩儿福寿全。"},{key:"觜火猴宿星",value:"觜星造作有徒刑，三年必定主伶丁，埋葬卒死多因此，取定寅年使杀人，三丧不止皆由此，一人药毒二人身，家门田地皆退败，仓库金银化作尘。"},{key:"参水猿宿星",value:"参星造作旺人家，文星照耀大光华，只因造作田财旺，埋葬招疾哭黄沙，开门放水加官职，房房子孙见田加，婚姻许遁遭刑克，男女朝开幕落花。"},{key:"井木犴宿星",value:"井星造作旺蚕田，金榜题名第一光，埋葬须防惊卒死，狂颠风疾入黄泉，开门放水招财帛，牛马猪羊旺莫言，贵人田塘来入宅，儿孙兴旺有余钱。"},{key:"鬼金羊宿星",value:"鬼星起造卒人亡，堂前不见主人郎，埋葬此日官禄至，儿孙代代近君王，开门放水须伤死，嫁娶夫妻不久长，修土筑墙伤产女，手扶双女泪汪汪。"},{key:"柳土獐宿星",value:"柳星造作主遭官，昼夜偷闭不暂安，埋葬瘟惶多疾病，田园退尽守冬寒，开门放水遭聋瞎，腰佗背曲似弓弯，更有捧刑宜谨慎，妇人随客走盘桓，"},{key:"星日马宿星",value:"星宿日好造新房，进职加官近帝王，不可埋葬并放水，凶星临位女人亡，生离死别无心恋，要自归休别嫁郎，孔子九曲殊难度，放水开门天命伤。"},{key:"张月鹿宿星",value:"张星日好造龙轩，年年并见进庄田，埋葬不久升官职，代代为官近帝前，开门放水招财帛，婚姻和合福绵绵，田蚕人满仓库满，百般顺意自安然。"},{key:"翼火蛇宿星",value:"翼星不利架高堂，三年二载见瘟惶，埋葬若还逢此日，子孙必定走他乡，婚姻此日不宜利，归家定是不相当，开门放水家须破，少女恋花贪外郎。"},{key:"轸水蚓宿星",value:"轸星临水造龙宫，代代为官受皇封，富贵荣华增受禄，库满仓盈自昌隆，埋葬文昌来照助，宅舍安宁不见凶，更有为官沾帝宠，婚姻龙子入龙宫。"},{key:"角木蛟宿星",value:"角星造作主荣昌，外进田财及女郎，嫁娶婚姻出贵子，文人及第见君王，惟有埋葬不可用，三年之后主瘟疫，起工修筑坟基地，当前立见主人凶。"},{key:"亢金龙宿星",value:"亢星造作长房当，十日之中主有殃，田地消磨官失职，接运定是虎狼伤，嫁娶婚姻用此日，儿孙新妇守空房，埋葬若还用此日，当时害祸主重伤。"},{key:"氐土貉宿星",value:"氐星造作主灾凶，费尽田园仓库空，埋葬不可用此日，悬绳吊颈祸重重，若是婚姻离别散，夜招浪子入房中，行船必定遭沉没，更生聋哑子孙穷。"},{key:"房日兔宿星",value:"房星造作田园进，钱财牛马遍山岗，更招外处田庄宅，荣华富贵福禄康，埋葬若然用此日，高官进职拜君王，嫁娶嫦娥至月殿，三年抱子至朝堂。"},{key:"仓库厕外西南",value:"本日胎神在仓库和厕所之外的西南方位，在这些方位不可随意敲打或移动物件，以免对孕妇和胎儿不利。"},{key:"仓库厕房内东",value:"本日胎神在仓库和厕所之内的东面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"仓库床外正东",value:"本日胎神在仓库和睡床之外的正东方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"仓库床外正北",value:"本日胎神在仓库和睡床之外的正北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"仓库床外西北",value:"本日胎神在仓库和睡床之外的西北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"仓库栖外东南",value:"本日胎神在仓库和家禽宠物栖息处之外的东南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"仓库栖外正北",value:"本日胎神在仓库和家禽宠物栖息处之外的正北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"仓库炉外西南",value:"本日胎神在仓库和炉灶之外的西南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"仓库炉房内南",value:"本日胎神在仓库和厨房之内的南面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"仓库碓外东北",value:"本日胎神在仓库和盛米处之外的东北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"仓库碓外西北",value:"本日胎神在仓库和盛米处之外的西北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"仓库门外正南",value:"本日胎神在仓库和孕妇房门之外的正南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"仓库门房内北",value:"本日胎神在仓库和孕妇房门之内的北面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"占大门外东北",value:"本日胎神在整栋楼房大门之外的东北面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"占房床外东南",value:"本日胎神在孕妇房间和睡床之外的东南面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"占房床房内北",value:"本日胎神在孕妇卧室之内的北面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"占碓磨外正南",value:"本日胎神在盛米处和石磨之外的正南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"占碓磨房内南",value:"本日胎神在盛米处和石磨所在房间之内的南面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"占门厕外正东",value:"本日胎神在孕妇房门和厕所之外的正东方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"占门厕外正北",value:"本日胎神在孕妇房门和厕所之外的正北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"占门厕外正南",value:"本日胎神在孕妇房门和厕所之外的正南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"占门床外正南",value:"本日胎神在孕妇房门和睡床之外的正南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"占门床房内南",value:"本日胎神在孕妇卧室之内的南面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"占门炉外东北",value:"本日胎神在孕妇房门和炉灶之外的东北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"占门炉外西北",value:"本日胎神在孕妇房门和炉灶之外的西北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"占门碓外东南",value:"本日胎神在孕妇房门和盛米处之外的东南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"占门碓房内北",value:"本日胎神在孕妇房门和盛米处房内的北面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"厨灶厕外西南",value:"本日胎神在厨房和厕所之外的西南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"厨灶厕房内南",value:"本日胎神在厨房和厕所之内的南面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"厨灶床外东北",value:"本日胎神在厨房和孕妇睡床之外的东北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"厨灶床外正东",value:"本日胎神在厨房和孕妇睡床之外的正东方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"厨灶床外正西",value:"本日胎神在厨房和孕妇睡床之外的正西方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"厨灶栖外正东",value:"本日胎神在厨房和家禽宠物栖息处之外的正东方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"厨灶栖外西北",value:"本日胎神在厨房和家禽宠物栖息处之外的西北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"厨灶炉外正南",value:"本日胎神在厨房和炉灶之外的正南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"厨灶炉房内北",value:"本日胎神在厨房和炉灶所在房间之内的北面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"厨灶碓外西南",value:"本日胎神在厨房和盛米处所在房间之外的西南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"厨灶碓房内东",value:"本日胎神在厨房和盛米处所在房间之内的东南，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"厨灶门外东南",value:"本日胎神在厨房和孕妇房门之外的东南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"厨灶门外正北",value:"本日胎神在厨房和孕妇房门之外的东南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"房床厕外东北",value:"本日胎神在孕妇卧室和厕所之外的东北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"房床厕外正南",value:"本日胎神在孕妇卧室和厕所之外的正南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"房床厕外西北",value:"本日胎神在孕妇卧室和厕所之外的西北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"房床栖外正南",value:"本日胎神在孕妇卧室和家禽宠物栖息处之外的正南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"房床栖房内南",value:"本日胎神在孕妇卧室和家禽宠物栖息处所在房间之内的南面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"房床炉房内东",value:"本日胎神在孕妇卧室和厨房之内的东面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"房床碓外正东",value:"本日胎神在孕妇卧室和盛米所在房间之外的正东方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"房床碓外正北",value:"本日胎神在孕妇卧室和盛米所在房间之外的正北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"房床门外西南",value:"本日胎神在孕妇卧室之外的西南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"房床门房内南",value:"本日胎神在孕妇卧室之内的南面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"碓磨厕外东南",value:"本日胎神在盛米处石磨处和厕所之外的东南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"碓磨厕房内北",value:"本日胎神在盛米处石磨处和厕所之内的北面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"碓磨床外西南",value:"本日胎神在盛米处石磨处和孕妇睡床之外的西南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"碓磨床房内东",value:"本日胎神在盛米处石磨处和孕妇卧室之内的东面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"碓磨栖外东北",value:"本日胎神在盛米处石磨处和家禽宠物栖息处之外的东北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"碓磨栖外正西",value:"本日胎神在盛米处石磨处和家禽宠物栖息处之外的正西方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"碓磨炉外东南",value:"本日胎神在盛米处石磨处和炉灶之外的东南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"碓磨炉外正北",value:"本日胎神在盛米处石磨处和炉灶之外的正北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"碓磨门外正东",value:"本日胎神在盛米处石磨处和孕妇房门之外的正东方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"碓磨门外西北",value:"本日胎神在盛米处石磨处和孕妇房门之外的西北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"门鸡栖外西南",value:"本日胎神在孕妇房门和家禽宠物栖息处之外的西南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"},{key:"门鸡栖房内东",value:"本日胎神在孕妇房门和家禽宠物栖息处房间内的东面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。"}],hl=Od,oj=new Map;for(const n of hl)oj.set(n.key,n.value);function Fd(n){return oj.get(n)}function $d(n){const e=n.trim();if(!e)return[...hl];const t=e.toLowerCase();return hl.filter(i=>i.key.toLowerCase().includes(t)||i.value.toLowerCase().includes(t))}function dn({children:n,className:e=""}){return r.jsx("section",{className:`card ${e}`,children:n})}function ln({children:n,extra:e}){return r.jsxs("div",{className:"card-title",children:[r.jsx("span",{className:"inline-block h-3.5 w-1 rounded-full bg-accent"}),r.jsx("span",{className:"flex-1",children:n}),e]})}function fr({text:n}){return r.jsx("p",{className:"rounded-xl border border-dashed border-line px-4 py-6 text-center text-sm text-muted",children:n})}function it({items:n,tone:e="default",onItemClick:t,emptyText:i="无"}){if(n.length===0)return r.jsx("span",{className:"text-sm text-muted",children:i});const l=e==="good"?"chip-good":e==="bad"?"chip-bad":"chip";return r.jsx("div",{className:"flex flex-wrap gap-1.5",children:n.map(s=>r.jsx("button",{type:"button",className:`${l} ${t?"cursor-pointer transition hover:opacity-70":""}`,onClick:t?()=>t(s):void 0,title:Fd(s),children:s},s))})}const O={fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};function V({name:n,className:e="h-5 w-5"}){const t={calendar:r.jsxs(r.Fragment,{children:[r.jsx("rect",{x:"3",y:"5",width:"18",height:"16",rx:"2.5",...O}),r.jsx("path",{d:"M3 10h18M8 3v4M16 3v4",...O})]}),qian:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M7 3h10l-1.4 6.2L18 12v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 18.5V12l2.4-2.8L7 3Z",...O}),r.jsx("path",{d:"M9.5 8.5h5M12 8.5v7",...O})]}),cake:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M4 20h16v-4.5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2V20Z",...O}),r.jsx("path",{d:"M4 16.5c1.8 0 2.4-1.2 4-1.2s2.2 1.2 4 1.2 2.4-1.2 4-1.2 2.2 1.2 4 1.2",...O}),r.jsx("path",{d:"M12 13.5V11M8.5 13.5V12M15.5 13.5V12",...O})]}),bell:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M6 16V10a6 6 0 1 1 12 0v6l1.5 2.5h-15L6 16Z",...O}),r.jsx("path",{d:"M10 21h4",...O})]}),note:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z",...O}),r.jsx("path",{d:"M14 3v4h4M9 13h6M9 17h4",...O})]}),book:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5Z",...O}),r.jsx("path",{d:"M4 20.5A2.5 2.5 0 0 1 6.5 18H19v3H6.5",...O})]}),sun:r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"12",cy:"12",r:"4",...O}),r.jsx("path",{d:"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",...O})]}),moon:r.jsx("path",{d:"M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z",...O}),left:r.jsx("path",{d:"M14.5 5 8 12l6.5 7",...O}),right:r.jsx("path",{d:"M9.5 5 16 12l-6.5 7",...O}),search:r.jsxs(r.Fragment,{children:[r.jsx("circle",{cx:"11",cy:"11",r:"6.5",...O}),r.jsx("path",{d:"m16 16 4.5 4.5",...O})]}),plus:r.jsx("path",{d:"M12 5v14M5 12h14",...O}),trash:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13",...O}),r.jsx("path",{d:"M10 11v6M14 11v6",...O})]}),edit:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M4 20h4L19 9a2.1 2.1 0 0 0-3-3L5 17v3Z",...O}),r.jsx("path",{d:"M14.5 6.5 17.5 9.5",...O})]}),refresh:r.jsxs(r.Fragment,{children:[r.jsx("path",{d:"M20 12a8 8 0 1 1-2.6-5.9",...O}),r.jsx("path",{d:"M20 4v4h-4",...O})]}),close:r.jsx("path",{d:"m6 6 12 12M18 6 6 18",...O}),check:r.jsx("path",{d:"m5 13 4.5 4.5L19 7",...O})};return r.jsx("svg",{viewBox:"0 0 24 24",className:e,"aria-hidden":"true",children:t[n]})}function Ad({yiJi:n,jixiong:e,onTermClick:t}){return r.jsxs(dn,{className:"card-body",children:[r.jsx(ln,{children:"宜 · 忌"}),r.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"mb-2 flex items-center gap-2",children:[r.jsx("span",{className:"inline-flex h-6 w-6 items-center justify-center rounded-full bg-good/15 text-xs font-bold text-good",children:"宜"}),r.jsxs("span",{className:"text-xs text-muted",children:[n.yi.length," 项"]})]}),r.jsx(it,{items:n.yi,tone:"good",onItemClick:t,emptyText:"诸事不宜"})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"mb-2 flex items-center gap-2",children:[r.jsx("span",{className:"inline-flex h-6 w-6 items-center justify-center rounded-full bg-bad/15 text-xs font-bold text-bad",children:"忌"}),r.jsxs("span",{className:"text-xs text-muted",children:[n.ji.length," 项"]})]}),r.jsx(it,{items:n.ji,tone:"bad",onItemClick:t,emptyText:"无特殊禁忌"})]})]}),r.jsx("div",{className:"divider"}),r.jsx(ln,{children:"吉神 · 凶煞"}),r.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[r.jsxs("div",{children:[r.jsx("p",{className:"label",children:"吉神宜趋"}),r.jsx(it,{items:e.js,tone:"good",onItemClick:t,emptyText:"无"})]}),r.jsxs("div",{children:[r.jsx("p",{className:"label",children:"凶煞宜忌"}),r.jsx(it,{items:e.xs,tone:"bad",onItemClick:t,emptyText:"无"})]})]})]})}function Ud({dayGanzhiIndex:n,currentShichen:e,onTermClick:t}){const[i,l]=C.useState(!1),s=i?12:4;return r.jsxs(dn,{className:"card-body",children:[r.jsx(ln,{extra:r.jsx("button",{type:"button",className:"btn-ghost text-xs",onClick:()=>l(a=>!a),children:i?"收起":"展开全部 12 时辰"}),children:"时辰宜忌"}),r.jsx("div",{className:"space-y-2.5",children:cd.slice(0,s).map((a,u)=>{const o=Dd(n,u),c=u===e;return r.jsxs("div",{className:`rounded-xl border p-3 transition ${c?"border-accent/60 bg-accent-soft":"border-line"}`,children:[r.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[r.jsx("span",{className:`text-sm font-semibold ${c?"text-accent":""}`,children:a}),r.jsx("span",{className:"text-[11px] text-muted",children:jd[u]}),r.jsx("span",{className:"chip",children:yd(n,u)}),c&&r.jsx("span",{className:"chip-accent",children:"当前"})]}),r.jsxs("div",{className:"space-y-1.5",children:[r.jsxs("div",{className:"flex gap-2",children:[r.jsx("span",{className:"mt-0.5 shrink-0 text-[11px] text-good",children:"宜"}),r.jsx(it,{items:o.yi,tone:"good",onItemClick:t,emptyText:"—"})]}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("span",{className:"mt-0.5 shrink-0 text-[11px] text-bad",children:"忌"}),r.jsx(it,{items:o.ji,tone:"bad",onItemClick:t,emptyText:"—"})]})]})]},a)})}),!i&&r.jsxs("button",{type:"button",className:"btn mt-3 w-full",onClick:()=>l(!0),children:[r.jsx(V,{name:"right",className:"h-4 w-4"}),"展开剩余时辰"]})]})}const Jd={solar:"公历",lunar:"农历","solar-term":"节气"},Wd={solar:"chip-accent",lunar:"chip","solar-term":"chip"};function Vd({festivals:n,terms:e}){const[t,i]=C.useState(null),l=new Date,s=e.filter(a=>a.year>l.getFullYear()||a.year===l.getFullYear()&&(a.month>l.getMonth()+1||a.month===l.getMonth()+1&&a.day>=l.getDate())).slice(0,3);return r.jsxs(dn,{className:"card-body",children:[r.jsx(ln,{children:"节日"}),n.length===0?r.jsx("p",{className:"text-sm text-muted",children:"今天没有传统节日。"}):r.jsx("ul",{className:"space-y-2",children:n.map(a=>r.jsxs("li",{className:"rounded-xl border border-line",children:[r.jsxs("button",{type:"button",className:"flex w-full items-center gap-2 px-3 py-2.5 text-left",onClick:()=>i(u=>u===a.name?null:a.name),children:[r.jsx("span",{className:Wd[a.kind],children:Jd[a.kind]}),r.jsx("span",{className:"flex-1 text-sm font-medium",children:a.name}),a.detail&&r.jsx(V,{name:t===a.name?"close":"right",className:"h-4 w-4 text-muted"})]}),t===a.name&&a.detail&&r.jsx("div",{className:"animate-fade-up space-y-3 border-t border-line px-3 py-3",children:a.detail.cards.map(u=>r.jsxs("div",{children:[r.jsx("p",{className:"mb-1.5 text-xs font-semibold text-accent",children:u.title}),u.tags&&u.tags.length>0&&r.jsx("div",{className:"mb-1.5 flex flex-wrap gap-1.5",children:u.tags.map(o=>r.jsxs("span",{className:"chip",children:[r.jsx("span",{className:"text-muted",children:o.title}),o.value]},o.title))}),u.detail&&u.detail.map((o,c)=>r.jsx("p",{className:"text-[13px] leading-relaxed text-ink/85",children:o},c))]},u.title))})]},`${a.kind}-${a.name}`))}),r.jsx("div",{className:"divider"}),r.jsx(ln,{children:"二十四节气"}),r.jsx("ul",{className:"space-y-1.5",children:s.map(a=>r.jsxs("li",{className:"flex items-center justify-between rounded-lg bg-paper px-3 py-2 text-sm",children:[r.jsx("span",{className:"font-medium",children:a.name}),r.jsxs("span",{className:"text-xs text-muted",children:[a.year,"-",String(a.month).padStart(2,"0"),"-",String(a.day).padStart(2,"0")," ",String(a.hour).padStart(2,"0"),":",String(a.minute).padStart(2,"0")]})]},`${a.name}-${a.year}`))})]})}function Bd({onTermClick:n}){const[e,t]=C.useState(()=>new Date),[i,l]=C.useState(!1),[s,a]=C.useState(!1),u=Jy(e),{year:o,month:c,day:f}=u,g=C.useMemo(()=>{try{return dr(o,c,f)}catch{return null}},[o,c,f]),x=C.useMemo(()=>ej(o,c,f),[o,c,f]),m=C.useMemo(()=>_d({year:o,month:c,day:f}),[o,c,f]),v=C.useMemo(()=>Ul(gr({year:o,month:c,day:f})),[o,c,f]),p=C.useMemo(()=>g?uj({year:o,month:c,day:f},g):[],[o,c,f,g]),D=(2+m.monthIndex)%12,y=gd(x%12,D),j=C.useMemo(()=>Ed(y,x),[y,x]),d=C.useMemo(()=>g?Cd(g.month,x):{js:[],xs:[]},[g,x]),z=od(new Date().getHours()),_=k=>{const I=k.getFullYear()*1e4+(k.getMonth()+1)*100+k.getDate(),T=jn.year*1e4+jn.month*100+jn.day,kn=xn.year*1e4+xn.month*100+xn.day;I<T||I>kn||t(k)},E=k=>{const I=new Date(o,c-1+k,1);I.getFullYear()<jn.year||I.getFullYear()>xn.year||t(new Date(I.getFullYear(),I.getMonth(),Math.min(f,Ru(I))))},N=ij({year:o,month:c,day:f});return r.jsxs("div",{className:"space-y-4",children:[r.jsxs(dn,{className:"card-body",children:[r.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",children:[r.jsxs("div",{children:[r.jsxs("div",{className:"flex items-baseline gap-3",children:[r.jsx("span",{className:"font-serif text-5xl font-semibold leading-none text-ink",children:f}),r.jsxs("div",{children:[r.jsxs("p",{className:"text-sm text-muted",children:[o," 年 ",c," 月 · ",bc[new Date(o,c-1,f).getDay()]]}),g&&r.jsxs("p",{className:"mt-1 font-serif text-lg text-ink",children:[g.monthName,g.dayName]})]})]}),g&&r.jsxs("div",{className:"mt-3 flex flex-wrap gap-1.5",children:[r.jsxs("span",{className:"chip",children:[Cu(g.year),"年（",Du(g.year),"）"]}),r.jsxs("span",{className:"chip",children:[Pu(m.termYear,m.monthIndex),"月"]}),r.jsxs("span",{className:"chip",children:[xi(x),"日"]}),r.jsx("span",{className:"chip",children:Mu(c,f)})]}),r.jsxs("p",{className:"mt-2 text-[11px] leading-relaxed text-muted",children:["年干支与生肖以农历正月初一为界（GB/T 33661-2017）；月干支以节气为界，当前节气月：",m.termName,"后。"]})]}),r.jsxs("div",{className:"flex flex-col items-start gap-2 sm:items-end",children:[N&&r.jsxs("div",{className:"flex items-center gap-2.5 rounded-2xl border border-accent/30 bg-accent-soft px-3 py-2",children:[r.jsx("img",{src:`./icons/jieqi_${encodeURIComponent(N.name)}.png`,alt:N.name,width:72,height:48,loading:"lazy",className:"h-12 w-[72px] shrink-0 rounded-lg object-contain",onError:k=>{k.currentTarget.style.display="none"}}),r.jsxs("div",{className:"text-right",children:[r.jsxs("p",{className:"text-xs font-semibold text-accent",children:["今日节气 · ",N.name]}),r.jsxs("p",{className:"text-[11px] text-muted",children:[String(N.hour).padStart(2,"0"),":",String(N.minute).padStart(2,"0")," · ",o,"-",String(c).padStart(2,"0"),"-",String(f).padStart(2,"0")]})]})]}),r.jsxs("div",{className:"flex gap-1.5",children:[r.jsxs("button",{type:"button",className:"btn px-2.5",onClick:()=>_(ya(e,-1)),children:[r.jsx(V,{name:"left",className:"h-4 w-4"}),"前一天"]}),r.jsx("button",{type:"button",className:"btn",onClick:()=>_(new Date),children:"今天"}),r.jsxs("button",{type:"button",className:"btn px-2.5",onClick:()=>_(ya(e,1)),children:["下一天",r.jsx(V,{name:"right",className:"h-4 w-4"})]})]}),r.jsxs("div",{className:"flex gap-1.5",children:[r.jsxs("button",{type:"button",className:"btn-ghost text-xs",onClick:()=>a(k=>!k),children:[o," 年"]}),r.jsx("button",{type:"button",className:"btn-ghost text-xs",onClick:()=>l(k=>!k),children:i?"收起月历":"月历视图"})]})]})]}),s&&r.jsxs("div",{className:"mt-4 animate-fade-up",children:[r.jsx(ln,{children:"跳转到年份"}),r.jsx("div",{className:"grid max-h-44 grid-cols-6 gap-1.5 overflow-y-auto sm:grid-cols-10",children:Array.from({length:xn.year-jn.year+1},(k,I)=>jn.year+I).map(k=>r.jsx("button",{type:"button",className:`rounded-lg px-1 py-1.5 text-xs transition ${k===o?"bg-accent text-white":"bg-paper text-ink hover:bg-accent-soft hover:text-accent"}`,onClick:()=>{const I=new Date(k,c-1,Math.min(f,Ru(new Date(k,c-1,1))));_(I),a(!1)},children:k},k))})]}),i&&r.jsxs("div",{className:"mt-4 animate-fade-up",children:[r.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[r.jsxs("button",{type:"button",className:"btn px-2.5 py-1.5 text-xs",onClick:()=>E(-1),children:[r.jsx(V,{name:"left",className:"h-3.5 w-3.5"}),"上月"]}),r.jsxs("span",{className:"text-sm font-semibold",children:[o," 年 ",c," 月"]}),r.jsxs("button",{type:"button",className:"btn px-2.5 py-1.5 text-xs",onClick:()=>E(1),children:["下月",r.jsx(V,{name:"right",className:"h-3.5 w-3.5"})]})]}),r.jsx(Rd,{year:o,month:c,selected:e,onSelect:k=>{_(k),l(!1)}})]})]}),r.jsxs("div",{className:"grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]",children:[r.jsx("div",{className:"space-y-4",children:g?r.jsxs(r.Fragment,{children:[r.jsx(Ad,{yiJi:j,jixiong:d,onTermClick:n}),r.jsx(Ud,{dayGanzhiIndex:x,currentShichen:z,onTermClick:n})]}):r.jsx(dn,{className:"card-body",children:r.jsxs("p",{className:"text-sm text-muted",children:["该日期超出农历换算范围（",jn.year,"-",String(jn.month).padStart(2,"0"),"-",String(jn.day).padStart(2,"0")," ~ ",xn.year,"-",String(xn.month).padStart(2,"0"),"-",String(xn.day).padStart(2,"0"),"）。"]})})}),r.jsxs("div",{className:"space-y-4",children:[r.jsx(Vd,{festivals:p,terms:v}),r.jsxs(dn,{className:"card-body",children:[r.jsx(ln,{children:"日期速览"}),r.jsxs("dl",{className:"space-y-2 text-sm",children:[r.jsx(Ce,{label:"公历",value:`${o}-${String(c).padStart(2,"0")}-${String(f).padStart(2,"0")}`}),r.jsx(Ce,{label:"农历",value:g?`${g.year}年${g.monthName}${g.dayName}`:"—"}),r.jsx(Ce,{label:"干支",value:`${g?Cu(g.year):"—"}年 ${Pu(m.termYear,m.monthIndex)}月 ${ud(o,c,f)}日`}),r.jsx(Ce,{label:"建除值神",value:`${fd(y)}日`}),r.jsx(Ce,{label:"生肖 / 星座",value:`${g?Du(g.year):"—"} · ${Mu(c,f)}`}),r.jsx(Ce,{label:"节气月",value:`${m.termName}（${m.termDate.month}月${m.termDate.day}日）`}),r.jsx(Ce,{label:"状态",value:Vy(e)?"今天":"历史 / 未来日期"})]})]})]})]})]})}function Ru(n){return new Date(n.getFullYear(),n.getMonth()+1,0).getDate()}function Ce({label:n,value:e}){return r.jsxs("div",{className:"flex items-start justify-between gap-3",children:[r.jsx("dt",{className:"shrink-0 text-muted",children:n}),r.jsx("dd",{className:"text-right font-medium",children:e})]})}const Hd=[{num:"1",qianNum:"一签",title:"姜公封相",beijing:"姜公，姜子牙，世人多称之为姜太公。周朝的开国功臣，他辅佐周武王战败了暴君纣王，在多场敌强我弱的恶战中，如有神助，取得胜利。《封神榜》一书，亦有记载姜公在元始天尊、太乙真人、南极仙翁诸神的扶助，取得封神榜。您求得这支上上签，可喜可贺！龙虎得风云际会，您立下的大志，将会得偿所愿，并能到达至善至乐的境界。正所谓：东成西就，左右逢源，万事如意。",liunian:"大吉大利，去年失去的，将会在今年得到。",shiye:"由于有很多贵人扶持，谋事较易成就。",caifu:"正财大丰收，亦有些小横财。",zishen:"一年四季皆顺遂平安。",jiating:"和气吉祥，宜在今年添丁。",yinyuan:"爱情幸福，适婚人士莫错过今年好时机。",yiju:"置业，搬迁，移民，都有机会。",mingyu:"学业，事业，社会服务，各方面均易获嘉奖。",jiankan:"困扰多时的小病即将成为过去。",youyi:"贵人多，小人难侵，广结善缘，多结交新的朋友。",xiongJi:"上上"},{num:"2",qianNum:"二签",title:"王道真误入桃源",beijing:"桃源，即晋代陶渊明所述的世外桃源。传说中，这位有缘人王道真亦曾顺水行舟，无意间到达桃源，看见一群逃避战乱的先秦遗民，快乐无忧的生活在一个百花争妍，万紫千红，花香蝶舞，枯木逢春的境界。求得此签，有一种否极泰来，枯木逢春、时来运转、快活无忧的征兆，而且，又暗示，一切佳景，不必刻意去强求；顺其自然，尽力而为，反而有意想不到的收获。",liunian:"今年常喜乐，无凶险，可有意外收获。",shiye:"水到渠成，凡事顺其自然，必有好结果。",caifu:"有意外之财，但不可沉迷投机博彩。",zishen:"贵人多，保平安。切戒与人争斗。",jiating:"和睦，愉快，及时行乐。",yinyuan:"未婚者易遇有缘人。已婚者人妻和谐，但忌婚外恋。",yiju:"世外桃源有避乱世之象，请把握机会。",mingyu:"切勿做沽名钓誉之事，何必追逐浮名？",jiankan:"今年有转弱为强之机，多作户外运动。",youyi:"出门遇贵人，朋友为您带来无比欢乐。",xiongJi:"上吉"},{num:"3",qianNum:"三签",title:"鲁班开山",beijing:"鲁班，春秋时代鲁国人，发明多种土木建筑工具，被尊崇为建筑行业的祖师爷。他曾训令门徒，切勿乱砍乱伐木材，令这样丰富的牛山，变成牛山濯濯，光秃秃，竟然无一合适的材料可用。这签的主要意思，是说：“本来，有很好的条件，但是，处理失当，不知不觉间，优势尽失，等到急需人、财、物应用的时候，才发觉已经一无所有了。”暗示要珍惜资源，慎防小人，摒弃恶习。",liunian:"上半年平平，宜未雨绸缪，否则下半年就会出现逆境。",shiye:"宜守不宜攻，最忌一意孤行。",caifu:"正财运不算太差，忌赌博，不贪不谋。",zishen:"好好修养自己，小心言行。",jiating:"孝顺父母，在家中要营造和谐气氛。",yinyuan:"今年内不是结婚的好时机。提防异性小人。",yiju:"远行有阻滞。旅行或搬迁小心人财安全。",mingyu:"不要逞强，不要出风头。",jiankan:"病向浅中医，养病如养虎，慎之。",youyi:"小心择友，勿受小人唆摆作出坏的尝试。",xiongJi:"中平"},{num:"4",qianNum:"四签",title:"调雏紫燕正穿梭",beijing:"董永，东汉人，家贫，少年时卖身葬父。后遇仙女下凡，结为夫妇。此签是说董永与天仙在春天看见的一幅自然景色。檐前燕子往返穿梭，寻觅食物，回巢哺育下一代的风景图。可以告慰的是，燕子为培养下一代，一定会选择较为安全的环境筑巢，而签中第一二句，是母燕在檐前与雏燕呢喃细语，即有平安之象。后两句则是提醒，雏燕的父母为了觅食，来来往往，忽高忽低，暗示运程时起时伏，时好时坏，年中或有波动。",liunian:"大致安稳，但运程有反覆。",shiye:"要勤奋刻苦，密切留意外间形势，知所进退。",caifu:"财运有顺流逆流，但起落不会太大。",zishen:"无大碍，宜谦逊合群。",jiating:"家宅平安，和气致祥。",yinyuan:"爱情运颇佳，婚姻美满。",yiju:"有迁徙机会，尤其在春秋两季。",mingyu:"您的勤劳，一定会获得别人赏识。",jiankan:"注意身体调养，劳逸安排得宜。",youyi:"既得到朋友帮助，亦宜帮助弱小。",xiongJi:"中吉"},{num:"5",qianNum:"五签",title:"韩夫人惜花",beijing:"韩夫人，是隋炀帝的一位姬妾，相传是一位惜花之人。此签是提出一个警告：今年会有较大的波折，“天时”稍差，“地利”亦易有失，唯一可取的，就是“人和”，希望有贵人相助，度过难关，回复生机。东园的百花，被狂风所吹袭，幸有惜花之人，不辞劳苦，去善后，去化险为夷，这个惜花人，可以是自己，也可以是别人，天助自助者。",liunian:"有阻滞，是先苦后甜的格局。",shiye:"虽然形势不利，但凭自己努力可保无虞。",caifu:"有小破财之象，对金钱勿存太大希望。",zishen:"一定要修心养性，才能临危不乱。",jiating:"家中可能有人会病痛多。",yinyuan:"最好勿在今年结婚。蜜运恐有波折。",yiju:"移民有阻，也不宜搬迁。勉强进行，要破财。",mingyu:"经过挫折后，可让别人发现自己的实力。",jiankan:"有病勿自己滥用治疗，更勿信江湖郎中。",youyi:"在患难中，你会更清楚谁是真正朋友。",xiongJi:"中吉"},{num:"6",qianNum:"六签",title:"王羲之归故里",beijing:"王羲之，（西元三二一、至三七九），东晋人，出身贵族，官至右军将军，会稽内史。后来辞官归故里浙江绍兴，研习书法有卓越成就，自成一格，为后代的毛笔字体开创一条新路。这支签，是形容一位有才学又有相当经济基础的人，放弃官场的争斗，急流勇退，毅然返故乡，一方面得聚天伦及友谊之乐，优哉悠哉，一方面又可以继续发展自己的专长，扬名于后世。",liunian:"大吉大利，尤其是秋冬时分。",shiye:"诸事顺意，对身边的人，随和一些，更佳。",caifu:"赚钱不少，花费亦不少。",zishen:"平安无事，多行善积福，好运会延续。",jiating:"家运兴旺，可以及时行乐。",yinyuan:"夫妻和顺，未婚者今年底有好机会。",yiju:"无论搬迁或移居外国，但求心之所安。",mingyu:"多助人，多作公益，功名建在不知不觉间。",jiankan:"身心愉快，可保最佳状态。",youyi:"会结交一些志同道合的新朋友。",xiongJi:"上吉"},{num:"7",qianNum:"七签",title:"仁贵归家",beijing:"薛仁贵，唐代名将，率军征东，屡建战功，获封为“平阳郡公”。这支签，是薛仁贵征东后，得胜回朝，领功获赏后，衣锦还乡的好景。但可惜，征人易老，在战争中消磨了青春，而回家途中，又适逢秋天，征雁南归、红叶纷飞，最令人触目伤感的是，不少征人的妻子，正在城头用木捣洗衣服。这暗示会有美中不足，而且会有扫兴或失意事发生。",liunian:"尚算平稳，春天较好，夏天更佳，但入秋就要小心。",shiye:"在艰难中亦会有成就，但不宜太执迷。",caifu:"财运普通而已，要小心失窃。",zishen:"平平常常，反而值得恭喜。",jiating:"除了注意家居安全外，记住，以和为贵。",yinyuan:"夫妻间，容易冲撞。未婚者最好勿在今年结婚。",yiju:"以不变应万变，无可奈何要改变环境，尽量在上半年搞妥。",mingyu:"最好不接受浮名。",jiankan:"易患神经衰弱，特别在下半年。",youyi:"不要高攀有财有势的人。",xiongJi:"中吉"},{num:"8",qianNum:"八签",title:"鸠占鹊巢",beijing:"《诗．召南．鹊巢》有云：“维鹊有巢，维鸠居之。”喜鹊善于筑巢，而鸠鸽却不懂筑巢，往往恃恶霸占而居之。此已有主被宾欺之象，也即是俗称的“客家占地主”。萝茑，即茑萝，一种攀藤植物，山岭上的松树，都被它们缠绕着。有困身，小人依附之象。春秋时，崔子因妻被齐王占有，怒而起兵杀之。此签有“鸠占鹊巢”之象，年内谨防小人欺凌，恶人相侵，要小心一言一行。",liunian:"是非多多，而且一波未平一波又起。",shiye:"极难有成就，在守业，要防恶人奸人。",caifu:"能够保持现状，已属万幸，切戒贪谋。",zishen:"小人缠身，是是非非不绝于耳，慎言。",jiating:"家宅运滞，妇孺更要小心出入、交友。",yinyuan:"婚姻与爱情都备受考验，防第三者出现。",yiju:"机会微。若勉强行事，须小心抉择，并作福祭朱雀。",mingyu:"凡事宜忍，和为贵。",jiankan:"病痛较多，特别在春秋两季。",youyi:"来说是非者，便是是非人。勿被人口甜舌滑所骗。",xiongJi:"下下"},{num:"9",qianNum:"九签",title:"陶渊明赏菊",beijing:"陶渊明，晋代的一位有识之士，不为五斗而折腰，放弃官禄，回家享清福，在隐居四周，种满菊花，一边享受田园之乐，一边著书立说，写出了很多传诵至今的文章、诗歌。求得此签者，有天时、地利、人和之象，凡事称心如意。",liunian:"大吉，尤其以立秋后更佳。",shiye:"凡事不宜强求，随遇而安。",caifu:"不必太刻意去求财，财来自有方。",zishen:"平安大吉，得快乐时且快乐。",jiating:"和谐快乐，今年年底添丁最合此签。",yinyuan:"已婚者，夫唱妇随；未婚者，有情人终成眷属。",yiju:"这是移民的上吉签，应把握机会。",mingyu:"常常获得别人尊敬，常常保持谦卑。",jiankan:"春天或有些小病，但很快就无事。",youyi:"贵人特多，小人难侵。",xiongJi:"上吉"},{num:"10",qianNum:"十签",title:"苏秦不笫",beijing:"战国时代苏秦。屡试不第。仍然不屈不挠。卒为六国之宰相。有如月镜挂天中。偶被浮云重重遮盖。此暂时轻轻遭劫之象。要人借我以风吹散浮云。而现下未知何人可借。是未得贵人扶助也。",liunian:"今年的阻滞较多，宜以不变应万变。",shiye:"一动不如一静，除非遇上大贵人，否则宜稳守。",caifu:"大财机会甚微，偏财机会更微，但常有小财。",zishen:"尚算平安，无论发生何事，也无大碍。",jiating:"和气可以令好运提前来。今年生女，会为家庭带来好的转机。",yinyuan:"夫妻常有小磨擦，宜避免。不宜今年结婚。",yiju:"移民外国或搬迁新居，都有机会。",mingyu:"不妨为公众多做点事。",jiankan:"常有小病，如头痛、感冒、睡眠不宁。",youyi:"要远离小人，勿与异性朋友来往太密。",xiongJi:"中平"},{num:"11",qianNum:"十一签",title:"汉文帝赏柳",beijing:"汉文帝，一个施德政、亲人民的皇帝，在位二十三年，实行“与民休息”的政策，减轻地税、赋役、刑狱，使国家在平定“诸吕之乱”后，国计民生得以复苏，农业生产迅速发展。更难能可贵者，在勤政亲民之余，汉文帝最喜欢欣赏杨柳的美态，为了提高工作效率，他采用“分段睡眠法”，每日三眠三起，醒后必欣赏绿柳垂堤，紫燕在其间飞舞的美好景色。此签有万事如意之象。",liunian:"一切吉祥如意，快乐无愁。",shiye:"有极显著的成就，但凡事要亲力亲为。",caifu:"正财财源滚滚而来，偏财则极少。",zishen:"平安，但一定要为未来多积福德。",jiating:"父母慈，子女孝，乐也融融。",yinyuan:"夫妻感情越来越好。未婚者今年可缔结良缘。",yiju:"有搬迁和移民机会，而且路上有贵人。",mingyu:"可以建立名誉和功勋。",jiankan:"多作户外运动，更可延年却病。",youyi:"化敌为友，宜扩大社交圈子。",xiongJi:"上吉"},{num:"12",qianNum:"十二签",title:"太白捞月",beijing:"太白，即唐朝大诗人李白。李白失意于官场，以诗酒为友。为人侠义豪放。“醉翁捞月”的故事，就是他做主角，独个儿纵酒大醉，一向有求仙思想的李太白，望着水中的明月倒影，飘飘欲仙，竟伸手去打捞水中月。此签有海市蜃楼的虚假幻象，有花篮打水一场空的预兆，凶多吉少，为下下签。当行善务实为本份，勿被假像所引诱。",liunian:"凶险较多，且有虚浮的假环境。",shiye:"宜守，不宜轻举妄动，更勿与人合资经营。",caifu:"是财散，人安乐格局，花费的同时，多做点善事。",zishen:"时好时坏，做人要有自己的宗旨。",jiating:"家宅要慎防小人及意外。",yinyuan:"夫妻、情侣之间，疑云重重，要以坦诚相对。",yiju:"来来往往，浪费时间金钱，而到头来一无所获。",mingyu:"默默工作，默默行善，勿恋浮名。",jiankan:"反反覆覆，年内要防大病，小病也要见医生。",youyi:"贵人帮不到，小人常加害，小心。",xiongJi:"下下"},{num:"13",qianNum:"十三签",title:"孟浩然寻梅",beijing:"孟浩然，唐朝著名诗人。早年隐居鹿门山，游历东南各地，生活隐逸，与多座名山的僧道友善，常有来往，久有修道之意。在“宴梅道士山房”一诗中有“忽逢青鸟侠，邀入赤松家”句，反映孟浩然对赤松子的尊崇。这支签，是孟浩然在岭南寻梅的际遇。把梅花花瓣放入酒中而饮，人生极雅乐之事。路上遇有骑驴人先来一步，在其引领，得偿所愿。",liunian:"梅傲雪凌霜，冬天以及春初，运气较佳。",shiye:"如无贵人，难成事。但与人共事，要提防他捷足先登。",caifu:"求财较难，且要与人分。并要小心财物损失。",zishen:"家宅平安，一切如常，无大起大落。",jiating:"",yinyuan:"避免第三者介入，结婚宜拣冬季。",yiju:"出门多遇贵人，往南方北方皆宜。",mingyu:"苦乐自知，勿望扬名。",jiankan:"很可能会有小病或慢性病，特别是气管、皮肤。",youyi:"朋友运很奇怪，一是很能帮你，一是很想谋你。",xiongJi:"中平"},{num:"14",qianNum:"十四签",title:"东坡归隐",beijing:"苏东坡，宋代文学家、诗画家，在诗词字画中皆有卓越成就，被列入“唐宋八大家”。但仕途坎坷，曾多次被贬谪，亦曾来过广东省惠州等地。晚年北还，归隐，寄情于山水、诗词、字画。签语描写东坡归隐的清雅生活：为了幽闲，在居所周围种满绿竹，把时间都交托给春天，或躲在茅屋里赏雨，或醉后眠在杏花旁边，安然入梦乡，最怕被黄莺的歌声吵醒。此乃安逸之象。",liunian:"并非十全十美，但也快活无愁。",shiye:"工作愉快，事业无大发展。",caifu:"衣食丰足，宜置业安居。",zishen:"安乐，但要戒多言。",jiating:"家中有喜事，如生女，更好景。",yinyuan:"夫妻或情侣之间，常有“耍花枪”式的小争吵。",yiju:"旅游运很好，出入须防财物损失。",mingyu:"不要争于表现自己，让别人慢慢发现您的好处。",jiankan:"身体会比去年较好，吃多些，睡多些。",youyi:"朋情广阔，应酬较多，小心口舌是非。",xiongJi:"中吉"},{num:"15",qianNum:"十五签",title:"明皇游月殿",beijing:"唐明皇，即玄宗李隆基，初登基时，整顿弊政，国民经济得以发展，历史上称为“开元之治”，可惜后来耽于安逸，与杨贵妃风流快活，任由宠臣贪污舞弊，惹出“安史之乱”。但此签只道繁华快活之象，唐明皇得一叶仙舟，扶摇直上九霄，遨游月宫，仙乐飘飘处处闻，传说中，“霓裳羽衣曲”就因此而得，诗酒歌舞，无止无休。求得此签，虽有大吉大利之象，万事如意，但要警惕勿太沉迷酒色安乐。",liunian:"好好把握这一年光阴，勿蹉跎岁月。",shiye:"因得天时，谋事颇为顺利。",caifu:"钱财有极可观的收入，偏财亦不俗。",zishen:"快活无愁，但入秋后要多加自律。",jiating:"和睦幸福，有多宗值得庆祝的事。",yinyuan:"夫妻感情更上一层楼。情侣可选秋季结婚。",yiju:"极有移民机会，一切如有神助。",mingyu:"功名有成就。但要避免桃色事件。",jiankan:"身壮力健，多运动，为未来健康打好基础。",youyi:"贵人特多，而且有异性贵人，宜多结识事业上的良友。",xiongJi:"上吉"},{num:"16",qianNum:"十六签",title:"牧童跨犊回归",beijing:"刘皇叔，即刘备，偶遇水镜先生，当时正值夕阳西下，天边的群鸦纷纷回巢；山岗外，传来了阵阵的笛子声，原来是牧童骑着牛犊，优哉悠哉的返家。牧笛的调子，忽长忽短，忽高忽低，很自由，很谐和，充满了快乐。求得此签者，既有快乐无求之意，又有大器晚成之象，凡事尽力而为，得失无愧于心，即所谓：尽人事，顺天命，自然就“明天会更好”。",liunian:"无风无险，但有高潮低潮，运程成波浪形向好处走。",shiye:"并非困难重重，亦无太大成就，不断努力，年尾会有收获。",caifu:"财运平平，宜节俭积蓄。",zishen:"最宜为未来做一些实际工作。",jiating:"要敬爱老人家，这会增加福祚。",yinyuan:"对配偶不要挑剔罗唆。未婚者不宜太早结婚。",yiju:"移民运平平，年内亦不宜迁居。必要时就只有选在年尾。",mingyu:"切戒年少气盛，成名多在四十岁之后。",jiankan:"这方面绝对无大问题。",youyi:"不要巴结权势，宜在同辈中寻知已。",xiongJi:"中吉"},{num:"17",qianNum:"十七签",title:"月下追贤",beijing:"萧何月下追贤，是汉代一个挽留人才的真实故事。萧何佐辅刘邦建立帝业，名将韩信投靠间邦，未获重用，夤夜驰归，萧何知道后，立即策马在月光下追韩信，晓以大义，劝其回心转意，同建汉朝。“秋水蒹葭白露盈……”这两句，是写秋景，蒹葭，是荻草与芦苇，凝结了霜露，月色满阶。接着是清风中的马铃声，然后是天亮的晨钟声，示意追得韩信回。此签有失而复得，人尽其材之意。",liunian:"年初平平，秋后会遇上赏识自己的贵人。",shiye:"有表现自己才干的机会，可考虑转职。",caifu:"正财不大，但偏财不俗，可在兼职中多动脑筋。",zishen:"平安无大碍，不过，锋芒不要尽露。",jiating:"家宅亦无不妥，切勿斤斤计较。",yinyuan:"可能会出现茶杯里的风波，呷干醋。",yiju:"搬迁和移居外国，都有很好的机会。",mingyu:"无谓追求浮名，多做实际工作。",jiankan:"虽无大碍，但要学习养气养生。",youyi:"可以遇上好知已。",xiongJi:"中吉"},{num:"18",qianNum:"十八签",title:"杜鹃泣血动客心",beijing:"杜鹃，相传为蜀帝杜宇所化，在《十三州志中》有这样的记载：“当七国称王，独杜宇称帝于蜀，曰望帝。”后来，望帝委派一位叫做鳖冷的臣子去巫山治水而成、功，望帝自觉才德不及鳖冷，“乃委国鳖冷……遂自亡去，化为子规。”子规，就是杜鹃。而杜鹃思念家国，声声啼泣，眼泪化成杜鹃花。异乡客人，寒夜中被杜鹃啼声惊醒，更加触发乡思。此签虽为下下，但小心谨慎，可逢凶化吉。",liunian:"年内运程可能有较大反覆，特别是在春、秋两季。",shiye:"无大起色，打工比当老板好过一点。",caifu:"求财难，更绝对无偏财，勿染指赌博。",zishen:"多做事，少说话，慎防祸从口出。",jiating:"家人有别离之象，小心年老的病人。",yinyuan:"争吵频繁，越吵运程越差。尽量忍。",yiju:"即使可以移民移居，新环境亦不太好。",mingyu:"易犯官非，切戒争斗，否则身败名裂。",jiankan:"：病痛较多，特别留意心、肺、眼睛。",youyi:"在逆境认识真正的朋友。",xiongJi:"下下"},{num:"19",qianNum:"十九签",title:"伏羲画八卦",beijing:"伏羲，即太昊，八卦的图像，为他所创画，并教化人民捕鱼畜牧，改善生活。而八卦第一章，是乾卦，三连划，属太阳，纯阳无阴，唯智者不取。求取此签者，如果能领悟到其中爻象的道理，万事顺昌。“纯阳易伤”的道理，随时都发生在身边，譬如做人怕蚀底，做一偏激，谁人敢与你合作。凡事要看透各方面，不能死牛一面颈。光靠蛮、恶、霸气者，终于会失败。",liunian:"四季皆有小运，要顺势而知所进退。",shiye:"开始时不大顺利，需要耐力。",caifu:"求财亦是先苦后甜格局。",zishen:"平稳，但切勿意气用事。",jiating:"家中宜营造一种良好的沟通气氛。",yinyuan:"对于配偶或情侣，要检点一言一行，勿积怨。",yiju:"可选择近海或山之阴处，以调和阳刚之气。",mingyu:"戒浮夸轻狂，切勿出口伤人。",jiankan:"多吃新鲜蔬果，少饮酒，少食煎炸食物。",youyi:"当您沉得住气，心境平和时，会有贵人接近。",xiongJi:"中吉"},{num:"20",qianNum:"二十签",title:"雪梅招亲",beijing:"雪梅，是古时安南国（今越南）公主。征联招亲。其上联是“太极殿前三尺雪”，其国内竟无人识对。后来，广东有一位叫做黄华贵的，福至心灵，以“广寒宫里一枝梅”对通，被招为附马。签意是：天上广寒宫里的这枝仙花，别问是谁种的，落得凡间，人事已经变更了。每个人的命运，已由上天注定，善恶到头终有报应的。求得此签，宜多种善作福，顺应天时。",liunian:"年尾比年初好，因征联中，最末二家为雪与梅。",shiye:"宝物沉归底，挨苦在先，享福在后。",caifu:"命中有时终须有，命中无时莫强求。",zishen:"个人的祸福，是自己言行的报应。",jiating:"夫妻应相敬如宾，和气生财。",yinyuan:"良缘天赐，尊重对方，会生活得更愉快。",yiju:"有南移之象，可考虑往东南方发展。",mingyu:"命中有功名，但会随心术增益或亏损。",jiankan:"年中会有小病，要小心求医，勿乱自服。",youyi:"会结交意想不到的朋友，特别是异性朋友。",xiongJi:"中平"},{num:"21",qianNum:"二十一签",title:"武则天赏花",beijing:"武则天，唐朝的女皇帝，是历史上一个传奇女子，在位时，曾于冬残春未到时，要欣赏百花，令百花仙子限时争妍斗丽，还亲自击鼓催花。这支签是描述当时赏花情况：天边的红霞如织锦，门外的桃花杏花在争艳，一边品评着哪种花最美丽，一边饮着美酒，真是人生乐事。求得此签，可望富贵平安。",liunian:"立春后，即有一番好景。其余日子，吉多凶少。",shiye:"有意想不到的收获，宜把握时机。",caifu:"求财在春、冬二季较易，偏财亦不错。",zishen:"要怡情养性，戒骄戒躁。",jiating:"家运开始转好，渐入佳境。",yinyuan:"宜在春天订婚，初冬结婚。",yiju:"移民的机会增大，留在目前的环境亦有新作为。",mingyu:"切勿强求虚名，欲速反不达。",jiankan:"注意休息，凡事量力而为。",youyi:"朋情广，应酬多，贵人亦多。",xiongJi:"中吉"},{num:"22",qianNum:"二十二签",title:"陈妙常思春",beijing:"陈妙嫦，即陈姑，削发为尼后，凡心未息，常常思念以前的恋人。此为下下签。求得此签，一来景况凄凉，二来因缺乏定力，患得患失，举棋不定，难免一事无成。秋水伊人，天南地北，各处一方，此恨绵绵无尽，满腹相思，凭谁寄语，说不尽的凄凉，枉自痛断肝肠。真的是，字字伤心。宜多作善福，有贵人扶持，才能出生天。",liunian:"不太如意，阻滞多多。",shiye:"若不专心致力于一事，就无所成就。",caifu:"小心破财。",zishen:"劳心又劳力，终日营营役役，皆因未立大志。",jiating:"夫妻若互不信任，则家无宁日。",yinyuan:"夫妻若互不信任，则家无宁日。",yiju:"一动不如一静，此心安处是吾乡。",mingyu:"切忌婚外情，勿恋已婚夫妇。",jiankan:"身体多病，皆因凡事看不开。",youyi:"小人从中作梗，有事应多找朋友商量。",xiongJi:"下下"},{num:"23",qianNum:"二十三签",title:"邯郸幻梦",beijing:"邯郸幻梦，即是黄粱美梦。故事发生在唐朝，有一个，叫卢生，在邯郸旅店投宿，遇一姓吕道人，给他一个枕头，睡在上面，发了一梦，享了几十年繁华。梦醒时肚饿极，店主锅中的黄梁还未煮熟呢。这支签，提醒人们别相信幻象，要脚踏实地，欲想衣锦荣归而又不是发白日梦，就要脚踏实地。同时，亦有暗示，不要受骗，小心别人的甜言蜜语，糖衣炮弹。",liunian:"年内有不少机会，宜好好把握。",shiye:"大起大落，成“拉据战”形势。务实，坚忍，有好结果。",caifu:"较难有积蓄，尽量节省无必要的花费。",zishen:"不要被小小成功而冲昏头脑。",jiating:"婚外的诱惑，会使您的运气更坏。",yinyuan:"恋爱像雾又像花，好好的，忽然又散了。",yiju:"辛辛苦苦做的计划，忽然间遇上大阻力。",mingyu:"克制虚荣心，学习赞美别人，会令自己谦逊。",jiankan:"男性易患神经衰弱，女性易患暗病。",youyi:"朋友口头讲得好，但没有太多实质帮助。",xiongJi:"中平"},{num:"24",qianNum:"二十四签",title:"白居易叹情",beijing:"白居易，唐朝大诗人。才情绝伦，但官运并不亨通，这支签的意景，在白居易著名作品《琵琶行》中亦有出现过——“其间日暮闻何物，杜鹃啼血猿哀鸣。春江花朝秋月夜，往往取酒还独倾。”在被贬谪（即今日之“下放”）日子里，诗人过着极孤寂的生活。诗酒琴棋当然可以解愁，但是无伴，又怎能行乐呢？自弹自唱谁来欣赏？独自饮酒，既冷淡，又哀愁。此乃下下签，宜多修身，作福。",liunian:"事运多阻滞，尤其在秋季。",shiye:"小人特别多，而自己的计划，也要检讨是否过于保守。",caifu:"勿吝啬钱财，好好享受一下，最好与别人分享。",zishen:"本来个人运程已稍差，再加上意志消沉，就更坏了。",jiating:"试试对家中亲人展开笑颜，家运会好一些。",yinyuan:"在改变处事做人的消极态度之前，追求异性多不能成功。",yiju:"有搬迁及移民的机会，但新环境亦未必如意。",mingyu:"人际关系搞不好，最好能尝试改变形象。",jiankan:"常有小病，秋天防大病。",youyi:"要冲出自我的封锁，扩大社交圈子。",xiongJi:"下下"},{num:"25",qianNum:"二十五签",title:"朱洪武登基",beijing:"朱洪武，明太祖朱无璋，少年时曾在皇觉寺出家。幼时家贫，放牛以补家计，曾与一群牧童登上嵩山（中岳），说：“他日我若为皇帝，群臣就像群山一样，向我拱、立朝拜。”后来朱无璋建立明朝，果然尊五岳为神。（五岳：东岳泰山、南岳衡山、西岳华山、北岳恒山、中岳嵩山）。此签有位高得意之象，群山纷纷向中岳朝拜，好象臣子列班，整齐又严肃，居此位置，怎能不开心呢？",liunian:"大吉大利，多年的愿望极可能在最近实现。",shiye:"更上一层楼，做生意会有新发展，做工的将会升职。",caifu:"财运很好，而且有多条财路。",zishen:"事事顺意，贵人多。",jiating:"家庭多快乐，小心勿沾婚外情。今年有添丁机会。",yinyuan:"今年最适合结婚。",yiju:"东南西北，四方皆有好出路。",mingyu:"能帮助别人，将会得到更大善果。",jiankan:"即使有小病，立等可除。",youyi:"可望结交另一个层面的新朋友。",xiongJi:"上吉"},{num:"26",qianNum:"二十六签",title:"徐庶归家",beijing:"徐庶，三国时代一个杰出的政治家、军事家，与孔明是好朋友。本来，徐庶是有心辅佐刘备建立帝业的，但曹操却利用徐庶母亲来“打人质牌”，使徐庶改变初衷，返回家乡，落入曹操手中。徐庶离开刘备时，走马荐诸葛，极力推崇孔明。徐庶归家后，被徐母大骂他上了曹操的当。孝义两难存，徐庶在曹操手下做官，始终是、“身在曹营心在汉”。此签是描述徐庶被曹操放假后，思念母亲，归家心切之情。",liunian:"上半年不错，但下半年就逐渐走下坡。",shiye:"工作和生意都算过得去，但常有不愉快的事发生。",caifu:"正财运有，但不太大。投资赌博要小心。",zishen:"检点一言一行，可以使上半年运更好，下半年运不算太差。",jiating:"家中的老人，可能会生病。亦不宜今年生育。",yinyuan:"最好将婚期押后至明年。",yiju:"有移居的机会，有意者，宜把握。",mingyu:"不喜欢浮名的，名誉找上门来。刻意追求的，却得不到。",jiankan:"四肢五脏无大碍，但容易精神紧张。",youyi:"有助朋友成功的运气，何不珍惜这机会？",xiongJi:"中平"},{num:"27",qianNum:"二十七签",title:"蝶蚁知时",beijing:"这支签，用蝶蚁知时，来比喻越王勾践复国的苦心和知机，凡事要顺时顺势，顺其自然，则较易成功。天晴时，粉蝶就会把被雨露沾湿的衣服（双翼）来晾晒。当天气炎热时，暴风雨来临之前，蚂蚁就会排列成行，整齐地前进或后退，队形时开时合。求得此签者，自己不妨仔细思考其中哲理，可以得到莫大的启示。",liunian:"较为平稳，但入冬后，要提防小人。",shiye:"知所进退，不宜做得太过。",caifu:"每一个钱都是勤劳所得，莫贪横财。",zishen:"心安理得，平安。",jiating:"家运在融洽祥和气氛下，向更好处上升。",yinyuan:"可能有多个选择，宁取踏实勤奋的。",yiju:"迁移的运势很强，可小心进行。",mingyu:"在点滴进取中，获得他人尊敬。",jiankan:"无大碍，四季注意汤水补养，更佳。",youyi:"很容易找到志同道合者。",xiongJi:"中平"},{num:"28",qianNum:"二十八签",title:"浔阳江听琵琶",beijing:"这又是一支与唐朝诗人白居易有关的签，不过，这是中平，而第廿四签是下下。区别是，廿四签失于孤单；这支则属中平，因为，总算有片刻的欢娱。白居易在浔阳江头夜送客，在船上听到悦耳的琵琶声，寻声访问，得见一失意女子，“同是天涯沦落人，相逢何必曾相识”，白居易有感于自己的落泊与琵琶女的遭遇，写成了著名的长诗《琵琶行》。这签中虽有快活，但极短暂，宜修身，忍守。",liunian:"年内虽然间中有小小好环境，但大运未开。",shiye:"宜守不宜攻，有贵人而助力不大。",caifu:"今年求财较为艰难，应尽力节俭。",zishen:"谋事切勿多言，言多必失。",jiating:"家中常有小麻烦，小心化解，勿让其扩大。",yinyuan:"不要追求对方的外表，特别留意其内心世界。",yiju:"出国或迁居，环境均不理想，最好暂且不要考虑。",mingyu:"无功名可求。",jiankan:"小小的病痛，也会造成较长时间的困扰。",youyi:"在患难中，才发现真正友谊。",xiongJi:"中平"},{num:"29",qianNum:"二十九签",title:"张翰思鲈",beijing:"张翰，晋代吴郡人，有识之士，曾被齐王召为大司马，当时政局纷乱，张翰不欲卷入政治旋涡，于是，托辞秋风起，思念故乡的鲈鱼、菊花，辞官归故里。此签虽只属中吉，但知足者求得，一定有很愉快的日子。鲈鱼作脍，脍就是鱼生，有黄菊、美酒相伴，在秋高气爽的黄昏，泛舟在涨潮的湖上，试想一想，这样的良辰美景赏心乐事，还有什么忧愁的。",liunian:"虽无大富大贵，胜在平安，尤其秋后更佳。",shiye:"进可攻、退可守，但求心之所安。",caifu:"在您不太刻意去追求时，它悄悄来了。",zishen:"大致平稳，即使有什么事，立秋后也可解决。",jiating:"一家人乐也融融，年尾有添丁之喜。",yinyuan:"蜜运很好，感情进展有可喜的突破。",yiju:"用团聚为理由，会较容易取得移民权。",mingyu:"自然而来，不怕您不要，只怕您推不了。",jiankan:"保持心境开朗，注意消化系统保养。",youyi:"在这一年中，有很多次与远方亲朋欢聚的机会。",xiongJi:"中吉"},{num:"30",qianNum:"三十签",title:"贵妃自缢",beijing:"唐明皇因终日与杨贵妃享尽骄奢淫乐，荒废朝政，惹来安禄山兵变，京师有危，六军保驾往四川方向撤退，行至马嵬坡，将士忽然不肯再行，一定要唐明皇先处死杨贵妃。在无可奈何之情势下，一代绝色的美人在君皇掩面不忍卒睹时，自缢而死。此签为下下，求得者能引以为戒，仍可避凶。因杨贵妃死后，在天上与唐明皇相见。签首两句，写杨贵妃国色天姿，风流得意时。后两句写死后与唐明皇长相思。",liunian:"大致不太好，凡事见好即收。",shiye:"做事要处处设防，防人防己，戒骄戒贪。",caifu:"难望有什么可观收入，宜稳守。",zishen:"常有虚假佳景，在快乐时潜伏危机，要步步为营。",jiating:"夫妻感情很好，但与其他家庭成员相处时，要注意检点。",yinyuan:"爱情会有多次考验，要抗拒第三者的诱惑。",yiju:"勿主动迁移“煮到熟就食”，但要小心。",mingyu:"小心绯闻令您名誉地位受损。",jiankan:"注意切勿沉迷酒色。",youyi:"较容易为别人妒忌，不要在朋友面前出风头。",xiongJi:"下下"},{num:"31",qianNum:"三十一签",title:"蔡中兴遇险",beijing:"蔡中兴，北宋人，在福建泉州当官时，修建洛阳桥，凡事亲力亲为。洛阳桥工程宏大，以当时的建筑技术而言，实在是奇迹，传说中有神仙帮助。这支签，是说蔡中兴晚上乘船视察工程时，忽然遇险。狂风骤雨，吹打着船篷，河边的桃花，都被吹落了。惊醒了船上的渔翁，慌忙中，水流湍急，不辩南北西东。此为下下签，恐有惊险之象。",liunian:"有凶险，宜提高警觉，凡事要集中精神。",shiye:"常检讨手上的工作，提防措手不及。",caifu:"散财格局，可主动作公益，多积福。",zishen:"有麻烦，易惹官非，勿与人争讼。",jiating:"家中会有不如意事，要多依靠双亲及配偶。",yinyuan:"爱情来到十字街头，茫无头绪。",yiju:"出门要小心，乘搭交通工具要儆醒。",mingyu:"今年要踏实勤奋，戒出风头。",jiankan:"平日要增强体质，有病立即见医生。",youyi:"虽然朋友很多，但有难时，帮不了大忙。",xiongJi:"下下"},{num:"32",qianNum:"三十二签",title:"苏武牧羊",beijing:"苏武，汉代的一位忠臣。武帝派他出使匈奴，被番王单于拘留，威迫利诱，要他变节投降，苏武不屈，被放逐北海牧羊，所牧者，皆公羊，番王下令，除非他回心转、意，又或者公羊能产子，才能获释。苏武饮雪吃草籽，在风雪中挨了十九年，才得以还乡。后获宣帝赐爵“关内侯”。签文道尽苏武牧羊的艰辛，十九年如一日，天天紧握汉朝的使节杖牧羊，最后，连节杖的旗旄也被风吹去了，才得还乡。",liunian:"仍在艰辛挣扎中，要意志坚定。",shiye:"无论您在创业还是守业，都不要受外界影响。",caifu:"求财甚难，要坚持。",zishen:"凡事忍耐，多作福，多做公德。",jiating:"家运阻滞多，提防小人从中作梗。",yinyuan:"是爱情备受考验的一年。婚事过了这个冬天再说。",yiju:"有搬迁之机会，往南方比往北方为佳。",mingyu:"大器晚成，勿追求急功近利。",jiankan:"常有小病，但无伤大雅。",youyi:"当您感到孤寂时，不妨主动去找寻旧日朋友。",xiongJi:"中平"},{num:"33",qianNum:"三十三签",title:"孔明识破曹操",beijing:"三国时期，孔明是刘备的军师、丞相，在与奸雄曹操抗衡中，曾多次运用智谋，把曹操打得落花流水。签中所讲，只是其中两个代表作，一是孔明借东风，火烧赤壁；二是发明了木牛流马这种运输工具，运送粮草补给。曹操有阴谋诡计，但也难胜过诸葛亮的智慧。求得此签者，事无大小，都要心存正义，切勿自欺欺人，做事光明正大，才可以远离小人。",liunian:"这一年的运气很特别，时常有突发事件打乱原来计划。",shiye:"并不太稳定，凡事必须亲力亲为。",caifu:"有大财机会，但要把握时机，靠实力与胆色去争取。",zishen:"略有不平安。",jiating:"争吵极多，必须公平理智地去处理。",yinyuan:"最好勿在今年结婚，除非两人有足够信心。",yiju:"虽有搬迁机会，但要小心财物。",mingyu:"在处事待人中，让别人发现自己的才智与毅力。",jiankan:"有病时，莫迟缓，要找医生检查。",youyi:"在朋友中，有人对您并不太忠实。",xiongJi:"中平"},{num:"34",qianNum:"三十四签",title:"大舜耕历山",beijing:"舜，中国古代的一位部落联盟领袖。大舜，是尊称。这支签，有孝感动天的含义。大舜虽然在历山这地方耕地，但心里很挂念家中的父母，最难能可贵的，是这两位老人家，都是较为盲塞固执的，而大舜事亲最孝顺。两老在大舜工作期间，时常因争吵而要大舜赶回家中去排解。幸而所养的大象，感于大舜的善良，都很听话，帮助他耕种及处理家务。",liunian:"平安中有不少好机会。",shiye:"凡事尽力而为，可以考虑转职或创新业。",caifu:"财来自有方，无须刻意去追求。",zishen:"与人为善，不贪不妄，戒骄戒躁。",jiating:"家和万事兴，当孝顺父母。",yinyuan:"会找到情投意合的良伴，今年宜婚。",yiju:"有很好的机会，而且，父母可以帮大忙。",mingyu:"容易得到别人的信任和赏识。",jiankan:"身体本该无大碍，但偶有损伤。",youyi:"乐于助人，人亦乐于接近您。",xiongJi:"中吉"},{num:"35",qianNum:"三十五签",title:"唐僧取经",beijing:"唐僧，即唐三藏，本姓陈，法号玄奘，唐人高僧，曾往印度研习佛经，十余年后返国，全心致力译经，凡一千三百三十五卷。他取西经的艰辛故事，在民间流传甚广，最脍炙人口的是《西游记》。这支签，是先苦后甜，凡事要尽心尽力之意。上天要人做大事，首先要令他筋骨辛劳，心脑受苦，甚至还要挨饿。千万别以为好景是天上掉下来的。每一个人今天享福或挨穷受苦，都是有前因的。",liunian:"先苦后甜，每一天都有新的挑战。",shiye:"事业型的人，求得此签，可以放心尽力去创一番大业。",caifu:"勿急功近利，宜放长眼光，勿贪横财。",zishen:"常有小波折，心定志坚，可平安过渡。",jiating:"积善之家有余庆，莫为无谓小事争吵。",yinyuan:"遇上有缘人，可在秋后结婚。",yiju:"有搬迁机会，宜取向西，移民后，有可能会折返原地再发展。",mingyu:"真才实料，人多敬佩。",jiankan:"多运动，多食蔬果，身体更好。",youyi:"不妨扩大社交圈子，大有机会与外国人交往。",xiongJi:"中吉"},{num:"36",qianNum:"三十六签",title:"平贵回",beijing:"唐朝时，王丞相抛绣球招亲，王家小姐宝钏意属薛平贵，于是，绣球便落在他身上，唯王丞相嫌平贵寒微，有反悔之意，幸宝钏情比金坚，宁愿放弃富贵，下嫁到平贵的寒窑，双宿双栖。婚后不久，平贵从军征战，而宝钏则独守寒窑。这支签，是平贵在军中建立战功，得意回窑，与妻子宝钏重逢的好景——眼前的事，就好像船靠岸，还愁没有风景？抬头见到前面的村屋，在夕阳里升起阵阵的炊烟。",liunian:"由年初到年尾，运势一天比一天好。",shiye:"定一个可行而又远大的计划，然后逐步进行。",caifu:"财来自有方，偶然遇上小困难别担心。",zishen:"逢凶化吉，处处有贵人扶持。",jiating:"夫妻恩爱，互相有助运作用。",yinyuan:"有还情人终成眷属，最好勿从经济角度衡量对方。",yiju:"有鸟倦知还迹象，移民了，很可能再回来。",mingyu:"名成利就，获得别人赞羡。",jiankan:"困扰多时的病痛，在注意休息后渐愈。",youyi:"朋友能互相帮助，有异性贵人。",xiongJi:"中吉"},{num:"37",qianNum:"三十七签",title:"东坡游赤壁",beijing:"苏东坡虽然官运并不太好，但胜在名士风流，交游广阔，寄情于山水之间，对着良辰美景，与知己诗酒唱酬，亦人生一乐事。苏东坡游赤壁，写下了传诵千古的《大江东去》一词。这支签，记述苏东坡游赤壁的赏心乐事：秋月照在江水，与好朋友泛舟垂钓，居然钓到极品“四腮胪”，于是，把家藏的旧酒拿出来，与大家分享，共度这段欢乐时光。",liunian:"有天时、地利、人和、可以乐观。",shiye:"常有意外的收获，最宜与人合作。",caifu:"既要懂得赚钱，也要懂得享受人生。",zishen:"快快乐乐，无忧无愁。",jiating:"家运兴隆，但要鼓励后辈学业。",yinyuan:"今秋结婚是个好主意。",yiju:"迁居运势很强，到新地方有更好环境。",mingyu:"最好能保持谦逊、随和。",jiankan:"无病无痛，但莫饮过量之酒。",youyi:"在旅行时会结识有趣的新朋友。",xiongJi:"上吉"},{num:"38",qianNum:"三十八签",title:"陱渊明辞官",beijing:"晋朝，陶渊明不为五斗米而折腰，辞官不干，返乡下享其清福。过着归隐的生活，他为此而写的《归去来辞》，就是这支签的含义。归去来兮，做官有什么了不起？回到我简陋的家园，虽然家居窄小，也觉得安乐无比。倚着南窗，寄托我的傲气，与知己把酒谈诗。也可以执杖登高，到处行脚，饱览山林美景。求得此签，乐得清静，有吉无凶。",liunian:"平稳而已，既无大喜，亦无大忧。",shiye:"今年并非谋事之年，最好暂且勿开展新计划，宜稳守。",caifu:"不要奢望有急财，但收入稳定，冬后求财较易。",zishen:"很优悠写意的一年，有机会学习一门自己喜欢的新技能。",jiating:"和谐愉快融洽，如家人有孕，产女机会较高。",yinyuan:"恋爱像捉迷藏，你急时对方不急，对方急时你又不急了。",yiju:"到处杨梅一样花，一动不如一静。",mingyu:"常有小人背后中伤，千万别出风头。",jiankan:"多运动，养好身体，等待转机。",youyi:"新朋友很多，但都不是事业型的。",xiongJi:"中吉"},{num:"39",qianNum:"三十九签",title:"夷齐耻食周粟",beijing:"伯夷与叔齐，商朝孤竹君的两个儿子。孤竹君废长立幼，死后立叔齐为继承人，但叔齐却坚决要让给哥哥，伯夷也拒绝接受，结果，两人放弃做君王的机会，先后逃、到周国，后来，周武王代纣，伯夷叔齐叩马谏阻，周王灭商后，两人耻食周粟，逃到首阳山，采薇蕨野草充饥，最终饿死。伯夷叔齐一向都被知识份子崇拜，为高尚节气的榜样。但求得此签者，却属于吉中有凶，有失运的隐忧。",liunian:"本来有不少机会、，但由于未能把握而失去。",shiye:"宜采取“骑牛牵马”对策，稳打稳扎。",caifu:"极难有财运，但常有偏财，可考虑兼职。",zishen:"有很多麻烦事缠身，每日的事情每日要解决。",jiating:"家中有人可以帮您一把力。",yinyuan:"今年最好别考虑结婚。",yiju:"别存侥幸心理，除非新环境一定会好，否则宜守旧。",mingyu:"不要意气用事，在名利场上有很强的对手。",jiankan:"年中可能有病，小心肠胃。",youyi:"损友较易为害您，凡事多与家人商量。",xiongJi:"中吉"},{num:"40",qianNum:"四十签",title:"俞伯牙碎琴",beijing:"春秋时，出了一位杰出的琴师伯才，他有一位知音，就是钟子期。可惜，钟子期比伯才先离开这世界。伯才悲痛不已，把心爱的琴摔得粉碎，哭着在坟前说：“世上只有子期才领会我的琴意，子期死了，阴阳相隔，天各一方，弹琴还有什么意思呢！”从此真的不再弹琴了。此签为下下，既有悲痛之象，亦有失友失物之意，并暗示本身的才华无人赏识。求得此签者，宜平心静气，修身力学，退守一段时间，再待势复出。",liunian:"不利，忌吊丧。探病亦要仔细择日。",shiye:"停滞不前，外界环境不好，要靠自己努力。",caifu:"要慎防破财失物，切勿投机赌博。",zishen:"常有突然而来的麻烦，要凭定力去化解。",jiating:"家中的风水，大有改善之必要。",yinyuan:"虽遇有情人，但今年无缘结合。",yiju:"移民暂无进展，搬迁有机，但要小心。",mingyu:"退一步，海阔天空，做人勿太执着。",jiankan:"四肢会有小毛病，如有神经衰弱，一定要开解自己。",youyi:"朋友难帮您，却易连累您。",xiongJi:"下下"},{num:"41",qianNum:"四十一签",title:"张骞月夜浮槎",beijing:"张骞，汉朝，曾多次出使西、北邻国，对于文化、经济交流有很大贡献。张骞通西域，有历史记载。玉门关外的宝石、音乐、葡萄，就是由他传入中原的。这支签，是说张骞月夜泛舟，来到天河，见仙女在织锦，他悄悄地取去织机上的一块石头而归，回到凡间，才知道这原来是宝石！求得此签，有福自然来，而且又有身在福中不知福之象。凡事吉祥，勿庸担心。",liunian:"适合谋事的一年，年底有意外惊喜。",shiye:"凡事要亲力亲为，积极进取。",caifu:"财富在不知不觉间积聚。",zishen:"平安，贵人特别多。",jiating:"快活无愁，可以享尽天伦之乐。",yinyuan:"蜜运在今年极易成功。",yiju:"有出外旅游的机会，移民手续可尽办理。",mingyu:"在社交圈子中，您的乐观勤奋被人欣赏。",jiankan:"无大碍，但天气变化时，要小心饮食起居。",youyi:"会认识很多好朋友，记住勿对异性存歪念。",xiongJi:"中吉"},{num:"42",qianNum:"四十二签",title:"王允献貂婵",beijing:"东汉时期，奸臣董卓当道，民不聊生，王允设“美人计”，献貂婵，令董卓与其义子吕布因争美女而不和，董卓终于失败，暴尸荒野。这签是讲王允徘徊月下花前，正为剿灭奸臣伤脑筋，幸然婢女貂婵自愿以身报国，使王允的美人计得以成功。求得此签，今年有几点一定要注意，凡事立心要忠诚正直，切勿与坏人同流合污；要全力以赴，并要有信心。",liunian:"运气不俗，而且尽在自己手中。",shiye:"凡事起头难，当事情有头绪时，已经是成功的开始了。",caifu:"宜作长线投资，勿太着眼暂时损失。",zishen:"先苦后甜，别指望不劳而获。",jiating:"家宅平安，家务要有条理，可望生一聪明女。",yinyuan:"女追男的格局较易成就好姻缘。",yiju:"出外，无论移民旅行，要戒酒色。",mingyu:"在实干中尽显才华。",jiankan:"别为一时难以解决的问题而忧烦伤身。",youyi:"不少人主动向您表示友好，有女贵人。",xiongJi:"中吉"},{num:"43",qianNum:"四十三签",title:"韩文公被贬",beijing:"韩愈，唐朝一位很有学问的人，为官正直敢言，因上书谏迎佛骨，而被贬广东潮阳。此签是记述当时在贬谪途中的凄凉景况：因为直言进谏，而惹怒皇帝，早上上书，当晚就要起程到边远的潮州，为了赶及上任新的潮州剌史，必须日夜赶程，人不离马鞍，韩愈与随行的仆人忙于奔命，非常疲倦的时候，更遇上大雪拥塞蓝关，人马受阻于途，难再上前一步。此为下下签，得罪皇帝，前途未卜。",liunian:"凶险较多，阻滞重重，小人加害。",shiye:"天时、地利俱失，唯有自己努力，守最后一关“人和”。",caifu:"求财甚艰难，收入极可能减少，要准备过紧日子。",zishen:"是非多多，容易得罪别人，小心。",jiating:"若想“退可守”，就要家庭和谐。",yinyuan:"爱情路上，坎坷不平。",yiju:"勉强转换环境，新的地方更艰辛。",mingyu:"切忌与人争一日之长短，要保持谦卑。",jiankan:"保存实力，开朗一点，等待转机。",youyi:"宜与辈份低，年纪轻的人结朋友。",xiongJi:"下下"},{num:"44",qianNum:"四十四签",title:"唐天宝评花",beijing:"唐朝天宝年间，太平盛世，唐玄宗李隆重基在位。当时，世人甚爱牡丹，以之喻意富贵吉祥。这支签，是当时百花争艳，牡丹被评为百花之首的情景。满园春色，百花都在炫耀自己的新妆，大家都有意争夺国香的殊荣。到底是谁名列第一呢？你看牡丹！她艳压群芳，获得全场冠军！此签虽只是中吉，但有春风得意之好兆头。",liunian:"大吉大利，立春之后，就已经入佳境。",shiye:"一枝独秀，力压群英，宜趁势锐进。",caifu:"求财较以往顺利得多，但要积蓄，以防花落时。",zishen:"平安富贵，许多愿望都会在今年实现。",jiating:"喜事重重，宜好好庆祝生日，婚禧等大日子。",yinyuan:"在情场，您是个胜利者。今年是结婚好时机。",yiju:"左右逢源，去到新地方将有新发展。",mingyu:"要保持自己的良好形象。",jiankan:"偶有小病，但要看医生，切勿胡乱自己治疗。",youyi:"在得意时，朋友更多，花些心思，在其中必有重情义者。",xiongJi:"中吉"},{num:"45",qianNum:"四十五签",title:"王质遇仙",beijing:"王质，本是一位平凡的樵夫，有一日，上山砍柴，无意中，误进仙山，看见两位老人家在下棋，棋局适逢高手，变化万千，非常有趣，王质看得入神，忘记一切，七、日七夜，很快就过去了，王质才发现自已带来的斧头竟然烂了，才醒悟要取柴回家。当他返回家时，一切都已经改变了，没有人认识他，他又不认识任何人，细问之下，才知道他离家已经一千年了！这就是“山中方七日，世上已千年”的故事。",liunian:"平稳中有机会，如不把握，就会浪费。",shiye:"再好的计划，不去实行，也等于零。",caifu:"一切靠自己努力，否则如入宝山空手回。",zishen:"本身有仙缘，有天资，要修为，行善。",jiating:"家境小康，夫妻在平淡中发现感情真挚。",yinyuan:"爱情运很好，常有“快活不知时日过”之感。",yiju:"迁或不迁，已有定数，两者俱吉，但求心之所安。",mingyu:"虽有别人栽培，但与虚名无缘。",jiankan:"多作户外活动，长命百岁。",youyi:"会结交一些有学问修养的朋友。",xiongJi:"中平"},{num:"46",qianNum:"四十六签",title:"左慈戏曹操",beijing:"左慈是三国时代，一位传奇人物，曾多次运用法术，戏弄曹操，令这个已患有头痛痼疾的一代奸雄，更加头痛。但左慈最后亦被曹操追杀，不知所终。签中所举的只是左慈戏曹操的其中一个例子：他把几盒外表金黄的极品柑果献给曹操，但用刀切开来一看，内里却是空空如也的。激怒了奸雄曹操要把他追杀，他连忙混在羊群中逃走。这支签暗喻，在好的假像中，有极坏的潜伏。",liunian:"不是好时年，勿被表面的好处所欺骗。",shiye:"与对手交锋时，要步步为营，小心陷阱。",caifu:"财运甚差，切勿贪小便宜。",zishen:"修善可消。",jiating:"家运尚算平稳，只是不宜在家聚赌。怀孕者宜多加小心。",yinyuan:"情海中常有变幻莫测的风波。勿考虑今年结婚。",yiju:"还是留在原居地，守一段日子再说。",mingyu:"远离黑暗势力，否则官非速至。",jiankan:"旧有的病患时好时坏，并小心恶化。",youyi:"肯对您说逆耳忠言的人，实在不多，值得珍惜。",xiongJi:"下下"},{num:"47",qianNum:"四十七签",title:"吴主索荆州",beijing:"三国，魏、蜀、吴，即曹操、刘备、孙权，刘备曾听孔明之言，联吴抗魏。初时，刘备未在四川一带建立蜀国的根基，曾向孙权借荆州，作为暂且栖身之地。后来，东吴曾多次由鲁肃出面向刘备要求归还，但刘备诸多理由，一味用“拖字诀”，推说是“无可奈何，暂时无法归还荆州”。这就是“刘备借荆州，一去无回头”的典故了。此签中，有借而不还，亦有哭泣之象，求得者宜细心领悟其中意思。",liunian:"有小灾劫，登山涉水，财物往还，要倍加小心。",shiye:"常有阻滞，不宜自己开业。",caifu:"钱银要小心从事，帐目文件，要亲自检点。",zishen:"有难以解决的问题等待处理，可考虑长痛不如短痛。",jiating:"家宅平安，但要防财物损失。",yinyuan:"对方常因小事，而惹争端，令您进退两难。",yiju:"要周详考虑，很多事都是没有回头路走的。",mingyu:"切勿失信于人。也不要做中间人、介绍人、担保人。",jiankan:"皮肤、肠胃的小病痛仍在纠缠着，时好时坏。",youyi:"勿与朋友合资，尽量避免钱财交往。",xiongJi:"中平"},{num:"48",qianNum:"四十八签",title:"卓文君卖酒",beijing:"卓文君，西汉时的一位奇女子，她祖父是卓王。文君擅长弹琴，思想开放，丈夫死后不久，即遇上才子司马相如，两人一见钟情，结为夫妻并私奔。后来更不理人、言，双双返回故乡，在闹市开设酒家，才子司马相如下厨，佳人卓文君当炉卖酒，成为一时佳话。虽然贫贱夫妻，却竟也百事不哀而极之快乐。此签是文君新寡时，夜里听到司马相如的琴挑，于是决意漏夜跟他私逃。后来二人临邛闹市卖酒，夫妻齐心合协力。",liunian:"今年大运不错。先苦后甜，冬季有大贵人。",shiye:"凡事必须亲力亲为，不妨考虑夫妻拍挡。",caifu:"无偏财，每个钱都要靠自己赚得。",zishen:"平安，旧日的事情要放得开。",jiating:"夫唱妇随，家运由恩爱而起，渐至佳境。",yinyuan:"爱情运相当好，不要错过这段好姻缘。",yiju:"目前所在地，是旺发之所，要稳守。",mingyu:"才华得以展露，很多人欣赏自己。",jiankan:"大致无碍，乐观一些，要戒酒色。",youyi:"您乐意帮助朋友，朋友也乐意帮您。",xiongJi:"中平"},{num:"49",qianNum:"四十九签",title:"司马相如题桥",beijing:"司马相如，是一位有学问的才子，琴棋诗画，样样皆精，他的赋体文字华丽，后来被汉武帝赏识，获封官。此签记述司马相如未成名之时，在桥头题字的感人故事。十年寒窗苦读书，终于学业有成了，但心中的大志，却无机会得以发挥。于是，司马相如在四川成都家乡的一条桥上，题了这十三个字“他日若不乘高车驷马，不过此桥！”其志竟有如此坚决者。",liunian:"一天天向好的方面发展，入秋后更佳。",shiye:"有白手创业兴家的机会，不要浪费今年的时光。",caifu:"年中有较大的正财运，亦有偏财。",zishen:"过去有修为的，今年丰收。",jiating:"家境由俭入奢，夫妻感情日笃，要尊敬家中老人。",yinyuan:"爱情美满，可主动向对方求婚。",yiju:"最适合远离出生地，到外边发展。",mingyu:"有志者事竟成，可扬名立万。",jiankan:"心情愉快，使小病痛渐渐自愈。",youyi:"有志同道合的好朋友。",xiongJi:"中吉"},{num:"50",qianNum:"五十签",title:"伍员赠剑渔父",beijing:"伍员，即伍子胥，春秋战国楚人，父兄被楚平王杀害，幸及时逃到吴国，后助吴王伐楚，掘楚平王墓，鞭尸三百以泄恨。当年伍员逃难时，困难重重，一夜白头。这支签是记述伍员逃亡时遇贵人。伍子胥逃难时，被江水阻隔，前无去路，后有追兵，幸有渔夫相救，载他渡江，伍子胥感激之余，坚持要以宝剑相赠，但渔夫却辞之不受。",liunian:"外表看来，似乎动荡不安，但对于您却有很好的时机。",shiye:"逢凶化吉，有大贵人帮您，意志要坚定。",caifu:"财来自有方，切戒贪婪，勿染指赌博。",zishen:"不要为身边的事情大惊小怪，谨慎言行。",jiating:"要孝顺父母，家庭要融洽，争吵则运转坏。",yinyuan:"有佳偶善缘，要尊重对方的诚意。",yiju:"非不得已，不要考虑搬迁移民。",mingyu:"择善而固执，把稳宗旨，必有建树。",jiankan:"注意休息，秋冬要多保养。",youyi:"有真心实意帮您的好朋友。",xiongJi:"中吉"},{num:"51",qianNum:"五十一签",title:"成王剪桐封弟",beijing:"成王，西周国王，年幼丧父，国事暂由王叔周公管理。成王有一天，与弟弟唐叔玩游戏，成王把桐叶剪成圭形，说：“我封你为诸候。”周公知道这件事，便恭喜唐、叔。成王却说，开玩笑而已。周公教训他：“君无戏言。”后来，周公东征胜利，巩固了西周的政治势力，并还政于成王，成王大封诸候，果然守信，把唐这地方封给唐叔。此签之含意甚深，凡事要诚恳，慎言，守信，兄弟要和好。",liunian:"平平常常，有小机会。",shiye:"凡事要守时守信，要谋而后动。",caifu:"未是求财的年份，多为将来储备金钱。",zishen:"有贵人扶持，无什么大风险。",jiating:"要孝敬长辈，爱护后辈。如怀孕可望产子。",yinyuan:"情侣间有许多争吵，凡事要开心见诚。",yiju:"人来到这世界，其实也是一次旅行，随遇而安，错有错着。",mingyu:"守信诺就是名誉的保证。",jiankan:"四肢可能有损伤。",youyi:"心诚，才有好朋友，否则众判亲离。",xiongJi:"中平"},{num:"52",qianNum:"五十二签",title:"盘古开辟天地",beijing:"盘古，生于天地混沌中，后来他开天辟地，盘古每日长高一丈，天亦高一丈，地亦厚一丈，经过一万八千年，天地才完成。这支签，是说：气清而上浮者为天，气浊而下凝者为地，中间清浊二气相混者，就是人。假如你求得这签，只要仔细思考一下，将上中下的气与上中下等人联想，就不难悟出真理了。明乎此，要凶要吉，全在乎自己，要做上浮之清气，还是下凝之浊气，请自便吧。",liunian:"今年的运气，全先靠自己积阴骘。",shiye:"种善因得善果，多劳多得，谋事要靠自己双手。",caifu:"绝无偏财，莫贪莫赌，踏踏实实聚银为上策。",zishen:"平安与否，在于能否修德。",jiating:"积善之家，必有余庆，记住，家和万事兴。",yinyuan:"由于今年的运气不太稳定，订婚结婚都不宜。",yiju:"福人住福地，心地良善，到处都一样。",mingyu:"要获得别人尊敬，必须以礼以善以诚待人。",jiankan:"身体强健，不必太着意滋补。",youyi:"亲近好人，远离小人，小心择友。",xiongJi:"中平"},{num:"53",qianNum:"五十三签",title:"冯暖客孟尝",beijing:"战国时期，孟尝君有食客三千，冯暧初时只被当作“下宾”，冯暧拍击着剑套，大声地说：“剑啊，我们不如走吧！这里食无鱼，出无车！”孟尝君闻后待之为上宾。后来，冯替孟尝君广结善缘，使孟尝君不但逃过大难，而且收复封邑。这支签是说：孟尝君食客三千，谁人独具慧眼，识得其中这样的人才呢？这位曾经弹铗而歌者，便是冯暧这位英雄了。",liunian:"运气有，但时常要动脑筋。",shiye:"凡事要先取得人和，上下人等都要合得来。",caifu:"小财不出，大财不入，节俭虽是美德，但不可待薄别人。",zishen:"居安思危，不要满足现状。",jiating:"注意公关，搞好敦亲睦邻。",yinyuan:"有互相欣赏的情人，可考虑秋后结婚。",yiju:"迁移运特别旺，出门遇贵人。",mingyu:"在适当时候，要表现一下自己的实力。",jiankan:"身体会比以前稍为健壮。",youyi:"有个非常信任自己的朋友，可助一臂之力。",xiongJi:"中吉"},{num:"54",qianNum:"五十四签",title:"庄周梦蝶蜨",beijing:"庄周，战国时一位杰出的思想家，主张清静无为，著作甚多，楚威王甘词厚蹩，封他为相，也遭拒绝。唐朝尊崇道教，天宝元年号庄子为南华真人。这支签，说的是“庄周梦蝶”的故事：话说庄子在梦中化成一只蝴蝶，在百花丛里飞来飞去，采得香花归来时，却发现自己仍然睡在高床暖枕里。求得此签者，逍遥快乐，与世无争，与人无求。暗示未是谋大事的时候。",liunian:"安稳而已，无特别的变化。",shiye:"别期望太高，很多事情与您的想法出入很大。",caifu:"虽然有些微财运，但会左手来右手去，难积聚。",zishen:"快活无愁，但要注意口德，勿开过份的玩笑。",jiating:"常常欢乐，而您可以助家人的运势。",yinyuan:"今年还是拍拍散拖算了，婚事以后再谈。",yiju:"看来一切很容易，要做起来就难得多，但仍有机会。",mingyu:"莫在别人赞美声中冲昏头脑，修心养性吧。",jiankan:"年内最可喜的，就是身心开朗，是考虑减肥的时候了。",youyi:"许多人都向您微笑，难有机会考验友情深浅。",xiongJi:"中平"},{num:"55",qianNum:"五十五签",title:"吴隐之投沈香",beijing:"吴隐之，一位清官，曾来广东省当官，爱民如子，后来辞官离去时，两袖清风，人民感激其任内德政，纷纷致送礼品，吴隐之一一婉拒，岂料归舟在珠江河上行走，忽然风浪大作，吴隐之连忙查问家人手下有无收受利者，众人都说没有，但有人提醒他，吴夫人手上的沉香扇，乃一父老所赠。吴隐之马上焚香向天祷告，然后把沉、香扇投入江心，果然风平浪静，江上出现一小岛，即今日之沉香浦。",liunian:"今年的运程，平衡中有转好的迹象。",shiye:"有转职机会。做生意者宜向转口贸易方面发展。",caifu:"正财可求，但切勿贪恋横财。",zishen:"安稳，小人难侵。",jiating:"知足者，家常乐。女眷要避忌三姑六婆。",yinyuan:"很难遇上合眼缘的，遇上了，也很难追求。",yiju:"到处都有发展的新机会。",mingyu:"勿起贪念，并提防桃色惹纷争。",jiankan:"多做缓跑、体操、拳等运动。",youyi:"以诚待人，真正的朋友不少。",xiongJi:"中平"},{num:"56",qianNum:"五十六签",title:"吕祖桃木剑",beijing:"吕祖，吕洞宾，八仙之一。桃木剑，就是这位纯阳祖师，在唐朝时辞官修道，所持的仙器。本签寓意吉祥，暗示一切都向好的方面发展。仙机见于签语的首两字——“安知”——怎么知道这把桃木剑不会成龙呢？将来修成正果，一见仙水，它就会化成一条龙，从吕祖的衣袖中飞腾而出，飞升千万里，空中还有彩云相伴随！求得此签，应努力振作修为，必成大器。",liunian:"大吉大利，有必定旺发的机缘。",shiye:"全力做好手头的事，时来运到，就会一条龙。",caifu:"财源广进。兼职副业常有意想不到的收获。",zishen:"安与危，全靠自己的修养，立心要善。",jiating:"家宅吉昌，好好庆祝生日以及那些值得纪念的日子。",yinyuan:"恋爱成熟。您会感受到对方的真诚，共订终身良缘。",yiju:"迁移旺盛，家居或写字楼不久就会搬。",mingyu:"行善积福，莫出真名实姓。",jiankan:"困扰多时的小疾患，可望自愈。",youyi:"广结善缘，社交圈子豁然开朗。",xiongJi:"中吉"},{num:"57",qianNum:"五十七签",title:"独占花魁",beijing:"这支签是说，春天来了，带来新的生机，要及时把握，独占花魁，（魁者，首也，暗示凡事要饮头啖汤），但行事要胆大心细，眼明手快之外，还要循序渐进，俗语说，捉到鹿，要识得慢慢脱角。您看看签语怎么说？——在小楼上，听得绵绵的春雨终于停下来了，但街头的脚步声，却又响个不停，忽然听见巷口传来卖花人的声音，马上买了第一枝花，然后在湿滑的街上，安步走回家。",liunian:"立春之后，运气转好，春雨愈多，运愈好。",shiye:"有几个起伏，春季的势好，打稳基础，以后慢慢发展。",caifu:"凡事要看通看透才去做，小心陷阱。",zishen:"谨慎自平安。",jiating:"家宅平安，常有快乐事，宜于今年怀孕。",yinyuan:"遇有情人，主动结攀，然后慢慢互相适应。",yiju:"暂以不变为宜，如出门旅行，考察，要小心安全。",mingyu:"有好花，自然香，不必自我吹擂。",jiankan:"无论什么小病或是怀孕，小心为上。",youyi:"很多人会主动与您交往，与他们有合作机会。",xiongJi:"中吉"},{num:"58",qianNum:"五十八签",title:"蹇叔谏君",beijing:"春秋时，秦穆公要出兵侵犯郑国与晋国，老臣子蹇叔，极力劝谏，不可做这等无良无义之事，但秦穆公一意孤行，结果，大败于淆山，统领军队的三个元帅，俱被对、方生擒。晋君之母乃秦穆公之女，晋康公念外祖父之情，释放这支败军返秦，但要倒戈舍甲（把兵器的利刃向下，脱去战袍护甲，情形十分狼狈）。这支签凶险很多，第一是妄想，第二是不听忠言，一意孤行，第三是失败，第四是蒙羞。宜多加避凶。",liunian:"不利，切勿狂妄自大，莫惹纷争诉讼。",shiye:"能保持现状已属万幸，暂时守一段时间。",caifu:"年中有多次破财的可能，与横财绝缘。",zishen:"一定要修心养性，寡欲行善。",jiating:"夫妻无大冲突，但常为亲戚间的是非而烦恼。",yinyuan:"爱情方面，半途有第三者出现。",yiju:"安于目前环境，切勿轻举妄动。",mingyu:"小不忍则乱大谋。贪婪会令自己身败名裂。",jiankan:"小病就要找医生检查，以免恶化。",youyi:"常与朋友争吵。多检讨自己。",xiongJi:"下下"},{num:"59",qianNum:"五十九签",title:"东施效颦",beijing:"西施，中国古代四大美人之一。春秋时，越国几乎被吴国所亡，后来，越王勾践得范蠡献西施，与吴国议和，吴王夫差得西施后，荒淫迷乱，终被越王所亡。这支签是说，西施这位浣纱女，美艳无双，一笑倾城，再笑便令吴王倾国了。最不自量的是丑女东施，整天模仿西施皱眉头的样子，以为可以博取别人的怜爱，其实，山鸡就是野鸡了，岂可以冒充凤凰呢？",liunian:"时运不好，宜修心，勿出外招惹事非。",shiye:"今年有许多事都不如意，守得住，便是成功的开始。",caifu:"常有无谓的花费，应减少不必要开支。",zishen:"安份守已，是可以平安度过难关的。",jiating:"家宅不安，有女人在搬弄是非。",yinyuan:"爱情基础不稳，易产生磨擦。",yiju:"一动不如一静。当心越搬越糟。",mingyu:"献丑不如藏拙，烦恼只为强出头。",jiankan:"别无病呻吟，疑心生暗鬼。",youyi:"小人特别多，提防异性的假仁假义。",xiongJi:"下下"},{num:"60",qianNum:"六十签",title:"李白醉和番书",beijing:"诗人李白，曾被奸臣杨国忠、高力士所辱，杨国忠曾奚落李白，“你的文章算什么？只配替我磨墨！”高力士附和：“不，磨墨也不够资格，只配脱靴提鞋而已。”后来，番邦派特使来长安，诸多威胁求索，最危险的是，朝中竟无一人可与特使沟通。当时，有人向皇帝推荐李白，惜李白正大醉，皇帝颁召令请他入宫，亲自喂他服食解酒汤。李白醒后，要杨国忠磨墨，高力士背靴，醉眼昏花下，笔似云烟，写了“和番书”，吓得番邦不敢再来犯。",liunian:"无大机会，虽有假像，但不能作准。",shiye:"有小小得意，不宜忘形，要坚守岗位。",caifu:"有些正财，但兼职的收入可能更丰富。",zishen:"人到无求，快活无愁。",jiating:"家宅平安。是是非非，可以不理。",yinyuan:"虽然对方屡次主动示爱，但仍要考验其诚意。",yiju:"但求心之所安，无论去一什么地方，都要保持心境快乐。",mingyu:"勿贪虚荣，勿意气用事。",jiankan:"无大碍，但勿饮过量之酒，免伤肝。",youyi:"暂时不要指望有朋友相帮。",xiongJi:"中平"},{num:"61",qianNum:"六十一签",title:"十二金牌召岳飞",beijing:"宋朝忠良岳飞，大破金兵，眼看就要直捣黄龙，救出徽钦二宗，无奈奸臣秦桧，假传圣旨，擅用十二度金牌召回岳飞，继而以谋反之罪，害死岳飞父子。此签为下下签，暗示在功败垂成的一刻，遭奸人所害。十二度金牌召回岳飞时，百姓扶老携幼送行，悲哀万分。求得此签，要趋吉避凶，首先要修善积福，其次是处处防犯小人，再者更要广结善缘。常常听取别人忠告。",liunian:"有进退两难之象，时运未到，不宜轻举妄动。",shiye:"虽然有很好的大计划，但似是而非，勿勉强而为之。",caifu:"财物易损失，甚至有被骗被盗被劫的可能。",zishen:"应处处设防，众事勿理，勿做中间人。",jiating:"家宅常有争吵。特别在您运滞时，意见更多。",yinyuan:"夫妻感情间，互相猜疑，如有第三者介入，则更坏事。",yiju:"运气未转好之前，千万别搬迁移徙。",mingyu:"名誉受损，并非自己原因，小心别人谋害。",jiankan:"年内极可能有较大病痛，秋冬二季尤其要保重。",youyi:"朋友只能对您精神支持，爱莫能助。",xiongJi:"下下"},{num:"62",qianNum:"六十二签",title:"孔子不仕",beijing:"孔子，圣人也。无论学识、道德、思想，都是万世师表，但是，他的仕途官运都不好，唯将毕生精神都放在教化学生和著书立说的学问工夫中。这支签，是说：一个人的才学，就像一块美玉，应该好好珍惜，收藏在柜中，并不是等待有好的价钱，然后出卖。而是要看机缘，假如遇上有眼光，真正欣赏自己的识货之人，那又是另一回事。怀才不遇的人，又何必常常顾影自怜呢？",liunian:"本身是有大运的，可惜时辰未到。",shiye:"您在未有别人垂青之前，仍宜守旧修身。",caifu:"未到行大财运之年，要开源节流。",zishen:"平安，但不要放纵自己。",jiating:"家宅大吉，您可以助家人成功。",yinyuan:"蜜运不佳，暂且勿须考虑结婚。",yiju:"搬迁后的环境，一定会比现在的好。",mingyu:"不要看低自己，要胸怀大志。",jiankan:"要养精蓄锐，身体健康是未来的资本。",youyi:"勿与品格下贱之人来往。",xiongJi:"中平"},{num:"63",qianNum:"六十三签",title:"颜回乐道安贫",beijing:"颜回，春秋鲁国人，孔子的好学生。世人尊称孔子为“至圣“，也曾有人称颜回为“亚圣”，但后来，大多数都把“亚圣”这名衔尊加于孟子，而改称颜回为“复圣”。这支签，是孔子称赞颜回的话：颜回，真是一个贤人，他乐道安贫，生活在陋巷里，只得一碗饭、一杯水，旁人看见他的环境，都替他担忧，但他却无忧无愁。世人应知道，一个人如能专心于学问修道，是可以忘记贫穷的。",liunian:"今年在平稳中，常有一些好运出现。",shiye:"不宜转行转业，稳守目前，等待发展。",caifu:"财源自来，不必刻意追求。",zishen:"安守本份，最好继续进修自己有兴趣的科目。",jiating:"自足常乐，家宅和谐，今年育男机会高，子女读书聪明。",yinyuan:"终于有人欣赏到您的品格才华了。今年宜婚。",yiju:"无论到任何新环境，对您的运程改变不大。",mingyu:"您虽然不喜欢出风头，但有不少人推崇您。",jiankan:"当您的皮肤、消化有小毛病，最好将饮食清淡一些。",youyi:"不能找到志同道合的知己良朋。",xiongJi:"中吉"},{num:"64",qianNum:"六十四签",title:"孟子反殿师",beijing:"孟之反，春秋鲁国人，官至大夫。有一次鲁国被齐国打败，鲁军争相撤退回城，狂奔之情景，非常狼狈，但孟之反却坚持要做殿后将军，当他最后一个撤入城门时，别人都称赞他勇敢而又肯照顾他人，因为按照常理，败军，谁肯甘愿跑最尾呢？但是，孟之反还有更伟大的情操，他在别人的称颂声中，却很谦虚的说：“我不是勇、敢，只是我的坐骑太累了，怎么样鞭打它也不肯走呢！”孔子曾大赞孟之反的英勇仁义。",liunian:"今年是耕耘年，而不是收成之年。",shiye:"常有小阻碍，但每克服一个困难，前景便更明朗。",caifu:"小开支会较多，但小财不出，大财不入。",zishen:"平安，虽有惊，但无险，放心。",jiating:"家运非常好，是历来最好的一年，喜事重重。",yinyuan:"爱情却时有反覆，间有争吵。",yiju:"留在目前的位置，会安稳一些。",mingyu:"遇有挫折，或者别人不了解自己，算了吧。",jiankan:"放松自己，神经勿太紧张，不要给自己压力。",youyi:"朋友多，但不能助己，反而您可助人。",xiongJi:"中吉"},{num:"65",qianNum:"六十五签",title:"胭脂井藏妃",beijing:"这是一个哀怨缠绵的历史故事。记述风流亡帝陈后主，好色昏庸，终日迷恋于张贵妃和孔贵妃，不理朝政，后来，隋高祖起兵讨伐，陈后主的江山，就在剑戈中倒台了。陈后主左拥右抱着两名宠妃，东奔西跑，苦无逃生之路，唯有藏进胭脂井中，隋兵赶至后宫，发现他们的踪迹，用绳吊他们上来。此为下下签，凶险多多，要及早防范，不要沉迷酒色，胡天胡地，否则，灾祸速至，后悔莫及。",liunian:"天时不好，运程凶多吉少，要及早提防。",shiye:"凡事要亲力亲为，小心女性小人及美人计。",caifu:"如能破财挡灾，已属不幸中之大幸。",zishen:"危机四伏，与其处处提心吊胆，不如洁身自律。",jiating:"家运走下坡，切勿有婚外情。",yinyuan:"提防无故献殷勤的异性朋友。",yiju:"如果您发觉目前环境不利，速速搬迁。",mingyu:"贪图享乐和浮名，会令您泥足深陷。",jiankan:"旧日的病患，有恶化可能，切戒酒色。",youyi:"最好勿与异性朋友来往太密。",xiongJi:"下下"},{num:"66",qianNum:"六十六签",title:"羲之会群贤",beijing:"王羲之，书法家，他的字帖，为历代朝野收藏的至宝，很多皇帝甚至用王羲之的字作为陪葬品。后人尊他为“书圣”。《兰亭序》更是王羲之最著名最成功的书法，卷上有多位皇帝加盖玺印。《兰亭序》记述王羲之，在三月三日与一众好友在会稽山之兰亭，欢聚的情景。在短短的二十八字签语中，已写出一幅有音有色的图画。求得此签，百事吉祥，快活顺景。",liunian:"大吉，好运即将来临。",shiye:"天时地利人和俱备，春末夏初即有大转机。",caifu:"财源滚滚，来自四面八方。",zishen:"平安，贵人特别多，随心所欲。",jiating:"家居安宁，夫妻恩爱，如家中有人学习音乐更佳。",yinyuan:"遇上乐天而和善的人，可定终身。",yiju:"移民或移居，都会有很好的邻居。",mingyu:"扬名四方，在社会上受人尊敬。",jiankan:"心情舒畅，百病难侵。",youyi:"相识满天下，知己亦不少，多找机会与新知旧朋乐聚。",xiongJi:"上吉"},{num:"67",qianNum:"六十七签",title:"李元霸称雄",beijing:"李元霸，隋唐时的第一号风云人物，年少力勇，武功盖世，为唐朝的建立，打下基础。可惜，英雄寿短，牺牲沙场。此签有提醒凡事不可锋芒毕露，搏得太尽，容易残。签语云：李元霸这人，虽然能力不可挡，但是，不要自恃年少气盛，到处耀武扬威，即使有力拔泰山、翻江倒海的力量，也应该顾及自己的生命。做人不能一味靠恶、靠蛮力。",liunian:"表面无事，但潜伏着危机。",shiye:"不能光凭一股冲劲，凡事要多动脑筋。",caifu:"放弃“大鸡不食细米”的方针，求财宜在小处着眼。",zishen:"要谨言慎行，勿与人争斗。",jiating:"欲求家宅平安，先要收敛自己的脾气。",yinyuan:"情侣间会有大争吵，勿因一时冲动而结婚。",yiju:"转换环境，亦是好事，要与邻舍和睦共处。",mingyu:"不要强出风头，做了事，勿贪功。",jiankan:"出入小心，提防意外，令四肢受损。",youyi:"待人要和蔼、诚恳，否则知己难求。",xiongJi:"中平"},{num:"68",qianNum:"六十八签",title:"姜公遇文王",beijing:"姜太公，怀才不遇，只有在山水间寄托自己的凌云大志。他在渭水钓鱼，荷枝作著名的古语——“姜太公钓鱼，愿者上钩”。当时，纣王无道，群雄并举，周文王不、远千里而来，到渭水之滨寻访隐居的姜太公，终于，姜太公协助周文王、周武王，打败了纣王，建立周朝帝业。此签虽为中吉，但寓意吉祥，求得者，只要能顺应天、时，立心良善，必然万事如意。",liunian:"运程开始转好，渐入佳境，有苦尽甘来之象。",shiye:"有大贵人提拔，多年的心愿，可望实现。",caifu:"求财顺意，但不可太贪，戒铺张浪费。",zishen:"平安，立心善良，天从人愿。",jiating:"家宅和睦愉快，有添丁之喜。",yinyuan:"爱情坚固，如鱼得水，最好在今年结婚。",yiju:"无论是移民外国或置业迁居，都有很大机会。",mingyu:"多年来的努力，可望有出人头地之日。",jiankan:"并无什么大问题，但要注意劳逸结合。",youyi:"很多有名望之士要结识您，但不要忘记际遇比您差的人。",xiongJi:"中吉"},{num:"69",qianNum:"六十九签",title:"韩文公祭鳄鱼",beijing:"韩愈，虽因直言而被皇帝贬官潮州，但因文、德、政各方面都有很大的贡献，后被尊为文公。韩文公在潮州为官，勤政廉洁，为国为民，当时潮洲沿海一带常有鳄鱼、出没，威胁人畜的生命，韩愈写了一篇“祭鳄鱼文”，虔诚祭之，并限日鳄鱼迁徙，结果，奇迹出现，从此不再见有鳄鱼出现。求得此签者，凡事心诚志坚，定可逢、凶化吉——韩文公在潮州为官十年，心存忠义，令当地人民安居乐业，诚心祷告之后，连恶毒的鳄鱼也平息。",liunian:"天时好，如果心地好，则运气更好。",shiye:"谋事顺利，可转换更具挑战性的工作或行业。",caifu:"财运非常好，正财顺利，亦有小偏财。",zishen:"多祈神作福，凡事尽心尽力。",jiating:"在好景之年，别忘了多些时间在家中。",yinyuan:"经过多时的互相了解，终于被对方诚意感动，宜结婚。",yiju:"不要主动找门路移民。命中有时，工作上会带来机会。",mingyu:"多年的服务，会获得回报。",jiankan:"多作运动，游泳钓鱼都对您有益。",youyi:"以诚以真待人，朋友满天下。",xiongJi:"中吉"},{num:"70",qianNum:"七十签",title:"塞翁失马",beijing:"古时，边塞地区有一老翁，失一马，他泰然处之，后来，马回来了，还带着一匹小马。塞翁之子，骑这小马时，不慎跌断足，塞翁亦泰然处之，不久，村内所有壮丁都被征往修筑长城，而塞翁之子得以免役而保存性命。这支签，暗喻事情仍有反覆，坏事可以转化成为好事，而好事亦会转化成坏事，但是，我们只能像当年的塞翁一样，暂且接受现实，不管是祸是福，都要处之泰然，善恶到头，是会有结果的。",liunian:"运程有多次反覆，暂且的得失，别介意。",shiye:"不宜过份大展拳脚。稳扎稳打好了。",caifu:"财来自有方，但亦有不少散财机会。",zishen:"似乎有小风险，要稳守宗旨，以不变应万变。",jiating:"家中会有小磨擦，家属会有病痛。",yinyuan:"离合聚散无常，未完全了解对方之前，别谈婚论嫁。",yiju:"前途难料，去留但求心之所安。",mingyu:"多做善事公德，但切戒沽名钓誉。",jiankan:"常有小病痛疾患，不必紧张。",youyi:"也许你也需要朋友帮助，但要先帮助朋友。",xiongJi:"中平"},{num:"71",qianNum:"七十一签",title:"庄周活鲋鱼",beijing:"天时不好、地利又差，必须忍耐，及争取人和。",liunian:"凡事不可凭自己主观愿望去做，还是当“上班一族”算了。",shiye:"除春秋两季可求小财外，其余日子财运很滞。",caifu:"年内有官非，是非缠身，要多检点自己。",zishen:"年内有官非，是非缠身，要多检点自己。",jiating:"家运滞，多作福，注意家居安全。",yinyuan:"大运未转好之前，谈婚论嫁，更添麻烦。",yiju:"如果有条件，最宜移民。否则也要考虑改善目前环境。",mingyu:"并非求名出头之时，要保持谦厚。",jiankan:"多食水果蔬菜，多饮水。怀孕者要小心。",youyi:"广结善缘，必须以诚待人。",xiongJi:"中平"},{num:"72",qianNum:"七十二签",title:"宋人守株待兔",beijing:"宋国有一农夫，偶然遇一野兔奔跑，撞倒在树头，于是捡回家，宰来食，从此，每天不去耕种，只坐在树头，等待下一只兔子的光临。也有用此来形容像高文定这样、抱残守缺的人。签文说：花这么长时间去等待兔子，又何苦来由呢？这个守株待兔的愚人，真是可怜。他的低能，实在令人好笑，做人为什么这样守旧而自我拘禁呢？求得此签者，虽无大碍，但短期内亦难望有什么大作为。",liunian:"平稳，难成大事，谋发展要等运转好再考虑。",shiye:"最宜“骑牛拉马”，一面等待转机，一面要做好目前工作。",caifu:"正财平平，勿因些少横财而产生侥幸心理。",zishen:"要克服吊儿郎当、得过且过的心理。",jiating:"家宅平安，家人宜互相关怀。",yinyuan:"对异性要积极点，虽今年未宜成亲，但要为未来打好基础。",yiju:"在未有移民搬迁运时，也要装修一下现在的居所。",mingyu:"损失的原因是来自您自己，而不是别人累您。",jiankan:"困扰您的疾病，再不愈，就要找医生。",youyi:"扩大社交圈子，结识新朋友。",xiongJi:"中平"},{num:"73",qianNum:"七十三签",title:"状元衣锦荣归",beijing:"这是一支春风得意、衣锦荣归的上上签。签语道尽孙霖中状元的喜气洋洋。新科状元骑着骏马，大道两旁的香花，好像在夹道欢迎。昔日的布衣蓝袍，寒窗下苦读的日子，已经成为过去，如今穿上状元锦袍而归，满街漂亮的女孩子，都用倾慕的目光，望着这位芳名题在雁塔的新贵人。求得此签，得偿素愿，吐气扬眉，名成利就，有一个非常美好的开始。",liunian:"万事吉祥如意，天从人愿，好事齐来。",shiye:"工作有极之可喜的业绩，更上一层楼。",caifu:"水到渠成，财源滚滚。",zishen:"平安必发达。",jiating:"家宅运转旺，敬老更能添福，添贵子。",yinyuan:"在众多的追求者中，选择最合意的，在今年结婚最好。",yiju:"人往高处走，有迁新居之喜。最好择高层。移民亦宜。",mingyu:"功名大显，获得众人尊崇。",jiankan:"今年无大病，但为将来着想，要减少酒色应酬。",youyi:"朋友一下子多起来，特别是异性朋友。",xiongJi:"上上"},{num:"74",qianNum:"七十四签",title:"朱买臣分妻",beijing:"朱买臣，汉朝一位读书人，本是贫寒之人，妻子不愿意跟他挨饿一世，提出离婚。后来，朱买臣当了大官，妻子要求复合，朱买臣把一盆水泼在地上，说：“你能把这些水都收回到盆里，我们就复合吧！”这就是“复水难收”的典故了。回忆当年我运滞的时候，夫妻反目，闹离婚。如今我名题雁塔载誉归来，你却又要求重修旧好，你看看，我泼在地上的那盆水，有没有办法收拾，真可惜！",liunian:"天时不利，凡事要作长远考虑。",shiye:"欲无后悔须修己，各有前因莫羡人。",caifu:"欲无后悔须修己，各有前因莫羡人。",zishen:"欲无后悔须修己，各有前因莫羡人。",jiating:"运滞，夫妻、婆媳之间越吵越糟，生个孩子，可调和感情。",yinyuan:"情海易起波涛，爱情有触礁危机。",yiju:"一动不如一静，在目前环境守好再说。",mingyu:"先别急于出风头，安定家庭环境再说。",jiankan:"常有小病缠身，为免小事化大，必须要保持心境开朗。",youyi:"在患难中，才知道真情难求。",xiongJi:"下下"},{num:"75",qianNum:"七十五签",title:"伦文叙戏妻",beijing:"这又是一支贫贱夫妻百事哀的下下签。伦文叙是一介寒生，妻子嫌他穷，改嫁了。当伦文叙中状元后，妻子悔恨交集，被伦文叙奚落了几句，就跳楼身亡了。试看看签语给我们的启示：婚姻是终生大事，岂可因一时贫困而变心呢？伦文叙夫妻，就是这样拆散了，一旦丈夫金榜题名，那时就后悔莫及了。此签险象环生，一是要挨穷；二是夫妻拆散；三是看不开时，还会有更大的不幸。",liunian:"本来并不太坏，宜守旧，勿庸人自扰。",shiye:"目前工作，虽有困难，但守得云开就会见月明。",caifu:"财难得，尽量做到多赚钱，少花费。",zishen:"不贪不谋，不好高骛远，可保平安。",jiating:"夫妻力戒争吵，家和万事兴。家衰祸不停。",yinyuan:"爱情备受考验，切勿以对方经济环境而作出选择。",yiju:"作福修善，做一个无名行善者。",mingyu:"作福修善，做一个无名行善者。",jiankan:"最好与异性朋友保持不冷不热的温度。",youyi:"最好与异性朋友保持不冷不热的温度。",xiongJi:"下下"},{num:"76",qianNum:"七十六签",title:"修身不厌贫",beijing:"这是至圣孔子修身乐道安贫的写照。人，贵于能向往真理正义，不断求学问，修养自己的品格，即使暂且的环境不好，粗茶淡饭，甚至要枕着自己的手臂而眠，我们也不要自暴自弃。对于那些谋取不义之财而成为富贵的人，在我的心里，就只会当作是浮云而已。求得此签者，虽然可能大运未到，但只要坚守原则，站稳岗位，始终是有成正果之日的。",liunian:"一切平稳，既无大凶险，也无大富贵。",shiye:"在平淡的工作，最好能继续进修。",caifu:"明白自己近来的运程，您应该对一切泰然处之。",zishen:"为将来着想，努力修为行善。",jiating:"能克服虚荣心，家中就常有欢乐。",yinyuan:"不是适婚之年，对方的诚意仍须考验。",yiju:"迁居或移民外国，对开运并无太大作用。",mingyu:"不贪不谋，默默耕耘，将有意外收获。",jiankan:"当您身体出现小问题，不妨多吃素。",youyi:"在您身边，有可以互助互勉的朋友。",xiongJi:"中平"},{num:"77",qianNum:"七十七签",title:"公冶长入狱",beijing:"此签虽然有惊无险，但如果轻信人言，则容易惹祸上身，等到有人相救，已经吃了眼前亏了。",liunian:"是非多多，不是谋事之年，凡事宜守旧。",shiye:"最好勿与别人合资搞生意，自己做好本份，已经够了。",caifu:"安守本份，收入尚算固定，绝无偏财命。",zishen:"可能有小官非，谨防得罪别人，遭报复。",jiating:"家运滞，要有心理准备，家中各人要互相体谅。",yinyuan:"有第三者介入，恋情面临考验。",yiju:"移民外国，处境比现在更坏。",mingyu:"清者自清，不必多花唇舌为自己申辩吹嘘。",jiankan:"小病不足为患。但要注意口腔卫生。",youyi:"较难获得别人理解，唯有用行动说明一切。",xiongJi:"中平"},{num:"78",qianNum:"七十八签",title:"曾点论志",beijing:"曾点，春秋时代鲁国人，不但文思敏捷、心地善良，而且随遇而安，很懂得因应时间去做适宜的事。这支签，是曾点向别人说出他最大的愿望——希望和谐的琴声，到处飘扬；在暮春三月，穿上刚刚缝好的单衣，带着五六位年青人、六七位儿童，虔诚地去做完了求雨的祭祀，归家途中，心安理得，放怀唱咏。求得此签，只要心诚心善，事事如意，天从人愿。",liunian:"四季平安，尤其以春末夏初，运势明显转好。",shiye:"不妨把目标一得高远一些，得天时，尽人事，百事可为。",caifu:"既易赚钱，亦易花钱，但仍有收藏。",zishen:"贵人特多，小人难侵，善与人同。",jiating:"家宅乐也融融，年轻一代有喜事，倘情孕，可生男。",yinyuan:"遇有性格开朗乐观的有情人，应主动求婚。",yiju:"移民选择，首要条件是气候与现居地差不多。新居宜向东南。",mingyu:"是名利双收的好时年，多行善。",jiankan:"无忧无虑无病，秋冬防感冒。",youyi:"会结识一些年龄比您轻的新朋友。",xiongJi:"上吉"},{num:"79",qianNum:"七十九签",title:"张良悟道",beijing:"张良，祖先五代为韩国丞相，后秦亡韩，张良结交刺客，在博浪水狙击秦王而未果，逃亡江苏，遇黄石公，得传“太公兵法”，后助刘邦建立汉朝，封“留候”。此签系张良在拜相封候之后，领悟到人生如梦，富贵名利像过眼云烟。富贵，好像春梦一场，世人又何苦费力去追求呢？即使争得到，手托朝笏，站在天子殿下，他日死时，还不是留下一堆黄土？此签有劝人安分守己，凡事不可强求之意。",liunian:"由绚烂归于平淡，当您发觉无大突破时，不妨享受眼前。",shiye:"有一种停滞不前的感觉，切勿逆天意而强求。",caifu:"财散人安乐，赚得多，花得多。",zishen:"安守本份，一切但求心之所安。",jiating:"把多一些时间和心机留给家庭，会觉得日子很写意。",yinyuan:"拍拍散拖，勿要求对方太多。",yiju:"搬家并无新意，计划移民，飞来飞去亦暂无头绪。",mingyu:"不要给自己任何压力，无官，反而一身轻。",jiankan:"乐观一些，要学习自我安慰。",youyi:"很多朋友想帮您，但碍于天意，帮不来。",xiongJi:"中平"},{num:"80",qianNum:"八十签",title:"乐广释疑中",beijing:"这是“杯弓蛇影”的故事。乐广有一天请人吃饭，客人中，有一人疑心很重，居然怀疑杯中的弓影是蛇，饮后归家，闷闷不乐，乐广知道后，再请他来家里，坐在原先的位置，让他弄清楚，酒杯中的蛇，原来只是挂着的弓箭的影子。释疑后，此人才心安理得。一边饮酒一边欣赏歌舞，是多么难得的乐事，无端端却把杯中的弓影误作是蛇，真冤枉！明白此中的道理，就是趋吉避凶。",liunian:"先苦后甜，凡事乐观，好运会提前来。",shiye:"按照自己原来计划去进行，勿受别人左右。",caifu:"财运不错，但要避免花冤枉钱。",zishen:"平安无事，不要疑心生暗鬼，心存善念，可以免灾。",jiating:"夫妻要坦诚相待，切勿互相猜疑。",yinyuan:"情侣之间，要排除第三者干扰，雨过天晴后，宜婚嫁。",yiju:"要迁居就早些决定，运气转好后，就不宜变动。",mingyu:"下半年的收获会更大。",jiankan:"有任何不舒服，最好找个正正式式的医生检察。",youyi:"朋友和洽相处，其中有一个能特别帮您。",xiongJi:"中吉"},{num:"81",qianNum:"八十一签",title:"雌雉朝圣",beijing:"孔子与学生子路，在山边看见一只雌雉，非常机警醒目，在树叶间跳上跳落，快乐地鸣叫着，但它发觉周围有什么异动时，马上飞走，等到确定安全时，再飞回来，在它飞走的时候，连叫三声，消失在山野间。因孔子被尊为“至圣”，这只雌雉在孔子面前歌舞，亦被称为“朝圣”。按照签意，是有一番好景的，但凡事都要知机，间中可能会出现危机时，要知道避忌。",liunian:"大致吉祥，偶有小风波时，要退避，不要对着干。",shiye:"有贵人帮忙，小心从事，可望有成。",caifu:"有较大的正财，但也常有小破财。",zishen:"害人之心不可有，防人之心不可无，特别在快乐得意时。",jiating:"家居安全要小心，谨防盗贼和意外。",yinyuan:"不要轻信情侣的诺言，爱情仍须考虑一段日子。",yiju:"有移民之象，到新环境后要多加小心。",mingyu:"不要贪慕浮名，虚荣背后，潜伏危机。",jiankan:"别小觑伤风咳嗽这些疾病，处理不好，会有些麻烦。",youyi:"邻居或同事，其中有可以成知己的。",xiongJi:"中吉"},{num:"82",qianNum:"八十二签",title:"孔子击磬",beijing:"孔子击磬的故事，告诫我们，要惜取少年时，应该做的，就要及时去做，否则老之将至，有心无力了。圣人孔子，在卫国击磬的时候，门外有人担着竹篑路过，在磬声中，听出孔子是有志做一番救世救民的事业心，可惜，时不我与，岁月就这样逝去了。求得此签者，凡事以善良和顺为贵，不要以为善事太小而不去做，也不要以为恶事太小而去做。做人，要把握今天，珍惜今天。",liunian:"天时对自己不利，虽无大碍，但难成大事。",shiye:"脚踏实地，尽快将手上的工作做好，勿作不着边际的构想。",caifu:"微中取利，太大的投资，风险大，要审慎。",zishen:"如果人生如赌博，今年只有四成赢面。",jiating:"家居平淡，敬重老人家，会添福。",yinyuan:"爱情一波三折，双方都缺乏信心。",yiju:"要移民，就趁早进行，祸福未知，要对自己的选择负责。",mingyu:"难有扬名立功的机会。",jiankan:"身上的病痛，恐怕还要延续一段日子，最好换一个医生。",youyi:"小人多，背后也有不少在非议您，但可以不理。",xiongJi:"中平"},{num:"83",qianNum:"八十三签",title:"赤松子招隐",beijing:"这支签，是神仙赤松子劝人归隐的意思。他说：“寄身在凡尘间，真不知道什么时候才得清闲。世事浑浑噩噩，堆积如山，无钱的望发达，有钱的又担心子女不成材。辛苦钻营中，不知不觉花开又花落了。”世事如轮转，功名利禄的追求，永无止境，何不随遇而安，把得失荣辱都置诸度外，凡事但求心之所安，要做生命的主人，不做生命的奴隶。一个人，能看化，能知足，就乐在其中了。",liunian:"一切平淡，勿担心，亦勿贪心。",shiye:"事在人为，在实际工作中会获得可行的灵感。",caifu:"财运普通，大财机会微，无横财。",zishen:"少说话，多做公益事。",jiating:"家中本已平稳，不把主观愿望强加别人头上，将更和谐。",yinyuan:"选择异性朋友，要踏实，外表并不重要。",yiju:"来来去去，对于大运绝无好与坏的影响。",mingyu:"不要做中间人，否则名誉有损。",jiankan:"天掉下来当被盖，要克服情绪紧张。",youyi:"与他人分享，多接受朋友意见。",xiongJi:"中平"},{num:"84",qianNum:"八十四签",title:"韩信弃楚归汉",beijing:"韩信，汉时的一名将，辅助刘邦建立汉家江山。这支签，记述韩信在张良指引，离开楚霸王项羽，投靠刘邦。满腹奇才的韩信，冲霄之志未能得偿所愿，在楚王军中，曾被项羽指令试举一只铁铸公鸡而未成功，自尊心受挫。后来，幸得张良指引，投靠刘邦，终于打败项羽，使他乌江自刎，吐了一口屈气。求得此签，今年会有转机，宜好自把握，切勿自暴自弃。",liunian:"上半年平淡，下半年有贵人指点，运转好。",shiye:"天生我才必有用，平生所学，有机会在工作中显露才华。",caifu:"正财运不错，也有偏财运，兼职收入可观。",zishen:"运未到时，勿灰心丧志，做人要有始有终。",jiating:"家宅平安，子女很听话。",yinyuan:"对方正在发现您的才华和品德，不必自吹。",yiju:"新环境肯定比现在好，设法搬迁或改改风水。",mingyu:"辛苦多年，终于有出头之日了。",jiankan:"凡事量力而为，不要操劳过度。",youyi:"新相识的朋友在不知不觉中帮了您一个大忙。",xiongJi:"中吉"},{num:"85",qianNum:"八十五签",title:"太乙燃藜",beijing:"刘向，汉室皇胄，因劝谏曾下狱，狱中坚持苦读，后获平反，出人头地。太乙，天神中最尊贵者。太乙神仙燃藜作灯照明刘向，是有大贵人相助，天时尽得之吉祥寓意，是一支很好的签。求得者假如能把握良机，未来数年必定有一番成就。签意是：太乙神仙燃藜为灯，照我读书，十年寒窗下的辛苦用功，终于是舒一口的时候了。看我身穿锦袍，扬眉吐气，坐着四匹马拉的高车，前呼后拥，多快乐。",liunian:"大旺发，有苦尽甘来，扬眉吐气之吉兆。",shiye:"从此平步青云逐步开拓未来的大业。",caifu:"财运渐入佳境，但未到最盛时，切勿太贪。",zishen:"戒骄戒躁，最忌得势不饶人。",jiating:"大吉大利，光彩门户，最好替双亲大事祝寿。",yinyuan:"最好能赶及今年结婚，年尾产子或今年怀孕，运势更好。",yiju:"可以移民，但留在本地发展的机会更多。",mingyu:"名成，最宜担任社团领袖。",jiankan:"身体转弱为强，乘机培补基础。",youyi:"在众多的朋友中，有人真心真意为您。",xiongJi:"上吉"},{num:"86",qianNum:"八十六签",title:"侃母迎宾",beijing:"陶侃，晋代一位德才兼备的大官，初为县吏，因表现出色，后逐步升迁，官至征西大将军，荆江两州刺史，统领八州军事。为官四十年如一日，不贪不饮不赌，从不浪费一纸一木。这支签是讲述陶侃年少时家贫，无钱迎迓宾客，陶母非常贤淑，毅然剪下自己的长发，拿去变卖。这样的贤妇，古今只得陶母一个，是值得万世景仰的。求得此签，他日或者有好环境，但目前就要设法守一段日子了。",liunian:"虽然未到大运时，但处处露出生机曙光。",shiye:"事在人为，在克服困难中，您对将来充满信心。",caifu:"正财可通过勤俭积聚。无偏财横财。",zishen:"心存正气，抗拒诱惑，苦尽甘来。",jiating:"家中并不因环境而不安，要感谢辛劳的女眷。",yinyuan:"婚姻美满，但勿攀附富贵人家。",yiju:"家中有人出外读书、谋生，正合此签。",mingyu:"检点一言一行，将会赢得别人的敬重。",jiankan:"无大碍，家中有孕妇，生女最佳。",youyi:"与朋友保持“君子之交淡如水”，勿结交酒肉朋友。",xiongJi:"中平"},{num:"87",qianNum:"八十七签",title:"荀陆座谈",beijing:"荀鸣鹤与陆士龙，都是西晋时代的有为之士，各有抱负，各有著作，有一天，两雄相遇，坐在一起，各抒己见，雄辩滔滔，无法分出高下。此签有口舌是非之象，凡事切忌“口水多过茶”。签意是：在会谈中，各逞英雄，究竟哪一位的观点最正确呢？难以定论。有人说：荀鸣鹤有道理；也有人说：陆士龙辩赢了。虽然无伤大雅，但与人争执，费时失事伤感情。",liunian:"平稳中，常有逆流，勿与之争锋，避之则吉。",shiye:"工作有反覆，要学习应付闲言闲语。",caifu:"求财较难，明白和气生财，收入会改善。",zishen:"口舌是非，切戒。",jiating:"家和万事兴，勿受外人挑拨离间。",yinyuan:"首先要互相迁就、适应，才有机会结合。",yiju:"不利移民迁居。",mingyu:"贱力得人敬，贱口得人憎。",jiankan:"少言养气，清心明志，才是养生之道。",youyi:"多年的朋友，可能因意见不合而分手。",xiongJi:"中平"},{num:"88",qianNum:"八十八签",title:"花木兰从军",beijing:"花木兰，古时一位奇女子，因代父从军而成为巾帼英雄。求得此签，可从中省悟两个道理：一是尽孝心，二是尽忠心。替父从军，胆色过人，女人能有男人勇，世上有几人？以身报国，既忠且孝，当时很多大男人都自叹不如呢！凡事尽忠孝之心，定能逢凶化吉，无论有什么艰难困阻，都可以安然度过的。此签暗示，努力坚决下去，终会出人头地的。",liunian:"运程逐渐明朗，有苦尽甘来的迹象。",shiye:"可承父业，并能发扬光大，将获得上司赞赏。",caifu:"每一个钱都由辛勤中得来，莫指望有横财。",zishen:"立心善良，无往而不利。",jiating:"家中和睦促使运开，当敬重父母。",yinyuan:"有良缘，嫁娶可选在秋后。",yiju:"移民最好往北方发展，搬迁宜与老人同住。",mingyu:"在英勇中，建立新形象，功名显露。",jiankan:"积极运动，可使性格改观。",youyi:"在患难中建立的友谊，今年可分享成果。",xiongJi:"中吉"},{num:"89",qianNum:"八十九签",title:"吴季子挂剑",beijing:"吴季子，吴王寿梦之末子，聪明博学，吴王拟废长立幼，传位于他，但他坚拒，后周游列国，以见闻广博著称。吴季子游历到徐国时，徐君很喜欢季子的鱼肠剑，季子答应他，游罢归来，就将宝剑送给他。不料他日归来，徐君已逝，季子只得把鱼肠剑挂在徐君坟前的大树下，以表达自己的长情和哀思。此签为下下，求得者，要小心趋避，凡事要谨慎，不可任意妄为。如果以此签问自身者，今年内暂勿往探病吊丧。",liunian:"不利，有风险，小心人、财的损失。",shiye:"勿考虑新发展，只宜稳守目前的工作。",caifu:"能保持目前的经济状况，已属万幸。",zishen:"时运太差，事事辛苦，莫偷懒。",jiating:"各人宜检点自己的言行，多关心家中老人。",yinyuan:"已婚者或未婚者，都要及时修补感情篱笆。",yiju:"移民或迁居，都要预算有经济上的损失。",mingyu:"修善，守信，有名与否，都不要计较。",jiankan:"体质较弱，易失眠多梦。注意肠胃调理。",youyi:"小心择友，以免被损友所累。",xiongJi:"下下"},{num:"90",qianNum:"九十签",title:"红拂女私奔",beijing:"红拂女、李靖、虬髯客，三人之间的微妙关系，藉此签提醒我们，凡事要忍让，不可鲁莽行事。杨府歌妓红拂女与李靖有情，两人正准备漏夜私奔，偏偏虬髯客在这时出现，虬髯客与红佛女以兄妹相称，倾谈中，李靖误会虬髯客调戏她，阻碍他俩的私奔，三次拔剑要斩虬髯客，都被红佛女阻止，彼此明白意向时，在虬髯客帮助下，三人一齐逃出杨府，结成“风尘三侠”，共同闯荡江湖。",liunian:"平淡中常有小喜，但大运未是时候。",shiye:"宜与别人合作，合资创业也无妨。",caifu:"无大财运，切忌与人有银钱纠纷，公私分明。",zishen:"切勿因一时冲动而决定进退。",jiating:"情况普通，亲人之间不要互相猜忌。",yinyuan:"有第三者介入，您可能遇竞争对手。",yiju:"缺乏长计划的移迁，不敢恭维。",mingyu:"避免桃色事件，否则身败名裂。",jiankan:"精神疲倦，就要多运动，连运动也不愿做，就要看医生。",youyi:"有异性贵人相助，但切勿与之发展感情。",xiongJi:"中平"},{num:"91",qianNum:"九十一签",title:"月里嫦娥",beijing:"嫦娥，后羿之妻，服了灵丹之后，飞升上天，成为“月中仙子”。此签是说嫦娥在月宫无忧无虑的神仙生活。在蟾宫月殿中，桂花常飘香。一轮圆月，像玉箧，照得万里银光。人间的六水三山，都在月色下展现无遗，白譬无暇的一片圣洁，高高悬挂在青天。求得此上上签，高贵神圣，万事皆圆满，前途光明。",liunian:"运程较过去任何时间，都明显转好。",shiye:"您原来较为保守的计划，会有意想不到的突破。",caifu:"财源多，财路广，财来自有方。",zishen:"平安，常有赏心乐事。",jiating:"家运昌盛，特别旺女眷。",yinyuan:"男追女，要多花心思。女追男，较顺利。婚事宜在秋后。",yiju:"无论移民或迁居，东南西北皆宜。",mingyu:"要摒除高高在上的架子，多接近下属。",jiankan:"清淡的饮食，令您身轻、脑活、容颜美。",youyi:"当您接触较高层次的社交圈子时，别忘了昔日患难知己。",xiongJi:"上上"},{num:"92",qianNum:"九十二签",title:"在齐闻韶乐",beijing:"至圣孔子，在齐国听到韶乐，令他心神陶醉，历三个月之久，每餐饭中，竟不知肉是什么味道，专心致志去研究韶乐的制作，所谓废寝忘餐，终于大功告成。签诗的含意，简明易懂，但其中道理，就要求得此签的人，慢慢去领悟了。大致上，有吉无凶，但是，吉祥的程度有多大，与个人的努力有密切关系，如果，明知前面有个大金桔，也懒得去摘，那就如入宝山空手回了。",liunian:"具备一切旺发的条件，天时地利已有，就等人去努力了。",shiye:"宜发展新业务，也可趁春天转换工作环境。",caifu:"有财，但财来得较慢，勿作短线投资投机。",zishen:"平平稳稳，既无小人，贵人亦不直接帮您，要靠自己。",jiating:"常有快乐事。宜多在家中与亲友欢聚。",yinyuan:"经历过相当时间的了解，是结合的年份了。",yiju:"移民运颇旺，可以积极进行。",mingyu:"人们不是尊敬您的名利，而是佩服您的才能。",jiankan:"要注意作息时间的安排，提防消化道出毛病。",youyi:"有志同道合的朋友相随。",xiongJi:"中吉"},{num:"93",qianNum:"九十三签",title:"孔子闻郑卫之音",beijing:"郑国、卫国之音，超离正途，萎靡不振，主题不健康，用今日的标准，就是黄色下流了。孔子闻之，痛斥其非，后来，郑、卫终于因文化堕落亡国，这些音乐，也可算是亡国之音了。签云：郑、卫的音乐，真难听！既诲淫，又伤风败俗，迟早会令国家倾亡的。因为，它所奏的，全非正经音乐，听多了，会消磨壮志，误入迷途的。求得此签，有所警惕，是可以趋吉避凶的。",liunian:"外界的环境不大好，凡事要小心，小心驶得万年船。",shiye:"工作、生意、学业都要规行矩步，不可贪快。",caifu:"正财大致上与去年无大改变，切戒赌博贪婪。",zishen:"要把握自己的宗旨，勿受小人唆摆诱惑。",jiating:"远离三姑六婆，提防年青一代误入歧途。要关心他们。",yinyuan:"选择物件，要勤奋务实善良为宜。",yiju:"无论出国的目的是移民或公干、旅行，要戒酒色。",mingyu:"在平凡中，您会感到一份安全。",jiankan:"如将听音乐、看电视的时间，去打球、缓跑，明天会更好。",youyi:"小心口甜舌滑的异性。",xiongJi:"下下"},{num:"94",qianNum:"九十四签",title:"髯公远走扶余",beijing:"虬髯客是个看化一切的世外高人，本来他也喜欢红拂女，但却与她结谊兄妹，把机会让给李靖，三个行侠仗义，共反暴隋。后来，风尘三侠见李世民后，虬髯客洞悉、天机，说此人乃真命天子，一山不能藏二虎，于是，与李靖、红拂女话别，独自乘船投奔怒海，远走扶桑国，自为山寨王。正所谓，一山难藏二虎，倒不如知机另觅山头栖身，各有各的环境，这样可以避免两虎相斗必有一伤的命运了。",liunian:"虽然不太好，但能知机是可以逆流而上的。",shiye:"别只管埋头苦干，多留意外界，寻求突破，另觅新发展。",caifu:"先破点小财，再改善收入。",zishen:"切忌争讼，远离小人，要尽力保护自己。",jiating:"绝不容许第三者介入，否则无幸福可言。",yinyuan:"爱情有阻滞，宁愿退避，也莫与之争风呷醋。",yiju:"当您发觉目前环境不开心，应即考虑移徙。",mingyu:"不要逞英雄，留得青山在，不怕无柴烧。",jiankan:"忧能伤人，要改变多愁善感的作风。",youyi:"多忍让，互相尊重，彼此分享。",xiongJi:"中平"},{num:"95",qianNum:"九十五签",title:"女娲炼石补天",beijing:"太古之时，青天穿了个大洞，女娲不辞劳苦，炼石为浆，用以补天，历尽艰辛，终于有成。此签有劝人将勤补拙之意：别看轻这一捧一捧的泥土，堆积在一起，就可以成为一座山了。凡事都是由少而多，不要怕麻烦，做事怕辛苦，会令您一事无成。不信？您看看，女娲炼石补天的例子，又有什么“难”字可言呢？求得此签，宜在平稳中勤奋工作，创造未来。",liunian:"可能有一次较大变动，只要勤力做事，可安然过度。",shiye:"谋事遇上不少阻力，但不可中途改变原来计划。",caifu:"别染指急功近利行业，要节俭积蓄。",zishen:"择善固执，我行我素，这是自保基本法。",jiating:"勤补拙，俭养廉，日子过得清雅心安。",yinyuan:"爱情路，还有一段较长的在前面，要考虑对方的心意。",yiju:"可以考虑，但新环境的开拓，较为艰辛。",mingyu:"您将会以实干少言的形象傲视同群。",jiankan:"多作体力劳动，业余常活动，有益身心。",youyi:"要远离口惠而实不至的假朋友。",xiongJi:"中平"},{num:"96",qianNum:"九十六签",title:"游子思家",beijing:"蔡文姬，东汉人，为匈奴乱兵所掠，嫁与左贤王，十二年后才归汉家。这是一个悲凉的意境，在秋冬两季求得此签者，要特别小心。如果在春夏时分求得，则及早趋吉避凶。羌笛在塞外频吹，曲调更令人伤感。它使异乡的游子，醒悟起归家的日子，遥遥无期。南来的孤雁，假若同情我，请常常替我传递家书给故乡的亲人。于此环境，首先要自我珍重，保存实力，等待运转的一日。",liunian:"阻滞甚多，与其冒险，不如稳守待变。",shiye:"勿胡乱投资，否则泥足深陷，何时望见故乡？",caifu:"财运未通，打工比当老板的日子好过。",zishen:"心中常有事情挂牵，宜自我开解，眼光放远一些。",jiating:"家人有分离之象，切勿争执，以免家运更差。",yinyuan:"爱情面临考验，暂不宜考虑结婚。",yiju:"若有移徙，往东南比往西北为佳。",mingyu:"难有扬名机会，不如踏实做好目前工作。",jiankan:"秋后身体易出毛病，注意心肺气管。",youyi:"身边朋友较少，反而有较多机会与远方亲友通信。",xiongJi:"中平"},{num:"97",qianNum:"九十七签",title:"康顺钓鱼",beijing:"康顺，古时一隐士。这支签中虽然并无凶险，但亦只空有良辰美景，钓鱼不得其法，有无收获，还是个未知数。倚着向南楼台的栏杆，满目的风光景色幽雅，水面上，有一叶小舟，只见康顺作渔翁打扮，频频下钓，至于有没有鱼获，那就不得而知了。求得此签者，要看看自己的年龄，年老者，姑且逍遥度日，但求心之所安，年青者，那就要好好把握时机了。",liunian:"平稳中仍有些机会，特别在春秋两季。",shiye:"完全靠自己，既可以浑浑噩噩又一年，也可以设法多争取。",caifu:"大财较难求，但正路小财，时常都有机会。",zishen:"大致平安，要好好照顾自己。",jiating:"温馨祥和，家庭不给您压力，但您要好好爱惜家人。",yinyuan:"夫妻的小磨擦无碍感情，但情侣的争吵却导致分手。",yiju:"换换新环境，生活得更写意。新居取向南。",mingyu:"别指望有什么浮名，勿与人争锋。",jiankan:"小病痛如伤风、过敏等症，多反复。",youyi:"结交一些较清闲的朋友，他们更会冲淡您的事业心。",xiongJi:"中平"},{num:"98",qianNum:"九十八签",title:"管鲍分金",beijing:"春秋，齐国有两位患难知己，他们就是管仲与鲍叔牙，即使贫困中，他们也视钱财如粪土。后人以“管鲍之交”来称誉真正朋友。此签以管鲍分金，来劝喻世人不要因利忘义。签云：自私的人，入山采玉，又嫌自己的田地狭窄；掘地寻金，又厌寻金客多会分薄自己。唉！其实，我们应该学管子与鲍子，明白富贵贫穷一早就天注定，世人何苦为财而奔波呢？求得此签，要守义修善果，不要做金钱的奴隶。",liunian:"知足者，今年清闲安乐；不知足者，强求又何益？",shiye:"安稳，凡事尽力，莫太计较得失。",caifu:"别太刻意追求金钱，今年财运是去年的延续，变化不大。",zishen:"勿斤斤计较，要大事化小，小事化无。",jiating:"当没有利益冲突时，会更和谐。",yinyuan:"可能发觉对方并不太合适您，别急，再花些时间互相适应。",yiju:"一来一往，费时失事，暂且留在旧境吧。",mingyu:"多做公益，勿沽名钓誉。",jiankan:"凡事看化，身体平安。",youyi:"有好知己与您分享快乐，分担忧愁。",xiongJi:"中平"},{num:"99",qianNum:"九十九签",title:"韩文公遇雪",beijing:"八仙之一的韩湘子，是韩愈的侄孙，他曾在初冬施法，令牡丹开花，而每朵花有一字，合起来就是“云横秦岭家何在，雪拥篮关马不前”，韩愈不解其意，不久后，因谏迎佛骨，惹怒皇上，贬谪潮州刺史，途中遇上风雪，马不前，船夫亦不开船，后韩湘子赶来相送，韩愈始明白韩湘子的预言。此签有叹息时运不佳之意——落花流水谁人同情，唯有靠自己立志坚定而已。后来韩愈在潮州政绩伟然，被谥为“文公”。",liunian:"春夏秋当算平稳，冬天要提防运势急转直下。",shiye:"工作要审慎，上司与同事，都不能得罪。",caifu:"财运欠佳，投资要小心，秋后要知机收手。",zishen:"小人多多，戒多言，提防官非。",jiating:"夫妻有小磨擦，但无伤大雅，要孝敬老人。",yinyuan:"感情有阻滞，婚事过了冬天再考虑。",yiju:"迁往北方较为合适，往南方困难较大。",mingyu:"易被人误会，做事要有始有终，用事实来解释一切。",jiankan:"有小病也应速见医生，有体魄才能应付今年的变化。",youyi:"经得起考验的朋友，助您度过难关。",xiongJi:"中平"},{num:"100",qianNum:"一百签",title:"唐明皇赏花",beijing:"黄大仙灵签一百枝，这是最末一枝，虽为中吉，但有“宝物沉归底”之意，又有否极泰来、面临另一个回圈之象，求得者，苦尽甘来，运势转弱为强，处处显现生机。古人为唐明皇赏花：太平盛世，百花争妍斗丽，庆贺新春，万物从此又送旧迎新。别以为开得最尾、赏得最尾的那朵花就最差，应该明白，凡事到了尽头，就是新的开始了，这就是周而复始、否极泰来的道理了。求得此签，必有一番新景象。",liunian:"由难变易，由旧变新，由弱变强，渐露曙光。",shiye:"工作越投入，转运越快，局势转定，即可多方面发展。",caifu:"由平凡走向富有，天天有新环境。",zishen:"由俭入奢，力戒趾高气扬。",jiating:"年内有多件好事，夫妻、亲子之间感情融洽。",yinyuan:"那位曾经与您共患难的人，也可以与您共富贵。",yiju:"虽有移民运，但未是最佳时，反而可考虑迁居。",mingyu:"保持谦厚，您会更加得人喜欢和敬重。",jiankan:"体质转强，病痛即除，但要注意多休息。",youyi:"旧朋新知，常常增添您工作和生活的愉快。",xiongJi:"中吉"}],qt=Hd.map(n=>({...n,num:Number(n.num)})).sort((n,e)=>n.num-e.num);function qd(n){return qt.find(e=>e.num===n)}function Ou(n=Math.random){const e=Math.floor(n()*qt.length)%qt.length;return qt[e]}const Qd=[{key:"liunian",label:"流年运势"},{key:"shiye",label:"事业"},{key:"caifu",label:"财运"},{key:"zishen",label:"自身"},{key:"jiating",label:"家庭"},{key:"yinyuan",label:"姻缘"},{key:"yiju",label:"置业"},{key:"mingyu",label:"名誉学业"},{key:"jiankan",label:"健康"},{key:"youyi",label:"人际"}];function Yd(){const[n,e]=C.useState(()=>Ou()),[t,i]=C.useState(""),l=()=>{const s=Number(t.trim());if(!Number.isFinite(s))return;const a=qd(s);a&&e(a)};return r.jsxs("div",{className:"grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]",children:[r.jsxs(dn,{className:"card-body",children:[r.jsxs(ln,{extra:r.jsxs("button",{type:"button",className:"btn-primary text-xs",onClick:()=>e(Ou()),children:[r.jsx(V,{name:"refresh",className:"h-4 w-4"}),"抽一签"]}),children:["第 ",n.qianNum," · ",n.title]}),r.jsxs("div",{className:"mb-4 flex flex-wrap items-center gap-2",children:[r.jsxs("span",{className:"chip-accent",children:["吉凶：",n.xiongJi]}),r.jsxs("span",{className:"chip",children:["签号 ",n.num]})]}),r.jsxs("div",{className:"rounded-xl border border-line bg-paper p-4",children:[r.jsx("p",{className:"mb-2 text-xs font-semibold text-accent",children:"签诗"}),r.jsx("p",{className:"whitespace-pre-wrap font-serif text-[15px] leading-relaxed text-ink/90",children:n.beijing})]}),r.jsx("div",{className:"mt-4 grid gap-3 sm:grid-cols-2",children:Qd.map(s=>r.jsxs("div",{className:"rounded-xl border border-line p-3",children:[r.jsx("p",{className:"mb-1 text-xs font-semibold text-gold",children:s.label}),r.jsx("p",{className:"text-[13px] leading-relaxed text-ink/85",children:String(n[s.key]??"—")})]},s.key))})]}),r.jsxs("div",{className:"space-y-4",children:[r.jsxs(dn,{className:"card-body",children:[r.jsx(ln,{children:"按签号查找"}),r.jsxs("div",{className:"flex gap-2",children:[r.jsx("input",{className:"field",type:"number",min:1,max:100,placeholder:"输入 1 - 100",value:t,onChange:s=>i(s.target.value),onKeyDown:s=>{s.key==="Enter"&&l()}}),r.jsx("button",{type:"button",className:"btn",onClick:l,children:r.jsx(V,{name:"search",className:"h-4 w-4"})})]})]}),r.jsxs(dn,{className:"card-body",children:[r.jsx(ln,{children:"全部灵签"}),r.jsx("div",{className:"grid max-h-[26rem] grid-cols-5 gap-1.5 overflow-y-auto",children:qt.map(s=>r.jsx("button",{type:"button",className:`rounded-lg px-1 py-1.5 text-xs transition ${s.num===n.num?"bg-accent text-white":"bg-paper hover:bg-accent-soft hover:text-accent"}`,onClick:()=>e(s),title:s.title,children:s.num},s.num))})]})]})]})}const Kd=1900,Gd=2100;function Xd(n){return{year:n.getFullYear(),month:n.getMonth()+1,day:n.getDate()}}function Fu(n,e){return new Date(n,e,0).getDate()}function Zd(n,e=new Date){const t=Xd(e);if(n.calendar==="solar"){const o=/^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(n.date.trim());if(!o)return null;const c=Number(o[1]),f=Number(o[2]),g=Number(o[3]);if(f<1||f>12)return null;let x=t.year,m=Math.min(g,Fu(x,f));return Gi(t.year,t.month,t.day,x,f,m)<0&&(x+=1,m=Math.min(g,Fu(x,f))),{date:{year:x,month:f,day:m},daysLeft:Gi(t.year,t.month,t.day,x,f,m),years:x-c,isLeapBirthday:!1}}const i=/^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(n.date.trim());if(!i)return null;const l=Number(i[1]),s=Number(i[2]),a=Number(i[3]);if(s<1||s>12)return null;let u=0;try{u=dr(t.year,t.month,t.day).year}catch{return null}for(let o=0;o<3;o+=1){const c=u+o,f=by(c,s,a);try{const g=Zy(c,s,f);if(g.year<Kd||g.year>Gd)continue;const x=Gi(t.year,t.month,t.day,g.year,g.month,g.day);if(x>=0)return{date:g,daysLeft:x,years:c-l,isLeapBirthday:!1}}catch{}}return null}function bd({birthdays:n,onChange:e}){const[t,i]=C.useState(""),[l,s]=C.useState(""),[a,u]=C.useState("solar"),[o,c]=C.useState(""),f=C.useMemo(()=>new Date,[]),g=C.useMemo(()=>n.map(m=>({birthday:m,occurrence:Zd(m,f)})).sort((m,v)=>(m.occurrence?.daysLeft??9999)-(v.occurrence?.daysLeft??9999)),[n,f]),x=()=>{if(!t.trim()||!l.trim()||!Hy(l))return;const m={id:or("bd"),name:t.trim(),date:l.trim(),calendar:a,note:o.trim()||void 0};e([...n,m]),i(""),s(""),c("")};return r.jsxs("div",{className:"grid gap-4 lg:grid-cols-[340px_minmax(0,1fr)]",children:[r.jsxs(dn,{className:"card-body",children:[r.jsx(ln,{children:"添加生日 / 纪念日"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{children:[r.jsx("label",{className:"label",htmlFor:"bd-name",children:"名称"}),r.jsx("input",{id:"bd-name",className:"field",placeholder:"例如：妈妈生日",value:t,onChange:m=>i(m.target.value)})]}),r.jsxs("div",{children:[r.jsx("label",{className:"label",htmlFor:"bd-date",children:"日期"}),r.jsx("input",{id:"bd-date",className:"field",type:"date",value:l,onChange:m=>s(m.target.value)})]}),r.jsxs("div",{children:[r.jsx("span",{className:"label",children:"历法"}),r.jsx("div",{className:"flex gap-1.5",children:[{key:"solar",label:"公历"},{key:"lunar",label:"农历"}].map(m=>r.jsx("button",{type:"button",className:`btn flex-1 text-xs ${a===m.key?"border-accent text-accent":""}`,onClick:()=>u(m.key),children:m.label},m.key))}),r.jsx("p",{className:"mt-1.5 text-[11px] text-muted",children:"农历模式下只取月 / 日，年度自动顺延；小月没有三十时取当月最后一天。"})]}),r.jsxs("div",{children:[r.jsx("label",{className:"label",htmlFor:"bd-note",children:"备注"}),r.jsx("input",{id:"bd-note",className:"field",placeholder:"可选",value:o,onChange:m=>c(m.target.value)})]}),r.jsxs("button",{type:"button",className:"btn-primary w-full",onClick:x,children:[r.jsx(V,{name:"plus",className:"h-4 w-4"}),"添加"]})]})]}),r.jsxs(dn,{className:"card-body",children:[r.jsx(ln,{children:"倒计时"}),g.length===0?r.jsx(fr,{text:"还没有记录，先添加一个生日或纪念日吧。"}):r.jsx("ul",{className:"space-y-2.5",children:g.map(({birthday:m,occurrence:v})=>r.jsxs("li",{className:"flex items-center gap-3 rounded-xl border border-line p-3",children:[r.jsxs("div",{className:"min-w-0 flex-1",children:[r.jsx("p",{className:"truncate text-sm font-semibold",children:m.name}),r.jsxs("p",{className:"mt-0.5 text-xs text-muted",children:[m.calendar==="lunar"?"农历":"公历"," ",m.date,v?` · 下次 ${v.date.year}-${String(v.date.month).padStart(2,"0")}-${String(v.date.day).padStart(2,"0")}`:"",m.note?` · ${m.note}`:""]})]}),r.jsxs("div",{className:"shrink-0 text-right",children:[r.jsx("p",{className:"font-serif text-2xl font-semibold text-accent",children:v?v.daysLeft:"—"}),r.jsx("p",{className:"text-[11px] text-muted",children:v?`天后 · ${v.years} 周年`:"超出范围"})]}),r.jsx("button",{type:"button",className:"btn-ghost px-2 py-1.5",title:"删除",onClick:()=>e(n.filter(p=>p.id!==m.id)),children:r.jsx(V,{name:"trash",className:"h-4 w-4"})})]},m.id))}),r.jsxs("p",{className:"mt-4 text-[11px] text-muted",children:["今天：",$l(f)]})]})]})}const cj=[{value:1,label:"一"},{value:2,label:"二"},{value:3,label:"三"},{value:4,label:"四"},{value:5,label:"五"},{value:6,label:"六"},{value:0,label:"日"}],ga={once:"仅一次",daily:"每天",weekday:"工作日",custom:"自定义"};function ng(n){return n.repeat!=="custom"?ga[n.repeat]:n.days.length===0?"不重复":[...n.days].sort((t,i)=>(t+6)%7-(i+6)%7).map(t=>cj.find(i=>i.value===t)?.label??"").join("、")}function eg({alarms:n,onChange:e}){const[t,i]=C.useState("08:00"),[l,s]=C.useState(""),[a,u]=C.useState("daily"),[o,c]=C.useState([1,2,3,4,5]),[f,g]=C.useState(cr()?Notification.permission:"unsupported"),x=()=>{if(!/^\d{2}:\d{2}$/.test(t))return;const p={id:or("alarm"),time:t,label:l.trim()||"闹钟",repeat:a,days:a==="custom"?o:[],date:a==="once"?$l(new Date):void 0,enabled:!0};e([...n,p]),s("")},m=p=>{c(D=>D.includes(p)?D.filter(y=>y!==p):[...D,p])},v=async()=>{const p=await Ky();g(p?"granted":"denied")};return r.jsxs("div",{className:"grid gap-4 lg:grid-cols-[340px_minmax(0,1fr)]",children:[r.jsxs(dn,{className:"card-body",children:[r.jsx(ln,{children:"新建闹钟"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{children:[r.jsx("label",{className:"label",htmlFor:"alarm-time",children:"提醒时间"}),r.jsx("input",{id:"alarm-time",className:"field",type:"time",value:t,onChange:p=>i(p.target.value)})]}),r.jsxs("div",{children:[r.jsx("label",{className:"label",htmlFor:"alarm-label",children:"备注"}),r.jsx("input",{id:"alarm-label",className:"field",placeholder:"例如：吃药",value:l,onChange:p=>s(p.target.value)})]}),r.jsxs("div",{children:[r.jsx("span",{className:"label",children:"重复"}),r.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:Object.keys(ga).map(p=>r.jsx("button",{type:"button",className:`btn text-xs ${a===p?"border-accent text-accent":""}`,onClick:()=>u(p),children:ga[p]},p))})]}),a==="custom"&&r.jsxs("div",{children:[r.jsx("span",{className:"label",children:"选择星期"}),r.jsx("div",{className:"flex flex-wrap gap-1.5",children:cj.map(p=>r.jsx("button",{type:"button",className:`h-9 w-9 rounded-lg text-xs transition ${o.includes(p.value)?"bg-accent text-white":"bg-paper text-ink hover:bg-accent-soft"}`,onClick:()=>m(p.value),children:p.label},p.value))})]}),r.jsxs("button",{type:"button",className:"btn-primary w-full",onClick:x,children:[r.jsx(V,{name:"plus",className:"h-4 w-4"}),"添加闹钟"]})]}),r.jsx("div",{className:"divider"}),r.jsx(ln,{children:"通知权限"}),f==="unsupported"?r.jsx("p",{className:"text-xs text-muted",children:"当前浏览器不支持通知，将以页面内提示提醒。"}):f==="granted"?r.jsx("p",{className:"text-xs text-good",children:"已授权，到点会发送系统通知。"}):r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"mb-2 text-xs text-muted",children:"未授权时会退化为页面内横幅提示；授权后即使切到其它标签页也能收到提醒。"}),r.jsx("button",{type:"button",className:"btn w-full text-xs",onClick:v,children:"请求通知权限"})]})]}),r.jsxs(dn,{className:"card-body",children:[r.jsxs(ln,{children:["我的闹钟（",n.length,"）"]}),n.length===0?r.jsx(fr,{text:"还没有闹钟。"}):r.jsx("ul",{className:"space-y-2.5",children:n.map(p=>r.jsxs("li",{className:"flex items-center gap-3 rounded-xl border border-line p-3",children:[r.jsx("button",{type:"button",className:`flex h-11 w-20 shrink-0 items-center justify-center rounded-lg font-serif text-xl font-semibold transition ${p.enabled?"bg-accent-soft text-accent":"bg-paper text-muted line-through"}`,onClick:()=>e(n.map(D=>D.id===p.id?{...D,enabled:!D.enabled}:D)),children:p.time}),r.jsxs("div",{className:"min-w-0 flex-1",children:[r.jsx("p",{className:"truncate text-sm font-medium",children:p.label}),r.jsx("p",{className:"text-xs text-muted",children:ng(p)})]}),r.jsx("button",{type:"button",className:"btn-ghost px-2 py-1.5",title:"删除",onClick:()=>e(n.filter(D=>D.id!==p.id)),children:r.jsx(V,{name:"trash",className:"h-4 w-4"})})]},p.id))})]})]})}function tg({notes:n,onChange:e}){const[t,i]=C.useState(null),[l,s]=C.useState(""),[a,u]=C.useState(""),o=[...n].sort((m,v)=>m.pinned!==v.pinned?m.pinned?-1:1:v.updatedAt-m.updatedAt),c=()=>{i("__new__"),s(""),u("")},f=m=>{i(m.id),s(m.title),u(m.content)},g=()=>{if(t!==null){if(t==="__new__"){const m={id:or("note"),title:l.trim()||"未命名便签",content:a,updatedAt:Date.now(),pinned:!1};e([...n,m])}else e(n.map(m=>m.id===t?{...m,title:l.trim()||m.title,content:a,updatedAt:Date.now()}:m));i(null),s(""),u("")}},x=()=>{i(null),s(""),u("")};return r.jsxs(dn,{className:"card-body",children:[r.jsxs(ln,{extra:t===null&&r.jsxs("button",{type:"button",className:"btn-primary text-xs",onClick:c,children:[r.jsx(V,{name:"plus",className:"h-4 w-4"}),"新建便签"]}),children:["便签（",n.length,"）"]}),t!==null&&r.jsxs("div",{className:"mb-4 animate-fade-up space-y-3 rounded-xl border border-accent/40 bg-paper p-3",children:[r.jsx("input",{className:"field",placeholder:"标题",value:l,autoFocus:!0,onChange:m=>s(m.target.value)}),r.jsx("textarea",{className:"field min-h-32 resize-y",placeholder:"写点什么……",value:a,onChange:m=>u(m.target.value)}),r.jsxs("div",{className:"flex gap-2",children:[r.jsxs("button",{type:"button",className:"btn-primary",onClick:g,children:[r.jsx(V,{name:"check",className:"h-4 w-4"}),"保存"]}),r.jsx("button",{type:"button",className:"btn",onClick:x,children:"取消"})]})]}),o.length===0?r.jsx(fr,{text:"还没有便签，点击右上角新建。"}):r.jsx("ul",{className:"grid gap-3 sm:grid-cols-2 lg:grid-cols-3",children:o.map(m=>r.jsxs("li",{className:"flex flex-col rounded-xl border border-line p-3",children:[r.jsxs("div",{className:"flex items-start gap-2",children:[r.jsx("p",{className:"flex-1 text-sm font-semibold",children:m.title}),m.pinned&&r.jsx("span",{className:"chip-accent shrink-0",children:"置顶"})]}),r.jsx("p",{className:"mt-1.5 flex-1 whitespace-pre-wrap text-[13px] leading-relaxed text-ink/80",children:m.content||"（空）"}),r.jsxs("div",{className:"mt-3 flex items-center gap-1",children:[r.jsx("span",{className:"flex-1 text-[11px] text-muted",children:new Date(m.updatedAt).toLocaleString("zh-CN",{hour12:!1})}),r.jsx("button",{type:"button",className:"btn-ghost px-2 py-1 text-xs",onClick:()=>e(n.map(v=>v.id===m.id?{...v,pinned:!v.pinned}:v)),children:m.pinned?"取消置顶":"置顶"}),r.jsx("button",{type:"button",className:"btn-ghost px-2 py-1 text-xs",onClick:()=>f(m),children:r.jsx(V,{name:"edit",className:"h-3.5 w-3.5"})}),r.jsx("button",{type:"button",className:"btn-ghost px-2 py-1 text-xs",onClick:()=>e(n.filter(v=>v.id!==m.id)),children:r.jsx(V,{name:"trash",className:"h-3.5 w-3.5"})})]})]},m.id))})]})}function ig({query:n,onQueryChange:e}){const[t,i]=C.useState(null),l=C.useMemo(()=>$d(n),[n]);return r.jsxs(dn,{className:"card-body",children:[r.jsxs(ln,{children:["黄历术语释义（共 ",hl.length," 条）"]}),r.jsxs("div",{className:"relative mb-4",children:[r.jsx("span",{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted",children:r.jsx(V,{name:"search",className:"h-4 w-4"})}),r.jsx("input",{className:"field pl-9",placeholder:"搜索术语，例如：天刑、月破、青龙",value:n,onChange:s=>e(s.target.value)})]}),l.length===0?r.jsxs("p",{className:"rounded-xl border border-dashed border-line px-4 py-8 text-center text-sm text-muted",children:["没有找到「",n,"」相关释义。"]}):r.jsx("ul",{className:"divide-y divide-line",children:l.map(s=>r.jsx("li",{children:r.jsxs("button",{type:"button",className:"flex w-full items-center gap-2 py-3 text-left",onClick:()=>i(a=>a===s.key?null:s.key),children:[r.jsx("span",{className:"chip shrink-0",children:s.key}),r.jsx("span",{className:"flex-1 text-[13px] leading-relaxed text-ink/80",children:t===s.key?s.value:`${s.value.slice(0,48)}${s.value.length>48?"…":""}`}),t===s.key&&r.jsx(V,{name:"close",className:"h-4 w-4 shrink-0 text-muted"})]})},s.key))})]})}const lg=[{key:"calendar",label:"万年历",icon:"calendar"},{key:"qian",label:"灵签",icon:"qian"},{key:"birthday",label:"倒计时",icon:"cake"},{key:"alarm",label:"闹钟",icon:"bell"},{key:"note",label:"便签",icon:"note"},{key:"glossary",label:"释义",icon:"book"}];function sg({active:n,onChange:e}){return r.jsx("nav",{className:"safe-bottom fixed inset-x-0 bottom-0 z-30 border-t border-line bg-card/95 backdrop-blur lg:hidden",children:r.jsx("ul",{className:"mx-auto flex max-w-lg",children:lg.map(t=>{const i=t.key===n;return r.jsx("li",{className:"flex-1",children:r.jsxs("button",{type:"button",onClick:()=>e(t.key),className:`flex w-full flex-col items-center gap-0.5 py-2 text-[10px] transition ${i?"text-accent":"text-muted"}`,children:[r.jsx(V,{name:t.icon,className:`h-5 w-5 ${i?"scale-110":""}`}),t.label]})},t.key)})})})}const ag=[{key:"calendar",label:"万年历",icon:"calendar"},{key:"qian",label:"灵签",icon:"qian"},{key:"birthday",label:"倒计时",icon:"cake"},{key:"alarm",label:"闹钟",icon:"bell"},{key:"note",label:"便签",icon:"note"},{key:"glossary",label:"释义",icon:"book"}];function rg(){const[n,e]=C.useState("calendar"),[t,i]=C.useState(()=>document.documentElement.classList.contains("dark")),[l,s]=C.useState(""),[a,u]=C.useState([]),[o,c]=xs(Oi.birthdays,[]),[f,g]=xs(Oi.alarms,[]),[x,m]=xs(Oi.notes,[]),v=C.useRef([]);C.useEffect(()=>{document.documentElement.classList.toggle("dark",t);try{window.localStorage.setItem(Oi.theme,t?"dark":"light")}catch{}},[t]),C.useEffect(()=>{const y=v.current;return()=>{y.forEach(j=>window.clearTimeout(j))}},[]);const p=C.useCallback(y=>{const j={id:y.id,title:"⏰ 闹钟",body:`${y.time} ${y.label}`};if(u(z=>[...z.filter(_=>_.id!==j.id),j]),cr()&&Notification.permission==="granted")try{new Notification(j.title,{body:j.body,tag:y.id})}catch{}const d=window.setTimeout(()=>{u(z=>z.filter(_=>_.id!==j.id))},2e4);v.current.push(d)},[]);Yy(f,p);const D=C.useCallback(y=>{s(y),e("glossary")},[]);return r.jsxs("div",{className:"min-h-screen pb-24 lg:pb-10",children:[r.jsxs("header",{className:"sticky top-0 z-30 border-b border-line bg-paper/85 backdrop-blur",children:[r.jsxs("div",{className:"mx-auto flex max-w-5xl items-center gap-3 px-4 py-3",children:[r.jsx("div",{className:"flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white",children:r.jsx(V,{name:"calendar",className:"h-5 w-5"})}),r.jsxs("div",{className:"min-w-0 flex-1",children:[r.jsx("h1",{className:"truncate font-serif text-lg font-semibold leading-tight",children:"中华万年历"}),r.jsx("p",{className:"truncate text-[11px] text-muted",children:"精简版 · 纯本地离线运行"})]}),r.jsx("button",{type:"button",className:"btn px-2.5 py-2",title:t?"切换到浅色":"切换到深色",onClick:()=>i(y=>!y),children:r.jsx(V,{name:t?"sun":"moon",className:"h-4 w-4"})})]}),r.jsx("nav",{className:"mx-auto hidden max-w-5xl gap-1 px-4 pb-2 lg:flex",children:ag.map(y=>r.jsxs("button",{type:"button",onClick:()=>e(y.key),className:`flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm transition ${n===y.key?"bg-accent-soft font-medium text-accent":"text-muted hover:bg-card hover:text-ink"}`,children:[r.jsx(V,{name:y.icon,className:"h-4 w-4"}),y.label]},y.key))})]}),r.jsxs("main",{className:"mx-auto max-w-5xl px-4 py-4",children:[n==="calendar"&&r.jsx(Bd,{onTermClick:D}),n==="qian"&&r.jsx(Yd,{}),n==="birthday"&&r.jsx(bd,{birthdays:o,onChange:c}),n==="alarm"&&r.jsx(eg,{alarms:f,onChange:g}),n==="note"&&r.jsx(tg,{notes:x,onChange:m}),n==="glossary"&&r.jsx(ig,{query:l,onQueryChange:s})]}),r.jsx("footer",{className:"mx-auto max-w-5xl px-4 pb-6 text-center text-[11px] leading-relaxed text-muted",children:"农历 / 干支 / 节气均由本机算法实时计算（1900-2100），数据全部内置，运行期不联网。"}),r.jsx(sg,{active:n,onChange:e}),r.jsx("div",{className:"pointer-events-none fixed inset-x-0 top-3 z-40 flex flex-col items-center gap-2 px-4",children:a.map(y=>r.jsxs("div",{className:"pointer-events-auto flex w-full max-w-sm items-center gap-3 rounded-2xl border border-accent/40 bg-card px-4 py-3 shadow-soft animate-fade-up",children:[r.jsxs("div",{className:"flex-1",children:[r.jsx("p",{className:"text-sm font-semibold",children:y.title}),r.jsx("p",{className:"text-xs text-muted",children:y.body})]}),r.jsx("button",{type:"button",className:"btn-ghost px-2 py-1",onClick:()=>u(j=>j.filter(d=>d.id!==y.id)),children:r.jsx(V,{name:"close",className:"h-4 w-4"})})]},y.id))})]})}const jj=document.getElementById("root");if(!jj)throw new Error("找不到 #root 挂载点");vs.createRoot(jj).render(r.jsx(Dj.StrictMode,{children:r.jsx(rg,{})}));
