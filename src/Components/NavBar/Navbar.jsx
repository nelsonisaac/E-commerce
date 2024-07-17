import react, { useContext, useRef, useState } from "react";
import './Navbar.css'
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import shopping_cart from '../assets/shopping-cart-big.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropdown from "../assets/dropdown.png";

const Navbar = () => {
    // This state is to set the red bar under the selected list in the nav bar
    const [menu, setMenu] = useState("shop");
    const { totalCartItemsCount } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdownToggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={shopping_cart} alt="" />
                <p>SHOPOHOLIC</p>
            </div>
            <img onClick={dropdownToggle} className="nav-dropdown" src={dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>Shop</Link>
                    {menu === "shop" ? <hr></hr> : <></>}
                </li>
                <li onClick={() => { setMenu("men") }}><Link to="/men" style={{ textDecoration: 'none' }}>Men</Link> {menu === "men" ? <hr></hr> : <></>}</li>
                <li onClick={() => { setMenu("women") }}><Link to="/women" style={{ textDecoration: 'none' }}>Women</Link> {menu === "women" ? <hr></hr> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link to="/kids" style={{ textDecoration: 'none' }}>Kids</Link> {menu === "kids" ? <hr></hr> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                    ? <button onClick={() => {
                        localStorage.removeItem('auth-token');
                        window.location.replace("/login")
                    }}>Logout</button>
                    : <Link to="/login"><button>Login</button></Link>
                }
                <Link to="/cart"><img src={cart_icon}></img></Link>
                <div className="nav-cart-count">{totalCartItemsCount()}</div>
            </div>

        </div>
    )
}

export default Navbar;