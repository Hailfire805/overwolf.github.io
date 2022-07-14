"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4997],{3905:function(e,a,t){t.r(a),t.d(a,{MDXContext:function(){return o},MDXProvider:function(){return x},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(){return m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},m.apply(this,arguments)}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),p=function(e){return function(a){var t=u(a.components);return n.createElement(e,m({},a,{components:t}))}},u=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},x=function(e){var a=u(e.components);return n.createElement(o.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,m=e.originalType,r=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=u(t),x=l,N=p["".concat(r,".").concat(x)]||p[x]||s[x]||m;return t?n.createElement(N,d(d({ref:a},o),{},{components:t})):n.createElement(N,d({ref:a},o))}));function h(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var m=t.length,r=new Array(m);r[0]=N;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=e,d.mdxType="string"==typeof e?e:l,r[1]=d;for(var o=2;o<m;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},42457:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return x}});var n,l=t(87462),m=t(63366),r=(t(67294),t(3905)),d=["components"],i={id:"overwatch",title:"Overwatch Game events",hide_title:!0,sidebar_label:"Overwatch"},o=void 0,p={unversionedId:"api/games/events/overwatch",id:"api/games/events/overwatch",title:"Overwatch Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/games/events/overwatch.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/overwatch",permalink:"/api/games/events/overwatch",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/overwatch.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657792208,formattedLastUpdatedAt:"7/14/2022",frontMatter:{id:"overwatch",title:"Overwatch Game events",hide_title:!0,sidebar_label:"Overwatch"},sidebar:"api",previous:{title:"New World",permalink:"/api/games/events/new-world"},next:{title:"Path of Exile",permalink:"/api/games/events/path-of-exile"}},u={},x=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>game_state</em> note:",id:"game_state-note",level:4},{value:"<em>game_mode</em> note",id:"game_mode-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"<em>map</em> note",id:"map-note",level:4},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<code>kill</code>",id:"kill",level:2},{value:"Info Updates",id:"info-updates-3",level:3},{value:"<em>eliminations</em> note",id:"eliminations-note",level:4},{value:"<em>objective_kills</em> note",id:"objective_kills-note",level:4},{value:"Events",id:"events-1",level:3},{value:"<em>elimination</em> note",id:"elimination-note",level:4},{value:"<em>objective_kill</em> note",id:"objective_kill-note",level:4},{value:"<code>death</code>",id:"death",level:2},{value:"Info Updates",id:"info-updates-4",level:3},{value:"<em>death</em> note",id:"death-note",level:4},{value:"Events",id:"events-2",level:3},{value:"<em>death</em> note",id:"death-note-1",level:4}],s=(n="GameInfo",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),N={toc:x};function h(e){var a=e.components,t=(0,m.Z)(e,d);return(0,r.mdx)("wrapper",(0,l.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("head",null,(0,r.mdx)("meta",{name:"keywords",content:"API for Overwatch, Overwatch API, SDK for Overwatch, Overwatch SDK"})),(0,r.mdx)(s,{gameID:10844,showCompliance:!0,showDocs:!1,mdxType:"GameInfo"}),(0,r.mdx)("p",null,"Please read the ",(0,r.mdx)("a",{parentName:"p",href:"."},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,r.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"OVERWATCH game events sample app"))),(0,r.mdx)("h2",{id:"available-features"},"Available Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#match_info"},"match_info")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#kill"},"kill")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#death"},"death"))),(0,r.mdx)("h2",{id:"game-event-status"},"Game event status"),(0,r.mdx)("p",null,"It is highly recommended to communicate errors and warnings to app users."),(0,r.mdx)("p",null,"Check the current game event status ",(0,r.mdx)("a",{parentName:"p",href:"/status/"},"here"),". Alternately, you can easily check that status from your app itself, ",(0,r.mdx)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,r.mdx)("h2",{id:"gep_internal"},(0,r.mdx)("inlineCode",{parentName:"h2"},"gep_internal")),(0,r.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"143.0")))),(0,r.mdx)("h4",{id:"gep_internal-note"},(0,r.mdx)("em",{parentName:"h4"},"gep_internal")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,r.mdx)("h2",{id:"game_info"},(0,r.mdx)("inlineCode",{parentName:"h2"},"game_info")),(0,r.mdx)("h3",{id:"info-updates-1"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"game_state"),(0,r.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"Current state of the game."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#game_state-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"151.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"game_mode"),(0,r.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"Currently played game-mode."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#game_mode-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"151.0")))),(0,r.mdx)("h4",{id:"game_state-note"},(0,r.mdx)("em",{parentName:"h4"},"game_state")," note:"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"game_state":"loading_screen_start"}},"feature":"game_info"}\n{"info":{"game_info":{"game_state":"game_loaded"}},"feature":"game_info"}\n{"info":{"game_info":{"game_state":"match_in_progress"}},"feature":"game_info"}\n{"info":{"game_info":{"game_state":"match_ended"}},"feature":"game_info"}\n')),(0,r.mdx)("h4",{id:"game_mode-note"},(0,r.mdx)("em",{parentName:"h4"},"game_mode")," note"),(0,r.mdx)("p",null,"Be wary that this is not supported in game-browser."),(0,r.mdx)("p",null,"Full list of game-modes:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},'0003 = "Junkensteins Revenge"'),(0,r.mdx)("li",{parentName:"ul"},'0007 = "Ctf"'),(0,r.mdx)("li",{parentName:"ul"},'0008 = "Meis Snowball Offensive"'),(0,r.mdx)("li",{parentName:"ul"},'0009 = "Elimination"'),(0,r.mdx)("li",{parentName:"ul"},'0015 = "Uprising"'),(0,r.mdx)("li",{parentName:"ul"},'0016 = "Skirmish"'),(0,r.mdx)("li",{parentName:"ul"},'0020 = "Assault"'),(0,r.mdx)("li",{parentName:"ul"},'0021 = "Escort"'),(0,r.mdx)("li",{parentName:"ul"},'0022 = "Hybrid"'),(0,r.mdx)("li",{parentName:"ul"},'0023 = "Control"'),(0,r.mdx)("li",{parentName:"ul"},'0025 = "Tutorial"'),(0,r.mdx)("li",{parentName:"ul"},'0026 = "Uprising All Heroes"'),(0,r.mdx)("li",{parentName:"ul"},'0029 = "Team Deathmatch"'),(0,r.mdx)("li",{parentName:"ul"},'0030 = "Deathmatch"'),(0,r.mdx)("li",{parentName:"ul"},'0032 = "Lucioball"'),(0,r.mdx)("li",{parentName:"ul"},'0037 = "Retribution"'),(0,r.mdx)("li",{parentName:"ul"},'0041 = "Yeti Hunter"'),(0,r.mdx)("li",{parentName:"ul"},'0042 = "Halloween Holdout Endless"'),(0,r.mdx)("li",{parentName:"ul"},'0061 = "Calypso Heromode"'),(0,r.mdx)("li",{parentName:"ul"},'0067 = "Storm Rising"'),(0,r.mdx)("li",{parentName:"ul"},'0074 = "Survivor"'),(0,r.mdx)("li",{parentName:"ul"},'0089 = "Snowball Deathmatch"'),(0,r.mdx)("li",{parentName:"ul"},'0090 = "Practice Range"')),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"game_mode":"16"}},"feature":"game_info"}\n')),(0,r.mdx)("p",null,'Note that on the response the leading zeros are removed ("0030" => "30")'),(0,r.mdx)("h2",{id:"match_info"},(0,r.mdx)("inlineCode",{parentName:"h2"},"match_info")),(0,r.mdx)("h3",{id:"info-updates-2"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"pseudo_match_id"),(0,r.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"The current match\u2019s ID code.",(0,r.mdx)("br",null),(0,r.mdx)("br",null),"Example:",(0,r.mdx)("br",null),(0,r.mdx)("br",null)," ",(0,r.mdx)("inlineCode",{parentName:"td"},"0c0ea3df-97ea-4d3a-b1f6-f8e34042251f")),(0,r.mdx)("td",{parentName:"tr",align:null},"This is an Overwolf-generated code, unrelated to Blizzard."),(0,r.mdx)("td",{parentName:"tr",align:null},"159.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"map"),(0,r.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"Name of currently played map."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#map-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"151.0")))),(0,r.mdx)("h4",{id:"map-note"},(0,r.mdx)("em",{parentName:"h4"},"map")," note"),(0,r.mdx)("p",null,"Important to note there are some values that are still unknown. Most of them are listed down here."),(0,r.mdx)("p",null,"Possible map values:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},'0091 = "Temple Of Anubis"'),(0,r.mdx)("li",{parentName:"ul"},'0212 = "Kingdom Kings Row"'),(0,r.mdx)("li",{parentName:"ul"},'0357 = "Hanamura"'),(0,r.mdx)("li",{parentName:"ul"},'0388 = "Watchpoint Gibraltar"'),(0,r.mdx)("li",{parentName:"ul"},'0468 = "Numbani"'),(0,r.mdx)("li",{parentName:"ul"},'0475 = "Volskaya Industries"'),(0,r.mdx)("li",{parentName:"ul"},'0687 = "Hollywood"'),(0,r.mdx)("li",{parentName:"ul"},'0707 = "Dorado"'),(0,r.mdx)("li",{parentName:"ul"},'1207 = "Nepal"'),(0,r.mdx)("li",{parentName:"ul"},'1467 = "Route 66"'),(0,r.mdx)("li",{parentName:"ul"},'1633 = "Tutorial"'),(0,r.mdx)("li",{parentName:"ul"},'1634 = "Lijiang Tower"'),(0,r.mdx)("li",{parentName:"ul"},'1645 = "Ilios"'),(0,r.mdx)("li",{parentName:"ul"},'1672 = "Practice Range"'),(0,r.mdx)("li",{parentName:"ul"},'1677 = "Eichenwalde"'),(0,r.mdx)("li",{parentName:"ul"},'1694 = "Oasis"'),(0,r.mdx)("li",{parentName:"ul"},'1707 = "Hollywood Halloween"'),(0,r.mdx)("li",{parentName:"ul"},'1713 = "Kingdom Kings Row Winter"'),(0,r.mdx)("li",{parentName:"ul"},'1715 = "Estadio Das Ras"'),(0,r.mdx)("li",{parentName:"ul"},'1717 = "Hanamura Winter"'),(0,r.mdx)("li",{parentName:"ul"},'1719 = "Lijiang Tower Lunar New Year"'),(0,r.mdx)("li",{parentName:"ul"},'1735 = "Vpp Green Room"'),(0,r.mdx)("li",{parentName:"ul"},'1737 = "Junkensteins Revenge Halloween"'),(0,r.mdx)("li",{parentName:"ul"},'1745 = "Ecopoint Antarctica"'),(0,r.mdx)("li",{parentName:"ul"},'1747 = "Horizon Lunar Colony"'),(0,r.mdx)("li",{parentName:"ul"},'1797 = "Necropolis"'),(0,r.mdx)("li",{parentName:"ul"},'1804 = "Black Forest"'),(0,r.mdx)("li",{parentName:"ul"},'1805 = "Ecopoint Antarctica Winter"'),(0,r.mdx)("li",{parentName:"ul"},'1809 = "Lijiang Garden Lunar New Year"'),(0,r.mdx)("li",{parentName:"ul"},'1810 = "Lijiang Night Market Lunar New Year"'),(0,r.mdx)("li",{parentName:"ul"},'1815 = "Nepal Sanctum"'),(0,r.mdx)("li",{parentName:"ul"},'1818 = "Lijiang Control Center Lunar New Year"'),(0,r.mdx)("li",{parentName:"ul"},'1820 = "Castillo"'),(0,r.mdx)("li",{parentName:"ul"},'1846 = "Nepal Village"'),(0,r.mdx)("li",{parentName:"ul"},'1848 = "Nepal Shrine"'),(0,r.mdx)("li",{parentName:"ul"},'1850 = "Ilios Well"'),(0,r.mdx)("li",{parentName:"ul"},'1853 = "Ilios Lighthouse"'),(0,r.mdx)("li",{parentName:"ul"},'1854 = "Ilios Ruins"'),(0,r.mdx)("li",{parentName:"ul"},'1860 = "Lijiang Control Center"'),(0,r.mdx)("li",{parentName:"ul"},'1861 = "Lijiang Garden"'),(0,r.mdx)("li",{parentName:"ul"},'1862 = "Lijiang Night Market"'),(0,r.mdx)("li",{parentName:"ul"},'1866 = "Oasis City Center"'),(0,r.mdx)("li",{parentName:"ul"},'1868 = "Oasis Gardens"'),(0,r.mdx)("li",{parentName:"ul"},'1869 = "Oasis University"'),(0,r.mdx)("li",{parentName:"ul"},'1878 = "Junkertown"'),(0,r.mdx)("li",{parentName:"ul"},'1886 = "Blizzard World"'),(0,r.mdx)("li",{parentName:"ul"},'1939 = "Sydney Harbour Arena"'),(0,r.mdx)("li",{parentName:"ul"},'1953 = "Ayutthaya"'),(0,r.mdx)("li",{parentName:"ul"},'1956 = "Chateau Guillard"'),(0,r.mdx)("li",{parentName:"ul"},'2018 = "Busan"'),(0,r.mdx)("li",{parentName:"ul"},'2036 = "Eichenwalde Halloween"'),(0,r.mdx)("li",{parentName:"ul"},'2039 = "Black Forest Winter"'),(0,r.mdx)("li",{parentName:"ul"},'2045 = "Nepal Village Winter"'),(0,r.mdx)("li",{parentName:"ul"},'2102 = "Chateau Guillard Halloween"'),(0,r.mdx)("li",{parentName:"ul"},'2161 = "Rialto"'),(0,r.mdx)("li",{parentName:"ul"},'2192 = "Petra"'),(0,r.mdx)("li",{parentName:"ul"},'2193 = "Paris"'),(0,r.mdx)("li",{parentName:"ul"},'2346 = "Busan Stadium"'),(0,r.mdx)("li",{parentName:"ul"},'2628 = "Havana"'),(0,r.mdx)("li",{parentName:"ul"},'2651 = "Blizzard World Winter"'),(0,r.mdx)("li",{parentName:"ul"},'2682 = "Busan Sanctuary Lunar New Year"'),(0,r.mdx)("li",{parentName:"ul"},'2694 = "Busan Downtown Lunar New Year"'),(0,r.mdx)("li",{parentName:"ul"},'3136 = "Workshop Island"'),(0,r.mdx)("li",{parentName:"ul"},'3140 = "Workshop Expanse"'),(0,r.mdx)("li",{parentName:"ul"},'3144 = "Workshop Chamber"'),(0,r.mdx)("li",{parentName:"ul"},'3280 = "Workshop Expanse Night"'),(0,r.mdx)("li",{parentName:"ul"},'3281 = "Workshop Island Night"')),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"map":"357"}},"feature":"match_info"}\n')),(0,r.mdx)("p",null,'Note that on the response the leading zeros are removed ("0030" => "30")'),(0,r.mdx)("h3",{id:"events"},"Events"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Event"),(0,r.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,r.mdx)("th",{parentName:"tr",align:null},"Fired When (announcement)"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"match_start"),(0,r.mdx)("td",{parentName:"tr",align:null},"null"),(0,r.mdx)("td",{parentName:"tr",align:null},"Match started."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"150.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"match_end"),(0,r.mdx)("td",{parentName:"tr",align:null},"null"),(0,r.mdx)("td",{parentName:"tr",align:null},"Match ended."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"150.0")))),(0,r.mdx)("h4",{id:"match_start-note"},(0,r.mdx)("em",{parentName:"h4"},"match_start")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"name":"match_start","data":""}\n')),(0,r.mdx)("h4",{id:"match_end-note"},(0,r.mdx)("em",{parentName:"h4"},"match_end")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"name":"match_end","data":""}\n')),(0,r.mdx)("h2",{id:"kill"},(0,r.mdx)("inlineCode",{parentName:"h2"},"kill")),(0,r.mdx)("h3",{id:"info-updates-3"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"eliminations"),(0,r.mdx)("td",{parentName:"tr",align:null},"kill"),(0,r.mdx)("td",{parentName:"tr",align:null},"Total amount of eliminations."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#eliminations-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"151.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"objective_kills"),(0,r.mdx)("td",{parentName:"tr",align:null},"kill"),(0,r.mdx)("td",{parentName:"tr",align:null},"Total amount of objective kills."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#objective_kills-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"151.0")))),(0,r.mdx)("h4",{id:"eliminations-note"},(0,r.mdx)("em",{parentName:"h4"},"eliminations")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"kill":{"eliminations":"6"}},"feature":"kill"}\n')),(0,r.mdx)("h4",{id:"objective_kills-note"},(0,r.mdx)("em",{parentName:"h4"},"objective_kills")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"kill":{"objective_kills":"2"}},"feature":"kill"}\n')),(0,r.mdx)("h3",{id:"events-1"},"Events"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Event"),(0,r.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,r.mdx)("th",{parentName:"tr",align:null},"Fired When (announcement)"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"elimination"),(0,r.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,r.mdx)("td",{parentName:"tr",align:null},"Elimination is performed."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#elimination-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"150.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"objective_kill"),(0,r.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,r.mdx)("td",{parentName:"tr",align:null},"Objective kill is performed.."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#objective_kill-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"150.0")))),(0,r.mdx)("h4",{id:"elimination-note"},(0,r.mdx)("em",{parentName:"h4"},"elimination")," note"),(0,r.mdx)("p",null,"The event includes the total amount performed in the match."),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"name":"elimination","data":"8"}\n')),(0,r.mdx)("h4",{id:"objective_kill-note"},(0,r.mdx)("em",{parentName:"h4"},"objective_kill")," note"),(0,r.mdx)("p",null,"The event includes the total amount performed in the match."),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"name":"objective_kill","data":"3"}\n')),(0,r.mdx)("h2",{id:"death"},(0,r.mdx)("inlineCode",{parentName:"h2"},"death")),(0,r.mdx)("h3",{id:"info-updates-4"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"deaths"),(0,r.mdx)("td",{parentName:"tr",align:null},"death"),(0,r.mdx)("td",{parentName:"tr",align:null},"Total amount of deaths."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#death-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"151.0")))),(0,r.mdx)("h4",{id:"death-note"},(0,r.mdx)("em",{parentName:"h4"},"death")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"death":{"deaths":"5"}},"feature":"death"}\n')),(0,r.mdx)("h3",{id:"events-2"},"Events"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Event"),(0,r.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,r.mdx)("th",{parentName:"tr",align:null},"Fired When (announcement)"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"death"),(0,r.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,r.mdx)("td",{parentName:"tr",align:null},"Death has occurred."),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#death-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"150.0")))),(0,r.mdx)("h4",{id:"death-note-1"},(0,r.mdx)("em",{parentName:"h4"},"death")," note"),(0,r.mdx)("p",null,"The event includes the total amount performed in the match."),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"name":"death","data":"2"}\n')))}h.isMDXComponent=!0}}]);