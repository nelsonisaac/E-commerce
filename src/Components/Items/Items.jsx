import React from "react";
import './Items.css';
import { Link } from "react-router-dom";

const Items = (props) => {
    return (
        <div className="item">
            {/* Here we are making the image as a link to navigate to product page with correponding id of the image */}
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} /></Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-prices-new">
                    ${props.new_price}
                </div>
                <div className="item-prices-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Items;