"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9841],{35318:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>i,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>s,withMDXComponents:()=>p});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){return function(t){var a=s(t.components);return n.createElement(e,l({},t,{components:a}))}},s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},x=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,c=p["".concat(m,".").concat(u)]||p[u]||h[u]||l;return a?n.createElement(c,o(o({ref:t},i),{},{components:a})):n.createElement(c,o({ref:t},i))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,m=new Array(l);m[0]=x;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:r,m[1]=o;for(var i=2;i<l;i++)m[i]=a[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}x.displayName="MDXCreateElement"},19002:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>m,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(25773),r=(a(27378),a(35318));const l={id:"sons-of-the-forest",image:"/img/embed/games/sons-of-the-forest.jpg",title:"Sons of the Forest Game events",hide_title:!0,sidebar_label:"Sons of the Forest",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},m=void 0,o={unversionedId:"api/games/events/sons-of-the-forest",id:"api/games/events/sons-of-the-forest",title:"Sons of the Forest Game events",description:"Please read the overwolf.games.events documentation page to learn how to use Overwolf game events.",source:"@site/pages/docs/api/games/events/sons-of-the-forest.mdx",sourceDirName:"api/games/events",slug:"/api/games/events/sons-of-the-forest",permalink:"/api/games/events/sons-of-the-forest",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/games/events/sons-of-the-forest.mdx",tags:[],version:"current",lastUpdatedBy:"JacksAtWork",lastUpdatedAt:1678698193,formattedLastUpdatedAt:"Mar 13, 2023",frontMatter:{id:"sons-of-the-forest",image:"/img/embed/games/sons-of-the-forest.jpg",title:"Sons of the Forest Game events",hide_title:!0,sidebar_label:"Sons of the Forest",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"Rocket League",permalink:"/api/games/events/rocket-league"},next:{title:"Splitgate: Arena Warfare",permalink:"/api/games/events/splitgate-arena-warfare"}},d={},i=[{value:"Sample Apps",id:"sample-apps",level:2},{value:"Available Features",id:"available-features",level:2},{value:"Game event status",id:"game-event-status",level:2},{value:"<code>gep_internal</code>",id:"gep_internal",level:2},{value:"Info Updates",id:"info-updates",level:3},{value:"<em>gep_internal</em> note",id:"gep_internal-note",level:4},{value:"<code>match_info</code>",id:"match_info",level:2},{value:"Info Updates",id:"info-updates-1",level:3},{value:"Events",id:"events",level:3},{value:"<em>match_start</em> note",id:"match_start-note",level:4},{value:"<em>match_end</em> note",id:"match_end-note",level:4},{value:"<em>death</em> note",id:"death-note",level:4},{value:"<code>location</code>",id:"location",level:2},{value:"Info Updates",id:"info-updates-2",level:3},{value:"<em>location</em> note",id:"location-note",level:4}],p=(s="GameInfo",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var s;const u={toc:i};function c(e){let{components:t,...a}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("head",null,(0,r.mdx)("meta",{name:"keywords",content:"API for Sons of the Forest, Sons of the Forest API, SDK for Sons of the Forest, Sons of the Forest SDK"})),(0,r.mdx)(p,{gameID:22638,showCompliance:!1,showDocs:!1,mdxType:"GameInfo"}),(0,r.mdx)("p",null,"Please read the ",(0,r.mdx)("a",{parentName:"p",href:"../events"},"overwolf.games.events")," documentation page to learn how to use Overwolf game events."),(0,r.mdx)("h2",{id:"sample-apps"},"Sample Apps"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/events-sample-apps"},"Sons of the Forset game events sample app"))),(0,r.mdx)("h2",{id:"available-features"},"Available Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#gep_internal"},"gep_internal")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#match_info"},"match_info")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#location"},"location"))),(0,r.mdx)("h2",{id:"game-event-status"},"Game event status"),(0,r.mdx)("p",null,"It is highly recommended to communicate errors and warnings to app users. "),(0,r.mdx)("p",null,"Check the current game event status ",(0,r.mdx)("a",{parentName:"p",href:"/status/"},"here"),". Alternately, you can easily check that status from your app itself, ",(0,r.mdx)("a",{parentName:"p",href:"/topics/using-events/how-to-check-events-status-from-app"},"using our API"),"."),(0,r.mdx)("h2",{id:"gep_internal"},(0,r.mdx)("inlineCode",{parentName:"h2"},"gep_internal")),(0,r.mdx)("h3",{id:"info-updates"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.mdx)("td",{parentName:"tr",align:null},"gep_internal"),(0,r.mdx)("td",{parentName:"tr",align:null},"Local + Public version number"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#gep_internal-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"143.0")))),(0,r.mdx)("h4",{id:"gep_internal-note"},(0,r.mdx)("em",{parentName:"h4"},"gep_internal")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}\n')),(0,r.mdx)("h2",{id:"match_info"},(0,r.mdx)("inlineCode",{parentName:"h2"},"match_info")),(0,r.mdx)("h3",{id:"info-updates-1"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"location"),(0,r.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"Current player location on the map"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#location-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"221.0")))),(0,r.mdx)("h3",{id:"events"},"Events"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Event"),(0,r.mdx)("th",{parentName:"tr",align:null},"Event Data"),(0,r.mdx)("th",{parentName:"tr",align:null},"Fired When"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"match_start"),(0,r.mdx)("td",{parentName:"tr",align:null},"null"),(0,r.mdx)("td",{parentName:"tr",align:null},"Match started"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#match_start-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"221.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"match_end"),(0,r.mdx)("td",{parentName:"tr",align:null},"null"),(0,r.mdx)("td",{parentName:"tr",align:null},"Match ended"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#match_end-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"221.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"death"),(0,r.mdx)("td",{parentName:"tr",align:null},"null"),(0,r.mdx)("td",{parentName:"tr",align:null},"Player died"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#death-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"221.0")))),(0,r.mdx)("h4",{id:"match_start-note"},(0,r.mdx)("em",{parentName:"h4"},"match_start")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_start","data":""}]}\n')),(0,r.mdx)("h4",{id:"match_end-note"},(0,r.mdx)("em",{parentName:"h4"},"match_end")," note"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"match_end","data":""}]}\n')),(0,r.mdx)("h4",{id:"death-note"},(0,r.mdx)("em",{parentName:"h4"},"death")," note"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"events":[{"name":"death","data":""}]}\n')),(0,r.mdx)("h2",{id:"location"},(0,r.mdx)("inlineCode",{parentName:"h2"},"location")),(0,r.mdx)("h3",{id:"info-updates-2"},"Info Updates"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"key"),(0,r.mdx)("th",{parentName:"tr",align:null},"Category"),(0,r.mdx)("th",{parentName:"tr",align:null},"Values"),(0,r.mdx)("th",{parentName:"tr",align:null},"Notes"),(0,r.mdx)("th",{parentName:"tr",align:null},"Since GEP Ver."))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"location"),(0,r.mdx)("td",{parentName:"tr",align:null},"match_info"),(0,r.mdx)("td",{parentName:"tr",align:null},"Current player location on the map"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)("a",{parentName:"td",href:"#location-note"},"notes")),(0,r.mdx)("td",{parentName:"tr",align:null},"221.0")))),(0,r.mdx)("h4",{id:"location-note"},(0,r.mdx)("em",{parentName:"h4"},"location")," note"),(0,r.mdx)("p",null,"Data Example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"info":{"match_info":{"location":"{\\"loc_x\\":-438.726135,\\"loc_y\\":1565.584473,\\"loc_z\\":17.449226}"}},"feature":"location"}\n')))}c.isMDXComponent=!0}}]);