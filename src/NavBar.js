import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block", 
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  
  function NavBar() {
    return (
      <div>
        <NavLink
          exact to="/"
          exactstyle={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          exactstyle={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/login"
          exactstyle={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          exactstyle={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Sign up
        </NavLink>
      </div>
    );
  }

  export default NavBar;