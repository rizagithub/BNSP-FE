import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import './ListAplikasi.css';

const ListAplikasi = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState('');

  useEffect(() => {
    axios
      .get('https://bnsp-be-production.up.railway.app/api/v1/aplikasi')
      .then((response) => {
        setData(response.data.data.aplikasis);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleModal = (description) => {
    setSelectedDescription(description);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Container fluid className="top mt-4 mb-4" id='list-aplikasi' style={{ backgroundColor: '#FFCBCB' }}>
      <Container className="mt-4">
        <h4 className="mb-4 mt-2 text-center fw-bold">List Aplikasi Premium</h4>
        <Row>
          {data.map((aplikasi, index) => (
            <Col md={2} key={aplikasi.id} className="mb-4">
              <Card style={{ border: '2px solid #FF6969' }}>
                <Card.Img
                  style={{
                    width: '100%',
                    height: '100px',
                    objectFit: 'cover',
                    padding: '7px'
                  }}
                  variant="top"
                  src={aplikasi.image}
                />
                <Card.Body>
                  <Card.Title style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{aplikasi.name}</span>
                    <span style={{ color: '#FF6969', fontSize:'15px' }} className='fw-bold'>{aplikasi.code}</span>
                  </Card.Title>
                  <Card.Text>
                    <strong>Harga: </strong>Rp.{aplikasi.price}<br />
                    <div className="d-flex justify-content-between mt-2">
                        <Button className="pink-button btn-sm" onClick={() => handleModal(aplikasi.description)}
                        style={{ backgroundColor: '#FF6969', border: 'none' }}>
                         Lihat Detail
                        </Button>
                      <i>
                        <a
                          href={`https://wa.me/6285692398466?text=Hi%20saya%20mau%20beli%20${encodeURIComponent(aplikasi.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-cart-plus"></i>
                        </a>
                      </i>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

        <Modal show={showModal} onHide={handleClose} className="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title>Detail Aplikasi : </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedDescription}
          </Modal.Body>
          <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ backgroundColor: '#FF6969', borderColor: '#FF6969' }}
          >
            Tutup
          </Button>
          </Modal.Footer>
        </Modal>
    </Container>
  );
};

export default ListAplikasi;
