// var vs let vs const
// scope

// var is a global scope
var a = 5;
console.log(a)

// ---------------------------------------

// let and const is a block scope, it can only be accessed in the block, below is an example

{
    let c = 5;
    console.log(c)
}
// -----------------------------------------

// variable shadowing
function test() {
    let shadow = "Hello";
    if (true) {
        // this let shadows the first let
        let shadow = "Hi";
        console.log(shadow)
    }
    console.log(shadow);
}
test();

// we cannot shadow let  by using var, this is called illigal shadowing
// ---------------------------------------------
// we can redeclare a variable using var in the same scope bit not let and const
// when declaring const we need to initialize it with some value as opposed to var and let
// we can reinitialize a value in let and var but not const

// -----------------------------------------------
// Hoisting
// when using var, we will get undefined but if we use const and let
// we will get initialization error since yes they are hoisted but they are hoisted 
// in the temporary dead zone, this means that yes the variables are there in the 
// scope but they are yet to be initialised

console.log(count);

var count = 1;

function abc() {
    console.log(abc);
    var abc = 4;
}
abc();