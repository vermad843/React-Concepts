import React from 'react';
import './App.css';
 

function handleClick() {
  console.log('here i am !!!')
}
 

function hover() {
  console.log('hover')
}

function App() {
  return (
   <div>
      <img onMouseOver = {hover} src = "cr.jpg" className = "image" alt = "cr"/>
      <br/>
      <br/>
      <button onClick = {handleClick}>Click Me</button>
   </div>
  );
}

export default App


