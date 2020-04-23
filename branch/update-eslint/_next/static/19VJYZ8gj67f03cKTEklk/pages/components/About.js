(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"+wNj":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return a}))},"90Tf":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n("cxan"),o=n("HbGN"),l=n("ERkP"),r=n.n(l),c=n("ZVZ0"),i={umd:{polyfill:[274.506,83.694],"no-polyfill":[233.591,66.665]},es:{polyfill:329.842,"no-polyfill":318.762}},s=n("RCB2"),p=(r.a.createElement,{name:"Usage"}),u={meta:p},b="wrapper";function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.a)(b,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("p",null,"This page aims to provide a quick overview of how the react library is bundled and how to consume it."),Object(c.a)("h2",{id:"how-are-neptune-components-bundled"},"How are Neptune Components Bundled?"),Object(c.a)("p",null,"Currently the library gets bundled in two different formats: UMD and ES."),Object(c.a)("p",null,"This choice has been made keeping in mind the different scenarios where the library is used\nand trying to maximize the compatibility with all the possible consumers' setup."),Object(c.a)("h4",{id:"umd---universal-module-definition"},"UMD - Universal Module Definition"),Object(c.a)("p",null,"This style is a combination of CommonJS and AMD and it's meant to be compatible with both browsers and server environments (Node)."),Object(c.a)("p",null,"This bundle gets generated using rollup."),Object(c.a)("p",null,"Its size can be checked in the table below or via CI jobs details.\nHere's an ",Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"https://bundlesize-store.now.sh/build?info=%7B%22files%22%3A%5B%7B%22maxSize%22%3A102400%2C%22path%22%3A%22.%2Fbuild%2Fumd%2Fpolyfill%2Fmain.js%22%2C%22size%22%3A82447%2C%22compression%22%3A%22gzip%22%7D%2C%7B%22maxSize%22%3A102400%2C%22path%22%3A%22.%2Fbuild%2Fumd%2Fno-polyfill%2Fmain.js%22%2C%22size%22%3A65367%2C%22compression%22%3A%22gzip%22%7D%5D%2C%22repo%22%3A%22transferwise%2Fneptune-web%22%2C%22branch%22%3A%22master%22%2C%22commit_message%22%3A%22%22%2C%22sha%22%3A%2200d2871001b71f3ec166853471b5ace51574ef48%22%7D"}),"example")),Object(c.a)("h4",{id:"es"},"ES"),Object(c.a)("p",null,"It uses the standardized ES module format for code."),Object(c.a)("p",null,"This bundle is generated using babel and it consists of a bunch of transpiled files that follow exactly the same structure as the src folder."),Object(c.a)("h2",{id:"how-do-i-know-what-type-of-bundle-i-should-use"},"How do I know what type of bundle I should use?"),Object(c.a)("p",null,"The bundled files are stored inside the ",Object(c.a)("em",{parentName:"p"},"build")," folder."),Object(c.a)("p",null,"There are two different types of bundles as explained above and each type is provided as polyfilled and not polyfilled version."),Object(c.a)("p",null,"By default the files provided will be the ",Object(c.a)("strong",{parentName:"p"},"polyfilled")," ones. It's possible to double check this by checking the package.json of component's folder where:"),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{}),'"main": "./build/umd/polyfill/main.js",\n"module": "./build/es/polyfill/index.js",\n')),Object(c.a)("p",null,"We decided to setup this default because the components should work straight out of the box in all the ",Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"https://browserl.ist/?q=Chrome+%3E%3D71%2C+Firefox+%3E%3D71%2C+iOS+%3E%3D11%2C+Safari+%3E%3D11.1%2C+IE+11%2C+Opera+%3E%3D65%2C+Edge+%3E%3D18"}),"supported browsers"),"."),Object(c.a)("p",null,"We do appreciate though that some app may provide their own polyfills so there's an option for consuming the library without bloating the final bundle."),Object(c.a)("h2",{id:"how-can-i-import-the-type-of-bundle-i-want"},"How can I import the type of bundle I want?"),Object(c.a)("p",null,"In order to import a different bundle in most bundler you can setup a resolve that will switch all your imports to a particular folder."),Object(c.a)("p",null,"Here's an example of webpack alias:"),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{}),"  resolve: {\n    alias: {\n      '@transferwise/components': require.resolve(\n        '@transferwise/components/build/es/no-polyfill',\n      ),\n    },\n  },\n")),Object(c.a)("p",null,"The bundles can be also accessed directly but we discurage this practice as the structure can change in future or be removed."),Object(c.a)("p",null,"By default when importing this"),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{}),'import { Button, Upload } from "@transferwise/components";\n')),Object(c.a)("p",null,"you will get :"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Polyfilled UMD if your bundler doesn't support tree-shaking")),Object(c.a)("p",null,"or"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Polyfilled ES if your bundler supports tree-shaking")),Object(c.a)("p",null,"To give a quick overview of the current build folder please check the following graph:"),Object(c.a)("pre",{className:"language-html"},Object(c.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"components\n\u2514\u2500\u2500 build/\n      \u251c\u2500\u2500 umd/\n      \u2502   \u2514\u2500\u2500 polyfill\n      \u2502   \u2502     \u2514\u2500\u2500 main.js\n      \u2502   \u2514\u2500\u2500 no-polyfill\n      \u2502         \u2514\u2500\u2500 main.js\n      \u2502\n      \u2514\u2500\u2500 es/\n          \u2514\u2500\u2500 polyfill\n          \u2502     \u251c\u2500\u2500 Accordion\n          \u2502     \u251c\u2500\u2500 Button\n          \u2502     \u251c\u2500\u2500 ...\n          \u2502     \u2514\u2500\u2500 index.js\n          \u2514\u2500\u2500 no-polyfill\n                \u251c\u2500\u2500 Accordion\n                \u251c\u2500\u2500 Button\n                \u251c\u2500\u2500 ...\n                \u2514\u2500\u2500 index.js\n\n")),Object(c.a)("table",{className:"docs-table table table-condensed"},Object(c.a)("thead",null,Object(c.a)("tr",null,Object(c.a)("th",null,"Bundle"),Object(c.a)("th",null,"Polyfill"),Object(c.a)("th",null,"Size"),Object(c.a)("th",null,"Tree-Shake"),Object(c.a)("th",null,"Usage"))),Object(c.a)("tbody",null,Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"UMD (default)"),Object(c.a)("td",null,Object(c.a)("span",{class:"tw-checkbox-check glyphicon glyphicon-ok"})),Object(c.a)("td",null,Object(c.a)(s.a,{bundleSize:i.umd.polyfill[0],mdxType:"PrintBundleSize"})," (gzip:~",Object(c.a)(s.a,{bundleSize:i.umd.polyfill[1],mdxType:"PrintBundleSize"}),")"),Object(c.a)("td",null,Object(c.a)("span",{class:"tw-checkbox-check glyphicon glyphicon-remove"})),Object(c.a)("td",null,"Apps don't need to provide polyfills.")),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"UMD"),Object(c.a)("td",null,Object(c.a)("span",{class:"tw-checkbox-check glyphicon glyphicon-remove"})),Object(c.a)("td",null,Object(c.a)(s.a,{bundleSize:i.umd["no-polyfill"][0],mdxType:"PrintBundleSize"})," (gzip:~",Object(c.a)(s.a,{bundleSize:i.umd["no-polyfill"][1],mdxType:"PrintBundleSize"}),")"),Object(c.a)("td",null,Object(c.a)("span",{class:"tw-checkbox-check glyphicon glyphicon-remove"})),Object(c.a)("td",null,"Apps need to provide polyfills.")),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"ES (default)"),Object(c.a)("td",null,Object(c.a)("span",{class:"tw-checkbox-check glyphicon glyphicon-ok"})),Object(c.a)("td",null,Object(c.a)(s.a,{bundleSize:i.es.polyfill,mdxType:"PrintBundleSize"})),Object(c.a)("td",null,Object(c.a)("span",{class:"tw-checkbox-check glyphicon glyphicon-ok"})),Object(c.a)("td",null,"Apps don't need to provide polyfills.")),Object(c.a)("tr",null,Object(c.a)("th",{scope:"row"},"ES"),Object(c.a)("td",null,Object(c.a)("span",{class:"tw-checkbox-check glyphicon glyphicon-remove"})),Object(c.a)("td",null,Object(c.a)(s.a,{bundleSize:i.es["no-polyfill"],mdxType:"PrintBundleSize"})),Object(c.a)("td",null,Object(c.a)("span",{class:"tw-checkbox-check glyphicon glyphicon-ok"})),Object(c.a)("td",null,"Apps need to provide polyfills.")))),Object(c.a)("p",null,"Here there is a an example of how a ES file will look like with and without polyfills"),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Original file:")),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{}),"class Checkbox {\n  a = new Promise();\n}\n\nexport default Checkbox;\n")),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"Without Polyfill:")),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{}),'import _classCallCheck from "@babel/runtime/helpers/classCallCheck";\nimport _defineProperty from "@babel/runtime/helpers/defineProperty";\n\nvar Checkbox = function Checkbox() {\n  _classCallCheck(this, Checkbox);\n\n  _defineProperty(this, "a", new Promise());\n};\n\nexport default Checkbox;\n')),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},"With Polyfill:")),Object(c.a)("pre",null,Object(c.a)("code",Object(a.a)({parentName:"pre"},{}),'import "core-js/modules/es.object.to-string";\nimport "core-js/modules/es.promise";\nimport _classCallCheck from "@babel/runtime/helpers/classCallCheck";\nimport _defineProperty from "@babel/runtime/helpers/defineProperty";\n\nvar Checkbox = function Checkbox() {\n  _classCallCheck(this, Checkbox);\n\n  _defineProperty(this, "a", new Promise());\n};\n\nexport default Checkbox;\n')),Object(c.a)("p",null,"As per babel ",Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"https://babeljs.io/docs/en/babel-preset-env"}),"documentation")," .\n",Object(c.a)("inlineCode",{parentName:"p"},"We take advantage of the fact that a bundler will load the same polyfill only once.")),Object(c.a)("p",null,"If you use the not polyfilled version you have to include all polyfills manually to make sure your components behave as expected in the browser you are supporting."),Object(c.a)("p",null,"The polyfills are injected automatically by babel-plugin-transform-runtime based on .browserslistrc's query 'Chrome >=71, Firefox >=71, iOS >=11, Safari >=11.1, IE 11, Opera >=65, Edge >=18'. This query will cover this ",Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"https://browserl.ist/?q=Chrome+%3E%3D71%2C+Firefox+%3E%3D71%2C+iOS+%3E%3D11%2C+Safari+%3E%3D11.1%2C+IE+11%2C+Opera+%3E%3D65%2C+Edge+%3E%3D18"}),"browsers")),Object(c.a)("h1",{id:"dev"},"Dev"),Object(c.a)("p",null,"Neptune-web provides two local environments. ",Object(c.a)("strong",{parentName:"p"},Object(c.a)("em",{parentName:"strong"},"DEV"))," and ",Object(c.a)("strong",{parentName:"p"},Object(c.a)("em",{parentName:"strong"},"DOCS")),"."),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},Object(c.a)("em",{parentName:"strong"},"DEV"))," is storybook playground and its use is recommended for react components' development."),Object(c.a)("p",null,Object(c.a)("strong",{parentName:"p"},Object(c.a)("em",{parentName:"strong"},"DOCS"))," is a nextJs based environment used to document components or css changes."),Object(c.a)("h2",{id:"how-can-i-test-changes-to-neptune-web"},"How can I test changes to neptune-web?"),Object(c.a)("p",null,"To test dev changes and quickly prototype components storybook is the recommended playground. "),Object(c.a)("p",null,"The stories will be available only locally and they won't be deployed in any env."),Object(c.a)("p",null,"Please check ",Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/transferwise/neptune-web/blob/master/README.md"}),"README")," for detailed instructions on how to run this playground."),Object(c.a)("h2",{id:"how-can-i-run-the-docs-locally"},"How can I run the docs locally?"),Object(c.a)("p",null,"NextJS Docs is the env used to document your changes and make them available to all consumers. "),Object(c.a)("p",null,"Please check ",Object(c.a)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/transferwise/neptune-web/blob/master/README.md"}),"README")," for detailed instructions on how to run this environment."),Object(c.a)("h2",{id:"in-what-different-ways-do-i-need-to-test-neptune-web"},"In what different ways do I need to test neptune-web?"),Object(c.a)("p",null,"Whenever you add a change you should check :"),Object(c.a)("ol",null,Object(c.a)("li",{parentName:"ol"},"All you changes should pass the jest tests."),Object(c.a)("li",{parentName:"ol"},"Your bundle works in NextJS app."),Object(c.a)("li",{parentName:"ol"},"Your bundle works in a CRA app."),Object(c.a)("li",{parentName:"ol"},"Your changes work in the supported browser.")),Object(c.a)("p",null,"We are looking into automating these tests but for now we have to perform them manually."),Object(c.a)("h2",{id:"how-can-i-test-a-production-build-locally"},"How can I test a production build locally?"),Object(c.a)("p",null,"It would be ideal to use yarn link and link the new bundle to a fresh nextJS and a CRA app and check that both of them works"),Object(c.a)("h2",{id:"when--how-should-i-update-the-docs"},"When / how should I update the docs?"),Object(c.a)("p",null,"Whenever a component is built or a change is introduced it would be good to track these change inside the docs."))}d.isMDXComponent=!0},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("+wNj");function o(e,t){if(null==e)return{};var n,o,l=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}},Km8e:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},RCB2:function(e,t,n){"use strict";var a=n("ERkP"),o=n.n(a).a.createElement;t.a=function(e){var t=e.bundleSize;return o("small",null,t," Kb")}},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("ERkP"),o=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):c({},t,{},e)),n},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(r,".").concat(d)]||u[d]||b[d]||l;return n?o.a.createElement(h,c({ref:t},s,{components:n})):o.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"===typeof e?e:a,r[1]=c;for(var s=2;s<l;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},rG6U:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/About",function(){return n("90Tf")}])}},[["rG6U",0,1]]]);