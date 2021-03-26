import React from "react";
import './style.css';

function Login() {
  return (
    <header id="header" className="shadow bg-light">
        <nav className="container navbar">
        <a href="./index.js" className="nav-brand text-dark">Bloggern</a>
        <button className = "toggle-button">
            <span><i className="fas fa-bars"></i></span>
        </button>


        </nav>
    </header>
  );
}

export default Login;