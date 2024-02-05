// import React from 'react';
import { Link } from "react-router-dom";
// import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-container">
        <ul className="navbar-menu">
          {/* <li className="navbar-item">
            <Link to="/" className="navbar-link">
              ABOUT
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/project" className="navbar-link">
              PROJECTS
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog" className="navbar-link">
              BLOG
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              CONTACT
            </Link>
          </li> */}
          <li className="navbar-item">
            <Link to="/prompts" className="navbar-link">
              PROMPTS
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
