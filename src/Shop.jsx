import React from 'react'
import { useState } from 'react' 

export function shop(){

    const handleClick = () => {
      
    }

    return (
        <div>
            <h2>Our Products</h2>
            
            <div className='product-display'>
            <div className='grid'>
               <div className='card'>
                <img src='src/images/Carhartt exports/a135d43f87141338e967fbf723a74853.jpg' className='product-img' alt='a jacket' />
                <div className='product-details'>
                    <h3>Detroit style jacket</h3>
                    <p className='price'>126$</p>
                    <button type='submit'>Add to cart</button>
                </div>
                </div>
            </div>

            <div className='grid'>
               <div className='card'>
                <img src='src/images/Carhartt exports/0e1869609b94c79cbc74d2ef207185ec.jpg' className='product-img' alt='a sid trouser' />
                <div className='product-details'>
                    <h3>Loose Sid Trousers</h3>
                    <p className='price'>120$</p>
                    <button type='button'>Add to cart</button>
                </div>
                </div> 
            </div>

            <div className='grid'>
               <div className='card'>
                <img src='src/images/Carhartt exports/81144753f985618d03bba7084149a274.jpg' className='product-img' alt='a tshirt' />
                <div className='product-details'>
                    <h3>Relaxed fit shirt</h3>
                    <p className='price'>12$</p>
                    <button type='submit'>Add to cart</button>
                </div>
                </div> 
            </div>

            <div className='grid'>
               <div className='card'>
                <img src='/images/Carhartt exports/530029e4c712b77ed7580e798d1b25de.jpg' className='product-img' alt='a pair of boots' />
                <div className='product-details'>
                    <h3>Hamilton waterproof Boots</h3>
                    <p className='price'>190$</p>
                    <button type='button'>Add to cart</button>
                </div>
                </div> 
            </div>

            <div className='grid'>
               <div className='card'>
                <img src='src/images/Carhartt exports/88e8724b8cfa23109f2382a8772a5174.jpg' className='product-img' alt='an overall' />
                <div className='product-details'>
                    <h3>Relaxed fit duck overall</h3>
                    <p className='price'>280$</p>
                    <button type='submit'>Add to cart</button>
                </div>
                </div> 
            </div>

            <div className='grid'>
               <div className='card'>
                <img src='src/images/Carhartt exports/2c713939d19a578ac1f615e3c5e8ed42.jpg' className='product-img' alt='a beenie' />
                <div className='product-details'>
                    <h3>Knit Embossed Beenie</h3>
                    <p className='price'>20$</p>
                    <button type='button'>Add to cart</button>
                </div>
                </div> 
            </div>
            </div>


        </div>
    )
}