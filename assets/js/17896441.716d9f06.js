"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7918],{39649:function(e,t,a){a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(63366),l=a(87462),i=a(67294),r=a(86010),s=a(95999),o=a(63616),c="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",m=["id"],u=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,v=(0,n.Z)(e,m),h=(0,o.LU)().navbar.hideOnScroll;return u?i.createElement(t,(0,l.Z)({},v,{className:(0,r.Z)("anchor",(a={},a[d]=h,a[c]=!h,a)),id:u}),v.children,i.createElement("a",{className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,v)});var t}},74853:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(87462),l=a(63366),i=a(67294),r=a(86010),s=a(63616),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function c(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?i.createElement("ul",{className:l?void 0:a},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(c,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function d(e){var t=e.toc,a=e.className,r=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,h=e.minHeadingLevel,g=e.maxHeadingLevel,p=(0,l.Z)(e,o),E=(0,s.LU)(),L=null!=h?h:E.tableOfContents.minHeadingLevel,f=null!=g?g:E.tableOfContents.maxHeadingLevel,b=(0,s.DA)({toc:t,minHeadingLevel:L,maxHeadingLevel:f}),N=(0,i.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:L,maxHeadingLevel:f}}),[m,v,L,f]);return(0,s.Si)(N),i.createElement(c,(0,n.Z)({toc:b,className:r,linkClassName:m},p))}var m="tableOfContents_35-E",u=["className"];var v=function(e){var t=e.className,a=(0,l.Z)(e,u);return i.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar",t)},i.createElement(d,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},88246:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});var n=a(67294),l=a(95999),i=a(86010),r=a(39960);var s=function(e){var t=e.navLink,a=e.next;return n.createElement(r.Z,{className:(0,i.Z)("pagination-nav__link"),to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},a?n.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"):n.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},t.title))};var o=function(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(s,{navLink:t})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(s,{navLink:a,next:!0})))},c=a(52263),d=a(80907),m=a(63616);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(l.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(l.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,i=e.onClick;return n.createElement(l.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.Z,{to:a,onClick:i},n.createElement(l.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){var t,a=e.className,l=e.versionMetadata,r=(0,c.Z)().siteConfig.title,s=(0,d.gA)({failfast:!0}).pluginId,o=(0,m.J)(s).savePreferredVersionName,u=(0,d.Jo)(s),g=u.latestDocSuggestion,p=u.latestVersionSuggestion,E=null!=g?g:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,i.Z)(a,m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:r,versionMetadata:l})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:p.label,to:E.path,onClick:function(){return o(p.name)}})))}function p(e){var t=e.className,a=(0,m.E6)();return a.banner?n.createElement(g,{className:t,versionMetadata:a}):null}var E=a(41217);function L(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(l.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){var t=e.lastUpdatedBy;return n.createElement(l.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function b(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,i=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(l.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(L,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:i?n.createElement(f,{lastUpdatedBy:i}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(74853),k=a(87462),C=a(63366),_="iconEdit_2_ui",Z=["className"];var w=function(e){var t=e.className,a=(0,C.Z)(e,Z);return n.createElement("svg",(0,k.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(_,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function U(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(w,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var T=a(39649),x="docItemContainer_1EXp",y="lastUpdated_1szQ",A="docsRatingContainerTop_UKLZ",M="docsRatingContainerBottom_3H3P",H="docItemCol_2rXS",S=(a(10412),a(61871)),B=function(){var e="undefined"==typeof window?"":window.location.pathname,t=(0,n.useContext)(S.Z),a=t.ratedSites,l=t.addRatedSite,i=a.includes(e),r=function(t){swa&&swa.hasOwnProperty("trackCustomEvent")&&swa.trackCustomEvent("collectFeedback",t),l(e)};return n.createElement("div",{className:"docsRating"},i?"Thanks for giving feedback!":n.createElement(n.Fragment,null,"Rate this page",n.createElement("svg",{className:"i_negative",alt:"Dislike",onClick:function(){return r(0)},xmlns:"http://www.w3.org/2000/svg",width:"32px",height:"32px",fill:"currentColor",viewBox:"0 0 32 32"},n.createElement("path",{d:"M 10.15625 6 C 8.746094 6 7.515625 6.996094 7.21875 8.375 L 5.0625 18.375 C 4.667969 20.222656 6.113281 22 8 22 L 13.75 22 L 13.5625 22.75 C 13.359375 22.90625 13.230469 22.972656 12.9375 23.375 C 12.46875 24.015625 12 25.007813 12 26.34375 C 12 27.769531 13.289063 29 14.90625 29 L 15.3125 29 L 15.625 28.71875 L 22.40625 22 L 27 22 L 27 6 Z M 10.15625 8 L 21 8 L 21 20.59375 L 14.59375 26.90625 C 14.171875 26.824219 14 26.652344 14 26.34375 C 14 25.441406 14.273438 24.882813 14.53125 24.53125 C 14.789063 24.179688 14.96875 24.09375 14.96875 24.09375 L 15.3125 23.90625 L 15.4375 23.5 L 16.03125 21.25 L 16.34375 20 L 8 20 C 7.339844 20 6.894531 19.425781 7.03125 18.78125 L 9.15625 8.78125 C 9.257813 8.3125 9.679688 8 10.15625 8 Z M 23 8 L 25 8 L 25 20 L 23 20 Z"})),n.createElement("svg",{className:"i_positive",alt:"Like",onClick:function(){return r(1)},xmlns:"http://www.w3.org/2000/svg",width:"32px",height:"32px",fill:"currentColor",viewBox:"0 0 32 32"},n.createElement("path",{d:"M 16.6875 3 L 16.375 3.28125 L 9.59375 10 L 5 10 L 5 26 L 21.84375 26 C 23.253906 26 24.484375 25.003906 24.78125 23.625 L 26.9375 13.625 C 27.332031 11.777344 25.886719 10 24 10 L 18.25 10 L 18.4375 9.25 C 18.640625 9.09375 18.769531 9.027344 19.0625 8.625 C 19.53125 7.984375 20 6.992188 20 5.65625 C 20 4.230469 18.710938 3 17.09375 3 Z M 17.40625 5.09375 C 17.828125 5.175781 18 5.347656 18 5.65625 C 18 6.558594 17.726563 7.117188 17.46875 7.46875 C 17.210938 7.820313 17.03125 7.90625 17.03125 7.90625 L 16.6875 8.09375 L 16.5625 8.5 L 15.96875 10.75 L 15.65625 12 L 24 12 C 24.660156 12 25.105469 12.574219 24.96875 13.21875 L 22.84375 23.21875 C 22.742188 23.6875 22.320313 24 21.84375 24 L 11 24 L 11 11.40625 Z M 7 12 L 9 12 L 9 24 L 7 24 Z"}))))};var D=function(e){var t,a=e.content,l=e.versionMetadata,r=a.metadata,s=a.frontMatter,c=s.image,m=s.keywords,u=s.hide_title,v=s.hide_table_of_contents,h=r.description,g=r.title,L=r.editUrl,f=r.lastUpdatedAt,k=r.formattedLastUpdatedAt,C=r.lastUpdatedBy,_=(0,d.gA)({failfast:!0}).pluginId,Z=(0,d.gB)(_).length>1,w=!u&&void 0===a.contentTitle;return n.createElement(n.Fragment,null,n.createElement(E.Z,{title:g,description:h,keywords:m,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,i.Z)("col",(t={},t[H]=!v,t))},n.createElement(p,{versionMetadata:l}),n.createElement("div",{className:x},n.createElement("article",null,Z&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",l.label),n.createElement("div",{className:"markdown"},w&&n.createElement("div",null,n.createElement("div",{className:A},n.createElement(B,null)),n.createElement(T.N,null,g)),n.createElement(a,null)),n.createElement("div",{className:"margin-vert--xl"},n.createElement("div",{className:M},n.createElement(B,null))),(L||f||C)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},L&&n.createElement(U,{editUrl:L})),n.createElement("div",{className:(0,i.Z)("col",y)},(f||C)&&n.createElement(b,{lastUpdatedAt:f,formattedLastUpdatedAt:k,lastUpdatedBy:C})))),n.createElement(o,{metadata:r}))),!v&&a.toc&&n.createElement("div",{className:"col col--3"},n.createElement(N.Z,{toc:a.toc}))))}}}]);