import { useState } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";
import axios from "axios";

function FormAddAplikasi() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState ("");
  const [price, setPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [description,  setDescription] = useState("");
 
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("name",name);
      formData.append("code",code);
      formData.append("price",price);
      formData.append("image",selectedImage);
      formData.append("description",description);

      const response = await axios.post(
        "https://bnsp-be-production.up.railway.app/api/v1/aplikasi",
        formData
      );

      // Reset form field
      setName("");
      setCode("");
      setPrice("");
      setSelectedImage(null);
      setDescription("");
      setSuccessMessage("success to create new app data");
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
        setError("Failed to create new app data");
      }
      setSuccessMessage("");
    }

    setIsLoading(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleImageChange = (e) =>{
    setSelectedImage(e.target.files[0]);
  };

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
          <Modal.Title>Create New Data Aplikasi</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          {/* modal untuk input data */}
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Discord"
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
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="integer"
                placeholder="20000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="lorem ipsum"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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

export default FormAddAplikasi;
