import React from "react";

export function Cart({ cart, removeFromCart }) {
  if (cart.length === 0) {
    return <p className="cart-p">Your cart is empty, continue shopping.</p>;
  }

  

  return (
    <div className="cart-display">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index} className="cart-item">
            <img
              src={product.image}
              alt={product.name}
              className="cart-img"
            />
            <span className="cart-name">{product.name}</span>
            <span className="cart-name">${product.price}</span>
            <span className="cart-name">Qty: {product.quantity}</span>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
