import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./Pages/Login"
import Singup from './Pages/Singup'
import Home from './Pages/Home'
import Addfirend from './Pages/Addfirend'
import AddNewPost from './Pages/AddNewPost'
import Firends from './Pages/Firends'
import FirendsPost from './Pages/FirendsPost'
import Test from "./Test"


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/singup' element={<Singup />} />
      <Route path='/home' element={<Home />} />
      <Route path='/addnewfirend' element={<Addfirend />} />
      <Route path="/addnewpost" element={<AddNewPost />} />
      <Route path='/firends' element={<Firends />} />
      <Route path='/firendspost' element={<FirendsPost />} />
      <Route path="/test/name=:username/id:id" element={<Test/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App