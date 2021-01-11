// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/bigGrid.js":[function(require,module,exports) {
var checkDate = new Date().toLocaleDateString(undefined, {
  weekday: "short",
  day: "2-digit",
  month: "2-digit"
});

window.showPopup = function showPopup(clicked_id) {
  var popup = document.querySelector(".popup");
  var blocker = document.querySelector(".blocker");
  var chanPop = clicked_id.replace("btn", "popup");
  var noScroll = document.getElementsByTagName("body")[0];
  noScroll.classList.add("noScroll");
  blocker.classList.add("open");
  popup.classList.add("open");
  document.getElementById("".concat(chanPop)).style.display = "grid";

  if (chanPop === "disc--popup") {
    document.getElementById("big--wrap--title").innerHTML = "Discovery Channel"; // document.getElementById(`big--disc--${checkDate}--07:00 PM`).scrollIntoView();

    var bigprimetime = document.getElementById("big--disc--".concat(checkDate, "--07:00 PM"));
    var bigTopPos = bigprimetime.offsetTop;
    document.getElementById("disc--popup").scrollTop = bigTopPos + 46;
  } else if (chanPop === "ahc--popup") {
    document.getElementById("big--wrap--title").innerHTML = "American Heroes"; // document.getElementById(`big--ahc--${checkDate}--07:00 PM`).scrollIntoView();

    var _bigprimetime = document.getElementById("big--ahc--".concat(checkDate, "--07:00 PM"));

    var _bigTopPos = _bigprimetime.offsetTop;
    document.getElementById("ahc--popup").scrollTop = _bigTopPos + 46;
  } else if (chanPop === "apl--popup") {
    document.getElementById("big--wrap--title").innerHTML = "Animal Planet"; // document.getElementById(`big--apl--${checkDate}--07:00 PM`).scrollIntoView();

    var _bigprimetime2 = document.getElementById("big--apl--".concat(checkDate, "--07:00 PM"));

    var _bigTopPos2 = _bigprimetime2.offsetTop;
    document.getElementById("apl--popup").scrollTop = _bigTopPos2 + 46;
  } else if (chanPop === "dam--popup") {
    document.getElementById("big--wrap--title").innerHTML = "Destination America"; // document.getElementById(`big--dam--${checkDate}--07:00 PM`).scrollIntoView();

    var _bigprimetime3 = document.getElementById("big--dam--".concat(checkDate, "--07:00 PM"));

    var _bigTopPos3 = _bigprimetime3.offsetTop;
    document.getElementById("dam--popup").scrollTop = _bigTopPos3 + 46;
  } else if (chanPop === "dfc--popup") {
    document.getElementById("big--wrap--title").innerHTML = "Discovery Family"; // document.getElementById(`big--dfc--${checkDate}--07:00 PM`).scrollIntoView();

    var _bigprimetime4 = document.getElementById("big--dfc--".concat(checkDate, "--07:00 PM"));

    var _bigTopPos4 = _bigprimetime4.offsetTop;
    document.getElementById("dfc--popup").scrollTop = _bigTopPos4 + 46;
  } else if (chanPop === "idd--popup") {
    document.getElementById("big--wrap--title").innerHTML = "Investigation Discovery"; // document.getElementById(`big--idd--${checkDate}--07:00 PM`).scrollIntoView();

    var _bigprimetime5 = document.getElementById("big--idd--".concat(checkDate, "--07:00 PM"));

    var _bigTopPos5 = _bigprimetime5.offsetTop;
    document.getElementById("idd--popup").scrollTop = _bigTopPos5 + 46;
  } else if (chanPop === "mtd--popup") {
    document.getElementById("big--wrap--title").innerHTML = "MotorTrend"; // document.getElementById(`big--mtd--${checkDate}--07:00 PM`).scrollIntoView();

    var _bigprimetime6 = document.getElementById("big--mtd--".concat(checkDate, "--07:00 PM"));

    var _bigTopPos6 = _bigprimetime6.offsetTop;
    document.getElementById("mtd--popup").scrollTop = _bigTopPos6 + 46;
  } else if (chanPop === "own--popup") {
    document.getElementById("big--wrap--title").innerHTML = "OWN"; // document.getElementById(`big--own--${checkDate}--07:00 PM`).scrollIntoView();

    var _bigprimetime7 = document.getElementById("big--own--".concat(checkDate, "--07:00 PM"));

    var _bigTopPos7 = _bigprimetime7.offsetTop;
    document.getElementById("own--popup").scrollTop = _bigTopPos7 + 46;
  } else if (chanPop === "tlc--popup") {
    document.getElementById("big--wrap--title").innerHTML = "TLC"; // document.getElementById(`big--tlc--${checkDate}--07:00 PM`).scrollIntoView();

    var _bigprimetime8 = document.getElementById("big--tlc--".concat(checkDate, "--07:00 PM"));

    var _bigTopPos8 = _bigprimetime8.offsetTop;
    document.getElementById("tlc--popup").scrollTop = _bigTopPos8 + 46;
  } else if (chanPop === "des--popup") {
    document.getElementById("big--wrap--title").innerHTML = "Discovery Espanol"; // document.getElementById(`big--des--${checkDate}--07:00 PM`).scrollIntoView();

    var _bigprimetime9 = document.getElementById("big--des--".concat(checkDate, "--07:00 PM"));

    var _bigTopPos9 = _bigprimetime9.offsetTop;
    document.getElementById("des--popup").scrollTop = _bigTopPos9 + 46;
  } else if (chanPop === "dsf--popup") {
    document.getElementById("big--wrap--title").innerHTML = "Discovery Familia"; // document.getElementById(`big--dsf--${checkDate}--07:00 PM`).scrollIntoView();

    var _bigprimetime10 = document.getElementById("big--dsf--".concat(checkDate, "--07:00 PM"));

    var _bigTopPos10 = _bigprimetime10.offsetTop;
    document.getElementById("dsf--popup").scrollTop = _bigTopPos10 + 46;
  } else if (chanPop === "hgtv--popup") {
    document.getElementById("big--wrap--title").innerHTML = "HGTV"; // document.getElementById(`big--hgtv--${checkDate}--07:00 PM`).scrollIntoView();

    var _bigprimetime11 = document.getElementById("big--hgtv--".concat(checkDate, "--07:00 PM"));

    var _bigTopPos11 = _bigprimetime11.offsetTop;
    document.getElementById("hgtv--popup").scrollTop = _bigTopPos11 + 46;
  } else if (chanPop === "cook--popup") {
    document.getElementById("big--wrap--title").innerHTML = "Cooking Channel"; // document.getElementById(`big--cook--${checkDate}--07:00 PM`).scrollIntoView();

    var _bigprimetime12 = document.getElementById("big--cook--".concat(checkDate, "--07:00 PM"));

    var _bigTopPos12 = _bigprimetime12.offsetTop;
    document.getElementById("cook--popup").scrollTop = _bigTopPos12 + 46;
  } else if (chanPop === "diy--popup") {
    document.getElementById("big--wrap--title").innerHTML = "DIY Network"; // document.getElementById(`big--diy--${checkDate}--07:00 PM`).scrollIntoView();

    var _bigprimetime13 = document.getElementById("big--diy--".concat(checkDate, "--07:00 PM"));

    var _bigTopPos13 = _bigprimetime13.offsetTop;
    document.getElementById("diy--popup").scrollTop = _bigTopPos13 + 46;
  } else if (chanPop === "food--popup") {
    document.getElementById("big--wrap--title").innerHTML = "Food Network"; // document.getElementById(`big--food--${checkDate}--07:00 PM`).scrollIntoView();

    var _bigprimetime14 = document.getElementById("big--food--".concat(checkDate, "--07:00 PM"));

    var _bigTopPos14 = _bigprimetime14.offsetTop;
    document.getElementById("food--popup").scrollTop = _bigTopPos14 + 46;
  } else if (chanPop === "trav--popup") {
    document.getElementById("big--wrap--title").innerHTML = "Travel Channel"; // document.getElementById(`big--trav--${checkDate}--07:00 PM`).scrollIntoView();

    var _bigprimetime15 = document.getElementById("big--trav--".concat(checkDate, "--07:00 PM"));

    var _bigTopPos15 = _bigprimetime15.offsetTop;
    document.getElementById("trav--popup").scrollTop = _bigTopPos15 + 46;
  } else {
    document.getElementById("big--wrap--title").innerHTML = "";
  }
};

window.hidePopup = function hidePopup() {
  var popup = document.querySelector(".popup");
  popup.classList.remove("open");
  var blocker = document.querySelector(".blocker");
  blocker.classList.remove("open");
  var noScroll = document.getElementsByTagName("body")[0];
  noScroll.classList.remove("noScroll");
  var clearBigWrap = document.getElementsByClassName("bigwrapper");

  for (var i = 0; i < clearBigWrap.length; i++) {
    clearBigWrap[i].style.display = "none";
  }
};
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65242" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/bigGrid.js"], null)
//# sourceMappingURL=/bigGrid.418a1a03.js.map