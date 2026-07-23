


const canvas = document.getElementById("drawing");
const ctx = canvas.getContext("2d");


ctx.strokeStyle = "#00ff00";
ctx.lineWidth = 5;

function drawCircle(color, x, y, radius) {
    //ctx.stroke("orange")
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI); // x, y, radius, startAngle, endAngle
    ctx.stroke(); // or ctx.fill()
}

drawCircle("#003399", 200, 200, 40);