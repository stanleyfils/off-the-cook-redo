import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// why use classes within styled components??

const DesktopNavbar = styled.nav`
  display: flex;
  flex-flow: no nowrap;
  /* justify-content: space-evenly; */
  align-items: center;

  background: f7f7f7;
  color: salmon;

  height: 8vh;

  .logo {
    font-size: 3.5vh;
    font-weight: bold;
    margin-left: 25px;
  }

  .nav-links {
    display: flex;
    flex-flow: no nowrap;
    justify-content: space-evenly;
    align-items: center;

    width: 20vw;

    /* list-style none removes underline */
    list-style: none;
  }

  /* text decoration none removes underline */
  .link {
    color: black;
    font-size: 2vh;
    text-decoration: none;
  }

  .signup-button {
    background-image: linear-gradient(to top left, #ff8a00, #e52e71) !important;
    color: #fff !important;
    display: inline-block;
    font-family: inherit;
    font-weight: 700;
    border: 0;
    border-radius: 8px !important;
    white-space: nowrap;
    padding: 1rem 1.5rem;
    line-height: 1.4;
    text-align: center;
    transition: 0.07s;
    position: relative;
    text-decoration: none !important;
    position: absolute;
    left: 950px;
  }
`;

const MenuButton = styled.button`
  background-image: linear-gradient(to top left, #ff8a00, #e52e71) !important;
  color: #fff !important;
  display: inline-block;
  font-family: inherit;
  font-weight: 700;
  border: 0;
  border-radius: 8px !important;
  white-space: nowrap;
  padding: 1rem 1.5rem;
  line-height: 1.4;
  text-align: center;
  transition: 0.07s;
  position: relative;
  text-decoration: none !important;
  position: absolute;
  left: 1100px;
`;

const Navbar = () => {
  return (
    <DesktopNavbar>
      <div className="logo">Off the Cook!</div>

      <ul className="nav-links">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
      </ul>

      <button className="signup-button">SIGN UP</button>
      <MenuButton>MENU</MenuButton>
    </DesktopNavbar>
  );
};

export default Navbar;
