import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard(nrows, ncols, chanceLightStartsOn));

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard(nrows, ncols) {
    let initialBoard = [];
    for (let i = 0; i < nrows; i++) {
      let row = [];
      for (let j = 0; j < ncols; j++) {
        row.push(Math.floor(Math.random() * 100 < chanceLightStartsOn));
      }
      initialBoard.push(row);
      console.log(row);
    }
    return initialBoard;
  }

  function hasWon() {
    return board.every(row => row.every(cell => !cell))
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);
      const boardCopy = oldBoard.map(row => [...row]);

      flipCell(y, x, boardCopy);
      flipCell(y + 1, x, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y, x - 1, boardCopy);

      return boardCopy;
    });

  // if this coord is actually on board, flip it    
  const flipCell = (y, x, boardCopy) => {
    if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
      boardCopy[y][x] = !boardCopy[y][x];
      }
    };
  }
  // if the game is won, just show a winning msg & render nothing else
  if (hasWon()) {
    return <h2 className="Board-Winner"> Winner! 🎉 </h2>
  }
  
  // make table board
  return (
    <div className="Board">
      <h1 className="Board-Heading"> Lights Out! </h1>
      <table className="Board-GameBoard">
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <Cell 
                  key={`${rowIndex}- ${colIndex}`}
                  isLit={cell}
                  flipCellsAroundMe={() => flipCellsAround(`${rowIndex}-${colIndex}`)}/>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Board;
