import React from "react";
import "./CSS/Loginsignup.css";

const LoginSignup = () => {
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>
                    Sign up
                </h1>
                <div className="loginsignyp-fields">
                    <input type="text" placeholder="Your name" />
                    <input type="text" placeholder="Email address" />
                    <input type="text" placeholder="Password" />
                </div>
                <button>Continue</button>
                <p className="loginsignup-login" >Already have an account? <span>Login here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p> By continuing I agree to the terms of use & privacy policy</p>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup;