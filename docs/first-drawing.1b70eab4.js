parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aft2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.app=exports.h=exports.Lazy=void 0;var e=1,n=2,r=3,t={},o=[],i=o.map,l=Array.isArray,u="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout,f=function(e){var n="";if("string"==typeof e)return e;if(l(e)&&e.length>0)for(var r,t=0;t<e.length;t++)""!==(r=f(e[t]))&&(n+=(n&&" ")+r);else for(var t in e)e[t]&&(n+=(n&&" ")+t);return n},a=function(e,n){var r={};for(var t in e)r[t]=e[t];for(var t in n)r[t]=n[t];return r},s=function(e){return e.reduce(function(e,n){return e.concat(n&&!0!==n?"function"==typeof n[0]?[n]:s(n):0)},o)},c=function(e,n){return l(e)&&l(n)&&e[0]===n[0]&&"function"==typeof e[0]},d=function(e,n){if(e!==n)for(var r in a(e,n)){if(e[r]!==n[r]&&!c(e[r],n[r]))return!0;n[r]=e[r]}},p=function(e,n,r){for(var t,o,i=0,l=[];i<e.length||i<n.length;i++)t=e[i],o=n[i],l.push(o?!t||o[0]!==t[0]||d(o[1],t[1])?[o[0],o[1],o[0](r,o[1]),t&&t[2]()]:t:t&&t[2]());return l},v=function(e,n,r,t,o,i){if("key"===n);else if("style"===n)for(var l in a(r,t))r=null==t||null==t[l]?"":t[l],"-"===l[0]?e[n].setProperty(l,r):e[n][l]=r;else"o"===n[0]&&"n"===n[1]?((e.actions||(e.actions={}))[n=n.slice(2).toLowerCase()]=t)?r||e.addEventListener(n,o):e.removeEventListener(n,o):!i&&"list"!==n&&n in e?e[n]=null==t?"":t:null==t||!1===t||"class"===n&&!(t=f(t))?e.removeAttribute(n):e.setAttribute(n,t)},y=function(e,n,t){var o=e.props,i=e.type===r?document.createTextNode(e.name):(t=t||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name,{is:o.is}):document.createElement(e.name,{is:o.is});for(var l in o)v(i,l,null,o[l],n,t);for(var u=0,f=e.children.length;u<f;u++)i.appendChild(y(e.children[u]=w(e.children[u]),n,t));return e.node=i},h=function(e){return null==e?null:e.key},m=function(n,t,o,i,l,u){if(o===i);else if(null!=o&&o.type===r&&i.type===r)o.name!==i.name&&(t.nodeValue=i.name);else if(null==o||o.name!==i.name)t=n.insertBefore(y(i=w(i),l,u),t),null!=o&&n.removeChild(o.node);else{var f,s,c,d,p=o.props,g=i.props,z=o.children,x=i.children,C=0,k=0,A=z.length-1,L=x.length-1;for(var b in u=u||"svg"===i.name,a(p,g))("value"===b||"selected"===b||"checked"===b?t[b]:p[b])!==g[b]&&v(t,b,p[b],g[b],l,u);for(;k<=L&&C<=A&&null!=(c=h(z[C]))&&c===h(x[k]);)m(t,z[C].node,z[C],x[k]=w(x[k++],z[C++]),l,u);for(;k<=L&&C<=A&&null!=(c=h(z[A]))&&c===h(x[L]);)m(t,z[A].node,z[A],x[L]=w(x[L--],z[A--]),l,u);if(C>A)for(;k<=L;)t.insertBefore(y(x[k]=w(x[k++]),l,u),(s=z[C])&&s.node);else if(k>L)for(;C<=A;)t.removeChild(z[C++].node);else{b=C;for(var N={},E={};b<=A;b++)null!=(c=z[b].key)&&(N[c]=z[b]);for(;k<=L;)c=h(s=z[C]),d=h(x[k]=w(x[k],s)),E[c]||null!=d&&d===h(z[C+1])?(null==c&&t.removeChild(s.node),C++):null==d||o.type===e?(null==c&&(m(t,s&&s.node,s,x[k],l,u),k++),C++):(c===d?(m(t,s.node,s,x[k],l,u),E[d]=!0,C++):null!=(f=N[d])?(m(t,t.insertBefore(f.node,s&&s.node),f,x[k],l,u),E[d]=!0):m(t,s&&s.node,null,x[k],l,u),k++);for(;C<=A;)null==h(s=z[C++])&&t.removeChild(s.node);for(var b in N)null==E[b]&&t.removeChild(N[b].node)}}return i.node=t},g=function(e,n){for(var r in e)if(e[r]!==n[r])return!0;for(var r in n)if(e[r]!==n[r])return!0},z=function(e){return"object"==typeof e?e:C(e)},w=function(e,r){return e.type===n?((!r||!r.lazy||g(r.lazy,e.lazy))&&((r=z(e.lazy.view(e.lazy))).lazy=e.lazy),r):e},x=function(e,n,r,t,o,i){return{name:e,props:n,children:r,node:t,type:i,key:o}},C=function(e,n){return x(e,t,o,n,void 0,r)},k=function(n){return n.nodeType===r?C(n.nodeValue,n):x(n.nodeName.toLowerCase(),t,i.call(n.childNodes,k),n,void 0,e)},A=function(e){return{lazy:e,type:n}};exports.Lazy=A;var L=function(e,n){for(var r,o=[],i=[],u=arguments.length;u-- >2;)o.push(arguments[u]);for(;o.length>0;)if(l(r=o.pop()))for(u=r.length;u-- >0;)o.push(r[u]);else!1===r||!0===r||null==r||i.push(z(r));return n=n||t,"function"==typeof e?e(n,i):x(e,n,i,void 0,n.key)};exports.h=L;var b=function(e){var n={},r=!1,t=e.view,o=e.node,i=o&&k(o),f=e.subscriptions,a=[],c=function(e){v(this.actions[e.type],e)},d=function(e){return n!==e&&(n=e,f&&(a=p(a,s([f(n)]),v)),t&&!r&&u(y,r=!0)),n},v=(e.middleware||function(e){return e})(function(e,r){return"function"==typeof e?v(e(n,r)):l(e)?"function"==typeof e[0]||l(e[0])?v(e[0],"function"==typeof e[1]?e[1](r):e[1]):(s(e.slice(1)).map(function(e){e&&e[0](v,e[1])},d(e[0])),n):d(e)}),y=function(){r=!1,o=m(o.parentNode,o,i,i=z(t(n)),c)};v(e.init)};exports.app=b;
},{}],"y8r7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={url:"./p5-getting-started.html",name:"Getting Started"};exports.default=e;
},{}],"ayG7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={url:"./p5-setup-and-draw.html",name:"Setup and Draw"};exports.default=e;
},{}],"xFTc":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={url:"./p5-first-drawing.html",name:"First Drawing"};exports.default=e;
},{}],"hEsK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={url:"./p5-useful-functions.html",name:"Useful Functions"};exports.default=e;
},{}],"wNnP":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={url:"./p5-inspirations.html",name:"Inspirations"};exports.default=e;
},{}],"lBP6":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("./getting-started/ref")),t=e(require("./setup-and-draw/ref")),u=e(require("./first-drawing/ref")),i=e(require("./useful-functions/ref")),a=e(require("./inspirations/ref")),f={name:"Introduction to p5",pages:[r.default,t.default,u.default,i.default,a.default]};exports.default=f;
},{"./getting-started/ref":"y8r7","./setup-and-draw/ref":"ayG7","./first-drawing/ref":"xFTc","./useful-functions/ref":"hEsK","./inspirations/ref":"wNnP"}],"zamX":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("../group")),t=e(require("./ref")),u={ref:t.default,group:r.default};exports.default=u;
},{"../group":"lBP6","./ref":"xFTc"}],"RDJ8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(e){return e.substring(e.indexOf("//")+2)};
},{}],"NZWM":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.GroupLink=exports.PageLink=exports.Link=void 0;var r=require("hyperapp"),t=e(require("../helper/RemoveProtocolFromURL")),o=function(e,o){return r.h("a",{href:e},o||t.default(e))};exports.Link=o;var n=function(e,r){return o(e.url,r||e.name)};exports.PageLink=n;var u=function(e){return o(e.pages[0].url,e.name)};exports.GroupLink=u;
},{"hyperapp":"aft2","../helper/RemoveProtocolFromURL":"RDJ8"}],"uFIY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("hyperapp"),t=require("./Link");exports.default=function(r,n){return e.h("div",{class:"table-of-contents"},r.map(function(r){return t.PageLink(r,[e.h("div",{class:"toc-element"+(n===r.name?" selected":"")},[r.name||r.url])])}))};
},{"hyperapp":"aft2","./Link":"NZWM"}],"g3vG":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("hyperapp"),t=e(require("./TableOfContents"));exports.default=function(e){return e.group&&r.h("div",{class:"page-group"},[e.group.name,t.default(e.group.pages,e.ref.name)])};
},{"hyperapp":"aft2","./TableOfContents":"uFIY"}],"uBlh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={url:"./index.html",name:"Home"};exports.default=e;
},{}],"Qn4B":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("hyperapp"),r=require("./Link");exports.default=function(a){var p;if(a.group)return a.group.pages.forEach(function(e,r){e.name===a.ref.name&&(p=a.group.pages[r+1])}),p&&e.h("div",{class:"next-page-in-group"},["Next : ",r.PageLink(p)])};
},{"hyperapp":"aft2","./Link":"NZWM"}],"q5wr":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("hyperapp"),u=e(require("./PageGroup")),t=require("./Link"),i=e(require("../pages/index/ref")),a=e(require("./NextPageInGroup"));exports.default=function(e){return function(n){return r.h("div",{class:"page-layout"},[r.h("div",{class:"column-1"},[t.PageLink(i.default),u.default(e.info)]),r.h("div",{class:"column-2"},[e.view(n),a.default(e.info)])])}};
},{"hyperapp":"aft2","./PageGroup":"g3vG","./Link":"NZWM","../pages/index/ref":"uBlh","./NextPageInGroup":"Qn4B"}],"HUQD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("hyperapp");exports.default=function(r){return e.h("span",{class:"code inline"},r)};
},{"hyperapp":"aft2"}],"CiHj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("hyperapp");exports.default=function(t){return e.h("script",{type:"text/p5"},t)};
},{"hyperapp":"aft2"}],"F02S":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("hyperapp");exports.default=function(r){return e.h("div",{class:"exercises"},[e.h("i",{},"Exercises"),e.h("ul",{},r.map(function(r){return e.h("div",{},[e.h("li",{},r),e.h("br",{})])}))])};
},{"hyperapp":"aft2"}],"fRht":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("hyperapp"),n=e(require("./info")),i=e(require("../../../../components/PageView")),l=e(require("../../../../components/InlineCode")),o=e(require("../../../../components/p5Code")),a=require("../../../../components/Link"),h=e(require("../../../../components/Exercises")),r=function(){return t.h("div",null,t.h("h2",null,"width & height"),l.default("width")," and ",l.default("height")," are built-in variables that allow you to access the size of the sketch at any time. You will see me use them all the time, and you should really be using them to position your shapes relatively inside the canvas. For example ",l.default("(width/2, height/2)")," will put the object at the center of the canvas.",t.h("h2",null,"The coordinate system"),t.h("div",{class:"highlight"},"Important to note : the y-axis is pointing down !",t.h("br",null),"(0, 0) is the top-left of the canvas."),t.h("br",null),"If you prefer having (0, 0) as the center of the canvas, you can do ",l.default("translate(width/2, height/2)")," before your start drawing.",t.h("br",null),"And to make the y-axis point up, also add ",l.default("scale(1, -1)"),t.h("br",null),t.h("br",null),o.default('\n//translate(width/2, height/2)\n//scale(1, -1)\n\nellipse(100, 100, 20)\n\n// -------\n// Draw the axes\n// -------\nnoFill()\nstrokeWeight(2)\n// x-axis\nstroke("red")\nline(-width, 0, width, 0)\ntriangle(width/2, 0, width/2 - 10, 10, width/2 - 10, -10)\n// y-axis\nstroke("green")\nline(0, -height, 0, height)\ntriangle(0, height/2, 10 , height/2 - 10, -10, height/2 - 10)\n        '),t.h("h2",null,"Shapes"),"p5 knows how to draw quite a few shapes ! We will take a look at the most common ones here, and remember that you can find them ",t.h("i",null,"all")," at ",a.Link("https://p5js.org/reference/"),".",t.h("h3",null,"Ellipse"),"Ellipses are circles that can be wider in one direction (just like rectangles are squares that can be wider in one direction).",t.h("br",null),"We specify them by giving the center x and y, and then the diameter (or two diameters if we want to have different sizes along the x and y axes)",t.h("br",null),t.h("br",null),o.default("\nellipse(\n    width/2,  // center (x coordinate)\n    height/2, // center (y coordinate)\n    100,      // size (diameter) along the x-axis\n    50        // size (diameter) along the y-axis\n)\n\nellipse(\n    width/2,     // center (x coordinate)\n    height*0.75, // center (y coordinate)\n    100          // size (diameter) \n)\n        "),t.h("h3",null,"Rect"),"Rectangles use almost the same parameters as Ellipses. The big difference though is that the first two parameters are (by default) the coordinates of the top-left corner, not the center ! (You can change this with the ",l.default("rectMode")," function)",t.h("br",null),t.h("br",null),o.default("\n// rectMode(CENTER)\nrect(\n    width/2,  // top-left corner (x coordinate) (or center if you used rectMode(CENTER))\n    height/2, // top-left corner (y coordinate) (or center if you used rectMode(CENTER))\n    100,      // size along the x-axis\n    50        // size along the y-axis\n)\n\nrect(\n    width/2,     // top-left corner (x coordinate) (or center if you used rectMode(CENTER))\n    height*0.75, // top-left corner (y coordinate) (or center if you used rectMode(CENTER))\n    100          // size \n)\n        "),t.h("h2",null,"Colors"),t.h("div",{class:"highlight"},l.default("fill")," is used to color the inside of the shape, and ",l.default("stroke")," is used for its boundary.",t.h("br",null),"If you don't want any stroke, you can remove it by calling ",l.default("noStroke()"),". And you can remove the fill by calling ",l.default("noFill()"),"."),t.h("br",null),"The default way of specifing a color is by giving its RGB values. For example ",l.default("fill(255, 145, 23)"),"will give some nice orange. (You can make so that ",l.default("fill")," takes in HSB or HSL values instead of RGB with the ",l.default("colorMode")," function).",t.h("br",null),"You can also use an hexadecimal string like ",l.default('"#FF9117"'),".",t.h("br",null),t.h("br",null),"Note that the colors (and other settings) you specify remain until you change them. So for example this will draw both the ellipse and the rectangle in orange.",t.h("br",null),t.h("br",null),o.default('\n// Choose an orange color and no stroke\nfill(\n    255, // Red   (between 0 and 255)\n    145, // Green (between 0 and 255)\n    23   // Blue  (between 0 and 255)\n)\n// fill("#FF9117")\nnoStroke()\n// Draw some shapes\nellipse(100, 100, 50)\nrect(200, 200, 100)\n        '),t.h("br",null),t.h("br",null),"The last (important) one in the family is ",l.default("strokeWeight"),". It controls the thickness of the stroke, which is also the size of points and lines.",t.h("br",null),"It has a value of 1 by default.",t.h("br",null),t.h("br",null),o.default("\nstrokeWeight(10)\n    ellipse(width/2, height/2, 100)\n    point(width/2, height/2)\nstrokeWeight(50)\n    line(100, height*0.8, width-100, height*0.8)\nstrokeWeight(1) // Back to default\n    line(100, height*0.3, width-100, height*0.3)\n        "),t.h("br",null),t.h("br",null),h.default(["Draw Mickey Mouse's face","Draw a house","Draw a face"]))};t.app({init:{},view:i.default({view:r,info:n.default}),node:document.body});
},{"hyperapp":"aft2","./info":"zamX","../../../../components/PageView":"q5wr","../../../../components/InlineCode":"HUQD","../../../../components/p5Code":"CiHj","../../../../components/Link":"NZWM","../../../../components/Exercises":"F02S"}]},{},["fRht"], null)
//# sourceMappingURL=first-drawing.1b70eab4.js.map