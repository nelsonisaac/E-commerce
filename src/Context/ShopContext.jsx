import React, { createContext, useState } from "react";
//import data from "../Components/assets/all_product.js";
import all_product from "../Components/assets/all_product.js";

//Here we can get the data by destructuring also, but the names should match
//i.e., the object names should match in the {} when destructuring

//By using createContext we are suppling the dataSet we have to all the components of the app
//We place this component on top of the <App/> component which makes the data available to all comp inside <App/>
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
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((itemsinCart) =>itemsinCart.id === Number(item));
                totalAmount = totalAmount + (itemInfo.new_price * cartItems[item]);
            }
        }
        return totalAmount;
    }

    const totalCartItemsCount = () => {
        let cartCount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                cartCount = cartCount + cartItems[item]
            }
        }
        return cartCount;
    }

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const contextValue = { all_product, cartItems, addToCart, removeFromCart,getTotalCartAmount,totalCartItemsCount };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;