"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2218],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return v}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),v=o,f=p["".concat(s,".").concat(v)]||p[v]||c[v]||r;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function v(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},60995:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={id:"overview",title:"OData",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"This article provides an overview of how the SAP Cloud SDK for Java supports connecting to OData services.",keywords:["sap","cloud","sdk","odata","java","typed","client","generate"]},s=void 0,d={unversionedId:"java/features/odata/overview",id:"java/features/odata/overview",title:"OData",description:"This article provides an overview of how the SAP Cloud SDK for Java supports connecting to OData services.",source:"@site/docs/java/features/odata/overview.mdx",sourceDirName:"java/features/odata",slug:"/java/features/odata/overview",permalink:"/cloud-sdk/docs/java/features/odata/overview",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/odata/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Florian Richter",lastUpdatedAt:1653050893,formattedLastUpdatedAt:"5/20/2022",frontMatter:{id:"overview",title:"OData",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"This article provides an overview of how the SAP Cloud SDK for Java supports connecting to OData services.",keywords:["sap","cloud","sdk","odata","java","typed","client","generate"]},sidebar:"someSidebar",previous:{title:"Getting started",permalink:"/cloud-sdk/docs/java/getting-started"},next:{title:"Generate an OData Client",permalink:"/cloud-sdk/docs/java/features/odata/generate-typed-odata-v2-and-v4-client-for-java"}},u={},c=[{value:"What Is OData?",id:"what-is-odata",level:2},{value:"What OData Versions do You Support?",id:"what-odata-versions-do-you-support",level:2},{value:"Why Using the SAP Cloud SDK for OData?",id:"why-using-the-sap-cloud-sdk-for-odata",level:2},{value:"Type-Safe OData Client",id:"type-safe-odata-client",level:3},{value:"Generic OData Client",id:"generic-odata-client",level:3},{value:"Code Generator",id:"code-generator",level:3},{value:"Convenience Over The SAP Business Technology Platform",id:"convenience-over-the-sap-business-technology-platform",level:3},{value:"Popular Use-Cases for Type-Safe OData Client",id:"popular-use-cases-for-type-safe-odata-client",level:2},{value:"You Are Extending an SAP Product or Service, Building a Middle-Ware, Publishing a Cloud App",id:"you-are-extending-an-sap-product-or-service-building-a-middle-ware-publishing-a-cloud-app",level:3},{value:"Developing and Publishing OData Service",id:"developing-and-publishing-odata-service",level:3},{value:"Coding Convention and Inter-Operability",id:"coding-convention-and-inter-operability",level:3},{value:"Advanced Features and Custom Development",id:"advanced-features-and-custom-development",level:3}],p={toc:c};function v(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-odata"},"What Is OData?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.odata.org/"},"OData")," is an open standard for building and consuming RESTful APIs.\nIt defines a query language to send and retrieve data via HTTP and to perform operations on data."),(0,r.kt)("p",null,"There are two widely used versions of the protocol: ",(0,r.kt)("a",{parentName:"p",href:"https://www.odata.org/documentation/odata-version-2-0/"},(0,r.kt)("strong",{parentName:"a"},"OData v2"))," and more extended and functional ",(0,r.kt)("a",{parentName:"p",href:"https://www.odata.org/documentation/"},(0,r.kt)("strong",{parentName:"a"},"OData v4")),"."),(0,r.kt)("h2",{id:"what-odata-versions-do-you-support"},"What OData Versions do You Support?"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OData protocol version"),(0,r.kt)("th",{parentName:"tr",align:null},"SAP Cloud SDK V3"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"use-typed-odata-v2-client-in-sap-cloud-sdk-for-java"},"OData v2")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"use-typed-odata-v4-client-in-sap-cloud-sdk-for-java"},"OData v4")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"generate a client library yourself")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can always ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/odata/generate-typed-odata-v2-and-v4-client-for-java"},"generate a type-safe OData client library")," based on API specifications available on the ",(0,r.kt)("a",{parentName:"p",href:"https://api.sap.com/"},"SAP API Business Hub")," or found elsewhere."))),(0,r.kt)("h2",{id:"why-using-the-sap-cloud-sdk-for-odata"},"Why Using the SAP Cloud SDK for OData?"),(0,r.kt)("p",null,"The SAP Cloud SDK simplifies the consumption of OData services by offering:"),(0,r.kt)("h3",{id:"type-safe-odata-client"},"Type-Safe OData Client"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We provide a type-safe OData client to build and execute OData requests"),(0,r.kt)("li",{parentName:"ul"},"For many popular SAP OData services we ship pregenerated type-safe clients.\nIn the SAP universe, they are called the Virtual Data Model or VDM.\nThe most popular type-safe client module contains a collection of all OData services of ",(0,r.kt)("a",{parentName:"li",href:"https://api.sap.com/package/SAPS4HANACloud?section=Artifacts"},"SAP S/4HANA Cloud")," and ",(0,r.kt)("a",{parentName:"li",href:"https://api.sap.com/package/S4HANAOPAPI?section=Artifacts"},"SAP S/4HANA On-premise 2020"),"."),(0,r.kt)("li",{parentName:"ul"},"We support both OData v2 and OData v4 protocols in the SAP Cloud SDK for Java.")),(0,r.kt)("h3",{id:"generic-odata-client"},"Generic OData Client"),(0,r.kt)("p",null,"We expose an ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/odata/generic-untyped-odata-client"},"advanced generic OData client")," that can be leveraged when the capabilities or flexibility of a type-safe client are not enough.\nBe careful and know what you're doing."),(0,r.kt)("h3",{id:"code-generator"},"Code Generator"),(0,r.kt)("p",null,"If you need a client for an OData service where we do not ship a pregenerated client use our ",(0,r.kt)("a",{parentName:"p",href:"generate-typed-odata-v2-and-v4-client-for-java"},"code generator")," to convert its service definition into the type-safe Java client library.\nYou can do it for any service either developed by yourself, provided by SAP, or other third parties.\nThe ",(0,r.kt)("a",{parentName:"p",href:"https://api.sap.com/"},"SAP API Business Hub")," is where you'll find the specification for most of the SAP-published services."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Service definition usually comes in form of the ",(0,r.kt)("inlineCode",{parentName:"li"},".edmx")," file and contains metadata of OData service.\nThe simplest way to obtain it, if you have access to the service, is navigating to the ",(0,r.kt)("inlineCode",{parentName:"li"},"http(s)://<service-path>/$metadata")," endpoint.\nYou can generate a client for any third-party service or a service that you've built on your own."),(0,r.kt)("li",{parentName:"ul"},"You can generate clients via our command-line interface (CLI) or Maven plugin.")),(0,r.kt)("h3",{id:"convenience-over-the-sap-business-technology-platform"},"Convenience Over The SAP Business Technology Platform"),(0,r.kt)("p",null,"We simplify development process on the SAP BTP by providing convenient abstractions over:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../connectivity/sdk-connectivity-destination-service"},"Destinations")),(0,r.kt)("li",{parentName:"ul"},"Authentication"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"},"Multi-tenancy")),(0,r.kt)("li",{parentName:"ul"},"and some other related concepts.")),(0,r.kt)("h2",{id:"popular-use-cases-for-type-safe-odata-client"},"Popular Use-Cases for Type-Safe OData Client"),(0,r.kt)("h3",{id:"you-are-extending-an-sap-product-or-service-building-a-middle-ware-publishing-a-cloud-app"},"You Are Extending an SAP Product or Service, Building a Middle-Ware, Publishing a Cloud App"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type-safe consumption of OData services."),"\nBy consumption, we mean building and executing API calls against OData service with serialized request data and processing serialized responses.\nAll in a type-safe way.\nYour code focuses on business logic and leaves lower-level tasks to the SAP Cloud SDK."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Converting OData API into a different flavor of REST API."),"\nYou can use the SAP Cloud SDK for Java to build an app that converts your desired REST format to OData calls and vice versa.\nSuch an app may serve as a proxy, integration adapter, service gateway, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Serving as a layer to fetch data from and push data to OData services."),"\nInstead of building your query tool you can fetch the data with the SAP Cloud SDK and pass it on to your UX framework, analytics tool, data converter, etc.\nReverse data flow will allow you to push new or modified data to the OData service for processing or persistence.\nIn that manner, the SAP Cloud SDK can help you implement adapters for a ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)"},"hexagonal architecture"),".")),(0,r.kt)("h3",{id:"developing-and-publishing-odata-service"},"Developing and Publishing OData Service"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Use the SAP Cloud SDK to create a robust automated testing framework."),"\nYou can create a type-safe client for your own OData service with our generator and scale your automated testing capabilities.\nThis comes with the advantage of updating your client code with ease while your service grows and its metadata evolves."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Shipping your client module with the SAP Cloud SDK for Java."),"\nAs a service developer, you're usually interested in an easy way for your customers to consume your service.\nThat's exactly what the SAP Cloud SDK does.\nWhen your service is finished, you can generate an API client with the SAP Cloud SDK and release it to developers using your service.\nAs an SAP service, you can contribute your API definition via our contribution process.\nOnce accepted, your ",(0,r.kt)("strong",{parentName:"li"},"pregenerated type-safe client")," will be shipping as a Maven module of the SAP Cloud SDK.")),(0,r.kt)("h3",{id:"coding-convention-and-inter-operability"},"Coding Convention and Inter-Operability"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Making sure different teams in your organization coherently consume OData services."),"\nThe SAP Cloud SDK will help you to save developers' time, ensure best coding practices, and knowledge sharing.\nSuch an approach ensures you won't have duplication of work to save the same problem by different teams and guaranteed high levels of interoperability and integration.")),(0,r.kt)("h3",{id:"advanced-features-and-custom-development"},"Advanced Features and Custom Development"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Using certain SAP Cloud SDK features for Custom OData service consumption or publishing."),"\nIf the SAP Cloud SDK's features for OData consumption do not cover your use-case end-to-end, you can still benefit from our public utility and helper methods like OData expression builder, non-type safe request builders, and some others.\nMake sure you know what you're doing because the SAP Cloud SDK can't guarantee convenience and correctness in such a case.")))}v.isMDXComponent=!0}}]);