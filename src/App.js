import React from 'react';
import './App.css'
 

function handleClick() {
  console.log('here i am !!!')
}


function App() {
  return (
   <div>
      <img src = "cr.jpg" className = "image" alt = "cr"/>
      <br/>
      <br/>
      <button onClick = {handleClick}>Click Me</button>
   </div>
  );
}

export default App


