import React from 'react'
import  './CategoryItems.css'




const CategoryItems = ({items}) => {
  return (
    <div className='category-items'>
      <img src={items.img} alt="" />
      <div className='category-desc'>
        <h2>{items.title}</h2>
        <button>shop now</button>
      </div>
    </div>
  )
}

export default CategoryItems
