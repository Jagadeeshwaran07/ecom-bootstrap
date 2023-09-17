import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

const Collectioncard = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Added to Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wohoo, You got to visit us soon</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>

        
           

            <Card className="m-3">
              <Card.Img variant="top" src={require("../assets/2.jpg")} />
              <Card.Body>
                <Card.Title>Saree</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="text-center">
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
       
          
            <Card className="m-3">
              <Card.Img variant="top" src={require("../assets/4.jpg")} />
              <Card.Body>
                <Card.Title>Lehanga</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="text-center">
                  <Button variant="primary" onClick={() => setModalShow(true)}>
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>




      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default Collectioncard;
