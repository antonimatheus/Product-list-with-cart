import React, { useState } from "react";
import cart from "../assets/images/icon-add-to-cart.svg";

import plus from '../assets/images/icon-increment-quantity.svg'
import minus from '../assets/images/icon-decrement-quantity.svg'

import "./Dessert.css"

function SetToCart() {
    const [addedToCart, setAddedToCart] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleClick = () => {
        setAddedToCart(!addedToCart);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            {addedToCart ? (
                <button className="cart--Button--quantity">
                    <div>
                        <div onClick={handleDecrease}><img src={minus} alt="minus" /></div>
                        <span>{quantity}</span>
                        <div onClick={handleIncrease}><img src={plus} alt="plus" /></div>
                    </div>
                </button>
            ) : (
                <button onClick={handleClick}>
                    <img src={cart} alt="cart" /> Add to Cart
                </button>
            )}
        </div>
    );
}

export default SetToCart;
