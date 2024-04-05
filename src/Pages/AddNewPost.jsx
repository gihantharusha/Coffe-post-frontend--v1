import React, { useEffect, useState } from "react";
import "./addnewpost.css";
import LogOut from "../Icons/log-out.png";
import Send from "../Icons/send.png";
import { Link } from "react-router-dom";
import axios from "axios"

const AddNewPost = () => {
  const [post, setPost] = useState();
  const [res, setRes] = useState([])
  const [refresh , setRefresh] = useState(1)
  const [path, setPath] = useState("/addnewpost")

  useEffect(()=>{
    axios.get(`https://coffe-post-backend-v1.onrender.com/getPostById?id=${localStorage.getItem("id")}`)
    .then(response=>{
      setRes(response.data)
    })
  },[refresh])

  const send = ()=>{
    axios.post(`https://coffe-post-backend-v1.onrender.com/addPost?post=${post}&id=${localStorage.getItem("id")}`)
    .then(response=>{
      
      if(refresh === 1){
        setRefresh(0)
      }else{
        setRefresh(1)
      }
    })
  }

  const deleteUser = ()=>{
    axios.post(https://coffe-post-backend-v1.onrender.com/deleteUsers?id=${localStorage.getItem("id")}`)
    .then(response=>{
      setPath("/")
    })
    
  }


  return (
    <div className="addnewpost">
      <div className="top-section">
        <h1>Tharusha gihan</h1>
        <div className="logout">
          <Link to={path} onClick={deleteUser}>
            <img src={LogOut} alt="" />
          </Link>
        </div>
        {/* logout */}
      </div>
      {/* top-section */}
      <div className="post-section">
        <ul>
          {res?.map(e=>(
            <li>{e.post}</li>
          ))}

        </ul>
      </div>
      {/* post-section */}
      <div className="bottom-section">
        <textarea
          placeholder="your post"
          onChange={(e) => {
            e.preventDefault();
            setPost(e.target.value);
          }}
        />
        <div className="send">
          <img src={Send} alt="" onClick={send}/>
        </div>
      </div>
      {/* bottom-section */}
    </div>
    // addnewpost
  );
};

export default AddNewPost;
