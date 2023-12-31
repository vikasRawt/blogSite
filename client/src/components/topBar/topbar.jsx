import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

function TopBar() {
  const {user, dispatch}= useContext(Context);

  const handleLogout = ()=>{
    dispatch({type:"LOGOUT"})
  }
  
  return (
    <>
      <div className="top-bar">
        <div className="top-left">
          <i className="topLeft-icon fa-brands fa-facebook"></i>
          <i className="topLeft-icon fa-brands fa-square-instagram"></i>
          <i className="topLeft-icon fa-brands fa-twitter"></i>
        </div>
        <div className="top-center">
          <ul className="center-list">
            <li className="list-item">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link className="link" to="/">
                ABOUT
              </Link>
            </li>
            <li className="list-item">
              <Link className="link" to="/">
                CONTACT
              </Link>
            </li>
            <li className="list-item">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            <li className="list-item" onClick={handleLogout}>{user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className="top-right">
        {  user?(
          <img className="topRight-img" src="/DSC_0123.jpg" alt="img" />
          ):(
          <ul className="center-list">
            <li className="list-item">
            <Link className="link" to="/login">
              LOGIN
            </Link>
            </li>
           
            <li className="list-item">
            <Link className="link" to="/register">
              REGISTER
            </Link>
            </li>
          </ul>
          )}
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
}

export default TopBar;
