import React, { useContext } from "react";
import "../CartItems/CartItems.css";
import { ShopContext } from "../../Context/ShopContext.jsx";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItems = () => {
    // Here we are getting all_products , cartItems(which is an obj containing how many 
    // no of items are added to cart at their respective ids) and removeCart function from shopContext
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    console.log(e);
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className="carticon-product-icon"></img>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img src={remove_icon} className="cartitems-remove-icon" onClick={() => { removeFromCart(e.id) }} alt=""></img>
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="promo code"></input>
                        <button type="submit" >Submit</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartItems;