import React, { useState } from "react";
import "./home.css";
import Logo from "../Images/Logo.png";
import search from "../Icons/search.png";
import Add from "../Icons/add.png";
import Firends from "../Icons/firends.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios"

const Home = (props) => {
  const [firendSearch, setFirendSearch] = useState();
  const [firends, setfirends ] = useState([])

  
  // 6607b7b6fe4d3ace30fbd3ec
  const searchFirend = ()=>{
    axios.get(`https://coffe-post-backend-v1.onrender.com/findUserByName?name=${firendSearch}`)
    .then(response=>{
      console.log(response.data)
      setfirends(response.data)
    })
  }

  return (
    <div className="home">
      <div className="top-section">
        <img src={Logo} alt="logo" className="logo" />
        <input
          type="text"
          placeholder="search your firends"
          onChange={(e) => {
            e.preventDefault();
            setFirendSearch(e.target.value);
          }}
        />
        <img src={search} alt="search" className="search" onClick={searchFirend}/>
      </div>
      {/* top-section */}
      <div className="second-section">
        <ul>
          <Link to="/addnewpost">
            <li>
              <img src={Add} alt="" />
              <p>Add new post</p>
            </li>
          </Link>
          <Link to="/firends">
            <li>
              <img src={Firends} alt="" />
              <p>View firends post</p>
            </li>
          </Link>
        </ul>
      </div>
      {/* second-section */}
      <h2>Result</h2>
      <div className="result">
        <ul>
          {firends.map((e)=>(
            <li>
            <h2>{e.name}</h2>
            <Link to="/addnewfirend">
              <button>Add as a firend</button>
              {localStorage.setItem("fid", e._id)}
            </Link>
          </li>
          
          ))}

        </ul>
      </div>
      {/* result */}
    </div>
    // home
  );
};

export default Home;
