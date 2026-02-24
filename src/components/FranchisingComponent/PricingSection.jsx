// PricingSection.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './PricingSection.css';
import { motion } from 'framer-motion';
import { fadeIn, childVariant } from '../../data/animation';

const MotionContainer = motion(Container);
const MotionCol = motion(Col);

const packages = [
  {
    name: "Junior Branch",
    price: "₱2.45M",
    fee: "Php 252,000",
    description: "Ideal for entrepreneurs seeking a lower-entry investment with strong growth potential in smaller markets.",
    features: [
      "Optimized staffing requirements",
      "Reduced space requirements",
      "Focused coverage area",
      "Use of Name, Logo, Trademark",
      "Comprehensive Operations Manual",
      "Hiring Assistance",
      "Research & Development Support",
      "Pre-Opening Support",
      "Marketing Support",
      "Ongoing Business Guidance"
    ]
  },
  {
    name: "Full Branch",
    price: "₱3.5M",
    fee: "Php 448,000",
    description: "Designed for investors ready to operate a full-scale microlending business with broader market reach and higher revenue potential.",
    features: [
      "7–8 Employee Requirement",
      "Minimum 30 sqm Space",
      "Larger Coverage Area",
      "Use of Name, Logo, Trademark",
      "Comprehensive Operations Manual",
      "Hiring Assistance",
      "Research & Development Support",
      "Pre-Opening Support",
      "Marketing Support",
      "Ongoing Business Guidance"
    ]
  }
];

const PricingSection = () => {
  return (
    <MotionContainer 
      fluid 
      className="py-5 custom-x-padding text-light bg-pricing"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
    >
      <Row className="justify-content-center">
        <div className="text-center my-5">
          <p>Franchise Investment</p>
          <h2 className="display-4">Choose the Right Franchise Package</h2>
        </div>

        {packages.map((pkg, idx) => (
          <MotionCol md={4} className="mb-4" variants={childVariant} key={idx}>
            <Card className="shadow-sm p-4 border-2 border-danger" aria-label={`${pkg.name} franchise package`}>
              <div className='d-flex justify-content-center'>
                <div className="vps-badge-header fs-5">{pkg.name}</div>
              </div>
              <Card.Body>
                <div className='text-center'>
                  <small className="text-muted fst-italic">Franchise package starts at</small>
                  <h3 className="fw-bold text-muted">{pkg.price}</h3>
                  <hr />
                </div>
                <div className='text-center mb-3'>
                  <p className='fw-bold mb-1'>Franchise Fee</p>
                  <h4 className="fw-bold mb-0">{pkg.fee}</h4>
                </div>
                <Card.Text className="text-muted mt-3">{pkg.description}</Card.Text>
                <ul className="list-unstyled text-start">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className='mt-2'>✔ {feat}</li>
                  ))}
                </ul>
                <Button variant="danger" as={Link} to="/contact" className="mt-2">
                  Start Your Franchise
                </Button>
              </Card.Body>
            </Card>
          </MotionCol>
        ))}
      </Row>
    </MotionContainer>
  );
};

export default PricingSection;