import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


function App() {
  return (
    <div>
      <ul>
        <li>work </li>
        <li>work harder</li>
        <li>hardest</li>
     </ul>
  </div>
  );   
}






ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
