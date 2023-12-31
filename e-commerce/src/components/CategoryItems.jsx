import React from 'react'
import  './CategoryItems.css'
import { Link } from 'react-router-dom'




const CategoryItems = ({items}) => {
  return (
    <div className='category-items'>
      <Link to={`/Productlist/${items.category}`}>
      <img src={items.img} alt="" />
      <div className='category-desc'>
        <h2>{items.title}</h2>
        <button>shop now</button>
      </div>
      </Link>
    </div>
  )
}

export default CategoryItems
