import React from 'react';


const Cart = ( { addToCart, cartCount, currentCart} ) => {
    
return (
    <>
        <h1>This is your cart</h1>
        {currentCart.map((item) => 
            <div key={item.name}>
            <h2>{item.name}</h2>
            <h3>{item.price} - <button onClick={() => addToCart(item.name, item.price, -1)}>-</button>{item.quantity} <button onClick={() => addToCart(item.name, item.price, 1)}>+</button></h3>
            </div>
        )}
    </>
);
};

export default Cart;

// addToCart = {addToCart} cartCount = {cartCount} currentCart = {currentCart} />} />
// cartCount = {cartCount} currentCart = {currentCart}