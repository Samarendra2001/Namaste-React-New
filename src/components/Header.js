import { LOGO } from "../utils/constant";
import { useState } from "react";
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
            <li>Home</li>
            <li>AboutUs</li>
            <li>ContactUs</li>
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