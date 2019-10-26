import React from 'react';
import './App.css';

function App() {
   const date = new Date()
   return (
     <h1>It is currently about 
       {date.getHours() % 12 }
        o'clock!
      </h1>
  );
}

export default App; 