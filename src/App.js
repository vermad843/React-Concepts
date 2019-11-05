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
         this.setState((prevState) => {
             return {
             isLoggedIn : !prevState.isLoggedIn
             }
         })
        }
 
    render() {
        const {isLoggedIn} = this.state;
        let buttonText = isLoggedIn ? 'LOG OUT' : 'LOG IN'
        return (
            <div>
                <h1>
                 <button onClick = {this.handleClick}>{buttonText}</button>
                </h1>
            </div>
        );
    }
}

export default App;