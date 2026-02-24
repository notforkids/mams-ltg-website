import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './TimelineSection.css'
import FirstPic from '../../img/first-pic.jpg'
import SecondPic from '../../img/second-pic.jpg'
import ThirdPic from '../../img/third-pic.jpg'
import FourthPic from '../../img/fourth-pic.jpg'
import FifthPic from '../../img/fifth-pic.jpg'
import SixthPic from '../../img/sixth-pic.jpg'
import { fadeIn, childVariant } from '../../data/animation';
import { motion } from 'framer-motion';

const MotionContainer = motion(Container);
const MotionRow = motion(Row);

const TimelineSection = () => {
  return (

    <MotionContainer
      fluid
      className="py-5 custom-x-padding"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}>

      <MotionRow variants={childVariant} className='justify-content-center my-5'>
        <Col xxl={7} className='text-center'>
          <p className='text-center mb-2'>Better Loans, Better Lives</p>
          <h2 className="h1 display-4 text-center">Milestones of Growth</h2>
          <p className="lead text-muted text-center mb-4">Every step marks our dedication to providing reliable credit solutions.
            Together, we've built a legacy of progress and partnership.</p>
          <div className='mb-5'>
            <Button variant='danger' as={Link} to="/franchising">Become a Franchisee</Button>
          </div>

        </Col>
      </MotionRow>

      {/* //////////////////111111//////////////////////////////// */}
      <MotionRow variants={childVariant} className="mt-5 mt-md-3 justify-content-center">
        {/* Left: Image Placeholder */}
        <Col
          md={{ span: 5, order: 1 }}
          xs={{ span: 11, order: 3 }}
          className="d-flex align-items-start align-items-lg-center justify-content-start justify-content-lg-end mt-md-0"
        >
          <div className="text-center">
            <img src={FirstPic} alt="LT&G Credit Line first branch in Legazpi City, 2014" className="pic-holder img-fluid rounded-4" />
          </div>
        </Col>
        {/* Center: Timeline Line and Dot */}
        <Col
          md={{ span: 1, order: 2 }}
          xs={{ span: 1, order: 1 }}
          className="position-relative d-flex justify-content-center vertical-height align-items-stretch "
        >
          <div className="timeline-vertical"></div>
          <div className='d-flex align-items-start justify-content-center pt-4'>
            <div className="timeline-dot "></div>
          </div>

        </Col>
        {/* Right: Content */}
        <Col
          md={{ span: 5, order: 3 }}
          xs={{ span: 11, order: 2 }}
          className="position-relative pe-4 py-4 d-flex flex-column justify-content-end justify-content-lg-start"
        >
          <div>
            <h3 className="h4 fw-bold text-danger m-0">2014</h3>
            <h4 className="h5 fw-semibold mt-3">Marking the Beginning</h4>
            <p className="text-muted lead">
              LT&G Credit Line launched its microlending operations by opening its
              first branch in Legazpi City, Albay, signaling its commitment to offering
              accessible financial solutions.
            </p>
          </div>
        </Col>
        {/* Extra Timeline Line for small screens */}
        <Col
          xs={{ span: 1, order: 2 }}
          className="d-md-none position-relative d-flex justify-content-center vertical-height"
        >
          <div className="timeline-vertical"></div>
        </Col>
      </MotionRow>

      {/* //////////////////////222222222////////////////////////////////// */}
      <MotionRow variants={childVariant} className="justify-content-center">
        {/* Left: Image Placeholder */}
        <Col
          md={{ span: 5, order: 3 }}
          xs={{ span: 11, order: 3 }}
          className="d-flex align-items-start align-items-lg-center justify-content-start justify-content-lg-start mt-md-0"
        >
          <div className="text-center">
            <img src={SecondPic} alt="LT&G Credit Line first franchise branch, 2018" className="pic-holder img-fluid rounded-4" />
          </div>
        </Col>
        {/* Center: Timeline Line and Dot */}
        <Col
          md={{ span: 1, order: 2 }}
          xs={{ span: 1, order: 1 }}
          className="position-relative d-flex justify-content-center vertical-height align-items-stretch pt-5"
        >
          <div className="timeline-vertical"></div>
          <div className='d-flex align-items-start justify-content-center pt-4'>
            <div className="timeline-dot "></div>
          </div>

        </Col>
        {/* Right: Content */}
        <Col
          md={{ span: 5, order: 1 }}
          xs={{ span: 11, order: 2 }}
          className="position-relative pe-4 py-5 d-flex flex-column text-start text-md-end justify-content-end justify-content-lg-start"
        >
          <div>
            <h3 className="h4 fw-bold text-danger m-0 pt-4">2018</h3>
            <h4 className="h5 fw-semibold mt-3">First Franchise Branch</h4>
            <p className="text-muted lead">
              LT&G Credit Line reached a key milestone by opening its first
              franchise branch, initiating the brand’s expansion through
              franchising to extend its financial services to more communities.
            </p>
          </div>
        </Col>
        {/* Extra Timeline Line for small screens */}
        <Col
          xs={{ span: 1, order: 2 }}
          className="d-md-none position-relative d-flex justify-content-center vertical-height"
        >
          <div className="timeline-vertical"></div>
        </Col>
      </MotionRow>

      {/* ////////////////33333333///////////////////////////    */}
      <MotionRow variants={childVariant} className="justify-content-center">
        {/* Left: Image Placeholder */}
        <Col
          md={{ span: 5, order: 1 }}
          xs={{ span: 11, order: 3 }}
          className="d-flex align-items-start align-items-lg-center justify-content-start justify-content-lg-end mt-md-0"
        >
          <div className="text-center">
            <img src={ThirdPic} alt="LT&G Credit Line 25 branches nationwide, 2019" className="pic-holder img-fluid rounded-4" />
          </div>
        </Col>
        {/* Center: Timeline Line and Dot */}
        <Col
          md={{ span: 1, order: 2 }}
          xs={{ span: 1, order: 1 }}
          className="position-relative d-flex justify-content-center vertical-height align-items-stretch pt-5"
        >
          <div className="timeline-vertical"></div>
          <div className='d-flex align-items-start justify-content-center pt-4'>
            <div className="timeline-dot "></div>
          </div>

        </Col>
        {/* Right: Content */}
        <Col
          md={{ span: 5, order: 3 }}
          xs={{ span: 11, order: 2 }}
          className="position-relative pe-4 py-4 d-flex flex-column justify-content-end justify-content-lg-start pt-5"
        >
          <div>
            <h3 className="h4 fw-bold text-danger m-0 pt-3">2019</h3>
            <h4 className="h5 fw-semibold mt-3">25 Branches Nationwide</h4>
            <p className="text-muted lead">
              By 2019, LT&G Credit Line had grown to 25 branches nationwide,
              demonstrating its rapid expansion and increasing demand for its
              financial services across the country.
            </p>
          </div>
        </Col>
        {/* Extra Timeline Line for small screens */}
        <Col
          xs={{ span: 1, order: 2 }}
          className="d-md-none position-relative d-flex justify-content-center vertical-height"
        >
          <div className="timeline-vertical"></div>
        </Col>
      </MotionRow>

      {/* /////////////////4444////////////////////////// */}

      <MotionRow variants={childVariant} className="justify-content-center">
        {/* Left: Image Placeholder */}
        <Col
          md={{ span: 5, order: 3 }}
          xs={{ span: 11, order: 3 }}
          className="d-flex align-items-start align-items-lg-center justify-content-start justify-content-lg-start mt-md-0"
        >
          <div className="text-center">
            <img src={FourthPic} alt="LT&G Credit Line 38 branches nationwide, 2020" className="pic-holder img-fluid rounded-4" />
          </div>
        </Col>
        {/* Center: Timeline Line and Dot */}
        <Col
          md={{ span: 1, order: 2 }}
          xs={{ span: 1, order: 1 }}
          className="position-relative d-flex justify-content-center vertical-height align-items-stretch pt-5"
        >
          <div className="timeline-vertical"></div>
          <div className='d-flex align-items-start justify-content-center pt-4'>
            <div className="timeline-dot "></div>
          </div>

        </Col>
        {/* Right: Content */}
        <Col
          md={{ span: 5, order: 1 }}
          xs={{ span: 11, order: 2 }}
          className="position-relative pe-4 py-5 d-flex flex-column text-start text-md-end justify-content-end justify-content-lg-start"
        >
          <div>
            <h3 className="h4 fw-bold text-danger m-0 pt-4">2020</h3>
            <h4 className="h5 fw-semibold mt-3">38 Branches Nationwide</h4>
            <p className="text-muted lead">
              In 2020, LT&G Credit Line continued its rapid expansion,
              reaching a total of 38 branches across the Philippines.
            </p>
          </div>
        </Col>
        {/* Extra Timeline Line for small screens */}
        <Col
          xs={{ span: 1, order: 2 }}
          className="d-md-none position-relative d-flex justify-content-center vertical-height"
        >
          <div className="timeline-vertical"></div>
        </Col>
      </MotionRow>



      {/* ////////////////5555555///////////////////////////    */}
      <MotionRow variants={childVariant} className="justify-content-center">
        {/* Left: Image Placeholder */}
        <Col
          md={{ span: 5, order: 1 }}
          xs={{ span: 11, order: 3 }}
          className="d-flex align-items-start align-items-lg-center justify-content-start justify-content-lg-end mt-md-0"
        >
          <div className="text-center">
            <img src={FifthPic} alt="LT&G Credit Line 49 branches nationwide, 2021" className="pic-holder img-fluid rounded-4" />
          </div>
        </Col>
        {/* Center: Timeline Line and Dot */}
        <Col
          md={{ span: 1, order: 2 }}
          xs={{ span: 1, order: 1 }}
          className="position-relative d-flex justify-content-center vertical-height align-items-stretch pt-5"
        >
          <div className="timeline-vertical"></div>
          <div className='d-flex align-items-start justify-content-center pt-4'>
            <div className="timeline-dot "></div>
          </div>

        </Col>
        {/* Right: Content */}
        <Col
          md={{ span: 5, order: 3 }}
          xs={{ span: 11, order: 2 }}
          className="position-relative pe-4 py-4 d-flex flex-column justify-content-end justify-content-lg-start pt-5"
        >
          <div>
            <h3 className="h4 fw-bold text-danger m-0 pt-3">2021</h3>
            <h4 className="h5 fw-semibold mt-3">49 Branches Nationwide</h4>
            <p className="text-muted lead">
              In 2021, LT&G Credit Line expanded its presence to 49 branches nationwide,
              reinforcing its commitment to making financial services more accessible to Filipinos.
            </p>
          </div>
        </Col>
        {/* Extra Timeline Line for small screens */}
        <Col
          xs={{ span: 1, order: 2 }}
          className="d-md-none position-relative d-flex justify-content-center vertical-height"
        >
          <div className="timeline-vertical"></div>
        </Col>
      </MotionRow>

      {/* ///////////////66666///////////////////// */}

      <MotionRow variants={childVariant} className="justify-content-center mb-5">
        {/* Left: Image Placeholder */}
        <Col
          md={{ span: 5, order: 3 }}
          xs={{ span: 11, order: 3 }}
          className="d-flex align-items-start align-items-lg-center justify-content-start justify-content-lg-start mt-md-0"
        >
          <div className="text-center">
            <img src={SixthPic} alt="LT&G Credit Line projected 100 branches, 2025" className="pic-holder img-fluid rounded-4" />
          </div>
        </Col>
        {/* Center: Timeline Line and Dot */}
        <Col
          md={{ span: 1, order: 2 }}
          xs={{ span: 1, order: 1 }}
          className="position-relative d-flex justify-content-center vertical-height align-items-stretch pt-5"
        >
          <div className="timeline-vertical"></div>
          <div className='d-flex align-items-start justify-content-center pt-4'>
            <div className="timeline-dot "></div>
          </div>

        </Col>
        {/* Right: Content */}
        <Col
          md={{ span: 5, order: 1 }}
          xs={{ span: 11, order: 2 }}
          className="position-relative pe-4 py-5 d-flex flex-column text-start text-md-end justify-content-end justify-content-lg-start"
        >
          <div>
            <h3 className="h4 fw-bold text-danger m-0 pt-4">2025</h3>
            <h4 className="h5 fw-semibold mt-3">On the Road to 100 Branches</h4>
            <p className="text-muted lead">
              LT&G Credit Line is on track to reach 100 branches nationwide
              by the end of 2025, highlighting its ongoing commitment to
              expanding access to financial services across the country.
            </p>
          </div>
        </Col>
        {/* Extra Timeline Line for small screens */}
        <Col
          xs={{ span: 1, order: 2 }}
          className="d-md-none position-relative d-flex justify-content-center vertical-height"
        >
          <div className="timeline-vertical"></div>
        </Col>
      </MotionRow>


    </MotionContainer>
  )
}

export default TimelineSection