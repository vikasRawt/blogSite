import "./sidebar.css";


function Sidebar(){

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
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">cinema</li>
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