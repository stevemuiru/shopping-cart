import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { useState } from "react";
import './App.css';

function App() {

  const [cart, setCart] = useState([]);

  
  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    })
  }

  const removeFromCart = (productId) => {
    const updatedArray = cart
      .map(item => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return null
          }
        }
        return item
      })
      .filter(Boolean)
  
    setCart(updatedArray)
  }
  

  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop products={product} addToCart={addToCart} cart={cart} />} />
      <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
    </Routes>
  );
}

export default App;
