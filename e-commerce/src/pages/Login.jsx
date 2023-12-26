import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='register'>
       <div className='registercontainer2'>
        <h1>SIGN IN</h1>
      <form action="" className='holder2'>
        <div className='form1'>
        <input type="text"  placeholder=' username'/>
        <input type="text"  placeholder='password'/>
        </div>
        <button>sign in</button>
        <Link to=''>Do not remember password?</Link>
        <Link to=''>Create account</Link>
      </form>
    </div>
    </div>
  )
}

export default Login
