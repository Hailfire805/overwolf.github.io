"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[188],{3905:function(e,t,r){r.r(t),r.d(t,{MDXContext:function(){return p},MDXProvider:function(){return u},mdx:function(){return v},useMDXComponents:function(){return m},withMDXComponents:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){return function(t){var r=m(t.components);return n.createElement(e,o({},t,{components:r}))}},m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(r),u=a,f=d["".concat(i,".").concat(u)]||d[u]||c[u]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99234:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:169,title:"Version 0.169",sidebar_label:"0.169",sidebar_position:169},s=void 0,p={unversionedId:"api/changelogs/2021/april/169",id:"api/changelogs/2021/april/169",title:"Version 0.169",description:"API",source:"@site/pages/docs/api/changelogs/2021/4-april/169.mdx",sourceDirName:"api/changelogs/2021/4-april",slug:"/api/changelogs/2021/april/169",permalink:"/api/changelogs/2021/april/169",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/2021/4-april/169.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657780987,formattedLastUpdatedAt:"7/14/2022",sidebarPosition:169,frontMatter:{id:"169",title:"Version 0.169",sidebar_label:"0.169",sidebar_position:169},sidebar:"api",previous:{title:"0.168",permalink:"/api/changelogs/2021/april/168"},next:{title:"0.170",permalink:"/api/changelogs/2021/may/170"}},d={},m=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Game events",id:"game-events",level:3}],u={toc:m};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h3",{id:"api"},"API"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Improve OBS encoders support detection using the ",(0,o.mdx)("a",{parentName:"li",href:"/api/streaming#getstreamencoderscallback"},"overrwolf.streaming.getStreamEncoders()")," API (we added new error state for unsupported encoders ",(0,o.mdx)("a",{parentName:"li",href:"/api/streaming#encoderdata-object"},"EncoderData")," object)."),(0,o.mdx)("li",{parentName:"ul"},"Added the following properties to ",(0,o.mdx)("a",{parentName:"li",href:"/api/io/paths"},"overwolf.io.paths"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"overwolf install dir : 'overwolf.io.paths.overwolfInstallation'."),(0,o.mdx)("li",{parentName:"ul"},"overwolf install dir with version number : 'overwolf.io.paths.overwolfInstallationWithVersion'."),(0,o.mdx)("li",{parentName:"ul"},"obs dir : 'overwolf.io.paths.obsBin'."))),(0,o.mdx)("li",{parentName:"ul"},"Improved behavior when switching a video to full screen in an Overwolf native window."),(0,o.mdx)("li",{parentName:"ul"},"New event: ",(0,o.mdx)("a",{parentName:"li",href:"/api/streaming#supportedencodersupdatedevent-object"},"overwolf.streaming.onSupportedEncodersUpdated")," -  Fired upon support encoder list updated.")),(0,o.mdx)("h3",{id:"platform"},"Platform"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"General stability fixes for OBS and uncommon recording failures, Improved error indications when we do fail to record."),(0,o.mdx)("li",{parentName:"ul"},"Added support for overlay above UWP (Universal Windows Platform) games (minecraft, sea of thieves & roblox). some of these games are still not working perfectly, and currently, the plan is to only enable Sea of Thieves for UWP in the near future. ")),(0,o.mdx)("h3",{id:"dev-console"},"Dev Console"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"General enhancments for the crash reports section.")),(0,o.mdx)("h3",{id:"bug-fixes"},"Bug fixes"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Fixed the issue where native windows can be resized greater than their manifest maximum size."),(0,o.mdx)("li",{parentName:"ul"},'Fixed the issue where Video elements "glitched" when switching the app to full-screen mode.'),(0,o.mdx)("li",{parentName:"ul"},"Fixed the issue where you got an error that you should update your graphic card drivers only AFTER the game capturing starts. Now, you get this error before the capture starts."),(0,o.mdx)("li",{parentName:"ul"},"Fixed the Rocket league (Epic version) invisible cursor issue."),(0,o.mdx)("li",{parentName:"ul"},'CS:GO\u2019s "Out of Process Overlay" is no longer the only supported overlay mode.'),(0,o.mdx)("li",{parentName:"ul"},"We've killed the nameless Overwolf window that would sometimes appear when going in-game.")),(0,o.mdx)("h3",{id:"game-events"},"Game events"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/api/games/events/valheim"},"Valehim"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"New supported game"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/api/games/events/dota-2"},"Dota"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"New info update",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"game_mode"))))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/api/games/events/teamfight-tactics"},"TFT")),(0,o.mdx)("li",{parentName:"ul"},'Riot is working on a new TFT mode named "Hyperoll". The mode is currently available in the PBE servers and soon in live servers and can be detected as 1130 in the ',(0,o.mdx)("inlineCode",{parentName:"li"},"queueID"),".")))}c.isMDXComponent=!0}}]);