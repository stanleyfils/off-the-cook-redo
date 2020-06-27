import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DesktopNavbar = styled.nav`
  display: flex;
  flex-flow: no nowrap;
  justify-content: space-evenly;
  align-items: center;

  background: f7f7f7;
  color: salmon;

  height: 8vh;

  .logo {
    font-size: 3vh;
    font-weight: bold;
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
  .links {
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
  }
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

      <button>Sign Up</button>
    </DesktopNavbar>
  );
};

export default Navbar;
