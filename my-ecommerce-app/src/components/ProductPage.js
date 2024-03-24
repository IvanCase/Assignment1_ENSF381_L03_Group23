import React from 'react';
import products from '../data/product.js';


const ProductPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            {products.map((product) => (
                <div key={product.id} style={{ marginBottom: '20px' }}>
                    <h2>{product.name}</h2>
                    <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>

                  
                    <button>Add to Cart</button>
                </div>
            
            ))}
        </div>


    );
}
export default ProductPage;