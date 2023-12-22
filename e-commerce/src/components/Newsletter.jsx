import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='Newsletter'>
      <h1 className='heading'>
          NewsLetter
      </h1>
      <p>
        Get timely updates from your favourite products
      </p>
      <div className='input'>
        <input placeholder='Your email' />
        <button><ion-icon name="send"></ion-icon></button>
      </div>
    </div>
  )
}

export default Newsletter
