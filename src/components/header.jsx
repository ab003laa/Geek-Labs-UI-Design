import React from "react";
import logo from "../assets/street suite logo-04 1.png";
import man from "../assets/man.png";
import icon from "../assets/Icon.png";
import search from "../assets/search.png";
import more from '../assets/more.png'

function header() {
  return (
    <>
      <div className="header-container">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="header">
          <div className="search">
            <img src={search}></img>
            <input type="text" placeholder="Search"></input>
          </div>

          <div className="user-info ">
            <img src={icon} width={25} height={25}></img>
            <img src={man} width={30} height={30}></img>
            <span>Moni Roy<br/>admin</span>
            <img src={more} width={20} height={20}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default header;
