import { useEffect, useState } from "react";
import { Button, Modal, Form, Image } from "react-bootstrap";
import axios from "axios";

function FormUpdateAplikasi(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState ("");
  const [price, setPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [description,  setDescription] = useState("");
 
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () =>{
    setName(props.data.name);
    setCode(props.data.code);
    setPrice(props.data.price);
    setSelectedImage(props.data.selectedImage);
    setDescription(props.data.description);
  };

  useEffect(()=>{
    fetchData();
  },[props.data.id]);

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

      const response = await axios.put(
        `https://bnsp-be-production.up.railway.app/api/v1/aplikasi/${props.data.id}`,
        formData
      );

      window.location.reload();
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Failed to edit app data");
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
        className="btn-warning border-0 d-flex py-2 px-2 mb-4"
        onClick={handleShow}
      >
        <Image className="create-icon" src="/create-icon.svg" />
        <p className="text-white ms-1 mb-0">Edit</p>
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data Aplikasi</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          {/* modal untuk edit data */}
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

export default FormUpdateAplikasi;
