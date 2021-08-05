import React, { Component } from 'react'

import {Navbar,Nav ,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class Header extends Component {
    render() {
        return (
            <div>
                  
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link> */}
      <Nav.Link href="/Mainlocatin">locatin</Nav.Link>
      <Nav.Link href="/Main">Horand </Nav.Link>
      <Nav.Link href="/Formselect">Formselect </Nav.Link>
      
    </Nav>
    </Container>
    

</Navbar>
            </div>
        )
    }
}

export default Header
