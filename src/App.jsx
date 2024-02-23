import React from 'react';
import "./App.css";
import Menu from "./component/Navbar/Menu";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './component/Navbar/Home';
import AboutUs from './component/Navbar/AboutUs';
// import ContactUs from './component/Navbar/ContactUs.1';
import UserList from './component/UserList';
import Adduser from './component/AddUser';
 function App () {
  return (
  <>
<BrowserRouter>
<Menu/>
  <Routes>
    <Route path='/' exact element={<Home/>}></Route>
<Route path='/about' exact element={<AboutUs/>}></Route>
{/* <Route path='/contact' exact element={<Adduser />}></Route> */}
<Route path='/userlist' exact element={<UserList />}></Route>
<Route  path="/adduser" element={<Adduser/>} />


     </Routes>
</BrowserRouter>
   </>
  )
}
export default App;
