import React from "react";
import "./NewCollections.css";
import new_collections from "../assets/new_collections.js";
import Item from "../Items/Items.jsx";

const NewCollections = () => {
    return (
        <div className="newcollection">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collection">
                {new_collections.map((item, i) => {
                    return <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default NewCollections;