import React from "react";

interface SquareProps {
  value: string | null;
  SquareClick: () => void;
}

export default function Square({ value, SquareClick }: SquareProps) {
  return (
    <button className="square" onClick={SquareClick}>
      {value}
    </button>
  );
}
