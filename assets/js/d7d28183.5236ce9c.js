"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={title:"Destination Cache and Isolation",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Destination Cache",description:"This article describes how destinations are cached and how the cache entries are isolated with respect to Tenant and User.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript"]},r=void 0,s={unversionedId:"features/connectivity/destination-cache-isolation",id:"features/connectivity/destination-cache-isolation",title:"Destination Cache and Isolation",description:"This article describes how destinations are cached and how the cache entries are isolated with respect to Tenant and User.",source:"@site/docs-js/features/connectivity/destination-cache-isolation.mdx",sourceDirName:"features/connectivity",slug:"/features/connectivity/destination-cache-isolation",permalink:"/cloud-sdk/docs/js/features/connectivity/destination-cache-isolation",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/features/connectivity/destination-cache-isolation.mdx",tags:[],version:"current",frontMatter:{title:"Destination Cache and Isolation",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Destination Cache",description:"This article describes how destinations are cached and how the cache entries are isolated with respect to Tenant and User.",keywords:["sap","cloud","sdk","destination","connectivity","JavaScript","TypeScript"]},sidebar:"docsJsSidebar",previous:{title:"Destinations",permalink:"/cloud-sdk/docs/js/features/connectivity/destination"},next:{title:"Proxies",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy"}},l={},c=[{value:"Destination-Service Cache",id:"destination-service-cache",level:2},{value:"Custom Destination-Service Cache",id:"custom-destination-service-cache",level:3},{value:"Register-Destination Cache",id:"register-destination-cache",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The SAP Cloud SDK provides the option to cache destinations for efficiency reasons.\nIf a destination is stored in the cache the question of isolation arises.\nShould the destination be cached for all users?\nThis guide explains the different options you have regarding the destination cache of the SAP Cloud SDK.\nThe general destination lookup is described in ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"this guide"),"."),(0,a.kt)("h2",{id:"destination-service-cache"},"Destination-Service Cache"),(0,a.kt)("p",null,"When you request a destination from the destination-service you can improve performance by enabling the cache.\nThis reduces the number of calls to the destination service.\nAll the discussed options apply to the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"getDestination()")," methods of the SAP Cloud SDK.\nThe destination caching is disabled by default and you switch it on by the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCache")," flag:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},".execute({destinationName: 'myDestination', jwt: 'yourJWT', useCache: true})\n")),(0,a.kt)("p",null,"A cached destination is stored for 5 minutes in the cache.\nThe SAP Cloud SDK tries to set the proper isolation strategy for the destination automatically.\nThere are two options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Tenant"),": The destination is cached for a tenant and different users will hit the same cache entry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TenantUser"),": The destination is cached for each user of a tenant separately.")),(0,a.kt)("p",null,"The SAP Cloud SDK sets the isolation based on the provided ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No ",(0,a.kt)("inlineCode",{parentName:"li"},"JWT"),": Isolation is ",(0,a.kt)("inlineCode",{parentName:"li"},"Tenant")," and value for the tenant is the provider account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JWT")," without ",(0,a.kt)("inlineCode",{parentName:"li"},"user_id"),": Isolation is ",(0,a.kt)("inlineCode",{parentName:"li"},"Tenant")," and the value for the tenant is the ",(0,a.kt)("inlineCode",{parentName:"li"},"zid")," of the ",(0,a.kt)("inlineCode",{parentName:"li"},"JWT"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JWT")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"user_id"),": Isolation is ",(0,a.kt)("inlineCode",{parentName:"li"},"TenantUser")," and values are taken from ",(0,a.kt)("inlineCode",{parentName:"li"},"zid")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"user_id"),".")),(0,a.kt)("p",null,"This is a safe choice ensuring that you do not run into privilege escalation due to caching.\nThe first two cases are typical for user-independent authentication flows.\nExamples of such a flow are ",(0,a.kt)("inlineCode",{parentName:"p"},"BasicAuthentication"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientCertificateAuthentication")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuth2ClientCredentials"),"."),(0,a.kt)("p",null,"There are cases where the choice made by the SAP Cloud SDK is not optimal.\nAssume you have a multi-tenant scenario and you need to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," to obtain the destination for the right tenant."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"user_id")," but the destination flow is user",(0,a.kt)("span",{class:"x x-first x-last"},"-"),"independent",".\nThe SAP Cloud SDK would use isolation ",(0,a.kt)("inlineCode",{parentName:"p"},"TenantUser"),", although ",(0,a.kt)("inlineCode",{parentName:"p"},"Tenant")," would be sufficient."),(0,a.kt)("p",null,"In such a case you can manually enforce weaker isolation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},".execute({\n  destinationName: 'myDestination',\n  jwt: 'yourJWT',\n  isolationStrategy: IsolationStrategy.Tenant\n})\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Be very careful with this option.\nYou should know what you're doing when manually downgrading the isolation strategy from the maximally possible ",(0,a.kt)("inlineCode",{parentName:"p"},"TenantUser")," level.\nAn erroneous configuration can lead to severe privilege escalation between users.")),(0,a.kt)("h3",{id:"custom-destination-service-cache"},"Custom Destination-Service Cache"),(0,a.kt)("p",null,"When the cache option is enabled, the SAP Cloud SDK stores the fetched destinations in an in-memory cache.\nHowever, in certain cases, a persistent or distributed cache may be more suitable according to your application architecture.\nFor such cases where different cache storage is desired, the SAP Cloud SDK allows you to plug in your implementation for the destination cache."),(0,a.kt)("p",null,"To create your custom destination cache provider, implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"DestinationCacheInterface")," interface shown below and define the ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"set"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"clear")," methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface DestinationCacheInterface {\n  hasKey(key: string): Promise<boolean>;\n  get(key: string | undefined): Promise<Destination | undefined>;\n  set(key: string | undefined, item: CacheEntry<Destination>): Promise<void>;\n  clear(): Promise<void>;\n}\n")),(0,a.kt)("p",null,"Note that each item in the cache is represented using the type ",(0,a.kt)("inlineCode",{parentName:"p"},"CacheEntry<T>")," which defines two properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"entry"),", the item you want to store, and"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expires"),", the expiration time for an individual cache item, this is optional.")),(0,a.kt)("p",null,"Once you have implemented your custom cache provider, you can tell the SAP Cloud SDK to use it in place of the default one.\nTo do this, call the method ",(0,a.kt)("inlineCode",{parentName:"p"},"setDestinationCache")," at the start of your application code, i.e., before the first calls to either the ",(0,a.kt)("inlineCode",{parentName:"p"},"getDestination")," or the generic client's ",(0,a.kt)("inlineCode",{parentName:"p"},"executeHttpRequest")," methods, and pass your cache provider instance as an argument to this method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class CustomCacheProvide implements DestinationCacheInterface {\n  // your custom implementation\n}\n\nsetDestinationCache(new CustomCacheProvider());\n")),(0,a.kt)("p",null,"All subsequent calls to fetch destinations will use the custom cache."),(0,a.kt)("h2",{id:"register-destination-cache"},"Register-Destination Cache"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"registerDestination()")," method, is like manual cache for destinations.\nWe explain the usage of this method in the guide on ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"destination lookup"),".\nThe method behaves similarly to the destination-service cache discussed above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { registerDestination } from '@sap-cloud-sdk/connectivity';\n\nconst destination = {\n  name: 'FORWARD-DESTINATION',\n  url: 'https://mys4hana.com'\n};\n\nregisterDestination(destination, { jwt: 'yourJWT' });\n")),(0,a.kt)("p",null,"The isolation strategy is automatically detected and applied based on the given ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No ",(0,a.kt)("inlineCode",{parentName:"li"},"JWT"),": Isolation is ",(0,a.kt)("inlineCode",{parentName:"li"},"Tenant")," and value for the tenant is the provider account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JWT")," without ",(0,a.kt)("inlineCode",{parentName:"li"},"user_id"),": Isolation is ",(0,a.kt)("inlineCode",{parentName:"li"},"Tenant")," and the value for the tenant is the ",(0,a.kt)("inlineCode",{parentName:"li"},"zid")," of the ",(0,a.kt)("inlineCode",{parentName:"li"},"JWT"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JWT")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"user_id"),": Isolation is ",(0,a.kt)("inlineCode",{parentName:"li"},"TenantUser")," and values are taken from ",(0,a.kt)("inlineCode",{parentName:"li"},"zid")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"user_id"),".")),(0,a.kt)("p",null,"You can override the automatically detected isolation strategy.\nThis could be necessary if you want to register a destination that cares only about ",(0,a.kt)("inlineCode",{parentName:"p"},"Tenant")," while your ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," contains both a ",(0,a.kt)("inlineCode",{parentName:"p"},"tenant")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"user_id")," which would make it ",(0,a.kt)("inlineCode",{parentName:"p"},"TenantUser")," by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"registerDestination(destination, {\n  jwt: 'yourJWT',\n  isolationStrategy: IsolationStrategy.Tenant\n});\n")))}p.isMDXComponent=!0}}]);