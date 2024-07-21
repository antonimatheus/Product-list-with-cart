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
        <div className="dessert--CardButton">
            {addedToCart ? (
                <button className="cart--Button--quantity">
                    <div onClick={handleDecrease} className="cart--Button--quantityMinus">
                        <img src={minus} alt="minus"/>
                    </div>
                    <div>{quantity}</div>
                    <div onClick={handleIncrease}><img src={plus} alt="plus" className="cart--Button--quantityPlus" /></div>
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
