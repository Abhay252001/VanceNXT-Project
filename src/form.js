import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import Submit from './submit'
import "./index.css";
// import {
//   BrowserRouter as Router,
//   useRoutes,
// } from "react-router-dom";

const Form = () => {
  
  // const [Title, setTitle] = useState('');
  // const [Body, setBody] = useState('');
  const [isAuth, setIsAuth] = useState(true);
  // let routes = useRoutes([
  //   { path: "/submit", element: <Submit /> },
  // ]);

  if(!isAuth){
    
    // return routes;
    return <Navigate to="/submit" />
  }
  
  function handleChange(){
    setIsAuth(false);
  }

  return (
    <div className="create">
      <h2>Enter Project Details</h2>
      <form action="/submit.js">
        <label>Project Title:</label>
        <input
          type="text" 
          required 
          // value={Title}
          // onChange={(e) => setTitle(e.target.value)}
        />
        <label>Project Goal and Objectives:</label>
        <textarea 
          required 
          // value={Body}
          // onChange={(e) => setBody(e.target.value)}
        />
        
        <label>Project Scope:</label>
        <input
            type="text" 
            required
        />
        
        <label>Project Plan</label>
        <textarea
            required
        />

        <label>Project Deliverables: </label>
        <textarea
            required
        />

        <label>Project incentives: </label>
        <textarea
            required
        />

        <label>Project Terms and Conditions: </label>
        <textarea
            required
        />
  
        {/* <label>Select: </label>
        <select>
          <option value="opt1">opt1</option>
          <option value="opt2">opt2</option>
        </select>
        <h2>Select options:</h2>
        <input type="checkbox" id="opt1" name="opt1" value="Opt-1"></input>
        <label for="opt1"> 1</label>
        <br />
        <input type="checkbox" id="opt2" name="opt2" value="Opt-2"></input>
        <label for="opt2"> 2</label>
        <br />
        <input type="checkbox" id="opt3" name="opt3" value="Opt-3"></input>
        <label for="opt3"> 3</label> 
        <br />
        <br />*/}
        <br />
        <button 
          type="submit" 
          value="submit" 
          className="button-style"
          onClick={ handleChange }
        >Submit
        </button>
      </form>
    </div>
  );
};



export default Form;
