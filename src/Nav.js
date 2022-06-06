import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";
import img from "./letter-j-icon-png-21786.png";
import refresh from "./refresh";

const Nav = ({ currentUser }) => {
  const navigate = useNavigate();

  return (
    <>
      {currentUser ? (
        <nav className="Nav">
          <img src={img} />

          <NavLink to="/">{currentUser.username}</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/logout">Logout</NavLink>
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
        </nav>
      ) : (
        <nav className="Nav">
          <img
            id="logoImage"
            onClick={() => refresh(navigate("/"))}
            src={img}
          />

          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
        </nav>
      )}
    </>
  );
};
export default Nav;
