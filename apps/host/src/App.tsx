import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Settings from "settings/App";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Host Application</h1>
      <Settings />
    </div>
  );
}

export default App;
