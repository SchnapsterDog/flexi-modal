!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("flexi-modal",[],n):"object"==typeof exports?exports["flexi-modal"]=n():t["flexi-modal"]=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){e(1);var r=e(6)(e(7),e(85),"data-v-05ff8f16",null);t.exports=r.exports},function(t,n,e){var r=e(2);"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);e(4)("6bcc200e",r,!0)},function(t,n,e){n=t.exports=e(3)(!1),n.push([t.id,'\n.overlay[data-v-05ff8f16] {\r\n  visibility: hidden;\r\n  position: absolute;\r\n  top:0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: rgba(0, 0, 0, .4);\r\n  transition: opacity .3s;\r\n  opacity: 0;\n}\n.overlay[data-v-05ff8f16]:target {\r\n  visibility: visible;\r\n  opacity: 1;\n}\n.modal[data-v-05ff8f16] {\r\n  position: relative;\r\n  width: 700px;\r\n  max-width: 80%;\r\n  background: white;\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 11px rgba(36, 37, 38, 0.08);\r\n  display: flex;\r\n  flex-direction: column;\n}\n.content[data-v-05ff8f16] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\n}\n.modal .close[data-v-05ff8f16] {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 15px;\r\n  color: grey;\r\n  text-decoration: none;\n}\n.overlay .cancel[data-v-05ff8f16] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\n}\n.description[data-v-05ff8f16] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  border-top: #f3ecec solid 1px;\r\n  background-color: #f7f7f7;\n}\n.custom-padding[data-v-05ff8f16] {\r\n  padding: 10px 40px;\n}\n.toggle[data-v-05ff8f16]{\r\n  --uiToggleSize: var(--toggleSize, 50px);\r\n  --uiToggleIndent: var(--toggleIndent, .4em);\r\n  --uiToggleBorderWidth: var(--toggleBorderWidth, 2px);\r\n  --uiToggleColor: var(--toggleColor, #000);\r\n  --uiToggleDisabledColor: var(--toggleDisabledColor, #868e96);\r\n  --uiToggleBgColor: var(--toggleBgColor, #fff);\r\n  --uiToggleArrowWidth: var(--toggleArrowWidth, 2px);\r\n  --uiToggleArrowColor: var(--toggleArrowColor, #fff);\r\n\r\n  display: inline-block;\r\n  position: relative;\n}\n.toggle__input[data-v-05ff8f16]{\r\n  position: absolute;\r\n  left: -99999px;\n}\n.toggle__label[data-v-05ff8f16]{\r\n  display: inline-flex;\r\n  cursor: pointer;\r\n  min-height: var(--uiToggleSize);\r\n  padding-left: calc(var(--uiToggleSize) + var(--uiToggleIndent));\n}\n.toggle__label[data-v-05ff8f16]:before, .toggle__label[data-v-05ff8f16]:after{\r\n  content: "";\r\n  box-sizing: border-box;  \r\n  width: 0.8em;\r\n  height: 0.8em;\r\n  font-size: var(--uiToggleSize);\r\n\r\n  position: absolute;\r\n  left: 0;\r\n  top: 5px;\n}\n.toggle__label[data-v-05ff8f16]:before{\r\n  border: var(--uiToggleBorderWidth) solid var(--uiToggleColor);\r\n  z-index: 2;\n}\n.toggle__input:disabled ~ .toggle__label[data-v-05ff8f16]:before{\r\n  border-color: var(--uiToggleDisabledColor);\n}\n.toggle__input:focus ~ .toggle__label[data-v-05ff8f16]:before{\r\n  box-shadow: 0 0 0 2px var(--uiToggleBgColor), 0 0 0px 4px var(--uiToggleColor);\n}\n.toggle__input:not(:disabled):checked:focus ~ .toggle__label[data-v-05ff8f16]:after{\r\n  box-shadow: 0 0 0 2px var(--uiToggleBgColor), 0 0 0px 4px var(--uiToggleColor);\n}\n.toggle__input:not(:disabled) ~ .toggle__label[data-v-05ff8f16]:after{\r\n  background-color: var(--uiToggleColor);\r\n  opacity: 0;\n}\n.toggle__input:not(:disabled):checked ~ .toggle__label[data-v-05ff8f16]:after{\r\n  opacity: 1;\n}\n.toggle__text[data-v-05ff8f16]{\r\n  margin-top: auto;\r\n  margin-bottom: auto;\n}\r\n\r\n/*\r\nThe arrow size and position depends from sizes of square because I needed an arrow correct positioning from the top left corner of the element toggle\r\n*/\n.toggle__text[data-v-05ff8f16]:before{\r\n  content: "";\r\n  box-sizing: border-box;\r\n  width: 0;\r\n  height: 0;\r\n  font-size: var(--uiToggleSize);\r\n\r\n  border-left-width: 0;\r\n  border-bottom-width: 0;\r\n  border-left-style: solid;\r\n  border-bottom-style: solid;\r\n  border-color: var(--uiToggleArrowColor);\r\n\r\n  position: absolute;\r\n  top: .5428em;\r\n  left: .2em;\r\n  z-index: 3;\r\n\r\n  transform-origin: left top;\r\n  transform: rotate(-40deg) skew(10deg);\n}\n.toggle__input:not(:disabled):checked ~ .toggle__label .toggle__text[data-v-05ff8f16]:before{\r\n  width: .4em;\r\n  height: .20em;\r\n  border-left-width: var(--uiToggleArrowWidth);\r\n  border-bottom-width: var(--uiToggleArrowWidth);\r\n  will-change: width, height;\r\n  transition: width .1s ease-out .2s, height .2s ease-out;\n}\n.toggle__label[data-v-05ff8f16]:before, .toggle__label[data-v-05ff8f16]:after{\r\n  border-radius: 0px;\n}\n.toggle__input:not(:disabled) ~ .toggle__label[data-v-05ff8f16]:before,\r\n.toggle__input:not(:disabled) ~ .toggle__label[data-v-05ff8f16]:after{\r\n  opacity: 1;\r\n  transform-origin: center center;\r\n  will-change: transform;\r\n  transition: transform .2s ease-out;\n}\n.toggle__input:not(:disabled) ~ .toggle__label[data-v-05ff8f16]:before{\r\n  transform: rotateY(0deg);\r\n  transition-delay: .2s;\n}\n.toggle__input:not(:disabled) ~ .toggle__label[data-v-05ff8f16]:after{\r\n  transform: rotateY(90deg);\n}\n.toggle__input:not(:disabled):checked ~ .toggle__label[data-v-05ff8f16]:before{\r\n  transform: rotateY(-90deg);\r\n  transition-delay: 0s;\n}\n.toggle__input:not(:disabled):checked ~ .toggle__label[data-v-05ff8f16]:after{\r\n  transform: rotateY(0deg);\r\n  transition-delay: .2s;\n}\n.toggle__text[data-v-05ff8f16]:before{\r\n  opacity: 0;\n}\n.toggle__input:not(:disabled):checked ~ .toggle__label .toggle__text[data-v-05ff8f16]:before{\r\n  opacity: 1;\r\n  transition: opacity .1s ease-out .3s, width .1s ease-out .5s, height .2s ease-out .3s;\n}\n.toggle[data-v-05ff8f16]{\r\n  --toggleColor:#de5a5a;\r\n  --toggleBgColor:#de5a5a;\r\n  --toggleSize: 50px;\n}\nfooter[data-v-05ff8f16]:empty {\r\n  display:none;\n}\nstrong[data-v-05ff8f16] {\r\n  color: #ab4242;\n}\n.icon[data-v-05ff8f16] {\r\n  font-size: 7rem;\n}\n.text-red[data-v-05ff8f16] {\r\n  color: #de5a5a;\n}\n.def-padding[data-v-05ff8f16] {\r\n  padding: 1em 2.5em;\n}\n.mt-6[data-v-05ff8f16] {\r\n    margin-top: 6px;\n}\n.mb-30[data-v-05ff8f16] {\r\n  margin-bottom: 30px;\n}\n.mmt-20[data-v-05ff8f16] {\r\n  margin-top: -20px;\n}\n.p-10[data-v-05ff8f16] {\r\n  padding: 10px 0;\n}\n.p-20[data-v-05ff8f16] {\r\n  padding: 20px;\n}\n.fs-40[data-v-05ff8f16] {\r\n  font-size: 40px;\n}\r\n',""])},function(t,n){function e(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var i=r(o),a=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}function r(t){var n=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,"+n;return"/*# "+e+" */"}t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var r=e(n,t);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){function r(t){for(var n=0;n<t.length;n++){var e=t[n],r=u[e.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](e.parts[o]);for(;o<e.parts.length;o++)r.parts.push(i(e.parts[o]));r.parts.length>e.parts.length&&(r.parts.length=e.parts.length)}else{for(var a=[],o=0;o<e.parts.length;o++)a.push(i(e.parts[o]));u[e.id]={id:e.id,refs:1,parts:a}}}}function o(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function i(t){var n,e,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(v)return g;r.parentNode.removeChild(r)}if(h){var i=p++;r=d||(d=o()),n=a.bind(null,r,i,!1),e=a.bind(null,r,i,!0)}else r=o(),n=s.bind(null,r),e=function(){r.parentNode.removeChild(r)};return n(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;n(t=r)}else e()}}function a(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}function s(t,n){var e=n.css,r=n.media,o=n.sourceMap;if(r&&t.setAttribute("media",r),o&&(e+="\n/*# sourceURL="+o.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var c="undefined"!=typeof document,f=e(5),u={},l=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,g=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,n,e){v=e;var o=f(t,n);return r(o),function(n){for(var e=[],i=0;i<o.length;i++){var a=o[i],s=u[a.id];s.refs--,e.push(s)}n?(o=f(t,n),r(o)):o=[];for(var i=0;i<e.length;i++){var s=e[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var x=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n){t.exports=function(t,n){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=i[0],s=i[1],c=i[2],f=i[3],u={id:t+":"+o,css:s,media:c,sourceMap:f};r[a]?r[a].parts.push(u):e.push(r[a]={id:a,parts:[u]})}return e}},function(t,n){t.exports=function(t,n,e,r){var o,i=t=t||{},a=typeof t["default"];"object"!==a&&"function"!==a||(o=t,i=t["default"]);var s="function"==typeof i?i.options:i;if(n&&(s.render=n.render,s.staticRenderFns=n.staticRenderFns),e&&(s._scopeId=e),r){var c=Object.create(s.computed||null);Object.keys(r).forEach(function(t){var n=r[t];c[t]=function(){return n}}),s.computed=c}return{esModule:o,exports:i,options:s}}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(8),i=r(o),a=e(80),s=r(a);n["default"]={props:{name:{type:String,required:!0},headerMessage:{type:String,"default":"Are you sure?"},warningMessage:{type:String,"default":"Warning, this cannot be undone!"},checkBoxes:{type:Array,"default":function(){return[{text:"Remove all trade history related information"},{text:"Remove stock exchanges database"}]}},confirmButtonMessage:{type:String,"default":"DELETE"},declineButtonMessage:{type:String,"default":"GO BACK"}},components:{appFooter:s["default"]},beforeMount:function(){var t=this;i["default"].events.$on("show",function(n){t.headerMessage=n.message})}}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(9),i=r(o),a={install:function(t){arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component("modal",FlexiModal),a.events=new t,t.prototype.$modal={show:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};location.hash=t,a.events.$emit("show",n)},hide:function(t){location.hash="#"},scope:function(t){var n=this;return new i["default"](function(e,r){n.show("flexi-modal",{message:t}),a.events.$on("clicked",function(t){e(t)})})}}}};n["default"]=a},function(t,n,e){t.exports={"default":e(10),__esModule:!0}},function(t,n,e){e(11),e(12),e(56),e(60),e(78),e(79),t.exports=e(20).Promise},function(t,n){},function(t,n,e){"use strict";var r=e(13)(!0);e(16)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(14),o=e(15);t.exports=function(t){return function(n,e){var i,a,s=String(o(n)),c=r(e),f=s.length;return c<0||c>=f?t?"":void 0:(i=s.charCodeAt(c),i<55296||i>56319||c+1===f||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):i:t?s.slice(c,c+2):(i-55296<<10)+(a-56320)+65536)}}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){"use strict";var r=e(17),o=e(18),i=e(34),a=e(23),s=e(35),c=e(36),f=e(52),u=e(54),l=e(53)("iterator"),d=!([].keys&&"next"in[].keys()),p="@@iterator",v="keys",g="values",h=function(){return this};t.exports=function(t,n,e,x,m,_,y){c(e,n,x);var b,w,C,S=function(t){if(!d&&t in k)return k[t];switch(t){case v:return function(){return new e(this,t)};case g:return function(){return new e(this,t)}}return function(){return new e(this,t)}},T=n+" Iterator",M=m==g,j=!1,k=t.prototype,O=k[l]||k[p]||m&&k[m],P=O||S(m),L=m?M?S("entries"):P:void 0,A="Array"==n?k.entries||O:O;if(A&&(C=u(A.call(new t)),C!==Object.prototype&&C.next&&(f(C,T,!0),r||"function"==typeof C[l]||a(C,l,h))),M&&O&&O.name!==g&&(j=!0,P=function(){return O.call(this)}),r&&!y||!d&&!j&&k[l]||a(k,l,P),s[n]=P,s[T]=h,m)if(b={values:M?P:S(g),keys:_?P:S(v),entries:L},y)for(w in b)w in k||i(k,w,b[w]);else o(o.P+o.F*(d||j),n,b);return b}},function(t,n){t.exports=!0},function(t,n,e){var r=e(19),o=e(20),i=e(21),a=e(23),s=e(33),c="prototype",f=function(t,n,e){var u,l,d,p=t&f.F,v=t&f.G,g=t&f.S,h=t&f.P,x=t&f.B,m=t&f.W,_=v?o:o[n]||(o[n]={}),y=_[c],b=v?r:g?r[n]:(r[n]||{})[c];v&&(e=n);for(u in e)l=!p&&b&&void 0!==b[u],l&&s(_,u)||(d=l?b[u]:e[u],_[u]=v&&"function"!=typeof b[u]?e[u]:x&&l?i(d,r):m&&b[u]==d?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[c]=t[c],n}(d):h&&"function"==typeof d?i(Function.call,d):d,h&&((_.virtual||(_.virtual={}))[u]=d,t&f.R&&y&&!y[u]&&a(y,u,d)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(22);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(24),o=e(32);t.exports=e(28)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(25),o=e(27),i=e(31),a=Object.defineProperty;n.f=e(28)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return a(t,n,e)}catch(s){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(26);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(28)&&!e(29)(function(){return 7!=Object.defineProperty(e(30)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){t.exports=!e(29)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n,e){var r=e(26),o=e(19).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(26);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){t.exports=e(23)},function(t,n){t.exports={}},function(t,n,e){"use strict";var r=e(37),o=e(32),i=e(52),a={};e(23)(a,e(53)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(a,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(25),o=e(38),i=e(50),a=e(47)("IE_PROTO"),s=function(){},c="prototype",f=function(){var t,n=e(30)("iframe"),r=i.length,o="<",a=">";for(n.style.display="none",e(51).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+a+"document.F=Object"+o+"/script"+a),t.close(),f=t.F;r--;)delete f[c][i[r]];return f()};t.exports=Object.create||function(t,n){var e;return null!==t?(s[c]=r(t),e=new s,s[c]=null,e[a]=t):e=f(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(24),o=e(25),i=e(39);t.exports=e(28)?Object.defineProperties:function(t,n){o(t);for(var e,a=i(n),s=a.length,c=0;s>c;)r.f(t,e=a[c++],n[e]);return t}},function(t,n,e){var r=e(40),o=e(50);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(33),o=e(41),i=e(44)(!1),a=e(47)("IE_PROTO");t.exports=function(t,n){var e,s=o(t),c=0,f=[];for(e in s)e!=a&&r(s,e)&&f.push(e);for(;n.length>c;)r(s,e=n[c++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(42),o=e(15);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(43);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(41),o=e(45),i=e(46);t.exports=function(t){return function(n,e,a){var s,c=r(n),f=o(c.length),u=i(a,f);if(t&&e!=e){for(;f>u;)if(s=c[u++],s!=s)return!0}else for(;f>u;u++)if((t||u in c)&&c[u]===e)return t||u||0;return!t&&-1}}},function(t,n,e){var r=e(14),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(14),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(48)("keys"),o=e(49);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(20),o=e(19),i="__core-js_shared__",a=o[i]||(o[i]={});(t.exports=function(t,n){return a[t]||(a[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(17)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(19).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(24).f,o=e(33),i=e(53)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(48)("wks"),o=e(49),i=e(19).Symbol,a="function"==typeof i,s=t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))};s.store=r},function(t,n,e){var r=e(33),o=e(55),i=e(47)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,n,e){var r=e(15);t.exports=function(t){return Object(r(t))}},function(t,n,e){e(57);for(var r=e(19),o=e(23),i=e(35),a=e(53)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<s.length;c++){var f=s[c],u=r[f],l=u&&u.prototype;l&&!l[a]&&o(l,a,f),i[f]=i.Array}},function(t,n,e){"use strict";var r=e(58),o=e(59),i=e(35),a=e(41);t.exports=e(16)(Array,"Array",function(t,n){this._t=a(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r,o,i,a,s=e(17),c=e(19),f=e(21),u=e(61),l=e(18),d=e(26),p=e(22),v=e(62),g=e(63),h=e(67),x=e(68).set,m=e(70)(),_=e(71),y=e(72),b=e(73),w=e(74),C="Promise",S=c.TypeError,T=c.process,M=T&&T.versions,j=M&&M.v8||"",k=c[C],O="process"==u(T),P=function(){},L=o=_.f,A=!!function(){try{var t=k.resolve(1),n=(t.constructor={})[e(53)("species")]=function(t){t(P,P)};return(O||"function"==typeof PromiseRejectionEvent)&&t.then(P)instanceof n&&0!==j.indexOf("6.6")&&b.indexOf("Chrome/66")===-1}catch(r){}}(),E=function(t){var n;return!(!d(t)||"function"!=typeof(n=t.then))&&n},B=function(t,n){if(!t._n){t._n=!0;var e=t._c;m(function(){for(var r=t._v,o=1==t._s,i=0,a=function(n){var e,i,a,s=o?n.ok:n.fail,c=n.resolve,f=n.reject,u=n.domain;try{s?(o||(2==t._h&&F(t),t._h=1),s===!0?e=r:(u&&u.enter(),e=s(r),u&&(u.exit(),a=!0)),e===n.promise?f(S("Promise-chain cycle")):(i=E(e))?i.call(e,c,f):c(e)):f(r)}catch(l){u&&!a&&u.exit(),f(l)}};e.length>i;)a(e[i++]);t._c=[],t._n=!1,n&&!t._h&&R(t)})}},R=function(t){x.call(c,function(){var n,e,r,o=t._v,i=z(t);if(i&&(n=y(function(){O?T.emit("unhandledRejection",o,t):(e=c.onunhandledrejection)?e({promise:t,reason:o}):(r=c.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=O||z(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},z=function(t){return 1!==t._h&&0===(t._a||t._c).length},F=function(t){x.call(c,function(){var n;O?T.emit("rejectionHandled",t):(n=c.onrejectionhandled)&&n({promise:t,reason:t._v})})},I=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),B(n,!0))},N=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw S("Promise can't be resolved itself");(n=E(t))?m(function(){var r={_w:e,_d:!1};try{n.call(t,f(N,r,1),f(I,r,1))}catch(o){I.call(r,o)}}):(e._v=t,e._s=1,B(e,!1))}catch(r){I.call({_w:e,_d:!1},r)}}};A||(k=function(t){v(this,k,C,"_h"),p(t),r.call(this);try{t(f(N,this,1),f(I,this,1))}catch(n){I.call(this,n)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(75)(k.prototype,{then:function(t,n){var e=L(h(this,k));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=O?T.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&B(this,!1),e.promise},"catch":function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=f(N,t,1),this.reject=f(I,t,1)},_.f=L=function(t){return t===k||t===a?new i(t):o(t)}),l(l.G+l.W+l.F*!A,{Promise:k}),e(52)(k,C),e(76)(C),a=e(20)[C],l(l.S+l.F*!A,C,{reject:function(t){var n=L(this),e=n.reject;return e(t),n.promise}}),l(l.S+l.F*(s||!A),C,{resolve:function(t){return w(s&&this===a?k:this,t)}}),l(l.S+l.F*!(A&&e(77)(function(t){k.all(t)["catch"](P)})),C,{all:function(t){var n=this,e=L(n),r=e.resolve,o=e.reject,i=y(function(){var e=[],i=0,a=1;g(t,!1,function(t){var s=i++,c=!1;e.push(void 0),a++,n.resolve(t).then(function(t){c||(c=!0,e[s]=t,--a||r(e))},o)}),--a||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=L(n),r=e.reject,o=y(function(){g(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n,e){var r=e(43),o=e(53)("toStringTag"),i="Arguments"==r(function(){return arguments}()),a=function(t,n){try{return t[n]}catch(e){}};t.exports=function(t){var n,e,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=a(n=Object(t),o))?e:i?r(n):"Object"==(s=r(n))&&"function"==typeof n.callee?"Arguments":s}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(21),o=e(64),i=e(65),a=e(25),s=e(45),c=e(66),f={},u={},n=t.exports=function(t,n,e,l,d){var p,v,g,h,x=d?function(){return t}:c(t),m=r(e,l,n?2:1),_=0;if("function"!=typeof x)throw TypeError(t+" is not iterable!");if(i(x)){for(p=s(t.length);p>_;_++)if(h=n?m(a(v=t[_])[0],v[1]):m(t[_]),h===f||h===u)return h}else for(g=x.call(t);!(v=g.next()).done;)if(h=o(g,m,v.value,n),h===f||h===u)return h};n.BREAK=f,n.RETURN=u},function(t,n,e){var r=e(25);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(i){var a=t["return"];throw void 0!==a&&r(a.call(t)),i}}},function(t,n,e){var r=e(35),o=e(53)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(61),o=e(53)("iterator"),i=e(35);t.exports=e(20).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(25),o=e(22),i=e(53)("species");t.exports=function(t,n){var e,a=r(t).constructor;return void 0===a||void 0==(e=r(a)[i])?n:o(e)}},function(t,n,e){var r,o,i,a=e(21),s=e(69),c=e(51),f=e(30),u=e(19),l=u.process,d=u.setImmediate,p=u.clearImmediate,v=u.MessageChannel,g=u.Dispatch,h=0,x={},m="onreadystatechange",_=function(){var t=+this;if(x.hasOwnProperty(t)){var n=x[t];delete x[t],n()}},y=function(t){_.call(t.data)};d&&p||(d=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return x[++h]=function(){s("function"==typeof t?t:Function(t),n)},r(h),h},p=function(t){delete x[t]},"process"==e(43)(l)?r=function(t){l.nextTick(a(_,t,1))}:g&&g.now?r=function(t){g.now(a(_,t,1))}:v?(o=new v,i=o.port2,o.port1.onmessage=y,r=a(i.postMessage,i,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(r=function(t){u.postMessage(t+"","*")},u.addEventListener("message",y,!1)):r=m in f("script")?function(t){c.appendChild(f("script"))[m]=function(){c.removeChild(this),_.call(t)}}:function(t){setTimeout(a(_,t,1),0)}),t.exports={set:d,clear:p}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(19),o=e(68).set,i=r.MutationObserver||r.WebKitMutationObserver,a=r.process,s=r.Promise,c="process"==e(43)(a);t.exports=function(){var t,n,e,f=function(){var r,o;for(c&&(r=a.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(i){throw t?e():n=void 0,i}}n=void 0,r&&r.enter()};if(c)e=function(){a.nextTick(f)};else if(!i||r.navigator&&r.navigator.standalone)if(s&&s.resolve){var u=s.resolve(void 0);e=function(){u.then(f)}}else e=function(){o.call(r,f)};else{var l=!0,d=document.createTextNode("");new i(f).observe(d,{characterData:!0}),e=function(){d.data=l=!l}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){"use strict";function r(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=o(n),this.reject=o(e)}var o=e(22);t.exports.f=function(t){return new r(t)}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(n){return{e:!0,v:n}}}},function(t,n,e){var r=e(19),o=r.navigator;t.exports=o&&o.userAgent||""},function(t,n,e){var r=e(25),o=e(26),i=e(71);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t),a=e.resolve;return a(n),e.promise}},function(t,n,e){var r=e(23);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){"use strict";var r=e(19),o=e(20),i=e(24),a=e(28),s=e(53)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];a&&n&&!n[s]&&i.f(n,s,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(53)("iterator"),o=!1;try{var i=[7][r]();i["return"]=function(){o=!0},Array.from(i,function(){throw 2})}catch(a){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],a=i[r]();a.next=function(){return{done:e=!0}},i[r]=function(){return a},t(i)}catch(s){}return e}},function(t,n,e){"use strict";var r=e(18),o=e(20),i=e(19),a=e(67),s=e(74);r(r.P+r.R,"Promise",{"finally":function(t){var n=a(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return s(n,t()).then(function(){return e})}:t,e?function(e){return s(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var r=e(18),o=e(71),i=e(72);r(r.S,"Promise",{"try":function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n,e){e(81);var r=e(6)(e(83),e(84),"data-v-6de194a2",null);t.exports=r.exports},function(t,n,e){var r=e(82);"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);e(4)("160fe6d8",r,!0)},function(t,n,e){n=t.exports=e(3)(!1),n.push([t.id,"\n.flexi-footer[data-v-6de194a2] {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\n@media (max-width: 767.98px) {\r\n    display: -webkit-box;\n}\n}\n.footer-padding[data-v-6de194a2] {\r\n  padding-top: 20px;\r\n  padding-bottom: 30px;\r\n  padding-left: 20px;\r\n  padding-right: 20px;\n}\n.buttons[data-v-6de194a2] {\r\n\tbackground-color: #fc8d83;\r\n\tdisplay: inline-block;\r\n\tcursor: pointer;\r\n\tcolor: #ffffff;\r\n\tfont-family: Arial;\r\n\tfont-size: 19px;\r\n\tpadding: 21px 76px;\r\n\ttext-decoration: none;\r\n  width: 160px;\r\n  height: 25px;\r\n  border: 1px solid #fc8d83;\n@media (max-width: 767.98px) {\r\n    width: 100px;\r\n    margin-bottom: 20px;\n}\n}\n.buttons-transparent[data-v-6de194a2] {\r\n  background: transparent;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  color: grey;\r\n  font-family: Arial;\r\n  font-size: 19px;\r\n  padding: 21px 76px;\r\n  text-decoration: none;\r\n  width: 160px;\r\n  height: 25px;\r\n  border: 1px solid;\n@media (max-width: 767.98px) {\r\n    width: 100px;\r\n    margin-bottom: 20px;\n}\n}\n.buttons-transparent[data-v-6de194a2]:hover {\r\n  color: white;\r\n  background-color:#f7c3c3;\n}\n.buttons[data-v-6de194a2]:hover {\r\n\tbackground-color:#e4685d;\n}\n.buttons[data-v-6de194a2]:active {\r\n\tposition:relative;\r\n\ttop:1px;\n}\r\n",""])},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(8),i=r(o);n["default"]={props:{confirmButtonMessage:{type:String,"default":"DELETE"},declineButtonMessage:{type:String,"default":"GO BACK"}},methods:{handleClick:function(t){i["default"].events.$emit("clicked",t),this.$modal.hide()}}}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flexi-footer footer-padding"},[e("span",[e("a",{staticClass:"buttons",on:{click:function(n){return t.handleClick(!0)}}},[t._v(t._s(t.confirmButtonMessage))])]),t._v(" "),e("span",[e("a",{staticClass:"buttons-transparent",on:{click:function(n){return t.handleClick(!1)}}},[t._v(t._s(t.declineButtonMessage))])])])},staticRenderFns:[]}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"overlay",attrs:{id:t.name}},[e("a",{staticClass:"cancel",attrs:{href:"#"}}),t._v(" "),e("div",{staticClass:"modal"},[e("div",{staticClass:"content"},[e("span",{staticClass:"icon text-red"},[t._v("×")]),t._v(" "),e("span",{staticClass:"text-red fs-40 mmt-20 mb-30"},[t._v(t._s(t.headerMessage))])]),t._v(" "),e("div",{
staticClass:"description custom-padding"},[e("p",[e("strong",[t._v(" "+t._s(t.warningMessage)+" ")])]),t._v(" "),t._l(t.checkBoxes,function(n,r){return e("div",{key:r,staticClass:"page"},[e("div",{staticClass:"page__toggle"},[e("label",{staticClass:"toggle"},[e("input",{staticClass:"toggle__input",attrs:{type:"checkbox"}}),t._v(" "),e("span",{staticClass:"toggle__label"},[e("span",{staticClass:"toggle__text"},[t._v(t._s(n.text))])])])])])})],2),t._v(" "),e("a",{staticClass:"close",attrs:{href:"#"}},[t._v("\n      ×\n    ")]),t._v(" "),e("footer",{staticClass:"mt-6"},[e("app-footer",{attrs:{confirmButtonMessage:t.confirmButtonMessage,declineButtonMessage:t.declineButtonMessage}})],1)])])},staticRenderFns:[]}}])});