import React, { Component } from 'react';


class App extends Component {
   constructor() {
       super();
       this.state = {
         firstName : '',
         lastName : '',
         isFriendly : false
       }
       this.handleChange = this.handleChange.bind(this);
   }

 handleChange(event) {
   const {name, value, type, checked} = event.target
  type === 'checkbox' ? this.setState({
    [name] : checked
  }) : this.setState({
    [name] : value
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
                <br/>
              <label> 
                <input
                  type = "checkbox"
                  name = "isFriendly"
                  checked = {isFriendly}
                  onChange = {this.handleChange}
                />Is friendly
              </label> 
           </form> 
        );
    }
}

export default App;