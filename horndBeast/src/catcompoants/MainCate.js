import React, { Component } from 'react'
import CardCate from './CardCate'
import so from '../assets/so.jpg'


export class MainCate extends Component {
    constructor(props){
        super(props);
        this.state={
            canneTunacabinet:13
        }
    }
    
    decreaseCanneTunacabinet= ()=>{
        if(this.state.canneTunacabinet>0){

            this.setState({
                canneTunacabinet:this.state.canneTunacabinet-1
            })
        }
    }
    render() {
        return (
            <div>
                <p>🗄️canneTunacabinet{this.state.canneTunacabinet}</p>
                <p></p>
               
          <CardCate
          catName='so'
          catimg={so}
          decreaseCanneTunacabinet={this.decreaseCanneTunacabinet}
        /> 
            </div>
        )
    }
}

export default MainCate
