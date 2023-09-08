import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
        <div className='wrapper'>
           <div className='left'>
            <span>EN</span>
            <div className='search'>
            <input />
            <ion-icon name="search-outline"></ion-icon>
            </div>
            
            </div>
           <div className='center'>
              center
           </div>
           <div className='right'>right</div>
        </div>
      
    </div>
  )
}

export default Navbar
