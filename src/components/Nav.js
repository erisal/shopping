import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ( {cartCount, cartTotal} ) => {

return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/cart">Cart</Link>
        <h3>Cart: {cartCount} - ${cartTotal.toFixed(2)}</h3>
    </div>
);
};

export default Nav;