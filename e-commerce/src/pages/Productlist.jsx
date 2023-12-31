import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Filter from '../components/Filter'
import { Form, useLocation } from 'react-router-dom';
import {sort, filters} from '../components/Filter'
import '../components/Filter.css'
import { useState } from 'react'

const Productlist = () => {
  const location = useLocation()
  const cat = location.pathname.split('/')[2]
  const [filters, setfilters] = useState({})
  const [sort, setsort] = useState('newest')
  const handlechange = (e)=>{
    const value = e.target.value
    setfilters({
      ...filters,
      [e.target.name]:value
    })
  }
  return (
    <div>
      <Announcement />
      <Navbar />
      <div>
      <h1>Dresses</h1>
      <div className='filter'>
        <div className='filterchildren'>
           <span>Filtered Products:</span>
           <select name="color" id="" onChange={handlechange} >
            <option value="" disabled >color</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
        </select>
        <select name="size" id="" onChange={handlechange}>
            <option value="" disabled>Size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            
        </select>
        </div>
        <div className='filterchildren'>
        <span>Sorted Products:</span>
        <select name="" id="" onChange={(e)=>{setsort(e.target.value)}}>
            <option value="Newest" >Newest</option>
            <option value="asc">Price(asc)</option>
            <option value="desc">Price(desc)</option>
            
        </select>
        </div>
      </div>
    </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Productlist
