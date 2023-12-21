import React from 'react'
import './LoginHeader.css'
import travelLogo from "../Assets/logo.png"
import { IoIosArrowBack } from "react-icons/io";

function LoginHeader({backButton}) {
  return (
    <>
    <div className='logo-header'>
        <img className='travel-logo' src={travelLogo} alt="logo"/>
        {backButton === true? <div className='d-flex align-items-center '>
          <IoIosArrowBack className='pt-2  text-muted' size={25}/>
        <p className='pt-4 text-muted fw-bold'> Back to home</p>
        </div>: <></>}
        
    
    </div>
    </>
  )
}

export default LoginHeader