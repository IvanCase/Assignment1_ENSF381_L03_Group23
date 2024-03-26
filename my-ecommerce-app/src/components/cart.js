import React from 'react';
import CartItem from './CartItem';

function Cart({ cartItems, removeFromCart }) {

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

    return (
        <div className="cart">
            <h1><b>Shopping Cart</b></h1>

            <div>
            
                {cartItems.map((item, index) => (
                    <CartItem key={index} item={item} removeFromCart={removeFromCart} />
                ))}

                <h3><b>Total (in cart): ${totalPrice}</b></h3>

            </div>
        </div>
    );
}

export default Cart;