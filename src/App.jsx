import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Form/FormRegister';
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Admin from "./pages/Admin";
import AdminUsers from "./pages/AdminUsers";
import AdminAirlines from "./pages/AdminAirlines";
import AdminAplikasi from './pages/AdminAplikasi';
import NotFoundPage from "./pages/NotFoundPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-users" element={<AdminUsers />} />
          <Route path="/admin-inventory" element={<AdminAirlines />} />
          <Route path="/admin-aplikasi" element={<AdminAplikasi />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
