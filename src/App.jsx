import { useEffect, useState } from 'react'
import './App.css'
import Dessert from './Dessert'

function App() {

const [desserts, setDesserts] = useState([])

// Simula uma chamada de API para buscar dados JSON
useEffect(() => {
  const fetchData = async () => {
    // Supondo que você tenha um arquivo JSON em public/data.json
    const response = await fetch('./data.json');
    const data = await response.json();
    setDesserts(data)
  }
  
  fetchData()
}, [])

  return (
    <div className='container'>
      <main className='app--Container'>
        <h1>Desserts</h1>

        {desserts.map((dessert, index) =>(
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
  )
}

export default App
