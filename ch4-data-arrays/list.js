"use strict";

const arrayToList = (arr) => {
    let result = {}
    let node = result;
    for (let i = 0; i < arr.length; i++) {
        node.value = arr[i];
        if (i === arr.length - 1) {
            node.rest = null
            break;
        }
        node.rest = {}
        node = node.rest;
    }
    return result;
}

const listToArray = (list) => {
    let result = [];
    let cur = list;

    while (cur) {
        result.push(cur.value);
        cur = cur.rest; 
    }
    return result;
}

const prepend = (el, list) => {
    return {
        value: el,
        rest: list
    }
}

const nth = (list, n) => {
    let result = list;
    for (let i = 0; i < n - 1; i++) {
        result = result.rest;
    }
    return result;
}

const nthRecursive = (list, n) => {
    if (n === 1) {
        return list;
    }
    return nthRecursive(list.rest, n-1);
}

const list = { 
    value: 1, 
    rest: { 
        value: 2, 
        rest: { 
            value: 3,
            rest: {
              value: 4,
              rest: null
            }
        } 
    } 
}
console.log(arrayToList([1, 2, 3]));
console.log(listToArray(list));
console.log(prepend(0, list));
console.log(nth(list, 1));
console.log(nthRecursive(list, 1));