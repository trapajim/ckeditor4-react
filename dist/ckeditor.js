!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.CKEditor=e(require("react")):t.CKEditor=e(t.React)}(window,function(n){return function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,n){t.exports=n(3)()},function(t,e){t.exports=n},function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),r=n(0),u=n.n(r);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){function n(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(e=f(this,p(n).call(this,t))).element=null,e.editor=null,e}var e,o,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(n,i.a.Component),e=n,(o=[{key:"componentDidMount",value:function(){this.editor=this._initEditor()}},{key:"componentWillUnmount",value:function(){this._destroyEditor()}},{key:"componentDidUpdate",value:function(t){this.editor&&t.data!==this.props.data&&this.editor.getData()!==this.props.data&&this.editor.setData(this.props.data)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{ref:function(t){return e.element=t}})}},{key:"_initEditor",value:function(){var t="inline"!==this.props.type?"replace":"inline",e=CKEDITOR[t](this.element,this.props.config);return this.props.data&&e.setData(this.props.data),e}},{key:"_destroyEditor",value:function(){this.editor.destroy(),this.editor=null,this.element=null}}])&&c(e.prototype,o),r&&c(e,r),n}();l.propTypes={type:u.a.oneOf(["classic","inline"]),data:u.a.string,config:u.a.object},l.defaultProps={type:"classic",data:"",config:{}},e.default=l},function(t,e,n){"use strict";var a=n(4);function o(){}t.exports=function(){function t(t,e,n,o,r,i){if(i!==a){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}var n={array:t.isRequired=t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=o,n.PropTypes=n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]).default});
//# sourceMappingURL=ckeditor.js.map