import React, { Component } from 'react';


class TodoItem extends Component {
    render() {
        return (
           <div>
            <input type = "checkbox" />
            <p> Important Text Go Here!!!</p>
          </div>    
        );
    }
}

export default TodoItem;