!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define("react-floating-labels",["React","styled-components"],e):"object"==typeof exports?exports["react-floating-labels"]=e(require("react"),require("styled-components")):t["react-floating-labels"]=e(t.React,t["styled-components"])}(window,(function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=8)}([function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var a,c,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<t.length;a++){var c=t[a];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),e.push(c))}},e}},function(t,e,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function c(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function s(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(y(r.parts[a],e))}else{for(var c=[];a<r.parts.length;a++)c.push(y(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:c}}}}function l(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var o=a(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var u,f=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function h(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&t.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var d=null,b=0;function y(t,e){var n,r,o;if(e.singleton){var i=b++;n=d||(d=l(e)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=l(e),r=h.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=c(t,e);return s(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i],l=o[a.id];l&&(l.refs--,r.push(l))}t&&s(c(t,e),e);for(var u=0;u<r.length;u++){var f=r[u];if(0===f.refs){for(var p=0;p<f.parts.length;p++)f.parts[p]();delete o[f.id]}}}}},function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".floating-input{font-size:1em;padding:0.9em 0.5em 0.4em 0.5em;font-family:inherit;border:solid #6c6c6c 1px;border-radius:5px}.floating-label{font-size:1em;display:block;position:absolute;line-height:1;left:0.5em;top:0.75em;font-family:inherit;cursor:text;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;transition:top 0.2s linear,left 0.2s linear, font-size 0.2s linear}.floating-label.floating{left:calc(0.5em / 0.6);top:0.3em;font-size:calc(0.6 * 1em)}.floating-input:active+.floating-label,.floating-input:focus+.floating-label,.floating-input.dirty+.floating-label{left:calc(0.5em / 0.6);top:0.3em;font-size:calc(0.6 * 1em)}.month .floating-input{color:transparent}.month .floating-label{top:calc(50% - 0.5rem)}.month .floating-input:active,.month .floating-input:focus,.month .floating-input.dirty{color:inherit}.month .floating-input:active+.floating-label,.month .floating-input:focus+.floating-label,.month .floating-input.dirty+.floating-label{left:calc(0.5em / 0.6);top:0.3em;font-size:calc(0.6 * 1em)}\n",""])},function(t,e,n){var r=n(7);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"",""])},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i);n(4);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n    position: relative;\n"]);return d=function(){return t},t}var b=a.a.div(d()),y=function(t){function e(t){var n,r,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,n=!(i=f(e).call(this,t))||"object"!==c(i)&&"function"!=typeof i?p(r):i;var a=t.value,s=!1;return a&&a.length>0&&(s=!0),n.state={dirty:s},n.onDirty=n.onDirty.bind(p(n)),n.inpField=o.a.createRef(),n.delegateFocus=n.delegateFocus.bind(p(n)),n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){var t=this.props.value;t&&t.length>0&&this.setState({dirty:!0})}},{key:"onDirty",value:function(t){var e=t.target.value;e&&e.length>0&&!this.state.dirty?this.setState({dirty:!0}):(!e||e.length<=0)&&this.state.dirty&&this.setState({dirty:!1}),this.props.onChange&&this.props.onChange(t)}},{key:"delegateFocus",value:function(){this.inpField.current.focus()}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.inputClass,r=t.labelClass,i=(t.ref,t.children),a=l(t,["className","inputClass","labelClass","ref","children"]);return/(submit|checkbox|image|hidden|file)/i.test(this.props.type)?o.a.createElement("input",s({},a,{className:n||""})):o.a.createElement(b,{className:"".concat(e||""," \n      ").concat(/month/i.test(this.props.type)?"month":"")},o.a.createElement("input",s({className:"floating-input \n      ".concat(n||"")},a,{ref:this.inpField,onChange:this.onDirty})),o.a.createElement("label",{onClick:this.delegateFocus,className:"floating-label \n      ".concat(r||""," \n      ").concat(this.state.dirty?"floating":""),htmlFor:this.props.id?this.props.id:""},this.props.label),i)}}])&&u(n.prototype,r),i&&u(n,i),e}(o.a.Component);n(6);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function g(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(){var t=function(t,e){e||(e=t.slice(0));return Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}(["\n    position: relative;\n    resize: none;\n"]);return x=function(){return t},t}var C=a.a.textarea(x()),P=function(t){function e(t){var n,r,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,(n=!(i=w(e).call(this,t))||"object"!==m(i)&&"function"!=typeof i?j(r):i).state={rows:2,diff:0},n.checkResize=n.checkResize.bind(j(n)),n.areaRef=o.a.createRef(),n}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(e,t),n=e,(r=[{key:"componentDidMount",value:function(){var t=this,e=this.areaRef.current.clientHeight;this.setState({rows:2},(function(n){var r=t.areaRef.current.clientHeight-e;t.setState({rows:1,diff:r})}))}},{key:"checkResize",value:function(t){var e=this,n=t.currentTarget,r=(n.value.match(/\n|\r\n|\r/g)||[]).length;this.setState({rows:r+1},(function(){var t=Math.ceil((n.scrollHeight-n.clientHeight)/e.state.diff),r=e.state.rows+t;e.setState({rows:r<=e.props.maxRows?r:e.props.maxRows})})),this.props.onChange&&this.props.onChange(t)}},{key:"render",value:function(){var t=this.props,e=(t.ref,t.rows,t.onChange,t.children,g(t,["ref","rows","onChange","children"]));return o.a.createElement(C,v({rows:this.state.rows,ref:this.areaRef,onChange:this.checkResize},e))}}])&&O(n.prototype,r),i&&O(n,i),e}(o.a.Component);n.d(e,"FloatingInput",(function(){return y})),n.d(e,"GrowingTextarea",(function(){return P}))}])}));