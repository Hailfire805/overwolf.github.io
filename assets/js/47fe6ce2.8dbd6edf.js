"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=n,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},60872:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(25773),n=(r(27378),r(35318));const o={id:"obs",image:"/img/embed/api-best-practices.jpg",title:"OBS",sidebar_position:20,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},i=void 0,s={unversionedId:"topics/understanding-overwolf-logs/obs",id:"topics/understanding-overwolf-logs/obs",title:"OBS",description:"Open Broadcaster Software (OBS) is a free and open-source cross-platform streaming and recording program built with Qt and maintained by the OBS Project. Since 2016, the software is now referred to as OBS Studio.",source:"@site/pages/docs/topics/understanding-overwolf-logs/obs.mdx",sourceDirName:"topics/understanding-overwolf-logs",slug:"/topics/understanding-overwolf-logs/obs",permalink:"/topics/understanding-overwolf-logs/obs",draft:!1,editUrl:"https://github.com/overwolf/overwolf.github.io/tree/source/website/pages/docs/topics/understanding-overwolf-logs/obs.mdx",tags:[],version:"current",lastUpdatedBy:"OdedItkinOW",lastUpdatedAt:1683187281,formattedLastUpdatedAt:"May 4, 2023",sidebarPosition:20,frontMatter:{id:"obs",image:"/img/embed/api-best-practices.jpg",title:"OBS",sidebar_position:20,sidebar_custom_props:{overwolf_platform:!0,electron_platform:!1}},sidebar:"topics",previous:{title:"Trace",permalink:"/topics/understanding-overwolf-logs/trace"},next:{title:"Overlay Game HTML",permalink:"/topics/understanding-overwolf-logs/overlay-game-html"}},c={},l=[{value:"Recording issues checklist",id:"recording-issues-checklist",level:2},{value:"Audio issues checklist",id:"audio-issues-checklist",level:2},{value:"How to check if the drivers are up to date",id:"how-to-check-if-the-drivers-are-up-to-date",level:2},{value:"AMD",id:"amd",level:3},{value:"Intel",id:"intel",level:3},{value:"Nvidia",id:"nvidia",level:3}],u={toc:l};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Open Broadcaster Software (OBS) is a free and open-source cross-platform streaming and recording program built with Qt and maintained by the OBS Project. Since 2016, the software is now referred to as OBS Studio.\nThis is the base of all recording apps on Overwolf."),(0,n.kt)("p",null,"In the first section of the OBS log you can check the system information such as the CPU, memory, Windows version & build, if the program is being run as Admin and if there is a antivirus or firewall active:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"10:22:07.823(INFO)[8958]: CPU Name: Intel(R) Core(TM) i7-10750H CPU @ 2.60GHz\n10:22:07.823(INFO)[8958]: CPU Speed: 2592MHz\n10:22:07.823(INFO)[8958]: Physical Cores: 6, Logical Cores: 12\n10:22:07.823(INFO)[8958]: Physical Memory: 16171MB Total, 694MB Free\n10:22:07.823(INFO)[8958]: Windows Version: 10.0 Build 19043 (release: 2009; revision: 1110; 64-bit)\n10:22:07.823(INFO)[8958]: Running as administrator: false\n10:22:07.823(INFO)[8958]: Aero is Enabled (Aero is always on for windows 8 and above)\n10:22:07.824(INFO)[8958]: Windows 10 Gaming Features:\n10:22:07.824(INFO)[8958]:   Game DVR: On\n10:22:07.824(INFO)[8958]:   Game Mode: On\n10:22:07.826(INFO)[8958]: Sec. Software Status:\n10:22:07.827(INFO)[8958]:   ESET Security: enabled (AV)\n10:22:07.827(INFO)[8958]:   Microsoft Defender Antivirus: disabled (AV)\n10:22:07.827(INFO)[8958]:   ESET Firewall: enabled (FW)\n10:22:07.827(INFO)[8958]:   Windows Firewall: disabled (FW)\n")),(0,n.kt)("p",null,"In this section you can view the available video adapter and settings such as a GPU name, driver version & adapter:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"10:22:07.830(INFO)[8958]: Initializing D3D11...\n10:22:07.830(INFO)[8958]: Available Video Adapters: \n10:22:07.832(INFO)[8958]:   Adapter 0: NVIDIA GeForce GTX 1650 Ti\n10:22:07.832(INFO)[8958]:     Dedicated VRAM: 4154458112\n10:22:07.832(INFO)[8958]:     Shared VRAM:    4183293952\n10:22:07.832(INFO)[8958]:     PCI ID:         10de:1f95\n10:22:07.832(INFO)[8958]:     Driver Version: 27.21.14.5763\n10:22:07.833(INFO)[8958]:     output 0: pos={0, 0}, size={1920, 1080}, attached=true, refresh=60, name=DELL P2419H\n10:22:07.833(INFO)[8958]:     output 1: pos={-1920, 0}, size={1920, 1080}, attached=true, refresh=60, name=DELL P2419H\n10:22:07.833(INFO)[8958]:   Adapter 1: Intel(R) UHD Graphics\n10:22:07.833(INFO)[8958]:     Dedicated VRAM: 134217728\n10:22:07.833(INFO)[8958]:     Shared VRAM:    4183293952\n10:22:07.833(INFO)[8958]:     PCI ID:         8086:9bc4\n10:22:07.833(INFO)[8958]:     Driver Version: 26.20.100.7985\n10:22:07.833(INFO)[8958]:     output 0: pos={1920, 0}, size={1920, 1080}, attached=true, refresh=144, name=\n10:22:07.835(INFO)[8958]: Loading up D3D11 on adapter NVIDIA GeForce GTX 1650 Ti (0)\n10:22:07.899(INFO)[8958]: D3D11 loaded successfully, feature level used: b000\n10:22:07.899(INFO)[8958]: DXGI increase maximum frame latency success\n")),(0,n.kt)("p",null,"In this section you can view the input and output audio devices. These will be either the current system default for the session (If the devices are changed during the session this change will not be saved during the current recording) or the ones manually chosen by the user. You can also check the volume and if the device was disabled:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"10:22:09.039(INFO)[8958]: [WASAPISource::WASAPISource] Device '{0.0.0.00000000}.{66d4c155-4c0a-435b-bfb1-599df12252e7}' not found.  Waiting for device\n10:22:09.039(INFO)[8958]: Create Audio device [Output]: {0.0.0.00000000}.{66d4c155-4c0a-435b-bfb1-599df12252e7}\n10:22:09.039(INFO)[8958]: Set output-device volume: 100\n10:22:09.040(INFO)[8958]: [WASAPISource::WASAPISource] Device '{0.0.1.00000000}.{b3122eb7-9ca4-410c-9a33-4a54468a3f23}' not found.  Waiting for device\n10:22:09.040(INFO)[8958]: Create Audio device [Input]: {0.0.1.00000000}.{b3122eb7-9ca4-410c-9a33-4a54468a3f23}\n10:22:09.040(INFO)[8958]: Set input-device volume: 0\n10:22:09.040(INFO)[8958]: Set output-device mixer track: 0xc3 (0x3)\n10:22:09.040(INFO)[8958]: Set input-device mixer track: 0xc5 (0x5)\n10:22:09.040(INFO)[8958]: Separate audio tracks is supported\n10:22:09.040(INFO)[8958]: supported audio tracks: 0x7 (3)\n")),(0,n.kt)("p",null,"In this section we will see the recording starting and the recording settings:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"10:22:16.351(WARNING)[8c3c]: [game-capture: 'OW Game capture'] game capture pause state changed: 0 -> 1\n10:22:52.159(INFO)[8958]: Handle command 6 (0)\n10:22:52.159(INFO)[8958]: game focus changed: true\n10:22:52.159(INFO)[8958]: update sources visibility [1 (1)]\n10:22:52.159(INFO)[8958]: Game capture foreground changed: 0 -> 1 (exist: 1 visible:1)\n10:22:52.159(INFO)[8958]: Update source |brb| visibility: false\n10:22:52.167(WARNING)[8c3c]: [game-capture: 'OW Game capture'] game capture pause state changed: 1 -> 0\n10:22:53.886(INFO)[91e4]: [game-capture: 'OW Game capture'] [Game Log]: gl_free: GL error occurred on free: 1282\n10:22:53.886(INFO)[91e4]: [game-capture: 'OW Game capture'] [Game Log]: ------------------ gl capture freed ------------------\n10:22:54.190(INFO)[8958]: Handle command 6 (0)\n10:22:54.190(INFO)[8958]: game focus changed: false\n10:22:54.190(INFO)[8958]: update sources visibility [0 (0)]\n10:22:54.190(INFO)[8958]: Game capture foreground changed: 1 -> 0 (exist: 1 visible:1)\n10:22:54.190(INFO)[8958]: Update source |brb| visibility: true\n10:22:54.191(INFO)[8958]: Set BRB image color 0xcc0d0d0d\n10:22:54.191(INFO)[8958]: update BRB image position: [x:375 y:311]\n10:22:54.201(WARNING)[8c3c]: [game-capture: 'OW Game capture'] game capture pause state changed: 0 -> 1\n10:22:54.984(INFO)[8c3c]: [game-capture: 'OW Game capture'] capture window no longer exists, terminating capture\n10:22:54.984(INFO)[8c3c]: [game-capture: 'OW Game capture'] capture stopped\n10:22:54.984(INFO)[8c3c]: Game source capture state changed: 0 [process alive: true, sli: false]\n10:22:54.984(INFO)[8b38]: Game capture state changed [capture:0 process alive:0]\n10:22:54.984(INFO)[8b38]: game exit, stopping replay [force:1]\n10:22:54.984(INFO)[8b38]: Call stop replay stream\n10:22:54.984(INFO)[8b38]: Stop replay buffer [id:2 force: 1]\n10:22:54.985(INFO)[8b38]: Replay buffer stopping [id:2]\n10:22:54.985(INFO)[8b38]: Stop replay stream\n10:22:54.985(INFO)[8b38]: game exit, request to stop recording\n10:22:54.985(INFO)[8b38]: Update source |game| visibility: false\n10:22:54.985(INFO)[8b38]: stop recording: no game source\n10:22:54.985(INFO)[8b38]: Call stopping recoding stream\n10:22:54.985(INFO)[8b38]: record stopping [id:1]\n10:22:54.985(INFO)[8b38]: Stopping recoding stream\n10:22:54.985(INFO)[8b38]: remove game source\n10:22:54.986(INFO)[65c0]: Output 'ReplayBuffer': stopping\n10:22:54.986(INFO)[65c0]: Output 'ReplayBuffer': Total frames output: 2576\n10:22:54.986(INFO)[65c0]: Output 'ReplayBuffer': Total drawn frames: 2585\n10:22:54.986(INFO)[65c0]: Replay buffer stopped [id:2]. code:0\n10:22:55.160(INFO)[65c0]: On video split [id:1]. path: C:\\Users\\Shirel laptop\\Videos\\Overwolf\\Outplayed\\tmp\\Minecraft 07-20-2021_10-22-07-714.mp4 duration: 43050\n10:22:55.160(INFO)[65c0]: new split video created: C:\\Users\\Shirel laptop\\Videos\\Overwolf\\Outplayed\\tmp\\Minecraft 07-20-2021_10-22-07-714.mp4 duration: 43050\n10:22:55.160(INFO)[65c0]: [ffmpeg muxer: 'Overwolf Output'] Output of file 'C:\\Users\\Shirel laptop\\Videos\\Overwolf\\Outplayed\\tmp\\Minecraft 07-20-2021_10-22-07-714.mp4' stopped\n10:22:55.160(INFO)[65c0]: Output 'Overwolf Output': stopping\n10:22:55.160(INFO)[65c0]: Output 'Overwolf Output': Total frames output: 2586\n10:22:55.160(INFO)[65c0]: Output 'Overwolf Output': Total drawn frames: 2595\n10:22:55.160(INFO)[65c0]: recording stopped [id:1]\n10:22:55.160(INFO)[65c0]: recording stopped [id:1 code:0 error:(null)]\n10:22:55.160(INFO)[4650]: Video stopped, number of skipped frames due to encoding lag: 8/2593 (0.3%)\n10:22:55.161(INFO)[8958]: shut down command\n10:22:55.162(INFO)[8cb4]: releasing obs\n10:22:55.162(INFO)[8cb4]: releasing scene\n10:22:55.229(INFO)[8cb4]: [game-capture: 'OW Game capture'] game_capture_destroy\n10:22:55.230(INFO)[8cb4]: Freeing OBS context data\n10:22:55.230(INFO)[8cb4]:   1 encoder(s) were remaining\n10:22:55.256(INFO)[8cb4]: Number of memory leaks: 144\n")),(0,n.kt)("h2",{id:"recording-issues-checklist"},"Recording issues checklist"),(0,n.kt)("p",null,"When investigating recording issues check:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make sure that the user follows the troubleshooting steps in the Common ",(0,n.kt)("a",{parentName:"p",href:"https://support.overwolf.com/en/support/solutions/articles/9000181387-common-capture-issues"},"Capture Issues")," article.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Go through OBS logs and check for errors such as the users devices not being recognized or out of date, high resource usage (Such as CPU, RAM or GPU) or encoding errors.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Check in Trace Logs or OBS logs if hardware accelerated GPU is enabled. This will appear as "OS: HAGSEnable: True". If it is enabled ask the user to disable it using this guide: ',(0,n.kt)("a",{parentName:"p",href:"https://support.overwolf.com/en/support/solutions/articles/9000183412-visual-artifacts-in-overwolf-apps-hardware-acceleration-"},"https://support.overwolf.com/en/support/solutions/articles/9000183412-visual-artifacts-in-overwolf-apps-hardware-acceleration-")," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In order to test if the issue is related to the app or the user's computer settings you can ask them to try recording in OBS studio to check that they can record correctly. You can send the following canned comment:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"Can you please try recording with OBS Studio and let me know if the same issue occurs?\nYou can get OBS Studio for free here: https://obsproject.com/.  \n\nIf the issue persists when the users records using OBS Studios this indicates that the issue is related to their system and not to Overwolf or any Overwolf app.\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Check supported video encoders in OBS, make sure they are not using x264 which uses CPU (When drivers are not up to date we\u2019ll see a message that encoder unavailable)."),(0,n.kt)("li",{parentName:"ul"},"Reasons why they might use x264:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User defined encoder themselves in setting."),(0,n.kt)("li",{parentName:"ul"},"OW OBS used it as a fallback due to issues with other encoders."),(0,n.kt)("li",{parentName:"ul"},"Other encoders not recognized (Check trace to see if we recognize any other encoders)."))),(0,n.kt)("li",{parentName:"ul"},"Check in the DxDiag logs that the user has enough free resources for recording.")),(0,n.kt)("h2",{id:"audio-issues-checklist"},"Audio issues checklist"),(0,n.kt)("p",null,"When investigating audio issues check:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Verify if the user is having an issue with recording output sounds (Game sounds/discord) / Input (microphone) or both ?\nTurn off the mic and try to record/ turn off the sound and try to record")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make sure that the user follows the troubleshooting steps in the ",(0,n.kt)("a",{parentName:"p",href:"https://support.overwolf.com/en/support/solutions/articles/9000181387-common-capture-issues"},"Common Capture Issues article"),". ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Check which audio devices are set as default. Make sure that these settings match across the Overwolf sound settings, your app sound settings and the computer sound settings.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If the user has more than one audio device check with them that they aren't switching them mid game.\nOverwolf can not recognize a switch in audio devices once it has been started up. If the user would like to update their audio settings they will need to restart Overwolf and the game in order for the changes to apply.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Delays in sound- ask the user to record the same clip in your app and in OBS Studio and send you the recording files. Compare the properties of each file to check if they are recorded in a different framerate or bitrate"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2",src:r(39722).Z,width:"761",height:"534"})),(0,n.kt)("p",null,"Note that currently it is not possible to only record certain channels (Such as only recording input from Discord and not other active sound sources)."),(0,n.kt)("h2",{id:"how-to-check-if-the-drivers-are-up-to-date"},"How to check if the drivers are up to date"),(0,n.kt)("p",null,"You can find the details regarding the driver the user is using in both the OBS log files and in the DxDiag. We recommend checking these details according to the OBS as the DxDiag may not always be the most up to date."),(0,n.kt)("p",null,"These are the methods to check each of the drivers:"),(0,n.kt)("h3",{id:"amd"},"AMD"),(0,n.kt)("p",null,"AMD usually updates monthly, however, not all cards will get the update (Such as if the user is using an older card).\nIn order to check if the user is on the most up to date version copy the number next to the Driver Version (For example: \u201c Driver Version: 27.20.20903.8001\u201d) and google the driver number. You will reach the AMD release notes connect to a version name and release note that corresponds to the month. "),(0,n.kt)("p",null,"In the following image the version was released in May:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"3",src:r(75439).Z,width:"1161",height:"191"})),(0,n.kt)("h3",{id:"intel"},"Intel"),(0,n.kt)("p",null,"In order to check if an Intel driver is up to date copy the processor model and google it. You will then be able to view the latest drivers available and compre with the users current driver: "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"4",src:r(11937).Z,width:"951",height:"392"})),(0,n.kt)("h3",{id:"nvidia"},"Nvidia"),(0,n.kt)("p",null,"Nvidia does not update frequently. To check if the user is using the most up to date version look at their version number and take note of the last 5 numbers, then go to the Nvidia website ","[Hyperlink: https://www.nvidia.com/Download/index.aspx ]"," to look up the graphic card and compare the version numbers."))}d.isMDXComponent=!0},39722:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2-616e04361770d7f479976c8d4d8ea6c8.png"},75439:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/3-ed8477389cb127aae96221db05effb05.png"},11937:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/4-fe64412392c1bcdf3e0fc3d39488f9f5.png"}}]);