import React, { useState } from 'react';
import { useContext } from 'react';
import products from '../data/product.js';
import { CartContext } from "../components/cart.js";
import Header from './Header';
import Footer from './Footer';

const Productpage = () => {

    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
};

export default Productpage;
