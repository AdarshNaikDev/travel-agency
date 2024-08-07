import React from 'react'
import LoginHeader from '../Components/LoginHeader'
import './UserQuery.css'
import { useNavigate } from 'react-router-dom'

function AddDelPackages() {
    const usersData = [
        {PackageTitle:"Goa pakckage", offerPrice: "1299"},{PackageTitle:"Spain pakckage", offerPrice: "12,22,99"},
        {PackageTitle:"Dubai pakckage", offerPrice: "49,999"},{PackageTitle:"Hampi pakckage", offerPrice: "4899"},
            ]

            const navigate = useNavigate();
            function addNewPkgHandler(){
                navigate('/AddPackage')
            }
    
  return (
   <>
   <LoginHeader backButton={true} />
   <div className='pkg-head'>
        <h3 className='titlee'>Our Packages</h3>
        <button className='btn-add text-white fw-bold' onClick={addNewPkgHandler}>Add new Package</button>
    </div>

     {/* table starts */}
     <div className="container" style={{ marginLeft:'40px' }}>

<table className="rwd-table mt-4">
    <tbody>
        <tr>
            <th>SL No</th>
            <th>Package Title</th>
            <th>Offered Price</th>
            <th>Actions</th>
    
        </tr>
        {
          
            usersData?.map((item, ind)=>{
                return (<tr key={ind}>
                <td >
                    {ind+1}
                </td>
                <td >
                    {item.PackageTitle}
                </td>
                <td >
                    {item.offerPrice}
                </td>
                <td >
                    <button>Edit</button>
                    <button className='ms-2'>Delete</button>
                </td>
               
                </tr>)
            })
        }
        
       

    </tbody>
</table>

</div>
{/* table ends */}
   </>
  )
}

export default AddDelPackages