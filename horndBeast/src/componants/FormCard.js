import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';
export class FormCard extends Component {
    constructor(props){
        super(props);
        this.state={
horand:'',
        }
    }



    ChoseBest=async(event)=>{
        event.preventDefault()
      
        await this.setState({
          horand:event.target.horand.value  
          
        })
        console.log(this.state.horand)
        this.props.FiltringData(this.state.horand);
    }
    render() {
        return (
            <div>
               <Form onSubmit={this.ChoseBest}>
  <Form.Group className="mb-3" controlId="formGroupPassword">
  <Form.Label>chose Hornd </Form.Label>
  <Form.Control as='select' name='horand'>
        <option value="defult">ALL</option>
        <option value="1">One</option>
        <option value="2">Tow</option>
        <option value="3">three</option>
        <option value="100">WOW</option>
      </Form.Control>

  </Form.Group>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>  
            </div>
        )
    }
}

export default FormCard
