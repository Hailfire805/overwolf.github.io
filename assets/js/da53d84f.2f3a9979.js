"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6435],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>i,MDXProvider:()=>p,mdx:()=>x,useMDXComponents:()=>c,withMDXComponents:()=>s});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){return function(t){var n=c(t.components);return a.createElement(e,l({},t,{components:n}))}},c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),s=c(n),p=r,b=s["".concat(d,".").concat(p)]||s[p]||u[p]||l;return n?a.createElement(b,o(o({ref:t},i),{},{components:n})):a.createElement(b,o({ref:t},i))}));function x(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,d=new Array(l);d[0]=b;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var i=2;i<l;i++)d[i]=n[i];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},95791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={id:"websocket",image:"/img/embed/api-docs.jpg",title:"overwolf.web.websocket API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},d=void 0,o={unversionedId:"api/web/websocket",id:"api/web/websocket",title:"overwolf.web.websocket API",description:"web.websocket is an instance an overwolf websocket. These can be created using the overwolf.web.createWebSocket() method.",source:"@site/pages/docs/api/web/websocket.mdx",sourceDirName:"api/web",slug:"/api/web/websocket",permalink:"/api/web/websocket",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/web/websocket.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"websocket",image:"/img/embed/api-docs.jpg",title:"overwolf.web.websocket API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"overwolf.web.webserver API",permalink:"/api/web/webserver"},next:{title:"overwolf.windows API",permalink:"/api/windows/"}},m={},i=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"connect(callback)",id:"connectcallback",level:2},{value:"Version added: 0.129",id:"version-added-0129",level:4},{value:"send(message, callback)",id:"sendmessage-callback",level:2},{value:"Version added: 0.129",id:"version-added-0129-1",level:4},{value:"close()",id:"close",level:2},{value:"Version added: 0.129",id:"version-added-0129-2",level:4},{value:"onMessage()",id:"onmessage",level:2},{value:"Version added: 0.129",id:"version-added-0129-3",level:4},{value:"onError()",id:"onerror",level:2},{value:"Version added: 0.129",id:"version-added-0129-4",level:4},{value:"onOpen()",id:"onopen",level:2},{value:"Version added: 0.129",id:"version-added-0129-5",level:4},{value:"onClosed()",id:"onclosed",level:2},{value:"Version added: 0.129",id:"version-added-0129-6",level:4},{value:"MessageEvent Object",id:"messageevent-object",level:2},{value:"Version added: 0.129",id:"version-added-0129-7",level:4},{value:"ErrorEvent Object",id:"errorevent-object",level:2},{value:"Version added: 0.129",id:"version-added-0129-8",level:4},{value:"onClosedEvent Object",id:"onclosedevent-object",level:2},{value:"Version added: 0.129",id:"version-added-0129-9",level:4}],s={toc:i};function c(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},(0,r.mdx)("inlineCode",{parentName:"p"},"web.websocket")," is an instance an overwolf websocket. These can be created using the ",(0,r.mdx)("a",{parentName:"p",href:".#createwebsocketconnectionparams-callback"},(0,r.mdx)("inlineCode",{parentName:"a"},"overwolf.web.createWebSocket()"))," method.")),(0,r.mdx)("admonition",{type:"tip"},(0,r.mdx)("p",{parentName:"admonition"},"Note that it is best to use the ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Websockets_API"},"native js WebSockets")," when you can.",(0,r.mdx)("br",{parentName:"p"}),"\n","Our web sockets by-pass cert checks for localhost WSS servers like LCU (league of legends).")),(0,r.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#connectcallback"},"overwolf.web.websocket.connect()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#sendmessage-callback"},"overwolf.web.websocket.send()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#close"},"overwolf.web.websocket.close()"))),(0,r.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#onmessage"},"overwolf.web.websocket.onMessage")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#onerror"},"overwolf.web.websocket.onError")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#onopen"},"overwolf.web.websocket.onOpen")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#onclosed"},"overwolf.web.websocket.onClosed"))),(0,r.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#errorevent-object"},"overwolf.web.websocket.ErrorEvent")," Object"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#onclosedevent-object"},"overwolf.web.websocket.onClosedEvent")," Object")),(0,r.mdx)("h2",{id:"connectcallback"},"connect(callback)"),(0,r.mdx)("h4",{id:"version-added-0129"},"Version added: 0.129"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Listens for requests on the given port.")),(0,r.mdx)("p",null,"If the port is already in use, or this instance is already listening, an error will be returned."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.mdx)("td",{parentName:"tr",align:null},"called with the status of the connection")))),(0,r.mdx)("h2",{id:"sendmessage-callback"},"send(message, callback)"),(0,r.mdx)("h4",{id:"version-added-0129-1"},"Version added: 0.129"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"send message.")),(0,r.mdx)("p",null,"If the port is already in use, or this instance is already listening, an error will be returned."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"message"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"Message to send")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the request")))),(0,r.mdx)("h2",{id:"close"},"close()"),(0,r.mdx)("h4",{id:"version-added-0129-2"},"Version added: 0.129"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Closes the websocket. It can be re-opened again.")),(0,r.mdx)("h2",{id:"onmessage"},"onMessage()"),(0,r.mdx)("h4",{id:"version-added-0129-3"},"Version added: 0.129"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Fired when the websocket receives an incoming message, with the following structure: ",(0,r.mdx)("a",{parentName:"p",href:"#messageevent-object"},"MessageEvent")," Object.")),(0,r.mdx)("h2",{id:"onerror"},"onError()"),(0,r.mdx)("h4",{id:"version-added-0129-4"},"Version added: 0.129"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Fired on error, with the following structure: ",(0,r.mdx)("a",{parentName:"p",href:"#errorevent-object"},"ErrorEvent")," Object.")),(0,r.mdx)("h2",{id:"onopen"},"onOpen()"),(0,r.mdx)("h4",{id:"version-added-0129-5"},"Version added: 0.129"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Fired on websocket connection Opened.")),(0,r.mdx)("h2",{id:"onclosed"},"onClosed()"),(0,r.mdx)("h4",{id:"version-added-0129-6"},"Version added: 0.129"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Fired when connection closed, with the following structure: ",(0,r.mdx)("a",{parentName:"p",href:"#onclosedevent-object"},"onClosedEvent")," Object.")),(0,r.mdx)("h2",{id:"messageevent-object"},"MessageEvent Object"),(0,r.mdx)("h4",{id:"version-added-0129-7"},"Version added: 0.129"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Container for the message event object.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"message"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"type"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"../web#messagetype-enum"},"overwolf.web.enums.MessageType")," enum"),(0,r.mdx)("td",{parentName:"tr",align:null})))),(0,r.mdx)("h2",{id:"errorevent-object"},"ErrorEvent Object"),(0,r.mdx)("h4",{id:"version-added-0129-8"},"Version added: 0.129"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Container for the error event object.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"message"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"exception"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null})))),(0,r.mdx)("h2",{id:"onclosedevent-object"},"onClosedEvent Object"),(0,r.mdx)("h4",{id:"version-added-0129-9"},"Version added: 0.129"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Container for the onClose event object.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"code"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"reason"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0}}]);