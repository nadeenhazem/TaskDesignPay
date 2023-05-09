import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../Stylling/NavBar_Footer.css';
function NavBarpay(props) {
    return (
        <Navbar  expand="lg">
      <Container>
        <Link to="/" className='logo'>
          <div className='logo-img'>s</div>blinqpay</Link>
        <Navbar.Toggle  />
        <Navbar.Collapse >
          <Nav className="me-auto" id="div-middel-Links">
            <Link to="/" className='middel-Links'>Products</Link>
            <Link to="/" className='middel-Links'>Developers</Link>
            <Link to="/"className='middel-Links'>Company</Link>
            <Link to="/"className='middel-Links'>Pricing</Link> 
          </Nav>
          <Nav>
            <Link to="/"className='middel-Links'>Support</Link>
            <Link  to="/"className='middel-Links signi-in'>Sign in</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBarpay;