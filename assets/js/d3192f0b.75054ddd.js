"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[8437],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||a;return n?s.createElement(m,i(i({ref:t},d),{},{components:n})):s.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89590:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var s=n(87462),r=n(63366),a=(n(67294),n(3905)),i=n(65488),o=n(85162),l=["components"],u={id:"read-addresses",title:"Building an Address Manager with the SAP Cloud SDK - Part 1",sidebar_label:"Read Address Data",description:"Build an Address Manager with the SAP Cloud SDK - Part 1",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial","address manager"]},d=void 0,p={unversionedId:"tutorials/address-manager/read-addresses",id:"tutorials/address-manager/read-addresses",title:"Building an Address Manager with the SAP Cloud SDK - Part 1",description:"Build an Address Manager with the SAP Cloud SDK - Part 1",source:"@site/docs-js/tutorials/address-manager/read-addresses.mdx",sourceDirName:"tutorials/address-manager",slug:"/tutorials/address-manager/read-addresses",permalink:"/cloud-sdk/docs/js/tutorials/address-manager/read-addresses",draft:!1,tags:[],version:"current",frontMatter:{id:"read-addresses",title:"Building an Address Manager with the SAP Cloud SDK - Part 1",sidebar_label:"Read Address Data",description:"Build an Address Manager with the SAP Cloud SDK - Part 1",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","tutorial","address manager"]},sidebar:"docsJsSidebar",previous:{title:"Deploy Application to Cloud Foundry",permalink:"/cloud-sdk/docs/js/tutorials/getting-started/deploy-app-to-cf"},next:{title:"Change Address Data",permalink:"/cloud-sdk/docs/js/tutorials/address-manager/change-addresses"}},c={},h=[{value:"Overview",id:"overview",level:2},{value:"Get All Business Partners",id:"get-all-business-partners",level:2},{value:"Recap Existing Service",id:"recap-existing-service",level:3},{value:"Test GetAll Service",id:"test-getall-service",level:3},{value:"Select Certain Fields",id:"select-certain-fields",level:3},{value:"Filter Business Partners by Type",id:"filter-business-partners-by-type",level:3},{value:"Get Addresses of Business Partner",id:"get-addresses-of-business-partner",level:2},{value:"Get One Business Partner",id:"get-one-business-partner",level:3},{value:"Test GetById Service",id:"test-getbyid-service",level:3},{value:"Navigate To Address",id:"navigate-to-address",level:3},{value:"Final Code Review",id:"final-code-review",level:2}],m={toc:h};function b(e){var t=e.components,u=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,s.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In the SAP S/4HANA data model, addresses are related to the business partner entity.\nEach business partner can have multiple addresses assigned.\nYou will develop an application that provides a REST API to manage the addresses of business partners.\nIn this part of the tutorial, you will create the endpoints reading data.\nYou will learn:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to retrieve a single business partner."),(0,a.kt)("li",{parentName:"ul"},"How to retrieve the addresses of a business partner.")),(0,a.kt)("p",null,"The tutorial is based on the initial NestJs application explained in the ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/tutorials/getting-started/set-up-dev-environment"},"first part of the getting started tutorials"),".\nIn that tutorial you already created ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/tutorials/getting-started/execute-an-odata-request"},"a first OData request")," to get a list of business partners.\nYou will extend the functionality of the API in this tutorial and the ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/tutorials/address-manager/change-addresses"},"follow-up part"),".\nSince the follow-up part is about changing data, we recommend using a ",(0,a.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-s4-sdk-book/pages/mock-odata.html"},"local mock system"),".\nChanging data is not possible on SAP API Business Hub and an actual SAP S/4HANA instance should not be polluted with test data.\nNote that both systems run locally but have different ports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"localhost:3000")," is the mock system imitating the SAP S/4HANA system."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"localhost:8080")," is the address manager application you develop in the tutorial.")),(0,a.kt)("h2",{id:"get-all-business-partners"},"Get All Business Partners"),(0,a.kt)("h3",{id:"recap-existing-service"},"Recap Existing Service"),(0,a.kt)("p",null,"In the previous ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/tutorials/getting-started/execute-an-odata-request"},"tutorial")," you created a OData request to retrieve business partners.\nYou included the following code in your ",(0,a.kt)("inlineCode",{parentName:"p"},"business-partner.service.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\nimport {\n  BusinessPartner,\n  businessPartnerService\n} from '@sap/cloud-sdk-vdm-business-partner-service';\n\n@Injectable()\nexport class BusinessPartnerService {\n  getAllBusinessPartners(): Promise<BusinessPartner[]> {\n    const { businessPartnerApi } = businessPartnerService();\n    return businessPartnerApi\n      .requestBuilder()\n      .getAll()\n      .addCustomHeaders({ apikey: process.env.APIKey })\n      .execute({ url: 'http://localhost:3000' });\n  }\n}\n")),(0,a.kt)("p",null,"Let's walk you through the implementation of the service as a recap.\nYou have imported the ",(0,a.kt)("inlineCode",{parentName:"p"},"businessPartnerService")," which offers you many APIs and you picked the ",(0,a.kt)("inlineCode",{parentName:"p"},"businessPartnerApi"),".\nWith this API you requested all business partners using the ",(0,a.kt)("inlineCode",{parentName:"p"},"getAll")," request builder.\nAs discussed, you should use the local ",(0,a.kt)("a",{parentName:"p",href:"https://sap.github.io/cloud-s4-sdk-book/pages/mock-odata.html"},"mock system"),".\nFor simplicity, the ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," is passed directly to the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute()")," method."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In real applications, you would use a real SAP S/4HANA system and the ",(0,a.kt)("a",{parentName:"p",href:"../../features/connectivity/destination"},"destination service")," to avoid leaking private or secret information through hard-coding system properties.")),(0,a.kt)("h3",{id:"test-getall-service"},"Test GetAll Service"),(0,a.kt)("p",null,"You can start your application using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"npm start\n")),(0,a.kt)("p",null,"When the server is running, you should see a message like: ",(0,a.kt)("inlineCode",{parentName:"p"},"[NestApplication] Nest application successfully started")," and some mappings related to the listed controllers.\nOpen the URL ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/business-partners")," and you should see the data of the mock server."),(0,a.kt)("h3",{id:"select-certain-fields"},"Select Certain Fields"),(0,a.kt)("p",null,"The output from the previous sections shows all fields of the business partner entity.\nLike SQL, OData allows the selection of only specific properties of an entity.\nFor our address manager, we only want to know the ID, first name, and last name of a business partner.\nAdd a ",(0,a.kt)("inlineCode",{parentName:"p"},"select")," statement to the service implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerApi } = businessPartnerService();\n\n@Injectable()\nexport class BusinessPartnerService {\n  getAllBusinessPartners(): Promise<BusinessPartner[]> {\n    return businessPartnerApi\n      .requestBuilder()\n      .getAll()\n      .select(\n        businessPartnerApi.schema.BUSINESS_PARTNER,\n        businessPartnerApi.schema.FIRST_NAME,\n        businessPartnerApi.schema.LAST_NAME\n      )\n      .top(10)\n      .execute({ url: 'http://localhost:3000' });\n  }\n}\n")),(0,a.kt)("p",null,"As you can see, each property you select is represented by a property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"businessPartnerApi")," schema.\nTo keep the code shorter, the ",(0,a.kt)("inlineCode",{parentName:"p"},"businessPartnerApi")," has been assigned to a local variable.\nIf your IDE supports code completion, you can see all properties that can be selected on this entity by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"businessPartnerApi.schema."),".\nDepending on your IDE, the list may show automatically or when you trigger the code completion manually (often by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"Space"),").\nThis saves you from having to look up the properties in the metadata and prevents errors due to mistyping."),(0,a.kt)("p",null,"If you open the URL ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/business-partners"),", you should see only the ID, first name, and last name of the business partners."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Get all business partners.",src:n(77413).Z,width:"536",height:"706"})),(0,a.kt)("h3",{id:"filter-business-partners-by-type"},"Filter Business Partners by Type"),(0,a.kt)("p",null,"Business partners can either be natural persons or legal persons (e.g. organizations or companies).\nFor the address manager, we only want the addresses of natural persons.\nTherefore, you need to filter our request.\nModify your code like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"businessPartnerApi\n      .requestBuilder()\n      .getAll()\n      .select(\n        businessPartnerApi.schema.BUSINESS_PARTNER,\n        businessPartnerApi.schema.FIRST_NAME,\n        businessPartnerApi.schema.LAST_NAME\n      )\n      .filter(\n          businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY.equals('1')\n      )\n      .execute({ url: \"http://localhost:3000\" });\n}\n")),(0,a.kt)("p",null,"As for ",(0,a.kt)("inlineCode",{parentName:"p"},"select"),", you can use the properties of the ",(0,a.kt)("inlineCode",{parentName:"p"},"BusinessPartner")," entity directly for filtering.\nEach property offers a set of functions for constructing filters.\nEvery property has the ",(0,a.kt)("inlineCode",{parentName:"p"},"equals")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"notEquals")," function.\nDepending on the type of property, there can be additional functions like ",(0,a.kt)("inlineCode",{parentName:"p"},"greaterThan")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"greaterOrEqual"),"."),(0,a.kt)("p",null,"Since the type of the property is known, the typed client will prevent you from passing values of the wrong type.\nFor example, ",(0,a.kt)("inlineCode",{parentName:"p"},"businessPartnerApi.schema.FIRST_NAME.equals(1)")," would not compile when using TypeScript.\nIn JavaScript, the code would only fail at run-time, but your editor may raise a warning for the type mismatch."),(0,a.kt)("p",null,"For more complicated filter conditions have a look at the ",(0,a.kt)("a",{parentName:"p",href:"../../features/odata/use-odata-v2-type-safe-client-for-javascript-typescript#filter"},"filter documentation"),"."),(0,a.kt)("h2",{id:"get-addresses-of-business-partner"},"Get Addresses of Business Partner"),(0,a.kt)("p",null,"As a first step, you created an endpoint for obtaining a list of business partners.\nIn this part of the tutorial, you will create the services to read the addresses."),(0,a.kt)("h3",{id:"get-one-business-partner"},"Get One Business Partner"),(0,a.kt)("p",null,"We are interested in the addresses related to one business partner and create a query for fetching one specific business partner.\nEach business partner has a unique ID, which you can use to do that.\nInclude a second method in the existing ",(0,a.kt)("inlineCode",{parentName:"p"},"business-partner.service.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"getBusinessPartnerById(id: string): Promise<BusinessPartner> {\n    return businessPartnerApi\n      .requestBuilder()\n      .getByKey(id)\n      .execute({ url: 'http://localhost:3000' });\n}\n")),(0,a.kt)("p",null,"As before, you call ",(0,a.kt)("inlineCode",{parentName:"p"},"businessPartnerApi.requestBuilder()")," to select the type of request you want to build.\nSince you only want to get a single business partner, you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"getByKey")," function and then call ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," to execute the request.\nAgain, you use the local mock server from the previous section for the ",(0,a.kt)("inlineCode",{parentName:"p"},"getAll")," request."),(0,a.kt)("p",null,"As a next step, you need to expose the service via the controller.\nOpen the ",(0,a.kt)("inlineCode",{parentName:"p"},"business-partner.controller.ts")," and add the following method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Get('/:id')\ngetBusinessPartnerById(@Param('id') id: string): Promise<BusinessPartner> {\n    return this.businessPartnerService.getBusinessPartnerById(id);\n}\n")),(0,a.kt)("p",null,"The method takes the ID from the URL and passes it to ",(0,a.kt)("inlineCode",{parentName:"p"},"getBusinessPartnerById")," in the service class.\nIf a business partner with the provided ID exists in the target system, it will be sent to the client.\nOtherwise, an error message is sent."),(0,a.kt)("h3",{id:"test-getbyid-service"},"Test GetById Service"),(0,a.kt)("p",null,"Restart your server and open ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/business-partners")," to get the list of all business partners.\nCopy one ID from the result list and execute ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/business-partners/<yourId>"),".\nYou should see the details of the chosen business partner.\nNote that Nest applications have a built-in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/exception-filters"},"exception filter"),", which maps exceptions to HTTP messages shown to the client.\nBy default, the exceptions from the SAP Cloud SDK are mapped to a server-side error.\nSo if you provide a non-existing ID, you will receive a 500 response and not a 404."),(0,a.kt)("h3",{id:"navigate-to-address"},"Navigate To Address"),(0,a.kt)("p",null,"As mentioned before, the address is a separate OData entity related to the business partner.\nIn OData, the address is a navigation property of the business partner.\nIf you want to include such a related property in the query result, you have to include it in the select statement:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"return businessPartnerApi\n  .requestBuilder()\n  .getByKey(id)\n  .select(\n    businessPartnerApi.schema.BUSINESS_PARTNER,\n    businessPartnerApi.schema.FIRST_NAME,\n    businessPartnerApi.schema.LAST_NAME,\n    businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS\n  )\n  .execute({ url: 'http://localhost:3000' });\n")),(0,a.kt)("p",null,"This implicitly expands the property and includes all properties like street, house number, and state of the address in the result.\nAlso here we are interested only in some properties of the address.\nA second select on the navigation property reduces the response to the desired fields:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const { businessPartnerAddressApi } = businessPartnerService();\n\nreturn businessPartnerApi\n  .requestBuilder()\n  .getByKey(id)\n  .addCustomHeaders({ apikey: process.env.APIKey })\n  .select(\n    businessPartnerApi.schema.BUSINESS_PARTNER,\n    businessPartnerApi.schema.FIRST_NAME,\n    businessPartnerApi.schema.LAST_NAME,\n    businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(\n      businessPartnerAddressApi.schema.BUSINESS_PARTNER,\n      businessPartnerAddressApi.schema.ADDRESS_ID\n      businessPartnerAddressApi.schema.POSTAL_CODE,\n      businessPartnerAddressApi.schema.CITY_NAME,\n      businessPartnerAddressApi.schema.STREET_NAME,\n      businessPartnerAddressApi.schema.HOUSE_NUMBER\n    )\n  )\n  .execute({ url: 'http://localhost:3000' });\n")),(0,a.kt)("p",null,"Properties like ",(0,a.kt)("inlineCode",{parentName:"p"},"POSTAL_CODE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"CITY_NAME"),", and so on are part of the address API and related schema.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"businessPartnerAddressApi")," is also part of the business partner service.\nIf you call the URL ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/business-partners/<yourId>"),", the service returns a single business partner with the selected address information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "businessPartner": "1003765",\n  "firstName": "Jane",\n  "lastName": "Roe",\n  "toBusinessPartnerAddress": [\n    {\n      "businessPartner": "1003765",\n      "addressId": "28241",\n      "cityName": "Palo Alto",\n      "houseNumber": "3410",\n      "postalCode": "CA 94304",\n      "streetName": "Hillview Avenue"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"final-code-review"},"Final Code Review"),(0,a.kt)("p",null,"In this tutorial, you have created an API to read business partners.\nYou created endpoints to read a list of business partners as well as a specific business partner by ID.\nYou adjusted the results with ",(0,a.kt)("inlineCode",{parentName:"p"},"select")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," statements to fit your needs.\nIn the ",(0,a.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/tutorials/address-manager/change-addresses"},"next part")," you will extend the API to change data."),(0,a.kt)("p",null,"You can find the complete code below:"),(0,a.kt)(i.Z,{groupId:"code-files",defaultValue:"business-partner.service.ts",values:[{label:"business-partner.service.ts",value:"business-partner.service.ts"},{label:"business-partner.controller.ts",value:"business-partner.controller.ts"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"business-partner.service.ts",className:"code-block-height-js thin-scrollbar",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Injectable } from '@nestjs/common';\nimport {\n  BusinessPartner,\n  BusinessPartnerAddress,\n  businessPartnerService\n} from '@sap/cloud-sdk-vdm-business-partner-service';\nimport * as dotenv from 'dotenv';\n\ndotenv.config();\nconst { businessPartnerApi, businessPartnerAddressApi } =\n  businessPartnerService();\n\n/**\n * Service implementation of address API.\n */\n@Injectable()\nexport class BusinessPartnerService {\n  /**\n   * Gets a list of all business partners.\n   * @returns List of business partner.\n   */\n  async getAllBusinessPartners(): Promise<BusinessPartner[]> {\n    return businessPartnerApi\n      .requestBuilder()\n      .getAll()\n      .select(\n        businessPartnerApi.schema.BUSINESS_PARTNER,\n        businessPartnerApi.schema.FIRST_NAME,\n        businessPartnerApi.schema.LAST_NAME,\n        businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(\n          businessPartnerAddressApi.schema.BUSINESS_PARTNER,\n          businessPartnerAddressApi.schema.ADDRESS_ID\n        )\n      )\n      .filter(businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY.equals('1'))\n      .execute({ url: 'http://localhost:3000' });\n  }\n\n  /**\n   * Get a business partner by ID.\n   * @param id - ID of the business partner to be returned.\n   * @returns The business partner with the given ID.\n   */\n  getBusinessPartnerById(id: string): Promise<BusinessPartner> {\n    return businessPartnerApi\n      .requestBuilder()\n      .getByKey(id)\n      .select(\n        businessPartnerApi.schema.BUSINESS_PARTNER,\n        businessPartnerApi.schema.FIRST_NAME,\n        businessPartnerApi.schema.LAST_NAME,\n        businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(\n          businessPartnerAddressApi.schema.BUSINESS_PARTNER,\n          businessPartnerAddressApi.schema.ADDRESS_ID,\n          businessPartnerAddressApi.schema.POSTAL_CODE,\n          businessPartnerAddressApi.schema.CITY_NAME,\n          businessPartnerAddressApi.schema.STREET_NAME,\n          businessPartnerAddressApi.schema.HOUSE_NUMBER\n        )\n      )\n      .execute({ url: 'http://localhost:3000' });\n  }\n}\n"))),(0,a.kt)(o.Z,{value:"business-partner.controller.ts",className:"code-block-height-js thin-scrollbar",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Body,\n  Controller,\n  Delete,\n  Get,\n  HttpCode,\n  Param,\n  Post,\n  Put\n} from '@nestjs/common';\nimport {\n  BusinessPartner,\n  BusinessPartnerAddress\n} from '@sap/cloud-sdk-vdm-business-partner-service';\nimport { BusinessPartnerService } from './business-partner.service';\n\n@Controller('business-partners')\nexport class BusinessPartnerController {\n  constructor(\n    private readonly businessPartnerService: BusinessPartnerService\n  ) {}\n\n  @Get()\n  getAllBusinessPartners(): Promise<BusinessPartner[]> {\n    return this.businessPartnerService.getAllBusinessPartners();\n  }\n\n  @Get('/:id')\n  getBusinessPartnerById(@Param('id') id: string): Promise<BusinessPartner> {\n    return this.businessPartnerService.getBusinessPartnerById(id);\n  }\n\n  @Post('/:id/address')\n  @HttpCode(201)\n  createAddress(\n    @Body() requestBody: Record<string, any>,\n    @Param('id') id: string\n  ): Promise<BusinessPartnerAddress> {\n    return this.businessPartnerService.createAddress(requestBody, id);\n  }\n\n  @Put('/:businessPartnerId/address/:addressId')\n  updateBusinessPartnerAddress(\n    @Body() requestBody: Record<string, any>,\n    @Param('businessPartnerId') businessPartnerId: string,\n    @Param('addressId') addressId: string\n  ): Promise<BusinessPartnerAddress> {\n    return this.businessPartnerService.updateAddress(\n      requestBody,\n      businessPartnerId,\n      addressId\n    );\n  }\n\n  @Delete('/:businessPartnerId/address/:addressId')\n  @HttpCode(204)\n  deleteBusinessPartnerAddress(\n    @Param('businessPartnerId') businessPartnerId: string,\n    @Param('addressId') addressId: string\n  ): Promise<void> {\n    return this.businessPartnerService.deleteAddress(\n      businessPartnerId,\n      addressId\n    );\n  }\n}\n")))))}b.isMDXComponent=!0},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var s=n(67294),r=n(86010),a="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return s.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var s=n(87462),r=n(67294),a=n(86010),i=n(72389),o=n(67392),l=n(7094),u=n(12466),d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t,n,i=e.lazy,c=e.block,h=e.defaultValue,m=e.values,b=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,o.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var A=null===h?h:null!=(t=null!=h?h:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==A&&!y.some((function(e){return e.value===A})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+A+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var P=(0,l.U)(),k=P.tabGroupChoices,N=P.setTabGroupChoices,S=(0,r.useState)(A),I=S[0],E=S[1],B=[],w=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var T=k[b];null!=T&&T!==I&&y.some((function(e){return e.value===T}))&&E(T)}var C=function(e){var t=e.currentTarget,n=B.indexOf(t),s=y[n].value;s!==I&&(w(t),E(s),null!=b&&N(b,String(s)))},R=function(e){var t,n=null;switch(e.key){case"ArrowRight":var s,r=B.indexOf(e.currentTarget)+1;n=null!=(s=B[r])?s:B[0];break;case"ArrowLeft":var a,i=B.indexOf(e.currentTarget)-1;n=null!=(a=B[i])?a:B[B.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":c},f)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,s.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:function(e){return B.push(e)},onKeyDown:R,onFocus:C,onClick:C},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":I===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function h(e){var t=(0,i.Z)();return r.createElement(c,(0,s.Z)({key:String(t)},e))}},77413:function(e,t,n){t.Z=n.p+"assets/images/get-all-business-partners-0510c32e6f3710f1109d98875cafd976.png"}}]);