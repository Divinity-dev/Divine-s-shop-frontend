import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { loginStart, loginSuccess, loginfailure } from '../redux/userSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios'


const Login = () => {
  const [password, setpassword] = useState('')
  const [username, setusername] = useState('')
  const dispatch = useDispatch();
  const handlesumit = async(e)=>{
    e.preventDefault();
      dispatch(loginStart())
      try {
        const res = await axios.post("http://localhost:5000/api/auth/login", {username, password})
        dispatch(loginSuccess(res.data))
      } catch (error) {
        dispatch(loginfailure())
      }
      

  }
  return (
    <div className='register'>
       <div className='registercontainer2'>
        <h1>SIGN IN</h1>
      <form action="" className='holder2' onSubmit={handlesumit}>
        <div className='form1'>
        <input type="text"  placeholder=' username' onChange={(e)=>setusername(e.target.value)}/>
        <input  placeholder='password' onChange={(e)=>setpassword(e.target.value)} type = "password"/>
        </div>
        <button >sign in</button>
        <Link to=''>Do not remember password?</Link>
        <Link to=''>Create account</Link>
      </form>
    </div>
    </div>
  )
}

export default Login
