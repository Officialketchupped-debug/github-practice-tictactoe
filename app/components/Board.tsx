import React from "react";
import Square from "@/app/components/Square";
import calculateWinner from "@/utils/calculateWinner.ts";

interface BoardProps {
    xIsNext: boolean;
    squares: (string|null)[];
    onPlay: (nextSquares: (string | null)[]) => void;
}

export default function Board({xIsNext,squares,onPlay}:BoardProps){
     function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} SquareClick={() => handleClick(0)} />
        <Square value={squares[1]} SquareClick={() => handleClick(1)} />
        <Square value={squares[2]} SquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} SquareClick={() => handleClick(3)} />
        <Square value={squares[4]} SquareClick={() => handleClick(4)} />
        <Square value={squares[5]} SquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} SquareClick={() => handleClick(6)} />
        <Square value={squares[7]} SquareClick={() => handleClick(7)} />
        <Square value={squares[8]} SquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}