//Example interval
let intervalExample = null;

let num = 1;
function printToConsole() {
    console.log("my interval printing:", num);
    num++;
}

function startIntervalConsole() {
    if (intervalExample != null) {
        return;
    }

    intervalExample = setInterval(printToConsole, 1000)
}

function endIntervalConsole() {
    clearInterval(intervalExample);
    intervalExample = null;
}

//timer code
let seconds = 0;
let timerInterval = null;

const timerTime = document.getElementById("timer")

function setTimerText() {
    let minutes = Math.floor(seconds / 60);
    let secondsPortion = seconds % 60;

    //update the timer HTML element on the page.
    timerTime.innerText = `${minutes}:${secondsPortion}`
}

function timer() {
    //increase seconds by 1 whenever this is called.
    //also call "set Timer Text function"
    seconds++;
    setTimerText();
}

//1000ms = 1second
function startTimer() {
    if (timerInterval) {
        stopTimer();
    }

    timerInterval = setInterval(timer, 1)
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer()
    seconds = 0;

    //reflect this change on the HTML
    setTimerText()
}


let reactionTime = 0;

function reactionGameStart() {
    //create a random timeout 400 and 5000;
    let startInterval = Math.random() * 4600 + 400;

    
}







