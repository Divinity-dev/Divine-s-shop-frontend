import React from 'react'
import {LineStyle, Timeline, TrendingUp} from '@mui/icons-material'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='listcontainer'>
        <h3>Dashboard</h3>
        <ul className='list active'>
          <li>
            <LineStyle/>
            Home
          </li>
        </ul>
        <ul className='list'>
          <li>
            <Timeline/>
            Analytics
          </li>
        </ul>
        <ul className='list'>
          <li>
            <TrendingUp/>
            Sales
          </li>
        </ul>
      </div>
      <div className='listcontainer'>
        <h3>Dashboard</h3>
        <ul className='list'>
          <li>
            <LineStyle/>
            Home
          </li>
        </ul>
        <ul className='list'>
          <li>
            <Timeline/>
            Analytics
          </li>
        </ul>
        <ul className='list'>
          <li>
            <TrendingUp/>
            Sales
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
