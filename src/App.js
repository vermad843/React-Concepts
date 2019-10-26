import React from 'react';
import './App.css';

function App() {
  const firstName = "Vishnu"
  const lastName = "Verma"
  return (
    <div>
       <h1>Hello {firstName + ' ' + lastName} </h1>
    </div>
  );
}

export default App; 