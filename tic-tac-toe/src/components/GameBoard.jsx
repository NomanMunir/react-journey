import { useState } from "react";

const initGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];


export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initGameBoard);

    function handleGameBoardClick(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map(value=>[...value])];
            updatedGameBoard[rowIndex][colIndex] = 'X';
            return updatedGameBoard;
        })
    }
    return (
        <ol id="game-board">
            {
                gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {
                            row.map((playerSymbol, colIndex) =>
                                <li key={colIndex}>
                                    <button onClick={() => handleGameBoardClick(rowIndex, colIndex)}>{playerSymbol}</button>
                                </li>)
                        }
                    </ol>
                </li>)
            }
        </ol>
    )
}