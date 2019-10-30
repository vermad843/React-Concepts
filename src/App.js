import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';
import './App.css';
class App extends Component {
    render() {
      const todoItems = todosData.map((todos) => {
          return <TodoItem key = {todos.id} todos = {todos}/>
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