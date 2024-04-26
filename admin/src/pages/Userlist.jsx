import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import  Axios  from 'axios';
import { useSelector } from 'react-redux';

const Userlist = () => {
  const [users, setUsers] = useState([])
  const user = useSelector(state=>state.user)

  useEffect(()=>{
    const getUsers = async ()=>{
       try {
        const authToken = user.currentUser?.acessToken
         
        const config = {
          headers: {
            Authorization: `Bearer ${authToken}` 
          },
        }
        const res = await Axios.get('http://localhost:5000/api/user', config)
        setUsers(res.data)
       } catch (error) {
        
       }
    }
    getUsers()
  },[user.currentUser?.acessToken])
  const handleDelete = async (id)=>{
    try {
      const authToken = user.currentUser?.acessToken
         
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}` 
        },
      }
      const res = await Axios.delete(`http://localhost:5000/api/user/${id}`, config)
      setUsers(users.filter((user)=>user._id !== id))
      
    } catch (error) {
      
    }
    
  }
    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
          return (<div className='displaypicture'>
                  <img src={params.row.Img} alt=""  className='displayimage'/>
                  {params.row.username}
          </div>)
        } },
        { field: 'email', headerName: 'Email', width: 200 },
       
        
        { field: 'Actions', headerName: 'Actions', width: 200, renderCell: (params)=>{
          return (<div className='displaypicture'>
            <Link to={'/user/' + params.row._id}>
            <button className='userlistEdit'>Edit</button>
            </Link>
                  
                   <DeleteOutline className='userlistDelete' onClick ={()=> handleDelete(params.row._id)}/>
          </div>)
        } },
      ];
      
     
      
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      disableRowSelectionOnClick
        rows={users}
        columns={columns}
        getRowId={row=>row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Userlist
