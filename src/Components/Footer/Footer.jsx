import React from "react";
import "./Footer.css";
import footerlogo from "../assets/shopping-cart-FOOTER.png";
import ig_icon from "../assets/instagram_icon.png";
import pinterest_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footerlogo} />
                <p>SHOPOHOLIC</p>
            </div>
            <ul className="footer-list">
                <li>Comapny</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={ig_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright@2023 - All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;