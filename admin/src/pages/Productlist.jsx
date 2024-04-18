import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import  Axios  from 'axios';
import { useSelector } from 'react-redux';


const Productlist = () => {
  const handclick = (id)=>{
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=>{
      return (<div className='displaypicture'>
              <img src={params.row.Img} alt=""  className='displayimage'/>
              {params.row.Tittle}
      </div>)
    } },
    { field: 'inStock', headerName: 'Stock', width: 200 },
    
    {
      field: 'Price',
      headerName: 'Price',
      width: 120,
    },
    { field: 'Actions', headerName: 'Actions', width: 200, renderCell: (params)=>{
      return (<div className='displaypicture'>
        <Link to={'/product/' + params.row.id}>
        <button className='userlistEdit'>Edit</button>
        </Link>
              
               <DeleteOutline className='userlistDelete' onClick ={()=> handleDelete(params.row._id)}/>
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
  const [product, setProduct] = useState({})
  const user = useSelector(state=>state.user)
  useEffect(()=>{
    const getProducts = async ()=>{
      try {
        const authToken = user.currentUser?.acessToken
         
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}` 
        },
      }
     
      const res = await Axios.get('http://localhost:5000/api/products', config)
        setProduct(res.data)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    getProducts()
  },[])
  const handleDelete = async (id) => {
    try {
      const authToken = user.currentUser?.acessToken
         
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}` 
        },
      }
      await Axios.delete(`http://localhost:5000/api/products/${id}`, config);
      // Filter out the deleted product from the data
      setProduct(product.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  
return (
<div style={{ height: 400, width: '100%' }}>
  <DataGrid
  disableRowSelectionOnClick
    rows={product}
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

export default Productlist
