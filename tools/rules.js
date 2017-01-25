"use strict";

/* FIXME: I am sad and unfinished */

var pathRelative = require("path").relative;

module.exports = traverseExtends;

if (~process.argv.slice(2).indexOf(/--log|-l/i)) {
  let results;

  results = traverseExtends(require("gonodio").extends);
}

function loadConfig(fPath) {
  return require(pathRelative(__dirname, fPath));
}

function extend (a, b) {
  /**
    * Own enumerable props.
    * `a` takes prec. over `b`
    *
    *  @return {Object} new object
    */
  let ret = {};

  Object.keys(b).forEach((key) => {
    ret[key] = b[key];
  });

  Object.keys(a).forEach((key) => {
    ret[key] = a[key];
  });

  return ret;
}

function traverseExtends (extds) {
  let extd, furtherBack;
  if (Array.isArray(extds)) {
    let keys = Object.keys(extds);
    let extd, accum = {};
    for (let key in keys) {
      extd = extds[key];
      accum = extend(traverseExtends(extd), accum);
    }
    return accum;
  } else if ("string" === typeof extds) {
    extd = extds;
    extd = loadConfig(extd);
    furtherBack = traverseExtends(extd.extends);

    return extend(extd.rules, furtherBack);
  } else return {};

}
