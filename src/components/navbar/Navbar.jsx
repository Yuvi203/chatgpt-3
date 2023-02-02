import React, { useState } from 'react';
import { Menu } from '@mui/material'; 
import logo from '../../logo.svg';
import './navbar.css';
import { Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div>
        <Link to={"/login"}>
        <div className='register'>
        <p>Register</p>
        </div>
        </Link>
      
    </div>
  );
};

export default Navbar;



