/*! For license information please see main.f027be56954e44aa214f.bundle.js.LICENSE.txt */
(()=>{var e={161:function(e){e.exports=function(){"use strict";var e=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},t=w,r=a,i=c,n=l,s=v,o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(e){for(var t,r=[],i=0,n=0,s="";null!=(t=o.exec(e));){var a=t[0],c=t[1],l=t.index;if(s+=e.slice(n,l),n=l+a.length,c)s+=c[1];else{s&&(r.push(s),s="");var h=t[2],u=t[3],p=t[4],f=t[5],g=t[6],m=t[7],v="+"===g||"*"===g,w="?"===g||"*"===g,b=h||"/",y=p||f||(m?".*":"[^"+b+"]+?");r.push({name:u||i++,prefix:h||"",delimiter:b,optional:w,repeat:v,pattern:d(y)})}}return n<e.length&&(s+=e.substr(n)),s&&r.push(s),r}function c(e){return l(a(e))}function l(t){for(var r=new Array(t.length),i=0;i<t.length;i++)"object"==typeof t[i]&&(r[i]=new RegExp("^"+t[i].pattern+"$"));return function(i){for(var n="",s=i||{},o=0;o<t.length;o++){var a=t[o];if("string"!=typeof a){var c,l=s[a.name];if(null==l){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(e(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+l+'"');if(0===l.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(c=encodeURIComponent(l[h]),!r[o].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');n+=(0===h?a.prefix:a.delimiter)+c}}else{if(c=encodeURIComponent(l),!r[o].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');n+=a.prefix+c}}else n+=a}return n}}function h(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function d(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function p(e){return e.sensitive?"":"i"}function f(e,t){var r=e.source.match(/\((?!\?)/g);if(r)for(var i=0;i<r.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return u(e,t)}function g(e,t,r){for(var i=[],n=0;n<e.length;n++)i.push(w(e[n],t,r).source);return u(new RegExp("(?:"+i.join("|")+")",p(r)),t)}function m(e,t,r){for(var i=a(e),n=v(i,r),s=0;s<i.length;s++)"string"!=typeof i[s]&&t.push(i[s]);return u(n,t)}function v(e,t){for(var r=(t=t||{}).strict,i=!1!==t.end,n="",s=e[e.length-1],o="string"==typeof s&&/\/$/.test(s),a=0;a<e.length;a++){var c=e[a];if("string"==typeof c)n+=h(c);else{var l=h(c.prefix),d=c.pattern;c.repeat&&(d+="(?:"+l+d+")*"),n+=d=c.optional?l?"(?:"+l+"("+d+"))?":"("+d+")?":l+"("+d+")"}}return r||(n=(o?n.slice(0,-2):n)+"(?:\\/(?=$))?"),n+=i?"$":r&&o?"":"(?=\\/|$)",new RegExp("^"+n,p(t))}function w(t,r,i){return e(r=r||[])?i||(i={}):(i=r,r=[]),t instanceof RegExp?f(t,r,i):e(t)?g(t,r,i):m(t,r,i)}t.parse=r,t.compile=i,t.tokensToFunction=n,t.tokensToRegExp=s;var b,y="undefined"!=typeof document,_="undefined"!=typeof window,I="undefined"!=typeof history,x="undefined"!=typeof process,E=y&&document.ontouchstart?"touchstart":"click",k=_&&!(!window.history.location&&!window.location);function T(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function S(){var e=new T;function t(){return A.apply(e,arguments)}return t.callbacks=e.callbacks,t.exits=e.exits,t.base=e.base.bind(e),t.strict=e.strict.bind(e),t.start=e.start.bind(e),t.stop=e.stop.bind(e),t.show=e.show.bind(e),t.back=e.back.bind(e),t.redirect=e.redirect.bind(e),t.replace=e.replace.bind(e),t.dispatch=e.dispatch.bind(e),t.exit=e.exit.bind(e),t.configure=e.configure.bind(e),t.sameOrigin=e.sameOrigin.bind(e),t.clickHandler=e.clickHandler.bind(e),t.create=S,Object.defineProperty(t,"len",{get:function(){return e.len},set:function(t){e.len=t}}),Object.defineProperty(t,"current",{get:function(){return e.current},set:function(t){e.current=t}}),t.Context=P,t.Route=O,t}function A(e,t){if("function"==typeof e)return A.call(this,"*",e);if("function"==typeof t)for(var r=new O(e,null,this),i=1;i<arguments.length;++i)this.callbacks.push(r.middleware(arguments[i]));else"string"==typeof e?this["string"==typeof t?"redirect":"show"](e,t):this.start(e)}function C(e){if(!e.handled){var t=this,r=t._window;(t._hashbang?k&&this._getBase()+r.location.hash.replace("#!",""):k&&r.location.pathname+r.location.search)!==e.canonicalPath&&(t.stop(),e.handled=!1,k&&(r.location.href=e.canonicalPath))}}function $(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function P(e,t,r){var i=this.page=r||A,n=i._window,s=i._hashbang,o=i._getBase();"/"===e[0]&&0!==e.indexOf(o)&&(e=o+(s?"#!":"")+e);var a=e.indexOf("?");this.canonicalPath=e;var c=new RegExp("^"+$(o));if(this.path=e.replace(c,"")||"/",s&&(this.path=this.path.replace("#!","")||"/"),this.title=y&&n.document.title,this.state=t||{},this.state.path=e,this.querystring=~a?i._decodeURLEncodedURIComponent(e.slice(a+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~a?e.slice(0,a):e),this.params={},this.hash="",!s){if(!~this.path.indexOf("#"))return;var l=this.path.split("#");this.path=this.pathname=l[0],this.hash=i._decodeURLEncodedURIComponent(l[1])||"",this.querystring=this.querystring.split("#")[0]}}function O(e,r,i){var n=this.page=i||R,s=r||{};s.strict=s.strict||n._strict,this.path="*"===e?"(.*)":e,this.method="GET",this.regexp=t(this.path,this.keys=[],s)}T.prototype.configure=function(e){var t=e||{};this._window=t.window||_&&window,this._decodeURLComponents=!1!==t.decodeURLComponents,this._popstate=!1!==t.popstate&&_,this._click=!1!==t.click&&y,this._hashbang=!!t.hashbang;var r=this._window;this._popstate?r.addEventListener("popstate",this._onpopstate,!1):_&&r.removeEventListener("popstate",this._onpopstate,!1),this._click?r.document.addEventListener(E,this.clickHandler,!1):y&&r.document.removeEventListener(E,this.clickHandler,!1),this._hashbang&&_&&!I?r.addEventListener("hashchange",this._onpopstate,!1):_&&r.removeEventListener("hashchange",this._onpopstate,!1)},T.prototype.base=function(e){if(0===arguments.length)return this._base;this._base=e},T.prototype._getBase=function(){var e=this._base;if(e)return e;var t=_&&this._window&&this._window.location;return _&&this._hashbang&&t&&"file:"===t.protocol&&(e=t.pathname),e},T.prototype.strict=function(e){if(0===arguments.length)return this._strict;this._strict=e},T.prototype.start=function(e){var t=e||{};if(this.configure(t),!1!==t.dispatch){var r;if(this._running=!0,k){var i=this._window.location;r=this._hashbang&&~i.hash.indexOf("#!")?i.hash.substr(2)+i.search:this._hashbang?i.search+i.hash:i.pathname+i.search+i.hash}this.replace(r,null,!0,t.dispatch)}},T.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var e=this._window;this._click&&e.document.removeEventListener(E,this.clickHandler,!1),_&&e.removeEventListener("popstate",this._onpopstate,!1),_&&e.removeEventListener("hashchange",this._onpopstate,!1)}},T.prototype.show=function(e,t,r,i){var n=new P(e,t,this),s=this.prevContext;return this.prevContext=n,this.current=n.path,!1!==r&&this.dispatch(n,s),!1!==n.handled&&!1!==i&&n.pushState(),n},T.prototype.back=function(e,t){var r=this;if(this.len>0){var i=this._window;I&&i.history.back(),this.len--}else e?setTimeout((function(){r.show(e,t)})):setTimeout((function(){r.show(r._getBase(),t)}))},T.prototype.redirect=function(e,t){var r=this;"string"==typeof e&&"string"==typeof t&&A.call(this,e,(function(e){setTimeout((function(){r.replace(t)}),0)})),"string"==typeof e&&void 0===t&&setTimeout((function(){r.replace(e)}),0)},T.prototype.replace=function(e,t,r,i){var n=new P(e,t,this),s=this.prevContext;return this.prevContext=n,this.current=n.path,n.init=r,n.save(),!1!==i&&this.dispatch(n,s),n},T.prototype.dispatch=function(e,t){var r=0,i=0,n=this;function s(){var e=n.exits[i++];if(!e)return o();e(t,s)}function o(){var t=n.callbacks[r++];if(e.path===n.current)return t?void t(e,o):C.call(n,e);e.handled=!1}t?s():o()},T.prototype.exit=function(e,t){if("function"==typeof e)return this.exit("*",e);for(var r=new O(e,null,this),i=1;i<arguments.length;++i)this.exits.push(r.middleware(arguments[i]))},T.prototype.clickHandler=function(e){if(1===this._which(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var t=e.target,r=e.path||(e.composedPath?e.composedPath():null);if(r)for(var i=0;i<r.length;i++)if(r[i].nodeName&&"A"===r[i].nodeName.toUpperCase()&&r[i].href){t=r[i];break}for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;if(t&&"A"===t.nodeName.toUpperCase()){var n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name;if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")){var s=t.getAttribute("href");if((this._hashbang||!this._samePath(t)||!t.hash&&"#"!==s)&&!(s&&s.indexOf("mailto:")>-1)&&!(n?t.target.baseVal:t.target)&&(n||this.sameOrigin(t.href))){var o=n?t.href.baseVal:t.pathname+t.search+(t.hash||"");o="/"!==o[0]?"/"+o:o,x&&o.match(/^\/[a-zA-Z]:\//)&&(o=o.replace(/^\/[a-zA-Z]:\//,"/"));var a=o,c=this._getBase();0===o.indexOf(c)&&(o=o.substr(c.length)),this._hashbang&&(o=o.replace("#!","")),(!c||a!==o||k&&"file:"===this._window.location.protocol)&&(e.preventDefault(),this.show(a))}}}}},T.prototype._onpopstate=(b=!1,_?(y&&"complete"===document.readyState?b=!0:window.addEventListener("load",(function(){setTimeout((function(){b=!0}),0)})),function(e){if(b){var t=this;if(e.state){var r=e.state.path;t.replace(r,e.state)}else if(k){var i=t._window.location;t.show(i.pathname+i.search+i.hash,void 0,void 0,!1)}}}):function(){}),T.prototype._which=function(e){return null==(e=e||_&&this._window.event).which?e.button:e.which},T.prototype._toURL=function(e){var t=this._window;if("function"==typeof URL&&k)return new URL(e,t.location.toString());if(y){var r=t.document.createElement("a");return r.href=e,r}},T.prototype.sameOrigin=function(e){if(!e||!k)return!1;var t=this._toURL(e),r=this._window.location;return r.protocol===t.protocol&&r.hostname===t.hostname&&(r.port===t.port||""===r.port&&(80==t.port||443==t.port))},T.prototype._samePath=function(e){if(!k)return!1;var t=this._window.location;return e.pathname===t.pathname&&e.search===t.search},T.prototype._decodeURLEncodedURIComponent=function(e){return"string"!=typeof e?e:this._decodeURLComponents?decodeURIComponent(e.replace(/\+/g," ")):e},P.prototype.pushState=function(){var e=this.page,t=e._window,r=e._hashbang;e.len++,I&&t.history.pushState(this.state,this.title,r&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},P.prototype.save=function(){var e=this.page;I&&e._window.history.replaceState(this.state,this.title,e._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},O.prototype.middleware=function(e){var t=this;return function(r,i){if(t.match(r.path,r.params))return r.routePath=t.path,e(r,i);i()}},O.prototype.match=function(e,t){var r=this.keys,i=e.indexOf("?"),n=~i?e.slice(0,i):e,s=this.regexp.exec(decodeURIComponent(n));if(!s)return!1;delete t[0];for(var o=1,a=s.length;o<a;++o){var c=r[o-1],l=this.page._decodeURLEncodedURIComponent(s[o]);void 0===l&&hasOwnProperty.call(t,c.name)||(t[c.name]=l)}return!0};var R=S(),N=R,M=R;return N.default=M,N}()}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),i=new Map;class n{constructor(e,r){if(this._$cssResult$=!0,r!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let t=i.get(this.cssText);return e&&void 0===t&&(i.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const s=e=>new n("string"==typeof e?e:e+"",t),o=(e,...r)=>{const i=1===e.length?e[0]:r.reduce(((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1]),e[0]);return new n(i,t)},a=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return s(t)})(e):e;var c;const l=window.trustedTypes,h=l?l.emptyScript:"",d=window.reactiveElementPolyfillSupport,u={toAttribute(e,t){switch(t){case Boolean:e=e?h:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},p=(e,t)=>t!==e&&(t==t||e==e),f={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const i=this._$Eh(r,t);void 0!==i&&(this._$Eu.set(i,r),e.push(i))})),e}static createProperty(e,t=f){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eh(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var t;const r=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{e?t.adoptedStyleSheets=r.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):r.forEach((e=>{const r=document.createElement("style"),i=window.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=e.cssText,t.appendChild(r)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ES(e,t,r=f){var i,n;const s=this.constructor._$Eh(e,r);if(void 0!==s&&!0===r.reflect){const o=(null!==(n=null===(i=r.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:u.toAttribute)(t,r.type);this._$Ei=e,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Ei=null}}_$AK(e,t){var r,i,n;const s=this.constructor,o=s._$Eu.get(e);if(void 0!==o&&this._$Ei!==o){const e=s.getPropertyOptions(o),a=e.converter,c=null!==(n=null!==(i=null===(r=a)||void 0===r?void 0:r.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==n?n:u.fromAttribute;this._$Ei=o,this[o]=c(t,e.type),this._$Ei=null}}requestUpdate(e,t,r){let i=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||p)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}var m;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:g}),(null!==(c=globalThis.reactiveElementVersions)&&void 0!==c?c:globalThis.reactiveElementVersions=[]).push("1.3.0");const v=globalThis.trustedTypes,w=v?v.createPolicy("lit-html",{createHTML:e=>e}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,y="?"+b,_=`<${y}>`,I=document,x=(e="")=>I.createComment(e),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,k=Array.isArray,T=e=>{var t;return k(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])},S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,A=/-->/g,C=/>/g,$=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,P=/'/g,O=/"/g,R=/^(?:script|style|textarea|title)$/i,N=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),M=N(1),L=(N(2),Symbol.for("lit-noChange")),D=Symbol.for("lit-nothing"),U=new WeakMap,z=(e,t,r)=>{var i,n;const s=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:t;let o=s._$litPart$;if(void 0===o){const e=null!==(n=null==r?void 0:r.renderBefore)&&void 0!==n?n:null;s._$litPart$=o=new W(t.insertBefore(x(),e),e,void 0,null!=r?r:{})}return o._$AI(e),o},j=I.createTreeWalker(I,129,null,!1),H=(e,t)=>{const r=e.length-1,i=[];let n,s=2===t?"<svg>":"",o=S;for(let t=0;t<r;t++){const r=e[t];let a,c,l=-1,h=0;for(;h<r.length&&(o.lastIndex=h,c=o.exec(r),null!==c);)h=o.lastIndex,o===S?"!--"===c[1]?o=A:void 0!==c[1]?o=C:void 0!==c[2]?(R.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=$):void 0!==c[3]&&(o=$):o===$?">"===c[0]?(o=null!=n?n:S,l=-1):void 0===c[1]?l=-2:(l=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?$:'"'===c[3]?O:P):o===O||o===P?o=$:o===A||o===C?o=S:(o=$,n=void 0);const d=o===$&&e[t+1].startsWith("/>")?" ":"";s+=o===S?r+_:l>=0?(i.push(a),r.slice(0,l)+"$lit$"+r.slice(l)+b+d):r+b+(-2===l?(i.push(void 0),t):d)}const a=s+(e[r]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(a):a,i]};class F{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let n=0,s=0;const o=e.length-1,a=this.parts,[c,l]=H(e,t);if(this.el=F.createElement(c,r),j.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=j.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(b)){const r=l[s++];if(e.push(t),void 0!==r){const e=i.getAttribute(r.toLowerCase()+"$lit$").split(b),t=/([.?@])?(.*)/.exec(r);a.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?K:"?"===t[1]?J:"@"===t[1]?Y:q})}else a.push({type:6,index:n})}for(const t of e)i.removeAttribute(t)}if(R.test(i.tagName)){const e=i.textContent.split(b),t=e.length-1;if(t>0){i.textContent=v?v.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],x()),j.nextNode(),a.push({type:2,index:++n});i.append(e[t],x())}}}else if(8===i.nodeType)if(i.data===y)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(b,e+1));)a.push({type:7,index:n}),e+=b.length-1}n++}}static createElement(e,t){const r=I.createElement("template");return r.innerHTML=e,r}}function V(e,t,r=e,i){var n,s,o,a;if(t===L)return t;let c=void 0!==i?null===(n=r._$Cl)||void 0===n?void 0:n[i]:r._$Cu;const l=E(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(s=null==c?void 0:c._$AO)||void 0===s||s.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,r,i)),void 0!==i?(null!==(o=(a=r)._$Cl)&&void 0!==o?o:a._$Cl=[])[i]=c:r._$Cu=c),void 0!==c&&(t=V(e,c._$AS(e,t.values),c,i)),t}class B{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:r},parts:i}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:I).importNode(r,!0);j.currentNode=n;let s=j.nextNode(),o=0,a=0,c=i[0];for(;void 0!==c;){if(o===c.index){let t;2===c.type?t=new W(s,s.nextSibling,this,e):1===c.type?t=new c.ctor(s,c.name,c.strings,this,e):6===c.type&&(t=new X(s,this,e)),this.v.push(t),c=i[++a]}o!==(null==c?void 0:c.index)&&(s=j.nextNode(),o++)}return n}m(e){let t=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class W{constructor(e,t,r,i){var n;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=V(this,e,t),E(e)?e===D||null==e||""===e?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==L&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):T(e)?this.S(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==D&&E(this._$AH)?this._$AA.nextSibling.data=e:this.k(I.createTextNode(e)),this._$AH=e}T(e){var t;const{values:r,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=F.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.m(r);else{const e=new B(n,this),t=e.p(this.options);e.m(r),this.k(t),this._$AH=e}}_$AC(e){let t=U.get(e.strings);return void 0===t&&U.set(e.strings,t=new F(e)),t}S(e){k(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const n of e)i===t.length?t.push(r=new W(this.A(x()),this.A(x()),this,this.options)):r=t[i],r._$AI(n),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class q{constructor(e,t,r,i,n){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){const n=this.strings;let s=!1;if(void 0===n)e=V(this,e,t,0),s=!E(e)||e!==this._$AH&&e!==L,s&&(this._$AH=e);else{const i=e;let o,a;for(e=n[0],o=0;o<n.length-1;o++)a=V(this,i[r+o],t,o),a===L&&(a=this._$AH[o]),s||(s=!E(a)||a!==this._$AH[o]),a===D?e=D:e!==D&&(e+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}s&&!i&&this.C(e)}C(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class K extends q{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===D?void 0:e}}const G=v?v.emptyScript:"";class J extends q{constructor(){super(...arguments),this.type=4}C(e){e&&e!==D?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class Y extends q{constructor(e,t,r,i,n){super(e,t,r,i,n),this.type=5}_$AI(e,t=this){var r;if((e=null!==(r=V(this,e,t,0))&&void 0!==r?r:D)===L)return;const i=this._$AH,n=e===D&&i!==D||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==D&&(i===D||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==r?r:this.element,e):this._$AH.handleEvent(e)}}class X{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){V(this,e)}}const Z={P:"$lit$",L:b,V:y,I:1,N:H,R:B,D:T,j:V,H:W,O:q,F:J,B:Y,W:K,Z:X},Q=window.litHtmlPolyfillSupport;var ee,te;null==Q||Q(F,W),(null!==(m=globalThis.litHtmlVersions)&&void 0!==m?m:globalThis.litHtmlVersions=[]).push("2.2.0");class re extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=z(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return L}}re.finalized=!0,re._$litElement$=!0,null===(ee=globalThis.litElementHydrateSupport)||void 0===ee||ee.call(globalThis,{LitElement:re});const ie=globalThis.litElementPolyfillSupport;null==ie||ie({LitElement:re});(null!==(te=globalThis.litElementVersions)&&void 0!==te?te:globalThis.litElementVersions=[]).push("3.2.0");const ne=1,se=2,oe=e=>(...t)=>({_$litDirective$:e,values:t});class ae{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const ce=oe(class extends ae{constructor(e){var t;if(super(e),e.type!==ne||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var r,i;if(void 0===this.et){this.et=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(r=this.st)||void 0===r?void 0:r.has(e))&&this.et.add(e);return this.render(t)}const n=e.element.classList;this.et.forEach((e=>{e in t||(n.remove(e),this.et.delete(e))}));for(const e in t){const r=!!t[e];r===this.et.has(e)||(null===(i=this.st)||void 0===i?void 0:i.has(e))||(r?(n.add(e),this.et.add(e)):(n.remove(e),this.et.delete(e)))}return L}}),le=o`
form {
	display: flex;
	flex-direction: column;
	width: 400px;
	background-color: white;
	border-radius: 3px;
	padding: 20px;
	margin-bottom: 1rem;
}
.form-footer {
	max-width: 400px;
	background-color: white;
	border-radius: 3px;
}
.form-footer p {
	text-align: center;
}
h1 {
	font-family: 'Dancing Script', cursive;
	font-size: 2.5rem;
	font-weight: 500;
	text-align: center;
	margin: 0 0 1rem 0;
}
a {
	text-decoration: none;
	font-weight: 500;
	color: #0095f6;
}
.input-container {
	display: flex;
	justify-content: space-between;
	padding: 0;
	margin-bottom: 1rem;
	background-color: rgb(247, 248, 255);
	border: 1px solid gray;
	border-radius: 3px;
}
.show-btn {
	width: 30px;
	align-self: center;
	height: 25px;
	border: 0;
	background-color: rgb(247, 248, 255);	
}
.show-btn:hover {
	cursor: pointer;
}
input {
	all: unset;
	padding: 1rem;
	flex: 1;
}
input[type="submit"] {
	color: white;
	font-size: 0.9rem;
	font-weight: 500;
	text-align: center;
	border: 0px;
	border-radius: 3px;
	background-color: #0095f6;
	padding: 0.7rem;
}
input[type="submit"]:hover {
	background-color: rgba(0, 149, 246, 0.8);
	cursor: pointer;
}
.error {
	border: 1px solid red;
}
.errorMsg {
	font-size: 0.8rem;
	text-align: center;
	background-color: rgba(255, 0, 0, 0.1);
	border-radius: 3px;
	padding: 0.5rem 1rem;
	margin: 1rem 0;
}
@media only screen and (max-width: 420px) {
	form {
		width: 100%; 
	}
}

`,he=o`
*, *:before, *:after {
	font-size: 16px;
	box-sizing: border-box;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
	margin: 0;
	padding: 0;
	font-weight: normal;
}

ol, ul {
	list-style: none;
}

img {
	max-width: 100%;
	height: auto;
}
a {
	color: black;
	text-decoration: none;
}
`,de=function(e){const t=[];let r=0;for(let i=0;i<e.length;i++){let n=e.charCodeAt(i);n<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=63&n|128):55296==(64512&n)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(n=65536+((1023&n)<<10)+(1023&e.charCodeAt(++i)),t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=63&n|128):(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=63&n|128)}return t},ue={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const n=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=n>>2,h=(3&n)<<4|o>>4;let d=(15&o)<<2|c>>6,u=63&c;a||(u=64,s||(d=64)),i.push(r[l],r[h],r[d],r[u])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(de(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,i=0;for(;r<e.length;){const n=e[r++];if(n<128)t[i++]=String.fromCharCode(n);else if(n>191&&n<224){const s=e[r++];t[i++]=String.fromCharCode((31&n)<<6|63&s)}else if(n>239&&n<365){const s=((7&n)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[r++],o=e[r++];t[i++]=String.fromCharCode((15&n)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const n=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0;++t;const o=t<e.length?r[e.charAt(t)]:64;++t;const a=t<e.length?r[e.charAt(t)]:64;if(++t,null==n||null==s||null==o||null==a)throw Error();const c=n<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},pe=function(e){return function(e){const t=de(e);return ue.encodeByteArray(t,!0)}(e).replace(/\./g,"")},fe=function(e){try{return ue.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};class ge{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,r))}}}function me(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ve(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function we(){return"object"==typeof indexedDB}function be(){return new Promise(((e,t)=>{try{let r=!0;const i="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(i);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(i),e(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{var e;t((null===(e=n.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class ye extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_e.prototype.create)}}class _e{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,n=this.errors[e],s=n?function(e,t){return e.replace(Ie,((e,r)=>{const i=t[r];return null!=i?String(i):`<${r}?>`}))}(n,r):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new ye(i,o,r)}}const Ie=/\{\$([^}]+)}/g;function xe(e,t){if(e===t)return!0;const r=Object.keys(e),i=Object.keys(t);for(const n of r){if(!i.includes(n))return!1;const r=e[n],s=t[n];if(Ee(r)&&Ee(s)){if(!xe(r,s))return!1}else if(r!==s)return!1}for(const e of i)if(!r.includes(e))return!1;return!0}function Ee(e){return null!==e&&"object"==typeof e}function ke(e){const t=[];for(const[r,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(r)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Te(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[r,i]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function Se(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}class Ae{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,r){let i;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===i.next&&(i.next=Ce),void 0===i.error&&(i.error=Ce),void 0===i.complete&&(i.complete=Ce);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),n}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Ce(){}function $e(e,t=1e3,r=2){const i=t*Math.pow(r,e),n=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+n)}function Pe(e){return e&&e._delegate?e._delegate:e}function Oe(e,t){return new Promise(((r,i)=>{e.onsuccess=e=>{r(e.target.result)},e.onerror=e=>{var r;i(`${t}: ${null===(r=e.target.error)||void 0===r?void 0:r.message}`)}}))}class Re{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new Ne(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new Me(this._db.createObjectStore(e,t))}close(){this._db.close()}}class Ne{constructor(e){this._transaction=e,this.complete=new Promise(((e,t)=>{this._transaction.oncomplete=function(){e()},this._transaction.onerror=()=>{t(this._transaction.error)},this._transaction.onabort=()=>{t(this._transaction.error)}}))}objectStore(e){return new Me(this._transaction.objectStore(e))}}class Me{constructor(e){this._store=e}index(e){return new Le(this._store.index(e))}createIndex(e,t,r){return new Le(this._store.createIndex(e,t,r))}get(e){return Oe(this._store.get(e),"Error reading from IndexedDB")}put(e,t){return Oe(this._store.put(e,t),"Error writing to IndexedDB")}delete(e){return Oe(this._store.delete(e),"Error deleting from IndexedDB")}clear(){return Oe(this._store.clear(),"Error clearing IndexedDB object store")}}class Le{constructor(e){this._index=e}get(e){return Oe(this._index.get(e),"Error reading from IndexedDB")}}function De(e,t,r){return new Promise(((i,n)=>{try{const s=indexedDB.open(e,t);s.onsuccess=e=>{i(new Re(e.target.result))},s.onerror=e=>{var t;n(`Error opening indexedDB: ${null===(t=e.target.error)||void 0===t?void 0:t.message}`)},s.onupgradeneeded=e=>{r(new Re(s.result),e.oldVersion,e.newVersion,new Ne(s.transaction))}}catch(e){n(`Error opening indexedDB: ${e.message}`)}}))}class Ue{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const ze="[DEFAULT]";class je{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ge;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}(e))try{this.getOrInitializeService({instanceIdentifier:ze})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[e,t]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),n=null!==(r=this.onInitCallbacks.get(i))&&void 0!==r?r:new Set;n.add(e),this.onInitCallbacks.set(i,n);const s=this.instances.get(i);return s&&e(s,i),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===ze?void 0:i),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}var i;return r||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:ze:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class He{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new je(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}const Fe=[];var Ve;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Ve||(Ve={}));const Be={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},We=Ve.INFO,qe={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},Ke=(e,t,...r)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),n=qe[t];if(!n)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[n](`[${i}]  ${e.name}:`,...r)};class Ge{constructor(e){this.name=e,this._logLevel=We,this._logHandler=Ke,this._userLogHandler=null,Fe.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Be[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}class Je{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ye="@firebase/app",Xe="0.7.19",Ze=new Ge("@firebase/app"),Qe="[DEFAULT]",et={[Ye]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},tt=new Map,rt=new Map;function it(e,t){try{e.container.addComponent(t)}catch(r){Ze.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function nt(e){const t=e.name;if(rt.has(t))return Ze.debug(`There were multiple attempts to register component ${t}.`),!1;rt.set(t,e);for(const t of tt.values())it(t,e);return!0}function st(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}const ot=new _e("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});class at{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ue("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ot.create("app-deleted",{appName:this._name})}}const ct="9.6.9";function lt(e="[DEFAULT]"){const t=tt.get(e);if(!t)throw ot.create("no-app",{appName:e});return t}function ht(e,t,r){var i;let n=null!==(i=et[e])&&void 0!==i?i:e;r&&(n+=`-${r}`);const s=n.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${n}" with version "${t}":`];return s&&e.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ze.warn(e.join(" "))}nt(new Ue(`${n}-version`,(()=>({library:n,version:t})),"VERSION"))}const dt="firebase-heartbeat-store";let ut=null;function pt(){return ut||(ut=De("firebase-heartbeat-database",1,((e,t)=>{if(0===t)e.createObjectStore(dt)})).catch((e=>{throw ot.create("storage-open",{originalErrorMessage:e.message})}))),ut}async function ft(e,t){try{const r=(await pt()).transaction(dt,"readwrite"),i=r.objectStore(dt);return await i.put(t,gt(e)),r.complete}catch(e){throw ot.create("storage-set",{originalErrorMessage:e.message})}}function gt(e){return`${e.name}!${e.options.appId}`}class mt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=vt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=vt(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){const r=[];let i=e.slice();for(const n of e){const e=r.find((e=>e.agent===n.agent));if(e){if(e.dates.push(n.date),bt(r)>t){e.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),bt(r)>t){r.pop();break}i=i.slice(1)}return{heartbeatsToSend:r,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=pe(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vt(){return(new Date).toISOString().substring(0,10)}class wt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!we()&&be().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await pt()).transaction(dt).objectStore(dt).get(gt(e))}catch(e){throw ot.create("storage-get",{originalErrorMessage:e.message})}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ft(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return ft(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function bt(e){return pe(JSON.stringify({version:2,heartbeats:e})).length}var yt;yt="",nt(new Ue("platform-logger",(e=>new Je(e)),"PRIVATE")),nt(new Ue("heartbeat",(e=>new mt(e)),"PRIVATE")),ht(Ye,Xe,yt),ht(Ye,Xe,"esm2017"),ht("fire-js","");ht("firebase","9.6.9","app");const _t="@firebase/installations",It="0.5.6",xt=1e4,Et="w:0.5.6",kt="FIS_v2",Tt=36e5,St=new _e("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function At(e){return e instanceof ye&&e.code.includes("request-failed")}function Ct({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function $t(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Pt(e,t){const r=(await t.json()).error;return St.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Ot({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Rt(e,{refreshToken:t}){const r=Ot(e);return r.append("Authorization",function(e){return`FIS_v2 ${e}`}(t)),r}async function Nt(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Mt(e){return new Promise((t=>{setTimeout(t,e)}))}const Lt=/^[cdef][\w-]{21}$/;function Dt(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}(e);return Lt.test(t)?t:""}catch(e){return""}}function Ut(e){return`${e.appName}!${e.appId}`}const zt=new Map;function jt(e,t){const r=Ut(e);Ht(r,t),function(e,t){const r=Vt();r&&r.postMessage({key:e,fid:t});Bt()}(r,t)}function Ht(e,t){const r=zt.get(e);if(r)for(const e of r)e(t)}let Ft=null;function Vt(){return!Ft&&"BroadcastChannel"in self&&(Ft=new BroadcastChannel("[Firebase] FID Change"),Ft.onmessage=e=>{Ht(e.data.key,e.data.fid)}),Ft}function Bt(){0===zt.size&&Ft&&(Ft.close(),Ft=null)}const Wt="firebase-installations-store";let qt=null;function Kt(){return qt||(qt=De("firebase-installations-database",1,((e,t)=>{if(0===t)e.createObjectStore(Wt)}))),qt}async function Gt(e,t){const r=Ut(e),i=(await Kt()).transaction(Wt,"readwrite"),n=i.objectStore(Wt),s=await n.get(r);return await n.put(t,r),await i.complete,s&&s.fid===t.fid||jt(e,t.fid),t}async function Jt(e){const t=Ut(e),r=(await Kt()).transaction(Wt,"readwrite");await r.objectStore(Wt).delete(t),await r.complete}async function Yt(e,t){const r=Ut(e),i=(await Kt()).transaction(Wt,"readwrite"),n=i.objectStore(Wt),s=await n.get(r),o=t(s);return void 0===o?await n.delete(r):await n.put(o,r),await i.complete,!o||s&&s.fid===o.fid||jt(e,o.fid),o}async function Xt(e){let t;const r=await Yt(e.appConfig,(r=>{const i=function(e){return er(e||{fid:Dt(),registrationStatus:0})}(r),n=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(St.create("app-offline"))}}const r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const r=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:r}){const i=Ct(e),n=Ot(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&n.append("x-firebase-client",e)}const o={fid:r,authVersion:kt,appId:e.appId,sdkVersion:Et},a={method:"POST",headers:n,body:JSON.stringify(o)},c=await Nt((()=>fetch(i,a)));if(c.ok){const e=await c.json();return{fid:e.fid||r,registrationStatus:2,refreshToken:e.refreshToken,authToken:$t(e.authToken)}}throw await Pt("Create Installation",c)}(e,t);return Gt(e.appConfig,r)}catch(r){throw At(r)&&409===r.customData.serverCode?await Jt(e.appConfig):await Gt(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}(e,r);return{installationEntry:r,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Zt(e)}:{installationEntry:t}}(e,i);return t=n.registrationPromise,n.installationEntry}));return""===r.fid?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}async function Zt(e){let t=await Qt(e.appConfig);for(;1===t.registrationStatus;)await Mt(100),t=await Qt(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:r}=await Xt(e);return r||t}return t}function Qt(e){return Yt(e,(e=>{if(!e)throw St.create("installation-not-found");return er(e)}))}function er(e){return 1===(t=e).registrationStatus&&t.registrationTime+xt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}async function tr({appConfig:e,heartbeatServiceProvider:t},r){const i=function(e,{fid:t}){return`${Ct(e)}/${t}/authTokens:generate`}(e,r),n=Rt(e,r),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&n.append("x-firebase-client",e)}const o={installation:{sdkVersion:Et,appId:e.appId}},a={method:"POST",headers:n,body:JSON.stringify(o)},c=await Nt((()=>fetch(i,a)));if(c.ok){return $t(await c.json())}throw await Pt("Generate Auth Token",c)}async function rr(e,t=!1){let r;const i=await Yt(e.appConfig,(i=>{if(!nr(i))throw St.create("not-registered");const n=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Tt}(e)}(n))return i;if(1===n.requestStatus)return r=async function(e,t){let r=await ir(e.appConfig);for(;1===r.authToken.requestStatus;)await Mt(100),r=await ir(e.appConfig);const i=r.authToken;return 0===i.requestStatus?rr(e,t):i}(e,t),i;{if(!navigator.onLine)throw St.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return r=async function(e,t){try{const r=await tr(e,t),i=Object.assign(Object.assign({},t),{authToken:r});return await Gt(e.appConfig,i),r}catch(r){if(!At(r)||401!==r.customData.serverCode&&404!==r.customData.serverCode){const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Gt(e.appConfig,r)}else await Jt(e.appConfig);throw r}}(e,t),t}}));return r?await r:i.authToken}function ir(e){return Yt(e,(e=>{if(!nr(e))throw St.create("not-registered");const t=e.authToken;return 1===(r=t).requestStatus&&r.requestTime+xt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var r}))}function nr(e){return void 0!==e&&2===e.registrationStatus}async function sr(e,t=!1){const r=e;await async function(e){const{registrationPromise:t}=await Xt(e);t&&await t}(r);return(await rr(r,t)).token}function or(e){return St.create("missing-app-config-values",{valueName:e})}const ar="installations",cr=e=>{const t=e.getProvider("app").getImmediate(),r=function(e){if(!e||!e.options)throw or("App Configuration");if(!e.name)throw or("App Name");const t=["projectId","apiKey","appId"];for(const r of t)if(!e.options[r])throw or(r);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:r,heartbeatServiceProvider:st(t,"heartbeat"),_delete:()=>Promise.resolve()}},lr=e=>{const t=st(e.getProvider("app").getImmediate(),ar).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:r,registrationPromise:i}=await Xt(t);return i?i.catch(console.error):rr(t).catch(console.error),r.fid}(t),getToken:e=>sr(t,e)}};nt(new Ue(ar,cr,"PUBLIC")),nt(new Ue("installations-internal",lr,"PRIVATE")),ht(_t,It),ht(_t,It,"esm2017");const hr="analytics",dr="https://www.googletagmanager.com/gtag/js",ur=new Ge("@firebase/analytics");function pr(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function fr(e,t,r,i){return async function(n,s,o){try{"event"===n?await async function(e,t,r,i,n){try{let s=[];if(n&&n.send_to){let e=n.send_to;Array.isArray(e)||(e=[e]);const i=await pr(r);for(const r of e){const e=i.find((e=>e.measurementId===r)),n=e&&t[e.appId];if(!n){s=[];break}s.push(n)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,n||{})}catch(e){ur.error(e)}}(e,t,r,s,o):"config"===n?await async function(e,t,r,i,n,s){const o=i[n];try{if(o)await t[o];else{const e=(await pr(r)).find((e=>e.measurementId===n));e&&await t[e.appId]}}catch(e){ur.error(e)}e("config",n,s)}(e,t,r,i,s,o):e("set",s)}catch(e){ur.error(e)}}}const gr=new _e("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const mr=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function vr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function wr(e,t=mr,r){const{appId:i,apiKey:n,measurementId:s}=e.options;if(!i)throw gr.create("no-app-id");if(!n){if(s)return{measurementId:s,appId:i};throw gr.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new yr;return setTimeout((async()=>{a.abort()}),void 0!==r?r:6e4),br({appId:i,apiKey:n,measurementId:s},o,a,t)}async function br(e,{throttleEndTimeMillis:t,backoffCount:r},i,n=mr){const{appId:s,measurementId:o}=e;try{await function(e,t){return new Promise(((r,i)=>{const n=Math.max(t-Date.now(),0),s=setTimeout(r,n);e.addEventListener((()=>{clearTimeout(s),i(gr.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(e){if(o)return ur.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:o};throw e}try{const t=await async function(e){var t;const{appId:r,apiKey:i}=e,n={method:"GET",headers:vr(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",r),o=await fetch(s,n);if(200!==o.status&&304!==o.status){let e="";try{const r=await o.json();(null===(t=r.error)||void 0===t?void 0:t.message)&&(e=r.error.message)}catch(e){}throw gr.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return n.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof ye&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(n.deleteThrottleMetadata(s),o)return ur.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:o};throw t}const a=503===Number(t.customData.httpStatus)?$e(r,n.intervalMillis,30):$e(r,n.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:r+1};return n.setThrottleMetadata(s,c),ur.debug(`Calling attemptFetch again in ${a} millis`),br(e,c,i,n)}}class yr{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}async function _r(e,t,r,i,n,s,o){var a;const c=wr(e);c.then((t=>{r[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&ur.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>ur.error(e))),t.push(c);const l=async function(){if(!we())return ur.warn(gr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await be()}catch(e){return ur.warn(gr.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}().then((e=>e?i.getId():void 0)),[h,d]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(dr))return t;return null})()||function(e,t){const r=document.createElement("script");r.src=`${dr}?l=${e}&id=${t}`,r.async=!0,document.head.appendChild(r)}(s,h.measurementId),n("js",new Date);const u=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return u.origin="firebase",u.update=!0,null!=d&&(u.firebase_id=d),n("config",h.measurementId,u),h.measurementId}class Ir{constructor(e){this.app=e}_delete(){return delete xr[this.app.options.appId],Promise.resolve()}}let xr={},Er=[];const kr={};let Tr,Sr,Ar="dataLayer",Cr="gtag",$r=!1;function Pr(){const e=[];if(ve()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),r=gr.create("invalid-analytics-context",{errorInfo:t});ur.warn(r.message)}}function Or(e,t,r){Pr();const i=e.options.appId;if(!i)throw gr.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw gr.create("no-api-key");ur.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=xr[i])throw gr.create("already-exists",{id:i});if(!$r){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Ar);const{wrappedGtag:e,gtagCore:t}=function(e,t,r,i,n){let s=function(...e){window[i].push(arguments)};return window[n]&&"function"==typeof window[n]&&(s=window[n]),window[n]=fr(s,e,t,r),{gtagCore:s,wrappedGtag:window[n]}}(xr,Er,kr,Ar,Cr);Sr=e,Tr=t,$r=!0}xr[i]=_r(e,Er,kr,t,Tr,Ar,r);return new Ir(e)}function Rr(e,t,r,i){e=Pe(e),async function(e,t,r,i,n){if(n&&n.global)e("event",r,i);else{const n=await t;e("event",r,Object.assign(Object.assign({},i),{send_to:n}))}}(Sr,xr[e.app.options.appId],t,r,i).catch((e=>ur.error(e)))}const Nr="@firebase/analytics",Mr="0.7.6";nt(new Ue(hr,((e,{options:t})=>Or(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),nt(new Ue("analytics-internal",(function(e){try{const t=e.getProvider(hr).getImmediate();return{logEvent:(e,r,i)=>Rr(t,e,r,i)}}catch(e){throw gr.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),ht(Nr,Mr),ht(Nr,Mr,"esm2017");const Lr=function(e,t={}){if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Qe,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw ot.create("bad-app-name",{appName:String(i)});const n=tt.get(i);if(n){if(xe(e,n.options)&&xe(r,n.config))return n;throw ot.create("duplicate-app",{appName:i})}const s=new He(i);for(const e of rt.values())s.addComponent(e);const o=new at(e,r,s);return tt.set(i,o),o}({apiKey:"AIzaSyDJr7Kb7wcetj_QyYPresYjwF6C59IVXt8",authDomain:"schmoozer-social.firebaseapp.com",projectId:"schmoozer-social",storageBucket:"schmoozer-social.appspot.com",messagingSenderId:"50960531443",appId:"1:50960531443:web:a7025e2afe14055f02dc86",measurementId:"G-TF8QR9L2B6",databaseURL:"https://schmoozer-social-default-rtdb.europe-west1.firebasedatabase.app/"});!function(e=lt()){const t=st(e=Pe(e),hr);t.isInitialized()?t.getImmediate():function(e,t={}){const r=st(e,hr);if(r.isInitialized()){const e=r.getImmediate();if(xe(t,r.getOptions()))return e;throw gr.create("already-initialized")}r.initialize({options:t})}(e)}(Lr);function Dr(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]])}return r}Object.create;Object.create;function Ur(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zr=Ur,jr=new _e("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Hr=new Ge("@firebase/auth");function Fr(e,...t){Hr.logLevel<=Ve.ERROR&&Hr.error(`Auth (9.6.9): ${e}`,...t)}function Vr(e,...t){throw qr(e,...t)}function Br(e,...t){return qr(e,...t)}function Wr(e,t,r){const i=Object.assign(Object.assign({},zr()),{[t]:r});return new _e("auth","Firebase",i).create(t,{appName:e.name})}function qr(e,...t){if("string"!=typeof e){const r=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(r,...i)}return jr.create(e,...t)}function Kr(e,t,...r){if(!e)throw qr(t,...r)}function Gr(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Fr(t),new Error(t)}function Jr(e,t){e||Gr(t)}const Yr=new Map;function Xr(e){Jr(e instanceof Function,"Expected a class definition");let t=Yr.get(e);return t?(Jr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Yr.set(e,t),t)}function Zr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Qr(){return"http:"===ei()||"https:"===ei()}function ei(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}class ti{constructor(e,t){this.shortDelay=e,this.longDelay=t,Jr(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Qr()||ve()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}function ri(e,t){Jr(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}class ii{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Gr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Gr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Gr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const ni={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},si=new ti(3e4,6e4);function oi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ai(e,t,r,i,n={}){return ci(e,n,(async()=>{let n={},s={};i&&("GET"===t?s=i:n={body:JSON.stringify(i)});const o=ke(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),ii.fetch()(hi(e,e.config.apiHost,r,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},n))}))}async function ci(e,t,r){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},ni),t);try{const t=new di(e),n=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();const s=await n.json();if("needConfirmation"in s)throw ui(e,"account-exists-with-different-credential",s);if(n.ok&&!("errorMessage"in s))return s;{const t=n.ok?s.errorMessage:s.error.message,[r,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw ui(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===r)throw ui(e,"email-already-in-use",s);const a=i[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Wr(e,a,o);Vr(e,a)}}catch(t){if(t instanceof ye)throw t;Vr(e,"network-request-failed")}}async function li(e,t,r,i,n={}){const s=await ai(e,t,r,i,n);return"mfaPendingCredential"in s&&Vr(e,"multi-factor-auth-required",{_serverResponse:s}),s}function hi(e,t,r,i){const n=`${t}${r}?${i}`;return e.config.emulator?ri(e.config,n):`${e.config.apiScheme}://${n}`}class di{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Br(this.auth,"network-request-failed"))),si.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ui(e,t,r){const i={appName:e.name};r.email&&(i.email=r.email),r.phoneNumber&&(i.phoneNumber=r.phoneNumber);const n=Br(e,t,i);return n.customData._tokenResponse=r,n}function pi(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function fi(e){return 1e3*Number(e)}function gi(e){const[t,r,i]=e.split(".");if(void 0===t||void 0===r||void 0===i)return Fr("JWT malformed, contained fewer than 3 sections"),null;try{const e=fe(r);return e?JSON.parse(e):(Fr("Failed to decode base64 JWT payload"),null)}catch(e){return Fr("Caught error parsing JWT payload as JSON",e),null}}async function mi(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof ye&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class vi{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}class wi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pi(this.lastLoginAt),this.creationTime=pi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function bi(e){var t;const r=e.auth,i=await e.getIdToken(),n=await mi(e,async function(e,t){return ai(e,"POST","/v1/accounts:lookup",t)}(r,{idToken:i}));Kr(null==n?void 0:n.users.length,r,"internal-error");const s=n.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,r=Dr(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})):[];const a=function(e,t){const r=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...r,...t]}(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),h=!!c&&l,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new wi(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,d)}class yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Kr(e.idToken,"internal-error"),Kr(void 0!==e.idToken,"internal-error"),Kr(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=gi(e);return Kr(t,"internal-error"),Kr(void 0!==t.exp,"internal-error"),Kr(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Kr(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:n}=await async function(e,t){const r=await ci(e,{},(async()=>{const r=ke({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:n}=e.config,s=hi(e,i,"/v1/token",`key=${n}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",ii.fetch()(s,{method:"POST",headers:o,body:r})}));return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}(e,t);this.updateTokensAndExpiration(r,i,Number(n))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:n}=t,s=new yi;return r&&(Kr("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),i&&(Kr("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),n&&(Kr("number"==typeof n,"internal-error",{appName:e}),s.expirationTime=n),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yi,this.toJSON())}_performRefresh(){return Gr("not implemented")}}function _i(e,t){Kr("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Ii{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,n=Dr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vi(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new wi(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const t=await mi(this,this.stsTokenManager.getToken(this.auth,e));return Kr(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const r=Pe(e),i=await r.getIdToken(t),n=gi(i);Kr(n&&n.exp&&n.auth_time&&n.iat,r.auth,"internal-error");const s="object"==typeof n.firebase?n.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:n,token:i,authTime:pi(fi(n.auth_time)),issuedAtTime:pi(fi(n.iat)),expirationTime:pi(fi(n.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Pe(e);await bi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Kr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Kr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await bi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mi(this,async function(e,t){return ai(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,n,s,o,a,c,l;const h=null!==(r=t.displayName)&&void 0!==r?r:void 0,d=null!==(i=t.email)&&void 0!==i?i:void 0,u=null!==(n=t.phoneNumber)&&void 0!==n?n:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:w,emailVerified:b,isAnonymous:y,providerData:_,stsTokenManager:I}=t;Kr(w&&I,e,"internal-error");const x=yi.fromJSON(this.name,I);Kr("string"==typeof w,e,"internal-error"),_i(h,e.name),_i(d,e.name),Kr("boolean"==typeof b,e,"internal-error"),Kr("boolean"==typeof y,e,"internal-error"),_i(u,e.name),_i(p,e.name),_i(f,e.name),_i(g,e.name),_i(m,e.name),_i(v,e.name);const E=new Ii({uid:w,auth:e,email:d,emailVerified:b,displayName:h,isAnonymous:y,photoURL:p,phoneNumber:u,tenantId:f,stsTokenManager:x,createdAt:m,lastLoginAt:v});return _&&Array.isArray(_)&&(E.providerData=_.map((e=>Object.assign({},e)))),g&&(E._redirectEventId=g),E}static async _fromIdTokenResponse(e,t,r=!1){const i=new yi;i.updateFromServerResponse(t);const n=new Ii({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bi(n),n}}class xi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xi.type="NONE";const Ei=xi;function ki(e,t,r){return`firebase:${e}:${t}:${r}`}class Ti{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:n}=this.auth;this.fullUserKey=ki(this.userKey,i.apiKey,n),this.fullPersistenceKey=ki("persistence",i.apiKey,n),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ii._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Ti(Xr(Ei),e,r);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let n=i[0]||Xr(Ei);const s=ki(r,e.config.apiKey,e.name);let o=null;for(const r of t)try{const t=await r._get(s);if(t){const i=Ii._fromJSON(e,t);r!==n&&(o=i),n=r;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return n._shouldAllowMigration&&a.length?(n=a[0],o&&await n._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==n)try{await e._remove(s)}catch(e){}}))),new Ti(n,e,r)):new Ti(n,e,r)}}function Si(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Pi(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ai(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ri(t))return"Blackberry";if(Ni(t))return"Webos";if(Ci(t))return"Safari";if((t.includes("chrome/")||$i(t))&&!t.includes("edge/"))return"Chrome";if(Oi(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===(null==r?void 0:r.length))return r[1]}return"Other"}function Ai(e=me()){return/firefox\//i.test(e)}function Ci(e=me()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function $i(e=me()){return/crios\//i.test(e)}function Pi(e=me()){return/iemobile/i.test(e)}function Oi(e=me()){return/android/i.test(e)}function Ri(e=me()){return/blackberry/i.test(e)}function Ni(e=me()){return/webos/i.test(e)}function Mi(e=me()){return/iphone|ipad|ipod/i.test(e)}function Li(){return function(){const e=me();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Di(e=me()){return Mi(e)||Oi(e)||Ni(e)||Ri(e)||/windows phone/i.test(e)||Pi(e)}function Ui(e,t=[]){let r;switch(e){case"Browser":r=Si(me());break;case"Worker":r=`${Si(me())}-${e}`;break;default:r=e}return`${r}/JsCore/9.6.9/${t.length?t.join(","):"FirebaseCore-web"}`}class zi{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hi(this),this.idTokenSubscription=new Hi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xr(t)),this._initializationPromise=this.queue((async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ti.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,n=null==r?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==n||!(null==s?void 0:s.user)||(r=s.user)}return r?r._redirectEventId?(Kr(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bi(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Pe(e):null;return t&&Kr(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Kr(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Xr(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _e("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xr(e)||this._popupRedirectResolver;Kr(t,this,"argument-error"),this.redirectPersistenceManager=await Ti.create(this,[Xr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const n="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Kr(s,this,"internal-error"),s.then((()=>n(this.currentUser))),"function"==typeof t?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Kr(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ui(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function ji(e){return Pe(e)}class Hi{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const r=new Ae(e,t);return r.subscribe.bind(r)}((e=>this.observer=e))}get next(){return Kr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}class Fi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Gr("not implemented")}_getIdTokenResponse(e){return Gr("not implemented")}_linkToIdToken(e,t){return Gr("not implemented")}_getReauthenticationResolver(e){return Gr("not implemented")}}async function Vi(e,t){return ai(e,"POST","/v1/accounts:update",t)}class Bi extends Fi{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Bi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Bi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return async function(e,t){return li(e,"POST","/v1/accounts:signInWithPassword",oi(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return li(e,"POST","/v1/accounts:signInWithEmailLink",oi(e,t))}(e,{email:this._email,oobCode:this._password});default:Vr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Vi(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return li(e,"POST","/v1/accounts:signInWithEmailLink",oi(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Vr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}async function Wi(e,t){return li(e,"POST","/v1/accounts:signInWithIdp",oi(e,t))}class qi extends Fi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new qi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Vr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,n=Dr(t,["providerId","signInMethod"]);if(!r||!i)return null;const s=new qi(r,i);return s.idToken=n.idToken||void 0,s.accessToken=n.accessToken||void 0,s.secret=n.secret,s.nonce=n.nonce,s.pendingToken=n.pendingToken||null,s}_getIdTokenResponse(e){return Wi(e,this.buildRequest())}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Wi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wi(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ke(t)}return e}}const Ki={USER_NOT_FOUND:"user-not-found"};class Gi extends Fi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Gi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Gi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return li(e,"POST","/v1/accounts:signInWithPhoneNumber",oi(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const r=await li(e,"POST","/v1/accounts:signInWithPhoneNumber",oi(e,t));if(r.temporaryProof)throw ui(e,"account-exists-with-different-credential",r);return r}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return li(e,"POST","/v1/accounts:signInWithPhoneNumber",oi(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ki)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:n}=e;return r||t||i||n?new Gi({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:n}):null}}class Ji{constructor(e){var t,r,i,n,s,o;const a=Te(Se(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(r=a.oobCode)&&void 0!==r?r:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Kr(c&&l&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=l,this.continueUrl=null!==(n=a.continueUrl)&&void 0!==n?n:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Te(Se(e)).link,r=t?Te(Se(t)).deep_link_id:null,i=Te(Se(e)).deep_link_id;return(i?Te(Se(i)).link:null)||i||r||t||e}(e);try{return new Ji(t)}catch(e){return null}}}class Yi{constructor(){this.providerId=Yi.PROVIDER_ID}static credential(e,t){return Bi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ji.parseLink(t);return Kr(r,"argument-error"),Bi._fromEmailAndCode(e,r.code,r.tenantId)}}Yi.PROVIDER_ID="password",Yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";class Xi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}class Zi extends Xi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Qi extends Zi{constructor(){super("facebook.com")}static credential(e){return qi._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qi.credentialFromTaggedObject(e)}static credentialFromError(e){return Qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Qi.credential(e.oauthAccessToken)}catch(e){return null}}}Qi.FACEBOOK_SIGN_IN_METHOD="facebook.com",Qi.PROVIDER_ID="facebook.com";class en extends Zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return qi._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return en.credential(t,r)}catch(e){return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com",en.PROVIDER_ID="google.com";class tn extends Zi{constructor(){super("github.com")}static credential(e){return qi._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch(e){return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com",tn.PROVIDER_ID="github.com";class rn extends Zi{constructor(){super("twitter.com")}static credential(e,t){return qi._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return rn.credential(t,r)}catch(e){return null}}}async function nn(e,t){return li(e,"POST","/v1/accounts:signUp",oi(e,t))}rn.TWITTER_SIGN_IN_METHOD="twitter.com",rn.PROVIDER_ID="twitter.com";class sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const n=await Ii._fromIdTokenResponse(e,r,i),s=on(r);return new sn({user:n,providerId:s,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=on(r);return new sn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function on(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}class an extends ye{constructor(e,t,r,i){var n;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,an.prototype),this.customData={appName:e.name,tenantId:null!==(n=e.tenantId)&&void 0!==n?n:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new an(e,t,r,i)}}function cn(e,t,r,i){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((r=>{if("auth/multi-factor-auth-required"===r.code)throw an._fromErrorAndOperation(e,r,t,i);throw r}))}async function ln(e,t,r=!1){const i=await mi(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return sn._forOperation(e,"link",i)}async function hn(e,t,r=!1){const{auth:i}=e,n="reauthenticate";try{const s=await mi(e,cn(i,n,t,e),r);Kr(s.idToken,i,"internal-error");const o=gi(s.idToken);Kr(o,i,"internal-error");const{sub:a}=o;return Kr(e.uid===a,i,"user-mismatch"),sn._forOperation(e,n,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Vr(i,"user-mismatch"),e}}async function dn(e,t,r=!1){const i="signIn",n=await cn(e,i,t),s=await sn._fromIdTokenResponse(e,i,n);return r||await e._updateCurrentUser(s.user),s}async function un(e,t){return dn(ji(e),t)}async function pn(e,{displayName:t,photoURL:r}){if(void 0===t&&void 0===r)return;const i=Pe(e),n={idToken:await i.getIdToken(),displayName:t,photoUrl:r,returnSecureToken:!0},s=await mi(i,async function(e,t){return ai(e,"POST","/v1/accounts:update",t)}(i.auth,n));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const o=i.providerData.find((({providerId:e})=>"password"===e));o&&(o.displayName=i.displayName,o.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}new WeakMap;const fn="__sak";class gn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fn,"1"),this.storage.removeItem(fn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class mn extends gn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=me();return Ci(e)||Mi(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Di(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,r)=>{this.notifyListeners(e,r)}));const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},n=this.storage.getItem(r);Li()&&n!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mn.type="LOCAL";const vn=mn;class wn extends gn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}wn.type="SESSION";const bn=wn;class yn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const r=new yn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:n}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,n))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}function _n(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}yn.receivers=[];class In{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let n,s;return new Promise(((o,a)=>{const c=_n("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),r);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),n=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(n),o(t.data.response);break;default:clearTimeout(l),clearTimeout(n),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}function xn(){return window}function En(){return void 0!==xn().WorkerGlobalScope&&"function"==typeof xn().importScripts}const kn="firebaseLocalStorageDb",Tn="firebaseLocalStorage",Sn="fbase_key";class An{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Cn(e,t){return e.transaction([Tn],t?"readwrite":"readonly").objectStore(Tn)}function $n(){const e=indexedDB.open(kn,1);return new Promise(((t,r)=>{e.addEventListener("error",(()=>{r(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Tn,{keyPath:Sn})}catch(e){r(e)}})),e.addEventListener("success",(async()=>{const r=e.result;r.objectStoreNames.contains(Tn)?t(r):(r.close(),await function(){const e=indexedDB.deleteDatabase(kn);return new An(e).toPromise()}(),t(await $n()))}))}))}async function Pn(e,t,r){const i=Cn(e,!0).put({[Sn]:t,value:r});return new An(i).toPromise()}function On(e,t){const r=Cn(e,!0).delete(t);return new An(r).toPromise()}class Rn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await $n()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return En()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yn._getInstance(En()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new In(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $n();return await Pn(e,fn,"1"),await On(e,fn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((r=>Pn(r,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const r=Cn(e,!1).get(t),i=await new An(r).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>On(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Cn(e,!1).getAll();return new An(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],r=new Set;for(const{fbase_key:i,value:n}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(n)&&(this.notifyListeners(i,n),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Rn.type="LOCAL";const Nn=Rn;function Mn(e){return new Promise(((t,r)=>{const i=document.createElement("script");var n,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Br("internal-error");t.customData=e,r(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==s?s:document).appendChild(i)}))}function Ln(e){return`__${e}${Math.floor(1e6*Math.random())}`}Ln("rcb"),new ti(3e4,6e4);const Dn="recaptcha";async function Un(e,t,r){var i;const n=await r.verify();try{let s;if(Kr("string"==typeof n,e,"argument-error"),Kr(r.type===Dn,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Kr("enroll"===t.type,e,"internal-error");const r=await function(e,t){return ai(e,"POST","/v2/accounts/mfaEnrollment:start",oi(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:n}});return r.phoneSessionInfo.sessionInfo}{Kr("signin"===t.type,e,"internal-error");const r=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;Kr(r,e,"missing-multi-factor-info");const o=await function(e,t){return ai(e,"POST","/v2/accounts/mfaSignIn:start",oi(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:n}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return ai(e,"POST","/v1/accounts:sendVerificationCode",oi(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:n});return t}}finally{r._reset()}}class zn{constructor(e){this.providerId=zn.PROVIDER_ID,this.auth=ji(e)}verifyPhoneNumber(e,t){return Un(this.auth,e,Pe(t))}static credential(e,t){return Gi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return zn.credentialFromTaggedObject(t)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?Gi._fromTokenResponse(t,r):null}}function jn(e,t){return t?Xr(t):(Kr(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}zn.PROVIDER_ID="phone",zn.PHONE_SIGN_IN_METHOD="phone";class Hn extends Fi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fn(e){return dn(e.auth,new Hn(e),e.bypassAuthState)}function Vn(e){const{auth:t,user:r}=e;return Kr(r,t,"internal-error"),hn(r,new Hn(e),e.bypassAuthState)}async function Bn(e){const{auth:t,user:r}=e;return Kr(r,t,"internal-error"),ln(r,new Hn(e),e.bypassAuthState)}class Wn{constructor(e,t,r,i,n=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=n,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:n,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:r,tenantId:n||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fn;case"linkViaPopup":case"linkViaRedirect":return Bn;case"reauthViaPopup":case"reauthViaRedirect":return Vn;default:Vr(this.auth,"internal-error")}}resolve(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const qn=new ti(2e3,1e4);class Kn extends Wn{constructor(e,t,r,i,n){super(e,t,i,n),this.provider=r,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Kr(e,this.auth,"internal-error"),e}async onExecution(){Jr(1===this.filter.length,"Popup operations only handle one event");const e=_n();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Br(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Br(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Br(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,qn.get())};e()}}Kn.currentPopupAction=null;const Gn=new Map;class Jn extends Wn{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Gn.get(this.auth._key());if(!e){try{const t=await async function(e,t){const r=Xn(t),i=Yn(e);if(!await i._isAvailable())return!1;const n="true"===await i._get(r);return await i._remove(r),n}(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Gn.set(this.auth._key(),e)}return this.bypassAuthState||Gn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Yn(e){return Xr(e._redirectPersistence)}function Xn(e){return ki("pendingRedirect",e.config.apiKey,e.name)}async function Zn(e,t,r=!1){const i=ji(e),n=jn(i,t),s=new Jn(i,n,r),o=await s.execute();return o&&!r&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Qn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ts(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!ts(e)){const i=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(Br(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(es(e))}saveEventToCache(e){this.cachedEventUids.add(es(e)),this.lastProcessedEventTime=Date.now()}}function es(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ts({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}const rs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,is=/^https?/;async function ns(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return ai(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(ss(e))return}catch(e){}Vr(e,"unauthorized-domain")}function ss(e){const t=Zr(),{protocol:r,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const n=new URL(e);return""===n.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&n.hostname===i}if(!is.test(r))return!1;if(rs.test(e))return i===e;const n=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(i)}const os=new ti(3e4,6e4);function as(){const e=xn().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let cs=null;function ls(e){return cs=cs||function(e){return new Promise(((t,r)=>{var i,n,s;function o(){as(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{as(),r(Br(e,"network-request-failed"))},timeout:os.get()})}if(null===(n=null===(i=xn().gapi)||void 0===i?void 0:i.iframes)||void 0===n?void 0:n.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=xn().gapi)||void 0===s?void 0:s.load)){const t=Ln("iframefcb");return xn()[t]=()=>{gapi.load?o():r(Br(e,"network-request-failed"))},Mn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>r(e)))}o()}})).catch((e=>{throw cs=null,e}))}(e),cs}const hs=new ti(5e3,15e3),ds={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},us=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ps(e){const t=e.config;Kr(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?ri(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:ct},n=us.get(e.config.apiHost);n&&(i.eid=n);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${r}?${ke(i).slice(1)}`}const fs={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class gs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ms(e,t,r,i=500,n=600){const s=Math.max((window.screen.availHeight-n)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},fs),{width:i.toString(),height:n.toString(),top:s,left:o}),l=me().toLowerCase();r&&(a=$i(l)?"_blank":r),Ai(l)&&(t=t||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,r])=>`${e}${t}=${r},`),"");if(function(e=me()){var t;return Mi(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const r=document.createElement("a");r.href=e,r.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(i)}(t||"",a),new gs(null);const d=window.open(t||"",a,h);Kr(d,e,"popup-blocked");try{d.focus()}catch(e){}return new gs(d)}const vs="__/auth/handler",ws="emulator/auth/handler";function bs(e,t,r,i,n,s){Kr(e.config.authDomain,e,"auth-domain-config-required"),Kr(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:ct,eventId:n};if(t instanceof Xi){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Zi){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${vs}`;return ri(e,ws)}(e)}?${ke(a).slice(1)}`}const ys="webStorageSupport";const _s=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bn,this._completeRedirectFn=Zn}async _openPopup(e,t,r,i){var n;Jr(null===(n=this.eventManagers[e._key()])||void 0===n?void 0:n.manager,"_initialize() not called before _openPopup()");return ms(e,bs(e,t,r,Zr(),i),_n())}async _openRedirect(e,t,r,i){var n;return await this._originValidation(e),n=bs(e,t,r,Zr(),i),xn().location.href=n,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(Jr(r,"If manager is not set, promise should be"),r)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch((()=>{delete this.eventManagers[t]})),r}async initAndGetManager(e){const t=await async function(e){const t=await ls(e),r=xn().gapi;return Kr(r,e,"internal-error"),t.open({where:document.body,url:ps(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ds,dontclear:!0},(t=>new Promise((async(r,i)=>{await t.restyle({setHideOnLeave:!1});const n=Br(e,"network-request-failed"),s=xn().setTimeout((()=>{i(n)}),hs.get());function o(){xn().clearTimeout(s),r(t)}t.ping(o).then(o,(()=>{i(n)}))}))))}(e),r=new Qn(e);return t.register("authEvent",(t=>{Kr(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ys,{type:ys},(r=>{var i;const n=null===(i=null==r?void 0:r[0])||void 0===i?void 0:i.webStorageSupport;void 0!==n&&t(!!n),Vr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ns(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Di()||Ci()||Mi()}};var Is,xs="@firebase/auth",Es="0.19.10";class ks{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Kr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}Is="Browser",nt(new Ue("auth",((e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:n,authDomain:s}=r.options;return((e,r)=>{Kr(n&&!n.includes(":"),"invalid-api-key",{appName:e.name}),Kr(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:n,authDomain:s,clientPlatform:Is,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ui(Is)},o=new zi(e,r,i);return function(e,t){const r=(null==t?void 0:t.persistence)||[],i=(Array.isArray(r)?r:[r]).map(Xr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(o,t),o})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,r)=>{e.getProvider("auth-internal").initialize()}))),nt(new Ue("auth-internal",(e=>(e=>new ks(e))(ji(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),ht(xs,Es,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Is)),ht(xs,Es,"esm2017");var Ts=r(161),Ss=r.n(Ts);const As=e=>localStorage.setItem("userData",JSON.stringify(e)),Cs=function(e=lt()){const t=st(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const r=st(e,"auth");if(r.isInitialized()){const e=r.getImmediate();if(xe(r.getOptions(),null!=t?t:{}))return e;Vr(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:_s,persistence:[Nn,vn,bn]})}(Lr);let $s="unknown";!function(e,t,r,i){Pe(e).onAuthStateChanged(t,r,i)}(Cs,(e=>{e?(console.log("HERE IS"),$s=e):console.log("NOT LOGGED")}));const Ps=(e,t)=>function(e,t,r){return un(Pe(e),Yi.credential(t,r))}(Cs,e,t).then((e=>{console.log("Successfully logged in!"),As({displayName:e.user.displayName,email:e.user.email,uid:e.user.uid,createdAt:e.user.metadata.createdAt,photoURL:e.user.photoURL,accessToken:e.user.accessToken}),Ss().redirect("/")})).catch((e=>{throw e})),Os=(e,t,r,i)=>async function(e,t,r){const i=ji(e),n=await nn(i,{returnSecureToken:!0,email:t,password:r}),s=await sn._fromIdTokenResponse(i,"signIn",n);return await i._updateCurrentUser(s.user),s}(Cs,t,i).then((t=>{pn(Cs.currentUser,{displayName:e,photoURL:r}),console.log(t),As({displayName:t.user.displayName,email:t.user.email,uid:t.user.uid,createdAt:t.user.metadata.createdAt,photoURL:t.user.metadata.photoURL,accessToken:t.user.accessToken}),console.log("Successfully registered!"),Ss().redirect("/")})).catch((e=>{throw e})),Rs=()=>function(e){return Pe(e).signOut()}(Cs).then((()=>{console.log("Successfully logged out!"),localStorage.removeItem("userData"),Ss().redirect("/")})).catch((e=>{alert(e.message)}));class Ns extends re{static properties={errorMsg:{type:String}};static styles=[he,le,o`
		`];constructor(){super(),this.errorMsg="",this.errorEmail=!1,this.errorPassword=!1}showHidePassword(e){e.preventDefault(),this.renderRoot.querySelectorAll(".pass").forEach((t=>{"password"===t.getAttribute("type")?(t.setAttribute("type","text"),e.target.innerHTML="&#10005"):(t.setAttribute("type","password"),e.target.innerHTML="&equiv;")}))}simpleValidation(e,t){if(""===e||""===t)throw new Error("Fill all fields.")}async onSubmit(e){e.preventDefault();const t=e.target,r=new FormData(e.target),i=r.get("email").trim();let n=r.get("password").trim();try{if(""===i||""===n)throw{code:"empty fields"};await Ps(i,n)}catch(e){const r=e.code;this.errorMsg="empty fields"===r?"Please fill all fields.":"auth/invalid-email"===r?"Invalid email.":"auth/user-disabled"===r?"The user has been disabled.":"auth/user-not-found"===r?"There is no such user.":"Email or password is wrong.",this.errorEmail=""===i,this.errorPassword=""===n,t.querySelector(".pass").value="",setTimeout((()=>{this.errorMsg="",this.errorEmail=!1,this.errorPassword=!1}),2e3)}}render(){return M`
	<form @submit=${this.onSubmit}>
		<h1>Schmoozer</h1>
		<div class="input-container ${ce({error:this.errorEmail})}">
			<input type="text" name="email" placeholder="Email">
		</div>
		<div class="input-container ${ce({error:this.errorPassword})}">
			<input id="password-input" class="pass" type="password" name="password" placeholder="Password">
			<button class="show-btn" @click=${this.showHidePassword}>&equiv;</button>
		</div>
		<input type="submit" value="Login">
		${this.errorMsg?M`<p class="errorMsg error">${this.errorMsg}</p>`:null}
	</form>
	<div class="form-footer">
		<p>Don't have an account? <a href="/register">Register</a></p>
	</div>
    `}}customElements.define("login-form",Ns);class Ms extends re{static properties={error:{type:Boolean},errorMsg:{type:String},errorEmail:{type:Boolean},errorPassword:{type:Boolean}};static styles=[he,le,o`
		.subheader {
			font-weight: 600;
			color: gray;
			text-align: center;
			margin-bottom: 15px;
		}
		.footnotes {
			font-size: 0.7rem;
			text-align: center;
			padding: 10px 0 0 0;
		}
		`];constructor(){super(),this.error=!1,this.errorMsg="",this.errorUsername=!1,this.errorEmail=!1,this.errorPhoto=!1,this.errorPassword=!1}showHidePassword(e){e.preventDefault(),this.renderRoot.querySelectorAll(".pass").forEach((t=>{"password"===t.getAttribute("type")?(t.setAttribute("type","text"),e.target.innerHTML="&#10005"):(t.setAttribute("type","password"),e.target.innerHTML="&equiv;")}))}async onSubmit(e){e.preventDefault();const t=new FormData(e.target),r=t.get("username").trim(),i=t.get("email").trim(),n=t.get("photoUrl").trim(),s=t.get("password").trim(),o=t.get("repass").trim();try{if(""===r||""===i||""===s)throw new Error("Please fill all fields.");if(s.length<6||s.length>30)throw new Error("Password should be 6 to 30 characters long.");if(s!==o)throw this.errorPassword=!0,new Error("Passwords should match.");await Os(r,i,n,s)}catch(e){this.errorMsg=e.message,this.error=!0,this.errorUsername=""===i,this.errorEmail=""===i,this.errorPassword=""===s,setTimeout((()=>{this.error=!1,this.errorMsg="",this.errorUsername=!1,this.errorEmail=!1,this.errorPassword=!1}),3e3)}}render(){return M`
	<form @submit=${this.onSubmit}>
		<h1>Schmoozer</h1>
		<p class="subheader">Sign up to share with the world</p>
		<div class="input-container ${ce({error:this.errorUsername})}">
			<input type="text" name="username" placeholder="Username">
		</div>
		<div class="input-container ${ce({error:this.errorEmail})}">
			<input type="text" name="email" placeholder="Email">
		</div>
		<div class="input-container ${ce({error:this.errorPhoto})}">
			<input type="text" name="photoUrl" placeholder="Profile picture URL">
		</div>
		<div class="input-container ${ce({error:this.errorPassword})}">
			<input class="pass" type="password" name="password" placeholder="Password">
			<button class="show-btn" @click=${this.showHidePassword}>&equiv;</button>
		</div>
		<div class="input-container ${ce({error:this.errorPassword})}">
			<input class="pass" type="password" name="repass" placeholder="Repeat password">
		</div>
		<input type="submit" value="Register">
		${this.error?M`<p class="errorMsg error">${this.errorMsg}</p>`:null}
		<p class="footnotes">By signing up, you agree to our Terms . Learn how we collect, use and share your data in our
			Data Policy and how
			we use cookies and similar technology in our Cookies Policy .</p>
	</form>
	<div class="form-footer">
		<p>Have an account? <a href="/login">Login</a></p>
	</div>
    `}}customElements.define("register-form",Ms);class Ls extends re{static properties={ctx:{type:Object},activePage:{type:String}};static styles=[he,o`
	:host {
		display: block;
		color: white;
		width: 100%;
		height: 50px;
		background-color: #0095f6;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
	}
	#wrapper {
		background-color: #0095f6;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-content: center;
		align-items: center;
		max-width: 980px;
		height: 100%;
	}
	#logo {
		display: block;
	}
	#logo img {
		width: 33px;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
	 }
	li {
		display: inline-block;
	  }  
	#navbar a {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50px;
		width: 50px;
		text-decoration: none;
		border: 3px solid transparent;
	}
	#navbar a:hover {
		border-bottom: 3px solid darkred;
	}
	#navbar a.active {
		border-bottom: 3px solid darkred;
	}
	svg {
		fill: white;
		width: 23px;
		height: 23px;
	} 

	/* Hamburger Menu */
	#hamburger-icon {
		box-sizing: border-box;
		margin: auto 0;
		display: none;
		cursor: pointer;
	}
	
	#hamburger-icon div {
		width: 30px;
		height: 2px;
		background-color: white;
		margin: 6px 0;
		transition: 0.4s;
	}
	
	/* Hamburger Animation */
	.open .bar1 {
		-webkit-transform: rotate(-45deg) translate(-6px, 6px);
		transform: rotate(-45deg) translate(-6px, 6px);
	}
	
	.open .bar2 {
		opacity: 0;
	}
	
	.open .bar3 {
		-webkit-transform: rotate(45deg) translate(-6px, -6px);
		transform: rotate(45deg) translate(-6px, -6px);
	}
	
	.open .mobile-menu {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}
	
	.mobile-menu {
		display: none;
		position: absolute;
		top: 50px;
		left: 0;
		width: 100%;
		height: calc(100vh - 100px);
		padding-top: 50px;
		background-color: white;
	}
	
	.mobile-menu li {
		padding: 10px;
	}
	.mobile-menu a {
		text-align: center;
		display: block;
		min-width: 100px;
		border-radius: 10%;
		padding: 10px;
		color: black;
		text-decoration: none;
	}

	.mobile-menu a.active {
		text-decoration: underline;
	}

	.mobile-menu a:hover {
		color: orange;
	}

	.mobile-menu a.danger {
		color: red;
	}

	@media only screen and (max-width: 980px) {
	
		#wrapper {
			padding: 0 15px;
		}

	}
	@media only screen and (max-width: 700px) {
		#navbar {
			display: none;
		}

		#hamburger-icon {
			display: block;
		}
	}
	`];constructor(){super(),this.ctx={}}mainNavTemplate(){return M`
			<div id="navbar">
				<ul>
					${this.ctx.user?M`<!-- Home -->
					<li><a href="/" class=${ce({active:"/"===this.ctx.path})}> <svg xmlns="http://www.w3.org/2000/svg"
								class="bi bi-house" viewBox="0 0 16 16">
								<path fill-rule="evenodd"
									d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
								<path fill-rule="evenodd"
									d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
							</svg>
						</a></li>
					<!-- Profile -->
					<li><a href="/profile" class=${ce({active:"/profile"===this.ctx.path})}>
							<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-person" viewBox="0 0 16 16">
								<path
									d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
							</svg>
						</a></li>
					<!-- Circles -->
					<li><a href="/circles" class=${ce({active:"/circles"===this.ctx.path})}>
							<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-people" viewBox="0 0 16 16">
								<path
									d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
							</svg>
						</a></li>
					<!-- Search -->
					<li><a href="/search" class=${ce({active:"/search"===this.ctx.path})}>
							<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-search" viewBox="0 0 16 16">
								<path
									d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
							</svg>
						</a></li>
					<!-- Settings -->
					<li><a href="/settings" class=${ce({active:"/settings"===this.ctx.path})}>
							<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-gear" viewBox="0 0 16 16">
								<path
									d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
								<path
									d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
							</svg>
						</a>
					</li>`:M`
					<!-- Login -->
					<li><a href="/login">
							<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
								<path fill-rule="evenodd"
									d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
								<path fill-rule="evenodd"
									d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
							</svg>
						</a>
					</li>`}
				</ul>
			</div>
		`}hamburgerTemplate(){return M`
			<div id="hamburger-icon" @click=${this.toggleHamburger}>
					<div class="bar1"></div>
					<div class="bar2"></div>
					<div class="bar3"></div>
					<ul class="mobile-menu">
						${this.ctx.user?M`<!-- Home -->
						<li><a href="/" class=${ce({active:"/"===this.ctx.path})}>Home</a></li>
						<!-- Profile -->
						<li><a href="/profile" class=${ce({active:"/profile"===this.ctx.path})}>Profile</a></li>
						<!-- Circles -->
						<li><a href="/circles" class=${ce({active:"/circles"===this.ctx.path})}>Circles</a></li>
						<!-- Search -->
						<li><a href="/search" class=${ce({active:"/search"===this.ctx.path})}>Search</a></li>
						<!-- Settings -->
						<li><a href="/settings" class=${ce({active:"/settings"===this.ctx.path})}>Settings</a></li>
						<li><a class="danger" href="#" @click=${Rs}>Logout</a></li>`:M`
						<!-- Login -->
						<li><a href="/login" class=${ce({active:"/login"===this.ctx.path})}>Login</a></li>
						<!-- Register -->
						<li><a href="/register" class=${ce({active:"/register"===this.ctx.path})}>Register</a></li>
						`}
					</ul>
				</div>`}toggleHamburger(e){e.currentTarget.classList.toggle("open")}render(){return M`
		<div id="wrapper">
			<div>
				<a id="logo" href="/"><img src="https://i.ibb.co/0VB99wP/logo-color.png" alt="Schmoozer"></a>
			</div>
			<nav>
				${this.mainNavTemplate()}
				${this.hamburgerTemplate()}
			</nav>
		</div>
		`}}customElements.define("main-nav",Ls);async function Ds(e,t){try{let r=(e=>`https://schmoozer-social-default-rtdb.europe-west1.firebasedatabase.app/${e}`)(e);const i=await fetch(r,t);return await i.json()}catch(e){alert(e.message)}}function Us(e="get",t){const r={method:e,headers:{}};return void 0!==t&&(r.headers["Content-Type"]="application/json",r.body=JSON.stringify(t)),r}async function zs(e){return Ds(e,Us())}const js=e=>async function(e,t){return Ds(e,Us("post",t))}("posts.json",e);class Hs extends re{static properties={error:{type:Boolean},errorMsg:{type:String}};static styles=o`
	* {
		box-sizing: border-box;
	}
		:host {
			display: flex;
			width: 100%;
			background-color: white;
			border-radius: 5px;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		}
		.profile-pic {
			border-radius: 50%;
			max-width: 50px;
		} 
		.left-div {
			padding: 10px;
		}
		.right-div {
			width: 100%;
			padding: 10px 10px 10px 0;
		}
		textarea {
			all: unset;
			width: 100%;
			height: 80px;
			resize: none;
			padding: 10px;
			margin-bottom: 10px;
			border: 1px solid gray;
			border-radius: 3px;
			box-sizing: border-box;
			overflow-x: hidden;
		}
		textarea:focus {
			border: 1px solid #0095f6;
			box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
		}
		.options {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.icon {
			padding: 0 5px;
		}
		.icon:hover {
			cursor: pointer;
		}
		svg:hover {
			fill: orange;
		}
		input[type="submit"] {
			color: white;
			font-size: 0.9rem;
			font-weight: 500;
			text-align: center;
			border: 0px;
			border-radius: 3px;
			background-color: #0095f6;
			padding: 0.7rem;
		}
		input[type="submit"]:hover {
			background-color: rgba(0, 149, 246, 0.8);
			cursor: pointer;
		}
		.error {
			border: 1px solid red !important;
		}
		.errorMsg {
			font-size: 0.8rem;
			text-align: center;
			background-color: rgba(255, 0, 0, 0.1);
			border-radius: 3px;
			padding: 0.5rem 1rem;
			margin-bottom: 1rem;
		}
	`;constructor(){super(),this.maximumLength=100,this.error=!1,this.errorMsg=""}onInput(e){e.preventDefault();e.target.value.length>this.maximumLength?(this.error=!0,this.errorMsg="Maximum length is 100 characters."):(this.error=!1,this.errorMsg="")}onSubmit(e){e.preventDefault();const t=new FormData(e.target).get("textarea");try{if(t.length<10)throw new Error("Minimum length is 10 characters.");if(t.length>this.maximumLength)throw new Error("Maximum length is 100 characters.");const e=Cs.currentUser,r={body:t,createdAt:Date.now(),creatorID:e.uid,creatorUsername:e.displayName,photoURL:e.photoURL};js(r)}catch(e){this.errorMsg=e.message,this.error=!0,setTimeout((()=>{this.error=!1,this.errorMsg=""}),3e3)}}render(){return M`
			<div class="left-div">
				<!-- profile picture -->
				<a href="#">
					<img class="profile-pic" src="https://picsum.photos/200/200">
				</a>
			</div>
			<div class="right-div">
				<!-- New Post -->
				<form @submit=${this.onSubmit}>
					<div>
						<textarea name="textarea" class="${ce({error:this.error})}" placeholder="Say something"
							@input="${this.onInput}"></textarea>
					</div>
					${this.errorMsg?M`<div class="errorMsg error">
						<span>${this.errorMsg}</span>
						</div>`:null}
					<div class="options">
						<!-- Options -->
						<div>
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0095f6" viewBox="0 0 16 16">
									<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
									<path
										d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
								</svg>
							</span>
							<span class="icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0095f6" viewBox="0 0 16 16">
									<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
									<path
										d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
								</svg>
							</span>
						</div>
						<input type="submit" value="Shmooze">
					</div>
				</form>
			</div>
		`}}customElements.define("new-post",Hs);class Fs extends re{static properties={likes:{type:Number},reposts:{type:Number},comments:{type:Number},body:{type:String},creatorUsername:{type:String},photoURL:{type:String}};static styles=o`
		p {
			margin: 0;
			padding: 0;
			font-weight: normal;
		}
		:host {
			display: flex;
			background-color: white;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
			padding: 10px;
			border-radius: 5px;
		}
		:host(:hover) {
			cursor: pointer;
			box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
		}
		.profile-pic {
			border-radius: 50%;
			max-width: 50px;
		} 
		.user-info {
			margin-bottom: 10px;
		}
		#name {
			font-weight: 700;
		}
		#name:hover {
			text-decoration: underline;
			cursor: pointer;
		}
		#handle-and-time {
			font-size: 0.9rem;
			color: gray;
		}
		.left-div {
			padding-right: 10px;
		}
		.right-div {
		}
		#post-content {
			margin-bottom: 10px;
		}
		.options-buttons {
			display: flex;
		}
		.icon {
			display: flex;
			gap: 5px;
			align-items: center;
			margin-right: 30px;
		}
		.icon:hover {
			cursor: pointer;
		}
		.icon-number {
			color: gray;
			font-size: 0.8rem;
		}
		svg:hover {
			fill: orange;
		}
	`;constructor(){super(),this.likes=5,this.comments=3,this.reposts=2,this.body="",this.creatorUsername="User",this.photoURL="https://picsum.photos/200/200"}getPostDetails(e){e.preventDefault();const t=e.target.dataset.id;Ss().redirect("/posts/"+t)}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.getPostDetails.bind(this))}disconnectedCallback(){this.removeEventListener("click",this.getPostDetails.bind(this)),super.disconnectedCallback()}render(){return M`
			<div class="left-div">
				<!-- profile picture -->
				<a href="#">
					<img class="profile-pic" src="${this.photoURL}">
				</a>
			</div>
			<div class="right-div">
				<!-- New Post -->
				<div>
					<!-- User Information -->
					<div class="user-info">
						<a id="name">${this.creatorUsername}</a>
						<span id="handle-and-time">(05:27, 25.03.2022)</span>
					</div>
					<!-- Post Content -->
					<div>
						<p id="post-content">${this.body}</p>
					</div>
					<!-- Options -->
					<div class="options-buttons">
						<div class="icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0095f6" class="bi bi-chat"
								viewBox="0 0 16 16">
								<path
									d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
							</svg>
							<span class="icon-number">${this.comments}</span>
						</div>
						<div class="icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0095f6" class="bi bi-arrow-repeat"
								viewBox="0 0 16 16">
								<path
									d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
								<path fill-rule="evenodd"
									d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
							</svg>
							<span class="icon-number">${this.reposts}</span>
						</div>
						<div class="icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0095f6" class="bi bi-heart"
								viewBox="0 0 16 16">
								<path
									d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
							</svg>
							<span class="icon-number">${this.likes}</span>
						</div>
					</div>
				</div>
			</div>
		`}}customElements.define("user-post",Fs);class Vs extends re{static properties={error:{type:Boolean},errorMsg:{type:String}};static styles=o`
		:host {
			display: flex;
			width: 90%;
			max-width: 250px;
			margin: 0 auto;
		}
		:host(:hover) {
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		}
		.profile-pic {
			border-radius: 50%;
			max-width: 50px;
		} 
		.left-div {
			padding: 10px;
		}
		.right-div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: 10px 10px 10px 0;
		}
		.user-info {
			margin-bottom: 10px;
		}
		#name a {
			font-weight: 700;
			text-decoration: none;
		}
		#name a:hover {
			text-decoration: underline;
			cursor: pointer;
		}
		a:visited {
			color: black;
		}
		#handle {
			font-size: 0.9rem;
			color: gray;
		}
	`;render(){return M`
			<div class="left-div">
				<!-- profile picture -->
				<a href="#">
					<img class="profile-pic" src="https://picsum.photos/200/200">
				</a>
			</div>
			<div class="right-div">
				<div class="user-info">
					<span id="name"><a href="/profile">John Atanasoff</a></span>
					<span id="handle">@johntheslayer</span>
				</div>
			</div>
		`}}customElements.define("user-card",Vs);class Bs extends re{static properties={userState:$s};static styles=o`
	* {
		box-sizing: border-box;
	}
	:host {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 10px;
		background-color: white;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		padding: 24px;
		box-sizing: border-box;
	}
	:host(:hover) {
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}
	.profile-pic {
		border-radius: 50%;
		max-width: 150px;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	} 
	#name a {
		font-weight: 700;
		text-decoration: none;
	}
	#name a:hover {
		text-decoration: underline;
		cursor: pointer;
	}
	a:visited {
		color: black;
	}
	.handle {
		font-size: 0.9rem;
		color: gray;
	}
	.options {
		display: flex;
		align-items: center;
		gap: 5px;
	}
	p {
		text-align: center;
		margin: 0;
		padding: 0;
	}
	`;constructor(){super(),this.user=$s}render(){const e=new Date(Number(this.user.reloadUserInfo.createdAt));return M`
		<div class="top-div">
			<!-- profile picture -->
			<a href="#">
				<img class="profile-pic" src="https://picsum.photos/200/200">
			</a>
		</div>
		<div>
			<p id="name"><a href="/profile">${this.user.displayName}</a></p>
			<p class="handle">${this.user.email}</p>
		</div>
		<div class="options">
			<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="gray" class="bi bi-calendar-event"
				viewBox="0 0 16 16">
				<path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
				<path
					d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
			</svg>
			<span class="handle">Joined ${e.getDate()}.${e.getMonth()}.${e.getFullYear()}</span>
		</div>
		`}}customElements.define("profile-card",Bs);class Ws extends re{static properties={error:{type:Boolean},errorMsg:{type:String}};static styles=[o`
		form {
			display: flex;
			flex-direction: column;
			background-color: white;
			border-radius: 3px;
			padding: 20px;
			margin-bottom: 1rem;
			border-radius: 5px;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		}
		.form-footer {
			max-width: 400px;
			background-color: white;
			border-radius: 3px;
		}
		.form-footer p {
			text-align: center;
		}
		h1 {
			font-family: 'Dancing Script', cursive;
			font-size: 2.5rem;
			font-weight: 500;
			text-align: center;
			margin: 0 0 1rem 0;
		}
		a {
			text-decoration: none;
			font-weight: 500;
			color: #0095f6;
		}
		.input-container {
			display: flex;
			justify-content: space-between;
			padding: 0;
			margin-bottom: 1rem;
			background-color: rgb(247, 248, 255);
			border: 1px solid gray;
			border-radius: 3px;
		}
		.show-btn {
			width: 30px;
			align-self: center;
			height: 25px;
			border: 0;
			background-color: rgb(247, 248, 255);	
		}
		.show-btn:hover {
			cursor: pointer;
		}
		input {
			all: unset;
			padding: 1rem;
			flex: 1;
		}
		input[type="submit"] {
			color: white;
			font-size: 0.9rem;
			font-weight: 500;
			text-align: center;
			border: 0px;
			border-radius: 3px;
			background-color: #0095f6;
			padding: 0.7rem;
		}
		input[type="submit"]:hover {
			background-color: rgba(0, 149, 246, 0.8);
			cursor: pointer;
		}
		.error {
			border: 1px solid red;
		}
		.errorMsg {
			font-size: 0.8rem;
			text-align: center;
			background-color: rgba(255, 0, 0, 0.1);
			border-radius: 3px;
			padding: 0.5rem 1rem;
			margin: 1rem 0;
		}
		@media only screen and (max-width: 420px) {
			form {
				width: 100%; 
			}
		}
	`];constructor(){super(),this.error=!1,this.errorMsg=""}onSubmit(e){e.preventDefault();const t=new FormData(e.target).get("search").trim();try{if(""===t||t.length<3)throw new Error("Please write atleast 3 characters.")}catch(e){this.errorMsg=e.message,this.error=!0,setTimeout((()=>{this.error=!1}),3e3)}}render(){return M`
	<form @submit=${this.onSubmit}>
		<div class="input-container ${ce({error:this.error})}">
			<input type="text" name="search" placeholder="Try your luck">
		</div>
		<input type="submit" value="Search">
		${this.error?M`<p class="errorMsg error">${this.errorMsg}</p>`:null}
	</form>
    `}}customElements.define("search-form",Ws);class qs extends re{static properties={user:{type:Object}};static styles=[he,o`
			:host {
				display: flex;
				flex-direction: column;
				gap: 10px;
				background-color: white;
				border-radius: 5px;
				padding: 20px;
				box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
				position: sticky;
				top: 20px;
			}
			
			.profile-pic {
				display: block;
				margin: 0 auto;
				border-radius: 50%;
				width: 130px;
			}
			h2 {
				text-align: center;
				font-size: 1.1rem;
				font-weight: 600;
			}
			a:hover {
				text-decoration: underline;
			}
			p {
				font-size: 0.9rem;
				text-align: center;
			}
			.handle {
				font-size: 0.9rem;
				color: gray;
			}
			.user-info {
				font-size: 0.9rem;
				line-height: 2;
			}
			.options {
				margin: 0 auto;
				display: flex;
				align-items: center;
				gap: 5px;
			}
		`];constructor(){super(),this.user=""}render(){return"object"==typeof this.user?M`
			<div>
				<img class="profile-pic" src="${this.user?.photoURL}">
			</div>
			<div>
				<h2><a href="/profile/${this.user?.uid}">${this.user?.displayName}</a></h2>
				<p class=" handle">${this.user?.email}</p>
			</div>
			<div class="options">
				<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="gray" class="bi bi-calendar-event"
					viewBox="0 0 16 16">
					<path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
					<path
						d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
				</svg>
				<span class="handle">Joined ${new Date(Number(this.user?.createdAt)).getDate()}.${new Date(Number(this.user?.createdAt)).getMonth()}.${new Date(Number(this.user?.createdAt)).getFullYear()}</span>
			</div>
		`:M`Loading...`}}customElements.define("sidebar-usercard",qs);class Ks extends re{static styles=[o`
		:host {
			display: flex;
			flex-direction: column;
			gap: 10px;
			padding: 20px;
			width: 100%;
			border-radius: 5px;
			background-color: white;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		}
		button {
			display: block;
			width: 100%;
			color: white;
			font-size: 0.9rem;
			font-weight: 500;
			text-align: center;
			border: 0px;
			border-radius: 3px;
			background-color: #0095f6;
			padding: 0.7rem;
		}
		button:hover {
			background-color: rgba(0, 149, 246, 0.8);
			cursor: pointer;
		}
	`];goBack(){history.go(-1)}render(){return M`
		<button type="button" @click=${this.goBack}>Back</button>
		<button type="button">Share</button>
    `}}customElements.define("details-nav",Ks);const{H:Gs}=Z,Js=(e,t)=>{var r,i;const n=e._$AN;if(void 0===n)return!1;for(const e of n)null===(i=(r=e)._$AO)||void 0===i||i.call(r,t,!1),Js(e,t);return!0},Ys=e=>{let t,r;do{if(void 0===(t=e._$AM))break;r=t._$AN,r.delete(e),e=t}while(0===(null==r?void 0:r.size))},Xs=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),eo(t)}};function Zs(e){void 0!==this._$AN?(Ys(this),this._$AM=e,Xs(this)):this._$AM=e}function Qs(e,t=!1,r=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(i))for(let e=r;e<i.length;e++)Js(i[e],!1),Ys(i[e]);else null!=i&&(Js(i,!1),Ys(i));else Js(this,e)}const eo=e=>{var t,r,i,n;e.type==se&&(null!==(t=(i=e)._$AP)&&void 0!==t||(i._$AP=Qs),null!==(r=(n=e)._$AQ)&&void 0!==r||(n._$AQ=Zs))};class to extends ae{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),Xs(this),this.isConnected=e._$AU}_$AO(e,t=!0){var r,i;e!==this.isConnected&&(this.isConnected=e,e?null===(r=this.reconnected)||void 0===r||r.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),t&&(Js(this,e),Ys(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class ro{constructor(e){this.U=e}disconnect(){this.U=void 0}reconnect(e){this.U=e}deref(){return this.U}}class io{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise((e=>this.q=e)))}resume(){var e;null===(e=this.q)||void 0===e||e.call(this),this.Y=this.q=void 0}}const no=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then;const so=oe(class extends to{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new ro(this),this._$CK=new io}render(...e){var t;return null!==(t=e.find((e=>!no(e))))&&void 0!==t?t:L}update(e,t){const r=this._$Cyt;let i=r.length;this._$Cyt=t;const n=this._$CG,s=this._$CK;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const o=t[e];if(!no(o))return this._$Cwt=e,o;e<i&&o===r[e]||(this._$Cwt=1073741823,i=0,Promise.resolve(o).then((async e=>{for(;s.get();)await s.get();const t=n.deref();if(void 0!==t){const r=t._$Cyt.indexOf(o);r>-1&&r<t._$Cwt&&(t._$Cwt=r,t.setValue(e))}})))}return L}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}});class oo extends re{static properties={error:{type:Boolean},errorMsg:{type:String},usersPosts:{type:Array},isLogged:{type:Boolean},user:{type:Object}};static styles=[he,o`
		:host {
			padding-top: 23px;
		}
		:host > *:not(:last-child) {
			margin-bottom: 10px; 
		} 
		.new-post-field {
			display: flex;
			width: 100%;
			background-color: white;
			border-radius: 5px;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		}
		.profile-pic {
			border-radius: 50%;
			max-width: 50px;
		} 
		.left-div {
			padding: 10px;
		}
		.right-div {
			width: 100%;
			padding: 10px 10px 10px 0;
		}
		textarea {
			all: unset;
			width: 100%;
			height: 80px;
			resize: none;
			padding: 10px;
			margin-bottom: 10px;
			border: 1px solid gray;
			border-radius: 3px;
			box-sizing: border-box;
			overflow-x: hidden;
		}
		textarea:focus {
			border: 1px solid #0095f6;
			box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
		}
		.options {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.icon {
			padding: 0 5px;
		}
		.icon:hover {
			cursor: pointer;
		}
		svg:hover {
			fill: orange;
		}
		input[type="submit"] {
			color: white;
			font-size: 0.9rem;
			font-weight: 500;
			text-align: center;
			border: 0px;
			border-radius: 3px;
			background-color: #0095f6;
			padding: 0.7rem;
		}
		input[type="submit"]:hover {
			background-color: rgba(0, 149, 246, 0.8);
			cursor: pointer;
		}
		.error {
			border: 1px solid red !important;
		}
		.errorMsg {
			font-size: 0.8rem;
			text-align: center;
			background-color: rgba(255, 0, 0, 0.1);
			border-radius: 3px;
			padding: 0.5rem 1rem;
			margin-bottom: 0.5rem;
		}
		.errorMsg span {
			font-size: 0.8rem;
		}
	`];constructor(){super(),this.usersPosts=[],this.maximumLength=200,this.error=!1,this.errorMsg="",this.isLogged=!1,this.user="unknown"}onInput(e){e.preventDefault();e.target.value.length>this.maximumLength?(this.error=!0,this.errorMsg="Maximum length is 200 characters."):(this.error=!1,this.errorMsg="")}async onSubmit(e){e.preventDefault();const t=new FormData(e.target).get("textarea");try{if(t.length<10)throw new Error("Minimum length is 10 characters.");if(t.length>this.maximumLength)throw new Error("Maximum length is 100 characters.");const r=await Cs.currentUser,i={body:t,createdAt:Date.now(),creatorID:r.uid,creatorUsername:r.displayName,photoURL:r.photoURL};e.target.reset(),await js(i),this.allPosts()}catch(e){this.errorMsg=e.message,this.error=!0,setTimeout((()=>{this.error=!1,this.errorMsg=""}),3e3)}}newPostTemplate=e=>M`
	<div class="new-post-field">
	<div class="left-div">
		<!-- profile picture -->
		<a href="#">
			<img class="profile-pic" src="${e}">
		</a>
	</div>
	<div class="right-div">
		<!-- New Post -->
		<form @submit=${this.onSubmit}>
			<div>
				<textarea name="textarea" class="${ce({error:this.error})}" placeholder="Say something"
					@input="${this.onInput}"></textarea>
			</div>
			${this.errorMsg?M`<div class="errorMsg error">
				<span>${this.errorMsg}</span>
				</div>`:null}
			<div class="options">
				<!-- Options -->
				<div>
					<span class="icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0095f6" viewBox="0 0 16 16">
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
							<path
								d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
						</svg>
					</span>
					<span class="icon">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0095f6" viewBox="0 0 16 16">
							<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
							<path
								d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
						</svg>
					</span>
				</div>
				<input type="submit" value="Shmooze">
			</div>
		</form>
	</div>
	</div>
`;connectedCallback(){super.connectedCallback(),this.allPosts()}async allPosts(){const e=await zs("posts.json");this.usersPosts=Object.entries(e)}render(){return M`
		${this.user?this.newPostTemplate(this.user?.photoURL):null}
		${so(this.usersPosts.reverse().map((e=>M`
				<user-post data-id=${e[0]} creatorUsername=${e[1].creatorUsername?e[1].creatorUsername:"User"}
					body=${e[1].body} photoURL=${e[1].photoURL}>
				</user-post>`)),M`Loading...`)}
		`}}customElements.define("home-feed",oo);class ao extends re{static properties={usersPosts:{type:Array},user:{type:Object}};static styles=[he,o`
		:host {
			padding-top: 23px;
		}
		:host > *:not(:last-child) {
			margin-bottom: 10px; 
		} 
		`];constructor(){super(),this.userPosts=[],this.user={}}connectedCallback(){super.connectedCallback(),this.allUserPosts()}async allUserPosts(){const e=await(t=this.user.uid,zs(`posts.json?orderBy="creatorID"&equalTo="${t}"`));var t;const r=Object.entries(e).sort(((e,t)=>t[1].createdAt-e[1].createdAt)).map((e=>M`
				<user-post data-id=${e[0]} creatorUsername=${e[1].creatorUsername?e[1].creatorUsername:"User"}
					body=${e[1].body} photoURL=${e[1].photoURL}>
				</user-post>`));return r}render(){return M`
		${so(this.allUserPosts(),M`Loading...`)}
		`}}customElements.define("profile-feed",ao);class co extends re{static styles=o`
	:host {
		max-width: 100%;
		background-color: white;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		padding: 10px;
	}
	nav {
		margin: 0 auto;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
	 }
	a {
		display: block;
		text-decoration: none;
		color: white;
		font-size: 0.9rem;
		font-weight: 500;
		text-align: center;
		border: 0px;
		border-radius: 3px;
		background-color: #0095f6;
		padding: 0.7rem;
	}
	a:hover {
		background-color: rgba(0, 149, 246, 0.8);
		cursor: pointer;
	}
  
	.danger {
		background-color: red;
	}
	.danger:hover {
		background-color: darkred;
	}
	`;constructor(){super()}toggleHamburger(e){e.preventDefault(),console.log(e.target),e.currentTarget.classList.toggle("open")}render(){return M`
				<nav>
					<ul>
						<li>
							<a href="/settings/edit">
								<span>Edit Profile</span>
							</a>
						</li>
						<li>
							<a class="danger" href="javascript:void(0)" @click=${Rs}>
								<span>Logout</span>
							</a>
						</li>
					</ul>
				</nav>
		`}}customElements.define("settings-nav",co);class lo extends re{static styles=o`
	:host {
		max-width: 100%;
		background-color: white;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}
	nav {
		margin: 0 auto;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
	 }
	a {
		display: block;
		text-decoration: none;
		color: white;
		font-size: 0.9rem;
		font-weight: 500;
		text-align: center;
		border: 0px;
		border-radius: 3px;
		background-color: #0095f6;
		padding: 0.7rem;
	}
	a:hover {
		background-color: rgba(0, 149, 246, 0.8);
		cursor: pointer;
	}
	`;constructor(){super()}toggleHamburger(e){e.preventDefault(),console.log(e.target),e.currentTarget.classList.toggle("open")}render(){return M`
				<nav>
					<ul>
						<li>
							<a href="/login">
								<span>Login</span>
							</a>
						</li>
						<li>
							<a href="/register">
								<span>Register</span>
							</a>
						</li>
					</ul>
				</nav>
		`}}customElements.define("guest-sidenav",lo);class ho extends re{static properties={name:{type:String},windowWidth:{type:Number},navigation:{type:String},activePage:{type:String},user:{type:Object}};static styles=[he,o`
		:host {
			display: grid;  
			grid-template-columns: 1fr 2fr; 
			gap: 10px;
		}
		:host > *:not(:last-child) {
			margin-bottom: 10px; 
		} 

		@media only screen and (max-width: ${700}px) {
			:host {
				grid-template-columns: 1fr; 
			}
		}
	`];constructor(e="World"){super(),this.name=e,this.activePage="/",this.user=null,this.windowWidth=this.getWindowWidth()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateWindowWidth.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.updateWindowWidth.bind(this)),super.disconnectedCallback()}getWindowWidth(){return window.innerWidth}async updateWindowWidth(){this.windowWidth=window.innerWidth}render(){return M`
				${this.windowWidth>=700?M`<div>					
							${null!==this.user?M`<sidebar-usercard .user=${this.user}></sidebar-usercard>`:M`<guest-sidenav></guest-sidenav>`}
					</div>`:null}
				<div>
					<home-feed .isLogged=${this.user} .user=${this.user}></home-feed>
				</div>
		`}}customElements.define("home-page",ho);class uo extends re{static styles=[he,o`
		:host {
			overflow: hidden;
		}
		h1 {
			font-size: 3rem;
			font-weight: 700;
			text-align: center;
		}
	`];constructor(e="John"){super(),this.name=e}render(){return M`
		<h1>UNDER CONSTRUCTION</h1>
		`}}customElements.define("circles-page",uo);class po extends re{static properties={name:{type:String},user:{type:Object},windowWidth:{type:Number},navigation:{type:String},activePage:{type:String}};static styles=[he,o`
		:host {
			display: grid;  
			grid-template-columns: 1fr 2fr; 
			gap: 10px;
		}
		:host > *:not(:last-child) {
			margin-bottom: 10px; 
		} 

		@media only screen and (max-width: ${700}px) {
			:host {
				grid-template-columns: 1fr; 
			}
		}
	`];constructor(e="World"){super(),this.name=e,this.activePage="/",this.user=null,this.windowWidth=this.getWindowWidth()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateWindowWidth.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.updateWindowWidth.bind(this)),super.disconnectedCallback()}getWindowWidth(){return window.innerWidth}async updateWindowWidth(){this.windowWidth=window.innerWidth}render(){return M`
				${this.windowWidth>=700?M`<div>					
							<sidebar-usercard .user=${this.user}></sidebar-usercard>
					</div>`:null}
				<div>
					<profile-feed .isLogged=${this.user} .user=${this.user}></profile-feed>
				</div>
		`}}customElements.define("profile-page",po);function fo(e){e.render(M`
			<settings-page slot="main"></settings-page>
	`)}class go extends re{static styles=[he,o`
		:host {
			display: grid;  
			grid-template-columns: 1fr 2fr; 
			gap: 10px;
		}
		:host > *:not(:last-child) {
			margin-bottom: 10px; 
		} 

		@media only screen and (max-width: ${700}px) {
			:host {
				grid-template-columns: 1fr; 
			}
		}
		button {
			color: white;
			font-size: 0.9rem;
			font-weight: 500;
			text-align: center;
			border: 0px;
			border-radius: 3px;
			background-color: #0095f6;
			padding: 0.7rem;
		}
		button:hover {
			background-color: rgba(0, 149, 246, 0.8);
			cursor: pointer;
		}
	`];constructor(e="John"){super(),this.name=e}render(){return M`
		<settings-nav></settings-nav>
`}}customElements.define("settings-page",go);class mo extends re{static styles=[he,o`
		:host {
			max-width: 600px;
			margin: 0 auto;
			height: calc(100vh - 70px);
			display: flex;
			flex-direction: row;
			justify-content: center;
			background-color: white;
			box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;	
			padding: 30px 0;		
		}
		:host > *:not(:last-child) {
			margin-bottom: 10px; 
		}  
	`];render(){return M`
		<login-form></login-form>
		`}}customElements.define("login-page",mo);class vo extends re{static styles=[he,o`
		:host {
			max-width: 600px;
			margin: 0 auto;
			min-height: calc(100vh - 70px);
			display: flex;
			flex-direction: row;
			justify-content: center;
			background-color: white;
			box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;	
			padding: 30px 0;
		}
		:host > *:not(:last-child) {
			margin-bottom: 10px; 
		} 
	`];render(){return M`
		<register-form></register-form>
		`}}customElements.define("register-page",vo);class wo extends re{static properties={name:{type:String}};static styles=[he,o`
		:host {
			display: grid;  
			grid-template-columns: 1fr 2fr; 
			gap: 10px;
		}
		:host > *:not(:last-child) {
			margin-bottom: 10px; 
		} 

		@media only screen and (max-width: ${700}px) {
			:host {
				grid-template-columns: 1fr; 
			}
		}
	`];render(){return M`
			<search-form></search-form>
			<p style="text-align: center; font-size: 3rem; font-weight: 700" slot="main">No Results</p>
		`}}customElements.define("search-page",wo);class bo extends re{static properties={id:{type:String}};static styles=[he,o`
		:host {
			padding-top: 23px;
		}
		:host > *:not(:last-child) {
			margin-bottom: 10px; 
		} 
	`];constructor(){super(),this.id=""}async userPost(){const e=await(t=this.id,zs("posts/"+t+".json"));var t;return M`
				<user-post creatorUsername=${e.creatorUsername?e.creatorUsername:"User"} body=${e.body}
					photoURL=${e.photoURL}>
				</user-post>`}render(){return M`
		${so(this.userPost(),M`Loading...`)}
		`}}customElements.define("details-page",bo);class yo extends re{static properties={name:{type:String},userState:$s,windowWidth:{type:Number},navigation:{type:String},activePage:{type:String}};static styles=[he,o`
		#wrapper {
			display: grid;  
			grid-template-columns: 1fr 2fr; 
			gap: 10px;
			margin: 0 auto; 
			max-width: 980px; 
			padding-top: 20px;
		}
		main > *:not(:last-child) {
			margin-bottom: 10px; 
		} 

		@media only screen and (max-width: ${700}px) {
			#wrapper {
				grid-template-columns: 1fr; 
			}
		}
	`];constructor(e="World"){super(),this.name=e,this.activePage="/",this.isLogged=$s,this.windowWidth=this.getWindowWidth()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateWindowWidth.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.updateWindowWidth.bind(this)),super.disconnectedCallback()}getWindowWidth(){return window.innerWidth}async updateWindowWidth(){this.windowWidth=window.innerWidth}render(){return M`
			<div id="wrapper">
				<div>
					${this.windowWidth>=700?M`<slot name="side"></slot>`:null}
				</div>
				<main>
					<slot name="main"></slot>
				</main>
			</div>
		`}}customElements.define("app-root",yo);const _o=document.getElementById("outlet");document.getElementById("outlet");Ss()(((e,t)=>{e.render=e=>z(e,_o),t()})),Ss()(((e,t)=>{e.user=JSON.parse(localStorage.getItem("userData")),t()})),Ss()((function(e,t){z(M`
		<main-nav .ctx=${e}></main-nav>`,document.querySelector("header")),t()})),Ss()("/",(function(e){e.render(M`
		<home-page activePage=${"/"} .user=${e.user}> </home-page>`)})),Ss()("/profile",(function(e){e.render(M`
		<profile-page activePage=${"/profile"} .user=${e.user}> </profile-page>`)})),Ss()("/circles",(function(e){e.render(M`
			<circles-page slot="main"></circles-page>`)})),Ss()("/search",(function(e){e.render(M`
		<search-page slot="side">
		</search-page>
		`)})),Ss()("/settings",fo),Ss()("/settings/edit",fo),Ss()("/login",(function(e){e.render(M`
		<login-page slot="main"></login-page>
		`)})),Ss()("/register",(function(e){e.render(M`
		<register-page slot="main"></register-page>
		`)})),Ss()("/posts/:id",(function(e){e.render(M`
		<app-root>
			<details-nav slot="side"></details-nav>
			<details-page id=${e.params.id} slot="main"></details-page>
		</app-root>`)})),Ss().start()})()})();