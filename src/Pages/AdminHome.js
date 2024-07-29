import React from 'react'
import './AdminHome.css'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'


function AdminHome() {

  const { IsLoggedIn, userName } = useSelector((state) => state.UserLogin);

  console.log("Admin Home ", userName);
  return (
    <div className='backgroundd-img-container login-formm'>
    <h2 className='user-heading'>Welcome, <span style={{paddingLeft:'1px'}}> {userName == null ? "User" : userName }</span> </h2>

    <div className='btnn-div'>
    <Link to={"/UserList"} style={{textDecoration:"none", textAlign:"center"}} className='btn-blue'>View User Queries</Link>
    <Link to={"/ManagePackage"} style={{textDecoration:"none", textAlign:"center"}} className='btn-blue'>Manage Packages</Link>
    </div>
    
   

    
   </div>
  )
}

export default AdminHome