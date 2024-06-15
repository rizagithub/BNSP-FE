import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (error) {
      setShowError(true);
      timer = setTimeout(() => {
        setError('');
        setShowError(false);
      }, 3000); // Show error for 3 seconds
    }
    return () => clearTimeout(timer);
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://bnsp-be-production.up.railway.app/api/v1/admin/register', { name, email, password });
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Failed to register');
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <style>
        {`
          .register-container {
            background-color: #f8f9fa;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          .register-form .form-label {
            font-weight: bold;
            display: flex;
            align-items: center;
          }

          .register-form .form-label svg {
            margin-right: 8px;
          }

          .register-button {
            background-color: #FF6969;
            border: none;
          }

          .register-button:hover {
            background-color: #ff5a5a;
          }
        `}
      </style>
      <Row className="register-container">
        <Col md={12}>
          <h2 className="text-center mb-4">Register</h2>
          {showError && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} className="register-form">
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label><FaUser /> Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label><FaEnvelope /> Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label><FaLock /> Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button type="submit" className="w-100 register-button">
              Register
            </Button>
          </Form>

          <div className="text-center mt-3">
            <p>Already have an account? <Link to="/login">Login here</Link></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;