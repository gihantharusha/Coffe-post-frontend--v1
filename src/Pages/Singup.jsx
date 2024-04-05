import React, { useState } from "react";
import "./singup.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Singup = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  

  const click = () => {
    axios
      .post(`https://coffe-post-backend-v1.onrender.com/addUsers?name=${name}&password=${password}`)
      .then((res) => {
        localStorage.setItem("id", res.data._id)
      });
  };

  
  
  return (
    <div className="singup">
      <div className="first-section">
        <h1>Sing up</h1>
      </div>
      {/* first-section */}
      <form onSubmit={click}>
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="your password"
          onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        />

        <Link to="/test/tg" state={{username:"gihan"}}>Log in</Link>

         
            <Link
            className="submit"
            onClick={click}
            to="/home"
          >
            Sing up
          </Link>
          
        
      </form>
    </div>
    // login
  );
};

export default Singup;
