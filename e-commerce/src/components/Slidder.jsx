import React from 'react'
import  './Slidder.css'

const Slidder = () => {
  return (
    <div className='arrows'>
      <div className='back' >
      <ion-icon name="arrow-back-circle-outline" ></ion-icon>
      </div>
      <div className='forward'>
      <ion-icon name="arrow-forward-circle-outline"></ion-icon>
      </div> 
    </div>
  )
}

export default Slidder
