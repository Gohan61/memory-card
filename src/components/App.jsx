import { useState } from "react";
import Randomize from "./Randomize";
import Scoreboard from "./Scoreboard";

function App() {
  const [score, saveScore] = useState(0);

  function click() {
    saveScore(score + 1);
  }
  return (
    <>
      <Randomize click={click}></Randomize>
      <Scoreboard score={score}></Scoreboard>
    </>
  );
}

export default App;
