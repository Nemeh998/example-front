import React, { Component } from 'react'
import {Navbar,Nav ,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>


      <Nav>
        Dank memes
      </Nav>
 

  </Container>
</Navbar>
        )
    }
}

export default Header
