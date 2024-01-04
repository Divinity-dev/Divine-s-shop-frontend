import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'

const Product = ({item}) => {
  return (
    <div className='container'>
      <img src={item.Img} alt="" />
      <div className='info'>
      <ion-icon name="cart-outline"></ion-icon>
      <Link to={`/Product/${item._id}`}>
      <ion-icon name="search-circle-outline"></ion-icon>
      </Link>
      <ion-icon name="heart-outline"></ion-icon>
      </div>
    </div>
  )
}

export default Product
