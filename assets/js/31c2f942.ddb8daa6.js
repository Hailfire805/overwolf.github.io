"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2131],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>s});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){return function(t){var r=d(t.components);return a.createElement(e,o({},t,{components:r}))}},d=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=d(r),u=n,g=s["".concat(i,".").concat(u)]||s[u]||c[u]||o;return r?a.createElement(g,l(l({ref:t},p),{},{components:r})):a.createElement(g,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},43163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={id:143,image:"/img/embed/changelogs.jpg",title:"Version 0.143",sidebar_label:"0.143",sidebar_position:143,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,l={unversionedId:"api/changelogs/overwolf-platform/2020/march/143",id:"api/changelogs/overwolf-platform/2020/march/143",title:"Version 0.143",description:"Game events",source:"@site/pages/docs/api/changelogs/overwolf-platform/2020/3-march/143.mdx",sourceDirName:"api/changelogs/overwolf-platform/2020/3-march",slug:"/api/changelogs/overwolf-platform/2020/march/143",permalink:"/api/changelogs/overwolf-platform/2020/march/143",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2020/3-march/143.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:143,frontMatter:{id:"143",image:"/img/embed/changelogs.jpg",title:"Version 0.143",sidebar_label:"0.143",sidebar_position:143,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.142",permalink:"/api/changelogs/overwolf-platform/2020/february/142"},next:{title:"0.145",permalink:"/api/changelogs/overwolf-platform/2020/april/145"}},m={},p=[{value:"Game events",id:"game-events",level:3},{value:"Game events",id:"game-events-1",level:3}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,n.mdx)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h3",{id:"game-events"},"Game events"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"The Vulkan Graphics API is now supported."),(0,n.mdx)("li",{parentName:"ul"},"From now, whenever you try to use an obsolete API, the dev console will print a warning.",(0,n.mdx)("br",{parentName:"li"}),"Try: overwolf.setting.getCurrentOverwolfLanguage()."),(0,n.mdx)("li",{parentName:"ul"},"New API - ",(0,n.mdx)("a",{parentName:"li",href:"/api/settings/language"},"overwolf.settings.language"),".",(0,n.mdx)("br",{parentName:"li"}),"Returns an object with language methods and events.",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/settings/language#getcallback"},"overwolf.settings.language.get()"),"."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/settings/language#onlanguagechanged"},"overwolf.settings.language.onLanguageChanged")," event."))),(0,n.mdx)("li",{parentName:"ul"},"New event: ",(0,n.mdx)("a",{parentName:"li",href:"/api/windows#onscreenpropertychanged"},"overwolf.windows.onScreenPropertyChanged"),".",(0,n.mdx)("br",{parentName:"li"}),"Detect moving window to another monitor.",(0,n.mdx)("br",{parentName:"li"}),"Triggered if more than 50% of the window has been moved to another monitor.",(0,n.mdx)("br",{parentName:"li"}),"Returns the new monitor handle."),(0,n.mdx)("li",{parentName:"ul"},"Upgrade OBS to 24.0.5.  ",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Update FFMpeg version."),(0,n.mdx)("li",{parentName:"ul"},'Support new NVEC Encoders ("NVEC New").'))),(0,n.mdx)("li",{parentName:"ul"},"Allow overriding recording indication type and position in API:",(0,n.mdx)("br",{parentName:"li"}),"Now when calling ",(0,n.mdx)("a",{parentName:"li",href:"/api/streaming#startsettings-callback"},"overwolf.streaming.start()"),", ",(0,n.mdx)("a",{parentName:"li",href:"/api/streaming#indication_position-enum"},"indication_position")," and ",(0,n.mdx)("a",{parentName:"li",href:"/api/streaming#indication_type-enum"},"indication_type")," can be set under video settings. (Until now, you could do that only from the OW client UI)."),(0,n.mdx)("li",{parentName:"ul"},'HTTPS - "Referrers", "Origins", and "AncestorsOrigin" should now all be using HTTPS instead of HTTP.')),(0,n.mdx)("h3",{id:"game-events-1"},"Game events"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"PUBG Lite game events",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New supported game"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/legends-of-runeterra"},"Legends of Runeterra game events"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New supported game"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/world-of-warcraft"},"World of Warcraft game events"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New supported game"))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/api/games/events/rocket-league"},"Rocket League game events"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"New info updates:",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"server_info"),(0,n.mdx)("li",{parentName:"ul"},"mutator_settings"),(0,n.mdx)("li",{parentName:"ul"},"arena")))))))}d.isMDXComponent=!0}}]);