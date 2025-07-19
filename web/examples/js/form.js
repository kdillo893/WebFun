function inputToTag(event) {
    let inputEl = document.getElementById("name-input");

    console.log(inputEl.value);

    let displayEl = document.getElementById("display-text");

    displayEl.innerText(inputEl.value);
}