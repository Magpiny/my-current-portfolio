"use strict";(()=>{var e={};e.id=636,e.ids=[636],e.modules={8355:(e,r)=>{function t(e){return"("===e[0]&&e.endsWith(")")}function n(e){return e.startsWith("@")&&"@children"!==e}function s(e,r){if(e.includes(i)){let e=JSON.stringify(r);return"{}"!==e?i+"?"+e:i}return e}Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var t in r)Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}(r,{DEFAULT_SEGMENT_KEY:function(){return o},PAGE_SEGMENT_KEY:function(){return i},addSearchParamsIfPageSegment:function(){return s},isGroupSegment:function(){return t},isParallelRouteSegment:function(){return n}});let i="__PAGE__",o="__DEFAULT__"},352:(e,r,t)=>{t.r(r),t.d(r,{default:()=>m});var n=t(8732),s=t(2015),i=t(6424),o=t(2770);function a({children:e}){let[r]=(0,s.useState)(()=>new o.ServerStyleSheet);return(0,i.useServerInsertedHTML)(()=>{let e=r.getStyleElement();return r.instance.clearTag(),(0,n.jsx)(n.Fragment,{children:e})}),(0,n.jsx)(o.StyleSheetManager,{sheet:r.instance,children:e})}let l={fonts:{title:"Space Grotesk, sans-serif",main:"Space Grotesk, sans-serif"},colors:{primary1:"hsl(204,23.8%,95.9%)",background1:"#0F1624",accent1:"hsl(34.9,98.6%,72.9%)",button:"hsl(205.1,100%,36.1%)",background2:"hsl(232.7,27.3%,23.7%)"},breakpoints:{sm:"screen and (max-width: 640px)",md:"screen and (max-width: 768px)",lg:"screen and (max-width: 1024px)",xl:"screen and (max-width: 1280px)"}},u=require("styled-normalize"),c=(0,o.createGlobalStyle)(["",";*{box-sizing:border-box;margin:0;padding:0;}html{font-size:62.5%;scroll-behavior:smooth;}body{font-family:",";font-size:1.6rem;background:",";color:",";cursor:default;}h1,h2,h3,h4,h5,h6,button{font-family:",";}a{text-decoration:none;}li{list-style:none;}"],u.normalize,e=>e.theme.fonts.main,e=>e.theme.colors.background1,e=>e.theme.colors.primary1,e=>e.theme.fonts.title),d=({children:e})=>(0,n.jsxs)(o.ThemeProvider,{theme:l,children:[(0,n.jsx)(c,{}),(0,n.jsx)(a,{children:e})]});function m({Component:e,pageProps:r}){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d,{children:(0,n.jsx)(e,{...r})})})}},3865:(e,r,t)=>{e.exports=t(361)},361:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},9121:e=>{e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},2015:e=>{e.exports=require("react")},8732:e=>{e.exports=require("react/jsx-runtime")},2770:e=>{e.exports=require("styled-components")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[424],()=>t(352));module.exports=n})();