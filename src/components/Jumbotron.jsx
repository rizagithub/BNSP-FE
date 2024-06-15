import React, { useState, useEffect } from "react";
import { Image, Card, Container, Modal, Button, Row, Col } from "react-bootstrap";
import loginLogo from "/logo_diskominfo.png";
import Carousel from "./Carousel";
import banner from "/banner2.svg"

import "bootstrap/dist/css/bootstrap.min.css";
import "./Jumbotron.css";


const Jumbotron = () => {
  return (
    <>
    {/* <Container className="destinasi-fav position-relative d-flex flex-column mx-auto mb-0">
      <Row>
        <Col className="col-6 d-none d-md-block">
        <img
              src={loginLogo}
              alt="background"
              style={{
                width: "90%",
                maxHeight: "100vh", // Atur tinggi maksimal gambar agar sesuai dengan tinggi layar
                objectFit: "cover",
              }}
            />  
          <h2 className="mx-auto fw-bold pt-0 pb-0 text-center">WEBSITE ASSET DINAS KOMUNIKASI DAN INFORMATIKA</h2>
          <h2 className="mx-auto fw-bold pt-0 pb-0 text-center">KABUPATEN LAMONGAN</h2> 
          
        </Col>
          
        <Col className="col-6">
        <div className=" mt-5">
            
          <h5>
          Dinas Komunikasi dan Informatika (Diskominfo) Kabupaten Lamongan adalah salah satu unit kerja yang ada di bawah instansi
          Pemerintah Kabupaten Lamongan. Berdasarkan Peraturan Daerah Kabupaten Lamongan Nomor 11 Tahun 2021 tentang Perubahan Kedua
          Atas Peraturan Daerah Nomor 5 Tahun 2016 tentang Pembentukan dan Susunan Perangkat Daerah Kabupaten Lamongan,
          Diskominfo Kabupaten Lamongan menyelenggarakan urusan pemerintahan bidang komunikasi dan informatika serta
          bidang persandian dan statistik. Berdasarkan Peraturan Bupati Lamongan Nomor 79 Tahun 2021 tentang Kedudukan, Susunan Organisasi,
          Tugas dan Fungsi serta Tata Kerja Dinas Komunikasi dan Informatika Kabupaten Lamongan, Diskominfo Kabupaten Lamongan merupakan unsur
          pelaksana urusan pemerintahan daerah di bidang komunikasi dan informatika serta persandian dan statistik.
          Diskominfo Kabupaten Lamongan dipimpin oleh seorang Kepala Dinas yang berada di bawah dan bertanggung jawab kepada Bupati
          melalui Sekretaris Daerah.</h5>
          </div> 
        
        </Col>
      </Row>
    </Container> */}

    <div className="d-flex banner2">
      <Image className="banner" src={banner} alt="banner" />
    </div>
    <Container>
    <div className="mt-5">
            
            <h4 className="text-center">
            Dinas Komunikasi dan Informatika (Diskominfo) Kabupaten Lamongan adalah salah satu unit kerja yang ada di bawah instansi
            Pemerintah Kabupaten Lamongan. Berdasarkan Peraturan Daerah Kabupaten Lamongan Nomor 11 Tahun 2021 tentang Perubahan Kedua
            Atas Peraturan Daerah Nomor 5 Tahun 2016 tentang Pembentukan dan Susunan Perangkat Daerah Kabupaten Lamongan,
            Diskominfo Kabupaten Lamongan menyelenggarakan urusan pemerintahan bidang komunikasi dan informatika serta
            bidang persandian dan statistik. Berdasarkan Peraturan Bupati Lamongan Nomor 79 Tahun 2021 tentang Kedudukan, Susunan Organisasi,
            Tugas dan Fungsi serta Tata Kerja Dinas Komunikasi dan Informatika Kabupaten Lamongan, Diskominfo Kabupaten Lamongan merupakan unsur
            pelaksana urusan pemerintahan daerah di bidang komunikasi dan informatika serta persandian dan statistik.
            Diskominfo Kabupaten Lamongan dipimpin oleh seorang Kepala Dinas yang berada di bawah dan bertanggung jawab kepada Bupati
            melalui Sekretaris Daerah.</h4>
      </div> 
    </Container>
    
    </>
  );
};

export default Jumbotron;
