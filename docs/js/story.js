/**
  * Work in progress to navigate pages for a story
    */

function nextPage() {
  //get the path of the current page
  const url = document.URL;
  const { pathname } = window.location;

  //get only the last part of it.
  // const page = url
  // console.log(url);
  const paths = pathname.split("/");
  //apply filter to array, only let through non-empty non-null
  paths.filter(entry => entry !== "");
  const lastPart = paths[paths.length - 1];
  const pathStart = pathname.replace(lastPart, "");

  alert("Hello!");
  console.log("hello");

  console.log(pathStart + ";;;;" + lastPart);
}

const ptag = document.createElement("p");
const textInsert = document.createTextNode("Hello!");
ptag.appendChild(textInsert);

document.getElementById("insert-above").insertBefore(ptag);

