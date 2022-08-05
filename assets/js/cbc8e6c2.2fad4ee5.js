"use strict";(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[664],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||l;return n?i.createElement(f,r(r({ref:t},u),{},{components:n})):i.createElement(f,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42831:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var i=n(87462),a=n(63366),l=(n(67294),n(3905)),r=["components"],o={id:"resilience",title:"Resilience Capabilities",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Resilience",description:"How to use SAP Cloud SDK for Java to introduce resilience patterns into your application.",keywords:["sap","cloud","sdk","resilience","multi tenancy","cloud native","timeout"]},c=void 0,s={unversionedId:"features/resilience/resilience",id:"features/resilience/resilience",title:"Resilience Capabilities",description:"How to use SAP Cloud SDK for Java to introduce resilience patterns into your application.",source:"@site/docs-java/features/resilience/resilience.mdx",sourceDirName:"features/resilience",slug:"/features/resilience/",permalink:"/cloud-sdk/docs/java/features/resilience/",draft:!1,tags:[],version:"current",frontMatter:{id:"resilience",title:"Resilience Capabilities",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Resilience",description:"How to use SAP Cloud SDK for Java to introduce resilience patterns into your application.",keywords:["sap","cloud","sdk","resilience","multi tenancy","cloud native","timeout"]},sidebar:"docsJavaSidebar",previous:{title:"Thread Context",permalink:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"},next:{title:"Caching",permalink:"/cloud-sdk/docs/java/features/resilience/caching"}},u={},p=[{value:"Using the Resilience API",id:"using-the-resilience-api",level:2},{value:"Executing Operations",id:"executing-operations",level:3},{value:"Operation Types",id:"operation-types",level:4},{value:"Execution Variants",id:"execution-variants",level:4},{value:"Failures and Fallbacks",id:"failures-and-fallbacks",level:4},{value:"Building a Resilience Configuration",id:"building-a-resilience-configuration",level:3},{value:"Multi Tenancy",id:"multi-tenancy",level:4},{value:"Resilience Capabilities",id:"resilience-capabilities",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The SAP Cloud SDK for Java provides abstractions for some frequently used resilience patterns like timeout, retry, rate limiter, or circuit breaker.\nApplying such patterns helps to make an application more resilient against failures it might encounter."),(0,l.kt)("p",null,"The following article describes which resilience features the SAP Cloud SDK offers and how to apply them.\nIf you are looking for a quick start with resilience also check out our ",(0,l.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/s4sdk-resilience.html"},"dedicated tutorial")," on the topic!"),(0,l.kt)("h2",{id:"using-the-resilience-api"},"Using the Resilience API"),(0,l.kt)("p",null,"To make use of the resilience capabilities by the SAP Cloud SDK, make sure to add following dependencies to your project:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.sap.cloud.sdk.cloudplatform</groupId>\n    <artifactId>resilience</artifactId>\n</dependency>\n<dependency>\n    <groupId>com.sap.cloud.sdk.frameworks</groupId>\n    <artifactId>resilience4j</artifactId>\n    <scope>runtime</scope>\n</dependency>\n")),(0,l.kt)("p",null,"The SAP Cloud SDK allows running any code in the context of one or more resilience patterns.\nThere are two essential building blocks for achieving this:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"ResilienceConfiguration")," that determines which patterns should be applied."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"ResilienceDecorator")," is capable of applying the configuration to an operation.")),(0,l.kt)("p",null,"The fluent ",(0,l.kt)("a",{parentName:"p",href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.html"},"Resilience Configuration API")," provides builders that help with assembling different resilience patterns and their associated parameters.\nWhich patterns are available and how to use them is explained in the ",(0,l.kt)("a",{parentName:"p",href:"#building-a-resilience-configuration"},"dedicated section below"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceDecorator.html"},"Resilience Decorator")," is capable of applying such a configuration to a given ",(0,l.kt)("inlineCode",{parentName:"p"},"Callable")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Supplier"),"."),(0,l.kt)("h3",{id:"executing-operations"},"Executing Operations"),(0,l.kt)("p",null,"Consider the following code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"result = ResilienceDecorator.executeSupplier(() -> operation(), configuration);\n")),(0,l.kt)("p",null,"This code executes ",(0,l.kt)("inlineCode",{parentName:"p"},"operation()")," in a resilient manner according to a ",(0,l.kt)("inlineCode",{parentName:"p"},"ResilienceConfiguration"),".\nThe decorator will apply all in ",(0,l.kt)("inlineCode",{parentName:"p"},"configuration")," configured patterns and all logic that is needed to combine these patterns."),(0,l.kt)("p",null,"Some resilience patterns are applied over multiple executions of the same operation.\nFor example, the circuit breaker will prevent further executions if a significant portion of previous attempts failed."),(0,l.kt)("p",null,"To understand how the SAP Cloud SDK applies this concept consider the following snippet:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'configuration1 = ResilienceConfiguration.of("config-id-1");\nconfiguration2 = ResilienceConfiguration.of("config-id-1");\nconfiguration3 = ResilienceConfiguration.of("config-id-2");\n\nResilienceDecorator.executeSupplier(() -> operation(), configuration1);\nResilienceDecorator.executeSupplier(() -> operation(), configuration1);\nResilienceDecorator.executeSupplier(() -> operation(), configuration2);\nResilienceDecorator.executeSupplier(() -> operation(), configuration3);\n')),(0,l.kt)("p",null,'Here executions one, two, and three will all share the same "resilience state".\nThis means that they will share the same instance of a circuit breaker or bulkhead.\nThe state is shared via ',(0,l.kt)("a",{parentName:"p",href:"#building-a-resilience-configuration"},"the identifier")," of the associated configuration."),(0,l.kt)("h4",{id:"operation-types"},"Operation Types"),(0,l.kt)("p",null,"The decorator operates with two kinds of operations:"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Callable.html"},"Callable")),(0,l.kt)("td",null,"May throw checked or unchecked Exceptions")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Supplier.html"},"Supplier")),(0,l.kt)("td",null,"May only throw unchecked Exceptions")))),(0,l.kt)("p",null,"Noticeable is the difference in signatures: ",(0,l.kt)("em",{parentName:"p"},"Callable")," throws a ",(0,l.kt)("em",{parentName:"p"},"checked exception")," while ",(0,l.kt)("em",{parentName:"p"},"Supplier")," does not.\nYou can choose whatever fits your use case best."),(0,l.kt)("h4",{id:"execution-variants"},"Execution Variants"),(0,l.kt)("p",null,"The decorator allows for three different ways of applying a configuration:"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"Execute")),(0,l.kt)("td",null,"Immediately runs the operation")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"Decorate")),(0,l.kt)("td",null,"Returns a new operation to be run later")),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("em",null,"Queue")),(0,l.kt)("td",null,"Immediately runs the operation asynchronously")))),(0,l.kt)("p",null,"In case your operation should run asynchronously we highly recommend you leverage the ",(0,l.kt)("inlineCode",{parentName:"p"},"queue")," functionality.\nThe decorator will ensure the ",(0,l.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"},"Thread Context")," with Tenant and Principal information is propagated correctly to new Threads."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Note that the Resilience Decorator will try to propagate the current ",(0,l.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"},"Thread Context")," at the ",(0,l.kt)("em",{parentName:"p"},"time the decorator is invoked"),".\nThis is important when you are decorating a Callable or Supplier and running it later.\nThe Thread Context must be available whenever ",(0,l.kt)("inlineCode",{parentName:"p"},"decorateCallable")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"decorateSupplier")," is evaluated.\nIf the call to ",(0,l.kt)("inlineCode",{parentName:"p"},"ResilienceDecorator")," should take place asynchronously, you should ",(0,l.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context#running-asynchronous-operations"},"follow these steps")," to ensure the Thread Context is available.")),(0,l.kt)("h4",{id:"failures-and-fallbacks"},"Failures and Fallbacks"),(0,l.kt)("p",null,"An operation might fail for two reasons:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The operation itself encounters a failure and throws an error or exception"),(0,l.kt)("li",{parentName:"ol"},"A resilience pattern causes the operation to fail (e.g. the circuit breaker prevents further invocations)")),(0,l.kt)("p",null,"The SAP Cloud SDK wraps all kind of checked and unchecked exceptions into a ",(0,l.kt)("inlineCode",{parentName:"p"},"ResilienceRuntimeException")," and throws them."),(0,l.kt)("p",null,"To deal with failures one can either catch the ",(0,l.kt)("inlineCode",{parentName:"p"},"ResilienceRuntimeException")," or provide a fallback function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'executeCallable(() -> operation(), configuration,\n(throwable) -> {\n    log.debug("Encountered a failure in operation: ", throwable);\n    log.debug("Proceeding with fallback value: {}", fallback);\n    return fallback;\n});\n')),(0,l.kt)("p",null,"In the case of ",(0,l.kt)("inlineCode",{parentName:"p"},"Callable"),", this relieves you of the need to catch the exception at the outer level."),(0,l.kt)("h3",{id:"building-a-resilience-configuration"},"Building a Resilience Configuration"),(0,l.kt)("p",null,"A new ",(0,l.kt)("inlineCode",{parentName:"p"},"ResilienceConfiguration")," ",(0,l.kt)("em",{parentName:"p"},"with default values")," is created by providing an identifier for it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'configuration = ResilienceConfiguration.of("identifier");\n')),(0,l.kt)("p",null,"The identifier can be either a string or a class.\nIn the case of the latter, the (full) class name will be used as the identifier.\nThe identifier will be used to apply resilience patterns across ",(0,l.kt)("a",{parentName:"p",href:"#executing-operations"},"multiple invocations to operations"),"."),(0,l.kt)("p",null,"Check ",(0,l.kt)("a",{parentName:"p",href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.html#of-java.lang.String-"},"the Javadoc")," for which patterns and parameters will be applied by default.\nYou can also create a configuration with all patterns disabled:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'configuration = ResilienceConfiguration.empty("identifier");\n')),(0,l.kt)("p",null,"Individual resilience patterns are configured via dedicated builder classes like ",(0,l.kt)("inlineCode",{parentName:"p"},"TimeLimiterConfiguration")," and are added to the configuration via dedicated setters, e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"timeLimiterConfiguration()"),".\nFor details see the list of ",(0,l.kt)("a",{parentName:"p",href:"#resilience-capabilities"},"Resilience Capabilities")," below."),(0,l.kt)("h4",{id:"multi-tenancy"},"Multi Tenancy"),(0,l.kt)("p",null,"The SAP Cloud SDK is capable of applying the different resilience patterns in a tenant and principal aware manner.\nConsider for example the Bulkhead pattern which limits the number of parallel executions.\nIf the operation is tenant-specific then you would probably want to avoid one tenant blocking all others."),(0,l.kt)("p",null,"For this reason, the SAP Cloud SDK ",(0,l.kt)("em",{parentName:"p"},"by default")," isolates resilience patterns based on tenant and principal, if they are available.\nThis strategy can be configured, e.g. for running ",(0,l.kt)("em",{parentName:"p"},"without any isolation")," use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"configuration.isolationMode(ResilienceIsolationMode.NO_ISOLATION);\n")),(0,l.kt)("p",null,"Other than no isolation there are essentially two modes for tenant and/or principal isolation:"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Required"),(0,l.kt)("td",null,"Always isolates on tenant and/or principal level, will throw an exception if no tenant/principal is available")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Optional"),(0,l.kt)("td",null,"Only isolates if tenant and/or principal information is available")))),(0,l.kt)("p",null,"Details can be found on the API reference of ",(0,l.kt)("a",{parentName:"p",href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceIsolationMode.html"},(0,l.kt)("inlineCode",{parentName:"a"},"ResilienceIsolationMode")),"."),(0,l.kt)("h2",{id:"resilience-capabilities"},"Resilience Capabilities"),(0,l.kt)("p",null,"The following resilience patterns are available and can be configured in a Resilience Configuration:"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Timeout"),(0,l.kt)("td",null,(0,l.kt)("em",null,(0,l.kt)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.TimeLimiterConfiguration.html"},"TimeLimiterConfiguration"))),(0,l.kt)("td",null,"Limit how long an operation may run before it should be interrupted")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Rate Limiter"),(0,l.kt)("td",null,(0,l.kt)("em",null,"RateLimiterConfiguration")),(0,l.kt)("td",null,"Limit the number of operations accepted in a window of time")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Retry"),(0,l.kt)("td",null,(0,l.kt)("em",null,(0,l.kt)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.RetryConfiguration.html"},"RetryConfiguration"))),(0,l.kt)("td",null,"Retry a failed operation a limited amount of times before failing")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Circuit Breaker"),(0,l.kt)("td",null,(0,l.kt)("em",null,(0,l.kt)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.CircuitBreakerConfiguration.html"},"CircuitBreakerConfiguration"))),(0,l.kt)("td",null,"Reject attempts if too many failures occurred in the past")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Bulkhead ",(0,l.kt)("p",null,"(also known as Shed Load or Load Shedding)")),(0,l.kt)("td",null,(0,l.kt)("em",null,(0,l.kt)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.BulkheadConfiguration.html"},"BulkheadConfiguration"))),(0,l.kt)("td",null,"Limit how many instances of this operation may run in parallel")))),(0,l.kt)("p",null,"You can find good explanations on how the individual patterns behave on the ",(0,l.kt)("a",{parentName:"p",href:"https://resilience4j.readme.io/docs/"},"documentation of resilience4j")," which the SAP Cloud SDK uses under the hood to perform resilient operations."),(0,l.kt)("p",null,"Be aware that the patterns interact with each other.\nThey are applied in the following order:"),(0,l.kt)("p",null,"Fallback ( Retry ( CircuitBreaker ( RateLimiter ( TimeLimiter ( Bulkhead ( Function ) ) ) ) ) )"),(0,l.kt)("p",null,"If you read from right to left, it shows you the order in which the aspects will be applied.\nFor example, ",(0,l.kt)("inlineCode",{parentName:"p"},"Fallbacks")," are called last while ",(0,l.kt)("inlineCode",{parentName:"p"},"Bulkhead")," is the first aspect applied.\nHence, exceptions are also propagated from right to left."),(0,l.kt)("p",null,"Based on the order, the following inferences (not exhaustive) can be made:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Every timeout will trigger a retry, if configured."),(0,l.kt)("li",{parentName:"ul"},"Only if all retries failed the fallback function will be considered.")),(0,l.kt)("p",null,"You can get more details in the Resilience4j ",(0,l.kt)("a",{parentName:"p",href:"https://resilience4j.readme.io/docs/getting-started-3#aspect-order"},"official documentation.")))}h.isMDXComponent=!0}}]);