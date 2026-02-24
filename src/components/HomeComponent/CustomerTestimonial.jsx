import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import MiriamSinio from '../../img/miriam-sinio.webp';
import CrisantaPamintuan from '../../img/crisanta-pamintuan.webp';
import MarifeMataba from '../../img/marife-mataba.webp';
import { fadeIn, childVariant } from '../../data/animation';

const MotionContainer = motion(Container);
const MotionCol = motion(Col);

const testimonials = [
  {
    id: 1,
    name: "Miriam Sinio",
    pic: MiriamSinio,
    subtitle: "Karinderya Store Owner",
    text: "Nung bumaba ang aking negosyo, LT&G lang ang nakatulong sa akin upang makasurvive ang aking negosyong karinderya. Ang dagdag puhunan ng LT&G ang rason kung bakit patuloy pa din akong nagnenegosyo",
    rating: 5,
  },
  {
    id: 2,
    name: "Crisanta Pamintuan",
    pic: CrisantaPamintuan,
    subtitle: "Salon Store Owner",
    text: "Wala po akong masasabi sa LT&G Credit Line kasi since nanghiram po ako dito nakatulong po ito ng malaki sa akin sa pamamagitan ng pagdadagdag ko ng puhunan sa aking salon",
    rating: 5,
  },
  {
    id: 3,
    name: "Marife Mataba",
    pic: MarifeMataba,
    subtitle: "Sari-Sari Store Owner",
    text: "Nang dahil sa LT&G lumawak ang aking business, dati kasi simpleng sari-sari store lang ngayon ay nadagdagan ang pinagkakakitaan dahil sa dagdag puhunan ng LT&G",
    rating: 5,
  },
];

const CustomerTestimonial = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "LT&G Credit Line"
    },
    "reviewRating": testimonials.map((t) => ({
      "@type": "Rating",
      "ratingValue": t.rating,
      "bestRating": 5,
      "name": t.name
    })),
    "author": testimonials.map((t) => ({
      "@type": "Person",
      "name": t.name
    }))
  };

  return (
    <MotionContainer fluid className="bg-light custom-x-padding py-5" variants={fadeIn} initial="hidden" whileInView="show">
      <Row className='mt-5'>
        <Col>
          <h1 className="text-center display-4">Real Stories, Real Success: Our Clients Speak</h1>
        </Col>
      </Row>
      <Row className="justify-content-center my-5">
        {testimonials.map((testimonial) => (
          <MotionCol variants={childVariant} md={4} key={testimonial.id} className="d-flex mb-4 align-items-stretch">
            <Card className="border shadow-sm p-3 text-center p-4 ">
              <Row className='justify-content-center'>
                <img src={testimonial.pic} className="rounded-circle border border-3 border-danger p-0 d-flex justify-content-center align-items-center text-center" alt="First Pic" style={{ width: "auto", maxHeight: "80px" }} />
              </Row>
              <Row className='mt-3'>
                <div>
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <FaStar key={index} className="text-warning" />
                  ))}
                </div>
              </Row>
              <Card.Body>
                <Card.Text className="fw-bold">
                  "{testimonial.text}"
                </Card.Text>
                <div className="d-flex flex-column align-items-center">
                  <Row>
                    <Col>
                      <Card.Text className="mt-2 fw-semibold">{testimonial.name}</Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card.Text className='text-muted mt-0'> <small>LT&G Client - {testimonial.subtitle}</small></Card.Text>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </MotionCol>
        ))}
      </Row>
    </MotionContainer>
  )
}

export default CustomerTestimonial;