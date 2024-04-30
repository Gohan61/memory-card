import { useState } from "react";
import Randomize from "./Randomize";
import Scoreboard from "./Scoreboard";

function App() {
  const [score, saveScore] = useState(0);
  const [bestScore, saveBest] = useState(0);

  function click(state) {
    if (!state) {
      saveScore(score + 1);
    } else {
      saveBest(score);
      saveScore(0);
    }
  }
  return (
    <>
      <Randomize click={click}></Randomize>
      <Scoreboard score={score} bestScore={bestScore}></Scoreboard>
    </>
  );
}

export default App;
