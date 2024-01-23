import React, { useState, useEffect } from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../components/Cart.css'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { userRequest } from '../request'

const Cart = () => {
  const navigate = useNavigate()
  const cart = useSelector(state=>state.cart)
  const [stripeToken, setstripeToken] = useState(null)
  const ontoken = (token)=>{
   setstripeToken(token)
  }
  useEffect(()=>{
    const request = async ()=>{
      try {
       const res = await userRequest.post('/payment/checkout',{
        tokenId: stripeToken.id,
           amount: cart.total*100
        })
        console.log(res.data)
        navigate('/success', {
          stripeData: res.data,
          products: cart, })
      } catch (error) {
        console.log(error)
      }

    };
    stripeToken && cart.total >0 && request();
  },[stripeToken, cart.total, navigate])
 
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
           <StripeCheckout
            name='Divne's shop
            image='https://as2.ftcdn.net/v2/jpg/01/06/24/39/1000_F_106243915_97MVJgRC25acsXIpGDwyAzMyNbgoUKoT.jpg'
            billingAddress
            shippingAddress
            description={`your total is $${cart.total}`}
            token={ontoken}
            amount={cart.total*100}
            stripeKey='pk_test_51NlyZwGdxUlG0jGDOpKyLXHOkkErks53CW2qFb2oW5zuWu6FnXP5K27uYwbV2cminQqTYQffBzqNy5s7ybO0qCK800DeATeO84'
           >
           <button>Checkout now</button>
           </StripeCheckout>
           
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
