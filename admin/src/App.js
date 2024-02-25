import './App.css';
import Topbar from './components/Topbar'
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Userlist from './pages/Userlist';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import Newuser from './pages/Newuser';

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
            <Route path='/user/' element={<Newuser/>}/>
          </Routes>
           
         </div>
      </div>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
