var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/_namespaces/ns.sub.js
var ns_sub_exports = {};
__export(ns_sub_exports, {
  callme: () => callme
});

// src/sub.js
function callme() {
}

// src/other.js
function callViaReexport() {
  ns_sub_exports.callme();
}
function callViaWildcard() {
  callme();
}
function callDirectly() {
  callme();
}

// entrypoint.js
callViaReexport();
callViaWildcard();
callDirectly();
ns_sub_exports.callme();
callme();
callme();
