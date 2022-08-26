import React, { useState, useEffect } from 'react';
import '../App.css';
import OrderList from './OrderList';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

const shoppingItems = [
  { id: 1, name: "Cup", price: 100 },
  { id: 2, name: "Bottle", price: 80 },
  { id: 3, name: "Jug", price: 120 },
  { id: 4, name: "Chair", price: 1000 },
  { id: 5, name: "Table", price: 2000 },
  { id: 6, name: "Mug", price: 50 },
  { id: 7, name: "Cupboard", price: 7000 },
  { id: 8, name: "Drawer", price: 1500 },
]

function App() {

  return (
    <div className="App">
      <h1>Shopping Cart</h1>

      <OrderList shoppingItems={shoppingItems} />

      <Cart />

    </div>
  );
}

export default App;
