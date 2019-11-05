import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character : {},
            loading : false 
         };
    }

   componentDidMount() {
       this.setState({
           loading : true
       })
   fetch("https://swapi.co/api/people/1")
      .then(res => res.json())
      .then(data => { 
          this.setState({
          character : data ,
          loading : false
      })
    })   
}  


    render() {
        const {character , loading} = this.state;
        const text = loading ? 'loading...' : character.name 
        return (
            <div>
              {text}   
            </div>
        );
    }
}

export default App;