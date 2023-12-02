import React from 'react'
import './CardGrid.css'

import CardComponent from './CardComponent';

function PackagesCardSet() {
  const dataFromAPI = [
    { id: 1, location: 'Karnataka', img:"card1.png", discountPrice: "2000", originalPrice: "12000", day:5, night:4},
    { id: 2, location: 'Tea estate Kerla', img:"card2.png", discountPrice: "2000", originalPrice: "12000", day:5, night:4 },
    { id: 3, location: 'Indian Gate Mumbai', img:"card3.png", discountPrice: "2000", originalPrice: "12000", day:5, night:4 },
    { id: 4, location: 'Goa', img:"card4.png", discountPrice: "2000", originalPrice: "12000", day:5, night:4 },
    { id: 5, location: 'North East India', img:"card5.png", discountPrice: "2000", originalPrice: "12000", day:5, night:4 },
    { id: 6, location: 'Lion Safari at Gir national park', img:"card6.png", discountPrice: "2000", originalPrice: "12000", day:5, night:4 },
    { id: 7, location: 'New Delhi', img:"card7.png", discountPrice: "2000", originalPrice: "12000", day:5, night:4 },
   
  ];
  return (
    <>
    <div style={{marginTop:"40px", marginBottom:"20px"}} className='card-grid'>
    {dataFromAPI.map((card) => (
        <CardComponent key={card.id} location = {card.location} img={card.img} originalPrice={card.originalPrice} discountPrice={card.discountPrice}/>
      ))}
    </div>
    </>
  )
}

export default PackagesCardSet