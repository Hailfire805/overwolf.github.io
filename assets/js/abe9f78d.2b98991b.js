"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8309],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||n;return r?o.createElement(d,l(l({ref:t},c),{},{components:r})):o.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[f]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19374:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var o=r(25773),a=(r(27378),r(35318));const n={id:166,image:"/img/embed/changelogs.jpg",title:"Version 0.166",sidebar_label:"0.166",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2021/march/166",id:"api/changelogs/overwolf-platform/2021/march/166",title:"Version 0.166",description:"API",source:"@site/pages/docs/api/changelogs/overwolf-platform/2021/march/166.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/march",slug:"/api/changelogs/overwolf-platform/2021/march/166",permalink:"/api/changelogs/overwolf-platform/2021/march/166",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2021/march/166.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1692100274,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{id:"166",image:"/img/embed/changelogs.jpg",title:"Version 0.166",sidebar_label:"0.166",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"0.168",permalink:"/api/changelogs/overwolf-platform/2021/april/168"},next:{title:"0.165",permalink:"/api/changelogs/overwolf-platform/2021/february/165"}},p={},s=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Dev Console",id:"dev-console",level:3}],c={toc:s};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"api"},"API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/api/manifest#disable_cleanup"},"disable_cleanup")," flag in the manifest.json no longer deletes the app's files in the ",(0,a.kt)("inlineCode",{parentName:"li"},"%Localappdata%/Overwolf/Extensions")," folder.")),(0,a.kt)("h3",{id:"platform"},"Platform"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Overwolf will now restore installed apps in cases where the local database got corrupted."),(0,a.kt)("li",{parentName:"ul"},"Updated OBS to version 26.1.1. - now we have the latest and best recording capabilities."),(0,a.kt)("li",{parentName:"ul"},"Improve the OBS crash reports."),(0,a.kt)("li",{parentName:"ul"},"Overwolf Appstore as a default extension - So the Overwolf Appstore has all grown up, it is now a default extension within Overwolf. Most of you won\u2019t\neven notice a change, and that\u2019s good, but under the hood, there are several big differences.")),(0,a.kt)("h3",{id:"dev-console"},"Dev Console"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Export data to CSV.")))}f.isMDXComponent=!0}}]);