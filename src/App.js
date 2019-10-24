import React, { Component } from 'react';
import './App.css';


class App extends Component {
   constructor() {
      super();
     this.state = {
     character : {}
     } 
   }
componentDidMount() {
 fetch("https://swapi.co/api/people/1")
    .then(res => {
      return  res.json()
    }).then(data => {
       this.setState({
         character : data 
       })
    })
}

   render() {
      return (
         <div>
            {this.state.character.name}
         </div>
      );
   }
}

export default App;



// Fetching data from an API
// https://swapi.co(starWar API)