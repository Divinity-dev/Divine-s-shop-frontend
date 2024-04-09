import React from 'react'
import {Visibility} from '@mui/icons-material'
import { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import {useSelector} from 'react-redux'

const Smallwg = () => {
  const [users, setUsers] = useState([])
  const user = useSelector((state) => state.user);


  useEffect(()=>{
    const getUsers = async ()=>{
        try {
          const authToken = user.currentUser?.accessToken
          
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}` 
        }
      }
          const res = await Axios.get("http://localhost:5000/api/user/?new=true",config)
          setUsers(res.data)
        } catch (error) {
          
        }
       
    }
    getUsers()
  },[])
  console.log(users)
  return (
    <div className='smwg'>
      <span className="members">Newly joined members</span>
      <div className='memberprofile'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s" alt="" className="photo" />
      <div className='spans'>
      <span className="name">Tracy Asiriuwa</span>
      <span className="job">Sotware engineer</span>
      </div>
      <button className='visibility'>
      <Visibility className='vis'/>
      Display
      </button>
      </div>
      <div className='memberprofile'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s" alt="" className="photo" />
      <div className='spans'>
      <span className="name">Tracy Asiriuwa</span>
      <span className="job">Sotware engineer</span>
      </div>
      <button className='visibility'>
      <Visibility/>
      Display
      </button>
      </div>
      <div className='memberprofile'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s" alt="" className="photo" />
      <div className='spans'>
      <span className="name">Tracy Asiriuwa</span>
      <span className="job">Sotware engineer</span>
      </div>
      <button className='visibility'>
      <Visibility/>
      Display
      </button>
      </div>
      <div className='memberprofile'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s" alt="" className="photo" />
      <div className='spans'>
      <span className="name">Tracy Asiriuwa</span>
      <span className="job">Sotware engineer</span>
      </div>
      <button className='visibility'>
      <Visibility/>
      Display
      </button>
      </div>
      <div className='memberprofile'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s" alt="" className="photo" />
      <div className='spans'>
      <span className="name">Tracy Asiriuwa</span>
      <span className="job">Sotware engineer</span>
      </div>
      <button className='visibility'>
      <Visibility/>
      Display
      </button>
      </div>
      
    </div>
  )
}

export default Smallwg
