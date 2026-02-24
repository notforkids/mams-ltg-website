import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { fadeIn } from '../../data/animation';
import { Link } from 'react-router-dom';

const MotionContainer = motion(Container);

const CTASection = () => {
  return (
    <MotionContainer 
      fluid
      className='custom-x-padding py-5'
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Row className="text-center justify-content-center py-5">
        <Col xxl={9} md={12} className='my-5'>
          <h2 className='display-4'>
            Build Your Own Profitable Microlending Business
          </h2>
          <p className='fs-5 fw-light mt-3 text-muted'>
            Take the next step toward business growth and financial independence
            by partnering with LT&G Credit Line. Our microlending franchise
            opportunity provides a proven operational system, comprehensive
            support, and access to a high-demand lending market.
          </p>
          <div className='mt-4 d-flex flex-column flex-sm-row gap-3 justify-content-center'>
            <Button variant='danger' className='px-4 py-2' as={Link} to="/franchising">
              Explore Franchise Opportunities
            </Button>
            <Button variant='secondary' className='px-4 py-2' as={Link} to="/contact">
              Start Your Franchise Journey
            </Button>
          </div>
        </Col>
      </Row>
    </MotionContainer>
  );
}

export default CTASection;