import React from "react";
import './topbar.css';

function TopBar(){
return(

    <>
    <div className="top-bar">
        <div className="top-left">
        <i className="topLeft-icon fa-brands fa-facebook"></i>
        <i className="topLeft-icon fa-brands fa-square-instagram"></i>
        <i className="topLeft-icon fa-brands fa-twitter"></i>
        </div>
        <div className="top-center">
            <ul className="center-list">
                <li className="list-item">HOME</li>
                <li className="list-item">ABOUT</li>
                <li className="list-item">WRITE</li>
                <li className="list-item">LOGOUT</li>
            </ul>
        </div>
        <div className="top-right">
            <img  className="topRight-img" src="/DSC_0123.jpg"alt="img"/>
            <i className=" topSearch-icon fa-brands fa-searchengin"></i>
        </div>
    </div>
    
    </>
)

}

export default TopBar;