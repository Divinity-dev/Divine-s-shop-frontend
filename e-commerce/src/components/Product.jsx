import React from 'react'
import './product.css'

const Product = ({item}) => {
  return (
    <div>
      <img src={item.img} alt="" />
      <div>
      <ion-icon name="cart-outline"></ion-icon>
      <ion-icon name="search-circle-outline"></ion-icon>
      <ion-icon name="heart-outline"></ion-icon>
      </div>
    </div>
  )
}

export default Product
