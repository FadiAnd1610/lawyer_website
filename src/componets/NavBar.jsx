import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function NavScrollExample() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsScrolled(currentScrollPos < prevScrollPos && currentScrollPos > 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Navbar expand="lg" className={`bg-body-tertiary ${isScrolled ? "sticky-top" : ""}`}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="nav-style">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <div className="nav-style-1">
                <Link
                  to="/contact"
                  style={{ borderRadius: "40px" }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "lightgray";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  יצירת קשר
                </Link>
              </div>
              <div className="nav-style-1">
                <Link
                  to="/contant"
                  style={{ borderRadius: "40px" }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "lightgray";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  כתבות
                </Link>
              </div>
              <div className="nav-style-1">
                <Link
                  to="/about"
                  style={{ borderRadius: "40px" }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "lightgray";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  צוות המשרד
                </Link>
              </div>
              <div className="nav-style-1">
                <Link
                  to="/adjust"
                  style={{ borderRadius: "40px" }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "lightgray";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  תחומי התמחות
                </Link>
              </div>
              <div className="nav-style-1">
                <Link
                  to="/home"
                  style={{ borderRadius: "40px" }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "lightgray";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  דף בית
                </Link>
              </div>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
