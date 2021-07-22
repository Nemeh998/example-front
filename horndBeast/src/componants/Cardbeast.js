import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

export class Cardbeast extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:0,
    
    }
  }  

  increascount = () =>{
    this.setState({
      counter: this.state.counter +1

    })
  }

 
  choseDisplayCard=()=>{
    this.props.onShow(this.props.title)
  
  }
  
  render() {
    
      return (
          <>

        
            <Card onClick={this.increascount} border="primary"   bg={"Danger"} style={{ width: '18rem' }}>
            <Card.Img onClick={this.choseDisplayCard} variant="top" src={this.props.image_url}/>
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
             {this.props.description}
              </Card.Text>
              <Card.Text>❤️
             {this.state.counter}
              </Card.Text>
            </Card.Body>
         
           
          </Card>
   
        </>
        )
    }
}

export default Cardbeast
