import React from 'react';
import './CardGrid.css';
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
const CardComponent = (props) => {

  function getPackageId(pkgId)
  {
    console.log(pkgId)
  }
  
  return (
    <div className="cardd">
  
      <img className='img-bgg' src={props?.img} alt='picture'/>
      <div className='location'>
      <CiLocationOn className='loc-icon icon-css' size={25}/>
        <p >{props?.location}</p>
      </div>
      <div className='actual-price mt-2'>
        <p>₹ <span style={{color: "gray", textDecoration: "line-through"}}>{props.originalPrice}</span></p>
      </div>
      <div className='discount-price mt-2'>
        <p>₹ {props?.discountPrice}/- <span style={{color:"gray"}}>per adult</span></p>
      </div>
      <div className='night-day'>
        <IoMdTime size={20}/>
        <p className='pt-3 ms-1'><span className='fw-bold'>{props.day}</span> Days <span className='fw-bold'>{props.night}</span> Nights</p>
      </div>
      <button type="button" className="enquire-btn btn btn-primary " onClick={()=>getPackageId(props.pkgId)}>Enquire</button>
    </div>
  );
};

export default CardComponent;
