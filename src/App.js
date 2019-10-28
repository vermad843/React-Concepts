import React, { Component } from 'react';


// function App() {
//   return (
//    <div>
//        <h1>{props.whatever}</h1>
//    </div>
//   );
// }





class App extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.whatever}</h1>
      </div>
    );
  }
}

export default App;