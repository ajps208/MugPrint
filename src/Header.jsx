import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const[loggedUser,setLoggedUser]=useState(false)
  const[userName,setUserName]=useState("")
  const navigate = useNavigate();

 
   useEffect(()=>{
    const existingUser = sessionStorage.getItem('existingUser');

    if (existingUser) {
      const user = JSON.parse(existingUser);
      const userName = user.username;
      console.log(userName);
      setUserName(userName);
      setLoggedUser(true);
    }
   },[])

  
   const handleLogout = () => {
    // Clear user data from session storage
    sessionStorage.removeItem('existingUser');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('orderId');

    // Update state to reflect that there is no logged-in user
    setLoggedUser(false);

    // Redirect to the login page or any other desired page
    window.location.href = '/';
  };
  
  return (
    <>
    <header id="header" class=" d-flex align-items-cente">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <h1 class="logo me-auto me-lg-0">
            <a href="/">WallArt</a>
          </h1>
          {/* <!-- Uncomment below if you prefer to use an image logo --> */}
          {/* <!-- <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
             
              <li>
                <a class="nav-link scrollto" href="#specials">
                  Specials
                </a>
              </li>
             
              
              <li>
                <a class="nav-link scrollto" href="#gallery">
                  Gallery
                </a>
              </li>
              
              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            { loggedUser && <li>
                <Link class="nav-link scrollto" to={'/order'} >
                  Orders
                </Link>
              </li>}
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}
          <div className="d-flex">
            {loggedUser && (
              <a className="book-a-table-btn scrollto d-none d-lg-flex">
                {userName}
              </a>
            )}
            {loggedUser ? (
              <Link className="book-a-table-btn scrollto d-none d-lg-flex" onClick={handleLogout}>
                Logout
              </Link>
            ) : (
              <Link to={'/login'} className="book-a-table-btn scrollto d-none d-lg-flex">
                Login
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header