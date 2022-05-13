function getLength(nestedArray) {
    let arr = nestedArray.flat(Infinity);
    return arr.length;
}
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));