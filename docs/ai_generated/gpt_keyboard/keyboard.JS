const output = document.getElementById("output");
const keys = document.querySelectorAll(".key");

keys.forEach(key => {
    key.addEventListener("click", () => {
        const value = key.textContent;

        if (value === "Space") {
            output.value += " ";
        } else if (value === "⌫") {
            output.value = output.value.slice(0, -1);
        } else {
            output.value += value;
        }
    });
});