let cells = document.querySelectorAll(".cell");

let currentPlayer = "x";
let gameOver = false;

function game() {
    let player1 = document.querySelector("#player1").value;
    let player2 = document.querySelector("#player2").value;

    if (player1 === "" || player2 === "") {
        alert("missing name");
        return;
    }

    document.getElementById("form-page").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.querySelector(".game-board").style.display = "block";

    document.querySelector(".message").innerText = `${player1}, you're up`;

    cells.forEach(cell => {
        cell.addEventListener("click", play);
    });
}

function play(event) {

    if (gameOver) return;

    let player1 = document.querySelector("#player1").value;
    let player2 = document.querySelector("#player2").value;

    let turn = document.querySelector(".message");
    let cell = event.target;

    if (cell.innerText !== "") return;

    cell.innerText = currentPlayer;

    checkWinner();

    if (gameOver) return;

    if (currentPlayer === "x") {
        currentPlayer = "o";
        turn.innerText = `${player2}, you're up`;
    } else {
        currentPlayer = "x";
        turn.innerText = `${player1}, you're up`;
    }
}

function checkWinner() {

    const turn = document.querySelector(".message");

    const player1 = document.querySelector("#player1").value;
    const player2 = document.querySelector("#player2").value;

    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let combo of wins) {

        let [a,b,c] = combo;

        if (
            cells[a].innerText !== "" &&
            cells[a].innerText === cells[b].innerText &&
            cells[b].innerText === cells[c].innerText
        ) {

            cells[a].classList.add("winner");
            cells[b].classList.add("winner");
            cells[c].classList.add("winner");

            gameOver = true;

            if (cells[a].innerText === "x") {
                turn.innerText = `${player1} congratulations you won!`;
            } else {
                turn.innerText = `${player2} congratulations you won!`;
            }

            return true;
        }
    }

    return false;
}