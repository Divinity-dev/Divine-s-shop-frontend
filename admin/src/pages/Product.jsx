import { Link } from 'react-router-dom'
import Chart from '../components/Chart'
import { Productdata} from '../Graghdata'
import {Publish} from '@mui/icons-material'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {  useState } from 'react'
import Axios from 'axios'


const Product = () => {
const id = useParams()
const product = useSelector(state => state.product.products.find((item)=> item._id === id.productID))
const [Tittle, setTittle] = useState('')
const [Desc, setDesc] = useState('')
const [Price, setPrice] = useState(0)
const [inStock, setinStock] = useState(true)
const [pic, setpic] = useState('')


const user = useSelector(state=>state.user)
const handleFileChange = (e) => {
  const file = e.target.files[0];
  setpic(file);
  const reader = new FileReader();
  reader.onload = () => {
    const dataURL = reader.result; 
    setpic(dataURL); 
   
    
  };
  reader.readAsDataURL(file);
};

const Img = pic


    const update = async ()=>{
      try {
        const authToken = user.currentUser?.acessToken
             
        const config = {
          headers: {
            Authorization: `Bearer ${authToken}` 
          },
        }
        
        const res =await Axios.put(`http://localhost:5000/api/products/${id.productID}`, {Tittle, Desc,Img, Price, inStock, }, config)
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    



  return (
    <div className='userdetailcontainer'>
      <div className='userdetail'>
        <h1 className='title'>Product</h1>
        <Link to='/newproduct'>
        <button className='create'>create</button>
        </Link>
        </div>
<div className='productchart'>
<div className='chart'>
  <Chart data={Productdata} dataKey='Sales' title='sales chart'/>
</div>
<div className='chartinfo'>
  <div className='chartinfotitlte'>
    <img src={product.Img} alt="" className='chartinfophoto'/>
    <span>{product.Tittle}</span>
  </div>
  <div className='chartspan'>
    <span>id:</span>
    <span className='span2'>{product._id}</span>
  </div>
  <div className='chartspan'>
    <span>Sales:</span>
    <span className='span2'>1000</span>
  </div>
  
  <div className='chartspan'>
    <span>inStock:</span>
    <span className='span2'>{product.inStock}</span>
  </div>
</div>
</div>
<div className='upload'>
  <form className='uploadform'>
    <label htmlFor="">Product name</label>
    <input type="text" name="" id={product._id}  placeholder={product.Tittle} onChange={(e)=>setTittle(e.target.value)}/>
    <label htmlFor="">Product Description</label>
    <input type="text" name=""   placeholder={product.Desc} onChange={(e)=>setDesc(e.target.value)}/>
    <label htmlFor="">Price</label>
    <input type="Number" name=""   placeholder={product.Price} onChange={(e)=>setPrice(parseFloat(e.target.value))}/>
    <label htmlFor="">inStock</label>
    <select type="Boolean" name="" id="" className='uploadselect' onChange={(e) => setinStock(JSON.parse(e.target.value))}>
      <option value="true">yes</option>
      <option value="false">no</option>
    </select>
   
  </form>
<div className='edituserphoto'>
              <div className='photocontainer'>
              <img src={product.Img} 
              alt="" className='uploadphoto' />
              <label htmlFor="file">
              <Publish className='publish'/>
              </label>
              <input type="file" id='file' style={{display: "none"}} onChange={handleFileChange}/>
               
              </div>
              <button className='update' onClick={update}>update</button>
            </div>
</div>

    </div>
  )
}

export default Product
