import React, { useEffect, useState } from 'react'
import {popularProducts} from '../data'
import Product from './Product'
import './products.css'
import axios from 'axios';

const Products = ({filters, sort, cat}) => {
const [products, setProducts] = useState([]);
const [filteredproducts, setfilteredproducts] = useState([])
useEffect(()=>{
const getProducts = async () => {
  try {
    const res = await axios.get(
      cat? `http://localhost:5000/api/products?category=${cat}`:'http://localhost:5000/api/products'
    );
    setProducts(res.data)
  } catch (error) {
    
  }
}
getProducts();
},[cat])


useEffect(() => {
  let filtered = [...products]; 

  if (cat) {
    filtered = filtered.filter((item) => item.category === cat);
  }

  if (filters && Object.keys(filters).length > 0) {
    filtered = filtered.filter((item) =>
      Object.entries(filters).every(([key, value]) => item[key].includes(value))
    );
  }

  if (sort === 'newest') {
    filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sort === 'asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else {
    filtered.sort((a, b) => b.price - a.price);
  }

  setfilteredproducts(filtered.slice(0, 8)); 
}, [products, cat, filters, sort]);

console.log(filteredproducts)

  return (
    <div className='item'>
      {filteredproducts.map((items)=> (
        <Product item = {items} key={items.id}/>
      ))}
    </div>
  )
}

export default Products
