import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character : {}
         };
    }

   componentDidMount() {
   fetch("https://swapi.co/api/people/1")
      .then(res => res.json())
      .then(data => { 
          this.setState({
          character : data 
      })
    })   
}  


    render() {
        const {character} = this.state;
        return (
            <div>
            {character.name } 
            </div>
        );
    }
}

export default App;