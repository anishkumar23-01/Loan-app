import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";
const Header = () => (
  <div className="header">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              
              <div className="navbar">
  <NavLink className="active" to={"/Home"}>Home</NavLink>
  <NavLink to={"/custview"}>View Customer</NavLink>
  <NavLink to={"/addjob"}>Add Job</NavLink>
  <NavLink to={"/Customer-view"}>View Job</NavLink>
  <NavLink className="right" to={"/Customer-view"}>Logout</NavLink>
  
  
</div>
              
            </ul>
          </div>
        </div>
      </nav>
  </div>
)
export default Header;