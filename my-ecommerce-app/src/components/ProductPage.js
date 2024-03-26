
import React, { useState, useEffect } from 'react';
import productsData from '../data/product.js';
import Cart from './Cart';
import ProductList from '../components/ProductList.js';
import Header from './Header';
import Footer from './Footer';

const Productpage = () => {

    const [cartItems, setCartItems] = useState([]);
    // Save cart items to local storage
    React.useEffect(() => {
        const data = localStorage.getItem('cartItems');
        if (data) {
            setCartItems(JSON.parse(data));
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);


    // Add to cart
    const addToCart = (product) => {
        const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].quantity += 1;
            setCartItems(updatedCartItems);
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    // Remove from cart
    const removeFromCart = (product) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedCartItems.filter(item => item.quantity > 0));
    };


    
    return (
        <div className="product-page">
           <Header />
            <table>
                
                    <tr>
                        <td><ProductList products={productsData} addToCart={addToCart} /></td>
                        <td style={{ verticalAlign: 'top' }}><Cart cartItems={cartItems} removeFromCart={removeFromCart} /></td>
                    </tr>
                
            </table>
          <Footer />
        </div>
           
    )

};

export default Productpage;