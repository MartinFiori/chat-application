import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "../Components/Chat/screen/Index";
import Register from "../Components/Register/screen/Index";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}
