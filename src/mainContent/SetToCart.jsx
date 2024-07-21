import React, { useState } from "react";
import cart from "../assets/images/icon-add-to-cart.svg";
import "./Dessert.css";

function SetToCart({ name, price, addToCart }) {
    // Estado para rastrear se o item foi adicionado ao carrinho
    const [addedToCart, setAddedToCart] = useState(false);
    // Estado para rastrear a quantidade do item
    const [quantity, setQuantity] = useState(1);

    // Função para lidar com o clique do botão de adicionar ao carrinho
    const handleClick = () => {
        if (!addedToCart) {
            setAddedToCart(true);
            // Adiciona o item ao carrinho com a quantidade atual
            addToCart({ name, price, quantity });
        }
    };

    // Função para incrementar a quantidade
    const handleIncrease = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        // Atualiza a quantidade do item no carrinho
        addToCart({ name, price, quantity: newQuantity });
    };

    // Função para decrementar a quantidade
    const handleDecrease = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            // Atualiza a quantidade do item no carrinho
            addToCart({ name, price, quantity: newQuantity });
        }
    };

    return (
        <div className="dessert--CardButton">
            {addedToCart ? (
                <button className="cart--Button--quantity">
                    <div onClick={handleDecrease} className="cart--Button--quantityMinus">
                        <i className="fa-solid fa-minus"></i>
                    </div>
                    <div>
                        {quantity}
                    </div>
                    <div onClick={handleIncrease} className="cart--Button--quantityPlus">
                        <i className="fa-solid fa-plus"></i>
                    </div>
                </button>
            ) : (
                <button onClick={handleClick} className="cart--Button--add">
                    <img src={cart} alt="cart" /> Add to Cart
                </button>
            )}
        </div>
    );
}

export default SetToCart;
