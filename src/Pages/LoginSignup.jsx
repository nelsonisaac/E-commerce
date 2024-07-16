import React, { useState } from "react";
import "./CSS/Loginsignup.css";

const LoginSignup = () => {

    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const login = async () => {
        console.log("inside login function");
        let responseData;
        await fetch("http://localhost:4000/api/login",{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        }).then((res)=>res.json()).then((data)=>{responseData=data})

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }
    }

    const signup = async () => {
        console.log("inside signup function");
        let responseData;
        await fetch("http://localhost:4000/api/signup",{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        }).then((res)=>res.json()).then((data)=>{responseData=data})

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/");
        }else{
            alert("Already existing user!")
        }
    }

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>
                    {state}
                </h1>
                <div className="loginsignyp-fields">
                    {state === "Sign Up" ? <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your name" /> : <></>}
                    <input name="email" value={formData.email} onChange={changeHandler} type="text" placeholder="Email address" />
                    <input name="password" value={formData.password} onChange={changeHandler} type="text" placeholder="Password" />
                </div>
                <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
                {state === "Sign Up" ? <p className="loginsignup-login" >Already have an account? <span onClick={() => { setState("Login") }}>Login here</span></p>
                    : <p className="loginsignup-login" >Create an account? <span onClick={() => { setState("Sign Up") }}>Click here</span></p>}
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p> By continuing I agree to the terms of use & privacy policy</p>
                </div>
            </div>

        </div>
    )
}

export default LoginSignup;