import React from "react";
import SalesBoard from "../Components/SalesBoard/SalesBoard.jsx";
import Popular from "../Components/Popular/Popular.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import NewCollections from "../Components/NewCollections/NewCollections.jsx";
import NewsLetter from "../Components/NewsLetter/NewsLetter.jsx";


const Shop = () => {
    return (
        <div className="shopcontents">
            <SalesBoard />
            <Popular />
            <Offers />
            <NewCollections />
            <NewsLetter />
        </div>
    )
}

export default Shop;