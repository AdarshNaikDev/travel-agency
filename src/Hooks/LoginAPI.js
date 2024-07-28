import axios from 'axios'

async function Login(userObj){

    try {
        console.log("Login hook")
        
        const apiURL = process.env.REACT_APP_BASE_URL+"auth/login";
       
        const apiResponse = await axios.post(apiURL, {
            userName: userObj.userName,
            password: userObj.password
          });

          //console.log("success",apiResponse)
          return apiResponse

    }
    catch (err)
    {
        //console.log("Error",err.response.data)
        return err.response.data;
       
    }
    
   
    
}


export default Login;