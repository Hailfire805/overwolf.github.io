"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5101],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return f},mdx:function(){return d},useMDXComponents:function(){return c},withMDXComponents:function(){return s}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){return function(t){var n=c(t.components);return r.createElement(e,o({},t,{components:n}))}},c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=c(n),f=i,g=s["".concat(l,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(g,p(p({ref:t},u),{},{components:n})):r.createElement(g,p({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=g;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},88437:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),l=["components"],p={id:"sample-plugin",title:"Overwolf sample plugin",sidebar_label:"Sample plugin"},a=void 0,u={unversionedId:"topics/using-plugins/sample-plugin",id:"topics/using-plugins/sample-plugin",title:"Overwolf sample plugin",description:"This is an unpacked Overwolf sample app that utilizes the Overwolf Sample Plugin",source:"@site/pages/docs/topics/using-plugins/sample-plugin.mdx",sourceDirName:"topics/using-plugins",slug:"/topics/using-plugins/sample-plugin",permalink:"/topics/using-plugins/sample-plugin",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/using-plugins/sample-plugin.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657711065,formattedLastUpdatedAt:"7/13/2022",frontMatter:{id:"sample-plugin",title:"Overwolf sample plugin",sidebar_label:"Sample plugin"},sidebar:"topics",previous:{title:"Process Manager plugin",permalink:"/topics/using-plugins/process-manager-plugin"},next:{title:"Simple I/O plugin",permalink:"/topics/using-plugins/simple-io-plugin"}},s={},c=[],f={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.mdx)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"This is an unpacked ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/overwolf-plugin-sample/tree/master/sampleapp"},"Overwolf sample app")," that utilizes the Overwolf ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/overwolf-plugin-sample"},"Sample Plugin")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The DLL file is placed inside of the app\u2019s directory \u2013 so if you recompile it, you\u2019ll need to replace the old DLL with the new one inside the folder. Please review the manifest.json file to view how to reference the Plugin file."),(0,o.mdx)("li",{parentName:"ul"},"All DLLs should be compiled for the x64 platform.")),(0,o.mdx)("p",null,"Don\u2019t hesitate to ask us questions in our ",(0,o.mdx)("a",{parentName:"p",href:"https://discuss.overwolf.com/"},"developers Q&A site"),"."))}m.isMDXComponent=!0}}]);