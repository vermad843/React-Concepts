import React, { Component } from 'react';


class TodoItem extends Component {

    render() {
        return (
           <div>
            <input 
            type = "checkbox" 
            checked = {this.props.todos.completed} 
            onChange = {() =>this.props.handleChange(this.props.todos.id)} />
            <p> {this.props.todos.text}</p>
          </div>    
        );
    }
}

export default TodoItem;