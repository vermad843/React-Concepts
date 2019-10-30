import React, { Component } from 'react';


class TodoItem extends Component {

   checked () {
       console.log('Changed!!!')
   } 


    render() {
        return (
           <div>
            <input 
            type = "checkbox" 
            checked = {this.props.todos.completed} 
            onChange = {this.checked} />
            <p> {this.props.todos.text}</p>
          </div>    
        );
    }
}

export default TodoItem;