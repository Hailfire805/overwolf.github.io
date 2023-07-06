"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2554],{35318:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>g});var n=i(27378);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function p(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(i),f=o,g=m["".concat(a,".").concat(f)]||m[f]||c[f]||l;return i?n.createElement(g,r(r({ref:t},u),{},{components:i})):n.createElement(g,r({ref:t},u))}));function g(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=i.length,r=new Array(l);r[0]=f;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[m]="string"==typeof e?e:o,r[1]=p;for(var s=2;s<l;s++)r[s]=i[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},79074:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=i(25773),o=(i(27378),i(35318));const l={id:"simple-io-plugin",image:"/img/embed/api-best-practices.jpg",title:"The Overwolf Simple IO plugin",sidebar_label:"Simple I/O plugin",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},r=void 0,p={unversionedId:"topics/using-plugins/simple-io-plugin",id:"topics/using-plugins/simple-io-plugin",title:"The Overwolf Simple IO plugin",description:"A very useful plugin that we've developed ourselves is the Simple IO Plugin. This plugin allows your app to perform different filesystem I/O operations not available otherwise.",source:"@site/pages/docs/topics/using-plugins/simple-io-plugin.mdx",sourceDirName:"topics/using-plugins",slug:"/topics/using-plugins/simple-io-plugin",permalink:"/topics/using-plugins/simple-io-plugin",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/using-plugins/simple-io-plugin.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"simple-io-plugin",image:"/img/embed/api-best-practices.jpg",title:"The Overwolf Simple IO plugin",sidebar_label:"Simple I/O plugin",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"topics",previous:{title:"Sample plugin",permalink:"/topics/using-plugins/sample-plugin"},next:{title:"TeamSpeak plugin",permalink:"/topics/using-plugins/team-speak-plugin"}},a={},s=[{value:"Common uses for the plugin",id:"common-uses-for-the-plugin",level:2},{value:"Download",id:"download",level:2},{value:"Unblock Dll&#39;s",id:"unblock-dlls",level:2}],u={toc:s};function m(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A very useful plugin that we've developed ourselves is the ",(0,o.kt)("strong",{parentName:"p"},"Simple IO Plugin"),". This plugin allows your app to perform different filesystem I/O operations not available otherwise."),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/overwolf/overwolf-plugins/blob/master/plugins/simple-io-plugin/README.md"},"read  more")," about the functions of the simple-io-plugin in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/overwolf/overwolf-plugins/tree/master/plugins/simple-io-plugin"},"Simple I/O GitHub repository"),"."),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"We implement a lot of functionality from the simple io-plugin into the ",(0,o.kt)("a",{parentName:"p",href:"/api/io"},"overwolf.io")," API and the ",(0,o.kt)("a",{parentName:"p",href:"/api/extensions/io"},"overwolf.extensions.io")," API. Please check it before implementing the plugin in your app.")),(0,o.kt)("h2",{id:"common-uses-for-the-plugin"},"Common uses for the plugin"),(0,o.kt)("p",null,"This plugin enables you to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Read a game\u2019s log file or files and even \u201cstream\u201d the log file, line-by-line, to your app."),(0,o.kt)("li",{parentName:"ol"},"Create your own persistent log file on the local hard drive.")),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can get the plugin from our ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/overwolf/overwolf-plugins/tree/master/plugins/simple-io-plugin"},"GitHub repository"),"."),(0,o.kt)("li",{parentName:"ul"},"The latest DLL can be found ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/overwolf/overwolf-plugins/tree/master/dist"},"here"),", don\u2019t forget to Unblock it after downloading.")),(0,o.kt)("h2",{id:"unblock-dlls"},"Unblock Dll's"),(0,o.kt)("p",null,"When you download foreign DLL files using a browser, Windows automatically marks it as unsafe. You can mark the file as safe by checking the 'Unblock' box found in the file's properties."),(0,o.kt)("p",null,"!",(0,o.kt)("img",{alt:"Unblock dll",src:i(79501).Z,width:"215",height:"300"})))}m.isMDXComponent=!0},79501:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/unblock_dll-5a6ae65815c89f3a12632f324495d605.jpg"}}]);