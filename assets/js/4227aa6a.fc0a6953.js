"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[721],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=o,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return t?r.createElement(h,s(s({ref:n},d),{},{components:t})):r.createElement(h,s({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},53846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const a={title:"Use the SAP Cloud SDK in the Browser",sidebar_label:"Use the SAP Cloud SDK in the Browser",description:"You'll learn how to package SDK for a browser, what are the limitations, and how to use it with popular frontend frameworks.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},s=void 0,i={unversionedId:"guides/sdk-in-browser",id:"guides/sdk-in-browser",title:"Use the SAP Cloud SDK in the Browser",description:"You'll learn how to package SDK for a browser, what are the limitations, and how to use it with popular frontend frameworks.",source:"@site/docs-js/guides/sdk-in-browser.mdx",sourceDirName:"guides",slug:"/guides/sdk-in-browser",permalink:"/cloud-sdk/docs/js/guides/sdk-in-browser",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/guides/sdk-in-browser.mdx",tags:[],version:"current",frontMatter:{title:"Use the SAP Cloud SDK in the Browser",sidebar_label:"Use the SAP Cloud SDK in the Browser",description:"You'll learn how to package SDK for a browser, what are the limitations, and how to use it with popular frontend frameworks.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJsSidebar",previous:{title:"Connecting to External Systems from BAS",permalink:"/cloud-sdk/docs/js/guides/bas-external-system"},next:{title:"Trust and Keystores",permalink:"/cloud-sdk/docs/js/guides/trust-and-key-stores"}},l={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Include the SAP Cloud SDK",id:"include-the-sap-cloud-sdk",level:2},{value:"Run Locally",id:"run-locally",level:2},{value:"Run on SAP BTP, Cloud Foundry Environment",id:"run-on-sap-btp-cloud-foundry-environment",level:2},{value:"Workaround",id:"workaround",level:2}],d={toc:u};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The SAP Cloud SDK for JavaScript can be used both as a backend and frontend library when used in a browser.\nBecause of the specifics of a browser environment, some features might be unavailable.\nTo help you get up and running faster in a browser, we'll outline the main steps and caveats of using SAP Cloud SDK on the frontend.\nWe will use ",(0,o.kt)("inlineCode",{parentName:"p"},"Angular")," to illustrate the usage."),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"You have a frontend application set up.\nFor example an ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/cli/new"},"Angular application")," via ",(0,o.kt)("inlineCode",{parentName:"p"},"ng new myProject"),"."),(0,o.kt)("h2",{id:"include-the-sap-cloud-sdk"},"Include the SAP Cloud SDK"),(0,o.kt)("p",null,"For most examples, we will use the business partner API.\nAdd the package ",(0,o.kt)("inlineCode",{parentName:"p"},"@sap/cloud-sdk-vdm-business-partner-service")," to your package.json and introduce some calls via:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"//In the .html part of the component\n<button (click)=\"callApi()\">Click me!</button>\n\n//In the .ts part of the component\nimport { businessPartnerService } from '@sap/cloud-sdk-vdm-business-partner-service';\nconst { businessPartnerApi } = businessPartnerService();\nasync function callApi(){\n  const result = await businessPartnerApi.requestBuilder().getAll().execute(myDest)\n  console.log(result)\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For the destination lookup, the SAP Cloud SDK relies on ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js")," functionality like ",(0,o.kt)("inlineCode",{parentName:"p"},"process.env")," for example.\nHowever, the request building, execution, and result parsing do not require any ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js")," modules and can be used on the frontend.\nHence, you have to create the destination variable ",(0,o.kt)("inlineCode",{parentName:"p"},"myDest")," manually.")),(0,o.kt)("p",null,"When you run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build")," your project should compile.\nCurrently, we are facing compilation errors of the kind ",(0,o.kt)("inlineCode",{parentName:"p"},"Module not found: Error: Can't resolve 'https' in ...'"),"\nPlease check out the ",(0,o.kt)("a",{parentName:"p",href:"#workaround"},"workaround")," for these kinds of errors."),(0,o.kt)("h2",{id:"run-locally"},"Run Locally"),(0,o.kt)("p",null,"As discussed above the ",(0,o.kt)("inlineCode",{parentName:"p"},"myDest")," can not be fetched via the destination service.\nWhen you run locally you can simply provide it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Destination } from '@sap-cloud-sdk/connectivity';\n\nconst myDest: Destination = {\n  url: 'https://my123456.s4hana.ondemand.com',\n  username: 'myUser',\n  password: 'myPassowrd'\n};\n")),(0,o.kt)("p",null,"When you execute ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run serve")," your project is compiled and hosted on a local server."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When you trigger a request from a browser to the remote system all modern browsers will block this to ensure ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Same-origin_policy"},"same origin policy"),".\nOne simple way to overcome this issue locally is to disable the web security of your browser temporarily (e.g. --disable-web-security for Chrome).\nAlternatively, you can also create a second localhost proxy server that adds the ",(0,o.kt)("inlineCode",{parentName:"p"},"access-allow-origin-header")," to the request.")),(0,o.kt)("h2",{id:"run-on-sap-btp-cloud-foundry-environment"},"Run on SAP BTP, Cloud Foundry Environment"),(0,o.kt)("p",null,"For productive usage, the methods mentioned above for running locally are of course not needed.\nYou configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"xs-app.json")," of the used app-router with an entry like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "source": "/REMOTE-SYSTEM-IDENTIFIER/(.*)",\n  "target": "/$1",\n  "destination": "DESTINATION-NAME-ON-CF"\n}\n')),(0,o.kt)("p",null,"and then in your application define the destination as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Destination } from '@sap-cloud-sdk/connectivity';\n\nconst myDest: Destination = {\n  url: '/REMOTE-SYSTEM-IDENTIFIER'\n};\n")),(0,o.kt)("p",null,"The created request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/REMOTE-SYSTEM-IDENTIFIER/sap/opu/odata/sap/API_BUSINESS_PARTNER/A_BusinessPartner")," will be matched by the app-router and the destination with the given URL and credentials is used."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This approach does not support principal propagation to On-premise systems.\nFor this, you need a JWT and need to include the proper header fields defining the user.\nSee the documentation on ",(0,o.kt)("a",{parentName:"p",href:"../features/connectivity/on-premise"},"On-premise systems")," for details.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"With webpack it is possible to ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/plugins/normal-module-replacement-plugin/"},"load resources")," for local or productive usage.\nUsing such a switch you can adjust the value of the destination for the two cases.")),(0,o.kt)("h2",{id:"workaround"},"Workaround"),(0,o.kt)("p",null,"Currently, we are facing the issue, that during the compilation from TS to JS the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js")," parts cause problems even if they are not used.\nWe hope to resolve these issues in the future but for now, here is a workaround:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Include ",(0,o.kt)("inlineCode",{parentName:"li"},"@angular-builders/custom-webpack")," in the ",(0,o.kt)("inlineCode",{parentName:"li"},"devDependencies")),(0,o.kt)("li",{parentName:"ul"},"Create a custom webpack configuration named ",(0,o.kt)("inlineCode",{parentName:"li"},"node-webpack.config.js")," and list the following node modules:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  node: {\n    crypto: true,\n    stream: true,\n    zlib: true,\n    path: true,\n    os: true,\n    http: true,\n    https: true\n  }\n};\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"angular.json")," adjust the ",(0,o.kt)("inlineCode",{parentName:"li"},"build")," target to use the custom builder:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},' "build": {\n   "builder": "@angular-builders/custom-webpack:browser",\n   "options": {\n     "customWebpackConfig": {\n       "path": "./node-webpack.config.js"\n     }\n  ...\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"angular.json")," adjust the ",(0,o.kt)("inlineCode",{parentName:"li"},"serve")," target to use the custom builder as well:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},' "serve": {\n   "builder": "@angular-builders/custom-webpack:dev-server",\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")," exclude the node modules, that do not exist in the browser:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"browser": {\n  "fs": false,\n  "net": false,\n  "tls": false\n}\n')),(0,o.kt)("p",null,"Now the project should build and run locally."))}p.isMDXComponent=!0}}]);