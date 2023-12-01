import React, { useState } from 'react';
import './Slidder.css';
import { sliderItems } from '../data';

const Slidder = () => {
 const [index, setindex] = useState(0);

 const handleclick = (name)=> {
  if(name === "arrow-back-circle-outline"){
     setindex(index === 0 ?  2 : index - 1)
  }else{
    setindex(index === 2 ?  0 : index + 1)
  }
  
 }


  return (
    <div className='items'>
      <div className='back'>
          <ion-icon name="arrow-back-circle-outline" onClick= {()=>handleclick("arrow-back-circle-outline")}></ion-icon>
        </div>
        <div className='forward'>
          <ion-icon name="arrow-forward-circle-outline" onClick= {()=>handleclick("arrow-forward-circle-outline")}></ion-icon>
        </div> 
      <div className='slidder-item' bg = {sliderItems[index].bg}>
        <img src={sliderItems[index].img} alt="" className='slidder-img' />
        <div className='slidder-desc'>
          <h1>{sliderItems[index].title}</h1>
          <p>{sliderItems[index].desc}</p>
          <button>Shop now</button>
        </div>
      </div>
        
      </div>
    
  );
}

export default Slidder;
