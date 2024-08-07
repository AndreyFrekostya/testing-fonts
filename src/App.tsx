import React from "react";
import "./styles.css";
import BLock from "./BLock";
function App() {
  return (
    <div className="App">
      {[0, 1, 2].map((item) => (
        <BLock key={item} index={item} />
      ))}
    </div>
  );
}

export default App;
