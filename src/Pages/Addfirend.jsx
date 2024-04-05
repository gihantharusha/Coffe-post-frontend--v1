import React, { useState } from "react";
import { Link } from "react-router-dom";
import './addfirend.css'
import axios from "axios";

const Addfirend = () => {

  const [fName, setFname] = useState()

  const click = ()=>{
    axios.post(`https://coffe-post-backend-v1.onrender.com/addFirend?name=${fName}&id=${localStorage.getItem("id")}&fid=${localStorage.getItem("fid")}`)
    .then(response=>{
      console.log(response)
    })
  }

  return (
    <div className="add-a-firend">
      <div className="top-section">
        <h1>Add as a firend</h1>
      </div>
      {/* top-section */}
      <div className="page-section">
        <div className="input">
          <label htmlFor="name">firend name</label>
          <input type="text" id="name" placeholder="Add firend name here" onChange={e=>{
            e.preventDefault()
            setFname(e.target.value)
          }} />
        </div>
        {/* input */}
        <Link to="/firends">
          <button onClick={click} >Add firend</button>
        </Link>
      </div>
      {/* page-section */}
    </div>
    // add a firend
  );
};

export default Addfirend;
