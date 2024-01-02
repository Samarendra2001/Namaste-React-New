import { LOGO } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const[btnName,setbtnName]=useState("LogIn");
  const OnlineStatus=useOnlineStatus();
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
           <li>OnlineStatus:{OnlineStatus?"🟢":"🔴"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">AboutUs</Link></li>
            <li><Link to="contact">ContactUs</Link></li>
            <li><Link to="grocery">Grocery</Link></li>
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