import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
    <header>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src=""
              className="d-inline-block align-top"
            />{' '}
            Tracker Fit
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
    </>
  )
}

export default NavBar