"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4685],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20397:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},p=void 0,u={unversionedId:"js/features/odata/v4/filter-parent-child",id:"js/features/odata/v4/filter-parent-child",title:"filter-parent-child",description:"Depending on the context of the filter it will either filter the parent or the children.",source:"@site/docs/js/features/odata/v4/filter-parent-child.mdx",sourceDirName:"js/features/odata/v4",slug:"/js/features/odata/v4/filter-parent-child",permalink:"/cloud-sdk/docs/js/features/odata/v4/filter-parent-child",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/v4/filter-parent-child.mdx",tags:[],version:"current",lastUpdatedBy:"Junjie Tang",lastUpdatedAt:1641547666,formattedLastUpdatedAt:"1/7/2022",frontMatter:{}},c=[],s={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Depending on the context of the filter it will either filter the parent or the children.\nIn our example, we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"PERSON")," related to zero to N ",(0,o.kt)("inlineCode",{parentName:"p"},"FRIENDS")," which are both of type people."),(0,o.kt)("p",null,"If you want to get all people with first name ",(0,o.kt)("inlineCode",{parentName:"p"},"John")," the query is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"People.requestBuilder().getAll().filter(People.FIRST_NAME.equals('John'));\n")),(0,o.kt)("p",null,"If you want to get all people who have at least one friend with first name ",(0,o.kt)("inlineCode",{parentName:"p"},"John")," the query is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"People.requestBuilder()\n  .getAll()\n  .filter(People.FRIENDS.filter(any(People.FIRST_NAME.equals('John'))));\n")),(0,o.kt)("p",null,"The lambda ",(0,o.kt)("a",{parentName:"p",href:"pathname:///api/1.28.1/modules/sap_cloud_sdk_core#all"},"all")," would enforce that all friends must have the first name ",(0,o.kt)("inlineCode",{parentName:"p"},"John"),".\nThe two queries above filter the parent entity person."),(0,o.kt)("p",null,"In case you want to get all people but reduce the friends in the response, the filter has to be inside the expand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"People.requestBuilder()\n  .getAll()\n  .expand(People.FRIENDS.filter(People.FIRST_NAME.equals('John')));\n")),(0,o.kt)("p",null,"This will return all people but only the friends with the first name ",(0,o.kt)("inlineCode",{parentName:"p"},"John")," will be included in the response."))}d.isMDXComponent=!0}}]);