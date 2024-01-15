import React from 'react'
import './LoginHeader.css'
import travelLogo from "../Assets/logo.png"
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

function LoginHeader({backButton,fromAdmin}) {
  return (
    <>
    <div className='logo-header'>
        <img className='travel-logo' src={travelLogo} alt="logo"/>
        {backButton === true? <div className='d-flex align-items-center '>
          <IoIosArrowBack className='pt-2  text-muted' size={25}/>
        <Link className='pt-2 text-decoration-none text-muted fw-bold' to={"/"}>{fromAdmin ? 'Back to Login':'Back to home'} </Link>
        </div>: <></>}
        
    
    </div>
    </>
  )
}

export default LoginHeader