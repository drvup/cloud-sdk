"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[3039],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33964:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={},c=void 0,u={unversionedId:"features/odata/common/etag",id:"features/odata/common/etag",title:"etag",description:"An ETag is a version identifier that is often used to implement an optimistic locking mechanism.",source:"@site/docs-js/features/odata/common/etag.mdx",sourceDirName:"features/odata/common",slug:"/features/odata/common/etag",permalink:"/cloud-sdk/docs/js/features/odata/common/etag",draft:!1,tags:[],version:"current",frontMatter:{}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"},"ETag")," is a version identifier that is often used to implement an optimistic locking mechanism.\nThe SAP Cloud SDK will try to read version identifiers from responses and set them when sending OData requests."),(0,i.kt)("p",null,"Consider the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"async function modifyBusinessPartner(id) {\n  const destination = { url: 'https://my.s4-system.com' };\n\n  const businessPartner = await BusinessPartner.requestBuilder()\n    .getByKey(id)\n    .execute(myDestination);\n\n  // do some modification\n  applyModification(businessPartner);\n\n  return BusinessPartner.requestBuilder()\n    .update(businessPartner)\n    .execute(destination);\n}\n")),(0,i.kt)("p",null,"When executing ",(0,i.kt)("inlineCode",{parentName:"p"},"getAll")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"getByKey")," requests, the SAP Cloud SDK will automatically attempt to extract the version identifier from the response and store it within the returned entity (",(0,i.kt)("inlineCode",{parentName:"p"},"partner")," in the example above).\nWhen executing ",(0,i.kt)("inlineCode",{parentName:"p"},"update")," requests, the version identifier will be sent in the ",(0,i.kt)("inlineCode",{parentName:"p"},"If-match")," request header."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If a service requires this header to be sent: Fetching the entity from the service first is essential to ensure that the ETag is present and up to date."),(0,i.kt)("p",{parentName:"admonition"},"By default, an ETag is sent if it's present on the entity being modified.\n",(0,i.kt)("inlineCode",{parentName:"p"},"ignoreVersionIdentifier()")," will instead always send a ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," which acts as a wildcard to match all ETags.")))}m.isMDXComponent=!0}}]);