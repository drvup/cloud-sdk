"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,s={unversionedId:"features/odata/common/batch/batch-intro",id:"version-v1/features/odata/common/batch/batch-intro",title:"batch-intro",description:"OData batch requests combine multiple operations into one POST operation, allowing you to execute multiple requests with just one network call.",source:"@site/docs-js_versioned_docs/version-v1/features/odata/common/batch/batch-intro.mdx",sourceDirName:"features/odata/common/batch",slug:"/features/odata/common/batch/batch-intro",permalink:"/cloud-sdk/docs/js/v1/features/odata/common/batch/batch-intro",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/odata/common/batch/batch-intro.mdx",tags:[],version:"v1",frontMatter:{}},c={},p=[],u={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"OData batch requests combine multiple operations into one POST operation, allowing you to execute multiple requests with just one network call.\nThis can significantly reduce the network overhead you have to deal with when you want to execute many requests."),(0,o.kt)("p",null,"Every SAP Cloud SDK client provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"batch")," function that takes ",(0,o.kt)("a",{parentName:"p",href:"#retrieve-request"},"retrieve requests")," and ",(0,o.kt)("a",{parentName:"p",href:"#changeset"},"changesets"),".\nYou can combine those arbitrarily.\nTo execute batch requests, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," method - it works the same way as for single requests."),(0,o.kt)("p",null,"The response of a ",(0,o.kt)("inlineCode",{parentName:"p"},"batch")," request is a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"BatchResponse"),"s.\nEach of the items in the response is either a ",(0,o.kt)("inlineCode",{parentName:"p"},"ReadResponse"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"WriteResponses")," or an ",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorResponse"),", see ",(0,o.kt)("a",{parentName:"p",href:"#responses"},"Responses"),"."))}l.isMDXComponent=!0}}]);