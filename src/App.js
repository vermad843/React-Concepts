import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div>
         <Header/>
         <Greeting/>
      </div>
    );
  }
}

export default App;


class Header extends Component {
  render() {
    return (
      <header>
         <p>welcome, {this.props.username}!!!</p>
      </header>
    );
  }
}


class Greeting extends Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if(hours < 12) {
      timeOfDay = "morning"
    }else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    }else {
      timeOfDay = "night"
    }
    return (
       <div>
           <h1>Good {timeOfDay} to you,sir or madam</h1> 
       </div>
    );
  }
}

