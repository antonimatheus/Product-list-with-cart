// src/App.js
import { useEffect, useState } from 'react';
import './App.css';
import data from './mainContent/data.js';
import Dessert from './mainContent/Dessert.jsx';
import Cart from './mainContent/Cart.jsx';

function App() {
    const [desserts, setDesserts] = useState([]);

    useEffect(() => {
        // Simula uma chamada de API para buscar dados JSON
        const fetchData = async () => {
            // Dados são importados do arquivo data.js
            setDesserts(data);
        }

        fetchData();
    }, []);

    return (
        <div className='container'>
            <main className='app--Container'>
                <h1>Desserts</h1>

                {desserts.map((dessert, index) => (
                    <Dessert
                        key={index}
                        image={dessert.image}
                        category={dessert.category}
                        name={dessert.name}
                        price={dessert.price}
                    />
                ))}
            </main>
            <aside className='Cart'>
                <Cart/>
            </aside>
        </div>
    );
}

export default App;
