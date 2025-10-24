import React from 'react'
import { useState } from 'react' 

export function Shop(){

    const[cart, setCart] = useState([])


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
        const updatedItem = cart.map(item => {
            if(item.id === clickedProduct.id) {
                return {...item, quantity: item.quantity + 1 }
            }
            return item;
        });
        setCart(updatedItem)
      } else { 
        const newItem = {...clickedProduct, quantity : 1 }
        setCart([...cart, newItem])
      }
    }

    return (
        <div>
            <h2>Our Products</h2>
            
            <div className='product-display'>
            <div className='grid'>
                {products.map(product => (
                  <div className='card' key={product.id}>
                  <img src={product.image} className='product-img' alt='a jacket' />
                  <div className='product-details'>
                        <h3>{product.name}</h3>  
                      <p className='price'>{product.price}</p>
                      <button type='button' onClick={() => handleClick(product)}>Add to cart</button>
                  </div>
                  </div>
                ))}
            </div>

            <div className='grid'>
                <div className='card' key={product.id}>
                <img src={product.image} className='product-img' alt='a sid trouser' />
                <div className='product-details'>
                    <h3>{product.name}</h3>
                    <p className='price'>{product.price}</p>
                    <button type='button' onClick={() => handleClick(product)}>Add to cart</button>
                </div>
                </div> 
               
            </div>

            <div className='grid'>
                
                  <div className='card' key={product.id}>
                  <img src={product.image} className='product-img' alt='a tshirt' />
                  <div className='product-details'>
                      <h3>{product.name}</h3>
                      <p className='price'>{product.price}</p>
                      <button type='button' onClick={() => handleClick(product)}>Add to cart</button>
                  </div>
                  </div> 
               
            </div>

            <div className='grid'>
                   <div className='card' key={product.id}>
                   <img src={product.image} className='product-img' alt='a pair of boots' />
                   <div className='product-details'>
                       <h3>{product.name}</h3>
                       <p className='price'>{product.price}</p>
                       <button type='button' onClick={() => handleClick(product)}>Add to cart</button>
                   </div>
                   </div> 
              
            </div>

            <div className='grid'>
                
                   <div className='card' key={product.id}>
                   <img src={product.image} className='product-img' alt='an overall' />
                   <div className='product-details'>
                       <h3>{product.name}</h3>
                       <p className='price'>{product.price}</p>
                       <button type='button' onClick={() => handleClick(product)}>Add to cart</button>
                   </div>
                   </div> 
              
            </div>

            <div className='grid'>
                
                  <div className='card' key={product.id}>
                  <img src={product.image} className='product-img' alt='a beenie' />
                  <div className='product-details'>
                      <h3>{product.name}</h3>
                      <p className='price'>{product.price}</p>
                      <button type='button' onClick={() => handleClick(product)}>Add to cart</button>
                  </div>
                  </div> 
        

               </div>
            </div>


        </div>
    )
}