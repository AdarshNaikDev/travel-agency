import React from 'react'
import LoginHeader from '../Components/LoginHeader'
import { FaStar } from "react-icons/fa";
import './ViewSinglePackage.css'



function ViewSinglePackage() {
  const bggImages = [{
    backgroundImage: `url('img1.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    gridRowStart: 1,
    gridRowEnd: 4,
    gridColumnStart: 1,
    gridColumnEnd: 4,
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
    
  },{
    backgroundImage: `url('img2.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderTopRightRadius: '8px', 
    borderBottomRightRadius: '8px'
    
  },{
    backgroundImage: `url('img3.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderTopRightRadius: '8px',
    borderBottomBottomRadius: '8px',
    
  },{
    backgroundImage: `url('img4.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
    
  }];
  return (
    <>
      <LoginHeader backButton={true} />

      <div className='ms-5 mt-4 '>
        <h3 className='mt-2 ms-5'>Coastal Karnataka Tour</h3>
        <div className='d-flex ms-5 ps-2'>
          <FaStar color='#7BD3EA' size={25} />
          <p className='ms-2 text-muted'>South India</p>
        </div>
      </div>

      {/* 4 image collage starts */}
      <div className='image-parent'>
        <div  style={bggImages[0]}>
         
        </div>
        <div style={bggImages[1]}>
         
        </div>
        <div style={bggImages[2]}>
         
        </div>
        <div style={bggImages[3]}>
         
        </div>
      </div>

    </>

  )
}

export default ViewSinglePackage