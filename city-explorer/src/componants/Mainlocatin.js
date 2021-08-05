import axios from 'axios';
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
export class Mainlocatin extends Component {
    constructor(props){
        super(props);
        this.state={
            searchqury:'',
            cityName:'',
AllrequstData:[],
// size:0,
show:false,
        }
    }
   
    //========================get data from Api =======================
    location= async(event)=>{
event.preventDefault()
this.setState({
    searchqury:event.target.city.value,
    // size:parseInt(event.target.size.value)

})
console.log(this.size,"size")
let Url=`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOQATION_KEY}&q=${this.state.searchqury}&format=json`;
let requstData=await axios.get(Url);
console.log(Url)
this.setState({
    AllrequstData:requstData.data[0],
show:true

}) 
console.log(this.state.AllrequstData,".AllrequstData")
    }


    
 
    render() {
        return (
           
                 <div>
      
                <Form onSubmit={this.location}> 
                <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" placeholder="name of city" name='city' />
    {/* <Form.Control type="number" placeholder="map size" name='size' /> */}
  </Form.Group>
  <p>
              City NAME: {this.state.AllrequstData.display_name}
           </p>
  <Button variant="warning" type="submit" >get data</Button> 
</Form>
         {this.state.show&&

          <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOQATION_KEY}&center=${this.state.AllrequstData.lat},${this.state.AllrequstData.lon}&zoom=5&size=200`}/>
        } 
        </div>
        )
    }
}

export default Mainlocatin
