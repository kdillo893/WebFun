
let lastTimestamp;
let direction = {
    x: 0,
    y: 0,
}

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let blueBox = {
    x: 50,
    y: 50,
    width: 30,
    height: 30,
    speed: 5
}


function drawBox() {
    ctx.fillStyle = "blue";
    ctx.fillRect(blueBox.x,
        blueBox.y,
        blueBox.width,
        blueBox.height)
}

function moveBox() {
    if (direction.x != 0) {
        blueBox.x += (direction.x * blueBox.speed);
    }

    if (direction.y != 0) {
        blueBox.y += (direction.y * blueBox.speed);
    }
}


function keyboardListenDown(event) {
    // console.log("I'm a keyboard event");
    const key = event.key;

    if (key == "ArrowLeft") {
        direction.x = -1;
    } else if (key == "ArrowRight") {
        direction.x = 1;
    }
    if (key == "ArrowUp") {
        direction.y = -1;
    } else if (key == "ArrowDown") {
        direction.y = 1;
    }
}

function keyboardListenUp(event) {
    const key = event.key;

    if (key == "ArrowLeft" || key == "ArrowRight") {
        direction.x = 0;
    } else if (key == "ArrowUp" || key == "ArrowDown") {
        direction.y = 0;
    }
}

window.addEventListener("keydown", keyboardListenDown);
window.addEventListener("keyup", keyboardListenUp);

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawBox();
    
    moveBox();

    //call game loop after this
    animationId = requestAnimationFrame(gameLoop);
}

let animationId = requestAnimationFrame(gameLoop);
 
//not yet
function stopGame() {
    cancelAnimationFrame(animationId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "50px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Abort, error, button pushed",
        canvas.width/2, canvas.height/2);    
}