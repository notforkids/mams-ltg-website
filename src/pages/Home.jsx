import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HomeComponent/HeroSection";
import FeatureListSection from "../components/HomeComponent/FeatureListSection";
import TestimonialSection from "../components/HomeComponent/TestimonialSection";
import NewsAndEventSection from "../components/HomeComponent/NewsAndEventSection";
import CTASection from "../components/HomeComponent/CTASection";
import CustomerTestimonial from "../components/HomeComponent/CustomerTestimonial";
import LogoClouds from "../components/HomeComponent/LogoClouds";
import { organizationStructuredData } from "../data/orgSturcturedData";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>LT&G Credit Line - Microlending Franchise Philippines</title>
        <meta
          name="description"
          content="Join LT&G Credit Line, the first microlending franchise in the Philippines. Empower your future with accessible loans and nationwide opportunities."
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationStructuredData)}
        </script>
      </Helmet>

      <HeroSection />
      <LogoClouds />
      <FeatureListSection />
      <CustomerTestimonial />
      <TestimonialSection />
      <NewsAndEventSection />
      <CTASection />
    </>
  );
};

export default Home;
