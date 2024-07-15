import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums.jsx";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay.jsx";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox.jsx";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts.jsx";


const Product = () => {
    const { all_product } = useContext(ShopContext);

    //We are getting the id from the URL params by using useParams() function from react-router-dom
    const { productId } = useParams();

    //The productId from the URL is searched in the array all_product, by using array.find() method
    //If it finds a match then it returns that object into the product variable
    const product = all_product.find((e) => e.id === Number(productId));

    //console.log(product);
    return (
        <div>
            <Breadcrums product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}

export default Product;