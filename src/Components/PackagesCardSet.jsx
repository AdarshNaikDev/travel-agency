import React from 'react'
import './CardGrid.css'

import CardComponent from './CardComponent';

function PackagesCardSet() {
  const dataFromAPI = [
    { id: 1, location: 'Karnataka', img:"card1.png", discountPrice: "2999", originalPrice: "12000", day:15, night:14},
    { id: 2, location: 'Tea estate Kerla', img:"card2.png", discountPrice: "2000", originalPrice: "12000", day:7, night:6 },
    { id: 3, location: 'Indian Gate Mumbai', img:"card3.png", discountPrice: "2000", originalPrice: "12000", day:5, night:4 },
    { id: 4, location: 'Goa', img:"card4.png", discountPrice: "2000", originalPrice: "12000", day:5, night:4 },
    { id: 5, location: 'North East India', img:"card5.png", discountPrice: "2000", originalPrice: "12000", day:12, night:10 },
    { id: 6, location: 'Lion Safari at Gir national park', img:"card6.png", discountPrice: "2000", originalPrice: "12000", day:5, night:4 },
    { id: 7, location: 'New Delhi', img:"card7.png", discountPrice: "2000", originalPrice: "12000", day:3, night:2 },
   
  ];
  return (
    <>
    <div style={{marginTop:"40px", marginBottom:"20px"}} className='cardd-grid'>
    {dataFromAPI.map((card) => (
        <CardComponent key={card.id} day={card.day} night={card.night} location = {card.location} img={card.img} originalPrice={card.originalPrice} discountPrice={card.discountPrice} />
      ))}
    </div>
    </>
  )
}

export default PackagesCardSet