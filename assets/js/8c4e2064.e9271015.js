"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9493],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64293:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={id:216,image:"/img/embed/changelogs.jpg",title:"Version 0.216",sidebar_label:"0.216",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2022/december/216",id:"api/changelogs/overwolf-platform/2022/december/216",title:"Version 0.216",description:"Documentation",source:"@site/pages/docs/api/changelogs/overwolf-platform/2022/december/216.mdx",sourceDirName:"api/changelogs/overwolf-platform/2022/december",slug:"/api/changelogs/overwolf-platform/2022/december/216",permalink:"/api/changelogs/overwolf-platform/2022/december/216",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2022/december/216.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1673972134,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"216",image:"/img/embed/changelogs.jpg",title:"Version 0.216",sidebar_label:"0.216",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.217",permalink:"/api/changelogs/overwolf-platform/2023/january/217"},next:{title:"0.215",permalink:"/api/changelogs/overwolf-platform/2022/december/215"}},c={},p=[{value:"Documentation",id:"documentation",level:3},{value:"Platform",id:"platform",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"Documentation changelogs have been moved to their own ",(0,o.kt)("a",{parentName:"p",href:"/api/changelogs/documentation/2023/january"},"feed"),"!"),(0,o.kt)("h3",{id:"platform"},"Platform"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/games/launchers#onupdatedcallback"},(0,o.kt)("inlineCode",{parentName:"a"},"overwolf.games.launchers.onUpdated"))," now detects when the League of Legends launcher is minimized,\nand will update its position to be -32,000 on both axes. Also applies to ",(0,o.kt)("a",{parentName:"li",href:"/api/games/launchers#getrunninglaunchersinfocallback"},(0,o.kt)("inlineCode",{parentName:"a"},"overwolf.games.launchers.getRunningLaunchersInfo()")),".")),(0,o.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixed an issue on windows 11, where focusing a game with overlay enabled could block other windows from being focused."),(0,o.kt)("li",{parentName:"ul"},"Custom app hotkeys will no longer be blocked when the app is not open.")))}u.isMDXComponent=!0}}]);