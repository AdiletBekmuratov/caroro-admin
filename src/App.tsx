import { useState } from "react";
import "./App.css";
import Companies from "./components/Companies";
import NavSide from "./components/NavSide";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div
        className="w-1/3
      "
      >
        <NavSide />
      </div>
      <div
        className="w-2/3
      "
      >
        <Companies />
      </div>
    </div>
  );
}

export default App;
