"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[477],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(r),f=a,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||s;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},65718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));r(74866),r(85162);const s={},o=void 0,l={unversionedId:"features/odata/v2/select",id:"version-v1/features/odata/v2/select",title:"select",description:"When reading entities, the API offers select( ... ) on the builders.",source:"@site/docs-js_versioned_docs/version-v1/features/odata/v2/select.mdx",sourceDirName:"features/odata/v2",slug:"/features/odata/v2/select",permalink:"/cloud-sdk/docs/js/v1/features/odata/v2/select",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js_versioned_docs/version-v1/features/odata/v2/select.mdx",tags:[],version:"v1",frontMatter:{}},u={},i=[],c={toc:i};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When reading entities, the API offers ",(0,a.kt)("inlineCode",{parentName:"p"},"select( ... )")," on the builders.\nThrough it, the query parameters ",(0,a.kt)("inlineCode",{parentName:"p"},"$select")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"$expand")," are set.\nIt restricts the response to the given selection of properties in the request."),(0,a.kt)("p",null,"The properties that can be selected or expanded are represented via static fields on the entity class.\nSo there will be a field for each property.\nE.g. the business partner entity has ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartner.FIRST_NAME")," as a representation of a property and ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS")," as a representation of a navigation property."),(0,a.kt)("p",null,"A navigation property means that there is a relation between a business partner and their addresses.\nIn this case, one business partner can have multiple addresses.\nIn SAP S/4HANA, navigation properties typically start with ",(0,a.kt)("inlineCode",{parentName:"p"},"TO_"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .getAll()\n  .select(\n    BusinessPartner.FIRST_NAME,\n    BusinessPartner.LAST_NAME,\n    BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS\n  )\n  .execute(destination);\n")),(0,a.kt)("p",null,"The above translates to the following query parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"$select=FirstName,LastName,to_BusinessPartnerAddress/*&$expand=to_BusinessPartnerAddress\n")),(0,a.kt)("p",null,"One can also select properties of the expanded navigation property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .getAll()\n  .select(\n    BusinessPartner.FIRST_NAME,\n    BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS.select(\n      BusinessPartnerAddress.ADDRESS_ID,\n      BusinessPartnerAddress.CITY_CODE\n    )\n  )\n  .execute(destination);\n")),(0,a.kt)("p",null,"The above translates to the following query parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"$select=FirstName,to_BusinessPartnerAddress/AddressID,to_BusinessPartnerAddress/CityCode&$expand=to_BusinessPartnerAddress\n")))}d.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(87462),a=r(67294),s=r(86010),o=r(12466),l=r(76775),u=r(91980),i=r(67392),c=r(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function v(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,i]=m({queryString:r,groupId:n}),[d,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),b=(()=>{const e=u??d;return f({value:e,tabValues:s})?e:null})();(0,a.useEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),v(e)}),[i,v,s]),tabValues:s}}var b=r(72389);const h="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:t,block:r,selectedValue:l,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==l&&(d(t),u(n))},f=e=>{var t;let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:p},o,{className:(0,s.Z)("tabs__item",g,null==o?void 0:o.className,{"tabs__item--active":l===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;if(t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function E(e){const t=v(e);return a.createElement("div",{className:(0,s.Z)("tabs-container",h)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return a.createElement(E,(0,n.Z)({key:String(t)},e))}}}]);