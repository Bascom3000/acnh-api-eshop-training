import React, { createContext, useState } from 'react';



const ShopContext = createContext(null);

 
const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (itemId) => {
        setCartItems((previous) => ({...previous, [itemId]: previous[itemId] + 1}))
    }

    const removeToCart = (itemId) => {
        setCartItems((previous) => ({...previous, [itemId]: previous[itemId] - 1}))
    }

    const contextValue = { cartItems, addToCart, removeToCart}

    console.log(cartItems)
    
    return <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>;
};

export {
    ShopContextProvider,
    ShopContext
}