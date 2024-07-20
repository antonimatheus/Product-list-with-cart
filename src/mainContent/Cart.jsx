import React from "react";
import "./Cart.css"

import removeItem from "../assets/images/icon-remove-item.svg"
import carbonNeutral from "../assets/images/icon-carbon-neutral.svg"

function Cart() {
    return (
        <>
            <div className="cart--Title">
                <h1>Your Cart (7)</h1>
            </div>
            <div className="cart--Order">
                <div className="cart--Order--info">
                    <div>
                        <div className="cart--Order--h1">
                            <h2>Classic Tiramisu</h2>
                        </div>
                        <div className="cart--Order--quantity">
                            <div className="cart--Order--quantityh3">
                                <h3>1x</h3>
                            </div>
                            <div className="cart--Order--quantityp">
                                <p>@ 5.50</p>
                            </div>
                            <div className="cart--Order--quantitym">
                                <p>$5.50</p>
                            </div>
                        </div>
                    </div>
                    <div className="cart--Order--delete">
                        <p> <img src={removeItem} alt="Remove Item" /> </p>
                    </div>
                </div>
                
                <div className="cart--Line">
                    <span></span>
                </div>
            </div>

            <div className="cart--Total">
                <p>Order Total</p>
                <h2>$46.50</h2>
            </div>
            
            <div className="cart--Text">
                <img src={carbonNeutral} alt="Carbon Neutral" />
                <p>This is <span>carbon-neutral</span> delivery</p>
            </div>
            
            <div className="cart--Button">
                <button>
                    Confirm Order
                </button>
            </div>
        </>
    )
}

export default Cart;