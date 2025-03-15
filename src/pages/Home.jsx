import React from 'react'
import HeroSection from '../components/HomeComponent/HeroSection'
import FeatureListSection from '../components/HomeComponent/FeatureListSection'
import StatsSection from '../components/HomeComponent/StatsSection'
import TestimonialSection from '../components/HomeComponent/TestimonialSection'
import NewsAndEventSection from '../components/HomeComponent/NewsAndEventSection'
import CTASection from '../components/HomeComponent/CTASection'

const Home = () => {
  return (
    <>
    <HeroSection />
    <FeatureListSection />
    <StatsSection />
    <TestimonialSection />
    <NewsAndEventSection />
    <CTASection />
    </>
  )
}

export default Home