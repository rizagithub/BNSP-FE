import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Container>
      <style>
        {`
          .available-product-container {
            text-align: center;
            margin-top: 20px;
          }
          
          .available-product-heading {
            font-family: 'Playfair Display', serif;
            font-size: 2em;
            font-weight: bold;
            color: #333;
          }
        `}
      </style>
        <h2 className="available-product-heading text-center">
          <i className="fas fa-box-open"></i> Available Product
        </h2>
        <p className='text-center'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        <Row className="mt-4 mb-5" >
            {/* Portfolio Item 1 */}
            <Col lg={3} md={6} className="portfolio-item isotope-item filter-app mt-4">
              <img src="assets/img/about/c-youtube.jpeg" className="img-fluid" alt="" style={{ height: '300px', objectFit: 'cover' }} />
            </Col>
            {/* End Portfolio Item 1 */}

            {/* Portfolio Item 2 */}
            <Col lg={3} md={6} className="portfolio-item isotope-item filter-product mt-4">
              <img src="assets/img/about/c-canva.jpeg" className="img-fluid" alt="" style={{ height: '300px', objectFit: 'cover' }} />
            </Col>
            {/* End Portfolio Item 2 */}

            {/* Portfolio Item 3 */}
            <Col lg={3} md={6} className="portfolio-item isotope-item filter-branding mt-4">
              <img src="assets/img/about/c-am.jpeg" className="img-fluid" alt="" style={{ height: '300px', objectFit: 'cover' }} />
            </Col>
            <Col lg={3} md={6} className="portfolio-item isotope-item filter-branding mt-4">
              <img src="assets/img/about/c-tiktok.jpeg" className="img-fluid" alt="" style={{ height: '300px', objectFit: 'cover' }} />
            </Col>
            {/* End Portfolio Item 3 */}


            {/* Portfolio Item 4 */}
            <Col lg={3} md={6} className="portfolio-item isotope-item filter-app mt-4">
              <img src="assets/img/about/c-capcut.jpeg" className="img-fluid" alt="" style={{ height: '300px', objectFit: 'cover' }} />
            </Col>
            {/* End Portfolio Item 4 */}

            {/* Portfolio Item 5 */}
            <Col lg={3} md={6} className="portfolio-item isotope-item filter-product mt-4">
              <img src="assets/img/about/c-dc.jpeg" className="img-fluid" alt="" style={{ height: '300px', objectFit: 'cover' }} />
            </Col>
            {/* End Portfolio Item 5 */}

            {/* Portfolio Item 6 */}
            <Col lg={3} md={6} className="portfolio-item isotope-item filter-branding mt-4">
              <img src="assets/img/about/c-shopee.jpeg" className="img-fluid" alt="" style={{ height: '300px', objectFit: 'cover' }} />
            </Col>
            {/* End Portfolio Item 6 */}

            {/* Portfolio Item 7 */}
            <Col lg={3} md={6} className="portfolio-item isotope-item filter-app mt-4">
              <img src="assets/img/about/c-snapchat.jpeg" className="img-fluid" alt="" style={{ height: '300px', objectFit: 'cover' }} />
            </Col>
            <Col lg={3} md={6} className="portfolio-item isotope-item filter-app mt-4">
              <img src="assets/img/about/c-spotify.jpeg" className="img-fluid" alt="" style={{ height: '300px', objectFit: 'cover' }} />
            </Col>
            <Col lg={3} md={6} className="portfolio-item isotope-item filter-app mt-4">
              <img src="assets/img/about/c-tiktok.jpeg" className="img-fluid" alt="" style={{ height: '300px', objectFit: 'cover' }} />
            </Col>
            <Col lg={3} md={6} className="portfolio-item isotope-item filter-app mt-4">
              <img src="assets/img/about/c-twitter.jpeg" className="img-fluid" alt="" style={{ height: '300px', objectFit: 'cover' }} />
            </Col>
            <Col lg={3} md={6} className="portfolio-item isotope-item filter-app mt-4">
              <img src="assets/img/about/c-wattpad.jpeg" className="img-fluid" alt="" style={{ height: '300px', objectFit: 'cover' }} />
            </Col>       
          </Row>
      </Container>
    </>
  );
};

export default About;
