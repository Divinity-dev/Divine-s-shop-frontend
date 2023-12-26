
import Home from './pages/Home';
import Productlist from './pages/Productlist'
import {Routes, Route} from 'react-router-dom'
import Product from './pages/Product'
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Productlist" element={<Productlist />} />
    <Route path="/Product" element={<Product />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Cart" element={<Cart />} />
    </Routes>
   
    
    </>
  );
}

export default App;
