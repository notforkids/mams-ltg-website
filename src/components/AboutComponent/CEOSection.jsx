import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CEOSection.css'
import CEOPic from '../../img/ceo-pic3.webp';
import { childVariant, fadeIn, ceoVariant } from '../../data/animation';
import { motion } from 'framer-motion';

const MotionRow = motion(Row);
const MotionCol = motion(Col);

const CEOSection = () => {
  return (
    <Container fluid className='ceo-section'>
      <MotionRow className='custom-x-padding d-flex flex-column-reverse flex-lg-row'>
        <MotionCol variants={ceoVariant} initial="hidden" whileInView="show" lg={6} className='d-flex justify-content-center align-items-center'>
          <img src={CEOPic} alt="First Pic" className="object-fit-cover img-fluid mt-3" style={{ width: "auto", maxHeight: "500px" }} />
        </MotionCol>
        <MotionCol lg={6} variants={fadeIn} initial="hidden" whileInView="show" className='d-flex flex-column align-items-start justify-content-center mb-5 '>
          <div className='text-start'>
            <h1 className="display-4 mt-5 text-light">Marco Antonio M. Soliman</h1>
            <h5 className='text-secondary'>President & CEO</h5>
            <p className="fs-5 fw-light mt-3 text-light">Based in Legazpi, Albay, entrepreneur Marco Antonio M. Soliman
              has started a company with his mantra “Better Loans, Better Lives.”  LT&G Credit Line
              seeks to fill the capital needs of micro enterprises at very affordable rates. Soliman
              also defied all odds to introduce the country’s first microlending franchise.</p>
          </div>
        </MotionCol>

      </MotionRow>
    </Container>

  )
}

export default CEOSection