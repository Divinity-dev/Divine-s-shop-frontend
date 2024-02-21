import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material'
import {Link} from 'react-router-dom'

const Userlist = () => {
  const handclick = (id)=>{
    setData(data.filter(item => item.id !== id))
  }
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
          return (<div className='displaypicture'>
                  <img src={params.row.avatar} alt=""  className='displayimage'/>
                  {params.row.username}
          </div>)
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 120,
        },
        { field: 'Actions', headerName: 'Actions', width: 200, renderCell: (params)=>{
          return (<div className='displaypicture'>
            <Link to={'/user/' + params.row.id}>
            <button className='userlistEdit'>Edit</button>
            </Link>
                  
                   <DeleteOutline className='userlistDelete' onClick ={()=> handclick(params.row.id)}/>
          </div>)
        } },
      ];
      
      const rows = [
        { id: 1, username: 'Divine Asiriuwa', avatar:'https://as2.ftcdn.net/v2/jpg/01/06/24/39/1000_F_106243915_97MVJgRC25acsXIpGDwyAzMyNbgoUKoT.jpg',
      email:'divineaasiriuwa@gmail.com', status:'active', transaction:'$120' },
      { id: 2, username: 'Divine Asiriuwa', avatar:'https://as2.ftcdn.net/v2/jpg/01/06/24/39/1000_F_106243915_97MVJgRC25acsXIpGDwyAzMyNbgoUKoT.jpg',
      email:'divineaasiriuwa@gmail.com', status:'active', transaction:'$120' },
      { id: 3, username: 'Divine Asiriuwa', avatar:'https://as2.ftcdn.net/v2/jpg/01/06/24/39/1000_F_106243915_97MVJgRC25acsXIpGDwyAzMyNbgoUKoT.jpg',
      email:'divineaasiriuwa@gmail.com', status:'active', transaction:'$120' },
      { id: 4, username: 'Divine Asiriuwa', avatar:'https://as2.ftcdn.net/v2/jpg/01/06/24/39/1000_F_106243915_97MVJgRC25acsXIpGDwyAzMyNbgoUKoT.jpg',
      email:'divineaasiriuwa@gmail.com', status:'active', transaction:'$120' },
      { id: 5, username: 'Divine Asiriuwa', avatar:'https://as2.ftcdn.net/v2/jpg/01/06/24/39/1000_F_106243915_97MVJgRC25acsXIpGDwyAzMyNbgoUKoT.jpg',
      email:'divineaasiriuwa@gmail.com', status:'active', transaction:'$120' },
      { id: 6, username: 'Divine Asiriuwa', avatar:'https://as2.ftcdn.net/v2/jpg/01/06/24/39/1000_F_106243915_97MVJgRC25acsXIpGDwyAzMyNbgoUKoT.jpg',
      email:'divineaasiriuwa@gmail.com', status:'active', transaction:'$120' },
      
      ];
      const [data, setData] = useState(rows)
      
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      disableRowSelectionOnClick
        rows={data}
        columns={columns}
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
