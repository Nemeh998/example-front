import React, { Component } from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'; 
export class Header extends Component {
    render() {
        return (
            <>
            <div>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Bookmon</Navbar.Brand>
            <Nav className="mr-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/Favpage">Favpage</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
            </Container>
            </Navbar>
            </div>
            </>
        )
    }
}

export default Header;
