import React from 'react'
import { Link } from "react-router-dom"
import { Cart } from './Cart'
import { useState } from 'react' 

export function Shop({cart, setCart}){

    


  const products = [

        {id: 1, name: "Detroit style jacket", price: 126, image: "/images/Carhartt exports/a135d43f87141338e967fbf723a74853.jpg" },
        {id : 2, name: "Loose Sid Trousers", price: 80, image: '/images/Carhartt exports/0e1869609b94c79cbc74d2ef207185ec.jpg' },
        {id : 3, name: "Relaxed fit shirt", price: 12, image: '/images/Carhartt exports/81144753f985618d03bba7084149a274.jpg' },
        {id : 4, name: "Hamilton waterproof Boots", price: 190, image: '/images/Carhartt exports/530029e4c712b77ed7580e798d1b25de.jpg' },
        {id : 5, name: "Relaxed fit duck overall", price: 280, image: '/images/Carhartt exports/88e8724b8cfa23109f2382a8772a5174.jpg' },
        {id : 6, name: "Knit Embossed Beenie", price: 20, image: '/images/Carhartt exports/2c713939d19a578ac1f615e3c5e8ed42.jpg' }
    ]

    


    const handleClick = (clickedProduct) => {
      const foundItem = cart.find(item => item.id === clickedProduct.id)
      
      if(foundItem) {
        const updatedItems = cart.map(item => {
            if(item.id === clickedProduct.id) {
                return {...item, quantity: item.quantity + 1 } 
            }
            return item;
        });
        setCart(updatedItems)
      } else { 
        const newItem = {...clickedProduct, quantity : 1 }
        setCart([...cart, newItem])
      }
    }

   const removeFromCart = (productId) => {
    const updatedArray = cart.map(item => {
      if(item.id === productId) {
        if(item.quantity > 1) {
          return {...item, quantity: item - 1}
        } else {
          return null
        }
      }
      return item
    }).filter(Boolean) 
    
    setCart(updatedArray)
   }

    return (
        <div>
          <h2>Our Shop</h2>
          <div className='product-display'>
            <div className='grid'>
              {products.map(product => (
                <div className='card' key={product.id}>
                  <img src={product.image} className='product-img' alt={product.name} />
                  <div className='product-details'>
                    <h3>{product.name}</h3>
                    <p className='price'>{product.price}$</p>
                    <button type='button' onClick={() => handleClick(product)}>Add to cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {cart.length > 0 && (
           <div className="cart-link">
            <Link to="/cart">Proceed to Cart →</Link>
         </div>
)}
        </div>
      )
} 

