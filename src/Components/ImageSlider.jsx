import React, { useEffect } from 'react'
import { useState } from 'react';
import './ImageSlider.css';
import { AiFillLeftCircle, AiFillRightCircle,AiOutlineSearch } from "react-icons/ai"
import { BsDot } from "react-icons/bs";


function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeDotIndex, setActiveDotIndex] = useState(0);

    const setNextImage = () => {
        if (currentIndex === 4) {
            setCurrentIndex(0)
            setActiveDotIndex(0)
        }
        else {
            setCurrentIndex(currentIndex + 1)
            setActiveDotIndex(currentIndex+1)
        }
    }

    const setPreviousImage = () => {
        if (currentIndex === 0) {
            setCurrentIndex(imageData.length - 1);
            setActiveDotIndex(imageData.length - 1);
        }
        else {
            setCurrentIndex(currentIndex - 1);
            setActiveDotIndex(currentIndex - 1);
        }
    }

    function loadClickedImage(ind){
        setCurrentIndex(ind)
        setActiveDotIndex(ind)
    }

    const imageData = [
        { url: "/image-1.jpg", keyName: "image1" },
        { url: "/image-2.jpg", keyName: "image2" },
        { url: "/image-3.jpg", keyName: "image3" },
        { url: "/image-4.jpg", keyName: "image4" },
        { url: "/image-5.jpg", keyName: "image5" }

    ]

    return (
        <>
            <div className='image-container'>
                <AiFillLeftCircle className='left-arrow' size={25} onClick={setPreviousImage} />
                <AiFillRightCircle className='right-arrow' size={25} onClick={setNextImage} />
                <div className='search-div'>
                   <input className='search-bar' type="text" placeholder='Where are you going?  Search destinations, tours, activities'/>
                   <button className='circle-btn'>
                    <AiOutlineSearch color='white' size={28}/>
                   </button>
                </div>
                <img className='img-car' src={imageData[currentIndex].url} alt="image carousel" />

            </div>
           {imageData.map((item,index)=>{
            return(
                <span key={index} className= {`dot-design ${activeDotIndex===index? 'active-dot':''}`} onClick={()=>loadClickedImage(index)}>.</span>
            )
           })}
           
        </>





    )
}

export default ImageSlider