import React from 'react'
import { NotificationsNone, SettingsApplications, Language } from '@mui/icons-material';
import {useNavigate} from 'react-router-dom'
import { logout } from '../redux/userSlice'
import { useDispatch } from 'react-redux'

const Topbar = () => {
  const dispatch = useDispatch()
  const signOut = ()=>{
    dispatch(logout())
    navigate('/login')
 }
 const navigate = useNavigate()
  return (
    <div className='topbar'>
      <h1 className='logo'>Divineshop</h1>
      <div className='iconscontainer'>
        <div className='icons'>
        < NotificationsNone />
        <span className="badge">3</span>
        </div>
        <div className='icons'>
        < Language/>
        </div>
        <div className='icons'>
        < SettingsApplications />
        <span className="badge">3</span>
        </div>
        <img src="https://as2.ftcdn.net/v2/jpg/01/06/24/39/1000_F_106243915_97MVJgRC25acsXIpGDwyAzMyNbgoUKoT.jpg" alt="" className='avatar' />
        <div className='menuItem' onClick={signOut}>sign out</div>
      </div>
    </div>
  )
}

export default Topbar
