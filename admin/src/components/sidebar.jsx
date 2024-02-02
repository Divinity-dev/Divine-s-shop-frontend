import React from 'react'
import {LineStyle, Timeline, TrendingUp, PersonOutline,Inventory2, AttachMoney,AssessmentOutlined, MailOutline, Forum, Chat, ManageAccounts} 
from '@mui/icons-material'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='listcontainer'>
        <h3>Dashboard</h3>
        <ul className='list active'>
          <li>
            <LineStyle className='indicators'/>
            Home
          </li>
        </ul>
        <ul className='list'>
          <li>
            <Timeline className='indicators'/>
            Analytics
          </li>
        </ul>
        <ul className='list'>
          <li>
            <TrendingUp className='indicators'/>
            Sales
          </li>
        </ul>
      </div>
      <div className='listcontainer'>
        <h3>Quickmenu</h3>
        <ul className='list'>
          <li>
            <PersonOutline className='indicators'/>
            Users
          </li>
        </ul>
        <ul className='list'>
          <li>
            <Inventory2 className='indicators'/>
           Products
          </li>
        </ul>
        <ul className='list'>
          <li>
            <AttachMoney className='indicators'/>
            Transactions
          </li>
          <li>
            <AssessmentOutlined className='indicators'/>
            Reports
          </li>
        </ul>
      </div>
      <div className='listcontainer'>
        <h3>Notiication</h3>
        <ul className='list'>
          <li>
            <MailOutline className='indicators'/>
            Mail
          </li>
        </ul>
        <ul className='list'>
          <li>
            <Forum className='indicators'/>
            Feedback
          </li>
        </ul>
        <ul className='list'>
          <li>
            <Chat className='indicators'/>
            Messages
          </li>
        </ul>
      </div>
      <div className='listcontainer'>
        <h3>Staff</h3>
        <ul className='list'>
          <li>
            <ManageAccounts className='indicators'/>
           Manage
          </li>
        </ul>
        <ul className='list'>
          <li>
            <Timeline className='indicators'/>
            Analytics
          </li>
        </ul>
        <ul className='list'>
          <li>
            <AssessmentOutlined className='indicators'/>
            Report
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
