import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slidder from '../components/Slidder'
import Categories from '../components/Categories'
import Products from '../components/Products'

const Home = () => {
  return (
    <>
    <Announcement />
    <Navbar />
    <Slidder />
    <Categories />
    <Products />
    </>
  )
}

export default Home
