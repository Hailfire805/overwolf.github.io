"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6895],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return v},useMDXComponents:function(){return p},withMDXComponents:function(){return c}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){return function(t){var n=p(t.components);return r.createElement(e,a({},t,{components:n}))}},p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18045:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={id:"enable-dev-tools",title:"Enable Developer Tools",sidebar_label:"Enable Developer Tools"},s=void 0,d={unversionedId:"topics/best-practices/enable-dev-tools",id:"topics/best-practices/enable-dev-tools",title:"Enable Developer Tools",description:"Since OW client version 0.153, we decided to protect both users and developers from any security breach and disable the Chrome Developer Tools by default.",source:"@site/pages/docs/topics/best-practices/enable-dev-tools.mdx",sourceDirName:"topics/best-practices",slug:"/topics/best-practices/enable-dev-tools",permalink:"/topics/best-practices/enable-dev-tools",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/best-practices/enable-dev-tools.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657711065,formattedLastUpdatedAt:"7/13/2022",frontMatter:{id:"enable-dev-tools",title:"Enable Developer Tools",sidebar_label:"Enable Developer Tools"},sidebar:"topics",previous:{title:"Electron Migration",permalink:"/topics/best-practices/electron-migration"},next:{title:"Exclusive Mode Overlay",permalink:"/topics/best-practices/exclusive-mode"}},c={},p=[{value:"How to enable dev tools",id:"how-to-enable-dev-tools",level:2},{value:"Command line",id:"command-line",level:3},{value:"Windows registry",id:"windows-registry",level:3},{value:"Download registry key",id:"download-registry-key",level:4}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Since OW client version 0.153, we decided to protect both users and developers from any security breach and disable the Chrome Developer Tools by default. "),(0,a.mdx)("p",null,"You can toggle this feature on or off in two ways: through the command line, or the windows registry."),(0,a.mdx)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"The recommended and easiest way to enable Chrome Developer Tools is to ",(0,a.mdx)("a",{parentName:"p",href:"#windows-registry"},"add a registry key"),"."))),(0,a.mdx)("h2",{id:"how-to-enable-dev-tools"},"How to enable dev tools"),(0,a.mdx)("p",null,"There are two ways to toggle a feature (ordered by precedence): command line, or registry."),(0,a.mdx)("h3",{id:"command-line"},"Command line"),(0,a.mdx)("p",null,"To ",(0,a.mdx)("strong",{parentName:"p"},"enable")," the feature through the command line: ",(0,a.mdx)("em",{parentName:"p"},(0,a.mdx)("inlineCode",{parentName:"em"},'overwolf.exe --ow-enable-features="%feature1%,%feature2%')),"."),(0,a.mdx)("p",null,"To ",(0,a.mdx)("strong",{parentName:"p"},"disable"),": ",(0,a.mdx)("em",{parentName:"p"},(0,a.mdx)("inlineCode",{parentName:"em"},'overwolf.exe --ow-disable-features="%feature1%,%feature2%')),"."),(0,a.mdx)("p",null,"Example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-powershell"},"overwolf.exe --ow-enable-features=enable-dev-tools\n")),(0,a.mdx)("h3",{id:"windows-registry"},"Windows registry"),(0,a.mdx)("p",null,"As mentioned earlier, the easiest way to toggle the feature is by adding a registry key."),(0,a.mdx)("p",null,"This method is also not affected by a client update - once you enable a feature through the registry (for example - enabled the dev tools) - it's enabled, even if there was a client update."),(0,a.mdx)("p",null,"Uninstalling the OW client, removes the registry key."),(0,a.mdx)("p",null,"Note that the command line got higher precedence than the registry, so if it explicitly disabled this feature, the registry change will be ignored."),(0,a.mdx)("p",null,"To enable a feature through the registry, you should add it under the ","[HKEY_CURRENT_USER\\SOFTWARE\\Overwolf\\CEF]","\nnode."),(0,a.mdx)("p",null," For example, enable the dev tools feature:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-powershell"},'[HKEY_CURRENT_USER\\SOFTWARE\\Overwolf\\CEF]\n"enable-features"="enable-dev-tools"\n')),(0,a.mdx)("h4",{id:"download-registry-key"},"Download registry key"),(0,a.mdx)("p",null," To enable the developer tools on your OW client, you can save ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/community-gists/blob/master/enable-dev-tools.reg"},"this file")," to your machine (make sure to save it with the *.reg extension), and run it."))}m.isMDXComponent=!0}}]);