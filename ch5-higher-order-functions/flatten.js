"use strict";

let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arrays) {
  return arrays.reduce((a, b) => a.concat(b));
}
console.log(flatten(arrays));