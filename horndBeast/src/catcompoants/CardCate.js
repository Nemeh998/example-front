import React, { Component } from 'react'
// import './CardCate.css'
export class CardCate extends Component {
    constructor(props){
        super(props);
        this.state={
countCat:0
        }
    }
    
    increas=() =>
    {
        
        this.setState ({
            countCat:this.state.countCat +1
        })
    }
    render() {
 
        return (
            <div className='imgcat'>
             <p> {this.props.catName}</p>  

         
            <img onClick={this.increas} src={this.props.catimg} alt={this.props.catName}/> 
            <p>❤️{this.state.countCat}</p>  
              </div>

        )
    }
}

export default CardCate
