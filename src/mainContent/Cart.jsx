import React from "react"; // Importa a biblioteca React
import "./Cart.css"; // Importa os estilos para o carrinho

import removeItem from "../assets/images/icon-remove-item.svg"; // Ícone para remover item
import carbonNeutral from "../assets/images/icon-carbon-neutral.svg"; // Ícone de entrega neutra em carbono
import emptyCart from "../assets/images/illustration-empty-cart.svg"; // Ilustração para carrinho vazio

function Cart({ cartItems, removeFromCart }) { // Componente Cart que recebe os itens do carrinho e a função de remover item como props
    // Função para calcular o total do pedido
    const calculateTotal = () => {
        // Reduz os itens do carrinho a um total acumulado multiplicando preço pela quantidade de cada item
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <>
            {cartItems.length === 0 ? ( // Verifica se o carrinho está vazio
                // Renderiza a imagem do carrinho vazio e uma mensagem
                <>
                    <div className="cart--Title">
                            {/* Exibe a quantidade total de itens no carrinho */}
                            <h1>Your Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</h1>
                        </div>
                    <div className="cart--Empty">
                        <img src={emptyCart} alt="Empty Cart" />
                        <p>Your added item will appear here</p>
                    </div>
                </>
                
            ) : ( // Se o carrinho não estiver vazio, renderiza os itens do carrinho
                <>
                    <div className="cart--Title">
                        {/* Exibe a quantidade total de itens no carrinho */}
                        <h1>Your Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</h1>
                    </div>
                    {/* Mapeia sobre os itens do carrinho e renderiza cada item */}
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart--Order">
                            <div className="cart--Order--info">
                                <div>
                                    <div className="cart--Order--h1">
                                        <h2>{item.name}</h2>
                                    </div>
                                    <div className="cart--Order--quantity">
                                        <div className="cart--Order--quantityh3">
                                            <h3>{item.quantity}x</h3>
                                        </div>
                                        <div className="cart--Order--quantityp">
                                            <p>@ ${item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="cart--Order--quantitym">
                                            <p>${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart--Order--delete">
                                    <p>
                                        <img src={removeItem} alt="Remove Item" onClick={() => removeFromCart(item.name)} />
                                    </p>
                                </div>
                            </div>
                            <div className="cart--Line">
                                <span></span>
                            </div>
                        </div>
                    ))}

                    <div className="cart--Total">
                        <p>Order Total</p>
                        <h2>${calculateTotal()}</h2>
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
            )}
        </>
    );
}

export default Cart; // Exporta o componente Cart
