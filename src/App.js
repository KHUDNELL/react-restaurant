import React, { useState, useEffect } from "react";
import './App.css';


function App() {
  // first item is state variable, second function allows us to updated state.
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  useEffect(() => {

   console.log(`It's ${emotion} around here!`);}, [emotion]);

   useEffect(() => {

    console.log(`It's ${secondary} around here!`);}, [secondary]);
  return (
    <>
     <h1>Current emotion is {emotion} and {secondary}.</h1>
     <button onClick={()=>setEmotion('happy')}>Make Happy</button>
     <button onClick={()=>setEmotion('frustrated')}>Frustrate</button>
     <button onClick={()=>setEmotion('enthusiastic')}>Enthusiastic</button>
     <button onClick={()=>setSecondary('crabby')}>crabby</button>
    </>
  )
 
 
}

export default App;
