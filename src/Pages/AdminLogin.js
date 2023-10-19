import React from 'react'
import LoginHeader from '../Components/LoginHeader'
import './AdminLogin.css'

function AdminLogin() {
  return (
    <>
     <LoginHeader/>
  
     <div className='background-img-container login-form'>
      <div className='titles'>
        <p className='font-title'>Welcome back 👋</p>
        <p className='sub-title'>Log in your account</p>
      </div>

      <div className='inputs'>
      <input type='text' placeholder='📧 abcd@gmail.com' />
      <input type='password' placeholder='🔒 Password' />
      <button>Continue</button>
      </div>

      
     </div>
    </>
   

  )
}

export default AdminLogin