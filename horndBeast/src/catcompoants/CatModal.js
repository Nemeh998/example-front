import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'
export class CatModal extends Component {
    render() {
        return (
            <div>
               <Modal show={this.props.showModal} onHide={this.props.closeModal}>
        <Modal.Header cloiseButton>
          <Modal.Title>{this.props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.faveCatBreeed}</Modal.Body>
        <p> Do love cat.... {this.props.likeCate? " YAS" : "NO"}
</p>
        
        <p></p>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.closeModal}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
  
            </div>
        )
    }
}

export default CatModal
