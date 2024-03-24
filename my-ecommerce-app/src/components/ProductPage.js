import React from 'react';
import products from '../data/product.js';


const ProductPage = () => {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <img src={product.image} alt={product.name} />
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductPage;