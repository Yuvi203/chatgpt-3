import React from 'react'
import "./Logo.css"
import logo from  "./assets/logo.svg"

const Logo = () => {
  return (
    <div className="gpt3__navbar">
        <div className="gpt3__navbar-links_logo">
        <img src={logo} alt=''/>
        </div>
    </div>
  )
}

export default Logo