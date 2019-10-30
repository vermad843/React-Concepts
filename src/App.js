// Todo App- Phase 2 


import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './App.css';
class App extends Component {
    render() {
        return (
            <div className = "list">
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
                <TodoItem/>
            </div>
            
        );
    }
}

export default App;