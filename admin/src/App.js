import './App.css';
import Topbar from './components/Topbar'
import Sidebar from './components/sidebar';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className='maincomtainer'>
         <Sidebar/>
         <div className='center'>
           <Home/>
         </div>
      </div>
    </div>
  );
}

export default App;
