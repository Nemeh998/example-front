import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './componants/Header';
import Mainlocatin from './componants/Mainlocatin';
function App() {
  return (
    <div>

<Header />
    <Router>
 
        <Switch>
          <Route exactpath="/Mainlocatin">
            <Mainlocatin />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
    </Router>
 
    </div>
  );
}

export default App;
