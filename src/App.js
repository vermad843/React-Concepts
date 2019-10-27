import React from 'react';
import './App.css';
import Joke from './Joke';
import jokeData from './jokeData';

function App() {
 const jokeComponent = jokeData.map((joke) => {
        return <Joke question = {joke.question}
        answer = {joke.answer}/>
      })

   return (
     <div>
       {jokeComponent}
     </div>
   );
}

export default App;