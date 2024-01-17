import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "../Components/Chat/screen/Index";
import Register from "../Components/Register/screen/Index";
import { AuthProvider } from "../Context/AuthContext";
import Layout from "./Layouts/Layout";

export default function Rutas() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route exact path="/register" element={<Register />} />
            <Route
              path="/login"
              element={
                <>
                  <h1>hola</h1>
                </>
              }
            />
            <Route exact path="/" element={<Chat />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
