import React from "react";
import "./LoginForm.css";
import loginImage from "../Assets/loginImage.jpg";
import amazonLogo from "../Assets/amazonLogo.png";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

export const LoginForm = () => {
  return (
    <div className="wrapper">
      <img className="wrapperImg" src={amazonLogo} alt="Amazon Logo" />
      <form action="">
        <h1>Login</h1>
        <img src={loginImage} alt="Logo" />
        <div className="input-box">
          <input type="text" placeholder="Email" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit">Sign In</button>

        <div className="forgot-newUser">
          <a href="http://">Forgot Password?</a>
          <a href="http://" className="newUser">
            New User? Sign Up
          </a>
        </div>
      </form>

      <GoogleLoginButton />

      <FacebookLoginButton />
    </div>
  );
};
