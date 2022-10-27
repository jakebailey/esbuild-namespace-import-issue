var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/compiler/_namespaces/ts.sub.js
var ts_sub_exports = {};
__export(ts_sub_exports, {
  callme: () => callme
});

// src/compiler/sub.js
function callme() {
}

// src/compiler/other.js
function foo() {
  ts_sub_exports.callme();
}

// entrypoint.js
foo();
callme();
ts_sub_exports.callme();
