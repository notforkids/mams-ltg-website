import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './AboutHeaderSection.css';
import AboutPic from '../../img/about-header-pic.png';
import { Link } from 'react-router-dom';

const AboutHeaderSection = () => {
  return (
    <Container fluid className="custom-x-padding">
      <Row>
        <Col lg={6} className="d-flex flex-column justify-content-center my-5 text-start">
          <p className='mb-2'>About</p>
          <h1 className="display-4">LT&G Credit Line</h1>
          <p className="mt-3 fs-5 fw-light text-muted">
            LT&G Credit Line offers loans to micro-entrepreneurs for operational or growth capital, providing customized credit, flexible terms, risk-handling insurance, and value-added services. LT&G is committed to empowering small businesses and families through fair, reliable, and accessible financial solutions. Guided by the principle "better loans, better lives," we promote financial stability, improved livelihoods, and community growth through responsible lending.
          </p>
          <div className='mt-4'>
            <Button variant='danger' className='me-2' as={Link} to="/franchising">Learn More</Button>
            <Button variant='secondary' as={Link} to="/contact">Join Now</Button>
          </div>
        </Col>
        <Col lg={6} className='d-flex justify-content-lg-end justify-content-center'>
          <img 
            src={AboutPic} 
            className='img-fluid' 
            style={{maxHeight:"800px", width:"auto"}} 
            alt='LT&G Credit Line office and operations' 
            loading="lazy"
          />
        </Col>
      </Row>
    </Container>
  )
}

export default AboutHeaderSection;