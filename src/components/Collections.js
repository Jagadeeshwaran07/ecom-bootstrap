import React,{useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
 import Collectioncard from "./Collectioncard";

const Collections = () => {
  const [menu] = useState([1, 2, 3]);
  return (
    <section id="collections" className="bg-secondary ">
      <Container >
        <div className="text-center ">
          <h3 className="text-dark my-3 py-5">
            Treat yourself with our Everyday Collections <i className="bi bi-amazon"></i>
          </h3>
        </div>
        <Row>
          {menu.map((item) => {
            return (
              <Col md={6} lg={4} key={item}>
                <Collectioncard />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Collections;

