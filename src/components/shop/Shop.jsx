import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import { addToDB, getShoppingCart } from "../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id
    for (const id in storedCart) {
      // step 2: find products
      const matchProduct = products.find((product) => product.id === id);
      if (matchProduct) {
        // step 3: add quantity
        const quantity = storedCart[id];
        matchProduct.quantity = quantity;
        // step 4: add the match product to the saved cart
        savedCart.push(matchProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const arrToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDB(product.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={arrToCart}
          ></Product>
        ))}
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
