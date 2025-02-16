import React from 'react'
import Navbar from '../components/LandingPage/Navbar'
import HeroSection from '../components/LandingPage/HeroSection'
// import Hero from '../components/LandingPage/Hero'
import GenerateWebsite from '../components/LandingPage/GenerateWebsite'
import Benefit from '../components/LandingPage/Benefit'
import Pricing from '../components/LandingPage/Pricing'
import Testimonials from '../components/LandingPage/Testimonials'
import CallAction from '../components/LandingPage/CallAction'
import Footer from '../components/LandingPage/Footer'

function HomePage() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Benefit/>
      <GenerateWebsite/>
      <Pricing/>
      <CallAction/> 
      <Testimonials/>
      <Footer/> 
    </>
  )
}

export default HomePage