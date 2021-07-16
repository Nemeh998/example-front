import React, { Component } from 'react'
import Header from './componants/Header'
import Main from './componants/Main'
import MainCate from './catcompoants/MainCate'

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
          <Route path="/Main">
          <Main />
           </Route> 
        </Switch>

    </Router>
      </div>
    )

  }
}

export default App
