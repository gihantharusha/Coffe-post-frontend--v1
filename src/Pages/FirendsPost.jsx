import React, { useEffect, useState } from "react";
import "./firendsPost.css";
import Delete from "../Icons/delete-user.png";
import axios from "axios";

const FirendsPost = () => {

  const [res, setRes] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:5000/getPostById?id=${localStorage.getItem("choose_f_id")}`)
    .then(response=>{
      console.log(response)
      setRes(response.data)
    })
  }, [])

  return (
    <div className="firendsPost">
      <div className="top-section">
        <h1>{localStorage.getItem("choose_f_n")}</h1>
        <div className="delete">
          <img src={Delete} alt="" />
        </div>
        {/* delete */}
      </div>
      {/* top-section */}
      <div className="posts">
        <ul>
          {res?.map(e=>(
            <li>{e.post}</li>
          ))}
        </ul>
      </div>
      {/* posts */}
    </div>
    // firendspost
  );
};

export default FirendsPost;
