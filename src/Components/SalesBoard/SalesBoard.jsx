import React from "react";
import './SalesBoard.css';
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import board_image from "../assets/hero_image.png"

const SalesBoard = () => {
    return (
        <div className="board">
            <div className="board-left">
                <h2>BRAND NEW ARRIVALS ONLY </h2>
                <div className="board-hand-icon">
                    <p>New</p>
                    {/* <img src={hand_icon} alt="" /> */}
                </div>
                <p>Collections</p>
                <p>for everyone</p>
                <div className="board-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon}></img>
                </div>
            </div>
            <div className="board-right">
                <img src={board_image} alt="" />
            </div>
        </div>
    )
}

export default SalesBoard;