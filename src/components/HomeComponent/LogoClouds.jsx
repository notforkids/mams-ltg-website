import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './LogoClouds.css'
import JMCBataan from '../../img/company logo/jmc-bataan.png'
import GreenDot from '../../img/company logo/green-dot-lending-corp.png'
import CRN from '../../img/company logo/crn-lending-corp.png'
import JoyousVictory from '../../img/company logo/joyous-victory-lending-inc.png'
import JBP from '../../img/company logo/jbp-loan-your-blessings-lending-inc.png'
import B2 from '../../img/company logo/b2micro-lending-corp.png'
import BlueCollar from '../../img/company logo/blue-collar-lending-inc.png'
import OneSM from '../../img/company logo/one-sm-corp.png'
import { fadeIn } from '../../data/animation';
import { motion } from 'framer-motion';

const LogoClouds = () => {
  return (
    <Container fluid className='bg-info py-5 '>
      <Row className='text-center justify-content-center'>
          <Col xxl={6}>
            <motion.div className='h1 text-light mt-5 display-5' variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>Franchisees Across the Nation</motion.div>
          </Col>
      </Row>
      <Row className='wrapper mb-5'>
        <Col className='item item1 d-flex align-items-center justify-content-center'>
          <img src={JMCBataan} className='img-fluid' style={{maxHeight:"200px", width:"auto"}} alt='stats pic' />
        </Col>
        <Col className='item item2 d-flex align-items-center justify-content-center  '>
        <img src={GreenDot} className='img-fluid' alt='stats pic' style={{maxHeight:"80px", width:"auto"}} />  
        </Col>
        <Col className='item item3 d-flex align-items-center justify-content-center'>
        <img src={CRN} className='img-fluid' alt='stats pic' />  
        </Col>
        <Col className='item item4 d-flex align-items-center justify-content-center'>
        <img src={JoyousVictory} className='img-fluid' alt='stats pic' style={{maxHeight:"80px", width:"auto"}} />  
        </Col>
        <Col className='item item5 d-flex align-items-center justify-content-center'>
        <img src={JBP} className='img-fluid' alt='stats pic'  />  
        </Col>
        <Col className='item item6 d-flex align-items-center justify-content-center'>
        <img src={B2} className='img-fluid' alt='stats pic' style={{maxHeight:"200px", width:"auto"}} />  
        </Col>
        <Col className='item item7 d-flex align-items-center justify-content-center'>
        <img src={BlueCollar} className='img-fluid' alt='stats pic' style={{maxHeight:"200px", width:"auto"}} />  
        </Col>
        <Col className='item item8 d-flex align-items-center justify-content-center'>
        <img src={OneSM} className='img-fluid' alt='stats pic' style={{maxHeight:"200px", width:"auto"}} />  
        </Col>
      </Row>
    </Container>
  )
}

export default LogoClouds