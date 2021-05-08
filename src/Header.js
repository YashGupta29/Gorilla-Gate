import React, { useState } from "react";
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import "./Header.css";
import NavLogo from "./images/nav_logo.png";
import Scrollspy from "react-scrollspy";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) setNavbar(true);
    else setNavbar(false);
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <Navbar
      expand="lg"
      className={navbar || mobileMenu ? "navbar scroll" : "navbar "}
    >
      <div className="container-fluid">
        <Navbar.Brand href="#home" className="logo">
          <img src={NavLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="mobile-icon"
          aria-controls="basic-navbar-nav"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-items">
          <Nav className="m-auto ul nav-list">
            <Scrollspy
              items={["home", "why", "about", "roadmap"]}
              currentClassName="active"
              className=""
            >
              <Link to="home" className="link">
                Home
              </Link>
              <Link to="why" className="link">
                Why
              </Link>
              <Link to="about" className="link">
                About
              </Link>
              <Link to="roadmap" className="link">
                Roadmap
              </Link>
              <NavDropdown
                title="Contact"
                id="basic-nav-dropdown"
                onMouseOver={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                show={isOpen}
              >
                <NavDropdown.Item
                  href="https://t.me/APEGATE"
                  className="dropdown-link"
                >
                  <i class=" fa fa-telegram"></i>
                  Telegram
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://twitter.com/APE_GATE"
                  className="dropdown-link"
                >
                  <i class=" fa fa-twitter"></i>
                  Twitter
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://apegate.medium.com/"
                  className="dropdown-link"
                >
                  <i class=" fa fa-medium"></i>
                  Medium
                </NavDropdown.Item>
              </NavDropdown>
            </Scrollspy>
          </Nav>
          <div className="line"></div>
          <div className="ul btn-div">
            <Button
              href="https://v1exchange.pancakeswap.finance/#/swap?outputCurrency=0xf2a3D2484d2A440d12D037894F2F4639d2397494"
              className="btn-1"
            >
              get $ggate
            </Button>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
