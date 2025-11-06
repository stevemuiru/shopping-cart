import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { useState } from "react";
import './App.css';

const products = [

  {id: 1, name: "Detroit style jacket", price: 126, image: "/images/Carhartt exports/a135d43f87141338e967fbf723a74853.jpg" },
  {id : 2, name: "Loose Sid Trousers", price: 80, image: '/images/Carhartt exports/0e1869609b94c79cbc74d2ef207185ec.jpg' },
  {id : 3, name: "Relaxed fit shirt", price: 12, image: '/images/Carhartt exports/81144753f985618d03bba7084149a274.jpg' },
  {id : 4, name: "Hamilton waterproof Boots", price: 190, image: '/images/Carhartt exports/530029e4c712b77ed7580e798d1b25de.jpg' },
  {id : 5, name: "Relaxed fit duck overall", price: 280, image: '/images/Carhartt exports/88e8724b8cfa23109f2382a8772a5174.jpg' },
  {id : 6, name: "Knit Embossed Beenie", price: 20, image: '/images/Carhartt exports/2c713939d19a578ac1f615e3c5e8ed42.jpg' }
]

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
      <Route path="/shop" element={<Shop products={products} addToCart={addToCart} cart={cart} />} />
      <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
    </Routes>
  );
}

export default App;
