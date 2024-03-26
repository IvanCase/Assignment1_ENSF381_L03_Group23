import React from 'react';
import ProductItem from '../components/ProductItem.js';


function ProductList({ products, addToCart }) {

    return (
        <div className="product-list">

            <h1>Products</h1>
            {products.map((product, index) => (
                <ProductItem key={index} product={product} addToCart={addToCart} /> 
            ))}
            
        </div>
    );
}
export default ProductList;