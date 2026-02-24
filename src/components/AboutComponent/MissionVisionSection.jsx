import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MissionVisionSection.css";

const MissionVisionSection = () => {
  return (
    <Container fluid className="custom-x-padding py-5 bg-info">
      <Row className="my-1">
        <Col lg={6} className=" text-center text-lg-start p-5">
          <h2 className="h1 text-light mb-3">Our Mission</h2>
          <p className="text-secondary lead">
            {" "}
            To be the trusted partner for entrepreneurs and families, providing
            fair and accessible financial solutions that empower growth. We
            strive to equip our clients with financial tools, resources, and
            guidance needed to plan, operate, and expand their ventures,
            creating sustainable economic opportunities and vibrant communities.
            Our commitment to responsible lending supports financial stability
            and community development.
          </p>
        </Col>
        <Col lg={6} className=" text-center text-lg-start p-5">
          <h2 className="h1 text-light mb-3">Our Vision</h2>
          <p className="text-secondary lead">
            {" "}
            To become the leading force in microlending, empowering
            entrepreneurs and fostering business growth throughout the nation.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MissionVisionSection;
