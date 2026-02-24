import React from 'react';
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { motion } from 'framer-motion';

// Styling & Assets
import './FranchiseProgramSection.css';
import PreOpeningSupport from '../../img/pre-opening.png';
import OpeningSupport from '../../img/opening.png';
import ContinuingSupport from '../../img/continuing.png';
import MarketingSupport from '../../img/marketing.png';
import { fadeIn, childVariant } from '../../data/animation';

const MotionContainer = motion(Container);
const MotionCol = motion(Col);
const MotionCard = motion(Card);

const FranchiseProgramSection = () => {
  const programs = [
    {
      title: "Pre-Opening Support",
      img: PreOpeningSupport,
      alt: "Pre-opening microlending franchise support services",
      items: [
        "Franchise Area Mapping & Survey",
        "Staff Recruitment Activities",
        "Staff Training",
        "Branch Office Site Evaluation",
        "Certificate Course in Microlending",
        "Business Registration Assistance",
        "Office Refurbishment"
      ]
    },
    {
      title: "Opening Support",
      img: OpeningSupport,
      alt: "Opening day support for new franchise branches",
      items: [
        "Detailed Area Mapping",
        "Guided Business Roll Out",
        "Systems Installation and Orientation",
        "Branch Blessing on Opening Day"
      ]
    },
    {
      title: "Continuing Support",
      img: ContinuingSupport,
      alt: "Ongoing operational and IT support for franchisees",
      items: [
        "Periodic Branch Audit",
        "Regular Area Supervisor Assistance",
        "Daily IT Monitoring And Support",
        "Regular HR Assistance and Guidance",
        "Semi-Monthly Branch Evaluations"
      ]
    },
    {
      title: "Marketing Support",
      img: MarketingSupport,
      alt: "Marketing and social media advertising for franchise success",
      items: [
        "Opening Week Marketing Drive",
        "Social Media Advertising",
        "Flyer Layout and Design",
        "Head Office Marketing Support"
      ]
    }
  ];

  return (
    <MotionContainer
      fluid
      className="custom-x-padding py-5 bg-light"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
    >

      <Row className='mt-5 justify-content-center'>
        <Col className='mb-5' xxl={10}>
          <h1 className="display-4 text-center">Franchise Programs</h1>
        </Col>
      </Row>

      <Row className='my-5'>
        <MotionCol lg={3} className="d-flex flex-column" variants={childVariant}>
          <MotionCard className="mb-4 p-3 shadow rounded-4 flex-fill d-flex flex-column bg-info" whileHover={{ scale: 1.1 }}>
            <div className='d-flex justify-content-center mt-3'>
              <div className='franchise-program-header'>
                <Image src={PreOpeningSupport} className='border border-4 rounded-circle border-light p-2 bg-danger' style={{ maxHeight: "100px", width: "auto" }} alt='stats pic' />
              </div>
            </div>
            <Card.Body>
              <h5 className='mb-4 mt-4 text-center text-light'>Pre-Opening Support</h5>
              <hr className='text-light' />
              <ul className="list-unstyled text-start text-secondary ">
                <li className='mt-2'>• Franchise Area Mapping & Survey</li>
                <li className='mt-2'>• Staff Recruitment Activities</li>
                <li className='mt-2'>• Staff Training</li>
                <li className='mt-2'>• Branch Office Site Evaluation</li>
                <li className='mt-2'>• Certificate Course in Microlending</li>
                <li className='mt-2'>• Assistance On Business Registration & Licensing</li>
                <li className='mt-2'>• Office Refurbishment</li>
              </ul>
            </Card.Body>
          </MotionCard>
        </MotionCol>
        <MotionCol lg={3} className="d-flex flex-column" variants={childVariant}>
          <MotionCard className="mb-4 p-3 border-2 shadow rounded-4 flex-fill d-flex flex-column bg-info" whileHover={{ scale: 1.1 }}>

            <div className='d-flex justify-content-center mt-3'>
              <div className='franchise-program-header'>
                <Image src={OpeningSupport} className='border border-4 rounded-circle border-light p-2 bg-danger' style={{ maxHeight: "100px", width: "auto" }} alt='stats pic' />
              </div>
            </div>
            <Card.Body>
              <h5 className='mb-4 mt-4 text-center text-light'>Opening Support</h5>
              <hr className='text-light' />
              <ul className="list-unstyled text-start text-secondary">
                <li className='mt-2'>• Detailed Area Mapping</li>
                <li className='mt-2'>• Guided Business Roll Out</li>
                <li className='mt-2'>• Systems Installation and Orientation</li>
                <li className='mt-2'>• Branch Blessing on Opening Day</li>
              </ul>
            </Card.Body>
          </MotionCard>
        </MotionCol>

        <MotionCol lg={3} className="d-flex flex-column" variants={childVariant}>
          <MotionCard className="mb-4 p-3 border-2 shadow rounded-4 flex-fill d-flex flex-column bg-info" whileHover={{ scale: 1.1 }}>

            <div className='d-flex justify-content-center mt-3'>
              <div className='franchise-program-header'>
                <Image src={ContinuingSupport} className='border border-4 rounded-circle border-light p-2 bg-danger' style={{ height: "100px", width: "auto" }} alt='stats pic' />
              </div>
            </div>

            <Card.Body>
              <h5 className='mb-4 mt-4 text-center text-light'>Continuing Support</h5>
              <hr className='text-light' />
              <ul className="list-unstyled text-start text-secondary">
                <li className='mt-2'>• Periodic Branch Audit</li>
                <li className='mt-2'>• Regular Branch Assistance by Area Supervisors</li>
                <li className='mt-2'>• Daily IT monitoring And Support</li>
                <li className='mt-2'>• Regular HR Assistance and Guidance</li>
                <li className='mt-2'>• Semi-Monthly Branch Evaluation with Franchise Owners & Managers</li>
              </ul>
            </Card.Body>
          </MotionCard>
        </MotionCol>

        <MotionCol lg={3} className="d-flex flex-column" variants={childVariant}>
          <MotionCard className="mb-4 p-3 border-2 shadow rounded-4 flex-fill d-flex flex-column bg-info" whileHover={{ scale: 1.1 }} >

            <div className='d-flex justify-content-center mt-3'>
              <div className='franchise-program-header'>
                <Image src={MarketingSupport} className='border border-4 rounded-circle border-light p-2 bg-danger' style={{ maxHeight: "100px", width: "auto" }} alt='stats pic' />
              </div>
            </div>
            <Card.Body>
              <h5 className='mb-4 mt-4 text-center text-light'>Marketing Support</h5>
              <hr className='text-light' />
              <ul className="list-unstyled text-start text-secondary">
                <li className='mt-2'>• Opening Week Marketing Drive with LT&G Head Office Team</li>
                <li className='mt-2'>• Social Media Advertising</li>
                <li className='mt-2'>• Flyer Layout and Design</li>
              </ul>
            </Card.Body>
          </MotionCard>
        </MotionCol>
      </Row>
    </MotionContainer>

  )
}

export default FranchiseProgramSection;