import React from 'react'
import './AdminHome.css'
import { Link } from 'react-router-dom'

function AdminHome() {
  return (
    <div className='backgroundd-img-container login-formm'>
    

    <div className='btnn-div'>
    <Link to={"/UserList"} style={{textDecoration:"none", textAlign:"center"}} className='btn-blue'>View User Queries</Link>
    <Link to={"/ManagePackage"} style={{textDecoration:"none", textAlign:"center"}} className='btn-blue'>Manage Packages</Link>
    </div>
    
   

    
   </div>
  )
}

export default AdminHome