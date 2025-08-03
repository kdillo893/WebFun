
let lastTimestamp;

function moveBox(direction, timestamp) {

}

function keyboardListen(event) {
    // console.log("I'm a keyboard event");
    const key = event.key;

    const box = document.getElementById("moving-box");

    if (key == "ArrowLeft") {

        box.style.left = (parseInt(box.style.left) - 5) + "px";
    } else if (key == "ArrowRight") {

        box.style.left = (parseInt(box.style.left) + 5) + "px";
    } else if (key == "ArrowDown") {

        box.style.top = (parseInt(box.style.top) + 5) + "px";

    } else if (key == "ArrowUp") {

        box.style.top = (parseInt(box.style.top) - 5) + "px";
    } else {
        // direction = 0;
        console.log("No direction arrow pressed")
    }

}
window.addEventListener("keydown", keyboardListen);



