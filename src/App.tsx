import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Destinations from './pages/Destinations';
import Planning from './pages/Planning';
import Inspiration from './pages/Inspiration';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.css';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/mapt"> 
      <div className="app">
        <NavbarComponent />
        <Container fluid className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/inspiration" element={<Inspiration />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App; 
