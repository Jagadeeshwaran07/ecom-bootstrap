import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Container fluid className="bg-primary">
      <Row className="justify-content-center align-items-center">
        <Col lg={8}>
          <Carousel className="mt-1">
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/one.jpg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Red Rare Silks</h3>
                <p className="d-none d-sm-block">
                  God & Good is with you when wearing
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/two.jpg")}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>New Collections</h3>
                <p className="d-none d-sm-block">
                  Come and Grab in Early bird Offer
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/three.jpg")}
                alt="Third slide"
              />

         
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="display-5 mt-3">Sarees for Every Occasion!</h2>
        <p className="lead text-muted">Family | Friends | Functions | Festivals </p>
      </div>
    </Container>
  );
};

export default Banner;