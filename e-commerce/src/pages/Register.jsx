import React, { useState } from 'react'
import './register.css'
import  Axios  from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {
const [user, setUser] = useState({})

const handlechange = (e)=>{
  setUser({
    ...user,
    [e.target.name]:e.target.value
  })
}

const handleclick = async (e)=>{
e.preventDefault()
try {
  const res = await Axios.post('http://localhost:5000/api/auth/register', {...user})
  console.log(res.data)
  setUser({})
} catch (error) {
  console.log(error)
}
}


  return (
    <div className='register'>
        <div className='registercontainer'>
        <h1>Craete an account</h1>
      <form action="" className='holder'>
        <div className='form'>
        <input type="text"  placeholder=' First Name'/>
        <input type="text"  placeholder='Last Name'/>
        <input name="username" type="text"  placeholder='Username' onChange={handlechange}/>
        <input name="email" type="text"  placeholder='Email' onChange={handlechange}/>
        <input name="password" type="text"  placeholder='Password' onChange={handlechange}/>
        <input type="text"  placeholder='Confirm Password'/>
        </div>
        <p>By using this account, I consent to the processing of my personal data, according to the
            <b>PRIVACY POLICY</b>.
        </p>
        <button onClick={handleclick}>Create</button>
      </form>

      <span><Link to="/Login">Back</Link></span>
    </div>
    </div>
    
  )
}

export default Register
