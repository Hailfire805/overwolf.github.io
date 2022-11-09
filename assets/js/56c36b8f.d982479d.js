"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8992],{3905:(e,a,t)=>{t.r(a),t.d(a,{MDXContext:()=>m,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>s,withMDXComponents:()=>i});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(){return l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=n.createContext({}),i=function(e){return function(a){var t=s(a.components);return n.createElement(e,l({},a,{components:t}))}},s=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(m.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},x=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),i=s(t),c=r,x=i["".concat(o,".").concat(c)]||i[c]||u[c]||l;return t?n.createElement(x,p(p({ref:a},m),{},{components:t})):n.createElement(x,p({ref:a},m))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=x;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<l;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}x.displayName="MDXCreateElement"},27192:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=t(87462),r=(t(67294),t(3905));const l={id:"crossapp",image:"/img/embed/api-docs.jpg",title:"overwolf.campaigns.crossapp API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},o=void 0,p={unversionedId:"api/campaigns/crossapp/crossapp",id:"api/campaigns/crossapp/crossapp",title:"overwolf.campaigns.crossapp API",description:"Use this API to allow crossapp-promotions.",source:"@site/pages/docs/api/campaigns/crossapp/crossapp.mdx",sourceDirName:"api/campaigns/crossapp",slug:"/api/campaigns/crossapp/",permalink:"/api/campaigns/crossapp/",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/api/campaigns/crossapp/crossapp.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"crossapp",image:"/img/embed/api-docs.jpg",title:"overwolf.campaigns.crossapp API",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"api",previous:{title:"overwolf.campaigns API",permalink:"/api/campaigns/"},next:{title:"overwolf.cryptography API",permalink:"/api/cryptography/"}},d={},m=[{value:"Methods Reference",id:"methods-reference",level:2},{value:"Events Reference",id:"events-reference",level:2},{value:"Types Reference",id:"types-reference",level:2},{value:"getAvailableActions(callback)",id:"getavailableactionscallback",level:2},{value:"Version added: 0.158",id:"version-added-0158",level:4},{value:"set(campaign, callback)",id:"setcampaign-callback",level:2},{value:"Version added: 0.158",id:"version-added-0158-1",level:4},{value:"Callback argument: Success",id:"callback-argument-success",level:4},{value:"reportConversion(conversionInfo, callback)",id:"reportconversionconversioninfo-callback",level:2},{value:"Version added: 0.158",id:"version-added-0158-2",level:4},{value:"Callback argument: Success",id:"callback-argument-success-1",level:4},{value:"consumeConversions(callback)",id:"consumeconversionscallback",level:2},{value:"Version added: 0.158",id:"version-added-0158-3",level:4},{value:"onAvailableActionUpdated",id:"onavailableactionupdated",level:2},{value:"Version added: 0.158",id:"version-added-0158-4",level:4},{value:"GetCrossAppAvailableActionsResult Object",id:"getcrossappavailableactionsresult-object",level:2},{value:"Example data: Success",id:"example-data-success",level:4},{value:"CrossAppCampaign Object",id:"crossappcampaign-object",level:2},{value:"Example object data",id:"example-object-data",level:4},{value:"id notes",id:"id-notes",level:4},{value:"expiration notes",id:"expiration-notes",level:4},{value:"data notes",id:"data-notes",level:4},{value:"CrossAppCampaignConversion Object",id:"crossappcampaignconversion-object",level:2},{value:"origin_app_uid notes",id:"origin_app_uid-notes",level:4},{value:"timestamp notes",id:"timestamp-notes",level:4},{value:"GetCrossAppConversionsResult Object",id:"getcrossappconversionsresult-object",level:2}],i={toc:m};function s(e){let{components:a,...t}=e;return(0,r.mdx)("wrapper",(0,n.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Use this API to allow crossapp-promotions."),(0,r.mdx)("p",null,"One app can promote another app and then get an indication for a successful conversion.",(0,r.mdx)("br",{parentName:"p"}),"\n","For example - an app can promote a video capture and sharing app and receive a notification as soon as the user shares a video from the promoted app."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note that the Achievement Rewards app will only work on the Overwolf Client version 0.156.0.16 and above"),"."),(0,r.mdx)("h2",{id:"methods-reference"},"Methods Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#getavailableactionscallback"},"overwolf.campaigns.crossapp.getAvailableActions()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#setcampaign-callback"},"overwolf.campaigns.crossapp.set()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#reportconversionconversioninfo-callback"},"overwolf.campaigns.crossapp.reportConversion()")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#consumeconversionscallback"},"overwolf.campaigns.crossapp.consumeConversions()"))),(0,r.mdx)("h2",{id:"events-reference"},"Events Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#onavailableactionupdated"},"overwolf.campaigns.crossapp.onAvailableActionUpdated"))),(0,r.mdx)("h2",{id:"types-reference"},"Types Reference"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#crossappcampaign-object"},"overwolf.campaigns.crossapp.CrossAppCampaign")," Object"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#crossappcampaignconversion-object"},"overwolf.campaigns.crossapp.CrossAppCampaignConversion")," Object"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#getcrossappavailableactionsresult-object"},"overwolf.campaigns.crossapp.GetCrossAppAvailableActionsResult")," Object"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"#getcrossappconversionsresult-object"},"overwolf.campaigns.crossapp.GetCrossAppConversionsResult")," Object")),(0,r.mdx)("h2",{id:"getavailableactionscallback"},"getAvailableActions(callback)"),(0,r.mdx)("h4",{id:"version-added-0158"},"Version added: 0.158"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Receive all cross-app actions that target the currently running extension.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"(",(0,r.mdx)("a",{parentName:"td",href:"#getcrossappavailableactionsresult-object"},"Result: GetCrossAppAvailableActionsResult"),") => void"),(0,r.mdx)("td",{parentName:"tr",align:null},"Returns an array of cross-app actions")))),(0,r.mdx)("h2",{id:"setcampaign-callback"},"set(campaign, callback)"),(0,r.mdx)("h4",{id:"version-added-0158-1"},"Version added: 0.158"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Initiate or modify a cross-app campaign action for this extension.")),(0,r.mdx)("p",null,"You may modify an existing action by using the same id parameter. See ",(0,r.mdx)("a",{parentName:"p",href:"#crossappcampaign-object"},"CrossAppCampaign.id"),"."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"campaign"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#crossappcampaign-object"},"CrossAppCampaign")," object"),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.mdx)("td",{parentName:"tr",align:null},"Reports success or failure.")))),(0,r.mdx)("h4",{id:"callback-argument-success"},"Callback argument: Success"),(0,r.mdx)("p",null,"Returns with the code"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"success":true}\n\n')),(0,r.mdx)("h2",{id:"reportconversionconversioninfo-callback"},"reportConversion(conversionInfo, callback)"),(0,r.mdx)("h4",{id:"version-added-0158-2"},"Version added: 0.158"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Submit new conversion for a cross-app campaign.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"conversionInfo"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#crossappcampaignconversion-object"},"CrossAppCampaignConversion")," object"),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},"(Result) => void"),(0,r.mdx)("td",{parentName:"tr",align:null},"Reports success or failure.")))),(0,r.mdx)("h4",{id:"callback-argument-success-1"},"Callback argument: Success"),(0,r.mdx)("p",null,"Returns with the code"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"success":true}\n\n')),(0,r.mdx)("h2",{id:"consumeconversionscallback"},"consumeConversions(callback)"),(0,r.mdx)("h4",{id:"version-added-0158-3"},"Version added: 0.158"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Consume all pending conversions for this extension. Consumed conversions are deleted.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"callback"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#getcrossappconversionsresult-object"},"GetCrossAppConversionsResult")," object"),(0,r.mdx)("td",{parentName:"tr",align:null})))),(0,r.mdx)("h2",{id:"onavailableactionupdated"},"onAvailableActionUpdated"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Called when an available action has updated (or added), with the following structure: ",(0,r.mdx)("a",{parentName:"p",href:"#crossappcampaign-object"},"CrossAppCampaign")," Object.")),(0,r.mdx)("h4",{id:"version-added-0158-4"},"Version added: 0.158"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Fired when current extension campaign is updated.")),(0,r.mdx)("h2",{id:"getcrossappavailableactionsresult-object"},"GetCrossAppAvailableActionsResult Object"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"success")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"error")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"actions"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#crossappcampaign-object"},"CrossAppCampaign"),"[]"),(0,r.mdx)("td",{parentName:"tr",align:null})))),(0,r.mdx)("h4",{id:"example-data-success"},"Example data: Success"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{"success":true, "actions":[]}\n')),(0,r.mdx)("h2",{id:"crossappcampaign-object"},"CrossAppCampaign Object"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Container that represent a shared data parameters.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"id"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"An id to identify the campaign (action/conversion). See ",(0,r.mdx)("a",{parentName:"td",href:"#id-notes"},"notes"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"action"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The type of action this cross-app campaign supports.This is a free-text string.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"expiration"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"Expiration date expressed in milliseconds since epoch (Unix Time, UTC). See ",(0,r.mdx)("a",{parentName:"td",href:"#expiration-notes"},"notes"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"owner_app_uid"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The UID of the app that owns the targeted cross-app campaign. Optional")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"target_apps_uids"),(0,r.mdx)("td",{parentName:"tr",align:null},"string[]"),(0,r.mdx)("td",{parentName:"tr",align:null},"An array of app UIDs this cross-app campaign targets. Optional")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"data"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"Information about the cross-app campaign. See ",(0,r.mdx)("a",{parentName:"td",href:"#data-notes"},"notes"),".")))),(0,r.mdx)("h4",{id:"example-object-data"},"Example object data"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "xxxxxx_bbbbbbDxk", // fake\n    "action": "ar-invite",\n    "expiration": 1735733700000,\n    "target_apps_uids": ["*"],\n    "data": \n    {\n        "name": "ar-campaign", // fake\n        "iconUrl": "overwolf-extension://lkjsndfnnnnd.../campaigns/xxxxxx_bbbbbbDx/icon.svg",\n        "text": "with The Branded Challenge!"\n        "textColor": "E6E6E6"\n        "title": "Win a cool Reward",\n        "titleColor": "#B2A1E5",\n        \n    }\n }\n')),(0,r.mdx)("h4",{id:"id-notes"},"id notes"),(0,r.mdx)("p",null,'"id" should be unique per an extension (two different extensions can use the same id).'),(0,r.mdx)("h4",{id:"expiration-notes"},"expiration notes"),(0,r.mdx)("p",null,"e.g. Date.now() or (new Date()).getTime()."),(0,r.mdx)("h4",{id:"data-notes"},"data notes"),(0,r.mdx)("p",null,"This is a free-form json object that gives more instructions on the required action."),(0,r.mdx)("h2",{id:"crossappcampaignconversion-object"},"CrossAppCampaignConversion Object"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Container that represent a cross app campaign conversions.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"id"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The ID of the cross-app campaign the conversion targets.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"owner_app_uid"),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},"The UID of the app that owns the targeted cross-app campaign.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"data"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"Conversion data for the specified action.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"origin_app_uid"),(0,r.mdx)("td",{parentName:"tr",align:null},"object"),(0,r.mdx)("td",{parentName:"tr",align:null},"The UID of the app that performed the conversion (the promoted app). Optional. See ",(0,r.mdx)("a",{parentName:"td",href:"#origin_app_uid-notes"},"notes"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"timestamp"),(0,r.mdx)("td",{parentName:"tr",align:null},"number"),(0,r.mdx)("td",{parentName:"tr",align:null},"When the conversion took place.  Optional. See ",(0,r.mdx)("a",{parentName:"td",href:"#timestamp-notes"},"notes"),".")))),(0,r.mdx)("h4",{id:"origin_app_uid-notes"},"origin_app_uid notes"),(0,r.mdx)("p",null,"Set by the Overwolf client when calling |consumeConversions|."),(0,r.mdx)("h4",{id:"timestamp-notes"},"timestamp notes"),(0,r.mdx)("p",null,"Set by the Overwolf client when calling |consumeConversions|."),(0,r.mdx)("h2",{id:"getcrossappconversionsresult-object"},"GetCrossAppConversionsResult Object"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Container that represent a cross app conversions.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"success")),(0,r.mdx)("td",{parentName:"tr",align:null},"boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("em",{parentName:"td"},"error")),(0,r.mdx)("td",{parentName:"tr",align:null},"string"),(0,r.mdx)("td",{parentName:"tr",align:null},'inherited from the "Result" Object')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"conversions"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"#crossappcampaignconversion-object"},"CrossAppCampaignConversion"),"[]"),(0,r.mdx)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);