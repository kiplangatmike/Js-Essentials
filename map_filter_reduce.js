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

// ------------------------------------------------------------------
// polyfil for reducer();
Array.prototype.myReduce = function (cb, initialValue) {
    var accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator
}
const myAcc = reducee.myReduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0)
console.log("polyfil of filter:", myAcc);

// -------------------------------------------------------------------

// map vs forEach
// both are array functions to loop through an array
// for map returns a new array while for each doesn't it just modifies the original array
// you can chain other methods in map, but since forEach doesn't return anything, their is nothing to be chained
const arr = [1,2,3,4]
const mapResult = arr.map((ar) => {
    return ar + 2;
});
const forEachResult = arr.forEach((ar, i) => {
    arr[i] = ar + 3;
});
console.log("map vs forEach", mapResult, forEachResult, arr);


// O/P based questions
// question 1 return only the names of students in capital

let studentss = [
    {name: "a", roll: 32, marks: 70},
    {name: "b", roll: 90, marks: 43},
    {name: "c", roll: 41, marks: 67},
]

let names = []
for (let i = 0; i < studentss.length; i++) {
    names.push(studentss[i].name.toUpperCase())
    console.log(studentss[i])
}
console.log("for loop to capitalise names:", names)

const studentsToUpper = studentss.map((student) => {
    return student.name.toUpperCase();
})
console.log(studentsToUpper);

// this is not possible..
const studentsForEach = studentss.forEach((student) => {
    return student.name.toUpperCase();
})
console.log(studentsForEach);


// -----------------------------------------------------------
// quesiton 2 - return only details for those students who scored more than60

const moreThan60 = [];
for (let i = 0; i < studentss.length; i++) {
    if (studentss[i].marks > 50) {
        moreThan60.push(studentss)
    }
}
console.log(moreThan60)
