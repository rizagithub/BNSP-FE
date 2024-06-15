import React from "react";
import { Container, Navbar, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavbarHomepage.css";

const NavbarHomepage = () => {
  return (
    <>
      <header id="header" className="header fixed-top">
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="t1 bi-envelope d-flex align-items-center">
                <div className="ms-2" style={{ color:"#1679AB" }}>primeapps@example.com</div>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <div className="twitter mx-1"><i className="bi bi-twitter-x"></i></div>
              <div className="facebook mx-1"><i className="bi bi-facebook"></i></div>
              <div className="instagram mx-1"><i className="bi bi-instagram"></i></div>
              <div className="linkedin mx-1"><i className="bi bi-linkedin"></i></div>
            </div>

          </div>
        </div>
        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <div className="logo d-flex align-items-center">
              <Image className="icon-flower mr-1" src="/images/dc.png" alt="login icon" />
              <h1 className="sitename">Primapps</h1>
            </div>
            <nav id="navmenu" className="navmenu">
              <ul>
                <li><a href="#" className="text-white act">Home</a></li>
                <li><a href="#list-aplikasi" className="text-white act">Product</a></li>
                <li><a href="#" className="text-white act">About</a></li>
                <li className="">
                  <Link to="/login">
                    <button
                      className="btn btn-danger ms-3"
                      type="submit"
                      style={{ backgroundColor: '#FF6969', border: 'none' }}
                    ><Image className="login_img" src="/login.svg" alt="login icon" /> Login
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarHomepage;
