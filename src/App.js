import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import Main from './components/main';
import Footer from './components/footer';
import './App.css';




function App() {
  return (
    <div className = "App">
      <Nav/>
      <Main/>
      <Footer/>
   </div>
  );   
}


export default App;