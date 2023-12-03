import React from 'react'
import {popularProducts} from '../data'
import Product from './Product'

const Products = () => {
  return (
    <div>
      {popularProducts.map((items)=> (
        <Product item = {items} key={items.id}/>
      ))}
    </div>
  )
}

export default Products
