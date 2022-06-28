"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3199],{3905:function(e,n,i){i.d(n,{Zo:function(){return l},kt:function(){return p}});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=t.createContext({}),c=function(e){var n=t.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},l=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(i),p=a,u=m["".concat(d,".").concat(p)]||m[p]||g[p]||r;return i?t.createElement(u,o(o({ref:n},l),{},{components:i})):t.createElement(u,o({ref:n},l))}));function p(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=i[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}m.displayName="MDXCreateElement"},14642:function(e,n,i){i.r(n),i.d(n,{assets:function(){return l},contentTitle:function(){return d},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return g}});var t=i(87462),a=i(63366),r=(i(67294),i(3905)),o=["components"],s={id:"load-service-bindings-from-environment",title:"Load Service Bindings within various Environments",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Loading Service Bindings",description:"This article describes how to leverage the Service Binding Loader API of the SAP Cloud SDK for Java to read service information in different environments.",keywords:["sap","cloud","sdk","java","OSB","service","binding","loader"]},d=void 0,c={unversionedId:"java/features/service-bindings/load-service-bindings-from-environment",id:"java/features/service-bindings/load-service-bindings-from-environment",title:"Load Service Bindings within various Environments",description:"This article describes how to leverage the Service Binding Loader API of the SAP Cloud SDK for Java to read service information in different environments.",source:"@site/docs/java/features/service-bindings/service-binding-loader.mdx",sourceDirName:"java/features/service-bindings",slug:"/java/features/service-bindings/load-service-bindings-from-environment",permalink:"/cloud-sdk/docs/java/features/service-bindings/load-service-bindings-from-environment",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/service-bindings/service-binding-loader.mdx",tags:[],version:"current",lastUpdatedBy:"Deeksha Sinha",lastUpdatedAt:1656411041,formattedLastUpdatedAt:"6/28/2022",frontMatter:{id:"load-service-bindings-from-environment",title:"Load Service Bindings within various Environments",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Loading Service Bindings",description:"This article describes how to leverage the Service Binding Loader API of the SAP Cloud SDK for Java to read service information in different environments.",keywords:["sap","cloud","sdk","java","OSB","service","binding","loader"]},sidebar:"someSidebar",previous:{title:"SAP Kyma",permalink:"/cloud-sdk/docs/java/environments/sap-btp-kyma-environment"},next:{title:"Cloud Foundry CLI",permalink:"/cloud-sdk/docs/java/guides/cf-cli"}},l={},g=[{value:"Load Service Binding Information",id:"load-service-binding-information",level:2},{value:"ServiceBindingLoader",id:"servicebindingloader",level:3},{value:"FileSystemServiceBindingLoader",id:"filesystemservicebindingloader",level:3},{value:"EnvironmentVariableServiceBindingLoader",id:"environmentvariableservicebindingloader",level:3},{value:"ServiceBindingMerger",id:"servicebindingmerger",level:3},{value:"SimpleCachingServiceBindingLoaderWrapper",id:"simplecachingservicebindingloaderwrapper",level:3},{value:"Usage",id:"usage",level:2},{value:"Configuration &amp; Customization",id:"configuration--customization",level:2},{value:"Service Binding Root Location",id:"service-binding-root-location",level:3}],m={toc:g};function p(e){var n=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"load-service-binding-information"},"Load Service Binding Information"),(0,r.kt)("p",null,"SAP Cloud SDK provides functionality to load service binding information when running the application in any Cloud Foundry and Kubernetes (in particular Gardener) environment.\nBelow you can find an architectural overview of the relevant classes."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Experimental API")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Please note that the API is currently in an experimental state."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ServiceBindingLoaders",src:i(60669).Z,title:"ServiceBindingLoaders",width:"962",height:"182"})),(0,r.kt)("p",null,"Let's look at the classes and their use cases individually."),(0,r.kt)("h3",{id:"servicebindingloader"},"ServiceBindingLoader"),(0,r.kt)("p",null,"This interface offers only one method to load the existing service bindings for the current application.\nThe abstract method named ",(0,r.kt)("inlineCode",{parentName:"p"},"load()")," will have different functionality based on the subclass.\nThe following four classes implement this interface."),(0,r.kt)("h3",{id:"filesystemservicebindingloader"},"FileSystemServiceBindingLoader"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"FileSystemServiceBindingLoader",src:i(94307).Z,title:"FileSystemServiceBindingLoader",width:"966",height:"387"})),(0,r.kt)("p",null,"This class is used for transforming file system structures (e.g. files and directories) into service bindings, starting at a specific root location based on the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"ParsingStrategy"),".\nIt has a ",(0,r.kt)("em",{parentName:"p"},"Functional Interface")," (",(0,r.kt)("inlineCode",{parentName:"p"},"ParsingStrategy"),"), exposing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Map<String, JsonArray> parse(Path)")," method.\n",(0,r.kt)("inlineCode",{parentName:"p"},"FileSystemServiceBindingLoader.ParsingStrategy")," represents an algorithm to transform a given root location (the directory in the file system) to service bindings.\n",(0,r.kt)("inlineCode",{parentName:"p"},"FileSystemServiceBindingLoader")," takes the root location path and a ",(0,r.kt)("inlineCode",{parentName:"p"},"ParsingStrategy"),".\nThe SAP Cloud SDK offers several implementations for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ParsingStrategy")," as shown in the figure."),(0,r.kt)("h3",{id:"environmentvariableservicebindingloader"},"EnvironmentVariableServiceBindingLoader"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"EnvironmentVariableServiceBindingLoader",src:i(88626).Z,title:"EnvironmentVariableServiceBindingLoader",width:"972",height:"265"})),(0,r.kt)("p",null,"This class is used for transforming environment variables into service bindings based on the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"ParsingStrategy"),".\nIt has a ",(0,r.kt)("em",{parentName:"p"},"Functional Interface")," (",(0,r.kt)("inlineCode",{parentName:"p"},"ParsingStrategy"),"), exposing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Map<String, JsonArray> parse(Function<String, String>)")," method.\n",(0,r.kt)("inlineCode",{parentName:"p"},"EnvironmentVariableServiceBindingLoader.ParsingStrategy")," represents an algorithm to transform environment variables that can be obtained from the given environment variable reader into service bindings.\n",(0,r.kt)("inlineCode",{parentName:"p"},"EnvironmentVariableServiceBindingLoader")," takes an environment variable reader and a ",(0,r.kt)("inlineCode",{parentName:"p"},"ParsingStrategy"),".\nThe SAP Cloud SDK offers an implementation for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ParsingStrategy")," as shown in the figure."),(0,r.kt)("h3",{id:"servicebindingmerger"},"ServiceBindingMerger"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ServiceBindingMerger",src:i(21587).Z,title:"ServiceBindingMerger",width:"962",height:"245"})),(0,r.kt)("p",null,"This class is used for merging the result of an arbitrary amount of given instances based on the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"MergingStrategy"),".\nIt has a ",(0,r.kt)("em",{parentName:"p"},"Functional Interface")," (",(0,r.kt)("inlineCode",{parentName:"p"},"MergingStrategy"),"), exposing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Map<String, JsonArray> merge(List<Map<String, JsonArray>> serviceBindingsCollection)")," method.\n",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceBindingMerger.MergingStrategy")," represents an algorithm to merge multiple service bindings.\n",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceBindingMerger")," is capable of merging the result of multiple loaders on a binding name (it assumes that each service binding has a property called name) level.\nWith that, it is able to combine multiple service bindings for the same service from different sources.\nSAP Cloud SDK offers an implementation for the ",(0,r.kt)("inlineCode",{parentName:"p"},"MergingStrategy")," as shown in the figure."),(0,r.kt)("h3",{id:"simplecachingservicebindingloaderwrapper"},"SimpleCachingServiceBindingLoaderWrapper"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SimpleCachingServiceBindingLoaderWrapper",src:i(89287).Z,title:"SimpleCachingServiceBindingLoaderWrapper",width:"963",height:"56"})),(0,r.kt)("p",null,"This class is used for wrapping another instance and caching the result for a certain amount of time.\nOnce the cache duration has been exceeded, the wrapped ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceBindingLoader")," is evaluated again.\nThe cache can also be reset in a manual fashion."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The SAP Cloud SDK features can be used in a Kubernetes environment without additional configuration (specifically ",(0,r.kt)("inlineCode",{parentName:"p"},"ScpCfCloudPlatform"),").\nYou can load the service binding information by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"Map<String, JsonArray> getVcapServices()")," method.\nThis method enables you to utilize the described architecture without additional configuration.\nBy default, the service bindings are loaded in the following order:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Service Operator (Kubernetes) Secret Root Key layout"),(0,r.kt)("li",{parentName:"ul"},"Service Operator (Kubernetes) Secret Key layout"),(0,r.kt)("li",{parentName:"ul"},"Service Operator (Kubernetes) Data (Default) layout"),(0,r.kt)("li",{parentName:"ul"},"VCAP_SERVICES environment variable")),(0,r.kt)("p",null,"This can be customized by providing a ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceBindingLoader")," with the method ",(0,r.kt)("inlineCode",{parentName:"p"},"setServiceBindingLoader(ServiceBindingLoader serviceBindingLoader)"),"."),(0,r.kt)("h2",{id:"configuration--customization"},"Configuration & Customization"),(0,r.kt)("p",null,"The service binding loading has been built with both easy configuration and customization in mind.\nTherefore, you can tweak the default behavior of the SAP Cloud SDK to fit your needs."),(0,r.kt)("h3",{id:"service-binding-root-location"},"Service Binding Root Location"),(0,r.kt)("p",null,"By default, the ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultFileSystemStructureParsingStrategy")," is used under the hood to read and parse file system based service bindings.\nIt assumes a file system structure like shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/etc/secrets/sapcp/\n                  <service-name#1>/\n                  |               <binding-name#1>/\n                  |               |               - <binding-property#1>\n                  |               |               - <binding-property#2>\n                  |               |               - ...\n                  |               |               - <binding-property#n>\n                  |               <binding-name#2>/\n                  |               |               - ...\n                 ...             ...\n                  |\n                  <service-name#2>/\n                  |\n                 ...\n                  |\n                  <service-name#n>/\n")),(0,r.kt)("p",null,"There is a root location (",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/secrets/sapcp")," by default), which contains an arbitrary amount of sub directories, which each represents a specific service type (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"XSUAA")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Destination"),").\nWithin each of these service specific directories, there are - again - an arbitrary amount of nested folders, each containing one concrete binding for the service type.\nWhile the general directory structure is what we recommend when ",(0,r.kt)("a",{parentName:"p",href:"../../environments/sap-btp-kubernetes-environment-with-sap-gardener#bind-sap-btp-services-to-the-application"},"mounting service bindings to the file system"),", the root location itself is more like a convention.\nTherefore, the SAP Cloud SDK allows for easy configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Path myLocation = Paths.get("my", "custom", "location");\nScpCfCloudPlatform.getInstanceOrThrow().setServiceBindingRootLocation(myLocation);\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Overwriting the default root path for service bindings will only take effect when done ",(0,r.kt)("strong",{parentName:"p"},"before")," accessing any of the service bindings.\nThis is, because the SAP Cloud SDK caches the service bindings indefinitely by default.\nIf you would like to change the service binding root path, we recommend doing it ",(0,r.kt)("strong",{parentName:"p"},"during application startup"),"."))))}p.isMDXComponent=!0},88626:function(e,n,i){n.Z=i.p+"assets/images/EVSBL-eb50bff53051b7e0bd94f13d13a3a629.png"},94307:function(e,n,i){n.Z=i.p+"assets/images/FSSBL-045aed5210064153307ea6ccdcff92d3.png"},21587:function(e,n,i){n.Z=i.p+"assets/images/SBM-455f80a16bd5619a3249077dc6282702.png"},89287:function(e,n){n.Z="data:image/png;base64,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"},60669:function(e,n,i){n.Z=i.p+"assets/images/ServiceBindingLoaders-20c32fbb041d3b3409940286d795ebd3.png"}}]);