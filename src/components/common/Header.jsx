import React from "react";
import { NavLink } from "react-router-dom";
import "./commons.css";

const Header = () => {
  const activeStyle = {
    color: "#fff",
    background: "#7600dc",
  };
  return (
    <nav className="custom-nav navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink
        className="navbar-brand"
        to="/"
      >
        Movie App
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : {})}
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : {})}
              className="nav-link"
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : {})}
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
