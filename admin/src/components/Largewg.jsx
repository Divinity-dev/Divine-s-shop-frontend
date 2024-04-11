import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import {format} from 'timeago.js'

const Largewg = () => {
const Button = ({type})=>{
return <button className={"wgbtn " + type}>{type}</button>
}
const user = useSelector(state=>state.user)
const [orders, setorders] = useState([]);
useEffect(()=>{
 const getOrders = async()=>{
  try {
    const authToken = user.currentUser?.acessToken
         
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}` 
        },
      }
    const res = await Axios.get('http://localhost:5000/api/Order', config)
    setorders(res.data)
  } catch (error) {
    
  }
  
 }
 getOrders()
})

  return (
    <div className='lgwg'>
      <h3 className="header">Latest transactions</h3>
      <table className='table'>
        <tr>
          <th className='tableheader'>
             customer
          </th>
          <th className='tableheader'>
             Date
          </th>
          <th className='tableheader'>
             Amount
          </th>
          <th className='tableheader'>
             status
          </th>
        </tr>
        {
          orders.map(order=>(
            <tr className='customerdetails' key={order._id}>
            <td className='column'>
              <div className='usercontainer'>
              
              <h3 className='user'> {order.UserId}</h3>
              </div> 
            </td>
            <td className='column'>
              {format(order.createdAt)}
            </td>
            <td className='column'>
              ${order.amount}
            </td>
            <td className='column'>
             <Button type={order.status}/>
            </td>
          </tr>
          ))
        }
        
        
      </table>
    </div>
  )
}

export default Largewg
