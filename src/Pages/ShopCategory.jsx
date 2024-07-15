import React, { useContext } from "react";
import './CSS/ShopCategory.css';
import { ShopContext } from "../Context/ShopContext.jsx";
import dropdown_icon from "../Components/assets/dropdown_icon.png";
import Item from "../Components/Items/Items.jsx";


const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} />
            <div className="shopcategory-indexsort">
                <p>
                    <span>Show 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon}></img>
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore more
            </div>
        </div>
    )
}

export default ShopCategory;