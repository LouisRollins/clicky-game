import React from "react";
import Board from "./components/gameBoard"
import Score from "./components/scoreHeader";

function App() {
  return (
    <div className="container">
      <Score />
      <Board />
    </div>
  );
}

export default App;
