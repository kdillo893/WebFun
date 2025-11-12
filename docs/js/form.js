function inputToTag(event) {
    const inputEl = document.getElementById("name-input");

    // console.log(inputEl.value);

    const displayEl = document.getElementById("display-text");

    displayEl.innerText(inputEl.value);
}