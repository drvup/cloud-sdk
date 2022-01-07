"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7653],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,l=f["".concat(u,".").concat(d)]||f[d]||m[d]||a;return n?r.createElement(l,i(i({ref:t},p),{},{components:n})):r.createElement(l,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36711:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={},u=void 0,s={unversionedId:"js/features/odata/common/function-imports/etag-function-import",id:"js/features/odata/common/function-imports/etag-function-import",title:"etag-function-import",description:"The ETag handling with the function imports is not integrated.",source:"@site/docs/js/features/odata/common/function-imports/etag-function-import.mdx",sourceDirName:"js/features/odata/common/function-imports",slug:"/js/features/odata/common/function-imports/etag-function-import",permalink:"/cloud-sdk/docs/js/features/odata/common/function-imports/etag-function-import",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/function-imports/etag-function-import.mdx",tags:[],version:"current",lastUpdatedBy:"Junjie Tang",lastUpdatedAt:1641547666,formattedLastUpdatedAt:"1/7/2022",frontMatter:{}},p=[],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ETag")," handling with the function imports is not integrated.\nBelow is an example demonstrating how to make use of the ",(0,a.kt)("a",{parentName:"p",href:"pathname:///api/1.26.1/classes/sap_cloud_sdk_core.functionimportrequestbuilder-1#withcustomheaders"},(0,a.kt)("inlineCode",{parentName:"a"},"withCustomHeaders"))," for setting ",(0,a.kt)("inlineCode",{parentName:"p"},"ETag")," by your own.\nIn order to use ",(0,a.kt)("a",{parentName:"p",href:"pathname:///api/1.28.1/classes/sap_cloud_sdk_core.entityv2#versionidentifier"},(0,a.kt)("inlineCode",{parentName:"a"},"versionIdentifier"))," for ",(0,a.kt)("inlineCode",{parentName:"p"},"ETag")," value, make sure you fetch the entity information via e.g., a ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"postGoodsIssue({ outboundDeliveryOrder: 'order' })\n  .addCustomHeaders({ 'if-match': entity.versionIdentifier })\n  .execute(destination);\n")))}f.isMDXComponent=!0}}]);