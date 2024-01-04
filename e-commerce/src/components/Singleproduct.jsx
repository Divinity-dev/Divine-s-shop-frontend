import { useLocation } from 'react-router'
import './Singleproduct.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Singleproduct = () => {
  const [product, setproduct] = useState({})
  const [quantity, setquantity] = useState(1)
  const [size, setsize] = useState(1)
  const [color, setcolor] = useState(1)
  const location = useLocation()
  const id = location.pathname.split('/')[2]
  const handlequantity = (type)=>{
    if(type === 'dec'){
      quantity >1 && setquantity(quantity-1)
    }else{
      setquantity(quantity+1)
    }
    }
useEffect(()=>{
  const getProduct = async()=>{
    try {
      const res = await axios.get(`http://localhost:5000/api/products/find/${id}`)
  setproduct(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  getProduct()
},[id])


  return (
    <div className='single'>
      <div className='img'>
         <img src={product.Img} alt="" />
      </div>
      <div className='desc'>
        <div>
             <h1>{product.Tittle}</h1>
         <p>{product.Desc}</p>
         <span>Price: ${product.Price}</span>
        </div>
        <div className='color'>
  <span>Color</span>
  {product.color &&  product.color.map((c) => (
    <div className='div' color={c} key={c} style={{ backgroundColor: c }} onClick={()=>{setcolor(c)}}></div>
  ))}
</div>
<div className='size'>
  <select name="" id="" className='size'>
    <option value="" disabled selected >Size</option>
    {product.size &&  product.size.map((s) => (
      <option value={s} key={s} onChange={(e)=>{setsize(e.target.value)}}>{s}</option>
    ))}
  </select>
</div>

        <div className='count'>
          <div>
          <ion-icon name="remove-outline" onClick={()=>handlequantity('dec')}></ion-icon>
          <span>{quantity}</span>
          <ion-icon name="add-outline" onClick={()=>handlequantity('inc')}></ion-icon>
          </div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Singleproduct
