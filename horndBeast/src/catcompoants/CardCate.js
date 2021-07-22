import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
// import './CardCate.css'
import Card from 'react-bootstrap/Card'
export class CardCate extends Component {
    constructor(props){
        super(props);
        this.state={
countCat:0,
countNumberOftakeingTunaForEchCate:0
        }
    }
    
    increas =() =>{
        
        this.setState({
            countCat:this.state.countCat +1
        })
    }

counTuna =() =>{
    if (this.state.countNumberOftakeingTunaForEchCate <15){
    this.setState({
        countNumberOftakeingTunaForEchCate:this.state.countNumberOftakeingTunaForEchCate + 1


    })
  
}
    this.props.decreaseCanneTunacabinet()
}


towFunction=()=>{
    this.props.decreaseCanneTunacabinet()
    this.counTuna()
}
    render() {
 
        return (
            <div className='imgcat'>
         
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" onClick={this.increas}src={this.props.catimg} alt={this.props.catName} />
  <Card.Body>
    <Card.Title>{this.props.catName}</Card.Title>
    <Card.Text>
    ❤️{this.state.countCat}
    </Card.Text>
    <Card.Text>
    {this.state.countNumberOftakeingTunaForEchCate}
    </Card.Text>
    <Button variant="primary" onClick={this.towFunction}> tuna </Button>
  </Card.Body>
</Card>
              </div>

        )
    }
}

export default CardCate
