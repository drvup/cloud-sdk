"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[5309],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9346:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},u=void 0,c={unversionedId:"features/odata/common/operations/ignore-or-overwrite-version",id:"version-v1/features/odata/common/operations/ignore-or-overwrite-version",title:"ignore-or-overwrite-version",description:"Entities can only be updated or deleted if ETags match.",source:"@site/docs-js_versioned_docs/version-v1/features/odata/common/operations/ignore-or-overwrite-version.mdx",sourceDirName:"features/odata/common/operations",slug:"/features/odata/common/operations/ignore-or-overwrite-version",permalink:"/cloud-sdk/docs/js/v1/features/odata/common/operations/ignore-or-overwrite-version",draft:!1,tags:[],version:"v1",frontMatter:{}},p={},l=[],f={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Entities can only be updated or deleted if ",(0,a.kt)("a",{parentName:"p",href:"#handling-of-etags"},"ETags")," match.\nIf you want to force either an update or the deletion of the entity regardless of the ETag, configure the request to ignore version identifiers with ",(0,a.kt)("inlineCode",{parentName:"p"},"ignoreVersionIdentifier"),"."),(0,a.kt)("p",null,"Below is an example with an update:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .update(businessPartner)\n  .ignoreVersionIdentifier();\n")),(0,a.kt)("p",null,"You can also overwrite ETags using ",(0,a.kt)("inlineCode",{parentName:"p"},"setVersionIdentifier"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .update(businessPartner)\n  .setVersionIdentifier('etag');\n")),(0,a.kt)("p",null,"In the example above, the ETag ",(0,a.kt)("inlineCode",{parentName:"p"},"etag")," is used instead of the original one."))}d.isMDXComponent=!0}}]);