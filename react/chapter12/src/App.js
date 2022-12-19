import React from "react";
import { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showPargraph, setShowPargraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("App Running");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowPargraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPargraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Pargraph!</Button>
    </div>
  );
}

export default App;
