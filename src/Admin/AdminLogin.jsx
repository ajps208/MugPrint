import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI } from '../Services/allApi';

function AdminLogin() {
  // const{logedUser,setLogedUser}=useContext(AuthStatus)
  const navigate=useNavigate()
  const [adminData,setAdminData]=useState({
    email:"",password:""
  })
  const handleLogin=async(e)=>{
    e.preventDefault()
    const{email,password}=adminData
    console.log(email,password);
    if(!email || !password){
      toast.info("Please fill the form completely !!!");
    }else{
      const result=await loginAPI(adminData)
      if(result.status===200){
        // toast.success(`${result.data.username} has registered successfully!!!`)
        sessionStorage.setItem("adminUser",JSON.stringify(result.data.existingAdmin))
        sessionStorage.setItem("Admintoken",result.data.token)
        setAdminData({
         email:"",password:""
        })
        // setIsAuthorizes(true)
        navigate('/admindashboard')
      }else{
        toast.warning(result.response.data)
      }
    }
  }

    // const handleRegister = async (e) => {
    //   e.preventDefault();
    //   const { username, email, password } = userData;
    
    //   if (!username || !email || !password) {
    //     toast.info("Please fill the form completely !!!");
    //   } else {
    //     try {
    //       const result = await registerAPI(userData);
    //       console.log("API response:", result);
    
    //       if (result.status === 200) {
    //         toast.success(`${result.data.username} has registered successfully!!!`);
          
    //         setUserData({
    //           username: "",
    //           email: "",
    //           password: "",
    //         });
    //         navigate(`/login`);
    //       } else {
    //         toast.warning(result.response.data);
    //       }
    //     } catch (error) {
    //       console.error("Error during registration:", error);
    //     }
    //   }
    // };

    // const handleLogin= async(e)=>{
    //   e.preventDefault()
    //   const {email, password } = userData;

    //   if (!email || !password) {
    //     toast.info("Please fill the form")
    //    } else{
    //     const result=await loginAPI(userData)
    //     if(result.status===200){
    //       // toast.success(`${result.data.username} has registered successfully!!!`)
    //       sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
    //       sessionStorage.setItem("token",result.data.token)
    //       // setLogedUser(result.data)
    //       setUserData({
    //        email:"",password:""
    //       })
    //       navigate('/')
    //       // window.location.reload();
    //     }else{
    //       toast.warning(result.response.data)
    //     }
    //   }
    // }
    

  
  return (
   
    <section className="vh-100  " >
    <div className="container h-100">
    
    <div  className="row d-flex justify-content-center align-items-center h-100">
      
      <div className="col-lg-12 col-xl-11" >
      <Link to={'/'} style={{ textDecoration: "none" ,color:"red"}}><i classNameName="fa-solid fa-arrow-left me-1"></i> Back to Home    </Link>

        <div className="card text-black" style={{borderRadius:" 25px;"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1" >

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Admin Login</p>

                <form className="mx-1 mx-md-4">

                 {/* { isRegisterForm && (<div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} />
                      <label className="form-label" for="form3Example1c">Your UserName</label>
                    </div>
                  </div>)} */}

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control"   value={adminData.email} onChange={e=>setAdminData({...adminData,email:e.target.value})} />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control"  value={adminData.password} onChange={e=>setAdminData({...adminData,password:e.target.value})} />
                     <div className='d-flex justify-content-between'>
                        <label className="form-label" for="form3Example4c">Password</label>
                       {/* {!isRegisterForm && <label className="form-label" for="form3Example4c"><Link to={'/forgotpassword'} style={{textDecoration:"none"}}>Forgot Password?</Link></label>} */}
                     </div>
                    </div>
                  </div>

                  {/* {isRegisterForm?<div className="d-flex flex-column justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" onClick={handleRegister}  className="btn mx-4 btn-primary btn-lg">Register</button>
                    <p className='mt-3 mx-3'>Already have account?clicked here to <Link to={'/login'} style={{textDecoration:"none"}}>Login</Link></p>
                  </div>: */}
                  <div className="d-flex  flex-column justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" onClick={handleLogin}  className="btn mx-4 btn-success btn-lg">Login</button>
                    {/* <p className='mt-3 mx-4'>New User? Click here to <Link to={'/register'} style={{textDecoration:"none"}}>Register</Link></p> */}
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  <ToastContainer position='top-right' autoClose={2000} theme='colored' />

</section>
  )
}

export default AdminLogin
