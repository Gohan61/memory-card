import { useState } from "react";

export default function Scoreboard({ score }) {
  const bestScore = 0;

  return (
    <>
      <p>Best score: {bestScore}</p>
      <p>Score: {score}</p>
    </>
  );
}
