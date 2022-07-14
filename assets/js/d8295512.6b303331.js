"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8182],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return p},MDXProvider:function(){return s},mdx:function(){return b},useMDXComponents:function(){return u},withMDXComponents:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),m=function(e){return function(n){var t=u(n.components);return r.createElement(e,i({},n,{components:t}))}},u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},w=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=u(t),s=a,w=m["".concat(o,".").concat(s)]||m[s]||c[s]||i;return t?r.createElement(w,l(l({ref:n},p),{},{components:t})):r.createElement(w,l({ref:n},p))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=w;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}w.displayName="MDXCreateElement"},49082:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"app-automation",title:"App Automation",sidebar_label:"App Automation"},d=void 0,p={unversionedId:"start/test-your-app/app-automation",id:"start/test-your-app/app-automation",title:"App Automation",description:"This article explains how to enable and set up Overwolf app automation in Node.js using ChromeDriver and selenium-webdriver / webdriverio.",source:"@site/pages/docs/start/test-your-app/app-automation.mdx",sourceDirName:"start/test-your-app",slug:"/start/test-your-app/app-automation",permalink:"/start/test-your-app/app-automation",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/start/test-your-app/app-automation.mdx",tags:[],version:"current",lastUpdatedBy:"Oded Itkin",lastUpdatedAt:1657711065,formattedLastUpdatedAt:"7/13/2022",frontMatter:{id:"app-automation",title:"App Automation",sidebar_label:"App Automation"},sidebar:"start",previous:{title:"App submission basics",permalink:"/start/submit-your-app/submit-your-app-to-the-store"},next:{title:"Community alphas",permalink:"/start/test-your-app/community-alphas"}},m={},u=[{value:"Requirements:",id:"requirements",level:3},{value:"To run WebDriver with <code>selenium-webdriver</code> package:",id:"to-run-webdriver-with-selenium-webdriver-package",level:3},{value:"To run WebDriver with <code>webdriverio</code> in Standalone Mode:",id:"to-run-webdriver-with-webdriverio-in-standalone-mode",level:3}],s={toc:u};function c(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"This article explains how to enable and set up Overwolf app automation in Node.js using ",(0,i.mdx)("inlineCode",{parentName:"p"},"ChromeDriver")," and ",(0,i.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/selenium-webdriver"},(0,i.mdx)("inlineCode",{parentName:"a"},"selenium-webdriver"))," / ",(0,i.mdx)("a",{parentName:"p",href:"https://webdriver.io/"},(0,i.mdx)("inlineCode",{parentName:"a"},"webdriverio")),"."),(0,i.mdx)("h3",{id:"requirements"},"Requirements:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://chromedriver.storage.googleapis.com/87.0.4280.88/chromedriver_win32.zip"},"Download")," ",(0,i.mdx)("inlineCode",{parentName:"li"},"chromedriver.exe")," and place it in a folder of your choice (i.e. ",(0,i.mdx)("inlineCode",{parentName:"li"},"C:/webdrivers"),").",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Add that folder to your system's PATH:",(0,i.mdx)("ol",{parentName:"li"},(0,i.mdx)("li",{parentName:"ol"},"Start menu"),(0,i.mdx)("li",{parentName:"ol"},"Type ",(0,i.mdx)("inlineCode",{parentName:"li"},"Path")),(0,i.mdx)("li",{parentName:"ol"},"Click ",(0,i.mdx)("inlineCode",{parentName:"li"},"Edit the system environment variables")),(0,i.mdx)("li",{parentName:"ol"},"Click ",(0,i.mdx)("inlineCode",{parentName:"li"},"Environment Variables")),(0,i.mdx)("li",{parentName:"ol"},"Click on ",(0,i.mdx)("inlineCode",{parentName:"li"},"Path")," and then ",(0,i.mdx)("inlineCode",{parentName:"li"},"Edit")),(0,i.mdx)("li",{parentName:"ol"},"Add your chosen folder to the list and click ",(0,i.mdx)("inlineCode",{parentName:"li"},"OK")," on all windows"))))),(0,i.mdx)("li",{parentName:"ul"},"Run Overwolf with the command line flag ",(0,i.mdx)("inlineCode",{parentName:"li"},"--enable-automation"),"."),(0,i.mdx)("li",{parentName:"ul"},"For the examples below: install and launch Replay HUD.")),(0,i.mdx)("h3",{id:"to-run-webdriver-with-selenium-webdriver-package"},"To run WebDriver with ",(0,i.mdx)("inlineCode",{parentName:"h3"},"selenium-webdriver")," package:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Run ",(0,i.mdx)("inlineCode",{parentName:"p"},"npm install selenium-webdriver")," in your node project.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Install and launch your app.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Take note of your app's window title.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Create a driver instance according to the following example:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'// ReplayHUD automation with selenium-webdriver\nconst { Builder, By, Key, until } = require("selenium-webdriver");\nconst chrome = require("selenium-webdriver/chrome");\n\nconst options = new chrome.Options();\noptions.options_["debuggerAddress"] = "localhost:54284"; // Overwolf Remote Debugger\n\nconst xpath = "/html/body/ng-include/div/div[5]/div[2]/div[1]/article[4]/div";\n\n(async function example() {\n  let driver = await new Builder()\n    .forBrowser("chrome")\n    .setChromeOptions(options)\n    .build();\n\n  try {\n    // Find and switch to your app\'s window\n    const handles = await driver.getAllWindowHandles();\n    for (let handle of handles) {\n      await driver.switchTo().window(handle);\n      if ((await driver.getTitle()) === "Replay HUD") {\n        break;\n      }\n    }\n    // Enjoy\n    const element = await driver.wait(\n      until.elementLocated(By.xpath(xpath)),\n      30\n    );\n    await element.click();\n  } finally {\n    await driver.quit();\n  }\n})();\n')))),(0,i.mdx)("h3",{id:"to-run-webdriver-with-webdriverio-in-standalone-mode"},"To run WebDriver with ",(0,i.mdx)("inlineCode",{parentName:"h3"},"webdriverio")," in Standalone Mode:"),(0,i.mdx)("blockquote",null,(0,i.mdx)("p",{parentName:"blockquote"},"If you want to run ",(0,i.mdx)("inlineCode",{parentName:"p"},"webdriverio")," in Testrunner Mode (and you likely do, if you're using this package for testing) you should check out its ",(0,i.mdx)("a",{parentName:"p",href:"https://webdriver.io/docs/gettingstarted"},"documentation"),". The configuration file (",(0,i.mdx)("inlineCode",{parentName:"p"},"wdio.conf.js"),") should include the options used in the Standalone Mode example below.")),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Run ",(0,i.mdx)("inlineCode",{parentName:"p"},"npm install webdriverio")," in your node project.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"Create a browser session according to the following example:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'// ReplayHUD automation with webdriverio in Standalone Mode\nconst { remote } = require("webdriverio");\n\nconst xpath = "/html/body/ng-include/div/div[5]/div[2]/div[1]/article[4]/div";\n\n(async () => {\n  const browser = await remote({\n    automationProtocol: "devtools",\n    browserName: "chrome",\n    capabilities: {\n      "goog:chromeOptions": {\n        debuggerAddress: "localhost:54284",\n      },\n    },\n  });\n\n  await browser.switchWindow("Replay HUD");\n\n  const button = await browser.$(xpath);\n  await button.waitForClickable({ timeout: 3000 });\n  await button.click();\n  await browser.deleteSession();\n})();\n')))))}c.isMDXComponent=!0}}]);