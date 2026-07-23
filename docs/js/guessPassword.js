
const MY_PASSWORD = 123123;
function guessPassword() {

    const input = document.getElementById("password");

    let guess = input.value;
    const output = document.getElementById("output");

    if (MY_PASSWORD == guess) {
        console.log("you guessed my password!");
        // return true;
        output.innerText = "You guessed my password"
    } else {
        console.log("Guess again! Wrong!");
        // return false;
        output.innerText = "You got it wrong"
    }
}