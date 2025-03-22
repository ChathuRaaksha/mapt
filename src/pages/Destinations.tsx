import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Destination } from '../models/Destination';
import { DestinationService } from '../services/DestinationService';

const Destinations: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      const data = await DestinationService.getDestinations();
      setDestinations(data);
    };
    fetchDestinations();
  }, []);

  return (
    <Container className="py-5">
      <h1>Swedish Destinations</h1>
      <Row>
        {destinations.map((dest) => (
          <Col md={4} key={dest.id} className="mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <Card.Img variant="top" src={dest.imageUrl} />
                <Card.Body>
                  <Card.Title>{dest.name}</Card.Title>
                  <Card.Text>{dest.description}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Destinations;