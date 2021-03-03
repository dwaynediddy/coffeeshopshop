import React, { useState, useEffect } from 'react'
import './App.css';
import { commerce } from './components/lib/commerce'
import Products from './components/Products'


function App() {
  const [ products, setProdcuts ] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProdcuts(data)
  }

  useEffect(() => fetchProducts(), [])

  return (
    <div className="App">
      <Products products={products} />
    </div>
  );
}

export default App;
