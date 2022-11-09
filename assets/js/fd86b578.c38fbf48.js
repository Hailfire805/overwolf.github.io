"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2669],{3905:(e,t,o)=>{o.r(t),o.d(t,{MDXContext:()=>d,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>u});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i.apply(this,arguments)}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),u=function(e){return function(t){var o=c(t.components);return n.createElement(e,i({},t,{components:o}))}},c=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(o),p=r,h=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return o?n.createElement(h,a(a({ref:t},d),{},{components:o})):n.createElement(h,a({ref:t},d))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var d=2;d<i;d++)l[d]=o[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},2058:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=o(87462),r=o(67294),i=o(3905);const l=function(e){const[t,o]=(0,r.useState)(null),[n,i]=(0,r.useState)(null);(0,r.useEffect)((()=>{i(localStorage.ssoDemoAccessToken||null),window.addEventListener("storage",l,!1)}),[]);const l=e=>{"ssoDemoAccessToken"===e.key&&i(e.newValue)};return r.createElement(r.Fragment,null,n&&r.createElement("div",{className:"sso-demo"},r.createElement("p",null,r.createElement("strong",null,"You logged in. The authorization token is:")),r.createElement("code",null,n)),null==n&&r.createElement("div",{className:"sso-demo"},r.createElement("button",{className:"button-sso-login",onClick:()=>(()=>{const e=window.open("https://accounts.overwolf.com/oauth2/auth?response_type=code&client_id=GYp5FgzDpr8vctky&redirect_uri=http://sso-sample-server.overwolf.com/auth/overwolf/callback&scope=openid+profile+email","_blank");e.onbeforeunload=()=>o(null),o(e)})()},"Login with OW")))},a={id:"login-with-overwolf",image:"/img/embed/api-best-practices.jpg",title:"App login with Overwolf",sidebar_label:"Login with Overwolf",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},s=void 0,d={unversionedId:"topics/integrations/login-with-overwolf",id:"topics/integrations/login-with-overwolf",title:"App login with Overwolf",description:"This article will explain how to implement an Overwolf login/auth interface in your website.",source:"@site/pages/docs/topics/integrations/login-with-overwolf.mdx",sourceDirName:"topics/integrations",slug:"/topics/integrations/login-with-overwolf",permalink:"/topics/integrations/login-with-overwolf",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/integrations/login-with-overwolf.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1667999405,formattedLastUpdatedAt:"Nov 9, 2022",frontMatter:{id:"login-with-overwolf",image:"/img/embed/api-best-practices.jpg",title:"App login with Overwolf",sidebar_label:"Login with Overwolf",sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"topics",previous:{title:"Event SDK for Game Devs",permalink:"/topics/integrations/events-sdk-for-game-developers"},next:{title:"Login with Twitch",permalink:"/topics/integrations/login-with-twitch"}},u={},c=[{value:"Typical usage",id:"typical-usage",level:2},{value:"Login flow overview",id:"login-flow-overview",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Register your app on Overwolf",id:"register-your-app-on-overwolf",level:3},{value:"Create redirect_uri endpoint",id:"create-redirect_uri-endpoint",level:3},{value:"Required Query params:",id:"required-query-params",level:4},{value:"Required HTTP headers:",id:"required-http-headers",level:4},{value:"Sample code",id:"sample-code",level:4},{value:"1. Engage the SSO flow.",id:"1-engage-the-sso-flow",level:2},{value:"Required Query params:",id:"required-query-params-1",level:4},{value:"2. Login on Overwolf",id:"2-login-on-overwolf",level:2},{value:"3. Get the auth token",id:"3-get-the-auth-token",level:2},{value:"Get user info from token",id:"get-user-info-from-token",level:3},{value:"4. Close the login window.",id:"4-close-the-login-window",level:2},{value:"5. Live Demo",id:"5-live-demo",level:2},{value:"Download from Github",id:"download-from-github",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,i.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"This article will explain how to implement an Overwolf login/auth interface in your website."),(0,i.mdx)("h2",{id:"typical-usage"},"Typical usage"),(0,i.mdx)("p",null,"One of the common uses for this feature is to enable OW apps developers to identify subscribed users on their website.\nMany times you would like to offer your premium users that purchased a subscription some unique features or content."),(0,i.mdx)("p",null,"Besides, you can use this feature to do whatever you like: enable your users to use single sign-on without the need for a separate account, display synced info from your server (info that gathered using your OW apps and now can be displayed on your website too), etc."),(0,i.mdx)("h2",{id:"login-flow-overview"},"Login flow overview"),(0,i.mdx)("p",null,"This flow is for web browser only, we do not currently offer a client SDK that supports API-based authentication."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Developers register their app for the OW SSO and get a unique client_id and client_secret."),(0,i.mdx)("li",{parentName:"ul"},'The actual login is done using a login form hosted on the OW servers. This means you should only implement a "Login with Overwolf" button in your website. Once clicked, this button will open a new window/tab with the OW login form. (More info in ',(0,i.mdx)("a",{parentName:"li",href:"#1-engage-the-sso-flow"},"step 1: Engage the SSO flow"),")."),(0,i.mdx)("li",{parentName:"ul"},"Once the login is completed on the OW hosted login page, the user is redirected to a pre-defined redirect_URI hosted on YOUR server (More info on how to implement this page in ",(0,i.mdx)("a",{parentName:"li",href:"#create-redirect_uri-endpoint"},'"Create redirect_uri endpoint"'),")."),(0,i.mdx)("li",{parentName:"ul"},"The redirect_URI page executes a POST request to OW servers to request and get the auth token (and might include some other details like email, subscriptions, etc.) that was created after the login (More info in ",(0,i.mdx)("a",{parentName:"li",href:"#3-get-the-auth-token"},"step 3: Get the auth token"),").")),(0,i.mdx)("h2",{id:"prerequisite"},"Prerequisite"),(0,i.mdx)("h3",{id:"register-your-app-on-overwolf"},"Register your app on Overwolf"),(0,i.mdx)("p",null,"Before implementing the OW login in your website, you must register your app on Overwolf. To register, just send us an email to ",(0,i.mdx)("a",{parentName:"p",href:"mailto:developers@overwolf.com."},"developers@overwolf.com.")," Once you register, your ",(0,i.mdx)("inlineCode",{parentName:"p"},"client_id")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"client_secret")," will be generated."),(0,i.mdx)("p",null,"You should provide these parameters:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"client_name - The app's name."),(0,i.mdx)("li",{parentName:"ol"},"redirect_uris - An endpoint hosted on your server. More details ",(0,i.mdx)("a",{parentName:"li",href:"#create-redirect_uri-endpoint"},"here"),"."),(0,i.mdx)("li",{parentName:"ol"},"logo_uri - URL of the app's logo."),(0,i.mdx)("li",{parentName:"ol"},"policy_uri - URL of the app's privacy policy."),(0,i.mdx)("li",{parentName:"ol"},'tos_uri - URL of the app\'s "Terms of Service".')),(0,i.mdx)("p",null,"Note: all the URIs needs to be accessible with a public domain (not localhost). Otherwise, our servers will not be able to complete the flow."),(0,i.mdx)("p",null,"Your app's ",(0,i.mdx)("inlineCode",{parentName:"p"},"client_id")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"client_secret")," will be provided once you complete the registration."),(0,i.mdx)("h3",{id:"create-redirect_uri-endpoint"},"Create redirect_uri endpoint"),(0,i.mdx)("p",null,"On your server, create an endpoint used to get the auth-token from Overwolf (by making a POST request to the OW server)."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"POST https://accounts.overwolf.com/oauth2/token?client_id={client id}&client_secret={client secret}&grant_type=authorization_code&code={code that came from request object, e.g: request.query.code}&redirect_uri={redirect_uri}\n")),(0,i.mdx)("h4",{id:"required-query-params"},"Required Query params:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"client_id"),(0,i.mdx)("li",{parentName:"ul"},"client_secret"),(0,i.mdx)("li",{parentName:"ul"},"grant_type"),(0,i.mdx)("li",{parentName:"ul"},"code"),(0,i.mdx)("li",{parentName:"ul"},"redirect_uri")),(0,i.mdx)("h4",{id:"required-http-headers"},"Required HTTP headers:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},'Content-Type: "application/x-www-form-urlencoded"')),(0,i.mdx)("h4",{id:"sample-code"},"Sample code"),(0,i.mdx)("p",null,"This is an example code that shows how to implement a redirect_uri endpoint on your server."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"var express = require('express');\nvar router = express.Router();\nconst axios = require('axios');\nconst querystring = require('querystring');\n\nconst demoClient = {\n  client_id: 'xxxxxxxx',\n  client_secret: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',\n};\n\n/**\n * this is the callback endpoint as passed in the redirect_uri parameter\n * and should be whitelisted in the oauth client application\n */\nrouter.get('/auth/overwolf/callback', function(req, res, next) {\n  const client = demoClient;\n  axios.post('https://accounts.overwolf.com/oauth2/token',\n    querystring.stringify({\n      client_id: client.client_id,\n      client_secret: client.client_secret,\n      grant_type: 'authorization_code',\n      code: req.query.code,\n      redirect_uri: 'http://localhost:5000/auth/overwolf/callback'\n    }),\n    {\n      headers: {\n        \"Content-Type\": \"application/x-www-form-urlencoded\"\n      }\n    }).then(function(response) {\n      // the response will contain the access token to be used\n      console.log(response);\n      res.json({});\n    }).catch((e) => {\n      console.error(e)\n      res.send('err')\n  });\n});\n\nrouter.get('/oidcresult', function(req, res, next) {\n  res.json(req.query);\n});\n\nmodule.exports = router;\n")),(0,i.mdx)("p",null,"As you can see, ",(0,i.mdx)("inlineCode",{parentName:"p"},"redirect_uri")," is ",(0,i.mdx)("inlineCode",{parentName:"p"},"http://localhost:5000/auth/overwolf/callback"),". This page receives the auth token (or login error) once the auth process is finished on the OW side."),(0,i.mdx)("h2",{id:"1-engage-the-sso-flow"},"1. Engage the SSO flow."),(0,i.mdx)("p",null,"The first step is to implement a login button on your website.\nClicking the button should open a new tab or popup window by implementing this GET request:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"GET https://accounts.overwolf.com/oauth2/auth?response_type=code&client_id={client id}&redirect_uri={redirect_uri}&scope={desired scope separated by '+', e.g: openid+profile+email}\n")),(0,i.mdx)("h4",{id:"required-query-params-1"},"Required Query params:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"response_type"),(0,i.mdx)("li",{parentName:"ul"},"client_id"),(0,i.mdx)("li",{parentName:"ul"},"redirect_uri"),(0,i.mdx)("li",{parentName:"ul"},"scope - here you can define which details you would like to fetch from OW server.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Currently you can get the user openID, profile image, email. Soon, you will be able to get also the ",(0,i.mdx)("inlineCode",{parentName:"li"},"active subscriptions")," for this user."),(0,i.mdx)("li",{parentName:"ul"},"During the login process the user will have to accept each scope, through the consent form (more details below).")))),(0,i.mdx)("h2",{id:"2-login-on-overwolf"},"2. Login on Overwolf"),(0,i.mdx)("p",null,"Once the SSO flow is engaged, the user is redirected to the OW hosted login page:"),(0,i.mdx)("p",null,"!",(0,i.mdx)("img",{alt:"OW login screenshot",src:o(37497).Z,width:"1129",height:"706"})),(0,i.mdx)("p",null,"On successful login, the user will see a consent screen to requested scopes:"),(0,i.mdx)("p",null,"!",(0,i.mdx)("img",{alt:"OW login consent",src:o(11511).Z,width:"564",height:"703"})),(0,i.mdx)("p",null,"After the consent, we will redirect the user back to the redirect_uri pre-defined in the registration process."),(0,i.mdx)("h2",{id:"3-get-the-auth-token"},"3. Get the auth token"),(0,i.mdx)("p",null,"If no error occurred during the flow, the user is redirected to the redirect_uri endpoint, that POSTS the request for the auth-token.\nYou can see how this POST request looks like in the ",(0,i.mdx)("a",{parentName:"p",href:"#create-redirect_uri-endpoint"},"Create redirect_uri endpoint\n")," section."),(0,i.mdx)("p",null,"Once the POST completed, you will get the following auth token details:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"access_token"),(0,i.mdx)("li",{parentName:"ul"},"expires_in"),(0,i.mdx)("li",{parentName:"ul"},"id_token"),(0,i.mdx)("li",{parentName:"ul"},"scope"),(0,i.mdx)("li",{parentName:"ul"},"token_type")),(0,i.mdx)("h3",{id:"get-user-info-from-token"},"Get user info from token"),(0,i.mdx)("p",null,"Once you have the encrypted JWT token, you can easily decode/decrypt it on your server side code using one of the ",(0,i.mdx)("a",{parentName:"p",href:"https://jwt.io/"},"available JWT libraries")," and get some additional user info:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Sub (username)"),(0,i.mdx)("li",{parentName:"ul"},"Nickname"),(0,i.mdx)("li",{parentName:"ul"},"Picture (avatar)"),(0,i.mdx)("li",{parentName:"ul"},"Email"),(0,i.mdx)("li",{parentName:"ul"},"Other JWT properties.")),(0,i.mdx)("p",null,"Most JWT packages can decode the token without verifying it, but in the production environment, it's recommended to verify the token to make sure that it hasn't been tampered with."),(0,i.mdx)("p",null,"For example, the npm package ",(0,i.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/jsonwebtoken"},"jsonwebtoken")," offers ",(0,i.mdx)("inlineCode",{parentName:"p"},"jwt.decode()")," to decode the token  and ",(0,i.mdx)("inlineCode",{parentName:"p"},"jwt.verify()")," to verify it."),(0,i.mdx)("p",null,"Note that for verification, the OW public key is required. You can find it on this endpoint: ",(0,i.mdx)("a",{parentName:"p",href:"https://accounts.overwolf.com/oauth2/jwks.json"},"https://accounts.overwolf.com/oauth2/jwks.json"),"."),(0,i.mdx)("h2",{id:"4-close-the-login-window"},"4. Close the login window."),(0,i.mdx)("p",null,"Now, we can safely close the login window."),(0,i.mdx)("p",null,"The login process is complete."),(0,i.mdx)("h2",{id:"5-live-demo"},"5. Live Demo"),(0,i.mdx)("p",null,"Below you can find a live example of the Overwolf SSO Process:"),(0,i.mdx)("p",null,"After clicking on this page, a new tab will open, and you will be able to login with your Overwolf username. Afterwards, you'll be sent back to this page, and the token will be displayed."),(0,i.mdx)("p",null,"Of course, in practice, you will do something more meaningful with the auth token..."),(0,i.mdx)(l,{mdxType:"SSODemo"}),(0,i.mdx)("p",null,"Note: currently, after login, you can't logout. Soon we will add here a logout button that enables you to quickly logout."),(0,i.mdx)("h2",{id:"download-from-github"},"Download from Github"),(0,i.mdx)("p",null,"The server side code implemented in our server (in the redirect_uri), can be downloaded from ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/overwolf/ow-sso"},"our Github"),"."))}m.isMDXComponent=!0},37497:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ow_login-a25e393a9edec5e39eed235fac8415bd.png"},11511:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ow_login_consent-a4ceb6247dd9845a16bbc1ca3d8ad0ca.png"}}]);