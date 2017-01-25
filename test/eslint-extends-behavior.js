"use strict";

/**
  * Conclusion:
  *
  * When `extends` is a string the previous object overrides.
  * When `extends` is an array the latter override the former
  * in the array.
  */

console.log("this should pass the linter");
// no-prototype-builtins rule overruled by [eslintrc4]
({}).hasOwnProperty("none");

// no-useless-return
function _() {
  return;
}
