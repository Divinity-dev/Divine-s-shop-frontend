

const Newproduct = () => {
    return (
        <div className="newproduct">
          <h1>New product</h1>
          <form className="newproductform">
          <label >Image</label>
          <input type="file" className="newproductforminput" />
          <label >Name</label>
          <input type="text" placeholder="Gown" className="newproductforminput"/>
          <label >stock</label>
          <input placeholder="123" className="newproductforminput"/>
          <label htmlFor="">Active</label>
          <select name="" id="" className="newproductforminput">
            <option value="">yes</option>
            <option value="">no</option>
          </select>
          </form>
          
        </div>
      )
}

export default Newproduct
