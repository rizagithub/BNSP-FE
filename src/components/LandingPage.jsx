// import React from 'react';
// import { Col, Row } from 'react-bootstrap';
// import { BiCheckCircle } from 'react-icons/bi'; // Import dari react-icons untuk icon BiCheckCircle
// import "./LandingPage.css";

// const LandingPage = () => {
//   return (
//     <div className="container hero-title">
//       <Row>
//         <Col className="d-flex justify-content-center align-items-center">
//           <img 
//             src="./public/images/icon-flower.png" 
//             className="img-landing" 
//             alt="Logo Icon Flower"
//           />
//         </Col>
//         <Col>
//           <h1 className='text-dark ms-3'>Welcome To the
//             <span>
//             <img src="./public/images/long.png" className="img-title ms-2" alt="Logo Icon Flower Long" />
//             </span>
//           </h1>
//           <h5 className="fst-italic ms-3 mb-3" style={{ color: '#FF6969' }}>Anything you want for Apps!</h5>
//           <ul>
//             <li className='mb-3'><BiCheckCircle /> <span>penyedia aplikasi premium paling lengkap dengan harga terjangkau.</span></li>
//             <li className='mb-3'><BiCheckCircle /> <span>proses cepat dengan beragam metode pembayaran.</span></li>
//             <li className='mb-3'><BiCheckCircle /> <span>penawaran solusi untuk kebutuhan aplikasi anda.</span></li>
//           </ul>
//         </Col>  
//       </Row>
//       {/* <div className='d-flex justify-content-center'>
//         <img src="./public/images/flower-long.png" className="img-list" alt="Logo Icon Flower Long" />
//         <img src="./public/images/flower-long.png" className="img-list" alt="Logo Icon Flower Long" />
//         <img src="./public/images/flower-long.png" className="img-list" alt="Logo Icon Flower Long" />
//         <img src="./public/images/flower-long.png" className="img-list" alt="Logo Icon Flower Long" />

//         <img src="./public/images/flower-long.png" className="img-list" alt="Logo Icon Flower Long" />
//       </div> */}
    
//     </div>
//   );
// };

// export default LandingPage;

import React from 'react';
import { Col, Row, Carousel,Image } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { BiCheckCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container hero-title">
      <Row className="flex-column-reverse flex-lg-row">
      <Col lg={6} className="d-flex justify-content-center align-items-center">
        <Carousel className='crs'>
          <Carousel.Item>
            <img
              className="d-block img-landing"
              src="/images/menu.jpg" // Ganti dengan path gambar slide 1
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-landing"
              src="/images/menu.jpg" // Ganti dengan path gambar slide 2
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-landing"
              src="/images/menu.jpg" // Ganti dengan path gambar slide 3
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
        <Col lg={6}>
          <h1 className='text-dark ms-3'>Welcome To the Primapps!
            {/* <span>
            <img src="/images/long.png" className="img-title ms-2" alt="Logo Icon Flower Long" />
            </span> */}
          </h1>
          <h5 className="fst-italic ms-3 mb-3" style={{ color: '#FF6969' }}>Anything you want for Apps!</h5>
          <ul>
            <li className='mb-3'><BiCheckCircle /> <span>penyedia aplikasi premium paling lengkap dengan harga terjangkau.</span></li>
            <li className='mb-3'><BiCheckCircle /> <span>proses cepat dengan beragam metode pembayaran.</span></li>
            <li className='mb-3'><BiCheckCircle /> <span>penawaran solusi untuk kebutuhan aplikasi anda.</span></li>
            <li className='mb-3'><BiCheckCircle /> <span>dapatkan aplikasi terbaik dengan kualitas premium untuk keluarga.</span></li>
          </ul>
          <Link to="/admin/register">
                    <button
                      className="btn btn-outline-danger btn-md ms-3 mt-3"
                      type="submit"
                    > Join Now
                    </button>
                  </Link>
        </Col>  
      </Row>
      {/* <div className='mt-2 swiper-slide container-fluid'>
      <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 20 },
              480: { slidesPerView: 3, spaceBetween: 30 },
              640: { slidesPerView: 4, spaceBetween: 40 },
              992: { slidesPerView: 6, spaceBetween: 60 },
            }}
          >
            <SwiperSlide><img src="/images/long.png" className="img-fluid" alt="Client 1" /></SwiperSlide>
            <SwiperSlide><img src="/images/long.png" className="img-fluid" alt="Client 2" /></SwiperSlide>
            <SwiperSlide><img src="/images/long.png" className="img-fluid" alt="Client 3" /></SwiperSlide>
            <SwiperSlide><img src="/images/long.png" className="img-fluid" alt="Client 4" /></SwiperSlide>
            <SwiperSlide><img src="/images/long.png" className="img-fluid" alt="Client 5" /></SwiperSlide>
            <SwiperSlide><img src="/images/long.png" className="img-fluid" alt="Client 6" /></SwiperSlide>
            <SwiperSlide><img src="/images/long.png" className="img-fluid" alt="Client 1" /></SwiperSlide>
            <SwiperSlide><img src="/images/long.png" className="img-fluid" alt="Client 2" /></SwiperSlide>
            <SwiperSlide><img src="/images/long.png" className="img-fluid" alt="Client 3" /></SwiperSlide>
            <SwiperSlide><img src="/images/long.png" className="img-fluid" alt="Client 4" /></SwiperSlide>
            <SwiperSlide><img src="/images/long.png" className="img-fluid" alt="Client 5" /></SwiperSlide>
            <SwiperSlide><img src="/images/long.png" className="img-fluid" alt="Client 6" /></SwiperSlide>
          </Swiper>
      </div> */}
    </div>
  );
};

export default LandingPage;

