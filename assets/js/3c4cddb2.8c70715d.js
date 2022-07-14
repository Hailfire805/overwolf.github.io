"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6810],{3905:function(e,a,n){n.r(a),n.d(a,{MDXContext:function(){return i},MDXProvider:function(){return s},mdx:function(){return x},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(){return l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l.apply(this,arguments)}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function m(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),p=function(e){return function(a){var n=u(a.components);return t.createElement(e,l({},a,{components:n}))}},u=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):d(d({},a),e)),n},s=function(e){var a=u(e.components);return t.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,f=p["".concat(o,".").concat(s)]||p[s]||c[s]||l;return n?t.createElement(f,d(d({ref:a},i),{},{components:n})):t.createElement(f,d({ref:a},i))}));function x(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var d={};for(var m in a)hasOwnProperty.call(a,m)&&(d[m]=a[m]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var i=2;i<l;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4778:function(e,a,n){n.r(a),n.d(a,{assets:function(){return u},contentTitle:function(){return i},default:function(){return x},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return s}});var t,r=n(87462),l=n(63366),o=(n(67294),n(3905)),d=["components"],m={id:"world-of-warcraft",title:"World of Warcraft Game events",hide_title:!0,sidebar_label:"World of Warcraft"},i=void 0,p={unversionedId:"api/games/events/world-of-warcraft",id:"api/games/events/world-of-warcraft",title:"World of Warcraft Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/games/events/world-of-warcraft.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/world-of-warcraft",permalink:"/api/games/events/world-of-warcraft",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/world-of-warcraft.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657792208,formattedLastUpdatedAt:"7/14/2022",frontMatter:{id:"world-of-warcraft",title:"World of Warcraft Game events",hide_title:!0,sidebar_label:"World of Warcraft"},sidebar:"api",previous:{title:"World of Tanks",permalink:"/api/games/events/world-of-tanks"},next:{title:"World of Warships",permalink:"/api/games/events/world-of-warships"}},u={},s=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>game_info</code>",id:"game_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"<em>group_applicants</em> note",id:"group_applicants-note",level:4},{value:"<code>addons</code>",id:"addons",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"<em>addon</em> note",id:"addon-note",level:4}],c=(t="GameInfo",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),f={toc:s};function x(e){var a=e.components,n=(0,l.Z)(e,d);return(0,o.mdx)("wrapper",(0,r.Z)({},f,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("head",null,(0,o.mdx)("meta",{name:"keywords",content:"API for World of Warcraft, World of Warcraft API, SDK for World of Warcraft, World of Warcraft SDK"})),(0,o.mdx)(c,{gameID:765,showCompliance:!0,showDocs:!1,mdxType:"GameInfo"}),(0,o.mdx)("p",null,"Please read the ",(0,o.mdx)("a",{parentName:"p",href:"."},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,o.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"World of Warcraft game events sample app"))),(0,o.mdx)("p",null,"An official Blizzard API is available at the following link - ",(0,o.mdx)("a",{parentName:"p",href:"https://develop.battle.net/"},"https://develop.battle.net/"),".\nIf you have further requests for events that you require please contact us at ",(0,o.mdx)("a",{parentName:"p",href:"mailto:developers@overwolf.com"},"developers@overwolf.com")),(0,o.mdx)("h2",{id:"available-features"},"Available Features"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#game_info"},"game_info")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#addons"},"addons"))),(0,o.mdx)("h2",{id:"gep_internal"},(0,o.mdx)("inlineCode",{parentName:"h2"},"gep_internal")),(0,o.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"key"),(0,o.mdx)("th",{parentName:"tr",align:null},"Category"),(0,o.mdx)("th",{parentName:"tr",align:null},"Values"),(0,o.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,o.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,o.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,o.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,o.mdx)("td",{parentName:"tr",align:null},"See ",(0,o.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,o.mdx)("td",{parentName:"tr",align:null},"143.0")))),(0,o.mdx)("h4",{id:"gep_internal-note"},(0,o.mdx)("em",{parentName:"h4"},"gep_internal")," note"),(0,o.mdx)("p",null,"Data Example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,o.mdx)("h2",{id:"game_info"},(0,o.mdx)("inlineCode",{parentName:"h2"},"game_info")),(0,o.mdx)("h3",{id:"info-updates-1"},"Info Updates"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"key"),(0,o.mdx)("th",{parentName:"tr",align:null},"Category"),(0,o.mdx)("th",{parentName:"tr",align:null},"Values"),(0,o.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,o.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"group_applicants"),(0,o.mdx)("td",{parentName:"tr",align:null},"game_info"),(0,o.mdx)("td",{parentName:"tr",align:null},"The amount of applicants and information regarding their item score, role, class and name of their server."),(0,o.mdx)("td",{parentName:"tr",align:null},"See ",(0,o.mdx)("a",{parentName:"td",href:"#group_applicants-note"},"notes")),(0,o.mdx)("td",{parentName:"tr",align:null},"146.0.7")))),(0,o.mdx)("h4",{id:"group_applicants-note"},(0,o.mdx)("em",{parentName:"h4"},"group_applicants")," note"),(0,o.mdx)("p",null,"Data Example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "info": {\n        "game_info": {\n            "group_applicants": "{"Shivanpally":{"player_name" : "Shivanpally", "server_name" : "Draenor", "applicant_id" : "1", "application_status" : "1", "level"             : "120", "item_level" : "477", "honor_level" : "6", "role" : "8","class" : "2"},\n            "M\xea\xear\xe8s":{"player_name" : "M\xea\xear\xe8s", "server_name" : "TarrenMill", "applicant_id" : "3", "application_status" : "1", "level" : "120", "item_level" \n            : "478", "honor_level" : "0", "role" : "12","class" : "11"},\n            "Kayleb":{"player_name" : "Kayleb", "server_name" : "Blackhand", "applicant_id" : "2", "application_status" : "1", "level" : "120", "item_level" : "480",             "honor_level" : "214", "role" : "4","class" : "7"}}"\n        }\n    },\n    "feature": "game_info"\n}\n')),(0,o.mdx)("p",null,"Possible values for ",(0,o.mdx)("inlineCode",{parentName:"p"},"application_status"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"0 - None"),(0,o.mdx)("li",{parentName:"ul"},"1 - Applied"),(0,o.mdx)("li",{parentName:"ul"},"2 - Invited"),(0,o.mdx)("li",{parentName:"ul"},"3 - Failed"),(0,o.mdx)("li",{parentName:"ul"},"4 - Cancelled"),(0,o.mdx)("li",{parentName:"ul"},"5 - Declined"),(0,o.mdx)("li",{parentName:"ul"},"6- DeclinedFull"),(0,o.mdx)("li",{parentName:"ul"},"7 - DeclinedDelist"),(0,o.mdx)("li",{parentName:"ul"},"8 - Timedout"),(0,o.mdx)("li",{parentName:"ul"},"9 - Invitedeclined"),(0,o.mdx)("li",{parentName:"ul"},"10 - Inviteaccepted")),(0,o.mdx)("p",null,"Possible values for ",(0,o.mdx)("inlineCode",{parentName:"p"},"role"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"2- tank"),(0,o.mdx)("li",{parentName:"ul"},"4- healer"),(0,o.mdx)("li",{parentName:"ul"},"8- damage")),(0,o.mdx)("p",null,"Possible values for ",(0,o.mdx)("inlineCode",{parentName:"p"},"class"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Warrior = 1"),(0,o.mdx)("li",{parentName:"ul"},"Paladin = 2"),(0,o.mdx)("li",{parentName:"ul"},"Hunter = 3"),(0,o.mdx)("li",{parentName:"ul"},"Rogue = 4"),(0,o.mdx)("li",{parentName:"ul"},"Priest = 5"),(0,o.mdx)("li",{parentName:"ul"},"Death Knight = 6"),(0,o.mdx)("li",{parentName:"ul"},"Shaman = 7"),(0,o.mdx)("li",{parentName:"ul"},"Mage = 8"),(0,o.mdx)("li",{parentName:"ul"},"Warlock = 9"),(0,o.mdx)("li",{parentName:"ul"},"Monk = 10"),(0,o.mdx)("li",{parentName:"ul"},"Druid = 11"),(0,o.mdx)("li",{parentName:"ul"},"Demon Hunter = 12")),(0,o.mdx)("h2",{id:"addons"},(0,o.mdx)("inlineCode",{parentName:"h2"},"addons")),(0,o.mdx)("h3",{id:"info-updates-2"},"Info Updates"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"key"),(0,o.mdx)("th",{parentName:"tr",align:null},"Category"),(0,o.mdx)("th",{parentName:"tr",align:null},"Values"),(0,o.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,o.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"addon_xx"),(0,o.mdx)("td",{parentName:"tr",align:null},"addons"),(0,o.mdx)("td",{parentName:"tr",align:null},"Name, version number (if exists), and status of addon."),(0,o.mdx)("td",{parentName:"tr",align:null},"See ",(0,o.mdx)("a",{parentName:"td",href:"#addon-note"},"notes")),(0,o.mdx)("td",{parentName:"tr",align:null},"189.0")))),(0,o.mdx)("h4",{id:"addon-note"},(0,o.mdx)("em",{parentName:"h4"},"addon")," note"),(0,o.mdx)("p",null,"Data Example:"),(0,o.mdx)("p",null,"Possible values:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"0 - Loading"),(0,o.mdx)("li",{parentName:"ul"},"1 - Loaded"),(0,o.mdx)("li",{parentName:"ul"},"2 - Disabled"),(0,o.mdx)("li",{parentName:"ul"},"3 - Unknown")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"addons":{"addon_10":"{"name":"DBM-StatusBarTimers","version":"8110645","status":"1"}"}},"feature":"addons"}\n')))}x.isMDXComponent=!0}}]);