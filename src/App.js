import React, { Component } from 'react';


class App extends Component {
   constructor() {
       super();
       this.state = {
         firstName : ''
       }
       this.handleChange = this.handleChange.bind(this);
   }

 handleChange(event) {
   this.setState({
       firstName : event.target.value
   })
 }

    render() {
      const {firstName} = this.state;
        return (
           <form>
               <input 
                type = "text" 
                placeholder = "First Name"
                onChange = {this.handleChange}
                />
                <h1>
                   {firstName}
                </h1>
           </form> 
        );
    }
}

export default App;