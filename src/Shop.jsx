import React from 'react' 

export function shop(){
    return (
        <div>
            <h2>Our Products</h2>
            
            <div className='product-display'>
            <div className='grid'>
               <div className='card'>
                <img src='' alt='a jacket' />
                <div className='product-details'>
                    <h3>Detroit style jacket</h3>
                    <p className='price'>126$</p>
                    <button>Add to cart</button>
                </div>
                </div>
            </div>

            <div className='grid'>
               <div className='card'>
                <img src='' alt='a sid trouser' />
                <div className='product-details'>
                    <h3>Loose Sid Trousers</h3>
                    <p className='price'>60$</p>
                    <button>Add to cart</button>
                </div>
                </div> 
            </div>

            <div className='grid'>
               <div className='card'>
                <img src='' alt='a tshirt' />
                <div className='product-details'>
                    <h3>Relaxed fit shirt</h3>
                    <p className='price'>12$</p>
                    <button>Add to cart</button>
                </div>
                </div> 
            </div>

            <div className='grid'>
               <div className='card'>
                <img src='' alt='a pair of boots' />
                <div className='product-details'>
                    <h3>Hamilton waterproof Boots</h3>
                    <p className='price'>90$</p>
                    <button>Add to cart</button>
                </div>
                </div> 
            </div>

            <div className='grid'>
               <div className='card'>
                <img src='' alt='an overall' />
                <div className='product-details'>
                    <h3>Relaxed fit duck overall</h3>
                    <p className='price'>80$</p>
                    <button>Add to cart</button>
                </div>
                </div> 
            </div>

            <div className='grid'>
               <div className='card'>
                <img src='' alt='a beenie' />
                <div className='product-details'>
                    <h3>Knit Embossed Beenie</h3>
                    <p className='price'>7$</p>
                    <button>Add to cart</button>
                </div>
                </div> 
            </div>
            </div>


        </div>
    )
}