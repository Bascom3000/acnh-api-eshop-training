import React, { createContext, useState } from 'react';



const Cart = createContext();

 
const ShopContext = ({children}) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (itemId) => {
        setCartItems((previous) => ({...previous, [itemId]: previous[itemId] + 1}))
    }

    const removeToCart = (itemId) => {
        setCartItems((previous) => ({...previous, [itemId]: previous[itemId] - 1}))
    }

    const contextValue = { cartItems, addToCart, removeToCart}



    return <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>;
};

