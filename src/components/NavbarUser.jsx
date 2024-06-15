import React from "react";
import { Container, Navbar, Image, Button, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
const style = `
.navu {
  width: 40px;
  padding-right: 15px;
}

.icon-color {
  filter: invert(17%) sepia(84%) saturate(3071%) hue-rotate(265deg) brightness(86%) contrast(95%);
}
`;

const NavbarUser = () => {
  const location = useLocation();
  return (
    <>
      <style>{style}</style>
      <Navbar className="fixed-top border-bottom shadow-sm bg-white">
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <Image className="navbar__img" src="/logofinal.png" alt="logo Tiketku" />
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/history">
              <Image className={`navu ${location.pathname === "/history" ? "icon-color" : ""}`} src="/fi-list.svg" alt="login icon" />
            </Link>
            <Link to="/notifikasi">
              <Image className={`navu ${location.pathname === "/notifikasi" ? "icon-color" : ""}`} src="/fi_bell.svg" alt="login icon" />
            </Link>
            <Link to="/account">
              <Image className={`navu ${location.pathname === "/account" ? "icon-color" : ""}`} src="/fi_user_org.svg" alt="login icon" />
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarUser;
