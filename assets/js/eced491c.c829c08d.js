"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6944:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,s={unversionedId:"features/odata/common/operations/count",id:"version-v2/features/odata/common/operations/count",title:"count",description:"The method count() allows you to get the number of elements in a collection.",source:"@site/docs-js_versioned_docs/version-v2/features/odata/common/operations/count.mdx",sourceDirName:"features/odata/common/operations",slug:"/features/odata/common/operations/count",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/count",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/features/odata/common/operations/count.mdx",tags:[],version:"v2",frontMatter:{}},u={},l=[],c={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The method ",(0,o.kt)("inlineCode",{parentName:"p"},"count()")," allows you to get the number of elements in a collection.\nIt is only available for ",(0,o.kt)("inlineCode",{parentName:"p"},"getAll()")," requests and is added before the request execution:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi.requestBuilder().getAll().count();\n")),(0,o.kt)("p",null,"The return type of count requests is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<number>"),".\nYou can combine the ",(0,o.kt)("inlineCode",{parentName:"p"},"count()")," with filter conditions.\nTo get the number of business partners with first name ",(0,o.kt)("inlineCode",{parentName:"p"},"John")," execute the following request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .filter(businessPartnerApi.schema.FIRST_NAME.equals('John'))\n  .count()\n  .getAll();\n")),(0,o.kt)("p",null,"As defined in the OData spec ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," is not affected by ",(0,o.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"skip"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"orderBy"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"top()")," and ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"skip()")," are ignored for count"),(0,o.kt)("p",{parentName:"admonition"},"If you include these methods in a count request they will be ignored by the SAP Cloud SDK.\nThese three requests will all return the same value."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"businessPartnerApi.requestBuilder().getAll().top(5).count();\nbusinessPartnerApi.requestBuilder().getAll().skip(5).count();\nbusinessPartnerApi.requestBuilder().getAll().count();\n"))))}p.isMDXComponent=!0}}]);