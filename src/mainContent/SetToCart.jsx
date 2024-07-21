import React, { useState } from "react";
import cart from "../assets/images/icon-add-to-cart.svg";
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
                        <i class="fa-solid fa-minus"></i>
                    </div>
                    <div>
                        {quantity}
                    </div>
                    <div onClick={handleIncrease} className="cart--Button--quantityPlus">
                        <i class="fa-solid fa-plus"></i>
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
