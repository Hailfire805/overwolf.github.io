"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3389],{3905:(e,a,l)=>{l.r(a),l.d(a,{MDXContext:()=>c,MDXProvider:()=>s,mdx:()=>x,useMDXComponents:()=>o,withMDXComponents:()=>u});var t=l(67294);function n(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}function d(){return d=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},d.apply(this,arguments)}function r(e,a){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),l.push.apply(l,t)}return l}function m(e){for(var a=1;a<arguments.length;a++){var l=null!=arguments[a]?arguments[a]:{};a%2?r(Object(l),!0).forEach((function(a){n(e,a,l[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(l,a))}))}return e}function i(e,a){if(null==e)return{};var l,t,n=function(e,a){if(null==e)return{};var l,t,n={},d=Object.keys(e);for(t=0;t<d.length;t++)l=d[t],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)l=d[t],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var c=t.createContext({}),u=function(e){return function(a){var l=o(a.components);return t.createElement(e,d({},a,{components:l}))}},o=function(e){var a=t.useContext(c),l=a;return e&&(l="function"==typeof e?e(a):m(m({},a),e)),l},s=function(e){var a=o(e.components);return t.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},b=t.forwardRef((function(e,a){var l=e.components,n=e.mdxType,d=e.originalType,r=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=o(l),s=n,b=u["".concat(r,".").concat(s)]||u[s]||p[s]||d;return l?t.createElement(b,m(m({ref:a},c),{},{components:l})):t.createElement(b,m({ref:a},c))}));function x(e,a){var l=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var d=l.length,r=new Array(d);r[0]=b;var m={};for(var i in a)hasOwnProperty.call(a,i)&&(m[i]=a[i]);m.originalType=e,m.mdxType="string"==typeof e?e:n,r[1]=m;for(var c=2;c<d;c++)r[c]=l[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,l)}b.displayName="MDXCreateElement"},58941:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>m,toc:()=>c});var t=l(87462),n=(l(67294),l(3905));const d={id:"audio",image:"/img/embed/deprecated.jpg",title:"overwolf.media.audio API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},r=void 0,m={unversionedId:"api/deprecated/audio",id:"api/deprecated/audio",title:"overwolf.media.audio API",description:"A set of functions for playback of audio files. Currently supports MP3 and WAV files.",source:"@site/pages/docs/api/deprecated/audio.mdx",sourceDirName:"api/deprecated",slug:"/api/deprecated/audio",permalink:"/api/deprecated/audio",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/deprecated/audio.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"audio",image:"/img/embed/deprecated.jpg",title:"overwolf.media.audio API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"overwolf.tobii API",permalink:"/api/deprecated/obsolete/tobii"},next:{title:"overwolf.benchmarking API",permalink:"/api/deprecated/benchmarking"}},i={},c=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"create(url, callback)",id:"createurl-callback",level:2},{value:"Version added: 0.84",id:"version-added-084",level:4},{value:"Callback argument: Success",id:"callback-argument-success",level:4},{value:"play(id, callback)",id:"playid-callback",level:2},{value:"Version added: 0.84",id:"version-added-084-1",level:4},{value:"Callback argument: Success",id:"callback-argument-success-1",level:4},{value:"stop(callback)",id:"stopcallback",level:2},{value:"Version added: 0.84",id:"version-added-084-2",level:4},{value:"Callback argument: Success",id:"callback-argument-success-2",level:4},{value:"stopById(id, callback)",id:"stopbyidid-callback",level:2},{value:"Version added: 0.84",id:"version-added-084-3",level:4},{value:"Callback argument: Success",id:"callback-argument-success-3",level:4},{value:"pause(callback)",id:"pausecallback",level:2},{value:"Version added: 0.84",id:"version-added-084-4",level:4},{value:"Callback argument: Success",id:"callback-argument-success-4",level:4},{value:"pauseById(id, callback)",id:"pausebyidid-callback",level:2},{value:"Version added: 0.84",id:"version-added-084-5",level:4},{value:"Callback argument: Success",id:"callback-argument-success-5",level:4},{value:"resume(callback)",id:"resumecallback",level:2},{value:"Version added: 0.84",id:"version-added-084-6",level:4},{value:"Callback argument: Success",id:"callback-argument-success-6",level:4},{value:"resumeById(id, callback)",id:"resumebyidid-callback",level:2},{value:"Version added: 0.84",id:"version-added-084-7",level:4},{value:"Callback argument: Success",id:"callback-argument-success-7",level:4},{value:"setVolume(volume, callback)",id:"setvolumevolume-callback",level:2},{value:"Version added: 0.84",id:"version-added-084-8",level:4},{value:"Callback argument: Success",id:"callback-argument-success-8",level:4},{value:"setVolumeById(id, volume, callback)",id:"setvolumebyidid-volume-callback",level:2},{value:"Version added: 0.84",id:"version-added-084-9",level:4},{value:"Callback argument: Success",id:"callback-argument-success-9",level:4},{value:"onPlayStateChanged",id:"onplaystatechanged",level:2},{value:"Version added: 0.84",id:"version-added-084-10",level:4},{value:"Event Data Example: Success",id:"event-data-example-success",level:4}],u={toc:c};function o(e){let{components:a,...l}=e;return(0,n.mdx)("wrapper",(0,t.Z)({},u,l,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"A set of functions for playback of audio files. Currently supports MP3 and WAV files."),(0,n.mdx)("admonition",{title:"obsolete",type:"warning"},(0,n.mdx)("p",{parentName:"admonition"},"The overwolf.media.audio API is deprecated. Use the html5 ",(0,n.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio"},"audio")," tag instead.")),(0,n.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#createurl-callback"},"overwolf.media.audio.create()")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#playid-callback"},"overwolf.media.audio.play()")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#stopcallback"},"overwolf.media.audio.stop()")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#stopbyidid-callback"},"overwolf.media.audio.stopById()")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#pausecallback"},"overwolf.media.audio.pause()")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#pausebyidid-callback"},"overwolf.media.audio.pauseById()")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#resumecallback"},"overwolf.media.audio.resume()")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#resumebyidid-callback"},"overwolf.media.audio.resumeById()")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#setvolumevolume-callback"},"overwolf.media.audio.setVolume()")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#setvolumebyidid-volume-callback"},"overwolf.media.audio.setVolumeById()"))),(0,n.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"#onplaystatechanged"},"overwolf.media.audio.onPlayStateChanged"))),(0,n.mdx)("h2",{id:"createurl-callback"},"create(url, callback)"),(0,n.mdx)("h4",{id:"version-added-084"},"Version added: 0.84"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Creates an audio file from local path, extension local path or a remote Url.")),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"url"),(0,n.mdx)("td",{parentName:"tr",align:null},"string"),(0,n.mdx)("td",{parentName:"tr",align:null},"The path of a local audio file, a url to a remote one or an extension url ",(0,n.mdx)("inlineCode",{parentName:"td"},"overwolf-extension://app-id/file"),". Notice that if the url doesn\u2019t contain a file extension, mp3 will be assumed as the extension")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"callback"),(0,n.mdx)("td",{parentName:"tr",align:null},"function"),(0,n.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the ID of the created audio file")))),(0,n.mdx)("h4",{id:"callback-argument-success"},"Callback argument: Success"),(0,n.mdx)("p",null,"A callback function which will be called with the status of the request and the ID of the created audio file:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success",\n    "id": "1086e4469a5fb242e81223ce627e3747"\n}\n')),(0,n.mdx)("h2",{id:"playid-callback"},"play(id, callback)"),(0,n.mdx)("h4",{id:"version-added-084-1"},"Version added: 0.84"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Plays the audio file matching the supplied ID.")),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"id"),(0,n.mdx)("td",{parentName:"tr",align:null},"string"),(0,n.mdx)("td",{parentName:"tr",align:null},"The ID of the audio file to be played")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"callback"),(0,n.mdx)("td",{parentName:"tr",align:null},"function"),(0,n.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the play request")))),(0,n.mdx)("h4",{id:"callback-argument-success-1"},"Callback argument: Success"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.mdx)("h2",{id:"stopcallback"},"stop(callback)"),(0,n.mdx)("h4",{id:"version-added-084-2"},"Version added: 0.84"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Stops the playback.")),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"callback"),(0,n.mdx)("td",{parentName:"tr",align:null},"function"),(0,n.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the stop request")))),(0,n.mdx)("h4",{id:"callback-argument-success-2"},"Callback argument: Success"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.mdx)("h2",{id:"stopbyidid-callback"},"stopById(id, callback)"),(0,n.mdx)("h4",{id:"version-added-084-3"},"Version added: 0.84"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Stops the playback.")),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"id"),(0,n.mdx)("td",{parentName:"tr",align:null},"string"),(0,n.mdx)("td",{parentName:"tr",align:null},"The ID of the audio file")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"callback"),(0,n.mdx)("td",{parentName:"tr",align:null},"function"),(0,n.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the stop request")))),(0,n.mdx)("h4",{id:"callback-argument-success-3"},"Callback argument: Success"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.mdx)("h2",{id:"pausecallback"},"pause(callback)"),(0,n.mdx)("h4",{id:"version-added-084-4"},"Version added: 0.84"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Pauses the playback.")),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"callback"),(0,n.mdx)("td",{parentName:"tr",align:null},"function"),(0,n.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the pause request")))),(0,n.mdx)("h4",{id:"callback-argument-success-4"},"Callback argument: Success"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.mdx)("h2",{id:"pausebyidid-callback"},"pauseById(id, callback)"),(0,n.mdx)("h4",{id:"version-added-084-5"},"Version added: 0.84"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Pauses the playback.")),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"id"),(0,n.mdx)("td",{parentName:"tr",align:null},"string"),(0,n.mdx)("td",{parentName:"tr",align:null},"The ID of the audio file")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"callback"),(0,n.mdx)("td",{parentName:"tr",align:null},"function"),(0,n.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the pause request")))),(0,n.mdx)("h4",{id:"callback-argument-success-5"},"Callback argument: Success"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.mdx)("h2",{id:"resumecallback"},"resume(callback)"),(0,n.mdx)("h4",{id:"version-added-084-6"},"Version added: 0.84"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Resumes the playback.")),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"callback"),(0,n.mdx)("td",{parentName:"tr",align:null},"function"),(0,n.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the resume request")))),(0,n.mdx)("h4",{id:"callback-argument-success-6"},"Callback argument: Success"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.mdx)("h2",{id:"resumebyidid-callback"},"resumeById(id, callback)"),(0,n.mdx)("h4",{id:"version-added-084-7"},"Version added: 0.84"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Resumes the playback.")),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"id"),(0,n.mdx)("td",{parentName:"tr",align:null},"string"),(0,n.mdx)("td",{parentName:"tr",align:null},"The ID of the audio file")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"callback"),(0,n.mdx)("td",{parentName:"tr",align:null},"function"),(0,n.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the resume request")))),(0,n.mdx)("h4",{id:"callback-argument-success-7"},"Callback argument: Success"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.mdx)("h2",{id:"setvolumevolume-callback"},"setVolume(volume, callback)"),(0,n.mdx)("h4",{id:"version-added-084-8"},"Version added: 0.84"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Sets the playback volume.")),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"volume"),(0,n.mdx)("td",{parentName:"tr",align:null},"int"),(0,n.mdx)("td",{parentName:"tr",align:null},"The desired volume. The volume range is 0 \u2013 100 where a volume of 0 means mute")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"callback"),(0,n.mdx)("td",{parentName:"tr",align:null},"function"),(0,n.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the setVolume request")))),(0,n.mdx)("h4",{id:"callback-argument-success-8"},"Callback argument: Success"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.mdx)("h2",{id:"setvolumebyidid-volume-callback"},"setVolumeById(id, volume, callback)"),(0,n.mdx)("h4",{id:"version-added-084-9"},"Version added: 0.84"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Sets the playback volume.")),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,n.mdx)("th",{parentName:"tr",align:null},"Type"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"id"),(0,n.mdx)("td",{parentName:"tr",align:null},"string"),(0,n.mdx)("td",{parentName:"tr",align:null},"The ID of the audio file")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"volume"),(0,n.mdx)("td",{parentName:"tr",align:null},"int"),(0,n.mdx)("td",{parentName:"tr",align:null},"The desired volume. The volume range is 0 \u2013 100 where a volume of 0 means mute")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"callback"),(0,n.mdx)("td",{parentName:"tr",align:null},"function"),(0,n.mdx)("td",{parentName:"tr",align:null},"A callback function which will be called with the status of the setVolume request")))),(0,n.mdx)("h4",{id:"callback-argument-success-9"},"Callback argument: Success"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "status": "success"\n}\n')),(0,n.mdx)("h2",{id:"onplaystatechanged"},"onPlayStateChanged"),(0,n.mdx)("h4",{id:"version-added-084-10"},"Version added: 0.84"),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"Fired when the state of the playback is changed.")),(0,n.mdx)("h4",{id:"event-data-example-success"},"Event Data Example: Success"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "1086e4469a5fb242e81223ce627e3747",\n    "playback_state": "paused"\n}\n')))}o.isMDXComponent=!0}}]);