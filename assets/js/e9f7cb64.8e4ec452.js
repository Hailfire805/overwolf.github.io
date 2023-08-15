"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3960],{35318:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,h=p["".concat(l,".").concat(f)]||p[f]||g[f]||s;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8740:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(25773),o=(r(27378),r(35318));const s={id:"overlay-game-html",image:"/img/embed/api-best-practices.jpg",title:"Overlay Game HTML",sidebar_position:30,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,a={unversionedId:"topics/understanding-overwolf-logs/overlay-game-html",id:"topics/understanding-overwolf-logs/overlay-game-html",title:"Overlay Game HTML",description:"These logs will appear as an HTML file with the game title (For example League of Legends07-03-2105-17-06.Game.html) Using these log files you can verify that the processes & dlls were injected correctly into the game, information regarding the windows mode, rendered API and if the hotkeys are being sent and received by Overwolf.",source:"@site/pages/docs/topics/understanding-overwolf-logs/overlay-game-html.mdx",sourceDirName:"topics/understanding-overwolf-logs",slug:"/topics/understanding-overwolf-logs/overlay-game-html",permalink:"/topics/understanding-overwolf-logs/overlay-game-html",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/understanding-overwolf-logs/overlay-game-html.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1692100274,formattedLastUpdatedAt:"Aug 15, 2023",sidebarPosition:30,frontMatter:{id:"overlay-game-html",image:"/img/embed/api-best-practices.jpg",title:"Overlay Game HTML",sidebar_position:30,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"OBS",permalink:"/topics/understanding-overwolf-logs/obs"},next:{title:"OverwolfPerf",permalink:"/topics/understanding-overwolf-logs/overwolfperf"}},l={},c=[],d={toc:c};function p(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These logs will appear as an HTML file with the game title (For example League of Legends_07-03-21_05-17-06.Game.html) Using these log files you can verify that the processes & dlls were injected correctly into the game, information regarding the windows mode, rendered API and if the hotkeys are being sent and received by Overwolf."),(0,o.kt)("p",null,"In this section you can see the client initializing and the users Windows OS:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"6",src:r(30219).Z,width:"1827",height:"170"})),(0,o.kt)("p",null,"This section will show which dlls are injected (Allowing you to check coexistence issues with other programs) before the render:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"7",src:r(90710).Z,width:"1749",height:"425"})),(0,o.kt)("p",null,"This section will show the rendered resolutions and windows mode:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"8",src:r(87647).Z,width:"2441",height:"139"})),(0,o.kt)("p",null,"This section will show the rendered API:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"9",src:r(10951).Z,width:"1247",height:"284"})),(0,o.kt)("p",null,"This section will show if the render was successful:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"10",src:r(96784).Z,width:"2681",height:"108"})),(0,o.kt)("p",null,"This section will show if the OBS render hook was injected: "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"11",src:r(75143).Z,width:"1208",height:"240"})),(0,o.kt)("p",null,"This section shows hotkeys that were sent and received by Overwolf "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"12",src:r(56146).Z,width:"2448",height:"68"})),(0,o.kt)("p",null,"This section shows that the game ended properly without crashes"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"13",src:r(8816).Z,width:"1223",height:"197"})))}p.isMDXComponent=!0},96784:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/10-01a869e337f78ef879c44fe47804bb63.png"},75143:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/11-5e27ee4739b7ea57bf151a757ac2025b.png"},56146:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/12-6b73de9e3defc9a8e776953c8a792a21.png"},8816:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/13-e966e9d44e76429afa965f6e20799001.png"},30219:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/6-6edb9ae9d84075d8831d9b7025f1e13d.png"},90710:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/7-d18f368cae4d0d8ea2025d27cb51b3a2.png"},87647:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/8-5fa6e925fb43bffafed9881710dbf724.png"},10951:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/9-d0847307acfe72631f348958b15b69b5.png"}}]);