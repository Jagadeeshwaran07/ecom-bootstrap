import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';

const Appbar = () => {
    return ( 
    <Navbar expand="lg" className="bg-secondary border border-dark rounded">
      <Container>
        <Navbar.Brand href="#home"><h2 className='text-dark text-bg-none border border-primary rounded' ><span><i className="bi bi-feather "></i> Peacock Silks</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav >
            <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
            <Nav.Link href="#collections" className='fw-bold'>Collections</Nav.Link>
            <Nav.Link href="#trending"className='fw-bold'>Trending</Nav.Link>
            <Nav.Link href="#contact" className='fw-bold' >Contact us</Nav.Link>
            <Cart/>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     );
}
 
export default Appbar;