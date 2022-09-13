"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1509],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},76185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),o=a(85162);const i={id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for Java",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},s=void 0,u={unversionedId:"release-policy",id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for Java",description:"Planned Major Releases",source:"@site/docs-java/release-policy.mdx",sourceDirName:".",slug:"/release-policy",permalink:"/cloud-sdk/docs/java/release-policy",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-java/release-policy.mdx",tags:[],version:"current",frontMatter:{id:"release-policy",title:"Minor and Major Release Policy for the SAP Cloud SDK for Java",sidebar_label:"Release Policy",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","upgrade","strategy","major","release","support"]},sidebar:"docsJavaSidebar",previous:{title:"Troubleshooting",permalink:"/cloud-sdk/docs/java/sdk-java-troubleshooting-frequent-problems"},next:{title:"Release Notes",permalink:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"}},d={},p=[{value:"Planned Major Releases",id:"planned-major-releases",level:2},{value:"Minor and Major Release Policy",id:"minor-and-major-release-policy",level:2},{value:"Minor release schedule",id:"minor-release-schedule",level:3},{value:"Major release schedule",id:"major-release-schedule",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Maintenance and Support",id:"maintenance-and-support",level:3},{value:"Support and feedback",id:"support-and-feedback",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"planned-major-releases"},"Planned Major Releases"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Release Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Planned scope"),(0,r.kt)("th",{parentName:"tr",align:null},"Upgrade guide"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Deprecated"),(0,r.kt)("td",{parentName:"tr",align:"left"},"May 2017"),(0,r.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"3.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Released GA"),(0,r.kt)("td",{parentName:"tr",align:"left"},"August 2019"),(0,r.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:"left"},"July 2022"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5.x"),(0,r.kt)("td",{parentName:"tr",align:null},"Planned"),(0,r.kt)("td",{parentName:"tr",align:"left"},"January 2023"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TBD"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD")))),(0,r.kt)("h2",{id:"minor-and-major-release-policy"},"Minor and Major Release Policy"),(0,r.kt)("p",null,"We follow ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning")," for our releases."),(0,r.kt)("h3",{id:"minor-release-schedule"},"Minor release schedule"),(0,r.kt)("p",null,"Our regular ",(0,r.kt)("strong",{parentName:"p"},"minor version")," release happens every ",(0,r.kt)("strong",{parentName:"p"},"two weeks"),".\nIt includes new functionality, fixes, and maintenance updates that we communicate in the ",(0,r.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"},"release notes"),"."),(0,r.kt)("p",null,"We sometimes change our release frequency to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provide a patch version to the latest minor release when a critical bug fix is necessary."),(0,r.kt)("li",{parentName:"ul"},"Accommodate a longer development cycle.\nWe can extend an interval between ",(0,r.kt)("strong",{parentName:"li"},"minor version")," releases.")),(0,r.kt)("admonition",{title:"Upgrading between minor releases",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Usually, an upgrade between minor releases does not involve any effort.\nAll the changes are incremental and backward compatible.\nWe do not remove any deprecated code before the next major release.")),(0,r.kt)("h3",{id:"major-release-schedule"},"Major release schedule"),(0,r.kt)("p",null,"We intend to release a new ",(0,r.kt)("strong",{parentName:"p"},"major version")," every ",(0,r.kt)("strong",{parentName:"p"},"six months")," to introduce significant feature upgrades, refactor existing features, and clean up deprecated code."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Major version")," release interval is indicative and may change."),(0,r.kt)("li",{parentName:"ul"},"We will announce planned date and scope of the next ",(0,r.kt)("strong",{parentName:"li"},"major version")," release in this ",(0,r.kt)("a",{parentName:"li",href:"#planned-major-release-schedule"},"document")," and ",(0,r.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/java/release-notes-sap-cloud-sdk-for-java"},"release notes")," at least 3 months before the planned release date.")),(0,r.kt)("admonition",{title:"Upgrading between major versions",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Major releases include incompatible API changes.\nAn upgrade will usually involve a certain effort to make your code benefit from new APIs.\nWe intend to minimize this effort between adjacent major versions."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"We provide a step-by-step upgrade guide for each major version."),(0,r.kt)("li",{parentName:"ul"},"Following the upgrade steps should take less than a day of development effort regardless of the project size."))),(0,r.kt)("h3",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"The documentation is always up to date with the ",(0,r.kt)("strong",{parentName:"p"},"latest major release"),".\nWe provide documentation for the two most recent major versions at the same time.\nWe will use tabs to demonstrate a difference between them where required.\nSee example below"),(0,r.kt)(l.Z,{groupId:"version",defaultValue:"major",values:[{label:"SDK 4.x",value:"major"},{label:"SDK 3.x",value:"deprecated"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"major",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nMajor version documentation\n\n"))),(0,r.kt)(o.Z,{value:"deprecated",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nDeprecated version documentation\n\n")))),(0,r.kt)("p",null,"With every new major version release, the oldest documented version is removed from the documentation portal."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We will always provide a branch with the latest snapshot of the documentation before the major version release.\nYou can use that branch to host documentation for the earlier version locally.")),(0,r.kt)("h3",{id:"maintenance-and-support"},"Maintenance and Support"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We provide new features and fixes ",(0,r.kt)("strong",{parentName:"li"},"only")," for the ",(0,r.kt)("strong",{parentName:"li"},"latest major release")," of the SAP Cloud SDK for Java."),(0,r.kt)("li",{parentName:"ul"},"We continue to ",(0,r.kt)("a",{parentName:"li",href:"/docs/overview/get-support"},"support")," customers using any version of the SAP Cloud SDK for Java.\nIn case the identified solution resides in upgrading to the newer version of the SAP Cloud SDK - it will be the default recommended solution.")),(0,r.kt)("admonition",{title:"Upgrade early",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We recommend upgrading to the latest major version immediately or at least not later than within 3 months after its release.\nThis guarantees:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"easy upgrade path"),(0,r.kt)("li",{parentName:"ul"},"compatibility to latest features of SAP Business Technology Platform at all times"),(0,r.kt)("li",{parentName:"ul"},"protection of your development process from disruptions in the future.\nUpgrading gets more complex if you have to migrate between more than one major version."))),(0,r.kt)("h2",{id:"support-and-feedback"},"Support and feedback"),(0,r.kt)("p",null,"Let us know if you have any questions about our release policy.\nWe usually respond within one day.\nCheck our ",(0,r.kt)("a",{parentName:"p",href:"/docs/overview/get-support"},"support channels")," and choose the one working best for you."))}m.isMDXComponent=!0},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),i=a(67392),s=a(7094),u=a(12466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,a;const{lazy:o,block:c,defaultValue:m,values:f,groupId:v,className:k}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=f?f:h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const b=null===m?m:null!=(t=null!=m?m:null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)?t:h[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:j}=(0,s.U)(),[w,P]=(0,r.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=v){const e=N[v];null!=e&&e!==w&&g.some((t=>t.value===e))&&P(e)}const S=e=>{const t=e.currentTarget,a=x.indexOf(t),n=g[a].value;n!==w&&(T(t),P(n),null!=v&&j(v,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=x.indexOf(e.currentTarget)+1;a=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;a=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},k)},g.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:O,onFocus:S,onClick:S},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}}}]);