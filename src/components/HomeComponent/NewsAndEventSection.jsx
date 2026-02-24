import React from "react";
import "./NewsAndEventSection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import NewsData from "../../data/newsdata";
import { fadeIn } from "../../data/animation";
import { motion } from "framer-motion";

const MotionContainer = motion(Container);
const MotionCard = motion(Card);

const responsive = {
  xxl: { breakpoint: { max: 4000, min: 1400 }, items: 3 },
  xl: { breakpoint: { max: 1399, min: 1200 }, items: 2 },
  lg: { breakpoint: { max: 1119, min: 992 }, items: 1 },
  md: { breakpoint: { max: 991, min: 768 }, items: 1 },
  sm: { breakpoint: { max: 767, min: 576 }, items: 1 },
  xs: { breakpoint: { max: 575, min: 0 }, items: 1 },
};

const NewsAndEventSection = () => {
  return (
    <MotionContainer
      fluid
      className="py-5 bg-light"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Row className="justify-content-center my-5">
        <Col xxl={10}>
          <h1 className="display-4 text-center">What's New?</h1>

          <Carousel
            className="carousel-containers mt-4 py-5"
            responsive={responsive}
            swipeable={true}
            showDots={true}
            infinite={true}
            keyBoardControl={true}
            transitionDuration={500}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-60-px d-flex justify-content-center"
          >
            {NewsData.map((newsdata) => (
              <MotionCard
                className="custom-card"
                key={newsdata.id}
                whileHover={{ scale: 1.1 }}
              >
                <Card.Img
                  variant="top"
                  className="card-img-size"
                  src={newsdata.img}
                  alt={newsdata.alt}
                />
                <Card.Body>
                  <Card.Text className="card-text mb-2">
                    <Row className="d-flex justify-content-between">
                      <Col className="text-start text-muted">
                        <small>{newsdata.date}</small>
                      </Col>
                      <Col className="text-end">{newsdata.source}</Col>
                    </Row>
                  </Card.Text>
                  <Card.Title className="news-data-title">
                    {newsdata.title}
                  </Card.Title>
                  <Button
                    variant="danger"
                    className="mt-3"
                    href={newsdata.link}
                  >
                    {" "}
                    Read More
                  </Button>
                </Card.Body>
              </MotionCard>
            ))}
          </Carousel>
        </Col>
      </Row>
    </MotionContainer>
  );
};

export default NewsAndEventSection;
