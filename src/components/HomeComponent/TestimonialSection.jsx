import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TestimonialSection = () => {
  return (
    <Container fluid className='bg-dark custom-x-padding py-5'>
        <Row className='text-center'>
            <Col>
                <h1 className='text-light'>Testimonial Section</h1>
            </Col>
        </Row>
    </Container>
  )
}

export default TestimonialSection