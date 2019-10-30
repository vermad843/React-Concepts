import React, { Component } from 'react';


class TodoItem extends Component {
    render() {
        return (
           <div>
            <input type = "checkbox" checked = {this.props.todos.completed}  />
            <p> {this.props.todos.text}</p>
          </div>    
        );
    }
}

export default TodoItem;