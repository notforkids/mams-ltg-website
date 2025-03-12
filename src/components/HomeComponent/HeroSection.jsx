import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './HeroSection.css'


const HeroSection = () => {
  return (
    <Container fluid className='bg-hero px-xxl-5 px-xl-5 px-lg-5 px-md-5 px-sm-4'>
            <Row>
                <Col xs={12} md={10} lg={9} xl={8} xxl={6}>
                    <h1 className='text-light display-1 fw-medium'>Franchise the Future of Microlending</h1>  
                    <p className='text-light lead mt-3'>LT&G Credit Line — The first microlending franchise in the Philippines, providing accessible loans to empower your future. Join us in transforming lives and building a brighter financial future together.</p>
                    <div className='mt-4'>
                    <Button variant='danger' className='me-2'>Learn More</Button>
                    <Button variant='outline-light'>Join Now</Button>
                    </div>
                </Col>
            </Row>
  </Container>
  )
}

export default HeroSection