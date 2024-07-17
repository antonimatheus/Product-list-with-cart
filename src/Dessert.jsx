// Dessert.js
import React from 'react';
import '../src/Dessert.css'

import cart from "./assets/images/icon-add-to-cart.svg"

const Dessert = ({ name, category, price, image }) => {
    return (
        <div className='dessert--Card'>
            <img src={image.desktop} alt={name} />
            <button> <img src={cart} alt="cart" /> Add to Cart</button>
            <p>{category}</p>
            <h2>{name}</h2>
            <h4>${price.toFixed(2)}</h4>
        </div>
    );
};

export default Dessert;
