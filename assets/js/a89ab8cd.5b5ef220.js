"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3276,945,2242,5586,3917,6502],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,h=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},79504:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={},s=void 0,i={unversionedId:"features/common/custom-request-config-note",id:"version-v1/features/common/custom-request-config-note",title:"custom-request-config-note",description:"To ensure API consistency, we do not allow overriding the following options:",source:"@site/docs-js_versioned_docs/version-v1/features/common/custom-request-config-note.mdx",sourceDirName:"features/common",slug:"/features/common/custom-request-config-note",permalink:"/cloud-sdk/docs/js/v1/features/common/custom-request-config-note",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/common/custom-request-config-note.mdx",tags:[],version:"v1",frontMatter:{}},u={},l=[],d={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To ensure API consistency, we do not allow overriding the following options:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"method")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"url")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"baseURL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"params")))))}c.isMDXComponent=!0},46615:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={},s=void 0,i={unversionedId:"features/common/custom-request-config",id:"version-v1/features/common/custom-request-config",title:"custom-request-config",description:"By default, the SAP Cloud SDK uses axios as an HTTP client for executing requests.",source:"@site/docs-js_versioned_docs/version-v1/features/common/custom-request-config.mdx",sourceDirName:"features/common",slug:"/features/common/custom-request-config",permalink:"/cloud-sdk/docs/js/v1/features/common/custom-request-config",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/common/custom-request-config.mdx",tags:[],version:"v1",frontMatter:{}},u={},l=[],d={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By default, the SAP Cloud SDK uses ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," as an HTTP client for executing requests.\nThe SAP Cloud SDK derives and configures most request options like ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headers"),", and others for you.\nIn certain cases, passing additional options to axios might be required.\nTo achieve this, you can provide a custom request configuration that will be passed down to axios.\nThe example below demonstrates how to configure the response data type, typically used when downloading a file from an endpoint."))}c.isMDXComponent=!0},94682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={},s=void 0,i={unversionedId:"features/common/execute-raw-overview",id:"version-v1/features/common/execute-raw-overview",title:"execute-raw-overview",description:"In addition to the execute method, you can execute a request using the executeRaw method.",source:"@site/docs-js_versioned_docs/version-v1/features/common/execute-raw-overview.mdx",sourceDirName:"features/common",slug:"/features/common/execute-raw-overview",permalink:"/cloud-sdk/docs/js/v1/features/common/execute-raw-overview",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/common/execute-raw-overview.mdx",tags:[],version:"v1",frontMatter:{}},u={},l=[],d={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," method, you can execute a request using the ",(0,r.kt)("inlineCode",{parentName:"p"},"executeRaw")," method.\nIt returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpResponse"),", which contains the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"status")," - the status code of the response"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headers")," - the response headers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data")," - the response body"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request")," - the original request")))}c.isMDXComponent=!0},3773:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={},s=void 0,i={unversionedId:"features/common/execute-raw-use-cases",id:"version-v1/features/common/execute-raw-use-cases",title:"execute-raw-use-cases",description:"Typical cases, where you might need to use executeRaw are:",source:"@site/docs-js_versioned_docs/version-v1/features/common/execute-raw-use-cases.mdx",sourceDirName:"features/common",slug:"/features/common/execute-raw-use-cases",permalink:"/cloud-sdk/docs/js/v1/features/common/execute-raw-use-cases",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/common/execute-raw-use-cases.mdx",tags:[],version:"v1",frontMatter:{}},u={},l=[],d={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Typical cases, where you might need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"executeRaw")," are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You need additional information about the response, like the status code or response headers."),(0,r.kt)("li",{parentName:"ul"},"You need additional information about the request that has been sent, like payload, method, or request headers."),(0,r.kt)("li",{parentName:"ul"},"The function ",(0,r.kt)("inlineCode",{parentName:"li"},"execute")," is omitted in some request builders because the response data cannot be deserialized by the request builder."),(0,r.kt)("li",{parentName:"ul"},"Debugging purposes.")))}c.isMDXComponent=!0},20701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={},s=void 0,i={unversionedId:"features/common/skip-csrf-token",id:"version-v1/features/common/skip-csrf-token",title:"skip-csrf-token",description:"For some services, the CSRF token is not required even for non-get requests.",source:"@site/docs-js_versioned_docs/version-v1/features/common/skip-csrf-token.mdx",sourceDirName:"features/common",slug:"/features/common/skip-csrf-token",permalink:"/cloud-sdk/docs/js/v1/features/common/skip-csrf-token",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/common/skip-csrf-token.mdx",tags:[],version:"v1",frontMatter:{}},u={},l=[],d={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For some services, the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF")," token is not required even for non-get requests.\nTherefore, skipping fetching the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF")," token makes sense as a performance improvement.\nYou can disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSRF")," token request by using ",(0,r.kt)("inlineCode",{parentName:"p"},"skipCsrfTokenFetching()")," like below:"))}c.isMDXComponent=!0},45482:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=(a(44996),a(65488)),s=a(85162),i=a(36354);const u={title:"Executing a Request Using a Generated OData v2/v4 Client",sidebar_label:"Execute an OData request",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"]},l=void 0,d={unversionedId:"features/odata/execute-odata-request",id:"version-v1/features/odata/execute-odata-request",title:"Executing a Request Using a Generated OData v2/v4 Client",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",source:"@site/docs-js_versioned_docs/version-v1/features/odata/execute-odata-request.mdx",sourceDirName:"features/odata",slug:"/features/odata/execute-odata-request",permalink:"/cloud-sdk/docs/js/v1/features/odata/execute-odata-request",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/odata/execute-odata-request.mdx",tags:[],version:"v1",frontMatter:{title:"Executing a Request Using a Generated OData v2/v4 Client",sidebar_label:"Execute an OData request",description:"Use the SAP Cloud SDK for JavaScript to build and run OData requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","consume"]},sidebar:"docsJsSidebar",previous:{title:"Generate an OData Client",permalink:"/cloud-sdk/docs/js/v1/features/odata/generate-odata-client"},next:{title:"OData v2 Client API",permalink:"/cloud-sdk/docs/js/v1/features/odata/use-odata-v2-type-safe-client-for-javascript-typescript"}},c={},p=[{value:"General Request Structure",id:"general-request-structure",level:2},{value:"Setting Custom Request Headers",id:"setting-custom-request-headers",level:3},{value:"Setting Custom Query Parameters",id:"setting-custom-query-parameters",level:3},{value:"Setting a Custom Service Path",id:"setting-a-custom-service-path",level:3},{value:"Setting a Custom Request Configuration",id:"setting-a-custom-request-configuration",level:3},{value:"Appending Paths to the Request URL Built by the Request Builders",id:"appending-paths-to-the-request-url-built-by-the-request-builders",level:3},{value:"Getting the Raw Response and the Original Request",id:"getting-the-raw-response-and-the-original-request",level:3}],m={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Once you have generated a typed OData client using the SAP Cloud SDK generator or if you decided to use one of the pregenerated OData clients for SAP S/4HANA, you can use your OData client to execute HTTP requests against your service.\nThe client provides request builders for the different types of requests and abstractions of the entity sets of the given service, which we refer to as ",(0,r.kt)("em",{parentName:"p"},"entities"),"."),(0,r.kt)("p",null,"To request an entity set, entities offer a fluent API."),(0,r.kt)("h2",{id:"general-request-structure"},"General Request Structure"),(0,r.kt)("p",null,"On an abstract level, creating a request using the fluent API always follows the same simple structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { MyEntity } from './outputDir/my-service';\n\nreturn MyEntity.requestBuilder()\n  .<requestType>(...)\n  .<additionalRequestConfiguration>(...)\n  .execute(destination);\n")),(0,r.kt)("p",null,"If you are using an OData client, that you generated on your own, import an entity from the generated service directory (",(0,r.kt)("inlineCode",{parentName:"p"},"my-service"),") within the specified output directory (",(0,r.kt)("inlineCode",{parentName:"p"},"outputDir"),").\nThe name of the service directory corresponds to the ",(0,r.kt)("inlineCode",{parentName:"p"},"directoryName")," specified in the service mapping file (",(0,r.kt)("inlineCode",{parentName:"p"},"serviceMapping.json")," by default) in your input directory."),(0,r.kt)("p",null,"If you are using one of the pregenerated OData clients, import it from the npm package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { PregeneratedEntity } from '@sap/cloud-sdk-vdm-pregenerated-service';\n")),(0,r.kt)("p",null,"Every entity has a ",(0,r.kt)("inlineCode",{parentName:"p"},"requestBuilder")," function, that allows to chain all types of request builders that are available for this entity, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"MyEntity.requestBuilder().getAll()")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"getAll")," request type."),(0,r.kt)("p",null,"See the list below for details on all available request types (denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"requestType")," in the example above):"),(0,r.kt)(o.Z,{groupId:"odataVersion",defaultValue:"v2",values:[{label:"OData v2",value:"v2"},{label:"OData v4",value:"v4"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"v2",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#getall-request-builder"},(0,r.kt)("code",null,"getAll"))," ","Build requests to get a list of entities (OData v2)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#getbykey-request-builder"},(0,r.kt)("code",null,"getByKey"))," ","Build requests to get an entity based on a key (OData v2)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#create-request-builder"},(0,r.kt)("code",null,"create"))," ","Build requests to create entities (OData v2)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#update-request-builder"},(0,r.kt)("code",null,"update"))," ","Build requests to update entities (OData v2)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./use-odata-v2-type-safe-client-for-javascript-typescript#delete-request-builder"},(0,r.kt)("code",null,"delete"))," ","Build requests to delete entities (OData v2)")),(0,r.kt)(s.Z,{value:"v4",mdxType:"TabItem"},(0,r.kt)("li",null,(0,r.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#getall-request-builder"},(0,r.kt)("code",null,"getAll"))," ","Build requests to get a list of entities (OData v4)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#getbykey-request-builder"},(0,r.kt)("code",null,"getByKey"))," ","Build requests to get an entity based on a key (OData v4)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#create-request-builder"},(0,r.kt)("code",null,"create"))," ","Build requests to create entities (OData v4)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#update-request-builder"},(0,r.kt)("code",null,"update"))," ","Build requests to update entities (OData v4)"),(0,r.kt)("li",null,(0,r.kt)("a",{href:"./use-odata-v4-type-safe-client-for-javascript-typescript#delete-request-builder"},(0,r.kt)("code",null,"delete"))," ","Build requests to delete entities (OData v4)"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some entities do not support all the request types, which in turn won't be available through the API.")),(0,r.kt)("p",null,"The request can further be configured by chaining additional configuration functions (denoted by ",(0,r.kt)("inlineCode",{parentName:"p"},"additionalRequestConfiguration")," in the example above).\nAll requests can be configured by setting ",(0,r.kt)("a",{parentName:"p",href:"#setting-custom-request-headers"},"custom request headers"),", ",(0,r.kt)("a",{parentName:"p",href:"#setting-custom-query-parameters"},"custom query parameters")," and a ",(0,r.kt)("a",{parentName:"p",href:"#setting-a-custom-service-path"},"custom service path"),"."),(0,r.kt)("p",null,"Each request type has additional request specific configuration options, e.g. creating an entity ",(0,r.kt)("inlineCode",{parentName:"p"},"asChildOf")," another entity for ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," requests, ETag handling for ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," requests, as well as set operations for ",(0,r.kt)("inlineCode",{parentName:"p"},"getAll")," requests and selecting properties for ",(0,r.kt)("inlineCode",{parentName:"p"},"getAll")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getByKey")," requests."),(0,r.kt)("p",null,"The last step when making a request using the SAP Cloud SDK is the request execution.\nOnce the request is configured use the ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," function and pass a ",(0,r.kt)("a",{parentName:"p",href:"../connectivity/destination"},"destination")," to it.\nThis will automatically construct your request URL and headers, execute the request, and return a typed response if applicable."),(0,r.kt)("h3",{id:"setting-custom-request-headers"},"Setting Custom Request Headers"),(0,r.kt)("p",null,"The SAP Cloud SDK automatically sets some necessary request headers on every request.\nYou can specify additional custom headers using the ",(0,r.kt)("inlineCode",{parentName:"p"},"addCustomHeaders")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder().getAll().addCustomHeaders({\n  apikey: 'my-api-key'\n});\n")),(0,r.kt)("p",null,"The keys and values of the passed object correspond with the header names and values.\nCustom headers take priority over automatically generated headers.\nAutomatically generated headers are sent with lowercase header names, and custom headers keep the case they were set in.\nIn the example above we pass an ",(0,r.kt)("inlineCode",{parentName:"p"},"apikey"),", which is necessary if you want to make use of the SAP API Business Hub sandbox."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Setting an ",(0,r.kt)("inlineCode",{parentName:"p"},"authorization")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"apikey")," header (regardless of lowercase or uppercase spelling) will skip any automatic authorization header building that the SAP Cloud SDK would normally do.")),(0,r.kt)("h3",{id:"setting-custom-query-parameters"},"Setting Custom Query Parameters"),(0,r.kt)("p",null,"The SAP Cloud SDK adds necessary query parameters for a request based on your configuration.\nYou can add custom parameters by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"withCustomQueryParameters")," function.\nCustom query parameters take precedence over those created by the SAP Cloud SDK."),(0,r.kt)("p",null,"In the example below an additional query parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"language=en")," will be added to the request URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder().getAll().withCustomQueryParameters({\n  language: 'en'\n});\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you want to set a query parameter in quotes (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"language='en'"),") you will have to provide the parameter with quotes, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"{ language: \"'en'\" }"),".")),(0,r.kt)("h3",{id:"setting-a-custom-service-path"},"Setting a Custom Service Path"),(0,r.kt)("p",null,"If a service specification contains a specification for the ",(0,r.kt)("inlineCode",{parentName:"p"},"servicePath"),", the SAP Cloud SDK generator generates an OData client with a default service path according to the specification (typically ",(0,r.kt)("inlineCode",{parentName:"p"},"'/sap/opus/data/sap/'")," for SAP S/4HANA services).\nWhen there is no such path defined in the specification, it can be manually set in the ",(0,r.kt)("inlineCode",{parentName:"p"},"service-mapping.json"),".\nIt can also be adjusted per request by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"withCustomServicePath")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getAll()\n  .withCustomServicePath('my/custom/service/path');\n")),(0,r.kt)("p",null,"This will add the custom service path to your request.\nExecuting the example request above against a destination with URL ",(0,r.kt)("inlineCode",{parentName:"p"},"https://my.s4-system.com")," would result in a request against something like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://my.s4-system.com/my/custom/service/path/MyEntity"),"."),(0,r.kt)("h3",{id:"setting-a-custom-request-configuration"},"Setting a Custom Request Configuration"),(0,r.kt)(i.Ol,{mdxType:"CustomRequestConfig"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getAll()\n  .addCustomRequestConfiguration({ responseType: 'arraybuffer' });\n")),(0,r.kt)(i.nc,{mdxType:"CustomRequestConfigNote"}),(0,r.kt)("h3",{id:"appending-paths-to-the-request-url-built-by-the-request-builders"},"Appending Paths to the Request URL Built by the Request Builders"),(0,r.kt)("p",null,"Usually, our request builders construct the request URL for you automatically.\nHowever, for certain OData features like ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation properties"),", we do not yet provide a type-safe API that constructs the request path in a fully automated manner.\nFor that reason, we added a non-typed API to our request builders providing the capability to append additional path segments to the request URL.\nYou have to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"executeRaw(destination)")," method to get results because we can't deserialize a response in a type-safe way."),(0,r.kt)("p",null,"The example below shows how to query a navigation property from a given entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"MyEntity.requestBuilder()\n  .getByKey('123')\n  .appendPath(\n    '/to_SingleValueNavigationProperty1',\n    '/to_SingleValueNavigationProperty2'\n  )\n  .executeRaw(destination);\n")),(0,r.kt)("p",null,"It will build the request URL like below:\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://my.s4-system.com/service-path/MyEntity(key='123')/to_SingleValueNavigationProperty1/to_SingleValueNavigationProperty2"),"\nwhere:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/to_SingleValueNavigationProperty1/to_SingleValueNavigationProperty2")," is the additional path that you provide from the parameters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://my.s4-system.com/service-path/MyEntity(key='123')")," is the path of the original request URL built by the SAP Cloud SDK.")),(0,r.kt)("h3",{id:"getting-the-raw-response-and-the-original-request"},"Getting the Raw Response and the Original Request"),(0,r.kt)(i.WD,{mdxType:"ExecuteRawOverview"}),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const httpResponse: HttpResponse = MyEntity.requestBuilder()\n  .getAll()\n  .executeRaw(destination);\n")),(0,r.kt)(i.zl,{mdxType:"ExecuteRawUseCases"}),(0,r.kt)("ul",{style:{"margin-top":"-16px"}},(0,r.kt)("li",null,"In rare cases, when the response data cannot be deserialized. This can happen when function imports use an entity type as a return type, and this entity type is shared by multiple `EntitySet`s. Without further information, it is unclear which ",(0,r.kt)("code",null,"Entity")," should be deserialized. For those cases, you have to use ",(0,r.kt)("code",null,"executeRaw")," and use the ",(0,r.kt)("code",null,"deserialize")," function on the response data.")))}h.isMDXComponent=!0},36354:(e,t,a)=>{a.d(t,{Ol:()=>l,WD:()=>c,Xc:()=>m,nc:()=>d,zl:()=>p});var n=a(67294),r=a(46615),o=a(79504),s=a(94682),i=a(3773),u=a(20701);function l(){return n.createElement(r.default,null)}function d(){return n.createElement(o.default,null)}function c(){return n.createElement(s.default,null)}function p(){return n.createElement(i.default,null)}function m(){return n.createElement(u.default,null)}},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),o=a(86010),s=a(72389),i=a(67392),u=a(7094),l=a(12466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,a;const{lazy:s,block:p,defaultValue:m,values:h,groupId:f,className:v}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=h?h:y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,i.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(a=y.find((e=>e.props.default)))?void 0:a.props.value)?t:y[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:q,setTabGroupChoices:w}=(0,u.U)(),[N,C]=(0,r.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:S}=(0,l.o5)();if(null!=f){const e=q[f];null!=e&&e!==N&&k.some((t=>t.value===e))&&C(e)}const D=e=>{const t=e.currentTarget,a=x.indexOf(t),n=k[a].value;n!==N&&(S(t),C(n),null!=f&&w(f,String(n)))},T=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=x.indexOf(e.currentTarget)+1;a=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;a=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},v)},k.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:T,onFocus:D,onClick:D},s,{className:(0,o.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}}}]);