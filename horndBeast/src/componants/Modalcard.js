import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
export class Modalcard  extends Component {
  
    render() {
        return (
            <Modal show={this.props.show}  onHide={this.props.onClose}>
  <Modal.Header >

    <Modal.Title>{this.props.chosehornd.title}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <img variant="top" src={this.props.chosehornd.image_url}/>
    <p></p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary"onClick={this.props.onClose} >Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal>
        )
    }
}

export default Modalcard 
