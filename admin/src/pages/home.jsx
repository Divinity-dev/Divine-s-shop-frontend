import React from 'react'
import Info from '../components/Info'
import Chart from '../components/Chart'
import {data} from '../Graghdata'

const Home = () => {
  return (
    <div>
      <Info/>
      <Chart data={data} grid title='User analytics' dataKey='active users'/>
    </div>
  )
}

export default Home