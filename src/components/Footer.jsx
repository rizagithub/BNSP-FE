import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative">
      <Container className="footer-top">
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <div className="footer-about">
              <div className="logo sitename" style={{ color:"#FF6969" }}>Primapps!</div>
              <div className="footer-contact pt-3">
                <p className='text-white'>Jl. Pendidikan No.02</p>
                <p className='text-white'>Kota Lamongan, Jawa Timur 63357</p>
                <p className="mt-3 text-white"><strong>Phone:</strong> <span>+62 8569 2398 466</span></p>
                <p className='text-white'><strong>Email:</strong> <span>riza@gmail.com</span></p>
              </div>
              <div className="social-links d-none d-md-flex align-items-center mt-2">
                <div className="twitter mx-1"><i className="bi bi-twitter-x"></i></div>
                <div className="facebook mx-1"><i className="bi bi-facebook"></i></div>
                <div className="instagram mx-1"><i className="bi bi-instagram"></i></div>
                <div className="linkedin mx-1"><i className="bi bi-linkedin"></i></div>
              </div>
            </div>
          </Col>

          <Col lg={2} md={3} className="footer-links">
            <h4 className='h4-title'>Useful Links</h4>
            <ul>
              <li><a href="#" className='text-white'>Home</a></li>
              <li><a href="#" className='text-white'>About us</a></li>
              <li><a href="#" className='text-white'>Services</a></li>
              <li><a href="#" className='text-white'>Terms of service</a></li>
              <li><a href="#" className='text-white'>Privacy policy</a></li>
            </ul>
          </Col>

          <Col lg={2} md={3} className="footer-links">
            <h4 className='h4-title'>Our Services</h4>
            <ul>
              <li><a href="#" className='text-white'>Web Design</a></li>
              <li><a href="#" className='text-white'>Web Development</a></li>
              <li><a href="#" className='text-white'>Product Management</a></li>
              <li><a href="#" className='text-white'>Marketing</a></li>
              <li><a href="#" className='text-white'>Graphic Design</a></li>
            </ul>
          </Col>

          <Col lg={4} md={12} className="footer-newsletter">
            <h4 className='h4-title'>Our Newsletter</h4>
            <p className='text-white'>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <Form action="forms/newsletter.php" method="post" className="php-email-form">
              <div className="newsletter-form">
                <Form.Control type="email" name="email" placeholder="Your Email" />
                <Button type="submit" className='btn btn-danger'>Subscribe</Button>
              </div>
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your subscription request has been sent. Thank you!</div>
            </Form>
          </Col>
        </Row>
      </Container>

      <Container className="copyright text-center mt-4">
        <p className='text-white'>© <span className='text-white'>Copyright</span> <strong className="px-1 sitename text-white">Primapps</strong> <span className='text-white'>All Rights Reserved</span></p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">Rizatul Mas Ulah</a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
