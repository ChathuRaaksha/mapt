import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import midnight from '../assets/images/midnight-sun.jpg';
import northernlight from '../assets/images/northern-lights.jpg';
import fika from '../assets/images/fika.jpg';
const Inspiration: React.FC = () => {
  const inspirations = [
    {
      title: 'Midnight Sun Adventures',
      description: 'Experience Sweden’s magical summer nights',
      image: midnight
    },
    {
      title: 'Northern Lights Hunt',
      description: 'Chase the aurora in Swedish Lapland',
      image: northernlight
    },
    {
      title: 'Fika Culture',
      description: 'Discover the Swedish art of coffee breaks',
      image: fika
    }
  ];

  return (
    <Container className="inspiration-section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Travel Inspiration</h1>
        <p className="lead">Get inspired for your Swedish journey</p>
        
        <Row className="mt-4">
          {inspirations.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </Container>
  );
};

export default Inspiration;