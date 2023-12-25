import React from 'react'
import './register.css'

const Register = () => {
  return (
    <div className='register'>
        <div className='registercontainer'>
        <h1>Craete an account</h1>
      <form action="" className='holder'>
        <div className='form'>
        <input type="text"  placeholder=' First Name'/>
        <input type="text"  placeholder='Last Name'/>
        <input type="text"  placeholder='Username'/>
        <input type="text"  placeholder='Email'/>
        <input type="text"  placeholder='Password'/>
        <input type="text"  placeholder='Confirm Password'/>
        </div>
        <p>By using this account, I consent to the processing of my personal data, according to the
            <b>PRIVACY POLICY</b>.
        </p>
        <button>Create</button>
      </form>
    </div>
    </div>
    
  )
}

export default Register
