"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[802],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>o,MDXProvider:()=>u,mdx:()=>c,useMDXComponents:()=>s,withMDXComponents:()=>p});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(){return m=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},m.apply(this,arguments)}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),p=function(e){return function(a){var t=s(a.components);return n.createElement(e,m({},a,{components:t}))}},s=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(o.Provider,{value:a},e.children)},x={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,m=e.originalType,r=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=s(t),u=l,h=p["".concat(r,".").concat(u)]||p[u]||x[u]||m;return t?n.createElement(h,d(d({ref:a},o),{},{components:t})):n.createElement(h,d({ref:a},o))}));function c(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var m=t.length,r=new Array(m);r[0]=h;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=e,d.mdxType="string"==typeof e?e:l,r[1]=d;for(var o=2;o<m;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},26430:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>x,frontMatter:()=>m,metadata:()=>d,toc:()=>o});var n=t(87462),l=(t(67294),t(3905));const m={id:"halo-infinite",image:"/img/embed/games/halo-infinite.jpg",title:"Halo Infinite Game events",hide_title:!0,sidebar_label:"Halo Infinite",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},r=void 0,d={unversionedId:"api/games/events/halo-infinite",id:"api/games/events/halo-infinite",title:"Halo Infinite Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/games/events/halo-infinite.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/halo-infinite",permalink:"/api/games/events/halo-infinite",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/halo-infinite.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"halo-infinite",image:"/img/embed/games/halo-infinite.jpg",title:"Halo Infinite Game events",hide_title:!0,sidebar_label:"Halo Infinite",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"Fortnite",permalink:"/api/games/events/fortnite"},next:{title:"Hearthstone",permalink:"/api/games/events/hearthstone"}},i={},o=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em>  note",id:"gep_internal--note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>scene</em> note",id:"scene-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"<em>local_player_stats</em>  note",id:"local_player_stats--note",level:4},{value:"<em>playlist</em>  note",id:"playlist--note",level:4},{value:"<em>game_type</em>  note",id:"game_type--note",level:4},{value:"<em>game_mode</em>  note",id:"game_mode--note",level:4},{value:"<em>match_outcome</em>  note",id:"match_outcome--note",level:4},{value:"Events",id:"events",level:3},{value:"<em>match_start</em>  note",id:"match_start--note",level:4},{value:"<em>match_end</em>  note",id:"match_end--note",level:4},{value:"<code>kill</code>",id:"kill",level:2},{value:"Events",id:"events-1",level:3},{value:"<em>kill</em>  note",id:"kill--note",level:4},{value:"<code>assist</code>",id:"assist",level:2},{value:"Events",id:"events-2",level:3},{value:"<em>assist</em>  note",id:"assist--note",level:4},{value:"<code>death</code>",id:"death",level:2},{value:"Events",id:"events-3",level:3},{value:"<em>death</em>  note",id:"death--note",level:4},{value:"<code>roster</code>",id:"roster",level:2},{value:"Info Updates",id:"info-updates-3",level:3},{value:"<code>roster_XX</code> notes",id:"roster_xx-notes",level:4}],p=(s="GameInfo",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)});var s;const u={toc:o};function x(e){let{components:a,...t}=e;return(0,l.mdx)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("head",null,(0,l.mdx)("meta",{name:"keywords",content:"API for Halo Infinite, Halo Infinite API, SDK for Halo Infinite, Halo Infinite SDK"})),(0,l.mdx)(p,{gameID:21854,showCompliance:!0,showDocs:!1,mdxType:"GameInfo"}),(0,l.mdx)("p",null,"Please read the ",(0,l.mdx)("a",{parentName:"p",href:"../events"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,l.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"Halo Infinite game events sample app"))),(0,l.mdx)("h2",{id:"available-features"},"Available Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#match_info"},"match_info")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#kill"},"kill")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#assist"},"assist")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#death"},"death")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"#roster"},"roster"))),(0,l.mdx)("h2",{id:"game-event-status"},"Game event status"),(0,l.mdx)("p",null,"It is highly recommended to communicate errors and warnings to app users.\nCheck the current game event status ",(0,l.mdx)("a",{parentName:"p",href:"/status/"},"here"),". Alternately, you can easily check that status from your app itself, ",(0,l.mdx)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,l.mdx)("h2",{id:"gep_internal"},(0,l.mdx)("inlineCode",{parentName:"h2"},"gep_internal")),(0,l.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"key"),(0,l.mdx)("th",{parentName:"tr",align:null},"Category"),(0,l.mdx)("th",{parentName:"tr",align:null},"Values"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,l.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"143.0")))),(0,l.mdx)("h4",{id:"gep_internal--note"},(0,l.mdx)("em",{parentName:"h4"},"gep_internal"),"  note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,l.mdx)("h2",{id:"game_info"},(0,l.mdx)("inlineCode",{parentName:"h2"},"game_info")),(0,l.mdx)("h3",{id:"info-updates-1"},"Info Updates"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"key"),(0,l.mdx)("th",{parentName:"tr",align:null},"Category"),(0,l.mdx)("th",{parentName:"tr",align:null},"Values"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"scene"),(0,l.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,l.mdx)("td",{parentName:"tr",align:null},"The name of the current scene."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#scene-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"190.0")))),(0,l.mdx)("h4",{id:"scene-note"},(0,l.mdx)("em",{parentName:"h4"},"scene")," note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"game_info":{"scene":"lobby"}},"feature":"game_info"}\n')),(0,l.mdx)("p",null,"List of possible values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"intro"),(0,l.mdx)("li",{parentName:"ul"},"lobby"),(0,l.mdx)("li",{parentName:"ul"},"match_start_countdown"),(0,l.mdx)("li",{parentName:"ul"},"loading"),(0,l.mdx)("li",{parentName:"ul"},"ingame"),(0,l.mdx)("li",{parentName:"ul"},"transfer_to_lobby")),(0,l.mdx)("h2",{id:"match_info"},(0,l.mdx)("inlineCode",{parentName:"h2"},"match_info")),(0,l.mdx)("h3",{id:"info-updates-2"},"Info Updates"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"key"),(0,l.mdx)("th",{parentName:"tr",align:null},"Category"),(0,l.mdx)("th",{parentName:"tr",align:null},"Values"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"local_player_stats"),(0,l.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,l.mdx)("td",{parentName:"tr",align:null},"A variety of in-game stats for local player."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#local_player_stats-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"190.0")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"playlist"),(0,l.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,l.mdx)("td",{parentName:"tr",align:null},"The playlist the player selected."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#playlist-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"191.0")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"game_type"),(0,l.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,l.mdx)("td",{parentName:"tr",align:null},"The selected game type, important only for non custm games"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#game_type-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"191.0")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"game_mode"),(0,l.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,l.mdx)("td",{parentName:"tr",align:null},"The selected game mode"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#game_mode-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"191.0")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"match_outcome"),(0,l.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,l.mdx)("td",{parentName:"tr",align:null},"The final march outcome victory / defeat"),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#match_outcome-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"210.0")))),(0,l.mdx)("h4",{id:"local_player_stats--note"},(0,l.mdx)("em",{parentName:"h4"},"local_player_stats"),"  note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'{"info":{"match_info":{"local_player_stats":"{"Score":0,"RoundsWon":1,"RoundsTied":0,"PersonalScore":1350,"Kills":8,"Deaths":13,"Assists":8,"KDA":0,"Suicides":0,"Betrayals":0,"AverageLifeDuration":0,"BestKillingSpree":3,"Headshots":0,"ShotsFired":0,"ShotsHit":0,"AccuracyPercentage":0,"MeleeKills":3,"GrenadeKills":1,"PowerWeaponKills":0,"DamageDone":0,"DamageTaken":0}"}},"feature":"match_info"}\n')),(0,l.mdx)("p",null,"Important note:\nSome of the stat parameters at the moment don't return any values (KDA, AccuracyPercentage, ShotsHit, DamageDone, DamageTaken, ShotsFired, AverageLifeDuration and more)."),(0,l.mdx)("h4",{id:"playlist--note"},(0,l.mdx)("em",{parentName:"h4"},"playlist"),"  note"),(0,l.mdx)("p",null,"Possible values are:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"quick_play"),(0,l.mdx)("li",{parentName:"ul"},"bot_bootcamp"),(0,l.mdx)("li",{parentName:"ul"},"btb"),(0,l.mdx)("li",{parentName:"ul"},"fiesta"),(0,l.mdx)("li",{parentName:"ul"},"ffa_slayer"),(0,l.mdx)("li",{parentName:"ul"},"tactical_slayer"),(0,l.mdx)("li",{parentName:"ul"},"team_slayer"),(0,l.mdx)("li",{parentName:"ul"},"team_doubles"),(0,l.mdx)("li",{parentName:"ul"},"team_snipers"),(0,l.mdx)("li",{parentName:"ul"},"rumble_pit"),(0,l.mdx)("li",{parentName:"ul"},"land_grab"),(0,l.mdx)("li",{parentName:"ul"},"ranked_arena_open"),(0,l.mdx)("li",{parentName:"ul"},"ranked_arena_soloduo"),(0,l.mdx)("li",{parentName:"ul"},"custom"),(0,l.mdx)("li",{parentName:"ul"},"entrenched")),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'{"feature":"match_info","category":"match_info","key":"playlist","value":"bot_bootcamp"}\n')),(0,l.mdx)("p",null,"Important - This info-update change only if the user change playlist"),(0,l.mdx)("h4",{id:"game_type--note"},(0,l.mdx)("em",{parentName:"h4"},"game_type"),"  note"),(0,l.mdx)("p",null,"Possible values are:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"arena"),(0,l.mdx)("li",{parentName:"ul"},"btb"),(0,l.mdx)("li",{parentName:"ul"},"academy"),(0,l.mdx)("li",{parentName:"ul"},"campaign"),(0,l.mdx)("li",{parentName:"ul"},"landgrab")),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'{"feature":"match_info","category":"match_info","key":"game_type","value":"arena"}\n')),(0,l.mdx)("p",null,"Important - This info-update change only if the user change game type"),(0,l.mdx)("h4",{id:"game_mode--note"},(0,l.mdx)("em",{parentName:"h4"},"game_mode"),"  note"),(0,l.mdx)("p",null,"If the player uses a non-custom game use game_type to understand what type of game the player has selected.\nIn this case the possible values are:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"oddball"),(0,l.mdx)("li",{parentName:"ul"},"ctf"),(0,l.mdx)("li",{parentName:"ul"},"btb"),(0,l.mdx)("li",{parentName:"ul"},"slayer"),(0,l.mdx)("li",{parentName:"ul"},"ctf"),(0,l.mdx)("li",{parentName:"ul"},"stockpile"),(0,l.mdx)("li",{parentName:"ul"},"total_control"),(0,l.mdx)("li",{parentName:"ul"},"strongholds")),(0,l.mdx)("p",null,"If the player created a custom game you will get one of the values in the list, it that case you can ignore game_type\nIn this case the possible values are:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"arena:ctf"),(0,l.mdx)("li",{parentName:"ul"},"arena:ffa "),(0,l.mdx)("li",{parentName:"ul"},"arena:oddball"),(0,l.mdx)("li",{parentName:"ul"},"arena:onectf"),(0,l.mdx)("li",{parentName:"ul"},"arena:slayer"),(0,l.mdx)("li",{parentName:"ul"},"arena:strongholds"),(0,l.mdx)("li",{parentName:"ul"},"arena:landgrab"),(0,l.mdx)("li",{parentName:"ul"},"btb:slayer"),(0,l.mdx)("li",{parentName:"ul"},"btb:ctf"),(0,l.mdx)("li",{parentName:"ul"},"btb:stockpile"),(0,l.mdx)("li",{parentName:"ul"},"btb:total_control"),(0,l.mdx)("li",{parentName:"ul"},"fiesta:slayer"),(0,l.mdx)("li",{parentName:"ul"},"ranked:ctf"),(0,l.mdx)("li",{parentName:"ul"},"ranked:oddball"),(0,l.mdx)("li",{parentName:"ul"},"ranked:slayer"),(0,l.mdx)("li",{parentName:"ul"},"ranked:strongholds")),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'{"feature":"match_info","category":"match_info","key":"game_mode","value":"ctf"}\nOR\n{"feature":"match_info","category":"match_info","key":"game_mode","value":"btb:ctf"}\n')),(0,l.mdx)("h4",{id:"match_outcome--note"},(0,l.mdx)("em",{parentName:"h4"},"match_outcome"),"  note"),(0,l.mdx)("p",null,"Match outcome at the end of the match"),(0,l.mdx)("p",null,"Possible values:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"victory"),(0,l.mdx)("li",{parentName:"ul"},"defeat"),(0,l.mdx)("li",{parentName:"ul"},"tie")),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'{"feature":"match_info","category":"match_info","key":"match_outcome","value":"victory"}\n')),(0,l.mdx)("h3",{id:"events"},"Events"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Event"),(0,l.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,l.mdx)("th",{parentName:"tr",align:null},"Fired When"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"match_start"),(0,l.mdx)("td",{parentName:"tr",align:null},"null"),(0,l.mdx)("td",{parentName:"tr",align:null},"When loading into map."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"190.0")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"match_end"),(0,l.mdx)("td",{parentName:"tr",align:null},"null"),(0,l.mdx)("td",{parentName:"tr",align:null},"When disconnecting from map."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"190.0")))),(0,l.mdx)("h4",{id:"match_start--note"},(0,l.mdx)("em",{parentName:"h4"},"match_start"),"  note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":"null"}]}\n')),(0,l.mdx)("h4",{id:"match_end--note"},(0,l.mdx)("em",{parentName:"h4"},"match_end"),"  note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":"null"}]}\n')),(0,l.mdx)("h2",{id:"kill"},(0,l.mdx)("inlineCode",{parentName:"h2"},"kill")),(0,l.mdx)("h3",{id:"events-1"},"Events"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Event"),(0,l.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,l.mdx)("th",{parentName:"tr",align:null},"Fired When"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"kill"),(0,l.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,l.mdx)("td",{parentName:"tr",align:null},"Killing an opponent."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#kill-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"190.0")))),(0,l.mdx)("h4",{id:"kill--note"},(0,l.mdx)("em",{parentName:"h4"},"kill"),"  note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"kill","data":"1"}]}\n')),(0,l.mdx)("h2",{id:"assist"},(0,l.mdx)("inlineCode",{parentName:"h2"},"assist")),(0,l.mdx)("h3",{id:"events-2"},"Events"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Event"),(0,l.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,l.mdx)("th",{parentName:"tr",align:null},"Fired When"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"assist"),(0,l.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,l.mdx)("td",{parentName:"tr",align:null},"Assist in killing an opponent."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#assist-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"190.0")))),(0,l.mdx)("h4",{id:"assist--note"},(0,l.mdx)("em",{parentName:"h4"},"assist"),"  note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"assist","data":"1"}]}\n')),(0,l.mdx)("h2",{id:"death"},(0,l.mdx)("inlineCode",{parentName:"h2"},"death")),(0,l.mdx)("h3",{id:"events-3"},"Events"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Event"),(0,l.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,l.mdx)("th",{parentName:"tr",align:null},"Fired When"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"death"),(0,l.mdx)("td",{parentName:"tr",align:null},"Integer"),(0,l.mdx)("td",{parentName:"tr",align:null},"Dying to an opponent."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#death-note"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"190.0")))),(0,l.mdx)("h4",{id:"death--note"},(0,l.mdx)("em",{parentName:"h4"},"death"),"  note"),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"death","data":"1"}]}\n')),(0,l.mdx)("h2",{id:"roster"},(0,l.mdx)("inlineCode",{parentName:"h2"},"roster")),(0,l.mdx)("h3",{id:"info-updates-3"},"Info Updates"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"key"),(0,l.mdx)("th",{parentName:"tr",align:null},"Category"),(0,l.mdx)("th",{parentName:"tr",align:null},"Values"),(0,l.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,l.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"roster_XX"),(0,l.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,l.mdx)("td",{parentName:"tr",align:null},"This feature provides the entire list of players."),(0,l.mdx)("td",{parentName:"tr",align:null},"See ",(0,l.mdx)("a",{parentName:"td",href:"#roster_xx-notes"},"notes")),(0,l.mdx)("td",{parentName:"tr",align:null},"190.0")))),(0,l.mdx)("h4",{id:"roster_xx-notes"},(0,l.mdx)("inlineCode",{parentName:"h4"},"roster_XX")," notes"),(0,l.mdx)("p",null,"This feature provides the entire list of players."),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"feature":"match_info","category":"match_info","key":"roster_0","value":{"name":"Cocotte7425","team":1,"local":false}}\n')),(0,l.mdx)("p",null,"As you can see, this object includes:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"name")," \u2013 Player's name"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"team")," \u2013 The team of the player."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("strong",{parentName:"li"},"local")," - \u201ctrue\u201d when the player is the local player that play, \"false\u201d when it's another player in the game.")),(0,l.mdx)("p",null,"When a player \u201cleaves\u201d the match, the roster will be updated with another player that is in the match.\nWhen the match end, the roster value is returned empty, example: "),(0,l.mdx)("p",null,"Data Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-json"},'{"feature":"match_info","category":"match_info","key":"roster_0","value":{}}\n')))}x.isMDXComponent=!0}}]);