import React, { createContext, useEffect, useState } from "react";
//import data from "../Components/assets/all_product.js";
import all_product from "../Components/assets/all_product.js";

export const ShopContext = createContext(null);

// This funciton initially stores 0 in all the cartItems obj (0:0 , 1:0 , 2:0, 3:0,...).
// Each of the left number is the id of the product and the right is the count of it
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    /*
         // UNCOMMENT THIS SNIPPET TO GET THE PRODUCTS DATA FROM THE BACKEND API
         // COMMENT DOWN THE all_product FROM THE IMPORTS AND REPLACE THAT WITH THIS all_product
            const [all_product, setAll_Product] = useState([]);
            useEffect(() => {
                fetch('https://e-commerce-apis-xggn.onrender.com/api/allProducts')
                    .then((res) => res.json())
                    .then((data) => setAll_Product(data))
    
            }, []) */


    useEffect(() => {
        if (localStorage.getItem('auth-token')) {
            fetch('https://e-commerce-apis-xggn.onrender.com/api/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: ""
            }).then((res) => res.json()).then((data) => setCartItems(data))
        }
    }, [])

    // the spread operator ...prev accesses the whole object at once
    // here if we include spread oprator in paranthesis and so any operation
    // after coma(,) then it make changes within the object(prev) {...prev}
    /*ex: let cart = {};
    for(let ind = 0; ind < 5; ind++){
        cart[ind] = 0;
        }
        console.log({...cart, [2]:7, [3]:9});
        Output : {0:0 , 1:0, 2:7, 3:9, 4:0}
   */
    // This function only adds that particular id which is clicked
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch('https://e-commerce-apis-xggn.onrender.com/api/addtocart',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 'itemId': itemId })
                }
            ).then((res) => res.json()).then((data) => console.log("this is fronend data:" + data));
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (localStorage.getItem('auth-token')) {
            fetch('https://e-commerce-apis-xggn.onrender.com/api/removecart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'itemId': itemId })
            })
        }

    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((itemsinCart) => itemsinCart.id === Number(item));
                totalAmount = totalAmount + (itemInfo.new_price * cartItems[item]);
            }
        }
        return totalAmount;
    }

    const totalCartItemsCount = () => {
        let cartCount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                cartCount = cartCount + cartItems[item]
            }
        }
        return cartCount;
    }

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, totalCartItemsCount };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;