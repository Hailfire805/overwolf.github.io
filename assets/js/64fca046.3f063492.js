"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3913],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return p},MDXProvider:function(){return s},mdx:function(){return N},useMDXComponents:function(){return u},withMDXComponents:function(){return o}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){return function(t){var a=u(t.components);return n.createElement(e,l({},t,{components:a}))}},u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},x={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=u(a),s=r,g=o["".concat(m,".").concat(s)]||o[s]||x[s]||l;return a?n.createElement(g,d(d({ref:t},p),{},{components:a})):n.createElement(g,d({ref:t},p))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,m=new Array(l);m[0]=g;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,m[1]=d;for(var p=2;p<l;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1479:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return i},default:function(){return x},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),m=["components"],d={id:"ids",title:"Games IDs",sidebar_label:"Games IDs"},i=void 0,p={unversionedId:"api/games/ids",id:"api/games/ids",title:"Games IDs",description:"What is an Overwolf Supported Game?",source:"@site/pages/docs/api/games/ids.mdx",sourceDirName:"api/games",slug:"/api/games/ids",permalink:"/api/games/ids",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/ids.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657780987,formattedLastUpdatedAt:"7/14/2022",frontMatter:{id:"ids",title:"Games IDs",sidebar_label:"Games IDs"},sidebar:"api",previous:{title:"Various External APIs",permalink:"/api/games/external-apis"},next:{title:"overwolf.games.inputTracking",permalink:"/api/games/input-tracking"}},o={},u=[{value:"What is an Overwolf Supported Game?",id:"what-is-an-overwolf-supported-game",level:2},{value:"What is the Game ID",id:"what-is-the-game-id",level:2},{value:"The gamelist.xml file",id:"the-gamelistxml-file",level:2},{value:"Game-ID and Instance-ID",id:"game-id-and-instance-id",level:2},{value:"Top 30 Game IDs",id:"top-30-game-ids",level:2},{value:"Game launcher IDs",id:"game-launcher-ids",level:2}],s={toc:u};function x(e){var t=e.components,a=(0,r.Z)(e,m);return(0,l.mdx)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h2",{id:"what-is-an-overwolf-supported-game"},"What is an Overwolf Supported Game?"),(0,l.mdx)("p",null,'In Overwolf, when we refer to a "supported game" it could mean one of two levels of support:'),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Overlay support - games that support overlay injection.",(0,l.mdx)("br",{parentName:"p"}),"\n","In these games, we can display OW apps as an overlay, and make use of Overwolf APIs.",(0,l.mdx)("br",{parentName:"p"}),"\n","The full list of games that support overlay injection can be found in the ",(0,l.mdx)("a",{parentName:"p",href:"#the-gamelistxml-file"},"gamelist.xml")," file.")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Game events support - games which support overlay injection as well as real-time game events.",(0,l.mdx)("br",{parentName:"p"}),"\n","You can create OW apps for these games, that leverage game events using the ",(0,l.mdx)("a",{parentName:"p",href:"."},"overwolf.games.events")," API.",(0,l.mdx)("br",{parentName:"p"}),"\n","The full list of games that supports events can be found ",(0,l.mdx)("a",{parentName:"p",href:"/status/"},"here"),"."),(0,l.mdx)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,l.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,l.mdx)("h5",{parentName:"div"},(0,l.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,l.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,l.mdx)("div",{parentName:"div",className:"admonition-content"},(0,l.mdx)("p",{parentName:"div"},"Game events can vary between games. If you'd like us to enable a new game event, you can request it ",(0,l.mdx)("a",{parentName:"p",href:"https://discuss.overwolf.com/c/game-events-features/42"},"here"),"."))))),(0,l.mdx)("h2",{id:"what-is-the-game-id"},"What is the Game ID"),(0,l.mdx)("p",null,"Each ",(0,l.mdx)("a",{parentName:"p",href:"#what-is-an-overwolf-supported-game"},"supported game")," has its own unique Game ID."),(0,l.mdx)("p",null,"Game IDs are used in your app\u2019s manifest.json in multiple ways:  "),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("a",{parentName:"p",href:"../manifest#game_targeting"},"game_targeting")," property - A list of games which enable overlay for this app.  ")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("a",{parentName:"p",href:"../manifest#game_events"},"game_events")," property - A list of games for which game events are required.")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},(0,l.mdx)("a",{parentName:"p",href:"../manifest#launch_events"},"launch_events")," property -  A list of games triggering the app to launch."))),(0,l.mdx)("h2",{id:"the-gamelistxml-file"},"The gamelist.xml file"),(0,l.mdx)("p",null,"We support overlay injection in a vast and growing number of games.",(0,l.mdx)("br",{parentName:"p"}),"\n","The list is kept up to date, and you can find it in your local Overwolf app data folder after installing Overwolf."),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Navigate to your ",(0,l.mdx)("inlineCode",{parentName:"p"},"%localappdata%")," folder and open the ",(0,l.mdx)("inlineCode",{parentName:"p"},"overwolf")," folder.")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Open the Game List XML file (named with a number postfix, for example, gamelistXXX.xml, higher number means newer version), and search your game by name.")),(0,l.mdx)("li",{parentName:"ol"},(0,l.mdx)("p",{parentName:"li"},"Under each game, you can find game ID listed.",(0,l.mdx)("br",{parentName:"p"}),"\n","If you didn\u2019t find the game you need, ",(0,l.mdx)("a",{parentName:"p",href:"/support/contact-us"},"contact us"),"."))),(0,l.mdx)("h2",{id:"game-id-and-instance-id"},"Game-ID and Instance-ID"),(0,l.mdx)("p",null,"A single game can have multiple executables: Steam, GOG, 32 / 64-bit clients, etc.",(0,l.mdx)("br",{parentName:"p"}),"\n",'We differentiate between them by adding one digit to each game ID, which is called an "Instance ID."',(0,l.mdx)("br",{parentName:"p"}),"\n","Basically, you have the base game ID, and then a series of instances (212160, 212161, \u2026) "),(0,l.mdx)("p",null,"When you call ",(0,l.mdx)("a",{parentName:"p",href:".#ongameinfoupdated"},"overwolf.games.onGameInfoUpdated")," you will get the same full ID including the instance ID.",(0,l.mdx)("br",{parentName:"p"}),"\n",'Besides, there is a file called "gamelist.xml" in the OW client folder that contains all the supported game ids, including instance ID.\nIn order to translate the instance ID into the game ID that needs to be used in the manifest, you can divide the instance ID by 10 and round down.'),(0,l.mdx)("p",null,"For example for Fortnite: in order to get 21216 instead of 212161, you can do:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"Math.floor(gameInfoResult.gameInfo.id/10)\n")),(0,l.mdx)("p",null,"You can see how we use it in the ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/events-sample-apps/blob/master/fortnite-sample-app/main.js#L81"},"Fortnite events sample")," app."),(0,l.mdx)("p",null,"Note that the ",(0,l.mdx)("a",{parentName:"p",href:".#runninggameinfo-object"},"RunningGameInfo object")," also has a ",(0,l.mdx)("inlineCode",{parentName:"p"},"classId")," property, which already equals the game ID."),(0,l.mdx)("h2",{id:"top-30-game-ids"},"Top 30 Game IDs"),(0,l.mdx)("details",{open:!0},(0,l.mdx)("summary",null,"Listed here are games that support game events"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"#"),(0,l.mdx)("th",{parentName:"tr",align:null},"Game Title"),(0,l.mdx)("th",{parentName:"tr",align:null},"Game ID"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"1"),(0,l.mdx)("td",{parentName:"tr",align:null},"Ancestors Legacy"),(0,l.mdx)("td",{parentName:"tr",align:null},"21236")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"2"),(0,l.mdx)("td",{parentName:"tr",align:null},"Apex Legends"),(0,l.mdx)("td",{parentName:"tr",align:null},"21566")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"3"),(0,l.mdx)("td",{parentName:"tr",align:null},"Axie infinity origin"),(0,l.mdx)("td",{parentName:"tr",align:null},"21960")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"4"),(0,l.mdx)("td",{parentName:"tr",align:null},"Battlerite Royale"),(0,l.mdx)("td",{parentName:"tr",align:null},"21450")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"5"),(0,l.mdx)("td",{parentName:"tr",align:null},"Call of Duty: Modern Warfare"),(0,l.mdx)("td",{parentName:"tr",align:null},"21626")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"6"),(0,l.mdx)("td",{parentName:"tr",align:null},"Counter-Strike: Global Offensive"),(0,l.mdx)("td",{parentName:"tr",align:null},"7764")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"7"),(0,l.mdx)("td",{parentName:"tr",align:null},"Dauntless"),(0,l.mdx)("td",{parentName:"tr",align:null},"21214")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"8"),(0,l.mdx)("td",{parentName:"tr",align:null},"Dota 2"),(0,l.mdx)("td",{parentName:"tr",align:null},"7314")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"9"),(0,l.mdx)("td",{parentName:"tr",align:null},"Dota Underlords"),(0,l.mdx)("td",{parentName:"tr",align:null},"21586")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"10"),(0,l.mdx)("td",{parentName:"tr",align:null},"Escape From Tarkov"),(0,l.mdx)("td",{parentName:"tr",align:null},"21634")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"11"),(0,l.mdx)("td",{parentName:"tr",align:null},"Final Fantasy"),(0,l.mdx)("td",{parentName:"tr",align:null},"6350")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"12"),(0,l.mdx)("td",{parentName:"tr",align:null},"Football Manager 2021"),(0,l.mdx)("td",{parentName:"tr",align:null},"21666")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"13"),(0,l.mdx)("td",{parentName:"tr",align:null},"Football Manager 2022"),(0,l.mdx)("td",{parentName:"tr",align:null},"21856")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"14"),(0,l.mdx)("td",{parentName:"tr",align:null},"Fortnite"),(0,l.mdx)("td",{parentName:"tr",align:null},"21216")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"15"),(0,l.mdx)("td",{parentName:"tr",align:null},"Halo Infinite"),(0,l.mdx)("td",{parentName:"tr",align:null},"21854")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"16"),(0,l.mdx)("td",{parentName:"tr",align:null},"Hearthstone: Heroes of Warcraft"),(0,l.mdx)("td",{parentName:"tr",align:null},"9898")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"17"),(0,l.mdx)("td",{parentName:"tr",align:null},"Heroes of the Storm"),(0,l.mdx)("td",{parentName:"tr",align:null},"10624")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"18"),(0,l.mdx)("td",{parentName:"tr",align:null},"Hunt: Showdown"),(0,l.mdx)("td",{parentName:"tr",align:null},"21328")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"19"),(0,l.mdx)("td",{parentName:"tr",align:null},"League of Legends"),(0,l.mdx)("td",{parentName:"tr",align:null},"5426")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"20"),(0,l.mdx)("td",{parentName:"tr",align:null},"Legends of Runeterra"),(0,l.mdx)("td",{parentName:"tr",align:null},"21620")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"21"),(0,l.mdx)("td",{parentName:"tr",align:null},"Magic the Gathering"),(0,l.mdx)("td",{parentName:"tr",align:null},"21308")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"22"),(0,l.mdx)("td",{parentName:"tr",align:null},"Minecraft"),(0,l.mdx)("td",{parentName:"tr",align:null},"8032")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"23"),(0,l.mdx)("td",{parentName:"tr",align:null},"New World"),(0,l.mdx)("td",{parentName:"tr",align:null},"21816")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"24"),(0,l.mdx)("td",{parentName:"tr",align:null},"Overwatch"),(0,l.mdx)("td",{parentName:"tr",align:null},"10844")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"25"),(0,l.mdx)("td",{parentName:"tr",align:null},"Path of Exile"),(0,l.mdx)("td",{parentName:"tr",align:null},"7212")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"26"),(0,l.mdx)("td",{parentName:"tr",align:null},"PUBG"),(0,l.mdx)("td",{parentName:"tr",align:null},"10906")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"27"),(0,l.mdx)("td",{parentName:"tr",align:null},"PUBG lite"),(0,l.mdx)("td",{parentName:"tr",align:null},"21598")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"28"),(0,l.mdx)("td",{parentName:"tr",align:null},"Rocket League"),(0,l.mdx)("td",{parentName:"tr",align:null},"10798")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"29"),(0,l.mdx)("td",{parentName:"tr",align:null},"Smite"),(0,l.mdx)("td",{parentName:"tr",align:null},"8134")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"30"),(0,l.mdx)("td",{parentName:"tr",align:null},"Splitgate"),(0,l.mdx)("td",{parentName:"tr",align:null},"21404")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"31"),(0,l.mdx)("td",{parentName:"tr",align:null},"StarCraft II"),(0,l.mdx)("td",{parentName:"tr",align:null},"5855")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"32"),(0,l.mdx)("td",{parentName:"tr",align:null},"Tom Clancy\u2019s Rainbow Six: Siege"),(0,l.mdx)("td",{parentName:"tr",align:null},"10826")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"33"),(0,l.mdx)("td",{parentName:"tr",align:null},"Valheim"),(0,l.mdx)("td",{parentName:"tr",align:null},"21668")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"34"),(0,l.mdx)("td",{parentName:"tr",align:null},"VALORANT"),(0,l.mdx)("td",{parentName:"tr",align:null},"21640")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"35"),(0,l.mdx)("td",{parentName:"tr",align:null},"Warface"),(0,l.mdx)("td",{parentName:"tr",align:null},"7784")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"36"),(0,l.mdx)("td",{parentName:"tr",align:null},"Warframe"),(0,l.mdx)("td",{parentName:"tr",align:null},"8954")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"37"),(0,l.mdx)("td",{parentName:"tr",align:null},"World Of Tanks"),(0,l.mdx)("td",{parentName:"tr",align:null},"6365")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"38"),(0,l.mdx)("td",{parentName:"tr",align:null},"World of Warcraft"),(0,l.mdx)("td",{parentName:"tr",align:null},"765")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"39"),(0,l.mdx)("td",{parentName:"tr",align:null},"World of Warships"),(0,l.mdx)("td",{parentName:"tr",align:null},"10746"))))),(0,l.mdx)("h2",{id:"game-launcher-ids"},"Game launcher IDs"),(0,l.mdx)("p",null,"IDs for Launchers such as the League of Legends launcher can be found ",(0,l.mdx)("a",{parentName:"p",href:"launchers/ids"},"here"),"."))}x.isMDXComponent=!0}}]);