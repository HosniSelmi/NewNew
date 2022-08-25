import  "../App.css"
import React from 'react'

export const Header = ()=>{
    return (
        <nav className="navbar">
    <div className="max-width">
      <div className="logo"><a href="#">Portfo<span>lio.</span></a></div>
      <ul className="menu">
        <li><a href="#home" className="menu-btn">Home</a></li>
        <li><a href="#about" className="menu-btn">About</a></li>
        <li><a href="#services" className="menu-btn">Services</a></li>
        <li><a href="#skills" className="menu-btn">Skills</a></li>
        <li><a href="#teams" className="menu-btn">Teams</a></li>
        <li><a href="#contact" className="menu-btn">Contact</a></li>
        <li><a href="#contact" className="menu-btn">Sign in</a></li>
      </ul>
      <div className="menu-btn">
        <i className="fas fa-bars" />
      </div>
    </div>
  </nav>
    )
}