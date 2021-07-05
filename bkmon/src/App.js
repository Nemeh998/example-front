
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componant/Header';
import {
  BrowserRouter ,
  Switch,
  Route
  
} from "react-router-dom";
import Home from './componant/Home'
import Favpage from './componant/Favpage'
export class App extends Component {



  render() {
    return (
     <>
     <Header />
     <BrowserRouter>
     <Switch>

      <Route path="/Home">
          <Home />
          </Route>


          <Route path="/Favpage">
            <Favpage />
          </Route>


          <Route path="/">
            {/* <Home /> */}
          </Route>

        </Switch>
        
        </BrowserRouter>

    
   
     </>
    )
  }
}

export default App
