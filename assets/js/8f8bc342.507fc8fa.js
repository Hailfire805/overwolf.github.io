"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[903],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39746:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(25773),o=(a(27378),a(35318));const r={id:"app-analytics",image:"/img/embed/api-best-practices.jpg",title:"Using Analytics in your app",sidebar_label:"Integrating app analytics",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},i=void 0,s={unversionedId:"topics/integrations/app-analytics",id:"topics/integrations/app-analytics",title:"Using Analytics in your app",description:"One of the most effective ways to improve your app and learn more about your users is implementing solid analytics that provide you with usage statistics. Stats support your product decision making by providing real-world user usage data, including showing how users actually interact with each part of your product. Analytics also underline where users drop off and lose interest, what product abilities are completely ignored and much more.",source:"@site/pages/docs/topics/integrations/app-analytics.mdx",sourceDirName:"topics/integrations",slug:"/topics/integrations/app-analytics",permalink:"/topics/integrations/app-analytics",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/integrations/app-analytics.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1692100274,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{id:"app-analytics",image:"/img/embed/api-best-practices.jpg",title:"Using Analytics in your app",sidebar_label:"Integrating app analytics",sidebar_custom_props:{tags:{overwolf_platform:!0,electron_platform:!1}}},sidebar:"topics",previous:{title:"Webinars",permalink:"/topics/community-help/webinars"},next:{title:"Event SDK for Game Devs",permalink:"/topics/integrations/events-sdk-for-game-developers"}},l={},p=[{value:"Google Analytics: Basic Implementation",id:"google-analytics-basic-implementation",level:2},{value:"Update your manifest.json",id:"update-your-manifestjson",level:3},{value:"Create a Google Analytics account and generate a new property",id:"create-a-google-analytics-account-and-generate-a-new-property",level:3},{value:"Update your pages",id:"update-your-pages",level:3},{value:"Update your tracking code",id:"update-your-tracking-code",level:3},{value:"More info",id:"more-info",level:2}],c=(d="ImageBoxModal",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const u={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One of the most effective ways to improve your app and learn more about your users is implementing solid analytics that provide you with usage statistics. Stats support your product decision making by providing real-world user usage data, including showing how users actually interact with each part of your product. Analytics also underline where users drop off and lose interest, what product abilities are completely ignored and much more."),(0,o.kt)("p",null,"We recommend using a web analytics service to collect app data, measure user engagement and improve monetization. Our preference is the industry standard ",(0,o.kt)("a",{parentName:"p",href:"https://marketingplatform.google.com/about/analytics/features/"},"Google Analytics"),"."),(0,o.kt)("p",null,"Please take the time you need to implement any chosen analytics service thoroughly and test it to make sure it's working as intended."),(0,o.kt)("h2",{id:"google-analytics-basic-implementation"},"Google Analytics: Basic Implementation"),(0,o.kt)("admonition",{title:"note",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The below information is regarding the implementation of Google Analytics' ",(0,o.kt)("strong",{parentName:"p"},'"analytics.js"'),". The newer, more up-to-date implementation of ",(0,o.kt)("strong",{parentName:"p"},'"gtag.js"')," ",(0,o.kt)("em",{parentName:"p"},"does not work")," in Overwolf apps at the moment. Keep this in mind when searching for implementation documentation elsewhere.")),(0,o.kt)("h3",{id:"update-your-manifestjson"},"Update your manifest.json"),(0,o.kt)("p",null,"Open up the external connections necessary for communicating with the Google service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n"data":{  \n   "externally_connectable":{  \n      "matches":[  \n         "https://*.google-analytics.com",\n         "http://www.google-analytics.com"\n      ]\n   }\n}\n')),(0,o.kt)("h3",{id:"create-a-google-analytics-account-and-generate-a-new-property"},"Create a Google Analytics account and generate a new property"),(0,o.kt)("p",null,'Select "Website" as your tracked object, enter your website name, website URL and select your preferred reporting time zone.'),(0,o.kt)(c,{mdxType:"ImageBoxModal"},(0,o.kt)("img",{src:a(73941).Z,alt:"Create a new property"})),(0,o.kt)("h3",{id:"update-your-pages"},"Update your pages"),(0,o.kt)("p",null,"Let's assume that you want to track events in your index page. In your /index.html, add a reference to the tracking script in a separate file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n  ...\n  <script src="js/index.js"><\/script>\n  ...\n</head>\n<body>\n  ...\n</body>\n</html>\n')),(0,o.kt)("h3",{id:"update-your-tracking-code"},"Update your tracking code"),(0,o.kt)("p",null,"Add the tracking JavaScript, for example at js/index.js, with the Universal Analytics code. Note the \u201chttps\u201d at the start of the script address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Standard Google Universal Analytics code\n(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function()\n   {\n      (i[r].q=i[r].q||[]).push(arguments)\n   },\n   i[r].l=1*new Date();a=s.createElement(o),\n   m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n   // Note: https protocol here\n})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\nga('create', 'UA-XXXXX-YY', 'auto');\n\n// Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200\nga('set', 'checkProtocolTask', function(){}); \nga('require', 'displayfeatures');\nga('send', 'pageview', '/index.html');\n")),(0,o.kt)("p",null,"If that all went well, you should see page tracking appear in Google Analytics, like so:"),(0,o.kt)(c,{mdxType:"ImageBoxModal"},(0,o.kt)("img",{src:a(73533).Z,alt:"process",width:"900"})),(0,o.kt)("h2",{id:"more-info"},"More info"),(0,o.kt)("p",null,"Find more information on best practices and more guides for implementing google analytics ",(0,o.kt)("a",{parentName:"p",href:"https://analytics.google.com/analytics/academy/"},"here.")))}m.isMDXComponent=!0},73533:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ga-sample-6e47bd23d70afabb5b660174a3048415.jpg"},73941:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ga1-b911787130f57c2bf8402dec3f517e6b.jpg"}}]);