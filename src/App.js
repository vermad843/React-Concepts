import React, { Component } from 'react';
import { is } from '@babel/types';

class App extends Component {
  constructor() {
    super();
    this.state = { 
     isLoggedIn : true
     };
  }
  render() {
    let wordDisplay
     const {isLoggedIn} = this.state;
     if(isLoggedIn == true) {
      wordDisplay = 'In'
     }else {
         wordDisplay = "out"
     }
    return (
       <div>
          <h1>You are currently logged {wordDisplay} </h1>
       </div>
    );
  }
}

export default App;