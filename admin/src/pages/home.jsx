import React, { useEffect, useState } from 'react'
import Info from '../components/Info'
import Chart from '../components/Chart'
import Smallwg from '../components/Smallwg'
import Largewg from '../components/Largewg'
import  Axios  from 'axios'
import {useSelector} from 'react-redux'

const Months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"
  ]


const Home = () => {
 
  const user = useSelector(state=>state.user)
  const [userStats, setuserStats]= useState([])
  useEffect(()=>{
    const getStats = async()=>{
    try {
      const authToken = user.currentUser?.acessToken
         
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}` 
        },
      }
      
        
      const res = await Axios.get("http://localhost:5000/api/user/stats", config);
      const statsData = res.data.map(items => ({
        name: Months[items._id - 1],
        "active users": items.total
      }));
      setuserStats(statsData);
      
    } catch (error) {
      
    }
  }
    getStats()
  }, [user])
  
  
  return (
    <div>
      <Info/>
      <Chart data={userStats} grid title='User analytics' dataKey='active users'/>
      <div className='homecomponents'>
       <Smallwg/>
       <Largewg/>
      </div>
    </div>
    
  )
}

export default Home