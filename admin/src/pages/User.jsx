import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {Person, CalendarToday, PhoneAndroid, Mail, LocationSearching, Publish} from '@mui/icons-material'
import { useSelector } from 'react-redux'
import  Axios  from 'axios'
import {format} from 'timeago.js'


const User = () => {
const [person, setPerson] = useState({})
const [input, setInput] = useState({})
const [file, setfile] = useState('')
const id = useParams()
const user = useSelector(state=>state.user)
useEffect(()=>{
  const getPerson = async ()=>{
     try {
      const authToken = user.currentUser?.acessToken
             
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}` 
        },
      }
      const res = await Axios.get(`http://localhost:5000/api/user/find/${id.userID}`, config)
      setPerson(res.data)
     } catch (error) {
      console.log(error)
     }
  }
  getPerson()
},[user.currentUser.acessToken, id.userID])

const handlechange = (e)=>{
  setInput({
    ...input,
    [e.target.name]:e.target.value
})
}

const handleImage = (e)=>{
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const dataURL = reader.result; 
    setfile(dataURL);    
  };
  reader.readAsDataURL(file);
}


const update = async (e)=>{
  e.preventDefault()
  try {
    const authToken = user.currentUser?.acessToken
             
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}` 
        },
      }
      const res = await Axios.put(`http://localhost:5000/api/user/${id.userID}`,{...input, Img:file}, config)
       console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className='userdetailcontainer'>
        <div className='userdetail'>
        <h1 className='title'>Edit user</h1>
        <Link to='/newuser'>
        <button className='create'>create</button>
        </Link>
        </div>
      <div className='editcreateform'>
        <div className='profiles'>
            <div className='photodetails'>
            <img src={person.Img} alt="" className='userprofilepicture'/>
            <div className='nametitlecontainer'>
                <span className="username">{person.username}</span>
                <span className="usertitle">Software engineer</span>
            </div>
            </div>
            <h4 className='account'>Account details</h4>
            <div className='accountdetails'>
                <Person className='person'/>
                <span>{person.email}</span>
            </div>
            <div className='accountdetails'>
                <CalendarToday className='person'/>
                <span>{format(person.createdAt)}</span>
            </div>
            <h4 className='account'>contact details</h4>
            <div className='accountdetails'>
                <PhoneAndroid className='person'/>
                <span>+2348069715964</span>
            </div>
            <div className='accountdetails'>
                <Mail className='person'/>
                <span>tracy@yahoo.com</span>
            </div>
            <div className='accountdetails'>
                <LocationSearching className='person'/>
                <span>7 uwa street off ice road</span>
            </div>
        </div>
        <div className='createform'>
          <h2>Edit</h2>
          <div className='editusercontainer'>
            <div className='usereditinfo'>
              <form className='usereditform' >
                <label >Username</label>
                <input name='username' type="text" placeholder='tracyasiriuwa20' onChange={handlechange}/>
            
                <label >Phone </label>
                <input type="text" placeholder='+2348069715964' />
                <label >Email</label>
                <input name='email' type="text" placeholder='tracy@yahoo.com'onChange={handlechange} />
                <label >Password</label>
                <input name='password' type="text" placeholder='tracy@yahoo.com'onChange={handlechange} />
                <label >Adress</label>
                <input type="text" placeholder='7 uwa street off ice road'/>
              </form>
            </div>
            <div className='edituserphoto'>
              <div className='photocontainer'>
              <img src={person.Img} 
              alt="" className='uploadphoto' />
              <label htmlFor="file">
              <Publish className='publish'/>
              </label>
              <input type="file" id='file' style={{display: "none"}} onChange={handleImage}/>
               
              </div>
              <button onClick={update} className='update'>update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
