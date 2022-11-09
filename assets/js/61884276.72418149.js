"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4195],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>p,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>l});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){return function(t){var n=m(t.components);return r.createElement(e,o({},t,{components:n}))}},m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=m(n),c=a,f=l["".concat(i,".").concat(c)]||l[c]||u[c]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},20520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={id:"ads-sdk-options",image:"/img/embed/getting-started.jpg",title:"Configuring your Ads",sidebar_label:"Configuring your Ads",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,s={unversionedId:"start/monetize-with-ads/ads-sdk-options",id:"start/monetize-with-ads/ads-sdk-options",title:"Configuring your Ads",description:"There are ways to further configure ads after setting up a container. For one, providing a JSON object as the second parameter when calling the OwAd constructor works:",source:"@site/pages/docs/start/monetize-with-ads/ads-sdk-options.mdx",sourceDirName:"start/monetize-with-ads",slug:"/start/monetize-with-ads/ads-sdk-options",permalink:"/start/monetize-with-ads/ads-sdk-options",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/monetize-with-ads/ads-sdk-options.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"ads-sdk-options",image:"/img/embed/getting-started.jpg",title:"Configuring your Ads",sidebar_label:"Configuring your Ads",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"start",previous:{title:"Managing Ads",permalink:"/start/monetize-with-ads/ads-sdk-interaction"},next:{title:"Ads SDK overview",permalink:"/start/monetize-with-ads/ads-sdk-overview"}},d={},p=[{value:"configuration options",id:"configuration-options",level:3},{value:"<em>Size</em> description",id:"size-description",level:3}],l={toc:p};function m(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"There are ways to further configure ads after setting up a container. For one, providing a JSON object as the second parameter when calling the ",(0,a.mdx)("inlineCode",{parentName:"p"},"OwAd")," constructor works:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},'new OwAd(document.getElementById("ad-div"), {size: {width: 400, height: 300}})\n')),(0,a.mdx)("h3",{id:"configuration-options"},"configuration options"),(0,a.mdx)("p",null,"The following configuration options are supported:"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Option"),(0,a.mdx)("th",{parentName:"tr",align:"center"},"Type"),(0,a.mdx)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("a",{parentName:"td",href:"#size-description"},"Size")),(0,a.mdx)("td",{parentName:"tr",align:"center"},"JSON Object / Array of JSON Objects"),(0,a.mdx)("td",{parentName:"tr",align:"left"},(0,a.mdx)("inlineCode",{parentName:"td"},"{width: 400, height:300}"))))),(0,a.mdx)("h3",{id:"size-description"},(0,a.mdx)("em",{parentName:"h3"},"Size")," description"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Sets the dimensions of the ad displayed based on the supported placements below. This should be a JSON object with two properties: ",(0,a.mdx)("strong",{parentName:"p"},"width")," & ",(0,a.mdx)("strong",{parentName:"p"},"height"),".",(0,a.mdx)("br",{parentName:"p"}),"\n","Example: ",(0,a.mdx)("inlineCode",{parentName:"p"},"{width: 400, height:300}"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Alternatively, you can input an array of JSON objects to allow for multiple formats of ads. Example: ",(0,a.mdx)("inlineCode",{parentName:"p"},"[{width:400, height:300}, {width:300, height:250}]")," will enable ads in both size formats for that container.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Currently supported placements:"),(0,a.mdx)("ol",{parentName:"li"},(0,a.mdx)("li",{parentName:"ol"},"400\xd7300 - Contains 400x300 & 300x250 (Video),  300x250 / 336x280 / 250x250 (Display banners)"),(0,a.mdx)("li",{parentName:"ol"},"300x250 - Contains 300x250 (Video), 300x250 / 250x250 (Display banners)"),(0,a.mdx)("li",{parentName:"ol"},"400x600 - Contains 400x300 & 300x250 (Video), 300x600 / 300x250 / 336x280 / 250x250 (Display banners)"),(0,a.mdx)("li",{parentName:"ol"},"160x600 - Contains 160x600 / 120x600 (Display banner)"),(0,a.mdx)("li",{parentName:"ol"},"728x90"))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"For 400x600 ad placement, please use the following: ",(0,a.mdx)("inlineCode",{parentName:"p"},"[{width:400, height:600}, {width:400, height:300}]")))),(0,a.mdx)("admonition",{type:"warning"},(0,a.mdx)("p",{parentName:"admonition"},"Make sure to only enter values that are supported by Overwolf. Entering an unsupported value will result in no ads showing.")))}m.isMDXComponent=!0}}]);