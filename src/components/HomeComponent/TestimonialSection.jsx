import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import SirCarlo from '../../img/sir-carlo.webp'
import MamEunice from '../../img/mam-eunice.webp'
import SirJasper from '../../img/sir-jasper.webp'
import SirCarloTestimonial from '../../video/SirCarloTestimonial.mp4'
import MamEuniceTestimonial from '../../video/MamEuniceTestimonial.mp4'
import SirJasperTestimonial from '../../video/SirJasperTestimonial.mp4'
import SirJasperTestimonialSubtitles from '../../video/sir-jasper-testimonial-subtitles.vtt'
import SirCarloTestimonialSubtitles from '../../video/sir-carlo-testimonial-subtitles.vtt'
import MamEuniceTestimonialSubtitles from '../../video/mam-eunice-testimonial-subtitles.vtt'
import { FaStar } from "react-icons/fa";
import './TestimonialSection.css'
import { fadeIn, ceoVariant } from '../../data/animation';
import { motion } from 'framer-motion';

const MotionRow = motion(Row);

const TestimonialSection = () => {

  const [showFirst, setShowFirst] = useState(true);

  const handleToggle = () => {
    setShowFirst(prev => !prev);
  };

  return (
    <Carousel controls={true} indicators={false} interval={null} fade>
      {/* Mam Eunice Testimonial */}
      <Carousel.Item>
        <Container fluid className="bg-testimonial-mam-eunice custom-x-padding py-5 align-items-stretch">

          <MotionRow variants={fadeIn} initial="hidden" whileInView="show">
            <Row className=' justify-content-center text-light mt-5 mb-0'>
              <h2 className="h1 display-4 text-center mb-5">Hear From Our Successful Franchisees</h2>
            </Row>

            {showFirst ? (
              <div>
                <Row className="justify-content-center my-5">
                  <img src={MamEunice} className='object-fit-cover border border-5 border-danger rounded-circle p-0' alt='stats pic' style={{ maxHeight: "250px", width: "auto" }} />
                </Row>

                <Row className='text-center justify-content-center mb-5'>
                  <Col lg={8}>
                    <p className="mb-0 text-light mt-2 fs-3">
                      "Operations wise, there were a lot of challenges
                      but the support of LT&G is ramdam naman namin,
                      what was promise during the presentations and during our
                      one on one with the owner and management binibigay naman nila,
                      kung baga I'm happy with the franchise "
                    </p>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-4 text-light text-center mb-4">
                  <Col xs="auto">
                    <h4 className="mb-0 fw-semibold">Eunice Bermejo</h4>
                    <p className="text-secondary mt-2">Franchisee, LT&G Las Piñas Branch</p>
                  </Col>

                </Row>
                <Row className="text-center mb-5">
                  <div className="mb-2 ">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} className="text-warning me-1" />
                    ))}
                  </div>
                </Row>
              </div>
            ) : (
              <motion.div variants={ceoVariant} initial="hidden" animate="show">
                <Row className='justify-content-center mb-5'>
                  <video className='rounded-3 video-size' controls>
                    <source src={MamEuniceTestimonial} type="video/mp4" />
                    <track label='English' kind='subtitles' srcLang='en' src={MamEuniceTestimonialSubtitles} default />
                    Your browser does not support the video tag.
                  </video>
                </Row>
              </motion.div>
            )}
            <Row className='text-center mb-5'>
              <div>
                <Button variant='danger' className="ms-4" onClick={handleToggle}> {showFirst ? 'Show ' : 'Hide'} Video Testimonial</Button>
              </div>
            </Row>
          </MotionRow>

        </Container>
      </Carousel.Item>

      {/* Sir Carlo Testimonial */}
      <Carousel.Item>
        <Container fluid className="bg-testimonial-sir-carlo custom-x-padding py-5 align-items-stretch">
          <MotionRow
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
          >
            <Row className=' justify-content-center text-light mt-5 mb-0'>
              <h2 className="h1 display-4 text-center mb-5">Hear From Our Successful Franchisees</h2>
            </Row>

            {showFirst ? (
              <div>
                <Row className="justify-content-center my-5">
                  <img src={SirCarlo} className='object-fit-cover border border-5 border-danger rounded-circle p-0' alt='stats pic' style={{ maxHeight: "250px", width: "auto" }} />
                </Row>

                <Row className='text-center justify-content-center mb-5'>
                  <Col lg={8}>
                    <p className="mb-0 text-light mt-2 fs-3">
                      "Para sa mga future franchisees, if naghahanap kayo ng good business model na maganda
                      yung potential as long as you'll be committed na seseryosohin niyo, I definitely recommend LT&G"
                    </p>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-4 text-light text-center mb-4">
                  <Col xs="auto">
                    <h4 className="mb-0 fw-semibold">Juan Carlo Co</h4>
                    <p className="text-secondary mt-2">Franchisee, LT&G San Fernando Branch</p>
                  </Col>

                </Row>
                <Row className="text-center mb-5">
                  <div className="mb-2 ">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} className="text-warning me-1" />
                    ))}
                  </div>
                </Row>
              </div>
            ) : (
              <motion.div variants={ceoVariant} initial="hidden" animate="show">
                <Row className='justify-content-center mb-5'>
                  <video className='rounded-3 video-size' controls>
                    <source src={SirCarloTestimonial} type="video/mp4" />
                    <track label='English' kind='subtitles' srcLang='en' src={SirCarloTestimonialSubtitles} default />

                    Your browser does not support the video tag.
                  </video>
                </Row>
              </motion.div>
            )}
            <Row className='text-center mb-5'>
              <div>
                <Button variant='danger' className="ms-4" onClick={handleToggle}> {showFirst ? 'Show' : 'Hide'} Video Testimonial</Button>
              </div>
            </Row>
          </MotionRow>
        </Container>

      </Carousel.Item>

      {/* Sir Jasper Testimonial */}
      <Carousel.Item>
        <Container fluid className="bg-testimonial-sir-jasper custom-x-padding py-5">

          <MotionRow
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
          >
            <Row className=' justify-content-center text-light mt-5 mb-0'>
              <h2 className="h1 display-4 text-center mb-5">Hear From Our Successful Franchisees</h2>
            </Row>
            {showFirst ? (
              <div>
                <Row className="justify-content-center my-5">
                  <img src={SirJasper} className='object-fit-cover border border-5 border-danger rounded-circle p-0' alt='stats pic' style={{ maxHeight: "250px", width: "auto" }} />
                </Row>

                <Row className='text-center justify-content-center mb-5'>
                  <Col lg={8}>
                    <p className="mb-0 text-light mt-2 fs-3">
                      "Ang kagandahan sa ginagawa natin, tumutulong tayo sa mga unbanked.
                      One business represent one family or more, the point that you are helping a family,
                      you're helping other people reach their goal. Nakakatuwa dahil you are part of their success"
                    </p>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-4 text-light text-center mb-4">
                  <Col xs="auto">
                    <h4 className="mb-0 fw-semibold">Jasper Robles</h4>
                    <p className="text-secondary mt-2">Franchisee, LT&G Lipa Branch</p>
                  </Col>

                </Row>
                <Row className="text-center mb-5">
                  <div className="mb-2 ">
                    {[...Array(5)].map((_, idx) => (
                      <FaStar key={idx} className="text-warning me-1" />
                    ))}
                  </div>
                </Row>
              </div>
            ) : (
              <motion.div variants={ceoVariant} initial="hidden" animate="show">
                <Row className='justify-content-center mb-5'>
                  <video className='rounded-3 video-size' controls>
                    <source src={SirJasperTestimonial} type="video/mp4" />
                    <track label='English' kind='subtitles' srcLang='en' src={SirJasperTestimonialSubtitles} default />
                    Your browser does not support the video tag.
                  </video>
                </Row>
              </motion.div>
            )}
            <Row className='text-center mb-5'>
              <div>
                <Button variant='danger' className="ms-4" onClick={handleToggle}> {showFirst ? 'Show' : 'Hide'} Video Testimonial</Button>
              </div>
            </Row>
          </MotionRow>
        </Container>
      </Carousel.Item>


    </Carousel>
  )
}

export default TestimonialSection