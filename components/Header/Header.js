import React from "react";
import logo from "../../assets/logo.webp";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="flex justify-between bg-yellow-50 sticky top-0 z-50">
      <div className="logo-container">
        <img
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
          src={logo}
          alt="Logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
        <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4">About Us</li>
          <li className="px-4">Cart</li>
          <li className="px-4"><Link to="/reserve">Reserve Table</Link></li>
          <li className="px-4">Be-a-seller</li>
          <li className="px-4">Orders</li>
          <li className="px-4">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
