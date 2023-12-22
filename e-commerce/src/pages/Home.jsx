import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slidder from '../components/Slidder'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
    <Announcement />
    <Navbar />
    <Slidder />
    <Categories />
    <Products />
    <Newsletter />
    </>
  )
}

export default Home
