import React, { Component } from 'react';
import './App.css';


    class App extends Component {
        constructor(props) {
            super(props);
            this.state = {
              isLoggedIn : false 
              };
              this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
         console.log('hey');
        }
 
    render() {
        return (
            <div>
                <h1>
                <button onClick = {this.handleClick}>Log in</button>
                </h1>
            </div>
        );
    }
}

export default App;