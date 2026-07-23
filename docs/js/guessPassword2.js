/**
 * load this on a page with script tag, read input and have people guess for a passwrod.
 */

const MY_PASSWORD = 12321;

function passwordGame() {

    while (true) {

        var pwGuess = prompt("Guess my password, it's a number:");
        let pwNumber = parseInt(pwGuess);

        if (MY_PASSWORD == pwNumber) {
            alert("you guessed my password!");
            break;
        } else {
            alert("Guess again! Wrong!");
            continue;
        }

    }
}

passwordGame();