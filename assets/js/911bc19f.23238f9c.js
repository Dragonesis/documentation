(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[374],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2289:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={sidebar_position:3,sidebar_label:"Low coupling"},l={unversionedId:"guides/low-coupling",id:"guides/low-coupling",isDocsHomePage:!1,title:"\u0421\u043b\u0430\u0431\u0430\u044f \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0438 \u0441\u0438\u043b\u044c\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u043d\u043e\u0441\u0442\u044c",description:"\u041c\u043e\u0434\u0443\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u043b\u0430\u0434\u0430\u044e\u0449\u0438\u0435 \u0441\u0438\u043b\u044c\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u043d\u043e\u0441\u0442\u044c\u044e (\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0439 \u0447\u0435\u0442\u043a\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438) \u0438 \u0441\u043b\u0430\u0431\u043e\u0439 \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u044e (\u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u043c\u0435\u043d\u0435\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0435 \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439)",source:"@site/../docs/guides/low-coupling.md",sourceDirName:"guides",slug:"/guides/low-coupling",permalink:"/docs/guides/low-coupling",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/../docs/guides/low-coupling.md",version:"current",sidebar_label:"Low coupling",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Low coupling"},sidebar:"tutorialSidebar",previous:{title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f \u0441 v1",permalink:"/docs/guides/migration-from-v1"},next:{title:"Glossary",permalink:"/docs/reference/glossary"}},s=[{value:"\u041a\u0430\u043a \u0434\u043e\u0441\u0442\u0438\u0447\u044c \u0441\u043b\u0430\u0431\u043e\u0439 \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438",id:"\u043a\u0430\u043a-\u0434\u043e\u0441\u0442\u0438\u0447\u044c-\u0441\u043b\u0430\u0431\u043e\u0439-\u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438",children:[{value:"\u0412 UI - \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",id:"\u0432-ui---\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",children:[]},{value:"\u041d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f - \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0444\u0438\u0447 \u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439",id:"\u043d\u0430-\u0443\u0440\u043e\u0432\u043d\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f---\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f-\u0444\u0438\u0447-\u0438-\u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439",children:[]},{value:"\u0418\u0442\u043e\u0433\u043e",id:"\u0438\u0442\u043e\u0433\u043e",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u041c\u043e\u0434\u0443\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u043e\u0431\u043b\u0430\u0434\u0430\u044e\u0449\u0438\u0435 ",(0,o.kt)("strong",{parentName:"p"},"\u0441\u0438\u043b\u044c\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u043d\u043e\u0441\u0442\u044c\u044e")," (\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0439 \u0447\u0435\u0442\u043a\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438) \u0438 ",(0,o.kt)("strong",{parentName:"p"},"\u0441\u043b\u0430\u0431\u043e\u0439 \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u044e")," (\u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u043c\u0435\u043d\u0435\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0435 \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439)"),(0,o.kt)("p",null,"\u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438 \u044d\u0442\u043e \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0420\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u043b\u043e\u0438 - \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0432\u043b\u0438\u044f\u043d\u0438\u044f \u0438 \u0441\u043b\u0430\u0439\u0441\u044b - \u043c\u043e\u0434\u0443\u043b\u0438, \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u044e\u0449\u0438\u0435 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435: ",(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/app-splitting"},(0,o.kt)("strong",{parentName:"a"},"\u0420\u0430\u0437\u0431\u0438\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"))))),(0,o.kt)("li",{parentName:"ul"},"\u0422\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0435 \u043a \u043a\u0430\u0436\u0434\u043e\u043c\u0443 \u043c\u043e\u0434\u0443\u043b\u044e - \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043e\u0441\u0442\u0443\u043f\u0430.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435: ",(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/public-api"},(0,o.kt)("strong",{parentName:"a"},"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0435 API \u043c\u043e\u0434\u0443\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"))))),(0,o.kt)("li",{parentName:"ul"},'\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439 \u043d\u0430 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 - \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442 "\u043d\u0438\u0436\u0435\u043b\u0435\u0436\u0430\u0449\u0438\u0445" \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u043d\u043e \u043d\u0435 \u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u0441 \u0442\u043e\u0433\u043e \u0436\u0435 \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u0433\u043e \u0441\u043b\u043e\u044f.',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435: ",(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/cross-communication"},(0,o.kt)("strong",{parentName:"a"},"\u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f")))))),(0,o.kt)("h2",{id:"\u043a\u0430\u043a-\u0434\u043e\u0441\u0442\u0438\u0447\u044c-\u0441\u043b\u0430\u0431\u043e\u0439-\u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438"},"\u041a\u0430\u043a \u0434\u043e\u0441\u0442\u0438\u0447\u044c \u0441\u043b\u0430\u0431\u043e\u0439 \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),(0,o.kt)("h3",{id:"\u0432-ui---\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"},"\u0412 UI - \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"),(0,o.kt)("p",null,"\u0410\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\u0435 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 UI-\u0444\u0440\u0435\u0439\u043c\u043e\u0432\u043e\u0440\u043a\u043e\u0432 \u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043d\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043a\u0430\u0436\u0434\u044b\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0438 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b, \u0430 \u0442\u0430\u043a\u0436\u0435, \u0437\u0430\u0447\u0430\u0441\u0442\u0443\u044e, \u0441\u043b\u043e\u0442\u044b. \u0422\u0430\u043a\u0430\u044f \u043c\u043e\u0434\u0435\u043b\u044c \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043a\u0430\u043a ",(0,o.kt)("strong",{parentName:"p"},"\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445, \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u043d\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432")," \u0438, \u0442\u0435\u043c \u0441\u0430\u043c\u044b\u043c, \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0442\u044c ",(0,o.kt)("strong",{parentName:"p"},"\u0441\u043b\u0430\u0431\u043e\u0439 \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438")," \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430"),(0,o.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u0430\u043a\u0443\u044e \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u043d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 ",(0,o.kt)("strong",{parentName:"p"},"\u0441\u043f\u0438\u0441\u043a\u0430 \u0441 \u0445\u0435\u0434\u0435\u0440\u043e\u043c:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0441\u043f\u0438\u0441\u043a\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u0430\u043c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u0432\u0438\u0434 \u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0445\u0435\u0434\u0435\u0440\u0430 \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0438\u0441\u043a\u0430, \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0438\u0445 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'interface ListProps {\n    Header: Component;\n    Items: Component;\n}\n\nconst List: Component<ListProps> = ({ Header, Items }) => (\n    <div class="wrapper">\n        {Header}\n        <ul class="...">\n            {Items}\n        </ul>\n    </div>\n)\n\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 ",(0,o.kt)("strong",{parentName:"li"},"\u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c")," \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u0439 \u0445\u0435\u0434\u0435\u0440\u0430 \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0438\u0441\u043a\u0430. \u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0445\u0435\u0434\u0435\u0440\u0430 \u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0441\u043f\u0438\u0441\u043a\u0430 \u043c\u043e\u0433\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u043a\u0430\u043a \u0441\u0432\u043e\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435, \u0442\u0430\u043a \u0438 \u0441\u0432\u043e\u044e \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0443 \u043a \u043b\u044e\u0431\u044b\u043c \u0447\u0430\u0441\u0442\u044f\u043c \u043e\u0431\u0449\u0435\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f - \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0441\u043f\u0438\u0441\u043a\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0438\u0447\u0435\u0433\u043e \u043f\u0440\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0442\u044c, \u0430 \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442 \u044d\u0442\u043e\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<List Header={<FancyHeader />} Items={<ToDoItems />} />\n\n<List Items={<CartItems />} />\n\n<List Header={<FancyHeaderV2 color="red" />} Items={<FancyItems />} />\n\n')),(0,o.kt)("h3",{id:"\u043d\u0430-\u0443\u0440\u043e\u0432\u043d\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f---\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f-\u0444\u0438\u0447-\u0438-\u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439"},"\u041d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f - \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0444\u0438\u0447 \u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439"),(0,o.kt)("p",null,"\u041c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0440\u0430\u0437\u0434\u0435\u043b\u044f\u0442\u044c \u0446\u0435\u043d\u043d\u0443\u044e \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438 - ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/layers#features"},(0,o.kt)("strong",{parentName:"a"},"\u0444\u0438\u0447\u0438 (features)")),", \u0430 \u043b\u043e\u0433\u0438\u043a\u0443, \u043e\u0442\u043d\u043e\u0441\u044f\u0449\u0443\u044e\u0441\u044f \u043a \u0431\u0438\u0437\u043d\u0435\u0441 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c - \u0432 ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/layers#entities"},(0,o.kt)("strong",{parentName:"a"},"\u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 (entities)")),". \u0418 \u0444\u0438\u0447\u0438, \u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 ",(0,o.kt)("strong",{parentName:"p"},"\u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0432\u044b\u0441\u043e\u043a\u043e-\u0441\u0432\u044f\u0437\u043d\u044b\u0435 \u043c\u043e\u0434\u0443\u043b\u0438"),", \u0442.\u0435. \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0430 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 ",(0,o.kt)("strong",{parentName:"p"},"\u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438")," \u0438\u043b\u0438 \u0441\u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0432\u043e\u043a\u0440\u0443\u0433 ",(0,o.kt)("strong",{parentName:"p"},"\u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438.")),(0,o.kt)("p",null,"\u0412\u0441\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0442\u0430\u043a\u0438\u043c\u0438 \u043c\u043e\u0434\u0443\u043b\u044f\u043c\u0438, \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e UI-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c \u0438\u0437 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0432\u044b\u0448\u0435, \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u043a\u0430\u043a ",(0,o.kt)("strong",{parentName:"p"},"\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043c\u043e\u0434\u0443\u043b\u0435\u0439.")),(0,o.kt)("p",null,"\u041d\u0430 \u043f\u0440\u0438\u043c\u0435\u0440\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f-\u0447\u0430\u0442\u0430 \u0441 \u0442\u0430\u043a\u0438\u043c\u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044f\u043c\u0438:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432 \u0438 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u0430"),(0,o.kt)("li",{parentName:"ul"},"\u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0443 \u0441 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u0434\u0440\u0443\u0433\u043e\u043c")),(0,o.kt)("p",null,"\u0412 \u0440\u0430\u043c\u043a\u0430\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u0438, \u044d\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0442\u0430\u043a:"),(0,o.kt)("p",null,"\u0421\u0443\u0449\u043d\u043e\u0441\u0442\u0438"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c (\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f)"),(0,o.kt)("li",{parentName:"ul"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442 (\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432, \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u043c \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u043c)"),(0,o.kt)("li",{parentName:"ul"},"\u041f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0430 (\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0438 \u0438 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 \u043d\u0435\u0439)")),(0,o.kt)("p",null,"\u0424\u0438\u0447\u0438"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0424\u043e\u0440\u043c\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),(0,o.kt)("li",{parentName:"ul"},"\u041c\u0435\u043d\u044e \u0432\u044b\u0431\u043e\u0440\u0430 \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u043a\u0438")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u0421\u0432\u044f\u0436\u0435\u043c \u0432\u0441\u0451 \u044d\u0442\u043e \u0432\u043c\u0435\u0441\u0442\u0435. \u0412 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438, \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430, \u0431\u0443\u0434\u0435\u0442 \u043e\u0434\u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430, \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u043d\u043e\u0432\u0430\u043d \u043d\u0430 \u0441\u043b\u0435\u0433\u043a\u0430 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435 \u0438\u0437 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// page/main/ui.tsx\n<List\n    Header={<ConversationSwitch />}\n    Items={<Messages />}\n    Footer={<MessageInput />}\n/>\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u041c\u043e\u0434\u0435\u043b\u044c \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0431\u0443\u0434\u0435\u0442 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u0430 \u043a\u0430\u043a ",(0,o.kt)("strong",{parentName:"li"},"\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044f \u0444\u0438\u0447 \u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439"),", \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u044d\u0442\u043e\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0444\u0438\u0447\u0438 \u0431\u0443\u0434\u0443\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u043a\u0430\u043a \u0444\u0430\u0431\u0440\u0438\u043a\u0438 \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0447\u0435\u0440\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u044d\u0442\u0438\u0445 \u0444\u0430\u0431\u0440\u0438\u043a.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u041e\u0434\u043d\u0430\u043a\u043e, \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0432 \u0432\u0438\u0434\u0435 \u0444\u0430\u0431\u0440\u0438\u043a\u0438 \u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430 - \u0444\u0438\u0447\u0430 \u043c\u043e\u0436\u0435\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u043d\u0438\u0436\u0435\u043b\u0435\u0436\u0430\u0449\u0438\u0445 \u0441\u043b\u043e\u0435\u0432 \u0438 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'//pages/main/model.ts\nimport { userStore } from "entitites/user"\nimport { conversationStore } from "entities/conversation"\nimport { contactStore } from "entities/contact"\n\nimport { createMessageInput } from "features/message-input"\nimport { createConversationSwitch } from "features/conversation-switch"\n\nimport { beautifiy } from "shared/lib/beautify-text"\n\nexport const { allConversations, setConversation } = createConversationSwitch({\n    contacts: contactStore.allContacts,\n    setConversation: conversationStore.setConversation,\n    currentConversation: conversationStore.conversation,\n    currentUser: userStore.currentUser\n})\n\nexport const { sendMessage, attachFile } = createMessageInput({\n    author: userStore.currentUser\n    send: conversationStore.sendMessage,\n    formatMessage: beautify\n})\n')),(0,o.kt)("h3",{id:"\u0438\u0442\u043e\u0433\u043e"},"\u0418\u0442\u043e\u0433\u043e"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u041c\u043e\u0434\u0443\u043b\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0431\u043b\u0430\u0434\u0430\u0442\u044c ",(0,o.kt)("strong",{parentName:"li"},"\u0441\u0438\u043b\u044c\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u043d\u043e\u0441\u0442\u044c\u044e")," (\u0438\u043c\u0435\u0442\u044c \u043e\u0434\u043d\u0443 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c, \u0440\u0435\u0448\u0430\u0442\u044c \u043e\u0434\u043d\u0443 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443) \u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c ",(0,o.kt)("a",{parentName:"li",href:"../concepts/public-api"},(0,o.kt)("strong",{parentName:"a"},"\u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"))," \u0434\u043e\u0441\u0442\u0443\u043f\u0430"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"\u0421\u043b\u0430\u0431\u0430\u044f \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c")," \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0446\u0438\u044e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 - \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 UI, \u0444\u0438\u0447 \u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439"),(0,o.kt)("li",{parentName:"ol"},"\u0422\u0430\u043a\u0436\u0435, \u0434\u043b\u044f \u0441\u043d\u0438\u0436\u0435\u043d\u0438\u044f \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u043c\u043e\u0434\u0443\u043b\u0438 ",(0,o.kt)("strong",{parentName:"li"},"\u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u0434\u0440\u0443\u0433 \u043e\u0442 \u0434\u0440\u0443\u0433\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0435\u0440\u0435\u0437 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044b")," - \u0442\u0430\u043a \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043e\u0442 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0439 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430")))}c.isMDXComponent=!0}}]);