import React, { Component } from 'react'
import Header from './componants/Header'
import Main from './componants/Main'
import MainCate from './catcompoants/MainCate'
import Formselect from './catcompoants/Formselect'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
export class App extends Component {
  render() {
    return(
      <div>
        < Header />
  
        <Router>
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route exact path="/MainCate">
            <MainCate />
          </Route>
          <Route exact path="/Main">
          <Main />
           </Route> 
        </Switch>
        <Route exact path="/Formselect">
          <Formselect />
           </Route> 
        
    </Router>
  
      </div>
    )

  }
}

export default App
