import React, { Component } from 'react';


class App extends Component {
   constructor() {
       super();
       this.state = {

       }
       this.handleChange = this.handleChange.bind(this);
   }
 handleChange(event) {
   this.setState({
       firstName : event.target.value
   })
 }


    render() {
        return (
           <form>
               <input 
                type = "text" 
                placeholder = "First Name"
                onChange = {this.handleChange}
                />
           </form> 
        );
    }
}

export default App;