"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),y=o,m=d["".concat(c,".").concat(y)]||d[y]||p[y]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},12350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},s=void 0,i={unversionedId:"features/odata/common/operations/get-by-key",id:"features/odata/common/operations/get-by-key",title:"get-by-key",description:"The GetByKey request builder allows you to create a request to retrieve one entity based on its key:",source:"@site/docs-js/features/odata/common/operations/get-by-key.mdx",sourceDirName:"features/odata/common/operations",slug:"/features/odata/common/operations/get-by-key",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/get-by-key",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/operations/get-by-key.mdx",tags:[],version:"current",frontMatter:{}},c={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GetByKey")," request builder allows you to create a request to retrieve one entity based on its key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi.requestBuilder().getByKey('id');\n")),(0,o.kt)("p",null,"The example above retrieves the ",(0,o.kt)("inlineCode",{parentName:"p"},"BusinessPartner")," with the ID ",(0,o.kt)("inlineCode",{parentName:"p"},"'id'"),"."),(0,o.kt)("p",null,"The result can be restricted by applying the ",(0,o.kt)("a",{parentName:"p",href:"#select"},"select")," function, same as in the ",(0,o.kt)("a",{parentName:"p",href:"#getall-request-builder"},"GetAll")," request."))}p.isMDXComponent=!0}}]);