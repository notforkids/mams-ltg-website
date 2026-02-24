import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import MarcoPic from '../../img/team-marc1.webp';
import CathPic from '../../img/team-cath1.webp';
import AgnesPic from '../../img/team-agnes1.webp';
import MarlonPic from '../../img/team-marlon1.webp';
import ArnoldPic from '../../img/team-arnold1.webp';
import EmsPic from '../../img/team-ems1.webp';
import AlexPic from '../../img/team-alex1.webp';
import ShainlyPic from '../../img/team-blank1.webp';
import FretzPic from '../../img/team-fretz1.webp';
import MarkPic from '../../img/team-blank1.webp';
import { childVariant, fadeIn } from '../../data/animation';
import { motion } from 'framer-motion';

const MotionContainer = motion(Container);
const MotionCol = motion(Col);
const MotionImage = motion(Image);

const TeamSection = () => {
  const teamMembers = [
    { name: "Marco Antonio Soliman", role: "President/CEO", img: MarcoPic },
    { name: "Agnes Deniega", role: "General Manager", img: AgnesPic },
    { name: "Catherine Car", role: "Human Resource Head", img: CathPic },
    { name: "Marlon Thomas Marcellana", role: "Systems Administrator", img: MarlonPic },
    { name: "Arnold Rioflorido", role: "Regional Head", img: ArnoldPic },
    { name: "Emelyn Marbella", role: "Finance Head", img: EmsPic },
    { name: "Alexis Daimler Esquejo", role: "Franchise Marketing Officer", img: AlexPic },
    { name: "Shainly Love Nuñez", role: "Accounting Head", img: ShainlyPic },
    { name: "Frederick Ildefonso", role: "Debt Recovery Specialist", img: FretzPic },
    { name: "Mark Anthony Sanglap", role: "Debt Recovery Specialist", img: MarkPic },

  ];

  return (
    <MotionContainer
      fluid
      className='custom-x-padding py-5'
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
    >
      <Row className='justify-content-center mt-5'>
        <Col xxl={9}>
          <h1 className="display-4 text-center">Our Team</h1>
          <p className="lead text-muted text-center">We have professional consultants in our franchise team. We are also always looking for new people to join our team. Our consultants know their stuff very well. Feel free to contact us for a quote.</p>
        </Col>
      </Row>
      <Row className="g-4 my-5 text-center">
        {teamMembers.map((member, index) => (
          <MotionCol variants={childVariant} key={index} xxl={4} lg={6} md={12} className='mb-5'>
            <MotionImage src={member.img} className="img-fluid rounded-circle shadow" alt="Card image" style={{ maxWidth: "250px", height: "auto" }} whileHover={{ scale: 1.1 }} />
            <h5 className="text-dark mt-4">{member.name}</h5>
            <h6 className="text-muted fw-light">{member.role}</h6>


          </MotionCol>
        ))}
      </Row>
    </MotionContainer>
  )
}

export default TeamSection