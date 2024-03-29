import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";


function NavScrollExample() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    // Check if scrolling up
    setIsScrolled(currentScrollPos < prevScrollPos && currentScrollPos > 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll );
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },);

  return (
    <Navbar expand="lg" className={`bg-body-tertiary ${isScrolled ? "sticky-top" : ""}`}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="nav-style">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="nav-style-1">
                <Nav.Link
                  style={{ borderRadius: "40px" }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "lightgray";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                  href="/contact"
                >
                  יצירת קשר
                </Nav.Link>
              </div>
              <div className="nav-style-1">
                <Nav.Link
                  style={{ borderRadius: "40px" }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "lightgray";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                  
                  href="/contant"
                >
                  כתבות
                </Nav.Link>
              </div>
              <div className="nav-style-1">
                <Nav.Link
                  style={{ borderRadius: "40px" }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "lightgray";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                  
                  href="/about"
                >
                  צוות עורכי הדין
                </Nav.Link>
              </div>
              <div className="nav-style-1">
                <Nav.Link
                  style={{ borderRadius: "40px" }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "lightgray";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                  
                  href="/adjust"
                >
                  תחומי התמחות
                </Nav.Link>
              </div>
              <div className="nav-style-1">
                <Nav.Link
                  style={{ borderRadius: "40px" }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "lightgray";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                  
                  href="/home"
                >
                  דף בית
                </Nav.Link>
              </div>
              
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
