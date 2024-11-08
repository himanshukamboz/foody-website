import { useState } from "react";
import cart from "../assets/cart.png"
import logo from "../assets/foody logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [loginbtn,setloginbtn]=useState("Login")
  const cartitems = useSelector((store) => store.cart.items)

    return (
      <div className="header">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
          <h3>foody</h3>
        </div>
        <div className="header-right">
        <div className="nav-items">
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li id="cart"><Link to="/cart"><span id="cartlength">{cartitems.length===0 ? "" : cartitems.length}</span><img src={cart} alt="cart" width="45" /></Link></li>      
          </ul> 
        </div>
        <button className="login"onClick={()=>{
          loginbtn==="Logout"?setloginbtn("Login"):setloginbtn("Logout")

        }}>{loginbtn}</button>
        </div>
       
      </div>
    );
  };
  export default Header;