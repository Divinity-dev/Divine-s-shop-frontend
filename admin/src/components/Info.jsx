import React from 'react'
import {ArrowDownward} from '@mui/icons-material'

const Info = () => {
  return (
    <div  className='Infocontainer'>
        <div className='reports'>
        <span className='revenue'>Revenue</span>
      <div className='moneycontainer'>
        <span className='money'>$2400</span>
        <span className='change'>-2.5 <ArrowDownward className='negetive'/></span>
      </div>
      <span className='month'>Compared to last month</span>
        </div>
        <div className='reports'>
        <span className='revenue'>Revenue</span>
      <div className='moneycontainer'>
        <span className='money'>$2400</span>
        <span>-2.5 <ArrowDownward className='negetive'/></span>
      </div>
      <span className='month'>Compared to last month</span>
        </div>
        <div className='reports'>
        <span className='revenue'>Revenue</span>
      <div className='moneycontainer'>
        <span className='money'>$2400</span>
        <span>2.5 <ArrowDownward className='positive'/></span>
      </div>
      <span className='month'>Compared to last month</span>
        </div>
     
    </div>
  )
}

export default Info
