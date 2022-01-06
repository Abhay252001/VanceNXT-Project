import React from "react";
import Form from './form';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Submit from './submit'
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar>
      </Navbar>
      <Form></Form>
    </Router>
    
      /* // <Router>
      //   <Routes>
      //     <Route exact path='/' component={<Form/>} />
      //     <Route exact path='/submit' component={<Submit/>} />
      //   </Routes>
      // </Router> */
  );
};

export default App;
