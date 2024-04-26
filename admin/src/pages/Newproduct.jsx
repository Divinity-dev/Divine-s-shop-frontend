import { useState } from "react"
import { useSelector } from "react-redux"
import  Axios  from "axios"


const Newproduct = () => {
const [inputs, setInputs] = useState({})
const [file, setfile] = useState(null)
const [categories, setCat] = useState([])


const handlefile = (e)=>{
  const file = e.target.files[0];
  
  const reader = new FileReader();
  reader.onload = () => {
    const dataURL = reader.result; 
    setfile(dataURL);    
  };
  reader.readAsDataURL(file);
}
const handleCat = (e)=>{
  setCat(e.target.value.split(','))
}
const handlechange = (e)=>{
  setInputs({
    ...inputs,
    [e.target.name]: e.target.value
  })
}
const user = useSelector(state=>state.user)
const handleClick = async (e)=>{
e.preventDefault()
try {
  const authToken = user.currentUser?.acessToken
             
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}` 
    }
  }
 
  const res = await Axios.post("http://localhost:5000/api/products", {Img:file, ...inputs, categories}, config)
  console.log(res.data)
} catch (error) {
  console.log("error:" +error)
}
}


    return (
        <div className="newproduct">
          <h1>New product</h1>
          <form className="newproductform">
          <label >Image</label>
          <input type="file" id='file' className="newproductforminput" onChange={handlefile} />
          <label >Name</label>
          <input name="Tittle" type="text" placeholder="Gown" className="newproductforminput" onChange={handlechange}/>
          <label >Price</label>
          <input name="Price" type="Number" placeholder="100" className="newproductforminput" onChange={handlechange}/>
          <label >Description</label>
          <input name="Desc" type="text" placeholder="Gown" className="newproductforminput" onChange={handlechange}/>
          <label >Categories</label>
          <input type="text" placeholder="Gown, jeans" className="newproductforminput" onChange={handleCat}/>
          <select name="color" id="" onChange={handlechange}>
            <option >White</option>
            <option >Black</option>
            <option >Yellow</option>
            <option >Blue</option>
            <option >Green</option>
            <option >Red</option>
          </select>
          <label >stock</label>
          <select typeof="Boolean" name="inStock" id="" onChange={handlechange}>
            <option value="true">yes</option>
            <option value="false">no</option>
          </select>
          <button onClick={handleClick}>Upload</button>
          </form>
          
        </div>
      )
}

export default Newproduct
