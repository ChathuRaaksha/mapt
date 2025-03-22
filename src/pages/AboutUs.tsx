import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import InteractiveGlobe from '../components/InteractiveGlobe';
import estherImage from '../assets/images/esther-cole.jpg';
import supunImage from '../assets/images/supun-chathuranga.jpg';

const AboutUs: React.FC = () => {
  return (
    <Container fluid className="about-us-section py-5">
      {/* Header */}
      <Row className="text-center mb-5">
        <Col>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About iTer</h1>
            <p className="lead">
              Crafting personalized Swedish adventures to inspire your journey.
            </p>
          </motion.div>
        </Col>
      </Row>

      {/* Our Story */}
      <Row className="mb-5">
        <Col md={8} className="mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Our Story</h2>
            <p>
              At iTer, we’re passionate about turning your travel dreams into reality. 
              Founded with a love for Sweden’s breathtaking landscapes and vibrant 
              culture, we specialize in creating tailored travel experiences that 
              let you explore Sweden your way.
            </p>
          </motion.div>
        </Col>
      </Row>

      {/* Destinations with Globe */}
      <Row className="mb-5">
        <Col md={8} className="mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Our Destinations</h2>
            <div className="globe-container">
              <InteractiveGlobe />
            </div>
          </motion.div>
        </Col>
      </Row>

      {/* Our Team */}
      <Row className="text-center">
        <Col>
          <h2>Our Team</h2>
          <Row className="justify-content-center mt-4">
            <Col md={4} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="team-card">
                  <Card.Img
                    variant="top"
                    src={estherImage}
                    className="rounded-circle mx-auto d-block"
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>Esther Cole</Card.Title>
                    <Card.Text>Founder & CEO</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
            <Col md={4} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="team-card">
                  <Card.Img
                    variant="top"
                    src={supunImage}
                    className="rounded-circle mx-auto d-block"
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>Supun Chathuranga</Card.Title>
                    <Card.Text>Co-Founder & CTO</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;