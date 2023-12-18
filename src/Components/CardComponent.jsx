import React from 'react';
import './CardGrid.css';
import { CiLocationOn } from "react-icons/ci";
const CardComponent = (props) => {
  console.log(props.location)
  return (
    <div className="cardd">
  
      <img className='img-bgg' src={props?.img} alt='picture'/>
      <div className='location'>
      <CiLocationOn className='loc-icon' size={25}/>
        <p>{props?.location}</p>
      </div>
      <div className='actual-price'>
        <p>₹ <span style={{color: "gray", textDecoration: "line-through"}}>{props.originalPrice}</span></p>
      </div>
      <div className='discount-price'>
        <p>₹ {props?.discountPrice}/- <span style={{color:"gray"}}>per adult</span></p>
      </div>
    </div>
  );
};

export default CardComponent;
