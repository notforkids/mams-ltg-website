import React from "react";
import { Helmet } from "react-helmet-async";
import AboutHeaderSection from "../components/AboutComponent/AboutHeaderSection";
import CEOSection from "../components/AboutComponent/CEOSection";
import TimelineSection from "../components/AboutComponent/TimelineSection";
import TeamSection from "../components/AboutComponent/TeamSection";
import MissionVisionSection from "../components/AboutComponent/MissionVisionSection";
import CTASection from "../components/HomeComponent/CTASection";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | LT&G Credit Line</title>
        <meta
          name="description"
          content="Learn about LT&G Credit Line's mission, vision, and team. Discover our journey as a leading microlending franchise in the Philippines."
        />
        <meta property="og:title" content="About LT&G Credit Line" />
        <meta
          property="og:description"
          content="Learn about LT&G Credit Line's mission, vision, and growth as a microlending franchise in the Philippines."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ltgcreditline.com/about" />
        <meta
          property="og:image"
          content="https://ltgcreditline.com/preview.jpg"
        />
        <link rel="canonical" href="https://ltgcreditline.com/about" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "LT&G Credit Line",
            url: "https://ltgcreditline.com",
            logo: "https://ltgcreditline.com/logo.png",
            description:
              "LT&G Credit Line is a microlending company and franchise system in the Philippines providing accessible and responsible financial solutions.",
          })}
        </script>
      </Helmet>

      <AboutHeaderSection />
      <CEOSection />
      <TimelineSection />
      <MissionVisionSection />
      <TeamSection />
      <CTASection />
    </>
  );
};

export default About;