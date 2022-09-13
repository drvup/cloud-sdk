"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8425],{3905:(e,s,n)=>{n.d(s,{Zo:()=>l,kt:()=>h});var r=n(67294);function t(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function a(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?a(Object(n),!0).forEach((function(s){t(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function i(e,s){if(null==e)return{};var n,r,t=function(e,s){if(null==e)return{};var n,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],s.indexOf(n)>=0||(t[n]=e[n]);return t}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var o=r.createContext({}),u=function(e){var s=r.useContext(o),n=s;return e&&(n="function"==typeof e?e(s):d(d({},s),e)),n},l=function(e){var s=u(e.components);return r.createElement(o.Provider,{value:s},e.children)},p={inlineCode:"code",wrapper:function(e){var s=e.children;return r.createElement(r.Fragment,{},s)}},c=r.forwardRef((function(e,s){var n=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(n),h=t,m=c["".concat(o,".").concat(h)]||c[h]||p[h]||a;return n?r.createElement(m,d(d({ref:s},l),{},{components:n})):r.createElement(m,d({ref:s},l))}));function h(e,s){var n=arguments,t=s&&s.mdxType;if("string"==typeof e||t){var a=n.length,d=new Array(a);d[0]=c;var i={};for(var o in s)hasOwnProperty.call(s,o)&&(i[o]=s[o]);i.originalType=e,i.mdxType="string"==typeof e?e:t,d[1]=i;for(var u=2;u<a;u++)d[u]=n[u];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4199:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(87462),t=(n(67294),n(3905)),a=n(65488),d=n(85162);const i={id:"change-addresses",title:"Building an Address Manager Application with the SAP Cloud SDK - Part 2",sidebar_label:"Change Address Data",description:"Build an Address Manager Application with the SAP Cloud SDK - Part 2",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial","address manager"]},o=void 0,u={unversionedId:"tutorials/address-manager/change-addresses",id:"tutorials/address-manager/change-addresses",title:"Building an Address Manager Application with the SAP Cloud SDK - Part 2",description:"Build an Address Manager Application with the SAP Cloud SDK - Part 2",source:"@site/docs-js/tutorials/address-manager/change-addresses.mdx",sourceDirName:"tutorials/address-manager",slug:"/tutorials/address-manager/change-addresses",permalink:"/cloud-sdk/docs/js/tutorials/address-manager/change-addresses",draft:!1,editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs-js/tutorials/address-manager/change-addresses.mdx",tags:[],version:"current",frontMatter:{id:"change-addresses",title:"Building an Address Manager Application with the SAP Cloud SDK - Part 2",sidebar_label:"Change Address Data",description:"Build an Address Manager Application with the SAP Cloud SDK - Part 2",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial","address manager"]},sidebar:"docsJsSidebar",previous:{title:"Read Address Data",permalink:"/cloud-sdk/docs/js/tutorials/address-manager/read-addresses"},next:{title:"Currency Conversion",permalink:"/cloud-sdk/docs/js/extensions/currency-conversion"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Create an Address",id:"create-an-address",level:2},{value:"Test Create Service",id:"test-create-service",level:3},{value:"Update Service",id:"update-service",level:2},{value:"Test Update Service",id:"test-update-service",level:3},{value:"Delete Address",id:"delete-address",level:2},{value:"Test Delete Service",id:"test-delete-service",level:3},{value:"Final Code Review",id:"final-code-review",level:2}],c={toc:p};function h(e){let{components:s,...i}=e;return(0,t.kt)("wrapper",(0,r.Z)({},c,i,{components:s,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"overview"},"Overview"),(0,t.kt)("p",null,"In the ",(0,t.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/tutorials/address-manager/read-addresses"},"first part")," of the tutorial, you implemented the read operation on business partners and the related address information.\nIn this part you will learn:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"How to create a new address."),(0,t.kt)("li",{parentName:"ul"},"How to update an existing address."),(0,t.kt)("li",{parentName:"ul"},"How to delete an existing address.")),(0,t.kt)("h2",{id:"create-an-address"},"Create an Address"),(0,t.kt)("p",null,"After reading the data in the first part of the tutorial, it is now time to change the data.\nYou will use the ",(0,t.kt)("inlineCode",{parentName:"p"},"businessPartnerAddressApi")," to adjust the addresses.\nYou start with the creation of new addresses.\nAdd a service implementation in the ",(0,t.kt)("inlineCode",{parentName:"p"},"business-partner.service.ts"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},'  createAddress(\n    address: Record<string, any>,\n    businessPartnerId: string\n  ): Promise<BusinessPartnerAddress> {\n    const businessPartnerAddress = businessPartnerAddressApi\n      .entityBuilder()\n      .fromJson({ businessPartner: businessPartnerId, ...address });\n    return businessPartnerAddressApi\n      .requestBuilder()\n      .create(businessPartnerAddress)\n      .execute({ url: "http://localhost:3000" });\n  }\n')),(0,t.kt)("p",null,"You use the ",(0,t.kt)("inlineCode",{parentName:"p"},"entityBuilder")," to create a new address object from the input.\nThe business partner ID is added to the address object.\nThis is mandatory to define for which business partner the address is created.\nThen you use the ",(0,t.kt)("inlineCode",{parentName:"p"},"requestBuilder")," to build a ",(0,t.kt)("inlineCode",{parentName:"p"},"create")," request and ",(0,t.kt)("inlineCode",{parentName:"p"},"execute")," it against the mock server."),(0,t.kt)("p",null,"You need to adjust the ",(0,t.kt)("inlineCode",{parentName:"p"},"business-partner.controller.ts")," to expose the new service.\nSince you want to create data, a POST request is needed:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},'  @Post("/:businessPartnerId/address")\n  @HttpCode(201)\n  createAddress(\n    @Body() requestBody: Record<string, any>,\n    @Param("businessPartnerId") businessPartnerId: string\n  ): Promise<BusinessPartnerAddress> {\n    return this.businessPartnerService.createAddress(requestBody, businessPartnerId);\n  }\n')),(0,t.kt)("p",null,"The ID of the business partner is taken from the URL of the request and the new address from the body."),(0,t.kt)("h3",{id:"test-create-service"},"Test Create Service"),(0,t.kt)("p",null,"To test the new service, you need an HTTP client like ",(0,t.kt)("a",{parentName:"p",href:"https://learning.postman.com/docs/getting-started/installation-and-updates/"},"postman")," to create a POST request.\nCreate a new request with the following parameters:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'POST http://localhost:8080/business-partners/1003764/address\nBODY\n{\n    "postalCode": "14469",\n    "cityName": "Potsdam",\n    "streetName": "Konrad-Zuse-Ring",\n    "houseNumber": "10"\n}\n')),(0,t.kt)("p",null,"You find the ID of a business partner via the endpoint ",(0,t.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/business-partners"),".\nThe request should return ",(0,t.kt)("inlineCode",{parentName:"p"},"201")," as a ",(0,t.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses"},"status code"),"."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Create an address with postman.",src:n(26042).Z,width:"2534",height:"760"})),(0,t.kt)("p",null,"If you execute ",(0,t.kt)("inlineCode",{parentName:"p"},"GET http://localhost:8080/business-partners/1003764")," afterward, you should see the additional address for the business partner."),(0,t.kt)("h2",{id:"update-service"},"Update Service"),(0,t.kt)("p",null,"As a next step, we would like to update existing addresses.\nThis is done using the ",(0,t.kt)("inlineCode",{parentName:"p"},"update")," request builder.\nAdd the following code in the ",(0,t.kt)("inlineCode",{parentName:"p"},"business-partner.service.ts"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},'  updateAddress(\n    address: Record<string, any>,\n    businessPartnerId: string,\n    addressId: string\n  ): Promise<BusinessPartnerAddress> {\n    const businessPartnerAddress = businessPartnerAddressApi\n      .entityBuilder()\n      .fromJson({ businessPartner:businessPartnerId, addressId, ...address });\n    return businessPartnerAddressApi\n      .requestBuilder()\n      .update(businessPartnerAddress)\n      .execute({ url: "http://localhost:3000" });\n  }\n')),(0,t.kt)("p",null,"First, an address object is built from the user input.\nIt contains the ID of the business partner and the address to be updated.\nThis is necessary because a business partner can contain multiple addresses."),(0,t.kt)("p",null,"Expose the service implementation via the ",(0,t.kt)("inlineCode",{parentName:"p"},"business-partner.controller.ts"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"  @Put('/:businessPartnerId/address/:addressId')\n  updateBusinessPartnerAddress(\n    @Body() requestBody: Record<string, any>,\n    @Param('businessPartnerId') businessPartnerId: string,\n    @Param('addressId') addressId: string\n  ): Promise<BusinessPartnerAddress> {\n    return this.businessPartnerService.updateAddress(requestBody,businessPartnerId,addressId);\n  }\n")),(0,t.kt)("p",null,"The path of the service contains the ID of the business partner and the address to be updated.\nThe new address is given in the payload."),(0,t.kt)("h3",{id:"test-update-service"},"Test Update Service"),(0,t.kt)("p",null,"The update request is triggered by the PUT method.\nExecute the update request in your HTTP client (e.g. ",(0,t.kt)("a",{parentName:"p",href:"https://learning.postman.com/docs/getting-started/installation-and-updates/"},"postman"),"):"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'PUT http://localhost:8080/business-partners/1003764/address/28238\nBODY\n{\n    "houseNumber": "123"\n}\n')),(0,t.kt)("p",null,"After the update, a ",(0,t.kt)("inlineCode",{parentName:"p"},"GET http://localhost:8080/business-partners/1003764")," should show the updated house number 123."),(0,t.kt)("h2",{id:"delete-address"},"Delete Address"),(0,t.kt)("p",null,"After creating and updating addresses, it is time to delete an address.\nAlso here you start with the service implementation in ",(0,t.kt)("inlineCode",{parentName:"p"},"business-partner.service.ts"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},'  deleteAddress(businessPartnerId: string, addressId: string): Promise<void> {\n    return businessPartnerAddressApi\n      .requestBuilder()\n      .delete(businessPartnerId, addressId)\n      .execute({ url: "http://localhost:3000" });\n  }\n')),(0,t.kt)("p",null,"As for the other operations, the ",(0,t.kt)("inlineCode",{parentName:"p"},"requestBuilder")," is used to build the ",(0,t.kt)("inlineCode",{parentName:"p"},"delete")," request.\nThe method needs the two IDs to identify the business partner and address you want to delete."),(0,t.kt)("p",null,"The delete endpoint is exposed in the ",(0,t.kt)("inlineCode",{parentName:"p"},"business-partner.controller.ts")," via the following code:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},'  @Delete("/:businessPartnerId/address/:addressId")\n  @HttpCode(204)\n  deleteBusinessPartnerAddress(\n    @Param("businessPartnerId") businessPartnerId: string,\n    @Param("addressId") addressId: string\n  ): Promise<void> {\n    return this.businessPartnerService.deleteAddress(\n      businessPartnerId,\n      addressId\n    );\n  }\n')),(0,t.kt)("p",null,"You use the HTTP method DELETE to trigger a deletion and the status 204 indicates a successful deletion."),(0,t.kt)("h3",{id:"test-delete-service"},"Test Delete Service"),(0,t.kt)("p",null,"You can test the service in the following way.\nExecute ",(0,t.kt)("inlineCode",{parentName:"p"},"GET http://localhost:8080/business-partners/1003764")," and note the ID of an address you want to delete e.g. 28241.\nThen execute ",(0,t.kt)("inlineCode",{parentName:"p"},"DELETE http://localhost:8080/business-partners/1003764/address/28241")," in your HTTP client.\nThis should return 204 if existing IDs are passed.\nTo verify you can execute ",(0,t.kt)("inlineCode",{parentName:"p"},"GET http://localhost:8080/business-partners/1003764")," afterward and the selected address should be removed."),(0,t.kt)("h2",{id:"final-code-review"},"Final Code Review"),(0,t.kt)("p",null,"In this tutorial, you learned how to create, update and delete addresses using the SAP Cloud SDK.\nFirst, an implementation is added in the service class.\nThen the implementation is exposed in the controller class.\nThe result of this and the ",(0,t.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/tutorials/address-manager/read-addresses"},"previous tutorial")," is an API to manage business partner addresses."),(0,t.kt)("p",null,"You can find the complete code below:"),(0,t.kt)(a.Z,{groupId:"code-files",defaultValue:"business-partner.service.ts",values:[{label:"business-partner.service.ts",value:"business-partner.service.ts"},{label:"business-partner.controller.ts",value:"business-partner.controller.ts"}],mdxType:"Tabs"},(0,t.kt)(d.Z,{value:"business-partner.service.ts",className:"code-block-height-js thin-scrollbar",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\nimport {\n  BusinessPartner,\n  BusinessPartnerAddress,\n  businessPartnerService\n} from '../../services/business-partner-service';\nimport * as dotenv from 'dotenv';\n\ndotenv.config();\nconst { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\n\n/**\n * Service implementation of address API.\n */\n@Injectable()\nexport class BusinessPartnerService {\n  /**\n   * Gets a list of all business partners.\n   * @returns List of business partners.\n   */\n  async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n    return businessPartnerApi\n      .requestBuilder()\n      .getAll()\n      .select(\n        businessPartnerApi.schema.BUSINESS_PARTNER,\n        businessPartnerApi.schema.FIRST_NAME,\n        businessPartnerApi.schema.LAST_NAME,\n        businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(\n          businessPartnerAddressApi.schema.BUSINESS_PARTNER,\n          businessPartnerAddressApi.schema.ADDRESS_ID\n        )\n      )\n      .filter(businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY.equals('1'))\n      .execute({ url: 'http://localhost:3000' });\n  }\n\n  /**\n   * Get a business partner by ID.\n   * @param id - ID of the business partner to be returned.\n   * @returns The business partner with the given ID.\n   */\n  getBusinessPartnerById(id: string): Promise<BusinessPartner> {\n    return businessPartnerApi\n      .requestBuilder()\n      .getByKey(id)\n      .select(\n        businessPartnerApi.schema.BUSINESS_PARTNER,\n        businessPartnerApi.schema.FIRST_NAME,\n        businessPartnerApi.schema.LAST_NAME,\n        businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(\n          businessPartnerAddressApi.schema.BUSINESS_PARTNER,\n          businessPartnerAddressApi.schema.ADDRESS_ID,\n          businessPartnerAddressApi.schema.POSTAL_CODE,\n          businessPartnerAddressApi.schema.CITY_NAME,\n          businessPartnerAddressApi.schema.STREET_NAME,\n          businessPartnerAddressApi.schema.HOUSE_NUMBER\n        )\n      )\n      .execute({ url: 'http://localhost:3000' });\n  }\n\n  /**\n   * Creates an address for a business partner.\n   * @param address - Address which is added to the business partner.\n   * @param id - ID of the business partner.\n   * @returns The address which was created.\n   */\n  public createAddress(\n    address: Record<string, any>,\n    id: string\n  ): Promise<BusinessPartnerAddress> {\n    const businessPartnerAddress = businessPartnerAddressApi\n      .entityBuilder()\n      .fromJson({ businessPartner: id, ...address });\n\n    return businessPartnerAddressApi\n      .requestBuilder()\n      .create(businessPartnerAddress)\n      .execute({ url: 'http://localhost:3000' });\n  }\n\n  /**\n   * Updates an address of a business partner.\n   * @param address - New address information after update. Existing values are overwritten, new ones are added.\n   * @param businessPartner - ID of business partner whose address is updated.\n   * @param addressId - ID of address which is updated.\n   * @returns - The address after update.\n   */\n  updateAddress(\n    address: Record<string, any>,\n    businessPartner: string,\n    addressId: string\n  ): Promise<BusinessPartnerAddress> {\n    const businessPartnerAddress = businessPartnerAddressApi\n      .entityBuilder()\n      .fromJson({ businessPartner, addressId, ...address });\n\n    return businessPartnerAddressApi\n      .requestBuilder()\n      .update(businessPartnerAddress)\n      .execute({ url: 'http://localhost:3000' });\n  }\n\n  /**\n   * Deletes an address of a business partner.\n   * @param businessPartner - ID of the business partner to be updated.\n   * @param addressId - ID of address to be deleted.\n   * @returns - Void.\n   */\n  deleteAddress(businessPartner: string, addressId: string): Promise<void> {\n    return businessPartnerAddressApi\n      .requestBuilder()\n      .delete(businessPartner, addressId)\n      .execute({ url: 'http://localhost:3000' });\n  }\n}\n"))),(0,t.kt)(d.Z,{value:"business-partner.controller.ts",className:"code-block-height-js thin-scrollbar",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Body,\n  Controller,\n  Delete,\n  Get,\n  HttpCode,\n  Param,\n  Post,\n  Put\n} from '@nestjs/common';\nimport {\n  BusinessPartner,\n  BusinessPartnerAddress\n} from '../../services/business-partner-service';\nimport { BusinessPartnerService } from './business-partner.service';\n\n@Controller('business-partners')\nexport class BusinessPartnerController {\n  constructor(\n    private readonly businessPartnerService: BusinessPartnerService\n  ) {}\n\n  @Get()\n  getAllBusinessPartners(): Promise<BusinessPartner[]> {\n    return this.businessPartnerService.getAllBusinessPartners();\n  }\n\n  @Get('/:id')\n  getBusinessPartnerById(@Param('id') id: string): Promise<BusinessPartner> {\n    return this.businessPartnerService.getBusinessPartnerById(id);\n  }\n\n  @Post('/:id/address')\n  @HttpCode(201)\n  createAddress(\n    @Body() requestBody: Record<string, any>,\n    @Param('id') id: string\n  ): Promise<BusinessPartnerAddress> {\n    return this.businessPartnerService.createAddress(requestBody, id);\n  }\n\n  @Put('/:businessPartnerId/address/:addressId')\n  updateBusinessPartnerAddress(\n    @Body() requestBody: Record<string, any>,\n    @Param('businessPartnerId') businessPartnerId: string,\n    @Param('addressId') addressId: string\n  ): Promise<BusinessPartnerAddress> {\n    return this.businessPartnerService.updateAddress(\n      requestBody,\n      businessPartnerId,\n      addressId\n    );\n  }\n\n  @Delete('/:businessPartnerId/address/:addressId')\n  @HttpCode(204)\n  deleteBusinessPartnerAddress(\n    @Param('businessPartnerId') businessPartnerId: string,\n    @Param('addressId') addressId: string\n  ): Promise<void> {\n    return this.businessPartnerService.deleteAddress(\n      businessPartnerId,\n      addressId\n    );\n  }\n}\n")))))}h.isMDXComponent=!0},85162:(e,s,n)=>{n.d(s,{Z:()=>d});var r=n(67294),t=n(86010);const a="tabItem_Ymn6";function d(e){let{children:s,hidden:n,className:d}=e;return r.createElement("div",{role:"tabpanel",className:(0,t.Z)(a,d),hidden:n},s)}},65488:(e,s,n)=>{n.d(s,{Z:()=>h});var r=n(87462),t=n(67294),a=n(86010),d=n(72389),i=n(67392),o=n(7094),u=n(12466);const l="tabList__CuJ",p="tabItem_LNqP";function c(e){var s,n;const{lazy:d,block:c,defaultValue:h,values:m,groupId:b,className:P}=e,v=t.Children.map(e.children,(e=>{if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:v.map((e=>{let{props:{value:s,label:n,attributes:r}}=e;return{value:s,label:n,attributes:r}})),A=(0,i.l)(g,((e,s)=>e.value===s.value));if(A.length>0)throw new Error('Docusaurus error: Duplicate values "'+A.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===h?h:null!=(s=null!=h?h:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?s:v[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:y}=(0,o.U)(),[I,T]=(0,t.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==I&&g.some((s=>s.value===e))&&T(e)}const w=e=>{const s=e.currentTarget,n=N.indexOf(s),r=g[n].value;r!==I&&(S(s),T(r),null!=b&&y(b,String(r)))},B=e=>{var s;let n=null;switch(e.key){case"ArrowRight":{var r;const s=N.indexOf(e.currentTarget)+1;n=null!=(r=N[s])?r:N[0];break}case"ArrowLeft":{var t;const s=N.indexOf(e.currentTarget)-1;n=null!=(t=N[s])?t:N[N.length-1];break}}null==(s=n)||s.focus()};return t.createElement("div",{className:(0,a.Z)("tabs-container",l)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},P)},g.map((e=>{let{value:s,label:n,attributes:d}=e;return t.createElement("li",(0,r.Z)({role:"tab",tabIndex:I===s?0:-1,"aria-selected":I===s,key:s,ref:e=>N.push(e),onKeyDown:B,onFocus:w,onClick:w},d,{className:(0,a.Z)("tabs__item",p,null==d?void 0:d.className,{"tabs__item--active":I===s})}),null!=n?n:s)}))),d?(0,t.cloneElement)(v.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},v.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==I})))))}function h(e){const s=(0,d.Z)();return t.createElement(c,(0,r.Z)({key:String(s)},e))}},26042:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/create-business-partner-address-0428b37bec99b373a06719f500190dcd.png"}}]);