import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <h1>Get excluisive offers by subscribing!</h1>
            <p>Subscribe to our newletter to get notified</p>
            <div >
                <input type="email" placeholder="Your Email id" />
                <button>Subcribe</button>
            </div>
        </div>
    )
}
export default NewsLetter;