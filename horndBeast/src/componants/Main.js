import React, { Component } from 'react'
import datah from './datah.json'
import Cardbeast from './Cardbeast';
import Modalcard  from './Modalcard';
import {Container,Row,Col} from 'react-bootstrap'

import FormCard from '../componants/FormCard'
export class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            show:false,
            chosehornd:{},
            horndData:datah

        }
      
      }  
      onClose=()=>{
        this.setState({
          show:false
        })
        }
    
    onShow=(displaymodal)=>{
     console.log(displaymodal,"displaymodal");
     let chose = datah.find(item=>item.title===displaymodal
     )
     console.log( chose)   

   
     this.setState({
       
         chosehornd:chose,
     show:true
     
       })
    
console.log(this.state.chosehornd,"this.state.chosehornd")


}   

FiltringData=(hornd)=>{
  console.log(hornd,"data from Form")
 let selectHorndArr=[];
  if(hornd !=='defult'){
    selectHorndArr=datah.filter(beast=>{
      if(beast.horns===parseInt(hornd)){
        console.log(beast,"beast")
        return beast;    
       
  }else{
    selectHorndArr=this.state.horndData
  }
    }
   
    )

    this.setState({
      horndData:selectHorndArr
    })

 

}
}
           
    render() {
        return (
            <div>
            
      <FormCard 
      FiltringData={this.FiltringData}/>
                <Container fluid>
  <Row md={3} className="justify-content-md-center">
                             
                {
                    this.state.horndData.map(item => {
                   
                        return (

                           
                        <Col  xs={3} md={4}>

                        <Cardbeast
                        onShow={this.onShow}
                        onClose={this.onClose}
                            image_url={item.image_url}
                            title={item.title}
                            description={item.description}
                            keyword={item.keyword}
                        />
                        </Col>


      
      
                  
                  

                          
                         ) } )
                        }
                        </Row> 
                        </Container>
                       
          
                        <Modalcard 
        onClose={this.onClose}
  onShow={this.onShow}
  chosehornd={this.state.chosehornd}
  show={this.state.show}
  />

            </div>
        )
    }
}

export default Main
