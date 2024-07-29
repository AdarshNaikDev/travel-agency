import React from 'react'
import LoginHeader from '../Components/LoginHeader'
import './UserQuery.css'

function UserQuery() {
    const usersData = [
        {userName:"Adarsh Naik", cityOfResidence: "Shimoga", emailAddress:"adarsh@gmail.com", phoneNumber: "+91 9876789876", dreamDestination: "Singapore", noOfPeople: "1", dateOfTravel: "21/01/2024"},
        {userName:"William", cityOfResidence: "Molmo", emailAddress:"william@gmail.com", phoneNumber: "+91 9876789876", dreamDestination: "Singapore", noOfPeople: "1", dateOfTravel: "21/01/2024"},
        {userName:"Julie Roy", cityOfResidence: "Mysuru", emailAddress:"lulie@gmail.com", phoneNumber: "+91 9876789876", dreamDestination: "Singapore", noOfPeople: "1", dateOfTravel: "21/01/2024"},
        {userName:"Yeung crystal", cityOfResidence: "Shimoga", emailAddress:"crystal@gmail.com", phoneNumber: "+91 9876789876", dreamDestination: "Singapore", noOfPeople: "1", dateOfTravel: "21/01/2024"},
        {userName:"Bharath", cityOfResidence: "Udupi", emailAddress:"bharath@gmail.com", phoneNumber: "+91 9876789876", dreamDestination: "Singapore", noOfPeople: "1", dateOfTravel: "21/01/2024"},
        {userName:"Lavanya", cityOfResidence: "Shimoga", emailAddress:"lavanya@gmail.com", phoneNumber: "+91 9876789876", dreamDestination: "Singapore", noOfPeople: "1", dateOfTravel: "21/01/2024"}
    ]
  

    return (
        <React.Fragment>
            <LoginHeader backButton={true} />
            <div>
                <h3 className='titlee'>User Queries List</h3>
            </div>

            {/* table starts */}
            <div className="container" style={{ marginLeft:'40px' }}>

                <table className="rwd-table">
                    <tbody>
                        <tr>
                            <th>Serial no</th>
                            <th>Name</th>
                            <th>City of Residence</th>
                            <th>Email address</th>
                            <th>Phone Number</th>
                            <th>Dream Destination</th>
                            <th>Number of People</th>
                            <th>Date of Travel</th>

                        </tr>
                        {
                          
                            usersData?.map((item, ind)=>{
                                return (<tr key={ind}>
                                <td >
                                    {ind+1}
                                </td>
                                <td >
                                    {item.userName}
                                </td>
                                <td >
                                    {item.cityOfResidence}
                                </td>
                                <td >
                                    {item.emailAddress}
                                </td>
                                <td >
                                   {item.phoneNumber}
                                </td>
                                <td >
                                    {item.dreamDestination}
                                </td>
                                <td >
                                   {item.noOfPeople}
                                </td>
                                <td>
                                    {item.dateOfTravel}
                                </td>
                                </tr>)
                            })
                        }
                        
                       

                    </tbody>
                </table>

            </div>
            {/* table ends */}
        </React.Fragment>


    )
}

export default UserQuery