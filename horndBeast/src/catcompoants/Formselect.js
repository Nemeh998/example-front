import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap/'
// import {Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CatModal from './CatModal';

export class Formselect extends Component {
  constructor(props){
    super(props);
    this.state=({
name:'',
Highet:'',
likeCate:true,
faveCatBreeed:'',
show:false
    })
  }

   SubmitForm=async(event)=>{
      event.preventDefault()
      
      console.log('submit function')
      //setState Take time
      await this.setState  ({
      name:event.target.name.value,
      Highet:event.target.Highet.value,
      likeCate:event.target.likeCate.checked,
      faveCatBreeed:event.target.faveCatBreeed.value,
      show:true
    })
    // this line of code will take time to synic or to render 
    console.log(this.state.faveCatBreeed)
  }

  //  showModal=()=>{
  //    this.setState({
  
  //    })
  //  }
   closeModal=()=>{
    this.setState({
      show:false
    })
  }
  render() {
    return (
      <div>
 <Form onSubmit={this.SubmitForm}>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Name </Form.Label>
    <Form.Control type="Name" placeholder="Enter Name" name='name' />
    <Form.Label>Highet </Form.Label>
    <Form.Control type="Highet" placeholder="Enter Highet" name='Highet' />
  </Form.Group>

  <Form.Check
        inline
        type="checkbox"
        label=" do you likeCate?"
        name="likeCate"
    
      />

  <Form.Group className="mb-3" controlId="formGroupPassword">
  <Form.Label>Cat </Form.Label>
  <Form.Control as='select' name='faveCatBreeed'>
        <option>Angora</option>
        <option value="sheraz">sheraz</option>
        <option value="Angora">Angora</option>
        <option value="Baladi">Baladi</option>
      </Form.Control>

  </Form.Group>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>
<CatModal 
name={this.state.name}
Highet={this.state.Highet}
likeCate={this.state.likeCate}
faveCatBreeed={this.state.faveCatBreeed}
showModal={this.state.show}
closeModal={this.closeModal}/>

      </div>
    )
  }
}

export default Formselect

