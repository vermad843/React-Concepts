import React from 'react';


function Joke(props) {
  return (
    <div>
      <h3 style = {{display : props.question ? "block" : "none"}}>Question :{props.question}</h3>
      <h3 style = {{color : !props.question && "red"}}>Answer :  {props.answer}</h3>
      <br/>
    </div>
  );
}

export default Joke;