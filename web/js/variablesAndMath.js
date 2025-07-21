/**
 * Basics of math operations and variables.
 */

var myVariable;
myVariable = 21;

var x = 12;
var y = 32;

var _this_works;
var this_also123123123works;

/* NOT VALID VARIABLEs!
var 321laj;
var name with spaces;
*/

const unchanging = "this won't change";
// unchanging = "This is wrong";
let changeable = "this can change";
changeable = "I can do this!";

/**
 * Data types: Number, String, Boolean, "undefined",
 */

//numbers
var num = 12;
num = 12.90;

//strings
var word = "word";
word = "this" + " that";
console.log(word);

var words = "These are a bunch of words!";
var formatString = `${words} like this: ${word}`;

//booleans
var boolValue = true;
var isGreaterThan5 = num > 5;

//undefined
let undefVar;
let definedVal = "something";
definedVal = undefined;

//bigint
let largeNum = BigInt(Number.MAX_SAFE_INTEGER + 1000);

//symbol
let id = Symbol("special-symbol");

//Object
let myObject = {
    word: "something",
    numVal: 3223,
    isThisJavaScript: true,
    isObject: function() {
        return typeof(this) == 'object';
    },
}

//arrays
let numbers = [1,2,3,4,5,6];
numbers[0]; //would show "1"

console.log("array index 0:" + numbers[0]);
console.log("array index 5:" + numbers[5]);

console.log(myObject.isObject());
console.log(typeof(num), typeof(word), typeof(boolValue));


function divide(numerator, denominator) {
    var result = numerator / denominator;
    return result;
}

let value = divide(5, 2);
console.log("The multiply result is:")
console.log(value);
// alert(value);

Math.abs(-1);
Math.round(12.4324234234234);

/**
 * Modify an element on the page with id "everything" and randomly selects a background color.
 */
function randomBackground() {
    let rRandom = Math.random() * 256;
    let bRandom = Math.random() * 256;
    let gRandom = Math.random() * 256;
    let alphaRandom = Math.random() * 256;

    const everythingEl = document.getElementById("everything");

    if (everythingEl) {
        everythingEl.style.backgroundColor = `rgba(${rRandom}, ${gRandom}, ${bRandom}, ${alphaRandom})`
    } else {
        console.log("oops");
    }
}

/**
 * With the input element passed in the parameter, modify an element with the id "everything"
 *      to the given values for background color;
 * @param {HTMLElement} element 
 */
function inputChooseBackground(element) {
    if (!element) {
        return;
    }
    const everythingEl = document.getElementById("everything");

    console.log(element.value);
    everythingEl.style.backgroundColor = element.value;
}

// const bodyEl = document.getElementsByTagName("body");
// const colorInput = document.querySelector("input[name='background-color']");
// colorInput.addEventListener("change",
//     inputChooseBackground(colorInput, bodyEl));

function doText() {
    const buttonEl = document.getElementById("button1");
    const newElement = document.createElement("a");
    // const textEl = document.getElementById("text-here");
    const newText = document.createTextNode("Link Here!");
    newElement.appendChild(newText)
    newElement.href = "/web/javascriptIo.html";
    const textHereElement = document.getElementById("text-here");

    textHereElement.appendChild(newElement);
}




// alert(sum);

const buttons = document.getElementsByTagName("button");
const winningButton = buttons.item(Math.round(Math.random() * buttons.length));

function checkWinningButton(el) {

}

function chooseWinningButton() {

}

console.log(buttons);
