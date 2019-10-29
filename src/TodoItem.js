import React from 'react';

function click() {
  console.log('selected');
}




function TodoItem(props) {
  return (
      <div className = "todo-item">
          <input type = "checkbox" onClick = {click}/>
          <p>{props.item.text}</p>
      </div>
  );
}

export default TodoItem; 