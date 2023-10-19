import React from 'react'
import Navbar from '../Components/Navbar'
import ImageSlider from '../Components/ImageSlider'
import FeatureCard from '../Components/FeatureCard'
import PopularPackage from '../Components/PopularPackage'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <ImageSlider/>
    <FeatureCard/>
    <PopularPackage/>
    <ContactForm/>
    <Footer/>
    </>
   
  )
}

export default Home