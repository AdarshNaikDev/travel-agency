import React, {useState} from 'react'
import LoginHeader from '../Components/LoginHeader'
import './AdminLogin.css'
import Login from '../Hooks/LoginAPI';
import { toast, ToastContainer } from 'react-toastify';
//import "react-toastify/dist/ReactToastify.css";
import ErrorToast from '../Hooks/ErrorToast';

import {useNavigate} from 'react-router-dom';

function AdminLogin() {
  const [userCred, setUserCred] = useState({ userName: '', password: '' })

  const navigate = useNavigate();

  function userObjHandler(event){
    
    const {name, value} = event.target;
    setUserCred((prevState)=>({
      ...prevState,
      [name]:value
    }))
    
  }

  async function loginHandler(){
    if(!userCred.userName || !userCred.password)
      {
        
        ErrorToast("Username/Password cannot be empty","top-center");
      }
      else{
        
        const res = await Login(userCred)
       
        if(res.status === 200)
        {
          console.log(res.data.email)
          //dispatch the redux slice
        }
        if(res === "Invalid username or password!")
        {
          ErrorToast("Invalid Username/Password", "top-center");
        }
        //navigate('/AdminHome')
      }
    
    
  }

  return (
    <div >
     <LoginHeader/>
  
     <div className='background-img-container login-form'>
      <div className='titles'>
        <p className='font-title'>Welcome back 👋</p>
        <p className='sub-title'>Log in your account</p>
      </div>

      <div className='inputs'>
      <input type='text' placeholder='🙋🏻‍♂️ Username' onChange={(e)=>userObjHandler(e)} name='userName' value={userCred?.userName}/>
      <input type='password' placeholder='🔒 Password' onChange={(e)=>userObjHandler(e)} name='password' value={userCred?.password} />
      <button onClick={loginHandler}>Continue</button>
      </div>
      <ToastContainer />
      
     </div>
    </div>
   

  )
}

export default AdminLogin