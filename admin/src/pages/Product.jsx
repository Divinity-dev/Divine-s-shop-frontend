import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../components/Chart'
import { Productdata} from '../Graghdata'

const Product = () => {
  return (
    <div className='userdetailcontainer'>
      <div className='userdetail'>
        <h1 className='title'>Product</h1>
        <Link to='/newuser'>
        <button className='create'>create</button>
        </Link>
        </div>
<div className='productchart'>
<div className='chart'>
  <Chart data={Productdata} dataKey='Sales' title='sales chart'/>
</div>
<div className='chartinfo'>
  <div className='chartinfotitlte'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbfDDvvP-Ui1mHwsJP1F7QCKZDbs51d2oWVKBtVxWOUw&s" alt="" className='chartinfophoto'/>
    <span>Gown dresses</span>
  </div>
  <div className='chartspan'>
    <span>id:</span>
    <span className='span2'>1</span>
  </div>
  <div className='chartspan'>
    <span>Sales:</span>
    <span className='span2'>1000</span>
  </div>
  <div className='chartspan'>
    <span>Active:</span>
    <span className='span2'>yes</span>
  </div>
  <div className='chartspan'>
    <span>inStock:</span>
    <span className='span2'>no</span>
  </div>
</div>
</div>
<div>

</div>

    </div>
  )
}

export default Product
