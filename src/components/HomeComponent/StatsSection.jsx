import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import StatsPic from '../../img/stats-pic.png';


const StatsSection = () => {
  return (
    <Container fluid className='bg-light custom-x-padding py-5'>
    <Row className='d-flex flex-column-reverse flex-md-row align-items-center '>
        <Col md={6} sm={12} className='mt-5 d-flex justify-content-center align-items-center'>
        <img src={StatsPic} className='img-fluid rounded-5' alt='stats pic' />
        </Col>
        
        <Col md={6} sm={12} className='mt-md-5 mt-sm-5 '>
        <h6 className='fw-bold'>Success</h6>
        <h1 className="display-4 fw-bold mt-3">Transforming Lives Through Microfinance Solutions</h1>
        <p className='lead mt-3'>LT&G Credit Line has empowered thousands of entrepreneurs across the Philippines. Our innovative microlending approach has made financial access a reality for many. </p>
        <Row>
            <Col md={6} sm={12}>
            <h1 className="fw-bold display-5 mt-3">100K+</h1>
            <p >Satisfied clients with reliable financial solutions.</p>
            </Col>
            <Col md={6} sm={12}> 
            <h1 className="fw-bold display-5 mt-3">60+</h1>
            <p >Branches nationwide, offering financial services across the country.</p>
            </Col>
        </Row>
        <div className='mt-4'>
            <Button variant='dark' className='me-2'>Learn More</Button>
            <Button variant='border-0'>Sign Up &gt;</Button>
        </div>
        </Col>
    </Row>
    </Container>
  )
}

export default StatsSection