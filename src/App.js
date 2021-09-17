import React, { useState } from "react";
import './App.css';


function App() {
  // first item is state variable, second function allows us to updated state.
  const [emotion, setEmotion] = useState("happy");
  console.log(emotion);
  return (
    <>
     <h1>Current emotion is {emotion}.</h1>
     <button onClick={()=>setEmotion('happy')}>happy</button>
     <button onClick={()=>setEmotion('frustrated')}>Frustrate</button>
     <button onClick={()=>setEmotion('enthusiastic')}>enthusiastic</button>
    </>
  )
 
 
}

export default App;
