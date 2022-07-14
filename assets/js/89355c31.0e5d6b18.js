"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[300],{3905:function(e,n,a){a.r(n),a.d(n,{MDXContext:function(){return s},MDXProvider:function(){return u},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return m}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},i.apply(this,arguments)}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function d(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),m=function(e){return function(n){var a=p(n.components);return t.createElement(e,i({},n,{components:a}))}},p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):d(d({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return a?t.createElement(h,d(d({ref:n},s),{},{components:a})):t.createElement(h,d({ref:n},s))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var s=2;s<i;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9391:function(e,n,a){a.r(n),a.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return d},metadata:function(){return s},toc:function(){return p}});var t=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],d={id:"benchmarking",title:"overwolf.benchmarking API",sidebar_label:"Benchmarking"},o=void 0,s={unversionedId:"api/deprecated/benchmarking",id:"api/deprecated/benchmarking",title:"overwolf.benchmarking API",description:"This API is no longer supported and maintained. Some of it\u2019s methods and events might not work as intended.",source:"@site/pages/docs/api/deprecated/benchmarking.mdx",sourceDirName:"api/deprecated",slug:"/api/deprecated/benchmarking",permalink:"/api/deprecated/benchmarking",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/deprecated/benchmarking.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657711065,formattedLastUpdatedAt:"7/13/2022",frontMatter:{id:"benchmarking",title:"overwolf.benchmarking API",sidebar_label:"Benchmarking"},sidebar:"api",previous:{title:"Tobii",permalink:"/api/deprecated/tobii"},next:{title:"overwolf.log",permalink:"/api/deprecated/obsolete/log"}},m={},p=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"requestHardwareInfo(interval, callback)",id:"requesthardwareinfointerval-callback",level:2},{value:"Version added: 0.78",id:"version-added-078",level:4},{value:"Usage",id:"usage",level:4},{value:"Example data",id:"example-data",level:4},{value:"requestProcessInfo(interval, callback)",id:"requestprocessinfointerval-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-1",level:4},{value:"Usage",id:"usage-1",level:4},{value:"Example data",id:"example-data-1",level:4},{value:"requestFpsInfo(interval, callback)",id:"requestfpsinfointerval-callback",level:2},{value:"Version added: 0.78",id:"version-added-078-2",level:4},{value:"Usage",id:"usage-2",level:4},{value:"Example data",id:"example-data-2",level:4},{value:"stopRequesting()",id:"stoprequesting",level:2},{value:"Version added: 0.78",id:"version-added-078-3",level:4},{value:"requestPermissions(callback)",id:"requestpermissionscallback",level:2},{value:"Version added: 0.78",id:"version-added-078-4",level:4},{value:"More info",id:"more-info",level:4},{value:"onHardwareInfoReady",id:"onhardwareinfoready",level:2},{value:"Version added: 0.78",id:"version-added-078-5",level:4},{value:"Event data example: Success",id:"event-data-example-success",level:4},{value:"onProcessInfoReady",id:"onprocessinfoready",level:2},{value:"Version added: 0.78",id:"version-added-078-6",level:4},{value:"Event data example: Success",id:"event-data-example-success-1",level:4},{value:"onFpsInfoReady",id:"onfpsinfoready",level:2},{value:"Version added: 0.78",id:"version-added-078-7",level:4},{value:"Event data example: Success",id:"event-data-example-success-2",level:4}],u={toc:p};function c(e){var n=e.components,a=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"OBSOLETE")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"This API is no longer supported and maintained. Some of it\u2019s methods and events might not work as intended.  "))),(0,i.mdx)("p",null,"This is a set of functions for querying system stats and benchmarks. These calls require administrative permissions, which the user may be prompted to grant with a UAC message which may interrupt him while playing. In order to avoid interruptions, it is recommended to ask before requesting permissions."),(0,i.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#requesthardwareinfointerval-callback"},"overwolf.benchmarking.requestHardwareInfo()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#requestprocessinfointerval-callback"},"overwolf.benchmarking.requestProcessInfo()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#requestfpsinfointerval-callback"},"overwolf.benchmarking.requestFpsInfo()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#stoprequesting"},"overwolf.benchmarking.stopRequesting()")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#requestpermissionscallback"},"overwolf.benchmarking.requestPermissions()"))),(0,i.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#onhardwareinfoready"},"overwolf.benchmarking.onHardwareInfoReady")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#onprocessinfoready"},"overwolf.benchmarking.onProcessInfoReady")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"#onfpsinfoready"},"overwolf.benchmarking.onFpsInfoReady"))),(0,i.mdx)("h2",{id:"requesthardwareinfointerval-callback"},"requestHardwareInfo(interval, callback)"),(0,i.mdx)("h4",{id:"version-added-078"},"Version added: 0.78"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Requests hardware information within a given interval.")),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"#requestpermissionscallback"},"requestPermissions")," for administrative permissions instructions."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"interval"),(0,i.mdx)("td",{parentName:"tr",align:null},"int"),(0,i.mdx)("td",{parentName:"tr",align:null},"The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"callback"),(0,i.mdx)("td",{parentName:"tr",align:null},"function"),(0,i.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,i.mdx)("h4",{id:"usage"},"Usage"),(0,i.mdx)("p",null,"Before calling this function, you should subscribe to the ",(0,i.mdx)("a",{parentName:"p",href:"#onhardwareinfoready"},"onHardwareInfoReady")," event.",(0,i.mdx)("br",{parentName:"p"}),"\n","The event will be triggered every X time, as you set in the requestHardwareInfo interval."),(0,i.mdx)("p",null,"When you want to stop receiving the information, please call ",(0,i.mdx)("a",{parentName:"p",href:"#stoprequesting"},"stopRequesting()"),"."),(0,i.mdx)("h4",{id:"example-data"},"Example data"),(0,i.mdx)("p",null,"See the ",(0,i.mdx)("a",{parentName:"p",href:"#onhardwareinfoready"},"onHardwareInfoReady")," event."),(0,i.mdx)("h2",{id:"requestprocessinfointerval-callback"},"requestProcessInfo(interval, callback)"),(0,i.mdx)("h4",{id:"version-added-078-1"},"Version added: 0.78"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Requests process information within a given interval. ")),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"#requestpermissionscallback"},"requestPermissions")," for administrative permissions instructions."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"interval"),(0,i.mdx)("td",{parentName:"tr",align:null},"int"),(0,i.mdx)("td",{parentName:"tr",align:null},"The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"callback"),(0,i.mdx)("td",{parentName:"tr",align:null},"function"),(0,i.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,i.mdx)("h4",{id:"usage-1"},"Usage"),(0,i.mdx)("p",null,"Before calling this function, you should subscribe to the ",(0,i.mdx)("a",{parentName:"p",href:"#onprocessinfoready"},"onProcessInfoReady")," event.",(0,i.mdx)("br",{parentName:"p"}),"\n","The event will be triggered every X time, as you set in the requestProcessInfo interval."),(0,i.mdx)("p",null,"When you want to stop receiving the information, please call ",(0,i.mdx)("a",{parentName:"p",href:"#stoprequesting"},"stopRequesting()"),"."),(0,i.mdx)("h4",{id:"example-data-1"},"Example data"),(0,i.mdx)("p",null,"See the ",(0,i.mdx)("a",{parentName:"p",href:"#onprocessinfoready"},"onProcessInfoReady")," event."),(0,i.mdx)("h2",{id:"requestfpsinfointerval-callback"},"requestFpsInfo(interval, callback)"),(0,i.mdx)("h4",{id:"version-added-078-2"},"Version added: 0.78"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Requests game FPS information within a given interval. ")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"interval"),(0,i.mdx)("td",{parentName:"tr",align:null},"int"),(0,i.mdx)("td",{parentName:"tr",align:null},"The desired maximal interval (in milliseconds) in which events will be triggered. Minimum is 500ms")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"callback"),(0,i.mdx)("td",{parentName:"tr",align:null},"function"),(0,i.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,i.mdx)("h4",{id:"usage-2"},"Usage"),(0,i.mdx)("p",null,"Before calling this function, you should subscribe to the ",(0,i.mdx)("a",{parentName:"p",href:"#onfpsinfoready"},"onFpsInfoReady")," event.",(0,i.mdx)("br",{parentName:"p"}),"\n","The event will be triggered every X time, as you set in the requestFpsInfo interval."),(0,i.mdx)("p",null,"When you want to stop receiving the information, please call ",(0,i.mdx)("a",{parentName:"p",href:"#stoprequesting"},"stopRequesting()"),"."),(0,i.mdx)("h4",{id:"example-data-2"},"Example data"),(0,i.mdx)("p",null,"See the ",(0,i.mdx)("a",{parentName:"p",href:"#onfpsinfoready"},"onFpsInfoReady")," event."),(0,i.mdx)("h2",{id:"stoprequesting"},"stopRequesting()"),(0,i.mdx)("h4",{id:"version-added-078-3"},"Version added: 0.78"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Stop receiving hardware/process events.")),(0,i.mdx)("p",null,"Use this when you no longer want to receive events or when you close your app."),(0,i.mdx)("h2",{id:"requestpermissionscallback"},"requestPermissions(callback)"),(0,i.mdx)("h4",{id:"version-added-078-4"},"Version added: 0.78"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"In case Overwolf requires administrative permissions, and after prompting the user to grant more permissions, call this function and then request your desired benchmarking information.")),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"callback"),(0,i.mdx)("td",{parentName:"tr",align:null},"function"),(0,i.mdx)("td",{parentName:"tr",align:null},"Returns with the result")))),(0,i.mdx)("h4",{id:"more-info"},"More info"),(0,i.mdx)("p",null,"Note that the some functions in the benchmarking API requires Overwolf to have Administrative permissions, and should they be missing, the callback will return 'Permissions Required'.  "),(0,i.mdx)("p",null,"You will then have to ask the app user for permissions and according to the user\u2019s choice, call ",(0,i.mdx)("a",{parentName:"p",href:"#requestpermissionscallback"},"requestPermissions"),". "),(0,i.mdx)("p",null,"It is then necessary to call the requested function (for example, requestProcessInfo) again."),(0,i.mdx)("h2",{id:"onhardwareinfoready"},"onHardwareInfoReady"),(0,i.mdx)("h4",{id:"version-added-078-5"},"Version added: 0.78"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Fired when hardware information is ready with a JSON containing the information.")),(0,i.mdx)("h4",{id:"event-data-example-success"},"Event data example: Success"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'"General": {\n    "PowerPlan": "Balanced"\n},\n"Mainboard": {\n    "Name": "ASUS P8H61-M",\n    "Voltages": [{\n                "Name": "CPU VCore",\n                "Value": 0.968,\n...\n')),(0,i.mdx)("h2",{id:"onprocessinfoready"},"onProcessInfoReady"),(0,i.mdx)("h4",{id:"version-added-078-6"},"Version added: 0.78"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Fired when process information is ready with a JSON containing the information.")),(0,i.mdx)("h4",{id:"event-data-example-success-1"},"Event data example: Success"),(0,i.mdx)("p",null,"The event returns the top ten processes in terms of CPU usage and Memory usage."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "TopCpuUsage": [\n        {\n            "PrivateWorkingSet": 17674240,\n            "PrecentProcessorTime": 5.703688196431727,\n            "Id": 6988,\n            "Name": "OverwolfBrowser#3"\n        },\n        {\n            "PrivateWorkingSet": 16150528,\n            "PrecentProcessorTime": 5.703688196431727,\n            "Id": 8216,\n            "Name": "OverwolfBenchmarking"\n        },\n        ...\n    ],\n    "TopMemoryUsage": [\n        {\n            "PrivateWorkingSet": 611196928,\n            "PrecentProcessorTime": 2.851844098215878,\n            "Id": 5484,\n            "Name": "firefox"\n        },\n        {\n            "PrivateWorkingSet": 141586432,\n            "PrecentProcessorTime": 2.851844098215878,\n            "Id": 596,\n            "Name": "Overwolf"\n        },\n        ...\n    ]\n}\n')),(0,i.mdx)("h2",{id:"onfpsinfoready"},"onFpsInfoReady"),(0,i.mdx)("h4",{id:"version-added-078-7"},"Version added: 0.78"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"Fired when FPS information is ready with a JSON containing the information.")),(0,i.mdx)("h4",{id:"event-data-example-success-2"},"Event data example: Success"),(0,i.mdx)("p",null,"If you are in a game:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{ \n    "Fps": 61 \n}\n')),(0,i.mdx)("p",null,"If you are not in a game:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "Fps":"Not in a game"\n}\n')))}c.isMDXComponent=!0}}]);