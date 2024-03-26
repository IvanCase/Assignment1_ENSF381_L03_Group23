import React from 'react';
import { useState } from 'react';

function ProductItem({ product, addToCart }) {

    const [hoveredProductId, setHoveredProductId] = useState(null);

    return (


        <div className="product-item">
            
            <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
            <p
                onMouseEnter={() => setHoveredProductId(product.id)}
                onMouseLeave={() => setHoveredProductId(null)}
            >
                {product.name}
            </p>
   
            {hoveredProductId === product.id && <p>{product.description}</p>}
            
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}
export default ProductItem;