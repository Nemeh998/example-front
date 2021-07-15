import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
export class Cardbeast extends Component {
    render() {
        return (
            <Card  border="primary"   bg={"Danger"} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.image_url}/>
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
             {this.props.description}
              </Card.Text>
            </Card.Body>
         
           
          </Card>
        )
    }
}

export default Cardbeast
