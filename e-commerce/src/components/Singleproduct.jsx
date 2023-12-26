import React from 'react'
import './Singleproduct.css'

const Singleproduct = () => {
  return (
    <div className='single'>
      <div className='img'>
         <img src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
      </div>
      <div className='desc'>
        <div>
             <h1>Jump suit</h1>
         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
               Letraset sheets containing Lorem Ipsum passages, and more recently
             with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
         <span>Price: $200</span>
        </div>
        <div className='select'>
            <div className='color'>
               <span>Color</span>
               <div className='div div1'></div>
               <div className='div div2'></div>
               <div className='div div3'></div>
            </div>
            <div className='size'>
            <select name="" id=""  className='size'>
            <option value="" disabled selected >Size</option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
            
        </select>
            </div>
        </div>
        <div className='count'>
          <div>
          <ion-icon name="remove-outline"></ion-icon>
          <span>1</span>
          <ion-icon name="add-outline"></ion-icon>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Singleproduct
