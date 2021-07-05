import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap';
export class FavPageCard extends Component {
    render() {
        return (
         
                  <Card style={{ width: '18rem',margin:"1rem 0" }}>
            <Card.Img variant="top" 
            src={this.props.item.img} />
            <Card.Body>
              <Card.Title>{this.props.item.name}</Card.Title>
              <Card.Text>
             {this.props.item.level}
              </Card.Text>
              </Card.Body>
            <Card.Footer>
                <Button variant="outline-primary"  
                style={{marginLeft:"1rem" ,pading:"1.5rem"}}
                
                onClick={()=>this.props.deleteCard(this.props.item._id)}>
                Delete

                </Button>
                <Button variant="outline-primary"  
                style={{marginLeft:"2rem" ,pading:"1.5rem"}}
                
                onClick={()=>this.props.showModal(this.props.item)}>
            upDate

                </Button>
            </Card.Footer>
          </Card>
          
        )
    }
}

export default FavPageCard
