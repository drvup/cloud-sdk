"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1026],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42792:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={title:"Shared ESLint configuration",sidebar_label:"Shared ESLint configuration",description:"How to use our recommended ESLint configuration",keywords:["sap","cloud","sdk","JavaScript","TypeScript","ESLint","configuration","lint","formatting","static","analysis"]},u=void 0,s={unversionedId:"features/eslint-configuration",id:"version-v1/features/eslint-configuration",title:"Shared ESLint configuration",description:"How to use our recommended ESLint configuration",source:"@site/docs-js_versioned_docs/version-v1/features/eslint-configuration.mdx",sourceDirName:"features",slug:"/features/eslint-configuration",permalink:"/cloud-sdk/docs/js/v1/features/eslint-configuration",draft:!1,tags:[],version:"v1",frontMatter:{title:"Shared ESLint configuration",sidebar_label:"Shared ESLint configuration",description:"How to use our recommended ESLint configuration",keywords:["sap","cloud","sdk","JavaScript","TypeScript","ESLint","configuration","lint","formatting","static","analysis"]},sidebar:"docsJsSidebar",previous:{title:"Logging",permalink:"/cloud-sdk/docs/js/v1/features/logging"},next:{title:"Migrate to Kubernetes",permalink:"/cloud-sdk/docs/js/v1/guides/migrate-sdk-application-from-btp-cf-to-kubernetes"}},l={},p=[],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The SAP Cloud SDK provides a configuration with our recommended ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," rules and plugin.\nIt extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint:recommended")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@typescript-eslint/recommended")," configurations.\nIt also uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-config-prettier")," to avoid any formatting conflicts when using the highly recommended ",(0,i.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),"."),(0,i.kt)("p",null,"Install the ",(0,i.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk/eslint-config")," package in your project.\nTo add the configuration please adjust your ESLint configuration (usually called ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc.js"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "extends": "@sap-cloud-sdk"\n}\n')),(0,i.kt)("p",null,"or if you want to combine this configuration with others:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "extends": ["example-config", "@sap-cloud-sdk"]\n}\n')),(0,i.kt)("p",null,"This configuration depends on plugins ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-plugin-import")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-plugin-unused-imports"),", which need to be installed in your project."),(0,i.kt)("p",null,"ESLint merges these shareable configurations with your configuration.\nAny rule configured in your ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," will overwrite the setting for this rule in the shareable configuration."))}f.isMDXComponent=!0}}]);