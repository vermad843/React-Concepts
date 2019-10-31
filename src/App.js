// Conditional rendering 
import React, { Component } from 'react';
import Conditional from './Conditional'
class App extends Component {
    constructor() {
        super();
        this.state = {
           unreadMessages : [
               "No Phone",
               "I can do this."
           ] 
        }
    }
    render() {
        const {unreadMessages} = this.state;
        return (
            <div>{
                unreadMessages.length > 0 && 
                <h2>You have {unreadMessages.length} unread messages!</h2>
            }
            </div>
        );
    }
}

export default App;