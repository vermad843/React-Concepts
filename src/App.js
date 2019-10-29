import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';
import './App.css';
const todoItems = todosData.map((item) => {
  return <TodoItem key = {item.id} item = {item}/>
})


function App() {
 return (
  <div className = "todo-list">
  {todoItems}
</div> 
 );
}


export default App;