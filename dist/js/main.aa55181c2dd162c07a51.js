(self.webpackChunkreactproject=self.webpackChunkreactproject||[]).push([[179],{475:function(e,t,n){"use strict";var r=n(294),o=n(184),i=n.n(o);n(630);t.Z=function(e){return r.createElement("i",{className:i()("iconfont",e.name,e.className),style:e.style,onClick:function(){return e.onClick&&e.onClick()}})}},966:function(e,t,n){"use strict";var r=n(294),o=n(935),i=n(692),c=n(923),u=n(489);n(198);function l(e){console.log(c.Z),o.render(r.createElement(i.zt,c.Z,e),document.getElementById("app"))}l((0,u.Z)()),e.hot.accept(function(){l((0,n(489).Z)())})},489:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(294),o=n(727),i=n(977);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=s(n);return e=r?(e=s(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==c(e)&&"function"!=typeof e?f(t):e}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(n){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=h(n);return e=r?(e=h(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==p(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n(475).Z;var v=(0,r.lazy)(function(){return n.e(207).then(n.bind(n,207))}),d=(0,r.lazy)(function(){return n.e(702).then(n.bind(n,702))}),g=(0,r.lazy)(function(){return n.e(327).then(n.bind(n,327))}),O=function(){return r.createElement(o.VK,null,r.createElement("div",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(o.rU,{to:"/"},"首页")),r.createElement("li",null,r.createElement(o.rU,{to:"/page1"},"Page1")),r.createElement("li",null,r.createElement(o.rU,{to:"/resource"},"ResoucePage"))),r.createElement(r.Suspense,{fallback:r.createElement("div",null,"Loading . . . ")},r.createElement(i.rs,null,r.createElement(i.AW,{exact:!0,path:"/",component:v}),r.createElement(i.AW,{path:"/page1",component:d}),r.createElement(i.AW,{path:"/resource",component:g})))))}},923:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o,i,c,u,l=n(949);function a(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(n,r,e,t,o){var i={};return Object.keys(t).forEach(function(e){i[e]=t[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=e.slice().reverse().reduce(function(e,t){return t(n,r,e)||e},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(n,r,i),i=null),i}var s={pageStore:new(o=r((n=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"name",o,this),a(this,"age",i,this),a(this,"setName",c,this),a(this,"setAge",u,this),(0,l.rC)(this)}var t,n,r;return t=e,(n=[{key:"welcome",get:function(){return"欢迎来到上海，".concat(this.name,",您现在").concat(this.age,"啦")}}])&&f(t.prototype,n),r&&f(t,r),e}()).prototype,"name",[l.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),i=r(n.prototype,"age",[l.LO],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),c=r(n.prototype,"setName",[l.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){console.log(e),t.name=e}}}),u=r(n.prototype,"setAge",[l.aD],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var t=this;return function(e){return t.age=e}}}),r(n.prototype,"welcome",[l.Fl],Object.getOwnPropertyDescriptor(n.prototype,"welcome"),n.prototype),n)}},198:function(e,t,n){"use strict";n=n(783)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},630:function(e,t,n){"use strict";n=n(783)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)}},function(e){"use strict";e.O(0,[216],function(){return e(e.s=966)});e.O()}]);