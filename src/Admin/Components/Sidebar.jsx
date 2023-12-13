import React from "react";
import "./Sidebar.css";
// import logo from "../../Assets/logo3.png";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate=useNavigate()
  const handleLogout = () => {
    // Clear user data from sessionStorage
    sessionStorage.removeItem('Admintoken');
    sessionStorage.removeItem('adminUser');
   
    navigate('/')
    window.location.reload();
  };
  return (
    <>
      <div class="sidebar">
       <div className="w-100 p-3"> <img src="" className="img-fluid w-75" alt="MUGHUB" /></div>
       <a class="active fw-bolder"  >
          ADMIN DASHBOARD
        </a>
        <a href="/admindashboard">
          Home
        </a>
        <a href="/pending">Pending Orders</a>
        <a href="/orderview">Completed Orders</a>
        <a onClick={handleLogout}>Logout</a>
      </div>
    </>
  );
}

export default Sidebar;
