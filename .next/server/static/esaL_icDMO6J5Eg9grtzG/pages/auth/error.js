module.exports=function(e){var t=require("../../../../ssr-module-cache.js");function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}},u=!0;try{e[n].call(o.exports,o,o.exports,r),u=!1}finally{u&&delete t[n]}return o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/_next/",r(r.s=3)}({"+oT+":function(e,t,r){var n=r("eVuF");function o(e,t,r,o,u,i,a){try{var c=e[i](a),f=c.value}catch(e){return void r(e)}c.done?t(f):n.resolve(f).then(o,u)}e.exports=function(e){return function(){var t=this,r=arguments;return new n(function(n,u){var i=e.apply(t,r);function a(e){o(i,n,u,a,c,"next",e)}function c(e){o(i,n,u,a,c,"throw",e)}a(void 0)})}}},"/+P4":function(e,t,r){var n=r("Bhuq"),o=r("TRZx");function u(t){return e.exports=u=o?n:function(e){return e.__proto__||n(e)},u(t)}e.exports=u},"/+oN":function(e,t){e.exports=require("core-js/library/fn/object/get-prototype-of")},"/HRN":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},3:function(e,t,r){e.exports=r("H5iX")},"5Uuq":function(e,t,r){var n=r("Jo+v"),o=r("hfKm");e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var u=o&&n?n(e,r):{};u.get||u.set?o(t,r,u):t[r]=e[r]}return t.default=e,t}},"9Pu4":function(e,t){e.exports=require("@material-ui/core/styles")},Bhuq:function(e,t,r){e.exports=r("/+oN")},H5iX:function(e,t,r){"use strict";var n=r("KI45");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.default}});var o=n(r("X/uL"))},"Jo+v":function(e,t,r){e.exports=r("Z6Kq")},K47E:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},KI45:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},N9n2:function(e,t,r){var n=r("SqZg"),o=r("vjea");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=n(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},SqZg:function(e,t,r){e.exports=r("o5io")},TRZx:function(e,t,r){e.exports=r("Wk4r")},TUA0:function(e,t){e.exports=require("core-js/library/fn/object/define-property")},UVoM:function(e,t){e.exports=require("@material-ui/core/Typography")},WaGi:function(e,t,r){var n=r("hfKm");function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),n(e,o.key,o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}},Wk4r:function(e,t){e.exports=require("core-js/library/fn/object/set-prototype-of")},"X/uL":function(e,t,r){"use strict";var n=r("5Uuq");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r("9Pu4"),u=n(r("kyug")),i=(0,o.withStyles)(u.styles)(u.default);i.getInitialProps=u.default.getInitialProps;var a=i;t.default=a},XVgq:function(e,t,r){e.exports=r("gHn/")},YLtl:function(e,t){e.exports=require("lodash")},Z6Kq:function(e,t){e.exports=require("core-js/library/fn/object/get-own-property-descriptor")},Z7t5:function(e,t,r){e.exports=r("vqFK")},ZDA2:function(e,t,r){var n=r("iZP3"),o=r("K47E");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},aC71:function(e,t){e.exports=require("core-js/library/fn/promise")},cDcd:function(e,t){e.exports=require("react")},cu1A:function(e,t){e.exports=require("regenerator-runtime")},eVuF:function(e,t,r){e.exports=r("aC71")},"gHn/":function(e,t){e.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(e,t,r){e.exports=r("TUA0")},iZP3:function(e,t,r){var n=r("XVgq"),o=r("Z7t5");function u(e){return(u="function"==typeof o&&"symbol"==typeof n?function(e){return typeof e}:function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":typeof e})(e)}function i(t){return"function"==typeof o&&"symbol"===u(n)?e.exports=i=function(e){return u(e)}:e.exports=i=function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":u(e)},i(t)}e.exports=i},k004:function(e,t){e.exports=require("react-intl")},kyug:function(e,t,r){"use strict";(function(e){var n=r("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var o=n(r("ln6h")),u=n(r("+oT+")),i=n(r("/HRN")),a=n(r("WaGi")),c=n(r("ZDA2")),f=n(r("/+P4")),s=n(r("N9n2")),l=n(r("cDcd")),p=(n(r("rf6O")),r("k004")),d=n(r("UVoM"));t.styles=function(e){return{layout:{width:"100%",flex:1,padding:e.main.spacing,display:"flex",justifyContent:"center",alignItems:"center"},form:{width:"100%",maxWidth:700},title:{borderBottom:"1px dotted ".concat(e.palette.text.primary)},hint:{marginTop:"4rem",marginLeft:"5rem"}}};var y=function(t){function r(){return(0,i.default)(this,r),(0,c.default)(this,(0,f.default)(r).apply(this,arguments))}return(0,s.default)(r,t),(0,a.default)(r,[{key:"render",value:function(){var t=this,r="OAUTH_ERROR_GENERIC",n=[];return"signin"===this.props.action&&"oauth"===this.props.type&&(r="OAUTH_ERROR_ACCOUNT_EXISTS",n.push({title:"OAUTH_ERROR_ACCOUNT_EXISTS_TITLE1",body:"OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE1"}),n.push({title:"OAUTH_ERROR_ACCOUNT_EXISTS_TITLE2",body:"OAUTH_ERROR_ACCOUNT_EXISTS_MESSAGE2"})),l.default.createElement("div",{className:this.props.classes.layout},l.default.createElement("div",{className:this.props.classes.form},l.default.createElement(d.default,{variant:"h4",classes:{root:this.props.classes.title}},l.default.createElement(p.FormattedMessage,{id:"TITLE_OAUTH_ERROR"})),l.default.createElement("p",null,l.default.createElement(p.FormattedMessage,{id:r})),e.map(n,function(e,r){return l.default.createElement("div",{key:"hint-".concat(r),className:t.props.classes.hint},l.default.createElement(d.default,{variant:"h5"},l.default.createElement(p.FormattedMessage,{id:e.title})),l.default.createElement(d.default,{variant:"body1"},l.default.createElement(p.FormattedMessage,{id:e.body})))})))}}],[{key:"getInitialProps",value:function(){var e=(0,u.default)(o.default.mark(function e(t){var r;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,e.abrupt("return",{action:r.action,type:r.type,service:r.service});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),r}(l.default.Component);t.default=y}).call(this,r("YLtl"))},ln6h:function(e,t,r){e.exports=r("cu1A")},o5io:function(e,t){e.exports=require("core-js/library/fn/object/create")},rf6O:function(e,t){e.exports=require("prop-types")},vjea:function(e,t,r){var n=r("TRZx");function o(t,r){return e.exports=o=n||function(e,t){return e.__proto__=t,e},o(t,r)}e.exports=o},vqFK:function(e,t){e.exports=require("core-js/library/fn/symbol")}});