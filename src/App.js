import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

   componentDidMount() {
   fetch("https://swapi.co/api/people/1")
      .then(res => res.json())
      .then(data => console.log(data))
   }

    render() {
        return (
            <h1>Fetching the data</h1>
        );
    }
}

export default App;