/*! For license information please see main.b9d2814f23a925bd1684.bundle.js.LICENSE.txt */
(()=>{var t={161:function(t){t.exports=function(){"use strict";var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},e=b,r=a,i=l,s=c,o=v,n=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(t){for(var e,r=[],i=0,s=0,o="";null!=(e=n.exec(t));){var a=e[0],l=e[1],c=e.index;if(o+=t.slice(s,c),s=c+a.length,l)o+=l[1];else{o&&(r.push(o),o="");var d=e[2],p=e[3],u=e[4],g=e[5],m=e[6],f=e[7],v="+"===m||"*"===m,b="?"===m||"*"===m,x=d||"/",w=u||g||(f?".*":"[^"+x+"]+?");r.push({name:p||i++,prefix:d||"",delimiter:x,optional:b,repeat:v,pattern:h(w)})}}return s<t.length&&(o+=t.substr(s)),o&&r.push(o),r}function l(t){return c(a(t))}function c(e){for(var r=new Array(e.length),i=0;i<e.length;i++)"object"==typeof e[i]&&(r[i]=new RegExp("^"+e[i].pattern+"$"));return function(i){for(var s="",o=i||{},n=0;n<e.length;n++){var a=e[n];if("string"!=typeof a){var l,c=o[a.name];if(null==c){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(t(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+c+'"');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(l=encodeURIComponent(c[d]),!r[n].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+l+'"');s+=(0===d?a.prefix:a.delimiter)+l}}else{if(l=encodeURIComponent(c),!r[n].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+l+'"');s+=a.prefix+l}}else s+=a}return s}}function d(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function h(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function p(t,e){return t.keys=e,t}function u(t){return t.sensitive?"":"i"}function g(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var i=0;i<r.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return p(t,e)}function m(t,e,r){for(var i=[],s=0;s<t.length;s++)i.push(b(t[s],e,r).source);return p(new RegExp("(?:"+i.join("|")+")",u(r)),e)}function f(t,e,r){for(var i=a(t),s=v(i,r),o=0;o<i.length;o++)"string"!=typeof i[o]&&e.push(i[o]);return p(s,e)}function v(t,e){for(var r=(e=e||{}).strict,i=!1!==e.end,s="",o=t[t.length-1],n="string"==typeof o&&/\/$/.test(o),a=0;a<t.length;a++){var l=t[a];if("string"==typeof l)s+=d(l);else{var c=d(l.prefix),h=l.pattern;l.repeat&&(h+="(?:"+c+h+")*"),s+=h=l.optional?c?"(?:"+c+"("+h+"))?":"("+h+")?":c+"("+h+")"}}return r||(s=(n?s.slice(0,-2):s)+"(?:\\/(?=$))?"),s+=i?"$":r&&n?"":"(?=\\/|$)",new RegExp("^"+s,u(e))}function b(e,r,i){return t(r=r||[])?i||(i={}):(i=r,r=[]),e instanceof RegExp?g(e,r,i):t(e)?m(e,r,i):f(e,r,i)}e.parse=r,e.compile=i,e.tokensToFunction=s,e.tokensToRegExp=o;var x,w="undefined"!=typeof document,y="undefined"!=typeof window,$="undefined"!=typeof history,_="undefined"!=typeof process,A=w&&document.ontouchstart?"touchstart":"click",k=y&&!(!window.history.location&&!window.location);function E(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function S(){var t=new E;function e(){return P.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=S,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(e){t.current=e}}),e.Context=z,e.Route=U,e}function P(t,e){if("function"==typeof t)return P.call(this,"*",t);if("function"==typeof e)for(var r=new U(t,null,this),i=1;i<arguments.length;++i)this.callbacks.push(r.middleware(arguments[i]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function C(t){if(!t.handled){var e=this,r=e._window;(e._hashbang?k&&this._getBase()+r.location.hash.replace("#!",""):k&&r.location.pathname+r.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,k&&(r.location.href=t.canonicalPath))}}function M(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function z(t,e,r){var i=this.page=r||P,s=i._window,o=i._hashbang,n=i._getBase();"/"===t[0]&&0!==t.indexOf(n)&&(t=n+(o?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var l=new RegExp("^"+M(n));if(this.path=t.replace(l,"")||"/",o&&(this.path=this.path.replace("#!","")||"/"),this.title=w&&s.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?i._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=i._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!o){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=i._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function U(t,r,i){var s=this.page=i||T,o=r||{};o.strict=o.strict||s._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=e(this.path,this.keys=[],o)}E.prototype.configure=function(t){var e=t||{};this._window=e.window||y&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&y,this._click=!1!==e.click&&w,this._hashbang=!!e.hashbang;var r=this._window;this._popstate?r.addEventListener("popstate",this._onpopstate,!1):y&&r.removeEventListener("popstate",this._onpopstate,!1),this._click?r.document.addEventListener(A,this.clickHandler,!1):w&&r.document.removeEventListener(A,this.clickHandler,!1),this._hashbang&&y&&!$?r.addEventListener("hashchange",this._onpopstate,!1):y&&r.removeEventListener("hashchange",this._onpopstate,!1)},E.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},E.prototype._getBase=function(){var t=this._base;if(t)return t;var e=y&&this._window&&this._window.location;return y&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},E.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},E.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var r;if(this._running=!0,k){var i=this._window.location;r=this._hashbang&&~i.hash.indexOf("#!")?i.hash.substr(2)+i.search:this._hashbang?i.search+i.hash:i.pathname+i.search+i.hash}this.replace(r,null,!0,e.dispatch)}},E.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(A,this.clickHandler,!1),y&&t.removeEventListener("popstate",this._onpopstate,!1),y&&t.removeEventListener("hashchange",this._onpopstate,!1)}},E.prototype.show=function(t,e,r,i){var s=new z(t,e,this),o=this.prevContext;return this.prevContext=s,this.current=s.path,!1!==r&&this.dispatch(s,o),!1!==s.handled&&!1!==i&&s.pushState(),s},E.prototype.back=function(t,e){var r=this;if(this.len>0){var i=this._window;$&&i.history.back(),this.len--}else t?setTimeout((function(){r.show(t,e)})):setTimeout((function(){r.show(r._getBase(),e)}))},E.prototype.redirect=function(t,e){var r=this;"string"==typeof t&&"string"==typeof e&&P.call(this,t,(function(t){setTimeout((function(){r.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){r.replace(t)}),0)},E.prototype.replace=function(t,e,r,i){var s=new z(t,e,this),o=this.prevContext;return this.prevContext=s,this.current=s.path,s.init=r,s.save(),!1!==i&&this.dispatch(s,o),s},E.prototype.dispatch=function(t,e){var r=0,i=0,s=this;function o(){var t=s.exits[i++];if(!t)return n();t(e,o)}function n(){var e=s.callbacks[r++];if(t.path===s.current)return e?void e(t,n):C.call(s,t);t.handled=!1}e?o():n()},E.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var r=new U(t,null,this),i=1;i<arguments.length;++i)this.exits.push(r.middleware(arguments[i]))},E.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,r=t.path||(t.composedPath?t.composedPath():null);if(r)for(var i=0;i<r.length;i++)if(r[i].nodeName&&"A"===r[i].nodeName.toUpperCase()&&r[i].href){e=r[i];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var s="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var o=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==o)&&!(o&&o.indexOf("mailto:")>-1)&&!(s?e.target.baseVal:e.target)&&(s||this.sameOrigin(e.href))){var n=s?e.href.baseVal:e.pathname+e.search+(e.hash||"");n="/"!==n[0]?"/"+n:n,_&&n.match(/^\/[a-zA-Z]:\//)&&(n=n.replace(/^\/[a-zA-Z]:\//,"/"));var a=n,l=this._getBase();0===n.indexOf(l)&&(n=n.substr(l.length)),this._hashbang&&(n=n.replace("#!","")),(!l||a!==n||k&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},E.prototype._onpopstate=(x=!1,y?(w&&"complete"===document.readyState?x=!0:window.addEventListener("load",(function(){setTimeout((function(){x=!0}),0)})),function(t){if(x){var e=this;if(t.state){var r=t.state.path;e.replace(r,t.state)}else if(k){var i=e._window.location;e.show(i.pathname+i.search+i.hash,void 0,void 0,!1)}}}):function(){}),E.prototype._which=function(t){return null==(t=t||y&&this._window.event).which?t.button:t.which},E.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&k)return new URL(t,e.location.toString());if(w){var r=e.document.createElement("a");return r.href=t,r}},E.prototype.sameOrigin=function(t){if(!t||!k)return!1;var e=this._toURL(t),r=this._window.location;return r.protocol===e.protocol&&r.hostname===e.hostname&&(r.port===e.port||""===r.port&&(80==e.port||443==e.port))},E.prototype._samePath=function(t){if(!k)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},E.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},z.prototype.pushState=function(){var t=this.page,e=t._window,r=t._hashbang;t.len++,$&&e.history.pushState(this.state,this.title,r&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},z.prototype.save=function(){var t=this.page;$&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},U.prototype.middleware=function(t){var e=this;return function(r,i){if(e.match(r.path,r.params))return r.routePath=e.path,t(r,i);i()}},U.prototype.match=function(t,e){var r=this.keys,i=t.indexOf("?"),s=~i?t.slice(0,i):t,o=this.regexp.exec(decodeURIComponent(s));if(!o)return!1;delete e[0];for(var n=1,a=o.length;n<a;++n){var l=r[n-1],c=this.page._decodeURLEncodedURIComponent(o[n]);void 0===c&&hasOwnProperty.call(e,l.name)||(e[l.name]=c)}return!0};var T=S(),L=T,N=T;return L.default=N,L}()}},e={};function r(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,r),o.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class s{constructor(t,r){if(this._$cssResult$=!0,r!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=t=>new s("string"==typeof t?t:t+"",e),n=(t,...r)=>{const i=1===t.length?t[0]:r.reduce(((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1]),t[0]);return new s(i,e)},a=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return o(e)})(t):t;var l;const c=window.trustedTypes,d=c?c.emptyScript:"",h=window.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},u=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u};class m extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const i=this._$Eh(r,e);void 0!==i&&(this._$Eu.set(i,r),t.push(i))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const r=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{t?e.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):r.forEach((t=>{const r=document.createElement("style"),i=window.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=t.cssText,e.appendChild(r)}))})(r,this.constructor.elementStyles),r}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=g){var i,s;const o=this.constructor._$Eh(t,r);if(void 0!==o&&!0===r.reflect){const n=(null!==(s=null===(i=r.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==s?s:p.toAttribute)(e,r.type);this._$Ei=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(t,e){var r,i,s;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),a=t.converter,l=null!==(s=null!==(i=null===(r=a)||void 0===r?void 0:r.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==s?s:p.fromAttribute;this._$Ei=n,this[n]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,r){let i=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var f;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:m}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.0");const v=globalThis.trustedTypes,b=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,w="?"+x,y=`<${w}>`,$=document,_=(t="")=>$.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,E=t=>{var e;return k(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,C=/>/g,M=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,z=/'/g,U=/"/g,T=/^(?:script|style|textarea|title)$/i,L=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),N=L(1),O=(L(2),Symbol.for("lit-noChange")),j=Symbol.for("lit-nothing"),R=new WeakMap,H=(t,e,r)=>{var i,s;const o=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:e;let n=o._$litPart$;if(void 0===n){const t=null!==(s=null==r?void 0:r.renderBefore)&&void 0!==s?s:null;o._$litPart$=n=new q(e.insertBefore(_(),t),t,void 0,null!=r?r:{})}return n._$AI(t),n},I=$.createTreeWalker($,129,null,!1),D=(t,e)=>{const r=t.length-1,i=[];let s,o=2===e?"<svg>":"",n=S;for(let e=0;e<r;e++){const r=t[e];let a,l,c=-1,d=0;for(;d<r.length&&(n.lastIndex=d,l=n.exec(r),null!==l);)d=n.lastIndex,n===S?"!--"===l[1]?n=P:void 0!==l[1]?n=C:void 0!==l[2]?(T.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=M):void 0!==l[3]&&(n=M):n===M?">"===l[0]?(n=null!=s?s:S,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?M:'"'===l[3]?U:z):n===U||n===z?n=M:n===P||n===C?n=S:(n=M,s=void 0);const h=n===M&&t[e+1].startsWith("/>")?" ":"";o+=n===S?r+y:c>=0?(i.push(a),r.slice(0,c)+"$lit$"+r.slice(c)+x+h):r+x+(-2===c?(i.push(void 0),e):h)}const a=o+(t[r]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,i]};class B{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let s=0,o=0;const n=t.length-1,a=this.parts,[l,c]=D(t,e);if(this.el=B.createElement(l,r),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=I.nextNode())&&a.length<n;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(x)){const r=c[o++];if(t.push(e),void 0!==r){const t=i.getAttribute(r.toLowerCase()+"$lit$").split(x),e=/([.?@])?(.*)/.exec(r);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?G:"@"===e[1]?Z:F})}else a.push({type:6,index:s})}for(const e of t)i.removeAttribute(e)}if(T.test(i.tagName)){const t=i.textContent.split(x),e=t.length-1;if(e>0){i.textContent=v?v.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],_()),I.nextNode(),a.push({type:2,index:++s});i.append(t[e],_())}}}else if(8===i.nodeType)if(i.data===w)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=i.data.indexOf(x,t+1));)a.push({type:7,index:s}),t+=x.length-1}s++}}static createElement(t,e){const r=$.createElement("template");return r.innerHTML=t,r}}function W(t,e,r=t,i){var s,o,n,a;if(e===O)return e;let l=void 0!==i?null===(s=r._$Cl)||void 0===s?void 0:s[i]:r._$Cu;const c=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,r,i)),void 0!==i?(null!==(n=(a=r)._$Cl)&&void 0!==n?n:a._$Cl=[])[i]=l:r._$Cu=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,i)),e}class V{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:r},parts:i}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:$).importNode(r,!0);I.currentNode=s;let o=I.nextNode(),n=0,a=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new q(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Y(o,this,t)),this.v.push(e),l=i[++a]}n!==(null==l?void 0:l.index)&&(o=I.nextNode(),n++)}return s}m(t){let e=0;for(const r of this.v)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class q{constructor(t,e,r,i){var s;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cg=null===(s=null==i?void 0:i.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),A(t)?t===j||null==t||""===t?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==O&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):E(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==j&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k($.createTextNode(t)),this._$AH=t}T(t){var e;const{values:r,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=B.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(r);else{const t=new V(s,this),e=t.p(this.options);t.m(r),this.k(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new B(t)),e}S(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const s of t)i===e.length?e.push(r=new q(this.A(_()),this.A(_()),this,this.options)):r=e[i],r._$AI(s),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,r,i,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,i){const s=this.strings;let o=!1;if(void 0===s)t=W(this,t,e,0),o=!A(t)||t!==this._$AH&&t!==O,o&&(this._$AH=t);else{const i=t;let n,a;for(t=s[0],n=0;n<s.length-1;n++)a=W(this,i[r+n],e,n),a===O&&(a=this._$AH[n]),o||(o=!A(a)||a!==this._$AH[n]),a===j?t=j:t!==j&&(t+=(null!=a?a:"")+s[n+1]),this._$AH[n]=a}o&&!i&&this.C(t)}C(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends F{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===j?void 0:t}}const J=v?v.emptyScript:"";class G extends F{constructor(){super(...arguments),this.type=4}C(t){t&&t!==j?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Z extends F{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=W(this,t,e,0))&&void 0!==r?r:j)===O)return;const i=this._$AH,s=t===j&&i!==j||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==j&&(i===j||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const Q={P:"$lit$",L:x,V:w,I:1,N:D,R:V,D:E,j:W,H:q,O:F,F:G,B:Z,W:K,Z:Y},X=window.litHtmlPolyfillSupport;var tt,et;null==X||X(B,q),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.2.0");class rt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=H(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return O}}rt.finalized=!0,rt._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:rt});const it=globalThis.litElementPolyfillSupport;null==it||it({LitElement:rt});(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.2.0");const st=1,ot=2,nt=t=>(...e)=>({_$litDirective$:t,values:e});class at{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const lt=nt(class extends at{constructor(t){var e;if(super(t),t.type!==st||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var r,i;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.et.add(t);return this.render(e)}const s=t.element.classList;this.et.forEach((t=>{t in e||(s.remove(t),this.et.delete(t))}));for(const t in e){const r=!!e[t];r===this.et.has(t)||(null===(i=this.st)||void 0===i?void 0:i.has(t))||(r?(s.add(t),this.et.add(t)):(s.remove(t),this.et.delete(t)))}return O}}),ct=()=>JSON.parse(localStorage.getItem("userData")),dt=t=>localStorage.setItem("userData",JSON.stringify(t));var ht=r(161),pt=r.n(ht);const ut="https://parseapi.back4app.com";async function gt(t,e){try{const r=await fetch(t,e);if(!0!==r.ok){403===r.status&&sessionStorage.removeItem("userData");const t=await r.json();throw new Error(t.message)}return await r.json()}catch(t){throw t}}function mt(t="get",e){const r={method:t,headers:{"X-Parse-Application-Id":"4g95yQ2SffnKO8N3wrNyEoIl2PC0BbizElZRACu9","X-Parse-REST-API-Key":"BO0XeGl7WtRAmE9EwqwMxZVc7noj3VucKebHIThA"}};void 0!==e&&(r.headers["Content-Type"]="application/json",r.body=JSON.stringify(e));const i=ct();return null!==i&&(r.headers["X-Parse-Session-Token"]=i.accessToken),r}async function ft(t){return gt(ut+t,mt())}async function vt(t,e){return gt(ut+t,mt("post",e))}async function bt(t,e){try{const r=await vt("/login",{username:t,password:e});return dt({username:t,id:r.objectId,accessToken:r.sessionToken}),r}catch(t){throw t}}async function xt(t,e,r){try{const i=await vt("/users",{username:t,email:e,password:r});return dt({username:t,id:i.objectId,accessToken:i.sessionToken}),i}catch(t){throw console.log(t.message),t}}async function wt(){vt("/logout"),localStorage.removeItem("userData"),pt().redirect("/")}const yt=n`
* {
	overflow: hidden;
}
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

`,$t=n`
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
`;class _t extends rt{static properties={errorMsg:{type:String},ctx:{type:Object}};static styles=[$t,yt,n`
		`];constructor(){super(),this.ctx={},this.errorMsg="",this.errorEmail=!1,this.errorPassword=!1}showHidePassword(t){t.preventDefault(),this.renderRoot.querySelectorAll(".pass").forEach((e=>{"password"===e.getAttribute("type")?(e.setAttribute("type","text"),t.target.innerHTML="&#10005"):(e.setAttribute("type","password"),t.target.innerHTML="&equiv;")}))}simpleValidation(t,e){if(""===t||""===e)throw new Error("Fill all fields.")}async onSubmit(t){t.preventDefault();const e=t.target,r=new FormData(t.target),i=r.get("username").trim();let s=r.get("password").trim();try{if(""===i||""===s)throw{code:"empty fields"};await bt(i,s),this.ctx.page.redirect("/")}catch(t){this.errorPassword=""===s,e.querySelector(".pass").value="",setTimeout((()=>{this.errorMsg="",this.errorPassword=!1}),2e3)}}render(){return N`
	<form @submit=${this.onSubmit}>
		<h1>Schmoozer</h1>
		<div class="input-container ${lt({error:this.errorEmail})}">
			<input type="text" name="username" placeholder="Email" value="joe">
		</div>
		<div class="input-container ${lt({error:this.errorPassword})}">
			<input id="password-input" class="pass" type="password" name="password" placeholder="Password" value="123456">
			<button class="show-btn" @click=${this.showHidePassword}>&equiv;</button>
		</div>
		<input type="submit" value="Login">
		${this.errorMsg?N`<p class="errorMsg error">${this.errorMsg}</p>`:null}
	</form>
	<div class="form-footer">
		<p>Don't have an account? <a href="/register">Register</a></p>
	</div>
    `}}customElements.define("login-form",_t);class At extends rt{static properties={ctx:{type:Object},error:{type:Boolean},errorMsg:{type:String},errorEmail:{type:Boolean},errorPassword:{type:Boolean}};static styles=[$t,yt,n`
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

		#upload-label {
			display: flex;
			align-items: center;
			padding: 0rem 1rem;
			color: gray;
		}
		`];constructor(){super(),this.ctx={},this.error=!1,this.errorMsg="",this.errorUsername=!1,this.errorEmail=!1,this.errorPassword=!1}showHidePassword(t){t.preventDefault(),this.renderRoot.querySelectorAll(".pass").forEach((e=>{"password"===e.getAttribute("type")?(e.setAttribute("type","text"),t.target.innerHTML="&#10005"):(e.setAttribute("type","password"),t.target.innerHTML="&equiv;")}))}async onSubmit(t){t.preventDefault();const e=new FormData(t.target),r=e.get("username").trim(),i=e.get("email").trim(),s=(e.get("photoUrl"),e.get("password").trim()),o=e.get("repass").trim();try{if(""===r||""===i||""===s)throw new Error("Please fill all fields.");if(s.length<6||s.length>30)throw new Error("Password should be 6 to 30 characters long.");if(s!==o)throw this.errorPassword=!0,new Error("Passwords should match.");await xt(r,i,s),this.ctx.page.redirect("/")}catch(t){this.errorMsg=t.message,this.error=!0,this.errorUsername=""===i,this.errorEmail=""===i,this.errorPassword=""===s,setTimeout((()=>{this.error=!1,this.errorMsg="",this.errorUsername=!1,this.errorEmail=!1,this.errorPassword=!1}),3e3)}}render(){return N`
	<form @submit=${this.onSubmit}>
		<h1>Schmoozer</h1>
		<p class="subheader">Sign up to share with the world</p>
		<div class="input-container ${lt({error:this.errorUsername})}">
			<input type="text" name="username" placeholder="Username">
		</div>
		<div class="input-container ${lt({error:this.errorEmail})}">
			<input type="text" name="email" placeholder="Email">
		</div>
		<!-- <div class="input-container">
					<label id="upload-label" for="photoUrl">Picture<input type="file" name="photoUrl" id="photoUrl"
							accept="image/png, image/jpeg"></label>
				</div> -->
		<div class="input-container ${lt({error:this.errorPassword})}">
			<input class="pass" type="password" name="password" placeholder="Password">
			<button class="show-btn" @click=${this.showHidePassword}>&equiv;</button>
		</div>
		<div class="input-container ${lt({error:this.errorPassword})}">
			<input class="pass" type="password" name="repass" placeholder="Repeat password">
		</div>
		<input type="submit" value="Register">
		${this.error?N`<p class="errorMsg error">${this.errorMsg}</p>`:null}
		<p class="footnotes">By signing up, you agree to our Terms . Learn how we collect, use and share your data in
			our
			Data Policy and how
			we use cookies and similar technology in our Cookies Policy .</p>
	</form>
	<div class="form-footer">
		<p>Have an account? <a href="/login">Login</a></p>
	</div>
    `}}customElements.define("register-form",At);const kt=wt,Et=t=>(Pt(t),vt("/classes/Post",t));function St(t,e){return{__type:"Pointer",className:t,objectId:e}}function Pt(t){const e=ct().id;t.creator=St("_User",e)}class Ct extends rt{static properties={ctx:{type:Object},activePage:{type:String}};static styles=[$t,n`
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
		padding: 0 10px;
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
	`];constructor(){super(),this.ctx={}}mainNavTemplate(){return N`
			<div id="navbar">
				<ul>
					${this.ctx.user?N`<!-- Home -->
					<li><a href="/" class=${lt({active:"/"===this.ctx.path})}> <svg xmlns="http://www.w3.org/2000/svg"
								class="bi bi-house" viewBox="0 0 16 16">
								<path fill-rule="evenodd"
									d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
								<path fill-rule="evenodd"
									d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
							</svg>
						</a></li>
					<!-- Profile -->
					<li><a href="/profile/${this.ctx.user.id}"" class=${lt({active:this.ctx.path.includes("/profile")})}>
							<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-person" viewBox="0 0 16 16">
								<path
									d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
							</svg>
						</a></li>
					<!-- Circles -->
					<li><a href="/circles" class=${lt({active:"/circles"===this.ctx.path})}>
							<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-people" viewBox="0 0 16 16">
								<path
									d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
							</svg>
						</a></li>
					<!-- Search -->
					<li><a href="/search" class=${lt({active:"/search"===this.ctx.path})}>
							<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-search" viewBox="0 0 16 16">
								<path
									d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
							</svg>
						</a></li>
					<!-- Settings -->
					<li><a href="/settings" class=${lt({active:"/settings"===this.ctx.path})}>
							<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-gear" viewBox="0 0 16 16">
								<path
									d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
								<path
									d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
							</svg>
						</a>
					</li>`:N`
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
		`}hamburgerTemplate(){return N`
			<div id="hamburger-icon" @click=${this.toggleHamburger}>
					<div class="bar1"></div>
					<div class="bar2"></div>
					<div class="bar3"></div>
					<ul class="mobile-menu">
						${this.ctx.user?N`<!-- Home -->
						<li><a href="/" class=${lt({active:"/"===this.ctx.path})}>Home</a></li>
						<!-- Profile -->
						<li><a href="/profile" class=${lt({active:"/profile"===this.ctx.path})}>Profile</a></li>
						<!-- Circles -->
						<li><a href="/circles" class=${lt({active:"/circles"===this.ctx.path})}>Circles</a></li>
						<!-- Search -->
						<li><a href="/search" class=${lt({active:"/search"===this.ctx.path})}>Search</a></li>
						<!-- Settings -->
						<li><a href="/settings" class=${lt({active:"/settings"===this.ctx.path})}>Settings</a></li>
						<li><a class="danger" href="#" @click=${kt}>Logout</a></li>`:N`
						<!-- Login -->
						<li><a href="/login" class=${lt({active:"/login"===this.ctx.path})}>Login</a></li>
						<!-- Register -->
						<li><a href="/register" class=${lt({active:"/register"===this.ctx.path})}>Register</a></li>
						`}
					</ul>
				</div>`}toggleHamburger(t){t.currentTarget.classList.toggle("open")}render(){return N`
		<div id="wrapper">
			<div>
				<a id="logo" href="/"><img src="https://i.ibb.co/0VB99wP/logo-color.png" alt="Schmoozer"></a>
			</div>
			<nav>
				${this.mainNavTemplate()}
				${this.hamburgerTemplate()}
			</nav>
		</div>
		`}}customElements.define("main-nav",Ct);class Mt extends rt{static properties={error:{type:Boolean},errorMsg:{type:String}};static styles=n`
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
	`;constructor(){super(),this.maximumLength=100,this.error=!1,this.errorMsg=""}onInput(t){t.preventDefault();t.target.value.length>this.maximumLength?(this.error=!0,this.errorMsg="Maximum length is 100 characters."):(this.error=!1,this.errorMsg="")}onSubmit(t){t.preventDefault();const e=new FormData(t.target).get("textarea");try{if(e.length<10)throw new Error("Minimum length is 10 characters.");if(e.length>this.maximumLength)throw new Error("Maximum length is 100 characters.");ct();Et({body:e,likes:[]})}catch(t){this.errorMsg=t.message,this.error=!0,setTimeout((()=>{this.error=!1,this.errorMsg=""}),3e3)}}render(){return N`
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
						<textarea name="textarea" class="${lt({error:this.error})}" placeholder="Say something"
							@input="${this.onInput}"></textarea>
					</div>
					${this.errorMsg?N`<div class="errorMsg error">
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
		`}}customElements.define("new-post",Mt);class zt extends rt{static properties={postType:{type:String},likes:{type:Number},reposts:{type:Number},comments:{type:Number},body:{type:String},date:{type:String},creator:{type:Object}};static styles=[$t,n`
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
	`];constructor(){super(),this.postType="post",this.likes=5,this.comments=3,this.reposts=2,this.body="",this.date="4/12/2022, 5:43:26 PM",this.creator={}}getPostDetails(t){if("post"===this.postType){const t=this.dataset.id;pt().redirect("/posts/"+t)}}render(){const t=new Date(this.date);return N`
			<div class="left-div">
				<!-- profile picture -->
				<a href="/profile/${this.creator.objectId}">
					<img class="profile-pic" src="${this.creator.picture.url}">
				</a>
			</div>
			<div class="right-div">
				<!-- New Post -->
				<div>
					<!-- User Information -->
					<div class="user-info">
						<a href="/profile/${this.creator.objectId}" id="name">${this.creator.username}</a>
						<span id="handle-and-time">(${t.toLocaleString()})</span>
					</div>
					<!-- Post Content -->
					<div>
						<p id="post-content">${this.body}</p>
					</div>
					<!-- Options -->
					${"post"===this.postType?N`<div class="options-buttons">
						<div class="icon" @click=${this.getPostDetails}>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0095f6" class="bi bi-chat"
								viewBox="0 0 16 16">
								<path
									d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
							</svg>
							<span class="icon-number">${this.comments}</span>
						</div>
						<div class="icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0095f6" class="bi bi-heart"
								viewBox="0 0 16 16">
								<path
									d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
							</svg>
							<span class="icon-number">${this.likes}</span>
						</div>
					</div>`:null}
				</div>
			</div>
		`}}customElements.define("user-post",zt);class Ut extends rt{static properties={error:{type:Boolean},errorMsg:{type:String}};static styles=n`
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
	`;render(){return N`
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
		`}}customElements.define("user-card",Ut);class Tt extends rt{static properties={user:{type:Object}};static styles=n`
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
	`;constructor(){super(),this.user=ct()}render(){const t=new Date(Number(this.user.reloadUserInfo.createdAt));return N`
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
			<span class="handle">Joined ${t.getDate()}.${t.getMonth()}.${t.getFullYear()}</span>
		</div>
		`}}customElements.define("profile-card",Tt);class Lt extends rt{static properties={error:{type:Boolean},errorMsg:{type:String}};static styles=[n`
		:host {
			width: 100%;
			padding: 10px;
			background-color: white;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
			border-radius: 5px;
		}
		form {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}
		.input-container {
			background-color: rgb(247, 248, 255);
			border: 1px solid gray;
		}
		input {
			all: unset;
			padding: 1rem;
			width: 100%;
			border-radius: 5px;
			box-sizing: border-box;
		}
		input[type="submit"] {
			color: white;
			font-size: 0.9rem;
			font-weight: 500;
			text-align: center;
			border: 0px;
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
	`];constructor(){super(),this.error=!1,this.errorMsg=""}onSubmit(t){t.preventDefault();const e=new FormData(t.target).get("search").trim();try{if(""===e||e.length<3)throw new Error("Please write atleast 3 characters.")}catch(t){this.errorMsg=t.message,this.error=!0,setTimeout((()=>{this.error=!1}),3e3)}}render(){return N`
	<form @submit=${this.onSubmit}>
		<input class="input-container ${lt({error:this.error})}" type="text" name="search"
			placeholder="Try your luck">
		<input type="submit" value="Search">
		${this.error?N`<p class="errorMsg error">${this.errorMsg}</p>`:null}
	</form>
    `}}customElements.define("search-form",Lt);const{H:Nt}=Q,Ot=(t,e)=>{var r,i;const s=t._$AN;if(void 0===s)return!1;for(const t of s)null===(i=(r=t)._$AO)||void 0===i||i.call(r,e,!1),Ot(t,e);return!0},jt=t=>{let e,r;do{if(void 0===(e=t._$AM))break;r=e._$AN,r.delete(t),t=e}while(0===(null==r?void 0:r.size))},Rt=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(void 0===r)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),Dt(e)}};function Ht(t){void 0!==this._$AN?(jt(this),this._$AM=t,Rt(this)):this._$AM=t}function It(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(void 0!==s&&0!==s.size)if(e)if(Array.isArray(i))for(let t=r;t<i.length;t++)Ot(i[t],!1),jt(i[t]);else null!=i&&(Ot(i,!1),jt(i));else Ot(this,t)}const Dt=t=>{var e,r,i,s;t.type==ot&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=It),null!==(r=(s=t)._$AQ)&&void 0!==r||(s._$AQ=Ht))};class Bt extends at{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),Rt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?null===(r=this.reconnected)||void 0===r||r.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(Ot(this,t),jt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class Wt{constructor(t){this.U=t}disconnect(){this.U=void 0}reconnect(t){this.U=t}deref(){return this.U}}class Vt{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.q=t)))}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Y=this.q=void 0}}const qt=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then;const Ft=nt(class extends Bt{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new Wt(this),this._$CK=new Vt}render(...t){var e;return null!==(e=t.find((t=>!qt(t))))&&void 0!==e?e:O}update(t,e){const r=this._$Cyt;let i=r.length;this._$Cyt=e;const s=this._$CG,o=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const n=e[t];if(!qt(n))return this._$Cwt=t,n;t<i&&n===r[t]||(this._$Cwt=1073741823,i=0,Promise.resolve(n).then((async t=>{for(;o.get();)await o.get();const e=s.deref();if(void 0!==e){const r=e._$Cyt.indexOf(n);r>-1&&r<e._$Cwt&&(e._$Cwt=r,e.setValue(t))}})))}return O}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}});class Kt extends rt{static properties={user:{type:Object}};static styles=[$t,n`
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
		`];constructor(){super(),this.user=null}render(){const t=new Date(this.user.createdAt);return N`
		<div>
			<img class="profile-pic" src="${this.user.picture.url}">
		</div>
		<div>
			<h2><a href="/profile/${this.user.id}">${this.user.username}</a></h2>
		</div>
		<div class="options">
			<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="gray" class="bi bi-calendar-event"
				viewBox="0 0 16 16">
				<path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
				<path
					d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
			</svg>
			<span class="handle">Joined ${t.toLocaleString()}</span>
		</div>
	`}}customElements.define("sidebar-usercard",Kt);class Jt extends rt{static properties={postId:{type:String},likes:{type:Number}};static styles=[$t,n`
		:host {
			display: flex;
			flex-direction: row;
			gap: 10px;
			padding: 20px;
			width: 100%;
			border-radius: 5px;
			background-color: white;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		}
		a {
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
		.likes-num {
			font-size: 0.9rem;
			opacity: 0.5;
		}
	`];constructor(){super(),this.postId=null,this.likes=0}likePost(t){this.likes++,t.target.style.pointerEvents="none"}goBack(){history.go(-1)}deletePost(){console.log("Delete")}render(){return N`
		<a href="/">User Profile</a>
		<a id="like-button" href="javascript:void(0)" @click=${this.likePost}>Like <span
				class="likes-num">(${this.likes})</span> </a>
		<a class="danger" href="javascript:void(0)" @click=${this.deletePost}>Delete</a>
    `}}customElements.define("details-nav",Jt);class Gt extends rt{static properties={error:{type:Boolean},errorMsg:{type:String},usersPosts:{type:Array},isLogged:{type:Boolean},user:{type:Object},postsQty:{type:Number}};static styles=[$t,n`
		:host {
			padding-top: 23px;
		}
		:host > *:not(:last-child) {
			margin-bottom: 10px; 
		}
		.feed {
			display: flex;
			flex-direction: column;
			gap: 10px;
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
		.footer {
			display: flex;
			align-items: center;
		}
		.more-btn {
			margin: 0 auto;
			color: white;
			font-size: 0.9rem;
			font-weight: 500;
			text-align: center;
			border: 0px;
			border-radius: 3px;
			background-color: #0095f6;
			padding: 0.7rem;
		}
		.more-btn:hover {
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
	`];constructor(){super(),this.usersPosts=[],this.maximumLength=200,this.error=!1,this.errorMsg="",this.isLogged=!1,this.page=0,this.user=null}onInput(t){t.preventDefault();t.target.value.length>this.maximumLength?(this.error=!0,this.errorMsg="Maximum length is 200 characters."):(this.error=!1,this.errorMsg="")}async onSubmit(t){t.preventDefault();const e=new FormData(t.target).get("textarea");try{if(e.length<10)throw new Error("Minimum length is 10 characters.");if(e.length>this.maximumLength)throw new Error("Maximum length is 100 characters.");const r={body:e,likes:[]};t.target.reset();const i=await Et(r),s=N`
			<user-post data-id=${i.objectId} creatorUsername=${this.user.username}
			body=${e} } date=${i.createdAt} photoUrl="https://parsefiles.back4app.com/4g95yQ2SffnKO8N3wrNyEoIl2PC0BbizElZRACu9/8dbcb95a78e204106be360bcd0a147b6_default-user-image.png">
			</user-post>`,o=new DocumentFragment;H(s,o),this.shadowRoot.querySelector(".feed").prepend(o)}catch(t){this.errorMsg=t.message,this.error=!0,setTimeout((()=>{this.error=!1,this.errorMsg=""}),3e3)}}getMorePosts(){this.page++,this.allPosts()}newPostTemplate=t=>N`
	<div class="new-post-field">
	<div class="left-div">
		<!-- profile picture -->
		<a href="#">
			<img class="profile-pic" src="${t}">
		</a>
	</div>
	<div class="right-div">
		<!-- New Post -->
		<form @submit=${this.onSubmit}>
			<div>
				<textarea name="textarea" class="${lt({error:this.error})}" placeholder="Say something"
					@input="${this.onInput}"></textarea>
			</div>
			${this.errorMsg?N`<div class="errorMsg error">
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
`;connectedCallback(){super.connectedCallback(),this.allPosts()}async allPosts(){const t=await(t=>ft("/classes/Post?include=creator&order=-createdAt&limit=10&skip="+10*t))(this.page);this.usersPosts=this.usersPosts.concat(t.results)}render(){return N`
		${this.user?this.newPostTemplate(this.user?.photoURL):null}
		<div class="feed">
			${this.usersPosts.map((t=>N`
					<user-post data-id=${t.objectId} .creator=${t.creator}
							body=${t.body} } date=${t.createdAt} }>
				</user-post>`))}
		</div>
		<div class="footer">
			<button class="more-btn" type="button" @click=${this.getMorePosts}>Load more...</button>
		</div>
		`}}customElements.define("home-feed",Gt);class Zt extends rt{static properties={userPosts:{type:Array},user:{type:Object}};static styles=[$t,n`
		:host  {
			display: flex;
			flex-direction: column;
			gap: 10px;
		} 
		.footer {
			display: flex;
			align-items: center;
		}
		.more-btn {
			margin: 0 auto;
			color: white;
			font-size: 0.9rem;
			font-weight: 500;
			text-align: center;
			border: 0px;
			border-radius: 3px;
			background-color: #0095f6;
			padding: 0.7rem;
		}
		.more-btn:hover {
			background-color: rgba(0, 149, 246, 0.8);
			cursor: pointer;
		}
		`];constructor(){super(),this.userPosts=[],this.page=0,this.user=null}connectedCallback(){super.connectedCallback(),this.allUserPosts()}getMorePosts(){this.page++,this.allUserPosts()}async allUserPosts(){const t=await((t,e)=>ft(`/classes/Post?where={"creator":{"__type":"Pointer","className":"_User","objectId":"${t}"}}&include=creator&order=-createdAt&limit=10&skip=${10*e}`))(this.user.objectId,this.page);this.userPosts=this.userPosts.concat(t.results)}render(){return N`
		${this.userPosts.map((t=>N`
		<user-post data-id=${t.objectId} .creator=${t.creator} body=${t.body} } date=${t.createdAt} }>
		</user-post>`))}
		<div class="footer">
			<button class="more-btn" type="button" @click=${this.getMorePosts}>Load more...</button>
		</div>
		`}}customElements.define("profile-feed",Zt);class Yt extends rt{static styles=n`
	:host {
		max-width: 100%;
		background-color: white;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		border-radius: 5px;
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
	`;render(){return N`
				<nav>
					<ul>
						<!-- <li>
																			<a href="/settings/edit">
																				<span>Edit Profile</span>
																			</a>
																		</li> -->
						<li>
							<a class="danger" href="javascript:void(0)" @click=${wt}>
								<span>Logout</span>
							</a>
						</li>
					</ul>
				</nav>
		`}}customElements.define("settings-nav",Yt);class Qt extends rt{static styles=n`
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
	`;constructor(){super()}toggleHamburger(t){t.preventDefault(),console.log(t.target),t.currentTarget.classList.toggle("open")}render(){return N`
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
		`}}customElements.define("guest-sidenav",Qt);class Xt extends rt{static properties={user:{type:Object},error:{type:Object}};static styles=[$t,n`
		* {
			overflow: hidden;
		}
			:host {
				display: flex;
				flex-direction: column;
				gap: 10px;
			}
			.settings-section  {
				background-color: white;
				border-radius: 5px;
				padding: 20px;
				box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
			}
			label {
				font-size: 1.5rem;
				font-weight: 500;
			}
			.flex-ends {
				display: flex;
				justify-content: space-between;
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
				max-width: 100px;
				max-height: 20px;
			}
			input[type="submit"]:hover {
				background-color: rgba(0, 149, 246, 0.8);
				cursor: pointer;
			}
		`];constructor(){super(),this.user=null,this.error=!1}async onSubmit(t){t.preventDefault();const e=new FormData(t.target).get("img");console.log(e)}render(){return N`
			<div class="settings-section">
				<form @submit=${this.onSubmit}>
					<label>Upload profile picture</label>
					<div class="flex-ends">
						<input type="file" id="img" name="img">
						<input type="submit" value="Submit">
					</div>
				</form>
				${this.error?N`<p class="errorMsg error">${this.error?.message}</p>`:null}
			</div>
		`}}customElements.define("edit-profile",Xt);class te extends rt{static properties={user:{type:String}};static styles=[$t,n`
			:host {
				display: block;
				position: sticky;
				top: 20px;
			}
			:host > *:not(:last-child) {
				margin-bottom: 10px; 
			} 
			.section {
				background-color: white;
				border-radius: 5px;
				padding: 20px;
				box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
			}
			h2 {
				text-align: center;
				font-size: 1.3rem;
				font-weight: 600;
				margin-bottom: 0.5rem;
			}
			p {
				font-size: 0.9rem;
				margin-bottom: 5px;
			}
			.bold {
				font-weight: 500;
				font-size: 0.9rem;
			}
			.link {
				display: block;
				color: white;
				font-size: 0.9rem;
				font-weight: 500;
				text-align: center;
				border: 0px;
				background-color: #0095f6;
				padding: 0.7rem;
				border-radius: 5px;
			}
			.link:hover {
				background-color: rgba(0, 149, 246, 0.8);
				cursor: pointer;
			}

		`];constructor(){super(),this.user="guest"}render(){return N`
			<div class="section">
				<h2>Welcome, ${this.user}</h2>
				<p><span class="bold">Schmoo Social is a simple web app for sharing the best (and shortest!) silly jokes on the internet.</p></span>
				<p>It's
					created by <span class="bold">Mario Yordanov</span>
					solely as a
					training exercise in web development.</p>
				<p><span class="bold">Tech stack:</span> JavaScript, Lit (web components), Page (routing), Back4App (backend),
					webpack (bundler)
				</p>
			</div>
			<div class="section">
				<a class="link" href="https://github.com/NecroBread/Schmoozer" target="_blank">Github</a>
			</div>
			${"guest"===this.user?N`<div class="section">
				<guest-sidenav></guest-sidenav>
			</div>`:null}
		`}}customElements.define("welcome-sidebar",te);class ee extends rt{static properties={windowWidth:{type:Number},navigation:{type:String},activePage:{type:String},user:{type:Object}};static styles=[$t,n`
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
				gap: 0px;
			}
		}
	`];constructor(){super(),this.activePage="/",this.user=null,this.windowWidth=this.getWindowWidth()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateWindowWidth.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.updateWindowWidth.bind(this)),super.disconnectedCallback()}getWindowWidth(){return window.innerWidth}async updateWindowWidth(){this.windowWidth=window.innerWidth}render(){return N`
				<div>
					<welcome-sidebar user=${this.user?.username||"guest"}></welcome-sidebar>
				</div>
				<div>
					<home-feed .isLogged=${this.user} .user=${this.user}></home-feed>
				</div>
		`}}customElements.define("home-page",ee);class re extends rt{static styles=[$t,n`
		:host {
			overflow: hidden;
		}
		h1 {
			font-size: 3vw;
			font-weight: 700;
			text-align: center;
		}
	`];constructor(t="John"){super(),this.name=t}render(){return N`
		<h1>UNDER CONSTRUCTION</h1>
		`}}customElements.define("circles-page",re);class ie extends rt{static properties={name:{type:String},userId:{type:String},windowWidth:{type:Number},navigation:{type:String},activePage:{type:String}};static styles=[$t,n`
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
	`];constructor(){super(),this.activePage="/",this.userId=null,this.windowWidth=this.getWindowWidth()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateWindowWidth.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.updateWindowWidth.bind(this)),super.disconnectedCallback()}getWindowWidth(){return window.innerWidth}getUserProfile=async t=>{const e=await(t=>ft(`/users/${t}`))(t);return N`
			<div>
				<sidebar-usercard .user=${e}></sidebar-usercard>
			</div>
			<div>
				<profile-feed .isLogged=${e} .user=${e}></profile-feed>
			</div>
		`};async updateWindowWidth(){this.windowWidth=window.innerWidth}render(){return N`
			${Ft(this.getUserProfile(this.userId),N`Loading...`)}
		`}}customElements.define("profile-page",ie);function se(t){t.render(N`
			<settings-page .user=${t.user}></settings-page>
	`)}class oe extends rt{static styles=[$t,n`
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
	`];constructor(){super(),this.user=null}render(){return N`
		<settings-nav></settings-nav>
		<div>
			<edit-profile .user=${this.user}></edit-profile>
		</div>

`}}customElements.define("settings-page",oe);class ne extends rt{properties={ctx:{type:Object}};static styles=[$t,n`
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
	`];constructor(){super(),this.ctx={}}render(){return N`
		<login-form .ctx=${this.ctx}></login-form>
		`}}customElements.define("login-page",ne);class ae extends rt{properties={ctx:{type:Object}};static styles=[$t,n`
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
	`];constructor(){super(),this.ctx={}}render(){return N`
		<register-form .ctx=${this.ctx}></register-form>
		`}}customElements.define("register-page",ae);class le extends rt{static properties={name:{type:String}};static styles=[$t,n`
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
	`];render(){return N`
			<search-form></search-form>
			<p style="text-align: center; font-size: 3rem; font-weight: 700" slot="main">No Results</p>
		`}}customElements.define("search-page",le);class ce extends rt{static properties={id:{type:String},user:{type:Object}};static styles=[$t,n`
		:host {
			display: grid;  
			grid-template-columns: 1fr; 
			margin: 0 auto; 
			max-width: 600px; 
			padding-bottom: 20px;
		}
		.main > *:not(:last-child) {
			margin-bottom: 10px; 
		} 
		.new-comment-template {
			display: flex;
			width: 100%;
			background-color: white;
			border-radius: 5px;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		}
		.comments-section {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}
		.user-post {
			display: flex;
			background-color: white;
			border-radius: 5px;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
		}
		.profile-pic {
			border-radius: 50%;
			max-width: 100px;
		} 
		.left-div {
			padding: 10px;
		}
		.right-div {
			width: 100%;
			padding: 10px 10px 10px 0;
		}
		#name {
			font-weight: 700;
			font-size: 1.2rem;
		}
		#name:hover {
			text-decoration: underline;
			cursor: pointer;
		}
		#handle-and-time {
			font-size: 0.9rem;
			color: gray;
		}
		.body-container {
			padding: 10px 0;
		}
		#post-content {
			font-size: 1.4rem
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
			justify-content: end;
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
		.comments-header {
			font-size: 1.5rem;
			font-weight: 700;
			text-align: center;
		}
	`];constructor(){super(),this.id="",this.user=null}async userPost(){var t;const e=(await(t=this.id,ft(`/classes/Post?where={"objectId":"${t}"}&include=creator`))).results[0];return N`
				${this.userPostTemplate(e.creator.username,e.body,e.creator.picture.url,e.createdAt,e.creator.objectId)}
				`}async comments(){var t;const e=(await(t=this.id,ft(`/classes/Comment?where={"parentPost":{"__type":"Pointer","className":"Post","objectId":"${t}"}}&include=creator&order=-createdAt`))).results;return console.log(e),e.length>0?N`
				${function*(t,e){if(void 0!==t){let r=0;for(const i of t)yield e(i,r++)}}(e,(t=>N`
					<user-post postType="commment" data-id=${t.objectId} .creator=${t.creator}
						body=${t.body} } date=${t.createdAt} }>
					</user-post>`))}`:N`<h3 class="comments-header">NO COMMENTS</h3>`}onSubmit=async t=>{t.preventDefault();const e=t.target,r=new FormData(e).get("textarea");try{const t=await((t,e)=>{const r={body:t};return Pt(r),r.parentPost=St("Post",e),vt("/classes/Comment",r)})(r,this.id);e.reset();const s=await(i=t.objectId,ft(`/classes/Comment?where={"objectId":"${i}"}&include=creator`));this.appendNewCommentToMain(s.results[0])}catch(t){console.log(t)}var i};appendNewCommentToMain(t){const e=this.shadowRoot.querySelector(".comments-section"),r=new DocumentFragment,i=N`
		<user-post postType="commment" data-id=${t.objectId} creatorUsername=${t.creator.username}
		body=${t.body} } date=${t.createdAt} photoUrl=${t.creator.picture.url}>
	</user-post>`;H(i,r),e.prepend(r)}newCommentForm=()=>N`
				<form @submit=${this.onSubmit}>
					<div>
						<textarea id="textarea" name="textarea" class="${lt({error:this.error})}" placeholder="Say something"
							@input="${this.onInput}"></textarea>
					</div>
					${this.errorMsg?N`<div class="errorMsg error">
						<span>${this.errorMsg}</span>
						</div>`:null}
					<div class="options">
						<!-- Options -->
						
						<input type="submit" value="Comment">
					</div>
				</form>
	`;newCommentTemplate=()=>N`
			<div class="new-comment-template">
			<div class="left-div">
				<!-- profile picture -->
				<a href="/profile/${this.user.uid}">
					<img class="profile-pic" src="${this.user.photoURL}">
				</a>
			</div>
			<div class="right-div">
				<!-- New Post -->
				${this.newCommentForm()}
			</div>
			</div>
	`;userPostTemplate=(t,e,r,i,s)=>{const o=new Date(i);return N`
				<div class="user-post">
					<div class="left-div">
						<!-- profile picture -->
						<a href="/profile/${s}">
							<img class="profile-pic" src="${r}">
						</a>
					</div>
					<div class="right-div">
						<!-- New Post -->
						<div>
							<!-- User Information -->
							<div class="user-info">
								<a href="/profile/${s}" id="name">${t}</a>
								<span id="handle-and-time">(${o.toLocaleString()})</span>
							</div>
							<!-- Post Content -->
							<div class="body-container">
								<p id="post-content">${e}</p>
							</div>					
						</div>
					</div>
				</div>
			`};detailsNavTemplate=()=>N`
		<a href="/">User Profile</a>
		<a href="javascript:void(0)" @click=${this.likePost}>(${this.likes}) Like</a>
		<a class="danger" href="javascript:void(0)" @click=${this.deletePost}>Delete</a>
	`;render(){return N`
			<div class="main">
				${Ft(this.userPost(),N`Loading...`)}
				<details-nav></details-nav>
				${this.newCommentTemplate()}
				<h3 class="comments-header">Comments:</h3>
				<div class="comments-section">
					${Ft(this.comments(),N`Loading...`)}
				</div>
			</div>
		
		`}}customElements.define("details-page",ce);const de=document.getElementById("outlet");document.getElementById("outlet");pt()(((t,e)=>{t.render=t=>H(t,de),e()})),pt()(((t,e)=>{t.user=ct(),e()})),pt()((function(t,e){H(N`
		<main-nav .ctx=${t}></main-nav>`,document.querySelector("header")),e()})),pt()("/",(function(t){t.render(N`
		<home-page activePage=${"/"} .user=${t.user}> </home-page>`)})),pt()("/profile/:id",(function(t){t.render(N`
		<profile-page activePage=${"/profile"} userId=${t.params.id}></profile-page>`)})),pt()("/circles",(function(t){t.render(N`
			<circles-page slot="main"></circles-page>`)})),pt()("/search",(function(t){t.render(N`
		<search-page slot="side">
		</search-page>
		`)})),pt()("/settings",se),pt()("/settings/edit",se),pt()("/login",(function(t){t.render(N`
		<login-page .ctx=${t}></login-page>
		`)})),pt()("/register",(function(t){t.render(N`
		<register-page .ctx=${t}></register-page>
		`)})),pt()("/posts/:id",(function(t){t.render(N`
			<details-page id=${t.params.id} .user=${t.user}></details-page>
		`)})),pt().start()})()})();