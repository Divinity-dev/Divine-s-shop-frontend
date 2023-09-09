import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
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
            <div className='menuItem'><ion-icon name="cart-outline"></ion-icon></div>
           </div>
        </div>
      
    </div>
  )
}

export default Navbar
