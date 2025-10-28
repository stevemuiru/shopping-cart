import React from "react";

export function Cart({cart}) {
   if(cart.length === 0){
      return "Your cart is empty, continue shopping."
   } else{
      const listItems = cart.map((product, index) => {
         return (
            <ul>
             <li key={index}>[product image], [product name], [price], [quantity] [remove button]</li>
            </ul>  
         )
      })
   }
}