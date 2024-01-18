import React from "react";

// libs
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Chat from "../Components/Chat/screen/Index";
import Register from "../Components/Register/screen/Index";
import Login from "../Components/LogIn/screen/Index";

// Layout
import Layout from "./Layouts/Layout";
import LayoutPrivadas from "./Layouts/LayoutPrivadas";

// useContext
import { AuthProvider } from "../Context/AuthContext";

export default function Rutas() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
          </Route>
          <Route exact path="/" element={<LayoutPrivadas />}>
            <Route exact path="/chat" element={<Chat />} />
          </Route>
          <Route path="/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
