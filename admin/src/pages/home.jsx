import React from 'react'
import Info from '../components/Info'
import Chart from '../components/Chart'
import {data} from '../Graghdata'
import Smallwg from '../components/Smallwg'
import Largewg from '../components/Largewg'

const Home = () => {
  return (
    <div>
      <Info/>
      <Chart data={data} grid title='User analytics' dataKey='active users'/>
      <div className='homecomponents'>
       <Smallwg/>
       <Largewg/>
      </div>
    </div>
    
  )
}

export default Home