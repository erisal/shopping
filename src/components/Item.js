import React, { useState } from 'react';

const Item = ( {addToCart, name, price, image} ) => {
    const [toAdd, setToAdd] = useState(1);

    const addOne = () => {
        setToAdd(toAdd + 1);
    }

    const remOne = () => {
        if (toAdd > 0) {
            setToAdd(toAdd - 1);
        }
    }

return (
    <div className='itemTile'>
        <img src={image} alt="product"/>
        <h2>{name}</h2>
        <h3>${price}</h3>
        <button onClick={remOne}>- </button>{toAdd} <button onClick={addOne}>+ </button>
        <button onClick={()=>addToCart(name, price, toAdd)}>Add</button>
    </div>
);
};

export default Item;