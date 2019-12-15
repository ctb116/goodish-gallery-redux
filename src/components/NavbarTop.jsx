import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbartop.css";

const NavbarTop = () => {
  return (
    <div>
      <span>
        <Link to="/about">About Me</Link>
      </span>
      <span>
        <Link to="/hire">Hire Me</Link>
      </span>
    </div>
  );
};

export default NavbarTop;
