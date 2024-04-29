import { useState } from "react";

export default function Scoreboard() {
  const bestScore = 0;
  const [score, saveScore] = useState(0);
  return (
    <>
      <p>Best score: {bestScore}</p>
      <p>Score: {score}</p>
    </>
  );
}
