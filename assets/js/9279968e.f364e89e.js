"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8792],{35318:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>d,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>p});var n=t(27378);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(){return l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),p=function(e){return function(a){var t=s(a.components);return n.createElement(e,l({},a,{components:t}))}},s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},g="mdxType",f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,g=p["".concat(m,".").concat(u)]||p[u]||f[u]||l;return t?n.createElement(g,o(o({ref:a},d),{},{components:t})):n.createElement(g,o({ref:a},d))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,m=new Array(l);m[0]=c;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[g]="string"==typeof e?e:r,m[1]=o;for(var d=2;d<l;d++)m[d]=t[d];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},10338:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>m,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=t(25773),r=(t(27378),t(35318));const l={id:"warframe",image:"/img/embed/games/warframe.jpg",title:"Warframe Game events",hide_title:!0,sidebar_label:"Warframe",sidebar_position:0,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},m=void 0,o={unversionedId:"api/games/events/warframe",id:"api/games/events/warframe",title:"Warframe Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/games/events/warframe.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/warframe",permalink:"/api/games/events/warframe",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/warframe.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1687791687,formattedLastUpdatedAt:"Jun 26, 2023",sidebarPosition:0,frontMatter:{id:"warframe",image:"/img/embed/games/warframe.jpg",title:"Warframe Game events",hide_title:!0,sidebar_label:"Warframe",sidebar_position:0,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"Valorant",permalink:"/api/games/events/valorant"},next:{title:"World of Tanks",permalink:"/api/games/events/world-of-tanks"}},i={},d=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game events status",id:"game-events-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>username</em> note",id:"username-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"<em>inventory</em> note",id:"inventory-note",level:4},{value:"<em>highlighted</em> note",id:"highlighted-note",level:4}],p=(s="GameInfo",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var s;const u={toc:d};function g(e){let{components:a,...t}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("head",null,(0,r.mdx)("meta",{name:"keywords",content:"API for Warframe, Warframe API, SDK for Warframe, Warframe SDK"})),(0,r.mdx)(p,{gameId:8954,page:"docs",mdxType:"GameInfo"}),(0,r.mdx)("p",null,"Please read the ",(0,r.mdx)("a",{parentName:"p",href:"../events"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,r.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"Warframe game events sample app"))),(0,r.mdx)("h2",{id:"available-features"},"Available Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#match_info"},"match_info"))),(0,r.mdx)("h2",{id:"game-events-status"},"Game events status"),(0,r.mdx)("p",null,"It's highly recommended to communicate errors and warnings to your app users. Check game event status ",(0,r.mdx)("a",{parentName:"p",href:"/status/"},"here")," or easily check game event status directly from your app ",(0,r.mdx)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,r.mdx)("h2",{id:"gep_internal"},(0,r.mdx)("inlineCode",{parentName:"h2"},"gep_internal")),(0,r.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"143.0")))),(0,r.mdx)("h4",{id:"gep_internal-note"},(0,r.mdx)("em",{parentName:"h4"},"gep_internal")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,r.mdx)("h2",{id:"game_info"},(0,r.mdx)("inlineCode",{parentName:"h2"},"game_info")),(0,r.mdx)("h3",{id:"info-updates-1"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"username"),(0,r.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"Name of local player."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#username-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"156.0")))),(0,r.mdx)("h4",{id:"username-note"},(0,r.mdx)("em",{parentName:"h4"},"username")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"username":"dsa_gfdg"},"feature":"game_info"}\n')),(0,r.mdx)("h2",{id:"match_info"},(0,r.mdx)("inlineCode",{parentName:"h2"},"match_info")),(0,r.mdx)("h3",{id:"info-updates-2"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"inventory"),(0,r.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"Type and amount of items on the local player."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#inventory-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"156.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"highlighted"),(0,r.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"Currently viewed item."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#highlighted-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"157.0")))),(0,r.mdx)("h4",{id:"inventory-note"},(0,r.mdx)("em",{parentName:"h4"},"inventory")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "category": "game_info",\n    "key": "inventory",\n    "value": {"Slots":8},"PremiumCredits":50,"PremiumCreditsFree":50,"PveBonusLoadoutBin":{"Slots":0},"PvpBonusLoadoutBin":{"Slots":0},\n    ...\n    {"ItemCount":1,"ItemType":"Lotus/Types/Recipes/Components/VorBoltRemoverFakeItem"}],\n    "valueLength": 16212\n}\n')),(0,r.mdx)("h4",{id:"highlighted-note"},(0,r.mdx)("em",{parentName:"h4"},"highlighted")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"highlighted":"{"name":"ARCANE FURY","riven_details":[]}"}},"feature":"match_info"}\n\n{"info":{"match_info":{"highlighted":"{"name":"Melee Riven Mod","riven_details":{"lvl":8,"pol":"AP_ATTACK","lim":795832191,"buffs":[{"Tag":"WeaponMeleeComboInitialBonusMod","Value":"+20.2"},{"Tag":"WeaponCritDamageMod","Value":"+77.7"},{"Tag":"WeaponMeleeDamageMod","Value":"+126"}],"curses":[{"Tag":"WeaponStunChanceMod","Value":"-60"}],"compat":"/Lotus/Weapons/Tenno/Melee/Swords/TnRailjackGreatKatana/TnRailJackGreatKatanaWeapon","lvlReq":16,"rerolls":123}}"}},"feature":"match_info"}\n\n')))}g.isMDXComponent=!0}}]);