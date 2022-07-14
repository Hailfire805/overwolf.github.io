"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7929],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return v},useMDXComponents:function(){return p},withMDXComponents:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){return function(t){var n=p(t.components);return r.createElement(e,a({},t,{components:n}))}},p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},50805:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={id:"events-sdk-for-game-developers",title:"Events SDK for Game Developers",sidebar_label:"Event SDK for Game Devs"},s=void 0,c={unversionedId:"topics/integrations/events-sdk-for-game-developers",id:"topics/integrations/events-sdk-for-game-developers",title:"Events SDK for Game Developers",description:"Introduction",source:"@site/pages/docs/topics/integrations/events-sdk-for-game-developers.mdx",sourceDirName:"topics/integrations",slug:"/topics/integrations/events-sdk-for-game-developers",permalink:"/topics/integrations/events-sdk-for-game-developers",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/integrations/events-sdk-for-game-developers.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657711065,formattedLastUpdatedAt:"7/13/2022",frontMatter:{id:"events-sdk-for-game-developers",title:"Events SDK for Game Developers",sidebar_label:"Event SDK for Game Devs"},sidebar:"topics",previous:{title:"Integrating app analytics",permalink:"/topics/integrations/app-analytics"},next:{title:"Login with Overwolf",permalink:"/topics/integrations/login-with-overwolf"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Structure",id:"structure",level:3},{value:"Implementation",id:"implementation",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"introduction"},"Introduction"),(0,a.mdx)("p",null,"The Overwolf event SDK empowers game developers to mark and communicate in-game events and real-time game data, making potential Overwolf apps much more valuable. For example, implementing the SDK properly can allow app developers to build an app that creates a video compilation of kill shots in an FPS, or a highlight reel of team kills in a MOBA."),(0,a.mdx)("h3",{id:"how-does-it-work"},"How does it work?"),(0,a.mdx)("p",null,"You know your game better than anyone - choose the events you think are worth relating to, such as kills, deaths, match start, match end, an achievement reached, gold earned, or any other crucial in-game trigger. After implementing these code lines for each relevant event, a call will be sent through Overwolf to Overwolf apps supporting your game every time they occur."),(0,a.mdx)("p",null,"This solution is:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Easy \u2013 all you need is to define the events you want to use and send notifications over to Overwolf with a simple function."),(0,a.mdx)("li",{parentName:"ol"},"Dynamic \u2013 you have complete flexibility on the types of events you expose and can implement new ones quickly."),(0,a.mdx)("li",{parentName:"ol"},"Safe \u2013 the solution will still work as a one-way communication even if Overwolf is not running in the background. Further, game events run on a different thread, so game performance will not be hurt.")),(0,a.mdx)("h3",{id:"structure"},"Structure"),(0,a.mdx)("p",null,"The Overwolf event SDK is a configurable real-time database split into two main sections:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Information categories \u2013 Data that is usually updated once per match. This will include the player's ID, the team members, the player's level, and other data points that remain static throughout the game."),(0,a.mdx)("li",{parentName:"ol"},"Events \u2013 This section includes a real-time database of events (e.g., double kill, head-shot, current gold). Events update frequently and expire just as often, and they are focused on what's happening in a given match.")),(0,a.mdx)("h3",{id:"implementation"},"Implementation"),(0,a.mdx)("p",null,"Download the SDK from ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/game-events-sdk"},"this link"),"."),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Include the 32/64 DLL with your game."),(0,a.mdx)("li",{parentName:"ol"},"Review the tester."),(0,a.mdx)("li",{parentName:"ol"},"Start updating your code with interesting events."),(0,a.mdx)("li",{parentName:"ol"},"If you want ideas or a list of recommended events based on our experience, please send us an email.")),(0,a.mdx)("p",null,"For that or any other questions, feel free to reach out directly at ",(0,a.mdx)("a",{parentName:"p",href:"mailto:developers@overwolf.com"},"developers@overwolf.com")))}d.isMDXComponent=!0}}]);