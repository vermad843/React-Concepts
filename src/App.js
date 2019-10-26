import React from 'react';
import './App.css';
import Joke from './Joke';

function App() {
   return (
     <div>
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
            answer = "till a point i am unavailable to work"
        /> 
     </div>
   );
}

export default App;