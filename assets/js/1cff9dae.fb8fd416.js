"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3438],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=l(r),d=n,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||s;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:n,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=r(25773),n=(r(27378),r(35318));const s={id:"subscriptions-overview",image:"/img/embed/getting-started.jpg",title:"Subscriptions overview",sidebar_label:"Subscriptions overview",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,a={unversionedId:"start/monetize-with-subs/subscriptions-overview",id:"start/monetize-with-subs/subscriptions-overview",title:"Subscriptions overview",description:"Overwolf ads are crafted for gamers, showing in the most appropriate times when there are breaks in the action, and never bothering gamers while playing. Even so, some users still prefer to remove ads entirely regardless of timing and location. To address these requests and to generate more revenue for app creators, we\u2019ve set up a new tool in your monetization arsenal - app subscription.",source:"@site/pages/docs/start/monetize-with-subs/subscriptions-overview.mdx",sourceDirName:"start/monetize-with-subs",slug:"/start/monetize-with-subs/subscriptions-overview",permalink:"/start/monetize-with-subs/subscriptions-overview",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/monetize-with-subs/subscriptions-overview.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1675088026,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{id:"subscriptions-overview",image:"/img/embed/getting-started.jpg",title:"Subscriptions overview",sidebar_label:"Subscriptions overview",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"start",previous:{title:"Integrate subscriptions",permalink:"/start/monetize-with-subs/subscriptions-integration"},next:{title:"Request an app plan",permalink:"/start/monetize-with-subs/subscriptions-request-form"}},p={},l=[{value:"Subscription Basics",id:"subscription-basics",level:2},{value:"Who can sub?",id:"who-can-sub",level:2},{value:"The overwolf.profile.subscription API",id:"the-overwolfprofilesubscription-api",level:2},{value:"We&#39;re here to help",id:"were-here-to-help",level:2},{value:"Request a Subscription plan",id:"request-a-subscription-plan",level:2},{value:"Can I integrate external payment solutions?",id:"can-i-integrate-external-payment-solutions",level:2}],u={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Overwolf ads are crafted for gamers, showing in the most appropriate times when there are breaks in the action, and never bothering gamers while playing. Even so, some users still prefer to remove ads entirely regardless of timing and location. To address these requests and to generate more revenue for app creators, we\u2019ve set up a new tool in your monetization arsenal - app subscription. "),(0,n.kt)("p",null,"Gamers are now able to pay a monthly fee to become premium users of your app, getting special perks and services in return. We encourage you to think of cool ways to reward premium users and improve their experience beyond just removing all ads from the subscribed app. "),(0,n.kt)("p",null,"Subscriptions provide you with a stable source of income, but even more importantly bring your users closer and increases their engagement with your project - they are supporting you to keep working on an app they enjoy remember to show them some love!"),(0,n.kt)("h2",{id:"subscription-basics"},"Subscription Basics"),(0,n.kt)("p",null,"A complete user flow can be found ",(0,n.kt)("a",{parentName:"p",href:"subscriptions-flow"},"here"),".  "),(0,n.kt)("p",null,"Detailed instructions on how to implement subscriptions in your app can be found ",(0,n.kt)("a",{parentName:"p",href:"subscriptions-integration"},"here"),"."),(0,n.kt)("p",null,"Any application can launch a subscription program based on removing ads, but we strongly recommend producing new perks and benefits for Premium users to ensure they feel like they got good returns for their investment."),(0,n.kt)("h2",{id:"who-can-sub"},"Who can sub?"),(0,n.kt)("p",null,"Any of your users with a Paypal account or international credit card can subscribe to an app."),(0,n.kt)("h2",{id:"the-overwolfprofilesubscription-api"},"The overwolf.profile.subscription API"),(0,n.kt)("p",null,"Read full API documentation for the subscriptions API ",(0,n.kt)("a",{parentName:"p",href:"/api/profile/subscriptions"},"here"),"."),(0,n.kt)("h2",{id:"were-here-to-help"},"We're here to help"),(0,n.kt)("p",null,"Our developer success team is ready to help implement your first subscription program! If you\u2019re not certain about the features you want to add or how to implement them, don\u2019t hesitate to ",(0,n.kt)("a",{parentName:"p",href:"/support/contact-us"},"reach out"),"."),(0,n.kt)("h2",{id:"request-a-subscription-plan"},"Request a Subscription plan"),(0,n.kt)("p",null,"Please fill ",(0,n.kt)("a",{parentName:"p",href:"subscriptions-request-form"},"this form")," in order to get an app subscription plan."),(0,n.kt)("h2",{id:"can-i-integrate-external-payment-solutions"},"Can I integrate external payment solutions?"),(0,n.kt)("p",null,"Yes, but you\u2019ll have to get approval first.\nLonger answer - Overwolf offers ads and subscriptions as a service for creators to monetize their apps. Overwolf\u2019s revenue is generated through a revenue share from those ads and subscriptions and as a result, Patreon, direct PayPal, or any other payment solutions services that are outside of Overwolf\u2019s ecosystem, creates complexity. And still, we understand that this might be important for some.You can do that by sending us an ",(0,n.kt)("a",{parentName:"p",href:"mailto:developers@overwolf.com"},"email"),", or by contacting your direct Developer Relations Manager. We\u2019re continuously improving our subscription service to make sure it\u2019ll fit all your needs. If you have any suggestions for us on how to improve, we\u2019d love to hear it in a ",(0,n.kt)("a",{parentName:"p",href:"/support/request-a-feature"},"feature request"),"."),(0,n.kt)("p",null,"To read more about Overwolf\u2019s business model ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/overwolf/how-does-overwolf-make-money-f70a195a4ea9#:~:text=So%20how%20DO%20we%20make,subscription%20plans%20to%20their%20apps.&text=A%20little%20over%2085%25%20of,passed%20on%20to%20app%20creators."},"click here"),"."))}c.isMDXComponent=!0}}]);