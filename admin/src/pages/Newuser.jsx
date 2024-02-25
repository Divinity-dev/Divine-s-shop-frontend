import React from "react";

const Newuser = () => {
  return (
    <div className="newuser">
      <h1 className="h1user">New user</h1>
        <form className="newuserform">
          <div className="useritem">
            <label htmlFor="">Username</label>
            <input type="text" placeholder="tracy@99" />
          </div>
          <div className="useritem">
            <label htmlFor="">Full name</label>
            <input type="text" placeholder="tracy Asiriuwa" />
          </div>
          <div className="useritem">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="tracy@yahoo.com" />
          </div>

          <div className="useritem">
            <label htmlFor="">Password</label>
            <input type="text" placeholder="password" />
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
              <button className="userbtn">Create</button>
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
