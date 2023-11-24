import React from "react"
import  ReactDOM from "react-dom/client"
import "../Assignment3/Assignment.css"
import logo from "../Assignment3/logo.jpg"
import userIcon from "../Assignment3/user.png"
const Header = () => {
    return (
      <>
        <header className="header">
          <div className="left">
            <img src={logo} alt="Logo" />
          </div>
          <div className="center">
            <input
              className="input"
              type="text"
              placeholder="Search anything you want..."
            />
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </div>
          <div className="right">
            <img src={userIcon} alt="User Icon" />
          </div>
        </header>
      </>
    );
  };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>)