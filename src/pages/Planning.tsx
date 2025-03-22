import React, { useState, ChangeEvent } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Planning: React.FC = () => {
  const [formData, setFormData] = useState({
    destination: '',
    travelDate: '',
    preferences: ''
  });

  // Updated handleChange to handle different HTML element types
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Planning submitted:', formData);
  };

  return (
    <Container className="planning-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Plan Your Swedish Adventure</h1>
        <p className="lead">Tell us your preferences, and we'll craft your perfect trip!</p>
        
        <Row className="mt-4">
          <Col md={8} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Preferred Destination</Form.Label>
                <Form.Select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                >
                  <option value="">Select a destination</option>
                  <option value="stockholm">Stockholm</option>
                  <option value="goteborg">Göteborg</option>
                  <option value="uppsala">Uppsala</option>
                  <option value="orebro">Örebro</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Travel Date</Form.Label>
                <Form.Control
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Your Preferences</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="preferences"
                  value={formData.preferences}
                  onChange={handleChange}
                  placeholder="Tell us what you enjoy (culture, nature, food, etc.)"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Create My Plan
              </Button>
            </Form>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default Planning;