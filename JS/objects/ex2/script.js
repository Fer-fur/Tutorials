
document.addEventListener('DOMContentLoaded', () => {
    const createGameBoard = () => {
        const board = document.getElementById("board");
        const statusDiplay = document.getElementById("status");
        const restartBtn = document.getElementById("restartBtn");
        const cells = Array.from(document.querySelectorAll(".symbolBtn"));
        let isXNext = true;
        let gameActive = true;
        let boardState = ["", "", "", "", "", "", "", "", ""];
        const winningConditions = [
            // check rows
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // check columns
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // check diagonals
            [0, 4, 8],
            [2, 4, 6]
        ];

        // print current Player's turn message
        const curPlayerTurnMsg = () => {
            return( `It's ${isXNext ? 'X' : 'O'}'s turn`)
        }

        // print winning player's message
        const winningMsg = () => {
            return(`Player ${isXNext ? 'X' : 'O'} has won!`);
        }

        // print tie message
        const tieMsg = () => {
            return(`It is a tie.`);
        }

        // handle cells clicked
        const updateCell = (clickedCell, cellIndex) => {
            boardState[cellIndex] = isXNext ? 'X' : 'O';
            clickedCell.textContent = isXNext ? 'X' : 'O';
        }

        const handlePlayerChange = () => {
            isXNext = !isXNext;
            statusDiplay.textContent = curPlayerTurnMsg();
        }
        
        const handleResultValidation = () => {
            let roundWon = false;
            for ( let i = 0; i < winningConditions.length; i++) {
                const [a, b, c] = winningConditions[i];
                if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                    roundWon = true;
                    break;
                }
            }

            // if round has been won
            if(roundWon) {
                statusDiplay.textContent = winningMsg();
                gameActive = false;
                return;
            }

            // if there is a draw
            const roundDraw = !boardState.includes("");
            if (roundDraw) {
                statusDiplay.textContent = tieMsg();
                gameActive = false;
                return;
            }

            // if no win or draw, game continues
            handlePlayerChange();
        };

        const handleCellClick = (event) => {
            const clickedCell = event.target;
            const cellIndex = cells.indexOf(clickedCell);

            if(boardState[cellIndex] !== "" || !gameActive) {
                return;
            }

            updateCell(clickedCell, cellIndex);
            handleResultValidation();
        }

        const handleRestartGame = () => {
            gameActive = true;
            isXNext = true;
            boardState = ["", "", "", "", "", "", "", "", ""];
            statusDiplay.textContent = curPlayerTurnMsg();
            cells.forEach( cell => cell.textContent = "");
        };

        const initGame = () => {
            statusDiplay.textContent = curPlayerTurnMsg();
            cells.forEach((cell) => {
                cell.addEventListener('click', handleCellClick);
            })
            restartBtn.addEventListener('click', handleRestartGame);
        }

        return {
            initGame
        }

    };

    (function init() {
        const gameBoard = createGameBoard();
        gameBoard.initGame();
    })();
});

