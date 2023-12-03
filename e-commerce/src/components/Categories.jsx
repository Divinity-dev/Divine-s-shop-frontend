import React from 'react'
import CategoryItems from './CategoryItems'
import { categories } from '../data'
import './Categories.css'

const Categories = () => {
  return (
    <div className='items'>
      {
        categories.map((item)=>(
            <CategoryItems items = {item} key={item.id}/>
        ))
      }
    </div>
  )
}

export default Categories
