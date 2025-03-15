import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FranchiseeLogo from '../../img/samplelogo.png';
import Franchisee from '../../img/paolo.png';

const TestimonialSection = () => {
  return (
    <Container fluid className='bg-dark custom-x-padding py-5'>
        <Row className='text-center justify-content-center'>
            <Col lg={8} className='mt-5'>
                <img 
                src={FranchiseeLogo} 
                 width="auto"
                 height="45"
                alt='Franchisee Logo' 
                className='' />
                <h4 className='text-light mt-5'> "The system is automated, user-friendly and it is also easy to be monitored, 
                which made it very convenient to the staffs. What makes a franchise impressive is 
                that they are helping other people to enrich their lives. 
                The head office as well as the area supervisor are present to give their support 
                especially now that we are currently experiencing a pandemic, they give advises 
                and tips that helped us in this kind of situation. I am more than happy to be a 
                franchisee owner of LT&G, I can say that you’re safe in hands."</h4>
                <img 
                src={Franchisee} 
                 width="auto"
                 height="80"
                alt='Franchisee Pic' 
                className='mt-5' />
                <h4 className='text-light fw-bold mt-3'>Paolo S. Bobier</h4>
                <h7 className='text-light'>Franchise Owner, One SM Lending Corporation</h7>
            </Col>
        </Row>
    </Container>
  )
}

export default TestimonialSection