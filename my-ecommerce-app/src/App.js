import React from 'react';
import Productpage from './components/Productpage.js'; 
import './App.css';
import { CartContext, CartContextProvider } from './components/cart.js';


function App() {
  return (
    <div className="App">
      <CartContextProvider>
          <Productpage />

          
      </CartContextProvider>
    </div>
  );
}


export default App;
