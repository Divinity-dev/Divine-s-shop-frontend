import React from 'react'
import './Navbar.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const quantity = useSelector((state)=> state.cart.quantity)
  return (
    <div className='container1'>
        <div className='wrapper'>
           <div className='left'>
            <span className='en'>EN</span>
            <div className='search'>
            <input />
            <ion-icon name="search-outline"></ion-icon>
            </div>
            </div>
           <div className='center'>
           <h1 className='shop'>Divine's shop</h1>
           </div>
           <div className='right'>
            <div className='menuItem'>register</div>
            <div className='menuItem'>sign in</div>
            <Link to={'/Cart'}>
            <div className='menuItem'><ion-icon name="cart-outline"></ion-icon> <span className="badge">{quantity}</span></div>
            </Link>
            
           </div>
        </div>
      
    </div>
  )
}

export default Navbar
