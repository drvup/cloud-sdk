"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[912],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,h=p["".concat(l,".").concat(f)]||p[f]||c[f]||i;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81566:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"extensions-supported-by-sap-cloud-sdk-for-java",title:"Extensions Overview",sidebar_label:"Overview",description:"Discover the rich eco-system of the SAP Cloud SDK for Java via various value-add extensions. They usually happen thanks to contributors from within and outside of SAP and provide additional features on top of the standard SDK offering. We document them in this section.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","integrations","extensions","libraries"]},l=void 0,d={unversionedId:"java/extensions/extensions-supported-by-sap-cloud-sdk-for-java",id:"java/extensions/extensions-supported-by-sap-cloud-sdk-for-java",title:"Extensions Overview",description:"Discover the rich eco-system of the SAP Cloud SDK for Java via various value-add extensions. They usually happen thanks to contributors from within and outside of SAP and provide additional features on top of the standard SDK offering. We document them in this section.",source:"@site/docs/java/extensions/overview.mdx",sourceDirName:"java/extensions",slug:"/java/extensions/extensions-supported-by-sap-cloud-sdk-for-java",permalink:"/cloud-sdk/docs/java/extensions/extensions-supported-by-sap-cloud-sdk-for-java",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/extensions/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Deeksha Sinha",lastUpdatedAt:1656411041,formattedLastUpdatedAt:"6/28/2022",frontMatter:{id:"extensions-supported-by-sap-cloud-sdk-for-java",title:"Extensions Overview",sidebar_label:"Overview",description:"Discover the rich eco-system of the SAP Cloud SDK for Java via various value-add extensions. They usually happen thanks to contributors from within and outside of SAP and provide additional features on top of the standard SDK offering. We document them in this section.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","integrations","extensions","libraries"]},sidebar:"someSidebar",previous:{title:"Use WAR Deployment with Spring Boot",permalink:"/cloud-sdk/docs/java/guides/spring-boot-war-deployment"},next:{title:"Getting Started",permalink:"/cloud-sdk/docs/java/video/video-tutorial-about-getting-started-with-sap-cloud-sdk-for-java"}},u={},c=[{value:"What Are Extensions?",id:"what-are-extensions",level:2},{value:"How Extension Different From Other Features?",id:"how-extension-different-from-other-features",level:3},{value:"Extension vs Type-Safe API Client Library?",id:"extension-vs-type-safe-api-client-library",level:3},{value:"Where Can I Find Supported Extensions?",id:"where-can-i-find-supported-extensions",level:2},{value:"Benefits for Developers Using the SAP Cloud SDK",id:"benefits-for-developers-using-the-sap-cloud-sdk",level:2},{value:"Benefits for Contributors",id:"benefits-for-contributors",level:2},{value:"How to Contribute?",id:"how-to-contribute",level:2},{value:"Feedback and Support",id:"feedback-and-support",level:2}],p={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-are-extensions"},"What Are Extensions?"),(0,i.kt)("p",null,"By providing versatile and reliable core functionality to aid modern cloud development SAP Cloud SDK also becomes an important integration layer for various SAP technologies.\nTo leverage this and benefit developers using the SAP Cloud SDK, we accept contributions from libraries and services coherent with the SAP Cloud SDK's mission and value proposition."),(0,i.kt)("h3",{id:"how-extension-different-from-other-features"},"How Extension Different From Other Features?"),(0,i.kt)("p",null,"We make sure extension libraries are well integrated into the SAP Cloud SDK's ecosystem and call them extensions to make it clear they are not the core SAP Cloud SDK components.\nIt doesn't make the features introduced by them less valuable for a developer.\nThese extensions are usually shipped in separate packages similar to libraries generated from API definitions."),(0,i.kt)("h3",{id:"extension-vs-type-safe-api-client-library"},"Extension vs Type-Safe API Client Library?"),(0,i.kt)("p",null,"Usually, with an extension, you get more than a nice API client but also a hand-crafted code specific to needs that go beyond calling and API."),(0,i.kt)("h2",{id:"where-can-i-find-supported-extensions"},"Where Can I Find Supported Extensions?"),(0,i.kt)("p",null,"Visit the extension library in the left-side menu."),(0,i.kt)("h2",{id:"benefits-for-developers-using-the-sap-cloud-sdk"},"Benefits for Developers Using the SAP Cloud SDK"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"More features and simplicity out of the box"),(0,i.kt)("li",{parentName:"ul"},"Well integrated with other SAP Cloud SDK features like destination handling, multi-tenancy, resilience, caching, etc."),(0,i.kt)("li",{parentName:"ul"},"Single initial support channel"),(0,i.kt)("li",{parentName:"ul"},"High code quality ensured by SAP Cloud SDK team"),(0,i.kt)("li",{parentName:"ul"},"Consistent APIs"),(0,i.kt)("li",{parentName:"ul"},"Detailed documentation by developers")),(0,i.kt)("h2",{id:"benefits-for-contributors"},"Benefits for Contributors"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"At the moment only services and libraries from within SAP can be contributed and released together with SAP Cloud SDK for Java."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Increased adoption thanks to the SAP Cloud SDK user base"),(0,i.kt)("li",{parentName:"ul"},"On-boarding to the best development practices"),(0,i.kt)("li",{parentName:"ul"},"Code reviews by the SAP Cloud SDK team"),(0,i.kt)("li",{parentName:"ul"},"High level of automation in the contribution process"),(0,i.kt)("li",{parentName:"ul"},"Ship your library to Maven Central with SAP Cloud SDK"),(0,i.kt)("li",{parentName:"ul"},"Easy process to document your extension on the SAP Cloud SDK's ",(0,i.kt)("a",{parentName:"li",href:"https://sap.github.io/cloud-sdk/"},"documentation portal"))),(0,i.kt)("h2",{id:"how-to-contribute"},"How to Contribute?"),(0,i.kt)("p",null,"If you:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Maintain a library in the SAP cloud ecosystem"),(0,i.kt)("li",{parentName:"ul"},"Have a service in the SAP cloud ecosystem that you believe will strengthen the SAP Cloud SDK offering and provides additional value to your customers by being part of the SAP Cloud SDK"),(0,i.kt)("li",{parentName:"ul"},"Know a service or library within SAP that you would like to use in the context of SAP Cloud SDK")),(0,i.kt)("p",null,"We're happy to hear from you via email: ",(0,i.kt)("a",{parentName:"p",href:"mailto:cloudsdk@sap.com"},"cloudsdk@sap.com")," or reach out to us via SAP internal communication channels."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"What if you're outside of SAP")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're outside of SAP but know about a valuable library or service missing from the SAP Cloud SDK offering, please, let us know."))),(0,i.kt)("h2",{id:"feedback-and-support"},"Feedback and Support"),(0,i.kt)("p",null,"We hope you're happy developing with the SAP Cloud SDK for Java.\nWe're happy to hear back from you to help us further improve.\nSend you feedback, ideas, suggestions to ",(0,i.kt)("a",{parentName:"p",href:"mailto:cloudsdk@sap.com"},"cloudsdk@sap.com"),"."))}f.isMDXComponent=!0}}]);