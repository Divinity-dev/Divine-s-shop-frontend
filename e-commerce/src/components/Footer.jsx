import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='lefty'>
      <h1 className='shop'>Divine's shop</h1>
      <p>
        There are many variations of products available. Each item can be searrch with propersties
        such as color, size, Categories and popular demand. They are all the same product of varying 
        characteristics.
      </p>
      <div className='icons'>
        <div className='socials socials1'>
        <ion-icon name="logo-facebook"></ion-icon>
        </div>
        <div className='socials socials2'>
        <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <div className='socials socials3'>
        <ion-icon name="logo-twitter"></ion-icon>
        </div>
        <div className='socials socials4'>
        <ion-icon name="logo-pinterest"></ion-icon>
        </div>
      </div>
      </div>
      <div className='centy'>
         <h2>Useful links</h2>
         <ul>
            <li>
                Home
            </li>
            <li>
                Men fashion
            </li>
            <li>
                Accesories
            </li>
            <li>
                Order tracking
            </li>
            <li>
                White list
            </li>
            <li>
                Cart
            </li>
            <li>
                Women fashion
            </li>
            <li>
                My account
            </li>
            <li>
                Wishlist
            </li>
            <li>
                Terms
            </li>
            
         </ul>
      </div>
      <div className='righty'>
        <h2>Contact</h2>
        <div className='details'>
        <ion-icon name="location"></ion-icon>
        <h3>
            #7 uwa street off I.C.E road, Benin city.
        </h3>
        </div>
        <div className='details'>
        <ion-icon name="call"></ion-icon>
        <h3>
            +2348069715964
        </h3>
        </div>
        <div className='details'>
        <ion-icon name="mail"></ion-icon>
        <h3>
           divine_asiriuwa@yahoo.com
        </h3>
        </div>
        <img src="https://as2.ftcdn.net/v2/jpg/05/44/11/61/1000_F_544116186_wMwylR2U7NpAx90eZJlAyLkbnravVpCW.jpg" alt="" />
      </div>
    </div>
  )
}

export default Footer
