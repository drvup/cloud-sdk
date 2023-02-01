"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?i.createElement(m,s(s({ref:t},p),{},{components:n})):i.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=n(87462),o=(n(67294),n(3905)),a=n(44996);const s={id:"api-business-hub-download-specification",title:"Download Specification Files from SAP API Business Hub",sidebar_label:"Download specification files",description:"This guide demonstrates the steps to download OData and OpenAPI specification files (specs) from SAP API Business Hub."},r=void 0,l={unversionedId:"guides/api-business-hub-download-specification",id:"version-v2/guides/api-business-hub-download-specification",title:"Download Specification Files from SAP API Business Hub",description:"This guide demonstrates the steps to download OData and OpenAPI specification files (specs) from SAP API Business Hub.",source:"@site/docs-js_versioned_docs/version-v2/guides/apihub-download-spec.mdx",sourceDirName:"guides",slug:"/guides/api-business-hub-download-specification",permalink:"/cloud-sdk/docs/js/guides/api-business-hub-download-specification",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v2/guides/apihub-download-spec.mdx",tags:[],version:"v2",frontMatter:{id:"api-business-hub-download-specification",title:"Download Specification Files from SAP API Business Hub",sidebar_label:"Download specification files",description:"This guide demonstrates the steps to download OData and OpenAPI specification files (specs) from SAP API Business Hub."},sidebar:"docsJsSidebar",previous:{title:"Remotely debug an application on SAP BTP",permalink:"/cloud-sdk/docs/js/guides/remote-debugging"},next:{title:"Introduction",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/introduction"}},c={},p=[{value:"When Do I Need A Specification File?",id:"when-do-i-need-a-specification-file",level:2},{value:"Steps To Download A Specification File",id:"steps-to-download-a-specification-file",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide demonstrates the steps to download OData and OpenAPI specification files (specs) from SAP API Business Hub."),(0,o.kt)("h2",{id:"when-do-i-need-a-specification-file"},"When Do I Need A Specification File?"),(0,o.kt)("p",null,"To consume an OData or OpenAPI service, you need to generate a corresponding client.\nThe documentation of the generator packages can be found below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/generator")," for generating an OData client (see ",(0,o.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/odata/generate-client"},"doc"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/openapi-generator")," for generating an OpenAPI client (see ",(0,o.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/openapi/generate-client"},"doc"),")")),(0,o.kt)("h2",{id:"steps-to-download-a-specification-file"},"Steps To Download A Specification File"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("a",{parentName:"li",href:"https://api.sap.com"},"SAP API Business Hub"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"login"),", as this is necessary for downloading the specs."),(0,o.kt)("li",{parentName:"ol"},'Search for the service you want to consume like "business partner". The search results should look like the screenshot below.'),(0,o.kt)("li",{parentName:"ol"},"Apply filters for targeting a specific service by clicking the ",(0,o.kt)("strong",{parentName:"li"},"Show Filters")," button. For example, to filter only S/4HANA Cloud services, in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Product")," list, select ",(0,o.kt)("inlineCode",{parentName:"li"},"SAP S/4HANA Cloud"),".")),(0,o.kt)("img",{src:(0,a.Z)("img/apihub-download-spec-1.png")}),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click the service name, when you find your service, so you can see a similar page like the screenshot below.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"API Specification")),(0,o.kt)("img",{src:(0,a.Z)("img/apihub-download-spec-2.png")})),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Scroll down and download the EDMX file for an OData service. (For OpenAPI, choose YAML or JSON)"),(0,o.kt)("img",{src:(0,a.Z)("img/apihub-download-spec-3.png")}))),(0,o.kt)("admonition",{title:"Try out sandbox systems",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you're unsure whether the chosen service is correct, click ",(0,o.kt)("strong",{parentName:"p"},"Try Out")," to test the sandbox system, which exposes a few endpoints.")))}u.isMDXComponent=!0}}]);