

//just runs and goes
function simpleFunction() {
    // alert("hahaha");
    console.log("hi again")
    console.log("simpleFunction: hi");
}

simpleFunction();

//return example; returning early;
function returningFunction() {
    let num = 10;

    if (num < 20) {
        return;
    }

    console.log("I don't reach here");
}

returningFunction();

//returning a value from a function;
function return10() {
    return 10;
}

//things that return a value or variable will
//  give back that value;
let ret10 = return10();

//returning a value from a function;
function returnThings() {
    let sum = 1 + 2;

    return sum;
}

let retThings = returnThings();
//function that just returns without a value
//  will give back "undefined"
let undefResult = returningFunction();

console.log("Object with results", {retThings, ret10, undefResult})

//parameters intro
function add10(number) {
    return number + 10;
}

//use the value indirectly, with a variable
let resAdd = add10(8);
console.log("add10 variable:", resAdd);

//use it directly (no variable)
console.log("add10 direct:", add10(25));


//Multiple parameters!
function add3Nums(num1, num2, num3) {
    return num1 + num2 + num3;
}

let add3 = add3Nums(10, 20, 70);
console.log("add3:", add3);


//What happens if I log a function?
console.log(add3Nums);



//1. make a function that multiplies 2 numbers
//  and returns the product.

//console.log the result of calling
//  the function with 8 and 9


//2. make a function that loops over every
//  word in a list passed to it, and
//  prints each word all uppercase to console.



