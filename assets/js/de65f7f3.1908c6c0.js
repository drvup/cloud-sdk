"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(i,".").concat(m)]||f[m]||l[m]||c;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<c;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const c={},a=void 0,s={unversionedId:"features/common/skip-csrf-token",id:"features/common/skip-csrf-token",title:"skip-csrf-token",description:"For some services, the CSRF token is not required even for non-GET requests.",source:"@site/docs-js/features/common/skip-csrf-token.mdx",sourceDirName:"features/common",slug:"/features/common/skip-csrf-token",permalink:"/cloud-sdk/docs/js/features/common/skip-csrf-token",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/common/skip-csrf-token.mdx",tags:[],version:"current",frontMatter:{}},i={},p=[],u={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For some services, the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not required even for non-",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," requests.\nTherefore, skipping to fetch the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSRF")," token makes sense as a performance improvement.\nYou can disable the ",(0,o.kt)("inlineCode",{parentName:"p"},"CSRF")," token request by using ",(0,o.kt)("inlineCode",{parentName:"p"},"skipCsrfTokenFetching()")," like below:"))}l.isMDXComponent=!0}}]);