import React, { Component } from 'react'
import axios  from 'axios';
import FavPageCard from './FavPageCard';
import {Row,Col,Container} from 'react-bootstrap'
import UpdataModal from './UpdataModal';
export class Favpage extends Component {

        constructor(props) {

            super(props);
            this.state={
       favGame:[],
       show: false,
      name: "",
      level: "",
      id:-1,
            }
          }
          componentDidMount=()=>{
        const Url =`${process.env.REACT_APP_SERVER_URL}/getdatafromDataDb`;
        axios.get(Url)
        .then(result=>{
          console.log(result.data);
            this.setState({
                favGame:result.data,
               
            })
          })
            .catch(err=>{
                console.log('something wrong ',err)
            })
          
      
    }
    deleteCard=(id)=>{
        console.log(id);
        const Url =`${process.env.REACT_APP_SERVER_URL}/deletDataFromeDB/${id}`;
        axios.delete(Url)
        .then(result=>{
          console.log(result.data);
            this.setState({
                favGame:result.data,
               
            })
          })
            .catch(err=>{
                console.log('something wrong ',err)
            })
    }
    showModal = (object) => {
        this.setState({
          show: true,
          name: object.name,
          level: object.level,
          id:object._id,
        });
      };
      closeModal = () => {
        this.setState({
          show: false,
        });
      };
    
      updateFormData=(event)=>{
          event.preventDefault();
          
          const updateObj = {
              id:this.state.id,
              name:event.target.name.value,
              level:event.target.level.value,
          }
       const Url = `${process.env.REACT_APP_SERVER_URL}/updateDataFromDB`;
          axios.put(Url , updateObj)
          .then((result) => {
            this.setState({
              favGame: result.data,
              show:false,
            });
          })
          .catch((err) => {
            console.log("ERR THERE SOMETHING WRONG", err);
          });
      }
    render() {
        return (
            <Container >
                <div>nnnnnnnnnnnnnn</div>
            <Row>
            {this.state.favGame.map((item,idx)=>{
              return (

                <Col>
                <FavPageCard
                key={idx}
                item={item}
                deleteCard={this.deleteCard}
          showModal={this.showModal}
                />
                </Col>
              )
            })}
          </Row>
          <UpdataModal
     showModal={this.state.show}
     closeModal={this.state.show} 
     name={this.state.name}
     level={this.state.level}
     updateFormData={this.updateFormData}
          />
        </Container>


        )
    }
}

export default Favpage
