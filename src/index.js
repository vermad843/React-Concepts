import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo() {
    return (
      <div>
        <h1 >Vishnu</h1>
        <p>I Love Coding!!!!</p>
        <ul>
           <li>London</li>
           <li>Paris</li>
           <li>NewYork</li>
       </ul>
    </div> 
    );
}



ReactDOM.render(
  <MyInfo/>
    , document.getElementById("root"))