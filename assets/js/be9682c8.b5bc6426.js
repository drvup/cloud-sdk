"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8395],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?t.createElement(g,i(i({ref:r},p),{},{components:n})):t.createElement(g,i({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85578:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"enterprise-messaging",title:"Enterprise Messaging",sidebar_label:"Enterprise Messaging",description:"We demonstrate how to leverage a newly provided events and messaging library developed by Cloud Application Programming colleagues in the context of SAP Cloud SDK for Java.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},c=void 0,l={unversionedId:"features/enterprise-messaging/enterprise-messaging",id:"features/enterprise-messaging/enterprise-messaging",title:"Enterprise Messaging",description:"We demonstrate how to leverage a newly provided events and messaging library developed by Cloud Application Programming colleagues in the context of SAP Cloud SDK for Java.",source:"@site/docs-java/features/enterprise-messaging/overview.mdx",sourceDirName:"features/enterprise-messaging",slug:"/features/enterprise-messaging/enterprise-messaging",permalink:"/cloud-sdk/docs/java/features/enterprise-messaging/enterprise-messaging",draft:!1,tags:[],version:"current",frontMatter:{id:"enterprise-messaging",title:"Enterprise Messaging",sidebar_label:"Enterprise Messaging",description:"We demonstrate how to leverage a newly provided events and messaging library developed by Cloud Application Programming colleagues in the context of SAP Cloud SDK for Java.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]}},p={},u=[],d={toc:u};function f(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The current approach of Enterprise Messaging in the SAP Cloud SDK for Java relies on a library developed by SAP Cloud Application Model.\nFollow the official documentation on the ",(0,a.kt)("a",{parentName:"p",href:"https://cap.cloud.sap/docs/java/"},"CAP Messaging API for Event Consumption")," for further reference."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The type-safe client for SAP S/4HANA Enterprise Messaging from SAP Cloud SDK for Java is deprecated.\nFrom now on the library from CAP is a default way for message consumption.")))}f.isMDXComponent=!0}}]);