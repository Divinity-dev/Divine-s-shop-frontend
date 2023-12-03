import React from 'react'
import {popularProducts} from '../data'
import Product from './Product'
import './products.css'

const Products = () => {
  return (
    <div className='item'>
      {popularProducts.map((items)=> (
        <Product item = {items} key={items.id}/>
      ))}
    </div>
  )
}

export default Products
