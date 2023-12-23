import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import Filter from '../components/Filter'

const Productlist = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Filter />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Productlist
