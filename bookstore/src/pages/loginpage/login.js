import React from "react";
// import './signup.style.css'
import AuthBgImage from '../../assets/auth-bg.avif'
import Navbar from '../../components/layouts/Navbar/navbar'
import AuthForm from '../../components/forms/authform/authform'

const Login = () =>{
    return (
        <React.Fragment>
        <Navbar darkText={true} />
        <section className="signup-container">
            <div className="signup-image-container">
                <img src= {AuthBgImage} alt="authentication-background" />
            </div>
            <div className="signup-content-container">
                <div className="container">
                <div className="content-wrapper">
                    <h2>Login</h2>
                    <p>Sign in with email and password</p>
                    
                    <AuthForm buttonName = "Login"/>
                </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    )
}

export default Login