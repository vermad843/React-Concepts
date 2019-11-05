import React, { Component } from 'react';


class App extends Component {
   constructor() {
       super();
       this.state = {
         firstName : '',
         lastName : '',
         isFriendly : false,
         gender : '',
         favColor : 'Blue'
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
      const {firstName, lastName, isFriendly, gender, favColor} = this.state;
        return (
           <form onSubmit = {this.handleSubmit}>
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
              <label> 
                <input
                  type = "radio"
                  name = "gender"
                  value = "male"
                  checked = {gender === 'male'}
                  onChange = {this.handleChange}
                />Male
              </label>  
              <label> 
                <input
                  type = "radio"
                  name = "gender"
                  value = "female"
                  checked = {gender === 'female'}
                  onChange = {this.handleChange}
                />Female
              </label> 
              <br/>

              <label>Favorite Color</label>
              <select value = {favColor}
                      onChange = {this.handleChange}
                      name = "favColor"
                      >

                      <option value = "Blue">Blue</option>
                      <option value = "green">Green</option>
                      <option value = "red">Red</option>
                      <option value = "orange">Orange</option>
                      <option value = "yellow">Yellow</option>

              </select>
              <h2>You are a {gender}</h2>
              <h2>You favorite color is {favColor}</h2>
              <button>Submit</button>
           </form> 
        );
    }
}

export default App;