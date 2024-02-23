import React from "react";
import { Outlet} from "react-router-dom";
import { Link } from "react-router-dom";
function Menu() {
return(

    <>
    
  <div class=" container">
    <nav >
      <img src="./pho/logo5.jpg" alt="logo" height="70" />
     <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="#">Services</Link>
      <Link className="nav-link" to="#">Gallery</Link>
      <Link className="nav-link" to="/adduser">ContactUs</Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/Book">
        <img src="./pho/call.png" alt="" />
        To Book Call Us +912241498607 </Link>
    </nav>

    <Outlet/>
  </div>

  </>

);

};
export default Menu;