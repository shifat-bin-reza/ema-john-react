import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart }) => {
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
      <button className="btn-clear">
        <span>Clear Cart</span>
        <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faTrash} />
      </button>
      <button className="btn-review">
        <span>Review Order</span>
        <FontAwesomeIcon style={{ marginLeft: "5px" }} icon={faArrowRight} />
      </button>
    </div>
  );
};

export default Cart;
