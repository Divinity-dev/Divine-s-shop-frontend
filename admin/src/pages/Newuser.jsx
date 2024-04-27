import { useState } from "react";
import { useSelector } from "react-redux";
import  Axios  from "axios";

const Newuser = () => {
  const [input, setInput] = useState({})


  const handlechange = (e)=>{
    setInput({
      ...input,
      [e.target.name]:e.target.value
  })
  }
  const user = useSelector(state=>state.user)
  const create = async (e)=>{
    e.preventDefault()
    try {
      const authToken = user.currentUser?.acessToken
             
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}` 
        },
      }
      const res =await Axios.post('http://localhost:5000/api/user/register', {...input}, config)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="newuser">
      <h1 className="h1user">New user</h1>
        <form className="newuserform">
          <div className="useritem">
            <label htmlFor="">Username</label>
            <input name="username" type="text" placeholder="tracy@99"  onChange={handlechange}/>
          </div>
          <div className="useritem">
            <label htmlFor="">Full name</label>
            <input type="text" placeholder="tracy Asiriuwa" />
          </div>
          <div className="useritem">
            <label htmlFor="">Email</label>
            <input name="email" type="text" placeholder="tracy@yahoo.com" onChange={handlechange}/>
          </div>

          <div className="useritem">
            <label htmlFor="">Password</label>
            <input name="password" type="text" placeholder="password" onChange={handlechange}/>
          </div>
          <div className="useritem">
            <label htmlFor="">Phone</label>
            <input type="text" placeholder="+2348069715964" />
          </div>
          <div className="useritem">
            <label htmlFor="">Adress</label>
            <input type="text" placeholder="7 uwa street off ice road" />
          </div>
            <div className="useritem">
              <label className="gender">Gender</label>
              <div className="radio">
                <input type="radio" name="gender" />
                <label htmlFor="">Male</label>
                <input type="radio" name="gender" />
                <label htmlFor="">Female</label>
              </div>
              <button className="userbtn" onClick={create}>Create</button>
            </div>
            <div className="useritem">
              <label>Active</label>
              <select name="" id="" className="select">
                <option value="Yes">Yes</option>
                <option value="Yes">No</option>
              </select>
            </div>
          
        </form>
      
    </div>
  );
};

export default Newuser;
