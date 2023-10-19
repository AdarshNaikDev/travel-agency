import React from 'react'
import './LoginHeader.css'
import travelLogo from "../Assets/logo.png"

function LoginHeader() {
  return (
    <>
    <div className='logo-header'>
        <img className='travel-logo' src={travelLogo} alt="logo"/>
    </div>
    </>
  )
}

export default LoginHeader