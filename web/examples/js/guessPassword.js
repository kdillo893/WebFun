/**
 * load this on a page with script tag, read input and have people guess for a passwrod.
 */

const MY_PASSWORD = 12321;

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
        var pwGuess = readInt("Guess my password, it's a number:");
        if (isCorrectPassword(pwGuess)) {
            break;
        }
    }
}

passwordGame();