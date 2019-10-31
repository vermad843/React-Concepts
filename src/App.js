// Conditional rendering 
import React, { Component } from 'react';
import Conditional from './Conditional'
class App extends Component {
    constructor() {
        super();
        this.state = {
           isLoading : true 
        }
    }

    componentDidMount() {
        setTimeout(() => {
           this.setState({
               isLoading : false
           }) 
        }, 1000);
    }
    render() {
        const {isLoading} = this.state;
        return (
            <div>
                <Conditional isLoading ={isLoading}/>
            </div>
        );
    }
}

export default App;