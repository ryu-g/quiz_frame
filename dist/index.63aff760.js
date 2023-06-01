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
})({"9ZIyz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "26170a8763aff760";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
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
        assetsToAccept = [];
        assetsToDispose = [];
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
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"adjPd":[function(require,module,exports) {
var _mainSass = require("./main.sass");
var _fs = require("fs");
const utils = require("5509e8434889cac5");
//選択肢へのクリックイベント追加用
const addJudgeEvent = (list, collectnum)=>{
    const n = Number(collectnum);
    for(let i = 0; i < list.length; i++){
        console.log(`i: ${i}`);
        console.log(`n: ${n}`);
        if (i == n) list[i].addEventListener("click", ()=>{
            console.log("正解!");
            view_quizDescription.classList = "description_display";
            reflesh_correctTimes();
            utils.makeDisabelAllChoiceButton(button_list);
        });
        else list[i].addEventListener("click", ()=>{
            console.log("ざんねん");
            view_quizDescription.classList = "description_display";
            reflesh_incorrectTimes();
            utils.makeDisabelAllChoiceButton(button_list);
        });
        console.log(button_list);
    }
};
const SRC_FILE = '[\n  {\n    "id": "000",\n    "lesson": 0,\n    "quizText": "鮮やかな赤･オレンジ･黄のように、注意を引き、目立つ色のことを????が高い色という",\n    "quizChoices": [\n      "誘目性",\n      "視認性",\n      "識別性",\n      "警告性"\n    ],\n    "correctChoice": 1,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "001",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "1 a",\n      "1 b",\n      "1 c",\n      "1 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "002",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "2 a",\n      "2 b",\n      "2 c",\n      "2 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "003",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "3 a",\n      "3 b",\n      "3 c",\n      "3 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "004",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "4 a",\n      "4 b",\n      "4 c",\n      "4 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "005",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "5 a",\n      "5 b",\n      "5 c",\n      "5 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "006",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "6 a",\n      "6 b",\n      "6 c",\n      "6 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "007",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "7 a",\n      "7 b",\n      "7 c",\n      "7 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "008",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "8 a",\n      "8 b",\n      "8 c",\n      "8 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "009",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "9 a",\n      "9 b",\n      "9 c",\n      "9 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "010",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "10 a",\n      "10 b",\n      "10 c",\n      "10 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "011",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "11 a",\n      "11 b",\n      "11 c",\n      "11 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "012",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "12 a",\n      "12 b",\n      "12 c",\n      "12 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "013",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "13 a",\n      "13 b",\n      "13 c",\n      "13 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "014",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "14 a",\n      "14 b",\n      "14 c",\n      "14 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "015",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "15 a",\n      "15 b",\n      "15 c",\n      "15 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "016",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "16 a",\n      "16 b",\n      "16 c",\n      "16 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "017",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "17 a",\n      "17 b",\n      "17 c",\n      "17 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "018",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "18 a",\n      "18 b",\n      "18 c",\n      "18 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "019",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "19 a",\n      "19 b",\n      "19 c",\n      "19 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  },\n  {\n    "id": "020",\n    "lesson": "lesson_name",\n    "quizText": "aaaaaa",\n    "quizChoices": [\n      "20 a",\n      "20 b",\n      "20 c",\n      "20 d:hogehoge"\n    ],\n    "correctChoice": 3,\n    "quizDescription": "クイズの答えが表示される場所です。最初はJSで非表示にして、｢回答する｣ぼたんをクリックしたあとに表示します。"\n  }\n]';
const data = JSON.parse(SRC_FILE);
const questionNumbers = utils.generateNumberList(data);
const shuffledList = utils.shuffle(questionNumbers);
// const event_answer = new Event('answer')
const view_quizID = document.getElementById("quizID");
const view_genre = document.getElementById("quizGenre");
const view_quizText = document.getElementById("quizText");
const view_quizChoices = document.getElementById("quizChoices");
const choices_0 = document.getElementById("choice_0");
const choices_1 = document.getElementById("choice_1");
const choices_2 = document.getElementById("choice_2");
const choices_3 = document.getElementById("choice_3");
const view_quizDescription = document.getElementById("quizDescription");
const view_correnctTimes = document.getElementById("correnctTimes");
const view_incorrenctTimes = document.getElementById("incorrenctTimes");
let choiceButtons = [
    choices_0,
    choices_1,
    choices_2,
    choices_3
];
let button_list = [
    choices_0,
    choices_1,
    choices_2,
    choices_3
];
let quizID = 0;
let quizData_id = data[quizID].id;
let quizData_genre = data[quizID].lesson;
let quizData_correctChoice = data[quizID].correctChoice - 1;
let quizData_choices = data[quizID].quizChoices;
let quizData_quizDescription = data[quizID].quizDescription;
let quizData_quizText = data[quizID].quizText;
let quizData_correctTimes = 0;
const reflesh_quiz = ()=>{
    quizID = 0;
    quizData_id = data[quizID].id;
    quizData_genre = data[quizID].genre;
    quizData_correctChoice = data[quizID].correctChoice - 1;
    quizData_choices = data[quizID].quizChoices;
    quizData_quizDescription = data[quizID].quizDescription;
    quizData_quizText = data[quizID].quizText;
    view_quizID.innerText = `id ${quizData_id}`;
    view_genre.innerText = `Genre quizData_genre`;
    view_quizText.innerText = quizData_quizText;
    choices_0.innerText = quizData_choices[0];
    choices_1.innerText = quizData_choices[1];
    choices_2.innerText = quizData_choices[2];
    choices_3.innerText = quizData_choices[3];
    view_quizDescription.innerText = quizData_quizDescription;
    choiceButtons = [
        choices_0,
        choices_1,
        choices_2,
        choices_3
    ];
    utils.makeAbelAllChoiceButton(choiceButtons);
    view_quizDescription.classList = "description_hidden";
};
const reflesh_correctTimes = ()=>{
    view_correnctTimes.innerText = `正解数 : ${++quizData_correctTimes}`;
    console.log("正解数を増やします");
};
let quizData_incorrectTimes = 0;
const reflesh_incorrectTimes = ()=>{
    view_incorrenctTimes.innerText = `不正解数 : ${++quizData_incorrectTimes}`;
};
const promise = new Promise((resolve, reject)=>{
    const list = [
        choices_0,
        choices_1,
        choices_2,
        choices_3
    ];
    resolve(list);
});
promise.then((resolve)=>{
    addJudgeEvent(resolve, quizData_correctChoice);
});
// quiz reflesh function next quiz button attachment
const nextQuizButton = document.getElementById("nextQuiz");
nextQuizButton.addEventListener("click", ()=>{
    reflesh_quiz();
    console.log(`quiz id is ${quizID}`);
    console.log("cliced reflesh button");
});
reflesh_quiz();

},{"./main.sass":"byLvE","fs":"jhUEF","5509e8434889cac5":"bIDtH"}],"byLvE":[function() {},{}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"bIDtH":[function(require,module,exports) {
//全列挙用関数 ex clog( listAllProperties(obj) )
exports.listAllProperties = (obj)=>{
    let props = [];
    if (obj === null || obj === undefined) return props;
    Object.getOwnPropertyNames(obj).forEach(function(prop) {
        if (typeof obj[prop] === "object") props = props.concat(listAllProperties(obj[prop]));
        else props.push(prop);
    });
    return props;
};
//番号生成
exports.generateNumberList = (item)=>{
    const type = typeof item;
    if (type === "object") return [
        ...Array(Object.keys(item).length).keys()
    ];
    else if (item.isArray()) return [
        ...Array(item.length).keys()
    ];
};
//番号ランダマイズ用
exports.shuffle = (list)=>{
    for(i = list.length - 1; i > 0; i--){
        j = Math.floor(Math.random() * (i + 1));
        [list[i], list[j]] = [
            list[j],
            list[i]
        ];
    }
    return list;
};
//すべてのボタンをdisableにする
exports.makeDisabelAllChoiceButton = (button_list)=>{
    button_list.forEach((button)=>{
        console.log(`button_list is ${button.disabled}`);
        button.setAttribute("disabled", true);
    });
};
//すべてのボタンをableにする
exports.makeAbelAllChoiceButton = (button_list)=>{
    button_list.forEach((button)=>{
        console.log(`button_list is ${button}`);
        if (button.disabled === true) button.removeAttribute("disabled");
    });
};

},{}]},["9ZIyz","adjPd"], "adjPd", "parcelRequire34fb")

//# sourceMappingURL=index.63aff760.js.map
