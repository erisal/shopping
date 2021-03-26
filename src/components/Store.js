import React from 'react';
import Item from './Item';

const Store = ({addToCart, cartCount, currentCart}) => {
    const inventory = [
        {
            name: 'REI Half Dome',
            price: 279.09,
            image: '../images/01.jpg'
        },
        {
            name: 'The North Face Stormbreak 2',
            price: 159.09,
            image: '../images/02.jpg'
        },
        {
            name: 'Nemo Hornet 1',
            price: 329.95,
            image: '../images/03.jpg'
        },
        {
            name: 'REI Flash Air 1',
            price: 249.00,
            image: '../images/04.jpg'
        },
        {
            name: 'Big Agnes Tiger Wall UL 3',
            price: 469.95,
            image: '../images/05.jpg'
        },
        {
            name: 'MSR Zoic 3',
            price: 299.95,
            image: '../images/06.jpg'
        },

    ];

return (
    <div>
        <h1>This is the store</h1>
        <div id="itemContainer">
            {inventory.map((item) => 
            <div key={item.name}>
            <Item addToCart={addToCart} name={item.name} price={item.price} image={item.image}/> 
            </div>
            )}
        </div>
    </div>
);
};

export default Store;