const keyBufferSize = 2048;
let keyLogBuffer = [];
let keyLogIdx = 0;



/**
 * TODO: add a function to process the keyboard event and place it in a buffer
 *  which is flushed to an output log when full or at a given interval
 * @param {Event} event - the event info from a key press (keydown, keyup, etc.)
 */
function keyLogger(event, fileout) {
    const key = event.key;

    if (event.key) {
        keyLogBuffer[keyLogIdx];
        keyLogIdx++;

        if (keyLogIdx >= keyBufferSize) {

        }
    }
    
}

function changeText(event) {
    if (event == null) {
        return;
    }

    const key = event.key;

    if (key) {
        //step1
        const outputElement = document.getElementById("output-element");

        //step2
        const newLine = document.createElement("span");
        const textNode = document.createTextNode(key);
        newLine.appendChild(textNode);

        //step 3
        outputElement.appendChild(newLine);
    }
}

document.addEventListener("keydown", changeText);



function clearOutput() {
    const outputElement = document.getElementById("output-element");
    outputElement.innerHTML = null;
}

function addNumbers() {
    const leftInput = document.querySelector("input[name='leftNumber'");
    const rightInput = document.querySelector("input[name='rightNumber'");

    if (leftInput.value == null || rightInput.value == null) {
        return;
    }

    let sum = parseInt(leftInput.value) + parseInt(rightInput.value);

    const resultsEl = document.getElementById("calculator-results");

    const newLine = document.createElement("p");
    const textNode = document.createTextNode(sum);
    newLine.appendChild(textNode);

    resultsEl.appendChild(newLine);
}

function calculate(operation) {
    
    console.log(operation);
    if (operation == null) {
        return;
    }

    const leftInput = document.querySelector("input[name='leftNumber']");
    const rightInput = document.querySelector("input[name='rightNumber']");

    if (!leftInput.value || !rightInput.value) {
        return;
    }

    let result;
    const leftNum = parseInt(leftInput.value);
    const rightNum = parseInt(rightInput.value);

    switch(operation) {
        case '+':
            result = leftNum + rightNum;
            break;
        case '-':
            result = leftNum - rightNum;
    }
    let sum = parseInt(leftInput.value) + parseInt(rightInput.value);

    const resultsEl = document.getElementById("calculator-results");

    const newLine = document.createElement("p");
    const textNode = document.createTextNode(sum);
    newLine.appendChild(textNode);

    resultsEl.appendChild(newLine);
}

function clearCalculator() {
    const outputElement = document.getElementById("calculator-results");
    outputElement.innerHTML = null;
}








function showClickEvent(event) {
    
}


        //Don't type this yet;
        // const outputElement = document.getElementById("key-output");
        // const outLine = document.createElement("p");
        // const 
        // outputElement.appendChild()
    




//check key presses with keyboard input.
// document.addEventListener("keydown", (event) => {
//     const key = event.key;

//     if (key) {
//         console.log(key);
//     }
//     console.log(event.code);
//     console.log("ctrlKey pressed:" + event.ctrlKey);
//     console.log(typeof(event.key));

//     const keyOutElement = document.getElementById("key-output");
//     if (keyOutElement && key) {
//         keyOutElement.innerText = key;
//     }
// });
