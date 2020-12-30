import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [chng, setChng] = useState("");
  function clicky(event) {
    chng = event.target.value;
    for(var i = 0;i < chng.length;i++){
      if(chng[i]=== " "){
        setChng("BLANK SPACE");
      }
      else{
        setChng(chng);
      }
    }
  }
  return (
    <div className="App">
      <input onChange={clicky} />
      <h2>{chng}</h2>
    </div>
  );}
