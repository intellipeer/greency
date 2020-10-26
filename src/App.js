import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

import Home from './views/Home'
import Device from './views/Device'
function App() {
  return (
    <div style={{backgroundColor:'#f4f4f4'}}>
       <NavBar/>
      <Router>
      <Switch>
          <Route path="/devices">
            <Device />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
