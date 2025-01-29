//import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from '/images/Logo1.png'

function Navbar() {
  return (
    <>
      <nav>
        <img src={Logo} alt="logo" width={85} height={85}/>
        <h1>BIKE RENTAL SYSTEM</h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/bikes">Bikes</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
