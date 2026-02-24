import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import "./AdCarouselModal.css";

import img1 from "../../img/banner img/International Franchise.png";
import img2 from "../../img/banner img/franchise asia.jpg";
import img3 from "../../img/banner img/how to invest in the right faranschise seminar.png";

export default function AdCarouselModal() {
  const STORAGE_KEY = "hide_ad_carousel_v1";
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = useMemo(() => [
    {
      img: img1,
      alt: "International Franchise Conference 2026",
      badge: "Featured Event",
      dateTop: "Thu, Apr 23 • SMX Convention Center",
      title: "International Franchise Conference 2026",
      subtitle:
        "Join us at the Franchise Asia Philippines International Franchise Conference 2026 for a game-changing event where visionaries, leaders, and innovators gather to explore the future of franchising.",
      buttonText: "Explore the Conference",
      link: "https://www.franchiseasiaph.com/conference",
      linkType: "external",
    },
    {
      img: img2,
      alt: "Franchise Expo & Business Seminars",
      badge: "3-Day Expo",
      dateTop: "Apr 24–26 • SMX Convention Center",
      title: "Franchise Expo & Business Seminars",
      subtitle:
        "Join us at the Franchise Asia Philippines International Franchise Conference 2026 for a game-changing event where visionaries, leaders, and innovators gather to explore the future of franchising.",
      buttonText: "Reserve Your Slot",
      link: "https://www.franchiseasiaph.com/",
      linkType: "external",
    },
    {
      img: img3,
      alt: "How to Invest in the Right Franchise",
      badge: "Limited Seats",
      dateTop: "Early RSVP Recommended",
      title: "How to Invest in the Right Franchise",
      subtitle:
        "Be your own boss by investing on a franchise! Know the advantages and challenges of franchising and learn how to detect and avoid franchise scams!",
      buttonText: "Save My Seat",
      link:
        "https://www.pfa.org.ph/event-details/how-to-invest-in-the-right-franchise-seminar-2",
      linkType: "external",
    },
  ], []);

  useEffect(() => {
    const hidden = localStorage.getItem(STORAGE_KEY) === "1";
    if (hidden) return;

    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem(STORAGE_KEY, "1");
    }
    setShow(false);
  };

  const handleCtaClick = (slide) => {
    if (!slide?.link) return;

    handleClose();

    if (slide.linkType === "external") {
      window.open(slide.link, "_blank", "noopener,noreferrer");
      return;
    }

    navigate(slide.link);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="xl"
      backdrop
      keyboard
      dialogClassName="adModalDialog"
    >
      <Modal.Body className="p-2 mt-2">
        <Carousel
          fade
          indicators
          controls
          interval={4200}
          pause="hover"
          touch
          activeIndex={activeIndex}
          onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
        >
          {slides.map((s, i) => (
            <Carousel.Item key={i}>
              <div className="container-fluid position-relative">

                <div className="row g-0 rounded overflow-hidden shadow-sm">

                  <div className="col-md-6">
                    <img
                      src={s.img}
                      alt={s.alt}
                      className="w-100 h-100 adImage"

                    />
                  </div>


                  <div className="adRight col-md-6 text-white d-flex flex-column justify-content-center text-center p-4">
                    <div
                      className={`adSlideContent ${activeIndex === i ? "is-active" : ""
                        }`}
                    >
                      {s.badge && (
                        <Badge pill className="adBadge mb-2">
                          {s.badge}
                        </Badge>
                      )}

                      <small className="text-warning fw-semibold d-block mb-2">
                        {s.dateTop}
                      </small>

                      <h4 className="fw-bold mb-2">{s.title}</h4>

                      <p className="adSubtitle mb-4">{s.subtitle}</p>

                      <Button
                        variant="danger"
                        className="adCtaBtn"
                        onClick={() => handleCtaClick(s)}
                      >
                        {s.buttonText}
                        <span className="ctaArrow">→</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="adDontShow">
          <Button onClick={handleClose} variant="secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"></path></svg>
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
