import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timerID = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);
  return (
    <div className="App">
      <div>Seconds: {seconds}</div>
    </div>
  );
}

export default App;
