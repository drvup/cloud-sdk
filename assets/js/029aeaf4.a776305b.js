"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var a=n(87462),i=(n(67294),n(3905));const o=n.p+"assets/images/imports-in-v1-d998d7d6ee717529b1c0e6713066b542.png",r=n.p+"assets/images/imports-in-v2-31b49494001a1534bb902def22e94b91.png",l=n.p+"assets/images/ecma2019-8447f2de225b029f3e131a9a5a7db892.png",s=n.p+"assets/images/es5-27a4c7929b0768743fe63c49e0447be1.png",p=n.p+"assets/images/temporal-da595c2261bb60074866c9d0d4aa7b44.png",c={},d="Announcing Version 2 Beta",u={unversionedId:"announcing-version-2-beta",id:"version-v1/announcing-version-2-beta",title:"Announcing Version 2 Beta",description:"What Is Included in the Beta?",source:"@site/docs-js_versioned_docs/version-v1/announcing-version-2-beta.mdx",sourceDirName:".",slug:"/announcing-version-2-beta",permalink:"/cloud-sdk/docs/js/v1/announcing-version-2-beta",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/announcing-version-2-beta.mdx",tags:[],version:"v1",frontMatter:{},sidebar:"docsJsSidebar",previous:{title:"Announcing Version 2.x",permalink:"/cloud-sdk/docs/js/v1/announcing-version-2"},next:{title:"SAP Cloud SDK & CAP",permalink:"/cloud-sdk/docs/js/v1/video/calm"}},m={},g=[{value:"What Is Included in the Beta?",id:"what-is-included-in-the-beta",level:2},{value:"Split Packages and Export Only the Public Interface",id:"split-packages-and-export-only-the-public-interface",level:3},{value:"Increase Compilation Target to ECMAScript 2019",id:"increase-compilation-target-to-ecmascript-2019",level:3},{value:"Remove Deprecated Functionality",id:"remove-deprecated-functionality",level:3},{value:"Remove Generator Options",id:"remove-generator-options",level:3},{value:"Introduce Customizable (De-)Serialization",id:"introduce-customizable-de-serialization",level:3},{value:"How Can I Use It?",id:"how-can-i-use-it",level:2}],k={toc:g};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"announcing-version-2-beta"},"Announcing Version 2 Beta"),(0,i.kt)("h2",{id:"what-is-included-in-the-beta"},"What Is Included in the Beta?"),(0,i.kt)("p",null,"We announced four noteworthy changes for our upcoming version increase:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Split packages and export only the public interface"),(0,i.kt)("li",{parentName:"ul"},"Increase compilation target to ECMAScript 2019"),(0,i.kt)("li",{parentName:"ul"},"Remove deprecated functionality"),(0,i.kt)("li",{parentName:"ul"},"Remove generator options"),(0,i.kt)("li",{parentName:"ul"},"Introduce customizable (de-)serialization")),(0,i.kt)("p",null,"The beta already provides many improvements, and we would love for you to try them.\nLet's take a look what was achieved so far."),(0,i.kt)("h3",{id:"split-packages-and-export-only-the-public-interface"},"Split Packages and Export Only the Public Interface"),(0,i.kt)("p",null,"There is no more ",(0,i.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/core")," package anymore.\nInstead, there are the following packages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/connectivity")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"getDestination()"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/http-client")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"executeHttpRequest()"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/openapi"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/odata-v2")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/odata-v4")," (e.g. filter functions, request builder)")),(0,i.kt)("p",null,"Internal functions are not exported in our new packages to make it easier to find the right function for your use case.\nWe expose internals via a special import path, but offer no stability guarantee for this internal interface."),(0,i.kt)("p",null,"This means you will see this:"),(0,i.kt)("img",{style:{maxWidth:"75%",height:"auto"},src:r,alt:"autocomplete for import from core"}),(0,i.kt)("p",null,"rather than this:"),(0,i.kt)("img",{style:{maxWidth:"75%",height:"auto"},src:o,alt:"autocomplete for import from odata-v2"}),(0,i.kt)("h3",{id:"increase-compilation-target-to-ecmascript-2019"},"Increase Compilation Target to ECMAScript 2019"),(0,i.kt)("p",null,"This will only affect you if you run your application in a legacy environment.\nIt makes the compiled JavaScript code a little cleaner, as in this example."),(0,i.kt)("p",null,"Old:"),(0,i.kt)("img",{style:{maxWidth:"75%",height:"auto"},src:s,alt:"file-generator in ES5"}),(0,i.kt)("p",null,"New:"),(0,i.kt)("img",{style:{maxWidth:"75%",height:"auto"},src:l,alt:"file-generator in ECMAScript 2019"}),(0,i.kt)("p",null,"The differences are minor, but it saves five lines of code in this file alone."),(0,i.kt)("h3",{id:"remove-deprecated-functionality"},"Remove Deprecated Functionality"),(0,i.kt)("p",null,"We hope you replaced deprecated functionality already.\nIf not, our upgrade guide lists all removed methods and their replacement.\nIn total, we removed a bit more than 100 deprecated methods."),(0,i.kt)("h3",{id:"remove-generator-options"},"Remove Generator Options"),(0,i.kt)("p",null,"The following generator options are removed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"generateTypedocJson")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aggregatorDirectoryName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aggregatorNpmPackageName"))),(0,i.kt)("p",null,"For ",(0,i.kt)("inlineCode",{parentName:"p"},"generateTypedocJson")," option, you can add ",(0,i.kt)("inlineCode",{parentName:"p"},"typedoc")," or other documentation lib as a dependency to your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," by your own.\nThe options ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregatorDirectoryName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"aggregatorNpmPackageName")," are not useful from the user perspective."),(0,i.kt)("h3",{id:"introduce-customizable-de-serialization"},"Introduce Customizable (De-)Serialization"),(0,i.kt)("p",null,"We added options to dynamically change the types in your entities.\nYou can now define custom (de-)serializers - functions to convert data to and from the types you need.\nHere is an example for (de-)serializers to convert ",(0,i.kt)("inlineCode",{parentName:"p"},"Edm.DateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Edm.DateTimeOffset")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Edm.Time")," to/from Temporal:"),(0,i.kt)("img",{style:{maxWidth:"75%",height:"auto"},src:p,alt:"example temporal serializer"}),(0,i.kt)("p",null,"Intrigued?\nYou can get the Temporal-based (de-)serializers via npm (",(0,i.kt)("inlineCode",{parentName:"p"},"npm install @sap-cloud-sdk/temporal-de-serializers@beta"),")."),(0,i.kt)("h2",{id:"how-can-i-use-it"},"How Can I Use It?"),(0,i.kt)("p",null,"We publish the beta version on ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),".\nYou can install it by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"@beta")," after the package name (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install @sap-cloud-sdk/generator@beta"),")."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you use an OData or OpenAPI client, make sure it was generated with the same version as your other SAP Cloud SDK dependencies.\nWe do not provide pregenerated clients for beta versions.")),(0,i.kt)("p",null,"Check the ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/v1/guides/upgrade-to-version-2"},"upgrade guide")," for detailed instructions how to upgrade."))}f.isMDXComponent=!0}}]);