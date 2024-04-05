import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [path, setPath] = useState("/")

  const click = () => {
    axios
      .get(`http://localhost:5000/checkUsers?name=${name}&password=${password}`)
      .then((response) => {
        if(response.data.status === "ok"){
          localStorage.setItem("id", response.data.id)
          setPath("/home")

        }else{
          setPath("/")
        }
      });
  };
  // 66090d79321ab8a093f9ebca
  return (
    <div className="login">
      <div className="first-section">
        <h1>Log in</h1>
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
        <input type="password" placeholder="your password" onChange={e=>{
          e.preventDefault()
          setPassword(e.target.value)
        }} />

        <Link to="/singup">Create a new account</Link>

        <Link className="submit" onClick={click} to={path}>Log in</Link>
      </form>
    </div>
    // login
  );
};

export default Login;
