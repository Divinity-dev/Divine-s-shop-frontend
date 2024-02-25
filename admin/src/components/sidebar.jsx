import React from 'react'
import {LineStyle, Timeline, TrendingUp, PersonOutline,Inventory2, AttachMoney,AssessmentOutlined, MailOutline, Forum, Chat, ManageAccounts} 
from '@mui/icons-material'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='listcontainer'>
        <h3>Dashboard</h3>
        <ul className='list active'>
          <Link to='/' className='link'>
          <li>
            <LineStyle className='indicators'/>
            Home
          </li>
          </Link>
          
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
          <Link to='/users' className='link'>
          <li>
            <PersonOutline className='indicators'/>
            Users
          </li>
          </Link>
          
        </ul>
        <ul className='list'>
          <Link to='/products' className='link'>
          <li>
            <Inventory2 className='indicators'/>
           Products
          </li>
          </Link>
          
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
