"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2949],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},13908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));r(74866),r(85162);const l={id:"release-policy",title:"Release Policy",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},o=void 0,i={unversionedId:"release-policy",id:"release-policy",title:"Release Policy",description:"The SAP Cloud SDK follows semantic versioning.",source:"@site/docs-js/release-policy.mdx",sourceDirName:".",slug:"/release-policy",permalink:"/cloud-sdk/docs/js/v3/release-policy",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/release-policy.mdx",tags:[],version:"current",frontMatter:{id:"release-policy",title:"Release Policy",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},sidebar:"docsJsSidebar",previous:{title:"Multi-Tenant Application",permalink:"/cloud-sdk/docs/js/v3/tutorials/multi-tenant-application"},next:{title:"SAP Cloud SDK & CAP",permalink:"/cloud-sdk/docs/js/v3/video/calm"}},s={},u=[{value:"Planned Major Release Schedule",id:"planned-major-release-schedule",level:2},{value:"Upgrading to a New Major Version",id:"upgrading-to-a-new-major-version",level:3},{value:"Fixes and Maintenance",id:"fixes-and-maintenance",level:3},{value:"Minor Release Policy",id:"minor-release-policy",level:2},{value:"Upgrading to a New Minor Version",id:"upgrading-to-a-new-minor-version",level:3}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The SAP Cloud SDK follows ",(0,n.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning"),"."),(0,n.kt)("h2",{id:"planned-major-release-schedule"},"Planned Major Release Schedule"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Release Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.x"),(0,n.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"March 2019")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2.x"),(0,n.kt)("td",{parentName:"tr",align:null},"Released GA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"February 2022")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3.x"),(0,n.kt)("td",{parentName:"tr",align:null},"Planned (",(0,n.kt)("a",{parentName:"td",href:"https://blogs.sap.com/2022/12/12/the-advent-of-sap-cloud-sdk-for-javascript-version-3/"},"Announcement"),")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Q1/Q2 2023")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"4.x"),(0,n.kt)("td",{parentName:"tr",align:null},"Planned"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Q1/Q2 2024")))),(0,n.kt)("h3",{id:"upgrading-to-a-new-major-version"},"Upgrading to a New Major Version"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We provide a step-by-step upgrade guide for each major version."),(0,n.kt)("li",{parentName:"ul"},"Following the upgrade steps should take less than a day of development effort regardless of the project size.")),(0,n.kt)("h3",{id:"fixes-and-maintenance"},"Fixes and Maintenance"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We provide new features and fixes only for the ",(0,n.kt)("strong",{parentName:"li"},"latest major release")," of the SAP Cloud SDK for JavaScript.")),(0,n.kt)("h2",{id:"minor-release-policy"},"Minor Release Policy"),(0,n.kt)("p",null,"We release a new ",(0,n.kt)("strong",{parentName:"p"},"minor version")," every 2 weeks, assuming new functionality or fixes are available."),(0,n.kt)("h3",{id:"upgrading-to-a-new-minor-version"},"Upgrading to a New Minor Version"),(0,n.kt)("p",null,"Upgrading to a new ",(0,n.kt)("strong",{parentName:"p"},"minor release version")," should not involve any effort because we do not introduce breaking changes."),(0,n.kt)("admonition",{title:"TypeScript version bumps",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"We regularly upgrade TypeScript to the latest stable version.\nIn rare cases this can lead to compilation errors for projects using TypeScript.\nThe solution is usually upgrading TypeScript to the latest stable version.")))}d.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>N});var a=r(87462),n=r(67294),l=r(86010),o=r(12466),i=r(76775),s=r(91980),u=r(67392),c=r(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:r,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),v=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,n.useEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var v=r(72389);const b="tabList__CuJ",y="tabItem_LNqP";function h(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==i&&(d(t),s(a))},m=e=>{var t;let r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,l.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":i===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:a}=e;if(t){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",b)},n.createElement(h,(0,a.Z)({},e,t)),n.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,v.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}}}]);