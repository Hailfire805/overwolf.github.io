"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3989],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(a),u=o,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||n;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},80015:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=a(25773),o=(a(27378),a(35318));const n={id:"teamfight-tactics",image:"/img/embed/getting-started.jpg",title:"Teamfight Tactics Game Compliance Guidelines",hide_title:!0,sidebar_label:"Teamfight Tactics",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!0}},i=void 0,s={unversionedId:"start/game-compliance/teamfight-tactics",id:"start/game-compliance/teamfight-tactics",title:"Teamfight Tactics Game Compliance Guidelines",description:"Competitive integrity is one of our core values, and we work tirelessly to enforce this value, both in-house and with the cooperation of game developers.",source:"@site/pages/docs/start/game-compliance/teamfight-tactics.mdx",sourceDirName:"start/game-compliance",slug:"/start/game-compliance/teamfight-tactics",permalink:"/start/game-compliance/teamfight-tactics",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/game-compliance/teamfight-tactics.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1688472746,formattedLastUpdatedAt:"Jul 4, 2023",frontMatter:{id:"teamfight-tactics",image:"/img/embed/getting-started.jpg",title:"Teamfight Tactics Game Compliance Guidelines",hide_title:!0,sidebar_label:"Teamfight Tactics",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!0}},sidebar:"start",previous:{title:"Rainbow 6 Siege",permalink:"/start/game-compliance/rainbow-six-siege"},next:{title:"App Automation",permalink:"/start/test-your-app/app-automation"}},p={},l=[{value:"Riot Games app approval",id:"riot-games-app-approval",level:2},{value:"Augments and Legends data",id:"augments-and-legends-data",level:2}],c=(m="GameInfo",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var m;const d={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{gameId:21570,page:"compliance",mdxType:"GameInfo"}),(0,o.kt)("p",null,"Competitive integrity is one of our core values, and we work tirelessly to enforce this value, both in-house and with the cooperation of game developers."),(0,o.kt)("h2",{id:"riot-games-app-approval"},"Riot Games app approval"),(0,o.kt)("p",null,"If you wish to integrate your app with any of Riot\u2019s games,\nyou are required to seek their approval through their 3rd party ",(0,o.kt)("a",{parentName:"p",href:"https://developer.riotgames.com/docs/portal#_getting-started"},"application process"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"These guidelines hold even if you do not intend to use the Riot API itself.\nDo note that apps which reach the publication phase and do not yet possess a Riot approval, will be asked to provide one before proceeding.")),(0,o.kt)("h2",{id:"augments-and-legends-data"},"Augments and Legends data"),(0,o.kt)("p",null,"Riot Games is committed to creating a fair environment for all players, while reducing metagaming when possible. As such apps should make sure that they do not:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do not display Legend Win rates"),(0,o.kt)("li",{parentName:"ul"},"Do not display Augment Win rates"),(0,o.kt)("li",{parentName:"ul"},"Do not display Augment average game placements")),(0,o.kt)("p",null,"For more details about this policy, see the relevant ",(0,o.kt)("a",{parentName:"p",href:"https://www.leagueoflegends.com/en-pl/news/game-updates/teamfight-tactics-patch-13-12-notes/"},"Teamfight Tactics Changelog"),"."))}u.isMDXComponent=!0}}]);