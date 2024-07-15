// src/App.js
import { useEffect, useState } from 'react';
import './App.css';
import Dessert from './Dessert.jsx';
import data from './data.js';

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
            <aside>
                Your Cart
            </aside>
        </div>
    );
}

export default App;
