import React from 'react';
import '../mainContent/Dessert.css';
import SetToCart from './SetToCart';

const Dessert = ({ name, category, price, image }) => {
    return (
        <div className='dessert--Card'>
            <img src={image.desktop} alt={name} />
            <SetToCart />
            <p>{category}</p>
            <h2>{name}</h2>
            <h4>${price.toFixed(2)}</h4>
        </div>
    );
};

export default Dessert;
