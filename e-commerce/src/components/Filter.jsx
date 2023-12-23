import React from 'react'
import './Filter.css'

const Filter = () => {
  return (
    <div>
      <h1>Dresses</h1>
      <div className='filter'>
        <div className='filterchildren'>
           <span>Filtered Products:</span>
           <select name="" id="">
            <option value="" disabled selected>color</option>
            <option value="">White</option>
            <option value="">Black</option>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Yellow</option>
            <option value="">Green</option>
        </select>
        <select name="" id="">
            <option value="" disabled selected>Size</option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
            
        </select>
        </div>
        <div className='filterchildren'>
        <span>Sorted Products:</span>
        <select name="" id="">
            <option value="" disabled selected>Newest</option>
            <option value="">Price(asc)</option>
            <option value="">Price(desc)</option>
            
        </select>
        </div>
      </div>
    </div>
  )
}

export default Filter
