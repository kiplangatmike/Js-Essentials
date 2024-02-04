// map filter and reduce

// what is map()?
// map method is used to create a new array from eisting array by applying a funciton
// map takes a call back function
const nums = [1,2,3,4]

const multiplyThree = nums.map((num, i, arr) => {
    return num * 3 + 1;
})
console.log(multiplyThree);

// ----------------------------------------------

// what is filter
// returns elements that fulfills a certain criteria

const fil = [1,2,3,4]

const moreThanTwo = fil.filter((fi, i, arr) => {
    return fi > 2;
})
console.log(moreThanTwo);

// ---------------------------------------------
// reduce reduces the values to one value

const reducee = [1,2,3,4]
const sum = reducee.reduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0)
console.log(sum);

// -------------------------------------

// polyfil for map();

Array.prototype.myMap = function (cb) {
    let temp = [];
    for ( let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp
}

const multiply = nums.myMap((num, i, arr) => {
    return num * 3;
})
console.log(multiply);

// --------------------------------------------------------------

// polyfil for filter();

Array.prototype.myFilter = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) temp.push(this[i]);
    }
    return temp;
}
const moreTwo = fil.myFilter((fi, i, arr) => {
    return fi > 2;
})
console.log("polyfil of filter:", moreTwo);