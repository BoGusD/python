import React from "react";
import { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showPargraph, setShowPargraph] = useState(false);
  console.log("App Running");

  const toggleParagraphHandler = () => {
    setShowPargraph((prevShowParagraph) => !prevShowParagraph);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showPargraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Pargraph!</Button>
    </div>
  );
}

export default App;
