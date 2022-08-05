"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4415],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52799:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(43689),s=r(15767),l=["components"],c={id:"getting-started",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting Started",description:"Get up to speed with the SAP Cloud SDK for JavaScript in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},u=void 0,d={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Get up to speed with the SAP Cloud SDK for JavaScript in no time",source:"@site/docs-js/getting-started.mdx",sourceDirName:".",slug:"/getting-started",permalink:"/cloud-sdk/docs/js/getting-started",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting Started",description:"Get up to speed with the SAP Cloud SDK for JavaScript in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"docsJsSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/js/overview-cloud-sdk-for-javascript"},next:{title:"Overview",permalink:"/cloud-sdk/docs/js/features/odata/overview"}},p={},m=[{value:"What Is the SAP Cloud SDK",id:"what-is-the-sap-cloud-sdk",level:2},{value:"Sample Projects",id:"sample-projects",level:2},{value:"Tutorials",id:"tutorials",level:2}],h={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{mdxType:"BuildBadge"})," ",(0,o.kt)(s.Z,{mdxType:"LicenseBadge"}),(0,o.kt)("h2",{id:"what-is-the-sap-cloud-sdk"},"What Is the SAP Cloud SDK"),(0,o.kt)("p",null,"The SAP Cloud SDK is a set of libraries that helps you end-to-end when developing applications on SAP Business Technology Platform that communicate with SAP solutions and services such as SAP S/4HANA, SAP S/4HANA Cloud, SAP SuccessFactors, and many others."),(0,o.kt)("h2",{id:"sample-projects"},"Sample Projects"),(0,o.kt)("p",null,"You can find sample projects for different scenarios in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP-samples/cloud-sdk-js"},"samples repository"),".\nCurrently there are starter projects available for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SAP BTP Cloud Foundry Environment - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/cf-sample-application"},"starter project")),(0,o.kt)("li",{parentName:"ul"},"SAP BTP Cloud Foundry Environment in combination with ",(0,o.kt)("a",{parentName:"li",href:"https://cap.cloud.sap/"},"CAP")," - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/cds-sample-application"},"starter project")),(0,o.kt)("li",{parentName:"ul"},"Plain Kubernetes with SAP Gardener - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/k8s-sample-application"},"starter project")),(0,o.kt)("li",{parentName:"ul"},"Kubernetes with SAP Gardener packaged with Helm - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP-samples/cloud-sdk-js/tree/main/samples/helm-sample-application"},"starter project"))),(0,o.kt)("h2",{id:"tutorials"},"Tutorials"),(0,o.kt)("p",null,"Checkout the tutorials to get started with the SAP Cloud SDK for JavaScript."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./tutorials/getting-started/introduction"},"Getting Started")," - Create your first app on Cloud Foundry using the SAP Cloud SDK for JavaScript."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./tutorials/address-manager/read-addresses"},"Address Manager")," - Build an Address Manager with the SAP Cloud SDK.")))}f.isMDXComponent=!0},43689:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.align;return n.createElement("span",{className:t?"col text--right":""},n.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/SAP/cloud-sdk-js"},n.createElement("img",{src:"https://github.com/SAP/cloud-sdk-js/workflows/build/badge.svg",alt:"build",className:"max-width:100%;"})))}},15767:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.align;return n.createElement("span",{className:t?"col text--right":""},n.createElement("a",{href:"https://opensource.org/licenses/Apache-2.0",rel:"nofollow"},n.createElement("img",{src:"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",alt:"License","data-canonical-src":"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",className:"max-width:100%;"})))}}}]);