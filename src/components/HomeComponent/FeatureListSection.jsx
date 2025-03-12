import React from 'react'
import './FeatureListSection.css'
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GreatReturns from '../../img/greatreturns.png';
import TimelessIndustry from '../../img/timelessindustry.png';
import LinearOperations from '../../img/linearoperations.png';

const FeatureListSection = () => {
  return (
    <Container fluid className='py-5 px-xxl-5 px-xl-5 px-lg-5 px-md-5 px-sm-0'>
        <Row className='mt-5 justify-content-center'>
            <Col className='mb-5' xxl={10}>
              <h1 className="text-center display-2 fw-medium">Start Your Journey to Financial Freedom With Our Microlending Franchise</h1>
            </Col>
        </Row>
      
        <Row className='mt-5'>
                <Col xxl={4} >
                    <Card className='text-center align-items-center border-0'>
                        <Card.Img src={GreatReturns} className="feature-list-pic" alt="Great Return Icon" variant="top" />
                        <Card.Body>
                            <Card.Title>
                                <h3>Achieve Great Returns with a Purpose </h3>
                                </Card.Title>
                                <Card.Text>
                                    <p>Compared to similarly priced FRANCHISE PACKAGES, LT&G boasts of a relatively faster ROI of 28 MONTHS!</p>
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className='text-center align-items-center border-0'>
                        <Card.Img src={TimelessIndustry} className="feature-list-pic" alt="Great Return Icon" variant="top" />
                        <Card.Body>
                            <Card.Title>
                                <h3>Invest in a Timeless Industry with Lasting Impact</h3>
                                </Card.Title>
                                <Card.Text>
                                   <p> Financial Industry will always be relevant regardless of shifts in the market. You know what they say, "MONEY MAKES THE WORLD GO ROUND".</p>
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className='text-center align-items-center border-0'>
                        <Card.Img src={LinearOperations} className="feature-list-pic" alt="Great Return Icon" variant="top" />
                        <Card.Body>
                            <Card.Title>
                               <h3>Streamlined and Efficient Operations for Sustainable Growth</h3>
                                </Card.Title>
                                <Card.Text>
                                    <p>The Business System is designed to produce maximum results with minimal effort. Say GOODBYE to concerns regarding SPOILAGE, LOW INVENTORY, or EXPENSIVE RENTALS.</p>
                                </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    </Container>
  )
}

export default FeatureListSection