import { useState,useEffect } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";


function Sidebar(){
   const[cats, setCat]= useState([]);
useEffect( ()=>{
   const getCats = async()=>{
         const res = await axios.get("/categories")
         setCat(res.data)
       
   }
   getCats();
},[])
return(
    <div className="sidebar">
        <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME
      </span>
     <img src="/img3.jpg" alt="img3"/>   
     <p> ab nihil possimus facere voluptatibtibus dolor corporis ea in, 
        similique saepe ipsa incidunt iste cum repudiandae nam tenetur possimus, 
        blanditiis natus nesciunt illo mollitia? Provident enim quidem iure officiis deserunt?
     </p>
     </div>
     <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="">
         {
            cats.map( (c) =>(
               <Link to={`/categories=${c.name}`}className="link">
               <li className="sidebarListItem">{c.name}</li>
               </Link>
            ))
         }
        </ul>
     </div>
     <div className="sidebarItem">
     <span className="sidebarTitle">FOLLOW US</span>
     <div className="sidebarSocial">
        
     <i className="SidebarIcon fa-brands fa-facebook"></i>
        <i className="SidebarIcon fa-brands fa-square-instagram"></i>
        <i className="SidebarIcon fa-brands fa-twitter"></i>
     </div>
     </div>

    </div>
)

}

export default Sidebar;