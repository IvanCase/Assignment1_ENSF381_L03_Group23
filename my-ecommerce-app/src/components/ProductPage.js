import React, { useState } from 'react';
import { useContext } from 'react';
import products from '../data/product.js';
import { CartContext } from "../components/cart.js";

const Productpage = (props) => {
    const { AddToCart, cartItems, RemoveFromCart } = useContext(CartContext);
    const [hoveredProductId, setHoveredProductId] = useState(null);

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="ProductItem" style={{ alignItems: 'flex-start' }}>
                {products.map((product) => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
                        <p
                            onMouseEnter={() => setHoveredProductId(product.id)}
                            onMouseLeave={() => setHoveredProductId(null)}
                        >
                            {product.name}
                        </p>
                        {hoveredProductId === product.id && <p>{product.description}</p>}
                        <p>Price: ${product.price}</p>
                        <button className="addToCartBtn" onClick={() => AddToCart(product.id)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            <div style={{ flex: 1 }}>
                <h1><b>Shopping Cart</b></h1>
                <div>
                    {products.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return (
                                <div key={product.id}>
                                    <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
                                    <div>
                                        <h3>{product.name}</h3>
                                        <p>Price: ${product.price}</p>
                                        <p>Quantity: {cartItems[product.id]}</p>
                                        <button className="addToCartBtn" onClick={() => RemoveFromCart(product.id)}>Remove</button>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
                <p>Total (in cart): ${products.reduce((acc, product) => acc + cartItems[product.id] * product.price, 0).toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Productpage;
