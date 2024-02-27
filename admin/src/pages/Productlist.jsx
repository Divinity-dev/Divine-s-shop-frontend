import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material'
import {Link} from 'react-router-dom'

const Productlist = () => {
  const handclick = (id)=>{
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=>{
      return (<div className='displaypicture'>
              <img src={params.row.Img} alt=""  className='displayimage'/>
              {params.row.productname}
      </div>)
    } },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 120,
    },
    { field: 'Actions', headerName: 'Actions', width: 200, renderCell: (params)=>{
      return (<div className='displaypicture'>
        <Link to={'/product/' + params.row.id}>
        <button className='userlistEdit'>Edit</button>
        </Link>
              
               <DeleteOutline className='userlistDelete' onClick ={()=> handclick(params.row.id)}/>
      </div>)
    } },
  ];


const rows = [
    { id: 1, productname: 'Gown', Img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s',
  stock:150, status:'active', price:'$120' },
  { id: 2, productname: 'Gown', Img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s',
  stock:150, status:'active', price:'$120' },
  { id: 3, productname: 'Gown',Img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s',
  stock:150, status:'active', price:'$120' },
  { id: 4, productname: 'Gown',Img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s',
  stock:150, status:'active', price:'$120' },
  { id: 5, productname: 'Gown', Img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s',
  stock:150, status:'active', price:'$120' },
  { id: 6, productname: 'Gown', Img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s',
  stock:150, status:'active', price:'$120' },
  
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

export default Productlist
