import React, { useState, useEffect } from "react";
import './App.css';

// https://api.github.com/users/khudnell


function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if(data) {
    return (<div><h1>{data.login}</h1>
    <p>{data.location}</p>
    <img alt={data.login} src={data.avatar_url} />
    
    </div>)
  } 

 
  return (
    <div>
      No User Available
    </div>
  )
 
 
}

export default App;
