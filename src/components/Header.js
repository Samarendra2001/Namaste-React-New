import { LOGO } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const[btnName,setbtnName]=useState("LogIn");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">AboutUs</Link></li>
            <li><Link to="contact">ContactUs</Link></li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{
              btnName==="LogIn"?setbtnName("LogOut"):setbtnName("LogIn")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;