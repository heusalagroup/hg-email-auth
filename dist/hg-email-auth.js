#!/usr/bin/env node
"use strict";function q(t,e){var i,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
i=Object.getOwnPropertySymbols(t),e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,i)),n}function f(t){for(var i,e=1;e<arguments.length;e++)i=null!=arguments[e]?arguments[e]:{},e%2?q(
Object(i),!0).forEach(function(e){r(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(i)):q(Object(i)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(i,e))});return t}function r(e,t,i){t in e?Object.defineProperty(e,t,{value:i,
enumerable:!0,configurable:!0,writable:!0}):e[t]=i}function e(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function M(i){if(i&&i.__esModule)return i;var n=Object.create(null);return i&&Object.keys(i).forEach(
function(e){var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(i,e),Object.defineProperty(n,e,t.get?t:{
enumerable:!0,get:function(){return i[e]}}))}),n.default=i,Object.freeze(n)}function H(e){var t,i=-1,
n=null==e?0:e.length;for(this.clear();++i<n;)t=e[i],this.set(t[0],t[1])}function U(e){var t,i=-1,n=null==e?0:e.length;
for(this.clear();++i<n;)t=e[i],this.set(t[0],t[1])}function z(e){var t,i=-1,n=null==e?0:e.length;for(this.clear();++i<n;
)t=e[i],this.set(t[0],t[1])}function B(e){e=this.__data__=new Yi(e),this.size=e.size}function D(e){var t=-1,
i=null==e?0:e.length;for(this.__data__=new Zi;++t<i;)this.add(e[t])}function F(n,a){function o(){var e=arguments,
t=a?a.apply(this,e):e[0],i=o.cache;return i.has(t)?i.get(t):(e=n.apply(this,e),o.cache=i.set(t,e)||i,e)}if(
"function"!=typeof n||null!=a&&"function"!=typeof a)throw new TypeError("Expected a function");return o.cache=new(
F.Cache||Ra),o}function V(e){return void 0===e}function $(e){return pn(e)}function G(e){return V(e)||Ws(e)}function l(e
){return tc(e)}function K(e){return ac(e)}function J(e,t){return qo(e,t)}function Q(e,t){return Fo(e,t)}function W(e,t=l
,i=void 0){return!!(void 0===i||_i(n=e)&&Q(xc(n),i))&&(n=void 0!==t?t:l,_i(i=e)&&Q(ie(i),n));var n}function X(e){
return!!_i(e)&&!(e instanceof Date)&&!Ei(e)&&!$(e)&&W(e,l,void 0)}function Y(...e){return t=>J(e,e=>e(t))}function Z(e){
return _i(e)}function ee(e,t){return Z(e)&&0===(i=t,ws(ie(e),e=>!i.includes(e)).length);var i}function te(e){if(
void 0!==e&&""!==e)return""+e}function ie(e,t=l){var i;return $(e)?(i=So(e,(e,t)=>t),ws(i,e=>t(e))):Z(e)?(
i=Reflect.ownKeys(e),ws(i,e=>t(e))):[]}function ne(e){if(!e.startsWith("%{")||!e.endsWith("}"))return te(e)}function ae(
e){if(K(e))switch(e){case a.OPTIONS:return"options";case a.GET:return"get";case a.POST:return"post";case a.PUT:
return"put";case a.DELETE:return"delete";case a.PATCH:return"patch"}throw new TypeError(
"Unsupported value for stringifyRequestMethod(): "+e)}function oe(e){return K(e)&&0<=e&&e<=5}function re(e){if(oe(e)
)return e;if(l(e))switch(e=e.toLowerCase()){case"options":return a.OPTIONS;case"get":return a.GET;case"post":
return a.POST;case"put":return a.PUT;case"delete":return a.DELETE;case"patch":return a.PATCH}throw new TypeError(
`Cannot parse value "${e}" as a valid RequestMethod`)}function se(e){if(K(e))switch(e){case n.Continue:
case n.SwitchingProtocols:case n.Processing:case n.CheckPoint:case n.OK:case n.Created:case n.Accepted:
case n.NonAuthoritativeInformation:case n.NoContent:case n.ResetContent:case n.PartialContent:case n.MultiStatus:
case n.AlreadyReported:case n.IMUsed:case n.MultipleChoices:case n.MovedPermanently:case n.Found:case n.SeeOther:
case n.NotModified:case n.TemporaryRedirect:case n.PermanentRedirect:case n.BadRequest:case n.Unauthorized:
case n.PaymentRequired:case n.Forbidden:case n.NotFound:case n.MethodNotAllowed:case n.NotAcceptable:
case n.ProxyAuthenticationRequired:case n.RequestTimeout:case n.Conflict:case n.Gone:case n.LengthRequired:
case n.PreconditionFailed:case n.PayloadTooLarge:case n.URITooLong:case n.UnsupportedMediaType:
case n.RequestedRangeNotSatisfiable:case n.ExpectationFailed:case n.IAmATeapot:case n.UnprocessableEntity:case n.Locked:
case n.FailedDependency:case n.TooEarly:case n.UpgradeRequired:case n.PreconditionRequired:case n.TooManyRequests:
case n.RequestHeaderFieldsTooLarge:case n.UnavailableForLegalReasons:case n.InternalServerError:case n.NotImplemented:
case n.BadGateway:case n.ServiceUnavailable:case n.GatewayTimeout:case n.HttpVersionNotSupported:
case n.VariantAlsoNegotiates:case n.InsufficientStorage:case n.LoopDetected:case n.BandwidthLimitExceeded:
case n.NotExtended:case n.NetworkAuthenticationRequired:return 1}}function ce(e){switch(e){case n.Continue:
return"Continue";case n.SwitchingProtocols:return"Switching Protocols";case n.Processing:return"Processing";
case n.CheckPoint:return"Check Point";case n.OK:return"OK";case n.Created:return"Created";case n.Accepted:
return"Accepted";case n.NonAuthoritativeInformation:return"Non-Authoritative Information";case n.NoContent:
return"No Content";case n.ResetContent:return"Reset Content";case n.PartialContent:return"Partial Content";
case n.MultiStatus:return"Multi Status";case n.AlreadyReported:return"Already Reported";case n.IMUsed:return"IM Used";
case n.MultipleChoices:return"Multiple Choices";case n.MovedPermanently:return"Moved Permanently";case n.Found:
return"Found";case n.SeeOther:return"See Other";case n.NotModified:return"Not Modified";case n.TemporaryRedirect:
return"Temporary Redirect";case n.PermanentRedirect:return"Permanent Redirect";case n.BadRequest:return"Bad Request";
case n.Unauthorized:return"Unauthorized";case n.PaymentRequired:return"Payment Required";case n.Forbidden:
return"Forbidden";case n.NotFound:return"Not Found";case n.MethodNotAllowed:return"Method Not Allowed";
case n.NotAcceptable:return"Not Acceptable";case n.ProxyAuthenticationRequired:return"Proxy Authentication Required";
case n.RequestTimeout:return"Request Timeout";case n.Conflict:return"Conflict";case n.Gone:return"Gone";
case n.LengthRequired:return"Length Required";case n.PreconditionFailed:return"Precondition Failed";
case n.PayloadTooLarge:return"Payload Too Large";case n.URITooLong:return"URI Too Long";case n.UnsupportedMediaType:
return"Unsupported Media Type";case n.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable";
case n.ExpectationFailed:return"Expectation Failed";case n.IAmATeapot:return"I Am a Teapot";case n.UnprocessableEntity:
return"Unprocessable Entity";case n.Locked:return"Locked";case n.FailedDependency:return"Failed Dependency";
case n.TooEarly:return"Too Early";case n.UpgradeRequired:return"Upgrade Required";case n.PreconditionRequired:
return"Precondition Required";case n.TooManyRequests:return"Too Many Requests";case n.RequestHeaderFieldsTooLarge:
return"Request Header Fields Too Large";case n.UnavailableForLegalReasons:return"Unavailable For Legal Reasons";
case n.InternalServerError:return"Internal Server Error";case n.NotImplemented:return"Not Implemented";
case n.BadGateway:return"Bad Gateway";case n.ServiceUnavailable:return"Service Unavailable";case n.GatewayTimeout:
return"Gateway Timeout";case n.HttpVersionNotSupported:return"Http Version Not Supported";case n.VariantAlsoNegotiates:
return"Variant Also Negotiates";case n.InsufficientStorage:return"Insufficient Storage";case n.LoopDetected:
return"Loop Detected";case n.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded";case n.NotExtended:
return"Not Extended";case n.NetworkAuthenticationRequired:return"Network Authentication Required";default:
return e<400?"HTTP Status":"HTTP Error"}}function le(e,t=void 0){return new Kp(e,t)}function pe(e){
return e&&e instanceof Kp}function de(e){return C.isObject(e)&&C.hasPropertyMethods(e)&&$(e.methods)&&Q(e.methods,oe
)&&C.hasPropertyPaths(e)&&$(e.paths)&&Q(e.paths,l)}function ue(e){if(!K(e))return!1;switch(e){case _c.JSON:
case _c.STRING:case _c.INTEGER:case _c.NUMBER:return!0}return!1}function he(e){return!!e&&Z(e)&&C.everyPropertyIs(e,
e=>l(e)||$(e)&&Q(e,l))}function me(e){return!!e&&(null==e?void 0:e.objectType)===p.MODEL_ATTRIBUTE&&l(
null==e?void 0:e.attributeName)&&ue(null==e?void 0:e.valueType)}function fe(e){return!!(t=e)&&(
null==t?void 0:t.objectType)===p.QUERY_PARAM&&l(null==t?void 0:t.queryParam)&&ue(null==t?void 0:t.valueType)||!!e&&(
null==e?void 0:e.objectType)===p.REQUEST_BODY&&ue(null==e?void 0:e.valueType)||!!(t=e)&&(null==t?void 0:t.objectType
)===p.REQUEST_HEADER&&l(null==t?void 0:t.headerName)&&Ws(null==t?void 0:t.isRequired)&&ue(null==t?void 0:t.valueType)&&(
void 0===(null==t?void 0:t.defaultValue)||l(null==t?void 0:t.defaultValue))||!!e&&(null==e?void 0:e.objectType
)===p.REQUEST_HEADER_MAP&&(void 0===(null==e?void 0:e.defaultValues)||he(null==e?void 0:e.defaultValues))||!!(t=e)&&(
null==t?void 0:t.objectType)===p.PATH_VARIABLE&&l(null==t?void 0:t.variableName)&&Ws(null==t?void 0:t.isRequired)&&ue(
null==t?void 0:t.valueType)&&(void 0===(null==t?void 0:t.defaultValue)||l(null==t?void 0:t.defaultValue))||!!e&&(
null==e?void 0:e.objectType)===p.PATH_VARIABLE_MAP&&(void 0===(null==e?void 0:e.defaultValues)||!!(
t=null==e?void 0:e.defaultValues)&&Z(t)&&C.everyPropertyIs(t,l))||me(e);var t}function ge(e){return C.isObject(e
)&&C.hasPropertyMappings(e)&&$(e.mappings)&&Q(e.mappings,de)&&C.hasPropertyParams(e)&&$(e.params)&&Q(e.params,
C.createOrFunction(fe,Xs))}function ve(e){if(!C.isObject(e))return"Value is not object";if(!C.hasPropertyMappings(e)
)return'Property "mappings" did not exist';if(!$(e.mappings))return'Property "mappings" was not an array';if(!Q(
e.mappings,de))return'Property "mappings" had some elements which were not RequestMappingObject';if(
!C.hasPropertyParams(e))return'Property "params" did not exist';if(!$(e.params)
)return'Property "params" was not an array';const i=C.createOrFunction(fe,Xs);return Q(e.params,i
)?"ok":'Property "params" had some elements which were not RequestParamObject or null: '+ws(So(e.params,(e,t)=>i(e
)?"":`Item #${t} was not null or RequestParamObject`),e=>!!e).join(", ")}function xe(e){var t;return e&&(
!C.hasProperty__requestMappings(e)||(t=e=e[od],C.isObject(t)&&C.hasPropertyMappings(t)&&$(t.mappings)&&Q(t.mappings,de
)&&C.hasPropertyControllerProperties(t)&&Z(t.controllerProperties)&&C.everyPropertyIs(t.controllerProperties,ge
)||void ad.warn("The internal mapping object was not correct: "+JSON.stringify(e,null,2)+": "+(t=e,C.isObject(t
)?C.hasPropertyMappings(t)?$(t.mappings)?Q(t.mappings,de)?C.hasPropertyControllerProperties(t)?Z(t.controllerProperties
)?C.everyPropertyIs(t.controllerProperties,ge
)?"ok":'Property "controllerProperties" was not valid: Some properties were not valid: '+C.explainEveryPropertyIs(
t.controllerProperties,ge,ve
):'Property "controllerProperties" was not valid: Property was not object':'Property "controllerProperties" was not valid: Property did not exist':'Property "mappings" was not valid: Some items were not valid':'Property "mappings" was not valid: Was not array':'Property "mappings" was not valid: Did not exist':"not object"
))))}function ye(e,t){if(C.hasProperty__requestMappings(e))return f(f({},e[od]),{},{controller:t})}function be(e,t){
const i=f({},t);g(i,"controller")&&delete i.controller,e[od]=i}function _e(e){return l(t=e)||K(t)||Ws(t)||Xs(t)||ke(e
)||we(e);var t}function we(e){return X(e)&&W(e,l,Y(_e,V))}function ke(e){var t,[e,i=void 0,n=void 0,a=void 0]=[e,Y(_e,V)
];return!!pn(e)&&(t=null!=(t=null==e?void 0:e.length)?t:0,!(void 0!==n&&t<n)&&!(void 0!==a&&a<t)&&(void 0===i||Q(e,i)))}
function Ee(e){return e&&e instanceof sd}function Se(e){return K(e)}function Te(e,t,i,n){var a,o,r=arguments.length,
s=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if(
"object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(o=e.length-1;0<=o;o--
)(a=e[o])&&(s=(r<3?a(s):3<r?a(t,i,s):a(t,i))||s);return 3<r&&s&&Object.defineProperty(t,i,s),s}function Re(i,n){
return function(e,t){n(e,t,i)}}function Oe(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata
)return Reflect.metadata(e,t)}function Ae(...e){return L.postMapping(...e)}function Ce(e,t,i){return L.body(e,t,i)}
function Pe(e,t){return{error:e,code:t}}function je(e){if(this.buffer=null,this.writable=!0,this.readable=!0,!e
)return this.buffer=Ec.alloc(0),this;if("function"==typeof e.pipe)return this.buffer=Ec.alloc(0),e.pipe(this),this;if(
e.length||"object"==typeof e)return this.buffer=e,this.writable=!1,process.nextTick(function(){this.emit("end",e),
this.readable=!1,this.emit("close")}.bind(this)),this;throw new TypeError("Unexpected data type ("+typeof e+")")}
function Ne(e,t){var i,n;if(!Sc.isBuffer(e)||!Sc.isBuffer(t))return!1;if(e.length!==t.length)return!1;for(
n=i=0;n<e.length;n++)i|=e[n]^t[n];return 0===i}function Le(e){if(Cc.isBuffer(e))return e;if("string"==typeof e
)return Cc.from(e,"base64");throw new TypeError("ECDSA signature must be a Base64 string or a Buffer")}function Ie(e,t,i
){for(var n=0;t+n<i&&0===e[t+n];)++n;return 128<=e[t+n]&&--n,n}function qe(e){if(!Nc.isBuffer(e)&&"string"!=typeof e){
if(!zc)throw ze(Hc);if("object"!=typeof e)throw ze(Hc);if("string"!=typeof e.type)throw ze(Hc);if(
"string"!=typeof e.asymmetricKeyType)throw ze(Hc);if("function"!=typeof e.export)throw ze(Hc)}}function Me(e){if(
!Nc.isBuffer(e)&&"string"!=typeof e&&"object"!=typeof e)throw ze(Uc)}function He(e){return e.replace(/=/g,"").replace(
/\+/g,"-").replace(/\//g,"_")}function Ue(e){var t,i;if(4!=(t=4-(e=e.toString()).length%4))for(i=0;i<t;++i)e+="=";
return e.replace(/\-/g,"+").replace(/_/g,"/")}function ze(e){var t=[].slice.call(arguments,1),e=qc.format.bind(qc,e
).apply(null,t);return new TypeError(e)}function Be(e){var t=e;return Nc.isBuffer(t
)||"string"==typeof t?e:JSON.stringify(e)}function De(n){return function(e,t){var i=t;if(!Nc.isBuffer(i
)&&"string"!=typeof i){if(!zc)throw ze(Mc);if("object"!=typeof i)throw ze(Mc);if("secret"!==i.type)throw ze(Mc);if(
"function"!=typeof i.export)throw ze(Mc)}return e=Be(e),(i=Lc.createHmac("sha"+n,t)).update(e),He(i.digest("base64"))}}
function Fe(n){return function(e,t,i){return e=De(n)(e,i),jc(Nc.from(t),Nc.from(e))}}function Ve(n){return function(e,t
){var i;return Me(t),e=Be(e),(i=Lc.createSign("RSA-SHA"+n)).update(e),He(i.sign(t,"base64"))}}function $e(a){
return function(e,t,i){qe(i),e=Be(e),t=Ue(t);var n=Lc.createVerify("RSA-SHA"+a);return n.update(e),n.verify(i,t,"base64"
)}}function Ge(n){return function(e,t){var i;return Me(t),e=Be(e),(i=Lc.createSign("RSA-SHA"+n)).update(e),He(i.sign({
key:t,padding:Lc.constants.RSA_PKCS1_PSS_PADDING,saltLength:Lc.constants.RSA_PSS_SALTLEN_DIGEST},"base64"))}}
function Ke(a){return function(e,t,i){qe(i),e=Be(e),t=Ue(t);var n=Lc.createVerify("RSA-SHA"+a);return n.update(e),
n.verify({key:i,padding:Lc.constants.RSA_PKCS1_PSS_PADDING,saltLength:Lc.constants.RSA_PSS_SALTLEN_DIGEST},t,"base64")}}
function Je(t){var i=Ve(t);return function(){var e=i.apply(null,arguments);return Ic.derToJose(e,"ES"+t)}}function Qe(n
){var a=$e(n);return function(e,t,i){return t=Ic.joseToDer(t,"ES"+n).toString("base64"),a(e,t,i)}}function We(){
return function(){return""}}function Xe(){return function(e,t){return""===t}}function Ye(e,t){return Dc.from(e,t
).toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ze(e){var t=e.header,i=e.payload,
n=e.secret||e.privateKey,e=e.encoding,a=Vc(t.alg),e=(e=e||"utf8",t=Ye($c(t),"binary"),i=Ye($c(i),e),Gc.format("%s.%s",t,
i)),t=a.sign(e,n);return Gc.format("%s.%s",e,t)}function et(e){var t=e.secret||e.privateKey||e.key,t=new Fc(t);
this.readable=!0,this.header=e.header,this.encoding=e.encoding,this.secret=this.privateKey=this.key=t,
this.payload=new Fc(e.payload),this.secret.once("close",function(){!this.payload.writable&&this.readable&&this.sign()
}.bind(this)),this.payload.once("close",function(){!this.secret.writable&&this.readable&&this.sign()}.bind(this))}
function tt(e){if(e=e.split(".",1)[0],e=Kc.from(e,"base64").toString("binary"),
"[object Object]"===Object.prototype.toString.call(e))return e;try{return JSON.parse(e)}catch(e){return}}function it(e){
return e.split(".")[2]}function nt(e){return Yc.test(e)&&!!tt(e)}function at(e,t,i){var n;if(t)return n=it(e=Xc(e)),
e=e.split(".",2).join("."),Qc(t).verify(e,n,i);throw(t=new Error("Missing algorithm parameter for jws.verify")
).code="MISSING_ALGORITHM",t}function ot(e,t){var i,n,a;return t=t||{},nt(e=Xc(e))&&(i=tt(e))?(n=n||"utf8",a=e.split("."
)[1],a=Kc.from(a,"base64").toString(n),{header:i,payload:a="JWT"===i.typ||t.json?JSON.parse(a,t.encoding):a,
signature:it(e)}):null}function rt(e){var t=(e=e||{}).secret||e.publicKey||e.key,t=new Jc(t);this.readable=!0,
this.algorithm=e.algorithm,this.encoding=e.encoding,this.secret=this.publicKey=this.key=t,this.signature=new Jc(
e.signature),this.secret.once("close",function(){!this.signature.writable&&this.readable&&this.verify()}.bind(this)),
this.signature.once("close",function(){!this.secret.writable&&this.readable&&this.verify()}.bind(this))}function st(e){
return(st="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){
return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ct(e,t
){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lt(e,t){for(var i,
n=0;n<t.length;n++)(i=t[n]).enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),
Object.defineProperty(e,i.key,i)}function pt(e,t,i){t&&lt(e.prototype,t),i&&lt(e,i),Object.defineProperty(e,"prototype",
{writable:!1})}function dt(e){if(void 0===e)throw new ReferenceError(
"this hasn't been initialised - super() hasn't been called");return e}function ut(e,t){return(
ut=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ht(e,t){if("function"!=typeof t&&null!==t
)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{
constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ut(e,t)}
function mt(e,t){if(t&&("object"===st(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError(
"Derived constructors may only return object or undefined");return dt(e)}function ft(e){return(
ft=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}
function gt(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i}
function vt(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function xt(t
,e){var i,n=Object.keys(t);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(t),e&&(i=i.filter(
function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)),n}function yt(t){for(var i,
e=1;e<arguments.length;e++)i=null!=arguments[e]?arguments[e]:{},e%2?xt(Object(i),!0).forEach(function(e){gt(t,e,i[e])}
):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):xt(Object(i)).forEach(
function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))});return t}function bt(){var i,n,
e=new Promise(function(e,t){i=e,n=t});return e.resolve=i,e.reject=n,e}function _t(e){return null==e?"":""+e}function wt(
e,t,i){function n(e){return e&&-1<e.indexOf("###")?e.replace(/###/g,"."):e}function a(){return!e||"string"==typeof e}
for(var o,r="string"!=typeof t?[].concat(t):t.split(".");1<r.length;){if(a())return{};o=n(r.shift()),!e[o]&&i&&(
e[o]=new i),e=Object.prototype.hasOwnProperty.call(e,o)?e[o]:{}}return a()?{}:{obj:e,k:n(r.shift())}}function kt(e,t,i){
(e=wt(e,t,Object)).obj[e.k]=i}function Et(e,t){if(t=(e=wt(e,t)).obj,e=e.k,t)return t[e]}function St(e,t,i){
return void 0!==(e=Et(e,i))?e:Et(t,i)}function Tt(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}
function Rt(e){return"string"==typeof e?e.replace(/[&<>"'\/]/g,function(e){return ol[e]}):e}function Ot(t,e){var i,
n=Object.keys(t);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(t),e&&(i=i.filter(function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)),n}function At(t){for(var i,
e=1;e<arguments.length;e++)i=null!=arguments[e]?arguments[e]:{},e%2?Ot(Object(i),!0).forEach(function(e){gt(t,e,i[e])}
):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Ot(Object(i)).forEach(
function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))});return t}function Ct(t,e){var i,
n=Object.keys(t);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(t),e&&(i=i.filter(function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)),n}function Pt(t){for(var i,
e=1;e<arguments.length;e++)i=null!=arguments[e]?arguments[e]:{},e%2?Ct(Object(i),!0).forEach(function(e){gt(t,e,i[e])}
):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Ct(Object(i)).forEach(
function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))});return t}function jt(e){return e.charAt(0
).toUpperCase()+e.slice(1)}function Nt(t,e){var i,n=Object.keys(t);return Object.getOwnPropertySymbols&&(
i=Object.getOwnPropertySymbols(t),e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
n.push.apply(n,i)),n}function Lt(t){for(var i,e=1;e<arguments.length;e++)i=null!=arguments[e]?arguments[e]:{},e%2?Nt(
Object(i),!0).forEach(function(e){gt(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(i)):Nt(Object(i)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(i,e))});return t}function It(t,e){var i,n=Object.keys(t);
return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(t),e&&(i=i.filter(function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)),n}function qt(t){for(var i,
e=1;e<arguments.length;e++)i=null!=arguments[e]?arguments[e]:{},e%2?It(Object(i),!0).forEach(function(e){gt(t,e,i[e])}
):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):It(Object(i)).forEach(
function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))});return t}function Mt(t,e){var i,
n=Object.keys(t);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(t),e&&(i=i.filter(function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)),n}function Ht(t){for(var i,
e=1;e<arguments.length;e++)i=null!=arguments[e]?arguments[e]:{},e%2?Mt(Object(i),!0).forEach(function(e){gt(t,e,i[e])}
):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Mt(Object(i)).forEach(
function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))});return t}function Ut(e){
return"string"==typeof e.ns&&(e.ns=[e.ns]),"string"==typeof e.fallbackLng&&(e.fallbackLng=[e.fallbackLng]),
"string"==typeof e.fallbackNS&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(
e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function zt(t,e){var i,n=Object.keys(t);
return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(t),e&&(i=i.filter(function(e){
return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)),n}function Bt(t){for(var i,
e=1;e<arguments.length;e++)i=null!=arguments[e]?arguments[e]:{},e%2?zt(Object(i),!0).forEach(function(e){gt(t,e,i[e])}
):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):zt(Object(i)).forEach(
function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))});return t}function Dt(){}function Ft(e){
return(e="string"==typeof e?Buffer.from(e,"utf-8"):e).toString("base64")}function Vt(e,t){var i,n;if((e=(e||""
).toString()).length<=(t=t||76))return e;let a=[],o=0;for(i=1024*t;o<e.length;)n=e.substr(o,i).replace(new RegExp(
".{"+t+"}","g"),"$&\r\n").trim(),a.push(n),o+=i;return a.join("\r\n").trim()}function $t(i){var n=[[9],[10],[13],[32,60]
,[62,126]];let a="",o;for(let e=0,t=(i="string"==typeof i?Buffer.from(i,"utf-8"):i).length;e<t;e++)(function(t,i){for(
let e=i.length-1;0<=e;e--)if(i[e].length){if(1===i[e].length&&t===i[e][0])return 1;if(
2===i[e].length&&t>=i[e][0]&&t<=i[e][1])return 1}})(o=i[e],n)&&(32!==o&&9!==o||e!==t-1&&10!==i[e+1]&&13!==i[e+1]
)?a+=String.fromCharCode(o):a+="="+(o<16?"0":"")+o.toString(16).toUpperCase();return a}function Gt(e,t){var i,n;if((e=(
e||"").toString()).length<=(t=t||76))return e;let a=0;i=e.length;let o,r,s,c=(n=Math.floor(t/3),"");for(;a<i;)if(
s=e.substr(a,t),o=s.match(/\r\n/))s=s.substr(0,o.index+o[0].length),c+=s,a+=s.length;else if("\n"===s.substr(-1))c+=s,
a+=s.length;else if(o=s.substr(-n).match(/\n.*?$/))s=s.substr(0,s.length-(o[0].length-1)),c+=s,a+=s.length;else{if(
s.length>t-n&&(o=s.substr(-n).match(/[ \t.,!?][^ \t.,!?]*$/)))s=s.substr(0,s.length-(o[0].length-1));else if(s.match(
/[=][\da-f]{0,2}$/i))for((o=s.match(/[=][\da-f]{0,1}$/i))&&(s=s.substr(0,s.length-o[0].length)
);3<s.length&&s.length<i-a&&!s.match(/^(?:=[\da-f]{2}){1,4}$/i)&&(o=s.match(/[=][\da-f]{2}$/gi))&&!((r=parseInt(
o[0].substr(1,2),16))<128)&&(s=s.substr(0,s.length-3),!(192<=r)););a+s.length<i&&"\n"!==s.substr(-1)?(
s.length===t&&s.match(/[=][\da-f]{2}$/i)?s=s.substr(0,s.length-3):s.length===t&&(s=s.substr(0,s.length-1)),a+=s.length,
s+="=\r\n"):a+=s.length,c+=s}return c}function Kt(t,e,i){let n=new Set,a=new Set,o=new Map;(i||"").toLowerCase().split(
":").forEach(e=>{a.add(e.trim())}),(e||"").toLowerCase().split(":").filter(e=>!a.has(e.trim())).forEach(e=>{n.add(
e.trim())});for(let e=t.length-1;0<=e;e--){var r=t[e];n.has(r.key)&&!o.has(r.key)&&o.set(r.key,Jt(r.line))}let s=[],c=[]
return n.forEach(e=>{o.has(e)&&(c.push(e),s.push(e+":"+o.get(e)))}),{headers:s.join("\r\n")+"\r\n",fieldNames:c.join(":"
)}}function Jt(e){return e.substr(e.indexOf(":")+1).replace(/\r?\n/g,"").replace(/\s+/g," ").trim()}function Qt(e){
return e.replace(/[^a-zA-Z0-9.-]/g,"").toLowerCase()}function Wt(t){let i=["domains","aliases"],n={};return Object.keys(
t).forEach(e=>{i.indexOf(e)<0&&(n[e]=t[e])}),n}function Xt(e){return X(e)&&ee(e,["token","email","verified"])&&l(
null==e?void 0:e.token)&&l(null==e?void 0:e.email)&&G(null==e?void 0:e.verified)}function Yt(e,t){for(var i in e
)t[i]=e[i]}function Zt(e,t,i){return Nl(e,t,i)}function ei(e){
var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};ct(this,ei),this.init(e,t)}function ti(){ct(this,ti),
this.observers={}}function ii(e){var t,i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],
defaultNS:"translation"};return ct(this,ii),t=Ll.call(this),rl&&al.call(dt(t)),t.data=e||{},t.options=i,
void 0===t.options.keySeparator&&(t.options.keySeparator="."),void 0===t.options.ignoreJSONStructure&&(
t.options.ignoreJSONStructure=!0),t}function ni(e){var t,i,n,a,
o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return ct(this,ni),t=Il.call(this),rl&&al.call(dt(t)),i=[
"resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],n=e,a=dt(t),
i.forEach(function(e){n[e]&&(a[e]=n[e])}),t.options=o,void 0===t.options.keySeparator&&(t.options.keySeparator="."),
t.logger=nl.create("translator"),t}function ai(e){ct(this,ai),this.options=e,
this.supportedLngs=this.options.supportedLngs||!1,this.logger=nl.create("languageUtils")}function oi(e){var i,
t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};ct(this,oi),this.languageUtils=e,this.options=t,
this.logger=nl.create("pluralResolver"),
this.options.compatibilityJSON&&"v4"!==this.options.compatibilityJSON||"undefined"!=typeof Intl&&Intl.PluralRules||(
this.options.compatibilityJSON="v3",this.logger.error(
"Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
)),this.rules=(i={},hl.forEach(function(t){t.lngs.forEach(function(e){i[e]={numbers:t.nr,plurals:ml[t.fc]}})}),i)}
function ri(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};ct(this,ri),this.logger=nl.create(
"interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||function(e){return e},this.init(e)}
function si(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};ct(this,si),this.logger=nl.create(
"formatter"),this.options=e,this.formats={number:function(e,t,i){return new Intl.NumberFormat(t,i).format(e)},
currency:function(e,t,i){return new Intl.NumberFormat(t,qt(qt({},i),{},{style:"currency"})).format(e)},
datetime:function(e,t,i){return new Intl.DateTimeFormat(t,qt({},i)).format(e)},relativetime:function(e,t,i){
return new Intl.RelativeTimeFormat(t,qt({},i)).format(e,i.range||"day")},list:function(e,t,i){
return new Intl.ListFormat(t,qt({},i)).format(e)}},this.init(e)}function ci(e,t,i){var n,
a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};return ct(this,ci),n=ql.call(this),rl&&al.call(dt(n)),
n.backend=e,n.store=t,n.services=i,n.languageUtils=i.languageUtils,n.options=a,n.logger=nl.create("backendConnector"),
n.state={},n.queue=[],n.backend&&n.backend.init&&n.backend.init(i,a.backend,a),n}function li(){var e,t,
i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=1<arguments.length?arguments[1]:void 0;if(ct(this,li),
e=Ml.call(this),rl&&al.call(dt(e)),e.options=Ut(i),e.services={},e.logger=nl,e.modules={external:[]},t=dt(e),
Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(function(e){"function"==typeof t[e]&&(t[e]=t[e].bind(t))}),
n&&!e.isInitialized&&!i.isClone){if(!e.options.initImmediate)return e.init(i,n),mt(e,dt(e));setTimeout(function(){
e.init(i,n)},0)}return e}function pi(e,t){for(var i=-1,n=null==e?0:e.length,a=Array(n);++i<n;)a[i]=t(e[i],i,e);return a}
function di(e,t){return e===t||e!=e&&t!=t}function ui(e,t){for(var i=e.length;i--;)if(Ap(e[i][0],t))return i;return-1}
var hi,mi,fi,gi,vi,xi,yi,bi,_i,wi,ki,Ei,Si,Ti,Ri,Oi,Ai,Ci,Pi,ji,Ni,Li,Ii,qi,Mi,Hi,Ui,zi,Bi,Di,Fi,Vi,$i,Gi,Ki,Ji,Qi,Wi,Xi
,Yi,Zi,en,tn,nn,an,on,rn,sn,cn,ln,pn,dn,un,hn,mn,fn,gn,vn,xn,yn,bn,_n,wn,kn,En,t,Sn,Tn,Rn,On,An,Cn,Pn,jn,Nn,Ln,In,qn,Mn,
Hn,Un,zn,Bn,Dn,Fn,Vn,$n,Gn,Kn,Jn,Qn,Wn,Xn,Yn,Zn,ea,ta,ia,na,aa,oa,ra,sa,ca,la,pa,da,ua,ha,ma,fa,ga,va,xa,ya,ba,_a,wa,ka,
Ea,Sa,Ta,Ra,Oa,Aa,Ca,Pa,ja,Na,La,Ia,qa,Ma,Ha,Ua,za,Ba,Da,Fa,Va,$a,Ga,Ka,Ja,Qa,Wa,Xa,Ya,Za,eo,to,io,no,ao,oo,ro,so,co,lo,
po,uo,ho,mo,fo,go,vo,xo,yo,bo,_o,wo,ko,Eo,So,To,Ro,Oo,Ao,Co,Po,jo,No,Lo,Io,qo,Mo,Ho,Uo,zo,Bo,Do,Fo,Vo,$o,Go,Ko,Jo,Qo,Wo,
Xo,Yo,Zo,er,tr,ir,nr,ar,or,rr,sr,cr,lr,pr,dr,ur,hr,mr,fr,gr,vr,xr,yr,br,_r,wr,kr,Er,Sr,Tr,Rr,Or,Ar,Cr,Pr,jr,Nr,Lr,Ir,qr,
Mr,Hr,Ur,zr,Br,Dr,Fr,Vr,$r,Gr,Kr,Jr,Qr,Wr,Xr,Yr,Zr,es,ts,is,ns,as,os,rs,ss,cs,ls,ps,ds,us,hs,ms,fs,gs,vs,xs,ys,bs,_s,ws,
ks,Es,Ss,Ts,Rs,Os,As,Cs,Ps,js,Ns,Ls,Is,qs,Ms,Hs,Us,zs,Bs,Ds,Fs,Vs,$s,Gs,Ks,g,Js,Qs,Ws,Xs,Ys,Zs,ec,tc,ic,nc,ac,oc,rc,sc,
cc,lc,pc,dc,uc,hc,mc,fc,gc,vc,xc,c,a,n,yc,bc,_c,p,wc,kc,Ec,Sc,Tc,Rc,Oc,Ac,Cc,Pc,jc,Nc,Lc,Ic,qc,Mc,Hc,Uc,zc,Bc,Dc,Fc,Vc,
$c,Gc,Kc,Jc,Qc,Wc,Xc,Yc,Zc,el,tl,il,nl,al,ol,rl,sl,cl,ll,pl,dl,ul,hl,ml,fl,gl,vl,xl,yl,bl,_l,wl,kl,i,o,El,Sl,Tl,s,Rl,Ol,
d,u,Al,h,Cl,Pl,m,jl,Nl,Ll,Il,ql,Ml,v,x,y,Hl,b,Ul,_,w,zl,k,E,S,Bl,Dl,T,Fl,R,Vl,$l,Gl,Kl,Jl,Ql,Wl,Xl,Yl,Zl,ep,tp,ip,np,ap,
op,rp,sp,cp=require("fs"),lp=require("path"),pp=require("url"),dp=require("querystring"),up=require("http"),hp=require(
"crypto"),mp=require("buffer"),fp=require("stream"),gp=require("util"),vp=require("events"),xp=require("https"),
yp=require("zlib"),bp=require("dns"),_p=require("net"),wp=require("os"),kp=require("punycode"),Ep=require("tls"),
O=require("child_process"),Sp=e(cp),Tp=e(lp),Rp=e(pp),Op=M(dp),cp=e(up),lp=e(hp),dp=e(mp),mp=e(fp),fp=e(gp),gp=e(vp),
vp=e(xp),xp=e(yp),yp=e(bp),bp=e(_p),_p=e(wp),wp=e(kp),kp=e(Ep),Ep=e(O),
O="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,Ap=di,Cp=ui,Pp=Array.prototype.splice,jp=ui,Np=ui,Lp=ui;H.prototype.clear=function(){this.__data__=[],this.size=0},
H.prototype.delete=function(e){var t=this.__data__;return!((e=Cp(t,e))<0||(e==t.length-1?t.pop():Pp.call(t,e,1),
--this.size,0))},H.prototype.get=function(e){var t=this.__data__;return(e=jp(t,e))<0?void 0:t[e][1]},
H.prototype.has=function(e){return-1<Np(this.__data__,e)},H.prototype.set=function(e,t){var i=this.__data__,n=Lp(i,e);
return n<0?(++this.size,i.push([e,t])):i[n][1]=t,this},hi=El=H,Al=function(){this.__data__=new hi,this.size=0},
Fl=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},o=function(e){return this.__data__.get(e)},
zl=function(e){return this.__data__.has(e)},O="object"==typeof O&&O&&O.Object===Object&&O,
v="object"==typeof self&&self&&self.Object===Object&&self,Pl=(v=O||v||Function("return this")()).Symbol,
Tl=Object.prototype,mi=Tl.hasOwnProperty,fi=Tl.toString,gi=Pl?Pl.toStringTag:void 0,Tl=Object.prototype,vi=Tl.toString,
xi=function(e){var t,i,n=mi.call(e,gi),a=e[gi];try{t=!(e[gi]=void 0)}catch(e){}return i=fi.call(e),t&&(
n?e[gi]=a:delete e[gi]),i},yi=function(e){return vi.call(e)},bi=Pl?Pl.toStringTag:void 0,wi=Tl=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(bi&&bi in Object(e)?xi:yi)(e)},ki=_i=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ei=function(e){return!!ki(e)&&("[object Function]"==(e=wi(e
))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},_=v["__core-js_shared__"],
_=/[^.]+$/.exec(_&&_.keys&&_.keys.IE_PROTO||""),Si=_?"Symbol(src)_1."+_:"",_=Function.prototype,Ti=_.toString,Ri=Ei,
Oi=function(e){return!!Si&&Si in e},Ai=_i,Ci=_=function(e){if(null!=e){try{return Ti.call(e)}catch(e){}try{return e+""
}catch(e){}}return""},w=/[\\^$.*+?()[\]{}|]/g,Pi=/^\[object .+?Constructor\]$/,S=Function.prototype,R=Object.prototype,
S=S.toString,R=R.hasOwnProperty,ji=RegExp("^"+S.call(R).replace(w,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ni=function(e){return!(!Ai(e)||Oi(e))&&(Ri(e
)?ji:Pi).test(Ci(e))},Li=function(e,t){return null==e?void 0:e[t]},R=(S=function(e,t){return e=Li(e,t),Ni(e)?e:void 0})(
v,"Map"),w=S(Object,"create"),qi=Ii=w,u=Object.prototype,Mi=u.hasOwnProperty,Hi=w,u=Object.prototype,Ui=u.hasOwnProperty
,zi=w,u=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},w=function(e){var t,
i=this.__data__;return qi?"__lodash_hash_undefined__"===(t=i[e])?void 0:t:Mi.call(i,e)?i[e]:void 0},x=function(e){
var t=this.__data__;return Hi?void 0!==t[e]:Ui.call(t,e)},i=function(e,t){var i=this.__data__;
return this.size+=this.has(e)?0:1,i[e]=zi&&void 0===t?"__lodash_hash_undefined__":t,this},U.prototype.clear=function(){
this.__data__=Ii?Ii(null):{},this.size=0},U.prototype.delete=u,U.prototype.get=w,U.prototype.has=x,U.prototype.set=i,
Bi=U,Di=El,Fi=R,Vi=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},Ji=Ki=Gi=$i=function(e,t){
return e=e.__data__,Vi(t)?e["string"==typeof t?"string":"hash"]:e.map},u=function(e){return e=$i(this,e).delete(e),
this.size-=e?1:0,e},w=function(e){return Gi(this,e).get(e)},x=function(e){return Ki(this,e).has(e)},i=function(e,t){
var i=Ji(this,e),n=i.size;return i.set(e,t),this.size+=i.size==n?0:1,this},z.prototype.clear=function(){this.size=0,
this.__data__={hash:new Bi,map:new(Fi||Di),string:new Bi}},z.prototype.delete=u,z.prototype.get=w,z.prototype.has=x,
z.prototype.set=i,Wi=R,Xi=u=z,Yi=Qi=El,w=Fl,x=o,i=zl,El=function(e,t){var i,n=this.__data__;if(n instanceof Qi){if(
i=n.__data__,!Wi||i.length<199)return i.push([e,t]),this.size=++n.size,this;n=this.__data__=new Xi(i)}return n.set(e,t),
this.size=n.size,this},B.prototype.clear=Al,B.prototype.delete=w,B.prototype.get=x,B.prototype.has=i,B.prototype.set=El,
Fl=B,Zi=u,o=function(e){return this.__data__.has(e)},D.prototype.add=D.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},D.prototype.has=o,en=zl=D,tn=Al=function(e,t){for(var i=-1
,n=null==e?0:e.length;++i<n;)if(t(e[i],i,e))return!0;return!1},nn=w=function(e,t){return e.has(t)},x=v.Uint8Array,an=x,
on=di,rn=i=function(e,t,i,n,a,o){var r,s,c,l,p,d,u,h=1&i,m=e.length,f=t.length;if(m!=f&&!(h&&m<f))return!1;if(f=o.get(e)
,r=o.get(t),f&&r)return f==t&&r==e;for(s=-1,c=!0,l=2&i?new en:void 0,o.set(e,t),o.set(t,e);++s<m;){if(p=e[s],d=t[s],
void 0!==(u=n?h?n(d,p,s,t,e,o):n(p,d,s,e,t,o):u)){if(u)continue;c=!1;break}if(l){if(!tn(t,function(e,t){if(!nn(l,t)&&(
p===e||a(p,e,i,n,o)))return l.push(t)})){c=!1;break}}else if(p!==d&&!a(p,d,i,n,o)){c=!1;break}}return o.delete(e),
o.delete(t),c},sn=function(e){var i=-1,n=Array(e.size);return e.forEach(function(e,t){n[++i]=[t,e]}),n},cn=El=function(e
){var t=-1,i=Array(e.size);return e.forEach(function(e){i[++t]=e}),i},o=Pl?Pl.prototype:void 0,ln=o?o.valueOf:void 0,
x=function(e,t,i,n,a,o,r){var s,c;switch(i){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!o(new an(e),new an(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return on(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":s=sn;case"[object Set]":return s=s||cn,!!(
e.size==t.size||1&n)&&((c=r.get(e))?c==t:(n|=2,r.set(e,t),c=rn(s(e),s(t),n,a,o,r),r.delete(e),c));case"[object Symbol]":
if(ln)return ln.call(e)==ln.call(t)}return!1},o=function(e,t){for(var i=-1,n=t.length,a=e.length;++i<n;)e[a+i]=t[i];
return e},m=Array.isArray,dn=o,un=pn=m,m=function(e,t,i){return t=t(e),un(e)?t:dn(t,i(e))},hn=Cl=function(e,t){for(var i
,n=-1,a=null==e?0:e.length,o=0,r=[];++n<a;)t(i=e[n],n,e)&&(r[o++]=i);return r},b=Object.prototype,
mn=b.propertyIsEnumerable,b=(fn=Object.getOwnPropertySymbols)?function(t){return null==t?[]:(t=Object(t),hn(fn(t),
function(e){return mn.call(t,e)}))}:function(){return[]},k=function(e,t){for(var i=-1,n=Array(e);++i<e;)n[i]=t(i);
return n},gn=Tl,T=function(e){return vn(e)&&"[object Arguments]"==gn(e)},xn=vn=Bl=function(e){
return null!=e&&"object"==typeof e},Wc=Object.prototype,yn=Wc.hasOwnProperty,bn=Wc.propertyIsEnumerable,Wc=T(function(){
return arguments}())?T:function(e){return xn(e)&&yn.call(e,"callee")&&!bn.call(e,"callee")},s=(E=(E=(s=(s=(T={exports:{}
}).exports)&&!s.nodeType&&s)&&T&&!T.nodeType&&T)&&E.exports===s?v.Buffer:void 0)?E.isBuffer:void 0,
T.exports=s||function(){return!1},_n=/^(?:0|[1-9]\d*)$/,E=function(e,t){var i=typeof e;return!!(
t=null==t?9007199254740991:t)&&("number"==i||"symbol"!=i&&_n.test(e))&&-1<e&&e%1==0&&e<t},wn=Tl,kn=s=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},En=Bl,(t={}
)["[object Float32Array]"]=t["[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t["[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0
,
t["[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t["[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1
,Kl=function(e){return En(e)&&kn(e.length)&&!!t[wn(e)]},Dl=function(t){return function(e){return t(e)}},d=(d=(y=Ul={
exports:{}}).exports)&&!d.nodeType&&d,d=(Rl=d&&y&&!y.nodeType&&y)&&Rl.exports===d,Ol=d&&O.process,d=function(){try{
return Rl&&Rl.require&&Rl.require("util").types||Ol&&Ol.binding&&Ol.binding("util")}catch(e){}}(),y.exports=d,d=(y=(
O=Ul.exports)&&O.isTypedArray)?Dl(y):Kl,Sn=k,Tn=Wc,Rn=pn,On=T.exports,An=E,Cn=O=d,y=Object.prototype,Pn=y.hasOwnProperty
,jn=Object.prototype,Ql=Object.keys,Wl=Object,Nn=function(e){var t=e&&e.constructor;return e===(
"function"==typeof t&&t.prototype||jn)},Ln=function(e){return Ql(Wl(e))},Kl=Object.prototype,In=Kl.hasOwnProperty,qn=Ei,
Mn=s,Hn=function(e,t){var i,n=Rn(e),a=!n&&Tn(e),o=!n&&!a&&On(e),r=!n&&!a&&!o&&Cn(e),s=n||a||o||r,c=s?Sn(e.length,String
):[],l=c.length;for(i in e)!t&&!Pn.call(e,i)||s&&("length"==i||o&&("offset"==i||"parent"==i)||r&&(
"buffer"==i||"byteLength"==i||"byteOffset"==i)||An(i,l))||c.push(i);return c},Un=function(e){var t,i;if(!Nn(e)
)return Ln(e);for(i in t=[],Object(e))In.call(e,i)&&"constructor"!=i&&t.push(i);return t},zn=k=function(e){
return null!=e&&Mn(e.length)&&!qn(e)},Bn=m,Dn=b,Fn=d=function(e){return(zn(e)?Hn:Un)(e)},Vn=function(e){return Bn(e,Fn,
Dn)},y=Object.prototype,$n=y.hasOwnProperty,Kl=function(e,t,i,n,a,o){var r,s,c,l,p,d,u,h,m,f=1&i,g=Vn(e),v=g.length;if(
v!=Vn(t).length&&!f)return!1;for(r=v;r--;)if(s=g[r],!(f?s in t:$n.call(t,s)))return!1;if(h=o.get(e),m=o.get(t),h&&m
)return h==t&&m==e;for(c=!0,o.set(e,t),o.set(t,e),l=f;++r<v;){if(p=e[s=g[r]],d=t[s],!(void 0===(u=n?f?n(d,p,s,t,e,o):n(p
,d,s,e,t,o):u)?p===d||a(p,d,i,n,o):u)){c=!1;break}l=l||"constructor"==s}return c&&!l&&(h=e.constructor)!=(
m=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof h&&h instanceof h&&"function"==typeof m&&m instanceof m)&&(c=!1),o.delete(e),o.delete(t),c},m=S(v,
"DataView"),b=R,y=S(v,"Promise"),h=R=S(v,"Set"),v=S(v,"WeakMap"),Gn=Tl,Jn=(Kn=_)(_=m),Qn=Kn(b),Wn=Kn(y),Xn=Kn(h),Yn=Kn(v
),m=Gn,(_&&"[object DataView]"!=m(new _(new ArrayBuffer(1)))||b&&"[object Map]"!=m(new b)||y&&"[object Promise]"!=m(
y.resolve())||h&&"[object Set]"!=m(new h)||v&&"[object WeakMap]"!=m(new v))&&(m=function(e){var t=Gn(e);if(e=(
e="[object Object]"==t?e.constructor:void 0)?Kn(e):"")switch(e){case Jn:return"[object DataView]";case Qn:
return"[object Map]";case Wn:return"[object Promise]";case Xn:return"[object Set]";case Yn:return"[object WeakMap]"}
return t}),Zn=Fl,ea=i,ta=x,ia=Kl,na=m,aa=pn,oa=T.exports,ra=O,sa="[object Arguments]",ca="[object Array]",
la="[object Object]",_=Object.prototype,pa=_.hasOwnProperty,da=function(e,t,i,n,a,o){var r=aa(e),s=aa(t),c=r?ca:na(e),
s=s?ca:na(t),l=(c=c==sa?la:c)==la,p=(s=s==sa?la:s)==la;if((s=c==s)&&oa(e)){if(!oa(t))return!1;l=!(r=!0)}return s&&!l?(
o=o||new Zn,r||ra(e)?ea(e,t,i,n,a,o):ta(e,t,c,i,n,a,o)):1&i||(r=l&&pa.call(e,"__wrapped__"),c=p&&pa.call(t,"__wrapped__"
),!r&&!c)?s&&(o=o||new Zn,ia(e,t,i,n,a,o)):a(r?e.value():e,c?t.value():t,i,n,o=o||new Zn)},ha=Fl,ma=b=function e(t,i,n,a
,o){return t===i||(null==t||null==i||!ua(t)&&!ua(i)?t!=t&&i!=i:da(t,i,n,a,e,o))},fa=_i,ga=y=function(e){
return e==e&&!fa(e)},va=d,xa=function(e,t,i,n){var a,o,r,s,c,l,p=i.length,d=p,u=!n;if(null==e)return!d;for(e=Object(e
);p--;)if(a=i[p],u&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1;for(;++p<d;)if(r=e[o=(a=i[p])[0]],s=a[1],u&&a[2]){if(
void 0===r&&!(o in e))return!1}else if(c=new ha,!(void 0===(l=n?n(r,s,o,e,t,c):l)?ma(s,r,3,n,c):l))return!1;return!0},
ya=function(e){for(var t,i,n=va(e),a=n.length;a--;)i=e[t=n[a]],n[a]=[t,i,ga(i)];return n},ba=h=function(t,i){
return function(e){return null!=e&&e[t]===i&&(void 0!==i||t in Object(e))}},v=function(t){var i=ya(t);
return 1==i.length&&i[0][2]?ba(i[0][0],i[0][1]):function(e){return e===t||xa(e,t,i)}},_a=Tl,wa=ua=Bl,ka=pn,
Ea=i=function(e){return"symbol"==typeof e||wa(e)&&"[object Symbol]"==_a(e)},
Sa=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ta=/^\w*$/,x=function(e,t){if(ka(e))return!1;var i=typeof e;
return!("number"!=i&&"symbol"!=i&&"boolean"!=i&&null!=e&&!Ea(e))||Ta.test(e)||!Sa.test(e)||null!=t&&e in Object(t)},Ra=u
,F.Cache=Ra,Oa=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
Aa=/\\(\\)?/g,Jl=(Kl=F(function(e){var a=[];return 46===e.charCodeAt(0)&&a.push(""),e.replace(Oa,function(e,t,i,n){
a.push(i?n.replace(Aa,"$1"):t||e)}),a},function(e){return 500===Jl.size&&Jl.clear(),e})).cache,Ca=pi,Pa=pn,ja=i,
m=Pl?Pl.prototype:void 0,Na=m?m.toString:void 0,La=T=function e(t){if("string"==typeof t)return t;if(Pa(t))return Ca(t,e
)+"";if(ja(t))return Na?Na.call(t):"";var i=t+"";return"0"==i&&1/t==-1/0?"-0":i},Ma=Kl,Ha=O=function(e){
return null==e?"":La(e)},Ua=i,Va=za=_=function(e,t){return Ia(e)?e:qa(e,t)?[e]:Ma(Ha(e))},$a=Wc,Ja=s,Wa=function(e,t){
return null!=e&&t in Object(e)},Xa=Fl=function(e,t,i){for(var n,a,o=(t=Va(t,e)).length,r=!(n=-1);++n<o&&(a=Qa(t[n]),
r=null!=e&&i(e,a));)e=e[a];return r||++n!=o?r:!!(o=null==e?0:e.length)&&Ja(o)&&Ka(a,o)&&(Ga(e)||$a(e))},Ya=b,
Za=Fa=function(e,t,i){return void 0===(e=null==e?void 0:Da(e,t))?i:e},eo=function(e,t){return null!=e&&Xa(e,t,Wa)},io=y,
no=h,oo=Da=u=function(e,t){for(var i=0,n=(t=za(t,e)).length;null!=e&&i<n;)e=e[Ba(t[i++])];return i&&i==n?e:void 0},
ro=function(t){return function(e){return null==e?void 0:e[t]}},so=function(t){return function(e){return oo(e,t)}},
co=to=qa=x,lo=ao=Qa=Ba=m=function(e){if("string"==typeof e||Ua(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t},
po=v,uo=function(i,n){return to(i)&&io(n)?no(ao(i),n):function(e){var t=Za(e,i);return void 0===t&&t===n?eo(e,i):Ya(n,t,
3)}},ho=Kl=function(e){return e},mo=Ga=Ia=pn,fo=function(e){return co(e)?ro(lo(e)):so(e)},go=function(e,t,i){for(var n,
a=-1,o=Object(e),r=i(e),s=r.length;s--&&!1!==t(o[n=r[++a]],n,o););return e},vo=d,_o=pi,ko=s=function(e,n){var a=-1,o=bo(
e)?Array(e.length):[];return yo(e,function(e,t,i){o[++a]=n(e,t,i)}),o},So=function(e,t){return(Eo(e)?_o:ko)(e,wo(t))},
Ro=di,Oo=bo=xo=k,Ao=Ka=E,Co=_i,Po=Al,No=function(e,n){var a;return To(e,function(e,t,i){return!(a=n(e,t,i))}),!!a},
qo=function(e,t,i){var n=Lo(e)?Po:No;return i&&Io(e,t,i)&&(t=void 0),n(e,jo(t))},Mo=To=yo=b=function(e,t){if(null==e
)return e;if(!xo(e))return e&&go(e,t,vo);for(var i=e.length,n=-1,a=Object(e);++n<i&&!1!==t(a[n],n,a););return e},
Ho=function(e,t){for(var i=-1,n=null==e?0:e.length;++i<n;)if(!t(e[i],i,e))return!1;return!0},Uo=function(e,n){var a=!0;
return Mo(e,function(e,t,i){return a=!!n(e,t,i)}),a},zo=jo=wo=y=function(e){
return"function"==typeof e?e:null==e?ho:"object"==typeof e?mo(e)?uo(e[0],e[1]):po(e):fo(e)},Bo=Lo=Eo=pn,
Do=Io=h=function(e,t,i){if(!Co(i))return!1;var n=typeof t;return!!("number"==n?Oo(i)&&Ao(t,i.length):"string"==n&&t in i
)&&Ro(i[t],e)},Fo=function(e,t,i){var n=Bo(e)?Ho:Uo;return i&&Do(e,t,i)&&(t=void 0),n(e,zo(t))},Vo=S,x=function(){try{
var e=Vo(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),$o=Wc,Go=pn,Ko=Pl?Pl.isConcatSpreadable:void 0,
Qo=function(e){return Go(e)||$o(e)||!!(Ko&&e&&e[Ko])},Wo=Jo=o,Xo=v=function e(t,i,n,a,o){var r,s=-1,c=t.length;for(
n=n||Qo,o=o||[];++s<c;)r=t[s],0<i&&n(r)?1<i?e(r,i-1,n,a,o):Jo(o,r):a||(o[o.length]=r);return o},Yo=function(e,t){
var i=-1,n=e.length;for(t=t||Array(n);++i<n;)t[i]=e[i];return t},Zo=pn,er=function(){var e,t,i,n=arguments.length;if(!n
)return[];for(e=Array(n-1),t=arguments[0],i=n;i--;)e[i-1]=arguments[i];return Wo(Zo(t)?Yo(t):[t],Xo(e,1))},tr=y,ir=k,
nr=d,Al=function(e,t,i,n){for(var a=e.length,o=i+(n?1:-1);n?o--:++o<a;)if(t(e[o],o,e))return o;return-1},ar=/\s/,
or=function(e){for(var t=e.length;t--&&ar.test(e.charAt(t)););return t},rr=/^\s+/,sr=S=function(e){return e&&e.slice(0,
or(e)+1).replace(rr,"")},cr=_i,lr=i,pr=/^[-+]0x[0-9a-f]+$/i,dr=/^0b[01]+$/i,ur=/^0o[0-7]+$/i,hr=parseInt,mr=function(e){
var t;return"number"==typeof e?e:lr(e)?NaN:(cr(e)&&(t="function"==typeof e.valueOf?e.valueOf():e,e=cr(t)?t+"":t),
"string"!=typeof e?0===e?e:+e:(e=sr(e),(t=dr.test(e))||ur.test(e)?hr(e.slice(2),t?2:8):pr.test(e)?NaN:+e))},fr=function(
e){return e?(e=mr(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},gr=Al,vr=y,xr=Wc=function(e){
var t=(e=fr(e))%1;return e==e?t?e-t:e:0},yr=Math.max,br=function(e,t,i){var n,a,o,r=Object(e);return ir(e)||(n=tr(t),
e=nr(e),t=function(e){return n(r[e],e,r)}),-1<(o=(o=null==(a=e)?0:a.length)?((i=null==i?0:xr(i))<0&&(i=yr(o+i,0)),gr(a,
vr(t),i)):-1)?r[n?e[o]:o]:void 0},_r=function(e,t,i,n){var a=-1,o=null==e?0:e.length;for(n&&o&&(i=e[++a]);++a<o;)i=t(i,
e[a],a,e);return i},wr=b,kr=y,Er=function(e,n,a,o,t){return t(e,function(e,t,i){a=o?(o=!1,e):n(a,e,t,i)}),a},Sr=pn,
Tr=function(e,t,i){var n=Sr(e)?_r:Er,a=arguments.length<3;return n(e,kr(t),i,a,wr)},Rr=u,Or=Pl=function(e,t,i){var n,
a=-1,o=e.length;for((i=o<i?o:i)<0&&(i+=o),o=i<(t=t<0?o<-t?0:o+t:t)?0:i-t>>>0,t>>>=0,n=Array(o);++a<o;)n[a]=e[a+t];
return n},Ar=_,Cr=function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0},Pr=function(e,t){return t.length<2?e:Rr(e
,Or(t,0,-1))},jr=m,Nr=function(e,t){return t=Ar(t,e),null==(e=Pr(e,t))||delete e[jr(Cr(t))]},Lr=E,o=Array.prototype,
Ir=o.splice,qr=y,Mr=function(e,t){for(var i,n,a=e?t.length:0,o=a-1;a--;)i=t[a],a!=o&&i===n||(Lr(n=i)?Ir.call(e,i,1):Nr(e
,i));return e},Hr=function(e,t){var i,n,a,o,r=[];if(!e||!e.length)return r;for(i=-1,n=[],a=e.length,t=qr(t);++i<a;)t(
o=e[i],i,e)&&(r.push(o),n.push(i));return Mr(e,n),r},Ur=Al,zr=function(e){return e!=e},Br=function(e,t,i){for(var n=i-1,
a=e.length;++n<a;)if(e[n]===t)return n;return-1},Dr=k=function(e,t,i){return t==t?Br(e,t,i):Ur(e,zr,i)},_=function(e,t){
return!(null==e||!e.length)&&-1<Dr(e,t,0)},m=function(e,t,i){for(var n=-1,a=null==e?0:e.length;++n<a;)if(i(t,e[n])
)return!0;return!1},E=function(){},o=(Fr=R)&&1/El(new Fr([,-0]))[1]==1/0?function(e){return new Fr(e)}:E,Vr=zl,$r=_,Gr=m
,Kr=w,Jr=o,Qr=El,Wr=function(e,t,i){var n,a,o,r,s=-1,c=$r,l=e.length,p=!0,d=[],u=d;if(i)p=!1,c=Gr;else if(200<=l){if(
n=t?null:Jr(e))return Qr(n);p=!1,c=Kr,u=new Vr}else u=t?[]:d;e:for(;++s<l;)if(a=e[s],o=t?t(a):a,a=i||0!==a?a:0,p&&o==o){
for(r=u.length;r--;)if(u[r]===o)continue e;t&&u.push(o),d.push(a)}else c(u,o,i)||(u!==d&&u.push(o),d.push(a));return d},
Xr=function(e){return e&&e.length?Wr(e):[]},Yr=i,Zr=function(e,t){var i,n,a,o,r,s,c,l;if(e!==t){if(i=void 0!==e,
n=null===e,a=e==e,o=Yr(e),r=void 0!==t,s=null===t,c=t==t,l=Yr(t),!s&&!l&&!o&&t<e||o&&r&&c&&!s&&!l||n&&r&&c||!i&&c||!a
)return 1;if(!n&&!o&&!l&&e<t||l&&i&&a&&!n&&!o||s&&i&&a||!r&&a||!c)return-1}return 0},es=pi,ts=u,is=y,ns=s,as=function(e,
t){var i=e.length;for(e.sort(t);i--;)e[i]=e[i].value;return e},os=Dl,rs=function(e,t,i){for(var n,a=-1,o=e.criteria,
r=t.criteria,s=o.length,c=i.length;++a<s;)if(n=Zr(o[a],r[a]))return c<=a?n:n*("desc"==i[a]?-1:1);return e.index-t.index}
,ss=Kl,cs=pn,ls=function(e,t,i){switch(i.length){case 0:return e.call(t);case 1:return e.call(t,i[0]);case 2:
return e.call(t,i[0],i[1]);case 3:return e.call(t,i[0],i[1],i[2])}return e.apply(t,i)},ps=Math.max,ds=function(e){
return function(){return e}},Al=(us=x)?function(e,t){return us(e,"toString",{configurable:!0,enumerable:!1,value:ds(t),
writable:!0})}:Kl,hs=Date.now,Vl=Al,ms=v,fs=function(e,n,i){var a;return n=n.length?es(n,function(t){return cs(t
)?function(e){return ts(e,1===t.length?t[0]:t)}:t}):[ss],a=-1,n=es(n,os(is)),e=ns(e,function(t,e,i){return{criteria:es(n
,function(e){return e(t)}),index:++a,value:t}}),as(e,function(e,t){return rs(e,t,i)})},gs=h,function(){var e=hs(),
t=16-e+ +Gl;if(Gl=e,0<t){if(800<=++$l)return}else $l=0;Vl.apply(void 0,arguments)}((op=R=function(e,t){if(null==e
)return[];var i=t.length;return 1<i&&gs(e,t[0],t[1])?t=[]:2<i&&gs(t[0],t[1],t[2])&&(t=[t[0]]),fs(e,ms(t,1),[])},rp=void(
Gl=$l=0),sp=Kl,rp=ps(void 0===rp?op.length-1:rp,0),function(){for(var e,t=arguments,i=-1,n=ps(t.length-rp,0),a=Array(n
);++i<n;)a[i]=t[rp+i];for(i=-1,e=Array(rp+1);++i<rp;)e[i]=t[i];return e[rp]=sp(a),ls(op,this,e)}),R+""),xs=Cl,
ys=function(e,n){var a=[];return vs(e,function(e,t,i){n(e,t,i)&&a.push(e)}),a},bs=y,ws=function(e,t){return(_s(e)?xs:ys
)(e,bs(t))},ks=Kl,Es=function(e,t){for(var i=-1,n=null==e?0:e.length;++i<n&&!1!==t(e[i],i,e););return e},Ss=vs=b,
Ts=function(e){return"function"==typeof e?e:ks},Rs=_s=pn,Os=function(e,t){return(Rs(e)?Es:Ss)(e,Ts(t))},As=Pl,
E=function(e,t,i){var n=e.length;return i=void 0===i?n:i,!t&&n<=i?e:As(e,t,i)},Cs=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),zl=function(e){return Cs.test(e)}
,(_=Ul.exports)&&_.isRegExp,m=function(e){return e.split("")},
w="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",o="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",Ps=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+o+w,"g"),js=m,Ns=zl,Ls=function(e){return e.match(Ps)||[]},
qs=Is=k,Ms=T,Hs=S,Us=E,zs=function(e,t){for(var i=e.length;i--&&-1<Is(t,e[i],0););return i},Bs=function(e,t){for(
var i=-1,n=e.length;++i<n&&-1<qs(t,e[i],0););return i},Ds=function(e){return(Ns(e)?Ls:js)(e)},Fs=O,Vs=function(e,t,i){
return(e=Fs(e))&&(i||void 0===t)?Hs(e):e&&(t=Ms(t))?(i=Ds(e),e=Ds(t),t=Bs(i,e),e=zs(i,e)+1,Us(i,t,e).join("")):e},
El=Object.prototype,$s=El.hasOwnProperty,Gs=function(e,t){return null!=e&&$s.call(e,t)},Ks=Fl,g=function(e,t){
return null!=e&&Ks(e,t,Gs)},Ws=function(e){return!0===e||!1===e||Qs(e)&&"[object Boolean]"==Js(e)},Xs=function(e){
return null===e},Zs=pn,tc=function(e){return"string"==typeof e||!Zs(e)&&ec(e)&&"[object String]"==Ys(e)},ic=Ys=Js=Tl,
nc=ec=Qs=Bl,ac=function(e){return"number"==typeof e||nc(e)&&"[object Number]"==ic(e)},lc=function(e,t,i){return e=cc(e),
i=null==i?0:oc(sc(i),0,e.length),t=rc(t),e.slice(i,i+t.length)==t},pc=oc=function(e,t,i){return e==e&&(void 0!==i&&(
e=e<=i?e:i),void 0!==t&&(e=t<=e?e:t)),e},dc=rc=T,uc=sc=Wc,hc=cc=O,mc=function(e,t,i){var n;return e=hc(e),t=dc(t),
n=e.length,n=i=void 0===i?n:pc(uc(i),0,n),0<=(i-=t.length)&&e.slice(i,n)==t},fc=pi,gc=function(t,e){return fc(e,
function(e){return t[e]})},vc=d,xc=function(e){return null==e?[]:gc(e,vc(e))};class Ip{constructor(e,t){r(this,"_logger"
,void 0),r(this,"name",void 0),r(this,"_level",void 0),this.name=e,this._logger=t,this._level=void 0}getLogLevel(){var e
return null!=(e=this._level)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}debug(...e){(
void 0===this._level||this._level<=c.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=c.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=c.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=c.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class A{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case c.DEBUG:return"DEBUG";case c.INFO:return"INFO";case c.WARN:return"WARN";case c.ERROR:return"ERROR";
case c.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=c.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=c.INFO&&this._logger.info(...e)}static warn(...e){this._level<=c.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=c.ERROR&&this._logger.error(...e)}static createLogger(e){return new Ip(e,A)}}r(A,
"Level",c={DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"}),r(A,"_level",c.DEBUG),
r(A,"_logger",console);const qp=A.createLogger("ProcessUtils");class Mp{static getArguments(){return process.argv.slice(
2)}static parseEnvFileLine(e,t){if(t.indexOf("=")<0)return t.length&&(e[t]=""),e;const i=t.split("=");return t=i.shift()
,(t=Vs(t)).length&&(e[t]=i.join("=").trim()),e}static parseEnvFile(e){const t=Sp.default.readFileSync(e,{
encoding:"utf-8"}),i=t.split("\n");return i.reduce(Mp.parseEnvFileLine,{})}static initEnvFromFile(e){e=Mp.parseEnvFile(e
),process.env=f(f({},e),process.env)}static initEnvFromDefaultFiles(){var e=Tp.default.join(process.cwd(),".env");
Sp.default.existsSync(e)&&Mp.initEnvFromFile(e)}static setupDestroyHandler(i,n){let a=!1;var e=t=>e=>{Mp._printErrors(t,
e);try{if(a)return;a=!0,i()}catch(e){n(e)}};process.on("exit",e("exit")),process.on("SIGTERM",e("SIGTERM")),process.on(
"SIGINT",e("SIGINT")),process.on("SIGUSR1",e("SIGUSR1")),process.on("SIGUSR2",e("SIGUSR2")),process.on(
"uncaughtException",e("uncaughtException"))}static _printErrors(e,t){try{t?qp.error(
`Closing process because "${e}" event: `,t):"exit"===e?qp.debug(`Closing process because "${e}" event`):qp.info(
`Closing process because "${e}" event`)}catch(e){console.error("Error while printing errors: ",e)}}}ne("1.0.0"),
u=null!=(i=ne("%{BUILD_BACKEND_URL}"))?i:"http://0.0.0.0:3000",Dl=null!=(s=ne(""))?s:"nor-backend",Al=null!=(x=ne("")
)?x:"",ne("production"),ne("2022-03-21T12:11:37.642Z"),"".startsWith("%{")&&"".endsWith("}"),h=null!=(v=ne(
"%{BUILD_EMAIL_FROM}"))?v:"hg-auth-email <info@example.com>",Cl=null!=(R=ne("%{BUILD_JWT_SECRET}"))?R:"",Kl=null!=(y=ne(
"%{BUILD_JWT_ALG}"))?y:"HS256",Pl=null!=(b=ne("%{BUILD_EMAIL_CONFIG}"))?b:"smtp://localhost:25",m=null!=(w=function(e){
if(e){if(function(){switch(e){case c.DEBUG:case c.INFO:case c.WARN:case c.ERROR:case c.NONE:return 1;default:return}}()
)return e;switch(e=(""+e).toUpperCase()){case"ALL":case"DEBUG":return c.DEBUG;case"INFO":return c.INFO;case"WARN":
case"WARNING":return c.WARN;case"ERR":case"ERROR":return c.ERROR;case"FALSE":case"OFF":case"QUIET":case"SILENT":
case"NONE":return c.NONE;default:return}}}(null!=(o=te(null==(Ul=process)||null==(_=Ul.env)?void 0:_.BACKEND_LOG_LEVEL)
)?o:te(Al)))?w:c.INFO;const Hp=null!=(S=te(null==(zl=process)||null==(k=zl.env)?void 0:k.BACKEND_SCRIPT_NAME))?S:Dl,
Up=null!=(Fl=te(null==(E=process)||null==(El=E.env)?void 0:El.BACKEND_URL))?Fl:u,zp=null!=(T=te(null==(Tl=process
)||null==(Bl=Tl.env)?void 0:Bl.BACKEND_EMAIL_CONFIG))?T:Pl,Bp=null!=(d=te(null==(Wc=process)||null==(O=Wc.env
)?void 0:O.BACKEND_EMAIL_FROM))?d:h,Dp=null!=(x=te(null==(i=process)||null==(s=i.env)?void 0:s.BACKEND_JWT_SECRET))?x:Cl
,Fp=null!=(y=te(null==(v=process)||null==(R=v.env)?void 0:R.BACKEND_JWT_ALG))?y:Kl,Vp=(a={OPTIONS:0,0:"OPTIONS",GET:1,
1:"GET",POST:2,2:"POST",PUT:3,3:"PUT",DELETE:4,4:"DELETE",PATCH:5,5:"PATCH"},"WINDOW"===(zl=null!=(w=null!=(_=null==(
b=process)||null==(Ul=b.env)?void 0:Ul.NOR_REQUEST_CLIENT_MODE)?_:null==(o=process)||null==(Al=o.env
)?void 0:Al.REACT_APP_REQUEST_CLIENT_MODE)?w:"")||!("undefined"==typeof window||!window.fetch)),$p="NODE"===zl||!Vp;
class Gp{static async getRequestDataAsBuffer(n){return new Promise((e,t)=>{const i=[];n.on("data",e=>{try{i.push(e)
}catch(e){t(e)}}),n.on("end",()=>{try{e(Buffer.concat(i))}catch(e){t(e)}})})}static async getRequestDataAsString(e,
t="utf8"){const i=await Gp.getRequestDataAsBuffer(e);return i.toString(t)}static async getRequestDataAsFormUrlEncoded(e
){if(""!==(e=await Gp.getRequestDataAsString(e)))return Op.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await Gp.getRequestDataAsString(e)))return JSON.parse(e)}}(k=n={Continue:100,100:"Continue",SwitchingProtocols:101,
101:"SwitchingProtocols",Processing:102,102:"Processing",CheckPoint:103,103:"CheckPoint",OK:200,200:"OK",Created:201,
201:"Created",Accepted:202,202:"Accepted",NonAuthoritativeInformation:203,203:"NonAuthoritativeInformation",
NoContent:204,204:"NoContent",ResetContent:205,205:"ResetContent",PartialContent:206,206:"PartialContent",
MultiStatus:207,207:"MultiStatus",AlreadyReported:208,208:"AlreadyReported",IMUsed:226,226:"IMUsed",MultipleChoices:300,
300:"MultipleChoices",MovedPermanently:301,301:"MovedPermanently",Found:302,302:"Found",SeeOther:303,303:"SeeOther",
NotModified:304,304:"NotModified",TemporaryRedirect:307,307:"TemporaryRedirect",PermanentRedirect:308,
308:"PermanentRedirect",BadRequest:400,400:"BadRequest",Unauthorized:401,401:"Unauthorized",PaymentRequired:402,
402:"PaymentRequired",Forbidden:403,403:"Forbidden",NotFound:404,404:"NotFound",MethodNotAllowed:405,
405:"MethodNotAllowed",NotAcceptable:406,406:"NotAcceptable",ProxyAuthenticationRequired:407,
407:"ProxyAuthenticationRequired",RequestTimeout:408,408:"RequestTimeout",Conflict:409,409:"Conflict",Gone:410,
410:"Gone",LengthRequired:411,411:"LengthRequired",PreconditionFailed:412,412:"PreconditionFailed",PayloadTooLarge:413,
413:"PayloadTooLarge",URITooLong:414,414:"URITooLong",UnsupportedMediaType:415,415:"UnsupportedMediaType",
RequestedRangeNotSatisfiable:416,416:"RequestedRangeNotSatisfiable",ExpectationFailed:417,417:"ExpectationFailed",
IAmATeapot:418,418:"IAmATeapot",UnprocessableEntity:422,422:"UnprocessableEntity",Locked:423,423:"Locked",
FailedDependency:424,424:"FailedDependency",TooEarly:425,425:"TooEarly",UpgradeRequired:426,426:"UpgradeRequired",
PreconditionRequired:428,428:"PreconditionRequired",TooManyRequests:429,429:"TooManyRequests",
RequestHeaderFieldsTooLarge:431,431:"RequestHeaderFieldsTooLarge",UnavailableForLegalReasons:451,
451:"UnavailableForLegalReasons",InternalError:500,500:"InternalError",InternalServerError:500}
)[500]="InternalServerError",k[k.NotImplemented=501]="NotImplemented",k[k.BadGateway=502]="BadGateway",
k[k.ServiceUnavailable=503]="ServiceUnavailable",k[k.GatewayTimeout=504]="GatewayTimeout",
k[k.HttpVersionNotSupported=505]="HttpVersionNotSupported",k[k.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",
k[k.InsufficientStorage=507]="InsufficientStorage",k[k.LoopDetected=508]="LoopDetected",
k[k.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",k[k.NotExtended=510]="NotExtended",
k[k.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",yc={ERROR:"error"};class Kp extends Error{
constructor(e,t=void 0,i=void 0,n=void 0,a=void 0){super(t||ce(e)),r(this,"status",void 0),r(this,"method",void 0),r(
this,"url",void 0),r(this,"body",void 0),r(this,"__proto__",void 0),t=new.target.prototype,
Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=i,this.url=n,this.body=a}
valueOf(){return this.status}toString(){return this.status+" "+this.message}toJSON(){return{type:yc.ERROR,
status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method}getUrl(){
return this.url}getBody(){return this.body}}const Jp=$p?require("fs").promises:void 0,Qp=A.createLogger(
"NodeRequestClient");class Wp{static setLogLevel(e){Qp.setLogLevel(e)}constructor(e,t){r(this,"_http",void 0),r(this,
"_https",void 0),this._http=e,this._https=t}async jsonRequest(e,t,i,n){switch(e){case a.GET:return this._getJson(t,i,n);
case a.POST:return this._postJson(t,i,n);case a.PATCH:return this._patchJson(t,i,n);case a.PUT:return this._putJson(t,i,
n);case a.DELETE:return this._deleteJson(t,i,n);default:throw new TypeError(
"[Node]RequestClient: Unsupported method: "+e)}}async _checkSocketFile(t){try{const e=await Jp.stat(t);
return!!e.isSocket()}catch(e){if("ENOTDIR"===(t=null==e?void 0:e.code))return void Qp.debug(
"_checkSocketFile: ENOTDIR: ",e);if("ENOENT"===t)return void Qp.debug("_checkSocketFile: ENOENT: ",e);throw Qp.error(
`_checkSocketFile: Error "${t}" passed on: `,e),e}}async _findSocketFile(e){var t=await this._checkSocketFile(e);
return!0===t?e:!1!==t&&"/"!==(t=Tp.default.dirname(e))&&t!==e?this._findSocketFile(t):void 0}async _httpRequest(o,r,e){
var t;const s=e?JSON.stringify(e)+"\n":void 0,c=new Rp.default.URL(o);let l;const p=null!=(
e=null===c||void 0===c?void 0:c.protocol)?e:"";if("unix:"===p||"socket:"===p){
const i=null!==c&&void 0!==c&&c.pathname?null===c||void 0===c?void 0:c.pathname:"/";if("/"===i)throw new TypeError(
"No socket path found for unix protocol URL: "+o);if(!(e=await this._findSocketFile(i)))throw new TypeError(
"No socket path found for unix protocol URL: "+o);t=""+(e.length<i.length?i.substr(e.length):"")+(
"?"!==c.search?c.search:""),r=f(f({},r),{},{socketPath:e,path:t}),o="",l=this._http
}else l="https:"===p?this._https:this._http;return new Promise((t,i)=>{let n=!1;try{if(!l)throw new Error(
"HTTP module not defined. This error should not happen.");var a;let e;o&&(r=f(f({},r),{},{hostname:c.hostname,
port:null!=(a=null!==c&&void 0!==c&&c.port?parseInt(c.port,10):void 0)?a:"https:"===p?443:80,path:c.pathname+c.search}))
,(e=l.request(r,e=>{n?Qp.warn("Warning! Request had already ended when the response was received."):(n=!0,t(e))})).on(
"error",e=>{n?(Qp.warn("Warning! Request had already ended when the response was received."),Qp.debug(
"Error from event: ",e)):(Qp.debug("Passing on error from event: ",e),n=!0,i(e))}),s&&e.write(s),e.end()}catch(e){n?(
Qp.warn("Warning! Request had already ended when the response was received."),Qp.debug("Exception: ",e)):(Qp.debug(
"Passing on error: ",e),n=!0,i(e))}})}async _request(e,t,i,n){return i=await this._httpRequest(t,i,n),
n=await Gp.getRequestDataAsJson(i),{method:e,url:t,statusCode:null!=(e=null==i?void 0:i.statusCode)?e:0,
headers:i.headers,body:n}}async _getJson(e,t,i){const n={method:"GET",headers:{"Content-Type":"application/json"}};
return t&&(n.headers=f(f({},n.headers),t)),this._request(a.GET,e,n,i).then(Wp._successResponse)}async _putJson(e,t,i){
const n={method:"PUT",headers:{"Content-Type":"application/json"}};return t&&(n.headers=f(f({},n.headers),t)),
this._request(a.PUT,e,n,i).then(Wp._successResponse)}async _postJson(e,t,i){const n={method:"POST",headers:{
"Content-Type":"application/json"}};return t&&(n.headers=f(f({},n.headers),t)),this._request(a.POST,e,n,i).then(
Wp._successResponse)}async _patchJson(e,t,i){const n={method:"PATCH",headers:{"Content-Type":"application/json"}};
return t&&(n.headers=f(f({},n.headers),t)),this._request(a.PATCH,e,n,i).then(Wp._successResponse)}async _deleteJson(e,t,
i){const n={method:"DELETE",headers:{"Content-Type":"application/json"}};return t&&(n.headers=f(f({},n.headers),t)),
this._request(a.DELETE,e,n,i).then(Wp._successResponse)}static async _successResponse(e){
var t=null==e?void 0:e.statusCode;if(t<200||400<=t)throw Qp.error(`Unsuccessful response with status ${t}: `,e),new Kp(t
,`Error ${t} for ${ae(e.method)} `+e.url,e.method,e.url,e.body);return e.body}}class Xp{constructor(e){r(this,"_fetch",
void 0),this._fetch=e}jsonRequest(e,t,i,n){switch(e){case a.GET:return this._getJson(t,i,n);case a.POST:
return this._postJson(t,i,n);case a.PUT:return this._putJson(t,i,n);case a.DELETE:return this._deleteJson(t,i,n);
default:throw new TypeError("[Fetch]RequestClient: Unsupported method: "+e)}}_getJson(e,t,i){const n={method:"GET",
mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};return t&&(
n.headers=f(f({},n.headers),t)),i&&(n.body=JSON.stringify(i)),this._fetch(e,n).then(e=>Xp._successResponse(e,a.GET))}
_putJson(e,t,i){const n={method:"PUT",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},
credentials:"same-origin"};return t&&(n.headers=f(f({},n.headers),t)),i&&(n.body=JSON.stringify(i)),this._fetch(e,n
).then(e=>Xp._successResponse(e,a.PUT))}_postJson(e,t,i){const n={method:"POST",mode:"cors",cache:"no-cache",headers:{
"Content-Type":"application/json"},credentials:"same-origin"};return t&&(n.headers=f(f({},n.headers),t)),i&&(
n.body=JSON.stringify(i)),this._fetch(e,n).then(e=>Xp._successResponse(e,a.POST))}_deleteJson(e,t,i){const n={
method:"DELETE",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},credentials:"same-origin"};
return t&&(n.headers=f(f({},n.headers),t)),i&&(n.body=JSON.stringify(i)),this._fetch(e,n).then(e=>Xp._successResponse(e,
a.DELETE))}static _successResponse(e,t){const i=e.status;if(!e.ok||i<200||400<=i){const n=e.url,
a=`${i} ${e.statusText} for ${ae(t)} `+n;return e.json().then(e=>{throw new Kp(i,a,t,n,e)})}return e.json()}}
const Yp=$p?require("http"):void 0,Zp=$p?require("https"):void 0,ed=A.createLogger("RequestClient");class td{
static setLogLevel(e){ed.setLogLevel(e),Wp.setLogLevel(e)}static async jsonRequest(e,t,i,n){
return this._client.jsonRequest(e,t,i,n)}static async getJson(e,t){return this._client.jsonRequest(a.GET,e,t)}
static async postJson(e,t,i){return ed.debug(".postJson: ",e,t,i),this._client.jsonRequest(a.POST,e,i,t)}
static async patchJson(e,t,i){return ed.debug(".patchJson: ",e,t,i),this._client.jsonRequest(a.PATCH,e,i,t)}
static async putJson(e,t,i){return ed.debug(".putJson: ",e,t,i),this._client.jsonRequest(a.PUT,e,i,t)}
static async deleteJson(e,t,i){return ed.debug(".deleteJson: ",e,i,t),this._client.jsonRequest(a.DELETE,e,t,i)}
static _initClient(){if(Vp)return ed.debug("Detected browser environment"),new Xp(window.fetch.bind(window));if($p
)return new Wp(Yp,Zp);throw new TypeError("Could not detect request client implementation")}}r(td,"_client",
td._initClient()),bc={OK:0,0:"OK",ERROR:1,1:"ERROR",HELP:2,2:"HELP",VERSION:3,3:"VERSION"};const id=A.createLogger(
"HttpService");class nd{constructor(e=3e3,t=void 0,i=void 0){r(this,"_requestHandler",void 0),r(this,"_hostname",void 0)
,r(this,"_port",void 0),r(this,"_closeCallback",void 0),r(this,"_listenCallback",void 0),r(this,"_server",void 0),r(this
,"_handler",void 0),id.debug("new: ",t,e,i),this._requestHandler=this._onRequest.bind(this),
this._listenCallback=this._onListen.bind(this),this._closeCallback=this._onClose.bind(this),this._hostname=t,
this._port=e,this._handler=i,this._server=up.createServer(this._requestHandler)}start(){id.debug(
"Starting server at "+this._getConnectionString()),void 0===this._hostname?this._server.listen(this._port,
this._listenCallback):this._server.listen(this._port,this._hostname,this._listenCallback)}stop(){id.debug(
"Closing server at "+this._getConnectionString()),this._server.close(this._closeCallback)}setHandler(e){id.debug(
this._hostname,this._port,": Changing handler as: ",e," was ",this._handler),this._handler=e}_getConnectionString(){
return void 0===this._hostname?"http://"+this._port:`http://${this._hostname}:`+this._port}async _callRequestHandler(t,e
){if(void 0!==this._handler){try{await this._handler(t,e)}catch(e){id.error(
`"${t.method} ${t.url}": Response handler had an error: `,e)}e.writableEnded||(id.warn(
`"${t.method} ${t.url}": Warning! Request handler did not close the response.`),e.end())}else id.error(
`"${t.method} ${t.url}": No handler configured"`),e.end("Error")}_onRequest(e,t){this._callRequestHandler(e,t).catch(
e=>{id.error("Request has an error: ",e)})}_onListen(){id.info("Server started at "+this._getConnectionString())}
_onClose(){id.debug("Closed server at "+this._getConnectionString())}}class C{static isObject(e){return Z(e)}
static hasPropertyMethods(e){return g(e,"methods")}static hasPropertyControllerProperties(e){return g(e,
"controllerProperties")}static hasPropertyPaths(e){return g(e,"paths")}static hasPropertyParams(e){return g(e,"params")}
static hasPropertyMappings(e){return g(e,"mappings")}static hasPropertyController(e){return g(e,"controller")}
static hasPropertyQueryParam(e){return g(e,"queryParam")}static hasPropertyType(e){return g(e,"type")}
static hasProperty__requestMappings(e){return g(e,"__requestMappings")}static hasPropertyStatus(e){return g(e,"status")}
static hasPropertyMessage(e){return g(e,"message")}static createOrFunction(...e){return t=>J(e,e=>Ei(e)?e(t):t===e)}
static everyPropertyIs(t,e){return Q(So(ie(t),e=>t[e]),e)}static explainEveryPropertyIs(t,i,n){return ws(So(So(ie(t),
e=>t[e]),(e,t)=>i(e)?"":`#${t}: `+n(e)),e=>!!e)}}_c={JSON:0,0:"JSON",STRING:1,1:"STRING",INTEGER:2,2:"INTEGER",NUMBER:3,
3:"NUMBER"},(S=p=p||{})[S.REQUEST_BODY=0]="REQUEST_BODY",S[S.QUERY_PARAM=1]="QUERY_PARAM",
S[S.REQUEST_HEADER=2]="REQUEST_HEADER",S[S.REQUEST_HEADER_MAP=3]="REQUEST_HEADER_MAP",
S[S.PATH_VARIABLE=4]="PATH_VARIABLE",S[S.PATH_VARIABLE_MAP=5]="PATH_VARIABLE_MAP",
S[S.MODEL_ATTRIBUTE=6]="MODEL_ATTRIBUTE";const ad=A.createLogger("RequestController"),od="__requestMappings",
rd=A.createLogger("Headers");class sd{static setLogLevel(e){rd.setLogLevel(e)}constructor(e){r(this,"_value",void 0),r(
this,"_uninitializedValue",void 0),this._value=void 0,this._uninitializedValue=e}_initializeValue(){var t=this._value,
i=this._uninitializedValue;try{i&&(this._uninitializedValue=void 0,this.addAll(i))}catch(e){throw this._value=t,
this._uninitializedValue=i,e}}clear(){this._value={},this._uninitializedValue=void 0}add(e,t){
this._uninitializedValue&&this._initializeValue(),rd.debug("add header: ",e,t),e=e.toLowerCase();var i=this._value&&g(
this._value,e)?this._value[e]:void 0;void 0===this._value?this._value={[e]:t}:void 0!==i?ke(i)?this._value=f(f({},
this._value),{},{[e]:er([],i,[t])}):this._value=f(f({},this._value),{},{[e]:[i,t]}):this._value=f(f({},this._value),{},{
[e]:t})}containsKey(e){return this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase(),g(this._value,e)}
isEmpty(){this._uninitializedValue&&this._initializeValue();var e=this._value;return!e||0===ie(e).length}keySet(){
this._uninitializedValue&&this._initializeValue();const t=new Set;var e;return void 0!==this._value&&(e=ie(this._value),
Os(e,e=>{t.add(e)})),t}getValue(e){if(this._uninitializedValue&&this._initializeValue(),this._value
)return e=e.toLowerCase(),g(this._value,e)?this._value[e]:void 0}getFirst(e){
return this._uninitializedValue&&this._initializeValue(),ke(e=this.getValue(e))?e.length?e[0]:void 0:e}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(e,t){if(
this._uninitializedValue&&this._initializeValue(),l(e)){const i=e;if(!$(t))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");Os(t,e=>{this.add(i,e)})}else{const n=e;Os(ie(
n),t=>{var e=n[t];ke(e)?Os(e,e=>{this.add(t,e)}):void 0!==e&&this.add(t,e)})}}remove(e){
this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase();var t=this.getValue(e);const i=f({},this._value);
return i&&g(i,e)&&delete i[e],this._value=i,t}set(e,t){this._uninitializedValue&&this._initializeValue(),
e=e.toLowerCase(),void 0===this._value?this._value={[e]:t}:this._value=f(f({},this._value),{},{[e]:t})}setAll(t){
this._uninitializedValue&&this._initializeValue(),Os(ie(t),e=>{this.set(e,t[e])})}valueOf(){var e;
return this._uninitializedValue&&this._initializeValue(),null!=(e=this._value)?e:void 0}toString(){
this._uninitializedValue&&this._initializeValue();const i=this._value;if(!i||this.isEmpty())return"Headers()";var e=ie(i
);const t=So(e,e=>{const t=i[e];return t?$(t)?e+": "+t.map(e=>0<=t.indexOf(";")||0<=t.indexOf(",")?`"${t}"`:t).join(", "
):0<=t.indexOf(";")?`${e}: "${t}"`:e+": "+t:""+e});return`Headers(${t.join("; ")})`}clone(){
return this._uninitializedValue&&this._initializeValue(),new sd(this._value?f({},this._value):void 0)}}class cd{
static toString(...e){return So(e,e=>Xs(e)?"null":""+e).join("")}static processVariables(n,a,o,r,s=void 0){return ke(n
)?So(n,e=>cd.processVariables(e,a,o,r,s)):we(n)?Tr(ie(n),(e,t)=>{var i=n[t];return e[""+cd.processVariables(t,a,o,r,s
)]=cd.processVariables(i,a,o,r,s),e},{}):l(n)?cd.processVariablesInString(n,a,o,r,s):n}static isValidKeyword(e){return!(
e.length<=0)&&(!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(e[0])||Q(e,
e=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(e)))}static processVariablesInString(t,i,
n,a,o=void 0){var e,r,s,c,l;if(0===t.length)return"";let p;if(p=Ei(i)?i:e=>Fa(i,e,o),lc(t,n)&&mc(t,a)){let e=t.substr(
n.length,t.length-n.length-a.length);if(e.indexOf(n)<0&&(e=Vs(e),cd.isValidKeyword(e)))return p(e)}let d="",u=0;for(
;0<=u&&u<t.length;)if(e=u,(u=t.indexOf(n,e))<0)d+=t.substr(e),u=t.length;else{if(s=(r=u)+n.length,(l=t.indexOf(a,s))<0
)throw new TypeError(`Parse error near "${t.substr(r).substr(0,20)}". End of variable not detected.`);c=l+a.length,l=Vs(
t.substr(s,l-s)),u=(cd.isValidKeyword(l)?(s=p(l),d+=""+t.substr(e,r-e)+s):d+=""+t.substr(e,c-e),c)}return d}
static formatNumber(e,t=" ",i="."){return e.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,t).replace(/\./,i)}}class P{
constructor(e,t,i){r(this,"_status",void 0),r(this,"_headers",void 0),r(this,"_body",void 0);let n,a,o;if(!Se(e)||Se(t
)||Se(i))if(Se(t)&&!Se(i)){if(void 0!==i)throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");
Ee(e)?a=e:o=e,n=t}else{if(!Se(i))throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");if(!Ee(t)
)throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");o=e,a=t,n=i}else{if(n=e,void 0!==t
)throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");if(void 0!==i)throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status")}this._status=n,this._headers=null!=(e=a)?e:new sd,this._body=o}
getStatusCode(){return this._status}getStatusCodeValue(){return this._status}status(e){return this._status=e,this}
headers(e){return Ee(e)?this._headers=e:this._headers=new sd(e),this}body(e){return this._body=e,this}getHeaders(){
return this._headers}allow(...e){e=So(e,re);const t=So(e,e=>ae(e).toUpperCase());return this._headers.set("Allow",
t.join(", ")),this}hasBody(){return void 0!==this._body}getBody(){if(void 0===this._body)throw new TypeError("No body");
return this._body}toString(){var e,t,i=ce(this._status);const n=this._headers;return e=n.isEmpty()?"":cd.toString(n),
void 0===(t=this._body)?e?`ResponseEntity(${i}, ${e})`:`ResponseEntity(${i})`:(t=_e(t)?JSON.stringify(t,null,2
):cd.toString(t),e?`ResponseEntity(${i}, ${e}, Body(${t}))`:`ResponseEntity(${i}, Body(${t}))`)}static accepted(){
return new P(n.Accepted)}static badRequest(){return new P(n.BadRequest)}static created(e){return new P(new sd({
Location:e}),n.Created)}static noContent(){return new P(n.NoContent)}static notFound(){return new P(n.NotFound)}
static notImplemented(){return new P(n.NotImplemented)}static internalServerError(){return new P(n.InternalServerError)}
static methodNotAllowed(){return new P(n.MethodNotAllowed)}static unprocessableEntity(){return new P(
n.UnprocessableEntity)}static ok(e){return e?new P(e,n.OK):new P(n.OK)}}class ld{constructor(i){r(this,"_routes",void 0)
var e=ie(i),e=So(e,e=>{var t=i[e];return ld.createCallbackFunction(e,t)});this._routes=e}hasRoute(t){return J(
this._routes,e=>{var[e]=e(t);return void 0!==e&&1<=(null==e?void 0:e.length)})}getRoute(i){let n=void 0,a=void 0;
return br(this._routes,e=>{var[e,t]=e(i);return void 0!==e&&(n=e,a=t,!0)}),void 0!==n?[n,a]:[void 0,void 0]}
static createCallbackFunction(e,t){const a=(e=""===e?"/":e).split("/"),o=a.length;if(0===o)throw new Error(
"Path format had no items. This should not happen.");const r=So(a,(e,t
)=>3<=e.length&&"{"===e[0]&&"}"===e[e.length-1]?Vs(e.substr(1,e.length-2)):(a[t]=e.toLowerCase(),null));if(J(r,l)
)return e=>{const i=e.split("/");if(0===(e=i.length))return[void 0,void 0];if(o!==e)return[void 0,void 0];let n={};
return Q(r,(e,t)=>l(e)?(n[e]=i[t],!0):a[t]===i[t].toLowerCase())?[t,n]:[void 0,void 0]};{const i=e.toLowerCase();
return e=>e.toLowerCase()!==i?[void 0,void 0]:[t,void 0]}}}class pd{constructor(i){r(this,"_routes",void 0);var e=ie(i),
e=So(e,e=>{var t=i[e];return[e.toLowerCase(),t]});this._routes=new Map(e)}hasRoute(e){return this._routes.has(
e.toLowerCase())}getRoute(e){return void 0!==(e=this._routes.get(e.toLowerCase()))?[e,void 0]:[void 0,void 0]}}class dd{
static createRoutes(e){return new(dd.routesHasParameter(e)?ld:pd)(e)}static pathHasParameter(e){return e.split("/"
).some(e=>3<=e.length&&"{"===e[0]&&"}"===e[e.length-1])}static routesHasParameter(e){return J(ie(e),dd.pathHasParameter)
}}const j=A.createLogger("RequestRouter");class ud{static setLogLevel(e){j.setLogLevel(e)}constructor(){r(this,
"_controllers",void 0),r(this,"_routes",void 0),r(this,"_modelAttributeNames",void 0),r(this,"_requestMappings",void 0),
r(this,"_initialized",void 0),this._controllers=[],this._routes=void 0,this._requestMappings=void 0,
this._modelAttributeNames=void 0,this._initialized=!1}attachController(e){this._controllers.push(e),this._routes=void 0}
_initializeRequestMappings(){j.debug("Initializing request mappings."),this._requestMappings||(
this._requestMappings=this._getRequestMappings())}_initializeRouter(){this._initialized||(this._initialized=!0,j.debug(
"Initializing..."),this._initializeRequestMappings(),this._initializeRoutes(),
this._initializeRequiredModelAttributeNames())}_initializeRoutes(){var e;j.debug("Initializing routes."),null!=(
e=this._requestMappings)&&e.length?this._routes=dd.createRoutes(ud._parseMappingObject(this._requestMappings)
):this._routes=dd.createRoutes({})}_initializeRequiredModelAttributeNames(){var e;j.debug(
"Initializing model attributes.");let n=[];null!=(e=this._requestMappings)&&e.length&&(n=Tr(this._requestMappings,(e,o
)=>{var t=o.controller,i=Tr(ie(o.controllerProperties),(e,i)=>{j.debug(
"_initializeRequiredModelAttributeNames: propertyKey: ",i);var t=o.controllerProperties[i],n=t.modelAttributes;j.debug(
"_initializeRequiredModelAttributeNames: propertyAttributeNames: ",n);const a=t.params;return Os(n,t=>{j.debug(
"_initializeRequiredModelAttributeNames: attributeName: ",t),void 0===br(e,e=>e[0]===t)&&e.push([t,i,a])}),e},[]);
return j.debug("controllerUniqueAttributeNames: ",i),n.push([t,i]),e},n)),this._modelAttributeNames=new Map(n)}
async handleRequest(t,i=void 0,e=void 0,c){try{var n=re(t),{pathName:a,queryParams:o}=ud._parseRequestPath(i),r=a;
const l=o;if(void 0===l)return j.error("handleRequest: requestQueryParams was not initialized"),P.internalServerError(
).body({error:"Internal Server Error"});if(void 0===r)return j.error(
"handleRequest: requestPathName was not initialized"),P.internalServerError().body({error:"Internal Server Error"});
this._initialized||this._initializeRouter();const{routes:p,bodyRequired:d,pathVariables:u
}=this._getRequestRoutesContext(n,r);if(!e&&d)return j.error(
"handleRequest: parseRequestBody was not provided and body is required"),P.internalServerError().body({
error:"Internal Server Error"});if(void 0===p)return P.methodNotAllowed().body({error:"Method Not Allowed"});if(
0===p.length)return P.notFound().body({error:"Not Found"});let s=void 0;const h=e&&d?await e(c):void 0,m=new Map;
return await Tr(p,async(e,t)=>{var i;const a=t.controller;if(i=t.propertyName,t=t.propertyParams,await e,
this._modelAttributeNames&&this._modelAttributeNames.has(a)){j.debug(`Populating attributes for property "${i}"`);
const o=ud._getOrCreateRequestModelAttributesForController(m,a),r=So(ws(t,e=>me(e)),e=>e.attributeName);j.debug(
"route attributeNames: ",r),e=this._modelAttributeNames.get(a),j.debug("all attributeNamePairs: ",e),e=ws(null!=e?e:[],
e=>r.includes(e[0])),j.debug("attributeNamePairs: ",e),await Tr(e,async(e,t)=>{var[t,i,n]=t,e=(await e,j.debug(
"attributeName: ",t),j.debug("propertyName: ",i),j.debug("propertyParams: ",n),ud._bindRequestActionParams(l,h,n,c,u,o))
,n=await a[i](...e);o.set(t,n)},Promise.resolve())}if(t=ud._bindRequestActionParams(l,h,t,c,u,null!=(e=m.get(a)
)?e:new Map),!g(a,i))return j.warn(`Warning! No property by name "${i}" found in the controller`),void(s=P.notFound(
).body({error:"404 - Not Found",code:404}));j.debug(`Calling route property by name "${i}"`);const n=await a[i](...t);
s=se(n)?new P(n):pe(n)?new P(n.toJSON(),n.getStatusCode()):(e=n)&&e instanceof P?(void 0!==s&&j.warn(
"Warning! ResponseEntity from previous call ignored."),n):ke(n)?void 0===s?P.ok(n):new P(er(s.getBody(),n),s.getHeaders(
),s.getStatusCode()):we(n)?void 0===s?P.ok(n):new P(f(f({},s.getBody()),n),s.getHeaders(),s.getStatusCode()):(_e(n),
void 0===s?P.ok(n):(j.warn("Warning! ResponseEntity from previous call ignored."),new P(n,s.getHeaders(),
s.getStatusCode())))},Promise.resolve()),j.debug("handleRequest: result finished: "+s),void 0===s?P.noContent():s}catch(
e){return pe(e)?(404===(i=null!=(t=null==e?void 0:e.status)?t:0)?P.notFound():(400<=i&&i<500?P.badRequest(
):P.internalServerError()).status(i)).body(e.toJSON()):(j.error("Exception: ",e),P.internalServerError().body({
error:"Internal Server Error",code:500}))}}static _parseRequestPath(e){return{pathName:(e=new pp.URL(
"http://localhost"+(null!=e?e:""))).pathname,queryParams:e.searchParams}}_getRequestRoutesContext(t,e){if(
!this._routes||!this._routes.hasRoute(e))return{routes:[],bodyRequired:!1};var[e,i]=this._routes.getRoute(e);return(
e=ws(e,e=>0<=e.methods.indexOf(t))).length?{routes:e,pathVariables:i,bodyRequired:J(e,e=>!0===(
null==e?void 0:e.requestBodyRequired))}:{routes:void 0,bodyRequired:!1}}_getRequestMappings(){
return 0===this._controllers.length?[]:ws(So(this._controllers,e=>{return t=e.constructor,
C.hasProperty__requestMappings(t)?ye(e.constructor,e):ye(e,e);var t}),e=>!!e)}static _parseMappingObject(e){function l(e
,t){g(i,e)?i[e].push(t):i[e]=[t]}const i={};return Os(e,e=>{const c=e.controller,t=e.controllerProperties,i=ie(t);
0<e.mappings.length?Os(e.mappings,e=>{const s=e.methods;Os(e.paths,r=>{Os(i,n=>{const a=t[n],o=a.params;Os(a.mappings,
e=>{var t=e.methods;if(ud._matchMethods(s,t)){const i=ud._parseCommonMethods(s,t);t=e.paths,Os(t,e=>{l(
ud._joinRoutePaths(r,e),{requestBodyRequired:null!=(e=null===a||void 0===a?void 0:a.requestBodyRequired)&&e,methods:i,
controller:c,propertyName:n,propertyParams:o})})}})})})}):Os(i,i=>{const n=t[i],a=n.params;Os(n.mappings,e=>{
const t=e.methods;e=e.paths,Os(e,e=>{l(e,{requestBodyRequired:null!=(e=null===n||void 0===n?void 0:n.requestBodyRequired
)&&e,methods:t,controller:c,propertyName:i,propertyParams:a})})})})}),i}static _matchMethods(e,i){
return 0===e.length||0==i.length||J(e,t=>J(i,e=>t===e))}static _parseCommonMethods(e,t){return 0!==e.length?ws(t,t=>J(e,
e=>e===t)):t}static _joinRoutePaths(e,t){return e=Vs(e),0===(t=Vs(Vs(t),"/")
).length?e:0===e.length?t:"/"===e[e.length-1]||"/"===t[0]?e+t:e+"/"+t}static _bindRequestActionParams(a,o,e,r,s,c){
return So(e,e=>{var t,i,n;if(null!==e){switch(null==e?void 0:e.objectType){case p.REQUEST_BODY:return o;
case p.QUERY_PARAM:return t=(n=e).queryParam,a.has(t)?(t=a.get(t),Xs(t)?void 0:ud._castParam(t,n.valueType)):void 0;
case p.REQUEST_HEADER:if(n=(t=e).headerName,r.containsKey(n))return void 0===(i=r.getFirst(n))?void 0:ud._castParam(i,
t.valueType);if(t.isRequired)throw new Kp(400,"Bad Request: Header missing: "+n);return null!=(
i=null==t?void 0:t.defaultValue)?i:void 0;case p.REQUEST_HEADER_MAP:return n=null==e?void 0:e.defaultValues,r.isEmpty(
)?n?new sd(n):new sd:n?new sd(f(f({},n),r.valueOf())):r.clone();case p.PATH_VARIABLE:if(i=(t=e).variableName,void 0!==(
n=s&&g(s,i)?s[i]:void 0)&&""!==n)return t.decodeValue?decodeURIComponent(n):n;if(t.isRequired)throw new Kp(404,
"Not Found");return null!=(i=t.defaultValue)?i:void 0;case p.MODEL_ATTRIBUTE:return n=e.attributeName,c.has(n)?c.get(n
):void 0}throw new TypeError("Unsupported item type: "+e)}})}static _castParam(e,t){switch(t){case _c.JSON:
return JSON.parse(e);case _c.STRING:return e;case _c.INTEGER:return parseInt(e,10);case _c.NUMBER:return parseFloat(e)}
throw new TypeError("Unsupported type: "+t)}static _getOrCreateRequestModelAttributesForController(e,t){let i=e.get(t);
return null==i&&(i=new Map,e.set(t,i)),i}}class hd{getName(){return this._name}constructor(e){r(this,"_name",void 0),r(
this,"_callbacks",void 0),this._name=e,this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}
hasCallbacks(e){return g(this._callbacks,e)}triggerEvent(t,...i){var e;this.hasCallbacks(t)?(e=this._callbacks[t],Os(e,
e=>{try{e(t,...i)}catch(e){console.error(
`Observer "${this._name}" and the event handler for "${t}" returned an exception: `,e)}})):console.warn(
`Warning! The observer for "${this._name}" did not have anything listening "${t}"`)}listenEvent(e,t){
return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e,t)}
removeListener(e,i){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=ws(this._callbacks[e],e=>!(!t&&e===i&&(t=!0))),
0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e}"`)}}
const md=A.createLogger("RequestServer");wc={CONTROLLER_ATTACHED:"RequestServer:controllerAttached",
STARTED:"RequestServer:started",STOPPED:"RequestServer:stopped"};class fd{static setLogLevel(e){md.setLogLevel(e)}on(e,t
){return this._observer.listenEvent(e,t)}constructor(e="http://localhost:3000"){r(this,"_server",void 0),r(this,
"_router",void 0),r(this,"_handleRequestCallback",void 0),r(this,"_observer",void 0),this._observer=new hd(
"RequestServer"),this._server=fd.createServerService(e),this._router=new ud,
this._handleRequestCallback=this._handleRequest.bind(this),this._server.setHandler(this._handleRequestCallback)}destroy(
){this._observer.destroy()}attachController(e){if(!xe(e))throw new TypeError(
"The provided controller was not supported type");this._router.attachController(e),this._observer.triggerEvent(
wc.CONTROLLER_ATTACHED)}start(){md.debug("Starting server"),this._server.start(),this._observer.triggerEvent(wc.STARTED)
}stop(){md.debug("Stopping server"),this._server.stop(),this._observer.triggerEvent(wc.STOPPED)}async _handleRequest(t,i
){try{var e=await this._router.handleRequest(re(t.method),t.url,e=>fd._requestBodyParser(t,e),this._parseRequestHeaders(
t.headers));md.debug(`"${t.method} ${t.url}": Processing responseEntity`),this._handleResponse(e,i)}catch(e){md.debug(
"Error at _handleRequest, passing it on: ",e),this._handleErrorResponse(e,i)}}static async _requestBodyParser(e,t){
return"application/x-www-form-urlencoded"!==(null!=(t=null==(t=t.getFirst("content-type"))?void 0:t.toLowerCase()
)?t:"application/json")?Gp.getRequestDataAsJson(e):Gp.getRequestDataAsFormUrlEncoded(e)}_handleResponse(e,i){
var t=e.getStatusCode();i.statusCode=t,i.statusMessage=ce(t);const n=e.getHeaders();n.isEmpty()||n.keySet().forEach(e=>{
var t=null!=(t=n.getValue(e))?t:"";md.debug(`_handleResponse: Setting response header as "${e}": "${t}"`),$(t
)?i.setHeader(e,[...t]):i.setHeader(e,t)}),e.hasBody()?l(e=e.getBody())?(md.debug("_handleResponse: Ending as text ",t,e
),i.end(e)):(md.debug("_handleResponse: Ending as json ",t,e),i.end(JSON.stringify(e,null,2))):(md.debug(
"_handleResponse: Ending without body ",t),i.end())}_handleErrorResponse(e,t){var i=se(e)?new P(e):pe(e)?new P(e,
e.getStatusCode()):(md.error("Exception: ",e),"production"===(null==(i=process)||null==(i=i.env)?void 0:i.NODE_ENV
)?P.internalServerError():new P(le(n.InternalServerError,"Internal Server Error: "+e),n.InternalServerError));
this._handleResponse(i,t)}_parseRequestHeaders(e){return new sd(e)}static createServerService(e){var t;if("http:"===(
e=new Rp.default.URL(e)).protocol)return t=e.port?parseInt(e.port,10):80,new nd(t,e.hostname);throw new TypeError(
`RequestServer: Protocol "${e.protocol}" not yet supported`)}}r(fd,"Event",wc);const gd=A.createLogger(
"RequestControllerUtils");class N{static setLogLevel(e){gd.setLogLevel(e)}static parseRequestMappings(e){return{
methods:ws(e,oe),paths:ws(e,l)}}static attachControllerMapping(e,t){var t=N.parseRequestMappings(t),i=ye(e,e);be(e,
void 0===i?{mappings:[t],controllerProperties:{}}:f(f({},i),{},{mappings:er([],i.mappings,[t])}))}
static attachControllerMethodMapping(e,t,i){var n=ye(e,e),t=N.parseRequestMappings(t);void 0===n?be(e,{mappings:[],
controllerProperties:{[i]:{mappings:[t],params:[],modelAttributes:[]}}}):g(n.controllerProperties,i)?be(e,f(f({},n),{},{
controllerProperties:f(f({},n.controllerProperties),{},{[i]:f(f({},n.controllerProperties[i]),{},{mappings:er([t],
n.controllerProperties[i].mappings)})})})):be(e,f(f({},n),{},{controllerProperties:f(f({},n.controllerProperties),{},{[i
]:{mappings:[t],params:[],modelAttributes:[]}})}))}static _setControllerMethodParam(e,t,i,n,a=!1){var o,r=ye(e,e);
void 0===r?(o=N._initializeParams(i,n),be(e,a?{mappings:[],controllerProperties:{[t]:{requestBodyRequired:!0,mappings:[
],modelAttributes:[],params:o}}}:{mappings:[],controllerProperties:{[t]:{mappings:[],modelAttributes:[],params:o}}})):g(
r.controllerProperties,t)?(o=N._reinitializeParams(r,t,i,n),be(e,f(f({},r),{},a?{controllerProperties:f(f({},
r.controllerProperties),{},{[t]:f(f({},r.controllerProperties[t]),{},{requestBodyRequired:!0,params:o})})}:{
controllerProperties:f(f({},r.controllerProperties),{},{[t]:f(f({},r.controllerProperties[t]),{},{params:o})})}))):(
o=N._initializeParams(i,n),be(e,f(f({},r),{},a?{controllerProperties:f(f({},r.controllerProperties),{},{[t]:{
requestBodyRequired:!0,modelAttributes:[],mappings:[],params:o}})}:{controllerProperties:f(f({},r.controllerProperties),
{},{[t]:{mappings:[],modelAttributes:[],params:o}})})))}static findController(e){return Ei(e)&&xe(e)?e:Z(e)&&Ei(
null==e?void 0:e.constructor)&&xe(e.constructor)?e.constructor:void 0}static setControllerMethodModelAttributeParam(e,t,
i,n,a){gd.debug("setControllerMethodModelAttributeParam: attributeName =",n,a),n={objectType:p.MODEL_ATTRIBUTE,
attributeName:n,valueType:a},N._setControllerMethodParam(e,t,i,n)}static attachControllerMethodModelAttributeBuilder(e,t
,i,n){gd.debug("attachControllerMethodModelAttributeBuilder: attributeName =",n,t);var a=ye(e,e);void 0===a?be(e,{
mappings:[],controllerProperties:{[t]:{mappings:[],params:[],modelAttributes:[n]}}}):g(a.controllerProperties,t)?be(e,f(
f({},a),{},{controllerProperties:f(f({},a.controllerProperties),{},{[t]:f(f({},a.controllerProperties[t]),{},{
modelAttributes:er([n],a.controllerProperties[t].modelAttributes)})})})):be(e,f(f({},a),{},{controllerProperties:f(f({},
a.controllerProperties),{},{[t]:{mappings:[],params:[],modelAttributes:[n]}})}))}static setControllerMethodQueryParam(e,
t,i,n,a){n={objectType:p.QUERY_PARAM,queryParam:n,valueType:a},N._setControllerMethodParam(e,t,i,n)}
static setControllerMethodHeader(e,t,i,n,a,o,r){n={objectType:p.REQUEST_HEADER,headerName:n,valueType:a,
isRequired:null!=o&&o,defaultValue:r},N._setControllerMethodParam(e,t,i,n)}static setControllerMethodPathVariable(e,t,i,
n,a,o,r,s){n={objectType:p.PATH_VARIABLE,variableName:n,valueType:a,isRequired:null==o||o,decodeValue:null==r||r,
defaultValue:s},N._setControllerMethodParam(e,t,i,n)}static setControllerMethodPathVariableMap(e,t,i,n){n={
objectType:p.PATH_VARIABLE_MAP,defaultValues:n},N._setControllerMethodParam(e,t,i,n)}
static setControllerMethodHeaderMap(e,t,i,n){n={objectType:p.REQUEST_HEADER_MAP,defaultValues:n},
N._setControllerMethodParam(e,t,i,n)}static setControllerMethodBodyParam(e,t,i,n){n={objectType:p.REQUEST_BODY,
valueType:n},N._setControllerMethodParam(e,t,i,n,!0)}static _initializeParams(e,t){let i=[];for(;e>=i.length;)i.push(
null);return i[e]=t,i}static _reinitializeParams(e,t,i,n){let a=er([],e.controllerProperties[t].params);for(
;i>=a.length;)a.push(null);return a[i]=n,a}}const vd=A.createLogger("Request");class L{static setLogLevel(e){
vd.setLogLevel(e),sd.setLogLevel(e),N.setLogLevel(e)}static mapping(...a){return(e,t,i)=>{var n=N.findController(e);
void 0!==n?void 0===t?N.attachControllerMapping(n,a):N.attachControllerMethodMapping(n,a,t):vd.debug(
".mapping for other: config=",a,"target=",e,"propertyKey=",t,"descriptor=",i)}}static Mapping(...e){return L.mapping(
...e)}static param(e,t,i){if(l(e)&&void 0===i&&(void 0===t||ue(t))){const o=e,r=null!=t?t:_c.STRING;return(e,t,i)=>{
L._param(e,t,i,o,r)}}var n=_c.STRING,a=""+i;L._param(e,t,i,a,n)}static _param(e,t,i,n,a){var o=L._getRequestController(e
,t,i);void 0!==o?N.setControllerMethodQueryParam(o,t,i,n,a):vd.warn(".Param: Unrecognized configuration: ","; target=",e
,"; propertyKey=",t,"; paramIndex=",i)}static _getRequestController(e,t,i){if(l(t)&&K(i))return N.findController(e)}
static Param(e,t,i){return L.param(e,t,i)}static header(e,t,i){var n,r;if(vd.debug("Request.Header: ",e,t,i),!l(t)||!K(i
)){if(l(e)){const s=e;if(void 0!==t&&(!(r=t)||void 0!==(null==r?void 0:r.required)&&!Ws(null==r?void 0:r.required
)||void 0!==(null==r?void 0:r.defaultValue)&&!l(null==r?void 0:r.defaultValue)))throw new TypeError(
"RequestHeader: Argument 2 is not type of RequestHeaderOptions: "+t);let a=void 0,o=void 0;if(void 0!==(r=t))if(Ws(r)
)a=r;else{if(!Z(r))throw new TypeError("RequestHeader: Invalid type of options");a=null!=(n=null==r?void 0:r.required
)?n:void 0,o=null!=(n=null==r?void 0:r.defaultValue)?n:void 0}return vd.debug(".Header: init: ",s),(e,t,i)=>{if(l(t)&&K(
i)){var n=N.findController(e);if(void 0!==n)return void N.setControllerMethodHeader(n,t,i,s,_c.STRING,a,o)}vd.warn(
".Header: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",i)}}if(void 0!==(r=e)&&(
!r||void 0!==(null==r?void 0:r.defaultValues)&&!he(null==r?void 0:r.defaultValues)))throw new TypeError(
"RequestHeader: Invalid type of options");const a=null==r?void 0:r.defaultValues;return(e,t,i)=>{l(t)&&K(i
)?L._setMethodHeaderMap(e,t,i,a):vd.warn(".Header: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,
"; paramIndex=",i)}}L._setMethodHeaderMap(e,t,i,void 0)}static _setMethodHeaderMap(e,t,i,n){var a=N.findController(e);
void 0!==a?N.setControllerMethodHeaderMap(a,t,i,n):vd.warn(".Header: Unrecognized configuration: ","; target=",e,
"; propertyKey=",t,"; paramIndex=",i)}static Header(e,t,i){return L.header(e,t,i)}static pathVariable(e,t,i){var n,s;if(
vd.debug("Request.PathVariable: ",e,t,i),l(t)&&K(i))return n=e,s=t,void L._setPathVariableMap(n,s,i,void 0);const c=e;
if(l(c)){if(void 0!==t&&!((n=t)&&G(null==n?void 0:n.required)&&(V(s=null==n?void 0:n.defaultValue)||l(s))&&G(
null==n?void 0:n.decodeValue)))throw new TypeError(
"RequestPathVariable: Argument 2 is not type of RequestPathVariableOptions: "+t);let a=void 0,o=void 0,r=!0;if(
void 0!==(i=t))if(Ws(i))a=i;else{if(!Z(i))throw new TypeError("RequestPathVariable: Invalid type of options");a=null!=(
e=null==i?void 0:i.required)?e:void 0,o=null!=(s=null==i?void 0:i.defaultValue)?s:void 0,r=null==(
n=null==i?void 0:i.decodeValue)||n}return vd.debug(".PathVariable: init: ",c),(e,t,i)=>{if(l(t)&&K(i)){
var n=N.findController(e);if(void 0!==n)return void N.setControllerMethodPathVariable(n,t,i,c,_c.STRING,a,r,o)}vd.warn(
".PathVariable: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",i)}}if(void 0!==(t=c
)&&!Z(null==t?void 0:t.defaultValues))throw new TypeError("RequestPathVariable: Invalid type of options");
const a=t&&null!=(e=null==t?void 0:t.defaultValues)?e:void 0;return(e,t,i)=>{l(t)&&K(i)?L._setPathVariableMap(e,t,i,a
):vd.warn(".PathVariable: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",i)}}
static _setPathVariableMap(e,t,i,n){var a=N.findController(e);void 0!==a?N.setControllerMethodPathVariableMap(a,t,i,n
):vd.warn(".PathVariable: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",i)}
static PathVariable(e,t,i){return L.pathVariable(e,t,i)}static modelAttribute(a){if(vd.debug("Request.modelAttribute: ",
a),l(a))return(e,t,i)=>{if(l(t)){var n=N.findController(e);if(void 0!==n){if(K(i)
)return void N.setControllerMethodModelAttributeParam(n,t,i,a,_c.JSON);if(void 0!==i
)return void N.attachControllerMethodModelAttributeBuilder(n,t,i,a)}}vd.warn(
".modelAttribute: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",i)};
throw new TypeError("Request.modelAttribute: Argument 1 is not string: "+a)}static body(e,t,i){var n=N.findController(e)
void 0!==n&&l(t)&&K(i)?N.setControllerMethodBodyParam(n,t,i,_c.JSON):vd.warn(".body: Unrecognized configuration: ",
"; target=",e,"; propertyKey=",t,"; paramIndex=",i)}static Body(e,t,i){return L.body(e,t,i)}static optionsMapping(...e){
return L.mapping(L.Method.OPTIONS,...e)}static getMapping(...e){return L.mapping(L.Method.GET,...e)}static Get(...e){
return L.getMapping(...e)}static postMapping(...e){return L.mapping(L.Method.POST,...e)}static Post(...e){
return L.postMapping(...e)}static deleteMapping(...e){return L.mapping(L.Method.DELETE,...e)}static Delete(...e){
return L.deleteMapping(...e)}static putMapping(...e){return L.mapping(L.Method.PUT,...e)}static Put(...e){
return L.putMapping(...e)}static createBadRequestError(e){return le(n.BadRequest,e)}static createNotFoundRequestError(e
){return le(n.NotFound,e)}static createMethodNotAllowedRequestError(e){return le(n.MethodNotAllowed,e)}
static createConflictRequestError(e){return le(n.Conflict,e)}static createInternalErrorRequestError(e){return le(
n.InternalServerError,e)}static throwBadRequestError(e){throw L.createBadRequestError(e)}
static throwNotFoundRequestError(e){throw L.createNotFoundRequestError(e)}static throwMethodNotAllowedRequestError(e){
throw L.createMethodNotAllowedRequestError(e)}static throwConflictRequestError(e){throw L.createConflictRequestError(e)}
static throwInternalErrorRequestError(e){throw L.createInternalErrorRequestError(e)}}r(L,"Method",a),r(L,"Status",n),r(L
,"ParamType",_c),r(L,"Type",yc),r(L,"Error",Kp),kc={FINNISH:"fi",ENGLISH:"en"};const xd=A.createLogger(
"EmailVerificationService");class yd{static verifyCode(t,i){if(xd.debug(`verifyCode: "${i}" for email "${t}" `),!t
)return!1;if(!i)return!1;var e=e=>(null==e?void 0:e.email)===t&&(null==e?void 0:e.code)===i;const n=br(this._codes,e);
return!!n&&(null!==n&&void 0!==n&&n.timer&&(clearTimeout(n.timer),n.timer=void 0),Hr(this._codes,e),xd.debug(
`Verified & removed "${i}" for email "${t}"`),!0)}static removeVerificationCode(t,i){if(!t)throw new TypeError(
"email is required");if(!i)throw new TypeError("code is required");var e=e=>e.email===t&&e.code===i;const n=br(
this._codes,e);n&&(null!==n&&void 0!==n&&n.timer&&(clearTimeout(n.timer),n.timer=void 0),Hr(this._codes,e),xd.debug(
`Removed "${i}" for email "${t}"`))}static createVerificationCode(t){const e=(""+hp.randomInt(0,9999)).padStart(4,"0");
var i=setTimeout(()=>{yd.removeVerificationCode(t,e)},3e5);return Hr(this._codes,e=>e.email===t),this._codes.push({
email:t,code:e,timer:i}),xd.debug(`Added "${e}" for email "${t}"`),e}}r(yd,"_codes",[]),E=(Dl={exports:{}}).exports,
jl=dp.default,(Nl=jl.Buffer).from&&Nl.alloc&&Nl.allocUnsafe&&Nl.allocUnsafeSlow?Dl.exports=jl:(Yt(jl,E),E.Buffer=Zt),Yt(
Nl,Zt),Zt.from=function(e,t,i){if("number"==typeof e)throw new TypeError("Argument must not be a number");return Nl(e,t,
i)},Zt.alloc=function(e,t,i){if("number"!=typeof e)throw new TypeError("Argument must be a number");return e=Nl(e),
void 0!==t?"string"==typeof i?e.fill(t,i):e.fill(t):e.fill(0),e},Zt.allocUnsafe=function(e){if("number"!=typeof e
)throw new TypeError("Argument must be a number");return Nl(e)},Zt.allocUnsafeSlow=function(e){if("number"!=typeof e
)throw new TypeError("Argument must be a number");return jl.SlowBuffer(e)},Ec=Dl.exports.Buffer,El=mp.default,
fp.default.inherits(je,El),je.prototype.write=function(e){this.buffer=Ec.concat([this.buffer,Ec.from(e)]),this.emit(
"data",e)},je.prototype.end=function(e){e&&this.write(e),this.emit("end",e),this.emit("close"),this.writable=!1,
this.readable=!1},Fl=je,Sc=dp.default.Buffer,Tc=dp.default.SlowBuffer,(u=Ne).install=function(){
Sc.prototype.equal=Tc.prototype.equal=function(e){return Ne(this,e)}},Rc=Sc.prototype.equal,Oc=Tc.prototype.equal,
Ne.restore=function(){Sc.prototype.equal=Rc,Tc.prototype.equal=Oc},Ac={ES256:32,ES384:48,ES512:66},Cc=Dl.exports.Buffer,
Pc=function(e){var t=Ac[e];if(t)return t;throw new Error('Unknown algorithm "'+e+'"')},jc=u,Nc=Dl.exports.Buffer,
Lc=lp.default,Ic={derToJose:function(e,t){var i,n,a,o,r,s,c,l,p,d;if(e=Le(e),s=(t=Pc(t))+1,i=e.length,n=0,48!==e[n++]
)throw new Error('Could not find expected "seq"');if(129===(a=e[n++])&&(a=e[n++]),i-n<a)throw new Error(
'"seq" specified length of "'+a+'", only "'+(i-n)+'" remaining');if(2!==e[n++])throw new Error(
'Could not find expected "int" for "r"');if(a=e[n++],i-n-2<a)throw new Error('"r" specified length of "'+a+'", only "'+(
i-n-2)+'" available');if(s<a)throw new Error('"r" specified length of "'+a+'", max of "'+s+'" is acceptable');if(o=n,
n+=a,2!==e[n++])throw new Error('Could not find expected "int" for "s"');if(r=e[n++],i-n!==r)throw new Error(
'"s" specified length of "'+r+'", expected "'+(i-n)+'"');if(s<r)throw new Error(
'"s" specified length of "'+r+'", max of "'+s+'" is acceptable');if(s=n,(n+=r)!==i)throw new Error(
'Expected to consume entire buffer, but "'+(i-n)+'" bytes remain');for(p=Cc.allocUnsafe((c=t-a)+a+(l=t-r)+r),n=0;n<c;++n
)p[n]=0;for(e.copy(p,n,o+Math.max(-c,0),o+a),d=n=t;n<d+l;++n)p[n]=0;return e.copy(p,n,s+Math.max(-l,0),s+r),(
p=p.toString("base64")).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")},joseToDer:function(e,t){var i,n,a,o,r,s,
c,l;if(e=Le(e),i=Pc(t),(a=e.length)!==2*i)throw new TypeError('"'+t+'" signatures must be "'+2*i+'" bytes, saw "'+a+'"')
return s=(r=4+(a=i-(t=Ie(e,0,i)))+(o=i-(n=Ie(e,i,e.length))))<128,l=0,(c=Cc.allocUnsafe((s?2:3)+r))[l++]=48,s?c[l++]=r:(
c[l++]=129,c[l++]=255&r),c[l++]=2,c[l++]=a,t<0?(c[l++]=0,l+=e.copy(c,l,0,i)):l+=e.copy(c,l,t,i),c[l++]=2,c[l++]=o,n<0?(
c[l++]=0,e.copy(c,l,i)):e.copy(c,l,i+n),c}},qc=fp.default,Mc="secret must be a string or buffer",
Hc="key must be a string or a buffer",Uc="key must be a string, a buffer or an object",(
zc="function"==typeof Lc.createPublicKey)&&(Hc+=" or a KeyObject",Mc+="or a KeyObject"),Bc=dp.default.Buffer,
Dc=Dl.exports.Buffer,Fc=Fl,Vc=Tl=function(e){var t,i={hs:De,rs:Ve,ps:Ge,es:Je,none:We},n={hs:Fe,rs:$e,ps:Ke,es:Qe,
none:Xe},a=e.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);if(a)return t=(a[1]||a[3]).toLowerCase(),a=a[2],{sign:i[t](a
),verify:n[t](a)};throw ze(
'"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".'
,e)},Bl=mp.default,$c=T=function(e){return"string"==typeof e?e:"number"==typeof e||Bc.isBuffer(e)?e.toString(
):JSON.stringify(e)},(Gc=fp.default).inherits(et,Bl),et.prototype.sign=function(){try{var e=Ze({header:this.header,
payload:this.payload.buffer,secret:this.secret.buffer,encoding:this.encoding});return this.emit("done",e),this.emit(
"data",e),this.emit("end"),this.readable=!1,e}catch(e){this.readable=!1,this.emit("error",e),this.emit("close")}},
et.sign=Ze,Pl=et,Kc=Dl.exports.Buffer,Jc=Fl,Qc=Tl,Wc=mp.default,Xc=T,O=fp.default,
Yc=/^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/,O.inherits(rt,Wc),rt.prototype.verify=function(){var e,t;
try{return e=at(this.signature.buffer,this.algorithm,this.key.buffer),t=ot(this.signature.buffer,this.encoding),
this.emit("done",e,t),this.emit("data",e),this.emit("end"),this.readable=!1,e}catch(e){this.readable=!1,this.emit(
"error",e),this.emit("close")}},rt.decode=ot,rt.isValid=nt,Zc=Pl.sign,el=rt.verify=at,tl=rt.decode;class bd{
static getDefaultAlgorithm(){return bd._defaultAlgorithm}static setDefaultAlgorithm(e){bd._defaultAlgorithm=e}
static decodePayload(e){return e=tl(e),JSON.parse(null==e?void 0:e.payload)}static decodePayloadAudience(e){
var t=bd.decodePayload(e);if(l(t=null==t?void 0:t.aud))return t;throw new TypeError(
'getTokenAudience: Payload "aud" not string: '+e)}static decodePayloadSubject(e){var t=bd.decodePayload(e);if(l(
t=null==t?void 0:t.sub))return t;throw new TypeError('getTokenAudience: Payload "sub" not string: '+e)}
static createJwtEngine(i,e){let n=e;return{getDefaultAlgorithm:()=>{var e;return null!=(e=n)?e:bd.getDefaultAlgorithm()
},setDefaultAlgorithm:e=>{n=e},sign:(e,t)=>Zc({header:{alg:null!=t?t:bd.getDefaultAlgorithm()},payload:e,secret:i}),
verify:(e,t)=>el(e,null!=(e=null!=t?t:n)?e:bd.getDefaultAlgorithm(),i)}}}r(bd,"_defaultAlgorithm","HS256");
const I=A.createLogger("EmailTokenService");class _d{static setJwtEngine(e){_d._jwtEngine=e}static getTokenAudience(e){
try{return bd.decodePayloadAudience(e)}catch(e){return void I.error("getTokenAudience: Error: ",e)}}
static getTokenSubject(e){try{return bd.decodePayloadSubject(e)}catch(e){return void I.error("getTokenSubject: Error: ",
e)}}static verifyToken(t,i,n,e){try{if(I.debug(`verifyToken: email "${t}", "${i}", `+n),!t)return I.debug(
"verifyToken: No email provided: ",t),!1;if(!i)return I.debug("verifyToken: No token provided: ",i),!1;if(
!_d._jwtEngine.verify(i,e))return I.debug("verifyToken: Token was invalid: ",i),!1;var a=bd.decodePayload(i);if(n){if((
null==a?void 0:a.sub)!==t)return I.debug('verifyToken: "sub" did not match: ',null==a?void 0:a.sub,t),!1}else if((
null==a?void 0:a.aud)!==t)return I.debug('verifyToken: "aud" did not match: ',null==a?void 0:a.aud,t),!1;return I.debug(
"verifyToken: Success: ",a),!0}catch(e){return I.error("verifyToken: Could not verify token: ",e,i,t,n),!1}}
static verifyTokenOnly(t,i,e){try{if(I.debug(`verifyTokenOnly: "${t}", `+i),!t)return I.debug(
"verifyTokenOnly: No token provided: ",t),!1;if(!_d._jwtEngine.verify(t,e))return I.debug(
"verifyTokenOnly: Token was invalid: ",t),!1;var n=bd.decodePayload(t);if(i){if(null==n||!n.sub)return I.debug(
'verifyTokenOnly: Property "sub" did not exists',null==n?void 0:n.sub),!1}else if(null==n||!n.aud)return I.debug(
'verifyTokenOnly: Property "aud" did not exist: ',null==n?void 0:n.aud),!1;return I.debug("verifyTokenOnly: Success: ",n
),!0}catch(e){return I.error("verifyTokenOnly: Could not verify token: ",e,t,i),!1}}static createUnverifiedEmailToken(t,
e){try{return{token:_d._jwtEngine.sign({exp:Math.floor(Date.now()/1e3+300),aud:t},e),email:t}}catch(e){throw I.error(
`createUnverifiedEmailToken: "${t}": Could not sign JWT: `,e),new TypeError(`Could not sign JWT for "${t}"`)}}
static createVerifiedEmailToken(t,e){try{return{token:_d._jwtEngine.sign({exp:Math.floor(Date.now()/1e3+31536e3),sub:t},
e),email:t,verified:!0}}catch(e){throw I.error(`createVerifiedEmailToken: "${t}": Could not sign JWT: `,e),
new TypeError(`Could not sign JWT for "${t}"`)}}}r(_d,"_jwtEngine",void 0),il={type:"logger",log:function(e){
this.output("log",e)},warn:function(e){this.output("warn",e)},error:function(e){this.output("error",e)},output:function(
e,t){console&&console[e]&&console[e].apply(console,t)}},pt(ei,[{key:"init",value:function(e){
var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||il,
this.options=t,this.debug=t.debug}},{key:"setDebug",value:function(e){this.debug=e}},{key:"log",value:function(){for(
var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"log","",!0)}},{key:"warn",
value:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn",""
,!0)}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];
return this.forward(t,"error","")}},{key:"deprecate",value:function(){for(var e=arguments.length,t=new Array(e),
i=0;i<e;i++)t[i]=arguments[i];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(e,
t,i,n){return n&&!this.debug?null:("string"==typeof e[0]&&(e[0]="".concat(i).concat(this.prefix," ").concat(e[0])),
this.logger[t](e))}},{key:"create",value:function(e){return new ei(this.logger,yt(yt({},{prefix:"".concat(this.prefix,
":").concat(e,":")}),this.options))}}]),nl=new ei,pt(ti,[{key:"on",value:function(e,t){var i=this;return e.split(" "
).forEach(function(e){i.observers[e]=i.observers[e]||[],i.observers[e].push(t)}),this}},{key:"off",value:function(e,t){
this.observers[e]&&(t?this.observers[e]=this.observers[e].filter(function(e){return e!==t}):delete this.observers[e])}},
{key:"emit",value:function(t){for(var e=arguments.length,i=new Array(1<e?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];
this.observers[t]&&[].concat(this.observers[t]).forEach(function(e){e.apply(void 0,i)}),this.observers["*"]&&[].concat(
this.observers["*"]).forEach(function(e){e.apply(e,[t].concat(i))})}}]),al=ti,ol={"&":"&amp;","<":"&lt;",">":"&gt;",
'"':"&quot;","'":"&#39;","/":"&#x2F;"},
rl="undefined"!=typeof window&&window.navigator&&window.navigator.userAgent&&-1<window.navigator.userAgent.indexOf(
"MSIE"),sl=[" ",",","?","!",";"],ht(ii,al),np=ii,ap=function(){if("undefined"==typeof Reflect||!Reflect.construct
)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{
return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),Ll=function(
){var e,t=ft(np);return mt(this,ap?(e=ft(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))},
pt(ii,[{key:"addNamespaces",value:function(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}},{
key:"removeNamespaces",value:function(e){-1<(e=this.options.ns.indexOf(e))&&this.options.ns.splice(e,1)}},{
key:"getResource",value:function(e,t,i){var n=(void 0!==(a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{}
).keySeparator?a:this.options).keySeparator,a=(void 0!==a.ignoreJSONStructure?a:this.options).ignoreJSONStructure,o=[e,t
];return i&&"string"!=typeof i&&(o=o.concat(i)),i&&"string"==typeof i&&(o=o.concat(n?i.split(n):i)),-1<e.indexOf(".")&&(
o=e.split(".")),(o=Et(this.data,o))||!a||"string"!=typeof i?o:function e(t,i,n){var a,o,r,s,c,l,p,
d=2<arguments.length&&void 0!==n?n:".";if(t){if(t[i])return t[i];for(a=i.split(d),o=t,r=0;r<a.length;++r){if(!o)return;
if("string"==typeof o[a[r]]&&r+1<a.length)return;if(void 0===o[a[r]]){for(l=o[c=a.slice(r,r+(s=2)).join(d
)];void 0===l&&a.length>r+s;)s++,l=o[c=a.slice(r,r+s).join(d)];if(void 0===l)return;if(i.endsWith(c)){if(
"string"==typeof l)return l;if(c&&"string"==typeof l[c])return l[c]}return(p=a.slice(r+s).join(d))?e(l,p,d):void 0}
o=o[a[r]]}return o}}(this.data&&this.data[e]&&this.data[e][t],i,n)}},{key:"addResource",value:function(e,t,i,n){var a,
o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{silent:!1},r=this.options.keySeparator;void 0===r&&(r="."),a=[
e,t],i&&(a=a.concat(r?i.split(r):i)),-1<e.indexOf(".")&&(n=t,t=(a=e.split("."))[1]),this.addNamespaces(t),kt(this.data,a
,n),o.silent||this.emit("added",e,t,i,n)}},{key:"addResources",value:function(e,t,i){var n,
a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(n in i
)"string"!=typeof i[n]&&"[object Array]"!==Object.prototype.toString.apply(i[n])||this.addResource(e,t,n,i[n],{silent:!0
});a.silent||this.emit("added",e,t,i)}},{key:"addResourceBundle",value:function(e,t,i,n,a){var o,
r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:{silent:!1},s=[e,t];-1<e.indexOf(".")&&(n=i,i=t,t=(s=e.split(
"."))[1]),this.addNamespaces(t),o=Et(this.data,s)||{},n?function e(t,i,n){for(var a in i
)"__proto__"!==a&&"constructor"!==a&&(
a in t?"string"==typeof t[a]||t[a]instanceof String||"string"==typeof i[a]||i[a]instanceof String?n&&(t[a]=i[a]):e(t[a],
i[a],n):t[a]=i[a])}(o,i,a):o=At(At({},o),i),kt(this.data,s,o),r.silent||this.emit("added",e,t,i)}},{
key:"removeResourceBundle",value:function(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],
this.removeNamespaces(t),this.emit("removed",e,t)}},{key:"hasResourceBundle",value:function(e,t){
return void 0!==this.getResource(e,t)}},{key:"getResourceBundle",value:function(e,t){return t=t||this.options.defaultNS,
"v1"===this.options.compatibilityAPI?At(At({},{}),this.getResource(e,t)):this.getResource(e,t)}},{
key:"getDataByLanguage",value:function(e){return this.data[e]}},{key:"hasLanguageSomeTranslations",value:function(e){
var t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(function(e){return t[e]&&0<Object.keys(t[e]).length
})}},{key:"toJSON",value:function(){return this.data}}]),cl=ii,ll={processors:{},addPostProcessor:function(e){
this.processors[e.name]=e},handle:function(e,t,i,n,a){var o=this;return e.forEach(function(e){o.processors[e]&&(
t=o.processors[e].process(t,i,n,a))}),t}},pl={},ht(ni,al),tp=ni,ip=function(){if(
"undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy
)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()
,Il=function(){var e,t=ft(tp);return mt(this,ip?(e=ft(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,
arguments))},pt(ni,[{key:"changeLanguage",value:function(e){e&&(this.language=e)}},{key:"exists",value:function(e){
return null!=e&&(e=this.resolve(e,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{interpolation:{}})
)&&void 0!==e.res}},{key:"extractFromKey",value:function(e,t){var i,n,a,o,r=(void 0!==t.nsSeparator?t:this.options
).nsSeparator,s=(void 0!==t.keySeparator?t:this.options).keySeparator,c=t.ns||this.options.defaultNS||[],l=(
r=void 0===r?":":r)&&-1<e.indexOf(r),p=!(
this.options.userDefinedKeySeparator||t.keySeparator||this.options.userDefinedNsSeparator||t.nsSeparator||(t=e,i=r||"",
n=s||"",0===(p=sl.filter(function(e){return i.indexOf(e)<0&&n.indexOf(e)<0})).length||((a=!(p=new RegExp("(".concat(
p.map(function(e){return"?"===e?"\\?":e}).join("|"),")"))).test(t))||0<(o=t.indexOf(n))&&!p.test(t.substring(0,o))&&(
a=!0),a)));if(l&&!p){if((t=e.match(this.interpolator.nestingRegexp))&&0<t.length)return{key:e,namespaces:c};o=e.split(r)
,(r!==s||r===s&&-1<this.options.ns.indexOf(o[0]))&&(c=o.shift()),e=o.join(s)}return{key:e,
namespaces:c="string"==typeof c?[c]:c}}},{key:"translate",value:function(e,n,t){var i,a,o,r,s,c,l,p,d,u,h,m,f,g,v,x,y,b,
_,w,k,E,S,T,R,O=this;if(n=("object"!==st(n
)&&this.options.overloadTranslationOptionHandler?this.options.overloadTranslationOptionHandler(arguments):n)||{},null==e
)return"";if(Array.isArray(e)||(e=[String(e)]),i=(void 0!==n.keySeparator?n:this.options).keySeparator,
s=this.extractFromKey(e[e.length-1],n),a=s.key,o=s.namespaces,r=o[o.length-1],s=n.lng||this.language,
c=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode,s&&"cimode"===s.toLowerCase())return c?(
c=n.nsSeparator||this.options.nsSeparator,r+c+a):a;if(c=this.resolve(e,n),l=c&&c.res,g=c&&c.usedKey||a,
f=c&&c.exactUsedKey||a,b=Object.prototype.toString.apply(l),k=(void 0!==n.joinArrays?n:this.options).joinArrays,(
x=!this.i18nFormat||this.i18nFormat.handleAsObject)&&l&&"string"!=typeof l&&"boolean"!=typeof l&&"number"!=typeof l&&[
"[object Number]","[object Function]","[object RegExp]"].indexOf(b)<0&&("string"!=typeof k||"[object Array]"!==b)){if(
!n.returnObjects&&!this.options.returnObjects)return this.options.returnedObjectHandler||this.logger.warn(
"accessing an object - but returnObjects options is not enabled!"),
this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,l,Pt(Pt({},n),{},{ns:o})):"key '".concat(a," ("
).concat(this.language,")' returned an object instead of string.");if(i){for(u in p=(m="[object Array]"===b)?[]:{},
d=m?f:g,l)Object.prototype.hasOwnProperty.call(l,u)&&(h="".concat(d).concat(i).concat(u),p[u]=this.translate(h,Pt(Pt({},
n),{joinArrays:!1,ns:o})),p[u]===h&&(p[u]=l[u]));l=p}}else if(x&&"string"==typeof k&&"[object Array]"===b)l=(l=l.join(k)
)&&this.extendTranslation(l,e,n,t);else{if(f=m=!1,g=void 0!==n.count&&"string"!=typeof n.count,v=ni.hasDefaultValue(n),
x=g?this.pluralResolver.getSuffix(s,n.count,n):"",y=n["defaultValue".concat(x)]||n.defaultValue,!this.isValidLookup(l
)&&v&&(m=!0,l=y),this.isValidLookup(l)||(f=!0,l=a),
b=n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,_=b&&f?void 0:l,
w=v&&y!==l&&this.options.updateMissing,f||m||w){if(this.logger.log(w?"updateKey":"missingKey",s,r,a,w?y:l),i&&(
k=this.resolve(a,Pt(Pt({},n),{},{keySeparator:!1})))&&k.res&&this.logger.warn(
"Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
),E=[],S=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language),
"fallback"===this.options.saveMissingTo&&S&&S[0])for(T=0;T<S.length;T++)E.push(S[T]
);else"all"===this.options.saveMissingTo?E=this.languageUtils.toResolveHierarchy(n.lng||this.language):E.push(
n.lng||this.language);R=function(e,t,i){i=v&&i!==l?i:_,O.options.missingKeyHandler?O.options.missingKeyHandler(e,r,t,i,w
,n):O.backendConnector&&O.backendConnector.saveMissing&&O.backendConnector.saveMissing(e,r,t,i,w,n),O.emit("missingKey",
e,r,t,l)},this.options.saveMissing&&(this.options.saveMissingPlurals&&g?E.forEach(function(t){
O.pluralResolver.getSuffixes(t,n).forEach(function(e){R([t],a+e,n["defaultValue".concat(e)]||y)})}):R(E,a,y))}
l=this.extendTranslation(l,e,n,c,t),f&&l===a&&this.options.appendNamespaceToMissingKey&&(l="".concat(r,":").concat(a)),(
f||m)&&this.options.parseMissingKeyHandler&&(l="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(
a,m?l:void 0):this.options.parseMissingKeyHandler(l))}return l}},{key:"extendTranslation",value:function(e,n,a,t,o){
var i,r,s,c=this;return this.i18nFormat&&this.i18nFormat.parse?e=this.i18nFormat.parse(e,a,t.usedLng,t.usedNS,t.usedKey,
{resolved:t}):a.skipInterpolation||(a.interpolation&&this.interpolator.init(Pt(Pt({},a),{interpolation:Pt(Pt({},
this.options.interpolation),a.interpolation)})),(r="string"==typeof e&&(
a&&a.interpolation&&void 0!==a.interpolation.skipOnVariables?a:this.options).interpolation.skipOnVariables)&&(s=(
s=e.match(this.interpolator.nestingRegexp))&&s.length),i=a.replace&&"string"!=typeof a.replace?a.replace:a,
this.options.interpolation.defaultVariables&&(i=Pt(Pt({},this.options.interpolation.defaultVariables),i)),
e=this.interpolator.interpolate(e,i,a.lng||this.language,a),r&&s<((i=e.match(this.interpolator.nestingRegexp))&&i.length
)&&(a.nest=!1),!1!==a.nest&&(e=this.interpolator.nest(e,function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++
)t[i]=arguments[i];return o&&o[0]===t[0]&&!a.context?(c.logger.warn("It seems you are nesting recursively key: ".concat(
t[0]," in key: ").concat(n[0])),null):c.translate.apply(c,t.concat([n]))},a)),a.interpolation&&this.interpolator.reset()
),s="string"==typeof(r=a.postProcess||this.options.postProcess)?[r]:r,
null!=e&&s&&s.length&&!1!==a.applyPostProcessor?ll.handle(s,e,n,this.options&&this.options.postProcessPassResolved?Pt({
i18nResolved:t},a):a,this):e}},{key:"resolve",value:function(e){var p,i,d,u,n,h=this,
m=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return(e="string"==typeof e?[e]:e).forEach(function(e){var r
,s,c,l,t;h.isValidLookup(p)||(e=h.extractFromKey(e,m),r=e.key,i=r,e=e.namespaces,h.options.fallbackNS&&(e=e.concat(
h.options.fallbackNS)),s=void 0!==m.count&&"string"!=typeof m.count,
c=s&&!m.ordinal&&0===m.count&&h.pluralResolver.shouldUseIntlApi(),l=void 0!==m.context&&(
"string"==typeof m.context||"number"==typeof m.context)&&""!==m.context,t=m.lngs||h.languageUtils.toResolveHierarchy(
m.lng||h.language,m.fallbackLng),e.forEach(function(o){h.isValidLookup(p)||(n=o,!pl["".concat(t[0],"-").concat(o
)]&&h.utils&&h.utils.hasLoadedNamespace&&!h.utils.hasLoadedNamespace(n)&&(pl["".concat(t[0],"-").concat(o)]=!0,
h.logger.warn('key "'.concat(i,'" for languages "').concat(t.join(", "),'" won\'t get resolved as namespace "').concat(n
,'" was not yet loaded'),
"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
)),t.forEach(function(e){var t,i,n,a;if(!h.isValidLookup(p))for(u=e,t=[r],
h.i18nFormat&&h.i18nFormat.addLookupKeys?h.i18nFormat.addLookupKeys(t,r,e,o,m):(s&&(i=h.pluralResolver.getSuffix(e,
m.count,m)),s&&(t.push(r+i),c&&t.push(r+"_zero")),l&&(n="".concat(r).concat(h.options.contextSeparator).concat(m.context
),t.push(n),s&&(t.push(n+i),c&&t.push(n+"_zero"))));a=t.pop();)h.isValidLookup(p)||(d=a,p=h.getResource(e,o,a,m))}))}))}
),{res:p,usedKey:i,exactUsedKey:d,usedLng:u,usedNS:n}}},{key:"isValidLookup",value:function(e){return!(
void 0===e||!this.options.returnNull&&null===e||!this.options.returnEmptyString&&""===e)}},{key:"getResource",
value:function(e,t,i){return(this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat:this.resourceStore
).getResource(e,t,i,3<arguments.length&&void 0!==arguments[3]?arguments[3]:{})}}],[{key:"hasDefaultValue",
value:function(e){var t,i="defaultValue";for(t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&i===t.substring(0,
i.length)&&void 0!==e[t])return!0;return!1}}]),dl=ni,pt(ai,[{key:"getScriptPartFromCode",value:function(e){
return!e||e.indexOf("-")<0||2===(e=e.split("-")).length?null:(e.pop(),"x"===e[e.length-1].toLowerCase(
)?null:this.formatLanguageCode(e.join("-")))}},{key:"getLanguagePartFromCode",value:function(e){return!e||e.indexOf("-"
)<0?e:(e=e.split("-"),this.formatLanguageCode(e[0]))}},{key:"formatLanguageCode",value:function(e){var t,i;
return"string"==typeof e&&-1<e.indexOf("-")?(t=["hans","hant","latn","cyrl","cans","mong","arab"],i=e.split("-"),
this.options.lowerCaseLng?i=i.map(function(e){return e.toLowerCase()}):2===i.length?(i[0]=i[0].toLowerCase(),
i[1]=i[1].toUpperCase(),-1<t.indexOf(i[1].toLowerCase())&&(i[1]=jt(i[1].toLowerCase()))):3===i.length&&(
i[0]=i[0].toLowerCase(),2===i[1].length&&(i[1]=i[1].toUpperCase()),"sgn"!==i[0]&&2===i[2].length&&(
i[2]=i[2].toUpperCase()),-1<t.indexOf(i[1].toLowerCase())&&(i[1]=jt(i[1].toLowerCase())),-1<t.indexOf(i[2].toLowerCase()
)&&(i[2]=jt(i[2].toLowerCase()))),i.join("-")):this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}},{
key:"isSupportedCode",value:function(e){
return"languageOnly"!==this.options.load&&!this.options.nonExplicitSupportedLngs||(e=this.getLanguagePartFromCode(e)),
!this.supportedLngs||!this.supportedLngs.length||-1<this.supportedLngs.indexOf(e)}},{key:"getBestMatchFromCodes",
value:function(e){var i,n=this;return e?(e.forEach(function(e){i||(e=n.formatLanguageCode(e),
n.options.supportedLngs&&!n.isSupportedCode(e)||(i=e))}),!i&&this.options.supportedLngs&&e.forEach(function(e){var t;if(
!i)return t=n.getLanguagePartFromCode(e),n.isSupportedCode(t)?i=t:void(i=n.options.supportedLngs.find(function(e){if(
0===e.indexOf(t))return e}))}),i=i||this.getFallbackCodes(this.options.fallbackLng)[0]):null}},{key:"getFallbackCodes",
value:function(e,t){return e?("string"==typeof(e="function"==typeof e?e(t):e)&&(e=[e]),
"[object Array]"===Object.prototype.toString.apply(e)?e:t?e[t]||e[this.getScriptPartFromCode(t
)]||e[this.formatLanguageCode(t)]||e[this.getLanguagePartFromCode(t)]||e.default||[]:e.default||[]):[]}},{
key:"toResolveHierarchy",value:function(e,t){function i(e){e&&(n.isSupportedCode(e)?a.push(e):n.logger.warn(
"rejecting language code not found in supportedLngs: ".concat(e)))}var n=this,t=this.getFallbackCodes(
t||this.options.fallbackLng||[],e),a=[];return"string"==typeof e&&-1<e.indexOf("-")?(
"languageOnly"!==this.options.load&&i(this.formatLanguageCode(e)),
"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&i(this.getScriptPartFromCode(e)),
"currentOnly"!==this.options.load&&i(this.getLanguagePartFromCode(e))):"string"==typeof e&&i(this.formatLanguageCode(e))
,t.forEach(function(e){a.indexOf(e)<0&&i(n.formatLanguageCode(e))}),a}}]),ul=ai,hl=[{lngs:["ach","ak","am","arn","br",
"fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast",
"az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy",
"ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps",
"pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg",
"fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:[
"be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[
1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"
],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{
lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],
fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1
,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],ml={1:function(e){return Number(
1<e)},2:function(e){return Number(1!=e)},3:function(e){return 0},4:function(e){return Number(
e%10==1&&e%100!=11?0:2<=e%10&&e%10<=4&&(e%100<10||20<=e%100)?1:2)},5:function(e){return Number(
0==e?0:1==e?1:2==e?2:3<=e%100&&e%100<=10?3:11<=e%100?4:5)},6:function(e){return Number(1==e?0:2<=e&&e<=4?1:2)},
7:function(e){return Number(1==e?0:2<=e%10&&e%10<=4&&(e%100<10||20<=e%100)?1:2)},8:function(e){return Number(
1==e?0:2==e?1:8!=e&&11!=e?2:3)},9:function(e){return Number(2<=e)},10:function(e){return Number(
1==e?0:2==e?1:e<7?2:e<11?3:4)},11:function(e){return Number(1==e||11==e?0:2==e||12==e?1:2<e&&e<20?2:3)},12:function(e){
return Number(e%10!=1||e%100==11)},13:function(e){return Number(0!==e)},14:function(e){return Number(
1==e?0:2==e?1:3==e?2:3)},15:function(e){return Number(e%10==1&&e%100!=11?0:2<=e%10&&(e%100<10||20<=e%100)?1:2)},
16:function(e){return Number(e%10==1&&e%100!=11?0:0!==e?1:2)},17:function(e){return Number(1==e||e%10==1&&e%100!=11?0:1)
},18:function(e){return Number(0==e?0:1==e?1:2)},19:function(e){return Number(
1==e?0:0==e||1<e%100&&e%100<11?1:10<e%100&&e%100<20?2:3)},20:function(e){return Number(
1==e?0:0==e||0<e%100&&e%100<20?1:2)},21:function(e){return Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0)},
22:function(e){return Number(1==e?0:2==e?1:(e<0||10<e)&&e%10==0?2:3)}},fl=["v1","v2","v3"],gl={zero:0,one:1,two:2,few:3,
many:4,other:5},pt(oi,[{key:"addRule",value:function(e,t){this.rules[e]=t}},{key:"getRule",value:function(e){
var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi())try{
return new Intl.PluralRules(e,{type:t.ordinal?"ordinal":"cardinal"})}catch(e){return}
return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}},{key:"needsPlural",value:function(e){
return e=this.getRule(e,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}),this.shouldUseIntlApi(
)?e&&1<e.resolvedOptions().pluralCategories.length:e&&1<e.numbers.length}},{key:"getPluralFormsOfKey",value:function(e,t
){return this.getSuffixes(e,2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).map(function(e){return"".concat(t
).concat(e)})}},{key:"getSuffixes",value:function(t){var i=this,
n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=this.getRule(t,n);return e?this.shouldUseIntlApi(
)?e.resolvedOptions().pluralCategories.sort(function(e,t){return gl[e]-gl[t]}).map(function(e){return"".concat(
i.options.prepend).concat(e)}):e.numbers.map(function(e){return i.getSuffix(t,e,n)}):[]}},{key:"getSuffix",
value:function(e,t){var i=this.getRule(e,2<arguments.length&&void 0!==arguments[2]?arguments[2]:{});
return i?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(i.select(t)):this.getSuffixRetroCompatible(i,t
):(this.logger.warn("no plural rule found for: ".concat(e)),"")}},{key:"getSuffixRetroCompatible",value:function(e,t){
var i,n=this,t=e.noAbs?e.plurals(t):e.plurals(Math.abs(t)),a=e.numbers[t];
return this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===a?a="plural":1===a&&(a="")),
i=function(){return n.options.prepend&&a.toString()?n.options.prepend+a.toString():a.toString()},
"v1"===this.options.compatibilityJSON?1===a?"":"number"==typeof a?"_plural_".concat(a.toString()):i(
):"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]?i(
):this.options.prepend&&t.toString()?this.options.prepend+t.toString():t.toString()}},{key:"shouldUseIntlApi",
value:function(){return!fl.includes(this.options.compatibilityJSON)}}]),vl=oi,pt(ri,[{key:"init",value:function(){
var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0}),
e=e.interpolation,this.escape=void 0!==e.escape?e.escape:Rt,this.escapeValue=void 0===e.escapeValue||e.escapeValue,
this.useRawValueToEscape=void 0!==e.useRawValueToEscape&&e.useRawValueToEscape,this.prefix=e.prefix?Tt(e.prefix
):e.prefixEscaped||"{{",this.suffix=e.suffix?Tt(e.suffix):e.suffixEscaped||"}}",
this.formatSeparator=e.formatSeparator||e.formatSeparator||",",
this.unescapePrefix=e.unescapeSuffix?"":e.unescapePrefix||"-",
this.unescapeSuffix=!this.unescapePrefix&&e.unescapeSuffix||"",this.nestingPrefix=e.nestingPrefix?Tt(e.nestingPrefix
):e.nestingPrefixEscaped||Tt("$t("),this.nestingSuffix=e.nestingSuffix?Tt(e.nestingSuffix):e.nestingSuffixEscaped||Tt(
")"),this.nestingOptionsSeparator=e.nestingOptionsSeparator||e.nestingOptionsSeparator||",",
this.maxReplaces=e.maxReplaces||1e3,this.alwaysFormat=void 0!==e.alwaysFormat&&e.alwaysFormat,this.resetRegExp()}},{
key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){
var e="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(e,"g"),e="".concat(this.prefix).concat(
this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix),this.regexpUnescape=new RegExp(e,"g"),
e="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix),this.nestingRegexp=new RegExp(e,"g")}},{
key:"interpolate",value:function(o,r,s,c){function t(e){return e.replace(/\$/g,"$$$$")}var l,p,d,u,h,m=this,
f=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};return this.resetRegExp(),
u=c&&c.missingInterpolationHandler||this.options.missingInterpolationHandler,h=(
c&&c.interpolation&&void 0!==c.interpolation.skipOnVariables?c:this.options).interpolation.skipOnVariables,[{
regex:this.regexpUnescape,safeValue:t},{regex:this.regexp,safeValue:function(e){return m.escapeValue?t(m.escape(e)):t(e)
}}].forEach(function(e){var t,i,n,a;for(d=0;l=e.regex.exec(o);){if(t=l[1].trim(),void 0===(i=void 0,p=(a=t).indexOf(
m.formatSeparator)<0?(n=St(r,f,a),m.alwaysFormat?m.format(n,void 0,s,Lt(Lt(Lt({},c),r),{},{interpolationkey:a})):n):(n=(
i=a.split(m.formatSeparator)).shift().trim(),a=i.join(m.formatSeparator).trim(),m.format(St(r,f,n),a,s,Lt(Lt(Lt({},c),r)
,{},{interpolationkey:n})))))if("function"==typeof u)i=u(o,l,c),p="string"==typeof i?i:"";else if(c&&c.hasOwnProperty(t)
)p="";else{if(h){p=l[0];continue}m.logger.warn("missed to pass in variable ".concat(t," for interpolating ").concat(o)),
p=""}else"string"==typeof p||m.useRawValueToEscape||(p=_t(p));if(a=e.safeValue(p),o=o.replace(l[0],a),h?(
e.regex.lastIndex+=a.length,e.regex.lastIndex-=l[0].length):e.regex.lastIndex=0,++d>=m.maxReplaces)break}}),o}},{
key:"nest",value:function(e,t){function i(t,e){var i,n,a=this.nestingOptionsSeparator;if(t.indexOf(a)<0)return t;
i=t.split(new RegExp("".concat(a,"[ ]*{"))),n="{".concat(i[1]),t=i[0],n=(n=this.interpolate(n,l)).replace(/'/g,'"');try{
l=JSON.parse(n),e&&(l=Lt(Lt({},e),l))}catch(e){return this.logger.warn(
"failed parsing options string in nesting for key ".concat(t),e),"".concat(t).concat(a).concat(n)}
return delete l.defaultValue,t}var n,a,o,r,s=this,c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},l=Lt({},c)
for(l.applyPostProcessor=!1,delete l.defaultValue;n=this.nestingRegexp.exec(e);){if(o=!(a=[]),-1===n[0].indexOf(
this.formatSeparator)||/{.*}/.test(n[1])||(r=n[1].split(this.formatSeparator).map(function(e){return e.trim()}),
n[1]=r.shift(),a=r,o=!0),(r=t(i.call(this,n[1].trim(),l),l))&&n[0]===e&&"string"!=typeof r)return r;(
r="string"!=typeof r?_t(r):r)||(this.logger.warn("missed to resolve ".concat(n[1]," for nesting ").concat(e)),r=""),o&&(
r=a.reduce(function(e,t){return s.format(e,t,c.lng,Lt(Lt({},c),{},{interpolationkey:n[1].trim()}))},r.trim())),
e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}]),xl=ri,pt(si,[{key:"init",value:function(e){var t=(
1<arguments.length&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}).interpolation;
this.formatSeparator=t.formatSeparator||t.formatSeparator||","}},{key:"add",value:function(e,t){
this.formats[e.toLowerCase().trim()]=t}},{key:"format",value:function(e,t,s,c){var l=this;return t.split(
this.formatSeparator).reduce(function(e,t){r=t.toLowerCase().trim(),o={},-1<t.indexOf("(")&&(r=(t=t.split("(")
)[0].toLowerCase().trim(),t=t[1].substring(0,t[1].length-1),"currency"===r&&t.indexOf(":")<0?o.currency||(
o.currency=t.trim()):"relativetime"===r&&t.indexOf(":")<0?o.range||(o.range=t.trim()):t.split(";").forEach(function(e){
var t,i;e&&(t=(e=function(e){if(Array.isArray(e))return e}(i=e.split(":"))||function(){if(
"undefined"!=typeof Symbol&&null!=i[Symbol.iterator]||null!=i["@@iterator"])return Array.from(i)}()||function(e){if(e){
if("string"==typeof e)return vt(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(
t="Object"===t&&e.constructor?e.constructor.name:t)||"Set"===t?Array.from(e
):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?vt(e,void 0):void 0}}(i)||function(){
throw new TypeError(
"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
)}())[0],e=e.slice(1).join(":"),o[t.trim()]||(o[t.trim()]=e.trim()),"false"===e.trim()&&(o[t.trim()]=!1),
"true"===e.trim()&&(o[t.trim()]=!0),isNaN(e.trim())||(o[t.trim()]=parseInt(e.trim(),10)))}));var i,n,a,o,r=(t={
formatName:r,formatOptions:o}).formatName,t=t.formatOptions;if(l.formats[r]){i=e;try{a=(
n=c&&c.formatParams&&c.formatParams[c.interpolationkey]||{}).locale||n.lng||c.locale||c.lng||s,i=l.formats[r](e,a,qt(qt(
qt({},t),c),n))}catch(e){l.logger.warn(e)}return i}return l.logger.warn("there was no format function for ".concat(r)),e
},e)}}]),yl=si,ht(ci,al),Zl=ci,ep=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(
Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(
Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),ql=function(){var e,t=ft(Zl);return mt(this,ep?(
e=ft(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments))},pt(ci,[{key:"queueLoad",
value:function(e,t,a,i){var o=this,r=[],s=[],c=[],l=[];return e.forEach(function(i){var n=!0;t.forEach(function(e){
var t="".concat(i,"|").concat(e);!a.reload&&o.store.hasResourceBundle(i,e)?o.state[t]=2:o.state[t]<0||(
1===o.state[t]?s.indexOf(t)<0&&s.push(t):(o.state[t]=1,n=!1,s.indexOf(t)<0&&s.push(t),r.indexOf(t)<0&&r.push(t),
l.indexOf(e)<0&&l.push(e)))}),n||c.push(i)}),(r.length||s.length)&&this.queue.push({pending:s,loaded:{},errors:[],
callback:i}),{toLoad:r,pending:s,toLoadLanguages:c,toLoadNamespaces:l}}},{key:"loaded",value:function(s,c,e){var l,
t=s.split("|"),p=t[0],d=t[1];c&&this.emit("failedLoading",p,d,c),e&&this.store.addResourceBundle(p,d,e),
this.state[s]=c?-1:2,l={},this.queue.forEach(function(e){n=e.loaded,t=d,(i=(n=wt(n,[p],Object)).obj)[n=n.k]=i[n]||[],
i[n].push(t);for(var t,i,n,a=e.pending,o=s,r=a.indexOf(o);-1!==r;)a.splice(r,1),r=a.indexOf(o);c&&e.errors.push(c),
0!==e.pending.length||e.done||(Object.keys(e.loaded).forEach(function(t){l[t]||(l[t]=[]),
e.loaded[t].length&&e.loaded[t].forEach(function(e){l[t].indexOf(e)<0&&l[t].push(e)})}),e.done=!0,
e.errors.length?e.callback(e.errors):e.callback())}),this.emit("loaded",l),this.queue=this.queue.filter(function(e){
return!e.done})}},{key:"read",value:function(i,n,a){var o=this,
r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,s=4<arguments.length&&void 0!==arguments[4]?arguments[4]:350,
c=5<arguments.length?arguments[5]:void 0;return i.length?this.backend[a](i,n,function(e,t){e&&t&&r<5?setTimeout(
function(){o.read.call(o,i,n,a,r+1,2*s,c)},s):c(e,t)}):c(null,{})}},{key:"prepareLoading",value:function(e,t){var i=this
,n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},a=3<arguments.length?arguments[3]:void 0;
return this.backend?("string"==typeof e&&(e=this.languageUtils.toResolveHierarchy(e)),(e=this.queueLoad(e,
t="string"==typeof t?[t]:t,n,a)).toLoad.length?void e.toLoad.forEach(function(e){i.loadOne(e)}):(e.pending.length||a(),
null)):(this.logger.warn("No backend was added via i18next.use. Will not load resources."),a&&a())}},{key:"load",
value:function(e,t,i){this.prepareLoading(e,t,{},i)}},{key:"reload",value:function(e,t,i){this.prepareLoading(e,t,{
reload:!0},i)}},{key:"loadOne",value:function(i){var n=this,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",
e=i.split("|"),o=e[0],r=e[1];this.read(o,r,"read",void 0,void 0,function(e,t){e&&n.logger.warn("".concat(a,
"loading namespace ").concat(r," for language ").concat(o," failed"),e),!e&&t&&n.logger.log("".concat(a,
"loaded namespace ").concat(r," for language ").concat(o),t),n.loaded(i,e,t)})}},{key:"saveMissing",value:function(e,t,i
,n,a){var o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:{};
this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(t
)?this.logger.warn('did not save key "'.concat(i,'" as the namespace "').concat(t,'" was not yet loaded'),
"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
):null!=i&&""!==i&&(this.backend&&this.backend.create&&this.backend.create(e,t,i,n,null,Ht(Ht({},o),{},{isUpdate:a})),
e&&e[0]&&this.store.addResource(e[0],t,i,n))}}]),bl=ci,ht(li,al),Xl=li,Yl=function(){if(
"undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy
)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()
,Ml=function(){var e,t=ft(Xl);return mt(this,Yl?(e=ft(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,
arguments))},pt(li,[{key:"init",value:function(){function e(e){return e?"function"==typeof e?new e:e:null}var t,i,n,a,
o=this,r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},s=1<arguments.length?arguments[1]:void 0;
return"function"==typeof r&&(s=r,r={}),!r.defaultNS&&r.ns&&("string"==typeof r.ns?r.defaultNS=r.ns:r.ns.indexOf(
"translation")<0&&(r.defaultNS=r.ns[0])),this.options=Bt(Bt(Bt({},a={debug:!1,initImmediate:!0,ns:["translation"],
defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",
preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",
partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,
missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,
returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,
appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){var t,i={};
return"object"===st(e[1])&&(i=e[1]),"string"==typeof e[1]&&(i.defaultValue=e[1]),"string"==typeof e[2]&&(
i.tDescription=e[2]),"object"!==st(e[2])&&"object"!==st(e[3])||(t=e[3]||e[2],Object.keys(t).forEach(function(e){
i[e]=t[e]})),i},interpolation:{escapeValue:!0,format:function(e,t,i,n){return e},prefix:"{{",suffix:"}}",
formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",
maxReplaces:1e3,skipOnVariables:!0}}),this.options),Ut(r)),"v1"!==this.options.compatibilityAPI&&(
this.options.interpolation=Bt(Bt({},a.interpolation),this.options.interpolation)),void 0!==r.keySeparator&&(
this.options.userDefinedKeySeparator=r.keySeparator),void 0!==r.nsSeparator&&(
this.options.userDefinedNsSeparator=r.nsSeparator),this.options.isClone||(this.modules.logger?nl.init(e(
this.modules.logger),this.options):nl.init(null,this.options),
this.modules.formatter?t=this.modules.formatter:"undefined"!=typeof Intl&&(t=yl),r=new ul(this.options),
this.store=new cl(this.options.resources,this.options),(i=this.services).logger=nl,i.resourceStore=this.store,
i.languageUtils=r,i.pluralResolver=new vl(r,{prepend:this.options.pluralSeparator,
compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),
!t||this.options.interpolation.format&&this.options.interpolation.format!==a.interpolation.format||(i.formatter=e(t),
i.formatter.init(i,this.options),this.options.interpolation.format=i.formatter.format.bind(i.formatter)),
i.interpolator=new xl(this.options),i.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},
i.backendConnector=new bl(e(this.modules.backend),i.resourceStore,i,this.options),i.backendConnector.on("*",function(e){
for(var t=arguments.length,i=new Array(1<t?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];o.emit.apply(o,[e].concat(i))}),
this.modules.languageDetector&&(i.languageDetector=e(this.modules.languageDetector),i.languageDetector.init(i,
this.options.detection,this.options)),this.modules.i18nFormat&&(i.i18nFormat=e(this.modules.i18nFormat),
i.i18nFormat.init&&i.i18nFormat.init(this)),this.translator=new dl(this.services,this.options),this.translator.on("*",
function(e){for(var t=arguments.length,i=new Array(1<t?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];o.emit.apply(o,[e].concat(
i))}),this.modules.external.forEach(function(e){e.init&&e.init(o)})),this.format=this.options.interpolation.format,
s=s||Dt,!this.options.fallbackLng||this.services.languageDetector||this.options.lng||0<(
r=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng)).length&&"dev"!==r[0]&&(this.options.lng=r[0]),
this.services.languageDetector||this.options.lng||this.logger.warn(
"init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle",
"getDataByLanguage"].forEach(function(t){o[t]=function(){var e;return(e=o.store)[t].apply(e,arguments)}}),["addResource"
,"addResources","addResourceBundle","removeResourceBundle"].forEach(function(t){o[t]=function(){var e;return(e=o.store
)[t].apply(e,arguments),o}}),n=bt(),a=function(){function e(e,t){
o.isInitialized&&!o.initializedStoreOnce&&o.logger.warn(
"init: i18next is already initialized. You should call init just once!"),o.isInitialized=!0,
o.options.isClone||o.logger.log("initialized",o.options),o.emit("initialized",o.options),n.resolve(t),s(e,t)}if(
o.languages&&"v1"!==o.options.compatibilityAPI&&!o.isInitialized)return e(null,o.t.bind(o));o.changeLanguage(
o.options.lng,e)},this.options.resources||!this.options.initImmediate?a():setTimeout(a,0),n}},{key:"loadResources",
value:function(e){var t,i=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Dt,
a="string"==typeof e?e:this.language;if("function"==typeof e&&(n=e),
!this.options.resources||this.options.partialBundledLanguages){if(a&&"cimode"===a.toLowerCase())return n();t=[],
e=function(e){e&&i.services.languageUtils.toResolveHierarchy(e).forEach(function(e){t.indexOf(e)<0&&t.push(e)})},a?e(a
):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e),
this.options.preload&&this.options.preload.forEach(e),this.services.backendConnector.load(t,this.options.ns,function(e){
e||i.resolvedLanguage||!i.language||i.setResolvedLanguage(i.language),n(e)})}else n(null)}},{key:"reloadResources",
value:function(e,t,i){var n=bt();return e=e||this.languages,t=t||this.options.ns,i=i||Dt,
this.services.backendConnector.reload(e,t,function(e){n.resolve(),i(e)}),n}},{key:"use",value:function(e){if(!e
)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(
e.type)return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(
this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(
this.modules.i18nFormat=e),"postProcessor"===e.type&&ll.addPostProcessor(e),"formatter"===e.type&&(
this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this;throw new Error(
"You are passing a wrong module! Please check the object you are passing to i18next.use()")}},{
key:"setResolvedLanguage",value:function(e){var t,i;if(e&&this.languages&&!(-1<["cimode","dev"].indexOf(e)))for(
t=0;t<this.languages.length;t++)if(i=this.languages[t],!(-1<["cimode","dev"].indexOf(i)
)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}},{key:"changeLanguage",value:function(i,n
){var a,o,r,e,s=this;return this.isLanguageChangingTo=i,a=bt(),this.emit("languageChanging",i),o=function(e){
s.language=e,s.languages=s.services.languageUtils.toResolveHierarchy(e),s.resolvedLanguage=void 0,s.setResolvedLanguage(
e)},r=function(e,t){t?(o(t),s.translator.changeLanguage(t),s.isLanguageChangingTo=void 0,s.emit("languageChanged",t),
s.logger.log("languageChanged",t)):s.isLanguageChangingTo=void 0,a.resolve(function(){return s.t.apply(s,arguments)}),
n&&n(e,function(){return s.t.apply(s,arguments)})},e=function(e){var t="string"==typeof(
e=i||e||!s.services.languageDetector?e:[])?e:s.services.languageUtils.getBestMatchFromCodes(e);t&&(s.language||o(t),
s.translator.language||s.translator.changeLanguage(t),
s.services.languageDetector&&s.services.languageDetector.cacheUserLanguage(t)),s.loadResources(t,function(e){r(e,t)})},
i||!this.services.languageDetector||this.services.languageDetector.async?!i&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(
e):e(i):e(this.services.languageDetector.detect()),a}},{key:"getFixedT",value:function(e,t,r){function s(e,t){var i,n,a,
o;if("object"!==st(t)){for(n=arguments.length,a=new Array(2<n?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];
i=c.options.overloadTranslationOptionHandler([e,t].concat(a))}else i=Bt({},t);return i.lng=i.lng||s.lng,
i.lngs=i.lngs||s.lngs,i.ns=i.ns||s.ns,t=c.options.keySeparator||".",t=r?"".concat(r).concat(t).concat(e):e,c.t(t,i)}
var c=this;return"string"==typeof e?s.lng=e:s.lngs=e,s.ns=t,s.keyPrefix=r,s}},{key:"t",value:function(){var e;
return this.translator&&(e=this.translator).translate.apply(e,arguments)}},{key:"exists",value:function(){var e;
return this.translator&&(e=this.translator).exists.apply(e,arguments)}},{key:"setDefaultNamespace",value:function(e){
this.options.defaultNS=e}},{key:"hasLoadedNamespace",value:function(e){var t,i,n,a,o=this,
r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};
return this.isInitialized?this.languages&&this.languages.length?(t=this.resolvedLanguage||this.languages[0],
i=!!this.options&&this.options.fallbackLng,n=this.languages[this.languages.length-1],"cimode"===t.toLowerCase()||(
a=function(e,t){return-1===(e=o.services.backendConnector.state["".concat(e,"|").concat(t)])||2===e},
r.precheck&&void 0!==(r=r.precheck(this,a))?r:!!this.hasResourceBundle(t,e)||!this.services.backendConnector.backend||!(
!a(t,e)||i&&!a(n,e)))):(this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1
):(this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1)}},{key:"loadNamespaces",
value:function(e,t){var i=this,n=bt();return this.options.ns?((e="string"==typeof e?[e]:e).forEach(function(e){
i.options.ns.indexOf(e)<0&&i.options.ns.push(e)}),this.loadResources(function(e){n.resolve(),t&&t(e)}),n):(t&&t(),
Promise.resolve())}},{key:"loadLanguages",value:function(e,t){var i=bt(),n=this.options.preload||[];return(e=(
e="string"==typeof e?[e]:e).filter(function(e){return n.indexOf(e)<0})).length?(this.options.preload=n.concat(e),
this.loadResources(function(e){i.resolve(),t&&t(e)}),i):(t&&t(),Promise.resolve())}},{key:"dir",value:function(e){
return!(e=e||this.resolvedLanguage||(this.languages&&0<this.languages.length?this.languages[0]:this.language))||-1<["ar"
,"shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp"
,"apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu",
"pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"
].indexOf(this.services.languageUtils.getLanguagePartFromCode(e))||1<e.toLowerCase().indexOf("-arab")?"rtl":"ltr"}},{
key:"cloneInstance",value:function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},
i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Dt,a=new li(e=Bt(Bt(Bt({},this.options),e),{isClone:!0}));
return["store","services","language"].forEach(function(e){a[e]=t[e]}),a.services=Bt({},this.services),a.services.utils={
hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a.translator=new dl(a.services,a.options),a.translator.on("*",function(
e){for(var t=arguments.length,i=new Array(1<t?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];a.emit.apply(a,[e].concat(i))}),
a.init(e,i),a.translator.options=a.options,a.translator.backendConnector.services.utils={
hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}},{key:"toJSON",value:function(){return{options:this.options,
store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),gt(_l=li,
"createInstance",function(){return new _l(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},
1<arguments.length?arguments[1]:void 0)}),(d=_l.createInstance()).createInstance=_l.createInstance,d.createInstance,
wl=d.init,d.loadResources,d.reloadResources,d.use,kl=d.changeLanguage,d.getFixedT,d.t,d.exists,d.setDefaultNamespace,
d.hasLoadedNamespace,d.loadNamespaces,d.loadLanguages;class wd{static getConfig(i){return Tr(ie(i),(e,t)=>f(f({},e),{},{
[t]:{translation:i[t]}}),{})}static getLanguageStringForI18n(e){switch(e){case kc.FINNISH:return"fi";case kc.ENGLISH:
return"en"}}static translateKeys(i,e,n){return Tr(e,(e,t)=>(e[t]=i(t,n),e),{})}}const kd=A.createLogger(
"BackendTranslationService");class Ed{static initialize(i,e){const n=wd.getConfig(e);return new Promise((e,t)=>{wl({
resources:n,lng:i,interpolation:{escapeValue:!0}}).then(()=>{e()}).catch(e=>{kd.error("Error in init: ",e),t(e)})})}
static async translateKeys(e,t,i){return e=await kl(e),wd.translateKeys(e,t,i)}}const Sd=kc.FINNISH,
Td="m.authCode.subject",Rd="m.authCode.headerText",Od="m.authCode.bodyText",Ad="m.authCode.footerText",
Cd="m.authCode.headerHtml",Pd="m.authCode.bodyHtml",jd="m.authCode.footerHtml",Nd=(h={exports:{}},Rp.default),
Ld=cp.default,Id=vp.default,qd=Rp.default,Md=xp.default,Hd=mp.default.PassThrough,Ud=class{constructor(e){
this.options=e||{},this.cookies=[]}set(e,t){t=Nd.parse(t||"");let i=this.parse(e);return i.domain?(e=i.domain.replace(
/^\./,""),(t.hostname.length<e.length||("."+t.hostname).substr(1-e.length)!=="."+e)&&(i.domain=t.hostname)
):i.domain=t.hostname,i.path||(i.path=this.getPath(t.pathname)),i.expires||(i.expires=new Date(Date.now()+1e3*(Number(
this.options.sessionTimeout||1800)||1800))),this.add(i)}get(e){return this.list(e).map(e=>e.name+"="+e.value).join("; ")
}list(e){let t=[],i;var n;for(i=this.cookies.length-1;0<=i;i--)n=this.cookies[i],this.isExpired(n)?this.cookies.splice(i
,i):this.match(n,e)&&t.unshift(n);return t}parse(e){let o={};return(e||"").toString().split(";").forEach(e=>{
let t=e.split("=");var i=t.shift().trim().toLowerCase();let n=t.join("=").trim(),a;if(i)switch(i){case"expires":
"Invalid Date"!==(n=new Date(n)).toString()&&(o.expires=n);break;case"path":o.path=n;break;case"domain":(
a=n.toLowerCase()).length&&"."!==a.charAt(0)&&(a="."+a),o.domain=a;break;case"max-age":o.expires=new Date(Date.now(
)+1e3*(Number(n)||0));break;case"secure":o.secure=!0;break;case"httponly":o.httponly=!0;break;default:o.name||(o.name=i,
o.value=n)}}),o}match(e,t){if((t=Nd.parse(t||"")).hostname!==e.domain&&("."!==e.domain.charAt(0)||("."+t.hostname
).substr(-e.domain.length)!==e.domain))return!1;let i=this.getPath(t.pathname);return i.substr(0,e.path.length
)===e.path&&(!e.secure||"https:"===t.protocol)}add(e){let t;var i;if(!e||!e.name)return!1;for(t=0,
i=this.cookies.length;t<i;t++)if(this.compare(this.cookies[t],e))return this.isExpired(e)?(this.cookies.splice(t,1),!1
):(this.cookies[t]=e,!0);return this.isExpired(e)||this.cookies.push(e),!0}compare(e,t){
return e.name===t.name&&e.path===t.path&&e.domain===t.domain&&e.secure===t.secure&&e.httponly==e.httponly}isExpired(e){
return e.expires&&e.expires<new Date||!e.value}getPath(e){let t=(e||"/").split("/");return t.pop(),"/"!==(t="/"!==(
t=t.join("/").trim()).charAt(0)?"/"+t:t).substr(-1)&&(t+="/"),t}},zd=i={name:"nodemailer",version:"6.7.3",
description:"Easy as cake e-mail sending from your Node.js applications",main:"lib/nodemailer.js",scripts:{test:"grunt"
},repository:{type:"git",url:"https://github.com/nodemailer/nodemailer.git"},keywords:["Nodemailer"],
author:"Andris Reinman",license:"MIT",bugs:{url:"https://github.com/nodemailer/nodemailer/issues"},
homepage:"https://nodemailer.com/",devDependencies:{"@aws-sdk/client-ses":"3.54.1","aws-sdk":"2.1096.0",bunyan:"1.8.15",
chai:"4.3.6","eslint-config-nodemailer":"1.2.0","eslint-config-prettier":"8.5.0",grunt:"1.4.1","grunt-cli":"1.4.3",
"grunt-eslint":"24.0.0","grunt-mocha-test":"0.13.3",libbase64:"1.2.1",libmime:"5.0.0",libqp:"1.1.0",mocha:"9.2.2",
"nodemailer-ntlm-auth":"1.0.1",proxy:"1.0.2","proxy-test-server":"1.0.0",sinon:"13.0.1","smtp-server":"3.10.0"},
engines:{node:">=6.0.0"},_resolved:"https://registry.npmjs.org/nodemailer/-/nodemailer-6.7.3.tgz",
_integrity:"sha512-KUdDsspqx89sD4UUyUKzdlUOper3hRkDVkrKh/89G+d9WKsU5ox51NWS4tB1XR5dPUdR4SP0E3molyEfOvSa3g==",
_from:"nodemailer@6.7.3"};(s={exports:{}}).exports=function i(n,a){(a=a||{}).fetchRes=a.fetchRes||new Hd,
a.cookies=a.cookies||new Ud,a.redirects=a.redirects||0,a.maxRedirects=isNaN(a.maxRedirects)?5:a.maxRedirects,a.cookie&&(
[].concat(a.cookie||[]).forEach(e=>{a.cookies.set(e,n)}),a.cookie=!1);let o=a.fetchRes;var e,t=qd.parse(n);let r=(
a.method||"").toString().trim().toUpperCase()||"GET",s=!1,c,l="https:"===t.protocol?Id:Ld,p={
"accept-encoding":"gzip,deflate","user-agent":"nodemailer/"+zd.version};if(Object.keys(a.headers||{}).forEach(e=>{
p[e.toLowerCase().trim()]=a.headers[e]}),a.userAgent&&(p["user-agent"]=a.userAgent),t.auth&&(
p.Authorization="Basic "+Buffer.from(t.auth).toString("base64")),(e=a.cookies.get(n))&&(p.cookie=e),a.body){if(
!1!==a.contentType&&(p["Content-Type"]=a.contentType||"application/x-www-form-urlencoded"),
"function"==typeof a.body.pipe)p["Transfer-Encoding"]="chunked",(c=a.body).on("error",e=>{s||(s=!0,e.type="FETCH",
e.sourceUrl=n,o.emit("error",e))});else{if(a.body instanceof Buffer)c=a.body;else if("object"==typeof a.body)try{
c=Buffer.from(Object.keys(a.body).map(e=>{var t=a.body[e].toString().trim();return encodeURIComponent(e
)+"="+encodeURIComponent(t)}).join("&"))}catch(e){return s?void 0:(s=!0,e.type="FETCH",e.sourceUrl=n,void o.emit("error"
,e))}else c=Buffer.from(a.body.toString().trim());p["Content-Type"]=a.contentType||"application/x-www-form-urlencoded",
p["Content-Length"]=c.length}r=(a.method||"").toString().trim().toUpperCase()||"POST"}let d,u={method:r,host:t.hostname,
path:t.path,port:t.port||("https:"===t.protocol?443:80),headers:p,rejectUnauthorized:!1,agent:!1};a.tls&&Object.keys(
a.tls).forEach(e=>{u[e]=a.tls[e]});try{d=l.request(u)}catch(e){return s=!0,setImmediate(()=>{e.type="FETCH",
e.sourceUrl=n,o.emit("error",e)}),o}return a.timeout&&d.setTimeout(a.timeout,()=>{if(!s){s=!0,d.abort();let e=new Error(
"Request Timeout");e.type="FETCH",e.sourceUrl=n,o.emit("error",e)}}),d.on("error",e=>{s||(s=!0,e.type="FETCH",
e.sourceUrl=n,o.emit("error",e))}),d.on("response",t=>{let e;if(!s){switch(t.headers["content-encoding"]){case"gzip":
case"deflate":e=Md.createUnzip()}if(t.headers["set-cookie"]&&[].concat(t.headers["set-cookie"]||[]).forEach(e=>{
a.cookies.set(e,n)}),[301,302,303,307,308].includes(t.statusCode)&&t.headers.location){if(a.redirects++,
a.redirects>a.maxRedirects){s=!0;let e=new Error("Maximum redirect count exceeded");return e.type="FETCH",e.sourceUrl=n,
o.emit("error",e),void d.abort()}return a.method="GET",a.body=!1,i(qd.resolve(n,t.headers.location),a)}if(
o.statusCode=t.statusCode,o.headers=t.headers,300<=t.statusCode&&!a.allowErrorResponse){s=!0;let e=new Error(
"Invalid status code "+t.statusCode);return e.type="FETCH",e.sourceUrl=n,o.emit("error",e),void d.abort()}t.on("error",
e=>{s||(s=!0,e.type="FETCH",e.sourceUrl=n,o.emit("error",e),d.abort())}),e?(t.pipe(e).pipe(o),e.on("error",e=>{s||(s=!0,
e.type="FETCH",e.sourceUrl=n,o.emit("error",e),d.abort())})):t.pipe(o)}}),setImmediate(()=>{if(c)try{if(
"function"==typeof c.pipe)return c.pipe(d);d.write(c)}catch(e){return s=!0,e.type="FETCH",e.sourceUrl=n,void o.emit(
"error",e)}d.end()}),o},s.exports.Cookies=Ud;{function Bd(t,i){let n=!1,a=[],o=0;t.on("error",e=>{n||(n=!0,i(e))}),t.on(
"readable",()=>{for(var e;null!==(e=t.read());)a.push(e),o+=e.length}),t.on("end",()=>{if(!n){n=!0;let e;try{
e=Buffer.concat(a,o)}catch(e){return i(e)}i(null,e)}})}Hl=h;const em=Rp.default,tm=fp.default,im=Sp.default,nm=s.exports
,am=yp.default,om=bp.default,rm=_p.default,sm=Hl.exports.networkInterfaces=rm.networkInterfaces(),cm=(t,e,i)=>{if(!(
0<Object.keys(sm).map(e=>sm[e]).reduce((e,t)=>e.concat(t),[]).filter(e=>!e.internal).filter(e=>e.family==="IPv"+t
).length))return i(null,[]);am["resolve"+t](e,(e,t)=>{if(e){switch(e.code){case am.NODATA:case am.NOTFOUND:
case am.NOTIMP:case am.SERVFAIL:case am.CONNREFUSED:case"EAI_AGAIN":return i(null,[])}return i(e)}return i(null,
Array.isArray(t)?t:[].concat(t||[]))})},lm=Hl.exports.dnsCache=new Map,pm=(e,t)=>e?Object.assign({
servername:e.servername,
host:e.addresses&&e.addresses.length?1===e.addresses.length?e.addresses[0]:e.addresses[Math.floor(Math.random(
)*e.addresses.length)]:null},t||{}):Object.assign({},t||{});Hl.exports.resolveHostname=(i,n)=>{var e;if(!(i=i||{}
).host&&i.servername&&(i.host=i.servername),!i.host||om.isIP(i.host))return e={addresses:[i.host],
servername:i.servername||!1},n(null,pm(e,{cached:!1}));let a;if(lm.has(i.host)&&(!(a=lm.get(i.host)
).expires||a.expires>=Date.now()))return n(null,pm(a.value,{cached:!0}));cm(4,i.host,(e,t)=>e?a?n(null,pm(a.value,{
cached:!0,error:e})):n(e):t&&t.length?(e={addresses:t,servername:i.servername||i.host},lm.set(i.host,{value:e,
expires:Date.now()+3e5}),n(null,pm(e,{cached:!1}))):void cm(6,i.host,(e,t)=>{if(e)return a?n(null,pm(a.value,{cached:!0,
error:e})):n(e);if(t&&t.length)return t={addresses:t,servername:i.servername||i.host},lm.set(i.host,{value:t,
expires:Date.now()+3e5}),n(null,pm(t,{cached:!1}));try{am.lookup(i.host,{},(e,t)=>e?a?n(null,pm(a.value,{cached:!0,
error:e})):n(e):!t&&a?n(null,pm(a.value,{cached:!0})):(e={addresses:t?[t]:[i.host],servername:i.servername||i.host},
lm.set(i.host,{value:e,expires:Date.now()+3e5}),n(null,pm(e,{cached:!1}))))}catch(e){return a?n(null,pm(a.value,{
cached:!0,error:e})):n(e)}}))},Hl.exports.parseConnectionUrl=e=>{e=e||"";let o={};return[em.parse(e,!0)].forEach(a=>{
let e;switch(a.protocol){case"smtp:":o.secure=!1;break;case"smtps:":o.secure=!0;break;case"direct:":o.direct=!0}!isNaN(
a.port)&&Number(a.port)&&(o.port=Number(a.port)),a.hostname&&(o.host=a.hostname),a.auth&&(e=a.auth.split(":"),o.auth||(
o.auth={}),o.auth.user=e.shift(),o.auth.pass=e.join(":")),Object.keys(a.query||{}).forEach(e=>{let t=o,i=e,n=a.query[e];
switch(n=isNaN(n)?n:Number(n)){case"true":n=!0;break;case"false":n=!1}if(0===e.indexOf("tls."))i=e.substr(4),o.tls||(
o.tls={}),t=o.tls;else if(0<=e.indexOf("."))return;i in t||(t[i]=n)})}),o},Hl.exports._logFunc=(e,t,i,n,a,...o)=>{
let r={};Object.keys(i||{}).forEach(e=>{"level"!==e&&(r[e]=i[e])}),Object.keys(n||{}).forEach(e=>{"level"!==e&&(
r[e]=n[e])}),e[t](r,a,...o)},Hl.exports.getLogger=(e,a)=>{let t={},i=["trace","debug","info","warn","error","fatal"];if(
!(e=e||{}).logger)return i.forEach(e=>{t[e]=()=>!1}),t;let o=e.logger;return!0===e.logger&&(o=function(e){let i=0,
o=new Map,t=(e.forEach(e=>{e.length>i&&(i=e.length)}),e.forEach(e=>{let t=e.toUpperCase();t.length<i&&(t+=" ".repeat(
i-t.length)),o.set(e,t)}),{});return e.forEach(e=>{t[e]=((t,e,i,...n)=>{let a="";e&&(
"server"===e.tnx?a="S: ":"client"===e.tnx&&(a="C: "),e.sid&&(a="["+e.sid+"] "+a),e.cid&&(a="[#"+e.cid+"] "+a)),(
i=tm.format(i,...n)).split(/\r?\n/).forEach(e=>{console.log("[%s] %s %s",(new Date).toISOString().substr(0,19).replace(
/T/," "),o.get(t),a+e)})}).bind(null,e)}),t}(i)),i.forEach(n=>{t[n]=(e,t,...i)=>{Hl.exports._logFunc(o,n,a,e,t,...i)}}),
t},Hl.exports.callbackPromise=(i,n)=>function(){let e=Array.from(arguments);var t=e.shift();t?n(t):i(...e)},
Hl.exports.resolveContent=(i,n,a)=>{let e,t=(a||(e=new Promise((e,t)=>{a=Hl.exports.callbackPromise(e,t)})),
i&&i[n]&&i[n].content||i[n]);var o,r=("object"==typeof i[n]&&i[n].encoding||"utf8").toString().toLowerCase().replace(
/[-_\s]/g,"");if(!t)return a(null,t);if("object"==typeof t){if("function"==typeof t.pipe)return Bd(t,(e,t)=>{if(e
)return a(e);i[n].content?i[n].content=t:i[n]=t,a(null,t)});if(/^https?:\/\//i.test(t.path||t.href))return Bd(nm(
t.path||t.href),a);if(/^data:/i.test(t.path||t.href))return o=(t.path||t.href).match(
/^data:((?:[^;]*;)*(?:[^,]*)),(.*)$/i),a(null,o?/\bbase64$/i.test(o[1])?Buffer.from(o[2],"base64"):Buffer.from(
decodeURIComponent(o[2])):Buffer.from(0));if(t.path)return Bd(im.createReadStream(t.path),a)}
return"string"!=typeof i[n].content||["utf8","usascii","ascii"].includes(r)||(t=Buffer.from(i[n].content,r)),
setImmediate(()=>a(null,t)),e},Hl.exports.assign=function(){let e=Array.from(arguments),n=e.shift()||{};
return e.forEach(i=>{Object.keys(i||{}).forEach(t=>{["tls","auth"].includes(t)&&i[t]&&"object"==typeof i[t]?(n[t]||(
n[t]={}),Object.keys(i[t]).forEach(e=>{n[t][e]=i[t][e]})):n[t]=i[t]})}),n},Hl.exports.encodeXText=e=>{if(
!/[^\x21-\x2A\x2C-\x3C\x3E-\x7E]/.test(e))return e;var i=Buffer.from(e);let n="";for(let t=0,e=i.length;t<e;t++){
let e=i[t];e<33||126<e||43===e||61===e?n+="+"+(e<16?"0":"")+e.toString(16).toUpperCase():n+=String.fromCharCode(e)}
return n}}const Dd=Tp.default,Fd="application/octet-stream",Vd=new Map([["application/acad","dwg"],[
"application/applixware","aw"],["application/arj","arj"],["application/atom+xml","xml"],["application/atomcat+xml",
"atomcat"],["application/atomsvc+xml","atomsvc"],["application/base64",["mm","mme"]],["application/binhex","hqx"],[
"application/binhex4","hqx"],["application/book",["book","boo"]],["application/ccxml+xml,","ccxml"],["application/cdf",
"cdf"],["application/cdmi-capability","cdmia"],["application/cdmi-container","cdmic"],["application/cdmi-domain","cdmid"
],["application/cdmi-object","cdmio"],["application/cdmi-queue","cdmiq"],["application/clariscad","ccad"],[
"application/commonground","dp"],["application/cu-seeme","cu"],["application/davmount+xml","davmount"],[
"application/drafting","drw"],["application/dsptype","tsp"],["application/dssc+der","dssc"],["application/dssc+xml",
"xdssc"],["application/dxf","dxf"],["application/ecmascript",["js","es"]],["application/emma+xml","emma"],[
"application/envoy","evy"],["application/epub+zip","epub"],["application/excel",["xls","xl","xla","xlb","xlc","xld",
"xlk","xll","xlm","xlt","xlv","xlw"]],["application/exi","exi"],["application/font-tdpfr","pfr"],["application/fractals"
,"fif"],["application/freeloader","frl"],["application/futuresplash","spl"],["application/gnutar","tgz"],[
"application/groupwise","vew"],["application/hlp","hlp"],["application/hta","hta"],["application/hyperstudio","stk"],[
"application/i-deas","unv"],["application/iges",["iges","igs"]],["application/inf","inf"],[
"application/internet-property-stream","acx"],["application/ipfix","ipfix"],["application/java","class"],[
"application/java-archive","jar"],["application/java-byte-code","class"],["application/java-serialized-object","ser"],[
"application/java-vm","class"],["application/javascript","js"],["application/json","json"],["application/lha","lha"],[
"application/lzx","lzx"],["application/mac-binary","bin"],["application/mac-binhex","hqx"],["application/mac-binhex40",
"hqx"],["application/mac-compactpro","cpt"],["application/macbinary","bin"],["application/mads+xml","mads"],[
"application/marc","mrc"],["application/marcxml+xml","mrcx"],["application/mathematica","ma"],["application/mathml+xml",
"mathml"],["application/mbedlet","mbd"],["application/mbox","mbox"],["application/mcad","mcd"],[
"application/mediaservercontrol+xml","mscml"],["application/metalink4+xml","meta4"],["application/mets+xml","mets"],[
"application/mime","aps"],["application/mods+xml","mods"],["application/mp21","m21"],["application/mp4","mp4"],[
"application/mspowerpoint",["ppt","pot","pps","ppz"]],["application/msword",["doc","dot","w6w","wiz","word"]],[
"application/mswrite","wri"],["application/mxf","mxf"],["application/netmc","mcp"],["application/octet-stream",["*"]],[
"application/oda","oda"],["application/oebps-package+xml","opf"],["application/ogg","ogx"],["application/olescript",
"axs"],["application/onenote","onetoc"],["application/patch-ops-error+xml","xer"],["application/pdf","pdf"],[
"application/pgp-encrypted","asc"],["application/pgp-signature","pgp"],["application/pics-rules","prf"],[
"application/pkcs-12","p12"],["application/pkcs-crl","crl"],["application/pkcs10","p10"],["application/pkcs7-mime",[
"p7c","p7m"]],["application/pkcs7-signature","p7s"],["application/pkcs8","p8"],["application/pkix-attr-cert","ac"],[
"application/pkix-cert",["cer","crt"]],["application/pkix-crl","crl"],["application/pkix-pkipath","pkipath"],[
"application/pkixcmp","pki"],["application/plain","text"],["application/pls+xml","pls"],["application/postscript",["ps",
"ai","eps"]],["application/powerpoint","ppt"],["application/pro_eng",["part","prt"]],["application/prs.cww","cww"],[
"application/pskc+xml","pskcxml"],["application/rdf+xml","rdf"],["application/reginfo+xml","rif"],[
"application/relax-ng-compact-syntax","rnc"],["application/resource-lists+xml","rl"],[
"application/resource-lists-diff+xml","rld"],["application/ringing-tones","rng"],["application/rls-services+xml","rs"],[
"application/rsd+xml","rsd"],["application/rss+xml","xml"],["application/rtf",["rtf","rtx"]],["application/sbml+xml",
"sbml"],["application/scvp-cv-request","scq"],["application/scvp-cv-response","scs"],["application/scvp-vp-request",
"spq"],["application/scvp-vp-response","spp"],["application/sdp","sdp"],["application/sea","sea"],["application/set",
"set"],["application/set-payment-initiation","setpay"],["application/set-registration-initiation","setreg"],[
"application/shf+xml","shf"],["application/sla","stl"],["application/smil",["smi","smil"]],["application/smil+xml","smi"
],["application/solids","sol"],["application/sounder","sdr"],["application/sparql-query","rq"],[
"application/sparql-results+xml","srx"],["application/srgs","gram"],["application/srgs+xml","grxml"],[
"application/sru+xml","sru"],["application/ssml+xml","ssml"],["application/step",["step","stp"]],[
"application/streamingmedia","ssm"],["application/tei+xml","tei"],["application/thraud+xml","tfi"],[
"application/timestamped-data","tsd"],["application/toolbook","tbk"],["application/vda","vda"],[
"application/vnd.3gpp.pic-bw-large","plb"],["application/vnd.3gpp.pic-bw-small","psb"],[
"application/vnd.3gpp.pic-bw-var","pvb"],["application/vnd.3gpp2.tcap","tcap"],["application/vnd.3m.post-it-notes","pwn"
],["application/vnd.accpac.simply.aso","aso"],["application/vnd.accpac.simply.imp","imp"],["application/vnd.acucobol",
"acu"],["application/vnd.acucorp","atc"],["application/vnd.adobe.air-application-installer-package+zip","air"],[
"application/vnd.adobe.fxp","fxp"],["application/vnd.adobe.xdp+xml","xdp"],["application/vnd.adobe.xfdf","xfdf"],[
"application/vnd.ahead.space","ahead"],["application/vnd.airzip.filesecure.azf","azf"],[
"application/vnd.airzip.filesecure.azs","azs"],["application/vnd.amazon.ebook","azw"],[
"application/vnd.americandynamics.acc","acc"],["application/vnd.amiga.ami","ami"],[
"application/vnd.android.package-archive","apk"],["application/vnd.anser-web-certificate-issue-initiation","cii"],[
"application/vnd.anser-web-funds-transfer-initiation","fti"],["application/vnd.antix.game-component","atx"],[
"application/vnd.apple.installer+xml","mpkg"],["application/vnd.apple.mpegurl","m3u8"],[
"application/vnd.aristanetworks.swi","swi"],["application/vnd.audiograph","aep"],["application/vnd.blueice.multipass",
"mpm"],["application/vnd.bmi","bmi"],["application/vnd.businessobjects","rep"],["application/vnd.chemdraw+xml","cdxml"],
["application/vnd.chipnuts.karaoke-mmd","mmd"],["application/vnd.cinderella","cdy"],["application/vnd.claymore","cla"],[
"application/vnd.cloanto.rp9","rp9"],["application/vnd.clonk.c4group","c4g"],[
"application/vnd.cluetrust.cartomobile-config","c11amc"],["application/vnd.cluetrust.cartomobile-config-pkg","c11amz"],[
"application/vnd.commonspace","csp"],["application/vnd.contact.cmsg","cdbcmsg"],["application/vnd.cosmocaller","cmc"],[
"application/vnd.crick.clicker","clkx"],["application/vnd.crick.clicker.keyboard","clkk"],[
"application/vnd.crick.clicker.palette","clkp"],["application/vnd.crick.clicker.template","clkt"],[
"application/vnd.crick.clicker.wordbank","clkw"],["application/vnd.criticaltools.wbs+xml","wbs"],[
"application/vnd.ctc-posml","pml"],["application/vnd.cups-ppd","ppd"],["application/vnd.curl.car","car"],[
"application/vnd.curl.pcurl","pcurl"],["application/vnd.data-vision.rdz","rdz"],[
"application/vnd.denovo.fcselayout-link","fe_launch"],["application/vnd.dna","dna"],["application/vnd.dolby.mlp","mlp"],
["application/vnd.dpgraph","dpg"],["application/vnd.dreamfactory","dfac"],["application/vnd.dvb.ait","ait"],[
"application/vnd.dvb.service","svc"],["application/vnd.dynageo","geo"],["application/vnd.ecowin.chart","mag"],[
"application/vnd.enliven","nml"],["application/vnd.epson.esf","esf"],["application/vnd.epson.msf","msf"],[
"application/vnd.epson.quickanime","qam"],["application/vnd.epson.salt","slt"],["application/vnd.epson.ssf","ssf"],[
"application/vnd.eszigno3+xml","es3"],["application/vnd.ezpix-album","ez2"],["application/vnd.ezpix-package","ez3"],[
"application/vnd.fdf","fdf"],["application/vnd.fdsn.seed","seed"],["application/vnd.flographit","gph"],[
"application/vnd.fluxtime.clip","ftc"],["application/vnd.framemaker","fm"],["application/vnd.frogans.fnc","fnc"],[
"application/vnd.frogans.ltf","ltf"],["application/vnd.fsc.weblaunch","fsc"],["application/vnd.fujitsu.oasys","oas"],[
"application/vnd.fujitsu.oasys2","oa2"],["application/vnd.fujitsu.oasys3","oa3"],["application/vnd.fujitsu.oasysgp",
"fg5"],["application/vnd.fujitsu.oasysprs","bh2"],["application/vnd.fujixerox.ddd","ddd"],[
"application/vnd.fujixerox.docuworks","xdw"],["application/vnd.fujixerox.docuworks.binder","xbd"],[
"application/vnd.fuzzysheet","fzs"],["application/vnd.genomatix.tuxedo","txd"],["application/vnd.geogebra.file","ggb"],[
"application/vnd.geogebra.tool","ggt"],["application/vnd.geometry-explorer","gex"],["application/vnd.geonext","gxt"],[
"application/vnd.geoplan","g2w"],["application/vnd.geospace","g3w"],["application/vnd.gmx","gmx"],[
"application/vnd.google-earth.kml+xml","kml"],["application/vnd.google-earth.kmz","kmz"],["application/vnd.grafeq","gqf"
],["application/vnd.groove-account","gac"],["application/vnd.groove-help","ghf"],[
"application/vnd.groove-identity-message","gim"],["application/vnd.groove-injector","grv"],[
"application/vnd.groove-tool-message","gtm"],["application/vnd.groove-tool-template","tpl"],[
"application/vnd.groove-vcard","vcg"],["application/vnd.hal+xml","hal"],["application/vnd.handheld-entertainment+xml",
"zmm"],["application/vnd.hbci","hbci"],["application/vnd.hhe.lesson-player","les"],["application/vnd.hp-hpgl",["hgl",
"hpg","hpgl"]],["application/vnd.hp-hpid","hpid"],["application/vnd.hp-hps","hps"],["application/vnd.hp-jlyt","jlt"],[
"application/vnd.hp-pcl","pcl"],["application/vnd.hp-pclxl","pclxl"],["application/vnd.hydrostatix.sof-data","sfd-hdstx"
],["application/vnd.hzn-3d-crossword","x3d"],["application/vnd.ibm.minipay","mpy"],["application/vnd.ibm.modcap","afp"],
["application/vnd.ibm.rights-management","irm"],["application/vnd.ibm.secure-container","sc"],[
"application/vnd.iccprofile","icc"],["application/vnd.igloader","igl"],["application/vnd.immervision-ivp","ivp"],[
"application/vnd.immervision-ivu","ivu"],["application/vnd.insors.igm","igm"],["application/vnd.intercon.formnet","xpw"]
,["application/vnd.intergeo","i2g"],["application/vnd.intu.qbo","qbo"],["application/vnd.intu.qfx","qfx"],[
"application/vnd.ipunplugged.rcprofile","rcprofile"],["application/vnd.irepository.package+xml","irp"],[
"application/vnd.is-xpr","xpr"],["application/vnd.isac.fcs","fcs"],["application/vnd.jam","jam"],[
"application/vnd.jcp.javame.midlet-rms","rms"],["application/vnd.jisp","jisp"],["application/vnd.joost.joda-archive",
"joda"],["application/vnd.kahootz","ktz"],["application/vnd.kde.karbon","karbon"],["application/vnd.kde.kchart","chrt"],
["application/vnd.kde.kformula","kfo"],["application/vnd.kde.kivio","flw"],["application/vnd.kde.kontour","kon"],[
"application/vnd.kde.kpresenter","kpr"],["application/vnd.kde.kspread","ksp"],["application/vnd.kde.kword","kwd"],[
"application/vnd.kenameaapp","htke"],["application/vnd.kidspiration","kia"],["application/vnd.kinar","kne"],[
"application/vnd.koan","skp"],["application/vnd.kodak-descriptor","sse"],["application/vnd.las.las+xml","lasxml"],[
"application/vnd.llamagraphics.life-balance.desktop","lbd"],["application/vnd.llamagraphics.life-balance.exchange+xml",
"lbe"],["application/vnd.lotus-1-2-3","123"],["application/vnd.lotus-approach","apr"],["application/vnd.lotus-freelance"
,"pre"],["application/vnd.lotus-notes","nsf"],["application/vnd.lotus-organizer","org"],[
"application/vnd.lotus-screencam","scm"],["application/vnd.lotus-wordpro","lwp"],["application/vnd.macports.portpkg",
"portpkg"],["application/vnd.mcd","mcd"],["application/vnd.medcalcdata","mc1"],["application/vnd.mediastation.cdkey",
"cdkey"],["application/vnd.mfer","mwf"],["application/vnd.mfmp","mfm"],["application/vnd.micrografx.flo","flo"],[
"application/vnd.micrografx.igx","igx"],["application/vnd.mif","mif"],["application/vnd.mobius.daf","daf"],[
"application/vnd.mobius.dis","dis"],["application/vnd.mobius.mbk","mbk"],["application/vnd.mobius.mqy","mqy"],[
"application/vnd.mobius.msl","msl"],["application/vnd.mobius.plc","plc"],["application/vnd.mobius.txf","txf"],[
"application/vnd.mophun.application","mpn"],["application/vnd.mophun.certificate","mpc"],[
"application/vnd.mozilla.xul+xml","xul"],["application/vnd.ms-artgalry","cil"],["application/vnd.ms-cab-compressed",
"cab"],["application/vnd.ms-excel",["xls","xla","xlc","xlm","xlt","xlw","xlb","xll"]],[
"application/vnd.ms-excel.addin.macroenabled.12","xlam"],["application/vnd.ms-excel.sheet.binary.macroenabled.12","xlsb"
],["application/vnd.ms-excel.sheet.macroenabled.12","xlsm"],["application/vnd.ms-excel.template.macroenabled.12","xltm"]
,["application/vnd.ms-fontobject","eot"],["application/vnd.ms-htmlhelp","chm"],["application/vnd.ms-ims","ims"],[
"application/vnd.ms-lrm","lrm"],["application/vnd.ms-officetheme","thmx"],["application/vnd.ms-outlook","msg"],[
"application/vnd.ms-pki.certstore","sst"],["application/vnd.ms-pki.pko","pko"],["application/vnd.ms-pki.seccat","cat"],[
"application/vnd.ms-pki.stl","stl"],["application/vnd.ms-pkicertstore","sst"],["application/vnd.ms-pkiseccat","cat"],[
"application/vnd.ms-pkistl","stl"],["application/vnd.ms-powerpoint",["ppt","pot","pps","ppa","pwz"]],[
"application/vnd.ms-powerpoint.addin.macroenabled.12","ppam"],[
"application/vnd.ms-powerpoint.presentation.macroenabled.12","pptm"],[
"application/vnd.ms-powerpoint.slide.macroenabled.12","sldm"],["application/vnd.ms-powerpoint.slideshow.macroenabled.12"
,"ppsm"],["application/vnd.ms-powerpoint.template.macroenabled.12","potm"],["application/vnd.ms-project","mpp"],[
"application/vnd.ms-word.document.macroenabled.12","docm"],["application/vnd.ms-word.template.macroenabled.12","dotm"],[
"application/vnd.ms-works",["wks","wcm","wdb","wps"]],["application/vnd.ms-wpl","wpl"],["application/vnd.ms-xpsdocument"
,"xps"],["application/vnd.mseq","mseq"],["application/vnd.musician","mus"],["application/vnd.muvee.style","msty"],[
"application/vnd.neurolanguage.nlu","nlu"],["application/vnd.noblenet-directory","nnd"],[
"application/vnd.noblenet-sealer","nns"],["application/vnd.noblenet-web","nnw"],[
"application/vnd.nokia.configuration-message","ncm"],["application/vnd.nokia.n-gage.data","ngdat"],[
"application/vnd.nokia.n-gage.symbian.install","n-gage"],["application/vnd.nokia.radio-preset","rpst"],[
"application/vnd.nokia.radio-presets","rpss"],["application/vnd.nokia.ringing-tone","rng"],[
"application/vnd.novadigm.edm","edm"],["application/vnd.novadigm.edx","edx"],["application/vnd.novadigm.ext","ext"],[
"application/vnd.oasis.opendocument.chart","odc"],["application/vnd.oasis.opendocument.chart-template","otc"],[
"application/vnd.oasis.opendocument.database","odb"],["application/vnd.oasis.opendocument.formula","odf"],[
"application/vnd.oasis.opendocument.formula-template","odft"],["application/vnd.oasis.opendocument.graphics","odg"],[
"application/vnd.oasis.opendocument.graphics-template","otg"],["application/vnd.oasis.opendocument.image","odi"],[
"application/vnd.oasis.opendocument.image-template","oti"],["application/vnd.oasis.opendocument.presentation","odp"],[
"application/vnd.oasis.opendocument.presentation-template","otp"],["application/vnd.oasis.opendocument.spreadsheet",
"ods"],["application/vnd.oasis.opendocument.spreadsheet-template","ots"],["application/vnd.oasis.opendocument.text",
"odt"],["application/vnd.oasis.opendocument.text-master","odm"],["application/vnd.oasis.opendocument.text-template",
"ott"],["application/vnd.oasis.opendocument.text-web","oth"],["application/vnd.olpc-sugar","xo"],[
"application/vnd.oma.dd2+xml","dd2"],["application/vnd.openofficeorg.extension","oxt"],[
"application/vnd.openxmlformats-officedocument.presentationml.presentation","pptx"],[
"application/vnd.openxmlformats-officedocument.presentationml.slide","sldx"],[
"application/vnd.openxmlformats-officedocument.presentationml.slideshow","ppsx"],[
"application/vnd.openxmlformats-officedocument.presentationml.template","potx"],[
"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","xlsx"],[
"application/vnd.openxmlformats-officedocument.spreadsheetml.template","xltx"],[
"application/vnd.openxmlformats-officedocument.wordprocessingml.document","docx"],[
"application/vnd.openxmlformats-officedocument.wordprocessingml.template","dotx"],[
"application/vnd.osgeo.mapguide.package","mgp"],["application/vnd.osgi.dp","dp"],["application/vnd.palm","pdb"],[
"application/vnd.pawaafile","paw"],["application/vnd.pg.format","str"],["application/vnd.pg.osasli","ei6"],[
"application/vnd.picsel","efif"],["application/vnd.pmi.widget","wg"],["application/vnd.pocketlearn","plf"],[
"application/vnd.powerbuilder6","pbd"],["application/vnd.previewsystems.box","box"],["application/vnd.proteus.magazine",
"mgz"],["application/vnd.publishare-delta-tree","qps"],["application/vnd.pvi.ptid1","ptid"],[
"application/vnd.quark.quarkxpress","qxd"],["application/vnd.realvnc.bed","bed"],["application/vnd.recordare.musicxml",
"mxl"],["application/vnd.recordare.musicxml+xml","musicxml"],["application/vnd.rig.cryptonote","cryptonote"],[
"application/vnd.rim.cod","cod"],["application/vnd.rn-realmedia","rm"],["application/vnd.rn-realplayer","rnx"],[
"application/vnd.route66.link66+xml","link66"],["application/vnd.sailingtracker.track","st"],["application/vnd.seemail",
"see"],["application/vnd.sema","sema"],["application/vnd.semd","semd"],["application/vnd.semf","semf"],[
"application/vnd.shana.informed.formdata","ifm"],["application/vnd.shana.informed.formtemplate","itp"],[
"application/vnd.shana.informed.interchange","iif"],["application/vnd.shana.informed.package","ipk"],[
"application/vnd.simtech-mindmapper","twd"],["application/vnd.smaf","mmf"],["application/vnd.smart.teacher","teacher"],[
"application/vnd.solent.sdkm+xml","sdkm"],["application/vnd.spotfire.dxp","dxp"],["application/vnd.spotfire.sfs","sfs"],
["application/vnd.stardivision.calc","sdc"],["application/vnd.stardivision.draw","sda"],[
"application/vnd.stardivision.impress","sdd"],["application/vnd.stardivision.math","smf"],[
"application/vnd.stardivision.writer","sdw"],["application/vnd.stardivision.writer-global","sgl"],[
"application/vnd.stepmania.stepchart","sm"],["application/vnd.sun.xml.calc","sxc"],[
"application/vnd.sun.xml.calc.template","stc"],["application/vnd.sun.xml.draw","sxd"],[
"application/vnd.sun.xml.draw.template","std"],["application/vnd.sun.xml.impress","sxi"],[
"application/vnd.sun.xml.impress.template","sti"],["application/vnd.sun.xml.math","sxm"],[
"application/vnd.sun.xml.writer","sxw"],["application/vnd.sun.xml.writer.global","sxg"],[
"application/vnd.sun.xml.writer.template","stw"],["application/vnd.sus-calendar","sus"],["application/vnd.svd","svd"],[
"application/vnd.symbian.install","sis"],["application/vnd.syncml+xml","xsm"],["application/vnd.syncml.dm+wbxml","bdm"],
["application/vnd.syncml.dm+xml","xdm"],["application/vnd.tao.intent-module-archive","tao"],[
"application/vnd.tmobile-livetv","tmo"],["application/vnd.trid.tpt","tpt"],["application/vnd.triscape.mxs","mxs"],[
"application/vnd.trueapp","tra"],["application/vnd.ufdl","ufd"],["application/vnd.uiq.theme","utz"],[
"application/vnd.umajin","umj"],["application/vnd.unity","unityweb"],["application/vnd.uoml+xml","uoml"],[
"application/vnd.vcx","vcx"],["application/vnd.visio","vsd"],["application/vnd.visionary","vis"],["application/vnd.vsf",
"vsf"],["application/vnd.wap.wbxml","wbxml"],["application/vnd.wap.wmlc","wmlc"],["application/vnd.wap.wmlscriptc",
"wmlsc"],["application/vnd.webturbo","wtb"],["application/vnd.wolfram.player","nbp"],["application/vnd.wordperfect",
"wpd"],["application/vnd.wqd","wqd"],["application/vnd.wt.stf","stf"],["application/vnd.xara",["web","xar"]],[
"application/vnd.xfdl","xfdl"],["application/vnd.yamaha.hv-dic","hvd"],["application/vnd.yamaha.hv-script","hvs"],[
"application/vnd.yamaha.hv-voice","hvp"],["application/vnd.yamaha.openscoreformat","osf"],[
"application/vnd.yamaha.openscoreformat.osfpvg+xml","osfpvg"],["application/vnd.yamaha.smaf-audio","saf"],[
"application/vnd.yamaha.smaf-phrase","spf"],["application/vnd.yellowriver-custom-menu","cmp"],["application/vnd.zul",
"zir"],["application/vnd.zzazz.deck+xml","zaz"],["application/vocaltec-media-desc","vmd"],[
"application/vocaltec-media-file","vmf"],["application/voicexml+xml","vxml"],["application/widget","wgt"],[
"application/winhlp","hlp"],["application/wordperfect",["wp","wp5","wp6","wpd"]],["application/wordperfect6.0",["w60",
"wp5"]],["application/wordperfect6.1","w61"],["application/wsdl+xml","wsdl"],["application/wspolicy+xml","wspolicy"],[
"application/x-123","wk1"],["application/x-7z-compressed","7z"],["application/x-abiword","abw"],[
"application/x-ace-compressed","ace"],["application/x-aim","aim"],["application/x-authorware-bin","aab"],[
"application/x-authorware-map","aam"],["application/x-authorware-seg","aas"],["application/x-bcpio","bcpio"],[
"application/x-binary","bin"],["application/x-binhex40","hqx"],["application/x-bittorrent","torrent"],[
"application/x-bsh",["bsh","sh","shar"]],["application/x-bytecode.elisp","elc"],["applicaiton/x-bytecode.python","pyc"],
["application/x-bzip","bz"],["application/x-bzip2",["boz","bz2"]],["application/x-cdf","cdf"],["application/x-cdlink",
"vcd"],["application/x-chat",["cha","chat"]],["application/x-chess-pgn","pgn"],["application/x-cmu-raster","ras"],[
"application/x-cocoa","cco"],["application/x-compactpro","cpt"],["application/x-compress","z"],[
"application/x-compressed",["tgz","gz","z","zip"]],["application/x-conference","nsc"],["application/x-cpio","cpio"],[
"application/x-cpt","cpt"],["application/x-csh","csh"],["application/x-debian-package","deb"],["application/x-deepv",
"deepv"],["application/x-director",["dir","dcr","dxr"]],["application/x-doom","wad"],["application/x-dtbncx+xml","ncx"],
["application/x-dtbook+xml","dtb"],["application/x-dtbresource+xml","res"],["application/x-dvi","dvi"],[
"application/x-elc","elc"],["application/x-envoy",["env","evy"]],["application/x-esrehber","es"],["application/x-excel",
["xls","xla","xlb","xlc","xld","xlk","xll","xlm","xlt","xlv","xlw"]],["application/x-font-bdf","bdf"],[
"application/x-font-ghostscript","gsf"],["application/x-font-linux-psf","psf"],["application/x-font-otf","otf"],[
"application/x-font-pcf","pcf"],["application/x-font-snf","snf"],["application/x-font-ttf","ttf"],[
"application/x-font-type1","pfa"],["application/x-font-woff","woff"],["application/x-frame","mif"],[
"application/x-freelance","pre"],["application/x-futuresplash","spl"],["application/x-gnumeric","gnumeric"],[
"application/x-gsp","gsp"],["application/x-gss","gss"],["application/x-gtar","gtar"],["application/x-gzip",["gz","gzip"]
],["application/x-hdf","hdf"],["application/x-helpfile",["help","hlp"]],["application/x-httpd-imap","imap"],[
"application/x-ima","ima"],["application/x-internet-signup",["ins","isp"]],["application/x-internett-signup","ins"],[
"application/x-inventor","iv"],["application/x-ip2","ip"],["application/x-iphone","iii"],["application/x-java-class",
"class"],["application/x-java-commerce","jcm"],["application/x-java-jnlp-file","jnlp"],["application/x-javascript","js"]
,["application/x-koan",["skd","skm","skp","skt"]],["application/x-ksh","ksh"],["application/x-latex",["latex","ltx"]],[
"application/x-lha","lha"],["application/x-lisp","lsp"],["application/x-livescreen","ivy"],["application/x-lotus","wq1"]
,["application/x-lotusscreencam","scm"],["application/x-lzh","lzh"],["application/x-lzx","lzx"],[
"application/x-mac-binhex40","hqx"],["application/x-macbinary","bin"],["application/x-magic-cap-package-1.0","mc$"],[
"application/x-mathcad","mcd"],["application/x-meme","mm"],["application/x-midi",["mid","midi"]],["application/x-mif",
"mif"],["application/x-mix-transfer","nix"],["application/x-mobipocket-ebook","prc"],["application/x-mplayer2","asx"],[
"application/x-ms-application","application"],["application/x-ms-wmd","wmd"],["application/x-ms-wmz","wmz"],[
"application/x-ms-xbap","xbap"],["application/x-msaccess","mdb"],["application/x-msbinder","obd"],[
"application/x-mscardfile","crd"],["application/x-msclip","clp"],["application/x-msdownload",["exe","dll"]],[
"application/x-msexcel",["xls","xla","xlw"]],["application/x-msmediaview",["mvb","m13","m14"]],[
"application/x-msmetafile","wmf"],["application/x-msmoney","mny"],["application/x-mspowerpoint","ppt"],[
"application/x-mspublisher","pub"],["application/x-msschedule","scd"],["application/x-msterminal","trm"],[
"application/x-mswrite","wri"],["application/x-navi-animation","ani"],["application/x-navidoc","nvd"],[
"application/x-navimap","map"],["application/x-navistyle","stl"],["application/x-netcdf",["cdf","nc"]],[
"application/x-newton-compatible-pkg","pkg"],["application/x-nokia-9000-communicator-add-on-software","aos"],[
"application/x-omc","omc"],["application/x-omcdatamaker","omcd"],["application/x-omcregerator","omcr"],[
"application/x-pagemaker",["pm4","pm5"]],["application/x-pcl","pcl"],["application/x-perfmon",["pma","pmc","pml","pmr",
"pmw"]],["application/x-pixclscript","plx"],["application/x-pkcs10","p10"],["application/x-pkcs12",["p12","pfx"]],[
"application/x-pkcs7-certificates",["p7b","spc"]],["application/x-pkcs7-certreqresp","p7r"],["application/x-pkcs7-mime",
["p7m","p7c"]],["application/x-pkcs7-signature",["p7s","p7a"]],["application/x-pointplus","css"],[
"application/x-portable-anymap","pnm"],["application/x-project",["mpc","mpt","mpv","mpx"]],["application/x-qpro","wb1"],
["application/x-rar-compressed","rar"],["application/x-rtf","rtf"],["application/x-sdp","sdp"],["application/x-sea",
"sea"],["application/x-seelogo","sl"],["application/x-sh","sh"],["application/x-shar",["shar","sh"]],[
"application/x-shockwave-flash","swf"],["application/x-silverlight-app","xap"],["application/x-sit","sit"],[
"application/x-sprite",["spr","sprite"]],["application/x-stuffit","sit"],["application/x-stuffitx","sitx"],[
"application/x-sv4cpio","sv4cpio"],["application/x-sv4crc","sv4crc"],["application/x-tar","tar"],["application/x-tbook",
["sbk","tbk"]],["application/x-tcl","tcl"],["application/x-tex","tex"],["application/x-tex-tfm","tfm"],[
"application/x-texinfo",["texi","texinfo"]],["application/x-troff",["roff","t","tr"]],["application/x-troff-man","man"],
["application/x-troff-me","me"],["application/x-troff-ms","ms"],["application/x-troff-msvideo","avi"],[
"application/x-ustar","ustar"],["application/x-visio",["vsd","vst","vsw"]],["application/x-vnd.audioexplosion.mzz","mzz"
],["application/x-vnd.ls-xpix","xpix"],["application/x-vrml","vrml"],["application/x-wais-source",["src","wsrc"]],[
"application/x-winhelp","hlp"],["application/x-wintalk","wtk"],["application/x-world",["wrl","svr"]],[
"application/x-wpwin","wpd"],["application/x-wri","wri"],["application/x-x509-ca-cert",["cer","crt","der"]],[
"application/x-x509-user-cert","crt"],["application/x-xfig","fig"],["application/x-xpinstall","xpi"],[
"application/x-zip-compressed","zip"],["application/xcap-diff+xml","xdf"],["application/xenc+xml","xenc"],[
"application/xhtml+xml","xhtml"],["application/xml","xml"],["application/xml-dtd","dtd"],["application/xop+xml","xop"],[
"application/xslt+xml","xslt"],["application/xspf+xml","xspf"],["application/xv+xml","mxml"],["application/yang","yang"]
,["application/yin+xml","yin"],["application/ynd.ms-pkipko","pko"],["application/zip","zip"],["audio/adpcm","adp"],[
"audio/aiff",["aiff","aif","aifc"]],["audio/basic",["snd","au"]],["audio/it","it"],["audio/make",["funk","my","pfunk"]],
["audio/make.my.funk","pfunk"],["audio/mid",["mid","rmi"]],["audio/midi",["midi","kar","mid"]],["audio/mod","mod"],[
"audio/mp4","mp4a"],["audio/mpeg",["mpga","mp3","m2a","mp2","mpa","mpg"]],["audio/mpeg3","mp3"],["audio/nspaudio",["la",
"lma"]],["audio/ogg","oga"],["audio/s3m","s3m"],["audio/tsp-audio","tsi"],["audio/tsplayer","tsp"],[
"audio/vnd.dece.audio","uva"],["audio/vnd.digital-winds","eol"],["audio/vnd.dra","dra"],["audio/vnd.dts","dts"],[
"audio/vnd.dts.hd","dtshd"],["audio/vnd.lucent.voice","lvp"],["audio/vnd.ms-playready.media.pya","pya"],[
"audio/vnd.nuera.ecelp4800","ecelp4800"],["audio/vnd.nuera.ecelp7470","ecelp7470"],["audio/vnd.nuera.ecelp9600",
"ecelp9600"],["audio/vnd.qcelp","qcp"],["audio/vnd.rip","rip"],["audio/voc","voc"],["audio/voxware","vox"],["audio/wav",
"wav"],["audio/webm","weba"],["audio/x-aac","aac"],["audio/x-adpcm","snd"],["audio/x-aiff",["aiff","aif","aifc"]],[
"audio/x-au","au"],["audio/x-gsm",["gsd","gsm"]],["audio/x-jam","jam"],["audio/x-liveaudio","lam"],["audio/x-mid",["mid"
,"midi"]],["audio/x-midi",["midi","mid"]],["audio/x-mod","mod"],["audio/x-mpeg","mp2"],["audio/x-mpeg-3","mp3"],[
"audio/x-mpegurl","m3u"],["audio/x-mpequrl","m3u"],["audio/x-ms-wax","wax"],["audio/x-ms-wma","wma"],["audio/x-nspaudio"
,["la","lma"]],["audio/x-pn-realaudio",["ra","ram","rm","rmm","rmp"]],["audio/x-pn-realaudio-plugin",["ra","rmp","rpm"]]
,["audio/x-psid","sid"],["audio/x-realaudio","ra"],["audio/x-twinvq","vqf"],["audio/x-twinvq-plugin",["vqe","vql"]],[
"audio/x-vnd.audioexplosion.mjuicemediafile","mjf"],["audio/x-voc","voc"],["audio/x-wav","wav"],["audio/xm","xm"],[
"chemical/x-cdx","cdx"],["chemical/x-cif","cif"],["chemical/x-cmdf","cmdf"],["chemical/x-cml","cml"],["chemical/x-csml",
"csml"],["chemical/x-pdb",["pdb","xyz"]],["chemical/x-xyz","xyz"],["drawing/x-dwf","dwf"],["i-world/i-vrml","ivr"],[
"image/bmp",["bmp","bm"]],["image/cgm","cgm"],["image/cis-cod","cod"],["image/cmu-raster",["ras","rast"]],["image/fif",
"fif"],["image/florian",["flo","turbot"]],["image/g3fax","g3"],["image/gif","gif"],["image/ief",["ief","iefs"]],[
"image/jpeg",["jpeg","jpe","jpg","jfif","jfif-tbnl"]],["image/jutvision","jut"],["image/ktx","ktx"],["image/naplps",[
"nap","naplps"]],["image/pict",["pic","pict"]],["image/pipeg","jfif"],["image/pjpeg",["jfif","jpe","jpeg","jpg"]],[
"image/png",["png","x-png"]],["image/prs.btif","btif"],["image/svg+xml","svg"],["image/tiff",["tif","tiff"]],[
"image/vasa","mcf"],["image/vnd.adobe.photoshop","psd"],["image/vnd.dece.graphic","uvi"],["image/vnd.djvu","djvu"],[
"image/vnd.dvb.subtitle","sub"],["image/vnd.dwg",["dwg","dxf","svf"]],["image/vnd.dxf","dxf"],["image/vnd.fastbidsheet",
"fbs"],["image/vnd.fpx","fpx"],["image/vnd.fst","fst"],["image/vnd.fujixerox.edmics-mmr","mmr"],[
"image/vnd.fujixerox.edmics-rlc","rlc"],["image/vnd.ms-modi","mdi"],["image/vnd.net-fpx",["fpx","npx"]],[
"image/vnd.rn-realflash","rf"],["image/vnd.rn-realpix","rp"],["image/vnd.wap.wbmp","wbmp"],["image/vnd.xiff","xif"],[
"image/webp","webp"],["image/x-cmu-raster","ras"],["image/x-cmx","cmx"],["image/x-dwg",["dwg","dxf","svf"]],[
"image/x-freehand","fh"],["image/x-icon","ico"],["image/x-jg","art"],["image/x-jps","jps"],["image/x-niff",["niff","nif"
]],["image/x-pcx","pcx"],["image/x-pict",["pct","pic"]],["image/x-portable-anymap","pnm"],["image/x-portable-bitmap",
"pbm"],["image/x-portable-graymap","pgm"],["image/x-portable-greymap","pgm"],["image/x-portable-pixmap","ppm"],[
"image/x-quicktime",["qif","qti","qtif"]],["image/x-rgb","rgb"],["image/x-tiff",["tif","tiff"]],["image/x-windows-bmp",
"bmp"],["image/x-xbitmap","xbm"],["image/x-xbm","xbm"],["image/x-xpixmap",["xpm","pm"]],["image/x-xwd","xwd"],[
"image/x-xwindowdump","xwd"],["image/xbm","xbm"],["image/xpm","xpm"],["message/rfc822",["eml","mht","mhtml","nws","mime"
]],["model/iges",["iges","igs"]],["model/mesh","msh"],["model/vnd.collada+xml","dae"],["model/vnd.dwf","dwf"],[
"model/vnd.gdl","gdl"],["model/vnd.gtw","gtw"],["model/vnd.mts","mts"],["model/vnd.vtu","vtu"],["model/vrml",["vrml",
"wrl","wrz"]],["model/x-pov","pov"],["multipart/x-gzip","gzip"],["multipart/x-ustar","ustar"],["multipart/x-zip","zip"],
["music/crescendo",["mid","midi"]],["music/x-karaoke","kar"],["paleovu/x-pv","pvu"],["text/asp","asp"],["text/calendar",
"ics"],["text/css","css"],["text/csv","csv"],["text/ecmascript","js"],["text/h323","323"],["text/html",["html","htm",
"stm","acgi","htmls","htx","shtml"]],["text/iuls","uls"],["text/javascript","js"],["text/mcf","mcf"],["text/n3","n3"],[
"text/pascal","pas"],["text/plain",["txt","bas","c","h","c++","cc","com","conf","cxx","def","f","f90","for","g","hh",
"idc","jav","java","list","log","lst","m","mar","pl","sdml","text"]],["text/plain-bas","par"],["text/prs.lines.tag",
"dsc"],["text/richtext",["rtx","rt","rtf"]],["text/scriplet","wsc"],["text/scriptlet","sct"],["text/sgml",["sgm","sgml"]
],["text/tab-separated-values","tsv"],["text/troff","t"],["text/turtle","ttl"],["text/uri-list",["uni","unis","uri",
"uris"]],["text/vnd.abc","abc"],["text/vnd.curl","curl"],["text/vnd.curl.dcurl","dcurl"],["text/vnd.curl.mcurl","mcurl"]
,["text/vnd.curl.scurl","scurl"],["text/vnd.fly","fly"],["text/vnd.fmi.flexstor","flx"],["text/vnd.graphviz","gv"],[
"text/vnd.in3d.3dml","3dml"],["text/vnd.in3d.spot","spot"],["text/vnd.rn-realtext","rt"],[
"text/vnd.sun.j2me.app-descriptor","jad"],["text/vnd.wap.wml","wml"],["text/vnd.wap.wmlscript","wmls"],[
"text/webviewhtml","htt"],["text/x-asm",["asm","s"]],["text/x-audiosoft-intra","aip"],["text/x-c",["c","cc","cpp"]],[
"text/x-component","htc"],["text/x-fortran",["for","f","f77","f90"]],["text/x-h",["h","hh"]],["text/x-java-source",[
"java","jav"]],["text/x-java-source,java","java"],["text/x-la-asf","lsx"],["text/x-m","m"],["text/x-pascal","p"],[
"text/x-script","hlb"],["text/x-script.csh","csh"],["text/x-script.elisp","el"],["text/x-script.guile","scm"],[
"text/x-script.ksh","ksh"],["text/x-script.lisp","lsp"],["text/x-script.perl","pl"],["text/x-script.perl-module","pm"],[
"text/x-script.phyton","py"],["text/x-script.rexx","rexx"],["text/x-script.scheme","scm"],["text/x-script.sh","sh"],[
"text/x-script.tcl","tcl"],["text/x-script.tcsh","tcsh"],["text/x-script.zsh","zsh"],["text/x-server-parsed-html",[
"shtml","ssi"]],["text/x-setext","etx"],["text/x-sgml",["sgm","sgml"]],["text/x-speech",["spc","talk"]],["text/x-uil",
"uil"],["text/x-uuencode",["uu","uue"]],["text/x-vcalendar","vcs"],["text/x-vcard","vcf"],["text/xml","xml"],[
"video/3gpp","3gp"],["video/3gpp2","3g2"],["video/animaflex","afl"],["video/avi","avi"],["video/avs-video","avs"],[
"video/dl","dl"],["video/fli","fli"],["video/gl","gl"],["video/h261","h261"],["video/h263","h263"],["video/h264","h264"]
,["video/jpeg","jpgv"],["video/jpm","jpm"],["video/mj2","mj2"],["video/mp4","mp4"],["video/mpeg",["mpeg","mp2","mpa",
"mpe","mpg","mpv2","m1v","m2v","mp3"]],["video/msvideo","avi"],["video/ogg","ogv"],["video/quicktime",["mov","qt","moov"
]],["video/vdo","vdo"],["video/vivo",["viv","vivo"]],["video/vnd.dece.hd","uvh"],["video/vnd.dece.mobile","uvm"],[
"video/vnd.dece.pd","uvp"],["video/vnd.dece.sd","uvs"],["video/vnd.dece.video","uvv"],["video/vnd.fvt","fvt"],[
"video/vnd.mpegurl","mxu"],["video/vnd.ms-playready.media.pyv","pyv"],["video/vnd.rn-realvideo","rv"],[
"video/vnd.uvvu.mp4","uvu"],["video/vnd.vivo",["viv","vivo"]],["video/vosaic","vos"],["video/webm","webm"],[
"video/x-amt-demorun","xdr"],["video/x-amt-showrun","xsr"],["video/x-atomic3d-feature","fmf"],["video/x-dl","dl"],[
"video/x-dv",["dif","dv"]],["video/x-f4v","f4v"],["video/x-fli","fli"],["video/x-flv","flv"],["video/x-gl","gl"],[
"video/x-isvideo","isu"],["video/x-la-asf",["lsf","lsx"]],["video/x-m4v","m4v"],["video/x-motion-jpeg","mjpg"],[
"video/x-mpeg",["mp3","mp2"]],["video/x-mpeq2a","mp2"],["video/x-ms-asf",["asf","asr","asx"]],["video/x-ms-asf-plugin",
"asx"],["video/x-ms-wm","wm"],["video/x-ms-wmv","wmv"],["video/x-ms-wmx","wmx"],["video/x-ms-wvx","wvx"],[
"video/x-msvideo","avi"],["video/x-qtc","qtc"],["video/x-scm","scm"],["video/x-sgi-movie",["movie","mv"]],[
"windows/metafile","wmf"],["www/mime","mime"],["x-conference/x-cooltalk","ice"],["x-music/x-midi",["mid","midi"]],[
"x-world/x-3dmf",["3dm","3dmf","qd3","qd3d"]],["x-world/x-svr","svr"],["x-world/x-vrml",["flr","vrml","wrl","wrz","xaf",
"xof"]],["x-world/x-vrt","vrt"],["xgl/drawing","xgz"],["xgl/movie","xmz"]]),$d=new Map([["123",
"application/vnd.lotus-1-2-3"],["323","text/h323"],["*","application/octet-stream"],["3dm","x-world/x-3dmf"],["3dmf",
"x-world/x-3dmf"],["3dml","text/vnd.in3d.3dml"],["3g2","video/3gpp2"],["3gp","video/3gpp"],["7z",
"application/x-7z-compressed"],["a","application/octet-stream"],["aab","application/x-authorware-bin"],["aac",
"audio/x-aac"],["aam","application/x-authorware-map"],["aas","application/x-authorware-seg"],["abc","text/vnd.abc"],[
"abw","application/x-abiword"],["ac","application/pkix-attr-cert"],["acc","application/vnd.americandynamics.acc"],["ace"
,"application/x-ace-compressed"],["acgi","text/html"],["acu","application/vnd.acucobol"],["acx",
"application/internet-property-stream"],["adp","audio/adpcm"],["aep","application/vnd.audiograph"],["afl",
"video/animaflex"],["afp","application/vnd.ibm.modcap"],["ahead","application/vnd.ahead.space"],["ai",
"application/postscript"],["aif",["audio/aiff","audio/x-aiff"]],["aifc",["audio/aiff","audio/x-aiff"]],["aiff",[
"audio/aiff","audio/x-aiff"]],["aim","application/x-aim"],["aip","text/x-audiosoft-intra"],["air",
"application/vnd.adobe.air-application-installer-package+zip"],["ait","application/vnd.dvb.ait"],["ami",
"application/vnd.amiga.ami"],["ani","application/x-navi-animation"],["aos",
"application/x-nokia-9000-communicator-add-on-software"],["apk","application/vnd.android.package-archive"],[
"application","application/x-ms-application"],["apr","application/vnd.lotus-approach"],["aps","application/mime"],["arc"
,"application/octet-stream"],["arj",["application/arj","application/octet-stream"]],["art","image/x-jg"],["asf",
"video/x-ms-asf"],["asm","text/x-asm"],["aso","application/vnd.accpac.simply.aso"],["asp","text/asp"],["asr",
"video/x-ms-asf"],["asx",["video/x-ms-asf","application/x-mplayer2","video/x-ms-asf-plugin"]],["atc",
"application/vnd.acucorp"],["atomcat","application/atomcat+xml"],["atomsvc","application/atomsvc+xml"],["atx",
"application/vnd.antix.game-component"],["au",["audio/basic","audio/x-au"]],["avi",["video/avi","video/msvideo",
"application/x-troff-msvideo","video/x-msvideo"]],["avs","video/avs-video"],["aw","application/applixware"],["axs",
"application/olescript"],["azf","application/vnd.airzip.filesecure.azf"],["azs","application/vnd.airzip.filesecure.azs"]
,["azw","application/vnd.amazon.ebook"],["bas","text/plain"],["bcpio","application/x-bcpio"],["bdf",
"application/x-font-bdf"],["bdm","application/vnd.syncml.dm+wbxml"],["bed","application/vnd.realvnc.bed"],["bh2",
"application/vnd.fujitsu.oasysprs"],["bin",["application/octet-stream","application/mac-binary","application/macbinary",
"application/x-macbinary","application/x-binary"]],["bm","image/bmp"],["bmi","application/vnd.bmi"],["bmp",["image/bmp",
"image/x-windows-bmp"]],["boo","application/book"],["book","application/book"],["box",
"application/vnd.previewsystems.box"],["boz","application/x-bzip2"],["bsh","application/x-bsh"],["btif","image/prs.btif"
],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["c",["text/plain","text/x-c"]],["c++","text/plain"],[
"c11amc","application/vnd.cluetrust.cartomobile-config"],["c11amz","application/vnd.cluetrust.cartomobile-config-pkg"],[
"c4g","application/vnd.clonk.c4group"],["cab","application/vnd.ms-cab-compressed"],["car","application/vnd.curl.car"],[
"cat",["application/vnd.ms-pkiseccat","application/vnd.ms-pki.seccat"]],["cc",["text/plain","text/x-c"]],["ccad",
"application/clariscad"],["cco","application/x-cocoa"],["ccxml","application/ccxml+xml,"],["cdbcmsg",
"application/vnd.contact.cmsg"],["cdf",["application/cdf","application/x-cdf","application/x-netcdf"]],["cdkey",
"application/vnd.mediastation.cdkey"],["cdmia","application/cdmi-capability"],["cdmic","application/cdmi-container"],[
"cdmid","application/cdmi-domain"],["cdmio","application/cdmi-object"],["cdmiq","application/cdmi-queue"],["cdx",
"chemical/x-cdx"],["cdxml","application/vnd.chemdraw+xml"],["cdy","application/vnd.cinderella"],["cer",[
"application/pkix-cert","application/x-x509-ca-cert"]],["cgm","image/cgm"],["cha","application/x-chat"],["chat",
"application/x-chat"],["chm","application/vnd.ms-htmlhelp"],["chrt","application/vnd.kde.kchart"],["cif",
"chemical/x-cif"],["cii","application/vnd.anser-web-certificate-issue-initiation"],["cil","application/vnd.ms-artgalry"]
,["cla","application/vnd.claymore"],["class",["application/octet-stream","application/java","application/java-byte-code"
,"application/java-vm","application/x-java-class"]],["clkk","application/vnd.crick.clicker.keyboard"],["clkp",
"application/vnd.crick.clicker.palette"],["clkt","application/vnd.crick.clicker.template"],["clkw",
"application/vnd.crick.clicker.wordbank"],["clkx","application/vnd.crick.clicker"],["clp","application/x-msclip"],["cmc"
,"application/vnd.cosmocaller"],["cmdf","chemical/x-cmdf"],["cml","chemical/x-cml"],["cmp",
"application/vnd.yellowriver-custom-menu"],["cmx","image/x-cmx"],["cod",["image/cis-cod","application/vnd.rim.cod"]],[
"com",["application/octet-stream","text/plain"]],["conf","text/plain"],["cpio","application/x-cpio"],["cpp","text/x-c"],
["cpt",["application/mac-compactpro","application/x-compactpro","application/x-cpt"]],["crd","application/x-mscardfile"]
,["crl",["application/pkix-crl","application/pkcs-crl"]],["crt",["application/pkix-cert","application/x-x509-user-cert",
"application/x-x509-ca-cert"]],["cryptonote","application/vnd.rig.cryptonote"],["csh",["text/x-script.csh",
"application/x-csh"]],["csml","chemical/x-csml"],["csp","application/vnd.commonspace"],["css",["text/css",
"application/x-pointplus"]],["csv","text/csv"],["cu","application/cu-seeme"],["curl","text/vnd.curl"],["cww",
"application/prs.cww"],["cxx","text/plain"],["dae","model/vnd.collada+xml"],["daf","application/vnd.mobius.daf"],[
"davmount","application/davmount+xml"],["dcr","application/x-director"],["dcurl","text/vnd.curl.dcurl"],["dd2",
"application/vnd.oma.dd2+xml"],["ddd","application/vnd.fujixerox.ddd"],["deb","application/x-debian-package"],["deepv",
"application/x-deepv"],["def","text/plain"],["der","application/x-x509-ca-cert"],["dfac","application/vnd.dreamfactory"]
,["dif","video/x-dv"],["dir","application/x-director"],["dis","application/vnd.mobius.dis"],["djvu","image/vnd.djvu"],[
"dl",["video/dl","video/x-dl"]],["dll","application/x-msdownload"],["dms","application/octet-stream"],["dna",
"application/vnd.dna"],["doc","application/msword"],["docm","application/vnd.ms-word.document.macroenabled.12"],["docx",
"application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["dot","application/msword"],["dotm",
"application/vnd.ms-word.template.macroenabled.12"],["dotx",
"application/vnd.openxmlformats-officedocument.wordprocessingml.template"],["dp",["application/commonground",
"application/vnd.osgi.dp"]],["dpg","application/vnd.dpgraph"],["dra","audio/vnd.dra"],["drw","application/drafting"],[
"dsc","text/prs.lines.tag"],["dssc","application/dssc+der"],["dtb","application/x-dtbook+xml"],["dtd",
"application/xml-dtd"],["dts","audio/vnd.dts"],["dtshd","audio/vnd.dts.hd"],["dump","application/octet-stream"],["dv",
"video/x-dv"],["dvi","application/x-dvi"],["dwf",["model/vnd.dwf","drawing/x-dwf"]],["dwg",["application/acad",
"image/vnd.dwg","image/x-dwg"]],["dxf",["application/dxf","image/vnd.dwg","image/vnd.dxf","image/x-dwg"]],["dxp",
"application/vnd.spotfire.dxp"],["dxr","application/x-director"],["ecelp4800","audio/vnd.nuera.ecelp4800"],["ecelp7470",
"audio/vnd.nuera.ecelp7470"],["ecelp9600","audio/vnd.nuera.ecelp9600"],["edm","application/vnd.novadigm.edm"],["edx",
"application/vnd.novadigm.edx"],["efif","application/vnd.picsel"],["ei6","application/vnd.pg.osasli"],["el",
"text/x-script.elisp"],["elc",["application/x-elc","application/x-bytecode.elisp"]],["eml","message/rfc822"],["emma",
"application/emma+xml"],["env","application/x-envoy"],["eol","audio/vnd.digital-winds"],["eot",
"application/vnd.ms-fontobject"],["eps","application/postscript"],["epub","application/epub+zip"],["es",[
"application/ecmascript","application/x-esrehber"]],["es3","application/vnd.eszigno3+xml"],["esf",
"application/vnd.epson.esf"],["etx","text/x-setext"],["evy",["application/envoy","application/x-envoy"]],["exe",[
"application/octet-stream","application/x-msdownload"]],["exi","application/exi"],["ext","application/vnd.novadigm.ext"]
,["ez2","application/vnd.ezpix-album"],["ez3","application/vnd.ezpix-package"],["f",["text/plain","text/x-fortran"]],[
"f4v","video/x-f4v"],["f77","text/x-fortran"],["f90",["text/plain","text/x-fortran"]],["fbs","image/vnd.fastbidsheet"],[
"fcs","application/vnd.isac.fcs"],["fdf","application/vnd.fdf"],["fe_launch","application/vnd.denovo.fcselayout-link"],[
"fg5","application/vnd.fujitsu.oasysgp"],["fh","image/x-freehand"],["fif",["application/fractals","image/fif"]],["fig",
"application/x-xfig"],["fli",["video/fli","video/x-fli"]],["flo",["image/florian","application/vnd.micrografx.flo"]],[
"flr","x-world/x-vrml"],["flv","video/x-flv"],["flw","application/vnd.kde.kivio"],["flx","text/vnd.fmi.flexstor"],["fly"
,"text/vnd.fly"],["fm","application/vnd.framemaker"],["fmf","video/x-atomic3d-feature"],["fnc",
"application/vnd.frogans.fnc"],["for",["text/plain","text/x-fortran"]],["fpx",["image/vnd.fpx","image/vnd.net-fpx"]],[
"frl","application/freeloader"],["fsc","application/vnd.fsc.weblaunch"],["fst","image/vnd.fst"],["ftc",
"application/vnd.fluxtime.clip"],["fti","application/vnd.anser-web-funds-transfer-initiation"],["funk","audio/make"],[
"fvt","video/vnd.fvt"],["fxp","application/vnd.adobe.fxp"],["fzs","application/vnd.fuzzysheet"],["g","text/plain"],[
"g2w","application/vnd.geoplan"],["g3","image/g3fax"],["g3w","application/vnd.geospace"],["gac",
"application/vnd.groove-account"],["gdl","model/vnd.gdl"],["geo","application/vnd.dynageo"],["gex",
"application/vnd.geometry-explorer"],["ggb","application/vnd.geogebra.file"],["ggt","application/vnd.geogebra.tool"],[
"ghf","application/vnd.groove-help"],["gif","image/gif"],["gim","application/vnd.groove-identity-message"],["gl",[
"video/gl","video/x-gl"]],["gmx","application/vnd.gmx"],["gnumeric","application/x-gnumeric"],["gph",
"application/vnd.flographit"],["gqf","application/vnd.grafeq"],["gram","application/srgs"],["grv",
"application/vnd.groove-injector"],["grxml","application/srgs+xml"],["gsd","audio/x-gsm"],["gsf",
"application/x-font-ghostscript"],["gsm","audio/x-gsm"],["gsp","application/x-gsp"],["gss","application/x-gss"],["gtar",
"application/x-gtar"],["gtm","application/vnd.groove-tool-message"],["gtw","model/vnd.gtw"],["gv","text/vnd.graphviz"],[
"gxt","application/vnd.geonext"],["gz",["application/x-gzip","application/x-compressed"]],["gzip",["multipart/x-gzip",
"application/x-gzip"]],["h",["text/plain","text/x-h"]],["h261","video/h261"],["h263","video/h263"],["h264","video/h264"]
,["hal","application/vnd.hal+xml"],["hbci","application/vnd.hbci"],["hdf","application/x-hdf"],["help",
"application/x-helpfile"],["hgl","application/vnd.hp-hpgl"],["hh",["text/plain","text/x-h"]],["hlb","text/x-script"],[
"hlp",["application/winhlp","application/hlp","application/x-helpfile","application/x-winhelp"]],["hpg",
"application/vnd.hp-hpgl"],["hpgl","application/vnd.hp-hpgl"],["hpid","application/vnd.hp-hpid"],["hps",
"application/vnd.hp-hps"],["hqx",["application/mac-binhex40","application/binhex","application/binhex4",
"application/mac-binhex","application/x-binhex40","application/x-mac-binhex40"]],["hta","application/hta"],["htc",
"text/x-component"],["htke","application/vnd.kenameaapp"],["htm","text/html"],["html","text/html"],["htmls","text/html"]
,["htt","text/webviewhtml"],["htx","text/html"],["hvd","application/vnd.yamaha.hv-dic"],["hvp",
"application/vnd.yamaha.hv-voice"],["hvs","application/vnd.yamaha.hv-script"],["i2g","application/vnd.intergeo"],["icc",
"application/vnd.iccprofile"],["ice","x-conference/x-cooltalk"],["ico","image/x-icon"],["ics","text/calendar"],["idc",
"text/plain"],["ief","image/ief"],["iefs","image/ief"],["ifm","application/vnd.shana.informed.formdata"],["iges",[
"application/iges","model/iges"]],["igl","application/vnd.igloader"],["igm","application/vnd.insors.igm"],["igs",[
"application/iges","model/iges"]],["igx","application/vnd.micrografx.igx"],["iif",
"application/vnd.shana.informed.interchange"],["iii","application/x-iphone"],["ima","application/x-ima"],["imap",
"application/x-httpd-imap"],["imp","application/vnd.accpac.simply.imp"],["ims","application/vnd.ms-ims"],["inf",
"application/inf"],["ins",["application/x-internet-signup","application/x-internett-signup"]],["ip","application/x-ip2"]
,["ipfix","application/ipfix"],["ipk","application/vnd.shana.informed.package"],["irm",
"application/vnd.ibm.rights-management"],["irp","application/vnd.irepository.package+xml"],["isp",
"application/x-internet-signup"],["isu","video/x-isvideo"],["it","audio/it"],["itp",
"application/vnd.shana.informed.formtemplate"],["iv","application/x-inventor"],["ivp","application/vnd.immervision-ivp"]
,["ivr","i-world/i-vrml"],["ivu","application/vnd.immervision-ivu"],["ivy","application/x-livescreen"],["jad",
"text/vnd.sun.j2me.app-descriptor"],["jam",["application/vnd.jam","audio/x-jam"]],["jar","application/java-archive"],[
"jav",["text/plain","text/x-java-source"]],["java",["text/plain","text/x-java-source,java","text/x-java-source"]],["jcm"
,"application/x-java-commerce"],["jfif",["image/pipeg","image/jpeg","image/pjpeg"]],["jfif-tbnl","image/jpeg"],["jisp",
"application/vnd.jisp"],["jlt","application/vnd.hp-jlyt"],["jnlp","application/x-java-jnlp-file"],["joda",
"application/vnd.joost.joda-archive"],["jpe",["image/jpeg","image/pjpeg"]],["jpeg",["image/jpeg","image/pjpeg"]],["jpg",
["image/jpeg","image/pjpeg"]],["jpgv","video/jpeg"],["jpm","video/jpm"],["jps","image/x-jps"],["js",[
"application/javascript","application/ecmascript","text/javascript","text/ecmascript","application/x-javascript"]],[
"json","application/json"],["jut","image/jutvision"],["kar",["audio/midi","music/x-karaoke"]],["karbon",
"application/vnd.kde.karbon"],["kfo","application/vnd.kde.kformula"],["kia","application/vnd.kidspiration"],["kml",
"application/vnd.google-earth.kml+xml"],["kmz","application/vnd.google-earth.kmz"],["kne","application/vnd.kinar"],[
"kon","application/vnd.kde.kontour"],["kpr","application/vnd.kde.kpresenter"],["ksh",["application/x-ksh",
"text/x-script.ksh"]],["ksp","application/vnd.kde.kspread"],["ktx","image/ktx"],["ktz","application/vnd.kahootz"],["kwd"
,"application/vnd.kde.kword"],["la",["audio/nspaudio","audio/x-nspaudio"]],["lam","audio/x-liveaudio"],["lasxml",
"application/vnd.las.las+xml"],["latex","application/x-latex"],["lbd",
"application/vnd.llamagraphics.life-balance.desktop"],["lbe","application/vnd.llamagraphics.life-balance.exchange+xml"],
["les","application/vnd.hhe.lesson-player"],["lha",["application/octet-stream","application/lha","application/x-lha"]],[
"lhx","application/octet-stream"],["link66","application/vnd.route66.link66+xml"],["list","text/plain"],["lma",[
"audio/nspaudio","audio/x-nspaudio"]],["log","text/plain"],["lrm","application/vnd.ms-lrm"],["lsf","video/x-la-asf"],[
"lsp",["application/x-lisp","text/x-script.lisp"]],["lst","text/plain"],["lsx",["video/x-la-asf","text/x-la-asf"]],[
"ltf","application/vnd.frogans.ltf"],["ltx","application/x-latex"],["lvp","audio/vnd.lucent.voice"],["lwp",
"application/vnd.lotus-wordpro"],["lzh",["application/octet-stream","application/x-lzh"]],["lzx",["application/lzx",
"application/octet-stream","application/x-lzx"]],["m",["text/plain","text/x-m"]],["m13","application/x-msmediaview"],[
"m14","application/x-msmediaview"],["m1v","video/mpeg"],["m21","application/mp21"],["m2a","audio/mpeg"],["m2v",
"video/mpeg"],["m3u",["audio/x-mpegurl","audio/x-mpequrl"]],["m3u8","application/vnd.apple.mpegurl"],["m4v",
"video/x-m4v"],["ma","application/mathematica"],["mads","application/mads+xml"],["mag","application/vnd.ecowin.chart"],[
"man","application/x-troff-man"],["map","application/x-navimap"],["mar","text/plain"],["mathml","application/mathml+xml"
],["mbd","application/mbedlet"],["mbk","application/vnd.mobius.mbk"],["mbox","application/mbox"],["mc$",
"application/x-magic-cap-package-1.0"],["mc1","application/vnd.medcalcdata"],["mcd",["application/mcad",
"application/vnd.mcd","application/x-mathcad"]],["mcf",["image/vasa","text/mcf"]],["mcp","application/netmc"],["mcurl",
"text/vnd.curl.mcurl"],["mdb","application/x-msaccess"],["mdi","image/vnd.ms-modi"],["me","application/x-troff-me"],[
"meta4","application/metalink4+xml"],["mets","application/mets+xml"],["mfm","application/vnd.mfmp"],["mgp",
"application/vnd.osgeo.mapguide.package"],["mgz","application/vnd.proteus.magazine"],["mht","message/rfc822"],["mhtml",
"message/rfc822"],["mid",["audio/mid","audio/midi","music/crescendo","x-music/x-midi","audio/x-midi",
"application/x-midi","audio/x-mid"]],["midi",["audio/midi","music/crescendo","x-music/x-midi","audio/x-midi",
"application/x-midi","audio/x-mid"]],["mif",["application/vnd.mif","application/x-mif","application/x-frame"]],["mime",[
"message/rfc822","www/mime"]],["mj2","video/mj2"],["mjf","audio/x-vnd.audioexplosion.mjuicemediafile"],["mjpg",
"video/x-motion-jpeg"],["mlp","application/vnd.dolby.mlp"],["mm",["application/base64","application/x-meme"]],["mmd",
"application/vnd.chipnuts.karaoke-mmd"],["mme","application/base64"],["mmf","application/vnd.smaf"],["mmr",
"image/vnd.fujixerox.edmics-mmr"],["mny","application/x-msmoney"],["mod",["audio/mod","audio/x-mod"]],["mods",
"application/mods+xml"],["moov","video/quicktime"],["mov","video/quicktime"],["movie","video/x-sgi-movie"],["mp2",[
"video/mpeg","audio/mpeg","video/x-mpeg","audio/x-mpeg","video/x-mpeq2a"]],["mp3",["audio/mpeg","audio/mpeg3",
"video/mpeg","audio/x-mpeg-3","video/x-mpeg"]],["mp4",["video/mp4","application/mp4"]],["mp4a","audio/mp4"],["mpa",[
"video/mpeg","audio/mpeg"]],["mpc",["application/vnd.mophun.certificate","application/x-project"]],["mpe","video/mpeg"],
["mpeg","video/mpeg"],["mpg",["video/mpeg","audio/mpeg"]],["mpga","audio/mpeg"],["mpkg",
"application/vnd.apple.installer+xml"],["mpm","application/vnd.blueice.multipass"],["mpn",
"application/vnd.mophun.application"],["mpp","application/vnd.ms-project"],["mpt","application/x-project"],["mpv",
"application/x-project"],["mpv2","video/mpeg"],["mpx","application/x-project"],["mpy","application/vnd.ibm.minipay"],[
"mqy","application/vnd.mobius.mqy"],["mrc","application/marc"],["mrcx","application/marcxml+xml"],["ms",
"application/x-troff-ms"],["mscml","application/mediaservercontrol+xml"],["mseq","application/vnd.mseq"],["msf",
"application/vnd.epson.msf"],["msg","application/vnd.ms-outlook"],["msh","model/mesh"],["msl",
"application/vnd.mobius.msl"],["msty","application/vnd.muvee.style"],["mts","model/vnd.mts"],["mus",
"application/vnd.musician"],["musicxml","application/vnd.recordare.musicxml+xml"],["mv","video/x-sgi-movie"],["mvb",
"application/x-msmediaview"],["mwf","application/vnd.mfer"],["mxf","application/mxf"],["mxl",
"application/vnd.recordare.musicxml"],["mxml","application/xv+xml"],["mxs","application/vnd.triscape.mxs"],["mxu",
"video/vnd.mpegurl"],["my","audio/make"],["mzz","application/x-vnd.audioexplosion.mzz"],["n-gage",
"application/vnd.nokia.n-gage.symbian.install"],["n3","text/n3"],["nap","image/naplps"],["naplps","image/naplps"],["nbp"
,"application/vnd.wolfram.player"],["nc","application/x-netcdf"],["ncm","application/vnd.nokia.configuration-message"],[
"ncx","application/x-dtbncx+xml"],["ngdat","application/vnd.nokia.n-gage.data"],["nif","image/x-niff"],["niff",
"image/x-niff"],["nix","application/x-mix-transfer"],["nlu","application/vnd.neurolanguage.nlu"],["nml",
"application/vnd.enliven"],["nnd","application/vnd.noblenet-directory"],["nns","application/vnd.noblenet-sealer"],["nnw"
,"application/vnd.noblenet-web"],["npx","image/vnd.net-fpx"],["nsc","application/x-conference"],["nsf",
"application/vnd.lotus-notes"],["nvd","application/x-navidoc"],["nws","message/rfc822"],["o","application/octet-stream"]
,["oa2","application/vnd.fujitsu.oasys2"],["oa3","application/vnd.fujitsu.oasys3"],["oas",
"application/vnd.fujitsu.oasys"],["obd","application/x-msbinder"],["oda","application/oda"],["odb",
"application/vnd.oasis.opendocument.database"],["odc","application/vnd.oasis.opendocument.chart"],["odf",
"application/vnd.oasis.opendocument.formula"],["odft","application/vnd.oasis.opendocument.formula-template"],["odg",
"application/vnd.oasis.opendocument.graphics"],["odi","application/vnd.oasis.opendocument.image"],["odm",
"application/vnd.oasis.opendocument.text-master"],["odp","application/vnd.oasis.opendocument.presentation"],["ods",
"application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],
["ogv","video/ogg"],["ogx","application/ogg"],["omc","application/x-omc"],["omcd","application/x-omcdatamaker"],["omcr",
"application/x-omcregerator"],["onetoc","application/onenote"],["opf","application/oebps-package+xml"],["org",
"application/vnd.lotus-organizer"],["osf","application/vnd.yamaha.openscoreformat"],["osfpvg",
"application/vnd.yamaha.openscoreformat.osfpvg+xml"],["otc","application/vnd.oasis.opendocument.chart-template"],["otf",
"application/x-font-otf"],["otg","application/vnd.oasis.opendocument.graphics-template"],["oth",
"application/vnd.oasis.opendocument.text-web"],["oti","application/vnd.oasis.opendocument.image-template"],["otp",
"application/vnd.oasis.opendocument.presentation-template"],["ots",
"application/vnd.oasis.opendocument.spreadsheet-template"],["ott","application/vnd.oasis.opendocument.text-template"],[
"oxt","application/vnd.openofficeorg.extension"],["p","text/x-pascal"],["p10",["application/pkcs10",
"application/x-pkcs10"]],["p12",["application/pkcs-12","application/x-pkcs12"]],["p7a","application/x-pkcs7-signature"],
["p7b","application/x-pkcs7-certificates"],["p7c",["application/pkcs7-mime","application/x-pkcs7-mime"]],["p7m",[
"application/pkcs7-mime","application/x-pkcs7-mime"]],["p7r","application/x-pkcs7-certreqresp"],["p7s",[
"application/pkcs7-signature","application/x-pkcs7-signature"]],["p8","application/pkcs8"],["par","text/plain-bas"],[
"part","application/pro_eng"],["pas","text/pascal"],["paw","application/vnd.pawaafile"],["pbd",
"application/vnd.powerbuilder6"],["pbm","image/x-portable-bitmap"],["pcf","application/x-font-pcf"],["pcl",[
"application/vnd.hp-pcl","application/x-pcl"]],["pclxl","application/vnd.hp-pclxl"],["pct","image/x-pict"],["pcurl",
"application/vnd.curl.pcurl"],["pcx","image/x-pcx"],["pdb",["application/vnd.palm","chemical/x-pdb"]],["pdf",
"application/pdf"],["pfa","application/x-font-type1"],["pfr","application/font-tdpfr"],["pfunk",["audio/make",
"audio/make.my.funk"]],["pfx","application/x-pkcs12"],["pgm",["image/x-portable-graymap","image/x-portable-greymap"]],[
"pgn","application/x-chess-pgn"],["pgp","application/pgp-signature"],["pic",["image/pict","image/x-pict"]],["pict",
"image/pict"],["pkg","application/x-newton-compatible-pkg"],["pki","application/pkixcmp"],["pkipath",
"application/pkix-pkipath"],["pko",["application/ynd.ms-pkipko","application/vnd.ms-pki.pko"]],["pl",["text/plain",
"text/x-script.perl"]],["plb","application/vnd.3gpp.pic-bw-large"],["plc","application/vnd.mobius.plc"],["plf",
"application/vnd.pocketlearn"],["pls","application/pls+xml"],["plx","application/x-pixclscript"],["pm",[
"text/x-script.perl-module","image/x-xpixmap"]],["pm4","application/x-pagemaker"],["pm5","application/x-pagemaker"],[
"pma","application/x-perfmon"],["pmc","application/x-perfmon"],["pml",["application/vnd.ctc-posml",
"application/x-perfmon"]],["pmr","application/x-perfmon"],["pmw","application/x-perfmon"],["png","image/png"],["pnm",[
"application/x-portable-anymap","image/x-portable-anymap"]],["portpkg","application/vnd.macports.portpkg"],["pot",[
"application/vnd.ms-powerpoint","application/mspowerpoint"]],["potm",
"application/vnd.ms-powerpoint.template.macroenabled.12"],["potx",
"application/vnd.openxmlformats-officedocument.presentationml.template"],["pov","model/x-pov"],["ppa",
"application/vnd.ms-powerpoint"],["ppam","application/vnd.ms-powerpoint.addin.macroenabled.12"],["ppd",
"application/vnd.cups-ppd"],["ppm","image/x-portable-pixmap"],["pps",["application/vnd.ms-powerpoint",
"application/mspowerpoint"]],["ppsm","application/vnd.ms-powerpoint.slideshow.macroenabled.12"],["ppsx",
"application/vnd.openxmlformats-officedocument.presentationml.slideshow"],["ppt",["application/vnd.ms-powerpoint",
"application/mspowerpoint","application/powerpoint","application/x-mspowerpoint"]],["pptm",
"application/vnd.ms-powerpoint.presentation.macroenabled.12"],["pptx",
"application/vnd.openxmlformats-officedocument.presentationml.presentation"],["ppz","application/mspowerpoint"],["prc",
"application/x-mobipocket-ebook"],["pre",["application/vnd.lotus-freelance","application/x-freelance"]],["prf",
"application/pics-rules"],["prt","application/pro_eng"],["ps","application/postscript"],["psb",
"application/vnd.3gpp.pic-bw-small"],["psd",["application/octet-stream","image/vnd.adobe.photoshop"]],["psf",
"application/x-font-linux-psf"],["pskcxml","application/pskc+xml"],["ptid","application/vnd.pvi.ptid1"],["pub",
"application/x-mspublisher"],["pvb","application/vnd.3gpp.pic-bw-var"],["pvu","paleovu/x-pv"],["pwn",
"application/vnd.3m.post-it-notes"],["pwz","application/vnd.ms-powerpoint"],["py","text/x-script.phyton"],["pya",
"audio/vnd.ms-playready.media.pya"],["pyc","applicaiton/x-bytecode.python"],["pyv","video/vnd.ms-playready.media.pyv"],[
"qam","application/vnd.epson.quickanime"],["qbo","application/vnd.intu.qbo"],["qcp","audio/vnd.qcelp"],["qd3",
"x-world/x-3dmf"],["qd3d","x-world/x-3dmf"],["qfx","application/vnd.intu.qfx"],["qif","image/x-quicktime"],["qps",
"application/vnd.publishare-delta-tree"],["qt","video/quicktime"],["qtc","video/x-qtc"],["qti","image/x-quicktime"],[
"qtif","image/x-quicktime"],["qxd","application/vnd.quark.quarkxpress"],["ra",["audio/x-realaudio",
"audio/x-pn-realaudio","audio/x-pn-realaudio-plugin"]],["ram","audio/x-pn-realaudio"],["rar",
"application/x-rar-compressed"],["ras",["image/cmu-raster","application/x-cmu-raster","image/x-cmu-raster"]],["rast",
"image/cmu-raster"],["rcprofile","application/vnd.ipunplugged.rcprofile"],["rdf","application/rdf+xml"],["rdz",
"application/vnd.data-vision.rdz"],["rep","application/vnd.businessobjects"],["res","application/x-dtbresource+xml"],[
"rexx","text/x-script.rexx"],["rf","image/vnd.rn-realflash"],["rgb","image/x-rgb"],["rif","application/reginfo+xml"],[
"rip","audio/vnd.rip"],["rl","application/resource-lists+xml"],["rlc","image/vnd.fujixerox.edmics-rlc"],["rld",
"application/resource-lists-diff+xml"],["rm",["application/vnd.rn-realmedia","audio/x-pn-realaudio"]],["rmi","audio/mid"
],["rmm","audio/x-pn-realaudio"],["rmp",["audio/x-pn-realaudio-plugin","audio/x-pn-realaudio"]],["rms",
"application/vnd.jcp.javame.midlet-rms"],["rnc","application/relax-ng-compact-syntax"],["rng",[
"application/ringing-tones","application/vnd.nokia.ringing-tone"]],["rnx","application/vnd.rn-realplayer"],["roff",
"application/x-troff"],["rp","image/vnd.rn-realpix"],["rp9","application/vnd.cloanto.rp9"],["rpm",
"audio/x-pn-realaudio-plugin"],["rpss","application/vnd.nokia.radio-presets"],["rpst",
"application/vnd.nokia.radio-preset"],["rq","application/sparql-query"],["rs","application/rls-services+xml"],["rsd",
"application/rsd+xml"],["rt",["text/richtext","text/vnd.rn-realtext"]],["rtf",["application/rtf","text/richtext",
"application/x-rtf"]],["rtx",["text/richtext","application/rtf"]],["rv","video/vnd.rn-realvideo"],["s","text/x-asm"],[
"s3m","audio/s3m"],["saf","application/vnd.yamaha.smaf-audio"],["saveme","application/octet-stream"],["sbk",
"application/x-tbook"],["sbml","application/sbml+xml"],["sc","application/vnd.ibm.secure-container"],["scd",
"application/x-msschedule"],["scm",["application/vnd.lotus-screencam","video/x-scm","text/x-script.guile",
"application/x-lotusscreencam","text/x-script.scheme"]],["scq","application/scvp-cv-request"],["scs",
"application/scvp-cv-response"],["sct","text/scriptlet"],["scurl","text/vnd.curl.scurl"],["sda",
"application/vnd.stardivision.draw"],["sdc","application/vnd.stardivision.calc"],["sdd",
"application/vnd.stardivision.impress"],["sdkm","application/vnd.solent.sdkm+xml"],["sdml","text/plain"],["sdp",[
"application/sdp","application/x-sdp"]],["sdr","application/sounder"],["sdw","application/vnd.stardivision.writer"],[
"sea",["application/sea","application/x-sea"]],["see","application/vnd.seemail"],["seed","application/vnd.fdsn.seed"],[
"sema","application/vnd.sema"],["semd","application/vnd.semd"],["semf","application/vnd.semf"],["ser",
"application/java-serialized-object"],["set","application/set"],["setpay","application/set-payment-initiation"],[
"setreg","application/set-registration-initiation"],["sfd-hdstx","application/vnd.hydrostatix.sof-data"],["sfs",
"application/vnd.spotfire.sfs"],["sgl","application/vnd.stardivision.writer-global"],["sgm",["text/sgml","text/x-sgml"]]
,["sgml",["text/sgml","text/x-sgml"]],["sh",["application/x-shar","application/x-bsh","application/x-sh",
"text/x-script.sh"]],["shar",["application/x-bsh","application/x-shar"]],["shf","application/shf+xml"],["shtml",[
"text/html","text/x-server-parsed-html"]],["sid","audio/x-psid"],["sis","application/vnd.symbian.install"],["sit",[
"application/x-stuffit","application/x-sit"]],["sitx","application/x-stuffitx"],["skd","application/x-koan"],["skm",
"application/x-koan"],["skp",["application/vnd.koan","application/x-koan"]],["skt","application/x-koan"],["sl",
"application/x-seelogo"],["sldm","application/vnd.ms-powerpoint.slide.macroenabled.12"],["sldx",
"application/vnd.openxmlformats-officedocument.presentationml.slide"],["slt","application/vnd.epson.salt"],["sm",
"application/vnd.stepmania.stepchart"],["smf","application/vnd.stardivision.math"],["smi",["application/smil",
"application/smil+xml"]],["smil","application/smil"],["snd",["audio/basic","audio/x-adpcm"]],["snf",
"application/x-font-snf"],["sol","application/solids"],["spc",["text/x-speech","application/x-pkcs7-certificates"]],[
"spf","application/vnd.yamaha.smaf-phrase"],["spl",["application/futuresplash","application/x-futuresplash"]],["spot",
"text/vnd.in3d.spot"],["spp","application/scvp-vp-response"],["spq","application/scvp-vp-request"],["spr",
"application/x-sprite"],["sprite","application/x-sprite"],["src","application/x-wais-source"],["sru",
"application/sru+xml"],["srx","application/sparql-results+xml"],["sse","application/vnd.kodak-descriptor"],["ssf",
"application/vnd.epson.ssf"],["ssi","text/x-server-parsed-html"],["ssm","application/streamingmedia"],["ssml",
"application/ssml+xml"],["sst",["application/vnd.ms-pkicertstore","application/vnd.ms-pki.certstore"]],["st",
"application/vnd.sailingtracker.track"],["stc","application/vnd.sun.xml.calc.template"],["std",
"application/vnd.sun.xml.draw.template"],["step","application/step"],["stf","application/vnd.wt.stf"],["sti",
"application/vnd.sun.xml.impress.template"],["stk","application/hyperstudio"],["stl",["application/vnd.ms-pkistl",
"application/sla","application/vnd.ms-pki.stl","application/x-navistyle"]],["stm","text/html"],["stp","application/step"
],["str","application/vnd.pg.format"],["stw","application/vnd.sun.xml.writer.template"],["sub","image/vnd.dvb.subtitle"]
,["sus","application/vnd.sus-calendar"],["sv4cpio","application/x-sv4cpio"],["sv4crc","application/x-sv4crc"],["svc",
"application/vnd.dvb.service"],["svd","application/vnd.svd"],["svf",["image/vnd.dwg","image/x-dwg"]],["svg",
"image/svg+xml"],["svr",["x-world/x-svr","application/x-world"]],["swf","application/x-shockwave-flash"],["swi",
"application/vnd.aristanetworks.swi"],["sxc","application/vnd.sun.xml.calc"],["sxd","application/vnd.sun.xml.draw"],[
"sxg","application/vnd.sun.xml.writer.global"],["sxi","application/vnd.sun.xml.impress"],["sxm",
"application/vnd.sun.xml.math"],["sxw","application/vnd.sun.xml.writer"],["t",["text/troff","application/x-troff"]],[
"talk","text/x-speech"],["tao","application/vnd.tao.intent-module-archive"],["tar","application/x-tar"],["tbk",[
"application/toolbook","application/x-tbook"]],["tcap","application/vnd.3gpp2.tcap"],["tcl",["text/x-script.tcl",
"application/x-tcl"]],["tcsh","text/x-script.tcsh"],["teacher","application/vnd.smart.teacher"],["tei",
"application/tei+xml"],["tex","application/x-tex"],["texi","application/x-texinfo"],["texinfo","application/x-texinfo"],
["text",["application/plain","text/plain"]],["tfi","application/thraud+xml"],["tfm","application/x-tex-tfm"],["tgz",[
"application/gnutar","application/x-compressed"]],["thmx","application/vnd.ms-officetheme"],["tif",["image/tiff",
"image/x-tiff"]],["tiff",["image/tiff","image/x-tiff"]],["tmo","application/vnd.tmobile-livetv"],["torrent",
"application/x-bittorrent"],["tpl","application/vnd.groove-tool-template"],["tpt","application/vnd.trid.tpt"],["tr",
"application/x-troff"],["tra","application/vnd.trueapp"],["trm","application/x-msterminal"],["tsd",
"application/timestamped-data"],["tsi","audio/tsp-audio"],["tsp",["application/dsptype","audio/tsplayer"]],["tsv",
"text/tab-separated-values"],["ttf","application/x-font-ttf"],["ttl","text/turtle"],["turbot","image/florian"],["twd",
"application/vnd.simtech-mindmapper"],["txd","application/vnd.genomatix.tuxedo"],["txf","application/vnd.mobius.txf"],[
"txt","text/plain"],["ufd","application/vnd.ufdl"],["uil","text/x-uil"],["uls","text/iuls"],["umj",
"application/vnd.umajin"],["uni","text/uri-list"],["unis","text/uri-list"],["unityweb","application/vnd.unity"],["unv",
"application/i-deas"],["uoml","application/vnd.uoml+xml"],["uri","text/uri-list"],["uris","text/uri-list"],["ustar",[
"application/x-ustar","multipart/x-ustar"]],["utz","application/vnd.uiq.theme"],["uu",["application/octet-stream",
"text/x-uuencode"]],["uue","text/x-uuencode"],["uva","audio/vnd.dece.audio"],["uvh","video/vnd.dece.hd"],["uvi",
"image/vnd.dece.graphic"],["uvm","video/vnd.dece.mobile"],["uvp","video/vnd.dece.pd"],["uvs","video/vnd.dece.sd"],["uvu"
,"video/vnd.uvvu.mp4"],["uvv","video/vnd.dece.video"],["vcd","application/x-cdlink"],["vcf","text/x-vcard"],["vcg",
"application/vnd.groove-vcard"],["vcs","text/x-vcalendar"],["vcx","application/vnd.vcx"],["vda","application/vda"],[
"vdo","video/vdo"],["vew","application/groupwise"],["vis","application/vnd.visionary"],["viv",["video/vivo",
"video/vnd.vivo"]],["vivo",["video/vivo","video/vnd.vivo"]],["vmd","application/vocaltec-media-desc"],["vmf",
"application/vocaltec-media-file"],["voc",["audio/voc","audio/x-voc"]],["vos","video/vosaic"],["vox","audio/voxware"],[
"vqe","audio/x-twinvq-plugin"],["vqf","audio/x-twinvq"],["vql","audio/x-twinvq-plugin"],["vrml",["model/vrml",
"x-world/x-vrml","application/x-vrml"]],["vrt","x-world/x-vrt"],["vsd",["application/vnd.visio","application/x-visio"]],
["vsf","application/vnd.vsf"],["vst","application/x-visio"],["vsw","application/x-visio"],["vtu","model/vnd.vtu"],[
"vxml","application/voicexml+xml"],["w60","application/wordperfect6.0"],["w61","application/wordperfect6.1"],["w6w",
"application/msword"],["wad","application/x-doom"],["wav",["audio/wav","audio/x-wav"]],["wax","audio/x-ms-wax"],["wb1",
"application/x-qpro"],["wbmp","image/vnd.wap.wbmp"],["wbs","application/vnd.criticaltools.wbs+xml"],["wbxml",
"application/vnd.wap.wbxml"],["wcm","application/vnd.ms-works"],["wdb","application/vnd.ms-works"],["web",
"application/vnd.xara"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["wg",
"application/vnd.pmi.widget"],["wgt","application/widget"],["wiz","application/msword"],["wk1","application/x-123"],[
"wks","application/vnd.ms-works"],["wm","video/x-ms-wm"],["wma","audio/x-ms-wma"],["wmd","application/x-ms-wmd"],["wmf",
["windows/metafile","application/x-msmetafile"]],["wml","text/vnd.wap.wml"],["wmlc","application/vnd.wap.wmlc"],["wmls",
"text/vnd.wap.wmlscript"],["wmlsc","application/vnd.wap.wmlscriptc"],["wmv","video/x-ms-wmv"],["wmx","video/x-ms-wmx"],[
"wmz","application/x-ms-wmz"],["woff","application/x-font-woff"],["word","application/msword"],["wp",
"application/wordperfect"],["wp5",["application/wordperfect","application/wordperfect6.0"]],["wp6",
"application/wordperfect"],["wpd",["application/wordperfect","application/vnd.wordperfect","application/x-wpwin"]],[
"wpl","application/vnd.ms-wpl"],["wps","application/vnd.ms-works"],["wq1","application/x-lotus"],["wqd",
"application/vnd.wqd"],["wri",["application/mswrite","application/x-wri","application/x-mswrite"]],["wrl",["model/vrml",
"x-world/x-vrml","application/x-world"]],["wrz",["model/vrml","x-world/x-vrml"]],["wsc","text/scriplet"],["wsdl",
"application/wsdl+xml"],["wspolicy","application/wspolicy+xml"],["wsrc","application/x-wais-source"],["wtb",
"application/vnd.webturbo"],["wtk","application/x-wintalk"],["wvx","video/x-ms-wvx"],["x-png","image/png"],["x3d",
"application/vnd.hzn-3d-crossword"],["xaf","x-world/x-vrml"],["xap","application/x-silverlight-app"],["xar",
"application/vnd.xara"],["xbap","application/x-ms-xbap"],["xbd","application/vnd.fujixerox.docuworks.binder"],["xbm",[
"image/xbm","image/x-xbm","image/x-xbitmap"]],["xdf","application/xcap-diff+xml"],["xdm","application/vnd.syncml.dm+xml"
],["xdp","application/vnd.adobe.xdp+xml"],["xdr","video/x-amt-demorun"],["xdssc","application/dssc+xml"],["xdw",
"application/vnd.fujixerox.docuworks"],["xenc","application/xenc+xml"],["xer","application/patch-ops-error+xml"],["xfdf"
,"application/vnd.adobe.xfdf"],["xfdl","application/vnd.xfdl"],["xgz","xgl/drawing"],["xhtml","application/xhtml+xml"],[
"xif","image/vnd.xiff"],["xl","application/excel"],["xla",["application/vnd.ms-excel","application/excel",
"application/x-msexcel","application/x-excel"]],["xlam","application/vnd.ms-excel.addin.macroenabled.12"],["xlb",[
"application/excel","application/vnd.ms-excel","application/x-excel"]],["xlc",["application/vnd.ms-excel",
"application/excel","application/x-excel"]],["xld",["application/excel","application/x-excel"]],["xlk",[
"application/excel","application/x-excel"]],["xll",["application/excel","application/vnd.ms-excel","application/x-excel"
]],["xlm",["application/vnd.ms-excel","application/excel","application/x-excel"]],["xls",["application/vnd.ms-excel",
"application/excel","application/x-msexcel","application/x-excel"]],["xlsb",
"application/vnd.ms-excel.sheet.binary.macroenabled.12"],["xlsm","application/vnd.ms-excel.sheet.macroenabled.12"],[
"xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xlt",["application/vnd.ms-excel",
"application/excel","application/x-excel"]],["xltm","application/vnd.ms-excel.template.macroenabled.12"],["xltx",
"application/vnd.openxmlformats-officedocument.spreadsheetml.template"],["xlv",["application/excel",
"application/x-excel"]],["xlw",["application/vnd.ms-excel","application/excel","application/x-msexcel",
"application/x-excel"]],["xm","audio/xm"],["xml",["application/xml","text/xml","application/atom+xml",
"application/rss+xml"]],["xmz","xgl/movie"],["xo","application/vnd.olpc-sugar"],["xof","x-world/x-vrml"],["xop",
"application/xop+xml"],["xpi","application/x-xpinstall"],["xpix","application/x-vnd.ls-xpix"],["xpm",["image/xpm",
"image/x-xpixmap"]],["xpr","application/vnd.is-xpr"],["xps","application/vnd.ms-xpsdocument"],["xpw",
"application/vnd.intercon.formnet"],["xslt","application/xslt+xml"],["xsm","application/vnd.syncml+xml"],["xspf",
"application/xspf+xml"],["xsr","video/x-amt-showrun"],["xul","application/vnd.mozilla.xul+xml"],["xwd",["image/x-xwd",
"image/x-xwindowdump"]],["xyz",["chemical/x-xyz","chemical/x-pdb"]],["yang","application/yang"],["yin",
"application/yin+xml"],["z",["application/x-compressed","application/x-compress"]],["zaz",
"application/vnd.zzazz.deck+xml"],["zip",["application/zip","multipart/x-zip","application/x-zip-compressed",
"application/x-compressed"]],["zir","application/vnd.zul"],["zmm","application/vnd.handheld-entertainment+xml"],["zoo",
"application/octet-stream"],["zsh","text/x-script.zsh"]]);class Gd extends mp.default.Transform{constructor(e){super(),
this.options=e||{},!1!==this.options.lineLength&&(this.options.lineLength=this.options.lineLength||76),this._curLine="",
this._remainingBytes=!1,this.inputBytes=0,this.outputBytes=0}_transform(e,t,i){if(!(e="buffer"!==t?Buffer.from(e,t):e
)||!e.length)return setImmediate(i);this.inputBytes+=e.length,this._remainingBytes&&this._remainingBytes.length&&(
e=Buffer.concat([this._remainingBytes,e],this._remainingBytes.length+e.length),this._remainingBytes=!1),e.length%3?(
this._remainingBytes=e.slice(e.length-e.length%3),e=e.slice(0,e.length-e.length%3)):this._remainingBytes=!1;
let n=this._curLine+Ft(e);this.options.lineLength&&((t=(n=Vt(n,this.options.lineLength)).lastIndexOf("\n"))<0?(
this._curLine=n,n=""):t===n.length-1?this._curLine="":(this._curLine=n.substr(t+1),n=n.substr(0,t+1))),n&&(
this.outputBytes+=n.length,this.push(Buffer.from(n,"ascii"))),setImmediate(i)}_flush(e){
this._remainingBytes&&this._remainingBytes.length&&(this._curLine+=Ft(this._remainingBytes)),this._curLine&&(
this._curLine=Vt(this._curLine,this.options.lineLength),this.outputBytes+=this._curLine.length,this.push(this._curLine,
"ascii"),this._curLine=""),e()}}class Kd extends mp.default.Transform{constructor(e){super(),this.options=e||{},
!1!==this.options.lineLength&&(this.options.lineLength=this.options.lineLength||76),this._curLine="",this.inputBytes=0,
this.outputBytes=0}_transform(e,t,i){let n;if(!(e="buffer"!==t?Buffer.from(e,t):e)||!e.length)return i();
this.inputBytes+=e.length,this.options.lineLength?(n=(n=Gt(n=this._curLine+$t(e),this.options.lineLength)).replace(
/(^|\n)([^\n]*)$/,(e,t,i)=>(this._curLine=i,t)))&&(this.outputBytes+=n.length,this.push(n)):(n=$t(e),
this.outputBytes+=n.length,this.push(n,"ascii")),i()}_flush(e){this._curLine&&(this.outputBytes+=this._curLine.length,
this.push(this._curLine,"ascii")),e()}}const Jd=x={encode:Ft,wrap:Vt,Encoder:Gd},Qd=Cl={encode:$t,wrap:Gt,Encoder:Kd},
Wd=v={detectMimeType(e){if(!e)return Fd;let t=Dd.parse(e),i=(e=(t.ext.substr(1)||t.name||"").split("?").shift().trim(
).toLowerCase(),Fd);return $d.has(e)&&(i=$d.get(e)),Array.isArray(i)?i[0]:i},detectExtension(e){if(!e)return"bin";
let t=(e||"").toLowerCase().trim().split("/");var e=t.shift().trim(),i=t.join("/").trim();return Vd.has(e+"/"+i)?(
i=Vd.get(e+"/"+i),Array.isArray(i)?i[0]:i):"text"!==e?"bin":"txt"}};class Xd{constructor(e){this.str=(e||"").toString(),
this.operatorCurrent="",this.operatorExpecting="",this.node=null,this.escaped=!1,this.list=[],this.operators={'"':'"',
"(":")","<":">",",":"",":":";",";":""}}tokenize(){let i,t=[];for(let e=0,t=this.str.length;e<t;e++)i=this.str.charAt(e),
this.checkChar(i);return this.list.forEach(e=>{e.value=(e.value||"").toString().trim(),e.value&&t.push(e)}),t}checkChar(
e){if(!this.escaped){if(e===this.operatorExpecting)return this.node={type:"operator",value:e},this.list.push(this.node),
this.node=null,this.operatorExpecting="",void(this.escaped=!1);if(!this.operatorExpecting&&e in this.operators
)return this.node={type:"operator",value:e},this.list.push(this.node),this.node=null,
this.operatorExpecting=this.operators[e],void(this.escaped=!1);if(['"',"'"].includes(this.operatorExpecting)&&"\\"===e
)return void(this.escaped=!0)}this.node||(this.node={type:"text",value:""},this.list.push(this.node)),(33<=(
e="\n"===e?" ":e).charCodeAt(0)||[" ","\t"].includes(e))&&(this.node.value+=e),this.escaped=!1}}
class Yd extends mp.default.Transform{constructor(){super(),this.lastByte=!1}_transform(e,t,i){e.length&&(
this.lastByte=e[e.length-1]),this.push(e),i()}_flush(e){return 10!==this.lastByte&&(13===this.lastByte?this.push(
Buffer.from("\n")):this.push(Buffer.from("\r\n"))),e()}}class Zd extends mp.default.Transform{constructor(e){super(e),
this.options=e||{},this.lastByte=!1}_transform(i,e,t){let n,a=0;for(let e=0,t=i.length;e<t;e++)10===i[e]&&(
e&&13!==i[e-1]||!e&&13!==this.lastByte)&&(e>a&&(n=i.slice(a,e),this.push(n)),this.push(Buffer.from("\r\n")),a=e+1);
a&&a<i.length?(n=i.slice(a),this.push(n)):a||this.push(i),this.lastByte=i[i.length-1],t()}}
class eu extends mp.default.Transform{constructor(e){super(e),this.options=e||{}}_transform(i,e,t){let n,a=0;for(let e=0
,t=i.length;e<t;e++)13===i[e]&&(n=i.slice(a,e),a=e+1,this.push(n));a&&a<i.length?(n=i.slice(a),this.push(n)
):a||this.push(i),t()}}const tu=lp.default,iu=_p.default,nu=Sp.default,au=wp.default,ou=mp.default.PassThrough,
ru=h.exports,su=R={isPlainText(e,t){
const i=t?/[\x00-\x08\x0b\x0c\x0e-\x1f"\u0080-\uFFFF]/:/[\x00-\x08\x0b\x0c\x0e-\x1f\u0080-\uFFFF]/;
return"string"==typeof e&&!i.test(e)},hasLongerLines(e,t){return 131072<e.length||new RegExp("^.{"+(t+1)+",}","m").test(
e)},encodeWord(e,t,a){var o;t=(t||"Q").toString().toUpperCase().trim().charAt(0);let r;if((a=a||0
)&&7+"UTF-8".length<a&&(a-=7+"UTF-8".length),"Q"===t?r=Qd.encode(e).replace(/[^a-z0-9!*+\-/=]/gi,e=>{var t=e.charCodeAt(
0).toString(16).toUpperCase();return" "===e?"_":"="+(1===t.length?"0"+t:t)}):"B"===t&&(r="string"==typeof e?e:Jd.encode(
e),a=a?Math.max(3,(a-a%4)/4*3):0),a&&("B"!==t?r:Jd.encode(e)).length>a)if("Q"===t)r=this.splitMimeEncodedString(r,a
).join("?= =?UTF-8?"+t+"?");else{let i=[],n="";for(let e=0,t=r.length;e<t;e++)o=r.charAt(e),Buffer.byteLength(n+o
)<=a||0===e?n+=o:(i.push(Jd.encode(n)),n=o);n&&i.push(Jd.encode(n)),r=1<i.length?i.join("?= =?UTF-8?"+t+"?"):i.join("")
}else"B"===t&&(r=Jd.encode(e));return"=?UTF-8?"+t+"?"+r+("?="===r.substr(-2)?"":"?=")},encodeWords(e,t,i,n){var a;i=i||0
let o=e.match(/(?:^|\s)([^\s]*["\u0080-\uFFFF])/);return o?n?this.encodeWord(e,t,i):(n=e.match(
/(["\u0080-\uFFFF][^\s]*)[^"\u0080-\uFFFF]*$/))?(a=o.index+(o[0].match(/[^\s]/)||{index:0}).index,n=n.index+(n[1]||""
).length,(a?e.substr(0,a):"")+this.encodeWord(e.substring(a,n),t||"Q",i)+(n<e.length?e.substr(n):"")):e:e},
buildHeaderValue(i){let n=[];return Object.keys(i.params||{}).forEach(e=>{var t=i.params[e];!this.isPlainText(t,!0
)||75<=t.length?this.buildHeaderParam(e,t,50).forEach(e=>{/[\s"\\;:/=(),<>@[\]?]|^[-']|'$/.test(e.value
)&&"*"!==e.key.substr(-1)?n.push(e.key+"="+JSON.stringify(e.value)):n.push(e.key+"="+e.value)}
):/[\s'"\\;:/=(),<>@[\]?]|^-/.test(t)?n.push(e+"="+JSON.stringify(t)):n.push(e+"="+t)}),i.value+(n.length?"; "+n.join(
"; "):"")},buildHeaderParam(i,e,t){let n=[],a="string"==typeof e?e:(e||"").toString(),o,r,s,c,l=0,p,d;if(t=t||50,
this.isPlainText(e,!0)){if(a.length<=t)return[{key:i,value:a}];(a=a.replace(new RegExp(".{"+t+"}","g"),e=>(n.push({
line:e}),"")))&&n.push({line:a})}else{if(/[\uD800-\uDBFF]/.test(a)){for(o=[],p=0,d=a.length;p<d;p++)55296<=(s=(
r=a.charAt(p)).charCodeAt(0))&&s<=56319&&p<d-1?(r+=a.charAt(p+1),o.push(r),p++):o.push(r);a=o}c="utf-8''";let e=!0;for(
l=0,p=0,d=a.length;p<d;p++){if(r=a[p],e)r=this.safeEncodeURIComponent(r);else if((
r=" "===r?r:this.safeEncodeURIComponent(r))!==a[p]){if(!((this.safeEncodeURIComponent(c)+r).length>=t)){e=!0,p=l,c="";
continue}n.push({line:c,encoded:e}),c="",l=p-1}(c+r).length>=t?(n.push({line:c,encoded:e}),
c=r=" "===a[p]?" ":this.safeEncodeURIComponent(a[p]),r===a[p]?(e=!1,l=p-1):e=!0):c+=r}c&&n.push({line:c,encoded:e})}
return n.map((e,t)=>({key:i+"*"+t+(e.encoded?"*":""),value:e.line}))},parseHeaderValue(i){let o={value:!1,params:{}},
n=!1,a="",r="value",s=!1,c=!1;var l;for(let e=0,t=i.length;e<t;e++)if(l=i.charAt(e),"key"===r)"="===l?(n=a.trim(
).toLowerCase(),r="value",a=""):a+=l;else{if(c)a+=l;else{if("\\"===l){c=!0;continue}
s&&l===s?s=!1:s||'"'!==l?s||";"!==l?a+=l:(!1===n?o.value=a.trim():o.params[n]=a.trim(),r="key",a=""):s=l}c=!1}
return"value"===r?!1===n?o.value=a.trim():o.params[n]=a.trim():a.trim()&&(o.params[a.trim().toLowerCase()]=""),
Object.keys(o.params).forEach(e=>{let t,i,n,a;(n=e.match(/(\*(\d+)|\*(\d+)\*|\*)$/))&&(t=e.substr(0,n.index),i=Number(
n[2]||n[3])||0,o.params[t]&&"object"==typeof o.params[t]||(o.params[t]={charset:!1,values:[]}),a=o.params[e],
0===i&&"*"===n[0].substr(-1)&&(n=a.match(/^([^']*)'[^']*'(.*)$/))&&(o.params[t].charset=n[1]||"iso-8859-1",a=n[2]),
o.params[t].values[i]=a,delete o.params[e])}),Object.keys(o.params).forEach(e=>{let t;o.params[e]&&Array.isArray(
o.params[e].values)&&(t=o.params[e].values.map(e=>e||"").join(""),
o.params[e].charset?o.params[e]="=?"+o.params[e].charset+"?Q?"+t.replace(/[=?_\s]/g,e=>{var t=e.charCodeAt(0).toString(
16);return" "===e?"_":"%"+(t.length<2?"0":"")+t}).replace(/%/g,"=")+"?=":o.params[e]=t)}),o},
detectExtension:e=>Wd.detectExtension(e),detectMimeType:e=>Wd.detectMimeType(e),foldLines(e,t,i){t=t||76;let n=0,a=(e=(
e||"").toString()).length,o="",r,s;for(;n<a;){if((r=e.substr(n,t)).length<t){o+=r;break}(s=r.match(/^[^\n\r]*(\r?\n|\r)/
))?(r=s[0],o+=r,n+=r.length):((s=r.match(/(\s+)[^\s]*$/))&&s[0].length-(i?(s[1]||"").length:0)<r.length?r=r.substr(0,
r.length-(s[0].length-(i?(s[1]||"").length:0))):(s=e.substr(n+r.length).match(/^[^\s]+(\s*)/))&&(r+=s[0].substr(0,
s[0].length-(i?0:(s[1]||"").length))),o+=r,(n+=r.length)<a&&(o+="\r\n"))}return o},splitMimeEncodedString:(e,t)=>{let i,
n,a,o,r=[];for(t=Math.max(t||0,12);e.length;){for(i=e.substr(0,t),(n=i.match(/[=][0-9A-F]?$/i))&&(i=i.substr(0,n.index))
,o=!1;!o;)o=!0,(n=e.substr(i.length).match(/^[=]([0-9A-F]{2})/i))&&(a=parseInt(n[1],16))<194&&127<a&&(i=i.substr(0,
i.length-3),o=!1);i.length&&r.push(i),e=e.substr(i.length)}return r},encodeURICharComponent:e=>{let i="",n=e.charCodeAt(
0).toString(16).toUpperCase();if(2<(n=n.length%2?"0"+n:n).length)for(let e=0,t=n.length/2;e<t;e++)i+="%"+n.substr(e,2
);else i+="%"+n;return i},safeEncodeURIComponent(t){t=(t||"").toString();try{t=encodeURIComponent(t)}catch(e){
return t.replace(/[^\x00-\x1F *'()<>@,;:\\"[\]?=\u007F-\uFFFF]+/g,"")}return t.replace(
/[\x00-\x1F *'()<>@,;:\\"[\]?=\u007F-\uFFFF]/g,e=>this.encodeURICharComponent(e))}},cu=Cl,lu=x,pu=s.exports,du=Yd,
uu=y=Zd,hu=eu,mu=Kl=class dm{constructor(e,t){this.nodeCounter=0,this.baseBoundary=(t=t||{}
).baseBoundary||tu.randomBytes(8).toString("hex"),this.boundaryPrefix=t.boundaryPrefix||"--_NmP",
this.disableFileAccess=!!t.disableFileAccess,this.disableUrlAccess=!!t.disableUrlAccess,
this.normalizeHeaderKey=t.normalizeHeaderKey,this.date=new Date,this.rootNode=t.rootNode||this,this.keepBcc=!!t.keepBcc,
t.filename&&(this.filename=t.filename,e=e||su.detectMimeType(this.filename.split(".").pop())),this.textEncoding=(
t.textEncoding||"").toString().trim().charAt(0).toUpperCase(),this.parentNode=t.parentNode,this.hostname=t.hostname,
this.newline=t.newline,this.childNodes=[],this._nodeId=++this.rootNode.nodeCounter,this._headers=[],this._isPlainText=!1
,this._hasLongLines=!1,this._envelope=!1,this._raw=!1,this._transforms=[],this._processFuncs=[],e&&this.setHeader(
"Content-Type",e)}createChild(e,t){return t||"object"!=typeof e||(t=e,e=void 0),e=new dm(e,t),this.appendChild(e),e}
appendChild(e){return e.rootNode!==this.rootNode&&(e.rootNode=this.rootNode,e._nodeId=++this.rootNode.nodeCounter),(
e.parentNode=this).childNodes.push(e),e}replace(i){return i===this?this:(this.parentNode.childNodes.forEach((e,t)=>{
e===this&&(i.rootNode=this.rootNode,i.parentNode=this.parentNode,i._nodeId=this._nodeId,(this.rootNode=this
).parentNode=void 0,i.parentNode.childNodes[t]=i)}),i)}remove(){if(!this.parentNode)return this;for(
let e=this.parentNode.childNodes.length-1;0<=e;e--)if(this.parentNode.childNodes[e]===this
)return this.parentNode.childNodes.splice(e,1),this.parentNode=void 0,this.rootNode=this}setHeader(i,e){let n=!1,a;if(
!e&&i&&"object"==typeof i)return i.key&&"value"in i?this.setHeader(i.key,i.value):Array.isArray(i)?i.forEach(e=>{
this.setHeader(e.key,e.value)}):Object.keys(i).forEach(e=>{this.setHeader(e,i[e])}),this;a={
key:i=this._normalizeHeaderKey(i),value:e};for(let e=0,t=this._headers.length;e<t;e++)this._headers[e].key===i&&(n?(
this._headers.splice(e,1),e--,t--):(this._headers[e]=a,n=!0));return n||this._headers.push(a),this}addHeader(t,e){
return!e&&t&&"object"==typeof t?t.key&&t.value?this.addHeader(t.key,t.value):Array.isArray(t)?t.forEach(e=>{
this.addHeader(e.key,e.value)}):Object.keys(t).forEach(e=>{this.addHeader(e,t[e])}):Array.isArray(e)?e.forEach(e=>{
this.addHeader(t,e)}):this._headers.push({key:this._normalizeHeaderKey(t),value:e}),this}getHeader(i){
i=this._normalizeHeaderKey(i);for(let e=0,t=this._headers.length;e<t;e++)if(this._headers[e].key===i
)return this._headers[e].value}setContent(e){return this.content=e,"function"==typeof this.content.pipe?(
this._contentErrorHandler=e=>{this.content.removeListener("error",this._contentErrorHandler),this.content=e},
this.content.once("error",this._contentErrorHandler)):"string"==typeof this.content&&(this._isPlainText=su.isPlainText(
this.content),this._isPlainText&&su.hasLongerLines(this.content,76)&&(this._hasLongLines=!0)),this}build(i){let e,t=(
i||(e=new Promise((e,t)=>{i=ru.callbackPromise(e,t)})),this.createReadStream()),n=[],a=0,o=!1;return t.on("readable",(
)=>{for(var e;null!==(e=t.read());)n.push(e),a+=e.length}),t.once("error",e=>{if(!o)return o=!0,i(e)}),t.once("end",e=>{
if(!o)return o=!0,e&&e.length&&(n.push(e),a+=e.length),i(null,Buffer.concat(n,a))}),e}getTransferEncoding(){let e=!1;
var t=(this.getHeader("Content-Type")||"").toString().toLowerCase().trim();return!this.content||(e=(this.getHeader(
"Content-Transfer-Encoding")||"").toString().toLowerCase().trim())&&["base64","quoted-printable"].includes(e)||(
/^text\//i.test(t
)?e=this._isPlainText&&!this._hasLongLines?"7bit":"string"==typeof this.content||this.content instanceof Buffer?"Q"===this._getTextEncoding(
this.content
)?"quoted-printable":"base64":"B"===this.textEncoding?"base64":"quoted-printable":/^(multipart|message)\//i.test(t)||(
e=e||"base64")),e}buildHeaders(){var e=this.getTransferEncoding();let r=[];return e&&this.setHeader(
"Content-Transfer-Encoding",e),this.filename&&!this.getHeader("Content-Disposition")&&this.setHeader(
"Content-Disposition","attachment"),this.rootNode===this&&(this.getHeader("Date")||this.setHeader("Date",
this.date.toUTCString().replace(/GMT/,"+0000")),this.messageId(),this.getHeader("MIME-Version")||this.setHeader(
"MIME-Version","1.0")),this._headers.forEach(e=>{let t=e.key,i=e.value,n,a,o={};if(!i||"object"!=typeof i||["From",
"Sender","To","Cc","Bcc","Reply-To","Date","References"].includes(t)||(Object.keys(i).forEach(e=>{"value"!==e&&(
o[e]=i[e])}),(i=(i.value||"").toString()).trim()))if(o.prepared)o.foldLines?r.push(su.foldLines(t+": "+i)):r.push(
t+": "+i);else{switch(e.key){case"Content-Disposition":n=su.parseHeaderValue(i),this.filename&&(
n.params.filename=this.filename),i=su.buildHeaderValue(n);break;case"Content-Type":n=su.parseHeaderValue(i),
this._handleContentType(n),n.value.match(/^text\/plain\b/)&&"string"==typeof this.content&&/[\u0080-\uFFFF]/.test(
this.content)&&(n.params.charset="utf-8"),i=su.buildHeaderValue(n),this.filename&&((a=this._encodeWords(this.filename)
)===this.filename&&!/[\s'"\\;:/=(),<>@[\]?]|^-/.test(a)||(a='"'+a+'"'),i+="; name="+a);break;case"Bcc":if(this.keepBcc
)break;return}((i=this._encodeHeaderValue(t,i))||"").toString().trim()&&("function"==typeof this.normalizeHeaderKey&&(
e=this.normalizeHeaderKey(t,i))&&"string"==typeof e&&e.length&&(t=e),r.push(su.foldLines(t+": "+i,76)))}}),r.join("\r\n"
)}createReadStream(e){e=e||{};let t=new ou(e),i=t,n;this.stream(t,e,e=>{e?i.emit("error",e):t.end()});for(let e=0,
t=this._transforms.length;e<t;e++)n="function"==typeof this._transforms[e]?this._transforms[e]():this._transforms[e],
i.once("error",e=>{n.emit("error",e)}),i=i.pipe(n);n=new du,i.once("error",e=>{n.emit("error",e)}),i=i.pipe(n);for(
let e=0,t=this._processFuncs.length;e<t;e++)n=this._processFuncs[e],i=n(i);if(this.newline){e=new(["win","windows","dos"
,"\r\n"].includes(this.newline.toString().toLowerCase())?uu:hu);const t=i.pipe(e);return i.on("error",e=>t.emit("error",
e)),t}return i}transform(e){this._transforms.push(e)}processFunc(e){this._processFuncs.push(e)}stream(n,a,t){
let i=this.getTransferEncoding(),o,r,s=!1,c=e=>{s||(s=!0,t(e))},l=()=>{let t=0,i=()=>{if(t>=this.childNodes.length
)return n.write("\r\n--"+this.boundary+"--\r\n"),c();let e=this.childNodes[t++];n.write((1<t?"\r\n":""
)+"--"+this.boundary+"\r\n"),e.stream(n,a,e=>{if(e)return c(e);setImmediate(i)})};if(!this.multipart)return c();
setImmediate(i)};this._raw?setImmediate(()=>{if("[object Error]"===Object.prototype.toString.call(this._raw))return c(
this._raw);"function"==typeof this._raw.pipe&&this._raw.removeListener("error",this._contentErrorHandler);
let e=this._getStream(this._raw);e.pipe(n,{end:!1}),e.on("error",e=>n.emit("error",e)),e.on("end",l)}):(n.write(
this.buildHeaders()+"\r\n\r\n"),setImmediate(()=>{if(!this.content)return setImmediate(l);{if(
"[object Error]"===Object.prototype.toString.call(this.content))return c(this.content);
"function"==typeof this.content.pipe&&(this.content.removeListener("error",this._contentErrorHandler),
this._contentErrorHandler=e=>c(e),this.content.once("error",this._contentErrorHandler));let e=()=>{["quoted-printable",
"base64"].includes(i)?((o=new("base64"===i?lu:cu).Encoder(a)).pipe(n,{end:!1}),o.once("end",l),o.once("error",e=>c(e)),(
r=this._getStream(this.content)).pipe(o)):((r=this._getStream(this.content)).pipe(n,{end:!1}),r.once("end",l)),r.once(
"error",e=>c(e))};if(this.content._resolve){let t=[],i=0,n=!1,a=this._getStream(this.content);a.on("error",e=>{n||(n=!0,
c(e))}),a.on("readable",()=>{for(var e;null!==(e=a.read());)t.push(e),i+=e.length}),a.on("end",()=>{n||(n=!0,
this.content._resolve=!1,this.content._resolvedValue=Buffer.concat(t,i),setImmediate(e))})}else setImmediate(e)}}))}
setEnvelope(t){let e,i=(this._envelope={from:!1,to:[]},t.from&&(e=[],this._convertAddresses(this._parseAddresses(t.from)
,e),(e=e.filter(e=>e&&e.address)).length&&e[0]&&(this._envelope.from=e[0].address)),["to","cc","bcc"].forEach(e=>{
t[e]&&this._convertAddresses(this._parseAddresses(t[e]),this._envelope.to)}),this._envelope.to=this._envelope.to.map(
e=>e.address).filter(e=>e),["to","cc","bcc","from"]);return Object.keys(t).forEach(e=>{i.includes(e)||(
this._envelope[e]=t[e])}),this}getAddresses(){let i={};return this._headers.forEach(e=>{var t=e.key.toLowerCase();[
"from","sender","reply-to","to","cc","bcc"].includes(t)&&(Array.isArray(i[t])||(i[t]=[]),this._convertAddresses(
this._parseAddresses(e.value),i[t]))}),i}getEnvelope(){if(this._envelope)return this._envelope;let i={from:!1,to:[]};
return this._headers.forEach(e=>{var t=[];"From"===e.key||!i.from&&["Reply-To","Sender"].includes(e.key)?(
this._convertAddresses(this._parseAddresses(e.value),t),t.length&&t[0]&&(i.from=t[0].address)):["To","Cc","Bcc"
].includes(e.key)&&this._convertAddresses(this._parseAddresses(e.value),i.to)}),i.to=i.to.map(e=>e.address),i}messageId(
){let e=this.getHeader("Message-ID");return e||(e=this._generateMessageId(),this.setHeader("Message-ID",e)),e}setRaw(e){
return this._raw=e,this._raw&&"function"==typeof this._raw.pipe&&(this._contentErrorHandler=e=>{
this._raw.removeListener("error",this._contentErrorHandler),this._raw=e},this._raw.once("error",
this._contentErrorHandler)),this}_getStream(e){let t;return e._resolvedValue?(t=new ou,setImmediate(()=>t.end(
e._resolvedValue)),t):"function"==typeof e.pipe?e:e&&"string"==typeof e.path&&!e.href?this.disableFileAccess?(t=new ou,
setImmediate(()=>t.emit("error",new Error("File access rejected for "+e.path))),t):nu.createReadStream(e.path
):e&&"string"==typeof e.href?this.disableUrlAccess?(t=new ou,setImmediate(()=>t.emit("error",new Error(
"Url access rejected for "+e.href))),t):pu(e.href,{headers:e.httpHeaders}):(t=new ou,setImmediate(()=>t.end(e||"")),t)}
_parseAddresses(e){return[].concat.apply([],[].concat(e).map(e=>e&&e.address?(e.address=this._normalizeAddress(e.address
),e.name=e.name||"",[e]):function p(e,t){t=t||{};let i=new Xd(e),n=i.tokenize(),a=[],o=[],r=[];if(n.forEach(e=>{
"operator"!==e.type||","!==e.value&&";"!==e.value?o.push(e):(o.length&&a.push(o),o=[])}),o.length&&a.push(o),a.forEach(
e=>{(e=function(e){var t,i;let n,a=!1,o="text",r,s=[],c={address:[],comment:[],group:[],text:[]},l;for(l=0,
t=e.length;l<t;l++)if("operator"===(n=e[l]).type)switch(n.value){case"<":o="address";break;case"(":o="comment";break;
case":":o="group",a=!0;break;default:o="text"}else n.value&&("address"===o&&(n.value=n.value.replace(/^[^<]*<\s*/,"")),
c[o].push(n.value));if(!c.text.length&&c.comment.length&&(c.text=c.comment,c.comment=[]),a)c.text=c.text.join(" "),
s.push({name:c.text||r&&r.name,group:c.group.length?p(c.group.join(",")):[]});else{if(!c.address.length&&c.text.length){
for(l=c.text.length-1;0<=l;l--)if(c.text[l].match(/^[^@\s]+@[^@\s]+$/)){c.address=c.text.splice(l,1);break}if(
i=function(e){return c.address.length?e:(c.address=[e.trim()]," ")},!c.address.length)for(l=c.text.length-1;0<=l&&(
c.text[l]=c.text[l].replace(/\s*\b[^@\s]+@[^\s]+\b\s*/,i).trim(),!c.address.length);l--);}if(
!c.text.length&&c.comment.length&&(c.text=c.comment,c.comment=[]),1<c.address.length&&(c.text=c.text.concat(
c.address.splice(1))),c.text=c.text.join(" "),c.address=c.address.join(" "),!c.address&&a)return[];(r={
address:c.address||c.text||"",name:c.text||c.address||""}).address===r.name&&((r.address||"").match(/@/
)?r.name="":r.address=""),s.push(r)}return s}(e)).length&&(r=r.concat(e))}),t.flatten){let t=[],i=e=>{e.forEach(e=>{if(
e.group)return i(e.group);t.push(e)})};return i(r),t}return r}(e)))}_normalizeHeaderKey(e){return(e||"").toString(
).replace(/\r?\n|\r/g," ").trim().toLowerCase().replace(
/^X-SMTPAPI$|^(MIME|DKIM|ARC|BIMI)\b|^[a-z]|-(SPF|FBL|ID|MD5)$|-[a-z]/gi,e=>e.toUpperCase()).replace(
/^Content-Features$/i,"Content-features")}_handleContentType(e){this.contentType=e.value.trim().toLowerCase(),
this.multipart=!!/^multipart\//i.test(this.contentType)&&this.contentType.substr(this.contentType.indexOf("/")+1),
this.multipart?this.boundary=e.params.boundary=e.params.boundary||this.boundary||this._generateBoundary(
):this.boundary=!1}_generateBoundary(){
return this.rootNode.boundaryPrefix+"-"+this.rootNode.baseBoundary+"-Part_"+this._nodeId}_encodeHeaderValue(e,t){switch(
e=this._normalizeHeaderKey(e)){case"From":case"Sender":case"To":case"Cc":case"Bcc":case"Reply-To":
return this._convertAddresses(this._parseAddresses(t));case"Message-ID":case"In-Reply-To":case"Content-Id":return">"!==(
t="<"!==(t=(t||"").toString().replace(/\r?\n|\r/g," ")).charAt(0)?"<"+t:t).charAt(t.length-1)&&(t+=">"),t;
case"References":return(t=[].concat.apply([],[].concat(t||"").map(e=>(e=(e||"").toString().replace(/\r?\n|\r/g," "
).trim()).replace(/<[^>]*>/g,e=>e.replace(/\s/g,"")).split(/\s+/))).map(e=>(">"!==(e="<"!==e.charAt(0)?"<"+e:e).charAt(
e.length-1)&&(e+=">"),e))).join(" ").trim();case"Date":return"[object Date]"===Object.prototype.toString.call(t
)?t.toUTCString().replace(/GMT/,"+0000"):(t=(t||"").toString().replace(/\r?\n|\r/g," "),this._encodeWords(t));
case"Content-Type":case"Content-Disposition":return(t||"").toString().replace(/\r?\n|\r/g," ");default:return t=(t||""
).toString().replace(/\r?\n|\r/g," "),this._encodeWords(t)}}_convertAddresses(e,i){let n=[];return i=i||[],[].concat(
e||[]).forEach(t=>{var e;t.address?(t.address=this._normalizeAddress(t.address),t.name?t.name&&n.push(
`${this._encodeAddressName(t.name)} <${t.address}>`):n.push(0<=t.address.indexOf(" ")?`<${t.address}>`:""+t.address),
t.address&&!i.filter(e=>e.address===t.address).length&&i.push(t)):t.group&&(e=(t.group.length?this._convertAddresses(
t.group,i):"").trim(),n.push(this._encodeAddressName(t.name)+`:${e};`))}),n.join(", ")}_normalizeAddress(e){var t=(e=(
e||"").toString().replace(/[\x00-\x1F<>]+/g," ").trim()).lastIndexOf("@");if(t<0)return e;let i=e.substr(0,t),
n=e.substr(t+1),a;try{a=au.toASCII(n.toLowerCase())}catch(e){}return 0<=i.indexOf(" ")&&'"'!==(i='"'!==i.charAt(0
)?'"'+i:i).substr(-1)&&(i+='"'),i+"@"+a}_encodeAddressName(e){return/^[\w ']*$/.test(e)?e:/^[\x20-\x7e]*$/.test(e
)?'"'+e.replace(/([\\"])/g,"\\$1")+'"':su.encodeWord(e,this._getTextEncoding(e),52)}_encodeWords(e){
return su.encodeWords(e,this._getTextEncoding(e),52,!0)}_getTextEncoding(e){e=(e||"").toString();let t=this.textEncoding
var i;return t||(i=(e.match(/[\x00-\x08\x0B\x0C\x0E-\x1F\u0080-\uFFFF]/g)||[]).length,e=(e.match(/[a-z]/gi)||[]).length,
t=i<e?"Q":"B"),t}_generateMessageId(){return"<"+[2,2,2,6].reduce((e,t)=>e+"-"+tu.randomBytes(t).toString("hex"),
tu.randomBytes(4).toString("hex"))+"@"+(this.getEnvelope().from||this.hostname||iu.hostname()||"localhost").split("@"
).pop()+">"}},fu=R;b=class{constructor(e){this.mail=e||{},this.message=!1}compile(){
return this._alternatives=this.getAlternatives(),this._htmlNode=this._alternatives.filter(e=>/^text\/html\b/i.test(
e.contentType)).pop(),this._attachments=this.getAttachments(!!this._htmlNode),this._useRelated=!(
!this._htmlNode||!this._attachments.related.length),this._useAlternative=1<this._alternatives.length,
this._useMixed=1<this._attachments.attached.length||this._alternatives.length&&1===this._attachments.attached.length,
this.mail.raw?this.message=new mu("message/rfc822",{newline:this.mail.newline}).setRaw(this.mail.raw
):this._useMixed?this.message=this._createMixed():this._useAlternative?this.message=this._createAlternative(
):this._useRelated?this.message=this._createRelated():this.message=this._createContentNode(!1,[].concat(
this._alternatives||[]).concat(this._attachments.attached||[]).shift()||{contentType:"text/plain",content:""}),
this.mail.headers&&this.message.addHeader(this.mail.headers),["from","sender","to","cc","bcc","reply-to","in-reply-to",
"references","subject","message-id","date"].forEach(e=>{var t=e.replace(/-(\w)/g,(e,t)=>t.toUpperCase());
this.mail[t]&&this.message.setHeader(e,this.mail[t])}),this.mail.envelope&&this.message.setEnvelope(this.mail.envelope),
this.message.messageId(),this.message}getAttachments(e){let t,i,n=[].concat(this.mail.attachments||[]).map((e,t)=>{let i
var n=/^message\//i.test(e.contentType);return/^data:/i.test(e.path||e.href)&&(e=this._processDataUrl(e)),i={
contentType:e.contentType||fu.detectMimeType(e.filename||e.path||e.href||"bin"),
contentDisposition:e.contentDisposition||(n?"inline":"attachment"),
contentTransferEncoding:"contentTransferEncoding"in e?e.contentTransferEncoding:"base64"},
e.filename?i.filename=e.filename:n||!1===e.filename||(i.filename=(e.path||e.href||"").split("/").pop().split("?").shift(
)||"attachment-"+(t+1),i.filename.indexOf(".")<0&&(i.filename+="."+fu.detectExtension(i.contentType))),
/^https?:\/\//i.test(e.path)&&(e.href=e.path,e.path=void 0),e.cid&&(i.cid=e.cid),e.raw?i.raw=e.raw:e.path?i.content={
path:e.path}:e.href?i.content={href:e.href,httpHeaders:e.httpHeaders}:i.content=e.content||"",e.encoding&&(
i.encoding=e.encoding),e.headers&&(i.headers=e.headers),i});return this.mail.icalEvent&&(
t="object"==typeof this.mail.icalEvent&&(
this.mail.icalEvent.content||this.mail.icalEvent.path||this.mail.icalEvent.href||this.mail.icalEvent.raw
)?this.mail.icalEvent:{content:this.mail.icalEvent},i={},Object.keys(t).forEach(e=>{i[e]=t[e]}),
i.contentType="application/ics",i.headers||(i.headers={}),i.filename=i.filename||"invite.ics",
i.headers["Content-Disposition"]="attachment",i.headers["Content-Transfer-Encoding"]="base64"),e?{attached:n.filter(
e=>!e.cid).concat(i||[]),related:n.filter(e=>!!e.cid)}:{attached:n.concat(i||[]),related:[]}}getAlternatives(){let i=[],
e,t,n,a,o,r;return this.mail.text&&((e="object"==typeof this.mail.text&&(
this.mail.text.content||this.mail.text.path||this.mail.text.href||this.mail.text.raw)?this.mail.text:{
content:this.mail.text}).contentType="text/plain; charset=utf-8"),this.mail.watchHtml&&((
n="object"==typeof this.mail.watchHtml&&(
this.mail.watchHtml.content||this.mail.watchHtml.path||this.mail.watchHtml.href||this.mail.watchHtml.raw
)?this.mail.watchHtml:{content:this.mail.watchHtml}).contentType="text/watch-html; charset=utf-8"),this.mail.amp&&((
a="object"==typeof this.mail.amp&&(this.mail.amp.content||this.mail.amp.path||this.mail.amp.href||this.mail.amp.raw
)?this.mail.amp:{content:this.mail.amp}).contentType="text/x-amp-html; charset=utf-8"),this.mail.icalEvent&&(
o="object"==typeof this.mail.icalEvent&&(
this.mail.icalEvent.content||this.mail.icalEvent.path||this.mail.icalEvent.href||this.mail.icalEvent.raw
)?this.mail.icalEvent:{content:this.mail.icalEvent},r={},Object.keys(o).forEach(e=>{r[e]=o[e]}),
r.content&&"object"==typeof r.content&&(r.content._resolve=!0),r.filename=!1,
r.contentType="text/calendar; charset=utf-8; method="+(r.method||"PUBLISH").toString().trim().toUpperCase(),r.headers||(
r.headers={})),this.mail.html&&((t="object"==typeof this.mail.html&&(
this.mail.html.content||this.mail.html.path||this.mail.html.href||this.mail.html.raw)?this.mail.html:{
content:this.mail.html}).contentType="text/html; charset=utf-8"),[].concat(e||[]).concat(n||[]).concat(a||[]).concat(
t||[]).concat(r||[]).concat(this.mail.alternatives||[]).forEach(e=>{let t;/^data:/i.test(e.path||e.href)&&(
e=this._processDataUrl(e)),t={contentType:e.contentType||fu.detectMimeType(e.filename||e.path||e.href||"txt"),
contentTransferEncoding:e.contentTransferEncoding},e.filename&&(t.filename=e.filename),/^https?:\/\//i.test(e.path)&&(
e.href=e.path,e.path=void 0),e.raw?t.raw=e.raw:e.path?t.content={path:e.path}:e.href?t.content={href:e.href
}:t.content=e.content||"",e.encoding&&(t.encoding=e.encoding),e.headers&&(t.headers=e.headers),i.push(t)}),i}
_createMixed(e){let t;return t=e?e.createChild("multipart/mixed",{disableUrlAccess:this.mail.disableUrlAccess,
disableFileAccess:this.mail.disableFileAccess,normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}
):new mu("multipart/mixed",{baseBoundary:this.mail.baseBoundary,textEncoding:this.mail.textEncoding,
boundaryPrefix:this.mail.boundaryPrefix,disableUrlAccess:this.mail.disableUrlAccess,
disableFileAccess:this.mail.disableFileAccess,normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}
),this._useAlternative?this._createAlternative(t):this._useRelated&&this._createRelated(t),[].concat(
!this._useAlternative&&this._alternatives||[]).concat(this._attachments.attached||[]).forEach(e=>{
this._useRelated&&e===this._htmlNode||this._createContentNode(t,e)}),t}_createAlternative(e){let t;
return t=e?e.createChild("multipart/alternative",{disableUrlAccess:this.mail.disableUrlAccess,
disableFileAccess:this.mail.disableFileAccess,normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}
):new mu("multipart/alternative",{baseBoundary:this.mail.baseBoundary,textEncoding:this.mail.textEncoding,
boundaryPrefix:this.mail.boundaryPrefix,disableUrlAccess:this.mail.disableUrlAccess,
disableFileAccess:this.mail.disableFileAccess,normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}
),this._alternatives.forEach(e=>{this._useRelated&&this._htmlNode===e?this._createRelated(t):this._createContentNode(t,e
)}),t}_createRelated(e){let t;return t=e?e.createChild('multipart/related; type="text/html"',{
disableUrlAccess:this.mail.disableUrlAccess,disableFileAccess:this.mail.disableFileAccess,
normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}):new mu('multipart/related; type="text/html"'
,{baseBoundary:this.mail.baseBoundary,textEncoding:this.mail.textEncoding,boundaryPrefix:this.mail.boundaryPrefix,
disableUrlAccess:this.mail.disableUrlAccess,disableFileAccess:this.mail.disableFileAccess,
normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}),this._createContentNode(t,this._htmlNode),
this._attachments.related.forEach(e=>this._createContentNode(t,e)),t}_createContentNode(e,t){(t=t||{}
).content=t.content||"";let i;var n=(t.encoding||"utf8").toString().toLowerCase().replace(/[-_\s]/g,"");
return i=e?e.createChild(t.contentType,{filename:t.filename,textEncoding:this.mail.textEncoding,
disableUrlAccess:this.mail.disableUrlAccess,disableFileAccess:this.mail.disableFileAccess,
normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}):new mu(t.contentType,{filename:t.filename,
baseBoundary:this.mail.baseBoundary,textEncoding:this.mail.textEncoding,boundaryPrefix:this.mail.boundaryPrefix,
disableUrlAccess:this.mail.disableUrlAccess,disableFileAccess:this.mail.disableFileAccess,
normalizeHeaderKey:this.mail.normalizeHeaderKey,newline:this.mail.newline}),t.headers&&i.addHeader(t.headers),
t.cid&&i.setHeader("Content-Id","<"+t.cid.replace(/[<>]/g,"")+">"),t.contentTransferEncoding?i.setHeader(
"Content-Transfer-Encoding",t.contentTransferEncoding):this.mail.encoding&&/^text\//i.test(t.contentType)&&i.setHeader(
"Content-Transfer-Encoding",this.mail.encoding),/^text\//i.test(t.contentType)&&!t.contentDisposition||i.setHeader(
"Content-Disposition",t.contentDisposition||(t.cid?"inline":"attachment")),"string"!=typeof t.content||["utf8","usascii"
,"ascii"].includes(n)||(t.content=Buffer.from(t.content,n)),t.raw?i.setRaw(t.raw):i.setContent(t.content),i}
_processDataUrl(t){let e=(t.path||t.href).match(/^data:((?:[^;]*;)*(?:[^,]*)),(.*)$/i);return e&&(
t.content=/\bbase64$/i.test(e[1])?Buffer.from(e[2],"base64"):Buffer.from(decodeURIComponent(e[2])),"path"in t&&(
t.path=!1),"href"in t&&(t.href=!1),e[1].split(";").forEach(e=>{/^\w+\/[^/]+$/i.test(e)&&(
t.contentType=t.contentType||e.toLowerCase())})),t}};class gu extends mp.default.Transform{constructor(e){super(e),
this.lastBytes=Buffer.alloc(4),this.headersParsed=!1,this.headerBytes=0,this.headerChunks=[],this.rawHeaders=!1,
this.bodySize=0}updateLastBytes(t){var i=this.lastBytes.length,n=Math.min(t.length,i);for(let e=0,t=i-n;e<t;e++
)this.lastBytes[e]=this.lastBytes[e+n];for(let e=1;e<=n;e++)this.lastBytes[i-e]=t[t.length-e]}checkHeaders(i){var n,a,o;
if(this.headersParsed)return!0;n=this.lastBytes.length;let r=0;for(let e=this.curLinePos=0,
t=this.lastBytes.length+i.length;e<t;e++)if(10===(e<n?this.lastBytes[e]:i[e-n])&&e){if(
a=e-1<n?this.lastBytes[e-1]:i[e-1-n],o=1<e&&(e-2<n?this.lastBytes[e-2]:i[e-2-n]),10===a){this.headersParsed=!0,r=e-n+1,
this.headerBytes+=r;break}if(13===a&&10===o){this.headersParsed=!0,r=e-n+1,this.headerBytes+=r;break}}if(
this.headersParsed){if(this.headerChunks.push(i.slice(0,r)),this.rawHeaders=Buffer.concat(this.headerChunks,
this.headerBytes),this.headerChunks=null,this.emit("headers",this.parseHeaders()),i.length-1>r){let e=i.slice(r);
this.bodySize+=e.length,setImmediate(()=>this.push(e))}return!1}return this.headerBytes+=i.length,
this.headerChunks.push(i),this.updateLastBytes(i),!1}_transform(e,t,i){if(!e||!e.length)return i();"string"==typeof e&&(
e=Buffer.from(e,t));let n;try{n=this.checkHeaders(e)}catch(e){return i(e)}n&&(this.bodySize+=e.length,this.push(e)),
setImmediate(i)}_flush(e){var t;this.headerChunks&&(t=Buffer.concat(this.headerChunks,this.headerBytes),
this.bodySize+=t.length,this.push(t),this.headerChunks=null),e()}parseHeaders(){let t=(this.rawHeaders||"").toString(
).split(/\r?\n/);for(let e=t.length-1;0<e;e--)/^\s/.test(t[e])&&(t[e-1]+="\n"+t[e],t.splice(e,1));return t.filter(
e=>e.trim()).map(e=>({key:e.substr(0,e.indexOf(":")).trim().toLowerCase(),line:e}))}}Ul=gu,_=mp.default.Transform;
const vu=lp.default;class xu extends _{constructor(e){super(),e=e||{},this.chunkBuffer=[],this.chunkBufferLen=0,
this.bodyHash=vu.createHash(e.hashAlgo||"sha1"),this.remainder="",this.byteLength=0,this.debug=e.debug,
this._debugBody=!!e.debug&&[]}updateHash(i){let e,t="",n="file";for(let e=i.length-1;0<=e;e--){var a=i[e];if(
"file"!==n||10!==a&&13!==a)if("file"!==n||9!==a&&32!==a){if(("line"!==n||9!==a&&32!==a)&&("file"===n||"line"===n)&&(
n="body",e===i.length-1))break}else n="line";if(0===e){if("file"===n&&(!this.remainder||/[\r\n]$/.test(this.remainder)
)||"line"===n&&(!this.remainder||/[ \t]$/.test(this.remainder)))return void(this.remainder+=i.toString("binary"));if(
"line"===n||"file"===n){t=i.toString("binary"),i=!1;break}}if("body"===n){t=i.slice(e+1).toString("binary"),i=i.slice(0,
e+1);break}}let o=!!this.remainder;if(i&&!o)for(let e=0,t=i.length;e<t;e++){if(e&&10===i[e]&&13!==i[e-1]){o=!0;break}if(
e&&13===i[e]&&32===i[e-1]){o=!0;break}if(e&&32===i[e]&&32===i[e-1]){o=!0;break}if(9===i[e]){o=!0;break}}o?(
e=this.remainder+(i?i.toString("binary"):""),this.remainder=t,e=e.replace(/\r?\n/g,"\n").replace(/[ \t]*$/gm,""
).replace(/[ \t]+/gm," ").replace(/\n/g,"\r\n"),i=Buffer.from(e,"binary")):t&&(this.remainder=t),
this.debug&&this._debugBody.push(i),this.bodyHash.update(i)}_transform(e,t,i){if(!e||!e.length)return i();
"string"==typeof e&&(e=Buffer.from(e,t)),this.updateHash(e),this.byteLength+=e.length,this.push(e),i()}_flush(e){
/[\r\n]$/.test(this.remainder)&&2<this.byteLength&&this.bodyHash.update(Buffer.from("\r\n")),this.byteLength||this.push(
Buffer.from("\r\n")),this.emit("hash",this.bodyHash.digest("base64"),!!this.debug&&Buffer.concat(this._debugBody)),e()}}
o=xu;const yu=wp.default,bu=R,_u=lp.default,wu=((Al={exports:{}}).exports=(e,t,i,n)=>{let a=Kt(e,(n=n||{}
).headerFieldNames||"From:Sender:Reply-To:Subject:Date:Message-ID:To:Cc:MIME-Version:Content-Type:Content-Transfer-Encoding:Content-ID:Content-Description:Resent-Date:Resent-From:Resent-Sender:Resent-To:Resent-Cc:Resent-Message-ID:In-Reply-To:References:List-Id:List-Help:List-Unsubscribe:List-Subscribe:List-Post:List-Owner:List-Archive"
,n.skipFields);var e=n.domainName,o=n.keySelector,r=a.fieldNames,e=["v=1","a=rsa-"+t,"c=relaxed/relaxed",
"d="+yu.toASCII(e),"q=dns/txt","s="+o,"bh="+i,"h="+r].join("; "),o=bu.foldLines("DKIM-Signature: "+e,76)+";\r\n b=";
let s,c;a.headers+="dkim-signature:"+Jt(o),(s=_u.createSign(("rsa-"+t).toUpperCase())).update(a.headers);try{c=s.sign(
n.privateKey,"base64")}catch(e){return!1}return o+c.replace(/(^.{73}|.{75}(?!\r?\n|\r))/g,"$&\r\n ").trim()},
Al.exports.relaxedHeaders=Kt,Ul),ku=o,Eu=Al.exports,Su=mp.default.PassThrough,Tu=Sp.default,Ru=Tp.default,Ou=lp.default;
class Au{constructor(e,t,i,n){this.options=e||{},this.keys=t,this.cacheTreshold=Number(this.options.cacheTreshold
)||131072,this.hashAlgo=this.options.hashAlgo||"sha256",this.cacheDir=this.options.cacheDir||!1,this.chunks=[],
this.chunklen=0,this.readPos=0,this.cachePath=!!this.cacheDir&&Ru.join(this.cacheDir,"message."+Date.now(
)+"-"+Ou.randomBytes(14).toString("hex")),this.cache=!1,this.headers=!1,this.bodyHash=!1,this.parser=!1,
this.relaxedBody=!1,this.input=i,this.output=n,this.output.usingCache=!1,this.errored=!1,this.input.on("error",e=>{
this.errored=!0,this.cleanup(),n.emit("error",e)})}cleanup(){this.cache&&this.cachePath&&Tu.unlink(this.cachePath,()=>!1
)}createReadCache(){this.cache=Tu.createReadStream(this.cachePath),this.cache.once("error",e=>{this.cleanup(),
this.output.emit("error",e)}),this.cache.once("close",()=>{this.cleanup()}),this.cache.pipe(this.output)}sendNextChunk(
){var e;if(!this.errored)return this.readPos>=this.chunks.length?this.cache?this.createReadCache():this.output.end():(
e=this.chunks[this.readPos++],!1===this.output.write(e)?this.output.once("drain",()=>{this.sendNextChunk()}
):void setImmediate(()=>this.sendNextChunk()))}sendSignedOutput(){let t=0,i=()=>{if(t>=this.keys.length
)return this.output.write(this.parser.rawHeaders),setImmediate(()=>this.sendNextChunk());var e=this.keys[t++];return(
e=Eu(this.headers,this.hashAlgo,this.bodyHash,{domainName:e.domainName,keySelector:e.keySelector,
privateKey:e.privateKey,headerFieldNames:this.options.headerFieldNames,skipFields:this.options.skipFields})
)&&this.output.write(Buffer.from(e+"\r\n")),setImmediate(i)};if(this.bodyHash&&this.headers)return i();
this.output.write(this.parser.rawHeaders),this.sendNextChunk()}createWriteCache(){this.output.usingCache=!0,
this.cache=Tu.createWriteStream(this.cachePath),this.cache.once("error",e=>{this.cleanup(),this.relaxedBody.unpipe(
this.cache),this.relaxedBody.on("readable",()=>{for(;null!==this.relaxedBody.read(););}),this.errored=!0,
this.output.emit("error",e)}),this.cache.once("close",()=>{this.sendSignedOutput()}),
this.relaxedBody.removeAllListeners("readable"),this.relaxedBody.pipe(this.cache)}signStream(){this.parser=new wu,
this.relaxedBody=new ku({hashAlgo:this.hashAlgo}),this.parser.on("headers",e=>{this.headers=e}),this.relaxedBody.on(
"hash",e=>{this.bodyHash=e}),this.relaxedBody.on("readable",()=>{var e;if(!this.cache)for(;null!==(
e=this.relaxedBody.read());)if(this.chunks.push(e),this.chunklen+=e.length,
this.chunklen>=this.cacheTreshold&&this.cachePath)return this.createWriteCache()}),this.relaxedBody.on("end",()=>{
this.cache||this.sendSignedOutput()}),this.parser.pipe(this.relaxedBody),setImmediate(()=>this.input.pipe(this.parser))}
}const Cu=bp.default,Pu=kp.default,ju=Rp.default,Nu=h.exports,Lu=Kl,Iu=R,qu=(w=gp.default,h.exports),Mu=v,Hu=b,Uu=class{
constructor(e){this.options=e||{},this.keys=[].concat(this.options.keys||{domainName:e.domainName,
keySelector:e.keySelector,privateKey:e.privateKey})}sign(e,t){var i=new Su;let n=e,a=!1,o=(Buffer.isBuffer(e)?(a=e,
n=new Su):"string"==typeof e&&(a=Buffer.from(e),n=new Su),this.options),r=(t&&Object.keys(t).length&&(o={},Object.keys(
this.options||{}).forEach(e=>{o[e]=this.options[e]}),Object.keys(t||{}).forEach(e=>{e in o||(o[e]=t[e])})),new Au(o,
this.keys,n,i));return setImmediate(()=>{r.signStream(),a&&setImmediate(()=>{n.end(a)})}),i}},zu=fp.default,
Bu=Rp.default,Du=i,Fu=class{constructor(e,t){this.mailer=e,this.data={},this.message=null,t=t||{};let i=e.options||{},
n=e._defaults||{};Object.keys(t).forEach(e=>{this.data[e]=t[e]}),this.data.headers=this.data.headers||{},Object.keys(n
).forEach(e=>{e in this.data?"headers"===e&&Object.keys(n.headers).forEach(e=>{e in this.data.headers||(
this.data.headers[e]=n.headers[e])}):this.data[e]=n[e]}),["disableFileAccess","disableUrlAccess","normalizeHeaderKey"
].forEach(e=>{e in i&&(this.data[e]=i[e])})}resolveContent(...e){return Nu.resolveContent(...e)}resolveAll(a){let i=[[
this.data,"html"],[this.data,"text"],[this.data,"watchHtml"],[this.data,"amp"],[this.data,"icalEvent"]],n=(
this.data.alternatives&&this.data.alternatives.length&&this.data.alternatives.forEach((e,t)=>{i.push([
this.data.alternatives,t])}),this.data.attachments&&this.data.attachments.length&&this.data.attachments.forEach((e,t)=>{
e.filename||(e.filename=(e.path||e.href||"").split("/").pop().split("?").shift()||"attachment-"+(t+1),
e.filename.indexOf(".")<0&&(e.filename+="."+Iu.detectExtension(e.contentType))),e.contentType||(
e.contentType=Iu.detectMimeType(e.filename||e.path||e.href||"bin")),i.push([this.data.attachments,t])}),new Lu),e=([
"from","to","cc","bcc","sender","replyTo"].forEach(e=>{let t;this.message?t=[].concat(n._parseAddresses(
this.message.getHeader("replyTo"===e?"reply-to":e))||[]):this.data[e]&&(t=[].concat(n._parseAddresses(this.data[e])||[])
),t&&t.length?this.data[e]=t:e in this.data&&(this.data[e]=null)}),["from","sender","replyTo"].forEach(e=>{
this.data[e]&&(this.data[e]=this.data[e].shift())}),0),o=()=>{if(e>=i.length)return a(null,this.data);let n=i[e++];if(
!n[0]||!n[0][n[1]])return o();Nu.resolveContent(...n,(e,t)=>{if(e)return a(e);let i={content:t};
n[0][n[1]]&&"object"==typeof n[0][n[1]]&&!Buffer.isBuffer(n[0][n[1]])&&Object.keys(n[0][n[1]]).forEach(e=>{e in i||[
"content","path","href","raw"].includes(e)||(i[e]=n[0][n[1]][e])}),n[0][n[1]]=i,o()})};setImmediate(()=>o())}normalize(t
){let n=this.data.envelope||this.message.getEnvelope(),a=this.message.messageId();this.resolveAll((e,i)=>{if(e)return t(
e);if(i.envelope=n,i.messageId=a,["html","text","watchHtml","amp"].forEach(e=>{i[e]&&i[e].content&&(
"string"==typeof i[e].content?i[e]=i[e].content:Buffer.isBuffer(i[e].content)&&(i[e]=i[e].content.toString()))}),
i.icalEvent&&Buffer.isBuffer(i.icalEvent.content)&&(i.icalEvent.content=i.icalEvent.content.toString("base64"),
i.icalEvent.encoding="base64"),i.alternatives&&i.alternatives.length&&i.alternatives.forEach(e=>{
e&&e.content&&Buffer.isBuffer(e.content)&&(e.content=e.content.toString("base64"),e.encoding="base64")}),
i.attachments&&i.attachments.length&&i.attachments.forEach(e=>{e&&e.content&&Buffer.isBuffer(e.content)&&(
e.content=e.content.toString("base64"),e.encoding="base64")}),i.normalizedHeaders={},Object.keys(i.headers||{}).forEach(
e=>{let t=[].concat(i.headers[e]||[]).shift();(t=t&&t.value||t)&&(["references","in-reply-to","message-id","content-id"
].includes(e)&&(t=this.message._encodeHeaderValue(e,t)),i.normalizedHeaders[e]=t)}),i.list&&"object"==typeof i.list){
let e=this._getListHeaders(i.list);e.forEach(e=>{i.normalizedHeaders[e.key]=e.value.map(e=>e&&e.value||e).join(", ")})}
return i.references&&(i.normalizedHeaders.references=this.message._encodeHeaderValue("references",i.references)),
i.inReplyTo&&(i.normalizedHeaders["in-reply-to"]=this.message._encodeHeaderValue("in-reply-to",i.inReplyTo)),t(null,i)})
}setMailerHeader(){this.message&&this.data.xMailer&&this.message.setHeader("X-Mailer",this.data.xMailer)}
setPriorityHeaders(){if(this.message&&this.data.priority)switch((this.data.priority||"").toString().toLowerCase()){
case"high":this.message.setHeader("X-Priority","1 (Highest)"),this.message.setHeader("X-MSMail-Priority","High"),
this.message.setHeader("Importance","High");break;case"low":this.message.setHeader("X-Priority","5 (Lowest)"),
this.message.setHeader("X-MSMail-Priority","Low"),this.message.setHeader("Importance","Low")}}setListHeaders(){
this.message&&this.data.list&&"object"==typeof this.data.list&&this.data.list&&"object"==typeof this.data.list&&this._getListHeaders(
this.data.list).forEach(t=>{t.value.forEach(e=>{this.message.addHeader(t.key,e)})})}_getListHeaders(e){
return Object.keys(e).map(i=>({key:"list-"+i.toLowerCase().trim(),value:[].concat(e[i]||[]).map(e=>({prepared:!0,
foldLines:!0,value:[].concat(e||[]).map(t=>{if((t="string"==typeof t?{url:t}:t)&&t.url){if("id"===i.toLowerCase().trim()
){let e=t.comment||"";return e=Iu.isPlainText(e)?'"'+e+'"':Iu.encodeWord(e),(t.comment?e+" ":"")+this._formatListUrl(
t.url).replace(/^<[^:]+\/{,2}/,"")}let e=t.comment||"";return Iu.isPlainText(e)||(e=Iu.encodeWord(e)),
this._formatListUrl(t.url)+(t.comment?" ("+e+")":"")}return""}).filter(e=>e).join(", ")}))}))}_formatListUrl(e){
return e=e.replace(/[\s<]+|[\s>]+/g,""),/^(https?|mailto|ftp):/.test(e)?"<"+e+">":/^[^@]+@[^@]+$/.test(e
)?"<mailto:"+e+">":"<http://"+e+">"}},Vu=bp.default,$u=yp.default,Gu=lp.default;class Ku extends w{constructor(e,t,i){
super(),this.options=t||{},this._defaults=i||{},this._defaultPlugins={compile:[(...e)=>this._convertDataImages(...e)],
stream:[]},this._userPlugins={compile:[],stream:[]},this.meta=new Map,this.dkim=!!this.options.dkim&&new Uu(
this.options.dkim),this.transporter=e,(this.transporter.mailer=this).logger=qu.getLogger(this.options,{
component:this.options.component||"mail"}),this.logger.debug({tnx:"create"},"Creating transport: %s",
this.getVersionString()),"function"==typeof this.transporter.on&&(this.transporter.on("log",e=>{this.logger.debug({
tnx:"transport"},"%s: %s",e.type,e.message)}),this.transporter.on("error",e=>{this.logger.error({err:e,tnx:"transport"},
"Transport Error: %s",e.message),this.emit("error",e)}),this.transporter.on("idle",(...e)=>{this.emit("idle",...e)})),[
"close","isIdle","verify"].forEach(t=>{this[t]=(...e)=>"function"==typeof this.transporter[t]?(
"verify"===t&&"function"==typeof this.getSocket&&(this.transporter.getSocket=this.getSocket,this.getSocket=!1),
this.transporter[t](...e)):(this.logger.warn({tnx:"transport",methodName:t},
"Non existing method %s called for transport",t),!1)}),
this.options.proxy&&"string"==typeof this.options.proxy&&this.setupProxy(this.options.proxy)}use(e,t){return e=(e||""
).toString(),this._userPlugins.hasOwnProperty(e)?this._userPlugins[e].push(t):this._userPlugins[e]=[t],this}sendMail(e,i
){let t,n=(i||(t=new Promise((e,t)=>{i=qu.callbackPromise(e,t)})),"function"==typeof this.getSocket&&(
this.transporter.getSocket=this.getSocket,this.getSocket=!1),new Fu(this,e));return this.logger.debug({tnx:"transport",
name:this.transporter.name,version:this.transporter.version,action:"send"},"Sending mail using %s/%s",
this.transporter.name,this.transporter.version),this._processPlugins("compile",n,e=>{if(e)return this.logger.error({
err:e,tnx:"plugin",action:"compile"},"PluginCompile Error: %s",e.message),i(e);n.message=new Hu(n.data).compile(),
n.setMailerHeader(),n.setPriorityHeaders(),n.setListHeaders(),this._processPlugins("stream",n,e=>{if(e
)return this.logger.error({err:e,tnx:"plugin",action:"stream"},"PluginStream Error: %s",e.message),i(e);(
n.data.dkim||this.dkim)&&n.message.processFunc(e=>{let t=n.data.dkim?new Uu(n.data.dkim):this.dkim;
return this.logger.debug({tnx:"DKIM",messageId:n.message.messageId(),dkimDomains:t.keys.map(
e=>e.keySelector+"."+e.domainName).join(", ")},"Signing outgoing message with %s keys",t.keys.length),t.sign(e,
n.data._dkim)}),this.transporter.send(n,(...e)=>{e[0]&&this.logger.error({err:e[0],tnx:"transport",action:"send"},
"Send Error: %s",e[0].message),i(...e)})})}),t}getVersionString(){return zu.format("%s (%s; +%s; %s/%s)",Du.name,
Du.version,Du.homepage,this.transporter.name,this.transporter.version)}_processPlugins(e,i,n){if(e=(e||"").toString(),
!this._userPlugins.hasOwnProperty(e))return n();let a=this._userPlugins[e]||[],o=this._defaultPlugins[e]||[];if(
a.length&&this.logger.debug({tnx:"transaction",pluginCount:a.length,step:e},"Using %s plugins for %s",a.length,e),
a.length+o.length===0)return n();let r=0,s="default",c=()=>{let e="default"===s?o:a;if(r>=e.length){if(
"default"!==s||!a.length)return n();s="user",r=0,e=a}let t=e[r++];t(i,e=>{if(e)return n(e);c()})};c()}setupProxy(e){
let u=Bu.parse(e);this.getSocket=(r,s)=>{var n,c,l,p,e=u.protocol.replace(/:$/,"").toLowerCase();if(this.meta.has(
"proxy_handler_"+e))return this.meta.get("proxy_handler_"+e)(u,r,s);switch(e){case"http":case"https":{function d(e){if(
!o){o=!0;try{a.destroy()}catch(e){}p(e)}}n=u.href,c=r.port,l=r.host,p=(e,t)=>e?s(e):s(null,{connection:t});
let e=ju.parse(n),t,i,a,o=(t={host:e.hostname,port:Number(e.port)?Number(e.port):"https:"===e.protocol?443:80},
i="https:"===e.protocol?(t.rejectUnauthorized=!1,Pu.connect.bind(Pu)):Cu.connect.bind(Cu),!1);return void(a=i(t,()=>{if(
!o){let t={Host:l+":"+c,Connection:"close"},i=(e.auth&&(t["Proxy-Authorization"]="Basic "+Buffer.from(e.auth).toString(
"base64")),a.write("CONNECT "+l+":"+c+" HTTP/1.1\r\n"+Object.keys(t).map(e=>e+": "+t[e]).join("\r\n")+"\r\n\r\n"),""),
n=e=>{let t;if(!o&&(i+=e.toString("binary"),t=i.match(/\r\n\r\n/))){if(a.removeListener("data",n),e=i.substr(
t.index+t[0].length),i=i.substr(0,t.index),e&&a.unshift(Buffer.from(e,"binary")),o=!0,(t=i.match(
/^HTTP\/\d+\.\d+ (\d+)/i))&&"2"===(t[1]||"").charAt(0))return a.removeListener("error",d),p(null,a);try{a.destroy()
}catch(e){}return p(new Error("Invalid response from proxy"+(t&&": "+t[1]||"")))}};a.on("data",n)}})).once("error",d)}
case"socks":case"socks5":case"socks4":case"socks4a":{if(!this.meta.has("proxy_socks_module"))return s(new Error(
"Socks module not loaded"));let i=e=>{var t,i,n=!!this.meta.get("proxy_socks_module").SocksClient;let a=n?this.meta.get(
"proxy_socks_module").SocksClient:this.meta.get("proxy_socks_module"),o=(i=Number(u.protocol.replace(/\D/g,""))||5,{
proxy:{ipaddress:e,port:Number(u.port),type:i},[n?"destination":"target"]:{host:r.host,port:r.port},command:"connect"});
u.auth&&(e=decodeURIComponent(u.auth.split(":").shift()),t=decodeURIComponent(u.auth.split(":").pop()),n?(
o.proxy.userId=e,o.proxy.password=t):4===i?o.userid=e:o.authentication={username:e,password:t}),a.createConnection(o,(e,
t)=>e?s(e):s(null,{connection:t.socket||t}))};return Vu.isIP(u.hostname)?i(u.hostname):$u.resolve(u.hostname,(e,t)=>{if(
e)return s(e);i(Array.isArray(t)?t[0]:t)})}}s(new Error("Unknown proxy configuration"))}}_convertDataImages(r,i){if(
!this.options.attachDataUrls&&!r.data.attachDataUrls||!r.data.html)return i();r.resolveContent(r.data,"html",(e,t)=>{if(
e)return i(e);let o=0;t=(t||"").toString().replace(/(<img\b[^>]* src\s*=[\s"']*)(data:([^;]+);[^"'>\s]+)/gi,(e,t,i,n)=>{
var a=Gu.randomBytes(10).toString("hex")+"@localhost";return r.data.attachments||(r.data.attachments=[]),Array.isArray(
r.data.attachments)||(r.data.attachments=[].concat(r.data.attachments||[])),r.data.attachments.push({path:i,cid:a,
filename:"image-"+ ++o+"."+Mu.detectExtension(n)}),t+"cid:"+a}),r.data.html=t,i()})}set(e,t){return this.meta.set(e,t)}
get(e){return this.meta.get(e)}}zl=Ku;class Ju extends mp.default.Transform{constructor(e){super(e),this.options=e||{},
this._curLine="",this.inByteCount=0,this.outByteCount=0,this.lastByte=!1}_transform(e,t,i){let n=[],a=0,o,r,s=0,c;if(
!e||!e.length)return i();for("string"==typeof e&&(e=Buffer.from(e)),this.inByteCount+=e.length,o=0,r=e.length;o<r;o++
)46===e[o]?(o&&10===e[o-1]||!(o||this.lastByte&&10!==this.lastByte))&&(c=e.slice(s,o+1),n.push(c),n.push(Buffer.from("."
)),a+=c.length+1,s=o+1):10===e[o]&&(o&&13!==e[o-1]||!o&&13!==this.lastByte)&&(o>s?(c=e.slice(s,o),n.push(c),
a+=c.length+2):a+=2,n.push(Buffer.from("\r\n")),s=o+1);a?(s<e.length&&(c=e.slice(s),n.push(c),a+=c.length),
this.outByteCount+=a,this.push(Buffer.concat(n,a))):(this.outByteCount+=e.length,this.push(e)),
this.lastByte=e[e.length-1],i()}_flush(e){var t=10===this.lastByte?Buffer.from(".\r\n"):13===this.lastByte?Buffer.from(
"\n.\r\n"):Buffer.from("\r\n.\r\n");this.outByteCount+=t.length,this.push(t),e()}}const Qu=i,Wu=(
k=gp.default.EventEmitter,bp.default),Xu=kp.default,Yu=_p.default,Zu=lp.default,eh=Ju,th=mp.default.PassThrough,
ih=h.exports;class nh extends k{constructor(e){super(e),this.id=Zu.randomBytes(8).toString("base64").replace(/\W/g,""),
this.stage="init",this.options=e||{},this.secureConnection=!!this.options.secure,
this.alreadySecured=!!this.options.secured,this.port=Number(this.options.port)||(this.secureConnection?465:587),
this.host=this.options.host||"localhost",void 0===this.options.secure&&465===this.port&&(this.secureConnection=!0),
this.name=this.options.name||this._getHostname(),this.logger=ih.getLogger(this.options,{
component:this.options.component||"smtp-connection",sid:this.id}),this.customAuth=new Map,Object.keys(
this.options.customAuth||{}).forEach(e=>{var t=(e||"").toString().trim().toUpperCase();t&&this.customAuth.set(t,
this.options.customAuth[e])}),this.version=Qu.version,this.authenticated=!1,this.destroyed=!1,
this.secure=!!this.secureConnection,this._remainder="",this._responseQueue=[],this.lastServerResponse=!1,this._socket=!1
,this._supportedAuth=[],this.allowsAuth=!1,this._envelope=!1,this._supportedExtensions=[],this._maxAllowedSize=0,
this._responseActions=[],this._recipientQueue=[],this._greetingTimeout=!1,this._connectionTimeout=!1,this._destroyed=!1,
this._closing=!1,this._onSocketData=e=>this._onData(e),this._onSocketError=e=>this._onError(e,"ESOCKET",!1,"CONN"),
this._onSocketClose=()=>this._onClose(),this._onSocketEnd=()=>this._onEnd(),this._onSocketTimeout=()=>this._onTimeout()}
connect(e){if("function"==typeof e){this.once("connect",()=>{this.logger.debug({tnx:"smtp"},"SMTP handshake finished"),
e()});var t=this._isDestroyedMessage("connect");if(t)return e(this._formatError(t,"ECONNECTION",!1,"CONN"))}let i={
port:this.port,host:this.host},n=(this.options.localAddress&&(i.localAddress=this.options.localAddress),()=>{
this._connectionTimeout=setTimeout(()=>{this._onError("Connection timeout","ETIMEDOUT",!1,"CONN")},
this.options.connectionTimeout||12e4),this._socket.on("error",this._onSocketError)});if(!this.options.connection
)return this.options.socket?(this._socket=this.options.socket,ih.resolveHostname(i,(e,t)=>{if(e)return setImmediate((
)=>this._onError(e,"EDNS",!1,"CONN"));this.logger.debug({tnx:"dns",source:i.host,resolved:t.host,cached:!!t.cached},
"Resolved %s as %s [cache %s]",i.host,t.host,t.cached?"hit":"miss"),Object.keys(t).forEach(e=>{"_"!==e.charAt(0
)&&t[e]&&(i[e]=t[e])});try{this._socket.connect(this.port,this.host,()=>{this._socket.setKeepAlive(!0),this._onConnect()
}),n()}catch(e){return setImmediate(()=>this._onError(e,"ECONNECTION",!1,"CONN"))}})):this.secureConnection?(
this.options.tls&&Object.keys(this.options.tls).forEach(e=>{i[e]=this.options.tls[e]}),ih.resolveHostname(i,(e,t)=>{if(e
)return setImmediate(()=>this._onError(e,"EDNS",!1,"CONN"));this.logger.debug({tnx:"dns",source:i.host,resolved:t.host,
cached:!!t.cached},"Resolved %s as %s [cache %s]",i.host,t.host,t.cached?"hit":"miss"),Object.keys(t).forEach(e=>{
"_"!==e.charAt(0)&&t[e]&&(i[e]=t[e])});try{this._socket=Xu.connect(i,()=>{this._socket.setKeepAlive(!0),this._onConnect(
)}),n()}catch(e){return setImmediate(()=>this._onError(e,"ECONNECTION",!1,"CONN"))}})):ih.resolveHostname(i,(e,t)=>{if(e
)return setImmediate(()=>this._onError(e,"EDNS",!1,"CONN"));this.logger.debug({tnx:"dns",source:i.host,resolved:t.host,
cached:!!t.cached},"Resolved %s as %s [cache %s]",i.host,t.host,t.cached?"hit":"miss"),Object.keys(t).forEach(e=>{
"_"!==e.charAt(0)&&t[e]&&(i[e]=t[e])});try{this._socket=Wu.connect(i,()=>{this._socket.setKeepAlive(!0),this._onConnect(
)}),n()}catch(e){return setImmediate(()=>this._onError(e,"ECONNECTION",!1,"CONN"))}});
this._socket=this.options.connection,this.secureConnection&&!this.alreadySecured?setImmediate((
)=>this._upgradeConnection(e=>{e?this._onError(new Error("Error initiating TLS - "+(e.message||e)),"ETLS",!1,"CONN"
):this._onConnect()})):setImmediate(()=>this._onConnect())}quit(){this._sendCommand("QUIT"),this._responseActions.push(
this.close)}close(){if(clearTimeout(this._connectionTimeout),clearTimeout(this._greetingTimeout),this._responseActions=[
],!this._closing){this._closing=!0;let e="end";"init"===this.stage&&(e="destroy"),this.logger.debug({tnx:"smtp"},
'Closing connection to the server using "%s"',e);var t=this._socket&&this._socket.socket||this._socket;if(
t&&!t.destroyed)try{this._socket[e]()}catch(e){}this._destroy()}}login(n,a){var r=this._isDestroyedMessage("login");if(r
)return a(this._formatError(r,"ECONNECTION",!1,"API"));if(this._auth=n||{},this._authMethod=(this._auth.method||""
).toString().trim().toUpperCase()||!1,this._authMethod||!this._auth.oauth2||this._auth.credentials?this._authMethod&&(
"XOAUTH2"!==this._authMethod||this._auth.oauth2)||(this._authMethod=(this._supportedAuth[0]||"PLAIN").toUpperCase(
).trim()):this._authMethod="XOAUTH2",!(
"XOAUTH2"===this._authMethod||this._auth.credentials&&this._auth.credentials.user&&this._auth.credentials.pass)){if(
!this._auth.user||!this._auth.pass)return a(this._formatError('Missing credentials for "'+this._authMethod+'"',"EAUTH",
!1,"API"));this._auth.credentials={user:this._auth.user,pass:this._auth.pass,options:this._auth.options}}if(
!this.customAuth.has(this._authMethod)){switch(this._authMethod){case"XOAUTH2":return void this._handleXOauth2Token(!1,a
);case"LOGIN":return this._responseActions.push(e=>{this._actionAUTH_LOGIN_USER(e,a)}),void this._sendCommand(
"AUTH LOGIN");case"PLAIN":return this._responseActions.push(e=>{this._actionAUTHComplete(e,a)}),void this._sendCommand(
"AUTH PLAIN "+Buffer.from("\0"+this._auth.credentials.user+"\0"+this._auth.credentials.pass,"utf-8").toString("base64"),
"AUTH PLAIN "+Buffer.from("\0"+this._auth.credentials.user+"\0/* secret */","utf-8").toString("base64"));case"CRAM-MD5":
return this._responseActions.push(e=>{this._actionAUTH_CRAM_MD5(e,a)}),void this._sendCommand("AUTH CRAM-MD5")}return a(
this._formatError('Unknown authentication method "'+this._authMethod+'"',"EAUTH",!1,"API"))}{let e=this.customAuth.get(
this._authMethod),o,t=!1,i=(r=()=>{t||(t=!0,this.logger.info({tnx:"smtp",username:this._auth.user,
action:"authenticated",method:this._authMethod},"User %s authenticated",JSON.stringify(this._auth.user)),
this.authenticated=!0,a(null,!0))},n=e=>{t||(t=!0,a(this._formatError(e,"EAUTH",o,"AUTH "+this._authMethod)))},e({
auth:this._auth,method:this._authMethod,extensions:[].concat(this._supportedExtensions),authMethods:[].concat(
this._supportedAuth),maxAllowedSize:this._maxAllowedSize||!1,sendCommand:(n,a)=>{let e;return a||(e=new Promise((e,t)=>{
a=ih.callbackPromise(e,t)})),this._responseActions.push(e=>{var t=(o=e).match(/^(\d+)(?:\s(\d+\.\d+\.\d+))?\s/);let i={
command:n,response:e};t?(i.status=Number(t[1])||0,t[2]&&(i.code=t[2]),i.text=e.substr(t[0].length)):(i.text=e,i.status=0
),a(null,i)}),setImmediate(()=>this._sendCommand(n)),e},resolve:r,reject:n}));i&&"function"==typeof i.catch&&i.then(r
).catch(n)}}send(e,t,i){function o(){a||(a=!0,i(...arguments))}if(!t)return i(this._formatError("Empty message",
"EMESSAGE",!1,"API"));var n=this._isDestroyedMessage("send message");if(n)return i(this._formatError(n,"ECONNECTION",!1,
"API"));if(this._maxAllowedSize&&e.size>this._maxAllowedSize)return setImmediate(()=>{i(this._formatError(
"Message size larger than allowed "+this._maxAllowedSize,"EMESSAGE",!1,"MAIL FROM"))});let a=!1,r=(
"function"==typeof t.on&&t.on("error",e=>o(this._formatError(e,"ESTREAM",!1,"API"))),Date.now());this._setEnvelope(e,(e,
i)=>{if(e)return o(e);let n=Date.now(),a=this._createSendStream((e,t)=>e?o(e):(i.envelopeTime=n-r,
i.messageTime=Date.now()-n,i.messageSize=a.outByteCount,i.response=t,o(null,i)));"function"==typeof t.pipe?t.pipe(a):(
a.write(t),a.end())})}reset(t){this._sendCommand("RSET"),this._responseActions.push(e=>"2"!==e.charAt(0)?t(
this._formatError("Could not reset session state. response="+e,"EPROTOCOL",e,"RSET")):(this._envelope=!1,t(null,!0)))}
_onConnect(){clearTimeout(this._connectionTimeout),this.logger.info({tnx:"network",
localAddress:this._socket.localAddress,localPort:this._socket.localPort,remoteAddress:this._socket.remoteAddress,
remotePort:this._socket.remotePort},"%s established to %s:%s",this.secure?"Secure connection":"Connection",
this._socket.remoteAddress,this._socket.remotePort),this._destroyed?this.close():(this.stage="connected",
this._socket.removeListener("data",this._onSocketData),this._socket.removeListener("timeout",this._onSocketTimeout),
this._socket.removeListener("close",this._onSocketClose),this._socket.removeListener("end",this._onSocketEnd),
this._socket.on("data",this._onSocketData),this._socket.once("close",this._onSocketClose),this._socket.once("end",
this._onSocketEnd),this._socket.setTimeout(this.options.socketTimeout||6e5),this._socket.on("timeout",
this._onSocketTimeout),this._greetingTimeout=setTimeout(()=>{
this._socket&&!this._destroyed&&this._responseActions[0]===this._actionGreeting&&this._onError("Greeting never received"
,"ETIMEDOUT",!1,"CONN")},this.options.greetingTimeout||3e4),this._responseActions.push(this._actionGreeting),
this._socket.resume())}_onData(e){if(!this._destroyed&&e&&e.length){e=(e||"").toString("binary");let i=(
this._remainder+e).split(/\r?\n/),n;this._remainder=i.pop();for(let e=0,t=i.length;e<t;e++)this._responseQueue.length&&(
n=this._responseQueue[this._responseQueue.length-1],/^\d+-/.test(n.split("\n").pop())
)?this._responseQueue[this._responseQueue.length-1]+="\n"+i[e]:this._responseQueue.push(i[e]);
this._responseQueue.length&&(n=this._responseQueue[this._responseQueue.length-1],/^\d+-/.test(n.split("\n").pop())
)||this._processResponse()}}_onError(e,t,i,n){clearTimeout(this._connectionTimeout),clearTimeout(this._greetingTimeout),
this._destroyed||(e=this._formatError(e,t,i,n),this.logger.error(i,e.message),this.emit("error",e),this.close())}
_formatError(e,t,i,n){let a;return a=/Error\]$/i.test(Object.prototype.toString.call(e))?e:new Error(e),
t&&"Error"!==t&&(a.code=t),i&&(a.response=i,a.message+=": "+i),(e="string"==typeof i&&Number((i.match(/^\d+/)||[])[0]
)||!1)&&(a.responseCode=e),n&&(a.command=n),a}_onClose(){return this.logger.info({tnx:"network"},"Connection closed"),
this.upgrading&&!this._destroyed?this._onError(new Error("Connection closed unexpectedly"),"ETLS",!1,"CONN"):[
this._actionGreeting,this.close].includes(this._responseActions[0])||this._destroyed?void this._destroy():this._onError(
new Error("Connection closed unexpectedly"),"ECONNECTION",!1,"CONN")}_onEnd(){
this._socket&&!this._socket.destroyed&&this._socket.destroy()}_onTimeout(){return this._onError(new Error("Timeout"),
"ETIMEDOUT",!1,"CONN")}_destroy(){this._destroyed||(this._destroyed=!0,this.emit("end"))}_upgradeConnection(t){
this._socket.removeListener("data",this._onSocketData),this._socket.removeListener("timeout",this._onSocketTimeout);
let e=this._socket,i={socket:this._socket,host:this.host};Object.keys(this.options.tls||{}).forEach(e=>{
i[e]=this.options.tls[e]}),this.upgrading=!0;try{this._socket=Xu.connect(i,()=>(this.secure=!0,this.upgrading=!1,
this._socket.on("data",this._onSocketData),e.removeListener("close",this._onSocketClose),e.removeListener("end",
this._onSocketEnd),t(null,!0)))}catch(e){return t(e)}this._socket.on("error",this._onSocketError),this._socket.once(
"close",this._onSocketClose),this._socket.once("end",this._onSocketEnd),this._socket.setTimeout(
this.options.socketTimeout||6e5),this._socket.on("timeout",this._onSocketTimeout),e.resume()}_processResponse(){if(
!this._responseQueue.length)return!1;let t=this.lastServerResponse=(this._responseQueue.shift()||"").toString();if(
!/^\d+-/.test(t.split("\n").pop())){(this.options.debug||this.options.transactionLog)&&this.logger.debug({tnx:"server"},
t.replace(/\r?\n$/,"")),t.trim()||setImmediate(()=>this._processResponse(!0));let e=this._responseActions.shift();if(
"function"!=typeof e)return this._onError(new Error("Unexpected Response"),"EPROTOCOL",t,"CONN");e.call(this,t),
setImmediate(()=>this._processResponse(!0))}}_sendCommand(e,t){if(!this._destroyed){if(this._socket.destroyed
)return this.close();(this.options.debug||this.options.transactionLog)&&this.logger.debug({tnx:"client"},(t||e||""
).toString().replace(/\r?\n$/,"")),this._socket.write(Buffer.from(e+"\r\n","utf-8"))}}_setEnvelope(e,i){let t=[],n=!1;
if(this._envelope=e||{},this._envelope.from=(this._envelope.from&&this._envelope.from.address||this._envelope.from||""
).toString().trim(),this._envelope.to=[].concat(this._envelope.to||[]).map(e=>(e&&e.address||e||"").toString().trim()),
!this._envelope.to.length)return i(this._formatError("No recipients defined","EENVELOPE",!1,"API"));if(
this._envelope.from&&/[\r\n<>]/.test(this._envelope.from))return i(this._formatError("Invalid sender "+JSON.stringify(
this._envelope.from),"EENVELOPE",!1,"API"));/[\x80-\uFFFF]/.test(this._envelope.from)&&(n=!0);for(let e=0,
t=this._envelope.to.length;e<t;e++){if(!this._envelope.to[e]||/[\r\n<>]/.test(this._envelope.to[e]))return i(
this._formatError("Invalid recipient "+JSON.stringify(this._envelope.to[e]),"EENVELOPE",!1,"API"));/[\x80-\uFFFF]/.test(
this._envelope.to[e])&&(n=!0)}if(this._envelope.rcptQueue=JSON.parse(JSON.stringify(this._envelope.to||[])),
this._envelope.rejected=[],this._envelope.rejectedErrors=[],this._envelope.accepted=[],this._envelope.dsn)try{
this._envelope.dsn=this._setDsnEnvelope(this._envelope.dsn)}catch(e){return i(this._formatError("Invalid DSN "+e.message
,"EENVELOPE",!1,"API"))}this._responseActions.push(e=>{this._actionMAIL(e,i)}),n&&this._supportedExtensions.includes(
"SMTPUTF8")&&(t.push("SMTPUTF8"),this._usingSmtpUtf8=!0),this._envelope.use8BitMime&&this._supportedExtensions.includes(
"8BITMIME")&&(t.push("BODY=8BITMIME"),this._using8BitMime=!0),this._envelope.size&&this._supportedExtensions.includes(
"SIZE")&&t.push("SIZE="+this._envelope.size),this._envelope.dsn&&this._supportedExtensions.includes("DSN")&&(
this._envelope.dsn.ret&&t.push("RET="+ih.encodeXText(this._envelope.dsn.ret)),this._envelope.dsn.envid&&t.push(
"ENVID="+ih.encodeXText(this._envelope.dsn.envid))),this._sendCommand("MAIL FROM:<"+this._envelope.from+">"+(
t.length?" "+t.join(" "):""))}_setDsnEnvelope(e){let t=(e.ret||e.return||"").toString().toUpperCase()||null;if(t)switch(
t){case"HDRS":case"HEADERS":t="HDRS";break;case"FULL":case"BODY":t="FULL"}if(t&&!["FULL","HDRS"].includes(t)
)throw new Error("ret: "+JSON.stringify(t));var i=(e.envid||e.id||"").toString()||null;let n=e.notify||null;if(n){n=(
n="string"==typeof n?n.split(","):n).map(e=>e.trim().toUpperCase());let t=["NEVER","SUCCESS","FAILURE","DELAY"];if(
n.filter(e=>!t.includes(e)).length||1<n.length&&n.includes("NEVER"))throw new Error("notify: "+JSON.stringify(n.join(","
)));n=n.join(",")}let a=(e.recipient||e.orcpt||"").toString()||null;return a&&a.indexOf(";")<0&&(a="rfc822;"+a),{ret:t,
envid:i,notify:n,orcpt:a}}_getDsnRcptToArgs(){let e=[];return this._envelope.dsn&&this._supportedExtensions.includes(
"DSN")&&(this._envelope.dsn.notify&&e.push("NOTIFY="+ih.encodeXText(this._envelope.dsn.notify)),
this._envelope.dsn.orcpt&&e.push("ORCPT="+ih.encodeXText(this._envelope.dsn.orcpt))),e.length?" "+e.join(" "):""}
_createSendStream(n){let e=new eh,t;return this.options.lmtp?this._envelope.accepted.forEach((t,e)=>{
let i=e===this._envelope.accepted.length-1;this._responseActions.push(e=>{this._actionLMTPStream(t,i,e,n)})}
):this._responseActions.push(e=>{this._actionSMTPStream(e,n)}),e.pipe(this._socket,{end:!1}),this.options.debug&&((
t=new th).on("readable",()=>{let e;for(;e=t.read();)this.logger.debug({tnx:"message"},e.toString("binary").replace(
/\r?\n$/,""))}),e.pipe(t)),e.once("end",()=>{this.logger.info({tnx:"message",inByteCount:e.inByteCount,
outByteCount:e.outByteCount},"<%s bytes encoded mime message (source size %s bytes)>",e.outByteCount,e.inByteCount)}),e}
_actionGreeting(e){clearTimeout(this._greetingTimeout),"220"!==e.substr(0,3)?this._onError(new Error(
"Invalid greeting. response="+e),"EPROTOCOL",e,"CONN"):this.options.lmtp?(this._responseActions.push(this._actionLHLO),
this._sendCommand("LHLO "+this.name)):(this._responseActions.push(this._actionEHLO),this._sendCommand("EHLO "+this.name)
)}_actionLHLO(e){"2"!==e.charAt(0)?this._onError(new Error("Invalid LHLO. response="+e),"EPROTOCOL",e,"LHLO"
):this._actionEHLO(e)}_actionEHLO(e){var t;if("421"!==e.substr(0,3))return"2"!==e.charAt(0
)?this.options.requireTLS?void this._onError(new Error(
"EHLO failed but HELO does not support required STARTTLS. response="+e),"ECONNECTION",e,"EHLO"):(
this._responseActions.push(this._actionHELO),void this._sendCommand("HELO "+this.name)
):this.secure||this.options.ignoreTLS||!/[ -]STARTTLS\b/im.test(e)&&!this.options.requireTLS?(/[ -]SMTPUTF8\b/im.test(e
)&&this._supportedExtensions.push("SMTPUTF8"),/[ -]DSN\b/im.test(e)&&this._supportedExtensions.push("DSN"),
/[ -]8BITMIME\b/im.test(e)&&this._supportedExtensions.push("8BITMIME"),/[ -]PIPELINING\b/im.test(e
)&&this._supportedExtensions.push("PIPELINING"),/[ -]AUTH\b/i.test(e)&&(this.allowsAuth=!0),
/[ -]AUTH(?:(\s+|=)[^\n]*\s+|\s+|=)PLAIN/i.test(e)&&this._supportedAuth.push("PLAIN"),
/[ -]AUTH(?:(\s+|=)[^\n]*\s+|\s+|=)LOGIN/i.test(e)&&this._supportedAuth.push("LOGIN"),
/[ -]AUTH(?:(\s+|=)[^\n]*\s+|\s+|=)CRAM-MD5/i.test(e)&&this._supportedAuth.push("CRAM-MD5"),
/[ -]AUTH(?:(\s+|=)[^\n]*\s+|\s+|=)XOAUTH2/i.test(e)&&this._supportedAuth.push("XOAUTH2"),(t=e.match(
/[ -]SIZE(?:[ \t]+(\d+))?/im))&&(this._supportedExtensions.push("SIZE"),this._maxAllowedSize=Number(t[1])||0),
void this.emit("connect")):(this._sendCommand("STARTTLS"),void this._responseActions.push(this._actionSTARTTLS));
this._onError(new Error("Server terminates connection. response="+e),"ECONNECTION",e,"EHLO")}_actionHELO(e){
"2"!==e.charAt(0)?this._onError(new Error("Invalid HELO. response="+e),"EPROTOCOL",e,"HELO"):(this.allowsAuth=!0,
this.emit("connect"))}_actionSTARTTLS(e){if("2"!==e.charAt(0))return this.options.opportunisticTLS?(this.logger.info({
tnx:"smtp"},"Failed STARTTLS upgrade, continuing unencrypted"),this.emit("connect")):void this._onError(new Error(
"Error upgrading connection with STARTTLS"),"ETLS",e,"STARTTLS");this._upgradeConnection((e,t)=>{e?this._onError(
new Error("Error initiating TLS - "+(e.message||e)),"ETLS",!1,"STARTTLS"):(this.logger.info({tnx:"smtp"},
"Connection upgraded with STARTTLS"),t?this.options.lmtp?(this._responseActions.push(this._actionLHLO),
this._sendCommand("LHLO "+this.name)):(this._responseActions.push(this._actionEHLO),this._sendCommand("EHLO "+this.name)
):this.emit("connect"))})}_actionAUTH_LOGIN_USER(e,t){/^334[ -]/.test(e)?(this._responseActions.push(e=>{
this._actionAUTH_LOGIN_PASS(e,t)}),this._sendCommand(Buffer.from(this._auth.credentials.user+"","utf-8").toString(
"base64"))):t(this._formatError('Invalid login sequence while waiting for "334 VXNlcm5hbWU6"',"EAUTH",e,"AUTH LOGIN"))}
_actionAUTH_CRAM_MD5(e,t){var i=e.match(/^334\s+(.+)$/);if(!i)return t(this._formatError(
"Invalid login sequence while waiting for server challenge string","EAUTH",e,"AUTH CRAM-MD5"));e=i[1];let n=Buffer.from(
e,"base64").toString("ascii"),a=Zu.createHmac("md5",this._auth.credentials.pass);a.update(n),
i=this._auth.credentials.user+" "+a.digest("hex"),this._responseActions.push(e=>{this._actionAUTH_CRAM_MD5_PASS(e,t)}),
this._sendCommand(Buffer.from(i).toString("base64"),Buffer.from(this._auth.credentials.user+" /* secret */").toString(
"base64"))}_actionAUTH_CRAM_MD5_PASS(e,t){if(!e.match(/^235\s+/))return t(this._formatError(
'Invalid login sequence while waiting for "235"',"EAUTH",e,"AUTH CRAM-MD5"));this.logger.info({tnx:"smtp",
username:this._auth.user,action:"authenticated",method:this._authMethod},"User %s authenticated",JSON.stringify(
this._auth.user)),t(null,this.authenticated=!0)}_actionAUTH_LOGIN_PASS(e,t){if(!/^334[ -]/.test(e))return t(
this._formatError('Invalid login sequence while waiting for "334 UGFzc3dvcmQ6"',"EAUTH",e,"AUTH LOGIN"));
this._responseActions.push(e=>{this._actionAUTHComplete(e,t)}),this._sendCommand(Buffer.from((
this._auth.credentials.pass||"").toString(),"utf-8").toString("base64"),Buffer.from("/* secret */","utf-8").toString(
"base64"))}_actionAUTHComplete(e,t,i){return i||"function"!=typeof t||(i=t,t=!1),"334"===e.substr(0,3)?(
this._responseActions.push(e=>{t||"XOAUTH2"!==this._authMethod?this._actionAUTHComplete(e,!0,i):setImmediate((
)=>this._handleXOauth2Token(!0,i))}),void this._sendCommand("")):"2"!==e.charAt(0)?(this.logger.info({tnx:"smtp",
username:this._auth.user,action:"authfail",method:this._authMethod},"User %s failed to authenticate",JSON.stringify(
this._auth.user)),i(this._formatError("Invalid login","EAUTH",e,"AUTH "+this._authMethod))):(this.logger.info({
tnx:"smtp",username:this._auth.user,action:"authenticated",method:this._authMethod},"User %s authenticated",
JSON.stringify(this._auth.user)),this.authenticated=!0,void i(null,!0))}_actionMAIL(e,t){let i,n;if(2!==Number(e.charAt(
0)))return i=this._usingSmtpUtf8&&/^550 /.test(e)&&/[\x80-\uFFFF]/.test(this._envelope.from
)?"Internationalized mailbox name not allowed":"Mail command failed",t(this._formatError(i,"EENVELOPE",e,"MAIL FROM"));
if(!this._envelope.rcptQueue.length)return t(this._formatError("Can't send mail - no recipients defined","EENVELOPE",!1,
"API"));if(this._recipientQueue=[],this._supportedExtensions.includes("PIPELINING"))for(
;this._envelope.rcptQueue.length;)n=this._envelope.rcptQueue.shift(),this._recipientQueue.push(n),
this._responseActions.push(e=>{this._actionRCPT(e,t)}),this._sendCommand("RCPT TO:<"+n+">"+this._getDsnRcptToArgs()
);else n=this._envelope.rcptQueue.shift(),this._recipientQueue.push(n),this._responseActions.push(e=>{this._actionRCPT(e
,t)}),this._sendCommand("RCPT TO:<"+n+">"+this._getDsnRcptToArgs())}_actionRCPT(e,t){let i,n,
a=this._recipientQueue.shift();if(2!==Number(e.charAt(0))?(i=this._usingSmtpUtf8&&/^553 /.test(e)&&/[\x80-\uFFFF]/.test(
a)?"Internationalized mailbox name not allowed":"Recipient command failed",this._envelope.rejected.push(a),(
n=this._formatError(i,"EENVELOPE",e,"RCPT TO")).recipient=a,this._envelope.rejectedErrors.push(n)
):this._envelope.accepted.push(a),this._envelope.rcptQueue.length||this._recipientQueue.length
)this._envelope.rcptQueue.length&&(a=this._envelope.rcptQueue.shift(),this._recipientQueue.push(a),
this._responseActions.push(e=>{this._actionRCPT(e,t)}),this._sendCommand("RCPT TO:<"+a+">"+this._getDsnRcptToArgs())
);else{if(!(this._envelope.rejected.length<this._envelope.to.length))return(n=this._formatError(
"Can't send mail - all recipients were rejected","EENVELOPE",e,"RCPT TO")).rejected=this._envelope.rejected,
n.rejectedErrors=this._envelope.rejectedErrors,t(n);this._responseActions.push(e=>{this._actionDATA(e,t)}),
this._sendCommand("DATA")}}_actionDATA(e,t){if(!/^[23]/.test(e))return t(this._formatError("Data command failed",
"EENVELOPE",e,"DATA"));let i={accepted:this._envelope.accepted,rejected:this._envelope.rejected};
this._envelope.rejectedErrors.length&&(i.rejectedErrors=this._envelope.rejectedErrors),t(null,i)}_actionSMTPStream(e,t){
return 2!==Number(e.charAt(0))?t(this._formatError("Message failed","EMESSAGE",e,"DATA")):t(null,e)}_actionLMTPStream(i,
e,t,n){let a;if(2!==Number(t.charAt(0))){(a=this._formatError("Message failed for recipient "+i,"EMESSAGE",t,"DATA")
).recipient=i,this._envelope.rejected.push(i),this._envelope.rejectedErrors.push(a);for(let e=0,
t=this._envelope.accepted.length;e<t;e++)this._envelope.accepted[e]===i&&this._envelope.accepted.splice(e,1)}if(e
)return n(null,t)}_handleXOauth2Token(i,n){this._auth.oauth2.getToken(i,(e,t)=>{if(e)return this.logger.info({
tnx:"smtp",username:this._auth.user,action:"authfail",method:this._authMethod},"User %s failed to authenticate",
JSON.stringify(this._auth.user)),n(this._formatError(e,"EAUTH",!1,"AUTH XOAUTH2"));this._responseActions.push(e=>{
this._actionAUTHComplete(e,i,n)}),this._sendCommand("AUTH XOAUTH2 "+this._auth.oauth2.buildXOAuth2Token(t),
"AUTH XOAUTH2 "+this._auth.oauth2.buildXOAuth2Token("/* secret */"))})}_isDestroyedMessage(e){
return this._destroyed?"Cannot "+e+" - smtp connection is already destroyed.":this._socket?this._socket.destroyed?"Cannot "+e+" - smtp connection socket is already destroyed.":this._socket.writable?void 0:"Cannot "+e+" - smtp connection socket is already half-closed.":void 0
}_getHostname(){let e=Yu.hostname()||"";return e=(e=e.indexOf(".")<0?"[127.0.0.1]":e).match(
/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)?"["+e+"]":e}}S=mp.default.Stream;const ah=s.exports,oh=lp.default,rh=h.exports;
class sh extends S{constructor(e,t){if(super(),this.options=e||{},e&&e.serviceClient){if(!e.privateKey||!e.user
)return void setImmediate(()=>this.emit("error",new Error(
'Options "privateKey" and "user" are required for service account!')));e=Math.min(Math.max(Number(
this.options.serviceRequestTimeout)||0,0),3600),this.options.serviceRequestTimeout=e||300}this.logger=rh.getLogger({
logger:t},{component:this.options.component||"OAuth2"}),
this.provisionCallback="function"==typeof this.options.provisionCallback&&this.options.provisionCallback,
this.options.accessUrl=this.options.accessUrl||"https://accounts.google.com/o/oauth2/token",
this.options.customHeaders=this.options.customHeaders||{},this.options.customParams=this.options.customParams||{},
this.accessToken=this.options.accessToken||!1,this.options.expires&&Number(this.options.expires
)?this.expires=this.options.expires:(e=Math.max(Number(this.options.timeout)||0,0),this.expires=e&&Date.now()+1e3*e||0)}
getToken(e,t){if(!e&&this.accessToken&&(!this.expires||this.expires>Date.now()))return t(null,this.accessToken);let n=(
...e)=>{e[0]?this.logger.error({err:e[0],tnx:"OAUTH2",user:this.options.user,action:"renew"},
"Failed generating new Access Token for %s",this.options.user):this.logger.info({tnx:"OAUTH2",user:this.options.user,
action:"renew"},"Generated new Access Token for %s",this.options.user),t(...e)};
this.provisionCallback?this.provisionCallback(this.options.user,!!e,(e,t,i)=>{!e&&t&&(this.accessToken=t,
this.expires=i||0),n(e,t)}):this.generateToken(n)}updateToken(e,t){this.accessToken=e,t=Math.max(Number(t)||0,0),
this.expires=t&&Date.now()+1e3*t||0,this.emit("token",{user:this.options.user,accessToken:e||"",expires:this.expires})}
generateToken(a){let t,i;if(this.options.serviceClient){var n=Math.floor(Date.now()/1e3),n={
iss:this.options.serviceClient,scope:this.options.scope||"https://mail.google.com/",sub:this.options.user,
aud:this.options.accessUrl,iat:n,exp:n+this.options.serviceRequestTimeout};let e;try{e=this.jwtSignRS256(n)}catch(e){
return a(new Error("Can't generate token. Check your auth options"))}t={
grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer",assertion:e},i={
grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer",assertion:n}}else{if(!this.options.refreshToken)return a(
new Error("Can't create new access token for user"));t={client_id:this.options.clientId||"",
client_secret:this.options.clientSecret||"",refresh_token:this.options.refreshToken,grant_type:"refresh_token"},i={
client_id:this.options.clientId||"",client_secret:(this.options.clientSecret||"").substr(0,6)+"...",refresh_token:(
this.options.refreshToken||"").substr(0,6)+"...",grant_type:"refresh_token"}}Object.keys(this.options.customParams
).forEach(e=>{t[e]=this.options.customParams[e],i[e]=this.options.customParams[e]}),this.logger.debug({tnx:"OAUTH2",
user:this.options.user,action:"generate"},"Requesting token using: %s",JSON.stringify(i)),this.postRequest(
this.options.accessUrl,t,this.options,(e,t)=>{let i;if(e)return a(e);try{i=JSON.parse(t.toString())}catch(e){return a(e)
}if(!i||"object"!=typeof i)return this.logger.debug({tnx:"OAUTH2",user:this.options.user,action:"post"},"Response: %s",(
t||"").toString()),a(new Error("Invalid authentication response"));let n={};if(Object.keys(i).forEach(e=>{
n[e]="access_token"!==e?i[e]:(i[e]||"").toString().substr(0,6)+"..."}),this.logger.debug({tnx:"OAUTH2",
user:this.options.user,action:"post"},"Response: %s",JSON.stringify(n)),i.error){let e=i.error;
return i.error_description&&(e+=": "+i.error_description),i.error_uri&&(e+=" ("+i.error_uri+")"),a(new Error(e))}
return i.access_token?(this.updateToken(i.access_token,i.expires_in),a(null,this.accessToken)):a(new Error(
"No access token"))})}buildXOAuth2Token(e){let t=["user="+(this.options.user||""),"auth=Bearer "+(e||this.accessToken),
"",""];return Buffer.from(t.join(""),"utf-8").toString("base64")}postRequest(e,t,i,n){let a=!1,o=[],r=0,s=ah(e,{
method:"post",headers:i.customHeaders,body:t,allowErrorResponse:!0});s.on("readable",()=>{for(var e;null!==(e=s.read());
)o.push(e),r+=e.length}),s.once("error",e=>{if(!a)return a=!0,n(e)}),s.once("end",()=>{if(!a)return a=!0,n(null,
Buffer.concat(o,r))})}toBase64URL(e){return(e="string"==typeof e?Buffer.from(e):e).toString("base64").replace(/[=]+/g,""
).replace(/\+/g,"-").replace(/\//g,"_")}jwtSignRS256(e){e=['{"alg":"RS256","typ":"JWT"}',JSON.stringify(e)].map(
e=>this.toBase64URL(e)).join(".");var t=oh.createSign("RSA-SHA256").update(e).sign(this.options.privateKey);
return e+"."+this.toBase64URL(t)}}const ch=E=nh,lh=h.exports.assign,ph=El=sh;class dh extends gp.default{constructor(e){
if(super(),this.pool=e,this.options=e.options,this.logger=this.pool.logger,this.options.auth)switch((
this.options.auth.type||"").toString().toUpperCase()){case"OAUTH2":{let e=new ph(this.options.auth,this.logger);
e.provisionCallback=this.pool.mailer&&this.pool.mailer.get("oauth2_provision_cb")||e.provisionCallback,this.auth={
type:"OAUTH2",user:this.options.auth.user,oauth2:e,method:"XOAUTH2"},e.on("token",e=>this.pool.mailer.emit("token",e)),
e.on("error",e=>this.emit("error",e));break}default:if(!this.options.auth.user&&!this.options.auth.pass)break;
this.auth={type:(this.options.auth.type||"").toString().toUpperCase()||"LOGIN",user:this.options.auth.user,credentials:{
user:this.options.auth.user||"",pass:this.options.auth.pass,options:this.options.auth.options},method:(
this.options.auth.method||"").trim().toUpperCase()||this.options.authMethod||!1}}this._connection=!1,this._connected=!1,
this.messages=0,this.available=!0}connect(a){this.pool.getSocket(this.options,(e,t)=>{if(e)return a(e);let i=!1,
n=this.options;t&&t.connection&&(this.logger.info({tnx:"proxy",remoteAddress:t.connection.remoteAddress,
remotePort:t.connection.remotePort,destHost:n.host||"",destPort:n.port||"",action:"connected"},
"Using proxied socket from %s:%s to %s:%s",t.connection.remoteAddress,t.connection.remotePort,n.host||"",n.port||""),
n=lh(!1,n),Object.keys(t).forEach(e=>{n[e]=t[e]})),this.connection=new ch(n),this.connection.once("error",e=>{if(
this.emit("error",e),!i)return i=!0,a(e)}),this.connection.once("end",()=>{if(this.close(),!i){i=!0;let e=setTimeout((
)=>{if(!i){let e=new Error("Unexpected socket close");
this.connection&&this.connection._socket&&this.connection._socket.upgrading&&(e.code="ETLS"),a(e)}},1e3);try{e.unref()
}catch(e){}}}),this.connection.connect(()=>{if(!i)return this.auth&&(this.connection.allowsAuth||n.forceAuth
)?void this.connection.login(this.auth,e=>{if(!i){if(i=!0,e)return this.connection.close(),this.emit("error",e),a(e);
this._connected=!0,a(null,!0)}}):(i=!0,this._connected=!0,a(null,!0))})})}send(t,i){if(!this._connected
)return this.connect(e=>e?i(e):this.send(t,i));let n=t.message.getEnvelope(),a=t.message.messageId(),e=[].concat(n.to||[
]);3<e.length&&e.push("...and "+e.splice(2).length+" more"),this.logger.info({tnx:"send",messageId:a,cid:this.id},
"Sending message %s using #%s to <%s>",a,this.id,e.join(", ")),t.data.dsn&&(n.dsn=t.data.dsn),this.connection.send(n,
t.message.createReadStream(),(e,t)=>{if(this.messages++,e)return this.connection.close(),this.emit("error",e),i(e);
t.envelope={from:n.from,to:n.to},t.messageId=a,setImmediate(()=>{let e;this.messages>=this.options.maxMessages?((
e=new Error("Resource exhausted")).code="EMAXLIMIT",this.connection.close(),this.emit("error",e)
):this.pool._checkRateLimit(()=>{this.available=!0,this.emit("available")})}),i(null,t)})}close(){this._connected=!1,
this.auth&&this.auth.oauth2&&this.auth.oauth2.removeAllListeners(),this.connection&&this.connection.close(),this.emit(
"close")}}u=dh;const uh={126:{host:"smtp.126.com",port:465,secure:!0},163:{host:"smtp.163.com",port:465,secure:!0},
"1und1":{host:"smtp.1und1.de",port:465,secure:!0,authMethod:"LOGIN"},AOL:{domains:["aol.com"],host:"smtp.aol.com",
port:587},DebugMail:{host:"debugmail.io",port:25},DynectEmail:{aliases:["Dynect"],host:"smtp.dynect.net",port:25},
Ethereal:{aliases:["ethereal.email"],host:"smtp.ethereal.email",port:587},FastMail:{domains:["fastmail.fm"],
host:"smtp.fastmail.com",port:465,secure:!0},GandiMail:{aliases:["Gandi","Gandi Mail"],host:"mail.gandi.net",port:587},
Gmail:{aliases:["Google Mail"],domains:["gmail.com","googlemail.com"],host:"smtp.gmail.com",port:465,secure:!0},
Godaddy:{host:"smtpout.secureserver.net",port:25},GodaddyAsia:{host:"smtp.asia.secureserver.net",port:25},
GodaddyEurope:{host:"smtp.europe.secureserver.net",port:25},"hot.ee":{host:"mail.hot.ee"},Hotmail:{aliases:["Outlook",
"Outlook.com","Hotmail.com"],domains:["hotmail.com","outlook.com"],host:"smtp-mail.outlook.com",port:587},iCloud:{
aliases:["Me","Mac"],domains:["me.com","mac.com"],host:"smtp.mail.me.com",port:587},Infomaniak:{
host:"mail.infomaniak.com",domains:["ik.me","ikmail.com","etik.com"],port:587},"mail.ee":{host:"smtp.mail.ee"},
"Mail.ru":{host:"smtp.mail.ru",port:465,secure:!0},Maildev:{port:1025,ignoreTLS:!0},Mailgun:{host:"smtp.mailgun.org",
port:465,secure:!0},Mailjet:{host:"in.mailjet.com",port:587},Mailosaur:{host:"mailosaur.io",port:25},Mailtrap:{
host:"smtp.mailtrap.io",port:2525},Mandrill:{host:"smtp.mandrillapp.com",port:587},Naver:{host:"smtp.naver.com",port:587
},One:{host:"send.one.com",port:465,secure:!0},OpenMailBox:{aliases:["OMB","openmailbox.org"],
host:"smtp.openmailbox.org",port:465,secure:!0},Outlook365:{host:"smtp.office365.com",port:587,secure:!1},OhMySMTP:{
host:"smtp.ohmysmtp.com",port:587,secure:!1},Postmark:{aliases:["PostmarkApp"],host:"smtp.postmarkapp.com",port:2525},
"qiye.aliyun":{host:"smtp.mxhichina.com",port:"465",secure:!0},QQ:{domains:["qq.com"],host:"smtp.qq.com",port:465,
secure:!0},QQex:{aliases:["QQ Enterprise"],domains:["exmail.qq.com"],host:"smtp.exmail.qq.com",port:465,secure:!0},
SendCloud:{host:"smtpcloud.sohu.com",port:25},SendGrid:{host:"smtp.sendgrid.net",port:587},SendinBlue:{
host:"smtp-relay.sendinblue.com",port:587},SendPulse:{host:"smtp-pulse.com",port:465,secure:!0},SES:{
host:"email-smtp.us-east-1.amazonaws.com",port:465,secure:!0},"SES-US-EAST-1":{
host:"email-smtp.us-east-1.amazonaws.com",port:465,secure:!0},"SES-US-WEST-2":{
host:"email-smtp.us-west-2.amazonaws.com",port:465,secure:!0},"SES-EU-WEST-1":{
host:"email-smtp.eu-west-1.amazonaws.com",port:465,secure:!0},Sparkpost:{aliases:["SparkPost","SparkPost Mail"],
domains:["sparkpost.com"],host:"smtp.sparkpostmail.com",port:587,secure:!1},Tipimail:{host:"smtp.tipimail.com",port:587
},Yahoo:{domains:["yahoo.com"],host:"smtp.mail.yahoo.com",port:465,secure:!0},Yandex:{domains:["yandex.ru"],
host:"smtp.yandex.ru",port:465,secure:!0},Zoho:{host:"smtp.zoho.com",port:465,secure:!0,authMethod:"LOGIN"}},hh={},mh=(
Object.keys(uh).forEach(e=>{let t=uh[e];hh[Qt(e)]=Wt(t),[].concat(t.aliases||[]).forEach(e=>{hh[Qt(e)]=Wt(t)}),[
].concat(t.domains||[]).forEach(e=>{hh[Qt(e)]=Wt(t)})}),dp=gp.default,u),fh=E,gh=Bl=function(e){return e=Qt(e.split("@"
).pop()),hh[e]||!1},vh=h.exports,xh=i;class yh extends dp{constructor(e){super();let t,i=(e="string"==typeof(e=e||{})?{
url:e}:e).service;"function"==typeof e.getSocket&&(this.getSocket=e.getSocket),e.url&&(t=vh.parseConnectionUrl(e.url),
i=i||t.service),this.options=vh.assign(!1,e,t,i&&gh(i)),this.options.maxConnections=this.options.maxConnections||5,
this.options.maxMessages=this.options.maxMessages||100,this.logger=vh.getLogger(this.options,{
component:this.options.component||"smtp-pool"}),e=new fh(this.options),this.name="SMTP (pool)",
this.version=xh.version+"[client:"+e.version+"]",this._rateLimit={counter:0,timeout:null,waiting:[],checkpoint:!1,
delta:Number(this.options.rateDelta)||1e3,limit:Number(this.options.rateLimit)||0},this._closed=!1,this._queue=[],
this._connections=[],this._connectionCounter=0,this.idling=!0,setImmediate(()=>{this.idling&&this.emit("idle")})}
getSocket(e,t){return setImmediate(()=>t(null,!1))}send(e,t){return!this._closed&&(this._queue.push({mail:e,
requeueAttempts:0,callback:t}),this.idling&&this._queue.length>=this.options.maxConnections&&(this.idling=!1),
setImmediate(()=>this._processMessages()),!0)}close(){let i;var t=this._connections.length;if(this._closed=!0,
clearTimeout(this._rateLimit.timeout),t||this._queue.length){for(let e=t-1;0<=e;e--
)this._connections[e]&&this._connections[e].available&&((i=this._connections[e]).close(),this.logger.info({
tnx:"connection",cid:i.id,action:"removed"},"Connection #%s removed",i.id));if(
t&&!this._connections.length&&this.logger.debug({tnx:"connection"},"All connections removed"),this._queue.length){
let t=()=>{if(this._queue.length){let e=this._queue.shift();if(e&&"function"==typeof e.callback)try{e.callback(
new Error("Connection pool was closed"))}catch(e){this.logger.error({err:e,tnx:"callback",cid:i.id},
"Callback error for #%s: %s",i.id,e.message)}setImmediate(t)}else this.logger.debug({tnx:"connection"},
"Pending queue entries cleared")};setImmediate(t)}}}_processMessages(){let n,e,t;if(!this._closed)if(this._queue.length
){for(e=0,t=this._connections.length;e<t;e++)if(this._connections[e].available){n=this._connections[e];break}if(
n=!n&&this._connections.length<this.options.maxConnections?this._createConnection():n){
!this.idling&&this._queue.length<this.options.maxConnections&&(this.idling=!0,this.emit("idle"));
let i=n.queueEntry=this._queue.shift();i.messageId=(n.queueEntry.mail.message.getHeader("message-id")||"").replace(
/[<>\s]/g,""),n.available=!1,this.logger.debug({tnx:"pool",cid:n.id,messageId:i.messageId,action:"assign"},
"Assigned message <%s> to #%s (%s)",i.messageId,n.id,n.messages+1),this._rateLimit.limit&&(this._rateLimit.counter++,
this._rateLimit.checkpoint||(this._rateLimit.checkpoint=Date.now())),n.send(i.mail,(e,t)=>{if(i===n.queueEntry){try{
i.callback(e,t)}catch(e){this.logger.error({err:e,tnx:"callback",cid:n.id},"Callback error for #%s: %s",n.id,e.message)}
n.queueEntry=!1}})}else this.idling=!1}else this.idling||(this.idling=!0,this.emit("idle"))}_createConnection(){
let t=new mh(this);return t.id=++this._connectionCounter,this.logger.info({tnx:"pool",cid:t.id,action:"conection"},
"Created new pool resource #%s",t.id),t.on("available",()=>{this.logger.debug({tnx:"connection",cid:t.id,
action:"available"},"Connection #%s became available",t.id),this._closed?this.close():this._processMessages()}),t.once(
"error",e=>{if("EMAXLIMIT"!==e.code?this.logger.error({err:e,tnx:"pool",cid:t.id},"Pool Error for #%s: %s",t.id,
e.message):this.logger.debug({tnx:"pool",cid:t.id,action:"maxlimit"},"Max messages limit exchausted for #%s",t.id),
t.queueEntry){try{t.queueEntry.callback(e)}catch(e){this.logger.error({err:e,tnx:"callback",cid:t.id},
"Callback error for #%s: %s",t.id,e.message)}t.queueEntry=!1}this._removeConnection(t),this._continueProcessing()}),
t.once("close",()=>{this.logger.info({tnx:"connection",cid:t.id,action:"closed"},"Connection #%s was closed",t.id),
this._removeConnection(t),t.queueEntry?setTimeout(()=>{t.queueEntry&&(this._shouldRequeuOnConnectionClose(t.queueEntry
)?this._requeueEntryOnConnectionClose(t):this._failDeliveryOnConnectionClose(t)),this._continueProcessing()},50
):this._continueProcessing()}),this._connections.push(t),t}_shouldRequeuOnConnectionClose(e){
return void 0===this.options.maxRequeues||this.options.maxRequeues<0||e.requeueAttempts<this.options.maxRequeues}
_failDeliveryOnConnectionClose(t){if(t.queueEntry&&t.queueEntry.callback){try{t.queueEntry.callback(new Error(
"Reached maximum number of retries after connection was closed"))}catch(e){this.logger.error({err:e,tnx:"callback",
messageId:t.queueEntry.messageId,cid:t.id},"Callback error for #%s: %s",t.id,e.message)}t.queueEntry=!1}}
_requeueEntryOnConnectionClose(e){e.queueEntry.requeueAttempts=e.queueEntry.requeueAttempts+1,this.logger.debug({
tnx:"pool",cid:e.id,messageId:e.queueEntry.messageId,action:"requeue"},"Re-queued message <%s> for #%s. Attempt: #%s",
e.queueEntry.messageId,e.id,e.queueEntry.requeueAttempts),this._queue.unshift(e.queueEntry),e.queueEntry=!1}
_continueProcessing(){this._closed?this.close():setTimeout(()=>this._processMessages(),100)}_removeConnection(e){-1!==(
e=this._connections.indexOf(e))&&this._connections.splice(e,1)}_checkRateLimit(e){if(!this._rateLimit.limit)return e();
var t=Date.now();return this._rateLimit.counter<this._rateLimit.limit?e():(this._rateLimit.waiting.push(e),
this._rateLimit.checkpoint<=t-this._rateLimit.delta?this._clearRateLimit():void(this._rateLimit.timeout||(
this._rateLimit.timeout=setTimeout(()=>this._clearRateLimit(),this._rateLimit.delta-(t-this._rateLimit.checkpoint)),
this._rateLimit.checkpoint=t)))}_clearRateLimit(){for(clearTimeout(this._rateLimit.timeout),this._rateLimit.timeout=null
,this._rateLimit.counter=0,this._rateLimit.checkpoint=!1;this._rateLimit.waiting.length;){
var e=this._rateLimit.waiting.shift();setImmediate(e)}}isIdle(){return this.idling}verify(r){let e,s=(r||(e=new Promise(
(e,t)=>{r=vh.callbackPromise(e,t)})),new mh(this).auth);return this.getSocket(this.options,(e,t)=>{if(e)return r(e);
let i=this.options,n=(t&&t.connection&&(this.logger.info({tnx:"proxy",remoteAddress:t.connection.remoteAddress,
remotePort:t.connection.remotePort,destHost:i.host||"",destPort:i.port||"",action:"connected"},
"Using proxied socket from %s:%s to %s:%s",t.connection.remoteAddress,t.connection.remotePort,i.host||"",i.port||""),
i=vh.assign(!1,i),Object.keys(t).forEach(e=>{i[e]=t[e]})),new fh(i)),a=!1,o=(n.once("error",e=>{if(!a)return a=!0,
n.close(),r(e)}),n.once("end",()=>{if(!a)return a=!0,r(new Error("Connection closed"))}),()=>{if(!a)return a=!0,n.quit()
,r(null,!0)});n.connect(()=>{a||(s&&(n.allowsAuth||i.forceAuth)?n.login(s,e=>{if(!a)return e?(a=!0,n.close(),r(e)
):void o()}):o())})}),e}}Dl=gp.default;const bh=E,_h=Bl,wh=h.exports,kh=El,Eh=i;class Sh extends Dl{constructor(e){
super();let t,i=(e="string"==typeof(e=e||{})?{url:e}:e).service;"function"==typeof e.getSocket&&(
this.getSocket=e.getSocket),e.url&&(t=wh.parseConnectionUrl(e.url),i=i||t.service),this.options=wh.assign(!1,e,t,i&&_h(i
)),this.logger=wh.getLogger(this.options,{component:this.options.component||"smtp-transport"}),e=new bh(this.options),
this.name="SMTP",this.version=Eh.version+"[client:"+e.version+"]",this.options.auth&&(this.auth=this.getAuth({}))}
getSocket(e,t){return setImmediate(()=>t(null,!1))}getAuth(t){if(!t)return this.auth;let i=!1,n={};if(
this.options.auth&&"object"==typeof this.options.auth&&Object.keys(this.options.auth).forEach(e=>{i=!0,
n[e]=this.options.auth[e]}),t&&"object"==typeof t&&Object.keys(t).forEach(e=>{i=!0,n[e]=t[e]}),!i)return!1;if(
"OAUTH2"!==(n.type||"").toString().toUpperCase())return{type:(n.type||"").toString().toUpperCase()||"LOGIN",user:n.user,
credentials:{user:n.user||"",pass:n.pass,options:n.options},method:(n.method||"").trim().toUpperCase(
)||this.options.authMethod||!1};{if(!n.service&&!n.user)return!1;let e=new kh(n,this.logger);
return e.provisionCallback=this.mailer&&this.mailer.get("oauth2_provision_cb")||e.provisionCallback,e.on("token",
e=>this.mailer.emit("token",e)),e.on("error",e=>this.emit("error",e)),{type:"OAUTH2",user:n.user,oauth2:e,
method:"XOAUTH2"}}}send(r,s){this.getSocket(this.options,(e,t)=>{if(e)return s(e);let a=!1,i=this.options,o=(
t&&t.connection&&(this.logger.info({tnx:"proxy",remoteAddress:t.connection.remoteAddress,
remotePort:t.connection.remotePort,destHost:i.host||"",destPort:i.port||"",action:"connected"},
"Using proxied socket from %s:%s to %s:%s",t.connection.remoteAddress,t.connection.remotePort,i.host||"",i.port||""),
i=wh.assign(!1,i),Object.keys(t).forEach(e=>{i[e]=t[e]})),new bh(i)),n=(o.once("error",e=>{if(!a)return a=!0,o.close(),
s(e)}),o.once("end",()=>{if(!a){let e=setTimeout(()=>{if(!a){a=!0;let e=new Error("Unexpected socket close");
o&&o._socket&&o._socket.upgrading&&(e.code="ETLS"),s(e)}},1e3);try{e.unref()}catch(e){}}}),()=>{
let i=r.message.getEnvelope(),n=r.message.messageId(),e=[].concat(i.to||[]);3<e.length&&e.push("...and "+e.splice(2
).length+" more"),r.data.dsn&&(i.dsn=r.data.dsn),this.logger.info({tnx:"send",messageId:n},"Sending message %s to <%s>",
n,e.join(", ")),o.send(i,r.message.createReadStream(),(e,t)=>{if(a=!0,o.close(),e)return this.logger.error({err:e,
tnx:"send"},"Send error for %s: %s",n,e.message),s(e);t.envelope={from:i.from,to:i.to},t.messageId=n;try{return s(null,t
)}catch(e){this.logger.error({err:e,tnx:"callback"},"Callback error for %s: %s",n,e.message)}})});o.connect(()=>{if(!a){
let t=this.getAuth(r.data.auth);t&&(o.allowsAuth||i.forceAuth)?o.login(t,e=>{if(
t&&t!==this.auth&&t.oauth2&&t.oauth2.removeAllListeners(),!a)return e?(a=!0,o.close(),s(e)):void n()}):n()}})})}verify(r
){let e;return r||(e=new Promise((e,t)=>{r=wh.callbackPromise(e,t)})),this.getSocket(this.options,(e,t)=>{if(e)return r(
e);let i=this.options,n=(t&&t.connection&&(this.logger.info({tnx:"proxy",remoteAddress:t.connection.remoteAddress,
remotePort:t.connection.remotePort,destHost:i.host||"",destPort:i.port||"",action:"connected"},
"Using proxied socket from %s:%s to %s:%s",t.connection.remoteAddress,t.connection.remotePort,i.host||"",i.port||""),
i=wh.assign(!1,i),Object.keys(t).forEach(e=>{i[e]=t[e]})),new bh(i)),a=!1,o=(n.once("error",e=>{if(!a)return a=!0,
n.close(),r(e)}),n.once("end",()=>{if(!a)return a=!0,r(new Error("Connection closed"))}),()=>{if(!a)return a=!0,n.quit()
,r(null,!0)});n.connect(()=>{var e;a||((e=this.getAuth({}))&&(n.allowsAuth||i.forceAuth)?n.login(e,e=>{if(!a)return e?(
a=!0,n.close(),r(e)):void o()}):o())})}),e}close(){this.auth&&this.auth.oauth2&&this.auth.oauth2.removeAllListeners(),
this.emit("close")}}const Th=Ep.default.spawn,Rh=i,Oh=h.exports,Ah=i,Ch=h.exports,Ph=i,jh=h.exports,Nh=(Fl=gp.default,i)
,Lh=h.exports,Ih=y;class qh extends Fl{constructor(e){super(),this.options=(e=e||{})||{},this.ses=this.options.SES,
this.name="SESTransport",this.version=Nh.version,this.logger=Lh.getLogger(this.options,{
component:this.options.component||"ses-transport"}),this.maxConnections=Number(this.options.maxConnections)||1/0,
this.connections=0,this.sendingRate=Number(this.options.sendingRate)||1/0,this.sendingRateTTL=null,this.rateInterval=1e3
,this.rateMessages=[],this.pending=[],this.idling=!0,setImmediate(()=>{this.idling&&this.emit("idle")})}send(e,t){
return this.connections>=this.maxConnections||!this._checkSendingRate()?(this.idling=!1,this.pending.push({mail:e,
callback:t})):void this._send(e,(...e)=>{setImmediate(()=>t(...e)),this._sent()})}_checkRatedQueue(){if(!(
this.connections>=this.maxConnections)&&this._checkSendingRate())if(this.pending.length){let t=this.pending.shift();
this._send(t.mail,(...e)=>{setImmediate(()=>t.callback(...e)),this._sent()})}else this.idling||(this.idling=!0,
this.emit("idle"))}_checkSendingRate(){var t,e;clearTimeout(this.sendingRateTTL),t=Date.now();let i=!1;for(
let e=this.rateMessages.length-1;0<=e;e--)this.rateMessages[e].ts>=t-this.rateInterval&&(!i||this.rateMessages[e].ts<i
)&&(i=this.rateMessages[e].ts),
this.rateMessages[e].ts<t-this.rateInterval&&!this.rateMessages[e].pending&&this.rateMessages.splice(e,1);if(
this.rateMessages.length<this.sendingRate)return!0;e=Math.max(i+1001,t+20),this.sendingRateTTL=setTimeout((
)=>this._checkRatedQueue(),t-e);try{this.sendingRateTTL.unref()}catch(e){}return!1}_sent(){this.connections--,
this._checkRatedQueue()}isIdle(){return this.idling}_send(s,c){let l={ts:Date.now(),pending:!0},p=(this.connections++,
this.rateMessages.push(l),s.data.envelope||s.message.getEnvelope()),d=s.message.messageId(),e=[].concat(p.to||[]);
3<e.length&&e.push("...and "+e.splice(2).length+" more"),this.logger.info({tnx:"send",messageId:d},
"Sending message %s to <%s>",d,e.join(", ")),setImmediate(()=>{{var a=(e,n)=>{if(e)return this.logger.error({err:e,
tnx:"send",messageId:d},"Failed creating message for %s. %s",d,e.message),l.pending=!1,c(e);let a={RawMessage:{Data:n},
Source:p.from,Destinations:p.to},o=(Object.keys(s.data.ses||{}).forEach(e=>{a[e]=s.data.ses[e]}),(
this.ses.aws?this.ses:this).ses||{}),r=this.ses.aws||{};var t=(e,t)=>{!e&&t||(t="us-east-1");let i;(
i="function"==typeof o.send&&r.SendRawEmailCommand?o.send(new r.SendRawEmailCommand(a)):o.sendRawEmail(a).promise()
).then(e=>{"us-east-1"===t&&(t="email"),l.pending=!1,c(null,{envelope:{from:p.from,to:p.to},messageId:"<"+e.MessageId+(
/@/.test(e.MessageId)?"":"@"+t+".amazonses.com")+">",response:e.MessageId,raw:n})}).catch(e=>{this.logger.error({err:e,
tnx:"send"},"Send error for %s: %s",d,e.message),l.pending=!1,c(e)})};
o.config&&"function"==typeof o.config.region?o.config.region().then(e=>t(null,e)).catch(e=>t(e)):t(null,
o.config&&o.config.region||"us-east-1")};s.data._dkim||(s.data._dkim={}),
s.data._dkim.skipFields&&"string"==typeof s.data._dkim.skipFields?s.data._dkim.skipFields+=":date:message-id":s.data._dkim.skipFields="date:message-id"
let e=s.message.createReadStream(),t=e.pipe(new Ih),i=[],n=0;return t.on("readable",()=>{for(var e;null!==(e=t.read());
)i.push(e),n+=e.length}),e.once("error",e=>t.emit("error",e)),t.once("error",e=>{a(e)}),void t.once("end",()=>a(null,
Buffer.concat(i,n)))}})}verify(i){let e,t=(this.ses.aws?this.ses:this).ses||{},n=this.ses.aws||{};const a={RawMessage:{
Data:"From: invalid@invalid\r\nTo: invalid@invalid\r\n Subject: Invalid\r\n\r\nInvalid"},Source:"invalid@invalid",
Destinations:["invalid@invalid"]};i||(e=new Promise((e,t)=>{i=Lh.callbackPromise(e,t)}));
var o=e=>e&&"InvalidParameterValue"!==(e.code||e.Code)?i(e):i(null,!0);
return"function"==typeof t.send&&n.SendRawEmailCommand?(a.RawMessage.Data=Buffer.from(a.RawMessage.Data),t.send(
new n.SendRawEmailCommand(a),o)):t.sendRawEmail(a,o),e}}const Mh=zl,Hh=h.exports,Uh=yh,zh=Sh,Bh=class{constructor(e){
e=e||{},this._spawn=Th,this.options=e||{},this.name="Sendmail",this.version=Rh.version,this.path="sendmail",this.args=!1
,this.winbreak=!1,this.logger=Oh.getLogger(this.options,{component:this.options.component||"sendmail"}),e&&(
"string"==typeof e?this.path=e:"object"==typeof e&&(e.path&&(this.path=e.path),Array.isArray(e.args)&&(this.args=e.args)
,this.winbreak=["win","windows","dos","\r\n"].includes((e.newline||"").toString().toLowerCase())))}send(i,t){
i.message.keepBcc=!0;var n=i.data.envelope||i.message.getEnvelope();let a=i.message.messageId(),e,o,r;if([].concat(
n.from||[]).concat(n.to||[]).some(e=>/^-/.test(e)))return t(new Error("Can not send mail. Invalid envelope addresses."))
e=(this.args?["-i"].concat(this.args):["-i"].concat(n.from?["-f",n.from]:[])).concat(n.to);let s=e=>{if(!r)return r=!0,
"function"==typeof t?e?t(e):t(null,{envelope:i.data.envelope||i.message.getEnvelope(),messageId:a,
response:"Messages queued for delivery"}):void 0};try{o=this._spawn(this.path,e)}catch(e){return this.logger.error({
err:e,tnx:"spawn",messageId:a},"Error occurred while spawning sendmail. %s",e.message),s(e)}if(!o)return s(new Error(
"sendmail was not found"));{o.on("error",e=>{this.logger.error({err:e,tnx:"spawn",messageId:a},
"Error occurred when sending message %s. %s",a,e.message),s(e)}),o.once("exit",e=>{if(!e)return s();e=127===e?new Error(
"Sendmail command not found, process exited with code "+e):new Error("Sendmail exited with code "+e),this.logger.error({
err:e,tnx:"stdin",messageId:a},"Error sending message %s to sendmail. %s",a,e.message),s(e)}),o.once("close",s),
o.stdin.on("error",e=>{this.logger.error({err:e,tnx:"stdin",messageId:a},
"Error occurred when piping message %s to sendmail. %s",a,e.message),s(e)});let e=[].concat(n.to||[]),t=(
3<e.length&&e.push("...and "+e.splice(2).length+" more"),this.logger.info({tnx:"send",messageId:a},
"Sending message %s to <%s>",a,e.join(", ")),i.message.createReadStream());t.once("error",e=>{this.logger.error({err:e,
tnx:"stdin",messageId:a},"Error occurred when generating message %s. %s",a,e.message),o.kill("SIGINT"),s(e)}),t.pipe(
o.stdin)}}},Dh=class{constructor(e){this.options=(e=e||{})||{},this.name="StreamTransport",this.version=Ah.version,
this.logger=Ch.getLogger(this.options,{component:this.options.component||"stream-transport"}),this.winbreak=["win",
"windows","dos","\r\n"].includes((e.newline||"").toString().toLowerCase())}send(e,a){e.message.keepBcc=!0;
var t=e.data.envelope||e.message.getEnvelope();let o=e.message.messageId(),i=[].concat(t.to||[]);3<i.length&&i.push(
"...and "+i.splice(2).length+" more"),this.logger.info({tnx:"send",messageId:o},
"Sending message %s to <%s> using %s line breaks",o,i.join(", "),this.winbreak?"<CR><LF>":"<LF>"),setImmediate(()=>{
let t;try{t=e.message.createReadStream()}catch(e){return this.logger.error({err:e,tnx:"send",messageId:o},
"Creating send stream failed for %s. %s",o,e.message),a(e)}if(!this.options.buffer)return t.once("error",e=>{
this.logger.error({err:e,tnx:"send",messageId:o},"Failed creating message for %s. %s",o,e.message)}),a(null,{
envelope:e.data.envelope||e.message.getEnvelope(),messageId:o,message:t});let i=[],n=0;t.on("readable",()=>{for(
var e;null!==(e=t.read());)i.push(e),n+=e.length}),t.once("error",e=>(this.logger.error({err:e,tnx:"send",messageId:o},
"Failed creating message for %s. %s",o,e.message),a(e))),t.on("end",()=>a(null,{
envelope:e.data.envelope||e.message.getEnvelope(),messageId:o,message:Buffer.concat(i,n)}))})}},Fh=class{constructor(e){
this.options=(e=e||{})||{},this.name="JSONTransport",this.version=Ph.version,this.logger=jh.getLogger(this.options,{
component:this.options.component||"json-transport"})}send(e,i){e.message.keepBcc=!0;
let n=e.data.envelope||e.message.getEnvelope(),a=e.message.messageId(),t=[].concat(n.to||[]);3<t.length&&t.push(
"...and "+t.splice(2).length+" more"),this.logger.info({tnx:"send",messageId:a},"Composing JSON structure of %s to <%s>"
,a,t.join(", ")),setImmediate(()=>{e.normalize((e,t)=>e?(this.logger.error({err:e,tnx:"send",messageId:a},
"Failed building JSON structure for %s. %s",a,e.message),i(e)):(delete t.envelope,delete t.normalizedHeaders,i(null,{
envelope:n,messageId:a,message:this.options.skipEncoding?t:JSON.stringify(t)})))})}},Vh=qh,$h=((
process.env.ETHEREAL_API||"https://api.nodemailer.com").replace(/\/+$/,""),(
process.env.ETHEREAL_WEB||"https://ethereal.email").replace(/\/+$/,""),["true","yes","y","1"].includes((
process.env.ETHEREAL_CACHE||"yes").toString().trim().toLowerCase()),Sl=function(e,t){var i;let n;return(
"object"==typeof e&&"function"!=typeof e.send||"string"==typeof e&&/^(smtps?|direct):/i.test(e))&&(e=new((n=(
i="string"==typeof e?e:e.url)?Hh.parseConnectionUrl(i):e
).pool?Uh:n.sendmail?Bh:n.streamTransport?Dh:n.jsonTransport?Fh:n.SES?Vh:zh)(n)),new Mh(e,n,t)},A.createLogger(
"EmailService"));class Gh{static setDefaultFrom(e){this._from=e,$h.info("Default from address defined as ",this._from)}
static initialize(e){var t,i,n,a,o;if(""===(e=Vs(null!=e?e:"")))return $h.debug("No config defined. Using localhost:25."
),void(this._transporter=Sl({host:"localhost",port:25,secure:!1}));t=(null==(o=new URL(e))?void 0:o.username)||void 0,
i=(null==o?void 0:o.password)||void 0,n=(null==o?void 0:o.hostname)||"localhost",a=parseInt((null==o?void 0:o.port
)||"25",10),o=null!=(o=null==o||null==(o=o.searchParams)?void 0:o.has("secure"))&&o,t&&i?($h.debug(
`Config "${e}" parsed as ${n}:${a} with ${t}:${i} with secure as `+o),this._transporter=Sl({host:n,port:a,secure:o,
auth:{user:decodeURIComponent(t),pass:decodeURIComponent(i)}})):($h.debug(
`Config "${e}" parsed as ${n}:${a} without auth with secure as `+o),this._transporter=Sl({host:n,port:a,secure:o}))}
static async sendEmailMessage(e){var t,i,n=null==e?void 0:e.to,a=null==e?void 0:e.cc,n=$(n)?n:[n],a=$(a)?a:[a];
const o=Xr([...n,...a]);a=null!=(n=null==e?void 0:e.from)?n:this._from,n=o.join(", "),t=null!=(
t=null==e?void 0:e.subject)?t:"",i=null!=(i=null==e?void 0:e.content)?i:"",e=null!=(e=null==e?void 0:e.htmlContent)?e:i,
$h.debug(`Sending message "${t}" to "${n}" from "${a}"`),await this._transporter.sendMail({from:a,to:n,subject:t,text:i,
html:e})}}r(Gh,"_from",void 0),r(Gh,"_transporter",void 0);const Kh=A.createLogger("AuthEmailMessageService"),
Jh=A.createLogger("EmailAuthController");class Qh{static setDefaultLanguage(e){this._defaultLanguage=e}
static async authenticateEmail(e,t=""){var i,n,a,o,r,s;try{if(n=null!=(i=function(){switch((""+t).toUpperCase()){
case"FI":case"FINNISH":return kc.FINNISH;case"EN":case"ENGLISH":return kc.ENGLISH;default:return}}()
)?i:this._defaultLanguage,!(X(s=e)&&ee(s,["email"])&&l(null==s?void 0:s.email)))return P.badRequest().body(Pe(
"Body not AuthenticateEmailDTO"));if(Jh.debug("authenticateEmail: body = ",e),!(a=e.email))return P.badRequest().body(
Pe("body.email required",400));o=yd.createVerificationCode(a),r=_d.createUnverifiedEmailToken(a);try{await class{
static async sendAuthenticationCode(e,t,i){var i={CODE:i},i=(e=await Ed.translateKeys(e,[Td,Rd,Od,Ad,Cd,Pd,jd],i))[Td],
n=e[Rd]+e[Od]+e[Ad],e=e[Cd]+e[Pd]+e[jd];await Gh.sendEmailMessage({to:t,subject:i,content:n,htmlContent:e}),Kh.info(
"sendAuthenticationCode: Sent successfully to "+t)}}.sendAuthenticationCode(n,a,o)}catch(e){return Jh.error(
"authenticateEmail: Could not send email: ",e),P.internalServerError().body(Pe("Internal error",500))}return P.ok(r)
}catch(e){return Jh.error("ERROR: ",e),P.internalServerError().body(Pe("Internal Server Error",500))}}
static async verifyEmailCode(e){var t,i,n,a,o,r;try{return X(r=e)&&ee(r,["token","code"])&&Xt(null==r?void 0:r.token
)&&l(null==r?void 0:r.code)?(Jh.debug("verifyEmailCode: body = ",e),i=null==(t=null==e?void 0:e.token)?void 0:t.token,
n=null==t?void 0:t.email,a=null==e?void 0:e.code,n&&a&&yd.verifyCode(n,a)&&i&&n&&_d.verifyToken(n,i,!1)?(
o=_d.createVerifiedEmailToken(n),P.ok(o)):P.internalServerError().body(Pe("Access denied",403))):P.badRequest().body(Pe(
"Body not VerifyEmailCodeDTO"))}catch(e){return Jh.error("ERROR: ",e),P.internalServerError().body(Pe(
"Internal Server Error"))}}static async verifyEmailToken(e){var t,i,n,a,o,r,s,c;try{return X(c=e)&&ee(c,["token"])&&Xt(
null==c?void 0:c.token)?(Jh.debug("verifyEmailToken: body = ",e),o=null!=(t=null==e||null==(i=e.token)?void 0:i.token
)?t:"",r=null!=(n=null==e||null==(a=e.token)?void 0:a.email)?n:"",o&&r&&_d.verifyToken(r,o,!0)?(
s=_d.createVerifiedEmailToken(r),P.ok(s)):P.internalServerError().body(Pe("Access denied",403))):P.badRequest().body(Pe(
"Body not VerifyEmailTokenDTO"))}catch(e){return Jh.error("ERROR: ",e),P.internalServerError().body(Pe(
"Internal Server Error"))}}}r(Qh,"_defaultLanguage",kc.ENGLISH),Tl={LANGUAGE:"l"};const Wh=A.createLogger(
"BackendController");let Xh=class{static setDefaultLanguage(e){Qh.setDefaultLanguage(e)}static async getIndex(e){try{
return P.ok({hello:"world"})}catch(e){return Wh.error("ERROR: ",e),P.internalServerError().body({
error:"Internal Server Error"})}}static async authenticateEmail(e,t=""){return Qh.authenticateEmail(e,t)}
static async verifyEmailToken(e){return Qh.verifyEmailToken(e)}static async verifyEmailCode(e){
return Qh.verifyEmailCode(e)}};Te([L.getMapping("/"),Re(0,(T={required:!1,defaultValue:""},vd.debug("RequestHeader: ",
"X-Authorization",T,void 0),L.header("X-Authorization",T,void 0))),Oe("design:type",Function),Oe("design:paramtypes",[
String]),Oe("design:returntype",Promise)],Xh,"getIndex",null),Te([Ae("/authenticateEmail"),Re(0,Ce),Re(1,(O=_c.STRING,
L.param(Tl.LANGUAGE,O,void 0))),Oe("design:type",Function),Oe("design:paramtypes",[Object,Object]),Oe(
"design:returntype",Promise)],Xh,"authenticateEmail",null),Te([Ae("/verifyEmailToken"),Re(0,Ce),Oe("design:type",
Function),Oe("design:paramtypes",[Object]),Oe("design:returntype",Promise)],Xh,"verifyEmailToken",null),Te([Ae(
"/verifyEmailCode"),Re(0,Ce),Oe("design:type",Function),Oe("design:paramtypes",[Object]),Oe("design:returntype",Promise)
],Xh,"verifyEmailCode",null),Xh=Te([L.mapping("/")],Xh);const Yh={en:{"common.siteName":"example.com",
"common.companyName":"Example Inc","m.common.siteName":"$t(common.siteName)",
"m.common.companyName":"$t(common.companyName)","m.common.headerText":"Hi,\n","m.common.headerHtml":"<p>Hi,</p>\n",
"m.common.footerText":"-- \n$t(m.common.siteName)\n$t(m.common.companyName)\n",
"m.common.footerHtml":"<hr>\n$t(m.common.siteName)<br>\n$t(m.common.companyName)<br>\n",
"m.common.authCodeIs":"Auth code is: ",
"m.common.authDisclaimer":"If you didn't log in to our website, somebody might be trying to login as you.\nIn that case, do nothing.",
"m.authCode.subject":"Verify your email address to our service:","m.authCode.headerText":"$t(m.common.headerText)",
"m.authCode.bodyText":"$t(m.common.authCodeIs) {{CODE}}\n\n$t(m.common.authDisclaimer)",
"m.authCode.footerText":"$t(m.common.footerText)","m.authCode.headerHtml":"$t(m.common.headerHtml)",
"m.authCode.bodyHtml":"<p>$t(m.common.authCodeIs) <strong>{{CODE}}</strong></p>\n\n<p>$t(m.common.authDisclaimer)</p>",
"m.authCode.footerHtml":"$t(m.common.footerHtml)"},fi:{"common.siteName":"example.com",
"common.companyName":"Example Inc","m.common.siteName":"$t(common.siteName)",
"m.common.companyName":"$t(common.companyName)","m.common.headerText":"Hei,\n","m.common.headerHtml":"<p>Hei,</p>\n",
"m.common.footerText":"-- \n$t(m.common.siteName)\n$t(m.common.companyName)\n",
"m.common.footerHtml":"<hr>\n$t(m.common.siteName)<br>\n$t(m.common.companyName)<br>\n",
"m.common.authCodeIs":"Vahvistuskoodisi on: ",
"m.common.authDisclaimer":"Jos et tehnyt pyyntöä itse, saattaa joku muu yrittää luvatta tehdä tilausta verkkokauppaamme.\nSiinä tapauksessa älä tee mitään.",
"m.authCode.subject":"Vahvista sähköpostiosoitteesi palveluumme","m.authCode.headerText":"$t(m.common.headerText)",
"m.authCode.bodyText":"$t(m.common.authCodeIs) {{CODE}}\n\n$t(m.common.authDisclaimer)",
"m.authCode.footerText":"$t(m.common.footerText)","m.authCode.headerHtml":"$t(m.common.headerHtml)",
"m.authCode.bodyHtml":"<p>$t(m.common.authCodeIs) <strong>{{CODE}}</strong></p>\n\n<p>$t(m.common.authDisclaimer)</p>",
"m.authCode.footerHtml":"$t(m.common.footerHtml)"}},Zh=(Mp.initEnvFromDefaultFiles(),A.setLogLevel(m),A.createLogger(
"main"));!async function(e=[]){var t;try{sd.setLogLevel(c.INFO),ud.setLogLevel(c.INFO),td.setLogLevel(c.INFO),
fd.setLogLevel(c.INFO),Zh.debug("Loglevel as "+A.getLogLevelString()),_d.setJwtEngine(bd.createJwtEngine(Dp,Fp)),
Xh.setDefaultLanguage(Sd),await Ed.initialize(Sd,Yh),Gh.initialize(zp),Gh.setDefaultFrom(Bp);var{scriptName:n,
parseStatus:a,exitStatus:o,errorString:r}=class{static parseArguments(e,t=[]){var i,n,a,o=null!=(i=t.shift())?i:"",
r=null!=(i=t.shift())?i:"";if(!r)return{parseStatus:bc.ERROR,exitStatus:3,nodePath:o,scriptName:e,freeArgs:[],
extraArgs:[]};if(0===t.length)return{parseStatus:bc.ERROR,exitStatus:3,nodePath:o,scriptName:r,freeArgs:[],extraArgs:[]}
let s=!0,c=[],l=[];do{if(a=null!=(n=t.shift())?n:"",s)switch(function(){switch(a){case"-h":case"--help":case 0:return 0;
case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:return{parseStatus:bc.HELP,exitStatus:0,
nodePath:o,scriptName:r,freeArgs:c,extraArgs:l};case 1:return{parseStatus:bc.VERSION,exitStatus:0,nodePath:o,
scriptName:r,freeArgs:c,extraArgs:l};case 2:s=!1;break;default:if(s){if(lc(a,"-"))return{
errorString:"Unknown argument: "+a,parseStatus:bc.ERROR,exitStatus:4,nodePath:o,scriptName:r,freeArgs:c,extraArgs:l};
c.push(a)}else l.push(a)}}while(1<=t.length);return{parseStatus:bc.OK,exitStatus:0,nodePath:o,scriptName:r,freeArgs:c,
extraArgs:l}}}.parseArguments(Hp,e);if(a===bc.HELP||a===bc.VERSION)return console.log(
`USAGE: ${n} [OPT(s)] ARG(1) [...ARG(N)]

  HG Oy backend.
  
...and OPT is one of:

    -h --help          Print help
    -v --version       Print version
    --                 Disables option parsing

  Environment variables:

    BACKEND_LOG_LEVEL as one of:
    
      ALL
      DEBUG
      INFO
      WARN
      ERROR
      NONE
`),o;if(r)return console.error("ERROR: "+r),o;const s=new fd(Up);s.attachController(Xh),s.start();let i=void 0;
return t=new Promise((e,t)=>{try{Zh.debug("Stopping server from RequestServer stop event"),i=s.on(fd.Event.STOPPED,()=>{
i=void 0,e()})}catch(e){t(e)}}),Mp.setupDestroyHandler(()=>{Zh.debug("Stopping server from process utils event"),s.stop(
),i&&(i(),i=void 0)},e=>{Zh.error("Error while shutting down the service: ",e)}),await t,0}catch(e){return Zh.error(
"Fatal error: ",e),6}}(process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
