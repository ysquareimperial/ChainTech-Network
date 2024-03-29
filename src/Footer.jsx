import React from "react";
import { Col, Row } from "reactstrap";
import logo from "../src/assets/logo2.PNG";

function Footer() {
  return (
    <footer>
      <Row className="m-0"> 
        <Col md={2}></Col>
        <Col md={8} className="text-center">
          <img src={logo} className="mt-5" />
          <hr style={{ color: "grey" }} />
          <p className="text-white mt-4" style={{ fontSize: 11 }}>
            &copy;2014 All Rights Reserved - Chainatech Network
          </p>
        </Col>
        <Col md={2}></Col>
      </Row>
    </footer>
  );
}

export default Footer;
