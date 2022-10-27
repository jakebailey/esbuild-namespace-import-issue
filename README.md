This repo is an example of an issue with reexporting namespace imports.

See the code for the full example, but here is the output of bundling:

```js
var __defProp = Object.defineProperty;
var __export = (target, all) => {
    for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
};

// src/_namespaces/ns.sub.js
var ns_sub_exports = {};
__export(ns_sub_exports, {
    callme: () => callme,
});

// src/sub.js
function callme() {}

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
```

Note how some calls to `callme` are direct, but some go through an exports object.
