(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[356],{5157:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(2063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6397:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let n=r(7677),o=r(4848),l=n._(r(6540)),u=r(6847),c=r(7785),a=r(2772),i=r(1278),f=r(6185),s=r(7644),d=r(6334),p=r(5157),b=r(296),y=r(1903),v=new Set;function h(e,t,r,n){if((0,c.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(v.has(o))return;v.add(o)}e.prefetch(t,r,n).catch(e=>{})}}function g(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let m=l.default.forwardRef(function(e,t){let r,n;let{href:a,as:v,children:m,prefetch:O=null,passHref:j,replace:P,shallow:_,scroll:w,locale:M,onClick:C,onMouseEnter:E,onTouchStart:k,legacyBehavior:x=!1,...S}=e;r=m,x&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let R=l.default.useContext(s.RouterContext),L=!1!==O,{href:N,as:I}=l.default.useMemo(()=>{if(!R){let e=g(a);return{href:e,as:v?g(v):e}}let[e,t]=(0,u.resolveHref)(R,a,!0);return{href:e,as:v?(0,u.resolveHref)(R,v):t||e}},[R,a,v]),D=l.default.useRef(N),T=l.default.useRef(I);x&&(n=l.default.Children.only(r));let U=x?n&&"object"==typeof n&&n.ref:t,[z,K,A]=(0,d.useIntersection)({rootMargin:"200px"}),H=l.default.useCallback(e=>{(T.current!==I||D.current!==N)&&(A(),T.current=I,D.current=N),z(e)},[I,N,A,z]),q=(0,y.useMergedRef)(H,U);l.default.useEffect(()=>{R&&K&&L&&h(R,N,I,{locale:M})},[I,N,K,M,L,null==R?void 0:R.locale,R]);let B={ref:q,onClick(e){x||"function"!=typeof C||C(e),x&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,r,n,o,l,u,a){let{nodeName:i}=e.currentTarget;"A"===i.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,c.isLocalURL)(r))||(e.preventDefault(),(()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:a,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})})())}(e,R,N,I,P,_,w,M)},onMouseEnter(e){x||"function"!=typeof E||E(e),x&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&h(R,N,I,{locale:M,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){x||"function"!=typeof k||k(e),x&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&h(R,N,I,{locale:M,priority:!0,bypassPrefetchedCheck:!0})}};if((0,i.isAbsoluteUrl)(I))B.href=I;else if(!x||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==M?M:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,p.getDomainLocale)(I,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);B.href=t||(0,b.addBasePath)((0,f.addLocale)(I,e,null==R?void 0:R.defaultLocale))}return x?l.default.cloneElement(n,B):(0,o.jsx)("a",{...S,...B,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6334:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(6540),o=r(4959),l="function"==typeof IntersectionObserver,u=new Map,c=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,i=a||!l,[f,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(l){if(i||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=c.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},c.push(r),u.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(n);let e=c.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&c.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!f){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,r,t,f,d.current]),[p,f,(0,n.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(6540);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=l(e,n),o.current=l(t,n))}:e||t,[e,t])}function l(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1106:(e,t,r)=>{e.exports=r(6397)},5787:(e,t,r)=>{"use strict";r.d(t,{k5:()=>f});var n=r(6540),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),u=["attr","size","title"];function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function f(e){return t=>n.createElement(s,c({attr:i({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,i({key:r},t.attr),e(t.child)))}(e.child))}function s(e){var t=t=>{var r,{attr:o,size:l,title:a}=e,f=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,u),s=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,f,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==l?n.createElement(l.Consumer,null,e=>t(e)):t(o)}}}]);