import { useState } from "react";

export default function Scoreboard({ score, bestScore }) {
  return (
    <>
      <p>Best score: {bestScore}</p>
      <p>Score: {score}</p>
      <p className="description">
        Memory game: Increase your score by only clicking an image once
      </p>
    </>
  );
}
