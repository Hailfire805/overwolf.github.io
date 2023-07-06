"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7353],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||o;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15401:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(25773),n=(r(27378),r(35318));const o={id:138,image:"/img/embed/changelogs.jpg",title:"Version 0.138",sidebar_label:"0.138",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2019/november/138",id:"api/changelogs/overwolf-platform/2019/november/138",title:"Version 0.138",description:"* All API functions that take callback arguments:",source:"@site/pages/docs/api/changelogs/overwolf-platform/2019/november/138.mdx",sourceDirName:"api/changelogs/overwolf-platform/2019/november",slug:"/api/changelogs/overwolf-platform/2019/november/138",permalink:"/api/changelogs/overwolf-platform/2019/november/138",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2019/november/138.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1673773943,formattedLastUpdatedAt:"Jan 15, 2023",frontMatter:{id:"138",image:"/img/embed/changelogs.jpg",title:"Version 0.138",sidebar_label:"0.138",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.139",permalink:"/api/changelogs/overwolf-platform/2019/december/139"},next:{title:"0.137",permalink:"/api/changelogs/overwolf-platform/2019/november/137"}},p={},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All API functions that take callback arguments:",(0,n.kt)("br",{parentName:"li"}),"from now on, we guarantee that a non-null result object parameter will always be returned and it will always contain a |success| boolean field.",(0,n.kt)("br",{parentName:"li"}),"This means no more if (!result || !result.status ...) checks. Instead, this should always work: if (result.success)."),(0,n.kt)("li",{parentName:"ul"},"New Overwolf definition file addition -  make your lives easier and your coding experience faster. Full details can be found ",(0,n.kt)("a",{parentName:"li",href:"/topics/best-practices/type-definition-file"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},"New Event: ",(0,n.kt)("a",{parentName:"li",href:"/api/extensions#onextensionupdated"},"overwolf.extensions.onExtensionUpdated"),". Notify when the app was updated.",(0,n.kt)("br",{parentName:"li"}),'This event will replace the deprecated "overwolf.extensions.onExtensionUpdateStateChanged" event.',(0,n.kt)("br",{parentName:"li"}),"Fires after the current app were successfully updated."),(0,n.kt)("li",{parentName:"ul"},"We updated the ",(0,n.kt)("a",{parentName:"li",href:"/start/maintain-your-app/submit-an-app-update#forced-user-updates"},"recommended process")," for manual update of your app."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/deprecated/obsolete/tobii"},"overwolf.tobii"),": this API has been deprecated."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/games/events/league-of-legends"},"League of Legends Events"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New event:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"match_clock"))))),(0,n.kt)("li",{parentName:"ul"},"Dota 2 Events",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New info-update:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"role"),(0,n.kt)("li",{parentName:"ul"},"hero_pool"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/games/events/dota-underlords"},"Dota Underlords Events"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"New supported game events")))))}u.isMDXComponent=!0}}]);