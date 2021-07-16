import React, { Component } from 'react'
import {Navbar,Nav ,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link> */}
      <Nav.Link href="/MainCate">MainCate</Nav.Link>
      <Nav.Link href="/Main">Horand </Nav.Link>
    </Nav>
    </Container>
    

</Navbar>
        )
    }
}

export default Header
