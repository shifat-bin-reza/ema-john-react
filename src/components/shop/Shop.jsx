import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import { addToDB, getShoppingCart } from "../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    // step 1: get id
    for (const id in storedCart) {
      // step 2: find products
      const matchProduct = products.find((product) => product.id === id);
    }
  }, [products]);

  let [cart, setCart] = useState([]);
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
