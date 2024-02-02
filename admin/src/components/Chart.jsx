import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({title, data, dataKey, grid}) => {
    
  return (
    <div className='chart'>
      <h3>{title}</h3>
      <ResponsiveContainer width='100%' aspect={4/1}>
        <LineChart data={data }>
            <XAxis dataKey={dataKey} stroke='#5550bd'/>
            <Line dataKey={dataKey} type='monotone' stroke='#5550bd'></Line>
            <Tooltip/>
            {grid && <CartesianGrid strokeDasharray='5 5'/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
