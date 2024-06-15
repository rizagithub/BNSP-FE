import React, { useEffect, useState } from "react";
import { Navbar, Image, Dropdown, Card, Col,Row, Container } from "react-bootstrap";
import { Link, useNavigate, Navigate } from "react-router-dom";
import PieChart from "../components/Chart";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import axios from "axios";

import "./Admin.css";

function Admin() {
  const [admin, setAdmin] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const token = localStorage.getItem("token");
  useEffect(() => {
    // Get all admin
    axios
      .get("https://bnsp-be-production.up.railway.app/api/v1/admin")
      .then((response) => {
        setAdmin(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Get all data inventory
    // axios
    //   .get("http://localhost:8000/api/v1/inventory")
    //   .then((response) => {
    //     setInventory(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    const token = localStorage.getItem("token");
    const userEmail = localStorage.getItem("userEmail");

    if (token) {
      setIsLoggedIn(true);
    }

    if (userEmail) {
      setUserEmail(userEmail);
    }
  }, []);

  const navigateTo = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    navigateTo("/");
  };

  return (
    <>
      {token ? (
        <div>
          <div className="d-flex">
            {/* Sidebar */}
            <div className="side-bar-admin col-2 bg-body-tertiary shadow">
              <Image
                className="side-bar-admin__logo"
                src="/long.png"
              />
              <div className="mt-4">
                <Link to="/admin" className="text-decoration-none">
                  <div className="side-bar-admin__list side-bar-admin__selected d-flex align-items-center py-3 px-4 mb-1">
                    <Image
                      className="side-bar-admin__icon"
                      src="dashboard-icon.svg"
                      style={{
                        filter:
                          "invert(100%) sepia(0%) saturate(0%) hue-rotate(325deg) brightness(104%) contrast(101%)",
                      }}
                    />
                    <h5 className="ms-2 mb-0">Dashboard</h5>
                  </div>
                </Link>
                <Link to="/admin-users" className="text-decoration-none">
                  <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                    <h5 className="ms-2 mb-0"> All Users</h5>
                  </div>
                </Link>

                <Link to="/admin-aplikasi" className="text-decoration-none">
                  <div className="side-bar-admin__list text-dark d-flex align-items-center py-3 px-4 mb-1">
                    <h5 className="ms-2 mb-0">Data Aplikasi</h5>
                  </div>
                </Link>
              </div>
            </div>

            {/* Container */}
            <div className="col-10">
              <Navbar.Collapse className="navbar-admin Container d-flex p-4">
                <h4 className="me-auto mb-0">Primapps Admin Dashboard</h4>
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
                <h5 className="mb-3" style={{color:'#FF6969' }}>Welcome, {userEmail}</h5>
                <div>
                  <Container fluid>
                    <Row className="">
                      <Col md={3} className="">
                        <Card style={{ width: '15rem' }}>
                          <Card.Body>
                            <PieChart />
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6} className="">
                        <Card style={{ width: '30rem', height:'15rem' }}>
                          <Card.Body>
                            <BarChart />
                          </Card.Body>
                        </Card>
                      </Col>
                      {/* <Col md={6} className="mt-3">
                        <Card style={{ width: '30rem',height:'15rem' }}>
                          <Card.Body>
                            <LineChart />
                          </Card.Body>
                        </Card>
                      </Col> */}
                    </Row>
                  </Container>
                </div>
                {/* <div className="main-admin d-flex flex-wrap mt-4">
                  <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-4">
                    <div className="d-flex p-4 pb-2">
                      <Image
                        className="main-admin__icon col-4"
                        src="users-icon.svg"
                      />
                      <div className="col-8 ms-4">
                        <h4 className="mb-0">All Users</h4>
                        <p className="mb-0">
                          {admin.data?.adminData?.length} Admin
                        </p>
                      </div>
                    </div>
                    <Link to="/admin-users" className="text-decoration-none">
                      <p className="text-dark bg-info-subtle text-center mb-0 py-1">
                        Lihat Detail
                      </p>
                    </Link>
                  </div>
                  <div className="main-admin__card bg-warning-subtle shadow rounded-3 me-2 mb-4">
                    <div className="d-flex p-4 pb-2">
                      <Image
                        className="main-admin__icon col-4"
                        src="airlines-icon.svg"
                      />
                      <div className="col-8 ms-4">
                        <h4 className="mb-0">All Data</h4>
                        <p className="mb-0">
                          {inventory.data?.inventoryData?.length} Inventory
                        </p>
                      </div>
                    </div>
                    <Link to="/admin-inventory" className="text-decoration-none">
                      <p className="text-dark bg-info-subtle text-center mb-0 py-1">
                        Lihat Detail
                      </p>
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}

export default Admin;
