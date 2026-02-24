import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

import GreatReturns from "../../img/greatreturns.png";
import TimelessIndustry from "../../img/timelessindustry.png";
import LinearOperations from "../../img/linearoperations.png";
import { fadeIn, childVariant } from "../../data/animation";

const MotionContainer = motion(Container);
const MotionCol = motion(Col);

const FeatureListSection = () => {
  return (
    <MotionContainer
      fluid
      className="custom-x-padding py-5"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Row className="mt-5 justify-content-center">
        <Col className="my-5" xxl={10}>
          <h2 className="text-center display-4 fw-light">
            Why Choose Our Microlending Franchise?
          </h2>
        </Col>
      </Row>

      <Row className="my-5 text-center justify-content-center gap-lg-5">
        <MotionCol lg={3} variants={childVariant}>
          <img
            src={GreatReturns}
            style={{ height: "50px" }}
            alt="Great Return Icon"
          />
          <h3 className="h5 fw-bold mt-4">Great Returns</h3>
          <p className="text-muted">
            Compared to similarly priced FRANCHISE PACKAGES, LT&G boasts of a
            relatively faster ROI of 28 MONTHS!
          </p>
        </MotionCol>

        <MotionCol lg={3} variants={childVariant}>
          <img
            src={TimelessIndustry}
            style={{ height: "50px" }}
            alt="Timeless Industry Icon"
          />
          <h3 className="h5 fw-bold mt-4">Timeless Industry</h3>
          <p className="text-muted">
            The Financial Industry will always be relevant regardless of shifts
            in the market. "MONEY MAKES THE WORLD GO ROUND".
          </p>
        </MotionCol>

        <MotionCol lg={3} variants={childVariant}>
          <img
            src={LinearOperations}
            style={{ height: "50px" }}
            alt="Linear Operations Icon"
          />
          <h3 className="h5 fw-bold mt-4">Linear Operations</h3>
          <p className="text-muted">
            The Business System is designed to produce maximum results with
            minimal effort. Say GOODBYE to concerns regarding SPOILAGE, LOW
            INVENTORY, or EXPENSIVE RENTALS.
          </p>
        </MotionCol>
      </Row>
    </MotionContainer>
  );
};

export default FeatureListSection;
