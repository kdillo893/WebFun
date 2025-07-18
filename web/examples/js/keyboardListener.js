const keyBufferSize = 2048;
let keyLogBuffer = Array<key;
let keyLogIdx = 0;

function keyLogger(event) {
    const key = event.key;

    if (event.key) {
        keyLogBuffer[keyLogIdx];
        keyLogIdx++;

        if (keyLogIdx >= keyBufferSize) {

        }
    }



    
}

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (key) {
        console.log(key);
    }
    console.log(event.code);
    console.log("ctrlKey pressed:" + event.ctrlKey);
    console.log(typeof(event.key));
});