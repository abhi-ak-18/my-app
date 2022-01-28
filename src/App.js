//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <>
    <Router>
    <Navbar title="AK UTILS"/>
    <br />
    <div className='container'>

    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm heading="Enter the text to analyze below:"/>
          </Route>
    </Switch>
      
     </div>
     </Router>
    
    </>
);
}

//export default App;
