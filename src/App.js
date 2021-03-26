import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Store from './components/Store';
import Cart from './components/Cart';
import Home from './components/Home';
import LocalStorage from './components/LocStorage';

function App() {

const localStor = LocalStorage.getLocal();
const [currentCart, setCurrentCart] = useState(localStor || []);

const getCartTotal = () => {
  const total =  currentCart.reduce((acc, curr) => {
    return acc + (curr.price * curr.quantity);
  }, 0);
  console.log('cart total: ' + total);
  return total;
}

const getCartQuantity = () => {
  const quantity = currentCart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);
  console.log('cart quantity: ' + quantity);
  return quantity;
}
const [cartCount, setCartCount] = useState(getCartQuantity() || 0);
const [cartTotal, setCartTotal] = useState(getCartTotal() || 0);

useEffect(() => {
  setCartCount(getCartQuantity());
  setCartTotal(getCartTotal());
  LocalStorage.copyToLocal(currentCart);
}, [ currentCart ]);
//}, [ currentCart ]);

const addToCart = ( name, price, quantity ) => {
  let newCart = [...currentCart];
  let itemExists = false;
  for (let i=0; i<newCart.length; i++) {
    // find if item already in cart
    if (newCart[i].name === name) {
      // if new quantity results in < 1, delete item
      if (newCart[i].quantity + quantity < 1) {
        newCart.splice(i, 1);
        itemExists = true;
      }

      // otherwise, update quantity
      else {
        newCart.splice(i, 1, {name: newCart[i].name, price: newCart[i].price, quantity: newCart[i].quantity + quantity})
        itemExists = true;
      }
    }
  }
  if (!itemExists) {
    newCart.push({name: name, price: price, quantity: quantity});
  }

  setCurrentCart(newCart);
  // updateCartTotal(price * quantity);
  // updateCartCount(quantity);
  console.log ('cartTotalAdd: ' + cartTotal + 'cart' + price * quantity);
}

// const updateCartCount = (quantity) => {
//   setCartCount(cartCount + quantity);
// }

// const updateCartTotal = (cost) => {
//   console.log ('cartTotal: ' + cartTotal + 'cart' + cost);
//   setCartTotal(cartTotal + cost);
// }

  return (
    <div className="App">
      
      <BrowserRouter>
      <Nav cartCount = {cartCount} cartTotal = {cartTotal}/>
      <button onClick={() => LocalStorage.resetLocal()}>reset local</button>
        <Switch>
          <Route path='/cart' render={(props) => <Cart {...props} addToCart = {addToCart} cartCount = {cartCount} currentCart = {currentCart}/>} />
          <Route path='/store' render={(props) => <Store {...props} addToCart = {addToCart} cartCount = {cartCount} currentCart = {currentCart} />} />
          <Route path='/' render={(props) => <Home {...props} cartCount = {cartCount} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
