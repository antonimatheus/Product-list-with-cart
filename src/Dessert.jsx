// Dessert.js
import React from 'react';
import '../src/Dessert.css'

const Dessert = ({ name, category, price, image }) => {
    return (
        <div className="dessert--Container">
            <div className='dessert--Card'>
                <img src={image.desktop} alt={name} />
                <button>Add to Cart</button>
                <h2>{name}</h2>
                <p>{category}</p>
                <p>${price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Dessert;
