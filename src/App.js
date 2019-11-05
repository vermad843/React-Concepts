import React, { Component } from 'react';


class App extends Component {
   constructor() {
       super();
       this.state = {
         firstName : '',
         lastName : '',
         isFriendly : true
       }
       this.handleChange = this.handleChange.bind(this);
   }

 handleChange(event) {
   this.setState({
      [event.target.name] : event.target.value
   })
 }

    render() {
      const {firstName, lastName, isFriendly} = this.state;
        return (
           <form>
               <input 
                type = "text" 
                value = {firstName}
                name = "firstName"
                placeholder = "First Name"
                onChange = {this.handleChange}
                />
                <br/>
                  <input 
                type = "text" 
                value = {lastName}
                name = "lastName"
                placeholder = "Last Name"
                onChange = {this.handleChange}
                />
                <h1>
                   {firstName} {lastName}
                </h1>
                <textarea value = {"some Default Value"}/>
                <input
                  type = "checkbox"
                  checked = {isFriendly}
                />
           </form> 
        );
    }
}

export default App;