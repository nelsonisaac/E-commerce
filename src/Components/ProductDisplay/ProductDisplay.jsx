import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png"
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext.jsx";


const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} />
                    <img src={product.image} />
                    <img src={product.image} />
                    <img src={product.image} />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_icon} />
                    <img src={star_dull_icon} />
                    <p>122</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ${product.new_price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    Some BS about the outfits. Best garments under the collection for men. Summer sale best offers. linen clothing and more. Best shopper exclusive prices and discounts avail the offer now
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size </h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => {addToCart(product.id)}}> ADD TO CART</button>
                <div className="productdisplay-right-category">
                    <p ><span>Category :</span> Women, t-shirt, Crop top </p>
                    <p ><span>Tags :</span> Modern, latest </p>
                </div>

            </div>
        </div>
    )
}

export default ProductDisplay;