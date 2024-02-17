import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material'

const Userlist = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
          return (<div className='displaypicture'>
                  <img src={params.row.avatar} alt=""  className='displayimage'/>
                  {params.row.username}
          </div>)
        } },
        { field: 'email', headerName: 'Email', width: 130 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'transaction',
          headerName: 'Transaction',
          width: 90,
        },
        { field: 'button', headerName: 'Button', width: 200, renderCell: (params)=>{
          return (<div className='displaypicture'>
                  <button className='userlistEdit'>Edit</button>
                   <DeleteOutline className='userlistDelete'/>
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
      
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      disableRowSelectionOnClick
        rows={rows}
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
