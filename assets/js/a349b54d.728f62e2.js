"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4300],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return p},MDXProvider:function(){return d},mdx:function(){return g},useMDXComponents:function(){return c},withMDXComponents:function(){return s}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){return function(n){var t=c(n.components);return r.createElement(e,i({},n,{components:t}))}},c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=c(t),d=o,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||i;return t?r.createElement(f,u(u({ref:n},p),{},{components:t})):r.createElement(f,u({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var u={};for(var a in n)hasOwnProperty.call(n,a)&&(u[a]=n[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},18710:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),l=["components"],u={id:"downloader-plugin",title:"The Overwolf Downloader plugin",sidebar_label:"Downloader plugin"},a=void 0,p={unversionedId:"topics/using-plugins/downloader-plugin",id:"topics/using-plugins/downloader-plugin",title:"The Overwolf Downloader plugin",description:"This plugin allows your app to download a remote (http/s) file to the local disk.",source:"@site/pages/docs/topics/using-plugins/downloader-plugin.mdx",sourceDirName:"topics/using-plugins",slug:"/topics/using-plugins/downloader-plugin",permalink:"/topics/using-plugins/downloader-plugin",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/using-plugins/downloader-plugin.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657711065,formattedLastUpdatedAt:"7/13/2022",frontMatter:{id:"downloader-plugin",title:"The Overwolf Downloader plugin",sidebar_label:"Downloader plugin"},sidebar:"topics",previous:{title:"Game events Simulator",permalink:"/topics/using-events/using-events-simulator"},next:{title:"Plug-in Implementation",permalink:"/topics/using-plugins/how-to-use-plugins-in-your-app"}},s={},c=[{value:"Common uses for the plugin",id:"common-uses-for-the-plugin",level:2},{value:"Download",id:"download",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"This plugin allows your app to download a remote (http/s) file to the local disk."),(0,i.mdx)("p",null,"You can read  more in the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/overwolf-plugins/tree/master/plugins/downloader"},"Dowloader repository"),"."),(0,i.mdx)("h2",{id:"common-uses-for-the-plugin"},"Common uses for the plugin"),(0,i.mdx)("p",null,"This plugin enables you to:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Download a remote (http/s) file to the local disk."),(0,i.mdx)("li",{parentName:"ul"},"Supports gzip."),(0,i.mdx)("li",{parentName:"ul"},"Supports MD5 check.")),(0,i.mdx)("h2",{id:"download"},"Download"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"You can get the plugin from our ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/overwolf/overwolf-plugins/tree/master/plugins/downloader"},"GitHub repository"),"."),(0,i.mdx)("li",{parentName:"ul"},"See sample app for more information.")))}m.isMDXComponent=!0}}]);