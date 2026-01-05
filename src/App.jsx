import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { useState } from "react";
import './App.css';
import jacketImg from "./assets/images/carhartt/jacket.png";
import trouserImg from "./assets/images/carhartt/trouser.png";
import tshirtImg from "./assets/images/carhartt/tshirt.png";
import bootsImg from "./assets/images/carhartt/boots.png";
import overallImg from "./assets/images/carhartt/overall.png";
import beenieImg from "./assets/images/carhartt/beenie.png";


const products = [

  {id: 1, name: "Detroit style jacket", price: 126, image: jacketImg },
  {id : 2, name: "Loose Sid Trousers", price: 80, image: trouserImg },
  {id : 3, name: "Relaxed fit shirt", price: 12, image: tshirtImg },
  {id : 4, name: "Hamilton waterproof Boots", price: 190, image: bootsImg },
  {id : 5, name: "Relaxed fit duck overall", price: 280, image: overallImg },
  {id : 6, name: "Knit Embossed Beenie", price: 20, image: beenieImg }
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
