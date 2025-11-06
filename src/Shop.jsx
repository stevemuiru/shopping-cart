import React from 'react'
import { Link } from "react-router-dom"
import { Cart } from './Cart'
import { useState } from 'react' 

export function Shop({products,addToCart,cart}){


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
                  <button type='button' onClick={() => addToCart(product)}>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
    
        {cart.length > 0 && (
          <div className='cart-link'>
            <Link to="/cart">Proceed to Cart →</Link>
          </div>
        )}
      </div>
    ) 
    
    }  
    
