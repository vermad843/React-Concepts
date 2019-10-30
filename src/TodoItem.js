import React, { Component } from 'react';


class TodoItem extends Component {
    render() {
          
    const completedStyle = {
        fontStyle : 'italic',
        color : '#cdcdcd',
        // textDecoration : 'line-through'
    }
        return (
           <div>
            <input 
            type = "checkbox" 
            checked = {this.props.todos.completed} 
            onChange = {() =>this.props.handleChange(this.props.todos.id)} />
            <p style = {this.props.todos.completed ? null : completedStyle}> {this.props.todos.text}</p>
          </div>    
        );
    }
}

export default TodoItem;