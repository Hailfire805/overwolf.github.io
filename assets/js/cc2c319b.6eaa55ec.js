"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1559],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(27378);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=s,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||i;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:s,r[1]=a;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var o=n(25773),s=(n(27378),n(35318));const i={id:"subscriptions",image:"/img/embed/dev-tools.jpg",title:"Subscriptions",sidebar_position:40,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},r=void 0,a={unversionedId:"tools/developers-console/all-applications/subscriptions/subscriptions",id:"tools/developers-console/all-applications/subscriptions/subscriptions",title:"Subscriptions",description:"This section of the console allows you to manage your app's active subscriptions and subscription plans.",source:"@site/pages/docs/tools/developers-console/all-applications/subscriptions/subscriptions.mdx",sourceDirName:"tools/developers-console/all-applications/subscriptions",slug:"/tools/developers-console/all-applications/subscriptions/",permalink:"/tools/developers-console/all-applications/subscriptions/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/tools/developers-console/all-applications/subscriptions/subscriptions.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",sidebarPosition:40,frontMatter:{id:"subscriptions",image:"/img/embed/dev-tools.jpg",title:"Subscriptions",sidebar_position:40,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"tools",previous:{title:"User Logs",permalink:"/tools/developers-console/all-applications/user-logs"},next:{title:"Statistics",permalink:"/tools/developers-console/all-applications/subscriptions/statistics"}},l={},p=[],c={toc:p};function u(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section of the console allows you to manage your app's active subscriptions and subscription plans.\n",(0,s.kt)("img",{alt:"The Subscriptions Tab",src:n(5031).Z,width:"277",height:"393"})),(0,s.kt)("p",null,"If you don\u2019t yet have a subscription plan enabled, follow ",(0,s.kt)("a",{parentName:"p",href:"/start/monetize-with-subs/subscriptions-overview"},"our guide first"),"."),(0,s.kt)("p",null,"Inside this tab, you will find:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Subscription ",(0,s.kt)("a",{parentName:"li",href:"subscriptions/statistics"},"Statistics"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"subscriptions/subscription-plans"},"Subscription Plans")," listing."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"subscriptions/subscribers"},"Subscribers")," listing.")),(0,s.kt)("admonition",{title:"Plan Activity",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Your app can have several different subscription plans, and each user can have several different active subscriptions."),(0,s.kt)("p",{parentName:"admonition"},'However, only one subscription plan can be "Activated" at any point. This plan, marked as "Active" in its status, will be the plan\nthat any user attempting to purchase a subscription to the app will be pointed to.'),(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("strong",{parentName:"p"},"A user can have an active subscription to an inactive plan, and even renew it automatically through Xsolla!"),"\n",(0,s.kt)("strong",{parentName:"p"},"As such, changing the active subscription plan will not affect existing subscribers!"))))}u.isMDXComponent=!0},5031:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/index-c745aca001a7294564660548c6824c7b.jpg"}}]);