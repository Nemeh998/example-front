import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
export class Main extends Component {
location=()=>{

    let Url=`https://eu1.locationiq.com/v1/search.php?key=pk.f862f045a6fa351ba6796d9b3be8b916&city=Amman&format=json`
    console.log(Url)
}

    render() {
        return (
            <div>
                <Button variant="warning" onClick={this.location}>get data</Button> 
                gggggggggggg
            </div>
        )
    }
}

export default Main
