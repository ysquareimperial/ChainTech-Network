import React from "react";
import { Col, Container, Row } from "reactstrap";
import logo from "../src/assets/logo2.PNG";
function Header() {
  return (
    <nav>
      <Row className="m-0">
        <Col md={2}></Col>
        <Col md={8}>
          <Row className="">
            <Col md={3} className="d-flex justify-content-end align-items-center">
              <img src={logo} className="" />
            </Col>
            <Col
              md={9}
              className="d-flex justify-content-end align-items-center gap-4 p-4"
            >
              <p className="nav_item active">Company</p>
              <p className="nav_item">Services</p>
              <p className="nav_item">Business Models</p>
              <p className="nav_item">Blogs</p>
              <p className="nav_item">Contact Us</p>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </nav>
  );
}

export default Header;
