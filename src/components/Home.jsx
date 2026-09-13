import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import StepSection from './StepsSection'
import FeatureSection from './FeatureSection'
import BenefitsSection from './BenefitsSection'
import PricingPlansSection from './PricingPlansSection'
import IntegrationSection from './IntegrationSection'
import Testimonial from './Testimonial'
import FaqSection from './FaqSection'
import SignUpSection from './SignUpSection'
import Footer from './Footer'
import AOS from "aos"
import "aos/dist/aos.css"

const Home = () => {
   useEffect(() => {
    AOS.init({
      duration: 800,    // animation speed (ms) — set once, done
      once: true,       // animate only first time, not on scroll back
      easing: "ease-in-out"
    })
  }, [])
  return (
    <div>
         <Navbar/>
      <Hero/>
      <StepSection/>
      <FeatureSection/>
      <BenefitsSection/>
    
    <PricingPlansSection/>
     <IntegrationSection/>
     <Testimonial/>
     <FaqSection/>
     <SignUpSection/>
     <Footer/>
    </div>
  )
}

export default Home