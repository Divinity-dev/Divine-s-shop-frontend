import React, { useState, useEffect } from 'react'
import {ArrowDownward, ArrowUpward} from '@mui/icons-material'
import  Axios  from 'axios'
import {useSelector} from 'react-redux'

const Info = () => {
  const [income, setincome] = useState([])
  const [percentage, setpercentage] = useState(0)
  const user = useSelector(state=>state.user)

useEffect(()=>{
 const getincome = async()=>{
  try {
    const authToken = user.currentUser?.acessToken
         
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}` 
        },
      }
    const res = await Axios.get('http://localhost:5000/api/Order/income', config)
    setpercentage((res.data[1].total*100)/res.data[0].total - 100)
    setincome(res.data)
    
  } catch (error) {
    
  }
  
 }
 getincome()
},[])
console.log(percentage)
  return (
    <div  className='Infocontainer'>
        <div className='reports'>
        <span className='revenue'>Revenue</span>
      <div className='moneycontainer'>
        <span className='money'>${income[1]?.total || 0}</span>
        <span className='change'> {percentage < 0? (<ArrowDownward className='negetive'/>)
        :(<ArrowUpward className='positive'/>)}</span>
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
        <span>2.5 <ArrowUpward className='positive'/></span>
      </div>
      <span className='month'>Compared to last month</span>
        </div>
     
    </div>
  )
}

export default Info
