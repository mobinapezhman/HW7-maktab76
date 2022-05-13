//splice
function removeElements(array, index) {
    var tempArray = new Array();
    var counter = 0;

    for (var i = 0; i < array.length; i++) {
        if (i != index) {
            tempArray[counter] = array[i];
            counter++;
        }
    }
    return tempArray;
}
//find
function find(array) {
    for (let i = 0; i <= array.length; i++) {
        if (condition) {
            return array[i];
        }
    }
}
//filter
function filter(array) {
    let arr = [];
    for (let i = 0; i <= array.length; i++) {
        if (condition) {
            arr.push(arr[i])
        }
        return arr;
    }
}
//some
function some(array) {
    let arr = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === option) {
            arr = true;
        }
    }
    return arr;
}
//slice
function slice(array, from, to) {
    let arr = [];
    if (from >= 0) {
        for (let i = from; i <= to; i++) {
            arr.push(array[i]);
        }
    } else {
        for (let i = array.length + a; i <= array.length + a - b + 1; i++) {
            arr.push(array[i]);
        }
    }
    return arr;
}
