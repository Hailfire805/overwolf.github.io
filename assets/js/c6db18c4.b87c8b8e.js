"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9354],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>p});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(){return o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){return function(a){var t=d(a.components);return n.createElement(e,o({},a,{components:t}))}},d=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=d(t),u=r,f=p["".concat(l,".").concat(u)]||p[u]||c[u]||o;return t?n.createElement(f,i(i({ref:a},s),{},{components:t})):n.createElement(f,i({ref:a},s))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var m in a)hasOwnProperty.call(a,m)&&(i[m]=a[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3608:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const o={id:173,image:"/img/embed/changelogs.jpg",title:"Version 0.173",sidebar_label:"0.173",sidebar_position:173,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},l=void 0,i={unversionedId:"api/changelogs/overwolf-platform/2021/june/173",id:"api/changelogs/overwolf-platform/2021/june/173",title:"Version 0.173",description:"* Note that iterations 171 to 173 were combined into a single iteration.",source:"@site/pages/docs/api/changelogs/overwolf-platform/2021/6-june/173.mdx",sourceDirName:"api/changelogs/overwolf-platform/2021/6-june",slug:"/api/changelogs/overwolf-platform/2021/june/173",permalink:"/api/changelogs/overwolf-platform/2021/june/173",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/changelogs/overwolf-platform/2021/6-june/173.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:173,frontMatter:{id:"173",image:"/img/embed/changelogs.jpg",title:"Version 0.173",sidebar_label:"0.173",sidebar_position:173,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"0.170",permalink:"/api/changelogs/overwolf-platform/2021/may/170"},next:{title:"0.174",permalink:"/api/changelogs/overwolf-platform/2021/july/174"}},m={},s=[{value:"API",id:"api",level:3},{value:"Platform",id:"platform",level:3},{value:"Dev Console",id:"dev-console",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Game events",id:"game-events",level:3}],p={toc:s};function d(e){let{components:a,...t}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Note that iterations 171 to 173 were combined into a single iteration. ")),(0,r.mdx)("h3",{id:"api"},"API"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"overwolf.utils.openUrlInDefaultBrowser - enhance security by checking the scheme and only allow requests to http/s or protocols allowed in the manifest.  ",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Manifest example: ",(0,r.mdx)("inlineCode",{parentName:"li"},'"data": {"allowed_protocols": { "protocols": ["mailto", "steam"]}}')),(0,r.mdx)("li",{parentName:"ul"},"'file' in the scheme will always be blocked."))),(0,r.mdx)("li",{parentName:"ul"},"Added ",(0,r.mdx)("inlineCode",{parentName:"li"},"processId")," to ",(0,r.mdx)("a",{parentName:"li",href:"/api/games#getrunninggameinfocallback"},"overwolf.games.getRunningGameInfo")," and ",(0,r.mdx)("a",{parentName:"li",href:"/api/games#ongameinfoupdated"},"overwolf.games.onGameInfoUpdated"),"."),(0,r.mdx)("li",{parentName:"ul"},"Coexistence API - Event to indicate if there is another overlay library running + if Overwolf doesn't manage to render anything, allow the app to give a relevant notification",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Added a new object, ",(0,r.mdx)("a",{parentName:"li",href:"/api/games#overlayinfo-object"},"overwolf.games.OverlayInfo"),",  with info about the current out of process overlays."),(0,r.mdx)("li",{parentName:"ul"},"Added a new ",(0,r.mdx)("a",{parentName:"li",href:"/api/games#gameinfochangereason-enum"},"GameInfoChangeReason")," enum to the ",(0,r.mdx)("a",{parentName:"li",href:"/api/games#ongameinfoupdated"},"overwolf.games.onGameInfoUpdated")," event,with some info about the hooking error reason. (if an hooking error has occurred)."),(0,r.mdx)("li",{parentName:"ul"},"Added a new ",(0,r.mdx)("a",{parentName:"li",href:"/api/games#knownoverlaycoexistenceapps-enum"},"KnownOverlayCoexistenceApps")," enum with a list of known apps causing overlay coexistence issues with OW."),(0,r.mdx)("li",{parentName:"ul"},"New API: ",(0,r.mdx)("a",{parentName:"li",href:"/api/games##getlastrunninggameinfocallback"},"overwolf.games.getLastRunningGameInfo()")," - returns the last played gameinfo (when no game is currently running). "),(0,r.mdx)("li",{parentName:"ul"},"new API: ",(0,r.mdx)("a",{parentName:"li",href:"/api/settings/games#setautolaunchenabledgameclassid-callback"},"overwolf.settings.games.setAutoLaunchEnabled"),": allows apps to control what games they auto-launch for following user gesture (similar to performUpdate)."),(0,r.mdx)("li",{parentName:"ul"},"New API: ",(0,r.mdx)("a",{parentName:"li",href:"/api/os/tray#destroy"},"overwolf.os.tray.destroy")," - Added a new method for removing an extension tray icon and menu immediately.")))),(0,r.mdx)("h3",{id:"platform"},"Platform"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"New client settings (Capture => Advanced Settings) with Rate Control and Max Kb/s sliders."),(0,r.mdx)("li",{parentName:"ul"},"Rebranding - we\u2019re releasing almost all of Overwolf\u2019s client modules with a new branding.")),(0,r.mdx)("h3",{id:"dev-console"},"Dev Console"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"App Channels - a new feature that enables you to create and distribute different app versions for your users /testers. The first part of this feature ",(0,r.mdx)("a",{parentName:"li",href:"#api-1"},"announced already on v0.170"),", and now ",(0,r.mdx)("a",{parentName:"li",href:"/tools/developers-console/all-applications/release-management"},"the second")," (and last) part is released - the app channels management tools from the dev console. ")),(0,r.mdx)("h3",{id:"bug-fixes"},"Bug fixes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Extension tray icons would get blurry when changing display settings (try changing DPI from 100% to 175%)."),(0,r.mdx)("li",{parentName:"ul"},"Replay API - TurnOffResult typo."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/api/games#gameinfoupdatedevent-object"},"GameInfoUpdatedEvent")," Object - fixed the issue that runningChanged is not being updated once a game starts running."),(0,r.mdx)("li",{parentName:"ul"},"Fixed the issue that Video recording won't start if game is minimized."),(0,r.mdx)("li",{parentName:"ul"},"Fixed a bug where subs oneapp page sometimes won't open."),(0,r.mdx)("li",{parentName:"ul"},"New Reddit (new.reddit.com) has an issue with escaped space characters in redirects. This fix ensures space (%20) won't be re-encoded to %2B and break the redirect")),(0,r.mdx)("h3",{id:"game-events"},"Game events"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"overwolf.media.replays TurnOffResult typo."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/api/games/events/football-manager-2021"},"Football Manager2021"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"New supported game with updates and events under:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"match_info"))))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"/api/games/events/call-of-duty-warzone"},"Warzone"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"New update under:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"match_info")))))))}d.isMDXComponent=!0}}]);