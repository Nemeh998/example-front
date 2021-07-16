import React, { Component } from 'react'
import CardCate from './CardCate'
import so from '../assets/so.jpg'


export class MainCate extends Component {
    render() {
        return (
            <div>
          <CardCate
          catName='so'
          catimg={so}
        /> 
            </div>
        )
    }
}

export default MainCate
