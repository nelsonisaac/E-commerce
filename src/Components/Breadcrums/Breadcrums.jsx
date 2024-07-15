import React from "react";
import "./Breadcrums.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

//We are getting the individual product object from the Product.jsx as a prop
const Breadcrums = (props) => {
    const {product} = props;

    return (
        <div className="breadcrum">
            HOME <img src={arrow_icon}/> SHOP <img src={arrow_icon} /> {product.category} <img src={arrow_icon} /> {product.name}
        </div>
    )
}

export default Breadcrums;