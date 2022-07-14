"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5001],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return p},MDXProvider:function(){return s},mdx:function(){return g},useMDXComponents:function(){return i},withMDXComponents:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){return function(t){var a=i(t.components);return n.createElement(e,l({},t,{components:a}))}},i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=i(a),s=r,x=u["".concat(m,".").concat(s)]||u[s]||c[s]||l;return a?n.createElement(x,d(d({ref:t},p),{},{components:a})):n.createElement(x,d({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,m=new Array(l);m[0]=x;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,m[1]=d;for(var p=2;p<l;p++)m[p]=a[p];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}x.displayName="MDXCreateElement"},17790:function(e,t,a){a.r(t),a.d(t,{assets:function(){return i},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var n,r=a(87462),l=a(63366),m=(a(67294),a(3905)),d=["components"],o={id:"dota-underlords",title:"Dota Underlords Game events",hide_title:!0,sidebar_label:"Dota Underlords"},p=void 0,u={unversionedId:"api/games/events/dota-underlords",id:"api/games/events/dota-underlords",title:"Dota Underlords Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/games/events/dota-underlords.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/dota-underlords",permalink:"/api/games/events/dota-underlords",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/dota-underlords.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657792208,formattedLastUpdatedAt:"7/14/2022",frontMatter:{id:"dota-underlords",title:"Dota Underlords Game events",hide_title:!0,sidebar_label:"Dota Underlords"},sidebar:"api",previous:{title:"Dota 2",permalink:"/api/games/events/dota-2"},next:{title:"Escape From Tarkov",permalink:"/api/games/events/escape-from-tarkov"}},i={},s=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"match_info",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>mode</em> note",id:"mode-note",level:4},{value:"<em>round_type</em> note",id:"round_type-note",level:4},{value:"<em>round_state</em> note",id:"round_state-note",level:4},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<em>battle_start</em> note",id:"battle_start-note",level:4},{value:"<em>battle_end</em> note",id:"battle_end-note",level:4},{value:"<em>round_outcome</em> note",id:"round_outcome-note",level:4},{value:"<em>match_outcome</em> note",id:"match_outcome-note",level:4}],c=(n="GameInfo",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),x={toc:s};function g(e){var t=e.components,a=(0,l.Z)(e,d);return(0,m.mdx)("wrapper",(0,r.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("head",null,(0,m.mdx)("meta",{name:"keywords",content:"API for Dota Underlords, Dota Underlords API, SDK for Dota Underlords, Dota Underlords SDK"})),(0,m.mdx)(c,{gameID:21586,showCompliance:!0,showDocs:!1,mdxType:"GameInfo"}),(0,m.mdx)("p",null,"Please read the ",(0,m.mdx)("a",{parentName:"p",href:"."},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,m.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"Dota Underlords game events sample app"))),(0,m.mdx)("h2",{id:"available-features"},"Available Features"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"#match_info"},"match_info"))),(0,m.mdx)("h2",{id:"game-event-status"},"Game event status"),(0,m.mdx)("p",null,"It is highly recommended to communicate errors and warnings to app users. "),(0,m.mdx)("p",null,"Check the current game event status ",(0,m.mdx)("a",{parentName:"p",href:"/status/"},"here"),". Alternately, you can easily check that status from your app itself, ",(0,m.mdx)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,m.mdx)("h2",{id:"gep_internal"},(0,m.mdx)("inlineCode",{parentName:"h2"},"gep_internal")),(0,m.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,m.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,m.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"143.0")))),(0,m.mdx)("h4",{id:"gep_internal-note"},(0,m.mdx)("em",{parentName:"h4"},"gep_internal")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"feature":"gep_internal","category":"gep_internal","key":"version_info","value":"{"local_version":"143.0.10","public_version":"143.0.10","is_updated":true}"}\n')),(0,m.mdx)("h2",{id:"match_info"},"match_info"),(0,m.mdx)("h3",{id:"info-updates-1"},"Info Updates"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"key"),(0,m.mdx)("th",{parentName:"tr",align:null},"Category"),(0,m.mdx)("th",{parentName:"tr",align:null},"Values"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"mode"),(0,m.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"Current-played game mode"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#mode-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"139.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"round_type"),(0,m.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"PVE / PVP"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#round_type-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"139.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"round_state"),(0,m.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,m.mdx)("td",{parentName:"tr",align:null},"State the game is currently in."),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#round_state-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"139.0")))),(0,m.mdx)("h4",{id:"mode-note"},(0,m.mdx)("em",{parentName:"h4"},"mode")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"mode":"Casual"}},"feature":"match_info"}\n')),(0,m.mdx)("h4",{id:"round_type-note"},(0,m.mdx)("em",{parentName:"h4"},"round_type")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"round_type":"{"round":1,"type":"PvE_creep_wave_1_#dac_creep_wave_1"}"}},"feature":"match_info"}\n')),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"round_type":"{"round":4,"type":"PvP"}"}},"feature":"match_info"}\n')),(0,m.mdx)("h4",{id:"round_state-note"},(0,m.mdx)("em",{parentName:"h4"},"round_state")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"round_state":"Ready"}},"feature":"match_info"}\n')),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"round_state":"Combat"}},"feature":"match_info"}\n')),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"round_state":"RoundOver"}},"feature":"match_info"}\n')),(0,m.mdx)("h3",{id:"events"},"Events"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Event"),(0,m.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,m.mdx)("th",{parentName:"tr",align:null},"Fired When"),(0,m.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,m.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"match_start"),(0,m.mdx)("td",{parentName:"tr",align:null},"null"),(0,m.mdx)("td",{parentName:"tr",align:null},"Match started"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"139.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"match_end"),(0,m.mdx)("td",{parentName:"tr",align:null},"null"),(0,m.mdx)("td",{parentName:"tr",align:null},"Match ended"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"139.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"battle_start"),(0,m.mdx)("td",{parentName:"tr",align:null},"null"),(0,m.mdx)("td",{parentName:"tr",align:null},"Combat started"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#battle_start-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"139.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"battle_end"),(0,m.mdx)("td",{parentName:"tr",align:null},"null"),(0,m.mdx)("td",{parentName:"tr",align:null},"Combat ended"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#battle_end-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"139.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"round_outcome"),(0,m.mdx)("td",{parentName:"tr",align:null},"win/lose"),(0,m.mdx)("td",{parentName:"tr",align:null},"Combat ended"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#round_outcome-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"139.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"match_outcome"),(0,m.mdx)("td",{parentName:"tr",align:null},"win/lose + rank"),(0,m.mdx)("td",{parentName:"tr",align:null},"Match ended"),(0,m.mdx)("td",{parentName:"tr",align:null},"See ",(0,m.mdx)("a",{parentName:"td",href:"#match_outcome-note"},"notes")),(0,m.mdx)("td",{parentName:"tr",align:null},"139.0")))),(0,m.mdx)("h4",{id:"match_start-note"},(0,m.mdx)("em",{parentName:"h4"},"match_start")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":""}]}\n')),(0,m.mdx)("h4",{id:"match_end-note"},(0,m.mdx)("em",{parentName:"h4"},"match_end")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":""}]}\n')),(0,m.mdx)("h4",{id:"battle_start-note"},(0,m.mdx)("em",{parentName:"h4"},"battle_start")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"battle_start","data":""}]}\n')),(0,m.mdx)("h4",{id:"battle_end-note"},(0,m.mdx)("em",{parentName:"h4"},"battle_end")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"battle_end","data":""}]}\n')),(0,m.mdx)("h4",{id:"round_outcome-note"},(0,m.mdx)("em",{parentName:"h4"},"round_outcome")," note"),(0,m.mdx)("p",null,'This event currently supports "PVP" rounds ',(0,m.mdx)("em",{parentName:"p"},"ONLY")),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"round_outcome","data":"win"}]}\n')),(0,m.mdx)("h4",{id:"match_outcome-note"},(0,m.mdx)("em",{parentName:"h4"},"match_outcome")," note"),(0,m.mdx)("p",null,"Data Example:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_outcome","data":"{"outcome":"win","rank":1}"}]}\n')))}g.isMDXComponent=!0}}]);