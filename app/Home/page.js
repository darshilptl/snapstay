import React from 'react'
import HomeSection from '@/components/Home';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import FeaturesSection from '@/components/Features';

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <HomeSection/>
    <FeaturesSection/>
    <ServicesSection/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default HomePage;