import React from 'react'
import HomeSection from '@/components/Home';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <HomeSection/>
    <ServicesSection/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default HomePage;