import React, { Component } from 'react';


class Conditional extends Component {
    render() {
        if(this.props.isLoading === true) {
            return (
                <h1>Loading....</h1>   
               );
        }else {
           return (
               <h1>Temp</h1>
           ) 
        }
        
    }
}

export default Conditional;