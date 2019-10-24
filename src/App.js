import React, { Component } from 'react';
import './App.css';


class App extends Component {
   constructor() {
      super();
     this.state = {

     } 
   }
componentDidMount() {
 fetch("https://swapi.co/api/people/1")
    .then(res => {
      return  res.json()
    }).then(data => {
    console.log(data);
    })
}

   render() {
      return (
         <h1>hello</h1>
      );
   }
}

export default App;



// Fetching data from an API
// https://swapi.co(starWar API)