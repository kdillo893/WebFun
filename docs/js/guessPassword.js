/**
 * load this on a page with script tag, read input and have people guess for a passwrod.
 */

// const MY_PASSWORD = 12321;

function isCorrectPassword(guess) {
    if (MY_PASSWORD == guess) {
        alert("you guessed my password!");
        return true;
    } else {
        alert("Guess again! Wrong!");
        return false;
    }
}

function passwordGame() {

    while (true) {
        var pwGuess = prompt("Guess my password, it's a number:");
        let pwNumber = parseInt(pwGuess);
        if (isCorrectPassword(pwNumber)) {
            break;
        }
    }
}

passwordGame();

const MY_PASSWORD = 123123;
let guessWords = prompt("Guess my password", 0);

let guess = parseInt(guessWords);
if (MY_PASSWORD == guess) {
    alert("you guessed my password!");
    // return true;
} else {
    alert("Guess again! Wrong!");
    // return false;
}