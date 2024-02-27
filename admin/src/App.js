import './App.css';
import Topbar from './components/Topbar'
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Userlist from './pages/Userlist';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import Newuser from './pages/Newuser';
import Productlist from './pages/Productlist';
import Newproduct from './pages/Newproduct';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Topbar/>
      <div className='maincomtainer'>
         <Sidebar/>
         <div className='center'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/users' element={<Userlist/>}/>
            <Route path='/user/:userID' element={<User/>}/>
            <Route path='/newuser' element={<Newuser/>}/>
            <Route path='/products' element={<Productlist/>}/>
            <Route path='/product/:productID' element={<Product/>}/>
            <Route path='/newproduct' element={<Newproduct/>}/>
          </Routes>
           
         </div>
      </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
