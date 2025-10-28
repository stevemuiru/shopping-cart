import React from "react";

export function Cart({cart}) {
    <h2>Your Cart</h2>
 if(cart.length === '') {
    return 'Cart is empty'
 } else {
    const listItems = cart.map(product => {
        <li>{image}</li>,
        <li>{name }</li>,
        <li>{price}</li>,
        <li>{quantity}</li>
    })
    return <ul>listItems</ul>
 }
}