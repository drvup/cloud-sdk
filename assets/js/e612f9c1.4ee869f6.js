"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[9048],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76554:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={},s=void 0,c={unversionedId:"features/odata/common/function-imports/request-builder",id:"version-v1/features/odata/common/function-imports/request-builder",title:"request-builder",description:"The function import request builder helps build a request for service operations including their parameters.",source:"@site/docs-js_versioned_docs/version-v1/features/odata/common/function-imports/request-builder.mdx",sourceDirName:"features/odata/common/function-imports",slug:"/features/odata/common/function-imports/request-builder",permalink:"/cloud-sdk/docs/js/v1/features/odata/common/function-imports/request-builder",draft:!1,tags:[],version:"v1",frontMatter:{}},l={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The function import request builder helps build a request for service operations including their parameters.\nNot all services expose function imports.\nWe will use the ",(0,a.kt)("a",{parentName:"p",href:"https://api.sap.com/api/API_WHSE_OUTB_DLV_ORDER/resource"},"Warehouse Outbound Delivery Order service")," as an example.\nThe according SAP Cloud SDK for JavaScript package is named ",(0,a.kt)("inlineCode",{parentName:"p"},"@sap/cloud-sdk-vdm-warehouse-outbound-delivery-order-service"),"."),(0,a.kt)("p",null,"The example below creates a function import request builder for the service operation ",(0,a.kt)("inlineCode",{parentName:"p"},"PostGoodsIssue")," and then executes it against your destination."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"postGoodsIssue({ outboundDeliveryOrder: 'order' }).execute(destination);\n")),(0,a.kt)("p",null,"The service operation is defined in the service metadata."),(0,a.kt)("p",null,"If the response structure does not match the transformation type, the promise from ",(0,a.kt)("inlineCode",{parentName:"p"},"execute(destination)")," will be resolved into ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,a.kt)("p",null,"The default transformer expects the following response format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "d": {\n    "Count": 0\n  }\n}\n')),(0,a.kt)("p",null,"Assume the actual response has an additional layer ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "d": {\n    "Foo": {\n      "Count": 0\n    }\n  }\n}\n')),(0,a.kt)("p",null,"In this case, ",(0,a.kt)("inlineCode",{parentName:"p"},"dataAccessor")," can be used in the following way to modify the response into the desired form for further deserialization."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"functionImportRequestBuilder.execute(destination, data => data.d.Foo);\n")))}f.isMDXComponent=!0}}]);