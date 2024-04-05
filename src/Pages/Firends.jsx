import React from 'react'
import './firends.css'
import axios from 'axios'
import {Link} from "react-router-dom"

const Firends = () => {

  const [firends, setFirends] = React.useState([])
  const [firend_name , setFirend_name] = React.useState()

  React.useEffect(()=>{
    axios.get(`https://coffe-post-backend-v1.onrender.com/getfirendsById?id=${localStorage.getItem("id")}`)
    .then(response=>{
      console.log(response)
      setFirends(response.data)
      
    })
  }, [])

  const choose_firend = (f_id, f_name)=>{
    localStorage.setItem("choose_f_id", f_id)
    localStorage.setItem("choose_f_n", f_name)
  }

  return (
    <div className="firends">
      <div className="top-section">
        <h1>Your firends</h1>
      </div>
      {/* top-section */}
      <div className="second-section">
        <h3>Your firends</h3>
        <ul>
          {firends?.map(e=>(
            <Link onClick={()=>choose_firend(e.firends_id, e.firend_N)} to="/firendsPost"><li>{e.firend_N}</li></Link>
          ))}
        </ul>
      </div>
      {/* second-section */}
    </div>
    // firends
  )
}

export default Firends