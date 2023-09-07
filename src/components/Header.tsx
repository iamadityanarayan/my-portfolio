// import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import LOGO from '../assets/aditya.png';
// import LOGO from '../assets/aditya-transparent.png';
import LOGO from '../assets/logo-no-background.svg';
// type Props = {}

const Header = () => {
  return (
    <div>
     <Navbar expand="lg" variant='dark' className='py-5'>
      <Container fluid className='px-5'>
        <Navbar.Brand href="#home">
          <img className='logo' src={LOGO} alt="LOGO" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='px-4 fs-5' href="#home">Home</Nav.Link>
            <Nav.Link className='px-4 fs-5' href="#f">Front-end Skills</Nav.Link>
            <Nav.Link className='px-4 fs-5' href="#b">Back-end Skills</Nav.Link>
            <Nav.Link className='px-4 fs-5' href="#p">Portfolio</Nav.Link>
            <Nav.Link className='px-4 fs-5' href="#c">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
