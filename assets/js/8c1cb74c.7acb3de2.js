"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6031],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>f,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>c});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){return function(t){var r=m(t.components);return o.createElement(e,a({},t,{components:r}))}},m=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=m(r),f=n,d=c["".concat(i,".").concat(f)]||c[f]||u[f]||a;return r?o.createElement(d,l(l({ref:t},s),{},{components:r})):o.createElement(d,l({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36572:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={id:184,image:"/img/embed/changelogs.jpg",title:"Version 0.184",sidebar_label:"0.184",sidebar_position:184,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2021/november/184",id:"api/changelogs/overwolf-platform/2021/november/184",title:"Version 0.184",description:"* Note that iterations 182 to 184 were combined into a single iteration.",source:"@site/pages/docs/api/changelogs/overwolf-platform/2021/11-november/184.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/11-november",slug:"/api/changelogs/overwolf-platform/2021/november/184",permalink:"/api/changelogs/overwolf-platform/2021/november/184",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2021/11-november/184.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:184,frontMatter:{id:"184",image:"/img/embed/changelogs.jpg",title:"Version 0.184",sidebar_label:"0.184",sidebar_position:184,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.181",permalink:"/api/changelogs/overwolf-platform/2021/october/181"},next:{title:"0.185",permalink:"/api/changelogs/overwolf-platform/2021/december/185"}},p={},s=[{value:"Docs",id:"docs",level:3},{value:"API",id:"api",level:3}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,n.mdx)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Note that iterations 182 to 184 were combined into a single iteration. ")),(0,n.mdx)("h3",{id:"docs"},"Docs"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"A new I/O sample app in our ",(0,n.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/apis-sample-apps"},"APIs sample apps repository"),". Demonstrates how to open and load a file to your app, Display it, Add some content, and Write it back to the file."),(0,n.mdx)("li",{parentName:"ul"},"As for now, the ",(0,n.mdx)("a",{parentName:"li",href:"/start/basic-app/sample-app#docsNav"},"basic sample")," app was built only for Fortnite. In the new version of the sample app, we added support for 14 more games to ease your learning:\nLeague of Legends, Valorant, Minecraft, CSGO, Escape From Tarkov, Overwatch, PUBG, Rainbow Six Siege, Splitgate: Arena Warfare, Path of Exile, Dota 2, Call of Duty: Warzone, and Warframe.")),(0,n.mdx)("h3",{id:"api"},"API"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Warframe game events support is back.")))}m.isMDXComponent=!0}}]);