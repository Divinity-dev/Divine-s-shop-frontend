import "./App.css";
import Topbar from "./components/Topbar";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import Userlist from "./pages/Userlist";
import { Routes, Route, Navigate } from "react-router-dom";
import User from "./pages/User";
import Newuser from "./pages/Newuser";
import Productlist from "./pages/Productlist";
import Newproduct from "./pages/Newproduct";
import Product from "./pages/Product";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.user.currentUser);
  console.log(user)
  return (
    <div className="App">
      
      {user &&<Topbar />}
      <div className="maincomtainer">
        {user && <Sidebar />}

        <div className="center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Userlist />} />
            <Route path="/user/:userID" element={<User />} />
            <Route path="/newuser" element={<Newuser />} />
            <Route path="/products" element={<Productlist />} />
            <Route path="/product/:productID" element={<Product />} />
            <Route path="/newproduct" element={<Newproduct />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
