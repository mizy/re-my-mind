/*! For license information please see vendors-d2eb5610.31b4670f1ae1daf9508f.js.LICENSE.txt */
(self.webpackChunkremind_editor=self.webpackChunkremind_editor||[]).push([[557],{86500:(t,e,r)=>{"use strict";r.d(e,{rW:()=>o,ve:()=>a,py:()=>f,WE:()=>l,vq:()=>u,T6:()=>c,VD:()=>s});var n=r(90279);function o(t,e,r){return{r:255*(0,n.sh)(t,255),g:255*(0,n.sh)(e,255),b:255*(0,n.sh)(r,255)}}function i(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*r*(e-t):r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function a(t,e,r){var o,a,f;if(t=(0,n.sh)(t,360),e=(0,n.sh)(e,100),r=(0,n.sh)(r,100),0===e)a=r,f=r,o=r;else{var l=r<.5?r*(1+e):r+e-r*e,u=2*r-l;o=i(u,l,t+1/3),a=i(u,l,t),f=i(u,l,t-1/3)}return{r:255*o,g:255*a,b:255*f}}function f(t,e,r){t=(0,n.sh)(t,255),e=(0,n.sh)(e,255),r=(0,n.sh)(r,255);var o=Math.max(t,e,r),i=Math.min(t,e,r),a=0,f=o,l=o-i,u=0===o?0:l/o;if(o===i)a=0;else{switch(o){case t:a=(e-r)/l+(e<r?6:0);break;case e:a=(r-t)/l+2;break;case r:a=(t-e)/l+4}a/=6}return{h:a,s:u,v:f}}function l(t,e,r){t=6*(0,n.sh)(t,360),e=(0,n.sh)(e,100),r=(0,n.sh)(r,100);var o=Math.floor(t),i=t-o,a=r*(1-e),f=r*(1-i*e),l=r*(1-(1-i)*e),u=o%6;return{r:255*[r,f,a,a,l,r][u],g:255*[l,r,r,f,a,a][u],b:255*[a,a,l,r,r,f][u]}}function u(t,e,r,o){var i=[(0,n.FZ)(Math.round(t).toString(16)),(0,n.FZ)(Math.round(e).toString(16)),(0,n.FZ)(Math.round(r).toString(16))];return o&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function c(t){return s(t)/255}function s(t){return parseInt(t,16)}},64811:(t,e,r)=>{"use strict";r.d(e,{uA:()=>a});var n=r(86500),o={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},i=r(90279);function a(t){var e={r:0,g:0,b:0},r=1,a=null,f=null,l=null,u=!1,d=!1;return"string"==typeof t&&(t=function(t){if(0===(t=t.trim().toLowerCase()).length)return!1;var e=!1;if(o[t])t=o[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};var r=c.rgb.exec(t);return r?{r:r[1],g:r[2],b:r[3]}:(r=c.rgba.exec(t))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=c.hsl.exec(t))?{h:r[1],s:r[2],l:r[3]}:(r=c.hsla.exec(t))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=c.hsv.exec(t))?{h:r[1],s:r[2],v:r[3]}:(r=c.hsva.exec(t))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=c.hex8.exec(t))?{r:(0,n.VD)(r[1]),g:(0,n.VD)(r[2]),b:(0,n.VD)(r[3]),a:(0,n.T6)(r[4]),format:e?"name":"hex8"}:(r=c.hex6.exec(t))?{r:(0,n.VD)(r[1]),g:(0,n.VD)(r[2]),b:(0,n.VD)(r[3]),format:e?"name":"hex"}:(r=c.hex4.exec(t))?{r:(0,n.VD)(r[1]+r[1]),g:(0,n.VD)(r[2]+r[2]),b:(0,n.VD)(r[3]+r[3]),a:(0,n.T6)(r[4]+r[4]),format:e?"name":"hex8"}:!!(r=c.hex3.exec(t))&&{r:(0,n.VD)(r[1]+r[1]),g:(0,n.VD)(r[2]+r[2]),b:(0,n.VD)(r[3]+r[3]),format:e?"name":"hex"}}(t)),"object"==typeof t&&(s(t.r)&&s(t.g)&&s(t.b)?(e=(0,n.rW)(t.r,t.g,t.b),u=!0,d="%"===String(t.r).substr(-1)?"prgb":"rgb"):s(t.h)&&s(t.s)&&s(t.v)?(a=(0,i.JX)(t.s),f=(0,i.JX)(t.v),e=(0,n.WE)(t.h,a,f),u=!0,d="hsv"):s(t.h)&&s(t.s)&&s(t.l)&&(a=(0,i.JX)(t.s),l=(0,i.JX)(t.l),e=(0,n.ve)(t.h,a,l),u=!0,d="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(r=t.a)),r=(0,i.Yq)(r),{ok:u,format:t.format||d,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:r}}var f="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",l="[\\s|\\(]+("+f+")[,|\\s]+("+f+")[,|\\s]+("+f+")\\s*\\)?",u="[\\s|\\(]+("+f+")[,|\\s]+("+f+")[,|\\s]+("+f+")[,|\\s]+("+f+")\\s*\\)?",c={CSS_UNIT:new RegExp(f),rgb:new RegExp("rgb"+l),rgba:new RegExp("rgba"+u),hsl:new RegExp("hsl"+l),hsla:new RegExp("hsla"+u),hsv:new RegExp("hsv"+l),hsva:new RegExp("hsva"+u),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function s(t){return Boolean(c.CSS_UNIT.exec(String(t)))}},90279:(t,e,r)=>{"use strict";function n(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var r=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function o(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function i(t){return t<=1?100*Number(t)+"%":t}function a(t){return 1===t.length?"0"+t:String(t)}r.d(e,{sh:()=>n,Yq:()=>o,JX:()=>i,FZ:()=>a})},94184:(t,e)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&t.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var f in r)n.call(r,f)&&r[f]&&t.push(f);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},23645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var f=0;f<t.length;f++){var l=[].concat(t[f]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),e.push(l))}},e}},73382:(t,e,r)=>{"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f;r.d(e,{E3:()=>et,zy:()=>rt});var l={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function u(){if(void 0!==f)return f;f="";var t=document.createElement("p").style;for(var e in l)e+"Transform"in t&&(f=e);return f}function c(){return u()?"".concat(u(),"TransitionProperty"):"transitionProperty"}function s(){return u()?"".concat(u(),"Transform"):"transform"}function d(t,e){var r=c();r&&(t.style[r]=e,"transitionProperty"!==r&&(t.style.transitionProperty=e))}function h(t,e){var r=s();r&&(t.style[r]=e,"transform"!==r&&(t.style.transform=e))}var p,g=/matrix\((.*)\)/,b=/matrix3d\((.*)\)/;function m(t){var e=t.style.display;t.style.display="none",t.offsetHeight,t.style.display=e}function v(t,e,r){var n=r;if("object"!==i(e))return void 0!==n?("number"==typeof n&&(n="".concat(n,"px")),void(t.style[e]=n)):p(t,e);for(var o in e)e.hasOwnProperty(o)&&v(t,o,e[o])}function y(t,e){var r=t["page".concat(e?"Y":"X","Offset")],n="scroll".concat(e?"Top":"Left");if("number"!=typeof r){var o=t.document;"number"!=typeof(r=o.documentElement[n])&&(r=o.body[n])}return r}function w(t){return y(t)}function x(t){return y(t,!0)}function S(t){var e=function(t){var e,r,n,o=t.ownerDocument,i=o.body,a=o&&o.documentElement;return r=(e=t.getBoundingClientRect()).left,n=e.top,{left:r-=a.clientLeft||i.clientLeft||0,top:n-=a.clientTop||i.clientTop||0}}(t),r=t.ownerDocument,n=r.defaultView||r.parentWindow;return e.left+=w(n),e.top+=x(n),e}function k(t){return null!=t&&t==t.window}function W(t){return k(t)?t.document:9===t.nodeType?t:t.ownerDocument}var O=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),j=/^(top|right|bottom|left)$/;function M(t,e){return"left"===t?e.useCssRight?"right":t:e.useCssBottom?"bottom":t}function F(t){return"left"===t?"right":"right"===t?"left":"top"===t?"bottom":"bottom"===t?"top":void 0}function P(t,e,r){"static"===v(t,"position")&&(t.style.position="relative");var n=-999,o=-999,i=M("left",r),a=M("top",r),f=F(i),l=F(a);"left"!==i&&(n=999),"top"!==a&&(o=999);var u,s="",h=S(t);("left"in e||"top"in e)&&(s=(u=t).style.transitionProperty||u.style[c()]||"",d(t,"none")),"left"in e&&(t.style[f]="",t.style[i]="".concat(n,"px")),"top"in e&&(t.style[l]="",t.style[a]="".concat(o,"px")),m(t);var p=S(t),g={};for(var b in e)if(e.hasOwnProperty(b)){var y=M(b,r),w="left"===b?n:o,x=h[b]-p[b];g[y]=y===b?w+x:w-x}v(t,g),m(t),("left"in e||"top"in e)&&d(t,s);var k={};for(var W in e)if(e.hasOwnProperty(W)){var O=M(W,r),j=e[W]-h[W];k[O]=W===O?g[O]+j:g[O]-j}v(t,k)}function T(t,e){for(var r=0;r<t.length;r++)e(t[r])}function A(t){return"border-box"===p(t,"boxSizing")}"undefined"!=typeof window&&(p=window.getComputedStyle?function(t,e,r){var n=r,o="",i=W(t);return(n=n||i.defaultView.getComputedStyle(t,null))&&(o=n.getPropertyValue(e)||n[e]),o}:function(t,e){var r=t.currentStyle&&t.currentStyle[e];if(O.test(r)&&!j.test(e)){var n=t.style,o=n.left,i=t.runtimeStyle.left;t.runtimeStyle.left=t.currentStyle.left,n.left="fontSize"===e?"1em":r||0,r=n.pixelLeft+"px",n.left=o,t.runtimeStyle.left=i}return""===r?"auto":r});var C=["margin","border","padding"];function D(t,e,r){var n,o={},i=t.style;for(n in e)e.hasOwnProperty(n)&&(o[n]=i[n],i[n]=e[n]);for(n in r.call(t),e)e.hasOwnProperty(n)&&(i[n]=o[n])}function V(t,e,r){var n,o,i,a=0;for(o=0;o<e.length;o++)if(n=e[o])for(i=0;i<r.length;i++){var f;f="border"===n?"".concat(n).concat(r[i],"Width"):n+r[i],a+=parseFloat(p(t,f))||0}return a}var E={getParent:function(t){var e=t;do{e=11===e.nodeType&&e.host?e.host:e.parentNode}while(e&&1!==e.nodeType&&9!==e.nodeType);return e}};function R(t,e,r){var n=r;if(k(t))return"width"===e?E.viewportWidth(t):E.viewportHeight(t);if(9===t.nodeType)return"width"===e?E.docWidth(t):E.docHeight(t);var o="width"===e?["Left","Right"]:["Top","Bottom"],i="width"===e?t.getBoundingClientRect().width:t.getBoundingClientRect().height,a=A(t),f=0;(null==i||i<=0)&&(i=void 0,(null==(f=p(t,e))||Number(f)<0)&&(f=t.style[e]||0),f=parseFloat(f)||0),void 0===n&&(n=a?1:-1);var l=void 0!==i||a,u=i||f;return-1===n?l?u-V(t,["border","padding"],o):f:l?1===n?u:u+(2===n?-V(t,["border"],o):V(t,["margin"],o)):f+V(t,C.slice(n),o)}T(["Width","Height"],(function(t){E["doc".concat(t)]=function(e){var r=e.document;return Math.max(r.documentElement["scroll".concat(t)],r.body["scroll".concat(t)],E["viewport".concat(t)](r))},E["viewport".concat(t)]=function(e){var r="client".concat(t),n=e.document,o=n.body,i=n.documentElement[r];return"CSS1Compat"===n.compatMode&&i||o&&o[r]||i}}));var X={position:"absolute",visibility:"hidden",display:"block"};function Y(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var n,o=e[0];return 0!==o.offsetWidth?n=R.apply(void 0,e):D(o,X,(function(){n=R.apply(void 0,e)})),n}function H(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}T(["width","height"],(function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);E["outer".concat(e)]=function(e,r){return e&&Y(e,t,r?0:1)};var r="width"===t?["Left","Right"]:["Top","Bottom"];E[t]=function(e,n){var o=n;return void 0!==o?e?(A(e)&&(o+=V(e,["padding","border"],r)),v(e,t,o)):void 0:e&&Y(e,t,-1)}}));var L={getWindow:function(t){if(t&&t.document&&t.setTimeout)return t;var e=t.ownerDocument||t;return e.defaultView||e.parentWindow},getDocument:W,offset:function(t,e,r){if(void 0===e)return S(t);!function(t,e,r){if(r.ignoreShake){var n=S(t),o=n.left.toFixed(0),i=n.top.toFixed(0),a=e.left.toFixed(0),f=e.top.toFixed(0);if(o===a&&i===f)return}r.useCssRight||r.useCssBottom?P(t,e,r):r.useCssTransform&&s()in document.body.style?function(t,e){var r=S(t),n=function(t){var e=window.getComputedStyle(t,null),r=e.getPropertyValue("transform")||e.getPropertyValue(s());if(r&&"none"!==r){var n=r.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(n[12]||n[4],0),y:parseFloat(n[13]||n[5],0)}}return{x:0,y:0}}(t),o={x:n.x,y:n.y};"left"in e&&(o.x=n.x+e.left-r.left),"top"in e&&(o.y=n.y+e.top-r.top),function(t,e){var r=window.getComputedStyle(t,null),n=r.getPropertyValue("transform")||r.getPropertyValue(s());if(n&&"none"!==n){var o,i=n.match(g);i?((o=(i=i[1]).split(",").map((function(t){return parseFloat(t,10)})))[4]=e.x,o[5]=e.y,h(t,"matrix(".concat(o.join(","),")"))):((o=n.match(b)[1].split(",").map((function(t){return parseFloat(t,10)})))[12]=e.x,o[13]=e.y,h(t,"matrix3d(".concat(o.join(","),")")))}else h(t,"translateX(".concat(e.x,"px) translateY(").concat(e.y,"px) translateZ(0)"))}(t,o)}(t,e):P(t,e,r)}(t,e,r||{})},isWindow:k,each:T,css:v,clone:function(t){var e,r={};for(e in t)t.hasOwnProperty(e)&&(r[e]=t[e]);if(t.overflow)for(e in t)t.hasOwnProperty(e)&&(r.overflow[e]=t.overflow[e]);return r},mix:H,getWindowScrollLeft:function(t){return w(t)},getWindowScrollTop:function(t){return x(t)},merge:function(){for(var t={},e=0;e<arguments.length;e++)L.mix(t,e<0||arguments.length<=e?void 0:arguments[e]);return t},viewportWidth:0,viewportHeight:0};H(L,E);var q=L.getParent;function B(t){if(L.isWindow(t)||9===t.nodeType)return null;var e,r=L.getDocument(t).body,n=L.css(t,"position");if("fixed"!==n&&"absolute"!==n)return"html"===t.nodeName.toLowerCase()?null:q(t);for(e=q(t);e&&e!==r&&9!==e.nodeType;e=q(e))if("static"!==(n=L.css(e,"position")))return e;return null}var z=L.getParent;function N(t,e){for(var r={left:0,right:1/0,top:0,bottom:1/0},n=B(t),o=L.getDocument(t),i=o.defaultView||o.parentWindow,a=o.body,f=o.documentElement;n;){if(-1!==navigator.userAgent.indexOf("MSIE")&&0===n.clientWidth||n===a||n===f||"visible"===L.css(n,"overflow")){if(n===a||n===f)break}else{var l=L.offset(n);l.left+=n.clientLeft,l.top+=n.clientTop,r.top=Math.max(r.top,l.top),r.right=Math.min(r.right,l.left+n.clientWidth),r.bottom=Math.min(r.bottom,l.top+n.clientHeight),r.left=Math.max(r.left,l.left)}n=B(n)}var u=null;L.isWindow(t)||9===t.nodeType||(u=t.style.position,"absolute"===L.css(t,"position")&&(t.style.position="fixed"));var c=L.getWindowScrollLeft(i),s=L.getWindowScrollTop(i),d=L.viewportWidth(i),h=L.viewportHeight(i),p=f.scrollWidth,g=f.scrollHeight,b=window.getComputedStyle(a);if("hidden"===b.overflowX&&(p=i.innerWidth),"hidden"===b.overflowY&&(g=i.innerHeight),t.style&&(t.style.position=u),e||function(t){if(L.isWindow(t)||9===t.nodeType)return!1;var e=L.getDocument(t),r=e.body,n=null;for(n=z(t);n&&n!==r&&n!==e;n=z(n))if("fixed"===L.css(n,"position"))return!0;return!1}(t))r.left=Math.max(r.left,c),r.top=Math.max(r.top,s),r.right=Math.min(r.right,c+d),r.bottom=Math.min(r.bottom,s+h);else{var m=Math.max(p,c+d);r.right=Math.min(r.right,m);var v=Math.max(g,s+h);r.bottom=Math.min(r.bottom,v)}return r.top>=0&&r.left>=0&&r.bottom>r.top&&r.right>r.left?r:null}function _(t){var e,r,n;if(L.isWindow(t)||9===t.nodeType){var o=L.getWindow(t);e={left:L.getWindowScrollLeft(o),top:L.getWindowScrollTop(o)},r=L.viewportWidth(o),n=L.viewportHeight(o)}else e=L.offset(t),r=L.outerWidth(t),n=L.outerHeight(t);return e.width=r,e.height=n,e}function I(t,e){var r=e.charAt(0),n=e.charAt(1),o=t.width,i=t.height,a=t.left,f=t.top;return"c"===r?f+=i/2:"b"===r&&(f+=i),"c"===n?a+=o/2:"r"===n&&(a+=o),{left:a,top:f}}function $(t,e,r,n,o){var i=I(e,r[1]),a=I(t,r[0]),f=[a.left-i.left,a.top-i.top];return{left:Math.round(t.left-f[0]+n[0]-o[0]),top:Math.round(t.top-f[1]+n[1]-o[1])}}function J(t,e,r){return t.left<r.left||t.left+e.width>r.right}function Z(t,e,r){return t.top<r.top||t.top+e.height>r.bottom}function U(t,e,r){var n=[];return L.each(t,(function(t){n.push(t.replace(e,(function(t){return r[t]})))})),n}function G(t,e){return t[e]=-t[e],t}function K(t,e){return(/%$/.test(t)?parseInt(t.substring(0,t.length-1),10)/100*e:parseInt(t,10))||0}function Q(t,e){t[0]=K(t[0],e.width),t[1]=K(t[1],e.height)}function tt(t,e,r,n){var o=r.points,i=r.offset||[0,0],a=r.targetOffset||[0,0],f=r.overflow,l=r.source||t;i=[].concat(i),a=[].concat(a);var u={},c=0,s=N(l,!(!(f=f||{})||!f.alwaysByViewport)),d=_(l);Q(i,d),Q(a,e);var h=$(d,e,o,i,a),p=L.merge(d,h);if(s&&(f.adjustX||f.adjustY)&&n){if(f.adjustX&&J(h,d,s)){var g=U(o,/[lr]/gi,{l:"r",r:"l"}),b=G(i,0),m=G(a,0);(function(t,e,r){return t.left>r.right||t.left+e.width<r.left})($(d,e,g,b,m),d,s)||(c=1,o=g,i=b,a=m)}if(f.adjustY&&Z(h,d,s)){var v=U(o,/[tb]/gi,{t:"b",b:"t"}),y=G(i,1),w=G(a,1);(function(t,e,r){return t.top>r.bottom||t.top+e.height<r.top})($(d,e,v,y,w),d,s)||(c=1,o=v,i=y,a=w)}c&&(h=$(d,e,o,i,a),L.mix(p,h));var x=J(h,d,s),S=Z(h,d,s);if(x||S){var k=o;x&&(k=U(o,/[lr]/gi,{l:"r",r:"l"})),S&&(k=U(o,/[tb]/gi,{t:"b",b:"t"})),o=k,i=r.offset||[0,0],a=r.targetOffset||[0,0]}u.adjustX=f.adjustX&&x,u.adjustY=f.adjustY&&S,(u.adjustX||u.adjustY)&&(p=function(t,e,r,n){var o=L.clone(t),i={width:e.width,height:e.height};return n.adjustX&&o.left<r.left&&(o.left=r.left),n.resizeWidth&&o.left>=r.left&&o.left+i.width>r.right&&(i.width-=o.left+i.width-r.right),n.adjustX&&o.left+i.width>r.right&&(o.left=Math.max(r.right-i.width,r.left)),n.adjustY&&o.top<r.top&&(o.top=r.top),n.resizeHeight&&o.top>=r.top&&o.top+i.height>r.bottom&&(i.height-=o.top+i.height-r.bottom),n.adjustY&&o.top+i.height>r.bottom&&(o.top=Math.max(r.bottom-i.height,r.top)),L.mix(o,i)}(h,d,s,u))}return p.width!==d.width&&L.css(l,"width",L.width(l)+p.width-d.width),p.height!==d.height&&L.css(l,"height",L.height(l)+p.height-d.height),L.offset(l,{left:p.left,top:p.top},{useCssRight:r.useCssRight,useCssBottom:r.useCssBottom,useCssTransform:r.useCssTransform,ignoreShake:r.ignoreShake}),{points:o,offset:i,targetOffset:a,overflow:u}}function et(t,e,r){var n=r.target||e;return tt(t,_(n),r,!function(t,e){var r=N(t,e),n=_(t);return!r||n.left+n.width<=r.left||n.top+n.height<=r.top||n.left>=r.right||n.top>=r.bottom}(n,r.overflow&&r.overflow.alwaysByViewport))}function rt(t,e,r){var n,i,a=L.getDocument(t),f=a.defaultView||a.parentWindow,l=L.getWindowScrollLeft(f),u=L.getWindowScrollTop(f),c=L.viewportWidth(f),s=L.viewportHeight(f),d={left:n="pageX"in e?e.pageX:l+e.clientX,top:i="pageY"in e?e.pageY:u+e.clientY,width:0,height:0},h=n>=0&&n<=l+c&&i>=0&&i<=u+s,p=[r.points[0],"cc"];return tt(t,d,o(o({},r),{},{points:p}),h)}et.__getOffsetParent=B,et.__getVisibleRectForElement=N}}]);