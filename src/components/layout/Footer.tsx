import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="footer"
    >
      <Container>
        <Row className="py-4">
          <Col md={4}>
            <h5>iTer</h5>
            <p>"Explore Sweden, Your Way"</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/destinations" className="text-white">Destinations</a></li>
              <li><a href="/planning" className="text-white">Planning</a></li>
              <li><a href="/inspiration" className="text-white">Inspiration</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: info@itertravel.com</p>
            <p>Phone: +46 123 456 789</p>
          </Col>
        </Row>

        <Row className="py-4 border-top">
          <Col md={6}>
            <h5>Subscribe to iTer</h5>
            <p>
              Join our newsletter for exclusive travel inspiration, Swedish adventures, 
              and European dream destinations from iTer.
            </p>
            <Form onSubmit={handleSubmit} className="d-flex">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="me-2"
                required
              />
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
          <Col md={6} className="text-md-end mt-4 mt-md-0">
            <h5>Follow Us</h5>
            <div>
              <a
                href="https://facebook.com/iTer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
               <>{FaFacebook({ size: 24 })}</>
              </a>
              <a
                href="https://instagram.com/iTer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <>{FaInstagram({ size: 24 })}</>
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center py-3">
            <p>© {new Date().getFullYear()} iTer. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};

export default Footer;