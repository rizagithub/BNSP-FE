import React, { useEffect, useState } from "react";
import { Navbar, Image, Button, Dropdown, Modal } from "react-bootstrap";
import { Link, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";
import FormAddAplikasi from "../components/Form/FormAddAplikasi";
import FormUpdateAplikasi from "../components/Form/FormUpdateAplikasi";


import FormModalUpdateAdminAirlines from "../components/Form/FormModalUpdateAdminAirlines"

import "./AdminInventory.css";

function AdminAplikasi() {
  const [data, setData] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleteAplikasiId, setDeleteAplikasiId] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://bnsp-be-production.up.railway.app/api/v1/aplikasi")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Data:", error);
      });
  }, []);

  const navigateTo = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigateTo("/");
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`https://bnsp-be-production.up.railway.app/api/v1/aplikasi/${deleteAplikasiId}`);
      setIsDeleted(true);
      console.log("Data aplikasi berhasil dihapus");
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleShow = (aplikasiId) => {
    setDeleteAplikasiId(aplikasiId);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setDeleteAplikasiId(null);
  };

  if (isDeleted) {
    return null;
  }

  return (
    <>
      {token ? (
        <div>
          <div className="d-flex">
             <div className="side-bar-admin col-2 bg-body-tertiary shadow">
              <Image
                className="side-bar-admin__logo"
                src="/long.png"
              />
              <div className="mt-4">
                <Link to="/admin" className="text-decoration-none">
                  <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                    <h5 className="ms-2 mb-0">Dashboard</h5>
                  </div>
                </Link>

                <Link to="/admin-users" className="text-decoration-none">
                  <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                    <h5 className="ms-2 mb-0">All Users</h5>
                  </div>
                </Link>
                <Link to="/admin/aplikasi" className="text-decoration-none">
                  <div className="side-bar-admin__list side-bar-admin__selected d-flex align-items-center py-3 px-4 mb-1">
                    <Image
                      className="side-bar-admin__icon"
                      src="dashboard-icon.svg"
                      style={{
                        filter:
                          "invert(100%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(104%) contrast(101%)",
                      }}
                    />
                    <h5 className="ms-2 mb-0">Data Aplikasi</h5>
                  </div>
                </Link>
              </div>
             </div>
            <div className="col-10">
              <Navbar.Collapse className="navbar-admin Container d-flex p-4">
                <h4 className="me-auto mb-0">Aplikasi Premium Primapps!</h4>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="transparent"
                    id="dropdown-basic"
                    className="border-0"
                  >
                    <Image src="/fi_user_org.svg" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className="btn bg-danger"
                    onClick={handleLogout}
                  >
                    <Dropdown.Item className="bg-danger text-white text-center">
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Navbar.Collapse>
              <div className="container p-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                      <Link
                        to="/admin"
                        className="text-decoration-none text-dark fw-bold d-flex align-items-center"
                      >
                        <Image
                          className="breadcrumb__img me-1"
                          src="dashboard-icon.svg"
                        />{" "}
                        Dashboard
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Data Aplikasi
                    </li>
                  </ol>
                </nav>

                <div>
                  <h4 className="mb-4">Data List</h4>
                  <FormAddAplikasi />
                  <table className="table table-striped-columns">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.data?.aplikasis.map((aplikasi, index) => (
                        <tr key={aplikasi.id}>
                          <td>{index + 1}</td>
                          <td>{aplikasi.name}</td>
                          <td>{aplikasi.code}</td> 
                          <td>{aplikasi.price}</td> 
                          <td>{aplikasi.image}</td> 
                          <td>{aplikasi.description}</td> 
                          <td>
                            <div className="d-flex">
                              <FormUpdateAplikasi data={aplikasi} />
                              <Button
                                className="btn-danger border-0 d-flex py-2 px-2 mb-4 ms-1"
                                onClick={() => handleShow(aplikasi.id)}
                              >
                                <Image
                                  className="create-icon"
                                  src="/delete-icon.svg"
                                />
                                <p className="text-white ms-1 mb-0">Delete</p>
                              </Button>
                            </div>
                          </td>                       
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Modal show={showModal} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="text-center">
                <Image
                  src="delete-icon.svg"
                  alt="delete icon"
                  className="col-2 mb-2"
                  style={{
                    filter:
                      "invert(59%) sepia(8%) saturate(14%) hue-rotate(321deg) brightness(87%) contrast(90%)",
                    opacity: "30%",
                  }}
                />
                <p className="mb-0">
                  Are you sure you want to delete this aplications data?
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                className="btn-delete"
                variant="danger"
                onClick={confirmDelete}
              >
                Deleteddd
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default AdminAplikasi;
