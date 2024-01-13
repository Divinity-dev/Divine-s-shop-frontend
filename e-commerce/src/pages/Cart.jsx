import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../components/Cart.css'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector(state=>state.cart)
 
  return (
    <div>
      < Announcement />
      <Navbar />
      <div className='cart'>
      <h1>Your Bag</h1>
      <div className='shopping'>
      <button  className='btn1'>Continue shopping</button>
       <div> <p>Shopping Bag(2)</p>
        <span>Your wishlist(0)</span></div>
      <button className='btn2'>Check out</button>
      </div>
      <div className='details'>
        <div className='detailschild'>
      {cart.products?.map(product=>
          <div className='info2'>
          <div className='photo'>
                 <img src={product.Img} alt="" />
            </div>
            <div  className='products'>
                <span><b>Product:</b> {product.Tittle}</span>
                <span><b>ID:</b>{product._id}</span>
                <div></div>
                <span><b>Size:</b>{product.size}</span>
            </div>
            <div className='num'>
            <div className='count'>
              <div>
              <ion-icon name="add-outline"></ion-icon>
              <span>{product.quantity}</span>
              <ion-icon name="remove-outline"></ion-icon>
              </div>
            </div>
            <span>${product.Price*product.quantity}</span>
            </div>
            
          </div>
        
        )}
      
        </div>
      
      <div className='summary'>
           <h1>Order summary</h1>
           <div className='summarychild'>
            <h3>Subtotal</h3>
            <h3>${cart.total}</h3>
           </div>
           <div className='summarychild'>
            <h3>Estimated shipping</h3>
            <h3>$5.90</h3>
           </div>
           <div className='summarychild'>
            <h3>Shipping discount</h3>
            <h3>$-5.90</h3>
           </div>
           <div className='total'>
            <h2>Total</h2>
            <h2>${cart.total}</h2>
           </div>
           <button>Checkout now</button>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
