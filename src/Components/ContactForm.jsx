import React from 'react'
import './ContactForm.css'
import { BiSolidPhoneCall } from "react-icons/bi"
import { AiOutlineMail } from "react-icons/ai"

function ContactForm() {
    return (
        <>
            <div className='contact-container'>
                <div className='contact-details'>
                    <p className='contact-detail-txt'>
                        Stay Connected with us
                    </p>
                    <div className='phone-email'>
                    <div className='phone-no'>
                        <BiSolidPhoneCall size={25}/>
                        <p>+91 9876543210</p>
                    </div>
                    <div className='mail-inbox'>
                        <AiOutlineMail size={25}/>
                        <p>aditravels@yahoo.com</p>
                    </div>
                    </div>
                    
                </div>
                <div className='contact-form'>
                    <p className='form-heading'>Book Your Dream Vacation today!!</p>
                    <form className='contact-form-inputs'>
                   <input className='in-field' type="text" placeholder='Full name' />
                   <input className='in-field' type="text" placeholder='City of Residence' />
                   <input className='in-field' type="text" placeholder='Email' />
                   <input className='in-field' type="text" placeholder='Phone Number' />
                   <input className='in-field' type="text" placeholder='Travel Destination' />
                   
                   
                   <input className="in-field"  type="text" placeholder='Date of Travel'/>
                   
                  
                   <input className='in-field' type="number" placeholder='No of People' />
                   <select className='in-field select-field'>
                    <option className='options'>Select Vacation type</option>
                   </select>
                   <button className='in-field submit-btn' >Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm