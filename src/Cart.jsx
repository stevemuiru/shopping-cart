import React from "react";

export function Cart({ cart, removeFromCart }) {
  if (cart.length === 0) {
    return <p>Your cart is empty, continue shopping.</p>;
  }

  

  return (
    <div className="display">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="cart-img"
            />
            <span>{product.name}</span>
            <span>${product.price}</span>
            <span>Qty: {product.quantity}</span>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
