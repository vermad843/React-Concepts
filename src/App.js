import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';
import './App.css';
class App extends Component {
    constructor() {
        super();
        this.state = {
            todos : todosData
        }

    }
    render() {
        const {todos} = this.state;
      const todoItems = todos.map((todos) => {
          return <TodoItem key = {todos.id} todos  = {todos}/>
      });
        return (
            <div className = "list">
              <h1>Best Player In The World!!!*</h1>
               {todoItems}
            </div>
            
        );
    }
}

export default App;