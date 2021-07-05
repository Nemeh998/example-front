import React, { Component } from 'react'
import axios  from 'axios';
import GameCard from './GameCard'
import {Row,Col,Container} from 'react-bootstrap'
export class Home extends Component {
    constructor(props) {

        super(props);
        this.state={
          gameData:[]
        }
      }
//=========> Get data from API 
      componentDidMount=()=>{
          const Url =`${process.env.REACT_APP_SERVER_URL}/getDataFromApi`;
          axios.get(Url)
          .then(result=>{
            console.log(result.data);
              this.setState({
                  gameData:result.data,
                 
              })
            })
              .catch(err=>{
                  console.log('something wrong ',err)
              })
            
        
      }

      //=========> take fav from button && post ====> send it to back

      addToFav=(object)=>{
        console.log(object)
        const Url =`${process.env.REACT_APP_SERVER_URL}/addToFav`;
        axios.post(Url,object)
        .then(result=>{
          console.log(result.data,"post");
            
          })
            .catch(err=>{
                console.log('something wrong ',err)
            })
          
      

      }
   
    render() {
        return (
          <Container >
            <Row>
            {this.state.gameData.map((item,idx)=>{
              return (

                <Col>
                <GameCard 
                key={idx}
                item={item}
                addToFav={this.addToFav}
                />
                </Col>
              )
            })}
          </Row>
        </Container>
        )
    }
}

export default Home
