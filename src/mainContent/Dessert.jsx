import React from 'react';
import '../mainContent/Dessert.css';
import SetToCart from './SetToCart';

const Dessert = ({ name, category, price, image, addToCart }) => {
    return (
        <div className='dessert--Card'>
            {/* Exibe a imagem da sobremesa */}
            <img src={image.desktop} alt={name} />

            {/* Componente para adicionar ao carrinho */}
            <SetToCart name={name} price={price} addToCart={addToCart} />

            {/* Exibe a categoria, nome e preço da sobremesa */}
            <p>{category}</p>
            <h2>{name}</h2>
            <h4>${price.toFixed(2)}</h4>
        </div>
    );
};

export default Dessert;
