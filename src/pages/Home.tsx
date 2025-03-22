import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/images/sweden-hero.jpg';

const Home: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate here

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleStartPlanning = () => {
    navigate('/planning'); // Now navigate is defined
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <Container className="py-5">
        <Row className="text-center text-white">
          <Col>
            <motion.h1 variants={itemVariants}>
              Discover Sweden Your Way
            </motion.h1>
            <motion.p variants={itemVariants} className="lead">
              Personalized travel experiences tailored to your preferences
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button
                variant="primary"
                size="lg"
                onClick={handleStartPlanning}
              >
                Start Planning
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Home;