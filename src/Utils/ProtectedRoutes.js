import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes({ComponentName}) {
    const { IsLoggedIn, userName } = useSelector((state) => state.UserLogin);
    const navigate = useNavigate();
    //use effect to check the login status of user when this component loads
    useEffect(()=>{
        if(!IsLoggedIn)
        {
            navigate('/Login')
        }
    },[])
  return (
    <div>
        <ComponentName/>
    </div>
  )
}

export default ProtectedRoutes