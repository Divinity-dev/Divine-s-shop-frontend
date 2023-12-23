
import Home from './pages/Home';
import Productlist from './pages/Productlist'
import {Routes, Route} from 'react-router-dom'
import Product from './pages/Product'

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Productlist" element={<Productlist />} />
    <Route path="/Product" element={<Product />} />
    </Routes>
   
    
    </>
  );
}

export default App;
