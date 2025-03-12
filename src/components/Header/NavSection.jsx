import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../img/logo.png';
import Button from 'react-bootstrap/Button';

const NavSection = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-light">
    <Container fluid className='mx-xxl-5 mx-xl-5 mx-lg-5 mx-md-5 mx-sm-4'>
      <Navbar.Brand href="/">
      <img
          src={Logo}
          width="auto"
          height="40"
          className="d-inline-block align-top"
          alt="LT&G Logo"
          />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
            <Nav.Link className="text-center" href="/">Home</Nav.Link>
            <Nav.Link className="text-center" href="/about">About</Nav.Link>
            <Nav.Link className="text-center" href="#link">Branches</Nav.Link>
            <Nav.Link className="text-center" href="#link">Franchising</Nav.Link>
            <Nav.Link className="text-center" href="#link">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Button className="rounded" variant="danger" size="sm" href="#">Franchise Now</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavSection