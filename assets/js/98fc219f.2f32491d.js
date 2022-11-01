"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3292:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,c={unversionedId:"features/odata/common/batch/retrieve-request",id:"features/odata/common/batch/retrieve-request",title:"retrieve-request",description:"You can pass retrieve requests directly to the batch() function.",source:"@site/docs-js/features/odata/common/batch/retrieve-request.mdx",sourceDirName:"features/odata/common/batch",slug:"/features/odata/common/batch/retrieve-request",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/retrieve-request",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/odata/common/batch/retrieve-request.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[],p={toc:u};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can pass retrieve requests directly to the ",(0,a.kt)("inlineCode",{parentName:"p"},"batch()")," function.\nOnce you execute a batch request you get a list of ",(0,a.kt)("a",{parentName:"p",href:"#responses"},(0,a.kt)("inlineCode",{parentName:"a"},"BatchResponse")),".\nA ",(0,a.kt)("inlineCode",{parentName:"p"},"BatchResponse")," that corresponds with a retrieve request can either be a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadResponse")," or an ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),"."),(0,a.kt)("p",null,"In the example below, we map each given address ID to a ",(0,a.kt)("a",{parentName:"p",href:"#getbykey-request-builder"},(0,a.kt)("inlineCode",{parentName:"a"},"GetByKeyRequestBuilder")),".\nThese retrieve requests are combined into one batch request and executed against a destination."),(0,a.kt)("p",null,"The example below is based on the ",(0,a.kt)("a",{parentName:"p",href:"https://api.sap.com/api/OP_API_BILLING_DOCUMENT_SRV_0001/overview"},"Bills of Material service"),", which contains a function import called ",(0,a.kt)("inlineCode",{parentName:"p"},"getPdf"),".\nThis service is an OData v2 service, but the syntax is the same for OData v2 and v4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const {\n  billingDocumentApi,\n  functionImports: { getPdf }\n} = billingDocumentService();\n\nasync function batchExample(documentIds: string[]) {\n  const getByKeyRequests = documentIds.map(billingDocument =>\n    billingDocumentApi.requestBuilder().getByKey(billingDocument)\n  );\n  const functionImportRequests = documentIds.map(billingDocument =>\n    getPdf({ billingDocument })\n  );\n\n  // Execute batch request combining multiple retrieve requests\n  const batchResponses = await batch(\n    ...getByKeyRequests,\n    ...functionImportRequests\n  );\n}\n")))}l.isMDXComponent=!0}}]);