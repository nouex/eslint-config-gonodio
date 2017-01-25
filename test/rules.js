"use strict";

const assert = require("assert");
const traverseExtends = require("../tools/rules.js");

const sep = require("path").sep;

/* simple string as `extends` */
(function () {
  assert.deepEqual(
    traverseExtends(`${__dirname}${sep}fixtures${sep}extends1.json`),
    {"a": true}
  );
})();

/* simple string as `extends` that extends array list of 2 els. */
(function () {
  assert.deepEqual(
    traverseExtends(`${__dirname}${sep}fixtures${sep}extends1.5.json`),
    {"a": true, "b": false}
  );
})();
