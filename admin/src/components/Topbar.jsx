import React from 'react'
import { NotificationsNone, SettingsApplications, Language } from '@mui/icons-material';

const Topbar = () => {
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
      </div>
    </div>
  )
}

export default Topbar
