"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[228],{35318:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var r=o(27378);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(o),u=a,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||n;return o?r.createElement(f,i(i({ref:t},c),{},{components:o})):r.createElement(f,i({ref:t},c))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},12944:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=o(25773),a=(o(27378),o(35318));const n={id:"app-recommendations",image:"/img/embed/api-best-practices.jpg",title:"App recommendations",sidebar_label:"App recommendations",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,s={unversionedId:"topics/request-a-service/app-recommendations",id:"topics/request-a-service/app-recommendations",title:"App recommendations",description:'Overwolf uses several tools to help creators grow their apps, as helping creators grow is a central part of our mission. Some of these tools include the appstore carousel, or marking apps as \u201cfeatured\u201d. One additional tool we use is the Content Recommendation Notification (or "CRN").',source:"@site/pages/docs/topics/request-a-service/app-recommendations.mdx",sourceDirName:"topics/request-a-service",slug:"/topics/request-a-service/app-recommendations",permalink:"/topics/request-a-service/app-recommendations",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/request-a-service/app-recommendations.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"app-recommendations",image:"/img/embed/api-best-practices.jpg",title:"App recommendations",sidebar_label:"App recommendations",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"topics",previous:{title:"Long-term Marketing Promotion",permalink:"/topics/request-a-service/app-marketing-promotions"},next:{title:"Marketing asset requirements",permalink:"/topics/request-a-service/assets-req-marketing"}},p={},l=[{value:"How does it look like?",id:"how-does-it-look-like",level:2},{value:"How can I get my app promoted via CRN?",id:"how-can-i-get-my-app-promoted-via-crn",level:2}],c={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Overwolf uses several tools to help creators grow their apps, as helping creators grow is a central part of our mission. Some of these tools include the appstore carousel, or marking apps as \u201cfeatured\u201d. One additional tool we use is the Content Recommendation Notification (or "CRN").'),(0,a.kt)("p",null,"CRN recommends new apps for players that could offer them value, similarly to how other platforms such as Steam, Epic Games Launcher, and more recommend new content to users."),(0,a.kt)("p",null,"The notifications must meet several requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"They are spaced out and capped (no spamming)."),(0,a.kt)("li",{parentName:"ul"},"We\u2019ll only recommend high quality apps (judging based on retention)."),(0,a.kt)("li",{parentName:"ul"},"The promoted app will never be a competing app to the apps the player already has installed."),(0,a.kt)("li",{parentName:"ul"},"Users can always opt out from seeing these notifications.")),(0,a.kt)("p",null,"Additionally, during development we found that retention of players who see these notifications is actually slightly better compared to those who don\u2019t see them."),(0,a.kt)("h2",{id:"how-does-it-look-like"},"How does it look like?"),(0,a.kt)("p",null,"Content recommendations are displayed after a player finishes playing a certain game, and only while there is a relevant app to recommend."),(0,a.kt)("p",null,"For example, if a player finished playing DOTA 2, but he doesn\u2019t have a DOTA 2 app installed, he might see an app recommendation for a DOTA 2 app"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"app-recommendations",src:o(72677).Z,width:"477",height:"373"})),(0,a.kt)("h2",{id:"how-can-i-get-my-app-promoted-via-crn"},"How can I get my app promoted via CRN?"),(0,a.kt)("p",null,"Apps are eligible to be promoted via the CRN tool once they hit 50% 2nd week retention for a few weeks in a row. If your app meets this requirement and you\u2019d like to be promoted, please reach out to your Developer Relations Manager."))}m.isMDXComponent=!0},72677:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/app-recommendations-11c9e2634ce1451d854aab4564643037.png"}}]);