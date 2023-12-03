import React from 'react'
import './product.css'

const Product = ({item}) => {
  return (
    <div className='container'>
      <img src={item.img} alt="" />
      <div className='info'>
      <ion-icon name="cart-outline"></ion-icon>
      <ion-icon name="search-circle-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      </div>
    </div>
  )
}

export default Product
