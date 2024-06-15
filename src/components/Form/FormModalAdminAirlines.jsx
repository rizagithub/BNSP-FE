import { useState } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";
import axios from "axios";

function FormModalAdminAirlines() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState ("");
  const [admin_name, setAdminName] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/inventory",
        {
          name,code,admin_name,type,year
        }
      );

      // Reset form field
      setName("");
      setCode("");
      setAdminName("");
      setType("");
      setYear("");
      setSuccessMessage("success to create airline");
      setError("");
      window.location.reload();
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Failed to create new inventory");
      }
      setSuccessMessage("");
    }

    setIsLoading(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="btn-primary border-0 d-flex py-2 px-2 mb-4"
        onClick={handleShow}
      >
        <Image className="create-icon" src="/create-icon.svg" />
        <p className="text-white ms-1 mb-0">New Data</p>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Inventory</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          {/* modal untuk input data */}
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Berkas 2020"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Code</Form.Label>
              <Form.Control
                type="number"
                placeholder="211232020"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Admin Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Riza"
                value={admin_name}
                onChange={(e) => setAdminName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type Data</Form.Label>
              <Form.Control
                type="text"
                placeholder="Document"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tahun</Form.Label>
              <Form.Control
                type="number"
                placeholder="2020"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              type="submit"
              onClick={handleClose}
              variant="primary"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default FormModalAdminAirlines;
