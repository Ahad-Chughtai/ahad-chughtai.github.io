import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../Assets/logo.png';
import contactImg from '../Assets/contact_me.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className='logo' />
      <div className="desktopMenu">
        <NavLink activeClassName="active" to="/home" className="desktopMenuListItem">Home</NavLink>
        <NavLink activeClassName="active" to="/ComputerScience" className="desktopMenuListItem">Computer Science</NavLink>
        <NavLink activeClassName="active" to="/3DModeling" className="desktopMenuListItem">3D Modeling</NavLink>
      </div>
      <a className="desktopMenuBtn" href="mailto:ahadchughtai@gmail.com">
        <img src={contactImg} alt="Contact Me" className="desktopMenuImg" />
      </a>
    </nav>
)
}

export default Navbar;
