import { useState } from 'react'
import './App.css'
import {Routes , Route } from "react-router-dom"
import LoginPage from './Components/LoginPage'
import SignUpPage from './Components/SignUpPage'
function App() {

  return (
    <div className="navbar"> 
    <Routes> 
        <Route path="/" component={<LoginPage/> } /> 
        <Route path="./Components/SignUpPage" component={<SignUpPage/> } /> 
   </Routes> 
</div>
  )
}

export default App
