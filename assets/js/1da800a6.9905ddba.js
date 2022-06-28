"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[318],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22411:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],c={id:"sdk-connectivity-mtls",title:"Certificate-Based Authentication Using SAP Cloud SDK",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Certificate-based Authentication",description:"This article describes how the SAP Cloud SDK for Java can be used to establish connections to other cloud services using mTLS",keywords:["sap","cloud","sdk","mTLS","java","connectivity"]},s=void 0,l={unversionedId:"java/features/connectivity/sdk-connectivity-mtls",id:"java/features/connectivity/sdk-connectivity-mtls",title:"Certificate-Based Authentication Using SAP Cloud SDK",description:"This article describes how the SAP Cloud SDK for Java can be used to establish connections to other cloud services using mTLS",source:"@site/docs/java/features/connectivity/mtls.mdx",sourceDirName:"java/features/connectivity",slug:"/java/features/connectivity/sdk-connectivity-mtls",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-mtls",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/connectivity/mtls.mdx",tags:[],version:"current",lastUpdatedBy:"Deeksha Sinha",lastUpdatedAt:1656403670,formattedLastUpdatedAt:"6/28/2022",frontMatter:{id:"sdk-connectivity-mtls",title:"Certificate-Based Authentication Using SAP Cloud SDK",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Certificate-based Authentication",description:"This article describes how the SAP Cloud SDK for Java can be used to establish connections to other cloud services using mTLS",keywords:["sap","cloud","sdk","mTLS","java","connectivity"]},sidebar:"someSidebar",previous:{title:"HttpClient",permalink:"/cloud-sdk/docs/java/features/connectivity/sdk-connectivity-http-client"},next:{title:"Thread Context",permalink:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"}},d={},p=[{value:"Why Certificate-based Authentication (mTLS)",id:"why-certificate-based-authentication-mtls",level:2},{value:"Shortcomings of Using Secret for Token Retrieval",id:"shortcomings-of-using-secret-for-token-retrieval",level:2},{value:"Certificate-based Authentication for Services",id:"certificate-based-authentication-for-services",level:2},{value:"Default Validity Period of Certificates",id:"default-validity-period-of-certificates",level:2},{value:"Extending the Validity of a Certificate",id:"extending-the-validity-of-a-certificate",level:3},{value:"Sticking to Using Secret for Token Retrieval",id:"sticking-to-using-secret-for-token-retrieval",level:2}],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The SAP Cloud SDK supports certificate-based authentication while establishing connections to other cloud services like ",(0,o.kt)("inlineCode",{parentName:"p"},"XSUAA")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Destination")," service."),(0,o.kt)("h2",{id:"why-certificate-based-authentication-mtls"},"Why Certificate-based Authentication (mTLS)"),(0,o.kt)("p",null,"Mutual ",(0,o.kt)("inlineCode",{parentName:"p"},"TLS")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"mTLS")," for short is a method for mutual authentication.\nIt ensures that before proceeding with the ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP")," exchange both the client and the server each mutually verify each other's identities by the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"X.509")," certificates.\nUsing Certificate-based authentication ensures overcoming the shortcomings of authenticating with ",(0,o.kt)("inlineCode",{parentName:"p"},"clientsecret"),"."),(0,o.kt)("h2",{id:"shortcomings-of-using-secret-for-token-retrieval"},"Shortcomings of Using Secret for Token Retrieval"),(0,o.kt)("p",null,"Let's take an example of a service or an application protected by ",(0,o.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/6373bb7a96114d619bfdfdc6f505d1b9.html"},(0,o.kt)("inlineCode",{parentName:"a"},"XSUAA")),".\nTo access the service or application, you'll need a ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT"),".\nYou will usually fetch a ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT")," by providing ",(0,o.kt)("inlineCode",{parentName:"p"},"clientid"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"clientsecret")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"uri")," stored in your service binding to run a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-security-xsuaa-integration/tree/main/token-client"},(0,o.kt)("inlineCode",{parentName:"a"},"token retrieval flow"))," say for e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"client")),(0,o.kt)("p",null,"The use of ",(0,o.kt)("inlineCode",{parentName:"p"},"clientsecret")," has an inherent risk of these credentials being leaked, especially as they are not frequently rotated.\nLeaking these credentials into the hands of an attacker can cause a lot of harm and stay long unnoticed.\nThe use of certificate-based authentication to fetch the ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"XSUAA")," significantly reduces the risk of leaking secrets and makes rotating them easier."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The SAP Cloud SDK automatically"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Fetches the ",(0,o.kt)("inlineCode",{parentName:"li"},"JWT")," for you"),(0,o.kt)("li",{parentName:"ul"},"Adds the fetched ",(0,o.kt)("inlineCode",{parentName:"li"},"JWT")," to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," header when requesting a service to ensure that the request gets authenticated and authorized.")),(0,o.kt)("p",{parentName:"div"},"Application developers do not need to worry about doing any of this themselves."))),(0,o.kt)("h2",{id:"certificate-based-authentication-for-services"},"Certificate-based Authentication for Services"),(0,o.kt)("p",null,"To adhere to the latest recommended security best practices by SAP, some re-use and kernel services have enabled certificate-based authentication.\nAs a consequence, SAP Cloud SDK also supports certificate-based authentication while accessing these services.\nIf a service binding has a property ",(0,o.kt)("inlineCode",{parentName:"p"},"credentials: { credential-type: x509 }")," then this is an indication that you can use certificate-based authentication to access the service."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"XSUAA")," service is one of the services that has enabled certificate-based authentication.\nThis means that in the service binding in addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"client_secret")," you will also find ",(0,o.kt)("inlineCode",{parentName:"p"},"certificate")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," entries now.\nExample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "VCAP_SERVICES": {\n        "xsuaa": [\n            {\n                "label": "xsuaa",\n                ...\n                "credentials": {\n                    ...\n                    "credential-type": "x509"\n                    "clientid": "fictional-client-id",\n                    "clientsecret": "fictional-secret",\n                    "certificate": "-----BEGIN CERTIFICATE-----fictional-certificate-----END CERTIFICATE-----\\n",\n                    "key": "key"\n                    ...\n                },\n            }\n        ]\n    }\n}\n')),(0,o.kt)("p",null,"This certificate would now be used in place of ",(0,o.kt)("inlineCode",{parentName:"p"},"clientsecret")," to obtain the ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT")," using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-security-xsuaa-integration/tree/main/token-client"},(0,o.kt)("inlineCode",{parentName:"a"},"XSUAA")," token retrieval flows"),".\nThe SAP Cloud SDK will as before fetch the ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT")," for you.\nThe only difference is that the ",(0,o.kt)("inlineCode",{parentName:"p"},"certificate")," from your service binding is used to authenticate the client."),(0,o.kt)("h2",{id:"default-validity-period-of-certificates"},"Default Validity Period of Certificates"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"X.509")," certificates used in the service binding could either be external or ",(0,o.kt)("inlineCode",{parentName:"p"},"XSUAA")," managed.\nBy default ",(0,o.kt)("inlineCode",{parentName:"p"},"XSUAA")," managed certificates are valid only for ",(0,o.kt)("strong",{parentName:"p"},"7 days"),".\nYour calls to the ",(0,o.kt)("inlineCode",{parentName:"p"},"XSUAA")," to fetch a ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT")," will fail after your certificate expires."),(0,o.kt)("p",null,"You can verify this by looking at the logs of your application, you should see"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[APP/PROC/WEB/0] OUT Caused by: com.sap.cloud.sdk.cloudplatform.security.exception.TokenRequestFailedException:\ncom.sap.cloud.security.xsuaa.tokenflows.TokenFlowException:\nError requesting technical user token with grant_type 'client_credentials':\nError retrieving JWT token. Server URI https://<subdomain>.authentication.cert.<landscape domain>/oauth/token.\nHttp status code 400. Response body '400 Bad Request: TLS handshake failed.\n\n[APP/PROC/WEB/0] OUT ssl_c_err: X509_V_ERR_CERT_HAS_EXPIRED\n")),(0,o.kt)("p",null,"Don't get confused with the grant_type of ",(0,o.kt)("inlineCode",{parentName:"p"},"client_credentials")," in the log, this is expected."),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"X.509")," certificate-based authentication, the token retrieval end point will look like\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://<subdomain>.authentication.cert.<landscape domain>/oauth/token"),".\nNotice that the endpoint contains ",(0,o.kt)("strong",{parentName:"p"},"cert")," ."),(0,o.kt)("p",null,"For authentication based on ",(0,o.kt)("inlineCode",{parentName:"p"},"clientsecret"),", the end point would have looked like: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<subdomain>.authentication.<landscape domain>/oauth/token")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"certificate renewal process")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To obtain a new certificate, you will have to delete and re-create a service binding.\nThe application also needs to be restarted to use the updated service binding."))),(0,o.kt)("h3",{id:"extending-the-validity-of-a-certificate"},"Extending the Validity of a Certificate"),(0,o.kt)("p",null,"For less frequent certificate rotation you can extend its validity to a maximum of 1 year.\nFor the ",(0,o.kt)("inlineCode",{parentName:"p"},"XSUAA")," managed certificate use parameters below while creating a service ",(0,o.kt)("strong",{parentName:"p"},"binding"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cf bind-service myapp myservice -c parameters.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "credential-type": "x509",\n  "x509": {\n    "key-length": 2048,\n    "validity": 365,\n    "validity-type": "DAYS"\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"With longer certificate validity there is a danger that compromised certificate might go unnoticed for a significant period of time.\nThis significantly increases potential damage to a compromised system."))),(0,o.kt)("h2",{id:"sticking-to-using-secret-for-token-retrieval"},"Sticking to Using Secret for Token Retrieval"),(0,o.kt)("p",null,"If you prefer to continue using ",(0,o.kt)("strong",{parentName:"p"},"ClientSecret")," instead of ",(0,o.kt)("strong",{parentName:"p"},"Certificate-based Authentication"),", make sure your ",(0,o.kt)("inlineCode",{parentName:"p"},"xs-security.json")," contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"instance-secret")," as the first entry in the property ",(0,o.kt)("inlineCode",{parentName:"p"},"credential-types"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"oauth2-configuration": {\n  "credential-types": ["instance-secret"]\n}\n')))}h.isMDXComponent=!0}}]);