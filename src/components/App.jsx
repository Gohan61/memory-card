import { useState } from "react";
import Randomize from "./Randomize";
import Scoreboard from "./Scoreboard";

function App() {
  const [score, saveScore] = useState(0);
  const [bestScore, saveBest] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [clickedIds, setClickedIds] = useState([]);

  function click(id) {
    if (!clickedIds.includes(id)) {
      saveScore(score + 1);
      setClickedIds([...clickedIds, id]);
      if (score === 8) {
        alert("You win!");
      }
    } else {
      if (score > bestScore) {
        saveBest(score);
      }
      saveScore(0);
      setGameOver(true);
      setClickedIds([]);
    }
  }
  return (
    <>
      <Randomize click={click} gameOver={gameOver}></Randomize>
      <Scoreboard score={score} bestScore={bestScore}></Scoreboard>
    </>
  );
}

export default App;
