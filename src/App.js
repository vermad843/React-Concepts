import React, { Component } from 'react';


class App extends Component {
   constructor() {
       super();
       this.state = {
         firstName : '',
         lastName : ''
       }
       this.handleChange = this.handleChange.bind(this);
   }

 handleChange(event) {
   this.setState({
      [event.target.name] : event.target.value
   })
 }

    render() {
      const {firstName, lastName} = this.state;
        return (
           <form>
               <input 
                type = "text" 
                name = "firstName"
                placeholder = "First Name"
                onChange = {this.handleChange}
                />
                  <input 
                type = "text" 
                name = "lastName"
                placeholder = "Last Name"
                onChange = {this.handleChange}
                />
                <h1>
                   {firstName} {lastName}
                </h1>
           </form> 
        );
    }
}

export default App;