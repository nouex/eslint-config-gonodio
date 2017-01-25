"use strict";

let pathSep = require("path").sep;

module.exports =
require(`${__dirname}${pathSep}..${pathSep}vendor${pathSep}node-style-guide${pathSep}index.js`).
  eslintrc;
