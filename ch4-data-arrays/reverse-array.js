"use strict";

const reverseArray = (arr) => {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

const reverseArrayInPlace = (arr) => {
    for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

let array = [1, 2, 3, 4, 5, 6];
console.log(reverseArray(array));
reverseArrayInPlace(array);
console.log(array);