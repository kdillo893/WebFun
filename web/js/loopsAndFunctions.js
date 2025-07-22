/**
 * Introducing loops and functions
 */

//loops

//note: ++ will add 1 and set the new value to the variable
let counter = 0;
counter++;
console.log(counter);
//this can be before or after the variable,
// they do different things for advanced programmers
++counter;

//you can also do -- for subtracting 1
counter--;
--counter;

console.log(counter);

console.log("This prints numbers 0 through 9")
for (let i = 0; i < 10; ++i) {
    console.log(i);
}