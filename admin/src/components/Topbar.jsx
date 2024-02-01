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
      </div>
    </div>
  )
}

export default Topbar
