import React, { createContext, useState } from 'react';
import product from '../data/product.js';
export const CartContext = createContext(null);


const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < product.length + 1 ; i++) {
        cart[i] = 0;
    }
    return cart;
}


export const CartContextProvider = (props) =>{
    const [cartItems, setCartItems] = useState(getDefaultCart());



    const AddToCart = (itemID) => {
        setCartItems((prev) => {
            return {...prev, [itemID]: prev[itemID] + 1};
        }); 
    }
    const RemoveFromCart = (itemID) => {
        setCartItems((prev) => {
            return {...prev, [itemID]: prev[itemID] - 1};
        });
    }

    const contextValue = {cartItems, AddToCart, RemoveFromCart};
    console.log(contextValue);
    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
};