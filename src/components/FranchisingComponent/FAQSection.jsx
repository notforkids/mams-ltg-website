// FAQSection.jsx
import React from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { fadeIn, childVariant } from '../../data/animation';
import './FAQSection.css';

const MotionContainer = motion(Container);
const MotionRow = motion(Row);

const faqs = [
  {
    group: "LT&G Credit Line",
    items: [
      { question: "What is LT&G Credit Line?", 
        answer: "LT&G Credit Line is a micro-lending company dedicated to providing accessible and fair financial solutions to small businesses and individuals, empowering them to achieve their growth and financial goals." 
      },
      { question: "Who can apply for a loan with LT&G Credit Line?", 
        answer: "Our services are geared toward micro and small enterprises, including market vendors, sari-sari store owners, carinderias, vulcanizing shops, and other small businesses." 
      },
      { question: "What are the loan amounts available?", 
        answer: "We offer loan amounts ranging from ₱11,000 to ₱100,000, depending on the borrower’s needs and repayment capacity." 
      },
      { question: "What are the requirements to apply for a loan?", 
        answer: "Basic requirements include a barangay permit and a completed credit investigation to validate the applicant’s existing business." 
      },
    ]
  },
  {
    group: "MAMS LT&G Franchising Corp",
    items: [
      { question: "What is LT&G’s franchising model?", 
        answer: "LT&G offers a franchise model that allows partners to open and operate their own microlending branches using our proven business system and customized IT platform." 
      },
      { question: "How much does it cost to franchise an LT&G branch?", 
        answer: "The total investment package ranges from approximately ₱2.45M to ₱3.5M depending on the branch type. The majority of the investment is allocated for lending capital." 
      },
      { question: "What support does LT&G provide to franchisees?", 
        answer: "LT&G provides comprehensive support including office setup, hiring assistance, staff training, operational guidance, and access to our proprietary IT systems." 
      },
      { question: "Are there opportunities for multi-unit ownership?", 
        answer: "Yes, franchisees are encouraged to expand their operations by owning multiple branches as they grow and scale their business." 
      },
    ]
  }
];

const FAQSection = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(f => f.items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    })))
  };

  return (
    <MotionContainer fluid className='bg-white custom-x-padding py-5' variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      {faqs.map((group, idx) => (
        <MotionRow className='my-5' variants={childVariant} key={idx}>
          <h3 className='h4 mt-5 text-danger fw-bold'>{group.group}</h3>
          <Accordion defaultActiveKey={["0"]} alwaysOpen flush className='mt-4 custom-accordion'>
            {group.items.map((item, i) => (
              <Accordion.Item eventKey={i.toString()} key={i}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body><p className='text-muted'>{item.answer}</p></Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </MotionRow>
      ))}

      <MotionRow className='my-5 text-center text-lg-start' variants={childVariant}>
        <Col className='mt-5'>
          <h4 className='fw-bold'>Still have questions?</h4>
          <p className='mt-2 text-muted'>Our franchise team is ready to assist you.</p>
          <Button variant="danger" as={Link} to="/contact" className="px-5 py-2 fw-bold shadow-sm">
            Contact Us Now
          </Button>
        </Col>
      </MotionRow>
    </MotionContainer>
  );
};

export default FAQSection;