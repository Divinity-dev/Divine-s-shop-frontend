import './App.css';
import Topbar from './components/Topbar'
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className='maincomtainer'>
         <Sidebar/>
         <div className='center'>

         </div>
      </div>
    </div>
  );
}

export default App;
