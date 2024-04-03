import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink exact to="/" className="navbar-logo">
          Haikal Aja we
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" activeClassName="active" className="nav-links">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/standings" activeClassName="active" className="nav-links">
              Standings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeClassName="active" className="nav-links">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" activeClassName="active" className="nav-links">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
