import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function ErrorToast(msg, position){
    toast.error(msg,{
        position
      })

}

export default ErrorToast