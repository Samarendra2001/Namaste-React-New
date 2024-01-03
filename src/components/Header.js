import { LOGO } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const[btnName,setbtnName]=useState("LogIn");
  const OnlineStatus=useOnlineStatus();
    return (
      <div className=" header flex justify-between bg-pink-200 shadow-lg sm:bg-yellow-50 lg:bg-green-50 h-28 w-[100%]">
        <div className="logo-container">
          <img
            className="w-28"
            src={LOGO}
          />
        </div>
        <div className=" nav-items flex items-center">
          <ul className="flex p-4 m-4 ">
           <li className="px-4 font-semibold hover:text-orange-400">OnlineStatus:{OnlineStatus?"🟢":"🔴"}</li>
            <li className="px-4 font-semibold hover:text-orange-400"><Link to="/">Home</Link></li>
            <li className="px-4 font-semibold hover:text-orange-400"><Link to="about">AboutUs</Link></li>
            <li className="px-4 font-semibold hover:text-orange-400"><Link to="contact">ContactUs</Link></li>
            <li className="px-4 font-semibold hover:text-orange-400"><Link to="grocery">Grocery</Link></li>
            <li className="px-4 font-semibold hover:text-orange-400">Cart</li>
            <button className="login-btn" onClick={()=>{
              btnName==="LogIn"?setbtnName("LogOut"):setbtnName("LogIn")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;