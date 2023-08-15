"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3002],{35318:(e,t,o)=>{o.d(t,{Zo:()=>f,kt:()=>v});var a=o(27378);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},f=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,f=n(e,["components","mdxType","originalType","parentName"]),c=p(o),m=r,v=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return o?a.createElement(v,i(i({ref:t},f),{},{components:o})):a.createElement(v,i({ref:t},f))}));function v(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=o.length,i=new Array(l);i[0]=m;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[c]="string"==typeof e?e:r,i[1]=n;for(var p=2;p<l;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},72874:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>n,toc:()=>p});var a=o(25773),r=(o(27378),o(35318));const l={id:"api",image:"/img/embed/api-docs.jpg",title:"Overwolf API Overview",sidebar_label:"Overview",sidebar_position:-3,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,n={unversionedId:"api/api",id:"api/api",title:"Overwolf API Overview",description:"Overwolf APIs are global components that allow interaction with various Overwolf features, third party services and server-side queries.",source:"@site/pages/docs/api/api.mdx",sourceDirName:"api",slug:"/api/",permalink:"/api/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/api.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1692100274,formattedLastUpdatedAt:"Aug 15, 2023",sidebarPosition:-3,frontMatter:{id:"api",image:"/img/embed/api-docs.jpg",title:"Overwolf API Overview",sidebar_label:"Overview",sidebar_position:-3,sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"package.json",permalink:"/api/electron/package/"},next:{title:"Changelogs",permalink:"/api/changelogs/"}},s={},p=[{value:"API&#39;s Reference",id:"apis-reference",level:2},{value:"overwolf.benchmarking",id:"overwolfbenchmarking",level:2},{value:"overwolf.campaigns",id:"overwolfcampaigns",level:2},{value:"overwolf.cryptography",id:"overwolfcryptography",level:2},{value:"overwolf.extensions",id:"overwolfextensions",level:2},{value:"overwolf.games",id:"overwolfgames",level:2},{value:"overwolf.games.events",id:"overwolfgamesevents",level:2},{value:"overwolf.games.tracked",id:"overwolfgamestracked",level:2},{value:"overwolf.io",id:"overwolfio",level:2},{value:"overwolf.logitech",id:"overwolflogitech",level:2},{value:"overwolf.media",id:"overwolfmedia",level:2},{value:"overwolf.notifications",id:"overwolfnotifications",level:2},{value:"overwolf.os",id:"overwolfos",level:2},{value:"overwolf.profile",id:"overwolfprofile",level:2},{value:"overwolf.profile.subscriptions",id:"overwolfprofilesubscriptions",level:2},{value:"overwolf.settings",id:"overwolfsettings",level:2},{value:"overwolf.social",id:"overwolfsocial",level:2},{value:"overwolf.streaming",id:"overwolfstreaming",level:2},{value:"overwolf.utils",id:"overwolfutils",level:2},{value:"overwolf.web",id:"overwolfweb",level:2},{value:"overwolf.windows",id:"overwolfwindows",level:2}],f={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Overwolf APIs are global components that allow interaction with various Overwolf features, third party services and server-side queries."),(0,r.kt)("h2",{id:"apis-reference"},"API's Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfbenchmarking"},"overwolf.benchmarking")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfcampaigns"},"overwolf.campaigns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfcryptography"},"overwolf.cryptography")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfextensions"},"overwolf.extensions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfgames"},"overwolf.games")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfgamesevents"},"overwolf.games.events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfgamestracked"},"overwolf.games.tracked")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfio"},"overwolf.io")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolflogitech"},"overwolf.logitech")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfmedia"},"overwolf.media")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfnotifications"},"overwolf.notifications")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfos"},"overwolf.os")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfprofile"},"overwolf.profile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfprofilesubscriptions"},"overwolf.profile.subscriptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfsettings"},"overwolf.settings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfsocial"},"overwolf.social")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfstreaming"},"overwolf.streaming")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfutils"},"overwolf.utils")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfweb"},"overwolf.web")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#overwolfwindows"},"overwolf.windows"))),(0,r.kt)("h2",{id:"overwolfbenchmarking"},"overwolf.benchmarking"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This API is deprecated, and is not guaranteed to work perfectly!")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/deprecated/benchmarking"},"overwolf.benchmarking")," API to query system stats and benchmarks.")),(0,r.kt)("p",null,"Common use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get hardware information."),(0,r.kt)("li",{parentName:"ul"},"Get FPS performance information.")),(0,r.kt)("h2",{id:"overwolfcampaigns"},"overwolf.campaigns"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/campaigns/crossapp"},"overwolf.campaigns")," API to get info about active campagins.")),(0,r.kt)("p",null,"Common use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Get info about active campagins."),(0,r.kt)("li",{parentName:"ul"},"Allows crossapp-promotions: One app can promote another app and then get an indication for a successful conversion.")),(0,r.kt)("h2",{id:"overwolfcryptography"},"overwolf.cryptography"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/cryptography"},"overwolf.cryptography")," API to encrypt and decrypt ciphertext.")),(0,r.kt)("p",null,"Common use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Secure app data and variables."),(0,r.kt)("li",{parentName:"ul"},"Encrypt localStorage variables that store auth-tokens when using OAuth.")),(0,r.kt)("h2",{id:"overwolfextensions"},"overwolf.extensions"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/extensions"},"overwolf.extensions")," API to operate or retrieve details on a specific Overwolf app.")),(0,r.kt)("p",null,"Common use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Launch another app."),(0,r.kt)("li",{parentName:"ul"},"Get the running state of an Overwolf app."),(0,r.kt)("li",{parentName:"ul"},"Get the manifest.json data of an app.")),(0,r.kt)("h2",{id:"overwolfgames"},"overwolf.games"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/games"},"overwolf.games")," API to receive basic game information.")),(0,r.kt)("p",null,"Common use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your app wants to know whether an Overwolf supported game was launched or closed"),(0,r.kt)("li",{parentName:"ul"},"Get the currently running game's name, Overwolf ID, screen resolution and more information")),(0,r.kt)("h2",{id:"overwolfgamesevents"},"overwolf.games.events"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/games/events"},"overwolf.games.events")," API to get notified when certain interesting events happens while playing in a certain game. This could be a death, a kill, an item purchase or anything else we're able to log from that game (see the Available Game Events list for more ideas).")),(0,r.kt)("h2",{id:"overwolfgamestracked"},"overwolf.games.tracked"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/games/tracked"},"overwolf.games.tracked")," API to receive basic game information for games that are defined as unsupported in the gameslist.\nThe usage of this API requires you to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"tracked")," property under the ",(0,r.kt)("a",{parentName:"p",href:"/api/manifest#launch_event_settings-array"},"launch_events")," property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json")," ")),(0,r.kt)("h2",{id:"overwolfio"},"overwolf.io"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/io"},"overwolf.io")," API to check whether a certain file exists or in order to write content in a file. For more I/O functionalities, please use our ",(0,r.kt)("a",{parentName:"p",href:"/topics/using-plugins/simple-io-plugin"},"simple I/O plugin"),".")),(0,r.kt)("h2",{id:"overwolflogitech"},"overwolf.logitech"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/logitech"},"overwolf.logitech")," as an interface for Logitech hardware such as Logitech ARX and Logitech LED keyboards.")),(0,r.kt)("p",null,"Common use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Light the user's LED keyboard in a certain pattern when an interesting event has happened in-game by using the overwolf.game.events API and the overwolf.logitech API together.")),(0,r.kt)("h2",{id:"overwolfmedia"},"overwolf.media"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/media"},"overwolf.media")," API to capture a screenshot or create a GIF of the game currently played.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("a",{parentName:"li",href:"/api/media/replays"},"overwolf.media.replays")," API to capture a short video replay of the game currently played."),(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("a",{parentName:"li",href:"/api/media/videos"},"overwolf.media.videos")," API to create a video composition, delete video files, or get the information of video files that were created by this app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("del",{parentName:"li"},"Use the ",(0,r.kt)("a",{parentName:"del",href:"/api/deprecated/audio"},"overwolf.media.audio")," API to play an audio file")," - This API is now deprecated, please Use the html5 ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio"},"audio")," tag instead.")),(0,r.kt)("h2",{id:"overwolfnotifications"},"overwolf.notifications"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/notifications"},"overwolf.notifications")," API for sending windows OS toast notifications.")),(0,r.kt)("h2",{id:"overwolfos"},"overwolf.os"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/os"},"overwolf.os")," API for Operating System related functions.")),(0,r.kt)("h2",{id:"overwolfprofile"},"overwolf.profile"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/profile"},"overwolf.profile")," API to get Overwolf account information for the current user, this includes user name, log-in events and more.")),(0,r.kt)("h2",{id:"overwolfprofilesubscriptions"},"overwolf.profile.subscriptions"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/api/profile/subscriptions"},"overwolf.profile.subscriptions")," Provides functions and events to help with user profile subscription management.")),(0,r.kt)("h2",{id:"overwolfsettings"},"overwolf.settings"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/settings"},"overwolf.settings")," API to view and modify one of the following Overwolf preferences:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set hotkeys, register a function for a hotkey, or retrieve an existing hotkey key combination"),(0,r.kt)("li",{parentName:"ul"},"Retrieve the currently selected Overwolf client language"),(0,r.kt)("li",{parentName:"ul"},"Video recording location, capture settings, quality settings etc.")),(0,r.kt)("h2",{id:"overwolfsocial"},"overwolf.social"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"/api/social"},"overwolf.social")," provides access to social networks we support:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/social/youtube"},"overwolf.social.youtube")," Provides access to the YouTube social provider."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/social/discord"},"overwolf.social.discord")," Provides access to the Discord social provider."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/social/twitter"},"overwolf.social.twitter")," Provides access to the Twitter social provider."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/social/reddit"},"overwolf.social.reddit")," Provides access to the Reddit social provider."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("del",{parentName:"li"},(0,r.kt)("a",{parentName:"del",href:"/api/deprecated/gfycat"},"overwolf.social.gfycat")," Provides access to the Gfycat social provider")," - Deprecated.")),(0,r.kt)("h2",{id:"overwolfstreaming"},"overwolf.streaming"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/streaming"},"overwolf.streaming")," API to capture a video of the current game, or stream the current game directly to ",(0,r.kt)("a",{parentName:"p",href:"https://www.twitch.tv/"},"Twitch.tv"))),(0,r.kt)("h2",{id:"overwolfutils"},"overwolf.utils"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/utils"},"overwolf.utils")," API to get the user's system information, send keystrokes to the game, open URLs in default browser and more.")),(0,r.kt)("p",null,"Common use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Getting a string that is currently placed in the clipboard"),(0,r.kt)("li",{parentName:"ul"},"Getting the user's system information including OS, monitors, CPU, GPU, input devices etc."),(0,r.kt)("li",{parentName:"ul"},"Opening a URL in a new browser window"),(0,r.kt)("li",{parentName:"ul"},"Sending keystrokes to the running game")),(0,r.kt)("h2",{id:"overwolfweb"},"overwolf.web"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/web"},"overwolf.web")," API to open a local HTTP web-server.")),(0,r.kt)("h2",{id:"overwolfwindows"},"overwolf.windows"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Use the ",(0,r.kt)("a",{parentName:"p",href:"/api/windows"},"overwolf.windows")," API to to create, modify or interact with your app's windows.")),(0,r.kt)("p",null,"Common use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open a new app window"),(0,r.kt)("li",{parentName:"ul"},"Change window location or size"),(0,r.kt)("li",{parentName:"ul"},"Get information about a specific app window - id, name, width, height, location and more."),(0,r.kt)("li",{parentName:"ul"},"Minimize or maximize a window"),(0,r.kt)("li",{parentName:"ul"},"Facilitate communications between windows")))}c.isMDXComponent=!0}}]);