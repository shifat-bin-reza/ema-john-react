import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;

    return (
        <div className='product-container'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>Price: ${price}</p>

                <p>
                    <small>Manufacturer: {seller}</small> <br />
                    <small>Ratings: {ratings} stars</small>
                </p>
            </div>
            <button onClick={() => props.addToCart(props.product)} className='add-cart-button'>
                Add to Cart
                <FontAwesomeIcon style={{ marginLeft: '5px' }} icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;