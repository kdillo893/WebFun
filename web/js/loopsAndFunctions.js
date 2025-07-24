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

//declare array
var array1 = [1,12, 23, 52];

//set value in the array.
array1[0] = 100;
array1[3] = 1990;

array1.push(919191919)

console.log("using for-each on array.")

function displayValue(value) {
    console.log(value);
}
array1.forEach(displayValue);

// array1.pop()

console.log("Array values:")
for (let i = 0; i < array1.length ; i++) {
    console.log(array1[i]);
    console.log(`index=${i}, value=${array1[i]}`);
}

var someWords = "I am making a variable with words!";
var eachWord = someWords.split(" ");

for (let i = 0; i < someWords.length; i++) {
    console.log(someWords[i]);
}


console.log(eachWord);




//challenge:
//  Make a paragraph in a variable, 
//  count the number of words starting with "t":
//HINT1: use "split" for splitting words
//Hint2: checking the first letter of a word is done with this:

var myParagraph = "This is the web development class. My name is Mr. D. I am "
    + "typing a bunch of things in this variable so that I can use it "
    + "as an example. I am also using the + key so I can make spaces "
    + "without going to the right."

var commaSeparatedThings = "hi,this,is,an,example,with,commas";
var commaWords = commaSeparatedThings.split(",");

var someWords = "I am making a variable with words!";
var eachWord = someWords.split(" ");

var wordsArray = myParagraph.split(" ");

//check if a word starts with the letter "t" lowercase.
// var startsWithT = word.startsWith("t");
// console.log(startsWithT);

//variable counting words starting with t
let wordsStartingWithT = 0;

//loop going over each word in your paragraph.
for (let i = 0; i < wordsArray.length; i++) {

    let word = wordsArray[i];
    if (word != null && word.toLowerCase().startsWith("t")) {
        wordsStartingWithT = wordsStartingWithT + 1;
    }
}

console.log("Words starting with t: " + wordsStartingWithT);

// var word = "the";
// word = word.toLowerCase();
