"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6355],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,u(u({ref:t},l),{},{components:r})):n.createElement(f,u({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var i=2;i<a;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47406:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),u=["components"],c={},s=void 0,i={unversionedId:"js/features/common/execute-raw-use-cases",id:"js/features/common/execute-raw-use-cases",title:"execute-raw-use-cases",description:"Typical cases, where you might need to use executeRaw are:",source:"@site/docs/js/features/common/execute-raw-use-cases.mdx",sourceDirName:"js/features/common",slug:"/js/features/common/execute-raw-use-cases",permalink:"/cloud-sdk/docs/js/features/common/execute-raw-use-cases",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/common/execute-raw-use-cases.mdx",tags:[],version:"current",lastUpdatedBy:"Junjie Tang",lastUpdatedAt:1641547666,formattedLastUpdatedAt:"1/7/2022",frontMatter:{}},l=[],p={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Typical cases, where you might need to use ",(0,a.kt)("inlineCode",{parentName:"p"},"executeRaw")," are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You need additional information about the response, like the status code or response headers."),(0,a.kt)("li",{parentName:"ul"},"You need additional information about the request that has been sent, like payload, method or request headers."),(0,a.kt)("li",{parentName:"ul"},"The function ",(0,a.kt)("inlineCode",{parentName:"li"},"execute")," is omitted in some request builders because the response data cannot be deserialized by the request builder."),(0,a.kt)("li",{parentName:"ul"},"Debugging purposes.")))}d.isMDXComponent=!0}}]);