"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3388],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},39775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(25773),a=(r(27378),r(35318));const o={id:"status",image:"/img/embed/game-status.jpg",title:"Game events status health",sidebar_label:"All Games",sidebar_position:0,showLastUpdateAuthor:!1,showLastUpdateTime:!1,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},s=void 0,i={unversionedId:"status/status",id:"status/status",title:"Game events status health",description:"Pick any game to see its full events list.",source:"@site/pages/docs/status/status.mdx",sourceDirName:"status",slug:"/status/",permalink:"/status/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/status/status.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"status",image:"/img/embed/game-status.jpg",title:"Game events status health",sidebar_label:"All Games",sidebar_position:0,showLastUpdateAuthor:!1,showLastUpdateTime:!1,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"status",next:{title:"Apex Legends",permalink:"/status/apex-legends"}},l={},p=[],u=(c="EventsData",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pick any game to see its full events list."),(0,a.kt)("p",null,"It is highly recommended to communicate errors and warnings to your app users.\nYou can easily do that using the Overwolf API. ",(0,a.kt)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"Read all the info here"),"."),(0,a.kt)(u,{allGames:!0,mdxType:"EventsData"}))}d.isMDXComponent=!0}}]);