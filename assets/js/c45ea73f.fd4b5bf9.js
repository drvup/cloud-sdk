"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8102],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(87462),a=n(67294),o=n(72389),u=n(79443);var l=function(){var e=(0,a.useContext)(u.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(63616),s=n(86010),c="tabItem_1uMI";function p(e){var t,n,o,u=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:b.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=b.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=b[0])?void 0:o.props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),N=k.tabGroupChoices,w=k.setTabGroupChoices,T=(0,a.useState)(g),x=T[0],j=T[1],O=[],P=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=N[f];null!=E&&E!==x&&h.some((function(e){return e.value===E}))&&j(E)}var A=function(e){var t=e.currentTarget,n=O.indexOf(t),r=h[n].value;r!==x&&(P(t),j(r),null!=f&&w(f,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},v)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:A,onClick:A},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},92501:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=n(26396),l=n(58215),i=["components"],s={},c=void 0,p={unversionedId:"js/features/odata/common/operations/count",id:"js/features/odata/common/operations/count",title:"count",description:"The method count() allows you to get the number of elements in a collection.",source:"@site/docs/js/features/odata/common/operations/count.mdx",sourceDirName:"js/features/odata/common/operations",slug:"/js/features/odata/common/operations/count",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/count",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/operations/count.mdx",tags:[],version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1644577690,formattedLastUpdatedAt:"2/11/2022",frontMatter:{}},d=[],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The method ",(0,o.kt)("inlineCode",{parentName:"p"},"count()")," allows you to get the number of elements in a collection.\nIt is only available for ",(0,o.kt)("inlineCode",{parentName:"p"},"getAll()")," requests and is added before the request execution:"),(0,o.kt)(u.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi.requestBuilder().getAll().count();\n"))),(0,o.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder().getAll().count();\n")))),(0,o.kt)("p",null,"The return type of count requests is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise<number>"),".\nYou can combine the ",(0,o.kt)("inlineCode",{parentName:"p"},"count()")," with filter conditions.\nTo get the number of business partners with first name ",(0,o.kt)("inlineCode",{parentName:"p"},"John")," execute the following request:"),(0,o.kt)(u.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 2.x",value:"major"},{label:"SDK 1.x",value:"deprecated"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"major",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\nbusinessPartnerApi\n  .requestBuilder()\n  .filter(businessPartnerApi.schema.FIRST_NAME.equals('John'))\n  .count()\n  .getAll();\n"))),(0,o.kt)(l.Z,{value:"deprecated",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .filter(BusinessPartner.FIRST_NAME.equals('John'))\n  .count()\n  .getAll();\n")))),(0,o.kt)("p",null,"As defined in the OData spec ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," is not affected by ",(0,o.kt)("inlineCode",{parentName:"p"},"top"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"skip"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"orderBy"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,o.kt)("inlineCode",{parentName:"h5"},"top()")," and ",(0,o.kt)("inlineCode",{parentName:"h5"},"skip()")," are ignored for count")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you include these methods in a count request they will be ignored by the SAP Cloud SDK.\nThese three requests will all return the same value."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre"},"BusinessPartner.requestBuilder().getAll().top(5).count();\nBusinessPartner.requestBuilder().getAll().skip(5).count();\nBusinessPartner.requestBuilder().getAll().count();\n")))))}f.isMDXComponent=!0}}]);