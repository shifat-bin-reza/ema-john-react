import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);

  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = (total * 7) / 100;
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart-container">
      <h3 className="title-order-summery">Order summery</h3>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping} </p>
      <p>Tax: ${tax} </p>
      <h4>Grand Total: ${grandTotal}</h4>
    </div>
  );
};

export default Cart;
