//guess function for "secret game"
function guess() {
  let num = document.getElementById("num")

  console.log(num);

  const secret = 123903290;

  const output = document.getElementById("output");

  if (num.value == secret) {
    output.innerText = "win"
  } else {
    output.innerText = "you lose"
  }
}

//submission override javascript
const onSubmit = (event) => {
  event.preventDefault();

  console.log("Printing form data", new FormData(form));
  return false;
}

const form = document.getElementById("theform");

console.log(form)
document.addEventListener("submit", (e) => onSubmit(e));

const log = document.getElementById("output");

//bad function
// function logSubmit(event) {
//   log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
//   event.preventDefault();


//   return false;
// }

// form.addEventListener("submit", logSubmit);
