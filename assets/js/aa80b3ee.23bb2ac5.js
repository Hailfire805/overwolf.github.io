"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7622],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return h},MDXProvider:function(){return m},mdx:function(){return y},useMDXComponents:function(){return d},withMDXComponents:function(){return p}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h=a.createContext({}),p=function(e){return function(t){var n=d(t.components);return a.createElement(e,s({},t,{components:n}))}},d=function(e){var t=a.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(h.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,u=p["".concat(i,".").concat(m)]||p[m]||c[m]||s;return n?a.createElement(u,r(r({ref:t},h),{},{components:n})):a.createElement(u,r({ref:t},h))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var h=2;h<s;h++)i[h]=n[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80714:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return r},metadata:function(){return h},toc:function(){return d}});var a=n(87462),o=n(63366),s=(n(67294),n(3905)),i=["components"],r={id:"hotkeys-best-practices",title:"Hotkeys Best Practices",sidebar_label:"Hotkey best practices"},l=void 0,h={unversionedId:"topics/best-practices/hotkeys-best-practices",id:"topics/best-practices/hotkeys-best-practices",title:"Hotkeys Best Practices",description:"Using Hotkeys",source:"@site/pages/docs/topics/best-practices/hotkeys-best-practices.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/hotkeys-best-practices",permalink:"/topics/best-practices/hotkeys-best-practices",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/best-practices/hotkeys-best-practices.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657711065,formattedLastUpdatedAt:"7/13/2022",frontMatter:{id:"hotkeys-best-practices",title:"Hotkeys Best Practices",sidebar_label:"Hotkey best practices"},sidebar:"topics",previous:{title:"Per-game settings",permalink:"/topics/best-practices/games-settings"},next:{title:"App launch performance",permalink:"/topics/best-practices/launch-time-performance"}},p={},d=[{value:"Using Hotkeys",id:"using-hotkeys",level:2},{value:"Types of hotkeys",id:"types-of-hotkeys",level:2},{value:"Toggle",id:"toggle",level:3},{value:"Custom Hotkeys",id:"custom-hotkeys",level:3},{value:"&quot;Hold&quot; hotkeys",id:"hold-hotkeys",level:2},{value:"Global Hotkeys",id:"global-hotkeys",level:2},{value:"Set through the manifest",id:"set-through-the-manifest",level:3},{value:"Get notified on a Hotkey change",id:"get-notified-on-a-hotkey-change",level:2},{value:"Reassign Hotkeys",id:"reassign-hotkeys",level:2},{value:"Pass through",id:"pass-through",level:2},{value:"Uninstall",id:"uninstall",level:2}],m={toc:d};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.mdx)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h2",{id:"using-hotkeys"},"Using Hotkeys"),(0,s.mdx)("p",null,"Hotkeys are set in the manifest file, under the ",(0,s.mdx)("a",{parentName:"p",href:"/api/manifest#hotkeys-object"},"hotKeys section"),"."),(0,s.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,s.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,s.mdx)("h5",{parentName:"div"},(0,s.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,s.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,s.mdx)("div",{parentName:"div",className:"admonition-content"},(0,s.mdx)("p",{parentName:"div"},"Hotkeys will only work in-game, not on desktop."))),(0,s.mdx)("p",null,"An example of a hotkeys section from the manifest:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'"hotkeys": {\n    "show_YourAppName": {  //hotkey #1 name identifier\n        "title": "Show Player", //hotkey title\n        "action-type": "custom",//toggle or custom\n        "default": "Shift+F9", //key combination\n        "passthrough": true, //pass the keys to the game or not\n        "hold": true //invoke the action only while it\'s being held\n    },\n    "save_YourAppName": { //hotkey #2 name identifier\n        "title": "Save Replay for later",\n        "action-type": "custom",\n        "default": "Ctrl+Shift+F9"\n    }\n}\n')),(0,s.mdx)("h2",{id:"types-of-hotkeys"},"Types of hotkeys"),(0,s.mdx)("p",null,"There are two types of Hotkeys we use:"),(0,s.mdx)("h3",{id:"toggle"},"Toggle"),(0,s.mdx)("p",null,"A special hotkey that toggles the application visibility by showing or hiding it.",(0,s.mdx)("br",{parentName:"p"}),"\n",(0,s.mdx)("strong",{parentName:"p"},"Few apps are using it, as it's the only action that it can do.")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"The advantage is that a toggle hotkey can activate/launch your app even if it's closed and launches your in-game app window.  "),(0,s.mdx)("li",{parentName:"ul"},"After the app is running, toggle it again with the hotkey will hide the window without closing it or the app."),(0,s.mdx)("li",{parentName:"ul"},'Another advantage is that you don\'t have to register for any event. Just define the hotkey as "toggle" in the manifest.')),(0,s.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,s.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,s.mdx)("h5",{parentName:"div"},(0,s.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,s.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,s.mdx)("div",{parentName:"div",className:"admonition-content"},(0,s.mdx)("p",{parentName:"div"},"If you are using a transparent background controller (window), a toggle hotkey will not work properly. Please use a ",(0,s.mdx)("a",{parentName:"p",href:"#custom"},"custom hotkey"),"."))),(0,s.mdx)("h3",{id:"custom-hotkeys"},"Custom Hotkeys"),(0,s.mdx)("p",null,"Defines a custom hotkey to be used by the app.",(0,s.mdx)("br",{parentName:"p"}),"\n","Most apps are using this kind of hotkey, as it can activate any action and you can customize your app's window behavior."),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Custom hotkeys will only function when your app is already running (Unlike Toggle hotkeys, using a custom hotkey with the app closed will do nothing)."),(0,s.mdx)("li",{parentName:"ul"},"Custom hotkeys will only function and get a response from your app after registering the hotkey using the ",(0,s.mdx)("a",{parentName:"li",href:"/api/settings/hotkeys#onpressed"},"overwolf.settings.hotkeys.onPressed")," event."),(0,s.mdx)("li",{parentName:"ul"},"If you are using a ",(0,s.mdx)("a",{parentName:"li",href:"#hold-hotkeys"},"hold")," type hotkey, you should register to the ",(0,s.mdx)("a",{parentName:"li",href:"/api/settings/hotkeys#onhold"},"overwolf.settings.hotkeys.onHold")," event, instead of the ",(0,s.mdx)("a",{parentName:"li",href:"/api/settings/hotkeys#onhold"},"onPressed")," event.")),(0,s.mdx)("div",{className:"admonition admonition-important alert alert--info"},(0,s.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,s.mdx)("h5",{parentName:"div"},(0,s.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,s.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,s.mdx)("div",{parentName:"div",className:"admonition-content"},(0,s.mdx)("p",{parentName:"div"},"If you are using a transparent background controller (window), register your app's hotkeys to the ",(0,s.mdx)("strong",{parentName:"p"},"onPressed")," event, in that window."))),(0,s.mdx)("h2",{id:"hold-hotkeys"},'"Hold" hotkeys'),(0,s.mdx)("p",null,'You can set a hotkey as a "hold" hotkey: a hotkey that functions while pressed down and stops when released, usually used for "ShowOnHold" mode (like the tab key does in some games).'),(0,s.mdx)("p",null,'To implement a hotkey which works with a "ShowOnHold" functionality, you should set it as a "hold" hotkey in the manifest, and register to the ',(0,s.mdx)("a",{parentName:"p",href:"/api/settings/hotkeys#onhold"},"overwolf.settings.hotkeys.onHold")," event."),(0,s.mdx)("p",null,"You can read a detailed example on how to do that ",(0,s.mdx)("a",{parentName:"p",href:"using-tab#set-the-hotkey-in-the-manifest"},"here"),".",(0,s.mdx)("br",{parentName:"p"}),"\n",'This example demonstrates how to set the Tab key as a "hold" hotkey, but of course, you can set any other key as a "hold" hotkey in the same way.  '),(0,s.mdx)("h2",{id:"global-hotkeys"},"Global Hotkeys"),(0,s.mdx)("p",null,"For apps that work in more than one game or global apps there is an option to set hotkeys as global hotkeys.",(0,s.mdx)("br",{parentName:"p"}),"\n","This option is available from the OW client UI or using the ",(0,s.mdx)("a",{parentName:"p",href:"/api/settings/hotkeys#assignhotkey-callback"},"API"),"."),(0,s.mdx)("p",null,"A screenshot from the OW client UI:"),(0,s.mdx)("p",null,(0,s.mdx)("img",{alt:"hotkeys_global",src:n(46021).Z,width:"980",height:"702"})),(0,s.mdx)("p",null,'If you "upgrade" your hotkey to a global hotkey through the OW client "settings" page, the client will try to set this hotkey for all installed games on your machine.'),(0,s.mdx)("p",null,"Whenever hotkeys are added this way but a conflict exists, the hotkey is added as unassigned."),(0,s.mdx)("p",null,"You can get the list of all your app's assigned hotkeys using the ",(0,s.mdx)("a",{parentName:"p",href:"/api/settings/hotkeys#getcallback"},"overwolf.settings.hotkeys.get()"),"."),(0,s.mdx)("h3",{id:"set-through-the-manifest"},"Set through the manifest"),(0,s.mdx)("p",null,"If ",(0,s.mdx)("a",{parentName:"p",href:"/api/manifest#game_targeting"},"game_targeting"),' flag is set to "all", then hotkeys will be set global as default.',(0,s.mdx)("br",{parentName:"p"}),"\n","Whenever hotkeys are added, but a conflict exists, the hotkey is added as unassigned."),(0,s.mdx)("p",null,'To make it more transparent - there is no way to set a specific hotkey as "global" in the manifest other than set "game_targeting: "all".'),(0,s.mdx)("p",null,'If your app was not able to set the hotkeys for all the games, then the user can assign it through the OW client "settings" page or, the dev can set it global through the ',(0,s.mdx)("a",{parentName:"p",href:"/api/settings/hotkeys#assignhotkey-callback"},"API"),". "),(0,s.mdx)("h2",{id:"get-notified-on-a-hotkey-change"},"Get notified on a Hotkey change"),(0,s.mdx)("p",null,"Listen to the ",(0,s.mdx)("a",{parentName:"p",href:"/api/settings/hotkeys#onchanged"},"overwolf.settings.hotkeys.onChanged")," event if you want to get notified when users change your app's hotkeys from the OW client settings page."),(0,s.mdx)("h2",{id:"reassign-hotkeys"},"Reassign Hotkeys"),(0,s.mdx)("p",null,"It is possible to reassign hotkeys directly from apps, or, through the Overwolf client settings page."),(0,s.mdx)("p",null,"What you can do is place a direct link to the relevant settings page, into the hotkeys of a specific game settings, using:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"overwolf://settings/games-overlay?hotkey=hotkey_name_in_manifest&gameId=game_id")),(0,s.mdx)("p",null,"Or, you can use the ",(0,s.mdx)("a",{parentName:"p",href:"/api/settings/hotkeys#assignhotkey-callback"},"overwolf.settings.hotkeys.assign()")," and ",(0,s.mdx)("a",{parentName:"p",href:"/api/settings/hotkeys#unassignhotkey-callback"},"unassign()")," APIs."),(0,s.mdx)("blockquote",null,(0,s.mdx)("p",{parentName:"blockquote"},"It's possible to even use left or right arrows for hotkeys. To do so, you should use the code ",(0,s.mdx)("inlineCode",{parentName:"p"},"Left")," or ",(0,s.mdx)("inlineCode",{parentName:"p"},"Right")," in your manifest.json.")),(0,s.mdx)("h2",{id:"pass-through"},"Pass through"),(0,s.mdx)("p",null,'You can set a hotkey as "passthrough," which means that the hotkey will not interfere with keys from the game.',(0,s.mdx)("br",{parentName:"p"}),"\n",'The key combination will trigger your app hotkey and then will "passthrough" the game.'),(0,s.mdx)("p",null,"Example code from the manifest, for a hotkey that set to pass through:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'"hotkeys": {\n    "show_YourAppName": { \n        "title": "Show Player",\n        "action-type": "custom",\n        "default": "Shift+F9",\n        "passthrough": true,\n    },\n}\n')),(0,s.mdx)("h2",{id:"uninstall"},"Uninstall"),(0,s.mdx)("p",null,"All app hotkeys removed once the extension is uninstalled."))}c.isMDXComponent=!0},46021:function(e,t,n){t.Z=n.p+"assets/images/hotkeys_global-2630b9bd60a3c64d8cb8aae05f71dab7.png"}}]);