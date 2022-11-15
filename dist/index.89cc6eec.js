/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 1.0.1
*/
const t=Object.freeze({left:0,top:0,width:16,height:16}),e=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),n=Object.freeze({...t,...e}),o=Object.freeze({...n,body:"",hidden:!1}),i=Object.freeze({width:null,height:null}),r=Object.freeze({...i,...e});const s=/[\s,]+/;const c={...r,preserveAspectRatio:""};function a(t){const e={...c},n=(e,n)=>t.getAttribute(e)||n;var o;return e.width=n("width",null),e.height=n("height",null),e.rotate=function(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:o(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i/=e,i%1==0?o(i):0)}}return e}(n("rotate","")),o=e,n("flip","").split(s).forEach((t=>{switch(t.trim()){case"horizontal":o.hFlip=!0;break;case"vertical":o.vFlip=!0}})),e.preserveAspectRatio=n("preserveAspectRatio",n("preserveaspectratio","")),e}const l=/^[a-z0-9]+(-[a-z0-9]+)*$/,u=(t,e,n,o="")=>{const i=t.split(":");if("@"===t.slice(0,1)){if(i.length<2||i.length>3)return null;o=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const t=i.pop(),n=i.pop(),r={provider:i.length>0?i[0]:o,prefix:n,name:t};return e&&!d(r)?null:r}const r=i[0],s=r.split("-");if(s.length>1){const t={provider:o,prefix:s.shift(),name:s.join("-")};return e&&!d(t)?null:t}if(n&&""===o){const t={provider:o,prefix:"",name:r};return e&&!d(t,n)?null:t}return null},d=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(l)||!(e&&""===t.prefix||t.prefix.match(l))||!t.name.match(l));function f(t,n){const i=function(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}(t,n);for(const r in o)r in e?r in t&&!(r in i)&&(i[r]=e[r]):r in n?i[r]=n[r]:r in t&&(i[r]=t[r]);return i}function h(t,e,n){const o=t.icons,i=t.aliases||{};let r={};function s(t){r=f(o[t]||i[t],r)}return s(e),n.forEach(s),f(t,r)}function p(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const o=function(t,e){const n=t.icons,o=t.aliases||{},i=Object.create(null);return(e||Object.keys(n).concat(Object.keys(o))).forEach((function t(e){if(n[e])return i[e]=[];if(!(e in i)){i[e]=null;const n=o[e]&&o[e].parent,r=n&&t(n);r&&(i[e]=[n].concat(r))}return i[e]})),i}(t);for(const i in o){const r=o[i];r&&(e(i,h(t,i,r)),n.push(i))}return n}const g={provider:"",aliases:{},not_found:{},...t};function m(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function b(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons)return null;if(!m(t,g))return null;const n=e.icons;for(const t in n){const e=n[t];if(!t.match(l)||"string"!=typeof e.body||!m(e,o))return null}const i=e.aliases||{};for(const t in i){const e=i[t],r=e.parent;if(!t.match(l)||"string"!=typeof r||!n[r]&&!i[r]||!m(e,o))return null}return e}const y=Object.create(null);function v(t,e){const n=y[t]||(y[t]=Object.create(null));return n[e]||(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function x(t,e){return b(e)?p(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}function w(t,e){let n=[];return("string"==typeof t?[t]:Object.keys(y)).forEach((t=>{("string"==typeof t&&"string"==typeof e?[e]:Object.keys(y[t]||{})).forEach((e=>{const o=v(t,e);n=n.concat(Object.keys(o.icons).map((n=>(""!==t?"@"+t+":":"")+e+":"+n)))}))})),n}let k=!1;function A(t){return"boolean"==typeof t&&(k=t),k}function I(t){const e="string"==typeof t?u(t,!0,k):t;if(e){const t=v(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}function _(t,e){const n=u(t,!0,k);if(!n)return!1;return function(t,e,n){try{if("string"==typeof n.body)return t.icons[e]={...n},!0}catch(t){}return!1}(v(n.provider,n.prefix),n.name,e)}function E(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),k&&!e&&!t.prefix){let e=!1;return b(t)&&(t.prefix="",p(t,((t,n)=>{n&&_(t,n)&&(e=!0)}))),e}const n=t.prefix;if(!d({provider:e,prefix:n,name:"a"}))return!1;return!!x(v(e,n),t)}function j(t){return!!I(t)}function S(t){const e=I(t);return e?{...n,...e}:null}function C(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}let O=0;const T=Object.create(null);function M(t,e){T[t]=e}function L(t){return T[t]||T[""]}var F={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function P(t,e,n,o){const i=t.resources.length,r=t.random?Math.floor(Math.random()*i):t.index;let s;if(t.random){let e=t.resources.slice(0);for(s=[];e.length>1;){const t=Math.floor(Math.random()*e.length);s.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}s=s.concat(e)}else s=t.resources.slice(r).concat(t.resources.slice(0,r));const c=Date.now();let a,l="pending",u=0,d=null,f=[],h=[];function p(){d&&(clearTimeout(d),d=null)}function g(){"pending"===l&&(l="aborted"),p(),f.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),f=[]}function m(t,e){e&&(h=[]),"function"==typeof t&&h.push(t)}function b(){l="failed",h.forEach((t=>{t(void 0,a)}))}function y(){f.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),f=[]}function v(){if("pending"!==l)return;p();const o=s.shift();if(void 0===o)return f.length?void(d=setTimeout((()=>{p(),"pending"===l&&(y(),b())}),t.timeout)):void b();const i={status:"pending",resource:o,callback:(e,n)=>{!function(e,n,o){const i="success"!==n;switch(f=f.filter((t=>t!==e)),l){case"pending":break;case"failed":if(i||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=o,void b();if(i)return a=o,void(f.length||(s.length?v():b()));if(p(),y(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}l="completed",h.forEach((t=>{t(o)}))}(i,e,n)}};f.push(i),u++,d=setTimeout(v,t.rotate),n(o,e,i.callback)}return"function"==typeof o&&h.push(o),setTimeout(v),function(){return{startTime:c,payload:e,status:l,queriesSent:u,queriesPending:f.length,subscribe:m,abort:g}}}function N(t){const e={...F,...t};let n=[];function o(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,i,r){const s=P(e,t,i,((t,e)=>{o(),r&&r(t,e)}));return n.push(s),s},find:function(t){return n.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:o}}function R(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const z=Object.create(null),q=["https://api.simplesvg.com","https://api.unisvg.com"],Q=[];for(;q.length>0;)1===q.length||Math.random()>.5?Q.push(q.shift()):Q.push(q.pop());function B(t,e){const n=R(e);return null!==n&&(z[t]=n,!0)}function D(t){return z[t]}function U(){return Object.keys(z)}function J(){}z[""]=R({resources:["https://api.iconify.design"].concat(Q)});const H=Object.create(null);function $(t,e,n){let o,i;if("string"==typeof t){const e=L(t);if(!e)return n(void 0,424),J;i=e.send;const r=function(t){if(!H[t]){const e=D(t);if(!e)return;const n={config:e,redundancy:N(e)};H[t]=n}return H[t]}(t);r&&(o=r.redundancy)}else{const e=R(t);if(e){o=N(e);const n=L(t.resources?t.resources[0]:"");n&&(i=n.send)}}return o&&i?o.query(e,i,n)().abort:(n(void 0,424),J)}function G(t,e){try{return t.getItem(e)}catch(t){}}function V(t,e,n){try{return t.setItem(e,n),!0}catch(t){}}function K(t,e){try{t.removeItem(e)}catch(t){}}function W(t,e){return V(t,"iconify-count",e.toString())}function X(t){return parseInt(G(t,"iconify-count"))||0}const Y={local:!0,session:!0},Z={local:new Set,session:new Set};let tt=!1;let et="undefined"==typeof window?{}:window;function nt(t){const e=t+"Storage";try{if(et&&et[e]&&"number"==typeof et[e].length)return et[e]}catch(t){}Y[t]=!1}function ot(t,e){const n=nt(t);if(!n)return;const o=G(n,"iconify-version");if("iconify2"!==o){if(o){const t=X(n);for(let e=0;e<t;e++)K(n,"iconify"+e.toString())}return V(n,"iconify-version","iconify2"),void W(n,0)}const i=Math.floor(Date.now()/36e5)-168,r=t=>{const o="iconify"+t.toString(),r=G(n,o);if("string"==typeof r){try{const n=JSON.parse(r);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>i&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch(t){}K(n,o)}};let s=X(n);for(let e=s-1;e>=0;e--)r(e)||(e===s-1?(s--,W(n,s)):Z[t].add(e))}function it(){if(!tt){tt=!0;for(const t in Y)ot(t,(t=>{const e=t.data,n=v(t.provider,e.prefix);if(!x(n,e).length)return!1;const o=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,o):o,!0}))}}function rt(t,e){function n(n){let o;if(!Y[n]||!(o=nt(n)))return;const i=Z[n];let r;if(i.size)i.delete(r=Array.from(i).shift());else if(r=X(o),!W(o,r+1))return;const s={cached:Math.floor(Date.now()/36e5),provider:t.provider,data:e};return V(o,"iconify"+r.toString(),JSON.stringify(s))}tt||it(),e.lastModified&&!function(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const n in Y)ot(n,(n=>{const o=n.data;return n.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e}));return!0}(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}function st(){}function ct(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,i=t.prefix;e.forEach((e=>{const r=e.icons,s=r.pending.length;r.pending=r.pending.filter((e=>{if(e.prefix!==i)return!0;const s=e.name;if(t.icons[s])r.loaded.push({provider:o,prefix:i,name:s});else{if(!t.missing.has(s))return n=!0,!0;r.missing.push({provider:o,prefix:i,name:s})}return!1})),r.pending.length!==s&&(n||C([t],e.id),e.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),e.abort))}))})))}(t)})))}const at=(t,e)=>{const n=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let o={provider:"",prefix:"",name:""};return t.forEach((t=>{if(o.name===t.name&&o.prefix===t.prefix&&o.provider===t.provider)return;o=t;const i=t.provider,r=t.prefix,s=t.name,c=n[i]||(n[i]=Object.create(null)),a=c[r]||(c[r]=v(i,r));let l;l=s in a.icons?e.loaded:""===r||a.missing.has(s)?e.missing:e.pending;const u={provider:i,prefix:r,name:s};l.push(u)})),e}(function(t,e=!0,n=!1){const o=[];return t.forEach((t=>{const i="string"==typeof t?u(t,e,n):t;i&&o.push(i)})),o}(t,!0,A()));if(!n.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(n.loaded,n.missing,n.pending,st)})),()=>{t=!1}}const o=Object.create(null),i=[];let r,s;return n.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===s&&e===r)return;r=e,s=n,i.push(v(e,n));const c=o[e]||(o[e]=Object.create(null));c[n]||(c[n]=[])})),n.pending.forEach((t=>{const{provider:e,prefix:n,name:i}=t,r=v(e,n),s=r.pendingIcons||(r.pendingIcons=new Set);s.has(i)||(s.add(i),o[e][n].push(i))})),i.forEach((t=>{const{provider:e,prefix:n}=t;o[e][n].length&&function(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,o=t.iconsToLoad;let i;delete t.iconsToLoad,o&&(i=L(e))&&i.prepare(e,n,o).forEach((n=>{$(e,n,((e,o)=>{if("object"!=typeof e){if(404!==o)return;n.icons.forEach((e=>{t.missing.add(e)}))}else try{const n=x(t,e);if(!n.length)return;const o=t.pendingIcons;o&&n.forEach((t=>{o.delete(t)})),rt(t,e)}catch(t){console.error(t)}ct(t)}))}))})))}(t,o[e][n])})),e?function(t,e,n){const o=O++,i=C.bind(null,n,o);if(!e.pending.length)return i;const r={id:o,icons:e,callback:t,abort:i};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(r)})),i}(e,n,i):st},lt=t=>new Promise(((e,o)=>{const i="string"==typeof t?u(t,!0):t;i?at([i||t],(r=>{if(r.length&&i){const t=I(i);if(t)return void e({...n,...t})}o(t)})):o(t)}));function ut(t,e){const n="string"==typeof t?u(t,!0,!0):null;if(!n){const e=function(t){try{const e="string"==typeof t?JSON.parse(t):t;if("string"==typeof e.body)return{...e}}catch(t){}}(t);return{value:t,data:e}}const o=I(n);if(void 0!==o||!n.prefix)return{value:t,name:n,data:o};const i=at([n],(()=>e(t,n,I(n))));return{value:t,name:n,loading:i}}function dt(t){return t.hasAttribute("inline")}let ft=!1;try{ft=0===navigator.vendor.indexOf("Apple")}catch(t){}const ht=/(-?[0-9.]*[0-9]+[0-9.]*)/g,pt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function gt(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const o=t.split(ht);if(null===o||!o.length)return t;const i=[];let r=o.shift(),s=pt.test(r);for(;;){if(s){const t=parseFloat(r);isNaN(t)?i.push(r):i.push(Math.ceil(t*e*n)/n)}else i.push(r);if(r=o.shift(),void 0===r)return i.join("");s=!s}}function mt(t,e){const o={...n,...t},i={...r,...e},s={left:o.left,top:o.top,width:o.width,height:o.height};let c=o.body;[o,i].forEach((t=>{const e=[],n=t.hFlip,o=t.vFlip;let i,r=t.rotate;switch(n?o?r+=2:(e.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),e.push("scale(-1 1)"),s.top=s.left=0):o&&(e.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),e.push("scale(1 -1)"),s.top=s.left=0),r<0&&(r-=4*Math.floor(r/4)),r%=4,r){case 1:i=s.height/2+s.top,e.unshift("rotate(90 "+i.toString()+" "+i.toString()+")");break;case 2:e.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:i=s.width/2+s.left,e.unshift("rotate(-90 "+i.toString()+" "+i.toString()+")")}r%2==1&&(s.left!==s.top&&(i=s.left,s.left=s.top,s.top=i),s.width!==s.height&&(i=s.width,s.width=s.height,s.height=i)),e.length&&(c='<g transform="'+e.join(" ")+'">'+c+"</g>")}));const a=i.width,l=i.height,u=s.width,d=s.height;let f,h;null===a?(h=null===l?"1em":"auto"===l?d:l,f=gt(h,u/d)):(f="auto"===a?u:a,h=null===l?gt(f,d/u):"auto"===l?d:l);return{attributes:{width:f.toString(),height:h.toString(),viewBox:s.left.toString()+" "+s.top.toString()+" "+u.toString()+" "+d.toString()},body:c}}let bt=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(t){}})();function yt(t){bt=t}function vt(){return bt}const xt={prepare:(t,e,n)=>{const o=[],i=function(t,e){const n=D(t);if(!n)return 0;let o;if(n.maxURL){let t=0;n.resources.forEach((e=>{const n=e;t=Math.max(t,n.length)}));const i=e+".json?icons=";o=n.maxURL-t-n.path.length-i.length}else o=0;return o}(t,e),r="icons";let s={type:r,provider:t,prefix:e,icons:[]},c=0;return n.forEach(((n,a)=>{c+=n.length+1,c>=i&&a>0&&(o.push(s),s={type:r,provider:t,prefix:e,icons:[]},c=n.length),s.icons.push(n)})),o.push(s),o},send:(t,e,n)=>{if(!bt)return void n("abort",424);let o=function(t){if("string"==typeof t){const e=D(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");o+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;o+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let i=503;bt(t+o).then((t=>{const e=t.status;if(200===e)return i=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{n("next",i)}))})).catch((()=>{n("next",i)}))}};function wt(t,e){switch(t){case"local":case"session":Y[t]=e;break;case"all":for(const t in Y)Y[t]=e}}function kt(){let t;M("",xt),A(!0);try{t=window}catch(t){}if(t){if(it(),void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!E(t))&&console.error(n)}catch(t){console.error(n)}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(const t in e){const n="IconifyProviders["+t+"] is invalid.";try{const o=e[t];if("object"!=typeof o||!o||void 0===o.resources)continue;B(t,o)||console.error(n)}catch(t){console.error(n)}}}}return{enableCache:t=>wt(t,!0),disableCache:t=>wt(t,!1),iconExists:j,getIcon:S,listIcons:w,addIcon:_,addCollection:E,calculateSize:gt,buildIcon:mt,loadIcons:at,loadIcon:lt,addAPIProvider:B,_api:{getAPIConfig:D,setAPIModule:M,sendAPIQuery:$,setFetch:yt,getFetch:vt,listAPIProviders:U}}}function At(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const t in e)n+=" "+t+'="'+e[t]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}const It={"background-color":"currentColor"},_t={"background-color":"transparent"},Et={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},jt={"-webkit-mask":It,mask:It,background:_t};for(const t in jt){const e=jt[t];for(const n in Et)e[t+"-"+n]=Et[n]}function St(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}function Ct(t,e){const o=e.icon.data,i=e.customisations,r=mt(o,i);i.preserveAspectRatio&&(r.attributes.preserveAspectRatio=i.preserveAspectRatio);const s=e.renderedMode;let c;if("svg"===s)c=function(t){const e=document.createElement("span");return e.innerHTML=At(t.body,t.attributes),e.firstChild}(r);else c=function(t,e,n){const o=document.createElement("span");let i=t.body;-1!==i.indexOf("<a")&&(i+="\x3c!-- "+Date.now()+" --\x3e");const r=t.attributes,s='url("data:image/svg+xml,'+(l=At(i,{...r,width:e.width+"",height:e.height+""}),l.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")+'")'),c=o.style,a={"--svg":s,width:St(r.width),height:St(r.height),...n?It:_t};var l;for(const t in a)c.setProperty(t,a[t]);return o}(r,{...n,...o},"mask"===s);const a=Array.from(t.childNodes).find((t=>{const e=t.tagName&&t.tagName.toUpperCase();return"SPAN"===e||"SVG"===e}));a?"SPAN"===c.tagName&&a.tagName===c.tagName?a.setAttribute("style",c.getAttribute("style")):t.replaceChild(c,a):t.appendChild(c)}function Ot(t,e){let n=Array.from(t.childNodes).find((t=>t.hasAttribute&&t.hasAttribute("data-style")));n||(n=document.createElement("style"),n.setAttribute("data-style","data-style"),t.appendChild(n)),n.textContent=":host{display:inline-block;vertical-align:"+(e?"-0.125em":"0")+"}span,svg{display:block}"}function Tt(t,e,n){return{rendered:!1,inline:e,icon:t,lastRender:n&&(n.rendered?n:n.lastRender)}}const Mt=function(t="iconify-icon"){let e,n;try{e=window.customElements,n=window.HTMLElement}catch(t){return}if(!e||!n)return;const o=e.get(t);if(o)return o;const i=["icon","mode","inline","width","height","rotate","flip"],r=class extends n{_shadowRoot;_state;_checkQueued=!1;constructor(){super();const t=this._shadowRoot=this.attachShadow({mode:"open"}),e=dt(this);Ot(t,e),this._state=Tt({value:""},e),this._queueCheck()}static get observedAttributes(){return i.slice(0)}attributeChangedCallback(t){if("inline"===t){const t=dt(this),e=this._state;t!==e.inline&&(e.inline=t,Ot(this._shadowRoot,t))}else this._queueCheck()}get icon(){const t=this.getAttribute("icon");if(t&&"{"===t.slice(0,1))try{return JSON.parse(t)}catch(t){}return t}set icon(t){"object"==typeof t&&(t=JSON.stringify(t)),this.setAttribute("icon",t)}get inline(){return dt(this)}set inline(t){this.setAttribute("inline",t?"true":null)}restartAnimation(){const t=this._state;if(t.rendered){const e=this._shadowRoot;if("svg"===t.renderedMode)try{return void e.lastChild.setCurrentTime(0)}catch(t){}Ct(e,t)}}get status(){const t=this._state;return t.rendered?"rendered":null===t.icon.data?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout((()=>{this._check()})))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const t=this._state,e=this.getAttribute("icon");if(e!==t.icon.value)return void this._iconChanged(e);if(!t.rendered)return;const n=this.getAttribute("mode"),o=a(this);(t.attrMode!==n||function(t,e){for(const n in c)if(t[n]!==e[n])return!0;return!1}(t.customisations,o))&&this._renderIcon(t.icon,o,n)}_iconChanged(t){const e=ut(t,((t,e,n)=>{const o=this._state;if(o.rendered||this.getAttribute("icon")!==t)return;const i={value:t,name:e,data:n};i.data?this._gotIconData(i):o.icon=i}));e.data?this._gotIconData(e):this._state=Tt(e,this._state.inline,this._state)}_gotIconData(t){this._checkQueued=!1,this._renderIcon(t,a(this),this.getAttribute("mode"))}_renderIcon(t,e,n){const o=function(t,e){switch(e){case"svg":case"bg":case"mask":return e}return"style"===e||!ft&&-1!==t.indexOf("<a")?-1===t.indexOf("currentColor")?"bg":"mask":"svg"}(t.data.body,n),i=this._state.inline;Ct(this._shadowRoot,this._state={rendered:!0,icon:t,inline:i,customisations:e,attrMode:n,renderedMode:o})}};i.forEach((t=>{t in r.prototype||Object.defineProperty(r.prototype,t,{get:function(){return this.getAttribute(t)},set:function(e){this.setAttribute(t,e)}})}));const s=kt();for(const t in s)r[t]=r.prototype[t]=s[t];return e.define(t,r),r}()||kt(),{enableCache:Lt,disableCache:Ft,iconExists:Pt,getIcon:Nt,listIcons:Rt,addIcon:zt,addCollection:qt,calculateSize:Qt,buildIcon:Bt,loadIcons:Dt,loadIcon:Ut,addAPIProvider:Jt,_api:Ht}=Mt,$t=document.getElementById("mobile-sidebar"),Gt=document.getElementById("mobile-sidebar-container"),Vt=document.querySelector("#sidebar-show-btn button"),Kt=document.querySelector("#sidebar-hide-btn button"),Wt=document.querySelectorAll("#sidebar-nav ul li a"),Xt=document.getElementById("toggle-to-light"),Yt=document.getElementById("toggle-to-dark"),Zt=document.getElementById("toggle-circle"),te=document.getElementById("scroll-btn"),ee=document.getElementById("github_logo"),ne=document.getElementById("loader"),oe=window.localStorage,{language:ie}=window.navigator;function re(){$t.classList.contains("hide")?($t.setAttribute("class","bg-anim-show show"),Gt.setAttribute("class","from-left-anim")):(Gt.setAttribute("class","from-right-anim"),$t.setAttribute("class","bg-anim-hide"),setTimeout((()=>$t.classList.add("hide")),450))}function se(t){if("dark"===t)oe.setItem("abc_theme","dark"),document.body.setAttribute("data-theme","dark"),Zt.setAttribute("class","dark-theme-toggle");else oe.setItem("abc_theme","light"),document.body.setAttribute("data-theme","light"),Zt.setAttribute("class","light-theme-toggle")}window.addEventListener("load",(function(){oe.getItem("abc_theme")?(document.body.setAttribute("data-theme",oe.getItem("abc_theme")),Zt.setAttribute("class",`${oe.getItem("abc_theme")}-theme-toggle`),"dark"===oe.getItem("abc_theme")&&ee.setAttribute("xlink:href","src/images/logos/github-dark.svg")):(Zt.setAttribute("class","light-theme-toggle"),oe.setItem("abc_theme","light")),ie.includes("fr")&&this.fetch("./fr.json").then((t=>{t.json().then((t=>{var e;e=t,document.querySelectorAll("[data-translate]").forEach((t=>{const n=t.getAttribute("data-translate"),o=e[n];t.innerHTML=o}))}))})),ne.setAttribute("class","loading-end"),ne.setAttribute("class","loading-end"),setTimeout((()=>ne.style.display="none"),1500),setTimeout((()=>{document.querySelectorAll('[data-loading="true"]').forEach((t=>{t.setAttribute("data-loading",!1)}))}),1e3)})),Vt.addEventListener("click",re),Kt.addEventListener("click",re),Wt.forEach((t=>{t.addEventListener("click",re)})),Xt.addEventListener("click",(function(){"dark"===oe.getItem("abc_theme")&&(se("light"),ee.setAttribute("xlink:href","src/images/logos/github-light.svg"))})),Yt.addEventListener("click",(function(){"light"===oe.getItem("abc_theme")&&(se("dark"),ee.setAttribute("xlink:href","src/images/logos/github-dark.svg"))})),te.addEventListener("click",(function(t){t.preventDefault(),window.scrollTo({top:window.innerHeight,behavior:"smooth"})}));
//# sourceMappingURL=index.89cc6eec.js.map
