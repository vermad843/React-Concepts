import React, { Component } from 'react';
import './App.css';



class App extends Component {
    render() {
        return (
          <div className = "title">
          <h3> Best Player in the World</h3>
              <input type = "checkbox" />
              <p>C.Ronaldo </p>

              <input type = "checkbox" />
              <p>Messi </p>
              
              <input type = "checkbox" />
              <p>Neymar </p>

              <input type = "checkbox" />
              <p>Ronaldino </p>
          </div>            
        );
    }
}

export default App;