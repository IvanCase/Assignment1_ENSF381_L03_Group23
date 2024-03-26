import React from 'react';

function CartItem({ item, removeFromCart }) {

    console.log(item);
    return (
        <div className="my-cart-item">

            <img src={item.image} alt={item.name} style={ {width: '200px', height: '200px'} }/>
            
            <p>{item.name}</p>

            <p>Price: ${item.price.toFixed(2)}</p>

            <p>Quantity: {item.quantity}</p>

            <p><b>Total: ${(item.price * item.quantity).toFixed(2)}</b></p>

            <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
    );
}

export default CartItem;