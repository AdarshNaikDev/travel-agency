import  {useState, useEffect} from 'react'

import axios from 'axios'

function UseFetchData(apiRoute) {
const [items, setItems] = useState([]);
const [loading , setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(()=>{

    const fetchItems = async ()=>{
        try{
            const apiURL = process.env.REACT_APP_BASE_URL+apiRoute;
           
            const response = await axios.get(apiURL)
            setItems(response.data);
            setLoading(false); 

        }
        catch(error)
        {
            setError(error)
            setLoading(false)
        }
    }
    fetchItems();
},[])

  return {items, loading,error};
}

export default UseFetchData;