/*! For license information please see main.a3fc3d4445a812825722.bundle.js.LICENSE.txt */
(()=>{var t={161:function(t){t.exports=function(){"use strict";var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},e=b,s=a,r=l,i=c,o=v,n=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(t){for(var e,s=[],r=0,i=0,o="";null!=(e=n.exec(t));){var a=e[0],l=e[1],c=e.index;if(o+=t.slice(i,c),i=c+a.length,l)o+=l[1];else{o&&(s.push(o),o="");var d=e[2],p=e[3],u=e[4],g=e[5],m=e[6],f=e[7],v="+"===m||"*"===m,b="?"===m||"*"===m,x=d||"/",w=u||g||(f?".*":"[^"+x+"]+?");s.push({name:p||r++,prefix:d||"",delimiter:x,optional:b,repeat:v,pattern:h(w)})}}return i<t.length&&(o+=t.substr(i)),o&&s.push(o),s}function l(t){return c(a(t))}function c(e){for(var s=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(s[r]=new RegExp("^"+e[r].pattern+"$"));return function(r){for(var i="",o=r||{},n=0;n<e.length;n++){var a=e[n];if("string"!=typeof a){var l,c=o[a.name];if(null==c){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(t(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+c+'"');if(0===c.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(l=encodeURIComponent(c[d]),!s[n].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+l+'"');i+=(0===d?a.prefix:a.delimiter)+l}}else{if(l=encodeURIComponent(c),!s[n].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+l+'"');i+=a.prefix+l}}else i+=a}return i}}function d(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function h(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function p(t,e){return t.keys=e,t}function u(t){return t.sensitive?"":"i"}function g(t,e){var s=t.source.match(/\((?!\?)/g);if(s)for(var r=0;r<s.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return p(t,e)}function m(t,e,s){for(var r=[],i=0;i<t.length;i++)r.push(b(t[i],e,s).source);return p(new RegExp("(?:"+r.join("|")+")",u(s)),e)}function f(t,e,s){for(var r=a(t),i=v(r,s),o=0;o<r.length;o++)"string"!=typeof r[o]&&e.push(r[o]);return p(i,e)}function v(t,e){for(var s=(e=e||{}).strict,r=!1!==e.end,i="",o=t[t.length-1],n="string"==typeof o&&/\/$/.test(o),a=0;a<t.length;a++){var l=t[a];if("string"==typeof l)i+=d(l);else{var c=d(l.prefix),h=l.pattern;l.repeat&&(h+="(?:"+c+h+")*"),i+=h=l.optional?c?"(?:"+c+"("+h+"))?":"("+h+")?":c+"("+h+")"}}return s||(i=(n?i.slice(0,-2):i)+"(?:\\/(?=$))?"),i+=r?"$":s&&n?"":"(?=\\/|$)",new RegExp("^"+i,u(e))}function b(e,s,r){return t(s=s||[])?r||(r={}):(r=s,s=[]),e instanceof RegExp?g(e,s,r):t(e)?m(e,s,r):f(e,s,r)}e.parse=s,e.compile=r,e.tokensToFunction=i,e.tokensToRegExp=o;var x,w="undefined"!=typeof document,y="undefined"!=typeof window,$="undefined"!=typeof history,_="undefined"!=typeof process,k=w&&document.ontouchstart?"touchstart":"click",A=y&&!(!window.history.location&&!window.location);function E(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function P(){var t=new E;function e(){return C.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=P,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(e){t.current=e}}),e.Context=U,e.Route=z,e}function C(t,e){if("function"==typeof t)return C.call(this,"*",t);if("function"==typeof e)for(var s=new z(t,null,this),r=1;r<arguments.length;++r)this.callbacks.push(s.middleware(arguments[r]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function S(t){if(!t.handled){var e=this,s=e._window;(e._hashbang?A&&this._getBase()+s.location.hash.replace("#!",""):A&&s.location.pathname+s.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,A&&(s.location.href=t.canonicalPath))}}function M(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function U(t,e,s){var r=this.page=s||C,i=r._window,o=r._hashbang,n=r._getBase();"/"===t[0]&&0!==t.indexOf(n)&&(t=n+(o?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var l=new RegExp("^"+M(n));if(this.path=t.replace(l,"")||"/",o&&(this.path=this.path.replace("#!","")||"/"),this.title=w&&i.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?r._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=r._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!o){if(!~this.path.indexOf("#"))return;var c=this.path.split("#");this.path=this.pathname=c[0],this.hash=r._decodeURLEncodedURIComponent(c[1])||"",this.querystring=this.querystring.split("#")[0]}}function z(t,s,r){var i=this.page=r||L,o=s||{};o.strict=o.strict||i._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=e(this.path,this.keys=[],o)}E.prototype.configure=function(t){var e=t||{};this._window=e.window||y&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&y,this._click=!1!==e.click&&w,this._hashbang=!!e.hashbang;var s=this._window;this._popstate?s.addEventListener("popstate",this._onpopstate,!1):y&&s.removeEventListener("popstate",this._onpopstate,!1),this._click?s.document.addEventListener(k,this.clickHandler,!1):w&&s.document.removeEventListener(k,this.clickHandler,!1),this._hashbang&&y&&!$?s.addEventListener("hashchange",this._onpopstate,!1):y&&s.removeEventListener("hashchange",this._onpopstate,!1)},E.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},E.prototype._getBase=function(){var t=this._base;if(t)return t;var e=y&&this._window&&this._window.location;return y&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},E.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},E.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var s;if(this._running=!0,A){var r=this._window.location;s=this._hashbang&&~r.hash.indexOf("#!")?r.hash.substr(2)+r.search:this._hashbang?r.search+r.hash:r.pathname+r.search+r.hash}this.replace(s,null,!0,e.dispatch)}},E.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(k,this.clickHandler,!1),y&&t.removeEventListener("popstate",this._onpopstate,!1),y&&t.removeEventListener("hashchange",this._onpopstate,!1)}},E.prototype.show=function(t,e,s,r){var i=new U(t,e,this),o=this.prevContext;return this.prevContext=i,this.current=i.path,!1!==s&&this.dispatch(i,o),!1!==i.handled&&!1!==r&&i.pushState(),i},E.prototype.back=function(t,e){var s=this;if(this.len>0){var r=this._window;$&&r.history.back(),this.len--}else t?setTimeout((function(){s.show(t,e)})):setTimeout((function(){s.show(s._getBase(),e)}))},E.prototype.redirect=function(t,e){var s=this;"string"==typeof t&&"string"==typeof e&&C.call(this,t,(function(t){setTimeout((function(){s.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){s.replace(t)}),0)},E.prototype.replace=function(t,e,s,r){var i=new U(t,e,this),o=this.prevContext;return this.prevContext=i,this.current=i.path,i.init=s,i.save(),!1!==r&&this.dispatch(i,o),i},E.prototype.dispatch=function(t,e){var s=0,r=0,i=this;function o(){var t=i.exits[r++];if(!t)return n();t(e,o)}function n(){var e=i.callbacks[s++];if(t.path===i.current)return e?void e(t,n):S.call(i,t);t.handled=!1}e?o():n()},E.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var s=new z(t,null,this),r=1;r<arguments.length;++r)this.exits.push(s.middleware(arguments[r]))},E.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,s=t.path||(t.composedPath?t.composedPath():null);if(s)for(var r=0;r<s.length;r++)if(s[r].nodeName&&"A"===s[r].nodeName.toUpperCase()&&s[r].href){e=s[r];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var i="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var o=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==o)&&!(o&&o.indexOf("mailto:")>-1)&&!(i?e.target.baseVal:e.target)&&(i||this.sameOrigin(e.href))){var n=i?e.href.baseVal:e.pathname+e.search+(e.hash||"");n="/"!==n[0]?"/"+n:n,_&&n.match(/^\/[a-zA-Z]:\//)&&(n=n.replace(/^\/[a-zA-Z]:\//,"/"));var a=n,l=this._getBase();0===n.indexOf(l)&&(n=n.substr(l.length)),this._hashbang&&(n=n.replace("#!","")),(!l||a!==n||A&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},E.prototype._onpopstate=(x=!1,y?(w&&"complete"===document.readyState?x=!0:window.addEventListener("load",(function(){setTimeout((function(){x=!0}),0)})),function(t){if(x){var e=this;if(t.state){var s=t.state.path;e.replace(s,t.state)}else if(A){var r=e._window.location;e.show(r.pathname+r.search+r.hash,void 0,void 0,!1)}}}):function(){}),E.prototype._which=function(t){return null==(t=t||y&&this._window.event).which?t.button:t.which},E.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&A)return new URL(t,e.location.toString());if(w){var s=e.document.createElement("a");return s.href=t,s}},E.prototype.sameOrigin=function(t){if(!t||!A)return!1;var e=this._toURL(t),s=this._window.location;return s.protocol===e.protocol&&s.hostname===e.hostname&&(s.port===e.port||""===s.port&&(80==e.port||443==e.port))},E.prototype._samePath=function(t){if(!A)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},E.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},U.prototype.pushState=function(){var t=this.page,e=t._window,s=t._hashbang;t.len++,$&&e.history.pushState(this.state,this.title,s&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},U.prototype.save=function(){var t=this.page;$&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},z.prototype.middleware=function(t){var e=this;return function(s,r){if(e.match(s.path,s.params))return s.routePath=e.path,t(s,r);r()}},z.prototype.match=function(t,e){var s=this.keys,r=t.indexOf("?"),i=~r?t.slice(0,r):t,o=this.regexp.exec(decodeURIComponent(i));if(!o)return!1;delete e[0];for(var n=1,a=o.length;n<a;++n){var l=s[n-1],c=this.page._decodeURLEncodedURIComponent(o[n]);void 0===c&&hasOwnProperty.call(e,l.name)||(e[l.name]=c)}return!0};var L=P(),T=L,j=L;return T.default=j,T}()}},e={};function s(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,s),o.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),r=new Map;class i{constructor(t,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=r.get(this.cssText);return t&&void 0===e&&(r.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=t=>new i("string"==typeof t?t:t+"",e),n=(t,...s)=>{const r=1===t.length?t[0]:s.reduce(((e,s,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1]),t[0]);return new i(r,e)},a=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return o(e)})(t):t;var l;const c=window.trustedTypes,d=c?c.emptyScript:"",h=window.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},u=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u};class m extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const r=this._$Eh(s,e);void 0!==r&&(this._$Eu.set(r,s),t.push(r))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,s,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdate(t,i,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),r=window.litNonce;void 0!==r&&s.setAttribute("nonce",r),s.textContent=t.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=g){var r,i;const o=this.constructor._$Eh(t,s);if(void 0!==o&&!0===s.reflect){const n=(null!==(i=null===(r=s.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==i?i:p.toAttribute)(e,s.type);this._$Ei=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(t,e){var s,r,i;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),a=t.converter,l=null!==(i=null!==(r=null===(s=a)||void 0===s?void 0:s.fromAttribute)&&void 0!==r?r:"function"==typeof a?a:null)&&void 0!==i?i:p.fromAttribute;this._$Ei=n,this[n]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let r=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var f;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:m}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.0");const v=globalThis.trustedTypes,b=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,w="?"+x,y=`<${w}>`,$=document,_=(t="")=>$.createComment(t),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,E=t=>{var e;return A(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,S=/>/g,M=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,U=/'/g,z=/"/g,L=/^(?:script|style|textarea|title)$/i,T=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),j=T(1),O=(T(2),Symbol.for("lit-noChange")),D=Symbol.for("lit-nothing"),I=new WeakMap,N=(t,e,s)=>{var r,i;const o=null!==(r=null==s?void 0:s.renderBefore)&&void 0!==r?r:e;let n=o._$litPart$;if(void 0===n){const t=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:null;o._$litPart$=n=new q(e.insertBefore(_(),t),t,void 0,null!=s?s:{})}return n._$AI(t),n},H=$.createTreeWalker($,129,null,!1),R=(t,e)=>{const s=t.length-1,r=[];let i,o=2===e?"<svg>":"",n=P;for(let e=0;e<s;e++){const s=t[e];let a,l,c=-1,d=0;for(;d<s.length&&(n.lastIndex=d,l=n.exec(s),null!==l);)d=n.lastIndex,n===P?"!--"===l[1]?n=C:void 0!==l[1]?n=S:void 0!==l[2]?(L.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=M):void 0!==l[3]&&(n=M):n===M?">"===l[0]?(n=null!=i?i:P,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?M:'"'===l[3]?z:U):n===z||n===U?n=M:n===C||n===S?n=P:(n=M,i=void 0);const h=n===M&&t[e+1].startsWith("/>")?" ":"";o+=n===P?s+y:c>=0?(r.push(a),s.slice(0,c)+"$lit$"+s.slice(c)+x+h):s+x+(-2===c?(r.push(void 0),e):h)}const a=o+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,r]};class B{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,o=0;const n=t.length-1,a=this.parts,[l,c]=R(t,e);if(this.el=B.createElement(l,s),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=H.nextNode())&&a.length<n;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(x)){const s=c[o++];if(t.push(e),void 0!==s){const t=r.getAttribute(s.toLowerCase()+"$lit$").split(x),e=/([.?@])?(.*)/.exec(s);a.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?G:"@"===e[1]?Y:F})}else a.push({type:6,index:i})}for(const e of t)r.removeAttribute(e)}if(L.test(r.tagName)){const t=r.textContent.split(x),e=t.length-1;if(e>0){r.textContent=v?v.emptyScript:"";for(let s=0;s<e;s++)r.append(t[s],_()),H.nextNode(),a.push({type:2,index:++i});r.append(t[e],_())}}}else if(8===r.nodeType)if(r.data===w)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=r.data.indexOf(x,t+1));)a.push({type:7,index:i}),t+=x.length-1}i++}}static createElement(t,e){const s=$.createElement("template");return s.innerHTML=t,s}}function V(t,e,s=t,r){var i,o,n,a;if(e===O)return e;let l=void 0!==r?null===(i=s._$Cl)||void 0===i?void 0:i[r]:s._$Cu;const c=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,s,r)),void 0!==r?(null!==(n=(a=s)._$Cl)&&void 0!==n?n:a._$Cl=[])[r]=l:s._$Cu=l),void 0!==l&&(e=V(t,l._$AS(t,e.values),l,r)),e}class W{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:r}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:$).importNode(s,!0);H.currentNode=i;let o=H.nextNode(),n=0,a=0,l=r[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new q(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Z(o,this,t)),this.v.push(e),l=r[++a]}n!==(null==l?void 0:l.index)&&(o=H.nextNode(),n++)}return i}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class q{constructor(t,e,s,r){var i;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cg=null===(i=null==r?void 0:r.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),k(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==O&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):E(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==D&&k(this._$AH)?this._$AA.nextSibling.data=t:this.k($.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=B.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.m(s);else{const t=new W(i,this),e=t.p(this.options);t.m(s),this.k(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new B(t)),e}S(t){A(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,r=0;for(const i of t)r===e.length?e.push(s=new q(this.A(_()),this.A(_()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class F{constructor(t,e,s,r,i){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,r){const i=this.strings;let o=!1;if(void 0===i)t=V(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==O,o&&(this._$AH=t);else{const r=t;let n,a;for(t=i[0],n=0;n<i.length-1;n++)a=V(this,r[s+n],e,n),a===O&&(a=this._$AH[n]),o||(o=!k(a)||a!==this._$AH[n]),a===D?t=D:t!==D&&(t+=(null!=a?a:"")+i[n+1]),this._$AH[n]=a}o&&!r&&this.C(t)}C(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends F{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===D?void 0:t}}const J=v?v.emptyScript:"";class G extends F{constructor(){super(...arguments),this.type=4}C(t){t&&t!==D?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Y extends F{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=V(this,t,e,0))&&void 0!==s?s:D)===O)return;const r=this._$AH,i=t===D&&r!==D||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==D&&(r===D||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const Q={P:"$lit$",L:x,V:w,I:1,N:R,R:W,D:E,j:V,H:q,O:F,F:G,B:Y,W:K,Z},X=window.litHtmlPolyfillSupport;var tt,et;null==X||X(B,q),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.2.0");class st extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=N(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return O}}st.finalized=!0,st._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:st});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:st});(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.2.0");const it=1,ot=2,nt=t=>(...e)=>({_$litDirective$:t,values:e});class at{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const lt=nt(class extends at{constructor(t){var e;if(super(t),t.type!==it||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var s,r;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(s=this.st)||void 0===s?void 0:s.has(t))&&this.et.add(t);return this.render(e)}const i=t.element.classList;this.et.forEach((t=>{t in e||(i.remove(t),this.et.delete(t))}));for(const t in e){const s=!!e[t];s===this.et.has(t)||(null===(r=this.st)||void 0===r?void 0:r.has(t))||(s?(i.add(t),this.et.add(t)):(i.remove(t),this.et.delete(t)))}return O}}),ct=()=>JSON.parse(localStorage.getItem("userData")),dt=t=>localStorage.setItem("userData",JSON.stringify(t));var ht=s(161),pt=s.n(ht);const ut="https://parseapi.back4app.com";async function gt(t,e){try{const s=await fetch(t,e);if(!0!==s.ok){403===s.status&&sessionStorage.removeItem("userData");const t=await s.json();throw new Error(t.message)}return await s.json()}catch(t){throw t}}function mt(t="get",e){const s={method:t,headers:{"X-Parse-Application-Id":"4g95yQ2SffnKO8N3wrNyEoIl2PC0BbizElZRACu9","X-Parse-REST-API-Key":"BO0XeGl7WtRAmE9EwqwMxZVc7noj3VucKebHIThA"}};void 0!==e&&(s.headers["Content-Type"]="application/json",s.body=JSON.stringify(e));const r=ct();return null!==r&&(s.headers["X-Parse-Session-Token"]=r.accessToken),s}async function ft(t){return gt(ut+t,mt())}async function vt(t,e){return gt(ut+t,mt("post",e))}async function bt(t,e){return gt(ut+t,mt("put",e))}async function xt(t,e){try{const s=await vt("/login",{username:t,password:e});return dt({username:t,id:s.objectId,accessToken:s.sessionToken,pictureUrl:s.picture.url,createdAt:s.createdAt}),s}catch(t){throw t}}async function wt(t,e,s){try{const r=await vt("/users",{username:t,email:e,password:s});return dt({username:t,id:r.objectId,accessToken:r.sessionToken,pictureUrl:r.picture.url,createdAt:r.createdAt}),r}catch(t){throw console.log(t.message),t}}async function yt(){vt("/logout"),localStorage.removeItem("userData"),pt().redirect("/")}const $t=n`
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

`,_t=n`
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
`;class kt extends st{static properties={errorMsg:{type:String},ctx:{type:Object}};static styles=[_t,$t,n`
		`];constructor(){super(),this.ctx={},this.errorMsg="",this.errorEmail=!1,this.errorPassword=!1}showHidePassword(t){t.preventDefault(),this.renderRoot.querySelectorAll(".pass").forEach((e=>{"password"===e.getAttribute("type")?(e.setAttribute("type","text"),t.target.innerHTML="&#10005"):(e.setAttribute("type","password"),t.target.innerHTML="&equiv;")}))}simpleValidation(t,e){if(""===t||""===e)throw new Error("Fill all fields.")}async onSubmit(t){t.preventDefault();const e=t.target,s=new FormData(t.target),r=s.get("username").trim();let i=s.get("password").trim();try{if(""===r||""===i)throw{code:"empty fields"};await xt(r,i),this.ctx.page.redirect("/")}catch(t){this.errorPassword=""===i,e.querySelector(".pass").value="",setTimeout((()=>{this.errorMsg="",this.errorPassword=!1}),2e3)}}render(){return j`
	<form @submit=${this.onSubmit}>
		<h1>Schmoo Social</h1>
		<div class="input-container ${lt({error:this.errorEmail})}">
			<input type="text" name="username" placeholder="Email" value="joe">
		</div>
		<div class="input-container ${lt({error:this.errorPassword})}">
			<input id="password-input" class="pass" type="password" name="password" placeholder="Password" value="123456">
			<button class="show-btn" @click=${this.showHidePassword}>&equiv;</button>
		</div>
		<input type="submit" value="Login">
		${this.errorMsg?j`<p class="errorMsg error">${this.errorMsg}</p>`:null}
	</form>
	<div class="form-footer">
		<p>Don't have an account? <a href="/register">Register</a></p>
	</div>
    `}}customElements.define("login-form",kt);class At extends st{static properties={ctx:{type:Object},error:{type:Boolean},errorMsg:{type:String},errorEmail:{type:Boolean},errorPassword:{type:Boolean}};static styles=[_t,$t,n`
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
		`];constructor(){super(),this.ctx={},this.error=!1,this.errorMsg="",this.errorUsername=!1,this.errorEmail=!1,this.errorPassword=!1}showHidePassword(t){t.preventDefault(),this.renderRoot.querySelectorAll(".pass").forEach((e=>{"password"===e.getAttribute("type")?(e.setAttribute("type","text"),t.target.innerHTML="&#10005"):(e.setAttribute("type","password"),t.target.innerHTML="&equiv;")}))}async onSubmit(t){t.preventDefault();const e=new FormData(t.target),s=e.get("username").trim(),r=e.get("email").trim(),i=e.get("password").trim(),o=e.get("repass").trim();try{if(""===s||""===r||""===i)throw new Error("Please fill all fields.");if(i.length<6||i.length>30)throw new Error("Password should be 6 to 30 characters long.");if(i!==o)throw this.errorPassword=!0,new Error("Passwords should match.");await wt(s,r,i),this.ctx.page.redirect("/")}catch(t){this.errorMsg=t.message,this.error=!0,this.errorUsername=""===r,this.errorEmail=""===r,this.errorPassword=""===i,setTimeout((()=>{this.error=!1,this.errorMsg="",this.errorUsername=!1,this.errorEmail=!1,this.errorPassword=!1}),3e3)}}render(){return j`
	<form @submit=${this.onSubmit}>
		<h1>Schmoo Social</h1>
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
		${this.error?j`<p class="errorMsg error">${this.errorMsg}</p>`:null}
		<p class="footnotes">By signing up, you agree to our Terms . Learn how we collect, use and share your data in
			our
			Data Policy and how
			we use cookies and similar technology in our Cookies Policy .</p>
	</form>
	<div class="form-footer">
		<p>Have an account? <a href="/login">Login</a></p>
	</div>
    `}}customElements.define("register-form",At);const Et=yt,Pt=t=>ft(`/classes/Post?where={"objectId":"${t}"}&include=creator`),Ct=t=>(Ot(t),vt("/classes/Post",t)),St=t=>ft(`/classes/Post?include=creator&order=-createdAt&limit=10&skip=${10*t}`),Mt=(t,e)=>ft(`/classes/Post?where={"creator":{"__type":"Pointer","className":"_User","objectId":"${e}"}}&include=creator&order=-createdAt&limit=10&skip=${10*t}`),Ut=(t,e)=>ft(`/classes/Post?where={"likes":"${e}"}&include=creator&order=-createdAt&limit=10&skip=${10*t}`),zt=t=>async function(t){return gt(ut+t,mt("delete"))}(`/classes/Post/${t}`),Lt=(t,e)=>bt(`/classes/Post/${t}`,{likes:{__op:"AddUnique",objects:[e]}}),Tt=(t,e)=>bt(`/classes/Post/${t}`,{likes:{__op:"Remove",objects:[e]}});function jt(t,e){return{__type:"Pointer",className:t,objectId:e}}function Ot(t){const e=ct().id;t.creator=jt("_User",e)}class Dt extends st{static properties={ctx:{type:Object},activePage:{type:String}};static styles=[_t,n`
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
	`];constructor(){super(),this.ctx={}}mainNavTemplate(){return j`
			<div id="navbar">
				<ul>
					${this.ctx.user?j`<!-- Home -->
					<li><a href="/" class=${lt({active:"/"===this.ctx.path})}> <svg xmlns="http://www.w3.org/2000/svg"
								class="bi bi-house" viewBox="0 0 16 16">
								<path fill-rule="evenodd"
									d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
								<path fill-rule="evenodd"
									d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
							</svg>
						</a></li>
					<!-- Profile -->
					<li><a href="/profile/${this.ctx.user.id}" class=${lt({active:this.ctx.path.includes("/profile")})}>
							<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-person" viewBox="0 0 16 16">
								<path
									d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
							</svg>
						</a></li>
					<!-- Circles -->
					<li><a href="/favourites" class=${lt({active:"/favourites"===this.ctx.path})}>
					<svg xmlns="http://www.w3.org/2000/svg" class="bi bi-heart"
								viewBox="0 0 16 16">
								<path
									d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
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
					</li>`:j`
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
		`}hamburgerTemplate(){return j`
			<div id="hamburger-icon" @click=${this.toggleHamburger}>
					<div class="bar1"></div>
					<div class="bar2"></div>
					<div class="bar3"></div>
					<ul class="mobile-menu">
						${this.ctx.user?j`<!-- Home -->
						<li><a href="/" class=${lt({active:"/"===this.ctx.path})}>Home</a></li>
						<!-- Profile -->
						<li><a href="/profile/${this.ctx.user.id}" class=${lt({active:this.ctx.path.includes("/profile")})}>Profile</a></li>
						<!-- Circles -->
						<li><a href="/favourites" class=${lt({active:"/favourites"===this.ctx.path})}>Favourites</a></li>
						<!-- Search -->
						<li><a href="/search" class=${lt({active:"/search"===this.ctx.path})}>Search</a></li>
						<!-- About -->
						<li><a href="/about" class=${lt({active:"/about"===this.ctx.path})}>About</a></li>
						<!-- Settings -->
						<li><a href="/settings" class=${lt({active:"/settings"===this.ctx.path})}>Settings</a></li>
						<li><a class="danger" href="javascript:void(0)" @click=${Et}>Logout</a></li>`:j`
						<!-- Login -->
						<li><a href="/login" class=${lt({active:"/login"===this.ctx.path})}>Login</a></li>
						<!-- Register -->
						<li><a href="/register" class=${lt({active:"/register"===this.ctx.path})}>Register</a></li>
						`}
					</ul>
				</div>`}toggleHamburger(t){t.currentTarget.classList.toggle("open")}render(){return j`
		<div id="wrapper">
			<div>
				<a id="logo" href="/"><img src="https://i.ibb.co/0VB99wP/logo-color.png" alt="Schmoozer"></a>
			</div>
			<nav>
				${this.mainNavTemplate()}
				${this.hamburgerTemplate()}
			</nav>
		</div>
		`}}customElements.define("main-nav",Dt);class It extends st{static properties={error:{type:Boolean},errorMsg:{type:String}};static styles=n`
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
	`;constructor(){super(),this.maximumLength=100,this.error=!1,this.errorMsg=""}onInput(t){t.preventDefault();t.target.value.length>this.maximumLength?(this.error=!0,this.errorMsg="Maximum length is 100 characters."):(this.error=!1,this.errorMsg="")}onSubmit(t){t.preventDefault();const e=new FormData(t.target).get("textarea");try{if(e.length<10)throw new Error("Minimum length is 10 characters.");if(e.length>this.maximumLength)throw new Error("Maximum length is 100 characters.");ct();Ct({body:e,likes:[]})}catch(t){this.errorMsg=t.message,this.error=!0,setTimeout((()=>{this.error=!1,this.errorMsg=""}),3e3)}}render(){return j`
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
					${this.errorMsg?j`<div class="errorMsg error">
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
		`}}customElements.define("new-post",It);class Nt extends st{static properties={postType:{type:String},likes:{type:Number},postData:{type:Object},currentUser:{type:Object},hasLiked:{type:Boolean},isOwner:{type:Boolean}};static styles=[_t,n`
		p {
			margin: 0;
			padding: 0;
			font-weight: normal;
			word-break: break-word;
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
	`];constructor(){super(),this.postData={},this.postType="post",this.likes=0,this.hasLiked=!0,this.isOwner=!1,this.currentUser=null}connectedCallback(){super.connectedCallback(),this.likes=this.postData?.likes?.length,this.currentUser&&"post"===this.postType&&(this.hasLiked=!0===this.postData.likes.includes(this.currentUser.id),this.isOwner=this.postData.creator.objectId===this.currentUser.id)}getPostDetails(t){if("post"===this.postType){const t=this.dataset.id;pt().redirect("/posts/"+t)}}async likePost(t){if(t.preventDefault(),this.currentUser)if(!1===this.hasLiked){this.hasLiked=!0,this.likes++;try{await Lt(this.postData.objectId,this.currentUser.id)}catch(t){console.log(t)}}else{this.hasLiked=!1,this.likes--;try{await Tt(this.postData.objectId,this.currentUser.id)}catch(t){console.log(t)}}}render(){const t=new Date(this.postData.createdAt);return j`
			<div class="left-div">
				<!-- profile picture -->
				<a href="/profile/${this.postData.creator.objectId}">
					<img class="profile-pic" src="${this.postData.creator.picture.url}">
				</a>
			</div>
			<div class="right-div">
				<!-- New Post -->
				<div>
					<!-- User Information -->
					<div class="user-info">
						<a href="/profile/${this.postData.creator.objectId}" id="name">${this.postData.creator.username}</a>
						<span id="handle-and-time">(${t.toLocaleString()})</span>
					</div>
					<!-- Post Content -->
					<div>
						<p id="post-content">${this.postData.body}</p>
					</div>
					<!-- Options -->
					${"post"===this.postType?j`<div class="options-buttons">
						<div class="icon" @click=${this.getPostDetails}>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0095f6" class="bi bi-chat"
								viewBox="0 0 16 16">
								<path
									d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
							</svg>
						</div>
						<div class="icon" @click=${this.likePost}>
							${this.hasLiked&&this.currentUser?j`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0095f6" class="bi bi-heart-fill"
								viewBox="0 0 16 16">
								<path fill-rule="evenodd"
									d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
								</svg>`:j`
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0095f6" class="bi bi-heart"
								viewBox="0 0 16 16">
								<path
									d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
									</svg>`}							
							<span class="icon-number">${this.likes}</span>
						</div>
					</div>`:null}
				</div>
			</div>
		`}}customElements.define("user-post",Nt);class Ht extends st{static properties={error:{type:Boolean},errorMsg:{type:String}};static styles=n`
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
	`;render(){return j`
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
		`}}customElements.define("user-card",Ht);class Rt extends st{static properties={user:{type:Object}};static styles=n`
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
	`;constructor(){super(),this.user=ct()}render(){const t=new Date(Number(this.user.reloadUserInfo.createdAt));return j`
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
		`}}customElements.define("profile-card",Rt);class Bt extends st{static properties={error:{type:Boolean},errorMsg:{type:String}};static styles=[n`
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
	`];constructor(){super(),this.error=!1,this.errorMsg=""}onSubmit(t){t.preventDefault();const e=new FormData(t.target).get("search").trim();try{if(""===e||e.length<3)throw new Error("Please write atleast 3 characters.")}catch(t){this.errorMsg=t.message,this.error=!0,setTimeout((()=>{this.error=!1}),3e3)}}render(){return j`
	<form @submit=${this.onSubmit}>
		<input class="input-container ${lt({error:this.error})}" type="text" name="search"
			placeholder="Try your luck">
		<input type="submit" value="Search">
		${this.error?j`<p class="errorMsg error">${this.errorMsg}</p>`:null}
	</form>
    `}}customElements.define("search-form",Bt);class Vt extends st{static properties={user:{type:Object}};static styles=[_t,n`
			:host {
				display: flex;
				flex-direction: column;
				gap: 10px;
				background-color: white;
				border-radius: 5px;
				padding: 20px;
				box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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
		`];constructor(){super(),this.user=null}render(){const t=new Date(this.user.createdAt);return j`
		<div>
			<img class="profile-pic" src="${this.user.picture?.url||this.user.pictureUrl}">
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
	`}}customElements.define("sidebar-usercard",Vt);class Wt extends st{static properties={postData:{type:Object},currentUser:{type:Object},likes:{type:Number},ctx:{type:Object},hasLiked:{type:Boolean},isOwner:{type:Boolean}};static styles=[_t,n`
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
		.disabled{
			pointer-events:none
		}
	`];constructor(){super(),this.postData={},this.hasLiked=!0,this.likes=0,this.isOwner=!1,this.currentUser=null,this.ctx={}}connectedCallback(){super.connectedCallback(),this.likes=this.postData.likes.length,this.currentUser&&(this.hasLiked=!0===this.postData.likes.includes(this.currentUser.id),this.isOwner=this.postData.creator.objectId===this.currentUser.id)}async likePost(t){if(t.preventDefault(),this.currentUser)if(!1===this.hasLiked){this.hasLiked=!0,this.likes++;try{await Lt(this.postData.objectId,this.currentUser.id)}catch(t){console.log(t)}}else{this.hasLiked=!1,this.likes--;try{await Tt(this.postData.objectId,this.currentUser.id)}catch(t){console.log(t)}}}async deletePost(){const t=this.postData?.objectId;confirm("Are you sure?")&&(await zt(t),this.ctx.page.redirect("/"))}render(){return j`
		<a href="/profile/${this.postData?.creator.objectId}">Profile</a>
		${this.currentUser?j`<a id="like-button" href="javascript:void(0)" @click=${this.likePost}>${this.hasLiked?j`Unlike`:j`Like`} <span
				class="likes-num">(${this.likes})</span> </a>`:null}
		${this.isOwner?j`<a class="danger" href="javascript:void(0)" @click=${this.deletePost}>Delete</a>`:null}
    `}}customElements.define("details-nav",Wt);const{H:qt}=Q,Ft=(t,e)=>{var s,r;const i=t._$AN;if(void 0===i)return!1;for(const t of i)null===(r=(s=t)._$AO)||void 0===r||r.call(s,e,!1),Ft(t,e);return!0},Kt=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},Jt=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Zt(e)}};function Gt(t){void 0!==this._$AN?(Kt(this),this._$AM=t,Jt(this)):this._$AM=t}function Yt(t,e=!1,s=0){const r=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(e)if(Array.isArray(r))for(let t=s;t<r.length;t++)Ft(r[t],!1),Kt(r[t]);else null!=r&&(Ft(r,!1),Kt(r));else Ft(this,t)}const Zt=t=>{var e,s,r,i;t.type==ot&&(null!==(e=(r=t)._$AP)&&void 0!==e||(r._$AP=Yt),null!==(s=(i=t)._$AQ)&&void 0!==s||(i._$AQ=Gt))};class Qt extends at{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Jt(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,r;t!==this.isConnected&&(this.isConnected=t,t?null===(s=this.reconnected)||void 0===s||s.call(this):null===(r=this.disconnected)||void 0===r||r.call(this)),e&&(Ft(this,t),Kt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class Xt{constructor(t){this.U=t}disconnect(){this.U=void 0}reconnect(t){this.U=t}deref(){return this.U}}class te{constructor(){this.Y=void 0,this.q=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.q=t)))}resume(){var t;null===(t=this.q)||void 0===t||t.call(this),this.Y=this.q=void 0}}const ee=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then;const se=nt(class extends Qt{constructor(){super(...arguments),this._$Cwt=1073741823,this._$Cyt=[],this._$CG=new Xt(this),this._$CK=new te}render(...t){var e;return null!==(e=t.find((t=>!ee(t))))&&void 0!==e?e:O}update(t,e){const s=this._$Cyt;let r=s.length;this._$Cyt=e;const i=this._$CG,o=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const n=e[t];if(!ee(n))return this._$Cwt=t,n;t<r&&n===s[t]||(this._$Cwt=1073741823,r=0,Promise.resolve(n).then((async t=>{for(;o.get();)await o.get();const e=i.deref();if(void 0!==e){const s=e._$Cyt.indexOf(n);s>-1&&s<e._$Cwt&&(e._$Cwt=s,e.setValue(t))}})))}return O}disconnected(){this._$CG.disconnect(),this._$CK.pause()}reconnected(){this._$CG.reconnect(this),this._$CK.resume()}});class re extends st{static properties={error:{type:Boolean},errorMsg:{type:String},usersPosts:{type:Array},isLogged:{type:Boolean},user:{type:Object},postsQty:{type:Number},getPosts:{type:Function},profileId:{type:String},usecase:{type:String}};static styles=[_t,n`
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
	`];constructor(){super(),this.usersPosts=[],this.maximumLength=300,this.error=!1,this.errorMsg="",this.isLogged=!1,this.page=0,this.user=null,this.getPosts="",this.profileId="",this.usecase="home-page"}onInput(t){t.preventDefault();t.target.value.length>this.maximumLength?(this.error=!0,this.errorMsg="Maximum length is 300 characters."):(this.error=!1,this.errorMsg="")}async onSubmit(t){t.preventDefault();const e=new FormData(t.target).get("textarea");try{if(e.length<10)throw new Error("Minimum length is 10 characters.");if(e.length>this.maximumLength)throw new Error("Maximum length is 300 characters.");const s={body:e,likes:[]};t.target.reset();const r=await Ct(s),i=await Pt(r.objectId);this.usersPosts.unshift(i.results[0]),this.requestUpdate()}catch(t){this.errorMsg=t.message,this.error=!0,setTimeout((()=>{this.error=!1,this.errorMsg=""}),3e3)}}getMorePosts(){this.page++,this.allPosts()}newPostTemplate=t=>j`
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
			${this.errorMsg?j`<div class="errorMsg error">
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
`;connectedCallback(){super.connectedCallback(),this.allPosts()}async allPosts(){const t=await this.getPosts(this.page,this.profileId);this.usersPosts=this.usersPosts.concat(t.results)}render(){return j`
		${this.user&&"home-page"===this.usecase?this.newPostTemplate(this.user?.pictureUrl):null}
		<div class="feed">
			${this.usersPosts.map((t=>j`
					<user-post .postData=${t} .currentUser=${this.user} data-id=${t.objectId} }>
				</user-post>`))}
		</div>
		<div class="footer">
			<button class="more-btn" type="button" @click=${this.getMorePosts}>Load more...</button>
		</div>
		`}}customElements.define("home-feed",re);class ie extends st{static styles=n`
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
	`;render(){return j`
				<nav>
					<ul>
						<!-- <li>
																			<a href="/settings/edit">
																				<span>Edit Profile</span>
																			</a>
																		</li> -->
						<li>
							<a class="danger" href="javascript:void(0)" @click=${yt}>
								<span>Logout</span>
							</a>
						</li>
					</ul>
				</nav>
		`}}customElements.define("settings-nav",ie);class oe extends st{static styles=n`
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
	`;constructor(){super()}toggleHamburger(t){t.preventDefault(),t.currentTarget.classList.toggle("open")}render(){return j`
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
		`}}customElements.define("guest-sidenav",oe);class ne extends st{static properties={user:{type:Object},error:{type:Object}};static styles=[_t,n`
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
		`];constructor(){super(),this.user=null,this.error=!1}async onSubmit(t){t.preventDefault();new FormData(t.target).get("img")}render(){return j`
			<div class="settings-section">
				<form @submit=${this.onSubmit}>
					<label>Upload profile picture</label>
					<div class="flex-ends">
						<input type="file" id="img" name="img">
						<input type="submit" value="Submit">
					</div>
				</form>
				${this.error?j`<p class="errorMsg error">${this.error?.message}</p>`:null}
			</div>
		`}}customElements.define("edit-profile",ne);class ae extends st{static properties={user:{type:String}};static styles=[_t,n`
			:host {
				display: block;
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

		`];constructor(){super(),this.user="guest"}render(){return j`
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
			${"guest"===this.user?j`<div class="section">
				<guest-sidenav></guest-sidenav>
			</div>`:null}
		`}}customElements.define("welcome-sidebar",ae);class le extends st{static properties={windowWidth:{type:Number},navigation:{type:String},activePage:{type:String},user:{type:Object}};static styles=[_t,n`
		:host {
			display: grid;  
			grid-template-columns: 1fr 2fr; 
			gap: 10px;
		}
		.sidebar {
			height: fit-content;
			position: sticky;
			top: 10px;
		}
		@media only screen and (max-width: ${700}px) {
			:host {
				grid-template-columns: 1fr; 
				gap: 0px;
			}
			welcome-sidebar {
				display: none;
			}
		}
	`];constructor(){super(),this.activePage="/",this.user=null,this.windowWidth=this.getWindowWidth()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.updateWindowWidth.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.updateWindowWidth.bind(this)),super.disconnectedCallback()}getWindowWidth(){return window.innerWidth}async updateWindowWidth(){this.windowWidth=window.innerWidth}render(){return j`
				${this.windowWidth>700?j`
						<div class="sidebar">
							<welcome-sidebar user=${this.user?.username||"guest"}></welcome-sidebar>
						</div>`:null}
				<div>
					<slot></slot>
				</div>
		`}}customElements.define("home-page",le);class ce extends st{static styles=[_t,n`
		:host {
			overflow: hidden;
		}
		h1 {
			font-size: 3vw;
			font-weight: 700;
			text-align: center;
		}
	`];constructor(t="John"){super(),this.name=t}render(){return j`
		<h1>UNDER CONSTRUCTION</h1>
		`}}customElements.define("circles-page",ce);class de extends st{static properties={name:{type:String},profileId:{type:String},windowWidth:{type:Number},navigation:{type:String},activePage:{type:String}};static styles=[_t,n`
		:host {
			display: grid;  
			grid-template-columns: 1fr 2fr; 
			gap: 10px;
		}
		.sidebar {
			height: fit-content;
			position: sticky;
			top: 10px;
		}
		@media only screen and (max-width: ${700}px) {
			:host {
				grid-template-columns: 1fr; 
			}
			.sidebar {
				position: static;
				top: 0px;
			}
		}
	`];constructor(){super(),this.activePage="/",this.profileId=null}async userCardPromise(t){const e=await(s=t,ft(`/users/${s}`));var s;return j`<sidebar-usercard .user=${e}></sidebar-usercard>`}render(){return j`
			<div class="sidebar">
				${se(this.userCardPromise(this.profileId),j`Loading...`)}
			</div>
			<div>
				<slot></slot>
			</div>
		`}}customElements.define("profile-page",de);function he(t){t.render(j`
			<settings-page .user=${t.user}></settings-page>
	`)}class pe extends st{static styles=[_t,n`
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
	`];constructor(){super(),this.user=null}render(){return j`
		<settings-nav></settings-nav>
`}}customElements.define("settings-page",pe);class ue extends st{properties={ctx:{type:Object}};static styles=[_t,n`
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
	`];constructor(){super(),this.ctx={}}render(){return j`
		<login-form .ctx=${this.ctx}></login-form>
		`}}customElements.define("login-page",ue);class ge extends st{properties={ctx:{type:Object}};static styles=[_t,n`
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
	`];constructor(){super(),this.ctx={}}render(){return j`
		<register-form .ctx=${this.ctx}></register-form>
		`}}customElements.define("register-page",ge);class me extends st{static properties={name:{type:String}};static styles=[_t,n`
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
	`];render(){return j`
			<search-form></search-form>
			<p style="text-align: center; font-size: 3rem; font-weight: 700" slot="main">No Results</p>
		`}}customElements.define("search-page",me);class fe extends st{static properties={id:{type:String},user:{type:Object},ctx:{type:Object},usersComments:{type:Array}};static styles=[_t,n`
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
			width: 100px;
		} 
		.new-comment-pic {
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
			font-size: 1.4rem;
			word-break: break-all;
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
		.no-comments {
			text-align: center;
		}
	`];constructor(){super(),this.usersComments=[],this.id="",this.user=null,this.postData=null,this.ctx={}}connectedCallback(){super.connectedCallback(),this.allComments()}async allComments(){const t=await(e=this.id,ft(`/classes/Comment?where={"parentPost":{"__type":"Pointer","className":"Post","objectId":"${e}"}}&include=creator&order=-createdAt`));var e;this.usersComments=this.usersComments.concat(t.results)}async userPost(){if(null===this.postData){const t=await Pt(this.id);this.postData=t.results[0]}return j`
				${this.userPostTemplate()}
				<details-nav .ctx=${this.ctx} .postData=${this.postData} .currentUser=${ct()}></details-nav>
				`}onSubmit=async t=>{t.preventDefault();const e=t.target,s=new FormData(e).get("textarea");try{const t=await((t,e)=>{const s={body:t};return Ot(s),s.parentPost=jt("Post",e),vt("/classes/Comment",s)})(s,this.id);e.reset();const i=await(r=t.objectId,ft(`/classes/Comment?where={"objectId":"${r}"}&include=creator`));this.usersComments=i.results.concat(this.usersComments)}catch(t){console.log(t)}var r};newCommentForm=()=>j`
				<form @submit=${this.onSubmit}>
					<div>
						<textarea id="textarea" name="textarea" class="${lt({error:this.error})}" placeholder="Say something"
							@input="${this.onInput}"></textarea>
					</div>
					${this.errorMsg?j`<div class="errorMsg error">
						<span>${this.errorMsg}</span>
						</div>`:null}
					<div class="options">
						<!-- Options -->
						
						<input type="submit" value="Comment">
					</div>
				</form>
	`;newCommentTemplate=()=>j`
			<div class="new-comment-template">
			<div class="left-div">
				<!-- profile picture -->
				<a href="/profile/${this.user?.id}">
					<img class="new-comment-pic" src="${this.user?.pictureUrl}">
				</a>
			</div>
			<div class="right-div">
				<!-- New Post -->
				${this.newCommentForm()}
			</div>
			</div>
	`;userPostTemplate=()=>{const t=new Date(this.postData.createdAt);return j`
				<div class="user-post">
					<div class="left-div">
						<!-- profile picture -->
						<a href="/profile/${this.postData.creator.objectI}">
							<img class="profile-pic" src="${this.postData.creator.picture.url}" alt="Profile Picture">
						</a>
					</div>
					<div class="right-div">
						<!-- New Post -->
						<div>
							<!-- User Information -->
							<div class="user-info">
								<a href="/profile/${this.postData.creator.objectId}" id="name">${this.postData.creator.username}</a>
								<span id="handle-and-time">(${t.toLocaleString()})</span>
							</div>
							<!-- Post Content -->
							<div class="body-container">
								<p id="post-content">${this.postData.body}</p>
							</div>					
						</div>
					</div>
				</div>
			`};blankPostTemplate=()=>j`
				<div class="user-post">
					<div class="left-div">
						<!-- profile picture -->
						<a href="/profile/">
							<img class="profile-pic" src="/img/default-user-image.png" >
						</a>
					</div>
					<div class="right-div">
						<!-- New Post -->
						<div>
							<!-- User Information -->
							<div class="user-info">
								<a href="/profile/" id="name">User</a>
								<span id="handle-and-time">(4/16/2022, 5:09:03 PM)</span>
							</div>
							<!-- Post Content -->
							<div class="body-container">
								<p id="post-content">Loading...</p>
							</div>					
						</div>
					</div>
				</div>
			`;render(){return j`
			<div class="main">
				${se(this.userPost(),this.blankPostTemplate())}
				${this.user?j`${this.newCommentTemplate()}`:null}
				<h3 class="comments-header">Comments:</h3>
				<div class="comments-section">
				${this.usersComments.length>0?j`${function*(t,e){if(void 0!==t){let s=0;for(const r of t)yield e(r,s++)}}(this.usersComments,(t=>j`
						<user-post postType="commment" data-id=${t.objectId} .postData=${t} .currentUser=${this.user}></user-post>`))}`:j`<p class="no-comments">No comments</p>`}
				</div>
			</div>
		
		`}}customElements.define("details-page",fe);class ve extends st{static properties={windowWidth:{type:Number},navigation:{type:String},activePage:{type:String},user:{type:Object}};static styles=[_t,n`
		:host {
			display: grid;  
			grid-template-columns: 1fr; 
			gap: 10px;
		}
		:host > *:not(:last-child) {
			margin-bottom: 10px; 
		} 
		.main {
			max-width: 320px;
			margin: 0 auto;
		}
	`];constructor(){super(),this.activePage="/about",this.user=null}render(){return j`
				<div class="main">
					<welcome-sidebar user=${this.user?.username||"guest"}></welcome-sidebar>
				</div>`}}customElements.define("about-page",ve);const be=document.getElementById("outlet");class xe extends st{static properties={navigation:{type:String},activePage:{type:String},user:{type:Object}};static styles=[_t,n`
		:host {
			display: grid;  
			grid-template-columns: 1fr 2fr; 
			gap: 10px;
		}
		:host > *:not(:last-child) {
			margin-bottom: 10px; 
		} 
		.greeting {
			background-color: white;
			padding: 20px;
			border-radius: 5px;
			box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
			margin-bottom: 10px;
		}
		h2 {
			font-size: 1.5rem;
			font-weight: 700;
		}
		.sidebar {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		@media only screen and (max-width: ${700}px) {
			:host {
				grid-template-columns: 1fr; 
				gap: 0px;
			}
			welcome-sidebar {
				display: none;
			}
			.sidebar {
				display: none;
			}
		}
	`];constructor(){super(),this.activePage="/",this.user=null}render(){return j`
				<div class="sidebar">
					<sidebar-usercard .user=${ct()}></sidebar-usercard>
				</div>
				<div>
					<div class="greeting">
						<h2>Here are all the jokes that you loved!</h2>
					</div>
					<slot></slot>
				</div>
		`}}customElements.define("liked-page",xe);document.getElementById("outlet");pt()(((t,e)=>{t.render=t=>N(t,be),e()})),pt()(((t,e)=>{t.user=ct(),e()})),pt()((function(t,e){N(j`
		<main-nav .ctx=${t}></main-nav>`,document.querySelector("header")),e()})),pt()("/",(function(t){t.render(j`
		<home-page activePage=${"/"} .user=${t.user}> 
			<home-feed .getPosts=${St} .isLogged=${t.user} .user=${t.user}></home-feed>
		</home-page>`)})),pt()("/profile/:id",(function(t){t.render(j`
		<profile-page activePage=${"/profile"} profileId=${t.params.id}>
			<home-feed usecase='profile-page' .getPosts=${Mt} .isLogged=${t.user} .user=${t.user}
				profileId=${t.params.id}>
			</home-feed>
		</profile-page>`)})),pt()("/favourites",(function(t){t.render(j`
		<liked-page activePage=${"/"} .user=${t.user}>
			<home-feed usecase='liked-page' .getPosts=${Ut} .isLogged=${t.user} .user=${t.user}
				profileId=${t.user.id}>
			</home-feed>
		</liked-page>`)})),pt()("/search",(function(t){t.render(j`
		<search-page slot="side">
		</search-page>
		`)})),pt()("/settings",he),pt()("/settings/edit",he),pt()("/login",(function(t){t.render(j`
		<login-page .ctx=${t}></login-page>
		`)})),pt()("/register",(function(t){t.render(j`
		<register-page .ctx=${t}></register-page>
		`)})),pt()("/posts/:id",(function(t){t.render(j`
			<details-page .ctx=${t} id=${t.params.id} .user=${t.user}></details-page>
		`)})),pt()("/about",(function(t){t.render(j`
		<about-page activePage=${"/"} .user=${t.user}>
		</about-page>`)})),pt().start()})()})();