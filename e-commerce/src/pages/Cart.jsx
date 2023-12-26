import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../components/Cart.css'

const Cart = () => {
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
        <div className='info2'>
      <div className='photo'>
             <img src="data:image/jpeg;base64,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" alt="" />
        </div>
        <div  className='products'>
            <span><b>Product:</b> Divine thunder shoes</span>
            <span><b>ID:</b>933405678</span>
            <div></div>
            <span><b>Size:</b>37.5</span>
        </div>
        <div className='num'>
        <div className='count'>
          <div>
          <ion-icon name="add-outline"></ion-icon>
          <span>1</span>
          <ion-icon name="remove-outline"></ion-icon>
          </div>
        </div>
        <span>$30</span>
        </div>
        
      </div>
      <hr />
      <div className='info2'>
      <div className='photo'>
             <img src="data:image/jpeg;base64,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" alt="" />
        </div>
        <div  className='products'>
            <span><b>Product:</b> Divine thunder shoes</span>
            <span><b>ID:</b>933405689</span>
            <div></div>
            <span><b>Size:</b>40</span>
        </div>
        <div className='num'>
        <div className='count'>
          <div>
          <ion-icon name="add-outline"></ion-icon>
          <span>1</span>
          <ion-icon name="remove-outline"></ion-icon>
          </div>
        </div>
        <span>$20</span>
        </div>
        
      </div>
        </div>
      
      <div className='summary'>
           <h1>Order summary</h1>
           <div className='summarychild'>
            <h3>Subtotal</h3>
            <h3>$80</h3>
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
            <h2>$80</h2>
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
