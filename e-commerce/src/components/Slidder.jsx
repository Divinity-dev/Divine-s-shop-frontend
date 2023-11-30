import React from 'react';
import './Slidder.css';

const Slidder = () => {
  return (
    <div className='items'>
      <div className='back'>
          <ion-icon name="arrow-back-circle-outline" ></ion-icon>
        </div>
        <div className='forward'>
          <ion-icon name="arrow-forward-circle-outline"></ion-icon>
        </div> 
      <div className='slidder-item'>
        <img src="https://i.ibb.co/DG69bQ4/2.png" alt="" className='slidder-img' />
        <div className='slidder-desc'>
          <h1>summer sale</h1>
          <p>Dress available now at discounted rate</p>
          <button>shop now</button>
        </div>
      </div>
        
      </div>
    
  );
}

export default Slidder;
