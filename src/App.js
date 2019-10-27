import React from 'react';
import './App.css';
import Products from './Products';//is a array of products
import Product from './Product';//is a component 

function App() {
  const productComponent = Products.map((item) => {
    return <Product key = {item.id} product = {item}/>
  })
   return (
     <div>
      {productComponent}
     </div>
   );
}

export default App;