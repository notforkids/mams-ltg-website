import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactFormSection from '../components/ContactComponent/ContactFormSection';
import ApplyForLoanSection from '../components/ContactComponent/ApplyForLoanSection';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LT&G Credit Line",
  "url": "https://ltgcreditline.com/contact",
  "logo": "https://ltgcreditline.com/logo.png",
  "description": "Contact LT&G Credit Line for loan applications, franchise inquiries, and support. Visit our Bicol or Manila offices or reach us via email or phone.",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "2/F, Soliman Bldg, Imelda Roces Ave, Tahao Road",
      "addressLocality": "Legazpi City",
      "addressRegion": "Bicol",
      "addressCountry": "PH"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "2/F Unit V, TFN Building, 963 Gen Kalentong Cor.Haig St, Daang Bakal",
      "addressLocality": "Mandaluyong",
      "addressRegion": "Metro Manila",
      "postalCode": "1550",
      "addressCountry": "PH"
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+639673507944",
      "contactType": "customer service",
      "areaServed": "PH"
    },
    {
      "@type": "ContactPoint",
      "email": "franchise@ltgcreditline.com",
      "contactType": "customer service",
      "areaServed": "PH"
    }
  ],
  "makesOffer": {
    "@type": "Offer",
    "name": "Loan & Franchise Support",
    "description": "Inquiries for loan applications and franchise opportunities under the LT&G Credit Line brand."
  }
};

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact LT&G Credit Line | Loan & Franchise Inquiries</title>
        <meta
          name="description"
          content="Contact LT&G Credit Line for loan applications, franchise inquiries, and support. Visit our Bicol or Manila offices or reach us via email or phone."
        />
        <meta name="keywords" content="LT&G Credit Line, loan application, franchise inquiry, contact, microlending, Legazpi City, Manila" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ltgcreditline.com/contact" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <ContactFormSection />
      <ApplyForLoanSection />
    </>
  );
};

export default Contact;