import React, { Component } from 'react'
import datah from './datah.json'
import Cardbeast from './Cardbeast';
import {Container,Row,Col} from 'react-bootstrap'
export class Main extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Container fluid>
  <Row md={3} className="justify-content-md-center">
                             
                {
                    datah.map(item => {
                        console.log(item)
                        return (

                           
                        <Col  xs={3} md={4}>

                        <Cardbeast
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
            </div>
        )
    }
}

export default Main
