import React from 'react'
import './Navbar.css'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/userSlice'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const quantity = useSelector((state)=> state.cart.quantity)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const signOut = ()=>{
     dispatch(logout())
     navigate('/login')
  }
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
            <div className='menuItem' onClick={signOut}>sign out</div>
           </div>
        </div>
      
    </div>
  )
}

export default Navbar
