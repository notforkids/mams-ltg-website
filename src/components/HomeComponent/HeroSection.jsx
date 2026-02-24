import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import AdCarouselModal from "../Ads/AdCarouselModal";
import PromotionalVideo from '../../video/promotional-video.mp4';
import VideoSubtitles from '../../video/promotional-video-subtitles.vtt';
import VideoThumbnail from '../../img/video-thumbnail/video-thumbnail.png'
import BranchesData from '../../data/branchesdata'
import { fadeIn, childVariant } from '../../data/animation';

const MotionContainer = motion(Container);

const AnimatedCounter = ({ targetValue, label }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString(),
  );

  useEffect(() => {
    const animation = animate(count, targetValue, { duration: 2, delay: 1 });
    return () => animation.stop();
  }, [count, targetValue]);

  return (
    <Col className="border-start ps-4">
      <motion.div className="h1 mt-3 fw-bold text-dark">{rounded}</motion.div>
      <p className="text-muted mb-0">{label}</p>
    </Col>
  );
};

const HeroSection = () => {
  return (
    <>
      <MotionContainer
        fluid
        className="custom-x-padding py-5"
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <AdCarouselModal />

        <Row className="d-flex align-items-center justify-content-center my-5">
          <Col
            lg={6}
            className="d-flex flex-column justify-content-center text-start"
          >
            <h1 className="text-info display-3 fw-light">
              Franchise the Future <br/>of Microlending
            </h1>

            <p className="fs-5 fw-light text-muted mt-3">
              LT&G Credit Line offers a structured microlending franchise
              opportunity in the Philippines, empowering entrepreneurs to build
              their own lending business with a proven system, comprehensive
              operational support, and a scalable income model.
            </p>

            <div className="mt-4 d-flex flex-column flex-sm-row gap-3">
              <Button
                variant="danger"
                className="me-2 px-4 py-2"
                as={Link}
                to="/franchising"
              >
                Explore Franchise Opportunities
              </Button>

              <Button
                variant="secondary"
                className="px-4 py-2 d-f"
                as={Link}
                to="/contact"
              >
                Start Your Franchise Journey
              </Button>
            </div>

            <Row className="mt-5 gap-4">
              <AnimatedCounter
                targetValue={109805}
                label="Active loan clients served"
              />
              <AnimatedCounter
                targetValue={BranchesData.length}
                label="Franchise branches nationwide"
              />
            </Row>

            <Row className="my-3">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 px-3 py-2">
                <span className="text-muted small fw-bold">4.8 / 5.0</span>

                <div className="d-flex">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="text-warning">
                      &#9733;
                    </span>
                  ))}
                </div>

                <span className="text-muted small">
                  Trusted by 20+ Franchise Partners Nationwide
                </span>
              </div>
            </Row>
          </Col>

          <Col lg={6} className="d-flex align-items-center">
            <video
              width="100%"
              height="auto"
              controls
              preload="none"
              poster={VideoThumbnail}
              className="rounded-3 shadow-lg"
            >
              <track
                label="English"
                kind="subtitles"
                srcLang="en"
                src={VideoSubtitles}
                default
              />
              <source src={PromotionalVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>
      </MotionContainer>
    </>
  );
};

export default HeroSection;
