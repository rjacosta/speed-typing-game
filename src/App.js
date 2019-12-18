import React, { useState, useEffect } from "react";

/**
 * Challenge:
 * 
 * Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 */

const App = () => {
  
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [timer, setTimer] = useState(15);
  const [gameStarted, setGameStarted] = useState(false);

  const onTextChange = event => {
    const { value } = event.target;
    setText(value);
  };

  const onStartButtonPressed = () => {
    if (!gameStarted) {
      setGameStarted(true);
    }
  }

  useEffect(() => {
    if (gameStarted === true) {
    const intervalId = setInterval(() => {
      if (timer !== 0) {
      setTimer(prevTimer => prevTimer - 1)
      }
    }, 1000)
    
    return () => clearInterval(intervalId)
  }
  }, [gameStarted, timer])

  useEffect(() => {
    var textCleaned = text.replace(/(^\s*)|(\s*$)/gi,"")
      .replace(/[ ]{2,}/gi," ")
      .replace(/\n /,"\n");
    setWordCount(textCleaned.split(' ').length)
  }, [text])

  return (
    <div>
      <h1>SPEED TYPER</h1>
      <textarea value={text} onChange={onTextChange} />
      <h4>Time Remaining: {timer}</h4>
      <button onClick={onStartButtonPressed} >Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
};

export default App;
