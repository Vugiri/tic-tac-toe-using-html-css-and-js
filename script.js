let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameEnded = false;
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function makeMove(index) {
    if (gameEnded || board[index] !== "") return;
    board[index] = currentPlayer;
    render();
    if (checkWinner()) {
        document.getElementById("message").textContent = `${currentPlayer} wins!`;
        gameEnded = true;
        return;
    }
    if (checkDraw()) {
        document.getElementById("message").textContent = "It's a draw!";
        gameEnded = true;
        return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
    return winningCombos.some(combo => {
        return combo.every(index => board[index] === currentPlayer);
    });
}

function checkDraw() {
    return board.every(cell => cell !== "");
}

function restart() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameEnded = false;
    document.getElementById("message").textContent = "";
    render();
}

function render() {
    const cells = document.getElementsByClassName("cell");
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = board[i];
    }
}
