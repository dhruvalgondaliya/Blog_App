import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav.css";

export default function NavBar() {



  return (
    <div className="text-white header">
      <Navbar expand="lg" className="bg-body-tertiary bg-dark">
        <Container fluid>
          <Navbar.Brand className="text-white">Blog-App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex menu me-5">
              <Nav.Link>
               
                <i class="bi bi-house-door-fill"></i> Home
              </Nav.Link>
              <Nav.Link>
              
                <i class="bi bi-play-circle"></i> Video
              </Nav.Link>
              <Nav.Link>
               
                <i class="bi bi-search"></i> Search
              </Nav.Link>

              <NavDropdown
                title={
                  <span className="userData"><i className="bi bi-person-circle"></i>
                  </span>
                }  id="profileDropdown"  alignRight
              >
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item>Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
