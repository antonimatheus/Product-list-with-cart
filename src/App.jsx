import { useEffect, useState } from 'react';
import './App.css';
import data from './mainContent/data.js';
import Dessert from './mainContent/Dessert.jsx';
import Cart from './mainContent/Cart.jsx';

function App() {
    // Estado para armazenar os itens de sobremesas
    const [desserts, setDesserts] = useState([]);
    // Estado para armazenar os itens do carrinho
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Simula uma chamada de API para buscar dados JSON
        const fetchData = async () => {
            // Dados são importados do arquivo data.js
            setDesserts(data);
        };

        fetchData();
    }, []);

    // Função para adicionar itens ao carrinho
    const addToCart = (product) => {
        setCartItems(prevItems => {
            // Verifica se o item já existe no carrinho
            const itemIndex = prevItems.findIndex(item => item.name === product.name);
            if (itemIndex > -1) {
                // Se o item já existe, atualiza a quantidade
                const updatedItems = [...prevItems];
                updatedItems[itemIndex] = { ...updatedItems[itemIndex], quantity: product.quantity };
                return updatedItems;
            } else {
                // Se o item não existe, adiciona ao carrinho
                return [...prevItems, product];
            }
        });
    };

    // Função para remover itens do carrinho
    const removeFromCart = (productName) => {
        setCartItems(prevItems => prevItems.filter(item => item.name !== productName));
    };

    return (
        <div className='container'>
            <main className='app--Container'>
                <h1>Desserts</h1>

                {/* Mapeia sobre os dados das sobremesas e renderiza o componente Dessert para cada item */}
                {desserts.map((dessert, index) => (
                    <Dessert
                        key={index}
                        image={dessert.image}
                        category={dessert.category}
                        name={dessert.name}
                        price={dessert.price}
                        addToCart={addToCart} // Passa a função addToCart como prop
                    />
                ))}
            </main>
            <aside className='Cart'>
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> {/* Passa os itens do carrinho e a função removeFromCart como prop */}
            </aside>
        </div>
    );
}

export default App;
