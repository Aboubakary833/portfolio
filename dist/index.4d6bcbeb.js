// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8TtF2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gLLPy":[function(require,module,exports) {
var _iconifyIcon = require("iconify-icon");
const sidebar = document.getElementById("mobile-sidebar");
const sidebarContainer = document.getElementById("mobile-sidebar-container");
const showBtn = document.querySelector("#sidebar-show-btn button");
const hideBtn = document.querySelector("#sidebar-hide-btn button");
const sidebarLinks = document.querySelectorAll("#sidebar-nav ul li a");
const lightThemeToggleBtn = document.getElementById("toggle-to-light");
const darkThemeToggleBtn = document.getElementById("toggle-to-dark");
const toggleCircle = document.getElementById("toggle-circle");
const scrollBtn = document.getElementById("scroll-btn");
const githubLogo = document.getElementById("github_logo");
const loader = document.getElementById("loader");
const storage = window.localStorage;
const { language  } = window.navigator;
window.addEventListener("load", function() {
    if (storage.getItem("abc_theme")) {
        document.body.setAttribute("data-theme", storage.getItem("abc_theme"));
        toggleCircle.setAttribute("class", `${storage.getItem("abc_theme")}-theme-toggle`);
        if (storage.getItem("abc_theme") === "dark") githubLogo.setAttribute("xlink:href", "src/images/logos/github-dark.svg");
    } else {
        toggleCircle.setAttribute("class", "light-theme-toggle");
        storage.setItem("abc_theme", "light");
    }
    if (language.includes("fr")) this.fetch("./fr.json").then((res)=>{
        res.json().then((obj)=>{
            handleTranslation(obj);
        });
    });
    handleLoading();
});
showBtn.addEventListener("click", showOrHide);
hideBtn.addEventListener("click", showOrHide);
sidebarLinks.forEach((link)=>{
    link.addEventListener("click", showOrHide);
});
lightThemeToggleBtn.addEventListener("click", function() {
    if (storage.getItem("abc_theme") === "dark") {
        changeTheme("light");
        githubLogo.setAttribute("xlink:href", "src/images/logos/github-light.svg");
    }
});
darkThemeToggleBtn.addEventListener("click", function() {
    if (storage.getItem("abc_theme") === "light") {
        changeTheme("dark");
        githubLogo.setAttribute("xlink:href", "src/images/logos/github-dark.svg");
    }
});
scrollBtn.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
});
function showOrHide() {
    if (sidebar.classList.contains("hide")) {
        sidebar.setAttribute("class", "bg-anim-show show");
        sidebarContainer.setAttribute("class", "from-left-anim");
    } else {
        sidebarContainer.setAttribute("class", "from-right-anim");
        sidebar.setAttribute("class", "bg-anim-hide");
        setTimeout(()=>sidebar.classList.add("hide"), 450);
    }
}
function changeTheme(theme) {
    switch(theme){
        case "dark":
            storage.setItem("abc_theme", "dark");
            document.body.setAttribute("data-theme", "dark");
            toggleCircle.setAttribute("class", "dark-theme-toggle");
            break;
        default:
            storage.setItem("abc_theme", "light");
            document.body.setAttribute("data-theme", "light");
            toggleCircle.setAttribute("class", "light-theme-toggle");
            break;
    }
}
function handleTranslation(data) {
    document.querySelectorAll("[data-translate]").forEach((element)=>{
        const key = element.getAttribute("data-translate");
        const translation = data[key];
        element.innerHTML = translation;
    });
}
function handleLoading() {
    loader.setAttribute("class", "loading-end");
    loader.setAttribute("class", "loading-end");
    setTimeout(()=>loader.style.display = "none", 1500);
    setTimeout(()=>{
        document.querySelectorAll('[data-loading="true"]').forEach((blockElement)=>{
            blockElement.setAttribute("data-loading", false);
        });
    }, 1000);
}

},{"iconify-icon":"fc7MW"}],"fc7MW":[function(require,module,exports) {
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
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IconifyIconComponent", ()=>IconifyIconComponent);
parcelHelpers.export(exports, "_api", ()=>_api);
parcelHelpers.export(exports, "addAPIProvider", ()=>addAPIProvider);
parcelHelpers.export(exports, "addCollection", ()=>addCollection);
parcelHelpers.export(exports, "addIcon", ()=>addIcon);
parcelHelpers.export(exports, "buildIcon", ()=>buildIcon);
parcelHelpers.export(exports, "calculateSize", ()=>calculateSize);
parcelHelpers.export(exports, "disableCache", ()=>disableCache);
parcelHelpers.export(exports, "enableCache", ()=>enableCache);
parcelHelpers.export(exports, "getIcon", ()=>getIcon);
parcelHelpers.export(exports, "iconExists", ()=>iconExists);
parcelHelpers.export(exports, "listIcons", ()=>listIcons);
parcelHelpers.export(exports, "loadIcon", ()=>loadIcon);
parcelHelpers.export(exports, "loadIcons", ()=>loadIcons);
const defaultIconDimensions = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
});
const defaultIconTransformations = Object.freeze({
    rotate: 0,
    vFlip: false,
    hFlip: false
});
const defaultIconProps = Object.freeze({
    ...defaultIconDimensions,
    ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
    ...defaultIconProps,
    body: "",
    hidden: false
});
const defaultIconSizeCustomisations = Object.freeze({
    width: null,
    height: null
});
const defaultIconCustomisations = Object.freeze({
    ...defaultIconSizeCustomisations,
    ...defaultIconTransformations
});
function rotateFromString(value, defaultValue = 0) {
    const units = value.replace(/^-?[0-9.]*/, "");
    function cleanup(value2) {
        while(value2 < 0)value2 += 4;
        return value2 % 4;
    }
    if (units === "") {
        const num = parseInt(value);
        return isNaN(num) ? 0 : cleanup(num);
    } else if (units !== value) {
        let split = 0;
        switch(units){
            case "%":
                split = 25;
                break;
            case "deg":
                split = 90;
        }
        if (split) {
            let num1 = parseFloat(value.slice(0, value.length - units.length));
            if (isNaN(num1)) return 0;
            num1 = num1 / split;
            return num1 % 1 === 0 ? cleanup(num1) : 0;
        }
    }
    return defaultValue;
}
const separator = /[\s,]+/;
function flipFromString(custom, flip) {
    flip.split(separator).forEach((str)=>{
        const value = str.trim();
        switch(value){
            case "horizontal":
                custom.hFlip = true;
                break;
            case "vertical":
                custom.vFlip = true;
                break;
        }
    });
}
const defaultCustomisations = {
    ...defaultIconCustomisations,
    preserveAspectRatio: ""
};
/**
 * Get customisations
 */ function getCustomisations(node) {
    const customisations = {
        ...defaultCustomisations
    };
    const attr = (key, def)=>node.getAttribute(key) || def;
    // Dimensions
    customisations.width = attr("width", null);
    customisations.height = attr("height", null);
    // Rotation
    customisations.rotate = rotateFromString(attr("rotate", ""));
    // Flip
    flipFromString(customisations, attr("flip", ""));
    // SVG attributes
    customisations.preserveAspectRatio = attr("preserveAspectRatio", attr("preserveaspectratio", ""));
    return customisations;
}
/**
 * Check if customisations have been updated
 */ function haveCustomisationsChanged(value1, value2) {
    for(const key in defaultCustomisations){
        if (value1[key] !== value2[key]) return true;
    }
    return false;
}
const matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const stringToIcon = (value, validate, allowSimpleName, provider = "")=>{
    const colonSeparated = value.split(":");
    if (value.slice(0, 1) === "@") {
        if (colonSeparated.length < 2 || colonSeparated.length > 3) return null;
        provider = colonSeparated.shift().slice(1);
    }
    if (colonSeparated.length > 3 || !colonSeparated.length) return null;
    if (colonSeparated.length > 1) {
        const name2 = colonSeparated.pop();
        const prefix = colonSeparated.pop();
        const result = {
            provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
            prefix,
            name: name2
        };
        return validate && !validateIconName(result) ? null : result;
    }
    const name = colonSeparated[0];
    const dashSeparated = name.split("-");
    if (dashSeparated.length > 1) {
        const result1 = {
            provider,
            prefix: dashSeparated.shift(),
            name: dashSeparated.join("-")
        };
        return validate && !validateIconName(result1) ? null : result1;
    }
    if (allowSimpleName && provider === "") {
        const result2 = {
            provider,
            prefix: "",
            name
        };
        return validate && !validateIconName(result2, allowSimpleName) ? null : result2;
    }
    return null;
};
const validateIconName = (icon, allowSimpleName)=>{
    if (!icon) return false;
    return !!((icon.provider === "" || icon.provider.match(matchIconName)) && (allowSimpleName && icon.prefix === "" || icon.prefix.match(matchIconName)) && icon.name.match(matchIconName));
};
function mergeIconTransformations(obj1, obj2) {
    const result = {};
    if (!obj1.hFlip !== !obj2.hFlip) result.hFlip = true;
    if (!obj1.vFlip !== !obj2.vFlip) result.vFlip = true;
    const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
    if (rotate) result.rotate = rotate;
    return result;
}
function mergeIconData(parent, child) {
    const result = mergeIconTransformations(parent, child);
    for(const key in defaultExtendedIconProps){
        if (key in defaultIconTransformations) {
            if (key in parent && !(key in result)) result[key] = defaultIconTransformations[key];
        } else if (key in child) result[key] = child[key];
        else if (key in parent) result[key] = parent[key];
    }
    return result;
}
function getIconsTree(data, names) {
    const icons = data.icons;
    const aliases = data.aliases || {};
    const resolved = /* @__PURE__ */ Object.create(null);
    function resolve(name) {
        if (icons[name]) return resolved[name] = [];
        if (!(name in resolved)) {
            resolved[name] = null;
            const parent = aliases[name] && aliases[name].parent;
            const value = parent && resolve(parent);
            if (value) resolved[name] = [
                parent
            ].concat(value);
        }
        return resolved[name];
    }
    (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
    return resolved;
}
function internalGetIconData(data, name, tree) {
    const icons = data.icons;
    const aliases = data.aliases || {};
    let currentProps = {};
    function parse(name2) {
        currentProps = mergeIconData(icons[name2] || aliases[name2], currentProps);
    }
    parse(name);
    tree.forEach(parse);
    return mergeIconData(data, currentProps);
}
function parseIconSet(data, callback) {
    const names = [];
    if (typeof data !== "object" || typeof data.icons !== "object") return names;
    if (data.not_found instanceof Array) data.not_found.forEach((name)=>{
        callback(name, null);
        names.push(name);
    });
    const tree = getIconsTree(data);
    for(const name in tree){
        const item = tree[name];
        if (item) {
            callback(name, internalGetIconData(data, name, item));
            names.push(name);
        }
    }
    return names;
}
const optionalPropertyDefaults = {
    provider: "",
    aliases: {},
    not_found: {},
    ...defaultIconDimensions
};
function checkOptionalProps(item, defaults) {
    for(const prop in defaults){
        if (prop in item && typeof item[prop] !== typeof defaults[prop]) return false;
    }
    return true;
}
function quicklyValidateIconSet(obj) {
    if (typeof obj !== "object" || obj === null) return null;
    const data = obj;
    if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") return null;
    if (!checkOptionalProps(obj, optionalPropertyDefaults)) return null;
    const icons = data.icons;
    for(const name in icons){
        const icon = icons[name];
        if (!name.match(matchIconName) || typeof icon.body !== "string" || !checkOptionalProps(icon, defaultExtendedIconProps)) return null;
    }
    const aliases = data.aliases || {};
    for(const name1 in aliases){
        const icon1 = aliases[name1];
        const parent = icon1.parent;
        if (!name1.match(matchIconName) || typeof parent !== "string" || !icons[parent] && !aliases[parent] || !checkOptionalProps(icon1, defaultExtendedIconProps)) return null;
    }
    return data;
}
const dataStorage = /* @__PURE__ */ Object.create(null);
function newStorage(provider, prefix) {
    return {
        provider,
        prefix,
        icons: /* @__PURE__ */ Object.create(null),
        missing: /* @__PURE__ */ new Set()
    };
}
function getStorage(provider, prefix) {
    const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
    return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
function addIconSet(storage, data) {
    if (!quicklyValidateIconSet(data)) return [];
    return parseIconSet(data, (name, icon)=>{
        if (icon) storage.icons[name] = icon;
        else storage.missing.add(name);
    });
}
function addIconToStorage(storage, name, icon) {
    try {
        if (typeof icon.body === "string") {
            storage.icons[name] = {
                ...icon
            };
            return true;
        }
    } catch (err) {}
    return false;
}
function listIcons$1(provider, prefix) {
    let allIcons = [];
    const providers = typeof provider === "string" ? [
        provider
    ] : Object.keys(dataStorage);
    providers.forEach((provider2)=>{
        const prefixes = typeof provider2 === "string" && typeof prefix === "string" ? [
            prefix
        ] : Object.keys(dataStorage[provider2] || {});
        prefixes.forEach((prefix2)=>{
            const storage = getStorage(provider2, prefix2);
            allIcons = allIcons.concat(Object.keys(storage.icons).map((name)=>(provider2 !== "" ? "@" + provider2 + ":" : "") + prefix2 + ":" + name));
        });
    });
    return allIcons;
}
let simpleNames = false;
function allowSimpleNames(allow) {
    if (typeof allow === "boolean") simpleNames = allow;
    return simpleNames;
}
function getIconData(name) {
    const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
    if (icon) {
        const storage = getStorage(icon.provider, icon.prefix);
        const iconName = icon.name;
        return storage.icons[iconName] || (storage.missing.has(iconName) ? null : void 0);
    }
}
function addIcon$1(name, data) {
    const icon = stringToIcon(name, true, simpleNames);
    if (!icon) return false;
    const storage = getStorage(icon.provider, icon.prefix);
    return addIconToStorage(storage, icon.name, data);
}
function addCollection$1(data, provider) {
    if (typeof data !== "object") return false;
    if (typeof provider !== "string") provider = data.provider || "";
    if (simpleNames && !provider && !data.prefix) {
        let added = false;
        if (quicklyValidateIconSet(data)) {
            data.prefix = "";
            parseIconSet(data, (name, icon)=>{
                if (icon && addIcon$1(name, icon)) added = true;
            });
        }
        return added;
    }
    const prefix = data.prefix;
    if (!validateIconName({
        provider,
        prefix,
        name: "a"
    })) return false;
    const storage = getStorage(provider, prefix);
    return !!addIconSet(storage, data);
}
function iconExists$1(name) {
    return !!getIconData(name);
}
function getIcon$1(name) {
    const result = getIconData(name);
    return result ? {
        ...defaultIconProps,
        ...result
    } : null;
}
function sortIcons(icons) {
    const result = {
        loaded: [],
        missing: [],
        pending: []
    };
    const storage = /* @__PURE__ */ Object.create(null);
    icons.sort((a, b)=>{
        if (a.provider !== b.provider) return a.provider.localeCompare(b.provider);
        if (a.prefix !== b.prefix) return a.prefix.localeCompare(b.prefix);
        return a.name.localeCompare(b.name);
    });
    let lastIcon = {
        provider: "",
        prefix: "",
        name: ""
    };
    icons.forEach((icon)=>{
        if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) return;
        lastIcon = icon;
        const provider = icon.provider;
        const prefix = icon.prefix;
        const name = icon.name;
        const providerStorage = storage[provider] || (storage[provider] = /* @__PURE__ */ Object.create(null));
        const localStorage = providerStorage[prefix] || (providerStorage[prefix] = getStorage(provider, prefix));
        let list;
        if (name in localStorage.icons) list = result.loaded;
        else if (prefix === "" || localStorage.missing.has(name)) list = result.missing;
        else list = result.pending;
        const item = {
            provider,
            prefix,
            name
        };
        list.push(item);
    });
    return result;
}
function removeCallback(storages, id) {
    storages.forEach((storage)=>{
        const items = storage.loaderCallbacks;
        if (items) storage.loaderCallbacks = items.filter((row)=>row.id !== id);
    });
}
function updateCallbacks(storage) {
    if (!storage.pendingCallbacksFlag) {
        storage.pendingCallbacksFlag = true;
        setTimeout(()=>{
            storage.pendingCallbacksFlag = false;
            const items = storage.loaderCallbacks ? storage.loaderCallbacks.slice(0) : [];
            if (!items.length) return;
            let hasPending = false;
            const provider = storage.provider;
            const prefix = storage.prefix;
            items.forEach((item)=>{
                const icons = item.icons;
                const oldLength = icons.pending.length;
                icons.pending = icons.pending.filter((icon)=>{
                    if (icon.prefix !== prefix) return true;
                    const name = icon.name;
                    if (storage.icons[name]) icons.loaded.push({
                        provider,
                        prefix,
                        name
                    });
                    else if (storage.missing.has(name)) icons.missing.push({
                        provider,
                        prefix,
                        name
                    });
                    else {
                        hasPending = true;
                        return true;
                    }
                    return false;
                });
                if (icons.pending.length !== oldLength) {
                    if (!hasPending) removeCallback([
                        storage
                    ], item.id);
                    item.callback(icons.loaded.slice(0), icons.missing.slice(0), icons.pending.slice(0), item.abort);
                }
            });
        });
    }
}
let idCounter = 0;
function storeCallback(callback, icons, pendingSources) {
    const id = idCounter++;
    const abort = removeCallback.bind(null, pendingSources, id);
    if (!icons.pending.length) return abort;
    const item = {
        id,
        icons,
        callback,
        abort
    };
    pendingSources.forEach((storage)=>{
        (storage.loaderCallbacks || (storage.loaderCallbacks = [])).push(item);
    });
    return abort;
}
const storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
    storage[provider] = item;
}
function getAPIModule(provider) {
    return storage[provider] || storage[""];
}
function listToIcons(list, validate = true, simpleNames = false) {
    const result = [];
    list.forEach((item)=>{
        const icon = typeof item === "string" ? stringToIcon(item, validate, simpleNames) : item;
        if (icon) result.push(icon);
    });
    return result;
}
// src/config.ts
var defaultConfig = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: false,
    dataAfterTimeout: false
};
// src/query.ts
function sendQuery(config, payload, query, done) {
    const resourcesCount = config.resources.length;
    const startIndex = config.random ? Math.floor(Math.random() * resourcesCount) : config.index;
    let resources;
    if (config.random) {
        let list = config.resources.slice(0);
        resources = [];
        while(list.length > 1){
            const nextIndex = Math.floor(Math.random() * list.length);
            resources.push(list[nextIndex]);
            list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
        }
        resources = resources.concat(list);
    } else resources = config.resources.slice(startIndex).concat(config.resources.slice(0, startIndex));
    const startTime = Date.now();
    let status = "pending";
    let queriesSent = 0;
    let lastError;
    let timer = null;
    let queue = [];
    let doneCallbacks = [];
    if (typeof done === "function") doneCallbacks.push(done);
    function resetTimer() {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }
    function abort() {
        if (status === "pending") status = "aborted";
        resetTimer();
        queue.forEach((item)=>{
            if (item.status === "pending") item.status = "aborted";
        });
        queue = [];
    }
    function subscribe(callback, overwrite) {
        if (overwrite) doneCallbacks = [];
        if (typeof callback === "function") doneCallbacks.push(callback);
    }
    function getQueryStatus() {
        return {
            startTime,
            payload,
            status,
            queriesSent,
            queriesPending: queue.length,
            subscribe,
            abort
        };
    }
    function failQuery() {
        status = "failed";
        doneCallbacks.forEach((callback)=>{
            callback(void 0, lastError);
        });
    }
    function clearQueue() {
        queue.forEach((item)=>{
            if (item.status === "pending") item.status = "aborted";
        });
        queue = [];
    }
    function moduleResponse(item, response, data) {
        const isError = response !== "success";
        queue = queue.filter((queued)=>queued !== item);
        switch(status){
            case "pending":
                break;
            case "failed":
                if (isError || !config.dataAfterTimeout) return;
                break;
            default:
                return;
        }
        if (response === "abort") {
            lastError = data;
            failQuery();
            return;
        }
        if (isError) {
            lastError = data;
            if (!queue.length) {
                if (!resources.length) failQuery();
                else execNext();
            }
            return;
        }
        resetTimer();
        clearQueue();
        if (!config.random) {
            const index = config.resources.indexOf(item.resource);
            if (index !== -1 && index !== config.index) config.index = index;
        }
        status = "completed";
        doneCallbacks.forEach((callback)=>{
            callback(data);
        });
    }
    function execNext() {
        if (status !== "pending") return;
        resetTimer();
        const resource = resources.shift();
        if (resource === void 0) {
            if (queue.length) {
                timer = setTimeout(()=>{
                    resetTimer();
                    if (status === "pending") {
                        clearQueue();
                        failQuery();
                    }
                }, config.timeout);
                return;
            }
            failQuery();
            return;
        }
        const item = {
            status: "pending",
            resource,
            callback: (status2, data)=>{
                moduleResponse(item, status2, data);
            }
        };
        queue.push(item);
        queriesSent++;
        timer = setTimeout(execNext, config.rotate);
        query(resource, payload, item.callback);
    }
    setTimeout(execNext);
    return getQueryStatus;
}
// src/index.ts
function initRedundancy(cfg) {
    const config = {
        ...defaultConfig,
        ...cfg
    };
    let queries = [];
    function cleanup() {
        queries = queries.filter((item)=>item().status === "pending");
    }
    function query(payload, queryCallback, doneCallback) {
        const query2 = sendQuery(config, payload, queryCallback, (data, error)=>{
            cleanup();
            if (doneCallback) doneCallback(data, error);
        });
        queries.push(query2);
        return query2;
    }
    function find(callback) {
        return queries.find((value)=>{
            return callback(value);
        }) || null;
    }
    const instance = {
        query,
        find,
        setIndex: (index)=>{
            config.index = index;
        },
        getIndex: ()=>config.index,
        cleanup
    };
    return instance;
}
function createAPIConfig(source) {
    let resources;
    if (typeof source.resources === "string") resources = [
        source.resources
    ];
    else {
        resources = source.resources;
        if (!(resources instanceof Array) || !resources.length) return null;
    }
    const result = {
        resources,
        path: source.path || "/",
        maxURL: source.maxURL || 500,
        rotate: source.rotate || 750,
        timeout: source.timeout || 5e3,
        random: source.random === true,
        index: source.index || 0,
        dataAfterTimeout: source.dataAfterTimeout !== false
    };
    return result;
}
const configStorage = /* @__PURE__ */ Object.create(null);
const fallBackAPISources = [
    "https://api.simplesvg.com",
    "https://api.unisvg.com"
];
const fallBackAPI = [];
while(fallBackAPISources.length > 0){
    if (fallBackAPISources.length === 1) fallBackAPI.push(fallBackAPISources.shift());
    else if (Math.random() > 0.5) fallBackAPI.push(fallBackAPISources.shift());
    else fallBackAPI.push(fallBackAPISources.pop());
}
configStorage[""] = createAPIConfig({
    resources: [
        "https://api.iconify.design"
    ].concat(fallBackAPI)
});
function addAPIProvider$1(provider, customConfig) {
    const config = createAPIConfig(customConfig);
    if (config === null) return false;
    configStorage[provider] = config;
    return true;
}
function getAPIConfig(provider) {
    return configStorage[provider];
}
function listAPIProviders() {
    return Object.keys(configStorage);
}
function emptyCallback$1() {}
const redundancyCache = /* @__PURE__ */ Object.create(null);
function getRedundancyCache(provider) {
    if (!redundancyCache[provider]) {
        const config = getAPIConfig(provider);
        if (!config) return;
        const redundancy = initRedundancy(config);
        const cachedReundancy = {
            config,
            redundancy
        };
        redundancyCache[provider] = cachedReundancy;
    }
    return redundancyCache[provider];
}
function sendAPIQuery(target, query, callback) {
    let redundancy;
    let send;
    if (typeof target === "string") {
        const api = getAPIModule(target);
        if (!api) {
            callback(void 0, 424);
            return emptyCallback$1;
        }
        send = api.send;
        const cached = getRedundancyCache(target);
        if (cached) redundancy = cached.redundancy;
    } else {
        const config = createAPIConfig(target);
        if (config) {
            redundancy = initRedundancy(config);
            const moduleKey = target.resources ? target.resources[0] : "";
            const api1 = getAPIModule(moduleKey);
            if (api1) send = api1.send;
        }
    }
    if (!redundancy || !send) {
        callback(void 0, 424);
        return emptyCallback$1;
    }
    return redundancy.query(query, send, callback)().abort;
}
const browserCacheVersion = "iconify2";
const browserCachePrefix = "iconify";
const browserCacheCountKey = browserCachePrefix + "-count";
const browserCacheVersionKey = browserCachePrefix + "-version";
const browserStorageHour = 36e5;
const browserStorageCacheExpiration = 168;
function getStoredItem(func, key) {
    try {
        return func.getItem(key);
    } catch (err) {}
}
function setStoredItem(func, key, value) {
    try {
        func.setItem(key, value);
        return true;
    } catch (err) {}
}
function removeStoredItem(func, key) {
    try {
        func.removeItem(key);
    } catch (err) {}
}
function setBrowserStorageItemsCount(storage, value) {
    return setStoredItem(storage, browserCacheCountKey, value.toString());
}
function getBrowserStorageItemsCount(storage) {
    return parseInt(getStoredItem(storage, browserCacheCountKey)) || 0;
}
const browserStorageConfig = {
    local: true,
    session: true
};
const browserStorageEmptyItems = {
    local: /* @__PURE__ */ new Set(),
    session: /* @__PURE__ */ new Set()
};
let browserStorageStatus = false;
function setBrowserStorageStatus(status) {
    browserStorageStatus = status;
}
let _window = typeof window === "undefined" ? {} : window;
function getBrowserStorage(key) {
    const attr = key + "Storage";
    try {
        if (_window && _window[attr] && typeof _window[attr].length === "number") return _window[attr];
    } catch (err) {}
    browserStorageConfig[key] = false;
}
function iterateBrowserStorage(key, callback) {
    const func = getBrowserStorage(key);
    if (!func) return;
    const version = getStoredItem(func, browserCacheVersionKey);
    if (version !== browserCacheVersion) {
        if (version) {
            const total2 = getBrowserStorageItemsCount(func);
            for(let i = 0; i < total2; i++)removeStoredItem(func, browserCachePrefix + i.toString());
        }
        setStoredItem(func, browserCacheVersionKey, browserCacheVersion);
        setBrowserStorageItemsCount(func, 0);
        return;
    }
    const minTime = Math.floor(Date.now() / browserStorageHour) - browserStorageCacheExpiration;
    const parseItem = (index)=>{
        const name = browserCachePrefix + index.toString();
        const item = getStoredItem(func, name);
        if (typeof item !== "string") return;
        try {
            const data = JSON.parse(item);
            if (typeof data === "object" && typeof data.cached === "number" && data.cached > minTime && typeof data.provider === "string" && typeof data.data === "object" && typeof data.data.prefix === "string" && callback(data, index)) return true;
        } catch (err) {}
        removeStoredItem(func, name);
    };
    let total = getBrowserStorageItemsCount(func);
    for(let i1 = total - 1; i1 >= 0; i1--)if (!parseItem(i1)) {
        if (i1 === total - 1) {
            total--;
            setBrowserStorageItemsCount(func, total);
        } else browserStorageEmptyItems[key].add(i1);
    }
}
function initBrowserStorage() {
    if (browserStorageStatus) return;
    setBrowserStorageStatus(true);
    for(const key in browserStorageConfig)iterateBrowserStorage(key, (item)=>{
        const iconSet = item.data;
        const provider = item.provider;
        const prefix = iconSet.prefix;
        const storage = getStorage(provider, prefix);
        if (!addIconSet(storage, iconSet).length) return false;
        const lastModified = iconSet.lastModified || -1;
        storage.lastModifiedCached = storage.lastModifiedCached ? Math.min(storage.lastModifiedCached, lastModified) : lastModified;
        return true;
    });
}
function updateLastModified(storage, lastModified) {
    const lastValue = storage.lastModifiedCached;
    if (lastValue && lastValue >= lastModified) return lastValue === lastModified;
    storage.lastModifiedCached = lastModified;
    if (lastValue) for(const key in browserStorageConfig)iterateBrowserStorage(key, (item)=>{
        const iconSet = item.data;
        return item.provider !== storage.provider || iconSet.prefix !== storage.prefix || iconSet.lastModified === lastModified;
    });
    return true;
}
function storeInBrowserStorage(storage, data) {
    if (!browserStorageStatus) initBrowserStorage();
    function store(key) {
        let func;
        if (!browserStorageConfig[key] || !(func = getBrowserStorage(key))) return;
        const set = browserStorageEmptyItems[key];
        let index;
        if (set.size) set.delete(index = Array.from(set).shift());
        else {
            index = getBrowserStorageItemsCount(func);
            if (!setBrowserStorageItemsCount(func, index + 1)) return;
        }
        const item = {
            cached: Math.floor(Date.now() / browserStorageHour),
            provider: storage.provider,
            data
        };
        return setStoredItem(func, browserCachePrefix + index.toString(), JSON.stringify(item));
    }
    if (data.lastModified && !updateLastModified(storage, data.lastModified)) return;
    if (!Object.keys(data.icons).length) return;
    if (data.not_found) {
        data = Object.assign({}, data);
        delete data.not_found;
    }
    if (!store("local")) store("session");
}
function emptyCallback() {}
function loadedNewIcons(storage) {
    if (!storage.iconsLoaderFlag) {
        storage.iconsLoaderFlag = true;
        setTimeout(()=>{
            storage.iconsLoaderFlag = false;
            updateCallbacks(storage);
        });
    }
}
function loadNewIcons(storage, icons) {
    if (!storage.iconsToLoad) storage.iconsToLoad = icons;
    else storage.iconsToLoad = storage.iconsToLoad.concat(icons).sort();
    if (!storage.iconsQueueFlag) {
        storage.iconsQueueFlag = true;
        setTimeout(()=>{
            storage.iconsQueueFlag = false;
            const { provider , prefix  } = storage;
            const icons2 = storage.iconsToLoad;
            delete storage.iconsToLoad;
            let api;
            if (!icons2 || !(api = getAPIModule(provider))) return;
            const params = api.prepare(provider, prefix, icons2);
            params.forEach((item)=>{
                sendAPIQuery(provider, item, (data, error)=>{
                    if (typeof data !== "object") {
                        if (error !== 404) return;
                        item.icons.forEach((name)=>{
                            storage.missing.add(name);
                        });
                    } else try {
                        const parsed = addIconSet(storage, data);
                        if (!parsed.length) return;
                        const pending = storage.pendingIcons;
                        if (pending) parsed.forEach((name)=>{
                            pending.delete(name);
                        });
                        storeInBrowserStorage(storage, data);
                    } catch (err) {
                        console.error(err);
                    }
                    loadedNewIcons(storage);
                });
            });
        });
    }
}
const loadIcons$1 = (icons, callback)=>{
    const cleanedIcons = listToIcons(icons, true, allowSimpleNames());
    const sortedIcons = sortIcons(cleanedIcons);
    if (!sortedIcons.pending.length) {
        let callCallback = true;
        if (callback) setTimeout(()=>{
            if (callCallback) callback(sortedIcons.loaded, sortedIcons.missing, sortedIcons.pending, emptyCallback);
        });
        return ()=>{
            callCallback = false;
        };
    }
    const newIcons = /* @__PURE__ */ Object.create(null);
    const sources = [];
    let lastProvider, lastPrefix;
    sortedIcons.pending.forEach((icon)=>{
        const { provider , prefix  } = icon;
        if (prefix === lastPrefix && provider === lastProvider) return;
        lastProvider = provider;
        lastPrefix = prefix;
        sources.push(getStorage(provider, prefix));
        const providerNewIcons = newIcons[provider] || (newIcons[provider] = /* @__PURE__ */ Object.create(null));
        if (!providerNewIcons[prefix]) providerNewIcons[prefix] = [];
    });
    sortedIcons.pending.forEach((icon)=>{
        const { provider , prefix , name  } = icon;
        const storage = getStorage(provider, prefix);
        const pendingQueue = storage.pendingIcons || (storage.pendingIcons = /* @__PURE__ */ new Set());
        if (!pendingQueue.has(name)) {
            pendingQueue.add(name);
            newIcons[provider][prefix].push(name);
        }
    });
    sources.forEach((storage)=>{
        const { provider , prefix  } = storage;
        if (newIcons[provider][prefix].length) loadNewIcons(storage, newIcons[provider][prefix]);
    });
    return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
};
const loadIcon$1 = (icon)=>{
    return new Promise((fulfill, reject)=>{
        const iconObj = typeof icon === "string" ? stringToIcon(icon, true) : icon;
        if (!iconObj) {
            reject(icon);
            return;
        }
        loadIcons$1([
            iconObj || icon
        ], (loaded)=>{
            if (loaded.length && iconObj) {
                const data = getIconData(iconObj);
                if (data) {
                    fulfill({
                        ...defaultIconProps,
                        ...data
                    });
                    return;
                }
            }
            reject(icon);
        });
    });
};
/**
 * Test icon string
 */ function testIconObject(value) {
    try {
        const obj = typeof value === "string" ? JSON.parse(value) : value;
        if (typeof obj.body === "string") return {
            ...obj
        };
    } catch (err) {
    //
    }
}
/**
 * Parse icon value, load if needed
 */ function parseIconValue(value, onload) {
    // Check if icon name is valid
    const name = typeof value === "string" ? stringToIcon(value, true, true) : null;
    if (!name) {
        // Test for serialised object
        const data = testIconObject(value);
        return {
            value,
            data
        };
    }
    // Valid icon name: check if data is available
    const data1 = getIconData(name);
    // Icon data exists or icon has no prefix. Do not load icon from API if icon has no prefix
    if (data1 !== void 0 || !name.prefix) return {
        value,
        name,
        data: data1
    };
    // Load icon
    const loading = loadIcons$1([
        name
    ], ()=>onload(value, name, getIconData(name)));
    return {
        value,
        name,
        loading
    };
}
/**
 * Check for inline
 */ function getInline(node) {
    return node.hasAttribute("inline");
}
// Check for Safari
let isBuggedSafari = false;
try {
    isBuggedSafari = navigator.vendor.indexOf("Apple") === 0;
} catch (err) {
//
}
/**
 * Get render mode
 */ function getRenderMode(body, mode) {
    switch(mode){
        // Force mode
        case "svg":
        case "bg":
        case "mask":
            return mode;
    }
    // Check for animation, use 'style' for animated icons, unless browser is Safari
    // (only <a>, which should be ignored or animations start with '<a')
    if (mode !== "style" && (isBuggedSafari || body.indexOf("<a") === -1)) // Render <svg>
    return "svg";
    // Use background or mask
    return body.indexOf("currentColor") === -1 ? "bg" : "mask";
}
const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize$1(size, ratio, precision) {
    if (ratio === 1) return size;
    precision = precision || 100;
    if (typeof size === "number") return Math.ceil(size * ratio * precision) / precision;
    if (typeof size !== "string") return size;
    const oldParts = size.split(unitsSplit);
    if (oldParts === null || !oldParts.length) return size;
    const newParts = [];
    let code = oldParts.shift();
    let isNumber = unitsTest.test(code);
    while(true){
        if (isNumber) {
            const num = parseFloat(code);
            if (isNaN(num)) newParts.push(code);
            else newParts.push(Math.ceil(num * ratio * precision) / precision);
        } else newParts.push(code);
        code = oldParts.shift();
        if (code === void 0) return newParts.join("");
        isNumber = !isNumber;
    }
}
function iconToSVG(icon, customisations) {
    const fullIcon = {
        ...defaultIconProps,
        ...icon
    };
    const fullCustomisations = {
        ...defaultIconCustomisations,
        ...customisations
    };
    const box = {
        left: fullIcon.left,
        top: fullIcon.top,
        width: fullIcon.width,
        height: fullIcon.height
    };
    let body = fullIcon.body;
    [
        fullIcon,
        fullCustomisations
    ].forEach((props)=>{
        const transformations = [];
        const hFlip = props.hFlip;
        const vFlip = props.vFlip;
        let rotation = props.rotate;
        if (hFlip) {
            if (vFlip) rotation += 2;
            else {
                transformations.push("translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")");
                transformations.push("scale(-1 1)");
                box.top = box.left = 0;
            }
        } else if (vFlip) {
            transformations.push("translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")");
            transformations.push("scale(1 -1)");
            box.top = box.left = 0;
        }
        let tempValue;
        if (rotation < 0) rotation -= Math.floor(rotation / 4) * 4;
        rotation = rotation % 4;
        switch(rotation){
            case 1:
                tempValue = box.height / 2 + box.top;
                transformations.unshift("rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")");
                break;
            case 2:
                transformations.unshift("rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")");
                break;
            case 3:
                tempValue = box.width / 2 + box.left;
                transformations.unshift("rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")");
                break;
        }
        if (rotation % 2 === 1) {
            if (box.left !== box.top) {
                tempValue = box.left;
                box.left = box.top;
                box.top = tempValue;
            }
            if (box.width !== box.height) {
                tempValue = box.width;
                box.width = box.height;
                box.height = tempValue;
            }
        }
        if (transformations.length) body = '<g transform="' + transformations.join(" ") + '">' + body + "</g>";
    });
    const customisationsWidth = fullCustomisations.width;
    const customisationsHeight = fullCustomisations.height;
    const boxWidth = box.width;
    const boxHeight = box.height;
    let width;
    let height;
    if (customisationsWidth === null) {
        height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
        width = calculateSize$1(height, boxWidth / boxHeight);
    } else {
        width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
        height = customisationsHeight === null ? calculateSize$1(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    }
    const result = {
        attributes: {
            width: width.toString(),
            height: height.toString(),
            viewBox: box.left.toString() + " " + box.top.toString() + " " + boxWidth.toString() + " " + boxHeight.toString()
        },
        body
    };
    return result;
}
const detectFetch = ()=>{
    let callback;
    try {
        callback = fetch;
        if (typeof callback === "function") return callback;
    } catch (err) {}
};
let fetchModule = detectFetch();
function setFetch(fetch2) {
    fetchModule = fetch2;
}
function getFetch() {
    return fetchModule;
}
function calculateMaxLength(provider, prefix) {
    const config = getAPIConfig(provider);
    if (!config) return 0;
    let result;
    if (!config.maxURL) result = 0;
    else {
        let maxHostLength = 0;
        config.resources.forEach((item)=>{
            const host = item;
            maxHostLength = Math.max(maxHostLength, host.length);
        });
        const url = prefix + ".json?icons=";
        result = config.maxURL - maxHostLength - config.path.length - url.length;
    }
    return result;
}
function shouldAbort(status) {
    return status === 404;
}
const prepare = (provider, prefix, icons)=>{
    const results = [];
    const maxLength = calculateMaxLength(provider, prefix);
    const type = "icons";
    let item = {
        type,
        provider,
        prefix,
        icons: []
    };
    let length = 0;
    icons.forEach((name, index)=>{
        length += name.length + 1;
        if (length >= maxLength && index > 0) {
            results.push(item);
            item = {
                type,
                provider,
                prefix,
                icons: []
            };
            length = name.length;
        }
        item.icons.push(name);
    });
    results.push(item);
    return results;
};
function getPath(provider) {
    if (typeof provider === "string") {
        const config = getAPIConfig(provider);
        if (config) return config.path;
    }
    return "/";
}
const send = (host, params, callback)=>{
    if (!fetchModule) {
        callback("abort", 424);
        return;
    }
    let path = getPath(params.provider);
    switch(params.type){
        case "icons":
            {
                const prefix = params.prefix;
                const icons = params.icons;
                const iconsList = icons.join(",");
                const urlParams = new URLSearchParams({
                    icons: iconsList
                });
                path += prefix + ".json?" + urlParams.toString();
                break;
            }
        case "custom":
            {
                const uri = params.uri;
                path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
                break;
            }
        default:
            callback("abort", 400);
            return;
    }
    let defaultError = 503;
    fetchModule(host + path).then((response)=>{
        const status = response.status;
        if (status !== 200) {
            setTimeout(()=>{
                callback(shouldAbort(status) ? "abort" : "next", status);
            });
            return;
        }
        defaultError = 501;
        return response.json();
    }).then((data)=>{
        if (typeof data !== "object" || data === null) {
            setTimeout(()=>{
                callback("next", defaultError);
            });
            return;
        }
        setTimeout(()=>{
            callback("success", data);
        });
    }).catch(()=>{
        callback("next", defaultError);
    });
};
const fetchAPIModule = {
    prepare,
    send
};
function toggleBrowserCache(storage, value) {
    switch(storage){
        case "local":
        case "session":
            browserStorageConfig[storage] = value;
            break;
        case "all":
            for(const key in browserStorageConfig)browserStorageConfig[key] = value;
            break;
    }
}
// Core
/**
 * Get functions and initialise stuff
 */ function exportFunctions() {
    /**
     * Initialise stuff
     */ // Set API module
    setAPIModule("", fetchAPIModule);
    // Allow simple icon names
    allowSimpleNames(true);
    let _window;
    try {
        _window = window;
    } catch (err) {
    //
    }
    if (_window) {
        // Set cache and load existing cache
        initBrowserStorage();
        // Load icons from global "IconifyPreload"
        if (_window.IconifyPreload !== void 0) {
            const preload = _window.IconifyPreload;
            const err1 = "Invalid IconifyPreload syntax.";
            if (typeof preload === "object" && preload !== null) (preload instanceof Array ? preload : [
                preload
            ]).forEach((item)=>{
                try {
                    if (// Check if item is an object and not null/array
                    typeof item !== "object" || item === null || item instanceof Array || // Check for 'icons' and 'prefix'
                    typeof item.icons !== "object" || typeof item.prefix !== "string" || // Add icon set
                    !addCollection$1(item)) console.error(err1);
                } catch (e) {
                    console.error(err1);
                }
            });
        }
        // Set API from global "IconifyProviders"
        if (_window.IconifyProviders !== void 0) {
            const providers = _window.IconifyProviders;
            if (typeof providers === "object" && providers !== null) for(const key in providers){
                const err2 = "IconifyProviders[" + key + "] is invalid.";
                try {
                    const value = providers[key];
                    if (typeof value !== "object" || !value || value.resources === void 0) continue;
                    if (!addAPIProvider$1(key, value)) console.error(err2);
                } catch (e) {
                    console.error(err2);
                }
            }
        }
    }
    const _api = {
        getAPIConfig,
        setAPIModule,
        sendAPIQuery,
        setFetch,
        getFetch,
        listAPIProviders
    };
    return {
        enableCache: (storage)=>toggleBrowserCache(storage, true),
        disableCache: (storage)=>toggleBrowserCache(storage, false),
        iconExists: iconExists$1,
        getIcon: getIcon$1,
        listIcons: listIcons$1,
        addIcon: addIcon$1,
        addCollection: addCollection$1,
        calculateSize: calculateSize$1,
        buildIcon: iconToSVG,
        loadIcons: loadIcons$1,
        loadIcon: loadIcon$1,
        addAPIProvider: addAPIProvider$1,
        _api
    };
}
function iconToHTML(body, attributes) {
    let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for(const attr in attributes)renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}
function encodeSVGforURL(svg) {
    return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToURL(svg) {
    return 'url("data:image/svg+xml,' + encodeSVGforURL(svg) + '")';
}
// List of properties to apply
const monotoneProps = {
    "background-color": "currentColor"
};
const coloredProps = {
    "background-color": "transparent"
};
// Dynamically add common props to variables above
const propsToAdd = {
    image: "var(--svg)",
    repeat: "no-repeat",
    size: "100% 100%"
};
const propsToAddTo = {
    "-webkit-mask": monotoneProps,
    "mask": monotoneProps,
    "background": coloredProps
};
for(const prefix in propsToAddTo){
    const list = propsToAddTo[prefix];
    for(const prop in propsToAdd)list[prefix + "-" + prop] = propsToAdd[prop];
}
/**
 * Fix size: add 'px' to numbers
 */ function fixSize(value) {
    return value + (value.match(/^[-0-9.]+$/) ? "px" : "");
}
/**
 * Render node as <span>
 */ function renderSPAN(data, icon, useMask) {
    const node = document.createElement("span");
    // Body
    let body = data.body;
    if (body.indexOf("<a") !== -1) // Animated SVG: add something to fix timing bug
    body += "<!-- " + Date.now() + " -->";
    // Generate SVG as URL
    const renderAttribs = data.attributes;
    const html = iconToHTML(body, {
        ...renderAttribs,
        width: icon.width + "",
        height: icon.height + ""
    });
    const url = svgToURL(html);
    // Generate style
    const svgStyle = node.style;
    const styles = {
        "--svg": url,
        "width": fixSize(renderAttribs.width),
        "height": fixSize(renderAttribs.height),
        ...useMask ? monotoneProps : coloredProps
    };
    // Apply style
    for(const prop in styles)svgStyle.setProperty(prop, styles[prop]);
    return node;
}
/**
 * Render node as <svg>
 */ function renderSVG(data) {
    const node = document.createElement("span");
    // Generate SVG
    node.innerHTML = iconToHTML(data.body, data.attributes);
    return node.firstChild;
}
/**
 * Render icon
 */ function renderIcon(parent, state) {
    const iconData = state.icon.data;
    const customisations = state.customisations;
    // Render icon
    const renderData = iconToSVG(iconData, customisations);
    if (customisations.preserveAspectRatio) renderData.attributes["preserveAspectRatio"] = customisations.preserveAspectRatio;
    const mode = state.renderedMode;
    let node;
    switch(mode){
        case "svg":
            node = renderSVG(renderData);
            break;
        default:
            node = renderSPAN(renderData, {
                ...defaultIconProps,
                ...iconData
            }, mode === "mask");
    }
    // Set element
    const oldNode = Array.from(parent.childNodes).find((node)=>{
        const tag = node.tagName && node.tagName.toUpperCase();
        return tag === "SPAN" || tag === "SVG";
    });
    if (oldNode) {
        // Replace old element
        if (node.tagName === "SPAN" && oldNode.tagName === node.tagName) // Swap style instead of whole node
        oldNode.setAttribute("style", node.getAttribute("style"));
        else parent.replaceChild(node, oldNode);
    } else // Add new element
    parent.appendChild(node);
}
/**
 * Attribute to add
 */ const nodeAttr = "data-style";
/**
 * Add/update style node
 */ function updateStyle(parent, inline) {
    // Get node, create if needed
    let styleNode = Array.from(parent.childNodes).find((node)=>node.hasAttribute && node.hasAttribute(nodeAttr));
    if (!styleNode) {
        styleNode = document.createElement("style");
        styleNode.setAttribute(nodeAttr, nodeAttr);
        parent.appendChild(styleNode);
    }
    // Update content
    styleNode.textContent = ":host{display:inline-block;vertical-align:" + (inline ? "-0.125em" : "0") + "}span,svg{display:block}";
}
/**
 * Set state to PendingState
 */ function setPendingState(icon, inline, lastState) {
    const lastRender = lastState && (lastState.rendered ? lastState : lastState.lastRender);
    return {
        rendered: false,
        inline,
        icon,
        lastRender
    };
}
/**
 * Register 'iconify-icon' component, if it does not exist
 */ function defineIconifyIcon(name = "iconify-icon") {
    // Check for custom elements registry and HTMLElement
    let customElements;
    let ParentClass;
    try {
        customElements = window.customElements;
        ParentClass = window.HTMLElement;
    } catch (err) {
        return;
    }
    // Make sure registry and HTMLElement exist
    if (!customElements || !ParentClass) return;
    // Check for duplicate
    const ConflictingClass = customElements.get(name);
    if (ConflictingClass) return ConflictingClass;
    // All attributes
    const attributes = [
        // Icon
        "icon",
        // Mode
        "mode",
        "inline",
        // Customisations
        "width",
        "height",
        "rotate",
        "flip"
    ];
    /**
     * Component class
     */ const IconifyIcon = class extends ParentClass {
        // Root
        _shadowRoot;
        // State
        _state;
        // Attributes check queued
        _checkQueued = false;
        /**
         * Constructor
         */ constructor(){
            super();
            // Attach shadow DOM
            const root = this._shadowRoot = this.attachShadow({
                mode: "open"
            });
            // Add style
            const inline = getInline(this);
            updateStyle(root, inline);
            // Create empty state
            this._state = setPendingState({
                value: ""
            }, inline);
            // Queue icon render
            this._queueCheck();
        }
        /**
         * Observed attributes
         */ static get observedAttributes() {
            return attributes.slice(0);
        }
        /**
         * Observed properties that are different from attributes
         *
         * Experimental! Need to test with various frameworks that support it
         */ /*
        static get properties() {
            return {
                inline: {
                    type: Boolean,
                    reflect: true,
                },
                // Not listing other attributes because they are strings or combination
                // of string and another type. Cannot have multiple types
            };
        }
        */ /**
         * Attribute has changed
         */ attributeChangedCallback(name) {
            if (name === "inline") {
                // Update immediately: not affected by other attributes
                const newInline = getInline(this);
                const state = this._state;
                if (newInline !== state.inline) {
                    // Update style if inline mode changed
                    state.inline = newInline;
                    updateStyle(this._shadowRoot, newInline);
                }
            } else // Queue check for other attributes
            this._queueCheck();
        }
        /**
         * Get/set icon
         */ get icon() {
            const value = this.getAttribute("icon");
            if (value && value.slice(0, 1) === "{") try {
                return JSON.parse(value);
            } catch (err) {
            //
            }
            return value;
        }
        set icon(value) {
            if (typeof value === "object") value = JSON.stringify(value);
            this.setAttribute("icon", value);
        }
        /**
         * Get/set inline
         */ get inline() {
            return getInline(this);
        }
        set inline(value) {
            this.setAttribute("inline", value ? "true" : null);
        }
        /**
         * Restart animation
         */ restartAnimation() {
            const state = this._state;
            if (state.rendered) {
                const root = this._shadowRoot;
                if (state.renderedMode === "svg") // Update root node
                try {
                    root.lastChild.setCurrentTime(0);
                    return;
                } catch (err) {
                // Failed: setCurrentTime() is not supported
                }
                renderIcon(root, state);
            }
        }
        /**
         * Get status
         */ get status() {
            const state = this._state;
            return state.rendered ? "rendered" : state.icon.data === null ? "failed" : "loading";
        }
        /**
         * Queue attributes re-check
         */ _queueCheck() {
            if (!this._checkQueued) {
                this._checkQueued = true;
                setTimeout(()=>{
                    this._check();
                });
            }
        }
        /**
         * Check for changes
         */ _check() {
            if (!this._checkQueued) return;
            this._checkQueued = false;
            const state = this._state;
            // Get icon
            const newIcon = this.getAttribute("icon");
            if (newIcon !== state.icon.value) {
                this._iconChanged(newIcon);
                return;
            }
            // Ignore other attributes if icon is not rendered
            if (!state.rendered) return;
            // Check for mode and attribute changes
            const mode = this.getAttribute("mode");
            const customisations = getCustomisations(this);
            if (state.attrMode !== mode || haveCustomisationsChanged(state.customisations, customisations)) this._renderIcon(state.icon, customisations, mode);
        }
        /**
         * Icon value has changed
         */ _iconChanged(newValue) {
            const icon = parseIconValue(newValue, (value, name, data)=>{
                // Asynchronous callback: re-check values to make sure stuff wasn't changed
                const state = this._state;
                if (state.rendered || this.getAttribute("icon") !== value) // Icon data is already available or icon attribute was changed
                return;
                // Change icon
                const icon = {
                    value,
                    name,
                    data
                };
                if (icon.data) // Render icon
                this._gotIconData(icon);
                else // Nothing to render: update icon in state
                state.icon = icon;
            });
            if (icon.data) // Icon is ready to render
            this._gotIconData(icon);
            else // Pending icon
            this._state = setPendingState(icon, this._state.inline, this._state);
        }
        /**
         * Got new icon data, icon is ready to (re)render
         */ _gotIconData(icon) {
            this._checkQueued = false;
            this._renderIcon(icon, getCustomisations(this), this.getAttribute("mode"));
        }
        /**
         * Re-render based on icon data
         */ _renderIcon(icon, customisations, attrMode) {
            // Get mode
            const renderedMode = getRenderMode(icon.data.body, attrMode);
            // Inline was not changed
            const inline = this._state.inline;
            // Set state and render
            renderIcon(this._shadowRoot, this._state = {
                rendered: true,
                icon,
                inline,
                customisations,
                attrMode,
                renderedMode
            });
        }
    };
    // Add getters and setters
    attributes.forEach((attr)=>{
        if (!(attr in IconifyIcon.prototype)) Object.defineProperty(IconifyIcon.prototype, attr, {
            get: function() {
                return this.getAttribute(attr);
            },
            set: function(value) {
                this.setAttribute(attr, value);
            }
        });
    });
    // Add exported functions: both as static and instance methods
    const functions = exportFunctions();
    for(const key in functions)IconifyIcon[key] = IconifyIcon.prototype[key] = functions[key];
    // Define new component
    customElements.define(name, IconifyIcon);
    return IconifyIcon;
}
/**
 * Create exported data: either component instance or functions
 */ const IconifyIconComponent = defineIconifyIcon() || exportFunctions();
/**
 * Export functions
 */ const { enableCache , disableCache , iconExists , getIcon , listIcons , addIcon , addCollection , calculateSize , buildIcon , loadIcons , loadIcon , addAPIProvider , _api  } = IconifyIconComponent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["8TtF2","gLLPy"], "gLLPy", "parcelRequire2041")

//# sourceMappingURL=index.4d6bcbeb.js.map
