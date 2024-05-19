import React, { useEffect , useState} from 'react'
import './CardGrid.css'

import CardComponent from './CardComponent';
import UseFetchData from '../Hooks/UseFetchData';
import { useDispatch} from 'react-redux';
import axios from 'axios'
import { add } from '../Store/travelPkgsSlice';

function PackagesCardSet() {

  const {items,loading,error}= UseFetchData("TourPackage/g/getPackages")
  const dispatch = useDispatch();
  
  
  useEffect(() => {
  
    console.log("use effect pkgscardset", items)
    if(items.length > 0)
    {
      console.log("hello")
      items.forEach((item)=>{
        console.log("===> indei item",item)
        dispatch(add(item))
      })
    }
    else{
      console.log("control has reached here")
    }
      
      //dispatch(add(testobj));
      
    
  }, [items]);
  

 
  //const urll = process.env.REACT_APP_BASE_URL+"TourPackage/g/getPackages";
  // useEffect(()=>{
  //   const getData = async ()=>{
  //     const response = await axios.get(urll)
  //     console.log(response)
  //   }

  //   getData();
  // },[])

   
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
    {items?.map((card) => (
        <CardComponent key={card._id} pkgId={card._id} day={card.noOfDays} night={card.noOfNights} location = {card.title} img={card?.pkgImages[0]?.img1} originalPrice={card.actualPrice} discountPrice={card.discountedPrice} />
      ))}
    </div>
    </>
  )
}

export default PackagesCardSet