"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[49],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>y,useMDXComponents:()=>h,withMDXComponents:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){return function(t){var n=h(t.components);return a.createElement(e,r({},t,{components:n}))}},h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=h(n),m=o,u=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(u,i(i({ref:t},l),{},{components:n})):a.createElement(u,i({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={id:"using-tab",image:"/img/embed/api-best-practices.jpg",title:"Use Tab as an app Hotkey",sidebar_label:"Use Tab as an app Hotkey",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},s=void 0,i={unversionedId:"topics/best-practices/using-tab",id:"topics/best-practices/using-tab",title:"Use Tab as an app Hotkey",description:"Hotkeys - Overview",source:"@site/pages/docs/topics/best-practices/using-tab.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/using-tab",permalink:"/topics/best-practices/using-tab",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/best-practices/using-tab.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"using-tab",image:"/img/embed/api-best-practices.jpg",title:"Use Tab as an app Hotkey",sidebar_label:"Use Tab as an app Hotkey",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"topics",previous:{title:"User journey and error handling",permalink:"/topics/best-practices/user-flow-and-error-handling"},next:{title:"Video capture best practices",permalink:"/topics/best-practices/video-capture"}},p={},l=[{value:"Hotkeys - Overview",id:"hotkeys---overview",level:2},{value:"Binding App Hotkeys to Game Hotkeys",id:"binding-app-hotkeys-to-game-hotkeys",level:2},{value:"Use Tab as an app Hotkey",id:"use-tab-as-an-app-hotkey",level:2},{value:"Implement &quot;Tabbing&quot; in Your App",id:"implement-tabbing-in-your-app",level:2},{value:"Set your hotkey in the manifest",id:"set-your-hotkey-in-the-manifest",level:3},{value:"Register to the onHold event",id:"register-to-the-onhold-event",level:3}],d={toc:l};function h(e){let{components:t,...r}=e;return(0,o.mdx)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"hotkeys---overview"},"Hotkeys - Overview"),(0,o.mdx)("p",null,"Overwolf Hotkeys are keystrokes or key combinations that can control your app while in-game. When using a hotkey, your app window is opened, and clicking it again will hide or minimize it. You can allow users to change hotkey combinations from your app\u2019s settings panel by automatically directing the user to the Overwolf settings page.  "),(0,o.mdx)("p",null,"You can read all about hotkeys in our ",(0,o.mdx)("a",{parentName:"p",href:"hotkeys-best-practices"},"Hotkey best practices")," guide."),(0,o.mdx)("h2",{id:"binding-app-hotkeys-to-game-hotkeys"},"Binding App Hotkeys to Game Hotkeys"),(0,o.mdx)("p",null,"Most games already have built-in hotkeys for common actions. These key combinations are usually bound to the most important actions. Adding new hotkeys for your app makes the lives of players harder, as they needs to remember additional combinations."),(0,o.mdx)("p",null,'We can "hitch a ride" on game hotkeys and provide value in an automated manner. The main advanatage of this approach is that the player doesn\'t need to remember new hotkeys: We can bind OW hotkeys in parallel to the existing game hotkeys to increase value on existing actions.'),(0,o.mdx)("h2",{id:"use-tab-as-an-app-hotkey"},"Use Tab as an app Hotkey"),(0,o.mdx)("p",null,"One of the most common hotkeys used in many games is the Tab key."),(0,o.mdx)("p",null,'The tab button is a physically large button, easy to use and to reach which makes it comfortable for players. A lot of games use it as a built-in "special" hotkey that displays important information, scoreboards and similar data, sometimes in a "ShowOnHold" manner: It displays the info while the key is held down, and hides it when Tab is released.  '),(0,o.mdx)("p",null,"Examples:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"In League of Legends, when a player is pressing TAB to see match statistics, you can provide him with additional stats on top."),(0,o.mdx)("li",{parentName:"ul"},"In CS:GO, when a player buys weapons, you can show the player his new weapon's recoil pattern."),(0,o.mdx)("li",{parentName:"ul"},"In Hearthstone, when a player enters the deck / collection screen, you can tell him which of his prepared decks is closest to a good meta deck and what cards he is missing to complete it.")),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},'"Riding" the Tab key and similar hotkeys, when done right and providing value to your users, is a highly recommended practice.')),(0,o.mdx)("p",null,"A LOL example of the popup that appears while the player is holding the tab key (and hides it on release):"),(0,o.mdx)("p",null,(0,o.mdx)("img",{alt:"alt-text",src:n(73265).Z,width:"1893",height:"1006"})),(0,o.mdx)("h2",{id:"implement-tabbing-in-your-app"},'Implement "Tabbing" in Your App'),(0,o.mdx)("p",null,"Start by spotting the hotkeys that your targeted game uses in this fashion - whether it's Tab or other hotkeys. Break down what happens when that key is pressed - Is a new window launched? Is there a new bit of UI? Maybe the champion is doing something? Once mapped, you can think up ways to add value from your app to these screens and automated functions. "),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"/api/settings/hotkeys"},"overwolf.settings.hotkeys")," API offers some useful events for that purpose.",(0,o.mdx)("br",{parentName:"p"}),"\n","You can find the complete info about hotkeys and how to use them in our ",(0,o.mdx)("a",{parentName:"p",href:"hotkeys-best-practices"},"hotkeys best practice")," guide."),(0,o.mdx)("h3",{id:"set-your-hotkey-in-the-manifest"},"Set your hotkey in the manifest"),(0,o.mdx)("p",null,'Overwolf hotkeys now offer a "ShowOnHold" mode like the tab key does in some games.',(0,o.mdx)("br",{parentName:"p"}),"\n",'In order to implement a hotkey which works with an OnHold Tab functionality, we will have to set the hotkey in the manifest as a "hold" hotkey:'),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'"hotkeys": {\n    "show_YourAppName": { \n        "title": "Show Player",\n        "action-type": "custom",\n        "default": "Shift+F9",\n        "passthrough": true,\n        "hold": true\n    }\n}\n')),(0,o.mdx)("h3",{id:"register-to-the-onhold-event"},"Register to the onHold event"),(0,o.mdx)("p",null,"Custom hotkeys will only work when your app is already running.",(0,o.mdx)("br",{parentName:"p"}),"\n","Using a custom hotkey with the app closed will do nothing."),(0,o.mdx)("p",null,"In addition, when you are using a ",(0,o.mdx)("a",{parentName:"p",href:"#hold-hotkeys"},"hold")," hotkey, you should register to the ",(0,o.mdx)("a",{parentName:"p",href:"/api/settings/hotkeys#onhold"},"overwolf.settings.hotkeys.onHold")," event:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"overwolf.settings.hotkeys.onHold.addListener(console.log)\n")),(0,o.mdx)("p",null,"Note that this event will be fired twice - on key down and on key up:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{"name": "ges_showhide", "state": "down"}\n{"name": "ges_showhide", "state": "up"}\n')),(0,o.mdx)("p",null,"Once the tab key is released, we can hide/minimize your window."))}h.isMDXComponent=!0},73265:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tab-example-lol-a93993752370607d1584c70ced66a533.gif"}}]);