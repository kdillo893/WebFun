let isXTurn = true;


let OWins = 0;
let XWins = 0;
let tieGames = 0;

function changevalue(el) {
    let newElement = document.createElement("div");

    if (isXTurn) {
        newElement.innerText = "X"
        isXTurn = false;
    }
    else {
        newElement.innerText = "O"
        isXTurn = true;
    }


    el.innerHTML = "";
    el.appendChild(newElement);
}
const gameTable = document.getElementById("game");


function clear() {
    let tdElements = gameTable.getElementsByTagName("td");
}

/**
 * HOW DO I check if the game is a win for either?
 * X's on rows columns or diagonals,
 * O's on rows columns or diagonals,
 * If every square is filled and no winners, cats game (tie)
 * 
 * TODO
 */
function checkWin() {

    let tdElements = gameTable.getElementsByTagName("td");

    for (let row = 0; row < 3; row ++) {
        if (tdElements[0 + 3 * row] != "") {
            
        }
    }

    for (let col = 0; col < 3; col ++) {
        
    }

    //check the diagonals
}


// gameTable.addEventListener("click", checkWin);