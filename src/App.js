// React Imports
import { useState } from "react";
// JSX Imports
import MoleContainer from "./MoleContainer";
// CSS
import "./App.css";

function App() {
  let [score, setScore] = useState(0);

  const createMoleHill = () => {
    let hills = [];
    for (let i = 0; i < 3; i++) {
      hills.push(<MoleContainer key={i} setScore={setScore} score={score} />);
    }
    return <div className="hills">{hills}</div>;
  };

  return (
    <div className="App">
      <h1>React-A-Mole</h1>
      <h3>Score: {score}</h3>
      <div className="wrapper">
        <div className="row-1">{createMoleHill()}</div>
        <div className="row-2">{createMoleHill()}</div>
        <div className="row-3">{createMoleHill()}</div>
      </div>
    </div>
  );
}

export default App;
