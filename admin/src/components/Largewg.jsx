import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'

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
        <tr className='customerdetails'>
          <td className='column'>
            <div className='usercontainer'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s" alt="" className='customerImage' />
            <h3 className='user'> Tracy Asiriuwa</h3>
            </div> 
          </td>
          <td className='column'>
            13/02/2024
          </td>
          <td className='column'>
            $500
          </td>
          <td className='column'>
           <Button type='declined'/>
          </td>
        </tr>
        <tr className='customerdetails'>
          <td className='column'>
          <div className='usercontainer'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s" alt="" className='customerImage' />
            <h3 className='user'> Tracy Asiriuwa</h3>
            </div> 
          </td>
          <td className='column'>
            13/02/2024
          </td>
          <td className='column'>
            $500
          </td>
          <td className='column'>
           <Button type='approved'/>
          </td>
        </tr>
        <tr className='customerdetails'>
          <td className='column'>
          <div className='usercontainer'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s" alt="" className='customerImage' />
            <h3 className='user'> Tracy Asiriuwa</h3>
            </div> 
          </td>
          <td className='column'>
            13/02/2024
          </td>
          <td className='column'>
            $500
          </td>
          <td className='column'>
           <Button type='pending'/>
          </td>
        </tr>
        <tr className='customerdetails'>
          <td className='column'>
          <div className='usercontainer'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s" alt="" className='customerImage' />
            <h3 className='user'> Tracy Asiriuwa</h3>
            </div> 
          </td>
          <td className='column'>
            13/02/2024
          </td>
          <td className='column'>
            $500
          </td>
          <td className='column'>
           <Button type='approved'/>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Largewg
