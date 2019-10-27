import React from 'react';
import './App.css';
import Joke from './Joke';

function App() {
   return (
     <div>
        <Joke className = "ans" answer = "hey"/>
        <Joke question = "what is your name"
              answer = "Vishnu" />
        <Joke question = "how are you"
              answer = "Fine"
        />
        <Joke question = "what to do"
           answer = "work"
        />
        <Joke question = "how much do you want to work"
              answer = "a lot"
        />
        <Joke question = "At what time you stop working"
            answer = "never"
        /> 
     </div>
   );
}

export default App;