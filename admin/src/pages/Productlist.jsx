import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import  Axios  from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {getProductStart, getProductSuccess,  getProductfailure } from "../redux/ProductSlice"


const Productlist = () => {
  

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
        <Link to={'/product/' + params.row._id}>
        <button className='userlistEdit'>Edit</button>
        </Link>
              
               <DeleteOutline className='userlistDelete' onClick ={()=> handleDelete(params.row._id)}/>
      </div>)
    } },
  ];

  const dispatch = useDispatch()
  
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
      dispatch(getProductStart())
      const res = await Axios.get('http://localhost:5000/api/products', config)
      dispatch(getProductSuccess(res.data))
        setProduct(res.data)
      } catch (error) {
        dispatch(getProductfailure(error))
      }
    }
    getProducts()
  },[dispatch])
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
