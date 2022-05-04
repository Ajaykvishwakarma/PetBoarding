import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { login} from "../Redux/Login/Action"
import { login} from "../Redux/Login/Action"
import { Navigate } from 'react-router-dom';
import "./Login.css";

export default function LogIn() {

  const [username, setUsername] = useState("");
  const [password , setPassword] = useState("");
  const dispatch = useDispatch()
  const {isAuthenticate} = useSelector((store)=> store.login)
  // console.log(isAuthenticate)

  const handleLogin = () => {
     
    dispatch(login({username,password}))
  }

  if(isAuthenticate){
    return <Navigate to={"/"}/>
  }

  return (
    <div className='loginContainer'>
      <h1>Login</h1>

      <input type="text" placeholder='Enter UserName' onChange={(e) => {setUsername(e.target.value)}}/><br /><br />

      <input type="text" placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}} /><br /><br />

      <button className='LoginButton' onClick={handleLogin}>Login</button>
    </div>
  )
}