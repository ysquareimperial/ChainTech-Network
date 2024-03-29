import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Card, Col, Row } from "reactstrap";
import logo from "../src/assets/logo.png";
import cardImg from "../src/assets/womanI.png";
function ServicesSection() {
  const cardDetails = [
    {
      cardLogo: logo,
      cardHeading: "Join Development",
      cardText: "Blockchain Development",
      cardImage: cardImg,
      cardButton: (
        <button>
          Explore <IoIosArrowRoundForward className="card_btn_icon" />
        </button>
      ),
    },
    {
      cardLogo: logo,
      cardHeading: "Join Development",
      cardText: "Blockchain Development",
      cardImage: cardImg,
      cardButton: (
        <button>
          Explore <IoIosArrowRoundForward className="card_btn_icon" />
        </button>
      ),
    },
    {
      cardLogo: logo,
      cardHeading: "Join Development",
      cardText: "Blockchain Development",
      cardImage: cardImg,
      cardButton: (
        <button>
          Explore <IoIosArrowRoundForward className="card_btn_icon" />
        </button>
      ),
    },
    {
      cardLogo: logo,
      cardHeading: "Join Development",
      cardText: "Blockchain Development",
      cardImage: cardImg,
      cardButton: (
        <button>
          Explore <IoIosArrowRoundForward className="card_btn_icon" />
        </button>
      ),
    },
  ];
  return (
    <Row className="m-0 pt-5 pb-5 services_sec">
      <Col md={2}></Col>
      <Col md={8}>
        <h2 className="mt-3">Services We Offer</h2>
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-0">
            Discover the digital possibilities for your brand with our
            comprehensive suite of services.
          </p>
          <div>
            <IoIosArrowRoundBack className="services_arr1" />
            <IoIosArrowRoundForward className="services_arr2" />
          </div>
        </div>
        <Row className="mt-2">
          {cardDetails.map((item, index) => (
            <Col md={3}>
              <Card key={index} className="services_card card1">
                <div className="card_header d-flex gap-2 align-items-center">
                  <img
                    src={item.cardLogo}
                    alt="chaintech"
                    className="card_logo"
                  />
                  <p className="m-0">{item.cardHeading}</p>
                </div>
                <div className="card_body d-flex flex-column align-items-center">
                  <p className="mt-4">{item.cardText}</p>
                  <img
                    src={item.cardImage}
                    alt="card_img"
                    className="mt-4 card_img"
                  />
                </div>
                <div className="card_footer">{item.cardButton}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
      <Col md={2}></Col>
    </Row>
  );
}

export default ServicesSection;
