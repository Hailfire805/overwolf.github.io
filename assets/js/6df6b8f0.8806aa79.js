"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5761],{35318:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=o(a),m=r,f=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return a?n.createElement(f,s(s({ref:t},d),{},{components:a})):n.createElement(f,s({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},75145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(25773),r=(a(27378),a(35318));const l={id:"events",image:"/img/embed/api-docs.jpg",title:"overwolf.games.launchers.events API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},s=void 0,i={unversionedId:"api/games/launchers/events/events",id:"api/games/launchers/events/events",title:"overwolf.games.launchers.events API",description:"Returns an object with launcher related events and info-updates (Currently supported only for the League of Legends Launcher).",source:"@site/pages/docs/api/games/launchers/events/events.mdx",sourceDirName:"api/games/launchers/events",slug:"/api/games/launchers/events/",permalink:"/api/games/launchers/events/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/launchers/events/events.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1692100274,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{id:"events",image:"/img/embed/api-docs.jpg",title:"overwolf.games.launchers.events API",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"api",previous:{title:"Launchers IDs",permalink:"/api/games/launchers/ids"},next:{title:"LOL Launcher",permalink:"/api/games/launchers/events/league-of-legends"}},u={},o=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"How to register for features",id:"how-to-register-for-features",level:2},{value:"setRequiredFeatures(launcherClassId, features, callback)",id:"setrequiredfeatureslauncherclassid-features-callback",level:2},{value:"Version added: 0.126",id:"version-added-0126",level:4},{value:"getInfo(launcherClassId, callback)",id:"getinfolauncherclassid-callback",level:2},{value:"Version added: 0.126",id:"version-added-0126-1",level:4},{value:"onInfoUpdates",id:"oninfoupdates",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"onNewEvents",id:"onnewevents",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4},{value:"SetRequiredFeaturesResult Object",id:"setrequiredfeaturesresult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4},{value:"GetInfoResult Object",id:"getinforesult-object",level:2},{value:"Example data: Success",id:"example-data-success-1",level:4},{value:"Example data: Failure",id:"example-data-failure",level:4}],d={toc:o};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Returns an object with launcher related events and info-updates (Currently supported only for the League of Legends Launcher)."),(0,r.kt)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setrequiredfeatureslauncherclassid-features-callback"},"overwolf.games.launchers.events.setRequiredFeatures()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getinfolauncherclassid-callback"},"overwolf.games.launchers.events.getInfo()"))),(0,r.kt)("h2",{id:"events-reference"},"Events Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#oninfoupdates"},"overwolf.games.launchers.events.onInfoUpdates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#onnewevents"},"overwolf.games.launchers.events.onNewEvents"))),(0,r.kt)("h2",{id:"types-reference"},"Types Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setrequiredfeaturesresult-object"},"overwolf.games.launchers.events.SetRequiredFeaturesResult")," Object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getinforesult-object"},"overwolf.games.launchers.events.GetInfoResult")," Object")),(0,r.kt)("h2",{id:"how-to-register-for-features"},"How to register for features"),(0,r.kt)("p",null,"The Launcher Events Provider keeps an info DB with information about the launcher state."),(0,r.kt)("p",null,"Updates for these entries can be received as events by registering an event listener using ",(0,r.kt)("a",{parentName:"p",href:"#oninfoupdates"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.games.launchers.events.onInfoUpdates()")),".  "),(0,r.kt)("p",null,"It is also possible to get the currently available information using ",(0,r.kt)("a",{parentName:"p",href:"#getinfolauncherclassid-callback"},(0,r.kt)("inlineCode",{parentName:"a"},"overwolf.games.launchers.events.getInfo()")),"."),(0,r.kt)("h2",{id:"setrequiredfeatureslauncherclassid-features-callback"},"setRequiredFeatures(launcherClassId, features, callback)"),(0,r.kt)("h4",{id:"version-added-0126"},"Version added: 0.126"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sets the required features from the provider.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"launcherClassId"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Launcher ID of interest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"features"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"String array of features to utilize")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#setrequiredfeaturesresult-object"},"Result: SetRequiredFeaturesResult"),") => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.kt)("h2",{id:"getinfolauncherclassid-callback"},"getInfo(launcherClassId, callback)"),(0,r.kt)("h4",{id:"version-added-0126-1"},"Version added: 0.126"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Gets the current information for a given launcher id.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"launcherClassId"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The launcher Id of interest")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"callback"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("a",{parentName:"td",href:"#getinforesult-object"},"Result: GetInfoResult"),") => void"),(0,r.kt)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,r.kt)("h2",{id:"oninfoupdates"},"onInfoUpdates"),(0,r.kt)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when there are game info updates with a JSON object of the updates.")),(0,r.kt)("h2",{id:"onnewevents"},"onNewEvents"),(0,r.kt)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Fired when there are new game events with a JSON object of the events.")),(0,r.kt)("h2",{id:"setrequiredfeaturesresult-object"},"SetRequiredFeaturesResult Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"success"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"null if success is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"supportedFeatures"),(0,r.kt)("td",{parentName:"tr",align:null},"string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"an array of supported features")))),(0,r.kt)("h4",{id:"example-data-success"},"Example data: Success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"success": true, "supportedFeatures": Array[1])}\n')),(0,r.kt)("h2",{id:"getinforesult-object"},"GetInfoResult Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"success"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"null if success is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"res"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides the current game info")))),(0,r.kt)("h4",{id:"example-data-success-1"},"Example data: Success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{  \n   "success":true,\n   "res":{  \n      "game_flow":{  \n         "phase":"None"\n      },\n      "summoner_info":{  \n         "account_id":"224346939",\n         "display_name":"itaygl",\n         "internal_name":"itaygl",\n         "profile_icon_id":"3902",\n         "summoner_id":"79489298",\n         "summoner_level":"31"\n      },\n      "game_info": {\n         "close_client_during_game": "0"\n      },\n      "credentials": {\n         "token": "cmlvdDpxb2hlamFqeHRzRUI4dGw1TUljSmJR",\n         "port": "65038"\n      }\n\n   }\n}\n')),(0,r.kt)("h4",{id:"example-data-failure"},"Example data: Failure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "success": false, \n   "error": "Launcher isn\'t running or the associated game isn\'t running"\n}\n')))}p.isMDXComponent=!0}}]);