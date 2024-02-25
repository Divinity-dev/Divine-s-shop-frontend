import React from 'react'
import {Person, CalendarToday, PhoneAndroid, Mail, LocationSearching} from '@mui/icons-material'

const User = () => {
  return (
    <div className='userdetailcontainer'>
        <div className='userdetail'>
        <h1 className='title'>Edit user</h1>
      <button className='create'>create</button>
        </div>
      <div className='editcreateform'>
        <div className='profiles'>
            <div className='photodetails'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s" alt="" className='userprofilepicture'/>
            <div className='nametitlecontainer'>
                <span className="username">Tracy Asiriuwa</span>
                <span className="usertitle">Software engineer</span>
            </div>
            </div>
            <h4 className='account'>Account details</h4>
            <div className='accountdetails'>
                <Person className='person'/>
                <span>tracyasiriuwa20</span>
            </div>
            <div className='accountdetails'>
                <CalendarToday className='person'/>
                <span>11.08.1993</span>
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
          <div className='eidtusercontainer'>
            <div className='usereditinfo'>
              <form className='usereditform' >
                <label >Username</label>
                <input type="text" placeholder='tracyasiriuwa20'/>
                <label >Full name</label>
                <input type="text" placeholder='Tracy Asiriuwa' />
                <label >Phone </label>
                <input type="text" placeholder='+2348069715964' />
                <label >Email</label>
                <input type="text" placeholder='tracy@yahoo.com' />
                <label >Adress</label>
                <input type="text" placeholder='7 uwa street off ice road'/>
              </form>
            </div>
            <div className='edituserphoto'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
