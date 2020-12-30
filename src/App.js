import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [chng, setChng] = useState("");
  function clicky(event) {
    chng = event.target.value;
    var n = chng.includes(" ");
    if (n == true) {
      setChng("true");
    } else {
      setChng(chng);
    }
  }

  return (
    <div className="App">
      <input onChange={clicky} />
      <h1>{chng}</h1>
    </div>
  );
}
